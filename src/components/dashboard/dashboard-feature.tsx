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
    "GeGPLa8ZVqC4o6SsYQtVZEZnqhJLxGVDtPYPBuTWdsDc4J8NYLAELwBNh1nsAk5Dt1E1zFjkqZtLBLQHE17pEtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VnTE6wMibdWVV4uzNAkJEtubUWMvFKdPqHrZkVSpPDymuAbdjiWroR9AvBHDpWcoo4iDTXWmAqiCvxtG1D3A74y",
  "key1": "EcMKZuZZEr3bXsxoUafN2nZxUZcbmbSeQuBvvt4Zj4L946EY9YZqRwY4RagVSGDXVRm78bF7EPeQh9MAbA7aSm9",
  "key2": "3aDnaLgHpqnLeR3pHrprrHBhEzZWVK5ouq5sumT2MLYeGH6m9nKBSgGjrzMxDo5FRvYzwEbnDn6gzJFU23eiWdTv",
  "key3": "2Zf7NBvKR4L8Rr6S1itMhiBULYFhc4Pfi964rJAZAhhSUBtNP3osqXxPy3uSxqfApk9inydLNJ3sWsy7RzYgaSrJ",
  "key4": "2FkSq7JfYmSHQ4nBEq6X5AcBLGHiqA63XpyKUaSYhgrBGk1DXxhHBjMSb3i2YfZfcnHmNLv7Pg8LTWQkrH7fSn8o",
  "key5": "4GGZ3DXGX3eCkTHKcEussHprtfYoNwHwUSSqt6gMPmej7PPcqMkXiuupuXEgMw1x3xpDs3NwAD8DB2uqFN4qvxC9",
  "key6": "2rj3ckBgwxg4z2btDmxM2CxWxHizXYMe3kCDBUEpR1FTXgKxeYRNYinD8L4FsvpPr4rgx1uwTXg3hbGXLT52riXK",
  "key7": "3hXHFHb6tew9JjzsJDs6PCgoWkfCtRQZStZV6uv2Y5HrgvFEa1NRG9EK1UoWcTfc5BzSX45p2qwzNq2WRkEK1Htp",
  "key8": "5VWmp3qRqsMCmjn9qgh8mGUpSFuMfRpj7hPw6jyTKYPhLfTr4kGRm578PUeQ4ySoc7fXyMwFRQhJcfEY6W9JVHuG",
  "key9": "WgP44yUAJoCdU9iBBizcKjWEeppGgG7qcMnCuDBvZtFAhQKGJLLzTkPgn8zrFW4epX6y8WR3HGJH6nQdgpyHuFa",
  "key10": "Hx4MCSGsBqowAioFTPJCycd5Cjrhu6ypCAB1XQ6Xbo2r37wF69xTVSz38Wvjdj9y1XjbyRteGBmeB9iQEw25bSr",
  "key11": "3to8TVENhdNzJnPKky46iCXnEvSqyutdUru6fqEvuZgkSSjErJjK2nnyvjxKagbdLVt7Hcda149vFnytgq6hXaJH",
  "key12": "1fuU55QfgMyCota3GuorHxHkEQFDQK6JvKdcbaxKpNNPN3WZZCckdv9SJKp5Xep5HQpKscjmxib2DbY7bscSdqK",
  "key13": "23dBnoaJhJj5FAxLmxTBX4zLvNbZ9E1pUtyj9DYg99PmrcAq3vwJhkbtVfiLADTgNCeFS71tAE6tdN1BRGtf8Bpj",
  "key14": "2qBCjhEDf2jEGFcwd5eNgGzNaPmRKEWFqT7uvrfAyvrK4wTwPzphMr4VYiaDjrDYqNymUEpwQNyV8jgu4vqSCdCn",
  "key15": "2KvQd683R93Efhg7gcZAT7iSBmdXWbWSjq44HGah97r5jURCyefiUKwDJZRtzsU4aC8ZajAZi4ozbGWMd12uyJxh",
  "key16": "2eUcLYYseqFPsZnBjYRAav9WhB65zShT5rQj9k5Y83i8A4h7d3gPovADbrQv5zBh3dVUaLrXN6jdePggWVzkfBmf",
  "key17": "wKKMAenjyY8RQPtMn4cMR8iKwChKjxDedB8YTUiusum2L6KyQ98Y4jAzQkm8fcV2Z1inG83ccEUuLeFvEdwVRnH",
  "key18": "3myRwj56SjtpekhAbNT6H6yUVcjTQFmPHtbBkMGWDwnras1x44ZgpY8ikKxFBfjs3jPDK62z2n6o3sXxR7DQgyAS",
  "key19": "3EGmQnJYzjrydSaELb8hHSvES2rvtsyy2f1Srw3NFeHcb3kUwvAvZ8qDnYcL5aAuDb7jyiheRdtbJgR24oJe9hzx",
  "key20": "MySz59XMRzKzG4PzxrrnL53jrHu8aFGk2U4cGPJZ491gXzYw6FsLKVDZadZQ5vZWeWfY43cKC2DDdLNfPSHUiMo",
  "key21": "4Z5rkN58czKPqvRJokj2dSKVZB1JugnSYwv5cmdFXoKYr4NrxqHParA8hdVdZe782rVuLEbMynHiiN6ipy9nEMwz",
  "key22": "4FAyijjfa8g2Rjb6mehC3hPWCNP5n2SV5KKg68YPfDnJ7mUaG5QDfdMvY5w8JN1DQUhzUE5cKV1ZTJ9EPzZ9ebVN",
  "key23": "2tdzeuTxcCDrHP94pMAhwSZCyvaSG2vuitHyGUQ4j2dFoqsPEwDxTKeXv61YJ49Z3xu7DPtur85KkhYF2GuRr6qH",
  "key24": "2VV6gkNrPZYEmq2JMVuPqMzCQXXhinWKWfDcqbHnQ2eRMmvjwioymxRV27oJt75Nv8SS3kqWka8aQXkr9q4Wg9FU",
  "key25": "4ZwRUSzdhigngPCwAnK4p55TojbBR9vorNuYtonp8raWC7RyQUH7UQUZj86XuiqrLfQeZmutc7cMkyxhdqd453T2",
  "key26": "67oxXiHzVt39JvYEUtSXnyK6Ku2F2ZbYMJMssNwnxpbZJeNixT36A1a6UTJQwJr5LWYmscdcYBkAQqKD2jWhhWnS",
  "key27": "3nWk7fmPBAP2e9wVugUnScKKfUNJV6G71LDTCJZcCZU7sJuwcYnJvwrr9ubqx9ssMyyVc6s6bDdbdKfKCF11M8bq",
  "key28": "2UUmqzVVYZHdwcPBLpEJZVnAgJyPiY9FbGAbSCo9fdYVMZUcYyZBnozgJhfoFj1Dc9NkgWo8Scas9HSV5k7y6i7G",
  "key29": "42yHpFJSYrSfvQKuYRSPeUbxGdqeJDKxfewnLa5Vj169uKkWAPSyZFczi6MwbUeVx3zz1VKZFAyPcmtRSpdNTU9v",
  "key30": "3ZeVN6EtGhJJLQqCWCfu5dk3T1mXbdg2j49Y9ZyfYge7PJdkKpuJ8vrapk7MQzsYNKTz6cVy5jAvcrZcEYfTumKw",
  "key31": "4V9pPiW1ZQfXmShEKGoztLqhhLbPSSSpWKQEZiMAq73Ez3sSykYtGNkZ6HkL1rcaZRUz3NpY17S4cK1UbqhKLfTY",
  "key32": "5GXiSn4jtqkDz67YttzUL8ZULyBLckS1rHgpNh13HceRynbehT7eG8jMdvn6LaNH36Zosubtrw5vvhCPk3WTgxZE",
  "key33": "2G2WKUzutWnKn62oyXSimkRucPqxiEgBvebEQo1JZ4UkwpH8pX5zQSFk1BDqZCDuugmEpebCkwzu9w2skcqUYeCK",
  "key34": "4KEmRVVqGZeaw5hBJoAQVDRVRMHjEQAWpb8uSkJ99eCU1ikWBNXNRScd7MwBZeLaiCwc579UKSFGAyi88myuse95",
  "key35": "3FLLLWL6RHnamYwjyun1CbTFpJXEp3bnS7YYNf8u1xRPUG7Jg5LjWu9sKeoXC2khQqMVPqf8Kahzw3dAcKdeAjUf",
  "key36": "3YsKjH1hM8BjWQhXYrjbPpwCxFHCvHG5BfaxCNsKQPjy2d1TRRZ55gUeBhgCt6b92wvApxDaEfDUT89JqV3gPDUQ",
  "key37": "3mmoouTNtzeZc7m1Djk3GPMMMdHm3moXNiQEw6JpKefFZsaq7nGaPVyb9iKpoFEifmC5gvuitrAbyVUydCkPm7hi",
  "key38": "HB2eMmMXmbcxSPGxjHN3xbpprQx66imR1ZNezY4cjKM2okDmuhHrrzDqYKFHCsbF8tvkFhPBSDKhJFbYFc8t4Je",
  "key39": "41vre6cknPtguAxjju1HYq5Rfuw1KuShCs8zkWQymJNRuan6ugJgaxh5Wu4b9hzQLgRqYCT13vfq8pgppym9e3NL",
  "key40": "4XUaN7MzeBBdHHJZnpJXheEhdDFaHBUtXqeh3br1cKp1nbJyhKgDurCmwTFLVr9ZPtsJ5yZRchgbahQjCr8sEdkb",
  "key41": "gVsMypRh25VyyLRc4MMQWBv5Rpoe8fxb7XZzkh8BWFE6VD9F4faPmBaVmP9gXyJFpNWt8mv4TxkCsTmYwe53HBX",
  "key42": "5LRHwPonGBMcYEtHkeRXdGLAv1qHJ9GtrhAKZMvcVp2QvQbp8ppZsXKr2vnfiTFL5gxdPvTkYrhtgMDRbE7K59d5",
  "key43": "4HcauXVAUySZtmMYhEseGWamra81y2cLqMsCSzg6Pj2Bye1Da2M3nHX8rgzd4djQ15Q1ZJ33g65VL43vHrGxf1SL"
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
