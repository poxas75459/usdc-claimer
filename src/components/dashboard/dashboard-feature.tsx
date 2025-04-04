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
    "24xT9dFVTgmnk7Z8jXS1QjqjQRWeysaxTovcAHJwBQ1tNsKUCeDFEzDpf1hgdxncsi7PZ3pSCvArLXqvj7SX19aH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PWdxmKiV5kr4Tb2uqmtjjaY9bT72mBRKFQumRcKs4TKydbQci3zJ8N8pPxGVaGLMsKK1R1SNs9gukEgPpAgF3bW",
  "key1": "4irLA5VJR8UwaUUwV8nDWycVWoKrfCDNr2enT4SSqT8tF2iE56dBJQoKQHF1ACSPKyjjsftbXJUub4bgeMM9SqGm",
  "key2": "ZSHRakEu9EryfW2jinyf8CmZQVXsBhU27aADHZDd1wFTSra8Q3mgMft5NPYb5Kgr5asngYq6rAuwsLpoxBGcVve",
  "key3": "4R8JtwQpFDx5RVC153htraWqXmx9vdg3ukTCZ3KYv5nQsyhKdPtGSf9f3NdxpWLAzTgxos2UQR8CCnMmG1gypkj3",
  "key4": "2dA5SS7CHpJPEHghPwPKpK1KQE5gaZXbx5jF7cBBmHx4wccUPWyofwFMxAgG74Bc23UjzgvbgwXqGNmkcwrQqLbW",
  "key5": "2JwghPwWeq3N3yqfYLt2FCzv43VwrgZCnCaYNugQdyNSkWzHGD8gK9uZkAcKM2f8keYneD8CEiHx1HLtSq6ADQNR",
  "key6": "3UYjhpVfG6RnqqAvooHEXAtW7VZhtufTqNnxaMugrHUBa24WoFhGzvL8NQ5pTAAZLfavGM1jehguU1VRSgGM15ir",
  "key7": "5WLMpvcEePRHYA4rRQGRfpwKsgBg7g8gh9hpd8utkz4Xz6AeReAhpesLcP6pYUcokhHwnoqqtCzfeK7HtC1u1pYd",
  "key8": "2RtuJ7XAWTmKVvHbba9Mer515Bv5JGcEPWvCkk74mZVqxvWyQwwqeahk8GWp6gbdkBNPRZLhBKqMPCjZQAJzkYXp",
  "key9": "rQ7jNxZ9WGdaAFJyuWpbMPxjbXuHb2R5GXUtYBJLnkenbBd6d5wBw3n4Vn9p3Fa2JyGj1R22FFMoKkYH8YXuGZz",
  "key10": "5chShdgoAejwEZTjKTsLv8FQwFug6fkd4URhVQUL2dF8qDVi7PK33si6J3n9RU7p3rcLEsGiYYK2hqs7G2ZVyUX3",
  "key11": "4UKcjaqejWajWUWtAYzGFCPKvgwbgNnLkxGQtdz3nMb2tE6t9nvuBC5UTwjUKejqTN2w97RcCnhAeT3ZaSChTPq2",
  "key12": "4y5aK4zrAzxtYfi6RsDBqFzdKvoDDRLcG8pfosHic7YwHL2QdzBt2BfcRYMEvsxw2r3nqsatfqDS23sSpJdatA2i",
  "key13": "4mGLojUoxUSQfbCXKL34HRoFfZZaogwtgoHHsgKSFVpGErdgEAncWnsJvk1vTWJMnEfyoKAnewgNyBGpQXPjcmH3",
  "key14": "3WgbfSW6o8JyQTFDMK1etLdVtpB227Ukf27thZB3BEKh2USArCSoLXm72MQyE5YkrHKSpPJ6i8E6R62qVdeD1osz",
  "key15": "5ZKgPZoMBDxsbTQtRfggZ3pSsPXbnFveDFZrwC7X6smbe9tSNE4N4767Uc6LtPSgmF6W5Qd72kzE9KoZYzTk2pSy",
  "key16": "9SF7vLFTTTzWpnDxnE7ZcjfBLJRHPHofYuDLJe6iMjqmLjxDgjoeNH2RAkfriGGo3KT4CVPqSeX71na38dSdH4j",
  "key17": "5rdxkex1aSUdPbxJFUpadKdqdhxnsmQFPBzcCvuB7eCMYdS1yFjBqwkUfaxVGcKkWgvChJ9TyLWftTzoxi4h38fP",
  "key18": "4wKFf6aKXKXX49c8CTjnQiXj9wjPL7xEEHCWVZWub81AKBgLZ4QJWEoo8zwzwniWjQAgYXKTRCcwvVa8pMkMBAep",
  "key19": "E7GaUVyyTc3Wkb4ScCRyRm1T4SxyQ1LU5Wzd6EcxGw4wAgAQrBzCYoZ5x8fBpV92Vh5YFaV3jEMUzBSYppuiQzc",
  "key20": "3gS56RMrv8F7V1rUzJycRJTvxScJVirYy2smkqb5U5LYJVGwxwi1Fvgav8STz34Eb68FTfGiVQKtiUrFLewsLZch",
  "key21": "2mTqPq1UvnruSqExd94joPqPepKy4kVTd6NWBsmrHbQR6JVzZD1pQijgLAxbQyiDJp8Ko2MvHdUn8JNHmWQiEstt",
  "key22": "3JpbKvsQv7r2CJNdQ7xpZyXFXuReayLRP271yXGEd5PuZCg7Lu2BcKoh7TVQQN1FCPYKGNM55SugCwvnCynv3tdJ",
  "key23": "b1vBu9YuzVwBWKSesHKo2xojK5Dwv1WC5ZGZRcW2Ra18E6yJQpumU2nJnovo7hsJSwDt7mnNf84WJPBgYbxmbtt",
  "key24": "5eocNkVcBWtzohhDsinDv1aRh4mLYWnYnUcXwvZY3s3o3GZ9grNX1StrfFPPiDscfJbhQjjJuwkw74D7f7uK2DHJ",
  "key25": "4vsVuLxbSiMDPqWnc8a8n3YFJkrCFYtD3i1JM3qXBsBu5GVrR8jPZHqRga4rmV1hKBEop5beYD4RJPiNyotbdKft",
  "key26": "5yGVfGCTpeTuPaCkaAf7VU9CHmBWDYU5jScRtu4YKkCrGXvrJVp4KWwotay1aWGWjDWqrh876r8PN1ojaBemQZAA",
  "key27": "3gAPMErTwEWw9rfXHfqqzviSdcmLX5kFU7bysizvA76R6LKnsiM2nGKz4H4nW6mdpw3R3z9GQCm5pMgvf2e1YUK6",
  "key28": "65JzJQBwf4TNfR5kd9kx5bAEAbtGdoBAu1S3JkdCH9CVnP9P5gZyhC9RZvZWBRBpeS3ipTsiCiMsDbgxL49ZZVG6",
  "key29": "bnMVnzaBzr6TGmNvwGemUnxYCfFz3iPvg3sd3phXrTFidfwYhS9vDUu1bprXsWAsFkmCaqBBzfLaK61U1qjZCs9",
  "key30": "xKmjxhnfiFpgKPM792ybbfVXVpxCgP8vtJ3L8FxAPMCLSdR5mMeARusN6vZtC9guGowxiTyn7iLVRKUQ9BBFarx",
  "key31": "3UrVrn4tkRhZWrWT5HqMaAEJBErBCdCobvarisFtfx4jtaGBegB6gfxwVSWNzKmoD3vPKQVMHu1JS6PcDYwBoVV7",
  "key32": "2AfZLcApzz2BUp1aPrFeWQC9fzS3RktjJU5aWttNFoKdXFJCzSqoV4xV1MMoWzT3t8XFEf1YBwXJRyG16JmgcxZc",
  "key33": "dCgpA1ns56KPMnpMPxUc3WkQcSBGjHW8StCwQPzN37PYqnXtN16zcwFnQm7KmXYZsLrVfAjnoR2Yfz4TDCCNVHr",
  "key34": "2vqyMmy1Ym7GPgbmxEu1Ym3rakTXRXicA1jBopws1Rb1dBw9m8xUbpWt24Dad9tApHn8tjrH6ZsLuWmA3XFEcQ79",
  "key35": "5A6D8iJGSdPptAiBCujWZWRpoG6STMG2zPYwfCfMbw2NUH1NEY5HXWJpTS8TSpe83GfbNBRYM9zhH6knNMJSHTr4",
  "key36": "5gk4RiDPa1F8C8y8GFhATJcyYNk4CD8uiW8PrekmzcbCKZXgs4DauUMpVxch7QUpVHYHrYDayE24TJ8BzZNrJGs6",
  "key37": "3q1Ahsrnky7DJJHGhVTah2iAB58oJ17bMJA5rZpXAi5y5Za2v1tG8wLqeJ1u27ETpAzXFCdsYwNiYpqEdNwPYBv1",
  "key38": "54oEMYzZTUx9TGzjsCKBL5sVWcJ4EYshaZLUgMo1y6VTTsKfJgAN36GWwBR7eNJEbisxPFWuVRXyFmqctAUYS9mt",
  "key39": "5am9bsX7BQh73rJu59Ex9skoLYdMJbfNcPydB1HBkBTDnHvkWKhYVgewxcvEb21mWaYHsBGEFnT82EgFPyFJB3hr",
  "key40": "3Sy8EQy2v4iNrvfeK5B6xNLw5ycDe8fAJy4Vg4eyvvQZ7ABpPJaqYM7vWnVSqYjYa4HgFnToLxcFBNs2TgE4XxTB",
  "key41": "2xygxbWG6D8u5KeB8qf895DzsHphPvALU4XUyMJGQFBg1gUVxr7SJXgERHdwU5hKrdxRxPkUNYTqHqVFkqimcqDU",
  "key42": "vuufaJLBdfvfSAYAL6gMZmPLW15jUUfiQop4X8NjjkXqtYHEn7F9aLWefom1o1QizUsxoHvsJVFD14LfDDZbJKD",
  "key43": "3iwnJ6d7ArfyZatoUn5Fb62H4rv3SzEQKxCjXbd8LCbyTxvL8iHHkrv4b8oUxJAerGfkgJNWiz94QFTbRCAKXsJJ",
  "key44": "3mZ74tFWW1WbvAjYZ8ztwVP3J6GAUTmkSRaDiWtnR7G2Afbv8dkmmZWJuwCCZm1LGbLvEyykTTioThh3XaweYy8k"
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
