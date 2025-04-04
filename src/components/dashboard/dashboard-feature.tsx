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
    "45XNSvdZ7NdiPnJZnUJeixNkVfWRojW4ZBGyTBLGQLc4kTS2QYxabgDV7yaKZEqBSHwBWE8qZP3CAQi4enLawEQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GeER1z18CwGBXWUn9M1zKo2xo8xAr1ZSiUKBpmLBu9TysJcRuzCH8PhGUTw2do7r1v3yVnG5mSJ2Bd3dTHKNif9",
  "key1": "3yg5HxuXXeuwS19wECSNuVS4t6fhSuriy7D84otgJn9F1xreywBvadh5K4Qre4y7gz6M4FCzF1J8JAfA138fydG7",
  "key2": "4LPrGJDawou25pWz6Eino71je9tWEd4sUJ9a8vH4UyftLEurGz67DfHqDWKkwN79sYcbCVbe6di64nUpdFGTZT6b",
  "key3": "38Z38FmhRrdQpPzmdafAkwTKD1QJd7BiCmM22XtGhKdkGTuZVgECr5SEj1uyXdM12kj9kNYm2njFkox4rnyyN4tW",
  "key4": "31t3tBsoFyANKWYjmqDEpgaKknQmea53zjGbhRD7iyYDwVv6eqArcs2U5qjj1b4qFeSP2ZyAvhV7Gg9jKiU4TJQH",
  "key5": "4HxK8JNJupZCGiayYLNfbgDeUNaQ7e4ZNXjQ92sukxSbMDvNyA6fnvVwKq5y2pVjwoyWRubo8UqFdzuoFJkfxBpj",
  "key6": "pVkgxJt5tAdXtgLuoSgjJtNogUaq4CYDT6dnFVGK6iCjeoQMT1iVooBajXZwRVSDErye2a2FgYP8r3tLR99FkLD",
  "key7": "57QAf9Aydz4hT9q8o7LUjZ3wNtYzmsdxuHSSBkmyZzHRKTktsQTPr6jtF7NxoxUrGvZ6JQgjZ3ZXnnA6eHnaVLBs",
  "key8": "3PVy9WAfAmDUC127uZ2RxNZgyD3RU7sn7RZJTAGWcTTT6M2Ynh7ZCVGcJmyyE8RXbBd7vEJMk5MxFcKDLrdYa94L",
  "key9": "32XScp6UW8D93D4NxKAgHWzJWSjFxe4CFeUVhbhrPYE7g6VLXuATQZwP5JBPArGu439ZpBJ89TGnrTmcP5zEeHeW",
  "key10": "4hqnADVRDpFMVopTG4RgSyVZCUXHPgHm42jJcukb4DNsJJbzSf1Rrfr9Hn144KGnJNCcFAZFusZxKLsuiDJQD9pS",
  "key11": "3nLHddEGoNUarx4ePTancohNYL1Tj3psFzJfhJvWSU1raMmgjx6G9WTWegWDyENLQqsjSmr6XG2z6nBD4kyQYjVu",
  "key12": "3bhUk4tufHwtv3XovGuU4pEHnMDNyFJR2f5tq8vbfhYfSWbqAm3U5iJf2EAiSkL3k5zYUj9h37JZYaa57mSb1H7u",
  "key13": "2TX9gHGYncpuPpQHkiWynDejkyZyPsUmncpiscRCCdUj6iBbUUkzSGsaqkC1gVtE1Fw3QB3GUJ2iPHeUxnj7ZSEg",
  "key14": "3b2FueibHX8WHJ3TqVDCzPf3JXezVVELMpJhQL16MFsaV9bLJ8jod5stVmwn2Q7t43wC29frL5F1M9VUu3Xa2usD",
  "key15": "38HpWAaWLXm5jgjZrnKKoPpqrrzc1sPwBudM8syiYQ4p8VbTbA4AUftcz7Gfrf7D7uw22nBptuR5PByYxc5ALpmW",
  "key16": "2DeGpKX8hxawwVfjhSqtHCW7sqUoUHFrFX5kbYCLaX4B9sGHYUwjk346ftGqUhxJmSVuFRsKiEhYoi54eGrzGbC8",
  "key17": "5yLvBC7JAMpL7x59gShX3XZzgfogmQW4bmBb1ZCt6fdzBZD8d1Q8W8P1RJdt2Zec6Q9TwRYgVA1oUR16eVimSsLH",
  "key18": "4joJwmiMYq1P2TWVjYjVQuLqpPro3Jq4UYXnsyCuZxmhMCZ1eF8CVew8d7xYz59bPtb85MpDNX6ChP8gP8N81yj7",
  "key19": "3ou7BLZcftLrDFPn1Q4o4iVTQeKPaAMtPsY2nb6VGCAjNQxs9zniAuNGc6YVh5oUvVtJj5e1kPmPuyZfti3JMeud",
  "key20": "4zp1hDxuioSktZzNHEhLDSWeWjUd2ipo9WH5tc3cvkQ93jipQU3VjFm8TcbPjtf6x6ujC9YoFXCnPyrhj6ugd3Ae",
  "key21": "5Kp7JjR3X3hzoaAC2mw52jTJqk1RcXddeN4Z422H8paM4Q1fSYC2hXuV4ad1DX3u4CRLyYRrP9xwidnS8rFDf1pK",
  "key22": "5WDXaRqDbSaTFtwLmqWLUcGDFEqUDkzHUxM6S9PpszH9whP3LyXymvtRoHDDWR6U5fDTtbTZEKZ8F27XNxHcev4q",
  "key23": "4kA7B6px5KBKJMzbZ6MELbKf1QStWDCCkCub11HmwdEhmjCNo53QnVuxoeRHKwiZqQ6WSF7gex3GprwCSNxqUkjF",
  "key24": "4NfWVR2z7hBfGUQmekSYVQdzdbagTnYg9Ujk9FxWoEADG3QTi486sJKeK3Nrphq9MUnREwcQkGYgsfSbwJXDVKLx",
  "key25": "mHzpKaybSKKGaYphxorg7ZDTGH5C7WAE53MPoRhmu4LaGXUa5UFLAoYMGBEdodz4hE6nzzGiKbatjFNZQ9EU8Ex",
  "key26": "37bpDrro3xjbkDKLxtCXCYoVPTaWa4aNsDPGCQgUyw7LC2CcqKFSKyCf7YkqJPrRq6sbjMzuVCzoCUbuQK2XzY1u",
  "key27": "2fUPWaoXAfQzQNUC6KCfkKjq12vqP3Ykb7TeGYqcY3J6LDp2jrmRsV1D2eCzD7PujZHSpmU2PhD8XnwWwb9E886y",
  "key28": "24JxeFBXS33nBaDf3WW49ZLDJshRevjZd4Q4yv6htNaMYC9CoG3R1rdcnqrM1EiMyt1QYrLfnFNaDWQWMT6AVXS9",
  "key29": "3bpW7rwQpmfjbyukPpEVRKiu7QN3h1am3QUnm2naz6uoa1YSnxBDtDsueaedUT3EG5YLCXQ2Zfy3T2xKnP2idg8G",
  "key30": "Tit4GPG4zUJ1dw6bbFYpMJMPAvQjZFfMpmxSVgKqtmneBtvbxDDjMuMsTUBbjExCaUwTZrcueE5ZrFxUXVCmWfk",
  "key31": "5fiWggnP3xqYahRV4FVivrSdyoaWffhrunuzgLQFEMekog3K47yPh6nxfw9CgDbJ9YPMPBRMfptyBtvZY9N3hmgD",
  "key32": "5yMnMWkNrgiqYcP5XUfEJCXUduxjcVzmnmv8DNC6dyKXccHiRXk25fdBUKx6AHdPdtPrGCDAm1KGWeKxnkk44tyv",
  "key33": "5Kki9M7RehPCo4vfdnPAdUcYbJML9FanZAJQwMTwy3zKtNxfeZHWHFMjCE2GPbXmt2Q7gP5YMzyTk8sSDkn7V42Z",
  "key34": "2N34Y7myiEdDUHaVKckiNudm4GmFnVL9uyBQXEVkbEWWBq9EUcLwrRFea3oyvipDJQt7CEvPPRyyoSz5osEgSfoU",
  "key35": "3J57mza4bfeXa71m5oEBXKm4HERwrtEX3u5Ss1k5Wem4iL72698zV7TQzGNvMxg3yB4wqQdm3meZGZE5KrPTSL2A",
  "key36": "125Cxi86V2XuYQ1Ad28sdjizEQJyfyWsWFZVz4wE9Z1dnjVUxJ7sJM8GsG4uFjWKxRNrQ4QiaYkkrK6UAdVKRjNy",
  "key37": "28bqC8TFpHyn4BQZc5BvGeCDDiRRKKy5UJDLQB9M6otcc6mdarW8qPb8d4UqWHFCLFXzdTyukagaQETKeBr3cFzw",
  "key38": "3kHzKCxpo3q2EuQD9V21KnCqCyNdvo6Tv7hsrRdgEqPiDQicN21F2s842MeYPCSnCanXbjYcactvK9BDx7kAshyG",
  "key39": "3iMFmw7gai8VyhZbSSnGBD735nbiE6Rf7XiCiG1yP6aXPM2yrGh1VyXAvCkaFpEmjvP8SKSwociGYG4uuy1aSzLm"
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
