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
    "zMsAjmtT19iorqvpEYNwdqXjhjoDGirvhkdiduiZoqRXrzPsSuHysAmjVbXcsifrKgov9ARfQGYxMjVNAytFMYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YoWdZvXCDxQ3o8pMaDL6PAkm2TR1jvWPjHkEmzcZywg4bPcyC2ETwr4tEgEWtQcirPdLpN5896g73siP9QKh1f3",
  "key1": "23ShFVQncmKp56odYsqUr1SsweyouZmWzUkAp7dfFmTwf8iPyXxuv2NYHvW8GmhPcXffBrnCochiFAJitNnJmFN8",
  "key2": "2BS26ZknD22rCqgj2NN1iTwo46zCeqT9hwKvfKuQgWggEsRUNKqkgVhcYA8ZphDTR48g2qw5o6UxmyNzE4Fj6J2U",
  "key3": "mfCvUjCHVU6xHJnVTCAzsCFXZsZeEJgmZAXCeGqr82qKuMFvwHD6i3n2fuTkWj9bcXWkJURx3MDsR3VLtpwuqae",
  "key4": "4Wprr3a2t5ZCSpL2RPbScHZQMLkwb3rJiYd44HPAfPg8JAEnJkZgfher8vA28SxFvRbg6igS5QDWDtYZxdTjEXRG",
  "key5": "5N4DQugdL6dHHm3u9T8qHoinCSu1zoAXepcJWGx4Vg3fQicxFL2qsCG8kzQPBx95TBcZHpTRWLni3qhreqkDV7nJ",
  "key6": "4jojHZXjQRsr4cYY77MDiRKZ1CGUwpcLpGtR3BbYYh9j8pJnCuZTNmQhGLd9veakJgwn6k1yztteeiHpRpGn5gxr",
  "key7": "2aELtJEhLtQGQfPuxZVmQzLwDSgPP6MADSbmY3nJjCSW5C94wVLXSyDgsDyPS1w5gpzWWHciPU4S9NxvWwDpis5d",
  "key8": "3FCuo2FBzqn2tFAX2XKmB2th1FG7dePjiRf8LjbKUuMj9bcMT49yTcDJsRwC3NagBkhNGSRJYgW8EvPFGtceH39h",
  "key9": "31s1vwmqTNJbng6QnG3qEXUH5DwvYthHcCSQnw15VMHdzrAbUJfZQcoHmfWD66ktaNdsjdstqVC7J6t6U193vpCt",
  "key10": "2LABELkaRzhLCSTzuhrkuvVBD4Q6CWfLjkj9prVfhJE2Azvq9cTwJwXBG8g6ftsVfAsfNvoU66TCmV5ynwTcgkE5",
  "key11": "5rQgXv41Wi6247HsE4T6SW7HQvAjxk5mwGM5Xr9ERCsTeaipQYXAxtvyR8QSWTPodsGadm5wVugmjHXtS2NkXapD",
  "key12": "2Qf47CZRssnm72dLUjFQ2X4SgLa7P3TdhyFFqHAqfNPiMFbhQN4bavDUMN98V8dR3hMARG2M3LMDeMQ4McWrR14V",
  "key13": "29Tatk2v5RfJjTd6BKJMsujo1J9prmWXSG7JzgnwsKubfem2rWtdo5tnyvc5p4k1aLETUnh4AfN5B23uNpyQ8chU",
  "key14": "5nWHy5uVnMmAc13B5maYYcgpVTcX8N6hH8wGQptpFgtEwYsnpocPw43V3pDDHHYmGrARHN6rpaD6NkYsKJv8oFq1",
  "key15": "2ugFP74aUE1c76uxWxXnkmEgaHa6Yb2Zh8sG8U1nqPcTb6E7U6vB5vBNYJ6dZdZv4DumbjW57GNRKFrUcenpb3yy",
  "key16": "3n9FPTVSRQCkhTYcTJgzkb6MukbzMg6Tan4ovjYBMDDuYATdpx6uXooUCWPsL5bprJqSDKpU21fwfWkACxR9SooZ",
  "key17": "4DcWX7Ggibh9E4Dt1PVErtGJC7F72inzBTHrkVs3W9mkFGKeMoadbUoxW9t9XtHXq6GXxrddFzuxtS37t1CUAzXf",
  "key18": "4PaSif42RidWpqCtMJmrWhqXmsjMiqZwU8nopXL2QTPX7GCBSCGnX6MrBAY9cULPTu3FNp7ehebTSBduqEoS6qp1",
  "key19": "mJ8aR1kQeTkiWGaHavtxphRnfg4YGr4yFYmRfb7vjWJad5zrqGM6A3u3Vje41Gq1VeR8GhgHTVryWe6qJCt3nN7",
  "key20": "3nfYV7LZjmbPxSisiWWWtcunBEt6R3S7YGapEGvdRjebWiGwnKKyh5v7LpjiZwGQs5hTz9JYY1qKCVT1Rk37HDPS",
  "key21": "L1fGpTJXDgmJ5gx7pnvj8UjEMEEqV4XH4WgnSpBxGwoEgzmJzzSPM1jRv7VrdvhVGPPWHY2Vmtz8BwbPqMNM85S",
  "key22": "5o7X8tn6vRNXeYu93tsCn9f2qqq2hhYfdjDqGpcDgBbsHMt6apaFdbxGPgAhhBt8rgaCwf8vJJqEs7qWF2yMEe3e",
  "key23": "3XnjXd8zfKY25tZpZjUHB6SKAC3p237nhk8EbbgXBdXn83HDMLgHAFHFAU5BvPXRcPqA7u45RcxFmfPJkU1cxR1c",
  "key24": "4dAn5VVXZ2qTCkuD2vpmuemF7XjAFuepPJy8DkaRguKUpoDf3coZUEHAG3NpLLrZSnHjxc4JfjtL9oq2pWiRqU3J",
  "key25": "CTdFur6NRJZvMmC3QU8Puoz8FEvSZ1AgnDCuVUAH17ECPyFeKzCAksVgzjDK7HTVBGaPehzMKXHiezStdtzV3ok",
  "key26": "65AUjoP8RfoRqwsiDy9BQV5kQ3FtUH97zjgVThwbB9v4hy2zj6HcTEwukqXy2DYEc6tj6oAsZ9CVSf3Ferc7M1m",
  "key27": "2x43CDxrdLVyNsC7W7nUaKahqUrwa8UTMi5exWvEhtvrB7kcBtoneqisBt2NY8NfrkEbvQdUiyNTBeq8tqM9uPeu",
  "key28": "5NzdLoLps9vDLXUbaPcw2Vtzij2SR6B4cc8psWLkyVAyGEqHSAdEPmbmJL6EQkxrXD2kEqu1Aas7JuvUUqaBf3nW",
  "key29": "2BofpW5v4oJSfkd1prGuCaekRNpegqbpjKRfRQ8bKJN1ij7HeJ96i7LQfw1n97XrW7jw4WdT8Ur97gPXcCBhodDg",
  "key30": "236Go1aTrCEPGQ2YmKUGzrCXisQhJytRRFE5ofdshZkjvYFWVtrCahVCrLhjgw8zPn7n2rozZGr4dSfRnMRVE22J",
  "key31": "5ZKSVqe8cZjxYWpgrpQpuKGAbAS7tAkW8MAz3aXECZgd1RgBUhWamPVGva2GaHPWLdxLXzbMzBHYFKyej9MH9TuB",
  "key32": "4M7Saf2pb93VFJX6gnvL4i5qVFAMF4rikQVQ6LZvcVNKctt1w9pZH7EvGok7YmHFzbQfn7mXceicSv8ccthNe5Hd",
  "key33": "5PvruAZNjpwSFavPKCxsTiAEobmLu15y8VggYfUUhCMqmantnqzNpZonTrcJxUoHUJexzDeWcRBBNBwJSV3dYySm",
  "key34": "eGRAaNAnPDz9Hccj3ANwDYq6Gc2SKUAZsE12nUd59JkLF8U3kRZfaywU8MgWWkxbkvqJryYrrYFb7vDAD4ZwK5m",
  "key35": "5DxSo6navvaZt6cFCqkLDS4CiX7BXTTqWzjdEAaV7Eub6fPj1MF1iTyJZGXpPAa3o8CRchZ9d2ygHGWP14fAFyUP",
  "key36": "2iekc9Mz4Q5crhEPBW3oJeFQwc7bffPJa7wowuQFCcu9EJ3vhp3QETzUYUDYXhoo28yuFWPWHaiHn7Pz9cHtvk17",
  "key37": "3ASdVn7d8PLMT38yXrdwEREbroJUbpdsCJbCLnVgWge2DbVD6GRqvEifJtcDKwDhSXjCFx8A4FYxi3rbusUCjzQX",
  "key38": "W1SWFWM3iQy6rfJ5xnguqahAKTnv3VzU2fgyCsgRVRJovuwrS9YAF29RZYrgPkW17D1SHtNFfgYPbgZPKp1ZimD",
  "key39": "4kZco6nQm4ZEqru1qjPEi9bSJt6ie84Q7zHt2vWDecNRUjuR5pVVNnS8S3RUeAf89GKQKZPoeweimJ99Cq9KSUzy",
  "key40": "q39Crq62hZ6HHFmGwFsXrkaHJbmUGfEaNMjgey9fTVg92JVg1FHdKRgmBbDnS7ePJfZUaEtNsjNG553rZyb73EK",
  "key41": "FsATddXfyQsVzF1XNuu3jmb4UCxGNnq3dLb5Q1xdYRT84hPcLNaYjQWG3YJvyXUkiswcu6csMthYuzczdsoA3v4"
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
