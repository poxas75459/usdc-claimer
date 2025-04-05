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
    "39eYH4jSnTUAj92DkW3K9wq7N2ezCbwSXdMFSC1e99ckYH4vE1DK82bsGD3kUxhq5eeHJ7HowMNGGhhaE7coNCra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjUiQkyyNDP4gcQb9uq6YNCup9rhfj2cxSrWd6vosWqoWMWFXMY36RwKp2v8SYEfpYjmRJxX4VfwYhdsg94PdMU",
  "key1": "ZE8swcGhGndtLqJPmPUMZ1tKrXyqYovdzuzUwMkrSfmPzqgTgUT8VGokV43e2jpdxWaSXtPftbASe7GJx9rfuy9",
  "key2": "3Tmn7KxqR6FGiZgeTKJCqBNATibaLE56AjNn7WfsDF2GAxtwAwoLGHsr2VrPoeqeusyFuRtbGQ1j9BaHrhSsUwbV",
  "key3": "3Jc4CQkkEzSsHQnxiCYxN7RnArL4zDhx5CGhB9c62hmsmXHUojMXo1FEs1X5LvyAkjMtBanqJLGQuYd41tHD8VcC",
  "key4": "5DNwWpnBTTNrfCoy9PyPT9nG4Va8P7cJz8RKQV1AnWzZmcDJyoQjXyxp1MUQLjzvz5HwhNWcDUjJUK7De8y2mU4A",
  "key5": "59xhJxqoNfFLnaE3qUGACSbCyrTGhfsjYYgr5pLG4QFBVLi1Neu7TTTEGew3Ca4hQVGZAx8TyDCBdx2q1JWsPo9N",
  "key6": "2HpNUXPttQYAjdXaWQWKBBd3kAZoDzHbLAXEr21kMEyx1t23ZFSqXchYSE5yLUVZrSnvcyBD88cc8oPLGsrDtZi7",
  "key7": "4pDWY9o6VKPE3oE1BrRj7NiShwrR1EYRyumdMTTVhNZ5YG1rC5Ldqebn2EpX7mh6hTd36AxegT6kHApyVDYzeN3a",
  "key8": "5y3HDKZfQF4aYVoUxBFBVvHPDsTBNLdZEp7neVrYQ2UxayJz3EMefKTt7tpDKUmQJBgfiNMjV5FNRpUHnyj9p1M4",
  "key9": "3MRBGJQSi1wC1eLcdDVdHbqyAzvVxb1CTE52F6NV6ccP9fgza85js7jJL8hnVrKhMiigyLphURwxTXyMJor9ZKXh",
  "key10": "4XZ98iWhc3DuL7G2kMExaceRAsuTiav3ocLPRESiQTDWaxHYqYmiSXbn6xVK6UYG5ZUbD2MzY9yn6nVq89FDDc6F",
  "key11": "2XJYwtGsEztHbpJuwYfPxaSnWidj3hwDe66Ndsob5jiY1YHz62sngybxHqwgt1BSmP9sbacSFFrDZYiGdDGm6nmE",
  "key12": "TEj9ApGLSYoCFWrCEKDH79ozc95o9VzQbXKu3FkLothfwAaiYJQ4h9jUhZvfG6JMPDVdE4EqtgpedV9yhfEzusn",
  "key13": "64NMdjGFRFEWRxuU85SjtAUEoMJMa6bW5PytbdnMdp6kaDtkvgVvHdT9mmdCE2DGL3Kwp9W71RS7soPgB73JyL7",
  "key14": "jsu29xSbbaHsSN7D31okDs3aqLCTK3ph5C3mz2sRCuU75p3WPKHNbGDTY7rw8FdAQyWgt6kpUNJVamzdaCy2ExF",
  "key15": "4fKKS15r2FaPxPoCrYkszxhJkjVj7qLWDURSdV5bYrhApbZ5dMK6hSHvNaHBQWFD1aQ5npBUkrZnqg4Vfkn1zXSU",
  "key16": "57P5cy5Qu2vHqJcHXJBY2vaENPjYARjVYvSqJz2q2eGiotXEqDbCZPEaSVhEHYFyCDov1x8PejmRsGTa99VG9x99",
  "key17": "QbNkMA5Y5GiGpJ5r4uGYRL5aHgFbadtPGfEhiD8GtCYCWNN1RZpV8bXwrmUnpYf7JGVFavt3szSVGqxBZ6sYbhy",
  "key18": "3S61QFPbt55v8dyhmXmCL9kYkphNYaAbjp1tPnCUEDVH1pqHS6dcZw9Rh5U3e1UEmn1xwqPFuPxpnzd8qS9oyfq",
  "key19": "5dqvtnkPagaPbECD5iu2QhuxJezGfWVqYQpMUR4ppCykT7CixBESARR7QKSeh4hGuRvY6Ff6SmZBYZfFcXVzsmwd",
  "key20": "57wBKCzdqQSjZkVdLwkDKDXN7rt6hkan6jNLerHgNoxwwPkNz7tUw331EifhHjjKeYoVTXsGk54zjYLif8d3MyRr",
  "key21": "coavq42BCTu6R2fj25PHLAhe2Jer4y75hpAxtxJ162Cwss8oa6AgwqjoDGyd4E3syRzWQR38pzFJowGJKE7bDqy",
  "key22": "5o4TMHCbE6ZV8yFaEmZU7NzNUZkHWiBpXwiKoYb5YKKsQUKSvHJMk8mZVo1GaYVuC45nhatBCUxQDbjkM5rFb158",
  "key23": "2gUSvbZ9LLdHG9TKDePyrPEeMP5JpLR2qW2PMxZZwtWp4QDjuGb7vLm2B4xpjdhjtt51gyRJumVzbeuPt5wXwPRz",
  "key24": "8R11DPK88nfW7WcERedcSGgh85pkbn4HEN7XRqVLKtvP3EKZR8h7MdVz2YMRANMUVvYrxVtUdCNzphDdV1dmGqD",
  "key25": "4wxCv1SuXRho5czc8whejTGEHLfMvDzkGTj3rzVmK5U6JUBdmHa7SumqDZuDesnF9tGBdYePHMEpYRVpLJYmN3j5",
  "key26": "4iKwkHxC7banpFsqy47HnVMeQdLN6Gfmvbj5q1uPJTv9dersQMNpNbkWvHMvN7uhh8P1CiCdaDWRqvmdBpoh7BKf",
  "key27": "cDPyF317AwBawA6HybwE19FgF1Er9zB6uhmEmVDeibhyaWSb3kYExRyuTdtVGbQrAnPRom59pH3T9sWAQQqvYGf",
  "key28": "4R2Qx2Rei4r9XqCs6XhpKHCbpoNbzE1RUozt6cWHNe4rVMed1LVbv9paUg9fCozyNaLRGRsgH7igtVgxhN1gciUE",
  "key29": "14s1HqjSL4bnvLtwDhjLgxfkcEt8rYtBP3iyJxYaGa7JfYGU8D7STWsX2Wy4iuz9nVwDrFSSnaR8UEkKW8XzqST",
  "key30": "mmkUitiXe9uqBeW9vauafFQVoVvcKtHNifx6w5GGuH6EibDQNYp5MzPhcrsRrc7oqQRWn1fLUtvmPgT7mAgnpJS",
  "key31": "54c5Un9GYtf2dqWcxQhrBfcPHHUimKaF4TGwJ35sK8XaNahb5VDF9AAPnzZCBxEjorKWTpZXHmVMruACR1ZhN6YP",
  "key32": "3EwkJddn3XoLbeukMhaCaVBmq1uNhqpunay5EtwTjD83oCpUb2Ghd5BhQVWmpwPywhhDcVUqGm3Y9mEgvco1ibjT",
  "key33": "YSG3Ytp6PBy3U6KNG49hfxsGdqtC7491RJ1LejtsiHCcrDneXVVeJ7rLuunabv5CRMNQwhfWCnqXspvcF8Bkfby",
  "key34": "5MhwugyAUeW3NNN6ogNT8a4p95QzuSjv2iWv7sRipeE3wWJf8Q5qTW9thgFvwfPxQY9nKQUD78SHgYLjoAicV4u8",
  "key35": "381f4abm55MZvaRMUXDZg9PmYAx7jf26tvEiRwwpdt9v33R2AVJpQf7JXw7eotLTdt8GnZZpMdhUcDt248tnGdRW",
  "key36": "6bvVWvubZkgd68MUFYBkUpaECrC2e5Q3ztksCGeAgweCYRaeguK89EDiyXjx1RwQK53zDuJv8sRkgj9Kvp9x4Qj",
  "key37": "2hjnhx3KsFuKUMXNCYQUZqGFsfgrEYvwQJsVZkVCsY4Gd6VfNJDrNoc2KAAuBWnSsjh91GBR6xzAwRMLN8fCd1st",
  "key38": "3dcrVjPrQuMsECvgpadVehLuY8wYRx6R8m3nHsKyR9ZyvmZkP6SpsveSyNdSgBqH8861jGcWXw2UcHDrDKbRyYa9"
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
