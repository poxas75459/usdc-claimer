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
    "5fSvtSgbW1epqp6VnKe2BN2btEyzXcjtrn4L6P7kVGL4rMnc8pC3y4NzCPgVGKZUgqy26RN3LSXRYqjJoYEKrHUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CT2Px5YKTLK7wnQKzhiEB3jZoSVELFf85kkgUEPqyBWsbBeerMKLm3sDjAyD5BV6B74TMc7ZSFtDKPvxdpgMq1S",
  "key1": "67jGFPQxND6YeHQpK1hsdwAw7fVXQYzKStbSm6aHUWKee1d5fhW5ctVkS2VhH1cFJuegXVAwnETNPiPTLJsSXvNP",
  "key2": "7G2JiQXXGsXSEPoidScAyvDapLzkYhLk63tEQC5VvMFh27gBZm7s97YpsoMVviL2PsSKUcaupqC4ZT9bmpqTZ4i",
  "key3": "4VcgmQCLuq3tVSZ9yGVbZDKqo4d3dw2voLD7PBtUoiDBPgd38yUEtpZdQYLy2Dd4X7sLMMXBmyDk9SjnWfhEeY3P",
  "key4": "61epKUQ3TsBfKzP8SmRiWqcWCZuqrREjzqMHM7UZSVXnDSSej31dAaSvVqEMmKoGgNfYSseQKLByTCduw3M77pdi",
  "key5": "3FMzaAvSQFzA29EW2cXob4xTewNuvQ8mMZ1ct5RBwwqjvx4Hkux79CcVsBEra3ZKruoSDKm1juotPahbAr48aVZ",
  "key6": "465CjvFfisGdzbWuS4B3qoGoxMs5fsgm48bkcsto4S5vFyAWgDnMvFrEDJKC5fxXKLEo1ZH9mJerV3RZjb2kktW3",
  "key7": "3VPGPPAh5RqVc2eScjq82tGEpfqNyizHQV6KQyUAZb2CmJty1mTUPGMBEMrbHvrkzHHHHitnxbYTk9mTC7q3eWa2",
  "key8": "5XnRazRuxn7dpzPnvSHTHy5Rpeqp7VTrG1Pb2dU8xgYk1ZuVJSp4tBHbaKr3PjRdVrSTRAqXcSKreMsri6FWprgJ",
  "key9": "5K2aj5hY81m8MGkNpLk5WueKUMjSm5cihNYy4aHhyYwfXgvkADhYs1bRttWM9pWaVKfZ3hBJLcgVnXsR26wxVuVJ",
  "key10": "4FRgKa7G6U2PkVMNRpf2NjKBaykvwUevfsD9qUeQnry8m9jRphkZUQwykZA8CS4cUVjv2p7BpLXSkaap8fSgafV6",
  "key11": "2vwUXVfZisr7KkPr9zFPLJguQadRqpWtTb9gybQFgXiLWSW17ie8NKuupJNHAvY5egCz37veTvZLBdLt8ammKMc3",
  "key12": "3kmQcZXz29x6intHS3Aq9YwxDjPk4aV6QPGgPxtSw2ghdeiGZiouqUcptk7s5JA5SkMJg1fkfaUyRcLSsNdaRk41",
  "key13": "5Ar8pV235xLYzSe9YFGFoh8C8yRNVuSf6Y7am78dCvHXQsFoXDo3fjUussdXZbNRhQ5AxMFH8Suc8E8rFZzqH4LW",
  "key14": "ZhzgN1VPJkYHTPBhW6ZtZvYY6z9eDdAWt5QiEiSqhHw2qgCZyXfU284YCWLxxfQkgEgpfVCQc4Try5PV1Q896ye",
  "key15": "4ZPRCJxzjenegVvc8Ehsz7p3WhczGABzWoHHPhotVUGQeCK93HCCToCUKN3Q3Q8rkk2Muxfq6xJA87fUTEEssBkz",
  "key16": "5wWeVDqSX9p2fMnfYVVLLzZPZRJ91ZxAnrcmvxL6feQBrsGCAb6p1PqogQ6ii8CgSwYkyrcrMwVuXkHH6ZpJEvT7",
  "key17": "2KeF8WbanRRQVDm3Efds1ZtyDNXhkr8jYj6M5a1XfE5WVEB1V48ybU1KiJassL4JeHhuRfGvvnciNuotZmdo1BAW",
  "key18": "WdDkUuGgV8kNMb9uB9Dh76N4Pmy5mSrHJw5QySvmWw9Q9L2vScZpP8YKUVsVhhKtkkuK7PFKkzSLRtSLfNzMNdh",
  "key19": "5ZYnu8Kh2UuG8kM4dtN2DwgahkqMKWRNFZCgxMYYvyMNtauHRuroitY3P8p6byGUTLC4au1FiuhkicTGmj5j8aiA",
  "key20": "4Avy1rkQqvk5QmsJsYkffaoTKFwdYYzjsFK9DuJ3ZMJkQfenaQgqKEwu2sV58NTg7tDeRZzcr3s1FuRaLEej7eam",
  "key21": "BWuY2X7q3btTyvq92CPcSjyBUYQqrMUGyYx9k1TvoNkhweuALJgWiqWsRhj6ZVQsgddHNoQn4TPUWmth3reP3J6",
  "key22": "4JZAGkYLhre5rGE9iT4siXX26YJdpdgiGfQU7Scc6UvYnyFz2iabaAE6EYhuPHAnJTx4ZUsrg1JZv2gdPytMKmn7",
  "key23": "5FzZc6QPmxwiaP6aZjJFZ7V3y2SAdKPxJZht95tWoY6MD1qktEgJ2fXZV3EnhSmtXonXTWoA5h1Sekyb3Wud1cC5",
  "key24": "VcYr2KVnuEe6F1hutZVJ4kYy9bfU3QgAxyrYx3EXp8bE2v3YDiPjDy73rwS9GBn8xAZaHPBJftqLt9MZ34wE8PV",
  "key25": "2SsLrHYJCJjdTFb9ab1g5TFns61vi2u7FGj8rLBmQMTmcqKpPFRmRAQP5q4u1qCw75Sty3T8u9XVEaGRdmEUEH7C",
  "key26": "mcaEZZRUANk8ov8DNEcgUzhHh1p1YLKxZvN51vKEUvyQE4j8V48DwFcLBUPUfPMgn6iNKYe18wVePEf1BEnB1mY",
  "key27": "3Zry1qovmFx4txGeC3yJEw3UxFK5i9CESbk5GLMhmHiRe1r8mW18HPMCqSXpAcX1UVSAp82TZjCvNn4tZz3XPmmU",
  "key28": "3so9KFPCwHXJtB2zsxVaEW6oZ5xo4MsJ4LPkKRiTzaX1o9mpPosDUbxYStHvgeKMHb6bSS1vyMzUcfZShmUss6xM",
  "key29": "4YEKhb9k1WMdiwnhYKebzjSny4vhWMtHNfE3vdXtVpa4yPtmh1jiwPgnY8bACHN7fXRaS7RvNqZM147z5cQEuWXP",
  "key30": "4iauJqP7WJnEvMSZGfqvNY5f2SxYiQLnanx3okNVrRLFqeQf7Ycj3E5Ddppfb44theFtp1BXZXKEc2X8HvvtLt5a",
  "key31": "3Rx22ugpA7N8Jz2wxBzSDmAKhjwo56khfyX1aATw89ZzFQik6QGNmmT2NryTEyrmrmrFCGNy9AVuXaP5MEfxT5m2",
  "key32": "2b5j4Rnw6i6nKtc9LfpezAZY58mkpzrDRmu1jaaFaKqXsxyrjnuVRx5FcuC7CmGSmjUgfAJnZX9tAUkz1RFmaezc",
  "key33": "5DMNXWgospnio1vkUDCihin1yt5EZ3FE3JBzJygVxvK7z9V5ZWqqqZHQkcJAoYD6GiTb5pnq64e9MYnxM2oBxuo7",
  "key34": "3LXYT4T6K5L86AEBmr4bvnSswFz8PSYkzpdsemcKC84SiahFZyXEG7mwWzkWNCQ2Rh1f6KDJALg7m4EDWLjDF7UG",
  "key35": "2beMYmP4vqqHoHhRJm6ULR72gCS6PD5RDMBCBqXzvoiqw3MtPkxJ3M6eFSbBR2KQ9rFSoccjYUr4jrfP5fftGyjM",
  "key36": "3P9WrbFqRX2YLXMYWR18fhP2N3Hnpa5tLb4mpfLxoH6MN5cEHmrKz5FHJMozQSRM9auu7ySVgEioTfiWRw6b3hNm",
  "key37": "3i3wV8L3wxLxT2tQioDJ9UwWvASNwMyGmskmySJ71ABXd4dzkqfkfGFtUhtGB8DULBpWnnkp8CoAffMi6NmYER5v",
  "key38": "47jhDks7L9rsJ5tRyKZyC7Tff8k3iuHKiFKZJUg1eQRfrBsJcs7AWQRd2Nw8KrSAV3XsTD1WKhNugM29Th6S9Cz1",
  "key39": "4ynC4KfVvgEHp4p5Cz4cB9zSPbz2iaeuNCStiNUZBbp1qzUYppV6tkr3LE1geQE4X8ysh2q6NWSNwGxGZstjbH7V",
  "key40": "4gSAWKQpfbdtRcCtS1qvLEc5ijLDzS9eMhLpPLX98h53WdGSnM4xPrN2bbHkgF9PbvTW1HZhqvrgV7J93LKfcjRT",
  "key41": "5RRbbUdkKsnJbCUbrXZyqeu74KRVYN8PgdvMWKoFef7rnT4BZNJmxBsRxLNkNmDzSgXrT4ba2Daq4VrRDYGox9G",
  "key42": "PEnyLdVx5sKQcFHiaaXitvkjno1BkAheNWPt65PvxsNRXmnvwsc6zndmKY5M2ahzEeX9pXmvw9T41Rcfx2nyNJn",
  "key43": "36JUpjNJRvoswVX9VGEE1KUksFjAmrz8X6sfbukSSjfTvtbGpKT5JQfzDWxkqk276E3tLEEYXENb4sxbknx6zs7p",
  "key44": "M1tQL8xFTUUb2wKspFA5aSG5qG2X6Yxyc5fYj88uTrmrQmvCC3L7Mc3iDdbC5Gaf6xnzgawN6fxzdebLjoiNJFm",
  "key45": "5Tdbr4ekhcv2P5bnc4rSTKjVoJenpRzuhfsZKX3JoH5a8RzGzXTRSPy4GxjtgKdBF4jPBRbNn49Sykjj8iY6Z5PA",
  "key46": "4Nj3CD323zteAhxu4x3zzS8qb8V7XVqPDRyRgHSKuj7H3pTChmPmVipNfWWszetJKoM9vJo24dCw9agSgMpuTiQ5",
  "key47": "3k4i6C4gjuarYFm13KVNeHUm45oJXfQ3KcA5SUaRAnneu5zBirrj6zDt44goQXJWp7PH6TRixZntDfyszanjeYJY",
  "key48": "31qgvb7kjpZjV45PtQPkXuuuMimf6tcFjGVojdEjWA7VQtoFgc5Fy4SuzUtoGx6Q6frpxUho5yXWu8rNX4BLNzk4",
  "key49": "3FeX8Pqq4cxR924yuHLbzopv3jmU7n46HEsJDZwCa6ZiaPYBiheVLaHbEcaEc6z6k6KCBn9TsLSQeuxwNpSDsSLu"
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
