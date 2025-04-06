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
    "29ssihxFKov2aB5uw9DysVHPRa2jwR8Y56XmFp9kMvo8qkKFzL7yeUWBk8aD7ia2uHDWZm3JL72MafGtcU5fnKLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "576gPX5rpAR9t4eSoTANY2QkUTs1aPCpp5L35C4JoCNU5aFZkpmcxf6iyBPT9sVf5QsnTPq4H5tNP27i7UEJrexS",
  "key1": "4ir8tZDPBFZbu7CoamRQ2TXpdAAn2EWZDYLmZSXM6WgtzaxckJRuS7tobwhodgtAXtbifpN6b9t6sFWaSDNeEZnB",
  "key2": "45J7Vtaupb29PgYU5y9Gc6p4i4jrSgELmVXSw8CiQuJe9URRvynWJhPKSa9eYbWv7eYu9GgkBCY19aQ1duYfc2ue",
  "key3": "Vbx2paLSLfD3uBvERExt9B1v9yGQBv4bDfwi6oKVp6YUxDuMfDkipUJBjKX1sUkW3UCATuvk2EfBceTG1juJZE5",
  "key4": "2pujr3m1E6Y7jjSN1mRAwvuuqpmcFFYd1XbCw8JFXmM4xCEA4hhM7SC7y3BNYxSgrZBy19fEuA8A16XEECnpgJsq",
  "key5": "3hvUs5q7wLg1FSpZkKovMPN88REzYU3KQpecoZaQ4Zs967FtKT4pndLtdFMsm2VWcJHr9K2w5JPr26xzVAkHxXsb",
  "key6": "5PfKGjuGQKbF2UnXjPovFQFKLpAgVfx2UpMuJnXMmS26BmhiCmBuBSYtw7amD5buNrpjSY2vX8kxS8NyynFegcEL",
  "key7": "2ZFZGKHnqjjpK9fxn6zYnApJ1yMd6GvfVU2sboTCtv4z7vw2fKz5wjJ916d5V8yXE2PDaUNV2FfyXG8xQitSKkue",
  "key8": "ybbQk27qN4mCw99BLq1ZgxAHGFFpZYG3WQcoTUM3wUuUFMxB6VfRz3o8iNFavt1rPbkk5DkHBByYe9RoWdVVhSs",
  "key9": "3Qff1mtADX1zjDmSPVpGzbkyU6SJNbfnKXL3ptU9uBxL1oDpvsgLwG6qKy1BXBsK1L7wUb9NsFHoKwsujPwBnVVV",
  "key10": "2g9rJ6SPFTL7vbHkHFZdXBtfbKYjk5HFxyzw8yDVmXxx1YDSqBTNuDFMfzh8HK2mqRPzqyED2g9sLx47cueGBy9A",
  "key11": "5nQRrV9P1tWTZDC6p8CvFkHxgGfu6bSzwFEQ4HPeZzYUuDgGwW1xcxJ8KZuDq2HQvTb16ZokoGMi3yfVhBqhgYh1",
  "key12": "4XMpwWzZZ8eD1uAvDZcn14F8g5FJr49uBojEwWuiip3CcAXBhWWfrwQoRPK4vssri7B4umzvFm8CHC5GaxrmtuLE",
  "key13": "3XU7i4VAUiQnsroWcQMGZihNeU9GBzpcAGGzQCGUqz3LMXHnjTYGrRjcBKBXy2tRVy1UcNiQQv4pxqez3i1LdQ7A",
  "key14": "74QSAacHwVyCjdwdsULHRwKd7GSeKALhM7gDBnZwcEnewcXsNrWfddFjW8gbs2k7U3QwKs9FCoSp3QTW7ZNvQVD",
  "key15": "576QWrDadxDvvKyakQQMGWGzP3p9R3LCP4LeJHWXagbsZ7kHWcXUFZR79pPzPfh4wMpUFU7Dyh4PgWSiMMh78DiF",
  "key16": "cy7FFSxAFS8WKSmaa7xwirGrmBmdjAmeofgcfx1o8YAJHrFvcwxHVjFzgLXiYriGLtj9Lh63khDRdzE9KPbMV8J",
  "key17": "263BR3TmhyHEme6WLbxpNbcJospYEPxmFVdp2wiXz9CsrKBGx5mLWwHszSSj9XMWFTuLfZAbytJuxZnTxfgxx53w",
  "key18": "3DFuBuaqVGZiVvrYcC2DGWWbjJzCa78sJjoLNtH64XT4R4LULcWeWtbqMdwDqkjynZM7kLKWHHBLGn5jbUUZwmJH",
  "key19": "5WzJqp1d7vPRuUmBR8XBzkiA2JRLvydtm96tYwm5iaXmBjnKzV9HPgAit2q7kRsViejF3EgD6Y2Jsg6NUdRWZCHy",
  "key20": "2xoJF61Z9TAJM8iKqn29cujS8yaduVmVg7A8vkUteKcdxEDoBTmCqfu5PG91DzTLNpHLS74q4qyS3TvNWbKYSvA6",
  "key21": "33J3tfPdfw26QewLigrZeJQwUR5frJqjoq7BMSvWvybjnwGTmuxR9bExv1yhULpbk3doeevbH31wSNoGfUAdW7SL",
  "key22": "2iP9cirXDuVkATb11Q1csDide5KF678yoJit2dCD2kNHSiSowJayvGyWRzL6UnXFdaEQg5QWoV3nFRLwony2s5m6",
  "key23": "5a8KPFLTJXkVzcygyX7othAgW8VFtPgdd6gUPnFaEhDZDcV7kQzmK8m7SfnCBUyVmuQ2tAF8syek7budgxuY6hmu",
  "key24": "xefCwPDjQeUTZgMPe5AmvPkaGoS1kYfxoqoEKmRqyrB5FpRwCQAjSDEneexjqeRMETWdnosZ4c3aArKo9ERSH85",
  "key25": "mZMA2nwJkj6uVTwj7zEgC4oc5tNNpqRcL9u4oZeQhrmbkBNuZBX3HF46x966vKxyKJMv1iQzGcWJJBpG5f5gACe",
  "key26": "2iPCPGMnoQ3sRaYvnt68N8UbD4nYVHYQEyyzBFer6uNqEi6DehzGdukGdAWQLisESNdsdU81FXsmy2F6ffHvmR9T",
  "key27": "3Ab6CGA8bQ7aapDboC1VkUCthSa6EpLGXpVi3o4v5osjTEt6dKs6jiYuv6LFFrCsZfj4yEyVypJs5phk2LQxBurG",
  "key28": "C3qVHLCujhNQs8ir7V7eLMQoWLVo5y18umStGQkfEzCqxd91K6JtT2DsGxNR4LoXuSsUjmzjX3nzBx98udNwHex",
  "key29": "2wdhNfWZLf4UsefFsuCM6EUDi1BKkUeoRsDcLW2KSJA9EtBD6dudjWFVybjEXXgVTYNMbVj5oF7XHRFqEzrFCPBD",
  "key30": "qCqbtQW6ETmLneo4Y9y4A2bKoBX26MUktiTuuD6PJsdbBiGMZj3pxSZEAbv3rjyLXuh9XAZVEkUkbs5kXuYgs1q",
  "key31": "4NtkNZ47fzzo3mR2PY24nt3WU8qafGjDA7iUbSU9MRbshmnPjEtGWjYrNkT9VCUseGF3LPa5EBnuZqGeZTb8H6Ad",
  "key32": "M8uvFdqDh7X8Yrkkk71YvLVpY8Zs3z8VijETR7AaqKSX4ei5XRztnuRHzo2yaLYoCYswPqPqrmidqyJDwUZkgTF",
  "key33": "DubvnR1Jmhrn5qGxvjgLzVX4qgNCm7E3DF5jAQurerGJidQosFt6uzJyP2biFDLNniZDxragNthq3Ak2RM7bn6c",
  "key34": "65Tefb4uDfdtjASWT6qemvXLrQLdPYwVbf7P1Pi2M8A6pVqh4NKKy7QQWTdbDzPHHF37Jt93EgFCtG7nRxVE5bJ9",
  "key35": "5DTSybVXvmcQ4FRZ4A987GG581MFeik6b5RB3YGHuZ9yABbcJceetkcpHCNKSLsN4cSiXsF8KYJuz7VWVYkooAGB",
  "key36": "2s3aw7DxYNMGXzf66c1DoNWRJ81TZDQqdK5HRBPrmsoz3XiWuuUWFC5xuHvA8qALYS9aJH1KZ4d8Fua4nX5E7QZh",
  "key37": "2J1TTvTMyKFHbH7QZV87gXLY35yKquouZcog97Gmsve4sXjZdjBSfs5ZRBoC2BSEAs7LGrAgbgDRUWyTM8GUznNB",
  "key38": "4cBLAygGN3sso4arK4ndJ4fNLwfwP1GC4SrmTPXZBXDf29W5DSfBaBCHzTtngaUKgce2K2Ksp2dghMs3jKj9pYfi",
  "key39": "TdgZZwwcE2yzzh3guyvbWRsBchkpycgtNJtZvoqqqvgPx3bKCqYYc7BusDHcDThFyuGGRT7MaWp4T4484Zs8EYK",
  "key40": "WxtSNFWtEDKLyuTtJZBz7SqfGcWABBJV7B8FcSSczG6QKrRaSTeLuW9QhTefZBYaRfb6QQWvVbrW3YesYqt1ad3",
  "key41": "21XBUyv6wNgY9R6iRz2D8ociVfbkJUipkcwiGZRtdLMARh6bpdaAFJa7GAuWiiL3K9tszWzAmhPu5LKGpur8f7oK",
  "key42": "ff9FQjJkCcJboFa97jRke4Vkdn7HyUojxVNa7zNbNwBthhKReg5qDAfh36G9KZU2GsrR71QyTR3jopV7TuoPtKc",
  "key43": "d2QoQ48YRs6kf5QP1DSEkDtUT2CxgeiGWkkc9qRHDYWdcJP88YshBUxZT2M8ERbLs9Xu5rXxD7V2gbCxYZ3PUF5",
  "key44": "b8gP9L3Rw5LDjhHjc9pjfFhaoioNNayWsv1inAPKgbm1UgcgfXdL7sri6y1Cjsqwxy17yrPCWg8NxjpquaePb6b",
  "key45": "2kB6gdooeqAU1P3iSKdb5zQBsjGbgkUcvbMfDubZgsueYfgc2NigbwuF79PXmgLiYqLXWZ4cKT9cbopWvAotUmV9",
  "key46": "5sSSf4JLiKwUHW986u9vzut4YBaG1FmeH58S59SnNwik7CZ8jV4MhEPYmRe2WcfBfGSiH7yGw5nyuZZi6HQ1S2jZ",
  "key47": "33FAyanMFVXVuJkTVL3pQzqXRCaZWSB9HYqS1mc2mgs5EnahLxLNgr11jb3ftaZ6uqpMtL8MFQXeU8NwrfrRKJ4Y",
  "key48": "5DpiG4Qv2RZkc2yKGAS3duWQmY1ESapLcGosTy8dRXANwJf4C86uofBNWGhxxdJeXLN2Z18342RwA5fh42ko3ceT",
  "key49": "35CwTgeFAYwPwRg4s91bo1tJZUzX2wgJjiygBfhLT4HmXXb7TZMatPmTbFWfiEDxGpu2fv8z1gBNkgJRHXGj6Ugx"
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
