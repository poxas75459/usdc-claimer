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
    "5v4SL6qFabrX9FxqSh9GnDjt9MyyutuJTkER6uPjvrgvBde5jAPSwgVTvhXdeUQVeHjLFzmTNajGfeSX2tQBf1bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YAjhc8ezNT8SZZGg9KjtYpmMEA2jvuVAdPEMYrUiWWFKDyrZYM4eQsFrf2URCQnA2cjNSQ4DAXovugbo99ixJto",
  "key1": "enAY9Cz9HTzA19hRujE84wUB7kzyijacEErZzi8U9NG1PpmG3oHFuVzHEzTyMZmKzu6ywinQWepQeeNo8hq4C8h",
  "key2": "cGvE9Kfeij86yR4Ao9JGsxhHbtQWeieTwT3c2adiqRFHMZyK8deewfRH2C6qujH8xw3aygiLSFebBCwxLRacAa9",
  "key3": "5DYYUYrVLbs86tfvWkCuo685Aih4h7U3YfrASWg6bNi7AhTsBVS16ZPfUMvd887A9MdX3iqgfjSovbC9hbD3eip5",
  "key4": "3V7sQpHUbiAhe3i2Sm4zPRLpY9YWbYdjzHzctDtNB65VzW9nHJpyGjv9iEG4DGSRv9Xv3Ef3ZmJBfUvkAYY1HoDd",
  "key5": "4r14UCef2GgUczBA11sdzL1Ct18ai3XpcXUrSQYMcDVJ34GGfPSTGoYqoTCYBm1f9eWEoCthgciFZ54C5Y4ciyBV",
  "key6": "2d2NAP8mamGnpPVCmyvs6gsccGe266S41jiXEpUeB941C61sfe6wBtZskaydPq6YVi19QaiuxKdjxmq6LvqbjBMk",
  "key7": "66wokTrYmV8D8ZXKQbgm7gqQu7QTiibJhHD8qZmhspVRTs3Ttu33jaHptabAv7gbk5sRH3pncuBqwavq44REb3qW",
  "key8": "RojVXWUTF8hzzjkkqFaGVLHC4VgJ8z23KxfEKz9k3QWwzAQdrE4Sy5xzJZwW15zms8Z886AvcrPiW9hVK68sVyn",
  "key9": "2Za5QN5SsmvjXdZwHFd7oA3kqu3uGb41CjZh1qmnik31uLado6Kew2fpmhruCigjXAE5zZnFfzC6AZFvb9baqQhP",
  "key10": "5eVwYTBHEgYB6X9AuzYRMrVxyLRw2KBLutdfLP5mTF1NdJusVBk5iE39Anb8HQ4h1mDgMWEVrpF9WAKLJiuYd5xH",
  "key11": "5tiYndRk1muHurJuRGnVddXKRJ6jcxRdkkQcWqYqbkFCc8gTeHVf2LZ6fjezyGKiutcpkL8inKeCYhfz2H6NEbkq",
  "key12": "3QrabJ3jhhi4FVukRhLXjr4hD4a4UVcmD1y1tyBsbK5NFKU5ej35QTsp1dpCTkTZzznbJRkq8bvC1h7RTEbJLjAx",
  "key13": "uCbdctNdW3jEsQzCNAjYCbtpkx217Z5qp894UNQzGENHtishh7foxyyuxKq489hYq58dhMnr6oiVsWdMEa23jSN",
  "key14": "5TCDwzXr8SDxRcrL39v8NXwfaWTBXwQBjwDnJkafNQPA33ypscva94mYpoPGLU7i84BUt5WPAcgyAsTWCkcJPYnJ",
  "key15": "32TERZdCP2Z4ETgitx8cPzXAxGcdhq92tDLKKHgB4Pqb2sgdXVDpwjw2eHRTFdFBNfpXBkaJ9dBRkcWf2M5BeE2D",
  "key16": "kCuan2LKUNcv1jJhBfUqs63mhhxMq1iPr9HUELdMFDT4vC8QyKphaBCXmYEMiQHipZrPpuBp9n9P5vQwLj8P6T9",
  "key17": "4XMqfToriTAvfhFaX9Vymjyo5uAbcrBuayeVbphGeNWjkm81cAyLhoog8dK9tJZQKcGBCxcUNE7acheuQ5vjqWi7",
  "key18": "5aJwKdfkVSUjHXrYftAfEPZvLn3W5uHhS2HSZwwP7C2DEpdyMnqkevNUFkxwXWn9ArScGE7hX1KrGGxdoXGPf1EY",
  "key19": "2j9irZLrTNXqU9SqyzAagFiDSqpAyLqC6BkZFvhB9YgRe1DX7yij7w6ajVNrYqwqT8M8FJkFu1DaV165ycWPGBLz",
  "key20": "W1C4uB1MrARb5ivtxUAyjjxSrMUTfiSq38pa6guMqCDz5cPHUVeQ2XKfE2KgrazZvWFFgpmR6DvMhioRV3UAvpw",
  "key21": "2E4Zx6qrobjhSX8UzzKrQTwPQFw1KDJYHKh3sb8VKt3xshAc5pDBUM6qQJqLCoHgMHgRGh4cnFPJ2mzE6pCMoJM9",
  "key22": "3wdBhXQf3NyuQ1ac1kPpm4tDCYaRXMHuMp5juSzMSEXNhEgLSkxdDsmrAKF4BF9VJ1fEqUSu3iMr8kDPwmgwff9n",
  "key23": "4udhdTxQvgZkLkx653cP5StoekbhNdmQp7GiJxypBaKfGmzsZ7HC8qdHDz2bQtmdWA4nXjboi6GTTtoRz3u6M5JS",
  "key24": "3cukfWqtUhRADKAKkQ6szj2DR5EJN5eAk6osgA2bwETee1Lb8dsBSHEQxcnuzh8a8NWHXxzgNmG4h8Yke8armB9W",
  "key25": "3to3FaTzGC26NVL87g9KnJS64pQHX4FCSegaNfcQ4597RtyxBZT8EKnohRfqsCyzm14HQbDKjUMJJiTrW9BWpdiy",
  "key26": "5kyDVmVDnrxqB7Et29maCR5iJEoUMs3YMmPXRQX2MTmkZJJZLnd6Hg1FnYK3vCFWmViqPuh7re1VgDvK3oUVWfrJ",
  "key27": "5FEKNx1tzp9W23RVF9yeiPJwuLMaBtBqvmNE7W5byLTGgvRuCPvieBMKYghYmgNBj3nEVajyuwZJBGXec3CsGATN",
  "key28": "3gyY7UXFCAQBU9VnzpL26WKmB1tpU26uNbsKc5iGJxs4EPGpMmRe59fXpgnJd4VL36EFBPsWk4yNNo4e4RfqRcpv",
  "key29": "5Ek2UcpaEo8UJHdhTwanjJJd6Ygso6Zpsr6sBfUssqFsqm6Q8ZUdHGoXt4XE3UaX21LfPXojH6thZpAtFdaxoJdZ",
  "key30": "28EWqBvF5TH69s6meCHQLD2CH5xTE1rRnzE5wXL9a2nyatLsDzKTkL9PgYcWJTHe1CzESaxuFMtZvxdnwgj48oks",
  "key31": "2yFoxZtxLXrh9gFWe73wYK3firevpBZXGH3mzwS5uxdEVmqcER2ffnWr9DNYCdUnYE7ud9Av9Fo46LDQzKmxDkDy",
  "key32": "3W7EmhNbHekJs9frJ231t8oYTJMiHHX3VRzLT9FV3GFn64f6gDavYBatuGsKb8k2wZkDX2Laoo6kENudou1NFedQ",
  "key33": "3zN3dARLU4gwZ8B8ZXxG2unSCAGNmC2Ui64EdG45kPd3hH8duvmwV7d2iRhXDn3J6NzhAxq4mCQStE7TJyaLnice",
  "key34": "5iLNDPdgY5WD719PUw91Sz7c15C16U3bMr32iwuZe98ug5pK6CYLKnjjG6BeMdJnMzLyMwp9QQyNeXMEm88iGq9L",
  "key35": "rsFJZBtfzqVZ8AHhgEC7an6bxUrUzyTaCmHABjM5NFwrj1ARnqD4D6vKg57ZfohLmE6tffx76jLVLzywh8Bv5MY",
  "key36": "1NzRCM3tHBytJ5SfcLhDaVE3oDXwaCGwHmGVJJz4Z5eNVrZgfUmUekZBngGQ6hmDK6nVnW9kGMeAakifELcaT6S",
  "key37": "Fa5TtbdZtSt67h4uj5ErGdWsMWv3fzYGi2r8a6GRVMin4JxwmxoWBvn9bzgxKeztWCTKbNsBkGKw6mcCt1YAfZA",
  "key38": "2Ddj92o2k2BPcxk91P4FwNai7bhh5wxtPnZrxmw1Nwqyek1qToN81wrbByu7W4HezGSaE6TnUJNo3YnguH7oc8Dx",
  "key39": "43B3mWW6vcjrVUJS2M9U8ZVSo3oEBs2nJ7jAMpvwRB6hNj1oBzicAdS5Dhaz4hM9zcRJFsKUb8jMRLYPpRpY2eHy",
  "key40": "51rAUM3tABmppQyW6ZNPHj6R4TLRFXf4XVGZHmHfQCGEwPmr9NZvfaQA7Gumo7bjLrhm7Lq8aNPETTR2BZHcH4og",
  "key41": "5TRBhT4NDPjSrdg47xcSbXgZ4T5NkwAEgjZjyizP1efMgKPtKsSVhsSugEPonbJhmmt2hbeBU9kZ5FvatiYZzzkr",
  "key42": "37EX9AL3XDws9tbb3ULpphVuQSatamYgsb2AqTjdcXnGghAn7LuW8tUtBy7SRCxrKbfFJT7PxaNmQUdRcaqP32aC",
  "key43": "D6BE7rDsar7ZgY1VwBM2GaVdyLvwvZKzf6sBDjQS6HgLzfwq5hyuG1jQSTaU55tmxzcB1CMM45fdHK8LNzkh41o",
  "key44": "3mph7a5X8jA4uHnBvSjrTYgCgToWgwztCd1ggBtJRR3Neqiic5TS9Zc2GTRbVP7dxzHbDGhwrxmUvRS6iBoAeYXC",
  "key45": "2KsBinvH2e2XUjmwEWHPR2JjSuQxo9zn6mEZNC58e1kDNuN57czewBi7b9jLZ6M6xtxYsqZvW7fCzgYMGPcvjiMP",
  "key46": "2faBghAuDNvPYn3m3QRKXxuaeESWHnyMAUVp6wi2gRwKbeuF4CZhRc5mrt8fGpVtqDYHWKMVXZTAgfDzxTeN85uf",
  "key47": "4ZQykAbGaRuiNbXe1V3dDPKGuJYRxqwHVdgXtaQGvwvXJzhghn9G7qkVwcKZQRqkSPLdyPwwUt2hdAEXDCybuvsA"
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
