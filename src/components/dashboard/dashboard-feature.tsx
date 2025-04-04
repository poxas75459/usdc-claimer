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
    "4qfwRNekWJofMp4AxjeNRVWrvZA1eYGbfhiJttHod8UPmyMiqaVfbpCBP8zN64E2EAye9RaBUPruYG79vQQDxcMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ktGEgm1xZWDDRm746UZmu5g3hWciGwpSAFvicVLGqFDWb3gwwBnBNGoJ7nv68BguT47TEPeh2nx4b7RXs6CztUM",
  "key1": "3Bp8BG4rakUszPskxQYZEUaPu2DKrSXeHdr4U8HfKmRd1mEWNYVKUQs9JiKUeNTvkbEgNipLWFuxGQtkkcD3StZ4",
  "key2": "2T3VWxtrhUw1BxYPKw3d2AgorzTqkzKrN84QUt2TzPug1ZaEGGzbvFXKg8yX4ovkf4RnYyo8cXRsxUY9PacJewQG",
  "key3": "3qLogknHUeJZmefv4mf7rQkN7hNsZfPdkQT8WaVAZiNNPDtFVLzTkLHeD22aCspekp75gdspsqsb9NC4HRmSKE6F",
  "key4": "2NVE5u8c1onogty1eg6qujMSTuLfuqFR7uAMqQ1Qeoz1rAFJKXTwFf5AGCPdoRtB8jVVrssf88ytrqsLeoANoCDd",
  "key5": "X8NeUdmCyxAacGBE8auy27u3WLcCZ9uHWFPAqAqb2ySuVC367wREfdKS5eezEwBmiGPmcxRisPi1SxD4evHekT9",
  "key6": "5T2cEyMPySgbVwQNjL7hBh6T62zjHoKAMXQcLz8HwhzDW24Exr7QWvhRUEjPrsFzPR6t9sJjv4jvvtbWm18HcTJw",
  "key7": "4AxENsecjoWQW8ffZVAJew54QV1H6F7uwBApq9X8z75bLdRUkmxo5PyJqn8FEvjYxYnKXLL7ADevr75zBYta6THR",
  "key8": "2xESm8SvJTddDf4ERLzuPRBu2ttBe1Dj1qYeT31rpgqDTUUypQfECxExbgUnD8G2cyx4CWBrqGzHa1wpxVTdWuzQ",
  "key9": "295URx14FB6rcY8sVuX1obSPEfrPRrGRuUxnzshkTXGaCb1CLyW55k8kGdSqtmNbNAH3TjH2k76Km8hjv7yyfLdX",
  "key10": "3JRiyefF6Hu4xXg15wNHkPYfK42pLUpHd3yVXYU95qSXncWv8bRxCDmMBQx4QBbSmsYqDqrDkpew5FCLMcPp6UHK",
  "key11": "38BpGtKiqE8EjrKtRjoeUz45YVaYQFkd7tdUQkZ2A6ha9ea1MiqBo4VBWpsuEitrvwVV4eYM5twLrT1DGmT5KVeQ",
  "key12": "4Y8ioEYyi4aD7F4vLWbpFCRFZiExrTnzRpWkgcCRqrYipQmx3y53W9hiX7tCnAq4HHfDBjqoaYobikjYp1ErhHrt",
  "key13": "24zNnhJ4AbNCnqpW7ibS6BVC4MBA92R1yDkostaFa4rxBobXpbA9Js6K5UZjsEK521xkr9xxyPoCGRMeKZTMLLUk",
  "key14": "5kejYtNxhxsg9dJuzxMWYjWhwWntTvopEJWLDJXxtJ4wGWdqwBH6NUVjaQJsbr3MWRSpqoCDh5UUhCjkaVU553tF",
  "key15": "4fnGnA5JnLik1uVVAUVJX8xpmzBrL2ivQm4KiA3R5Bc8U9jjjnGcvSuo1hShXGXiBu5R6mUKWtKYV77YMNuSnkMQ",
  "key16": "RjdHqvomDx4rmpVxU3Ab6342bPnm1m4HF2BsYudi2XYLsMXzn9bGQUEJnbbpZXk6obbnptakYU7LqWBeRKrjn3f",
  "key17": "K8isvyBpBV58SFZA3Gzdets43GyKQcEnUdSLrpADSuYT2oa49kvuVVX7Fas4iASNVZRLMELMfFAm4DFyqJF1FY1",
  "key18": "9LM7D2coRoTeLhzLvR3iBZ81X5scxndgJdZhMzws8RSwzUyjkxZQWfowKegjbvUv1fceHg6rTd3Fd3TjkPzhs2B",
  "key19": "5x7KotAo5QtFmACx5VHMA1x5spCVsCEXkRzn6buV3PX52Vc7m1qP5SArM1fT2cJxFh4hDzxyvz8dUXCkcyYVCZjJ",
  "key20": "5LbDnakQAYs2vzNNgSsRUdZdHBLjGZugrkKPjGbXh2LJpG5JsJB81Yt1Bn5ymvyoF1XySU8AoLxp3g6g1GphjeHJ",
  "key21": "6hiQE8mwJTniGdtj7Hr8694m6EuLfybaKAmMyoshDhyeP2VDAzEvHt6hhQk594iyDrGHCZ9XPruABdEsGVRc1wV",
  "key22": "3JhnE2nCJ6N94Gt53aCWPNLGsMrqoK6LbTWUwRWGWXdJdoX8jPNcSkodwDAtsQaCvT4XmFbuSqquczSxB7vgyi2q",
  "key23": "5fFcsFsnfeduUnbU29EQN8vt1uGXY1zBYfLMqxee22vvPXyHAtPYjFusddDMLiXGhryHMW5kS2tR2FR4iW6Ki16z",
  "key24": "3Msmoz9wkFdr253NavHRX2HtotsEy4AxVicf2uDJotBWoGzPNrZRJqFz1KP2uBoSk5JeU3uXQtxSPhsNCzk4WSS2",
  "key25": "zbN2kdxsRTXqyLFwU4Vo92MwvpwsvbBXey3em5ucAaVGV9n8xFtUs4x9faEEyyLn5Wt65DxFFetGJmQmoCoxSrB",
  "key26": "3q5xFgpHX4REhmDGe13uShGNKcKtmvFyqgeDeh9ATfKCUzLyToWkx7ZVhYbHV26UXjSKevX44tcDxMaW33TaGzus",
  "key27": "21jkaoJgZTgZ9VFjeVeBt2d14HLZ9S8wAzZjPYNiY4kNz7jdiYUs9YZnQKS8i93Kgc473HH2A9pZGCdpWnpXTev1",
  "key28": "2VCA2FoSeG8Eo9aq2Fb28TXanJiZaoHqUCUNWNJ7ZZYTdDampBZkqZgGVauEkW1fVf1Q6hphbZxCttYsGdQSzN3n",
  "key29": "641vnHiXp9YqJE9FAxBD5rpKxganD5sNKXdg2z2bpiLCZxmPTmZcbezHA9WCq4J7zqXuP5VF6CdzijRp2mm8xvwH"
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
