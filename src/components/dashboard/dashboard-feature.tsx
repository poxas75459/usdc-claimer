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
    "23ZNtv5nhgStratbp5xRu89rnmKBK8YKMnves71uGL11S3HhDaH3Bu2FQf51aCa2ngTKCJ661xVHKnLJLLbtDLgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BQgEYzcfT5GpWLrBEBCxuAgKMoXrDwJivcPKVq9h6jaakZXNYC8KNYN8amkDwauufuXDnWBNWUBtbFoZNAjL2Lz",
  "key1": "5NB8o6ho61fUrv8iC2UYY5uXzuFoL6hkJBzoWJi4DzNWmTs6AghDYhf4rZ6k8GjKCERmRmZ9me8sqPsKsZ5VLvQX",
  "key2": "5NoQGd7LAwSnnsePaUowd1wjnaDwQ6Smrapv2VKSpgQRjB66Jz4mhV8qS2cmaSmsfsVyhCyqpQ3FFnA5cNjAszXb",
  "key3": "4UYBT8ecXtEmJCGnii4qrwo5DGna6VFhQC7rkVud5YeYJS9odW4otv7yXAJkrGs6ktwUf9m6yo6q2H9Pr4D1VUYi",
  "key4": "55hpg5qB3upQEARt5N9rMEbv8Cb1xU7XgVcHeB66EqWZJZrAGSv4i3ZCr7Ph7sEweFc4kUUYYMp2JsWekzTqL1cB",
  "key5": "4sdb2QTg9paTtPTE843Y6BVuBgsNm1rqbkG2PTKBQjEq3YPPJqQcqSNekHsdpHy8VPjMwPBq1rt9J1p4264r3PPE",
  "key6": "5rvXJNubv7xDiCphR9hVywYJ5eYft6VqMZroTkj3rtmLqveKBy1e6crqPn4nKyG2gNbcG55JTFZs1y6SEXLc8YHR",
  "key7": "3szQ4PvoLKfZzfkoGi8qUo8HyZmJQ8eszkDCriuyccR7cggX6Qynh5xsuYQNwL77SYS3dNPhR5fLesiWxYZ9Tcgq",
  "key8": "63xtnPaUoUKZfvseYaoa8qu2ayPtga498fRfEDGi44TVVyUUucirRg5iEs51g4h4DjaEFHw6h36F2mr29tR7o2Go",
  "key9": "5g4pvzrc2LoNm8pJjub7ptcxyV58niedkEJVFYiDx3w76vNGQg1D2pdsHe58ET3rtNtjb1MxwXs4CtqMuKPs52X8",
  "key10": "5TgRokcD73ZvDBkWCSiGpfy6JqXRkasiqaXNp43Gw6xgD3qSGBQTAAesVaGLXsxeBRnhRFJXK2LM9eWxrhiGbRJh",
  "key11": "MRvzxTMMtpWbiu1K8hTg5LJxc7DNjrRJEwfm6gKnzLZLiUuPc7wWKmkwLjDk6dRRxy2cBbLhjzqND1wHgCM29DU",
  "key12": "3w49BNJ24hL4ZRfCaKRdPA8RLhWKwEXc2JgMSm9pF2Df6Jrnch6nxg4sAer7TF5Ebm1PEMCk6igV4L3YnF3UBS4T",
  "key13": "eCwowrbteGZymsandgWkwPpusBu9mGhTxxQ7ytqdtJNnHqp2pzFqxxrJmP6VBaU3QYnNCji6nyExJqV6a3a1sUi",
  "key14": "63AYpPsrUpospV9BWDGgYYwDSD7cCSzorbKrvGj5dg5xHfYRQt9sCaQPXRh8hJjyWKRJuuEFzwvci81q9bhssrRw",
  "key15": "2qhxJYQcvrXZs87z14XMvFiTmH7KuwTmnrjr5GC87HQQFivmz1tyQHNgkA3wRjFWGKeyG5czXBpzkJMxFJBf893w",
  "key16": "5J33ggdE26e7778dPFHQbHHZ2W98vXHmUJfGVbLHW8gYVRhchpeuP8RwyA8yhjicFcHxZbY1PW8DNWjykPRbNmy5",
  "key17": "sWxPjgx4RMWDRVWF4kPcVBvVvYG1GKXUVcQaj51ky3NTqi7ZRLbua3HkwoVkW2dXUkz8s2gDG5ZbptA6vTwUd1f",
  "key18": "3umZQnZQWcCVsCf66Y368hwyVkKmRJ6fhAju24BQgLaomXsLxSuKoC2zr4fEWXMZdCBHgKd9f1YB6XwRkNnburpW",
  "key19": "65ELF5DjFu4tyeT8djXdQZ1VMnSpMRLN4GUeYhwovuducLHpgtHewtZ5kHS9UAxjrUcD8AP3EtYq1JtaZkdM2ZNc",
  "key20": "3pdjojmhjPbVTeTTGKBWGZ5eVZri8NEVKJ7WkEvpvv8EPXdyceALvm6WGWaipspZy7H75C56Wn3r54CmHDQbcepS",
  "key21": "wrtKe9VXCMMs6Jk9gYLK1snzFkceWoijYB2iB6XsLoWPh3iPQUvrgSDbKFfkdvtBL5E7WgcV14FXwNPxjhzccwk",
  "key22": "gQvtPF6p7JZTzNDpYneBpHPsN98utQoaxUvLwzgmMa5Y5XG44BAeJQr487b6KDTano8wWxCgBmsDz5XsmEGF8wn",
  "key23": "28eHuCSZxkQSGXuvZySFJXYFAYHgFWGXcmLXYcr7QLAN9sirSfQfDuatf4Xuy6e9T9UJSGC8h6fT8WnWZibWdnaN",
  "key24": "44jR4tc87kX3koLyAgF7g3D3abwTg2v3LzahLcBY7on2aZ7cc8eumyrJ5vo5ydeAKuBtBk9RcKwDGG4wqVV6vsqu",
  "key25": "5atCars8xMrpygdHhFKVCc6B39aDERD2upyJZXL9wiKzx7coog555PiECDRmvfg29e7U2kHuEJ3fxF7gSVDiQfM7",
  "key26": "3J6S7wthwdhTWHvsJkLfEc4SXBtupedmqcXV11Nrnb3V9ymrgPN3BaDmwfLb9utUZLjFPiUbRi4ZQBTcFc2HMAxC"
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
