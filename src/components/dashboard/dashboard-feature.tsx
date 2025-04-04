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
    "rjHuRmPNgKga2Pqsyhtkp58BxFquDqLtJJxFrKYvH8CycL5pJJJmwA8z4hJVz64Vgg12b2UocitodqKCVPgsxLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TjYqrBLGsqbtFmELiwxc3XFsCv5CGWzFs4qzFRm8acZVzvDdez8MuBSs4g4nJY6sJzJSQ9h6Grw3nyXJPYgHPgo",
  "key1": "2JKgtfLyRVmNjj8UKHRPGPA4Chy7MYa9i6rTHjF61X2J5rGEVPs1FajP3nDksGMY4GfFJRtvBwCPxbqno4meq6f1",
  "key2": "2KqAnYbQdTvFs9GNQPqp64cRhBorLPFPpMJ71BX9wdGnyE1TSAzeMnsM8Eg8M4J1BDku3rTrAofW1G9vBj6U959i",
  "key3": "3iinnAzaCFs3fxjEDj3UWLkFyAPjHkfSB8pWNJnjvYTvJXPhgWErR7heUTZWLEAjBs4NoPLoTK9nxHSm3tTcVaNG",
  "key4": "33HC4QKdUGZ7TYLYAtcqjrwGnZNk9REZP5mH9iSq6jidHBwfquP36qv3VQ3U61vbD22tKJdSVoa1JRbnjpstdtwV",
  "key5": "4HrfanPw5qSEnezScnnaiBiSRpsGtPDr7JP88yDpj8Raf1HBLKQaRrBFBXBwaSy6Uw29D5doUJSNxPWzJxr45yZX",
  "key6": "3zX9WBpUPoZmion9jHanRjjp7Ea46gbh8GgVLgHK3mHtsqYq74rPsyMwyBy97WJDsAFisQ8q4uCRbdtajas9EWuV",
  "key7": "e7e1WWG4G5mKKxEWu93zQeRLRmGLCAnFPMm5KHZ8PJbyhNUjNhQLpxKkGdduQ7ER5zD5wt8hVhKXg8SBwUbe1n3",
  "key8": "534F34rTbqEkkT5VYQjKXWzKxkG6Xg7mzkqV2quJfJrAHMXnPnssnR9ZB6Pvo3MoL3fgZo7PLaAKJWWJPdSz7s8n",
  "key9": "4DxEHddd4Ye4WzKGwyvdSs427wcA9m7SL8sfuL9yuDiKJ7hj2pirjqbMBS7ovzG6q3oXXp9ZPXWb6MqeciDkWdJb",
  "key10": "5fKeEJj46sR2ncoKKY8spMYBzJJyvThhfybWqWeewmdxhQobZpLzxhEWx8KfewfDBYW1JTXVGvUMCri8a3V8f6Tw",
  "key11": "4r44U3Ji6d1ZYUWMp2s5uErqrtwU6q6c4tPDQ5uqLvpd5LkBPWTEnf6cha2J1PzwVTKEVnWhMDGfNFZSmnqYLZyK",
  "key12": "5u5rbq245FUUmVuKEfHFkyXxJcMUQiTiPRqUGLu8KmgNZUBU7bJprQxdXHMaeYTgKztqFWTk8PCbQUintk7rpiq",
  "key13": "45qtnifmgv3CuiD8X8RPUZnqchCqYr9AKJgLc75HqSJ4Dop4DKuhn6aSAtfTCG9PJrMnYYD6wx1QEUN3bof74zXx",
  "key14": "5DzuYLytNeTqT1hWJuEjBsneaaqkTVeEbqNuvTgW6kmQkyY3kgteaDCuuA2f6jGwNCcGwNwVHdF8iv3AaLnabqtA",
  "key15": "4LsqcDfWC1sMAvRJp3KupiTdVnw4aoNntipBkUbbQ5JZpPyUd1FHgVVhkaCFxrmFKNSjYnUZLX1cJrGSWeUsjWqL",
  "key16": "2st8qkG69XDKfEzYeCrH2APpeMUmina3deCGyN8m8kZeirZQ89R3X3CUYNJZhaTiWUKNrwgqbs1SNCDz4dW2XdgG",
  "key17": "9fcKu5Ums2xWnhU3D6zwAjZfnEqXXBD78ugtcf2fNo29B2J2uneVnerCicgciQA964wjF7Ej4tZkg1r4znxw2qP",
  "key18": "SAQo1yhute1Dnnujp19eyz9FfqKVYhKvXxDYgaspAfDU9PDiL8HvcZgY2oKgbkAR37hySHFqNUhdyMNEvVRWFNp",
  "key19": "2av9VDSqLRFpLcfYt3FuDyjR49znTUgXYNBxTpYeccmuoHkATcKkPbBuxrkSH1wW2sFNuymKdaUuYymfwFLLqFBm",
  "key20": "5iVTKpJVz8WSfgojGUJDhb5aSit2QgjTRizKiqmeit8KWrXjg4zU1qmtPdsxFhoESNaXxMUNvdTMU3PjopQsLpae",
  "key21": "4JwdnGvoWrTgQzNzSggZw4MjAKWoEc17ijnrr5By7t5mPYnbH1jnijn5RtNqKB6hD1pQJ2TU3MXbJhSMzuPjEhSg",
  "key22": "yRCVwE3qrtasGKsx8XnPC9ufBvGnowS5gayFfu7zy13znyyZt3FJJTAotzNAiKFSzyxzdVhJ3fS65en8P2uXrbe",
  "key23": "4H7FcHMev2jpBXBMgk2xarvKzsxeHcRcTqTUo87aZ3ux3V6MnDitfgcA3EH55whzXAvcJyryZj5FT9H7KawnExmE",
  "key24": "58UgFkV4ZZiKQdq411rc4cL9Dj9JR8sCrh9msai2AKzVmPtgBv5Xc7udFRjYSLiXEESrmGd9EKEP28ozLZwuq1c",
  "key25": "4t8dFHfCoxEA1nxvdwhff5Ys1UnVEqmLNKmyfJv8NcvtgYtE16PbbS8DTWo2EqyDmMKE9VDmb8raQ15UqPRp5q98",
  "key26": "4rN2jf2o2LaGofQtxm5GbzmuQbZdExFXkzQee8pdrWqhHvYog2icrd5aNZWPCdFhLR8HMR34EpDpsqmJg8tw6XZe",
  "key27": "4sgwafwt3thZ2cqXExMwWGwcmcpriJyxY7FZ2qPVKnyNQutQTqzAnvvVz5NksFvDgGcZbxVWCf65FQjGUEmaWfDV",
  "key28": "seKTotRJpNcWu9fmKzPTcdBHaTVh3bV45LLX8EigacHCpfbjS337jX5WzzdQ44Qqd5pdrqxksYXjCLgeAjCjBt9",
  "key29": "CLjQYNvmHiPHnAko96Ti1jWpkJyvBsdvHvTU8avaLFacr9GktZp8sQzpDAptA8nPiraF3pUHP6DsGBEiWjWq6sC",
  "key30": "5cv8g7qQrqauhRKsvQZdEbfRBV5CKRKUaof5wkfahBZoH6f7FmhF6AsyydDH33gMLDFPu11WsARa1QjCx7ygfcNT"
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
