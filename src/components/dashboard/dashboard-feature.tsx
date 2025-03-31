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
    "5VL6734PophZ9s3fPEzbfgLYTL952bK2M6nmqKxxGNrn1gmWxxZpfuuJUwjYe1wYsjPVfVAhoTzATnARELek4mcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y93FdhE3PqCC5q9J7Xp7VxGYo3bSCmzpK9anjrZH47LE4bppoJxf3GJczKzQFtTz1qjCujyfgmfdzfgmZ9jwhvS",
  "key1": "24sWWVoZyuj3WaqjSDJvg1a5EKmUNALRpF3VZdbHFAisZkugrSm4o6ApsBcHfS5L3UeidqQrEc43qAD3szPZmvJG",
  "key2": "254b5hUXpAFNJ9S1GXf3YRbrzuatEZnosyZdTsvrdw4NSCsMzjHdRBnuLR9PVevMqJyvJPJt2BXXQLY7QokRVKS9",
  "key3": "5ZSeA2EfLWAZpNuBd6aKRchNjg7YFrefvbc99ZTCxv1QyZjemidBvfhqcax8DDg5v8vZheL35GCJyhdieAfoMySC",
  "key4": "ogvHLZgvJsTqgyducGLEP43MkZiZoTJjq8xxdYtCPwMwJEBJbXUgvKBrUGdxd3H3LdMteB8zZ2bVkJpjkeGwLiz",
  "key5": "2zk2dUfzmC5LWC9V3Kiy38Ua3kfyaXz8JAX7CKyffvApysA22A7aan3arVR7fSEwNPJRTbwpBCk5Gr9rT4W7SHnA",
  "key6": "HiNFq83WZ21p8E1V2Ku89yaKzXP1j6qGSWo5ZgUwfSoT9TnHDVrTHr19Vur8fvpjrbi656R7Yqd4xqahgwhAB3y",
  "key7": "38WjkHmYE86NJRt9SBnduSrkNqZ78MsE4zFrTtYfUCpduvsgryKN8Vrq2Ew6F6Lieb3ZXWMcCbBPUAi2K2Sa8Soy",
  "key8": "3JTyxknFL34yaGdgBooD6vgHFvhmJxGBuWtpYxTPtvqzTYp7gtFiUUC7aiUyc9qunA4x5XC8JPyW7vFyhxxzRYYH",
  "key9": "2ozAfVJ3DamE5h9t1QtL61HLbceK1ViWefnZQJ7G7WjNJN3BB81oftSUAHqwjUer9gEyowN42yFEZ3dvpFuS8dMB",
  "key10": "5MQzJ723CMdgHSz3dgY24dSQ7TMgsXsM43gjyFZuuKwqRM2k5hQPL1UhTbNr1VHrnjPEuXJqBZFWEacGWpnwR4a5",
  "key11": "4FMejWJLaCyGWisrzExG9Eec43LL6M1bvDGZvhSSZk6s1pSWB1TUuYTjg6TVFDK3K51wEyGV6HLhyyEJp9AiQtrP",
  "key12": "4ciCjhTPUL7AtaHuF8i5Sr92H8fAdS4MhVk5fHR5zH1DWhgHtF2vk4sCWhK1d9uFqyHWeMhw1aFvNceNDus33t3j",
  "key13": "47d57agxtrGW4gHNBWorbyS5E6Ry7rjNburfZi41RmarEhAvUTt6gDVDUgU5D9BAukHfJZaCEULN7kP3KE8TSx2G",
  "key14": "3NTr196n74o6dGDikBwUdAfkYHDW6XLYsD7XiNhNmyzxx4x8PvHePysETumVLaN77sYLGXvth2qMKy5jHcn6yd7d",
  "key15": "4wkxUtXRVSHvvPA1tomwMegomo1BwZJRBHPx7EygGrD7S3qd8Geb7WyKQEwFz9SRUFSfvnsUTQT1Me7WuqM6qorF",
  "key16": "49ex2cZ7KwBWttd9FEmNodrnDnFwH6RTboQsGREgqmxiUohR37pFxmiYznGJsZSxHT3ZuDCzooxYTSasdRjbwFaq",
  "key17": "41ABmbPrJNKk4Pm5krmQGjzGMAu3E41HtJe5nWa5CpRsre66MwjoMKNTZY1XuQej5BvVGys9o33LdhqKbS5tLTkw",
  "key18": "31a6Dgw3QGz7R4bxBPLNSMq3vzpBa8rZCePrtmoE5Rv8SfG3ng7XwMWaJD5cUbSLsZUmb7MXPxoskKbQtWpgbG7J",
  "key19": "3BVqw8xX4p2JPiTzgoAE7TsSmphaH9y1FEhkmaRJt1YWuqJ4bWvjJBw1JFhPWwKapLCNVdtKR8oWttRfBHaXKqcQ",
  "key20": "yRfdK1TGRCRouhTg3abah4zBfhLnG6NQe7Jhy1Sn1KiyDD2jpwZ2H5JU4FzuiQA5QpFF8LeArX6tNgZ47r3SU47",
  "key21": "2XjvZxd3CG2nReBgBx7xTndfhPqsi7hyWZDjs7SpLYRUaqHctVg5XLfZRV6cC9ZvcjDgFjYnKQVyiU4xkyVnFNHb",
  "key22": "c5aWN2fgimwNmUV7fhgGg3QKsCzhzapre1JgkEaCy6eium6ZDhevqqk1f6JJfSWMAdNnMwcsvM54HkhCrg1xj11",
  "key23": "2nZMVYgjTVDqH483sCxavdMfN7gPyAfLtQ4eTKzzqYyoYd81baVsWNDNBdfjyVFVwQCqc7dfHPhB1PaPWQoupqit",
  "key24": "2HYRY8tpspuxD7DNAEjay68fKLYt9cRYqQwWSEaKnVCEtGK3Vepc7WYZbHoDnvGKi2GEk5oXhj6n4J7q8jgBVuex",
  "key25": "3hUcCz1fBWucfgo85f9fUb69yrygEbT7jpGHwjMXu1TawcUgZwmp689kvGhKoKwseq51QPm625tX42q2gmNy9DLV",
  "key26": "3L43mrUXAC3BoJnQ2HDKeGoB7DedDwr9x5R36cEo4rbdGHTLuHVykW9sGT1Dv3pSrtPmLjeWxAww43aX8RhqcTme",
  "key27": "3nvLPFnoRty15n1rLNKHeY4uCQEKQB5GqNuP433twSTncty919ZBuwusZkfQN5NWgCaXLJ52c7doDm6vAmp1tjHZ",
  "key28": "Tw2vADFbWswgVCbh9ReVowgKfg2a9w7AjqHTWsSYXqHmaqwemL5UPwhGdNuAomZNDPJoBTapduvbRyZ5fQwAB9s",
  "key29": "3d9QQqhfx55r7N3hahPQRnGm75ToiXkBrwTHL2B4RbQgoxvHAy4ykJ12rxgx93xkTxJ97FvBcpCWwPVGR9ZcfR1L",
  "key30": "qM5SYgXP9RzFbhrMQSegkw811vEXaivgaqAsEKYkHrFsAAUXQuNGZXQk2MydbeTBmzt226BxgubbwFbqCXY5ErE",
  "key31": "BvZSiHjqFNTxbeXM5rEDzax4Le5ETs5cFa3r9oXv3fhQ8kuy1HoYH7PcCoJCAYEs6adtLqX84NRRBTPgDkxXxVG"
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
