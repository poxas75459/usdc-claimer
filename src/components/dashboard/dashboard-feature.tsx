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
    "4aiPxxeDcdbeo86TZTRuqotL41EUPV7ef92pQEUx6y1QVw7AhVonqfcMYV3AUYHX9A7ZtodjMTe1xeWQ2CPraLJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yndDQuf3bUd5Wcbz1wWoW5FKs8C97gnhaqdtJp1VtvxmBH8Murraxzvrp31Y3kAEuUic37xj3iG8cjSmKVurXgq",
  "key1": "2aqNayyJCmn6h6aVVeF14dvxasLCDLGqvKFpkzkbbJFtYu2jX2SN2EWHJ14CbfUE2yYbeGttSF6WDcHu11dq4vPG",
  "key2": "44ueb7ft8NeEySrvoJe6wjYN8FnE9fgiT1oBDw8zb6nBhYc73YUaqCEoJym3HY7dx3M3dYBXyqVLyXJ6riusz5Zg",
  "key3": "3CoQt6dsLR1Luu9ZVh8baBQb19TC2q2M5BN4Q4YccVEVbyaba3sMyxH1X5S2eT7CaWjeEfLCUCkfRyvSgb4tpJyT",
  "key4": "3QMjgxvAbUVdc2Ay43SAfp3Mkis8Ruf36k23haHJvNxwvF12RTJ757xrNtqF6yjj8vagDvbKByWikxpJ5b6JG7RE",
  "key5": "3tBJ7NVuycemvVbRuEW3PaASf23wZWXGeoEh5W7ndYwpdjM1wmAAt4oZdj3s5YB3FmCgAibQnLKTJXBFUzPFvJi5",
  "key6": "62VAuVhk2A1Yrn6aQW1bnmkTAwDjFjRoavv7XZeSFWgxrHXf9wWnYqnjN6hZprZ4DjGbpTTVxZZh5FT6ZRUKx2UC",
  "key7": "5krVtLtHTT1HYXs8mwodUcYgbDNAuRGqsNHMeJBt6h5UGnnFM3ayFZvvWz4obX4F9KUJVy8u6kbW2au4YGmcpv28",
  "key8": "8pPg4h1mzyXdBLQgzyeiZPSTMqQGAsepiQaXZqbigmJCGgF94QCGZGe1LWe6x7xjiVq4KPrR15MNvEqshbr6pDC",
  "key9": "kNmehL1AVoyZg7svXAFk8voeJ3Ze2SBkLxwzwqK1KgwQ7T2PCC4VFYJHQoPCLzYpFJqNd5TuuiVzoNz3Gv95pK9",
  "key10": "4rRsf36XLP5dLXxpRGTDpnFPtNQUEzJDJFfeyiyDGycN6zYN6MVGt16t8nnhXeXwycZfK7kEG9P43bxD3SCov2FT",
  "key11": "3Urz9UKzJhCyHyb9i8q8RVXeF5m1i6KhVs69yMYhLEVJzQYz4ZGNmvnAVBaJDPmyg9k2icfpc1hBNaQMELYwrAnB",
  "key12": "2ueAh7DMbhbyYFznpTo2nwbhDZof7qpXDHnAcZDu18w1VCaDjHJXEuHkUUERso1PTpzB1D8FxukTvfyEKG2XC7xj",
  "key13": "4FMw1PEkS8hATuA2XNfr94u6vyQjWBXyGgmby3Uz4ZxLYr4V8U1xE4ZvUfRnVh7FoUxuS3vMNvpmFeT5cNMeutg3",
  "key14": "c4coaGJCVTbW9FjPi9C9RKL3S5gMVsq2MLC3aRJjFZAFiNMsXrxgNtEDrdQUJAeji6FRHoKgWSHsd2fW4LMXiAi",
  "key15": "4zUxEzWc6LEbRCppHRUUGsKCwAf536VKxWoKMDdEfm8d5mBjzyariHhZMCQdbSqua1drjTGuoVRtBjUvxhb3iTLf",
  "key16": "3iZHVjuKRWxgZFi2Cj28562FewPKjJFAg9ttJ3KuYvvvEzJPuFo3VKXuydQC3un79tZqmwzLeEqQwqi4jKpfDq6P",
  "key17": "deSxqUvNdP538dC1K4eEeBnn7nYcen4s6WM68MMi4FcsTYbpdkUsxQvNEFWSFJbGgd5UqqJLUp5XGbELvkeWbYt",
  "key18": "2cV3G9EgapivZMgkejs4i7fgHADve3XNV36jrgTrYkMpYB5sJAThXRJpKmNBRY7rtTTr6spuDURNuVRNcdVvEV2x",
  "key19": "xs8NuYUqLPfEKQGTCFPTMuF4bot98AmjhWU8vmG7cGk5bUammy8uPjGECBWmibyXMQM3EoYyLYwsjBiaCr76Xft",
  "key20": "4ZWR5nGTu66abKLZaAkasUcT7oXgcKuY8bNBB7injvZMsFTjAqaWAQbKVUCGDnEcCDQfefYXFskgCVGqKm4oPPfu",
  "key21": "4uuki1qCzNAq2mypWTn63Faqn7tcTipGuonj3EtbrtS9FuPJusfPrddDGExw9F7pUCFShRtjXCVXUHQChFJTytcb",
  "key22": "2sKf13Go6abjei6Ftgd4Ur1sPW8pAcRxGyvPFbMwszBMeDCKR1MX3sfpewpe3NK59GtgDiXnrPM1FAUw2M3iQ5gK",
  "key23": "5XnxMS7CHrDjgJQWwd7vyYCuKzZYF8gWAobot9yDDXucGvLeyeg3fcN2FSe1E6s3QuagZiUBrwYZLRPPYgJ6MCHv",
  "key24": "25WDecQYfNAon7LQGD78BKdDRgToGtD3L3KuF2wMmqWZgjc8gYFAGzmWM7CE446opn4xB3FqH5htwZfeR8jZgMAt",
  "key25": "4gzvFZQT5n9AgoeBqKBsEjtejeHEFLpMkko8ienXMv7oz5pfB9Ysf88bLEbWQA9btnTyDVf6ZDY8Z47We5Np2LSg",
  "key26": "5JeHas7f2fnZWT1P9WYxPcoHNPaJJpD4i2LMY1yLatir2LGWrWYNqvGBEJ8fDk1gTBoCM1qCADvM8zPMYNX7gJFq",
  "key27": "3W5UbCLgnaEcWzjceRTEDWjguDmR1L7mdwjSwkss2xZ2TbqutSyRSSSq638cjvb6145UpQeEQpVzMueaRPNDXuXz",
  "key28": "5BCxPp9X1Gm8qrNM39uSvbewEvrv64mdoB9dGnrKeZMPDEZc5Hthp2Na78qDEfsdu31HfLC6iHeeYYPFUcFqrZm7",
  "key29": "6EiZAWC7SCRTjU1WZqvKSmS1cNcad6LRTvhm87jEZbFG6pTc4zm2GyNw86xht77G6eBSw8QfKTrVneUF6UPC92A",
  "key30": "2UR5TQEX68rhkAd7qoRHDyZ2MtWHfcDVRoUdxS1GgZuGQvNB39FuuiSkbbb8VyWVL1rWRNsd1WGNNUagMUoWkS4o",
  "key31": "33WCNUvojo1opqaDpT8787qtH623o6ZNfMsoCyFNxA1Z1TaVQB5fNBQcvunZpbUmDhaUCk8ApFNvUdKuCyTqdYTB",
  "key32": "vjqpHZGpVQN1GCDvyMQ9Yd89s24J1PtzcFQGMzx6aWfZ5H2kkhAngJwgPrNjD5DY7cZjWZ6So5p42s6ZFpqDhND",
  "key33": "3gdycwcgP5z6jF5Ur4wtfSVfHsYDn3gohTcdhs5WBtEXd9vVgzCkk4Js3K7M2G6nc88zm35ysQBVnLxmPMhAaWqr"
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
