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
    "4gqpAN2P8sLXeytMwjESVUDWVgnPQS8vXBNFpWnSPdV4p5S2ojwzBayeN31H9UwtcaCBfmeYZLckBky6CE8BEm1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48J7bt84Zbe2fnmA1WHyLZi15qApxKgKxkhsJ54Ej7BsGYk8e5EBcb7Pd5vSarXtUqdAHzg5N3J79EQcXdkfkXuK",
  "key1": "35ebRajbiKSZQLEBfP5z6JMmktf9WfEbNp56N4kxcADcfPNrsjJJj1Q2MMqDH2o8YkVPFZYEgbxi9HDUwAuqb5Tv",
  "key2": "4zHS6dCaAuYgk5oo3qgLTDybgYKaAZrAUp74BKRT7i1jLa13G2aqeYmigGRJK1UvjyRwQt3Bn7D4thBGZKRp5KNV",
  "key3": "5fFNYRwgnq8AMRoUJ1FT9JKcdW9LkkMB6PnpoNT4FhwBxM1zd5eDQSo3bW27pRPxfEAkJcLbUh3jn8qMQHmuFPw7",
  "key4": "4A1Ab14QMRgFG6wH9ZNzRATmKkvfJvq2C3bCqmRrbotWH4DoLN97kx6dH3H9f1btcH1zJycdeofY55ea5Fe6nVxh",
  "key5": "uXEt8Er8fb4N7cyUNkPoStm8dgVmYoVorzJWKh1jNjYv7coVaVnaKq2N2ZzbeD8nZ8zVDeBfZhX6J8dHwC9Sn7t",
  "key6": "WePy4BCJfHbNc2JX9SvRyVigxNDFq33qxEBsAZnsip4VdwETLwqLc6Y4Nwmn2fMHb6sxfajz3YBvppAHBk94zP8",
  "key7": "5KtfNy6MVVupukCUMTvpWY8hsAP1aHVr2P37vLoZateP2KkjzU4NQdmR7h1PAfvnzoQ6RS5mmBVcoKZYAUSBeKkd",
  "key8": "5zeS7xKoo6uDGVomaDQCeSiU8DsQZaEqJSXeu3sN1po9nKqkbNAKt6Fv3KyQqss2rNB9VHV8iU3yUqv2qbm4ogrK",
  "key9": "5g2VpC8QH9yCDoki6YwacT23R4qiKySXVptgKeviCHoXWGKH5LsM9SWuiveytDWMQRSn5HTLiXZvY8jZHbit9fVw",
  "key10": "2ZdWTQ8RAjPunhKYaaoFeBDxXdqH9Urb3Fjun1jsV5C8m68qW1iP7L5C5JF3ZQrY5CVvZLj9Q5nHdSzEXFKARYgY",
  "key11": "5WF21ojj1EMn7FX7yrgKbUmZeRxQagQsiYhrT8qQCD73qaA2fzYNVL2KVJ8mjekEQmkK4HX12pP4rwJFfEQUTz4A",
  "key12": "2nT89bHqYJH6rtERJskWKTVPPQE4wBwmF2RYz7HMSDvUMCfjQKoykqZG2LU9BWcjyCJkwfmmJm1kmpEpafP5oxaq",
  "key13": "UjoqCrDo85HwUM8jxuPL4h2tADZsw7kBkuG7eNR7ALn6aQh9tyLdyZL1g1egjs9zxFxAvnue6X7f2PEP36vcfwc",
  "key14": "H9d5xcxHUF7J8sDZYE6bxsueAEyrHzxq8KVGtC8ruYj5dC3P9Pf3gESqYgRf1D14PFfoUqEPf16gV4MpiD33KbX",
  "key15": "GKzZzF4TD2qydC4QR8W1eQhbHufM8CmkK1UCPSFJ3GvqC7zAUvRxqRMDkXnekkUWJodC57T6W81jNUrrwHqJuCq",
  "key16": "uvKBTGty6nioKLs5ATXT3Sb2K9FtiNvQyC3KCg3AwMEy71JcWBcYAFZUwftHG1QzvfniGDBMBsfMAEzTa3ZPK5K",
  "key17": "4TgUQyh1bQJX7pfP2jj46N23L81vbRBkVMD6aXCDok2idtqvRBjX4BXcwbDsAkoVcVjHdtsAHKbyY3BNkGXHWvRf",
  "key18": "6Az3XEaUBrkC6qt86TyvkGerPSiUsCHUJbYHekfyYb9tFch6zzV1ukGjKGBhazp3eHxuWevJHfiRyp6mA9MpWGA",
  "key19": "3DjSBEW9ZQmAXWnSsNcBVLLzB3jYb5C2HaTRMRNzT9VMCcJsWcvcQGnEY9CWK4EKCDJXRZAWFXHpH3G3GzNvwJMJ",
  "key20": "4eAehfhYB3aq6J7X11E31CyFHxQFW4chTyZFrHAejmzGVmj2iZPbWXSeEa6WedMXdxZpYmRQZ6rGwhMfDJBYdk5K",
  "key21": "4bvfcZcjtopMGS8LRo19Run61ueuWUDYhmThxud6YExftA1fWtW7n8j3yfGj4LDW9GG7uqAWX3efWdxLEwcThBqY",
  "key22": "8QZUEL7dnhxLKPihsHz69gdtT9WVTGxjyKxcnnRyXeReP42fGPQiZw9sboaN5oj6zfxPTigKVjdMV4ipzbT4YV7",
  "key23": "2m7rJEkucBY2H4Pmi14JMmUkqpWW3ZReNg4f5gCZSj5jQdK75cFT9mJts9T6f25WoNi2H2r7zGZ4zyGNoLySkzbf",
  "key24": "5sXEk4W9hotdGSxsSzSX4atcjXAWnprSjth3PJUFiXTkn1To4QRGYsNi8dyboCZ4a2rcAYDooQ1mhjtRhXH7J4Hb"
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
