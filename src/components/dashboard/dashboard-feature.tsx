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
    "nhgB8p9YHM3wAGBXyqzRQrd3njjYWFLZRHajxSGyRHvuw7tUdt7FTnUTRukKpxv6kvXnD6P5cyeyRKAJmgKBBy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U8Ya4tKX2bF5KwwvfVUuisFjBEpQ59PHbuhXWs6VD8mTdecaQZMFoD9nqoUoeqwFiWQswP6ZD8XuqgKHCH8G3CJ",
  "key1": "3gMqzhbv8yGmJusVAhJMAg9pRtMVWnB1LGbL2dB5iu1tAPaZP23oHwXniBGYkvFLa2tiyn8vUd5d7RNmhvSx3AKg",
  "key2": "3NxmgW3XFrYur7eKGLVMLq8dByCnBMYUr1RAnETkgcEojygVoRzc7tgXDruHAXJdYbq85WHvXwdAe48JKm3Ktum8",
  "key3": "668exMeoYXYo88Q3rvaXwXviTUFdakTZpPg85JaiPZyyPcX2cABF8LVzweVo6M3yFwQGz9uhmQ4rgkNoYya5duAm",
  "key4": "5ws6hY6kcwvCEUo24iWJ51rorAky1uPxRnMv27NKSyn5CUhEUgtoWNi8KGFE2HS2BNLLKbcGekenzE4brdLzS9xf",
  "key5": "4dyNTsc87MydLfbz6G3QdMTUwWHcVHtsfaMBcG92dufWWfYapoaPrnq3RRVzHJXVcEWmrHiCSHBZdo8hNnAZdXP1",
  "key6": "5EQ79GHDkAzfyPc8CgwefWYVDX67SYoCeX7nKN5q7t2aLgKWh9WxGV8GpTmi9dMjSmybRoYVuh1XCeNaswRF1oNP",
  "key7": "4bUDqDN6AX7ffEsY8PKZEVpbEH9jmBoFJ6gwZH9LZY5NyCQfzpMZVdeHoS3WVi8aNJmBQQwrbKcPRu2DdmrBxkeL",
  "key8": "tndA5L8vA6pMeZhsRkgKibUiR9SvM5tqFNWQdfqEfVvBzTM1uLjzCtK6TdgB8iF8ucZjsZkgBzk9rtSQxRQJq9k",
  "key9": "3K3H8xVPfHiY1SMAery99g8W9AM8EstHUejddmhC8Pgh3Tefyi37xJsDHqbPYRDZM5pD98gVw6g9uzgBS8fA4Yws",
  "key10": "3zr4ENDjrxLzFssjnyoK4iBKJJT3dRkyEdRdts4h31nfwp99EjeNQW9eumWRgHaW8oQ57fLzEzrsh7LqZUvLcmUs",
  "key11": "4c3Lky3kus2Tw8NdP7H3EVdS4axXhz9bfzGvhr6XSTW6UNHanUPDBkd6puQRNsD49PenNKNjq8swfkRvqtyTyoHj",
  "key12": "5XyBtmLryTG5gd7gBn1BxDiEycLPz7fZ1vTRRaG8FSjanJw6dSHGhRMS5Sqwxu3Ltzs6dgcmKsY65nJCvhM9ncfo",
  "key13": "27FWrBThx7mfj1tsXsduEfNKu5P3N2HgDrdLgR3xZgjxnnP1PWsq5sz7bKCymSCF5bSuoS3HBP55RnkGGhhu93XG",
  "key14": "2XegBN99m5x9R3pzKp49oybMPqxi1BB47wDKWLierPWFWTRCAAtoNMfQibJw8pvfp99CBfuQHAenv9BhwZbph9aQ",
  "key15": "2SdLf7ne6THjGC8UZBKCScKmTcEusS59MgK5f82HERmndGRjAqK5GTE1MNHh3d9ndX7Ub2mofNEYSgzug9JVnb5g",
  "key16": "2gEYtYPeTVPgu7nvY7qhfMaKNavmrj1RGjGGwUnXmjG5FCFs2uWjrZ77MoKj1NaDnpGcqq86Rx3wj8C6jWLBrTZP",
  "key17": "4E8FMV9FGvEYNu4USqpetGTRPLguZnU4DcvSaHT3FXtSXs5zHtcRv7ttPkhRMvnd5xWRnPnsBvnVJM6Hy9SUJjQo",
  "key18": "f7tCmpgg1A5mukJkv4X1NEKHjiZftim47VYkg4fi4CW2kMmjm5FeSsYQUhmySxruhT8hSTSbMYN3KGSEZNaxokx",
  "key19": "2qFWMwAYYR3LaGaJADsabUbdbqiFAZU5NyQN5abEUCbfKdqRhyK74paSkF8Lgu6K2NU2MmxThfzKerVHBMshx3Hy",
  "key20": "pxcbZMdB8B4nKKq2M4v5wkZiABViYgGJ1fFEySz4n4Vop96FUgV5hPSrKRzi95dH7JVABRwHJDrkY1mNhVWiysZ",
  "key21": "3EebmJ6hXoAcQYjU9rdpzwwN5HLcQMKfJnP3zjuVmYshmG1inwkNdia7xPFCCxJnnsT22od3tVMogMe3CfFXkoA9",
  "key22": "5Pz1mSbbZYChYvXHvJQxr8Fp7T1SykrQofatattntby5JrfL5eBPF7Xegf6WpsU2yQ5q5PDAqBMVx34JmpwTYVnJ",
  "key23": "RVc6Z4py6EgCc6KK4p7mbAUsxGJ8XJbQXqbLz2gxyAWbWVZfYeu3q16ZugKKUiy57iX7Dj69rnNsNeSYcaJVyHV",
  "key24": "3jHbr7C8Z8VnfWSDf1zxD74QgAA7Bx1Yvt6z7xhhSoA9voWWfBJHWw5prCeaCYu4WvXPdy2DjMqTwsUZ9ckH4HBn",
  "key25": "27oisUE9PcFqnXwkgXe3VqowQv9LKxxZgFmfigBvhH6HTdYfB93pCMiYeN8KycJQFiVxT6P5iXeYc4f1f4JsM8cR",
  "key26": "3h3aT2W1S5SRUsUAAMCgU5JnhieHyAE3Cr4CswfWX2TSVCKsDP4yXEPWn9ug3HjoicVqyw49B4fJjqpCVqHgHheE",
  "key27": "3od7PeqqXZGz2DUsHqMY5GALRt9SMr838nVQSK5WBVagXWyoini4fuwwxvCFk8h8BmB5w3auhXY1FrNXSNpJvYmm",
  "key28": "4jGxjNp5bjx8htsJut7qUmSmw6sEHveHyAN6k2BT2zuKhFC2ipHStyvvce6RjcL96ViN8meNLYYBmwLUPZ5fNsuQ",
  "key29": "4tTcCt3HmkjZdvCQ4LRsTmgaoWsUSp7WQW2nSZ6ntG2pWaLjM6shBiz3hbjTgFCcXAUK9cjFmsZ85QYBCWCyzdvi"
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
