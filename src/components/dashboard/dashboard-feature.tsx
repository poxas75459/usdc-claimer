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
    "3yW7aFFhxSjWcRQBNitNRWCqqktDsBJH1bERepDJGEKjcBHf1S22288KQoq6EVi7kyi8FknoR7hJeVQ1WMDEjTXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdh8vGcKhWX2Y5Br34UPjLwaNvf8j5pSF1uTYa4RF2JzVeYNwusNsPxZM7JpwbZcAyciEg8zQd4xaM36KWXQq8K",
  "key1": "4xWazfBtmgvuz7PjVhqmpJNHVfTf3PGNRiaaZ3Y2fNUbwGEDEQ7R7XgvBFrva3E5Rivy4gaNbAa4iWuXDT3VdSd1",
  "key2": "3Qrqj8heBNwR1hxL8gSL1J1hCm2TiZZmWJs47vafXioWuGMXbGXjCzk6aXfh6JfQJDFgbaX49Bx3sHcegj6TgqED",
  "key3": "4WFU8wP18D1xdThJNdBVMh8f4NxsdB22rhFm8Q4NcpUpBNv5P7hq6moX3jxWhFkgxoYYNpMJTxc6qjaoKfqzs1uW",
  "key4": "289xGr4GYbEa4VeDgp2983sCZYd8pef188Tvb65AR2mZCCVqEyNUvR8kdFwc4sSKRXesMbzJ4gFJ5kf92WVjeGtB",
  "key5": "4wA4hEVL3ZrqpthmLNh1AJpqt84ZNyUbsogM5TV6xpGSHXbbD76uJhjnLDSrY9Lovt61NvouUFvJCVYeKiH54k5k",
  "key6": "58YSSNAHvnBiZeRoRMWSzMpPTqeu5tqVXnoVYsYTnZvAJ8J3FXuVSdQ5ab2AWLMmEJMTf4sqrmn7BJCZMQgT9m77",
  "key7": "4F7JexFiuLJ4BGoYYB2RCLbtwubEUw4NByW9tgMF4huebT1XthNrmAdJSwnVWdq1oVbvRerHTynfozy8R3QhznUZ",
  "key8": "3QnTHv5fwmjxokU8ZjevJ5xCc4dUWgLr8UZHrKpSTH28DvhdCwwZbDNUJ2YUePjxyNqMscFtMuNHqiGJdA4XhZZL",
  "key9": "41bPpUbTfxFsg6NksgHnigmqBzkrVaPqHfMf5oViA9ywZEkZoqpNVH2YVuMLaMkRBnTpwWgcf2WxtNsqQ8PFDZbh",
  "key10": "4WfCvTVSQJkWHEduXcyHCTbcNVmdNm6kaRiLmYBjR1JYFnVe4cywzxFaoQLsg8vHVr9vDgwC3Rz4tmByg4UqYrSF",
  "key11": "4ijXtfEnVG3UN1mpTyoQVMLz4EVvHR4CLeuuG1fKjVbBgVjMoTDQJFLJzbH42bQbb4uxgNSXboQV1pusmm4Wqh82",
  "key12": "9iNeRpaedCfFtVdgtMP8Yjypvj5Y9pHcnV3Vgsq5iYCmVuU9W5W1senGhhfXeE5NFWJX1dV7bVveQJgMKyLa82p",
  "key13": "2tgSqTyqJ7w1iCHxVNhU5eaj6p31ypWwFaPgDTtskVvm6MJoAPAnJV3u1eKdURdark6Fo6UVeP6SSPYjwgE7o68F",
  "key14": "3ZfQED45FT6keTA2xEwsdzQuqWcvRKxqFoiUdqAfyvzGbZNnZcsS7Nm3CkY2nr5BdVeTzhTNPQZGUXWHswKEhZzQ",
  "key15": "4JpTmBnfwLXHgURBva9zm9fncwqCAQUuKZX1dnXDVcFVj4MuW1PxLpd2PsxRjzMjpGpZEAAeFg7tVgk4r7ULz4Qu",
  "key16": "3zNguRUHeDoTS1JgfN3PrXBYUy1mnhV3zkECLSAeyXetTWGh972HTbCgwTppcdr1SzA2V2D2Pyjz1BKVyV4TWDFf",
  "key17": "1hp9YJsAoCNFPmMDfD7Ypm7EU94zHxGwwSyx6n7oTXUPAhz5sPbH7dtZpcjSkMXih1QGFhJVpEqVFjWyJUCisdW",
  "key18": "3gqMGmQVHuaDcvUuDHSWv3YoSbYCKKFAa2nikyAzmkXyyDSfmAFZHwCkpZq6SwiYqnEor9tu1TfMzgrRBMLq4VMs",
  "key19": "4tcdGRAFftMEahvZCZGZ6W9CSgLtMcWnGHmYsebqLp1uSTppF9WBUQJ2hZ1WPKdHpRRjPLmvTtkz3hSE8Zi486wo",
  "key20": "cAVRRZdcDc7QPH9GawvVT6vvBQ3W3L9QmrG1CVzzS7iooh4PZ4XF63SjKoBKffiN6kgQf4JW1Rj5vCNGvptVXAH",
  "key21": "46cCeK9BRJqxrArm9Nfvgr7sWhU9TjVCuBmMcUZ9tfUtGoVkaXEceaLTACoh2EKJ7S2xi7XPS2WHKCUzTs4FZZut",
  "key22": "5rb4yEVmXiu7cEWHxXARcoW4qhXEuN5PJ1i5F4aUJVLP8WpoP7MYSX6DvivVibqstArXRupsuQ7FmVWUhPwvTPBY",
  "key23": "4bUQWHZ2HC2P6myRv7ZAVpVqMGmd2gLhQo9WdkmDkrZT9c6it9U8cxvGqyKP9nT8vny1g3ryewHmBvNAcjb95phq",
  "key24": "3DZbfLpeutQqJfRxfKWHxHGVPPRgFD48Q7BiifWbjobXnQqSMYvdTukLkNvbn6jFH15UNrqdR5Wrv9svtoKqRMUF",
  "key25": "HQomEsMc9tfr16R57zYJnfApiLdnRVDfByDFyZcXKkQWw4rHjcwipBX7pL3JCQsxGKgqyt45PfBXyWrRSaEiszX",
  "key26": "NRy2j2pCeA8519T5gy1Nj1BiRic9NayfaAWbEBgTeRncUQK9Rn1ZcAiZ8VCSVVsVijZisUXZ9hLgGK5zL4KoW8p",
  "key27": "3Wo2ju1XhJCoKyfUyYsRzNSnna9XsAVY3NbeX7imGZc6EaF1DZHw3aqNsQFkCjAAghrGte9V6vWLPRmbSTyzkYRv",
  "key28": "2HAS3DAyCsRtTiknAeSVGsernh53LxwQwYAVAfEuC7JoZRyoBNkyBLQaqpaoDUXhzua8FrrKEY8hL4a6eWavAt9g",
  "key29": "3ykBeX75KxFE19FS2RZ1ZDnsvVXymcLvv8By6ALq8V4FsoHwERqFmF4NbFSVo7mmWAbVP5g8N6UY9wLhnzCkiK6z",
  "key30": "3xvRDzU414bF7hpirv8qcanqJp4SmU8VmM2SxhSp5ztbRAs4j6A9CEs8CY3uTEf3h5TPb3o8nQEbyx7cqBYyxDMW",
  "key31": "4sxmH5tBuh8nseTFL3VaBDRUhgpSpmcqDhBDgi2PSxBav6v36ZeCWBXZtQRHRnAWjpkUCEhBhJUSSA1zgJiHYJ2P",
  "key32": "4uKW5TK3zJbv23zyQR85nCgcCke1WAC798MQeS2wro8SrG8Zev1dFUGdNnLuKpRZUDqqCQq1PsshnFBn9FonTfEG",
  "key33": "5XaNreFGc9CsN94wpgU3gHuaboXkwUbJyXh4UJ7TZcYM1AyrYFTTTPgbVa3CJdMQJFoewd6ZkXyr4XTeVXzhga4r",
  "key34": "5YJFpbqU1hSqraT7fLmVjRynewi7XjbpNvURMEfaNkqRshPmqfwhBNEDaVLrvpjnLQD5fG8ijd1PUrNuKHYmCtsW",
  "key35": "3GybxkxysTBpeLPbzquqnjL1RA2ktg8HQ9Tdwfb2UJMbc4YpV8ysPit8iHBssKTSJFbxg2NTTNi5YUg8xdb9HPCz",
  "key36": "5bzyVTXJyxBoe1dP6gRKrAYZ3CzyhRpPuyTGHDzeeRupYx9bw54YshGYuL91Nv6R8sEj1V5ULY7jRbEXE9cH4n91",
  "key37": "4QivA5yfGGPHv7LpDPdHQxmukAqt4oiRMoUrg5X8K2J8BefMxnPvmAKXv5J4FJbp8K5hX2t1Xy2xt9AxmcBaZBVr",
  "key38": "3WGHVXqBEhA8ur4QPhjqqpUwqBb8y3xMovZkH4kYEq4LNLezEv957cKZa17RdDQ6VMHQ4TBeP34jjETBVnicbYyb",
  "key39": "4jdXcVi9w9tDnT98sLemtRb6efBnhQRDeexdJfhQ4neRGZjYpRVUPTeNnK63MyXuPiBQycEYNe8D1J8KY52SZvrK",
  "key40": "3YAgmYjVRMmk7EJgGWgEDgRLJzWttQ9bjY7rh3LP6BDjnp8RpxgAYoLL1FA2kfdzXGH6e8iC14KEuysXvXuiQmUV",
  "key41": "4kBbsW8PKYw5RyvBAopJ4V8YA7StDckUndAbt2jKi7xJy6qPyLpfoX1ywmfpUrrUNU75kVcSpWqKuiy2qsvja48m",
  "key42": "msD2uUYfdrnQmCLtUwqcFGppiXmJDFCdkq6Vk9owUjBSgj4MYqWkpjocRoah3vwYxkcksNv6fUNhDGCvmxe1aDd",
  "key43": "gKztJ8jahsgdt389H7NqGLURcavdKj1J8NHW5ezZzZqB9L5vhELcy8n5PE7edxfqvT87jwE3iCGQHH6zp4RoNK3",
  "key44": "5Mgj4JE2MzNQU7UCBJ3fQM2RuTBisT1y8oUMVFEzCvqmDBHhjhyVd1JB12QUcxuqQDsuWv56C3pvTRcQ7kD9QPbD",
  "key45": "2EB8Sw7xKZCi7RjXXADb67wig2EoMhQdL8anSWcvtVyKB78RWFJjCzVukAp8iUZDtQmygXhLQiLuUcs54MGbKfdb"
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
