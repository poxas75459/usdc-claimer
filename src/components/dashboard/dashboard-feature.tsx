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
    "4iHa3DiPzoWuSHVT3yVJDkP2gZyGF9T9Z9hvCXmAUZQAqffkg8gDcCGffpN4GFuXBzFM6Ga8JEyLLjK7ZNPN4Rnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37a6yTZvgiUx2JkoHaptruasoM2NswXnkenhroXWVFiWvuRF3PnvV9ArDHioJN7CALLqTMrvzRnqcAoX1H5ShfsC",
  "key1": "CahfhD9Xm1Nw4KjLZRbT2Qtfmxx4EMVYQHFzaTrdW3wwHM5mHntxGitYhoAPoqDJ3UESRSVvxcb1GRHtSNyRxoe",
  "key2": "8fvsXdiDqLYx65ywvFNUasDKxX6YCG3QpDDnBCEux5h9jYH7R5cEojd5J1tnQpFYD9fqfe9QMHi7JvaJRPJSvPM",
  "key3": "efZuUZZXFvbmCSfajywdeJRV5oqhZ2MVDTiiU5FQDbTvMZwZFmQV3ydMErQoYCdG6UeFpfEKuNHs6rUNEEyxKKa",
  "key4": "4pP9TqeHwFzd1ZWKNdbg2tp38MuFUuABCW5GRb7BLChmxCgDzLwyLQoRkU7cm2gP3EsfjZr3MPgzX7nCcU1CGbSk",
  "key5": "3MEsPGnT6iuNyqKcg2n97yC6n53sJ17EoPvFT4y2xDW7QXGz9wyUgbCnwFpVenHnmJ3a4xHN9Gvaeh9hmS8TBWnM",
  "key6": "5Hd7RzJ36oU6fq1hb6wWkexxG1ZXkNHff294N81pnv4gQcSpivTnpGrTj2r6ecrfWv2HNniKR9XQMunDxFvr1Edw",
  "key7": "wEkQYrDQpQMD7AYcx8ZKsZddDZWakWeY9BQoVvBU1MJ64d6jFkBZQkhnLd1APoqSnZwKhWEuwXzwYyJ8FcH3SNL",
  "key8": "D1eaYx6mxM1CVCZfkRdhY5kqgvUpz2yKcuK6qYVqasBiPvbpdQvqinSg2nmQSJL5TZf2HmU3J61nfqJLBAoEDbE",
  "key9": "46r2LCgo2nc1MxamkomsgzeK12VN899rXyLiV1qnbQTtre5VzogXNo4voMpqJA1dThBFZrYsx535MEUX83SPhANd",
  "key10": "21SMcJk6R76iBMNnhncwhh5XS9gG5zwdrSTNfcHEJHPBtVvksyjCsaKpZS7W4Q7zq4xeLwk2JjmuMjXAV1prdF3r",
  "key11": "3xPJnNaXUL6mdUYzT6yfpRbcySbT68Uhu3ZAUzebJqDaMdxxBJzgFY3qYgpezSVDvNdr4EizS5XrzR5J8CTVDtEE",
  "key12": "2wD9jh6B9RWxsD9tFUzw1WFRqcfukZaqKZg5iiMQGALphRK8TyG9mMdj4wMFPGNPcrH6tASTj321DHfgeNrYcDsn",
  "key13": "5srmyZggMFmez2ZtXbNLccTXRqJeAumMvm3UmKdECzJUx8sUoNwUivNaKtkG6rJ67BBigitUkVtLRLXaAJjYoDh3",
  "key14": "4vDmu2QgQetzqKoCcV3zWRYKDy5M31snPHXn7zY6TDpQUz2TGTYLXjchW7FhE8SNReHr4tNyTeiHSdepojp6EmuJ",
  "key15": "58KCSbJVF1XLkw8AwLviw7RcttLxa2VgFSpawPemsVnML1Q9kZP2k7NhJBDpfT6L1KKSbq1nPwAEv6AQK6PAMkXk",
  "key16": "2vQAutnQLprXkdNGDQs9ZGxnnRukqmXr6eNMy2Rnabqmby53kFpf3tkA6TABbTG3aLTB5BLona9krmbKzWPRJY3p",
  "key17": "4fJEo5WZGoxZeG9VC1X9dq7Xb43eg1dn2QWsiwteqgyKjehxkeK3aFev5MuxGSPrVwGHZwnXDSkW1epdHLq6DS2D",
  "key18": "jomgj9p7wzi69avvSkcrMiauKYWHu7ZRNdcMoje4sj6s4twyvPvjAXHGrNh2ALtrsSxrQmmjwvPsWfyxxRvLAB5",
  "key19": "YXKAEK7ZoyQGLP5t4sff12TsTnF7cYJ6PUokFyQmWNewMW2Tyw5GSfGMTrYGdJvfHiSuKNzybjZBLhYoGwzab5c",
  "key20": "5DHUFLtC8vDWReCUQ8uD94AuddSA4Yo3CxFJeCYiANCBhfkHYy9Fxh5nT9Fh8d88bk53sKaDgmxy2jGxgSP5aKP3",
  "key21": "4FcKRU6ZY9ZbcJKMKPBWYNire1hgvTvcdJgBqdd1UdfsGcVxWAzbyLTvt3drNGxpekEqYWn7nsLZRUDdnX1qfGeT",
  "key22": "6ZDHY7oKsCsyLcAXENtVL1HGz3q7MP7cYDw2q3zqmeRPBgyNWHWAnBZrKcw4nKaEFpGQvcJwLQF86ScMRz6oJGE",
  "key23": "5gmuteh2HtkYzjkTMjJCLCAGBeHS2bwrLg6iaiCjvQVaPWDZNJcg1SZ47B51SqYjsUUX48bVwm7QmfXcLDA3qtLJ",
  "key24": "4fymwd78bmwnd3ftbLQTLiznAqbGxmEUebNjBPD1utu3yKXUJ41tnBjDWS6jKgndzioMc9LKvisqBN98y9ZKJ2a7",
  "key25": "5jn37fx9sWdhyjprWZ4GnuojVuZ35g9HBbkhNKKgBUUToajaaD332MJLipDaQhmtijoApMDdiU6JCkA7LEDusBcF",
  "key26": "2eKENiLwniknUFvfZ2kVXesDknHaQUZCDrDT5KYQqT3hLYvf17fJMAnGQEC36M5eWeCTeMefNVTU2vs6qxoGacQu",
  "key27": "2BCEVXujyRJM55b2noEjEpL2di7sWAbwXJmHXKxt7TsMFq28tgf3YDTqmFwfHkxBBqjXVA7f7WGcA1ZacCBUwa45",
  "key28": "2uZvzdeiTduUJ5Fnab3u35TtHB9CwqA9QbUkoKzdCsban9MoD8S5k5Ce9XyYWG8BTbUf6GC3EfrVmxgNpvBDTCEk",
  "key29": "4Pfsu43a87iL2vLFmC24S2wYqvThFfguU4C9RSt2eHUE9BZCC9z5Xgej2XdwnSXK1SkGDKYX6wmPH5hkMKqFUo26",
  "key30": "up5tNmaoyJyNzQderZh4Ft4vyuui7jAV1NaUhfTXvyuVUyxVwS1tE1mKz25SSG7AxTk9JWgM8VgLJEKHhugHNLA"
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
