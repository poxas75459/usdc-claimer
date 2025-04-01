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
    "4u2VYuYZZD4gUy9jqZAYCYPLEKsRQm7tNuiLx5g3Nq8grqytLJmEZaayNJhTXLfS4RjnqbcBzzxzfeAQunGELTxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3mQieEgn7KLRkBbBqJigpJAGhHdEdrMy7g3KVLfG2hTNuFcqrZ7idPCXyFUwRrZx1TQuydN6iRmVwYtafr4Dq",
  "key1": "3jQUsPUphvj5Mu8C7LNQFrEcFfe2Rt1ndDtZC8764jSDLp7rAc7F2afnCjT2u1xdYPks1fFsNukE9cPLY9V6CCyi",
  "key2": "3FvotPd4Tr8uv48r6YcGHMweYceQUtbGLDJcRuBnPVwu7XneLvNJcjyjJpUiPQ9Mb6wrn8g3xzA9vGhJTMsZxETM",
  "key3": "5PTJnaPrqwZAFRN6RQqtkZrs1CG7XSpNEkLHtHvwjWJuHFJ4NCFkgu1qugpKkvakHMmRxViySpj2PRA6wU13BidE",
  "key4": "Vz2p5v2kjEJ3qycD3Y9N28dikSGwmaWM3wbEBJKybDQSX5kJ3XbS44XqK1GUCkkX8QBBzCkgnfGcXEsc56zXv3t",
  "key5": "P21pPUH35ceG6qnzUZ6gxbF15JS9GFphpQZCd3PYqjG7syDVKbHNfk4NcmkAzxRKa4DzxHtdNupDLmm8ArF3qPw",
  "key6": "2JUe6oxiGqssQpbjpemGKRgpoW8927oU3axkzePJ1RA8NjJuZfYRyzU29HPCtz8bA2KBtJ38oR7T3RFZ5JhKVxhV",
  "key7": "2ijjvRWbeFtjLRx4XXZmXDWFqpfs1rku12brdcibvq8R5zuf5UkXiDPUxfKUykMb2n3dsGH2t2fhmT2qVxgT8Cev",
  "key8": "mS46brqwBWmH3tRx6gKw39Pyh4Npc4d2V3gbZ9P7LEAvFjo4K21s69LPa3ajJMwMR8hNU5tStSfD5nsDSWzzJom",
  "key9": "2457mz1hfhu9CaqX6sAapnEs2LFz3GspeQhkQpFGkoc1NxPpDjyYjxEWt5fpyRv96oK3wa8v7X9frPC7kR4wrEjS",
  "key10": "28U1QmHBAuSu3r9TwyNctE7X4xRBVAiVYz32gMhf9U82KMcBmKfYzWYXjneK4FJLUomGueSBNpTwVBSnSrEbZonK",
  "key11": "esWdBJsrRhGSeAbeGQgn9jMr4h4fera2DiCW8GydTPXugnqaeW3Z51jzMV8hyLnixxQusd4efx7CwipBn5wvdES",
  "key12": "3n8JtcbpritWk2TEYhXGXYrfGwhKsRLNmgyF6xxKM49EUB9Gqmg3bpFmnALU9tGJaYHsiiG6F62hSYy7j5ojPc84",
  "key13": "3ATUt6uUUEeDvicaGpQbCtdBVo7aCXMmd5hSkMrdJd1Sk5GUWQTD3yK3hdgN6kaNbMq6BhLQ96mnZBuJpx24Wh4T",
  "key14": "3PXE2t9FUZgVpWYRSGfUf2gQxKthoahL1EfdQWeFcG2pDnM5jP44W3AWr8tdT2wPZrNDXmxxYBaX3iW4Ka6Nij3h",
  "key15": "31vHN37taxpvJWCB6iAvNXpo8YSRmQGumfR4vrJbTAD71BFgfExWPsLBsxRURjr6mimys3bAQ2ndR2Y5phWujkkV",
  "key16": "FWZ2oZcmAZGc56UQZTypeEeH4LJZgKutGujc7iktYBVD7L2k4rzHy7P6xdBUC2kxmCmdSfY7BPhxBEfkV4qVko3",
  "key17": "GnjisWaFbzxunYMWwZNj4iRAW4L5HxsbiZYAd4Raeap7S3bYDKzLStZtMRN3ZJNCWEsBfixxYcHeSGRnuLzm1Ps",
  "key18": "cYVV7ai9wNCs2rugcg9mCuWSGHsn8ogobfvNMekiBEaXkSdAgHi7s7mEhWLJ119yDtMvnDzvfopn6GNCcj9rUex",
  "key19": "sw2NeEK7NqCkTjN9fKfCt4btmVScvRafpAoLDgfvKA9rP3DzPSnsb1P6sQQtriMeNAhwZMSUdWmtrKUdeB5S6bZ",
  "key20": "5MtrRhcE992QN6NNSHmSX4JT2grJSgRU52wxwjQWoCica6izMm7GnfMCfc7uE7TAh1DMVRfRuHh53NwV9C5ktXTX",
  "key21": "4hKTLrXHdbaWTzKWJWyEG73tscmhpWrUwX1sX7HfAPooLu9qqUp2FEskKWqXXCd3x51Kcr231kiUS8QhLVvsUqgf",
  "key22": "4zEKuVmXubv8KZDTPUyE8rCfx9hvLGPPiV7HFUxKcUY7qmmXpQXpPrfWrTs1hLDFRbyZoUjHbcokZFJqUBbgTHvG",
  "key23": "51w2jWdZZtgi61AJ46j8cY2BWeksaBypLR7nuivt4zNFoauesns4jrnCE7ZGJMJmqzrgRmu48J5JZyAkehpu7dMs",
  "key24": "3Hf8FHaUv8718ERgjMKYKBZ3khmhVTMtk7EvWw3drVGQAEySbWHzs4rwqdaLhK5tCePfHetk5YfDVFvvhDrzpEX8",
  "key25": "uXMB7kwUPeDejdQ2bnpZLaPvfLzgAvQWBwvxaDC8HgGw6U3vt8awGpG6EUBD7re4FkkAgRoTXEHzThLyCCiKwmr",
  "key26": "66EECXZ9McUPGvZLTbqC7WPysg2UmAyYo56hUter6yFxeEnFgfSpm2912ZwNBpJ6Tygdx8cU9Cwz1m635DFRKdcW",
  "key27": "5zyEoZFwEBvY5GnJhnD44JNqFLeEMK3neq8DtVqS3MC8dGxu2GgU54Z1xf7VzVXGif2pTdGNcNdh7yb3u9QCty1L",
  "key28": "pBeq96NPAUMwL3Hk8oVTb5XUNtjkj9Djt4qcr3KSpDpdxLGKVYQoGPyyhdfkruoRVe9ttfugUnUs8QetL5xg5W7",
  "key29": "5Xn99rMUyZfi37Xva5v6KpjUmFt7tpMnbYXkB2QnEAVzy7TfoyG7vpHyb7x3V9E6LLH9CUnhfgZBidhshQwkHia9",
  "key30": "5Vpf26BJt1DeCDctRFbifhrVPmgwbjryuhvsMS6HvL1canjaP7fA3HofChMWoF38QzUZbSkPcECePqF1TRgiDFA4",
  "key31": "2p6e7Cd6wzVdVdyc8QDHLjxtMvDiQMzfMD7MPuTtbAoJMrzm18Du9BrTtuBRousNqdYjgpFFsic2yCE24oNLfePH",
  "key32": "xiX5FsA5kXZQ1W1GM8YMnFENMMXCgduDC1L1M3PDca4egEGiHL8Q2bpj6EEYm85wL1a1cZmVtp62G1t2tbaq6sw",
  "key33": "2zwWU91K5ybR8dH9CdKnR4SQF6VfBb4btFtosCJD4qoUiXaoYPHFtJGMNunPRnWpTv5HTrShKKBFXsqzWZRL3Xz1",
  "key34": "5QjJcrVWCNSHm1EiJu9bmr6H3YUw9aVmpxL5T8bHMqupceEJfszWojs24FSZqvdEKrPwC9eTiCvY9eM5JQT2kMfJ",
  "key35": "4dAU1KjM7EvrjhQxttRe7GVCt2zJoGDmfhiCJBTRYyGDHFmJUTTPK6GCjBgDKUCn9xpvh5yWyo2f1DHR1Bioe2uv"
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
