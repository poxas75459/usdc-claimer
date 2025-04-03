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
    "5HpAaSoKAoPx16d3HoayoMXr6thfFYKe6MF51FotvYxUU5UiraRMZoSnxqMpga2XRwhWrYTEcfA5EWTkqaRsATAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ASpYBUH2YDQVAXEHxJWyDkY9i8hMpgq2WnkKmrHyJFZKk3bGBRvhZXUvDPrSrTPtXPqLtsntyTwbgyk5gqKWQaC",
  "key1": "3aK2pux7Vubho7Lqdcmb5SX4MTm3DSR5eh5xPyqkd2tRz5Ript9wX4kfvzXugQ3g9AGEzhv17Xjndpwuz25Jz8ce",
  "key2": "39R2pqiGjhoCzSwaM4A8exvtDjfbRqu2TyfmGG1GLLmR9FjNF3JpMd2wcCbWy9UrVt7jKzi3bWptyc5EDSLwbTqJ",
  "key3": "4H9bvz9ayXV1PW2iH87BdbnN3PyBYrgkKnsnv3y8SsqxeLho7rg1Jg5ocYhJy1sWP9i3ocEWm8Nb2cPj3mAoUPGQ",
  "key4": "2EiTj2EhkjzgyGdpyAnxoCaK5abgP3QmW5E6hHNAkEH1tgG2vJdG5TEdFLhQeMp7FSDhDXNffJxV6qvJpgjbE5N6",
  "key5": "455h782LnfyRR8EBKTCynWuN4ns3EZKfFW9RkSmp5PwwjSmR1RWchFAiTYwFCy3bf4bHRBiWdHZT7r568eJztmpQ",
  "key6": "4px39Y2fwgmDUtafGyRhWAAAiGugpUUb1aezNMiYwv5xhAWncs6xjVMZir1YsVeDUXYj8J1HqSVd2BCkYwY9WvkD",
  "key7": "4FMeUTsRgr3MrM9QDZ1xT9Sg1geJZvjriiuXP5R1vRtTkqeHX6YdqWyzhnJYwgrAjD1ZtDjdw1JVmEAMsBHfPQ9z",
  "key8": "2n8aPoLFLr8KWahw6SZk6bPCBuqc3SyDd2yrJqgV9PVnzRVKMXyHZVYNPFpDDnYn5SSMBbhEyGiokJEva2TAK6Xh",
  "key9": "251W2FzqaE3uP6jZrYeaeoUqoLG4nq5FVbQ3ccKN7QpQ7eotLm9jjMrJXbK7rhkkKufeZV9aUfQY8uMiDNWfTZL9",
  "key10": "n5WJnSjxT4LsruphKq1hgf2ELsiKjWmvSrMH5KxUJwkw54Lt2yt7DqFTZDK9zgJ4RBBovmJNgevMJHJFaFSWp2M",
  "key11": "3AVdpAZs9nZ9JZRAEzohHaypytsc1y4a56D7BJcY5FE8qFAsBWpyzJ5LcqGWd3bwh3zo325XnU5BjXVahJDRwh4b",
  "key12": "LsJY3gSfk4jz3DgRDhaRYRHY5UkPYCiKLjiTdYj8ybPMGvSX1aqJj87vgA5ZEUFEnmF1JgxpHTrrW9n1yer2VWD",
  "key13": "45u9Fukq7TuF8doAZBmU97nPmf5VC4JGKharzSASjKyYdpVYmHW171srwCRLhxERhrg2ejMMf11vUdB4XZXkYT5V",
  "key14": "62Dr2b11kcZjrxuYsgj9ZiBMbNq7JoiRbDPLX6bdxo5uAr9rG3GniGusZSmAB6asRGHsL1L7d4dWQqZ7FqAepSRS",
  "key15": "5xQGaN9Kxcaxdn3XVUiyMZXAHLa5ue5kpaWw8RwYe27pmoDvKmgigSWNcKvhsh7TizVKQK6YPjYmcUdtXgf2qBSm",
  "key16": "58cGD2HNuk6tDcRbYbeg4Vjm6Ymb6bC2gonF7H8yNtDwoybgYZpxPvwfuwcdySpmZDRbgYQ55csGkaXfKCyDhndH",
  "key17": "ZvhbHKD6ryqTfiJMaaMDw1oxujN3fh61ubyiDFUq2ZXSzeWqfidy4Bdjui2u7y6ysMMjsm5cmKhDSsfWngTPSG7",
  "key18": "2uMZN8wieKiBmCeEacxvrJLqh8wTHFsqjv2CHcGUieEt579pACT3Gj5MqqZtPyCgwHg4F8HTSn5EQo8UxrMScDdt",
  "key19": "2D7tYzaWn4FCST8WGza11wnajYHEKLCDgtC4Ty4Jg8moWXtffNVLNY4Kfq5EweBWEXoeaWjN7RDdgbc3NvAg7HRu",
  "key20": "bypw8Eg6R37vQ4HmFpruMfvTgvo7JvSEsXZiNt8Yq6E6CKTx1Upodt2VKNS9nBz4AvnGmzjy549T6sqLNBVaLcU",
  "key21": "xZRsBWXm9T2zBFo9CwKpxxccSRXPV3dQiKH3U7Mie7oNTAz4Bz2SAZnyvw27YGt6vUq2jk3P1h6w6DTGfPVgBx1",
  "key22": "4heBLrzPHbfn7RvxaUBTNJKFUEs8zwfak3rZrZ5Fz6eEj69hDDQhQo3qN8MMNqVZBE68kZ2u9EFfWq8y3SeMBX5P",
  "key23": "2Jwp3Q1gnZRYAKvCxSVFzAikdN3RKYMXT4G6GmQRzKv1bhddBvd7PgrbWNn23Rnidqr7QAQ4Eo5Z9A6iAfpsJLPc",
  "key24": "7nidp4RvkbkVcoGShdkDP97xsodDjY5FhXPcVaCBk6jH8BpdPNZbxqEvciMoJfwc3qFVHQQj425dvLLkcrFaj8d",
  "key25": "WBbLRmyTqCoUwop7r4msvGwmA2aebhdy6pr6E37FVwqaB8psATgjovXoECkXzP3bE2hf1H4nwTPYT9ZGRFncPTt",
  "key26": "3JnSiHMWbefua6fHQxn6WrBvKEwxeCVkQo4dJw7ru98gtXLo6LB7jitAAkD3xArwr2XaHwxqbovA5MgRGXEvdTsw",
  "key27": "3oY5Y5u77p9gQAVfsYbLGV9xWT59pULJFdp77Vt3TDCYY4paVNSQK26oR8pMAU5mC545CHUfySHJVmmxNE2nnFX8",
  "key28": "3p5marUKLpnjPytHFU2stoquWpSiYbrbLDAzf3yopn9LwmLTTHVxLvRBqQyQKWVgxm7XriTv31AR1dA6ywgLx7Hw",
  "key29": "4yCAXsD3Z4n7CvtmSaU2JhWruCKFpattcLrFyFMbXiNrnFQmteiEC4HETXhgRGxuReNCMwWGtd1yJnGY4jNR1RwP",
  "key30": "5b2Wf1t5VRjAE4UxBYveitdYhf8y3GsHwj8JoBm972XGSemAcrdDGJqh4o6Q1b2LdCSAMsdDhjPoLFzQtaSd6vyj",
  "key31": "e2G6MhMnwQKmEAWHjbbaxkPDqfQd54SdS2fu8LTKh2wRiACxHaSgDhUvtv5gXJnkYraC1D4iybQZqM5G6gQfk5a",
  "key32": "3JQ7Mx1uPeZ5XdMYEEUQoHbpfP2aURc4zwFu6GnHZJENEj7hAW971UC4ofZzn9poBLpfPkGNMu7eHtUCHSLYmS1A",
  "key33": "5FGLqALQAkMHz9wMsANaUspUnqhXXsoRfALT8XjQPmWN8uQnEbsRmq3umbMLHAsRcuvgy6cicDyhU5TvSadqgbkb",
  "key34": "2iPvU3yRPtaghKnUqiomaRtq8Z111xXbtvEyTMjo6vMqLtxQ7WHKUjyaXBkufSfs4hwBvwUYTMvarkwvjEFmsMX4",
  "key35": "3x6Bfij2wMtAKTfgkhAxQZMCQpoiiGJoJvpS9WytkRVNWrU3sSQwbrYkaw4EqNCAPnWtUVUTXQmteqztae7XgW4n",
  "key36": "21kyLLDoMKex3drDMn2QspKSroJJxygf2uqkEQxQEDqMuqNp1cSpX6S9e8ocg16Pu6LbSN7AqSoyyfRvswBEXyMz"
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
