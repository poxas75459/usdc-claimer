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
    "jxYLr5YK73hfW4rgcGedPLZCQYB1N35Jgvn2wptAEMHGja4EMZFzrmXhFbwuTpxF9evSPsUt2UzcHK91aBPRnjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VZkUj1TpGAumvPqgnJrZbKHz62nJ61iBiFBG7SNb3GDYgpSiajbtEUDyQaMW8gSK2YChddU2FwWVo4PyvvKrN41",
  "key1": "61LPKaoCTFUGjrEiFauLJBttfF2gdPNeCC7kYPDg3yGWKMhc5KpubMWH9hF9DkeYM5p3aPeUSPjmLY1UcwsTCN85",
  "key2": "2funD8Akju1pr3SSgqniT371D8jXDb5jbxEvQ9hQQ4DJVaJL5JwC2Wgs6DyV8C5eJojRfhQtNoRZdHmPnwPjMEP4",
  "key3": "39TeoUzPHoWzpkFvQfxJ2XB1X5KabNvjCsP42Rc4yDSpoUArJCnYoLKF5GrFb62ULDk3j3kAstSkQWksHUMqF6uP",
  "key4": "4CDQiA5faMhSLPWcrXxzXpLaPwAwZd5oqSYJVasBvQtn7xmeQ6Ay3SYjzAVXrDW8nD4Q8PoYTfbpAEKboZZBc91B",
  "key5": "3EWPeAKynJQDTGj8dGg9LcyRKVXXcNBbVfkbCdpZsEAHLHc9WA6fZASvo28z5GEsah7BTkz8wR8SCZnWPZH7XddZ",
  "key6": "3xFY1GePUAUhU9WQH9GGvgJdM4pfcgcjq6qPUuoDrw2jVujWWgdHfASkT1MgrsFw8cL8B4ZaeVSSAndQ5iqqijos",
  "key7": "diwofQ61DoBywrKGjjksyZzm9xB1saVrJj8MZWqUgfpuszmjvVDhyAADwD3EtAeZZxfDSYFiAEcec5WNVETFeRC",
  "key8": "2SzN6hcP1PUp3DUCKMo3ur9tKKEdaHAzMTTKiDCfmQ8BhKpNEAXbR7PkFTnMeWgMZQji6wH96aveCFbYWMP9xZ4C",
  "key9": "53oDpQGHyDFERz9JWojdHCoNcN3527uM1AhCQzWpSRHkm9qsgBjZwdJXhyU1PGDrv93zqt8RxJ3ZmMBKbr5epvpi",
  "key10": "2oQvUHmgfDLqTP6kYe2xbeDDVvhBCaQcatrGYMnerRNRxeJ1WGUFe8hLJKvaSRqSscMHNhzo6KJdo5Lpazk2uBWi",
  "key11": "FG9brMaA31LmJuHC6M96MBKEYvG4dwTytiCjd8HRguXszaKyzP6urEB7KZdxUnFGj7h5BQ5Qz8k59NpTwYHkBe3",
  "key12": "jDzRjwHu12UUCABGxB5jMLEvvznLLcwXE2chCbKi5DmpVfii7Af2mQ7k6aWxgfiC5VyePUVQbj5KJqNpRkExN57",
  "key13": "5QCKJfbzortndKpuAMLcdRGZiNr3douZkhYhffiA5VuZzuo3c7d2w7bRgTop1hk5QqAVDmYo3SwupmWEy9HhB5PA",
  "key14": "3fXvsqZnKkCroRCuv6HbxgZHJXiLCo6NwRa6uPALfu6nCaJMQUGPPFPwpRFbBvHBw91vPpDo2aF1WjCKtnePxc6t",
  "key15": "21PiFzyPhwfA2q6VTkJJQ5Z8p14GCJsChoVUWaU4rq56AJWQFSDoZoC3aF3GJaJ7S8zsqxtcSzCC63S7eCcWtCsP",
  "key16": "42QWETEpiEEAenLF3Xp48tdoM3WEix6FA2ynru2FVePeviYLTSNAdUG3WwY5o9moQqJtSTyzN9Q37JmqLYre1SEW",
  "key17": "4RHTNEwHkzCMywnm5wvbE2wY4teStxL2Hs5E98t3gbUexL3jCLcLQoK9rP92ssNakM5DCBAiXyVvAVBPQ7GyCYdP",
  "key18": "5Ctou7rjfSXtmJ6UdqYYd9nafVXsiEubfZ7EQoWPgwb36sqnRFpnu1NX7qGXGRBSnfZ9YREmrUt6oXTAEiuoJybP",
  "key19": "2sWNB5eLVe484EAqX1ARtbXtqLLp7DGvZSELMsHMWcdn5xS2TDTT18pbBWeB71K1k5qxHpzFnuzCykYtNA7P4hzS",
  "key20": "5fFn2XvhBbYkqZ9DAL8RRGz6rmujJrstUgURgqBYrYhpGHakye6GuGUWQ5cUrGjjaz3TEDJ57X4Td2WXe5NGccqn",
  "key21": "2JKTeSHU6MZwdgTMv9fjDTy1Kcy1Mw8Um8cZ9UcLR645cjDsLdQgpKxFLksW3omJjFieRMiwdtKFHdFvjwGTLZQm",
  "key22": "61WGVy5XYWYKTjdG5XR9dqHCHLg9fLK6adFANKvGL2C6sFr23zjKzCrj5edE3efzUYHpvxoPd4mmMtgh1mq5s3Vv",
  "key23": "yyMWzNSwcZRM6YcW1wSwvoCWR4GrtNpTjB2PPUHWyHGBPaBHWnyyz9RnJ3s5qXBHYXqgzdS87u1Ds4EMuCjxXcD",
  "key24": "2F52y9s1aZX8sG5rFYbU383Zr645ucQLAGvpprHGFbjNxJaVnmsn5Kf5me3geVvVmP4QiHZah5sc4uqrkzg2GyER",
  "key25": "5yMcLALkzh2jiQYYiojhhjKdd4u7g4GV47c1A8TbJUPtPRNf924dBcPKXLrw597Scpa1DxWtWXS2Nhdu3i9WdgkH",
  "key26": "wJ3ECTM2EuW6pG9ttQw18q2qWXZGTkhizCFpe7ifYNadQochjC4jq25okkAbi46gEGTQ4W7CEMkzxo6RoMKzUKn",
  "key27": "2LU5n3cKbpY3PQu8RqEEDYRLLw5n5LU35JpiRPFtCKP12CduAiaL3Q1HcP8QC9boRVSxVmBWCttUjNSyPHuSgzhm",
  "key28": "58BQ5bDyJqkP7FNhYtZQ7yj3cswM4gQ4z9Cb3ZDmqzM8ABimz1reY2UttH8qf7Q76tjHwtJtQruZLgpmoZhUWYsZ",
  "key29": "5q8ykNCw3abk3FbasLq5R272brmiejNgNeWnNHzFhh6hHkntX4CpYe2zLKYSjuXwAQNUcbZqmBNS5brqszGfYP2D",
  "key30": "5tP4AJtBSy7JqzKnPf2V3dF1CoEbfeH4k5b7nCUnUDFzYQQurUbFqYWqQT7r9mxbcwmbgzEk8NWKJe1vPuqUYwjK",
  "key31": "2FxxiG1K7XEDu7odqXxBQRAyPasAoZvNyp7EzhvagmrvdjpVQabLyB7RhXu6rfbKC5HzJWUt8WdM3zTYiK8R4vtL",
  "key32": "48da2dyw4XkP1naCYcyXLmWdmGMv958FxyGoyxWJYKxjMrhiTNEVfnJ17d6QUr5H1o4PKaLcx8Hnz2AwjSxMLhVN",
  "key33": "5MjM9Qr4XrB4MQgKuix4gewMi1j54KVgf7vhiDy9En4cTsKh7UASJJLTGReBTKfRS4pqMFmnHjbz8hQenvr4iR1W",
  "key34": "5m1tEHQ8WvvPKwHe4pb2QvAZG1dRkXz8RvHuxkPPLyNPakUUzbcNZb94KFWgGYpH6S9xKXEaj6aajWGzeGEMbMKn",
  "key35": "4bYEMXqpKFBKc7ZCTQu9qucNyPSNHABmLGbx31KKx2zfA6ofHj6UoN29gCMoYHZ9Au7w3jvjuwsYjpkWKxiYk3nn",
  "key36": "5A4HQnZRjFRwCmBXpkbLamN1rX4zLCWqkaSHn3W9V1VBse8TfubgJQQmBbN1xaABqPMACMymVYgLYYjB4qTU5giM",
  "key37": "5pdB5XgEmUxrWukTDZnktSJtRZ2WcrL8J6CVeVsMEvLzvVFrWHdrRfjuLYLf3A3XbLQ32s2i5s3sueV8eT8o4Pzq",
  "key38": "PhegqVtwZfMerngvZiSEbTwV75FgKFdpZQoNFAF8vXbRxXBBcse49T7PJHMxxJMrTvc1UhhKuiFj857EbpKyhP1"
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
