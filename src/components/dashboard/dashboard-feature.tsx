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
    "4fMyZHCTNxyDCe24heG1Ykz7XdfVdY2g2B6b3rbQhppG5H7xeDzumFABwMRJ4fAErn8Q23YC9cNSUDn2Aoo8LzbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jgojhvuY8TrZuJzQWVLzNo1s7hW8m7FxEmt3WKhiLHUCGgQCc9Ti1Q5KaCm7FSFpDr9biRCyPt74injNGJ4w45X",
  "key1": "2FLqDjNoSkLpjd5ZUysvLBGRsVwoYd48EhhPLyAzF7xXrrwPXqzWbQDBRkqxLWyf2yKsHuA2jLE65zxAtbdpJgky",
  "key2": "5rxHJbZBCm87ThUKPpJN254A5PiRNMQCgzHH5XUvoAGU3b2tgy9M32aUuFFYZT3wxgEK7ZTG9Tyq7XkG66q548k2",
  "key3": "4GqE5qDsMxhFbmqXnnogh8W52EHYDnbSw1J9ncuNTWREJMVhrGnRvSRZzassDjU38t4epMvZfz3hRC2k4GE3cUrY",
  "key4": "2E2p7v1UcvQrmRzK3hPqfWjXNMd7EfZihUFMe4y1Yf93Lh63cfnvqH1LcX1LDhNnmCow97FxzwhTwCsTqGTtFfcJ",
  "key5": "4SrZvN3yRn1ZbfmDWB9MAEfBZ6XEzeText3WQ59NTY9fmEFU8V9r6t6SpjDotMDGbNE5t9wdkcJ2hqGYd3KWxvY9",
  "key6": "4XY79ig1oFcgZ8J6qsK8EyJmd5R3ViHGwY3Yx9pkKtHLkv7pq7HUTkHipwP8U5hdaVTXQKV5SDzpQ2rsHpdmLPq8",
  "key7": "4f6EjZW98H2nHJoGHUpP79dNMJqLgHVEERYcz2EsJEvLHUxwYRZNqnVPQ9MFm7GYDPKp98MrNkNEQ9TBZtgaMzfX",
  "key8": "5ykge7qvFud7wJpS1HEpJ7djfbFssAUP1q1oKKPJh36xNmbHWbPEex8q9Qj1Y4hDyGHfQLUeFJm6k2XNpwMpnnw6",
  "key9": "TjgBT8FaaedXNbJzR5YL8dmc4yhfGrjP4ctJBCryTnMGs7w13XB15KQuGUkY6QcxVtyPHnsJpyCtxpaLdEsoykr",
  "key10": "Phh93RWUhT7hEspU2nPZLV12wz7pdTbiPyukUnmDnBDEo26xEmdT9vpmPSLNKqyKcExzK3wHdQYaZXUuVfSb3CC",
  "key11": "36VFYWtzjkhYV7tbNd3cpwXHaSuwurHU8974c2gboe6DBP1Bx7UTZz8jdyijMyLyU8ufKoYcH8sSRKsDefaUCGNK",
  "key12": "4JVk3wwcVYJWTxHHqRfrEYumRWjzaEZhSDdq8JAzM6D94mdkBt6qiwEvr3GDJEbYnGavAduamjBXGT8NYCLq5VxF",
  "key13": "5NZWMnzejnA5RS8ujNZujJVcnLMGegrmfRou5fZbKrpMseDggziwXjmCm9mETExZz1pe6WJJw6D5WtQptFNZDZC6",
  "key14": "4fgnMNLdF1PUcij3ioAFhgEkzqzKLftpCWUiF8uDMGev1Gj7rj3sUNw9XsCboM3VjKy6jj21pt3sG92vmQSaY59M",
  "key15": "x19EMawakqJQBfx7K74U4NPhuNy6km9yxKkqWYN5XWyFtAuze4jqt6sL84XisSJ7c94RWubmW2br9niHoCso5us",
  "key16": "2d2gqbafgWipwZBfXVdaTaceJi3chQ6tMZx5tRxQV3ucwgB8N3KzFcGW8yeGwnhdW8r2nEh5mGVcVDeESQYQj9WU",
  "key17": "5xCkiUR9uDYzMAs5A46U2YQGCiTT3FcjLoBWxkEWgDN7YitysMGuRDBG89vfYV8Lq5HZH9ZNBnuzoxnYXx9aHDN8",
  "key18": "3sqq4XTQ43mBBHAESgHdcPLAYSbJdvcZEXe7JNFhjDvHLmEG2GjMXL3hqpNurUw4CW6mGqRfgjbxkdL8fBrWzRTM",
  "key19": "jAZbWcxvjJ5gdfCepd1JuybV1ZZunU4e34ndn7yKfKB2UDg3RsTUv9GyppvgbBygVEStsHiGqvnirx8LmrpupFi",
  "key20": "31UaHuPp6sWbsfZZaLMYfxcJnztJH65QSyUSftQf4fwUaGh4i62QxNuPsQiWNhBCc6uqM5rTbQMcmzaXM1PUMCqa",
  "key21": "5KLpzxXQbiBkFLfzi8TWk7czbzcXF31tqXH6A3K8Q1XybNXnixQF3erdZx8adxHBqmRSVxp7pw7shwyKUprjkukd",
  "key22": "127LkSkrUisyTh5JoP5os51Mi1B2JUehJmzvdW82icTiTFjDZZWHGWUXFqcFRVRb5wBS5X1NLUNFXZVguwcBjV1w",
  "key23": "3ZtAweDRccj86KoC817igVm1h6kFyGPA3kLrSMPYp7a8KmAS3UQbtEAT5rM9vsnzJypfsdX5ZJ9duQXGgUfKNdJn",
  "key24": "23QahuHuEJTxnbwMohrh4CMPUZ4D4jYBfTwgRaUYSh7FTywo54EzFtoTsKDuqDQkaXmDrDnkuut7t4eP184aDK6V",
  "key25": "5nbAEXTcLwGKVH2c2okmn1yAMuLuKTt1xBtSExAc39hVuU3qfwL5LQXsGiCiSL8W57t3S4pqLVrkyDGWhraUcCLd"
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
