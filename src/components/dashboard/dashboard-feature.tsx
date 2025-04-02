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
    "4tMjm4hZtDHV8CV9HLQMW7A5M51WuaqV6iuN2WxqzSQ2soEvdAfipknfyaL1qdpDVtQXMByLjyh3nQJrCueyEb5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xgv6KFUw1m47p4FV6r9Dm3Qe2Kq6uQCg52jeBzFukjDXv9LoFemY7jW3Cgri2mtcMdZugz17jirHodyT4kGt68q",
  "key1": "3sqeETcM275P4dRT5WSYJnETRRsyCswdoeV8D56btVB334oFngpXtsJsT8v1Bb7BU3trZu9KFpMYMkxRbkBpBrbb",
  "key2": "4ZBrgrQCp15ds1m53nL3csME9P58hjGace7AJXxgq4kmVFwPPF7wRrJdbtd4hLhcaqi9tP7qHjrs8n3AGEwXFui4",
  "key3": "5TiZutfRyxkWnY91UbRGwGr4mqoBv5gkzRFeN2shTB5A8c4QyqXeaVnfC7E1voDcw85otDYX1a2KHcFR4v36JJfp",
  "key4": "4qy1RANc3WrNGeRKN7ma1jd1WpPK5SrmbcQTYT2qxFHN3TD6hZWV4ejBfGYJU2SWosX2uB5zhoB2dBhiLJYBRdKo",
  "key5": "2qFgk6jUo2oXzC59VYk7JDE6PNhuMSEm597h2USZXeB5evJSoFZvNjYK7oLc97eYGxjU3u5vzNsBHEcVKfrY1A9M",
  "key6": "5SrjzDvU1gKcZ6ZVvsfLqc4HN8JPdm9dg5aVyNeVYrumD6uewSoqzJRKhHNFtATN3bZ9cuvek4Unfdzx9xVpsFAd",
  "key7": "5TexLTdmP6UwtVmQd8woHwxQhQV2KzFWG8yUrYUBiNv5Seu6hUw6PisggBLVSmvtP6R9f1jXQPJ2sPTWefFBgirM",
  "key8": "2MBX4Ah6j3awJyawSWNnPkwnMbEt1qDrL38zArTNCKYwDp8bxRuK1sdytUnKRdbkhfWg2soDKGETA3rcKgC1ZYPn",
  "key9": "5V6Hp49vZJV7wXxoAxAdtzkMUSvop1KiRqTcvBGGrZHBAj7wfp9Yj8byupajqu3MmXyVorouhDBotcLZ6q6tGfKs",
  "key10": "2ugPv9V4Cn6HoPtiDoFPzP3tV5WjjSNUK3YRNs7BCHfoNuZ8UAXW1M4jSwYGiWLd2rgGVPgTFuiGRMDFmCn5F53i",
  "key11": "3fFgEYKjtCynToL4Z227iE76RioTgAcCP8UupxiFgPRjzsb1YHMtoSwMdcaHr846ATVBWyjNoeiRciScDAHhCcbX",
  "key12": "KLWgfTH2fJp4tuwu4J9a9n1T3oULcUCEMaeaJ6xXGXo3GevFNoEWxjymEiwKyaaR3YxvEYtMNgKdJvzLJr8HXDe",
  "key13": "4tYHce2PceGty866WguLub1Eid5AJhn83GxQVmVCP8KPKzLopDYBSgghHjxwz3WCZwxgtCEAViCnRjuWDEGcskw7",
  "key14": "27Xx14vcsJUq1LtBLtPu6dS22WoyjZZGBi6eZiNejetXVSsccTBbzAFPZYydhGMYxjAorcT1BhLz35mdJkYAbDWo",
  "key15": "3Bw74sSEVxHArdXZUo7CVqg8gXgSWszPoAqUjezyUn93PyNHz34DGSM2JdCDMk9hkuydKuXXwcg1EKfeKNFpMkxS",
  "key16": "2CEkiKtSzkuWy8r4knkLCQP77mm19YxqtP4AaxPn9zJrkv5fo3HN3bw1zXPamSCeAgASgUP8CqrrUHJRGMwH1k4u",
  "key17": "3UQzrjMz5CCpWCATJ3XvxVT6Di4VijrA6NtQ3sCam77S8Tho3nX7pZdTHHNmxa4bPEaQQqVy93wT8ZUPs7aTmhTh",
  "key18": "3diV2guzr3ZLCK7CjrsaCRrkTvv8CtPewXMox7bb6YjnUhQwysdY9Vht3GaRSFGirwaKAeAut3GnsKWAgn69Z5rj",
  "key19": "3c1UvsExLxS1ayNedwKdE7qX4nEPgZ21zLACJe6Zr9CCaEFmtmM6eJviCkfUSaji6sZW9gELUoQbo9guuLBgPSjK",
  "key20": "3eB67731S9j2ppr2qPAaXhCcT9ipAxRCndJFXj9WjzWURp5zVZfMccUhAsAoJoNCXbjicB7Byhth8zJ1PwLiGqPe",
  "key21": "4nVEmVTsG7MiYAmTmz7HsWkEWaZtABcGbkCzmceVb1QDA1pvyZ2F2iQ654M2iw2jNGBmDoyMA2HEtLtv8Xo8xcw6",
  "key22": "5NKmEEsh1gbBY6ua8TpA7XberLrUKWUYWFUJjUprVu8EU4PKM3BoGQXsNx4R9VsXmxzU8AJ6o6yMXmViYzRT9xA8",
  "key23": "2VkXSQ6vp31KdM7wa2FQoV9XDGsdBvfxSjtVb6HyUoh4wmTreoTdUA4FdgXuF8pXPwi2Pv5wzte51Hh2G5LkxsT9",
  "key24": "zvQmG2PExzYFdGL3kiPaPCi3Bbs7LbhTwPtoPvnPnjPfiJXZ8k9QqHgGSVsqvKjp9ScB7mNPa1sAdE8qxL9aNc6",
  "key25": "3FVJ5SYshanoyq52qZQQ5ofowkG3X4oSwBoXeasPj394s1RJKz5fdaXFcJ452nqCtv7WGqVRGtpnmvUrkBMuGcQp",
  "key26": "k5huVuaGTCsh5ViM1EyUeYee4uPjVzGHysaGXBsFfgruBTmKouTZ7PLFajbGXJUAnyqSFPgPo9HHzgAdJif3eGQ",
  "key27": "4yee1PAq7z6FzPZvMcZCGmfhoTUVxouHRiVGaxRYxypXyNbrRRqXJbV8aeHN62AgptajcPdHD9QhBAHHMHXsajD2",
  "key28": "3nuucaTxEaHH6EyRZtLt1ET9ww1vLA4G68htUVsAyVi5rjVAT12vFQzbwYbLd9wnSAXx2qbYiv3DAJiwgpHHpGf8",
  "key29": "2JbDkaa5mi2dMuwnDfA1xCeLTYAvmdW8FJY4sYr6BRe2b62kMHZEc1VrpJrRjMxXqEf21vA4KLiEYt5gpnRAWK2Y",
  "key30": "5vGZQucaYxt49uEpNJ4pr55FwQzo3VfQVPsWnbfxEeztSpGVM8i6VtpRGRRPYD6hyfhT5L7Zey4m6c9Hq4Kdobri",
  "key31": "bDf93mc7EG6TXgVAsVYmzBmRuNDY2WUMgkMEcfSUDvg4UBEkTU2Mh9K97rpcWwTAnkTknWN4tXbe462mn3eX25D",
  "key32": "4r7dZmaUyKoE7u7rNQvkz4xdWkPiEbMbqGSYBT4MBQqanBVPnHdJjKSvzQEyA1AGzsXM4CXsjjdCttpQbLNMGGfe"
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
