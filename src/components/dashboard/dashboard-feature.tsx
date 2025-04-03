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
    "21Pun4fvDLydLT39ajNF2CajfE8mVzZe3jvHHG23zbqAhRewgcXTL4yNTDEPtTqxY3C7rPJ597HZWCmVsDdxoSm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E1NjjTJ6Uug1AJSqi2P3Nyj3xJ48vWKJuVDDKfvRQnPFNyXekfWKXDyuccMx5AcP4Ynq4f2wbv58E7CcSJUWj8k",
  "key1": "3DPgFoMNRuwABEejbJ6aFL4JiEeQE9BdUCZCv1aZmUyEvY3xxS3yG8kbctmw6rBk3puB2dduYhMap48BA26K9bgZ",
  "key2": "2zxrnYZbnL5BansvUPKfZ6jjigzzJcTfwKfzxXLrJP52GjvyGkJxuBe6KVL6wNXQdauE7PMvE26hpFGne5h3MXEL",
  "key3": "38mgubW5VxcUMA19TvjTooxfFqAAXeejmiLfGjNh7ub6uQF2gbKNWGLQgz1UMb4Vi9ErJmKTEarAidPdYsCqPc18",
  "key4": "2GUaUqeFAHjQhQekrw1kGdXtW77j6WskL8Af3GR6EoaVeuV6Tvm6mddxs1PCJhv9KvPLg1VD4EmYCxjwnwMie4u2",
  "key5": "3su5AsL8PZRy6GJzV6Z3YPpNcfCZpyTBBfMWbZFC93sBmQxbQnChzXm6U67dPhDEMeSWRDVzttqZ3KoSJ6RDAoXn",
  "key6": "3zr9Q4cEPHmccyvcaJ4rtwpb1MGbeDW8vEiAFJLrNKtWPKYBzSNG5TmbkAmwvyUEBEvXymijFLQMy7MdvxysPemh",
  "key7": "2m4LqB5nzveFiCizrWjxUw84DXAfLQR4btHceioDdm1QUnHnTJEuVyZhKX5tQ89NoAJ2qoa8ZvFMnhZncG2uUrei",
  "key8": "3Q7C9is2c2LXvt571mneX75rySPL6hsnnhX1diHnrp4Y2miEXkJ9PL9j723A2iAYtj4eApKH3mQz8CyAUckoh3f5",
  "key9": "xfvsUwnzWZGnz6eFrS4GaCRTheudLLDzUEoV9fre3xkU1tn5w7PezPEWxVN5f3eusKi7XPVMcVYst7BJSPwWUvR",
  "key10": "4K6ewz7Ex7r35SFTNT54aiyRfXQAjsmvEc9djZ5bRNrRQ6sncmPQtNwum4dtjJVByr5ZorAFypH3gKNvGGqknjWe",
  "key11": "2B7k7DCasjv7WBa6BEcJNhpWnERQTRa3EPsgZ2mmjJ1nD4iUWPEDMU6ui3Qk2pZiQNUFXNLpZBZ6THZVjLjPogHp",
  "key12": "3aWb8z2feMcG6V31nt2Mo6wNLnfVXRHUGM3NLyGZQixeENmUiRzjWDmHVDp9WNkM7k9C2xwCbQ1JJXKdQeVyYxRW",
  "key13": "2X4eRwzus8Wj17DbDA6LAFnfUh2agqPrmZsHreHVQsMbXjVUSBJAioZhGjMhVwqpYUy3JwsmrRypzfFzvZSAE6Pn",
  "key14": "2ib5ReXA5cKqUD6yzAVtJpXRRWnPmbGfUieGbkRrtCSimKf56TZSDjEzogjSD9ZBuVeRVJLWVtVSe4Z8LuxTK7hn",
  "key15": "2vn9eqULDqJL6Bp3uHMwamg3641jjtFH283TmAdokP6GdZw4Ajd69YSYRB7Uw441xQKoejumFpVnuP2YUKZpdwDH",
  "key16": "3dW2T42fCRDMc2VyhHxSyUHYKormRWZeif29dvMBMy4XyEc8LpUdEQVy8ZUYCUME64Yud5eFVRJgJqLs9eGNwt21",
  "key17": "2Px5J6eNd7mZGxpxgsKAaQz5yiDuijLQWMcroSEsNp3rv732t1J2u2tr7vqVNGeB9AoALG56KJTQ73fxf9rCYeXp",
  "key18": "2i5rSduzcCui9KmGYWEF4qsD6fdXTGURBfC7xB5efVfoV7jo7wTN1M7qWmKr5secDMBfgbacA4TWuUBmHm7yay1K",
  "key19": "MTG9xQE9KfR88xb3Zod7RbNbGq4LU9eajF4Fj9G92CEykGZ6FuF59oR9LQkmDZbuCxaQKt1S49HXwVu29We5GFt",
  "key20": "2F3M5m1AHHF8TCU9nPb1yck9EDgZyFREAsJs8TD9FrsVMSPqjMqBQwEuy2HAHuJ9YMh4AQ35VqWecbRZUPYoHwX7",
  "key21": "2P6ZVZUwtBmJKTpRvZdu3w1WA76ntX1kiDrLyg24kxrggF59PY9CB2wzyfHF3wMnyZb4JKjocx5SU1FQvUsrpfTJ",
  "key22": "3DFziD6A97qeTmfJ9GQPayyknW3qFFvDnBF7trZUwQH4eFxqv4jZsJtqMNXPpZikMiJebLeYVJNJ9T3pcpnfpkvu",
  "key23": "3Ex1MNoRNg7y8py5rgXVFKHPTYyKzbXKLX7Nn17rFW6j29xG3sjocqJsgsafP7ZYu2HwgbcRzny4zM1NMfGFCgZS",
  "key24": "4KzZmH3oHY1ovfEHmG5L41iHZBy8Y8wKjEWkSEY5LeWt7Zu9jYUhto24uFsyAMoLve4VBnfjqZ16mHpJ6xHLrnVq",
  "key25": "2YdteWeJUFuN45DnLUnnaE9Wu7Ww9DCvVLomNyDgTXq6yDw44LSSKPqd5F6Af8moNmnFVJ8H8JS9WMZra1btQbVQ",
  "key26": "fLcaNwPG4AygP4wYrqeTU6hevxcbBQqApJdXHyGhvzAXMdzvxFqDwugySNKf64yXKNgNZRaBeR38NFqRd7tnNcN"
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
