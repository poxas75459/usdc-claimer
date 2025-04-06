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
    "2MmYSW7JLNBqaKRFUHpzRHsqf5evx3dHtxbxrcDqnvEjaqE77FWjqgM336HdmRgP5cub83MaWkZU3isnFvZHMNhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2osc2VnGWUMjAQWAULERjT62799yBrSyoKnQgwFc9WBqdVkuSKN3auo57xgnKJTVGbKknEMEpwoizsddadqE5Hsd",
  "key1": "3h9DwNK1SKSTW6LgYe229hhhNNpPdN1ZgyQdbsLM5KPb8wpfTeFmJHDYe8SRH6EPA86ow4rTXAKEpLtYAWb8iohu",
  "key2": "31FvdanxXmChfeSXFuNwi9Q9jueJjMEZ1Wnn2KGrULbY6vNE51HcW8BpD2rzHhLkbg9tUBxBK4QbGE8aHSG6QCqa",
  "key3": "4eHGhX1jjWbdrT14o9Lr4RjgfqA7uVhj5CearDyKFroV6erkPYkc41e2yfar5AwbPKnxmJE5uEAhfKK3ZZnKyu7X",
  "key4": "5pSu6u7qo4ZyvvpJBHqkCUVMXkweLctYHEEw3KpZuqjPrSRBWH4kqX5fNE2HBWbvoJRKXkRhWR82UCEuwD8YMHEs",
  "key5": "3ZF4j1ykRR85FRzsaNoHFTVK4iV7jMpyZ2mrG8KcegdrPp8uP7maPpXHki93FRsyxWHtQs3nMM7Jc8V8V3ipTYoT",
  "key6": "gVh4Bg4NBTA2MkGAQCMxQRC17zbH1UohyMPabezbZvJvUQJ571njnUizuVhf6pbFcWfThqzfKrj5VkXrp9B4BgT",
  "key7": "UVUe9VJFPE3P5euSiSUpicgYkf41rNGp3prjEd93NpKRuoPj7ZN8Lp1LYcuteUVe3RKY6FtQxeLNdqYWdgYnwda",
  "key8": "qTpQNWErd1z1Qzj3z9tQDAqeVJt81NVmS4Q2VCs7pypXmFS3WTYQ5PEwQeYc2TYHTEhrvcQ1rcBu9bUB2rVLkNT",
  "key9": "55Tmrp7ihmxr48yxvFDQNec3c9yUKy3yEXkeNfXbTGVtUAS7gfwaM4aDqFT7rAEfpTTrJrgXXFLprNY7yeWoi9kF",
  "key10": "oZ4uxHxg2hAQ8aWsbprt7TB4WviptY91MuHg6ZiemUP4Tr29iEtUhLz6FLM5zg9YMXmFWTmCKvxF8UVRjV3ptQb",
  "key11": "3RS7q9tG3HNMJebXhrhkTmZW5Qz1e1bW2oUaGdgjvdLGxTd1PkvPrsK7FJqVJjFZGYfDZzWfBAMP3KykJRMCevAY",
  "key12": "5U2d7MnhBSXJSTWxz2qPfox9oGKnzYZYWSaH38ydm2cKPcuB5dqAytnabmuLMZWk7jgs7q8EGA3v2gYknk1pnQNY",
  "key13": "3QHiX8LvXs26i5B9RcjLE9LU4MwnT7wNJkpg8mCPnmDTvTQEqATefpucfBdNTYD3YSv5f1Dok6sRTvYaRdosTMqA",
  "key14": "64uow2CVp63Zp6W3RZShDP8sdySLUZ6HFzWVdFj64k73b5Gq5sQGee1Xe5pQfPLUvXbPxMqGLteGRvuiJcYvcU2m",
  "key15": "5SLFgmpzjgcjtqYf6C4Wv6fBqTtgScqqy6vrpAu1BgN5PmPDXN6wML7aJxyAC3kYv6rrMQYgoV5vDJEt5qvVvAQa",
  "key16": "3mhekfs4HKMVU7ihhhqUz9a8Dg3EsPYPBkipm1Lvmqw3sPXhm36oZN9yxvd6WCYMgg3YpD3ykdAQ37s2AhSFeMNq",
  "key17": "5U9YmfXFq3GNaAqC4mu5hY8jPRELvJ783BBi3ZXDqXGRaG1xeRWWZ5Vpz5oQUKqzUGNi51aAz3eggeNTsJN2JziP",
  "key18": "xCxQPg7bviGjsXWuXaJgU19K9sEeeqvrCy2RH9Phx3iufem3ki6sjG4zFTYLNuPZNQpuUTc6WofHNiGKjnHC38j",
  "key19": "37Kmm769zS7SPUYK9AS3eGoYVcZ9aFC6wCkzz22qFXs6GXKwopojVryeAWNWzogdf1CQF2XavpaXH2LWpH5hbBoN",
  "key20": "LVz7Evc2kd6yt3mb5T9cNjxX3nYzXgQysfBG72tF3DzMqQwpLkhxWSGngyJqHssKXHkM925PqCyrzyEBA2WNSRj",
  "key21": "37V8hpZrfm4vkHHUiLAcCz3NGnoMjrFkixZRK5vxa4SLxYuSV3aKWAWvRpyxFEAhbh8uuKRSsyhAHp3YE5mrobUT",
  "key22": "4QGRCXLTNHyhxiHZQDQMPUdHNjeP8Uf4PPurdPL7zsHmH2dagNmxZqZpSbFk6XcKQLkEn8WBEJyaNWaRoAP8mkiK",
  "key23": "4PHRhVqLkdk4e4hTHqYuRhYBfrmkYuQN9wNunk6s3FXfHFuUi2AWu6s7Ex1hozH4C8oER1iPXC8Sjjq2A8S5X1HZ",
  "key24": "3grzx9j4sXBabx6ckh5AjjDPFtB4Edw5bffPLj57n7bh2ieLoSPpZnM3AW4GSereaecgnkRCFVyTwqSS35fi5q5h",
  "key25": "21TQ1DG4bzofTpnFfLHFfkeraGuDCuqgTxoiiCGstqbts2rwaVhBHbqXu1NSBVMhWZMCQmFSsrY747x8RSH2K2XW",
  "key26": "66FBxs9HDgYiPh5qXvWLBaAaFDhwG32hxSMLdWA7hvwYPtTrv5TUcrVkjqtRuJvi25fgEdQzTzbwk8CtnzfB4EfF",
  "key27": "mCcPSpofbDN362gVu7kA2FYX29UGCWwwmiGQBg1sboq4vvqogtQAfddBk6RP4iXWsLjQY4uUD3X4VGY5gEsmYCE",
  "key28": "3pVkWNzhyU6m7RPRB7DqLwZzVTz7YWsCj53aa4sPmkuaBepmgV14wM7rQ1eTzVZGHSGs1Svrfed6hAY1T644NAYp",
  "key29": "5tfAVQ6t95QEmPjrZqx8XMmAcygXZ4vHPR5VSaRu5k9rTQsX9ckhKSCXgqxpTNR6YABX643LUrbPSs8BxRtbP19Y",
  "key30": "2Jf12pVzwQAuGat5ioDNrYS2KuiAeWCm1f5CpX3sfWMBcKQLZvCX7c4ehF7HH7XBjdd4JTa12UK7LjwxJQVRG3su",
  "key31": "FiMJ2JE3f9xQh93FxC7WYiMhnuQvDG2mjFg1KQKzmZNBQBe4kRWE4WBRX6v7cK7ciGKN5sfrkgRasZDGdnpam1U",
  "key32": "54pSyPe9aY2LiGJkqdJcYXSyjk1Lmcx61LCbQF6PZU1fkWEGe1JG18wJFRkg1XpT6hits9iMwSHfcwyVKuuBUh4P",
  "key33": "3DGDZAun2dd5TzCMYNWMTGuP5p7bwj5gcpEst5oj7uBfGbCXiXvvTNBPk3e7eQxd9GzxVk3iMiRYucanL6dJsb6V"
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
