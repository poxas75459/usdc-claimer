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
    "JunUoVePUkLCEHrTpo65yMHcZiSnjqbftzNf7tUAFkcUzNX6uLhTqEgBP9ge8gkpDjuKWieed1186uhWfRxpXgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nqod9mTbyFnyonoqWufL8wY6JDUxzkR5ERv3XSreZLa7uMT6c381PW5suKFW7iHHSVURGkHksSHDhT9roKvAYdd",
  "key1": "2diWhcxRU8GhK4V2pPyviXu5JmKhPYZnGwB4iiA68MyjQFsUu7wuSBDysaJ1nr4rBytqLF3NwNjfpjHLYogZVr2r",
  "key2": "2yr5WGnJi5Uk1uEGtTrMGygpHXss4k85W8r7ptF7VZem53r3BaqkscfSUJCgjq6JvaWqyz1dyAv9B3o29xc16Uov",
  "key3": "5uE5dGg3e69eR1GgeYNk6S2nEJsu5tZUmFF3P1cwhzm8FXnadTUfyF6y1JvvZAxkrtf4WAutXbi3Wqe9gr39gXRd",
  "key4": "3xt12XkigLVH2rsYtd2PBQtVZdov7oAjtEbBDhZ3HHm7psJ6Vvxafj8LY9L1C96m1JFN9dw1RJRFBBmkJtYtjYCm",
  "key5": "3Yg5yUy4QRRbYJCuPYkxurYboccxR7Ysz78g1QT4X3SmnMkFLMSbMjsCmTBB5rDDqQcGBGdNhoBK9YnXm1jKte1y",
  "key6": "3QtNvXMvtB5ix2KesQi8g1EnZ9prhopfWDvvrRW6MptM3u5dZEBpzkjaeumUpN1WQGy2dy6U2YQm1nUyVkBSGdja",
  "key7": "3q7wf7ANCJ8tev1m7tf8LGEZ6hED1dBPEdFfMbUgkymvCoLQktkDG1mbHbj3rkeJczQSCa68Hd2z3AJ1HwD4nQn",
  "key8": "5959rG3nAumpjEyNehQvxzaM9nDMPJrF9sr6Tuo1C8jcm7CX4PNh4oLgRDLVbubyPsPLc1mcbffXiqSaEKxCWwPK",
  "key9": "57AxX5JsoHTzBBNvmQs2CURoBP4w7Tj7xXb2DdNZ1z8PPyFNijDwkTTNQNCvZmiConRBiWzrogrsXnYXNdR8CCMv",
  "key10": "4TogJhwDyV3pVgqFsxvJsDE1u7UnpHBq15zzXEfTktdMRUXx27NDmxDHmmSNvugoZZGa1KqyQF2YpRJFPktLkVc",
  "key11": "4ByufcAWitHoqQFSohYUbsQJ8LECS4CB3Nr91Q9s5Usr9ik4ToUcz7asnFTRgUuwrgiVdyPkhMwFGH12Y3YRPTjM",
  "key12": "65nAZB1fX6oMttRKq3ZpxojEZg11UGkqhAaVqQJbx45YrHqVLXWsFWVgYX8DnAZXjBrLjvfwW8QhxBBTxfmji87w",
  "key13": "5mYdR8pyLtDiyWEM1THZNuLrxQDLmVqh8Ve37f25hEaSwdPxGmCNutTeAMXpYVBK5qR6LartoH32aMqCpy6LhyAm",
  "key14": "34ir26nhaz5TNo3GoH61i6vdKR8dVhG5tKBB3kvppbZRDN3Xm5rKkU5chaFSh79RJarLLsU2tZNUN2Z8zoyrXf9X",
  "key15": "64tYQbZMAVE7peSMAMnKimhS4jxRbmR8bKFFTQk3uJDQQD5KCvBU7wS4gprabUM1zTQhxyjutwMRoq2K4dbzSzwK",
  "key16": "3ezxwY9R3P67ws7uJuuhBuChEDG1g4bisA9AifqTzLF4pzQnjXTa4oxhjNewtpg8t1FDkFgf6HrgqXLV58P5KfBb",
  "key17": "5x811yGewmiJQX2HYe56u55FwDgKvtcJ2vqqJJJ7FiRo476xRhhm7xLXMKuvPF3oPA33pKHvj37kfuGMNQdFbnVG",
  "key18": "5ap8iZa8A9LBxaqHH7qASyYDs9tYk1f3kgrUk79aCTHuy5b8PDBBeup6H19WWkMVCjn4cAiv1cbWwfu76YxqLoE7",
  "key19": "XztmZzesgfM5ri7mTRTtu364hK6TVG2xSq8rRM7C1CzhLehQx1FEXRv16udHwE8HrfHdYQpTn1sFXVTUXVGG96X",
  "key20": "2N2J2yPNqnf3ZzC3B3HqHpdbDCw2sszd5d7G1WHjjwULNyuX889q4qtGA3S9XsHt3SBpLLHicX82vBiUh8dCPSpa",
  "key21": "5FpgKepKybCuRXAQmye6ZtVCU8PErvjBJds7oBpAH3efxCwHyJEPud7ZkrG2o3C6RYBkUaEMCWCcXajLC9rYQzp6",
  "key22": "3NjA7ouJKyK88gRX6yJzca4JdaxCubehh3akdKPJkjszRLArUZcRxsyqUX7scEnfwM8PHB9zwu9Kg4vyPV1cD4p6",
  "key23": "p1jUeKANgm9YkNYWGW9k564aqP8JF2hb3VTkhBvHQxn3cdzPiXMYnQxA72BSdhBpr4kT2WpW3QzV8oqxrQSsNvP",
  "key24": "4ar747TniQfSeVcV3nAofK77ny39tiGHYxxme8n22wbPBEnWhiQCqqvg69Yz4uAnRMg548txML2XMVR1QNpTbqDE",
  "key25": "5ELMjqucfzSn8EJHmm3aYfhPRbaqphLgaz634qmAs3mHpV4qbwZCXzv4VcFTMeoNBrkf8j3dtPPjqNXcqdY61XGg",
  "key26": "3z4WfT6mfNu46KvzwSpLZ9v6nUEpzHzPFp8RmeYG8NwFVQM1nxvMivCz6T56h5X9VAergg6GJgbFmA6ZaXLBjmC8",
  "key27": "51X4PT4NDNsS7seZf4PHtdsRQfZMdabQ3AJhPe3CKmAYRRcBVxFN79K7o6n5o2ZDecLHaMEVJDSEWVBj34GLfAp4",
  "key28": "4W9m1PPE2j4WT2pPAuWiexwSve4fw4fEwaKiSPu2HMXSdkG1v9bRteV73S7CfnNWhhx3HrWG3VKeRxz8edyre7EH",
  "key29": "2oYWhkfHhVXmVDMXYGMMryrcwp51Hm8MKpUMFNHSu8P9FSrqxPF3RAWFRQWnBstPNaVbbiB7fueHsudpH2mN1qvt",
  "key30": "4AepBsvCr9K82fBeDxegCJFDJTyT14wChXqdjCGCBxhy1YsiDhoEmh6EnFRP8wNMyV5FNGLnkWUsZtU64nuRrtSm",
  "key31": "425en6cPtLDNQgid68GLno9BXJh2xHbxYBcP1opm26wGFV4YwBuYDjLNsXPva9fqWVdZ8TGFpvoLteFgXdNAJcRt",
  "key32": "5qQsAgKUfWTZocXR4Q1vVGa7Pi18VgMgK83ioJncdvVNEs3NjY8NPJdKLGNnbbSfyw76ZRZytdampbsKqNERZC18",
  "key33": "5ew8Y4kCTb2yYTg8QUQWhrU2S8DAEfqgaakcapLVU5SDr7aQ1ZcXmPyyqH79zBDmgM7P8hShSfUUNYkGLk4Q2CFh",
  "key34": "5KjRFgEjBPAKQ8QuAqXEjZ9KEkZgy6Uo1bYug6xn2F9zCWrXAHdw2M4GjJrhpSZXV2RU9H44ZeC12GQReAkw7gja",
  "key35": "Vf9NpwCk8UK9bkskdpbFXp1yg2ocUfqGyqUaJzVKCstho6ntgdV61HJjsBWMuQMPYBXV6U7qHBnzNaLB9KASEsH",
  "key36": "FCTqti4n3guPD3b3WchTaCGwhKDvnc8dgFG68s2rnMVk2geMPUzb7r7EFw9h3WvpfrC1nojToDH3ECxExbMdUyt",
  "key37": "57BKqsNVLyTg4xUiCRU1yzLo7F2KVDvuEoT2kKYPqL959z2jW6h41vkBNfr267Uq4c6d46aU8usERsuRAdUoG3mm",
  "key38": "2DXXb3SxfguDrgmwRCXsdjkCTU1vtZ8KC6AKzeimGW4X2oQ9g9f4bEV9gH87gNJMM3DRiCSd2RuUj3eJoeHUhY4o",
  "key39": "4KeYsAZxDKksdmK5yYb76V58LaSoBkMD6k1qH1uRPF1M2esUYFsLj3aA72dBhZ3axU39tHE6kwcn6AH3QhMo86LV"
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
