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
    "5h1g4qKe4U53uAczNdXEptg8VLLdZHotykzosf7vHDUgzX53hx4XDyikiSn82YXP4BeP1s8hhbxFWkjpWNNAT2Yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3frZ5C1jWiCv4YNmUfAGwLTSwCjPqEUThu4Wvmu1ALoJH9TMzWDU1aCwXFgz6TiMf1NG4AgcNhLGCDKfm6DgAHyj",
  "key1": "Gp1oBqyEjsbAJ6f6dWcoitDgeAXp6oBZFnkwoPAnMq5jgTsQuzTnkBVGvJMhg8MazUGvw9tda3mAbBe4G1rUF1n",
  "key2": "CD191tZN5MPmvyFxRMYDkMEvnUQyAyUbP2aTcSZanC4TaFW5XmtAVte124sTKUYuJ8Mfh63RwE8T8xgaGNXYPfY",
  "key3": "3PoTQmutgMKGiMS2LFBMa56A9r2N3VXbwHyejMXKjJjUMw3SDTRHystV3Bg1w9PHJnBhaFXzfeaASznXbaxftgy1",
  "key4": "4ZvR4EUNHdjCQPmJzPTsom1FnN96Dnt7ibNWjUiKqaAr9wRV9CtmTF1ohdGkb1z8kGTvTrL8uQKuDxEHBW3bjEzL",
  "key5": "tUfwx9pUon2KM7SKHmbbUVf59eAYHahmbHC3CdfcYqTGXLr4jp8F4iWeJE3ZQ3E1N9XbK1kVgwNdks4T1dmhzQT",
  "key6": "3Qrk9VB553SBpMEwYoHGY1e8MWXAN5ZKJiXRbJRSBkX5dqUSVkuTJFmYHisy1JASLbN3pEJMemwgczFhsPwa4BKt",
  "key7": "3WAsuZdVtX4PZKzTg5e6ktVD2PkfsuySeGXVVPRipzJAx4zNNWYK2ToVjMmz6mc3YQhJgcF8jvrgei733ViVfzQ",
  "key8": "4AsDJaMQAeZqyqSdJdDakWsMFb2f7Nx1ysa8rL1aGPmd8UgDR4gyxJE2jTShh6UyTT2EqLTH2CgprWNzhzmKnmgb",
  "key9": "4ePEigWFt2jck9Thhfn2zrd1qQvBoqVu7HhY54UNSieL14Fp5LpUPqNVA6nWo8KYjxgkyTXABBnZJdGVCdLXAAro",
  "key10": "5pghRftg9jqCLnPLDznZGR145yLTV7MScBYrmrJy4fRVwvtLZ3RTyWLY5HnF6bpM2eEFBfDwvPW16XUi17qvb4mR",
  "key11": "4HuG7E4wTTjgWShqMhBEE62zK8U6xYPDt3Zz1tuVkPvHiGoAw8bErbVwtpSePG1Vr8TtR19VfHcsuGo3q6VXr2xX",
  "key12": "2aoMmVdGdvG6rUh5PQa1en2PNsv9PAB6rtJFoL1ue947KnaGcDoRoAJpjk8f5j4KeGM8muaH1XUMmnbvpcB7XqrS",
  "key13": "4CeqwXt7g81Z1DMccvCka8spyEGaLxZE3DEvbDg8wvue5um92rBzEHbBDQSmBFqJtNGNyfTsFgNHiUb269Ks2fT6",
  "key14": "5zcTDzdPktfpCqMk9TEbLnCmhLwbMQHS1LZKWqbtMWE58Fjwq325N5DZX1dUmiVjgRnYa3AjQ5rmVmzxTbA9m6Cg",
  "key15": "4szYXedExKTTbpgimzEUz2a8An4WLMxvZcpScsHHNhwqGTcgARDvgnLmd4Lh9qYvnt7JZCBkzLDsbpdFua1ADY2k",
  "key16": "5x4DZV65WDuqJhWsD6M5tcadmFb6JPEY5zuxC23u6L2KWYcifWz5VetUX5omi3p1EQ88qFCdTv5SR999uG8bCCYV",
  "key17": "5gLfQRtae19Ab4mBKNv9B4v436WCHUGzFTLYj7EjG2FhQ4Qkj2WK8HeQYei3M3QTvnRTVanX6ETAS7sYiJua1x5u",
  "key18": "97YdiQy6MmuBmaEznFY8rJxiKo2LYtVc1aNMSo1LJR5cRc5qhW5BR8aEwoNKFdsWh9nLdZCMhZPFgZJQso2yMbV",
  "key19": "33DiVjXfUXcVwextDaEYNfoXP2fundJzN7nkAvchPKKU1Kjeu9jJMz7Yit9XdV6BB6aMi4ANwKo6pwNAn7nT3wGc",
  "key20": "51V2mmY5ddGvvedHk8wbSYpL5tb2NRkTRjEhVogTe6duKTqizJHXfH3xUKhDt9P3VzEjivNg2oWpGB3FP55DN19c",
  "key21": "4tiugsVTDithTkR17ViYgFp1Ksaw3wPExgZuNfe4KvnebyC976MnWL6DG5ExoRA6g7XGjXpEz1umVPoWqkX92LFQ",
  "key22": "F4ad2D7HnLahX7bVpcqhGWQjBcRhx2kAg3HbzYhWhKq6BQnC2tfCuhsFcAwYZTUrzDZB6wnKa6rRmzJ4Dd4W3GM",
  "key23": "5ZakzuKzogr7xKrT4bhLitozKSXmYW7uwMC232M5V47fdkY6oE9oCWEaGxJV46hHdzmezWetXNuXaNA7ApdU6xPG",
  "key24": "2otcvwbaThjP1o2d8j4HJNXwpDzqQk8iR4B9pBN23YH9KrwZS5pvxMjvfYc2LA6g1zSHdrP9494Lo7YEro5RQUhs",
  "key25": "4rkH4CQXR9rJbKDo5TAx5KsD9K75TYx4xarenCkH14QC3vs215E9GDGfVM5N94wjqJZPWBGB332vNAjHmN26A7aA",
  "key26": "nyzSstxYcES18Ff8KFFcoF42UJQFnFGCYCqATYmkLMjkRmLT96Yqc3ALpG3tmUfAX4ercr9u2uUc5ZyUFBXtEje",
  "key27": "4pS9BMpfE4Aof9DttbwY4XBZg7i7tGodFvgk796rLRrPxPoFgnMGjwanYMo8m6e4BBCCacvurWJGYjhVR1cq1y8n",
  "key28": "oKJU3uJXu3Tnu6rtGVDXzpwAxGSSTRWzXg6ZLLrJAfSMNurPKv3XZypJJ2aPkUaURnM237c1fhYRW2LXy7qwRAG",
  "key29": "2XZB9BgqGGM6zK7nNMEynfhLYBa7yt4rqYvG4pY9n9HGRxM2ysVaKi45VDUJnUKWgs4f9dEkQ2G1K8nnVZfB1uZW",
  "key30": "4mm4BUsgykBhAf7X2Ff1fSaEVzbbaYCr24Wb7PnMzJgJLVG6h6EvzHY2QDq19i4bpspyVc6FWcGp8edJMpwKTfB5",
  "key31": "2tCiXxECY3VkkfFckP6nj6jkqTMAqLx3Ee3wzj1DRaSQGsVDMiqnYcnjhALPrANF3aoAGtdAyuo8XVGvPQrY9oSX",
  "key32": "5RxLaoo5C5SzkD2ZyDrA6tsK3T9B3i6yav4dfYKy39tyQpZ9Cvozy3SRmqChMr35kTKe1aZFSSAdD3mAxmXYA6fx",
  "key33": "3tByS9sSgVHrQ9Wy9udR3Y1L9RdbSyiHdicWAXQ1RJjK3JXR54C6gJdjJpnyqUFoTWkcubUAzFXpiEkBFSztJeZ7",
  "key34": "3WNeTDMqWEAfkiBqEjjJesttB9RohGpxrZ5ktukotgN4QywLtk1hHCEw2taRm2LA22GfhDoaxXH9aj4X77MvDLiP",
  "key35": "3Hq2dnXeeZihwobcvPyHL3jWjXCHGmc7B6vFR6tczxPauJtcEvGPb5fJfujHz2yd5jCdFuvzZnQ3h3dgrtXwG9Qh",
  "key36": "GsAKXDMNbC61Thj5qJ9LeSLCVe6HHHdpEuFU8PHpCzGTdkRdVaW2FZbn9vQBVBGvE524BomMS1N9vwmMHiVbDRZ",
  "key37": "46wXCAGntSZtDQ2UyLjwtHeWeTNWcKPRMQQsuQp6ouQ5zX5y9d9mfgG4y3kNHV1uj4LDZiYxTt6GPTy26iSik2Wr",
  "key38": "2BApySUyEf2JKLtvXKqu7SnfnJckMsaVjkQgr9edJuDHCjqX5GXDqFuqDbGR2ok5cZ9beoEZVUHpxCYB1PR9DaFY",
  "key39": "3QJqKHmc5Cm5aMmQtQNnosFSPgqCFJLkGwM66zU8jNZTav9YZa4Gc515kLmoJSHDCDnaqQm2BMe8ridwpbyRLcih",
  "key40": "4a7f51Z8kCGFvxTgG33iHiAm4BN6KGbjuiQJtWK3JVLSpXPK3jvBN8eKHNYJJff62UuFGEaKCtcNGPaY4v8tueng",
  "key41": "5p5YRuefX7DQGPsMno97RoDCBaH2zUK4QriU5dfnnRX4QqFAMZSZJ2go7uAkEnKY1fUc8XFvAdUB2Xfyz73qNiFN",
  "key42": "4bk5iin4foasiTsoB5odc2SaSQBLE3UDYic1AyFmHTb4qLpoDw7ech1KVNobAdiPPczUuvuYDsE9f6jx29yKa4Lf",
  "key43": "5jYoobgPD1MZpTXbw6eEBUD6nQP7TmWFtNQJEdUeNxtDrEJSG2LzZhjNzStUEX6HpaywTpvmyqphdNDMDQb4YNnc",
  "key44": "fyYACGy9QDkt161njzpKfpjUb5LF4v2kpG8B9snpiTY84Nw1b4PDbMuvZ6WZQTtk2aBF6YFwNBNwvgPnVsj8PFc"
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
