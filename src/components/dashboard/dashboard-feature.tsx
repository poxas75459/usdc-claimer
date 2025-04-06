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
    "5F9Mb9g7Re25Ht3H3i85NUi7Sh8n7igScQqyf4s3NoWvyjpJxJxvtpF27XPgvmHwQigerGWyWst4MGCfZSszr63F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62V8kbL6ZdfMh5P9BJXcBbUQAHrmf6u53vX49XD2J35dcoRvSgAGTuUepej5bKGBFWgX8QBNeHFkK56wv6fMydhf",
  "key1": "4TtCLvk6T5NLSFpxLZVWNLUwi19S7nnzbxTWHNWjxdNyKgNSJ1ttSXdHKyLhLUEaCh33wnxaRyxueVVZa7ua7npg",
  "key2": "2GZWZFgFFTGhWxHqpjkcdv3JE18tEkWxumjNUb5vuUjJhPTTNa1EQ8qqXNfswMFuyWi46s9tMFuYiVWbb4ViiUkf",
  "key3": "224rjCoWJAq2tDcv4qyjVDcXSpivZvJCN4GzRgjNvpf9dcTGc6LP6Z1bAMBgCGn14zD6dBD7TFNbJh3vECN29TqN",
  "key4": "4oVzjTJJw9v8WmF93Gkzoioyuw7yrVoPBGbdCWKeiLeX58Zs7XD7Q6PGNLCbDJpztSZPNYLV3LgQPyQHc6ALpiUQ",
  "key5": "4CqSfDFXFJGd6NJyCw8GZ3tT8Hjss6DAVBQzyMt9LQH3xaSPrEkVrUwmcjKfNw5R3jnPMR6iu9pVFKUGArQJWPD",
  "key6": "3i1XQ3nS7nTQJvox3ABfkDSAtPYhdhdBdAMnAJfyHN8KfkmBL8Rr1Y5jSkY45QSSYGZxcUEqgzAj8UrAyLJ8zehY",
  "key7": "2inRL9VWd5kGK5nEftMfLJkTcpahbsGEzck1vHuctPTRWDwYZBEpyMkS7krKi39qGQVgWUsxPwrkeMScVmgYmybG",
  "key8": "5pPanBzrz6BjnwcDCHKmsbJ3gi7W8MUosY6kAhdzQjFZRMPjVK5waDKYoHSQxshFFdpzrfBvtzkQott4nu8NfSPi",
  "key9": "3etfNMHPFHduQ9dSxAk8vTNPuBVXhXvAZyvqv7SaGycv14ENRT9HVThz5XFfCpXd4EB4LZdNQo9wdK891CJRkm1E",
  "key10": "5F2dwToPZHrHFH2N71VLaR7dTCp15ZTvhSnpJ6eaHMKLYEdWrUgH7CEkz1wV9qvFyrTGFFBoU2GYNuLjW7CZe3Vp",
  "key11": "2YhevLZonDBdoA6yWNXNt8oABALHYDit3RzaCss1FQk9NyXkcphDaBSpER9KZ47K24JJk2pT7ZYGxs96VcmpainS",
  "key12": "J8TpswPMbRGLkFN4LAvrVN9vTjAe8DpwTHThWLxAxGEzoz1LuwbuWhCsufttnisyc8HCFev45X9FZBreDNs24zq",
  "key13": "ouHKYsnSokYdBcPu97sHAx6mwH191AUjJUpbVFVh7EYfKhtHec91fVNn4BKpDXQSZqcaYS1nqep4p1wcbpXCUk3",
  "key14": "4DZB7qoEFicpSRUp2P8KyE67ZPSb4rTSGjHdUFRGTxGjoTGzZtVQEVLpXBeuy2s19Lem9nTJepVgQn1WmiRUhrjX",
  "key15": "4JJVKXnKGbh4Gj6S3vejRpvjDKk1k5TbRzZkA6oo9RSsrQ9rrjhQyJA2gUTQBxjWGXpW4vJt8JXgPpvjoDnQisbh",
  "key16": "39gsRWyy97YL9wsZfy8fAzxRM3Ss1uZtuxL9BCrz9TRm7MNU7jR5x2yqxi2GPCoj7V4XMtuo6QrQP4u6Wp65Up2",
  "key17": "4aqhAHXtrikGrddjiYUwdjtfsh1DpKwz8zKzbrtMGVjbtq4YdHXnxA2D1T75eVSNF3AbJGUuUenkYbdAMXGJThVp",
  "key18": "4tzohxdM2ZyWkQydRsk34JxJvLRNj6WRkjUrsxWNjQBVMHYQk2iNKBP4f5aYXmyQiyanxDNbX3gdgBxjzeZXUXtP",
  "key19": "3qqYdzpYRihAGb49Wnhm5eAy4QtynFUkNcCEMkyWQkEEn2nJUMWnkdH5Se9TcAmM8hSSJbBxYJe95TdL4X8XCtKx",
  "key20": "56ix6Gys16nybp8Kw7392C5vA9DgHj9BhTYr6bm2APHPqUmkTbtL2B8jZUg2JzX2n1w1b5MLC3UmT4skdH1K957g",
  "key21": "5pwHGK8T4i8xyzqAt1HH9MHkzsBH1DYbNksjmMgbpQzMpCWe6y7ARtnMouQZ8993WgjujHeCnY39GG3M1kad8AbE",
  "key22": "oBS6ZJRAuqaXjtkhAH3wkFY7aDSgwLrBRbpAVNAJtRG28G2gb9cpy4ufHiyyoApjgj5hkNzr6JDKNFHuqqTkahn",
  "key23": "2MDgiLHrsQwhjEMJnrTce31j2XjbCxcynURq3bdjh3GNHUmvr4wyLoAGPp9vdokcdtXWRJraVU4sU7XbLYekTeBe",
  "key24": "vQpWEAApBtwjpsYtkQ7bnVdqJQzTdCdrFNYHskAzJtwSwoTsHU37asfQnbtyesB7VkvYioNWqC3w9EMZHxGfG8C",
  "key25": "4kV6kW9aakFUSs3fGKmD6qibmQJnUskp31EyzVeKADtmsE9CojrqQ9LDft3rb9D9STNYygEVZSCRfxgdHU1dkj3d",
  "key26": "Uoijkvv4BnEfPAQbhdKHTXhF2QAJvutSKb3iqxR39D2ZLg4gCq2Y88L519EECMAQW3uJ4gvfUpcAnBoHK6gpeYA",
  "key27": "ccPuNKxAWRBhA7eWqwexrWRX8zDSPfo7B56j3wsZ2WRVWAgV49CCJ8yvYpWBF4Nz4q8b1SndFtb1hRY7SmjvkYC",
  "key28": "5SbeDSj3Ye3X2rPf4fMMpsUdjArKLBjGyT56pTDarMuupkCHnJhUus91LcnT7wcvSCJxe5tkBSGhu6vs1X7W62cs",
  "key29": "59dbtHDbyAXyNad8uk8xcapQQhTzBkCPdweSXDgJbWBR5rv8rPoPGfxYxrXnpyPPN17j2tyNB5XAnx7xUDaYC1RG",
  "key30": "7ouM3HQwxXdyeKpPBoxPoyirRpj9ZNLWFQv4CAeAW8eZCmz6Z7c1VYugnxnHWkGsF14Ea1Qjk5b2qBhhZVpRF6P",
  "key31": "4Qu62suysUoJDyQJTGCFoyCWsa8nAe9nm8VStnYNr3swTLescttPGqQDrLxXEWaFm4XaH7SDmiYxUvivQRRHnKYu"
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
