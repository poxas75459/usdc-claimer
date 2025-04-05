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
    "2Loz15chyCpaSP6ZBruhRdKxVSFVu9SXomXSkEDhcGDihQPo6Q3Bihx1phySnKMKn5MGw6Z2c4nN1y9sn3qYpLGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BCHzCXeXDTZe8WkxrvyD9AyUHGb2J7DWXZtnD3F6DD6YruepLYcs3zjdcXqe9gbcgWsrdUD7aCBopJNFyRMxv8A",
  "key1": "25V1HAAugr4bDRdJDSipQyjFNPMNh9QLCGJoZLqxEvg2UqKBxgFvQdX41avQWLxhCHWYDVffDxdMbZ173qvfN1T4",
  "key2": "4MGra7x7XKwa8aw5UV2pe8xYW6MfRZh8b2CkRYtB2SGgmkdtJPto1dzyHfzarKf9QytMYW7kJKxgFdf9qZQdUTaL",
  "key3": "uVA4SMsBAMgzvFHpxqAGzyfQkM8umHT9XFTeEV7HojWKdXp8RjkzDeh9mH156YqULRugKN5FBoDBrfaKnoEHLK9",
  "key4": "4ZztwVCQmLYHLJCyBkr3FS3Mq4aqT1us4mmhfyR4SZFKB4yhcr5hHPq9WbwzCctr2f3ZgrCn6a4BuA6aKtf3wygi",
  "key5": "BXbnZLsHwouwR3UtWgL4nCuRc6ZMmD2dWeDT542amv3EUrBYFoTsbUjbSDF6HULWmAxEqPjEsPfni63VbVHURca",
  "key6": "2oS1NaryW68YLKArSiLKosJKnyJxp5GJEXPZSj5BspvSUnWfVcjszyoEL53RD6zD8PTwBR74Y4vbZyRRhA7c2ndb",
  "key7": "6X25wxyo6ukkxBDQGFJLXz6xeQFxGzxiQzukDD5yTHfTLNJBHzUxeygc6sDijYqPSoyFbWxdAGBv8zwFC7vkhvx",
  "key8": "4WYw5q7GiUQ3jhifb3DMoHF3dHrsUwXeWCUiGK95Qj2rgzScgC2T43ExXPLWaxTXs8TBvSKH6EdEu54qQMU2bAo8",
  "key9": "2xkC7KSUaXFmpfrWnBDFSWkYbSH2mfYXnGwfi9qwEAq6B5te3zEHtNFdqWuAcgC7naZV972vT1ErsmytahE4DUYR",
  "key10": "27bqEcnLYSo6M1RsyyJgmr81mBEMc2QHTC9E1ELUBSRN5LcNU9T63rR5K6epDFz6xAS55P4EQy8Lbi3NRSkGt4Gg",
  "key11": "2r84Deg3Cu8RR9rNZZNH9CQWmrUJrg2DJVMFMtQfWru5kfFXnXBkJe9MwqRYmuax56UDwCQreTivn8WsTJf6xJeY",
  "key12": "5q39pwt2Sfhns4hPHAPeLsTArZzMEaNedjAeXAmn9JBCK16PKxJgU8FC7UNjTma56FvweidJ8UYjBUjrsQU6gQ7w",
  "key13": "4SZVw8xbSJiV8rrsvx1w27JfPRTR6oskSvfJcunN5UPKi3wrBUqcghqkPvxeiQZFK3sjpNUEcc7K4SJaNqkAZn36",
  "key14": "4rs47rfNMETN6LuPFGxRQWrMPeycBoZXpyaTsh5KRpvZygpqGtiVAuZmKf9a1cMe8qCMsDcWMSZq65PxvZRV86k2",
  "key15": "32oeFKcjJyPVp1XCo4uvzdUC9gRQzRc8i1JFpD6xooeEBqQhLTRd1RvbzqsxrJ1WdBS6c3ckyDvt7g8aDuyHpUAS",
  "key16": "3BcMtwCNXU84xyWrszj94MadHrsKcbvV8ysGnjfFAqWVdSVsz8wBEfeBYgnSEsXoPjdmm76VeumWiLMtwKHa3QJn",
  "key17": "5UMBygKcDeb5ztkVsVTjf8d3FCPZHi2wCe51ZazV1d5SXerbYBiMjCmrBXtjUcXQfyhvDv4ViXyb4RSWgJ3brsFS",
  "key18": "3oYTDAYCAggwV2HcBYVQPq3a2bsMJBA2TwZgfcxk7x2ShxtDEjn42DkdXNCVZRTtGYgLbiCZ8MHr5gtkhSy9AVEG",
  "key19": "cHU5v9qVZQd88UnJyUZbtQzyB2PnQinuVbTomw2XwpgJvKLagZwRm2CEuFySTmKhwT7ZgbGy8daFEUd6gZGvzed",
  "key20": "5jMumfHX6u4MrnvpByeguFfJL9VUc6V5FjfuKgvqwWRtV5wLQTW9MWdRGJfWbaKugE7488M7zgXA4V6wcCWMJ94f",
  "key21": "3DN46VroAwJQYsFCuKZjWff4n59g6cvrXu7wbkCimYrGwYi8hiPdhbDXG4fQJLQhF3LtPhVcbGvrRZ4nemLs6y7X",
  "key22": "2ZnJC1GHHtKMtgqnwncNUEYWcGoG19my9vD39fhFpuR1zCjKBqhBWdhLyFPdhBuQjZgzAkcTKcEyCqyqKGB7SAdf",
  "key23": "g6D8gPrS7gmrzTLWgQzmmxx4Kx5PfpbLDgtzmV1ThtS2JppSgyG1cWwWRiZjH6EGBKa8AxWnf9saskCN3Tsvydx",
  "key24": "SatnaNk1BPMoyJ86LZspAfLJKfyF7nneSwG3iqAqtntK976DD3kG4rn1xAc47uhYt9eYhQmh3zHwBky9NUenaVr",
  "key25": "338RfEimNzCr11KQ8YdZaRhtppDLhGswdWzwDkHiusyyJoWFt9d8L4swF5qMnXzGPW9mgNRvQuo9h1G5GnNcAkQJ",
  "key26": "5X4ukd16EYd5RePUjrXCWN8S8nyQxXaowhcMrdy8y8uszcyeDqk6ekJ4pjdtPxDtfy18aprsGLppCFu8HqgVC4Av",
  "key27": "5gVT1VGpKZgHSsqGxQvaEysm6w59xZy14LnM5kZUTXhT7HQy7FPtb4jUiNw7C4QrRbzFyKzxxHx24NvfWx5QZU5h",
  "key28": "62FU5z7mRcruZSLTGFN5Fe5qp3odAdpNbesjSQRiDCBDFdyX85yDACj3pC2LwXrVxMr3kRuHSUDoxnMVdGs54Dgc",
  "key29": "5ysMbkvH5aPaDP8XJD8ruHnz2iCs1t2xZEgo3GVPdfB7q3pAJFSN7DbEZiE1cwXcLPvwWpgNTupdVSaJaHNJmY6M",
  "key30": "2UyWAVmzKT9oe6sFhVYF1BHeTbS2shunbkLQYzyvS93LQTduKoATZquNa5fjVVb9P63Y2WEL2gj7yo4zCnb632m8",
  "key31": "2pfPEc2BCJngKZJJtgJ3t59KsLhTZ5igFhyuG7ZiRBBpCMpsyVyqNwL41hh54HbomcxPwhMhzSgVBByJ3zcE6D2i",
  "key32": "9DJgY2NoBq6WSuNgPn8yC2vkHHhDv36Z55m16Gyu3pZahZUa6nz6bh6LyZibpg4QXEWPHsKTYsArkiEKN2Dc2zm",
  "key33": "3at4e6tiX431LvCcTv8QCG1cCx4uug8YTRKRhFmha8chN7DVthe1WqbXd2rhqeRxic69DpSfV43bFQYoFunwhi5D",
  "key34": "2iU7ri3Hf77vPr3Jdv9fPBw9CBYSth95HfVidrRmQoRyX6a3kVGmuvyMCTNqWmqVwecBE9WwPJWWP8z9BPHquRLq",
  "key35": "4aZ6VpSSjgxNoYEVXUtHsPbetQAADkxiZsPJcGWG3cCGJH8C6dFyW5QMU5KztPBwBWRY4NWmN1AgVo74i8x9kDpN"
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
