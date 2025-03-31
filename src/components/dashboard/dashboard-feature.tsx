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
    "5fS7CzipbYFSjRVVRB3SNLeX1U59nPFEbrV1Xh67sVfxbJdyyu6Vne5cDD74VCw7Pni2CSTKVGKmWu2pDoMYW5t6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DjUUkK8XXvVeQfgL31MKqaVSkt13Bo8APu5R4JM36rjU6AMGfYv8KWYja3wWefBP6h6YoV8LGkBnXCqTLQ17YeT",
  "key1": "2KDyt8vk6QHXADCe8jvBEUnfYgHJwypfbCPMJb26T8GdZDKF1mMxs2a7545dUa5tQiN26jmnKAhyj7hrdmhRDByW",
  "key2": "bKXkMiSsAjPytts6H66cn4UuFPwFSGjbjWYW3L7uxgCmC7QtUCPVqhdgXHtkBP349L7P6e1MFd4VLX1SYxwgo6K",
  "key3": "2NUcfneezbfhNA1xzQahieTi5MKDar8PBHRazXsornDv1rayWK88ztjrkjn34Aot9vVKGgVwhGmP6UxWT4KJ2QH6",
  "key4": "4JmmyKxzL8pyC63Y3CEZwLvyvSpmV1fgc5n8na4A5XU5sPJBmvGP3vJ7UzgbUFYuoANkAK52gvVCL4uaaVaXzwgQ",
  "key5": "xfTDPhzz7giGNpEa8sdjoDomKe8zWrQ3WfPRpa8JwoYkDv8A4UzXeeFzjFnWJVyQYMxDrrbgVNDJBeSfbUtMkx7",
  "key6": "22RFzLsjvGBghAP6nhArE52ezjgeKPnoUnsbuRHRov78wj6iKos1iXFXyJ1yZZ8DysNPZCM5w5ASBgCXqoibT8jR",
  "key7": "gE4unySGV6nyu1QgsH83TzT3M22Xv561mBcKCF1U1n2vQbwzDiKu8V73JAXoS1RX9wfbDfHzryThbYtKkCryK4f",
  "key8": "BNBuuD6cFW29Z9YkbuQaMPTjzhtYmjq4ytQ1Xp4DRuuwSo6tk7CdKBVLDFey2W45mDJgunAB9LeG2sJFNfSsLm2",
  "key9": "2bnRtufYrpWo4iKmqWdf1YWdJT2xzvxTTFDFZEcurC9waRfUHt6sNeqWRjZRY4gQjAcVHSsCMEJSCjB3ZYowEDs9",
  "key10": "4viiAwGDCnrMZXfmQ9xVZJKQjSKUjyhp5evmMny3nYdbcVfWvz2442Pd8RDqgSaGmi5fUCNJrWDggW1jV3FLnZRR",
  "key11": "5NxuctiMEk99zmg8hg1DqtgYknDZW8CMXjnYaTtxnnr9SxkmEmMPT2RaCApuJpFyMdny4FA4jiS645vHw4PXSkL4",
  "key12": "7JBJKqBWUKoTmEpVtDEpPjqvTsmZiRJAzDmrErfyNHpv9PoAguvPoV39S7n39kjomwegnhqgrKgGCH4YLriKotj",
  "key13": "2Y4wpv2AivsU9b5aZAsXp8KL5wRhzqGRKxX2DTkAX7YB1xdTz62T3phwzDWj7NvsPuGga39s5KfeXjYQy5GiSwpQ",
  "key14": "5gNqQHXneb18XZBtLgvTu8B8bQABStJNy2UioNActf96aBSy4BDt8Mak17ciq5x5dkVF7Q6aL6GRMTr6YuxHw8jW",
  "key15": "37sm63JtDFomuEhozjhqitK1ny55Hw4d7UNV19DNhiUUfKjC45haSx95UHmC5Hm17gnqZJrLjQ1QN2NNRKioL3TP",
  "key16": "27vE5wkK6MVYW3w4EPXQJy6UuXDiwRMVQ2Uaka6W7haoagNe323DYee85gFPD8qLq4M8EbynUkVm1MiUWXH61D1L",
  "key17": "2LLnYMfWfJWvX3VkMJ2bVGDMf66EBC45TbW8bxa8J2E3Ff5sJXYcQVhHcrCUYHfKo47zCt1rterKDdrs2SSBkkGm",
  "key18": "3Z8kmfRpbrdojZ2wQuGkv6HGg62BPRz3TPn2zoGDhJmyxYYoULMPwGvoKNYDH6DEwQyvgnUxcvbrzfHwKbZWsS3L",
  "key19": "4sLqRADpXD1yunsPUFxS2jV3Ye5XcJDUprzQ5R2gWfwLjVCRmny9Q1UjbRjNCsXYmdWWGURLf8PXQzN9Qu8mc2Du",
  "key20": "2zDsdCiX7GpP2rCaCJw4SiGqQgJoJgXtaaAoZHFgd2gv7dXFuicxsPQ87V6CPu9TvZL1YWFC3L1y8BATZ16Xdiz7",
  "key21": "5xLcDVQK4UDhtcF4xAmUr6GumwqfcMFsXNCJD2PKDH5hVGLqpSHsxTwSzMMtiW9C7L9g5nNK8GyG5fvwqgN4rWwv",
  "key22": "wWFByuxt7zeA4Eg8QD4Am3bb1fDRKxsAUpLaLawhJDxHPFxTfqTJTsAQYjqswbbjeGEmT3yYGS47kvpiEPPt2YA",
  "key23": "4joRZfUrbefmX4JqvAEqw5QUPyuo8LqnbM2P1CVhuFkCqA9C89WE37M9QLbgxrEANVYXB1fnNptbPvdHzZKgHsze",
  "key24": "2hMi9GzDdm8DX89Sxpq99G9ekoXNPJNuMZ3zHX5RUJSx5n59VDmfJG8mZhV2eT9xjaMiGGin7f8euJstFiRcVRWf",
  "key25": "nkQ7s2g9183RPQHQVvF488TAQzuCgHsdkbEVDANH9PF3pp2fgu9jwGhtPMKULe44usXr5D329xu5TZiLFP67Jma",
  "key26": "4sxzfUHbUuRqFtf1dwS6yYwM6sViiDaQ3PnyKG3WbzbqwTc2ZfR8sV4hwGJ2YWngdmVu1sXf7s1kzyjZiiq3jxt1",
  "key27": "2rM3WNJ6TN86MfqtL1tAEWmN4QFMw96M31xwx11YKWY3QovjWG7hD5Zdv7Y2xY8JDassMEjenNqeqVTHb7n8DqWd",
  "key28": "2D2uoc24KmpXx1JsdcDCEcM7zvWBJ2bRt9rk7V7BDqNgyayqASyLQWAHJ2iWmPV4feBYgbZt17jqoaMvtXqrNriE",
  "key29": "4bhXTWfPUABtnj8nTFK5dViR6mhAJFctzh17eZPAAquwF8ffQqSzXgLirHXLrHyD39fbM1fxrit7EMZGifwFnyUS",
  "key30": "2n14DtF4KUcVrcCvC9cAzhZWv3bVLPhS95nNUtjRh8n5C4Ba9C5YCJHN8ifRJp7iT97im2GwsWudE7FbEfGTWahM",
  "key31": "2kf5YyqJkzCATLuJ36P9fuHcmkDRoUqdL3awebW8Dw5tGugLvUXVr9hTym8kgnzU4UizBeZzBAvQYTaBP4scyHvj",
  "key32": "65AnskXK3FGbThJEeg5h7HriqMaU3gTaPnNhEBqwpbUKiZr2rRueGn7tdAHzTh43VsTzrwSGp3Zth6uReFymH3t7",
  "key33": "GHRvmKsr3dYVSwVhbaALqGHPpcBdssTbQ4ndGtnoPhx5d8RWNBVsTwCryXkkizPoUG8qH4xjownVPUYf5en36Cy",
  "key34": "4fxCkQaG2VSnJVnXtJqZTNt1zZo7V28bmTvzccdSPTAKqNCcjdYdrfBx2KSh2yPH6rCEvVgQKidnGpR7nt3wF8R7"
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
