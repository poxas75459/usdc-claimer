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
    "4JcvwGQ9L7kcAt59ygTccSENqubrnHCseSDvw4jEuakdiyYJg6wZ2GdJbHTaFe7BjTmYLKSR74fYb3GC4ZhSmvGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8pLtm9MzfhwfjGsQKwQLGcTgCrnG4NEAkS84pMfDRZdESX6JdgocpUEds2yGZyb388u97xawnbWkXYRqDYjtBy",
  "key1": "245qh1KV4EhUEwHK9A3Px39HyW1ynL58vJyreiTPczgG7owe1U34B9XtV18PUqKgamGcoCYq2S2aKAdnH3suo4gt",
  "key2": "sQtnosJ8h3EWjj2PRm54BouCGKeofWN8sPeyYgU5x4x1ncet8jAJjN1K8WNxEEZRYdHcaws8USkB6CkEcodgd7g",
  "key3": "3dJHewMDD5LyvMBcMjn9sTGkvHDXqFKTwqsNhDAnzMjaSkBeKHxqaGD5LhaNCZFrnti5wW4sUruPEveMrsrrfQqN",
  "key4": "2q2QGorB5zPfS5yQrKQ8fpJRvg6hVGqVp7XDGWZpbqCwqkA2oWcSvgTVVv6snmvraWea4HQ6b5RbKLM4bnhpu6ep",
  "key5": "3p8TWZL6iiZtx1tKFiFVCgC97i7GpNeYSbRbHsVUjCnbovAeTsytziFcvrrDUheyLi5ai6X726RqauR6FCwDypeV",
  "key6": "2LNvyEUs64ipGTJmQPLBhQSvHfAo7iQ73FvZFHtATf77iysSnGX4fa8av1r2E56iqvPQetexqKi7QEGTPx2XdBKw",
  "key7": "KxGpTmofLPRrYCieoeFuCuuUcuYkfFhjpERBrrwVqxSVGLnxuaSB8HZf4MDosByavgPqFk627ohE6HFDPkAFfdW",
  "key8": "5Z8EMA1PFvATVzDfw3Ktvp5VCeQrhncKaTWx5Xy9oW6j9EFYo9ZzFggTUVAxLe5FUp3Jg9vqon7ps5B1son15cSm",
  "key9": "3oGKXYBT6N92WdmQ6ZWAmkytfEra5bQG6NvY1CTmcqedkd2Rf1iWbzP4WhEjicFnsJd9NBbomtbuMaZJpzLJk4Ya",
  "key10": "2gZWrkyrd7GFQkGFuav6wgPXpTFRXGcyCFVq4DG4iWxaZxLUei6KwMg522kiyC9pZpNccdpYkSuVFyGiNuDaysEp",
  "key11": "2bkarK9T7gKzXLjMkeZQRSZeLj546bBBd8NcdkpNDzfXtRwDY1GMkY44rD62bYVwwD7RGWvgaFPJL98QtW9byD9S",
  "key12": "4NMh57yWN4sYfCzeWmC2Y8wJnwGwjHDYV2Hw9uj8Xd7PWL1ni3PsVtsmEpSpfbiKxNn2U4sXQigAstF6GtJny6jz",
  "key13": "29Jf81rXKkJq5jPjeUArAJC5H3h5iAoEF6L47pwHqKTSPhiZkZSVyzkNgktM7y1pQ8RqojUxLjEYGc1zdiKfYJUn",
  "key14": "4ktL565hN5AhUyqjmQtD5heUYL7W7tsmNr6VkMHaqpA2EyHvAPmfLuAEoSWwnRkGqN9jrJzVQTZjxyvhcFBptDG",
  "key15": "27et5NuyC8gnf7FoFodKyZax4P8JXD5NenB79o6NiqNRf9fBVYxVcnRF9EE9D9J2tkVR5g7XYUNk9nZbwTYjFqGx",
  "key16": "67hoyvFUarRzRFXRgM6k23CxqEPb9iL8NDExsNcWh3Br9LNfwtTqG5MMDcgbZFa3YG47YC2EFPbPxC8rgKUEn4a8",
  "key17": "42G3FDSYnTe4MgTSiBnetftBGiFDRjLGD8XcuwJ7X7ynC1DMhX3PnEhoUfRrUdtQ5HRDDjW3ojnj2J6Gnw1gotXp",
  "key18": "3S6amqTeTZvczVMVJDhTuWUUXknLYjzzEXP3h87dfveRbWu4v4Bs7d6hFqP8p8BqzctckWZg2KsBaAXRH1oDSdFM",
  "key19": "4a3kpdHTbbWMgxvv1WvYvhzRKR8RJGxVA9cj23kPJ13pEL6KbgLC1VZYHEmWV7KhcRQit3ELxtZ5VvZjiiH5m1B",
  "key20": "5v7Q4Vnop93T4VfWR5Taq77hsrGjoM2rxpmeiCV5DcPVZLJ7QpumspP8h5N1ftqT5D1Dj6iRZDEk6XQbBRHaykQh",
  "key21": "3NRivZ3ki6oaZiMRgrFuJTXttzPTyMsjpuCMi9G5UUxis9ypNvLLcgQNfS4MUvAbYPaRh4749rwpmts8JZ69wasw",
  "key22": "hfZh6VXQzAPjq4W4FQeFEJockjjSvsRgHV51HTZcHSD6cPQsdDosz7FSMWnthpjTcv4kSzqCY49dx2XU9pibKpU",
  "key23": "3f3fwa6sTVaMbTAMDWqfHAYeTAKgixpZBw1BGc2XDaNYoKHdJWdvmxLcqxzUWRn2wfsVjxCQBX1KxP2KGxrMsMTX",
  "key24": "2LrN5ASShR7K32LefYrZmDGZN3PmmBrgehw353ymvh76gEzraPeVfH46Q1FkJE6UCzYef9DVDXn3SpE9CeRSiybw",
  "key25": "3Y3Q3z6brGdb5sR4GbpDfQ4GDLex7PsfXKvLvJFCCgFJSEVkqQorVXdrBabrcG7NTbWNBR7U6wikXtPFdfgK5z5q",
  "key26": "5d5rj7J2ZgsegoewzHhA2UqBJh7RoKMeCtxcDKiXs4Rng7rp167QCVr8nF4UArKvGAHBv7digz7q5GiNtNsTr7oG",
  "key27": "jqZz6xUqtzM8CV7JXr3wP5gMk3zpwe4ebS7qAR2CAV8WvtkXc4SburT1AogV9b1dBbXXpnLTQdW8VXteBtgK6DJ",
  "key28": "2EQuhiRezR9S6agsg6ierp76mUxccv7TYihfwKfyNrAXirk8HrDvNq97YzE6q1FupP2LqwK1ieAwGZz42nzRie4Y",
  "key29": "59yVBs9BJPQxhUApKGzJSYZDr3sUGVLSqzmTnhUtNGFxZq29sRAfkaUSrJwRAR4Ty9xd1iwSK3NaFsVzwnR6ZSCU",
  "key30": "4jRrVEjniqHrfZker6Rm5dA117zNojvsPeg3z8kXQgzyzR69ccc2dsnbcrk3258A9eMpeJi3X7pvs7sfZN2neZyE",
  "key31": "21ZCjpUARUjDVmNnghaBaxvYLWdTWYLNQRcwYdq2so8n2mmGBgcHUSH5NQkuCJsBxe5NfZCaFfhnrjY9ae4h4f6B",
  "key32": "byHF54WBmaTBV93YjwUqPojHyr5bWA6w8vah6MaUdqgAVNh4MQZVYwzBXR6Zj7EwW8P2KCWKJucNEiBpMtfSBh3",
  "key33": "6YAkUHpf3Ber8D9aCRgVqPhjiYuuyfSo9gVTfqdAcpSk1NY3UcsnxzEYGoTf149regp1zjxzAAZfrHg4w99E21J",
  "key34": "3dLKnnjTRGmvBgt143JtPoKLihQg1cttb1SNSdJCDJTuxxc3bbrWDFWCeeKMLPHayjzh56GQQ4ankN2W8yceg5xC",
  "key35": "5Ji9hSccZhJuwwpqLudRuKuiAG26nwBd9KsHaQcyL9t8rRDbAzBRvEECwDNmkvRjfJD6LUJCHvqFcmYQiBwZGfWh",
  "key36": "5ibaoRL6Nb6BTm6FhhySrS9VbwrGdFDtHtLv69qfCuFm26j4LwWJU1KWWN91jgG5eireWyFmzkgwxWieu1cCMdRG",
  "key37": "32dsaqSxbKeEwMKRPyuG4PJfynqopZrcv7Hg2M7pqy8VarLF7X9Lf7BmeZHeLBNCXcjYb2XQq65Mkxka4q33eo9M",
  "key38": "2WnnN6J9npb4rWrrZASByc5VdAZX3oQTWoEHHfZKhzqctVFfV5uEUDEcnnqvdvDvRuxe26ERwYS1je6sX6psT2nz",
  "key39": "4MSaqukiCLczveSE3vJiYc8iavU4YSYiwWQpzmyERRKJH8f3KEV4fk3gUPGA5LWg23P4bYcERLDU1nBUGTxnwxgu",
  "key40": "5EXCf6VV8kUj1SySyvm6XprupFncgYN2ELLPRmS7wajA3t41Vpid1F6Hw2Z6T7zEEpKcvd9cNyuhoWSkezcYkVin",
  "key41": "4ptVD1CHHvvZdmpiqA5KvbRdTua5WiiSp5b6Ze8nGhLmeRhvQZ3jfun4jQYvRqp8zAvVCgngx96wa5wfCgwvGosj",
  "key42": "wAwBtW8nn3dfigFkWJhQPch5KgTN11tJPvLSb8yDdUveB4NNproLptUbCgYiW4MvAahsapLPMEnge8dGpvoE77G",
  "key43": "3rRfxVcu6GxAMNhpECP47eNnWx1nCwiS6WqaQ1CRP3RZkXLqCDdzHEh1Xvv46yTt2QsZrF1YMBx68mgsQmYzinqn",
  "key44": "4cjRPb7EEjnb8QEig8UPsRtd3iQnAJsRMpFQvER7deT64a4vrm16X6GZffLMdMiJ4R3vUtnHdZtszdofinnHhpUw"
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
