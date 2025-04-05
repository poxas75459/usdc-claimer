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
    "2uaT23KDjr4LmR85GanSyDGQTLisoo6Z4TXu4yk4XqYbuToWB4w5TTGSsiiDooNzkSBEMAeiUDYHR69oaL8btVKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BqyPCgvYYo7Hjh1iXoXrAjwGLjzemAmuAf5KmeFshXVmv4FNLiCmvFEbsWKiUvgwtM3oogfRmyyRjwMaqHdd8bJ",
  "key1": "3AeddYRiMpt8KbsBWfF2zfkRsxZrUBPN7tbRpgWaZL2iWGJEPKuLJqNGMUvrfpo1EakATbcvR8dmq8YyrPRHaVyd",
  "key2": "3o1bLwSLqTy1YyY18z84fRub5PRW9ZNvbLywpU1G5uycqNaDjpUtEWzs5ve58iZjH1WqELiXhmLjm5z1Dzy8G98L",
  "key3": "2UT5GgXwjJvx7VwD4YAnySVTyVzgS9KfRMnmz5k8TLB6uqEjrzyXVHeTBnrgLoC7djhig3q4N4VQkGC1EYsABfMC",
  "key4": "kVXuPpcST26RoAvo5hCf6RXSKGHC7n94CDMQNuCY37Y3jujTudK3Uruh4Hk5TXmLroCnT1wTJWh9Nd7fbZaEHAz",
  "key5": "65RqgaXJCGkbMCapaDjf3YWDe2NtniULv76j3AiEmiRyD1v1TSiQcrxE2QV816HBwiZT3arnZy1HmxnA1HoNumG5",
  "key6": "3sAuG6rFHm9ACsapUWAZxk6Kp1AwrmVdaXo3krTxLreToMrh4mTQgkJUaGXjNeKcmadRZk2wHp5ZT9WUSapyp1WH",
  "key7": "3Hgxt1Dnf42ZmzNszqYNzvh9na7M3rDU3WTbLpcJ23N6Fs3NPywGHx98ihCJS3hNiEoMfm2RAvgXYpgWsdCyb84N",
  "key8": "5iHa9TpVj83GsTYfd5o7EPKhxnv6ZBQtjvXgnMMMHE4orHGEHU6v1Ej7zcSp5ehFJDhfUqkVgGiJEibePdsyBcXQ",
  "key9": "1r1NSEQQWeRgRjtcbrPZRAiy4SufzqisWyNXX8SVdmM61NHBJ9CEkdquWqbAuYFVPgHXPpGATEF2T1L8bDQTQV3",
  "key10": "2tnQrAWwSbnUxgdFCkY7s1dSXMBK5VKvhCcmgiPeRghjK7Btit7uDkWFiraLQKWMq5YvPFeyr7b1QEW2QJarh4MU",
  "key11": "4JRRFqoBUSCtQ8m8uJBT4LqRMZQdKFqG7EvZTXWfaK7cQVbWPgWDHpeAHzHTUuiyER77hckZYYQxvyrPt88Duxnh",
  "key12": "4Kc3popBhkc6AtCo3kNVvYAzsF4DEcM9auYMbVHeRnSM2yeqmTSxdLPjJXLfSbcku5pZVa6PqHjB2DNYFuRFjf8F",
  "key13": "4hbcLxHwKis61QmMPwDL9PAL8dwikTtL5HtpH3pbTxAeeNrkD9a6dwWrQruEejLnzymaBM87DH9uEKcka7ywFc3z",
  "key14": "Aekc7PLpUiDJfQJSzLNwgc3dXAtiVxXuT3kxDCARJnn2YuKVtQtXsZoUtnbVSBLnnnxDAUprPuaEP3VHmW8oVK9",
  "key15": "5dHep9k1G6UAy8orujukrhWKCcVmopF7WrbBa1jXzakPpmgSAgGh7xKDs1Crr6U3P6nC5St4Hjp8tQ5hw4cXKRMS",
  "key16": "2WJEJx7iBYFZSCct9cT3wkEJgsjDKe5nmkhhrfB2YF7VyT6LDpayEG51mi554pm8p2B1h3nZ9jXFf3VHGLLHAgm",
  "key17": "5tXX5RxrvjnxwFjDE5pXUJwXnwoBbfLEgv9vJ1VbAEcXfAgKeKarQHz4sKBQrNbgCqUXFvDTBEeBr3wK9ADeKhWR",
  "key18": "ugmuX3LVtMpcV9yuTSGh19cpAzVFH19ZLpK1LQ3BGxgKS5jJULfwK7y33iKvZYPvVF3o88eTX4geoBUTuCLyBxi",
  "key19": "GWvxWpmbg51TjAfp3CsXfsNFJU4BK8FjvmCcFiTytEmN5RLDqn9tao2XhLgbs1mPWHJLwapfPu93bXvsAshPEq8",
  "key20": "3wXv44r2LWmST9rn8SGjD9aVqUKEHFk2ZbxeCUJ1mkDnSYTqaP6WCyn6kRdqou3cdGX8SLeDxmGFxbmkEgQmctQt",
  "key21": "64fxVXCnvm9akAwtoNXzeTFReU1cnVZiStQA4UT6S6wBXqhF143py3daVQu7mVmqpXqFPptkoKXZTgF2CW23rGi4",
  "key22": "4PN9d14yMCbBTjLnecB4fR2V5Estx5KvRNfs51giS8wfGt6vpCN9LdAdPhPSkDykqDps6Ykwaa6JebxQU4A6arCo",
  "key23": "2YY9j7udX4U7m4M89vbwez6ecXrYsXzzmWrzzXGFgFsxiEe6hT5yW6jUGKpdWrUUwWrftbL5LVzvwaEwi844dfjd",
  "key24": "3QKiZ8FLiB9HhGfxacjs8nW25sLXkpfCfuCBXmQdiwreJv7ttSRLkSF6c8CcSyev4o4bhbanvLtGKNacQM9zeS7X",
  "key25": "784wegYjTi76T6h18VaxK58Ygyd5r7LAYxVPsJsjAYT58ddAPL2UZij3Qyv6yZXwz269hLPQKhGGGm4ffAUA5sV",
  "key26": "57bHomeqwqUdJPnQoNNb1c2sV2ZB6rcBnKjLfQXyNXUGT5rzGfJPyd7A8a6fC9WFhuRanavUsmRHatgfm2RVmQpR",
  "key27": "41qbPe38qNdRwqPadJ8rwKJ1L6K4AvFhthzZfTFzCD1wNzKE8yMYuByndoRsmht6Kpb6qGdidG8ssLCcZt9DegfF",
  "key28": "4dUh4fZ3hayf936bjzxBaiWvT88qzsNjk21yLEVu7mfbLUdUGPQTBDonjTSooVi7tsAWEADG6GJz6jLesgnHgpL1",
  "key29": "5sLYkrv9SXh5AX9ggSj5w1nS8pBCv4nR5MpcatYBKxETvQvKAWaspy64EMinsGUeRBBgLJ2cCwWZUPX5cC8uicKZ",
  "key30": "4qv1mhpv4YSFFY2cbityUUZNZTBSc8Jt9EnL77q1pVbCRFsvrGSpCgctSqyb1GqWFgnfovM2rEY9aJDiBMMzciVF",
  "key31": "4SNFTpAzaZXb6XeMzbJUspUqc3avM2fLNCH7DCvKUaZczqb9rMENF1aAdE4Xmqm28zhUbByjYAxJp1W5KBM1M6j",
  "key32": "Ho13QCJgtJhZLses94HN3C5BFGtAPCHR7FoEM5cPDixH9fmtkQ2SQ3CcnvD8hgNQx4eLSqfkZpmPDHKGGKQcvSS",
  "key33": "2HmcPJm1YxfMnqaVpgmESvF8TnL8i99RMsoeiYwEZXgXmEeyqdpLLzBWzRfPxsQ3S2vNCeCgfUJS3aP4t6LLFdnZ",
  "key34": "4Ytooq6NvKXwJskSvdJi5dPktt5XpSZJUX94vVtcbGPda42fKP4fLic6ttEh2RLnCwUFjJYnnqu6oRuvvuwwtB9d",
  "key35": "2EkGJpxLaKjNjBSBtQZfv7zEebSAJ2GzotyihJH4ywPibZg7HVENCz3VLnm6VvXyMAYN9T46MB7W3j6d6fHfnrMd",
  "key36": "5hWxPra8RGQqd7bEKgT82eryuWwpdZbCwvF4cFA2n32vuJc5B2npGHMBoz1TZBS4J3EmNsigap8heiuaQPHoKNwv",
  "key37": "63ZoW83t4kDaT3ib1PKN815ogEvwJsjnveiRBhzdqTcAcGT2K5dFn4CBUiyqkek8AqCrDsxA2NwWKnJoCc1QPHjZ",
  "key38": "67FVnqtNgHqA6Q1crkFoj4NfoNACqQjvyYofUqyaZizABafnmah7bmXU1Q2RCtU6Nj42unXHs1q4YVYxRU4zau8o",
  "key39": "32Kk1gr8LRM36xMSBhZbytDzw7NWxmWFYYKnQA5m6b5jianzTkC9e6ztyCkZg7QnHF1HvAqD6w1FLoaM2vRrEAn2",
  "key40": "4GwE1B3ZQnYBTasFwHDjx2DzgAAjsGFDVVutzyyiVAGqnvBr32v6BQug7wEFyrAStsaqRQeznquqU7592ibhCZFC",
  "key41": "2EVhpHsZ1wuCf8s1gymXG2AsRvy6rkHspv1ji4foQ7jf1gmcdpnS29tHxVcJPBxaXRgZXwRQDnUFWiKdDfgr2iCJ",
  "key42": "4tYpBZvfwiL4rGya2yXhKjS4bfoLjj38PW9EDFQM1VzQESD8z6V2YkKi3QmmEu3ysC997aYuY3YQJPd9pp7HGe63",
  "key43": "3KuZEGfEWVLYwny11UkCvZD6CP51fYbVtYuG7buMNx6qQiqmWDHCYr1qF9MY9eJwnuNrtd269oPy8tuZpnqr2TMZ"
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
