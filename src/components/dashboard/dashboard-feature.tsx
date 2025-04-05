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
    "5FeXJXgsGGRXKcMYf8tZH67iviPevBSjUietKsDdb3VKnYsTcpL6UHm9y6jkEZtyPQfHgVcfUHPzWR1gHarPgEqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fBmtHgjpZr6aSWB71iRaS2C9SwnMXsYBLiKUWsefhkVLzNARsQn1SNCqmsARpuQuhcNd1kc8kFRbB8mYn4n3Ebo",
  "key1": "2RMCcbdzsjNUeLkqBQfrE4QU81DEFi1MkLd26dj8EkqV2gYEh8vXLv7V1Mbip4n3Hkvb2AEuShWzByBNJvd24X1Y",
  "key2": "2LMDaywqm1Fx5on1gesw7t3xwPLsEJCJuL7iCsj1QF9W1V3b6fLcf8CgMu7U157ar3rYdAqWywjhVnTjuVPFyQam",
  "key3": "2AGd4H6CsT2nbscNpHavawLQtWKNJEPJrB4C1TbVgVu1HvWWUWoNe7535Nx78MepQKF8sWVzSjrzM3fDRUzoe5wE",
  "key4": "2TyaJaf4p9xgPBbqsioGSrXqjt5AWMAzBEBZzhfxigJmW5gqiAr4suHXM73RuqWn4hbmiUzkFwb7PHpp3Kr9Jj11",
  "key5": "M13K3GyLsqn7ZoUMUfQnghE11ZifvsnhgJgMcTRjZw4ps5TfNhymo5wtJFbi2N54sUPtTiC43ukxqVSvcdvXQry",
  "key6": "7ih968EUCoxNGwV8mYb1Ja95w9xY4sXf7upGAUTrj3BQpnuRCfUbLLeAtUrUFuVxRhsq7JVEjFe7n6pY5GsnSbV",
  "key7": "2RcUPDrjxGDq6mkQ9w849wYEcfEJJe7he1EHrHBiV5Q8xdKBT43RvHYpi2TzLLxHE5gsZicAKCtCsCx2VcFrnChu",
  "key8": "5WYyVjhD6rTFVvjjYsSccLC4TU1jthPY4AeM9fXCEyuPEBBQkzzjHf7DSYAERcq4TjGYUz1GMjPPKPDzntnsMRee",
  "key9": "2gPPmNyca7vbgFu4XqS3hgCw7BYdD5ZkwQAtFiYnrgL68WiRt7kW1K6U5ce1goEYJ3JvfR1Z2oRW6mKxViUJRBCv",
  "key10": "21Bjuiqz4RpwGQhRBeyYkAF6sxTmk9pY3h5zdHXSuyiDYVFmBK4df6qqYm8skhE2HiBXejYQouZZXX8CwqoD6p5E",
  "key11": "3M6doZabtDDSUYVn6zqUkLRCxqgRvr6ingwhDTgkoBNTL8cqR1U76iHoMrx2r2EksvK8ns2uJVwPs4CfsQ4wKp7w",
  "key12": "4qCvFgoWd9VSmcyKtDZaPjr8b83eEuYP3nvCXvwdGL9ntgjxnBzziapNAsxVwbQb5626G8yp4q8T6BgDhnLonYuP",
  "key13": "5kZiJoa7mqWCRJBkdN64xytGxKTP4ouqKvmLdQMR4uNz9GLvzwSZ9g9F5bqG1MvpKzu6JpTdVubmKeVz9AN92CVo",
  "key14": "546Y4Np3fteGiagKmvtCn9wvHfWaZgzL9KZvhQrU3sMCexmrrYrWPYVYxH1FisFVJBdVnH1tKoUBRLKS7eLSjxdG",
  "key15": "3pBFUP5hUWXC1uYmPNxTLEfse2TW6USGWyfyaRirYeEkxtHgw6d1EGG8H3PRuv5NXwPp7MHjC3XVNJs2GGCrsY8t",
  "key16": "3fooMcQwa4egBCDH8knwpErDYzxrF9U8WgYPVHdzcteyss9V6r46EPyq7pdCh99N9Y2jXxHJf5x8xFFrrH8eJ5Tp",
  "key17": "55KZ3YQ8KN1SkeKMMsRPoiUGZBsWuscTQghw6bKo2HkU8pNEdmzNAWYvwvdbkVACMrzpvk5tSXUkt2Nc9iWpufoP",
  "key18": "28TmKUi3W9rMVWjKpGv4NKJPSGdUNnbDNTc448LMKb7SeAD3MXNaqE5hdbaRDqkDewXg69ojPQukMrVuiGSBrhc7",
  "key19": "3Had6yfzw2Le42sQupKJZHSRmwLaBdym4tbVKyXYK1pJNSaZAXHcaat3T8dWp6Ca55RMfKdcP7cBQvRH9QG5zMnA",
  "key20": "5UEf6aB7w3JxV8VCrN6gutp86DSK114x9YUE1ofcK4a6Az7Eb1igtEk7fjsFcLpmBTzzFaqBM3Gv5yELYWKXGVgW",
  "key21": "2F2bRUkguPvryGxJNjHmVScWUGfrdyZrP7STonxazuXas8WChZ9KujgkhY8HbZhcLsBTFnrpxymGMkQVom2adyMt",
  "key22": "3wdxjVoK5SRTATEbr3SER7NoLGvz7oiLU4i7EpSDwcynYVdY4Ai2weYwfCYjyxpSMojomA49CiGqs1RY3akLEUA9",
  "key23": "5PngWVD2YucGw4kk1PJ2Ufnm5aff1AjUCs6o8NHGbkNoW3aS2ZVD3ndYGPv545cDrJekFNi6fWRFpL9z7zzCz58x",
  "key24": "5A87X5RqW9iYVrLhAoiiihCA2XYH8EvoaZ54gocZULzt88UvYw1Kxbw6JpdeDSawZZyJ8b7mWgnVhPmympJiaqsz",
  "key25": "58RL1KH6wt8wkNDyB4bfCoBfd5Hkq8WwuxMukm2sizZb4ZQjSMmLffEBZ2KSQmKKBpgdqX3UF9tnxdQzwwzmVJ1N",
  "key26": "dhwqsVrV6U5kiuRXHspGk1Aad2VMfUenpb2FVoiXSMCrj8F2eEjMSeAXzJY11AuSQntSVyvdxd1HmcN5jZzU5kV",
  "key27": "3m4UAmkHnE1VEwEbSQjRgDghzXmKy9eRGGW5jfTRAmNXphqBiqzSConqWuwRaeUFL4RTZzj57RjC1pFz3UXkv8mo",
  "key28": "4dkSUe2xP4GGNUm9CAhrkfW4KuSZ8Hgsxw3k7qupL6vnKkFVKUQuPyGLA7msSBsWvXb1xre9UcYFxBLfDkjfs7FU",
  "key29": "3uFsCwcxfJ5DqfPB4zjQgVB2dcvZt1fPhx3FX2uAyo8ZmSFhT4oR92PmFhqAAHXYb6JUS4W9WyLffzRbcT3ezD4E",
  "key30": "5Pi5p5xjJVGVh9xCiNut5XDv2iE4AQV1mrtEwPftUmnjqqRbTahVtt986ukJKSmEr3ayXQjVwFyRMEJVWdomgVTe",
  "key31": "4PdARj3Bv2ASwJfPjMT8S5xeFKRdyJcKSLdXdvfsnGcK6CAQzqfABFepmYxiA6mjauSWNwAdVRjkrYHw5J1fnPY5",
  "key32": "4f4F4pp8Tzi76JY21TuR6c1bhcVrCsuYbQzcJdRzV4mpfHdVQHEWXBGJvS4ZaEy6vdAJmEMCN3TbPXG9TNJYWnfp",
  "key33": "3BM5BxdKGNzeGfSABzsMSTSh6Asic4WY4i48sWugczmCZuC4nvARXJ6LKA6nJN4hyE93N3RaCmii3AK6JJnc4bpd",
  "key34": "2Fp9SMamn1DQxAqhovri3oetWipc2JLyW47iMYwn1C8K6XGBYL8PSdQz741aYAwYbH9U5q9PZrxUfTbiJeyP7B9t",
  "key35": "4UQN2NYagFe45jHHPm4LiVPGHzbvT5LzkWDVG2bdXj391KqJLzDmo7r7pNVjfHeGVCXPCJyB6VmMBuFy6Au66z76",
  "key36": "4LHB4fsGYQZosbVJGdyyUUsKJ3ejzWQqGw33STjuCo53zuyaLZJRMKxhSUJqW4haWnaqTmPhPXwwfNUB8gvdkyff",
  "key37": "2BUbdnAZ9vGZDjRCaRC9oyQLuco8A75of1pN6TJ3q2GhcQDiPDwcJfQraF8kuUsJvkwpGX8uZK6kWXkhzLzb8PvR",
  "key38": "5pn29sw9ZWJV4Hk7wjHqcETKHPAL2Nw1SNdQQV53bma9WkfTqcWzrnc4UdGZvVNFwiZ39z15m45kbkTdY8QaXC2U",
  "key39": "651hYYf23tAtpEqu1sz86qVvV4rQ6MpE3SrtTUbZTMPwpHC1emPntpJkFez74YeM9Sh7MfnLs6vSzFEqkuHHSc8z",
  "key40": "5tcGdd3QBZcp4AgaKsJ239yCtHmKGy2a6R6d1UvEWHrhCbzsDaAMv7qXFymoUZbWKTKbaXrV19SBkGa24Tzvkuwn",
  "key41": "5bk1h8xdXmLXJDBT8bbAHkxrcRHLBS4RLQRD3nZunngk7Ng3YPj6Y6DB4YnmMXsPmg53N1dfJ7ZfQUGv68A5QH8m",
  "key42": "5Vpvidn1rVRwkPkEW5bt18WpwhcJFtuPS3PU3uCb2ha923iR194AHjkm3pjTwWuLKhmiPHPpspNf5aeF3fFu66py",
  "key43": "2TZAqCdR1DytvZgooogaYwEsLGDbmKYq1o4LKCZqKDFJ5tZBNACq491mpwr87C2UmL3ZR1tM4jhavtBqe2mB2m5b",
  "key44": "rHsRe1XijXaAtpYaCriiEpLyi8VVAa739F4koea7JiWVKQ6E2fxnpHGTYaBe5meEDq7zkXNAo14HDow2eza2Yty",
  "key45": "4BTFvNd2mKL3b6oAPd8vpP5UHaSYPbLwE9bK8rnTny5UTrmWE5dtyYbsL5cGPE69oWRu8krgovJg9Zt7HCsevMXw",
  "key46": "2dCBw7fFP6iJL36yWWqLD1BCmQm6RCkZvYjSDqSBpjLcw8sou8RLe4Yxp5AFTsQz1zzMknd6p7X8W5z6TP1ZuSHf",
  "key47": "5W9hoNLs1b9iyc5i2P719oVHGzUwiPghNSXfAnQNVoovMDF8GJAT31pfCfaf9PWsYuS81VbgFDXA7FUAxKbKKNbz",
  "key48": "5uY8cT9s7KdnXNXt1nsUFFtwBoUXNFSk3ACgwMJTBt3CGFUNsmsJ3Xknr5NtF5ZTHDymy8KDae8afK6h7td1efWn"
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
