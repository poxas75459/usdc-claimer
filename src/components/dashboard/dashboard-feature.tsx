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
    "3LKwHLjnALfFDr5QpWRj48ZoZiF8QQXvd6s84fZU72XXeD1DWgzs7sY3M35MHV3hVCDanLCLz1zxKvK6agT96s85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aFbmpNoo1xHU8jZVn3Tr6fXx8LSpWKKaz2Fy3vSSdLaypCf4bbT7e6JSdo7vs4E69nUKyK2iWiAbuL2uroN2xWX",
  "key1": "j9Vx6H5ijbpNVXQPJiDNGiqzkTHV5pTdqEswQLkn8Xd6VFjzn4e7Dmpb8z28TfC6it3nS5HYFkECJDnN2GsaDZB",
  "key2": "2iJaNbicU9jzdw2nTTAr6XhomsEpaECN18tg6mwJUGHKBn9uAdzbHepNmf9j1Rq3538SsgwfLTCAJ4EkfZajrgqo",
  "key3": "3GjR8Ajeh2PByG1BstV9khZUzeyVA9gfNc1Yub4fwkqFoHSLgSAt1Vg9owj8qMEkXKfFtY7umV2BcnWDZjvN6F1G",
  "key4": "jVAae9AzLjpr6CuH9D1D2a3UmNF77EGk6AvMjQwz52sVn8VXdMgTUeaq7btD89QZgmeucUgXDrh54vZkry1XwGs",
  "key5": "q53NTGuVpu85qXBd6Tv3QWWPzi9TkiZEr1d9ZTqqGWixutG77F5uxTbusYtmAVvnmi8BYvNQr22v9GMXo5gxxsV",
  "key6": "3u9tuZBFsQyRyWZL5CepJJ9GCTibdHa3BSGVW5iovMv21RTeG8G61NuHZ4evYw12YKTkpjrWEyQABrXfo8kUWxw8",
  "key7": "127xdF6h4Sp7eSJZ8MRUoofbGraEy5eNDef24LriT5tJh2nUWvuvVtN1NqhzZEf7VFPdgqxUuBEdxCjvs9713eKQ",
  "key8": "3tNk5tddxSfd7EgNDKFnG9RetcbFm7umKibpGVUuDod1FPS3fhRVYd81NVmWxCCbGfyNu5HAbHn9udU9xjCWuZiX",
  "key9": "2uWhp9dRd4XSV8mUCf4LncEXA5ZUNWLWKEKBVcA9S3hQsjYqSxp28auh5AfdRLYrCjvAN2M7qXgPRW8nhruby8h2",
  "key10": "qPsqiB55UK2gn4QUouz2yFGUpQfaERU38RRt5NwQfLsYPYcbScEkit6x1s8uP7As4Qv4UeTb2A4AhqF1x2PVnLB",
  "key11": "2RvNrBf5NM54tBG4fF7ytkwM6tjrA7ToqWK1qNWNDDWGnQyp1FZ1kqhsGmqmdYWxiXu3BTM8cmqrTQR1EQUcFdrX",
  "key12": "4DYQYMdHADwPoR8KnXuJ4bDSy6WZ9M6sSDJCQDcrmRVGrzHXxhjnn2dbHAxYPGkam7uEa4LdX6qkCARsjpkwQZSL",
  "key13": "qyacx26oaT6fdUPbC1vEgLzdasptHdvR1MfPWfeLDpqPhNbLNwkDzuYxkEEGSAqUxd99YiqYN7dTh4ziLhPh589",
  "key14": "5917RGrYoZS1i2pUrXKAsWCuDDMrRbeCNY8EqtkQxycwCeMNsS7ay6g12xN42c1ew323XuEPE8r7uuj5vRaax6en",
  "key15": "3FNkkfEbBCtrwjpkbNeBFxSX3NaVPuWX3gTpqaxCr55M1VbLL8uJUxf66eo1iEa3rLbm857pgWw3xjTjeRSMxgk3",
  "key16": "2k5t6uSUAt8mhemsakRVw3kYwX9Yf6gNtmkvmLTg8P3LfxQWt1bVH1HoGfLdtXMHXXrg29BVSFzYgsWoGjwUChKs",
  "key17": "3eJas8n5CCBzmyRnBtSpevUHkcwMVV975dMxY9UwXH5zXybQtuLyNaaPZhnzCasHCQgCwpUZ53zo69NX7SQkansp",
  "key18": "2GNokMvsCa2EzQHXYKWdW8xPFvhxDFJ7YYUvVtKz9o2D1LHWz42uRmKrNzUj3XoXVtiWPZmtEKyatkgocoyBNcFg",
  "key19": "2HXdyLmedP66YoN9RLEbNawvUg79V8QKfGJmo58z2gr4NxVkDyoCVXDwnjRJUXgmE6kGziaL1iRQ2hxkJfngraDX",
  "key20": "4MsuNNPKVWXHxra3PxpaLNuq4hNd8Kfb9W6q3aZ47WLZueAN3fa6hwzBj8xKF96RDEaw8pBSJtwNVkvEpEsFJ3ob",
  "key21": "3736vVMcjmKyxNhNS53DfnYpeSBCXtDumQtVFFL2muAHisX26V9pPD6t7AXgDsdJ6FwYKy4F3QqcBBSG74ycwZvF",
  "key22": "32wkMx5uuAGA3fMqt7PxnHsmaE4eWfuhS3BGGQUgGkYZzFcBMpo3Bux1TFv9hWL5NmyCQ2GtVKMfNXqJHKQtmFSV",
  "key23": "4M1qZQHgteR8qiC5Gxkh5WPuywjmgAfvWzpku1yg5sbwAwsei3iBC24M8HPW45i2jbq9YEtgcotQnLAFh7s4SSXV",
  "key24": "37ZcA3UoBoVuJQgdv1i1EyYEpjv5Eg2kzUco84ox6AHPe5tBJPXjZy2C8ZwA94KBLJEaHx4MUpozrjKXXbe1QGyy",
  "key25": "4Nt9VrbN2wdfaBCuXSHNbBCCHrnbFZfeFbCbFjpspcmMDXpAwTRWijA5q2HAcpquSxhJULznZrzb6k4oeo5vKf14",
  "key26": "2YXCFMBo1pw4kZqBMH2kpckL2nfZn2r9DWCxvknPmoJqGx8KkNq6dgDTUj2EB9Cq6mazF6kP7zh2m7B2zPgFwJ2u",
  "key27": "4o5oTxGNgVB31JULcJCkmSEfoKX54nk1g83gWQP3Dzf2F7UD9GF1DGEmGkW1AQDFoGBHc4cbGsZwSfbDqGceQ4Zg",
  "key28": "4bKJSEr4ZWciakSH9R7HXGK6jSq9SRW5A8sA9e6zFJqgcjrEJw9iTaxdbE2YmshnJ6qgXCqowubnKsKEjPhcr3EV",
  "key29": "4bUV4Dik1T5V4JDjF1a8ibbzgevz3hqi5LJSSN2iT622RqjpNMwjKdAhqRrCQVdRUVdfPv29FcrJCvyF9QUNdLtL",
  "key30": "4CEnyRtaWzvF6A6X21euHxBKMWP7oED5RkUko71ZMWecRC1K1qR2ydjSRhXHSQsVtzUEsdPffXcDJdbnb8Q64xFH",
  "key31": "2Fh89WCbkfpKi9TFwNmk5PYcXvhAJjCS6mXrA1MWAXgovBZfBDnGLsV4QHcmDQ977m7FVcYcGV5YFjp9cMqjuRKL",
  "key32": "fpUu8cmxH3cCspNnbMXNhpKmTYafdTLeNWkP2shr17dHLCwwgabu4iEtz6X7vZ9xQQFpeoKLT2Eerb4JMTuPPHW",
  "key33": "41BYtP7f1sBkvSjctmkFbwpm2P1AvYK2gTU5hGrhNUCZQSxgVbA4pXczAdQFSqxhbupK2GDAD1HGyuPBj5bUpi81",
  "key34": "5GbRgdbBVrVhU4Fs4H69GCi1Y4XiivpWZNQwwA3en1dr2fFhWvo8uAJYZ5hQEogAzUB7umVzgoqTAu1wBmvsYDey",
  "key35": "3ECsvoXsVboZQcg4janTzLgj2ntoLdVABETHStVdzUxRZq8rMm69fCZiU16W9tLLmUZZokQGs1c6JQBv5eXDi7BK",
  "key36": "2wFZjQfx6JWZthgjc28Vk4uzRgRdxModVUftn7cFQu5yuNu9mxBmk7wRtLbCj67Nzghr5xQo98unQ2w5YjNMZvVC",
  "key37": "3SdndqSmieT4YVn3T4YNqLHuroTekm5rxBn9UA875CNA2PF2p9o8nwaPnz5K6UFq6WN3F4guFanoqGeLciPkG1A8",
  "key38": "2JqsinhJ6zXSLQc1M1ByMSb4MZGE2cjD4Pp5xXWR87RhMBy1yS1ULSWsLwntLgBksAPhetdtZSBUTaGyo6tdz9Sw",
  "key39": "5Eg4219akq4JCH3GV56Dut5Wbv9zQAhRYGWesFxQLd8A2BhvSxcVnHRiecyUG6TA8jwib3xQWPBjDi9Nk767M4Vf",
  "key40": "3vgfDazM7b3x7Tf75fi1L6XAV7pEP5jK6uNxw3fDcmv7Nmxxb6bLrzzntkc8vDgf83VjjCUiuE99jq2XjZ3ntKtu",
  "key41": "3tRPPJttMhxTxQdzc1skNeGcMqt9cVpDmjg3dUsU3gucRnD8BKeLwoD21eA13rv7LkXJrwdd7r3CdiP3myjRk7v5",
  "key42": "4fR89YCgG5zgnudYAVnTffoPYiKQoAH1FW2yxjtXx4HWoN2Mrx3SfAfYNPw5Vs3tntBbv2QM7moGAy22954fBx2w",
  "key43": "4RjeMMYFVKafQrziH3DgKy4fVY6Mc8AqMjQ3ZwtLCKYfCynLyK8JPbwBBhmn9Fhz6MFHp6F3FiK9JUxFC1U3jFCq",
  "key44": "pWmdHGzxHj7w5WT4b2myHVxa6xiMTKSMaqWMJupzLuHW4aBV2P82YCwLdAQiAYSbEkXG5QSUjQ8MZEsVv6XhpQW",
  "key45": "5MKTD7pM51gm6qYaewq8GusUcaesCPLvyxFJ4qQvczHo7mtfnZgxuhyPVZU6GyEN6BYJ2k5tjfxFMmxhrHjesLJV",
  "key46": "4hJK31EcHDHSmAmjvmU5QNcoWK1x6BsFunYbPtPrdAoqovkWzPpAPHPAz7BmjiaghdEvZae2odMnEgA9U1PtAvox"
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
