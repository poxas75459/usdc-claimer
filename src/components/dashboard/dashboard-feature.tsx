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
    "5Ljk7Bz2bmaoGkt1GWaUun3i2zdEHvXa3vBi1Hbq4ZEC5e7JbdmhegJEGmxwhw9ij3dFKBfc753HxC97MFahhHK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vfmEUufKx5wrC2xEFotDKHGftbnhiCKXmH7iGajvKQhVjb87ajxwrFQWnDV3iJbx88kLV3TRFaad1Wnp34tWwPm",
  "key1": "7W1KvuW9ef93krNCo6Zyft71VPEvDTH8WCptb2od35JLL4c8nCtkEfaePgj9RB77xgptMnFR5jeLDNw5AmKkJA6",
  "key2": "2q1XyvoTFkhMyyLEafxoX6yHxwWAAdVCKMHa4pXCCpd1WSa6Y4MXtb8BN6LCHwx1yXsN2s9mP4rz2GdwHiVQePGZ",
  "key3": "3rytxfnN966jXnYkNQgFjkLNo1CEgyobbZ1YqSN7V8mCtMwJZqygte7MgLvHGozVY8mqE9PVFHZoJciNeqidNhmX",
  "key4": "yqhLGFuCmczETziSJmUZ8PNy97Z4atgMfB8tBYguFCLvkAyYcs74bCrLmmV4DV2eyRT7mLzSm6sJmaYcmezDWvz",
  "key5": "vn8fGkRR519eSaG87SwVqGLN2HxRpHz1vESGuaqMkPfAAreFvCjP5XiHz7SZjGjXndHQ9nk688QwtdhEEodYEna",
  "key6": "4Qdacri5boXAThxsoUGjmvocj4kYhrYzzXS7SaT4ctzxNrVQrACP4cboRBTcCYWSggbSdKyhsuVm1DhUvXFMatcL",
  "key7": "2jdKfLweUTtifbWCzjw14fVETbyiWaKctPYNhsywnamqQ9gfirxAoS3UH8mJRfDeG321QdFfMHBRw4yVp3BLir1y",
  "key8": "3AkeaKxF2J1LEuy9YXQb6FYgqni2GU6vMQEBpPKJ4RKYMyBVBbczBj9CRTK7kuB13gMxkmLdPqqpLUbLx3vK1Hwd",
  "key9": "3NJ69sdmkBT322aMhBixnKtXyk5ZbGMzKnyvSYaw6W63TqN1KRdqiQuHZsKPf9TgHjMJu94pZw7y4mKEyGY44Xoi",
  "key10": "3JoSREwt7kT2LwYeu2dZ3rSEEzxeMuNWcXjkpZCuxbnU4awQAbGThvvSzrhYH5HDFJX8q2kLqsFZ7zkts3c4QHk6",
  "key11": "2DVhp4dJUBRLTU9mL5g58cFSWkdZV2VgAFVxoCVnz6SWoNdK8DXNJYR2CNKW8xzbEHebMsaLF6JgbHwTLrR43aw2",
  "key12": "4yEjgfL5uguF8KEVS1QWXLroTqpeX92smGtdjuFpoS6yMuuD8BJ77qJuE9zwUaZ2iMQfTQUrh5NRvNaexwZ1BSJN",
  "key13": "3o6wGpZzjHsDezBBoQnzNQyDbNc3rVy3jLnHw64Djk4cNv2yCULZb553fo2tiQ25iifHuNfW4nBtf8e45dq6mfWM",
  "key14": "2W4zjfM99s8GBRavBQQm2B4NdPy8BWS7ewcgdXBTDGL9eaDzHg9Cv1ZyhKgGeGDUBu9JCCawgWgyfGGTzRW5RE43",
  "key15": "5CdwVdVgxvLcVNguXcysueqKprHYEKPvAMuG3yAkuPLxHTfTBPEdjo6P2o4qEfqm1Jh2m9H1JUFkNNLRd37LqYx4",
  "key16": "5MUMM4RaCCrfdhLPseBZUR6SyGFT1z3xaEz1Vf7u3nFvAqXQQkUzoyVH8SPZzt4rkSdu5JD1FiStzsD7wX8Lajfj",
  "key17": "og59thm3bc2KkE9pyK8APVt4RhAc1C3kQCjwPMDtMHkF3Sdzv8gi7Bs31HAA4biiEodHZQwdqNxsTMicwpfQQTV",
  "key18": "4cneJ2govBkBdS9AKokuWN1ZvvEBRA78QLAGf9z69dJS9hanaGFRadw7GApfTuXJhq8grFpmdKQHor4zJ2jDdkkF",
  "key19": "etX56J52zfVMHAqWysLg2KsRPVAgX9YwCAqpXFPJGGhEcBhKe1iEumF9GsNL7sz755qcAYjpMiMKgaxPSLcdGMt",
  "key20": "5Brv1qd6HSYhPm79ytkDjxcPoRU8bC7VpzempV7cWNuC43Ht5JdjfN6nbSz4ayNMv4nCij6vw8ewxeCGAUPTCfun",
  "key21": "WkVC8theJdHD2Ko85xAotPWaSLLnpuXtaPpP26ausuiReNRPy747HQAPeZ35Hx5PidB2ycomMci8Qu2Jf273sjF",
  "key22": "jvQ8gnZrsCHPQ56rjzzw3cQ4EiQ314C5U8UFeBsmUa1XXK2GwSZiE1Dh9ERhZwVHcbVERWJKqwFdfEQjBtN9ews",
  "key23": "4mWjuUK8qVMTVTXHjFH5tr5krky2439Q9sg7Mj1ivzDJyofpTVKwYCVc8K6Mgkr8Up25WZdr9XWjT2JZ7ztESz7L",
  "key24": "2ZnecwJVb4uSmgMGXWdWSEKyQonqoWrtxeZ3fPNXAqaE1QCXjg9cbqtFJtWKmHeqHZfyRsgLiw3sNPFzQPgJNbFm",
  "key25": "5B9U6AfUKfmcXG2j9fnDrpDmFa6Li4zNS26xyRpaKhhCjBrwXA8bPruN31YKr79UD8V5okSCN6AFCXtfkmyq5jz5",
  "key26": "3aWXqTLj1DVdWH4jdmnkEhWcFfRKwNNCeX4RMitCF9HLtWEiEtqhJszSt3Y48MKHpxCu9P8bcX3un7xGk9sQUZpw",
  "key27": "2E86fEvFgcwsjinbX5CAntzd5NaGj8N9Q3szb5p65hEhoLtVEfvkhwW3JreNWcNXEkmcQ28zE4FPLzygVs5Snwvy",
  "key28": "2eWDb6HLe8PrSA5H745XuQTf4KRGyAF7Df8rLDUhhtWke5T1G5sgXD543LvCTGP8wPeWs9pbegBGtKYbQAgmCnUj",
  "key29": "2FH3H7GvsGuAAPLrvaCcPVwYwMXe11RfpDHFwKWvZNbLz6y37ojvStRyCuUhV1KpBXwRkpvbCzLyPYpe8oRcguyU",
  "key30": "2E9WtDYH36yUo625tkekoAmuyuUAg6pSLsKr7nwHzkDu6T6S2mmxFwoJnhCyUgJXcKGRQJ8MNDUNbzr6uDmmPuda",
  "key31": "2YqdrW7ZSQpCKhZDG9ccpHNhhbsmaJDptYSB4RXqaU7DUPNAcFdBjnJP9nt9uX5mZvYyH4imbtyLSLmXiXVSNZvu",
  "key32": "23b711dHBCCzcuTwD529wSYpB6EddmbMK4ULDqnBGCTjXvFPkHqAKc7sogn5M72h2fyBW7nw5JX8cEfrjmadTK5a",
  "key33": "3qzDyrBu7Ea7W1ct7uyWRuWmVG1gJJUQwwyGXv3hoNpEQ3CVHKL9Zir6T3eFnLq4cvbjGqiExwTjXhLJgfvyw72X",
  "key34": "5jVuM6Gn7uBhYyDBYeAP2J8G6nkB8hSfrfefXBS1Uxh3eAdJTNb59irhNSwDAibxDs1fTbmsGJUszaR2KWBfi1aP",
  "key35": "2b3oMPktsFwiMFkB2K6hVYRzTF9veufuTxuRWPECyVqYBZ7E8DyhXPw8Kao8m8Z6APpSFdkbK3B4DNyc3pcn9cdZ",
  "key36": "kGavSLdXwSZyWx6LCXbB9fyvnGNRqUGigJeHHkW6CQQA2tje5XzBepnzT9wNVy8uTtHWgEZG1h9C3PBncTkmw28",
  "key37": "3AVpt1DbN9fHB7r2N75STKh13PegN4kdPKKiH83Zi16rJn99DvEfe9rTTQG8LF5QvdhEaU1G6uQgbpuw99mHpRM7",
  "key38": "GmpZE6FpJ2GSb2RmwLD3KdH87oBBZ4HGfFbZtWzCrvsjgn2uZ6rQHgo2TRxjMx6DV6QwUUtERmheGp5v2uEjZAQ",
  "key39": "3Ur7NpTS6CkbHEvMEH3mDhJwLzccV7XWZKz8aoF3uekspCvh85YQn1LEqZdKKoQanyeL5GEKWdRwpDvh5sfx94WA",
  "key40": "2JahngxU9nw1CJTb9qY2RAD2kXQny7o4utZQuLBJ9wFiXkjtg3WsuxPyX47d8zkQKVkUSeV2VC98fcXMRNinsn12",
  "key41": "3xcyy7th8KQXYFNu3LApSFkUXasuRdFWr1FHeoqRNvndAguAuEVFreLQ1UHWzco6aVEHvy8tFcQSdkCBNU3XAwQt",
  "key42": "2zHsCqQQZFASEuECYVrX3RidmnXEDSsEfbVPUFFNu1HQtzUBy9g8Ar2vJysHP4K3uqeQwickJ7j3n6gGr2BnAfh9",
  "key43": "5xKromknALSbBh7xDSpaeRzAchNGvmYAAdT96d4d4ERffiBZH1PSeCwjrNAGQn6SL8LGeKnQwkARtBJXZuuSAT3v",
  "key44": "3aaFQDZttABtVWvzpk2nKSFguF7L4iw6ekgC2oWGSUf5JKncg1ee7MoSuBS8pVVwPasdtMrups7zNapcq5MZ8A2Y",
  "key45": "5NFkjwJRXWNQ8QeR9RMAAuAxQaGoCZAxMtDVQhWqNSRLtGoMjfWLosLVLFPnGty4qUU6fn7rGv8MoPSTSuu4acTc",
  "key46": "QEDKAM8eDE5ngUSESxwEAAFZenbW6KLVLGwZBuTvRtHHT428wV1Kk6fa9vYEcUX9KqEgqo6nf6HwfjttmRMJc6a",
  "key47": "JGh646f84RnoMrvSpjjhmzeY6cqGgJgqCremjMbLbQfkqLvQs8xXT9tsLe6mV6ccShoyHePRPt2b8jEjGwr4fjr",
  "key48": "tFjcoiwDXGvTakrXU7BQPiTqvxunNzPTrpRDhPejFBRdfdmN4nMaTmcRPm9XbVn3mPNPW2TQv6CHzcWyEHPdkm3"
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
