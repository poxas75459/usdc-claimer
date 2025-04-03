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
    "5SSWW6rRvHxxNh3bczMmK6A15queHWN4QdPbpRegY8NDAkQrHxLVbi9jioVLkBQN3FcuWG3VECPML7C2QqrJfwzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HDC38hgZnafihib4U5w5JL9aDVGmj1p3QFzUKkHFgkyxnkkJ33mGbj27myzc7AAQG8m4NTgBz8u8TnfNnMvHRky",
  "key1": "5Sj9NXcvmvBovjRSwCLxzPQoSHfpX2pcfs4S2fL1rY7nbiBUYjbGAD9KEdPiMjNfwyoGhTzGoggCTannhsfdCPKU",
  "key2": "aZpkFcZZiEV1RGrnHGFNHd6K5BHsyvbH6Hr9LHmUu5L29ZkAjhXbsd4qG1uJYpvhMcDrNmvznwbRtPooWJ82ziD",
  "key3": "2LJZQJUhe6fnk8Nwb12F2TQTF74er8pCQAqmBTyvgsajbu1A4sToVru8pwMNppciT6tDp5VqUZ3xjaNNzrZCEtJt",
  "key4": "35kW3JpWrxNgoJV6VRMUHJDZqDNvYp2GBkY6EcvkJGCuBZr8ohqR7jBeWHWPMGbZwNVYi9HAj3UYnqdrUBpPpdkR",
  "key5": "2AggE4DvbGvWsQCpQ7MqKUL6AJAvDxENdXnhTyXsN76RntqtmeWjY5BeWbFJyMg9n2UAYwNvqjRVfF8b71pxUEjd",
  "key6": "4NNfRTBz3z2YhQeFYJryscc6QepbYwbmsDUrCj7RQGs8WVdzA8xTQaG3jWQniv91yArinaSCouwpnpRVkSN7VK5c",
  "key7": "pwTtTRC1oBmYsLWiAhkaQ443P9qRTbmQ1yonLYDvi5ALrc6G1dGaTtM3GPBCeaz99sRCTsYdumiKwG5PqeQZ8B1",
  "key8": "6S5CEvSMN4HQYJ5EAVBuLQS1csGLUvddbvcF42pmxDJ9mH2yWTNrEaHkPWpV7SMgxe1szrLbWXhUNR1gedzSEkt",
  "key9": "2qseCzxFt6S3FpzSpMnrB5jr24DSsQMk84xyVnzbup5GdLtMn9jj4FFCCVFrA45mn7fGqqxbWrDF9i9QB4x1qYRi",
  "key10": "51q1rVjkyN6t9fVrHtyrWMZhahgYy7YL2nUL3gjiw5fVwaCe43M6o1uJvsMtnh6hYbnb268DusmGYPFZMwNA75Nd",
  "key11": "2sidHhhzytmKGYA62duYNcQYzisc3yuRdqjk4eWfpZXxEYaRM1NErCki7CUnNSpbiLSisjMdWjZeRRdr4YmbZfvR",
  "key12": "4QwX1Zy1yLx9WmqU6372KvNuStSBRPTHNfzoYHAoPtyQZzT1kz5Tegi9YgvtKKgaJoxVvUE7p5XFb6DkcKjdVhkX",
  "key13": "JfvezhzDMSWnihJNKg1PznqpPCv7v5xjBbsePDabJTjhA6RqM1n2GFfMaSx3U4LzLGzR4XVgN74PBpLM73A9eak",
  "key14": "3kn8TKydbzoSjZnaxF9CmpwtAT1TiEnexLg9gzNT16vwogZvEdaHFu8PdytPCRooBCVGqCgThpfrMZKx2VGrhEpG",
  "key15": "43GghUrD5LarFF41w83eJ1E9XweUfSQgjfU4uoKmmcQ9sjtH9BLDMy5K6eGJqQY28xgGtp1ufKkfCHjpDDN2Q34S",
  "key16": "4Uzyuyqj3Uz4JkVpimiyMoQmXP3cWpyfoTxRtWctxvrM8F5LMrzDu9t85Pe6qs4BHy7vRkrc5wpWBnWdxV2o8RuN",
  "key17": "NqesTwYkghHyfS7HpbfmAejWVw3upYJxQA14MKHwKGUP5pXoLV9wDyGWZK5W5BfeUHENmtztfyH4BgSCHd2ZheE",
  "key18": "2wu59Ceu9gr3DYJ41GHB9ZCGC2LMQNdCxsSDZtPYs6e7JEx5D5JgdMHHAtdh9kQgomznn1sNuit5gLgWu2kKxUof",
  "key19": "UwcPiHqtFcaaVgg3iTXZkw7vZF8cueRWbUhWwfMSTufN2qeywQ4mvwjofQvW5SmZWrF5tCysizYFFbbhie8SFYS",
  "key20": "rfoeFF1EpBidwRp9yrHtxh1SWtzA4SybXRd3AHAacfyqw4jUmq4LY2zUMam2VQWd6TAaCKrYg49pnbu2sZP6YMe",
  "key21": "4yE9RBqQbLdHHaQtEyVdeAQ8Z7qPC4iE97vRRhgtAHye2fwLprnRXfi111sixaSK9XtFzAyopbuGdSqk8CajgBa8",
  "key22": "27nBAJrTwuqa5B4uMPvhWBBLzkVoSfAL6eLLZ9yU5cDih1pgUsuMUTyj4NtzpPSUZKUFt5F1rarFXz8vqfxZdmKd",
  "key23": "62JvGg6MdFJJGEnC9eVvKfJcwT7fYXjYYF4goEQCHm6fiUEbBkzkSVV8FuP5HgwcZK1hskk4b55QAZ2P4aTRwQdx",
  "key24": "475zGNvagSbuqXeKGGVS6TNoVhEep22xZyM43p9gdfr4SVagNPVFGSn5912LAeaAQRX4KSSgnev4hdzdjV7USCU9",
  "key25": "3KpXjd4HWR1pH1iTtUjPYDwqc4oUj1hAzEbU7WFZqaGYmpxLLq2n3faWnVr9YUGMmdYq1jy4VehWsCxQhStWAPiM",
  "key26": "2nLeBtjjBP65vBbRQuen5LPYDZtj3hPJc6FTHiEk8MkYy2t81T9tmiMZWhMVVQnSYvsgsKhNtJ6Ntet4JSXA6akP",
  "key27": "5fM5SLwH3Co7EpvYf6rUoJSZUaACYcHtV5ib4z6rtJNLqDqq9eP9tLLrxzxMo3xknsivfPW8e5AP2gAiY8B2he4s",
  "key28": "4WGKsuDth76GA4fQXa3KTt9kFUow6e98q53E989kjEb9RPCNW75KZZPSqcpsdmXg2xFeJqfwxKD2taxgmgMUaXLo",
  "key29": "4rEp8Lz4iFFF3adkw82URwqXUyyaHEBsxqZDgrYaiPwQDcdZzHqatKysmqZ7kUXhAmWZr7RNqC6MaEaSxLhNwYCh",
  "key30": "2d8mDS76a8WghHASkkmAUXFEQM3hcaTH5N5CB6Kj3X2hFoZMnTj6zQ9xdcG6x6H7uPoDwisDZ3uYQisaRbf5F8zL",
  "key31": "42A8steoQHBaVA5ZtPmbWQEgET2NF3r98AMACRt7P3gMSCPbjPFoteQxVXUeTxHFB2nXzTeFazXv71UFeETAg5KX",
  "key32": "2y57GfLPTrvgCoxDtzACeeZTisPnv8W2JaYGubQnqdnLFFutzj6UroXUepzeBkmHibkZ5SvkgiuLiUwa8Y4jcpGa",
  "key33": "3g1DrwAy9762H4RHT9MxpZd1NQHwKrUVpvb77Xg8U3s7GT3yWwQa5N3bKvRA99stTUG7iajdzjqG5F6PVjRAUBJq",
  "key34": "5T9w2YKUeR8KB8cqFUx3iyv9q7bJtk7BejMhKeAFhiQAJAqXK1bvsmcwP7dBmmvRxrQPSHjigp8ZRSUFwzedJ6m7",
  "key35": "rqvLyMcJCNXQfNvG9FrpJ7hUHiYTnnXKH5uTXTqyCUsz2PqD2Wet5PyagGN1e6ma93ZEGk6qUiu7ese5AAE3t4K",
  "key36": "4y3nsoHF6TGthUkCX6MHpn24tqZjohyrfAXkfGDvvBYSampw4svuw1vzb6Ru88USPvEeC6H7einxmQvqL7BekFmY",
  "key37": "4gzPTNP6AGaNpSAYSgQKGUQn2mSi1YJteWGpQU1r9WzYGSfxSY1LQx4utnLr44EzdcyepaJES7LbKVViYcFY6Dr6",
  "key38": "4fjfv5kEL7ap2gmKxLUoi3FCp4oV53Vu6pjR3XXyHZKbcYAsW2LmeouiJzfoor6ndPJ5gFYm8ZDBvQ6a7ifJy7fd",
  "key39": "4gCjM2ZtkZmKjvc3pCoSPQDyXbrmkgfu2vPkhg5sGc8eKuRgAfgDrhyC2tHGuFdWdRGpEmWhrYKsSrq48rw77Zd4",
  "key40": "5qstCEgAnLqdak8MiLjT3hztHHFcdqPY6RmPJ9Wijz432dztqPZv8akM6kvJKdmceW7dNEuD8oX2CTBHThi59SMM",
  "key41": "29fe2gcrRyovW6G5LvXfxnibpKDF7mW4wvRUi64RzdH36xQ2jc9Cz1HzEUG2ur549GCuhTvGj8nrqyJ5EkGjFq8i"
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
