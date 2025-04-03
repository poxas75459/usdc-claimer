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
    "3iiLRujz3jLdmkThb7iA5S7YFxtMuJKSSofDbBQSazvEUsUDqMKu7iEWwKSsq3x2d6eYJ2XUikMWccELkoJF4isY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cXDMGkipc7wa7wEVR2NSSEzxZWghUZWu65m1MmrYJfxvPU3DB4ooLibY3rbG6jdBKbqRP6xuzWurQeujc1UsvwB",
  "key1": "5pTDzasxXXkX3YZfkchvSjev6adk5nrECazyghNPcUDTxf6Ev3aX5GXor6H7waCrVZRWA1TCaYG3M41fV2eX9xiq",
  "key2": "psUi9A6akdoT7yKEHg9C7PgKHdGM3oVR8LMpsi7vJQpMjFhG2HgPNs9LBFtJT3BgoUY6wsNJpt53gMQuXymxy9Z",
  "key3": "4N3PcVcSNS3ZB4meSqv7ukTAnRWEfHQBpLX3iTpNEQVpXfXVYzzdinqvv3YRutGPrg26dBDKUvmMVTWx9ri6QHGo",
  "key4": "6QPcWyZ14ApeoTNbe6bbci2TjTqKY4gDsq4jKQRPreuANNRWSGbFWHznHY5115X5pc8DEpkZxjeeW5FfDuQZm12",
  "key5": "4YaTpvPpWqUs58RTEkFPNkUvmmMx8eCwYq4LKmtteu26UCsAar5GLiiXUCVJwLCkY5s24dm5ie31faNBv5n2BoEr",
  "key6": "5uPdcmFEDnUJv5ueATSGGTPW88qHgdPB6WJH8nuG31BZStsdkhnZQpjWdHF6nPeVFwCrhceeCqWexTJCBia6VU46",
  "key7": "5hNYLxP8VoCHJZqzkgBSA1tx4zfpuUYPA69zNnCquYniKoTjDESqFMEJ5gzANVJfKWhP6RpDNaqGFpdZqbvJGf1b",
  "key8": "27WNvurA1fKpvh4xyeCwEVB9GgXGbWYSPf1ZGVBTUYt3gxGUVqGY8RPc5PHgHfdJDKwgjuZ5gzfsE6HH8SJUJhGV",
  "key9": "3aKsBaV1QfSCm5XqXb2NM2RnEyFJrLXJ5MeXuVJAB2zVW1yT5U1ksmC1PTrhYfEowJkhBkRUR1pJYnzGYSu6Cjyv",
  "key10": "2Lj3qk9LWq8RdPdgC5cr1ao9uFKgJDDhRbuSbb3TgxWH5Qgrw9gbyF8BHbmVkJgZpHQMXADUNCbYjpFs1wh9Rhv2",
  "key11": "3oBMgVjTs8VuCvtVYhu42PZCQM7mYJoJ3HnNj4Mfy2ffA9PwCU2qkpyQGxoYsxnjNb84Zq3WpRKwgh6VV1gH7n5Z",
  "key12": "4URFig52vMDC7E4wctsLKcaLtn4UTrXiyRG7hgUrLGogfTVUfQRXAjNEbANZPLJaGmbhzZQBJSeRZ54edij88efu",
  "key13": "64V2Fyz2NcSydrf4qZnk6UKLR2ncXRfUzwRya61XrNqC8cCpyPmfjEAkGHbKUNt27kau1vqUUibqVVqJCFgGV28c",
  "key14": "4SQESQDPzsnKwNNSLvMpsBX7TptyddsDugxbJ52ndRrUSeTVVsypp9T59QcpxHcTdBKW8CxdKhHNhTvN4G4TgCtT",
  "key15": "2CfYDBRCq9YkaBqJqbJSEmned6EMyUsfAoXKvHw7AQZQUnBUwxSnjC9z3ejEdYaQwMRrFn7KVdDjHzCuxeu88h6w",
  "key16": "XBUd1cvpQVq2UxH1AwDuwe2VxuFTZBbt6pg2dTgX3He9F5aiHADDmHkwfQt2AqjfrL1pgFqRUiLpuh24fGcFZ7c",
  "key17": "5Ybr1digbboaMzPuXX6EwLKKiPk3RwLy7xfa7g4xrBMTBoBKn9boLq7QPSzN1Dkv9ZJb5J6Z48Qrv5tEopXJA4xp",
  "key18": "2tDp4UxznoTvg3DUjWW4RTiezJVf9MpvgXm9grUUZSS2i5PaQhrMBEVq8QKq8dHyWysWj1E7f59ztEnCzmbKJYdL",
  "key19": "HY7oRrpiMo2BmCqxmdF6JwwGPJcbgcHfuXbwSpdDKwr21BcHd7EcF41CP98Kzwswvts4fZGGFc9xsbNry6QXCJT",
  "key20": "rbfdc6YJzYSGZuuzzS2hFuF4YurJ9Pfh6sTv2coRSVTr6aG7eimwEm1vDkJ5chB8bq3f885BxaKEu2nR3VLSxGo",
  "key21": "3ijZEz31mVUSAiTTJ2iUrWru84sz1UCL6CxyDpEaNtRjtJWu8KY26K4XRvaYRzzRdoJpkpBc7hzo7LzXLkQCgbaE",
  "key22": "5eLTEEgZz84zGZM91Ky1UMHA4sfP3GJ5ttQCenEXcHeim7fR9VMdNqBgY3c4GYK4o8Vk8WcHQzqLGCFCyKTJRRSy",
  "key23": "4FKZw1FqPD6sJq2Q5sQ81E99TQbBvgctMjepRUEGrLXWDhBmePnwf2k33HSoy5CE8nL1d8iSHaTX3qqvoxfjP8LV",
  "key24": "5B3mscY1N65xrmYV9pTdPrTP2dBuHtzS7iDtWKvw6ir11h2viB2zH5GSaSHmTfKLv5TAicyznhaD4UA691MqverA",
  "key25": "4zrUquA9sTUZPsSu1BXDq2FV5xYKBFAKYXM848RVyGaX2qaHXVdGMiR5soNykV8fEFJXQvvdbPuLR97wVand6sn7",
  "key26": "xEubbAgZwxUe5Np9AYpLWRJ54dM9ZZpQT9AuLhrvNqMHDmFVQN2R7xsZfc6U7nA7sByYDMRmB8TFhBCPPSvP39K",
  "key27": "3jZ8rVZU4ABQyXm7cDRQwVxUSiFH2gCDEpRhrgGai7Lpx4GPjknhoAttk9ge4hZjFAciRXBTwUNxcZAtj29H1YSD",
  "key28": "3T2rnfLsh1A3SqoSAR1fyf7b1tvEkmxcREixwKd8S5N5bLrC9cHJWCcCouLJFyDHGugPjgmcmoFxw1ZLZrchrBAt",
  "key29": "3KYQxqnBH7zunx3iT5TZLiUDmTN6HhjbGk8LYGPuRDhtPYzNZHzKvd9b5KoDYQadG8KfJiGHL8zKfoBqwNXEGmMc"
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
