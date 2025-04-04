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
    "5xi8kNahmQcbNK7YZfPRE6pEivD7mPNUGsaw56yRgdU1nDTgSbQ9gGZH46YvZgmBBCvxkzPQDbeV1z6JRtkvrCtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d6gz6WbuGPrddGiBzDvQxfU7d52seWypRgXSbkr2nzHMGqHFH6N3a3whzxUz1MyDFXSeQrKj94UVrUCeBU2oteE",
  "key1": "2PMpP3GhZMhDkCenwcvAiC8MYTt3KrtqSE62k1s9jgaf2LoSi4um5zziHKJNTKpf8cbtLahqjrTEY7TfMJTWnYhe",
  "key2": "3wjmJjSPvWHZynNuAPJ2oheKDJtAYfZGSaPkVYUenEhNLDck58zjWq5SRJyfrEQxAWbHYoCt7L9aTrDeUv2f4m11",
  "key3": "2cnHeCWSJEbVmcBKibWZTSzZBx3rwo9XQ4Xkt5xuuZM7FPSkxCy8vh15v1GPfWdqzEuBqzX4vi5pTA53mzJLn3DD",
  "key4": "4EkpEu5VncxBv8oA2ct4YfMhnaDrxnSDGidzwYoNaLCHTA6txkFwbebvxZgEyjZNMSMufhoKuNddmPY2h1qZwE6W",
  "key5": "4G3FMevQkBQ6abn6rjG2Lu3qSwyFkhQv2zXeceXVNfu4oQecxwKqcC6hHy5EE4G1RAaq4tHZpVXwHZ7wiKcGjvfd",
  "key6": "5yC5vLDsbsfbisHJPBkFnQpjo1Bqw7ryyknWrXPRTHpwA5uWoWqcLfGU2G3JJeokHT7b2D9XrerQSZQgTMKgRd8y",
  "key7": "5xt2UPuzFipqepT3kkKj6M8GFuznUyrUbBfSdx5WyajXgN3NMe2jsFeRdDKie8pKV4Cja93HJiPSWcw8gajeWxmb",
  "key8": "59oTnUMTyLhiHXQXWETvGrPNnRorAxUS1xXxdgeD6t3aQJNqSs6NMiMsH6K1WvzHzvzN1CeJfmazBr9vvyM4muGH",
  "key9": "3YMCFNAELkDfQRqrwPRbpSSdd25PtGjyMVGGTbgb4BZXNypseEYSSbRMiN9GKFReUFTxuUG6RTqwyFQYG7aoUBG4",
  "key10": "4ZadqJM7X9VHEieaV5tVcfJXSkhXtHZe6EkFMxoMZosvZddvwAB9oUDe7JsrJ2gDQsjv9vj77QJfLUGFG5ecPDVq",
  "key11": "3jU86LcDzTGAvE8qsYENwiBDQTghbLRhqeoibWsEGxVNu5UceTkFqL9X5vNURFdeEENbKdnY3urpVqPq2HhUjkKV",
  "key12": "2VswHMXJ7oTeMyNF71DnmGykBjFTaswQ467ndzzYbgUSWwyKgtFTV3wTKDuTcradMk8ByzLZaH4KvweBNnR7RXpg",
  "key13": "23oCWnqBR6J6xiynEcDVEPrpieWSeCvi84sossraCSQ1CD863LGa5cpDPy1c8tvWJeQovZApK2QhhCcQMcTVuaJG",
  "key14": "3M9fREcnYc5DG9ALgPB6B66QFgaQSSwT31oHurmG4ycqJUMrqgX75dbxErYXuH5tH4nto9JQqidXM9Y3ArdZqno5",
  "key15": "47D5Hi5oZMXFtniTRY4zUiccJsddgyxmMS2YMzapxHE9tFkpP8vyqjK2RsnqVRPzDqd83VfN7dko2FiB6whBtQbm",
  "key16": "4d291KgFUnSjkvfxcG7KEsJTxe5piZ3YgNiXWjDN14EgoxDzhQw6iYkbMCNHMXbBwK1WHVmNPXPRNHzfJS9gxWFg",
  "key17": "acaZY1VVz484sCXov38k19Zf7UWe26KK6RjCswgcj9EZbKNzqD71PfzC7wAUX49mrsqKbaEAaWNUBUYsX8BoM62",
  "key18": "4Pu9CQgcD7X5tQgvQtBnny3nQqA9RD65rAJJM35dUAQ4NW7LSdWmAguZXUhvSsdBihwKv2994P1JVVk2GQirKPYG",
  "key19": "623SGYqiXpmYsKn5NdhrBKVMyQczdYM8Vs8RoYZTSRWxCTJNACPtBW4HB9AQqcCuQC4XRg26taA5o3QLxNeWJWDm",
  "key20": "Vvg1sogpjrg268BHqtDt7fLxcLuohwbrbVD81ftCvDGV6DPfd5S1tELaZnYy4mEjK44uBRt97Rnq6cL92tuakWK",
  "key21": "hZMGsQQwuXGZK3VKvWEpyFh5EqZccDV3bYbokjidPSS6GMq6kjEg3AmLuz5YQSq7M9tNciH46D9Q2Xd3ep59wNn",
  "key22": "2YRBnoZwYNZkPo5MdELjWCtj3ZYnnMtjQrpgmHA9ZhTaeKkzJb2i4wGev1NVSxFn9kTgKTXPNvXneKkXaKHetpt4",
  "key23": "5cb9X8G9rf8yQ6E61Z5cCJjRKh7XZ3GEsKDZdtnfnJz41fwjoWoniWoPnEqXYzrY2f631MM4P89fMacXFdbspz4h",
  "key24": "4uMDDQNuRdr4wzYCDyTH32hHmR2WQ7i9Dambpj22iWFe7dNcNC2qE6GadAeS6PNC3mdK6juX5rUj3CvHp2DN3Y3X",
  "key25": "4ubK87NFwSx6JNCxnFK5mZPreviMxM4Dfii2E2JKtugwJxHGKJ4VbmZYzs1FdjnhDzTriwUz4jPbs4v91QxGwKGz",
  "key26": "3oC9TFoF9Eimozzmd1pKy7bFyiRc8FhJsn8rN9F1BAmrAMogVPsbkLT2gZYxFZpX4NeXWYNEnebmzHzVdvkvZvuY",
  "key27": "KDHYyuj7fDYcVjscUu4GUFx6Mz29Ef113AP59hCD5NtdhdtYg5mu3qVzpnM6UuE7jzRmQyYotaGTmKvihChprgz",
  "key28": "grAmMDnLACzkbV7WZemq3GQHCiEVSFm6RcBjXnWR2bBdtYpn5CWnQpz2YZjBzgcGMZpksWMTzhT5mMfZQTypzQ9"
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
