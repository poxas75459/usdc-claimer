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
    "4APioBVLxp7C68AcKe7buCnEG6fqW7p8G1aT9tGF9Uz48SB7uWesPe59RbKzWcdhQmLPefMDBkf1HT7UKJxffbFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cY1pCnUBxDDTZLCf4EYqzeBmfPuzpZRrWn7xeCg4Dg93wTDBKTLyzbdXPFbLtqRKhQRLYC1UCuMTxbrk7kbfaG8",
  "key1": "3j9gzb2hZMy8Lrh9PMvMHdgCC4MyKrzYDdsEqPBDsHTSwc3v9jpZ5EPCZDqYs1gYzgQj5bEpyvchq7Yumvx6NVAL",
  "key2": "4cYAAcFZkX3c8CmcZGx1dAcAotaA2gkG2q9oPY5AyJRxVjMqStn8Fu6uq8V5pGZBbdHQCqCEZLYiLeYLmNbfCPAS",
  "key3": "5aqZUwR5rUpUmDnqAsbW954kRstqYr48VR7qntufYoS5jCkWabfFfBTHoH4hJ1eZt2DqC9hdv2YmCYTkDkH9q3SM",
  "key4": "TdMseYwzvG1esbiq5mpV1voFhSbrk7uQg5qrr9C8mtxUKnRg5N7xvCGfSZ624P3S4ej3Uou5xFaxmsVLd6TuTSa",
  "key5": "3v7hTQJxyUDXHx9x29bCvHp5dtVFgkLmLeKZ5GoBCLoP7q8aKPHUCPGKgR4GkDhRtWRNuLvaCsmFTbKzj1xP3AMC",
  "key6": "5seNE1cqpRgjrpLEzrTESAMFB54ytiuEkdXfwk7Qr8hhsMWKerx6ZHNQfHesfhfs6QQJZb2ikaksz99GqvkvSSyk",
  "key7": "2Eb1WwgjtzpAbFsUv3q4STg8yRHYEjtT4SoYwYJPwhHE7sosSyUui1g1vbeSb6tGScpPEfWXwMdqiZCxaDJ5k99G",
  "key8": "3xXgm6ewV5mgcp6nTiNAwTbUMQmv9YS97SistGMHHVi8pw88gV56EnFchnFpXP8prwiYyJTfy9e3ZCGzzibQV6QQ",
  "key9": "35jHtaa6jJ7B59jdcQ5Qu9pqLtYu3LRn5YfoBVQyHcGmRitGWZQYXQLcFdXN9F9ijgre7Xg9HwyWW97E4FxGr9Hj",
  "key10": "41VsoPgKbd1iPqkSR4y1nZXhtyR2HuvoZn63yb3UtrqwfLNz1LEsjPd8e2tFjsmXEbvFXQQuggZpxFTdUFUuQPkR",
  "key11": "3iRV7NW4d5GvS69sp18HW7bnYbw8CcEdq8kQLX55nVqX9ibjxiDmx8JVCUVxzyS4SA8gydr5Mb1zX5hU2nX7ywst",
  "key12": "VQdsKdZU8HZPCScEZMg18CKZ4srFnHkSsdQ1zutiUkgMUZF24zKCCYVFr8ahaBhWAmnNBWqkFrvnAZYhbTYgxEq",
  "key13": "3Zrq9ATjNYnaNkv2ZWKfUHb27dGzfnV31ifMwuGdFTtoRxBK6f6VwcdDkfULKjwU18z35WAWHtaB6grvmbxiSzqu",
  "key14": "5sVkYMYg838XWFnmGZ4s4a9zFLHwQJJaG3HEeEEaLLxc7Vvt9wr37PWnqyCW75xwYw9Wq1wLAA2pjrWKDNzxoEbd",
  "key15": "38oAH334QLDfD16FWVXkBE58gRG4iKea4BsATAjxdBTnJQr6ctP8dUvyWvHgFcqETq1TS8Z3EtbrNGRiyyzEx9zh",
  "key16": "5txbJVW2ZJdvGuru2ba9QzxCmM6vV28KaZDVcAWAEpwtYkbe3uBny5DonHqH2Ebmb8Dr8GWXfsyuXPyrcG4PkMTa",
  "key17": "4XgvTWT5c9MzXap7Hg5ELeRdf9xVKgeBqdBv1f6JRxpuBDNk6jAf1icB5LVFnoHeM2diZyqfdvqMRsCWafxKKpwb",
  "key18": "4FWiyxZ6d7udNQoVMpP8gaWYqqvjigjpNrzfuxp1NLU61u4gV9BG5f4LBs8QbG7EhmRKCmVBsfyhbX8PER3LKJBW",
  "key19": "2ky2Qd9ndUQKzVAvEzH3XnpuvtZGbCe8t36c7erc8oLa2j8XbGsEjLPCcnQH7jwavNxCJwGQMr1zKGFH3sosJUiR",
  "key20": "2jjUVdBiejfMg6mo3EazWGwdyZjQz7QnPhvbctPXnSw3qp6UssTeiQ2RrxzESRjsWdBMaHky47z35xZtnWCzbXzk",
  "key21": "YKsgLuAwsZU47hinYFo8Peb2YNAZEYFZzgrh9pCUXbFyjg8WdU72kW5VEZ49KrBjt3cZ4BX5oFajPCHWerhvWR8",
  "key22": "3XXnB7UcG7qZAkSiYYrUVVw4mEpRKPjXAiSUJWHTNqUBHxDf7k6BoPswqwTP5TDDmtfrGQbqism2yB87cj7AyrZ2",
  "key23": "62Az5YXbZ22VkctBwy4EoTRE4LZcUMyT9kMzf3ABhVjMj1Vb65E5dT4gWFA6VNKmK9xd9XpC2vZ7Rne3nsYnTKzZ",
  "key24": "4CB3gtaERPFnY9UnTDSxHmRmyuoscLheSU25tC3dSNDsu2nu9Z4quf24NJJny7w2brtHFmUgGT5RcsYsJS1g9Arq",
  "key25": "5miCWyKFjZotBPcwNDVemMiFvQqhzR1tKw44aBa1i3djhqkuzVDiFS3qC9A1UD2TMF5JsCvxFJH7GWaBWJ3e2hMD",
  "key26": "HqZ6Qzq9o4zRGiKmjFqR3F1CKhxigSn8pgBe83dkf3HWLbEcSHueK6cHqYmqyya8o9A29Jcvxspb6JwFZeU3JBx",
  "key27": "2C6rUNYkhkTwvTgkSDtTDh4MMr5SAspt6VGGPKpDfEdAn9qsyj7a4yLVCMy9x7CDUmNi4Hv2rhudTfB12zgxvnsU",
  "key28": "5KLBVmRxQJrTy8w1bm34iBWc6TLk9AHF7po8DyFErT3Vo8MAkPeeLz1ZgXw3N9PxjrKvVMzhAxFpGEwyxdnDaVwc",
  "key29": "2f3ycyT63EsYT15ruqWhbZKEGPntu1tfven4ADpTeCvL8JmPoV4MfsK6apwMopuH35aTkCGq2UvbgKAK7g86ooz9",
  "key30": "2ABpiz1v54wzJ4cktTfzMwAXShTJE4g1WcD6BDmjNdCgbdgG9FcX7Jpz6m8dbag6CPC2F1UZSSLXaYK975M9qB9Z",
  "key31": "3MsNvgkf3aahvCiSBW4euY5gymmkUKKsNq3YJCkfvRri5vemvsRLj7zbPQRtGiD4oTnx8hVLRM5U8dvx3BY7bRwS",
  "key32": "5cypBRv4jN1ggH9SBPt6b2z7Xzzvnnkjp2RP17s38mLmHQDvWY3yPC9vHQTDaZdNHyivhWRcsCc9KVWvmWFZwqpH",
  "key33": "3mC2t72QtZZnooyzHyPTk8LJ4AFcdGAnKd71Un4VqGjL9SyvC842pgAECkaHuzor65XQ9DpXkjZBZHhCZGsYX8uH",
  "key34": "2mQ7zRMMPajwSTmSve9TXWejMdboXM3gjBDA1NSeTHr4uBu3E46LdKJEKPu2HyG4ePj93DhnSAJ8cMJtwnmWvPJc",
  "key35": "2YfaBdJuANun4g1TkeWVKNYfboyqXxXxbWaiVDV1yazykwWtzrg6XRswn5tyeJ9UxHWJpLUU8bAzWx3KVrnRF6C2",
  "key36": "5PGmjgxcxZovFTmaAp7CUGDLAsZbcqCqbvfDbHUGgKzSevWFwp7QSs17dbPSGsuZyyyGgA78S8dwpTAQxcNQuoKZ",
  "key37": "3SaS96dTnz8jXZwdz7PaB7WMbcAh8ozYHYLMKvTUE3UXL1Pu6hZPfyZzBoT8LQ9ff7gCbm4isun72A1VHvTv961P",
  "key38": "3ffXW5ojF1U182qKTwsh1koJEAhm5opFnB4QqTYcvRcqKXfWR69rYMMvQiBp23oDU7mCoQ1w9HqrzQNA77QDviS2"
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
