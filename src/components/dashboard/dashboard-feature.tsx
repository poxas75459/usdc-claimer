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
    "528VXRMqDF3fEh3HjsHGHmbQfgHnsUa3nfE4YFRJBPwxvuQjsmbjE5AA9G9suS73CPqsA84UcbAWZN9S3XB3Eo1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WRYt78qNrMumZdL6Qb8RR2o4W2v2TyU68wyLUbTRJcWaT5rWpCg2gMhG8uwzUZNeAmhPNWJ8hz6tuJeW4kNpKjZ",
  "key1": "3BxnKSKexvjtN2NrLpYihmzTronCutEbbArEPSLLfyRKArs1EFhdpAjrkeGTVf61iwfXdHT2sPveUCNXYbn2Z52d",
  "key2": "2ANkKihtEmDNNgaHFZmHYzqtizPqPQFV2tW9MoxGZqvSz1TzQ8G5BjZcy2fQX81gbEPSpPBJZ83iXJt2rB3XxVb3",
  "key3": "561R8kMqH9Mj4zT6qw1AFVR11aAz2YBoAHzjfi89eLoRfc9ThWcmZc9Bs65jg3zD93SLjX9cRy7RmxWL5tFc2hNA",
  "key4": "3EkqCM3YUppgURbL24mZFqkDSFVfk1kFj1LvkE7LZJ43VV4UNQCKY1EL394inbr3rtqNRn9Qt7cg75Y6cVCvBZK6",
  "key5": "3hV8cA2j8u5qNSV8K4G2TiDoDybCKctMzJMsnxEGN94Wj6g1F44zx8VjFJnVEYi9eFE3xfGnE26Wn7aaFQtcmYZB",
  "key6": "5XWcHtpiHkuQVtfHTirHmcWmJs4GBdJfEZfUr3oKnZCKBu63zZA7zhCozjM1ZnErvamjUwr4qNnH1Wa4f9GCxKT8",
  "key7": "53KLTwXvMsQ9Bp2tit5ht7eLJx2c2cnNtaRbPDvstF7Xr8E7YgLfrHYyT4fWjTtDyGvPfYuMEwwMXuauasbicUZh",
  "key8": "54z1YX1DCtP2Q1NryKDMZjGKCxptt5fx3ANDPXQ84kd1n1xaHdAgtDiJkcPpd9Dw8WuWVGLyYBBEErfR5QpTnErz",
  "key9": "eXEW4CWQdR5kpg7x1Dhx2V9P8nw2JJjFbeuhk8cpte9Fd4sa1fk41wMmZhuJUTkj8w713YzNxQEpKXCQeaoXpmA",
  "key10": "3JzcFYPkhc8jVrw2JtBCkVJA4dMfg5nLAwhgHn11wHgYcCyFEhtvgZKxnX6KyoNziHUbZBpTu5ikJ1Rbe6S9tYja",
  "key11": "3HiMAwuLGYMCzyqYUANU9BULt9H6T2PjsHa3e63Fq74KV1CPH5Qu9MzfopnQzWEbwSXqYL2CsmjEUXNB5unHnPKJ",
  "key12": "5VSYpKZnb5fSLGGMZ16Hq1GMNtceG5kj23cZrSGCANcGnbqP5QcMvUnbc6z4NKD4oou78XxHqgKG3E8jwvoMMP1w",
  "key13": "4RjF5SZqYb4xWvrz7SvMneC8yD4Z1ojiQNPDEtYzRV3oNj3jUYzisKpwuLuHAt7A9oUKDS6HgZuUtt3YGit3UzFM",
  "key14": "3Y77Smjw9MHvi3RujVwMKN3hGEdvpauXBxcwUkaAGHf6UH8cgr9NeotUTRWNsy94uCt4MGW4EiGUMxZN6dtj9LRb",
  "key15": "3Pbib7vTHU4VNeNvS2Ju7ico9HbuxQr4ZdzFYPCM3kYJ1k4KvDqaTmtanL5jjg27WbKAKuXcBJRUTZb2fFQEfr9N",
  "key16": "5K8pjMk5gcHAkJ2a5Uc4NRgMiF1nQrUEZZTKA3neULaxwajZZd2wMNeFmFVBCizf7jcyWzVgk7dT3KCJ3Cqq9y7j",
  "key17": "FAePJmz3KjxPut3VKhB5FwsicLKgm3ZSDx9Ri3fHDe7yQDDe924fcHuJjkr4FRtDTQAJzhUEqyfkvAds3Ljd6Xt",
  "key18": "3cKvPFXzeq1yjKkbmZVg8v9yBcMVRXkFwkBtS4w6u8uTJERtejgsMSuJR6iYi7gj6nf6muGxTD9sivSrw7MbdZz7",
  "key19": "2N4XFRxyvKbUfhgAoyfgz2VdgzVfAzaaBSbirYUib3ahtsLna7pPMmshgWfMBYXUabgJGMxZHLTjTDRQSu1mLKFe",
  "key20": "3QkES7866yrBBSot6k2egkk6zAmv6NWApYZ3xUSLM8zUJg7pdKe3uc85UjbDbarEEe8MspWy8XrZfeBa3e4niLpw",
  "key21": "3aJz1oxcSaoWHaFvxXNFTGiG32n6AsNfc8XMQzLEEDRkusFvwHLzZTPrrxRUkDCdf7nsQeiPgPqbFo7mBQ8gZWDG",
  "key22": "5JJLDfSfTJKxAKSKQkZcsetYZKbSi3vKnbaYJ1s56pjCuWBgqz9ewU8QZeUHQSXK1cmbygZ8EsRQxG8iBB1gbLwh",
  "key23": "4DZ8oSdBQdZLdZG6wPnzmS5u1Dd8HjoWtCStH51vQj8i5wZ4FgqiY59HdBoQMoV7Gkdrj7rSpG3QLQuoaAAd9Dgh",
  "key24": "2pnM9aJvUDMyinU3eonR2TWNWPLyyMXWCRk3ZfmGoAQ2R5AgC4JxQYAvkuSm1bgbe4P9bUwTbGT5qksPXT8mzMtC",
  "key25": "5AQvCgwnUGLAcFB99y6V3WAr1gg9EsS4azdCqf5nRwbFpoW9rJLcWmZzr4TRT9D4R64MBfJxMCM9niPabU7uZCZS"
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
