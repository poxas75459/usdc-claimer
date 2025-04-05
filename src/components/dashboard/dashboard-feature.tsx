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
    "xVqu2KAFTMRUE12sxbfzHnimqnuBPyzW2ns4yCMYdQ6f22bV6oLCdNoSakKyzCsfuJT7TmTqZzDFHY6cTms122g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3swkdJYGERTs8C3wNqR6fL1HqJ8g6LJHpGq37hkJKPub8EFKar38uUMuPiM9WX3PwSxMbcMkQNUJhd3ZMGJcCNm6",
  "key1": "5CNLqYuyCXTSYDy4rL6wttA2mSzi7uK2tXsU38xVvV6Xqy3y45HKJZWBwoNo64zC1GAEZfsMdQgysa41Zf2wcvKg",
  "key2": "Qej7MDchhBLCPVg4kU2RUig8CSH8WdcuQ35iHXrKHArc8DzPbdfnWuQf7FrR9VphC56R7G2RwuFq3SqG9EMNqpH",
  "key3": "BRt2ezMzngc6QSuZaPSwVRnbgnP2DV3faT4vkxZLEoMXgfyBxNpr2JfWFy5PCX7DTWCopu65MctzhiQ4rokJ21d",
  "key4": "4xhzpcujKQqy48GQS8M5mFZnsrFMMazCxbfuYMKbpkEdo1HpyF3Tzwd7VvkCtNZuvQGAsZzoVm8tFQhSXdtHdfAs",
  "key5": "3SxzCP5xzzaWnej1PepdH7fRuvTmNqh8kZD214qHHsMXiDw3ZErKCudDRw3mqKU8mpyP89fCTZXGhLiwKpskCLbH",
  "key6": "4xEssrxDmMQHAXLJWEWMSfHAZ72gpsppfM94sMkxBf25EuTvBrxFzGnHaJNPoYsVzdE8ag7a3MkMt6n8ZNexRE8X",
  "key7": "3KArKw4W8aH1vpD2ktVy4cW8MHgiUzt1NdGXM1NeEw3swhAAALfm6xypbxrzNWf4aFNPH6KndwwLESQGjHVjFXbU",
  "key8": "3Pp1hMdKRM8yRanVL1oU4dPuBToGUKW14f6rUKQUD57EW8ADFevwFiu4ufikTcmYVVUNRDRgjnExT72pm1iEB9L5",
  "key9": "4898KtFATq1tFUueoqg9Fmpny5sQFgHtTjsJSm6FzJ8ua8BuxQySe5kVGS7XJ8tVwY2QS9wpvoVCSVDukUsXiBcu",
  "key10": "2gvTArt3adUDi6or4t8yp9DrWX9oNDQgWR1cBFJTExzqprWrvZJeESRSTHx8vQpT7WigqiLxK4rJ35BdzGu584da",
  "key11": "2o3do4wmoW6PGC5gFwvr4sC18WoyLRftnuyGenUAFykARveDGuXUhQxnBLYrUCZNiD36xWZtULg169cfVSNqBS2y",
  "key12": "4RXu3dh2inPeP73Lz1ZNcRZ1JkEpZnDwxTWkawAhmLvnCZsSoMYftK58hWy8zmwyKzK8jdsu3H3m1qTzXFQFLt2f",
  "key13": "27CQpEhE68Zx7HDEPwEYAJgtxm9kjgK6AzZrymg6ssNPTWrPjZcNUeD67DCZtGNcyuNJtYtnzJhGnToLoq5ervKS",
  "key14": "5sNALsf9AK9sB6VZTomVqLXLooGEi7YPi5tMRsyAWiqfFZkWY2ysdeLEyVdY7Hqrwgz7sy3TBoZJq9DtRGpACx5v",
  "key15": "3JNJswp7xBNndw1cHSitEomzCjrL4QLsicYcMCoVyVYHykk39jbs2FAEdLDq9qz336Knv3NAX4hNnj8rarRjD81Z",
  "key16": "cqGhqJKoZz5kdyYewrtP7ucM46dmjq4oQMAGzvcP3EEsTHUgMUTthuybNSK1nV35LDWkXTJW7Zxur4x8faKVZRo",
  "key17": "4utAm57nueU3QZLmosJNKz9C1tUR3HqV1vmDHsdmL3tJBNrvcViTYwGibHJfW289DPgKMazrCVDYtabQhgaZSbDW",
  "key18": "Z3UasUZfMAkmc9FKZQRWsKWU6AttpFvQ4dSR1zXVjM3oBgy4YP1JFhqk9oA2R1bfXrnrFUdDSfoZtNwHvu1JrZ2",
  "key19": "2pYqsiHXRf3QUaRg9UeZmCaMx7bS9HotzjPBZS1QSEsVj3Fe3XjURLYdPjJsy2uNshg63eT3Qf26FYAPCCwdJywX",
  "key20": "5fD3bAbqT4ebMyRL7Kgp5DsmJiUerQ687NHtwQgXN22dH6HYy5YSbtZAiAhLNpvvkHkc5545sN2D1MWbKhNYAFrx",
  "key21": "4ju2mcC7KmvfFh5Qv6X3vJgtqJprxiZBgJd4aEerUj4HeXjDczpAiZHNZyh9vVHvaWcfQukb9wTqkNhkvM1UuDb8",
  "key22": "28aVRLzg7pRafZyvJsbjCfbbdeiEQusgn4eDwBm8zTxY4joX7cQa5HcKf19aY4goH2gFU9kH4MFWx9SVqT9UyoQ5",
  "key23": "4xWeVzT9FztGkft5nKLmNw1JJT1kURc6ZW1NtaYdJY5ihH7bC992U95EDJGktLfz2ok6UUTBgk1XmsrLhftPSN4F",
  "key24": "3wb3mvzfm1z9JZFNWa2bGgvZJWomRpNuMhnzc35BDfsfxYCpBgMv2GZmCh5QLJS1t283ZxXB2CHzFXWCZhytnKUR",
  "key25": "3jGntZFh2ja25gkjtX9sYg4orpwGjLzjjTbLWxJ37Es5MEj6oD2qUnKBAnDy1hSERTGEotk2rohZEY66czPe7sdJ",
  "key26": "2rHKNHe6iqn8QbX5YGHeZHKTmYjj5zX7sBPbLBxnjaiUAEwgvcAkBEjvf46nnB6kxNxDrYsrim4L19Cy23spKTXf",
  "key27": "4ActV4pP9oxok45V5iqivoQviVvWXBk8YmrnZoGQwTX9MrRawEEvHaQp1greUtiMNceSarAffsjxewF6AwU1bUaA",
  "key28": "5QFgcCCvaeUeneJz9XqPzLwUdSABMXzYSVL1WCUP5384zTMhzan2PCwDgoiQfxNZFCBAy9UHrnAgZAW6kSDjxBhs",
  "key29": "3E8xrRNFqYzFPkAgneS4QBnBG5yhzB7Anh7RCe573Yp8c8i1DibF4Ya4ktiKP6c8mNq48D8MJQhHxDv8BgUSKGMt",
  "key30": "4SkibszQyjBT9ws3xiZScUWbz8mhJj4Vsy6sp6E7xvKaRbbsERkQ1mp3VVVDq2D4C3zD7AjDDogh3zhAGwjT43C6",
  "key31": "4EqwTDBhEN1EAT1xKkR1MdzCy5FrFuu1gAHKtuVfREWe4Ah27ojZGondCSdHKuT6JfccECq2yvDyt9HauXS5HNeh",
  "key32": "C695iqreigHv2zPSdQLPdJFdA9SpZzy4hatsWYQHUkd5WTw9GAQyshDLTb9bHqnCutcUsEurYUPuCUbxnBj9wgT",
  "key33": "39Jf2eetBjkpiRmkRELHWueJD7ULX5NSPVWKRmstXWonCS2FBCNzHMWXMeWen6jHjjwmhTk1ycdgVmXFSxJRaBgY",
  "key34": "aTZjCCobpsHdff6Be2BmxbeYWeLjZQ8ocNSRbQFfWUAV7keZTMrtGUEg5jy5txJhGCA2SFPXTEUhhgke24m5SUK",
  "key35": "LYypjuU7eqEFcmAQ6JZtLibUx77KWRoFSmocGVsX5EkQYZX6k5MB1VBDL4QmVBo9YVr7Eeuo8CLJZXTPUv2a3Y4",
  "key36": "2nQSAFt6GpGecjyjRJjcbAd5PDui4CLARc5nPgtMYR28sczknVdz2uMvAaL3wBdM59rXjgB8E3bnTBqB6MfTXZzC",
  "key37": "2dykPBuaQvNE3Pe1apV3AFPkvQwCNdYBTWusFuXBoFW8hTiRhbxdJaHiph1FojwCcPVrnHuUjNKRf2yUy3AdCjwo",
  "key38": "2tqosJjomcwevhK9XVaPHWf8Zgchmv44KEJg4TzMDZbPg8Z6by72fwo8NzRmgNCbU9TsYxLQu5LrBtgVtfdko7Tf",
  "key39": "x3RydzgP9KNZWD6q8La6UHse93UUcnB4gwxpGRSBm1hvKRnYr3exJdWzo1gYH7Ti4jNAfmSCcQtL3Hq2BGFTyu3",
  "key40": "8usfUk8E9hcQLu7JHE4Ro3nsxX8NuKPaYwTzyFFAbFoiiHV9gUZ1AqZbca8KAJMzmgj725YcZuz4QYg9C88SdWu",
  "key41": "32pTL74hPRJFNPm3TnWgnMWcRM2EgvMqEXzRirsjWgCxA8sfG2r9Y7AJDssF81gmhsfnHGPqVn7WR5B6WRLSi5Zh",
  "key42": "4eia7farb4T14YbCCopEvYqa6668RoYTaFYHa9wQ7TBBofdSnrmu3Q1X7iPD9vHxVwfHk4YFizoEFUutcFfiRVAz",
  "key43": "5GcYBy3U5ttd4ipbEotcEYxiBqhaoRTQ2rcJn7cthrqndEHNikhCMvd6EDFe255aXFgRsDoo3Ae5pCHiuAeTycEk",
  "key44": "3ehz5ezHHz5LzjbYdrzFLZBs8CDbDt1jJE6TgLJGFaTBz4HfhrV2EZTrgvWumr8DyxZf6kBWMQmkARgUBzBtkpnm"
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
