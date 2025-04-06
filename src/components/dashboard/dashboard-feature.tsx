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
    "2LMtJKfrabiHUTXAv82m5UMcfV2Lx6UxHc74VmTdD31mzPB9xjVata8mVKcWNgPidL6V65YdsKdeGob4K97b2csk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "622dmbNECwrcNFxHXnjVe7oP1nPpCPuoxPzgrTEUbtzmPNhKMZZwyekFFVJSXLkzaBxnH4GT9F2vMo3Q6FCCAPG2",
  "key1": "65jgHBzEzBZJrpygeVBKTd8f6sLmz6EBy4SEUssyhsAm2LSqqXhAgMksvw8u7soFcT4ozBRTWutZVSd9tnEYokjH",
  "key2": "2KvxotPsQvYSCzZr22aLVGFPBPrFAhBxLXy8RPkWKYHn3JwWfV4EUyyZZ3U5yMwNLCo9gMrxs3nbLPCTdT27HYsM",
  "key3": "r97vAkhaSziTVtpxkKgojY1Zm7UXS6NZjLZ7EpTtS5caU6s3L8fU1NaJ6GYdSACpaVPDYVapgnkukbzJNBx5Hng",
  "key4": "3ki9gZ6N3VPQGgv69yUCSdw6LKe2AV4qa4chvndfpMY7FdeBgTRzwaQMsv3j1rSya1TmXHfVEg7uYGvL1DnYXTy",
  "key5": "5f5N1erXsAihdMhzf6KiSS9gP5LBGFemfL9DJMV4K9vTMMe6g2F4hZqngXU6QerRFbXWZb26VVhtrwL4vtvMEjKo",
  "key6": "3269677gHME1E7yMEcG3goVHg4UKEPWW5mN9LLGrB4RujYN8ceRHzUjjpp81p7Cv5unbHjy5PK9zQ6azwFCndTzC",
  "key7": "3GVtYxFqFrWjAm7RGR2u5ktWFSavW1d5FtiYuzoyxir1e7U2w8bhHSz2HbHxURKfKGeazNnFy4tb3CHhdBFTeaB9",
  "key8": "2R8LZXTbWjCEQi9Sg6b1URcaLM1gd7fCcUbivLrP8KtNQ9UzoR4NUiW8HvZRhyS6PH6inZrsjfqDEqQrqnFvHQYm",
  "key9": "4Yf7NFDP2GmoJEREYWj69Pqd6eLzt5ZUqXYrxDFr7cMCgyJX8r6PEeScLyfy8WVSM5ktE4V8kGAmbyq3aHoiwcPS",
  "key10": "22RnjsKQBkMkEAbzCAx5Pv44DJVRxAubjh9cePGkBuDibwHBwxAjETZYiYCZUWGoyaN7yLgCuitqfJFka4DN57ZL",
  "key11": "5yvQvsKg5CFmQ5VhquMUV2JFKgsbq7tzPm4Gy31WnKfaXvdW1D4jWCeoqCJukcCtkWzFfhKob1Lsun9wiprLsMuJ",
  "key12": "2fLyFM4FSbX21h2TgqDGAQeYA3FVixurhXYLEX7W9nkgJq2vX29jCyjevdkxG7Rx5VBLaRRmm8LMRGQcT9TMXgNT",
  "key13": "3nHbz52AizymWXvkprm2xbLzeaTk4Fn94Vd4cwAJuzn7YvMaJSt7ez7juU3RxQSy6vuhGL4ns66hAHRG4HGKFXce",
  "key14": "4peSChwjxdYaoNjHHpkgsFmpXpQtkr47jLKKnKRqCzNnxcb3yrMoZmCLaH57vMeV3pZxTrVUD1v5guD32nN3sZDf",
  "key15": "5C3tXe21g299wpdjBwznn2PjKXxUegvkhq6VdLoMX8DJdjTCLiuT7GtQSMxgrCV52RH2TV8egyMM1e1vj6Nv4JPW",
  "key16": "2TQEcvBCaLntbGL33xviVHxrBDMzGZd6x87RrYh95h1GhrzDJ563mED1JBLw1GASXfxQ2UZwwtnoW5rkncdqvP4w",
  "key17": "55mc9gfKrtnufYaRGYbBySNze5wV7n5P2eSb9brAMfBQ3sXi7pxZvfPcBw8WpPUDL5UxUXYzVMKSxTodb72QF2cd",
  "key18": "5TtHZAT6F6NkuYbQmiTUgk1mwSoKD96N866CBWxjZN7fJeKTYhWgmGZh3QzTtj2KBnmFymg8icGBxbvrraw8s3UZ",
  "key19": "3cPdR9D4PCF3aUPmNTDKVod9TMxioPxbE5zEHSLBzBkAXbQwqqgwpm71ThS7L9FL1QHEZQABVeit7SRBbZUJ994u",
  "key20": "4ZhSDMSJHG4cPt2eMRQmpDNC4jnJyhy2ufYSJwZgzFc88z2edjKYtzNHmWov2upEiSmHbDNoUvUmcUNzjthybJyD",
  "key21": "22m1gaY6zRvhVqkKVdcSzx8ixjpxRgZRvhBSB6uu8JPsPLfuizfQx9PJz63DRSVKh1QeToZkp1HTEwxkkN3eAJR5",
  "key22": "5Y8dv7EWKVjGkaUwDJ98L2u4RZth2VmezXeRuH1GvibULoNyY9juXdtiQvaimW1UgHrHws8AteJReXuKsbjvPWEu",
  "key23": "2dtaWy9ux4rWqdccY7nPrFKrjpQbteEJDEi4H5Uw4ARAbf3KhCoVVQD8ig27SrtXL7Rn8neKFiJLjtEsZYLyjNNp",
  "key24": "2gBL4rtfUKEiFXpthULJY1QujtNGQqzztJ3bVNXH4nL5cZe1tfntpNtuiCL4iQxPXxGQBbWgpf8oXVHMeMED28kb",
  "key25": "3WWoY6Y9Uc79zsBoyANU9KcZYDU1Y1KRF9CxKuuffhBgZ8xVVGHFiHt1KTadQERbhW2qNSrGjQfxsmUzw7MhZcth",
  "key26": "4919uvcL1qkqWg1FcDwSzvFQt15kwB9gdzi5soKuh3ZmXVSdpV69KFCxPsSzKi9PUzWNCkDwBCHGtaNS46P4fTWb",
  "key27": "5ALy4arLfZ3kuGt9nQwwoMz9LAKqDTacvVYxtiwVfR8fMYPtHPoiph3ykRYrJqCdxZnYKLNnZXGRWm32oVSLWrbi",
  "key28": "2Vsjeu3ukiMzUAufkTvAJxZtBJ1XKwr4njJP8gR2QgKe26pYPwPT99xcnKFxtasd7oYuGzGgKYckYWXk4TYws1KB",
  "key29": "3xsB9BQbyHvUT6uDxQ8QhWEmUfWdfkTjLdsK8dvWaFLgfCTxxWWoKsikdipvYVkXJNF1ozaYxkiuytgb3ggsrRDL",
  "key30": "3CnjhHbRWfMERsV3uAKhnwnb7vN3sXPRLWXqAio6YvZ5FF9ABAoxhhsDQsHLab7Rg5BUh6Q6Er1MvvUJYVtytAEN",
  "key31": "4BWPASZFiFPXvMZgWB5mchQYPowTv8BPovogZ7dP8RUoDDp8zwsND6DhTmcxcAxjDyUrNWqrBYiMNW5PtjEdsKZ9",
  "key32": "28EFeMnCPi6W5qRcNfYbAbgxgDwjMXiBT9URNBis7TH3ZLgH9EL4vZvMaK4zAnEvo6zZjgcTwq6AJPdFZKqzPm7v",
  "key33": "5d6vg3nGE1ws86qb2jFjx6PSLhr93dEAW9fNgfD6aq3tEBLPAZ1vWpuRDtsLRERm4rEtdUUTEsBbkSH1d2pUDb2c",
  "key34": "3ehwzZ11htZ7pn81oYSqbXAvDHGUE5Ye9zVv3hjhwpRU69hkm5V24TQxTZA17EX4KqNQpAPzQDSb8v1xNtA7ekkA",
  "key35": "4WZWRnYtywH2XUT7xDRr8KUTGUzv1UkcP8AeN8Efc2SVetXfaEkRoqCpLgd8SPMD4DVUAdafb2edwJutN6vbq6Yz",
  "key36": "3AsdMk1jAJuqjQhoqfrjS1wphDsxPeUqY8G4o9nsPYNs1qXLkgS977tgdRBruKEdeWxuWnk1xWTUAaRqGswV8oxV"
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
