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
    "5eVz6ixSwYkeC5AMaC9k8Mr1cWLNPYhj4Gpn6UCmwZG19kj2Vs4XKCzfN6YeQjQwuyzsNEabCocr8v6jv9yTEpEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cew9AJbMTPnNEdffi7BeMgnxGjTFwp9PkaLANu59Zn5awMi38vkJSgau3Lf9zvihJUn8wtiuBnhvV96ekJ47dCY",
  "key1": "5eykuY2iWKS76hzb6KMxaF6i4eJ3EeguxLJ6HYnVfqtQLyjmR1Rdf8frsRVNbWyZeojcWPpZUXLBoDaJ8PawvKak",
  "key2": "5AbFAxXHpzdi9DbpLd3WZyS2bQWtngqiuCSx8VrGaiJr7s6vbuT4L4wGF4uBsRnDtAZtBiAokinReQLWQS9tdbE9",
  "key3": "2RnTuk3oRcLU9pJKqozR1BrYsinRi39sUvjqTwWVuTvxQFx6XxTRx3i35ScNiVzNoUmshaJFVJyxmgcWrSHpwNqu",
  "key4": "5bxs6DsBSkRPUFTpLczry9hLWb6i583DWjhg1LhUFiFdQ6QdBr9BYgtzLNQuA7cbH55JKPEakjtN9zD1wLgKMdnH",
  "key5": "M9pXWWJTgfzpCHkQXRQwPNEUSBUwzZE8VixZcPKK3X9ZtxvVfKWUqSETuxgqhv2RYJCTtXQrr9NCYUGGWB5FAEf",
  "key6": "4jezmwMP4VKvKyJ9eb45PUEfF5M72ppPaHzadgLeyyjAqCFT4KSuS9WseK3VNM6ZZJbbBuprvWenuH5w15RUEmsZ",
  "key7": "4zFrZkAMpUep5h2m69KABRtDPJ4PVUBaAsLt6Lh1TXGhZ45g9Cj5oRbgHXnjrL8drYL1ba47pbMutn4oTNxnbvEx",
  "key8": "4Z5cejBX5AHMBBfaqkJYXgWpmvNzZFWzdKb3p9NKu238Z622YNiYfczRMcuHjAAjyffTYameQAKAMxMQXZ23B8rQ",
  "key9": "2RwvL6Xds93viwufsGreJmUGs9HZhYHzoEWFQGMW9JVbNH6aVwzwkiLaVjQ6TUDhzBCchEGmS3khZb52sTLkrfVE",
  "key10": "XZXsijTfnKykk7kFGLB9JCKrWEcKA24NLHSs9Gqzwi9ebLapKj3wwTnDkSQgnUzLpE7VPeK3A91myD3MD7vkVp7",
  "key11": "4wU7XiLFcfxAKVHtcsVGSS91gEsdKNGyTw6cBvqc8tmjnvxv6fxNqdTQSWHRW5dJtTAbQwjv2r5vPdP9Lradfmqu",
  "key12": "3JMxJKc2qMwMpHTkq6nwRrTbAdA6SDcd6sq6Cu5JcZuekWQSzsbjj54P2cEYC1JsNFX2Bv1srESDTwsL53dnjfLu",
  "key13": "2Aicuem8vkXGh9mVXnZ3HuEMQ8H9dtb9SGqbMLqMKYSYancNMgkh4oDGEhm34oPWwxe1MKKDWj6GcUFPAGUUrMss",
  "key14": "kAhFctTFwyagyvcJFDqxiauxvhbE792cKj9ThquYVQVhxrcfnwcqb4YGKdSCjcwb3vpeLj2cExd48nHg1TmdSmh",
  "key15": "4TNHNiXtmyjkRUSLmHRFNaha1Lky8bR9RD8pd2Y8xmcH2aHgx6NjRpdHKFd8oYUNKCoH89b7UD69U1pfi7Fn6hao",
  "key16": "5PHz5Lss4wmd1LhpCaaqmEgabou5RRY2s8xjKd7T1GFxBRKoNruHjMp8f4EfwHBNR6N4DdqfpZuA8NEjgG1bvYKQ",
  "key17": "6uPenayZyB2aTC5YpTWfgbk6cPFvL72N8UVs5fzt8PD4VrJobtiztqyj2jgoErm1jHvL2r15iHHsbgpH7Zzkhc9",
  "key18": "fcEwFkoUbWX8euqjRsf9fCKknQaj8YgzWNL9fRkvmHHp4kCjH8PvWTspZuqyg33U6Mpqfi45zyzEo2reyDvjBU2",
  "key19": "TYvvh4eT5QgPaK1vA67Gdh5drusNWPTJgnbiGFscTYWkhUKn4cBmznjEDyse6Jd8Ft5fCcF6acAwbMd6BrTVDHz",
  "key20": "5DSZi6Y2NLeBCo5T2HJ94hng3t22odx6KUowTZUzvysg5wPGY36Aqn5THGqj6Kvv3P62VR5G8SMgZ6EBhB8LLfys",
  "key21": "3BWjVdaxgEwAw8wZDS3Qf1YA2WugjqZAEnBAyFzFxY3YT2BHdNqhutXcH5YLcCeDt5f9domEiTpNFJhyVcqUT6QD",
  "key22": "5JQvuvRPTgpeRB6U7Lywq2bEvUn4gpfZeyERmV2HvVJDmEhQQnSTcPuJj7v5PY1MCsVVat14P4HmjbRMSuSdd2vR",
  "key23": "2CBMyYJWvtH8sGxMpvXj2RaDyJ3vY5eGxKBRXR4jfsmYCXPgo4N1mfXADrnUf94ThVihHcXuZ9D4VqckSt2KfJTN",
  "key24": "5MjBG4b51t1C1pqAp8pGYTQeGyuCqUf9Zqss5oDjnigREcJXfJVTTZ3ZrLwEWLkfx1ttRX7MYPLJj66uBWh6CbUH",
  "key25": "3LovGsmNwtKvja5JVxfjfVcyihSEpuyTmwTJPHjLyjnNEHp6LG7EPy8WGiUSaBBsmJZcDG5mXynZmJqXxF6NjpwC",
  "key26": "2VQE1BcDwkkEpHYna66JQGtMjCnU4zHgGokMWD7Cbz8YhuQCQzwdB9abG7PKDy3tLjzKCTZjLJDcs1qwLmVyerAc",
  "key27": "4QRJ5FvB2hWfhf2hPgvr3FFynjUyWRD9R4Bji5RWXWVzTfHGtk99SrUUbACjh5z7VSLQz7nDhcQ4oQpFfPrd6Lnu",
  "key28": "4iJXm2EkSqDWs7yNXCfjopTvq12D2DrC1XwXJ6QA1UMjzyzRAmL9B6MMyrEW7V52Vx7ZDFLXcWo5VSeuTt4SdnbB",
  "key29": "54w8RpJ5DoRT8o2d9coSwiPyN9vZwbx3tSvSbDsaDNQXm2UKM7f7SKsoT1f52PabWf5xmTBegLXCwCHgkAthc9eL"
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
