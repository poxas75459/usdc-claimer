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
    "G78YtTLvzxiMqDaaje9kg33rB4jkfwytGXxirSgnnziEQ3uytxYnwufrMAJJ4F3EmUmzZm6ue3javp7Qkw4ATxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hx9fDE5cErtS9RP9fV7y49K6Q2cBsyDvCYQZuE2VvPQ4H3tybGPw4wkma6yr9xT8qmsmdBzxGXh546mCrbUrKXG",
  "key1": "3PHXVzKkGxYG5rivJcX33LwwDNiQUiLxGtGdNJCTdx3V516cGu1ZLtHLKVPbyCZJgU23ukTWwT2sBTNqb4PLc5NX",
  "key2": "jheo2dKJQSdkxRqe2Jd8rm4ZfoGFKywHcdrBZJ96fR49sRoGCmgtFDkJ2AuVYk9DJM21eACxub5zBWkcEfiNaZo",
  "key3": "R4JBUmRqzTZ32jFnREkWtM6G1UYZoWzkX9Bd79Y38girvqgZxa4aLygd62qsZnSsWFScKCJsaudwoP5AetZDFjw",
  "key4": "4gs3cLYJQi3Quubeit3zHKUVtr6WMEUdozXGcjXUWdZ5BFSuqpRxZzs3cymo9Rr29ebtjE7drhNgWy5BroXTMtgX",
  "key5": "5jJmUaom7YnCYBVkhWNi3fm6RHXuVb8bcUtqhJHZG4GXS4YDvyoxpWkM7954qgz1y2wwfXjX3pYbEZfMwwvm6pD1",
  "key6": "2eiVr4erj88KtorS3ak7BeE5y34MtQQH3jqdYEnXR3LCSPHktF8XsCKZTuoMsT6iCq7gsayoxR2ivTBEN3FASekQ",
  "key7": "kMhoX1EmH64Y2in48dAniNRse7VwUqXLTFWebCfPhQ2yhNw3SNtGoa4diEFcvtwiERqC4RhSwGrSErkzuZRSCAE",
  "key8": "2iV5YE2ivjyYYfaiw8r2F9pb2MrUNNEJjLMVLVoDsfjxE6z1oyjUiFkHP97y5pH7og4b1N2Jr9icwsgHi527mZW2",
  "key9": "4gs2Cf6kXhUy1EazrV2uwpK47SiD9jUzapfogpK5ZrpzcVocvHENk5JWiGxrqqDG8c8zdc1RJmQHWHxMPbTvKzWZ",
  "key10": "54jM7ewYxsE4TeQ2dFwFW71prssW7yizFfNRQh1LRwr3GMnTNsiiteFEq26ETX3YH5vKHRz5EcMkg2GnNNNL2Vna",
  "key11": "2PkdymbawTSeCPxkFdjePQkeHDt2EYUh6tik3CeqVtZtnfTVH1RDkjiRQGfviTH6vSgzm1AHLGkF3uxRNxm797du",
  "key12": "3pQERGMXB85CSWs3hr1iTjwBowvuVpK7xruE67YFDxYnj1u5zRmjJdFs6nkW46NEgJ7FWHSfcD9qwPbXTSeyaAUp",
  "key13": "2wKVqMEVJCTjNvG4y48jWTgogDkX14GC8bbujNdW6zxvEEnNDsCzRfFmHqBdp9o5tLHgSRheGhJQnFAXNJkh74Kz",
  "key14": "THCysJJNCDAfxqA7kyCoVbwbEwK5Z7YLvskZTRjQSTVvbJGsVSjt9g8BFDN26K2V8qXRnA8XbJ4Ss2CQ1qwipXF",
  "key15": "4FkMQB75mAiDpmkGDLnEuCYzDAS1L34ygxa95kAYMnf5kUGgEU9eQ7gj6yepXT2CT53WUNDYUg7LHqLs7cBes61J",
  "key16": "4ThiHnrWbfVkVQc3a2ebzX2nCvWw3VpmG4xTbDsGRSxC881oDReJzhntfN14fUPmhWZgV3nqqMjwhvSzzY6tNTtZ",
  "key17": "5EettkNxiHFXWvgnVKxSHFzDbNQkPfpc2vkLpTD8SyJxTG4w69rqSP9aJPtEEU8zAriCTj7g26eJiQWWydAzMiTe",
  "key18": "2wveDiqijM2cnSKRTgEmaQmkiJ5ee7tT43uH2DQGHatvSPHJ76MGxSFx8neF2c8PLQoX7VHAeAy6i9Ri7ArftGyf",
  "key19": "zCWtRzLSPPTP2KNpZpqXDi5GHUd8yH7V38oXcLCR1kkdYb3YDamdi7S3PPCrb595Q4Bkw28mpkHeqeanmFE1Rvn",
  "key20": "4V5PJUFsHFkHyCY2awXYMe44b8KEUwhyAF3qvFtkgamM8mwMxE2ZUYS3AapvfeBkXFicrtD72fL5t8E16XiGjmKq",
  "key21": "5evG86srfx9yBrznHheXS9yq2KbVrxANcA37spKMS2GS2fFHEFs4mFra8aLExuvZCEX4fxeFvqUocG8fhytk7gxX",
  "key22": "2XhQqxbCV9U9Nmw9JNJ7K4cW2Dnknh6kMmTj5DDeLYrrVMLUvczW9m36nhxZ57Jd6Lw7nZGR4vBCAUV2m7QHxXhZ",
  "key23": "4cWLpoZnDHE9D5zy67Q2rp3gtWULTxnm2tsPBKyE3C8F8vL1cs9oxAfNWkxDsM8quyh3R3f5uWmBHHE6Vdn1VNMV",
  "key24": "fVdSMSijhZDifFNHnGuFY58B21w6qxRJzqhLZAArZXQPgVH667fTuDbqYsAaRW4hrdj1vptfUNSAUQC3bbxjMoG",
  "key25": "61hbahMujcxnaLfzweUen2Gb744Q4vTcEkHxiSWhMhSkZGYJTyP41WYDKST2z252ZdNaKFs1dHFgCkSHzAFWbrwg",
  "key26": "4AHX5b2CykfEsZJbhaHX8konhhcot78xsizLAcC3GmWqdYPAUxT18mRi4E3XNkWzjArKF4if8f6q16vyGLS7XedD",
  "key27": "35whm7aC7gjaEndQE4GxgWqyYvPh4nNDcNZQUWCCXKord164LtQ2oyBedJ83jcTDpkygpRZFgP4WAiddQTP3VvTr",
  "key28": "5qefnBBLW7VrNU7ka4mwLRDxpDBbG86bTU7PurR6fohP6XnMoZuysm7Rof1TNHHgDuGwqHTS7MsdZppuvQTKb1jH",
  "key29": "5HXaXPhF1PcRidp4eqviciH2XL5GPk1Z5yANprKNuX1VHkQuSTZfwCk1k6F98xTGEsnJ4koYE5GHuAH4xoGRw2iL"
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
