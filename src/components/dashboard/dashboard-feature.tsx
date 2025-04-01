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
    "5hG3u3GGVwnUVS2K4eiJ32xVj4mRnac2xjV3anAHMKcSNG3AUx3GYEmx8fMtC6qRo1TPGoVQJdbG3YGzdAwYhz1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RtDfaS3Pyry53f5HWwsfZ38EAp3zwrz9wsodFCYBPS1fP1D8JVonwRWa6TcET6en3aWAAdL941FqjHVn5VDbZ6x",
  "key1": "51QFH19xHFJ7PgWT4qLKbYVZBcEXTgdQBcK1zxoYhvCCejqBXjy7Mcx7M8u8JgS7YnuiHB7PU2gLaeo3J5fCFbVi",
  "key2": "2eU4v1qLuwxMYRdgCofjLTEo3bwrr5ZPGVegta7E8wH4jz84bWCwMUUuYB2c9KVmTd9vGMzSvu3Yb87gt61imdau",
  "key3": "2ykHaS7c9HNUvp9ZKtLWWhpK7ZtTtUERm49DDXrZ9QTtveqnNgLwJbbPNLJDE89NAGC484p8Gz23zroBmPPg8wpr",
  "key4": "5wCuTEQwvf3hbh9VRicu2e6nruK11yXzyc3H6U1PG4ZWkpYD7yFGtFe7MBc7DNXzjm5Wizmquztj6yaEFvnnd9zg",
  "key5": "nqRCVXpGpvWuPuQjo8kCbx9qY6YLii5ucSuuQZxYmDymcdWBfjPKiRKMMfWR95jbCeuZADbN21buxufwm9aQAjn",
  "key6": "5uZeazm3rDyWfuMBHTZ8pcRnoMGtYQD37Lw42j1qEjpFSKcX3arU8xFrjjz2NkvYVdVtvxW3RHx7jPwJWgJrwgvH",
  "key7": "2hwGt2Q84yoTKxCVBBXbet9yVSAYkrC7SWUaP3SFCEPQCTnn1Yv1Guj98gYpyFXSueFcgCJ5oYms2JuKdxKB3BKU",
  "key8": "dYGTFwabDymJVr94QKo1R63tJSgayntecykMYkQCUwssByE9YSX11w8xKnmhjBYGNRqiuMxcUWZFoq5vCKZjDK6",
  "key9": "3fcTfAsRFUwx2qyMjjr9tfpBbZqMeRQqvrvrWfPKpmxXfxTSz4ADzqUPmP6hpdmMV2NkPruoHf3tgdijrLsPnG19",
  "key10": "2vy7UqCeC3jiAgJz3CSB93djyLfzJg366kYMCxYsaTf6T9oUSuvSh8roLaiBeqsb7JWeMWnA4nTZ5dG84bCDFEMj",
  "key11": "61A3iuQrZnGNhGb9Y34jq1NnkpgHWS88BqMRUudCfkdHAjvejDT1tCudxT5GCCycoQ6pEmU362Dz3eYuD4FFTLce",
  "key12": "4Tgoa4my7efD2eDoaLrASMszfjL66JcFXHhMvtcqgmtzJnvjL6okgt14MUutHQecSeh8MfbQzsJzNoETXNTvPBQ9",
  "key13": "Tj9GwXEZ3yvfJTPYD8pXvgQxLNX6UtnkHSQ5AKJkm7JRHJqkbHNQgZNFosqghESFT1yiUYux3CE6etQABJXZHhY",
  "key14": "2DuPKDg3difP3rdofTABz9pa2ca4kdP8DrenGTeCBuZhjJcqAmPxNxbXAJB1HZKVfP1SxoZEurfxE8RYDco9vpv8",
  "key15": "3BWg5K746uGKfrTr4nsLA54ZJr8EishhvNUg99EQWzajqR97cMxgfuW6drZo1LRQ3G6CRdkXSYc9PemWi4V6sXLa",
  "key16": "4HzW6xwbBoxqC5qjPwLz77TKg4mBr7bw4Amf4KDK5YUgxvVGVtsCAr36zpycBirTkZMZuwAWEajwxGf31Qqts3jD",
  "key17": "4dxA5jgF8rQAxm3L1zdMUwoBck9r32zVzTXGX2m7ujtBTK76h8jSdYRD4xWLcGhatimjDf5qkVvSC6WFLFmcYVXK",
  "key18": "4b2FmCp2bzt1jZYsT6abzGdoKJEs5PTCmzoGTJwtXeDjUHExXzNRjzAwTiT31BzmkPr5Qrk4zh3v6QfMn3qsYkA",
  "key19": "4NdSLADhHFGuMziqcyJHGQ23BDguQxcPqAyN8zVBudmkcdHByFW2vJH1rAbKiyiLnMwmRKjcAsqKSBw6HaEWXuTU",
  "key20": "5pNSEWLjfebW6dwMnLLDSaLGaJCMZvVCGCtVxwMkrHpA2Zw4ZkWAsPbSWizHGpJWSi8a1UfKky9Za8DXxcUR9dNZ",
  "key21": "4jLSm6xPiYGDdVsi6CtcKSHVwCS8H36SUTBTiVFJCWZxKwvEqeyuocqHW1aA6bMfMunMKjVCtStnvepPZSnPFjD3",
  "key22": "2GA8P5pfjA35646RMTL5RkvAVSyhExLW8ZbvCMcFC54LkBEtwfmSautm7tD43fARqoxu3dTMj4H8jC76YvFWWbM3",
  "key23": "4LkiBo2LNHT6SGEWRdtDY3hQK7QFrcJpb8wHsJAdRceMYH2S7M9irVU8bqDgTACbhCc32Tk5neo8e7EjjttpsqaT",
  "key24": "5qbE4FtagKQYyx6HCC5dbg1ECoGKnPjQhRNXB8ZktUrXgUKdRMdJv4V4GfmD342JwLKq1VkgWJtir3oPY4DvMLXx",
  "key25": "2s9JXEnNKbqQsPR3nkbxsCkRVH19bwBc2MvJPZGti6MfgpyJAWLCNR7hYfx86nJxLDAUVjQ86yeRx6P9TqfrLLKu",
  "key26": "5U4LP9Mo17c4kmTKiyVxQ4LLBJLCNUjbtBHZfWhjPBtLnWy3awvBKADJUqpVsgJhLQWsXMLQC3shSFHdZ9FMvYAT",
  "key27": "rTSDCrjoy8wrPZi3KmPoXb8PpPiwiua5KcRfw3sgN4uTHCgVbNCifo7r1QTZ9E2tzynYM8o1HE695xmd8GABdxY",
  "key28": "3y3eCuRHxGkEBeV6JvhuWUz9xSwiK9JjDoKzThotNqNSEnt61KUxHzeTtfuP3tuRnSFv6qowhSXjFZzbyfuRdoDh",
  "key29": "3Ucf5DTkinTNPDbtDPmx63Dr5YfcxhBmARpL37pLpaZ78WJmAcpWR2Fsdj2guqWjxH4wv91wYHnVbrs4X9GEgLST",
  "key30": "aKCaxo8ejrhtP8Ts1odi5zRp1MK2tC5EWTHoXFp6xTGDYp65qdFVKyi8G7Pn9torC2V9pwKxwNhPB1kZ3fyyg85",
  "key31": "5HJEHgTVRdQMb1ybGsvB9VaUy9PQW12DGcdwQDx9eK9xLwfKJ9uaB4Py8vuxLFhy3cLb82nQfoQ3n8m5yBp17Z8g"
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
