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
    "4eLaGy7R3fYpi84iwLBagwYSDXkZgdM7oxYipqT38EVzjXXYMvPgDcfuLa3LuibMYLYsk1gDGYvNKrakWUNbVGnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RgfknQRcSQ9Wzn2hsUzfNKx9Fvr474FgX8uS3UJASVnhT3gKmBWbR6hw9n7mAer2Dj56Uuaje7iCnmRybm8CwqG",
  "key1": "4WSiyX7RMSyrNYe7wFgrRyi46bes5FAD6zrtHNJWYg4BDY61Hu18rKKGy53CdEJoR1BRQifYRAj5RykA7GoYJDCR",
  "key2": "3YiVnUaJqz4sni71eEAWzeMS9zLG7kkPAcrWcj91FLxQMd8TYWFfeyBu8QFagB5otVaKmBiKYVMVSJw8iuyJiNgk",
  "key3": "4cGPhwAz9PR9tUFTxH1doUbwEYj2CHwKCoC3HrTPUebXhxePj1r1iqdqoiMTuUEq3b7b4WfBAruBGdrnfksmmDiS",
  "key4": "2Eqm3iw6UQ4WCgQSANxatrj495B2Es1G1Ap8CKaJEzAifKBNJKoniA8CvQiFiFePCLL65WFxpx2N2Z1EnNFPf7Ty",
  "key5": "2yF3FqJRLtRqhNBV3j4PZ13tWNFc8r4mxZmyh5AcR2dwXH5qS3iTKoxejWC7SCMGRrzhF8awfmhVLCkBASRYNUfK",
  "key6": "52N8j2d7eANag7tMpfPcbrDzvNM5q6os1RcFw7VZcVRN1PJw464ZdaxaCSubXLwqXQs5NGHQGiYi7nNuhpoRxyed",
  "key7": "C1NS1Amd4vN879W6iyJ8X6xFNc2yaMy93kH15geoP2JkAssAtrMS7Kk4WeSZjrBoQgFAJ9eAzX6CtX5XUts4tmP",
  "key8": "3XSGtr8EVrdiLnSXHbEDXAiRnQk7LsrWw6wXYxV4PQ89kDNdNrevPMfw7gwRFKHRpF6Gf7xPXryu73TjPQWpF4z1",
  "key9": "4gZ5HQtGogLXJLc8rsvCE62LWzqc2RbhA8dpfUDuBDp7ueAgG72qejvEL2YjCx6fMKj8D7j7Z73JAkmM57jLt9Xp",
  "key10": "36FEKuXWjiNkRfBgMgSTrcg9rZvwvj6feeoGPyPgbFZo1UHM2aw9LU1eTy2LRBePQCRSKyXo9P5FRg2ULtsWVNyt",
  "key11": "2TGDV5qsu3g2NY34VJiE3y6WB8LGZP3bycqb2SBvZ258Mwc7iTTDqzpiz2yk7j27DuEhmbKLkigHjCGW8VG7ymgk",
  "key12": "4T2CrPpsDmuCJmh3oCa5DNtZpztdTYmbeuBynujwPE4UBBGNVohnwr42hoSfb1vrKX2MwTFhsHS2Du7i1YA6Ed78",
  "key13": "bzrPMw1qZHXgqHV5CucW8mm2sKCYovbbKqy6XTQHJbTbSPGqLqvM7RTXjSi2AgaS6N2RYxjr5cpWVJvZfocAG9W",
  "key14": "2ogk8uG3g6Nr6Csx1cduGxJ4Jfj56GBHFcFMqrZZ9xKZn8RbCrfXNruxCGvQHfq4d3XiKjeVHzRJgE5MVHkdxzyi",
  "key15": "2nPK75hZMdUQcQygSvErbg8RToxJgJk8Ked2NnaQ7oNWVrR8PTbNrSBeHVBLpPSpvxRTFHZuZbMDRyxS3QzUxnME",
  "key16": "4KvGnDN1Po8anDRPBj825eF6uFddpepzekuCaG93o24Vtkgvtqh1AbnPHKPyafr9S9CySLnr7mCRHJa1ZC8U3Uze",
  "key17": "5UVbv87PBh8priF336fxp8ivbJHbUFrRPWS4P7PYh774CjCr4m1QuFUwRYC8NyDPtkzKpXjNojj9q6P7r22yh9kR",
  "key18": "5HizLMQFAp3ssPozfMSn9cFdfTLUpzFzcRkcRL1WfFSeNJwFghE7eJRRAYULT45v92mcMhxXR1oQk3qnfgBB6Qeo",
  "key19": "3613ZYSRwuG7Gzx5XNXpZ86ofUG8JCLrbDaQPMkWYLVLzE1iyZty5yMpV8xniBoNXfe5wwNChUJHS8du7HznT4hc",
  "key20": "2ohRWVu2vEFHd2nFTTpHkST3rw7eWvKqEKP5NytGFJQvudkSz7FWsDFwdSKNXwm9DFfNxUSpPjpvmd3yaReXeoTs",
  "key21": "6712qQHMWKzaSaYMX5NU7Yp2Jx5zLkJocWDKvtNF6x1Q6YA7LwBikuEm4K2ngvUzWq4GaRuazVpFT9eQdgaW2TQL",
  "key22": "8KirFZD4WhEpECdjv583Z7BssQY2F2ra7iuwvaZ1Y3Rqtc2rAXZ6b9TcYK8Q1wYMdkWiHQku8nY4uMuMaWuPMP5",
  "key23": "2TFbNE6VUUyTm4nMb2MdgkqgTXBK4y9h2f2SX7u9E3oP1CS8EQHTc6EukCe7zYmeGH31XHFAPrg9AsLiQTS112gS",
  "key24": "2cdDMV3LWVnjZAkANX2qtnGEqXh7Z7cU29gjL7MG3DhKiFnDuDqEaNJmkq3KfgjX1dnsUXXTRsVBVK7uCJBAbgxa",
  "key25": "3ZgU3JWkZcjy5YLEkW795NR8S83Mwdy8PUyuVtdmMMoAFR5FDvweh6TsEZBxBuwP3ZMxkbDG3VyEaJqfspG6gPTE",
  "key26": "4hbEq5YDpYn6gXYTgtXH9keiywPHZyJixjqsKx59kriPfhp171uKdRDVSnrfmdQcj87DUSRyJsFbLYoZgDh7XSHY",
  "key27": "3UME9wJ2NrrsWkuCUbX1owXK5E9A9rdMVvs4NX4gYpNNtZvPgYLuEZShGw3EstexMMePoXyVaepW3ZUysaaSNkn4",
  "key28": "5rt8BEZYaE98NHHbsDjaVcE5ShqWFZTd7gUkZSER7tLBeG2yGqB5kYNAscGM7fceRC2cP51yoANCehZxrDbfsN3N",
  "key29": "5uLmNx7jeb1Ne2EjZwWgPi2kEyrdWg82ZvjCE4C9j3JQKWR6rpRABcCQHF3t6rEn7Ldf1rELCRAFH7ZFsTa62nMy",
  "key30": "2TEedyWfXcithrLrayVBvwHsPPJwyrxwbA4nM2MmBrZ3PunMfrbDXjZTTX2irdiHg5JdYE2jpJJhoPRigCkKb7yR",
  "key31": "5kbjRJN9QZNW2qtdzg1aEEmEzHU6XkjnMk4aCwbd61jJNFXCDZgotZsp14CtS5QkEYbKeTkrabETkgftwsJFz3G3",
  "key32": "67YkBkF4LPBFGd7uvsehg11BpHGQfpJLMreEtCwwvm6YXa61VBzG6JcxDAJvCfboAnyGnXjsc8cmKSaaXGQTYUMA",
  "key33": "2knMQQrztq7RXjEr2SqjKkaD2FacktcGNVTu44zF6LQDpuLwC4PSN91D55xwjmxWdVNqzjgKhrTZx4K7ivcFnCcc",
  "key34": "3rPcn7oy3SHU397N6z8Kvwsj3K7sfbidVWzFBCcRTQMX4zfMc7oT81ywvUg6W73FZmtobdMnQVH8KGMhLd7UqJo5"
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
