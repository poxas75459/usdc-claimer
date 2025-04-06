/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3dmmzYPh9KE7Bf8yQxMRYRpKtKpcFxmoniTGE1XCx7mUsZYTokHHRXB2DFDHw4vgEMvUW9Z36aeyhuRt7dYV26sL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qENgMKU4bS8RZCux97iu2CWP6pUstKJ5jVCh78YmABHWpt6sSbH9CVJCk7LYi8yjiGPu59ekrY1deJJhKWpqWgf",
  "key1": "5XHUyG3B2f3b8BijffYydo73deiphSBj1vFTQBCh4Z5fYuWPfSm6Rrap6WGGTTNQ29RffjAQ983FSpv3Yvx4FVcP",
  "key2": "3gZB5gevSPegwv7jYqvGhRxFE43QogFecMTNGnKay6dyTUDMvERKUtN8XaJqRY4CPXnCxYxzCh1GMrewDpCPENg9",
  "key3": "3ETfJKwUn68ubPGnHKEq6oishsZgvo4jVk56FdUmqFbmVPbVye28bcqMK6tn5RoiCDKpEnEgK2QPZm2uXykhMhmk",
  "key4": "5CTV47RdBLyuhYbV9LQZuuezXs4r8tWPaZDo3UTPgLMayGKS8vnL8zyrHmHjEegfj37dE1zfGrVTvfNT2cHAyFiR",
  "key5": "2rYNMzRK8chhJVn8JPL1pkbWzgdhznRz8MUMpJrxt69GWaasafQ4JgQfBvTSZyBvooTB2jE8q6oU8tYZZqa8PUsm",
  "key6": "4MuLhimVds5z9on3NTqtxSdDkEjbDveQMyCGvskD1szvuJmXR1hNeFxt7sr11zzXeaBdriMsrrNh7SMD8Me1ss8c",
  "key7": "4wbBan15mdUH5QcWFubscu9aoSRvxb1j6VtJNfSnRdYKGM9CfXQzEREkFq9XuBGHHrHBxTgEUfmRBayHqD9YsoGA",
  "key8": "5KH2sGA1G9DbqTsJMudfPqWWLLqCSC1Xy2B1GmdxnMyA9ZVS92dPzxpH36eVdcZ6JHY7v1DXHMsiieX1Vw3TQC94",
  "key9": "5wSftTCQRxmxrKr5NMSyyCJPBCZhQo4tkCyYhuiSnKtnRhgFscBRmwoSsK6MBAjjUxnweoDou5CheA7wurfXZArw",
  "key10": "5kSkP3awWTRajcCVjAC1tBzvEv3RnGbJraVgmWC4rK4uj6y3qZiBWfAzdJHVBPz6NNS5vYTxV6dH5QCaxph3LNDA",
  "key11": "3Uc359HgRkiHNiASwgHnKK5qcqnpsWJ2nTSK5MdPrYRdnokZrMwYdTbd9Jrbp4gDfRWWtsyrh4TCJBQXEMTs6FjT",
  "key12": "k63TTqGTUReG6nJKRLQsdvhRohf7c1LedqHrVdubtZKeiBYkowPGJsSVEN9gXRCKf1PFgHSndGGuKA7TWAuQ35L",
  "key13": "3Mht9CBUeSsdFeANaLkwEZRxiXJBvkrXbthTTK9EHsPUpEohcN6NzJ2j47BdXYzEw7USGFvJ1G8ZYNh8LY3kL2Kv",
  "key14": "5u3VNJ28yUrRppfBpn5UjFxbZL8g2MtCA9ZaBt7dg9yuzBqfVDzNpwgjdw2uzAik4R179hwJAa7TLHxRUXxvhXeN",
  "key15": "2rgxLoAXmccW47XawPLjvcpKG6XsLGV4PsK6tR5VtnfJBeftKjZqxgNQj3Tx6rr7CiDGcEheWokr8SCL1JDg4829",
  "key16": "4YC9rrVYXUnCGdzmzn5dyRG2PaSS7EUvrty425hsaexFUd7XtDxrTUueX2RmctMgr54gJ4DEG6UowEm9GzdHvjBq",
  "key17": "4wmGTJbU81swhEdooapeiiCRctdWZwohaiWmH5vM6xaCncesrzW6TDDWVmVrcen2nMn3FBaQRfHePQefrHWxDusn",
  "key18": "5rGA5eDi6caTVnP4kDQ8UoB1FgMKzQfT4P9XHPxH5K4TnTAb3MZ8XzbS5QaAbzWAd2fzmG7HXuKXwY6ZmGc6Mj35",
  "key19": "2LwXahyjiuVfsnaHJigxJCA7HfqDpEsxa1yKQUKhX5WqMkLUtrL4yG3qbPyNBxZbSThcUNN7BsUbLV129J5i23tm",
  "key20": "5WtRy3E7c8sTm7UKJqBvNTqo6QGc2BQdzFoFxyhgg334BK12P6tL6wbEgcLu1nRvN8f7Hcye2TEYGZUkNMGhQSYf",
  "key21": "4ULFBrQwvKioa34f3gw9zipxXC7GHbszqbg2WK11AkLp2bL8DR4hy3en9oQRWzBASr7LdtqDPoZnEHQ4rZBzDUc9",
  "key22": "4adwg1GSCvUHNBucg6nUqvunpA9znf3V1STRM2QHkuvEvRCXhJzXDd8P1aDS344Xvnk7S13nYTiusoD2wXdYoG32",
  "key23": "K88mVbRmvdfiecuFKDMT4UuEzbjsdHcbvnfCh8D71vVrgLUEEygQ3P5FXZ7a7kniLYW947kTHXt5wLJ2ZNsL7Ls",
  "key24": "4rgFLFQE4Zz1qZZWsxG6kgtCsMaMpKEELYh6y35fk5MsvTW5njVznGadoxjXqKNiXQehZ9De7dn8Eg9iKXS728EN",
  "key25": "5RhUoJtgfsZ9N63FLj4qa4YSziXFNgKar2iU2VckXA6E9NgKEZj9cRm6aU1PYKcK5cTwjyucjX8eJta5NAV5ssd9",
  "key26": "238zMBL1jsHeQhRZTNZB9faLui3zBGEfMNNT2uZ912GDh1nudCPGRCnVcSV1WQ9bKhQYTfbjJFYKkKq83vUEN98n",
  "key27": "3Q7DUo5FPj8pU6vAdjae8dr6NeE6LWVLAUzNCCwMoK6Acw6Yb2op3voTYbqKsgkurArNi1oiagWZqhvcNHdxXE7K",
  "key28": "3wtVs26YQhtAzMKvNXGVoqaQmpt2rJmJ54AiJ12unF8A4R9qiCbkUHKZ8SbBLvwWdWPFzofLmSB8zGMZVQL6uXDM",
  "key29": "2ope8wXwXaJLyczG48XfFhYvp1TJUjCNf6vSJWfrdihXxseciZgRr7vmGaW4V6c7Lbua5ut7ByvDSEUtG82GiAKN",
  "key30": "4Cn5VcnAj2Kd4NAfu6BpP3ijpvhG8DbbNDwo9JtrcUPjEPkJokcPWgoewjBwDSUf4hizKhNLuA3FGwCXRn4tW8t2",
  "key31": "2SaBkgoFmcdUHMtFvLcU8MqiodwiQXFikPBEj8P87ecnFKigCoKtF92DHdbnZW9E5HrdtG1k7EdEUAQ6NHvm2o96",
  "key32": "5nD783DGWSsEQos11m6B5zrei9BZBa5Nskez2sTFqiojSGWnNypJM4JFwKhhVg2MP7Df8DU8jeSgXUtpM14cax9U",
  "key33": "3B9FafDaEgpjsfzTDZut2bGMtNeJXaGJrqfUVux8aHA6ig2arzbyQFHDLtsN8kMe4EKJ7BsBX9ZQqM8DwG2EtCYD",
  "key34": "3z1r3RZyKBrBKBLoqXyWib1dcxYiu2rCsq5LLTm1onqn7evNPuJ9qpkgGxWJungLDCpXKVcXBPKPehs9NNcdpQMg",
  "key35": "35wQfhVH7GUZLFa4oTmGzHPfdCHwGN7HEsbdE8acbhsuUNgAoLugvH4J5pBZfwgjcHd7gVCniDRQoFGyFNMLHcnx",
  "key36": "4huDFSCXd83Ls8CLKspAjk82ZkFeeoSZmJi8LnxcRnRtx1rm4KdWxqSVoD8KMcfoMKTuoVNmojmrtoJBkm2g2ioh",
  "key37": "38iYFGhtUJM1TUmLpoteCxwkkp7wcjrBW2GKydKpxrJ4x4tEDmamu9ZaaNdMPFuoe8BVPaZdXZWoNXcafRKQVYx2",
  "key38": "2ziav7bH9jBZJiMNYS7dhVFZCcEeBrUdMziBqy9cVLtoECnv8KgKh3jQ93UW6K9uT74CCUBm6ym77w8xJx8ggjFn",
  "key39": "5RM3TjhS3wYzJQWHfUJ2kmQnRjEefuPkvVrpSAQmxxrZpYzgdLHJTY6hSfwYEa3Ein2w5DX4BbCCnzMgfDjLTJCU"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
