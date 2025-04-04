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
    "Lnig2NSE1BTGWTTQ5hytdWkUcQxnsGweGTy5PqJCMXTC4VB7MPwP1pbiqiPzhPeQhBXyHZw1C254kwvzyneicVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u22Uh89G1CP1nAYdoxoG5QCcJ6WswFK45ZRpwxHdPa3GwJymD9Lpag8dhhi4DUpDbXh5bPBEPHxnhnwF3ov5Qeo",
  "key1": "4poEs3EAFMEXZg7UQdiz6ytDFSpCKo6thrrTBR2sH6gUnXuvkGjD6Asa7pqRemL8CjuKdEQKPM4CTGrHWXV6AH8W",
  "key2": "43mjHDtVccNTYh48Sfca8hjNSQzEqBJKFBxe2w6v1KD5LrRKB2dFNTU51wquzuGTUkuWYegg8oGwgqb72txQdnrr",
  "key3": "4ySDvsrcagNCN5xZtHs1JVoH7hvYxazAfhrLRpXXZ47vQ9VZaRPV3UewGJ3tqPMFWEjAEuDqhoqXto52ofrL9S9g",
  "key4": "52JY66Afrr17RwYFAKyChGuraLMVDPTtbGicoYALL7PHFQvi76guafCGvbUsbrBeLKRbCBSoAbtBXamTo3aiSXcZ",
  "key5": "4BBLMJorvEkZAYghCTsCgg7SCYReo6VU3J77nSfiRtwsAFyuvs7gJY9pbLPnqvra1warkmMtJ2brGftf2dbQSLmr",
  "key6": "3428vz2jJFtxKf2h6dG9HodNfGkqM2oUgFoxSM7cKAN5Fj113qDjWxbgTP2nawFtsPM2H6uz1DYJKGGA257LJhBF",
  "key7": "4mUCXiEuz8jwvGDjy2TDntP1Vdc3iVjPKxRHfkbvFU7sqXQoKuWfeBvxF3DCJFuTYCiczn4tm4bqCGpeW7TPCp1F",
  "key8": "3DgAivUQg7LPMmR2xJpDx2Kc64L5DDxvwJp9jJue9ZrHpJPXXPvnZqyyxq5M7KQi17k2vquHJm4xjcB6QFSM29JN",
  "key9": "3Ledq8HjiHyz7rMvFmwwxBPaH4abTWto9vD8dwCRi8hhWY7xz8QjVj7Weo63QNFaA7Uc56hWyu9nM1KnAPNxU5vu",
  "key10": "5mAcmMSm5QfrfsQ14NeWrPw64DGvPmmQmPxmunxtcUSFDHi4RDvNikSFEVQQS1gun3vwsx5b75mtJEc5KbpHt9Hx",
  "key11": "2p4Uv52LsRjTQazAHVHENYARGvjgqGwLyf4nGJieyikPAiXip1YBSEXZwmDRz13pWY5SEqPcsGvEQtTesKXKhcCR",
  "key12": "5apTNHCpJUfUqU8p7p2hWXU65LFuekNAoTsN9uqh9WXv8jS8cdWrTq9GTND1eJYEWBSuq5nq4DB3Gg4XjLEviNcx",
  "key13": "3CEyEMrHy5Hrhvgri1pot8tbVTRrPHW1aCd437MpqxfmZeqTCjdcPuUKVYQh9VQMqzrqiwB9y8gUqPTUN4qupaSN",
  "key14": "4KmNsyGgTaeYBmbDUJ1HpWXDCtSeBS3tGWLZeqJQnujVNBFWb1U5LX2ZkHYZw8qswavnViVjMpSupkMKQ4xKe67W",
  "key15": "4yo2kubKW83wui8f3k92fY43YUNQrK3xzdEqLT9HJBC6a79snKuUFymnLKVUrF4KpbZkHQo7XtjZXjEe4Yr2DDZp",
  "key16": "2WRV6PVQz9xSd7gvW53yE5eeodCeXwU5sCHHRwTpSNgFYhXicY9Q1mGkb2BDudfZmsuQBzxebVUrbuFEgZdnk66F",
  "key17": "4LNwpyVFiSNCeY72KUMvFrbwG1F2f7zQFpiFCPyGvCtT2aEfcWset5TgZH7pxTKjvGVPzFpQqpomjJoqJPtBisds",
  "key18": "2fp1q1ftZnRY6zQo12zfRNG1Tx7PvwSxuFbTWdEmDSPHfuwuM8e4ZAUUFc3PfspuGYgnSZSS2btzUpQiD3WYvznL",
  "key19": "5Tj1UJ42FXSPH6RNSqdTH2qFbN2dHGb9oKPbG7avECGYFeB5KPjBZKuDoXZ8m7Xsi3CvECeBVE6rhb6Xdho89Pwh",
  "key20": "5iuvxcjwCdJEb9qA6y4ML8iAjbvPoCwb1zwKE4jnrf4GQBQFSNpbuHzQEhUcvZsAVk7oS2W2GGa8VBoSjfGPAsxt",
  "key21": "5Jds5K7JZghPguhyQrSVXbdqBtvTLuZ5j7VhDdn212tcyG9mQpL3TMHAu3cuePSDTFWcvPkTTQL8mAo6e1HH39Aj",
  "key22": "5dCsjpc6Ryznrq7RALupoTsKvLP4qcaoHQ5GUmymSFHLSDUh6SRg6rsrbeY7rt6tUJnibt3c9ZW9uKRjXbnPBLiA",
  "key23": "3tCBifX5uDrdYEW8v2Jm8BucbJXDuQEhY8tyeW1z5yZutVkbdavxYyxk96cbRHEUnqXQ8TssQELtxfUNVEZswFt3",
  "key24": "duwv2syAZMvzbZAGqwJvcBLxq48dtzSAiWZeuq2Y2E6U282H6wDXBj4WVPJ3ZASpWFPYUhkK7Qk74GxzczobyQC",
  "key25": "4ZLGLN6pAxWnmyEH66HeUdWX6YZip8dkckNsHndTB7qEfbawyaeLti5K8jQdX9hhDYaK22q1tk62ze3Mt2U3iyDD",
  "key26": "5wjdgLw2eE6HARzHhmnQcxwdaPLvobYhfZggKa8yxTJDuXeQgJf3aVvxGFhrEKXJhD3rHTSQdQLpaoP3z8o9Qv8L",
  "key27": "5EjRDwoWxmyYmd4p3mWeeWmErG4adUQ8n15fQAnwZKReoedGVnxzEQ91TBgNizKkDxfGdw7sD3t5cuRZ5KDSQ3Lj",
  "key28": "48jUwi7juvNz7mMBYtK98hJCkFfJLicbYd4gZc3jUjPGTbwe4bp1hruUyw7NPYs2FTfUkhymKmvmSLMfpHUN1co",
  "key29": "JUtRHsnvpdZqw8JYGCh2T7eEoqxHEhwRCAj4CUcP97iJaPVxCWyP4ZcfcyVVwi3MrmzW2SgPY2iYSWHaaCgYddP",
  "key30": "2k25HUKXToDEzrHgqMDHg3KvLJU6RRHhyrP42vkAhvXaNRjE5JgRXtU89kVcLYzqoAYS9wRMjLnwY9N7EFgrv4kJ",
  "key31": "4Vvan3smrSYzic1pYuPmvitnzMSPuvAaaRt2EzFRrYk7bbc3iQW9hMixC3HuNMjzZAs13CPXeX2V3U8mK9ibx4Nn",
  "key32": "3EmymusZsqsgDCpbxPibbr5rxyspgHmGFAq5w873TBdu8BTpUboxsnfGUACbtY2xoThF56bKk3RPu3qbCveBDRxh",
  "key33": "M6wB7u4AoJvgs23UTrDVARQPqovTveyyBXqYHAfiYFUpy7YSP9jMiRYeJ89C2R95u2V97oU4Bc35tPLNTZTMj3x",
  "key34": "2QcqQimq7WkExJDPtuhJHfiFSJhzq7WV9pj4bFkh7h6SoS2egbmyUWukcfdFP3L65XUWyTWEL1TT84K4KQXzhqwp",
  "key35": "4jXS1DxF28axgf4t5YYnZ3jC6YUgPHRm5vRoRpUq2QBu7xbPG1aNze3ocLZErpQTzgPm771EEaotthsYJpBrbzEg",
  "key36": "4x3Hg5Ewa7MUZFToSyBxCK4NwuXeS2njWBXo3cbKdNg92W3YukAFeFXh57Np5cmuM9wqBV1YemQ6wRM9a1NpNdP9",
  "key37": "4dTaSWjdagHo7PJn8hAr5ZGLu84bVpmZP7VvAasWvk9UThdLdSuuFQyKfDGeD4FafBxm8HzRK2GX1Vgjc2iy59X3",
  "key38": "5XVE9PQrY3uDLtr7M5Gm1PyLM1nx5q76MXrLtdbXrPwUZ3e8qRbfxB7qY4Hs8VyXi5PLaNWmrzA4Wby7g9BmyfkH",
  "key39": "2CaMeqPUjETwqWLvHe5xVbu61j5bpvtPpsHdLWD4QTxFZLgGWvJCSGJjVqGsh1Hyp1Vm1jgyLnSVwmEsGhsk8VCr",
  "key40": "41UhkoFAnanoKA4ZPyaMqb3P9MXRUSqA9wRsT7rr8bxZsdrm2Vn2oEgvMKYRvBKLhDrFkCz1H17AQWi3qHb6Ya7H",
  "key41": "35ht3RTdi5w46AxjpefMKPk28NoV8V8tReUZ62j4oXnz6XCSpM5FWp6at7CDBQKb4vndSmEm9EyCME7uZZ4fAW2Y",
  "key42": "3NNtY5nDkckH2zr5dV2XYTpV2NigeWQNbXJ27umideoGMG5ZpJswQ4HrXgAYXSxwJcrejhd4FitXDoNq9cBQtn3i",
  "key43": "4Ua5kpxz29MyuS6YSyQTU9GoWBXXDS9wakpZr29po7NW4KnnXnfr9VFLLkKxMWjs8EjZ3f3tmEeDAMqVjkf6PNTm",
  "key44": "N1YRHLpo5dthz2j7NGPUBRMywMZfDDkhw9KYetkKeMHpCgjNjapsxBeU5HbWWgsD3dg6vWmfh96LSR6qCpXYqLi",
  "key45": "2tq6WG4TwgVe3B62enAHWZufLAMs1XBr8mr3GsyQscbgS5bFq5U2TS9feGSLvrn8N3m9qLLAJXa5cMdBDnPpv3St",
  "key46": "UQCXgAZ4f33S6kbqYSySvn7JnNmYTSmBcaoQECynNJ9i9DvcLLahZJQEhCA7bSAkLZk7eWs4Lyff8NJ85NyiHHS",
  "key47": "48LiyL7AXSRXgXnSviK9sTx51ZQ8bzWQxkqmPgERdX36L6EicnzNeBUpeXQadq8J7xgVDiM5eMA66ZUrhhdh13vW",
  "key48": "2qyyrtKBKVCmkWpFWPwrkSWrGVtXf9AS5FivSuEGXGfx4wwEyX9L5iNU6NaT4zNNo8FnRygR4iX7DfwwDmwTNfN4",
  "key49": "GXwgrQcfmqyM9cR9njVXbSbH9T5Hjnh4rKxWz2RAdA1RupMJw94Qe9eJruBxnwgiSQXrYWLRcFA26QAtQ2Wqqqu"
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
