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
    "5xCQ9kWPQuqsbzgZCx94DR6gwwPnqgx2HELnCsp7wB6z9roKfxjt9obmkQqXb7cP6N3uJQKrYaLzVFhyCppUjEvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nbu8xVzUe4ehpGFVke2f5LAHFvWKvRD1T4nYzrQoUkrdqi8MDuw8cjwzzfzMythHE8aNtgSW4jLfD1sGtrgk8oU",
  "key1": "23F7KZzhwJNg2DzJD8L2niFWqUVeyLP1wD8a6CB48cUrkFQB4s3wF6j8rnZEXMWjydjGzFSFn6VdDdrc8NWnhQuy",
  "key2": "2AdP3P536FfrLwsYJV8Fm5eJ4cn5WFzNyPVH8bAQitPDyYnqb2ANcKDJQesJBRXvwYFXUWRwJKH3TZC82fzQjbJy",
  "key3": "4vB4LefkoWk3mpPJXhp8xTdiQzax8dPAf7aoquT1hLaQMeqMSJBgp4oVUoVjG4kLAanNBg62Zc8mnRBQfKT4ZsCa",
  "key4": "4Nn2X1YkwLTNo8Y8EvDehQnFhzrjR7HNfcbG7qnU4MpyxxHmTU9EDHbU2TTdKZc7NEbZdA8P5hgaRcX4oDBYzUVW",
  "key5": "5LrLhonfptso7YhzLXAVmu2VjBcJZJWHsa4RXkb32DaaKijyd1paaj8xubetjagehekLvNRprSXN5UoH33jbEiME",
  "key6": "2ZLFnaNd4i7N7McTvWW4crxfE2qcLmTh4eWqN71ybNDMaKTYcP1382FCru9eKQqDaoLbUcz7ZLzRiMjBiX5aq3ej",
  "key7": "3PUHvyUA6t6pNBKJyQFAarVYj8sLnMcZmnbTfds3SJvx3kNVo47n6rdZmL56wXyi4HpyF8nRfR5cAdCVZ8B9HcGu",
  "key8": "5LiTNKZKQdpCRevuwKzFouEmiMM7G5GZXVGi3jD3LjumKsYcvyT2hjL82rt76XNYtq11deBdtEV95YPCXws9zAve",
  "key9": "24b6SVzUGdnkgQpMj8RRy7iJ7VSG8qLZADKVeVY1hNViK3Um9zkmWE9AQgHF2gAmvmXNu5LDzxFjbnsnUdKD9Y7X",
  "key10": "55oquZ39f4SuWzRHgn1PNgir4n4qmKesiNE1XHuBuvFpakD6kBEHoBExjXRjcyZtvb4wLFnr2cniGbRgCmSDo7rm",
  "key11": "jZ91C2Bg4frKu1pyUhYaZhqbQJqqr4Uvfrb2i4L8NcYwNKYsLyKfsVcdwoZHQ4sxbBURFXCUDr6EbSxMDBKZKsC",
  "key12": "3XmdHqDyy7ois47swmhA3dBcuLS8YenaYTc4ZjvHUmuG3SW97stpKcgqTA25fgkLv5CDzh1C8zriNCSPTTSF3wtz",
  "key13": "4Jy5Nmnw4qA87VvbAMBo6RLDecMtrtkP9chcbMaFpXoZTZtNdSjPNRi7GeCpVwaYhkBZSujZoVkmXZmhsBemWbfo",
  "key14": "3mEG1G8KZuWZSJBjB6D1Jz3iFPWCFFzHje8Mzw4vUf8PU1rSruxY7fCvypbpkwKzXHHCGKnV5qd5KaqKM5zWYBzy",
  "key15": "52BsWqbDbtkjk7csxe4ChhpGvuQodXWZhhKPqhxwcdU6jhj1rgHTduvmkrYJ76fhVzxhQsybf1oJTB7TT3BesZWv",
  "key16": "3tTndx7YnDifYuCKV8c9Qrw3RgApPn96nuxyio8yFcGxfjaZReWj8YU9pkwQZp3LsjCPjoWem3r2VtABcXQh7VKU",
  "key17": "31kedcgVi6G8Be2m3k2HTe824Khd5h9aBnu2NWMTvCMmVtHkWdXnn7zda5zX1y9FfyeuWqLjZa9tVC18JVMRMDz2",
  "key18": "2BRA97gs87c9Vz9KzkeaPPKEqAB54yFmmZJ4smUvMrxeNBW2vnQQvJM8X5Rp2iGsBu7jViMAwwFx3ZJmZhy2NiSb",
  "key19": "XaSXqAskSb2Qpocdu5TuTHf32qd8pFGwyWkjK5ioxL1aQt6Jv3msBX51NfaEU2gA8zffGfeaTpboeiVZgpvYYKN",
  "key20": "4zpcBbco7v9S3qiQBSgjDgQqdzpKH8hFGesLB4gKGXnsDRr9Dn4nxra8mwYkDkMcRb7qZxXR5tamGdeksVqJ4b2Z",
  "key21": "4Vmu8wZq24NAC7qq4qoVjzZz3prRYgLQryjLYDCQYeZG5nqLfPt4LR8hpcDuATcXheiuiDFFAocohZEBHeU7cF7N",
  "key22": "3d5SkYj6RjEKiCaAxZey5Nzh9tQQQ3Yeg5zNu8L7dQQGF7Ngsk8YpNSdyBmfzRzX4kKLbimYqQsZftb8iFjKvK1w",
  "key23": "3c2iLwmdwjkjzfs8Mi194pYJJdXfPAWCFVqVaXvZ7aikrmYj6gfpcPKdBdqbsK9QUn5mffe4m9FW9m2Pir2TrALe",
  "key24": "5SFh27V1uzamaUXS47hzEtpmgep7GGV8PMcsBsqm9tvq2yPzD2MgbKKRWcDcGspNqYzk6LqaoguAdJmdmF2zdJjF",
  "key25": "Z6s8WeVpQvYvAWY5iZCA3cjAWQaL6FjfZk6x7AfTDCzwp4L8KtUBXgyQwVJU5s5vW4fb1DqWxXvhfxbYPhVLcif",
  "key26": "389KsCNnqmBZbJHtEHssFSouQQLKz68YLP23DQXREk1nxwfsrVodCXCjAcqg7pt9qxSf5S43Z1aFEMZwUJrUEDz2",
  "key27": "2gdQyMwg3PT6Heyjnhqp77B48Khm4co58WK6VqBPsofvSSip68jbNc2iL1epJMBfBoprJ65vhxbw1Ds8Bu7x1DgZ",
  "key28": "5QSRpFmAQEi8hHfQF9Q3UbJ6mEgtHQZBtBTgE4XRz3MoXyVWA4hj2yrbdYa2p3zZmyr64h1svcp4bFNBCJSXJEz4",
  "key29": "386LgFDa7ovYsGotKDDogCyzZa9a2sgCiQXaHwqwqe3kEo11ooXgcgwjUv6M3urbRoPJyyrSswHeMyVg5oA5WBEL",
  "key30": "3Cq1NRhc7f9t7hbVjqR2hUkkSQtpu6z14gZEeD5c3cGYLLGBop65wC7hw8ACMrgnkga1o1CNP1LhyEVkBmJYPFaC",
  "key31": "672UnTxvJkwWjgwQAoJ9eeZkM6YbDc5NnmB317YqvZC2gDy3i8wG5EYhymJxVhLEpRW5uSo1roCGYfsFMeJY3Qnw",
  "key32": "2rFG9pYLpKvt2iZBU62S9jy9nLeVok3hRR9BqR8fNUho24g7nQK2fGdAqVEsQWjthF2jLVHAcpXgCsztb9CrJu37",
  "key33": "7PZoCPtkYXZNKpquNTTTq9FXJyq7gPp6guecXqtqgATx9GKM994ekREjZKmWsEZH72ia78j7zMYczkrtkijKRXx",
  "key34": "3MxpkgiVgaCRhFDuK5b1ZLuqgseoS752dZAYvoRbhyFbrTnD8omAtcg4f62WYTWCh22VZv5cHVPY7yGjVXxiYUL9",
  "key35": "NLKvFjcw5AP7Dps1ubVCQMjKPNTTRsyNs73DHTNWmLzRDN1PAXE3xag2Tyf7cn52KqHSB7Y7rRYZkUZpv7uqzXB",
  "key36": "tAU83DmZwUBBVE84mKnurB1fpEqNqs447WtwAzgz5NqFtb2VTgmucgHScnYg899GREKjEV5LEoPEUUuk97B6kZa",
  "key37": "4MGkbERVaDRa4RJYXzcf2zm5HrZsEEJ3jWWuVi63GA9om9aHJy7gTrHchukY78mVkhdb11a8n2gycdAkBDEa1bBf"
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
