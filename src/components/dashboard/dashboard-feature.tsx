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
    "7AeCXx6xTuLqCGcS7WWR2Sie2afp3MsbPhFeXScismaBa5W9FofdC4YGQLRkMpiuLKWnY2cbRjhpGvk8eKABmdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qmV3RUTMA7Vi7UQS5tFPJc7HXsdeqVPMTL5PZLjTKgXxCPs2Q9LCJvuDHKwQF2gZYgox7Fq85fgDRgCubB4nupx",
  "key1": "2Ueo3jygRertsoUhDRkKYWH4GSwMXnZu3Hs1kav8Xjzd9VA1mEwxbv89a4sg9xw9No2apcbT46sEvwMe28ZkzL3e",
  "key2": "5ZTWCctS7i2gZmQNCnVjQ3EwWuv2F3PeHLnhDXbYRJ6DhtdwYnmzHdYFobkkLqt6BSMVJTrHgKvSKmLuNxyWu413",
  "key3": "2idQi6w6QUveEJuTo2o3XzH1yXA4t6aiuvChAUAcbnQ3tNhoL4dq1Rw3ayeHak8c38bMEQDKDUKC2inUKh6SeacU",
  "key4": "3TRnQX43AVYREUBsA3sZqCXVcqt4MTncSo9RaCGmq6AHievDEfFeEobL9tDvtPN9M1WfiHwv7GmK5Sp4ahU27GDn",
  "key5": "CwioBmWzBnFnqmWzgyAhManXn6aeEoj4u6KzSsBWEP8kjBJsbFoYJNTTA8e6qfvZHKr1GvtWAxfrPnkM6mVeUzN",
  "key6": "2w62LHp8sfxsyAtUweAVn7Nxq2T6fsCh7AqTAZ26qkJn3K5aRPazafQPpGaLHvYhWE5XeQgdZDw7EMfgNVZW2he",
  "key7": "6ygyvUGXqKRkDJjFrsMBS6YGYUwCyukSW36GgNMAPQuVJRN56VGX6HbGCS9mSZT5RtpmvCGUdLzwNQpFYtoVUbX",
  "key8": "3Cj6XMZAoBz2diz7CBqQqNupYWqkJPfkYGjj1QAtiQAHr8ajKaMpexiZcCxAxNLjDHwBMn4BX1RKyGwxGRwUxJvy",
  "key9": "4Nf6jh6cNm12TbYHRNjb4aUNcpuKnufNS7KcY5iJvc91G8ihH2RfkyRGLsY3kADnDkKSiZrvXpKxsgbdCKBD3yMt",
  "key10": "2qF3ZJRYYummxtm2phHTygCLY6SuzVCwch3e1taAiobFPzibASrkYMEyffNa6Zu9KE3jw4Xhc4PSfncnHykGtc1W",
  "key11": "JBCDCjaW39tK7LLTvJPdvS55rPh8yV5udaSMBxstrTPqK1jExa8Fyzrjeu4bYU6obVqyxUDAnpyY8TwqWC19Cq1",
  "key12": "kb3tLrmd5md7V1FqNQr7ARjzprkdnTSKnKWcWf2xZemZjmhEV6FJfFvEuvMtX7Vw5MCeBxftuuHZLC443abZk7h",
  "key13": "4snatJyC3JiSzHSsR5q2MknrnZnDijGfu86QAdbQGtby9UxDWvHsUwX4aNJTFC6Lwu7BnceL9X3ztNVu5PVvgMHV",
  "key14": "3KP1LbDoAKcNEX9sZWv7tuGtH1RcjUXtkatQLLYwCEnsBp2ZcsBe4g57dM99AwQh2ASbfrAPzwJWsx1Qtuiqjz8t",
  "key15": "Kiiq1J5AycgCZ7tYRy1xQzmes8cQi1kTfdRQnvPWMvB1cTLNas2EmZeeMSoU4QMT3ZbMpUrgUHkiJJSKDX8PzTi",
  "key16": "5hsczAPV3kCxbvY76MvhxoHFhJdTMEAqLScmdDSgQSvgKQRyxQZ2A3btxxgaV1nZQ298P6NQgkBxz9sHnVicYLYw",
  "key17": "2DDVh5itM46G4Njay5ff7gBbabTvv9r7eog7usUxvNuiPKo7ACtzjpdVDpKw7Nt85hGbi25gfWA2Fu1TJ4MvntAE",
  "key18": "4jQrhiLhbPn4JJecQHmkUrTMC2QbX6ZrwGGeritkB3DUgy4E2Bqpc3Vdad94oG7WHWHSe9Aihe5SrEVAYTqcCorZ",
  "key19": "4TX1BzncBu4Yo9be5W2gfPHzWc4jjp2LHrGj8Tf9hyGvh4wZ81iBBzKrwWsmbenWbJoPmCGrzXjMDhL6zcEYEW6p",
  "key20": "27ED8GBoYj2VrKThD72bKCbgxz6fBJoNBQSEpRdUCSYQFCuuqdrsiqkGzJoYecM7KGKkETnHZR1RUvMkhGa136St",
  "key21": "3o2E5MbAh6ExChmrYuxAXHf3dv283U6ghXnyn8BKoPqq7VuGnh5jJ9pBLqcMzYDqLmec4JmjuLWYLiMjozV7mW8q",
  "key22": "2EtCCMkMEkMuZhLXCh4hKNVeGQRYRnB8Px5HyTrKgEkVN879ePvLxjy868WuvmzmTAdVeiz9ixY4e8QkVvNVZpFK",
  "key23": "2Xr5nkht1Memsa8DA8idKweyfqSZGt8kz7zFCgGtUMzVTt7hrxVPcRmoN4VUZo7UjNxtPEb4FKfAyn4N2Q7iicM9",
  "key24": "5kFxsiKq1DCzmYHzZtF11v9RaKjeXfvs1H84yWKnbzgbBNPuxrbWhfv6TJDZZWfC3PLmqBjscZKac5aWEidKmbdv",
  "key25": "Q7j441qW5nZnHczgQsfWpyB7sQyuR4s6Em33KsXdLEy2i2HFdyY1vyZzpWptTf9q5mwr58QmRvxdJiZf5f9sirg",
  "key26": "2bkAdaDnsviJsDpFiHiHPjq1mSREt7cDyxQXZhfUE4vypDV27jxevjtj8XF6ZoVeDWvuhAadcgGXiTFJ51Jnnv1D",
  "key27": "4Aq2qKXbvF7NJ5qZYboPNeG5RpCNTnc8EN3d2ukSrnhwiu5sxQSdpvYwRMcc7NsspvtSCyoZPcjhiFjDNSjHfD9N",
  "key28": "5p8jJKzDuyNc2Qz2Ys1ABsXeo2Vw4AJkLKmCFNYTtYEd5gWrJttRaCeTCFAKZCDvmUAphkw6taUfEPS5D6outWyz",
  "key29": "CZ8DTU838Xc5nJSq2QGAGpJ6hbeaXDV42kV81V7ZwtuGxnGZihtF1hMHJfGQ3qqv1LjWQCv54xrMhtsoLdcy6mg",
  "key30": "422h9nix84pGEqNWkJXhfnnDx5HwDGA5HYcpXM2R8sPRKaMpnRtVaNPryFP3pbX5gdxuw4Ddv4sU3oXho21kzavU",
  "key31": "4a52znWEPGJiesfpYMvjtBzwLjK4DCCsVhHRM9bqWAzgHKDsmLTuZvgNsrZA9Qr5wfRC7y4nkCoJCfhKWPQfKQYW"
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
