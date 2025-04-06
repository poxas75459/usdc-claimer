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
    "4vxwE4bQXqkwEPfCJMPeJfSjj3WCn9AVALepjXRUgYoumcjhokSQ5ju6iKuNh2ZzNiMNyYpSexqi6PH8K7KiUsBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EVdN5dYJ186knux3f1AUgVu3qbBYddBZ7Nn9sh2M5Bu3E6Rd3Maghe1QFe3f97d4q6ArsoML5zFi5XFqUY95b9h",
  "key1": "2q43QCAHsewVytXXUUWUza1WxrNxDCgHKsYXDAfetezg3FW76zJtXzpSRk2bQokjzfeTGCkLh1sUBbKTYB8MrVKX",
  "key2": "5g8wM8VhkcFSvzgDPLZqDQygBSM5Zfqpw9jcvYncyG9PMGz6MByFA6rX335vHkyGUXk8Apw6nJ6tzrHJbJ1GxaJx",
  "key3": "TNVsgthTDNNJoVLGDP8s9JAJckeKiCpfp59KKp4mCn1Cd9DZ2wV7Yt2AYwMXzLHLa9KoWBzgzPnkpJV7neUZ9mV",
  "key4": "4uCwZqJyAiKh2fZNfcorY8wWPj6h7wAYNkFLh1i6i1f7L5oBuyPz89uCveX6htJRfsutWfVZ1Z1hAaCxuexuP2xT",
  "key5": "5jY4CbrnXR8UfKxCiTd6k9Nu6gpoCqKvmF8dAxJd6mQVz7jpiaaoQVXM8wcFTnBQUbfCJoRffm1pj7b8DrfFZeiB",
  "key6": "5YmVg4WZERygWSmZ1V7f4ws4aHy9MXS4jA7LfVHSJkivUXtQvx6rQz55eGq3jCKzvyB4wfDUDN4m1gqXVQt3Zr7w",
  "key7": "2gmQBs7KjjXjaJDfoYig8q3YhpYejS1LnqvS6jCZK3VXn85scgsxXYaT6TQV8iJAXz9M8hecSYEPZzFY99dFH4eh",
  "key8": "SumxkSzKVGGnXNkomADX6XBhKTArDDkSLmrgcbwx1vjotVzPGu8Mky8RaZzXACzPg88NtAyWfUkLzFdZ2Bzu7qT",
  "key9": "4orKvWeErACmCXLHZ8naRnQKf1NsJtzAmu1j2mUkSGQVhJd2wKt54mee25sWHPsQ4Usr2WxK15qUp82BQBhqAwSG",
  "key10": "2gm6LjzHgUaamQAHwTzBYgfLLQZcofmYybEFkHiUs5ue6Sc1g177nAoMPtH7XU1qv2CeKSTWefBqbtGVW31g3ENb",
  "key11": "56usMXgLAj4ddgMawp8s7djtjRu6kNK8aScrZkg8HqLZgUDH2aEaoQggQ5E7Su1MNjyrKvT7sKmrnSbAzhFpHuCf",
  "key12": "4hixhNNUWPyhX5MX4tny9fwKCgXeH7yM2TzLUvnWwYJUKMM2jWVEjrBeSujRuipGnZQ3SDMNXMz9gUotVdzDjp2d",
  "key13": "7dJJtStj7S2bQ9YXAyPWjy6V3KagpJ7NUjXZVgPjud4i93NjSdUPR9gSDUAv7Qd88RMrLseXfHut967tSJnpTpZ",
  "key14": "4YGDTEvoDVSTbdttQcY7kGWx2nwqTk5sJmnwvYNvGwcQqxTuvXEuihCZZmpwS93wXWZqh2w3GB8n2ZNhG2i1iBUU",
  "key15": "2eWCKXucnrWaAkKSu9Mfc3BheCcV8sL5rhzyLe6dLyuwXFUdfJXH5ijFbu6m27EwqLyp2E1vCyDRYdNePswfXfC1",
  "key16": "3staYyE7wWd3NBYrGNpRcyPoSsGH7abydaYzcuhQfRYpfqgYzbJp4ZXXbGn8Gx6TDRb43i6ybsf1w9Ato6heeP5H",
  "key17": "4sSWqyhGUbpWYyXkDZuw6yujBywqdeLYVW1dke2WgnDXNjwXFA1TTKhePs2bP9zo6QQN9jDwHDb5pVmqpJ4v6E69",
  "key18": "2v4fB7wUx7vXhN7ApAfLAzb38pdV31rAJujEptsicDEL94AeHDdGDHonwatBaR8k19bzEKiKf4g7jGyuEZ4KUsmC",
  "key19": "5xUtQKUefcX2HiuooknPggM41n7tNiJFB9Q1p9r95FCYLEV2VjrTAHRLAnR7p5B7rqsN6BLJvv7f15u6F5pbiZkT",
  "key20": "5fvafSnDYXvYDYiFTGnxkubV8TCEUNKntu5cijoZhiiBXTtQsNSQUSHAZbuU3BTZuC6sLa9vyp2McVCqQPEAc4wr",
  "key21": "672te9qdwAtbPA1jA1fJzFhm7Vua22KMeRGAXYPuThAX4z3VZFhzvgRoX8zAY7bCfqEPuLzEN4LxrxnvD1pa6QHX",
  "key22": "2gNNM8vDMfJ1etCTDQroMYqtAXX495LHmfJn86yC13HFd37kiT44wNATADX8mjb1cQiY65srpUfVxHoxfc4kYK3H",
  "key23": "4Pw7mzqCY44ondDmg5QwgB11yjk3HH2V48RmE58WxQZeichNfyBETaz2RCYdmitB1ZaN824WcX9XGmpvZEx61Hf9",
  "key24": "hRUJ3thmNfAds5skLWjZjtQCo1vT7eb9ZsDaD8dLWtEjhaF4GkKx768WrPsp6GXkJYTC84Z4vn5dRnAxETwSAQ6",
  "key25": "LLZpTgRmRUB4PRUtxTPih3s6PS2o8rwny42Jsw4QcpYKdTm1uHjFmrJxCfAqnZsRYSufyF4mTXX1FYvDj532CMT",
  "key26": "2DtquopxKAogfQmAN1X5BEZdSBh9Q2dGTeVS1ei5pqPGeXXZVNimaT5iF2ULhdGYQBkUdkMdZLL2Yss2mHbrEXeW",
  "key27": "22xnCbVCvMEnX45ojeDPQrnQM89MVAn9bo8UyXLE9uGrVszgWsLodYBhowsFkXHai694zt1R1G8GtHgfEWsMFZfv",
  "key28": "5v3VroL7kqWKHy9SM6moFr3Fmk2wVUVVVvwxVkNrRkxnjDRRrieAfpr3HnB61FGQUspCTJ3LoKrByAbMQspZirMM",
  "key29": "3yQTcK9uc6Cgcft4X7so1T2xAEC2xCAC4gfapwnQN6MP59iUzBP9s9nYmhUmpRgY6dtK9yuRxN6kwViNnz1KJ5hN",
  "key30": "5ofx7Kum3yjjaKRqNJic5vRjLiyDgsjoXgMUmLgvC34RtnGArmzkiLCPX9v2UEZiZYUaYE4BiKgtd13rGhybYFDs",
  "key31": "5qDdTmk8zhbMFDiSnxvTMuLaLvoUikXSpx5zHoAwRrnMc5PqwdHQ7jqb4FyAsmKNx2V4iS7ZZpjxfYk5cYcAdj3g",
  "key32": "1rLyDsKQq6wZjgh3JoAriHb64edxejZiavYabnTRUVq26WL2DGVKLhjMsKTJYK9xKgCgB4u9dLXAQWwmV3mmYGT",
  "key33": "2EYFFiZoHSbdQPbDYiuPP71KGM8LQCPvhwATvPLowdo5eKyYNqcbGYuJxkvyShiZnjGb1dcBasxxBFTojkxNzEnC",
  "key34": "FfAmXQnMKvtgLT6DSETgzhDdHny8aYd9rTCDCYwdpZzc3PALSWjYYhyDRE9dTSPbiwDkJy7L3wzjoSkkJn2bFh2",
  "key35": "2DmMaEciCkVFC2nDYUXFxpBJtDZ4AdEYpLLn57cPUBdnk7XKJKA7nREHi7HbnCY5XngrHhMFEtMpmJguMQVE6jee",
  "key36": "5NHGjJk7Vs2LvBS2TfisvT5xgSvEsXrxDgbgiQnwxmwvQY6L5VRPfQoVvmCTVnA19kBstC36stCiqWNt478jaGXv",
  "key37": "4b5By6nn5gBrZnhLpW43oh3uiw6ut648X8CHmHywgxUkSYrdYfDD4KP6SDsrZEV5sY9tK2if5zechoMG26wfnXkT",
  "key38": "4LC9WbH5Ci7TVtNnEADVMaYggY8rJ4sEw9pVyoZMSwyXQSGzpSzDBB32Q1T9gQotxms5FtRXyWGGm9covAzfk7MV",
  "key39": "2jQuufUuyppRAfmnp9FdiDCBGtbygiYmULapgn4aavBebGtwFtCFtD3cArDdRnMSFpEEaUNyxM3Smcivv9jazjG1",
  "key40": "2YpnmxjMvjtchKfLLMZhF6BZsc9VCV9d7DcRT1BK3WFySB8dApHKpYAnroxCviZp3KfsBtsvYXLYB87jCqxCXnKY",
  "key41": "2j56vDEbNNzD3NeVG83zqdRkQGaxyfMKXvUnHNGYKv8rKwM7FQ5AKebJqrXDMkTz3D2nfFcsMa1pfmiJ9cK5oZoe",
  "key42": "2B6r7G5oq6Hdh2WFZFag6XMJBeZnZN8igECi5bzWTH2kPQddnejeFWrDfg2dTLFfk2wP4xLWkMA23Y1Z1gz6hG3n",
  "key43": "2Q1wVuAGLqsUuXEMdbHvH3mP1dZYH85234hwJuNo2bsRn56DkVHohvG1pARUJsUg9Yy4VHsd1qgYMKsnRcVGCUMo",
  "key44": "3ycYfGFPx3Ajt7KhQc71e6cDCrnEWP9aWSFz917BfYuR9vdM56i9mdZRkd1hbRM2bw8G5YTZA6NPm6qy2TQn6ijz"
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
