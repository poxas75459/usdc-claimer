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
    "2W8v4EdhvCDnbgiCz8qLrM3fmTSfj1vCf7uzoZzbkyH6vKgCyxHfjxLqBbtZbTo3RunYZ68Y1TD37eBjvHizL4bW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "382hpcQjHbqxNqgkFbeSXRSsU9igM748kDxRGc65RwwKviFMeJegPfUnEYV4EvwDj7aS3uW9TsCmPQ2jKWCZxoYu",
  "key1": "4U3JHs3ZM6sStuhrvxs4XPChGjqV96NKe3JeZEQjkxix8uwjFgos1pyeUiyhLHiV4Xr4X189C3ypVFVqdBubEqcu",
  "key2": "2keUDyd8XanCKvRwm6K6Kh37VG2a7Z6UiCuArKVmRDxubTJcoU71n4y6dzWgJtgvZdoQA9cWAsKpoX7yMZE9kXDw",
  "key3": "61k99rsgZuGy3fi5eMkzxEvRPWQVvKje2P9L6wbFgvrRFiN8gYdeZrCoEGavGxm2rKqV94w3DkTKqaFSHyMXSboq",
  "key4": "53fmdWbKHC2FZVt1nC7nDEYjnEWsYcyEWpLEP8kCo2SNYyscKXXLnk12SdKL7SGZC8z6PesqExRvQMaW9V6YEcaY",
  "key5": "2Lc5ZKjAv31XAK8jvqiAyNnvBSppSReGq9YtUwf4xoZzimggCC8Xz8bASyaDPwMJ9gomyh6MNnr3x8heEpwxjKMH",
  "key6": "z1cAidamtH2JSN4GC7BQfuQJ1gMmKeM56sgVxFMvSuKgWxVwjt5SQGqWeFkLfAqujRcED9EjJ3MyC6NwQnaVojC",
  "key7": "5HHmpkMd9qxrkWMjzBBfhoJ6hyaAivZgbPYdh33cGkYgGkghRabMYQA54FRCDwni1TVZSrtyGCYCqZdW5PgYTTW6",
  "key8": "3g7SpyKFzD4jgzwM4RwmHJksFzDJJjdPbzD8xEGegyXhGXZ5tAMy2L83mGp7Fo2PskCcfJiiUqP6rf94farXCHTv",
  "key9": "4zTiUMv8cLbkPkREZwZdjSv3Lf9AMVZcMFaTYCscnVCAdgj3BzzgaLTXBsNszL6da6nfwaonYvHmTJvAQ34LyGUb",
  "key10": "47t8yr94NBajXD1zpGog5LywhxWBsL6hFAWREz41zSkFBwdAp6xwvqknP48ge2LeG2jEUQUWmUTziLRBCUsLDsgK",
  "key11": "vnF2qjyd9DU1xxm58BrhL3D2xo5iNGgZx6cGE2P8n9V2ivb9aipoXBoZW4VuVr5Fdfa35hry2GJCkLbWAKmxzZE",
  "key12": "4hJZSMoNoVxtANd5PDhmpiJSynuD9Ef1nUTCRND2R1QiQhKDMGeJcz1yhWQ6pfpFJqmzguCmR29GNBwf1YiHmBNy",
  "key13": "4fV6Erpei8LNescz2JNZioriZJu2Z3pjtbRqKfvCtTC2kdLPVwv3cc8byZnDuBFi9aURPKvBiDHJpTKBvtUsrAw9",
  "key14": "3EyVg22cmm9pGVTrsTCkLjcTn4yJEX5qTAgyxaGTAnhF22AeWCM6F9rPg8i6hSxKwGkxZcCVoGFsr7eWjP1WpUzk",
  "key15": "48Sa3pcYDkA4naEsMoatWVgDAgd9qN1JGpJgnC6xbi32bukms5SuuQVo5Bm4ktDLA5tRdbK5YstEFQ8moEuSr2o2",
  "key16": "5FLGdL3KcHRHD8Uit2eZaWLwHiLJFuupvmntoinvv1VJx5qZyhjATzXEi3SRmA73MAbnsZ8ysDMrFPKLgjurRdq",
  "key17": "65iUFgGXHvkTTvq5oG7yuYpNcpne18d1X8Ho2guxr3P6cS4rjUpGunp8gCxoHpxw6tUuZs2cLWeTXBnK81Lyttni",
  "key18": "5kuwbQrsDbMCTAuRJrp659a6YKjamWPj9nw8pkb2mg7gFB7gaobWN1WqsBXbeZJPsrYnU5i1JJfbNrKHpEm12V4M",
  "key19": "3wQYvPubnVAGjzFwC2KawQsSff11KXW86obdHFVB3rN8HBho6NpyHVhb9H9TDsAiyUBzgZ3yfHjjBRLorScyL1Bc",
  "key20": "HxSJtwD6pq2siekbgCTLWkz887A5LUpPXknCYfjWJXWtSuViAfnM5EsVnN6JCwRwCKP9G3rhvR49UfAuPRUUjYk",
  "key21": "4XXKHQ1hiqtoX4vZYv4XPvgsTacvfkd52E3R7nYCCmvnQTfQTBMWxTLuq7UZGLqDyYsLA38R25mmMdAXKLPTix21",
  "key22": "4F2bMcqKW2E9dEgquNXsD7xPUmHEBYzs7e9QytAVZuRZ8nePsi5Vsvb2XJEM69jC5qFfjQvzFnGy16PHpJ99HePz",
  "key23": "4ztSATvuZSv2HRsbkTdwLfTWSmCov8yY9MBPot6j3cb1LKNpvz7sX2xbaGsD1CU36MGDTCvkUtWcP4RRdpSt4Yyc",
  "key24": "gPRVw57axvCwUBwx9h8SkwBAAk2une5ptVzLnBmjxHvmq4yR4Jfhp7VZT9cQeRvGL6UkFA6j86ZPoUaqvf6CocE",
  "key25": "5CkBR4iEpiCFMWEm1GDaTk3o9u8429zxcLS1a1zwF7tPs5MwxDDooPeyhC34AUcu8rFph5LNo7NNUV85fZZc4xQc",
  "key26": "5oEDnNh8wc4vUV4cB88PcqYDRurEADDVZzcexY7Xb1ipdTFhivNQQXYHs71B67ud2iBt1emybCpNpRzMRsRXM4XE",
  "key27": "5Qnw5Pk45vYGuBepcA151gdLzmX2Ueg63D3XMXn61JdwtUkcQzL6yU836nroj4WUiZvRhU9J2jd3oeuC3HrPJc4b",
  "key28": "5ne95rYy6i3foFgGM1vhVZiSW6XrBPkAtcLb73BtdJmX5nLGBM3YTTuidJNxUP3amD4Zaqs8XAy4Z1JCekLhejyq",
  "key29": "3rdfLkoSTtzZrJ9BKEziozBtfMScZGLXGhvQe7h3bvQdANXkLPFpuJxR9LUb1bRnwwnU5DoJ7STqeGqFyQZQoKVs",
  "key30": "5oiqG9MF8xBSNc1Gd18geM25W1tSaeQ6fxuL4xJ16v1yJzgbZtAxofjWFt7dPuCHWQvpKR6q1GdGUo5G2u7V1nrP",
  "key31": "4WuQ92pNpbmF9qWYxeBiZuQ262WmQTSV1caEsAHf5iVRy1249H1iVdfM8u6UyRY61P35tvDXsn1TWG2curbw8Pa6",
  "key32": "4eq3LG5G3K3AHYQTDSYmuhbgw1HUiQL5TxYU1xpyee9inq4DHrZ7QJ8PioHddMbfE9A365LHsWbLLo9p9ddRZqE",
  "key33": "hU7K5GVqjxggXg7fcxkFBtXvdxhqZZRmPceNYkghNW1PsbwJV2k6D8FwSBtxbKh2GeWYcYXCYTFoeYgdYMvj3tj",
  "key34": "4KCrHHeL41hBMCdyz7mXHSbunS9gEAg4CLL9SdnJdWo3sAxMyuin3WeyRihPcRL9xSkvZi7Djps4YmGwUY36S66R",
  "key35": "4fBfVDTWpBoYzLC8dN7mBDCJJbKdi9FtvcnBfkbqEP4eKyFHXHsEUaNpdFmZu2nTRdapPKTt4YaTaeSmkNfGUxQ2",
  "key36": "2ez5tifS1CwakfuMahhhrtLDspLLiUCFShTE37HjFSB9ovtZgo5dTSW9C3xzaATvk9vtvptJ5qn93ctVo6rQvC6r",
  "key37": "3q3Tb7eSMT8Ve9ZB9sQ2HYvf9GKYH1V9xfxgwq8sJuupygD6Tsgt6tL5d6HwQk1QaBPD2rwUkRbKoF4VURLXbAF3"
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
