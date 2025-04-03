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
    "2nPREdH4i1YsgVwaEcqJJRuxSPRuSfX4J8LaHXQ9tv9TNT8T9ugJPMpyBEVPinot2F4XUC4AwYouKnXWoJpYuCGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mSQyBXcq3AfLS8cj1mnfUg2xxczFTwTv7y5hg4pF6J2Ci2RnjRZdoZDeP11LHugLvSp4E9AaB5mbr13Foqrj3k5",
  "key1": "5uVtFPAEghr1M4VxatLN14gJBp4VpxPzuAy3Rt9xyW9DV5P8UdFbGLstVSpB7DLGKRZoyv1ZXcjTCcpvQCcoSqVR",
  "key2": "ySGfwxAUsjop7x1X6wmAsVkVGx6Tig4QC9zvCWwGhm83wmQY5Bcon7y62H6ydcqKQYtaZ4YMETtYyieviGiKFPg",
  "key3": "4RcUYhmVuaSAPc7X9UYK1qJj2m2c4wivwHp4JZQrgufkTxEwiuiTWy53fRog9FJXB8wDwBWdFXrxLXnBWoFfBZB4",
  "key4": "4RxXsNqSphEypUm4vMo666Ba4VecDF1xtxDK9UJVeAmM8A4AQ9GyPQMNqGTTkbuqdFhLjyJugovDfN31AEXjqLac",
  "key5": "eSCVMuHnkvreJ5Rkd4yrbN7gtpCC8J8NKFLgDxJgF4gEXY4WCQ7kBThdHFmiEBJWpcDG7uwB51X7itkJC2NE5Kp",
  "key6": "aWjAHvyf6fkGeRGXc1o8UFNrW3Zc1zACY8SfWAu1QrFRxK5GEXExdeNerortMLh4o3edAYc26UgvTyma1Jx9C72",
  "key7": "2ndqP5iMsdoCEMWdVrdvbC67k8nZYsjg6B6Bp95af6Xsx2d2qR2hHuCqFcTWbgiNbracfvS5tVR2ovUiyNNpuxLx",
  "key8": "62ieAtiCSVdyZQmcH9iAJLsNw7PwkBu2iiRUD4P56SGU36WKcVzsxgMcYWzyWRgkorZnkGeBgkoEaXKQDEx8fiU4",
  "key9": "qjyF3Ux63Stwyco749HUBThsf9nZW4wPD3pbdJhwzSqqwG4u1tFBucTcY1xkRZqWjMnZTZdireG9ZCaC7x67rJm",
  "key10": "5Ek399cXGFTQ6M4dR3ETTmTzR5xXBMFrkDWKFYchqMFYpMp8tj47pMYq9V7n2qXVEYQmiPUKuksd8rKo6Zbtsy2q",
  "key11": "24bAt3VZxLYPrwgcG4vYvSsHcbnfojKto1WzmjuiXDjWS3m3JvWaSKTFsbVDUvGNyD13NzsrthBk3DtZ4tQyyhHC",
  "key12": "3BkcG84shWgABMdYAc3UxcxQatfihLQ48hvTZBq1sntz9DBzvaC19tX76Wk84C9iK6Gnr4JCXKiuDzGzz7ftZqSj",
  "key13": "3n7TUaGt8V45W7TYbEYJmPJFGt6KGpRZ6VNnHoP57XCWW2VV5Nv5PuGTjx686NCriVvEfUG5QE7uVWMZUT5FPuow",
  "key14": "4q1Uw4ncNc1rRT3P63fQpnGscfGoGoA7oVJXTFgeESGegzfetz1CuJ6rnQLnLjwCvWDmSgttL2BrQoLa3gYj12JS",
  "key15": "8VTnbNT1CNb6denwjdYQRDcwKffRJozyQ9gGrQ5cDQw77GdTustrugzotvDi4CfS3auFVtmb41nSPmRTydpUCpU",
  "key16": "48BmztTsoKZ7cchS11wQ1d3svDdYVesqokc1cfLwJ7qNj7iUMprAFSVLmGvAQ5sNpj4QrTcjUUQSpFQ8fYwyuejv",
  "key17": "3rvgiW6aUi5S5nP1j5PQohwUdbtovMhX8aHbZ9YTTSLxzuVaosPBmauPCeDpdHHk6VoCACDz9mJGZYQWwNJUi8Nv",
  "key18": "4ccJiQhws4PmSNZtWCmaJUbph723Y7DxiDTbUFGR5iDZZwHRPnQE8GSdh2o4de2fZWGgnRVQzK5mgd5Rb7KkMRLr",
  "key19": "ALnD1GXrJpJpQKSoCqEa6UHAk24sTwGbKMCFhPtmn6tZkeArGf4Y4BZRy2QaZ95qi11hmu1ahewJrKbGbG8h5wz",
  "key20": "xdL7ScGc8NfrxCqSSwjFu2K2BxvDHUtujMrJz26649nKewVMzYvbPkR5u6aEk1PDSBnTWEDA61GkzBPmTiuQpKK",
  "key21": "65ViAeKmCsLcFFQMgdAcjzd7MhEiDeCzBcQ26iTqAwmPedq1KJZTitvSfrKSQVMjLEKBUYffunQnUHDk3PkaN1pS",
  "key22": "2mCCbXB7uW8PbRZnFVKK5ZY2czfiPAzkm5mKzQm7GZ3x4LYLN66K4z77u8kzTxaktDBnGyKZt3uXnS7EU7WHNaEC",
  "key23": "3FLMkaZAHFyUaMsRwwdLxWhfC96pbbjvJoxmuJUaZvHnstMXApfmMFh42exnDQz2cG9e1UpYSQKwsrBB6x6iYSmS",
  "key24": "2kUq9h6icDH4RzPZ9KfXS3tiAc3SUHBFGf36yKDQYMv2bt9AXyoWwkT7CT4vY8f5U3x2MS1Ts5kpRYBMJJtUimUe",
  "key25": "2jHQmzLwPQNE3aCAZwSZRTVddzLhcrn3acVaBCoKTyMcVJGdeAk9DayqBPSd9bd6iUuiFg1sSPoyRm6Yf2LDpgVw",
  "key26": "3LKXgcVNvq8XQibLhZuewukPaHaoCs8eikJeSD3xYE6uEerFKQZftZ4F4wTCEzGXxXhk5e7WMWwXGV4TsYs1dXyv",
  "key27": "3x7Wxsh6KYtTpWC3wvQ8SDqYu6WpYT2Nk6PxoQrhSjRvvdjguJgt7eSfzPdzHQMKJ55vK8EwYEtcwJDLF4fmaANj",
  "key28": "2Z9pNKE9PHteYHLwSoH41KSQDYJJF2tZGqp6f93y38ZRHqMdSVdvjZKVNE3AJtRPLHW1xtmueSgtrsnFFKw2xy4p",
  "key29": "4z3Am5X7CeDVt2Sutopmiwe3D83EHBHt2NZxruWdp4wu2aqDQdoKsjyTiVf8RPa9HTR1DeaUCpt512AaARtAkurr",
  "key30": "4LTPWJJ15wNxXQmZsQ3PyPthWxvYFgRKGLjdVW6iVUcVDLC8iwyo2S1FfVq7UHYVvr5AU9Tg7uD7dDQP6d8Xcq7T",
  "key31": "YX5aCtzmsK5cLbrfErZaKaBPq5VQTH9H9EbArSPSt8FBMttQeXJgyRWMms7Veou9B4K1w3BY7zxVTJVVDSJpLbE",
  "key32": "4FZgd5iFNBazzbsq3Cpduxx6Uo1WH2ZTijcm1vFMuzJPKWcdTa5NAYUp5Lx5YmwAgSxkGGy3JD7xQYJitrS4AH2D",
  "key33": "eEDMEQ2pbhgsojYVrrpgCp2ebnh7s5PW3E3Wis5WY7hqmVi6f1kBSXEP1D9xPHvJPN1pEdNmcWHt17ruhF5Kp59",
  "key34": "66vKXzpAj2vcnzAsGJwWuLp34qkyXZTKwJHRYUj4D1xZ7wajnMgQF1wjGFzBr5Pkr2fBo4LzA5B8S6yT8TsqPsnG",
  "key35": "3hZgaticCmNMqhzQedBsuJn4RS4hFqss6ndqstupMAciDbJbtaFTks24ogDsjKG28f8HJniiQbL4MW264mbrh3Qf",
  "key36": "iqZi92eioxGG7N2XLghMzcRHeYXXpExZeJpCsh89FtFicB57WxFqkt1tLkvmCEbTD1zBgvcL4BvcibZmxEadrzC",
  "key37": "5EXLMB8Fc7YeyewHFwGrVA5HGvvCce4qC2PTMWt2DFHiksDMupXYoQ6fJiWwFM7BKuVk7JuWZYva6JdmTr4mfiqQ",
  "key38": "QfKSBjEx9KTY2Xkbv2a4Pem3n8qcWL8kFV9eJFwEuZspFaNPXh6ATnCE6mTBeL93g3Bp1g5MGBoqKUg8jFmcGDS",
  "key39": "33W5xpVaanh4BwCYKDc4cNzV9858xMcnmVzZzYYPX86PSsDvhVTnPLrZwBy2sMpRTtfCETTdavs9EgRmBCU1UgkN",
  "key40": "5heEzrR8La6yJdxgRYWwvJu8SmEp56KmnMbw56Z1aupo8UQKftta7EBUPFwwMy6miqkiCQXMaQmtansSsEjsweY5",
  "key41": "2xqKWcHxhdQCSe5owGNPA9UDacPkrAkpXV9va6u9cuwpeQuquqEVdc5GuRgxyRG43yPLufhTsoXwqHJ9Q1FaAfHp"
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
