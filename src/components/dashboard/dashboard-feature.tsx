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
    "2hjupzdRVpKDuRVFZcYsiYrALrC8WcrtymDahX4XPjCqvnkn5DiGvbsqxYZJK3YF3vfkmN5XkmMw1rM94VfqdseY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4edwFvwWcubzoVQDBp62aXrpmMnErR2nPKhskqetVzDKPLnt1oS8zpxThL7V3PFNJ4eziGZVJViaGbioJ5doYxef",
  "key1": "jyF2e8hd3B9zeiKJ5Uet9jbyMSWq7QcwHMy6dRJLpcUy1SL1E1mW6u3z7LL7wikt67reXtrbcbviyDoRzWGQiY7",
  "key2": "MXojZAbFuSHfrU8asren9rUE71BcFRSfju6ErGU1o79PBGcpnK76bcXpNBMk3ZPtKjxbCxwQ3jMBUYrPLnkWPFR",
  "key3": "5L8BcCCtcSorz9wxAcXCH3sx8yiKzJ13sifyZwiFwtGrzMWQht122Jx68W3m5Mfw6gHqg7tSGPMLVtTmwzxzZeDP",
  "key4": "3K7tGXM5ezKGCgy5ouYWHD3R54Z1wKypPFTKfUqp1UmCHcZwo2NuZXPoqowou3iJ1HWjfobTwai9eQYd1TBhSs1Q",
  "key5": "4kWasAPamuPjuRbeU8b3ujaqRA11xD4HHAeyMZ6oVZGnKh7WPRvkpGE2ZpX1H7Lq2E5RqFevCniTM6aN3EhTMYrh",
  "key6": "5cAg97mEVygE9cAznGkC24pXte12j4sc2mPHKUYAePPr19a3EEUbGdCRUuMaVactZDivPLUUU6uNiNUTKvGpAcqb",
  "key7": "3Aa89zAVzefK56dykxwjv87vYUysnoS7Cw7tikJzqDgX8AEEigLf6cTe2SKCLJg8yKN8RE5Y2FAandBmSHGVCqmn",
  "key8": "4fbcmhAXuYSFS9yDmhHCVbod3qiqi3VfwLhLKv6MS8hTUzuacZyav61rPW31CqkpJqJNxEW9FVfqaGRsYSk7eY3w",
  "key9": "4ary6V48STuLiSiAoDs1nkQNPLzezEwxnvNNftdwmukmuBnE7MTxUtb7skq7rAWgvHoAifLjokRYQSpWFZzM1MiV",
  "key10": "5upqTr7MNfkDKPeMywkdP3a7n4UjjHymzsT336ewqFJQb7R7iseDwDpePQJPWVJMhk1mCfa47F2TnuWq6b8CEyAH",
  "key11": "4dkHFpbGDEn2gHVbNKz7Pf3shnKxhdEdQbgQnpJ4QdmdAKk17HN9q7JmzHaKREajRnYtnkApsQ3TkYGyEkshyoVS",
  "key12": "5dJk9BtVxdsdY4gXKXWhPEzXu2uNmoo4fJ1VFozEqmGYUSqUKu5L3KFxGVciwtfermp1ihuo4AGPkov3EPd2QxAK",
  "key13": "4WHJUyJ5LDxFEbjUbbFVrYbeUqH6w1L47AiXeLcw2ybkubqdzbMx7GBo7zg3MbnwoPVsLW767GFpWfaGdPN3dw7u",
  "key14": "GxjwzvMyunzotRPouKWq2KQv8iAYRNqGxQBAnv68KGsvYp8kkacammGPFAyLFY8iyY3v5B1e7CCHMyaEtKjxpqF",
  "key15": "3Lvc23LGi342E2QJjY5jS3TdACW13qEcuK5MbUcJK57CJzyBrp9o4jdZK8xCBiJQHnr6cNjAQesAE1LWEanTPKHs",
  "key16": "6jTDWWyJRiqDL5CBT9hF6ida64rS17fb8acHtKix995uXJXMHuTMFT66mPvFzPH5Lm7sAVhmUu5KXHDdLg3P6SW",
  "key17": "zKcSXJFBGoMXaRAAqXz8hzS2mL6iz4Ka3CYADicrLLCvvJ7BxrNAU9UwUdysDNQ5rvp2WFDgKPuKAuXwztFCk3d",
  "key18": "4d9A3VUVrSfNHBn5Y44LvmQ2X9FDLwKereMdmeg2rDwEGcdcLTw1ETM84QXHcuJADLjY8zNsqM4mb4XMtL5YdRDe",
  "key19": "2nfsccDsVZzJyviprMqDJ7LJiygi9R4NLCxVsxaPSVcJ9w9CFeYwcgfAGCpaGaT6yM47urypxqpFgdTnbdoHfs8S",
  "key20": "5jh3XCooTawmFHDFB92nXhYJR7vXzY3qDE8JpPab3DQFV3QuQ8YmYRiMNLxiSSwBkY8WPsewJi7byKGuYKf8F3iB",
  "key21": "2eGQKtm6zZgvHupBWTaNdeGGdd5G9TLZyTWGkYMsDv4mhpdigb4ym6jAXjSUUVpNPFPrQxJECSRCgEXW3HYyaSVS",
  "key22": "2X6S9tLmxWe8Mv16ESmDjA5zoWEiUMrVKc4bqsrgzRKt9bgJJgakzk2L84rzibvGczC7p8bTfF4e3Z2dFpsJdr15",
  "key23": "3QMdrXQnA1ffFVM957KuExwwV55tPNhff1E4Ut2Tct4Ufxc5wwSQMUsFf4NaxEjAMzUB24rrUdQ4qWsMeBZ4oMzN",
  "key24": "3PwzgUUubTocTuFVZS4A4zjw8VQjHdEEnP1tNRCYGqhfgtxNpDwW2SPPFGNDinowKahbvBRSQUySk7K2kX1up21L"
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
