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
    "44KphP1BPA8dHVamA2SArrswf8Q4qFTD3QZuke9g8ExqycsjwdirCPLcFtQwnpRZfFA5BLhGZ7rJDN7z43QZqWSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4faN11hg2W9YZX9HFnbLyXT6ciA822iWJv5cyjRsG8YrLSybWex49g6oDzXiRDZyCk4tFKa4jKx98F2qJ7fUhyxC",
  "key1": "3ydprwx4CZXqsTmfvA2goLcy8ea92JinHfQA7UEA1cRmzV67T1jyucJJNeVQzK1w7do2X3h1sCp55uFdSpRG4qHP",
  "key2": "5xtGAKtYCwusU3avoS6UCx3zwGBXqeDZXZfb29bRuf7PuSrtgV6Zyojuy7dy8XPkAb5YSQ8RWsnsyL67Sxzy1pVy",
  "key3": "3HmVn2aVbdc4UQWXu16BoPZouB3aoMQ97UkbWcoAAQDNXtTuWGuQGs6zysiAW6VfqaeDUqhaZPZquhYakvENXXMn",
  "key4": "FVpSsEPL987jQ1QDoZhQ3Q2u6ZhE16jcP4LufxHdDFfFf5UUhPLYdRsYZmVmuN2LWjF17DJS2PpcggsHtdBUnvQ",
  "key5": "ikuoTYQpDkRqRnWL68Tq3uDwxbtTpHFkmqpny8pLXxAUcxKvY5sLWj7548ZTsgqsR1W98RK3x9gHM7kZzG4oeXR",
  "key6": "egpP2h7VG8PY1TbGge1eeaffzaLFTebCT9HP1w1CwxJP5mEX7g8DDj28GqWP6T2As3D7fwbcBd6TZpATyQvSMeF",
  "key7": "3pqDbSVjYsVA3bc34ffvhDZjFo7r4XzNAMXMjJaWymUcB1EjPE8HjUuQkbzvW62J4ck6aH4beVzQcKszCUXDwnKy",
  "key8": "2mSqhXvQKRXiycBbSVtMyjavsvrvGk1WBCMAZwbefxMUPfhZmcKzXR7Gd3RGvokbpvL3FUteQ8gdcaWTLHDd3cSr",
  "key9": "59LR1Nf31CqQ955utUf3Hk29JNCBU1JSPxpZNtT6LTDu71iF1YoymbVzcnxsAirDgzaDh9opSxrhUTttQVZ4yLu4",
  "key10": "3EQUV8CgouRGviCBxeSi5QsC4GC9xkpeDyUJcV1e2H8N54fGwhiYwod7i941M1Ketpvp9WC3WJ9gabuE3beSedu4",
  "key11": "2UCLJcdGri6KqwNhXr8cFLW8toQdq3ymWkAV5BTh3tSAFqbfyWesTznWfScYtWUz4vyKNdfoQHtGueHzQWpLJGdT",
  "key12": "5ZSrgY8hzpgLT98W7TmMiPngo1vZR5s6GGe6UGDd8EVwHkMiipk5a5b8sWyykZNpWKBLPR1qcXunifsVQoJF9dDA",
  "key13": "jf3KQDNC3QnmJ39b9swmHnUqVGAuQt4rTjfg1ZUCa3v2jQhx9Py9nGAviL5haqqsj2QQVEzxxJnSZmm9Mkm96gV",
  "key14": "39zqLds5tfPzPBtJ1F3hh5ofYjQHuqYg1A9X31SdgFRzY6cs7BFByPmwnxShHw1tG2oQFbWbmXdVV4pHUC23Ao2b",
  "key15": "3rMuaP5DLAybNNmXhBeP34k4eWZ4iTN9QcLjDkAtTe8ygvzA6yBcMhJx3T6WNHUPsxznLLXySkX3Wm2NYtJdsXmF",
  "key16": "CeY7PWmvngPa85KQc2Wkef5Lv6jFoCZZvMJnJPkKwSZ9dBLR6KcjWfqfuKZT2LBXhBsFGMKWrseJUoWV4g57UC7",
  "key17": "3UvVq6qRFHwmUkhrgx6wj85xB4eYpqjjHQmEfLVMFpD7TPSDkKvcwFzLNVMFWpEZkd3UWLWgQzUij2Jq728ufXxg",
  "key18": "3pSm6zLwHTTfPqZukYRAJ8PKcAvTtjuDSKtDcZFGEdVAYPhT2UcwW9YtASZ49FuBzarBmQeQTMuX4xSMMXnS91rT",
  "key19": "5miGLjVE3tud4knCyPhcw9y6etJWfgRzcLGWpLbqWjFaDoJP4cjyVKwbTSXFa9HpuUK45MxWwoqNP1LCwimE5cEt",
  "key20": "4gZJBTiro2MgArzb6vdyHB3WhiaviUEUvGYrx9f6LevUTomqffnX3kiKEb2gU7azbCAcKwDzkFjfRnJzJYja2LSu",
  "key21": "5F6PVD9yy2uiDvMEgrbkhKz2NBFDw3ouSKiuGJj94N5njodNYhKT87xsRgDgkyjCfbM4vGNw68rxzNRZU5BfY8uv",
  "key22": "63LJX7KNCbbiVvd6asQcivtwKLdSuVjNbPa855MBsvrVkoEyJESxVtenDLRR4mehJG2w6uG1jJjmL2wc2RPkY6MR",
  "key23": "62thdWD4rkrk2oWwU7d2knmeszJSgWiTM6y1xUbfgEcV5dsBFnBjKUPjTahRRTWzFL7hbsyDmYJetxFgNFViMMst",
  "key24": "YkdXiFTmYY75NNfn6esoHjeb4i7GpkeR1vgopivukUNiB55apcbjWpDJQCEgjqHB7rsZeP8ztHvYNQ9L5L2S9Ur"
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
