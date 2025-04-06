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
    "5THsycpBCMdovb7PbByosCHpBk8otsnbQpcgPWUFT7cvwrSaKEkz8xnqCD8dPh9CKDefPPDWvgT1BEJJRMozN9XP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59XqtMfgEdMhqtKo3qkFWfHPVdJThVPqt6imaD6gpGQxmYnav6pR9zMexVf4yvSZR1AEtxAu5vKzp9BpLcfYS5Gi",
  "key1": "64Ue3K3PES4nHHk4YXtrLX2Na2X62HwsBNo9e5zJURAc2dNPNbC83eSH9Bv4CLMwi9SXdgYFTUDvHGgsRpJR5NCK",
  "key2": "3pVrjNZAtiXrcQio7iAtbhmuBNjjru2vQNTgfvQ4MyvTupnEY76W9rEFLgT8dcMHQDXcToccab7yH39BJbTiXDbc",
  "key3": "eJZ7KJy6JkriABH5BX9dfpmyK422QW6ACouUAEAYgsV39HKpY4KbgNYCf2RqA18ZxKQVaDx8nobB3enJRn7wUKw",
  "key4": "LyiccGXtG9kgJC8MxaWDtqtZ3mdLGMMZUR5P9XowCB5UZ3vxV8mfYg6U1uRqXQvfPjGf3Z65nbHkvhUWnQpp6TT",
  "key5": "5PnBy4waHbPbbvV6eK1Yed1ehhJSdjkdCG5sQfHaykudiwHXPsmDFijKu1BmYixqNa32CLApVGqLqAPWJmukRm66",
  "key6": "2nc8whuqpPvDdd86FX4U5ea41f6kH9PqEt9Ce3rXfQZ66LX6zebjcaGaHL4VMXUP5W1Xd7gsBJrN16VJAMr3ZGe3",
  "key7": "3SigVcW1MJ7QDHP7NQP7LDL9znnNhbK1SB8i5iBWvKMGnK1qYFGQds1RyrqApqZHxq6kErox68Cv7BYCb7Gotm4v",
  "key8": "3pzMhQfZDHqHg6BEKFzG3xj9zVxmrJ9zT5P3ojP6B5Q54hha7qurLZEyz9o3mMzdt2oR9uVhBhgyrnf5puhhyM6y",
  "key9": "3MU4NG7r8yFFAMNiPSPe9B9Kqwk9KhDzBLoJt2JLV9ND3sXAQxnDKaEEtKA9N9UHAptsxvrpqCE2AdriYJVX2jHt",
  "key10": "eynFVUV9umEBVqAQtahA9cRsGedZQmXbt9WN4hW2gDTpcSpyzW6jS5uHs2RZuGjteuHVZ2XUXpDkejXyyRF7Yxd",
  "key11": "2Ck9oH4ZSrj1rxjdURrMLjJWjsHNYWRLRQEfeco9DCpnda7ctEdySHNvxked6WwzUmoasfkYU59m7dMQboqW5SCD",
  "key12": "ZGnXJN8SuTRusrUfYSMQ6iD2yfdKgLnQA9NtwgwQQaT9ePhmTTsr965My9ebeqbtY9ygeuzUK17EzYb42SVmauL",
  "key13": "5Bagb62YKBBdBcQUxSXZkj1iqThuGDq1WuynxFLjWJtnNv9ZKXSUvtMfNPavzaFQcqQVHyjpBFEcA5yTGZcSc9ZD",
  "key14": "TvXHUz3xP8LzvYAsucBUgdiPvggzFkjdLBesMopEoyftFyYDYJdrQ7uTQRFEAavziZLTgbvaTK7jjbNsCg95XjJ",
  "key15": "2WoNdN8bUvBcw5VpGwK8kxBxVLK9JsDDzu39TEH7X8F3WnhHrWbY5Wp98PZXoynXAZET6W2Zqo6DYF9B7fcnFAv3",
  "key16": "4JtgN3gCZm6ErmKdrDJR6RjXAoPCmP7EHkAXDTKhs6XZJNBy3wxDCufAXbaKnYcZeEQvKUtRLvMyYri3NxeJJmyH",
  "key17": "3wMjEpMte5W2zhKT5AtzCUbHA5ipjEL1kw7eAqH26y93rxknyJ5o7P5TxDrTmyVPegZ3TMGcz8pBiZ8KuEhEe82f",
  "key18": "4E5f3suGA3d2XdAu5fuX2Keayy8VvKynUF7KQJ6nP4cvTJFV6S2bSXXCiJPbeodpVcCbJCpi2SQ95tc64SedF4eY",
  "key19": "hG8CgQPYWpAAM5sG69gj2o9s2pf5h6WBWZhSNcL8jcR3jY7AvEtghn7B2yjyxYm2FHf2P1BRikWmFoWzbJeUpta",
  "key20": "5kAVSjZYfu5trxSNmThbWwBjq1DbLv7HYvYaoRie4MNVJkToeFrrs4QYFvUFWiQeDSaoyfkF1eDeUf71ywEouyaE",
  "key21": "5vLd6P2FDMGQDwbptFjZsegnX2QdF7gakJRWoBmhN6btKhkm2JAo8B5WuRHAEYbVRDa5pps1MPTgaNNbeyrNU5Fv",
  "key22": "5fipWj38anJwF8p7uwKV6CUukzSE8axvqYJpkpQDJE1BdiFrVZA868WmuxcShWRmKpZxxqv6WWr53M7FhE54Gw5v",
  "key23": "9a9jgh7HgdAZxb7ZgKPP7Yr5HXQg7yCiroahx1va6amjmpoPQNVxEKPFg5NnKGr5BRGHdeJjAJT693Wb5PEWS43",
  "key24": "3eRyYzT2aQi3NfN5C4WSnqzagfNKmF7wrGGQC3DS6c28yKvLNnbfPcXNs2EY7oRqs2EFgqazhQJz4fz3hFsXqmZs",
  "key25": "bxm9szNMpXLipQNUrdHFWaZ6Y5ieVqipG7L7sZF2xYxGRrpHG8KUj9TSgwmXPt1eoVkNqQxivpJh9y5mCyHgfBH",
  "key26": "5ZF6997LMCeNpsPsP1DAoeU9P6eFRw7eWpi1Qn9jjJ1AnkfSA976VSz5vPM7WkhiQEy2DbuxRpRB5r9JCQDFjAjF",
  "key27": "2zcbCEF9ETj79PhikfbtmTuxVgBSZsUZLt3z7EenBvHAMsRrmrSQb5Tcu1K9cJbHCRBWnLxJaxUQoBhN4TQxK2Ro",
  "key28": "5YabnN1PoD7ujFVYsSCJi5ZFnwvbDCPpZrkNKma7n9eRFibj5Z25CNjJTSajPgNpfde1s1szsdj6BnZUVtzLzwbZ",
  "key29": "5PRCDcRQ7qqjPjYca4Mbippj4RLrytS7dUFEdZjeLBcGLEwNXWRh16TjyPdxXNNGdMnaPoqdKEzRyhakL3UdpNk7",
  "key30": "2hi9iMdTDyKKqkKwYUWCJaUXNkBaHxZZyNyK1qUZPWLYEFdVTbE1PLDuwwYDxvcc9Dyz3tQYQJw2dkeQ8zNequYg",
  "key31": "2GeaHTR2p7BUDRqjnVfr7oTpJr9ziJkTTDy4UY4M62NMWwC1pfsBY4n6L1kE2XyU7BsKuYQAr4qVoEPFbSrYaMVg",
  "key32": "VFgRKgzieCdbjUojm62sourwHCfXcnQYDb8K99W9FWoZqvej3UtP75YZBXdJNgeuBP4vwd2oJhkP2tRGoAaWDge",
  "key33": "2akkSn8AsPDsWCXcpHUQbd5bv66kbYtDjJi9SEmXYG1kjrAjDsVgYh8t9T824hhNLUZ1EsLz4waHy4s6HWCkWgdw",
  "key34": "4ToMtVZ1MvHSv7FfVr9TRdXHGfuTvGeEkjTrWrjN1xWATG9X27cZ8Ywus7hH7WLvNvK6jFuKaL1zfNsNG6tcnEPY",
  "key35": "3hwEgEV7dLkKftg1Mj6n6LYLaf6kkT7tzAzANbPd8ee3cBx4Txd3gLvnjsQqBWgd2SxSCQmVWwzR4kUgKxoXtT2R",
  "key36": "2nCunojcXeqKFuoeLWpMMp2JyBWevEZ9tSptr23UAQCzK1t2UKeRx7bfNv5VAuXGsbKgNRBEf1Qt1PqayNcnrdZV",
  "key37": "4532shtuY2qV14NF5h1EnEPhmRnpzWoi8jHbsfxsJwJtGnRizz2Tyz26oo7GPAD1JoctToGuJoPYbxJmY4opz5U5",
  "key38": "2CC1pfYwx5yZQ7GqjNeb4nhnvneftRBWd1ctToe9N8cRXceQGk81eC3HqpNGHciDTgu1DrwDs9gNnBxvcA9z1io4"
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
