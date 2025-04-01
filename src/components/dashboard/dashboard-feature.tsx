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
    "2ArMMZztkwwjsB22VeNr4jSaLr6F3QpnHvssKSCYG64h6Y6BoDWVs1yjnWWEyHWhKUeab48L9dLBPWxC9P6ehEcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A9vs6CXn3y2YCmBJZ5rdTVzm6tVbeS5Ph5Jnj9AYRYrmQreJzwyFTjTkVZY4uFDhsQVJLC1Lw5Bo3ovT9ye7Znp",
  "key1": "4V5VDVq3pKoVqEVG1jAmuzF5ZaNN2goD9cKHLim83UUJSxtS7c1x8mKAXA74cu7g7XX75Rf474ihoxn3htDjsAmP",
  "key2": "4Dyx3gxnPNWvab9bvNQ9pDazsFE87vTdx8J4zHPpDQMA1LK6tBmw8XvT4Mw463FX3itz4SMUSLrA3rNhZMR7JNmb",
  "key3": "2A74GMf2kJMyRpCyQuCfWfzTfigohLmz4YEUredhSQHuvmbjyY7Py7WVgggV6BCkRf6CvcuvjSzJUM4o2vMg4Lp2",
  "key4": "GsUaC37wLqWJ1TkHtyhwqHTWomGx1PkTMvdNAYbniezLi17mB1t25uV27zdE1CviRSeyc22hbF5eZoFPs2GXtXM",
  "key5": "3oczMeJWTkFMYeYo4baLsbohfpCoCrM7ik6JhVPQ6hDgWybvgEjXcaa9bLTpdma3T9Q8XPbZ6LyBjfDiJ1CcNeTa",
  "key6": "3ZrwRS51kn69etGdnty8tZwFmtp1iLwVKZzFnVWf55K3EgDwqvKNZUz2pqvsjrC3ZQWjYHCLfhPA4g93SkdKVrNo",
  "key7": "4sexTRhQ4CPzdvs6gaBeVXqFSSZGtzMV6t5jJaQaZMnbkSkgVGL5LHKak8iz9Aiy3rCgvj4UD4iCLFA3ZYEJ1uMS",
  "key8": "3oZednRxEuEp2jeBcJVQzW4zPpJmy3pdA1syCAHUFZoNRmCB9HQMk7dYYdvxhfjZs6J1Pk2CfY1awAqzvXc6atVj",
  "key9": "2CsC9ycyhLxSAuBaku4KzhFS4gFVQWUs3GgkQj25q192xo4E1uDKMxhQ36nzV2hJZvh4EPJKLCCchQTxQghvjCCR",
  "key10": "2vyXYdMCuVnskdQTBAZTerTCzwoFyZmvAfkMiPna4S8R1ccCPo4URKkn8sfSdPpZFbN4PdeLt7Msv3c38BoLhWxN",
  "key11": "5ez68g7WZ6yxBkZDAgeu4t4MFL7w7iW9ZKbMirkxq9dJNmK2GHxxX95Jje3SRpJQuPU9CT4oqBMAFGdKzrnTFfZK",
  "key12": "31SCVdkNxd1sa9ATtAPmv8biPLENo28RCHz9hKLY3qkk8W7B4dsSWBY5jKonFiFLnFzQaEe79SpZD9SG3eXVKeDN",
  "key13": "2d6ezWKxFruB5WypCD48J2hy9i9pUu1aKhbYh7S2t3LQ4hkmeg2ndDtngWC8NLj6zeTQofuLEcMhDBfK5VNKmGNC",
  "key14": "2N8Vv5NZ8m8QsuLmn5Uhtmk2LGwj1dXrpz7JagzNUF3zUNBKQnsC6C8Azb3oRhkJCfvrPnc3yPkTRUGUPL6pGs8P",
  "key15": "3oavBm6Z1HAejKKSKmZgjTE9Jj2VfvH5oFfVaJCFeULSKgZjuhaNZyUSe98heCNp4xZd46WG1CmkkJttKUhhLsQP",
  "key16": "45LvNGyEoK7SoaBFPWqcQRVPaw3N1kFUKjvo6fVX2weiaDGxqc3UGcFHsrxMwVieY6eAan4KsZ8UVUyrTrxScMjZ",
  "key17": "5HiWumDzSyzGNRyUDuQNC3uWNfHBqV4yFc1UTiwxgaTeL1Nni9vXiVhVfSm3cPwC8YAJjVg7us9aeW59Gu3F9Rp",
  "key18": "3nAAhGF3ja38s3hRZtcgBnH4KVKGmwktR2aNcT4gXkYkNivmAMdP8ZUgpBGA3PvktoVJ2VgG9nZTbibwphu7ThZv",
  "key19": "XqHscVdSg5ogR5mGkqKrccHZwR14iUmQqhqL1bHhQUqCQDUGGDFzjbCwaEaumYrGYWGqr7m4sNfJMphj86tFYx4",
  "key20": "4FxuQPuFWL6pS13naQfRVaYTVNZrnY59LKQYQPJMoVnGWRa1R87eLc8J4PxJvZctT3smv6ZoNhV2VxspAN9BXNxh",
  "key21": "23bHSEMG2HUmztpcJHGxQbAVBRne611s21h67DPQawDxngprAsvHBG19iJjowsBU1eXswR3gBdYcs8dhrHXvjnbK",
  "key22": "5WhMLqsF7Pq6FWpJwYr3TFC5rD5qV6QqYo6LNXX6prnLPboZwyaYcq63sCXVyMucMeE9msCHK4Ap5qLmtSZmJdkC",
  "key23": "556H5aU4y3GRTqxysoa3ojvfSHciRGqm9pSKaq5kdBSziArojkZLe2tUbFrLsLbynnt4d1KZa9TYYpf3x5MKbkpo",
  "key24": "3L5M8f7VZqtqNYFHbf8YmR6LuW2Y6noQrbSJzmPn7ZMtpJZBUfA1PzX5Rhr5k8eEvq5kSjqm18tLoDptBQPyjUNe",
  "key25": "L1uRHJE1jCyKADkX6RQZJs6RRgfFkTtTWougeQfAu429n7CtXXQF7RmqXYDdhmcoT3LqgsB6CY2sDJZtg3R5Exa",
  "key26": "4TdeSRGjQd1E7teEYkZmPCthnNxHmgK84mkAvp7rSgvaPfTR11GfGzFn1CboYHLGMDUo1j5ccAwVBXtjCzrXh8aj",
  "key27": "2weWdxDYdTbaq5C9brT682SCwAbfq2rGnLLk18z9bCRWRxap6TxBmMzEWQwqvqLvw6DnmnvSjLbFe4xyVVYeBr9o",
  "key28": "5xzWNWhzZBKaXJhh1UHhSrgs4yPHmzwxDWgDQ4Zr3ny35QuR67cRN4FLe2q1LDwyXG3zU8iKpJ8TSzpVKeRsbEPZ",
  "key29": "4FDoHH4MyecMUwMybouX4Qd5eZHxJThPd7aUkC9rF9rhjZAWhgP1Uw7HBsXaeXNWuWgytAhB9gTkH13hv7XSmeLr",
  "key30": "24CQBsLq9qBViWt4FxM9QMhQHCF8Wy8zdWLxv2P9wkaHLFUFucNNSrUR4TtRYbRCAyDe4DDcTYcydwXrERURKqwx",
  "key31": "dide6vTyurZ9CKRXTizRy9fmax49j3TEDn1yWWxeQfSPgJDPCRwJ4J9kVfdiTbBmYwyehxbbX7BSzCXmonNTNhG",
  "key32": "48SbLdcBjtGrukj7x1Q5VVFmiEEiJsQM2PMN1wFgumfyc57p12ovWYQBspsp9oUJCeuE6FPy54e2CBv65pH4rvpP",
  "key33": "5YWe6yML79gU2pbNNEbDx4JZS7vzWB6SJGPAjPzF9LVhzsSjRhq2AyVcYBpUzgPFLmGYSAherd1vmHfXRjdwxFLr",
  "key34": "45sznxcxGgVrUQVw1XKvoX56eDHgx92dxQYcBopvtzV2WfD4AZMqk49LeJhDZJUwzVF5keqme3cgc9uXqc17eGwU",
  "key35": "368NyUGfDpb22pNuVbZsNnw84dFcHx5CSKxJpcdQTxNpjynmMdWGFMMrCyiQkHrbTmnmVK4mgDYDoGVioj2xT7Xe",
  "key36": "4X8C9kVkNnhS9ygswpNHSTQh6FJWFRgA25AmQbwFzy9kCm9tMwjLjWtd736UZjdETT9BVhdjmzoGehxnniwmphFS",
  "key37": "9TPbVCUUbiVN87dmDsQy9SCDFyYfWatd1u2e1pNb1XK2H3MHJ4K12JESRfVspGUjzGoPMTm93kk8wPzVMPcTqBW",
  "key38": "4Z5U2MiDiyTGDrzY1aYBFmcH9Ki4AG5uxT4pHarzW8Aiy8NmDpdJCur2Jp9XMhQhvvEPtU87ssM9UK2PdiukvyV1",
  "key39": "4Mrj1UsMdWLkjdjzNr4Y4W7PcdtELPdsTL1Yxsb7RYuqWCmhQ1FPTrRMWMyAv7wiMRnr2TZqYFMHWZ3nRmGL9cQs",
  "key40": "3KJgXaPCUvypZua584LsfwJCryJAZZnGryC5GbiCVdKgb3ERr8PRx8w63z1AEMacc9bM15jdoMGbzVtd9wBbQr8a",
  "key41": "71NS4hRdoGZfycWNbuy6iu4DSVxTAMuNvttYF6rREhHZky6XHxJTeZr39NPBdZhXVkNY1M8SzYHUN63FvXyDpb1",
  "key42": "rJyLvnRnb9qjC7n5hyVAyisbq7qNVrkbo9kdDmWAmezkpBtfnKG1n2oTawiphgLifAZESmhgH8MPtu4zzMs1jWc",
  "key43": "3ncCxpZBrtqWY1tzmV2kfXEJTHCHCq7AySttRKoG72MT2ukXnqH26nnqen4nADaPdMeWkdQ8Rs6Zch6X49pGi8KW",
  "key44": "3UjxZi5dYnt2336hHWAL7YjeEHaAKtQAGpCdsg6r5EpTZTAfL4NfYC5Y3AqCq7V85gDuLugEoHDeZEzB1DUNZ6ZE"
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
