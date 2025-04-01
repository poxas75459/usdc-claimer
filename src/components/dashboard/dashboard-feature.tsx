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
    "53b2fUMXUaD812gvWqfvzivbjxRb3ej9r1dwpyaGsau56tStodECB4ptwB9h4714TosQyyVuzxyoscztuhwdGfSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NEEopTme6f7xtLNWneCeZwaRpR2zrbxAHY5TDm3qvxBNiGWPvyi1evEwrgdYBcmijup6wCxFTbZJNcCgduEX8RG",
  "key1": "2hBjSz71G6yxxbJhN5bnn5fc2SAWD9m5rPKAdooYgPwG195x3WV7avcfhgb2A38hLtKVHtk742yhfyyi9NWHRX9W",
  "key2": "2xNjrzBHU9yAnVP7XbCqGDQg9uAaSvFAW1Lf8xexxiWyuuNHNy7RPQci21BKnW59qhTgrSgJa3yaYXYfXgfhuC4P",
  "key3": "2sEbVzHMbWKeFkTuTyZu77LKJWpU1mEz6kVuMDJ3pMScGgocy56xLGgoKZbsVEHpYrbhDKnnLitbd13cyLQ24RHq",
  "key4": "4auvwp8XKsiYaHKhx2GjYXRCUwuAixukLRTUbohiA3x3xYLuZVgV4eiBySiGK3KmbjQLpXE44PnRLYLGbtBaJ5s6",
  "key5": "64SDGwdGaz1UJgWtggbJLjHcPcicj3X6v7CBSrozrua3iXM3sn5wnCi4fMabCZWsJazezGkYRsiByTEQtBLBqGF1",
  "key6": "4phAFfc3oETrhQeVm6GMrib6b6h2yA3Uysg7X6w4tKZC8rboKX3CS3nHZw3nXgqpdQjhiNgg5gq15MEcVw7c9Z46",
  "key7": "2qbAgLoy4VmFeK76jCYQUdiKY3S5ugQGuVmnfDwFsXW3vpH97KkF6LJQhh3KtTfNkzdHgnmyS5keCi5qg68DW9F8",
  "key8": "343L7esfS3ax5fqWU1ksoPBQiNRKLDdeArbbvhC9qskNWGG9Q8PC9AdJ8H3cza6gMahCfcs6qkq5uFikxPxZo7UU",
  "key9": "eh23pJtK77PtbHNV3SV1zwJgkPKMgSgzorBwczHJNrBaLfwB1ywkLLEwmG8zDEAWCDQkLV2p8vqURRT5bqRzJkD",
  "key10": "3oBR1z7d8qDv7vo3KpM533Pa77W1zVLL1KfvGYPCzJn7TwRKZKYCaFPtXhq1eYGkHwkTZCztW4ybZmGvS6TZ1yuv",
  "key11": "3izgMSYag8FFpwQctzLkQfaivr651bMaFbh3cx5Ha8ZbWKgU3mhSGEF6PGVycjbd6BzHc6xy9NUTrSA3NPQ4hUFh",
  "key12": "4VQ855Q6X3Vkadno4nnG5dijHcvncXdN36xvfXMk4bEuQWCE21fTqKYvz692FVXQE2CxRETXijF36eH1QUzkSqHA",
  "key13": "3MrYR6n7Lvz414omW3F4dpeu4jJ7AWPo7AZKn6iM55WLsAtJpdywqRYZDXQFH4sNgu7tGssDeZHCdcynFQWzmv2u",
  "key14": "62e58Zx8wtj5N3HSMH8eZiWkZERn532xbXrjMoS4yttUwZCys9tiaTvHLcaN4H1ikjGdb3TuppVrAP7vnW6xMFmx",
  "key15": "4BuYDChkfhjQpH8cGXqMn5K89kHppXNAtu8uGBGuMRV5XKep2mbAHvric7RYwpYg6TobwsJVra9YwMyjeryNe2DF",
  "key16": "3AZVGG3NsmSvuQiEndEbtBWwhhAb7Cdv5ynwhNJkLgvQnfS5MLPdwj6bkyyKTNnFES2DUSSwqWs73hpRLqBjtQCQ",
  "key17": "41ewVPMYeDv8yPoqmDwgUNK242f7RpX5rvLh7SvD4XatUKe6XzLDcqaQG5vNij6mWbtJE5G4H1oRb3TuXr6FUBuC",
  "key18": "5Bd3kzrydTDVQu5BAZdgXHgXe7Z8HvZnsdD3Y5zi93B7A4ugmKfYKYQDYL3LzNZQsb7XmAhfpBbAUDdawKuVL9jY",
  "key19": "5v9ezzqH5rJMH9yMLCEtvwwC85zsgGENZnxRzLcGGw2V6x2EpkWxm1HsHsVCyoZqR5jrQrojRaMvtMLvNpKQbb6Q",
  "key20": "4qUwrxountfe4z6GECHYLYpWpuireXMKnniLSWG2JVRYrtek7LUQJe2RjAJhiCsU8aBHBxSrugTxzs2v8NmmHT22",
  "key21": "7fSZCMMQHf4BMhR4FBs9XkeCQeJqfrs2eMi44egfsKqVSQnPA9Kr8ijqXKbew3Tw5BMJww4H14UR5BxRVZofJcT",
  "key22": "5cKvsXXEJ2ixhoAURVpDy6x9DP9QhX4Nh5Vaf2TdbqNqdFXNXvwLXYB7BrtLB6zkaaLx1QfHG7yuLm4AVTpju8kq",
  "key23": "51HEhhLPv3xXZqd8s3Qk3xFYCDSA1eooaiktfVCfKmJY2acmEd456wqW469SEEWJ3KFrRrAN1x4XoxEMBLn3ytzM",
  "key24": "3UjdGxsbt4fe2PNTno7S5o1argVmpAYkEQRpZtQjarZMGXDwdEhUsYjcr6dPhEFLxDFSxKTkyYU7zBGjNCDz3Cs6",
  "key25": "25zL73N8DuKh981J1ne93fmxuGKLND3RHPweZhEt8ttVKhUmZdXkbkpZS4WfmnQeTkyhjjgsjGNVkeurWxojx7HZ",
  "key26": "2RLntwFMUV3HgFVamfPbbgyAsVSzgvBN2uH7NxKfqaSo2cBRg9rZARNTCisoXdi8DnPNw3SE3nic8czvkzwH9joM",
  "key27": "5zZKdAAjtv63Fe6zbQyzg5VUafcFDFGT7UTXzUjX3zxgVo15pT71Kd3npyX5dzzXxmCoPVGuQWy1N4iAdY5FEHJf",
  "key28": "F2i3zATcV82K9L7Wh7UC1oRXjDRq6dYwTTawKFTAEo5wgF6BiShxeHuVdvzw3hD4mvmJKpq9Lktu2uuCSDkXsqk",
  "key29": "2P3PVfRTFAzvjGsDUQxL33KJ6hwHbDqJK1zfq5GQQbqhSG8J8P5uuNBs2NgFZAxNDfkmZiHeyZEXtWSCf5sGKZBD",
  "key30": "2qvahgdvJQVfwyD1gj64s35oBA9e3KRMZDatzt6dj8VYjEgPqz3w14xYKZt8Z91TJ8Y2uxHB2NxsiBP51uJmT35y",
  "key31": "4vJRqHsdTAqrPQ3GjqhZ8rpKpDErax1a7hPXwBns81SCd2n3toArhgtDcnHZ3J7ndWpJfgaABQZ2nYZvFafrmb9U"
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
