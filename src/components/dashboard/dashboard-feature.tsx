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
    "5h4fhHzRboX23AY9KVggPZfifAGFz6ZWTiuNyUMFQszy6UjcG5YyW5NMCubbJ7cjEHdGd9d1ZDHXrgUDyHpmJhFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KgYBbNFuyfJf48zeBAUNcQbQpiwCUr2UbpCYvbieQVuQj4riHv7BLdu8FopwmmxyW9bDsAweHd7SHbVVw9CxHik",
  "key1": "3RkEfKH68Tb8NKTdfRTd2vGdLgrRJDfj368GeVwV1C8VaZW4HV5KeqTVVGbPUXwJgjXyYcHekZCNg8Z49jvfoTpp",
  "key2": "16sLW3igx3SWhUFikCZZfSkpHQcPsZU7BxVgCwATSn4cj4MJdD9m1tjsNSz5S1hVNfbb8H1pXwe59mTsrFvLgWu",
  "key3": "4nCMHnTUxKAvxJJqzeEBEiRWcXRhPteEDnAvYGJRBTniCK13mr2ZQBmShSA9wat6UY2Jnsf3BQuPdaA8w64oUsAt",
  "key4": "2a7VKzfnJxRMJT3MEWW8yC42vwr2NHixdgmjxkYZ99WXvJBtSNoosGwBTSbQPqGFVsNF9Gdx4rimvxyXKoKrDu9V",
  "key5": "4SfVYRLJtJSafhQhcMHxYA1oA92F3JsDmHX6Bj6iq5ZHA4Q88cq2u3NuDzajxSrTWaf9RuMZRaB1ePERn4etymNL",
  "key6": "4vJMa8wkudrBL83vVWjZZqaYXfSUeLWRyLtQPJ7k3fDcFvVKGPqBQruE8S9uaS4abfe211rTx9S2Bfgr1DyCavmS",
  "key7": "7WZixGP7RzVFVZPq33fJS3JcyW84Hs1Sg7bmmoXciRhrfxkBDutCJGSSLyZhqdrNhU5qfQ8FEtB9h2D8r35cJyP",
  "key8": "4BhFJLYNEseJKnLh8XYFkzU6Tgf3bSvpJMpvxuELbqiAWdzDdVXUPPUVoNapG8fqT1hBeoaueYqyU1R6b2rUTZud",
  "key9": "E1QWG2XHUUiuS8MJycSGc2BmMDPokJPYxNy3mWbr5NAyLjrtnfCCjdjRJnKTEW45DV8WTHJt4DpXBu9ZT229N2U",
  "key10": "5m8LygAkjjWQHgrMBtc19fLKB1WwoWDuSSLNjVjvxztecUdyLN5Ni5yGcCxkb1ofL1ZuiRcbbuNR7kn2LXmgNgVG",
  "key11": "26PD6hgzNWABiuqUeVriqvTgdN8Jm681T4WZUXdvBL3b49EthEZkt2Q7rupVcZDDQaUcniAW6zXmM8EKXmBUxCaL",
  "key12": "2Q7GQFjcqzTBnkFiwKuYwWrgafVnwhDw5as32R7mWcHKQGoTFtF5f7ntPqbs629jeqhpENHLeysVBjb7wyUwK9g9",
  "key13": "iX7VaYzVZBV1X9z1FvpTAEVn52ELeMH8kKgQ5TaKraACeVti9x1aVZpKV2EKMfDhSmEGG1mZcjoyUVfyPm9gqUU",
  "key14": "28irqKieQottCLb6rUHbNR6XKz8sFWysmPKna3yqfS97Zv9u4xBCx1rtHFocY8BShRtvEDD55ELPN5UD5XBvtYAh",
  "key15": "5NuBcnQs4VDoscy9gBUJDiqAdiauBs1nLLL29beuWyUJ6jWyX4qxLXxCrh4vQRVnauawKyJVch7kXnhZRXrXFh8X",
  "key16": "54APurTNGDnpgLzVd37B6VrVyr98b74Wof32VAfQsrUD65PfUCSMyg9ReeNesUvSLU6QpKJWjyrFsvfS3gCUcyna",
  "key17": "YGA8PPASeqKftxWrVpAjPpFswADuAcgzJyrC3oadBMk41UnvgcisrePTC6ZpZdTpsc8mfBvdBvoJvpWqnsiQEWQ",
  "key18": "4r3GxmYm2bB2iDoUJJxrM5J7xojxUyQGwAeUPv87poudmRe7QcQVDX7WPooHkWxryfmk87uCpNTZw5Jx6zyqo35E",
  "key19": "643DBYqrohCQVdc7PnW6wSbGjqaXC4iYLrEvWRmyCB3eqaMoqxNrG2SQt4KNCJ2iZUVHeeLnWxaaYzFgaaJGc5nK",
  "key20": "pAkKa6DbP5iV8sz9bRR3ze7CiaoSbqvyGAZyE3RTq16DX27Vvo8VNa7tcMeLdFPtMwWN36P8dy8YZd5957NFWMD",
  "key21": "3r7yhLzxFLLeipsauMXaMJjKi1cdRxzLSh2z3Y4sa1mgLBudRi6GeJEfiCFvfrSXweC6mqJDyKxrupZgPnpwDZ7p",
  "key22": "3jNv2vUhpyuCntaGCpRwzNbVShSdZR12DovzPyu5VvohGchmqga4VHo3J56GcEsdnxF8WLGX8nciANReKPx6ezcc",
  "key23": "4t6zormM3hXTYkpnFjosaMWnXwy1k3qMUJgRBtNN2T7dJw34GeUT6UqPYxrCUruDgFCwWBZooq7bG78x4GVu3hrJ",
  "key24": "BQUENp7uBns7zandnUBWvBpiryHNsC8pxCM7zV2XXTPqLWM8FrEuU4CAJx3qeCJqGBX3JEd1ESBZTX6516b7a9w",
  "key25": "3VLPfE9U7KsfhTCritRcD8Nm5kWnbi1yEUs65WpHYpxGrFTPUJ1Qu2tNLUF85pua1C5Jyi8CHHhXNk4c2tKdiNFc",
  "key26": "3KUPsncCHnBbX2m2dLRoaripY6BCcrjEkf7AjonvaHEbfuNJQafNGVvC1ReVFP7E2QAjkBVgZVRCAJh9npTLAKe",
  "key27": "5Li7vnFDgcHAYPu7kSBsSogSCeisRPyD7zTBTv3ZnoQpXEodfhGF14FM7VZ39bAjc1w39sbGkMWUFXkhng4ndkX1",
  "key28": "3yKVSQuZWufToWm8Jw8ChHtV3FgDNUZ2vuvtGTyDfCycD4eYmjqgQgfMwqmcyWuEr865QfWCyTesV3rHjv8dFJLD",
  "key29": "3CQKLWoEnAmRYv4WEGcRouL75ek48HyeYWXTfyy24BKbR1vSEt2BxCvkYUVY4UKqUoaDZPSQ63vCscFMgtYU4sQJ",
  "key30": "22AHiV58RsSiNomJFUuQrUT6rPcsxTDSKwYngyqLfx4XJ19NeAUcbTNTgfqeUuAReXJ5wt5hmgdhj2Ldz9QpQnfn",
  "key31": "5joPeGY3DnReQsdobkmZaKKBstiL8MpzW6uSN6MrCDogCVqtrxtM79zdrwTNHN5wBHjWGQsNiSABFNSBwaEaQMfj",
  "key32": "5MpvBaNGQyhpRPjSmCD8Y2TcQqitsDN9qxLuQE8cbTYLhgVwHJWAYdNGmvv6pEKwLqnRCg9mJQZWGDhZt3imDGoC",
  "key33": "3qxZ3UfzPNtbRREc4QpPndcTCQAJtzRo6C34YSapQkQtsNgiUwZxTMRUzeXiEyP7dMTVvZWFxe9Ugmfe2Di4DWTt",
  "key34": "34c5Diir8AwoU4yeojn9FktyJh5s6qWZhwRwaSb431abSAmUwf53Q395xVHQh1VTDuyUvgY7GqcmBaBsFtLrCMko"
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
