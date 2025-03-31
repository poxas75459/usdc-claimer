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
    "3URRqVbN2CL1qUnHoFG7pq8CMfPaKBKDgu4vBW3iQtZNSTnU4n9n3Ns7ARJUDzqXtd6oUzPdRj7b3ng4SftA8wQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JkR4NGZxQJJ3s45vQppEBnYFXeFN5yukRDCKGhEadpcPBrT9Wup1dt2yZwzbVSaRcTDXBuqWQidD6vkJavZLmFP",
  "key1": "2XRXXg9qm399FrNdyZ5yStLUVz2qhgMLfrZtm1sZbTeSHvrS6ADDXECzuEFAN8XsvhFKzCdWV2PsAv7W7vktaBRH",
  "key2": "4JbKRRjJnYXAaNPvvzBXn4GJ9ZmATKrUXuq4HLURoxHLfh1HDKnGtGw6BGrYAe7cBNSdFtGdAcdnj2TSMc8LimyC",
  "key3": "2jk7JaXM8axUfc4GE2sW7aRRkkJuqZuaYT9f4WwqUusCewu8cMtx5JVDazFLsCD958pgZGKjBXuCQruBGNiLbceD",
  "key4": "2EKM81ZBqtigPXp1gi2urPfKXy1eeUxB9YRmX1K9J8RycXpbZPt8Uc93Hmp92srm5rLyFiYkzcHAkd3VjZ9p1ow3",
  "key5": "1RayD7UzsnxLEGdbbQvPktqqsSzcjDnct5KcVwQrGWkQa7M4QpC6xPFFDmXiv6j8j3CYiwGvuhLnMVKgVLTXeWp",
  "key6": "Xyjk1mruPNoUdENykvnijZh7L9WZkQjCRnJ5LRNzxHe8Z4iwGZe5TndyETcHnuogZwgYoPRY1UMDK5CLGjqfPj5",
  "key7": "4dvNjPt3aSP2uysAhmQs9BaVC5NCSdaDqQAGgPzi8G13Gz8pwiiVBDcvBEyxVxT9SZYMFY25ayyEmEUKM3VGcuA5",
  "key8": "5942tRy7koM9f8uAQpchaMiHkMNAg8gp6wUU5u9AjWsNXZ7UVaoNzHHVzrHy59HLjHEPU34VNazRF5YSYRiu3kHo",
  "key9": "rVEehaFLoaoVEsPUuyBdQxfwAHiD3ZDqcvSJpf3HY4PPUhmi45Ch2GrTiCsbrusqVJ2cAUNN42Y1p9ERNe9qLDs",
  "key10": "3UYgCzeNSVNnjpVFSTQpFTo7oWMTaGV2HvJMZGpbKDgpAVNQJNRo9QwP5FPhi9u9wbxmQCbP4jMEisr2AdQuY3b8",
  "key11": "3CP1sRfbn1QcjPYjSfpaixvEDXjoEcAfyjURqYDm82zn9xPJx7WAqUXQjFB8vLMQnosBnueCzmw96NcdsQgHUVxj",
  "key12": "mJ6RihNBaDQGyY3nBF7XQ8s3N2AaPJz63vx6SQibSd8dtBPNcoSbDkhS1RLUqKidLuA5Rukw4cX1yubuW7ggH7R",
  "key13": "4k5LYHuTKGGBrFhDLNFFVvKfnvwBkN4m2ZGBJD2KgPmNxLSR7mx7LWoY89hrknXbnbMBrEeRJvfVFooPR63RWocC",
  "key14": "2vJnPuuLEU3d4AsRSyiWqHeAQjPHweEx5cmQuZAuhNTTPdi8YT8yuyT2DJj6BQJgjRnfJJkDS4HnSb8HzSt1RgLE",
  "key15": "3bArLHTfncFKQ8M4dydw7cBzVMcCQf9ZScnYLwSnMaddaTRVegtxRiVZBJ6ELH8yDCS7ZH9SWXGA6AFHR1b4p5Gc",
  "key16": "QaahHy6N89QaGNc82fkEtVHX57ZQjgXyMFWANEZNTKUN83f6inodXYbX9dzhciK2KuHGHjA9zuFTiyxg4NeujRr",
  "key17": "5jHW661y9e59LNPMTiAAtCqMZUwkjFVjnZiXPpeS2mSQU1ouM1cVJnqXMyhqfkegKA4ecw9cp7dzWEbFkKd7vcz8",
  "key18": "bMdjzvSLn3cbDP3NVYGGT8HwXPAcwQAzZdAZJbSnti7c5NvHwhcexGkH4xuAYwURpozjwv2E7EAFDEsYEoEiUxk",
  "key19": "2dPJf1aHGmWuqy3GzBzNBFJzcP3g9BSbd7qqZqS7vFxG3bPMxbM3dwthw9Ftzs9GApwS7JNwLd7PKmq7fiTGocNU",
  "key20": "2vw4SCQrnPTeB65c9qqkmUnMbbJmv4Hcp5d6EfWsowWNJAy3fGKjVoyVUePfd43jFy2ZAfxUFnepJeEoyRUQwY58",
  "key21": "2TKfJDkUkb5F56xJQhq2cQK7j6FAGzHQXJgGNwaG8zS5WFZR1JSHimv6tMzprnGvj5SvX3UmKZRdtFjqDAnPaPHJ",
  "key22": "2JK7VQvFAF1pTRXDj3uWWuzb4MzCZPcKYKAuUpVnX3KKm8ekGuCzKrvoFCMBG7jHVTta8sDLhoFMhZdanD1RBpUF",
  "key23": "24tuzBGGFhVmptYUfojoLwLmMF8xoPk58RVw6NKvem4dAJcTGJowojUWJdvp2qYjJk7jxrH3hSTpVxFa4EU8CHCF",
  "key24": "41LbzSYnACRSDX3osF8v3uVa9D5NkdkmHsZEERp88Nd5ycDP1iNs3Ur1pkLmsNBV4a3i9BrLFURMnqfvNAYnCbyG",
  "key25": "2hGQpHi9CncyBHkhY9E2ouGMuYm9rUgR9Nq8bWPkjzLf5q6Q2Jv5JfYwZ9PtrhkMm2eYwr2fnBKwkmhU5fD5GgXV",
  "key26": "27nFFiKiLz5zvZM42AyD9ocdHjnD8vTbtoTwDY7us4gezUEtM4TRovAjCTs27FkuLTaz3WwgocZT5d55NqCZXrwS",
  "key27": "5QLKP7vEYe38zHtsZWcmGZLwQa16stmqzrJoeTDDp8sonVZBDwkeyj7yLJfLZ6FmkYzqvcJrYpBxxYk1tcDYSJGJ",
  "key28": "2Z93mUpXrzjh3MS3PHHXSSeJPR8oy8kmFAXNJHEW5xL6qJe8r4LqfmTDgq4jMWUxtVH1gdBB9vd3JXXUshN7vmmz"
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
