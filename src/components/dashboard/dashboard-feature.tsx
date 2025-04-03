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
    "2vSUD8dzozxs2R3hBF6wXe7t7tean3SZYQDb99AV2L2uRGSPZhyRaJtsLm359CZNJfkcdzShxeXvmeM5hFwztJst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEZkorTujunBDJGxhqHipwFTcV5coi5qUaPXjqBMDe4m8kzjrBkfKyYQfg6A9St3toP5ixfmY54V2rJiT3y4Ven",
  "key1": "341s4xRWGYwCYacP9P9EK2BR3w6nUAwKHoqDq3B3ggN62xrds6tgPtvSBfeMWUo6wgqghXFqM4h8FjDtFXNtaGwv",
  "key2": "ZoXRXxXqoznqFq6Z3qKrJDXESr79qi2aKjHBEXSwqTMPev6ehKf5fr9otceesLUPMXZZcsYJzvnR8beDscjucan",
  "key3": "378BD5WTAPHh8a8DsAYNUZX7A5BFQc4uptNk8kaDcf2Qd5GbySBpBwmoCF3QVUCagJRVzMYrAQsr28ifvtgasrhY",
  "key4": "4U6kpJRGqNTqvpZ9ut9KqAXGRDYkWWrcjJx16PSANJYBaN3BhSRLvf4h7xAibB8dVtiaE3XAy36ZqFjaHmmGQ7aB",
  "key5": "54H8sTNN2i79aYyEmqmJux5VUu4p57Vtf4AE58aHH1MtZXddkuS7NPwM3qzpcuJnYeLoyeb3wjfPzcUrpba8ydWs",
  "key6": "2ZanePFt1QmbvN7NDsiLrC5kdP9GnyvJw3v5d9dmPtaGm9M6SewRyhtF3JQvvVBuvWo31hRVQPAy693jskX5HB3h",
  "key7": "xAbKr9pgMRSqGfVVRVX3Nnepxh4YjCb1WvRQbnG9aCJ6wNCJyp2CiJdxKe1h5uT5LzpTBW7iN9DhXhxtSjdEEwz",
  "key8": "3Uo1cTX1MvPokaNPYqMgJMwmKL7xDGKPeBQ2scCphD7rHT6o9bFjRkaqqRbyQkGXJsNuyftbbzAfccBpzG9E9PSc",
  "key9": "f1TxE3j5zN8MJrAD7emzyH8rcFonJzjHtAvJHq1PfkQwJMNPQ3dCtw9vAqaKKw6DjEtc3ejXmej9orjHbCUXxmV",
  "key10": "22kmsuBAzn3PXMZD5aowQ2CMGvG1B1uMyFaMyr2XPX2kVLcULVYVet1vPsxt4XfNxZA68du3z74rrBjXEugX9dur",
  "key11": "9VqzzRN2sJNprCPyScsbW8Fu2C74TSvywJsuRsYSeTuCy8wEYZoAjbpJAMBpZJmooyMxw1WttgKoNabhgm9M2Pk",
  "key12": "3hZHcSbL3PN8DMHv1xYmZNWoUFnMyqUpMYC5nai6C3Wqm3TY47rUn6SQhJevBz6y5xMZD62EsemNvURRv5w6HweB",
  "key13": "55j6adp5GoCGh4G9qD1DCmXcVmLEZ7rU1XgQG2H2rFzTRrxjJdfKGWzztmQBkHnHYnu5bfjhFSzXyeJ5ukEMW4rN",
  "key14": "5oy1eDLbPBeSVt6do9nqUMEuPdAro9tQ3rCs78Cm6zhf84wBA7XFYvwxdvc2KYbc4pPLFaXo2Np8dQKijSYP9r8Z",
  "key15": "2S3ixxanJPWGfXiu2113ZVhHnquZGLn6LgsoVVd29ydfkNfHdH7ekSE1jkBDt5wWkaqEV6qhf7sYgEL12iMGpbSX",
  "key16": "3ukJUygZPyG4mieH7NPJNmJmvcPTC94mMAUqfCLyRq8FYcoKdXAwywjU7qoEuL2mV1show6reaY1g1ZqRdPNKf3H",
  "key17": "zQddZPoVFiVq83mVrH3eRAgobLYDsp25LUV6zdKg3WfarwKkBWPW2khLjT3WvmactaqgZpQiQpRZc3Ynigy27yd",
  "key18": "4gojeBransQGxg2H6kk2XQ9esu7c1MhfNfinULcU8NJ9nYAkQYjeryLmimDzusSux9LucFVZvZU4kXcnKRCQqkCv",
  "key19": "2bgyMajCjVYwhYHd7Cx2RyYKjXcX37jCQVYm236Xk21ApZ81CchDSuQbTfRAA6paxMhYEPP6gJBsNujrADSGyZFp",
  "key20": "5a82YZL5qyp2tjuefA1bxB9KjuTxfoHy4ZjhD3KvAQvRxDiQkkj57yUoEcKTq877sVdMZSFMtkVXR4ANbqVo6sz2",
  "key21": "5co35PYvN9X7incSeuJaCqtkGtGTxWGNTstfyjRG8jnmwtqMQcGYSmPTummyQt8bskeKRLTYtbuP97c8YGwj5dYk",
  "key22": "2rHwf3bdvDrEo82Qso2GsR1skn4vQMHFv3XYR1R1j6f6o6EJrjeWHwNRr8wq8sXFvG4eRpngj2vtGpxxgyLFV5tq",
  "key23": "SntWn4MTEJwrQgBmjRa8MoZEQUCjNBGkEieiM1YxGUhyGbKww6hRqnWzmc611ccMn59Y3Rr1Y6wSjFQFHKtx5ML",
  "key24": "61fsNCo9BRrJToAb3V3dz96VhQiF4kRtdJboEguGfpBUAqqqVxYUEFLSADaYbD97t3kzA92NVF6893PQj85bp4B3",
  "key25": "YXuqEFVgqZCKzvPwPghje5qtRMHgyrJb2B4nL2dE6vHx9FQsKE7armSzd6RokmtLVrDvnX6NQvHp8kcnguXfxTF",
  "key26": "6FHMmGPM4j8JRRENvcTE14Vfuk4NcA6FaGWokm9PnSbVMBaZBdTPTHudWWuWUeYrZrKf4BKNJ6Q5MdtC8jYAswQ",
  "key27": "2HQBEdc4rryFnsti466k1smQTA8Rs2y5spYj11S2Pwua4UssXpG2VXN4DmJyNLdz4Vubu1EdULkqMMR16123BjtK",
  "key28": "4VXr38WhvxAXj6xMnyFr9KbWH3Wq7qeA8edNArJEEaiVfb7yndLVNzPW5QEPnMzkvZTQgmZfYQCLQyenXSAQ6q2n",
  "key29": "5EwvD7xXVGn3RRqrKmLEi9PrN8dQjQVgtYHKTnb3oXJnxpWUuTR9fR3L1Q2nAtJzfAEPbb6u5MdPP12QyE7GVjVw",
  "key30": "2T2ZaMLi8xuc9bTfCgBYCiTQkegLcbC6B2zJ5TYU7jj2CF2Wf5Wx9wbwFj9ydhQCRSvkcAvnqZCqogxFwRmBNTJa",
  "key31": "dkTyxnquM1v4zSKGShdKo7es6RX3t5MKD3Wt9BVXTBwwQW33iTsjhfksg62gdyjrCUxC8Jm1CD9vHkZxHsRMtXt",
  "key32": "2ZmJ9gTtEdfvqxR8aeoxAh4L3S3xWdyxQKunkTTH6NsQZbmN2K3jwGi3PvfmgAtmiDRTAUUcLjbC3gtMBBftpHTV",
  "key33": "53RRyEATd6XvDNBm86iH7gdhP9cc44R9KeUyxPfiXMRSW7aHYQkbchxJQkxkRHeWDNwrPPgfpRjRC36iwSypCDaa",
  "key34": "4wMuU38CA4MCXwjM2BephPDkZ2bbRbBfifiV6H55kNvaUVKzpmNhiKGRFgGZCACU5NtWofJ4oXCJ3DFFrYr4acEF",
  "key35": "2gssBEYQqDmSoyqHHj4AiYgjPYP37S83eWTS3bqQARCC4mnVbAuta1hgXHnan5MHBSZpF8StNJSMyHDmU8FqMUb1",
  "key36": "kH6awdeQz4cHUZ6fq78zshbD1nRM8qjUdfqKDGChviWcusnNaChN5Ro2fiVoERr59KRjRbRm8eu1ju39zKmVj54",
  "key37": "2hMyz6gwZuh63YFsgCq9GtQvzbKKKqbefgdREgPVV27ABbXs5q3mcXPuYFv3tB5BCzo3jTmcR7DdNz8Dvy1UqwrN",
  "key38": "31MbQFSUoGYL2Hzm5yDzUg9Lm1wFSekdupC515QKryQyFnRybTtnnQn7kot8crT7E9NPGxJ8Y1sR5czur25e8jux",
  "key39": "2uRunWqXXjaECjDjCnkbCu6d2t1hqAyaVoW9QNg8uguH8hykxgQBWfUuuJKFbpyuiPmR8GMGvF4sjrDTq5TaCpgQ"
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
