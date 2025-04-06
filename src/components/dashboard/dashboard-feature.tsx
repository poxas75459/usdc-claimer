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
    "5QDzY3Qn21mtPovkY5jkLpNzvyPGtdczgjsYNsvUtrC6GXg1MZ8hYdkwhhJnuABo1KwBnh2QikNEWZ8BVQb1vQde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M4qkxy24nZpV6YRYeo7nURBhBfoRk99vDb3GqtMPKqgt3raU9nXtPVH1ovp9j1GVRNQmpP7i2p2V99mA1p2eH73",
  "key1": "HBqsMFoPE5UTwXr6JAQnQ8EGREUj8y6YwrKZezFUY13K9huSBcE8wx14bZVF5E1yc5C3SDEVfNuBA6DK7y9xzhu",
  "key2": "5HchmNa55FJRqMct3dF4NBUbLNWxMPawTupMAkM8vdWRVASUGQuZMcuATC41Rqb4NT827shQ71ahzkxDQdEakpJ",
  "key3": "35ajU8QZxeV7YBmDyp5rCGmJ7WnNxXA3Jcj6cQ9iWJzb4qw46GQNu1NVa8GVAUpyX9fRYPJiwPRAyb4TBXRLJtmX",
  "key4": "ZDbNpGLvAhgBHwBajWyaAbebumLNDWsiCgmfmcsj7rNYg9darQ8c5hpfeQc5ntnGojDAUzpR9YLYAFJN5yJce3a",
  "key5": "4v4zUHXk1qzdgV2ZCjLrKaEu4n7puuVwvFLW8Bv1LkoYMZrVU2W9VS8jGzvnHThWSV9XfeFaLtFJv8XJzobCT71N",
  "key6": "UAThyX9pmWaLWVvWCcmC74QMhSuJz7E5ubCUGzgZyc2GAcBPNqrFnv8KKNSpg1Z6SMCPNsjBCRM2axxzh1msisJ",
  "key7": "5nu2JHkysdLohFnSX1dyxZQ2mwyzM5N8vgsnctCkmGPhKgKpGpfv6oUsR2PfayRhZDrNXKJEwtmKhFWpdJF9bztL",
  "key8": "27rDSGvoyitDuvF5qRVovTz7tX5WiuRLLZhQNVC3HfKSo6jRjhjECwmzmRLYBnr8qDiCZhNvQa2MDwEgQWq2Pcp9",
  "key9": "5oj3cfjX4eiFbE5ZcjA6fBSaugnz9vqVGJYA67ARwL5XNLvQCu8nDh3wF86XNJQSkojH1dwDQ4Ei9PpTJv6a7UQS",
  "key10": "2mUYuLNcRssJcpgPghn2V8skZfNVm6ZvV3bJ6L7MUw8mNF7bDugozHGnBdWswF2HcrHZc9KNUVYnCXJk3zjUVF5P",
  "key11": "5Mb351yJWTbvi1Tw5VsgySa8Ps6Enqk35VZe7UhEp4ptPoPk4V4Uc5Z23SDKb1kEBh8LRCqpjnrnYpvE1j9cqAw1",
  "key12": "4tbsixZNZPqeZbMXbfSYvQhsGbtHvcKkkB8b7sqXvciKSZ2fnJxx1sEqHRSQys3YJJTNm7YA9YW3T9CUngh4LoEM",
  "key13": "26FUUdXBc3GLGof5ehx4tRJRkBrmiqgtRGC64GpkQ1mYfdz9Hy82jXPVVTrgLhk48mgmyrQubWPxXugscRxqQQsp",
  "key14": "2g7ZGK34YoLMtEvUqoYAEg3pB3FU7YD2jRg7Fec3fECudn9dW7unh3Qm727uLJu835QCbbUDda1LmjiCn9XdZEx",
  "key15": "59AYhnRz4BhcuWY8K6DpTBxaHEb1BcGLLzV6vzRNjfF3ND11xXjtXNwE22McsX335sfhFhqQ9ZjJjJZp8WJNWDpy",
  "key16": "gJirFvuRoV48KeW2y8UReEmMwH96XcE6V5DwWcP98dTFcN8Y3X96iFbCmAmKKmvSoJJoyuUcUnX5TfvBxiwRDXa",
  "key17": "3duvVVJVujYTFeUjQaPtH5fNLU4bxqi7TkjKicMnh5QUk66URR8Hd6yiQ1HzUdp1chnsRDY4YtJNaCaNQ3LGnDbp",
  "key18": "2PsGBTVvKopBJB5LzDpfGnD2Xb7sprTbDnCCz3xuspv4YiXMzN5Ke5cKDPzVLhKBaHhskk1jwiKEoWP9RF8BcyqT",
  "key19": "3CsafJtQZRfKN3y2kGd8U2tUtzgbtoXP5Q9VbkNNzYmD7dV9ziCTdmb2nE2gQMwpNnD2KNuYa699K6tkAFL2meck",
  "key20": "4w8PJxyNwKHnXgF8zMq322aCHj3FurqMdSdVgEHHMkgJPi1N2CQMFQ17XitNeYSWjSjk6pWy7k6tY32Jg6NUh9rM",
  "key21": "5HfbFeLT5M7Z68KC69qfesUBH9fh3Zg4HBG2g1Fsge8rxtpMRMHpK8X9PXt5cai2iNgAhnTuQjSw7mHejrSWKtJZ",
  "key22": "5yoBVswjFty2orE7QbuSty5UhT1LsHiAeewL7dvH72MBvzr3jsdradUNyDKKPmEs6kaUvPn8d8Pr5cbVZxvNwobe",
  "key23": "3oBrnS8X1SMJn3fXTHaigRdNic4TUyrTRgbX4MiuaxnzNXeNW4oqNJquJ5TDN6Wgn9jPjLwTMZvRzmdBo41fPntg",
  "key24": "61WW9HDsxSx9hW6JpRnKDNUwXPvZnhU27VgqS3Dx8bQ61PdfSK1yn6A4HG4HBz69j1RQffn8WUV5f1URU9gLKFpS",
  "key25": "4azLDi3F182YYLqU3Sy33W43GK2i5YWnxLPDWyRJnCSohpmEtuCD71gddQpVwExN7FwPomP74nkta4NfMw99gjJf",
  "key26": "4UYG3W85xQdFSbzM6AsSqWcyH5E7vqGkWwdjYviSTS9U545XFj1jRsYL1MbwhcHDRKAMR3JMmRSjWpKcqwuVDxNf",
  "key27": "JcrRpYWGM1D9wuKxoBPKdaJpffMUhwve5mYdAkMJdmri5uGuwCZayeoC25k8cuV2AMYq3xgiT7pob5ta7QrnriY",
  "key28": "4GpZ6fvTM6Sr7vA2Nymzc46uH2H9xkm5vWDp4prxxtQ3A82nTj4SuCiZoWYSRVtmZRWBFMmUCfMXaAM88yNGDX8L",
  "key29": "62ByRZq7Ez3CqJzvJLECoBeTynSVi3kgkgYMHmC2nzCGVYYYUYxPsi1a3LjbMqz7qUy5hpngWfn2iL5S2DjaYAun",
  "key30": "2g56kycZVbFN8Co8jBzaFWZdHq6bX6V7E7vZU7BkF8QkA7a4q6s3kqPTMHpFCW5UPMZbYV5dLGebkMU98EdpDnAr",
  "key31": "4nM1yJ62Yzh63Jr7Y2WLveqXoFWNZzMALwzRSVBNDJcDbK4ye4fK2hw3oSkm5RfYTkjWLN8NAZ3FxbAXki5i7hBJ"
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
