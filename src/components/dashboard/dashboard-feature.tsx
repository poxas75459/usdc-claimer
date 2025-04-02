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
    "2DTPWCNMukt83bNtquQ18GoFcfbCrh5c3RRa2XM8YRFUeezt8T7da5ELq9e2vNqdgbFXeUhajZoXrPY7R1tz89Vp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8KJ16KSALpzQYBnNhYohmDe8H97UaBZwusgkffCBuMqhjcLMk3oJ2kJ9wasPyrhHJo3Gb77QbutXSGMMpnc3x2",
  "key1": "2YJNEqHXYfXMtANyC2X3UbHnrH71JnoAzZ9egs8RREc5XmEqP7mZRwEa8eLokk4avvKvUyk5pfjYepx1EogZv1q1",
  "key2": "4mL5rnnyknpxZZu7Vd1T1h4mauDxW8A3RBVvwzg2eBs4hqUECduJ9RWsP1DzjPSwcRGaruG6LbpNeypGX3aSJMLb",
  "key3": "2Ucb6LVnsYsjQNGP2gVpPJnQpMK9xvaueybqhjyRUH3krizZ9jkxa6BX1VNFds9jSqJUQpA5XPNjmrXbzUm8GV5n",
  "key4": "4nTzyyEDVvMnskagfU1iMiiYeNERRMUx5cTpAGkt3Ja8sYTmW3SRHk2BqXE5gkWeYmUZxtsH1tPsBNbgfgtSGKYG",
  "key5": "29vgJphwazgfyfq7wPgUbW36nrhSySpTUM11uMMGixBUiq7BkjktQJsesnjvv6ug9EjsUFpJcXqf7S6PZar8UbkS",
  "key6": "5kjwajQLcBM5skTMgfCarGeiMD6imUAPSq62c499eAxWCoK11M26UMsZ35zZWPT9sXojXKVbbAAZcTkRX48dBT6g",
  "key7": "5cQFSpAiD8UxuYhLbsAuTXWWnaBdAsfZsSecrDjwZUrpRLhx6HaKFfyFZpzeMk8EQ5iZ4qktEy5XaTxTSXcvDGqL",
  "key8": "hPsCSakRjBx2m8JtX16A2eVR9h9RrRrPgQsLq7RcctBVvBAhGoWJkDeZ6ihtJBajEq1JA65spHSKiVV2dDpaXHW",
  "key9": "2ykmZdmXBWskHKFF6jSS8Dtb7M1gYEuuEtBjVi8ZQjzTEoYKfSQKBGGemN5jcAyyrYtdyrVG3vSkA74Z97qFXrez",
  "key10": "3HVwGfKYDK2BFUH9hCRvgLFQQQqtamyg1rziU7S3usckVVH3y4agKihbpMx1vNMGrK9uodcxuv7PAMGsMHSd3Vbh",
  "key11": "3uQfyYekL9MjKHpREykbF5t3UQSqDQniSzFH8iBiaumTHWHKTHjKwoU33pkF2UidRFJD9NBywMmpp7YyXW2fqH4x",
  "key12": "2F5VSNYcM6TGtSacPBVG7rQpNAJCZyE4774i5uwv5ZnaQDdxUFvHa8eiiTcZEP9bZGZtPxtariWMNMdMkHmH27go",
  "key13": "5rAwZSMQzUvCSLgLxdb1XMrH2wd3kdk6K5nX8g3gpfngC1nGPZA7PWsEdBJhgfvVeFouxiWw5hxakrmMRJ94NL5e",
  "key14": "47aCLticSVrADfFzgH8HqefpzQZac7yufT6Bqr6kjFJRpmz483fQ6AXeAA2UJwuTSrxhyxvTbvPVuGLVibaVunc4",
  "key15": "5V1ua6WC6APS5Nr2F2Ub3VpyxTBaAKbqfJxzXXe4n77MC1fPgrQeXVznQFZFrC3wy6w1fYZKpMFmak5p2Jb3jetf",
  "key16": "4yJauDLG8JCQQiTjUfTkwZ6uoqEd5CqhLzRhevG9pudKFyzQQvfrcsSMzDuF1Vntqjy8uTeoHMZAfy5cvDUCWPrd",
  "key17": "3onaPySBk5SKYCXqTnJR23ZUT3t7rxeDq6ZPs1PVvsKbe2tHGo5CZs3K9Jb714Q33QFf23zijgXGmZsWq3qG9Wme",
  "key18": "5pJJBEsRXXXsT4fwvCDptfMzCyfAadeCWyCYvDedmAqBY9jk1WTny2Rt6Wsxqteg5LUCXxvXFkAaPLWujtF4j6EU",
  "key19": "U6wFnUXWCNqpLc1YQDiBabYM7w1JuQVhDdWH5w5sV78zsseWXxa55AumGajKGvAr2w9sUECtBqyKUP7F9fvMBQG",
  "key20": "1k4brMY9MSH2KGoaghAo2CrUNQ9GBGoDCh51ozHNCtMYB4tNzHtbha8s76H1weWHpBeEwULejgpGd41fTVyhEpb",
  "key21": "1ximzndh9mgy71pTMc66BGCBuvPMPJpLSf95ThuJypdaCqe6TZV4BfEQuPudjCj1x8M1Q4NPf71c3bKtwXSbJvT",
  "key22": "4HFgB3LEcWwKuE9421LfzjqfwXnzDBtwesLB3rB7pfHxqMmLs1HT8rAxZTD7ry1uegzAjn1RUSzjMp1bVdoJWkBz",
  "key23": "3mBJ7rKecZrdSuNussc4y6nj1cYwew9S3wKitrELrbE4HH4EuEq2vEPD6XXN7u3TsifTccD4cVaSwi4vfkSGqA1w",
  "key24": "3SKfLjnS22N174knRDiyVWn3pDLGsfkH1erMRiBwwZyPzdoKwX7sQaxr9KNukY8QmDifT7cgzcChH2SDWVYWouSt",
  "key25": "sX9JDen6dkApXSjFsDjepPTWhVUMxbKaY8UFiv29btf81m4PiUrtkoiV6eCMCHUUGjR1c5b4X7PtsJJJdAuYj8Z",
  "key26": "5DdyxPM36zRfafvo8r8M9GDzN7nmeYL6kKTEVk8CGXG1ccaDG7kEqoyEySC9rP4rHvuiyKHqc4BapwnFfzx1vBoA",
  "key27": "3kPV9SrYMtMuk7MJA19iMaL33BNSfvZq1eBmh46Z81YeEEcGXR7wTR52a4mozfnDorbAwt9xguzg1eLEfeMjiA1C",
  "key28": "5EHb5taVixQCQL6qLG32mDoMMtSPBT31M496ysBmEWNaVC48moCp7cUbEzsoMaKxq9FrqSQ3STnyBMEuSvHY4bAC",
  "key29": "49DyLMSmhRfxqbp41WqJVJjBK5nkYDX91wHahYWePL8iHFTxjrm9tPGs5gFKHahKygzJUmh3vEuZE19hnPtqPpPx"
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
