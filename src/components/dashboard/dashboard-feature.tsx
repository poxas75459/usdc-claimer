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
    "5fC7hhK4NnwW76gabtWeu5Uxa6j8VsPLXW98SQt4i6zjqgzRa2QuUmFCeWDNpioKjFVRs9w64xYZuSMRHVjp87M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R3KcFUrVDxnYqDpRNhERp41Qd1c3WgKQEcfmrco7oKHWnwJwovx9SJftp5Wse9xCDr3P39vxkYL9uC5QJayvpWw",
  "key1": "61x6QtxvrPA1FeWVwZeRHqeJ6LQRus4bCGN2Q8yHWRrhQUT55TMgdJ9EfFuEKfoQK68QKAyzbE6W6ianHoo54Qy5",
  "key2": "4ufqgtGY6JKj5CZ1TQK6bfhgfqFiH3zbV8U768px8zwdHtP89Vw3ELTefcXUeqSSA9fHuCEwnSzUw84hZudpea1o",
  "key3": "2DiBQ99pquidd72Beg6dwbMfWJuWn967V9E9huT7cNb5Qibz6GnB6NrNTmZUQQV4UQA4UqyYgJWVCQf6Vee4Q3D1",
  "key4": "247sTu19J3yb3abyqF6x9Fwk77Kxd9RqmTi5dt1oXWncSgbtxhDTowWw7YVMdfteKikDMQZbm4tgNjScNMyFt4oN",
  "key5": "5AEs87uax4wuPEHVCiMYrrnUJv1zYUZmjwwqeXVwUCWZLcyirMw6HBFQs7DxyhNRpBDSJGVaw3Q7n5d48NzTJKMT",
  "key6": "4u2MKsqSmGUPyuyZo5vwjQh73FYog9eLeD1xpa7VQhBQn32PWBQFEPjgh4oRMuuNX4Uukqdw486AXi24C7RXgT77",
  "key7": "2vs49QZTU6oaxGCtmkdkPYcYK6Pvif16MeuBUUDuqAQdGuuYywT5k2dFpCqRQFWhe7sNSkaAK16WivLyGSu82qa1",
  "key8": "3qAc1T8Tgve1X9j1PZrZYiC9rMpPBgazXf3yUnzHPsxK94PwYNMCdcQjBKWjSrh76mKnBs9fFXFfKg9rAKA5cWtf",
  "key9": "3hiGSMojeTdD46TUxcLMuJDEaQ41hMAmqzLAhRg2HZqVZtnnQnMPf9SMU8TCpsNddyZZFqL74bT1nXV7yrUztxS4",
  "key10": "3wtpQfTmGj6iC18eAsWoswpvowcoUdP8eYYNHstvgNFfU15TG7sJsakYQe5CjFyh4Zx457wLvPSstUhUfVBN44Er",
  "key11": "4zgfw9McH7aXxsCiNHt3gmiyGY5TKEnKi1w5ZpCEdf5BqW9s6aQYq3CJZfWQ4zokgiP7dpXmUGuxN4eFqpteGwpS",
  "key12": "3ngfmrbLAApGxbLvuhK3v6GoAhqLT2BNTZ7p9M1r1nNZig2YyVLGrxnQAyDGo71dhXzMxs2zB6bHBqk53zvdP9j7",
  "key13": "3uF3f5NXLpvzqMcnthnjXEMiptZyRfe3vucv7q7RW6T9pvPatXxaL3Bvs4U9mwRP8xJ62vxuEwAGH4gKRKieMuyN",
  "key14": "vkcdv1rJgwwo6qqYDERnpJzDKFerwqAv6pu7Pq8DDG1M2dGpk4jE6RHTemchnRPsvqyXC9P9yeS88d5KP6nPPKq",
  "key15": "89LcGLhMuJ3nYzec9HPBUnmt9yc67aX5wEuzEWvotjWrKH86zsssuMNnj5xwrsVStcmeAQYkGXn4ydghmLnoqgT",
  "key16": "5wSkaPd9yWk2KwA8ZFTPaf99dyvpMemFrw8JDpGvNh5UrsFaGNdSTXDM6ytupoS54zRbRJYFUFne4BgwMDb1wzPC",
  "key17": "2pZXpyrS2Bj2axNXkZLaPEtQxJiXmCvpytCwBDzwX3rusgU2S9x6jxvzuyaqf4qd38aTed31r3mCSGiEpEt83u1q",
  "key18": "53zBcNCakMV3MxWQTL6kRtgibQG8LyQZGX4oWJ2UdkvhAT6PyThQT4TgGK3eLiqUTjAQp7MTdzTmq7UtFZnPkKsg",
  "key19": "2VkrXhERJ1NdVk4kausM3fMsCGC3AMP5TZ6g68sspU9e73qPkvR5seSk6KJXgaTCgVtNbJGSVxfF1pLcccWWBGCH",
  "key20": "5KUasMDiaoHpvxkjLG6YLb7GqHXvUL8b5jWu6cFtmHm1zK1C8e5Rx2JjsaRaPLdpYDxoni3BdUXyUjgJoUukjfs8",
  "key21": "3YLqTLw7EMY33jWJPWwNR9EpAysVxioTWSY3KR24hZ3rTmnghau1zxMrpq3RRLU2cErn5okDexaTyJEj71hbAoBh",
  "key22": "5E1786cuT3hcrRKZs4Hc1E5yBADZnRnCrD8xwM8FPwqCYeSrDs1tfYry5JhsmnWX2aTEuacvPxCcL5Nv1vv6juD2",
  "key23": "2uNicbBL32rwNZqBanQZrBm93g9L7KRfZTran6uv2i2YxxWFh3wpaNAyWsQ8QwLiZ1e9C8UAMjgXaEwjgVseKRo",
  "key24": "53uQQzYUTV2JrNLGBq2zUZ6fkiuEUD45FEWKbFFDncWcHmNHqrpF9Dt3Z1uetRZ1qfNdbxFnPVzZFBMnEEBd49a5",
  "key25": "573UEpG3BZV98XZRpUHByBzXatq2Xwu4XuAduidda4bVpYanLkqzKKytgHcsW7uUqGCdwZxKQoiHFrYeKa4CeSxP",
  "key26": "2NcU6KjdAoUAssKPEZBkGyJ9dRNkZu1M6G8fGGTXtK6y8QRVds83xguJNbV9zpxR3FVPP1HWFGJB3musHQptnB63",
  "key27": "2WAmuhM3J4Q9YHWbno6aQ6YNasyMS96mTiesHqQDBsidkMUGqy8weAzBh2iUsv3DcTsWGgxrqP7r6t8BPJCqutFw",
  "key28": "4o2MaDAbMzurEZWhag6PfuvxY5VkNQh91sYdi2pEHjtgtPb2Uk8kerXEoaFU8qZMuJZMZcKXoNpr3216dBYpsrKg",
  "key29": "z7oG1ooNYQnQ4rV75BJbEe3tNXPf5HgCLxPvzJHpuKka8LVoG8VCmho3siga9bzmfj3Q4r2dQF17QauJRwc4yHd",
  "key30": "3eq5UF2hLip3A6LucrnsmuRy4dxM1PKeSpnCLk2YipdhLWBFpvuGVGzv7genbLN45Ser6kh25ozhsz9ofMeNUZwE"
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
