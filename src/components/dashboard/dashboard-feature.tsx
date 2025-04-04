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
    "3kBHZAfGz5DbbDziyuab4tjitMXRXN9nWwYU4jh8ZJtU4StZr3G9EsLN4utXGiRdWWmEGBoig7qRgs8qGGKkKE8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZLyBYD3WhLavofStogiMBfUKZXtcJjxeiVMKfCBK9SKYVjzw6vYJVTxWV4Eo6ruRX6Kt3D5HgFZorZCg88tAKH8",
  "key1": "5rwYMxPiYeYocW6YRHf5yCuyDuvyPrBzjj6wX1qjmba2yTfYfJzF24e5DF752XJnia7FHTYGu46k1uzDHx6bfUwT",
  "key2": "SbD6ckVfqdxgDijAnZpqo3JvttmMncgtciLP3TZbTRM8g77DZfnAUY9AXi77qV7HtBrJAi7ZAnqY2CWsBK39kaP",
  "key3": "2xjrL9cH8R5BT5wXBpAXbEbK1oMLQfpgN18GdRad1V9bnbTbbzEiD7ff5ThrW4J3w13EjUd9SJZabxHTgE6Hfnwx",
  "key4": "3WbSCLJDrKE84soDzpzYobuud1GcUAhHBi3G5RB7YCn9aKo1ozEt2UGXQ6beQQWVejxceVedvCKphURK1Kenh897",
  "key5": "2AYyntunqNnFoPtHEUiBYHGXqeUpgPcxd4tu44vw92yHcGySDJDbrKexdMKZJeEsLBiRQTDqEX5PJayAwjQC1pt",
  "key6": "5LiFtegfoeuNXSEvhS6mJnWPSgteVi9RRUVdQo3HKYYxk9YFEQJmk8TKNBE87XBcdKxXQsBnTcnuF7jSfzhhRKxa",
  "key7": "3RHmKQk17ouXykPVH89UcAZcNJo5mw3BWi7xxnNpHkevLRN9M831RtMY9wtNNcLTRxVtJZviEHAkryYsy3dYookC",
  "key8": "5QwoTJZTCBdDtrrWW5D6agS8auUQ5iubGLTG1PE19TpeC9fyNDDrMkZ4VsL1LZjYhn4FSVxDaKonAgeobm8ZLy9k",
  "key9": "gmXaG8XLEdQC2h3GfESNHcjSAj8Ecyfe8JhK4afV2jVuagvWxD8Vu5fmVzHv7NP9VCjXGUkwyEWNLqQCpwXkQBy",
  "key10": "5r49P6gxN3t7Kr6LHabFPZgFVtgL1tkV2mjF8rjiZbgrWQzshZT55ytM2SzMyhaqF8VQionqznz3ioA53e7vfLD3",
  "key11": "5ks4CgS7FmDz97htDFQZFZzujGWHU9rf33h9fbZdwXvrv71ySwPoUHKNzqF5cQ2szajJPoV7vP1XrwEgyQ4McB69",
  "key12": "4wuKej2ngFzb1obfKUadN5Gb7RoJNMen74H1M7ka1GyVSc22YMh8MWshiQDBwsCezmpYfYTic15Uq1ffwumDwqjZ",
  "key13": "2X2AMQodvFsh7cDQLNQ4pRPmGEw82vACpck16TJfBow6N1rZEn6pobteEPAiRZ1y98YNpwppNnCUb6waKUpJ4aCZ",
  "key14": "2Y4woVKHdq7BueMFGZ517xN6dUyDkxR8ebcTzRAD85dbNo23oTATV7CsRtfdjXUpStBbyJdzyN9H2YQjaWy4DZf2",
  "key15": "dpHHfRDuFUQ2bKA3jr8b3BntTwPPGafr5vYL8rRwHFtXovKPV4aseo3VHRMWi5Wgvt9L3w93HBjiead1k5sJjgc",
  "key16": "3YxuYgAuQtcYEfcSCec9bDWmsdHVCSFu2DquK4MN2A1VRyLgu1jaSWZSwawPrjgbe9sjRx8ZMyoqjshUfsgWSMeC",
  "key17": "35RGagygAQEZgk2yNf7ZiUTuuhsrZcBLuGPRXLeD5FgSx5tMs1uVstwZbKhV71V5KM6L6q7YXZA77iTojdorcJJy",
  "key18": "3AdMcEonuY6XvaUeqvaUvtbPzVcnAhPLrDa9J2kMx7jb8wPexKgb9iXdVzoRvz1nqURRqpEGLhrTryLan1mZgeZL",
  "key19": "22yWi1NociSueTu9S2QjuZwLh8a6tRfn2ELFYEPT1BxgJ2xsNCPJxa8ijS6vhWybnuRWJPxrcvtYKeJBCXJsneZW",
  "key20": "4UwRsQ3mpcujaFXUACma8KyC2yD67hyjVDvZ5JoZQSqDYQi8jEZhKhsEm3fWPH9XmAKbh8K3Vi7dWaWhWyddRCEE",
  "key21": "3n1nHGRPq2VgkKwnAtyoyPch9N8f9v1wLDtF5bnTv34kV3oAGt24whsF11JTS3MzW2zbMZ5n2hfLryEsDDFkFy22",
  "key22": "vMARxGFFDPVHygu7899jnQFivzsVkaruN2KeKFSXCQh2d5fgLmxAf1PwZi8moTUVRx7PCZGZwqDfW91d1Kyiror",
  "key23": "Rw5w4wQYWVCKj6joMjwgBU5F8Ceq6KifFAPjdLVDwC8eY43GZT9MG5ajoQT5Ew9CKGBiSoiLZyUwGq5LQDhVNRU",
  "key24": "KRjoM37wMPeb3Myz7PVmQR3M1c3Lyd4Drwq6MQCpk2jnqL51mS2wdniZH2mHXhQBikPtGaNfhCgRq9C6RzJAvrU"
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
