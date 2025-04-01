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
    "2AZuvEtCzrhaSeszcNwfXe7ofRyuSHQA73ZUqTKQkF2aj8AWzRqoHHmvfy2hwqSc59gN69ykWR33ePK7erBdHP22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EdCVKVYgkY6yddtHVuqsYhBgrde1QDTfhKdVf8cGW1xZvwvBKqGAjF3eWpCfT8sW4ZRy7ZYfEuwA5zeLmtCUnYS",
  "key1": "4tohh3yXiS2riMQ2ZrrKYnaE6nuQ34xFXizhZ9PzsxTecnsvxQA7U3G3QinZxXC5FF5y3WbhkKbzcJUKhJEtgEy8",
  "key2": "5q1ZALhxaqgJqg1kqj3pJCaQgC6rZCAeLrDGfd8eosXa1Qte4GsNKQWLPE1XZBJ2Qoohiu4fPqp1h4oKaeFyoUiQ",
  "key3": "2W8cMvxYASoqUEzstLzESNqCHJ5KT7JcaCQDZU9dDbQuELUWHpn6vvVoRfEy1PvScRbtgXbRHNWMXe7cHctbjvQx",
  "key4": "4HgsY1wr679sgZ6umHGQqKHYMmz4mtxbUiWv6Zy8j3JNWWn1sAShocbVbjttrP64ukYZ1WTNTcFcPsFw5X7Co3J8",
  "key5": "MxJkh7x3tyrq3QQrKFGFGRdQMvdpWGvFjrdm72GKfhMHuNJ1mnp9uHX5pWnAjgoDFUnPmBmuumiwHT3kFaW8uUd",
  "key6": "62YXYFrmuxmZCwFhRu4yLPeQzLJv6PxsD1hBooMnVz2gzZ9JZk3L9bHPvddmxe3QV636EbS4hhYvfkoD6s6HFhG4",
  "key7": "4EWzK1uBibXY7PGBHnkRXsqP7HaHzpYftZ29s6YBdhEjMaJHYSYkQKmE587RNs7SqdbSGqfZ32dZdC6SkwYTVSpp",
  "key8": "5wjrHaR5oEjRJy4TQJbgcBJcVYWLnCzdPAmeMzBXPkr5jn9U1tB28rqreiNaQQebqXuBkAyJKbiWUQCfDMStbKbg",
  "key9": "438YCBvnSjKgXtwTKBzVMembd5NafkWhoBAxbeH93TurAP3LAvqqMZkEDpHZUKDnVjKD1oaeExquaLDfYHwSZ9Su",
  "key10": "5MadHCS7Cppc93zx1tWkr6J4FXFbkLFztfaDvttFFopkzRTgeo1Wf94z2RFbdiuHq78FutjUyaRSCRKLjuNu73Vx",
  "key11": "2PHHzXft4yE7xVGLV8vKj2h7cqJQ53ovbxWX6iUZpfiRntPhDqc68By3cFR72pFmDCg6KChJ6AQR4hb3moxrfK7A",
  "key12": "3SMJHij9fX95baQovoofVrXNeVvtjmDWAjzYuvN1L5kFoA54ge9YWVxMB3FMySDcXwF3zUAhvAvhdYe5CbwNET8n",
  "key13": "2JqY4JkW4CxKJ3qUu4bnxyQYQ7DNEYhXrKuQpkU5kmd1PMcL2qst1WjFK94VPRvWNvMPFgBJd42nQMSo7ptFfk69",
  "key14": "2PaovtmSsUcEckDpSxrgdrwRquDyFx6T8DVyT3NQQvAzbAsk1FuXup7kJyHagxVbcpo63YVbs7Gti8hho9MbUgsp",
  "key15": "4mHeuCo8wsoqpmVSmzNj1phv6qL7FNHK52KSJre48mUiFFrTxu8gnfeJuESrV6uG1Rv8xGC6kh4xfqNk2t3ZVGqJ",
  "key16": "2AqyywA728Fvfrjuxi7n7ij1wrwY2t5zD6Q19qGUfXG8HcTWXj9j2AzpbDNeYvtECncM36VRjZzffpYFZQbY5xiZ",
  "key17": "4Mb9eeyJDMZCqyZMde4oeUcb8puC7xpD6MnsqkuEMBg1Kz7YQwYspWBqJEYKjkJejP3DhnNz3i1P7vHmzJ3ssftW",
  "key18": "2S9Qs5gUUY8Fob6y4UaXiEMjrovtrS1zqu5p4vnE6yqvCFew8zWxGsKhxs2NC7rne2GD1LcHMW2rZQQjKtRMmohJ",
  "key19": "2YRjKq2tzJ44WtUipCK72pekkCg3yhBg3VPReEHo6StDjnUrYh7wwDHwsXVVrd8QCfEQ8sinBYCWeLt1eStqR3Ut",
  "key20": "2fPSkJCcijwqdpgiSa1vxoNftUjFnD4pxoUde5XH6iCxw2467auLYtZ6cfKvvNuXUonUNz8gmNw8cGBPqvaA6wtJ",
  "key21": "34wtTvNH2VKQKrkgBYZxeMwL3Ck1wj39BstywT7mt3a1ZctE1EZVmSCuhCPWBS3KwWVRu5PqrXYyKgkzZpbYhQFq",
  "key22": "5ZVS4ucXGPsUsxX1XmdMVzXH7qBta2WSrx3NWPzcprnhzSFJwJ9mtnZDTo57rLxSxSRQYAuw1zoc71tKLWMGM2uR",
  "key23": "3Rng3nYxANxwZGxFrjt2UckokNiyu7TpKsbPKCuas6t9QGAYPcw5h9H1BTCgF3ELKkmHBWu6u4vMMEpXBWAaPQ5t",
  "key24": "4DWkRUC6ZuJfabrLrqJWSi2iEjR7hwLoPgpMZ6E8nTStXsoJFdMZPJwDDorh9e2LgjhBFrZj5xHU9L3aCyvipavm",
  "key25": "2os8K3jokJhWoEjp6eTTyofUhJBRuKBUF7UwpSw4hHV415WB8e3V3j7vgLzDkjrXo9644QfZSkpxhRSqh9pctGUe",
  "key26": "VUjnz3kmw2fv4qVrA7Z6jHhkmLrVVEkk8aTmvm58atzMm8T8CeU9fKvnW1UmLJM8FMWbovPwSR89Sz7z3DgJhfR",
  "key27": "Fq7LRk7jAWsTMzoKfWqDDqHWLvnkgRa7rfCWhQr98PsfUqiWFLcvmCgNQzU2Z6pkwfQ7zMLCQrAZCvY5xABr3bU",
  "key28": "3WFMxJQzLQJbFPm144Qeo3NXWUGDX2a4QdGFCfbmT6qrYapHJqc43eq4MsLv5kSvrVV7MK1adRBcf3ka8B34WnFY",
  "key29": "23wbtQPybB31wVGYz8imk9Lrtjom5E5UKz8TJTSqDNYQzgauK1th7h5uN18Pcw4KEUfYLHRDbY5q4kHzpL5Bzohm",
  "key30": "36RXFXz34A5nLfTSPU3ZCFaw9aDY4pqbuVCtDKyh6TqeC7VnrSC531ioRwvqQUobnU4V5jLBHDiJkTVRLWqTn7m3",
  "key31": "2vJSWAwErBe2ZN5KPcH31gJXXzq4SqRPap2PL7nRoDemyuhW4sftDdMFVVH9yT5bgBSrieGhRDyM7WaQK4T7vme5",
  "key32": "2oVSUzvsbTTWuX9sh75jtvnMThb3maqogGgFkn7KbDnhcTPyeaPEyvHusY7hw1RVubRbVjQsoLex3g3ECSvP7HkF",
  "key33": "62sByY76h8ZKd3FbMZNGBUL9CDAywELRCNb5pFc9dvn48VRXpj646cugsNU9xqi4hBrEqQ2kU8W48aGw2CJBr6ca",
  "key34": "yyT94GYmFccr6agenPZyszfb8wumBpqSZhhDvKoUYbmJwePeWcXRJNxZmiPr7jo6DhVJkMvtm52SJgNJw4BbymX",
  "key35": "38bcpwZJENnG8MgPTRn9bRvFgi7kULQ1FXMwAHcR2828mxT2PMcgUF2Ukd6ZEYpHMncgoXKuXxesNvAqZTqAW7Mn",
  "key36": "5FoLJebNBxYjYVg7fzR8dhsmn4YZSkyxxER7u9d1U78k6nv2KqpT2TjomMZhRKQB8FqX3zuDjJH31TL18ptQg3Qt",
  "key37": "4MKTbxMnc1zjab6jZixbx5URsLVRBZtmXtXuA4okAyA3kFiUXyGeutPok8Rz12X6SkmKTALsvHRivivvZS72HxyW",
  "key38": "AnHSwrtCVmNrymegh81JdUYC3AkmhqoLkRFeQRBGzo7EWaC14GZCXrpSExgNRbXwiDAnKYLLKy9ikbtTdELXhWm",
  "key39": "6EkTGsTynoZcYtP3mzFbHeuKe5Eok9LKZm34XoCeJmYAtq8rcWmHCZUYf9jd88pfD6yUnmoC57NEeonV6vgUqfN",
  "key40": "2KJxsbD93aZ2GHZaqv2x3BrFdNMJnHNRKMqzmuY8FGPjEgH3sQLNnCbcfKizb4SUnRbXvB3eTPfhxiujsTx6FmnZ",
  "key41": "25s6hZKPWvsVf6arsSh8dZnj2F8rdn8THTCpXWrbtYWFjUyJhyLV5LQBJjTRf92pwBwzTBKr6wnbFDyr3kzCmcJ6"
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
