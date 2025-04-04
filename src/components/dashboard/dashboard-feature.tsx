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
    "5pcwQAgWh3rDM11kifNA4z2eqDTGtfmWkEwe6KgTcWgcTCQXBiWvmYXnT9ntDPvjmEJRj5rngbRrLQ5hRX8vDjn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B34Gq3oS5NdcGUfu9qFtTGRmQuK1V6GB1qLFPsDv8sdG5MBDWYGfeGjrckQ1UUPNHG6MM5W8A8ML36Y9X5WUUjR",
  "key1": "3oPMDFKwrjsATfyFRkScLtr4YBMPimsuumhTqR6zfP6Nr1PddfAhFq8iUPDFS4x9y2xcwfoBapq3aGriSAaxCeAo",
  "key2": "5S9s8u62tyc7S2SyTfHVG1XjL2RMu5Xx6i7qB8gKwJWDgKev2k6eJBm8FN64X2ozdhSr7d77pAUoNCyqLocGx1Wa",
  "key3": "ckDfxsK9k5c3GiVzDHrRTrE4wyZCXQgYnoBYEcRtQfgpBKYL4crMYFPACcyroVnvsYUmQHCMQr5oPd9rDkxbHnv",
  "key4": "54gDG7EJzrSNkL99X1GaMiMGSHGowZUKtVXRr4SRPGFEcbnHXhW8sY9nfxmncFY4r2A3gqmguX4L1MMWUhEWoSy8",
  "key5": "o8fWf8zjpL9JD1t1o2GfQ8K46X2aDdvY3AxfhohL5VdeCNud4cqKro4NcLSjiN6PWQKWn3gn23T2PSN3LbaFvdv",
  "key6": "4hLJQZwFrzcSootRJubdNQAQdQqBHyLeuufK7s6pHeJp25HKVnExzLGBSpbeZhfrNw7581EhgG2qYQCKz9bKtxbo",
  "key7": "22ATmdvzTmVSUAsMkiown572tQ4rnEWnizDhbq6icVEvHdXAS6dJGmArS9JCdtkdu9PNuKqG7dVdqipVoRV7Sm84",
  "key8": "2YsfxXnJxwTcXmKcZ7ir1eDvYLrCiWK4PFyihgorLDXPivjYTwkPfRvZwSWvN9bm5o7UEwVmj4ucsn8PBsV6jmE1",
  "key9": "61Uu6J9TjtxiCMGyNEbFRSUiekdnxnPCmzjizTjgAZC6mazD7qQMPFebtN53njKq5Ai8xFV3GC2H24bBqh34vebw",
  "key10": "4dKamWcHDF8rMJYwoKNXaD8BNhEWm6BGUVDDkZ4jtk6mEoqfHGqd3GDc4b7rZKTZFCPSfcLgK5MAZNFXEwUJ9ZXw",
  "key11": "2jNvjugM8YsWv2K8LpdM6Gjonfeushv9jihyXcxCxaJo9fkNLAHTL3iQN4A7HwFgMXmBMmXabXkzpuSH1N9sfHFV",
  "key12": "4SPndCTKFgfwr3x4Tyb7cKefGbfgbe6cRRynfxWU4aesYWzFzaqVDt9qyrrrqXzCedCPVxrzePAu19HDLavMae1",
  "key13": "5bG1NV2WhVadQkbg2jVBnJF6qtXwGcuWUFMbGFMHQYnXL2sWEUFfaXS281a7PE93RavzVDrKjgc5sSGaJ3s1Az3z",
  "key14": "66pgLKhXgfcuZ973GC8xs7RJPLUDGyAQHAxMU4YATFa331BocbZQ82DzzAeAryTHujm5ZVCsGfsNDqmgvRvL3S3J",
  "key15": "rmRV8zZtv3B2taQWSawGet5oG57S6gDCgSauDYW8HaVwPWFpFBa1VpdbwGSqguFU7M1mTmnEZmtWREkaczAgwDq",
  "key16": "7CtSbSRn6BpxvDq7pXFJHsTcRK5eFNW7B65EjEAaje7XFc4k7qr8hGc645umX1utSjN39nca7BFM9sxU97TWa81",
  "key17": "hanuajWBrKQdzPDxhhKiMetHrpAoZTKkafSYbmiA6hSAYjVxP5PzESmjAg4s1gZ6Yge5GBwo39qe8fyRZvvS6fT",
  "key18": "dzC4oKV4osTSiP96AcyHxaYJvz7J7NLfYWyDbtsikBffktn7jFQhEGK8YELgWkSU1uYNRpAnP6o37bmKK8UiPZW",
  "key19": "5Sr3xCiLq82wLoLAF2DYge4PYJRpve4HYoWLMHuvCZ7M2tyTkRTTRw2rWhPfz6j4d5T3duPfJzcPVgrCzMiMPcb2",
  "key20": "5gZhpXAskSVouMvmX5s4PMTWCcCx7skt7aBwj92FX9bPb6he1rEnXNq5hUWBgDn2hxhgHwi1dcmccg2jUVnNUwqd",
  "key21": "2nuMgpx7aYhUkPKbKTHd61ziKDtpYWtQcCB4a8A7itCVryEquZJeF5165wWsDLRxxL7B3qMWns6pPYNm71RoTeJ1",
  "key22": "3ihDu2o5umrLBD75qr8mRBsy5Yx1F8zAUrzxr1ggDZkx9zzCmnRPwhGiGtC7uXrcNyuysR5TUXuFhMVdRqDu7U7E",
  "key23": "4CGcBQQomwkEwz4TwFrbQS3WC4JZDCfofU1qCVobLReQbENxuBwvv74QVJYWweZhCfTZVgM6J9GvvTbi7q8AJUoF",
  "key24": "4WiFERiqmJMoJ44jDxyxPM2tuh71PBSKqYBS8YAL8qv27cTFVkpffLHHYr1NCfqMSvngvWV1tVXGH63pESoCdjrB",
  "key25": "gBMutvipdoKkkWqypjf4tXehdmVB9MKrrw1MzPcPYGF7XrYGbCfXWResVmNV3CyeM8mT17Z3XbfwWv6iZFGip1T",
  "key26": "4SmHzuCBnoLQabNLeT3SsLqjWCZVox4wsSLQeDcuNvAS4XMCxxRjiFNdn3dA2Vzjp1eGuLPD26yeMPLeU2R1PoBB",
  "key27": "56UxfrHdUZ8Cv6jEYhWQomrZzYfJ4rGUE2y9avSBsP1EvHSHVniUL7xx6HeVhdqEXibkQMGBxRkSQ1KsYfpFp5FR",
  "key28": "4hjatTWKaVAqN56e8WPyDKc9b5UYm4Dey2a3S9XECZs5SzE2gttdjdpC5Km7oSGd8JRAsYUqmRoCTnMMEFv9Fm2D",
  "key29": "3p39sdnF5GatPTybeW1AFBgwo85H5qzHzJsXK1gLnCqTCvzyEjUPxvFdo31V7EqVqri6L2xGNMwKA34gJGLSGRHP",
  "key30": "5rA8vDeZTiXYrzgvsg395uMGakDfeHdLpDtwDCQk7ExyvKQfS2nfC9KuGCnfPR5RzThr5RUbzHNCPSvjtuzsnLHC",
  "key31": "5iZYXGuneZcRvsYjqdnEcCNbiAxbCqUvSoLkcFsPtELMUihJH8SPUC4adEWvXY8QCokjk1aNkA9fCrNb8Wp1XfJY",
  "key32": "K5R8YesCbsmkm6drqR9E6EfUAvBjWaQY2DZqT1f3qzyM6ZGdAxVbShk7jnSbpjVNMERgzmJrzaoF1h4BKbv4jo6",
  "key33": "3Zfbp7zo3yc4PLku26D4sf7phXk2B3aVjpADBDwrgiovfJ7AR91viodHL8t7VAdLg9PZ6RQ3XANxQzTemQXCb2Mf",
  "key34": "27zgEMoLQRuvZriAcD1Jha2Xk17scMTwyRD6bYoZPnVhhBbyQnBTjCpT9tFBX4VVutQ4JEq36nZX4EJWgxvDSxRg",
  "key35": "4wXhFBPcS4TPsn8uHAeYfidwQGqgHjzZNfTmJQjZJXDJDgZm2JkcMc3tkFkhxZWSEZGsmVbN48WrJK1oeHpYqeqZ",
  "key36": "veT9VXdEL18moUssHKSktJCcSYaP9J3XmW2sSyzy6duhC865eoZuaA1nmwXN6tHCr9jiAcBJDjCekpgxZfEtits",
  "key37": "3CoZkvFeZ7XNPe7CcscEiYnsqUT2VLuRk1BkAWhoBY11iGHyR6H56B1nyDdGe6LS33jwXbAoWjEbGaTtSEDYuoiQ",
  "key38": "43pteckairXZUM6VF4Y1p8QjpD614P2WFVk3n4uL4XyDMc7AKGwt28AkvTsgH1K8KFAVW2xG8WZgUhcRF8i1H1c7"
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
