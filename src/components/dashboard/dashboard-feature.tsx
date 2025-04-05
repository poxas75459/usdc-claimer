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
    "4b8YKT7HkYQitAj6ZAeHjARtN6PCsUvs9wADkLKck9Hx1cEBBGK45jc7FjXUaJsbRqE1CqfDdKc7fXJr7rFBXkji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQPHRk739X3qWD1tUoua59bACd4nyjxwvPFV1qsHcWFoCCyjD8Jd3nYAf14A9oNWPXaEx9afurvKbsV8oHbAjgB",
  "key1": "5xirUYDpdeF2oUo1NHuikJbuStnyHN2JQL9PgMCLbK3HHHfKYZ1vqqjp7ArP5yBqTB1ZGuDEtotkgZYemnuHKDx5",
  "key2": "uLbBTPNf38cao4KCEg6edX2CDX4X71MxkB5nY7PRWMVc7KSSHCmC4jcE8A7myqqP9hYPeABUu5CL3qW7hWuJ4QK",
  "key3": "5WTBeLnkhb4AT97rDx5D9rcHA5PwZij7KSuRME8jQWai8X7zp9b4XSS2FRiPikeGxEKCQdRaWwQmgbN673sHSEb4",
  "key4": "5u3cGzPJKYExYJ43h5XoiLX7tSresNa6qBGypafanvKrVR8a3U6fU4KH715wxFCRH2vid5tiYSNTv8DiauGaC6bk",
  "key5": "3QB1N3YAPa9FQhZLkKxY5yRjnaUcVyPvqxJ5jYkYvi3i1cidBnF3v1g7dppAaXSr5wut8FstBT3qqCaF7LCiDFh",
  "key6": "3VbLda2RqXxGc2sLPXTEj9E6C5a441t7WgGdEAThYHZkiLVz3B6vzb2zojy7UnEZ5StGPRzuiSqmRQjbs6YQq4qh",
  "key7": "2FLkKxnERQiK1ALudQ7GcX7Y2XccwKs1RzpwiH3P9T7U7o6dMkm2q9dsDGtVBc1Xr4Th2DDRLFeDjNbtRPxZDSop",
  "key8": "2qEi94HaiY9MXk6VWhFYhHiDNfQkuqf2hHWWgryVoRLczDUrAyfxA9Zxa2BXAPSWRf82bBLbAvGuvBPgGNpXTvF1",
  "key9": "2Yr5TNCXKPc7X8Qg8w3rywSSNNgPDga9mnb3F2ZTFDpDWsQx8a2Z4MAZbPUcCMWn7QRaFJ2YXXg9x5RQVmnQ5BoC",
  "key10": "wWqNLmuhrV4qY8nEuPLacsuybdPdax53LPRy5CGbnE3g7ihSeLoooiE6oSmBoS2Cx7C6oVksPAGtXmK6cBMHBv4",
  "key11": "91kGPwuXtfBoCgvqatQYv2eFcPSbi2oWiEyLnGhmSUKSjpuHkKaBCPPkiUYbyh9x6HwJX7QE8hTJwjWfrnbWuj7",
  "key12": "5Ce82qDu5aMSRLLkeMknk9DJrXEVJj1u9kV5rt1SFcCFtdPi8BFon8MFa1ois6UHncEcL5BeBSat9eEn6dgqP26y",
  "key13": "4pn7PQe9WKb7WgHmzg1p1Y745bVAKBjLMYunPodnzx2e6rkuGDLvmreNzzUqwebTxZMG2VUCmaa6mj4yMb1QysqG",
  "key14": "5caztuLDQkfzCXS9x6jMxqL13G2HNjjg3JUSgi5n6b937P2wCYFjeSvbP2eCvt6RcfKrkFYqXzxZhD3kBWvhN4TM",
  "key15": "52WwgKp56oUqEKuA54848eQt7MvkQHc9wTbn3AVd4DdQNGuDmm7DqnEGLsvXQjccGxk8gPMWmE3KUZG47YqKWWko",
  "key16": "4X6SifMEdYAKGLT7Evt5yg7C3xBubKy8r1Ya8RKgcZ6DLmoP1nP1j3KKZfdXHhCs16hNUvddPEd3ceKyhUy2zrtV",
  "key17": "39XRvnzNe5cHrLGeWTDTyvojYduRzatvcSik1MTFu4mmxAMr589qZm24t3chZoGWnkfcZ9bqxf1tpzyZw4AKQFn5",
  "key18": "2hYhpnJUfYDYwA94VDB2WxCx5Jdhatsb5wKzM9U2X98CdHNWxVLjRqhZicd1vabNoHjyJGZfWzqMNwEYfNfqAtKw",
  "key19": "vcZRmG8kDssTx7UG1huV7TctD8mBgaA733a4ssQpVqp86hen2zXq9Gta9M5WCocMctcqYap6Y6tCEHmiCAL15Yt",
  "key20": "5UdHxYXiXtJZqkT7idq8PbDw1KS5niftABb7aMwoM1cYa6kcpHAjk49c81xWuophjrZwBKq8P8TuXdkTimxwF75A",
  "key21": "24feeXcqXkvH9aTzzpr1nnU8iZArevrndLqKZs8TpPxZPvvMupNBZXZsoPj5FcEp2Y4WwpYxLPUWyY83WbqiKX7w",
  "key22": "5xMFeiyLhuZ9bk5pk2YfbdpSGecSnS1hrUPTARLDbqGZTh5L716YUb7ufBj3ojQyPhebZUSH2RhKgCUxxSGXFt5C",
  "key23": "3ScaqxeWvBqECQqvJMV5tJxHQouR5oE4tCmwBqdhkwPPfiKozF58rK9nUmsUudvdowavC4YqJEzG2VGGb9SWCrXW",
  "key24": "4666KmsaEDLypNmopuYw5eK9wamgx6WMvP6vWntiNJhNjzhnkiSRn7XZBwJ6kh3nB5ZtaJUuQNPpNPQ9kg3k2ahf",
  "key25": "3xSQpuyUQaDJAcBpHTTkjCrVjW5JGNpjA8E7FPV4bsPXk7nsJgkyJd7QwBxex1gSV7DBYohkjPQNa6Znm76CJVmn",
  "key26": "4eau6kbfxS7iSBoGuLaxWxcsBQ8oRWD2NQVMh6M778Cd46ZHtG1iVxbAhGc7xrPaiQp86tHrN2oFnGVMH9Q6NkwH",
  "key27": "5rnQLDU2iPemLGTUtw8jpA1Y2sGXaiRyCm3GH61ZPqMpd4ZhwoJaDakmtwyPfv8ZNxVJSib12xUUM5dLkvrsA4eZ",
  "key28": "4HXehRbenijuM92c5i4RCHiT42vo6b1EJvBz82LgQ6k1fEWDTkMS2TXeu1DgD6J2cs9R5Bnbyrpnw1nSwkVaSYsy",
  "key29": "3KM3RhiAwAeU66zT2uJTspFgzUbedA2ecczmoohYDSEx49ahYF5PmGtZp3WJboqZdNYRMHDnDS7CpaaeAnZzb7fK",
  "key30": "STXYfvRLUAzjJ6vB95eGeFz8F2e2TKCNwoD6JFhBrREEpFVR82Axv1gMTjkjsfpKxvjSwZezMLjQRPsmy4PicK8",
  "key31": "2vmH6dinhRgP7Y89vdRhKoh3RJJsTdjxUVwXjweyZGVn6GoNpn784agbCYChFVQoMcE7KSWmR83LLM2tDD7d4Kai",
  "key32": "5ADQpVhF1XPEYwPNUPgPXSFHBYpkpKoQwX6jk1RvaKfMiah8nKfamtLts9cbYUdMcCrBz4JeuwP1uaGn1VqvVs98",
  "key33": "3DUsz6Unw6ddtorD6KK8AyeKgkoemNJ6yq76HaEvV3JXRBoG9tDT2Ypn1k3dgwn6gvujv4kvZiNVajX6xnJ4AmiQ",
  "key34": "4jnFY9Ce85ihNjPUsBQRkyQCssyaGfN4nuwbKPY3z7uUdMYUcwBnhaaPixFQ4wDoBDsXkqmDYn2jeAfEfyXQzUpy",
  "key35": "5kQzG3NGY6y7YFuGEKpbCJzJaeMmRJEmDGBWW54DioiXAZDgEXtyo5vQvHVRXhUd7cnZW6BRABCfQYEb2qm3TH4S",
  "key36": "2yjR6K4htaiGMf8GQ78fnGatjQFLjkAqDVtWTHZX8bSuoSdTVm5cR739EbRqk5BuS6M4f5Ewn8zJNALmYuyrShxN",
  "key37": "5DcRVECheKJxuSaDLKzyQr2W5kcQKtR5iWd8jho6iMHrhBjbHRFJSPkNpVenBBUyJJGpupkq8m9nQKHoAeAhmW3S",
  "key38": "5V89XKnxzth3jK3SX9yzK2V3wV2V9pWTZxKo46WSAZashbp8DGfH2rw1awzukGWyV8fbiZf3TqS8iTdopGwKNGgY",
  "key39": "dke4jDsSJPTpMXEUE3GzLaw3iw1ptT4bUZyQqP2tw37n1NSKfU7jCFKDRQgtySNpn6ntEWt75SUrbEgUXmXK6VV",
  "key40": "2iUhn7ZGgf8eBd2EMsqPjS3LkWs56yiXa2S3HatHfhZTFz4EBxqiGkLxEfAsonMjuYd9npKsnJkQMYmg46fJyopf",
  "key41": "6iXwaS3caU1MYPm4cW7ZTmZZjqhMN7sbYYnruhbamqbiFuLsdn6J7RHy7GJE68J3YTebUnH8s2U8j3DLvsT8fND",
  "key42": "4vp8cGhG3ytvkJRo5gm4skCFg5woMYU2ivRLpCc6ZDYHYD7E1RjtZUoHUDGheUQu1taKCFf5bgjCk68pTfoR8LzP",
  "key43": "5tK47SRht1oMzZxd8garXR6uN7p4gSuctdNq39azwASBcDHcA4UuitKBAKZFRgqouzDKWVybBvUXJKyyCQshH3Rr",
  "key44": "jsr6zvi6j4W3Zy3Vuhtkuzih4ecEfJ3mGX3As95XYYc4aXAMHTKHTTdCVHR4oAi7m92xWmG6RAqpXLaCg9fQCeZ",
  "key45": "38zzsNe2YnHhXa9z6hRqXVdWNgm6Rz9BSf32jgUUhZNpVtPAaXFvooUR1TzGguWQSQrKUruBg4U71SDGkcZbjniN",
  "key46": "3xeyRndooATtGUbFzbGXLgqaJQRUbyWfjLsxALgEWksPovnmZpFQSorxr2xGYaneVYvYd71QBY28fj3BjnnnZxqx",
  "key47": "3f5ADbVTedxt8TcdmJLcA4woF8DtdwhHqGS3v2UNnZmG4ewASKMmJmLx5PbB92uX6SfmdizGV689MjGk5iJ7Lmhu",
  "key48": "2husteFwviu59Bj5ZKAWUUKPTB1jHd5R44ms5WMKi4ZFovdqwCEDhBwc5eHBQi93u8szmYRWs5b1NMMmbwLSEvCB",
  "key49": "2hLR9554hR9Ljfj2tVuv2AzyGtgayGM2Yrx5puQCJ2aCNrYXo9XXi89cYEfhcKucDJyA4wbyTR9vcZJ6djYCKnEc"
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
