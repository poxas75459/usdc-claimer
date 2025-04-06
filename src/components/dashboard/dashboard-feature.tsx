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
    "63XG4dTXsojoMwr5B6w4pLhHho16aZ9sB2sg8q9PLthDQqFLpdiwhqQdnzcQkumM83NisyQkLdUTHdP8TweZM7Pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mmzbh3bwxhCZN5G2CFNmiY7LbwjtcpKW6u9SYm3WmAtjHYH487SMsB2zXEyGNu7R7De2vbjBSkqZ7kpnPmYQs8F",
  "key1": "2c1PDtqKkvXRk3MjvnnkfZHcS7vUKh8PeYqT8Q8ALK1twgrvFDRwuNbV3xYMdSfXDL8jgAcnrcs2oiLDEdQeDzLt",
  "key2": "5PPPakW4cC5C5dnnPxQ3Xht2F6MhixRHXF7L6WFqg43t2tJcyb4rP2uj5cj866vdk6UtbotkskDZRQXWLVrcrTRq",
  "key3": "5HBxZpLGbS1Jc7uoG4fwhc9YG83d9NE7LYdMxFbdZdgbwa7oHTwBc7pesHmMcAu8teiPwQhxZoQXG3NggJKMs6uX",
  "key4": "2g4Ar9e1QtQJh5EkAEAxRFknoEhaqoVmPop4UoRkC6TCVsB7BBaXsNYWDhJ9nqY1SjwKi4xnBw2B4E5GQ3YFdofb",
  "key5": "5sHXxfnXMPPUmmKbPjgP1UDvTdVZhreMeoKFACvU4imWcVeawhLFMCBy9H1V26TUexwSRYaMvmhhS4aymkPMAgaa",
  "key6": "3GRiTg9kmpS3CwADAQKwhEJRWL6w8Kv6TGyqQ5P7qxmB8TPUxpLtCwsN65j2a113YPiovBL5gzG8prKgDpLiaV8n",
  "key7": "6cBsxPJxw4WEjSaKTDCq4M9vUsudnrN7VZFq29HN6ED3Bw98yAo9ve7oprKuicjzz4fLaJYPF68hNxpYM5tvH7q",
  "key8": "44Q2gpYwR2PvFMSTuTaxjGtY4CdJ2f8YE72r1k8nwUcjuUGnQcX3dk4oCJjfTTwR2qCDpqsdoY7By4H1sp3Ex4eA",
  "key9": "3BonPhYwa4LYd1tdgxd9B6ZaduqDE4zv7dViBSdUsNbXAeXJwYQ5c5EaLcfhD4UYGZ3Bn5MhkzUU4UJYyXPVMkzZ",
  "key10": "3QnEhApjNmDdsDJLhzF5Yf3MtkVwFeC9m7fEgbA5UpbUWXwnshioDEtQtDpmZmHnWqcQvubX8G7pdPrMQD9fpsjH",
  "key11": "2sdmnohijADzgqGWJLW4CQkSf3VvPJ3kN9APAnVJeraW9LS4mzzEssEZF7tDBqX6GkgrCwzsa5ECNuynP81AZ8Nn",
  "key12": "27mgtfXPq3445DEj6Sq8sR71biXe7gZqGEPoLqJbT6UhprnRxEY3rcydFeiU7hpFZurZeWNFgmWfuhRZAh8Qf7oA",
  "key13": "5D7ffP4BSMLXkcMSNgGRRkoskzRLbSvuSmyRw5TmdDyuu1hNvJe5NqK9Fv3JUxtCXKeg9Le71fm2V43YpFK3dgjg",
  "key14": "S4YnYXX9xzFJYtF7btS7XM79o8J7ppuD1vAqHgBnwjoGYh3tgVRcmXdprUbGqd2NHPaQ1FiWeejaU5ocy5akzDj",
  "key15": "3MyoqiY47dctiW2xnnraEeB8Vn7xuWpyJcTnLwJ8ef4R9p2UP7peLTVPNk6sqWtX5oQPhd3P7QuYdMHvd7WaLNJt",
  "key16": "5nvWfy7u7JRXZmetStHNPqB4dfGRsSmaF3vmhTZGR18zjKcqafSnTdRPqt97Nf5tAu5Lq93HCBVeL2M29A5FQ3D1",
  "key17": "3TUA4HA5j4ejD7CS1LL9p43L5SECHcnF5y4muv2WzeAddYLyRZGpxTqYymcsiu4phr6LqWsfpNodo2qPKjsAcreB",
  "key18": "5ggX5jw8aKt873f3pjteW2Ancdk8ipMq2Db1b3hSyNV8x2GbPWmuDvdrG1o3rB9CPypCbe1S4vjzVHTUkdy7bJmT",
  "key19": "5qUMn7sL4Qhny4j7UMjrgnfCfTPVE4iRuRPx2oUBnkV1C2a9yEsDvByoCDjqFBv2PJ6kY3AnvKzajLbT47nryLnp",
  "key20": "2cBx6eJQtuYhVJjWemkFxzNUXRQcxMCVLKwaWXxNgfRkqFcG5T8rQiG7g7U7iHg4KocG2KJqQv76mxo8n76NAEvZ",
  "key21": "5S96ACqmjtZXMkzSzmdcMR4Nrk1ckZCR1nZSHG8JHC8jbEFbWSSZVBCp8b5z5WThXygJu7mXRtG6yhjmnge59CKg",
  "key22": "5V1VynTaLhyZe8UgggGwJhEhnTLGB9y3S7WaEESRNyks6S8VRaTxQb12W9zHvtbDGTYSmvz5dkkZvEYVWjuPUYEi",
  "key23": "4DmdcQVcDQp3AqjDwJjvdMA6HZ4i5NPYsAUSYPFJaxdh7oPy8jQjdGCGbe3ssHvD22SD3xLrQGHvUhhPR4oTYP8g",
  "key24": "238e8hL28SmT8j4wkJouqshTZ32H2cqCSqPTWx8ihV432SYNddX1FYDcdC6992U7Rx5YpYksT1ufWJ3dPNSazaLb",
  "key25": "47Y7jPCBFmDdMmJyJhg3yVr6a463ngm4Q7CQPMLV7kuqeuy5NUvWNX8g6vH7M3j4zZuT5EC2YNnnTPZJfR6YkKiE",
  "key26": "2TqSkqZcbTgSgaWqN4k3Wgo5s2oDGvM7sCzVzbJnHeiARxUUTJvW7uAKtjV39u4A7idiKt89na7VD3vkq5tECWcd",
  "key27": "2DP9TD7fEUEt3CB5VLQNeRC2A8fWPuF6BDiRuRtRGtGhquP4YcRADQvgDGyBKqKEGZWnFFVjeDbKtCcGkicVm8yL",
  "key28": "nNMmr72aqg7fQzzSBVUTXdqS1bfZHXX9LJCm9MTwYEntGjN3qFHaVignS7xiJDEWy1GfFrx7tNwjTS8WxDwBHfd",
  "key29": "2nkL6xoFmR1MfEgvcQZKRkMnAd4ZAVuoEkFE9XrFBJY1WaskyhhxsRszAZ8f8cm3n4iYt16jKNRMZbfakYYCxLUQ",
  "key30": "3RATkQQontoPXQpnnDMFY86PYUTipEh22pUVYzjhqjHciDNSh5ZdgH1pybHH8yRzSo5ikBBs23Dn5qsHbF8iC6a1",
  "key31": "5j95L5nA1sShTqp2cnq2gjW9VapcsNPDUQicD7A2229RWPJSY5hBfzQxHNhcKDAZrwB43akfFaxjMS2sJg1Bbv84",
  "key32": "67hVj4k4YjSUbJZsnTu4B4DPZYiBhv3rz7qXR1tsGen1Z65zqASbJEx5g7y4GJyadx9H5u7DS8Bi1xfUa15f6dST"
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
