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
    "xK3QBFfjiQE5Knf9Pw6dRQUiZoq3sL6oToyKbwy1cLLphDEFZATSmANy8o2rUwF7s35Lw5vrn327JXRkfFs3NfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RySPcvPy1dTyNLKATBkwP9q6nekqLzxjGA3bPx2WDUEgSiqK8tKnYfEAF1dHb9dwuMMZ8bMafk63rvkFs9GQgdh",
  "key1": "321e2pDXTZojZMQzhwHDkgzQUT8JF7gDpMvS6VKRpEumYRA6xVHq6UdmR3y7wi8NRoRKb4fzwDZsEMtVqSMe2Q69",
  "key2": "4jNUH2NazqVTfp9Rec2ptrghYCQwdWAVEDpSaBYfGnTXD8HXz1fQrYQcwCgP8jd73omkiNzbTQtXXpuX7aDqUmBq",
  "key3": "3tpw6Px7KW2EZW8GrMThDKySZGox9gZNC1aTBhd8Pz9vpX2rLPes4dFpjjjhxcbUVEmTuLzdwqgpEueoQm7WSFn5",
  "key4": "2g7PZ6DUh62EUxYTWSbvSehCFe5mi9Desq5Hu2WcBAGZK6tpZwuYtbyyb4ZJ2TJ7wUe4JB9xUWcrgEvavaL9XPgT",
  "key5": "4E1UUiwWZQ6V966VNDFHPgr2FXEe3meagxwHrU7e8HjuRvCjnEEFwFGNGAXD6qT6Wjk9WjoLGy4AzYUKxsgz3Gsz",
  "key6": "4M9f1rhFfNpNvwVwt1DWnKX1Z6d8uh9Zccu2qCdJEQJVtVnJG7y2cQ6K3hNVjy4oz7yGowrbMkHtyGRwcb4iQUAb",
  "key7": "5bDQtmniWUZd4awsQhFcGEW48Uz7Kh7DJJZmSs8RoXQdLQaLLKWXR6mt5C9Y2LibuaFDW9NibZ5BYhipEYiuDW95",
  "key8": "3TXanZLG9F65CnUcwjXwo82gPHuEub6rC7Gd2wtaezX3L126RTsVgJtpWKRc8AYZz6PDaKnBpnzWSRFroJ1jVd6Z",
  "key9": "5kwEqtPo2motZ3yxK5VZhJN4Cz1AgEBLKjkZuZkPr9mEoeskQxZAupSUJkqqvVCjvV7oFAoaZjqHpR4MWKSnk3L1",
  "key10": "27PSGRDgbjrnK1DvpJm9WLtm8xtfMopuCUXgGQUKyKvdoS7Y8qT9P7cXVosmAesg7QzjZsDZbuEFJ9VVJSJoJ8cN",
  "key11": "2fbZWJYgZowwJQ2DnPvT4J1kAKfhD39eu6kC56tDw3TkJYH4J5sBFQmbPrYehXQFxkFxxa5y1zoC4qVmmUKnXG7H",
  "key12": "4LEC9Wc8d8o1E3yDk6ctf1tgtBtfuQeLiK68xKK3WRH1ZfRDUcNfdQcXHt1C6xcanGfawMzR1Cz7QSD1bagY9nPu",
  "key13": "4qkjjNZfizyvudc7xJrgu42BJqUYKZRnf6R5TDLgGDRdjDW5YrEpSxpaAo2R7snHQ8bqHttaJTwiuXwAzf13k2Zh",
  "key14": "4KcsZiLvJDqzjY3opxyPsKF1PzSRmaacyTvB7xJfVfLj5H2a33FbhP8grziEUC6r6pQgTRS5ZEH61cedkLLRkhor",
  "key15": "XYTQ8SUrGamduFoA4uL3JFyMR823Lfj57DefxThNgw5aJUkgQMpz6fFys9KNxo4ro9kcC5kXzXs3XTJ3wksLL6p",
  "key16": "2fDW4rdBBbrSgGjxS12UJYQys9Z3DybHPnFKNpgGepv2ihzoxyzLxWZgbvZ4QP2WVnk8WPfn6LsXocH19BRbuX9S",
  "key17": "3p9MJ7MRPeMb6c4yf5mGBk8SX7NR91HuHgMuQYjLL1tuXzCNmGKjQwXDaGGsRW2xppMj7WEk19bh6cKjw9hars2F",
  "key18": "3gVCUHGskTEN8QA2gWPESR711hm7d3VfUNveGNZ5wufcNraoGhUxsVPAJdf88U7me5tWJvg5ozutoAzrqodP6rJE",
  "key19": "2ku22Z2VufT3bCN5xW7ywU8VJ9gK5fR9B3QS7Pe8rmdCvpEPJxQpdw6Px7R4uEa3B4n7gbr5ra9wTArmyYRVQKbZ",
  "key20": "GJYJ2BLvkMyVzw8QYSUPkQpRf9pWdTp4BFP1cvfG7gd21hKPzEYvQ8Jkb5MGQ28nLqkaAMqeUTxFcRCqxxeCcEm",
  "key21": "5mp7uUHyFqMWQKaMxq5P3ZA6Cp9ScdEvk9AZXPRsEg2R2FDkqHs1hEDKEQZkC6kca9MxCUeZr8CGXqZbrUPLXBqB",
  "key22": "3m4wBqujoFQdbW7Meu9xyD8R4jR96ojXfG35WBAb75QsFrW1EiJeHH43GAbj4SRHygh6Lik5mBKnfBoD9jMTfEkv",
  "key23": "4YsUaPzMwg1ASeRCeQtNh6oXSbhGoEckDxZYYv2sP6hXy6Vdabbo846h1AQReWqzqMCZ6B3kMrJ5Wwht2vU5QprP",
  "key24": "3hYxGpQEP3bhuWPqC9eR9WdPjkK6p7vzXmJTz9N6fg7J2zh2N4Tpbn7UefoTeWpRgxXG4aUESXH5qUvx7RGyBJLv",
  "key25": "26A4LKsxdmVRqxF7GuQhoEvhojUqam24UwRUbk432MPmdYW34wsC16dyaJxcd6TSgjNURc9VUc7fbE1CWCL65dn9",
  "key26": "gQNGWT4N4DvzeGmYi5Az7syE8JFpND1k7y3sXdYSVprJnignvWqSVDZJ4pfGpGs7mveTTT3wSWybzqdvBHETyQu",
  "key27": "2RfbLe3HLNfGC2HD6BCrL4myVYtvLyYnyzah6ttpowSfnxZ7qmUKv3aWcn75bKyHUMURvRwEfg8b3GBFHuf5bc3b",
  "key28": "KKriWqzbuvadvkFrFtXK8Dnj69NiZRe6Gx1osSk6fFC5aJx5KinAG4PDVriLLn3PUNSSVkVg4cGTEY7sG1YCXkv",
  "key29": "51uqXmBrEG35mCvnjvadQDhWVkrYeJakiRFqGGYQcKfPQk4eFTBbyRu6DqBwngvi4usErGwxtq9K84QUAp5Dch1Q",
  "key30": "5wy19VE9jtAy3pZNDAb7LJNGNt88vmYmCagk5GWHgCL32hGkzPQFymti4Hzy3W5RufUuc3sxK6nSLSkJbpxF4mVB",
  "key31": "38E9wm7J97nTvW4YAtc15RpdxcCQ1ipend83Zd388MDT8VQ6tQbaw7xWW8bB1DgUTmYckwfaFPFD5Ga5r2tvJjGT",
  "key32": "MJkcmS1BWJaESnTicKdybHmjXTHuUjCqcPQj6j3ShqG9k43Mty7Zh9xVELt78jDa1okMQrHtaPs6BexffiaTXPq",
  "key33": "2D89XGeisyTRvJtRkDybU391bVCK3TwFtqTGq1CTbbztr252WDcM9WLzwM7rsvoK6My4bFksxV8hAay5sCi1JzmS",
  "key34": "4MxE9uEGCxkB4CcNsmRS5PDwnTWKDzunSDRVGkwyeqNpxKtpYLfCeXkCoc8UxJrc97ezaWZvvqehxAT8inb8Bnf9",
  "key35": "hgLxriNBjHCddwyXn9kEmrGJhzhyg8kjxRUEATv98jySzWpJngzaoHVCKvR9Z5tuwQzFK8a2x8Pwu3KDV8u8jZq"
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
