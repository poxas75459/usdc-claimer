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
    "2wj2pGKGg3gg46rpuKLMCBhyCCNwg86BfA14UkrPXrdC1uBwWvXFMCP358RHj5k4XsEUB4S8UJzeEugYWb9qf7Yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61mRmFDf8RKhS7h2i4sL7bPwvnxxEXHMU2sT2qb4dWzK45UHxUmJ4LvfQmyixZniz9mN5w2MiPhXWh9zCq44vwf9",
  "key1": "MQ1cEPcc4pPrydqeqrj1rjrhWg5CxnbLRqhPTLAMkyfbdkRH5X5nAXq7WaTLVW81sBTrVrM5RDJDuaPjHUfbK7n",
  "key2": "3qCuTeiTFsudt2pEMLMdGgbeudhmuwYs4U6coGgJmfL21qtmaFXD9vodYy9MRcAsc8ty9ZhaL4WaubYYTxUTvRGZ",
  "key3": "2nQy8RvtYNsahai3o11AQoAnqaDXJQ2hUiwNv4vETRcrWLXfhZm3WohNpTwrKLP9byx4rVFiBjurFJbJ1kgqFcKa",
  "key4": "3kLHGUdmGyA7xZ1h6wLPya9Caiea5DSZw5e7U78XkFKWRWDLw36xS7gTDeMYtejyEkL5dMXFdNHbtvT7iQxEt5Dw",
  "key5": "4YKbzC3CZ6FLxx5ht5wGoWxDhC9a6TjgtEZUCYNi8bR57dK2ed95dmF5moMK1FUeB1qAbfa9d7shz8GjazWyhszZ",
  "key6": "1ZGFywnX89tceGJWoTE9mpkXt5u1FzzwmHJeXLWqrJCqRSw3BRpJaWuDqM4GjVG1NxrttP4sLnQ2HDkeMatoWmt",
  "key7": "382xKaYiZxMTmPPJfRshayWWZSx78d3jwaBsqq6S2czdhnaPFRcqBtn4jC4SCEDnafhmCFoVkpW1iQhSz9SmLdQW",
  "key8": "23KiDDhTUcF34in1offyMsVLVeUZrQRvYgDBJDxrQGvEVvSKHYAULLSs3FxyEYTtRfq7RYWuxgJiTwapNxi5zyTU",
  "key9": "5gdNRo9ST4eNoehjymcu91YdZYV6yhpukh1LjSBUuWEU7kMYw45Ec1oJdJQiq1FRqCcjJLA5LhqD9yt2jBWrT8fN",
  "key10": "2YKmQUYP5kXLc4xUwa1a8kk31R2ZE2rhweXh47tB2taQ7rEdJC7DwAPRoX8G1F9fsmePmpVFkia4duKbGgjTtSnn",
  "key11": "3bshGcQjiVrPsdcaHsivs16kvUQbwshEs9JUnVzUy1i538Ji4EJV7RPNTgDtRDyxE3ZmkWmcNt9DUx21rcp6yHdt",
  "key12": "2Ts78Ydw6UU5kot6WBHJeAxoN6Cx335zMKFWRBpcJjmku9Z55SCiaBHLPzJYfW34SWbHjbZ2oqRHjJE2KKE5yEbP",
  "key13": "4CGVoLkMPwcyZbsJuHu9kE8XKRWRVrKL86bbTW7Z4L8L5osBPm3oFpE4D6wSQMCnLjycZadQtBAbJe9Q6aoVzs3K",
  "key14": "2poUBbJsrTAdtikt4tZHMCBXGowYu6zCBEwL3sWeQbGTi7tLQV4dX4aJLPGEduBkqoKfLmuPLn4W3ofYEf1bWz32",
  "key15": "2FDErLmDq6pswVEGZPE9U4Q19hopqkvUnE788jW4iQu8KPZ42j2ma15hLZv6cbvTAyK9K38yJxKDPE2ubfQiRpaA",
  "key16": "4cryXpKeKjVcWRjWd3wusyuqeiQHp2bvdfTRnoSHDYWtW3koAXdyrtCQgDeSCptcZdyWfqgqzG5veiYu3ficoe1Z",
  "key17": "4kmiwXcNcNkYKYzLoRRjXZrHFJGUu4WZGo6L5nSr4umHn6p7Es83KUnEERtiqnCDSUeEW8qut3BXXQaSSuRaUzst",
  "key18": "2aYSjqM81wN2G8TovUbyhq6YfEznJvnZBsxBrjX1ippx1Gsh3dmSb8xEUjS9Be93kpADPkGpTR4p8BnanFkY4yEG",
  "key19": "bqBs4HcgPQpCftpbNAPkfWubCZ4DDSCKjgQMty14SgJ8s9HzhtxUXg3fQVvMNurzzz6Kcopsfg9GZFbb2k7Urxd",
  "key20": "3HVuAsnDXakvNbfNtSHPaGa6yJLtnvHcWuH6KvUKiAJzCzRXKhiWdBSTEd4r7qW1uSRTT14FxEz6EdzarUq3bKBo",
  "key21": "4qtyudFhCX6iXi2XErdVo7qPiT8acjqDMFyXmVDwTNfNm7E9Vf36F5HQLUWA83rEDsSJT8XKDWgQvQMZfYyQkXjD",
  "key22": "4s7ZyrawENytDyiNk1QZacSr9nq12C9aGYhK7AHn3ZbZtgjzn1kkWm3WdhFgSRVttrEWoLF6CHv1EmtFs6Aq4CFm",
  "key23": "4DuoZZckKVw83brwmgiXY5DRJXVcEbQ5q62tPmYAosjbGoEBFba3wu1xs1jzdfjcxm9o1eafRMAsZZmdPbxFmfof",
  "key24": "4PQdZQwkWKTxD8Xjy9GP7L6JRq2FNYzWycSXnT1JQEhWMgippJpuz7SvZJ8Tb1rGqtoUcEVWYqhg5rjsChaLHE1Z",
  "key25": "3Vmw4Vo8GUTy15UAgc1MRRk3B8cerfYyNxmB6xoeFB8tfBpG1Fp9kaBS1HQdmk6J7qC2EpKXV6FsjfJ1Z93vRKys",
  "key26": "2sTh58Xuas9Rvt2AnNLP9uF2GePcJa1J6pJVBPRf4y3WnRwSKxxmRU7dTyatzN5bAfmTF8NJn3fBBXswHMVfY7Cx",
  "key27": "3a4ZNfBoQVcn8epoUAgHB6PignbDzy8VeZ5FbxRxr6zuPKJJ7X2T9iJ9km5fENTtDmRtCEzKQW3hdYDBWqRmAiGa",
  "key28": "uBFChr46GiGqwgWkKGMym7bXvrFGiLExk67vfmWVF8fo39TZcVR3oeL7pcvzKidsXuVdsRMzDF28Mf9mJiWgjrh",
  "key29": "58hJ3NAZDVodyXgB2gcEutPUgvs3b2i6CjjGTjaiVsMLtUsiDJFJXRvyNnrzxM6nXxM8rUwUmuLrRYqkgkQUCLYC",
  "key30": "4JYjz1qu8YMdRr6iDboRBrqNvKimCD3NfJzwy4YayoYtRwXwfwSVcUaK6Hi15kqadFPrSdCSCoJpo9pUkxpoYJnV",
  "key31": "2rW4SiP5jucVP9B29V4tYCp5dsvw1CXYe7U6ku5r8JwWBFwXADm1JWUubi2cjwQA6SM2VNBX7K4TAtTcwdTnrHzT",
  "key32": "3STzpVYitr7KKtTdaUWvHMNkkyqwfSLhtrjDa85eu3GTY89BubQbdwKLPFycW2o6LEfhWpKT383pdX4MrZNkrNtL",
  "key33": "4FQ1v9auUsuirx91dKW2HqEd7enZmuwwWFufReiFwrZhNUG5gktiF5gFk4y2x2QPxxGpqxgpBjecCCvfAVZk5HP6",
  "key34": "4V2DQJN81aRna6G8goWd96nkXd1NQBPE1QnNjAvLTw3LiRA1Tg8Vriqs3kKdibgJFzPzq72ANGuTRSYyJ9aKaCA4",
  "key35": "2X9mDYw7RKJbQgcrNddPMH3MoT4pXMxVLV51dzTmkrDrVpCBasJ6jSEjMxL4xB22JCm2mCoGQhGfw83x7Te9z3Sr",
  "key36": "5Dw1PQXJYyEr9mQSUdSwNz4tXNesPiSjgSyHm3W4PPXCNXJmikztwAPVNe4SP8Ar4nQYVRgT8bwfYnPfD7r2kzPf",
  "key37": "gUf6zEoyfvEsHMkNDAgX4D1zYMWctkMGRP5VyCmGMgSboMtNZVQCbPq3uNUEXwxQ6kzc3KoprxBq76W422amAhZ",
  "key38": "4FvAV1CGWw3YWzZtvjasyqdd7P4M6hwLZYAYspCvZAu26CEUnmzggW1esjZMRg8E48Tzevaw6uAWLcX9TwkWG9fi",
  "key39": "3ju6tmGJwAxvr7JFLpzDbYaruhaypTTvWbHLKAgfm29BbLJaiEK1C6v9iiJygN8QNKmraJGAkMHyPTB7NpYCJDHz",
  "key40": "2yV8pTR8PrLYGPejcjpbp9Uj73rVM5AVCL1N83hLGCsu37LtGi54SXz36koemzNsks9i78dWpoED4L8UFeQLQLRR",
  "key41": "2jg7djAegS5Cn7pG1jnfW6FMKhwJF9g6ZxBfzhyeqYbPC25yfwhr7XWNLutYTEbmKDCMdWicRGCUiqjq78quHG3G",
  "key42": "5QjQwTPTN7ttTF7hopgcUa1GC1EXaQouxV5o4iw4qt1KZSntRkYZ36guEAhUtUQoZmG8wB3q6AtXBb7KqnyNqXWn"
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
