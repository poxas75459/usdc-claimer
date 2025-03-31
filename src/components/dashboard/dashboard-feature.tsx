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
    "3kdTjzE2YYMmfTy6DY6UzcswVBHx389BgQQeUaKXYeTnStwEdPVkyFVccrPffYqGFmGHSW6ZAuBditxr9hX3tEKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hTBEqmFuTkAVMFPM1CJmaUM1sUbnwCUTnVBGhuyXeYQyvGPCNUug1oLpUv8YYSbYTtj19o4wbeFVS4LWkMt241i",
  "key1": "5mG1EWMxuAiCHCiQ8SRymXD5qZBmUDKXNKSFdtvDaUxeN7Ghci7bgDB9zad1HtHFy9nfF2Q7gxNPcJgw4raejW4u",
  "key2": "3anqAYGvWez3wgmWkmWwqmjrkYArc8sa7JWRsvxi3S1s76xbz1HPGM6dCdgQ1y1WZVjjQWT7NXKehrRrv9crw9Sq",
  "key3": "653JdgYkpfi5RPSVk3NPyVDTFUYDJcTop9edxn4Zcp5xQTk2aaehtF3DcCp1nZkJu8goaF8HyVbE8J5xJPRMCd9F",
  "key4": "4dEQ1ioTxx5TDu8eqc5YCNrFbNrqUNMZdQ5KjEpNEt1qx6TFYSoHwhVa29ooxa1HPcr1j8Cbo6teFcVac63HgkBm",
  "key5": "3cjaNDGvdFdcDvTrRL8FRVCp7CGn7F3qPTwb7nh2sphdq2C3NMpkZQLtPK36coZugVpGU3EPcYxLbbD223c5pRPm",
  "key6": "4wQVU3baUMW7nfJvDqh7WDgNjDq7uPXB6VdFizLhQWeRxV1EmGNQCPJGuCHqPzySNw3H6vryqb6ZXqXewYnsHChG",
  "key7": "5RdfPdnChJctr7RJu4YCLwjRAcNbGpQnY9w4EwcDyszrahb2THU1kNSVc5KYsNM37TWNaHsVU4C5JWgBgqBJzRMm",
  "key8": "2Gs2ovYxKwp7NRpzYwjh18hWAENRkedoUT5hPiK7K3S6EJybDiA9xqPUXQmoxpKTUVtvJFYPT9iBWWU6CDeQjfb2",
  "key9": "2MhN8PeTZsLPZuZsPZjupV3P21NirEZVHDCZeyGwHM71YmzEoq5DqZ5q566xCe86jp7ayRWRMTuZW71Rbj34U5xP",
  "key10": "2DkoRKQRiwP1Jxw4Dz9z8TvYqc73u9D7SvNf5bRag1FdAZZnXAfVW4WgKcmdSweNWinxB4iXdj1nL2SvUf6WXmyY",
  "key11": "DQNunNLeFaGL4ectJLU5JyiXkUqeWNSSRwMybXvummPkWCV88PVUrArktTNbyN1oU5vt62vpbFvLafsk6wHdiHv",
  "key12": "2CAhiVoNt3TB1i56jPfAkDbecEQoGZDQzVvH4ttBP62TtCZ769oQ1wc9uNfaUJ54i8iTay2eCJte2jonMwJuQE2a",
  "key13": "qhj89doECGXbcd3qMQ8YFFWsLrgqpq4J8AdLNR3vpunUdDZF1tytbWkvmfjDB2fY7rFq4TdeYTHABCWUo3G82MR",
  "key14": "54C8PsfoeimS9KqTZSyqYtJEqkXRLLS8qWMsXw6MYzjoSJbvwEsfF4kF77amxQCAKhUZ2eXbi1mKgwjVLnLg5B5f",
  "key15": "3WMav7oYVACHAU1VqqsFNGPi2C4kSpfT9K4xLVER8GUjGNkAp2hN7M2FFJt9CYRb8uRKBxHnTYUwhawQxtLoehsC",
  "key16": "trp8cWgvcmyRyHx4iTJsoT3ry7UponWLDy9NZeXejXmZAu1tp17C9YDbo288drsRjogYShzNknUmtpHTie2hCST",
  "key17": "62NMiVpjnos9fmb7k1Bbd2D86whGMD4CnzTwMZaf91p7XKuJx3wpyHVgSjymWfeveJAFpegLzr5N9hsArwKDPkvi",
  "key18": "2SKiFBgQW8W5uvLRWfh9srxkrwhokyotFf3BqRU2k28Q36BvBzZoH1H2MN2F6bZLBRN8qHga2NdNV2QmN8Ws5NPg",
  "key19": "p98vMivnbm1GW3dSRvDQinzDHow52Yfn73yrgx5nhsUnXXPUcc9sQ9RANQRPBbfFzLndvZtTEKRfvKEyxU9EVrU",
  "key20": "4wjnk5cjfrcpZCaY9LMNDXd2sjXAjabcvnC8dUjm3YG5R8iWUPqyUGAg9sW7WVRnzVFwFdrhHJFnK3xrbhYhrz7D",
  "key21": "38CRoctnR5fPMH9RKTjo1oPAWKUPYyNrCrVZH5jJN8cxmZViUh8zCFX8JHtJ7Y6KgVrYHJGfpP99PDW5ZqKPnRG1",
  "key22": "4cEdkn9D5oaQrSyxm9ehAdqG8ixjnERb2xidKtn8MvJGJSVtd5Aq9SQvcwxkVFvUmR1nu6bjMfmFB1noAwtLn67T",
  "key23": "3S9gSQ4oe6MT5pPeqMNbnBPouWGhoDbNqDqJrtLGt2c7phau9n6Pe5WPDnJHeJwMKSqBqDmp19jwJ4gHDyYbCzwL",
  "key24": "35aZSX9FEfN1wF5tLvGBeCdEHmDjABLYaJbhCGARo84MfUH9ttrQBXdsXh7rmUCEoaBLbmyDvMSXtmM98PX7agPb",
  "key25": "xi7ByD9ewy8aSqbQLAnQHHsXcFcwbj3CAvLMkQiUNiXwLm8cBMtg12cvEaTjF9oyTAhQKUh7aDEjQp2WCQVePV5",
  "key26": "dVUuFTPiLbhP1JFNqza8i7baDvtCwsB2H3F2ELmUQKfK6TLvuTkYGEE57VaqkHoSwqhYykqL4Xuex4N4kqpQZNn",
  "key27": "3298dvXXxSiT8NLoqaN7jiaUcx139qwVgs7W74ddXtZVaBf9DqihGhRxdrH1kMjvfPpyzVQEA971U88FE9h5qw3b",
  "key28": "3hu52ccuZC11FtzqMRhPDuqoQDR2FYjxVUoeYSGGJAje14XQHoVeNdqcuxS1Wq8s7HxgZf65KZDQKYwtBydcDncJ",
  "key29": "2eyogHrj3p3x4mZGpBXV4URMBtHwEeonELgnHYFjBFJLwa2C6EQsFZ3JXFprbLgioh2y2N2YYHkDZ3CyL1Djf8K6",
  "key30": "7vPpBuzUQpeuzXBFcT3LGGdbZYkBx94xRohXWSGzK1sNymRhHXn33qNZB5X1RedSFSzk37oW6etG5Zu2xVHbeCo",
  "key31": "B8xmjMU1VKu86j8SbaxZb6GVhEuDaCk2D2n4pPcUtofANXXM7XaVkNfCqZKPwJ6hXsfJAjN3KE6Re9VqVGnqS5m",
  "key32": "tTNxBcnrvWKdXyXB9UFj7JxTagbXHFiKTyvc71tDgdaMUWdVsV6nZ215zA7ptkdvArbS3vU6HJ2itq7eM37mi4z",
  "key33": "3cwEjZx4tDzKCLsERKFtgqbHE1pxEEJ2mTBExwBRnctZRBCtYHqAWzr1r6KRnQwnSgBmoHaXagHxrytHtvk6WntY",
  "key34": "2QXpWxLYr3a7LPMjmqK5MTeXGrZQK8ZNB8Ej9WvGQXVV76sxkwYr3sGPNtD7CPYgZjJxLqeBDAfN5uVsfsEJaryK",
  "key35": "5rBWXyg7iYAxvP7HWMyvG69iaqVz4GgZEizzPMbsqTd271Hj82DT4BehG1EkXpuyKFVwvSovZAR3tG1vLnYBdMHk",
  "key36": "tbLQihngKxRFmxzk1z9D9FB3eMfVo5m4FA5z7fMapN5SWTujUg4WW5z2D9k19vhAyELfrDGTYFhypfz1gQwDsQN",
  "key37": "45nihTrUfgCCHs3W6vH5LK86N1vTJKZCZLrqWdCw47Pg2Kvqpz8rt3Bma5ostJnrhsamu53e9CuE4Zsto1fxTkbM",
  "key38": "3akkQ3pUF6piCDoeC6KDDZUJDK9jyiRDNCHWBSGxxy5pV9AA2AenEFarcm5yrdXNzphRgnhzvYY6VEW6idJT3cNi",
  "key39": "5aUrKoRFvGicLe4gS4wZwrdnh8Z5eJcx22sfEzLfQsAvWXQNj6cwMvWvwCEdARwxqAz9dTRy9syFMA3RsPtVX7sk",
  "key40": "5pyhod4dQhvG7zBdMMen9SiXMgFTxKTZFVUA2zq5CMhM2X4yrb1yTfHib94DsutQxnTUXazn5TDfLFW83k88CbL",
  "key41": "4vpP4a7Hdb5q6R5GKVnJU69QsBtAAyAZYV7vkY6NnfL6SvqY9tupPX5XoGFsnnR1dKVkMNHWrVKYiSs2cENhosCt",
  "key42": "QkjbhwTkZUgj2JjJVovRdKCb7w4hjNJRY8HtaMh8U3PFsWTrqPjK1xQryb7CafrqzUR9rknm6HxmTqF6ezEpnyD"
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
