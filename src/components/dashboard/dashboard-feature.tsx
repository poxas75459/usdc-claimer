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
    "3dbfyEYnRVL7psX535C8C9tRkAyn7rh8nGTToX4uJc7mer45Saq9VU6kHw9yQWNptUQv9EwMibaEJYQXCCE6QyKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NnUmQrGNATSCvKxCVhZXcE6uF5RNotrUN4n8VXeB59zRmGVZYYRg2maukXS3rK5uJWkmT2Egh8XTz7mwckxgrLn",
  "key1": "WktwbZSGSRyQsipvTfCWrqLVTNWRDkbvEtpjHcUbsGAR4qBk1Mer3w7BQuL6TGJd1SRaJJp8SK3jP79QSU4LPyW",
  "key2": "3dNp9e5bp29jAsTyyBfYmvuA9kpLf8bcSMp2pX6cFBrAeeUMHrFGrMEMuRQUE5HZDLzKow7gE4tPAvS4jxcXkpdx",
  "key3": "mYpidXanqEJ8mTXx3wUw4GC8LFXfM7BUHqNkm4ULmUre8zU3Nt1zbnjQ9sCBkCUabcb2g9WJ3d6fNxEkKSms7WE",
  "key4": "2r6bjXZV5pkKPdQqsLn52TW6P9vP6Uz4zbyShjkSpW18WhWY33sRw5omPQX6LBMNAYvQXi1vypsiviSGcNNxweUA",
  "key5": "3J8BCDG22fh9FKJbVAcniNoPux6yy52cj3oY53ErCLzGRHs1Mg3NvceArvhr1fJcpjGnSU5DJqr4Kh1aAa8KCkKN",
  "key6": "3kHEm5h6Nm1XvKVsyxi7BaMpsXwXsJXN8USrRiZ1SBdvpijineR5kQ6R87wUDttLPBv93zhAWHjngnRnwovP8TRS",
  "key7": "MfcPwTLdwh5b5MFsLH5fuHD3qtTe2upKqwujrhRqBEzwmdjZXojL5TQDrv6LWX8vhhUhrtKCUJQayaWmvXTGwPm",
  "key8": "2NL8MT7UPNZS8RRpg9WQf1tnzcgRK3Mv7Lt6zE9BbUGm7WKWxfBBWtFp1KmpPun1xDU6uXTgXT4oweYiqzQZ9G42",
  "key9": "65pivBjuEVhCxmwHq4a5dJG23B2vJhhVAwdsUqV5zHQCFuPHUY4zw4ppUxotzVYPWPbiSArxgBYKmvWRCwbouH3A",
  "key10": "3DFJQNBfLpwC33muDdpUK3AxbGjVEk99DNvZdUb5fTf1BbhYYCUt69t6C8LPTCoZWFdQhg4PmSjZcRCXojpGUE6k",
  "key11": "251hC5yDWPVtGgHxQYKsZmXUDQ2y6qE91VykymEcXRbuDYCaJWB5bW9Ckrw43g4pTFa9ngQvpgjZc1yKx1uTBRN4",
  "key12": "zM8rBQDHx523uWgb1MsMJRUWUZEbMsFfeZGJn3Cuj1CRKBbkfVXKRPKpMbn6u89KN8ZhsK1Gv8r6wssEcU1dPSp",
  "key13": "ogc6fW8ZSSdzb99qjXycEWvH9e6PnodtqdCjKc71Vo3nkbvEbZMWptUCewHCUB8onM3KfzLtpgpWPPxQ9a442tK",
  "key14": "ebfdS48pautvAARu84gpobuJHkeLYo8dUFdKdgpMXYk5NruNbNdQ43yDmshgKJH4A7S3pdMLrTSpZnYDhRRbthG",
  "key15": "3BdBoLopKPsN142K2xYnhaZZqFg1UpP6nv9GivA4VZaHg3bTCMU1kviJkU3faHV3gDuFd1Q3tjgZcga9HeUC1Xqs",
  "key16": "4WbgLW84uipjvhpfhDxZFg7XtCed4esgtuZXpyCCgjQVXhf7sfiVPyLAyhB3dwYR4yZ9x26LZwMCsHmYuFYT536F",
  "key17": "FASwNP5iZwCNDmyixe4CFxcEpJqufD2UNHWpEmEzFnv6jaZHgW59uxTNzLViAfXjCMFCZuvm6G8Tq7WNmEogRa7",
  "key18": "3gtTKQwpePcPbMNDLvTvKcXW6cA4CJUMhWD17vJwaFC1yvms7sv7g33KXvvGGYLWiFFTDsvS3vwoVGvjXQj5enRB",
  "key19": "wZpnn4Yiu8sfBVK7macoH7LHQJTzaShe2hUek9G65ZsNZZ7Ag4E8PFAkPMujPUQ9Vd5FdGnQDvh7nMPVwreAZ7W",
  "key20": "HaWYZnxFoEqzpFwiTjjxF5GKPPQTB1r3Qnwvdjg8bexQCZyDpZL2iVAqzka27hZhGzMxJVKpJKZh4CvHkw4H3dD",
  "key21": "5uxSb8efuqDpSSbEeHsbx2oEX7R7XdenuUcMix2f4vt14QqgffQvCQDonnve3TrvywwPiVfwvAsdhe3JcPZBgfBQ",
  "key22": "2yVhH4smkrcRKzF2JHFm64i8UqvuJAFmD5ghPjhzhw9dq8z6FNdBe4TE2yqcD36dM12UvbzyHj4qErmZpEUqUePC",
  "key23": "tmbHBqmWkE2LTLv38cS3HuhUexfTXYGn7ELQ5VBnZuqKrVGrWPsUsaBmdvQ9x7ju2WCXDLLZMgWnF2RmQxtS7Sb",
  "key24": "44VShby9yxe4f1vVBGBv6jgJHGhtBhn54r5cVfcdBUDFVXonaWbrtv4tJ8zxoSJNJtiE5eM7fxWtP2sHSmPVfaF9",
  "key25": "4jSDayrKnmFmMKQ3ApaJUEkZmJkmXpa9JjojweL5ni34p2xZQSj2nxHPdmx9Rb3MgUw5oZWam2JCdtWCoiwsnJ48",
  "key26": "5LP4FX85ZKC12ZJBdkjZeTVZYwCLx9PgLXSMggubkH3nb1mfCsnFECbgokqvmySUvAeXp4pVk8xTyRT881Adeawv",
  "key27": "3aBtzZQ9FpL4bXXa4zELsA9cyGRw29nm8jgu7EMPnn92z6Qb5BxQinbTQE6GCZNimjhygu7NX7oPz5hJxPP3n28g",
  "key28": "3R2ouBUNBExM4cyM3vJ4htdtUqewmJTvuKjudsGTAog77fWxujoJn5fCyVjvQbcpLgUZutWcKp7WXVnFQfuZVcQe",
  "key29": "mYNXvEVaVyCFH6h765Q1zDCTbD9SMqP78yvysGQ1dgkTtHE8XDnFi4qXpKZLmUzjpCw59QE99jkMnnF7n427xGr",
  "key30": "7mRcy8REumc84qS1cP3Us36kDuPaPKmeCZ4bq8xb7xpxk2VcaPvNfbn5DYncKLUqR7gnKL72UcxRyMUU3fayDPi",
  "key31": "5BG1oj4qc5wEqJkN5hZGcQ2i4cYj6oqVSxNJJ5XqvRBFTQJMHdPdt6r5aDr4YUds4iQHTMUhMyTddLePg5TpxbdF",
  "key32": "5dMQpHDdafma7bQUxQV3qohjRwAECgbt1muc169pCNYkPSdhZEjwDiy98HCG3gbNjXemZM78eoTr194w5tFiqqwE",
  "key33": "518eZFWeu2LbesEn1pnGRUxuDdYLUBLaEj95XkdvY5rLzvUfi9EzpAZzohRWRwsnwWDaiJdNPFMi8hx3UkynpjHW",
  "key34": "3XZZmeYq6FHoL6iUFVe3KPSKp2yadrTWCtsaLmEiE1zi3KERtdfSJWQLsxzuzdnQMGLyrLA5fmfhMXUQvd7Sgsto",
  "key35": "5JTtuCTLtMi1XAqoYjStbw1WyXTs22XJM3kg6MxFkq732h9WadibdNJa8FC65HN5WiRsB7h3YxwXo6crbuwo8TFw",
  "key36": "3VsAvsxkkeU5URCTNK4GUuTVLWpRpodh9bz8y5HThoHWPZS9CiG1snUJnNHqypNMWfCznit7Sp3q5ZsCceYkGPWk",
  "key37": "5mpMgH16ZFnv1DCq6GTx1BhdsgBSgVtLZFSZGKwiVqLmf2VAjZi9WfjxJXyUxYhLZkdM8Y4gCBuYFPyGS3teZGNn",
  "key38": "3KDcmDJtJeVxG33JWYPte5G49AoiTq95q2GvacXr2yPym3rnAMBiA7qEf583xZ4R9S5NMXqbU8ppAnt8DRzt6HYm",
  "key39": "4DPToG1aditUqaUWfqExmfvTAkgHW7dVUyHiUyspHLmpy5x28uvsy8oNigDEXKyTCB9Yexf6AhAJu64qawGtyRa",
  "key40": "3rAow6zgrUp8AuL9B8eVZBy3wmEnCq4vf2ThDy9sqHdda1SFgU4X6AWaT6N8BMid6zooU8piTmN6scW2wSb4UUh7",
  "key41": "46Q6vBZjokNQst6sBZNp8HU41bx3bAgpUBmz2V1wFoygPHK6ceuJ6NeXJDWTwDkgxMytKgEAwyARfJf9jgNu3KzY",
  "key42": "55RRvuhxQ1oRCNVihqf9HWxXrRq7QkeZ71eewCdrf38pmnFp75NeaQVSFsia5HBwZvFwf4ytRzb4CeXZd1cAS317",
  "key43": "E4q2RkdbsL9SvrPjBENvDdLAyyG4v3w7a3AFm2SKKkRSHaTpvo4whAfrLZH7xSVPjycmT3XkmAymstMKRw8QT6m",
  "key44": "2uQqHEiZYkemXdZA2q6zJLFj5i51uFr1UDTkTTCoWrdkMdCJGMpvoehrgqQdUsacqMcuQQp8gC8km86SASn6T8qY",
  "key45": "LYhRX6ctntKUUZRDQ2S2LcsNrf8cwJgadFgYWkQU91YKoydXXcwium3y7VknzJocubtZWRDzLDzvKxGBdgajay6",
  "key46": "4Vq4fAYe8KiVjc5Y5dc26oi7PGHvrzVfiWH2PbvV5hhDWeLVQMJ7KppVEWZzV2k6yonnn8BPxFhuxePTm3EhnWLV",
  "key47": "4aM8USYoPN25tWZmBuhqR4sobpR8SA8DfcocWr1AtpNwYzv5hxARVvcHFXkpuwkN72KT2W2DVAYX9En5EqzsWJWm"
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
