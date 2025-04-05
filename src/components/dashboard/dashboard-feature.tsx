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
    "2wC7AVRGfwjKHiHcLu2H8YFV38f5ES9aA7xhynMoLBmZS48hW1759hsUn8qFfxV9kTLnuM7urd4frPGEqUCq7n27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o8jb5WQoB9cXRcBAdcphCWX8z6GTCQt6b4eJ8Yv2oQeZbeNnAjgQjiiYCq9r4MpCNXE1umBHMxWTDXT4g4hXR5q",
  "key1": "4DuNRvUEAAC2tfZc1Er8zYyzHiN4iAUaKeKaqmrgUCciqf8RyTTSwF3q5cU2hNjWKfKNfHHmRZ1MxZsUQc3qZxTY",
  "key2": "2x925FJN6QvYGDfRr5ZTJMgtvZ4hqVEG6SvbSoBvXoSRQLausFQUFgvcZZbPxqVv7ZRLRGajtn2jWiZpd641UNh3",
  "key3": "4XFNJR8ZJ2ChBGoPzUHKgJ6sRZmTzFAsXfkwhBS5Xu1aPoypuA9aKHNrRWM87eu592fePanGjS48E9wrxocRcWLF",
  "key4": "xSBhLog56563AFAQz8W5hTTg1GwitHjfiDEkgEoreE4kEcjPSDWvtR4VS8r5DTnhpKVaWUnjEbAjEfxqxx3VvV2",
  "key5": "4Q6bYNw1AsRukVip3XC4p37GsuXSMHgqZhQLvjwQoaHAFpEyo3hncdGs5R8YBWubmZNuZ2NGNgphyvf7Bn5jEciG",
  "key6": "23cmRxJ7dH5HkJzqvKfaqyRcw7zxktqU3PQkdSXoyxdx741gLoZapnJSBQgUMyiWoxysBrKigCcJv1pFj8nLn7z1",
  "key7": "31jfU3asTgtwQJwcW4disS5yddZzUmcefuh1tsXHUAGccVSyy5aKF8dmjsCV1odHLCxLYCQ3v1w6xBAwYnXkL8ka",
  "key8": "34Q2QUE75JJJavV18b7UnT2jdcgcjrBE9etn1WxKu4TZ8AKdWs2sJ4ZtBc9MKVKS9GquwqpmLNr7z19khEAPZaFC",
  "key9": "5PEWXGGhXc35UC1bLkM873jnUW5ujYUc6wmmV8HQVoW7BH1exAsCgxVLF5Q6Pot2N6bzLZniNKWaDXfmgcUgRHRT",
  "key10": "3X9JLrz6d28b3hgVC9UddNatTWSfPYoTYQnaiaCP9B3oeEHURLHEubfrVXq3PVJEhMQ2AtWkDMWLMWWocT4Be8up",
  "key11": "3Afewjj7AvEFLGkxLDCxswt3LEDozvSLWj3wYyamZ35D29GrA4n4gC546ne8XxXTnkrVDWLQt2MP6ccyNGceQmWx",
  "key12": "3ZZNQ21xashfN4hxpjfKsV4CjwoLNzTNJjF518B4dfqP7Cq8cuP6XSRvRASWKRMZ9L8qfUwxdSZQNpH7sanUAQaR",
  "key13": "238iRhLMV4oMDEU2iioqjGBgmq9qGU8M3c1qBWc7f6o22Dv45hACCtDFoUsxnKimqeRyn8jiU3EsWg6J57Dbx7L4",
  "key14": "4ftu4277sS7BZpdLAGTQS2XpXKQx6NgygTrz8Rgr6mzfDKqEsZemeXVaXKiVLmYmBiHPknxc8faS91d9t2Fksg1P",
  "key15": "gtAqf7BGjQTyXV1mh5ofeCiWB8JLBcxTkGzvkCTvWaryW59U74vHpPnSZ2MVYvpachMCX3FDuShZDoLev1b6e4n",
  "key16": "4Lc8pRNiwMj3KwXAjHPfbKPtEQoFhP3wUgLELeR9Ttnk8gpUykxvS6tR4qkpNooda3WUDtjsB3uMw95AcjXq5njZ",
  "key17": "4pjMtrQQH3vZ1kwvtyNU5jsdqYa7BBgKndVf9sF5Jvi7J8Pve22keXxpteSh4Mcg4cLZih8yPgLAEbNZr8QBLCUi",
  "key18": "q8WPffBJZDocSpeTtvGpHxuoKSXzdM78nJ7V3xcVkDRamL2CdNjbc9XC9nvDpDoqqVfyQjxk41BFcZJk4dHgpuD",
  "key19": "3NSbKE7QHmydQnPWMR5JDp1AwAo81g2pPX2WXXLjm25LwjRT6LM1rESSjhHbyh2SbFG7ZAYYcm9WgASGjLZ4fxZj",
  "key20": "4nuFXXpxPPJiJGuVxwPifj4byGKEy9pK5qcP7QVvgg9c41VTFYQ69steX3pWetGPs87D9BMF9bhMjtRWBwLRSLho",
  "key21": "2gBXKYAU5ewzgyEqQeL16yyCknqEXwEyVvtseBGeYtJVV7LpFSXQ2SorQq74bpeLvHXXXLDSxk8Xy8niWGqLrF62",
  "key22": "27LdXEmG15pVzHQdZcpCgX32kc6rUrGdCQ45uqBUo3AtJ2qdQM3qmCn8yqcHvsURDScvHzLjKdKjBYmGKSpZofML",
  "key23": "36cCCJwHcGXQKEUfmrCCti9fnrGbm6gMC4wHncN12WF2UanXyUdCpuAfjkY9ibV5VfB4KjC5KsGsPhjMKWVGMMHL",
  "key24": "2JZw6LCzsqpcCyqpAwWpRFQumufEAVSx9Bzq2s8cct5mSeLjdn2o57nVV4XfW6ngMQwRrQKsPw5oQ6d6iBowdxbs",
  "key25": "4xVW6mAsh19kzXABb5Lq8x17Qe3326PWz6gjZBEUuM83Jj28ZkaAwvCvtgcD1bfaWFUGHGAxwBVTwfBRwFtnoTw3",
  "key26": "3KpbfQH5JQruS2tx8GRouGpf6gbyGoM8Ff9UhCrhbgq8JDBwBGa5L3FmFEwC1BBpv223KmGAJv41bjRHWw7cvXWA",
  "key27": "4AEYSRixHXrnJ2GuQNyPAfwRgGvYskRfoqxEVKpMWg7ZopQYFxeLaAhoQ2YgPrrJT4aryqZiHkNjHGStQUT5oGs5",
  "key28": "4ZWTdFoMq2QUCPdqNzPzmJByqqj4k45DFs3nUaJWN1WtD638LMoeDz9RL3d52C5s9ZGE1cAgb8EcWs7y7DyAsMyx",
  "key29": "3eqawUxGxUTLqjF857vPY9YbMAcPqZaXS4uS6XUqFpLztiowqm3dFKkcgCQJogL56Qk1MRd3TTz3BJNjEPuPAoDt"
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
