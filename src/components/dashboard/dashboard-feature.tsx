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
    "5sFT2sx8rWYNVCc8v1NtxUzQvmv93bch9x5znxiuzmnaEvAEiS3aVUXtVBTRuaD385wTT1VCQEJQQWrf8Nphi8Qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Lv6RTV7iNZbL4PhEi2ZGm3SMsM5S28a4riXAqk1Huu2awdYz8X8Gq3CGrvc8AN2cq43ba326SoHK72DfnD9JTt",
  "key1": "3Lx4xrZMt9AqBAsC1TPU4cH7WsB6TEBJj7FvwssxiKCm5cHBRmLfpvEmrn2hKWbmVi9hNpP6gQ75WVNNpcGDBMoL",
  "key2": "4yK2bxvVMrxwfoz5fPm5Fqme2YM8LXvJyHxFV7q6xyKQopAFw4HPq4CqQWKoGLsnr5NyTSDNgjm7GLG7ZSByp8R5",
  "key3": "4H511WjxNj5zrbuc7xkhXVbfNr2d3m6zdBRvKsPA1bJHmcuAxxcSc3ipvaVd9Q5tAbueuginuuXZJUqoo8oGo5oV",
  "key4": "3qQA59n7G1YcXeqAo6FaJQsn2KX2wB9Lmmd9Gk9KYpvvvfdKobD2r4BSbbcY9mAF3cLz2nkd3ESBp3zk7s1MMozu",
  "key5": "5QEYb9nz7KChJBZEfdxWbfAVA42Xc3iuzSoDPDoJXEEf1MohUZmLGNy7LZbxcB6UaX8VC5kRGuiQoVTzUYSHXpZh",
  "key6": "37xjFEo7iSsARKVHzN4cyaXefKCQmqnrhP2bXoW3xHMCjqbSrJear3ErLdzNg5dz13bkc4kmaXLq1k7DirJnk5c2",
  "key7": "2ywjUmJyi5vnXLh4DuE9h9NonPt9bmFj7Fni68jPnAtSuMNCYJCR6FWHrjAUeu2zjEYLq7bnAfUvdbn4SG26UxvU",
  "key8": "u9BeVUndjLB679L8rnPmo3CQk4zNhA1jn3Uj1BZFfXyhg289LsH8LNzoc9P7whLpGe6fAkTVB6CbAP5GJtjsbgu",
  "key9": "4ANZHyWpLgdYKnTMA7m3HkmXEzA1jdYdb1xujVr9NxuXKMJb9FXyFzLzG4hrvPwnsA3ocfHbbnWTdkbHpyC3Sd6a",
  "key10": "4WuNJm58feJ1ppBBrrgfpgzHsQPvBKpbMVNJnJMVD2oszjCJHRoT52XZJj1XaJXme4P6LvC9fDuNsdHwFUhGNmMn",
  "key11": "48FM6ezsWpTE5MEV5Jp3yRokdDuoeHnb9UC3Drhhx1DLNiQnMAmynE6eM9cCFu5WEwZ7wdgHKdvVrwnopoAmicTa",
  "key12": "3R5Useqi6m7eQCPN8uv31YjXGJjMTb93t9NnpcshADt7pSZDci2viZCpdUaVvvgUhC2kkWxikwqFb2nTq6iQ4oFe",
  "key13": "3ZYaAhWpqZ1KDLvAtocNiB8ktixcXjsxg8wsdUKs47ZVEjGxN5do7FP1FhjJxtb7DM6ZG542tb5cXVXje9GNbRfw",
  "key14": "5oqqYys2ZVKkosN249Wyv5jq3GFbyyivYpHvPCjcyYonb8dpqZtDw21nZmfwR72Tz4FRUvQ6BapEQhmPsXa8VQUx",
  "key15": "3yZ9Bdq6hJ1abqLf5HHnpb93pV9yPF9TKuYE8fzA8BUYWqwPJ8jfSgYMoXAsbXHGNsaffTm1KuihBRfoEJQ9Y4Pd",
  "key16": "5FzL2KdwHCL4fTbDE4W3b9GDnL7GWThbxARp69cKwdPmBxqWgEUn64RUnPLcN69SB4v1Tzc7Si43mxyBTYzp7kzF",
  "key17": "4HYwASMjDkV4Y3RUAyg9nHoQ5nsXHQMjjnnhQgE6U5aG2z592v3b5Z4cGYSiJFum2MTo4fXn4hUW3WhnZNqzai97",
  "key18": "tezC7Crwn42fABMtA77vaW2JXQWQq8pbXpBeL68CiQ7ZbLp7fGuzSaZSvbqaWcfNrg2JoUyi9U6T6ymUTkP1QvC",
  "key19": "5ves1EJZTVxFJsp1nuUX512DfTBXRMaEhaCKjhq9eNaUsVjnBEn2iUn4e6xgHgtZr6KDfHmQae1svJd1S415RY2G",
  "key20": "4C6Qhyar1uAW8w2f8ryz2wihPB55nJGHFHZCza1DLz6SjbqLHuigsRrVi5z8W8oXw4KTjKmFkWhwAM2CJ5xKDAGB",
  "key21": "TTBpEAgAbPD9Z52WmSsRYYFXx5LcFZcaF2HJmcAPPCEJrHtXmR8aYixySBvmuv5GDqmrpH8BEKuNn9t1XdMUw8D",
  "key22": "4wz94x9SAwxeJ5FMXkRGdoV2jPR3bqXHhdFDozK4yaMQw89qe8hfNU8sHhUYvjU5d1BzAoxB8xfufbNb7wtigDBh",
  "key23": "2Fkr73dnEBLp4gFHkDywMxkpKh21QcNUUSrXUmfaKXvk9BZnLTDRQFmkZcrr3FDMQwPraf4wN7BYRrb2qEgXuEu2",
  "key24": "WRmg17Q8DvJaq7QveR7ioNfGZ1J3Dkjd3yHiP9tCgPhCU1cPMtFXHKovU1GSz9AKevdJdSuevHHL5LY9DNUyd62",
  "key25": "4GmgQAdrutykAn7XbtBvDQxVVTtzVwpYvhW9t7v4JjXVnZT9QXT5gBQYwNRQichpmLD9U6QH9MfrBkJgAMdA2QtM",
  "key26": "3qzLbiQKNrMouu4B7r48nwox79LJKAkGV4wL1PvA8w5ufAzeT5zVGaLL1YtPUF2vuGwvehdhWRB2TZqtn8Txiyby",
  "key27": "3mMVntHcnRTdbFVtDq19CUZeFzxWXRJcY6X9LPjmGfah6bbP99a7FtkRMjLg3DrEuJ6mNPtFvBdBF6wQAvi6MhEN",
  "key28": "7p6fJScrqSNJDq7XdepLvDZgzXYYeKJEpLETag6y1qKcFtiU3hLmPvirpxLhQjBBX2h5upAkcZYPCSAZ2bKiins",
  "key29": "5VNEfDdPgGAd5Njj5ZonDYpufhJqtUS6X7T25WrHf2NWgkNPnwkmSdRNLkuJC2iJbnEWAs6tsofSubkvk1AAMN1z",
  "key30": "4mDTtETdwY8YMNyeCb8VsjcQMAYLMVfqgZk9oUCBWpshC1DcpBpcGP39hw2zvn51QmGptf1ZSWtVww7zL6DguyxL",
  "key31": "VjT9cfRYhM3zdyLjoz6bQDV2Sh3MesGA1HKQsp5gj3d7mzyNTiLqVwbLVGorqjk6xC4BqaoVwh47hm2P1Rdv2o1",
  "key32": "4yRbdnyQKt7r9w51FEX5anDWfhHSWbhkYdAaM1cdjRA63CNSg6b6AVK4Xx4p1UKBwCWgSGKS3iUv2WZqvrfYQUE1",
  "key33": "4N1jwfuusNAmhSJsNZQ1a4wWfbeRk27T3qL2xrn8kh4Cjde2GRKkwYwdwCLVUdfDRMjwJaYP6SdP2aXmFhymaqa9",
  "key34": "TL36Wm3vRSMRPWhJZmj4UhBna3tHY57v5jFVmu74gnDdiYYxgkw54zV7wrQ7zFoFsM5457HTBVtt2WZoT4X1ZBb",
  "key35": "Bn9cnjM4JugKGvPVPSr1WemugvWdsdsHz2XN5cGumNHogx3zAyPQQW39TpVs3trhRB4dcCM8sjK1rZ3xfUSUJUz",
  "key36": "4mZe1yPUAusqHgLw5byQ5Mkw1dKGYokWTGC74KvupZpTw5DQjmDtC4yuCHpQ4M1z3SWB4LT6HFj695LCUXmnjqaL"
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
