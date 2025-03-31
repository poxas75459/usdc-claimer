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
    "5HjVzzjutVZpvYbqyURPSvvfYbCyVhcA5gPSmCGGpaDXk1LJW5WHZJcDW2QKvWFsg2JzW5AHh2CqEWCgWirPttNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MnvijydxpjLBEe3PRzMbNcTBthTrthKEJvud91x6WpFpoJZB7puDnAADjmsa3twjhYWgTC74WFsC5JHFoRzcdVu",
  "key1": "3MzrBuXJqfEDkNhkC4sJKy3t3jRypVbqoTKka9NQMkRyFM8nRF5Tg8T1tdQz3d8ukCVnmoGMMwnHog55xCauYLGo",
  "key2": "5U5G4RrKrfdB5JdqXvkAYDaBBa3ge633URYf4LEjSq4stAqtjDnCKLn2YpSvZmEp1eZKJTYXYAmD8N4V3XW1mrxM",
  "key3": "5pMi1bxiRvs9zvabE6kMwMyJnJbHGAGLY7Q3y1yToTt1yGP9B8NS5WzydUiVhb6tAZrTcov4wSQ4xQw7ACDKq7Fo",
  "key4": "3Cq13aruiDRyz3PZhjF4e61CKFRHjzS111wihVHH1im7RJBqiBRgpDaWAMAD3t44MSXLpwph5HbLq9ov57iGebhU",
  "key5": "3ZjF7pXWrLbfnYzCZmXuvSajsn4bVg3yHSS3xDqsBGijThPdqBxuqBdcsKgNLjrWAbamVHixMzkwBbZ11iezCSZo",
  "key6": "4VBCc6Nn9cwaownJU8LoBJ7N6TZ3PngjfohYMxFvN6UvbyfgRNxzUQgrYt43sSRyHRV7KsAPSXNbHDag7V3Wbt3Z",
  "key7": "3VUPjLqXUVueiu74hFxXN4JgZKQA65J4brYzfPpVVnj3N21VYfzV2yqh1zHyTCkzK8eC6EnVJanbwgKvApG6QF7z",
  "key8": "8LsBb5SzsFRBYpaq4rcxiYNbqiNNWZm4zNwAB8To8FijanXGZUz69CFFAZXy8hkpX9wJq8Wq5dSrhJTLEAxACxN",
  "key9": "4Ams1AKsk9ymq9EBretFh2NE3mCBRj1S1Qz4P5XkxKLgVe78PbDXSffm7kSVfE4kuirdrvr38oRTzaHmfWizxVpZ",
  "key10": "kGaw25nAuNpLefPgvMLZPqnttF9A9QmAa1DJEL5kJEcg132Xc1Hart6fVNN4XmmpHkiPkCG2Ki69vGQ5fufw2h4",
  "key11": "23b2hLGa3vKkYJn2agN9moMi82L3Yrag2ggFcnJeuY1zuDLmYUJPgzFsJTctagoVozRHE7M6ZVcPp4ZZBnwCtBz3",
  "key12": "3DiY4AEpVS7eCiKg6UsGCG9MG1pXZx9UaZwo92GCoDzqQb3kqdueS8itAL55psp5fPGDD7Y78A6HghyEA6LfseJr",
  "key13": "Ybk54nmZEQDvup73PvuhemmQhuABD35SJL44TGGpJyBkfpRSXa78pnthR1ciZUJYgdHdhD4pAJ5mfmvZHJj4Y95",
  "key14": "5aE5JzWrE8j93yeGuZ3DvivdCoHZqgwXEarkuFDdKfkzc8Jxzu67Lw6wzE4GmhUBK63HZuwPERH9f2dUim83RTRT",
  "key15": "4t3PMCZfiHbdyF78T9kJQWe5ZmPDHKCVwgTe5YU6rg8SPTgqZbQna9ik1FXqVHBpTNGAXyoLPEcTR5oubydptVV5",
  "key16": "5VWEFC6nexrg6roo6xAkg74dQ3EdUQnHwAUPbrQESthmwuCxhf9Ku6DFLs4DHRbNk5R6cPkxh2Fp1rJQbnUddUkR",
  "key17": "5f9vNVdrjktBcaAZnHPfcdcizH2u9CyhxTY1UNhoxdmNjq3cJRHCcKs8SF6F4g5mhgR2V3qKWt81Fn1a2NURkpJp",
  "key18": "46saW8GdrAXpWUhXqszESQ2bhEtDdYRQRf3eRycZkkbL7iNveqEh3GsaDCksJyWawxhrip3VwXoCngwFFe9Ljne3",
  "key19": "2phYg1HxXzwWYtWeU913wnVve2GuGb6NhkSE6GNMspvhvYhW2APjDwyB4oRhm2XdUTueoyKJYcbQnnu9GcLpQ4L9",
  "key20": "3xcn6jbr67oCRFCqrbMsUNSag7AetDxHEZpLo3mixNKnTLUzYSghuqYJqvb9RmT9MmjD8CR1jaXNTX4vTFuws44j",
  "key21": "4X5qktKESJSWUBouNHF6ZkxXH8G1Yim37LcrDWTN4MRH4wQaTLmD9bWCfL1DGEvCLkDYKCoupPN6fYSVWaHoKhC1",
  "key22": "iPHT845j9tQQbQzEsHcvZvYy26VFjr1W6CYf81PVihEFPtDJTpJZsk5Qr3ikTvC5Go8t7gVg3EWgbcPGUJGJLvX",
  "key23": "5PHQoo3iNizFEj76xbE2dYcvEsTtnd39L9XSMGKB3ciT5FnQMmeTJUGB7Aa5Cm7UDfmWyLYfUZQ4nnqnYevYGV2V",
  "key24": "8t4ghkPbNtvALEppaRakR7NcEvwT2BvEg6vcGRPScUdj4iREap78Wi2fqgXLjywiNXq1TRqcJLQbNmT8NweZYzT",
  "key25": "49MQ5XQ3Z1cMmGSBwY5oRMLPS7QLK9RjP5fa4Smc73RuGXn3MsR7tdpyVKisJQCybzKi1EUbDLGdboETDB3e9Uke",
  "key26": "5UaQ7FhiReUBFQ18VhmSHr3UovsYmKzGvjYuSkXtacCaQR4HCwdK9rkff8mV3f4EZnx7sp2kHyUbV3P8NfQtXndJ",
  "key27": "5rPPxnhCkHeoyBYjUeh2DduVbgriCQfekDWL3Q1vWM98bG1HMwV9oRr5Hkccnkv6JrBpFTooFHMDSzHaxKP8L8VZ",
  "key28": "5CpJ4RheLaA5F1iKWgz9kq9gNbTgJdzhkStPhuioWmctei3YAs9zejMkS6JgbMRnTLdqz6A5D94D9bFpZHGW3yR7",
  "key29": "2XxcvZQkjk5hknSRpHEj9x4uK51KbHnne7ZTgBvwpf39oKV2KvwSb65vMxNp9SQwifEijrkAhnfpJMSfVFxmYPEk",
  "key30": "4yDsn5mriC7XDNAgkxmqifoLhVJ2KASkustqfJ8YGs9dA9ZawCkGTDcje8Ucy5NDBekRkjosCnEgDjjWQjxunWCm",
  "key31": "Eb8q8S8PGNRycbcdrwmsThmsTMKU7Sm7DbZ9QTm71KihDykDD88RjTHHffSxFdfystF4o3g9cZYBXmtLCnneJn7",
  "key32": "4Kbmijym349ZoDv4gd3q8zetgAA1CGdthJtHSFHvq3FgPvr6cB83z3sjyJFq5nq9BjmQuPTz9juPnxGxu47HN86T",
  "key33": "4inW1Kr4G5yDYyGyz7kJ4buZaEP3N1UgPV1TazdFtNS3BCPVS4gbnjMD7dj4M2Y9W4ENf4caUKBAj5TaoUBMREFk"
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
