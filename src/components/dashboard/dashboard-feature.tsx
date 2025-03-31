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
    "2K4jcu1BKVbrkXPtJdHzSUVY7vXNpWRdN5jDEvdyicCYd6DoHQpJm3vFuGZof859aTqB7MqRDJ9FaqgUb39eM4KL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "475q7R1JjhharDzNpA5GcRtNAkgY7chuZQnnnHhkYepD6NeSu3yVYUFVvyD8sEPjLm59FkAaQYREXmLLmNNndCga",
  "key1": "3BUyv9f99G6KdCBw32NidmKi8gaq74yBtWsJvvVg9VbmM13VEWoyEaBuqj85niTrirrF3vKAzJVsDMvbJQFfXHEN",
  "key2": "5oL4mh1jX91C5emfYdQk7HEd7GS3XaHH8eWLSe25pzpXApwE99uiGZWDGqHTacCRz9nMsXUCF71fAGMAvnALBnvi",
  "key3": "28aoinBoqbqBMViTuJBxp3NXBxN88nhGeUqibmL22XuJdFDs6MDshjYFDS26VJY1tc6SKe9ywGgS1s7jqMNJfap8",
  "key4": "mDWiq8NMqrBeDDMDaXgUyxL95X8J4hx2CC48rxCfpyJEmzXSPpPvfqB9wrswBzq61pTKNAdrj6cpk8Bt3sBZR8S",
  "key5": "4F8imwsLVwJYt7a9Hj6YwTPwLdYWXkrYmz2XY9uh26ASrCUEjyGdxbG3xbGYG3uCxZtxiop9Br4tUvEEPCJKjiSi",
  "key6": "3dZzUqL6P27KcbeY5pTmWcYFtn29G8LXqs9XeJwAjdMheo5U2hJExpr8Fc4QJZnse6jUV7UkCSgPBpV5XV2jjsT8",
  "key7": "wc74RekjpLrhv9wZptapgG3GGRCFcsjiKKmM3btgnHjBo1Zp6yeeDyfDRDDbHzN1yjL8JdLtb5tExutQkcN4Y85",
  "key8": "4TLqtG7XWM2Cx2cEU8TBuZy1CBGBtHvwAr1Pqzra7eSr6rEcM2g8BJUNWomE1xAchEcuFz7pMbXktvnrRFhZECZe",
  "key9": "49iDccfmSYhtm5bNnWnTkLz5qdc3bW7LZLXGKLZ47NNivh5N5asRZLyF58qqh6zAjHZeH3vQmA1jwjJuCgcxUi6y",
  "key10": "2PeEWFon4AnL4ucZqw1us8sq2bQm5J9caPLPxoq4rAgQPwpqib1j7qWReBmLBYTk5gaoz8MYJr88BVYbmt8wEgHA",
  "key11": "3k8bp8AQ114PRKgttVQCbd7eeWRT9YrWDvNxRZhZYuTCZQcPicnQJwjm4qNaByPbw2sarrsvKTs9PTRRqFh58mPi",
  "key12": "46uCU1i2US5KtZQ5qgi5qBmkD51MEEXeEUax4nkD8PQwoSN658FJdbJvjmF3qCFeRQ5mgXPL4rKBHudKKUnJTGcj",
  "key13": "oise1Ze55JAAXcMbVJwCQj8bDy57c7FuJyoWNAwpq1q2twTvYKi9XqKZ1P68vTewzLZwSHigk3anSb58mHvZ1s4",
  "key14": "2nxL1vDkZ321LM37jV9MUY127jbJeWSQ4pVjytGrn4p4vs2t6ED3ygBtuvUjxeEcePHSmsz3pSuojfV5hbPmtPSU",
  "key15": "7BFFBgMUcJkydgQdtprxevfEsMU3ZiZWGJ3zEiMGB45BcUhNPBaiXXqX4MTDTmmAZ9LPC28SybBWTtviz4j5ayj",
  "key16": "3566ok5qaRpbhrrc5XsrkdUXKHaS7uuvdWBQVRv5gMzy5GSVzEYTf5ppYZ6nQgBCCT5shgoyuwf9VLR4SrnVckYa",
  "key17": "2Uf4kx6TWo393WZtKkWdvrksYcK9V4tvxwbDP2ftG2rgbDPvAdi6cpyqsHR8HH7tq2oHDjoYxGxqzvdwLcciTdMn",
  "key18": "qBs8nco2f1TsJYKm6D1rqSemyuv9CG3hJRHLh7To6LkKv4XRhr6wY1LHTNyVTj6THPJQUKtken3D6JjEK9ZarxL",
  "key19": "5X94nbmREF9Ezk747gaqQDkq9prccKG4UE5tMs4CT5afT1M8uQ9jBWCBjRxyhyNXzNkhSeWTJMJyM8QqE5DAjPX9",
  "key20": "yRRDsLsoJUthfNjV72S5UbZPQi41jsZL1DA9WrtMnG5cL4JSsPSC5FJYRXGY8Rg2daCXYPLM7AbxCC9bFDMFCZs",
  "key21": "4FmbiFxZRFFhk5RpZWkZhBAaAbNwGZrF5MCBeFHbQqCft6Yd44jVbact52jYvACVru6QTdnBjpqUxKYCPicyPNz6",
  "key22": "2fnbE9WQFDPp6n2Y8mFgsbHnHh5mJuRfoaBYnxDfjGemCZygL1AUBY6kWAX951efAVrRgZi4xv5KXGnr8KcCy8H1",
  "key23": "3wrMH6RneTmzujd6JLWWf5wtq5QnJG9GD6gDavxQUb3WzYR1kBXhEBVusSQfgzqgDCneEfkKUfdUqJRjr1kWSdHr",
  "key24": "5Fc5SSzKo48gqinJpTC13BA5rWgrJ4iGhwDuZgFwgktVWPaFqugZTe9U4wq3MgnUxMCmNosGa6c9nmAyApmPMYui",
  "key25": "5qwhFHhwqEqkvBLsSJve1i16iAFWBWnh9KWw3V27WxuAYdSwu9pwwF5Qpo5z3NQTTJCN29x83gQsNmvm9wfRfDDf",
  "key26": "56JyBFtgjEoYLV2KHnWqgAskmaprNZqpY6aqXQvwUkt4fehYGaBYPdf321Efm6KsE1wiG4mAZprAmeqURmuPTkKD",
  "key27": "WEJX3CWLgAdhrArJuUcTLfMEAMCjdgcQTwYsSNEsdgpeZk8K2dN6iKgdkJnfgCXLX6Gheojoc4MC9pvh2Rei7zS",
  "key28": "2df8NRQcomBS3XUZymEVGwWxsm4toLUx1s65bdQNCE8oEQFcCtF4o43r2715BtsRK3koNUePxQ2S2BNQXS4d5c7b",
  "key29": "68F1gHqVSRvbwyaEE7FEpGbF3jh18J5xUUbaCBa6ybdYbfBD8k3CG33CDxXUCFTwD1KpWB2UiwwqoTev3xbDWrR",
  "key30": "4x11B457ucaM2M2RZBaF3Yh5bhAASuJRkq8DistauoFpTBRLykASFCTAhVscxSsnXcWRdEaAxEJu9sViyBPPJUae",
  "key31": "mHvUwbRUK6PdDk9r3KqyahkXgLp6SsXA6bC6PciZf2NcmveDiJVxizHeiNVtGkgzDvaWN4BhQKSv3JWpA8pEeMG",
  "key32": "4MmrmYGW42mG7PPwgT3hBExysVqsZnegq3Tp7j2VsHBKx6kTNQb1Yp6jrwRcAeY7Hmftd7PoQGq8GatVfDbmFm2x",
  "key33": "5dgL49Jga5C8E4uiBg6g6eU1yszWdFGTP3KfDar1FtDmDEtmf6fpVLntJSwx9D3LtLjyLThArW4viNdkD8P1Cmxe",
  "key34": "bfTxy8dUSmNs9PpxnnHBhnJE64LynRq2Fp1PJ7V9JfqQfmpb2rY3wS6MdBQnEBsBePEazcqCkCbaryTufxvcZ6s",
  "key35": "2KFXbVYWDiNhVaSKNincNtv85PJHyVKrnbQxDd5xhYHHZqu1XaUQBr4xe52Z3thLftQ15ENZXSqpnkx2xH9CtHfv",
  "key36": "2s1GNjQJMvW5a6gDpG1M9diMpNDmvEVrJLGKTo1D7rp8Wr6afXFdunqmp4zgoCXEPRpkGGf72HfVzfP4A4oXrXvV",
  "key37": "5CA1pSfV8RARddiE8xCQzyXzYD4Q9WLNPJwLxKB7ikQCgCHj94i3WSSa3zEaTYi4RZ8GzXfTPt68LRoeEocf9idC",
  "key38": "5dRXbH5AAFTuVk2punKZaUXK8Vni5U1RypNSm2VZ42xnsqwT7y3iWaJY9w7GFycvrYRoGV1ytnMeraDRtbF8VfGh",
  "key39": "5T3L5JbUPctvyyLhgKtenWnogjft8ECwqoQ6HLsQCU3BVbVDk5yqcCDr9dBoc9gXjHKVFBcqLue4UL2dapU3woVQ",
  "key40": "2gWeXGidzfbBYcWwBaNk1XA3CLNzuiKfo41nGriVJZc1bUr3Kwbbta8binCCie2JRKBLMSG9cDG1ivy9t3invtTU"
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
