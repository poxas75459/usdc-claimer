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
    "3PG4fpu4qH4MYoRafYEXsHUWvNXuMffaKHyeroFfejczTn4MuF9bYwrWEnyN7tSXH6PYtNah84W1zeu5ZC8v4hn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65527mdx9gBcMQMuxk83tPMNm7aTpevrepjp3P7yYcL9mtF4aoEgvMkXq5dV9URiMoRmntwvQk8zihgcsX4CdApP",
  "key1": "5sfEc1mecNf9YHzqVZdPoYX21Tc5CWRCkb5jVYFEr4mCSE8nNLEwvdMCsWnbpLuePhTCVDfLm9QxwqgANnEh7MKc",
  "key2": "4B4yGmUKWKaZg8F7Y4WprV8uBbFkfRszb4ALCztrAYTB5bkWuHYH7TUtnCbaj5KfuRhC16bbNPcTE2RFCv2TXoGw",
  "key3": "2DEB8tgLzwhLSu8wWphGiuVw3NoZSXejnALoGZupHbjkf9zZj2z6cvm6EPXczzEvnJGiS8n7ZugTkg8xKgkAXaXV",
  "key4": "3wq2tGgvcRKX3y3TWrqwEyhEDvi7rNEcC3LKpSnzj3my31KPjewXDrPNgxUuNuqENgb4xmpnqADpKbAxtWM6Xdgf",
  "key5": "83sTe2Ea3Na5KmGuxZE4TJnFaazrghFGWxdDH3ffhPKqeVsu8joY5QzvQ8MkcXsobNNiSwkBz8bmtvY5JvV392Y",
  "key6": "4fh3YSRCaXMDaercmUVVxT5GkZncPZMULDRbzMoFA58Fvw4ia2HNUFDiGbZ1gApNdY48i6jGUPJUnHu627zcFao4",
  "key7": "261z2EbLkQC8PYvhbSBd79br6WcvqWqtwRHvtnjDBLUoGPNYWnBxTnYfPkYNszSuRq4aFb48ZbDHmWfeW6WKD59u",
  "key8": "5kzUC5DphV1UT3SqQXbHPkp8E8vnF4NcejXr3KAJFeU2LokD7EtTM48uoxhZL5HLHZAyUpaeRocnd2SDG9QXNgJA",
  "key9": "5MQzfb5dVJmXhCE8DxtULqWWF3yXW9QAoLSN7RZdq1RC1aFQ6413o9DW2ZpwYbRAXpCrwuvKACG6vJ2EXcEZAeBD",
  "key10": "3xUpwSJAk8LYdhK3Bv6mNsowqQsCwugrjvvfCtNUPdvZ9q6d4pazt1TtGnjN2PjKXNRcFZgdTnNTU4ZXh9PN2AyK",
  "key11": "85N4DH3gKb6LQzV251QpHP2i3xBhXsXKn7o4KBuLDDFhJtbCgoqJsavSqaNJkopXYdoBUeVr5QWHKEXo64hjy86",
  "key12": "2J5nHzY8vSHoyu3yDxaLNuqF7XfuEXXzSY1kimghsuhHxJfXUHKizjZjwDGvVC7NqEs7Bqh1ECDB48Fw1EYeh4dY",
  "key13": "2eTctJVUVV8eYKDSQYLQkcwuJbwj41LL6sCMsMjesKkZbsNGmUHaUPgbEszRfkgwayEZdgY3NYuUpzjJa4VBUXXi",
  "key14": "5AgHGP2RgJ6Vx9YQYPtkGWeiULKsARbUofQBYWiUcdUNC2ohX8xGEBtSy1k7r7eB2MELLXcaxz68Z12eD2uuDpU",
  "key15": "5ZyN6cuXodx47CKBx1HAXNyVpmWqFeAgNXvswhyWYSxfBevtGXaPwUuP8VwUg7YuZFPdhED52kCB2jQyniodtRcN",
  "key16": "wMgtLdXSYRBFvdyRFPFiKdrgmRDem98f3Ku6bTh9RJAbxj1xxqF3uCgisDcZTdpYmc3U7KzkDXyGg65JYPksN2v",
  "key17": "4xPWfkFfXNcMMZADWoMFkjDXfouiJMjayn8mjhwqbXKxRJU8QUsDXqxJwp1wvPEkVvno6DKYaE9AGCm1DhaHmGrT",
  "key18": "2J6aZsvYddzGPWpQGPvheWow7RfbWPqFrL2WMY7mBQCCRfnp45CKZc6j3E3FNgKAG1jtqr21KTbFeyg2N9WwLmtT",
  "key19": "5JHM7NqAVvwNUP6A9FxgwZcPjjYcfFZ2pws6CP3mR2ig4q6Nb7TcufCRpHmbHQBKCZh71ET5LE8tEa1twPoUDMrY",
  "key20": "2KjBeisszTkFuoSCDVpsXDEyd4iWbKEzo19W6Gi43WkbCbaSFQp1kZWQD73h3XGQK22yvD8feLbYuw6ESMqRCFPB",
  "key21": "5sJqQ2kAVotXxaWGLi8MBKpTBKYDxf9vwr3No9mQyrYL5ZyLNr56fEUZA7z32NNEFkYe5pq3iwWj1o9P3ceo1wbs",
  "key22": "5Vmo6fWDraaij6Bc8rYFUBYj4TWfGtGhWLqrvu5xWSj6rLSWLtFN9D1DgL1zhsWSmBbPkN63kMMYLrvJDYWwyaFv",
  "key23": "3W1XvtQRUDGyG2RyuyBydQXNSXcqQ2fVF78aXKESPqXfx9nZJ592RKd7jHGgoEqtn8nFydYJvNbPdZ2uEuqibKW5",
  "key24": "5NHvubck4VuQykujkRQtK3t76PacJa8uL6SjLyaejvtpzBoqBaF68tm7Qrz1CFgW2AEGai3etfBmUUVwAswhQELp"
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
