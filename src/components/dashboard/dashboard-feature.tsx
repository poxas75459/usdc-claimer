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
    "3Zz1xK1uVQN92HjfsnwDnEGFD7XWVQRXWHo6gZzxWLnYvdSxg45MpnAQeTL7M5oF8LPXHai1ibCVrCopoyTKsNX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3werD6Hkg8sqRjwUvJq7cMnznR6yBCHxs7oww8jpLXj6z1C49dsfsmUdLFYXS2Rbt4EAMGw1MXzbNH33RWgNRANg",
  "key1": "2Q9tgm9jwu7tQdZSNug2Mxet75WhMisbSvpnJVeNDnjtgzZnZWgeWwR4FNR9PMFTswqsQvJakibjYUQLk9NUtdxX",
  "key2": "4rFcCAD7ytyjEQcqVjz1SdVKQahPGM3r3ER2FfhJtduwK396fyoGoD86e5Vybmy7uY1q2PKoPhmiGpa3snPx9WPo",
  "key3": "eXrhxFnFnPp4WXu89WqXwYoMy4hEdNr97nMRq8sDKJ6G1Ac4eNZyd8wNnPmsSL9cmgiF58LBmet8QbDFvB3Wnn4",
  "key4": "5or8ZcUZraQuhWbnrwSCEZF3YYpfM8Zq1rqEDEc3horPghw8NfLkTp32fJVTfsYP1WddaV8jzz2Kp7PzS5UngQnp",
  "key5": "4jEswkBBDZYirqCfvJgLPTyaW6JaD4A8AWVtNN4JXfxEJwcF5Ki4sBLNsch8RxcTxqvCR3MYFGRTfe99kWR58uuh",
  "key6": "UdMfaCsURzGndyVbYsVkipqRXspQfYH6s8M1bj74HixgBVp7xBCYPTVQPXxXzhCR34vuor9Q1iN4sMsyejwFrKD",
  "key7": "4TpRZXj4LsSu1m3HeqJTy6K2TBAr3oEN1KdvkrEycbhqni3pwpFj2tA64wprPxje7vsxr5pr9G7L5gGbh1TT64AG",
  "key8": "2RiYRt2Hjhb4WCV8jpLmHiqRNpf9rzDQcRYGFc6S5LjVrCWDet7UJ7bX95FsVh87CvKFMR1zY5P8Zwkmy4QCKeux",
  "key9": "2snwsxaxDD6EjKZ2vcWtHenYptvMSQK9zqS6E6w5mywkw1cSFfkFhUmjAP8m5tnqjKaBJtZhopG8U6bp1ySQREyv",
  "key10": "5UjGaiG5BpNJuRSpPuty5Xv4dk5jvGLizvnig3Wu1twXH26w4xXWBZ4wXYQannKtxbtSUQTMmmDLfePv45RecvXS",
  "key11": "3WzEhMxj32Y1pToqF5uE1oZKWgY2sFrFnjHhpYfVE1ygLxZ22PoCXnhnijxniQ5Q8aCrX7bo2ipaZrkgygZgo1JD",
  "key12": "2XaCqwDRAWsCwBX5KscESNnqV9w9Je8WKRYWfxCyctsjxG1NAuF1zwMjuZDwimA3QeMZ6pqieiV24U1DDVUDSMWu",
  "key13": "7H2vKppsetrthdYphGTphDZFjhVLjECNyHm7x7S944WsneagWt9tQiZDtjwguiLBwxVhX4nSE7bMKaYEELEsbCR",
  "key14": "5M85uirqEGi6ZNZzigMtSpjJupu8ehhEmF4TuPtjZr5GVqifAr6mk6gtFyzjYV4RuNmXWMH85gXT5soeU6m8Uj5b",
  "key15": "649LuWANJrJdi2eMuXwvPen96PEhLC51GKHqtKbuvMCrTbvt3c1yefvvXrHX7PCQ3xE9oPWWLUPg3WcCS53RzguR",
  "key16": "fgqhBGkPZua66FvPZpyEDvFCcxezXpQjaHNvz3ecEmF1fzhdgPs4nvS74xRZSjoqVGRGQXB5uP1Fc9hUnKXDeas",
  "key17": "4qvorZ7rBwbWSV3Rb8uo8PAJWs3EHnxEBcAJ7vo8KwXnC7TDFd8kAkm9aScMcUJuhE2419keBgUwtHMM5NrZRdVd",
  "key18": "2bAAjQZd7j6zMNwVFfoYGdLXUtWuo4c7BMRWT2PBda1nAxy26HAkWA4TZr3APqRiRqzR6YGqJQ28PSxRRgNMUipB",
  "key19": "2SwTdzM4DwTySQMmoe1jTJUgxFYgfn1jreP729urgge9fPWeXXnXroqemuqStBerudgTgQo49cauSXPjTnAxZC46",
  "key20": "4DgntBKFnJrAdeddNffh47MmHhE2bg3HHmLqq57xnKYj6MAx3ZLPHR7wtAfSgQDYBkSDYJDF24JHPDk9bdNQm511",
  "key21": "2mx5UiWWotBVdBrojNxLDdrNdq7S6ANqaanAF5VdHQ7MMdcfw4NGXrDJr1XqCJnxtfMMqyFXJLmZ2PRJRRMHqNGm",
  "key22": "wQe4MH9pZQdhAeKquSguNKNoU93tp3jhaqdoaozbGDFLJbfhSwdxXdMkRKYF7mTBaCiRy1DBtCsdG5sJ6B1kGJp",
  "key23": "4PHKgJ1wCAULRTciJjyUy1khJzVwGJGY7bYKTbANv73Z8ZqJNLvuUNwPUjGHQwKYMCCrEsVvukc5TaQZJfoqJD3c",
  "key24": "241pZ2YsazmCGcqwrBKJidzzz7MG9Z1jatMJjSpZioNX6JHM5fh1Lqv9Bszu9Q96qFLXBzwS5BgEbAzMNyohDxmw",
  "key25": "wwRoau6eUvuMDumVp1NVxpwvzfwzCGsEZcDmWyQxoCv7ZtsKsiipDMaLNCmZH6Q7dK3MV4dusX1fuauBJmhJP7S",
  "key26": "f2EZfm2Vbp8Jxub8AM6xK4A4bKJvy9MFJTrR5qeyhCKobxTWXjm52R9XKA9Zj8x7psN3mqgr9HQyxUaYjjyJ5Wv",
  "key27": "3pN1UhdYwjHYVZ4dRvYJjsWWUBgsRyfVfoeQSBnp6yUzbqUJDwGfezTJ5DKZKHw9BoDZWjFcvKM5moqcFVnC3Jzc",
  "key28": "3y7wp7r8J6o52Kbs1RTtszsZngR5K44jA4HxcKyVuascMj7uL8JopK7bQ5ZaK1vLJZoUcPPhEj7DVNMxELprZPxB"
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
