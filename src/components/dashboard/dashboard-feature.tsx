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
    "5evCATZ3kTvxsicVSQxXkBT7Eo3fp1d5P184hYQPTTULwsQXACbw8SfirmHR1chmE3zWwjDnDGL9uaGFSiXDSBB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SDKnpR1qzzBzPdjehEvTRi557JRN4nE3D2KpBeQctUFtPVGkbaCM2QQXCunbsf4abnTNuuz4LKmtuFiNSjR73RP",
  "key1": "5F2i1ttUu2jwfLHxMZ6EAwtUvxPYd5fCTdpM9CgeBiBc7b16MfERhfKQ7cNDkj9gVat2VTabBTNDPoX1itZg9JAQ",
  "key2": "5Z44yU85X1WPhSdsWxDSfS42huLZsn1hKjAdefsPodcReJe2S7qmMUNGJcWNBjS8kxu3EWx8e5RDDwDMJc9vYyPM",
  "key3": "4Verbt31CEi8QWd5CEV5kjvbkGuKuxZAVgfyeiPuDQS9vKmEhdFxpvXoKQTrdUKQrSN93wFzXTkrBUeMNzCXurTf",
  "key4": "UsHEuPEQboXF9idXv4w2swm2ncY3hdQwkEzEkua1AktMQ8dP3fvosnn4RGRzumM7gdp7QrnZXGW8b5eTSkZ2QHK",
  "key5": "3vepT6n7okwwqURdNvbkDuQGE8oZuXPAT2X4sWaTyAmoxc4o4hdNWP5snM1WWM9bPDF2TFJkJEvjCvpuubJJZrL3",
  "key6": "3PZ8szQMZ4WST9GvbpJGwJ5XFfbD6Dodu382DQuVcozy5HMv3VdVofhduPg6a7v48KKoAEKCEMNjB6weWvHmL16",
  "key7": "4zpZ8FRv1KuRKVzoBd54KiJh2jTeVEA1iroPvoxdn2QTTaHYBf1EQJ9vdyDFWGw7mjyAJjdxH6zRMgqXQ9UG5KRL",
  "key8": "3iWzJVEYVN9MFt4zLJDMfFm9a8WExKaRuYkSamtXJkjEqJPdGoioQ86mQHdwQXpJSV4F2yjTD7Hf1R1ce4hKNhNd",
  "key9": "3tBikEcMeYuUPcxLfYgurSrxNiFK5AFTLhnWiSrNsSBLc1EfFLpQRHQu5dHGygesmXHuUJhhzpqkMiH7duMyEUVc",
  "key10": "UQSpRWLJyE3pPUJitWCnvu6WVXfuvsTLLBVezdWojn3djB48QUWWXPvom6HUZjtsFoS7JgDYzDfnJWe6ERFBQih",
  "key11": "4Zf2q7KZTXa3mLLHVQQwCdDJrrBP7s74iqHYZdNQaot7LzKKNEqhVy1S3ihMTaa2bn3YebHdkH9784v8VVauxLaJ",
  "key12": "AguFLD1iunfzXUsCJQu5pB821fqHkfoPmc1bA7Tjch27B7um8auFLy7zT9xUyG7eCo3PrvhWNMtWXR7rWneT4tW",
  "key13": "yoohXA7uEx6o2Q4YxaFqyXbMeepj63PKbakH5WhgoWx89RFvLeinjuhNreBumntWY1spNe17koDfckSNZH7CPwV",
  "key14": "3BiMxWY6Hw3NVhqrz3hoSK7oUbq7g2Gt2dTorVHW5pjHpTrsZium7dFf8JMTZYVSraTvv9kLJE56RJM2RavQtrch",
  "key15": "PV5pBvinFYzTFhsUCFG5sx1Fy2XwQnKYd5ceo1srh9eB6sZfG8mz2QSdWryA2AZr7YcT5zoSqqzZjex9yYCdwAs",
  "key16": "5AwznVtSChsTqMoSn1Nzzcvyh381zNCDC3Ttgr1i9FYvhNTq5BzEYD1iPNB3VVUEK8bd6V31kxdAzZ6Zq6cZuAHP",
  "key17": "471AoJZfPptyaun16DtZZTUYwf9qBtrL7vARpnGoffXYUghLFGP3TKfZDt6sdGm6XSiirCJPRMA4bMCCzhzG8gUz",
  "key18": "56t5uCyLjimVJUz2M1rCGdqUAmkGZ2tk9SXyD5dS1S929ABK6RrpPo8yWDuW2RKPGNpZJi4wwyWtaWGw8fdzcHzp",
  "key19": "62Q2z5c9byGknBb699KWzRnraJ1nFqcTDdVkBxu5BJv9v2tEou4KrNpZS8h5TwvgXcE6bytZg5rxumRWg3DHuBtk",
  "key20": "2EvBM8pecuF6UZwziTkh3wuT2D7NZ8eCF9E8LotpvaCGWgFEsHp71HEaMt5L74F2vi822cpUVYGsEMVKgYPUtFTP",
  "key21": "AQ3iJTaQR8Lpxvon3o9qSyc6HUdqnXL2nKbpShgr8ZaRsbgDvJG7LennbbaxBzfaqvubLvUNbNG2bXsaNeMGcRo",
  "key22": "YjhJAQ2GFqwxzd35kwF92KZZaxrCArjR8daG6oXyXEJfKF4ZqceVfEfj5jpJVGc5XU6n5WHDt3vZaoVBkW7WU9i",
  "key23": "2DDhfN7ocbjyfNyfN9BPuhbg7FcqQZRYKp6ZSMpKajE59VUMpcNkb1hu97NCJgfvBaEDiUjoB5FkzBNDL28M4p6D",
  "key24": "wV1VmSqorKk9ZATTqESoz6zC5ckdibagrGEp9PoRRF22wB7xuPvJtREB3c9HPLpXUoQ5vX936fXqPqyosybwqB7",
  "key25": "3kCrQtmyLE61Rg6j9X6EH1P7fXoqjXSWirT4aJ1yCR6LTfzpmGqjyYBexPE1wWHTzoMXYYKA2DAGpTxC27m1bbao",
  "key26": "46nST5iNt6HhhZDbCvGV571djFXX5ypiLphwrgvT1qRFCnVWZu5yxEMMxtdMNeHFGyew343JYwZCZPUQLgBa3qk8",
  "key27": "tjEj27JGCWqmjBnysivftn7TFF8yMqSaEBr9whqEbvgmwQuEgRmxneJAqar7tF6xjXknfR9jSTk8Zgxgn2VQdJM",
  "key28": "5rVQTWskFuTGvnspcUHXaV98wL9hVd3EngUhDF2BPz5mP4L3NkEeD8xyXdQAikfLoMCj7qmD37gj6xwjRbuSc3cV",
  "key29": "Wc9UT4RnK7u4DTWrPMFWY6v1aJekxKu8EKqBzdqXK17AsgY5PWxcptqrmRnsmckW35ehXKZE5tdyQJLzAebU4BU",
  "key30": "2pguvW7JKP33PuQH26t9hujE2XA531MHMutyuJk4RtMsedhfZnY6kG9ST5z13kA8Sg97FwGfsyM64hpTPJcHtiqw",
  "key31": "5rEq12LW97R4Tdmki1DgWQUV4FJMhyhK9fGZ7NaNaWvfP41sRzE4ApQVE1XYPDttGuFwXa8AU5LSfnX1ePkcYrCm",
  "key32": "kvTnKvbDsS4eUkjDzGR4zbQRgPHNMYc4nxArq916jEhWpGQr2iCYKJs2FxLrRhkwvoF9sdxDddiVYxx3Qho7mSC",
  "key33": "5nkqYS5xYLtEXkppxie2aPJ1Nehgcug5PFaZznG9R22iXYEop8ycU8r8BR2BAy4pKDqExvc2hzWjmAj8ghmFa7Kb",
  "key34": "2Jhoc2KUF2CbgxPKJf1tQQqqo9YCYdTKnv1vTLZd2QSarU2p4qqavJN2AJJSiMi5XS28XotYmcCyZftGijxC53QK",
  "key35": "23wXTNbS6xrjFpTjiGqJr1kDxyGqXHgY3RfX63PsP3mPhFCvaoNGvzykiAsRLw8M6Su6zs1ib4oGCZsctbhw2BHe"
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
