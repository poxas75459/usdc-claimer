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
    "66RNyc8dcKT791LjmpvTYbHad3Sdp1WuURDFXu55odJWFW9QxSj9eXrHF2UkRMBdKLQv3mJLZ2RxCoPh2nnkSrvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kFCU6SRDpp7CN2Q3WVnEwiNxSjxTiwpP7Wwz7PDpx2UUwr3ehY2KdH3AwVw4ncPppZit2AivPp7oexRWV3UvPiQ",
  "key1": "5pW4xQoA6gEuHTpkQD7NnLhc3EDFmSjVdYTEQfTCrs77CJgV2iwNU16h8tUL9Wmi7yjm1u1UK3hr6WzhfNZRoUTZ",
  "key2": "GTcT6A3ZuJ12eG2iXwodYAZeuxZ79ZxcFViQVxYtp51cu6Ws7idnoiqiHNjEPZ63QzeSx1XJgin3xARWapUfJ69",
  "key3": "2ra34SDpbgpfvvabmCD1Biud6uq9ZSYcrFPmpKiGgZHcWRKx1zDJymvbVVNurVN9jdFEmr89WzmesKvYxK7hhTX",
  "key4": "5uLcMGmrKMwZMjcc1EY5Yn1LShhBvk2wrKkSxNWkd1nidJvo1ySebhSUzkjBvKNgcXc679fV925iBRybgiiSAH52",
  "key5": "3j52SfwHZVe5TyN1ZgunqTB85xizTDpDFkxFfeYHEvc1pqXxhMgF2Dc7Ao2tXRQb3NUz1vmYvc5k5ZboUaZNhU6s",
  "key6": "2E9z72WqoXseQceK8S3HZQELwxtQTMa84M7VPUDLHFhXrM34hs35p3ssjMFGALCSSaHqVnT4MQoQMfmLGapBA5qX",
  "key7": "3UCspJYbsBtCW1qGykitJHvpQph82Uqy5QqbqsWKfsQipbNKCKGa5LDCqVh6X4vqdFnXmWagZCeWdU6v1HiP7k9A",
  "key8": "51sdWSQfnHJd4smGKzC1ErJvf2k8wvVZTM2J8kug5JLi2qqRo8VaAwCr76f1YiptFSC92TT4jAq9bFcAy6GCGDPG",
  "key9": "2QKpEytYxyWiaKdaM4e2nXKspBvXtuNz1GATbFGJXauTbPXRzZnwV8c7vpQ8sg71f6732pmaFYHSpfz5daD55SWP",
  "key10": "5WsQ26ybwXnGSxpfezQmQxzvh1vdre4to8bZXyAScTyqjj1dhxjnpiTpve2YbpYuJ71dDYdf4ieGpBUNorPcrBP",
  "key11": "aRzNUZBZCtPgZgyQqrbYJrLAKfDtX9Ap6TDmC64PqinPq5Lxfwy8HzQfmDeUvS8VizTQqpCcmTMADjE6rvpBM37",
  "key12": "55PZQHJXobRWGjZv3KWa6uVvNL8G2KiQpGNPTKuSLN8ndsg3RbcmRjdRfRZuLoLxuy7h2GwYzW23tBtN5BgNj5Jg",
  "key13": "4saus9F3huFS6k3CURpN7VqFncGYveXPnSg2d2C8sk47pgt4nTmcABhPCvE6VYFpGxJaxQX4hC7BrGM29TyNfEtx",
  "key14": "255gmFzLMYLN7scD5xE5xdQE7mmzzL3AfrDkrFEPjPKGv88KfGgit8tDMUEyxL9k27YvxtEo84MVf5z5AgXyAGiX",
  "key15": "XHsQ9BvfJ2sXLZ5EB5rgixYFYt6wMvoCaHLogBMUEATrABLv9LJCADG4gufgVDmc2H8fX278AcpkpkNMwjsUgxy",
  "key16": "2RAt7QRo4xwzzrLAHjCoimVYtAsRwfcAj9MiG91ZCjaoJURME2yQEeHSPnkHkhpEtvUhypZLCY7qna1D6M2TKNXM",
  "key17": "5GWbfcGEdCBCTe3VgvQn8x324CJpKwCYUmEmjiSexpSZ3QxAtVWfWF7XHN3uSPK2nuVhTuHHP3ZXv2UVS2GkFvwS",
  "key18": "2JXsJcbbSVDxXuypDMZqy6Agzd5v3jc4WLHwSNFXP6C8mdyHWXq3LaVsErXC9aa6mErYNJxU6pxrTzYwXtyC98Bb",
  "key19": "2HMcq6xnQwVHNArXZpfDnQEdxEFyTQjH7Zr3eRWBweTqEbKu5UQCpoN53BYuLeA1eLTCcCzaKepCy3h6Mq8YBSf4",
  "key20": "4jZe3XpYTTLtAp5aZiEzyAVVWwuH4KgcwmYySHdtym7dUkwa6CcGSCcaXnX1W2jWVavYcncNbb6asptZPG8cmqxg",
  "key21": "5woYMZ49uDKPfrc4BDaBUbu2LLPSEwnQV2niohFgWEpWwwA6HHrt8vf9f1gTV3RnGCeCzuVcpyhPMpgUW4gTBrnP",
  "key22": "5nqErRVQpnc8xbr1G9WTUrftuGNoLfbZVXi9kKCf5w1LHYNV8KmvYmWpM9F814d1JRSLdvoEofQDQyfzedefP9dA",
  "key23": "2FUwukgy491ycNSLmadAHtUgg2doGHTt9WRZWYrEpk5fWn84Gbgq9pc93ojA1eTd5BcbtVUPLMXWBLd6UNcvTomS",
  "key24": "36UfL6GXbsrhfp3G72pGETBvvYASzxxGNwZUKVXq4Nkd9yJkPi9dpVCbscQZgUixSZ29jnv6CveeBdtGi42xUDAt",
  "key25": "2NNSUd1Az7xKC25z6kW1y3byDp7AeHYg3WHdDpXpBJj6u7bEQmWomfJWwVBHh6y9FBj3krcNKXMwvejUdd2qT3WJ",
  "key26": "5jFU1L44654e6eL7RDUansLToz4wXh8NhwBe2CYZtfP5itVcKWifSFCtRM5ReciiWv5uX3fsKx3xPTH6N9iN8SeM",
  "key27": "38i71UXBgfj66CWAkrTcwT1MD5ngFpsrFmGSXs84nFmbnZxjkPffmVekhnBYHVB8YpXeuJR2NWGWhWUfEjrNyZ6U",
  "key28": "5yrjKbf2g31J57ufQdpNFdaqQZR8YozR3sYwAp4rPD3Y6D8ciGELtQDMZieo1qW7vFw8iK87B2TXkvrei739sA4G",
  "key29": "5MqGUZ36gVjggP2TAaji77MZ78xDBhBmwDZvcWz8WsveDgMqRvPxgXSutZVM3eSHvYeWPfpe7AHExq7bXVPtSsbz",
  "key30": "4NHBsEU7FtC1xVYhPp54X5zTLehahXv7W43Fox3wxqaSFh5YPtWb5Ce4ExxqGzDBKJcm1DApvLQ4CrYpX64qXmMm"
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
