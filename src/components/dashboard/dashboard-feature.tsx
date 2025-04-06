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
    "38wvTy3kHzR16KffS8wXEbpFp1sbDKd2pFGDgxNreAqUWoNSBiSJ1TmsF54hnvwAvcqsYbqGVbxkLujGjuDWXrgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iZjoVBEmCBKsCw2G2CZ1hFDahTLzqtBL6AgXTqq3rL4AGvp6XPkzurK3ihHg6D9jPopXGENAcDPNPYoH55z5dkH",
  "key1": "5qb6pfAyKANDT5w1Vc7gqbQcL8npoSDy7nKFjq8KPXiLeXCox1GLVzP1fswdRBfE6hxTJs8fkGYVjSgFRuXC9CU9",
  "key2": "26fxmnsTB5xpLLRnM2qXPdAvMrRN818GjMkCcnuCqsmSnsXnWTWuL2Jk3R7e6NXPuBnW46ZMNL3ifD7Ddfum6BYq",
  "key3": "62Tt4tJQ4GnYSAiNok9CfBXcBq6DgbkbsUJ6QzPZj7sbAweshxzypRURstoked2tSxhi1592x4M3SUQEX71PG5KN",
  "key4": "3kGWA19zEjqcU9TnyVffq8tufkKezoNvLd4jQ2XuGRTrrE7MExS8xZM6pZ2YvMrNyS9nycT8Fib9VVoMS9dErhqT",
  "key5": "3vdjvPPpbjDBvZbG9CywsJVKg7ffCEU8GEQQYCvoGR4odoRXuaHa24h6iNMKJZXPqVSwv7rPD9NnMpWTnZstz6gZ",
  "key6": "59HPCQjvAuHTqZjbm37UgHFPDwT9h1PKctYtB1Kb2WciJVTNgk1GQGhMRMJXrmsxpg5mPAWUXknzUw7RnDRU9Qx6",
  "key7": "3pJ31p1rpHmmJxMmJ8qf9R9BTtoqT9yUbcikJQikAoq8T5HBDYEovMVwdGoCoCHCoGEDs4t2mHPDUhdaRrSsffTh",
  "key8": "4kaubHjxCZNdyyh2B8HvPrv8ioZNUphKiGqZf51NCKNoTw4qsqsPtT9onELeXViC7FTwu64HkCaSrfHhU1orr3Ua",
  "key9": "2pDsfJNcAg7WrmBsuUkC7SE33V7WLufmCNZhn6puQ8zt933JU42S3yJQwLXEfEDyB5VBF8CXD5VwZ9sPdVeX3nDT",
  "key10": "34ciCZVKcKY7gQaeosWLhFYpvJR3Jj7RdiXsKQxXVRTw35puFSKctKrHvm8oU1YLscUuqbNLBpXTYoQfC5QFDqT1",
  "key11": "fcHGxQUTXHqD8uM25ou75AfSNwkXRvGq5dPui1rpotqBMpgW4TgwMPa6YqhDcbvE1B3Xvt1XVn6JNrfLwgFyzkZ",
  "key12": "2G3nTpVpntLoSqHUmGrcvs3BvsU3jRhhK9Cp6iMWMEjzL5qRwVrmVuXQnGk3addosuQw7m4BEZT345ynACeBYRoQ",
  "key13": "2FqvakjsfGQxQdvQA3ovVqrXsRtEXoomv7j5czrVGMZmZntFcp35U3uwmdZGjHTQ4mS5FJNGajGhyW6EPeyMGyaS",
  "key14": "4W1rqAKLhrBRuEVQNxrsNL4hNdPrKPZdxhKCeMiH8HENR6hN99C1otDrHfqMHHpSEnmXVNwQvZCnRfjzNJpqT1yV",
  "key15": "4YjHSrJQJpd2NW5RmLt3APy6fLEvxktkxDDBRWssZqXEosdgh5JkDoQZqbVW6PDk47YxggAHsH8PiYeVEjNiWsFD",
  "key16": "2ByhWgT8RLEcmfFyWVBS74dgGcExanuu6gdou4XnTAiQT5vzzK6Am8TBwHFgC26QUBFf2eNjQG1hD8Axsh1hkvMu",
  "key17": "3dyetZQEFx1PqPfoxwG7YiXisviJVUHBXui2zQ94VcNeoyVAPoSuZai3Pqs9ycbnK9FkxDbkMyngQsx3NCZ6LxaB",
  "key18": "3QrEsQPp2jW3X9abgacanLsd3frWreWEK6p8xtjBeGj8ZbbVVGdRdoDweTdYtJgCsMLZTHSaehfdfC6c5vdFc8mH",
  "key19": "4uQdqc2sj1CCquG3hCDjn4GfGxxBixnFR5fB1Bn9NKrq2QZUECDKwrFo8oj5XTJDN4nF87SeMgFzyRAkEuhKzW6a",
  "key20": "5U6nA9wbgXdcQ7SviaZxRyjj9KJJGeHfwur2qRct8NU2uBWgWQReKTum1dMNumBVB7yy6fZntcReaMYb7p1TQME",
  "key21": "3PzWnP7jr8kkZ8c9jjzRuXQWMz1LhJz2Kua8RWkfUkzD4axiEZ7iqHR4ptjwcsYUrTfKNqRQ5gz4G4virAy87tSv",
  "key22": "2ubJBUHYMSmoJu64UcqZrGabH2YkRievpZpiSJzT4BfgVM1yNecbrhgs21ESXtmTds8jkghJNTDdNUfUet5eTaqJ",
  "key23": "3mC9RKKuBUbu1f7xjApjBkNmVWifUU8rx7x2FoXbftwhqBZB1FgYKBJBDA5D1YKhoLydDnxB3MexvcwiXNiUhjFE",
  "key24": "3DYWFohCZoKd1ZsLC6qHa8iz5vTJhwhn5znJWzjGenH7Sm5MVP13PymXqUEdFuWwuJiUeYrMEnCRj1hmeEzeqfYY"
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
