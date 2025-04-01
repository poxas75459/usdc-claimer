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
    "zQSqYnJFKjYR2BkW5YU1cjzb5gVBwV1S8AgGr1Cnet32Xa72Wuac5Sm4CJee3cog2EAwAQuRRWxPG4XZcKTi7Hg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WzjbHM83uWr6M9wggk76jNykuyh4MhESy7iJz5A3LmC7LAGA6AcEHJkUd7og7PY6AsEGJtUgcNqHNiCnWuVRDgr",
  "key1": "4AwBcYvR4yML6Zpx3yc5kSYeB61SWwDF3xUC2JTxeZhbSHxFxsD4y5DQPjNorbeekWHc1cE2KLmCBwgG41W8sNqc",
  "key2": "4rB9xcbA8uTHetvu4S2UxkYkmnJpWnntf37qSaSVNM9KoAewGwLdXLe2ERDGkAcki5ALiGQRBaztsTqChcpvXuCG",
  "key3": "xe8LtMFtWpsV3Rsndt7AXAjDLZXsrvkaAo6rJYWPSs4o9YW1MBwgCMyrNZ5jjHGn7T7WAti8RbUvMoTTGgbxwWT",
  "key4": "586yEotsrK9EYtmmLzEDbQkxcXzkhSTzoHsDdw5vJtikjjTMUWcQCMH5pyYb7Cpjhqjhud1QtiKw7CeeUivwywJi",
  "key5": "2cZswji1XdL2kXS4UdDP31CPGVMjySkrLrVAqLiDTQb2asQ4NzP2jrPwpLZx44mFuy8aQySxnHHJt2edmrxLgk13",
  "key6": "2JjVgB57eWAbtYLHgC7gV5vtKgVUSo4xxRbFsUXDQcmEuRPzbA7on6uWHtXHVeK9JB5gri6GqiwjLrFZMvcLTTtL",
  "key7": "3FotdhCVraUJ7iX2Z8az69R9jk3Mk8spSf7Qqpk3GCsdoPt7TZiE3DtGzkp3Art6m863wgby64926Q1kgXeu2hF9",
  "key8": "3HhL1qf3VmCZuhxKhRo8dZba9eBmRsUqM1MTAgJKmkjpr1wWTUCb9FU1ve2ZurswJZvFZnrKmePexSHBFPut2MUw",
  "key9": "44Nd7dKfxxxoU7tKU5SJv9KdpvjTowSD4XSg2g4oT8frxhKGdyr1YtJhpda7nf8qvpQp74DWreYXBAoTY7q23TwZ",
  "key10": "5EphZfMmBXqJZhKDQscRtuTY1kDJUVTnyrLfqYmpHgNdkYBHBDc6MxURN7HkwykvK2LThANZ7WYf21oBAL7f2Yo2",
  "key11": "5cpACBE38ndhFKTX4HVKYK6nthhYcW3RipZrNjBZbZdv91yE1dpNxesBJ6zMZ5kq4UBhGvQCFRzwQgZubWLk9Ami",
  "key12": "eh2WxZvS6GFwsfFg3E5PsERfUfif7Fk6ewZvzQ3NcnSyTEDoGtWAsPFbcaSuLKRruYYtWFY3GQYfP12wJja4h7g",
  "key13": "PJhrGcgA3sgy8KfidvnA8rQMeaZe2BBZmSm7wCzD489jtt1QTZddpnyoYAQWFAsc5nrx13psv6e1cm1A8LfNTck",
  "key14": "5uwoCxKKL8BXJZNUdXW78K7EqwkuDYVvnzfnencXgiRctrBEYh3AoqAG3N8koHbHnZqC3SCcCjqkq3QxsuWi52uC",
  "key15": "4j1k3MFJfhSSdrnMxHq4jpAxyudEEaAGyFWFMRGekxu1qEWiGTnDikbA38X3fUCsF38knbeUmV8rK2Pxkfhvpga6",
  "key16": "3w81RN7y1fpr9hHMrZpfBc4V7JGA7gXFxmg2MpdJ86YAXtLRvwaKJQXCu4QLXHKnrEXkQYWKTexbiTzpXKEhBMmu",
  "key17": "2QdsCUugakMdVNJBjg387DePLZZBYBxUxhLzVCQJtS92XD576kDvXWKhWxZafY1Mb8FHcvVanJbpkhPMwN7EpX2J",
  "key18": "RWVAv3APTHqGwWYHdxebY7vqcJ9YG1wAhvsgzJcasH8h6Hv7gFztvgSvjRfdz1Umu7GL3HTQMN8JH7UQSnFvkHM",
  "key19": "3UA4Be6HjKJ55q3aenSm5wd1LiecZjLcVbp5f9zntrh7rzjf7ChjmNGBuTeseCFq4kDDYhzLxLzdbGvzmxT5sFpx",
  "key20": "23F1T6trtTYGhjYknYZVzt8GNcNtqxGQcHHnd1R6fR59r3u6FwKr3A1zDV8GUvvUpKNBiV6etqR5GHARSfBv5REb",
  "key21": "TPuVCbhWt1ZivwisY6y13Qs6JsA2fjuzDZZ6Dz3FUpYgQQNUWenSw8sBx92Q2NHffcY7ffGkHU1L5Wc7vUsVBgo",
  "key22": "63NbJLkWpKJEpmyqm2g13TxrY7psorDUaHUgV78RhVynYcFuPoqqju1HDb4nviWTPrt8WkURm7v9rtTFC4iRp9Pt",
  "key23": "X6qT4aqVHvHL2t6jgVubeHuq2bPhH3dFR9cpiudZH9KLktrwRGb2k9J71nsRd4E2GeGBmLSaAtPuuDqsaGazCWb",
  "key24": "2abR3QWewXAeBDmCePoWBvyxBzg1qYkpwxpfH6kQdzuZ1BmpAfN3hexS43j2A7mNdGJ1q9eRcnud7mEaMfqNTV6i",
  "key25": "2g5qqx9CqjitkC53mdXxp1mbaWdqTBFJS7Jjipt22pe8YKV4x41wVmdVagZADuxHb3DyNxsG1zggLSX6mzHSMSvL",
  "key26": "4K6pdr7zxUz8sJoZgC4kEbwNKtFFS3DJJobT5UetTWXs9x6AMtwjrfqNyR2k5Qeazf5Cf4Y98Y9F4KyvegbNqUD4",
  "key27": "4oEWtYqtC6eQ4EFio4Dn2KgsajK2C5V7D7q2HvcRxvGdwVc7HoGRryExKw7hixyjhuf6Bf3UAPbXqshUUNwgnhZF",
  "key28": "35JkcjMmsrfmh7ff1PgRdVC3iBPGVZC53rv3SKN2ebq8Y61s2gQm7H992TauoEknJCrju8QQ7LHV4dV4QG9JDECf",
  "key29": "5AXRxDMXn1z9kD9m2iMtdtBh7XJUBUbhZeeBw4TSvLwq2f3rVLra3wSXzqpmw47WEhM8937bDEzvVXDsQRpAUynD",
  "key30": "2HF4y1eFoVNstGmYXfJWEntjSjsJsER22k7hhbP1qG3tthuykaFB7XozCAgk8PLrkCtYvjSDrEhtVoR4mMXkZVks",
  "key31": "4AQwnxVdTCv3jWEK3vfV6ccgnnaUUdnGC7qBRmCU9GdGXu5ShyFhPWneYz4jHqmnzrk1GzMfBopvEkHkAaVQSCJ9",
  "key32": "62XSo18J7vT4bfCZ7vvLb1CA5zZF7p7AHnwaz5VhrjYo8Fvw8qPMNaryfdgcusHzJW541CF52h1TGDRxPYuLBY5i",
  "key33": "41mT1stJdxzgmiLXZjDx9j4h8s4J1qVkSCrZoiWmhxJmfbQj7mSJZbMTqoefRTtRFamUUpEhTBSpPA8eRinAF8tw",
  "key34": "38t95TH1ye5TeuAdV4T4bdZQn14MbvG67ATx137cjEsGzkrTBxAutLgvYXi2fJTXo1yuhLt97ufY54xEE5wijfKG",
  "key35": "2dKfBQr97PDtAfSeHXMaX8LhffNxzewvsn78Vp5TkPBweojoVr1tvRWD6gzGzMPfntyBWXBec8oaCC72NsUNZzWd",
  "key36": "4obGVNfGZMPdSh82TcsWtrBjjjG8NcfXi57zXkP2J2iLUFyFr9E97gFcemhEYXN7s9hx2AC6qbozAhEXNtnpcvUW",
  "key37": "2RbuZtCpwc37qgovRjBkRUs3rZrQPAzReydXj6CGvHjhqhPpQD23R7wxyuFttEuizWNxMw18zw3MMbYnAnhs986y",
  "key38": "36nZwtQ1NLQMYLeWheqr1XFAKKobijgeqk5enVaVw18aHqctp5iNzsbFinWpwEY5Bekp3Z8BiH33NBnS1VxiE4hu",
  "key39": "1t8vnKh8ZeQvxEF1aY9A1ep1xgB4XQC4XYHLDYyHbvAbysph6XqaF479yTNmN1DCy2UAi6tECHF8EiokQBLdVtG",
  "key40": "29WvdWkRJDcBEsPXb1gkpEKC9iD8c4a1rYrq5GxXFE46ALBqzvyU4Y2sXdJd4yELjSq45VbUXimtAUGC7c8yveGh",
  "key41": "3DPz15bhg3mKjwPwu3a6fGZQrzDQGhLkgEALQ9rkTT93sLbwdopDxXREGjK9oCjFLKaX2c7BpjRCkb7umhHAcib7",
  "key42": "YYJp7LmyfZQETVVSEDTECcs6EdAwcoQnAZ6ycZhBGMxYiEDqZ7eS9hVfXXkrN5V5Dfo1FiFeKSnLUCqAZ5MJdVs",
  "key43": "2wPD12frXbMdhf7wRtAY11NKCmeXHHZca57jomYeR6Evauz4cfc4V9j5XGw9rz6zPcEA6Sav8TebXT5LVGcsCcS6",
  "key44": "599TNP8u4N5gtiHH6xEr2jq3XRYhsQcSS51d1Fr4M4ufq3orCkf8Km9MV4FKPDkP1SRgzmgm6YYXikyKAZj2KqoC"
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
