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
    "45vJj5CiQd3QDrdNntUec2mjfC2LL4KfPEfWuKrZCpybHQqRdJ8AgmJK58qFwceDud7SgSzDdpSZZK2KyRiu6EkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hL7nfiuy3P8UHzh84iuZKnLnnpjmVFTc9EmqPKF51nkzski9Nh4S12dH8hPEATRNqHxCkF8EFpLrsK7azkT4oCi",
  "key1": "ZWQ4AhNBVArJmCHkC9T2SuqVaSXTPaN2odPQ6GQezHmCnWZUajLSrHSpN7DUCv6XKUuGVSbxd3tbUV3YxUGM3dX",
  "key2": "4e25n2vgYt68xpPsCE3Jwbxsoit1jSpgxnG35wc6RdtkNaGzuGzbDbJtkYaTyfGTTpFfHdZbt31Z48WWeBQykAEJ",
  "key3": "5s4xssTGbQNAePMG1nmxHX54oP1vL2iSDz8aWjhME1AerYj1Wv2GF68CrKdhdftqwiwKZatTyehsZBkN5evyroVh",
  "key4": "SaTDZEeyV5E2LaHnkaUrUEZ8ER8CfThiEtqYfyZx91jWrCtVByEdHJAZfG26Su3r6X5ZsqVrUJe9z2FgPqpDkkQ",
  "key5": "tg5QvTqnfsVLnPS12JL65L2ZSxiPb7w3Z8r4G6T7qffqWfFn9nto5TQMirSMyqdNDZmmZqaak6XJAeDvM3P5kkx",
  "key6": "4m155y33z1E3BizWNL1AWQdsuEoFVHoQBaw6Vc2MAh44J4RkzdzjgyDnYRBgdqFQn5HqbWbgMHfKbR6ZbqNETvCF",
  "key7": "4gXufY8Er2UPbnHbwRw1xZMNseLY2oneM4BpkNHgmt7op6vhXG8dLeSU9godgFbKngzoE93GnuP29mUu7gjAndxM",
  "key8": "wyccYPBSHx2XHQY3eDyymjd568tFkR1928Csf4mHJGcMNfmGLCrcg4zzHm3z6FZ2JXCBt84yiAVisJw8gUK4bp7",
  "key9": "5anVrxDxDPisR6SuKEhQTv2VZoZ7sQ59a737Z7bBVzLprVcfDQ8PbaYdA9jyCTFKo1SMEjFhmCJ2hRx9tiC56yH3",
  "key10": "4gsRokZEFfLNWcRGE8uDgQmAXap91erj4ZJD3BezD9qnXp6M9Be2Vf4j5kgaQjeQopYZ9pLSb9dUzvmwEy4yZMZD",
  "key11": "49fGQJPF79QjTqLVoC8NwH9gfnLtRGNHLra49HzT9EGYx1isTKhNJUuXooM3wXhGpftyGgYSmzr6qBo2hgaBJ6ka",
  "key12": "4uFHKtZSLpSZnfM8rxXLRKMT1vP58DJyfXnrzMhRiT7F1bU6zMHxZxAhHtuAMbanm7MdDYhzRyGK6wS3LLNf7nRz",
  "key13": "3TjTmkQNZ4T3AnBWmZG6mmVJHiE3u4AD658WyrVgtdyuJoFnWP6oPX2zbHqBKkJ9bbucGT8uNi6oYnfGkwKdVUCd",
  "key14": "4xH4JQgJzhzrmYDV1moxkxRZDw3yKHeCYZoWUh62pRrcN1ikn43EBByPzosRmXBjFnSMMjX1oyk388mCiDsKk1ih",
  "key15": "2coCDjKTajVGHoAsTLR1jx4nbGkpnbhyZ11YV1kd2Bo31PxfaxDkLqHgng2Pv6kzM7FY9g384uXJBdz9xzG1CgA7",
  "key16": "rZdWS4WuoxcdH6ZHjHHK4Xsa63XqBhduqbeTfLcssVKwFHzZUiPwBjdS5R58vWz1vnh7Bfiu3pcxCkBGrnVwEky",
  "key17": "36AP9Anvy2PckRg1SS32aitMYGamqmr9pe8ai4hbCuDJiK8357GADCoTV2yM8fUkMNKEnVAT72KqRGGF959q9MKU",
  "key18": "mto2a4G45h2LAR5yEfDJU4jVfBREW8MtN7dCbFSjTLr5MiDEZC11Z8JdBJcrgDof8P8uqGxFU6eqY6uEkGsMNEf",
  "key19": "5W9UMW2sbs6MsYW3Q4z5DDJrbxXt8yc5H9iLc7ei3bwDrvXgbmTsoPCwyC4KndAG3MWroHZrhQz2WUuTmwUGc7MR",
  "key20": "3R7tQvPoKwgoKr1VRJLZ4UK31hWizYJrZWrXZGJqDSEQqNoHqaB1SxLoKXhqg4RVeME3fxtrStUHFEKGsKqHbbpL",
  "key21": "5sfEXkiKZjyjxZBA7GWEJvFjinHDEN6mSWNg7ou8YaohrfD2DggwDKQdiDEuCHh6PHMPDQN5pQscb7FfCzknAYiU",
  "key22": "5D7FqGar8JJVJ6Qgs5fezSNuaBXN2GKxQt7chdAFunFsB4tj544hUur5yUifyfSetvGrjxnm7yESXqcfx8MLtXAb",
  "key23": "RHPZsF1xaLUyNNGv29zXkzYBLrjF1QR5zvXJtB77NJzE7TeHfgda3pJD5LHrwiu2RfyHwdpfY6NYctR5nL68w1r",
  "key24": "5wZdceAptCxMtHq6A5xPrq75pcvRMDKjeQKBSzNYRaGzWopkKwxTEJoEwXYogqhD4Y4awXy7AKQ1CpPXgUV1aSew",
  "key25": "3eApE9K3AMSeGWpvK1dJQi6u3cEmsxjfcNvhjkEZK5g4fw8AQuGy4rBZUtf2JBGg9fcSS98BBUCyH43WHqqaXdLV",
  "key26": "5fcZaCsKmHXFeGVTQ5DRM2QD37Wd9dsRXDyAT7K2M78HLZ7JgJE1MeTHcjZXRXPK328piuR9EzK8jbhx14R95DdP",
  "key27": "56z5XeLyc8QRMe1SowAuJTW26SBsMD9A9X9uzwzQi4merjci8b8cPgdgohwZCU41riSHSe5zuZbGGJm9WJpysqFE",
  "key28": "dAaU9JGgAZAZqVpuWGqwRFeq88FqR6L5an5HcDnHEuWWXTcNpBYZYLbSTmuQteYDSCrWjKKeGJhxoZDjrYKs6F4",
  "key29": "4uqkB1EdemEKiJbGKEM4XsNCuNKT28UHGn3BYN6ytCWfL5Ewx6poc6kRTgMRpvoEjKZfsEFk9g8vbefq1rpikQDv",
  "key30": "654kmsBGQB3zCdvUCsLZ4ATuyQ1QVX58i14dD4ZuT2SakvegUEiLwFa7dJcPB9BoDgtunD4yAn7NtkZfiJxoBpc1",
  "key31": "3yJo39PvxaHt8KNoa5ftZ1RLgYu9ZCtZ68aSCrzkNyZZCQfZEActGWvRDd6uGeBDAHLkBbVs9tViYsvPF1RhTPbe",
  "key32": "41xuJEymfcmRqaAdenZzJmKZXbD2EirafmopXPevMY7bFUmufgGgZR9i8uaHZA9WqyXNardBm3bc7Vw8caSBCyTd",
  "key33": "5bCGL1Aeyd7eWejBKBQFsVnsWEzp7a94GHSCGM6jdARu4pzjNEZJSr44PkgfvGq1WpWzP3brvZzuRBRp1eq8WdbF",
  "key34": "54hX9zxerkAT9qAnXobK6poWHM6jyxUCQooHvZ2D9PzY5VMiRD8Hjy8tBmgbHXYURxHxa2Q2P2HGjTeFjm7bbJTY",
  "key35": "45uPizpiGGoHQqLh1qUUFmM6C2j5nZuTXYEsq1zbdrR114cbWpRqHhoB4RoR8gmP1jSkqprG4ypMKpCSazo8TjWt",
  "key36": "5pJcRFHsdgnhiYT6ugWaQvZ8uYLUiF36JZfqgojRBs1L5eMnGCGs5j8XsmNw2obPG48VdViHUFHReuVotkADkaQP",
  "key37": "5EJtxBGt1Vnwrk9n1x9PsMRE6QT9nVsp9KNV1ttt7AHeFjvyW15H2Vpq2xBVVMgnLoQVWTzffwRoemhNzQ7NjAZM",
  "key38": "2yob3JxJvNoGzsnWjVj2CUjeYZzef1sEgY7t6m8ArTNv5Ch5UP7Ca1rVSyLNeavynGNgnkh9iNBaMrsJs33CnNVa",
  "key39": "4yi11wdgmL43dphf2kzveFiXnkWRsToKexoLPZFMo1Vuey7CvWZw72wo6aM7cN4JLeyJYaS1DFLuCCdh2XT3zGza",
  "key40": "3w7QEMFDUTDHmTLseKWSVbB7xPvf7xrAhVx2YgVuoha5s9MatDniQWPawJnHQcKdAkGMRyNv9rhBWi8CNZyCTkS8",
  "key41": "4TLCkm3ELzoKZdXQZ3dzk4Kcormfcpw7poiw2The2WqVYRV3EZwau4bq7vzL1W6VUBDUWtYXKftraZwPRdDz1c74"
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
