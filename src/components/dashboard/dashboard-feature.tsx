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
    "3JQuR9tR4kKUpBhm5xmDrsitAGqwJean2m8VRaFWHujqUfpAFvzkAYrqMGrWEgm3rB71zxpmTwTws5iKmBEDLcb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "477cnHPufmndEyUSzk6vMfgtSxbxvEPvCvvdZotPSoYTdiPhCYQ99mRP4fT5d4hLuegtzSJ8Sre3oMmib199H5DP",
  "key1": "21NKFFeLzejgAmDyDEmEqWypnkNf1vC2t2BKNtCDBRYpWWcgy6aMcLgU7Sfu4yPkQcbmNKwpj8WRbi8bYCHgryFD",
  "key2": "ccxVD157831KfAfLhVZ9yHR2rv2PjpkXX5LmEMqP66Ae79kKDdPEU1KAJ3zqX2DTCjdbXPCqEfQsJJwZ6kZ93hW",
  "key3": "2Wopr9MP62ygC9qyoD1oEhektbw4d5WQqGn5dJq5KgcPS7uUs249DoT6mWt1ZpQ6q8xaoRo1aRcQG9FVPY9EPHni",
  "key4": "3HQLsvGFcqnYtnJxhZrsCWh9iYm1bhf44xE4u8zuyA2xAvxLPa9X3zVCmAVZaywedoMSJ8kRrtYuWT3WVoWbmtjw",
  "key5": "vah2uLuQPYLvRTTJJC3bix78KL5erhTRCdKi11XjCg4zKHxVz9QYjhUCZ66oxuNwCh8MaeRLRiiYHT96etAHC5i",
  "key6": "3TUq15GBuW4dGiBDHmJjFRh7J7f2ohk6AT3vQLTKR8YLhwWRXefLqE6ArruZuWWNsToG5FEtiwHvRS5hWrXHZTSZ",
  "key7": "5CCUtdfrSnFAPtD6wg76Uc8bjUKMuLe4bKv7tqux5UwH3Ch5PKuqToRz58debwg6sdwViSQUUk3RmGqQRw5ZUgRi",
  "key8": "5caJCn7s6bbAXqfxfHrYMAZdAqb4UhDRbEs7FxmGUTNe7RpSajog9PBeodidKzWRBuxYnqXdGoroVUaZEvN9t1RL",
  "key9": "k9tpQ4s6qfMvsPktKeX6h9PuNWbaH3RGA1HvvQbNYf4rmyZbPqhTpVW8qy648dk9BYyKKqu6GwTYPp4JDBtCbH1",
  "key10": "5nGFa4BbRaRLJpHXwyv2jvUfmXbJz1rv2TapdmShujNL6FGEkuWTzdrnQcKHJzZisw4dqLSLSJ9Mce1paux3G4sW",
  "key11": "5qNQ6qCAKu1ivor6ZiaffLLBKThHKDcSbxQ2P85FvDHaQTTtCm3eH3q1pEcp6pXFDMY8Wi2ZFDkw4RcWLBVjCaFk",
  "key12": "42fbEfV98p5UsPg5zaYD7hWJ7Pec38g6HBz2eBPmYe8hYzGDUbLU1zZLKF4QVhG5BBWRiV2zfwcJfz7s5ThvAjgi",
  "key13": "4HaTm6gpWM4gHQmf619vBhL41PRyiHPgdWMLwGB4qLa7DwLNJ3SwWqjLuSbkARu5bnCkirWve3ndWQYnuSjyY7TB",
  "key14": "4U5TqEnGzrcCzyikwCNxfVPZiLKWZZYzdxk95fFG52vA5p9wMzXtFkWhBNdFeYensnFuxLog5yFeTLbZPy69EAvf",
  "key15": "G2yuSGh9vrU1MehgPaPLA77p3oj6tSGrppK1Vw7QEsSjwXjbWv94wMs2632VorCHdbdexvc2hCWHZM2hMLbo9y8",
  "key16": "pKkj9tSgjiF8HkU7rQKAmhMXNES5AWcmWbymu3gZ3diVqbQGYuMaqJ4hW61ycUNhA7FnqdZyMqpZ1vNXDZaHM2Q",
  "key17": "5DN3xWk9E8m8jEXNEjCt6Y8vuCgutS4o5LcX8Se94U1yrzQDhHgzKipLas1ddkUAjZD3p7toehwuzvdVJcuwuFqV",
  "key18": "TpKGhCee8jiuaZUMPWna4yGUNxx1bde7x7CxASaosj5N6Uw6MJgR4yqPDEW9nNjhG8XvmwJx3VdXCo2sJsMzAUt",
  "key19": "2XRHmbXdJ1y95XUPLpUiCP6nTWLDPizLSR1uLXy8Kj9iv6WneeG8hRbXTFLNogz353tacn4FpLeKTJsvN1GM2kHT",
  "key20": "4Y4zxNfhrQQcX7sntmoS1x42H84wieQ7cvy3BQFk4RDRNums9d6Sg5L25Gt3BUv45Uuv83djpFDgv2UtWEE3UDMB",
  "key21": "oJZyvQzh78598VLJ9JeuHNYsdLpZ5E57JXtfBX8VVh5gue2rTrFtthPD6KyrffXfL3oMhKhWXnAF12YFXLYsQEk",
  "key22": "PA6UwoheWFK4ks4UCi2zvMtgvDRkrun3Q8BPrnJvAbuFmK1B6NskWU7qoB9cn7qUF6sknJYAjqZFrgSR3AihfR1",
  "key23": "4TbSzSDcJjTKVxwfoZfFiGQ2yhZv8q8x6873dMfpT4Z3DF6z3X5sphsjQSB131n4onzPEw6bipKgnWjgmNdb1r6q",
  "key24": "5BrEvpTFTBM5EJXAg3S1mktuNeYnmnk5X5hC3R6HbAoDj6H3ugZveM1Su3wdE6d85f8VXmiLbgaVynJbTY6efpLr",
  "key25": "2JdZjjkLDAh4Da2xsLh1oL4coftiDuMeTn3sL7H745A6mzAVdtMo77LYHF8uQa1irf3TJhbsuXAMyzxJeHcg66nj",
  "key26": "7G9UmsgdsTDSbsNKbxFDt42zKtu8winPYso1TYbQmC7fyEdPbGN1o9TkJcgjh9MDXCW3Wjf6oXNtMb8PZJGwdTQ",
  "key27": "2EcmUoiVE87sEHXu5NBYAFHjJL1q1pEGGkKpq37KmVdd597ttJuJAJcmoaASJJ9c7briaadknQQid2TfLoVX1A4w"
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
