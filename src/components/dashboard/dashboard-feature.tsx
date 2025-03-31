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
    "3kuvoF1mPa95zRiCLW2ZNCL8phsBpXaGRRjk8mc63ULjKmpcPw7EQsEkj4HY9RZ51ooTTmYdNMorryonUsSbT5Hv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKCjeJosQL9h9buVvV1BmUkZ5otE4HDpjLwGE36VM7WGFXE4QnfWdytf9kD1TtPsoZYxc82CCvjkEwTFZAdqjeW",
  "key1": "5WcuwdJV6f7xADbFV6LsmwBHnQD2GUzrqeyNtUzCSzouWpBDGKp8GuqmaH32iezyFXuRc2jhXXCahivoTaEdkpCS",
  "key2": "2xS1iTX48Lg2T2nrqYb7xN7ebFmNmEB8dDZh6bGBeoAD9Amh9KLLj5eNnNSWTcrxkWKsNXm9UF4y2wesf9nvYQFL",
  "key3": "8yGGiFbgxV9B8bC3ntQbpmTjok5mxPPKHeK431bjx9JHmN8TQzdcgpg1215angP8Kn9mNty6FZD2xsNX1RVeLip",
  "key4": "4eVSHeuGihkbLgKornEQFgui814jyRG59n4hY72NeWaULdjRVut9GxiVmCjren17fNNJ5ML2oxPp9myzHdcE7prQ",
  "key5": "4Z6atBU3Yx1JMwYzjvV5bkjmZ7RgvJC7jnMeCN5TNzqx48nDH8Ku1SZqHSshxFCXb2N5NVZkLNcMzF3R2Jx9kNji",
  "key6": "3GBiVD155gfr97q7C36YkpSPkfw6hjfEVJfh2cjjUFvmVaCyoRqsw3bFYn9YYQo9qQXeDnPeAGzDBY7QJss6BzP5",
  "key7": "2SouRH3Jw81a9nXU2ZdfS6LrqCLdj414xyDJcLtC4tNmhZMb6Tk2i9HsRpWL3VP5oM1PSnRsLiAL9HpRA2sgSTZo",
  "key8": "4zb71hzx3VFKtQtaG3wt7fuvPXuc1yuY7sU8L9RA4VsYFcwREMvhBjXVUCVzDppeCUcn8fxUpamUk3vSCYCpn18U",
  "key9": "37ez5pLnaySrZy5cFMMRAgE1BhQ6UWWPgVDwqxoUUdyuGQQrKUbBu4tzdBbjb4nuBzbCJqSVtGxz4TS75rhrBjHV",
  "key10": "5dfjk19NoBvUidhCDyaH8oKF4bxnjqxgCX7GbrkggHGRqW79JKeyLsEhiWhjzfVSwfX1cSg3VaFMc6QYiT46WVpo",
  "key11": "2jKaKjTqACja5GBaL8TVXkuK8uX7Fg3m8jZWJ9Cj8mBtNj5da5LJiA5ZLdj2kR8fkbmLT4j5XizniZpQGMkZwQx5",
  "key12": "2h4SbgtHqyuAW9BK49Lg6WSpxTF9Z1Hz6ydMZ9Mys1aTGSmJthvA2sUauUMUtpgujbsQm6S7vNEgTJXBVoyXCGeh",
  "key13": "5zZibJPZevoySDVwZ2SEHWwAtiKuRbknZam7WPmDGfVBxZcRtV2qBo8MEof6LLthD9BjSEzPAhATJ2pfi6AjeG5n",
  "key14": "3JWqFMX1Xz1CmMs6ETdNoCDgVw3wkJf5rzv2zHV8eSegwvuTLfpaSRdbrgQNNQvRMpVt5U1F9XU99toYvBnqeitX",
  "key15": "386twu17H3Aop1Z4kxpNWHpYe1pygNdWSvagjYRT6yZPBG7SXMvv4R7oV8x4VczAuUwwqpo63aXKoV7scURwAdUq",
  "key16": "5JKEmJt5uXiHwhrEC4pDXz6vKrExTswwXt7LKnTg5jy8kqt26fwNR7EjQqcBYrQeYMKQgjZkMUL913YPWJHBGwSd",
  "key17": "4wPuporXYRAmEDQmt2XsAKjjqfkpfqFxY5hwUCG9eQZ2Ajek7Gz6yiLUGBoWrK6hb1BWW4Lavoso8BMSWR6wJq1c",
  "key18": "4uM8ESaLJpF2uTZep8BZmcTMN7zKRpPbwCQgzkYVXXXjJTgvh1UCzZxNZXvezoYGG2un2teqwwxuqBDmimikEN4m",
  "key19": "4J3YcanD8HQ7BG7iHgH3kbJBAfU5x2efJCYznry6NAfJYnVrBKD8xr7MiH99B67vtWm5XJPF8P2dNzKCHyPBUa1d",
  "key20": "3cs1e3tnXAhgYfTtiovT9eowLnkUapzdVdPq5n58uozk19pFWASd4tRWGxe8kKLckWKo3pJoYjYKNyJhwZWCPobt",
  "key21": "5QPYAKSYpb19XKCynmtNgZTBQQzWAVUzqakzire2WVR7pN94fXZfsMmDeSDzC6Evq2jMh3okoZhRDuuGLG1AhJsG",
  "key22": "2GnRiF6NW3whpq55iLXmvegz5KuyRVobcosXugUihJqPF8iScX4L3Lsw6zgCVSZCDtaqMY3rDkxpxRU7xYV4jLEg",
  "key23": "5nftaPizscetSz7A367U3ZaBGWqM8hDAbW3LdDnhAYWY7F6hjEmqEPB3EVwMnTpZ9tqdTrc32r8wW4d9btVBrMQo",
  "key24": "rcfuZYHy6CuSWVaKtt4sn7e3o4GkDzQfMBitpqs7xbB3FotxVCsMDmAWAyDfYascL9hX6uYxap6cQHXsacANhpM",
  "key25": "L9PxD4wZ3JcyafBjTreWFtovqvZ1k7MnPqcJ1ydTY7eYUwgfDfQrFeQELAgDRDKzUji992GWpFyk6CuTwYRDFZz"
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
