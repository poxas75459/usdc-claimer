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
    "2VTERyxjGAno33c7qPwc4AKv84YrcQCabF8pNLFYvNxbzfvPmhgkszZHSVKbNCmSh4qLp9qU2WDorVyHk41g9LnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oqwjPye9FhRy3QDtGKqLGq77dyyFBZBRXyueCzFdxejzUjwaz6MPA5MnhfC6TgmZfXYwKpBtYeMX2DnVPr9kwvT",
  "key1": "5ua9rsZsVhxszyvjxRShgT6EfE7kdmRLXAP4q2wPt3LNvFPA2FWJnav91BKEX3obfd87P1JAqqAhwwnTtgJhzPu3",
  "key2": "4sRB4fF9pUPRhRi4YvSfo1pntFjVbRiCFEgWMmThn7anqo561nehcPrhXQVG6PV87m4yphbGXLyQWakyiLTsLVXz",
  "key3": "5tdRub6RqSCEpu5PbyRARfDSCN5x3vK6JHe6n6WNg3XVxJ8KBo8bz75rt1YE6wZ4yNFNWf3MhodzphyghqdTmn2i",
  "key4": "3qaHr2aHeom6gouVRsqLh168Zc4SdW6yTqT4cj5sS1cJrHndFnZDgJyouupX6tXZPBaDLtEL76VBUBy8P7CWwzvA",
  "key5": "5GaGF56oVDbFKEoxsK28MMuaj6UBF6xHf83vzhd77dtKs6AibedBjeCk6dfnvxE3z9iFMaauVJm5C6DPm6niiSHP",
  "key6": "2iiPLFd2gE5b9XRD4NEjZfe5F2MiRJXY3N8PaYYYWdJ5qXi6T32dRoMJRYQEVGYzqmTRBaQh7brFL6ZQaGWeYm7g",
  "key7": "59HD16vNhGhX72WewHfY36atxcAGXqK8PwrSSKtyNzw6o87ZHrgvVL79qJXmDHawrwUngBxuDXovskfEvHdKj9Zi",
  "key8": "RZnFCyVKQUdapooumrxQz1EMBoTJg1ywaumNCjRutuANCidqNJAjrsSiN9yXt9Q2VP1PtcfG5dEFUGPvyDUAgDm",
  "key9": "vtD8y741FCVEnaVzHRNTX2TqTtwSePVrrpiG3rAtwFwt8vwtb78tLprC62a23yyYgeZ3eT85BsFevZpyNVSxTHy",
  "key10": "o9j6eJXJSGCwf3EgRmMLHx3hFwXN8TnoKPQmLeyZSHGc4bpLz7knBxYZthrKVZcn2efeN7UVhFHVGow7cS5YPEM",
  "key11": "28npyhaRox4x4wixRDSmw9HpH4Bdim1QzDqHrGmjb3UcceYhZ4YjvdZnoA1PxjcuqcZQjYB3DWF47apsnAd9Whim",
  "key12": "pMng3Ju2ZqLmqWKQearRy93icRpJbJMCrAMheaHXWj9iHkQf9TjMcCVMsws6hgHFSZ9n3oFNXLrHHTP1MYsh5mN",
  "key13": "4UenjPRT9yqC9frqnrgix93M4UwyfRaRMK8pR6rQjCEAzP3ZyJy69ZgzkbvoYPUvkwzLuqNj6QMvpNbXNPY73QPC",
  "key14": "5SKVtqeza9YNFVbwCTpG7c9cbE7gvrC9sAYtC2R9kpC6DCrLmGdchy5YRKrv9j5XrqqAwvbAtSuFMffUcAqEQPE5",
  "key15": "3L2M8AMVHqocBKJbhEXViK3tDgRdc984ohLddvkn2bggEPiDziGcx7aS5VbRCRSPmR2b1k1mdQhSp569RNnEMfAX",
  "key16": "62FukErZoPGcjZH37buNz4Txam3rfSmjsNESjT2CScWY5n48oFAJVK5fxJvbALsnUc3GAbgc4b1M2HiJuvFRjB1N",
  "key17": "3SA1ns2RAAeHJPBfW8yCGWeafNKqkXaNfjYVmpdvKVnfRYnVWi3zbRVv2RZfMp8giRGeD4rFaRPEbHgXhT6ittRP",
  "key18": "3Q1BaLHYfZFKNujTmD9TLSRs2GcKQjMrcF1hcCMKprR2aazj4oo9F29vF3CNxQVY7xFobffvbLSB6kzyi5v5TPno",
  "key19": "4w8c6ERqgR3budaVX3pdBEYL2u2WWbZS5SgXKY24tTdZj8KGuF5vmZCNyaR3vzRhsm5vj2SHYvH3V1FiLhGMosQc",
  "key20": "5kqi1VZU54LqCeuzYJdHzQB7T88egB911EVWX4AetfohAiKT4yCtDSzLev8MSf9HBmcWrVhSCLbMy2pYUAnktEaj",
  "key21": "5V6jyYrbHTUAYDAyguaoUXpD4tixoPog9kYW5QxeEeZt5AdMquaT3VWZfeJeuz6TWXQTSGMkqwBVCpnnSh5TJHqA",
  "key22": "3ZMW63eauVyhYiCyGMt2THd3dRmPiFbLxXdsEjB9AYDejujTSH6xUbQdHuMzmfJCijkbsAR1mWpREaJYa4WcYpwB",
  "key23": "5sAGaBLCzHZLUWZeXdHEsyUKpwpNk3yg2prLqxJmUy9aYkKMCTMXxQn3XwYM5atuxCC5ntPhpZFFDmyq5ZPQ5yPn",
  "key24": "3Sm3UhNiHkxw8urhSsPBJbnFiBsmdaVxHw8FwQ83cM7DkG5XWK4cJB21wTUVDU9MCKDhWrsnF9yffAvRxsi4gQff",
  "key25": "5rVUij4XMT8J9cwucu9HJ9c698FBR2oBSRnBEgoVVN2zpFzTTYNy67NqH5NRataQk8RazTEvq6MRcrWiwKgcwGaL",
  "key26": "5QFQSMUZR1t6EMZjZTrjvQEXb3bA7qBpK5Z3RpAow8MQPXWNU2kQK3coBpzpB7eV1Uc1TMMuFZQmqi1egh15s99x",
  "key27": "3QJhJcqmvovJ8A99R4AeLDUr5BbA9fWK4rxhub3wxe4NDV812sf76xKGzp6mM8PGwJTCTKAzpM2VwZGYhmft79HZ",
  "key28": "5cc1uK9ojupaJtJCQwFhVMxbyrgKic3fKoQXuBp3dXy9Vct63YXagaDDdnSboAo6cKDPTN2komgezAAzwjK6h7EH",
  "key29": "3LLx6tasnE3zH9c1bVd1ys2MrLfT2mf6CuRnv4ipe3VhsFFfm1jTysxVSJnHb2SpekyK4AyP89nZeFrFTXVohjNm",
  "key30": "2DhvJgvMuZXoPwVVXcngovAzApkX1bGiSkzNFFGsGLmpVMPdM3XSzavx3b2yJiD1obRG6GrU6oPdQJyDDbAVHHPa",
  "key31": "5HY1cBbqR8z7oZePb4NLEYpomchJiH2QZVJBGXJr4HE6Wrqn6fiD4gz5ZcQNPaQjfNfT6QeJwp3mBnKktkEGxmcs",
  "key32": "3LcsyTDj6hx9sMhFV4rqkTy9m5iU4TcJpDAUSuzjRmp1p7zV8BkJZrNhtUmbpzjhcqYZW8t38UK5Ni7ioftw2PuD",
  "key33": "2pgRfhoC1Bk6EPLCiSkwgpuemNZdfoRvBEuunGdzW9T5q4Yy3kYwQKxLV1PCAj7BnPBrkuygLRQH5ZC98soHmKpU",
  "key34": "5JzCiPyis3PR4jiDuuMRk1xguJ3QSgjPKbLLpCr1etJMSXY6bwbT9aQ6HYxzqN4Hr6Qc4uB1pVPvdCybx28urxJ3",
  "key35": "3AJU9aBR4UzYckBa1fL7he3CQiNcYCjPfsmKLHjM7YxKEbKoW2EoB38oXS7GANUWQ1egYZ9nzPEj4yowQT9iWA9R",
  "key36": "4Z7WenPXT6Gi5vPhbiTN8hUrr5ho8oFuqahXRhhyTtZpGqJoPnAU26G1A24kkJxBXtEdhGLoAcHuYMLgD5JiPHLs",
  "key37": "3f2jHhBkYB9m9oktfzw2tDMcCEi7Bf8YdGLDNrXny6bf7M65zpgWCcg95SASvcEUdRefQ2TsEfF5E5UEiguS5qTa"
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
