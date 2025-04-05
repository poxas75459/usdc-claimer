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
    "5igGs7J7CGFjM8SdEq6Xuev6aFGxeatPxj5XjqeR6Y5BFtZGj9cGpUDf5QBXEi5BEKCBwLXDPZxpCi3mjnMTtaph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F29jW3aixCfBiK7fiXkUDbZvWVFAwUQeS3RbSXa2zaim3peF83X1fnzqEJ7ZKwswTgvW2VXbWFvyhw2ZAbo5yCx",
  "key1": "3SyAovqv68DjPzyci1izAUZfCFZcR7GvtXkAjjSSTstJfZoDVUvowb7JaEvssJWUxVxXbokGSfumrcoYGZM1fNzj",
  "key2": "5dstibPMNycPMoTfufF6JvVfUzoPHokcBrxVmM8UzzXMrLKKVHhUjaabS9yhSZELp8jFUjDhkSDwuzc9AR9Jivbp",
  "key3": "w6gnon69K8bVrCEGxeKgAjTbxdgoVcuFu1c8HNPSThohRZorqFbYxgWb26Zd2bJAyvvExudDtpoMmcM2V1ZwPJB",
  "key4": "61p6vX1Eqwpg8Ry7Lt52qKtKVB6UJnVH5jPMadSFELjFc416XwbDZFCuUU1HXTPmzLWbbxt85wGw3iMYuoS1qU5a",
  "key5": "428gjSUqPsFJ2zJYEF3R6bgbG3NHNVrS9CHVog64TqQNwVxxp5ZC1PsqNwy619X4WxVmmLYH6fXNT5RmfHNeuMkF",
  "key6": "2w8KcKFFdWKEH9ibBTPyYTGLbkECygWLaHCZ3HhtMDXAD3TRhTW3qNSZwQAWSZJckEy7JZauGKGNiSgmiq9CvaVW",
  "key7": "zcvZLv8RyH3Cd7p1SD9754bRLgNxU1HD5cLZWWAzgMYPCjyf1k5N6eb2xoNKGkFWEiRTXhwvo2WtrHsXJNA9WC4",
  "key8": "NJSQQLGPv87ny7EuekXuKH7tiK5ApeUQaiu6DJepXGwhZr4dSkzh8VuQq327YbyHG6W21YsEeQBVLudbPFQuRhe",
  "key9": "61n1A1yqyrjscW8cLG7eMmhnjBtNweh81RxgUzeo7sK52NhaepwnTsUCTzT3fHNyDFh4bKvZht79hD89ifyEGap5",
  "key10": "3rs5bmNcMwpEggPN4G7yDG9sr8dEXEFYym9mqYwLjuJ6DRHZqUD2wPPiWsLN28FVWxZozcikwnqePfmVduhMs4He",
  "key11": "23VzmuxfqggFeohjdbS9mhdsva1DfXZ9jQAg25ea2C4fSYjeBBk4xgqQH2Zy1mBZHk4RTiBxZQvUHEDSQkr3FxQJ",
  "key12": "VZuczQnoNzRUwmQegaYZwHkjajkYmcvzpthgwpw5YZn53se4nEhwAfiFmdsEyTVyJA6Eyeoqa5qD7d35okgECyM",
  "key13": "4qP6kWtdki4Ya7mLfsFLnCwzH47e4iKrJDsiKE71CixYpNGdSEg7EVwb6eJCm5dVfkxgsDvAvL4LM3Fy8TESuEBw",
  "key14": "2Tcsvxse5okcKoVEm9GR9LduuMBozwrj9QXRN5aA1UgArvYkXbd8MgUeJB4a28mbkwyvm5XS7mnWkFpHeurmGaqX",
  "key15": "64BAyoRPKXMLKcWcW2oKDBcBbmBzFfBHBdFGv3Ya2bt5rJzAB3wzmsnRA9tGUGFzgEbihFMr1PmpGQJpqTPJLJCX",
  "key16": "2jB1524otQPZ4SAtrc1f3MBai5EMXLXTzyC2NukuGHEDsdLLtPKnK12bz3RjUe2fvhBJAX4AM9X76nfkAUud3kRb",
  "key17": "3kpXHTFS1NF1MWTFTqk4XF419eBp2ja3aN8ZCghWdyvaDJGvFduiMCXqQnWLgAejYg6a5Yv3iCgYNUSo1bUQCxrq",
  "key18": "2oGy5t7MGc5xDBu7JiDWecvaEzTxSVjm8VHSZeLujsMnE9ZEwixQ3f9cP2UHVrbTk3fiHpfdB7kF8NwhZXWKwBAn",
  "key19": "53Pc7UZoFSYcR1Ni8pM8H7CkEL6jv9PvyFm7hF3UR7S1ZWV5vhLCbNkBuv563TvKR5MsPkGDwW9FFKSbebPhZJkr",
  "key20": "25JoGDDivwacjSD1tGpfx9TNfhaizJQYhh7m5P9Ksd9Qon1Tbw7QoensYtDQWXpmfqtdYjrRjJv2z3CUP9M9cnZv",
  "key21": "24rAEh3MVejuaSYEMxrZKZeGZgJhhBtW4f76adeb3g3DxkeTsFH4syiikCY2yie6uftdCW9ERUdoJNvKTLTxcTkN",
  "key22": "3tQSMWEtLxEnV5JondDpUFfD4S2c5qFoSUj33vNhtQZXUQe8Nrts44qHrr7dc9RA2417RPzRn6PVMPCVcQM5iA8m",
  "key23": "22PXeEcTUszJ5VN1bg3J6BrF3viQZe9puktYJoTjzFf2KPeVQVCskvXYCUoUiZuhBxbNcK3o2tbEq1QE5CB85MWS",
  "key24": "a9qjEQ89ykDJ4KBUVFJ7HT1mvf9bWixw8ziHPV6rzGJAtSeb2MM9Kb9neV5yANsX4idvcEfzJKEVPkdMZUsGtvL",
  "key25": "63tCy7wUkPWJ48uLmvMaeZbX65oDy3QWh4gu4SS11WGGF4TWQdUXDYNVHUw6kxU1NgSR69ossZLyjChAnEWjjmTs",
  "key26": "33cqDGQjRQHNmW1qsBNvCvUYYKRGHC1jNKJjPRZ9fZ7Gf1crmUMoNhyqGDDo9SHdRNFYA3TPZ8CfaYGbmy5uraWo",
  "key27": "3VZqtbb5jcU7Sj3dPXsmNRcLHhBNsGryrMDiVWPUcSVZ9NNYzGhrVLHkWvV1PnBb29ok1ZNXt9FdvS2v5R5QRcQX",
  "key28": "2mQKiKPAJWNgyMzjDnFtmuqfuYLRypAev2FqBxsh8MukH22haGq66B1pNaqXbfujxr4PaeptFzLH4BCxsF3sFokT",
  "key29": "39iMn1YwYayMLiqUe1zUJBh2LiL66cKKV2PXRYHtPqMCtwMq6jWzqdJE4KFTFWBBjtFVNDJkUj72S6j1jH6AfQ8d",
  "key30": "b3Gxx9i1QEPx6zcDNU1ramdaSrnUb4rYycAoF52jppFg3uozMVRPYC9L5v35G5nbFdjwzfBtjZqaavok2CReiAr",
  "key31": "3SpkS9hrsCKL6ZhM9PhszwVFh3XqJPUUzi73w9teJGMeH4sRuhrgu1vZJccSk7Bv3E5QhHdF3NxAjirS5k24mEvD",
  "key32": "CwkgQnDbZU69V8nXERM9D6fYXBAws1MxBKJja7DLoLjGnLWBwZDtKPTtbaGbq2zPEvQtg7EpuGtPjSM36g83VPC",
  "key33": "3A2Qqu9iEmLWtuxYjd7QhgQQ6zJDdJss9Gc6tbjMkt53hZHFh5ENzrKZ5W9ey2X2Zjj9Frj7ueymazw2X5Fmsbkk",
  "key34": "ge6iCJL13tG9RTp7jCd8iPD3MoHzEfKdRCpJE3gysvUYwnuzQFadSS7TxbrkHVHw3byWvKCwSPFdtjzLEHAiGru",
  "key35": "2ebawZ2V1q4XxG8eWgJqoZSSSpauvMG86XKUJwHrxBAa2kLkRziD2ssT4rBsRYt2P1PNRqifhfvfrNrsAth7755"
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
