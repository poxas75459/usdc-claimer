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
    "4ngEvnTq2qtymyPk3dYEQjQvChrF5wgbUqBMcLLRW9UZB4DWkuCFAiHouivP2Xee1YbVSXgrvWPuPp2UEV66e2cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igpiv78ZLiPrfVN7H2EMxP4BUmn4HCA83RRr64wHLBNrUwPsMxP9U5MfrCeYXfFCghLV9CVy4Y4mPdQW6Hx9oJq",
  "key1": "4HgXrtMpzEVt9Vo6fyXkhKwC87G4WEdTuY3ofX6mWk9WWgKNewMCoQhgS6bCWWRxsUsmV6P41LcPp1SesuuXt6Sz",
  "key2": "2M5Ash9cF9sKT96KSG4HPpCofcna9CJpGrHzuYGZgxiG1WTKh65QUcH4BJDNAVy88oD9xfsTfNfxtgN7Nnq1FMUb",
  "key3": "5142MqorhyAYFzJ16zPzW6YZ2gW7FJ4gJFcWAXPAZ4Egj7eFiiz4L1wTiya61DgXrZyFstgZ49eY6QHnq6ELKESq",
  "key4": "8s8ukmcd2QytrL2uDZFWSgD3sMuPLKZvcXnoeU84dY3GCwDJKWotceSdr1WAtwf21Ey6jYx9YHjK91ExL6T9zs8",
  "key5": "4crVDsiC8pzvJjmYrTQ98f1fCn89JenHo6eYxoNxJ4YdqVK3euou21agBSyZpReTmZWRFgzhLxK3uomacXzaoDmQ",
  "key6": "4ZJEkBntr8wkPhMSJLwU4C9hMyYqr18kcETMUPMu4mg8zAfhXEadb1ZR7uFpkQrAgY9kDmeLGmwqZ58e6ResHveU",
  "key7": "61YXWEs4m3V3ddFQnALC2c7HUJJvxL1CCvBjdWwhsM4yA3vY3uDf4Li7Uva4t2Cg5DTJZNk8FeRMHEUPb76YuA1Q",
  "key8": "5WRP99GdgBnk4gji1hQd8MagcdEAdqpShTgPH5eZYNwagpNdE1AFGZdBVDhna95H9JYDzSwuF5zxu6JLCVSrB77Y",
  "key9": "2rp6ZAvqjFhJixoUV1EJxF8H6z8k7BMtqyxtf9ZyahX9sbn9zUXQxBCeB9KR6m2qZU86dn3TajxFYensRFv31PDu",
  "key10": "3AqGfajDZXZBNh1g51RAXKyJiDmKbNiCGiYmkjSQvNUwvxzWKCsFJ99VUoLsWCc5UrGLmLYwErrWYCMCpGt3t4y4",
  "key11": "3dmLRiawFPSWYhaUDLfpiLXJEEB6TXK7pgxWav44BhPmwxkCUNf4vM2PZqU2tCRPzc7Wq7nMV6vpXWYqk9XcjAwY",
  "key12": "5dMT3MBY9oZ7ynBB9yxA3DzyAvdBZLnBUCHtmfZsiNVZQLSaDpmRQjQ55ri3cZkn6cx5m4rWAeuGZgrvNALUjLRc",
  "key13": "539x2VyvGBbCeAETcYA9a3chvCRVrxKH51k1ee2pJa91GKe99neUwmkSZRbTqCVuZWR6S94HgXH3X8DvSELbiKF4",
  "key14": "Lvxda1otwkyza7YbwEV2BS8DZZM91YpLjGXp8wFv8LZjk1tvYspReQpMFfkoPuqFACDxmLyjLUPX4CJFJ2zJvXr",
  "key15": "4gc4t2ZiZs7UfucYaCuVqWEsxXMxmzbW4UdxyRcEeRDMYbn5RknbF2KpkzT9LafDfSXtEUBwUNwdA7rf87aAH9Tb",
  "key16": "4rwSNcoBnhFL9LKNotLGVjYHkkVhiBH1zgHZBGC3VaxKMUTQ2MQvhtUyJr2ZrjrT4oWeCzcJUS27xsnCw4LN4P4d",
  "key17": "3CtpJcQh9VNGfxsSfVmZnJoCPHBfZQtBcYJMZGRzxLECCU7jt8gGa25HgcebyYbpDxJdSVykDJ98zgEQLf22JboZ",
  "key18": "3428S5wm324ueGdWiJNNL5MXVrw9ajWfQKnS7q3jHC4trqnGR8aPwy5TXZN2cNVbiDssVS1FhooQBDxwKwVvshHM",
  "key19": "1wipgpQhJ6QmehVziovSPKDrTVzxDQwkaz1V8wrFycRpXuUHfSAQ1bLFheuKA1oNpXTGy8cPJ8XgfSwte75PyY9",
  "key20": "4gG33PXRHGjizyM1JyXfyBhs9ZoNhQsjRxvfp45QDXd2XXKYZekLixZgq9rFHYwMJMkc3RurVokExxNXXR9ziG2o",
  "key21": "fysVSQBQBBsbnxr6yw6q7SpVgMkpjxat3quB6GCN9X2TYp5uJt3gAZGq4pKWqZ7qpVPFq86gLhXkJWMBJzfUX29",
  "key22": "2KBgqwQDFt6bjQ4LmqHtGpmNk6i6PkvSpJP5Advzt7URv2P39xBV4jzHVgPbZv73rZ8qMLqFpFECcbVkt2C8mZ12",
  "key23": "5vaHnwMGyp4Uq4xAG9EDMPvvSKmagKqbxXHK3iiKsahuTdn6tao5R61mf8f5yGxn4TXGr93FPRRpu8XiqARpbBVE",
  "key24": "3g8T9mVVb68kPiSzjzwLcoJmDFbihu899eZy6AbX9maALJvpM8fyRHuVfnUJDP1eeDXyaRMk9Qn3kVJ2uVx8Miwv",
  "key25": "3Vp6ExnFNGi9XxJUhZcCM94CDCMnWsAyY8ywFom9UdM6qXaMW4613yNEhGtNGMZctVM9Tzn4i9WZnEVQCdAPuUsc",
  "key26": "4nXK1wgKKdKvNG9WbkrhejmcvCEmFThWX7se1DkXp3gLhTKLWAKBxFMffoo7Mi5ox85it6bbcUUbXj4Tgm1AXSUR",
  "key27": "4aGiVNY4FTC7JPwKC1Qkmr3fXLbFeHi5j7RFQkvaNv7nD7hpm57e9Pty3HP4kJw2zJqG2woxJod69Quc6Y4deM6q",
  "key28": "49S7u128x8GA5TomNfMM8phqewXCErh2rZo6cDuBaudv7yrGLLzP8eUAug4JczDd8SYAR2xutEjTZyTTyh3U3rS6",
  "key29": "3KPsdEpv1pHR2nCVtUVJFpiUYiAf8bBWyQ51dyryPxqYXVBE8Qy1mHmYUchSyLjjGnk2QhYm1tv6futcPFqVxEPr"
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
