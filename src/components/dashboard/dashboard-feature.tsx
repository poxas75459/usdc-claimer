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
    "2UuK5qZs8KQXtKwirJK3zisjTiZH3nvGHDnPSvwzK6jsGEJ3VWJm8mpt8NwhgCCNU2EUC4hZWSCQQtnmdMTkTxao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vYmDZPdMsiAp6TPZoLPBJJLc9aQ52FjcNQS6Canv8WyB58KL22XH8J5viii4Vraasnc3HFoQ74Ta8kaBMinbq7w",
  "key1": "aebWkuHLEhaVN7XLSt5UwJ8DET2SGihEJyoPRUMN9S1BafhnPnNkN8fwTvRc41foLW3bpGhBcwZ5B6WJKXw2ktG",
  "key2": "3LFLEjk7EFK8fFFxiRamJv8o7KGwUbK4xyv7p5C44UKYvmrPC5aFwHTtqgQ2G4QWWq1We4yFnGwzFDNggdWPxhJ2",
  "key3": "2RKWd7VEj9eovJbXkgv12HJRtUnJG8f7tqwUvH2YKnG4S3njw95ukfq8bYWg7wi9p2DugLBTbbNDyG7ntfHkfncm",
  "key4": "3mGUQrJpsu3MHcacRMuQnr85wwwsUySKHooZWnJGDVcoJWN8Mi1Zxd1edVbrC8Nc5pi6ZLdkfZmh7Bo5AqVNGHLv",
  "key5": "2ADMDER7zTmaEo9wbQjM3dYASGZWXDYsSaTSjNPDMAXqcKv3sBfKzNZcjLhsWHnKe6rNirVSzWhZsJcroCKCtDQd",
  "key6": "wKZ8z91ZTiAm19tieUZTiC88NwjiEg6KCcB8FwfLACCnGdD53m4R5UsZ6LJPL2YfVsP1JEbF5GfgTDmUY7tCuLA",
  "key7": "5NkgWVSsikUy8Wt8Zv1cV4simjmvYQcKY3wbAQ4y7zwyMwb8FVEtbk3DeydgSuU6ua52JaZv6jAh88MYxj6Fv72z",
  "key8": "4q2WCBmDuVTXK33X7qwdpKwK9EboHtLEAArSYswZKj3nZsuBEz5LqtZPrRgqoYaQnU3beXz2owYzUrVj7jkwUN6C",
  "key9": "q6hcFQXj1HuodiAats6aAe3KNz7u9FdgNMdBZuzMB9JeUh1Scz4toUM35QeKFKaqPMWSYx8XogWCMRrRBjNc5T6",
  "key10": "39fAvHc2N95uu9ZszxLdanGtLbwYJeaqtSGqwKYARQP1obqDPZuF7sK8Ee6aZmbiNGNdKfS3AV7djNectJfundV6",
  "key11": "4b5KLTJTEpZmVbLHWhqsfJxPnkhgQ9kEZTP7QY72CHusKXWwYiSPpZpxCjsXeYLKnUUhvfYJ9oJtmQCWoYsphLVv",
  "key12": "GmXaeAjSHg7q4YXir8nceccBQga9mQtjUqi3nzNu3dP4rpbNHcT5JcsyBu5aqeohLW4PuxNpVpst8UHKhfFCECP",
  "key13": "2DZyZJJyoZDKkyKWdyx67hWVVonox53T7oZSrrcF9AkNqykyNxdybhEGMFLP4NR22xVUKHjFzkTwnMLmCUq3btLf",
  "key14": "4fxma9LrVKwTnD6CqiC4ebXQj3ETVkuGbyhy3bNvPbus72wF4hvcyvofBjUn2gu5GUFBJu9toyTg9egKUNBQMUPA",
  "key15": "3QhPNm7ad56yKoyfpABdeoMwextdz6AUL2751w6XjujpD2f8wsm3yrLd6s7o8UBm7gHCJ9tcPw1SpTDbYY22NgUb",
  "key16": "2J8zQFh46StcLjkGpiPtz5ZK5RQ1avzPaaGm4mxN13KmVJAtsX4XmC9wY6sJ4Jr5R5b8Ua95iPKDMJ7dKqWUvpiG",
  "key17": "3UigLU98QJbnhwAJXiPG3UtnDxQTkpRBuV8z7M5RMz8Z2XPFPNCgHXUzWRGTJ3r2WXKVM7arPwxs1LkuNmLpHyJs",
  "key18": "3Qf2Cy2aVcMveuhmyTyH2aeXaapkW15cTXZziVShFmeMM6FF1EYAVUWPxJtLMRFvGA28b3zr3p4aiz6sW87xLKHM",
  "key19": "5G9dSBjcPJDTfmsxoLvMuu3PU4p8Fsn92eqwAfXN3AkQHr9u53wbXnxY56PThTkjH1pWa8z91u6Ppx6W9mHsih7",
  "key20": "3YaBArkQrDyKvVd5iELHucBd8RQg9erodNYTjKiZcwGjNSs9J4FtgKs587raNhVvvnWqms3Armde1W5Rvpf5ps6W",
  "key21": "3ygF4kG6hLRkGta7Lg6eykkFpUX7rNfz4HiPwtZbBmdEfgYvgWj1nhaUehuBygV1sVi8hEzzrfAscN9E57MCHXWR",
  "key22": "4mWdhYKytQGBAFyuiTnA5oFDdfLzqPE6LK8m72aaYJZ84CUgEBPz4SGmRTR19UxubiMT86yCXEXqUkYxvwaP46eH",
  "key23": "4mnj1UyypmCHzJaHDpkyxaSaGu7c4zGpSLb8doyFgycvzA6JiSQkjSATzvNFhb18S1ERL4T2YJ8S9CZkWQkivWZC",
  "key24": "3pPemVbQDNJwtrCSHrgFHu32diMF1Ton6DhbmajeG48vHCcRV3etEsvZSVG8qk479vKCUADjQDLNx5VdMs7RvTb5",
  "key25": "4hJ2WwxE8hUFKyrKYP3TX21KPHyXfEUM8mM2xeegJ5vnCR27NJg8SAdkMLZTys22LDWXtGUPAKpAoxuFQERDs8Dg",
  "key26": "4kxkUAsD9Xj3nSGjDiKMuFjMRpBLTkc7sqYBKgJnQpsH4sfiGbrcKdbHQ2smi5NU5k34pyWbAWgDCYxzPCsLSUDR",
  "key27": "yekvb1dcPsu4a5g73Uje7w5U7hsRMCUZXXFJC7gZ7KVja41JWDgfuHYa34C76ptj2GZUd1ZYf4rTxd5yPfaYb9N",
  "key28": "4ubixiuZobqM1VVUrSmwLqxP19zm4iruGSoJuiEiq4oKemHP5S2iurZCKjiJtf2iXudKf59ayGUYFZCmHbwqtAyi",
  "key29": "Ugd3PxdNFsUHU2qSphU6bghMMots3y7KqddM23jt1S7z1SGHEj4iY38sqPsycoVrxgKjo4fyfa1wNNpSCEsZwWJ"
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
