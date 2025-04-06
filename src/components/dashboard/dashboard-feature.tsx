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
    "A4mdnci29koHJ5HjhuYGQ3e15s91Y5bVHuwPkwFFhumbPS3mmFTZu1Eyn3SJqQg4KJodf9xkWcrdCrKFfjvKN9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZmXQy9wpEfY7P5MRxowwJE7dUwDd1hrcU6V8paTdgzpnE6DyyGFA559WN9GVBdSo2HPhEPU3N5RwneSZK64PYWB",
  "key1": "5vUXeqnQGKUgkAgSnFM1SxQXdGQWR3wbSmhv35k2p5ccfkQDkPsmMMzwDDXyShSPfGUfNrMDaHRUNfFymrpVoc3N",
  "key2": "4NguLQff5qs5Di1MjjAA43KuB3r2VBt81Bda9ZnE6Q4PqxwS7mqUgDHz443eh1tfyqWTdqhwvryY1b8wat38NwRk",
  "key3": "5hb1XeJuLgZv94KH3LBjgeA3yZRdEZP3LdoWyFyLVsu8YFbfU9JrH7pX1XEb1w2rtPmyeh3DeKtZGmPDsxC7maRu",
  "key4": "5MdTsNoSmiAd6TV7jizqhmgGtZwegrTEUnR8KdsqsyQJMBK5K3ZLKeeC7cUvt8NhXTxCdb3FjpCQK9AQheJU44ES",
  "key5": "2P4npS2LQRKbPP8YcYcmCqXReukPeN65sa1JAYPRDvu6TQVQ7vnAvpYvy5vs57WyRisB7C3kS7p3MXcCwVDxqb5D",
  "key6": "37ytD7BGSP2XoXzPMNWUBB6u92fYk7bDsiy1697Hu1Pi1aWngeNmnxrcwUNxfbSKxWniZvu1u8in3qvG7snFF3Su",
  "key7": "ZWEs8ZuLanqVEPYeLAAN3teNXmo1KBbEDWwYcQTFG2tHZXAaZ1BQ7MCFrQXsyVKcz9PDYKFnvQij1JnJuow9s4i",
  "key8": "3QiYH9Z2RZ82qNXEFyCACkb5iFAK8mhp1q3EfAEXjVv3NCHi6wL3aM7Uq96azwhFg5ndPUBQ4LVcXonr2j1gMcYp",
  "key9": "19MdwdHgvKRjMenQPha24uxYq8Q12wyronuXAZ48QZQRN6diirFSczoXDuuwMNrKskRBh7tHzkKWWPctHtrCUrd",
  "key10": "4YX1kD7VF2hVMAzvDPMwoa2vtnLsaPG1nbcZn9ks5QLMwW5QuF9cqHiRGt34i6yyWxVfmtL8bV9RG5oMZQjJefxu",
  "key11": "2zPZrkaD2GM32fZwyudSYDca29x7PbKtWbosf2navSCxL5DY4LoAUFVXTMgUoVCgYC1YJ6uNXFq3ifv56kfbPLNi",
  "key12": "45j5FHiz4CnAPLnyEzZxtJuF8o7NPpaNS6XUPm4Qv13ADAjeo9PsShrWCCeipwkSjKWPo892VXVqgdZqRLmYTLqe",
  "key13": "5BPHnSrU6C7mhHnKo1LKsCcYz3qFs9vN8MUUsbsvLPgp2KhkPBCYrMc9tT2UUvsYtb918JVijMbQynHK2fH7Yd3g",
  "key14": "2ujyjC2joGAY8QwUMYzkbnaMYJciKtJPPAfz9nMjp43C9dEGbHdUxuPHnwgiAnFpT8DmFJb4pEHyhc1H4jcVu3ny",
  "key15": "2fnDAUst22Fah9Q3GwS4RtGtTLpyJrZYhf9FAfoXWWRZ9wQYCiyEo5wvSaNwicRR1QUaYzEVYdc3u7d6baEHH6FY",
  "key16": "2JS1bKxpmgPpuUwKsMkqxBpbKWZuenpbu3JrPJtytsbx6Y5D9SF78MqqxX9y5mxhXEeeA9d9LSrSFxDjifSMWCfy",
  "key17": "55o7tWhYsMy9nMUB2J3b5DBzXyNRuf94y2LjCpgteCmuXPBjCmGX5R2tNhg4FTDMoHVFSb6oAF8s5Tb2pk63dPAk",
  "key18": "TSzSwyFax5WDRYB5uAj8ZqLXq64Mu98UPttCdPGDXUTjj6bnbJJ9mgArTUwpPBTQSUEjDJDj4EDP38EAUZtLgSt",
  "key19": "3fUb9paXJrqNkA4Nu2bxwUFTkYPBVSRDzvgrupBvL9P8VQVdMg1QDPvLJTy4ujumeqvEbYjFSY1mCcG5aULT233K",
  "key20": "347rodhgLe8ueV2uMy7sq9PdnPQoS9w9KoMezQdeGvscvK3XLgyaFHVm3WaJaQwU4MdhKp91uFAG4w9hTspM1E6W",
  "key21": "4tMGvUrFALtsFbQ6AwzX77ChgcZ7w8KuiWwmxqGjtLSjESRiDLzUL1sseGFKRavc4zzki9H4s9hgrBm4FR1Sv2Np",
  "key22": "5Hw5pGc3aSdaQKxYQL1hLVr3ev8kz6sbM4EHYZ7ErUt8qk38Jgr2iEcuDWZGMdk7Ytirysr7qbLjUjGFyhWJYdSN",
  "key23": "5Mtw1mbD8ohZEdjtcBWvAictNGVSjmcdSU78trfEj3M6pgFqgFbCe6evJnwQeYPRSGxiPrK7TUvSjqBqT7KS1NFD",
  "key24": "5PNHmHaAdWtMjJYVyRipJavB8wcaUGhUrFGZb7Qi7yNp6U7uhwkaWhSE5q74ytWg1thPjUn6sefjwim9opRpRQ6k",
  "key25": "X2w3Yuk6RqizgdgFPYD8qcqfzrTPTWCbTn2zKiCoCAMx7NKtDPpnbfPEdFK1rgqvJ7oahX1GtEsT22NdtgF8HHr",
  "key26": "5WEYqKdspxMGWe33QdrVtnuGKMxMfZrtRJbjpDEVFD312Vc3QER6g1wPFzWc8moHK3dtwtovyrvVWc7Dav64jRk",
  "key27": "4RPLXmxQx7ksoJt5cJ7ozG9kuSCQHuofuwcEHB9xYEYUbmgYDrtvKJY2Yf4EeDaoouEGffqpyPsDS1n3Qm6STUAY",
  "key28": "2AmAXKhn4MnvtZj1v96MdF2RGSZx5pWfgFuxDLPSG7QqwasXaGTbJ33U2i5KUUEH7kmobbBT5CCC8BZWZ7oLR2SG",
  "key29": "5Kbc7wAk8VBU317C2pnEA3mmqtNfoqLaxpKA4PtXamSsbSwBNcpa3c9whsJxSBxeQGVdbqhVevcVrmqJneSj4LY9",
  "key30": "3FayyUBeqTgQ2XFC6xJYzC287UQVjaR4T3LR4A1NBxVHo5DnVdhMUZ3EGhroCWDjRjZL8tDSUrjBYweEd7uwL15j",
  "key31": "41Pyu8iSDqW4xMVMqya1xkbP387dMHKQ28cPKzgD1Xmzz5FkfiSH9nLGY2Wm2R6hD4DejLshaWDopziNWAh5pV7t",
  "key32": "oZ3s9Mz42U6nzWq32usZ6LptZoFUVZ6yBcwc2pA45epnUiHuF1Mj6WakvGVMcAKSDQmKs7gU3o4ywPY5nPSYesd",
  "key33": "3rt8WReZze6atxgpaDu87CFUYoog277yPeiKd64uWyxFAmF4EK4BHHASD95Fri2wYvdeocD55MTXsVJeqAxiR39M",
  "key34": "gm76RqkSje3ok2vXgyWYxRQUBhBFRuq98mjagC1eGUPtfQVyYjwENayorvvXthcSv2H5QvX7C7q6Hh5ooH1saxH",
  "key35": "3RQDeL2vzmG1hwYMcdkGKAkVL6fj1xeDbjfPuVzmzHz1afTH2FoAXdNo6WL63CgMwZ4UDpw85t48QqmWuquZhAfk",
  "key36": "2PekRyS7L5Vdte6BCpTRqD9i9MbWW6WXoTqSJSvWGQ2RL4S1FmsBqEzHHYJ3mr5gmjcBfrnMkhvVqSERQJeC2SZD",
  "key37": "5FHS1JCYk6V7xgJtCHcnGpR7z9SEXs9Kny143exPZMK55Q5pq1qSusBiroAwGSJGSW5B2r6qFmPWvD4jk5gymFAd",
  "key38": "dkEtqz6aQciwGCqMicy5tVfKcWpEGyT8oNFqzVuxsXW6RDZJFr71cKVjwjDKg36SuhHjQfw8XVUxuDKrv4KJuqY",
  "key39": "at5KYuvqbdCUFXx9nFcxoUALSJ6xrE55kEXn7kR1KbaMZDrJCv4iJDwtYTkPnCW3mPh8dEEVSxX7XWmx5a1dQBr",
  "key40": "46w6mbANMgBryZ2Z7NKnaXWRgDY4HD7osdQAbHKdUmkP7CyzRKkUxVLCN4Qs7mxh3S9aZw8xEHKiRjtzBtaPAN1W",
  "key41": "5d9dpLqzupXbibmw2YFgVr4VB1i7nBpNaddXfe4of7zLfWDqfg4DmqwwLGvfFHeT7A8JEobB1XQuSEBRsWWe4ywR",
  "key42": "4i7uchk1Yt3KGMe8vw7yjVULzPLv7SGtJfPyvVTdEY1DJkLiE9ScbE6FtSPzAmaJZ5KVmsEQU28YoeFHWdAYHN1r",
  "key43": "5dnJhjGfA3Wyp1V8G2bkjHSqxGeqWogtbK4Vb91jHUws2Qy8ibnxjLfX5gJKJxQvN9FyWCJ2jb3CXWiHcivJNXqV",
  "key44": "4xqKN19CpdEv7nkW5oMkYeSWNkWE1hCAMq2W18GagGSW3pCX8mCJZhWzNzDcw6rCqud7tZ7Xo8zvLHUVQJ1M3juJ"
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
