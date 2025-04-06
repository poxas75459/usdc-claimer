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
    "2nMVbmhFiQt5BZHPjAzRk8bgz5q3UrfH4H4YXviBNiFqBkTbPqyJkQjHCkXbFAvudQQpY1hSiTHM3u2TwBMdLSPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ewHmwtuhRGGoSzsj958zYrGJx8mTJKumE3ziG3EhXVoqFvh9X2PwAskHgqugk6SmS2LA2D45RbtyhVhVKkoYqGR",
  "key1": "2rKDeN2HeLuqTFM6G9ocKTy5tCRfmXTUfutCf1tQQKVWgnH3E8xFiz7RmvdweSV1wCQVTPmhWRSQ49nALq8K6XX",
  "key2": "4oecGYNEBkDjiYNVbvXyw7ctJ5aFAcfNxgzM9PWL4dewd8ZMwHs1jgWMt3x7hz7jAwJCjmQdu5CuLdAcmdeh18u9",
  "key3": "5LDEQWAwcES4UoUrCkNdR82oiwMPCWVr262gRAKyt7oXxbQhfrZ1sZqh3UhKGHrfK6P45xktsRoyNxcQqK9rw53F",
  "key4": "3NB5qpJYff8HXhEAhWdYt1aU9PscNUD5U6sJ8P4sEgzEgSvhdoLKQ9LxBTYwBM3Ms9yaboLQADnDVdfyUQnUATjF",
  "key5": "31EQx4dmNyEeEhB8NFXjqZpG2dfvpxZdE7pi9UF8qmaKNhnRsYuvgNF3SLZsTRri1AtDmpKU3cVEM7Rkx22MTXtC",
  "key6": "i4AWDWN5c3cXHWqR4ww6qkLMswZnWRLeX2wTnMjAY9TkdgQWuiFLts55eQAd9kEfNGVW4Jg3jayAB2sDxCvfbDW",
  "key7": "3rnG7D6ENWCNR28hDq9ZMCdU1bNKFVxDhdd71VX8pXydk7N6BoAMUyge7RYKX6ty1reqSYTzaW4EJRq46rjzR48M",
  "key8": "4LdMcR8KVTM6CvNc3wmHUEaV1cqc8anmnhDbfTdHMehcRvkL2AF95y3EA4ieetEvsbFy2JEEnhxX3JafbRLoPPrJ",
  "key9": "3g2o1LDhBDQ4SKDrF2heyFfXJrKxorb5ZSpDAiY5PemehzDdL2htjvf2YFt5iAiNsLW2cChfXRGK2Y3U3eEtaa3w",
  "key10": "5pwUjUiqGX8CADcGBL1WF9E9rcokj1XZ8FTeV2zexPeeANzGJiHHEASBHTqdZt2xzXrLK9jmZgdLr3EGUGFBpRkk",
  "key11": "34fb4sULe1WykThwCaePtHPuZo2RbtFX1BH4M8RWRxKWgfAq79gSK9DmEtbgW3eZ3vUqQNTDKvbs77D4J3cHYnmS",
  "key12": "5nzQYjm7dZUMwdfSZTnnUnSWzNVURyesoGrw8X777Re3ZLcyRFotUvYv7CDMVQLvnXGXwsJxrtCMMCxtngce6vBy",
  "key13": "3Smzg1GqBUk6JX3sYGUpTLszLN3c1Nd5PHyHbZKcNVEA1hyQce6DuYLMvVLzzdkwnTQCAq2mkG6xL2P5UEuh3y9J",
  "key14": "4LY6SaAyUo4gosRFSPVxSim3RETKaHmq1dseg3X197siN3a4WTQtK8HKQ67PVQohyQ4LStye99cn8Ws1uYXrvQk9",
  "key15": "3v1qyy1nzbE5TZ3j7uVYCnhEU2B7Mu4rXTtBhwmQSULPLPPJ7rMK7BHby21hBXQEmGReUmfgyGYGrYYu4Auw5wAh",
  "key16": "ydgVNkpHe9TGTPfCygDMuiB7UXpmp18DrffTCKPq6mefLycj9GCjFiWiLSWyvTNbrFWwrbf8B1jDXtKiLWjcXsW",
  "key17": "5Zwn5kWCuBpewB38Wh6yr1f7uer6rxQwrtUzCEsLE3hR3w6KeWhbFdFMrYrQLoSHWbDEXkVf4hAboHbfxs2JAj5i",
  "key18": "2AVttRqeAhKMYEsHKvgFsd3C3bwr6rNeQBv4wbRZbVKETYR7Mnv24xcWcqkErZEsUEpyxF6KHSXvNzknz7wQCGpd",
  "key19": "d8fx4it6e53p9dbSujnSoiARGnJDssxiAVaQgGWDvyGke33RnR2Dt35jnwica8YjBBpHTJCEX1uhehiBEHFBokA",
  "key20": "4gJLCza5gApVUGtdqSFNLoQp45KxfxmYE9sJqoKpHDWzPsHbWx2RTWfJsZ6vdZfdgpAjvWkpErnbAnC5FS4cdHML",
  "key21": "29L75WdebFD4vWRvrwSh2UXnQrmQc4aGwUNHnronmTjdFbrti9NyAbzvzsbonrWNjaEvDriEsyvhKzcMXPX3zGNH",
  "key22": "K8NogwSmdwp8pqPJmAxUE6wVoz3HnfZjywj5dirm1keJPrKVJyvspFSSK8pt3xDKWk5H6aekeWkSbfaCBCBpfhV",
  "key23": "5hKtU3A7gdV2EWgEcMk9tWaDZuKXLzPUU8kqVhP5QKKZjGx9j4oBoDe27oquRjEDB6s3To9VZNeFVgHEfeCkAL68",
  "key24": "obkHMuLNAF4kbiozU26Ui3T4TYNiLqpoP25EnyoeY7hXwP8oHoNmKfLcRfXJmqdS1dxp4fxpBSnXBnbEKRbtsBn",
  "key25": "RMmZjLGE3a8iYFCcdxCpVyy28UgvHRju9Byg2GxEd9ByWTzNRY4HVXijqwc8S9cWNnowMEcXpPkCoQH1dFBfWA4",
  "key26": "2WLEFry12465uWX192rvqDpoKWkxGLygyCiFBu9uxUKH3whNyWhSohtYEkvS1rNaMp7rU53Ty1rcq3ZURaw5Lv93",
  "key27": "2Lj8StUL6zZrdLBWzRkyxNc3xy3qTm8vuDhQ2SCJ1To1b4V4SipkHYcP76AX2YPWkdgCX7N2e5zwrxDWpj8XtMqH",
  "key28": "HGLTEyQ3Xaajz3xNp6NGYNH7qaptyYg7pZHEG39oC7uDD8kKQMhjuwUbYt1cgcnLVisQ62RMaxA4ZCLpWtCHLF2",
  "key29": "rjHxrHjv1LSZg1aNjHyana9G9KBPU5zsKwyirGdqZLHYtsXQuW2j6pLdPb4p6Mekz4Zd2B1sEoq16R2CNh1CoNg",
  "key30": "5M3x4ZT3doVhduTC6fYJEauxUryE6MswawMMfyq8wyQpjLi6yjFBmMzhLKV3YLAMRB59DcrnnCYnnc2MXXvYjMx4",
  "key31": "4nXhRBTAgQTEua3gAgTuHtELsGGZ7Ka7hzRQpusgsEkqJn3fEriYb1trVWAewAY5itBmidmSqE1qYjiM38jsHVjk",
  "key32": "281tYex9UVkDs143CaXe92UgBgkexJ75tHyGMCxmNdZiCj92dkHfZv2Fu6UzAFhqGHUoorqfS7ofmxNm7vKx7axt",
  "key33": "5yz4dHU9bjbVEsN2ykUsvGF8ScThA9mJxkcLu6PkUGE3BwK8hGu5xJjfPGtFvhkKJ7HJ1ZP3yQv2JS5L2Jck8AEb"
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
