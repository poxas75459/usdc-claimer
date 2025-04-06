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
    "2ZrmdtPQgjLjoqZNLhbAU5Hbn7QjD78GTDearMzjBmjvkuPMCxfGUWLmJhZUe155ivQgqrCNRkQhZmbCZyencB5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRZJeighram5fBWFRTr6J67BTphYRszng46yrnr9E5De4iqf2yuwShZzd3fWVB3SBcoH9MNej9tjnjWsGw7jwwo",
  "key1": "5GMscTyTjLR8DCZYBY8t2RjtmuoNH6DN56LJeTVUJJznSMf6rb4NUGaRK7KXskj1zgkgyPdcrc3TuoQNxQiyNLGd",
  "key2": "5Et85u6Zh557Zh49MekPUMy6vxRPGBjyProu1nC7fJtvPXvJWdQa9wJwG26eMX92gQQhHgXVQPg1t6spgaKRkNa6",
  "key3": "3dZfM9AdPBpSivQqU3JDyrZxQHZgTpxqmitN64gCyv481bXXBZDK5KU3SuRDkfGVLP87LiDkKVGBpKPd3MyyD3hX",
  "key4": "3LiTHqMgWwnM9Fg4HoynTbf1DGXBAC84R6wLzaSuj2CqmvX5sNZkQuc2kXrwWqGnaqythehGkxqxdHmB6ytjEt6Z",
  "key5": "27Mcr8TaUFE16xjmjZn76KJQXym6SrK9zLdXbRnijvZCjeGQ1NeTAVZgTC21o94YUFifQesnqU5J3SZ8BWbvFABb",
  "key6": "3mJa4ymusrALNpL57oRByWcv8MKzVLQHdGQGTD9K114ykQu9DYsDPShzxWqmc8jJGmLpufKV8298S93JnxiqYG1e",
  "key7": "EfY5kFLFiUPE7WbGQYXJ5J4afCtYAZvsjfm7NoXrFqcNygNFqsmQEH9Y9sNv5zwp9peeXr7Xyg3i9f62kqZji9L",
  "key8": "4imEBHMiuvLfcWfSjWZQxkBRfVAcAG7iyG2ZcU3vfpYMSuhTJyGkme7dJveKezEknBBPVahuB4xQ5he9zUpDSmyo",
  "key9": "FKLgfqyX3B4DPwYPE3Zi8zhqUhYrfjuCGoz5N8EsGkLL5RPUoSbZe8HPtCra1Rv9jYKUb3oEA7VVxmZFG1Lyokt",
  "key10": "AysVPCrGYej2Q4NN3xF2SfYEmVr8HRMtXsgrmZLBrxERb1kmbX7tjAi14Ly3CVS7SqiWZcUYmgwaFKBZVNLB1Lt",
  "key11": "5P6b95MfgzKe3EeMZgWT216gA2m1471TAG2fXhGtyL5dX8AHYHSAeQUJVhK4JurVkkF7Eka9Y6KBVz8jdRrQjsgy",
  "key12": "65q5EVNqMUHLa9q7tjYrUNXgR4QusEwwFDKN2Qnv21wGj4paWyk866fR7wZ3GDnqUQ6ZGdmMFBgx1RiQYWciG87i",
  "key13": "4N12Bcn8GK1wwR7A9YWpwvon8qMwQfeuvbcoG675DsrkMn8jDpeDffvEnSe7Stvi3LZuBvtNpmogU9N6WeBhqzMR",
  "key14": "F3rDkBGBgTGoLJSYTv5nnrANhHD89qyr65tyYqKe7FHnDFHyqsoaGkgEhogPuHm7Y6TWjTniKtDWbcRx7j9dcNz",
  "key15": "4swFvofS3Vzrefhr3rhe5GJwPBsdBjRcgi836wKm92zoxdF6cLKRzfBJmkTjVfvEYzbsLxh4TwR2SbqtEHXjkxBw",
  "key16": "2Sj5bvNTCgLF8gyEQhGuMWuXnfAoQeE2CqkimZi8CNRChbUzmfDDdrXZX11m58dqBvAzTAPnrHVjCYZMJR56gqD7",
  "key17": "3oa3BBWS9osToCmciixUXnVrzwqTtj1oQXfwURs9shiK1kMWovYS8J9jrNTVCxYScE5A2LBqDRFTLKB461mdLyhd",
  "key18": "3T1xq2r1WFhD5XcZUBz6g6Ab5vEhzfR2dBjcMnck6mLLtWq5YGrC2V1zx82L8HYgAny6YSJcSQbEKmXB1pbRGsR6",
  "key19": "58wxn4FKHyTh6BTEiZLiQZK7FN4Dm3jpiSz1EFNEus877GYknqZBxXRVucMaog9fokYFZAdjKfv68c2ykWhvX3w6",
  "key20": "4pYFJZGaTFJZAgSP39WBGEUHxwQZW3ybPjXr1RReDGnH8sB2TAa9vrVXvqDXKwRjZt1v4DyKTTPzkfCWjzZ3cZJ1",
  "key21": "2QKzBW5nVhEFZqyJWRMd13h4ZjoonacT99b2PAd6iSyyK5zTCto6LAEVYdMXAU3v2SiQs1F8WqMZUXdfXeWoc7ot",
  "key22": "3SqbvEyTdnWFpFLbgzLquutdzKaecUbrh7xVsvBaWKXAxVZGr53hY2MXZfTEA9ZDKF8JrBdJ1RsvrtL3duAMBnfV",
  "key23": "h4c21pWd4VHHcrSAPSvPB5nLhwJf8Ui8TahhRPUCDAbyqCCSWCTW3XHxR5houUB1n312GqenrqadumnVGPqgGZs",
  "key24": "4D1APbdQukr4nanhXQKrpfLb6nC5khyiMiHbjYrRto6WFkMRPoN2sRJRNvLdsivh5G6Xuaij7RjGimXCgkkz8NA5",
  "key25": "54J1oCi4Lph4LJBuL6XnixHYhvet1VwQv2qW6HGKH2fFhpevi5WYDnxHQoRqHNjh353568J6yefgFpFvtCVCwYoM",
  "key26": "36W9dzmTr1hdBQKjQ7PPuZREuZ5ZdDti1jBASUZTPareezPDSFrnGgghC5JEeye2FUrqjUxZuzgaJZGVqcHaVCVB",
  "key27": "eijGcNudCFfpWAjMf5s7fQSzonoSiWpX4Q1ai3ZYdiE5YYjofyb2V2cxnsHnjNs73MDpEVgL4xZm16dZGtUwyK5",
  "key28": "64pGyNd3iCYchh58RK6JxePEfrQVtK38FPWLj3UegdiiYiyTSpiZPMSM2MbWaEjnUwYr8vbpNBDyucQWTxgQ8VNR",
  "key29": "26KvgLbVxbhuKAgzLKQZ3nUJjUgB8cAgwwj4omYufkJFiDnZnKPQS1SJ2M3bCzw9BizEDuryvZY5qugQmnshnnf6",
  "key30": "5g9xWA7BEihSrtyfMSTwvuMMNxZUfSi2rsD47bzcNjLz61oUaxUJ4Ni5dHw6D44DxTHJfjqrDwksvh1TUC5TvzNo",
  "key31": "Tbeg5j7dsQch1MXKuqjo9PZRpzp45hqX9xzcMBYbS5RR3RCiRpqEpc1kJiaZbXCjEXBhztxh5QR5sbi51gjv3SZ",
  "key32": "4D1e4YwfBKxCPiogUpE5GrTdYm6A7DypqaGtNinyTNTczsr53gXK2DiaJATUSa5kX6pTE6zzRS34ZQMBSqwbLtiu",
  "key33": "24HAbS6ibGFRjFEqiCUTkRsczYes6g3Hr7FhTfnn4W35AjEvtyqkNZyE1fhxgb5opKo7zFjjokqEAx4YSgKWBGUp",
  "key34": "3q9nLfvBVhkVvEES34bywK1gw4bwzCippf86RJzjmqpjvRhEG82XfgjyESgrKu5DBjcFrzq6rP2BXkd7AJvqeaRv",
  "key35": "2aCyYHLCtHYWrkVHaYzGmAEnfBBnhgZ86K1DPVyxPSmq3DjZLBjFM3StL9ZxuCMRvxwWFd5oMtg3QYTLWRoDJFee",
  "key36": "4t1avpAGZSfnALcR5AwQSe7LdeAqLkLvbiqKNHEM7Q9Kn6u7X36panWo61tGXydviNbLutsHS4Ndm9xNqcRyL6EW",
  "key37": "5GGtf9wMNcojikwUTDYzA9hBUkvKHnySd8z3TR3UVQarpdA3XWKWxR3ZEGdw9SxKuYNoFSV39axDq33qi6uSPQ1L",
  "key38": "5jtHRUGerz5yuF8dquFT9tditkzVyn8H6MAx6Db1nBAF7Fs6TnmSZqLuReXZHhaVnJU6bpbqcfGSsYYL44QXgtqG",
  "key39": "5DWXHRhaDhgMm1s7CRxprPWu124SUQxRU17PxycwNm3yyC4GLrt2RuHpxzBchwNztkKmSzoMJJmyU5rwyTKHfF5d",
  "key40": "4TBAQ9g1odDtjjjBm1NFjHfL4KMGkyDY4rCkYmmdVqAH1XnaPva1L53FpQvP1yx7BbaSes3agncbMzQMjdY7YPfM"
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
