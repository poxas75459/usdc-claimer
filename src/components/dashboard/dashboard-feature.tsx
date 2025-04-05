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
    "3JshvVMGyHfMya35Z4zkL9AHYacNUoFcqN3zbyxPEAfoGRJzfQGfzuxryHHA7iQKEWN4ASMdTKR3vcxyHUizapDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jiQt7ARNmNcDoM8x7ub3Q42XTTpAf6ojuPaNv6txPwnBBAT7ccUv7HXo3eed2Qb24k8Lh2rFoKeYj4hcioARKA3",
  "key1": "2kBNiGN1ggr68zf7hjjFrBaZ9yfuH55LP44QPY2ha6hEhRzbEL1CcjXanFsiBjRCm3k7dqd1iUsYjAedNwtrBZsG",
  "key2": "3bJE6zDYB64tetxtpoxV5R4ibCkAXi9NLudFL1iJcxzQcwop9XPDJ63xxvKv2eFjxoEk2pzLGA5aAXSfK25qDdRn",
  "key3": "2iEZEVmNe59iJMp298FYHonvY6dsUY8eixo4e1smgAYg5ZPMyP8Djp7Ms6zPd9ocK4iEG6i5qYLsd7tdmkk2SKmz",
  "key4": "3QKa9UB3fcJuMcMogyVN5VMKdUoSc6Tn9ioYznkDBqdBjPsP2aB7H92nPVFkYHC5hLUQwHST8cV9HfqgJGj87DFE",
  "key5": "227sZ6MebWpYDNjZQZaBS2KoGKZmGVtAxSk6WMMEADPnZLHeRF4jA3nJERYuwgQZUbz9fJD9PFh4aiDamZSLXzeW",
  "key6": "4UuMqQEv3qCYUkhSgnrgw8jDjw5JQQNeesAS8e3YytzySdfqGPqfCqzedSX4jnnhrWMUtLjYnEpCYanNuqX9BZnz",
  "key7": "5bC9DRaREX1hev13HV3NWYkeBgJb6UKR5wcoz6piaY847ye7KHtLiWHb6zdAgPQ6MpgZo61GjeR7QhsNhpiUWJTX",
  "key8": "627xhs9jsbLacq2gWpqnUgTpRmZ3TM2f96u24kX2M46bEJ6uGygLuVydcSvFowVzdVfT1LVAU66bu6BUJf7ZXqEX",
  "key9": "3aXmkUvVvt7cd9UokgRLnSkwzFaKg7CnPbPUD5NaByHxV3WqjgWdStbCSitet32QJJy2nVQysT6b1x1MqGwawxNv",
  "key10": "292KnUrnhAs3w9wXhWyS3zffFUd78mXpCCAiRGP8hk9Nkj5aTJcFcQod3mNkoKqz8H4wJnTVgSNH9ryDzuYzHfAB",
  "key11": "gsYVV9dco5HAL4uUGf2eSRvVnwisQiVLDPL237ahsZhgXtfDkapc6hgwYjpc87NDnYe818NLFtsGnEKHG2CKKZa",
  "key12": "3kQebtB1N77pDsq6YAFVxTKNeQtmfDv2sCv12nmBuse7sQ5mKtnapMAH4JggcgUa4qkYWibZZgfSGExURobRcCTC",
  "key13": "2RyuV3UjsKQGx4p1QBCkXaW6e5Pyis4KxkBAaDu2pLRQwA64oebK6L7aHwoRYsCSjTzxu8vZHZTmL7zrnNyiJYap",
  "key14": "2xTNKU3kyoGFoje8CmqedWC48Z8q9XMVkTgLA9B2HHYH8zm3an4Hkm8nJSVFoqiehWayRWpF4ZCPyQfwfTW8brny",
  "key15": "3qukuVA5ShGMw96mZE6FywJ18ttiQ4Ldzy3EF5m7qoxn9GHknpT4VuHYYE4wJYRZjGGZNm9Bou7XJHUGLbpZna1g",
  "key16": "2QJaPNnhrhsc9weCtEdztU6AMa1ZTuAToKY3WQQatuJ4oDEppxL8GsebY3ym7L6dfCptwd1ZQbkCbMiPpH6HpGR7",
  "key17": "3ARhhGdxoyJ1NTSyHrS5tvCobCk2XHe6EttQgUULA5qtM3agX3nrYh8RpAtQUG4cZXzFyS5Fx1BAVGHaVHUvuZ5b",
  "key18": "5sUyqunCu4JWupLgNXmcFVXvakN9GhkA6HKGVxq83thcbUZHmZfpjTjZ6uCKYthn6bSHKsf9bxRe8XLUkMNULwbH",
  "key19": "3zwkhAxkuwBznd7FgqFdhKtuJ2EHwtrHY2T8qvHbSAK5i1oqHAfQzrEGt8prnaQYj8gDD7hEUvP8vStd4RNSYtxb",
  "key20": "59ZYJkN9gLWdoi4xsRTtW8dsyWXpUskWHy7NeSqMQwsHgaVRhfie2XEToVhVzd9B8taxtw35rTy4CpPMEFSzEVRo",
  "key21": "5CDAWaBfwBDUAXdTyWk85aMPwkUVhoCJMH9TJ7k1Jws8kWDRMvprkWZaeJcNS3mg2aCHEdPqTyEVgEyu71ghPqb5",
  "key22": "3X4GXLUkUQ8Ps24q8DsKpEXKuiCwvMCrk5KoAzdaJ7aD3PvA1ZnSH5nAwTG9rkwuLWp6za7bjKQV95mF4JEii9J7",
  "key23": "3Pm9ufdFX4VQCaHhPcyjB8aeDkHr22KpmY2ArTHCawuVkBoBBiWEq3zKSxjAZKYvKYMi6dY4gLLV7kXuxqA7aNXu",
  "key24": "36BCgteoLDK4ZswDemDi3XzkGkgUV9HcQP1uc5DbHc1nwg1SF1Cfv4GxJuWKfwG1Uxi1CwLm7KP6mLZVU9TSELxq",
  "key25": "2Maps6h9PS1jPheJpxcJo9N2pQFVkkarKuGQYdhjRD4srSDov5TvA744myyvR91ZiDktSTDDqxGdUg6Jn3keKt34",
  "key26": "5NAu8kmzMeCwAwUGdgzEZrwZhdPks1YXNWV5SVPfBDZbJRQnWEPvJprD9snfWM3HCRVQDhEMGk47YZrhfmxn3zXK",
  "key27": "3vU9nbmDD53a61Pkgz76GSCv7BAYXtZn2ELtdbb5fcct6wr7BDmnhZGvHKK78cSuzd2yc7nhNuUrrecfywd2h56J",
  "key28": "2nESfxX4ATGVdzshXhW9JFT2zqCTwG57bAVXVeUe4VDYaDpDiQTTXyN9TaxrBgw3H9dobhyvCCJftLvxnxhxNk4G",
  "key29": "3RN6NeHTFKj9qxH8NiHsSt4Fr87WEGU4bodTohFdEkv6HQ3PeHamBFNAefFu2Try2yqjenUL22bceEcWok8E5iz1",
  "key30": "X4eEkt6Tg6Q2DRUzFomEQoGvFkeRWcm16h7pQuaqrKUFgZHSjcZKe8TbQedXa9b2yNqryRvnoqqzwYob5owdcqQ",
  "key31": "2ikQdydri8dnFhdQwzfryp7YFMn9AUF5khnnj9r6PWxxjWYueoZYvznToxCfCPJCuHsFveh8Lq6RmQKkf9T6gWZv",
  "key32": "5tjHZxbit9dL1FWF8viqqMqPBWuRCaNLvBkyCb79pFJuXGyq4CCBvkFjuvXpqP5yCQofcZuds7XwT2egHPR126zJ",
  "key33": "33KHwYH6wVe5QyfmhAccbZ9rUe5gDHE53Yuf7CqtBv7cSt5zYqfGantfWZ1G66aNKVj1MKiBXW8jMVWtCCCaYNFM"
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
