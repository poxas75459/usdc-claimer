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
    "5cpUzXzLHB5coTddN1yBJRegUV9QtStjiEQPu9JiaEvf55mzxLzoNNBkK5bQL7gLU6tZ4riviyWjddNUsubCNQSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bojN6ot2cArNJJP2fauYtMmfKwUAzjR6kh2o5VxQ8VvAF5dCE5SMUPbwGZ7ED1iWNJbevjszGUV7G8D1d3mwwgB",
  "key1": "2DMcNNn2nCy6W7EkRXgestx4kzHrakztc5ZK6obbm1SrMjncxEUURuythTb8bGEoXD4RPb7JonG1HTGeNRZdo3JG",
  "key2": "43K5We4aExoHWsurNRwe2y5biioEUNnpkDmLVx59HFkAmAJAovtTenhKTj8DJ4rThJSr8YZ4xprVCFkYPwNKJFpA",
  "key3": "63FJpsenLmyraJAMDyMdPaNULN1cHSiEh4PzLxMwV5f2gVwQ7AtyKrDgLx3JBEMuhV5GfQN8LADSFKKafKKDh7Nr",
  "key4": "5KguFNeBzh7cmgkg5TZeUKASb4sV95HKK1SM3LXPnm99EQn7GjDGC3V2dZJb8VGfmmj3o6rbyXKUpYXBAJ8c26hg",
  "key5": "4TQkw25tVrcMFKfVnzGpt7v8Dn2gGuK9jLUtnAcinSdpamuPSNP1r3MShC5A7fEqE5Ej5GqeD4SqJJXP12uzbGHe",
  "key6": "38moep4fNdDx6qNvtjvkXbrxe3hRrG1kUju9yjnxHnT99HJTJNsnM4S1DGAM9aq1xGrLWgAwZSWnvmbYnxXBLqps",
  "key7": "29pPWA7juNyiwV7Lmg1tTik4B9oaB6qSaMtVs7tKicA5KmWwwNtj9MuCEdq581LrmN4KogkRFhMey9PQHx4K5DtP",
  "key8": "28BFWH1siYRKJhA3du7hS4gT8gJF3rmtsUS29kTmHX4C1QPJ1XdACqj9q4ufv4c76kHwuGZDJHpvCfSqoux3Y5zD",
  "key9": "58KZw3YWWp7XETAwCN8uCMPCDLo68XDVFU1sAHMAtvDMm7cWqpSMwouKVMi9QUKGLkdnbYKku3yZ5XgpEnc4B9BZ",
  "key10": "o5QHTxqspFhWTehfcZ4fBSChjcQWZsuaaBgzBG2f8wH4KgzqoSLhAjQtzfzqHAnG9DXeLxtFaDQDRA1F3wf1iKt",
  "key11": "5YzBxgZJyFi8CndfLSMFnqX1TeNrtkiZWQwcP7uCXoaJGraDW9DL7SNEjcma6qJCeLN2sQLEn6ddrnQq9p63UayX",
  "key12": "iy5SNwKcwzfWv6adLiGDFTGtbbQcHHXEQhTfveMpMsaX1YisHi4wTJ7dbF2KvvRpjzQxKkhLqZRabjgRxLj1wmw",
  "key13": "464aFgN7AstHqZCQzN4XbRKjitF9rhqKVfrKUUriLdgccgYt1MiEcuZNYyw9hBj4hHPbC94Nv5VTcMuP3vbstxKw",
  "key14": "QCsptZ9TVLxxqsB2bN727M4bsAa2k2BsxN66C8HqtzCyJQvV9WjUGGLVHbz1AEapqaHwovkM3qXingT1F4iJWsz",
  "key15": "eF1xwxGYzwpLwQacV6GUFBgqutbimZ6hc6uP4P5FeaXcyuo1CDsBDjHKSMnzqafV7pWBp24MQePzB36FvGJFAqW",
  "key16": "iZaqUk8m7BdBSJPDfSaZKEiGaiycsGfx3b8GT5jAH1v59NQmpa5hVMRcMtnFPKzbtitPCwj575EYStCFcvRMmCh",
  "key17": "4x21YqV2rnMeSwQELvUSK7dQdzYo7UgjFhs5ht4t9y4jqpJYrRHJcoV8SRidS7hK2dbG3UNTE43tbx8ULHZW8s2M",
  "key18": "2ERXmpvMmmUTr4E3J7CQ9Z8eSPx5TeosJeFKLrD8wLnesYVNyGoQdpZFr6geboDnMCzBnJoTm5ntt6MeLyNNN68V",
  "key19": "5HVP2fDLjxjf1rBJQhKY4XfuYVqbWqStg1EE7Hn7UX19RCyYBebk2Ao9odxzEatTPHqhdweCUUwWnVcx3jdLQ1B3",
  "key20": "4uG3LNBZ4FL5ZpGPZSsWt8nQ4FmqxQv6ZrwvN765hRYsp6Vnr3FaEvcvQafSDV5c3AGFX3jpDKyDnimSxbmJqGV3",
  "key21": "5RKkF3jqUPn2EmtLjN1BgVxfEwzUBvFc2PHds2tRcgaNWMZzkBBoC2FDeDkKyKEyAhUdViQoMGU2NDn9dmSsH5Y2",
  "key22": "jmBG67RAh3NAKPhFQag8PD7KHhompyyoUcZKmoX68NCABfomKsDrPEkBf7oxqP1RtarzeP5S3zNvog2MqSAjYcm",
  "key23": "4TWRNnFuVwfq5AgCJ8FRL7A1Ksj4eYm2eLsFfnK93b8iEw3bFtE6UWLKGj8YKAGm583GyTEb1LqNcP1e3WJxhYfJ",
  "key24": "45F5xVvh3Eg9jpEeDHx18GbYoNe9ChqQJbExfJoNthq1CFXS8DbE6V7ZDZYqf3NZaXZMV1ve6FXX1wRf9iUVYJKP",
  "key25": "3wGQohNRaBB41H429F2sxN9WUh4Mpqm7iTAp7hqSnVQr6HsRjZAtYbb7j2paqt9BoSDjH3TdjsqgSa9PEm5LiEQ5",
  "key26": "4pVGBR5xhJo34a7owS8s9TZbdDYMZtk3U1DwR42RTh4e784Y1T9Z5vxxFVqtCGfpuvpX5ZSx1Vg4WzsyW3EbDPqt",
  "key27": "2nbryCDXygCQJpXbxPAMp6D4auYhYXEd8UkTcrhgfkvKBKhJyV4ck8FtD57k6xTDFxGL6uMQs1rNN69bkyEwUobc",
  "key28": "3zCvded4ykDiY2nmaTDiNjXgEkogHSm6fEhMyeuooeGzD6oaLTSpvXMQxEz4RViuvVMkbEofUxTT3UfrcLK6zchM",
  "key29": "4d9bjXDPQGrJyLSBNofobWtf31JEUJ1VoFB8E9xEqdxAz9QEdPaNt759UMxXN8x82f79bcWFbeN7bdbNPTPk6qQ6",
  "key30": "3ZLK3jkz2y7tw7ZS3HRy29dGgKYNeF8PMQ93LL6ktfoFodKfQsXJMXv6HveWEjLEq5hhHRY5fTKFTVi8hbJLezGw",
  "key31": "GvSfemwNnhCH8UV8BGqP8ZLTwmT3hQWvxr8jmC2JSRbWnCtDHNwoxn8WS6hNBjpirbERaNpfgwSrR1Wokx4y7Kq",
  "key32": "5TBXxMMdtKfswScK94v9byxQ4Q1KxhwyJWbM5Dh2mTMKovXFfhYyPPwt7qaSMdPqa3rmA7AvgfF7JTwL7LDcZkyE",
  "key33": "3XaGmn4sphSrq6m4sn6S4cnh2ptykRoS7YXBZqHjAWPGZ8P9KY2CyoFyEg9vjUQDZUbjNJRm6s42iPpANFkmj6Rz",
  "key34": "59NjGcq1JCiWCuSN25P4T7CKas4hwREytYy8tQkZufiHn7rm8My8aQnuFoJBWGMp5jrFKuF14JoZeynj4yEJToG7",
  "key35": "2eZtuFJBiASiWjjX1gdkCCqRt7bALrwMjZ3qZpvaeE2k3tP9p5vSgRuDovvLLdsHGSdska9rkCq1UpTQmvGXvBhw",
  "key36": "2iLJnPg8Cr1nFtxFsuBr2NZhBN3p9YN29k1dB4GC3rc8GbHNq2bAyi37Tu39yQuBWpn9B6jRfKTNmHDxUFfE6TZv",
  "key37": "3fKmLaCFaKfFE5ZUbXFDHd73i6vbypvtDtn7c4cxhpKsheBE2WcPiUXJF9yjY8BfzjrnSjdMJDcREUHue3Gz3eHG",
  "key38": "4smXS4YarcsJ5j96GGFj2n4UCwCNWbm9Vv9ZE8evdpaYtc1FQx621gngzMCCQPjEUhPFJrFVYz8H7VNfTZQL5mGe",
  "key39": "4tH9zPFVoxVZjn4dYkhTVkgkHpmUsK1QNcSpdNcHXA5G1cj2ZBVAGHLF43aYygy4ABxYhN2JQTPwmobHG55Lj7Cd",
  "key40": "3V6RCWomC9fiFD8YMvS8B23jvq73Yb1TdsWwQPMqxPFEZb8CFd7gAQha7mXWQ36Xy6JV7DnAUTNxSHBRyW4GAFPM",
  "key41": "2wZN8Gr8z9sx3iD4j7DxKP1ABKKPMDEU3krBknCmwyqNdwJb5U7JJmboMgGrPSyzQZsJfyWwiPZ2j9oggw8kBHXd",
  "key42": "XLyA6gp5eDC2tjLguB5r1Ws3z7hjANbg27fE9c9WrydM8YaFV97FnAYgxCSJyBUuN96bsf2RFGPBiFJJv9f6FdE",
  "key43": "4ozrSp4yKscodTNroQuaSsL8kAVV2V9UiRtTZLtceBWAiSgPDv65CZGJ6t3bQHC5LQayKtdA3TVPNW1JGS6ju9eX"
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
