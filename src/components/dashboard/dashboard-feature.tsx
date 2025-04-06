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
    "5BmA2NEXnggK69x3t9y1fY3R8XjLSeLQhwGDj3CdtaY9xuxSeQHJLqQSWBq3uXKyBN4RWSdhmsANTXXR9bA6euuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c7ewUTtRNbYw9yMB7xBYFjTAcCgUEDZPCAACRorTE5QUbwDm2TSetzKprv9ZEtRDzpL4a128JsCibBvyo5QH1Sk",
  "key1": "CwK1fRNbR7kvdH9mkBYsQqX2Msvsk9fHN5pM1cYCMjiN6JS4Xz7sSiHrCVK6zsASJZLB12D54V9NCduph7zgS6F",
  "key2": "4Qiz19pNRL3imAvN4JE7LkD3hR37RPzuo2LEgdDECQoiTQBNDa9sqYabjJCKUDbiqjx5ap3r8TKLdj9QDSUSpQsq",
  "key3": "5Rh7Zu8BpQuLYecNgvqqQXuoc9DEvdrriJjahA2zi2SHhFeBee5QbEV9wuFcCmnQQNx4A3W3Y5vxYigidWNEtsxE",
  "key4": "5qRpZh9Z2dpPbyaFb3AMtTtVXMMR5AxrFQLkwEdVvq7CFujXqS361iF3NDC1X5mCMFrjJymjQLv5rkVtyBBYEGz1",
  "key5": "5bR1rHYemy48BydCsTrsMoA5LtGDudGCbQ2u5iYr3wfHvhhYLxiBrNS3MMejx42vDt1pe63ZGsgL3RCPbzq8qNMb",
  "key6": "AHGFokPdzvak7GzSe9u2ujmZpYa7bvJsXc4toPCoVUarL1e9tmNrtgpyS1LPo97LTd3SmHdn4WTMqid6oYUVWxv",
  "key7": "5QjzDCLFjiz5MSN71ayEQf3U8kohy2Lm94PaE5KsqMj5zZ5h6LWTVv4hVssB7dGnLPzaPo7Te3GRkC6hPnLmxWte",
  "key8": "4PXmyEb7qwtVYLUfGU3ztJDLdAsZC2uYFxUHLkNNFvs4z9x18c3JfRbxzQ96gkHiuF9jXEpowjDna1j5kgoypNvZ",
  "key9": "4DSZHjm1EYuj1wgbLSjtBHEjQyzhfAnXLaP3qHxBQXnJZRAhCyTxZbqkjKd6RyvjAHuxPvCbSPUjWsUjsQQaDrXq",
  "key10": "4jK6ecLkhPapCiZSceLVheSbetz9Zo9g1a9uWxhY7MHZGYm3BsmgHScmm5i5SysXuxMWqgnDGv9huJESpWPsQ3cM",
  "key11": "5Uxk6yeuR15oWEnuXuus3TwsZZzqqyythdu3sK2p93URpqbUPCQKjjqsiCPdVXvuAtaxPu1UiKM5TZWLTuUJUDXs",
  "key12": "5CgW3xAb8A6HHK8bTiEYfXZrhc8MVNFtjAYySEkx5xNrDMVnzW7Jyp5JzgeLAYDT2N3w2WEPPM7MfQrbUojxFuso",
  "key13": "PqW4krVFvifrQaeDAKPjVdx1JRR9Wtv6kjniNgQYwXY6yqGuLJfLFUh59bshFM3Wo4oGcE2JkFXbi2W91BEQWbM",
  "key14": "2whAULkiWv9q9Y9rVBaZFmBNLnBvuSjdmR1LVotzXCPj1erpkuhnvQPGfjQiPLjBV1b8mpA81RViQBZYumxpUXz4",
  "key15": "3mPQY3LSjS96YJr14AgQAZzB5dCU3FCBipWMPAGYv8PMhUUyLNYds4xUteRMiXAChgvzNw1vcKAZsX9U5GwjWhRm",
  "key16": "5BqewBLQnbYVZVWt6F6smRZzxKA9tehgnNfNYpxNmynhRmQS7cjLPMp4A3jKbbBEfNMjgMxHwzNEB4nVY669BRia",
  "key17": "3RGueH1EE596hFHfktah1zDxpHp1zGtX1RAAA2JDMP2dLtCDtSGhebX15Wt6ceGu9ZMEaDjYq9WHA437udSzTL4F",
  "key18": "2b8PKD5T9px4z9nBiMPCFzhetSWJx2dmfJg5EbaCWuf3ZVKeZJkRvhuspD1FWR7vnXarXj32KZUgZnd45vu38p1i",
  "key19": "4DDWr6tHHsZkQGnCkL2xpyDqb9Xqf9HqtWh3Pey1H2EYwXjXVBzzWCKQgfgdaegUbrvb6GVH1dsLwX2o4zRTBaYk",
  "key20": "2g1Vy3eogvoWgxcutpjp6Mchq6LBJWGRAfenhFCztKEzjh3518Lr8nG9T48cCCo5Nt1x1mhhUcoQspqsBvhtqmc3",
  "key21": "5MxzdQpBQS6NBsYQcK7vTgLyb3iuCBWPCwxKvGL2Hqk1JTdUCJ7b2jkDt3DNV5AZRaBnsduc9M9hcZ5EjXsMzFcB",
  "key22": "GF7FGunfRV3Ro3DQYmKkFtuQqMHhCVeXSJ9qCLH3ajJiAzyntz1qaAJtJ7ezRMgVANmn6xpi7oSfqY53oZT7zuL",
  "key23": "3k7VicgEUFPGFSUtkhsdZNJLm6XhSs3Vhuun1zNnYSXjWEsZKWhNCtxEhgZJgeVuZ768upBqo5NbUgHbePczgD38",
  "key24": "ngxcQHb7rybQMwb3YEV4ywJ2Ur4HSNzXiMxzvU16jCmnKJUHseyoZXnqejjX9rXT9xWVjmvMN1N7QMZDoMCJ4vs",
  "key25": "2iSRH2LFY1DYRhhDcWP4MSGowEk5aiWVjKSHDXpaj3uxRQzBcFhfp6v4ZYwiwLXWHGmjbHC7hzJ5iV4xzdpqMgrp",
  "key26": "qKixSbribUs3Kf4jpRpr2M3XnqhLYy433zhnKK2Asv8ZVXFg1AoWtS1vN92KdEx5ZmbVFjFT9EiQTMygyyCFkVr",
  "key27": "1XSppAborEXgvRqfeogwMEuvBJHNrWgQjPTKEGvAP6Y7M5J28zfVmu6nXUMfxQjWGhVrxoSmZZQRUxHz6aWBk5w",
  "key28": "5XSfWDt1LQC2VB3PGWB5qUfPx7E8pyNh24u7Fb8RZvt1UMMVAMuRLLRzBtkTuTDL2oy3WEg6VNhasqFZfvoAfQAi",
  "key29": "2m4H6iwNG64Jp9GSzULTaNgJtHj14Wp3KnBrDLjtPAQ57EZ1JBmGa2YbQWYchA3EE954Dytn9q76fXuHCLYbwebH",
  "key30": "34xxucdbwJ7e7V8XDEe85cGxMPWJJi5tBYzs5whJzUgFL9s7dx2wWoBRMKQ4Ma8RetVPDDYswAQhKQMLNEEQFTkW",
  "key31": "3iUJZ9FJ5NRvZRkgcb1JjN7XvhuYtCcavn41GVQQFiqpXKqvryrTNdyUgU7VBtV5Pn7TgpnwfndXk6EW1ZihFNdP",
  "key32": "2oHBWKmiTW6hPvHZkwq9S4DVs1XQSUR5mr5cvPPfKJAybiY296DJvr7VTwym12GohZn7oBJJnHtNERcBejKnVkrT",
  "key33": "2WPoNqatgqUqdE7KuvB4iwLY4YpkFQ98cYxGtZxYhrZYkzgJHzvUNG9eMhY15zqnjLAEGzjwF7a7gge8vRW2zXvW",
  "key34": "2deAkWUyxJgkdJPYHAhDkrYcF6wFaxG7MwxHwqeCNuFsBaYhM8ANAKkQijZtb5wugVZ3yABeMhbPRhyGELM2W21P",
  "key35": "4zs6kXkXrMmbUngbhs3F9BSkaD1FPZhTPLiS1zVyEJC9bw7RXzn6z8JN9hM6Rb6cQJguwSwZdaaUHsABUFx8Nwh5",
  "key36": "5L1ckrAwZqryqgrZkWYcmi89Dvmri6p4Tfm35kfnnL86D5dtKxT1VQG6ncoBbD1p89nMaShU85xL7thJ6L7iPbFV",
  "key37": "LSYAY4bBJUDrWk8G4pDB5qcqFGXkEpZ2eyctM8ouNpiidmjR66LaZaL9KbURtLXjuHZs7AiJnwGpdJxETBFNjDw",
  "key38": "5eKCetJJWQpmLMNKGWwwh3Sd7ARaSuGoLsUJAyP8CwHuF9igzzFSCzeqBqgZu7wqTCUmT6cn9FTSt6mSkWppFv1k",
  "key39": "4sbpQxprSVs5Y8QSgbqyJTz55eyQ7spfp9PBTYWWZH2jrVV3knP2Y88weGGKCejmPD1Wa5NcySATsVkAKcwSvpnS",
  "key40": "P9eEZuokdPpC8YPKAkHxKR7Ybo4EYfSrZuQwddihLJPm7YDYsugwbFPgUkLpjKPDYiviGRh1grBa8LBds1CHMVA",
  "key41": "zYfqHXQFVYJkHENj2uYMVU8Vx38C37Gb2Sfeg2CuY98yxATsMdKDcpQDWUQdj1bHNBcXNjTx3svLUarLt1ZVWV7"
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
