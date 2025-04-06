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
    "3sjFKEn9wroQ7vcn2ZpJFyDwVX9CxiDFgSNCscTyxaUb16TzyuwwCUijiq8x3bqvaWkmkJN5JfUtW1qoow5CVPQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GuRScRjqDeZa5wzuNcZHNyVHghnem5zVVi6KRwJYJGqCNZ9CY5H7ouaN232hSYmsRmUiS4Lv4hSUAeRoxo2pQtb",
  "key1": "3UZrTTYETaA97uUV9UV85yNhC8JR7vE4g1DArwkvQof2qgfyXCttZwkSsB96PxxZ1kkUFd2rRBF7xHwPofJALXma",
  "key2": "24bGhgWitYCNPqvbuuW98Samy1W9ZCzJwzkabwRGWwckwLELBKdH33Nb684rfXo6rLEJVfuurz46uE3hxVq6Twf1",
  "key3": "2zSzyEJ7u6MNgzFCGMKt6WxFSbRHfhqxXKieYPcgGCLVYxHg1PPx8moNjyq2jSUsQeYSBpYUxnsXBW8NdMiEuJvh",
  "key4": "4kHVM73m4DoxaLWgmQSGnJZBySGEY9y3ho3MNZ4n8ZXRqFjKyr5gactZ8EWRd7X6CMRG56CoiZp7M2HBsgxC76n9",
  "key5": "Y7jPTmH3VHpDCCwL1ZiDLDCw5Pg4CdKWWBc2L2FCDi1qzX7aTw5h3FXEXyLsRXZAaKGs9yJDYeKA9XDviYWfEDY",
  "key6": "2Bq3DCyKFifNnsQ3Q9z3d4vQEizVxjqFjft5tXjkZ7WLjc5PnVSTbR4WhWKov8d48aFWnSoC18VMYFxPJckzHcKZ",
  "key7": "4P9tZaUK1GZmRYTnUXsUCnVRsgdeHFzgFzoouUMP98NGkcRxcY2YLeVzhdQ2hDQLcjaiG9EtzxbkTQhsNwjiPbF2",
  "key8": "ihJo67se4XRvXExeasMDGz9pT2FFuX5xdPg74e3pSS7zN9th8SECeibybASmgxfhqQCKG3LvZ4vY7YnNMhHMmcC",
  "key9": "4G7sEpBeYkpfiqeShN97neeYbaTGbnBgA75bQK7vKrmDPyYxDdqiPLxyfTAyJfAnR6ZfL94KJE3YvdjqvzotFGaZ",
  "key10": "46tThC6WkcMpfzincYytECh33zDyA4zWhmaCzL9YMs73K9X1uFajUGUzD2sA7pmaVYizx83pnrr8L3MbGCotZAmt",
  "key11": "47k3k6STMoJLmcPCwK5MxVormHpQB74H4T3FGXtPKtMXQEyoJThRSkAoN9826DpDU4DbUK2ixFe331nZqE418jWB",
  "key12": "7NLQppAhMzNybNwh6243UeyhLUuX3mpn66EXQUrY1tGf5ZZTY5H9GwRbSoShBoaYUkXj7TLc6seVoHWGmrP3Dp1",
  "key13": "455bJkQ1zK8hzqESVSDobHCG48YvAb4uNTgv1MeR7pvk3qDJuAGreNWGN13d6FSipxnrN8ArDTErNkTYK6aZ2UgG",
  "key14": "3KRSZrzo9E2XNTDupWx13zHiQvqRxx5kP4Pp3SH8UG1RqufjSedvyhB7cXDUKmSqWXLW1zMz2RLe88FEQ4R2Zadx",
  "key15": "3obm3VBuBAJd2gVWMWfb187694CVLrGzctu441FJmrZkS3TCSxJwhUwKRnidNzXkW5cHCSPGcL7ZXCHeEKxGZ85W",
  "key16": "3Ws4oJ5GdrLcSvYkEBf9Nx4sqrHSBnLY8f4V4Bvd5DEGvcKaCMu9wwTEpgPovRTNgr25VgM4NarQFJV5tYWL1vEW",
  "key17": "2YMujVihoHfG7bo7sF8ttZHdAhc5Xnf77sjQ4CBxexbDmKDTosCkpLL1PKyx3yRrouSUMqgQHe1gEpngC49uk7Na",
  "key18": "3amm6XFBd27muw3AysnD6C7ZHNGNp7XKnRR156xD6dap3toNBqxyNYbepTupoVdVHB6uDRhxdpihgxPpttxTupBs",
  "key19": "21nJfC4NKvDCMV1jz2a46SLZnqwxVj6MivuYBgyZ7oJu3Fvz5B1WKnqM1sdaz2Ghnnvd4GcvjGpheF8BFp7JJ2Y5",
  "key20": "5PYiTdmbf4mBU9sawFSQgLMfEQcq3eKbsUTKj84uxTX276KF1CVyfqDvR9KrPLYWAQo6c3BT5k4p1FHZfHGeh48K",
  "key21": "kddAcPPymGjhuC6gmu8NHttiEXPZBAdMy7jV8CKD8xx8cVP7KtcpSEnfGvm4DrUBhj7SFVqk7CZZRyM3W3jCPD5",
  "key22": "4tbUza7FUzuz8wfUwghcrcBjf6wexxsacSTjUtzNnHNH2FcPAtVXSiB2Wt74iF5AiuQXjxhpuBAkb6xqLtn6DPnD",
  "key23": "2bwJcyPoBjFCbMBimc63FGTjUBoVhqWRbBoKzxAHM1YuGEFP4vthNh6mBcZehWSZUaSwCvk7TLtjzLqQ4XLxGYdj",
  "key24": "5pw8U6rie4ykU8buTaPyYF1zVzua6dD5VGUhff4HTd9jSETXsSuhc5p9JaE5g6EjhonYSD2NkMTVTtCqsGNwjK5D",
  "key25": "65CMpMKTYN9Sx1AFngWWmfGg3K7Zpoo1kaHGknxUyjiajzEFJ8q82noTwAzba6KPpLaEhRVLAcvbZ897B3ggu9Up",
  "key26": "3ChiNvKCzLj3eUwC6bon9rxrrZcHa2MMkMvkswiZjs55CbyEsS8KvkaSoyRDsRNuq1jbdvCokF9NpJxNYrX6iBF9",
  "key27": "5uegYj3dPPEuKv3SWfQB3P2kgqRACWeUxsKXkqnkgtPDbP8g3bX5dvDYf6je28FnuJK612sJEWZexZecPnyaRziL",
  "key28": "2ydy2A5uzF7h1omKFmfdDDBFrKerpJ1NxAL6ZMYRZ6xcjzJQXbU3EDV4c2XVDpvBJdokbwjPpT8X4crHCQHFS8nd",
  "key29": "26bhHLSgZuAr6CzgR8m5eKfDzn1CDU4gFbGfTYjRUsEcfkgd6NSNmV72sH93ctdFMpQNikHZqNdbexUQreVneNgs",
  "key30": "2qZ7gtpLzx7m7TVyk7mbdSDVV9vVg8y6mmbL9siaqPTHuAfRiYNbatKhSqvwCEa3snWcfY83CkzPTQNemAVtbsrx",
  "key31": "25ErKE5Zv42xeH4PVmnXh3idK1DU1AGcm4kwYGL9BUhYBugmFmERcLTtzyYvZHaBYcz1Znks5o2vwKTAUi93uJRE",
  "key32": "2AtCEewoYq88LnfpUgfgbNngA9aFXdQk6me8vR6CgWmQcqH7LgvxaSKPUD5Mg1gnkFwfBVUjQKosyvDuDM25rRr",
  "key33": "5crSpW8vqXxxuv7cTCVPYPyHHxLWiKU6HQqVk4VsgpCcYjtrGak91G9KAWsW1E1737QSZQrujriXjBpEsGm6PAJD",
  "key34": "sTZQnFMVPJUngNP4X57Fo9synUCUUqVeTeaQMaEXzv9gtqwZEztdN8Ggc1MrtACtGJwLaR3yanD4kvXKmjGkhrb",
  "key35": "5xdWmyWpvg8K8ZhYsQYbQJD31bkxW6hWEE1htvKkqKTzEcpgK9XonQcN9ztJeQSzGaRhYwEMUfTDrpB8K7xheF2T",
  "key36": "5nQkVBVQebmiUDXPY9SnbgUgvudavH2Md1CWh4qBKDHhyyHGWH2PJ5NvgmNQYSsAfcyA3mX2fR4dVZogWpyzuSUX"
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
