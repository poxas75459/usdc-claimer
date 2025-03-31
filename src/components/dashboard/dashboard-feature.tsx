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
    "58ETPeMmXwNr4rwxX9Yx9WzJVjdVfjbj2pz2rrZSdYHCx4wssBm1PLVADhj7FAUK2Wti6bxEDYg4Csqaj3NAHqbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YqKHA91J4ztEamrVUGq6rprabMYQzrYJNs2hkY6BJgrCNdoYNyHxX8mxs9ieSmLELcwHf1NXFyNU22rbvjFN6qa",
  "key1": "4bHXVFZbBEkmkWRkG77TERrdbY31s7dxkniBZRKYqz9ak7mFqXxb3TqkZRq7uYBDe4nZ34AS1tzV7ad5XrbtXW5B",
  "key2": "5DTLiT8pj67AeXFeD4e2HhVCCbq5fn5JAx6N5X6Duz8CVuVQBBpfuBFvtCiXQRuasbEvEBBsnv2k1trxaeeTy1rs",
  "key3": "5958DLapcUwAvZLTUG3xEYtSGyPiJCn4EA5yyhTtcAfPXjEqTV7Ts17RcWUArSN6XjQcK6cUPnCKV8nq4HTJq7pu",
  "key4": "5q3yx1XH5H6yHKqd82fN7mLPdfvV5Me7KF6iCddAeT8a3sNnVjQLQMCLz8Kqkkvf31CcvSvRU1yMEeTo8UEnntUC",
  "key5": "3HP1HULVVCZcXkLi4r27c8Xq2YERXqrLGYA8SWNcHu7pnKQfmUj9AhNcwPfXLFcT5ZYk6q5G1A7nBxdVaReRTse7",
  "key6": "37XWTo9wV2KJzGteQ2hM8yeqJ837mkGFP3vZuDgbX3PgiU5tcfaU84LghyxYyo6uVL1q4EVQyKyEVUpg3B1fK4SX",
  "key7": "5Ths1nk4PJ9HqbPcPgtvMKsGhB3f8JgmiArp9rgLuStgXwL2KDiy7X577QTthjc8eqLduHNvYJV5M1W5RaT2qaZw",
  "key8": "2Mrg4gYuCJVidwkqHHJfsNPdVKhM3RicUD4BwBKuurkC7k4kExi8emaYDMUARmC6meixqybCP7KVB8snxJ2vPQNS",
  "key9": "iuNPSmCwebBE7KCScVL34SotmPqsquvLXYGRxpp1qjmnHF84ysnty4YygskFgbejkEQsScheNpzwXo5pPtMSpSf",
  "key10": "2t293ysZjuquJKWvqRgX4suYYyEWjbHcnEGkvaMLyyD8VeEAZSu4aqaDyGwhDnHm9YBdcBt6GQsxGoqhmqJCDpxT",
  "key11": "45DUXsxzYtTDqhQrqkVGpbVWeYPcYu8PcaDevrEGRviAQYdk6TAcNzmZ1Fa58AGBZPXihH1yph3JTL4JeSosDYEb",
  "key12": "5GsLLu2mqfo4eHHtRPej5tTVrFQxyriMLwp3msvbvPs3EndL1sCkugvjZZJedoVVVrDUpEoYvsanBZXd7EjyLaqM",
  "key13": "5UF85AAGcz14KzhkFTdMAptYmp2y6Shf3Sve9RkNuGBifZ9j7aXUbR2zkcX2M32we9nZLoMWY4TJsPPBJE45ZaHS",
  "key14": "5LeWaJmb8pqfEod8KXKfaFwB6UKUZ4gK7ExecNgecutrfU1XTLqv96E2TcQ33GYQ58wZBh6vVunmJbBJUd5GfXiC",
  "key15": "KfRoNtpQLyWSqboeTDi2tsrTGzmVSDTj6GffFEs9ciyUxyHe7K52eZcxZHLDiHUZ9fiocPMAx82V5Ro41DRmifw",
  "key16": "8xAkfQgzpnYUZZeN9j4cVVHDqgZG6kYyHC2Qh823KMmgzDvBZsJ4juVVn9uqJjSeB5HHScu3B9DJwUDiksYrsTi",
  "key17": "CZojiDgb97r25n8g8YzGRAP6XVXG6JmEzcZ2sAuroeeoc6XgnKXco3z83z2FzJMXCQDyRZ7ZEdyzcLnJRqqdzk1",
  "key18": "W9czNcMKZ4mt4gAdTQM341aLYGYCweLCPWy19kWwMi1QqiCLXGnYszvdMTkvBoarRDn7yjJKhx77eG9HX9hTZcP",
  "key19": "2eZFifj95XsPxxQ8A7MR8wnWbqpXkn2TmcTR5ezAriy5ZEdjNbxwvSKYbBkAa34w4i338wmZaBbzhKXubqn5icds",
  "key20": "3CJw6ETXadEPD9CqnrvH4LvvxBjpTuZXKxQ3CZLpCmsjcs8roH3mVUTJsGyQ6Uaa4j5vJLFUbTKKCEu7S4SwGvVL",
  "key21": "3qkjH6Df4rKPDqf8T8WSJ8JX5oHiH1MvzUcrHFE2tYixSakThax4o7m4WDfjMSzk82MucGWyST5yy6bziQD4qGvc",
  "key22": "35CcPWNgvaH7LHmTYb3EdYTzD5CrhP44cpj7kgzWFg7r4mi13J28MuLwDS2jRKrXqx4brF4XMTmvTyCinK5425hY",
  "key23": "KNdwkbU6oSnCnaZGY8dDxhczsQCTpV9ZVXEuu2yHjifUXVgSG9cXcTkAAhUHva5pDWVL7QZXwYZDatpJgt1Gae2",
  "key24": "55uwVxo7LbHXsD3hBvBq4ncDVKbCGGkjP5bWqhCZqUJVcwb2Xn3qJPDnCHp3h2bbonYqKxNbrYoJ3PC6MMvxWCfD"
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
