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
    "46cTZTxnvt5kVpVJNASqMPEejGMKSJmiJ9rWbugUmXaGmZXnWFdPc7zPX4r23MTKyMUsnLR7JHd7gwf6imWFi6Uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mc5FqA9qniRgXVc7SPsCuLgNV7nhh6cawxy85NSBwgzUBtAjkSBwz3Gz51xTAZz1mX6LZAp6ZNmvEXkAWMiRdSt",
  "key1": "kCbmfLmJtGnAWQsXZtbGJTpYQobCXBkaEUHGVTZW886noXiBM3x4wybTCS6nHLMh4ZuzqFBB3tKT5Xj5AKfqoKe",
  "key2": "4iJFgP6qkuLdRmsj6UGCVRdUV73Czmzz5iUW7mp7prD5GTWmBbxGMLnmTisqwzgHwU13NhTnfECGSjiuFZXxwZFY",
  "key3": "5GezpNSg9hYuvN4GxZJfWQfVxHVHJdatpHjoTNJpZTrVvkBbM2ou8RFseTvVHSkzwHmP9pkH5S4mu67hynbwRNWR",
  "key4": "NVato4kvSz6FqivNzeutbgwBASoaakvSWgcgDVtLCPBRKRi2pXvYMQJ4cfcWcjbdUcf9qF6U9M6u3oumW9skxWC",
  "key5": "3N81zLTug2R4adbLPRmWzU54opCnYrDjJV84ivfi8zebTqk21FYcuAQaDuhuusFZPRL14qPcCCwZERJGtDH1xLeo",
  "key6": "BEbEPshMdLdVKLT9T29vzuXeDmLwqtVRtHUqQbZDehxutQdYUWtiiugrwxVbr2d5hSEQTWXcKCRVDoFEELp7QRP",
  "key7": "4rq7FsP6bahTTwvTxN6qEx9iwaPhCA3XK4fqmTSeFNkuMDVeSmozPvc5sZ73CSFa5j58XfEmNd612paAshn7mmXz",
  "key8": "yyB8eLMYmEf8R2FkkU43BDy4V4VUGneT39pchc8aaHV29LsgDZgsdnP8inH96b9QbMKfZnPxKQbf7tQQdj1QYQF",
  "key9": "2t8ubnxbCfXfJ93SxveE8mJPaW92dwnoengxMrRsmKH1kCSiadEzj1riYHxHgCRiNaQRkgdYzD9rfCBPns34GDP2",
  "key10": "2A37eftgzJcuyGy3oSNKcFkCscgM8tbqJGuHnowb2pLZg9SdEYWhzxjxvxq9MGSdXQ6NXWFnKVaa1JPKhy2cYg1o",
  "key11": "2BU1wqXsB7sdnPmg54awHxqfS54UWZQA2SRgtzjmQtb4RpSLHohUMQ9fgvUx3fKBshSsjUPgtZHuicyEb4ktUdcy",
  "key12": "36kqQm3AjKRwG9nqLXene1gbuYieeCq9UL8vDcr6DPWJCdXwYn1jEnR7cB1j3hqWcBXgSjHrFruAvGeK4jqTSMY2",
  "key13": "65JrBbUN5NNHNeyTT1Hf1tcbteJaKX7x2m7RinAeTaQer1xJmHipAd8QsHA5UH8WB9rJEjVYD1k8a5J9EGxbwRSx",
  "key14": "5M6j2s1ATAZDJRfTV1GfsDMVDT1n5d3kqfi8kgx7oAeu7DjqKt3DsPxRoSFBbjs4nQC4Zz63R293ysyou9Q9LUbD",
  "key15": "2k9eW7nvZJzRnfmwLnfqGEBWKJtxmmgrQNSsFpE68Tg3YwBEwkfAbw6FD87k1rsaZCiRagHWQa4ZzVVEh67UgHbm",
  "key16": "2CLsMzo2fDawJ4PnxvtaRJnvJUEyWFzDdSHZ4zPcYyjdq5tPCPdXXsF4BjsY1MWc7wYSnZd2YpKtt6jA63hhGWLD",
  "key17": "2SndsoQvxCDaJBYHteAEo5HQeW2xbHj9kEfKK5xjVpNdY4TKBfg28TW6KNKWyiZNRNoPsup6ZvUBHXTyCShoBe2D",
  "key18": "vKMfFTnzNDLpuxc6pzKvSnjKMwCpYTRYi2igESM9L6qruQMJZQr7cCwdLk8Ng75TchDBnwtbZtZjnk4ZfY2JUuy",
  "key19": "27gke7g4zYsmvqGX3nZCMt4zSQH2d8r2D7THVFPsgmAsLxSerf3SNkQusKsQRW9jLjQi5Tw3vD9nw736jme1dsD7",
  "key20": "3mUNKq4669cFi7AbJMxoFdPHvb5nqSs7npWofizj6ucjfaMT5D6JriFFytapKrMt2caphYv2yD2CN2rAhXyvgawU",
  "key21": "2uPEa29Xoh3fXnmVPoLt2LFHYPaEqyCsFMToovYbjGtExvqZvz6u3BYzFAJGFVaE2uh6vuWZQKdrYPZwrn5vT1No",
  "key22": "4WXKuzQffaoNagYVsDwFzxQyG7MdqUjmHZ4W5m1GUh5vgtnJcwWUWBc1DDd4HgZ3QcStEVNijKSinfXTuvNyMSbM",
  "key23": "3eMPfkNYkcesGLwWwPfP5y8t4HNtUebmaRejRGVCAbhH1yVpyx3m7dnx6oKgyuJC3yZBqc8zeLhChtkfzuDcAVE2",
  "key24": "42m8L2HnrijeGp287epTbb9ffgvWxrG4h8n34aJyrastwV96RJzf1YPFu5wKXkeHY3gC5ngHJKrx6kgwLFV2VrQS",
  "key25": "zLtFqtHbcR7TjhKe47B5dhtAHDoTzJbSdgeXc4V3o3b1wxvFwPvYCGqYxxohimGwE2DGFeXoLbxaqSNsC7vXDfQ",
  "key26": "2XUswKCZhQpx6SST3ywZqa7qgPz34NMQ85DPPMLRN3jgGdz2p269xrDQxSVWUPgTFCrLRwxE1U4JvkA1joonhLyp"
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
