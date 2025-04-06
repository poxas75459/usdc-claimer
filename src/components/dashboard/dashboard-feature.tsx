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
    "xGALcfb3qbvHW9WU8qL2ryu1JnhZUMwNgiqr6LxGAvEciGBkKZcnRwR2Vo3RyHEWm1gBoMrcv79MJoaYxneHr5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "121LA8AFpCR7LrHW4QGnG3SkAmkDfXQVLJaC4QjGVMG5kRnRd7qZkzMGt7TYgST2MrLZAoHTFdLyhUdbYpV5kfh8",
  "key1": "62ohq8eHA32Fbi3rHuoMPTmDRvpg2oQQFhu47nRNZpGRp8HUM6V5YvfJ1RdV99NcxtqNXqbFTdgWiGwoRJ2cTz2W",
  "key2": "5cXWzbhBJVsgctuePrcdqoAAa9WMP7ttTK7rZnNF89cY1tCWpLhuHmyCwLSUi6bEi28ehbRKP219Qcur6xceWt6p",
  "key3": "ThpF3uDfCKkjhPR6rCvu5pT48KEyAUBKW4qspQwrRFsBPuBiRUqiN5DPAifarSt8MhxDvkFjPcH3gBToLfGecWw",
  "key4": "3gkTrz8rYedw76w2DfnjByQqMCi8ndSE1u63DnvQ1NxmoDCsXpmRgfGCzGdDiGXSZxW1NtXwgPENuHguhAAvebGH",
  "key5": "5pWVt9g4cxyaYaeEJubD1y8wPe8ZyEXUVUTDzswmHdNVWm8Jy7bAXNrxiKUnrE8A5jF6Tzky5yZNg3zC8tzJqSfm",
  "key6": "4y8UeSuYfz4puhgZNhp2BWZUUmYAVGoGQDt1As1uDDPE4cCmwkFVc8WeHgUtYsYcieimPUTJphbATyTCPvHAxwkx",
  "key7": "3gwXJCf2FjPHJBUXgw9whoBjjnHXzaFsVTja1BM8pqxzWKtMjwbAvbvQSk3WsXdoJXsKkP6Q2uc7oA4cw8j7YrhG",
  "key8": "2ABa5L7T9HMJxr2HTTz7gPMY3ERZrwVWrKyhJUC6vGaSq9oUcJTG2b9G6qP3hfqaLYCd8j9aG9wed4ySVpq6pt8d",
  "key9": "5t51so584y88Psc3GuuHkjKqbHAeYc3tkA35mVLn4S3RbFcXtRTWx7sDDLp2pNbdkncE7HhgKtDNDgX1qMkxn418",
  "key10": "47NBWaKqeJF2ePqiQk8DKjYM8ch5tPCyfaDg8eJLbVMvySY5Aau7X8zCuFQ4fwGDBXZYoDB2zk5QzXAr3M23Wyez",
  "key11": "5jeGfoL5QSjzz8zDMm9XD7UXeowFYiEWYgYVNK289p5AsLcUzaLJrnJr4GcDhTfoEs4J3MWwN46ZvVsC2xS6Lg6y",
  "key12": "4yCajE5EhyaufAoVpPyKSYchD5KbM6wmDrixypN6sgeuwhQ1Db4xA4RXxq6LvwuwbigKRjFaSZxeAj8chXpHTX9",
  "key13": "5MqPWVQio85PSUSrdoRQQ2bYDzfLkHRWNjQCrQQXkPEXweTGezS1qXwbcVds3kme7Cih2rGMJsb2jmn2Ha8gQxNR",
  "key14": "5VJXuwizhQXqLf1jr5ZXB917pjPpxobdeahDC4gZPZpyFGcbWWPocS2FxEcWsYYspUd5zD52R9fiAghHR3TFiMgB",
  "key15": "Nh1QzpRLqbgFaSg437hr6RcrtRQcEoX1QwZG1Tx6dimoMA4wBbScA48nTKwezHsDB4tVECRqfkQaacoDF4gd37w",
  "key16": "341QgJED9c4m83kkU5bhy1Epmxbi63Mn4r5UCebYk2wejVu89JVM91xu92QWEq35zm9AUZHqJsJWGEAywyXUzhBt",
  "key17": "292pA8bnqSQXCfbYkAEpepHFSEtvssBLhAZCt4vyoyGbw4W4DhaTyg1ww1ZVx4Pg1xnLaePzm4gvKVbi9fFKrWdP",
  "key18": "4hh4sg9ErcZeykdofsjtDUid7fA2dZanMf5fNURdUMgZMcC2d7fE9zkocHtuVMtH3tvQKJ44q8biSuPMecMDQ9f3",
  "key19": "5RTYXTstmsnHRkmSVATQ3xtXrXgnTeUFLnihA8Ce5Lj1FS43AX8rT6VEcJ5fDqQfxjUdJje36SPBue85AVa3EKDH",
  "key20": "2QDiDJgNQGbQGVnMTacAZd4nqhHRg14K5Eg6cgmM2qYxFMfcJWoxMWZXVaVZbX6NywcxckVcZyiHHFCjF9zDLrY8",
  "key21": "5XGn9Z4GuReLS1G76weXFt8MwxdJb2CiCpDyv9bymeXCVQrxDrrjxN7mAFKiySgK1gG73wts76bevrvYSPACLPq9",
  "key22": "3wFQbnkyZ15uLUQ4bisPsL55K2dRTLp9AqV6NbE5YL15SMPTQAsanMxwtTMqKuN8TaawTD8kEuScE7omNVFLheSH",
  "key23": "5RMDVTqjRC5BTdLzZG4A3DPW3pWqbete2ukhmWqgg2UHxCV1JdNRR9ve6tn8d7SZJzBw9MT4idFi24G5z85RysVW",
  "key24": "QD11YsBu3M5UJspTxffc3JbofmYLsr7f6xaNA8Xg8Lcqg18HS7G9e2cnJu4VYGdFNXWQB45YR8eNz64VDfP1hyZ",
  "key25": "34kSL3PPqZsu3p1cgsGXgV1T64aczeDXFtC3Jb9KRpbfjXc88TYu5oGrvD6STH4hdVJuCsDSo4yBkBustpHCyEPY",
  "key26": "2EfJSGbTaZpJqoFpGRywh8CDQQzbxwsV8BN7NQKZHGk74aFybX5oek7RDDgWvTLTFvUwSbyzPDMqoAH5jz74umy4",
  "key27": "35jiP61ZnCdvRBMob6zxd9XqGVbuBeak67BjQpgVD45uks8mLTdRGKWSdg6nAquzcKNbV1dcCCMpnkiaBmu9bTDV",
  "key28": "S5JtpFyAsZWEcmN6HpqJyu3mztoELsVPQEBjpjaCm6HtBQ5bnT89ESsGy1zaxVvnr1oTtQY8AvuBCghgbYAjP9p",
  "key29": "4MKpqytUwpB36mHYe1KY3yyxgBt4fyjoTpMNoraSKoNeezG58Z5grAW8Ctv1DcY6WH2dFVPhEhPNybhsofhNuHkV",
  "key30": "2gXRATrWDWqbcJrXftoiWuGwzu4wNZwixPvvEXzsj6pHTPnU95sjnKit1Vk7UHkhsZoLHJPVb5hxAGDVvKXUdECv",
  "key31": "4DySsGuPe4EqbNamouzLL51HHMWEvuqPXFLc3DDLoZhqwsZJSfJE8FDpyjV8YqwpeaXzb3uqTna945uC5ny6UQsK",
  "key32": "5gmCkxXLGLGpbAKEG4N6GH4Etnf2GL7ugW9Zchrg1hrRiGs6bGDxQTSfvqNbasrmdAfwW6Lzb9djoGDDk1CcYj4y",
  "key33": "4cN9EikjAkuqeoKwHZwoWidQaVr76cDCzYYf1JJ9Y1iG7B4cDfuvUsTqS6MuJnZht3x2GMR39aG8G52pCB2uFRW1",
  "key34": "59qDouQyqBQz2uazMUc6jgCDJTDvhM6Dt5zutGLYoBRtT9c8tHyDiVCvAcatmeuctjyKwrED9vH17oQsfMoqTgJV",
  "key35": "4QeqMieJBZCptfSHtLvo1bqRJx8sNPL3XyDzkrtux1biwwA1HCx88ZCHMP1PMi6eUn37RC6ViBn2zrjWb94A3yD7",
  "key36": "g3t3qG5fzZQjCPEL7yeazN75eE1GS58NvAwG6xQezpf9DEsrpQAA4kJmJVvSqn4XzjUgoiYyauMthYHmgown8jL",
  "key37": "3Siwo1cEWu5umxsyfMsut8hZKq6MJJy8EooWhkLKsRUq3vdNaivoL6fwChJRP4d8uK2dCo7eeAs6MFn3YWW5q3DL",
  "key38": "53pp2oECUPNTHr3zAeVHTjbj4iaVPg2kZGpCQEty2hXtj92mmdw2E2apB5w3tXoxybwwAJoDT4UQYjYRHUSdQUEg",
  "key39": "2QWAkvwpnzwmL2dkZiGK1of3e373zfBr9JbKtFYokGcNqt9Di156vZEY4x9KxAkDuuGSQQRpAkGntGLMufLekjhe",
  "key40": "4xHsZBAzMazAkT6xJhYgq19SP5QtrXXcokHVnnQ26hS1n3JFgdfZnnBDVyx9prpraz5Yzg8ydjdGP67ZV83gCfg5",
  "key41": "3dVR37NWUrcf86jHPb9qfAPpgD7nbkBxU1zKX9aDHVauPaiLJEKQF5G5JCYryGnzXEMHTQRU9if2J6xdu9zNhS91"
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
