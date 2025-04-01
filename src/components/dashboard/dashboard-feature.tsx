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
    "2WGB44UzFCvZrno7whdXQiedP5FmKGetJyYvZxr7VfNeeZ83nvLjRWmmfi22AuufxPuNAu1YB8gqQkypjKVUeBzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RtGqdQF91nsz4NeEvP5qTqVk7CtG22cEzVEfXqBvjnYvyaHJxpNETbw9mT7JECeDm2ex1wbSPoEZ8RzJk3dDv3G",
  "key1": "5UL32kp2BMWa8JFaUtCLf3iyv76jXaa6ebxui1WJHKPs9GrymuJeKfQC2WovYDSBqRzbPQHpfLg8mfHkFHMm4GyC",
  "key2": "5mQ2fFCp1x6MG9dKsPPBzFCqFLMDUzKPr3FwuWcpZbScTF529efJqix1vVpmdpkUrGzrGXyjJQZ3wKw5AURxKaWS",
  "key3": "36niY59ESZxUzKJFbESnyJRfsXghGNijRgvEwyfbkaeTGt3e5mpED7LmrYJ9G2TGjWYdTnRk2GaA5qw2sUPWA3Uf",
  "key4": "8Cf9aGW5oJPWJTd5LLgT2WEHXcYCW3xggG5Vm2hao6PnVoc6i2rU3oEw6t32RmGgJbivzyr19saHqTjporfyjR6",
  "key5": "56FPzE7rema5GUs4GkvRyfFsG5oDkP6A699gn3TX2XbXQ3hywR42DDaNSnMPqTuiaxEZneNsAouPMFg28TpgSbsj",
  "key6": "4ESiXJ5WPZ6UUEW8fZeTKNUdumEhSNEkZpF2d88oKEYsEX8u2TfmdmGnD1JcgUSg1gVKYQaoE6QTonqNe9DAdBAy",
  "key7": "47HqaJEYrKUhz4tLkMRq1AtYBBGVabq5pDFYEQvnpUHMrSU1zKDEL5NL5B2oC4ywmw9whWXvmqyjy5RBUAUVBPeq",
  "key8": "awafj52SsCPX1FqbEAujBF4d2TQQGtpRBgJUrieG4Ei7joxdFysDssZxVrhBLyaKYMBmy1s2fiKtcTh8srPsQDE",
  "key9": "4JMAEQCoDSppsbGqxmJsfbvYQpK5Wh1JVzu5whEeWDH8xJiKXBEUgF1kDXDrhU2u9Uxaepdg6RJYamxfSKApdXGE",
  "key10": "5j1sVZnc7y54qLdFPTbDctyERWTxT6P4aMAXyWt5FcTLEqzvmcAr7fFCFGJWQe25mPyS9EW4BxD6695waV9BD79b",
  "key11": "5TSoxfNkenHfgdUw56chmhn1UBmqA6qhit18otYVaBphfF2idHrEYuzKsVrXGgzDSYWwFqjKgnFMFMFGsVApYnL",
  "key12": "HBi46e1YbjdiYjTDjLGkqBcaYoWwup5n97RcFwrM4vmAAuc3jeDTM8GGf2dXdNJGyeh12DDALgzGCfYzMi77NmL",
  "key13": "3G5q6d5HMj8Pdjq2Amv2c29BwpT4CWRX4HZaeHed52gJsXCPrcExDgBts27arA8kGncaSYbk3a1FeGj7gkjLLhmL",
  "key14": "5DGxTWCwAkBGyALXZkEnx1txTGUTH3h1B99q8jZWFp54fyXnGD5Z21gRuLP6gGVUiTwgJdCviSEAQnvwFRsXzYch",
  "key15": "4eS7xf4n7PT6Z2S6E3vTUbkn3CFtmApygbEDj5Lk32TP5yw5SaHJCEQncmrNtzgwkzWQ4Vnwwp3zVsMwaZdjFxrX",
  "key16": "3mQGz8Sn1upA4YXTYkx2rw8GrvUv4VWjUXreuWpCDyq1beYcEwiUMpMnawuuwd4K4dhzBWV895e8gy4WVpxzWEZZ",
  "key17": "36DuP9jsH2hvKnHzK6Jx5MYuAaB4XC3VnRhPLYuVb2CocwZRF1r79zCwE51CcRJMC5AbhyJXjxZR2eJ9bRFgfDLS",
  "key18": "4e6z5ds3xEepCSM77q96tDqt51zMuCJg5ev1rYqXGkoV9pgqv16tBGUqgNsCtg6Ubdf23Jxhp47WKxpkTM39MZ16",
  "key19": "2ncqbxofXnKyPPYsBBo4uTHG3awSVLiLF126nviGoSrSgceEvt6kBbZXCuGXF4Ax6LVooNZkRobPR24Qkd7DapZ7",
  "key20": "5rUsMUhzA39CZGpD3j8P2E969AAb2Ro6TnCRwGDUtTHBJj2HCixvmw2c3DDsZyMce2Cvi4YqASH18jZcWGc6tgMq",
  "key21": "2WRmp49gUUY6jJ9m2JDmSbcGSYC1F2QjQqBVks87KL9G2VaAJbMk7mgpJy8w3oaK2RJn8bSExLfzzxUsmLiAn9v",
  "key22": "4RweyS76zrmeRXXMQH9NMH83SRuYypVJx6UCyPdEKfrqeCy5LK1kZecrbHEARgA3eXA82Wyo5HGhB5NcixdG29aN",
  "key23": "3UEmMzqteNd1uEm7BUNZg5EnfSVMQBwUc1YbmvyouPtugEdFvdq3KqhRxogxgzR32HVyC2WjtsZY1Wn5FBq53k7L",
  "key24": "3DBpnpM1GZYHc114hCN8UWx1ew27ozzAfyabfdkWYoC4LHxTY3W15BKQ9YqcZMPVx327X6M542VHR3JrjUNu32xY",
  "key25": "2nk4M6VemPTgbkpLuNtccB7FkD72DYrV9o6HV5C5Jqcx5VJyytrChjiCUEDrtbZpB9bKQ9Yr8hKVx3j1FAiwnMCM",
  "key26": "4bJJUDQicz8msMtSpkVyu9NTgxM5cMq86Lz19F1rShx6eQirQzvkg3oN53iHSUFVFubQuhD1FqD6XKY4aSxAYfro",
  "key27": "4n25Fipky1kYum5aJfQ8yVGthYr9QGjWTw3oVvDLKRankt6EPetXQhbYqjPziZWT322jy6NdCWm2qMc53TzSk2mo",
  "key28": "48JgGDY4BM6wDUBA3h1qgFEJdaJPzxuShUb1bvdKAMRzoUohAUDXzBHKRwrNwdTBNETkknt9p5h7JDd8at8Tti9",
  "key29": "49gFf3XPnZkYtetkwwyYAfq8ARCLU5ePxneNLV7BXtQwREhfiwYg7g2TgrxCnx2biTczqNRgnA7fCyTxfreUwSWY",
  "key30": "hat6R9h2cMM52JoGzV69Rg6QhiL2Nf8bkprLmHktoMWxc5ZescdKvWmDqd1x7wRnmidHfC3CMLdxbmKDYYieaZW",
  "key31": "5T1mDY7VuPS6WvpX3XowWkvbV23PyniZsLYvGJbTu3qJ1QEtpwktoNKYwFMigX9yLzKsWr7LT1JwN21kyTsdebV9",
  "key32": "5vCARA48jHoR3NrqZkWS889YH5Vr472caHHmnV3xxNaHAvS1sY3cbwT5wCGYA3L41LCfqzVvuWgVpN6aeEvsr8c5",
  "key33": "4XdJZqLd71QmvNNC9QfyVYHxnQH4cAR4nBWPbEhAjvrmvXtZEbmFY3NufPLnYoMH9HrN1953t8bUttRdbTB8d15c",
  "key34": "hguevaxqK2uAm8PMmf8TP6nuEvfwidRLNsmkhCSaTz695UMS1HdfaZuB6NwHkWZQAhtAGp51kvc7QsHKaTFFwii",
  "key35": "5GVKVsBuDLpsGzBSuEMfU5dMXAkeVu9qBMJ3V1oKaxiKP53PNj5DF7GMw5HxQPGSTfNVw4eb1VCZdTdRegZseVPG",
  "key36": "4Y6XeKugNgmXYnmEma2pbgQENS8EiFB88gVGwWmSGTSdqg2KfB1DVUArmK9HTJJg5jKYBucVwoBYcR8ynDQhPqQp",
  "key37": "3TPvnfFuJedLKnAa5kQw5FYKpTfSrzFvcgtjc8gHEZz6SjLV6wnRmdeZWyxM2c8P7s7g1FfuDMzU7ZfnkYXXYzbe",
  "key38": "4TmGGJdadNjzk1Wjy112CaYMxWSgv1amE46Tc2ycjg8ts8vZiCw9MVTCbsC6K5gdHFTrThSbxWKvURmSx4iSxAUT",
  "key39": "4XtHfFGrPcLYC5uE4YYHJHQMcvxyQJ5NDfhgmEzYr6K8JocnV8RripqTCdHzixrMqiK5Lz3fjCTg5Uau6wy7akWY",
  "key40": "2NGp1FSx9hMv1dBvFbUJRvF5obj8gG1E75a3EK91LCN6nDyG9VGJoQYRQZU5C2eGZBLsKjBfPVjSewX5xhBWsdeB",
  "key41": "47XFKYNiCkuNWsbGxxCthvgNFB2bxLoCoNGyj4VJxuLwLtMDJUHuvS6tVvYuPcgakA4pezbyViixqYDyvvk8RLU1"
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
