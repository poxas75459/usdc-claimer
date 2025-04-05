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
    "3M3Pks3sKEZ5zv19Gyfc7M6yW6Z5bB2Jfqet9j6cQxDtVzQC1FGHW1L4bD6ryVBVc8sBcEs2iJBDcUPqoqgwnkfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DRDZhBdhA2LxxbEDYrPDD4geYeh93Lxkvq9rm9KBhdM9zY2PZePhc5xg4K8jZju6Dhibeh6tABKJkesCSK6S1mt",
  "key1": "5qYTt8Cum17hSCBrqJf4F58ak5A47TNs4jARQpJKtE5HJsZCkk7TYiTAQ9RDrmDnZ9c9z7jd8LwP1o5deuG9kyw",
  "key2": "4HkTPTyjMqWyRJ2Tqnx8YBKpUzrrHHXs2aph6Z4va1eBDe9UUvgaPn3b3GP5RhyMzhwVwPCqTBqEb24Bgrd7BrB9",
  "key3": "3fnVeABhxzVqQgkB8Rr8sBD2oCFPMYanMMW7E1am6PPWYDWUHAsktr6T1awrGnSBW1YtDki9R7iReuyEUEP4Rvsk",
  "key4": "hUbbSoknhqegvjbzS4ThLsHkAi4XrmMMYaN1TXPV7XgUbZEkMvsVSL4nY5JS5xdYzhqEZr4mZ3bx254weQk6Csp",
  "key5": "3vTRK8qs9nz6mYPD3uQTsPpUsdHKmBaBCgTfTsvcnWc7H8yDMg1bBbEnSEPME3Lb44TCdyrcr7G8rYiHCXMnPM7d",
  "key6": "5yJijrjJRgaUBXQ1rYWCfwZjByFPANaxuFnbFTgmspxyR3djZ2r1zpk2tLwT3s6eK15ATiBxV1ZaZ9STNBMoaKED",
  "key7": "28nNEZyp1ou12dXM77vnNofierZDhLBACZwK4fTiwb5JQK8JUBv4n7ig8m3r7it9s4cZ2uDswrPkFLL5QG9QnnAN",
  "key8": "4J6vWnZtb7H1hLGkJkgNGkYtkzGDB3n4uzBhoMkDYtrBreL992HYEXScnn48GNwznJ5A3mbjDbxxcXCVQGPNNMm6",
  "key9": "2qoufeeWDrmRUpfeK6b2KmvU1ysEKtmn3w1hzroxPU1LHQ5Aiosees9kqFj3t36UjyEs58w3ywwWHTFXkNbSckMs",
  "key10": "4yPJewZ1DfYPijKofpn88974tuFvAanbmGC9KxaRv1qjXbBoSqDXcjq9CozFoXzRwDqQ4LMABKRgQQKRhmhKh7zf",
  "key11": "35rsYLQR6AiG338meq6cHAjX927W7g7Waz975tNjwa37CTv4qTh17Kp2U5q1oPB7pg7dARxDu8Y9chnTc1KDdE24",
  "key12": "ZxL4zyRUpfTJmQRteTyxrD91eQH3J1WnNNqdmxsQJQ1wpCBd9SUntWZrsbxwXKs9dXmHf6aRwWeoZczspbyPd3o",
  "key13": "LDndjWea4ECCw5yT8ZYErYstrU7CBZTMrB8DP9WVChceXQ6RoN3Y7igfgDZM296XzC1QqNaRn1SCJsKNPvUrt4w",
  "key14": "2mQ52aFuoQF1zAWtC6c77AxMpGMAAEi61xsosJDX7ZJHucqVvr1Hv6PfqjVKSwiNiL7ExDx751EDMR3tbMV6TgG9",
  "key15": "3z3sNvAYrzi6Kr6Ls2Vtdog2pgfD7UA6wztRmkeR89kbgSNc5D9iYAVXdxxnZbUUN85BBk6Rf5MDg4T6RGAQvfHR",
  "key16": "5H2igygpym5XBWdiGKQMNU4G61ktXjzCZZQJJkjmTwL23ykBqK5ZjZi1gfnjcTz1sAz3Sskgj4aHnTaqR4CiCRsP",
  "key17": "5SpHBHUxBQ9fAYTHof9aE5EkAcq7xBroJbswwPZnsYToCND7HMJBhVoFt8PiGPzjyntaDnPRkLuzWXLAQ1GU3wEh",
  "key18": "5mwXYw9AouKFQ7yav8XDfz757AR1GFyWYdzr5FFVcSYtRvRsksLLoEh1u8Lymg4whWQfECa4wvE7w9fFG9QJUa46",
  "key19": "3rXWLme5ofP88sC8GcEFBUHqw9XJXLSRQjGfMqyod5ozbrEwnN5Wnywhqye6S6uxXvPQbyZ5WihVoe9d3pGXTN9x",
  "key20": "oEUB3vvaCX9FDGDbiDV2ic5PzEmkg22KRL3qCLuw2q75Qyw3SDV8C7J5MjUTHC5n7yGfUMUsLkvUxiqy4RB9Rua",
  "key21": "41RYXCKtAQDSaS6yJKjWiT1AtkSTpwc6dZ8XRYMF76x36pkb4PPytfKAPy1b5caxG7z27diHiqXyj8ypJWe6NaMa",
  "key22": "rS6Y5HtLb76EDgrYomvMDVSjYxKbmykR8H6eMEHif8Qu7SVA4bXTXyUjZUWtue1Vh5mHdze9Ry1146SvEUkS2B5",
  "key23": "MjK1GQ6JwqcdixYP8FBz4Bx2uv6VTKby3XrzCzMiWZQyJi3fJxqN7fERVvuFUVLr85rYMrgkAf2E4rUPoY6hmZN",
  "key24": "2PnH5PManYX2KiHmVwtwQiR1suW8LVWby9Zv5X44T7BUXpFXdT2vJU6VzCKxutZhwwaZRjoWWKBi1CNmyY5oaUHn",
  "key25": "4jn4TR1iaiW3buSAE8WhY8X1ke3nPvwnYjqiGsy562Rdot2qKA3j5mnvVpKqU2Knu2HyuqSQVaEcPJHVxp4Xmueb"
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
