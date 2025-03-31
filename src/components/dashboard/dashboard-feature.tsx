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
    "47a75KVqutVFSSwyfqUGMkziHiWJgeR5FvJe46Dfaxdjf4CFEMxrE4LKppUw2K7ifBYKCw821dh3cfQnX52HYURP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UgBqmQmWyZR86fNDEETmrW2kBUymn5G6AmcvWgXjcs9CJiuhLmdW14grXmaZit8qJWszk4Xfz3iwRCZdQkbBo7k",
  "key1": "4ZMN57KtEXXZ4BD98cMU4KKurbjgGDJR2SspEdhi5UwDAPbEGZ5ydEzJrwrxBvFM5HmL21HwtYUPGYS5b3XL1GJu",
  "key2": "ecXK69pycsPoHRZdReHm9td7X7xXdxHBAhLQetTULEt4Ua299DiLsq5UGQ461MgyyqobNre6xCuBuEQDxkLhYfj",
  "key3": "4jnpvn6RbA8LKkY6DUDizLajYRFENZKHjfufkdhA1ge14dD5vQ6Fuag7GQSnRbbT9CymXCxqpvjXAcTKEkwVMNpV",
  "key4": "3v5U1SWMmvMEhbPqotqoK2DcHavCZvPmS8PeNYxBPzZ5Q7SimjBibP4HqtF6i4hsd7PM3nwp2yaXLKsWC5EgtQMr",
  "key5": "5T4uVX56oVobixwvVrfUEWKme6yfnQHKQGQF4a3eNmZf7DHvh2KWwXo3wFrgpZeAjes1NRF7oUkHeAqXcG4KZrcU",
  "key6": "3QiZDXW5qpiLjAM2ZVRBJcJcu9Khp3TCvpzVnLs9Y5VJGkQ8o3U1NBYxmFE2yCtDxuDvs6cWCZnUhLJqWXvokCPA",
  "key7": "61V8wPtShovrpttng3zKq3QUdyp4mzeRaFdpQXdrMvd8k6nttpFXuwutvGjqUAhxq7YwJ2UgaQVcDtPbGs7JXLSf",
  "key8": "2f6Z59YwaTrueQJHghDsTuJonbMvHABToYW1zUCKqodevo8bpUT1n9dPZQUErpR52pzC2Ucoxp3DNJzH4Zf4y5Lr",
  "key9": "4XR5SbiZxKmQdKhJhPrgG1z3mH2AuUujks8huMm2ZZg3PGFjw7UKa2i7krRa6XvziM88jRBsWkmxvezkXekDCJqc",
  "key10": "2aJWT5wecCsd81APYNbGyjNXuRZiRxazm24VMYFWXaA9kytFireJSxuGdM6voeBPBmbGQbro9LqCn2e6oNF5YZfw",
  "key11": "tBMaADFvSoHuk1zjpXBZcRE2gB6TY2BGtjMU49TzMrTY9sWpK2hdPo7HRmU4ngk9ZxG7xLaYDxz7tKLTQSk2feC",
  "key12": "61LjYeymazpeYK5g4HRSM4Pgz8eJyp8v6R2wiSiiUWCrsxcumYNEcmmopYJb1dQV2AJtYvnd685DsVskTYfvHCDM",
  "key13": "4KNCg9MjuhvqbWnNmRWTXuD18Y8zyqEMm8pfam4cA2ozUpfF9smaYiwfUBuhoJxmAFfWFexRZh3HvAKDuvgF7jnC",
  "key14": "2aK7MDgFs86FyqBd8MvtZTntanscWMTgCNHU5AWTgLNUjFYJudRjbWZKUqAVi9paB939CBsb1Q9s4a2doE9XntMJ",
  "key15": "5YsnWe9KXL7tm2uFngzYBk96oH6y4cwAYcN9W9H6exTLQycLxjRXtgB1KsJD197fD67bt4kWreNpXaEQV6un9bu9",
  "key16": "5wA3XfsVJWWNcb3NCUa57UcsBLhdzAasufEhT4qfHKyzYhWz9vNURDxwx9ZyaUauUkCmQwegdfu39c5xLa1nb3mr",
  "key17": "42pSs7GKGgQGZhjC9P9hA4dKwVjXfC8ocSPHnoYTdF9byVVzGdSbGjHZyELhjECu3iPDzEvzfqMtquY99Nw9DnFL",
  "key18": "4VQvZNMsgumT8VQbgdCFhHHKwXC8v7Pz8EjB2iDcNN7rGbzup5qfxkKieSg6orQeWwxRKFGiuWRsZEbsPTopeDdS",
  "key19": "24Bc91EjZBL8VXYhKZbdXagp88NxtJH1XJf5XLm44o99irdvg4CDAsqERJmSYjsC5P7KNMqkkwqoW52pUzzNSyYi",
  "key20": "3AoTEGHphqNqJhbaoVsebgTgfBhWY4iJ3zneKGQyKyt1HWomFSY49xdLBmTsr4cAGBZg8kgpTxWXhGgk34N8H176",
  "key21": "5tG28s4w4hJcouXF7XewYCcDRA58w2drBDgyUWGYXjnRMUaMCXuwvvcrEw8gPSvudQfqGeUcLGauAc6WzuVrboHU",
  "key22": "2sy4vbzzWTiXRp3nzg54KNkizMQwVHynDYPxnSoqwk2UHXiQWesDNN5MGGGfQYsqh33zfbfr5NCU1U8KgPWE8Wd",
  "key23": "6nx6cc7oiQVeizeenUsHDvTQDcVbsM9uHwfrDWodtb2LGdFRXSNkmEd6DTvebKawC1ZuexX7W1MXKygxXCPYg36",
  "key24": "41cxRqzu5p8EB8RSaDk7g7xvCnamwe4ubYxPdQZPDbcQESKTvPi2b4f31WorUmP7JhdbKoEzzzTfB38rNM8MwKQJ",
  "key25": "5dwqpqrVYKJYiJBpfqJpDG3pejdva4zZFoj4mV7pQgAkx81R4NRqYLvFmY6ua3CwZX1Z6Bqj762uCawVUhxu4nKB",
  "key26": "332Bd4BF7uJBqf3rzL6KuMinQcVXaEW6knX6MdkdHh9YW3knTvycT6tEKcj1z11eVMVu44J2XnDzD5WtMAdFgMbz",
  "key27": "2Bn8pPaWi9UtNznWEZNDR5cp16Xcyo94a6QWuXgU7jijuuRS8P3sWwAeDvHtEs2RpKpCUJQ1NrH55mA6VEtXccyK",
  "key28": "kGyf9ktitWkZ27Z4hRQwsnRNYfHyQ2nxtvC52r5ekMyubg9tBT2hjVVZTt1ngV6CEcBnCWmCfxP3N9Ek1mc9AC2",
  "key29": "556rf1bs7R41FwU61Vpoem6EQJrKkkckdkhNXMSRBbEUtyw1hHjD54VwhVAkZnxPDAGjTXAdXMJZk1JXoFxYh82p",
  "key30": "4P6gPRJBVPcQ7gXnQP2GEq4uPdtFMWH5yjMsXXpYxLSoJnVvL5c7DT2UaLGCn2QDzDmPCGp3YdCUraj3vU78Xggw",
  "key31": "5P1D8sprno4yhUWPBeQm6sz3QgtyL5jgvHx6rWWG5KzV1YN9zTVCEsji6GE8fAHZaVYHs1mXaHRzdT2Fqgsj6ng5",
  "key32": "TFWVUhF1uoQmM6zS61tdQd1TFnY79mqvofM9LLtaySzGLUXGtDN2gMNbLq43E1R9eAhJuk9BLZPXkoCRJX5eq4K",
  "key33": "3NaVzxAcsgddSnGW6dZQmpbkoLb2PuTmPQuZjiYagJvBEMDWwMR7jdecM4SQ82WYMFRQGZJNxNQQ8VYEmL2y2qri",
  "key34": "5JfaSak5QG2ceTN3VjuNh8FZFq1YJ4Hxth4igBbMkfaiR4Ud81DjFitjsBHu3UZwKnszPxFeKvnVZrUVeT9g2Ehw",
  "key35": "41YGz8PLgJjSLV7w6RAwUj9yEzETpo5WAQVhKR3Zhku6bY1Rk9S9FCKXTsre1yHejzHUAsYyAodxb9sj1xp7JdCm",
  "key36": "4ZPS1UpWagFkzSksmkcGuD75JVochZJxPaY1uD6MBbGeLvdG3ZrtpHmSdW52TdfN5L9PnF6WM9cbyDdVJjsXiFgK",
  "key37": "6C82J9YZwzx3KxuqEVTD9Q2j7vLMEo5WXscqTU9kkiCVRWQvaXML1WhQnyTYCzJ1crcEgG31xZgfe2xdpotWc8h"
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
