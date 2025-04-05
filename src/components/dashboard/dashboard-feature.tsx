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
    "47UjePXLB5fcihdoprha2V9D1m23ihV9io668wKWyhQYBTp5nU6hub9WRMyNHK86bmkkCeZtxGh4HbVtsWmbbr4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zjHgt6k5VekQvPDbEjDQmkE5pdzEMFn6ckgqzrXWD3FqoAqyNK2g7c7V1cWCsKbVHTKFxbzc6znAw21tjE2Utwx",
  "key1": "2xki3kzq4B93CkcvAiN48dX4bzdf19dTJjfSAnUapVJCwLjEx9sHb6CZ72Z83JhyQgMCfKkpXAF64xufXRWwKHvn",
  "key2": "45qboe4ZwTN8xzrtw5stv3pyvsLePM6juSJGvcEkUdUhUqtrdtRC5ZL5kjz2sqX8B2VQ5kuRL1csSbZGWKMfzamh",
  "key3": "fWCuwjJzNcSTmTUtQMUTud6P2Musta78xAk7X3MNY8dsohPpecFBVgYvSf1Wdkm1yrxAn9VbEHLFgmTk23tGZpd",
  "key4": "4166pk83YXbLFcCeEGsAcZNZ35AsB4jTs7bZJMRBhXQaZ7LPrpNwErqebhDk5qQyCUPSjLvuutVePHiSAk43WvX1",
  "key5": "4bR22LEtjZfjcU6pWn9RpXUUfFZXuYdh9eyy4m38Bj3U6rYHJdYtXSHqLsVTSV2gYFXUHJHaAXLYPVGqgauuPfQA",
  "key6": "2EWmcPsge9D1AaKb31F6AgCakF1i8eA5Wxx3zxwLdnUZP3ehpEr6XHYvQx4Nq2RzTFLuT6w97J5qfucm21LMWhqq",
  "key7": "ggZFbBNLhmXsDHuRyXtyRU634aUMdYzFn8Pstx2PftCAdVjE1cbWSU6TLNYowYhJUfRMU7rocDsQHd5QFc7M3KB",
  "key8": "444vfGHJqodQaDrkMFoBEZXUVbEGRUHuENxrmEKbbnGNvGbebC8S9Wptp1DCuXuetZBR6VVorx4oKXUVLirYFRtU",
  "key9": "pVaonrZxNBc2KrYnvKJn2awAcxxNQgCFSNUWNrafP6moDnijA7xg99W7fbw4L97q3yqgMEX47BAVfepkjVh34fG",
  "key10": "2egvhjwbGV9W18QS5qAEtwzYgZB4FBMqrzenG5NFQ7rpSTyFqYNm6WKHiaXB8KS8zziYUWWehqi1ikYRFJpr7abW",
  "key11": "PqGcbEgFkxBUKDsYqVeDKrWgoQzpT8K6cNX93XhfoF95AZTvom8A6y2e7r6egUbuVnt12Za49VEMwesSC2hALmg",
  "key12": "3S6FDKC9GfmC4PinYgc5FkTYDTt5FWbHknpr6ChEpdENM5sjnJ7hFfEfWFgJ9hvhtpcSjaoXnAtYxREJnBXzF5Ph",
  "key13": "2pXRdMe8ujv2C5oM5ZykMrg1erM6E7eTqX5EtErBHfxFfumTU8cymqSgiixK4ga3b1rmaZ1Nz9QjVEutoKX4A1by",
  "key14": "26EuCR8GUHXV6tAXgub6p7p3Kggg2GuYHS7vBzTopeCjrskcK7kiszE3Brb8A4RiN3H19dHZHqS3E2JcUaXUe9dQ",
  "key15": "3wARMDsTQ5z5KyKrg4nqoEfWHZ34udvrtTkfo8uP53c33YwVDP9CpjEuZW2tCVydAzM5toqFWMPrAxy47ZQy7cUA",
  "key16": "2vbkKrqFwFaqKSv36dCYnzEZYQcULchGZKNeBiQFd9xsGhLj8Xw9tdNLGmvNVzjjhoE8arB4xEcNKQk4TYxmDd7u",
  "key17": "4oXDiXRBwi3nytpCUBvjYq4HuZvj2XhzzvHKVVsh9NyzGK2DzGmLBpMYJvA24EQabtnQ4wHsyNhfbdzHejjXZA2J",
  "key18": "5b16T6RZ9weT3j6qorN7P9MRijVnD5uQo1wfubbASGPiSkpVALrCs5H92B84c1RYxF5MaSCrwZ1PNyEUsQUiXcJd",
  "key19": "2KKaBkL45MuR7nTFe7zuy3oY1Bb9arTZ7LMrrfzaLwUQuL8zamB5eF5GVa2MRP87fTrA5RykZ5a3i8WkY7KJ5GAx",
  "key20": "5DHbwq8hVjkvcvf1TQmRx6eLt9USrMudj6gVVw2HEiXiZzN98wECp7poEo8Zf8ZWDVtYHamw6ZDwUDewtWz7Wjcq",
  "key21": "4BJNbdkahjVdLaDv8ARKMzdDjEwGBzFPkUhyLqjrSHE8RcDerJR1ZCKwjMaKZyjQ7yEsZYZJpSDtdyC4BL4L16Ch",
  "key22": "MJ8uzaCfkNin2rW7Q26KekerAjcjm5YU2oChaqPnqsBePWssD4VPRPm5d4dsDr4W2tFpW7xJcqAyvrCQTPqPMYE",
  "key23": "WBn5Xw1a8YnWY3yBsQCJ7vUS9Jw8P4LJVhaBgWP7iduhPVDaYU522BSL1tKwzKfWp4fTj9q7TSchvREXDEjpznQ",
  "key24": "34Trh5x1oK2HVRD5wj6r1LATUDAEsHQ749GCXLbfMkXkgxvjas9fmiAQzQjSQLrUXVoHBphHbNmWLStir57DiAZ3",
  "key25": "6SWRQuD4H8nVFHRJCKnNsg6gArc1qoE6Kb4pY1zmjQFDBVUrkiGP1LuVjvSCwkAoRvYB8vTnSp49DYhr6SNwWuy",
  "key26": "44zE5kwa4k381uF58zvdqoqkBEuUcZScMj2XLdKtTU5YyUw372KBAtTnUgc1D6vyR3GfJtg7jyXhsv8QWjrQdPQr",
  "key27": "2cmusxWFaLBxeRv5QzYoqEMLwfNt8ZaAJNiUa1b355zdtVE6B7ocHLwsAo2yissdgFXT4nYdkBWyqDAXLoguKZ6B",
  "key28": "3rMq4gt4A4gfNf1X3u8wtwjMSf719jA7N6K3T3yqxgJW6HsnUF67PLQY3wNK7UoDxpVNz6BSaUdUXtJbe3T7yqZA",
  "key29": "ULARe3Mh1fT67RMGzPp89VqYcKQZ4sQipAKLcAnmtj4rvyzzrg4nymW88qHUNUF6WbMqLmPZAwR8LjCpKbb2P8x",
  "key30": "5FgbwfPLGpJBct2JKFcNk6xLbqimv1BURvRrQSmqz6qLu97kBTUrkpAiKUquyqixSfjT94LDxhJT1XE9BntMk3C5",
  "key31": "4fMYQwSzSJsg9mXKgugqbceRF72JuNLKHQR8tfaYZrKcioNx7E6LP1kawLAxQKjUEwBJRZxrFhmnoY3vHMjZP6fu",
  "key32": "472ni6khbzys55VumpqADihQUoG7AzyL6C6Z3VayCs6XszJjmskwCV6ZMMVkWmnV55WqhrZfwUkNbzYoEztRJSQZ",
  "key33": "5tyWwMU6QcWhf6pW1RubmddBdizmsEn1xERYjJXwxV8TKTJChKw8yrhfL5FCwYBUumT627F8fiVrR2FCq8iQcAbH",
  "key34": "4FxLXWAv7KquHwoMdhrFPZXLQMrXN6rVrehcg13SfMkBaMdw6MW4UTpf51DGDzmJg8y2cjkE6SmeuSGN7vpQWNKt",
  "key35": "27KpbDAbFJwvh8796gVrwnQTUQ8oePxZgzZkvE2Bk8aHMcWUGogJBmUNWUKD1Ks9X8k449xuArKXtpFcLfuigLFg",
  "key36": "2sscHFG3tLqD3xUtd1ugxp47CKrvv7jJpWUW5TC5SsbXZYTNE3eoAbCh2maidJE5jxZyXFy2uxjjPajrbtBnsy1z",
  "key37": "2ZzbVACwLty2p8XqMWSqmEVH65cbZEB7gyr6hGthqFt3EHbQnaix194vbedAPA4rnThktnbgaZA62FSQuKzTJdWi"
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
