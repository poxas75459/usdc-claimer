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
    "47oEWL8nRxuUqWRZSo1pGWU5FeEB7pAWqYUPLvsRjDqn7UpYZVcMFWJiVSwqDgCmGBGiJBFi6WQ6jEGS9kkGN59L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKkp1HnW1mmC2NyMAAdfEAabAXFCYju4LDT88fD686aysu6dBYcqQoHFQamNgpSTmdSXF3Mruuw6BNRSVhDJt1D",
  "key1": "31rLira7ayH4UMjFyuMoj5MXCP6bHhEBoYQnKBbVNoJq2Uo3hDk8k13z9cscSYbJmiNu5DpF1r25a7ujWd4Xwftu",
  "key2": "5bSWMT2uBHYLBqjkk4xM4n2kCX2CKVG4P6XAiS2WXdVCzDfsHhfydTremToS8yRFwyMBsN84QfQnYi8LqVK2o4MC",
  "key3": "5WPCKPTji7wRG4biwLdkU4ipSffvcBVb4zSEFvWtPp8WP6ujaFWTmjfVaCKACdyZhbjrcQtPHiMK2URdt248gbM1",
  "key4": "2UtBAjQYYFrqAvfgxfA1GWXHfPQm3uWLg2HTobNULpowXRcRJrJsSgYqMceWgEx1YGzmbCQKPjwdEfHYhc8R3gsh",
  "key5": "5yTuoSEAhmLDxeqVccqj73N5X9EZAq4oocTypuwXmhNpmVXSz3Lv4gyALxNfctVLnUgvaxAv598DVEqAaf4Dn9VB",
  "key6": "3CfNECVoWd4SFKUd29MQPpLskj3jtPuuM6Jz8LhpJkfQkd9R56etDZcKEjoQVWBcvLLREoQyvsnn4vbTpiKFBMci",
  "key7": "4tN6VwWnuM1mFgknrLHzcnGYc9Aa6Gu1TWWEYWNxgyX37X5KQLkzMgEFschrnYbZaL1abZqQMn9yjVZwdR5HP6Sa",
  "key8": "2MMW7UpNgwfPTiKcWMYs9S3Rb7iZbkpribVHeNEkbyo12zKZmBMaCiGi7hriguAZCxaiTnXydJtrdZvZn3AGswkq",
  "key9": "3eUKLE5rkNsj25HxLuvXRLboXPxgGmX8VBipEr5ahhA2CZf4iuMw6dfAhUuR7YHC2uqoWb9rnauPbw4Kr2Yp1TeU",
  "key10": "43dEzGdGSAWcmodseb5HAwYeAGdfWeen2uEkgFQVTWwxwf2CctfBNNe3bZLYHrphPLYncU7UJDHQgQWSZ9vJA7SA",
  "key11": "63sVA7pLEMN5kQkK9xNhWwSYyXTq2Fby8Hg5jEgcGDxNRqhZAJ91TusuVvQ3LwQt8F61aNbsopDwfqbFMmeLDRGR",
  "key12": "2y2sDrxu592Wbx5gJSQ5FRF9a5KuuGsnhoGPL85493rjd982BpmiLLhc3qQAikto8uAm4w1j3cNj5LksG6GrY2s8",
  "key13": "2FREmxbmENQUtZZvonMwYToJJHKvpWVHPRbpEw9rwCPLMqYZgHcasmJ7Zre77yAT9PUb5iX2GAgSweV6RX3UQoqK",
  "key14": "2TxQmw15j65kcJPnAGAVjFi68aYYzmG6aViWMpnBY2wrKTzF3F93TzCPxr6CwnRTPVykpTmc7LM2MxEyPUha6z89",
  "key15": "4NoT4EbXPVmQX5aw1gjvztkcWfrjyDwy2gMWHLuN2ds8k61nrxBvWzvF1KabaYQHRU4jTwPPbsjiHSofFAr5igRL",
  "key16": "Az9GFwX5yo687n8QsK82U8BpAxzuqvq2W1XPczizuwybL6AVt4Z5SckzPhbYxw2RmLVPw75SgsqtSXKpXjUYsGa",
  "key17": "21ZBi7dpnqMATpsJZAmmVScVTSr4TmXthexNWXoJqszFaZwDqD7P8s7ZRDvf3HfodZhmhe93ptKWwziWrsvqwnx9",
  "key18": "3TY6ivr4KCwF2gwdWDZgAFZHWrfpq3idoNHYhNwGQpA9fFczGAPxBCHGfDvwsgmnrVyz262gsYYbCJo6gyvHhrQ2",
  "key19": "3MnzjgWmrRw5D1w5h8BSCDbBZK3d6VNPDrCKVxSEEGLGtiegiQvbwV5hatr1LJLydVCKWQi63rDdcVzwkoisxyXe",
  "key20": "FSwSD3sGnbKGU1max4PRbJAZ9FLwcLVu3oTBVhffdPZpAtVUDVnryUe8YKv9UjjKMc8RxVFNB2spLu6h3fc3m92",
  "key21": "iYJet4Y5c2HJNdY5gvmG7gLuxcwcgZxYUuVv9LoT3PP3coWWw1GE7NvsU5njvzHBBpaqYNam3cLv31pZ25XryJL",
  "key22": "F3MEEHpjYwryAKYMNaeLSAzZyAK7hchw5QvxeBtDqJjeLqjeKHRWsbrkwZmFeawSBQBDuzMAVuzWT3hquJM9EmT",
  "key23": "5N9feKQGocj28W63DLf4PB5HYKaDQUnQM3BM5ZB8qfQhWcVHBBr6c9stgQtmSbjrsZCGzXWx9SXcV3yGDkFSpa7y",
  "key24": "Hs3dpPQKdaCgbEFJh3RiYvSZj5kUm1v1Cp5ho7icTVpJvwfDim7h9yLYxbiryZyi2yJSUBHbmC6wD9dDzDtLbie",
  "key25": "3ncN55rXhokkDhbfQSt7gJWvZ2pzfujShUQTzmMaYtkE457LNEtC8BoCVYv3Tx6HDBm3uzhZxz5nbo18onaq2bJw",
  "key26": "iXHM2FAw3vc7wenzYevnRsboebGzBS6gA7YEwnLVgJHLmZ4EdEQJtYRpeg3n6UF4KfW7wfGFZjvTHR6EvEug3Qg",
  "key27": "46RYr7iZ9xo8ni1yC81GREoeATfXASAsegYT5YRNHAnBBychR1WHa6Es1QQh9dDNX7mbH5VTY4DQvr3BWJvJBQuc",
  "key28": "5SjonAGjyjbCJbMgh3d9coikxQe4Bf1nzWzyBCgqxTPkhEXxdxkvRijpp2GvWoDhFKyR19mrEkNXxCgDry41F9do",
  "key29": "RQScyZ67114wYP37RfY6jMn3mkbjDdgkmVemUesfVzQh5PYwAUdPkwsCEkmT6HMykAKCu56P4Z6tyhH2Eqd3siS",
  "key30": "4z6mKXKrZh77y9NvrPkRRthPhk6Tan4MUVaSLVoakkXaK6ukykGzvnRdjAtcDYCLpdokmRTs9kXRHZjTnubQATCX",
  "key31": "4boRzhQ4y7h3esntZsxTau9va2CQzUPxkz8MWCPFerZPXeGwwfa8WgtivuwGaS2jjvEudCGcNzRfJDAJSDiDABPS",
  "key32": "4Y1aaBe3F7uaaxNNrRyShqg2oQv47eqduQGkCWeK7mNrHb7h57Ksti1LxzAXpbaptmUyKp6JurtKz9VgzEkv1dtd",
  "key33": "DgdSi9uG7UNTjqUAcsGk2DLchvJuRX1xVBagkn4QfmndaQ5pWJfCwAdmb6tPVLkcKX3ThVXEHepGU1m9AP2dSHH"
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
