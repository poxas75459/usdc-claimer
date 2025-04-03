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
    "5uKydmXsXWWG16Uu73cMrmbmvMBwkWUamUXuKGfpCqynTEqD9ojK61wCbV4qQdSKypwDgAAMjNrjpqKCCDGEKrk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcU63ooZpGZnnjakwJfxFG9o5HjQuk6eCfgKZ4w2WPJbMFYmRvvUaapTvBiqaUuq1paG32Gw7pXAQhj7G9uqM5e",
  "key1": "39oqhBj4gggn5Ydguf7QU8iFhZZWi7v3CdPKwijm16XSwaW7LbzwV5YiAfVZZNcTus92787HnLgwfDdgBDxSjAxp",
  "key2": "5BKosm7483qtM5Qivojz9tAYGbvtMco8R9mAgKuV6tbefCRVAPgEeysGX8MHzjHqwuHpVMMx8wrqLwNqQp447Pwz",
  "key3": "5zuQW43BJE1oBGgWYmPHK3BdK5F6FqRYGNjieXLo1wsVQqrJYvNpjBDMSnE6q7ijnAB88h5yopL7mZcLcW2wYaz2",
  "key4": "5ZZSD4TakEzXSpsjKtn623obDom7eqHtvtgFN7BVeqRpC36vfAoHvzGJLszHcp7S7NZEYgjxXZFnnV7GU9AqAkbf",
  "key5": "kicW3hGe5Zi4h3eF8DpBA9rUSz99Zk9iAAvBrtukcwJjm8MCMWgEtyFYZAaassGMLJr7A6DTXDTKgyRPqbnyTPE",
  "key6": "4iuqTws8j7vfedxwc1eDyzibUFZEeQ4TAvpCmUsVYxKJWJBT3GSoGnAHcyygCMwE3rqzfYNERRfV3MX5YDednKdc",
  "key7": "4N2AFzzYtvpLbqh6ELrmWkxhomr9pcvK26mWjdnei7zH3MLUnNxoWTZr8G3SGruobiZjvs44mybqFU7D8m1qaNgZ",
  "key8": "ToycgBDAZ3348JRnuFfyCmD8W2MEueJKeRbRJuYaaQyCLhcRJQ523pxFgE4fYoyhpgUM8DfZQDMkbiFzP6enu1j",
  "key9": "5cXDDCrRdzuWm9aAUb19wbwPQwzaA2dBihEoyLJCq4sV3A2z943Q5oYZdn328oa9T4ynfu8dWgMCETqY9t12B31R",
  "key10": "3TGrYN7HRN4pYDpusAEG8moatmWy9BfzVe9wevsc7XCqi4rqEo9jnEujqG91QHHYZu8aSXT4PohuyAN73SdpviPF",
  "key11": "HsQdajxHa8bf88rWdyGkh4M4KZjYxWjY2rdMnb7X2VrTuT28Q8DkWeYcYkFAJeR6qWkBqTgqyuasohKHXGwJjat",
  "key12": "2Gf31HPNkxUjtavMxNhUdD6NUPLrStDWHbJCekAxENNFaiTMRTgAoNHzqzXnkVmAyzyPn9ZSEhz1CJL55pHBaeSd",
  "key13": "DAzc8MbokkJWDhSqwstrYtUVRC77YAoFXW8Z2peXyEcK2xArcKbi8qL7uSnPux1aDaviQo8oShzMcWb7o4hi1Th",
  "key14": "5JzuN4DPSGRnSBR87S68uuFPLpB6uf5baERkhHqJmGDNBJCtBdxdyUT6hkLzmeaQsgcWG7x66MoRfAGULB6ZHuim",
  "key15": "4Qif7XbBrHoWEvUbCxAGm2cCspsvHbQGsXqZuN6MidowP65HCdfAsZ3CmZLVxTBxcUR46X24YM7PJDc1qCspUKuA",
  "key16": "3PXxizKDmDmRLCFeATZiHcAJBbSF8F9GoY9rfSNtCyuTsw15bhojRfaqsZrWYrRGQ2DbjvPBwjRcSwpXxG1h4JA3",
  "key17": "ftHD9jyLvFE1tArQbbzrB5znSGEp1y6pgAivHkcMG3ZoDbduuZ9LfRsVWka56Bm2nww8ZAkKTvaU7KQULwyFTpf",
  "key18": "aPizf73oRxw8vRiZPbatwER9ajBnuuBr8qraC6FLAr1HxnEQxDCWQvr1XEjnAVVjeGwrqTRfiJRvjDiWqiT29Zk",
  "key19": "4p8cmeGFtxPx6Axa8pevdMoyhSpJdH2BmdCsrmUqLh1BRPq4Gx6rNedCuRgSGN1dy7W9wYiamgtcPnTgUK8kXp2Q",
  "key20": "4cDU1LUft9pz2AXfxQHMnZdJW1gdtz7hshvHTLHYLzBSf3fGRFmEVXrEGZaiBv3DKZvTezwkFeCBB9XYhnp4uVfo",
  "key21": "3qmdz6xXVrq7c3a6tXSo2yamieQdxU5pDsFAc3bbWsBSbwY2MdfkQmcsnjhT3a97a5Dtwkg1BP5v7zXjpb2e3LXC",
  "key22": "dhc6eKBU3x31XufRTjEY4mfcfpQFoAi2JPJgJ1ADcmFRE7oP9QGzDbcf39G3rdyun79VoXBAF6q1SVsXQtZnF1Z",
  "key23": "42QY2oMeVTfjhGfqsLDjZ3twi7ebeTu9DapHh7urWrBqFzmtYcDF6MLq5wpW4sVBsfa6JQmgzQtvKRAtsFs1ah1F",
  "key24": "5c9wZ9Gpe6RXUyowUY6YffEL8gMCqh6vck5nNZ86uagSmwDSqtiQSKfuajaBAubMjnmxh7zgH44zRR2ki4g4JHFg",
  "key25": "3gMcbhAp2R19Xgc5zmGKKBFuxpBHqRejRnn3cCXMyPnsnNK8jXK9SecyGaEbXTxWt2aowv8pXWTjZ6u2CUkmxDTj",
  "key26": "5JvDf2eTcC3YfhKANhwqVZjmywy2pyTnNn6hiq2H3u9xwC1WiigTFrzFADXYSWKKqEXQ46yik6WfaapNmzKFw6YP",
  "key27": "33vajPBJ7LoE2w2cRv3ypv2WjSCYiwtw4uKkdGJF6C8tFi7wXqqnVbRq23gDPW7eQVgravNMZMkAX7UXyUUEmJXh",
  "key28": "4X96ZbQ8GLgrKHhRhYcLipYG5b5czvXzfLLtLrCjGtVVxty7h24q9SFye7AugeAvdhwZNnr7BiQnBC7jcYDNMzzn",
  "key29": "2NiSy1S9W7LWU4fuTFx3Km3Rnm5vfQrruLEGBjK8HHKWxqi8mmnRohSQm5VwLdTfC7oEMU9EdCeNc6FosBaaYGdN",
  "key30": "3HfuhHgPiJ1T7fUos8dMYBccmYUoSbeWjMtZ71xBGqLcKzmFJzuz8v5qFDLJwehYhzR7KQR67RCuxuBwimucMRvS"
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
