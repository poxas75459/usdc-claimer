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
    "54PCL5ee8hoanrmPZj2fzDkEst13Lv1bY7YmoUMrKuHeJjS2h5pwa9XAE1ZP93wPMJWaDkZruktDGW4wB6auv4DT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W8HwNsdktLADNu6tUu7GbWcQEHjMfaLbgELkaNbLbrN3gsutP74d3Y1RJqCPbkndLHKJznmz3UYo9wtLavgQvia",
  "key1": "4i7kNCJtBZPrzmLJ7WNV9o7Ru1AkvvbUHe2wWZv8bD47c1BAN5vSvgKpeMuM93rSytKRV3zjmjM8fxJaJwLGPYnp",
  "key2": "43bNgydsaRLLVGs9aM8yEY3jpSZ7qZDHTbprKmByXrWMUuwnLuB8bGWFTnDZE7FApU6vgy1rsC3VeByes8RvrK96",
  "key3": "4PLoxxyzRycM6HE3XHLe4GdrZ4oFSd5ZtM6N8BwcaTLg9mSdUohRZJfuqi3t6UrNLeG5W8v3QxjZRjM4GtXa5D1D",
  "key4": "5n7XJMDkFebgEeujXAv1QaDPvfWzS5MPBcznDVzTrpwezrPSbcDNa5JAGT7GEPFNXq625hTePSsvzALb9HsDt8rk",
  "key5": "3iEkmZpET4ogzmc2efUxZjJ4QbNC8wiaoordJcj3nmq8q3ea2Q8pJFoc4fkRZoNbz4gpkL8RLjzFxWUUwq8WmPEB",
  "key6": "2GfDYKGrX43bhmaKoaFNn6vnzTTmTZCo4aKqfKdEdHTYxZhWuZvoGrkQtqgs7FKznsmRaYe9DqboC7sMcMTFZZQ",
  "key7": "hJjLvyfsNMeCygpQaLWCSWgHw91iD4UuHEpH3iPJdB4XxjUReMyZsNSuMbvzzRa6XbdNbjKwu2hLy7VAS3Un8gP",
  "key8": "4XZYxKthB3rxpYvFgYG1rRHXt4kPkLg56EFoEDLmCToPtyfJHuydWbQEmHmTjs41PLRVzpFa8kNeGa3P1fbTB9hx",
  "key9": "3f1dExTXcxAiXQGL6ddRHpxkw2T987QiPA98bGKTwBoNEJqjwjoW4QPxaR8JgAZu1tgfZHpNcRsswQ51B6XwEKxG",
  "key10": "3V9oX8RVYLqBbaQ8nL4AWyBvSNKqWNZmUA1EUnCfNeGLCWuGJ7jZaThx9QDNqMXcxbJzoQ2tcrLvBLWCMhGMtAcE",
  "key11": "25BTMHPT5pgtRWQdLSRqXWsZ9qWdt9aUtwpUW2cXZnRUZtCmUV8CxxLHWnb9CVzzN9n6FD2atq7DfitC5iYKGDqg",
  "key12": "3SLckWXYwCJCQKC1CsN9rnB3B7tM51ZbLsJMpHeHHHmE195jChHsFyy48dUSiFbYn6qcPDcoC7JCzfrAHb7sHTLe",
  "key13": "Payzw9EefjZh1Q7RfmaqkRsX5C3u5yJG5oAcBmwpn3vgwm7YquszDz8FU3yXsr7sdLbi7ZJfH1z4MFD1BPk9zPg",
  "key14": "559RiX5YXqJkD1JQ29Ke3CYVDFpvExhWmfzG4RPXzP9PGor6XcX84GwMp7VQcAPdnEberHuZ7gtbriN9VzVPvLtA",
  "key15": "466L4LAD42a9vAV5Rv1q4qb69zptDfjLTxoiYonZh4KJ7NSrCSM8b5QvWSLpsXm4v4wheMWjQHm5MFwRodwEd9AC",
  "key16": "2RChpSgh6HbzYZLuAbUjAqGMs5huGoUaNoAE1KBa4fvEJ4LhYBz3dXfCnS2ZUusxwJGFBLyegJiQToRumuwPaejm",
  "key17": "5ZgZKi4XCUjUUSj5fbhYEp36gKh2sbjg956wMPKU47yS4NhUL16zLCX1rqx4Y21kYvqQqAodEdp2uqMKuGrFWETR",
  "key18": "2dN9CM9qHMW8ejG6f4X573XFbrbP3YjivEUTgucVoqAiycRB2TBMJj3RuQByEhtXXLUspuHQNZG34De8nXYDGjdJ",
  "key19": "4PJw97JUJTN3SiG8k31yw2LgeB521QQnJ2irxvczcsJy5HKZSBvCBmTJgyu7vhLVP3Zo1y2k4RuuEWuAZawu9Fo6",
  "key20": "2qNSC3zamJAj4Htk5bCsomvWRa2TEXKFxHuX3VLXKbLzpn15pvGYJjhEnNHetmwp94cxkJADsU8B42yZiMCKkRYm",
  "key21": "5PeZd6uyj2pv4iDr8dbU3TSYEZKGG5NPWFnig5d1jF8qaxGJ6tMFmT2chsiEKhWEfwBUfVpE6DPVN1hYoWmanqma",
  "key22": "4cr7j95S6xLFVDsVL2zmKQcLujTDHKEzaQuqqVxukFX2FJvg2vSVYDMo3q1DPrdg3Tjo3jr5qttWWZExUgDgtHgJ",
  "key23": "2NtiWW3JbZ7xdmHKRdKpeBcTprJrrqRp5MHCGZaYdkZ9DpKAQftaKJrE19Jzn9xGBpNN3m2ttEWWCm8HAVHUCEi3",
  "key24": "5rKZ8ZRkqeyfVHB9NL8yes56dkLqGMvmbMQYF6EBxY8zZVWiRmHxpmhXEbnWcsYv4SuXJMdJnZuhcRxrRjdCcrvX",
  "key25": "37MqVoVRAkRrD4nTsnMr6vACCtARWYWMGQUXkbEWrzJyDe3k7rBWoKiuLco8hbtA9GYdDEzymzCbyMTs4hiyD2b",
  "key26": "Bv5uBXQ83DLKjxHW2fRQCz5AoL5EhistMhVaeqqWTRyXbExeAJ4aMMNWCqWygop3fh5p6jgk5YjiHuq8R2aMs63"
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
