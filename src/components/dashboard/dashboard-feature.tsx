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
    "2NDHvgbmZtUeUkx3Nuvu87vtwuqZRtsbXyrVk3bBdRR6ZrovdnJr5hxnyP9GCPy8BhdHvKBAqq6bgQJtfAo8GCcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rvikgvXbXGuobNnnxb3WK8NX7vvVfxq4NStVu8snKBWpBFrRdyrfnf7vXoQibK4KBEpfXQzCxGNg4DxqFwQo7D5",
  "key1": "BsA2fUzyq7uBitbiwgAGe3qq5WHDEZSUECyLokWmfJ3TFdWzF2UYoK45mW5n1WKzW1mDvh4LKJqbzrTttcNkWTM",
  "key2": "4daQ5szV4kJePBDtehtkoJjroDrEGjzPhPMsnMy1oBdqHAtkjbtGyEzXCFduUazQZPxAZgLMXP5oSxx4aD6x21iv",
  "key3": "2AynC4a4WiV9oQzEVvRf9gATcSzqvDpSYfbkK2zjJprzjecSHfUF2r3XMdAYzGMLrnKaUGCLNGTR1YUqnLzgkhJS",
  "key4": "2AvqUJv1TNetcqNQ2gm9zgQGkag1m2C9ZW6Pn8RVHtueHzSDc85SGT4TeksEM8GYBsr6LjpKc3txzwUgYsfJoGUo",
  "key5": "SRTbWEhTkfYB4wLPj72ayxmaorbbji57My6opv4C8Tt38sH11v3cHyZgbR2qLeJVb4cEGYUZDxDePnEyyEayzZg",
  "key6": "3JMTxm7gqKzUSDSvbXWGM2LSQ6W6vex6R3btPWddYwwRhWsrpZd63LutT4Dn3wxKmTbFdgZkizxbc6eTGgZhD96b",
  "key7": "arT3sH3Mhxj5XXpu8QPQdqtEMTEFBdhB4sTk6BLRFdWvM23fJbwQVX2kiLrCEvAp8sWK1bsX8NMsCySrgqSZbm1",
  "key8": "4qFCa2NyXnBcJRyz9gR5hLr6ahK3Z6KGuP2cia3GmGjLb9QyTEaWQxLLFVXUc18aKZ8QVnXak3Tczp51pMbES5mY",
  "key9": "4LLFF997Zqmob87Mn583SqQSinPQfkPyorjTj3zeByw9VyVQJorQQbrFe7TiFwegqQ6L77arRaEUzzNZkFFKjS5F",
  "key10": "6oWdD4yjDFEYnAW4XvcZ7j7KjZzyNBnX2ofi4RffefrXYUCKFSEKbP2KWmUZbxZSjBWs1qtWXMCkWoEDVYAgEUo",
  "key11": "2NrGE4Y8URbMZYEVKX5ZEBrBc1dATK2Uxtwp8Qj3f5KG4i68y4MvhuzpU8fUAvfKkwSvQfMorPuKyPnebDE2v4PA",
  "key12": "KoMPhd6skYTsn2MTPTjgqty9L5qzSj1YAskckPvBNPGAjfvRo6FvVbZVRsXNBveMZYVfP7sUGGpQJCwQWMUyvwH",
  "key13": "3kTemLHcVT4NTvacwLgbv5Q4gMbrD4Bq9EafLD7R8dgEFe3GPzvQ14MvWSBdVDwaWsPjigA8zNG8mvLkpgeoNZD2",
  "key14": "3HCGLJ1W4fZ5LZgjGRDry4CJ16PaQ5TkLxTzgcm8WuVtum4TWR5p4e1jwNhQkR94SL6UPmW2sBjJtBs4v5nwCWkD",
  "key15": "prN41FXih1HMpBdDksfsyyrVJ56rhgxwPDfXZQMJuacyXvQyGT4MGkddABhkPRZtDz69Lcp72oNmG4nq1PH6QjH",
  "key16": "2gu3NJGf6RXCJ7e8jPEf2PuDTdo7n7uHweGWvHEXeziYFgdeLFP2xF76pjWZ6jauynpq67V1QXcxTYiHiDX57MXj",
  "key17": "4Qxnqa6WHCZHLz3kzWFeJYoMXm7oLUDf2GGuMJyAHjXPWAJJUywLgsTbCdjYG9ZjwGTiBi72LBR6k7FvEk7tU5HS",
  "key18": "5nXPSwYehoYfpRFA7qvKqonYQrafi26vkpTwJyXiRNQyX83wGUn853TmU4WzRuxqVnTdKVob5oe86uZQvCS9JbD4",
  "key19": "K6TM32HeatUf3L2kvuWVAPPU5RSddAuPrRPeCWrKdJSUdW1Z6ULaawNVkYUFBds3zvKYNDxXHfnPPexjkASpwhe",
  "key20": "3Lrm6iNAkJ4t4zytKo3Nhp5hVgPAiHmtbN7h1aWNYXKXjbtE7bWTmb6K4jHWv7SEWZyymC4WTNsbboEN1x7Z63FE",
  "key21": "4dDcEAqUFSnmStcXhFeeZttGMUPhVzFdhzRzq8jFvwuHMRD8HCrJ4VP8tgmHoBbWf6XAxNB1cAbdaYCbeCydFKG1",
  "key22": "2AJdNeMh8Jr3c4MGaRTbtHPbX7RiWiAd2zurEpq3Pc3rHALe3XwX2mnRPuhridLTWzz2jnYyCKsypoNx8vzfd2gp",
  "key23": "3MHrkwJqXH41h29x8BXGPnNjboKx24SuUwKpCdFR3GLwEPfsHFJGXcjGoFAEjNgmpv5MdNUsVm93rikdKTKuxUxq",
  "key24": "4CMuhSWMJezx8EKErn3tCNJddLBaKXZWHoge3JZizPmEjeCBjZUGh84JryZxyduXLJ3tHbf4uJzjUKwDiNian5XQ",
  "key25": "3sDqFpCrBquZyHV96qEJXtfMaQrqrtuKwMXBEFDWg2nYDzRergY5UoGkzuoEUZmu741zYdUhYTcrsUU1wzPktdVK",
  "key26": "9BD3aR9pZrJ5hY5ZiCSCSX6HSRsZoPS5S9AZ5Sgmy8izdFHjatSkm7eY8nuJ9rzBtkG6zE577f44rHaoTR5uPBk",
  "key27": "2Qjf9LHChAtbUKUN6ss7ZxTZBiMmGnD3kf29NVonJXc9wUGGHaz6u4FzwNkCXTGHMg9wXd3mRLorUa92kqXsMaMa",
  "key28": "nTyjsKY2Y1RkY7yhQgtQWEGH7uhUB8zBZ74bkTtf8iTkGQU4Bi8mk1Hj3A4worJHVwAeYposmtusezFKF431Wfv",
  "key29": "vVffX9RrHF19svTxfy8HPamAK98wkAkHBcxcQX9LvXRYvQv8fEXoF8bnDnPfbmxxUbC6Tr9MW3u9xxtCLZ4udTg",
  "key30": "2JiLK5po39QkUuyv5crHbnYMLyo3eYYtL6T5iC9WN2Sa3ZD2zpffTcNXn5YenY7j5SUs14RA5kP1QodywsoAiFu9",
  "key31": "zDvn2ZSd82hodS92h22ANhNe2etYNP1AbLvJ78dzaHLT8jNvGEYRqbsoGa6SCH6NjCyn9PA6H4Aj1vHzEvb2NhL",
  "key32": "WBugvdxLNZtzf3PJQQqrye3vZFjQkg2dxqrFDbZnMCyLKUUYhiTAqetZTS5WokfvsecW7UsVvoUgeE7uL4GuiMG"
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
