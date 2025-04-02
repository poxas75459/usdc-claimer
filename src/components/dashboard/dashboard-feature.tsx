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
    "241npSAmBhBFCZK8pVWDDa6EmU2amPcxP3zpWgGp96SFks4xiNGypvUqeoQF8mMBsdHmgQGdoxVEjAWYgkRevmnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TgubaJ2F3PUsfBoQFbFP5fg4heMptWyNC86ug4GpoKAo4Dcspzzt8ujLzujYHqJWdbtKXg2qhe11oQpZJyxSUjH",
  "key1": "3PZ25u8k8RKz5A5yyso1GhWz3QvcTVWpFAe89dyUPZLNwBob44RX3cEadP9RS8Mv7vyBPXW3nKQ3yL1yMMdACdfn",
  "key2": "3SYJn4Sj1tiyuZJphHmgwkz5zhDvCTPnEponDyvnzC7gBBFEz83y7ewUJzJN9zZHTdHLNNGwAtnoNSEFycqAZ3Qx",
  "key3": "3qAu4Q44dkoWt2WtvCyMK9VuATuqeT7ZSBbS9W9LvU5ckkitRHjr94PQb1B4VmzVyMLxfJKa6ibUoXjRX3FXsD7x",
  "key4": "65VEg4m1M91NanzohcykGfzVDjeVZKrNG2hWH5rygs1WpireA1x4ZZ8ojByqKcNpX6hJ2AMaZ28YghddBWhENFEC",
  "key5": "4tbGZHeLvnJehockn4bTuyc5x6CCboBwLdZRNMf27PbHp4yHkAnhBZPit1yUGcFCRuaRzGBAz4ccF5SAXDYQgCjo",
  "key6": "x9QP4Kk83yTwrfgQ6643iQZHoaY14upKfitcUfagh9VtPXRkEBpFVDPniunUZHbscHNyD4tyuPnKduX7HtQsdPx",
  "key7": "5RYL6XJZ5BVMMbVDsGUiJwXM6jbneGsRnjPyRu9K6VBt8ccbj8Dx2rdjwwzQeZ36vSVNrbkzCCWxYE742r5TkAg9",
  "key8": "4FHxXhxJmzJSuxgGAnXQ5kUJ4xdgqH4xyDsvYNqroLyRM9p3GLehZRfo1EKLgV7Kryi3YqBg2DYiiEVNChRwfKyX",
  "key9": "4JGtD9DNo3PdNmDFdoc6BjQwebSYSK594Mm87W3SiNWGWShcduGbKNo94Ywwjhe8FRsPaUxn62iVWd8G3JfzBA16",
  "key10": "5kQusjq2vqf3iZn3iEXgT8ap7wWnhQW1j3TsJit6rFn7QksT9umMpBXuLY8pzLoCMv8NPcXr6ZdrghAnTzQJnSW6",
  "key11": "5wJFTGpNtTwUnUoQfRZPB81fo7efHErFGZ2tLGZPnMB6UdnUYz2r4vn4fxTGRdxw7J4V7pVjnccVXBT5orJ2KUXn",
  "key12": "5Spg379F2rtLyhewnYE1WpPZtaujQwBitYN5mtqxfm8R5AAwcnJ1GnPGZDPLmeDGrs1umbJ2Wg3WDjgr8rLQGFpE",
  "key13": "uzdJyXQQ4EKR5mbQhCmy2DkxiJa5WojmsZUqcwSU95GCiJW5v5Gbsts91ghaL4wXuHnZigufa2RNT9zoh2ZySZf",
  "key14": "5f1tkMnxT9Rdz4xNrmbnkqeKfBUJYpXXFBRPADjc5bcybyfYTjNuEHNf2crVw3xDNKMubCaV2FY8bNhVfqYH2NkA",
  "key15": "5x64MH9a4g9HTHyg8bEaHQTBpo6xNHA1Q9L9cj81QAXjbVPWFi11rhpYqUAdZxPK4PoxxBDuPQeZG9WSbYDm6vyY",
  "key16": "eieisyQJuV7mPnbdrL8DG1BfPGLzhQrtcTWohhhFJRRfjxJTChi6Kkuat7Dc2YcB4rfd2UY9iUK1R5MTZthnqYg",
  "key17": "34ikFDmva9EVAeKAwfsD8mV3efoYLq8hgCRCQtfEqw5Ni1b15inoAa6i7S9Hxsq9efTk64x6HfrBYBfHLBZ5AT9k",
  "key18": "QJUkWAQDrjLw1AHNhoEQtSTxKmozjg2cv4rkhYYzZgmYtoDim9U3qhQsGr4pCm1tYYGVrfQAK5YeQ7ssEaUKb9C",
  "key19": "2dUvaBexpaN3bVEckmrHm3RK5bnLQFqCY9Xo5fCzK2SxJ131hA7oR4Uym77RkjtNYeLWZ6m4xcebB3XqtTgzyJ8c",
  "key20": "3nky9NjSwVpXUwKwbxmvUbYywWf3zWu6N5nT3kxshhcnLHcdPWQw2bHoRn5uWNkc9rAkPQ2UL5UY2X5kzmeDPH5p",
  "key21": "5YBERD9zJXz2ESd6p1ZMYATFWrNkUMRAn4RNaBiH68wnLoNtCBVZsTZNqJhHGo5WQ7D9VBeURkBGvxaMN4mfwn6Z",
  "key22": "5DhL8dFk9FMqHfBJAVDGvba3VgLez2k8Dr8nthnyYjZKN4mUas5yzLpXLWDQLAKGK6rbEYw5FupSpmy94FtrEc3F",
  "key23": "3M3JNNweUm4pbhgXS3P25gCvzFM2kHFbaKvFcGMxZBJa3ZYRm3aSomWeFd6ghx3g24UHQiWUwqcjTAWus1QMHwNc",
  "key24": "3MC6Qd6ts9Qhy6g6FzBoC3aDmwa9tasyJXmFRmX2HuBsTT3NgvcGXbqS2p8iuasc1fMiCmgWvoZ1fbfJfzmyfgpb"
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
