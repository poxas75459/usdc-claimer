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
    "31FFT1y6itokBxaEqfHYhD2168dtAfiCbeyfbPwyPBa4EKGy3aDkEo2y56xgRptjeFaCb2HYdh6ks6GQU94FTKvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V8cZjMDyx1PJKHvLp8yd8b33GDdDVThyF3iT2SRFSoxb37YsEgvTUVtSjgLnNWLfgnBKDTUi5kbgQj5JvkpS7Ze",
  "key1": "3rqAXpiTg6iD4EYp5ApBchz4zh8MNWQzxHQaKMafHMrUBwnh4oMDj2wTki2YkKybFBtHQsc9zBTEFaNW8KNjyntq",
  "key2": "2nWCC8wZGbNisroLToHEPEbccM7pJ7ukKSYsi4F735GHzAYz9mdqdebdzNxdeuhBfQzazCcz5yQ4FgjcdkBBBfZs",
  "key3": "3aZBQJ5bb7zjcH24bvsWj7U3L4etPZwybk25q8zqM2K3J3QWUMiHCgKyoqhqrtFWkfn8Z3j5BQVhCujZ9CLnYRpo",
  "key4": "iUUz56MbZ2wGgcCAJRvBtu9cYF9rDasLPGN6EQD4xfmdxGgLopAZghzPdB7znSQLjDUKjuhMDiUvba2CgEYqgGC",
  "key5": "4Wrw9QJCPq7YzA3g1p2FFpfkvEa6SrKQo47KRqTNxynjDUrpp2S3i2ZaqARBKZSRSia99EZPr1aXcQfTkqt2wUjG",
  "key6": "2DF5ByFQM8rabqejQysgbPVNeaU4wjzarsxmP1udDspAf19VngiNRuc25i3YS4ysAAK7CFk2DQa96wHv4QzxSthf",
  "key7": "4AVXxZW5fKMe1bihgfemGEh3bZYhznHzbHs8XL7MQCTXVZzT6eW4XocPV6Z6q9paocxeDevoBVdVooKsSm6feXQ9",
  "key8": "2meHyDHeYuXXddczHnhMuT2sNtgNKLeeVMXigcTpjLQjxcZatFUB6AgCUZThtMfz4vWtKRQvJEZYmhUsr8ceUKry",
  "key9": "2UzGP697oVaCdgw5LnhGcbFXMLMhfw1bBy35VvBAZ9iCNjeCjnW7m6nPvF6TR3NSoRDaPfjVWxKg3RHjNNksJmst",
  "key10": "9Ymz3vhn9pUow3wRSfUpsQYEnK99LVwRsy5PmjX9JBhhDCLxSgm4JUNSUzzARGYYdCPqhCY6FLYhkX3ZWU415cS",
  "key11": "Zpqf172wbQa2pbMJe76gVSnDqajzV1e4oRzry7uZMLeGY6x7QHNYRMW1GzRzX6h3HfW8VvJY47VFdzrD2kk6VFk",
  "key12": "5tsCvxZn1f26dXeTjPHRsttyYBP2bU3nrWETuux6AcNWYs3Qvj3PTAo2wXazTSWHcZdGer5QBNprXqmNLsd9hCPN",
  "key13": "2DUtMXbaNpghN1ZDuyo4C8PqspCbUJMq2bvP8KCDAP63x3oYo2E6cN8e8eK89oxXTDi8QXfBhB9hgP7kwawHKXU9",
  "key14": "3t36tYBywwJwv66fthkNdnARd5WNkHjKQkXzkfwgCpey2dwPcKcGsgp15FoHi9pvu9msicYcS528iBay97Dz56dW",
  "key15": "L69cHjtDSnbbzDWxLCezX4aejBGCqNfaBohoh5aYqpYYfRoChjSWHFVKmDfCALZRqyCBLQmGF7W8Eg6VjZ4qBzL",
  "key16": "4kWLoU24XYQPxGdSfGUb3BxjcQ32xZo5gqbkGctaLUJqFwwL8fDmFB8Pz7wWvqFtqBHk3tCuPcZMiNSsy5NVN869",
  "key17": "5FePfyRYb4BYUyaoLxGiR8nBYpmvLUxaU2XydUT7uNo4uSRMcqvvuyDf5tHQYAp926TJCf7B2hsHTc97Pgf7zwhL",
  "key18": "3NVThQaZDdZUtXYmWZrLKmKUHY25qZKBAi9CLen1UiQm9T7FsuLQqP9hNneuugYBjXihak8DaqJDGJHQabzE3frL",
  "key19": "3niBgmjENZ3MxDbMh1xjM8Gj1StFBf6cSCkgN6P9fy3MdB1YYXqeo3oeVxSvcf4aAFdLi7eYJVjpQym4Uz92nCZj",
  "key20": "1Qm6BsbdgVx4ZReyEAAJFJrS1GfyjkXDfJoBJ6pFRvvKpv1SThRneqsVRShgmRe9yse37EUxtaKeTpGZ62PTNEt",
  "key21": "a6YVrfQm1Jejk5ombYRB87nqJBRycrWhVzmcdPsU9LigFRtNcmDpVAnSGsivNGznBLTxW7GsJCzEoX3vpJHmADK",
  "key22": "5x95n2GSdSAa384byZ8vnfC9Vn1VbcwAmM3YP3mu7g53S7ZPDMLNFghQUbPjtZNJMujiWyug4BCiLAYD3BAj7hPz",
  "key23": "j6bD88Swh6qzR8eiHsiNcBmieAm51RayCHfpQDGXWBCNiVSosHbtcAbbvDBZA6uE3kCXPEadoMJvSM6Tg3XXRg1",
  "key24": "3gAP5xnMmTk1de1DLy7qUECRhCjDdtSMoZ6hrcsXb9cXfdM7UsuYHsASctNuyP4VJ298QFtaoVYY6FF8CJaACEYZ",
  "key25": "4EtLmyFv4ZUDn9ogHw8NTEa6QYFFNPFjAHxyrmYXFcq8GKe17WzTfhPpG8bC5Wq8LbxsvDuWyPSzknxdvEDvL2Va",
  "key26": "3GcYiMkynKN5uzvFnzj9QxXB5GCwKiBTyF8XmGVQ2Gt9mtHdvuJKJfYKgxYWu9UQJoc8Nmj3Sw1YmM13xoyhoBQP",
  "key27": "9c3mruZeNAfayDRbje2cjPvW4H4Q2Gpj8NrvmxKyry5g5PgWnxr6VsPi67kip3gyVhJjL6CPjjp2et7hP4Ycj7J",
  "key28": "2bLjoAXYRvAmbVWKREXpyuFnpMqcavDjMvhvYMSsZNfoR16Djm7Ad9LcjUqPRdAcN7EVWLmscf7oG5xdp3ioacUk",
  "key29": "55CUBeyXz9cm4oisoSNvRYszfEWb8CsYDxar4fn6uSX3Te1eu6yEWe8hRy7svt42briGVSUQe4vpKcs6Csmp9yB8",
  "key30": "3dnBjUJEGrs49mECTxjh3AWRSFfSQieizSDHvaHU26oBHDgbsjbQwrM2c4dZ5kttRHwMRfdZaNGbtAy8rqzFYw45",
  "key31": "5uG2kNuSt85iu877YRqpYHJLK7WaZH5AAh4zNP42pECKWXHSmfpMXkz4Mm4ZCELxezPxDG3hdaCdhvKP5AjRastC",
  "key32": "5dh6G3gXcK7sEvXD8DszbFugTCdkf6WapAfJaFF6BRCEzotEYwwjm7XZ9ww9h4R4wSvd3c14a4rCGGXjErxiuqeJ",
  "key33": "d5MEWiHku8BREjvJ7tXebEMxVsuoSz9h763kQx58V4LN3xTfKjCkTpwRHEzSx5yLJxoPctvzouKgiV5S3GXrvqo",
  "key34": "Y355XJtmZ4cec8fsoHWRjce1Pit6htkX9G4N1DnLsxC7FWKXejn8t8xKWGfZ6dSH3HbXW6M1PRwdViRNVoHv3Ye",
  "key35": "3KCgsx9DnFp2dnLJvsai7yhPRoDVgm4kNUTUMbMca5VhT2EpWRsGtfDhL95eKcrSCCGjisv5gbmJ7k41ChKampqi",
  "key36": "4vEc9yVuAryMYtgxbRshrks8vztQVCFBdJNYKRCruJqUC2WLT5HRnfSsKkeqebqTuCBtp1PuD1a6pZ1KWLniBnqW",
  "key37": "3yV4Qs6QG2przF6ZBPp8BWMFfDjEMai7KqX6c2xJQsvybtSm5UCMAQZFBQRNjEfTGgsGhXbVeCJRUt3Yv4zLnEvF",
  "key38": "2wqfTgLmzTRNrH2t3GinYa6az8H1kz1feb3vKpAFuV7phSDQzRpRBkaJH7p2GTW6EL6fV4q6gRMMzpaE8ep9vuMc",
  "key39": "32HTFni2rw8kDN3YbcF2dWQHSVWmDUtZ8r9bXqA1FjrrMXiP3LjXjDBy5EmYVir9WG56CC3wAk8FaBpMMFXqCnmo",
  "key40": "4hwyjLMGkk81hP3EKA75G5pMQZMnAQa3Vew2qoj4aXSGdqJxFNrPdzo5N6sM5Cq5Ly4zgyoqzKU7vPirDksBpXC",
  "key41": "4aJxkgAVCzhifv5oqfTBXZQyk5aWqwR2JbZLKQUDS4cJdQ5ijBYFKsxLwKWrWs16uaRqc4DbKzNXCNWaK6nN2GZa",
  "key42": "2adU84sHz75jkFgKgKy46eRuLXTJky9qYKtYmsNFVJhuGKNNWRkfBx86MhUfKrxuLoaVCFXt29UQbyRbRe3XF4nc"
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
