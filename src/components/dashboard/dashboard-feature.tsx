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
    "2xrMF1yrRwvT8BUj88VojjqXKoyFULezCjeaeAnEC6RMAFvu2Ewp7L2zLV5PUJBfv7rSDtCcFnxRbzSE7k1XpDyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d9M4Cf1C9J3mxDvfxSY3PjqUrDRrEzJ34FtjcMzSHZJfqJWhgLMw9NN2HprM16XD6WPszrSAWWBBVw2cAtYZ4km",
  "key1": "61LnZbJtkLRMGwsJg4CgEDdPexnTD9na1U3L1SBzcahudZD5q5DwvryVkrVULZjVwBeQA5pCCZkr3Cfa9eA7jbS4",
  "key2": "389xeH85mxXshartT3vkCCXJwWbv1EAvhLdGN7rn8BuqKo3iqGKnjLFUu4qfn5zVVhgrvVWops1ut6VXE2ATZjiR",
  "key3": "3eHAYQK2kdAb9QA4oRUi4rCQhBY9Eh38jhdBLSUtLvurR6pNJFXGR1dDUeYFoFF1ruyDts5b21BYGjBdrHHGVSm5",
  "key4": "WftKrTT8Zw5M5kGPR64J9YojXZNmdAoHUPk4SGSVHfABrMKvLTVEKhaWjqxcZHWWE9ehXX2WUZc5u9X4MkRoWWQ",
  "key5": "4VvRdq5khNPtL4DMrCCaMLmrvoktee67AQUrhi5ShT383oSmGvpyxWdJmynuhqKzdo4RUF4XvdJer8x55aceriQb",
  "key6": "3NyRaiZ9kbBn51ZEcKUMg6sE6LK42wVnTMYQ58uZ8T5vwUfQ6VVRwTEsBc7TSxzhqsTxWfEpEfs2EyZRuzBcdarB",
  "key7": "5yfxdE1dE6TCGRsCgHj7z4tXHNPWqVmSM3roGb1ATpoztrZpg9NwHQFeKxGjAKk4iJHiJKiovq7E9E2wFayRs2fA",
  "key8": "31YxaQTatUr5BEEdcb7as9x1gUHuu78osL9LFioytXxtyxCmVfXwkvdujT8PX1uydm7oWSWErxGD1UDi9AcLdDPB",
  "key9": "hnGNfVorF5FqDz75GR3sNbzHuvRqdCEdZTCUB6q7Z7GWcMyiJ5wDqSAVu1dyCwD31wJWXUNE7BkpVk5qHr9B3rv",
  "key10": "2xrohWuHNY8R5QuL3qVprv3ETUMxJojkRekX7WHPJtKmpujpELTb59URoPdTECpmHxzfu3F6DjSt8NSwvBpGUS18",
  "key11": "GeaS4oK1shSsJF45yNu6tZrqBu7RQyS6KgL9SWXSAs8vtTZGuHwkmPBsGDEByiNYNxsUyAgFGt5JcuXMJDRqXtg",
  "key12": "GVUzbNo4hXSfr1NWhanP8AZAtG2JZPF5d5w3xAPKnGkTY7ufDD5GnP5JwgjYdFLRos2NRC47C7ybcWdmwBN1Fuy",
  "key13": "5tp8yV9YJoEEKi5E9iH9dKwC8aMVGGooyXbWHq7tyw2KZipgStd28YSBU7dnzi9WuJ2F7QwuLEd7MiS6ygZ2xy2n",
  "key14": "2Wk9G2bNjSHZa1GSrARz794NsEgoyAFDHM3e5jhbVZLa2tP9VpTrvJX48BXLVnuckC9Mds8p3UpF59Nzd3a7Nx9s",
  "key15": "2t3J176mRZsvBCqU1YgB9Bx4Lex9Y5XzYyFEc92htULbmvmtJUfaaF2jcygeqFfLzLge7uTNmdeEN9jHo3npUixe",
  "key16": "4saMGuvNtg3eZzd42hWrJh7JCrLNBZ5uyNbzQVxo4yW7Sn5YYcrkcPjtfYQcS3aPwqZfAtFXEXNVckwz8eD5SP7v",
  "key17": "2jaJ7w85wVJiLdsQFARpiE41Ah16d2cTqt2v2331p7T55cxaLnAVW5K3ebkgcnh4tsyjRNz1xVTdR8smiC4dEPm3",
  "key18": "4ZZbvL3ezjQKidGDG1d27paCyUsofi4zcTd8tcDCwDZBMurbR8ZzkZHEz1qjXERmkC7uy2h4RkpzUctx2mF3xbyF",
  "key19": "3axc3yTz9BpZMzHsyZkGP8fxqaRsXamVvEs7RLaLHSRWny5Ps9K6EPx4TFjV8ZRNZE1hhupgEMuu7786sMriS2wY",
  "key20": "2fFsSiEtzPHJzFxZjqrsrxuF41pfKfCfF41PfVKGzsixXgmrJXRHdHpLsxiXThc47bjYXZBvarT5jF4AWvS4FNEv",
  "key21": "4XBYoBhDyBpdCtHBZWZZEL6RFk9CYGgvAm7srKCsq6GRK6g9JJ3CiNaZStvvQ5MjoKa1KBpL5SAcSKyNafM2EUft",
  "key22": "5FFL3Cggj2JGVhEZ4tEBF8UBLVE746F1W58uwNFQdKL4KASDuJ1hQgnLVvUBxihpkFK6NsJ9DgoHm74wRJrZMZoz",
  "key23": "3AmHUByQLgbj1YLaNcqx4KkuHZfjUH2R8a6diAKNgkQAZFg3wPsZr6rmvE5VeVB71bxd1KJMvs5mRgqxnd3M6sav",
  "key24": "39M8vYZC1bZdm7jEkGbdeMzNbXU95BRan4YJyuLANxjxYg2w2KzQ3j3mGJPjqSrm8oRv86XgCVwqfH39cAUMytgd",
  "key25": "5LcTxuKCrha7RwhrCxTV69bcPKhoKjVxFgUGUgyFvD4zbFzWvbwXFwb3GBU7UkBfZFTjuFW2YRComYreHC8bgsGY",
  "key26": "32Q45ZjVb5PyHGuYpJZh4CycVjwJFKUXnaNnpKw8y1gy8y6gpThKedEihaBCZi6ze4o8xNecoME1dvzhBmUy46CP",
  "key27": "V7ozBRyKSKkWH9aDSotoZnertKCKR9soj7fhEDVCRczibb6sxLLJv5w5hFriPWFnrmLCEv279yuGBM7MgPhoHSH",
  "key28": "2aTy9xP5LE6zLSfx3bWuicBzpAjgFYL9q5VvHwnwhoeMqKvigRzaUZd3HxShJEaVeGcfWCHdwfSg5tRpY6wY3uRH",
  "key29": "2AS4U2ptAm3rjiq9kxC97SmTpNmttRw3xXugzK4zFZfWN8pqmH2DYE7G6vHifsBowjsaQGf8WvTSJxARwcccgu86",
  "key30": "4SQaGDgtkDadmHVHiWzKEkyeA5MHi4h83u8TCZUxMV7DYzT8VtxmUpEFAktRf5gXzYwD8YEejyDjU7NqELqTUdx5",
  "key31": "z9t81Z1umzJFXduRvQXLedkkKs6VDadjNwAuVL5zV6W7Cb88iG9iVcy8QeZCpNP3eMkoyEcD7KwMp8HvFbxv7mJ",
  "key32": "3YqghbvScWhSJDDws8BJpm93yjcKyTv22Hk8jeSJo5MdhvpdvaFtJ7oWsX6jCjGLRCgcomBEfqDXvL6MpLYarfQk",
  "key33": "53bwQQBit3546XTW2UVP2YtprFXJfV6yLEw8SwChgqs2id1rMimXJK5mYB3jXSoqrwn4764Pk5TKVoWaFKX4FqF",
  "key34": "4wS8M4mmZaisUPULjB9dZKxrzMePvwoqxk6WsJn68aRUSBPckA9wuKgS2UPqoiTxbCPBz4h841WNt9gnGqXTcagr",
  "key35": "MazQgMzmXNxZx8ZFheGEW1jULEWW58nYU9cGv1teeS9nwNPYMntrDGYxGgAEYVoBzCpfdXoU29eCk4bDu9ot1Q2",
  "key36": "3nZmRNVdKWqCz2SqsmtMa3vcJw2j4rBCq6FXPJWhZP8tjtLfVVMuNwjkr8XsDHoMKDyCwoH7yHT8XncjUGmzW2EW",
  "key37": "5FvHdw84W3H87cFoJ4t7VQF19iZdu1x6QWfdd6p5dw8vdwnweViHgwJQ6175SesmFqtMVhCDuSXPtYV1V94NuLb9",
  "key38": "4gEpdVVfHaPZZeugqyRRhSdLd1aSTSELpLUt2bXHLEj8SyuW1WUYRH6fhkMbWujXjvJx4c4E43wb1Uvm1ixbAX1r",
  "key39": "JVLeNJYTJ7jBYfKULNgZHLGvbeHH3VFpYp6FiLm1U9PGktf5ccJMU1gp4v7EoKRRGDfw4EDVZUSV3mYuewoakDP",
  "key40": "63p5xfaztKyHnX9GBheakQ4Gn9jkhMjRL8adWphrunWa47FpYAARLdzVYNUXknA86Nz3XnSzMpAVXYEDUmapr6tZ",
  "key41": "2VRt5ajiJu9msDHJfGSi7J5sjE9JiGw17Va8sRGh8YkGHc5pVQN4XtAbohC6YjFP3uTKnBbsPyHrfjDNGBf1VyXP",
  "key42": "uHhtMcTqzm4XipRjUhE2g9niGnAc64aA23d2K4b2QsRXm6WjrPJxxtAYCYtsqE4YNmz44WJfN4t54uUyHFrkdTq",
  "key43": "5LHt6aFSUWvbUXm8tYDaXviCVQpXkG64XoELEpUvqk8gkCG1YrW8FPfJ4vegahobaCbL72Ks54bEivm4xGth1D45",
  "key44": "51Lw7srefA9JE5DW8NjA23mZoBVkpWL2zHhMYLE7t3qAQCiVR4GLuxfiqWKy6GPBS89zYHMAgVxVfYEdfQBGBoNZ"
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
