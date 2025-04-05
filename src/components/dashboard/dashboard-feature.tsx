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
    "iAu7VFVt4bM5NG5qUX6zczV5ggNtLGsQTzChxPwxgKfvdFVVuLwf5e4Tnu8rvMrfSzADwK5JEpS6NydipzoHWpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nQmzSfjBuPGLq7N4Jh7f6uRSbksNLR4aW9U7Aegi6LMSFa9wBtMn4ytHQiAVSuS49WLTdCiY6TkYbH9x8zupR8c",
  "key1": "2AXREw1MiWYHSDmPdTRX7k6hQYQRhuHE7tYwsCGw9eTaRrJkgmfpRHJUj1BMsJifnFByTwiwTPbobFUxuMsSj2ML",
  "key2": "3qpoMcTFq3pXg1p1JDqcUHUmGoXSpH9X8Nt9kk9nFNaWbnJsaSHQg2fNizkyX64zQoWLn8JibcQGFeAeRRQrEXVM",
  "key3": "28hB2uUHaiwZRzVEkcp126HmimcqWvjnXQSTQFsLpXCC9WUizRRcEYvRHCfz7AhNhF4fgVfXsWDNwrEjg1pmz4jQ",
  "key4": "s8qqn3RbKBGmerBif5wF2eVBvBUiMT8R2k65gMvLSXymE2fzpVC9Mc9AnQ74XvNAAfg8jUqDqYJF5AhR3ChLNJU",
  "key5": "2uJUaBWG98FkZuo8pmgvEURRQpyJQNLKcr28xybUby8QKkymR2QBoNMMTGZdj1437vwTbpPvWZp8Q3Zou2T95dEz",
  "key6": "4VXQeGoPAgENcTnPsHC2kMcbsuQMYB8homX4kG6cQs4r9R1Ewcj5TNh7dDUJRTmAmhNZiD6F7WZCtHf8esmP6rkF",
  "key7": "59MYwWKRiQZhh9ptpyjVc25kQhKB9ww6G2bVPp7BqvzLJ8j4GT3Sjj9z2Lj2aVUFxfC3Vt3viYvD3kc86qutDFcG",
  "key8": "jXVviF3q7q1i1DUvKxc4KKpJsDGWGQLECbmrrsfZfiz6qHRKeknqx39ixwU6CR2ybRg77ovUxsDCzZFpvApaGtC",
  "key9": "2yRQFtaSSRYZ6T8av4wMHAB27sUFPD3HcR8Wk2nP4CwoMrvE5c6drnZMepoDxcRxhwmdpMdAsufKLkUZ5qRAaYqW",
  "key10": "37xcD673M8eToHzMNkxNVgVkTQHpPKCnWVf1CVMERfyKsdeyxBAnE8zqSVmmGwWJnztLHqQoNjhtVmULZBJddkud",
  "key11": "3weQcwEzg4Y6aSRcD2pb6vhwPxJfdaBbKJPtcwMVKDh5kLDjVFR8ANquvdTY1rJER8i3ZEC2uDvvSJ1ppmeZBAfo",
  "key12": "3wpphwLhNEgdyCsFEVMYC8kp9fvrzKKFsHgtiYkgHWCefestWJr6NzzCvGoDgiqyBp362sjYMZmg98qkWP2YpLZi",
  "key13": "3hByWjcBD5p75raUP3XaBYai34P5CkArafdBEd8X7wruKtq4PqunPeRcnyBG7QHAgM17f9xs5g7PzZJiN2Ar4CzB",
  "key14": "arFjeRetAh7yiwFqzQoeA8ZQ5CGqzQ9nc7q6tLqEQR4VRXx8juFDPzWkXwSjdDaSdFJpxuwQj3esTbk77UGdMFK",
  "key15": "3am2wgqD5ssMDSp9BbkV7qYnc8XJkJJrFNVEmnyk1Jb86yyAkB1XvC1Y9ZUaHDdCUuaxoqRj9Jr1KQn4CUNV7nJy",
  "key16": "jDC6w6feGUJrz4dgr4yxgeZmRi2DH7fQ8EvjhKwrZNRtyad6VnjysGu1BSBkf7mjef5PHdw2h2kBaQzUqWCdN71",
  "key17": "3Th2G2E7h2PA4dpm2ZPMoCgvx1LhW5CxJTuhgBZexRr5XeFgJhF9UHmUt3emxfgyNGLxoHYTSkS1BiEQyFTF9VGB",
  "key18": "7C2YCMBSavUR3Raz6H1Li66RwM4XsymoPWbfW8FJ2Vc5ibcAjaCJwPQHgXhn1cMqK7qjdz3PuvX5QxuZFqmR1Nj",
  "key19": "5Sgty3G7PtzBQBawfUpsjpTgWrbpGtLJ2L3asN1JDpuHZpN6RZgh1ph1JFEf6zYcq2dAkgoS2g5Lg7X4THbzD35F",
  "key20": "32u4M8M4rtWpE11Tu1RNqstXcUL4Q8Z2ogKWekipE8U7pUJDBify9qPYfW6ncL1v2VEZ9PfnA19o4GMcTUxvbMnb",
  "key21": "5XbsB35GbET8buDV47b8DH6vTUzk1GE8C7Z29XawHxeFLykTSdFk1d8TVQUfKHMnBaegWQVLShW4pVtSXv6qNLQN",
  "key22": "R5MaV59conE2Mgu9UbdF5HvxwfidE2sBVGRzd5BDwU6qSdJcrXWitAAfXpTrJjc874utKXtc8rvni1Ct33SfYrw",
  "key23": "w4RK7tB8RiptuWyyEie2ME5x4wPYBKMwSmXaUaRYzw43p6KLTbECrb8Va13vzotUUMhrS38j5f3kDqpURoMa9w9",
  "key24": "5nKfqoby9x1ocYrDB2SFQXyMgKecBiQhnEAme3FZ6JzTfnAAS6iXYonV58FqQf7tBxRoVRvfVhMd8iUDtSCGhLVD",
  "key25": "stTs6XVkSfRsrDKfT73dmFsQY8Pv3iFuWjJ9KCQKee4NVZzVcUkTDWCPWDLsAcnAVMK8PDDJKGyMu5htR9BtM1a",
  "key26": "47ekiaZBexZt2jB5dDv8GxGSh6ZUMe7zHJKrS8e2RYDRaHtJTb7n9kSi2dtow1qmNNse1YWMcrRWr2tc62dDWt1Y",
  "key27": "5wgBSwE1CSLCpKfMLVkXSkRsUuG9LYVo3qHVUrEuBXJWmwv5i2iz55hohdHPCo5AqaXGcLmpCmofbu1FQCoR1Fmg",
  "key28": "2hGBAuTJg18rmfY91ageUUhm6nZ39ZfpsyPAo6ADFCPryJwJ45VJr4QnPFzCK1yMhks8Z7sqzywmGJHza71dTs8X",
  "key29": "67BtTHF54u2FSr2yWne8iwnaggXsVYsEWDt3m7F8qtLZHMjs9cqstrLqcQGurwAST3Gi3UNKaNRFLq7QsMxfEuap",
  "key30": "5BUdxpTce2o5DLduqN3k478Ue95t7BBvh1QgvEieu8hQmnDrU32UmiXzGNgLHEKxLreJaYPkXdprWzpu5vsrtBFy",
  "key31": "4Cvpa61YGdUCxriiVaZddQbHgmSH6HX7GLuC9HkxECwTyWwScBT8hs5ZzAeiDPvwejKXn1igiu4aUdetVQrTiCCd",
  "key32": "5eShvRF4Kc1fSEjhY4VV7pUPLrEtYduS3B5rw4H7URQUHKKwRf5BN4yEJ227oZE8YauNU7MZfAHfsQBuNSTBNWNg",
  "key33": "5GgecxGDnyLv238tKqh9c7bNLn9oJfUyKxXdYj9RdBqDGR5o5EYG22HsFJsS9XKgcdLRNTiPvcWvmTYc8TTX3bQP",
  "key34": "4oHCgZTsjntfRuQfuNfMpQ2Ubt5dgkUCZ9AGZvUmE2hke5AJX4aNgjP28yRPLRfwTGpEyy26dLUWbDmNqrxZP1am",
  "key35": "e6PzJiwbLbb2EWzLbJhzD79sYKPmcZQMumci3C1hF1NtJNr12LjX1cWDpNJ8Y6UK2HRTtfmuz7E1m2E4dyaNpYE",
  "key36": "Pa1NGmvhRxYdWbdd7h2BcqQ3ou8m9WRN98gBktoGP2ANH6LoXemhjLXUxVs1c5RYhWtbhvsZsibGhUdS9tCcHjF",
  "key37": "2T1BtJpkQw7SR1Bi8LRXk8q8QTtBgNAij5PkCJAPwbxw4txqpFs1Pnf6aZat1NKW5JrmJsrE5V7dqeLyFF4EVkct",
  "key38": "2vhaRM6xWPyfTTPNSbuYqPi4QBkqL5nNgYm2f2wdqSE4qsRBVsFEBMroB4NmsyHgfCxLrPeKMvVyuKp6Ux2UL98o",
  "key39": "5EEfWtiG2Rzo1LBogiAA2mPXxqrRfHnH5AtDT6wEmnvmi8EV2qg3yJ2yj59gehyatqp6BQSAHAwbQtf8BrJfCae4"
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
