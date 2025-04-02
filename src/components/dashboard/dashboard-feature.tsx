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
    "5KfiYvMPBCh8UkxzLNZRjCKeVJPnAvXRNaKyDqLCzdx3xyTiwjwqDgZtiubi1DTW3rRpqzC4JrSBL73G6rJvAma1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3eam2RLPy18Q2BhmXd1BvNmTh6oiB2tk5e7Pnsru9Dmtq5fjyMDjx5wag8yTgPV1xkfJBJTpeR2hJn96WnESBc",
  "key1": "3sk6Xzhy8vZ3tedsXmVXFcy4mWfpJxnGUMzXd3FdX7x85RqefF19yLLhqi77sHKvW1UtK2jX5RZRLtwhQZ7FEX9r",
  "key2": "2Q3kxmoeGfQ5yX3yGEJsGS7qStqeKVb4xdBuVWetfMVthySZ9iLUzPtcf34T1rg7gqK3GXkc1UFMjia3uknWMmvw",
  "key3": "3QD3zrzg7vjqNMgH2F2yyFEcBaRViGjKKzyUd5UqmpgG4DzT2VyEjyGdBwigpCvqswqeKRsAuDYqM2pTWquLCEoR",
  "key4": "5VdQFCCG6qBCrTHvmbHoWgSU5JSfqzXz8WHpoxMuEVnLR5SfEs2y5iCmsxLwkAraqqHKz1dBudfV4kvPiBxKGJXn",
  "key5": "MmjN6FDW5u92QZrco7QxLeVQczqnpj69UWGzAYsJxUQzN1yzZhWtctB2WoZjydZHaS3YhTKVbaHf4DDVggMZzSm",
  "key6": "4TYCNjQx2DY8WP85umR92MxmZpqEc8JxqwT5KPbWZH4KmEvNeUVQ5MxVFJZhGmFqba1owSEwuHAwKT8XAeS2iPhA",
  "key7": "2uLNZBFT4bAkH3z4J6zSxrcJZA7AKJjiebukP2fWVX6UF5m7m1eHVf89iqN9NrsgPAZm6yZQcXME2rgb5B3jzrEX",
  "key8": "4kMTfwgMei8LkJVujumoiWz1kANmrLwgBg6SGxD84VT4UDKUGsZyZNHESBBkbv2GJUTrhfBpa3QgPnATqqEspGeK",
  "key9": "4mPrFQz1uzagdc7crpU4Q7Giw2Y9gfUsUf3PBCjBhbP2pqncdJLrSQAhw4tm2XsHU3zAYXTx8wqFZtTYWTScQD8L",
  "key10": "231cRzJpujvK1KyLBTTDFMKbbeFL9GsuhnqydRpWqUDnSMQsq8KX9dwyAGnCgW9CN43a9TVs9vM4N9MLkoszEB4s",
  "key11": "4AYczRD6WAjiB4CmLTcrKTYV61pwB7P4nTU832ftUTZAULAxoNKLR4Cyr6Tv9NemP8Lcv2PPbP5gqkpGbuQ8STdr",
  "key12": "2hmkYSTLH3QCiGD7MvxDtZ9nwMx6gFUxWukbWKbZQHnhjTMziw3mwfoKqi2L72j5GNc1HDXkz937DmvEjwcmWXDk",
  "key13": "5uutLjzqx88jr5V8Z1q2odRKDg9BfrUvh4ZFYJzKrVwMt2wTX57wQFtKAzrni23N6rU4D5HXmuZgJiE9EuP7frBc",
  "key14": "24JVJYFEJuY7GpbthM7EgPY9NJDAv3ChWf5gyoqZ3cVYotsXVHZjBMCgK1uXxMMmNiKhhmh2ADevKRorNb748n31",
  "key15": "497tCU7pYx1gbRayYr2ujP2zGXNg4aCRoFaoGZP49adyxYdMPxMWk21PUjmNUeJyGQfooTxPEgDs6tzVDbC9BGzV",
  "key16": "2rNTjMrL55f9hbkit1A1uTJ5hPUvc6wPexr6HnmQNc6K4AfwDv4AW8xEXC3cG66LKn67Fdaex5YvP2A8fxskomLh",
  "key17": "4K3vgxwhgF3SJbRG6XAwqGAV6yQBREL1CU8EWdLV4GYQYDVzL33EaRRbXDspZmTxDQZjeXmWisFc1fHKQ8kPghoH",
  "key18": "65tDkWY1p4mXPEB34UVwp9TH6pc4KZSu9jyonma6FKRQW2i9sWC18Vc5j8ZcgnpakgdEAHkc7mD76qc1GgaFW7ce",
  "key19": "mwYfwHNp1SubfU91ruHw9bbxmH4EQ5CeLwJSU5AGwfwvRjrDKyXhcr5C4i5gL38XXMR72sUHVcosVc6abHjYKws",
  "key20": "KPPuADxovUgDb4B1czoezsPnpfEjFKxSd9Q8xTv8dE7UACcTdUGeVbAByR9rX7raDRpKANFYPMjB3A8eHGXSqPr",
  "key21": "3wnwngzZefnpp5iGRjZtDU7JzRmBL1nNXfPsGaaCFmnWKcAFYNYhhEoAZ2fjVc178u7Co5JKb8n5ZvxvKozppeMG",
  "key22": "KALrWJcgzdcokpnc7xphMw9Wkm1U35KcU4p66KPaQfS5JbHEoQXdWfKqRQWpScEMGYD1rmzuPxorPb3e67ThtmH",
  "key23": "3QLVSpxP1uh9JWv5vVU2uBRQW38YhkeVJKVrByT4dpuowmCTcQtFVn2LHFWK8BpAix22tVjkaCNeFJ3YTNBJyuCd",
  "key24": "2dzk8yxRVmtAHXFy83Mp2NxEnXyiQUvB4xG3FFVL21C2mhpj3bBYwfQPQzWYnywbwRi9aJC7VfStZfbCezvzbrNN",
  "key25": "3ZTCgAUq5tiGLGo6vCLsj66GGHPZdGVLD4G8zpNZ5b5PS4Jr6ubHsBZ2ksScRRS2oDnAsWAjiH6VhywRmPUvYSkD",
  "key26": "5nsXVudWdduj1J9DdR1bMcGV9zYy7k18iQRiRPhpobGJsc8UQNUhjd6tKDJEvkH5aPu9FjfERNE8pi5C4SmVTFzC",
  "key27": "4etEotQW6qJFcFVcQWBpxLC9yrKVmK6qBPZWzVyRxU7YfKWbLAu7P6RVS8aQ3qGnHTNAL45Z5EfMFKC1RW9hfp7K",
  "key28": "3J4yhexUqjRnKdiwto8V9KUMBmYbnB4YihLravoxUp29beARdfBxZve4co1Hp2Ven53hWcViR6ev51TFq3GpBePU",
  "key29": "5ppqN3vRWoy7WMsAnfxMy64CMnjtkt8atyL9BhGyy26niSKzkkDQ57zEVpq3G4EGBuFsgryToSG1YsejBn7E75JB",
  "key30": "24Hf6LExusNQfe8tNHenkXkbMVPWKypRF6cwonYNsowrZueXHnJWzovHRAMFs9CuKT9fFXq7strxS2xqoQDohv2D",
  "key31": "5v6FffJT87cW3iKgcLausnznEmraTvPz4nNEZCQ3JcM1esS6W232QTjrJ5PVAfgWRqQvhQTS9FFQYvTKZZzoVWpo",
  "key32": "321SrdEcazKPjwbRwHBApcKSb6u522CPWsvBDdK3NMsBRJjBoP9woF2BBemfcafNYGtcx869UjczR88jd6sTX7Ng",
  "key33": "28GBvVBXM6FVEfeNgEvpAZx8ABnhw77rB3REYaXdEVwuYiMT1jVjqJ3v7Z9LxLWhuQUaPcivuNTBjsCaQcKZ6GpC",
  "key34": "2xkQNn3BD7iAEWbq7xKU1mBbH2K56uy2FYHc3XVG2L4nA867GE3KcSnhhVPQShjpdkeftsUYJbdHfkqcsWSKgJa7",
  "key35": "5tupUed42T2MkPN6oFhx1RU1pidvtof9eV6ZCM8a4CKxJ3NQtySKpzP4UztDmYpL8mRxaMCt7qg2mqQBX1zZKJzZ",
  "key36": "2LgJTpvwJghx3qr1YAmfhMYxuDFW9yD9d1dm4je1kU6tKaF85tXJPvRbgEuedXnoQVCxNJA1Fa3c7SFKuTv1XW4V",
  "key37": "5HBswbzREvKNWRcVupNrBH2PRxe7FaUoqUR1fMRbWg1qXucyW6zTACSfhaLrui173tssWpcUR5VkESCpSvQxBGVZ",
  "key38": "VDTB6gTgDF95uudigbypig72HzVbBzpmdreVgD5TzHJVxibLhk4DtQ8AZCpWU3KgDybRus23F8asbV1X1HQfoTV",
  "key39": "34MCr2d4AFM4EmTZRR9D7JbHLnYyWrNpUPbEcDM76KzNKzZNGmJrWrVKSntfuYzqdRnMWvg4aaAfUqqp35PHxpEn",
  "key40": "TEZZ7PrSTH5ptDAC4FyJP9J4C53hn7y1FjCx4owEpau4yr2dGWwtRQxVjdAEPbkiqnU1VjgoHpjEcZdFAiM3CEg",
  "key41": "PmYZmbxcDy5msru2c45PgWhAZYpowP7D8E1k6kWqVVckZ498kjBTtaxwTgMkSHeusR8JAjXEAnzFXiUKuYEwYcN",
  "key42": "1d59r7cHtfZbmBN92MdjqX5Dvz1dDEr1eCtn9Hq5AeKGpzKVqqnJnDz8dNKgfat91DKh9sgDG3kgQihuEnHNXA7",
  "key43": "3EbsWZYQa9FK5Rs27j6FvDRDC17nxejcXhrKv8xJL9ozL28JgacL18STQJNrHQKoE2RqRBNQWUSaXmVaJLzLhLSf",
  "key44": "3qiS9qvViKzQ7eeUJxf8nRftnTJdDdLKxbkAWNwzcYvXevRaRpVf2tyxMwNeds2UxL9F4FdnosmwJcSNgNyDZLSj",
  "key45": "jmLZZjjQ6AyM3VKcZXVBdxwJnqKrfyQjUWXHGno15E8Un4LzfdH2hivF7ksFRZD5xoEEdkynWTyz8iURw527jKU"
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
