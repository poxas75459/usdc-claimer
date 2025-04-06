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
    "4wD2B1dosmdYzayjiY5wFUBkGRSCTyi2HWGXBGiRGuwvKXmMSv9orG71dX1it1arNxMLqtKTAqTezjezszME7pbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xRtj7YjtS1mPRkbsbfLiJrvv5A5cCAJzFnuTWc7QrFCHjt3mjUetUH5YdFLjT5TWetomZhtx752BzanSCzQaA4S",
  "key1": "2jXBkMPgTpwaccJL8jZiAa9T38HE23JVceHNHYkrk2cWyMru9CdPX44uBefuuw93scQfDcK3kDAoTBg68v6QbHMC",
  "key2": "32TusPLfYyo2bnKJ74wV8SzQGDWnbF3Z76Q9HTviSQB2sV2omJ8NuYLYSqETfawNBG5C3ejxB9Yf2en7nc56fg29",
  "key3": "5PSoYZLh27vPk5kHyaoLh6UAEy6dAnwSPA4oa1wye8Pyp7eoyz4e8JXaxou8qzdzqHoHgbnS7o5dcLeEakfK5XRv",
  "key4": "25jgEdarc6KqdzT22nh4f4s1Vc8xs6zyMpyNsJxPtHXWHgskS1QpQZejVVD26GoK7JtLTLX5fpHA8XnkRC91eohr",
  "key5": "C4n6zizoN5nvG8eK9oPQKSQ9BG5NpKUUhDLPYPCMZqf5cG4zbu4snpHxWvTi6n41bXvKhh1V61a752Ws5LXaBPf",
  "key6": "36beba36vJ8NBVYG35k7niLbgtVesWhXJkRe4K18kgxYidkn1ieXJwth9ZawMXBBF4qLGzp2UNTBiRN71PmKQHQ1",
  "key7": "31ByZ3TQeSXdDX79fvDtjgHVufpcLjX1itFZtT8B3zq5MnNYrNiiKc74Zbzu46xyydQx2HQMerrfqZtvypFYotEw",
  "key8": "2CHz7tBG6M4SE9aMaSJd8sE3LikiLRddxQ8iVeNgijsWoFHwzPpGmGmKqkKSrrMdtMKk4LLgwtaWRW8NmF3yQYJW",
  "key9": "3QtzABWbA9H6FurfWdeQScw8xjmMJJ63e2SavYXNYJc2XkGToFPNehimHvd3wAzPq6pPPKX8ua4eBJaZdSymRYG6",
  "key10": "3LYCZFALg5X5Zem5FwFNgVy9E6nWrxkF5WUPZqe2TmeQmo5XqrE3du8ats4D6TXXESTCuG8axJdiauwnDYwuBZwC",
  "key11": "qu3XxNu4g1YUaFQoYNW1E9MDf9BwbThZJf8BqRS4E5vTDrmwyUCU4bLCCf3R5MAXCH1QyFWCzNKrHin7pxwmNbk",
  "key12": "4uujVqYtUmmxPi6JJxyymmbZJmj9GiZPfWAcEze9m2yUHr52bXrhmb1J9zM1s2YXTXfUfMfE3sAWzq9KUC85C4pX",
  "key13": "D3h3HTQLUMuerQQgHZfxpM7xAM4mrcHnAZs4jJaT3CA7dnXUBJDLBZMBYm7L7AWkZqJMDeYNWZRC5wXm2yU6anz",
  "key14": "3CYMntt6NwDMvQvXaHD2iuFb4Ej2geCxUzGP3Xdoy6zxfZxQBtupRjuvtAaG3GntVNWmGZiAD8aPz2jvq8XA3eCS",
  "key15": "EnH5RDSJr3u4anPvC7ik5GnMhHepUTkp2UnDvtSLn8JfqD7GTSGRnk5L5urmnhzyy8AvZx9vgFRx7QqPYZZ2rWq",
  "key16": "3SKyRByyxxe9TErppoc49qxakdVcBXViY45oCtWCjhrfAJNixZxbTELuorsL7NPdxKjgZyCnmDm2Qzc45rhgdiNy",
  "key17": "5wVyu9fCU5Q6RF2vnZbyPMgNLmNuVKSMSbxfuRVBsQksTZpUExJB8nhkuJCGLyMQpiqyEyoKCQhRSTKCVhf4fDmg",
  "key18": "2TYVi9SicQnTFjFSpAdBvW8EuuokrSqZQv4V2JqMob1LVQ9M9c66FnAJ64X47zszivTtA7QRW6sJrx89Sd1WSm66",
  "key19": "2t65tEkvRsG4vLRe2H16kAg2gmJuNardV8sFpPTJJvpS7qvMp3zb9JkkvVJxUKGicMZ9wCvJdUMES6xHreJJouST",
  "key20": "2u3UaB5GjWcPbHy5qAGU8t8q5mmTjg34SqMK8q4aECGKzrANXoUSpcvARp8oQ95fdAWSg4aVQPu5cLSkCQ46K76K",
  "key21": "3hCGM6KMTbHMm5LXTSpBEdz3hsrUEkdwEqem8WBuWdPHRuf38oUHS5e4EpsKdqELUspQ6W9FyBj52dh2eG8UdZyv",
  "key22": "2yzB2q1Ae3gwTTz7jDHEBP5W9JmPk4p43MYW5mBd9CtNCgfFzKjBsNDek2xBRSwZ8wcqtFzZSX13ffckNU9tSqSg",
  "key23": "2KjohZF5PFoDvyPysjqV3wTsf8D2Moo776GvMRGkGkbnCKmcbMhnanymfWQLD3AsDXC9AS1LDjC4wvcYggcsjbtN",
  "key24": "2EKVbGWN8FSvpsxDi6QRVhHwyTsC3maE7zEDJgGMRrqcAzLgiNKZhj1LFCrr8GYgxg5XcpyrCke1ZcLPrfvHVgcL",
  "key25": "2ZqZwk8mcxcnLBekrD48E17mag6j3aBEw3RvqJD3GZbGpNZcFyLjxrQW5VA4hqj62FyKKhg1eh9DcFB5WKdhEEtu",
  "key26": "2gDqnGc9zXXgzkLHLs2PQcVpVcARD2dDzmRDx67Buyxm29QUcQEpiKwjbytSczz7eKgX5kkFEWPyJw3iqbn9aC8n",
  "key27": "2C2xm3kPKqTvvZJXou2LmJCtD2zcbhcb6iksHnWH5n3tCJsi1aD4RvCimG2BgC7CcTgFHjAXE95uapNCGHfP2c5",
  "key28": "5Sn6Am7yWtY4CmMvxKVBF6AG264vTGq9HHsyy2yeWY48Unqnnv5zs4rivPiUgVw65KBzfyndfz7LbNzMPL3NQQkh",
  "key29": "2fMVdCduPVRBed9DJxeuTv17UsQBguDPzykBkzwMXUpgwMbRkLyuLwNJ5PdofxmYgA9rkYEE77sDoth65QcxT7ML",
  "key30": "39yiczkMegAi82kEkU8ipf1VJYD5SFF6nFS9Xo8nqpRFmHQ4xPqFddDK2oRfwXwH68XveGG3soEHhiZi5qdhQUTd",
  "key31": "5Z9wA9LgZt1NNo7PmbQeyR4SkEsz97nGUc37xZYgtSihxr9cJEiNnz66DJji25ch22HB9skVoFtsryes3czrf64",
  "key32": "5J2Zo9UXKaNjNY81p2TeAnjxp5V8bEp3PAmra4wfeBtH5FJFGHY7PUdzHBjFib7X3GCudFHriQEUy5pV6KtnDQtK",
  "key33": "BfRHfcazZHDyJKPyKBcRbPMpMGCXzTTWJ3XGJK6TJHfaWUTD3wBYZSoDoMcUNWhPw6wLcaACnve9HRcWTKnVLSy",
  "key34": "38W45ppE5WHxWHh8r69q8vhXbftw4wLHEeoQf4vyW3zPZNrRUQ41jaE3tcfYeTh6rr36o7bcNqP7dRgcPADKebjV",
  "key35": "2zpU3dCWYHrexAEBs8rHh3D9MnphB8XfFXCXo12PcBvPYnEJuLfdH2UhXqCtgqCezn1Jck4onkPAx7qnxqqM3Giz",
  "key36": "5qTc81BxW4yvRLx2FTYzQC3r6A7anyPMgntmu9JvuVQg1kQvvWm6D3rN7SgFxBhjYfWd4W3t4t7Hk52J5VU5nPkx"
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
