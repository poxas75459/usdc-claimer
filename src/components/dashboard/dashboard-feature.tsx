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
    "2co2wuG3bYhYeTRThRernXJYAbeDZGZhXZUVAcSBm6h3vppBrUD2SAaMweFPD2dnT5iCQM3wyFjStfX5HsuEwEvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4btPhra9WcQR8UpbtyfEvTF3f5TjJSCtHr92Kqqrp6Ss2KQbgAcCCVL7qp8bSv177GcEdQZnGdZNcDSm9ARxbU3T",
  "key1": "59m4L3qUbSZu5EEqgz8idv8HY3odG7j1K61or1xgxAm6tsXCwEqBiGV1TKDZstd3HMag2paRYXhcFY6fYNnkrmoP",
  "key2": "JArVG8UabsExHcdsNSFkxHHHVcAazWhkH7tsfDiTy9xADtZmUBCik8xUtzEeXvZaNbKeCpY8mFSQJzC395XMHb3",
  "key3": "2E8BgN64ja59UP5W5jSNk1kEamCZwjv72G4nPQjtN3pze7tetxANUaQG38z3GcuJHosHNcKzHVeZLeLrKPAR7e9C",
  "key4": "JeMW5pL8qve9MtreAMmNNSnfBu6rqSYV6EhmPKMGy2NfMvV9JZr4f9mrRy1zJWY26CQsMaGMyePckpDAFvMQkVx",
  "key5": "1jBqKRyHyVzMLGkHQAPYWB2M7arWA2ybKJ74prkdBiv6vAefsjW98m5t1GuobhyegR75BKfRF81BytGxeo7GJKd",
  "key6": "2gHDyeZKSy9DpTtF3fBAbNnJL2nxECvfLJ5zpg2RkZcz9SuYD3aKpK45bnnqfZSwqRkDdjNwFwr2pNUqyPQocLi5",
  "key7": "2jyNGHNVXcyJBgUV7xVtoAvYSZEPNmusYQrHbX5cmsTGEZ8TWqSrLToiKd9jVU6XzCWgmARebFt2PxbEAUCNmt4E",
  "key8": "4amk2ygRXZBnJ4do6jwp4HmGkPkmAS5rAgCMPU4XnLGALvL8R3nQsUhyHbcCEbW4bhrsqfPrmvYzqb7FkHXsXCR5",
  "key9": "uFEDxy5WfuGWhVobxcBjkUPB4XUMAumtZYZbCFpxYZGcxW1su64SYLPEcxQPcQWpUSeqsV9tDyqCrTtoywVgch7",
  "key10": "ziYRGtYdTSp8ZB1KDR454fcvqn4qigctdRt1njDmGDTZSfC65xt28j3gqisDdNWGYZRmjNSzmXJXsU3xVqcRY8y",
  "key11": "3dtbwrwD3GDms5uEg8AvpnAV2AReGzUpGY1ryw4JbSnimddZ47HxbbwEEtKxperjyv3pFGeJwyNrmnAo84RZiSJe",
  "key12": "soPBU4NadUsrSyh9baqsmHHqn9sv5NjyYsEs6VFJQU5F1hq2poA6PTnUTm5TatpY4EsKjHXaaHvUxAfgR4UGKB4",
  "key13": "3PdnrAcjxUM8ugfd2hpeWGjwMYcfkCAjy93H1Z7R51oHRupXN5vtcwZ32exzZ42M2Ya34SgaVrtuN7s6LMwEyZho",
  "key14": "3GS2LwBZVKAoVTDNoVr7c4rbLUZMGD7Ef5yFQ13jycB9fzjXmpBHgUpoKhWQousWLBJHVHGhTEsD6kG88Hkh6Div",
  "key15": "5KDV4QzLixC7LWypvGYY8am6uFJW2z3BACua3PHd7ppKvx1ZA9AMHT18cdj6a961zFapnFfwtJqhvowdqPEThFqQ",
  "key16": "yEBB6V668Sq9ft6h5N8ifvfKiTFSmdetfkEaLGpCy8GkQULS9LNf7Xg6bs6P7VWn5UEv4rHxdE53xM87ocmftvk",
  "key17": "3LENHH46U5SiF9AXyacGVDrfWZCbjE3gYQLSSxmULSH5K6RHHVg1hNkwAg5GjruS39PL2usfSL8FWAwQtZwrAEE9",
  "key18": "35LDAg7c7iST7gkaYRHKdFgRUqqzRyFST6QxL4UuBGA4LCk5UPNBi5pe4ndM6jRVbTuJFNgx9b2fbbEgDtpEtEoA",
  "key19": "5R4kqtKH8PYKrCU6rgeigm12Dgm2GfeBGruc3oefKwqquRcYxd5CghDg9m1m2XmmyscwhjeAwyuYEvceMaoyYC4S",
  "key20": "5ZiN3wwVt9iPmAUKUPxwLHQdnheXGauWC6uuxM9ZaeJYRRLoPMuzXGsMAomVQpHULknBVDfLNJn1fmNL1QgW2dtU",
  "key21": "41YnAhxVaHf1iH126dNfc5NkApkVmx5YpBQ3MxPErG9ywuwxpr9Ubumr8pbBZr7gatBvVq4siSrDkV4CgtZtmwHG",
  "key22": "63DdadQ9NAi6xCCJeQo6gtg3NfH8mNmXB1Byeg8L4PcmGJYvuyfEh6cQkdXWFX6Nh7mAK21kSxnnWYET4AsiMVX8",
  "key23": "2V1y6JFjBNMHdrABS4H5JjuCHnbmh9iyKW6bvWjxk9jBRsx6EmxucNffoBGFx6RQtUtnZDo1c2Jq7LTvobXq8XBC",
  "key24": "UuschTaZEcHEuEkfsShwgLcscSNAMoAsVCUMsPtmpsNMEMn8dM4iVg6tbfrgm2Bf3j3SPMvQQRBPASEXerERNTf",
  "key25": "5P3cggB2wuxJKVhfyLvZATFRmEYShuxXnB7NSrp3rHpFtQMgoV3pHNipDt7bmUZZJ8Hop9q6DoRQNsZGk7bBp7Tt",
  "key26": "g2Biy4oQUzosCEjZ5ZRBK9jsLxKMiR1M4YY2xwV9hsPJTGcQFfpvgLyxKBG2bh7BVkVZWKGLz2rqh2FRf23gBQd",
  "key27": "2e3SwfMf2ZMP9s9odV98Yqqpki2441rNYHUm9ktMRAUWYzoxhB4oJpSmwZRQwPvsVyG2nKMfLGVfTPrtnVV8bTpC",
  "key28": "4C7KudquNC1AV6Bcvav3NZhC5tBb2uiYUcPFiqX9mUfmSUiHwEhQVRkcMpjnQxF2f4P8S13YHWmSaQ87bBo1RPSX",
  "key29": "53NMFWtWnE9DchXe3MZ421gMQKyG62yoamNcFyZxsr2Hbs5esLBH6uZqQ4uRjPL8g9WY4jgxabGm3Gv2QA8LrXmc",
  "key30": "3riHoycgyyqgKCBzswdGc7zSyEMfQiBjzuJCMX7kfysN3QMzxSjwd9ve7c6ZnPADTvMxSZZNMkzYYFA2YApcY3K3",
  "key31": "5fZThxBGGDd7D88aXJ2w8ATT9mF1Xvtv5z2kWrB2oBGY3CLrC5AYHbEEpnjesT71fviCe3aPUEqwN9HsDmSu9w6V",
  "key32": "3DNUfddaNz9BAiqkRG7bXosbSyosytu2LTDv7dWaCETD8mWUpVFwNNMY15CXjA6hTpWECk86iePpysyy6PpE9P11",
  "key33": "5ABf8gi2RPsEzuKTnK9E1UbUHU4H7M67xDPikvfMkqCGJLtteun64xzWQXTgYMgBg8qj4NKQeGAw7tPApSF14Yog",
  "key34": "3Gi48wnGu3rLfghVwQmeKnUka87tKVKm5Zi8Mu8bhZYSfPbNv8e4JB87Q2eCCXFBqyJaGZitqtGxfemQbfUzmFhu",
  "key35": "276EME4pgcZNRo3dTya3YaGxFJ1EpDDaR9oHiQRUpjgTaykTDaod1qBwzMQRoc2hnSGbdGoMcnTfhprwNMdXrdkS",
  "key36": "4SyHTPQnTTgmgEJLf8Uf8JQyinXzz6naJXeagwXVQVgemJwBXwgapF9tKmRNZmiLnwL5NkovBighjqYLMCPqUZ2E"
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
