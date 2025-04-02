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
    "3HyQnoCQYBLArCJPP8kipcSPGFeWRndMXbP5VzVx8LnVzAz5sqoqhkwu8GhUZZRYUZDBDHoFeViJfWTgB2sDK27f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FpKSFHkuYa9Nm4g1qK1SxL6fLkd9uUVgJzEiqfUtckiZUiwC4PV82Qwe4tmvq3EiEHKhBjYkYfiibK4V21RrLGd",
  "key1": "3swQZTHVy7c582xV5p8w5ifCQ8nqFPuXWpG5oqjqSKcjKmyx43HwNZdPp4o1tBdTG6MG6y8Td2zCsFvczC9qxVkk",
  "key2": "3CUoRwq3P2NauBkXjVTKGLp7cBZhvTdF9cue5oJzRbrhHGQuBcN49uZE2aCeqyfJK8bSbNSm7TFPcKei5zp8Rhu8",
  "key3": "2dYYkP57Uc7dKbsk6cHfcL9hybeZ23mYkWjbVicaUjSppCVHGiK5B6i8K3Vfqvjc1UT7nLR6N6GRgE3C249HqUTv",
  "key4": "2L9AUocNtxq3KdFLrqT7rs4rCnP9cSHaaLkz6bPaAwFCYLaXfaaZ7NAyB3BkRwSKw8VTRwGC12BNAaVWo8gVKJCC",
  "key5": "62HP1A7oWATEttSj5zVmnsdmJVGzBDbgbLdiDZnpiNtCSUeZkksaEiU2gXy2JmznKvkfgueWowwe3uSunCy4scVC",
  "key6": "3MwLhJQt7vT66HhkYSaWnMg7bK88RFeBkCAXsePkqcy99cm7mHNWrCyDnEqcmdWoEHVY8MNtpA1rJeTPn7wHnaie",
  "key7": "pMw1b5ZAACSo5AUnxqfcLL2seJSNHnYVQC1wTmfCLyi23equPq1VuKtLs6UtXg5pb9i1Uq9XWvn4XMT5AowVKmp",
  "key8": "3xEGDfs3SFsd7va1L9aL7UzDMTNQaUFpjUhoUAR9LGb7aNGQV7bKvLz1FvdKTZVQ7e9aLiQEDph9F1WAHTUMr95G",
  "key9": "3iYRGnrLoEhQn7re7G8C2SxuuGMxzVrgqLR6KjsThj8T95C3WSuRntTKvkZUvnZfzW9uUzpJgMjRwiVciL7DGS1q",
  "key10": "3gmMD2s47Zy7r4zSjA4azNgjyYvRPW6P5Zp7M1gHixB1CtiEP4XheBUd2PYxSbS8KptNCNhjG4o9BubueBLKQeXt",
  "key11": "62qkPS4jNG3RoVxGYZahsqb9PU2qsUc61t73z9gZBfgjD4uX8SPAq4zPNV2fLZBVzFn6UDVr5PwKCaD6Cnfzvjkk",
  "key12": "4nt6BBegSshz1C6XCxNmd8BUcNY9m3QyHQjNEh94fQAcqA8HTq2DsK2ArFVD3WcKy3HxE3czWovqfjbX7BXPQVo7",
  "key13": "5CkpbBwL7JgavXTMRTfZQna8LnsiLXV5aCy65GHvMGTjPojHFCbTbQhwkUSkZyvepXgAmXeGFkodcTkQEWXFhGHj",
  "key14": "2hhBVTHUHBsSdFVrHokYjWCySWcrxa9wGeTg3wKsmZinpvQmAUnGi2p5TsbUP5L6jtQL5GBXZmvmkfuwYR8zcY1G",
  "key15": "3wENPruFDhxxgwAFLtajaRTWCfgmb26dru4JSkhDAzCyhx2UFvZEU9NdG7Mi9Ljt8Mg4o34QkgYEpVoUpo8QzQX3",
  "key16": "2zWbo1pXc8cfj21MKUU57xTPhBfmivMYB2FHAZmtnWANVvEkBMbZEgdqzNAcgjuQe1rQAhMN9c84uY3RLYhW1ZRX",
  "key17": "2SF1tqoWLFyKHRTQtjeGX7HMqsHedL24621UGhAf6zodrvCkRd5715dRrVJjd9D3VW6LLeXsmneQWEDer36K2s2e",
  "key18": "xHWVQkGuJFD2DACs2ttDuQnPnP8RxdCkoqyHnwmCAm25wtfZRrAfUXthxLyaNGVPWwWQSbgN4pY6sciySZkY58Q",
  "key19": "3tDgcCTDJVCRtuoTYoUS2RPQryQPp5awSDrjfTbB82gqrvLjEqZEg8WzeAHAhbrVGQP8BStaxL7JtPbQTL1Um8E8",
  "key20": "5yR2K1yTvpnUuZXFVdf4VWtWZxacdbAGpab79RpZoH7eDMHyvG38a2oQE7LFpJZBHLk9Z31ftc3KqErRf9SqikK6",
  "key21": "5idvPYARSNSRBs9WEpS14d4viezyLMt5QTXALdSSyGXWtgxeTeMBRZeYWniQfk5JVFnDBG9VKVVK82ZM6eiathNs",
  "key22": "4tgrrtiyNhhE7NLpnxp5LewZmH8puFZkM97MZfVmKVcG819ZH72qhKfgKRZZqxK9eyyhk4Gxdq8Dzkd5TE4Dh7kC",
  "key23": "29QRBzE8ASc2eUFenUYBc6q4QFyQDn99Bm4BoiVhyEkLdXyFSm61DEseHx2CpxrUVcwgnEFvhHWPCnQKqhpVCK79",
  "key24": "43yGh15qNMt9kDZy7Dm1hEGzBhBp8WvpWcBL1rXGVocQbFxqngxEqkH4HGnEs5egEt77As4hvLUHV7NQLBgaRRya",
  "key25": "cRT7pnf3ByHJ5JozrU5tfBMSpZSSRt5FUjNp44pFEQtHgr6ZkpgnakSPzepUzq5ms1WurGQpQaw55ePX55WQS7X",
  "key26": "3Z9MCsfiXUqxtnghzsx2xUjEg5Y8rgyGh3RzcHfZGjgJSBuHsb8o9G6yzyTqAWroFr2SPS11zh8967domtE785iL",
  "key27": "5VNbsctTKii4Kk5tXxX7zDRci2DRZ9xq88MmhiuBFYbQF7on9t4B4P9NL3qGH3wL6SATM9uFGwtSjmss5vTWY67r",
  "key28": "2jFLkAiQ4zTHWZDdgSV3vdsy8kV2YYyzFeHj442nswTmJphhsoev9GwLku5c5fd4bbUk2zvUuUbEBMXpigUSMJNk",
  "key29": "44ftsSpyfxo96V3q8bqguZFNmpgc5rgicozcuV6Dhj7GdVHgSkXmah57qMiknTwDg4VaymrUKJcH1hbhbwL5BKev",
  "key30": "46HJoZ676UJHQFCY3giww9iNE8MkiXcJ7uXXNQgnNR4HvShWKMKSRYAooAsMiA1XdtJNWRJgteku7aKDZRHdLbHF",
  "key31": "4FefR5Qurd8DBmYVaX8dKMbQo88VvqMxXPKRMvPhMMsFQMJTMA2PP3ZBoyP1c93eSMzzVWmCxgZxgN54yJU3VNAn",
  "key32": "Y9uQcDH3n7erY92eSqHcrL8wBuUTmWrrPejVg7XesqWUXA6aUGHecUu5WYw4UrkoAV8tGmJTbcDzSsiQC6mBrR1",
  "key33": "3ocS5BokVtrDRw8C7KDP3egeRgEep4wCPrezqmYJf7Zx9aeukeyLPwGcGaJGBH5rHz8K3bTTK7NFeZYoA835mhaW",
  "key34": "35z5Xp1sKsMUKfdS6Y7N4dxa7XNJnZkRuEB8QPYqaRuFMtEHo5gYXV2ncKaxrUUKrASWeecG7WqabRua2gfHxL3F",
  "key35": "66AS5Y2yRZUZcUGJoTBpUAPXR8XNNLMWQnvLPuksDJdnUHxKQoa8iJSp3Hz57ueMnrqj4Ry5d45MDnTfheFaWUaL",
  "key36": "Dw8Z7XwAmNCWFwQdiKuQECZVtovXf3yj9tX1SjvvRh9pBQxkwL4qnwDbcucxuaMXkbyXFuxiekFR6wozxhLfQxJ",
  "key37": "4Vv8yo6CRfdPAeNHMW6CpdMFT5SxN9DjisdaER7obWgD2AtukazKG38n6zceqfEvbvknDbKX9i4snCe5SexPBB76"
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
