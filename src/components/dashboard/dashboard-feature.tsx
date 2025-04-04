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
    "2eeSi5xMprurPV7vYJpyRAmgCPRVMAne4iRW978LpahfJrL5EqXoafE89Cotv5w9bERHi81LBksF4SZ4znFAPefu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h62yQYuJFNnNeGDM2QeNjJFedDcezoJLNvC5TPmUhjh5jSgNiBAAb31Adc5LaramD5E2GvhhaPXDT9FfzkYEfkX",
  "key1": "45uHFHp9DWnZrg5fq3uSA2n6cNr6XxdiAm7AbzEs7R9wFPWD2bGtPw9JvqwTJAReTascpCYoPK9AoDwKgPyx6T7W",
  "key2": "4QkE7fwn1KSj6L33CQnkWQBycJ9XPtyfXxyEPUxUgibjpZtuLs9MyJJGFtNNggK6VE6P77V7xXQbnQvSTohSzBEz",
  "key3": "G12TrEcTwmY8ZJ3YZLXQAYRW7z6uHu9rMd2ZX3PtD4HHz7XJxxaz6VFDsCAPUrbYFXS8C37m9ijpTPxXbtGRWzU",
  "key4": "4PSjv7dK1ubM3YrzSeX57mMrf7cfzb3e8soH3GfuXA7yEEJviyTjSQWhTEtjBrXhnS3LyCoMB2EzKVCwiTwfV4kH",
  "key5": "4bvmYGqXzBDaqbK4CYMLzvDVMNbEniMBS4zsH29QFGYQuWw7ThNzGPZTTLNgJLFb4gJadxJeTjSGbLxrdr1ceCJ8",
  "key6": "3Nr1kQDDipmv5Xo2iNKZig9E8BqWBedv5WoGk9ZTLvuH9daK7SnTHAbh8BdL6ot86a3PQFYTf4b7EGpC4fK16Cbv",
  "key7": "2B8cqsdobNFiaWrthMJnsrXsJSVcvU8DyhWE1Z3s7avJN1n5b2PHbPGaQVycPpyxwBbNNiYpkSo5AaUEeh7nHKuM",
  "key8": "34aQpHvb4h7HxX2UbHfUyY8ZbmYZNUphiFDz7io3hZm4ipr6xPdv83tebGjqQqzqAqQeGDb1h6ovegaSFGj1LSeW",
  "key9": "L58yZrEEat8z4V4gcSBS5SYoUi8FiCHT8iWG69fY2C1oRtQRv84x2PZX5yZ9E6v7YmFqodRqn1FFAycbKWghKVU",
  "key10": "4PbW8wFRUXyUCmpaT6ajiB1KrFJFEXczQcBDnyC46hxyfs34yHgyMCYCxaMrSqkc2PDzHNscuDaMrJDwZ99tpN49",
  "key11": "2zRNHZpwJBf1XYq6EhnXRY5PWvByEqj6ZSZYhwPCxDBjzZNCdy2EtEFBq9vVgYHZgV92VsGHzDLckUQHyy3ABrLd",
  "key12": "5ya2cDMpsQAwebZqNbntw43EhntqDptQ2pKuzqumgShLM67rq8od1qhwLDCP5grgR2ZdTuChWHp5Ew7sfVZHTcQD",
  "key13": "2zoHJgRwNsPew6wEmS8698ztTCzB7nv6TGSKuKsZckvKhV8vNByZPhfYsHmdTLVotwWyX8Cdc4LgGmYVhZFVZ3hu",
  "key14": "5vdJBwnaFzcFeQRbnqUi9sCzSB2B7VCfj8vsf7UkewENVhKduSwGmi6f36ax7Zkri7RNYGnkLdCiQ4fvYcKsS899",
  "key15": "5ke95hLKA3GndxB4RwSSiXiRBW74taZhbb1xXtUYfwxa5r2U7aBwzHzwPxphy5qF12nEojK5YtbPKLKVu23TvstL",
  "key16": "6WHepZ5zbGQwnrFLfgNeA7b5pYMfuLcgUg2DoHNwDZq7rkj2Ps5F5FYK7C62W6D9xswLJ8q9JoGaAxMqFpcdb7o",
  "key17": "WyUiiWguTru6jwzugUa81J4Z7HKyvF8HGJAR2CcFE9JChB2yVdVYMKQJhe1NuHPjRNj7n5bvv5mNnvQuhtutnsY",
  "key18": "49xnkQMpi6ZTyQnH8dYUBt5w64ZHRvG8bXjAa4a7BpBBHeQ3am9KAdqx61wGgXaYNX3LgL88J6arHqTHFgo8agYa",
  "key19": "5gQskduT2WHpWcLVxxZK9neR8szX2BbMP99S27LoTfML5gvNY3sShAsCTyZ2TLFGuGVWkQcuyRz4dD8eP4LZEA7z",
  "key20": "4oVwSE8AmaE7NS29D6s2Z7CDV1oRdLrPpL2oKXdzUzHDQzgefHS5ZtHrcuSBedC8DLYgkQqHVuwxtBEhdf36953F",
  "key21": "4ifcLrzXJAYGqde4PMGoBpxonGgXDvsgkQ14YGtqec8qgU5T27dkNht41W3Z6oq8ikrf6S8XDhMq42PhMqGetWQw",
  "key22": "4iAoN6y1kwRmCXgZ8htBkeZPjo8u8WgAT7JFjnuX7py3opr8jweydGKxUN4nxA4fz4UL9pqfJMqJeJ9iyhSjDbSF",
  "key23": "P3WQCN7acezeHakw84sQrM3Xfpc3vp8kKsaNriWQohrnLPvRuVeUKqZC5MeY47qjrjABCWTuftYHznkHe4WmMDC",
  "key24": "2tyHRQd54CbAWY9h8PK4KvtnUrnPT9joyJA2gUK5NTrZnkp2Pa1g2qfz8Fru9dD3fqbigJxtS6QHBaWMQ8U9EZCy",
  "key25": "8BEwKuCCYjrWXmwazmRmja7e8nZzx3hkPypVSD6UVybvBGm4Xksz9ieHgBo3g9vCjTbseGAbHufZojpbMHzZjrL",
  "key26": "3UwmcAqLDoBWhUxYvuCLqTUhDwvzMuun2uDW1vF8JrZnimZcQzvSGoaRa4W9bEYjGJdPJAcHQarawFeqvX7ULgTt",
  "key27": "3KUFLYMBytjLcVsE8sF3GgY8GEi1t5jzMZKforCKSutSTxXYGAKihidDA3vFtPuHtMoZQNj2tjHBqC83ABc3P8hX",
  "key28": "33hCPut747buzjSuPQakWvrMXHEtD95mjfZD1FJFPfuipj3zP4UFZgeCLVEUGJ93xJCYTBudkrp1f9DoKTbhKJ7h",
  "key29": "4J3272wUQxwQFhrmFDY37LUfiutavd4hypCHMrWDGxZopeZfTfkXiS8ECsaE3uRWZboGPzEQVJQ9c1sVWf1ofH36"
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
