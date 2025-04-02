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
    "5bUtfBBLXwBh3a77Fwawviuq2Zm8NEfJZR6bRquRk2NnexGReFXnKzG46hwCKy4icRdro3B4AoeevhTDkg24beQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KfpCyiDpUGujiFzY3RuQVSogKPkF9oVekKSDu9MU3dAE7f5JcQgLGK31MJ9CJwAthLPrc9vBo5QWu2BnCyKk7tn",
  "key1": "3pVAMrTJCjGePhmsUFYKJXKLpkADJP6k12NXMAFbWRcwzsNrZg5eikZyHDjWwnWSUE6WnMD1P2zfb62GDJV5ADp",
  "key2": "5btZjbJzZKyMWK6QZKyMd9GE9fHVuuUGf1K9XE8AWFdDwa7MXDcGdNr9NpRWwshakvVaE8wXfqcFLJRTUSdtdbwq",
  "key3": "y2DRHg4HocASTGHazFyu81nmDFMD23Le4ZAjPSkhdTqw54Sue5Qwax1bMYCQvwgkAgPFTbq1dUJpD2RSxbbbLvm",
  "key4": "aFeSNfneAZYju4FoT7wmTP75bqJdG8zULTb2LuncaFYywfFwbnrt4aXAUhFYzBfN52Bb8qd5FnBnmYRL2EmLATt",
  "key5": "2r9mc3eavBFwACoUerbhHwXy3KrMQxHaDmHJwCn3vyQWzbBk7wMTcQD6fwWspH4vnigpibf788eLXh1GJWLXpE3L",
  "key6": "4NshNSJq5J6N9Daer5j5RsTX8dQdgZyw5ro9pmq1HRePzGrM5cQ4YhUCXmTte1DtvyH7gVzqF3quEJhznRGpRqp9",
  "key7": "5aZy63saEnScBcfPnR144T9SKfwu91Qtr8Rd9kUruqUgg97Kdty3x2s6ibfAbGutT4BcvgV179WGURAnLbV6RzkQ",
  "key8": "LkEUXTmVrti2QvCuPxb8y3p4YZZn8R3E4KJrucaK7g9W46BruDYzAXiwjxwGkpfXXyP4rZimrYfCVdjT7vYWFjr",
  "key9": "Zc6X5H9vP3kFxWhdLBRD56mHQybABFdSKpmYaBhba5LQn88tAFtcyAzcD9uLYi17rtSuo1aqZYxJqPTrrcetKDB",
  "key10": "5fvWjDyodRXRnjz9aSwC1Uo7KWaFWEEuE4wsLHRvLFgoNVTGX7RoWXjGzZqGeC8BWmV7h51DTWosiQEn8AZ9FRGr",
  "key11": "568EaAZF6nYqjRooxpkdBMhFSjrH7rxtB4d7m9pnt7Dq7uYtdbonM9rr1b99Txhyd5KUdQ4KrwTpa3ieXjsH8A6m",
  "key12": "32TQXnHbnM85cBbk9Mu6DpprPriLQCzropkHTGdYjpHGpu3ipzuRyGveLy2hh5nEorh9FgPsYRZpeZAqwyW8MbAg",
  "key13": "5mu7DwqRN5KZsh3n59w6kmrCUhtogf5kpGQrfdPWiTZegguDffghsX33ZFffpBZDA8wFtsaj3DC9Q1BsXHjSjs72",
  "key14": "2KVzTaEMX5AudXxZZQArXhqX6DXw8MBYvcEbU82X4sgKf5mbQZvr3XAdgWDv3s9v1gU57po6V6x13BYjcn7tUzXN",
  "key15": "5t5A9nMUYVVvu1uNTCfU58jEdjufVU91BxE7ckMjgAiJ9NuFSvveuTTYLbPW8dinoEgYZhCaYyHHcsyGtE9tMMuz",
  "key16": "27JxriMCDiiHpfAsS3z8gMr2sFyotEQSme7YZPrVeBYdzDh3prAigE2XcuEm9CVgrGBxzv4mbW3kiByWkwW8GUDs",
  "key17": "wYDCQF4ASy8JE8pEYhX7VerXynehQJxuyjF6Nyrh5a9GnFZ6uvqdcPSEzKUvwPrtetyj4LXxW9DB2BuAYRcGhoJ",
  "key18": "4MBRdzEHqcq8NJgicCQXQYo1WwFBEcAka8rTuYYaftdUS6q9z8ptf93o8RSN7afKdXWW7ZjS8uZv8zMf87TbfKb1",
  "key19": "2qbKL5krYu1YVagAUodw37nkvwpE22L7nRhRm2cgEnKM4iJxhQdc2FoqhmG2hzG44ikTkyoqxUeAXGM6oTG3Lv7b",
  "key20": "Smm6KpMjkY3UeuYNBigXyepRLAotaqsoXS1tWw5syZzN1aCkMZNKMWfGmzCBbmNgipFooS1nZC643P9MH4fR7TZ",
  "key21": "2rxSC3pdhT7yo29Qm5Y5wDkLWgobe9UUK1xTwBa1pr2arjXYoumLJJA1NV96hCn78JxkJP9d2meEAdqVNLXtmHuz",
  "key22": "WoBVbi8nDJwgaekKJpz5scJ8s6fAFjL9PL7HCmiggUDiJvGn9oLMct2Fk3YarJMFHMbzmpBcPfALN4UpuDttL7P",
  "key23": "61LTjzE3FZ9Ze5orRmpu9ej4BwsJUCvTTGNCJ2HdjpVRcLJHwChSfPeXDdrQd8FXt2EdCNXcVnUvvn2xX8om8A9g",
  "key24": "5HivrU6fbXbh7Ca5zXqLxD8h4T5nZ2pApomLseTQozFJSRTD1Sy9Yk4kSRrpowxdFKuPgYyYD7t8Wp91fMQnepyC",
  "key25": "22bQBbWaSR7Xhu4Lq4s1YhmWnh8xZvmjs3y6Py7QUmHziUquJN91HXCEtn3JXjSKp9muK99tPHyYvZEEXNU833eT",
  "key26": "3sxhnCCWV4Ae3EGXVjHR3JbPVgHyw1ANXvTGwuekKW7a4jbdFmb8rMZrMYrUqiWrq4epb5eqWtdPq2hyZDgCQ6Gr",
  "key27": "4N7yYR4Jpd1d6xp7iYtKg64vdNgcMS3GrLASUejQLHi6iM7TWsgrdqn18ELmJV7xxDmzrEi7Zzm2EMnYEUpNEpkK",
  "key28": "3o71gofBaAibyVziCpderjCSPVEMD7hmgtWHt57rbjnMeX1QTBsBFM86VDzgjsLw92fkdN4sjxYd1T59hZFMxNXh",
  "key29": "53uDJGtDyD5UuBDXLpAt9VoZBTztiuZSvCkyVryJLXg1rWd2xQbiEFYjGsjJHSJzRg9jCSnCype4yiEa7JfKGSQT"
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
