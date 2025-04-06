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
    "2Wt1KPJ8RmqLJ8Fptn7WfYkCAMbsr2TFFxq4HuDuZ2BS8N4EWTKeJo5UuKCWWjDfZXvTdEtqiQgE32vDWiUJdYHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ED38Zg44kUCM47HFUjDGVQVGTpScSFVK8BDkuw9NaSSMCAQPtrn8B61iWTcnqSV8ECEZ59hjJu87L7VA2azKmWC",
  "key1": "2EY5jomZ8AUKeNZR9jLViucPk7qPgDHT1DjUoY2ZHf8ckjwLMfX3Mh3Ay6Q5pxFv11G9G2yW85z5RDpvQixiVAde",
  "key2": "jNkrAHdCXBWZ47VPeQpEV6YsskiJQfCgzdkDmoYi39CiUkRfP3WGT8GYaGnirezNRByfVSoveZuNd3JwQBotx4n",
  "key3": "651vpgzKvJp5x39NuEJiywSJYbiQJpU8LXscQQuGt3wLdeQNY2mjDW4zvQ8nP3auP5GpjkDgDa46PiJ3TukGJKnA",
  "key4": "5aoLfKYm7kkwTXa6WEVY9sWFYeaRyjurhYhS93MD2MHkjvyRU4LaBPZ3MBaxW8H45SByJvuptndwKFHDyuPzmsu8",
  "key5": "RHoJe747trLEQEGkGzaTTKsW68L328tBvFrSXrM4w7J2pLyr8ib6XfckZQG4Y8u9Z6QXyKtkUQRkTQ745tV1q8H",
  "key6": "2eQPTgkv9VVJoMmxJqdt2vB43eHjHjvm5RB7Qpe5rKKr2tcL9jA66CHcf14D6PoN6E3Pj8j936rq423AHzpgy6b",
  "key7": "4hFdWULzu7afA9xm3JtxJDyeLB6BaUBK1Kp7xtagicicG4UUU4J5uBGkKXqig8dNCwGrQdgPAEa5V7TpAxMFxxER",
  "key8": "5irLGaLitTsdc2ZN8VttCMAAKg1v3b4dCoa2EU5E6vfVaEEPLTSCJbgHYZzX51rx1e55RgCNbqRQdLkr3gwpZCRy",
  "key9": "64e5eEG6cXvufWdo5ukCtYMRDkukiPwTKNw8v9E1hnw4ahBB6PoYFndRsarfPY6ZERgm9qa1fdnabECmoPJdWRXi",
  "key10": "wA7yqAqCRCGQcE8n2h3op7eypG2aJfJ3MAxAHS2A5PUvwSnkSvLCc3LfjzDhgyktC8oJgnxgYzEE62S4gmYcArh",
  "key11": "28J4Ao59gPfQJ1gxoDoPYCyvxyWnUtyt41CATaDEU242UGNrbaENUWSztZG4JcBKzLpSbq1T6ci54SKojiPTfewa",
  "key12": "2Bf6Egq9n95Rw1LydXw4m16UsmnBaGqS56paxQjtQcvGjmsynTB9hHsVouHCyqN29sEHFjwD9wwemkcXM7dZsu5Z",
  "key13": "5SdCQkcWGJM8YF4fcyKmaNCCUBk51Mng7sfvtsSHQ238RhQQm1pAxh42TTk2fWU5bKiM8s6vbpfiZNMVhfDyjSgH",
  "key14": "3RHdG9ucQin5Nd67GHow3QGbLkjsFAx2ayHi7qW2Dm985snuF4xQZafdHEzEsY6aRCaL6nX7qT1rQfMYa8cU6UNX",
  "key15": "28bDJAbu9KhoJ1siaC97d3pGgpX9VRsLmfgMNvfup4gmqEs3jnVSSfAyUNacKTUiWzWawSaenvcP1PHuYQGVLSNY",
  "key16": "2JBuNLdSwsyvgJw82nj4Jvo3hP2r8qMf1J5Fi9tnHuFxn5HDCfeTEnvHGQAGuwaum4x8rpBH8pYpeBkL4TRodhUK",
  "key17": "54d9idMTnZPxj3y4cMbDvU5FcWeTYqrfBEbkF7WNciMbT9hNguy5wv7pBcrzk6dJ2K2JwHL1NbNQGNkxCGNBAe63",
  "key18": "4Ap6tB1a9AdchbvAxno4e79FHxG2CiFTomDnVe4fkDXDFhAgarCYYhuqbYUYhCexiXX9j6hmutJZNz51uMEcaYRW",
  "key19": "4G9LQyBD7qG6GKwysZk5sJBMEc512xvuHY82w4ottnq6nY6CmAgyWqTVC9weibWFEe9miQSTAV6BtAeu1x3XtHuu",
  "key20": "4pNBiwR5z1JDPzAYfccK8mzcw4oHeGvtb8LuG5i8FKVpDHmDq7mDgFPD6TWqHUgEGE6kY6RFo11e45Atn6JvQ7Va",
  "key21": "3gVyhp1rtZZgH85cXrkfpsB8g5MaPoJXZtB4zKzWtwcbemzxooeQuABgetiJ1jp4CKmwT8wTbyykWwkUSShLa1En",
  "key22": "4ZM8AKE7odz5M3ScVixXcFMi2NPrPgeHt5me1b84iQ7nyfPLqroPXg8xwVMjqy3ZyphsNRKbh5Vu9xiCvq1pLkgo",
  "key23": "5xTNRwen8ABKK1nhFmeHo6jkDJns4UsAfUpyGRFGzVN7KRH1edimh1EGkQsz45PkxCcPAHUAhS9V7SXnvEPWgDDz",
  "key24": "2iHsVGCTJBpiHvZ8HwPK6bT1V3Z98CUb9e4BzsTa1CxA4nxrZToAqt2XoPgEq9rawEQgpNQ2zY8SH2xTLgNeB7VC",
  "key25": "3YhFD1AxQhXmww7HjMaCVLyLgr4jk1cvRvvhDmwebQKfSwLP8FKzbVbUDvasdCVMspxaMKHDs7G6Eb3wsKT9JcGT",
  "key26": "2sVsLKMrY2cm1fCSmspqX4kq1dsCfwFNbiGFhbbuCUzkjCifC4G9UVFHAdsJPjxtpANWnsek8FE6QdrFmvJ9w87c",
  "key27": "4eaF5ZCDSRf7aCez7sPdMQbPdUDoAGjgjgUzKbFZokkkpouLruVq64n6bq97ghxoTmfHLQ5syKy61Exkm2poY3LJ",
  "key28": "3zQfSQXyLKHbj6HmQtvmuBreQNHGTKj9gBUN7r1aPSw8hyiXi3JMmJ3b13G8UVtfpadEBdpeNveJ69uaWttVJfbo",
  "key29": "3KECCrcpCu4NfdRKjBYmSRZHkaCkvdPcZv2q4ZfkZR1Vgy7mTQthdEFSqRkcpF68WDwdNPjmZVKbaWwjoKsuWZMn"
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
