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
    "2xccL9wZEpg9QocXJYWoerHP1w9aukijSDRqNpQ8iWKVhfMFGLgHLJEh3Siw53vsMnTiioyFXdmyQXx5RntodQEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dpSv9c6oDwx6Wjj97812fLbAPdkFDhT4ofHHB5p1jewoq78kwpYEsMoCh388iCSDnYSDMezjzcL58nTqvbYeeR3",
  "key1": "4xEmDc9qMLtsqvEgvgiu9wnSr2xEF4aMxRG4ZAccXtpZshTUrV6EZJmWMf4qdLHRQj9kxaqDNhYoUSa6BHvdqXCf",
  "key2": "3HokCYjSUUMgEeeG9yFHG5CQULsWZ87fXo5eyhAbswrSq3T3WWWao8ENvNiG1C6hVoqwmYHy8fNvLJ671PYi8T2G",
  "key3": "5hq2W8VQHtmwoNJC5rd8zW6Uf5oR7XT9xUw5KvYdKCWGcqvh1pv4qerMkdBwQypbrxeUsQ9CQkjzZ27Bvw8GRgcJ",
  "key4": "9VqafC7LAHPQvJkUpeQLa7UDcCnXL5UzAMngw8wy8wCCkg4s7GyfRNUss1KcSH4xWe3KCSFz8uxQ85ANzEvkuJT",
  "key5": "3dY2pQzAaUcYYyxtJVzxs6ZKFmq9FnhBzsX9mjnii4iatqXieAZvfjBLCi1YzpPbVMdxejFXtCJBs6i15XpangPT",
  "key6": "5Dgjovjxkg7rFBK3RczoYLJqwGNG9G7Ycq2q87YkgHmi2xwe9aX1MNPHk8DZ1hwZXoqufL2am4c5uPmPwfS5GaPC",
  "key7": "4dUCCJaiNoMn8XD7rGwMkrgvYFcoMbCYNojB9BdKNgs7onb82XWNR69jQz3HhLWHG9BEW7btGxRCLK8sdphaoMZs",
  "key8": "3sqL4zbUj12MapCfHDM4s2mxgZbboDiZ8uWngHfPziAUSiNpcZwVw4huJhR2SiQbPKUXvXTY3JpcpP1edHFFHQg2",
  "key9": "5emTvuM1NXQcR5D9qnb7sRgMQheCjXMV63SjpPCy5FnmGhY8HNVcC1ssuuhVnSMVTWtDDyGYD4KC5DstcfrPFTyu",
  "key10": "KfLk5nUcaoKQp8sBVgCMVhN4xvNJcrgLJyrtZw1YXBqGrtqrGQNyNgp8B6Hvnmv8icQtpeNrPJ6gb7YZi6EVQ7Q",
  "key11": "2JRtoNR8D1Fzgj3X6Mw8MckU5Udvn8T9ezG6d6Xjx4WuuWGrEmmGmfeK6VAZ2TrcMkQF5B8abJn98vKnMPGva64E",
  "key12": "5bygQMPkFwSPLkFcvSyNfisnomNin73uZCyKCJ5DmHEfowZk5Ng6frSZEoWjbLumwdPiy19Kc4kLeckuMq9FSwx2",
  "key13": "2dNxMW1BH1jBa6LGzMgSgS1Teiu7yVNaKYTrwFbK2MiJhi3QAChKBjGpAqv3r3YD3rwyzLuYyZD3yiHNQXjZxeqL",
  "key14": "5WZBzqvYvXzDUVnVXeZUVvrH96LXQtPPU2CtTXd9hjRQDTWDVByXqUsXs3fvrAjj9xPmzryrFiRR3HG1dVhGJTKv",
  "key15": "56jUH9iXrdrSowe6369SbXCfk6mmu7g4dgh6bjXmfu2E2k5zmjD2vYH48FdVGUYU8MSLxuaLAqu3MmuJpzk7rffB",
  "key16": "4MMqUDZRUV62vSMFCdsAWpDSREfVrMemcCePSAT89EERcJvgTUUQPUw6WmS7whBdUDWLYxUGWdk5mLDtAqTPQnQU",
  "key17": "4agW3L63R7m9xFMXR89upGZhQbqsumEF13vJ45AdpuJvDbwLpkuhKpW7ZaftGpQsLJd1mAgEQm6BpPkndfs9gpu5",
  "key18": "2oviEeGEYdyAFeSpcTiA6CJw7xjLkLvE7fh1smx4p76JTGupyxULVrEALax4hxxPfGtrXSYbEzymxkmDCXra9HE8",
  "key19": "2Z8hxNpXosDHyzDtbRnmcRg9ACMswT9kLzBQxzeqr34FwzCKXDsNs5ovNz6QmqZ3FUNAEKj2HmnWqBtApyenREhK",
  "key20": "5xoTi4dxJVDAVBykkDhe4CCoBBw5AXczjsjsaiRSUqWHcn7H8dtqibsVmGR4iattbyDtGWoFB9Nadyz1DRkGg3xV",
  "key21": "28DUtdSfzSHDqGCQhmEKr9F2S4h1YUKHohE2J6E7aYSWCCLhaNToqq8yjDUHVHbQsyDYZUqThVHn7m98fQBUS9dh",
  "key22": "4UdFBrreggqtRMc8ChR5cxdDj43qmKbj7X58NmnZBApeFKAw9nd5WWDceXuV83rzeMhsZKXqufKuJbMMh6VRhvXX",
  "key23": "5j1J59Xcxm3DF6m3PWAApiwgcGRHUKFbz5CyKmyE2UnKbkRe6zC5Je1VWnzwdkaqUnZjzitvVW6ryPhDK2gFoKex",
  "key24": "4BaT8rW4w11wAZAZz2YxwACyz3SauMs6CwaoX4kVjHa8b1STgWJ8LYmF5HMqyRZyrZMRTHpk1QSQp17EkbsW1QXV",
  "key25": "56LPaqTJ7kUhRwFVQ9cjqkRJxkt7oQY3JeyrSN6hmDruizc8mLoXMfiMsx4nUs9yz7Zne6qhNqaUW6yXgzCRZe6R",
  "key26": "46D8YGPdntZnkX5ha3BANYAFoCrDVv8WECoBCEpAqG9Gmei8PwaXoJEuvHbt2XpzhNL28ctTnyFiPvrEZq7UxYsk",
  "key27": "5FoaeachvYNkTpXamJG4ojQKpUPRCm1ibvZ5MaMAmiXqV1RpAn17DQ4A2UmZ3VTQnbhLgiZnTV6JZTgniGHdvAHD",
  "key28": "4rmPyxZ3uU7hsyef39cQzhAvuwNWULqWDMd5qhMiEEDh6nPvaKmTjGsxSYjR11vtoeeax1Kfj3FrFjFmJnz7zTfA",
  "key29": "4p9p3zjebyeuuTJf8ScbZUigiYfET8o8LwDHPwP5fkWFs5bjLNYwEu3EVptiqAqftxeCLpEi9gbvrSMwwfAGC8Dr",
  "key30": "4Yob5YCQBesmhzozs9KAytMR5PQGqFyHqWZGguYfcrwUAjz2XtzgvqhvrewtCYvuHzd1v426XgEfiFZjh1VMyq61",
  "key31": "79ccGdve726BpCQB25YvzV2EPWmmktDtUL2jACzpCUGbVgZVQPW2p5JNAmVui6fAnXkmS645RKon3E1QYULmab3",
  "key32": "2odSQ1djisUnHx5Yvr6MAcgyuaz6zvjzzukk6B4QrUbEgeBerQ4bVHa2vXXGfjRE4f6N4xAxLTECmyZAn3kw3eb",
  "key33": "zzPepLLd3XPfq8fs84CHNkoJ5gncHEia4s6ZU4Q4z9d935UatsFFexqWi2RNbPy96HN3iGfmnGTxohVt1mhrdj8",
  "key34": "2yNucrLfSoTvNYcRQ7cM7JweNJAsuoUkozyVMcuoSJ7vyyfCxnxiYwFBv6SPLQRyqfiYugSs9oXZrkm5Y7zHuLxZ",
  "key35": "5Nnfon2efCQnQ1VErgWSPTuNJZmTgGnsxZY4AXd5KpGpvqAs4ZUXcDYCSonsPoDBX1fy7cyHqP8HdU8zpKpZ4fEr",
  "key36": "2CABNrVWjhNHeaAWZ8wRn7pvBr2HEpmUMSTfE27eLKFfNYDNeTA3Cd5sCQRvyJvd8CkfFjwfL9UEB3q5RbEPnt1S",
  "key37": "3CjiR4SpgNjyu3ATqgoY8Gh73JdXTgMMfKyERJw8qD6Fj6iMLfB7iKss8zYjWhSJLLgdxtxWzmRy4SLzsnmFK77C",
  "key38": "2pfzYw17r6Bbr2yxFkczkEgv6wJ6SPxJzvQv2UofwNnf9jiSzjtvsaUzGENPLUbW3rX1brkUY8GihcZXkm6s2n7",
  "key39": "TXRAd25DN3Sm67zBvM5LZWkuRPXLKvZWmCXSkBNKm3zGaKvkQaAoQvyeFe7gs417mGJiYRxnZjQJfHCzk25rbEk",
  "key40": "sdrmserrv3sJuApLwMNZgAafmxmiKSeCSJ2pxkcWrwS9ozpcURTokwjtY7kvz6SThKH2KMkvdeEkhFLTWYnDf3f",
  "key41": "5nVuHovD4FZYvK7kwJKgsk7JNo7idphsutXNQfNybkBoDuKKyqZCcRT6t5K6urX29PQRaSacyhRvTEkKX8kfgzQ7",
  "key42": "27X8Ahr2vAyHPfrqvjaguqzoxV1mR7wjVZfutPT8h998PtbVkenGapjvD5DH5MQ6LhQWB9QfPWeb2ZCa8TWAXtsX",
  "key43": "3MTSTSHxUkxX9VFwe8FswiMjFLRecwJcENPwZNJ8pxN317WoPswm9ovMWdozBLYCnf79bdLcetN1CqWMvosE3PGk"
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
