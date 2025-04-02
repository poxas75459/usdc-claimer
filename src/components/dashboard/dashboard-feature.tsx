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
    "5Pef8fc2SvzXvuQZ5zTzikaShpCqNXq3GkQFWpYF81B7nfTgSMAk2zReYkHEUkRnJuKmdBrQmjyzD5utPqnqDYre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQGKpWTfubohfyuupuWz2qBNQEaZ6H1UuGaWr8U7ZsdMFrmHXSeFgEeebVNfjuaDsmjqJzaCz5dAYDDJKXQMxoq",
  "key1": "3c8T9rA7YgMqHEoj5edTEeqmdwuA8BZtZvd63kpo7t4qLPSVjRL8wNiXrUccmX4ZGkrP6YRRMDa4U6EaZk7cqiPf",
  "key2": "55L5vVwMTTTLbdavhwEzNsbvbRt24PHUkBj378KRsaeGtSzEzJmdK7vhSSUFXznay9VNPpJcdat853jkQoULR5aK",
  "key3": "4FnPaUEtgacZyCG6vssGNoyzGvKdpzwUQcYfJmJYrwaS9mMpwSkP6WjmS7RCEsasfsWsdxApiSJm9LYeTuqwW9fj",
  "key4": "5J8saSSrF3FhepQYv6suYCfNkfJrbq2XSq8c3DbynCaEhimW2hzWDkPNg8D1tf1JyUpwwdzYBCq2z5Qjg8kLp4ZX",
  "key5": "Xh7H4Ym1WdR7FjVe9dbqpmTk2LoJRzwLj8srHqaBNDKaXDYoh4Wq9MxJ4dmhHskc1fK8NfaP2LqhTWySiFtmbzS",
  "key6": "4FeBNYb2qfAztqCoHujocBJZxAJkUExgG2kbw6vWRWpEAih5SiJcA9GeL7DUeAfwhPuVQb46UXgTXrJBf1MTHYQG",
  "key7": "2ejme9rGkaSA4fnKpvYzhh8cqy6JGnZkPPMoCYDuTXkMosEoj15ehr6Qj8e8bPX7j7JuKNHpzimPQba5Qf4Pui2Y",
  "key8": "Z7DYkexjPsJ1Wv3eqsL1JoxyxcgoCpK21FFFBT1vDZ68KMrQh8xSGusYuauh1t5FM8ZYsJXSwsz5htfbQrqgH7y",
  "key9": "5kScv5mvpkb8thh6urNxZNNvNpphdAtJw1VgBf89EDtkbravgG6DZWjdfRgqwJPRmjgm8Rt75iaRzk8greSWnJco",
  "key10": "3gr8kfWdkh6b5pjcPc77jXFqTWWYFgcYqBRvSf7BcfBLJpvzz6g9RYUtRGAwANucKUEWB8gRsNW3bNfiXZXw9Syc",
  "key11": "3xGCP4ktikTG2YKJrsuyxgqMTxe9chrC1dmMwmhu2GozeoNd2jx5PGZ7nKg4FMc336EQstiTRq9TESX9zie5LcMN",
  "key12": "2gVLAfYRJ2EkRLfZLT1bWjStHDuPqqr5wcvVdJWNBF1ah5TsTvYWMsyVSPAWP1MJ7QCRy4yH2RTzjSjKa42hUk2w",
  "key13": "4PrkthRXuwhS9Nu54BJBPmMwwWcquJHDAuUit9xMJZrRNTfQD9eMWw7ocK77CtvXLXFaX5M4gfPFEgL9MjyzrSqS",
  "key14": "2KgtGZ3k4V6XsH8NSyU7JHnbd6vTZ6zZYzVBZUb1J4k2oFUP2YtKm65My7gqBAy3uwTbnmkbeMvRd8Rkap2T4kNH",
  "key15": "5J68rm4pczcC8YVo9dsgcmaz1rzaB8YqdrAHXocpkrhcjYWHz7m2ABU2GfP44XXVpjX3uKKABh23VjhfxtBWaA2V",
  "key16": "4AGdWefAFUVhigmmdzM7e87tH5jA1g4A98aW3VQVssSwccYwW81uRUpLdFGxGAkqpzB18QJcCELmbh7tSh3eQSk",
  "key17": "tJEaKdzyrq4W3QRTGbUwRoBeUqg3gjEUmDxwndtb8PQvp5CyaZQ8nZrfqAD5Bwsv6sKXeeFzbb3BcjNeXHh49X4",
  "key18": "GHovCfK8exiB8jwkDdxeRdRSPSSX4SQn37CsJsCEL2GLcqzEEMXgRjJkX6oaN1kH1jsgbo4rapDBXN5tJzZcK8f",
  "key19": "3vq4dXhJnkGETJBqsy5KwPZikAbv9YMQUbv3VT7mUUCGswLtt9TKNd8NR5AnU8uaytTMAWu7y6DouHFfuyGLdt4A",
  "key20": "5ZFz7w463WLXjFZrNsTErr7K6LHL8sA78m5CLuRVqHQRgZp5pH52XLDZ4gZctbWRAaPTBsez1D8MNUWGAXhddLzp",
  "key21": "E3B2G88zpGe1CiaXPPyyX8RrbeCy6gRnzxZ688CfbgfFygMSoGqYrHsZNU4cFAWX29WbfwvPTgcpGCgEXfaPtp8",
  "key22": "4eQEmyeNceh3m5spE3tC3ZzSG95e3a3sP78TV5nN8MkQ9fYjyc9BhZDtJvCp69Pah4wY5RSQx9x5yQAMsT3vriCA",
  "key23": "Zy4uwAwGdbBsaN4esKvKz4iJ8ko6M5YCHQc7jRPo3R16CSQhgdqSN75yAUZt7WVEp646zuxKFP4frcLKtohbD4M",
  "key24": "4TQTvaNMihAChpkTfhvybo5LpNMu4VSwBHU9rQ1nnAQcoro7qXN1Eu6jUXV4FbsUi4VMQmXrouKCsRJ8J2vszF86",
  "key25": "2KRw5sJin3pQ5P9DreLtJt6Ca8aSkJhCqPn7xc1yq2AqpSLxzz2ZJN9u3i51fcTBt4BdJbKQbegEUYYbUL2eBUPU",
  "key26": "3vER8dWYoxTNPDZFDnNc53pRdft6iffp8tRzAztocDLubNGEN36NFBBWVwXPw5MD3XaLiDeDHEebmFB6fqXgFSiP",
  "key27": "5SHnjHJdeqStwnc81GkbTyKHAvbUiaj2N1NjhbkXYponmmpZnmLmAiJ831FzK8vUV17XAFM4V93wVh8hfYU5vcc6",
  "key28": "64ZPozAwYQXxVvg6i7YtFkiq6Vi5Hg1ZWkZX3adSkc6BWaigyhcFqDdTxMLUrS7nwvDW4kDKzsty2a5dor9y1D54",
  "key29": "5tVDCP9Lvoe2RBCYBzzNwqQHGSQFhDFX6UD2KVEJy39fiYEjX6UQ47victjayvLv61xTZpbv97zUftMZciNAupbG",
  "key30": "54GEyYBCBRUY1UmBJdCT4g3JNMmCNRTZg5kdHH9RkB24u1BP2bMGMuDnCJX2cxmqUsATpE5iv99MTVpNgt8GMnYS",
  "key31": "2SvQKw4ZK5CqKVXS5VBmb6NwvWcymNj6DtdGQCGRvDSQf9V3evJispg2d8ei8BYHhGF7Ffo2V7ckoYakWHBb8JRW",
  "key32": "2j81csHiqRsT57SzzfT3gdr4chskgWaZo1uLiz1MZQ2px6xQSHc6ZfeFrhqWkqfgx8CoxTHFPtdRwoqohpqXLCfN",
  "key33": "3AiLoLey9UQqN5jyMDwTEvFCrVyXeh1vpu1FSMF3MkEa47Ufe5UZJ58Ejnz85wr8mDmrn5GKSBt1rwGGa8ddGerR",
  "key34": "3cfW52XEJQwXRUWWqmkuumGyfV7UjuwcCUwxoBYjxXkSWqNZQTUAhbY89mdrCAcA9GxTCVUAHMjTPhDZcvYVJGAw",
  "key35": "4p8RSDDtt81Gm7xDbS9pDsU5CkDMzrxHnEwGwxoRV3ojqEHQqrdmMKzRcqLxPcgT8uo6Hf84LMnGf1Mk1Tg81drU",
  "key36": "3ba71khceN4r5ixgeNpVFx1phrYGnr8pszpAnuPWn2uBpS2aTDesMY9ML5CMY9pi8kLGvhqVcEYfzf6C1Fjctroy",
  "key37": "32RJ6jH4A8owy59uMxnHJXu6W4rubE9FuiPjMEizLsdumF5pifv2dK66ox8iBNkfpVWdYRgCYmEXNasRhD2KWxdc",
  "key38": "3LDyqNc8KyMk4rmwStYcECsZiCTwHhsqdWa39C3fEqLozpGBeySN9W1u3m9ZaefNU97HhUyNhfokeLGwVenW7jmE",
  "key39": "5kZMrm5cZJxtkxYsEcmJ6e28GkHKbZju381cM91oBZxiG83CrKe42NXnBfnFQaBDNofsPyfbjnUkV5BuMU1t2Jz4",
  "key40": "9Fjpp5EHL45VR7bt7F9whDpEF5z9sLadMC4HHFHAJybBdFYhePHXdPSTEoePeQk9DMYCxRaWRDfSP3a2WoccsRp"
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
