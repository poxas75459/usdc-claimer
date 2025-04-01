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
    "4Tz47c2bc1zZ17341yD8N95nX71Zee2v716zW7xxhq4eWoyUAQPBBXCHbtwAiRmxJXjMTBtKYoXcP4CzUjeSsVp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VrW8e7C8TjCeAKfTEy1u4vkBLeniSnu4Sh2bbiSdbTNZKtCLHR362X29yVzXChDtGyz94m9BaQB7D4DgFAAVhxY",
  "key1": "2bDNyUVjyKh4bzDJtm61LcLuwLRJ9znjmVJqUhfH5zqDcqPbHEXRrM8tZAm2LtwCchqbKCzcHuq6YPuPUFYMVuTR",
  "key2": "cyRcJH4R1NEvmLq95PmzsdtuRjQWHuW4hfNQ2epgeb6QSZVrKBq9y2UdSRMyPZ4GD7gEJ3awYxcPc4RAuo6NQdk",
  "key3": "5uAybLqC8AbzvPENkV3nm7XmQTKVEkk5K2QMCukq2maT6xqjaHSabZjtHLcn2XkrjtAD1CH5PoYqJpw2MK5s5Gao",
  "key4": "2jVEFCyEBMTSxrxSfPPvXYsWHu82ytUqu2m4e1qLrmxzNU6Pzu9EJ19TYeS6KvChVJpp7Q2WnQ8kELY5N4rKSYLo",
  "key5": "3mDXr19MzQDJLnSgcd1MTm6T6Xf29mFHWkAo81KsgPaXLExwaXbJB6kPrhg5ohpgqdtucSeiEbV2ie2upjTUFCaV",
  "key6": "58jtij88AR8xwSyjJgjXU8KDmfwW1spSHqkGsGhWA7Zp6Q4NkSgkgzKas4QKsX5PZZhKv4neBLdvsJicwZ5pCfzr",
  "key7": "4zGDUsKgnLJDhisPRMaLvpmG7twwiDmqjS1ADVkZicZugmpq4VDmqejYT1bJLTgCCsQGDDiU13ubPK94f99XCPR",
  "key8": "wecQyX98uqZEWaLQD8PJV9h5MWMQDTZfb59tNjyh1k9qB33dGXNAB7dY23UCVQznzgwBKUmBw26Xu8UJGQfzjFX",
  "key9": "3HBo67Wrvjsjv629a7c35Jp6u84HD81x6EFJiqRnhYN8XHSPZHwkVgx1yxzPXngr8bx2gXHvSrr1SVhp9ArzP9NF",
  "key10": "HbWS14orQonjtikcGRdHhHNKzXz3u2DAyLkFAakkDxDnEbrXVQskXCLtNNipHiU9PPxr5UGBNdGpgWZKTXzPuKr",
  "key11": "fxSv6Vv6BDBFg9emP4XNFUQALiLbgHdyrGt988g96FroiWKf1h8Qebpyky3WHNzLy5UMwqEwnVLRPquHPmna6pP",
  "key12": "THMaYUC2E6KRbX7XVxiDW6uNVHXCbkVEUtq7javwrV6L1VufHpENE5u5HAbBYACQYU6z7Ej9ew8Sf6EGLjM7Z1x",
  "key13": "4LdH3UTzvuUUirsG1SY5U7eFEL3auqTqsDPGRdLy6VLU6NnWxP7jG4Gt2wKKTRQ1fLw7ZPhCyFvXmtAvR7kyQpz3",
  "key14": "3EsnwMepn1Z1A938mrp4sy4eUuYRFzNF45YVGDfreDyz6c6m2jJF9ZznHJsCLfL4XVQ2xLUKa6PXmFQPN3rXhMdP",
  "key15": "2eeQPVmEBEC1ewhEMAaUkShkGfGr3QJikQGsLWcXGS915qMjpty8PLKaQreXcNREuRzFWiSrmiF5wf6WEgjQ5qbC",
  "key16": "2HahNdg8ctmfsUcSRRawLhtJ79RXsjYdy6DvHc9U9hz8ZRt7MvHBc17NksVueoupUaRbUncvGWCYWRnSeXx76JL2",
  "key17": "4QNwyvA2x5MDPR5VvtEdxiLQGn332bW3tefq6r2d8juM9biRq27bckG9yfgXKpyF6K5SG9t8pcMQaxJQCaAdAEz2",
  "key18": "4KYukXjPidcLk9MAEhYHzoM7kpoCog4PGKu9Vs4q7K44uP7yxAqeqLxZjrKqWc42ixShFatAx6aJN8AyfbuUnTYK",
  "key19": "2cXBvCrk1ZTW2MLtJYWhVA8NnhAZ8aG2UiyqCQniEYrv5i1brmaznoka2bNr3LF2NzGinUAAcYWGW6j35cpVAotK",
  "key20": "42C7hfpTTJmZszb5uJYiYabdyqBxkoaS5NXwiRVnAX41KV5uxgUdRtJxaYirkQrv2AcC6vC9Ri92Kpi2szBY4EUC",
  "key21": "r2LBX5rWmxxcE47h1T5mWheVFhaf7JXxgiC9SD7ynMAcYAF6b1DVmL5PZzox2wACsZJbMQjmw7vQ5xZJp7zLTnx",
  "key22": "2bbKdJNyME9wRdaJwjLMDgzDNUqMayq6F4SRkfQcRYLu3ytdNosdqy1gpiZd6aNiuBDJznrRZyFVvMbrSLrWBxcF",
  "key23": "479pfgw99S2AfAG7FchneeFRJwwpND57nbiAML7xwAf13EKJ4Rc2Z1d8vvv6EkwoEifocx8aGkYmjjbK3AekSnat",
  "key24": "5P4BoPbm9zqhQKWDKqfVAnJFtjtRWc8zqNqtd2wLUEPSPUYYUdkLwZhHs7veCdzsE4XtqYHs5wH8ypFqwJJt8xio",
  "key25": "2QLBWJG865xjRaN8mLzhzvBC3B41MAA7EPhxEmjjcM1HoC84wfJYF8TvbW6JFBNxcnZ9BFpJKMWyYWfVi5Di5m1M",
  "key26": "4EkzFpXmXtdvh1G2e6zRSQ3t1bK1NxK77z38F9yX8pwGyotHvoxqoBFD8aj9fhVQfnSBDmXB3HdkpW2ku4dcW6MT",
  "key27": "CYVqTbcw4NG8pLhnVU8L7Yr5G3hR3VyDNVaHiQ3dHyLVGnUh3Vfb7QNAb5a173zCEJ8X1sc8W5VAmsL1m7o1yf9",
  "key28": "2RRqwmtxZWdkFCGFnYkobaivmsoxQ13kLhpDvt5vRmQPvXjLmWvqcvwKTWqkzdRX7xhendhxcE2ZjkZRm9XkyXp2",
  "key29": "65T6tPGhyYaChq3kV3G8zxzFM8ziE7y7J5E7zEbB1ZPqWtS8DnhhKVzDXmSi4q1cAx7x1D6JShFH8jcjAx1agWGs",
  "key30": "2S959j6gnNhMu9GoTntbXfmPHJe4yZy56YRHp7WUsVZ8NH8ZRJRbgCHW9RhoDeNHPUUFx3jqw2ikdhy9EEWiVEEu",
  "key31": "4UVkTxM4SLjUHT3Uro3myjfC7WNNYhDnjTmzULyF87DCHXy54KJ2LjXAwCy1FhizugMTN5JzRBXA7P7Ej7FVinUj",
  "key32": "t2VsN22JBeK5ABs38r8Uq29DgPS1ByuMfhgjvSNBUUZms7RKS3kfMVFYw74dPhGTuqSXV9QJgJs4o2UPL4eC7rz",
  "key33": "5sj9tiqFs4NJxx4W5BbTYNAZpLGUhH9VfXAWBMaqZnqKGX5NQkYBMcAMs1angzfofXF5Bs4A9nFaQ8YXpfgSrvY2",
  "key34": "2VoaqVJSmARNQh9bpooAed6ZAL9tX2AYhmv9rGP1VXWjJ6MU2iwXhj2aaKqyZJZRMjJnhFpADXkbTC6mWmHyguMJ",
  "key35": "3PwrMbwu1jqbPTCDcgU6fxUHeU63MdEhZR587e9DLfHu7RZrq2sTQQ9Y6XAKVohuRpigC14t1wkzWhFgA52a3Tsb",
  "key36": "42cYcoeyVnzU8ZjPf9DxmztQpRBjcyZcxGhZpWCUQfoGSMdbgKMegLBoUFVfWRREcCRT512NibVdRQG8BCumQ9qS",
  "key37": "htv31o78yL9HiMyRVW8AWKQXeQZDu5s5vtP3WdB5yw7Fzd12hgxHfLwxe6DvC3HHu8MCn1gmBgx8EqFqnVJUhUU",
  "key38": "5b5zBsu2t2f9wTRKyDXCQDvqQndBkG7G3CQudjroAKaqmqNBa35TXx4HP99kRrK9Ay1718vPGRyNr72oicpgAkCQ",
  "key39": "48AhhpXb6skXjzENRbg5zXavGb6QiJhVoAiRcWev1eE32TuP6SUwbx35afdTC2vYmMGSZfeDfoRnS5nzfmmHTW5K"
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
