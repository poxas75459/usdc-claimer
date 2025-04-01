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
    "292ybaacLyDMig44Na1dwbbfXHCyR14qk1e6uEJqpMf5LP46AmBJ4f2aH6sgwoBnqRzq2jCc9FfFFHFgXa6VJz55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GgLaLYUVJApxVrrVsWM5vJcAgxAyzwmLQcp7EiErQbYdmbweD7EkadRxFebzzb24F1r9Lu5eX7UQJScrK7jvxFG",
  "key1": "uc8bpHPS4Go9PCwU3xmsALLeVVzFawJzxzSQVuT9o6ew8GQnyjcvtjS3mZ3ybJtHKEQ78ZcRypHUhymfpsx242a",
  "key2": "66a6Y73DVWeBVwPxFjWw4agrK5P27T5N9sHBqv2LEaLQqV5zWkkEyNd4idyTgQqpwbaYyY5tRkscp4gPFUvzTcFS",
  "key3": "4EGzFRiogoPLSgbDWSVv2WaYYZamFeaa8M1MXWJTktyRMJkU4UbxSKx9S3kXC8Qju1GVDCX8puJGJWNmmfHoZba1",
  "key4": "5f79EhQezbLpUa6Cjrf6ghknHxyRhSYVvoRThE7Nog35XsHoGiMr8aJhiqafhTQkBxts4CNkDgn6gAFzSbtdB2rV",
  "key5": "34ZzSNETserZqFH6GyFdMV8EfHLYMvDQ8jYTDH4E2qZ68q7TzLDTKpPsfobT8hPPFJJiHWxVJwMHdQ2dpa6Qqkgv",
  "key6": "2bWoCtBQiyL9TZiVSrzM6zxhvhpfNnkXggBDzWwiLj3u1Y2LxBbBUSLAnamLt1PdsLzeAGZeNmbAqGfqR7PcU9DM",
  "key7": "4fgoJCy4XBgebattTTB415zgDpvFP4nMXaTfP1DwTBV3Zh7JVA19avMNK6Vtunn7RpLDgLVX9T2Jjjrk56tKVJaH",
  "key8": "25gDZ9hBTrmExGYpZuwVhmkGtPBGWJ1KhMKfizFrwZmMrHqdxsosoFMKC2haoACUoDmij17Z6N2nhmhxAVZNKMpr",
  "key9": "37V9FBADyXXZikfX4sQXcrBWEKZMiPbEzNEFJBJy8K6RwY5fcx8JidrBUPwya3KT3koXvNmsUk6rgaRC7Y9noGS9",
  "key10": "3aTbEKqD1AgSESnd9RRePHSQznjmKWKLa4BE5qt4cAR2eV84MQqDXxprYbrjwStRjiChxh47vZxaWN85aP3qH1oQ",
  "key11": "4u4n9jyE5HiJw8ZgRXoj6rnMBqxfUzYvQhFqjvMVtteyoPJUsqSJVkhVVrZ6f8fBqRJbetk7uMgfuFdPjpYrRc3C",
  "key12": "1DESeKQRzE5FtJCLRMeA6thjQaDq2nw3AVZrCLmdQQZzsGs3d72bPar2ib7LW9S1vBZ2YGxfjMKyKHwoBx272NF",
  "key13": "2hwkeDV9pxqRMowfVfkRJG5cE2LGQ6aQRYTzyx3VsmxbWvMmLJ7GvgYrXYrBhuK4fW3wSecuRcBLDnpKwLg3EZjT",
  "key14": "5rBzYE7sXKuB3tH9pjrcwMf18DfgeKFZNMeuPsThigvXiDuawnRe6QuGZsZ8znTmPHYFhHXh44s838ehZH2PD2cc",
  "key15": "44EJgPBGcLU4JRHM6SPMjTodxAxPrHyhUvtG338te9e8pGLeQ68LTySwSz7ZW4Ks1fncwx8hBxpRWvmPFbnkkwmn",
  "key16": "3jFv2nJkY6NcL5K14W4psUnTsYDbs7cHSioQ3q6RaodMdPwk2hPmNH5v39JJ17xtHy29U9rHX3NFx9YC7hSQ7PPg",
  "key17": "tE92z6nWpp1dtSZZRtABUMEaoWpTZx9Xe77fkj4TUeq9vWNNhcSzC6WY4eMo3e7DwSxnGoA9CM61cpmLYdJ1Pkv",
  "key18": "25rvX2rTa8RYWMyJdPws8FPAi2Rv4iUw1s9CpXzZtwBXsTBoyhhgEzwqZjw2ViEAsZKMueis8A3Eb13vDta4r8kC",
  "key19": "3QixjDGGQJ5YMJLxwXbV1g8iRTxWCYv9Y6HChHygfB4oFvkHWG7RUQoEvxwXbPizP6Ju6DHrFxHp2VeP7LKZvaQ4",
  "key20": "4bWQyKSwGDXtDzu2fvydxqRYzERW7EbH5uggyX6YP8nNbiRMgNsZjBBdXAQaRUopwdyXW3qVPhZaG9ZMTK2fMUzm",
  "key21": "hnsDJe2ZP4xztAyAgma27g8nLkCU6UiXtkaezmaUk3HsuLqhZtZceXeCZ7yBRsNievg237LEAuv6vx1CUHLLoo7",
  "key22": "XWHZZH8yYmnYomo389ByhYevuBEvLtMF7hDyNVaAr8ckpQ39AsrnTVy5mu19ivonjTL9PpCfsHm9dQLeg4xp9nn",
  "key23": "3sdnNhSkhFM6sN4dPdGNdWn5NazxwFMoCWrcLLxfL2XNn6SQSdkZS7FRHeewtuYRtnATGnKTW3YfpVsR5MhFAXTx",
  "key24": "4xCwMYE3tnVkod7Tjg1tf7uaCpNJyC2ujAY6URNwTZzzhPY4XdSVYFtqfuGgWZmznYfYAiHt2BSKQKMdUcidZczu",
  "key25": "5ku7SoGhJmFjccHbqTv4mNduzWDxfUnqerbXo4HAkCiw1SW9JCFotWhFqnNYYzxyEDN3pLY7oxdM2p3h1rCYwBmQ",
  "key26": "P3o4RtwxitHTsTsBKPnN2GL9wzmVLQJtJ9H1qqy6KvR8w8tapmhVtqiFt94ebjcZm85R1T3RHLpeH75BDXUnwzx",
  "key27": "LNPvSwjDTzRdPJeKD2QTm1argFBfGmmwoozqoqe6Y5KpimrAiUXTF1zA9gsHr4bFf7nW83zFudbqZMWV2kXFdry",
  "key28": "37xFt7SVafT62oBNrEyaXf8SunTXat6xuvySzv3m8K1A3yFRkcZJkkFFeo4uYZ18LNYGxYkDpUv9NiZZfZqgG3UR",
  "key29": "31QC2WoYNuVgHbiKuDvYAs1XVWXPr13z9P6NmEcFLPCSTpcsHYC9zA7vcAnDT5opc8HjvFFfhNJ1ybeeRsqenpvz",
  "key30": "4QhQRKgeriPJvSrrhrC3TeQg3t4y2nLDETteSiirzCFdKw1PhRPGQ8HJMCHSqts3hEtvJQ3xpGSNnjAe8oEH5DFC",
  "key31": "2cxPm3cogTJf3mWXF9acvUJ5mTjEx7yfX33kVEZuZf5BYXjMFT1iEw2BZo5oLNFVgrhtR41hLPFzt3w4C3MkBsGc",
  "key32": "5pFeKKFPCRq4FectRjYaJVbdPdJv7x5vjHbp3dug1unQELTrNuStbQ3wmYf4DrpAQzcQEDroVse8dbL3gKYnPkWM",
  "key33": "GXT42w65NRAzbysJvFybEuE8mkNcqUfLwmBEH3qJUFH969YypApUDANBoLJaUxMWwEFq3gtq7vqWdEn6NgEcbFn",
  "key34": "5ZiTQT5PGUjrMNht2VWqWpEtRESZjnk4qFR1NSQRfZnjjAyTawwWS6piUodheb5cgEBckWZVX2XQJ1gq9NptqBaA",
  "key35": "3nTVwPHFGdMB4E8LFLGKrECgJJxBsJSiXJz1Tf3d1iwi7uEVBk5frBhGBgTX7ZLr9XDsFJsrhjbhWEnXjRqZNL4h",
  "key36": "3YwDaDqpJoCnR9KKnexTRjYwg7niVuM4xSM7Q9JHZjcwEX5zBEzn8xTkNYPHq1CKyZPZU4qNuktEjJYPm1tJT9yH",
  "key37": "ZAWXv35WLEwYhM3xgvudPU7mDBZ8pBRLeAWEHLRAmqg3c4FAw4A6ZwQk7eCoiW4nLLp22XEizg8gGhdqPBkHf6p",
  "key38": "4zxKMyywCuoaqReEB3n47hGfHJn8JkbfMJmV1mYaq1FJyhMVBtiKA5UCwJXpWBQRp2MpvLUoMVju34aMAgSNXKv3",
  "key39": "2doW99tdwBuARtXAgy4nsJHy8e6sdn27wb368WXXiEDDUEGX7qNFiMTFGL2igjnNuoFY1avPsxbk1D8MYqywq8pF",
  "key40": "SonqfmrNFpg5yjf9Z9Ma5Y74bYSYPhbfhft5RzLZRTpiDBL5j43WD5uBfeHg5kqpjXCf6gPediopHbL8d8k2BxS"
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
