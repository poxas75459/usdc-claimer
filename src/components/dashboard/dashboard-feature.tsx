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
    "LvQNpSzgcHmDCob9on9Y9VQx7jaRaPYEtXN5pZpRb23G8MMpXbLo1dTLgMDu54Lc6XHKpTmJLNTgPuD2TfixubP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ADHXq37F4j1U9jkALLaUUWuCpt9GoW1pvyHovXRkn2iKjSnZyFb47tvzfpw46bANDyrPJ2gTPwNLN4Dtuh4BH7G",
  "key1": "3ZEkBYwUijBwoq9hiiPb131bd6wwDZ32PJ4dpPzY88TKkyUHjSPd8cQqQYV9XBEgpsJsgyJBhwSpXH3JeLoSUjoa",
  "key2": "myhQoW4JVZrCyiLpcDuPW1VstZsguHJ2cdhioqFzNAU73VFhvtFFob9GeHEJM8eVb7Kh5m1yeCNCc1qU6TLhrtK",
  "key3": "5Zd85wySWJru59AVwkPf3FKkyAfZUbCDoNcqsGEhss1zserzNwQJJdBpCxVqShkuPxHgyz5DoFe5xRWuGjsWtTBw",
  "key4": "3SwS9eaGnNYQjbYE2K29m35n2bXNeo4o4az2BR4CuEhPm7FwppFwecECuvCotjFdSYb9xhixhQgFSfKCPvBnG9Zd",
  "key5": "5qQXsFUhuqTRUigDfru5EbQYFZ58axu7TD1tf8MVy2DiigePcvo9ZiZS5ohFJx6TSALEi6pqUWepm549c7d6GT8y",
  "key6": "3v3W9GhwmoMc11nmudUqzivXkDYfHovEh2kycrGW6GLmwA2PCXzXG7fN1WFJNxMRqvTG6Nigi4JiV8AjEQerw55h",
  "key7": "4puCgTUwChVAhKCmunjvNiPwN3Kntwz8ZhEoomtJH5y53tkdux8ktaRRGFDbRYFCu9mdibHnvfLSfdxmkEbV7FM7",
  "key8": "2JoKNVNFSdMvHr9aYBmfNpBUTiYJkPbqNZzkzp13txrAWn9bpj7ShDgTsogZWaK8bpLmwvuoHuDNtUrCRCi1UhE",
  "key9": "4QNqgqYtGTKjVXXwtmQ7NoVxDuka8Pvp786hweeijb6ZQARRCbGjyA6EXda3ZwBfrgBQamFDTTBfaFGU2V7XijXX",
  "key10": "3nxpJ7q6KBD6knhRy9yyvxETR4TJQ9q9S5A8CzRwBwHU5FnQHhRr1QmxquX4tqjQtf5uoH547FNB5M8jyCdBwS8N",
  "key11": "3A5ZDcZKM3oXYEJtpX362tMJ86jtirBqHpq8uBr6iktRhPMXjppWYmZr144kwdAdE9qwexb5ZTJSFbCUDJ8UNaWs",
  "key12": "oJb61D4P3t7uhxhNzWyzzoos7rBGuCGCLEzyb6ngdiWeTqutdDaPaxoHSNEWroQffmJmJHpEQJVHkj7W7ZGHivN",
  "key13": "2q7ueC8ZdScf5XQW67Ri7ccpXPmjMVuBdUCSJspmWufiu4ryBAfmCjmxBdDQvy8VNxvtGKFzRFX3fQAKeswBhhmn",
  "key14": "5BWb5xMgKupX8JDWxVJc9RSXp9bbQbu89Qm2h5SQ2xNHCNqhYc5Tz9yNQrLiY7teUoWfKQ4FnV3N92jraVVGRjZg",
  "key15": "2UrV3z7DvUjKJJT2QkaY1VfwkCAPmWptxMEb8RVrLuyjM4kvtVVwiPFVTAix3qtwWNCdF4gnECEbAwXdvsKMuhV3",
  "key16": "4rHVssttsngmdSoVrZBZN7fL2RNqThtqSRzCi2ej4WTupgp9Fg5YpMBbKRgmRwapcYA2rK3zeprewsDBRtRf3vpk",
  "key17": "51Hpnsqw8bM12pBe8cpBE5x96ikF8MWq3bpudEMRYieZ3swYTYnL1EkR3wtfSRmanade6gq7QpJ5AZN5PcYt1EFL",
  "key18": "D1XGR4L4DLodNYM1que8tMCkY3BqgFpwaXgAfXEWjmeDiq2iMt9Rmr1K3bQaMXREM9uP4ckbVnkTGEhoZqXdEhr",
  "key19": "3FyKp9gFbDkFcCoafrmeovvxaKrRpxfbJTZZMfVjnQJHdn4r63rF2z2wEdrn9QnUo5nbdrk3KntKPE3Rt8ciht4b",
  "key20": "5wEoRiZeQDvmtAEezjj9vtZMRHoMiiJqtA58SSiEoF7ro9zMvsjtpe2c2iWVq4nXFrbL8dJDQEiC2nRc4dxXnbh4",
  "key21": "32MhbCMe72KeB3wRLfE9X8grzcqsaXtQbiJ3cT9FBfzDdnq3FjsPzk1NuaYAsQtwqL4fNKSaQTpe61xPT9Rs4xmK",
  "key22": "5XXo6JjmtXKHVyfFy23Me7UsmLBuE5Rz1xSeXV4WaMucsKDdjk9cBdCc4hNQUpiNhmanT95YQvN3CACmTeaZjNn1",
  "key23": "3tjun7qgwgra6vKPX9jCB3S4cmrZHauNq963d8VFYjM7RMehx4QYCdA6gt3LRvG6KqmkdbDbiS3hZ3kafsMqhLT2",
  "key24": "471XbkZ8p3y2UreWFcn1s96sHsotBwMptrLvVDKYUpWLbmSGg9EBB1iCKuXYXjBpHAMQqz4Ab1dVHhvwGvkCzpLS",
  "key25": "4XyNmMHQiXpWB4qdZD4wkFXeizkskKkwi3yCXNgdHPnNvrudBFt4CRJ9F3XL9pQazAYtTp7TSmBGoUvyCgPbfLb9",
  "key26": "38aNdRkcjCwBU7EsDXT5Q7Awn18Adi1d4Vksfyx69hhDC59nktvs8Ka7wKfVKfke5bLFxnEKKLu3L4VqarG4yF5f",
  "key27": "5CwpcC5b2wtFBEaZ4UNaSH8Frb9w9syLduxyteb9fqZeGNHquqZSX7QwAZMLHQdPETVzvC6L38RMGy1xHRPKtvSV",
  "key28": "4gMHyWCVBRQCV3RDXm5EG2ZEHRx7nTX4S6gzNLnTPUnvRUbCWAhKgaQeeZxHxXhxsGdbsXyMvExVyDWREivo6qrj",
  "key29": "4ZeLtkJmWmV5SB5JwgKctjAynsfBeJM1VPs18EiTMKFaB5NKX5pmq5dUAPuw3KpmtJb3uXvvXBegEfJV8sU4EiUy",
  "key30": "5mjboBCaC3af2vHMuX6Vzc4KdUhFNMwYRtGFD8dghPPD735dVb9sjzmxp4JREJoz6jvUt1nrNg9PvnxovYT3pRxM",
  "key31": "35QaRoK4Phd7SWrdo3ZxudFcYeRjcqow84FY92yenF2F33czcfNy5vxaQNLoCbBHWMTS8Aydya13JoQPSTmdymgN",
  "key32": "3cmWuw8QLgwnr7JSvEkLyJDZxpVDfKWrPT51ojwp2xnHnRWnoCyAt4buBLiVSroU2FyM6MWUCkg7cr3N4Vy4i5eA",
  "key33": "22CDrcF9sRZDTTpY9BQ3i241YBVTXhBjJJPh5LLaXvWdMffdebYaHz3mVkyCGbKwy9U5WDGKej8j9X9sWh6N2Tp3",
  "key34": "3B4hq8WUeazQJxuqgwGbKac7nMnmqqMjPJnBgtvA6Zs2e6BV3tLimxJiJaAKEnuEosLQ3KrWpCyXAEz4XoFU1EsF",
  "key35": "2qcPbbavGZ4EbJkpUT898owTjGf53fYQWGrMidoHGEsGK9vxSM8uSMCqugU73YoHApjRQ97zMKe2qHcpSU65xTnn",
  "key36": "5Z4L5Y4KRpoeQ41y7ATsnQghbToKdHWozzGmNX3gtEPaoWRw9HVYo7LX1vNGsgsLgqY4puMJvE5Y8Z3C6a3A7wzh",
  "key37": "EEnwghhU8oWNjknX1Lx8DAYtNrUZY8Zwp356XrscQBdRCyRkvMVbfgga6MJCtVUcp4uyKpGwZFV8Nt7Dk77HfeS",
  "key38": "4G4otAwG5wxd7J3wrugNMBiuVXxaLy92zuVprUtLKDyvDK35rr2HoXSAKe6PaBmosiEPo4CchNxTQKvwGzKe9Tyd",
  "key39": "5nfzQ4warHbWkdXmuxjkS5deZa6Ydy3SKwnua4ArR8HU3YAn84UsULdU4os1x82MmyAREyWRyDpX17UY6ty34B9N",
  "key40": "2AfuQH7UFVZP7DK5HY5bxzjoACrFRadgUyXZkxfkuS1Z3Hdb7YrsPeiJ6cGUBpFKeDsYboTEjcim4DSRbiF3nMRG"
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
