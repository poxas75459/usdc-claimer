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
    "4WHSzBZuuDj36ZhbpRF9JmRcpk6L43ygiDYkBfvLG6Esy2ArZcbX3mgejRgsiyHBJqMFVLXPRPPPiUqZ4HECPjZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdqsTNQazPzfGrkrekxCms3b8Kq5cgggidBNdc7Fqz12SbcucP6JWqwpM2ohcmNJzomj4CMbduA7sEgBEexqJpy",
  "key1": "3456D9jf1Aiu6BcrXc6wLG8JTc7TQt3414fBuPxu8tXFtk4wzAx7yuYTocJ5CkAFyt6f4kJMt8GSzJCJnCzUowRy",
  "key2": "5NUL2MC6oYwE3KXLSfZynHAQaQFB9DrKzFvTrachUjRRDutoNzBndbCrZs8FSw55fLtxHXahiuEgR2jJAQT9VgPT",
  "key3": "Z7qCWb4KsHKz2C41r3SMtgTEYCHNqcEQR7N6CtrLHdfNnxmKrfgQ4djb7y5kGS8GmpwaNxMLmgvWDZVaMT9zZ8n",
  "key4": "32CFYDHwoar9ZiWb2emV7rdvn3wpqoCuL5ncPTz8TrZnRzzGwp6gFmN1oTqungvUJBgw73V4sAzsnpXYjzb948jw",
  "key5": "ZxbbUQrMHNy1Dhmg8n4qroWYUhBvig5TzMbD33autocF1G7QaNfiMGj3RjwAUejdoXZU64arVhDkB8LkQ8ojstJ",
  "key6": "4dXUJjsbSfsu7rwcHExujXLTKMUKA4QNH1D48XoKYckp5SxLVXifwziRpBuYu2e9kyWL1N54vPZretpqEErFzc86",
  "key7": "XpD6kevGCQGUvuSZCGmEeFFMJ4EenfFRyhx2PsgEP1FQSHsZuG3fbFMYwPw6ioeV3PwpdyvNHXNCYCUBBPXe7dt",
  "key8": "5DgRUKQ6DKJT4G2EHAZ3Hp8nYUXBzoUD9GfaLcYMivbzHtYdPcs5QyhjTCdNE22n8Wy9oUQtzLUNhLNv4AhJY9xu",
  "key9": "89JE29nDnmTHK9z72BftvezrfnPgbbcMcGmLGbx2A8AGSJHEVkJssAjjApqp12hAL4kzs3ArALWddzieavE2VPy",
  "key10": "3yYwG6VsNFwFuyToGHFt8MRFhiznZhMxRKJ9h65iDHivNGeQtiqYWN7q1nr6VKop3toJPLxhXXLUkHK64KZSUMwy",
  "key11": "2RDLww8A2yNiHMeW6cXsVSaU6YaPvKQCykhyqpjS9qANyb2pMnz4BUmjD4H4XPQbvq8cHXKiQK2ksNcohMi6jPBh",
  "key12": "4LLFznxzP6P6TpYvRequ94EQUkN5yPnd7K5vZFFVB9S55SP4bDCSwRgGWeH78SmsQADGgkEcg8JeHfjXouiKSk4S",
  "key13": "5Dpb2xqUrRsnjMDxxaDdQoGnF7VrpXtHEWQcitrm6HSFaevgwNJwN3Fi7QVoSRfwBfCNTufbZU55U79wPsE6x6Zf",
  "key14": "3k3avu5yte72yWTVHgkf63a3anqXj2J33EG34MBb8m6dePJfgs2g6zfwAEvWZdNXVRRR11XEX4m9mnN59wgcv6Fm",
  "key15": "2eR2G6QKTuPRZy5N2pFLnS93prev8aEXbvSSYPJFjBoaHsrF1jm3YGB5WSPtVWhRLs4q3XGioVJBmf3EAAeFbgzF",
  "key16": "2BopPBH4aDdvfkKWgtncJnYbZvgMZ76qUjqkAi34Zha5UQLdQfKGKPxJc6V1YJUjSiD7vT3kNNyXWpSntPHq7FRJ",
  "key17": "4Vz3u8nmXsXeDBJaJ9gkjLh1Moy237EKp5gBLSXk4hoYQUAaa1ijmtRgq7n2APMA1oJzwyubC3nAA3rtZbNL3peG",
  "key18": "2fjZb8PaG49PUCWU1QPve1MvFkTpYppDXa7gVh3Qe1fWfvuVRAtzdxwNM6h8WDDW7ETxbdSzvYKJPZWEbWHiiUNa",
  "key19": "hcsVSKqfJgR9DAGHR8dsQ7ynB8BSs8bXBGt797cmtuHTR2zM1rSA2p1SnyQGLsHZyrLgtUUsRzzT9jZaM7uhmYm",
  "key20": "5hWCS3C3JtptpYsUpB1ZpcAoh2aWsi3M3LBkNngdU9BSNf1vPVadtr3Fhbr5TD2Tw2cF1aHQjToE9QmEzqDv5MQH",
  "key21": "3Vq5LShN8dvn3Fb2sGBN6hWEQUnHCFVerCLqyhVimrRqhWAApFo7RsLnYjQMdnqYvYYdzRhvHs1fdPfbKmSfB7P9",
  "key22": "2yKcTspfcigt6mTqHP9yVqoSDxH8UhjkcWR53JrbSnP1cKh5f4FsSV7nnx6skBGKhccR4dWYVDD66CpwMSNgGpan",
  "key23": "WsaYX4mBskBMf9Lg347JG8TB615oaexVYxzLqyt3mhT4gY8tcAjNBtGdysD2VebEWgi3jW5NvorthDNWRpsDscR",
  "key24": "25QcDLSZ5ts9ZryBvxy1MKECNN5czfkPPaGgtAM24o5XPnTERyc4kTpA94K8FS6NX9ynuN2UXabMRdiookniZqC3",
  "key25": "3gbuFSdCG8TDqDg4LUAj1inoBtY7R4EUchsEkhRL5QU2vFLfnB7TMH9Vc94CkaipA6guwW2SPuj1TwF3hAjmCrLo",
  "key26": "r1cXaz1vUZpSqV7Bb44ebibw9MqSPQ93rgxqZbC5WCHPC3TQM3BJaG8yoLzysmcWoR5TH5Bpyq5PFikNGW4iofi",
  "key27": "4fghNe6YHznEBsDn5KAmZyJw9hYbbCbowY3xZ3L5qyzrLEcwK5NZ6qGFhd2sud4a4LgaeZUNuQm2HuNhzoZq98yn",
  "key28": "3s6J9yKgCskZrdt9ZJnvAEVZWYmXdqauSijDxH1U5Y9Y3emu6hP8mSMRog7H5FhBnZSBT6uxaM75cvZhGMMtCofL"
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
