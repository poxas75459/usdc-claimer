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
    "5nrPD8bf1hMMv3G3rEzV7FxSCm4tZKkxwATpqCRyLoVB64bTPpWbfZW7ES4Hdg1uyL5Kr8b9x3RzcgaV7zLmP5ni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AGGg5ehns9DQEYeRs5vsTfZJ9qoecTT2DnjsdsVVe3thRrAwUxbqoDmqq3dNp9osJttcRVhEEYtNFaajDWvRkBd",
  "key1": "CofXh8uPavs4f6edUQXw9jVG3iGNp9jwgfPwpu1NxmqpEeBXr2mVVFvHogEfxv8rfnzhXb9psRbTBytais91vWV",
  "key2": "47hb45KNoNktaaBdBsNTwh7QnnTAMQBmi7JsrPxJhGwi16PEKuBEQLC6kyCRegCo7V6nnJuaX78yzvRvK89YcL4k",
  "key3": "4WMfEWU8mTrTMqZuEoY35oxsrGiiopnfzKx4wy3HmjtwXMRCqaLaGXgZ26doRWFpwJePiiYECitPgoXmQdmVSXHY",
  "key4": "4G7bNShHbBKrnMCMWkG7FWSXBPFHzwthMF1dBE3nPPmrNtAnRLtdy6nVy6QRBjyBBSFa6AbPponJjBsPXdR6omwW",
  "key5": "4Wc5LVNNARHDoRZ6Zk17gaHFSQQUFiMJo4Ey8cZxc3F66BQGiPk4nLZMoBw81xc1SwcwgBJAupXj3iih9F1yKKE1",
  "key6": "Zk1sc55AWMdk4hMeLcto6fVWRAPCnDwKES6yPGLbeEDe7EdqWTh4achj6BbhXt9o4R7TkuutcQPrvJYHZ2gqarg",
  "key7": "3Ny2S7SsVo4CT9yarSMMU8MQWRDUAWbxAxnGSsYnjCFM7uuoYfL1yhTdihqoHabddLyD2kJ1MRH6GwJiiLNxHEtA",
  "key8": "5odmZkRruWqvhZRXRMzqmnFRTTDv2cPuYjwPGZFyMqALtYBaWoPRyxLjcR9ek2wMNLAXueZFPzWgY3Dd6JTiHzxU",
  "key9": "46izR6gedCuye5qdqiyE3VqawdJee7KmnxSWnukq5DGv1kRHgcZeREAnzJdgU2yZH9bHxThTYgmbfT3i64n7feFB",
  "key10": "41Avj4suSTZ9JjrRNWGpJJZ8G8WbbFPbwgTPyVMooeNHpdktSpa5KU4jJeTLQHeqP3eq61cZcE1RjMqyN23HjXPj",
  "key11": "n2ordy37WdUayDM1ny9cF2tN9LawW7fURDkkAisXZDJyTH1myfAueChkvYbdRCDyGwrVLLoEkRu4g2GJKBevWgv",
  "key12": "63UMGiBRWFSBBwiDPSPj23VQhhxgB8ycvFiXT2K6MDhpUjdskWkBXtvVStMrZDZLxjcEf94Fntybbz6i3ZrEm816",
  "key13": "2EsktMkBo5adJqpRTRNgLkGdnfhCHp1WKjpD5zr561cootdxgaCQ9d3L4toPSc6eZwMDKvEZUGFSQe5YRjsw4u4L",
  "key14": "2rKTTStvd9qi21Rey3cxRk8rmE8P457iJ9ztwK8PDMPo3kcxAZRAzh7qsM5HSbjsXyGRrrRKgTkgva1DZfr3Hk7Z",
  "key15": "5tW4eRkSAuxAknJscCUkz7PfqkW59FFz17nbY2zFUcdv4D3zq9TadVhAxYLWTbjMjXkz2ktjYADP5Up9fr3sY9oZ",
  "key16": "2VH21em7QyEQVs8U6ZE8YzXEdREN2bM6aL3Kk4uKqnsHkER77kef72STyVPZQxLz1rPMjhoEy6Lk4PN8nKS6zTu7",
  "key17": "3vXNpj1UZQCQ3bZKEFxsZaY6ranDQUXTEjbEg3FE7jFS6RB6Lrx3SSWB3xF2eSGgNjSfWT4P7X76ukBv9yd3Arsh",
  "key18": "4CfcJD7pA3Fj74KW3GBSPSYd5m8aJGf45W9cBqRFNiiixSVbKs5fRAX6qZFHNGP7rxrT6R3jsNA7e3riyFaeWtu",
  "key19": "4jA6p8hwayLP8JKnxbrGACviCgeDFosuA6WvF8ZZVtntr2ggasASai2YYUdRCeNKCkRNKVJfpmYaUtJMXSZQvN9N",
  "key20": "25PdPXTRBHTbwVsbsWxdfbDbXen9x61DUsPr36R87RSJNMuS2kP5nQ8omZvZHttgQZWb5frGR4Paj5a2oLekZnRZ",
  "key21": "5esMG1KGiVGu147qfeGJ8SLyNRXzRMp5myHvmziYhtwyhV9iWG72kpspQiNhfyZpKwZ6KgKtdFhzoJ1tBpY7JwTv",
  "key22": "4rgnC29rXujYFWomgQmab3pDrqFdkEwNWr3zu9VpaVttsRNtvnpj8XXJywxTzQTy2jWSDKbBfzrmFwowsWCvV9vU",
  "key23": "goSoLGqEus77hn5nZuraKCto9AiFy2gwbZLkq6KCB4JcfkwBvKvripM2NRRjHLACbByrJPgzidBouFesFgUZfBH",
  "key24": "2vBA46asjwqZHEkCqs37eGdbJG6pfrMgR3nWMLKzRan9EKwd5QJdAkR2yi9WG7B6SCTt1emzf2b4BrcmgCSWRWxp",
  "key25": "2L7i2hP1AjoxHZEctB8yXDVzxmj2GkLEAKSukXskzZrh2rUanNCCBkbiRwk5uyfkBoptgwSm6EXwEYZbmk9ZX4wg",
  "key26": "2dugtNicwkkEveECF71njFVjnDSa19xR9JN1DvkQCJKo2BNBsg6xMc7Qhizc3wBQbBX9tavEidjr9Gd7PhxDbk5z",
  "key27": "4ZKcuGTuc5j2gExA228Kfkj5BXansmRQMWHejSFFQF6Xb7jrcfTomT7LWzQwRABHAXP3mc4opeetanswPYYqxnTc",
  "key28": "sjoZHRoEeD1R2fB8ike1EiPp8YFEpaBZsVkQSdM4nEQqM8MuUnPzUBvrEMuHhHAJv79T2owjwqP8WkxLbsR2Cwe",
  "key29": "5bJ9NwMaUzgFTuWKX7jni19z5XWzRkYyiA1QFqTSx1R1HwJ8zztef6oM6H5FEhikcuh4GCJDkrXgVii7WsQgLTML",
  "key30": "4X4oG8eyQ5z1tKFRvzMhwBJutaqRt7dWHqiDiBd3ZrKQ3sd3awS7d2h1D4a8tVxnDqq2LzhkpUe6uz6FUECUjbAm",
  "key31": "5maq8PFHBBdTzeW4Kz87jyb6SZ68nc7pJv9g64g3kt6q6HFRHNjNjarWqQGacTP4rFwxbku6saaMHGQeLvR3ZYNV",
  "key32": "57SRn3eZsE62TxKDuBb2fsugEoFMuGrPca9KTCkNJrPS1cYsu9ypecsJrbPkC8taEbaHdXFTemwXZ9dfr2gKMxUZ",
  "key33": "3DhKpuu8aUurAqkEcb6yRzt678HHuNdGMm26JjJwuc1MT7RDeSuCWJBWHHfQWrLXxwfSTovRBKnfXd2uvMULPrjG",
  "key34": "3QMKnSHLNQvPrvST9yhzQugzL6udsHQbYPX7W92A8jVWUdkrMvKbJWQyFhLTc1NftWbiKzPrNhe6heywANNenNnX",
  "key35": "4vp1gKGrsKUXZhdsYXLUHKRR8FUH2vMAMrUdjYjTHH8L5t9WTWUp8QSohbLyGjL3V8iugoMJ5SqTz3Weu2ujGcc3",
  "key36": "yzApFxvHUetSp2S4smizv2Sdfg8uRCzD5XpzUrMP8cpKs3Z3AxqQmNrVJsSkELx2eRN2yCkSif4txTKredvDB6U",
  "key37": "4f84RyRTYRFXiT3YRg67h4zAGZScVJhqj5ojduFYXanbXVhR3xQeCcoZ6mMrbssbPKNv4X7z9FfLwJuxtoj6gbSD",
  "key38": "25RbhYRT7fuSe1Pnonzhmz1cnCZtDoZUPcSf7oAEqu5L7PFd48z925fCZiBFj2Wtq3aeVjWEFrt7Z1n81CnNZ5uf",
  "key39": "EoznUcn1PsKRXhNfBJtthtZDyxbcoughNrLkEXugasXtP17npLLzMf17dnXcG6XkKJ729EhWfgqDu15pLBi6wsq",
  "key40": "3TbAExoxGu4JC64BZQqC3L3TnWt9gYYbQBP7wcYmDk6nBGVjaM6BZgUgvMjFVScFdi3sJkhGP2n5FYGfBjhC9Z6o",
  "key41": "5SjfgSPkiDYEu82WS7C2VrPEJxxVQDE1whRdgYyc4etvXYHuLHg6FenFH2ASGJ1p2WQFqH9t7EYR37hYSxnVYjzq",
  "key42": "2cBMDg7WhnLicwRnfyCjumAH4ZCftA5UiL83piNLxdf5HFp8ZEVQCEKtF8ZetGKAETGwZ1nnkdWG4QLd7HW2iXVa"
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
