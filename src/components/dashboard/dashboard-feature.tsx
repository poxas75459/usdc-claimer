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
    "5PBwN2JtcYNUBbDo2d2uqAhLPi66dfG4yM8ZHhfRrH6wbfTjbbv6KYtQWKJtQiLGDN41bsPVGQwPHrGTWnPQ7CdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y73iyJY1pxrWXDfaoMoh4J3iqkffrB5idjsrL3jib9Ujkk2t6LDF1SWcZUYMwdQNzWqmAoV7biTh7NxKPxLUZ78",
  "key1": "3k7wfW1qkSn27cncRGAv6v7ZY8GTGwXiD3tm7aierQVHbj5tRzmwfbxk6EE2jWNXedEXFPAsuuUDnVjdE6VeyV4F",
  "key2": "5NLtBZhAXT6y2R6GnjGykizszCdtEdTn28zAdgRH8eLV3fGSjhfgWRWqnhg4DHTw3aV72SaYZE8k15qz6r5YcXCK",
  "key3": "2KbzG3hy6aqiTjTRxWiUXfQG9cbj8uRkD8k5qo3C593fA1Ujj7mGnFhAUdnFRoLFjAY9xCgx47VbipeREWo5SpxR",
  "key4": "4o952oorof4obMrfJqSAiiskLKim4bjiV5Hnq2hGmCpnivdeiWuJtKk7gySwEbjtbnAtNMXNRFVU2nJoCEeG36bF",
  "key5": "2pbj5mtfMY452E6u18GMVCpdfRVe3a3P2NQoPadQHpvPYUTr1oZoeC26WpwUV94tEA3hdQBmrpyrPA3w7iGkvDmh",
  "key6": "TUvow4m9uT9zztpYJjf5REU9NHzLFJu1LjYA7nNMawTQjaSSruxNJvdjFU3VBEamE4f12WBXM9jEyL9CdvXzvNa",
  "key7": "3sMzamyTTvRuL8AV8gvMfhcGwDjsbMW9iaDRPr9asGKVfLmGyVfRrK5UW1r8c6x1Sr5mM1FaJLhnBTKFgUWzxHxr",
  "key8": "4F3HpGsuFKgvgAGpKXJ2ExBGNBC7vZk3rDLa8Hbu2G2igb6EG6qTcWXuJVscYMAJbsVnuZA4hfvaA3s8nt9NpTqh",
  "key9": "27RJ8XoktoMQyS9zKcZnnYYdXN5SXeLXWacDjjNMCQfF8Lb1m916WAfoCX9it4DtR5pvq5ge5LxDgGtN7pMqvDH2",
  "key10": "4zqLzTLbWPbVdXyhJJKk7BuhP3WJSyojRqS1qtqwns71mAaUjWsGjHS9J1WW2qNTHFAMBUduDhgN9yY4vRGt94zu",
  "key11": "3CSdQLa4U9K3YSAENWa86kEEV7vQASWfviq7z4zg3DiSbyFDjjj8nkuwCUyyTFEQrdh1WeUF8LfCcN4UMsLgALkS",
  "key12": "yjkDYqFFKRD7VScaYysNGSpn1v4UZs5CeURnZVJNH5fbGJpGpYxFcYcaHg4Qaj7RNvRz8mBga8S9J6NKcKgaDDH",
  "key13": "3HVuVv7Zyu1uWrsJFoLTt28VDiQfoYjHJc9C7tFzHRbagntQxvMe4g2ckCvcRsgkJooLkdMydix2F9djHrj2mXD2",
  "key14": "fUHQGwjFRCToEqMvf1AZLEXNLk9tGFQxe2N4JYo7ck5xAUWoJJey26tT8c8SmASBhvoq8PiGgEw6XhJet1cR6yF",
  "key15": "64P8N78gZmeg3UCVvuZTemQ6rzJWRFMJ4ij4pHUc9fBcDgpyiamtRL4hDj8ZePhAysFwvVzBSJ6BU7WWpQDfjuvM",
  "key16": "5ya1pCeXAAQR9satzFUVK22EZ3YrxciuyqNunB9SD5tqZiGALjSwLUwVBAbtr3UDWJUhqZ5dH2ygU4CisBFx3TCF",
  "key17": "4JGeNBZhaqVDg1wh4AvWiNm2DaXycXpLFyHSnDwEVv5YcU6qVamvrQYLdAuWDqRWr9CwxnKfkgM4Dx2PyK5iD9aJ",
  "key18": "1fmvW4rZHUbthxULWXHuBMBmXuBj8MWcq4mjFffGx8X9x3Yfnvg4cEG8wKcem75biuGfDpUusfwUvaR7iw3Avbc",
  "key19": "2xHCjDCz9n5WPvYQuwvGFR2QcHwxpqi7ZHKucxGvQRvN91t15EnDZJgLxrMjfTsnxJPStLngSZH5pZm7x9o13ohm",
  "key20": "5aL5nTwhThtZPBcnRjAYzhcvuEMP2ZYdFAF4Yzezyv1TiTAFGeujG3txgJt1YaRVBboZsZCkfbRjNGUaRTfi9Wap",
  "key21": "2UeR4e9jbCBqzsxZgoofamHwQ2MiCHfYT9SiyutSzdeUdHGDnhCUiyomoN7R4AdG4YmaYYSuQfidzgtpeajxEX9H",
  "key22": "4bo7HMNWeuMtgQmbNKmkxswVPy88xGFzEXM2L7LDh5VUeHM7js8NKfh1ARWCd9Co84FguBf6Tm6UBcxNjRw5kSCq",
  "key23": "374Y2iYukggoPrXV38HYEJWJhXu6Kz3oK59rHY4H9qUexd7ujQHnZACrpm8feA6JHFnUPoG8yxDN1SHEYFYWpzah",
  "key24": "4XNkHxB1FYU6eTdwhxgRNphtiGAe9uUCsZJX9u2R3kezbegHAeguGQma1xgaXDj8bQy9gNRFUSYbPsxYekjEr8Qs",
  "key25": "2UrGoDb864WErLeVTZYHhxxtgP5pnLEaMX8PisD6JWYF6tsFs6SBEqtHt5RCnssqGWqBo4aHz6pD193PevZo5vTk",
  "key26": "2f2UEa1tQgWFnyUZvfPqG2WhTFYX1ojw5AozwB84J8W8EVLkV3WZjutjzQgAVPRyA1mJ4DEdRPQs46QEmKHSJdqJ",
  "key27": "34oVLvESxLw5LcsML5WKLFX6yFemYDXTiUa4NavKu3Ykoo1nZ6ZXJJo6cJDdUKo6vhiH7E62nHK3TeEnoWRWtsCX",
  "key28": "GXN1YUPUf783ZHHf599PDdfcLFDvNLLXDkyY56zfkzyWciwp65pvqvNPiq1AtZL6WsgrdXoAqJuVzZ2qET34jPw",
  "key29": "5MwAqVtRZGq4Uk6YsEshe64rXybKhYMp2L42GuoLJnzmkHCJ8yosYGaq3QYiFG4DYTAqjt1sSfnuYmscVTBDcCj8",
  "key30": "4XL3UXLkyA8mTA1vrWbBkLBmcLMgq2pUGocsoGxS2kYnbb2N2PSA4Hh9ePVAVUPyhdMusM2hgwy6dyo3FT17yzi1",
  "key31": "KQptzEM2EfTuabGErXwoWZ4KiNrQsFtcWWut6X7grsD4QmQAvY1QooPk9RL8SdRn9TJwwUkeXnjTMtWp4KiChxg",
  "key32": "3SaZAQDPfUMjQ8ChGQqkMt2nritM3BEbYwJ6wDd4t4UyDC9bD1NJjAW3nySwpPHGVF57uMZQCjMMRq3GMeAaRhGV",
  "key33": "4hz6q9DfCzGfotaRc9epRXczPsjTuVu3pBStCRs7KzRBPqcCXs3ZKwLbPscWQ3A8mw5LS2YhjgddQ8HECfE8jDiE",
  "key34": "RQF2K3YVVSBevfFB2vYh7jKe63mmhXpYHXdqhJtBUoJCfL2F2C1acE3TS1TwZ1FEXUUs1urNPH9bW4KUDZ7Xsk2",
  "key35": "4RfuJGMmHLGrzrFvL1pYz3Pxj1nL8sQn8xX9nTFoK3Uwnz4HHAtjaqyydoqvPi4gVo4VMGdaWBsh2My6MJEL3gVq",
  "key36": "4MesngWN2HN2QhVipwbXB4BBgqZQK5F5nz8Cf8c688y9349pZSqSZgnowCLR4GFzroEHeymQFX2snH7yiVhRPmJJ",
  "key37": "4KC1nC8mPJXiosu1QN9zECbB8XB366UJTfM9Xx98AkJ83MBpVH9q4wSxYWeLK7Yk5bze8SxESu3LdsGR2GyYUrbc",
  "key38": "78Fjhx1EL68Ury5gZpG2CzVgSPgryszPrwsjUakz7sHYiiZfjnhtcXxeC9y5J62CJk9rvdpXHvtbt2afAiyv7SB",
  "key39": "2pA1yfUaNcnnbKbyvuhkDrhSDdvCQxr3nn2xehLwKTzPSk3qrm2iYa4RaB5dDZnkxukrpJGnHZ1nxm4HfEQLY9M7",
  "key40": "2R699E6JYq9SBXNvjuJwabTZFnuHHRJ2EQK5b5rmv75ZYXR2buipFM1bTrnkrK8Dx5JAUWrfX5yFKYrpwzJcn5T4",
  "key41": "45Tk5xcYS7odANcZEVcoMZSpXCcZHFC2FMPrG3PGERSiWtmS3foFzw2Gpa1NZYKCu4swVUCU8NaULtNe2LLWwEHr",
  "key42": "2XGvxbsdstvhSJAYoRwwyCY7i9jXXhxwczregYGZC4qvAuL1ZkTbWt6YAo3qYYexAEYp2uXdGqukVYFXMiXhJSDR",
  "key43": "2uJsxzvSXhs8D67cQu4be2TqiwyvhkchjBjqGXtEKntSManvYemcc3DPWsg2YNFB77uTLiB4fw8XgXQRWfjeQfzp"
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
