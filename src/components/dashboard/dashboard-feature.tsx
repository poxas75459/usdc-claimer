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
    "HN4rMhrj34ePhE9KN6AvYNVmTn3gTddvnzQoRKVP9cLd9Exu94qCrzX7BqQqB9hB9Tdv46zpEYTYRUktj8K2x8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmycFd9SKPnEqyam1NjGLXYSxDKDFpDvBNTTiEzupdyrHgp1Nz8MHDEw8R6vAL1z4WGV2QL5WnPPGqV8q577Hft",
  "key1": "2AFU7rotakzUPhKq1atHfwyDKieThHLxdV3tMbedRRRNaThiqPAGdaPJNuzgTHMiugzRsuEwwhQQrwdshdzgez3F",
  "key2": "rmyuGwXno9ktGCnugz5wX5xer1JD2unMyL57osbV6qPBKaLDDx9hju8sC2wBu6JQ6eHFdkKaUA819phjRsPnfF8",
  "key3": "2XG5axYHwnqnEvVrcPhJ1Tirr8JXG9AhBxGbcSjK9YrfSQfGnfR1qZajycKwtNMXcoaRC3faN9RcRBAZ8p25mXvz",
  "key4": "5JGsvNMNMpjiXp27bdoXvqeZPH3fwY8WmjuJy2xbRxeFEBb29tDMJ1Qg1fxd3bnSggGRnVMUrL1hhiJT8xH18g5L",
  "key5": "4LrRwBHFPqULfSfWuugme8HzCXKKGntLrDngcXrHZ9ZcCfDpVtgMDU738q7VSo3usCh42YfU1rKdguj4DC8P61i5",
  "key6": "2hAkMncwSvPqkFgX87QX9iNMLg8C1Z4te9iNpGbu9VcSfLB1u85J1DinFFRoZ3bznAkSSPXHQhDtSznHdUVVZDDg",
  "key7": "2skGe1MGge8SbwHchmYaPX2Kq5uUKhjQyFNPg5wxFvU4SjwLGVKJyxXB5Y8idx9z5QBA8gQufT4mprKLH1baZhKm",
  "key8": "nrgJkATUWrkZjZ8oH7JmHmwgqxnS9D9Y5ag4KrsqLK8AMDewKwqKiNoqEfadK6CLuePhRBE983Ne4UDF6nohQRZ",
  "key9": "NGEH4cSsrC5CJ3Vk3noYtdu9ASmYPiqisJmmr3kET7aENVXTG33a98mtMiHmpbq3Ldtykza6PKSCYkCdmqQZ5s7",
  "key10": "24dEJhDFQn4UAp1RSERannF57YDVqVRWGjoJv8czvrGscYSakguUVziWSwZELvmTg9pcq5K17HD7SUGCGaLWF6yB",
  "key11": "43K69CeXDGzDzxTzbuxC6cSffLeL7p4CQzsYjdmJcNxZ7S6M5v28GJNxbxPTDGZaisQ5qydiTSWHKQRYRC3vBPgu",
  "key12": "5o7iJicpftSYqcbCcaBtBbbWBjfhaUMRXuxbVmEYkJhQCGr59ypRCfGTfDsM3m4k7fhAmcHordTDoigp6mubNE7m",
  "key13": "4VAnXkbJnjZ4Yb2zCkt7PHJ72uG2sXSWzsaaSyiDLKquDQ9kkvgZan9G2dtXHKa4h7CwLQKmBJ7kamcmzBcoMXgZ",
  "key14": "3mX72BSYSHbu3kUKqPFvVkMtRubmTdYdGuzXTY8aWN3hskhjJhMCDxHTjBVi3v3tb2CUbZaAQtXDxFafXx9aQNCB",
  "key15": "4oQy9vkzCe3VRRsNPLVaqtbHCJ1UMqvmsYtqTsQVKM4KZaUV43NgfGKwqdZ8Hki54Kmd8pzyd3QnNjA9RstprTFt",
  "key16": "4TS4NTviZaztb9TnopMUHn3fwg3SCbSYFWvvThtygR2dKeecGkUQP7uQUnfMcpzV4etEU4RQBoJnKFKyxn2uAZ6f",
  "key17": "5ozoFGAi5x7h1tUCyAXiu7R3wEgb6QW2n3TTYwUALAGk6pyNqgziW4EibbATjcvsoBG6dTMFn14PBUga4qSqcBGN",
  "key18": "2WskvzX5HyKPeneob1Rx5MMP72tFRc1b7WeAMz9P45jffmgt75YaByRTGNPhGFUS2cYK7Gd9ic5kJhDNubLDYHNq",
  "key19": "27rePPZmmdVxshtYbm4ubdJA9dAhCBf8WkAZfJts4gbhzvdKVnPG8d9PiRDJQu7mBmpj1pHc8c2QArYMh6te7HyC",
  "key20": "41xm4Kvv8b6FHoE7uzt1nCtuarLMaW9TqSBHjmCsydj8K8GdZxtf2YSLD85PXm2t4Wy2KYo8BvpF9t8L5RsUG7jX",
  "key21": "5WN129E7e3kwQ4ukHmTxpLgUXr1ZUcGR3WFzJDpvZy3CA8oD4EPqsoW1X2KWytNK1MnKm9zHRwMwJiwprHhFrmVP",
  "key22": "46LA6tf1YwYaVhyHmTgQtyJkpW2NDHJHT6SWfCohWD9JCWwa5GrPUvN2tgYViYrJp3ApahuDU5qqmWn1mG2ApBim",
  "key23": "3zeGNYbsg8HXvFBC235UtjaX16hEZxWQqVe6Hj4C1ajPyKLMFNccXqKovtrHFaFNX2io79muZxqwvSSrxv7qF6DH",
  "key24": "2QNGP8pEdny5Ty5wM96zAVPGDJvSrinjibBrnhrTdLD5VUohcmHqYkSy2S7v6DyKcb7s2eh7uNHKC6cJnmpBVDfS",
  "key25": "3G6Vjw75edb8hMAJNo7LdBQTH7gjJ4nPn3P57rQsBdWHEYMzAtTKvVFpwvhxCGHurh8nRWPb9gNTQd931B7NF5WE",
  "key26": "4WVKbw8oPESiXbXE3XYe74EQ8C9LNEWtUPSqmeou58EvmXfvTq9wNdJFGKZzbqdFJNp5aSTFwsHUJLZQoWxrw5Ek",
  "key27": "5wVvjRZTVtMcxnJj9SE26vFvn5tad4fSu7XvrY3DLRhznFiCv2PCxZSRXd3BCjKqJPmTfcYj91CV2fV4UkuHb57U",
  "key28": "4vsYD8y5AFMwbFVTjFDK9fHwLu1zSz7MkGZGWGNNdaBvsziWJCrDrGKHs4kaGpZ6rvEVBUF2MKn24LKB52rLhGUj",
  "key29": "5i7QoDox6uPGcpPtWUZxN3dqdHj4L3tPy2LBRY9fYaZURdZbWrb6dEcnji4bGg9TkF89mdU2v4NUkbcy6qVUCtsb",
  "key30": "YB4RLAGhynmy2pHwkBixMCvrwrmdPdUpvdTvbqDewmWfq3E55z9yqXPhgWP9DJ8yk3KiMQDayxkjoBTW1swih4S"
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
