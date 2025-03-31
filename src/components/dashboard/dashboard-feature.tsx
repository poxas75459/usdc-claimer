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
    "9zpBRSWCARDs4sVRFxuPyHUkLTbMwe18K6oVzthAwRA41F1tFHzpuXBYA92tHSwbvtUibnUrThnmKHgLPSFHBFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ZdWgPppeVkbPnhKUXYaAY1Yz7DNkZTfRwXSrb4PkqcfvTW3wPhBoEvdbiKCrQ4xQuY66c7dzybmPsn6XJab5kT",
  "key1": "2PmAokGDDxsWWzUxZs4kZgkbqJ8tBtV6LjZQjRHAELgZmdAwvRzVgo1mvqVSEujn6d6zjSXAzLBwtxfswbfv169C",
  "key2": "2oWLFTXvMWhn93XYdbT8yvqttdWLc7JU5ZszhfbZYDMZQ2B6GGQWcj957DdXLEa7F5m3Wmhb5e7RTycKrEtfcybe",
  "key3": "3Vjo3Xj8XMBE1noPPG1MkabarMD1gRUJKXhLb88nszHtvZRoPS7TKzBri6unP2bSq9PTcQxLXWoqePxN6YskL436",
  "key4": "3tn7UrqyGu7zcATkuQKanJYeH3nGpYdDh3X5qqjrZmsaqxfnHGCWSj1K3PXgwSHGi56GBuW4X4WcRy1HTBnmjuG6",
  "key5": "3pQ3Vk4VioajUVbY8fLxacohS9PE23hfsMQ7mEJuWXgv461ajZcGs3NrLXcbv7zbGLskYqAaCgcVq4Giq9bv8DsQ",
  "key6": "63UC9qwicoSAa7wmQcia6dH8XuPXuMdVULmCK7Jc3KyPkpk4jRjwcoT9pzhhCo6VdpunVpdJrentW8A47SsFw3fo",
  "key7": "3M6MamYJ9TyB3LTHXScvXq3YvinnwbS3CEede7vxwcXnJ3wSzUbq6f9832qAyFxF7GLoQJWVescxEnBWRXFZFcwX",
  "key8": "2nemFosXBjjvfzrdARLpe9xBRDRbLziWumsMwBmy21wtXNQ8H5A9NodXhQNYcqMdcZZnbnuWGbzBJWBSHy4vrbq2",
  "key9": "eutwtAPReSYNLx3Bs6GP3KLgREciwN426aL5tvcbkmEDZeY9tfj5dExnXmtS7xckKAJPGM65kvq4ayWQE2Y7NVi",
  "key10": "5ahj7yoV4VMvriJ9jCUdPhByQX6KAyrBt62iFPCGmvUXSv6ST6NEzVD4AS2oob1cQ55VkGHHoS2VxhWULWhsk9LG",
  "key11": "29ymGXpU991ehiWDU8ehJNt6EXs13zNntyhMoDvn1Zope1sSFyp6ckgKYJMBFw4bzEoL5Q4WxYD7RxAByp1LdYqS",
  "key12": "3au7LnoTbAbuQGcFUV352QsHYQpjcndRWfEqtq2StfLB3AcuFDWZf6vGWKfeZ2onxRtP3bSqJ8doj14FQmB9C9T8",
  "key13": "4X8BAi5VLFEV8onipzK9dq2hBt5h7XKDLArWXci37CQsfaXNmdZxrSTKPvyZEqjHYqRWsbLtndkjcAeVHAhdUCwD",
  "key14": "4bAWZBFsaHgRoh6EEN2gco3kYvhtoY1wwNnnfYxiLrn8y4fK3SJKN19PC7HAMkaQsFWsc4zewxa1pqqiHkNejWaT",
  "key15": "5JZ8yEENpUczt2vbHfNQvhYt9V5PR3RXwGUPAzWCe4fjqb59h81Kz2uvpzSLRFuuQFuWLAP6swNmjjDKUzAafa3M",
  "key16": "2koKZYe2eKjfFouXgMQD9WzqZGYPtm4NMBbpUTvKZQwJbiiDFsnBWE8Dm3B9SzcLibS5jg5j4uNgFUvSJPAjEkai",
  "key17": "wc2Ge7HXLfHX4cUw3ymb2TnxbyceeHC4n1hEqMGFzvR7WaJMpLtMkz7cRQpFgB1NL5QYRiBUtm5hBFa7v9gVxKs",
  "key18": "8VAkV8ktuGH73EUe1Y5wdupX7vSbc9cBEAsBAYYJpREQRAdgS4E9qBjzrhavkxFQFbWqu6n9NjRkRTvGhmUWaKz",
  "key19": "2xixLCWZcTNDNDxw3vmLNAt6yAj2CWwCQwVtr6DhWo2TRkUDaBVnfrbEfLM9315mR4qr4mPFEXEcmWfhJq1NiwsW",
  "key20": "5hKjVEUgLVHhRHe2vSk8bNbpHk1bMeq4zowfizH6fCXWGjaV3A5T2kbu5nc3xbV8nDoeUKqTt82W4cn1iF21xTDb",
  "key21": "37HxdKwJbFvAQuHQhXSsYYBkSxmoLi9pzPr2Cz7zXi2ZmwDxKYoQcaPb9WbZET5QGXpG4xGYgWLafinyAnoaZHHA",
  "key22": "qR7LAk2A5Q7Jc7YNJPauHxjo563z8v2MAkAawuC25CjEqaYSJWF3qvN8TqjeM4yjkAuoUKBDLnYeX56GJ8pQ3dt",
  "key23": "44irEgRVfn1r5He1Gwo4jnCkBmX3sky1E7XyhgUPNZzfwMRDTVn18tKwfmzEL4vRLsqWHqxscb9A6i82sPv9T1gL",
  "key24": "5K8rXvG6PQ5kizc7QZy8eRcc8RqWd3TQ6p16hNXZxjsMRi3PhoA7J2n97M4z8R4QprUjcjoHkAgsYDP3Ls3SFjCe",
  "key25": "4pxrnEPLE8gRrUeRdMeU9YGug3kHdFa5bKcYhpEHfREfE7f7LxDGSqqFwi2Cc3EbVN3zbtxgaDm43WBRKKYday9q",
  "key26": "55z9SwXW5s6exvPNTZdzW8HfoaQmMx1ABd3nNTSgyn3XCk6AEB8RpXhbTNyj88QJaf7FRSbjG767VsBg6CNtRN45",
  "key27": "4dj3MFMbLEn9T1Mz9PEMvkmEokZstYSjPv2ybWjVkzuuG7evHLVYLBbtRakztvss2KodWzUxBSWuMJEn2GB5awhK",
  "key28": "4gQEDKiVowyCxuXGis1uPJiHVfVVaaZXm551bNJt5Wi4JA6HANQ7ZFAaPCGuziMqMxP7AHzmiG5Lq5DrRXcUqhWu",
  "key29": "3PhC7RUjin1EgKaAvPvbDknwGsctjtzACE641BXPgQpxLBJHJzyv33YDddkF7AcjRm7yPiMFFR9SAcJLY8cN9qEA",
  "key30": "3LfKkfST8qnaQFJcmsSN7EocLLt4idrgMmNrMhP4CPGsWXLwpR5EXofavNyCRLXqKcbd6eBW6t3kX8fJiHTzcU8K",
  "key31": "5Jh4QxRsAhfuzGQjdXGBy64VgPmYx8xCkLhRCbbHAZRtBwbraQBZmNcQPV9c331Na8cDLtpwkQBz7pU7Ta3KgC1o",
  "key32": "2FHLCzbY6ZXmoV5g1pVbKq6vP1cK3xxb3Mba5bkwXBGT4k4PoWKgtPrSnF6GUERVL5Sup9KuibxRAhF62rvJ7q2e",
  "key33": "3ttXJbJwjdQXrDPUTFMCsy8ReWDSPDBMsvtYjEfPULZoz7H4JQRAL9c9LCJdSkE1mV7YGQ5DV9WaBXNwnQeFrSux",
  "key34": "47TdQHtBxFgJjztxu8mvmdBJANQEUDqQ1rjsHAjCajk2A8m7Hvi3mbaJWbVS9ov1MTXJtcaRetwGCd6qnFkueawq",
  "key35": "xstdSp2RfnZmJuxBDZjMcQmmzg53QCZkxS8HtEX4kLCyjLU8rs51YDBREaE544tRJLmrrEnt2o5crbvmNgPtVYk",
  "key36": "tN8qC8BspU5ZxjSWM3xUrp7dMvUZKDHR56yDiQ1juSQW8Fb66BXgMepS9p3kZirUDLpcpx7JTHYqKctbKHQzEWf",
  "key37": "4Dgjz5bkQpE22BuutAz4govAFxB9ZA2zKQoBNfX6nGNuQC4zB6ggJscKTQZ4WAxZ8niqKCxdLbWvtigpk9HrD5gj",
  "key38": "35pU8QX44CzaFyrgYU4xbGSxooTuk8mhpvbo3jgpfe6FYNV8XL69QhTZeEbWHHgjP6Yb9RhYNw8rdVd2Bmtxt8Xt",
  "key39": "2bZdrEcmgD3Q4Z6N766XXpQHzexVGxoGL4o2N3XYC1Pjjfc14fN3NxdcfG8SNamRG5JZXwab3FvYf6UWWgEReqJF",
  "key40": "62UA68JrLxEHJoiGkoF79be7zPMdmUADr8upPYuQgYmBqkYmWedyofpT9ZmNw6aC7N7WRGK2DdzvQvMrjmC7bHjo",
  "key41": "4U5cqcwCSoDPGygRuKLLSmbb7jQMkSFXLxYKDUAFziyiu3DoLH8rTuPmCPTkL6y8GoqULDWKhzhYGDmRT5idpxAu",
  "key42": "4W9A347Y2TdEuhNwABzDpVRd8BpP1jhye36uv11Y5zdUHdwMs2ibrzGL9Q3x62Ue6HfFrg4H31vFtubk3mvKQjy7",
  "key43": "5o65Dyq4UVEf6sLnWxWCQv43n7oQDQiosJ9Pbqz8JJatVoAt7ap4REMdEEXsaRtxbjqzWJHENspDE6igC5bZFake",
  "key44": "rtGg8A4XnAnfdpCC2xmByuqj18fuTTuzgiGA3svdyXypzcsCGT91udHGt7Auswm5Vv6NNafbkxB7YCP3oHvhJyg",
  "key45": "3PVHsZ7LqRmM85p7b7o4GeMWXb6wQm14b7JJTLRZe6m1jyFNVoQUW8EY1PfhJ22pRFhig6yAp8oakxZfpd2mstV6"
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
