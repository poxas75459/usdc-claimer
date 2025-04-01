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
    "27pikmxmbsB7zCRba8ckcrpY3QaC4ZMUmxot9kcCyWk1E42VS9VYKUAqfy3AiHL99wRFZftMZMLByupUuXHNJQcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZUqrBY8H7Hkna9LCT3RFdtenfxiTvHoYNHqSeqkgbbjYmP4ec9QV1eALrV84rtXfY4hd3ewfh31PWkMEwsZdPt",
  "key1": "NqTPwPNhXBwja9B6QkDuVfAp93j4kecdvDybzmkxptNmQ4GLwYYGASreWxgogCkccF2PEnBg3NUonitt64gbbLZ",
  "key2": "5D5haSgRYDngJZvK3kGDMHhFxKaYWoEHkPMKXn5pTKVXCVRvd4LUSRz4TNnYobiV1RaXm8Yzx5k1zR6Mjoh5UuQr",
  "key3": "3CSXG7PmJQTsALhS81bgs4MF6FwRH57LxL3jBRJEzpimhzUvzwpBCs8HwVzSkfHGQkbDJaE4P9hWgYpx5QNEe7E8",
  "key4": "3jcaXAkVQvwEvxvNUUqDAk3k686b3zkCTWcgB8mDPup8Pa1Rv2Db1YkppsxgwUChdjCwmsbToEqkx2X3VTt88s8",
  "key5": "u7SkwDqokvMKJ8xWqMTCmZkDx3paYRgdaAQV5xPov685zEe1jv1wf4NWaTzUw8WeYJepr9gPVq7ex4ZcmzF9kg9",
  "key6": "39N2BzQnbTcRJgLbZjF8Hdz8jtpPjU6K6XL1RzM7Wqyr31NFRPHW1ag6PNn4xPBK6qaker66Huz1stzbuDhyWtAk",
  "key7": "ZEkhPBTjmbwwLKqkWiaykXDqokjUWK4d4HK4xsxCBtKF9RRUmaDpmPbzEwLqPoNtSziDsx6yC2dEQed5epr4g1x",
  "key8": "Q1M1nc8KZxnWVEhD9PYJFvREXknaFAoEZahMch3VMKYEn4xdGNoxLwuYEP5NMg6x7Vj6fMhNG7arQV8Wne95zBv",
  "key9": "28fgJrBcEpHBhnoHvWaPobc2WRkuMGQWpqZLNV9z6nes6TtS6hpseJbgpJSDAYE2UkDdze1AKXAewXS19c6gcu3Q",
  "key10": "64zmvWVCLf2hsazt5RMzjZQ7vCBaksz5CPRye4fzvojfwamGzrpqw3XZYdj93s3RKaLfjbzZuwby3SimrNCQhPsQ",
  "key11": "3469j1xrR4VUXyaAhk35MhJXBQ5fk5SPWiqDLzoK9YXw2hJ3xmo5QBhqPy4ANUGeQxaH8QVcLzMETCg5LUSy9jQ",
  "key12": "5B23sLu2hkKTMfWQH35EwQuPXK7nVgtDHoppVB4a8mU1144Gz5DCTcK297FoDfUYkBCAEDMdsXUgmCrdCEKPHzw3",
  "key13": "3iFzGkPz9xyeWEdqPjoQSpKfx2scUNw55gxwid7a8AWWGxhGbccA8KcPGbv7i2tjpZEPP52agsH2fXZ45rLxuPEc",
  "key14": "3Dh5QQqEaM4KLC8vm3NCMQRyx9QX8jfFuaod7KC7UEAJtozkKLa12wGTrw5ckC5eKFZNEjUknHtvit5DL6VQgag1",
  "key15": "3YbT7H2hArq6nqnAFx5ECojKD1ujTA45sCK1cJWbijcpVVcnjiC8cGDqrwnhCaG1ZAx7xsuiqDUbkv85P8hpMsu1",
  "key16": "3Dsj4j33uktqo7jprrALg3dfZmyuFdbtQweUYncG6cQicT5gkmAxyntYx8yecDbcZz6Ff3TtbpQs2VK6DrXzx3Th",
  "key17": "5K1qd9YAfZH3AsTRE8JDoGMbRwxKhQKFDwEfzi3cFk5Wba52ZBZvAXAxwb2HctSSzUxmGXimpKJJqGuGbtTGNVa9",
  "key18": "6ktBqxLMhy5DTiiM3diS5HnEPH79Sn1T9iindwHF8fahgxHcVU9CgByjY8m8G3RNTP9euQPsdn7QqHEpgmgUmXZ",
  "key19": "2mtMgdPN4WAaEB7maRNo3Qz7D5TEWLEq2SJVaEzk1u71f5h3cNjNLwDDVXv32cvvaDVMTA6z26gLuMGarBnM2Num",
  "key20": "42RgDvSho4oZrfQkWmv8MYhEgi5ZbJZhqt8ncTJ9Wog1Qx3Z5bW1TzdVJskCmdjFibs63L2DaGSf58dxa5n8Zv2H",
  "key21": "4NZ9aNGVNY1t5q81hdJGd2A87B3EZdoFWXPAeu87cMfH7uJPZwZjH5w5z76MK2wZXAqrSwdEsK9LdW8cuTBdsSC7",
  "key22": "5F1rULgSZQNLBWeFUGwTzYMzzzEcuG4Pr6ytdivVsC7uz4zUTgrMkZ3GTx6DjbU7FeVqEv4vXVJhgBYVoPED3HTZ",
  "key23": "BPFNXrcU97GVW21nx5Z5bWN9cXPBh8GNentvxumiKsxEGoApHtXNK3XKwPbtJLpxyFRFmKNa89GxQwFLPyEuip3",
  "key24": "4ckoFDyieaEzVYQCjyGUCtYQmUoqDdoxkpQG9WZ2gogNsQqdStdgYsnYdBkzyTq7amgxcJHccJKUQeQ4UXvcegvV",
  "key25": "5ETgSDyZFfvAWQPzcC7WQ9DuTTTnszmzo5DRhiSzeCidy12WAeR77n4A7gWq7vwtHnBrfS5AzuV3xd4S2n27ZLsU",
  "key26": "4fNCshUaFidbZWQEC6HtwJ4tu8bEpjnDJSqiM7j2YLUdPUBi7tTjy1msAGHMxWbLUiAaENeRMT5vQZhZtXee9zes",
  "key27": "4uC23RcgBByGS2yz1rZpcsEzJ1s39B2gmwSFzKu8fPrqDqMGwU5S5kKsEgSTexLWhEYUcZifSrqkLn5rjHzHDcj",
  "key28": "3pxpaLLoSEG27WcLDg2ewqx5HK3sQxfkC8pxJzVYTyeWyJm9w9Ecrumees7xJ9Xb6RG85oG8Xw4WX9GEwTPPPMgF",
  "key29": "7iDSrJe5xTwHsfYkUEXd1NES2M4CzZirGC7cVepVRSG7WbE491sxwMjcaUq1kevzbNMhcx2DMcAjKVkP4RUi5An",
  "key30": "4XzvoR3MLGLsG8xT8Wu3QrRvPjyJeKpxSapUoYAAbFUTxtJez9icoL8DxG4p3HWC5SDvZ8yAc78QLN3MWBb8KGo",
  "key31": "4CGi5b4QmoXMXevfE77p9m4TnZTsW8Xg8r7u7LVRwHgZAF9f4VyFXUkKg2BoBDw52tLuv7tj8x2EBoM8MADJKv79",
  "key32": "58YdQQ9qi5b9Te4dK1o3LUH9GpUf7GXnmzqUUmAEJfRq3LTgDJmZtc9tTgKfDmFoR1dooxpXrRoFacptPPVtZZCk",
  "key33": "aFihRWSPDhVfRGjK8VKYzB9je1eRTfyk95tRAcxWzWshMz4bQdFm2GgKp1dMj21jRryeXUa2KCxAdoCiyUYxs2B",
  "key34": "2FMuA117AC5wbZjfWFJzpJsaCPX127UCWpQK6Mw1nj2va78jroCehdJuHdeoF1GmgVtTnwjhzqAj96Su2h62JuRT",
  "key35": "25rUTbWgqNXDX5MhcQV9UZiC2m4Aij9wEqYUff4zX4668S362j2FuyahinaBv7aXfFFH7asdgUTzibsr4au6pPDo",
  "key36": "GNbqKzrmWn24CX7aMFbeBKfnfQ6YH2pkXA5NFBYpGZm13kUWMdcRLhRU8ZfV1Nk4BahPtep35AcZFiaDVYmR1HN",
  "key37": "28MthcwdwBSSuWVefjzwuiRnxqNGJuP41zUFMN4b6G1EhTip497mg7tVfWoDFGWSvQGrxtBJFbaZobC8fCEAAW1r",
  "key38": "2pQENnxGufhmQBAQqk4pj7aq3eKnyATjM9pZZ2uRbP69HfMLAANdiSzEw64EyAaYHBmT7C7iwbgLRExcQMkw9FwL",
  "key39": "67GDsCiNfvqwmQcE7LwPruFBRtPfQbDnfbxasGcF5h31RJhdVgpxZxNY9tuxpN7sDHcAS7FyYEBMFeG8zXg8eVUA",
  "key40": "Z485DUaTmjqxWPZH8yfLZzrnzhrjriFhULrbWA3LG3fsKLGWEjogMUcskg7jctD8MxUUqcWMP3xLK37tJduwZEM",
  "key41": "2mxM59hS2GwY66eu1dk1hEeriLs7RroHMycvsNQNG8cfdojJRXCALGFGkXRCPnUd2JF4NqxLspYkEAUqzLgdF67P",
  "key42": "65ToGuotMRR3tWKP3Cpv6NyH1Xc1ApUS8vWKWbQBKFUN9GgL2PjGRPX9MjfdkdkMA8tuMcBNhE1qiNUkM1sXQr2N",
  "key43": "48ARA7MUjn7fKyHESXuRSQmvoS9kydr5m3bBgQwryp36ZmA5jcw3sbFFFn1uCqc8HihNsydo6uqTChE1hx3EnK3p"
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
