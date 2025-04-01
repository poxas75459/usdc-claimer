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
    "4gSiKry23MfjbCPcw9QbWqeEFjSVshh3tF66JZEAota6y3vX3V1HsoSRUy6j8StimD7TG275bgkFjQFQbz96pNQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPti7udshbnssaDMqUagaqva5HNur1M8NyAimHtu1k8JMztAEmFWFBCEuYwy4Rmv9syubvF5Yw4of9znmFoZsm5",
  "key1": "22hmxuxrryo9kSf2Dqb6gaKeMRXodmefKFSXmUDg174QVNwGwVNhHx6EmErTGFQUpdeff7M3SERSJE8RPD4y66cv",
  "key2": "4bnv6g76zFncusgB7uheoEWiFpY1yCr4S3FutiM6DA1JLf22EDcT9bwrHbyZSPnU8ycPCLcTAqTcrjApj6ZyGtXE",
  "key3": "4PU7V8xLxywZmpqa7CE9mppSfgS9cUCxAAUY5pVerps69YbCrFZRnbBEnnEuePCf9hmSdSUCqSDRzm1MfoJCYWoj",
  "key4": "27zNYmdFTpXSpKSv3hwW4UKzDv7rEDeoqukFm31iZ1B6sgeYe3Lz8MK7aaUKbiG5nEevNJvSaci5RnVHAAgkvVpP",
  "key5": "5SGB9KgcecsjNiadzokzCkQSgee8JweHkFfPjLg5vE13T3DHD7z2e2dcCsLFHcvsunHQqRHJF2ekE2G6cCpnqN4U",
  "key6": "3WK2CQuUAZtTDSSfgQuvRx6exfACyxhHSAYty51Qz2MvLxdFLsgTdVCGU9bzxusUr2AFiMQXy6TzocTbJjfMQHB4",
  "key7": "cUszyaMSp6NnjzvSNTPfrtmYbAmek23Ykg2QBkuLAuQ91yg146HaFM4xVvFoJHRMQNXhBau2PaQTxTiJ8PGh9gr",
  "key8": "5QHLFWDeeSgMEcDGpy1hZuqP3Q9HTypnQP6YkmxDDZcKGfRggQz8aUdoojQXLWCDu9sDHqF8BJs1F8GngR4DWyTp",
  "key9": "bv4tKvV6N5fv8wCUBkK4HmJoWWKgTteQ4AdbN7E3hLou7DJurmxrGQKLNL8NbZePxyfZu5MGBx5bxf2FV2K8VRC",
  "key10": "5X3EoeVzXqeGtEdzJVXiyZa1HAcP4eDbJxsfWpjjCT3rDrYUt5u3Lfc4uHFwvVS31HxdsYKZLq9f62w1qzpEpm2x",
  "key11": "3oicB3Es71hjeD1aufPeaWbG2gtTvp3r9cndfPY5zsURLAiif37DzgeJ9WDGQDK9UF4N4eXTHrCjbcvWfSY8xQUj",
  "key12": "3XfD2ATg3r8cNh7zYnj8WDYpoRuLh3qqBofZn8rizH2TJUBS4XYXPJkaKjoTqn3mzAJaVBqrXYXyJ6ZTqQ25FqTk",
  "key13": "3cEHDo2PkRJ6t1cBkszLxurC1NwXsiZnVg94qd6H52mejCGAyEL1dmg7pcDnue2W7iuhrboXT85YqtrezoFrGLrE",
  "key14": "3VME5mhuzMGh7XDHePRVb3X9UxBBjWENZ9LmGQZ9Jtz5xgPMzAScRJ9YBiSAd3ihFj3JjY8Rh7M3qihGUkd3KHdL",
  "key15": "2FSNtFbvHaT4ozqf6ee2kz2miCNmQ7pQWyHraerSNcpoL9gNgwY5mDAmRZShRb6QeEKoixvJefDGBfJwJpQUBJka",
  "key16": "2DAf6DmsZMufJSTPnZj9RYxaYoFeAGAPYFjVJRsLCGWbgNMhQResHwLHThq5BeNGwNchzTSWvxeXY9ZNDxH88LJ2",
  "key17": "yLV7kLQzKdGptoZkbpYnwTnZqUjErVHAx55E18iQvehkdeTeaSWtVv7gL8e3BWLMv2k5ceKNYWhc2afxM4uGzhU",
  "key18": "3P6kSqq8pnD8ST4TEMLYNFP3Ft9j7Dt63DYqc3uyayBpYWXS5q4zGm65pzFvc9wVxEEcT7L1osowtqjrJkWWZF21",
  "key19": "3FArejdZeWuWVaxrVhBx2kZLrex3YwxDF1azvrYimvwzWHsUCaYMrEtmbNtA9ZABAy1BxK3Q7x1h24E4dx5n6YsG",
  "key20": "4ZtCE4VT4Ax9AEdmnF2rejNApoBxjvbCGLsrymaAv4MvTDQsW8eRVw5vyy6LUWN6z8mKkJ6EMyyEjyHScVbiRS3w",
  "key21": "kbfgLk7md2d3WqdQNqvFfyNbf7qBpTbCKiqB9b4bbm953Thh4EouvNUBnuw6bWjYU1j6rqmQmpzsikDvjJkYuuL",
  "key22": "k9HAdowcwkC6bFSgyNwKRph6xAq6iDSqDXrj8fpfkGVRfCLSPpyHaKcHeWAmZzeNwA9hyD89FLbftbELe1sLR96",
  "key23": "asCp7KdHk9XXuJqYiVXRWNZpQikFqwcgL6mK7cczomadVDZEd2dsvWWa353JLz6Xpovc5R5rnLWdMpmu5iMXmEe",
  "key24": "2KbFQYkP6MNTVd1W4MTWHELuq5RYH9DQGQKyPPFutcabR3RCg39yKd8WjRHXJ9WZb3etG5gdVtDWNaWseY4bdDga",
  "key25": "2pS5V2S7amtzWmvHAtmBgpZXmscq7V4ym11mnZFz3HXhk8gVWuuws6DB4S2hSme2NbcJvR6CsY23pjvmQBoskM1A",
  "key26": "2qP6y1sUT1Pr9BvzTtLHsQzG8BBs6Y4fkq8yrxWg95GW21JqSUAuQFEMuMu59UxEv2UigfMmyhJJwmCbpqjzpUUH",
  "key27": "2mPkh1ro5L2DQcRzyCyAdLL934ZARZLk7sCSyPq25E9GXXPA76wWNnJuUKwNvTjR4LxRFhG8wjQ8kA1HU9YQrw6n",
  "key28": "4AZoRLcWfrk76wUGDTSF7TnpYs73EZE95963UWn7LQzCKfe52fe6n36wNKWxewuxDs6WyDMXJPkXiXMY1ohp1qZF",
  "key29": "3ug3CzmZmVc8eRQ3XaSW328L23NBadYzwt19a5qSihuHmRm9a1fWKCczfcykS3UbV9xqBgKgWodS7RbSunRoqMJS",
  "key30": "2zzw8Ta2sbJPB7aQupcSTzKR9QJ43ESMjimyRWDWCWjN6StNFtHtzHFZLx6RRUQzSrF8XwEPJ74NsyUV4vB2mik5",
  "key31": "jwFga4WeBmo44yCkJ9L5KSYk1civjUK2b4Udpq76ZPCryyKRJ8hX2pn7tQ5YzoyqeQJuSjqfeaZYa6owkGpssFN",
  "key32": "3Kjd6s49qp8MDoyq1XXayBQFJpsDNXFE6yCra3TE7So3wzKZ9TuRLVaS4mLr7AZsiV2eweY3YudsjgEmNmk4bFxe",
  "key33": "3eCF3xdhtEz6TneiMBBTFSnd3bKzoXwtUWLQANAuaeEZCP2FUCqYzaWiauXyyc5Lm4ifVXKoxhhL4n2xZ6W4Reyh",
  "key34": "EAtUvhrhX1F5qwHyfbvQhWu5ePbNnUnkN5WSppsXDzHnwyVnQnCqv7f4qCqxJLjY2czUmCWAumATCGsZZDNchVR",
  "key35": "4mpkacCqvUqY9MtheMg9YYn54uEMVKzpbt3TvrHxmV6984YK7XSbdtzHtQApgTHRwdkT5kCYzU2UNADaySBJ38sY",
  "key36": "KQroK5unNNNTh8ds46ZEJHoSekxJNNCdQMt7Pgd7nZbaP6WXJF4CphfxbJEiR9mMhXgbUJt6ZhxfL7botx3Dhyz",
  "key37": "5UkPpSdg9AJo9UnXzPQfVf4e4YSin6wERCNN3KBbBSXzpGhvuNyh5s5xen2UzFUnU4RVgGMMH2hqGbBuN2dghZte",
  "key38": "2ygRsQPjbu63o1HfHVPXnWyox2ygUYkdWH4Wbkze9wXydVDn2p48y3H54Ue2v5GmhzhESqFt3f4XZSKam4ovAdts",
  "key39": "51yqsfXKPmUkHe7aKzWmtWFRp1sT8c4uPpmgR5WvDaQ2CwpbntfPmuAVUMri9PYdzqwXrrSnhkxUentGDCLkQsVQ",
  "key40": "5LdBdQMnkFazf5QEd7AAS49SyY6xckS2mSMmdj5ETc9rofUTTHDTKAEy2q7MKKqZUwR6gGBR5te8bm7L8V7CsoXw",
  "key41": "2djVbYSmcb967a16aKSdJJrxfcwzpc44cRTdGdSiy9TvbzojMUFexKAbUzwG1xYs4vDqrNpuf5T2rND5pS1oJdxZ",
  "key42": "2nsr5MXnCQ8co73TxoP3fMbG1YNLkJ6k1kAdnYne8q36hSTwN97LXLDJr1PNBGmNw4QXYMPrZLtq51wCdgSbEdBi",
  "key43": "59d3VhvuVUGuMpT4v67zMXxxuRvdA6PAUFeDVko5UtRc9GydhyJjKhQZpBssFvK3n7Qq1CQ2a3qPFwcNfv9pvfyi",
  "key44": "56MJLNn3LyVssxpodGczX7UqPsz1fdHQcg62UFpivft7T1cVXssC3Y8XSe2XoKEMkJJ1vP5ZBmwL9mkpjqPkQUyS",
  "key45": "5tvxjPuyx2KvRga7exJQQV8JgsTUueoA6mMvqVCKjRfNztNEDkVjSTXtyiWJvzhg7SF9qXEw7vqbqS9QGt2ZSctX"
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
