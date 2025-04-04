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
    "3EvtbBMLSUvNwkd8o7yRPTmtk2CAuPEwgv7bazvFiMt7Mzaod7Z3m6nEUjLK4HALPdojK9PpCcwngQ4mrXXUViGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "339HSMqJukR37wwsqc1DxdSe86VaUxmB3UHWPoEqsRu8fpRUAL2sw7q2M9PCchn6DJTpXrQzc6zfwKWTz17YCc2t",
  "key1": "XszkAEHNY5HgHJCdHXdg5fisvebyhvwkbsXqmwjzqu1NgU3UtiBw5nBMgZLovYkr9rLajfGkoHaLAn17Jiv72s4",
  "key2": "23eLMf3EsAwVG2GBBczrdeLfYJypuf3EzjY1G7Z47K9RSbcugxWfyEUL3MmgufEMSqeqLu9XAFXEY1U2AEwRUu4n",
  "key3": "2MNo1ohELCE7c3n8aoEQ8wQppmLo7hc7J1joRfZ6xfursvKgyMWovp6tkyb8MV1Z3t8t36vgwTefKYMBU1hsXcRy",
  "key4": "rJSkA2V93GkNq23JHhDp1vB2zyQ5gH2tAVYxmawddpQWFAq2sxRdoQfvhjNaWqkFETWYGL5RnLwGLwE6RFLyYVu",
  "key5": "4nM4Q7A9wLFY7herVTtKpVvUN8FGc3PXtKdFkXY2GuMHMej7dipVzK6nCjG34Uq1z6RwNr4iyx5VHcnWEAFECN4g",
  "key6": "619xoQtY2LG1v4ZA7TzKRRSAbWtSa1S1QqmhKzdKra9xBKoQAzNXaGHwTp1foYVw3iJC81iofXdJUFroCJb2NRsc",
  "key7": "5eFo6UNPJRHKnpbc9nAMTf8HF3VgoPjGXgpo1KGK9k1p4nDcteuL3NYusY8w7CQvCfJ78MZgUuCWWqA674jpG3K3",
  "key8": "2LD5auVVyJcPDmqkHYfZYUrSb1PxMuuvtD5ESUp5mdqhk7iub4nXPhJesKKHQR4FJe8aJhTqRDWM9V2PSk6AodYN",
  "key9": "5JW1yVS2jN8E454ycJ2RwuYVYtjeWWp43Lo4HxmKD2XfjLnDzuc2vy8C7PQqcs2TaBBwhp2dmvhnoDbDKh7eV46a",
  "key10": "2DDXLULEn7yuaCJeMHLK8TQjQAuYEfSDzv8PoRg2R3XPfMiaaCutWykiQzh8fwRQmHftqgfG2CoJDtxnEMXTP1Dj",
  "key11": "2yq5LtNBVLnKZsJLtAtvuCmhXHSNEUTR1waYiDVJzXa1ozKL4tysnYxxEgVT9kM53PkEKZfZsTxHnAEn2ZknpYr4",
  "key12": "2RULLLzg15yRTqmAWkrQSMBgUAdo1jBSwqvgANvjwMJq1WuLnWKgfmwVLRJtZ21Dp8NrjpVwRAUBhhWjcRtjMAw2",
  "key13": "42XtjHuk9YTAyNmcSwf5bAiiXRqxuimFRsUgoCkb2qDDr8JvwuXpcQTDrpaaVXJJiF9RnZQwua4CbKKtdHYKcgJ1",
  "key14": "2HWQaLb1Tmv5sNpFDQD4mLgmpNDBDP7yQqR6hRu8N6nVm6oQ22Sdam2Z4eXPmr2U3suAVUWinPr5sm9T3srJi8LF",
  "key15": "4j5knRLSA9V1nfmrVDrEQA2C2waVH1ryb3sKGDxxm1wCUSJX4a6jtzeQ1JsfSQveJR6wvPecYJJvza1Q98MKSMXt",
  "key16": "4MfTxsVnFKmHWz5rk1SfvsPJ9q3d7AiFaH6B7UUeYYifyoJAW59qKoE3h4dtXMKCyFk9ZnGWib9NnTRKX7cuAkAf",
  "key17": "52UBXzSdWv3PFWq5vCbHZxnLi2Juk8SAwNKtBUs5tgVxuKjTekuH5UZYXUWvk5t3HWfQey2nrWy3iZNPZPC7EgBf",
  "key18": "2Xk4feNQpLRkdDDxZ9oR1owHbqdqLSb4N7tTr6oWH3v1iJMUfv3uG3adBLZrZatpXSevTmkRGj62vury1wezEAAX",
  "key19": "2v6q1emZHYb7ovwH4NM2pc2KyxnbZQJnV5LJBkhyMKV9wsL9WhGqGArVTjwBChUmGNb87fAeQmE2jZrKUENyEdcX",
  "key20": "1eDGbEvZouN3czejKexaeV2qGY8k3B3GRQtRqEL5f84BjDAraM8Y66dXq2bAmZePnFkq6BsUfCEwujAFS5bRFYZ",
  "key21": "fXUSmXTUvoQonTWUZEMeLfSZo916AuWLnmGQXFEQckoTK7gv85LpQRGzHvepo9B7eSxzMpcnQHD7NJ9XR23EoBS",
  "key22": "5QkFR7hUgkbX2roPakNt6jJrYVK2vqqf762XAjUa5bhayimFtXNnH5sKj2KUgm1KrA2BeEnFxRsq6ojCXQNsMHKe",
  "key23": "1YM1E9VJmRHkBxCu7UsKEMKqRjmtUEF4bUxX5YicyXS2v5Z8p5TKPbrKrz2tfV46WUwpghiAcz3Q7FE7MGKcnNs",
  "key24": "32hY68s24JV3Usqbe6T8YWbK1zaBTxaiBSnegiLb8jn5PiETW34zwPx7do3YYw1g5zuxJZmXYjQ1SQ9TYPXL7gu",
  "key25": "fwtzT8GMNMTiTqQ14DHP4Cmy84MuLxSE4wuCWKKyKtMeTRD8Szr7kdTdecRQChmpwzWp9rFyu2VTm51fbPm1KtV",
  "key26": "qEkotDn5cjcv4n7fKrcQpxCnBbmTH2Bs3o9frKd3GEDcBxbGE1WmuMjHtJs3YX51MZ18GUKVTX9yqKPnVcfagHR",
  "key27": "JJV31SsskLowK77NafgQvJVUC1gLzqDmBPf3r2ufcGivZ29ZvMgcNDXtR8SkG2PPkyzMy3e4aDZwmnA4HN1Q5x2",
  "key28": "4iXW8vv2av4VQFU633D2FSHFfjc1ZVjS1AtHnXHXMobydcJAe7JHi7UBjEqwwAQi1uukZkNLVAFstAqUptHkMW7p",
  "key29": "4JyrrkKafw6ZKKzNrS6dXjCqTjihDo8Dh8XquqfzdNDbf1jytHxrVCwmU8AKsVvcBw9bAUo8d4KMqEmdTUqTmunA",
  "key30": "2SxcAYQy8gqNkarh8bLTesTTWRxWEq9vwLqiQH2Lxo62NfSRKbcUMin5Rm2JrgfGvzSSP3rDQ2NQ6oJHgArNntRt",
  "key31": "4AHHX3Crq8ttAnRTMGQYMmVTbdk3tp8rL2VhycfroUmA1zpzsJGvMorHTzRR1GdCeGe3EG2WxX5qsB4VBto4mZnf",
  "key32": "5DXxPz5tSqCAUV1A8ejtcUs3RX8XEqthaB5Cmq6HAvFztaeUpJRFJHqVgAUziUijh6goWVTDhLViy98GaHkP8sJ5",
  "key33": "5HjWRKRUvXJfM6mTpXA8WRc3A6eseydEURFXBqnZDLeVfvyFzKbCirktKmhCLsgm6yKpVi8oDLQhFKAS9tkmFFxm",
  "key34": "5reu5EGCy3DUQP2gSHfuzGWH2gE8B2rhTs1vhKRE9fJ9BcPDABSHBYwzeKC1F5cW6EndTrx6NDezrXCAymQBvXRQ",
  "key35": "4tKemifco6ZqdWY6PAguHJSPZis8651bPouTG2f1VVuAYAksVFEWh9UBrEJi7vnSt8gKwpYTLnqURCsqEJJPjmpY",
  "key36": "3RZjzPe93ueaKkgw5Q4R3T6SZsoCRcEcJcES4vZMXvxhwfdPyttbBECqYLPiZJBbr2StDrmUvNBcak2wegT5UFBj",
  "key37": "xoPd3e73QsistTsVnFbPm6bwvPc7jnpFNnAJtLkFG8SceatczjXjcBpak9iNXNGuFRejAuhLsL7s5hsEpw4uozS"
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
