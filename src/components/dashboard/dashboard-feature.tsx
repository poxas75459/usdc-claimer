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
    "3fF9YoTD62J65c3qtE3UP2sUNoizyUWU1nUZdK3L9AT7qkGyJthVeY6mRSA5i5ZZuDk1VL942MAW688NZQ1LDWbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K1iK2XVBAzq63E3r4Y3qhZ6f2q1N2Gtydv7KKZmnhZkwG5ZcnzcfG1JUEcN6N5M98jjy8vgp16z8iJuYsMGapsL",
  "key1": "2erfXDPJyGeN8E1Hr6mgmocbUdLYpAZE4U564Jc1W536UVaFcQn2FgEXxyjakXvZT3LpHm7LW8iTrqj3bHFinMyC",
  "key2": "46Ha9XeRmKGEuDbow4NyGXWPiprJbnjeQViGWvRMw6Wz5Ry11B5QKiQr5piaQLRneU9n9srDHXneDsyXCRm5XWHu",
  "key3": "4Leu8yw9fB1U3W4HGzd5hkQms39Umz6Hz9fXSqPQacr9WGGphu2rszNmi8UgZhhJ26oF2iP2yHARuZ4F2q9yz5fd",
  "key4": "21kV2KQm8nNyNob45fUvDH6BL5PJS22HkhhLJR626XjQVjjAM72EqB8GdrGgk84CKhYPeALq2Hbdy9YjQdsQjXzc",
  "key5": "31xVEH2bB9AbqfPmbidr2bVrmQKUKjkQFZSX1S9f4mKU6xJABAcneQ6gFq17efpe1dHZkMyceSZDCG5FtS2M42Zv",
  "key6": "2zgqLV2vQCQq5AVfaQmFhadc2kKSHVqFcP92N3mLRbuw2bbqzcrZK7fh8yqpRtMHzFM3ftBkQGppiEQCobdWkYg2",
  "key7": "37TgUXA5V84YEYyt2a4pqcc1pisz4tqeGfY9VsZqnu4aLWNAfPDgHFGWqjX1raXrzdqSGzh4Voczkprj7m5FkA2D",
  "key8": "5tpLzXC8DjaXmKtK6rzxdyndAEfgYbpNKei9LQ324ZEPWxqcihnNvFoeZ74BLPsMbU9WizFgaL4JryavmhVTezzG",
  "key9": "2nDgKYi4c4Q3jKLtwEBe4QcLhxuV3553WtH112GgBkRbuiHNw5CndhqWiqZumx4JYk7rLxw2KCHq1cbe63iMBrHx",
  "key10": "2gVFBv7LA79HTuiXUUK6WeVicGoeeUnGAyhSsfYUQnPW66qrmAJhR1bLv35j1PnnVgkAE4EqaDjuQztfZ32uaBvp",
  "key11": "3wrc4Sc8ZwhdWHXC7qpirmSd4NmdnYQSKAHorsaTkCj2GhqdtXkQJJUc2ddt2oKCju3XfNP2mzbBygq2g9AWA96X",
  "key12": "5JVVWXWBGc1S9w8f7ptFUtmJQDNs29Hoo9qVFjsMc1hVfdcUwVwHJd8As675qW9omVKL4h9VCfqMPEc3t9C9ighP",
  "key13": "25AbQuqkZgCE8d5CUXMPxaRDwNiZkEWtSewjCynMCqbyd4R8q6pcb2VK8GiEUKBSya8NZAER2TKAAifv27eEQcWT",
  "key14": "3f5WJNq2EjNB4mxrjGesVHHcco9vdCqFsnfaSyr9WscbnJBjtT9rbfYbEEi2sDf7gPzpnE8fbKBUZDwhYxGEHsF9",
  "key15": "5x8sHYoFn4dYPU53Y9UGcRMUTwaXkfabx6gGBRvox7jgP4Z1DNWcERbWjZwMt3yWKGwBupLWZxo6qFwzT2HHAbLP",
  "key16": "2fNHRdvzb689LByVxfbNx9w6fAGsqSnYrHjvbiLBdyAEUqL1cSqrQnVxykVRBnRcgVPukj235J3xBjLNEgK4JuwT",
  "key17": "5Pgzrc52JYEUk1NPP14ousjdpfsNQ5Jxxj7tJ3m63Jj4ZaFNV9kRQzKhuJF3hwGJU9SJ2xXGSR4q8sxvBNp2ACqZ",
  "key18": "ZSt9Uvyfa9hUZQxj1MJ1KqMTGTMLyQMkjtBGGsZQTESQiQFqdHn54VjeC4zKGvU1rZ5vekNvPPBaqAAZqi6xH5b",
  "key19": "52njxueoEre2T1gErX8HR5azipDxuMHN54EfJ3c2frWYrc3hLjzD9iUCjpRZd9tCiwuMnm5E9y2jx8ucpAtGGeew",
  "key20": "4ZfA1NAgAYNc1UZQhBRDMmrSaSpNvMZh1udWVE5xQZu4o9cVwedw7oBQbZJ8MFChHjFkrXMKFENTmNi9Zagu1Enp",
  "key21": "4U7TLRL5rYLRtv74apsWRpC83TUWvbX2XcV97qjSZYHxUcyf9pBmHw41XzzKgV4Z6VkRVEFtLVhY7hmeja63E9rN",
  "key22": "4ry1vgqdsRymzPqgnfQP7H9ygZ9zxebQDSJ4YxdxcRmxShRphepY9Ejmj9gjBFx7vP8PsCVdYdHMwBy6KEH9FCMG",
  "key23": "5NyXHM9FGKR1eBTCenCNqpnwUKyUTAN1yGzJzvWwETijUnznZYx5Ho8cznK5JwL3Ff3tBr4CDwht6H1xVhQbkGpV",
  "key24": "TZoLBqDM7Bp7aUjyXLXZpUruZbzPrZLhCMdGvAE5nxHApXzFTPiwdNKGAthxAcnRfJUDAmZyhhnrArer1c4HQok",
  "key25": "3m4Ur5objACTXwLe37v95sqRYwRQTeHHJuDhatguRHN6eLE8a9kcvmFRuA7UfGQx7bbANaXUtc4wmZHw2oaJbsHC",
  "key26": "36BWSDdszgb7EfVXHJudz9WBMsJFYJoAix57rp6NXrDugWHHKm9w1AogiXKZzuA12HxMj1wcUpDkAA4k3zfMAtvj",
  "key27": "5EquNUwwUzmgjM6jZjXpUDdKG4PqDh66b1Pwxt6FmZNKZPipmWxqHZGyngHqsujRKtVU99Yc2bqCsXpFEzRiodYg",
  "key28": "3JizdBFEm7bebowWDKNUXPHoLmfiSxmK9R9tojL2Wp3V6HKj1qURwQ8NEbTNyKgTbJ2o1H2jukYHxEmmAVoJfeK5",
  "key29": "35DXJKpzkykwuHRFLZfqQhWzgm1JTvdwMXtMQtGZSfFVTvyvSLUMaQ494LSbYhYMoPHsXxho25eV5fNqUJ3LxrGX",
  "key30": "5JgVpjQ3ivSnidPz3HHZvYUEMQVWYWbSPePPq4nPFTzXeRLWAP1527Gjscvi1ESvbaKDUqqpitKmz22cVtd13MQd",
  "key31": "5KCWLhf9zjqxWJnYMW6j5KZahwLDj3AZt8vnzSKDv6BJZnNdEHgnArvBEAkZj38weZmTD8wrwgBcd54boeER5wXW",
  "key32": "4JwfeZeB94ctonfxmGDvWpK9P3JogSqB5ijv22fNqvuDn67EVbCds8sYMxoSbkgdtyEBCbBPZtTp2NKFDNKYrH6q",
  "key33": "32WEtHyRE8MQAQGoRapiQgYPVM4ee8pxdvkAzkY5zjitLrxrDFQTwpnZbusvnFotv9E9oNLKUV9xfGt5zE41699q",
  "key34": "3AcFPVW4jnhnaXdmSJyTd2YSeBa7zHD1qrCCSzRhw9d9Vw2Xswzby9fwMAKm17cUSBaqEmeZyj3NERvMKpdyQ2Hu",
  "key35": "2Cb73YNHHMJQSwLSB1vXtSTW5Wqrmtw37xvbHAWaLoGTpg17jQiRkKWXYhUdEXR9f1MXuqCc36hernqZEs1Ytpmc",
  "key36": "2HJEvsbgBotuw6HZioGoQah8uJy5ZZJrjBmYtFrYFE8baqCnq2Zsqa9VdEStvs9tCPLcV6v5Zt9NGfveWbs53YRz",
  "key37": "3AbcdBkGCCNpz1tq9FzbWL9GY2V45qbLVQhUtfYNbfbL6mvrTzPVPHSv1CB5pPGMdNKXeBfZMumkQbRsNapLSKMW",
  "key38": "371SfDp1a1wFkxtmFh9RLGA6rBtxySYGsugpmSZVQ9cirjvmDXjZfdvvmHvFEMheM5gxpiwmQeSdnSZrB8m1sFo7",
  "key39": "2yYLHoAqMDn2mWWhGxYN9uj16U8xfyFo3cC7uwqSKZ4nk4HiCXcf1EqRn8eWJZLwhQRiUyZuq8NQeCAQLDvJz7YJ",
  "key40": "2qA4uEYqt3odgfHMAuZGSVzy7PhzZnWXpF1AXMbZkPsChcJRiTYQ2So6MK7G8CdYvLfMLp9hUQUP8Eo2ZNU1h8BB",
  "key41": "2wYFxQ1k1XEi99FMiNko7E8z5rRp7VXiCUtwADzXJ8W1USxz8qQp5ci9RxQJicRhrzdCVbxAdpVn2LQWBaPzXh7g",
  "key42": "4sob5HUBaVnbyBhHivsPEmqGjZtRNn2mMBmgMGHxMxpMa4PKDZk3S5vFyMwmF6JBDtdENZJdqSJwpKvTyjUDB6yE",
  "key43": "65Lk4dmj8Ph3t5kWNGCX4zu4HApAAxsJEvKNioUqYXzfhWaXn494q2SqetqdHJBVdiyBC3mmZjzGZN8Pu4iHdoT5",
  "key44": "54Km76U6Z32xhmuGjwHu73Sf1yfSAByMxEvNACg1KWArVk2CrJuX4n6naxGgD6WQ2KznimMdaxkMA1qL6BkkGzLQ"
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
