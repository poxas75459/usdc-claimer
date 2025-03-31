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
    "4td2B4DxuWj7B7noXyv8nKMUFAm2LghNHBw9jxnAtpBrmUf9pfZj9sS9oByxK4SmFDYiBzqR7ibba6GUaFETMbTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38rGYfNAzNQRKLFeFdxisYbMLhVP3ybC3x4P9W7CXJdnzoTEBsPPaxRtEw3pQwz6cvSyuuabLCWZoPdyqp1md51K",
  "key1": "qkGb6mhiYK1o1QmKxE2aktuWmyPjsD3qzKkgZjHTNFcRFoLbafEivSxUNPSszNVq4yWjqcozpjzt6grjBtYXMQB",
  "key2": "3FaLGJ3NLxAYeYnXjCtWgK5J7fTc8MpGk19uWvJEWfGKGMZjVwNAdY6aDKZ8JRLh6UXKae2vCr6hm9ud46hs7Naw",
  "key3": "21oXUcXL4EYZwdoY1AUTbaG2WdCRr2obFEkYyRKrrGAT4uqGcTz4Q3aV7YZKG854EpUTz7unGFg3exTNtneoe1ej",
  "key4": "53r2LiygLndD9Z1QHmerXUyL8UDQkXGoPYieiFC9wsb1AZk3ceZmdtpLx88FtcD3FbBpCXXefMXs2GrfBGWtQdHS",
  "key5": "5H7njWVQXAurQVHsR6PXVep1XZJoTQeV2wPzWQE7CdzHv1t5R2fViF4yFNU3TvEfNZdpZrq7V5WwehnbCNLUioRZ",
  "key6": "3rHVzqFYavvBjvWRHqS4vi1eXPNSLNF9ahoTRdRu44HMLFjApBJPFddY6BbXY4ZsLwEMzcL8z74aeTThDcB8YQZE",
  "key7": "2JLc4nTaGmL7LyNMLgHenf3fBg4Uo1nJ5CZmjxsfTxuzjjDpN4MjB3J2kJSTvnBNSSQ2Z91F5YjynmCLpFZyndCa",
  "key8": "tzLgQqDAA9cMeBkPWXNx9imQj34EraMfaQUvu28hx9TKQ4xXs8iAExSzH1kbtPeoFoZFH1bs59ZfiPx5Zg7ZVbr",
  "key9": "8FRkhx7rRx8HSuvhS4u2Ejvg7cRcvsVsWboMkbBkx3DDv9gNCYvB3yLDho8MEShjHEnFPctbja3oWqTdJG2RHaS",
  "key10": "3d7nxFQztSBSvYT2SvC2t7VokngeotkJ8RG83bAt9Lj1qoojeDbzd4rjCrf1LZKQeMnPqXEkbUa6R5ydyix9XxBj",
  "key11": "3PF8cVfS4rm2wXhbiRah45dhAjJe8eaPg2R99hmmCe8WUW9ujW8r8dq3xUXYf3BfEnCQ1FkuiPue4DBEVQNC1HZ4",
  "key12": "28nCo2grqk6KmCAfpQfSxcvUWwQvaA844A3Zo18BXipYCrZbdcKrTSH4L32ZqqEozF8NB3dEv9vEtrDUaWqnmP8d",
  "key13": "58e5QZWDxpgR4Vzqy22JqRxwYNYi9tA1eiawZc1ta45h9xHwon9W4VXbxiJ8vwsYN2pa4JeezVv6RjFbfEXSPGHq",
  "key14": "igaHBJ94PxfX8daMD4XeN5spUzRdxPrfHBqY2NzXKoehPJBEtzpJYbzq1YHpBcRDaoRHhAFmbiFNcnC7gbWdWH1",
  "key15": "4tvWEGLdAnqdXfdNuWQSVNPTLitHp2zceauwDsAAf6Ak7MshMoVDNnGor17ibMUoxm4xByrj7DtbzN1aMRgZqwDT",
  "key16": "5tw8nNjvfyo98NEBD8dhwHV1rAotVLtxDDotUafindaS31oQ7CPp62gcvD7ngkPYpmK4a3fcKm2mqvyk11cfoy69",
  "key17": "4gSZNKKgzrNotPLXn3RVueRtERGZ6iYCGtjjaXgLdPqVQVAUZscdUxvvXacxDVSDBSSHifd4EG4vM35uoTbZK9eA",
  "key18": "4do8zuyPd1FtmPHRykNsF32mPdaQNjWY1WjQXosShRgwoXQoRd2XP7MSZX3LpEzoaBo4y1ReRCzAViZACVxiRkHs",
  "key19": "26gRhn26ZsasQL2vwN5oVa5RmNu31XQK8xkuK252XZWEz7hxnfhQQ6G6dh2JU7CaU9rU1qyYqYtABnYrP1THSdz9",
  "key20": "31HyaRQUm9ziATHueMCTQHHHgYFznjFaEMzxY4CSczqPzEHvf6AUgzdL1zhossGZ4SFkiPttYnVAaQdz2EuSNAJh",
  "key21": "25kzkv2zrwEpNsg1mG4hCTUDXunrX6KjrHKkCTSDeWvLerEjkmYrNAKfmNKgWLhtSGqxp5NniLLkKZWbiSSKCkJ1",
  "key22": "2mrjoYEZBKYcstxatffUC4VpDWbz72mgoMvTXT2aQj3erJiR2JRHk3Gi51EszgpbVGcp7gRP6GYUZY7EQfMci8TY",
  "key23": "M1r7xyjs5GnD3ixdyCuNFK6zgEHdJZ9NqV2CPR88EEDGVUeMehQs9vtwrQUn5QzpPGGN8pDLjvv3Gn8NChLicaz",
  "key24": "5cdqXKHsaZqFgkyCoCGiyHB262kEsBnFiPdJVpTRRS8wH4zkdDB9SJLspcwXXsPQwGz99v7NR56YT8w7c6baqUj9",
  "key25": "5SNNwCrtmrwYmfRqLT7geE7v8KmE5BtEBCA5dAbggt13sE4poj8hyNTDVZH8Ss4HbjqH59SM3eb76KCrvXReefyN",
  "key26": "3bBRoomotBivpSfBJQqDXxj6HCDck4zYrAgPXhfoiMxoYZDjLFNXJHYB8G6pzqR8xXXSSWk6oUoR2uaJGBGvFms5",
  "key27": "3wNVrSzRHLkcDSyzjfgyBj7mSTP4LvPo7WAPBB7VswhrAfPWXuRFmJP6SvQHVsqginPjGqX941oGw5VdXkkS19nh",
  "key28": "4v26RpqQUNK4cQbTM9DMyfcByAJ7ZyVM2KLxvqyeivVVjPXHrgHPKn6Gp98uDFpMmikJn6vn3Vocjn4NLJzwUga9",
  "key29": "3uRsKsPHivwgYxmyrtMr2KZzwi2PwoLiKWsnSeRd3FhnKwD1T2TrjUUJk16wNkS4Wq47jGMQcnEat5uTtkdQ1JUi",
  "key30": "24AW4kn6BeBf2hodvoUejAL92g8bXG2c1L6ez7BtUj7c4inNeGd2ahfKy2P9LBwFbvN9B4jfmj9mHmpNShYbq6dd",
  "key31": "4bDZVtH7j5SxjMvwu5NeAS3dmZWX4oWieujK9uJAfc6Cskm1RYqzY3uAsSTov6uaySTy78U47NU6kUba5yvoPXTc",
  "key32": "4mdf8ewCvCRPdzHTYidzK41gBqBCJwJXVCM7DnXr5fjiAycTyvAPXGend6Vok4EpCr77ny3bc9dhnmm5eTJjrQiB",
  "key33": "5GkTfsQfLH1kgX3ifhduGSMmcCB2PLwwpRd3DpywihBr4SEqvoHUQ5ZM6BNrSaMhXmMH1mzuPENSqCppCchaJytG",
  "key34": "5qGrT2GfJB1w97NT7V4vb5PytXJoAG8MCQYTD58NxSjh61iccs7TMaFq1mgKGdovRoo8DmudC5jEHwtDB9UEJbMF",
  "key35": "47hs5GkdXMfPT1cjGzrNyFazhRvFueRYFJbzjf7B3KtjpbaTqRzXUZ3o7Th6ooXspDZb1XtddkeWknE5ywg1j2nK",
  "key36": "35PeDNCrrTMMDx7jeo3yMFZeroyJ65rRQLcepei6dsVfgBKgLksWA8bHLg8YHRCBn81tsGXJgKpkM4pnA68j384G",
  "key37": "3BPmeEzmGuUHVhUZxWYKEYkSFAS2H67Cnfm6tGzdKDHPtj3hoE2ymwZP7CZbfatFrT1E4CDQZkMVu85T2n1JsZg2",
  "key38": "3uBgHCZMU54nz7z992MkKX3iPSNoWfTnvHiQ8uQwSuXataRPKwbSedjycvmLLz9eZhRd7DhzEuBu2ftnY2vXisqh"
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
