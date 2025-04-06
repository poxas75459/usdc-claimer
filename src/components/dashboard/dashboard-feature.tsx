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
    "2TVDtM4CcYkzxDXkZYTqhyhR8MwAMaoc2s7qEaBJfhP3hy1XRhFcYAx3c62sc4c4MKQDSLqvh9athuny9aAcPhAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CCHBx3kFb63Qrc3KbgL25amUMBXXKgkgdKboMQKw6Kv6GJRMdnpdRreuZRdLpNywM2joWYu4Mw2UVf96qNzZVbJ",
  "key1": "4gqKGvvZMmbW9y4zcZC5h4PtCxQgduc8pGPVL5PeQeuaBEDtKePFSNcKbC4Tr81g4H2bYbYCpvPMe1oYGd83KRmT",
  "key2": "4pYCtW9MhvUPdt9VgcZU82CWFLctwJcVyaC3E3dUatVwkuSmjycuHVc28JZxBT447xifczKKqx14K41AyQ2HZwUs",
  "key3": "2TaTGDrYTTDM4KbrZwk5PuawDYfKFCZBtbjtaj9oZSMwzrTtPF1HyZDUw9z3hNZ8UhakjCNVXrxYLn1fsUKLa7vb",
  "key4": "3osJ6aFRM8kdWNraMCEiUFwCBystcfCuVirLxL3TLk7rueRawE1mw5QVBNBZ5XjPi3uJTiv9ooyPhsAr5wjFuRmj",
  "key5": "2d7etXzbQsUvQLP7nLHsEuSy5JDSFHFp8RJ1CU9YwdbmHU8CtV4sFx3kFB2gtJZgByf7eTTNJtUUynCycdy5FiVj",
  "key6": "5npzqH1zc7jWgkvtvPM912qXFny1z6in1WowDtQ7UbKByWLJ7SYzzQYPLkvUH2u3maYm1aAZ2qNCa9mQx5WBociS",
  "key7": "Vq5JgUnVjKbxGguesDawfGGTFeJWgt8C88vVFTMmVXiCtgXRtb52Wb4urhmprieuYBuCDx7q1TNpSZgW1p4AqBL",
  "key8": "5sJ8p1BqEGNB5TgbZqfHj5radYSFTfqsrhpkyGpCByBqAozivi4sy4T5gf5mm7jfXEdzHw9ktAeLXSmarSuByeUG",
  "key9": "3M2snvhGmphtoPecEprMYKWNAtfy9e2tmdnhF9bJRzBT3dskyjBY1n2kWcVGF3qzrDm5pga7tSYHXwUhXfNeMY4L",
  "key10": "351tkPSjg9Bi7zuybsP23Tb8bptDKAaFcZg3RSHWwbmrjvUua2xxAH8MZWNpWZFBNoH3rQusfPFBszE8HU5HxxKV",
  "key11": "4CMi6CfNRQBSKad6nZRZfWMzjrnu6yXiWv4do9v2KamWdLc1iakMXfuUseNck1zmeTbtTjxQkpTc7Rxn4Qtpegha",
  "key12": "2kN4rJPFxAzy5A88RPAbxaywPrYC75xP7cNfhLspJU9Ln1duUnTiKgyZv7MTSTaFxrZPTSUCPvQ3asgh3y2NxTkt",
  "key13": "wGw1m56qrWxrRNWM8TM3FrCpPEkqsmXYe8BebFw8YshY9JzdtdXJsCH5fXV5MViz7z4SHpMgps8sWrpsVxj7crH",
  "key14": "2LD3eLgZGAboXbt7MZ9PdhYCZCeb5YnbDnxaQJaso9PQsTz3EE7HNnQ16bhKvuEUD45BrRDhCjQiusVTiQY5NKZs",
  "key15": "QDJrDhcrCg7PncYdBPDbt6YewDmXVYvJwSy5zpeHp4s9ahoTEcyHaZbZUozhhene83JhYtquXQcAbjMKZDp3x3Q",
  "key16": "4mmSdXNAjBJ25XKmARsAzrvtVbXxWSVNqN1kXqLkxPVqQwZLr1J8Me9TbB9CnQbdLSjhNS4fXLjSKvCz3AXU3E7N",
  "key17": "4p7SfQqe3Nsrqnj4rP6SLS5VYdQxj8znyPUZdCpeGtGBgCB98DXmKiaEBSz92cswU52k35dMtn32m466X2xx9TmL",
  "key18": "5RvA35m47eHjFB3UtDZVeo3wkZKbstGpR9xvHW1x6n2THnEGijDBEkx649szNi5yj2Vd6xWQGc45SdSAcejRj84E",
  "key19": "4UBzpgFQVputvxAC54W6eLinK2Me9HFSH35Heh3ic7pgL3qQ4qxPoVV6qXHo5BASdfwspatQTzuYJN7P7zjg5Acp",
  "key20": "36HALRTow8Nj1E1Kcc6haSFjRcphjbH5zU995Tudeek3NCTSS72eg2tvQi7n8UB8RXZ7zss9xBhnDTVEMPj65Axv",
  "key21": "5GCMLkrNkxqRt4CQyDrgShb1GRNPm4Cu5iRxdtZGZEVjjmEBKgQgJKkwyUCmM3aUrxtFYk1rcGBTfwU2EgWKvLQ4",
  "key22": "3tKpV59woMkkDWPVbpH165fPpDpBuea9rXx8UdaYXdGWXY3gURgnexcq3bhC631heSQu7akviBywrLV96CUFQr95",
  "key23": "DytRs6yhYcnRaNXyvDgysJrQig3i79oxoZHYKpNFUPSgvSvn9Tysw8zjthZDe5Yajziee5gssi18tjDoSU1bXH2",
  "key24": "42HBoFv9gih6JCqNr4XBSG9zwUDsyLKj8QpCm462ka6jQcJm6Wf5cS2fZoVnSX1xPQAwo9TgG9KopH6RFAz5vDq5",
  "key25": "R9dKGVTC42joveh3Rt4ZBFKaLXAj2NjbS2Ju4URDKEPSd4wTeKym4xZ912qyvUTFx139ECz4WyYqJVMZhawy7yK",
  "key26": "55zr1mWVqXPJfNGTEEzCkspZnCTP7NdDnaMZgqg9ZarpVUe2QSYeM7pRYNhUSECdgBLZyYcQk5cdTEci8hzxPjZQ",
  "key27": "41sQF7c3uvdGipvp8gxsLaFfazPccu3rGn2QHXWjEZKyBY5wsHFHo2ZDxwHEesEGNLZVYWm3sebhVvYYmWYaBPZv",
  "key28": "5U4b8MLxnnMuvUM1ekHFktDFATNujLtamPkG6z2fRcvDRFLGZx5Bson2SarwtqRWFk7vQx3xuxN4VmJVntiv8ATQ",
  "key29": "4phe97us5ZvmSPaGA2fFmgcqQZbo9f2iofRhMUJ1QMvtyDE9dtfQPQhTGmE92DGcmvgbWCEcT5fKxqk9miSX19ro",
  "key30": "67435k5gyr1JuR4qWtrwNNRKK6zMhu6mPwtLPsqjphKrYN3eBejdbiWFrUBTFjyCnTU2s3xrX6q9p9sBnv7mimHb",
  "key31": "3jtdrXve2s4Z1ySP6PB2P4L4eyXjhpBm3FTGJmMJTgfFxQcjeHEk7doPoPy1EuTJg6HATUXkAe1qmHfmnFy4ragq",
  "key32": "HtwNaEcay8zZnzrxU23UjcEE8G3gWvTSLJbF3VuQbCRqYbfbruGWQcjxHVHLiFtJRiWaeZsEKEW5kZs1kNhGmVj",
  "key33": "5d8j5AiCabDgNmwvEM7HJ3dUzrAabYpzDJQaRkk9GXRzM7UD1UJCPCfwnbRKnLHTZ93ZcyXamsP3LbCyRXDSEEEf",
  "key34": "2ZcpcivrTJbYgxGMPTKMWTuE6MV4aWNwE1tXUwSPzDbrM52NNWMwTttdMnquN3G8v7RdwZ5TDTZXfCuQm2fRPGZY",
  "key35": "3opGf7x8Nw15HwewneezkSkHBxtPsWKhA7uaE2bXPeBy42jQm3SzXyrgAMS89YxFQ3U3fMZSq8CHzopV69xhzJRg",
  "key36": "533SBxqaTdoAMrjhgtyLoTkDbKFY2ZRdVXQwsWySXJcMR21oXVxYjYgvTgQnBC7r4jB1jkBVJJEFngBfAMoyX25X",
  "key37": "4QWu5s7fRheUKyyxR2MZnm8CubwT6YNonbRmyPhJLxUw92kJREjtjqfMpa4fEJG8VYxd9ghLfShcbR4MrTmiSPy",
  "key38": "mg6QoE41xKJoTtnxBGymrFdsLLYdBseQUqN5g8oc5mVAFFvaRZmXHpLSpTE72HF6uYt8Lq8yNTPYqzuEFqLAxyL",
  "key39": "43PNEMsqGZ6jp5LJaLi98sx3WGDoXoRiaWBrmdoifpZAXFoNhQiJaKgZsqB9znpdzj95EDcDMA1p9HHdqQmkPYGo"
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
