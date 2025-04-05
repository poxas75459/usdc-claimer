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
    "24xoZCQVLfQeBqAswGhTSG2FRM8YWX59Fxj9ymcmMpowMBzqtzErCd1zWRKGmM1edh54wZh5PdcJJHdxYS4d1DfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b1D3iJjea7QZiCcsEbqjEE4XSsX7ds8iUctZ2rHREbpuGwtRTDUzAWqw1PL9CJ3iEwFmhr2KST2qnS7uwq3RcHZ",
  "key1": "pDH4b33mazwRkinf4JA6pzahuzfBQMyAhf3BzbVPFW7UsCmkRWF4BqN1eADN8TW4vJhfo9xGbQTKoa87hZhXpZQ",
  "key2": "41J4NL2RNJyWegnH4rZMwVJaQSvMC23EJ2yLyQusgowME6fVd1FdY3ACrcqCEs8YZLQ6pvYv1pQgL6RPSLHR2Q72",
  "key3": "5mkvMD9KtteB8LHKcGW7EKtwSt7rGgQxxSg8pXMq8XdcWQK5j75SH2vnzcf5wXLVFPkrXoaF3G2imzkSpF2YxAQ8",
  "key4": "fYTcujnd3nmQjAeATLwzyQ5HCJrDj4WpvyhA7B3Bpgyr9Z6RSvVQ2NerxuAzJCkWYqosraMZ37unes87S79mqRs",
  "key5": "3hHgFwaTRY8hxSWZYJTqz6PwfJtFh89dgaY4mCWsg8vZTRcNd4b1i3vSuFvhvswyxakLzVqo5e1Antrr8rpabU1e",
  "key6": "35Yt2z39cSVE3oPgMXXFbpXxvd8HX4WKb6qwrWo5r9fEw1TKF5FXof4eMZVnAYBdTKUD8yHUJopVha9yzLnJfhVc",
  "key7": "qCAEgRV9xc5eVnPqJwZd5PHbi6z8rNfhMau6iuUCS7hzYYEDKHvhNPy2tfcH3HFxhosZ4Nxs2fykzZ2iREXcb1y",
  "key8": "2RMo1G5TH3JYXGsX6JLLmEy6iHuQ65ezo1hFPiNCEtqBfHKUvYSVhC62Sfkau4NAoGpVvTSRedpAgHkE3XaGuF5d",
  "key9": "2dEJjRvhzowdUdJYwM6CR5D4BC85eFtTVvNrnXNVtr8E52MT9iVGdZ9eCLmaXo7S5VCzqwnX4va1ZWpPbZaRR16d",
  "key10": "MBePNYhtvotwLNScL2hs9bK5uPZFrRewURNQpSeh9gdmb5Bx4KSP5G4Mt8B7NVJAg61MweeaCg9FUt2E8TiXfqu",
  "key11": "38yKujbgAx6ZKJaMnMMSvM2SXFF1tK8WpHQsQKs2bVFj1bVz4K6QapWkyC75cULX6cWVV93vSq4eQocFx2jw5GEy",
  "key12": "2XW2UuyvB8mcLPWxLuzfc6WqBaywCp84rS2ExtNKnpCDfqKDve885ratUJSu3YmMtgkHA9i6zYBFCVRd7zWiHFdG",
  "key13": "59rubvTmSb32yW8cJf5AUMuEgysuhsNa8qMgkGP9XGVrxQUqsB3vqYKVx5NEpVixrAN87DT4ZpMtZwRk4DML4yd",
  "key14": "5tsmSHgpNmHN9mfi5Xtpz94heKyzsEFBdueCuHSBXwH6J7ZPubERmQYSxuKpC2VRH1fHZvSFUBe2WqETRNJ7MxD7",
  "key15": "2gJLm2pnfjPCLXtne2LjusBSDzWHLUeeEemBphQ17fnhE46ixHqMrmkFV7L6Mv5nmN3nrFm8ymEeyYFBKa1Mv86p",
  "key16": "26vcDmQM4k6XaZLDnmxvg5vz6N8PYqp3yvxFG7PD9AdqrQoAKUmTkr624jaffBQRi43iiMnpLB6Fr3KYHNpPSzFQ",
  "key17": "5Y56YS4iwJZgF6vmZygBY8ikUuyhC97jDqxA84RTgRYLPWLMpiwxyRjozu58AyW4qD66dHgGsXnhPUWWKGi7Va6i",
  "key18": "59yM3R3goiYLpZCYAEdpXxJPQHTmcZSER58QaNJogp48UKw34toCurG24ifibmxx1FZ51eLBis5UeiG6wYPujwkE",
  "key19": "5pxaDQpBBjmvmoeTciwazZLN7WmyL4CeEKhyi115mAM94gtUEDkprfMMDCEbijEDL24HqSjw5xgb1evXSvhMScpv",
  "key20": "tn11wUUZtWpU9ofGmVUx5HPmWW7oQ5qXEGmYyWNGEc5jN7k4GZ2VgXoDX6nmseaD9ZmtCTqQ6pkwHNp8Ps9fPUF",
  "key21": "mLKmnniyfWBqFfqjtfm3uSmv6NyCtb5a3mqeAcuzEfkt9poud1vEx9nEEFQjHdFAuZ31Y4E38qwUtiahjyaTs7M",
  "key22": "5HYR6qV5rHnQCgTCqtz5t78uEFeSK21w8SDxu9p1hZEFD4W8xhTMz3sCfbosh52eavg2A1v3Di5pcBBD192vbaQj",
  "key23": "VTiaW24hd6oCK5Mg169Kvoz7c2V2dkzPkHZCSELYVq9khzTck7Hyhi5H9zKcWyqqeg1GtvDh1jnGMknHDZPhc8E",
  "key24": "3rGBKuX3SUtbnTjy5DXcW4PC5b5ZuckPEZvvtGc4DFwDvZkwxx72Rpyc9UHt39GLEQm9CDJig86xpVMeCnPCsihT"
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
