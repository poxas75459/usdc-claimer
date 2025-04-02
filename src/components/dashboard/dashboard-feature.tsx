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
    "T9th2JQNdpWYyEDMgEeB29b4NJ5B6mHE3BGyC2C172796TrRs5Hj2kbntEN9uuxEGfi4kzhBat6EqihKERmiwxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bCQQQVePtbYQiVsJPpony85Ds4RRNiCKjSohj4zNNrdbnQnNWL2iogDKnPnHrY52VKpcVA2c8BVWi52uWi9uMna",
  "key1": "TXxkPfSg5R3HP9LdwCqY1C3zt9iynsmGeFXan8MrXkY9zX4WMDUWbtp3GSjS4GnVTQmNejBmYMsKQ4Gt4TtN3Kh",
  "key2": "em2yTfSB2FDd525WrfBrR6wtsQrCHvakaZvzNieLUWhE33g4yHgiyN27uZNJE4butCVBPpEB647UrX2CJPLd91Z",
  "key3": "5d1skgq1ZH2boBtfGFxrqmvRxqNHTMsGFtHz6NJHwYaK1e68BqELsaPVKRmTSz4o1U4N3GtFpmKCRgwg4iptcoTR",
  "key4": "67A4CiKmasW1smLqGNp2SUbcVA1JDXJt8Lgg5cnk9fa3GM9XzsA9KuB1BF4VR5AEP8B8V2JvTJUKF4B8zh3g5iDj",
  "key5": "2MjyGdqmZFiJTPPrjjeQ8Qo77S5W9bzTHVHLry2v7F3aD3JGYSnZBFYSRNy3EcWdw6xqDmcn4RAa6e69BNzH4Sjj",
  "key6": "3PZ8Y6L14cSDJiLnit5GhS7BzrgAc9eTLgLMZxiVS16bSUPVVNyhVKScVWaiWdvgy9wmxDy9MtFf2phwsYxD65Xx",
  "key7": "4FYcgzRnnDN768z2svhxkj1M4aNGkLcpjw4g8CxWnW8xLdHaqdZUXZbeee2Vod45VokKYUH3VCkGiqckNaGBDKpw",
  "key8": "5dqopT57Mb6TrcPWrVLorEQXnUcbRRffN5RTUJVPWZvivdYZELGpY1dd2osDj6YckJh9ukroZgfJmahjZMt7MGqY",
  "key9": "4i8g2mxUC67P5jNstymsRaN3fmszHjYq2ed8QrUGQZcCG4qCZzpaMudUx3uZf3RME4rU6LbbRQmit5q7kU2h2JKc",
  "key10": "5C1rpQrKxHq4h1HWJpA1Zy31GwSZ7amEBe8QWb3n2N95FaaSnBZhYcJ3GRXRAj3yurVH76w32L8Ly8D6uzX3fiwA",
  "key11": "4sKrSEwVpUVuP5M6hrhHB1GktcbmQ1gSK4Lvpekw7PiodEkz1G4dBVGvFT9nc188Hf5MMkoyz9yfFh72GefRmjLd",
  "key12": "4tfo79t7WDjmVKwZZzDdFBuNh9iNvnd1B61esA4669AmMS3HV3SzWyddRQJ71x82of1pV7nLYgY6159WrhrdjC3k",
  "key13": "5Mrq1DHbWGB45pcrw7MWvnJvUsD2JLrByxH44ULk5zoYreh65RFZDd68PS4CgReDvNh4vYuAubmkucKLqRMpnxeJ",
  "key14": "57gtJoUxeaaFAxJ6zbS4skCxRZLvFhJfH4w7HoamFqAUHb8ZkJR3z2htBwnPV66tm8Yo5rY8arRxUT1vb8UpJuhj",
  "key15": "447Lqi12kPgULd7DDTost4S1w2WRsXQbjUbaZdKygAzB2bpbXA7EDgBVNU5C1aJY25KDVG5mT2FHmCtN7Ht8H6gx",
  "key16": "tBW3sMhhWMmkjd7fJhqMRihzHaX3NsUSYEd3tDdYk48uvWEnvGLMbY73xNZLu7zJbgEAfEkfPoD66zKV4NZy9kw",
  "key17": "2SeViPSzhyRbcTRVfxQJZPXKuheqU2PBtfR1FKeXhNF2DuzmaQSejob17kLGGHbsXkQwRYiJ8rpHRxC5pZjDB13d",
  "key18": "5qF2s99dCNv5FAgdtRq4LxHZL5HmYee9TcPKey2JXnuszNL1t7kMVJCEPTGVyX8L6GBiy8PVi2BXqT3qJvFvMYzB",
  "key19": "5o4AaZPG5zTdXRHaKLXrYCBEgzY8z2MPXqmpG3YWQCgmfZSY5aYtLK1YfYhRcTUmaRhKoRgdQm27iaVGDywkWvCT",
  "key20": "ueZPFrQnFauLzDYSrGUYZ6iLssfakxCftwSJih7Y2tYwkjSLdWqi5xrBmvUpy6Ai7BREoiXJ7Z2ksV8woDQKFMe",
  "key21": "p8HxHpKiwoKG6htvp9MDHKLTj6TWF32jVwkvr6LbvAfpuhv7ELZ176HoM9rPEes7CMJ2AMDqna57LpGAaVTeAuQ",
  "key22": "5Q39bdbGq9sUiGdG7rrDsnRYNgzvSofZb7DGkbAGiS4dpRcftpuz1pvaaoHG5SY9uPJe9LakBGYNXTKMPXSowce7",
  "key23": "igv7hEjhfJciNv8JZoombfCoQYjAQ2B7xu3J5Au59fjAanbEyYVTJt9uMb5GE226STX4cWm9kH6kX3Fos6DwCvu",
  "key24": "4eYZJxw2AoJuEnt48WgXbDcdUXmqoFaxJUhpHcHWYvY1y3VbiWpwmWmfzJT4iLLSqefUtgd4bx8CpGnHGY8WtriM",
  "key25": "5oqH9Bw2jdexcjqjHwW5gwRkhvAmWv7QtjQMo5LSdqiUFPwN1RDLnDxL36nm3YVeNMq8fdYNZu9arqjuek8Xxa5z"
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
