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
    "5UMi7ZnhjAtdqEjMu8ZhKdQ3ahw6iEuzxtds37m6ZiYiot6smnLgtHCgohS7ChKYxPv4LknD9ZUQbys75bHhzX3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WnzBpT1jGBAHZm3wq7NRHZyB4hoh13oJvzVgTSHVcS5tiKqeGzFqpxzJ6ayiRnqEYZWWGFPJXMTzJAxpSzTD7cu",
  "key1": "63eBF936gfgWR6dLe9DqJnbygvJrGWsNgy4r8Uaemv3oSPCFh3syviWnF7PGqGsyS71134F5grKrghjoh48nbtQC",
  "key2": "VhhZvvY7AyiWKba3Fzvxoo5Yn5UjX2nj5YTKG4KYfPwhph7rU8rHwUdpJhxo8vitgJYT8HZKygEXMtiVND1DRMN",
  "key3": "4mzGKr1iFPdiXpcQztZfqDR6YeQiWUuJytqQVh7ipC2pw7rTt8tHz8DEsjAo5uxy8xzX7aiFerNrr51HcP9dtVCg",
  "key4": "4eQ5FFSqCVgmNiVh65Zr5PAQcsDSZ9fDuQwPvbo1e1mBfF64ir2foUvgRdbxHXGuDgLGSnHSfYPCy49MzH53k9Dm",
  "key5": "D3fBL8RuxrFhfxj3sXmsMMnapmJ9JPDfjkde3QfD5trfkseXQdM9itXuB6iUn2eqhZvGXhifNDG5oQvYzJHXpap",
  "key6": "22D9WxadGqJJ4etmgVvK1c4TjHFS18MLYLVTz1puHL9U9fRhy8cYprDBELXBhdv44WU9v2fLAcqXugWXibrRRLxq",
  "key7": "4DGdcvZ4cV2jR7NbmxeKxbaDyXpo7D9zMZHnWdQS5RHMUQTCTZQLFoLFnfKuWTVRKa2yhrGmWJbkP8mBHtcHaWuM",
  "key8": "29qN46UNfARa3mf6QaZmSAqFYKyp9DPiebnXBaX6tSthVsAKVT6d1NEGUKrVXGZ7MFv9UpTpSze6J8qJjWLjxnY5",
  "key9": "5WKYjUPuo4JAFRqd2FoSkiZJGfNxrZbVTHHnHDZPajWnCHZKoPqLaEJ5uYwi8zAqzB7jbnvFAUGFDm99nvUGxFR",
  "key10": "4KhD9tFCv1tWMqbZCEFeXDiP3sF7GNoUiDgoZyJA8iFQvzDNH4L5UEWrTfkjhRyuSwxgAKiXoyTLe8JWmvbZiWv4",
  "key11": "44zjCQYyjn5MTWL8Lho5VcuRXfrNgFb9yzgT7CjGj5qbnyfx1JWLHXj9nvSWADqZmzG92UUAL3SWtjBpAu6AGV8p",
  "key12": "3SBhnawTfiykEGhD6dNvnf4saqs3ei8T4AsWay5az44DWMDm6TXZYRs6amohEQw3woXzNQZWR3rdoXJcDnpZH14G",
  "key13": "2Kxf6oEKHXRsWFZ3Ac3wampZA8dpmzX4fBNLe7BW4vDn54v25FqK5UnCDN2iP6dxpBDuJLM6q6c2WzmmF6H8Zd91",
  "key14": "5m2jv4wX6kxGB727t8rxemjkcbeNfmcganocw2DEomrn814mV6GhaPS5xuwNjo4qHePmdTxUN5ZgoFbZPSw1d5Uf",
  "key15": "5W8QTkGH51Mtd5GjpneExPrHvSURoDfoWxT4U1hY5PGx2hoALz5YnuypTEgj3izaRd5KcSXtxQ8Z6siSqeK6dFQ6",
  "key16": "5LUPCZSwAP6NSNubqM8sV52aX96bzoGYE1LcNLehqVnkSdFuwum2fpipmRgamePJSvyUsbdW5CK1WZp6kjFupL6u",
  "key17": "tU2X4RPfKt4J5BCTT9svX632hnmHR2RhefpTAW1nNKtn15LeVay52nnkWpK3fn5FUDk3rWNVAPNi9pfR5wdn2P8",
  "key18": "4SZeW39E3x6JDJTHqo9HCoFsEPRAUHF35FCihA9v3k3PgWE6XgXLE1rHTdSDQWH769NVfki33kxeBz2G45aMhNGD",
  "key19": "5En2v9Q322swYMHnXnz526oZ8fFXLNr6HMx27V6PkvQXrSfncF1exGFb2BaryHytsmZZ7sH1VykwLSsvfE3BNc2S",
  "key20": "5SjpFpyK7jk7QxfnxrdXxVviDkvZDuzFmigK8wE9S4y5rYiSw7eViPyo8rnwyrDHLdHheGPGgMQZPSfnP15LSQ5d",
  "key21": "3HKXZ3jwBCDKWTxdYCHjqZWPb51SVpVCtPfy1Mf2EAzzNd8tKR4VMH4X2TAusbgSQSwo1k1Go5q6FnxsGv951h6T",
  "key22": "2jDi1SSY9b2uHxZgDWvqcZyfYVLvcXtEJMkrxU4kWqKFKR4vWvLfjjy5cgAmqyD14MiaoUixTpUrmTWK46hWKaB4",
  "key23": "2EkdqCiRCQUNsb72jmYVTpZYx21NadwCNvubcGqRjdY6MdALxrnPzbKXNGFRkQ7u2uEY7ncWJKcXkL59tcdFxJgG",
  "key24": "3DnwmMkKJk8saaZNVgTET9fgURYHeXP1LQLLYCXiuyXHBrvG4DCC6NCTnewqxYmJkEhBXyqMKiBJWwCfWAy6FwZy",
  "key25": "5tYACLJyqxqTPRZrB7T6hQggwFKSk7J8gyLGQ7dGFH3eakU2WwXt5Peww8NXroAJgr82eTwNN1c1m9Y2fDQYMuiS",
  "key26": "2kctTEdt8CZ1Cmpxm7Nfh9kH8yD2kXbELEXyHNMKKcrDjZ5TzpZZTMTk8SHVCQ5Qr6JAotTgiyLSLPjMnWzfEnyJ",
  "key27": "27jvwx7hG1HHiCXJyKQJoc28TjfdwMQvivsmyT5Db1mwZyVqeT8wZnyv6gUjexYtSidNLbMcyHnmKCs4WcEfSSbr",
  "key28": "3jNnuHEPK3UibyQ5FEJGqDjUAHZkZyuUb8XS5WQqaQeAwBjeW9tRMnmTTsJgToUUQtzZFTgNxawatV39QFsjJsky",
  "key29": "2o8zYBnMMz72fC9qgFYmiDttCf7Mogj3vVoRZCtiWgzMm2cj59Gtn7M6oFXJhZGWE1n8k3gz1ATqha1BzMtiFGWv",
  "key30": "kpHBenZeFVS6GeRac5TLd2ZJkUGmWRwXAQDLXjdNvnzWUiW6oYrvBsjGnQjFgXtgEiMWf7hiVo2AkgE21MUc9JS",
  "key31": "2uuGrzkWjSuhzPCcEMeAwFNmSbiC5PWZugzmLzGKqr2SWajTMfcBBZboyguLvsiAnD22B27Cqhs87YzP2MkHATF4",
  "key32": "61xacVxx1K7w61oCKDSvQMPpV1b398yBjkNkBbNgnjogy3BptjcWG8Nd33sKWfZKUVgKk65BgTTMeXYATy2WmkHV",
  "key33": "44HLJSM34WV6xUEZBexLvnDJdjYcafdBCFrDhi94gYLmeJnMMi2q3XtXK8kKfx6hBdWKb2vQoTneqSzAPXb6GttV",
  "key34": "2762K2orhLf117He4tFhprDADq9mrTx3a2oBfmrMpfiDu2umeZQbfX989zqLWsvmGK4H1yazRhJ6zgT9qr1nHHJY",
  "key35": "491Xs7eaTvP2aRQtNbFgFbnXPjZfk6p9cq6gDzW8bnTDEdAgS8MCbUULcXXyDFEFixBEWYomLVvgALoBat7X6VoM",
  "key36": "5eUgGupmoutQCVvDJDMcfwyUD4qyLvpmvZzC1cs24Tzi31q1W95vB53QrUPzLoQA4Lc1eHzBmwXP7PATTFAXCHVN",
  "key37": "37Bc6KLoZPqto2xCjc3HtfvG2qn9qqietgsaef3phtRadieiNFNSeYGPVDu7MEwHP4czNZ1ZWhhU6WJiAXgPZ8Hk",
  "key38": "2kbZzbfznKZMjEpFmhfJc26srtAMgkA5JPUvRssiAGfgpmNTtNDB5SDFwqtS5SyqQw4D35X7pj56kuzjENE339UK",
  "key39": "3N7x59cYFq4bCuTEzCjg1Z7ctJFbeDHdU3iHQNJnXHpT4SvCe1VkfDTYYjkShcSAjxCaRapNbKV6GYAWmqcy3poM",
  "key40": "63U8PRijirFMRtev3fRTTSguzLtYGv81AUEcXRDD5puF1WrwbbfLnYML6ttHHGTPBqs5R9UrYiKEamEdCzYk58mX",
  "key41": "YnE6iqGpsjau8tvqakpjqVUHHAawheMHeUmGmxxwdomJLFokZsedby74pX3WYZJWvnbMLKmQUHZjbKesokz1Rbt",
  "key42": "2ifmuXjTZETQySoM1mjteAZfZh5H91m13fWvxyRiY18VBeGatL1p2VaHqbwWz8zhZccN4MzCN7EsvqcKLSzD8MSk"
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
