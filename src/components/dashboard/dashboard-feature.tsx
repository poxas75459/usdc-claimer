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
    "4QNKDPp3p99T1UJTQ8wrKGaqxEzAmZ5UmSkN2taL2oQKbcakWkyTnAm5MWfNuQ9qqZ6FkYQcbTYag3XixjwBhuPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wNy7LaXxZf1jCMQH1CWjrEVYebvb8g3CLHmG852XKEVsyKbMvBHnp9qcuhg2GN8evmMDpxtHRW1ZgEQt9Q8NmFk",
  "key1": "25ika1S45iTNDv483vgCJYbv8cnoa54ek1VxBeaWtDG1hAQzK6vmwPi8boZnhkEsdHMCpjLakUvet1gbQ6U6WftH",
  "key2": "sVXEpAgefsJQh4r3qLKgtiorrs6wdzVpEC6xXV8ZPSy1qdc7YcfNsqeSeaXa5fCs7orrHgDRWYqqsQ5j3vzoiho",
  "key3": "3jgCi6bVNJSMwmTvcWn1ikmoFF1XnkmjxqsENUCb1uyQbVXP8nGxHm8qqsQguCmpnDEWcqUXBSjTXTWpih1Rqgn3",
  "key4": "ALDNEn5SxdUY1LRzEyeFWAXf1mtkygTDDHJqJBpUApZxscEKfHVfdzrGKMXQBVf7TwUhtwC3W7VQYKT7WDPUPGs",
  "key5": "4kcxG6Vx4NXHooiN5MAusw3yv3ejbUkQ7f7KD3CgWvZ8duj454p7WEueVJPDXZsZMfniTdrg89qHmWb2968DeCMb",
  "key6": "2fDddycBAhxUgfmNvueSkf7HxUFhXXPbm9TzhnVQfFkCcuJ4WmrUma6WNFf2sbeyHh4a1owxcAmsrrHdCBiH3JhW",
  "key7": "2hZEA5VWE54P6EB8Fn7KP56AW7MNpS1v71oiHmMqHb8DU4chs4xMrXgSbvPTBNxTMHqGQwMUy8WYXUYgvm8e2dEP",
  "key8": "2BEbe4WEJQRHE3UgjGew4GnX3sigV7amGvzPgFTyfznDNeQ5hdDUnoV1unfo2BwQtr2Y63DBuxyWta8vfLGUYexy",
  "key9": "5AsRMeXWT3E1JEanynJ5mb78HaFP3WBG2g6Ak7mTSoJhHxkY18FJeSQutW5C9vYvpcsbqPFNqsSTAWcWo4Fb2EXk",
  "key10": "5CW1sT3VkkQUoxTjivpHGVAWJFC7gYrMXKm4htwtUuJkjAp28cJqzVp43dGPJNZ6PJbVPFhvBiX5fCS1WFWZBKZb",
  "key11": "2xaiQbctD3qcPW2FHkWPDpXPCy7n82P1icxuwowYLLxWvmweUYQGjP6J2uYMWW7opiMHTmYY5gToZEXDrX8RRq1t",
  "key12": "4TeY4UCCCMtxjH4qAJwRiFCvSL3A2VGxtimZvnUmTLn56XtHY3uKFZoijbPNL5bNv3KWqEkC6iDeWPyHHZ5MT2tr",
  "key13": "4cPR7nkLdugK4QnTF5HhPgZcbd9CFWyHU5zzxLnjuGjADzsvRhLBnnGY214hL5fodkCBe87t1ASAKT8qDcKwfvjg",
  "key14": "3JQEK8tYwpYGycfMYhrdocsTvKSdJHCtKEpb8KmF1Gv5CGEUcVc3rCaJAQ1C7sfRMGDSRRu6RYPtGHUMTx4NP9YV",
  "key15": "5SToXZqa8mamZDYYhpRvDmwqWSfuviDRwL6jSc2EkwbWKGR1HmL8o8tRRmfTuYQTLdSJUekJwtVWFCSHsowZJ9AP",
  "key16": "3qvi5E9siPQdM9up5cCvv6qRtSHYMeBpArApduQR2hCopojVFoFGzXVtRPCF6Yf9YTmfo3TMWLFWsgwKafpa1mEn",
  "key17": "5qDJsawPjQHNRBdoeB1kLcfiVQprZR6Ym6qP224Uxiv9bo65UZnncTWSSXq2q4WtE67dMry1cJiWBQ7McJ59Zkv3",
  "key18": "2cw7rV9U8dhf38DT1PdUVCoASMcaBZrFRat4VSkwoAbrvoUkxaiW6BRbhNpp8rUVBhGLvybVVCbjSr8WnBJy14Bn",
  "key19": "31DmhgzUfmPxAEbxBUDYABX8xR7nLwg4zh8enhukL23JCzX4vTBqR4Bf4p4DYuunKdF5Kh8n6d139tzqXJjXpDwy",
  "key20": "gbdbeqB2AdW3fCNMBngA3ThR1CnS7wJBvXvqRWe8ccUu1kcBdmSKgUymKsTRAtdDkbuhE3CjuQUKVECGAL4sz39",
  "key21": "gntwGdvAAbYyLYMrr5Z2fAc7JaGtHJtP8x69FiwKL4vcNR2PHNF2Hc2vdJRsaTfyiVcoAFFtAqXrpQeAwiikpFh",
  "key22": "27BTodCmaLU6bf4U8oPAaf4An9U2EteuzoCFoonhwyyCDqHt6LW4WPNoWZTM2WK6eUh6AksGsPfqaEaUFGnB68Ej",
  "key23": "3nBrai3Tgk1ZKHkh4zr2nbj6vJ8eQRrm6ZciMX5pFrdB62n5yngoezJuX4oGVf4a54wBxb3JqRnub9u1bkhgqNDe",
  "key24": "vANF7mxQ8wNzyF1zoUtgYQhCChzBY9zHKaceYjWaTMR2GQcPKoXBNZsKckY2AT3L3kfRhZQ1z7SnMMx8eQibyKt",
  "key25": "2d6QTRy5mAdwqum3NkuysBD9U9qHceeMqgsGB3p5kCfv5F1jfPqVgbfBJvnYos8i1TaG8BW3sBgHsd6qwACuwRx5",
  "key26": "JknoYxPoug24trA9o8VmrQrJ3S2fGM8CpRKVfc6a2vMCxaQmYeMWSm3zo4L6UQF5p2RZQsT5srF9V7haEMjQDZS",
  "key27": "2TnhZP1QjRY53Woe9DP9HfFvpVjyUiJAFn9P6KEQ6vo77Gd3yqkdrRXPru6MR9Keiwvkt6RSytReYojQHSuHzHyK",
  "key28": "2GVMaET8j2EPVr4ySvqecMCuRESam593iE8zScguAtZtv7Hr5TvTvjq4hvQai5CeJZd9bjPJJQExrx4wQ6mBqbTJ",
  "key29": "5Yh7Qd8NC7dTdbyZ4aVzw7bApnKk812cHmTXy1ZZKboAvcSPDA6UAWZhoBq1YbngbU2ciX7G6woVD2Seh9MzuJDy",
  "key30": "4dS875uJrDAeVPTpv6ygX2kVSM3rfzkhgWzAvKGVQmnvhh7ZRUAje3sdUvowKb7QSwfPKrnkjHxcH6LX1KQoibuQ",
  "key31": "2JfDJ52ccFiDZtPczKMhHg9Z5BErZhsvCzBamgccsCzAAErXBCvtWccczfUKMhbUEHSr9Y47CDmcsrRLUAtCNkKX",
  "key32": "561xPoi3siuDa7F2uJi53ndLT9KiKF6CsSSAZV1pmNQ6szyCCeGcmzHgMU3i5LxHx5ThVuaG8qCUJtUccoMDhvKC",
  "key33": "8X9imE1BS1xAF7AoH8DE73uTATx3Lh2h8wLP2QsgiQhi5CSrfnNrSv2vJM5Mv9LdxCvzbLGEcdocWZdtN2ZWB1x",
  "key34": "XJUUp5JjXnyqjRMzLs17yL7F3BvjG1MqRHkEEwHf3HSAZ3vFMDdq3CNgp24BwP3cLTE4L6432VKeLMV6dJZgPMy",
  "key35": "2EhozKoH2gp2VTtvQVh2K6k6Bv3h222G7M1HFx3DhW1KKxDqdnXFfrHWX23acgkC8pKAEfB2p3nmTWpMyDHvapn7",
  "key36": "phJCMRuAmH3pp7vKq5EUq29K9vURn3rBqqK4EZAyGbWZNQnpH5CWE9SPsZtUXY8UN2vyy4xKMnXg6w8YzZNKj4r",
  "key37": "3stBhSzNnMMn5yzeAGX9FoY3kPKJun4NMTQpaYPFZuCDywWrKoapSvscB2CqccPDrjnthfibpC6wTDeJG3x2jvBJ",
  "key38": "5uHKTtmjdYW3az9ewPQrznvi3ngsaKRc5N9cWkjDf9ohXkiiPg83mjMK5ahZksBX6XQnvM9j4gxcEEBPi7bpudAD",
  "key39": "34t43aaswx93H9TEtakFP5k98XYwTfRGGrNnZSdPd6JkLJvdqEF7kZ3VvkeR8EMQYnN2WU9po16LZLJ1bGiPdbFx",
  "key40": "37KwUBCtJBNf1egkZgEMfafMaJKKjUSt48VQBP4oPbPNyZuPpDfBPNk87yCDZxwrmNmVPumMji92DovaeYoKe4gx",
  "key41": "NnzLvB66mpsxLmfhCteoRuQimbLEsr7XKeU1HUEdrPEfZjQkQFQZkMTFAFxqYSLdLmgaG7QtRqSJnUqFm27L3vF",
  "key42": "1SoKGhd3DpUzpJgVjBYWBCZEUDTcr7ESWDGT6arGVS9c3NBoXurdDPtyVQGrLwZxo3GcCYxCVw1wh9hC2uHhdd5",
  "key43": "3oxJcvUfxA4fuVNJkNHdNaNJsdNBGWZJBaiAkWUGsh7REC37quhcPARrEav2HGBLTL7WHrdEjcfRYtpFucyLzjN2",
  "key44": "2ZZNKSHDQCryWcbGLhjE16gLkfoQt7bXQ4xmqmHP1ursweeSdBJk9QTmv3MJpbypLLBgApft5ufyrZ21PQVLW6yg"
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
