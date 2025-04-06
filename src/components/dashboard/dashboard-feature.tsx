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
    "2pLCFdZsU6H2iTtnxg3qGKxJN71KVoChbKbTdiwhg8KdybafF2jZcx7abfnRqqxcZTiX3Nkp6SrHok9ZBEa78xBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LhQABieEEJTFEVE6PXVSJVXUwbYvfpfT69KGAK32w6gmnq9Aj5DwSbpU3TapEGw33aw1Evsrjr1chi4mQNqJn7M",
  "key1": "2ezxc1vZ6k5vzrS5o7uenDKEaTJBn5JzTKRDK2G71Ec1nGu3EJXHKyapgVkVo59R1zEPFNhqPZ14WGv5A3jHBzZs",
  "key2": "644qUkYkjmUmAH7LJRZKXZiJVtwrybhJmLyv62dtBTA97U7DBQ6N6AgmMgYpz1TyAA6WmJ3Un842hgp8woEppEsH",
  "key3": "3qFx9vuXXbs4Ka8ANPvNmJMtrwHhoV8xUEo1ZzMZtiNjmfLrRuKayXHR5VxJGL2127PU5s9Ktykrn3W9FNBgtrKw",
  "key4": "ZRWjSVfxAEZX9awxUMmg8n1Mub3faAGqEr84vciY2h9C2VmUuMadXfzRVRD4TrWK9q8LXuYTr6P9RtHrWT7niuD",
  "key5": "3DtrbEYdvs1Yc3Po9qXexSqiKntKQ4vLLUpg3AKtkoCJkQoYnhD71xPk7YkazsCT7t8Xs3s6eYPXBaFcPbSzn5ZA",
  "key6": "263NW2Riqtr8JFZjscnWq4ZT83ooQDjyYVueeMuXHbrq9foBRGTG3r9hc4xE6aRLFWeU5Qr9L11NmLz9KKrzVwit",
  "key7": "66wnzrcLdR4vCpdVj59cAF9jXwJKBJSznd6Bx8ZijR1Fwq9ex2gow87UBUReVi6i5STapMzhKb2krvyokNdYjkn9",
  "key8": "yyH5cewZqCRux6deBBrjb7vZyenpWyvgEZqBgguYAveFqXE5DJ9sVXm2sTCqHkSXiZac5qSoaqr6jucyKSMvREq",
  "key9": "61UYqc9Cimqk48Sr28ZTbDNnLKwix5cB9z75y1bSijJGihj9yeQ331euty1NaRLpmQHikQYQ13QUTBtSgtQ6EaN6",
  "key10": "19gbGxjLvUVZfdC5aPPb6P7XdE67gSoLDid21ujkPuCpsiKQQzW1Cv4oXp5wAQXeVeebuersDgnhwpnQom2PFdD",
  "key11": "vwKNFzmTf9jidxf2BE9Csw2u2bHFwRrUGzVEQ3CqqSfciW8dJ4gDREfai2JhncWvThqgCRMYvn4e7SeJExeKCKq",
  "key12": "3TTU1jKuWWJur5QqbQk1qdrBbYruL7eNkLxNS3P1h8TJuHc7JMt8RoZ9TAboqRJH5QXa9BpbNjQeh74YMkAKoc5T",
  "key13": "38UrZxcppoKq826mNit65bcxFaoBPzL9B6HyoVMJfRGZ6ykYc5WLvAL7s34j9nUEArcYf4nKqgA31QJtebw5f74H",
  "key14": "fD3tWoocirYuiGehMMvBoZbcErATc3MynsvgHgMGStqrriehjU38z1i8ienCVWicAxntNBd8xLsQX9vfJWAGU8S",
  "key15": "5oe6n1qeHxGWsh9q4f64Y7ixGVjgpUSQdnFTa85A4wcijH9oTbhR6KsfhyztYmkkmGmUxKRzRbHM9teo5N1BXYi5",
  "key16": "3K4JzxrsmRcLFfuBn5RAfwyGQx2s9GpwFm6iBqv94xf9tSuyz8PkhaZdLvckW6Sb37acXbyHDwwcbdLQsUfExpvf",
  "key17": "2gnHncDhDe6PAQU3mPHZwANLVLLZaAHrkWcVnfLoWEYHFNxwgJz1F1LxB6pEbZQxvuzQJxrh53XFUQMwSTA44ko2",
  "key18": "5SCLXQ52GFX2tQyNUzW3WD6Pqgf2zj5HYTS1YaMaika7cLqmFUP9oDNEwjtoJVB1JbyoAFPKz9xqc252awtAyFak",
  "key19": "CVEYDHRKNXdWrjBy8MLvQfMRE4vV2oCErEYWhrux8TAbuEBwouuSepiyNLeEYZ99ik1eLMcy64jVW2L9zFpcREk",
  "key20": "2bxc359wVUaLgMYhh87h96TFvjEaJ8zVK4QGUgMQJn9hEbjT5xx6KToApMap7xoxxqWuMgGdXj5RgUnRALedwTMr",
  "key21": "Hb3h2yPLtbkpoSXDEQwYNez6PeNe4ymLeSfEz9Lt2Qw4Mebt2LKxADRRaTXjQFX8XcXa3mxSuYwDrWHotM6MXto",
  "key22": "2XqzsX9V7Q6no4H8R9bxaPciDdVmndzwLAR1DiBjeJ1xGzWdZv8MEs9W6Ai4C9gTz9hoD5mfFzq53VgxzZy4ZoGn",
  "key23": "5YndmcLZVp18syEtdB2di4j5MpeWu4AfRqHVyg55pmAq578LJCfn6Mu7RRT5assbzYsnjEkjV1oifzR4XPggLjFP",
  "key24": "4FsrMVAHzGw9jdgrKZneTeDBaAGyrDEntMXZMpBpbQSqhxt6fGMBGujeqa355gsgaMhqk6YBcvcbzWxANyMnnCZ5",
  "key25": "pGPpywbsu5AT4jKpie6N1HFBL2LCd3kGd4jM7R6Ymv4Zs7SM4suiByA4BBctPeFzpT4EtuFkBxnGSH9xARGjbce",
  "key26": "5YTPciUgvc9dKbWQc5oJPcdr4B1YS287hYKwJjm1FHkDwa6FbWSgDLPzuy5fNoEwVSqiDod45VJbSZmKD8i1mM4b",
  "key27": "5Baz2WqaMYHXy4Fyq2LaeA2T8vd1gnp8UVAJm4NBFNxjnBjTdAPyi3U9iHwr1qmVApeQSYbmTT4eKAUn5FQHQP8d",
  "key28": "4oSiRaWSHF6L6KtwHz33paFQ3cDKpDQaSsj5szaVLEmvcqHbXAWqRSj3H8CwodvhEuC9Crn2QQLYr6gNiXHgh46a",
  "key29": "54zZoyyCcYfhYz5egYXknu4y136UsvqkW8WbMWddHijtFT5oT9u8yNDVoZYAKpB7zw4rJGp1itFTcC4w6mspLRbZ",
  "key30": "2yrz7yDcQVyv1ZJ4fbZmuBhHUtWPAPujDC6q7MpjR9SjoeAw3FvTqk55ymn9D4bygC6kEr77juepJHGpwBpHf9r1",
  "key31": "2YuXytRbyLv266maQRxH1fw7CeErdar2UPsqJqHzHkZVQeQRbaYqvpGxq3z5wW2JFAsvTk1u3KeF2AjBVgEvfQeJ",
  "key32": "XUYRp5RsGRzp6EUCwTq1yjN8MLjUDeo9AsdF37LpaQCm6md1wAqnYCovMJ34fHHBTYZNrwfTP1RcjxjsgxWSP8X",
  "key33": "M6yx15PAmrkHx7ZnZNjraatUFdF5D3ke1aZPKhxqfUDHE5H3V9z1zH7xk4gteptDZ1YXRF2y3sSSXoMVR8JEaS6",
  "key34": "4jQEdaXajn49L5tEWAkSsVRwm9xjPwqkHmJRFWahcPSroC7rmdEMmmbmqkN2qzCAamKyvgAbQr5KHiH5Y7GoWAwp",
  "key35": "2frjDScTt3DvvfSx5A77trdFHHq6Y8Vm5rux9jVfamzBbmvTDw4NJ99HMfDSEsU8YRAxb2JqPer8Ev9TcYQQCJ6k",
  "key36": "4MY6z53rH1PgebSxngwEwDiizSkP2Lk3HaZgDno7ZBj6XT7dPoW3ehj2vKoY1qLXcWWpr5XiasK7eP1qA8aHPKkW",
  "key37": "YvRENZVrTY1ZnDTA35trNz8bDANSh7ESHKpf1mmFb7QSzXsBZtCG216rMicwY9SwiPNEVp3xXQF6CggEH3JGjuT"
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
