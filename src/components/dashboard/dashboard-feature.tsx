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
    "4iEEcsDYye5xHKvQ5JvfS9oXYRwspPFa1Pgcrn516rVhVfAYkAXZRJJirbK7Asm7eVAaSYHLJJFvgpikKQ4KbzLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KBp87CJWjToxokvPpbvnW7jSr3bCx9fuwsh6vbjYsP8kvbGHKb8xYjGohVi8UGgVifxigt1JrkrqJCEnRnnK2W9",
  "key1": "CKTddfTyJFNkZVRb5wY9PsLYhQttUbxP4fiACgVff5GAFdaDAc3H6GXASLnX3NCfEzt3SozZ2fNaZvH2b8D4aEL",
  "key2": "2r3CpD4hB1Tr5KxWBQwgeozmgYZyDpGMn8p76a7gim1RBmcYyvC91d42NzshuCtMM3W35sHM8Ayk5XUNBMuFE88D",
  "key3": "5FkGg7n97hxNqkeErxndbADBHSLMh2Y8wwsFzrTefQAhf4XeGLiZyPaAPfNs8JZ1xQ2gAKzgygEify1cuh163GLL",
  "key4": "3Mvi4Ex6WRkCkfLeZjoJiVhGivJYCvT9ZGjzyHMd6vFKB2yGemeGSxHKPtzozmjo8XnCrGn5LNdW8XPSqAfm7QmE",
  "key5": "53NSBY988JKE6z66YYkTDE6ms7jELPejDFZaydDawVmtsYmvJhjJuRwHyCdvwtVUFzqoraGPta6EitbjyPgVJZLF",
  "key6": "5TNv9ypdSQXrv31ebGW6zdw4iFFXnki54jz5dDQcP5cfiLvWK92VEPx21yuN97CnfNX1DZMVH2fP6zaeUcwuQs6g",
  "key7": "2ecPHbeUoBFoMtTrEBLJzA6qCqPBQEGEgcjtjYB6k4qbXTQEX5qPV2gctiBqzo4F7okhQmgUjJpEF4UrdDSQwkBG",
  "key8": "43KC35qqxHP2igBUzgUR7u6VassLZ9YvRfQnpXeH11uxcULa6zZ9FmMSFRC6iezZYfCrZnzYk4EbHN75rTuMePWV",
  "key9": "4XvjhrucRacx2xsqvdVMQdFJmj9nc6TfxFYccb7RgbUdPbE8k9U3GRR2wP6cKqWwubTkdKffsBd9LnnfLiS9BE5S",
  "key10": "5tTAjvZfduKNe5Cr2LzDcQCxBUR8bQpJjNqNkStQJLtG7HNWrc3nzg6BSXA3xrDJp4V6UUZt5KDY99feex8ZXhxu",
  "key11": "2AuXzEg8S64qRV8ttgoXqzRJoLkYaDLhDNfDYAyVG1cF38MejwH6nhnbvK1wE3BqWBLomZExJZAo5Ap2kzCnvPaK",
  "key12": "3MDNHdLuuoFbowszBWsNsT3Kr2pitGNm2F1z2XXQQem9TiqDQ3cffWXLWrmJWXrPC1KwJHXwMzapGiAzvMvpFENJ",
  "key13": "3pRjMNyroCTa6pV9BDuEH6M3pxY4suX8vEpgFeUnobocqFGpdfaxvRAq3gJ1SYd9QFVq2azbSGYKGeXrTyeMoBpk",
  "key14": "5x1WXbKwCYD3vgtwnmyYr8Xodg4jtj881tUzNLan9AbgM4gtay28GiFbF5Xe3i8t52S3JAk1uQn3aFMRKt26PJpr",
  "key15": "2F6QMaVAkPbGpyBAHrAHgNb4WVW2L3vpvd7QQgdyv3bpgMk2injz9te9zhihgsNkKqXKUnZfycpbgHESwQ3kiF4n",
  "key16": "ixPeWTbzoHjW9hLuuWLFYRVi3XVTh6txWiA2Z4fJVhokpPCc39rALwGxZxdWyiThMtUUGK3jjFtM6DMjMqtpb5j",
  "key17": "4279qewS2X9a4Tv3kZiZNRmGCnRPmuJkzvc2zmJA58ro9UJwuPAsTaDbP2roAj8U8Vs6QvkGguJXm7AS1MqiCzny",
  "key18": "2gJFrCZRj5B5Y3qfZJc7QtYa1gLG6Mm78UEdvFLGAA2uJTqrmef3b6oUGgtSeUCoa1LGz8Mv2kckCzXf3Jy3CrWP",
  "key19": "21F6pvisvSfEx2Bd8jUf8hQEWo9AumWJPbNDySAbrM3ZqxVhKCoCdyGcYuacXa8S8Ra7VhEBhJR1QNS3rXSU6SAx",
  "key20": "NTmLvi3J1V5phEdXkcZixizGmaA5DKC2fxDnYZ57Yycp5zmYtXhMKEavRzRQw2HqaqBumjNHCX3yjGvEzLJPLaU",
  "key21": "mZ5esPiCVgGBaS2VEc1MZnGgmMY1aPux3bzy52DvWYChXHkFuKEVf5w2rh2Jrbrec1fntn2fcQLTL6huh8cfJjA",
  "key22": "3R22m4KHMRPp7KkBwM8FTY5KBGRxm4fvYKpixwBAzRL9McttBTnuXhc7TjfjyeSog4owg8nG5GQCucAYQq8pUCA5",
  "key23": "5rDsrzGPdVKzNgbmHoAGVcP8dn3SAjeBy2kkMmT34qxKV5TgcLaUgSWEfzXqfqhL1ph39vpZ1ZMzKQc4zay1EPkM",
  "key24": "4SNwbwHwi8Qb1HMiBVnDDHe4sW63CaioyPznQUQvR6JD7KgHqPFV4kk7QUQDK8Mj13WyPrm9deJoAEKHXEjh7a6N",
  "key25": "qms5hzDyf7DU154sMnEELvS3LMcZts9kcqn6apRHxiXcxw8T1AhDFpZ2ysitHdyrjqbPPfDDeagvNncciudoKAs",
  "key26": "3qR1vN5AMJ23Dywwuo2Fvpaq2wKMAAtTohspKFcxyQabhavPcoEsKvoVnwr3BzMiFiRJnzrN3867xJsai797eWuo"
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
