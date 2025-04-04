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
    "22doxhtw4sw1Mp5BauM6MgUrwaK6vtt9XNsKwFd3262PPnZDxGggKCorWvnSrZsAKc2Jyp8GPoQ6zz1Cuz3xRA57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tG8Sru6fk3kPWTqrtz2MWvzM293rbWm138yJ4GuPgJFkbihmbh99WyCMMCo2UHtG6a9Bd8AdkunjPfgrac9NB5T",
  "key1": "5RBaxxpvdDiMgjmy6fQaH4XwKia7jDqQXzPF8AGYZvEAQGNKBQ5nvVPP9wJSFGCkexW2sYkJC6DUNhWq6gkLtdjj",
  "key2": "5mnvnD3AfKBwuEQPSBDwwgij2KztaDk5TMpoxSbZnjgNjDkr337cKa6ZT43Cq9HZBAxDeJ8HucLwCDm9SunuE96Q",
  "key3": "2METNwqnmyCqLTPXTXc4HVXEn5rG8Xpcmefej8V4W8M7z89ArRpgN5bpBmd9Gzx7LJhrnZnXP6gfFLFk9Vmev7mL",
  "key4": "4Tp9dXb8hc6cKvuz7GjyCgQPx6vQm1BiWQsTN8rkkkWmY5jQd5UEciuwif9ABRUdkzE9PVMrwtsuCVNTqSYSTeaS",
  "key5": "3Zx4PiHmS6LMcY8iEDvEa9iirX2NBTmYYmReiKi4t8pTcE4J8bhRU6NBfFZXhNvLbAp5cbAcExRwC7iSDMwywvPP",
  "key6": "5Uw57uzyNQ3JEfNpj2xz7maXXudLEHJKUNm1gZowgJDzeffCGsqJRSkf8A6hfvBAijgGr6srwcz8gkHjXnbDzuAb",
  "key7": "5YF8Xy4d4jve6CXKhUjymqdk2hYwNkVdayN1vi7ZTDNk2KKEunCWP4SPdAAN6yVyXkApEDDMb5L9uWBn82rQaB7m",
  "key8": "3WAV6e44bBKH9Y7darcXdzJsJPhR1k99KgKAKGPn8okvK2iKFwxn5pcE9FXEncCuPTDH8mv43EAsPeY3CSQLcRRH",
  "key9": "325hceXWnXRGwW6yVhSiteBv4gSJndE8ZdncDT9yGe5GbCYmEfYjXVtbW6UaBWGd1AFgE9RrdFLKgnQy6pHyZJsJ",
  "key10": "4VoiEqLWoeEHwZ94F48HWyWghW9jM8YxqEf3DQWnddhTVRfkhEwt3iCbXBUaLCzwhJYmaVSPmfFmWkjTLFiqYYWZ",
  "key11": "3xRgY4TMBvbTMKfndkKHs9UTXq9QMKS6vCeN9i7qWUWY9Mo9jxKXYKh2Y7s3DNyTkkroxWVWecCHjY2nFKFLSERz",
  "key12": "5Y9KcNg2ZZWX2DiuPfpbBY7C6HnAxKqkicY1UZQjMLEVauSVEQU8YXT95HLmvvmdpFqocdxushj2n7cpwNtAu1Y7",
  "key13": "4FtfaUAx1JDwTYyzwe9Ei7i4uXbpDbwS5Q4Gqjdd6j91qcMZFY56QnsNQZbCkkxrVHWx3bmvePcesS9GNrxrGrgA",
  "key14": "4mfH5JQS9ma6ZCDMTsuTzygBZs7xT9k8KFcD5qD3ddxANwD9WQnXvXPHMfxzzdB4rAb5MxYTQJDNYdDkYy8BpQN4",
  "key15": "4zdgAFfCTyHd4QLHvjfCf8wJXrudHJceHbp7CfHKgAArzLdrVS9Fi6g8BgjuKGRUAhsGnWwdqZkQeLUYC5NnoCth",
  "key16": "3WCPHATPPWTsY7jeepCT5MToj8v86SYkKB3PhAo1rMpFdnur9tLg2cy7eJaajaP4vYKWPgnifsCsK6M49yxJCugp",
  "key17": "5XzZmswGfaE5ZuvWUcdVGKXz5xq7UVtEJuDbzVk3u6vbQy6t5Nkd9JxCd6SdZBBfvZtHvbLVa4F3JwVKFggkQHZs",
  "key18": "3ecQsnUv24mwGYg9c3ukg61R9E5VGXAVYCUXGxgFv1LCaJBcoeodG6Zn5ZQKN7zTdaTdcECYyHcNZQoHU73sRvbw",
  "key19": "4yxrranM2LPToDDWSz2JuT3o1rzPWyheQ9fV8eKVJmuz86Nc8kTXiEEhahbfFQB6sdDUFxEeCai39Qy9zUxRWo8P",
  "key20": "3wAXbPeY46v6LEwpLNzyksvReNDbuobVq6eu1CkkFGMTtJ2sFzE4QDQ3aA2wUmWVwoV6BMkaKekytuHwxQE3sUpa",
  "key21": "28M5tNB13M8D3vk3a7qK5Ry2dt6TNDHFjhqY9hyfWJNw1CuF7ANufMTUQDMtyGaQtSPwjtiwT66CmRuzTy8hExNW",
  "key22": "2YM9aQhbQJPie8oRHbdkbHwsaTKdP6gbATvRBLD5d3JobKY5guQGjNkx9nymRFXQPZTgskP524dhqZDmJyNTddDa",
  "key23": "3KtpqM5qSoghBKV8JesKkLir2eGLUzygNQTmNK6BfuEqUCxfjKiTwBjVAKGWZ8oUbd5xKGpvV5GSgUGwxwtyTkfe",
  "key24": "3msPwxqVN86UfvYcuwm13Md7ZrKibs4z6bPPgjaGWHSDAVj7m1bMnCuPruRrTT2qmQjmo2tfwvCqQSGVyGg4vKrz",
  "key25": "3XTQjxgPX1DZyQeC7yaoqL5MBN22Ztsu8GvhSnKdiNw315Rbzo2qwD6f9w5B5pZ6mXmWB3TkHf7Z9oQEpdsfJmXW",
  "key26": "2K17rgu79v7GGmgin8jhD9kjvEGysmkctigio3YGLdAstyTq36eSEsoZJRqdtVz8XKTtD6G28pVNHFoGrti6upHy",
  "key27": "4MELWa4C1PL36ZKw6r56kmJpfwfqYRGVLyxQUHX5C46KP9AqpKDNwSK9tWLNwkairShVMwdmg4DNrYh4FBTUAtqd",
  "key28": "3iYMHDiarx89TicurjHDrjbwAKXXXVL7TbzbfosUsYRgvJTqQJ8v2qbVmxkGnZxSeh32sxQVSNpiH7snWRAijBKX",
  "key29": "4x6YTqaaD6JCftRwagoGPsw95bMJP81kYC1mGt8rGvidV27uY7KscoESAggBuk2WfXtUbWZoDUQzBSxFA7ymBcBc",
  "key30": "55vPNAPPHyXgxhhPviB5GLXZtqMCNC4NbjQyoDZ8d8pTn2RtwuJrACozVaAA3jtKhskVYdHZJ1DdZfh6m4bBqo5A",
  "key31": "6kTQDVt3158zcqD7YpbFVNpHv4dFzyiy4CyV8YfMLiowMAuT1mg1GrCMztcxpCvqNsNt95u1mHTc7WZ3SfKjTw7"
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
