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
    "4vN2CXx77ErSS91U713AnnYToyYqonVisC6g3nU6bf8qtrNbwvsnr47hJTHeXjXbgEtgWoUuLcFJD5bAoozhrGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QTjKEozcyncMBYS4KC4VgYqV59qU444xKEGtHocfLYkd1ahhgx9AyK2MSZLvQacfgn9B6WLtGRdeTBYhAsQmjNC",
  "key1": "3NvbkE1cfMmxNubFUyCad2Fz6sd7bVzKSyypFyUt9YbFkTgQEvjn7oZ5FqWuQz3XV1jqW93FDKcr63whdGPReFKE",
  "key2": "5GLNnaWjXjcGqGMJHNd3AacMqA4yCzuKWHfnoXn7LsDnZhyjT6A9LuZcWYSHGaTW6AR3BFsJWDL9hRrWYPkafck7",
  "key3": "3uAt1PfWEotyVeF5VoXnbFEFs4yZN7VkFyVkP8kFhhH1aV11HrDiwL9hLPL1bJiy8WC2RSAnmov57vbxgAdAXvYP",
  "key4": "5dpjxJGnewxxZv2XaTAZxHD3A2QPb9SHuZg7WSiL3Ye27BnX99Uv4UgP8buhtk8YAUwzCxeYcEZJwuAdm6qavxuK",
  "key5": "2zF5RNRT25GMm7BdG1deSb1PpYFUhXzgmz35GXPxQmRmoR6BAiBMUAcaEucnVqMetsbfbDE7Vzuska3EvoCVNere",
  "key6": "3hrUHU9yY3dHwnorRdm8bvTNnZBdvS3pyJWVqNW1YKmqSGPDPFR4wpRq4PS3A8tBbNFSPYZzkCuv1Na5dc63y9Lz",
  "key7": "4rCbnukgjgCA4CYTzX1Wk9jHKE5ZmKvyYrBfB7feWbBNbM428RFcXobqfKki2CtYD7UBGfLZdBbRtDrtSsJRaghu",
  "key8": "7ZqT2bjXxd2cqqfFDsxcucEdx4eshJExWu1XYGZafM3wP8KYG8D6Fm17SoWj3EJKKb3NjHDEa8aawTwCMTqtEhg",
  "key9": "4uyMg3nsJTxsZ5ezbysYsMScnawLTgx7Thb8H9Wz3dRGCA6C3Z5xNV21jH1AD9YJmgJBeKeaLNrQmg3nAh189fhy",
  "key10": "GW8BAQKZDzgrbrpvW6aSQyuY6pYQj1HjYmHDncvfpYwPPQV1mWGo3uxf2GrRwZPp2YSHNPR4B2DVNSbVh1nLJeD",
  "key11": "533NwhZ8SorSG8w57VWRdkVBwXKNytRHUHGM4nUqtxQXoXCt6H4DY8qTVLxMGQQARQCdGKxH6fTBGdBtfPTApvto",
  "key12": "5iuYYMVS5GrrqcvPhhPBmFaTGa5xWZW1P6HTy8phfjsp6RXQt4tvghiRxP2AUsLor94HtPbdZSi3yqXJeaWLJYNd",
  "key13": "5iULTVnvRnMeatUbhuC9WBEV3CeGd12xAaHGXY1zCTyUnTbpBqWFuvwSs4TrFGYBkNkSeD4LrKrvztrVrfzNkhEp",
  "key14": "2j14oggJv3Ywdeq1HAKdaPgHNNAyqZTkdxSRbbqnuE3pjD5Dcr8kHr9nsrEnrLmwQHnL1vQAaDC8eemvtgycnHrP",
  "key15": "N4CkQMxhNVQkbSUPneLpvnfzvsd5d3ySGDPTtBRDvxaxxov7tob3C3kGuC4S3qhTdtjvwQdLRQPPH9BTfNhcDA6",
  "key16": "acRCcHPZQzQPQuA6RFiJhHuAct7uQdzvMGR5Kj4j1kvSmn26PDnWErcKuWv1yWLtV8vjPPFba6vQZbQB3NJTB3b",
  "key17": "3vass6D217w8fbXETL8dPhkUWoq89ve4D3vsYiJCQW1AJyjNBs7ZupjDijDVWDp3QYAFGNAityVnYsTpoJSBDvCd",
  "key18": "3sDvUxGNLGsuzXe8eBYJn4YhfoJLrZjN1MxbyjNbBMAPkHjng8MDRxnZkrYjfhqBktPDPqUZi4FDCuzstr8kZnLc",
  "key19": "2TAzzpYg4yovojESyEtUqyEWDRypGji6epqKsLZTQpiVBRgEApJ2YKX14T8Wb8Mh4p5bzyiUJP7yKRrM3ETiZ2SK",
  "key20": "39SRPDCAvAo2FBL85qrDikygpaZPAfvh1eUcm7HmQuUPT9cnacnst6tUnPVFRpzYTx4ugTDifAa6PK1CEhELKEUK",
  "key21": "5EimpSo8sTrDopqF5rgjzjhmC4nCaZiEmBpwgMGKciwDSpByiStZZE64riCeFAxee7t7ohnuY5n49gBqhx5Xif5t",
  "key22": "373WzCEkA31UzP343YxV75uZHZxwotUco16uqni5eVc3s19v6q71tzNhwVSxJ9ZATPYZqcDGtbwcE7umjyk9fswB",
  "key23": "3Y6DqYPVUychWf2EEM754CeazjFc6z9VDRfq5r8KW1p8Yy2196T11whq8G8ynCh4wsZPXJXXsfhxcbjhjk1SKdR1",
  "key24": "KpuTRDW9nL6KmtvXqjizLVHN39hSdHZxXR1f5ZSwij5MvKrseDLSbB3KjqFcbpqPz1WUUj2sL2soDLBGttcB5HT",
  "key25": "buoPTrXP8tJGG5ztZHtcwW1gusjDCZSDeMWgrhoMfFL2vHVignnfpjMzfg2orVkKDwXvD6pEvvsBRvQ7JnRw6V1",
  "key26": "56gD7XT9nCeae8kkYBBC5TkNjXmNU2n3bgQeta4WQbgJMGQJ6mkZ68NGByc8Mq4pK6PXwUwQjwHWA1f1uwBk66nh",
  "key27": "VHGAPNggKzJjPssuJk7oFQdt3mh6z3etnC3UREvBBz1cobfGrRFbnAPq9m5tdtWn7zd3qENfSESapHR68hNRWH4",
  "key28": "rE5ZVRQjTp1UuPmugMaCT3xUD299KnzzosnSm1rzXjRXHxJfTpKGDGPg1E6ght8vw31xfcRE1B5GLhhi7wf43zP",
  "key29": "3Vt789uUgTcjFkxDA2tL1dT3fvfpKyUkQLxSt3eX3feZKZvRi8hKSQEPrSDsyDRWoAFdLQZKkkNn3jUZCpwN2kQ8",
  "key30": "4ik9mEUX1xVLgSraUK1pewLTLxratkkoYPmi3zY85mkRexSSWmBDTB7z3Wgp5XPqN4mFGvHUiE18jnHDMkwPdv5M",
  "key31": "4ptRnEd3WrZebu9gCfwtBeSdb4ZQhHhyVfXz98nsdHni1G5XxWwy4GKVFV1vADB6r3hPsfUNiUAKRwnQCaZw3PMP",
  "key32": "w3WyogqBeAUTLyUVNo5wC2NPoHJpMRU9PW1wNTsumwaeujLo1sg3CxZK3ASRtCZttTmrXvPTML4YeZUgcD9UyN8",
  "key33": "3KaEDJSe6iokk7GmQ2pwNgCaafjSF6aboK7y9GY8Nrjmc6fkBixpT9Y41a6RqfNxqvyWvzsYVPaCrMpSPmmCjLKj",
  "key34": "38632XtQea88iAwKWwsUBtdydnT2adhgMkd2P1pFj4C9LwVaZTgvnZmhd39NNK1DvGbKpmprZvjVc28Lu4p1FZBP",
  "key35": "56SLw1ioehubkRM73pWWXBH7vGc8XoZYNe3AxqZjdSfJN4jzaE5UCXwm6ZaCzLBEFqyCpZ4Jyb46h7EZQXFpFxen",
  "key36": "41m7wvkm14YgzhNefwj2gny7dL7NbQJexDF87vxPTuncan4kvhRniiQSbnWwJVejsmywzzT9MVkiidZZTexnDz5m"
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
