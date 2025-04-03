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
    "5eeGRdCfuxBynhBvD7e29dz44hB4qBiFiJU928qTgjfjytXop7vvoaZpURYGFzdnGAj1KgQDVb4smo1db1vDTPGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LzdxeyCPLZeq95eo6bfDJ16GXMhho7WrAWBwFMrLbvCdHgwKQMVv2RjFkH7vYwwyVy92w7cjAgzWPSDtPEVWSBF",
  "key1": "dsz6NefHXyNGc4thhqWcqqhTsixskkgmpN7c2BH1z3avnPUJJKLhX3tfoqNz8tEKr9UYpJyhTQvJ4tqBNQsX71r",
  "key2": "2i1mjUck1WcDGW5fz8TM3hsw5oMULYh6CrqxnroA4SJDG8f5roy8HrnixisQG2H3t27YgsfqFX7NMX8q5uegjSJa",
  "key3": "S4m4HXm4K4wv3jX6zX3mXfqRfyESuDS6mzPydT2vDVLvkWLevfzpQXHjPN9u5GN5MWzAgrgBBDd8eipsUbD7TW5",
  "key4": "4CtkqExAzuthWbJbyjTtNDmDP3ap4GyaLid6tDkagh9HuQnHio3puvQDbPZxurRWc9mpkAEucSc67ffPuKDmnCkk",
  "key5": "84kLNdKDeKAvvLWJsAAfuACjDzhrtUMQTNb18k7THh7rn524qa6FGW2CeCQJxutJkYzcCi4pWeLs2fjJjccX2kK",
  "key6": "2xfebU3FrEa769XrFJ8kgjKmhU3Le9XQXWwTL4a21tZjYdc73uF5NP2LwtAXyLGv9PemgEewgrLkyACRadtfoeu6",
  "key7": "JJC8ZuGxkHARknfXmNJQxqLkCSTtRxzP8ojwGCsnehv1sLa1DwwXzA4RJU4fFeqTTg3nTuoWuNMvCxZR1jALpdn",
  "key8": "2UXyMjP7yM55ACviiGU1KQkgjUtuKmZcJQt2K9GCaeEi6Ex5CMsa2pCS88713ckRR1TESeYrvX59YC3tq3VJNDgH",
  "key9": "3LPt3sH5hfFk5fEJ6rkygah67kvSpFp7Bz9RV4AioKRDFgxzPGPeYQZ4CQzHgZu3zMSLiQSEcz5kcrr2TfDB6TJM",
  "key10": "2jxt8pz3cFbTjXd524vsVUSnuLeFByh2wdfrUQDbsso3ect43SH43PxbHGCg9sT9Vsrhi2YbWPRbPV7r86YCi4Gh",
  "key11": "4RXzK4vwPbqadx2guMj7rm9m2KMH5L593ti1ieMkWukJSFfmB73LKjur5vwPMrmgP9nN5PPdi9yFF9M8suuZjN8b",
  "key12": "4Cma8SreDEc4rotBR1zKQxtkuQXHTJcpSsu4Yg1ZPxoyhx5F2pMkMX9gP55w9pZq2z7WJBoarWgwDM2qBH31qSzp",
  "key13": "VMzWuXd2Gc8u5eMdrpRHCDbBm1A598Y398r877tkhdDzYrNKw7UiMmkay3aWPGkuvmC7LqaViwZJ8UiWu66nmCp",
  "key14": "4fMNyG5H1Hh1nsiEnbHT8837fwHp9cXZVZmdTgWwbHDVszZwvond3oYX9TvYe1WqBGXpFqT3pfrsHSgEwCsBHNAg",
  "key15": "56FdJhx5nnHgQBcW11LWXcZuC1MEXVser3TNCcDPZhsmUoVLK1esr9G3YvNpPNdg4cHqAJzJqULtAopUk3LZpWGs",
  "key16": "5ZjaKy5f8Aod4Evw45uaXLwM2AfghE8PJFxtfPYaTQ1uEJabScFBW81Mtx5yDJ8WWSTgQ2sVpKqX8eHU9H54hCHC",
  "key17": "51Ye9cDzh6cnjywcJnY65WFwo9fv4AGuej8kEC4FHt3NdysbCj6VvjQMV2BJQouM3MAoXeaWSEZwepJVvuGkZ2KU",
  "key18": "1X6ncRyDQky7hmrp9XW1nErc629y8GmHUDFSkseSQ7HEp4vYuK3U8QK663hh5VBQZh3Ts23ake7vq3CgakMyAqQ",
  "key19": "52x7tkY9AcebvSi4KNRAP8zjSrdNWy7ErqAtKZeZtwqWS64yZS9NTYALfNyzFoK1MmYv5wJHXAHJP3KTbSCpRMcV",
  "key20": "22439ZURr3MKX1WT1A2trRnPwN78AaZpzyedyB1fvfJhiG25ZeGeQYp3MVzx53ZxZcQSEBhrPXeRj2QS9tSWpC5P",
  "key21": "4tRmaCmJkj2kKA36SkrWqR8q2XYPA9VwwMfD18aE2JNZUtZHFsXbnCeU3kdhRQpU5kKAFmMrAgdSAfoiRBFc8JUJ",
  "key22": "2vxcm479xif8U7CcuMdm5waNFNNHKoznp3hn9P3fwvEmUBbN4DvSX1snccrR1p3MQ7FcvmkmDjbHDhYJq3aAm4f2",
  "key23": "2Do1AyG2NrcnJMeHFq9PNWB8vJp4E1RHydq4TvmLrh2rRe3ZZfD4Ns6zAgNt1VyeN3S2XF8kiavYw72Hn1AdZpes",
  "key24": "3yY27JEDt2E5La3NNVdxpDHjef8nJg56hSRjX7tyTyXWW4Vqgj2oLxa4cNX8XZxz17Yp9qg7sVhuqTmcZR9iXcLS",
  "key25": "2V7w4eeNMN6svSELfMcHiaijfJH47kGUY5NLK2QRFZ2rWsaiVCpmtQRcttQ7oA53e6yL9sHRsNLyVBT6h48uzm8P",
  "key26": "3AieMNMmttn59vGr4eDbMLfYYu1QyAWAZDoMqzmZks3xAnBhZJ3ZnaEgndGpg5QB5XNN2gyFdRFvd87HnCH5ijq1",
  "key27": "4pxexQj7WBw1bbrBHmdbnthhsGueh7KcDyNSEHjwp227x6Gy1kCHmkDoQ4dNDUevxcSYrQXkwHryLgLejKdEThNT",
  "key28": "2FJ9ST2Jm2znn77d6BFbS6GvVyYxzRWA3HSyZn4dYXNZkuakHBLJu7S6iEgPfm4CSEJ8Nm6p6LthNgbq3Nf9YF4H",
  "key29": "7qhahEBqcHoc3P3k82eoM6QECGP24qnYUpwzQtiyCzLNQJ8DsMQ23xrcDnn3rjqARzVY4G6fXVU1RTjQzggwehm",
  "key30": "4prd8HLc4D7C4QEL6j8qMjSURkcPmXPznrkoqHdRPmi4pndQHqpNCDgUdXAYorcAcpmMhko5miFFuDdpNJDNwt8R",
  "key31": "3xboF4SyxLvVxRfkUXfyugASys4reCHw2wzHBAgoM1pU8p8JMv5qf8b9YgRutdynZuC7FPB484itcoZvQWT284qt",
  "key32": "32AhZYp9EserrnDVv2MGxSTZohPAGTSsYjw1FthwJXkGzn7s3JPcbjS7J9bHmk41os3Fh1GpEdbvNMiEEt52dXXs",
  "key33": "2tNzGMpu7Q195Uw24vCyDeFxU7gZXQ2y2WQrDMNTDuuDHUDMtdWm87noanymw16GitYgJMSmpW175G6JUyZzf6X9",
  "key34": "5rLBvJjQQ5DH8uGzAidMAZAWg2CBrdGEMZUkJXLLfJJWAC1vn3PHTm19TFqvAamaRNBmpA4YJwGaYG6HdGgfrq6"
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
