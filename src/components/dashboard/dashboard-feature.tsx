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
    "34UH334cKSFojeFTsJ8u8AoLKpAsH3AVV7kNCwXf823fTY4Du8mM55hfzAyqG8JCernsYnXu7QmsuuUzHNx6Lbqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ResaJNH9KPpaVLKNkDJUMGDagwgXtCAfTuvvw99sStUHFcSPmRS3t5T5rhyCUVXiqaErqnaaW6GtPwVC3W4W7Rh",
  "key1": "5KzfZNy5vYR24jJ98hLtYB53cGht6iKDxeZUZ6P5iD9djvPUQTXn9PgQNZhYjozYokVjFa4joBfkEVK4wazCG9tg",
  "key2": "4kFmVsWt2YHkeoL3un2UgYrxW3vqYqt8kh618PvHyuJzrGQCLt4sa9daJVJZULaCjjHWS5yQrs5R1bHC2auMYeFR",
  "key3": "3KX1pGsirthZqZVgi8v6YRoy8z6hAfvb14EFVwtEHpJKC1XqpAHAbvhLf1xTBbfxBbqSLLZ9KUa9vLbCwjXVXVr",
  "key4": "3cFVz1wuowvyKTo47sfY9xEqjAFj92Eabq2Jmht7NZ2cyqy7cUG5GKokYuG3W78SAHUQ7kJ5HjiUtBfjNtycgC61",
  "key5": "J2esrZH2LpNSzY91e5mpU5ZPQTAocRZ5eFMEVePHBCKNcwa6fghvGaYXjfAywWeG4wPijw296VEhpiN44UhTYBj",
  "key6": "4zKW9Y18GtoSreJGJmLsVgpnPNaYHnfUqvtMnaeNYjPeMNYGtMh4UoFXuLitsuCTHqsnz3NZQCY7ei8K1LywM9QA",
  "key7": "3yHL2hpuLXr6nFWTZq171vWEL9tSowjMHfR8NWu5PtSaagjG8kVLMvZnaTLvrbk6nyuUJnbSpUAfxxsEiwbULGMo",
  "key8": "4zyfMxZyeBgzdEBMS1yrUCUrXgqWawV2PkQqpWiP9urHi3BNFpDFqrxGjtnt77nvF76kxsf3zKCy353gMizZb86o",
  "key9": "3KHMHAai6BmR78CyKVM4d2n2FJtqfyi4ELCEBfhNMrHtA8yFDigV3fS7RsiDd3XzXk6iNEEtLSLjyefUswemzmNn",
  "key10": "5Bi2nQ4AVPmwSnXKD1MSVTfKDVPJvXPgVRJnkgQ9AWpfoQXJcffd2PRuzMp3YNhNrhcX9a71iGpQWGpgQxfAiRq8",
  "key11": "cXfDumhQg8ySRnkDSyGVoZZaH1S13JoJxHE6dNmZPRk4p1fcKi6wgwSxjAKFoyvRgCchNGptzq1Mtk8eLAWA325",
  "key12": "5xyBTHQ7mF57Y7FCYUugE96dTVbzLMTSFxPKWQNKsujVfemksncGzFD6prGi4i4ddnYHvJvMzmxbDicEUNWvcMkr",
  "key13": "5kxjQQUGpPP6om4hsQDsXPKBnCQG9ut3SEc58kGPCMkwLX5HKki1CqvLAgSbUVmmQsrUtmWk6sRjrWKZr6Fqn7LK",
  "key14": "3M8vo7UQFRcFsYBv9NRzs7nWaFYEA6CTibgy6Nn9XKJgabn6h7qzneSLSjUwhEqubu4sqGJtZ5TPkcJq393LfVHm",
  "key15": "5i6kqpyGqkPmEUQXyyf4rKSeWSmVBMHvMASmTuCZ2nyhscscJqLzQW8xFhNUQ9aSuLffcdM6VuMRtLgUVx3cJzFw",
  "key16": "5ma82VjtfSLRdShSsvTGvKw4BiFPNUfaQqMCEEuDpiatf3LJF48buS4BtsdTmDiiEH41YwFHdAcDjyHeZDbej3VK",
  "key17": "nadrTBBJeZuKXL8gb6pFEpHUhMU3BbrBz9ZkL7KbaYDRqNGfyDwzq8CijB4yqm1TfTQYS4CdcgBHWYFQXqQFYYN",
  "key18": "65uG5YJHQPgbX3QmvNzMGhh5AcqFgqt76qq1BnuCJSjgJeUcf6yr3dnHMv31iEMYM7nEswy2qsqV66TZ1nnXXCw4",
  "key19": "4Qykig8yvY19GKvuzHSWnUQJocoAmf1wmLFYcvY2J35HWwAo3ZLTB3nynhZKxvdH19prfwNj8C6x3mksCdBReYD1",
  "key20": "2tFNiZYXBw3t2rkiRVLfYEZE9U7dkr19Z1KeicZD8ou3X6tyhY917qaAf8LQCm9kZhDxbBqwW6Dt5JjJngy2knSb",
  "key21": "2GSjSgsGoYfqD11HYDN6xVWEekujAqGedcFs5hpzFfdbMv6dRRQ6TWZN91iNrEWqy37xYazuPV3c6wz3e1pxLSo6",
  "key22": "2immymQMB6PCym1DZF5hxk9cw1hv8zbw9VMHqiym8oq4frGhayzATSBgrRV2GpoG1BT5yhfxYvUpm3pmNqRUEoyZ",
  "key23": "4sZJJoTCk4Sw7VUvty88VGW2Cks3JmtT3n9QEc8qqvkkFpf4gKDgTyfpkYh4zMGGSpAoaRDo2Ab9H8w6aUPnHA7A",
  "key24": "3ydHdusM3ZkT7KbaZ4Vjz3bts8hCyKaxi6eSzj8eK6aHPxnMQEdFJ66o5F1DkdDMhhfqVJGmf6yHi1XbbPEbUDtg",
  "key25": "4cEoq7si2AEgvTfjJTwEdQme8dYEHL2qEdzfJovcG1NNrQF9SZxCGwXZ3Z7xqRV54FQ3kUWQFJvEKfc2QyM88oxV",
  "key26": "4uYEKqzCVt6ZPV22ixJqnsrHm3aYNaiecZLujgmeNxSfTgerbaxSVg4LpgNybGaJAwxCQUgSR9x7HCrSfgye9YjW",
  "key27": "GPrmjUUt6ZEq2JVgjruD3zXGDL1VxnwAXZM2RyP94FGXJReGcHTN9RBTAmka5xBTXGFW3Sk2Q6zSBPgvGszVvc3",
  "key28": "5aLQ8fhDgzGeBbxwMHKY7DxmUAkdku6qGkedEcgMr6acZZRss8C2bCXmbgW8xt8pSwFhzvJnY74KQz3GGcJMrP5W",
  "key29": "3DeAohnstJEJoNiFUe21sNiJeAh7U34Y8o8FWHk6ntr1UccDzXi2LZ4mZ6ZgJ1ujnKQGbKFwxoNjyyTU13jcKffZ",
  "key30": "CyMPraQCXQXHwbwGtfSTExSUYu7iib2rzgdDBXzX7KDdWSPA7Zn9xZqhMz1RsKHQ8h7qQFxsE3CWsWaSLPhfGwq",
  "key31": "5BQ2mp2qAqogMQ4Ph4qijd6HJhfCvV9hpCi43jGTnG9gR7KcewZiceXjYi68KZ9mnsGTuRPDRX8biwRxT7dWeYsd",
  "key32": "3buF3pqnUvXCLh6uYVLj59KMyxaz7o2RH5PxYLggM85doxNmmvSML7MR867o91pj6gtq7Y2yNyJV4hnFRJJvgnbs",
  "key33": "uF7G91PMidFSpd2q7yxRVFwhXoGHDi9FfD61m1tGGZuueGcN5hotgJRAF1KMjPFwteQ1Zfi2SAHBS9ybuBok53v",
  "key34": "5SMqTcmTCpwEGfLJSv1EtQYj9GrmwN2KbCotDD2g5GwRXMi7QoLBmtrksuQrbnq8ZB382pHnDSof16SVnHW4Kdtu",
  "key35": "5kuXHVUgrURiiCyAUtHoB9bG8HcoZomPiqz6eW8mH1ELQ3jfo5yY1Uv6QETv5PRfR69uhj1c3eYoao7xch1N5SBs",
  "key36": "DGVVSqWbWHiKt6tm5i8iJJR99f7iSeZE3ck5ZzH5qK7NZAaCiD4SsJvkUT8Qww8epA9ZNkuizgeqbCmqsthRgDF",
  "key37": "2p2e5QY4axRN16dNQEU4nmvbYvMWrC2STBCUyiC9EKFEGTzPX1K8vkasd8Xk3BbGWfRAKvtb8zxN573cTeLeQgYG",
  "key38": "GEu3fZDJqxmrmoGCYz6jRbiXiCRoHNAbdLobuEr6ZqrHPtY99Z6NeShpeQ6GeTb6fKeVvUPo4TicZtdYmrfPL9k"
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
