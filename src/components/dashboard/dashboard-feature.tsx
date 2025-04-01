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
    "59b4cdphE795g61CnnRQBAdZKJuGm6m8dL2AeRQV5yj9BoqfPzKpsKujX8sEB2hjLWhuhhvzBJoGgXd4MnaWZefR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MoNmzkJnFN1s7N9BcfibM8WvKBgEfML9FAso16EexNxeqXcU3biwbmobtN6uKmfxvBmGPSbwfyL3Dn2BsqQNvnp",
  "key1": "Ux5h5JqudsSuxnpyprUuhhAPFgBg1zoSsUKdenVraanMpwj5cBhhtQp3uJR5mrn7scwYroX7UQUWT31c8x16nP8",
  "key2": "47ufqcnEjBoEeybLDSqg3nZsq27J4kesEhQRhhdheVMK5gnPoQMxXtXUmBKS9pw4JnEVzaMZLqNvEvRxHCnBniSY",
  "key3": "GeydCeJM4XeUvzfAZJJTmX7JGi7S3sz1EX32ChDA3yzJmLKBeWU6R2K3kgGFx4L5emXRjskNCHhPs64MZBF34uq",
  "key4": "5WKpqStujmRkQzHUzEtVFu41Wxdkdq4vhXazFLGCS2iaQKZUbCemb8ZmdJKKA1kxMVFPnSsVxyAjJBvhpjmHzXCC",
  "key5": "56EePJDAzXitpJizBdJsWhcrxbx9rKPZwjvVF2rHxZmkbP9YdudixAQbFUkbmv3Hi6T9TiRt2wq7YYYDnVtusWtV",
  "key6": "3jSSVcNd5C9HLC5X41SmhZHejAeWdZutP72Y7do5szAFzdCiWHwPzXEjtmT4QnTnn1236bc7PQovALXn8TA7cssX",
  "key7": "5W1xgfAzqZHz75BxLJokM29KGwvMXC7V1f2fQhSNYqWsqgDUGUj9UqMonoSHkNQxg8KLE1XJy7Q9vWEaqMMUAoxV",
  "key8": "3obSQYrqS7hbKjr94qaxxjz2R2yMsTUpLWcK1SkJEabYw4EJoYKffmmdijbQ3UZ7ZfpXEPwzg8oGHvhGZAuYdf9j",
  "key9": "39PsPGC8R4UMNHPPFqcyPuxP1ckm3ZAjZhJfryJdJjKhsu8HnG5Gx6n2c4pNCGYpwoko1RvzVcsbwE9LYnSEEL5h",
  "key10": "2oCoV8m57HTbEViFPygaYX2Edr85uuxLfL8NR3YY8m4YWKSxggwwZGxNXR5YwVbfweWyCAnj459fFV92b2PWcb2E",
  "key11": "4m6dfxLnEMyE7dptMQNqWRy7PnPMR67cBjh4YZBoG5tGv24VcMJ8AiiSwLF8ZE4myB4Xh8TtQNKVwxPrMM2RK8xm",
  "key12": "2vHj18K8VBzsT2aAjuQdYzVXdr8YMufMakSUmrpPvzFjq9EA4KU6fQTTsJSfwBcP6eDXt7CByHYMXidwQ394orKQ",
  "key13": "246HP5k4mrAa8sz2VqhT7DCf9EFsUe33h8heerr6SofcGfHW5PyLMXx2CR4BrJ5pPa2KQJnk3EYaB46mPVJmK9cw",
  "key14": "4RNPAevB6H6mTPrsupUmYLmBvzTSz5N3Yw6X4cUorfyM2MctMwxU5tVh5DLNbxqkM52MyqTCtfsGiAA2riMNwSNU",
  "key15": "2oAFG6LUsFfUrZAQv8LEqgLVFoVdaM9SivgtLLbsFVxoDYtRD1aePVFwjfHoczWcDJRitPQKpXEmuwrgX9Vnndb2",
  "key16": "4XibiBng5LnDqJuxjHZiwWk7FTQwUfacBXucqe9A2s3s73m3Xv35bp5YK4sGGfBbUjoFnwcB5hABoFtkV5roWm7q",
  "key17": "3w3PKnGpy45AktMHNPoSJ5nmJNbQ9pDPzkMEmTjTjF9jaN33wBuhVdkqCdPU9UZdv8DyqqcDKFRWjX2aNpi789pL",
  "key18": "3ckfgWRebNRw2jBERq3snTMxBrQk85c3rcvMAR2qJ14xnHDPTtE3y6p1UjUgm7rUPdf1rv1nMRekkRJGUWysuzw8",
  "key19": "4jPJ9e8KVVST9j2ZBKKFaVURfHCgRC14PdPeLPMm5hkF9HqQa8kpazvxb3QmC717a1N1NFnMnVsQVZZcdo8swzU",
  "key20": "38CrEn5PzorVXieS5MRt73iFcZFKcGTJmfVZzXuBmmCsnGazRcNgBUrxBDCRMV3xFdh681EZFqndH2iayLGGDVDr",
  "key21": "51GWmuwgdz8edQArivMnCijHq96dftc7dHBLUSPpFC4K3YsbzwphMqDJndYTgUYD4pwuEwqfQo8VHeqWyALuQeFD",
  "key22": "5eF4ourgJArTRk5iy8DMk23M9RB5ynb2oVypZBzHpuL5sbwPhFQEFcRsw3MBd4GGn4GcjKJYc9eRRRnf5mBMRWjJ",
  "key23": "4rAPtBfnFqWQdUn2d4EktTDRWeHoLrhJmn6j8fVHnfo1JipTuBuQSCgvn7B321GtGkm99aGwmoYFmoU7t3jQQVgh",
  "key24": "GvdCpJyL2rhWc763pB5kcrGzhLVgYorskzPWnPqFrFCgCqQiq3zwJEr1cBadhsFf23iHS8P8MxoooarrShMnoR6",
  "key25": "2MroGcMRCnt3giLQ3TqCKjaJw5THnBrbV6U725EXbZXuwQBEFYdcHktFa7zj43FxJYzJ9KLPonbMBYaoZm2UW8gG",
  "key26": "5MwV6mMV7szmRjbExRsWpYhKwP4CvYPHTUCRKTEyJxdKReNkwNN2VXaXPiHk8FyxoJu5rzaUQpzEDcFBa3KUpzpB",
  "key27": "BkGGiFTfdTTLP4uCMBRiizPR3CbZHuHoA9wMx1VTbz4uj1oZVQRYs8HYsMPHMBXswVwgBxEWUdfJBZRs9Smzbg9",
  "key28": "58VZMp5YJgE9sMifnMgeKND7d36hA3rCmXQo1dwAGorF2dNB9py2eRSbWUTsQS7wFL6rHBsDAbVa8LjhqAA1MpY4",
  "key29": "ee42YAXsWnYMeHkuvK1Z8A7oWmEQ6LkX7t2BpRAdYqAn4hJ1pYJPcCN7aqS8fbe6zecN1MF36SuGFfxeb5aoJwD",
  "key30": "4zE4KMEcshJta1oZHXMjyBiVjnFUQD9A7CR38uS4tyGiBk5aYKqN3oDWLACxzConubdaTe9cUeHMjLw5V3ZcUP3X",
  "key31": "375GoaLiWzUY5F5fD72VzcrcdWGDJheref7qKKfDJAbhgE4BAKncwtw8paUBjGJrjDdSj7zLBzpdqamx8QwG9WB4",
  "key32": "2saUtzJ7SVgsz7mj7S7ke1Fk1SmPgjdaxCPSM8NhMb5fA1ZVovq3couq7MEKXL6E64Yp1thJtnftVpGgXEWtUb8s",
  "key33": "4w1yRotmp74iTLE38aY9Nf6Dd7xDEi2uHy2iinQxfCFVNHjqqkeQGqdWhufd5TeGaqeXtqtuvqebrsvoZ27s9mUP",
  "key34": "511zJDUnCntyFAR28V7E69y29KBJHhJmipgzvcD8bCgg4HZgd2NjDWcEsvX1NGijKJqRGPki2S4tcwrxu4dQNYac",
  "key35": "3xeRo6XZuw5t95sDd4rUov5GCSLABzmVcC8rHeJf5Ymb9yxGqyv4vkiJXyLqFG57xxGvPLsU89LgCN9KzzkBYU8S",
  "key36": "25crT8PNz74SXNjRMJSZgFEW461z5DtcYgfxCsRCzZYnsg4tb1mZQXzx7jDaNkEjn51AY9e4PGBmaZwe82EW5Gdr",
  "key37": "4W1pnf1ehxv69FoxwW8NHPruoSCZRArFyrrvSnT3HVBFBk5Pgq8nFbCbseZTUUHQwo3t6kb9SPkPhzV6rMkLqG5v",
  "key38": "4TUVJtH3rdncD8nbXkCvh6d7u4ViBURwYvKyQixAaYC11w4WVmeHXoJLtttDQRyjrPZsNJMU4KxZQd37udf3dx1G",
  "key39": "4tqiQBdEgVBPmh3ccECzkghNU9sDcio1p3XE4B2m9TMWpgjGwGaCsaUkzSaoZ38YzZ6A7ebRg57KEzzB92m6dPTT",
  "key40": "5K7h8qWWQ3eKWMAXvMxojua8GyiQyGMSBRwt9wDkoS97rYLGvCv2DcyQw7zZDdRebvCnnBdXY8jSgk1Z3H33EcBx",
  "key41": "5unpGkqBroGXfwD72zM64eTpnejXieQSwsaDaoM4c8ptVzC24iRsssC5wCkRaWAqHH2tJzqLQ3zZY4uCbEQEfKVp",
  "key42": "zDaJxwSBcX9ZvLrBZDchjipH6RmDkxv4me4zZhn7voadDHusfVVVsHUw2yUJ7KuUd73az4MMiKXcfamNAA3sc2n"
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
