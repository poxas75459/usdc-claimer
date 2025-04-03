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
    "49xRgJES9rDfpKVzgYLMw1TGkttXR5zYhrRLWDPEiBgQTudy9ybStLr6HZqHq9mRCm3RchD171uCUDThFzFe8LZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qa9C2kYNqjwVqfLbVsAKLvHkeASY2jtyEfnGnZ9UY5AvgPQAP2HSSEH1YGKZhrUZv2ut4yWQrFwz9Zttkqdxh3L",
  "key1": "4FeHWfZt7TiiwJ9EavpsUuawbRnizS1EKNV2q5WvHs7Y6GJraN9ZsYfuv2bL2ux5zD4mHNB6bKCp3doN3SML8oBV",
  "key2": "4VvGivspsjbVgoqSQpfw7P6AuVFRWvJNXUZC8BbUAQ4pTSFogP4un6737ZG5e4awMG7AdkP336rsnWSFAs6zK5V9",
  "key3": "3hYQygkkjFy2BZSjcwXHCwJaNcck6T1RCPxChw1BviRamreJ16EdjxYJuUrNu11HYmtbsv2BKb2jktPN8LfomP5b",
  "key4": "3cNV9k3CySUUZhKBCbuFTL1djWskHQvRwGrzRsFRAhN7S2ixPWp28o7Aw7Xsp77VGmNmDW4hwi3xJ5T6Wrt6i6y4",
  "key5": "SvGsJHR7LYR6o55tM6JtD7AZMqLd5xoNsTsDLPeRRQ9v6Z7drpf4ZHhq1qYN21rEKh5cvZdaTpn3eJafZ9VDYyi",
  "key6": "4ECU14dudZJDLx3uYVbBL8kshMr73R4s8NZzWdvDgejpHqyYhNWQNoWh1hJPSoqntjMnBNekz3ZZzzFPuvGxC1MF",
  "key7": "3uDT4wX998iwsYG83BUgYRcuPZDx7wkBz6Tu2va6V4Ph6eH1htLT3UgKUCNsHDjVJtJBAmhfJNjthFgMGiXpgMR",
  "key8": "2esa8KL215ppfihoh3FSv5wP7uDaGCUeXis8ZuBG8KNYcTaB52jpHXGVDWaacduJmuegWqUJSV7qYJeRmAhtNYv7",
  "key9": "2UspEfdVk9YxpKWLExu4UUV3XRcA8gdHp1tGZRK1DiPRpixQM4qGv98EFtYdF1CnLJNaxPjuf5t974Vpuv49LNWC",
  "key10": "nNp22CFJ4FuXhcm3oi9iRXyxbaE3Azwx1pxqiXmsSgvzENT6FpcAVbS7mdFr9fyvoz1KX5jLPYEk8dpmw17zvJ2",
  "key11": "56njtiRQZTeiBRrHMZeyZ9sJ61tqiyXqJrimUFSbuhs2VAUR9gc4yGhHWUjc1YcAe86d3CW9sRzNFJWAnQTBoJrr",
  "key12": "4yjxPhkF1m6H8BQHk5pZjzH3z6NF7YBP3K9VEXfKCKrP9PaD5Hi4DBZbE9FmwBQ42dGQJVKPqD7QF9GZqo7j2ZFx",
  "key13": "4SdKLdm92ivWmzE3uKv1h4DC3vg3HUzwY2LJVCDA3ofktLZpa6NrdXjS8j8os41W5Fxrstx8bgGjQDiiQ3ZwMpRp",
  "key14": "3T3BoiE6R5KozvP3VcM8gyGNnPbi3V34fnA4PGCdaEW4gwWF1qBPPPEZE8BWZqXetLNJ5MmMWh4wgYv2PDpoEg1e",
  "key15": "545HyftBtQnL4USf7VcKmrgN1BMw8Ky6gooH5hX43FRQNhzWwvXx4DdASX5Uz6Y2Y8GoCrJKqQjfmnQ9R7qLFAc9",
  "key16": "23MJ8z375xRCkuVUKGdJwz6uqoRxhPSdcN9Y54cujNhdQVwHwHmTq9C75GdZHqKGoo4qdqUn5GMtTgarpSANRdfC",
  "key17": "47WvucjW6bn41vF2hkYup6NMyVMAQqjGjpoe621Lq7KbQVqVTY3UqBB8NtHCn5NokyUdwX4LtU3qCzCGsXpx9Lhf",
  "key18": "2uv118CQ3ggctwg2VcFTYYsAFP4BQTxWjMxJy4EZF3PdfLhmRb6xU1x1RPfXKBdF7iXWWmMs7yfvune1BbsaqeU4",
  "key19": "4yGCdwtkFkq7bGceTr42aHbKUzZzKeaiaxxJHaCq6avfCpVJVcQE9KXbQ5p1DxQnViaEpAvkz1LaWwpUJPry9x3w",
  "key20": "5cUjej3vJ9TNGN5ahZHu8PjbpnrLRrc865CM4tCp35x1HmFX6aETxK4hbDsy2tz9weReZUi5Tmp8DpSkkR3ViPTG",
  "key21": "5VuvnML4oqcn8And7VoRW5J23P3Wta8SAwPRpFXteP9x7BsyR37wJb8ETHeULjZLrpKnzdYrKGC3NVCeC5arzkk3",
  "key22": "xSLVv2DaaASLqMjgw9CX1SnLauGq5LcgCaVXPwN63V9eS6BDa8Tna7WdMJkcekwNu5rSGEaF6GbR14ohi2z8Pk8",
  "key23": "442GfkXRJ2uaQtv3LKDyQ5KqdVvfE5jGBg9j5xwYZ23L2s4uwmHXzUZCanVdDnV1rWkx3HFd7kecSMWXC9N4SyFs",
  "key24": "3XjGcVnhhcSCkAzjQzcDsE8ikQtND3W47H1XDKUgxPwQ77o7NMoMYT5kVYjXoski2FiKGa7fEYwXTcbe6VUyHp6Q",
  "key25": "3djzQo2uSF5H4ATrr9fwWH3FT6QS9s7WPvJzCC8sognZuxgUsuwfi9KUFVhkM4G4nrgWhzceqoAAr9R7PP4hiFbR",
  "key26": "4AJntCt9bt3NUSpwbQaYScQ8CsAEYHzv6pBkLJvLH8P4zuoDFEA62Ffd1jwR4oRvFmFHywDGTJngRpyg3pQ3KqRh",
  "key27": "2xFkJwrZHk1ZD23NqyBDcxXbD4mmmchfhJZ6EMJGsxNYdK4rVwM2vsPSretLP8C3Lc9sna7a1smaeisQi8nus9J2",
  "key28": "zm1si87cXkhybLkdSbqE3jbN9vG77i5F6hTN3gDqunK56h87sF8CrZd9T1aWzXsXjbHL9wtPQYAPqFh4b3GspcV"
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
