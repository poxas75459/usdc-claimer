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
    "42ZUit1mGddgYyqMKsiHk4trAfJmmhFccLm9iCoHU9ZrfLG9aJuVn47jpUqzsBYxNBFqsUYqghKzvaaeeu54A3Jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TeDEja2mo6yZ8fnf5sJTowbPaLBwCyajCPJMiibiSCWy2ZzqJp6FeTxbZzGHoi3DdS5nmPRdY3rEH1edm8gGgd2",
  "key1": "CSEe7WkUVKZuX3C6MEQ7KWZV88wgrjVEEYZLA3KjhfcQNzX1bckpAMAieudr23WS44M4T5sWnN86XbPZG4nbiDn",
  "key2": "5YhbBNYh3hFvEzE6GqQsbuw4Bdq1qrmfN2jgF7nuA1fLc9SBZgXDAY1isFowSXWfg7qbGTKF9aBdnUgruMKxL6EZ",
  "key3": "2W9k3KmXU1atWP1SrN5g2TtY34r5qVxR7aA2pH2vfYzCuq2BnjUj6AsNTKva3B4dPqhPGXo2ZfBtv67CjJ7a2mVw",
  "key4": "7Bkivw3SKtQXiuAkF8W5q4SH51A4DiVugzX15dBtkuYEwvVEVxTP3sMR4Jjhq5QEPdkWVGiLZRnYgjJ5xScbvF3",
  "key5": "2AUXgCwLUyPQyZe92tyyazgJ9JPTokdeVVruhBNGWUGQDXU8d2YgKu6zcD6UYreJezMozn51CqPfv1TtzxZp2RJo",
  "key6": "62Zj7xPwJaxim79rRdxJD3GUzRgpUPk4YRRMScKDicmv1kutwRJhx1BqLY4K17mRsNvxtKvP466SgUtYPtNaJfqP",
  "key7": "63WSi94p2Wxn8wTfBCtR24e4w1fymrdveKxVFy9YgF77XLCpJTeCLkuncxM39Fx34HBimpX2RKQPeXKEtpAqBEwr",
  "key8": "25boZziien4Xij7JTZMxbnrKUYfGsAo1V99VzAfB5TJcNzPBDguJLJBogpmpNedkLaNH9Ygae61PSx7L7DhXeTGZ",
  "key9": "5BTEYWBDDDTrZEYpRVxD17ycqf6a6bsNC2HhKkMfXfuueaJfET1gH2D3oRHcxCpY8dKHA5RppFgC1ccsaTHFMo8y",
  "key10": "iG1MPYXtbM9dnwJQE1RWyN8GeUdxDE9motfoaJSSycjtoZFe8UXLD69ENgoaf1qDYXQzZ14c28DjWQywJEwDPYy",
  "key11": "24sUHyNF2DYWB8YR8pQmV5p2QWNWZHGJ961EHuy7rKQoXb8Bu8dnfXPuMoHBELvAteYaqhYdKw95iSqJHR68yUWf",
  "key12": "5UJcDpUdiyHiWdUftRG5rBtzBZCsNE4xV6eUyhTjK7zsxmH1FfWGHwKm6S44qb1W5PHzDFLX8ZN1tDprowvbC3kD",
  "key13": "4ivzMEWN81M8wvCp3HTQFZt49smBWuqtGRiicggAzCGzvNTgsrbj5HCEDqHnbXDTsKNBvtzEtaCSfjFXi67g3pu4",
  "key14": "4v6K6GEuEkoshQEb4cQB3HgTppa6ajz1wTH6hjUs5458ky8CuwKxmxp9A9AKs4ki6fJY17H96WgPMXkEhR6eY5XF",
  "key15": "KvwY9rkuaDmTFNPFE34gLDBCB2SgaKNJec9HMbAyyHQfvvD34L2FLJAuN9Pu9GQdZ8W1SQEyf9x3dWUun68yNht",
  "key16": "ogFM36Dxe7e9cehYbWq7Sg5xZ3RWRwCELVv6FegFEC3JgMSGPWDTPbuBNkv19aDrm6S3AfMqrFafTVFDvWem1rP",
  "key17": "3v2Rz6BGhhCdZbWqDagvnH24c9RX3CkLWtQKqtizgMK7ExgKAwKTwHgBT6q71XZgyf5S66EfguYCkkvFZxtYxuN",
  "key18": "61b45hBaNTfCzUG2djViRHUMNaHQU1dSN2EKtt7VnmFgjEfaQXuCuqAoSDJkSiHD4ic7eU8QNj1wBGMuMtqiiNqy",
  "key19": "4E3JVm6HxeMFHiyzHrhveyjjBCnMrqtw9AXq9JPxCkJ29VcvpDvpPciAAPTHqqNaVK9ptnGUYPGRoWqZa1QLSXvK",
  "key20": "47D8RayQUFix5sQZh8EXGcdPhkLJTehreb3UKhTqBrf6yLeRtTgsFNVre3bPzznSf6bmLVB5KkDjtLugqVDVwe2V",
  "key21": "p1te3EDBcZfm6PTy8V2XF4RrrDxKeWmuUzfcrsxSQq6ZnvbyM3THE46NP6YrYLSPTPZB54wR6yy87u84M2Z8NF7",
  "key22": "2NRTcA19uWhpT1C78ucPQS1xSq7sd8bBfS1MCtSjszNAipXVdAibdC29GBH8kQNxCMx5wtCLAaVsgJ2Nctb3NNwv",
  "key23": "ThVkNRYGUWo2pqYaXhM67FwPptZfAv1iM8z2ztYVnTiQ978PtMUDBNbqq95b71HRUegt4gL2u6GEGZJTZ5USnry",
  "key24": "5ssTcVoQ5D7BPLuexfZzwioFKiVJeD7gWuTgLneuYvKvWoXZWWqAmixFdYQYxj37ZH5erjeyRpCw1PYT3daXvha4",
  "key25": "2XHG6LhvcR3kNEdbo5P7yhLao8ThJs3RYYsqT8JxhbwzTNvmWyCmP2aFVyjsJHmtcuDmNLihPY7xKRh9j4WUbU6N",
  "key26": "372xgLNtLQr6uVoGK7A88i8T2qTzzkHoCiug7WEoirwpDYsRbFo1477kdiXw1X3GgJJHBmM4DAXLUdaJrJ9SMHNe",
  "key27": "4m7AGYLRmeQRnK62RhnMHcYcfrt5CLeSB67TjNCAL6fcSUR3Xij6FUzRTAWGBm2nDf3pbNR93teFXq8gwGu9Abv5",
  "key28": "5hjFcZhn1CFXx6Qcx3e2v6fziE88jmxRXrULVbiQ7nRzaFStuVmK9ScTt9YzwxvSKreMFTQoQ1Gti1sqmmHj4sDB",
  "key29": "3aGks4XT3FuCRAja5MCRtzkXf9SwXS7SmXUDV4kgmB4LbpBvrbdFUFzN4tUYbXUnPVviHexY3Vxvkv3f4jZtsKME",
  "key30": "3fTtv4tdo8FCQ3g9S3dTfU4vvuP926mTpEkq57ZZhNwMzQsj9szNufNiWXeCja24yqcWfXHR8R11rFWbZhKuHUvC",
  "key31": "5ayZUbACSrN2EKt7L31AJoeMLcK5fPExcxZ38LSJBpuDmLp51n6NvfKP3UuBtMJNzTgeM2SgpCbRLYq3ddLJhVCj",
  "key32": "WAQA1b464Su4AZ3aPfnGnLgTGt42i5JyZaXjm595PMEQ1bzPoyFXFRx8Z86ZxaNGCs3XmcjqKCgPbg8wXcP8F6h",
  "key33": "89o2FdCSLB4upsqVpKQfzj485Bwo9uN8L1vTd88aAGBr1YCVnoMnUDkeD5qMEjTSKfEPF6MKQSxQK5gL36PuMQg",
  "key34": "3sUfdAUdtHzAdmaXL7qtSn2vNQXgxzcV6chWnfGHuUSZjekpdjNKMUZyQuhq97EzGCi9EQ9Pgx6KwkzMpDDDvxiH",
  "key35": "RVvN5koiv8ccQALDdK2sqFayuireVA2qwp4JzaXU9FkvtkgxrDU443fZuZnXPQJXmRrS84r7zjAV37xydw7XYkt",
  "key36": "4zFv7irAGzovxbN4xJMT63uDfgpQVcdoqwLLHD3xdimULPDH3SysD6yrm5h4SXau2bGcCcDvhwnLXBcntE9WnMrM",
  "key37": "4usPdqADN3prd8ARq3mKVTpPutvYysDER9wrB5tbmmyDTLXmEQDYEF4bu1wSBbGCnuWzZTtnMcztuhGMmLkB1qVJ",
  "key38": "3mxK9V3FSaZnTWz61i1j1RAbTmmAdzSFFjwxv3xqVZ9ahr73TfKDpkpGx5nQZzxwRCvLyWwhMdog3ZCk3HuYCkP3",
  "key39": "5GZNpGEWcqMr9XcDPRJ1dsovTXLRzQ1SsJjVHUtFNWZZPNEd59EhYKzGkCYurSDHVxh9JjnDC8Ck2urptawq8nCe",
  "key40": "4jQq1V9T8Q99TnF36i3Rr4Ge9rBppPfijJeLmAqhsuwsQvrKAsRQw5RqUnfCQrSvMaeLBmsjHXCLRy6WfdQqitqW",
  "key41": "2FbNxPJRJT7CUpkTy6FYip2UqP9igZodieY2HnMGr8EgQ2xtqfHvrDfcag4fRSMFpzBfKpcKiME6z5PiDWuxdfsK",
  "key42": "2xAP83tLT3gHrjSZaEzU11NYwujEJiYTYJNpLsLk6F8WYPoX5jiMGGeW8k8f4RsvEFwKfdYRaejPF8ugj6KrbuKo",
  "key43": "2gnCYC9zsYVYgP8iEYJYkFU58ZKGnh7RdKAn6N3NfpqVwAjxYM2DZgHHfqT8ukPUts4DHPeiLjPXtK4QHhiFwZnu"
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
