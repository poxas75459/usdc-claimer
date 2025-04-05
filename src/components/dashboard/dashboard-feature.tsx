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
    "4N2Wpcudrj45s9XppKMPFcEto4nwtFYd6pgDzf5j755kJAVbJWZuEeWg1zKrxipVPgBsK6cXu6jgc2A7qWSL1fNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R5TE98iv8WM7RKbrbNXZBKbyaWpjdDQGGXngeyozrk8ZeBoniFRSuDpTwhWJH8jdac1qG6LfXfurf4HwywLkwNt",
  "key1": "m4fSghzLQJ2SUPj1LVPyvqF5nqJU3JsqaFzmbZzesp11eM88mF7qWANF2mxVRwsqyTMn6sz6vBTMNTqGYskHH2F",
  "key2": "GGVot57bvxC2Y9iwJDeazuVrToW122BkfHUdWS4n2i8nEVVSRVnrgzBsG3o1D7Cj7bhkVwXBKZ5QQRYJn59YTR2",
  "key3": "4JZFCypwY9QccBpekLvUAPHATW8UDjAT1xVvf3Xpn1ZyzCzoMvRncv1pd4S8cvM747mk1pK8seZx7y2kWMWMkCHi",
  "key4": "4PCCf8coDyhsChBH3kNykJN2H1anCXojyLCLv5K9QuYd6Z1HD8sB1CzBt6j1JaZv4mRKMBAgWgudz18314Cod8BP",
  "key5": "4yCaDxpnVASoPUa48QBYwr7uCJQBCXa3pC4fbQFxCFtBFr7zx51Nb2u4vn6G9Z9n7XoR2G8qsbScNpwJXjVeDZUS",
  "key6": "5uiDjTGwfRTTVLPG6z7epUhkfqWPfKyeiHTz8xA2vBpg6ZStCsZpHQcneup4HjcUExbScZU6KKsQm2Y3patSXgMJ",
  "key7": "5DsMbWJyZJtya2sx1NZv5igUwwSQPSEA1TnQUAAa7ErBdoeeTCP8faoTZ2ZSJBPzknLmTumJFbm38MWV6ybdaWmU",
  "key8": "H5W2VDFNXxbKXwFbaSTWTgwM5Aq1PgT2pWKMhgokuZceGXtAWTsMvWBnZEc7jopoN3Ap1MgkmfUnwzNi3wdo2HJ",
  "key9": "ht268ko3zzRvpA54mhSqMwxMqKtCPQVhgv7uWPMXkrKg8UDnqN73cQ9z6cZfdn74rETAcUeSKDtKboDiFowed7p",
  "key10": "2e18akt9EpJN9fBsf5JTKGLBN9VQZNBa2SKkt43fZhg8ETJxABZ35iBazXjYydokfv6WChPCxXmwFq1ASsmJJBNG",
  "key11": "2DCYE6zHt3ADSa18ieRHRJVuGzSAj5tY1gem9yAohsSTcrE4zqwHXqBMiTZk4WTMSxyvc5f6cJgriQcXmKX7se5u",
  "key12": "61igK7WasS4sJ3Yd9LXfTBu4fAYAazToFS1iK2MWwTP8nubCGh8gXn66pT1pRUZdqRcU1CSPrV4viaujjoEmbDre",
  "key13": "5tDKFvrGJCVHpPgsrHtp2EqHKqESVccmYycarGa5SZuWxGWvLvpyNKsip6gtjjPWwdiqNF3aHXcW9ZG8grXFe1FW",
  "key14": "3D4QykVj43Yk33fqunt4HhHcFVs8p3wBqK2D8CdLp6jfudfgcs8fvezeqof7Vqn14W4iX8M9yd4JLhA2Bu25PWb5",
  "key15": "4Cud8qxxveAomudcswfLLH6QQYAY9EWtGYe5DSAAtkBSokEDfZbqmoE7E1PHKMrsjYtPQUi9CKn6VBKZnWb32TM",
  "key16": "46XC4MkiRLTc81g7K1mEP9i249ReSqRkZkeWUjibfAPruHQJcvEcQ4EN4ftU2FH6A4HFc41Wg8nPLJEt2iVafZGT",
  "key17": "2rP5xeDYQgbKLgNfA8J5MTjtSSKvfRkXtKiSwapoJSmJj18Gfj6DptViQhkQwtxZ2cndcNZtrZB1HS4rkp95qU4k",
  "key18": "4GyutaLYmtT57wNKb7fUbUcLsSSFTfJmoeMXJctxrCF75fYFnistLEpLMLreBk3WH8sRDgcPq9CrexNAAQXh1gC7",
  "key19": "3hb96Rfq7rFkQuGzNtFxxvmtpHFq8XRqeSDsLq6PZxD9HK7Quc3z5Y9D9qGSi78WHXGsKEwbqD5CarBz9xA4eqVg",
  "key20": "57y22Bw6JthSR5HamWd9Z8GmUin8tqQ7sjYDd5B7La6uYcUQta8jHmMJXBnAjaUrmnLAQpYpsMdu8Eb7NmQsE8U7",
  "key21": "33ZdyHv5JVXzEXn4KZq1aFFkJFJ4LVdqxX3DsFc4SPEaVSnmxofNVuo8RGA9ZQGSKWpzwPvDEibZPFCUPfLx9WY7",
  "key22": "ZkCmaBJhuTPGhiD1Vt8YYNwpvL7W5LDnkvPm87sShbSjKc8SpzkwqRN2cCcrUVMdferWkh5swsSopsHwvjhVNDV",
  "key23": "62GHmEtobk8kMJ9YzjXpSmzMmHeEn1qPqrYQQyoBLN1UuNt3shs7it3fWcbfMkmzdE2rHt117Z2r1SF2NowxTYX8",
  "key24": "3z8GznMmQ2qiohFGc9saaX9QJiSQmWSLPyJrJS8H6rbCEZUVY1SNZGhHCgBDPxNYeHe4jJMToSH4X4P4PTGCeQSS",
  "key25": "5AnwbUyPU5jbauYkEi3UFnL166hj7ozbkqYfXbDZ9M3cKwr31LvrvwfQcmqfMXH9CQqS7hPb2oFje6dpbhnPrWAn",
  "key26": "6aq5rHLzNiHtAtyWo2CREct2MD3ztf6mJMaUuebXmUXR2FxZQeaYVAGFnJ7iNyH7zxw5jTZx1pEiR6kUM8fcc8u"
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
