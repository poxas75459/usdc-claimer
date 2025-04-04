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
    "24sBuSGhmSmuyCFbxEer8Ni6wpkRHbMKvm5QZQDNkofyt2rrVgFp9u4HHtc4m4RFtiCtE8v1w7oWGnxWPcxKhXzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zP9k4Y6BM3rYtuQdSq45ateU6YFcPS7K9XFwqk28YFH5H3GQ6ePcBWAb7btZ1qYCFdxCbq1zmL4CtVqkdm6rRyQ",
  "key1": "4AJW7CJTfM6kjqMiQTFyNJ8qZa1dhGZmb5BoNEJzfHqU5P5uZ1bYcNd4ex9XSNbPrzuB7LjGpVtpadyLmQdvAhUF",
  "key2": "3hBbTJyAmttxLHeATNS1wQX5CgqPJQS6hiVL75FqcCf21KawPm1BGK3cdcMjZpqvkWZ1xkM2416GbAAfTdjE9C9V",
  "key3": "2JmU8K93zVi78c6dnjyWzwA1j5MSzKey1VLqYQrgumCxmTiBNx9Qw9n2rskXjpFU1gwMZCfPwmDQCuNoM5VjCnWz",
  "key4": "Ktse5kaVt26YQi6EjtCr8y1M8nyXR4ULjTCNrNs6spcCCmvY6Qnw7tjDQ2qYk6od7CEwFQotWhRdDqmZAY6q7Pb",
  "key5": "5pqATQeC3fVGGdSBuL8tq4wXr4c19QU8zn8nrUHGgSAgMsqrmMR3XizvyyQTGLCQtPd8566oUEYwFkhfpYpkxt1m",
  "key6": "4wK4ZGCH1oCvNUKo2GBjEkSyUC2A4xSJW37qyzejYZnUVbavZa9fXM4HV2j6co6KZXh6hvLXPSFUimxtHB5ZTQCK",
  "key7": "3CCfS58iwWdbWU2DUhha7ox2hm3CHZJaKvhpRyRh14FS9B6Lhjm8YAFmhowyQHnosMMLD7ExGVFVv8mWrWkkKK8S",
  "key8": "4p2HYURzVfVsT2NsdQF9Z7ByQh6W6LmNAWgPbQXSsqHFZ4hB1Z68XRsBWLe15LAuDovoLLBWEFGBTBgCXq9bpVYQ",
  "key9": "22uXnE6Z7oGuowFMZnbbskYwod1B1YRthq6HznXHwtJyjHhRT8j7cZv5muvWak8rhZUbE6B4ZYv4Q6Ng3qRkPBSP",
  "key10": "2BsvaEc7rqYAi2K7hPLj8L9TRygxQuvxNLbDkkWvYiJcdZkm5ZRxF3nnZ2g4myp3uCGUhpMUCLzWbfeCDFahxKHr",
  "key11": "K29oM1GSfs1Ktqgn2YTWk5f8t9C8rUpsUZ3DuoXZcVQnN35AH6X9XS2Lq6V1pr6zNMbHiEAV2wVGqqfc41rDdfN",
  "key12": "4LQGkucrYkRyZGhd5ggEScwR2rikrUuRQxnYvJRc7QwHTMzLgSFTivdxNXhDadFjtHrZWZwVd9qoDnHdUtLrV7eZ",
  "key13": "3B72GcCkxkfuAGApiD2K5D4xNUTe6V6smaaELPEtT9sscQDrCjbwmgET25ULDE2gYu7PTy7qTvDVgNs3tKF19r5z",
  "key14": "4x4o8eAZXQHH7hVwdXcPz2mjYtmstEMn5vU3C7vuYjbHy2hpdh1yEVrUeQa5RBe3Ynw36FyB4tMGxxYU5Uqf7jFs",
  "key15": "4xSGziy7Aw49rjwnLYViDbkVZDkNFv58CkUSkbkmcn2cEcQoRk12WEUpYNHtPda44ZUMSJCqV3z4GGLSeK2nQBgT",
  "key16": "4MrieD6D8BgFtU5vW1XdxucrZAgZKynFxuyu3VCyxdb2R3fSRLTvRWohGEysHJHBcoyERLPZ8YSbPXaN8AKKEn9V",
  "key17": "2PwYCJHQhcikgaGLNjXCFrHNW7f9dShU7D4EcjuUJkwUQHuYsUFZaEMWudqrGq14cHQSPzQ4rgaYbCCSqM9eJuQ4",
  "key18": "3Fa1DSdA3H5mdfYccV3QsW2JXAq6Dv487ZpM3ZS2LGukDTwXC2iqCuGKJPpQVaTmPiGq9FBJiaUgzZEa9e1oZkAM",
  "key19": "4xfRAUcc6MUAMV2Hn8o8fvKUBbcdqynYhVC9mtvtwbgRk4CUmyntCRAL4snCioHyDGa6LfBFKBmNVwJFbuW3UbGb",
  "key20": "29Ha8gLAxYJDBaGa6gC4LbBg6DvbPw7GuKav4ZG9VY1pZcQ6KhWg3dtHvcwW5pFW4ndaa2GH5cShpDGYBza5fZNJ",
  "key21": "p5pZKbFtCkdBEtBV2hnKLjBRfB6g9ALv2bRJwQzr1z2nMFx2N68fNNxjX8RmYm9NSHyZGj7r6LAhWc4KtNoj63T",
  "key22": "6Bbudce9gKbgGb9Uv1n8J4sQZVykoWZtwrXw5iWviuqx1U6cXpVs5apvMnZ9tiKGYfkPGiCqTURW9PGFWD4zvbh",
  "key23": "b31xKNmMt7C1NKVUPKQ8Sc2jMHDT4NuMd162TtaYoy5QZARUKzcwghXAYjxLpwF3qyutDGG1qfkZGYSVHAxvucT",
  "key24": "6DxeLSyuW32nri9wzVXoxqimULkxkX2VnHouoJChh1NBr6MvxCgZ1x9ueVkKXDmFtxv8EwJvuhKH9PbePNZm5ka",
  "key25": "4qnLt9zRksyDyNyWHq8NKfjVpoU72NxDQKf8wjwD51nyzTBpf3T8WqWa2rpTN8bqUCXCzpUysgNPRmUBbHMK4Y5e",
  "key26": "3eWUU46x1VzFPAXPeRqucUwGwzmaMpWxveUXxRHVNTUgsVpdL52vUPB7TGGAtSTqshjAWm7YC54uPPRnH3XmMXUu",
  "key27": "3gMrE8wPTdjEQpLLtyQ9DgjJ4H5Nf5Qu1YbowscqNew5Y1o7BdZbE5aXuZsrGk8uob792y8cfpRbQGZwoBetCfGV",
  "key28": "LafFbytBFRqrPekWtnHraKHTn1q4jy4boo5NM9yaut4eoZKpnqoNhFyHkbBLKTGzaVZD3HgqkR21F4aXq2nqTHf",
  "key29": "5mvSTg7GQxMnK5XcVxEDtHyFubYtkK1aENuJEfZxDiq1rj3rEyEwqpFJPYXeFLpB8rmAQHDT1HV7M63TuZ3Uxwz9",
  "key30": "X1dsWBzAm6kfwu9YqRVGHjafRj41jZnbe2BW5BoUc4kfVm9HkcZq27SJsXhT1wumYxYBtfSpNyfVUsBWDUBLgUk",
  "key31": "RcQoV6RRWs99mgGhvA1UHDCjaug8wcTA6aN9ttNgoRs9LVe2vZygUfypVHwPVB67YAc2S6aQ9y2Ha6Xi4jv8w21",
  "key32": "4jvevNoRdnRfhVqrhXRq9tXXN3S3wc5ddezbeigXQKhM4vmyT3ZjhiDRMLe4T6v5sXPpbnVxvrw6JsYADQvfxKWG",
  "key33": "4hHfEh48xD89P3Hnt8BBgbpYEGdn2iJRiiunyDfHcZinLYUAMeBT5RWXTVd3dAWN596utKiCeDeBzC7Mm9bDHrpV",
  "key34": "5RDxVSnJxqvSj3DY8kUK6f3MZDhLBrDiPPkHxiWzebXqZQ9dRGr2UVV9EGM7o2uJvLPePzhgdbzmRRgztxt2qWgs",
  "key35": "wVQqoCS3ozfht1G3pK9sRyCHjnCVfhXPLreEuXvzmMRmx9mzGqKSB1BeG2SfpMUinbY48KKtYvDAQWdXnk2J5FD",
  "key36": "2NE597QL4uYkdhqFiDkQqBv4YFeY8635e65hJXeB6pyUkciLnaDVmaBu5DxPBMHsSeyH7eQ5nM3wZU8vHt41bbMa",
  "key37": "43ETRHRbu4yfPQX9RzpvRXu7zwC94bSbPPyJLCjPUXvd1PsivnYvpRemERGdzxoCDMgzcot34iYNRwPsPSyxXdyK",
  "key38": "ffksYW6kRzGXmbjgCLjF5gbdwuXL9oQx2kyWxtQfatiDNWThxAZbDyJ2HYSZ1AYgUpEfrgqi4f6oWN9ja2qaub3",
  "key39": "Tb5VevV4Kmf4wMnXHt9bJKQbjeBFe2jZGg3cBvsDm8FAQ7BAbT5qXWkfjUot37y9MgiWkmqtM9X8dFpHnR3sG1r",
  "key40": "5AcUcZhQihYLXC9RqDW7ZobvGy2p9dxJsMiB2z6uQKhgRteggXyHnUS3sMyNmKUmuyvHo4PopEQR3EDuZqQ4MWdk",
  "key41": "2WMW8AtxJYs7iBQj63sWcSjtjX4SHeaQDDExs3axhZcoAx5HR1QbLVJR8vPRRe89FoYX8N5ZKtRYosJot2WPfmb4",
  "key42": "3PcABHnSeS7FpvR4KAMkne3BT8GAYYNBMvqVLTVwMBcmtvapsr5LiM8u7MNdPSkEtxZ1R9SJBR32xZWvf9pxhdR5",
  "key43": "63TCMi7q6nPstTkAPdyKeiiCpkZt2d93QUfNvJ5Mj6RtyRaQ1nEsRoYSA7YGS6wvZcKm71x3CSWVt5Q2N2FT1RJN"
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
