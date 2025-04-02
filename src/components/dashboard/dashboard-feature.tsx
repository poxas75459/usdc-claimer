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
    "Z72Pmn9SCCTrJXZwa2KfJQykA8LRici9jnAPHbDdYzNRr1yGPCinBPpsFN64vZb9QmjCAiEQKbL4ya6TDEqn8xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZPz4UcdiCKrhSybt35G9Wqd65PwEFNjTa3jXvvb4MRnwv23FgnT9d31nrEPCkouQR1TzScv3hHK7zMS17vSvhoq",
  "key1": "2buuy9VJqDNNcYiJdiudUCMCSpvTyC2sFoswirgE4YmeCQAY8mPXZasa4WYAn7pxQoD3DBRGbLrDkRYtNACCmZdj",
  "key2": "5d4ioXhB3DEJcHYg7WK4VM1sdPYRaxkLvzdjBdcZjh5XjBxo1hnMcTEP4HQgPx86UbbW69vJ7qT31fk6JQdUsrrj",
  "key3": "5d4kmYRdaU1W9tvNAqHUEVf1PNZkcuUrtfEZG6WtxAXLeVjePmXBTVpWkRt4S4pHLqXKxmp1mwtcUADDomFCozn4",
  "key4": "3HzvMnVb3YWwhq1c3k99CdeZFMJSLCxe8VdPKB1ysxN5K3siLGpxxLhiTFs9ejXBXKAyZ1dCt7NGSRZSnAe7WRJp",
  "key5": "4VH31tMSKxTyv8rhSQkCzrUXdPvc6tnMB93k1Z7v6ytdeTUfUQzUtxNQezocAcTAf8Fmqm8qpgfDLTsR6CeAANSH",
  "key6": "28hFnXnJ4yDFPr6jwdtq6N3oD8skriL2oEMH44z39MtGxKsPWT4r9cxUkogjDQTkHaHQHqnMFo8rHZAHFzVY3oSt",
  "key7": "299ZhVSRhKUGpa4fsoT7UgQFvFfMYFVDE6yQRbvT65j375rbgSFm6HayRTxGFKz9N4sJsf9bws6mEwoAUQZcPR3E",
  "key8": "5PxooYqeMtfpLomcxQvBD4vJb9GwLdqamE6q48h83K8a73vnmaFq9p5B9cZS1XFQAGius6op3Soxiye8sdqHgrhQ",
  "key9": "4kPV1ktJ11SPSLv9XqAdmPwg6kZTjXT9govfU4bv3HxkHtmepkUQMPixBzDRKuCeB8K1B4RJQDSvMMkZ1LSrLKw7",
  "key10": "HKbGKW9KhJoPwoLEd5eWtrJd8whEusJph2APohqj3VmQDZnabARKG5bpb8gYRgoyY9dMdFL1834rsPcP34JFmhe",
  "key11": "HnikFjqMmmyyqXGZ4AKvESxBuiGbdHBYtRepTPNstMPt7HmCiyC2w7yUY5QNKskcgM7wLUiBQoR3VZiC9sTtxeJ",
  "key12": "2fK2RHsqx6NQLtMWvAbjvoFKqPkMnX9EwLU3XqYv3Lh8no1c2UCxhyHW5fGvd47wFog7SMDyjuPDnethNHAvHgPr",
  "key13": "2oZ4KDFKkvazJDC9W6yzYCdFPUXzhcqohf1ELtmD63F3esocwGDz7nYRguBVNAtd2B37zJWF81Q7WCMaFJkRcVET",
  "key14": "5omBUzgXwgKnsQHsyKiV2SBcSx2ZBog3ArtLzbKHve4mbsGi8KfC2uiGe2oACfrQDSPS3HwfqLoUJjSLioSnjjE6",
  "key15": "4c3vMpkAQfhF38EkvfrxFqNaQm4m8wUYeo5xWF2kEw8yGqt5KNCGpMDuE2WjyndFjPdUeHiJyCUVsehSrZMf6JPC",
  "key16": "2uqSzHnd9ZcCC6qGAhKf15R7EgSQ14ktQwQVtACqsztyk8pkAXXH1D3bgL2byZN29XuBkoZoUKdTmT5EkLGcV84V",
  "key17": "5vBuNJvjwt8n9A4vhNm5gMybT3J44QLu2Mn4wi82CXyFowpr3yr9cyY3w3eB7Xe4LEHECyCNKxAYx4Rfe6paNirn",
  "key18": "5YpEZph8nYikFUTuGvyHgwWxakminvrx7RN5gVrUFyV7gmP46Wq9tBTShrybpD5JBpU4ePi24kx711sv2AhfVGsn",
  "key19": "2HkbKEZx63Fk6utaSWDFRdT4YfPhPsqEvtMNCGHcjbJVSWSH2pNEfXGBcA8TPQDb3qVAqYoztz4QLmC5xoTDFecf",
  "key20": "E4V1zANszZhWytKizUbsMbbEhtnZHEMQZqhfQ91jnJxzRzFhGmrKw7AMwvFn3nMXF9bBk1LYyKFdEkFkZGbmrgs",
  "key21": "8Hb2zTASrW2zKSuEndYt2z8uQci1N32zkzN2jLayDm6hioaUSNL2YF6FgJk79kzg2tFiiwMwggmcbQ4iABSA4sJ",
  "key22": "w6XnwgEAd6T4xiUoSd1DCqC8HLCMDXkramN4KtYFk9vRe4mF6coZrsY1u9hGu4ghHmLWmFHtqsWsJv61xP12USC",
  "key23": "3kpaAu3Y1XavoW3p8JnCdU3Rgf4h9WpY9BUMnz9ckQwZW66XdFw75DvmV7kx5k8HaiEwRnSt2RZPWzBG11Enyx8G",
  "key24": "5S1SqKfYk8BYNtatvoHvtXKPpacRukNU3Hk6bpBRGdRmfDLGPqhTs86TdmgESR9TruWDGk31WKtKGdc9whMSRP55",
  "key25": "4Y3eiUbkhthrRiYB4x4LdoMN8jYQCLKNsE3HBXQjMYW7UUVibkXLdqu3t112VG1h1PRn7butDferTNr9K2z366ER",
  "key26": "5p7KCuNreAPkFyHbvBpuPyf52rC16V8JS1veBKkR3UXNHc4bU89yniikKASASF2tHN8ZaWvFf3iUg5Xh9oNtsb6P",
  "key27": "3vBpEVnYwviCWmKwD98Ba7eoBUAvvugp6RkjNfQt5Cc6qJa9KGUdU8zkPqACoc5MNdvV3BXgugZSj4UVyNgaxW9F",
  "key28": "4qFqhu8VEHtM7tBZPCwLLCR3CsHXbPdJKZNzqqNqL6anzETALJRyTSr5SASz1EtZYRpQnxpN1hDroADkL3csdTqm",
  "key29": "2heaqs5YFDxKBHg16Vbf8G9cmD54KjpQX5kxNBirKtuiKYwTVggHe7yFTAk3LAf8bifkxMh1tbBKR1MUGAfbd6JF",
  "key30": "k9Syzb4M1pUzjfb9aPgwpkZCbeVqyHJHMW9iNNjf4kteEMD13mohQaWsmvhLQ2pdF692zqKiQkN5N7f3XxFQCAA",
  "key31": "3w3gNcxP3sJfSUS4PY3fwpBuAmrFQzvL3EHeTd3opgXryAXAUq6ZM5wfrjzjJ5Dus5QBts4nZT4onazsPhKjhmhN",
  "key32": "5iE1Zskmy2ob9MQ9gyjuQ6rgizybsiGofHypDsywqiHjQuLwZXcfYqBMfiQXdYQ1iBtWJp1Aq8rNEEkUb1KN9G5C",
  "key33": "3ccfrXUPXWy1wW9hBhwoxUaVffGW1mGDDRZBjxwkoyyCx1LZ5ybqC4ctP3EUPKzMkBuZ75fLwPCrH9vNYRfWY2gy",
  "key34": "3m4s9D9Sy9oBCN6G9vrVoA3Aimekod7BSNhdWfqU5iVmHkY41K9ad8byx55o9DMhNsrXGmRXrN9HQQZy9TuCnGsn",
  "key35": "4iAjkNKCZhkrbpSEUSzRNAhgcUAL32kSZ1omTTUTsAfxC3Yr3PaAA7kYKgMt4cawKEyREb3YtaZZ38txx8K2CaaQ",
  "key36": "3zeQuYeFcc26bzyF4J31mZ9WtLxWvZBAibFMmiEXJz1F3omxzs7eRF6qVCrGNBA1MApqU2PUb7Gy4ASLxJ8ehkzZ",
  "key37": "5k6K7XnzwDfTReYSfzN27gJafAQa3DkQnNVR8p8cdAHE4QfPCJmhvFuM3vPYKBbkS1DjZCUbxqXjMja3NF9fcUnr",
  "key38": "4fNpfQQUVCoZGnpwrrMSjeLJ69UkqjoCPWrV6JURVfZMj4gqpSdBaQVXGe78gFRMrBDobSj3ThAoFNryKuWBXNWN",
  "key39": "3VkvSB4ny9UcQf6mjDsJZ88pC66aoQtWZyCsnajQwLMtXbqUj2yTvFGsfLYd1L2gz47x7a9AkekMAn5AYKeG8YNT",
  "key40": "4kbgnMn1xZonks9WEy5tzEQCJGzkHfe4B3swzNKgxBC9H4JNdXw9yuT3MCwNbqC5oZ85U7R9ZoEUQfKGfwQ1Smij",
  "key41": "GiMAsAyewdVV4aZcaPsTPkrUr6fTFhSpH26ScfnxHo1PtooNc6C2w8HcpQ11csLb8AVnQVPivzEZCwH7fRC7QQ1",
  "key42": "SVNSA6z8PtgP972x8P9fgL8ijxEuh1N5SeNqCMTgSvf3Ds876cKeKGxBYDFu7VMgUdXzCQa1y9WaAvHoHjvqa69",
  "key43": "221ZV4XHRZdDqSMraj7NXKm2L253kpYNnAvVxgS96tT9DAj9udU3gue9WSfuyCkvRCpNbPctgiPcqhyZwxqTt4RX",
  "key44": "3CsXbmSdogZehnrFupLgJf6tjDyMpmoMuhZV75f77Sg3rKXqKnod2gFR3HMHFy3nBgejNzRYh9vMKXarAx8BRjEN",
  "key45": "4Jr6oSPYntnAJNDBNYcpa6QdyQu4yCVKnJbuxJh6wMd31d4wGhRVqvfuz3V2NhVcMEcPpN1RkrtygND5DKySgosj",
  "key46": "C2MAzjgkDUM441tHdFXdaEGot7mHkBuPwVFogfanWqrW5a3BV5vbeSkWvi97nfwJLd8MsWb3SA3cWbPCWVRjdgQ"
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
