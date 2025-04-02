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
    "3s5a1FE2NUqjCTYkvwR96ZVq7PRQB2NDdvJgsNQcYhRaa68mxxamH1enDJSBdRMA4pM2gTGF2J3UT7QcfWAEK7bA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2czDicNLtMGiaDjLKEsPB98jCtCAm8AQgx3DCh5gfxV4ptA42m9p3mi6qFFK5THneKaPmhCSLebrMkcgGNwZnjKp",
  "key1": "2UnJ8TfSqwS31v54jSB7xCPwqgG1HngZUieiRWrVuo5bgEyhCPDxcfYYS2BguSX5ECWXaipL6X5v8aVzjT3zDTLQ",
  "key2": "3B9ZGyDJh3fDRW2XbLrjnCwaEikiUBJE6QVSg47Y29ZEArGM1YUd4m2MManCZksU4ngBR4KGep4Y6pRupQhFDk4z",
  "key3": "34a891L5g3vEEBJhDccw1gLE5zsnW7ocVVUJK7524vTefZKRukzXuuZLmwMfDLYMpYkM514yoU9GfUE1DuyGHcCt",
  "key4": "2GSuYD2FA2TQugEeaB1pDfnn3cKzjBihR8MZWBmLrt1VJXgpcM5tGUYiFNZY35qAz3fzdja9d8fvPi5x51hhoDUo",
  "key5": "3sogQ33Kszq5H9Gs1pNwxUJqvAEmvp5gnSUkRvuMCibA9DAVZFsv5FMGFtET4dUibiLUZeadXVtY2vN4J3dgT18y",
  "key6": "2VDRDnWAzLWFLA4sx88F511dQTBRW7PBgG49LsgPBSdVq1mCMKBVanEbDXU3X4viktiVPVWHMWDyf9RbNscAgfhg",
  "key7": "5QAHd6NdNDMTURzpF9i9mU17QpYtdEhgM9v5nq6pRCq44Ge94LAYi4p3NFRKtzNJ6KJVrLoW9ufAynKUYNM12UEB",
  "key8": "3Z5gXCBSM5yJtrxmz6P7XrkuGJ1nsZsAbghMHKNqHTGxDtp5V9gvBuQGy9YKpH4YdijpoR7sPH8wy4fmWyj1mfTT",
  "key9": "2Q1GnGvUuYBBZPGTACFWoPgw7PZi12WThZbAwJuL2ja2RsB37GyJQp9HaM4Xjcffkx5zjEZxVQfpmBTwEhxgFxRW",
  "key10": "3YqprnuKhDjWp5vPXxZw7mAgHM7MC7uCaKQveBppQTrGZ22D8zpCmYPyh689N43RVnRJF294s2sNj41GDkN72XDA",
  "key11": "3bJtjQKYSVVnkaHsNUSqsASRmQMiAdk3DUPMNK2WqvFVpmzd8LNfPpBgzEVuvDyTif2sVVHsjywzV8Gs28PywL73",
  "key12": "5Q32XV1uoRyKSnkF8Ei6nSHKutGTjCYVrGoidWASEeUaaRKvpP3mgsBKn6RyQ388eWNFQL4LrmNrUXVBdFjLbXwM",
  "key13": "2Sr5XAh4wsX8J2CYwU7KMRGX8yRcKKikVAYNkQv1ZiHaaCtntL2LFSoGnJenaeAiMTp4Vzoadao8yHFvNfSa3zgV",
  "key14": "2ukZqbaAEqKHPeJW7CsivY2yFzbpb3vWgU9fLtyRL4zb9kFwgNMe5Niy2r242BEsGGCEC9FvwEKJbJCing1x2PMr",
  "key15": "3H4HK9XMkSsYF49vmtytUqGGwKWf1gLcx4Bejdeh8LVFHcios3VQ9iKCCFKizMBBg4jTHRPzou7NfRCjFKSoVXGr",
  "key16": "2snxSKWfyGyLJbkhxEPcG17XJD7okvocinYbvpkRaAciJRL9ALD8orpynSAJR7u1k6yR3jhQ8H4b1CrySRYgK1vj",
  "key17": "26ADnqpBmufXMmYBqmiETCfpakWrdjP2KvvKn1i7J5DgVpeepD3VSMLNZgNwb9Sf9CMdFpK8GCMLLE1efMh9bnHj",
  "key18": "3DxqCV3cgcr8dnWiGkiq6mNTaf7s5LiY6444hZkzhAuiyJFZVVx49Z6MnwSKXABHj6vxC8jMvn9jx3TvnRQUph9A",
  "key19": "23jKRk3ELbo4kAAzhjhwUJakXUPyEETXoSAqZzYhTwEfVxgmH1fy2XrAyeEDpHNd3A3hpFwHv97bT8eUrXBbHTZJ",
  "key20": "7WE5XYC34ezMHEDxT5p2NQ8Jn8utPGBcFwHtadu9KciwWzX9JKHv3axTRyZymegv4BwwzWfws3hftdvSobX8jrC",
  "key21": "X25fTnENQxjaGTU8nypdQTB54BkuKQN6hJSwdshyY3B5Q1KXvAucnSEpQJ2ywr8Xjp7LxZd1PwbA6Fjgr36bjwM",
  "key22": "3ZP3BREGYjvfUYJDtdNbu4VxTS6pgh3EiwMc6dF3xqEiCC3CrSEvMkVUpyfSX3g85jYP1NNyDw25GocjCxqMs8JH",
  "key23": "4Jmnyj5svA27HHk6m6WZmzdSZ5dS88iKqhy4z4Kidqmiz8FgjUhgY7BTcwkiz7YJZmWMSmArBBMr6gqUpRroWRpo",
  "key24": "4Qcp63BuwmiuVTbTToPFANmVwVBJApvk8nG2ruq215JsPwRYvMd3F9RMZ9tksBsLVEYbJqYKfBZcUQLHXFTqV1zj",
  "key25": "2pHXEiHZXD134gK7Uudpm9G83DMrwry1q6BPrC8BUYF1LXKdPkH2mMmchA4Xk6rc4EvCRwX8nQCf9LZgYoZo4orP",
  "key26": "3N14RWpeKoYjZ3fAC9RDXXWYJ3h5VwMsu1hoREvJFPWfWkK6SDza834ZZGHDj6G9uHdvrR7qGpt1S6DdbqBgh7cx",
  "key27": "47sRoacru4wvtcTKogzeBxTomGtgPr19rLskbtxo8ow7qpXdi1hTBbDNJMDRnrEsbm6qg3txkDoumJcxdu2JcAUR",
  "key28": "43fLzhJWUKDr4aLgjQCG9kRGD14MVnfs9ofBkFLDrBv9HMGj2gaheg1eeSWoxT5ctUBBJmTov8kDJqxMF2bwTGG2",
  "key29": "KdyXJKT1bfPJxp9T9oaFpoWgLSd1xJPYaYbK7XKryW1f41rPsk4fboUBXSh4LtCqPWj94qgAhoYbe62MfEmbcrn",
  "key30": "4CFLWnkrTRyXXLkARngpmu7uJ8vFrdRwJ5AUhdCojCRLAXkQMbz8oHmKmrjhFSVaAhLop4EwU8inieNniJcazbqa",
  "key31": "4UzvgCchuhJjYbtUqUn23t5U9jPtkBCH1MUWw1zmGTDjzsfGCbkGwFJL3LPwCf3jSGBUSzmhi495vawARoQ1MuNL",
  "key32": "49QKWuN6aH2Sz249WMTRyNPqxJtRa43JYRjmU3HEFKh2HBzCUAFrpTymyWpX1kQ15su8WA2ryFB19XHa2wN2c2fh",
  "key33": "64TREt3rGkZMAgoNXNd7ZTfzGET975WbEtAsWCB7iDan4E7aDyDS8h4XbsckVLPUkt77Y8Cx25ijpSSn94SF872A",
  "key34": "Ucrxch9ESvZs5fonqQRWy4LawudWWFH1BeVhdErJ3o5L1bTBrUVaruRxLZDGhbeHSrbdKQarHRjdg5oGrtNeMJg",
  "key35": "3q1hQEDBGmMEv2KBsxWzq39CrCmDDyuDz9jQMmPv9XtkRUbrU1qyPZV4KdobWKWUkct25umfjvFttgE75YTZnJ52",
  "key36": "2XUGFhTUYSKef6f2WCLaCKV1JFq8XsXkgKQAQfY1T4VdX8V9KdhXg5aeRTFNW2CEsEEsBBT1MgCGhyLVw6fU9TMZ",
  "key37": "9JTtR8ZfEW9VcHUHYHfDQtE62azQf1e7UP85JYQKSoTdkZn7JXDYWXp2DcV91VBFfe7c3Zv8fU15jVEPu9bwDTz",
  "key38": "nvWKMuozk8G8BhiiWGCoi6uMzNc1Hq74LXNtdbUqL6C8zvTPFkxXyWguATnWHKrkjCQ6pujs9FeDUGDJsZzRp7T",
  "key39": "5H5FSGZAPHBpBLkM8XjQnznqnQjfBb6bEQW5Lcn5esSov7cGJGti4T2cadKorSS1Vav1t2i4qFtk22ucEUSQzS5k",
  "key40": "5UD4SxKviqNUQpGSXBgSUuLBwEjVyUcpUBZmN9FnfXcrt4tH1pehtbAvcEJXzoTnWus6NAP7MPxTrAezRxUCmrwT",
  "key41": "251j4njZEVUk5fjKf5eB2qNSLn7qZd69e8HLyFtzq2NkW6XsG1B1NxTdBmbGfLrGjcqztRFXehg3z744TBM4RK4W",
  "key42": "uKs1V3zo4EUBjhPiMcwDm9wa5W85yM8hSj3UmCZhYwL3qQWdEhjXmRM5Bvym5k5WBLWtoXqqWpqP67wJHHKb3EZ",
  "key43": "5pbFcz1mTcYvZp8LSE6PJqBkQqbJ7ZKgKJ1YJ3aEBFYjZxxxGZX6i4BgnP6FLfqHCYWUDW1MUR5M14nUWR7qb6GK"
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
