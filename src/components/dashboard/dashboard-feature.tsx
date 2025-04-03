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
    "2sSyNGcJ8ttRDfJg8sXk9Qz9A7TJozguBZGibB88dwma1r9eK7Q96vjdeTifEiDzHezT7qHvkRbZTZKcGt7qkp7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3abj8Ri1LxHTgbFKcDiKKVhF5kCbyTdyn581WyyB56ZuVhQV9bJSBzVhBjVUSVoZNC8a91WXY1ojRPDAU16A6ZcT",
  "key1": "mnfPCCVCfmqdkJTVFRHgutNtPDRhBmjsfmhZkANyqEEoNW8YQNQVs6NJ6AUbrZxsVqqgrx7D7XXgYX69Mr1crmo",
  "key2": "2Bih36b3fBNr7F7LpZRNjyUaRRf5jG5UmjaJTdqYBAt7imCGnEyiidocNkdA1v1uDQkhqzYtS1UP8TwWLe4X2LN3",
  "key3": "2S164s92QbBpU3SgkWm9ZHhBPsVJXiGGYvFHrriUmTfBReJdEBbxK4QPYTXugSjMrXb2qeNfNZu311zdiULxNXfQ",
  "key4": "2m4E6Btf6Wir1YH53GU4fDWnxL94qP38hmC1GB4nZDEeCaMp62xuVdrtfqAkBALZSAXrmyX98mFqXfYcrYVTZNgE",
  "key5": "QLZycHU84fQUmYx7hNs8gWz1Gsd61F39U1yxonXD8gfG2jhKhQbhz7PBMn5kFEQreYdnhqmHiERA2EX6P6XDpAE",
  "key6": "4Dopw534raMz47cGijUAR6YaY39kRTF1MFsfgetBxJdHAE5zrEY5LgPPccGCRo2cdiQSshLtD8SJJTQdLfRRZkef",
  "key7": "3b37E9Ykw3Sg5pcsfUm1QEK9AgXeXoCVMhFfQz5zaSY2HEAHhnDrdrgcW8XqqEcJ1Mqp3wTBw4iPnfXuoPN1DuSY",
  "key8": "6i5VdWqL5aX2Df8zDZJ3tbLHtwFrxBRWH6xBhRMRoEQYHdDoyoHymZjZv4aat6iKSxnT15XkCz1HmeBD9cbnuS4",
  "key9": "38QKeGEQzjBDdDz1D3j1zhHssDfwqPS2nbCJiVwu7byyDvJaw3mdcX1bpvBt8J5vpkcw372oTpbZmq1jpAMQGeXo",
  "key10": "5QTuQJ64nWZyUgMAqok2YiAFa5FP1dLDCDipViob29ZFjMpAdiA46CvPcAhQ7KYKBwG57rfoWpZA6iBBqDoR31q3",
  "key11": "3MTtCzJXWWDKwxSB9nnt24deinpSSzGHvoApQbwUmX32dByLvZFbKDHeeQ8p9Rm88tYFagqk3euWtr4o858unQR3",
  "key12": "4ySPEMbpa1n5CoRJrXWzDMfcx1Nf75DWyBJjARC8qUtpiqKToNnGTEFa9cC7pAxT93htwQ7ZLsDDF2GYw2E8pzmV",
  "key13": "HqM8xKVrBHWkvDH3CqYi41SJg4NQcQ4NJRebBpomrLZ8utEQwYBEKsb2o429k2USZWtVamWAfiUWkkK7iWtYUnq",
  "key14": "31tgPoTADMjD6pYhGAJsET5EBednxkdcPmCat2zmtV97DDMtC2VUV7SGREQLD7ennkA2oT233KyHQjPRABPApJdb",
  "key15": "4gNcP1uL7G4AtcLJFSrWypfsRR1cjumHtC5nJfTEyvtHgXxyW316JFYKhspXfJrHZtMruubC7AFGcmUoY1WHhxqU",
  "key16": "2xoCXAV2vra1t6TEY9CLbym1H9r3XxzaAwokdUpqiKcnU9DQvprG9JSyeyHtD6HKuSnuA6GHMmgKe7w4N71gMPVa",
  "key17": "2Xobk66pV8zXJUeBoJYqNYawYcPGkbycCfSAYjedRzf4SB9Punos1uNxeGfNMMXUN2KchgV2gNhkZCyzYbfkcR8z",
  "key18": "2tRtZFQNyd6xfSifQUrvYhaaf9g5kGD6TH9uRHmWNULcR8Tx5BrDXiSsKsxjExV75BWDE7hfi4TzVqBTS2U36yzp",
  "key19": "5GtTyhJqM2UHAEBGBhMTXJKdr9UbdQbacNvBKHqMDoJqtsq1Hy8jWfnpTibcfwkCgGvuA2BcFuWmFNpZNRCMtqqW",
  "key20": "61csxA5wy6asxGMPFUUB5ffncapBTTFSzYm8CoSkS8DjqBYiTk3KyqPg4jeqzmKtWw5sZG3XboKorMsN7xey23Nr",
  "key21": "3wAr7QQtqn4skpUYLzzPiK1fQcen5n8jkHaeXXk4srCp3QVPP9gHUKaR7pLDyRkMaGi6Ttwgrp9dGHfhx264DXJA",
  "key22": "4SAAbbEUw7nohjFxojX2WyjGTVk5UyoRGe4CdPhb9jjubySXULAnQTzqrcxUPKX5ac9xFCM54TWsenvKxannBJmH",
  "key23": "5JDXZmvhCwwcPjbFyRCy6YGfBTraubFdSTUFy42ZvMQitGFp2YqvN4MDXh3FqvM1ELP1DVdzVwPAt1voNvLxzDe8",
  "key24": "4YfSCvK2gG4RFuTeiZNMi7EGELywPKkVu76AEjqJKSW2EZoXSrVZeLG7CvNk7QguGReyC9QzPYqnxSZYFDcZ6Mio",
  "key25": "53tH1dJ8ymdBM8eRp6b3ZubsJNzDuHuUeAY6aYoEQZP7FprqLb62j75tKaCrHJUeecYvtZPVs1P6u3yz4wK7rtXE",
  "key26": "3Xk7APTnCRr3ckKdJnLbzPUBUyK2vfBvKzgSxLb27UsYezT25HevzadM6wTvVsDbbBHPozYj1VjwZLK4VnM22TkD",
  "key27": "4XhsCGqc7CLDCn3Mr1yNW1PpSq11UWnCWDa24jzcNnEWMW3rv5EG2qgmBBwh2Bjo2xSk4HzAaD4NBkjX88qfbZ2s",
  "key28": "32yZk2R6YjVHnyJEaV9GjXCQbZ5QGFLrfqs8HEKmHTYDwCWxwKWJDDNLamAinEFY3mNA9f1bCZLUKzXUwAyuhoEt",
  "key29": "4Ghu8tHM9mPfMMSZg5yHoLp44oR9N67SSx9umeN6Zpkoy6fJ1sVUvUyNtHsNvYUzuDQKb8hSHNFNGni8NhP58kP2",
  "key30": "57ymseLtQxjtvabT8GGH49WeSrg62TFwH77X4RKbnHVwzqYz9v5XPrZJmY17RCvYBBepp8sYhdxGckYczVVovp5q",
  "key31": "2rNsVXstGs3xPV61gDYpGtUwDeCGM34wjd8Vykxo23ivcsapYn53dedkDRxLrVcLFXtcnbx9L9e3Cisq9hwjMyPr",
  "key32": "5pbK7uhUSrcdxbNdZsf1BBA9HNwhdpQUPy4SzqLLxtkfCG7GSToATeDEHsSE4phbCyFhcqu8JpLNz3HGKyik3Au4",
  "key33": "2HrAdjTDRLa7N3UszpPYWxSuAqMhu4UmGNajeJnkfEQ7Zb3oGszcpTWzoFGTkukmseSCEf9Kn68c5X3qdMQUD3c6",
  "key34": "5qPM2ZumB8KKCzRjqb8Tqa2gbcQQa8xZfnqu1cFf1EmjC6Ydp9rnZrHfkAM8Roaror9YA1Uf7hurTk4myKDeXoCu",
  "key35": "4ANBCw1swStuQ6ibLgLaSr2FoicUsCrWcfcyKaM4JLdhbByi6ZUiK2kgvAo8UWUtjBijkNfRYoXDA5m9ZTKvjkME",
  "key36": "2vdsGw6qVuLiX9KMEtihcyjaZprCtwDTgfJ7eBtzG9NFmgFCe589pVFUtCe77j3wUR8CRYhxBECZn6npWnj7DPyE",
  "key37": "49aXc82Z8t4PBqKHyrvN2QeSrKrByctdN7T48wbPsVNURr82Jt1SKhnsR2RRLkSKVHZmgRFBgedwbJjJUH1ZBtr1",
  "key38": "kx8Zx4wpwPk9DcdNcYt8vrWnQCMtGQRZWrvGT4F1MuiBiWYd7742yBAQL9aB5T3EqnqJDr4tSrDvAnCXifUEgsn",
  "key39": "51RMa3kTZyeuJbTPkqsmdpHiVb4vj5J59oqZ716aPSBve36JtQMu19h1KSfaA1yqoQ2sujWVzP4tau5G6X12EmmK"
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
