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
    "wkkmLUKL9zge4BxBm1nyvZmymndrgXmQaHjjVkKnzj1JmkZvC4SzcruqfmcPCMBxceEWJp2TMdTyTEsrAfLeuXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sKdLr728kepXD9NsNsY1E3MwCpTBycSqbMggtz5tNNLXw8b5nkhefKoAhi1rzjQzfp5or1MacnRNnq3rGnUzroe",
  "key1": "3bUmDLpNnq69M46MUbEMnyprccLcYwex6oJTQkziRbVSKaLi6GBJB8FQyjeze6XkS1cbVE6qKDWtuPEgqgc3QG7a",
  "key2": "5ZewAm2qRMw9mfsd7EBKY4bwrc4aHQ332rjNu9a9yWzfUyKcGkcSna6RAUzXNEYYi1uxzM9ejvvXZUYHqRubqgtt",
  "key3": "3Sm4NrVD9u5zPfJeLQuFWfJgZrPoZhBBj4ZWwUdtT5m92UEGJQhDxf3fsXWpCdtab1rW4z1VyMuWXShXq4b5Z1Q9",
  "key4": "36wCxb7htj2RgUR6AUuxkqcbydg2V4vse2uZbFsa5EiTTTP7r9Fd7U77Ut6FqNdQ1WmyuVdZkAuNMXWxQKLAkxRC",
  "key5": "4HvBpaghhBfNZaE1EHiRuXC5agJPqHEPoQ1KKphnZa32jJ7QijkmTfk8Ucr15MnMSf46kT8gvuthjvmCwbWDtb7M",
  "key6": "2ubbvFWtjbm1kwNmGFdoM5ha2cvUatxuEdAr91hkbNKAcNqzBJv1DeGdDSyUZs2n9VQX1qovdTGaQ2XNhTMFYKHi",
  "key7": "5JCaNZ4T3Q8V9fayJLDH3CjRQxfut4kcWfsyBgy221g1MgPRarXiwDwEQ8t4tUwP2ofVU3N97tSzqmb9puyAbkXb",
  "key8": "2bPFob9mHUTEPutBpwQNk3QgvgCXWeqjWHa2LYTfat1AuqiTVMdeELcLyDez4gJQkzRXhhaMvT34A4mTnMmXR2ZC",
  "key9": "42fCPomTfwWhQHDgAppp8VRgb7FJwbio4SXjuc4qJYS5Eh5ziChkJvEG8CqznFAZt1FUqftN5GpGLCCwmYteSQN5",
  "key10": "2KuJuvsMzEAq4izvLwRLxj7hesDWHk9TjhvDGidVSz7UUoFuZdrf3fm8kN6fNithV9ZDYP2AeFd2Vpa83W5SZDHz",
  "key11": "5Csg2u7fW66fYGZ6MJW78EtGRxhM7BwcVAgccqEBxhNtGaLJwNTPbQtCC6WDBeZQL464N7ywzsqE5quP3gveGCUm",
  "key12": "3vw3zdbRSF9A7ym17yZy9wvJhgVsCuMDgsxVANn6EFLg8Y9s7XNdc1cM6stgTzLf7btvgH6FLVHzcwksyoCpphQh",
  "key13": "4Pvsm16MPHT71Aa2Wy2cU88fXQgrRFPBzCQ9r6MKAyT2EwB7RYReDjP5jsmv5jxJu2R7pdoRXjG6QsVjrdqVgPyR",
  "key14": "tkznoZYhmqxXkGaE66XokbxLE1XeR6TnJB1SPEWxDps2YqDDBgiAGYs3imhWBNCDKYWjthrfprxqPC2fEwXZGDS",
  "key15": "4aREC9aoGtsbacHc2KWD6mQ5RsvW7H6aFsEj8dwjPJjCsznnt7xh7ukUTo8uc6oFKoAJsfcnBvtuTgadqCo13eYZ",
  "key16": "4iYBjmwrZxsTDMKmczDpZcCUJvvGRv7o9VB6tT3HCqMwB432qejADo3BymkGpNE58gK36JG3zexDnhK2xbEAGjii",
  "key17": "2tyHaD2tsDSJyAdF1zLp3Ge4quRGD7HGFMpn9u9Bh9ARR1U7sD586bRbC6waXfDt9m8H7aG7qXuWMjoHbkHPfCsV",
  "key18": "4KaEJswNbzwYPnsSVw4x8Jvy28eoSKQMniD5ZpQ47Uk4UGfJNUZJumga614KSZZbBpDq6SLqtWvbStnPzk6Ma3Ej",
  "key19": "63sH2bFnjZ3TowmQNzKo1vqiNTR17W5B1X3JnDjEsqEmd95f95rkCY1sM67eaxgVR6FirtzTZqSyFXboHZ6Zs8xD",
  "key20": "4dowraXoFEzMAtzgHP6R1MqiHwymTXpAc4hopgTyQWZGSFTDKuPe8zZWvhcYhLusPmuU3WCpw88TxsXVQwqycucM",
  "key21": "3bz9GjauNCYbaYdaCM937eoEZTKykJJ7sFnehM3af6L2Agzw8yfDwJvw7iNiLscQYCkKiXvMrTXnnoWmWh15ypep",
  "key22": "3Ak4GGAhukVo1VVszD8F4MtC6fQMeDNHfFyoQhU4ENmrgEzc8FPcMRo7NUnKJFhCHBG8AGUV3DwdccCKpwuSY8wi",
  "key23": "5BddPJT4hXwgBE1ZmB1BFahm2BQX91o2MWuKo6ho857LXMjQnqLz4rKvdtB57JJ5gC2smQCMMSEJnfEWfmnWA58p",
  "key24": "XgaYGZAEqbpJaU2jytuqmpP2nybuWyt4HzdXGE5rFGGkj8wYYvFr4Gtoh6Xxz5VXGqXTMTTAEuVL2ASFe1o1ZTK",
  "key25": "9bg2eJ9jYsgzfqZgJ9z6WVAhkM29dR7x18ec5LbLMBWQgJZ231KGadg19iedehSXCVGdhbtjjBocLbvuWgB4zbF",
  "key26": "3joUrtjtLGFuHztrhsShVo4FXHySPgjwDZLJrGiH1cu936xajrpyutBhGnUCvRMzDMDNhsawpxKwkzxKzjzEM6ft",
  "key27": "pyioD6mHVFEkBqB4pjnQz5VVn38viDENjL72kf8AmseRBqemCVSuo11sPz9BaRUoJoYJpQSi9R5aXBMdAoc3vCG",
  "key28": "4cMHHicoZkhqLVr9FC3cZa2MAZY5xJ3y1xvCGsZ5BTXuTFjnSopHxPtE4BHGuTEfswjhAZcG3QYqX7xt99NzekhT",
  "key29": "2GusMyLYaB753AnmRxhQYyVMsMsWnEi5BPgVntTbFyjygTJWA8d51xa1CPt7wQQnnoZr5fL9kjwuZQqK1iNR9JWR",
  "key30": "GQ38ugWvnzQsvB4yL8MZj9UgZCtF6877hX6u8djXpWuJVguZS1PYjbEUjmpyKn4k1o4RU7G2FbRnf8PgdShY64f",
  "key31": "65n3358HExMQEt4ehnzh6FgycW1PhUSGcJyddvjq1G3CW9rZiaBxXXzakBuGok3udPH9L8HiKcZzBYdoHZ8SUHL6",
  "key32": "5msch1PxCsnTHif13bqDdQ6GDknnNDLxKRByX9wmK4pQABZvAvXtTsSaDaFwMhSc4LC5KdUWXSUT8zTECtFvHyju",
  "key33": "HBLQ53cpAveAGZwveuNb9mHPt6KnueH6QHtwbA2Y2aYSgfCn8QPxCmDeXFRU6czRBLB1bcAWSv2ZM3voeStbYwC",
  "key34": "Bw2QjDDSJqBLNfxsuNtU8STEvxnqastPcd1PbktpXf8N9ALkpJ52JZRfgXraCPNZHXfXrbPceWJ5FnU2ATvxvfK",
  "key35": "V16wUhtPYzrnGtxm2P8gihcG6SFEMG1gAEyDSV8KTKJY7X6s1fnWdRrS8a8HdNBgv7J7cWDxARpMx4ajQKQWj5c",
  "key36": "5VzA63mcSxbd5jFUvARf6DHotqYiNY24Royo4ChbLhenUTnQbY8Gy9ocMCYSarAdFmiLy8FDwF1bXFxzDmVh6MsM",
  "key37": "VwMAx4xXvQ9pxuoxoCynaRwd381utbaXsjRuur7C1fg4tEgknkNk6G947r8UkcijTeG4SiDGC4ZDp1GPf7CPNiF",
  "key38": "4RNmt1pmydthSRqwi7LBVMHTMsvbmXDGkD8pkWg1zYpD6GteBDzVBJnvBbe5hjZggnXiajPrnL8VMU1euDRCX8cq",
  "key39": "5qUMpzFBuBsVhw1QVsHYn1NBwqi8Wc6ZB8ZA4PGaBsCkiWCPVL515MZmNYu99MVVKbjGQy1xoECMTT7Ln4zTDsWp",
  "key40": "5QXJ2Pwt2cHfH9SUQPTeYMfPG2jiQz2vgATv51ef5vBfjy2PNuaLjXv2L3jFtnRTUUFgb2pg5C1sPr7hefktPPeg",
  "key41": "4JZt1U79k8PuY5Au6kQKW1WjxiBaCqHMh2BunPXokdbgdWuZU7RutgyCFY4naK5csjkdvSXA4eJyWTvXnefAnxgj"
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
