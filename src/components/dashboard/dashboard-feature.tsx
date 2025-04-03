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
    "5GkGYfybe4Vrj52vVKHeEgxNgEUgFPZdcE359w2B8V7gfHaDTVxrJeJ1ZzANSvQiz1udcAZggRjGDmAHr22LnkyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RG1tYPKfyPGtnR46cJf7FJCduH3U4W9y5rXJ4J45k153bz9sFLyrukLMU9qiJsVMuKgaduzS2xpRXZD72SbF83Y",
  "key1": "3Fx4a68ujaMzbD49T2G2ebAcNYqKDS39pFsWbwSQHwTEQjkeWSrPGTQB6Le1uwZVZsyPNDqCmBfC5SruBjtoFetb",
  "key2": "VWdwg6R9APyJjgBe5PTgx115xiyWYK8Xg15jMEz8w64jCBERwTQwHM8VYNeWUgHMAHv8Kn1SJubtUdyR1tLhY9t",
  "key3": "53kYNwoujJX6gmt5YHBx8KqPtcjmrvGKVdJum5VdjzW2odF9iER3rVnNGH9NyRA5vauNF5XSMNhETGduxaYU2NLB",
  "key4": "2WS11xon5xcktLvoLGjQ1ra5uaZoAXfVoTMuyov8uB3HvX4Hi75UbA2pWCA61wCrnA3ete1w6hDLXvg5ZPb24t1",
  "key5": "5SZC4DqPC34gYsZxhndsjKTcAyTuavyK5fdHRwh6tSz9qk2Zn7QSf4SrKtQNVSp3nQJNqrE97AYzbMgfPUCpBQGi",
  "key6": "gF1TgXFHCVi5Uaf7VqUAWTX8mB4uoazNbjKBqu1ciunpCBzvhdZNiwFn1ExzufsehP1VbHwiKBUjef3iaPuzURn",
  "key7": "2cmmcyz4kcWLLbTXRVp29zQSdGNSCh2XoinRLpFFoXF7eVzUEK5c6C3YxRASrd6uMsEqdf6PsqCjqTzXPucw8JzJ",
  "key8": "4vwHDBssDP6ALVzDdJZCenFK5nzjjtMZitUFBZGqUiTcRJ2PNp1FXrY1uZr4rHCwH677x6mLAmKwFKTTDhWqh4A3",
  "key9": "4xx4c45yh8FeNkdrqhU7hMiG9shQbjPdv5zVsC9idTaFCWF3qC2ZPrneghJHw9TYazcwFRqSF6DzkbLyu438gg12",
  "key10": "4PQyexbkFJr4AWygnc9tiMdPmA5dLoQEYh8HVsoEx2sZmhDW6nAVuCejaHdbEhtGXwM36MgqjxDNX4KTQwS8kCtR",
  "key11": "23jqw9HvLQwz8xV2Tf5Z92ANDKh7Wajo5fcnksLCWVLWo1pbaXCUkV8rUbRhcMBdCnGKeQxBCZK4vmcEz1eMDiJK",
  "key12": "4FFapwu3McSpqaqPRDBmEv3tXYJ5EhDpdomZJeiHduShJaLmNXYL5ZHd7LpD3F9QaeAFPdVmZeqF1eBVygo3Z1sa",
  "key13": "3GvGU5RbRqWa3FggQJ5K35dr2gowDN5ELmxQHDoKFHvd14KUu8R56uhfBvGRNSf9uZccK8dsywSAxKHoL4zkFTz",
  "key14": "4ZqzvnakxEeqvJRZRqhQUnY5SbuTqqNDBKJZvLjxuMdjbm6VcAek2D2mchDHb55qfWGY9Ds6LYATtAvAuGxUUBYr",
  "key15": "3reUayrtVw6AvNHUxn7gkeNk9p2EnaMxunCyqW9jcBoiEd8Uzx5wumGTCcSFksozBkb9VuCmoVHrR5wK9GAcQA6o",
  "key16": "rKWnMzkDRyLibJMqX7Cjif36Z2ykRfaHfwGhdZUb8fQtUCbiQTYTgpCmZ4CUuhpgkLRgzmtzQjJ1Y2CBhW6BBkD",
  "key17": "48GWoEdrPWpUBia7V2TWHwRHKR2hPTQ2W9avsQRhUhKx9BXxPVtAYXvcax6SexYHdDXYAHXxeyvkgCj3CyWbGTs8",
  "key18": "4Rt2ginbrwX5RePunuhvnSedZUZseqdt3bSN7f6wVyB7AQ1VCw9LfnCbKELgFkKpHuRh34b3kiYzMjrwYubtm4jx",
  "key19": "47T7UqTj5jbnk8LLgtvdPjsuwAqdTZgFYsUnxuirqn6eHFc1nvAntv3efcH2v8eaZQXAy9DtM3UbwrXor1DPF8da",
  "key20": "5zuGV9NGzvicnjbQcbE4zpAbrbaa2cZeNZcgLz7JEZ1jGi78tqwoxqcE34ZqL1aTqXQFqXaVciUm3TmqRdE1k2Rw",
  "key21": "4wwWdgNRTWtWFUodPsUFcqdzSpxyuD9D6dWj8bDGEhzrwAoYVyVEzAKeqKXecYfxu5xP4zL8TjfXYrpwxdxrayNY",
  "key22": "2iaqCmsW4NZFmPacFsnFNihE4RDQGm27xrxXeHsn9NuiVBLKeW1Hm23bbgo7iAifpzrSUDqhTVxWAMZnh6Dhbm4L",
  "key23": "3Dyep5FhAbu1CSmAvz3da5HdTmXot5pB7w6GnsGwQNzgBZXZqQzBZeoPYg7JMLs3WM8BbzRZGHsFBBdUeyeZ1p15",
  "key24": "2RhUbWn85ReLpmHGMgn5gatcHtT7Erj6d8iJEvtDVB5yUi9kQW2RfSWHznTbHRDWVcwQkXmVKZ6nnrBY2uQbvas8",
  "key25": "3gFC96hHTsxayCj4aKBpVApgfr4fUpRV3txFvQSBAF6WnaPSPhgfNRXnjaW45RqZpMNoa7jjeferFbdEaHS6PG3G",
  "key26": "3NJfL2EFAyQ5ww7uSHKAsFqtsamkDQDjHCHTmd3ffZv6HrXWYFnayMR3jPmu4GWfr3oJZSNNMdRYr23jb8Bj3u92",
  "key27": "5sGjDcYihw7cJGL3XMjRFYu18kPqwuVoRUjt6df9vZuhkShwfqiMTDtqzjLUtcrx4n7FtSAdY7iNr2T55fomK4ZP",
  "key28": "4521DjhiXjcYgLN6rh75nFFf2hudwNJSGqwB4yXhpL4wjpXXVEYCjoxF1sn1z1Fun8F1J1iN8bPnEtYnYXejBTeD",
  "key29": "5ELjaHDTQxr1Dc383LzaLoZiAtbeqvUqJg1g8ZbWPY7UF1qdiaY5kij7dDtWT7w9fdepNfVJhTva57yaWbm9vLZv",
  "key30": "mePw9KG27SAvQbYcoBJGtEb1PmaqHeyyQtRyuu4DBov2nCFGpzun6zhQikTDxCaABtX6ZdjT1vpGd3GuXTRHdKf",
  "key31": "YzU94Ydgxkk9dAdxkdswCbw3siDtJRNgCRgC5zzpsyWv7qggHmNmZKSrCGuxGJE3MRLRYd5NosZfXna9kn6ZzVy",
  "key32": "2twFhEYMzxd3y21eBYfDCPYZAkNr6WqGbzuHQnwWbcg3J39nELS4pZwvdY7J1F6hZeMAe7RbM1pm4u4rcfT75vGQ",
  "key33": "2fbz1Tw38nui1GB9AD2tphX4eDF8R9vPLKMr4AJcKfguCRsMbgrb9ZvJHiDBtgxG3oeJVPpdeFXqRoN74bFnK4BT",
  "key34": "6EV8aQXUcjNc8exXVf5pe71KtfSJFxTiJLVXCBqUhq4ffLd41VDdaVC2M1UKsXGjVHvjiT7vkGynLsMbfXuEpDq",
  "key35": "5DFw9jPpFDAXUuK13aJGQndLfkHxLoxjrizqm7Ab4GKYqTeKwJxS9V9teVGNp7EKWvgJotFsSKXgvqfaXrqPd1Pc",
  "key36": "2GReXPJbqZg1ZV1zRqDX52WhHYtxuitgvD3nDU9z7tofEmZN5ePHV4VCWWhtUNs8EF4JyvhiyRJM6VSV4YqJ3xhr",
  "key37": "26DuzK41rWVJGT1gLUYywKCA9vL8ekdvPqvV2c18zK5RHsfKFi55p1bfmWgjCYqvneGAnVcXVxLx7e7bitvJkVag",
  "key38": "5GrHLUWgQYzTEadtcbWNpKUtgAB5vc4EtcY9pNzma8d72F91RM7kVQDorqhUsreKMaDm3A3vQcKAYu7HBSTmDaii",
  "key39": "514eacTtoe1U31FrTVHC8szuh6VCYUbQwzcRjP6kMVHSKAeXjymN4Zb2x2ujkGfQA3vqtVARn5LWuzb3AfB8Qmzq",
  "key40": "2JDW7QE1esjefdyYobau8LfN19BFWGzJuyqHnxJVg2hY1m5AiT8VYNd37cDuN5tiYZMB6uwN3TBaFLm3Y8cTUiKD",
  "key41": "3LTPoFMjWMFkEHvRKmUzuDQWmGhcpCHRgFdtoGpxaztpKgyjVYhTbSUmYx8Yzzxyt48YT8jjTPvbEtuWiNWJqe22",
  "key42": "3nnRDNDfRoYyAmjgpEsqmgWCu6bPjQaJj5mkz3pG7VvEMgpA3NHLq6eozT2D72ZL9yQuzNaUWmNN2LfMafiALBza",
  "key43": "22aVCyztGm4VvkKcF69v72FBtih3RM7AsiRVWYjwCAopeTA4D2shU3oLfyfmTUtNpaUGXwhRLUdqVEzu9ihrrdHs",
  "key44": "385P2aL3APfv5w3wR2MswrizZubmiNVVKDLFL6NvNe2drtthVg5uEV4Yzrq8etAb1ZCUqzY2543yeKqYqhSV9Gd5"
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
