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
    "5XHTm6wbqqFjLr5M6gjRVe8u1V2MbfzgBT1EWMGoKMTMVQJ6yxSe81o5SidvRYJD1ChnqiCaEvr6hXrVertRFyNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkRmtPqfGMZbzgfh4PpMpWaU6pyKAh4RcG8FSwUBqiXUwd3uFJQLkA1Ehz7fLM2ZbdmKQPVZBL6RrZsEXK7Goh7",
  "key1": "8frJh4ZbRATzCqqGkZa1EPxQTfFe2Py2xHKBt9ECG6FSQ8rFyURN9GUKgjKS4CdqMdW7gCDXFwQDgoYL7QvXmfc",
  "key2": "553XdBREDgRjWWwA6kLizvw7365uEaBqhKdBPpnhTJFm1bQ1533RBHuqDLNsFUUEZTDYQXAcXRZaXNpiqeFCRrMh",
  "key3": "5U9qXZbKUvEdxi6DtU1rGqyQaUJ8C6G3nK79FJWib2wWNF8DFdbFGXKjegDke2NHAFttui5fGTj6z8aQ1arhVsai",
  "key4": "3bGTp1qdNAhneV1TnqDqpy2kzqaiK7hzxmxN7sbQn7WzWt6MsquSmLZuu5vCoMNskCVe4dQkKNcLHPX27uRGE33N",
  "key5": "3kqs1ytZTYXj23D9UbeaYfBy4xf6VXVTDJ4VArBdNhL62PAurjJqrRp3ZT92aRfdh1sFnaR6f68usfNhSme6EigM",
  "key6": "2XaqiWxAfrmrwbsWuNSD8A1TzpSbhM7NZkGyt4Sm5FUz4f2x98QvKmzYRGtv1oJxtPh1ULr167aRgtoWhYx4nfNc",
  "key7": "26q56bgGmXqLD5g3MLEhSQ2wZgneFC75uFbKcFGAeK4oEm7pfvd4UUuwnJZWLZGy8q6geRoFxAF1qQnA83DzBTUB",
  "key8": "PR7yzo8GoSNYAPwL67y7cwhncu4QQE1NTQLx48y5uBLE1Gh8qW1ZYaTqEi7vaMEpoJ5GXhUPoc79dSmwzM1EsZN",
  "key9": "8UMXGE23VysmXfdNRZ3GhLLV9Gt83793V4HcSXhMaCmkCYqZsNDDZdKtpXJhbnDCktJ4GwgpSSvcKt3PJJZFdxY",
  "key10": "3UBgCWstwKhhN8eztsQGmcVxC5FbwferHGQqEGLDUviRdyndHGGbMBp4C8ouV2sThowy935kydeZWbFWhuKdQWdX",
  "key11": "22C1CyHR2Qond1i4Kw2kFk2DHgV289khz4DWHULzoMd7DChkKt2nfXspYd8fjbqa68xCUnGWHCoC9JaWXA4L3tec",
  "key12": "33KuEoTCmvQZvFTdm3vWLoFn2WVjhAuseXxGcs9cDmwmPJEw5r5Qx5xPjTnMEqwM8NR83SUr5qbjgTzgDShQzXwC",
  "key13": "57AdTZj829UxMZmUzat2CQYPm9GZJYvnvFWTYLe3wJfTpzHLJFqH7XQsVh9dS1WrZ6V8pgTooLTKwkQdKV63159f",
  "key14": "4gGJu3djTb2BW1KLhFvsGKHRyfVH2zxXFTK1xwE8k8Uqb63vs8fcaVEjNA7AMU5v4ySgkccwEtEVoqEehwHS5jhV",
  "key15": "4vWa2zZsqvPv6k7L4rQXHdE5PwQUUKEDVuZHtLcqX9bxvNp1ypjzdE3vWDpf9ViD3Z94FVNbZ3YDCbTpX3gp3Zsi",
  "key16": "67grQtnLfShePmEbGyQpD4h1QW5BnD5McYfFoMALrXXVF5n6z6UNeYmw2NEdHWnocPqRDp1ES5jVLbHaEy9R2rTj",
  "key17": "v7KvbqLCAFaVHoZ2fa7ogyrnPVVQZBfVMdD2kod7MjAghowYzSbnwtdb1yuBfRgTvZvBxGiR8jZ6hJ5JesyaGZb",
  "key18": "P9ZTHoA9Pkc8Y3dv7BC6W2PfFsHpMNwFaa1aGksD9MJpE7WMg4s6U2ZR5s1vRSxFv4E8nCjUwPcmQtfZUFLEFhD",
  "key19": "5X9hoxynp3dibe8T3vVxa659Jf66bf3FdQ2Uk2cieyrSjBLkCFnSrhzoQ8FXR6n8cDfetrjNyBssWDpZsp1zUDk9",
  "key20": "g2HJ7ACEEHtpa5M5U1B3a4q1NFVsJHNVxT1TY4HAKyx5ysX4yASL9o9bM5L67DnVduaAVG2ERRUpKF9jN311pr2",
  "key21": "54RMZpYLmDzp6LYvdFMM7EcBXzZJxTdpY5TdPENvBLSt8FKFPM4AhCCZmMC3kJccoPDrgvwk87kiJDBtV48pErSn",
  "key22": "2S6Go3j7Hhf4M8XPNBsSquqTjtmBp2bWcxs2cXaVTyrMTdmwuxHRfmcZd1mJckYy5an4wafETuJWrgUmjSPQ643z",
  "key23": "5uPofBKJaDJ8KFEb46zFaXzAnDpbF8SSmKWa4tAVqc5TZ6JYXgfGcFoa2dt1GCDv2Zi9x8z7P8nMTTDr78ptJ2Ju",
  "key24": "dkJbB1zc4fwM5oerRzFRdkeCyjytc6m3858pPnbM7WQwxXkgVfHYSUmKLMbq97fWD6EwSiVt5zrTyebsFwwS2tG",
  "key25": "1GdVxHW6r5rHGvmoGS6564oPdmJe1YYYUHGT1xAmpkoQUsRsaFh6hjdGfrwNNrQWVTfoU12uZFestGmuiwcyQgm",
  "key26": "37Nfe3hYb4L1U8w3oqUxSSEaYHkXNB5WmgSmW2kWhujaz6DMqTJusd9bZPVQC8ZmzhZ1d9spb9wdcoagGuaZeESf",
  "key27": "4L5v4LuFv8eyTQZn4KFnYmPJpoKZX47yyx7oQebDgDWHfjr4tXMLy66HnRAqWDh5f7DGCEyvCSxn3wSZQuSg8BdY",
  "key28": "5jYtWEevVyz5SZbuwqN7G5r9Pgc4AXrVKW1Jwt8ipn7t5Si1oBw2dfDoQMSSLU11u1HCL2ZWDbJi5qxYBpftV4NK",
  "key29": "P1XCtP9NLtwcRG6Skhikk3GnncQG6qVD2kvLiM82A9RGFfvHr5Wpxn7JgLdJVqYMKtkxGERvcMbtWwk2s8iBAMB",
  "key30": "28LNqYXZSn6nQj9uLy1bK2GzER5PKscBH7enzKcF1ckS9puDDE3RkxyLKRobUBkrKVCSwHxgWxqGW7mFx9HDr83B"
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
