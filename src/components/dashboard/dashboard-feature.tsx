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
    "5mW1ova87Fg7GYTKppdA2tLey7esmvXpkBDzbafULg3LNPSFo1KhZJHJYVnVBq16jWoEMazLSdAqty96FQHLHH5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3seUjQGiToCAwuVBjbatysusWy7G9hmJqr585Ern84x2HVbpJqGsdxGpdbwnYijX3DLN3U7VzhUTD6XUPynJsNbY",
  "key1": "26tFdLxfkH4eQabBbTwgVDF8WqF2zx8pCLJqf735f1hsbiFjnvyj2PrnrtTmpaL51wyb5Z9j42Le1yvuF35ajp9F",
  "key2": "53hGXMcmgvvjpGUaVSXZttDDPonWsesMyKJx8JMCE15L4R2UWCAGt53bHoPhR1LFUW8aLEcAnUZ8zuaJ4Su4vTWP",
  "key3": "5kmKVytELsKKvQpH7fcD7C8UgCVpYXtPmvQ6bVT8yfvCu5vrtiQpHRGbc7yAXvYYqLNaJ92P9tKC4HgNkLShzyDV",
  "key4": "ys49Qh6VgmHHzhdMqdMRs36CtJUNCTzhRwSnJ8otP5STUT6RKd8VLq9cPZwBkTqBhHupf4UwGkdAVEvVkKpSQro",
  "key5": "3zRf5FvJ6yhwgLLwRRC54MoWVGrTw249NuJDCt8h3L11ukLcvnB6fZtri3q62Micb98jR1izeVyqHwSPQWcb7EW2",
  "key6": "2CiT9u3kCbpajLWpQzV3zk5CLbU6jsvspJ96zTqr5nC9XjcXBjYMYU9Zid58erFE5uzVjW7T6WSRcRmpuCSHZzkf",
  "key7": "5kTbYCbW7rv31MKHknhT149U1wCEjv8JEfQDSDrPDMGLpMeVdVAmhntgzssqYT8qnEtfKtd9DCbZgxRoUQjpHobG",
  "key8": "2wgbYGqEcWAMVZTDbuoP8JjGwQb8GByadc9JmNWJbgFasvbdY3e4HA3okJ9YHD2LUY6xqr35uCxTWaNRMKkcjaRh",
  "key9": "5oe61pdx2HzGtnEK7ByYPiy6131wfEVMgLet4TD3NSJbNWdSWaNvroqpzHaX4ab6ai8NeE3BMjoKe1Pa9iTQcep1",
  "key10": "5ADkBdZYjcisvGv4vfzGNoVsWkkMtRv2Enx9S1G548WkCEF7f9WnTQ5oXZbFNBpfLzDV5Hgx8wK6Yycy2JqbcYTs",
  "key11": "4jpnitJjAwYGS2TYtk63pUxeLhxQbb1moN1eyb2Cr83hEQcw2deGFNnjakK8esRxCwUiaQXQcoLyzhha7kkJQqgC",
  "key12": "67hiewo1SbTMqfFPFZGZSZsF8Caorjrmqdi4DdT5MkWPHybLiwn8FGQ8zuGbpegYrkqwZ3seY2BtcpSxXBHXyQn5",
  "key13": "boRT645ndHCmXAgapnETSyHAxdFaaQGBajABs9gYrGk1jmJxgCSJKwkgEJb9CoD28Ucqdhtxq5SDzMYbPUUhQ1C",
  "key14": "4oAwE6yTiZKcNG1CbF1LWqaWksy4mLqYyFuz15aEEe6yQvSV1jsShK8KQNpgarcPUFeBKDdaZoo6yUC7gFzHmgqY",
  "key15": "5VwBeAHGMXPxC9AaC8VSoPoTKY5ouqb7PC5pDWrdEAten9JPKUT5Js3dGVWHZrXjzKPy8UXRKn7Fc6hNtaptgcHr",
  "key16": "5bCRsA5boLnvB76k8cDs6Sw4y4i8rPpr5YsZ4CnGDhnNoCNH84brxRWatRbt6NQuQ1p6U9WZ3djv1qwLEVNCNVU8",
  "key17": "3PuDWUiqFMkK1FTZT92CWzPSi6JQNGMkUnNjmFJYbt4qLN9153QBX3RwCrECTi4n6HxN6MXrhffP8oRU43k6iR9k",
  "key18": "3n87dBC1ubihvykAb3HoWDbhnLPMAipsJuwk8rLtmMUofwc9UHiwb4DZNmqfPgmP3omkNHiJcWMaFE1moNNHfToB",
  "key19": "53fBHMbGbHRNWAJRmJoUVzvvx6Ka7VPAoZX3Bx1wwZS4u3ZLod174V1PiyTtZHTd6PgbgugPuas7E8uV7PUm7aQL",
  "key20": "5QzUghFFQFZBuJwu7RhvqJX7MNxwMgqvoNbu8ZNpqZa99sMkMrrjcQzkUCM8vUubZnp3mKFLuSWx2wjvBJoXFSsU",
  "key21": "5duGS8oQ7YUDExZLJFxPNugtgGCmag3STQ3uGEFPd35sduiSKjow5AEVXT9C2Wc5kw8zaRQiZ4b67rYjdZtpxUzC",
  "key22": "5K5GaCN2M7A8LaNmJbHRu9vHNeWbaiY522VtHUuG9P9qq68UJXhsRe7ED2jSkADoD8xybTUJS7WCT23WmH7Q31g",
  "key23": "FnyAZdFUKSqajdSF63c6cfr93gkjBPrV77mZbjPXSRt1tmsheiQiDY53VsAHqYEo6szf1BRXM6E3CGcFFnWnjpb",
  "key24": "417m3CSmPrf8ZwVnrb5uUkaojMf58PytCKFfZ7Y9mQtztyq9wXQzbecJ6G2Jr3CiMBsEx6syAUCfFHKEQLbffmH6",
  "key25": "wGWGtendQrioTJPzBCwR5Tapk85xaqKBL2m2PxvZNG2LxA2PYSw9K1r8vuWDHaWogt8FNrqQbxFYwcCFfUe6X2C",
  "key26": "2feZecDsHkX6NZWTyZ4L1LNtFGHmXzJ12vECsbiJoLMrM9E6WZmLHesuK7yLvK2zwtudQYMJoyyNeDJBKgGVQh99",
  "key27": "24FfQhi2y3xUJ5DbMjKLbzNEYJtfvGJfyZa6SfLkGnDy5yNtBA6pVb7UsUYQhfykqbjTDHSCz8U5kVscrquQQUSC",
  "key28": "5pypTejFnWAtaqT3wxtSTWjb9Ejqf1jfch9ca7DL73VaY9kMFXJ4nXzCBaBnS7j2viW96TJHySU1PfbWYE7KpMV7",
  "key29": "41GYFKvko2wPJy8QffeVf8UNaxMeUYUNWnEDQybtrqxb6CJd2PUmdUve4nYC1A71wqRgR1uy3VNk7h827aXJEiQV",
  "key30": "4QeyrRZUNSMSnQoqbyrVm9ypnhH2iLsQGLmat5z8Rbfri9gjFrMb2FhpmcMWKPMAYWJe1pNkbD124HPNh9AZacLY",
  "key31": "qqFysGvjYcaaeX6qssstdc6Pu8gm6izexa8jVuB6xBwqkM5431cFwiwNnxmw3R67eY1VCMNDrkYDh8MjstG1Qmc",
  "key32": "5eFHnxduKGzV9f1pEhMFhMCHWNF4KT2PCNrPbR3VsM1x9adZLYR19AaA74WM4QSJcpX8LFdN7d65zuYuHtUYZtKT",
  "key33": "2yadToXkA35DJv1ADhRLLKLu6PG21XBm47t1ScqHfCr8S9LhaVEuLQ85Hp2eCGjELDwFd2SBCbCsUY2ws8GjHzAu",
  "key34": "4sgZZGuV3g2aaYp1vsjFAVMh5DMtpNEgrSuzHh4xh4KNsCpVk4jxugeNRffPqdoNdx2dQXC4VE7FwpFKn5co4bQK",
  "key35": "62ZL98EpfdMQZnEVb4zWHg5ERxfHXpbx4BVGcLLd8H8JJCanvenhoVBfNZgNdVrftQxHx1tDNjfxVDPHFKttRVvG",
  "key36": "3Wdq4CixQVtudXyB7kbfwstygmaQPYbCu6VJczPvjwfYS1tWqZUg3kMniST8Y96fsMYhrJeBjcWVudmR52EEhLpw",
  "key37": "7ZLo1RKrQr3yRKBNVxD9JkuMBwu6n4vWirnSbfZcteq2kGcbqAtKAuNSzStUdBmeMhx5J67G8zwcfkaF2MkB5UN",
  "key38": "3zufmUiEsG2mnjxRGVJdiM9iRYGU1w9z1hBWmj1quLbnCddz3UmN6Gtyuf18BhNtPG2f6kHopFcFgRYDNKyWj9uy",
  "key39": "5Fjf3P6udzwCcQ5CCCk549ue3pQ3WbvoXAtzKMVwaRQ6vajki2LWuXQnpZk5vjY6HJu1stbJpCtSiFSUVzGbyd8x",
  "key40": "4F26DUHdFC2j7DnpYhCLYN6wtYHeyemXcFTyEie5nxnotLsuCiHj6L8NDFiGzk9BsJLcG4JBFEXshFPnPfsatmLT",
  "key41": "669eBv6FCivBtRhkRNFXEw9kBbidRJvVR9Es3UaQw39izNq7S6JTJUkbWsDryiSGwc6mDor9qUsGrBYEjWTzTxji",
  "key42": "4JKDChLTsgfnvcJmM91HA5f71MwXY4NFTN4J89ogwamY2oApBEn8SjLU3aR8DShB4HqqBRGG8Ub9RpBSPMy8sGrB"
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
