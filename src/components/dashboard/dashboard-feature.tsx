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
    "3zYgVRRbGpRXzYTD7p93hCLGj18QvfGa1x6xezxuntfofu4a9Y6FwMCc2AGDwECmUGeQUteCKUbrNDrVbPzR5rwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YuFyDJsWEktDncfExB7ZxMtHAL6PTb1RQ7Sb9LFf4JrmU581MVceUNYe8Ho4jeRi3SAz95Td2Rgotjnbj4entGN",
  "key1": "4nJtZyoaV9gY3gUChxXvoGt2NePiFqkDmo9LwFEb1bNwaVKsFbMrXCeTESvmmvpwFbKK2naeF1dapEkFrrc5YEZL",
  "key2": "4t3ELzD4pt5UsvWHLk9xx5YwLEbu8n7rAxMs6ivVoNkSiDPN1bNuuMyLvdqjErGG5QZKeDvCV4HgG7RjTQCKWyrq",
  "key3": "feK46FTFMojmuRwcoFKyoZ9rSjouyAkp4qdmNUHihRe3SwZ2BJP77NXbr2WAhCM9fECKEtrvJrCuGfPnCf7f2UT",
  "key4": "XnUCno2rZxXzq5t3q72FXm59zsRqAXWqouYwVep2eBHHQFGa7bFyCAaBX5xmT3vjKVyik6LLe62aUMpWDvYKSUG",
  "key5": "5kRgHnBAqb9PUX1R2itiyhd6852TeJ3Qokq1uF5oTLhRaRK6bMaqoC2L4v9RSRwTd491sqPgmZNucoU5KtMNQ8hq",
  "key6": "36gK1EjwuKfMFgGMuQqZ1hS8fuFeLGHz64LrX1nRw3RkNbGF6nexwn7t4ZHz6raHA4a4LMmYJtuM2xhmn5HQJdaR",
  "key7": "2FFAaGqneuZ8gnJKaKXhuDbFvLGTyLut6xcDq7agKJ4BjihVsXiSWhNvWZGWUwmhSX2g2BHEvxPv6CAQDk3Mo6wj",
  "key8": "8vYevqK47L6SSktrdETaMFb3TxroBf3mJpbtbL8hKoVi6pj9UH5HapYwdZEXHMstjj5vndKpeYUuwuNc3qzGwVg",
  "key9": "2sAdyrsrCp2xiZnSMzFgJH6bcRzzw1TPjF9G2MEXrv1mw4uLtanXr7xeA9mmMASykwXMrED7NEHZ1Ua9FBArTxJr",
  "key10": "2jkd61syfhkKG46u4zBvxLoycMqwRgWL8kTy6D4hCJJxpCSJkG7VJwpFra59rJi55Edvf2qnqr6fbyuLCSHLkKXp",
  "key11": "4YvPw6rttvM6SEqLPN95MHoVtfJh7ZS3YBNkiH3T18nybbPnvrWHDa7amwvQjijKycCJ24EsB7F9mCqsHs9sWESD",
  "key12": "f1GpRJDsoKrW5imLQeBD9Ho1tim5782cC4tuqppbMQeQGs51Q2iuNfpWxW4UPrJbLJN2PJNHMFKxEvGdCpU3xfq",
  "key13": "4ge8YKa3hPYescv2Vh5CshQhYWz1Jj8AAppF3oDxmZ2PACndwk81hNmdLkSLtPzBXLAYngo54ufFgHzwAAzWh3Zh",
  "key14": "2aoJhKFKvBzE11Hx6gUesBAbW9wHEr9Jt1X2RaUrJqDrkAA9rGfmtynuv3nP1x3moWRLD63fTqaPW9r9H1Dt3uhG",
  "key15": "ikqpiky6rFtecBnEsYU6ctYKEFc5Sxx5yM51csAPrWWq78GYa4kmnxggrPH9bF6ifkANqZNSoZSUSPxrJQt6yLz",
  "key16": "BguYLsFHRMLqDoWKXL2MsQUJy52ys2HmJVnFowScUMxQkJa9c3Mrd5Vsd65XM7B6LdXgSLhSKyoeML66eJ8svkj",
  "key17": "5V7tXzVDgGwxrSmkbcsZC2YcHwnXEpm8b1aYh3VpCu4HmZUnNq2W8BjF6YwdbQYfH9J7GVMGRyy5zd1N66sKyW1E",
  "key18": "64MtAapoWwqGX7fe6H2VLuxmTmnQJGCUuqsJwfYaUfpFFMGk25eoNMj6o8efsq96CqV7jCkcRJ5qkUwtjXwUxDHv",
  "key19": "3syu7mWjKNNcKJtz33Dn7SXvTQu7qgF2iLHqynPt4tHLKkyvyXqjv42Bbh3puhWgjbBJ2yFxPWxYjxPyyM4pCgPF",
  "key20": "4MrkWXsnsK74PzsVWmQ1UUA9xm26xXhWixjzbMTMRWis23uHsXqRnvJkZMRb24AdD6ECN8kAH1MUTv6Aw13CqfT1",
  "key21": "5Z8YbX86pNZZ7j4WVkWJAbdDxNRt8GeKsVAJikipfZfovK1eXJNGCPoTfapyC4EcVmdyo33DMe1kCfcth4BjvbZn",
  "key22": "542QnSsX7FEXp5cCYPubp84aPjB3QPpotSzHJHZeJhjbRZMnpLJLfh8YrtwYxgyTncAZoUKJ9BSWSKjVtV5YcT8K",
  "key23": "4xTGmeHp1nLdHAt2K2vGVfReHWchpedAUbGQGawPvP9xoZh8eDfBmLMVL3dUEmm1cqDvCVeyspjAStaqmtAxAMEU",
  "key24": "5ZjoHxf7qtCuMTdNGVb7NwhTKg67xFDyqgNxW67VmC7DyXKqNts45ez3c9T5UEe5zGD1dErbfeTo3V7TTjmz8dry",
  "key25": "4dpetjC6CzDHKRtsPrp6kBdAXUcQ3NPCUBz7qBMKRhfa1tjbD4D2JosoyiAJ2D1kxtJ8XZiCPDk9TK2FwCguVgSV",
  "key26": "5jmx283eFpoJTfgVgkTLUwYv8MhjcmuMcXcgtapmLJAedyFxfKMpUWbejUssdq7YnUNheLH38s6gH6KKSsH9fwSj",
  "key27": "2MKxHKFUnmUeLUTB8Be8fsG8dMo8nxSbKnDVECwMdNXGiHupvK58WbyYhMaFyCZeYRo5tbTvCdzGsjV3wHSujSwA",
  "key28": "jPKy38Lwg7btUdJZzPFNGWaa6WVAxa8vcz1pz6TJHf17s3Pae6hYnH6ZHSiqWeY5MPqiaysjDZJ6s1A6V2acYor",
  "key29": "4Vx48MMtozBtsEVfiAi5f9gsKcQD91Wjcjh7ojPAaCJcvkUe2pWX9EcPCWeeC5tZmFs4mXjNrBeJi5eUWCkababc",
  "key30": "3hNg5HkGnXtL9brr77hRcj6siEAMKgBFPqksswrX3xxxcpQfaJk4wA3qrc7Q7YDZGX3KWtCusyxXe8hUG1tvQtsb",
  "key31": "wDXzGb8fikbr4iKLa846Fwu8tk8PNk2Mhfiy4xD91dJgCoFnnWEujz9UhSD5NewxZEVznZM4siTYhtcLCNSWA4E",
  "key32": "3cvLo4mrcTZ81CfwKDLKJC4V9VAc4qX675CBxcqa1N4dgoxkPBLXs4UaUjHkP5zUsHEMkgXQ7S7jkQNBmf3L7MyQ",
  "key33": "64cKbTAK7TzEhv6wZyehP2yUSuhbnnW65GiDr1epcbtm9WFDd9PGbk7z6Dte9qeHspNmogFCK9GzCByBz1ccwnnW",
  "key34": "3ieUoo4NAGQTDj4sYWb5MK9tUFuzUpeZHe2sMXxTiSrvpJRgF3kyGeP1CKZbS5nZCoAQ7qb9MiiqNimLtKANNjrD",
  "key35": "4cYK9MtzHAEvbHv5AtYuCeSRZT9UH2UZvDZZsLKdqjjtMvt4VdU3WdvrSBigZr7T7SL1373ETcaXtMq2gQRzhxre",
  "key36": "4EMwcDutA2dbbGBbgZAPPaPCahJws8s7vVaGMA2kejKsWQQ9YrNo6yNxrm9PsL2btPD9n8zwPgaigaWmU57Xqvcr",
  "key37": "Da6pC5J1T4yoRcbHNnYGVwJUer4QJCmFTq18jzTDLo8ziPvmPQuVw28m8HfMoZvjFLp8bNLMHdirRtmkcv3Cnpg"
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
