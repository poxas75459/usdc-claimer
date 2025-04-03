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
    "27mEYe4fHzDbWURmN2ZAYNQJhSb7wLR3vYKHbfxKbjN8MgBmaQuRmoPdyKQKaaLBRVMVKmegua6odbya9vrhuh33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P53KzhzAy5jCdWt6SQq7HwAyGHKUeZyiZm8Qxtwde3CZmGvETombh6A92cFooPAo5hFrrHwwfXaPCbuiCXsxdZ2",
  "key1": "vjALJFzbM1frY6RWBkiRXRVLA4ru4QXs5Bn4GFZjFViiNoP15MjDXi5i2C71M6Rbggm5p3rnZrEwkATVqnCDQ1B",
  "key2": "3E4QBPTQLpxEwQYZ2snfjrzbu1anTMceqTjBihYmXaiKyLUw4fjBM8ZC4tGraBQ894wz1nQv9TWk4qJu4FJVpWVQ",
  "key3": "3gWC2zXEHKAGc2RSAgbfG8BNT9J3UwCThkwLDdhzvnPpW9daJZ2QouH8sLh3sCBznceWpAiWyKQTWbTksR9pQUpK",
  "key4": "4diSNTGerxoZHxGzp4xXL2MFc7Jc9u6wGjXHJq27aGxwHVN92yQL4MXCeHhtw9UoESQqBALPFiEoU7pGn8FJqFvm",
  "key5": "53QVJ7yrDUoz6c6TvcAvHrKNewgCUm9wrvmi8mj5ktNvDxXPg1qfGzDoT9vettGNYg8yHYKK3JvBvybo97qcuz3Q",
  "key6": "4Yp2WHkbFYCkukSoBU48Roy45BBiwZxtyhzCU8f98sQ5mNkWmazSB9Laj2fczWxYeyrFr7x8yzYzCPARcWeNCKGP",
  "key7": "3B3bPDo85NEpsgJTYkF1ZuQeCQz21bW7cEdJAfHZdAvbMhixPQq7UbYq68BoaSBbgeb1fWRRxWSg56SdVfuTT2qa",
  "key8": "6uQ1mfj5ZcgunmpaEMenFdph6qbGPH2deu8mXGYDpcgWaSPGpcFJGBJ5ecLRGihNbf4tFu7MfXPLwbvDPyXCuJs",
  "key9": "35Z4SfcoQ5oE7tr73Zmpd4MntkQJypGDbBGRrEi5ExJqsZbQ819eDLfm5SvN6RqaPQoC1c5sUXgkyJ2SH9KdDzQs",
  "key10": "5nm7A3D41HVhcbn8e1mu6gZZxZeTj3B2nraP9zKJCqGgrSwtQDz7ZWdVmNDRpA1Pzuhz7vBuTXTbM46pF61A9KkM",
  "key11": "2pZmZtXMcvdx2NWChKqD2bo3owk6yVjqCpD8moqoh8ASM3EzpQHmp9bbhgKH5CC12okr4kMgm6EkzAgRAJ2r6wQk",
  "key12": "4bqUACHh55CU3YmJh6BDEE5eNGDAWJfYJ6FkHWEDjvecw6aJQdcDRWWvyg3qykokGWU9ALWQtDXCXvhGLyYcdxJU",
  "key13": "2zxaE5gGtoi6yNnpCHKjh6vxD3LGSZtzDFNBPLtVfcu2pqLiPYVELePRC18ZmvSP4QnPP2XxrLwYV9iqtw5cpGjb",
  "key14": "2aGB7SwV8m833MDe6KeFetkf23btdjsQvDrzE6K29XYxr4pi6FsxH6QS4MY7SqxM3Gd3A2sZkmG8UybLUnJ6nHmf",
  "key15": "4gJb6BLAZAHDkAVz4UfsucRTKYr21F5zKhMfDRMqbswRvaScfajyyNK97xDEFEG4j7kvtKkwvjLEU7mXHdkW61gd",
  "key16": "2456oziCoHKYWu2D2evxQaRN1KHgxtSpY7EnnNwLpAgEsrixUWBnHc2bgV8gtirz4rcbhzJgabAST6YpMMVy7L2t",
  "key17": "3MxaWztfnNps6UHzr5dhuMQtdvx5ZWSYWfEaLCSwEiTQ1hzHUek14Hnv9Pra9YxR5X2nRoQVaGC7HB1seyfWFUog",
  "key18": "2v5Vko3egAXuUqwy2KAFdzb9gK9TsCPFGVxP4DmZ7bdEaLw9qTKJzjZSsjx4w3AFZsXYxW5Ejsytsnh9iZjKfNcK",
  "key19": "4u4YLmmwJyfZMZqCATcAYaoxmhpt1m4tqHJsLqkNyf2Qgv1KWjSN2UgaVptRbfRRo1KYsREbcvqHpwkfHPC27Uru",
  "key20": "4y9mP9Hmh9oNb8tEkwnV2bzG8oKNwZjqNnzU8UxJAQXkZRwCjJ3oDAzjomJJwQ7e1JCGhW7rKN3ghokNQDRMsYyL",
  "key21": "3Y33Zj6jpDAGjdnCdtWnt9n9wWV2FJXcyVKtP4zFsZ2oFrmMfd6dzrHMEvkHA1BvSdg2bQLs9UGMUJxvFT8ueKVn",
  "key22": "2L5imzbvuAbsi2ph8oiP7GHVmzxiPpoAwW6sviPV2mGs2GvKw3nRFg8qDLtmbR9maZPp3wy99noV8GPUPvRRENLY",
  "key23": "61MJUUyNakzXevDeuk9orQU3gyZ5coZDQPDusmTDtirBAdPNH5NimhxA18HWweSLw9FsEudwKsVxsYB5GNhXQbAi",
  "key24": "2DmHHtuxcHSvjVAQ9Xpx6LJgPcwgTEDiB736X97fL9CDh4PFVQ9tGKPj5D4JptWDTmaTy3fcN59moJ8iQkFrc3rz",
  "key25": "4gkfyGcQhRtadMGoScMcgB7LmRu5ykT3FrXcTcWwuRTUFZQjTF2gvuTaPipFyGwQodm8RbC5KUhJSKrKJX6YVRFT",
  "key26": "3ZozgVTt6mG82iubfGdM2c1m5PvHASJyY424e9FZzvZG3Aqmr4ja2A4DBZg5rgKuEWUyGtcCFJnQtHPQfxpQSEYo"
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
