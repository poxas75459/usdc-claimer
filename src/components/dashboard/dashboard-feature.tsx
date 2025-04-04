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
    "4dipykjsw6JG15rNVwaJRkS2bhD1qxYFEdfTPBDwQfqEisW7RcR3oWsMXnkCQakt2StVKSPbPYddaKcozfundB6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZDtxu3fugtDuqGqqah912aZJDSfCiXgsxf6KhzTFJKC7Y24AD7c4FBXaYiHSgmeuBkexKcArLGXEhqTtZssjzks",
  "key1": "4hCWoFsefEGhW5f8ASXk7fLhGTFCfWAT6AJHRd16X48SC8XXxh1rCpwy5xBZev9cH5sE8zMtV64pNEz5jdyv88xr",
  "key2": "53QhfjJ2F2dtsnrLBT3cB4mi3VbK2jzGYKWV4e7opktNG58LjnDW8PNVy1GDwqavQRvnSkcMW6w6Ze2AoLcnoB5L",
  "key3": "4Ni6tCsmS1k3Dug2iQuMfndgFv81gGqFEbQrdsDHifcTidrN1Lsv4YQfnkDXnjExwkkLUBjPm9kZKC4GPPQDuKz3",
  "key4": "m8nCaT5o1SmrM2FsyRCy5mCB7KaCCdBN9eB5nbNfJPC5NPZb7fkejBPsZgwRnxBD1rNkXH4BgmYy4vcWXkgZ16F",
  "key5": "2eyksusZrjUahY87FvhdFdZ3mijaSzjuhvV4nT8gZ9VY4rwLGSoFiJ424B6meT4bgRJtMmR5KPDc2ABRv7qho99M",
  "key6": "jkPUAw9qawFSKHcnNit9MFSouNEb88JwaoRNwBMnr6j1rsgFQYt7XmjDLFFiZCofqJ3ryz1JSWmhJHaFZf3qy8W",
  "key7": "5PebJwwDajvuopwCnJjk9EMoTNgwgL72ooXd6DJ3qWu77TduFs7x6PbafdpynK4fvNQiRod5NLFWAKmuKBnjxFGv",
  "key8": "48UySkjQyJhZAYVX1QNGgxJGSeuEwiB1nixQ2pwSxoAbYrEsn6qVhKKg8NkYBpcRCxRy9JukZQehRPkc95HE2de6",
  "key9": "5aXfy34cFLN62NP9SzoEq9unnhWTVash6P7h4BYHzdxDzh8PX4YyNLpiEmtoH2wYGjFQTJUyys7b12bVZCCJuvih",
  "key10": "4U8HHAfqtKiRXRmAGjWDRyD3xVtp73YkHqMdHw6Bxr6y3sH4y2FHVqdDVejQNXK8919GPy48UvouqRTD6V1qoVLL",
  "key11": "3EnQ1bBfy8L9V35BFCR5LjUZhxqqxUhuMFWdafKb7aDEqcayaLRko1p3P3F7HJhAUcg94v7jQ8QXbF2aBSezRqui",
  "key12": "Du9HviqxGfXyMyyhvf4ig79WZMvFyPeLDbEa2eBq2KiraGMuUoRRctbVitCg8pqC63jH9MdPHhKgVRt2Ls3YqT3",
  "key13": "CEbnsnub4WdV8yrzmcins1sJ7eLFLnjRRVRVmSGLn5qSkpPhYYMUGnBzKg3s9wxgBYe95Kg6C56bmBtFTYTL1MK",
  "key14": "5fAc9XpC5Wi8Dhax6CBCCBqtbdC3W6BbryvQHqQ4hwfmJfcRko4DECJzCdvQLCc1WXpA9iQYwTMgrp4K8XWKdaPG",
  "key15": "3snqntmnqmryXBuXiSKfKSV6BjpERZjTtaKZQUfE3d7Pk1mF9xwN2ueKMuZLdjphuASBpWhKwgng8TAggknXXmH9",
  "key16": "2PsPd9FgPFNq9ry518ciWfFxKnZF4f563e2RdqgKC7XU3M8dneWekbgr3CWy3fU1FRrhKCCugG4uJyu7uiR8F5eu",
  "key17": "2z67pAetmHoibhotdbK9gLNXaaFdbbtYWszJN3FAQjs2dYiG6yhtKQadmfTuErBt7fpbtdnkFk1kk81djioUFHRy",
  "key18": "4cn21PeQebR6uFZ4wXqdxaqLxbwyU7hkF7tdfcSoMUoujXxFvufUftJNsWsam64VD484wp2VXF1m9dKikbmmbnCn",
  "key19": "2Gbc2c7xpv6m1YyioAtjGbxT45AKi6PYGyQ1e2ZiRvvtVxf2SW4LVySFL2NGDant5SPMEbYUsj1dSe7KAK4HQSLu",
  "key20": "2muAw2q3gF6anF1hweYj7ZsGVFUY6W4zoWZ7HhvMHjRjzUDNhj7nDkU761rNTSyQyYVwCACejqXSGMCvv4NADUWp",
  "key21": "58pReRN8W5dAQCuRuMHHFkYgkc2SHaK79q6gzSuQuqVs9TKApiLQabssWV2iyPehKoEQH5oL2kExhbfA7BZPwYqC",
  "key22": "aNweyQrdj2UaD3u1AGzFhQvW8XpL9sVY4ZDLbZcy4TG8H9cBujPNmery7ohGs8FCaZYSxdwojnJRGQxcUr1mnSU",
  "key23": "2EEZ1RhzjsyWCMdStekGxDppuaDHyAA951u6FB93hgp2goWFkxeQxJ2jtdgQ2tcicr5DgS8J5W7wgGQdvgwFECvY",
  "key24": "4pjvqyAMQtqQfqE3y2GbhZQF7DGK5gpSHb8gm6TPxo3cqbu6krSyZKxWJJWDMDiXMpfaggyzkXypuPX27Lf8v1Qj",
  "key25": "zYY9vpr6zWPB8NgVX877xVGQ7UYQ8xhFnu2uSCCWd4BAjkTwurhnp39EMpdQVmXYmRmmZmYMCSVDfrYQU7rUFH3",
  "key26": "HQJfsgw8HKzDacdMwrJTTmQoRLmi2ArRn7ckQx3zSrjagn664jpBiur88H2gNKfZkCVa6Z9s3W66W7ixMvbwvMM",
  "key27": "4bK3VtNq7zXSoVTTyKcztXRcdtXkorRdyNPBqWdQfR7sZ7W6P5uUCdqj3NnvzGWLAyiX71ei9TPoW3p1CM8S5AfZ",
  "key28": "5YzM6m25fZeeM1XtSMcmfwNhwSMpyxkwmxwxrhG6Xn3JS2AxqZu4V8WX9KkFuegcEMTKd4C9Aty7FApSiqZLV4kV",
  "key29": "2eKPT8XzZ9r6up5pUZ5v9tPV7HjxUX64Fjzqkix3Cu2NUeiWnTJBQJ8BXqkSWvtHYYWdhP5FyqFoMvDRqhLKRGzb",
  "key30": "595bJN5dUfCNypd7nL66p9fCCaNAWQDFwZ2soeW9eWehjMwWR8jYnUNi2wWbjjhcAgVGSoPpndT6E4MRR97k5K1h",
  "key31": "5NP4BdDSJL6oMBgnyb67EPBnUbSos4jEmhNeY1HbTXBMafR1ZtV1pkKKWptc5uGZMm8Fj7HAVGnaLwaTW7EjGd3U",
  "key32": "4GzpLqhSveVqPKkq4Hxv6v8kcB2QbFTZnhQgSAcMt7rEnYYEdPo495MqJQSf1HTTPgPCMkNcYw632dJQYB51iZcn",
  "key33": "4phFYdictTCdxSTUMuHyZcSmRWuZEjNrE5WdLoYp1dY83ectCWKs36mrQxR59gwVmrhRH8ysTuJwYN85p1SuYNYx",
  "key34": "7SEkD1WzfHYhDb1VTn8ezRjCWs1AMAwobFESTGgn638EoxCtYb26UKFeQG6vnsqbnk66mPBPofZz2KCWNAvTTtV",
  "key35": "3FTFJuYEEUPeS9MHrCdgBsReNY5LpNuedjDBw9KcffcaGamdzLFiuSKvSRdn6jbPZf71seFuphVndQEsbEgTyxrK",
  "key36": "zKMmGrU7s6zHSgb1hg6bi4Ht4Rz5caT5UsWUK1W7iSaoThTbQ5gtSwaSj4e7qhQD6Uk9cGUJV7eY9nkFfMazcft",
  "key37": "25A5kYJmtVYifmgKnSuZnHAaapzBVMLw2oFzKbYFAXpRW97yZniJt4TfySbEXy85Z9XhAB8uADRqSpv8VUHRBVp8",
  "key38": "2Ta742DiZUQQzitGBJE43x2QjcTZwSmjUdVQ9FnCyvXAkyqZD9VSjsL4jq5CtcYYBFr3CZsS5ukK7UmPmFv5P6DL",
  "key39": "5D7Lx4vqu3tGxdsHrMkoJEPW4v2FMjaKnMaYy9cmtytgQJ4rYQECEpifLpN81uTAR1TZqPrdVQCCVmD6bT82FFsc",
  "key40": "4x6upzAEmwuhb7N9Yv4EAcWHymcbbZzggdC2eTSGrCx6618RmVphd7Lm4rjmf5tRZ9UERwAqswqeXBR9subybRLd"
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
