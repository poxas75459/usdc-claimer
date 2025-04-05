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
    "5giJPPiD4BYbsczcMVezTircVShatmAVohqd17ZYBrS7Yh7XmwndrktnTwG7PchZ4XsjozrgzfWhoowRAqjBu19X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AMQa8EycxHZb8i4KBBqC3vU3rSw1BBGESV1kgeD1ycJSj4au731KKowB2wK17FivkawB55MdCvNEnbpfpp8TjHa",
  "key1": "2XYsWmypWxV3NZvcpQgUaZfjvqJycVFgoZ2WwaQuQVmGi15ZnZcQ6YTNbkWLNBtxayZRRdaeahQuMiEWpnGSUrPF",
  "key2": "4WdQ49N1ztTbi9pbYMB9RAxWgRZzEJ3nbjzG6WXZnFSFhx15vvB6YXY7oDMZwZ6p7s8RggUHXWBkjQ292iPqHDvu",
  "key3": "3A8Lpg5mwBxxfjXM8p4is7tD8U2hsRdM1BxUJcmJoVXb62LmQdFzAnkCLws3ss5qjb8vnGTAxXjgaGdnLWMpSqex",
  "key4": "24VTLEvjwu7usiaZ5D7qRYrCQNLFBwUGuoSkxWF34Ld2x82P7k23F55W66csUgEkj7jxcx3hHDSNt4CqEYhh3E13",
  "key5": "Evv4VYNn2cG9ymgFeLuvnr6VrAbdU2ygANgW95gHYbTUYppZtdu3gd3DLBpCTdqBUJwXWuPwW1htgVxAf6BShBL",
  "key6": "RBKbdLCZ1QxVHwvpDEDvb1PCXP8Va5MptUbJC5TJP45gZ1SiAUihwBwzSmQrZgZ7seWA5MFarASUyZct9Ra4VuY",
  "key7": "3uCELhCUdX7CBHfu9ANn7mjigWVDUp6m2sXfTzCY8UwPeSNdtuzRnsoWLsDDdVXY7ycw9UdfnRXxPc2ujUUMAexY",
  "key8": "44pn3m8xVNHFwLQJkiM6jvMx3oEowt6wGHz7Sn7v1X1ksMC6i7ynTGS1MrrkbU3hB41iCV5Nw6YgiRkJAgyBaGTt",
  "key9": "4DPCoAmNzWUujtrrMBWxRmAEnmEbttCJZcCjdrkAJ24E3ht2TVjZPECA3RZ4ZoUSGjTUEXF3ugtTG5S5sjcrRqt4",
  "key10": "4EY1WJZhmHC4yLPQKYpnHEkZgkkHtYVgigZ1tbe2yweqfTGqSL5upjppSUodKyDCYqtw9vGdtC572AkZUu8YQAFS",
  "key11": "3YpgYHdhn6nXznRHikzbiBEceDbXuBuY4ccSPYFqJYWsZtHUbUazCbBNXoDU5zNMN8xhZ1AK5WVa9M6BtojcgaPA",
  "key12": "2UCDmqdHh5kRdEeut18qkFxiARYzvRpE6v9E4M2sRx4FyVC7rZq8g5ZbZocpX483zzxRSuFnQgbXfCjvKBStuJoX",
  "key13": "3x69Vhb3c15tWq3SM5SqAZUSCmDvb9StTPKPQFJmLFB4yFNnUbs9cgeGE6XYkqNKxrn4JeGJFNrtC7aTi9CFsE3f",
  "key14": "643x7Mi22SWmfdh9gsTctJv8yPzS8DYypxFNsDeJeZvXxHWFrGXGnRce5s4PcVKNTtyjH4z6RdYCoaaVkETH8kjz",
  "key15": "5i2TdXH8zwse5r7B2dqGjidsLnoryvz3fzC76x4hMFnoFCyynfhZdqcAMbs2V3nCKusBQddSHUYgZgdMuGAkfD5G",
  "key16": "58n3dJBomSfsUeEoty4Y8U96iNr6SvZpE4MDgNNezJXAiKt7177k5FYLXLKmEKCCYvqjBGeDBRTKSyyKCTWdivwp",
  "key17": "ZkTLKHkaMYXYXxuJgZRZ7estj4Pp3L6zLFpiFYye9yJCpcGG4U8ZPSAWi9aDvzgjqQTofKRVWfyVMN35Tx2MYYk",
  "key18": "5qQsjz2taBY7nJqG2zqXRipE16zTt3pTgtn3ugB7tC3mG1LhofuXgiRYtT4CC9cSgCPCQN1QpFsLz5qGJi1phnX1",
  "key19": "5XiY9S8wvMAEftMZSnXyosuxqANdgnTjbEZsgmGZWi7Xgor81EJdKi88aYfGmbRiDk9zpbNktzJyBYDqfaRVZypV",
  "key20": "wvGtgKmVjxcJvmVY3epeVXm31eHy9NtL6qWsBo5QCrBzD2yJVFrr6VZoaAA4YjC5sqevTDmTiTwGnsjtXdr39UW",
  "key21": "MHvxLevABfj7tB11bY23Umfhp3NLGSJPDz1FXLtbgcBkPUv4mybyVYhEtAJ6SCj7e5DwJgUXxPsPZ6CghK5jgwK",
  "key22": "62HF6wA19KZkjwiuS8T2dYkzPnEoprjen9dtLMpdimZhnMN6GuSM1MUmq988fMezNESt1aur2hjqFgdRjnx85N77",
  "key23": "4S8Jq3NbEZAZ8c5wNfHWtKvKN7jN5Z2NctAAHSiuEkhkveMUCCi68AoXER7ue8e3GBbHRmTrcQYfq9FZHKDvTbPJ",
  "key24": "4ba1HzFWjmRfvGxco4PywpnMUSTEQHGGY3VrVFNArbjZ6RhPAUr1XTDgDhd1Xbv3DeHMrTzvGdjptvgh1sc4skTt",
  "key25": "4sJA6maG8aSZCKgU5U5nWbJhtekd1SLi3xMbjZs5Jt72c4S6zgJfB1zoCKXRtWAuufCEc24et4eD2jQ3ZeD8D43o",
  "key26": "3WxNNW6aKeUgPoT4v7AiASgPZQCWqmctsaLMMLpy4nxo3MzGM534H1cEHmLqg7HQMepoxWr1WHFCHFRVhwDdTYiC",
  "key27": "3rnUBRRot3bjprvB1afzcgsaTk83h417kwZrqgyhqY8AFW5ZH3n4bzrotf4bzUYmUavcW1yJVNKkSAhS82dt385n",
  "key28": "61QLAYx1eMRez6Diqk4UCwjDXWZ3y9y78rxkDTENQuURZJZLFbPxLbhiDYWHZAgYb4QNxFGxQ7YGA7N18bYJFosi",
  "key29": "MwDehGByoYxpxJujEx7B2r4kJPRMNt5WQ7t7fhE154ADkHrjsHdqpV8Gch1ApxV7jxJ1S67HvW7UHQpTPuSegPc",
  "key30": "WcLuhehE7w2eFDznCQV43n31Q3FAgAXEV4F53rWe2Tbe9V2eaVPfMBJ5XPyNdUnKFG3X15xQBdyMoiqdVNVdYaf",
  "key31": "64asc3Ffnp1q8PnBuu4J7BAjhb6pJ5TGP8cqGkT6U6qeYCyAxM2bnS2iDouVdZqbwYxKmXi1vuPVDm6Ro6gMSvb7",
  "key32": "3fsPVXKzzsuVE9AqyJXoQg1brKQrdU2xYFQpXJNgnNzSenPcf6n5QH7PGuNme3S4ULNst5gbbeX6Fyksbp7RB6Td",
  "key33": "4JphMHMvdxsLYciEgFZwYe8CxDeokeBEg3rfooudQVL38xpMCjUqRQ62JodEHFM52zWkfybitDqW9xzqAyyvReGy",
  "key34": "5xoRNjmKdni2FbKxzt2Q65UBNnMpjmRHwMTbpCK3t8GyUge3f9tXq1W2G8ZQVLraqGGbgMJsgUxbzD8oLsfMQqj7",
  "key35": "5cegRN9HFXNLL6fbnTfLkMuQDsLVQLisdspEry8hXscudJct7UxFsCtUYqBrAVFcxdqrFaCfJHWZGvR6rByAzRAY",
  "key36": "5r6vgFC4B6ekfWvQb8Hn77cMRiWMzQUfV2EZo7x2qmLk2tmGY4pTN4iqKo54LG68Hzo2sqRgfLYnqSSJKoaowvXf",
  "key37": "63qrFBK2NbTNBdPU9FdAwoqCzNc9nmKrSXzjYM8D8GzCoscL7dY6fBzr35Ln2EH5ZtcYSKGiQ9dZHnZ837i64C4e",
  "key38": "LKB7EkU6jwaGnM9en4SbfY95iCBnozMwT3GbZumFU4YpJxt112hzY4ihuuppjbsETXVshgMYSfZhvarRCP34xcM",
  "key39": "5ZCp9ELNLuFhvZWXzav55vtiJovj88w1qiMQyYGW3W3rH2W6dFu8Nt1CaPP1K6HHMkdAZisHwXJPCrZxiEHz8mob",
  "key40": "62wVBSYmtCGNsSXDmrpdnwSPtzfmMjmWXDE72PpcNw97nwJkbC7vUf3H6uBgwnrvjJneTuHcA7wXNTf9ixCdpbR5",
  "key41": "3PgCjNNSLB16agiUgkysxVqjUxGNCaoeMBhjGfXqDhYEZfMAzb1NmPMb9iMGir7u5xq3AwgG85iJEZPvZspoKghc"
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
