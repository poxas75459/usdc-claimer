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
    "3FVPgwN2iAwYYyWDUNKwsCXNu6VgFDFRwtsMHtewgKmzQmBA6AYfUJWxCss27Tywm9RL7toFCxbn62V5vUDY7oJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vsNF6G2itRqYRoEki9FfLWCjRyoVPHQMyVY9EufW2FWYiiMPbMKAYxoPjRJZL1akeACjpykuGDEQz2PpYe64wHw",
  "key1": "2yYWx62APvQ3mCf1gaSfVZviHJVn5h1H26bX37PbmuxpT9DbVRc4bFgoxKCJ7jvbVNYijddpmshrxhHzVF69eK1E",
  "key2": "2ryi9XAxVCr4E23TpAzzioKfFggeAqcRdw9dJLzy45v8vUgzyLvY5tcdLDJ17f1YC5CcXui4Bv2A13KkuR7JcUf7",
  "key3": "55uSu7Yx8mMveziA9aEgfVAz7YV9pM46E7s88cE9pECWThtFXqugbWNeuitgfN7QgVX12xZbpnJu7X1iYoAbcE6d",
  "key4": "NWDBF7UdnjS2yNuoKSpr9zvNJQjZqKMKTxz4K5GrBhmS52xZLcr1mNTb7SZBtP6tStqd7THKHNaTo2reHTfWCm5",
  "key5": "4abXiPrBQRuaRqx8QiqrcEoSNTBFSzvjLETPRufLo8D72XFYZeCaRoSHySFqspmfkUpEoXMpDWVcuXDHVxPfnpJh",
  "key6": "4CNFD4yr1ZHAs8QDHxXdhuQoxtPfYJ2wPcBiAUHk4Ug5qpf5qvgSzxQbNwNr7yACpX6gdVcGXt6h6HbTeSFDLVUW",
  "key7": "2Nhwqc7abUCuYTHJeRPHHNa7miu5xZvC93uts7VxGirrPoy67MneBeSQEd5F7pHjWJiCY1VHaUwrzqWT2Eac2NDL",
  "key8": "4jSHDQ95jd5bfzjgLKXzMhgX1WbFK7tg5THGFKPbPcPng3FuBeo9ArmGCh9BHqQ2XAYiBnYuGgMwqRbn5X2mnrNm",
  "key9": "3iQprJrttjHKyvY44QqU1TuHRFgvQpSwaYfcxS8GTy13BD7pvQYSW3cptHYCQY2yskFJfRkzNHUsUoR6dN3ajz6S",
  "key10": "PjfEc3mMuQAQpCBY3XCtL54N6mmmfN6UYoKVFqJNsXxPGrxityB25ZSVaxPqCznqEZDjMEy3MyE7b9fNQxLJtEL",
  "key11": "4hJcugSM15dSkLeTJxRWsQ72uJ3TNN879ht7htkGHG62wpoX3UQjbYbvAHxqy9fbcKy1kbVgWnGWBcpR7dhta3Dp",
  "key12": "4cfHbitUMBPK69UbDcjZeLQYDGd55ojfTyehWXtfzitEmbTeCUUSg9wy1Wgt5EhGqPuLg9fjzEJZovuKV37MoNQe",
  "key13": "wdEbTJvUcXeYKv7jyZ6PSp1jMq8MaRRktBETDH8gzFt34stZNb22x9f6BYf8KogXfqk5nx3JoSGWpSgFxiBjQHJ",
  "key14": "46sYw36j81zhZmQRx1FDGBCc7U7gykLxmfiwh2dFxG6tK83pFPdZRhyrjrmU3rTEBq2xskSjVTuLAap3q878V5BW",
  "key15": "2898zM6JBuPQK2eAHMzjZvjHKFYnDgim62FJfrNyY17WwhDmNrRthZaqCuUShgepd2JZ6ZHvQCC2cgk3U5ReBwqY",
  "key16": "2uj86rFRa19qqUUK48FGejAbTSGkqq5Anone7pwKhxcy13y5jkGtXQdu5HoUiniWPYdTTWQqUUx4D85YN5dPsUXa",
  "key17": "34DPZuVxNRKK4SAKofAQhKwPWmHaNbRVw8GD5H8h3Ad33H4zqWRQq78QScixgJfELuKWr6aZpQbyjcQ86Xdu4Nmg",
  "key18": "3wGjD6RRYyVGizbBSfu3HGeKPyinpS7nf6X4zLWHS9PR4JUxSgGdsZawVyuCYe526TuHmAiMUghhwHKeWjmt7jS2",
  "key19": "3Ca896ve1VAyAEE6okApC3c4Kv3eAoRDs7ArcwQY7LPabyyURwoiiAiQDA56V7ve4M131tnkQ1GM5zqjVSSjAWtR",
  "key20": "39L2oPKq5KSnUYyrrCrLFGnkz5EzLTHqDU8QTkvoJEZmi4kwDCBjuUe9kAJbYi7R6svPW65YFB27yXenpm4h6uze",
  "key21": "4phhkCiS5XrQE2zLDiPqAxgZeC7K8iwdJzMZkZ5TiDhBMEFeZpRUZDVPoA6byVkTFcXh8zeKGuCiNAFfaS89FScj",
  "key22": "3F1n45ccKY9qyn5bkMTXMQqTf6wP21N8ca73EDktssawmWwqQny6kjsuh8BaFtVc3R7MUQPy9x9YBCDkaZc5NFGh",
  "key23": "4N2zNTKXyvqtQeYZK7c6mhwPZ4CxhNUuUwy2VuX67UPTf9i1j1rsaBymzjoH75ew873WnpANNXk4jGeXgtvqhMyq",
  "key24": "ageC9bP9yASEi4GCkAxHUFVfoWSwDus7WU2k8GXkTqn5vDPeJuDxzLvhUdrqZWVssnoWroSWNPMeSt9HvYkKsy8"
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
