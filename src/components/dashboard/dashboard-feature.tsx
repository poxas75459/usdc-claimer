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
    "5sVhXoowq97ebGJkkwGsjTh6MStqp1EsEqw48nwQJufUzRqJhxqCQLJfKzBq4SCX4PJWuW45iP9t5j7AhAVeEJe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zmyQETTB89kKK6pqQXmKhKoKcej3PrYqgWvD8sEt7GrRGpfAf2b6NZNMks6fTWH2GmYq9ufWiJYCSyCaF3egw3M",
  "key1": "3ErDYq8iuYQ1U3tgdVFs8Zeaf2qMpgD4qpYPfc9iqAPVSHzcDD3wJk78kHXa9m9dVRammjwbjQkBM6nDbKCoSuAh",
  "key2": "4nwrodpGMPWDQ6RP6x8qYsVSRPGQ2u6WqX8pmaqVrumHnH8jHjbuGw1CuXUboDppDJvSaMrj64QJwfWNa7Nwg3WH",
  "key3": "2tNZky5Bc1PgByJzQCLcG4TnFnGfTJYKisfbtBijbHFD7GEGmAHvPc1UJ6tT7sDrZrdgHcb61zXFKmkTSiKx46bS",
  "key4": "2LZF7DWbJ7XdKF4HAjeXJecGBozM3A5Bd3RuKdiPv8JgP2WvZ26AfGq3UTb27moHYq77iZsZVjf55wFy65ito9Wq",
  "key5": "3MLhAT81Gx93YT3oQZewE75Zx3WcvGt63CMpTjDYmFPCa6EkYN31LKJD87Ez33YPgo1t2u1oZooPp6dP692brei",
  "key6": "32TvKQfS2dbzTri8B5AsmJxMks2kAb6a9ZdyLjdahk5iTf8Sg6dB5afRcqqJmTE3gcSNEw88s1CiMzmnypHNr8tL",
  "key7": "suuc5JCrjrx94CVZpCSJGgk1DbWQH2DZ6rzmoodBDswuJRF73AM9eDu945Ku5eDfAaBPF6WMtnCVMiaEaPtfvaZ",
  "key8": "4cUqLwEZ9Bh9GUik5uLY4QTSMGdEDzJq1yS77kjaes3Uv4vNLFP3CZdnAiJCXJFXB1k2aXHChkxjAv2XAp4mpzcc",
  "key9": "5vNf6Bt7Vayry7Yu8rLNzNeBZXbokQ4WBNkTrS1XwLcjAwwUN48Dsw6C2Xrh2mPcJj5HfypYMVWCpSytxNGb7gAj",
  "key10": "2bYXcK7JLRm7QhCqX2TS1eaGHxDcD9My7USn2P3hbqLcxHpVxrchfBbYpxuiSPaY1fU8618ihWFd8AS366Di87Yd",
  "key11": "5TG5DNYYCi8BUTH1Qo1owh3eDZs256ZYM1Ux6itnAygKUdYzYvTANnJqvji33BGay91du7UwAd9LsRkD7yZEGobh",
  "key12": "3cuSNsVG48bPHyoLFuMDNheEESmio6NsExhwZ96LxFVuB1B6gBxLtL6nsLQ94m5DuhcvVUDq74qnS3fjp6squJqC",
  "key13": "3xQpeMDwtgEkEH2ghtQELonvQyk79YAJgJDVuexqPSyJHZxMvwMtwWGD8UhVXbytLa8QGuq3vQyEY1bxEbmsDKsd",
  "key14": "5JpzNxeffY9jiEdAWVLynwpd3q1R8csZTpqdLiFXg3gjVerKYqnybkaXUyYQQn7KqQCbkf5dKB6zX7FncLkzW9aW",
  "key15": "39X7hgPHtjvHHuDvoC8knXKohVxjQv1w1uvcfiLxDAWPvwSfGpLdidqT3NZ7usnHcb3Q8mEjuGTV3Gd7j8JYDnMo",
  "key16": "5nbzcXterHzgNSs3ST5ys4xFT3BEyPzw95ECbaCPiW5AiTSMZPmfvwbphyCreMANikJGLpZZ3C4wxhEkVqU9yyu2",
  "key17": "27kjCThHiB9d3zt6YWiLQ8bawMhPvb3x283cSgLPDuMnCUxfFM56YcTzsUxesvNy5FWW8RGSmzKaXw7vJUp19Aox",
  "key18": "38XR2N6zzDCyXnH9tstY2t91wUEPhFNfnvGCcU5HpiAkPbjUwYNDwen8bqYt2cuKb5bZtXcTbDiKkcKjYLsYXsFj",
  "key19": "5Gi12EJHA3JhxKz88UFe8P9rU6rnZTrWQALXewDfEUDqjk3XT8rRxiGFPbCbDqxJoJegSv2DS3vduytcs4zX6ynB",
  "key20": "2idaNPoVrzHsh9xLTyDWRYGfLTkyijoR7RBUbrtEWyVfGPFf3BhtRpJX8VSZMcBMBQeNL3MwPT2X8sMKkmCmwyUk",
  "key21": "2rdStnSiUnKytZXWQqjvhpwDZUUGJoBKAdkiG6vjQnTCbPgZ8vS327SukKFacUmocjhD7wF319nug92NTNQxG3EC",
  "key22": "2FZ4SybE4UMKzgmRgsKEZWEMzdEzooThSQKAXCMJXQphfZEx6ZUdEpVAvts5JHfWYMrTYiFMZrkbKYkuD8DoR5JK",
  "key23": "ES3a3b8j4rhkSdcf7p71amXPsYniJ7EuT46S2pZS9jBvqEmg9sixs9yPRp8LBfuyNWo1ojB8c8LGWxQdERCHtgP",
  "key24": "sRLSzvso3c797HWDvvmZDTommy2SbzxZNoz2qCAAK447EJ9s2XBdxce3gbzQsH8FsCXFe1usJj9HZ6jCbUTGyEm",
  "key25": "4Wt7ZLWrLqLexAh78x952DfqJsLPKM6Eev18srmJdTeUumZkeZmGJvZg9eKYsay32CjnUv59NjVvHojZCNNbz6SJ",
  "key26": "2sXJdGLfpfyGtkmgPXigTeAjHtrMdKfYBQ8qLqGxL1ZdGn46CW4y7WPkiKnia1euJ3YbL3zWp3UYagrTN2aepGC4",
  "key27": "2PbCf6FLhsdt578zme9i2A2MxY7gVcg597UMT81LyPinS4ACVCtaKrdGwYnuZoLvfnAfyjexqkgsz3hTbgt6MEqn",
  "key28": "3j5WcV1EUksgZiJnwCVioVcm6jigeKag8mdJjuEYQJEY9MXJAp5Qbbym9VEr5dLgiPCzAsqthiLjuRQQAQQaqDB8",
  "key29": "2jVQc63aXGd1UBDWni4pZXiYZoFQB81Zncr8rWM9YXTUq4gB3Gyr99LphdJRfGNKLYeWAqSCQXzMBPm12PqgdtD4",
  "key30": "5g4GS11cpGzyFZCCrQEYSzuNMWKWce2GRhhWmdasVeeBm1beUGfzzikqCLt4VAWcmjbqM6GQR8zY7KN5xjC4uzoS",
  "key31": "4bQzL6Q9PXY4PVB8gphhx5bMown23SwyyiBgmVxDhkFFLX3d3UYbCfdpvv8YnyH1PJQcqv7XsfaRESSECa4rPGJ6",
  "key32": "2mZUQfJJJhNYhefrL51mrS9DtPH3Q8dA4oprUP5mTkWohcMEhVtuBNZfis63BqQjD74dyD19BFFtsgcV9hBz9Tdv",
  "key33": "2dZfSJZXrmit8x5CSbmKRW6ZcadXbphM9vTaVtpCxHToNTgwLR14h6r2uwkUZkx6swZTbRfC76VhkEprEcUBkGfW",
  "key34": "3W2o98Tkc8JHvLFva2vmrcYhY1TrjPh5eYpRTaM1m2d8P9H787cZFFBaCiiGad1VMgCxY1sdTQx3brb1rM1pHHZv",
  "key35": "2btBE8k1uoLh6yQr2PEW7sUkS2F6PQuj1RXo6hZ8rNgVRSvwgW6aQn5qDigHPL8qFwFcriwwe13QqsivFobyqr2J",
  "key36": "4AZJ7HPsEujwaNow2tQJHCFjBgzSjiGqhMN24yKjX1hnmrMLjim37h528r7bsw2fPpskpaKzfThJo9VgmXPiXDVZ",
  "key37": "5VpjeRH1AcFoN4BKQseHUFjBnsBWxhWkW1NXMuWVqN2oxY5xME4LQjYN3YQ7qftK9VdnCZ5GB7YZWqMjRZxnqKMh",
  "key38": "45xPDSuDcQQK2ef3SLRDoeJy3AJxo4u1rMeL6rB4MfNhyJaXSZ8cxA1zgFqUdgTi2BwbL3crwxjaur6VDWB1ubkP",
  "key39": "1SN7fFoXAxq7gWiSKhgFVc7tNLGDmQYySSX7jDtMUe8WVVGa7Dbp7XfeXUr9ckwa8ufSdPUmtQdEyP52MfT4qSQ",
  "key40": "5o64kGrtdTAyksbCEuYDrRiNb46eSq4oCeFcsEJANd68KS7A8Sc3rwBeSNYLHzSbMqhaskPb4ShAdjRoEuaBmt54",
  "key41": "jPp1pLAX4bceafeGdozRchKehReVAWWypxfZKLpPGCBioaci4vCZSTj8QwhjWKeSmCpKzpgME6eXL5K1zmhpzni"
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
