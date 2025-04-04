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
    "3XiV9b4adMHXpdPwxeNdJe78H4NSppu8EQievnbf9rSSfTxkf3uqpc2cD6T8q6a7gRp3jXVMgGfgZ12bfNmzgn3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJMQBBEw74DkKmubwQ5R8f1ZXZWjTHU8ReFPFjKhBhy7VKPDVjGYEpkAsMjPW22YCU29mb6reGrqU173Lhdazf1",
  "key1": "3iYXfBkVxpYCvxNSJofD24VkwHtp8sLCoMbw22chQmXUYz6HsTTpcQmvxuaZE1GWfPFwYaJ1P7jBDzNJx3WktiZ3",
  "key2": "3xENYrUwKZfHnbawGkBU6ST1JTaEKhuMRxsHQKCXnhE9HT9G3hXaUm2LE9Yh2JqCKMVBwMLzo4gTFtW8NHNFvEX1",
  "key3": "E6gcrZK1UgqRPN8SKGQZH12tSJFHM3LZb4mjZ96e8uRqnw7fCjHHjMy3hYWth29nZ4Hsd8nbK2hMrMFL9TtKZQC",
  "key4": "5mFioimKqjAgcL5qzLXfLzvtP3vcX48SVe45qatpsno3eUaKJnwquCqxbhWLW8wwSr3uPPcTJXZiiyY7SYNqUkWh",
  "key5": "4pcvDzfoe2QZqczQekkbgGuVvM4jKABPDjzZx59hSZsq4BEPJ9rnjY6M8C69YEt88W9agnZyE4h92HhbUoLgHPXc",
  "key6": "2epNT4DRR6Kgw4AH8ppVCfb3uXxef5rqj7A9Wan48LHSyAqvN9dxv3nHuxQBk6juFgs47v4huhZzzbtCHwBUAPvx",
  "key7": "5SqYYox8UxbJ8aPGXAcmdbytJzQqG75LFwDiaoB4iN2VkcRNVAFs6dgoBzN1ZDmooUX81SeJVMtJd4ScjuzEV5G",
  "key8": "3hHgpqQcwBZN6yJeRcZuN1b4uJZ3FTSrBa8kogkNZQ9fhm4J25p98pJbuek1vQ9n9N1uNUo3MbpRGQVX6avXw94t",
  "key9": "28RfVs7rvLquxvvXk5s4tVsfaDugMgNDTrTEL8inekvFm2ckMJ7nEb78cmQnYnAhrUQVEuc5yA7JU2GQxCmSuMT8",
  "key10": "5cTrmgJGvsWfvTkN4z8GtyczELTmN2xS4RE4vto1vpEgVnkChQfAbuL67S2RuETm2RWyefGVWrpNSp3cAuvCNDKq",
  "key11": "5ZZ1jTqmfa6ns5hSSDMj7Bs75ar4pV4vY6BRqPPcYTZwkQWS8Htah8Wam38PDxTgEn8td3TouDUaEzQyxEVQmJ4a",
  "key12": "4ETjMHnz3dk9LzRNAoucmGGtVuLtzPuK4gXTU2xbXemA9SZzSPBV6GJpCeRRc3VdjHupecKWssLqEWECddE6ye2Q",
  "key13": "e68JvxjFU52n9wSTUimuET5hQ6MHbfactVsSPPM5iDtFMEs82tT1UbsboTypSjSqQhy5rfEJHe8DmRw7WTrDKLP",
  "key14": "5UWkzz2u5asmCDKG1JnR8vH6EH4ERtCTMA41eoYYCcJgv2cgCva45xoozcp1twM4iKx6MBNfmLMvZVLDsV6ZFk5i",
  "key15": "27UoktCPyxekAep7EuxbH9snxEpMrAjYsaNo9rv82GuFpW4pWqNYCcJvacNtZZLBkcQB4MBc1G9PzKCtoQ65cg97",
  "key16": "2eFYwNxMYiSWQRHY4KYowRvfF2QKLKsxUcFJTtVCtJabfRzkeJYaDU29MgeGyUPkd7y64FBK1zfQZLVVpeEaxu5U",
  "key17": "28Cd9EWZ3Ut58MCynvepZWhVCK2TwL3Tt58A2pbWsb87fSaqmwK5koY6KPpP4yHV1QQAbrnAjxeG5afspENA2tVE",
  "key18": "yTX99etHz66tpow7WvAg8WNPurkQMHFyQs9XwzRYLmghprVw1DvHvPckrTxiSECM6tEQG45kwobd4CTPwqsU9dH",
  "key19": "3gKrqqcuefavJ76PW7x79VJvcdmQpbYi4tVHUKfCsv9Ss4Q1c7ioZG56Vy6wpFnJZhSPrCscX4o3SwwMRXsq3xac",
  "key20": "2Hho6N5WiDnMfsxu1m1MQj8UXTRenEN2aCsBfnX5JoB1TGHHbJcEmzh2VvHHTNNVy8B8HvqvPqj3zVXQEX3pU2BN",
  "key21": "UHnrGfHgZBt7KanyXMHrSfcXnnC5NKDCPAXo29hWNhBybeU7ungu3ouDrwBkYQU7BpGYLsSCc6aYVL7TzPitF36",
  "key22": "4efTEydwTCi5GhQr19KFoTQLZVuJyqLPvaTUTb1vJNyJoAkEQzbTH6wUjE6BDkNdzxDVbWuTywj7k8bata8jTKBz",
  "key23": "4mJV5tmNdBLFVktxXx72Ryg5YPRPQhyeQb15Q9Sv1VtW3RtYH2JEGhJKM9KgT85ym5DbzE7qL1aSKaEQv8Ee5e2h",
  "key24": "T1565AdhhwzsnqMGUrtd9fQxCJWbNzwkj6zUh2VLMDLjD4cRuTqVjcdKu8PkXqgcx8so3XdriEhKWbPAPLCx5Qb",
  "key25": "bxCGBkUaDuhmVWXb6hXsKu4qRkgwu4vvuG8iJHDTrC58mhXNExLGgPAZi6Mp2UjpT7rCnaNVtrP3faeymc9yVVf",
  "key26": "2CL3NU3my5a1H6tQ1XMo19FQFQ7voqaAGTFW8S392RXZJUx7fgpkxEJukKC5eUW5jzCmfciczVNwrPufEQY7EPCu",
  "key27": "52sApCikmBTwH5QA1t9hizWZduHbpyW8g7yGH7E7Sxibdzyy8ETKfudJg87LKn8rJ6KPYPEgNAhABemVYP7zvd2w",
  "key28": "5myvKuQwQBbPgexT6FnNwdnYQKadqM52UWmKSwjdhAf3SgJptzC4ZwgditiwXXRYBPArwnjd2j2DBw8eDqMhZezm",
  "key29": "4tzu1zZSiwb4JJgMoHE5jsSRsEnULfUssb1ZgzvCPEMbryw3Qer3abSDsrVohWbPRZFnaqoXjYjrWdSKnsDLqPsF",
  "key30": "3r5qSe5XnzWGthXDc9NBRBKEADEJ1cZKMnREHy2affZ22L22GqrCQjq9F7NefAn1qX5WqBDDsLTaoNuaPvWmiG6Z",
  "key31": "65vC3cpYVZP4XvBWykBDyJHnRoGrFh16XE2Qrdvw6LMMgScJeike1amSyqnbDjR4cLJG4Ucotfs3LpmDYijpEFFm",
  "key32": "6XnT7J7xNpu8V28jEjFYYLWuRjTFykdjhAPzcyhe9zHgHivMzAjwzcNyZN3YukncTftPKmNmx72MniJgZxnuErp",
  "key33": "3s1rBiVEm6VtyUktCMerA9vogJ8NgLf9yLTNejRhAFMipiXhg5RVX2TQhymsJKjo4Pw66rZmPYqaLBw4cDdTto8L",
  "key34": "2JaSqtro4F87DYLsQXM5GR43SPmxa2ntL7T6Pd6ZfT51Kfs6BuTA5pLPgdsA5nnTHnd1ujKULgPtnYy7wvvpMuoo",
  "key35": "QuDXzv9jQn5qxEoFfttdFaLM6AmVpVekUWCpExKWc58tCigCDdfbr5UncGPAX6QtQvZzNMYgnG8q12TfuWmGqse",
  "key36": "5BB5tSs7NNaheh3A762D91fjDW2fWVofbzzdQXCnJctZJ7VPf45aLT2SDEhgkgREYhesnbR8qwsLXyGPWGDgHnY7",
  "key37": "2kBUGaETM894uxrDhEibTgwLuBtwB87P3NEjnVmE3mG3bMUiJ5wcNvYhZrGA6WtVN4hJ2Bqriw53n7xhyD4aEo8Z",
  "key38": "HhyRqHn3ebcu49MUavwfJ6VW64JNtKVE8KNvjXVobCZPkovtBAQaQLcPS5PHYYCnTKdfUJBVAt4BXAfdyNpZb5d",
  "key39": "r7g6zLBxc5feKqXyoAZFjjiyPQqJYvtPoeKug4CRFxzUQaMcuf2A1k8sCYYwWaHFvR2WdMjSUVk2URHjo4A8fWe",
  "key40": "4gch4Ukj7GX1YSDTSa6VrYQDPeJ6ZrQEYsLuYgsxRSV4aNdkPGm3n3vs67anDv74QmmJVBQ1FUdBtXAtXwYzYif4",
  "key41": "4AdNP6MVAMBFmwsxi3pPH3L3qcHB68z5gqQ4NMdB51CwmiyP5mdG7aHMqcQJoVhEqX7LFebZVDKAp25Sepdto4Ym",
  "key42": "4GZQstk7Xpup35oLEzvHHjY2aZVPtALK694mER5HcHFrqmCY8zB3sL1BAwvFPodFDhawr5amFWXATU8BevCfzWXd",
  "key43": "DbKAsRpZ57MxxuX9uzTZZzsLkM1ntnyZLtoK5N2EE34qykCsMJ3j4Zvdwp7VnVb3QXx2jV9rBUtJbX6QUdAPxHV",
  "key44": "5P9n1ZEPdg6R2wau5XTwiiK7qLPNhDgy4WodrUZVL97t4oHp9LSx5zJcs24fRUagNEDW7BUr8Ho2CZSseNNVipcA",
  "key45": "Htx791b1vTLrmqn6eUKcbNFmMtvBgNsmK9SVHvezdmZM4BSKDj7WthykuV1swveGX3uZDSZRwBQUsMFQzJ4VsKq"
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
