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
    "2cZpnPK7qwYz4JNyFFZ32kfCBKtabMvCeigBSDZJ2yhXzFsNMA9UU1TiVmWxHGJM8SUfvqvdz4xzsNYgDd8SADBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tynWYd2WacS6fdr599BFxDwGrvvBpZxJgGuoC7aewssshWavb1Upa2YZz1GCfoUriSNL7JdwJvMqEtom97Kd1Lv",
  "key1": "27nNUS6hfNx4BF2qv2YVuJ5ifyA17nVSogES5MAQaKkVmjndfNs1FHJaFrVFDECRgyAz63uWK5PpNZPKY3eoLECX",
  "key2": "3vM7ryQL1hWsUqxMwLNi9wp17GnmB6xwUDGAcgxKDwuH55obV4fUxtVnnH1cBHsTXa5sawmryHQvaeRinbkCv6BY",
  "key3": "3LAG4Moy7cpJTr2dNxwdU81Nd3mvvD9RAHw2tan4sUVrrQHkuKh683N9TPRkKbWtXmYBnUMvm4puhg5YkZs5ALQN",
  "key4": "25AVkpgNL8ZUahfSnSgghkTr5xwPBZS5NehE9oMWV5FT7MX8LTJSTbovgGMikJQRvffj9oZ9TqPunYbzozCDk97W",
  "key5": "3d2fX1MjiMWYvnQaJWhFi8Kj5xYjWsKR6tAxM8mppTdMh71SQHoPF9WxDfzfmVoEQGVwKazra8DffxmJq1an3rtp",
  "key6": "5HH93RJizs2qxKixccx7Des2h3wbvCpUcFvhkUJcVzbXgSRAFXwX4GEtKLfrQ17pnLvoC7djb4GuvkS9NEJcauDW",
  "key7": "37BmpCxqyKp9HgvRQDCo7H3ZJ4qyTdFKAQhFcCsQua6GU3Hh5bNdAZxASL1k8vdLnviCCxuN2mBEvLTEmJJGKyz3",
  "key8": "5hvdxVqKg7zS6s16joPQ1qTTeFoZoPgXcuntZsueC68rdz77sUZFyPpwgXDN9b743R7JodCEJRfgH6BU6stnJz5x",
  "key9": "4XmZu9SPVFLFhaRWuvG3qK2fk8bYqRXRuhfwJkZiGpYWCEwsKUJovbfbv8mh43DHA8cLs3YmdnePEPXcd86Wq5p5",
  "key10": "4FAR8VCt4zQBtrM8ntZfwqk8UCV9vbKww9jr6VA4w1ovkR7Vz7bkngUckwjQDf6ApyNgkHLwQ72zAe15qwpuCNnn",
  "key11": "28U6xm2AxJHKfG1Zj3rE4iViFJKfTRMGWMyfdvmKVP2z2aqC6bcSrXfurFcWYncumB6WpvRMEie5nLWpvruaBdpU",
  "key12": "2f8oa2yFufYFWjeC4yjfhFWi5MvXPXmK1gaDVdnRkcLLyCo4WUThmymRDg1MeAvQbamchms3RJKC7EyT1oK76fJs",
  "key13": "2XB8CST5dKyT1WM5rNieXMiP3zTPb2AHXTWmVnhFU3mHW7SV4dXVxmr35FVvWzfZhMJUgsE1sZHweynvgRFVLQ7b",
  "key14": "29QnqGnxQPB6qHgS2pM48fc5aoKRJCqJj4qmCUnTibEBTGZiQ2Bv134mqahT12g94qKphgnMuanc8ttgBhFJixtc",
  "key15": "5w8AqRX6zq4DD8GAgXRHvyoiVACuSK7AcfkbeYkLLUctxcoMQDMUB3mKCAXqoo5jupYWtNpEUX2UToxrw1pFssRY",
  "key16": "5YedFVJJzutoKiK6rQxTnBFEVYTrvsWcneJBf2kz6WCmLE6j2ACbxNHq8fGC8gTtDJ84ohrH3hynyUgoJajtijRz",
  "key17": "669CfJ5CYmftehnw3rTW9aKLiAjdBfxdqCjhYacX46kkj4UFrEZJ9DgQZcVVhQa8TvxUxHtDe5GnbFmBdCTCHMuU",
  "key18": "3J3mtNDPPJtAAqECM2JAEDUyv2eGpFQiXiwtKEBQ91h6c29rf9iw6G3WLdXhLYdhFEpYuHhSTJqZNvCx6aq34mnp",
  "key19": "41pn79vrL6Hj8GAh6D1HVikucwR6TEXgFyJGwxtpTeTYqEnQfekLYZFngAhH6w6iBDVmDhNzHpzB43XQ3Y1jHcPC",
  "key20": "3HneUCzHiGeVnCUYAjKiUB46zRwX7RDp7FXWmwJBG8br8bCfoRKxtQJshnvjYz63eRRtqJFeMCK1WdhEsDV27dZx",
  "key21": "27mK5Z6GaPyKLdffW5VnL6NR6MuVJjzpp1JsbMDH44qgZJsvTvgMLsfodEm1S8LKpbx5mgw4Q2Gp6eLtixTr7eD4",
  "key22": "4seXCNLXEPLWYgVkMY3zm1T8QJjjBSzBny9GV2DzKh7cwk4AGpTGfgX72eYf3YzNJT5S8cXFRFTDwtNfsYCzEdf5",
  "key23": "3BwWaV3DXNBLFWg1xUTLqY2JWwnXtwUJsTfVg2owN7qkGUq8LFPzJtFA1vfKtWZ5e2T6YQm7UjDCubNh28YhiUNv",
  "key24": "2KnCVfEY7PPkjszfdjnQodsJw6F3xkDc7tTULfaE8F9bDdhTwmEVkSnjDdJdsAcWH1LhFScjPY2a1tgBSxN2jd2h",
  "key25": "3HXp2yuyTwnnaL6XBULHnaLEXC2Tk8kmd29QMhXDKXNrbaKSmoiPu48pS8DbozQGG3mikLvfkQdYbDG3JuVk7kUq",
  "key26": "n7CH2VZNFqYzYacmap7noLV6FMrCE2PMW3xbBwdr4KdFEUNdXfVUk3KxZ9jmAttcGJdvd7J8BLTeLSctCMbDJSt",
  "key27": "hw1T9vTpYYV5U2orP3Tfpb5KeTtWw95o3QwVanLW9gb4uYtFBCo7QfCZ5rBERcSBFJbuU6ryswjgAJ2K4rF21Ja",
  "key28": "32T68TbbyaR1XaZWXpUXeBawaSDNbdo98dTWSgSJMCNX8e4rA1hbDd7TDxuBPLdLgfc2e1sH1ViMuqEjyrKMaFjs",
  "key29": "2Y3jh2qtrc5tBhteVEigDZZaxj2ZVNNXNyKjSqrMLyiZjNuQsxDcUnAaqsqeErxg6Lmcr4HFkJnF41AUcxbYhrpH",
  "key30": "4nV4r9F5Hu8XaTLQcDbnQAxeGcqubbL2QD7BZEeX8QDuGwxB9FpGNoaGe4qSWxyMKH8iguXrt27VkBQh2aetypzC",
  "key31": "2sx2kNJLetNXkEfHSmUZhPEK8T7QgjoTpzai3q4djtfHRr1osc1cc7dhHQ1NsN9DwzgZDn2u5bU45umEdFf9KHnP",
  "key32": "2vFYhFGhu1UQLVuCP7YrbTTApBwhmtWHzsgNToSb9hDTe2GF2HgCys3Wi1xZPSeQx4BH34D7jgUa875UfkQc6WC7",
  "key33": "4RiQ8FYDAwauaM2RbnNoQKGrDrHsS9TqGkRAYubi4o4XoGth1JqrY6UpuedUBu2i3htM5BUh4GGwn3uhKAdBjZf8",
  "key34": "5Q1qkQJkmkEdLyszYknion16zjvEv3DLFCyUCgStam9DaYFAz4acTj2snWudWPLdghjcF8qNcC4KPABMq6TD4ciU",
  "key35": "FKA26tfP83auX164c9QB3A2872YdHhsiA6vzGZyoeDPE8q7dqAqfJbFnYVnx4PisYT6rmNmjQNcjDbDJWttumrb",
  "key36": "KPeR4ifzwtMXQ6yBYz1vGinez1huHWT34Ya7RHzkmpgFircbjWi6UXYRGqyNv1zJ4bZBjQ5XvhLvw5L8zcSX9sN"
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
