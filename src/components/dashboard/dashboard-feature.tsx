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
    "fmd5pXNprt8A14ACgcrJApmFSiikKfMgLN9kCtN5dKxwnQdxQt2UarK334jDfFR3Q7XYryxV1FQCvM5ENnzSmBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sopj92g5dspy2oktqtihFU7Cpu1m6gacWKgoAqYAh2ix9sJV6BTGpp67FYRiy8C34XxyiXDGj11wNNp49Cr7XXR",
  "key1": "472AZqr9RUQ5j49chBkRccH9xw33xDxEj8A6xdH4eVGpAVsWW4U1MHWU3rUsrS1hZVAnkQ5eWqRQehVoQw1VPJth",
  "key2": "32bdQDubV1niNoaF8Dt4tuQvJ9kPpx5EdiDVWDEBnDAF8ynA42Ya3YEmk5aL3jmW8ULabsfHZ1iPcxuVyZCXSM5m",
  "key3": "25eTxu4J22bnjWcLNc9fXVv7WD6R14PtzL5udBKip2w9rxv9fDVNFd1X68tvcSbYcGQbhNFeiczgxBdNUaHNaHxd",
  "key4": "3oY5mAcg33uifL93jr2R9ZzYV4wyhUnk3c5kAa16K5uv4V6eJ4NieGyVtMUeYvVgkwHZi2JzyZBxnzTfzLH9p9mZ",
  "key5": "5V12XrYngzcwGBpo638rVuFkbChoYTTm6HSaYCSYoB86fHSc6Sb4hUdj2deSK9SPY9tPnXZSiRNeSndH2E2qSjWp",
  "key6": "37TvKKNEG3brPMMrF594qWoczke4WCHPY9NqrLy4jzwxrsDtKYnvg7fcNGmjEeyRca6owyMHtHF3ff6keVWsg54q",
  "key7": "U7prmGWikmtEnXutSzxPmuA9T3JsyqQ1qgfezJvNAQanmDv6TBMqiXLYGRYkRx8hya1wAipMpCXoDqLyUwTq2XU",
  "key8": "4zUuiwmfWuduLSU7ToA36KuwxHVaLV8kiqaN3Xgwn7BpDN9JRQN6gaxwg9HuiPDnrroybucTqVUWBBZCpZSKdmBF",
  "key9": "4ES5cpnM3zmACQNcqEdFwcZgGDonh4mfqbJjUMhSyG8HRMBznodtBE9UASmDp4mZV5UVWCYbnEN7DLBXdCjC4F3N",
  "key10": "2jfa7aexM3bCk7jCDy86YiV6opvtQrwBytprRjcDLubmdpqVLdttRW9mZV5QdC8yWM1tyAoeECyrRzStmd2Geden",
  "key11": "4reffQkCZX3VZjAjpk6HfxbW89ZDjjtEUTfzyE38njTWMeHs2wv54r88Ws12PujpjqDVNyePGCxq3zNyfFu8jwhY",
  "key12": "5uHgYXonupecZPcPhM64ywcK1kjbtHiyoeKh4EbqgkspqvWxmHySbTHBiMW4TzSXVK34i8v2B9Cw8r4q6qvtBD7y",
  "key13": "GQHJ1iGMwqHGDnapX8NjoJqByWAxzLQLJjCxkB6kU6egWNBbUHjLmg6nGDyWM2LX81a1narVcjvnRNs2XN8fpy2",
  "key14": "3frVqHrJgbYgK4hAzFLtgVaiVRjE5mSp925sDAQAufGfT6QhdbH65gU3qyHRthcHEY1daxpmSGZfAD93v8ae5LvU",
  "key15": "2XUeWSBQyRirotwfqcPg8FmzxyLMdX5aXVwPT1zHVQyYdDisYnuE1CPMb9sA3cKk6x5bN1YeCd8vdQSmKduP4pmW",
  "key16": "3KCVgKBvBXSvdMR2FVX5ur9ivfLp7KzBibSq1Ru6xiBhcXTHGK2DqFBj7BbmTAHW1bZ7UitRDqVsF5hp4LuPLiU3",
  "key17": "4gvuwY7GfKfX4BSza87WFkwJZg3f9JXUWAs6CQtWwVHT4Zq1dJz2qKhEziYjLL1xPRoasug9Dj5UHnFWzPgsDhf2",
  "key18": "5QWoX9RSRcKxvbxPMdsqh4xL7SVWAjggaXCEWm9WMGhTGkkjUB7iQ45utraHu3wqANCPTn5EZG8Ni2icBgaJ713C",
  "key19": "25rvXLwLKhuw9ZvYFJG4KVeuy7LaLCMe3GzajMLwEDpPwABbohHu9DqjET1xfY9ju3yZzLhxFMW1XUtyxnF1xQej",
  "key20": "33MzhqTZ1BHxGEVGdPViowjtHd7xDgs47Q3LFHzyvUDWGimUH8NDXPdDzV9CgR4dNE9TLMmgBKgHwExtbdHzkgAd",
  "key21": "jt7B31WW3B5e55R9YRKZy8aWY47DRpyVuqggEbthjEQk2M1U9yPZFF52ci73yQzSz2q6gw7AX9pC1kwnAscwUDz",
  "key22": "66WUqpyiHP3gsqF4ZtHw5o2iU1hY4zHtPT5u7wm7JNfBWK4Bk26hbA2yK46atWBbbvgFSJjT3Dud4zHadJsZ6NPJ",
  "key23": "4Qgc1U1pfeth84bZte4VXCdbax7awM2WcnZKudUM4A1touExLmEGNiCGBFoDCHwGkWWs9TfHPC1vFDJYC1gmpNBZ",
  "key24": "21Vyu3W93NTeKR61riXvkEBktbfgGu4djLXqaKPkJMVRVuuTQP51jNZPBaZjaeikvgSmqdUMEbAsjBKLut7t8z1s",
  "key25": "VHn6grQKHitoHrfe2C6MNKUG5VrBKk1j7f4Yw9DNa5aL43Fu5UTvq16ZhiydwHN4YSnXHWpwEVdmMmb9eHZ6UHx",
  "key26": "4XPaQct7GTREDUdqKkRDsumsj1hkmtDw6ds4C43LpSJdtkZcv4ACDUpBf9GfrUVtXr5gepCdUCMeFhyNFK7nNZBu",
  "key27": "4rBmyCfq5Fsug6PF2GGXcTN71j8mGLGtmZvrUrrjEHSpoTbfsjDNbxXKEcYoJiA2Gwr7mhfhEVPNskNbEU6wu7M",
  "key28": "3V38BQNFET2d3XGfbKs9btxtd6ERibwRadkXZqmbhJa2w89LRcmvwcfbmYc396PLxwesXdxPjgUxKMAvut5zkvRa",
  "key29": "2KtxxjvELveKaWQa7Fw1nvF2q5RjpmgQdRCm3tY5hrugkoGZgNASGUBLjaQRu1Q2JuF75bqJ9pP9GKQH7qR3Ebo4",
  "key30": "37N3tyNRhK9csXuAb8JnmEYM2pVsLB2nMX1XFW1akgdJbVGsYSoBLUrvoustojzgiujnAUBZwUptkRdtyWLmBARJ",
  "key31": "5vPnBHrAxMcVgHGng4yGzc9GKkhecNQj2gCZqbat932Ctw3S7zcZfRLk5483Vr66JdqvhGhi7wK1ixABUXZfkaGS",
  "key32": "4Q43K19LK9TckQucWLRLsJPxHTFHj4C33ZRNxJPtZa3QJKLdPtYLzq87wyhfDBYAbytz1grtmN7qSxo2vUKa7JtH",
  "key33": "6VR81y7KJpbfxLiBcWhbpstDZC1ssMMxQYNf7C6sFLdxahcwzuAB7rCeW8RFKXs58J9N2k6odgBKvxLdLJGXB3A",
  "key34": "4uinjbU5TRAZ7Mf4nnsjnkYpZgbxNZdRKNNrDyWSCW4Tyk8cMeUhukPSg2RYzhkPwduansPcVzDeqsLvYskPxqEH",
  "key35": "5ZZyhf6VziLRZn1duthuF5F8B3211mBAsYcEaNcSC14wi25XQ9LE6URSVjr6yL1Mx2JaoHeHpUhZt138SsEFg9y9",
  "key36": "3TNPZzvFYrHenTEfqDdwd5XjhCWjRQ9SmBD7omMyfvzdX9hxVRyRgJchMubwfNCVMtKnMaqJ9ptjMPqohaDWCwAV",
  "key37": "3fYSbSYnjCWcD6p9uL5PnB2SMyZPLRcULEufiCB8kHoqULvz1L6QxQGrc75oomVw47MZGkLa2q457XqvYB56mTou",
  "key38": "5U1N9FpJ6G7rQbmMr8zJT1BrrfX1Yx5EidKhLDcDsyH9chsTLtjYpHfPEYkbCGoSadNmmZBGoW2KKKcghwfi1wN8"
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
