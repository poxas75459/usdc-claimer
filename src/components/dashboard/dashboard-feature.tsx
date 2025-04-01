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
    "36yJ3hUegP77hMqXpJzU2GUbhj29RokjFPkPiBFpsNrhT1cZoj8jKGev3FTq11Kf8YdRtoXSVUvPuubZP8n1bJey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pxnWJpvqn8iG3Us4eAT5UvmjPFvm8dXCb4WPCpAqYjhReNxFjYy4bog8NoTL7vf8vLBXrtr9B7EuKQk3PfSKWu2",
  "key1": "S5DdYmwvzMxacewqE6DF9nY1f1eNN5EE3XyhgSMxe1StPtidyYwvMW6kEaYC1GchBZ916uyf1XM8D5XvwWe3Hkg",
  "key2": "w9FkdMmwFPVAMrZU818YqVnVtPhAF9JfJjFcVdGAAigRHDPwzhHGwMHyVHqRV7dHE1xHm1tYVDrAyCMmZmMY4Eq",
  "key3": "4aF21ZoVd4BckozgymKYkmDHNhXkuKW48saXuqy4MM7WiBuEYK3jxKCDKVz5RHWDqCAsTgat5yKtPTw5TV5xzdeG",
  "key4": "PKQ4Hc96VKFmaDCZZP2UgcLXq8z56bEfeL3sUMFMVPQwt11KnQB4Qi6mTZUEVDQmPntcnHaA48fwBUmoFVwBfTH",
  "key5": "2Nxaa58LxVhb1xEMFRXso49mroiUAtmvrd7sP9NL5py4rEoz5DmbeijFHVcLE1fGC5CEcyDkhYAmNYZ5SaZTiuoL",
  "key6": "5Gt3svC4kFU7LQK1dPxZcgRsVdL7RbfxsNgHkkhrQE8Cm6KZSrBYb4UfF5hkAr5T91rkRyX8M9M4FtqJQiFXGEUL",
  "key7": "4bZF693Vc2smKNnyaNhXnJqX8Rxe6t8tyhXmhXHGknewEXUK8rcA2EXA82S3DJMaxzjMAsiCEUvEKtQsFb2NAgit",
  "key8": "32sWKdfehhdoGKfrwft7WNZAj55oQ9NsdQrRKk9geshmF4xSLXxGVzpT68UWwfVghGUo7PNPczrEVJotrWq3UbwA",
  "key9": "4EwnNTv3cfDa6ewQk3NtEqpHXePZ4xAFQjL1UmTVTZkMAVV5j77r3dBUvr8AsFkCidvc9B5oJYxrS82pdUpLZz4z",
  "key10": "5az39xqoVtPJyS15nikEehTmcr81JcGc3isGup2Ww2XEJUfSQXrPZKbzfnRfBKAzKF67wqzK3vVAtvAQBUWBBnUJ",
  "key11": "2JFM1mrqSgLTxZr328ao5oS8nqa7XLhESMzrurjdxGuf7ZuGqyi4NKdtyVTZsYx1GT4mmDj5z5PvMzzoR453zoPi",
  "key12": "3r1qFWFHKgcxNeTFmnhLRKGNu4P2V9jp2pNVgyMnRW4GtuJyGQSaKan9wUMLQadFCLxAsfst6KM26qYJnFZSwE2M",
  "key13": "2tZMBAaVMvAMnw6ET4hCppk9reLU4FNFJb3KwcZfuhNXyKCd8DHPBpR2ap92eyJDqE3hVPGWtmDNuGKXHDUozCfa",
  "key14": "Zouh9nkJYRhLSjnKuuA6DLJspWyguNaDFyzwBUQgyrVDqREq4nnWyMyMVA1yYGvbNaA4HBMLeaw2v1VSE9QTPC9",
  "key15": "2z4ZHyPY9QSDcsbYKu68Yh5Qwp9NytqAjczDnoMuD3svFpEjVkqjrak87Qrv6N8fePehm6CgvWb2fpjHBSrNfjNq",
  "key16": "2SWBJcCYXLAunjZNvSAEVkKkgB8F3f4xy5vXD1vLrhxwFCestxz5gmHh5oAQKpWZFfNmcStHZPEQiTnyxSUMigzk",
  "key17": "qFZdAHJmezd4skiKQ9qxq6torCFZ7bpbsoFXk3a2Z8BgTkZee6CLKFUkyoxvNPmhT6Gf6N2YW3n1Nir8pW6SKYu",
  "key18": "5dzqctTLjMzb3m4Hr1sJ3HEth1WMzbJgrjaNwA5zMMPqw6ypawGBYAH5ooF8J5JAr4Z9HvAtytBkUbZryVSsRa4o",
  "key19": "5vWH7gpt4oC6QHN46a4KkVcLPQ8VNR17nbiGSLzGdvCGhWtyeDQrJFcSu4u5ins8cWiwAMmrQnYxNeihhoDuo8e7",
  "key20": "4Sp4GaPoL3E4KZjT5P4PgB5uTR8pxWHMSZiNzuFLEbMHFuMyWExbUYULKdUXN1Aq3JfDY8bA5WesKaz63NHH28yg",
  "key21": "4t7ee97mHewZJUsR9gLrAdiypTgB2WD14SAomrRuPbxLmovAB8eLAidQQUQuuDW2i4Z7fVxYiMYMkgR2PETHuFy4",
  "key22": "398YAWipCJjQuAnzdyUCUZ4TBF8w9d4QnJCwmb56dGdgyHn1A1JwEnKKRCXR8hz1aAaGQGV5jKgALNRRP6eNH8ng",
  "key23": "3xBN2LNbKgQm1D98wfg6qWGEzznjYoaYrGkkrzrqUCk6hfEBediyx284WCNJAzrrjgWBCFt1icpbk9ujezwNo1WK",
  "key24": "bQB6LU9GXmwXaQiUBbpDtZrx11PwzzKZq3itg53G1kyGaguaNkwrEwkaeTrzVrkpkvsvRRXEvdBSsSwu4oeAERe",
  "key25": "hibhM3rKA3tN8EXfvqXmoC9yxEXx7mQnTcaSGMvXexZkZ1LJPyHsNVaxVHfMCaspvDw2jkDiKe1SHkRhAbJURUG",
  "key26": "5yknxN55eSzoDuQurwc496fh6FtkixMZG1xg6NzqnwaYFEqiMEWg4opLZWt1awHTifGgYmbG21a4TFYKQou6A811",
  "key27": "4vg32RHwDKLzDFVMKaTQ8xBPeGdGmegeB5aYgUYFWFKZRxnHvrwdAKC4pJNjSPX8Jp5AshT8bg8j1LRrdYDEA8wq",
  "key28": "22AHh8rCvLsKEkZjrNmykccq8rwctLnS3mUW2nJJr18rzqaiPe4hba5Hhwxmn1yfV7e4ZPhH27JT5JRgii5HiPZh",
  "key29": "4xGxQ5bU5mCzmHZyjUv2EEsNMSEFD8CUD8MiFbt8u1EcZcj8jVs4WNe5RdftEf55Tjsn7NJNXJhLhSXQNB9NPkDQ",
  "key30": "4bwdKSKg5F9gPPVyvDjfvc4bTkhSaE2w4sMpRCvzxJnWT2nhbmLv4o38zPF297Ndf7EEuhurggv7zJrp7oMm7Nwk",
  "key31": "4r1UXZk4GHRqrV11f12f6T7F7mBVUfeoQaJJxjDVxuzvDE1vYULz7Ty5id4gjGAKjDYDYTitwYYgSQiWYmySzksB",
  "key32": "3kKvfUZQtaftvaeFew6cebrHsRLKnvW4f13cifnBxwZyshttPU8ctrTZ4WNWP1N4Fs9wSrNT5XfcYB8cT2gRrYVK",
  "key33": "5Z9Yd9jRHyMjUx81b1PCbpq66tGVZNadSzniGP2R2zG9fBd3wewGjx3uUWP7YCfxujofuEXCewnofy3Nodn4kMcT",
  "key34": "3YSuwrTwkMV3kEpJjPUXdVYtiPw6XduGBKvVM9bsb2iT6KwqSrEPPUiRQfmDwAztMUu5V3WT5GB39oN9Xr6NLeGc"
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
