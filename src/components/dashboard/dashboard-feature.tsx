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
    "3yBmxo4sxcSkbD6hoHKp5BGu6thCssc3Snin7JGo5AyFZZsRfKEjbRjHffWjLK5BJ9wpz18jqN3rzHVNCX7e4LJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3675Psv8T3r7BRnVsNJhshfbBDcBKeQrgEdVHLbiXWfisaKh8dBMLLYGywLPJKR6W5uV7fCV12WSCDwKsNPQ4KYb",
  "key1": "3XKwe93zaZgD62xM9JDt4g3CMQX4kCL4DDXzsF1BxedPUppL5uRCg3YmxLuzd9ToKaMK79KKx7dGmYZ29EXqx4NX",
  "key2": "DfEXNSfCbyy1JigCrVVLSKQRCZ8L9gJCm14VQ2E1uVrpuoCR9JMtiwKtk2gHvm6NLa1iDWAkqU6CtJV8TwQe9PZ",
  "key3": "3bXrGaqm8rTZtKGHsAfYxwXk36xpCGsMrUfFjWPMo2ojAJSgU86AiFHXCdKReB7tCUVAGtAJNryVHYNdiCjVyJpz",
  "key4": "4erp9fYRL6dAq6s1jpMF1E5KpsTsTAWkj37CV9iR7Pp9YuG7RRmgTgzj2NfJGSkHMXxGigVTvNto1VT9xV9KhZUW",
  "key5": "chi3zBunRD8KLR4cwNVecruvjtJw6vocLr5W8vRgas6qp4UrG11tE63rRWyds5DJbDTrRVfgygHpz4EJShQB9kA",
  "key6": "3c8xyDGAmUAwhWDiUTYvwWWLruEsi12SXAMdfVjoS98SnrUrSPAmUN2gQuNedbXcpJez6kUGHUkik5ZtCJNkdbeg",
  "key7": "pgLAj6L5jqkW9a864AUD5AjyzkPGEx658KJRLTJ9GN24ue4kRH83nY7rtGUJmfSr1SAkpRxgCqNGMGryhmXM5jf",
  "key8": "1SNQWp6M7uZj9ri8i8C7A7nGf5YrUP1irTMWg5ndEiD3p4Fqw1Du7Xt35mPf6kK5jbinZvpPSJe66hm4EgMQnq2",
  "key9": "4UNnzwg7tS4ZRoM8SBeE7BTjJCPPSZUD8mAm6HjuDxyPcQKkK7AtmngY9bTUyd4Mee4CRF4c8yiUe4VezJPPU92A",
  "key10": "2RufpwmbD7G6uMWKWtwe1QqpHSTG3KJA9ab2GzmxRqZtnpSnQp3YA1UjsUd1oFD8rTkS7GFNfu76nKY3LhjQXCm9",
  "key11": "3SDWGtB4yVHQaheQrjQzk2XEjproZMjrZgQbh9qxDEDj9H1oX64TUxgrp8bedCkTrGbsRPEogChfZZMu2NJZjAnU",
  "key12": "3nG1kBboPSFEummxt9zcdPRuC7XKJQaacENVFkQA9ynzZdHWrd1q98417KawgWke1DJKvHTGgUiKBiEH3aR4Wa5k",
  "key13": "3mm62y2p5MfRy3xpMXZic9srUwiG5YJpb8jYxMvpVi4ssM9dCmjoVLfL8WKH5mGp9Ph9X5nPH9HAQvkHn8xdbGF8",
  "key14": "3H7dPwPufZRaRK7JCax6Yzdd4KiaETifQwqM6gfYhASJeMuueEBG15ALJdFKwbct6oB7YJpZbzhBeMze8RmcugYu",
  "key15": "28epT6S1nfVzi8mmrFiWg92vPn42EzoJXs5utqqwz45NMz1GFiKtMX8XiUPWKLTmJb78o79Z9NSXTk7DEB1Uct8m",
  "key16": "5Ang2WAfLB6nUKr6GWWeDiBbnTXo6UEEpitzJpaEUSmeRRnet871dYFUbkE71PQuskuNQ3TqfGFvRgfUQVceYQod",
  "key17": "5JhspwgxaEQ1YujhgeFTwcBYjtDdmAkTKQCUHVAddbGSvtu5HMPa1ZpSbhydX3vXCk3mKnnBnurpg8fyr2x1nzy8",
  "key18": "4KDhiiepFiWKsXXBK82kRYjNgU72AKwFcPNvsK96E7hnd95okS3UrD2Rgd7uquzz7eDFAbh46KNQwyx8ajkuyftD",
  "key19": "3pVJNBFhpgaUwy7XEzSaCP3TBHuhyCoAEYuQQafopDb2UL7BHvCW79y21ViDu2yVgghYgvWoZFyLit7xyLtp1zD",
  "key20": "57NaEuew5LoF2JjzLkfdmBUbtMRT8GMeEk55WAQPgQqseCpBRixbxmQ9xwPuevP8GZYnYPTukjQEhjEP3j3nQRbD",
  "key21": "4Y7J7A6ThcTGuBp2oMZKNvy5JPEMsyTtQhgvMi2Dom9ZgUdwTsS7AJGCUbmLS9gLM5eKjZa3wjiUeafLV4vixX4X",
  "key22": "2hrZj6iRce67bUPieFCZUu2kMHWU7KnPBNgTPCdhFj98zdtnTVtnmUwY1VngxTWESPMFhxYhFcExJS3fG66RcgNZ",
  "key23": "Ck7ZPDLqEH9Xgd68yKoSvwT2z27pX1efREj6pmXN94aYyzGaPNpUAbj9LaQjrZvtM7A85RsjVWS3uzNQK33b5WY",
  "key24": "3idjboDNX7cVsNvpBf9bXPnALiJE8EyMroVFWv8J7rje4wuUmQeiGcdUNHd4fNwGj8vUwBtVonxG7NJhG7Jb2Fc4",
  "key25": "5VcmYzERfqnxGaRzdJEA459KKYyPgapuk9RYzxz8Lvtf6LxrgSszeb7EVEHBBa57LHMmoSxGRCy7rfapJJfJoKSh",
  "key26": "4VFmrWVrhbWvpHwfUGnZufE1JtUcBvNNiHQ2WUwuykDRGDw6LLJHFgihsnTvre4aDVcVMjWxoitcebiuKR8mGwVm",
  "key27": "5hqGZR8XJChEq9esx99Gp4itsu1bzD5yRjWvSVAYbbLWSQyajEoYD4SWAgPcMvwNobPLoVQz2AdsS6Q7MERD7Leg",
  "key28": "2VM9Mfst8inUGWCUnJMJdpgyuR3YQZ84HUuBY5rBV14gvr32erSKF5gCqQHBb68vYck4AzUZUkMqRyavMqWfe5Xc",
  "key29": "5z9WQWve6eNtnUtwoyNyLvjCxtvEX5BQgyU3pf9XxXDxR6SLf3k85Esp49WQ8cjcBrRZzyssD4zQyB1S91kUb11n",
  "key30": "5vPnkUQJGM6NEuCSUyYPQD3ii3pbQfMq4DntMEA5o3Wq4DBqnnpN9tsYDqsjCmaGxSab8kP9ixALVRyxzFz2gBh6",
  "key31": "4XVb3Ye2u11hnPkEpPNJeL49h7PzXkMdLrj4tig3vbH6vMWJPRdQiDX4BDjYoae4t4XBwCyWEDTyPrspp7XCtT1D",
  "key32": "42HrYii1Zoiy3YxjxDNnDhENKu3xU4x3dLB3K43NKFHc4fdeszFzi4sVF6PXVD9Xv3yb9A1Ek6sCEDikQnLanv4J",
  "key33": "5iWycc4bXkdFshJf2AwCDFwNmdpgWfe7phokM1CMC2raJThBKbM65YtgjB6ToRGcBASZagcmNsnbDnV4ABTxv81C",
  "key34": "4GcWpkFxVC6ecPNLzQZ175te5z2dgNaex2Lo5reZ1aBj53RgoToFEpCj3w35RvKD3Fdkiq3ZiW3DPZAKTBJvx5bK",
  "key35": "4SjVLTHYr8yja4Ru7ZAKYnXTF3tvWFUsLQRHpK9JRD9KWNPZF9ufNb513A4kfCLDdCEqgYpZCAM4rH6ntXDtJCaU"
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
