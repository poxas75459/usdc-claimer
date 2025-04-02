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
    "2e9HXkGgSPZNbv4HvSpdzCQqB81xEwtarjyQz53tF8mukazH3ZwzrqDwrxWvpckVLnx3kb6j3MwPRGhAuXzEce1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T2dm15xQ34B3kkAyJVrLhtzAzpHSohfZcaGQKV1gaygtLvBk2q2TxY52b2Wg5MuRHHUXmaDrJ8TEDUag28z3C6G",
  "key1": "3Ld6YWAuyf8XGv4EBquG9PEKgGLJBZ81CPP5tm2e33zWf3JTZN7icARJWxgnuxVzq9XPB7XgGScUegnB2to1MDF3",
  "key2": "sCZQbiFEDwk3YtJhmLKZY6Eem2AsKpUt2LvCdg2ugADkcVpS5bcXBEfFYcFgSce9e5JzUEFv1AxjxCgi4zhyqiX",
  "key3": "2rqsa5uN4Xy38RTP7XdaSSSZEbTC9rLGYszy1e6goPNTUeDErLxLP71RFqkLt8k4MnRpTKUpXFgrkBq1YjjzqHMU",
  "key4": "4rtSSgBVKFPqV4S8yUfpq6qNVHEC9uNqTuXeDkdUzjm8wfPU1gUYnUiaw98JMwixREHtjv19pg3n8suwGwQJDUtX",
  "key5": "4kiiY5zgkEkGoCJZuRPHd2nmAgijk9XwNfMq91nirjXadVnwKQ7QornoxiNHswZVcYDtDSufm6JcVRsrrPgBHmu1",
  "key6": "4vA4P4nnENjq6TdmemnsxJgy8kpVHyq6RDmE6KFuhp8uQQk4FMq5r3pcHGZ3UCy7ZqzwFn8QTRrVXYaA3N4kPfXR",
  "key7": "5hAJvWaeGE46LNrecBmdGK5zxTdkdvK2Ji2vmCdE7eHKpK6q4HQUzsd7WuQ7UwpRJJ9j7yaoTS7T7emtBb8Nx6p7",
  "key8": "4dTfN7q1cWS5cZfVJRzKu48edKusbnXaca8FzbS9Xa3N6V3nfYRSU1LD7Kpvw48d23ZtmD3wPhKWnswDgWATfnjB",
  "key9": "5KSeRv5jD1f84Tr1XwaxPpD5m3hdecKb5MXxm6yAmRzUcHfgtdzLuvHvNbd163KbsYNmHa66HfqiPtTSo8t1hqcN",
  "key10": "4ab4kNm81uqdhrEbyqLJne6jd6poiJWWLqDg5JxdS4NgfwMwD6kwHQPkg6A9HHm3uFd5b2z21XEyDVsvhCbjmWRg",
  "key11": "hjygXARGAYUuChCdxhcMREVLyBLNV3JcKs79U4uQmWLQoxtAKavZZmcSqZrqWFRrYh9mpLcciA1oQ6rRqLE2J4N",
  "key12": "2TAE3Hu9UrnpTJBDp3s5r6PiqV8Nch7cUowUPJoLUCWx3aKFsSMvh5HGgZjfN5ej1nyiuNms7J13ejabrVQG7BKA",
  "key13": "3Wa6i7owacHzyCBsHtS6GFgXwsiw7KYgwWDpeS7UobxLMXRboEBEaubqzudmLxrB9eGcUKSJkg6M5WmrxFJrWcEi",
  "key14": "438cBN4aVe4qkbG8qfYV3P17nTwG7CAsPYTL6cpRPMaVvuqpYNUgUTYDymUWy4qu223FVzKHuxafTJ3fP3UqmddG",
  "key15": "96zZ6gD2DamDphB1GWb76tak7KiiNPPfdyrAMoMbpWGSfeLUKYcwFjaqtn6FzK5wk8Txhn2RKTMrwSSfqF1Sh2L",
  "key16": "2fu2ff5DiiKskk3jw5HWPMY824honVWAghLSNUrH7tfqxo9Ud7vzKbxkcgE9p6zxxXu2du5H6617GA2qSWVacL3k",
  "key17": "4v6Lq6mkGMwHdBxt4sNz6JPkM5SqBbgRCeYpZGbhGkmrb4sc2UhiJsEFL142fLDuv42d4KXmpYU1UEir5AqL8wjH",
  "key18": "5Y6JH8TPb9sKZEmLX7D7MKdRyxYyqbG8R4ajc1jXaaRPPpDC2duxCZJG86qNixYcQ3TQS3K37rM1xFXFmbgMEUfS",
  "key19": "5GUUumLSUSmpjyQAyKs9ibfPhqJonemBp3d7feRbeDxoXj543EQTnZdmN2aeFHqNNMVe73McQQV3bQsTLS8z9J2t",
  "key20": "3T8hXTveGPQC3M5mqDoddeuNt4B1FUQaDNRRf4jT58vGMZjHCxxdBrQ26YvVrrm6kwcZiu48rCFBTSKmHxPnxd5D",
  "key21": "3QPqaEeHq7fJqmSBWApWhriKDLpMSShu8U1AUJmDTYqkXP5LJRsPT7iWdo4SngvHo3skPzNGRoFmpswTNsz7yPzZ",
  "key22": "4gHSKrtCeQxAb1mnXbZKMiK8T8h4UywhcuQwNcXJp6YPfx1GQFKw48qzWXPGxghcME1iv8jXTHodYDkrBwr95Y5b",
  "key23": "3rszEuhhqNFHrHoMT9CvgzKgzB7pnUiKjyS2MA9cJLda8HuNwZ3b66uqJd1XTYnBd3oZzFCjNXoWcHHNQSEzMt3A",
  "key24": "2o1Zu2R3pUyHi8pCdUCtnCMU2TrSPz2yqfMLdMbkPuSYppivzTyoqQTRmQsghsmGN4f2WperQmSJTczk3hr79pqa",
  "key25": "3dA1iVUqdVE3ovQRZM9gL8iUQdxvd8bi2kW2APGFQc9vAT2XDsjwNTa8mQTmgghqGGVcFtw3MzJrB6qF9hcckoL",
  "key26": "2ZAqF5gDbPZCTWKBVAK3yGpQKdSWcKVfuFR3mGHNvhUWjcEd4hWyazC6QksRsJmfwvDpN6gHkcnTeLDucpyqeLB8",
  "key27": "TcdigJfdUy5eXeQWQa5eg1TNpcSD5wz14drd29r8AXmrqmMHqeEcQkCMxU3m6Mh2Vi1PkH4BrekHwZ2n2FVuDVT",
  "key28": "4AWyrSjTwikjwaxgwBuWdBuFCcNcC2foWufKRqjKP1gDLBZkfUndDUQQEGkBaPSEwGDKPhzSDLHvNVqZEVwEVXtW",
  "key29": "5yWsepx25pJFoRUzzxfZZ32b1K2Fp1pcjqAjw4Sa7PVN3QQFQNhVA44rZmkptp6gipVRJJ7RX1rvSo8mEpR3iMTt",
  "key30": "3n2aMLoQuX5dcH8YEzsETGr9RE5jvCUF32khEsaVrk3tkurpZmpxrzPuGXyTvA3qQjYPZULBK4FN7Hd3AanvLHwP",
  "key31": "3k8h31KtrszuP2DBUMyRkEsd9YqK45JgLDr9S8eXvckS89RsGcmxFsDovvM1T4avwSZRkeknaxbbmBHZYmyEtnHK",
  "key32": "4EFfWoFcJxpo9KigCuYfGdzo7vySfUds3d4J9iwDMENq4DJNXmNowv4bU6CzwVAoyaJVM2A24tXMGAvNX6B6Zrqn",
  "key33": "21rS9KYuYSjsp6wtpJpXxGW4mSknDouzhJvnPQWDh4LcGZHwh8HjCcbCXqS4QLN6DjxBw6nS9SfXmiF15EPinUBz",
  "key34": "4pYSaAseXuzscinkaaoFF6UgHbizpyX3zGY8egkNAqaRhhAuHz3yPBkch5f7ZZVGesiSq2VVPgP36qtLVWQ97KAQ"
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
