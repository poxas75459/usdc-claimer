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
    "54k5grBnwu85jYZm7XA4zA5QSJU9H2VKBExZbLC4R7Nv5WrSMyfp4gg1zXkwi9JvqfcneZoVVad7TgL76FFoGgP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yrvw149n6MFcqyR2tteqz8Ymi4geV9D8h7vWRhKTeLMxP5X5Qj3fH5kBDnzB2po269jVhJoj3Jy8SuxWJUooJ7K",
  "key1": "27vuufQxhenAneXhE4RK3gddUmBA2nhkEbqWu7YjNZjMFTX2ZFtNhne2CfwNiToo8TVPkZNjjxuEEXmTrMZzTSn3",
  "key2": "3wMkMduRJXqpjZoMisUFsRmwH2Xy4rMtN2bfFRG1AvnFeBnT67QfjZnrxKeMBBWvoSyA4i28oTjshY2jHkH5i1hJ",
  "key3": "4s1cXHfT4zMcEh3N7FZUj3oK5rceSeF7PnoHmSDB7Ckf5jrWo5fuxv2xcid5ygqmBti9UjrrfynduAwcECHqJEiv",
  "key4": "2QHxouyRbyrXdUGw7FQnNXDEA1PJ86KHGJTaQLZRGCZ9WgDQP3HSWM9FyWSKo8E7p4khJExm1L8zvbnNzJznNH5j",
  "key5": "2gXAXHKudSCxEnB5QoDUurzZ9WtLFpXvtvrJy5YK4Eqj6KhfMjteR1oKVYfZfVeq4AcgYoLvQ8n4EC8skhvjZhcD",
  "key6": "7t4tkQuFrCaNUMn7mSV87puMT1FZQ7Xm4EncTeW5Ay2QrYf9NjKfd34A3w5wEK2Qx3wrKw1H9jKtkJdoMCmZ2X5",
  "key7": "5iof1gy5iio5SM6VM94nXwhJkb14ENuh7SFWbMhBhpVxKKGEEfbqTbqkArxaBrasZtPsTxHDSxa9yJWTvqUU6wiY",
  "key8": "3TjXewZXhjktY5KkLsnUMK2xjZ37ygxKY1oe8Vt8eevJLEW2jwaYxkBhyhdEsoNc7u3UWWbmJSugzJq9MbJ5qFvV",
  "key9": "4YKj9WfuUDEJPwi1GnQpTs436RXJc7yRuedN9YwcZ95GRi1itmbNrnPcfVDEzY3wkiABMhv1o7VEqscAuWp2xquy",
  "key10": "5gQku3HueZL4T1Swusmx4JXB45orRE9i7TL34RcUiTAvZNmhjMskTuG3eLLp49ng7CRpo6gnTCJUJBzVcDynBYN4",
  "key11": "2TryyNwuSZqnYBJ4BJodQKdEB4QCmDgwX33as6vbLtfBB4vEXrRkokDapfzDmm6Nf1e8hrLJ2h71vQZ9HFGQVPRa",
  "key12": "2tYu6nwQV5nfB2QNjQE41cChqH1dmiC475UZ6B65dmbTtMDadZpYk2Tr86eGfLrreGGymFo9Qk3HUmLfkVHfzrvW",
  "key13": "VJDFo1UTgHBpzVzXPGUFq9xUFMFsiisgXCwtzrJyP3feEXTqvsyLZ6DaRA1D4z1pysM8FxhwSBatmpdEgYUquT8",
  "key14": "241xZLhom6NRUXjkyRSs29p3raxy3zYTHRt261tCMcehCSKFkv21edv1s9CBP8JyC9WK6UW5B7SgVKguhTPjtYay",
  "key15": "5fnhEafcLZtvt3hDdCvZpbtvPaaSyCeqes7FTVRxY5CeYZ6VgBAVeEMdZqBFmFagssxVWSA5ELtVCknEqxi1LSAe",
  "key16": "kLpGDot9EVTNzUjxFwHNphxy6nkpeWUouZq9cUnU2v7mHy1BkUVxFgZpU8dBh6fnyA5YaViSLHb9GGFhijgzgTS",
  "key17": "aRFrizNvfGfVheNtrczvA4QFU5nr7wg2WRub6qxNkVF6xgYjXu987KoYb7Wux547oN1hcmQYDqY4BqpKbgnwop8",
  "key18": "5mSi6Tv88zS56dmju1YVf4FTYmx9gvuPZZtTbHEaJocNMzMmGudg7famzRUyAxMm9t7AVNqPQgvEoiiFdHsfakgh",
  "key19": "2JYnJRWczPqjM2KPinMWQETS1FJzqvvjvBHP9NaDQUPETSyzPcxT1apXugSwUnTX8zNmq4tajAdVjCt3E4qkYLLH",
  "key20": "4fA85dRajcoTMpHgA9bdqtqY76RnAVzd8NDd5WHLshB81m4MGwEFBYvTZ2XnM8DX6jpcnCUpZvmoVdirsCL5h9Ro",
  "key21": "26S5uHkgUSv7GeKfxopn2zS1HzU69Tqa3A4xrbBDg5rLQfqCE7vUXRe7UQBEh4SMjJQpPRxcAcPJtLGs825MNxDN",
  "key22": "4Mp6DVqsuhR4BMdCvtrXmZchFvsmvZXmsnnY7H3kvAWJuPsSm8xCWeH4Py2RPhjUVYZFUMEHC2yhbSJ2RUrx93ug",
  "key23": "2vxRarnsQexDbnMyS7m7KNFwWfh9zi9EbnGqxfdsxYrYUmsEV8AZarDHxsLLR9SYRnFq8bkJaqcQvfYCWJqw1Pv1",
  "key24": "2ocbiKuqL6Mz5adfzmiaxmLvkF5jqy1vPuDKTo6HjzK4VebxrKFCzXqh8nyEraY3KYGEtcmCLZ6ShaRS7mPuisq1",
  "key25": "3Gc7eEdyaro7mXn5nKXPZNmt23r3ACwThbkDzLf6KRsLiBRFbCuBXgVBAMrrzihsTFXtrRFtPjXfrVJCiBncKzYG",
  "key26": "43vZ3oLn1co1QwXyeJgSDKnq3TDZY3FVRmJy4tnuqT4L8q2dHjAa3ycLTQr23kBoG1VVcvAEUv6J4Z64fE6AdrSS",
  "key27": "4Ce56DpGYkm4mfpsH3hTRhaogvPVf8QkUSxvvKKipBErRWT5CphUwtAPEm7shHcGZmZzcGvfX69HQHQsFf27mnTG",
  "key28": "4Myng2hCm1R7ii1VdrPNQczwPf3Scs73M5RCmsiyaSn39CQMMvBAmFSAcPkgvWNxeXpW1ThCuz9kyeMV49r5ThDN",
  "key29": "CGxmQKAK2qRrXPBKmsGALBw3JpTZozPKV25PGEACvCJrWqkYzvNuPg8wTeJzzUtVSbDSdwKFLcmZYDjqsk5Lntm",
  "key30": "5idEGpnXNoMpp2D5CMjNBQSibHze9M3PFyaHfqYfK5XmaKZ56kwj2fmGPQ6WNPbQzeyWzZRTdArqrvp6dqQwDnVz",
  "key31": "uqJFrffyai3kq82bnWmrNNQ9s5wwubCd2z3o31qFqQgtYXZou96uE2PjhuB5iqLmoqoXSMhismSYEDqTCpMh9xK",
  "key32": "49HCp61227ywx6GetUNN9rE7odXk6Rn4JoefVUtY8mfkYM1DiT8Gf6dawQsrxkWcYJRWTdVYXCkw8rSG2AozSJjK",
  "key33": "4eRb6cpdvCeMrT8XZRm7bpc63efgE771WEuabDy331BwocPypjK82fQTzq6GAzzWDi38ZRve47AaYGt1oKwJQ8oo",
  "key34": "57EvkyBWtWKh8uAMtjxDhLhgSqK1xoyuzNyUk74WuktpQN7AWksX7pYZdXHtxoGVwxokWe5AxaBosJnMHxR1vWzc",
  "key35": "2B1xeCKw3kofZoVxUgGsLLs7teYKKY6AA4P7ZycceJW2gi626z6p1KJB4ijRqTRRM6MDpgtbkqzHcdYfgGAtiPmm",
  "key36": "2Bxh9EPFAx97DVba2R37Xegq3DAmEMUWfHfk1AkgqaUDfCbcowJ3Riq8CVjEeqF8UKHpfburBobzGJpiuBBFwjdf",
  "key37": "1Ek5uvSwLYyahQ8x9aZRbcoGdx7t2RPx6E4krDjdSZvnCsbaUVo9ZceuQ7PrjLe6tbR1DJRt4uDXCh6diWFbd5U",
  "key38": "4k1kQdCzxXrAzAK3VzhHzwTpnivVwVhr192xrrgWLeAw5XcJ8NSM9qddQYrKpLW59UrEELzGQvuyrP1ufwcDcEJj",
  "key39": "se3cFZwwE6AZqRgXJvkRWyTNgMmJNox6WnFHUTirceZMechTAsGwkVEUdERd31MrWvYhFBz7R6WLqxMnxo4JBrr"
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
