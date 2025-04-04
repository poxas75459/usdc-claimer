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
    "5kz8LTp99UpB4Qxn9uZgEhH6JXtdTo7XuUxorqSLAwcyv2M19YTbdrbc3NuAcwhhKJGiSsJhX8iw2aUwkLSAqdLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RyBRVvnLz7paK1nk7qodHTHziJFMjua6hP3HvpP53GHggpN8yBBiQYKGVGNyfsYgopuuZomAfJh9qn7h72dJn3G",
  "key1": "2z3tkpy19DpGsPZTcvWjdwBSvTrd1UCS7MgkhtM2tRXUgypkJ6Tw1TkumG62tUHwbLyCtyLzXU4ufwyvYGKFktVa",
  "key2": "3oYmTvqdGpQuS33YTxNPyt8JRrDgCJdwhwTrpheXNvtBVrTE8S8Tk9uFbVAthhyJW2FmjQSKd1pDtd5A4WeNjw6i",
  "key3": "65H8FuxPwGHq32fCA9ZVAopr9PkaLY2JcHWzmPP7krDnoboHux7zTAAf62y7LScFiTdNKAYnG5eyDT2k7uM5bt2U",
  "key4": "pjt4eYEaDSdMnJQkmiYqeFm6agu7B8udh4sf2t8HUk8BRDQcLY4jiP9Hc1gjvq14y5w4mNBW5EH4foZ9RRn7HBw",
  "key5": "5vutaF1gKEsJ9CDybPQj4VXhnZAQ9fbhXrLbQGFQazcuCuSm4RpBLxRshXAsepLqB4i5E3QvjKDQuyMLgpcfkafc",
  "key6": "5ThNbs88SBmboMrxyKCxtGp85qrfrSUxWrQwGv32pdjP2nJfuSj5hwWyD7rRszb4wyo4q2bQT9fcv7MPf8CTXqWB",
  "key7": "85RPf9mE4BmVnu1aXXUvYby48Ccs3iBkgAMZYiLoExAgMwMWyWwzJBkhC1hwy6iJFuSHhZRTq8VRyRutP7zqKhZ",
  "key8": "56R5cXn1iif6qkMbB6gNVw9GaeP1BWPE82nWwDqLASAt8pTDaz7qZA4M5VcwHVEanzSWuMcfKaAUtdSGMwmc9KCH",
  "key9": "51HN11AU1K2Qe1es3Cs7rSnvgdzndrRxYW8GiuXA5CkcAYeG34fgsLv3uY58H3ieaNtnn5f5J3KLWqytyKErMfCX",
  "key10": "21MLBXdGDNwvfzLqsU11CGcQJRUxrNu7MZuFa1FP936vSvVNCtJeGUw9fHB2dcgRfDu17SbxzJEBkBuo2yUeaeQk",
  "key11": "2nPkJX3V3SVfdkPmvRpo19ShMi6UF33JJ41cauF4Ak8AHyxBXAWdLgrjync5SVUtagEjgX9n3ANxxGqxobg6dy7u",
  "key12": "57rdQbJQkkAy3ehE62WPhL4quju8MFDThKEsm8NbzPagbA1DQggZhSBJW8QHrsPSnJRw6JhBFhLdKURB3L6iWAAF",
  "key13": "2VoAc1pEvcbKgoDAcqdevv2ptHQjSXWZPbCvgkVb9vSWwMn2kyiC4FQ9TKfRevjzfqve3kAT3FU2V4GJZ612uneq",
  "key14": "5YyAsgDdkGLnaTcrEJDUoj6y7us8uHhJEc2C1CgxiPYVYT5zUKxGeDV6HT2Hy1ALA9idqKoZ5Xy3icSBtYAPbvPe",
  "key15": "rKro1KCmeAQjNpHmEiePNb4aZQiz9Jw5KkE1t9PNoEiiuGLiVWDfTAbPHdJrcyUBG89CK7G6eA5CCWne5ncLR5N",
  "key16": "2xnCjJDDFRxuUdEJY86Zgvn19KThbRX4p1BX445Bc6tymPn9aLY3HHYembqxMUeNZZ5pATBTgHWPsYsEvtfEWb8m",
  "key17": "4r1sbdWEMGhiAuPbUcm6zJKf2TFX2mDSxvk2dn8ANkWB4kE7mUDpXjw8VajBmPAnc3iMUJ7zm3bHaXH8Lewi4Kro",
  "key18": "7X6kXwiEUR8PJUAiK6aZ2ibPnXNamWkrspm3JHCgBzFsNhgt1XZbLNPTR1aU7mCdhFqoZzYHq1KhFPy7NRMmCko",
  "key19": "4uFS6BR2XuU89k2qxeL8139VMehF72L7bhfi2b3XUhb7jCuhEiHcmsPS2ZNfFE3DzVwV8Dr9A5gtmhygQdHcg3uK",
  "key20": "65xMgfHCCmNpj161JYQNF36BbNRoCyuSiGw2brpPp971gtp2WbEght65L32rtpSGRgbWmCC68SoKvFLHY9s3BivJ",
  "key21": "Ax6CBiiFXDruY91QBjB38KsXEQmiWRUd7XbC4pn4NiLLM1oWayZeYRUwLG6bTWXKBieQAyFvxXjJ7994m8db7qj",
  "key22": "2sbnwmMH4okix5kVm9QhJMM1xQPTmFZgVGB12Zrm6tShL7BYX79PHGL5H9ZCCdXov3uPhTQdc3DuZZbGh5JZsqgA",
  "key23": "2keqxdnyoGrLKEXA8J6xh3Fdxyt81Za6L2hvWb1e5Nchn2TBjSywxUngepVjFhezcAC8v8WxCKBRNnafbXqtxxw",
  "key24": "emVwFMrr5mP4H6MrHBKxitYRjXHLxrAUAnP9C617hrMZqfjodQbpBS1xPREon9FSHBhaXRg7U4dEdbqaBikvv1P",
  "key25": "3vVaMjwwtCZUZGzzJHzPaR2Fr54Dbjvvcec4dJsEkq2FdWbKoqbhQa5MoEdPphXyAbJ9G2vJ85B453UgXN8ZWmWS",
  "key26": "4RDaPkzkX5yG6J35q1LftnXAi1n7HyfycyVsyy52QgBr25FR1qWiVztm5J5sJzrDtgNibr8fd4vjtXravPW3DcZ6",
  "key27": "4aEb5tvT5meaj24NxrsVduH7xgeN6SV8iYTKp7gmtHTY6pjB3uZRWTrwwWM9DJDmvESucC1dwxBnJyd3SjGBFR72",
  "key28": "5fJ8G5UFp4smj3TkNoj9VzxzDqJyjkRC5yvPgUBNr9v9tusCuYxgZnoEXmxaTFKzApKL3WmiLcvNt6PKFNJnC1Fr",
  "key29": "4LDanHkxEkEeWkq4GV94EmoUSC3gWQNYRj6LnXdVDpuY1UnJGJS2T9NENzuqt8N2er71dhr9yRiWGYKgz4XQC8ub",
  "key30": "4Ce3rZq3P2TKpHDgRs9C4pNwxTqFboWAWxKjZo4YYvtgW2MSiidxwNqQy5Hd6mwYPAhenuEbM9de5T2dNhstyzSi",
  "key31": "3SyUjF1pY37ty5pav7sD6b4zNiNN71twUZhR9npPc4Tjd22tYASBRLjFENHbxFoStPiLBwZgxcJE7zHQB93Jh9Lj",
  "key32": "46paqFU7cGezEoaq88gB4LwtAQGUtwV3y7KBkv6XLCQTq5d7AgpXg5M3BNirw6upTNUtB8rfPx4hu8JJAGmogES",
  "key33": "DgbgZqAibX15gLKrFCesgZPxJP4Ub55VjJ1QE6Q1YWjjCRQFJdpjt2XMmXHmcDeX2E4tFiCsnzjVm7pXgpMRtJ9",
  "key34": "23JPFzabVjRaP9E16jRdDxTCS7kuv8eHjP3y7K3qNseHvWVaTFAaYUCx7ce66VzAWwhPrZBm8kWkfs5y8KHLStUt",
  "key35": "2XGVEXcr9GtAc2smaX8PnqpB4gFLQnpEnAVNjszs4xraYfmiuNZDq33YTfRUA1VkYvqMocLPoZVRkFPaM68xTkH9",
  "key36": "iKWvXnA8V2w6Vg6YSWHsYYMwpZkxTy5avoF1HfiHT6KCp2TVcozzJnpwYv2MHdL2qLtPBeoUHUd4hmkSPHziK3j",
  "key37": "5kCaKvwwPRvo3c1izZognibugfyaETibRa9cUM8GytbcKauKaeozyvCEtPmKPZzAoY3EKrHHbbojb6jLyYpUeFkS",
  "key38": "324UW5bWaGea5V5zgZaARniT9hGtQfHN5RRy8brAa1M85pzZGFGA7owHA1p5LhjhimreKMfgxyJERjmGoAWuTnLs",
  "key39": "3PRHszMqAmUiPvWGpcx52rbNAJtZ4jawWj4A9xnCMcgRVSyuxKx2n8i2MKNjtCtYMAyLr2ap279N2RRQ3BTesSRF",
  "key40": "4ooYWjPgr9yS23GV5LtChdyrzGcFZNFFwu6T4T9LQbPPNvroieooCnFB3MZgbMNEqYJQs9SLtue3j8AEXCkC84nr",
  "key41": "YVZCK6G1bosGVjmgbsiJmWGtJfEqM7dK5rAn9mUb9JiQoAm5M49zzZZkRhKfTLp4xSFqcVNnsxbieXEV45sJE8H",
  "key42": "3SMRBqSvk8PjWNyuAwa68wnuj3R9siKgJ1jk4oFCk37o2a8UYdS5Y7dNVb2iBdjnNNLgmRsYEyCHg3kNdR2rWEgX"
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
