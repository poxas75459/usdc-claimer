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
    "4vi24U515dRGfetfe9NmkMAukTxeeJPc6jRtKBNBZ12xbXGUpYJy3tjfhdD25hFpqzun3ehdqJgVg1W8c1tppwbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33h77Qgh6wYmeQ6qDH6zpeS8LsYVHDcKpEWfWqGGUhmQtJrdnrgKX8n3bkm4M6vrv2aWqW5hM6wxFwyZQ8tGBSEY",
  "key1": "YigqS7fo8UZA8MUzCKB2db3p5nWm8NSBXTfdz5UnRem9NMGqBS6hz6QL14ajCVRQptUE8BfxyfieUvdV5oHiKDL",
  "key2": "4R5FuW9aQcUgfSuuWydsZnB1PGYpEAbGAaRikBDm5KaPPDMzAB6R1jWEWo84LjpXgKnQdnJHE3V6ejYv8uRC1pFe",
  "key3": "5SMYegqK8hfDVe6ymEdxR2sbafZ9wdsX2AyzTrwB1C2cSLZnDZxDoZqZoENahdc1irbJzZtmsgtZzy6PN6EMDpb1",
  "key4": "2HjP2TYBtKR8qWHggMurr2cA7YWavDCpS8sRU1qFqTC3Yjd5JLXPWQnkQHKXMFwggeHYHes14dPve1BmHmHgkPy9",
  "key5": "23MwsKxFD2o5ofmfLobKc57Kaxp3MjVzoiRDzsmbmY5pfHwH3SzrBmp6Ts8htm1fLy23Rw1FegDz97JFXJudXoSE",
  "key6": "2fXxwbYcMRRonxq8NfyGP4KcsPqQJjaNLcwAGTLKEnMPuu8cCSGkGLkUwNDw2MKqe4iR39NobT78Z7sYjjFgqpom",
  "key7": "5nuXosJzQQFLo5i9AGMoDdx8Vx8sCuuNMEMfuXiDdXng2v9i5PKAV9j5rNkgan9sz6eC25LUN8Zpq1pJSpGbxCXM",
  "key8": "PfhEpTLGJmE4pATbo3jY7Uv31WiFJLSXrwhyFhv8bHMQPmVZFteFwtd1vWJuZME5hRqGaBnG93VLNZ7LhCDsGPo",
  "key9": "3TBosf1ufmohuzKqniVW2NJarAopY2wnmEWP9ScG9ExrugJCATQppY8zS78NKpJrpo51KMFTRpehmjA2u3FeJYW1",
  "key10": "eZLREJhuRPvgjbFZ57Em5dXKSuF69P2FmurQshLZkQ2hsT54jtbCKX7jxHh7wnKfQ4zyUgYV3ZGJ8WDFYBapbd6",
  "key11": "3iYZrDzKp3MxyzyQDsehzgUJhhtwWgmqoZWQU8Gq8gnCaUnymZi98H3YoQwW1JX1zYUevV8GgG8VNiUgbNLSGmNr",
  "key12": "2CkCfFe9ZJQa6vTY8jpygBmruPkmTqL8WyWTuknLMEpmScfdKeY4LRPVcjW7nBtAzLkcZVcNSpWLHZhWJfTEcBzX",
  "key13": "5wB5cXg8u4DnoM2hJ7Tqd4TjqBYMkSPwDBbHPi5eaTreEa5VMtazTHdrkftq3wfUKy4iMeCnWhpNKL6wnkiMfucX",
  "key14": "5aC4nHKngwHuPncuaKe75yj3B3CPampFRJm8KTj2tXC83dA3tA2VMqwirgR1ncCAh3JLrr5RuMfQddi8wbMwh68M",
  "key15": "55MuPRX3VmhsX7zZFZA1V3iqyyznMv542Qpxtsq4qwxFMKnEFsMz6xmvuQbQm19vai3LcVFG9pXJ4NZhg2gDGVJx",
  "key16": "65ry1jQyNNgnwTcEt5wCkku3VB9X79JSHCkpPKTsMnqKkbpa1dUtXQcovGJnFjMbogzB7EGTTVaT7t7LUV67zP8A",
  "key17": "wxj7k71P8fJQz7JM3TLPPty3v88FuKEtQMmc8kLRfCrZzZ1ohCVyS8BKYEkGB6uyKLPLRPLEQGt9C8fpNbMLKgk",
  "key18": "5BmZ2UEnDAwHLFz3G5DdnQDtmFQRMMtQvyWNtUMCqDy5xCgmu5RxBjk5fjg5iM64deFNEfURdQteyzNieKUG6rG3",
  "key19": "m2u2vYgyWk18SrGpC4mfZ3wNS9czhejZ7JDJbwivXvjf9oN9HxeSv7PBv85wnbDHpeDaMkiazSjueU4i6FrJP1m",
  "key20": "FuBTAi1UKbyEJyZxXGxzWSDQR9j2W6MZ3WmVEDBnu1qeqWkqQD76MnMZ6NGoKj4Qim3Js2z7LMZjXZvTXC9soRB",
  "key21": "2hm2j7nALJJbcdTyAeLkd5sGGjjii3ngP24os85tFw55HsdiY1EvADBwPecdgHu5hzsUJajjFv4r38qidaQy1V9h",
  "key22": "2udTpQgKQbUwUXZueTQw13rpR3ToZ8uLSt1HPtk9QEhBuUygSKmx7ZCoBmh4W1uRbbMyDFeiA6qfN79UYcC1Xjaa",
  "key23": "4v1FkMLbZmQJHUWNVjvdcRb8JmrWDcHDP4noxJJb4DGxxzoYuD5YPh4iqnHUhZR2w5cEzGpqroifKmpn6GiYmSTu",
  "key24": "2TMFN6bzo3iMqmJrHToNCgXjfPeD6opouEJqVnVKgUNkhzHz75awvabFLr3JRcZNcDtwu4gqmaaLSPFZy8CFGyfh",
  "key25": "4tSUiRjxVGZ1rUK31DGyJ2c5vwszivkBEgjBVt62ewBaZfHaE4ck4KnQa8CTMj4JEcBPvABG2Dv8hHA2qEa2FrKe",
  "key26": "3CPBzSRMrWPRrEfKseetrGN7eAkPWTKQWHACAQSdGvtBtJEUagJgjEgyEhdHTRu42zdf6HKUTm6AnJnMTwoGBEx5",
  "key27": "2DbXUMF4rcAdcy5BrKmuvA1LvC1zo4PNwL6Bnb239PTumE1x8QWj1bznGouAg8CyoZeoy284MgkctmWLe1ruvEVo",
  "key28": "4YUzsqUN7Sf3CXr8AyGJn7GcRs1qAoSgTcaEze2BRVN47c5z6wbgoufXHVKtvCphCrPLi1vcb4Pr5pTFc7cXRgyw",
  "key29": "3sVxideAGKnZaWnr7kzreRzENThgZbZfASwZ7D5S7gUwm5VNXiEwNc7c7d7n6h5XotrU7krFXhSKouWm7Mk2KVGG",
  "key30": "WatrKjp5EyrW11DHyZqE1DC1LcorL6aHgWnzkCw2CdBiT958o9FTcghJ9QJ67kyNm5eBadxMsP6xkZWyiRdoxHv",
  "key31": "3H9g5J2ycUtW9kDf7gjsvu7sWprRg2Za8QKm1mhr6acoebqZhagUP7sotxKEa6GpdyRu4Q1rhis88pt4ysqnyZM5",
  "key32": "5R7XWrPm8urPyk14nhvJfhQU5maB4ZC6EsCEMPsRfqYmQGSLxQBZFVWBPHgUMZ6PLkyguh8G6B2CiEuBd5ihDfnR",
  "key33": "TsPghVoVF8a97Veb5QJ8ubLaHiee8CHP1cTrnQRtzZfM8uBkfbPVxurQFYk2W5mt94qu5WsjZSqgfoV67cJrnvY",
  "key34": "5NJMt2dRbPArxg3hU2umsGrddBgQnfoTrjCBgomc2u5WKxfcfAwhCF8kNAciCgBv8DaadZR6q5jbieh3bFX43Ya4",
  "key35": "2dpxSgrw5RPiPLzF813brjjopBzwduGfz7AYNs1CeKhEg7oY8MJEr1TLgpW97qfQAHtXy5PinbHn4DY2DH3QhFgt",
  "key36": "4sjj6buVtK1kKMyARgVTcJLDvwkTjsmPSu8Snmt9x3EEeWhCBaDg2XtKp5eUCNV4Zr9WyLn4Lr9YNrKABerxwUNh",
  "key37": "3CuWnQ4TvyfRQjJJc5MgUE36DAm8iprXnpnwQMgxDtnwJUHxA8t95AU4xWjuqHS5AaUMcVm98QsYiFYsn5y4CrfQ",
  "key38": "34avZUhd6pbi6SuLaMkoyVoY6UGSufZgaiXJbHk3qxybQ6XGgpMZ9S7y3PebXAHMqwqkAYKM5GtT1wdcNpZNWLsu",
  "key39": "5HmvEajRhpt8VqdRiHQMg1yYhCf1HEuquh4sdraxqqv2RYasN9wPc8xgW9h99ZZsnbPb5Zqf3sB823AfXqcDi89p",
  "key40": "4KT6DkHctpT9NmjrDiAEMSA5ed6UT7nUhb4h4WGnTLniynLYqgd21GhNnS4w49fwoK2Le34jHyKjs7SP39NrG1Jv"
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
