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
    "3MEo5S2zkyhKF6yNzYRqNY4LANiCz4ypkDdHUFUuXLE83QfLbWPkTsgLaysafUncRsVMst9yUfFX6e6jRSv1QyxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bTEniK3gSUqtLxVdn9Bf8NX3BYmc3x8mCnHixC631NmJRvqk683xdFo9QBbZianhUpit5e323WsLJacKzbYU6fx",
  "key1": "3e9tr8xjswZKR6Ez2RT8SBcUCExCGTj3T1AZAL5urKy6ysX29GrjVUQigKXwvsGfGLPtzg8vBHVTB1wHrUWYBcDy",
  "key2": "3Q1xRmY5NXiT5uQe8P3pDYBzUMTVHRAgHcD1gmTpkNt6ZQtPaaa1HXscqFyRP3yprPJwCuRHaH9wVm3NzNKjZcrN",
  "key3": "5aWHGDZ2gysHWyFXa2UGKWuS475UctKU12CVQWSjYhXa8HSeqi4RzZaZyktsWot5C2cRuwTurpzWt11K6e6zofcc",
  "key4": "57Tohj6HP9w5AeXxEMepCR4mmFRSzmRdrwEUupUr6xisn5X7YrWzAigKckx6ZT6rPayP9YfNSAqRnCvrxaSdzC9u",
  "key5": "3f2T5T65uvWzcrQBK7aMdkQN6jEJFHVxUsa6ucqRndgWpxpoPR69aQfkpC9iFRxWByxwemKvvgMx2G9k9BHtUEXs",
  "key6": "3j1ibz3sT9SRCzUNT7GavvTxDswjmLwTibVL6DUfZeN1zDYrfSHbEE5aYdtBwfkC5BUpZmFH1Wvagimbdyk77ZP",
  "key7": "pCLCb1s9uLbKtN63J2AqaUYv1RTsRkyu38qZd8WL79NdLRT7eaJHUiyK5Gfm6JYkf73W4DvQBUy9wPBqvChLi7G",
  "key8": "3ZSj3d8AZXuYaij7FLzPsvop3YGxzwTMDLzEyra5R1UYfz8TZ27nN6zB1o9DDu85WGSjaegenw1fZejc5u5ER8jw",
  "key9": "4BcGChwTpch4mX95tVQv7AAs55J2hMwEvvhty8LAy1zWeR1ds78SWCw6cgMRM6ebR6HjSTpt9ieTgzLz5zGd9XmW",
  "key10": "32Ryv3pwkwGx6ARKELEZ73JgbwsWWEbdafek8QY1eBGykzhB5AJFB2NXbeVJDUZrosvXj8wBqmFSBu6JXzHEsGEi",
  "key11": "4sXjioRjyGhF2NAV7FCtQhRwi5S493TwEnnVz5zTDtH6iHCLhE81E3zwoZw11PErqGd4auBHGbubqqNjnG7p6ECC",
  "key12": "3MPEgKzZMe3Zhn3JrB2G6S35Ao7pGuWaHtL48LzYJomHZ466ALq2sHovuEMEqz1wNBtiyR7NaYbuUtQh37UsfQ8K",
  "key13": "5YSX1T8BXXu6aPqMQ8bvsZKEG4RuLjpCoaJUqrBamcfnq83PHfJ4naNvbBkJpgVG4hZwvfuqBXmu19qLXnYKxYbH",
  "key14": "23S2YtojFxSU6hiqLS3eSCRVUhZ1xVkavVAXwdW5Z2xfVzshwdRMu5rhyZc54ermy8iBko2sFjK1cY1xvAmwHHqP",
  "key15": "RrVSJtKV32vjef6U7vrM22h3fwrmfTmkfMxkpFX4cGvxq6wpxWLU4kR4wCL9PrZaurcsB97v8kCpLRpMRksc3NJ",
  "key16": "4nb1zGZ56KJS1zJJUvNK5xFoynHAU89RgkXphKet4MCSHRpQgrtfjDfwtLyGY7P4j8QeYtjXwuRAt85NBwKXDQNj",
  "key17": "35KhYLQyhjcJnyXsDWPkxc6gWzK4j9DPun13sKMCLqcopP1H1WyqTWjWyvRL8BAYRvYiqQ9WCqLCCxxcP7SWwmbk",
  "key18": "btidWzAhsre2cTC5wu74FnarxdDnvXWu1c63nCZ9V1TFuwaRAtsydB9qR712WohQZfEfTmrC8A9HgG478j1xwMx",
  "key19": "3BZQQrJyCEKULBMBj93E7FUyaRJCWA5oqZeoEmmZDxCZVt3j7ehh1xWBMbvvwXnyuC5nmHEtRtNiSoNXCAi5t3nk",
  "key20": "2y2dw7iWzN1FYTpiVDefERm53v6MQV87BdLu6bsPbM2XVxfFWD7X4ZHCgedh1z5fWaDZVvS9dPYpvhew8cJbbNms",
  "key21": "5aD1q1qv55CotcTkk7Y28KuDE7aotM5n65qBbJ31v2YirQBy8EAsby1akgyH9xj6zUA9xv8TQNXuZ4j7cXKu7MWU",
  "key22": "3W5gz1nAczRgo95qoApZzBAtD1mBdScY5wGPdX2ES97nir2W4uZuZztfVM1vm13jmMgpVdszqyyrcKqEBPJPZi9p",
  "key23": "2Li572RdMrgi78ttG1sxJ4XLhgF9Q5X9SQa1iaygFxR7tEDXYhzprqwmZCc2FCDgrzxYrULCiPNkj8KqHNpRL4BA",
  "key24": "4ioHdD7MWEnbtTvMCb8eGyhAvBnrpPeb8YH84VktTtkfnG2ceK7LMHJEgZoRj4JxD8PMXqMuZmttiJ4kqXut8FvN",
  "key25": "466YHTt88brScTS1ogjhjVXMiyeYkTRD8dY4zVYPv9iw5VreVmgAtEwTpLuGm9SBkVARbjRQY7NGeYhhG32prd7B",
  "key26": "2R19JxUcimpz6e5ah7LhqVQKrCmbw4g3Ei6gNWBhqZq4453wuy6QqiiKzTPKJuFHSdzyKeWWF83uhz6RQkz2cwXF",
  "key27": "3fV5CN3ZWNQVF2HC1kvqnqRfC8am5ivJqZwTY94pzVTpo1GHpsxpp5N8UcyiFvYGyGC5MJoYNN3vci2DaQN9NYN9",
  "key28": "z1KniK3PGy6691Va1Q1EsXVWEfirvUMNH5JNtXeGqXY1LYu9hbdAq6xBnT7jaaDw2zi1yqy9JPppT5hSv5XNgsY"
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
