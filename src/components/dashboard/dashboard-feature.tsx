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
    "32ZFMNBZzM5DC3MvZMQuRejScvbN1x99dvEqfBSjxLaEekFFFDx1xKHXeZMq4Pcab2TwWe2EgzM5pgWjFhQc2LiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3ArHNbWU3mAvD24c7CGKhFnZU72rK9aWhwrYCZh87LwHQRdqYUXHaAbqPqpLn8JC7u3fswi1KTQYtfkyS7rFYg",
  "key1": "2aNFtBZELZ4QFiRCJmc5tpKjsZcRQfy4jGDbWfsWi87Sh9wpL7Jz451mXT2c9dEdmoNT39bD8H3MQhFJnA9Hj435",
  "key2": "5huZs1TLgwqMPEvhnit8Em79H5dXNMRzcahF5L5pEsWvi58jzbxo9VmtgjC1K2cr43XEm91TfR1mqsN22jG8wBoy",
  "key3": "4BE8mqbrpRmnx6V4mGMP7o2k3YRxMhhJ5Zt1iTDw3z8mYjfgr4LxoN7W68VBtng1jHpVH21vpa2wFjGhCjv3WzZa",
  "key4": "2SQ7VG6Tu2vwk6p5j9jPJLb1z7TFQaULqg5T9tdtnBjbebDYeWUqaLvaz1WxoR54vxNwaMv6AfZ1aJ5ca7CZZUfw",
  "key5": "25JkAzCdWFRjhym5iAGJCWANrvaXyUDv5osaG1jt56qqkoLmf4AmhH9jvxB4nipxdcYyZQ4TW8dtTabbYxe1boVL",
  "key6": "3DQarPj8mFFMAaUmATsHttUxskHS3EF9UU8My5K1gMsEpuTjKfUbn1U2RsAXQ4BzjfiPrPwhsNfcajwH2jqLqU6",
  "key7": "3kWH658XuHVhMngHaDBiYcFEZjDxUKJ7idWjZYKPFeZ9WikEGQ6yTQRXaG1weF7gJH4zoPrQALty71LBmVBR93gr",
  "key8": "2qJ9nZnekzBnLDcVHYFqNbpBLDgHzgUjv1K716MXPEd3Bwuvdu5CfouXm2aBRs6CiAqGF7uBRzMkuZFtLNUWyn9R",
  "key9": "3ksyVFBENfrhm9fB2wNMrDB5xvmwWW1e81Mvhwu4jvuHtRTi5Yu8X4NVqjgBEin9PHdwdNiVcxafTk6sVZghWkBM",
  "key10": "31DhXWVMk9QgT4sbi8utqAxVGYmLCMSTz3QAzkJhxHkkL4ArULqqGMwWj1cEswg5DYksYWSjYnxAxHQ68SzCxqm4",
  "key11": "2rArfBo4Wa1khKNzyCUkicGyRsoU5EfL7WncprTx5ydKfA9ECfcmpX9xuPNjmrvYq4J6uK4Qeowb8K72dWg5MMGx",
  "key12": "4ZM8PnRkYngYojdFo7TAT7c4dL3c2itb6jhFQjh9rXxhCYKjvbr4GxWQjgCQZwg6LNxEp9YRYiwnQHdV4Pe36GRR",
  "key13": "4xWVSwYATPQLemCw8ceB5zjJx4HoLMy5zUSej5ayZnJBDCJCwsNoH9cGzPuvwTCzZcvAX4r4MBVgXmXFzkyqd7qz",
  "key14": "3arLTJoBNGHkwMqc7KX2495UyqENK2Mhe4bPLGV5qea6SR8yH9v3uG5fkAgwYm3Z2ekdyvXRcFRnh71YDvrMhnKr",
  "key15": "2N1yGx942ZQkAVoXHoxEBLZ6YVACUNTq9gwpN86kDo2nw2SwSicfi5g2rgkZPrrQXHPqJQr5LruTJ8ueDiZVHjNc",
  "key16": "2cZmNzVkf1Vrq5CuptniMTmLe1pusqmZTXvbmVvAdqTuvv5FftvgZ9rhCC1iNFk7D8PeGcRyjTqZzPXBeG7MrQ1u",
  "key17": "4W8RVJTQkfjVqq2iLReY1YvEaXMRGEWupQtVDwp7AAUVVvQNvZSL5eP3KdJsCq7A1mR8FJjK2yBKgU3x985SFVtR",
  "key18": "37m7iAn7Z1bGqxmkq622Zyk9Nnt64wXNfoiFJXKu21zawgoVdzNp4hmv8STdBDWtboK5iArVrC4NjDLpF4gRP5bu",
  "key19": "64UoyiNTy8oiNj3fNXEXR9KsdVwrSEqaqEKd1G3MLRuuL8wkwWaZ3YrfZwVGbp5L2xWoabWowSC26K27jpvWZ6aZ",
  "key20": "nxJo5waMWJhc4cJj8jgKKUkpudrSh66mYmuLitBiRzzcvVHDur2bzzKJYsZCyzHpRz7cxKKfshfDfbAkBr7muxG",
  "key21": "5njVo5HseLxKNMUc9fVxr6ZN8yj2D6y1FKirFTxfyTKddxCQr7FFw8Jg7LsaqKF69GhvpuPkVW5bnh2pVY1oTJNa",
  "key22": "5FEZ182uhvEHw6WRnV89Vtx6qzkHrjTnEdfzcfU1xuLwDRAq2AtspLJQeG4aMqpybHkdxr15bZTSsgZfpxhHvB9D",
  "key23": "325v7jZK2K36LuCVTN7e9VU5RHsh1rnE387dR2k5H6xQoCXJ9zjDSf8Q9uLHXSXePYMjoxTswevG6zCjaTAJKavw",
  "key24": "5ZThXyNbM58W2zxEtWr1EDYBLBczWu7RqYkxc9SZcHxpnXKiaXzfkh4VvJiLsrfX7agssv7NiPd1q4GxsjXinnQt",
  "key25": "vw1BPT4uvxrqQP5GLTLTQfyJgHikNBjfVJj6JfVPLSvUZGLoN5gNSrNa9q62B4EVXdMaoWVxz2LDtoVa4wgc4hV",
  "key26": "5yWTrHuBAKy5HZCvKTAEVvx4a72FaxL5CnHQVUa8TAMxm8mAk5N6aWu98VNxBEG7L8WmsrMCgw8gg2uc5KFBMrzz",
  "key27": "YyRG22EBPCd61LWYnBAUTTT9aE7p441VqCXdMQUt5kdkUGesehG3nP8wZUQTJssRnhUhEtcLTJfE48nbiMsBeXf",
  "key28": "5ovfcNX3HvPjtXBQmwjggcrWHKf6jftw3Fuepw82oN4WLJ8pxwgAU1qwYib53mq9r1mG1W95mJJAwwHydrGA13c1",
  "key29": "4c22qkwUArcxY2XoiRmhDX6MWKDssVg6iamskZ9VkprpDRqQZpzW4WkJisgdwjjte3ns4fKbzkSD84snrALJ5vf5",
  "key30": "E7vPy9izLvCzowPRqmiy1NcyzThyFgG7ibzf44ykWF1Q6h3G4WnPH1YMh3zbuWeaDEkc8nJnp1aRhkg4ZdKgMGS",
  "key31": "5ikRvSV3rb1pJcr2urrywCa2VxZUDEjyGkwwnsnmHToUk7VqYv4kRSNgRaMTA7mRo3NWFhXcrSwU6HMQ7qxjWAZG",
  "key32": "2MTdC6nXZzHsVrJSKZKjBsrRw4yVZbm9PQTsN9fzFHF7NUFYaikkpzkDK4jp2x6YakfqHV3L511bgJzfWGi6FKcm",
  "key33": "58mC3UySuXjPDPD6mMDd4cFhtT1xCH4HhAxncsmYeDz8xA95AWxTxmJ8Mbq41xZYyMyDXnaQGz4GbYBHszAvFcVm",
  "key34": "5jDyc3uHccqNxeyjMwH2Agj5uio8gXXijFogzrNh3G2o1H7QGgh9nkETLkjohG3YVLND1NnFpsmoYhnkkG8eCWhf",
  "key35": "5sGGrkJ7kqbtbx8xLTGexKPVEszT45kUf3ME1AS1P7mqQsi2errgzW1YDgy1jX2fE76MwfVHVQ9eUf6dfzBfCChX",
  "key36": "2afZdoAVQR3cU3NXiwhotxZ9qJTxGHwsWjRYX667fQzRAhnJP3y4RYg19yCEfNsepF8y7B2NRgxgmftv9vtUKi6U",
  "key37": "27weL8EDhTUUpLDg5GFRa3HCMnHjkzRxf2RqaQtzhotbbxZGuFWVPx4WdqP815Ruv8UcuWosXLVHHQtMPnxo2wxi",
  "key38": "VVtQGhbJjxfirCnGxqqQP4nXabqZSwCgxa3f2oxqKDAnyQ2e1kh85N8BFsTREq6E78nTg1L6kW1XFdRZXEo5vv6",
  "key39": "9EGSoudehTpDh1ZZZnMApqkP4EiucM8Q3w1gxmbwBQ3eDyhpW6AaPyKautUBSFRkX4R3ejt6aURLGg4zfDhAE3z",
  "key40": "3rhdgPjk3EaNYo3Cnyc4zr3T7Xz5cCZAkyqLaKm4nsBSST5LnRcSLMYSHy8RhMvGuZmhQHMArY3XCH7agJkfgEEJ",
  "key41": "WqGwFgL8qyAR24MWpz5bNbwHe3wthnA58eSo55zfSxSJqFpk92xzP2J56zqT2brChcDzqheSJwHR8xiE5tLY7se",
  "key42": "62MfXfHawtSno3bkJbZc6vYmshKJr4UJShqLNjLMQigTT3MWAKv5UUUT1R8phR9ceGEKiEmeLNzteC5s2bjHHhPo"
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
