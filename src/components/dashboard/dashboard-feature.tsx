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
    "3qnFSKEQDfHH46aMtTY1EM2a5vyVEMaWQhNDh475737EtSibqkhbkdqXkHBU4PvGYCYHuKUZZbfmGsZg87B2bVZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HmfGqShA2QKCxDyPQS6qn7kRkLgHwYuxeXTbrbx4EcZVzzm8CWuPVu6M6FgE1g9UshAuYhiX1Q9vuYDNE27u37",
  "key1": "34BhoS5VvjWzJH31wQuhbuPSP7Z5yh3iXoQBD7RzRSz2vF7wrP6WscvruCdnVffKJbWvzAPtoWuRW9LhJPk74fKr",
  "key2": "GK7mNNrTtKdfFcL8U4Af3CT1mUQMCMSyhLJrV9QXoXBwbv67RYNMAFbgJ3NLueHGe1oUe8TgWuAHDYjstd4dJd2",
  "key3": "GoY4rs4K7VR4nBkL6hdbqyvwSiFBSDvc27i4KTyvHGD6ZXPB1A62kA7o7fNRAxihH2pJrJ1WTzhHiV9KFaf24Q2",
  "key4": "5CYsZvFZm8dY8moAaPgvaDG6sBDDsrW56SCUPBLcZDFwe3bLp6hB3jqdvwcpgUz5xBX1jhCK3ycstmWBL9ZYBT3x",
  "key5": "5pXWmnhqvEABkqJnJpECgGytmPEEeVT6fz4hL4EqU2sQoTH8yFuKDT8QEXDHuXXSqUf4ikrNyagGerQ826ZFVDEZ",
  "key6": "naNfPj3wRrRdwVnJeSVPujzhbPgZTC3JrNwEFDpBEtoQcw8thFa2W7ZrRPcVK3oAobPeodrXEgAtxtCpviz2wKD",
  "key7": "4gTHRKgWReNgtTSiecvKiZxvxPVNWwBH47igMg6hQBS7Kf12qPmQ4t2jezwNiBL7vjFsBbWax8tDpBANUYWq3JRd",
  "key8": "eeVeGAen3kTJVnUoWqnF1X9cUPR4AY1vgKZrm8z8VUqW5C9Ccd4fkkV5AzefXdM1tevcAvTkBesRRnSmGPgynHg",
  "key9": "2caYC29KBty6Z6S4aD2Yxcjmw8SqwrFdGi5RZ6bouDne7SsBLy9AgyTSPUpKAtSwo9tjQ9oFf6RtZCjzMCU5zi4a",
  "key10": "MgrJmdtaQkEVC2aoJtKjdD9FXgbK4qewT4xh1Dz8sACErCV3eJfdyweFHiksNV7wzuiJR18eKXcDJNirdr6pZ9h",
  "key11": "2y7JJqB8zo1FpazpQQQM4Md9sV246VXQsVRKsNeqxZManosUmi6bf1sma7Sq4B6tSHGv4DPxmq3u5ZnrQE6JtgDS",
  "key12": "4NRxQbJKAXSU6az3oGAwpyLySXZC9ZJsqLGWqu7vwLSzHXNtfnoie3NAfqGCwwhoDHEot2HXPNcYA1GCBDYhSYZz",
  "key13": "3vdd3ser8GjA1KoQW2pBf5RP4UtCbpX6t8AJagfp3hrz26xEccV97j7DCR265631CetwGKuwjeHyo8yVmxeBiphy",
  "key14": "2FaCJQ5mEiyKi8y5Dz1GRVPQKf4Fw5nKP1A33zx4UGHaN5QVH6NYDzSa9wJ22tLzvQsYTHpPFj3mpASVnEWsrY1X",
  "key15": "a7tyYCVBaUNacmu1pXNsVJHjr5CbEm8c6qGcGqg2ceVcE1AcojapM5yMJjpRAxGaccccuF5CCbKdgyC9PHop7Nz",
  "key16": "4suYVepQcptTqk4TDAMYr3eiU9yxuyMBYCzRUDMHq7BpfhbbyRUU2c57CFVSsk9nZMSFXj2GHGi3qcNNBT5byteY",
  "key17": "3RMi2WviBs3ZY4PbsBN6B1yJZUnPDKRnjddeuyuUj8fFYacKcYhx8b77Pbn628Fvw4AWQwybRoTjGdECUwBshNUy",
  "key18": "2ZHucejV23cNYXbu86WHXMkWnnZhAASwk9nwYCBmG8B9Db52nqoHq2KKjBfrHRfJC4dpkcfUKm2pajSApBYJ5CkJ",
  "key19": "4UMbsjMJvjhCftzkdURfhX9BmufnGmsJ9mdNuQQEByGQ24tXA52XwH3MvuENR8Kn9Yz8fUNHKArYTDY39ZRn2NtH",
  "key20": "5h1YqqHR3auSEG4aXZkBctvBDCG38b6JV1hpe2MUhsjiJMP2dYZ2XnThFQpoBRpZUCjLg3hczhxfwyQ4zN1KKYfE",
  "key21": "3jxSqGzkv663G6n5fGgyio6AsmwRoETmMupYxHd9i8Hkogo3o5GtpHGSEsXdyRP7f7cSCWZw4knzoaRxxAox19dc",
  "key22": "3HGdjFgBJZCNTtXzEdLHNzumhEUMmYVHDcVA36MCKXT2so5jbSGGX4ua7aY9NE2UX8xGgK3yqtZqsngx7XfVTKtz",
  "key23": "B3pQvhPMCU61bHXJMpMfvVx5oEo33EQuxitFN9wQzBrAnFjuxkKdptycAEyYjAtH8PGZ15ruXfVShgepTWFXUnX",
  "key24": "51wZJCptwEMNbKC4Hr95yQLpcKQikwW1n3aYw7gVfGakTYXz2g3HL1VC1W7bG7bRuwTwsiAeiZ73b89vSmaucCGM",
  "key25": "5onmi56Xw5aNvxdsgK7SNvonHVXQfsu74TGUWmesND9WajmxQxzXqNqVonCWsNuLqA6dGFYzrBRGFFDkmpUBJcJe",
  "key26": "PHRXVdqJ434knpdvfha7KPW3goFYByw1UhjnQBTN9cLy7wuV6vkbo18uc9v9CKXnCMsBumv1wvi9CL3xVCAzuLP",
  "key27": "4wVYrn56CUHcoL19amShBWxGpoBH8L6mm2aHy2xCZwTKhF5tM5ngEDzBeqxLFUtNkfjRfdDUNsdTSajJukgBsoF1",
  "key28": "31BxeXQrmmTQxBNkFL9t75KjbKYtrXkATHwAwKPyJHp7pYeJ2tmhKJoBbgepsyW5YwFYC7kwVUAQCAVzNPmDZ9r4",
  "key29": "46jH4686nmu5E8fL7gKSRx3fvjfyjUF6EwePP3R2vYqRQqhbSgrpgRRkvayjMhzbivRDZ5heBSsYNGojjKPiN3VZ",
  "key30": "3Zfpm49TmE98motStbGuk6hHmYge8ieJADBqkw3fBgdjWBPhYTcoRhbQJkE4KAi167T3QRDUyEeM7bf9YoFfEAmm",
  "key31": "4vekzbV3NBnb4EsqNqz4qdf1id88uKS9oee3AkNBe3wNtwcDYSNvUjC6oJJcSAgiZfJX81JofBbX1ZNn6LWJPfiz",
  "key32": "boUqF9Jbiaf6EQqqFDBcfXAuBbhwnXPtbcvQJKVGHnxqxTaEQXBCJCMrmauBqZ6HgdpMkJerQnppiLDW7jfkbDX"
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
