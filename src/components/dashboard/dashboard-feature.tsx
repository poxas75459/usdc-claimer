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
    "546k2XXzZoiVxEAFFFSrrtUBgpSqj6eXa2AcpT44poBvXXoNnTGpTr1XdcbzXYxWLG3KKZgaRXB7vu4vzircjQfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pgFsGEgDU4crm8TdMFNiKLRfMZvomLfabW34A96YGnmzz3YX83CRJvy4BzxUrn7f1WQ8EHA6aZxQi4TrH15i88A",
  "key1": "3N4jEq8x4kMCX3wBiowPs6GyPCJCYM4cVGJsvB98Axbt9fyxJrEHuNSuxReAVNEvuXjhU8JT7TN5uaDRirfusA2L",
  "key2": "3jEhSqEj4DW3wxztKNkwwUtZApVArWq53Q945uWZT5HWDoVjhgK2pyyR57sT6vJoQWSF4J46vvr3CHWyKqiCp7XM",
  "key3": "4FjbzeFgqjG4dDaMd43auv3Ek1m3PoKmdaUj1pDqXRJhLeoaEEGEVm7ev9W3hA4NDNiGxGHdLP9H6trmtXSgumRS",
  "key4": "2Dw5WYHVa76Nxd5bNsStHnoMAYhMPa42kXBLsnrtLpfM1Nq3n3HTM23GX2Fyg8Z9LTRK8JTgE5TRYaNW3ihgQqTa",
  "key5": "3h6Jvud1P3ra2yWfFh5UePydYTDE3Mn6TGhse4b8P81pvZREjXKW4ujRgJxqMUfCUug3B11tY9YjTFod27GW96ZX",
  "key6": "2AFj1Y3eGgDWspzM4hJbKwHkXdccMU1L2Ne9qHGKWDwnRmYV7f7757UPUDMwyvQkfsFwU8yNSny3BgE9P5bKbYJ1",
  "key7": "kzCLvkzekmg2ysZqUAVXy17EXRcQQj97zvnbRivghD1GZyBgv1KCGfMP4p63nKGKmuQPCPThk6dRZcQzqGfTHm3",
  "key8": "26ybirsMVWmA8eeJA5gahDgvhtc6QrjTCAuKbyKoCRyU5v8N5Zy8Bb5qGTXQTWy4GVnTMvtqYEihPwCyFeU31ezf",
  "key9": "4Twwooytdvmn8obBf8f8jh3THKqfJ6DNB4pTXNN5YQ979tTQbniicCvCMXrNqFGCSG8W6nwtgBq8DhNfT7QYvoct",
  "key10": "5QMvHqKXoU9UfXyh3poFmdbNzpNLozkWJSfemtbkjAM7At52LhzA6vvtsHP85FaX19YQoQNA4i7kUMaqfzmvZhTB",
  "key11": "4aoJpZoyEdMxfsieBvEbKZSKDmjLM8ZhErRyxUVYs247vHhg2UW6KnfX6MnGvBGcTfDjXfZ7Ry4nDHPQpipiQcEE",
  "key12": "4GMtd9AS9V6BgEyGjP94htGtUorZVekkY12DhSs2KLoiAzSuUfqakyYd181fnYQoPpPw4JyGB1oamiWrT9ifCtSn",
  "key13": "4A4kN2YCNXXR4HAj7uDzCbrqAbuW3W35a1SyhX9F9tPSUXjNLLos9E6shRdByWZdv5qoWtEXhRxMEqT8QMEGYEt1",
  "key14": "2roL2PjB7EG7pbj6L8Msyx7Yak7APQXpk2WjCQT93rV9M3vcZpuBEYR6NMHw7HFFMADcnSuXmx7ZocGn83AjG92r",
  "key15": "5p63gEgdvaHU19Z27b9ebyzxUnsjXaATP2hVNkA16G8wLTWGN71iRCroy4XFAq58gXJp1EcAhAn2RnwGGRGMHkfB",
  "key16": "4cS5BK6sKNiyVm7HDgCecXw9yMzbEjx6Gjw7cZVYidcJT3qmdFvJupXZrKpWXZ2WzzY4ZjocCbhRWELFZfswqftw",
  "key17": "2q6SmWZSdjP4B8DYtXXoZGnGjSGsBJkQWrDCeX7i1t9dwTNUs5YXVYx7iCuB54JX8izn43rJ5Vs9X1hUKuNE5ojc",
  "key18": "ZXwZDnPZb3q2MpwGf7hcSFbCNnHuaXXfoMJGgrjivc2UiHAQwNkGAs5wjpCGgeVa6A2baEzAbsPBFCMKcqFTRPY",
  "key19": "4ubXnuFae1sBHDZwxeojVeJscfgnKXwYNV3UJTDEFNmfdguJb6EceQHTBTdhkGkEhzmaVCNPsJNzfLgBjRSJoorj",
  "key20": "3pAjX6AAzYA9K9tCyTXh48y25frdLZiCMxXpb87xwLWC7K5rjs5jxje5p3mdDCye96xVgNnMkfsfduYDCTFkJFek",
  "key21": "Q6wK21pKczB1BZzonL7zYLEynYFbor1URVXr5kXXEVsChv1u97fUXahQMuZJU7j8us127f1tpmiB6YomPonZZxn",
  "key22": "4KxBnSyyfWYZZkCuT4phBJ1y6fufXfJAYQMYKBjJfs81mcXqB2E4KkwwFrDmYhw3JoEaD1hXpqiqwRCRDogLaZMa",
  "key23": "2kjefoLcEBQKo5cxRraYnpHfTcxZfW3yE4PH6y6hjNASc9QDArzfsAwzAbUpp7xMms5yEBGWDS9AbViVpbWQWZo4",
  "key24": "5XSDbSPmruPig22XA9F11XZxSixb9RdFdfHmfoN7sXaqzGSGsSNWiCcNcBnGhkshYmRAnFZCsAu5efBbEET4bzav",
  "key25": "5g8WJ9giRXewzSNjkBCW4y8Pp4zDn4HfhpgnYPPzf5GZaU2Z7Uyfbx9KrY8yKk6fw9Hz9ivx4aKvBpdzNxxv68aJ",
  "key26": "2aricgNLEgLvYoShQRNHj6hc5NpvRyCakimxESy8w6z1Lhdqkixr6sDQXeuzDrj6Gmhskm6np3doD9wpPCigvEEG",
  "key27": "5Zo9bL1qfmevk4YQd8rciekzTwaKTRgwEhaX7kXm96XgKAUe7LYAvjZsUm6PDZsGPantWRzw1vEgNaAcUYhTbCzr"
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
