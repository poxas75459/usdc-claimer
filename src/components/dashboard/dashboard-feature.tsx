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
    "5d6um31ric4itm6PxKMvzfMJApN9DkEtAAtE4pvMwYai1opeHLXgagH7R1oc61CQyT2TMB6n2Xs2JKJuGE1gxruo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3skhWxBZ95g3aH7n49MrmSYkM5Bh7dBgaQNoky936RpeAHLu39ArxoDfJMR4e1kkYHD8RQARASAZ9FQzxHgNYC",
  "key1": "34XbXF5cz1pohUjMfL4zYP7298ypmrnz2qo3PMsb6MpTtS54KME5132umdNq2w7ZSpZe7uJN3kD2tetuvxcaGHWW",
  "key2": "4C8Wpt9wURh3C8fSRa88FtuhgUf1X7bzRRv3eHGMVkieVgd4LZP36TyFEtGEhhQsduE8xvPEAXbA5ftLy25FkUtx",
  "key3": "HbzCSveau6aGHijUCwG2L2UkGkucsGwaH5oe9uxJ1uoM3bfXVhjXffP1d4rDTTgVWxxPYNhMkhVshLiXBcJNf2v",
  "key4": "2R8FVHWzEmZsc4RseYPvX2XXEbUDMAQucWNmBYadzT25CHsNL1BDDREEAopKxuULdCYrvM6QJy4NVf8oQHWE4LZR",
  "key5": "49HNMzHAGMNPGfk6rhQKn4BeT74dCoQzee8owLboKbJYtBVu38EaQXwKAUhNw2VWaJ5h1ZfKZ1vMsQZZoPbuAo9A",
  "key6": "53jU3UUm8bCcKTz6YZHZWSW33vcTZshfWAkwLofyid97ke5zxcYzSrLoqE2qxKbXErxC1tsyZdYwvABWqkLRYKSJ",
  "key7": "4U94StxfSU7MGFJNLThT21qtZdaveoQTLhMzddZezEhsc2yQiJdkNQzSp5UZtBo3W78X9dxXXcxVS1hsQGSN797A",
  "key8": "Z3j7xacZMNMWuzfYEcqEQGWWAyEVqoudrLerNtHRKSucSfKXf6bZN77c2ty1p5eVYkMHs6KrEEcrE5nnpD36DdA",
  "key9": "24wSiH5McD5H9MtnpPPoMZUPHu4AkbCju9ca2fBeA2QSngyKMMQFG2trnAyjoGruWuDkZwnLojX4nthxKxSsxNgV",
  "key10": "5aysstvU4RbbnGLuYTMBM2nzmJ1TSUmpPxMiLyH9GjoLxiawMqWVjESxJjmxNppEwfDzxcfy5VboWLwntTvGEZCF",
  "key11": "5g1HY1tJuu6kWLFjLATc4ST7TZDdmss3FRruHamPyA9TErhLS1cCWPaoAY4inLvrU8ydDCiZxPjjfkHHwCQQu9zn",
  "key12": "3nqbF9WusfTLeVLZf4fFb6KmUqCQ6E3vuGANR7JhQAodD6yce2uSfHHJnGBj15MzphHVcbe2ySQ5Sqh4hEhbN51U",
  "key13": "5aF6CFcUT7jvWpFWtwJop9GpY6HVUkzo1PWCM4dwAdhPcZyfZWS5T9Y1QfuVgvgkj871FmzQWkCvTeXpZfNELbKA",
  "key14": "2uY26nHua6CLPiSgWUbGM1n3xtcJf3qwcfJ44peEaKhsEw7SJyi79Dak64yjaAPwZWeyoHtBrD2NQC1MeK4eUUWw",
  "key15": "3WgqJ9d1KNY2U7UeBfRGqAZZh8EPisp8erJKKy1vNLqrwfXiZZhMcRmYRpnTZ9V7UcX39BDX4WEQ3ytohdP3shbj",
  "key16": "3fwXbB3D5qPM9Pumky3EbJmSTQYTd9Uhw8QZyL56i36h38f4dzzBsBXnDfWfTCKQdqiT9u64ajCzQtQgDsgAivrv",
  "key17": "6MA1fptx7o8FJkvSqaotDq65J1PAE8vGdhd4c9kYRFHvc6Gh1U5b9mLtauLeY5sWtmJUimzkyUazyb6eJEC6iNt",
  "key18": "GpnE7APsPGHRc2V7n2DDfeGeHkR2dhv4i6SDii2QJehuApzevN4zTH7CwYZMc5SBDaZCtN5uSxFQtjW2bgYJY2K",
  "key19": "3aeC6TMzLy4n5RBUZfnTRK1Fsr2miqbQeaGMfy3UapEjmXQjqoxktUYJeXF9dP8s7c2WgNfoZqQq2RACebSZeDjC",
  "key20": "y9ZDKHcRwLZVmySsnDaNZhiaYb2ZcHD6PB59HT6VQkDedk9eCnh67mMRG6Tqh2vMgrRYEZi55pujPbHcFaKSeuM",
  "key21": "G6BjzboywKorkNtZEfsfZYzKpad4yFGHxWhYX6kYHME7zAHHH3qaU6LN4J2dS9PpMu691szo6KB94JPj831cZ87",
  "key22": "2iJSrZihx9bsjdVd1rkad2nhuTLKdJ9YpTofXeFUT37aYqTBtFRKP144YnwhbZvpbNDPHMwzzYFGiFtqZagUngdV",
  "key23": "4AEva7srHL5Mh3hxirci3PdVtG3p6pU1LdsT8TK2nVUgU4KWtbsoUoau8FXfC54ouvtHaX6nWpgJfwUD71MGBGt6",
  "key24": "43prTpzScz4RfqLonm3G5KTYj7ASAGGD6MEwpFSpc3w8jghZLGrJy1T3ftsfnjyCd2pqmGsG9dykRaiZ279CNcAq",
  "key25": "2mAgPoympBus7LUM3GWm2K7vEee7twNDWyfNfHwRhhPqSXecz8QqrKNy42uJbRVAYPdQGAFvLTRATr6Ef9PBAXvD",
  "key26": "5sFcGPeTUypjdXaiDYrx8EERL9GFrvRKJ95g5TfUGAXXKbZYYd2afiue8V5s9aEefoLFDnXL4419TTEsXn6bqBwm",
  "key27": "3ViE6LVSjtvhnUPvnGGkSZrrcWBuFV8r484pxZqmB6EK1nrvJFyvNTgD2DFck5wqfCQBjtVW4kP8NFCqjg3XRArY",
  "key28": "3jwfMtxkBNoFyRRPcdEzpasLLp3H7ycXnej3ogpYDhnHTMptgdkUd4VWDjdKn79LhGT5uCk6gawoMaMPYdmHn2eP",
  "key29": "3Vqcsq6UPjnCzoE9ptF38mKakCsxCEQttzLqC3mvxsMc9r2yRcnEcE9DLi15YTxeoxCk8UbrNxWAdJP6TjMmTtSu",
  "key30": "x3W1wv81hWsAZsMyVyPsnDHactLFDiaLETEFTfyaEPeTusLDzb1nu9LS7hCo8GXkLWv9V7akEzTSin3HctW99ae",
  "key31": "Hzn5Ky4LEeD3z9nyGaMbkijNfL19ZJ473We4uJLkTkfEhy8nkF3BzT3KNcxSubAB8dGpfQazMPMbEmPViGkK6Ta",
  "key32": "2bubhgA4eA7dzHAVUgwq2LQkcBLPTwfNxr6Ps71nwNb7JGEPHG7HVQeizA1dt5CQCt2F4WhKUuoDTNqjZELVas4x",
  "key33": "4YgMbeysQc4jLRYmFxyEo1Y4JhpcoXF198fewLNMxUczzpXJSk359sx5b7nVmjok595iLuFgT5hDExXdXUGNNpu",
  "key34": "3PtqLTHMM3RCjciTcecpixprqhutp1HjtJGJhKYsqcjuGHfXyfxvAtqo3SbmYQdMChJNekJAmuBLMcVGXEubAPBJ",
  "key35": "5ngGnL7uFHkz7nXwXduUCs93hXzEGwKcu3XWob1b8ZRRdezuoXZyCSGmWTA9kJNaTn3uFPvMmUpELrVamjuUr1rd",
  "key36": "4nwj4hckSwyRaDtYnLJi88uNsWsM16vJCt1j6JUfHwiY6uzSFPt9dhV6Q5rJphC68WY8cQa7grB7gvLsWQeBxEku",
  "key37": "NZLZe4XGwFzvTY4YGVQayZP392rgf1A4ZcT5hCYjErYyGJcgB12qPS1Xm6eah2sEu9uEjbLfRk2CvMHA16ng88V",
  "key38": "2yW6msQSkMytKChdKpnMW66dCTVZp9GF87nAEEXKHJA35uWS3EfoJU58jH8DSqPJytcJNxmqsBDirTZoxbRKubfi",
  "key39": "2mK3nCASon3pCLy3CZ9eURSSfZLr5G5huxcB2Ms9o1nqD79sVGXJ6dDYENkvcvJKtmy6kkouXCMe69Zbw9L7DVvx",
  "key40": "32gs1WJwt7Trtaxxu1nN8Nd1yBNE3gavPeqFxpSxM2AMKw4JeydwXCyKHUgbiMaGW2UFCHq4nYhTU2PHiNo3h4Ea",
  "key41": "66iigewGXhx3yuNBQ6kY8SHqmpjcdGT9JpgDs98e8FSk5MzFj2c4uZrX5Gp4Ma7mkosTnt1uWiTUDyrJNvfUqKe8",
  "key42": "5wnSDyFVoqLh7bxgenMPi16faa3D7XGQAZkennseu42DmbtQPgKr6scrMB2sonWDSGNU2XF7oWUFcYUvRMsAe62U",
  "key43": "62FSbYg6wxi3Xg6mQG738SzdWiuyuK4FpMc8ErePrfhgysmGa3G2KbZgLoh1q3s4spr91uVkLSL5szbwRsY3uBx3",
  "key44": "4q61qnpuRegUwSZsUDySnySnPPnWUFuZ9kzng3JDpvBFDNRM6nSV8LGpzQiqN1reAeUtbSZi9mAAvvEmwTxvfgZx",
  "key45": "4SxkBJLtiNEXBwYWKite1QSG4TceyxriJpPhNaCULE8A1iS9BQTnAEYP4yjwxTH5WiPsWEQzKr28PHrXNzrydcXg",
  "key46": "3y2UyqpxFrhc6bz7dP8mFrXkj1BH4Nwxhpf6c2mnLQERRvUPoRT5sq2rjb8pycBKfTT7TPXXa6FQMpHLitXaLJTc"
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
