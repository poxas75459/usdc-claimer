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
    "2P6SmAPTotSpRRfGPNvbH9tKHtd1wwMjmp7DgrNEGZL14Z5MJ3MDiXjgGZNsFK1PL9rp2AR4LjoXfFVJTmmHBXBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qdpxGNnyQJmZ5qTUD1MmjnnGRx6GrDtU7z4hg6kDaG4wf8GAcZhhJ99ew3FoLJxk2ngmL6X2zR7d68q5xFNM34X",
  "key1": "4v2hmhQ5vFEA8hS3CauSGLDGJyrWL5dQUL4F4MPgCfgqkkSp86YtYK4NG9k8kLeFauWPWoYkwnHw5rLx6ZgtWyAn",
  "key2": "2Dcwh6XBgMu9c8BkYqxS7CdgguKe4A3KvKnRwJ9ZnV9bWMofTXDSCKt1bu8Hnab5BVBmVpMq56ng9gmixN7bRjzD",
  "key3": "3UmzLhg2SHLaEDTTBjPEksSsiCvexyL4xwRCnpSPxaswA6t3HtDcSdNMDjvgYtXnwvdGWRShDTsJMEpAKSfEQrtX",
  "key4": "2CDouPm3Ro2eRhpixh5GbRsn75SmT1FxdSTT6Nf2VLHFb8i5tLz9KiRwL2PLN6344W8gZ87F3dnmcmFB9Pwtjf6x",
  "key5": "o1iUbtUykJXf11qs626mtA4RoFWbbN9Ncp9yYB7P9tHLqwjnDG8G3a2SdiHLniD1xqZP1RWKPfKWrQdKYRm7YkE",
  "key6": "25F2r7zWbvitfbNS9HqYkYvk4DjW9GaPU18woUwHhxQRR2A1kBiEZdcePWeghkseeGgG3cmLs9du5cQWuqSrdWJN",
  "key7": "qi3HzKUJHgWiwF1ucn9FRSPEUjVP1Qg3SwG3gpB8KyxTVX3FbDdyVoTPVjHk2C5kXxKAQRLz4gzEfBiRbgUxThf",
  "key8": "5zt71Lq6ActyJERgTvMATqJY3sr43BWAsBfQmoMoAznm5TWmk3s5D3jSPNhrBoqDbQYCSqgPLSkxFQuLQSPNVWVF",
  "key9": "d3F5gYe7zUvTPQzty7ep78yMzr5mmH7E9MsmGu7XHtBbwDvyynUgLFERdGSVbzygJuSmXXmSYTZUQgA7NjQ4o5h",
  "key10": "3C3DAyZyTxzGppktdy42m2AJnkQHHDXDNXHTozWV2bgjbtaFodxrjg7BLnySvT3WQ9rcM4Rgk85TBBdd3VGLHPyK",
  "key11": "4JpPC8acbMmcePWCAQRiXZ4RtkhXKxtrrwmqipiDQcrQ1YWLA89N8YUogQp9NEEcMEDfNRFrk7Hh5Efw2UDnV3o6",
  "key12": "HLVLf8UWwZaWmpmE6B1NoeLYUsq36RvwgMSb855v5o4xHpmZHjn4w4VvqRWMUSFw7k97KWjQiSNbsbVAeRDw9kt",
  "key13": "46WuGqHedVx5w26myePRXqVPiAtgmSEXcxWpgLfTVu3Z6MRQtHrJEFgY9UKfdcUgsPZaRTs7UAEQkrhtYW2XwHy5",
  "key14": "2NtRZ2xytZHdt6HmM266h1mN3upQYNMLXbovuZz4VnGzu6bmaHxmUyVdfSHXBv7NAuXckzHnMwJXX8uXQ11NidNK",
  "key15": "3SdJZhsUFejSV5xAKH43JNMA4rmrCoWQQPapQx8rq3dPCiN79BGu8WAewuuv1gwqxrfqpjtTSP2nfYDCxGpWjbyY",
  "key16": "2Wg7r4hWFgD2Se5z6Pgv1uUbY9S3Wk1AVacTaTfX6BXQGfBQLuQb3W6ypD5oh9TVWC4WD55jm7VNoAFuCW2zngoJ",
  "key17": "GCMEakBus5rWf4rZJQrRm46xCipui4GdKiu8jGVQH8VqpohUhA3JHDWHJPRg6XMd85StSVeUHYTbT9L6TJpJgNz",
  "key18": "5VKzokU6sibQCMH6Z2y1h7gPw1ZAkqnoACCaFXAvRyXe53vNVFNFmfH84dsCgwhKt99Zv6NFHUbAjHwPpw4JGk8q",
  "key19": "4zsHTSENEdVJkNbHn2ZU1EtJ9P1aMb3jJNjB6rop16wfYJFKwJU4jYGsJtsvMuZXKa3WJQWnb4wkxkAhLVUXH8ij",
  "key20": "91NNwGhoP3AnaftkWWdkd4CL6q8vR8MtASye1DfZet9kRtnX8DDERF9eKShWQThJotJCfAoVbzohFFwHiUGjZkg",
  "key21": "49JS6RsMcQqFEXkozGBkWvgZSWTDgfxBAQp5tVAmH3XDGqAPeJ3YPAC4ho5X6j3ws1wu3NS7ZUhMgNsk2cNHNJVi",
  "key22": "cfRUBEBz4dTJC5EQUjRNPkSdTuGNkgstmSCqpvCN6sygapgiVxNfGBxZsBYRYz3qG9perWbcaH4AkT3RAdzzBUc",
  "key23": "4KKmboGZHZLNYYwGhhQMnPTNts93J3mYL2w4iEVTgana4h8FJbshesTwkHM2P5e2XwxFGDxSRkaUmJMqbgo1hpe9",
  "key24": "3Pbsd1kh5cuLmLhgTMeH1Q3DzYaRiH5iLJ883RCFUQ39z3RsoBE24YyktX74nWFCvFS3KE658WP5h3shWEseNegt",
  "key25": "4iqKMK4vnDjv4Bh9ia1dnmrThNiTbcs61WSe68F7NXoAq6aZUkzvZyNS58EiPU1dH1gGJZCZoq3BfVVKcJJsNHnU",
  "key26": "5duykAj6Vc3g1qHc4WHsU11i9p5XLJ9EGXGtQYecyjXGPF8Nv8ue9Mz9gndxm5WSXmbxf9Fodzx7pnTypgbik5k",
  "key27": "m2Pa1dwZHN5JMbKWVoe1AzBb8UXnM3htFtUz4KfUUKM4BRvDLFzoGmkqzJr2udRA84QMp8MYGWrz7gRtKvmx7W9"
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
