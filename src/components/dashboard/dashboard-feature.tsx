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
    "xdjhdae2VHM1KV77LKPTbyMvRzCjVPrm6UD5idixjY6s9u6Xe9evAYv2bYg5NmdKzMy74VL5qM4eRTipHwaU5QV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QECNPc5Hz8UhhJAC5scac8VQxUyYrEMLE431g7RFUJCsd5iyH9AKa5LLwRJzvrBmog763ybuNtMrYSM6VwoweSf",
  "key1": "5f7SsquwnM74wezdQZjAa2YqEEeDquW3qMHnh6EuxCP7DX9SogPJLYWnx2kyXqcgvMeWgVZWDf8ev2YLQSE2jpKc",
  "key2": "5UaqsAtfZLNAvv8SZpDQNxEngZPvbS43JaRs36mxd9inoA7HyVCaYaa79ha7WZ6JuSqYJDCHArRHGw1dhTA7MNvA",
  "key3": "4DDbAewNRPmBXT7g3EHXj4sgSbsWCRWKTPxUEMeS3Uyry5MUfJh99qLr2o6YBEuJCS5y95MhLMB31Vv2mRu7xK1m",
  "key4": "5QVqtZPAFibfxJb6dFjb3bLuhLxc6e64MQCjv92kGo7rvXwVwwEcddwWZ6wcNdJ8KPK37aZpRboB5Fa5PDuXx3gp",
  "key5": "4qei8eHmNwwqefpusDDJdWCynRjh5wxPZhreFtgbvZEH8nHpHahS6bWWhqwb7764YiZ7rCFKann9K6gfgS6BKCke",
  "key6": "5saXKCfbhM8zycvefWe3Hteu7gAKCo1sUhFqvdSxE84ohZje6SsGzHFXYPqzHB8wn2F3aXMZERgMd24JWQ91fvG",
  "key7": "4KyzGaSqv5hudfGSM7NnXRfmdMgcXqqxkPm8p3K9GpcrBNWYgmAbmHgEyKnQcSUj6s1jn5e7VBAn3AHm53kdzYya",
  "key8": "3YBHdUog6pjNvUvno4uZj3jb9XAhSPNyuvD39YvH4MhCMqARjNva7zGA3iZfEkaWDMEEnsDDLMzoVSK2Jqp7Z9qN",
  "key9": "JXdGUYEfKDbHTjCHFVsaNfPYyMb8zTnHq1w3mMDB4Ec7zCXeQ9E4o6khvYiWrkGQ3gHTjUpzN6tyiP7K2Fq3gyM",
  "key10": "4aMrwwcpMxm4RnPKgmb3RaN712jWovgQ33FAar8S19rNM78taKYt9ff9ap41m5K75JewuoQroWto8CmoLzCDogsY",
  "key11": "4UBp9EN9XxZCtWt6ZEtkAgi2V6mAdxLjPnTkqiwwzysQmYgSqf5fywBLEuLX55iJU84xB8kgBqBkquNnhE9U2yAB",
  "key12": "NxMZoqBmwNjrdF6bupXkYE7jFAk5hezum3uJ6Kqm1qo5f55CvuBG5CSe3AnH1NgEv6SrANJBgPUnUsCgNMTCgyt",
  "key13": "3y15P5Vg4TSxe2Mss58LDnPab7tBa3gGJGaqxe6hjFLuUQxLyzD7jaTv7YcrxjTdPqvM3EecaLqf5BrpcM1R8WQW",
  "key14": "63UZwBifN4vt4k9HY8gKcQoJ4GgsAWqCghSU2egJWaoFeu8nt4udfEJt6KHfRd56ph5PkFmxjEzSXfS5igFjfiD2",
  "key15": "33fuszDBhzpJpq5BAboKYYbMMTmVpXXS8kii4JPPNVVmp7gwyCnMaVvZ4WKWj2D2m6uPup2kskVDDrEDAqhzEW8d",
  "key16": "49GJuc4zjCAakNH4sYoHt9s1agYkjwFqc5kV4Pra9M92MZs1z924vJrE3XcHnxGFSWkhdoQQSWjNg8FwAXw4QwN4",
  "key17": "67hC9wCTsEZYEMkm9iTQPqF9cePUs1j7rZA4QkFVXRvCXXbZpZZWobW2uHVqLDDBpimddmfa4d9Y9tsCvY1XGQjd",
  "key18": "3rj9ksj9jcuC7vnHHCW8LT4Rxboei54TyAjevM2btoHS4MjSVNj1VtpnVzicZkC1AWwZnajpRFs8Cxqe5zzkENau",
  "key19": "4FnEedwoDsx327MD6EX2aLh2TLXQiTnJEPVXkJwAy8PwN7RXcjzVwdKnjvT1PTM13L64hJMPs1EDZgPd92THZZGj",
  "key20": "2ZmUEXk31Yvyk6osmEcLWjYgUatRPY4rWMfHzQSfHEhJbvDw3Kb5MJGwoxCr3xXEidANnwbvKmByZb6nGncGT7rZ",
  "key21": "2iuRzcnrSqnC9GPHamzuqjLyHHvzprqJbC3vdDvo23PFxQ17htPNt758CCWp6t8GNjKUdS9Bw7W4EekamRy3AChf",
  "key22": "VwR1swEmSo4Jxoch8rySDGhdQSYuuV2x9eN2pT8ERQcQYFMZR14hBGKCnsQZACKPk7YghZzAbht7Y9C18qiSNDP",
  "key23": "5LMNG1oRn8iGbY5kUVSCjDwuKSeHRWTVPB6PY4Sh8oQkiT35ZnkpkyKMAP974S8PbZF6GYz6s9Bat4fTDrg8Yd8G",
  "key24": "28GmQaw3r9CJY25tqY68b4E8mXGH2ARgf3QcQvhRuwqZ9X8ahkWm1LQfg69VJ8s2Yfs5Pu3tySesECFniyLzCarp",
  "key25": "48Yc7BnC5KkJ5uUm1v7YyyFbtriXNMW2NeJmrqBkZbdoqcKNPSTBei8C2jDW8N2xupkvTwGmCDySM4yxw4RGQXZf",
  "key26": "3xYALTnJWtoeTL4Zt664gzSZwFkSsHa8rjkd3kdMWhv3yJass4YSyVUsonwqe3E5BqexazcuX6VjQdHssWUVwqd3",
  "key27": "47y6jcf3kG6Vote2T9vwV1zMH35KjYo5G8DZdRmNnj53zwxAFgvNfXdNhSnGdeJmG7e1JrZQoQ1yr44BWscAKCZb",
  "key28": "2yY3ho3ewpP78LukQZhjwhv7BKKzVucQowR3Bm75GVB4CsSPzws59VkkTFuDCA2dGLoN9zGweT8Gm9zb88r6SJkf",
  "key29": "3sur9ZSiLmjuhT8VxXpKAL28nP3ooE5MBRHnN1cz7jvKXL7nzrF2iXCu48Np3gSwt4EspWNHAbSG4X673i3ZjLuv",
  "key30": "Umj5pNk4uT6hc8dj8qmRSot5tgihUhTDcrekf1SSTi5ZqmZMRg1RbgvLr1m4bbbrcYqUCpkVTmNdLohrThCeixs",
  "key31": "2B4pf95VEoSjSy6vj8CMiDEHYfijDMRhtjT2e4PqQbSMnXK3gaGCWhBMgoE5o6x5KcpZtBXN31k4JX8hHkixEdeW",
  "key32": "4VttvNQnKzz612rm1WgTE3tirejfxVMKB3Sdq4RnJ5Rmp6k1uiwQRZZfQ7tNKALxf6R4rHnJdfQsaVXRbXXxk5tq",
  "key33": "445hFj39ySgJjsDqjZE84oe3qMNvo8TtsY7gdSvr6kn28tZ6jFh3n3jb7H4xZdJRZfVFfLYxV31jZTznP1p6PtUe",
  "key34": "368MeySqbR8rw14VSS6Zwn1gfRntBnMMUUaDdLN2YsGWDsDxXyUQtwiKMTjfAwVjzpDzkfEGWsQFVnuXKDRENmvh",
  "key35": "2ZySNoijagXskg4UEmS5DcZnEx5bjXHSywH6VHcYqw2ZYXMmmxtMPw54ZV49dUSNLPW6otCBbdU7mnCvJH4qs59s",
  "key36": "47jHchtn4QzwyYjdnYdh6fMg72bVcQpwouYzCqdDUcTh4NkHREgQTofvqhEX26W9AEA8aqMv6gWjXmMqhqcBzcuq",
  "key37": "3TrzvdHjHcAfgkF6GWPvSFzWcTLkkLvKWUgGsJ6XouQV4Km5bCytwvut2SS9PnAE9ZRxxo3J1nfYetSjvLWcj4Fx",
  "key38": "4MTVP9vjXUQhdA7ZPSixT8YZszykFNYmb4gBGCLnfPnhVVeHscAVnFbrt4q2MbhXVT5sddN19i8AGmt1b9J2XBTT",
  "key39": "2nHSK51u2YjtsPsJ3KFhPC4kEsMaoANPUqmY1SZ9kgkAHp7uf5snE3s57CVCw8zUsifSRFfRAMZKGs5xsVwZhApJ",
  "key40": "5SGsjUTPbXeTju6PdNbzCYtnRpeZ96sRLMMtRU9RpAfkgwW1tMWQWr7xYHcgXBzZHPN4WdUXFxFPMpPp7S3XrMiz",
  "key41": "5oako7YFUqefY6cTXyCqbQN5NoZboGYySdhnVdsUbxhDUFLup1F3Vc98vRbo9qBnkDcG9gK4Jn9r6yQMb8fMTMXL",
  "key42": "4HsivheiJErTR3CqcGcEfrHST6gJpoBq3FzsN14kxppGzfoVhawDDRnew18CSA1qN7vHMArEybfNJA4zZdzSACuy"
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
