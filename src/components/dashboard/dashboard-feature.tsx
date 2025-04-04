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
    "5DPeazg55Tnyzu3uFqzUBUd223Vi7sWLzDJ9Lm61Dk5qbzFYxSmb3L1x8LqWFCTTiK6LgSdUaQ3AD2Z3VsromCJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CwXreSPL51iLCkD7b9AcSYNku8YHTPkSZ6aDosu3bE8vH1D3648TVMb8d2UvsAwkUNu9WtWPpSX8cMUMGZGihZp",
  "key1": "5h6s6Qio8q6wz3LR8DPHrj6czWw8hyEVZztuZgbhVxxt8ypRGSPCP58EBh4FbkZbfE1B2QDpXLo2r4ws5iG84MrB",
  "key2": "3VXK1URwVCmBnNsQAz3f623G2tqibBm64CfELC8fSod3Sw96aBrMtnfKAQGpAXVNMjUy3UaBpbLrZTMcKkd9yrZw",
  "key3": "38a82EKe4BpDCE3CvhQxKQTPsDmz49vPeK9GLsW9PrPC52rEkAjuojdDajBchY57VKbsADak5vHLBdhFWLMyfu2q",
  "key4": "2CEu2b8tKb1dqmRo246Tiqg6tGiVW7mWpseyNkhDmbwqHfLZwqAKB7TCx98qobn5xzBuybzZqvz4gVnSx6ZMHeyJ",
  "key5": "hr5mtF3ZEWfMcgqjcS1CZpaY35zoK4dTjFiebvcdAUsQ63PfzjVxH3ss8Qdoois84Gqawp9M9tYBn7kKtwh8E2Z",
  "key6": "5rY7tEnR44Z5aqNxQe35cXPeKzu9wkAVShBYedrRWHcGFbYKTMo5YzY5zsTaHKHfbYM2Yjp2E2Ta1pcuJy2Mi2rj",
  "key7": "5mgA9HuZQhNxXde3zozQ3YotXb75ro6SzjfKSY5gdu56Y5TKWNeX87gsiTH5yQXiDBUfA8NfGLDBi2r43Xh4C4sV",
  "key8": "53R5fwxDqxXFhV7QEXsJPGtDjcotxsgBxFx8bQCK9jLoA3UizXgRWbzBDdV7zUFb5KAZyeXCMBXms5L6oDYP4Aph",
  "key9": "Tbpd5QZym1DCX4P2KS36g2zfcgNhqRVqoiASPH2KozKX6vRARqx3XHxaB49YKameqj9fNUwRTHWCpjd9oDdTBMD",
  "key10": "36fngU6XYuSh4zkK5Tg7Mbs64sqDrHydgfv88MeRvYX6Z5EKPMtwMEWVfzQQMQVa9UiKB7aoidNdcrGuo3fBkeYn",
  "key11": "64whv3nqMF92DmTEjKveAa9hUtcWnJ7FxU9dbxzNjFQkAd2KNTb8r8ULdNdCu6uxeMLZfhP7kw8dzHJBKPbUuaDZ",
  "key12": "3MFMRARLadqFg49TfxkXJiSbvZWrKB82M11SsSjFn5CNbkxRu6tZRm6TvnfDBWcGDhNo4cw3eugyKWdeVfk4KNi7",
  "key13": "D8b7d9hzN5NoJxKwMS9zztxKRjvNu5fbKvRviTZBLJFb24XmWeGg2hcczzUwvh9bp6cNUxaKj59kBES6ezwibpj",
  "key14": "5j5GWyxwvCUAbMDMeYkc4tApPCeVPDkvmPHMTzxpHtqQ5nRUfEpvNLA9VdLcaSWVH7yKHTppj1eqcKPpg6iyJmAw",
  "key15": "3Dha7kxQpdRwJk3wdhdUNdLyf96UTuzizxQZb2ZL7FVWVnGzBPzbJGBsJsLhQ2Aso9kNWrqcn26XXZtToPHM1BbW",
  "key16": "59FC9cdC5rhqG49qX73imsMbrms1Yjqqov44FFL9GL6d4Xje252TKnVZB3E7irUjg4kmSCpn2fYW2EbJL1JGuLCu",
  "key17": "4XQQjBrh4ZJTQdpKRHLkdRZ3hQAbMs1HNT2cp4pNREsB3mDA1qGXySkNu9Y2GBrxgJTugdVjuTVrL1DRHhCJTfuV",
  "key18": "KXiCGsJXGFXQyUwAxDPWypKKKpSmWgiy4FHfy2t4QTgTSFFGiB582z3mQmitEyh77ytf83jS7CfaifjfvLKaFQP",
  "key19": "FV53TjNH9sgpUQvxfpR8Td86C92zBHWJ3sKFSrN2vXvR1LeajaKisq8E7aurDZKeXUE8n2gdQwVsQMvSVvbaNwS",
  "key20": "vmvkLn9BfdiWtVkBkKv3bzwdtWmc7xwcbZnxBrHk5SshsvrjE8RmnvwZuRoKJk1PjHTRrSDPmsRNAF5LNBLXtB4",
  "key21": "Lbf8QYQ3jCnhy4CunvaJABF4v3MgyqQxx86pxrtBWM6GMHv7CxiMBdwCmsZpR8Rsn4tg7KcNsxA1Sek4wEjKWtU",
  "key22": "4JUVoxmU4rwUbY7W9Lhp98t62Nty8L5SNQVGQyT1fZhZSsBAk6dcUZyr5KGMwMNRxTsoDNKHW1hjjdWxTYVsSUen",
  "key23": "3sRQxWocbyNHuVTRWWMga6foSXN9Z9MjvoGFFVFVbQ8Cz5tnCpQJP1bC8w3wkKE7UXXL6cX2whcYRFKCrRByS2cQ",
  "key24": "VhyQCXpfokaUiaEkftBxavQnh8PvEg8fjwfhb9XpNYdxhfocUqth662dVJ2ThsoutfrrLSymXNj5bojxq45ComJ",
  "key25": "3BgGqNgLqu7dWxYnXZkSaZ9CMnbcovkTqzzmQcdwYMFKpQ4fvvTaQZq1HXuLvELvujuwpxj2kg63YmaAg6HpVGE7",
  "key26": "41ftM681yxfVrRuqKwDjEREcDSKUmQvSQ7JRoXzpYuT1k25LgAPCXEhRcJZbnMKZb5eBfEi2RLz9sR4pZdWmnnfN",
  "key27": "24akzbpsevHT53SDeqc1hZPdve2B1EbH1BkQFwvNTSmiDMdJaD123pTQqjM1ermHfEBorrY9sNWAqSLVDB2kKUNf",
  "key28": "4fpSgGwSerPqhYQUsnzUgp5e5n8BgAmbJcABTwgHs4s7vd93poZf57g5oPjrmP8wSJ9XpUXCdhTzpjx7W9PQ8jNc"
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
