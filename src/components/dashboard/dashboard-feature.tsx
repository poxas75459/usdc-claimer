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
    "4BoDwDfU2f9bjWVj753zSsZ3JrCKuKTAJdm3D1vrNpuYyH7DZazA5ELuvA9V7a5pcozDJFYkf4v6n8hHC76VorpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vwCsn3q8Xh5GkCGKSYCpZYd6A3RhF6ehTFqeQvWeewyKGiLXPGz2WUx3txZyS7PsGMvuk824P9dR93HnAwMiXEs",
  "key1": "57qwQfQK4nsPbUEB19ptDebB8xGEBKC4u9KmZrByKbNT8CC35rySSTijHZmE6TxVZYK4zZxpn5XxBCF6LHL8J1sv",
  "key2": "4UujVwwCpdKqsqBHwDu2n7Y665bYhSbj3eJfspdXnRA1GK1kUcA6WwXCfZhPaEbEtjUMxfJcpFAEqe58xj4DJVsk",
  "key3": "5WpwLTCPfgNFF4GQbyXwiKXTUEhKkhAqDcXtfH4vnQeRuaXfZYRuVsySH7Np5r6hsRpQJ47i88agqhtoSDiaNbef",
  "key4": "462Pg3LpSQohi49d2aUysmRa1QP6iWYVEbUQRygk1tYYPrNwvbxgBqsibPfcHNVw1NAmfb1XscfLjpDoPoETNCyL",
  "key5": "58f8hFCP5txqJk2YFb3429EuPKg7tcDkHj1tHXMVWiwDQpS51wMxBg3kFUcWxf1CSasAbXnXNxPKDvFEt81tSzPL",
  "key6": "4E3BdZwt7QiaJWgQ3Ct9NxQFw2euLBKZ45BDZiGeHJVHxkWJC7XQwWKRxUqReUQZSTarxW5TGpqGrboX3EHMSm5q",
  "key7": "4TKPwWBip5q6bLk5NAWQik14SymhLh32LLhLkpVZSkbnGmKMdY12rhyEgeagrEjK9JzqsoPnqtu6CzQg2n3M3gxx",
  "key8": "2vRCrzFBzYsAmCaAGzA2rxwkBs2b4FVPme5VvHxmrVEydS253tD6xgsx965KQXa79Tmaso3LH4CU4PCoNaFYZCAp",
  "key9": "2tMWxGx3VxFTXD2amxJ31A2gnPp16qqXgCxcJ4P7Rv2cTXV1xuaAFSWBeaUZQibB6kMj31TGuULgEioud9EmAWCe",
  "key10": "5rFhmg8di39zz8GrmQhUYsaGE7QocMqysDYyJYMfDWLxqgy2Y8pPa2KD1VbJWdpTMWgdULt2Z2AEmFM1PzUk1WPB",
  "key11": "4kCvSVwz6SPRkq2yPcsEuo88v94JMQiA1ajzrLtoL3NQQBCX8Zn6kwd85BnwxZ7vBkhcJfyFmWRX7ZKRhSCuiLu3",
  "key12": "5CRE5ZiCNaTuu5zadrYYWzvpgRoPgHhkoHnDi4ef2s8mrMh7xrf7LKFa2RVtgZ2759Z8yjgRMhJKKVgW4HcAHbBG",
  "key13": "627ArhDZSBnsd4kqeZbcsBVSUausd9vSSy7v5UMbh6jGbbEvJwHtx77weiHkvUghMuxqRChTMaAAe93T5k49rsje",
  "key14": "2Ju9nv3J6N9KnjHMXDqvcrUwC2eC6MjvMG5XrxiKV9Ktww5hFqbH9y4pJrBM1k41e1KLjtTf4aowBLbqKn2DuvMb",
  "key15": "55e5iYJJv1jBft5APtNEMdoT62hVQJAarRNKEt7co6yH4bu1vyjAm9dMbdmEZgR3speUBs8b38VS8SdJxbXGjLQr",
  "key16": "3qijPTox5TNQdB768w2KsDH8avhvyoz29iDMY5EA2XjrMSUJpL3v29ijx6mzPGA8p695xkW8TBPGMx6nCwCC8KS1",
  "key17": "3z9XM4Kx89CgWGfig3M4YfVE7GjbtnaC4ujNYtYG71dHJbDn3257UiE5TybMhvHnKX3NfnwnVMQ4KNN5KhYR3PN1",
  "key18": "3spTw8LidP4GfsFamQ8NrEgrH45rLNv7NkFwkDpaXFBsFpJdw5FqpFWh9VJvJaxDLfyhkWGCDrwYxfiFQbKE9mEs",
  "key19": "2FVNEtKQaxaAmAXurHe6zfDdgV3PKESWQ6DjyJSAyPw9AB4NgqTJ46gvmGTddgwzUWAAqdeYbTUK2m9Kq28ovTfR",
  "key20": "62fVKSXQx5KLxeGpr45pMps18VD8wXSKZEYPphe8mYG6J3ovkGJGVR5NjkcVX91nWecr7kbGm21UBMcrDFjqmfzn",
  "key21": "4Rdf2JwaZgTUKjLnsC88WNGhk6HFHPKBgr39GgioCxjeL4cnxKGuvLLTjZGFSnzqpLgkkYfhFc76hYEW49PRjFCL",
  "key22": "4dqPJYABVPHfRCwHYzyj9FA5msnX7dXyMc13m4jYdLAw8bJUjQR1iUHyfDp4bKBHbFZHjPSUSyDHxvXBdFWDPjnB",
  "key23": "33Qsug6qg43iugFntdz7V7DQtuMFk3eKVci2Pp3SwcBPeXBCXVsoWVgqSjxgU9UfZQV8tMV611HEaQz242ME9fhW",
  "key24": "34T8tKjb2y9ZaAtfnRx3oAHRtCy6izUT1z3JHVzQESjerazFTF4nmBHzoiXb9wPXH1oe5qYvcP5nkUWeBUY77twH",
  "key25": "5BJ6qazPTVkXyxjAhBZQQLM3x16UEPTng5xXcCKV2CvwfV2ws779EeHAzQ4CeEPWqBaBWgQU5vRe5rqtWuzm7eUm",
  "key26": "5rYZLk7vMroZR4yp3r42RSabp3UUPhK9bx4XNxzMZLT2KhNjmEa3ZYvZZTXWEeYgpfbwsWKvQyDXPcPBhNZZMmk2",
  "key27": "4TLqq4ZUghx2P2kvHSNriHAcga74duTJeAbv3pZcJUH3k56SGuYedFczQRmY9vo5QANPBzhiUY8ZDFwQLmheKiDU",
  "key28": "3UEWERF9TVAaXUyqinFCq45ac8EQoN4cUmkhPUC6W7NdPC4CrDZgXeQRwWLJtWKPzen226H2SmEG7G4dWA7d54Bn",
  "key29": "3XYjfNCTtPro3Ubxyf44KUmC9uEnV8KBzT5zhJuoTQ1teewmuU9qDtfgGA282mx249tGUkvXpJM9N8afRJSmASHE",
  "key30": "3MP5ZFc71UZNaSCf39TuWt2NTgeMFKZcCDnAG2oi6qLNGsktSXFwEzrTofTotRhQgMVRCJrvaJBvS97qHK4nr9nT",
  "key31": "4RYAZwMrXpbNwPNTb4wRagwdJJ7XkeHDpcyp9UdQKQwpzHKXgo8s4oZeCh2sxmyLrj8SdUWhMEDs8hMz4FSRQTiB",
  "key32": "53PWNGSvaW8xohL2GN8vyQHqpatYZHDQmNeBoeTGkGwbupmzgwsX4kktTvt9RUFEuR3utC5mm9VxBLjVgg5ZqTJ7",
  "key33": "538Dq9ivYGjBaRS1yhXCT3hr8pHFdaFek5y2YoSTtG44MhUq1UoLtBSEpZQi3ref7tFSjn4X5hR3ZJNQD2vUkdXJ",
  "key34": "29jdoRoQuKUwHGxpD3C1qjCJdLj4KP1Dtiv1WqH1bWck7NwoFq8Q5Dy6vDYjPok1G6aBv7zDmPxAgRzKP3EK1Q8m",
  "key35": "2HcPbz9sXKg1MGRYcZUNJxf2G2iX6sMnmZiUij1BJmJLRRmS9NqMUL3E58oyHf6g1a6PtLK5sHToTxybM9MxuL7p",
  "key36": "3KGtXpCxpCTZq1VthvzsFBdD9byM3hPf3nu4NwpjDPdWeNjpPmoDNDzxK5GpZHPPu1eday8tdKF7hKVTm5ecockv",
  "key37": "5WwJxFC5Xrt8jsgMq5mohL7PTnKJsoWA6DCp1JLziGweP9QVdGcPf57ctBfkmehDHqMcWRMQqbK2Z9NHCgQUcuAF",
  "key38": "5xoEYjfZxWAZMy5EEAwNLJjqtnY7kgfPaaAX7pdMec2jSQiNS1qwNYBft462awqrYzo7dBk6DY3oabTTdzNq2ZCh",
  "key39": "2VtKBCyEArPmikUF9HMsLFUSxj7GT2ncR42JtaQP6RJ4tD3V51PUZ7tE1zqyUyWTjBTTv6CFYnrZWMs2h4NVAon7",
  "key40": "3PbrXH7Sf11JyHQWZzxio5mCPXzKHEgEDHsHPpzBWjrREmpbEWfxKKWvpJkjVqu5mtbbHpFt3Zkguf3KRhd485qZ",
  "key41": "4FjWPFEfm6MynFJfHaGVBPwUEhYqCXs8okiKkAuC5h8UCcBPXKDHZYDUd44fLwEjBq3sdkqmVqvHNpxyRD8CTDEW",
  "key42": "3Vkvvt4C1rxVP6wcjHkovHU9krt4VMQxUzVPnT8JgWV3HihsuLPoZamh7ASic3inTkNCzrW4yvhX9ynvr3HrQNqP",
  "key43": "3oCvDpgCiugvNARMjs1L5814bdxTnEetA564xMFZ5Wte9S6TtAgikM8p45eRfPE2ThiHp52ytRK77VKHeV2J3UAS",
  "key44": "5ZhxJFQK5BYTb5nhCKHZz48RU1rgD8VEWGFdtCEU23VAUzBDZrB5QB7es3uCoAtZDhrdH7LxGjhfL3ghCy4E4RRg",
  "key45": "3PHvsqqJSASfkDMWGbWLGxbChB13KsQq2APRojr6kvKdbPGB7HA9GPMQCQC1rQfYXA2GVayguGdYbawwZBbBSadK"
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
