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
    "WUYa3zbi6dmzNH3ReYtpPCmXvHG8c7mcuJcGTzrPmrSpbLeuNqf61kKAtKz6hzLwR7dK6ekcpkXNZHX6YKEUdKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kko7oKyymKuomNziZrUzVCgf2DKYKj9Mu87i3VUpmwEv2VTDag1FT5YkSvrRtSnJJ1Knwso4T7D2KsYtnBvopF5",
  "key1": "r9fFmApvyhuyKrtjRNmLUFmnoC57KFdvKz2D7DoJQjhujvuCXea7EMFt32vXmA5bvRL8Q77VAK4Fb8kqYrASx1Q",
  "key2": "467eX7wF62vXT9EoJqDJzLTbMbgQ9cNdfg9tr9bxbTj61EZNpTYqQXvLDRJpcyAZxWubbH7zn9tSf1Y7sciUyiAV",
  "key3": "4KYXXFXVdbdPE9ftwGTFRav8PsPXDNTucamU4P7JbFMGuFm91vrDKuadoAjRVk3kLTkBwTkCjTFtSKLLoEyXWyf2",
  "key4": "3v75GH9rLT3E9g3rt1qtpMyN2aoPxJKXYRsAEbQivkjHQ4ZPYQUJf7zY4yRy6dyBM49qnP4X38Yi88KACVkkfZgr",
  "key5": "38GeXQJ2PZJ2q3Xj2Ur3zujwMNV7CE2MeRpXs5hSbSUJTK2RTbpbdUgd8LWLjyKLew8yXeCe1KF2fT1p7RjkJibT",
  "key6": "4ZDp2QsGt9zMdnW7sERvrPZgC3VGcqFBpcw8HZX55DJuJ8CceqHHh4rpLF3eHBj2cqJNM4TbE8o1H1nSjt6hMPX2",
  "key7": "4yNV1scwY7AjZdo385eNycL8ftxAv22VfdDZtGmVpya6mNSiYMRcbhqMvpooTMuSwS9nb81pVcsWdGZ4w9Byy9Km",
  "key8": "Qsn6t7A1n21Bub8usP7nYEakDNbgY6EdtrTzxnmNjwFVYPVMf2pc4qBiKPJ1uHJNKFzf3vtnjc5fGB9EEYDCJ5M",
  "key9": "y6jXymgqT5Xr2V3vPSEn4EHhQmFaVn5iZBTtBbz8M9UqnsuEgvKeb74tsEv3yW1NKRu2RQtzSbzD1JGXhwChYB2",
  "key10": "4eFe2CDD5Sh3F7Qfr2N88QimdJ4SKh27yNARYNv7rJbtnLkZCvD8koVzHbZvrqMdAZTs2WVrW9GnmkSKwmvbTsCU",
  "key11": "5yUtrbs1SVveWx79U2946SSHQKjF4oDeSKGEdBrrwhKzVrxVNaaT2i3hgxcoyrPizDmwQMYdiBfUkfyNAiFi8Vr1",
  "key12": "2U6UbtoVC31fazm5Q6LC8E3oW4L33mcujzyN7VjuHctBsEJ5C2cCT6Nt7ADFEsqH8dMRrUhLPNwkSnSgk2ortwgW",
  "key13": "3cKjNxC3co327VHZh9Yss4xZkC1qb4rzAAvMHj8c9QxkzqPbPqmJyZ9g4kGx3usq5J9HyKyxx3R3jLkPWgWTKo6U",
  "key14": "3XB8Sqc6KYpzw16NSNYsoHUvDoTu3oCZQXeW7TmVVHXuSUgcXauxth2MdBUrXVSufc8f2kR7B2mqR7iKHR682uLU",
  "key15": "2Uznp6RtyHiZuK2vACL6mk2RJrnDiPG6XaG1NTRVuodfyorYkmKgGsYP3uP8W2xKDeSngHSkDV8T4Jf3Z6oMAr4D",
  "key16": "3ymQHHVHghzzEkrzf3gZ49LXc8Bbnq1SPKRgR5xzoF5dRKGZAMhNjY5Nzx3dKKJHebZd3ph9twzNdmCXYPUqBgVb",
  "key17": "5E84fmRFEcPGrSMUQYu9tSebqFFHcCDWs5Hvmk2M5pPo3gX3HGTHQmV4NXgEYp1zYsRaCFbjUk5txYXCjLmfGZ4M",
  "key18": "27fPniGoiBBkbkisMhwGTGNT1geZmzdB6TVenKxtqBQSvDoA7eJvKbhFJyKx9oigtWKxeqPgy8rrHt9xZT8hYwEU",
  "key19": "2tWs97pqLKo9ttwbPVFAH6TaxgMPFjE2Zbc6ykfFiZ8uHbPUHCQSjiVmpubsYSm5xLmavacCYAC4suj2kajLRevD",
  "key20": "oNgpxxkCRAi27RUsAcDTLVwGZMJcW3Ci1WT5aJ1yjbDBitEHT9nvVkQuoyL32CvuyJHHrRraLjncL3zu5xQyVSV",
  "key21": "3y4sEfn55NASK1uo2Cg54Wboex6ofQEuNDoitS4G6bLpiYHLpdEAkGonKnwKUQXAKVJdn8FQ4zwTobVnzTbG3e3d",
  "key22": "36s86NjajA898E88utXRCGCyf5cs13rPwPsxnVg61WXdv2VPxaJyyZq3s1riaMib2AoueSh1jKTwR6Q7gXAVT9D5",
  "key23": "3e8cfG9LEui5Gwo6NSxGKLqjzBtVx6zs3ZM7uBWe8GCTt8C7aKee3gZTbVGRJT6Mj1dMT9Bz4X3toftpKq5ZDU8H",
  "key24": "53bYQc6a8YzP7prPttU1aFJnxuECQvTAPauwyRAZpeeur8ghX8Wfwc5TcnnCkMTvDC2ExrbP7HjGNMUz8waoaknN",
  "key25": "4uNGRjnJjWFQdXYUqtxQwVW5M7veic3DBDyUMeh3N5iev5neYKupkp8x4u7FhiTHkhEE2sncoQ9rbxh1v4VHE8en",
  "key26": "2PJgcvDvhe5vTRyNZzrTUwT3Zt33i6AsrUu8t55oLcqoKpnxV6FfUQzPQiFzsADcJD96HHPHQm5KPPJKFpSZhUV9",
  "key27": "3tKz5eeQwV9bAqdpYMRHHTVYdoMARv699S8bsRretKxYQWCzZm837HRc6CvXjCnXgUFwifLCCFAe1e9QKKZ9cZYK",
  "key28": "55vvs46HQULCGreEX8kmrCApUhje4yb6jRn8te7f578dKz3HhbnbwjwrsPHVSuYApKwgyJmWDoQDcDqvPvUP8SAS",
  "key29": "mKtwi2jD2xJUnd2B7XTZbBAnGwDTLZD9jDVccsAVJtWvU5sHHT2kzNwa93kS37jmgRqAUrdGhzoM9b2rWXiZPof",
  "key30": "5qrYmr4AdAmWNcMkX8YdqHnZXUxenDbCEScmfAEu2pZvYG89Nbmt8e7fjfS9rqG7Df7b3VHTSBtj1nHwGzCNx1SY",
  "key31": "5zLm199Ps4eZPRWNonBkF8nftUboSfNpNURSpw7eBtvZJPSByPKZPTPGLUBFM59zwBkGQxy7WEpX9fEjZkCfN9mQ",
  "key32": "3NBceX4pnC3VcJS17LJWA8VkE3wDA6udPPirv26hLLNCeyqH1XgWvSmsg91Yf4ZWx3nnKusKzVxraFzEs9FSjB5k",
  "key33": "Y9B81gTBmdud1egYcF6aN1D3m6pRXuqMWBb3yYMWGyxX2a3mts6M2hWSp7od9BqxPToGkCeoiZAtuLLoYcsMKGy",
  "key34": "3o19G5ShoRyD8EYpNx4rvUS8KbazDthq4b26zFbNHofK8T68WpuQYctgcAfCR9mjDjou2vVov7SdJXPFeXvBKB1H",
  "key35": "219ULs7ST7sbf2w1ZNzMpD7T8BRktXg7hEgJmM7git1dHu79TdSyoQnTedLmuH7UsGYXN2X3PeF8JTRMXLw8SuaB",
  "key36": "sEsjjitQFDXvbUnpExQ6o75hvxHkCYsJrRLNq2SabJ1V6xnAbtAwrU58VZEfwtPSp56DPwK3TWWmY3nixZtCsYE",
  "key37": "Gk4Cjcvr8qxTZkrDn6pmMJwVQdkoC3eu2FuXqRqpaHR6xTY4WnU2pJ8sALyUvs6DUuanrEzphzk9pjzVrwMkKki",
  "key38": "2CpZPftJ2nn4z6meHRjVL9gtuqQqWUymUm23rWHg7ABwf1NnMoTXHh7niYGE7HoumugNPhjvEiLdzae3nYcBzADp",
  "key39": "3UuiAVyLst7G1GPyrFWuEjZKZwh6HzLPNcWLzLf1upqFS8CbC4MHPMjpiac987pbsbm3iyJkDrpDroZ42RtSagyz",
  "key40": "2tnKgLbNnHvd6AdkTQ7ZdkngBYrrAa3WVX3qNfFeZqT1Y24QxVY8a2seEdgsKzEQWKNBWbTfuAAqhfH94Edt2oQG",
  "key41": "2d6M34WsUcVJKdyFynLzoH6bjjJM45QWTgrCE7KSRwa4PA8iYHfGKrFh5k5riiNn4m3HBqJu4hyfiRsFhfQURiSv"
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
