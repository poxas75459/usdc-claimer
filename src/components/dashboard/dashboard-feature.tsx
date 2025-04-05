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
    "24QnaNhtsudVgJhqjBmMv1d7bA4vfvMs43PXyxb8jvEr7HGFLJzjAyCg5cpUnw9xPaVxG7zaCzQjoPkTeJJzEKHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PsgBCfKby4wp3eYhBjoa3tgXCezj3qeBz1MG3TEUTcHyDiWfwPzaptwTp17HdsYxUHVBfknRd9osDeJjMimi2ta",
  "key1": "tYYcJQpQvnAcxbZRJ6cPWC74V7cM6vxdSQTdz5avvZBq8z61o49gfKjqTNcpJvndkpwXScK8GuyyjDfgvUwRCHa",
  "key2": "3guwco7jidfGJrX89646Cu5PQ1MiztixafmNbWJDLxx2oYJ9D4DjFzNML46B6N8eK7nmPi6Ehv1AbnsTPQp9ytK3",
  "key3": "2MYys5zQ3qVVZJXwf9DQNQ31y9cAdbsjEPW7YrFPtbnVWdrVHWKi53pNpjPXVneD3u2fNxhBm3qjqc5gBQUVaZ3L",
  "key4": "54yKHiseKeLHfBpWEWzwW8CZRasEvNm853LNDhcuY8TjQGDdSy5VEnivFh54wc7CnLUfiQKnJcpFczzRDSh4gLZi",
  "key5": "3jub328xpfNwByRH6pmSrYEmdjjej2w7Rr8bHviCxwF9ff3h2ZMqCKT8VzUUXM3wzKHmbqAri5aeQ4i5ApvAwPVF",
  "key6": "4JBTBPu8qQMTXwwJAvaXtyLJ1jJjs4FvGvHJjSDPAg19XZ6wuSaFjn8J8RZSvx6sc12jhPUxnWkM37oy6HHNqruS",
  "key7": "FDvLTMy4FippAH7Ve1Yb7krKdJK7Qw8uVtDcepDjeF2HueuYCFhea2CQDqBrgw3TmYGT3zX8byUqacGF4rvH87w",
  "key8": "55rdEMvvySzrrDDhXEDrAwDc9QFU3JbQNuTPsracBAPaMNFSD9MimqVXtvdQsLRtXchMSeG6Y5ig9jZDnWekDVNz",
  "key9": "2SKyfLUHYLYVU1SoH52RW2rQVVaxAcacg6Y1B2C17oPmuqhQ6PDnkhKZ6TweXBh4MDRgaNR11AERGEVaGApaJMJu",
  "key10": "2Skd97yA7uNanL9cD1CVgDJrCAqpPA5EfbQRGnnYh1KNXQMk6xJMburZBnut4WoGdTLSKskcidDmV6TjSyfhBYLa",
  "key11": "2rEbKroRuxKBpHQKfrdcFFzi66r7VpE2VG7YSAmiDSzBLoP1bu7bXhDZxwcviCirpYhpBZa5QzFsWqqwYcvX6qCX",
  "key12": "2rNSPm558ZydCAq3wzsB5ThPHYLvhZiGDHn6xyHxnMd72gG3r9dzKPgX59PEprV35PEJnfvgJaZrnMRGVdQvZamD",
  "key13": "3E19gYWrN2MAHWq1H8i6AZWwoHPzamR2hshDQtXjW9r8s7CZHnKxrR4xQLK2bQCW9fGX2RxoCqxihs5SRwFtFfts",
  "key14": "JKDyWKnGfCEDDR1mQvBadqNG47XJpabLm31jpK1sUwsCiz8kMbqSUg3jGNeVKb7ZMFZKyG2sPqjU4MBCY7VXmFM",
  "key15": "21F1eAPftDN4kzmXVUMLqA4D6jgSbNbt4jc2pu6Ku2PxykAKkvwmmKBxb7RoNmVPTn5z5Kk4t5JW9yBRKnpwnn9d",
  "key16": "4LzsdEwT2gafeYuPtBXA6JTaFmMLAXtZTY1UifpDcr2TceHHm1nLmpeQtccotjGsHnj6d96oh9Vcy9tE3PwRjg64",
  "key17": "5FtQpjbC2FBfjV8M6zRsqWMEPZPBzqC1Nod7bj6LuN4DbA3RGH3wZDKDT7nPm52q1DbP3nvTW7QpTQLD7S2wPXso",
  "key18": "3QKrNx2FokMWhsfa6L7MW2uzf6Wt2uHxKkAQ5YqdH3s4yDTK2tJMNvTDshGcnJfH9hJhzMgAFLeKSQdovVZG87ED",
  "key19": "5Lz8JLSU76V48aFr5tgJzkh2BMXR7tzcHJS9Re7S1Sguu575vMmt3SLnWePNjtHom3iNB72HeJ9v24FQgDMuMwVW",
  "key20": "2YeoJeTH36H5cZz7uy8HNCjpKXoZ68UMHh2oX3cdXgFZra2JAuEpP9SeVZVMMNpeVV4BHF21Zmd764t7pZgEdTH2",
  "key21": "3hxgZvqrx8kGKpN1Xy6gCgUAwKCU9jk2Eadt4uQEzmoQfYbHyCrZ7rj4fz34AsxQk94x4wabTbZGYjMjAmNPxBT9",
  "key22": "5igocRLfu5Jy35MoYdGhxuGmQ9oCcFDzhFKfaCvej4HM6W2D1pChFaykMF8VdZD9PgKupP9fjvqPM1Xivxs65vNM",
  "key23": "37YFKEPRtZzsWL9BHKjXAqbVbPk9tvkywHCu2qtCiVFbCWn24LmYGde95UkwPr2G2m1HQE44SXLHhfssedW4JJuz",
  "key24": "2nsnSqoSFy5HCi9r1tqLpaXu4uPFTmfQCZC7v4CUVKAMNpP5cBQxgbPqAAx9csdT6ZuCGVLZgaKU1Zv6hdujtKnQ",
  "key25": "8degKcViZ66ahxq12a7mQJPivLQeBQXofx7p2J2ZJs9329MbL9YHRUMKTMuWtNmMAL98gzt1uhn568adhY1PiFp",
  "key26": "53MpneKHhDUsPDMdCWgdjkziGS633FiuXVgUn47YZzS7pp5rthS1yNDVedxwqY2vskiaNKwwQTQHWmKVMeYQGvPN",
  "key27": "LeWyJFepvAMpArqa7L3rSPoT4cgRmRRt7ad8GeJBpEKMUDMVnFFf6Uk7JGg2bJS1aNjFhVchsBc9msmhtsPVS6c",
  "key28": "3cQcbq19Uht5URJio426SmJfbJz1aCEtLfzuH2hG2Hj3KcWSpV6f1aEAizCAJCCGbvzcUB4eERcsgEB99dYB3WdD",
  "key29": "2AqT9iVDA1ptoT3AKkkXwCSzayxhPXDtsRPpoGzYfJe1aimm9v7mVW7xA9KrynbR4gsQNbqUPm3UtBfWZgL6Ce4e",
  "key30": "4XHmnSJist3rdGaN6yJjuFFZa7Qw89W51zQjeJWEKMAEdoiXHB9JPxBHfQ8ZUwnUhF3n7n2EJXELXhkvck7nTGtK",
  "key31": "5iUYHy7ZhPuu7S3YdAF64VNKa5taXCdfqckUuBGK7keaCeK2k3BKCr38Gu9VANoxGRN5PR2BTJdeZ5UQHRvgni1H",
  "key32": "3wG9iAbZHDnAnzfC98cj8pQBdZ7RReC7V7bc81MzL3kw4EKSd9uzzVXvxdG7vzu1JKurkEJLUYwmMSkJRzRmG52c",
  "key33": "Hn9B99USjopBfSAsE6q4Q6fKVgi4nLqfoCWkV9LzTK38EnfFdQrPqV1JxJqBc7kF6J7jzkb3fHRpRRNLJCMN8xU",
  "key34": "3DCvGitANxoRAiYCTmUNPxfbtdRGT6yP1iFT7DADLfuV1M2iY5T35zSwEVarQ5gGKSUyZ4fZtrKEskLo7MgZw2cA",
  "key35": "tPi5RkChELDnFBNrX2YFuM7z6Lv782j9JJuKShDv1LGrkdkVzjUVTtUXgKTZLpQTsRFKd6YYbCfe2PxTXVxYu3U",
  "key36": "2GkXpT6vcpWXtBs3zJjQYahgTZnm2RohCTTocqkfm1XEuiuvtBnnrEwEVbGUbKpdcyMZY3A8EQP7GPswYFCjHsRJ"
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
