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
    "54RJxSsc5wPW2dZ9MwN3TgAXJ8taTS5j375Zu7dG6SdwwvepG2jTkkNvCi6FgsCqN3B2BmYLZX16KrxyTQmez3UZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QLCkxPfSPHLSkhiosrvxLvLQBJX4KjtYNPGxYaPjqkGus8TVHYdnuq2mUoeBR7HfwQr6LopMRMpbt9XXeGPMGu6",
  "key1": "zkYnMjK9tXGPFdG9ZBuVtA8vVPX8WsdHU8KgggwDTzLCEGyUY6tTx4WnEuW3wG5JkuoGZAS33zCkRjYkRZ33Ye4",
  "key2": "5SZi5CNZAyVnimqeVUYDW1UcMXLZUU327vToRP4TjgTdDfcZi3e9iKjBNKVuTW654hzwwqMYPZjFYRX2YDKjvM75",
  "key3": "5PN3mQd9u9FSxskjzAFo1QfWk62ExKXdWGwv5sPQfCNowTyTwViMSjJzCxL2JP68ntM4U9hMtUb8sDr56MzuaxLw",
  "key4": "24Q5KyCSd5tESbrtatA8KbmBjyKggtrBtNYwKfKrQXTEAaRF4NnfXvn2vHwdUUY5u9zgDPMq797fg1BErPTccnKd",
  "key5": "26ekn8Czp9s3Vf1BJaMf5cxZUxmka4jbEJUYD92Ar1kyTDNVVa2iyNirmpZaGC2hFMs1ZbZTRztJmxzGYoPx6HZW",
  "key6": "4PbbrZfhKqG6fMsKFYa6ooNVqzgbQ3aVNiuQPWLs7TwMqQs463mJh2zfWME8T1nR8dHmbLzEhZMyUNGKNgmAmmBL",
  "key7": "3A4HHT2njSpgZkdu9Jo8vpZHg5EkX1arwfKjFqppWny1rKAjMbPriKThLnxmwEUPD3XJjkNvfVFW9QgVzAh9XSmv",
  "key8": "63HJZM45SgWMqc3y5zWkTdNBK5R2SKWNa3g9vgJQr85rhqbr8XcX7QktrXfgkggHtAs5THgD1nCSTrbBPUoeEFJ2",
  "key9": "4qvxwKdYKD8tvSbfY4QTHYCXXuqG154jHxtv8DDM28z6a7FXzBaMteW58cGgQxYTc5UJbB2gSQFVAkaeBGsMkTYh",
  "key10": "4BHAL5Nw7X7xDDYn24Q1azHMrMV9AE3yd9vFiqccJXi5RhAxC9AzL3BF6WxqUSHVcPhvy4q7beWzUv7aapivkV2V",
  "key11": "31Tm8yUBzEjK24JoEu6kVDfxESC4PrYZ5ha9HoppFADCHsm6oiqEoD31wCy6SeD9XwT2Ph9z9dPHkdDYUj5zzLvz",
  "key12": "46MazfpxHfCmaTVkkzaUTKFcqyxTuZhBFSTncguKJirrnU1uNCG6KwGE8NJpEgVe2aFuVEQaetwEp8GpRLw8EMuM",
  "key13": "GAj81NJ7MEXneuejgjfcYyPEny4xATE1DjK6w1vRfi9qGKjbPN6mTDKjbkidnfGZDUdFL5qS7m1jSMC7QXGMQoE",
  "key14": "RJssKRUceb5auGtwYNgLCGD3MBBkx8ZCSmHiaJbmNcbAnd75W6hYaubYuXtfuttPGRH3snSzGqKhwyj4P4HedPZ",
  "key15": "4XP2dnj7kBjosgAKHkrS6JnwhBuf7zKREDyKsdJ9LHrFUFrub41wFHq2rCGPPjwyZdMvSYtorCV8mJFtwoVZLbyS",
  "key16": "5isMvdsGC61u4HH4agK9xQq2XKM6BWEwcGHMoTiNWK4DURSPXRSP6w4SaskGkU8MFQqrBQZoVukt8fm4wYtq3opf",
  "key17": "47XCh2aqa2WDdDAAcVmqVoeUhVgrsNyhs9bx8bHfYLdgD9jWjnp1aa94oQ11qbTzofAp1cwNxmpm6tLKWyH4bZ3W",
  "key18": "2vUXfLiZjXP9NrTeo1DFf3uzZjb3hKqNwL9dATE85Y9yBMdyNDsrSwDWv9MLNuHYXHZ3mKxcWnoewh6xBCWvHL6S",
  "key19": "3TtfqsJRETrAGRpGnk9DXzR5vPezu78TSed3XGfUSVZa3tz9rbocQKYa5XARoqMvw8bjSFSnnVoprxxUd5ybgugK",
  "key20": "3ANcaoBJsW1yG9cVHPHoxsTYKLXTFjHcUJLrTJ9TbwCrBrZi45CvRJQLUN1bvQfJdwHNi7fz3SshZauXz4U5qDvF",
  "key21": "SZftYFWy4LH7LkJAPGt82mdEdfE4WaJo9KQiQZp9jMJr1Zq3rPGYMjgYM16Tk4NDy6kyJMmvVv9tj4caWKDQ3Zk",
  "key22": "3rfqE33X6XzPSxCqu3dDMDb1gY6Jmxj52TFVKNPFgvLfTtwnakSqaoC6QbVhQmPVaVzG9XJNj5kGyxCeeSz15pFm",
  "key23": "2Xun6STLe5Lp7KZ5LGbDNBi6C6BCMqmQHqibMqu6v6TCXRvueZxiHeMYRz8tRidLizAuTbNWxvG6QLxzw5wshoET",
  "key24": "5EJXVTmjWJ2Gq1dsjz9osDFAKU2v1Rd5SVoVECkiQVxSuz9EZE8p6ag6kKx4Jzmd5NzHHCkfVxz9Pu5cHSzcuF7X",
  "key25": "4bSyR7yijH6BG6gnSpFPaSzpvhRZx3F8DXtpJ5ocHbCL2Pi4FymN2TzcBZY2iJyG5XwBVKvHafM6fepyK13ADK31",
  "key26": "2SHeD51TVutgEcxFwHJmho7Cc3XEvG6CSkqjvvVTCzMMb6Jf1taZf8QopELkDYkhQ5JpP6RMP8TXH8JmZ4iraybQ",
  "key27": "4efLuPt8sRbPZ7DFtjrrsAvSroFZ94Mk4CTf4r957hg6ZDCDzW9wyEGHAcjQdMiHrUQkXh1EoezhAh2A5xxGxzsE",
  "key28": "2Lf9PqzUTYYcURHxqC6epctKW8DwG3auV6j6DotVQHiLH27QLd5CiKHuzQ4wvgvTsUaqgbnGdc9qrjkSnaQx2oi3",
  "key29": "38PTW2kVnbXUYc4hjMm7HaqQdQGCqPgVv6GzqHujNnCqwCpyBeEcH4bAqP4aXYd9s6zkW9WvjSoRRdQ3mzXMxcvi",
  "key30": "5aPyLPK8PBXhqHCTTwvCNE3mPCRn2PTcAEW6rUGCa2LzGJ6YBZfTiDdYkfyPvXkLvHqHKSYpAWHnyzGrpmANUmM",
  "key31": "2nxB5ggbMhUXk6za8NDx3gNLPcnqWisZvRVxWNepGhJwjNo684WPJnRSL4MwY1TSwQqG533ZWodvoc6hnYRFTw39",
  "key32": "5s7PkwfYnuP8u2w668TZgQHbfUmTuSQzc8FdbpKhuddg2rQELCmqNsRDQA8veb81k6PM5iUHtrfUaRJpN6eTNcCA"
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
