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
    "4R9CtUKeWnR5L2HcEwRb6R3qcN4oW36y55V2uiPkqGmRQ7nXtAU7Tsfvc2S71iUECw6kDbfawnBTCEyZF5VZ2YKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qmY86tSeh2kiBRCruwQNg1ba8AtyMp382X6JnNaCpFgGJjY2ZS9Fh1ugxggG1GXxHE1ZwdWeF3oAQCsbrNZB3LJ",
  "key1": "5Q8sjcaV1VaViJRMcbTmesAeHnrchtUGxfTWqJqr6xtyKbYeMRGzreYCW5UiouHntCi19oq8GqgKYo1qBFgabLYp",
  "key2": "4dSrVbbEAXFYi2AkKSqUF8vfYKF8kpqbxeKaxzhY58qfhmJHVw5VnD47EbPn8MXMqvXceK6iH2x7mVig9ZTpUJDf",
  "key3": "2LZ59xNWjYDTdfDX6CQieSKt6SrfDb3uc8NPiAmXN8nbuh4vsdRwXFAy2M7aX1NcMWjnUSXausocfmpLgtxrsW4h",
  "key4": "5fLvQe6Bk2JvHKZkPopBP2DQ52oAHb51d4U5oHcMQPY1z9RcwBMEj5jKyTvw8sB4FPj3yaexbVnhiUfypxZ2BJqS",
  "key5": "5owvxeuyz4icriQEQtJk7gCPbUzpn6cV2dLff3hSmhiEnJojxM1VwCSbEmyG82F9bcY2RHSrREAvDxiaYkJnLuV7",
  "key6": "2qWFzf1QJcqc5pdSaxejwDXT7fR1pkGAf56t7c6KYgnjkgNPVhWcmaxDNsWgQY26QLcq5eA91jbB19R17icASe9",
  "key7": "3Y7opLZbm6X8GiZ6HMcsoACaB3q1yt7R59JKEJEpUhBDdkVtf1XqKTNcL2QPCX1fZYYcmE3WbkHAxEPBaH44gXrx",
  "key8": "3P9sAYGMWDL2bCNr7MPsFCPa25K8ZSMd3EwH1zPSyQ18m6xK7ftaXk4aDP9rv7tcgbeZVmhbVWvTKEfUaYF9fA93",
  "key9": "4kpTsQ1DSo24MWduvYyhP8D4r8gsZ4tEmtdbu3zAwdyvVsX7XCwd7L9LrZ19zQJcBGErUa9wEiutEuRN1XrLGwSZ",
  "key10": "2mfZontpb5buMB6KpUoTCkRTkgLA2EF7UUvVBYiWq2QiFNFknNNixKWU1Z6oaH53Py6qYSADZNCVDpqThrMahaf7",
  "key11": "2RM11z2cq1jdoD2Hx7DirKNaspDpXqHAjzEBf7C31tPyiNhhC5UKyjn7UTZ2ybEjKuiyNNeHsJYnPitdg5aZqLfA",
  "key12": "59ebgQyycoNQqpwDb7W6A3YoxPkFCnUwwz2MamxvJAfTWr7s5sfuFAWBz24mP2jWHKUxaCEEARcshWzZkqXywyB2",
  "key13": "5QLUHJG7y2ofAHYT3S4HteqhSsCo6D3Fp1CFVLvc78ZCZGm8BSpx7ZBRLvRxtntJ94h9K6EfWjCUh9M8kDtAuoqj",
  "key14": "dKuc9fcK7p6X21QXFzzq3FcDgzCcx4hY1Z3qBvJ8ps9HTaYXkPRBbz7UPAAS7xXZ7xh5G7GZmAYKBAWuofRuPHc",
  "key15": "2pGaLWR7aZfJCvvLR82J91VCVXcmKXq9cn1aqXmrmbFaxCXanYB3nFApkmTNf9LtHLD62S97TjiEa9MQmPwbpjz8",
  "key16": "5HkbAXCbwisndZaKJJ3Ke7UYZQ7L4vcVJN36G76KznVg5WBQu3i7DQgtEkLWYqSchBYPdxT2z1KUakfJXManTv2q",
  "key17": "5g7Ez9tVpJfLqqNtUdGPGRwaG55fTv1AyjUN7pxhJUbHk4E4mpZrkrAjNtBLfPaK9pNNtNiyXerdjNasb8eEnQ5K",
  "key18": "Fo4vipTmxtyakhujWekaRusoEkTRdsc36HioGFn6ytKnMDQgfuuGcG8hLoVpw6ZpjBoABK9HFHgnDVjdvTpvWnL",
  "key19": "4fCPkQ5pVoeu1kJyjcEeesCGJfwHwFSjRVPt6vygxqaRYAWswMgtneYSUvjqZPGDdP18tUjovNn3fZhYDzdiYjaE",
  "key20": "4591GDRkvLG11SgJT5SbQRWV83owQCCWnRLWMKCEbHiqL3ofNN8hGEqwCRdfNJRH1v8CsBY7Ppy2L7xnLpUiwxQF",
  "key21": "5TueoouoJfr61x6AYXrLCXH9khFVqaxy9Eq8YasB94Z2aGrpqzLnUz7PhFUJ32iDFFvNSGgsipHeHXx5Vd46m5jA",
  "key22": "42aETNvadoFfzXm9Vk61v79PgZggjLteDKzHQT2TCReeyRzfxm5rBpLsMsQipsLpQvF6P5EHQdpVJRJk77Yxxich",
  "key23": "4AXRtnj6cGj7McSTLuRX5fRbydHfjtPXiZ2g6eL2PoxzkRnme7KmH8KiUtFNRXrTxGmvgcash3zK1MuFUjnzENzv",
  "key24": "55RDuRK4JsaYXJGHLs1ExS8wD5Nun8dPeDqjv9BgmGj62kuQfwyCmoRKiyoDUZLbDyPeVturexGCNwzQzAmpzEwo",
  "key25": "3JywTfofBAyhzcEaUePWt4unFkJkfAZdgCivXH9ErJsLNRWwXH6LUAvvQCD3A7TmQ3PQVcJ2NcmLb4R9U4r4pe1u",
  "key26": "41Bq8fwoejzg1xFTXBwmn6JvmFbJyZiV918KeF1QBJgELVcAo1EWH8xp2GvdccKfdZjKqSpkDpk6wjAZF2oVmSXt",
  "key27": "4yWhoFk8iUcgRhKrEHe1UX76on1tphn4aaCYwvzXEMwhASWYDu5xbrXNW2RUaHBocjVZEswQCYuzJjTWs3mJnXPE",
  "key28": "4Pjjatpw9VEdDBqBswjgm7rw4cpvSBW27KBWELJfsAunjc476FiReuniNVS5jDPyRKiMShk7n34wEtSxwzXAkyc7"
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
