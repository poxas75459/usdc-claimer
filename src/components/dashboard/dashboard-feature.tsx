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
    "2g9PJqEfqvZKjvLNUHHLrKDnUWD1RqDsmcwm1TA8GDtM6mCfik73aLC3ZC61fjzqrxygjBVswPMVKnhXia5UAWyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S2YYM7Mni4bt77wDV51EPWtNigZiecRL4PWWA6PnzUVt8eGaKJbdbiLfARCERBYWEHn8EyZsZJSDEiNCM4oCuYp",
  "key1": "6TpV5pNxY1UCpH5T2MGU6WxGwcaD7t21YR7B31TuGEfqESDFqMwieXRMNc1ejC33NJUjCrr4YMbkZNoshXaPdjd",
  "key2": "5XyWfaN9RehvSZJ8jNNvfm2yDks6vpDS5U54FU5k5zm42x7scEhLktQLxzpDFpx97c9VNPqXXCd5aVodj2rjMmC",
  "key3": "2tvtgDQXazK3xcKfmfYJUrs1NW6JCeTasfqARPTn7ZAW7j7sRTY46iLDeZ2Fwg2m2UjJ9ysghEWrD9GVBFgBkNcC",
  "key4": "2oNWtBsw2Zfytv5wfNKvgYECNXmfEghHLiBemkvAbYVzvqdbHigXJgVWEmLxaMLcEHCZ9FWRpnRxqMuvXtBvzg7D",
  "key5": "KpTydvgGRu167VqxGC5YpKzbZsx9GjCgBGr2QLgYUjWf7YVEMYNEfVknLqzPTPKNaqAhnwcV3DsuDtpLUnozE9P",
  "key6": "4FXj6WWaiVqQfgRUJTvbBXf2qUALTtoXJDTRFkDBzB77dfFYyvzeBhEWBiD2qaXhoa3R2SdM2jenAzMHtNGoHBW7",
  "key7": "3dRnHnkWY12PrRuubcFSfqRLbCRxREcvSb8TV7PvRoTLHpACg6pRGd2qUqdUP2ZpMMTq8b7KngryV7xTA9CEmS7L",
  "key8": "2BKpS8hx7b5sJsnUz3JhxFwob3XiEBcyi2zTKv9FHBYZ4aFDFFYr5tbS6fnwVbsYrz91Cuby4XgcgAvcnhvxo8qV",
  "key9": "g4v6tmEYDKgMeLsNE5E8AVVtY6MxT1Q7XDjf9YYEBnnXdbHUUFbAzEvwHqHP5L3ZrJGYLmCNTgde1tcKbT2RqFD",
  "key10": "4o7fdSZeqX3oRM4rdWTRn44U6Bwbovr2sm5iDEygn6t46aeaZugYMA8DvdUkLqePeaJ19f8rmP1TRiEAxe4LezpQ",
  "key11": "wL2sniywC25dWvLZQVzm7VfNRm4vAZ9f1Ani6852cMDFNG3HtzEto326vjcikhKh5FUpcwHVBpbH5jCWHtYAHjF",
  "key12": "2Z1wZCbMnawHP4aNprduuCUFoy9xHfW6kiCXkbQoHRbGuUzUW2jV1Z9Z1YUWnBcnq6BttbtsjTTCBtAYbvocmwnp",
  "key13": "hoVF8gUtZx9ob5f62xVG9YhMpYCxLp6KyENHPyd5vVzCv2baw8H5ezfEPTtB6GnivGrSDn5cjCmoVCBy6tJzZf3",
  "key14": "3eU29cxAhPssrLNQeZRH7L2kRkmu2n5tcTN5B6vj3wt5EzfKymdTtuNNcNBjNsR1PSGET1WQmQtXdb7odj8N6heF",
  "key15": "qPWcWStg4Ch7sSer2T2hTAK9WbKgYuWGYfx9KktdFfXcSuT2MQisRDtn9WH1eQQuu34jC4w8ubjFzquNyKQD3ju",
  "key16": "3yUpg4Zdj5SxbJmK1jsgN5uxqW783VdHjCLx3GnixQE57CToPhiWKbnCCovHns7vJTZf2RMHgz6PMYcz61Hjcicd",
  "key17": "4asNedggfg3SG4ftsmvGkMporgT41x5CD9MH1sckCJi2ycP3XnNH1zV53u7XcgYXQ9Nj53ybRZfn9xvWNhSboCEq",
  "key18": "3qSBBckp1AsEqkR2a62eDM3bxZNyCE2g8mNG6d4YQxxorod1NUx1W6vWFqsCj1ioKQZhqSMJu8sYu8fvQmLPWaR3",
  "key19": "3kuEwWQs1EHLqKM8yryQXaNRj1RbFWpYqPx711z2rSaJZKQmRuNwZbFUc8kJ276jKMm3XkjKDDdqZKFVqTocurN",
  "key20": "nzjLqUzbhvEe843rZimn1ZH6qEhZEBTZNzRj9tgcTk5zY3zeSk2Ve2yaW6A28f1SNKse7izmUvXYKQvFoh2dASz",
  "key21": "4v41qCpzYpiiftArDizUvYXQj35Q65xwWP4w3uPuQYk82AoYr15d1Gd1fb2xCG3f3BRh2a1YmajQRGFspRBq3Wk1",
  "key22": "4PC1yEYtSaXHGiFtfggrGJRJ8YJy7ouZvg2ZLMyZJaapp3G3hmbQR8RVYcunsgn7GiDvVkyjGG5EZGiw1KwAo1Bh",
  "key23": "nk2DzPUqXde5VU9CzeBLGWK3xZPxTDWYWixNjmbV3JnVaKBZfPeaMaVU6SKwksYDFb2E6TWdC8WAgtPE9L9t5pm",
  "key24": "3PVgWXXBiVpeDmXoapokaNW8UXEnNPFZ6koqq474r4XZPTrfMh2tuxnnjjcurfA59yTWD13jk8DyoyxdAHL9jKPA",
  "key25": "3fi18sSfAgKf36kZfsh7VmFmDnoAUS7GuNAT81KaPyj1Degk6qyaGWhUZpH9jBY9XSSmiYA5W4ADRVove9hdmTUo",
  "key26": "646oZ32fGVUbLH1Pp7kxim5rtCLF2XA1WYtfovevbXFUcWVJMMAS6nCgp5CaFQL9Z7anjyiptqxfvgjCtYx9VEuZ",
  "key27": "mfpHcGJa2Pevj3FMP5NfEFSXLKjpqCEKcdx43PrAS3gwfq8hkcXiX98wDUqCNbwhygCUgNTq3uQtjD93jDapkKQ",
  "key28": "26d8tRMwkENH2mmwsTcGaHPKcdZvM3FGQDjda8zmA1GpeduNR1M5dEa1GW4qZNer7MYiVzrkagrJ8a56RSdjbn1W",
  "key29": "2xcU3sGyv8j39XSZE4dsZA99BEJ4boUFGQvSnz8Nv8E7CcM296iVqHmzu45SGExRiEYnaqr4qq41XAsRywkzfPmY",
  "key30": "wDj2K9o8WkWUAbny8h65xub15eabY7h1ZKY9J3LaTQJNdjgweW2CkhFTeHStwjLZpfTMgrucL3d3njqbotGXS6r",
  "key31": "5vedqt2xzUqWqCXrUXokQRVmgAeZzqvL9bmfJonsdy3DY3imokABEE1BS2jCRswq6xpbzoBjKuLdEn9hbgQpLG3j"
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
