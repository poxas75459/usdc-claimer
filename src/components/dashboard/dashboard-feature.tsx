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
    "2gZeh81aWDsfmGCvZ4DWAJkwNRp9NtP4seoKYoUeTnNnaVC5eMvXmQpaM9WKUiYpLdSVBtDc3zKCHbQr3hFS1j67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32b9BD1h6p83YT1kXCAdNRBUZr3HbJyMMQc6LQFcuhuvjp3c3jtdJEW5ubT324KK4MNiX9UkJt78gPtyKvWA1tNt",
  "key1": "4bRhbLNEdy41tUMEwPZzGJMwZGEJV8XMkm3SchDY99te8KGYyFHGYj6mhAMB3hUUhDBKEt3gTaV7fMtmx2VQereT",
  "key2": "5qinY3oLL3Dn5NV8QGf4ii4LZgWt8MhUDqfFaHSYWivBFoQ9Mvy2JzU5idD6FxkfbM2BG3A5PmgpzTK3sj9vWexc",
  "key3": "2dSZ5gBScgu1bTBQu1bWDbf35yqPCJr1NkvJF5myoNbHp7teyCHXyCnu41LFCpbYG7yx1q3NgTbCWB9BqpSKiVep",
  "key4": "4Ztk6vQhGxnhsYoApDpT2sD6uaeUXsh6AQW8M8qvZfNZjZJkeqhPzYhtU8cZEKU6U85Yz4C2V9N3sSjWnMbypAjV",
  "key5": "5p8HanHc4cs5Z5FDFoCnnGhg1CHDoRug2NBcx14eX6p4qquHdJ71whY93iWr9Qkaeye7ibd2cUwpLii6Nt5FQsXE",
  "key6": "nX9XvSYaDq8QErKwr7xWgubwrwSPn3UB4K13hedXHuMcXaS7h5vn1z9WuKzdx9mXnBCZrrM3sk3uUrnpjAdX6Kc",
  "key7": "3QDwqUyq3o1iR1qFJUwctMqZsoEguGkNMBotESsZLKRS2wvLW2MDeuqD9Xhw4ghfmfCaACx9C1CM4eevb9HGoASF",
  "key8": "nMaHCdqMpXVk2UDUci8VxZYhb4BAz6gB7sjq5YaqFwSJ4aYLAAsRNyKuNdWfSrXRoWkBJzse7csL4C4sJdUHbWR",
  "key9": "3z6PGJHTF4H9fjQTShhJFgUwY6Be3boCjGaZLcoMYTgdnT2j1XdSZB8avDepnmKh7HnD3hvAmrLCNiTnt7R1LKxR",
  "key10": "2ta39BZJv2SDyg8Sy1tVTs8AiGQs4gRBfD39bhUTWvxuks6mY8gWF5wdu7uwurRn1HaPAJPxpzCx7HutBHUNBgXJ",
  "key11": "2o4PbAomzihpp9G9SuBWovveNfrPohwSeZgUYi5nhXHmGoUQJSdi1rYHvboQbAuVnAZ4p8N8U5JvdQQCqS9SKiUx",
  "key12": "26Lxbvu9ys4op5nibwGtHG8qv81yk3M6tPk6eoqd9HhmgZcZW7aNnBpuicBBfJPQzpvhyLiLVhYnCzxvhtUVvMj3",
  "key13": "4YtpA6JK7cgr6GB8j8oAuPRGHMpGCB1hXdmtyQxG5UV6A7AJVA5VrHSEmeUYxeZin8ehQw3hiuoRjEmSdgWo6KxA",
  "key14": "5usgJY41zhDfHRoCMxAp2xsCcksN8jW8Gu6g6tdrjmSnkZeXUv1Y6khQvB48E45smmsTpoAF4CrweUDiRceqBwBJ",
  "key15": "5rUkY7ZpLHD35vvug2fMRa5tFVTkuyASMovJM34RmXQWbFvR4MxC6uJna2WqNHjpL8GehSbQP4vMqn3CbEknVnY4",
  "key16": "wJhiicdfVabk1rXVgq76NonUiuczqHEZYgdfLo534QFLkH9ycMN2xH95LbVeQSfCUaGkxu1s7v8DoceTFy6Fwss",
  "key17": "2Ah3AbYocUN3P37zDhrqab7qJumadL2b8ZUuRvCm2pGYBMyVUZBLKWVcbeygRaC1B4xeyxjm5tzXcJEqNLDLYWQV",
  "key18": "kzii5GhfxiYw9NFH4h7CGZ6ZaAZC894qFP7RWjevRbMjj3yPRrBw4j7w5gPJhKGk3DQAtggD89b5GMJFEheZQ1M",
  "key19": "3hCjFHTuADwSZgQGeGXo1FVne134BJGhDv1KRP8SHkRmZnHi8rvUy92hr1kvzEzCBBMzYTjJKwpKRsiP1r8MDzPy",
  "key20": "3y8QZvN7V48Y9qbCHxSM7m5pXkRnscfXagrftDgPa88ymXy8NVsrE8osoqJ64FRezuHLBKuNUMSetUF8WdHWTfY8",
  "key21": "2dhVNBf8xV77KAAzh4CYYswgHbtGVTgYYmh2UaPt1FVExxkDN39Da3Cb6Vjw6sTVA62Uyqa7U7Suc7MtZgeTpsXt",
  "key22": "2rvWUHskjbE9WdUoUMscYwmV5uTUvqxsEMsVhXCfNKbmmeyEfnaJmbyRv8tC6d8sRCPbkUvbTReTqzAJAKXjoCDn",
  "key23": "3QD2iiVfnZYvYWjp1Vis5HJf9Q7jVEDrDUFcD7v9qGhQh5PzvAT85Tz4RkCfUJ9KTZwoR5UVdkTUjREebgMszRGK",
  "key24": "4oXHGAuDHVD7ZFUQ9Q57cDjQjiCVK8uLK2QMYSHtr8VB7SST7T7rV1rUBdxK4UGDWmMtyqeWqFzVZJLPiZ6y7qSq",
  "key25": "bBboaGCwD4jXmQRPN5zV7NBbUD6Mv5WFef9TvYuJNGB1KZt8LUSXEDzPkh5BNtqef58zaEqTCLZVvHZx2n2NKyB",
  "key26": "3nyjSWsGjwLcPga54bhcSQbLdu8Rjft8b1ykNXYMHB9w3GsJb1aV2go8KXV9V5otTaafuwT6h9tKFVon9SavttN",
  "key27": "3iqsX1o9n7c4U2gQr8TZFNAU394nyW9sXQQcoMCbwXKQW1sB7VZfSouVTDGRWjUoVMBHAMZGABjvE3zhwxZixQsH",
  "key28": "54d2pkw1oauVawZ2FfYhRoFfxqjVcm2Mhzu7rjRbLCr9rucURETHnu8BaUStnUykbTFwtYuTgREt1rBcdE1PMz8L",
  "key29": "5LW5hza1bgXYGDbjPHWwJKMF47adiRgzpk6GtBhrkS8WcNmGYC3av6SoeCL6qfEknY3YqNch1Mxwksvb8urNqHgP",
  "key30": "3xeTJNAoVZRAsFAJcbXyVmzRrsiC35eDwTBuCsAiFBs1hQneQ7eXsjZM6mpekLDafDgX4v2ZEepe5nSUHQrCyW8W",
  "key31": "4cGNgrtXyNugsS2DZboKyenyPDD2tSzsJqankJkKDnc7ar3mtsdMp4KcmfNqKeorA41fSMuXuZQTmEAhCpMpHovj",
  "key32": "29VFyccXe2mKqS7aBwZMJxZrVgcd8WND8d1BtHuUgd2qUDDZ1CNa6KfEKLZVZWCtvhxoBwni5UkiD26zMQ2BxQ3V",
  "key33": "2Q3BRhXeLtEqjfrkiX3THJePouqnus5naCCkMnSjCUZGz79b8Pu8jg7nHfKMmK881eBbTY6B7L4AYWt1XqceajDd",
  "key34": "5o7jxTKrUPEtgYiyb39yxQ6fDHo6amJAKfgHqjnUwLuyZXxAVrDr9hi5YQoFEeHJmRSYvUXkwS9Go56dcxKx5Fdk",
  "key35": "2UTtKFwVsa9VQSHHsc7GchntikNLz9925eSX9aWDuG2TJrsp7BU1jr3CnStcbtYGFiKMJxoMeYe6Trjw5xVcbuwQ",
  "key36": "2pnZYTHhoq96LyBSVAXir6T64CEreaxV3ZpnprXbYTefseCGtLiD7kDztmVnoF6mPtYcmTBqGPggqWN6LUEn37kL",
  "key37": "4M5Ff3oSVWCeoxTFKtgkSHzjbBxwEMqXTEH477PFyx7Fd8Mxij5epPMPcMWwKTwYpuKvWcqqquri2NM4roJ5tFQu",
  "key38": "29PijJ7SdZGYdQwWJBQzKvrEMvXQzN9o1hWPE8DxNjAk5pRG9F88fb7AkRgtmGbqj2TkozKAmj9CrDf6zfwECMSS",
  "key39": "29AqveCmhgC4fDMDQHd7a7XGMwS72H7p4Tup2p8sXbB5yTZixic8svWSEydB1TQN8YD6pSd17FtxqiLVHNsxjEQZ",
  "key40": "2XHQMnns5MwnqWADMSNw5gYVYsZfUe7J6QmXjV7iaJa3u82ZfV8d3xmjdbvBNwHrMwtEMzyPrUg8cJJBijmRwCbZ",
  "key41": "5T5ZyYGBLrMrDh6cK2BzoDDyqAob2L6vA8qFDFevs9yi4o7xumcogdPbqiYAkKcktqf1EBkaU6Q29zx6jQkiY583",
  "key42": "562kusuXhmPXCwBg32G7wYXTxv6dHFH4exGLKEACG1ebKB1wQpB1BkZ4nAFMdBLQUWSMdFBoWoSwg4CB6wvVSbCJ"
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
