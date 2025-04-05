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
    "2x2uknhZjKmGPAYjTSoNSFjnd7GFYP7i3U8XWUFP8Gwkzi4WJEkrXW11SVGQrj5SVNBeAKtuNxZ42PfTKz3r14to"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jMd16Vn1gmMCb6Htpd7WYvWkGaVg6Ge3eE75q1abDjMsCBYLMyydwvBCi8WoaqWHtaJgrh3e5A5cBiHp5e6mAYz",
  "key1": "2vXsZxH6whyDUFktqrNzmzv1RaVS3gWbRCzz6cGEV6yUn1rxBWpPjAHSFFqZDgwerg3PSie3FXz2PawoG2HD9bib",
  "key2": "3RZYXmAG6acwtBT5i3PeVSkGDp6KpHAzZGBJtgpbZNqRtFddjQzQjLbmp2tktLb9TGEAw932QhPVvNzaX1bcB3tt",
  "key3": "4hozmF7gJi5gdJKkZvd7wfo2zJ4NAx5VYhKcVrS78vhvs4j5eH6Y76LX9gFLWMhu2BokcTGYUTdnWeAYfqtNaM3x",
  "key4": "81n95zFKc8ow5Pb18wm4vEjCvozs8Xa4uZSgbiLm8YCNWw8NoT1qbs65sxAv6QU89DLGiHmbejvotZMumKtYjbZ",
  "key5": "4hMhPUh2rvsP9U15gqDqP7Lnau1V4XMztmDUymBXoprMWgEWj18GDY5mRiG6XT4PXrGiVus4Lyx5gS1JrWCPKvjF",
  "key6": "67dgEFYA8Mh43ZsZ1hHS3wTECBKUVvPTosZ1fojnxMhQj9MYQwtZR6oxH8zpCpgN7vQiAQXnNtXcmbuJqFZKNvs5",
  "key7": "4vnMtsptwDu8KcTeBd15wB5qXJGsYX4Rd48i83Ut92LymD5JtcRLGcm2yzUU3bpwKtYBvEmDXG7d1AgxzyLR5cbj",
  "key8": "217Xp9uj9VgEtPQnUiQkaJCSoieqEhTQUvhtHQbS6AqkdUPovs1XSbVJwSav2jKLCXxPMkJp2ZJjoqyMFUves6B3",
  "key9": "29aW5o5hfbv4DmS3KidrdvdzNK7emCktoDTGe4rQe4xVf5PP62HZtMAvV8mGGkK1X5qMXspqSKBEkr8AzXQK22e2",
  "key10": "Zv2458yh1FRZMjWH4F3o37LHofSH8Li9YvGwMs3kmtGGd2fBqU9bxo8E1aEviJe8ARE4uuAow5xBpSuj7ZQkupi",
  "key11": "2a8HdAuN5vCGGyTPug8xqWDG85TmBgZV1p1AMACDoqFQT7nJvpwN9mMpfXqTeLz6s52pXMEieaUQovTSGFvxsPw4",
  "key12": "yHkW6SZNQH3Tt5dJPQuB8MuA7sh6YiGV2oPvoDkqqq4jiYcBdkZJL8GFHYDEuKpQd4BCxtJGez1UYfAixEbD9o6",
  "key13": "5SzPnttkQj6ynPmLCXEG3UQuzvzAE6S1f31pEqPGj8ixbSBf6icqzangamVJ2EkmtxkC7QayeEDQFQuWm5vH4DU8",
  "key14": "4o65q7GUbyLpQ8p38injKiast6BVEc2cuHYhkzBSz5hMqdFakHv6Ftv5QSmVXbw8Nvwc1oibhSB9oviX6pyuZMGn",
  "key15": "2JRYijg5CtoVJZydxd6H4YjxSq1LAxFWKMkvRgWu2nZrCSxWzS3VX9mCz4R4LMmQHi1huykiqYGiyzwMm7Js1Res",
  "key16": "4EMAXttHBVvjWiQBjhkfzwvj7LqHb5adyuRVJ8kR7wrLtkodt72Cwj4UdyAQmmY9s2zmFGtjpxXYRjF8pwtFDQzA",
  "key17": "2Vrg8EJ5UGFp19kwkKCJpjt7amv9XyTKnG47xmQAmepX2arFBfzmpcNTzS5afpfUNtTcnPVa3UP9hEJwNrzfuXis",
  "key18": "3znmRnquezrTzwSFTQRydHXaZ16JW7NpZt4kASNuzcAQ5WwspXGjRCiryx7JVmvpkLyzstQ2qkWrbhQYQsTHoqf9",
  "key19": "3VJ1fVW8sWoqUMGrZu78ngtXgG5d5vguzZXRt9SSD7TbnFEx7zvZCsSmE9iUfq4shzS8H4nKaVj17jdHZtmuSr2A",
  "key20": "biTZCnTPN2wFoNGtdaVDyhoukuAif266icEgP2oCqVVGdhr8JmCgF9HN3dELERqqLoKnvCYzg7E9fBEJH16JLVt",
  "key21": "5wydJFSGK76EZLwz5fgdVBWJXwwXUJgnTHy8Wi1kUfEaYU7kU6FJnrBMyqfwJjKsVPTa7JJbh2UcBw8ERHQ5QP3w",
  "key22": "3XP5d8LVyVeHJdtw5sx8NM1k9hLHkyt4Nrj99RG34yqHGuXQyVRTULG7yX4atB5pjzkW7dSVh2HmDtNH7Pg6V1wn",
  "key23": "44Fzz58d7ZRwJVnTQE5Bt55xaLREUUuFAGRxu2NBwQLQJYxyANZJZSaHMFkAHikaZS5t58zEXRvjGDC6JVi3yxnz",
  "key24": "839HkVSqqDqHwGYV8hH1XMR7wzRHa1cyXdwZsMwUgaTmojUX2HbUQccSAP3dafjJ1P3SxW4DpDynLER17Fn4vrp",
  "key25": "2GprgcwWjMfbbV2xAQpvmFTR2dzD39LYrfgEBYBsmFksBa5f7r8T7rrsxsmUTaCmXQz9H1NCFiZSirGSFW4EptjZ",
  "key26": "59BckCeh6iYJEVjsQuRcNVhBjk45Riahw8xPicKUNjcXUZo5KpoGfmEgyE6BZQQG1XDG9PicMMnvT9qzcBZQtus1",
  "key27": "5JYJLudug6a4TAUW7c32dYignFN2ySUxhynM5TcysmfechG5uzVxC67imY8A66DeiTRcK4CBZXKvA7enhhCY7wgx",
  "key28": "REkYg3KrwE1osB4i6pptQsUTH75Fkoe3vZmigtEA4Te4JMCiYGAo8Ygxt8Gkh1asUD2aAUt5pBtWJAuKkqEVqyF",
  "key29": "56mWUNmNaRmLkfkkmEge1SXiHxJUKJoi5pFffjfbZGLb4AHSXK5nqCFW7Lxa6fmdXPg9THsEVDadCRtKuPUsApmd",
  "key30": "4R9hkU3W3zpURvunRkhp6SCpkSqUog15kRrEssarDpVv1qpffxvrMFbbB5DafK5v6N2JZ9dMPu1KmeBc9QJPNNyC",
  "key31": "2mUNeAAoo3cep5vfhdea5Q1jk4Mozedq4ALjmXB99m645JtDHBA3V5rfv4hvBxrfdXvRonzQbbR2NHFEqjg6dtPF",
  "key32": "3pFXg8gsY9qBuDsKMJYhReC6GwnLt3U4fiNBmZk5sszMWyqmaUhvyWW5HnXCxWAVhzzTv8kMnN9w2nb1vw44BGf5",
  "key33": "4Q1QXkVBkGy8msxHyDwJzD5DpEoSjLPwLwPLvYAtxCUp9xrF4ZHBZtChZMu3uU2p2jPYd8t3nMeShUuRQP5ap7vg",
  "key34": "57PhmcFqAyWgBrLz97B5rVEkEGKa98FHMn8hzhiJRSjQAZGuMjYH6Nu6muZrf6BxteugfUhqSuaetwybzoZ5fF4A",
  "key35": "67qY2DeqtUk7qZ1Pv1YxRQs1AXwBA9L7DuAYWuBs1J1XDcH3g4nsGmdJhGCr7pfcAmj6ehsapCyGPWiA7KEdTwGo",
  "key36": "4kcfTqQZASbijKciFk6BQDcYTchkCYtRAyLBbFsAjR6czwb5RqrN6WSwvmvhzC6yYsD6Lv896CDoZVCT9MvhRVVb",
  "key37": "3McKxL7sbEDcuKzudMcuASG5gD7mckwSGfMn57WqbbJqbxc4ZsLWhZ6FrrGWwFeYD3wAdsJV151mJ1SusP3VvCCY",
  "key38": "4jokUQRwCKnXnfUafKmmxnPkvU2HH23B7x1gBs8R1pgSBkFcPbTcYTjJbhDnxYMdafjPCXmn5MMLyyQFiaoMJ21N",
  "key39": "4Z6UTVnR8j3KDE6LKZGdqLPyxBWHdgYP7NAKi884PRJHFfMr7JhRqeuo6W94G4oHzy96VXisRPkp2qmgmcCDzy5h",
  "key40": "315Roa6Mttn5WiMH1GmoJ9FtmmMh8d4TmQWzjE2XyK3mW1KRR7wRGWLJtpzmU8pzwjWWc46KE52XS86rXRbMyGSC",
  "key41": "4phvMfXeTV5kgpGQdns639pB9UUwREBza9SULyEBgU1843L2qVxm6gWu8aYnZk2QqzG8jbFr4gx5kmTKK7wnwUpW",
  "key42": "63Y3DaCDiQHygrmCszPoh6xpTqek45eTSpe8ttQRt3BtbsrbzCUC4Y973rVvMnapAy9C4XqgmJNxRCnPzWNHBwPB"
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
