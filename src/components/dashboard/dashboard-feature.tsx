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
    "2VEirkBr6qAUtBz7w7CadLs65HVvj6Au18veUNTdrEA6uLbjvqL7JuWnQsQWdftewePFdnXdbGv2ihYYViz5LA4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrUpZ29V3AztskezytgEHBwYAapGQq5mZoaFYrQPMMkahsF1fH1ToHdb5QUDGJmvbtVcVt5jqL8dgTRjmbSqNVy",
  "key1": "XUBY4UwQM1jxy5f1nuHe3TbYr6x4zQqmLpWLh1J524RrGcrWXe1z2GfBL5fUhVZcTHeWA5J8vPLC1t6do4nhxuc",
  "key2": "5arPqqndNzLrSbGxFwijPY6DkWvYdS7PuJZrEmqx9xgExF34vFVEjinzXn38qLrDCMbfuStuFoX8uKviKmV5xHyZ",
  "key3": "36TD6rw6zoNKzg4RdiPb6PM1FkimsGQNLAVhfeKNFTcx8edvsbduYomyZhxTXPXqbPVguha2HdbU5pqxvpgQhfHa",
  "key4": "29i2SjPzmwvHnUoVhmcu7C8SMYo6N2uT9tgGvq52ea5AKPqnf5zfEUDxco1Lu83CqVwq1brJcUZhSSvD3RtHmcJW",
  "key5": "EQvgH9ETAWQsCsRAwHe9kokoha8xoiRBFvfNEGeuuBwks4t7rdMChhbBNHKHxVwZXtGsoBxZJuvkWRDSG2PKfdq",
  "key6": "3tJE1nKXfxtGuuxKvfbMJBKjCsHGzoXFjv5CZpGucmsXD9qKwW2PR1Hfkm8vMZ2t1nPFR3q8zCroVraVc4UcbYMw",
  "key7": "5PdGSsdSapawFJRGc7nHWsknBP1yzXuFh2gjLVaHMG9P6vfgVqT4HXwcXKD1LDe2Nq9WGhXUkb7g6anQyDvrp8J2",
  "key8": "5LFpknyi4LH8z2aRcUJHMpeAWp7ZSJdouC2enNFSccgEnMEFJu4qA5ozYBWKAGJskSY85NXGLBHWUppDKnFGWHPR",
  "key9": "4gNJDV6iUGLHK7dvPZoCKZUAdedCPH8Emter3VmqoNJg9tY2XP3FpUwCqL3N5huRraHpP8bpD7QecpoM7puGfRfU",
  "key10": "26YCgJyDbjfdubcKhZAoLb3AsRvs4Xd5fNaiY96CjDvq2H3coCAZjfnTSL31wiGaKSb2zpsaPBDZw4LcstbJCi6y",
  "key11": "3miyKV16tPRyEhXeWqbLS6eKL6TCKxUGUnHp71GdZXNYM4yK87msGbhZqmzPHHg88fyoSzwkJEC8YEgosnGD1z5v",
  "key12": "2jn4ioJwUqjCibAXZ93HpQVGfGDkGs6L4xdQ6zEXbPMN4bDp4grnFtZUXeChBNu639egYcCpwZGHP1KgkanLyytj",
  "key13": "3TmwfYAYzzTKy3MwovzqmQpKtFYJxZCCCJ3DY4L9o8H5fMu6eFqgkAVkQiZFv3QQSDbfVwPbhDiZg2cZ4cm1jqkF",
  "key14": "3kACSZ4mKZdfhFUpdrEqidP7x83atav6miXjAbSRaeUz8RCLxwtm559CwRBAoGbjVnc3TNHhgGzA2Z3mRtY6y2aa",
  "key15": "2G82uXKPZWPksocnFNXSytdMgWe9v7bVqvEKmH1vTJhpHU3XpyVA9jGeWKuTP4eRUg1PC7npFbf56QWWa7kbdoKU",
  "key16": "4uBkTxbhCpWyDKy3cburxNDjtx2Z4SLqAfi3yRJ18G1KjXhFi2xVYkQXQjxQ7ghxFwpDaW4ky9PU8abL9PFP51DP",
  "key17": "4xEMP1CTT74hGLFiNVsngQogmo7DTZbfB8EVJ3Ak5LvAvcVBepVZibMMZiQHgjeaSGny8dKxpgr7tR3ahguxnPKp",
  "key18": "4bq1X9m3VHoK923s9Nsp7CgVSPwEZ6x4GMZJe1v1pmi5fD36H4ES59kGGUfTD8vLEVh7VURTTXgL7jgeec2UeBpn",
  "key19": "35MVg1mbc9pe7ugfpqXBx5eKYFQjNgbd8Y7UW1p8tpCQLyuGzN14aoQhzconSp55yyxRusGG2q9JuqNBvPRPZJdq",
  "key20": "5m3if64Xuqoa2CXfmAmhFySPUSWHAvLtjY85bYE7jkKL4RaeVYdc1yTbQLdMYLXnzYF2kobsqT1iJFwXui1REqo2",
  "key21": "43NssdGpLbGyffRcdmCqqPBsH43pHxRefSin4WwEji2baZY4Qp148URHvvDLLSEQYHZzv6txbwFFqCjtv34fidFt",
  "key22": "4F7exxyrB7PsA4U3BT8JEWmW2Vz4v7dsqJfoh2iS47UEvyFUoocbmmo4aet8qWKKYWKGXJ1q5t48zdo8heL7CnQS",
  "key23": "3FM938mF2xXWzj5z3eBte5Z9DMAgnEzeFPzvnFQgQwXByLDVkmu9M8HoNKNhhyVNjHE4QpWnAUtVjmFsWNhpDHJP",
  "key24": "2YgoMT2CNCRijypnmV2Q94dWakaVaThWo25KxnWtgen6ZTat2ki1PFvHqwGemeUQ672LYeq6yXX4NEKrwEaQX7Pd",
  "key25": "4g9SkGHa7XsHqSdyu3Ff2VjibLuxRUsKjvfRXPQkKQhoF4nJfWcxYW1cRRY6JqXCtDNQsyfHDWCJ8mt3FF6uZiWK",
  "key26": "4VMurXzV2XTMZJhXuKqMtdir9VA1BC5eSwKvJ5XUQLaYr4i5CqkH7bwtNz8smY2JoN4RmK5Kdgcx1xCtmPPN57f4",
  "key27": "SYcMJrkTyU5reqKzJjbDMQMy7jJgJf8ybuJ3jpFzrHGgirFqpEBzVh2jWcnhDhtuUrHkmEkAEZYmRW6rXavQ4Hp",
  "key28": "SmNTXSB6u8u5aUTgaEQvg2rgtVPgeAe1tWrY8VNNczSgbdFdBm6z9V9ZUhXGQ3veQa4Lj4hNWQMaEC22uoEFsPP",
  "key29": "2qnMgfPYygCkYJPJoDYhfNwpUCMvm1w7GzbYdDUKbchgEvg44BgGNPQKgKvZzhBKrUUGFDgyA9gfLE14JXyLxeGS",
  "key30": "5yr2BuNMJDk3ZMEmdGe2nv7k3gpnLYei764XkJH8VM3PXAnLsNA3dMc79yWSAoAspHJozbTsN6xsvcf4uNRKM5ro",
  "key31": "3vXXwkU6hVZ6ezeody9LVxAChNjLUeUCRTUAaix7dqDKP6Y2eJtX1Kg29jDSeUKKRWvCKv39m4PVDSfwccJZznrZ",
  "key32": "xPGEyg4WD5YDRJ9u6fHBPafasL1g7WnqFYfqpGjkDtbe9MUF5tJkuCi2SjcE8bCmURqTFqUUtsFPRTUuz4ys3De",
  "key33": "5iXrkxbgaKGtCV1VC9oZqFHESxhqdR2dpFgg4HpTipma9GX6HrG1du6bLTTYtpKr8Hwns3sS9bNENzZkjKpJttaV"
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
