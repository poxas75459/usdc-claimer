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
    "3NRs6STkjzmtsAVcVs8rmXw5x5kazmDfFauz9JRZ5MrkpK5FsXg3LDLWFiZD2Apoem2Cgv3Feu1AxcdxeRwQ4EQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kmEBT4fTN49xezKirGLHss7AWo9drAHMhtBV5bPfXhQsLPipzq2BxQ2ESG6NBt6wBNgucUvaiuisNXKsd69nVGk",
  "key1": "2bSw9Wiyvidb5bWYaKMM7oGz5q4k2WwxEQUKbbqxEPCKTNTzeVoY5fCVazLruqWdtHUhN7S3RaorwSsrzLwNbGPC",
  "key2": "368PRLKz7MeDZpAXogKuCCuQdjef3PRrdhqAJ4xhnS4jd72W8ZM5h8vikxzKy6gZSLgmhH4mPeTQdq9HwuXa8hmm",
  "key3": "3G3oC78feopRjRhTWHssfhEi1h86Th5jn2QAfDeZXRS92FN5eLBzQ6iZGa1b2fS4CrpbSV5Xc12BZ9dKXm1vLHxg",
  "key4": "57APnxDd1rPFsaqbw8C5wRK9JajXkzwP87aAuwScNd41gVnNZFJBxK2wvZUCZU8GiLKmmUzX9hit66gjch48eqC4",
  "key5": "srVYo2oEgkNjU9D2Cjf3Y8kmR8Ekg2mLGZsFjM1XR2WbNhzw675UuFjY5MQa7akJPVgD3ttvWQz8X72kBu59YZx",
  "key6": "RnFE4ExpQg8ovbyCg74aaxYUdParNeiUjWCouKkgVo2pvHU3E2XJHBRoVvUTj89kbkqu4Zv2LZDYjNLKVK734Ar",
  "key7": "4GNBxVzYjve9HfTuyAH5Gcq4R6eKmhdbuoD2yRESBf8H4B12kdnW7rTkxUpN4woy1XeKin1jBEsN73MBLknA2n4M",
  "key8": "273pujhTkqszz8hvy5re4RLMJjRo6AHUrGpa7Spb6BBZqdZXQHEFanHnoQ7vdKSDeoHWvTXMVm4UzVQsY4f7Khx2",
  "key9": "5Lu4dB1FeGR4arcSWbT9APFZWfdRyztMzT8AWR5FE2CAcKFqeDLPDsCAdDEktgiScZue6Q4tepuJfLyz8qEZMMRB",
  "key10": "66ZdBC3gwRSDZQbzX73GTPjyt13UMsPV1jL9c7LjB3uQqKaubnSRoggp675v93shCnZTx5WqyScWbWXF1to8jaty",
  "key11": "2gpjkdtUf2hWe1CQS4nVXWEwbeAWvj6dT2j15XQdG3ob5R4YoXAEGgntu6BRDJ88A8N4LjgkDnRdTEo6zXUDvpdq",
  "key12": "TNoUtMDMz4Fjm2aupL2UuxdzJS7dxdfmt45eiZijUnV1S7ZY9RBZTV9se7biiFMb43dacUzMSDtjSBmsmSdvrEj",
  "key13": "4SYnvX1DDNfq3vGFekNFvarJcGd31ewectjL3Uste2sqD53vJhi1hSuR2tgJdtvX4SiU8NyAuJ3BxFy9vVMLCpBD",
  "key14": "3sfKUqJhGvnBgqg9GEwWpxPBunNDLtNYiT1M5mUVyDcG4zN64YUnypjiABfdQ6UBC86CLU1dSYvGzeqYFth1upbi",
  "key15": "2SJ22v2dRVtky9MHL4dy5r3qiXRD8TVVnxQvXn79E7KD2i3xQoTyn1an8fWHJLfsvKXYuvULLqMf3XvTTqG2sVWz",
  "key16": "2ahowpjdDCmdG4oX2U5AxC4Z8CUwZaPG64a7bm3Uyf2QuNxfxtnF1bbpbj8c9qrBn71Jz932a7ZhT6KkDjHJkFnv",
  "key17": "45HcZ9uT13kA2pdxB9vErmK7Bkn7698B9Qjvw1M2PaUjRyzug6aTYhR5GeZppy7JnRUWZbjSEYdypGczMLSpyvdD",
  "key18": "QtaKMG4LcfXME1hyWncTfSEfJyAkz5BQa6NJTHa6yQqPJ1umPUsNLdkQfwA5VtHs6BWz89jy3x8AqnSdPXpRBZZ",
  "key19": "pYTrUZ24ZLSGH8HDvWEUKsb9s5yh1LcsaKP979ZYyhaVgoM7WbvkeaXoHUBSykrXMZoKatcDzd2FD4L5ASjmzM7",
  "key20": "5sn1hncVaGR9zfdYcXTmFCqSm6kufkpG95QxJdQP9GscFDpyMnVFu9z5zkfkC7aR3PDALAHiNvGx2FcuESuyobPY",
  "key21": "2RdcvasybqmZGd5w4ZfowcGHgJZzqSiSZUFYGx91muBVcTynF4NDD484PwpJ9eZoueieDqEQM7eEKVgk7LAx6GS8",
  "key22": "2ti76efC9ixR6a1wsuobtDyEKPzdstrJ9LwSP8x597BgKnMRi5kDnMXUbeRonNxmAA7DBk3eN55tsM13oNddMeYv",
  "key23": "2UZG8GeT3eHjQ9CpJhVE55pmUf8XwQsdhpcX4Tz1tVxaES35LNJe4uk2RiEax7SCULXjFYh2tx35teT9YR8Goi9m",
  "key24": "42CFDtB8mZhRH9KW2dfV19RZteJSSt2Z5htVsvZEM6X8Q1C6hYfBkZpVPgUycraJZCLN4fsaoY7vFpW6X2Y7G3v6",
  "key25": "5irTq6A5DdZTWrJ8j8QQ41752CB5Z1aGfD1QeeLfGX2pX9njCU4CSZtwL8Z6n8kYTQonRCEbenzc8ycgMJCLmser",
  "key26": "54sYLNZg8jhrkQzQu7bLhnex12PeDJESfpwJFNjs3dEQ6dzWe1Y3SiKEPUekz9X4UnyPnmnSocQ5wi4YqSqDCyQo",
  "key27": "3ckP4cmZ7CbBLe9prjrCKPoR8q8cACGRFkAqxHsGbst3vzvs7jt2pYrYgHrHXvZWASu6DQLvd8HcKdzjNVematVJ",
  "key28": "CA61vBv9KZHv7CH9CkQKWrzx1NSvbSCtbstJnGE6LmSBaPfNfHoe6Leno9Tr5jHgocomEYt5t6NXqbXU67gPGzm",
  "key29": "3aCb3FVUySk8nLzMvmPt33QBDAi6PmbKF3XajDTv7dk6Y23KckpC8bmKjd4BEhZZ2PWphg3EcSATSmrRZD5MTboB",
  "key30": "59zqABnpLEuTKUqWfAChe6tR6gJkENAGXdx1ZeCrVsKNwmnHfmtNFVUezizqDqEm4dYWZyNBnnV8i8pswVVjoiSR",
  "key31": "5T6myejt6qBkyvKgV95QijYDXABs9EWBGnSyfqm9L6AVpNrSdjrx6uVvkZNi3SLGZMiHpd1U6kwqKF6UX3psCmKM",
  "key32": "FUAKydtTRToGdrNMDUTqmfyx3KVZHybEPAF3THWnouhQTZnXkTH2gXkeVTcm2ZTqSSahVdGGpFEMXGMzVwmnuKL"
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
