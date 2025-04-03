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
    "3gUSxweFwWkwMDw2Ynm6oeVTGtW41w7ABCtsApEjcg18vmciS6R1NHZajBwvYwKxSfdzx4csbrkQ8hHguct5B33s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rf8UG2A3AY5yJKttYj3FhzBT7BVRqA8pNB9m5jC4VDrKGws7nwXF4tjLEJvf6JWeBHohi8KBh1KbmLcrR4QvLVo",
  "key1": "3SBYTMedgnj78avxCAjUMSMuoZnVvqKy9CbBtY7dy7xD5bSZQQfexniCiLbRbhUumf68vTc8wVkA553uDxLij4NJ",
  "key2": "29ftTQFJ8f8DWSPdST4BKJsKzdEYCrf2xiCNSbjepSXRXjWuFgihaENo6sPQkPSWjYTSVTHLN7D2G5WzVnw85RjL",
  "key3": "7JBrzrP7TCN3SKCqttzGC4nmH8NXiW8t7AqSi1WAADQNj6tcu6zs2VumnvdDWieD5vngBJHKzcAMXGzhSwPMz4u",
  "key4": "3i9Uqc4fY7d1RZLbbJyLghdmWeSpd6JaXqWrdjAcMyFxTPPecDv6ZaXxCjWuL4W9xADYUjeZsCMt2VSPou8JNkZG",
  "key5": "3PCEVcc7CYStCcfetoGFi7RdMnoHQRhFGwHyM4qRSxBMaW2yYr8qyqrYQ8NF3eLqJcXDuLeuA4e57Pa3UwwKvnAV",
  "key6": "48142QkmzRBxFPSHuFvJj8npSKr1sH4MyjTpyAZsshBF5awGnEGi29JRV4vkZxiH2bZJpdNCjSt1omuw2bxfE5wP",
  "key7": "3fZSEiVLDjcyeUtCpPMCPcwhZY3rSuy435YUcuhHqDXx97y4noub9uTSNasWA6jtBsADwiiEc9hnGztjJU4zTNb1",
  "key8": "4sXR5GucPuksfnzw2p3n4CqkBuEbgLYaSuto9KUxCGksPTuJgf2woA1Kw8xQJQNHVBcDtjLrPaKGFN3ZH26yronh",
  "key9": "bPnvNsb7LVjkgWYMx2ykwVvDpFBLeBSoiX5cqMmQzjk54txxhFrs67GaWfeFyVxSdS7TqmHoZqMRp7t13f6P5rk",
  "key10": "4egXEVqyAdGPqz24sDBxJqDW9i5gRrYxuGLDcqdKh3RW5BbXuGf5c3JQxeLebTAgXDmUxhp2CaUJJ6dHdZtXvVJZ",
  "key11": "57JnZYYKGTqdd5qKuGNktuQf7BtttrMYWggERDQzWVbvSa2GzUqNwpAm6KXvNhTHWHMWBp1vUMtmx8192MmosTCa",
  "key12": "R8HgvTQo5p9LpqxXJ6ogqf13qfvqNHV8W5G9Nkpoax7iooLxU3kkqsbiqpifnHBzHAa9DczgLnxmcsTs9ngst3L",
  "key13": "2T5Qek7fasVip2XykWqXWmAvsUz2SMzhV7fBhq1rp5PmabJP2H5FqfvE4Q5j2MUAVust4Rynqhemb18SWU4raGZG",
  "key14": "61gkSNJSBcDgZMYH8Jitwek3doxhZay1SsBPo2L2MyuAPG9BNHSndTxt3ynHdT8xiTZKtzBEFgaLhE5QtKV5nfTd",
  "key15": "Z6UwPQdktmX3uLE9TmMRYQCiUAVH69ThEYy3FMXVo5sG7uj9B6v2XKwkftTET6ixyFYWtnqDXqTFUtYRk1Go6uh",
  "key16": "584KFtxcW16W1jpCv5pgzgnX1eJKGsKhu8bvovcDTc5qkoTd3PcTtou3M5bpMxPyfDHhDB2KAukEHJifaJcCLxfj",
  "key17": "7HTBd35bcSeCwiptdw5XZjQx2jk41T2wXJGTsAwydPb6CyQK2vJMtjj985gEsBucTAgQHyqApiqbTKkm1gB64Hk",
  "key18": "b7hkWBrs8ivfNTUpDtMpXKte25ALHfhHFvgPkPurJsHZnzjTM7EyzDUkkeFQpnuYiwaEtLPY5crvbcPsHGGNPee",
  "key19": "tkixgnH6eAjKtFr1G32zPjkAu6o7ti25zLP2fz3TCrrdDh1K43u1ZwgRKx3qGuhSwCi3uxJJR3imZoBHGtcZMcN",
  "key20": "fEEwXwm1HvcfzEG8UoNGx4AM42BRHH2yoKTBvYyKjGBd65DKWcoeS6wRfYw8semXGhrPmQGehWQRumnptaLrVoS",
  "key21": "2w1Q9exv37EvtDQmoLXVZ3JKdAHAnFaLZpZ8xYFGQ6GPA2C3YuQfUuUzo7BrtVs6WTwT7pvhwugKGivw6kgk6xSR",
  "key22": "2cbAk4BH9VQNbzzgNicBTEskg1bXB4JJFofJ1PvpwPBBebfRKEpj5LC3wkWq5qHCfmqcHmJLhF5amMEV1X9239JR",
  "key23": "XoL6LZMtfD7VmBH2AniB7Do2odgmKLxpLW8dZmAFdGUp9qnAjuzhZqGcS1PVWKv9Kck7csSTydLvmTwGAMQtFgb",
  "key24": "3YfnoFqeRuqGKsw17QdCJW32TPawV94Case5Jb2MdoLSKZqmXSsogUXsABD5cucuF3rqnFH615CKU45BUH1DYWt",
  "key25": "3xXWCxfp6W9zxnLVsjMW6vo3B3jKHDuTe6MUxRqLL1bCcEZg4jiH5HD5ofPMdsx3o4kWYoUejvUyk5uNAyMoVSZZ",
  "key26": "2tFQymvNern7HkQyBazetwGYVysGEiauD2drioqAjUmp6XLmVmZrWPE7avF4fPTZj1bxpqFuMYwnjr75uyArzhuC",
  "key27": "3Wat82XyYDcBF4zhjaPhekM7svhdD1MjQXYkoHt3T8qfXrMugoCDJHiKTw9ZhDFMTpTYMZsRVDgaDJF579AJngQv",
  "key28": "3fuxvfZqKYA33cozQdt6hT7LN147Zw6KmDm3hrQSHQgRHRoQ3D1NS1v1bDCCaxLvxkJfUzdxDSKo9QFZcyAoZCfq",
  "key29": "pyAwH77v7twGjHxddvShMzdkbN6YRGNn6txTSS8nGour7MhFvvmNvC6Rr722GfmFZLPorcP1kFk6XHWueUnWxKA",
  "key30": "2khTXxWNHksXWL4uCpMTq5RiiAeyxKUeVYr6d7ufapzmpruHJoqgZD3C4stxbL8NjcoSBqSuheZJRx97KxD6nZ2y",
  "key31": "4pgVtsDostJYpa4wpynZ5hHrAgAn4BvbQR77xyBfHjHu32ggWo5SE9r96xuFhiqx1iRARivjbmHqWrVftVjammq2",
  "key32": "4G9TWfKjYJitpTpNJ9X6hDqFXuF1rfH4MZrSFgTWcFQJm676V3bPoM7wvqxYNqoZdxibF9h9y8fV6VeRA2LchCu1",
  "key33": "5dhM4YwDpAs1jdV7ZSx2SKRn3WrNZdYEM2Ksef6Y4enGF7VrmcP6ayQg7qT1tphofYeF9bv18zpdaDLQr1tbCj7N"
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
