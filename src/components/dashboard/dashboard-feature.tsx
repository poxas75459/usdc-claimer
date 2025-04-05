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
    "28D2eGoo1iNu3pRmbpB8xjSgii5E4sSk6EXEeDTmNCbUKciZPBjbH3MuSAD88HYXMizQmCbq2ghTiTDmisvwjAXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65eVAQjoyyHhE2NrHd7y7vb9f2MJkF2aVe4kLNMk1PMizJzyeq365QyivWyZ7Yxt5KeM9u2ES9w2eLtUVkizUF1Z",
  "key1": "4F2ueVSBapWT7HXkpuBEtiuKwDTb6NwetuqVsH2Htnci5UJMfVuio7NhhAB3GGrc4mDvW9Dq1GG9WaqL2aKZLXQw",
  "key2": "4JnWvuWKGW6d8NBQwB9HJeeLkB3qb4eE9zGLqys2Wzbhy4dSdMjgVf16coPoGNuBGMqvbHN3otkYiLHV3USQSF89",
  "key3": "3ZbrtJkVzbzQwWMQz1ikD6kUhuj5hJeLNYfmgRLmjtDAKzNgjuttcaqgJ4xkidB18eFcR89gp4YCWK3STZpjGZdD",
  "key4": "miJcNE6TkiTCv9iL72GMJ9zbLSkcoFtuzudXZRpob8ezUTH4VMaZ6gDXTEFykB6o9EX6Hpgp7Hi3idedtjJB4H7",
  "key5": "JwPjTfwBXcwwEZ8V86WSdRWZGUegZcsEcHDQoRNtG31L6JHKD28U8RM9nbgzdyo2B7f91sMpgu5ETpG9a8qyA8z",
  "key6": "2rTe5aU2gUFphvXoV75PSAGkyNzevEFJtCPG23pqcFfbPVrtgfT517mrW1ayJBnKf5saw759K8q7k28NgHKwgENn",
  "key7": "2JywAt2MFvJcNhVEvvqhqsQyGJjemQLMazcdUKUjuHWi4U2YFNujgqMKUprph3FnpGpJc7cZp3TwRbFf87e8WxQo",
  "key8": "5ayN7qHPmkHWVAhSPRasGZYgD7mKmLuMye1kr8kyCpxti9thYomVF9K1UPWhPHghmLkduLC37in6TaKfXHd8K8yY",
  "key9": "2uS21EuiBm7Xx5FMuhbJ8F53wjyn7Y7YVt7PX51iCWKQqKTGZUXeKGNVKQqFtX9futmDgA3zquEqMz94PnNBnqB",
  "key10": "32Umf16nZ6jQzbPyshfZEUemufCgMzNCVdAQEMh5f4FxEqKGTxm3LNokNnrrNztXtPp7q2KZdi3LmqAeQHyVVMtv",
  "key11": "t5nCh6BNHY3xyYZbr24MsUvshZUTrqNudJoJoQ7mjpRrQ3eEYUawvdKDr4xY797FVyjsAjwjQjJzfrg1zyqPGY1",
  "key12": "cn2KB2JDNhjxdF5HgJL8Me5toUa5WEvQkASN7LWem7SveSURcCTXCMHuUkoEGkNariS23FTQJW4NJFtgera37az",
  "key13": "4d7LAFJcESrWGgCEQxp5JF3t2AJR4kmXGePDjVmufGST6cvHGDHVAGJLdHi5W4MzsaMSJyHrakRPXVf1Yq6hrBJi",
  "key14": "4eT8sjALWiZkfqxX6AvLcCK9oNRBM6XvN3cXuCdjKLbqsMQrwzWC1MtPHj7c8D8r5iDVBeu2T4Muywv3iXWLGU54",
  "key15": "59ybHWnKJtMENw7CKDGY5ufq4hYY6x29jDtgmvwBFt7apgdAwUqqQsE8NTuVeJBiYXmwrdNLPqQT51e2aQac4nFA",
  "key16": "4wrTWER6BY2dq17WxBCmMVV2xET6zmcQfswNgmDcjgiugziUHmsqPzhbgKsgMrHrf89mBta8bgLNC1NBH6Trvu4A",
  "key17": "2zVMRAvhnLxjnkcfkxgnuBuEUXDPdZgkruLj9L2hoQEnrMRuV2DH2BdFGFgibg45DzFCUaG2inkPBGZLJTRE97tE",
  "key18": "2U7EpBaeViEgYXCEtqR1MXK4Rb45xzLTAzWYFpn5QDXJMrHquA1YWL71pkniMaGpZ8VVuEAFBAuYrx7YtNzLGcDg",
  "key19": "3gRN416Le3B9CMDYLbNLcsM4pRBnmTVVcwndxH5yvEcG65Jksib8BTwKipLhsf97fYwV4cRTWb11xT6BcqLQuVMk",
  "key20": "5zXSoNC56Chfv7mrL5ekGgAqR95TfVmzmPZcZXdSboADG34c4wDtqDZVa5DtHmyhe5ney8huuAxnEsPgPWifEFf7",
  "key21": "rPpoBFqDHWyPahEN4oLhXv1wpoDroxf9gfxpoS3jkAWF9LVgDAq9aiiWzjL4n3p7hmSAmJyZbiC7Ee9dTvUBN62",
  "key22": "32H5MSLg86aPqWYDgLXr3bnHhgzNTQYMnn9n8y4T4E4Woa8zo7k4PEU9JPUZfQ9g4Xs9exjNxpjd4DetJPwERiEQ",
  "key23": "4SiP8RCtNbP6Cfy1WYrjHTWeWpGniGoyrAxH6znLYu3QyD2eCMrMSj153ZhF3tRDXotQHo4iZtCxGCTzFYQZVoni",
  "key24": "5X6aWva5XUeoW6eMdCbm3Sb2Dd8ncC7EGZ4iEZknfJaKeRRoA9sHXw2rn991jmJgecLEK5Vp87oAoKwQDxaaznGy",
  "key25": "3dqUFBn9ahJcxaVc4BQzon4k2XYvEa1UqWmMMRNvnzoAqmYXn2odAbieGVwJQj2ipQ3oXE56qbCW3sTViQUDkHdg",
  "key26": "5QKeh7Gy2YyCUrmkU7BSa64Z8aWK5kZUcLTcX4gftvgvrMP7njmJm2MGDc5FDBXERbYV5b1sGQ9Z3oLFAgUs5Ltp",
  "key27": "BVUuMwCNUvmPmwoQYy7cnudge1nB4yNWbG7CdSn2yRP4RhDYZ4cHDJxK2strBCducRGWo7tnk3PE3cuqznCSF4w",
  "key28": "3fVZmPiUHH8toGk2S2yLApwj8H6d96SAuG8gZx8ybTZUh272adSa3bb8SzKvEhUCag3yrWdGT9vpqpPJot4FfECG",
  "key29": "aiaNSig5oC6qr6ptYpwUfwPpzkYEQWi7NHujVE1jHt2qP7YA2Qg2wzCgeMuaSMG3UoEKZpSoUDizBUsy8CBVqkn",
  "key30": "5egqgtkMZcoUAdVqtLmVt2uTRWQSGiKXWp1pGCz6X2deHrChqKF8FKGHPUUAtZuSWN67oXMP3MUv4kzEjQEiHkUy",
  "key31": "214ESCG2QQZ3z87DSpiQsuayEjW7wDxZ3fB45sgoL5DLTwuyoAvtDsWJoypx2d79m2jRMTygDbFEkoiNDGw9USpr",
  "key32": "3pk1ABCriLL8NPvUboPFxda4dj7DsKqWJELLvwsq1noRULHu8AN6L2YwvSpiVKkRFw6FvJqfJHQd7smPmS4BJrnh",
  "key33": "4NRG6szFCe85rNxEidKNyGppbFFoiGSgyj1wA7qqCXMZEzqnagr5gV1s2verwHDq2t7eQeZM8HTZYRk3MCS1SS3M",
  "key34": "29mMtMQWyqbo2gqo6WjPPE3PfTdqYBxHqKMrYS5ww6nU3s6Xu9oBnABXWxae93tTRSfrPSUCgUwNnpECZFy6TkU6",
  "key35": "3NBDE5r6zetczgaf48nU6tRoCXLXVDftazw5N6TeWrcjdiNVmrJZwmpe9MyjhDhV4nsB6A1VusXMSxyB14TgYxCn",
  "key36": "6aLqbizRBRMUcqkoqg6u9m99DXfcwmwz18DA2tr4MT5r9mNcSRvQydPTJHNNGP6ZZcVqQYFewKLu7ZSqiM7EeCU",
  "key37": "3qPzSXGu2vgeGXWRpG1pSesGSoqL5EbU8C5TbD7Y2aD6UF4QwbFzUT8GtyjdhQyATSHwCFfojAdppmzeYRobVrrx",
  "key38": "5Wg6oyf5hsZTMfd8qrDwamUZQDSVw2pgJuMwKo8SzczVqJC5S7oJmd3wWg7GA9yY3KvYCVTRgUi85kULYKpZHPgP",
  "key39": "4tngduu4ycYKbjAVCeaTcT8xUakNTAVmmCVNHnfVCZuKecireGzsPKusPhHGDzFczbTjAofKiyJsbthcSWdByjW"
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
