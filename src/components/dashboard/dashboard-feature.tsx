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
    "2J9s4wk6CWsnwgGAr9B9RPeKJ23UxadAYVdoFKVeyMpQa8QnM6noGmSsFPGyEhTD2gGN5nJcjfdWzM39RbTWm3ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GTt4QZHNaSGHrw9Ed7ZF1wk4Q6RZfS8FonzwGx62r4jtXnegv62ur3vTjzJmk3qgNvvswncjtHSAMRCaCZYtHTH",
  "key1": "3a4nnQeSqFhAhKvScbhX7Cmfv8qNmGwC9G9mtYXpimW1Jt1ehV2PWBeSnSPMuNAm1DaJdJm16sMjkN7sKs2MHoJ8",
  "key2": "MttNDPrxLmQpfF2YpJ2BT11T41fykbFoySBnfd7FHLMm4D9VoCkYKf4Em4Bh5QxzCuMRvNn712Q9c2WZfd5tpPw",
  "key3": "2eByQSqxe4wRbDtb1KVAcWR8JyQjcFbEaFQTPBRBbF1qPxVCCLcJWm4bk2prBh1wpjtBatzcGRJcoHuH7zscnq2f",
  "key4": "duaJxfnVF9FrJrjek26wmSEVH4sHj3feDgkvBHBeMAhtjSFE6EZdy26qoyEeX9PqE9qC6JeqaJFCxHmDW5azQqW",
  "key5": "5n6rZcL2m3oLQJi4x7HinEkDTG8H6KqXi1be4vBJEKZ9wKp6TqRxqVTNLfdm2gN7CWCnASughFWTejjw4X2XVHR1",
  "key6": "4VUfBsAopsNTYwy65iwq9whZ1a9pVvpsbgTj87ZXMXqCVqe87naPVME4AW4ADx4raRBkNNrk6M2LDsudCQAnnrE1",
  "key7": "4TNgkGuWNnqpndSqzNG2RYmZXpwoyzxPiYiNkB4ozUtAx9YEUwQdDWT8XmVBKxLcb47Age5ZyTsjpKq2xPshvBfC",
  "key8": "3J5tZiPSDpzVqRM54Y7ivCgA1zH3DcMswqVcXePxQZiysXGCGgUoarqr4DyoqRp3DsGE1NYhSgm8C9NNU4KZL45w",
  "key9": "5sdsNsRBWDmtJzUGUkVqet6Lph3Nzxv9V8DBS7Hmn4cAkz4m4AkKDPWLB5vk44hUhgaua53gzSYFfrw5X5quUwGT",
  "key10": "3AgUpHJwt9R8AeQRbCrKa2noTQr13xJWy8jjhkEqiJevavxgk9fZJH4Fy3o878BwRoYY2oh84dzQxm42DP25FRXb",
  "key11": "3FdtnNiRDGao6w9JXPQXLdnVwiPurmruYzqefVVEXx46aBeCZLggbGYg37hh2Go36Nvjf482ZnKDHnWzYcgj3m7s",
  "key12": "3gXJzYGgHNVKbbSJGVKgfCyX4N3ACjx4KhkBrAmvaBRKiFPax9waRXhLuHfJwauXVwMFe86Q53CBXBLwbAMm9Vq1",
  "key13": "4fGmYS7TjZJ4LbcbgQfUVaFG9NZ13eJUkofiEsb22GrqL3JvshHw7UvaHtcHhLMvaKJXHtCbEcNTQWfSHvAwzSZQ",
  "key14": "5sBEXTddSn2ex9xWcLxjj7YmMmJ5PGsFTZuqwzWD4smiComGt13Ryis1jJknynMKBnSVrdVhQ3Ch2uwGXumo6hyr",
  "key15": "5WkQg1m9t4stgygFiKGRSZBeYeyTq4Ga2dXRTe86rCydP3Xz2PNpSVJiZa8hpS5wACpijhxRGzTRojzLkqTps7FM",
  "key16": "5X5m7hM8nZVqCuQnmp6Re83DbR2xvgJC7mMADHVrNDS7ms5VVWJN7qowDfsFWZfayL7jfFFGNXXUJZ47Hf3Fmqgn",
  "key17": "57JBUtBcwhTWDrs3bvHAQbq6hUdCSyLVTQQPqCToSDJjexmVdLSCXJvbCTSJbsrQjhhRNQNNyrXC7yVTGP2Ua95L",
  "key18": "4wB3p9U2fuPuBqMYRJDvozjig88kbzrgr6BYpLKMXuPgD5cVQzkGDoJpd8pTLtnSQG3p6zTZgke3kbqLy5sbnmLX",
  "key19": "4aK45ykd3WWZrjiyMHPb1LzfpbCy2eFub5g472faJHt4Lqp1FRnxkUiA2oUcQeCsTwii67bm73y9TdCVaVedxDaT",
  "key20": "N6Ujb2WY4Wp1bg4io4sy7oztjEB5DmWDNVJxh3rwXmCog5BRdxqK8mYktkkRBnhvs2Gy8SyVy1fHgDiedZUmkTr",
  "key21": "2yKwPvCkyKJjjMU7p5JH5bhUqV5xA4MD28AchYZYzkEf86VtiR9Hw4vinLqiFeAPSWMQQpjs9zu83GDygCkuGXFS",
  "key22": "3v5zF63YS4m3m3QujJgN3BjdeJqVDYrh7gqH6mkMjzHVdEXvyQdj16sKWL79xejHfAJqbbrHkjQv4areTcbpy21d",
  "key23": "qumLTKb1hceUMjA3BHsYyCkCJcem9ioUPnMMdsopj3QfRfqFEMPQtV4EuXFDkKMapJvKxZSzaARWjkTHCph8bvE",
  "key24": "3wd6dk6Wfbcr7qG4qXXt4u7xRedwRzNdMqVEtXPpXobpjdUbgrp7o8zhEe81sUebE3o46Lc3PJ52dz5ZZ3uHFCj1",
  "key25": "4Ev5iJ2SSH1BkUCNsNk72TYUSLvHqL3JK7fu4VnF2xQq2uYxDTbTbZBsFFGBz7ryATWJLyBbP92qqJYeLikaLi6N",
  "key26": "3EYFphz5RV5x1xSQ52NvmB1zCAhraHaiCazZ7BbLoZrKWvpcazRVAW2mpCKmKhKY24ujLcDLZuDUtdy7qmWLp9GU",
  "key27": "cJVp42akiGZp9pbAjT2FYxehJBvEkZcGC41zGUuUVCEnhZLiW89E2bMZpruFhrnKgigtpAAj6Gjqbypw91uowHs",
  "key28": "5hxdwXF5GrJYhJLiMf7rKqS6vsygGkNyo1pQNrq7kNysEAbaXo65HMvzyjJJF74QLsvEsvbWrW3i3KAdywvRzeFZ",
  "key29": "sKz989QR3ZrSRRFc63o1H46XEg4xoUKYiToqGfg5c2UthZHqLr9uWiTyNnA1R1EPQxVp1QZByFcWtocTVbETsx7",
  "key30": "3PoAU7qgjJe1siNkbFXTwPPjLyJ1RLoP4J55U79SFCMk4j2DBS9cjGHPhiEJ4cfGHQc5Za5G53A2SNcU6tYxcn37",
  "key31": "uyB8QpwYk1krZKa6xgpSYw1CdofAyy6DEXGNkwbDxXrs1ghiHFEc9WgmyLcce9pRZ5fddfTDFYDRwHzSsQHNewA",
  "key32": "5s9Syu8oQXbQM4TSYKc39X66xS49g5hSJSYctGecTi67PwrCuYWugk2mHsAxshQhWGe8PxbwWx5eo92oe8mN4xdc",
  "key33": "4vUS8nVbTrzq84pnofa1BARgzZnU2qH32uLrH6EgTm7knvoF9ByQNx3JjQRkhp5it725pVYTao9R1ZwxCiAkRxvq",
  "key34": "Qpwk1D4VAWpz6ErA4wfjNQdjkEiezdh678yJGqjUAvY4DizWqVMUjM7cAv7zh9MtfAE6UzBvkFyByEfNkvVEfLx",
  "key35": "QHg1GYtArYybkDCLyXcgjNmLMZuGaQvFPn64wXHufFLx9izjTapNEQnthRk8vcctDwme4S1MbqNBPwDGkwcTPvp",
  "key36": "L12GmPKkZbF6V4iUndN4VpBewtb4fiRuR2ZRf5J8vUzgfTLhiDPp2aXmC8kigd5uDnNmNRa5YdGsZJ2yGEmNcxX",
  "key37": "3PgPE6RZuWfido7GMPXxrKVCdDVohoDaTHcgCxiYnzpEFjhe8xK2x4jaQYqvuD4WmdcNRqmy2MGTEgVuc1wWE8bu",
  "key38": "wWnp7qUTw5kR7NdUdBWNNsnbztd1micL18xkoFCvKCYhUnZzvewgBfCcRVifezobrr4WK5VghQvahTEdriJUxrv",
  "key39": "DEbCiGfGy3sVjZTDih6N6uJtV6t4fTaaeP3zXfkxiXbUDhFhmyxvKnUSNt9mc1Une5etGjtncWrtayw9Mj3Ep4e",
  "key40": "NekkJs1t9Z71KqRRhhB1wMpektCDsRSBp8ArgUrbL17B9HbqjEY1VknkqkCRX5hwBvUxAgXXdeX9pEuy5cXmHti",
  "key41": "3rNRZsxV4tahkneVjnyQjKKkMAT5bDshrm9zRJnwHUgC43wiHnBCzXHiB7pAq8XrZLFCqmVge8fk96qBBDPXDCaF",
  "key42": "2HSjEAVkd3Aw4JzCrmxbXDKZnum4cQX8qLLTvVWQnSeBAJMknLWGsAFbtNUff9s5WgRPuEE9aQfSfo3QEfb8SN5",
  "key43": "zf5RZFx6uTApQ2w1Dt4mzQ8ybB3zHUQoUZVY8JAjSyKGh7Bpa4YbbHeZX8EmtxtE26qgZh8aJqyEiRk9Mb4zQNc",
  "key44": "3kRCGUqsGFCYfADUsAB1HPM817LZyfXweF4jU3Bhuv1Z93WPHTrZafRda5AnvjfNfadf3r8YmQh5xciAeKYm4a4e",
  "key45": "iU8EbvLgRoxKWzngfnjWaE6ABJAC12wokyr1A9rzGyg8n7bgcJomKFHxTdHErHCqg5jiu6PA8WPMKVRtKrhDaJ2",
  "key46": "9zyuM6CB9BjqCpnY5dAJvCptaebrJj21jLXBWVF2scnXVvw2Tx2hCBpRCwtwx6oUGVKfx6jM6tqttJUghEUyw7H",
  "key47": "2g3Kpmb6jFWbqmw5ZyWd6KJBLGYiHX5W56Ps1knPRTWLwaDJXpyvezwoRby4FqZVfRyJExjfFTzwhWLpTpgVVTX4",
  "key48": "3mxmWprAxFiQ9MfRjCp5qvBr1ECvWfipJMFh6fihT7WyFdoLGhXSUJpgvmCXRVhmUpyXk9qSx1fHrTfDKwjEHGDm",
  "key49": "5mLUZ67vR3MY73YHTrQ14yM7B5nQnSV7KBoohiFRCJzgRi56qGSHFggh7RG2nDzZQoQFYAGFBxMvv2yFA8zEWC3c"
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
