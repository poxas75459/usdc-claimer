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
    "3beAYxipxwRPXYXMSY3Uxfv512DFmahdEaTaQpobZYxHu6XJeyUjPGrnhFuBKmvfncfS9AQH6ktHi8aFoWcBeuLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SVb8TkTJQ3gPa7HV71ivYxCUtQSmqyqhUrf75PGG1iH7UzVS8zJSGm4Mw1j1WkmzE7ReNqqJiExLSrzgLHVGpy5",
  "key1": "3LutVKMSqrYtqFQeo8t87peq6byZyXs7i9mxAeMz4ZfaHxGwnWXNLWa2ZrKAZ3ab3AXC1T7jqHLiVNTbej7tKy3F",
  "key2": "4tU2HyNSjhoFSrryT2JtghqPj2L9ayo8yssyYaQBEXPUGUBePz14uryoGqrCr7eNveSJqdEXFxJULPmcpRCgXqKQ",
  "key3": "3C8yvzmdf53WJYBbMo7EXaiWhaA7MYoSxKfXRrSDy4SM6eEEUWdh3q48FJCydAT3S72AiN9sq4p5VwaxQDtSh7Uy",
  "key4": "3RuBGBRC5mgkCyMf7L2nMiud3XSCucG313mT35PUyxBHBCLb2HJ52skBBz3aPRSBdr9C9UrkfEhRfTAJaBeTJyXu",
  "key5": "jJuntMgkAkCqgfCZ1zrD55kgv4XzrNd5skehBVTrvkyT9Wh7qHvWg7CCF8D9rG5XLQw72rs3fSpn9AqRn5RWbXR",
  "key6": "5eoaG1VnfR5y8jzN4ev7wBYtYr1UT4X4tMtVTpJhHiQt3WqXmSCC1fB1ZQ2nrppYeHC8jcvhGHDdhtYKqL4ZcPt2",
  "key7": "g9jrTgX9NsmazqsooYVrAuPt5D7siDmPQuG1NWqchq56oitB8JTPi5nkJoic7Pd6iK6i2zg8yDqZrJAmd7mFZzZ",
  "key8": "ztKduD48gMrL5Jj6Ax4E1wBoAL7BwjqnPKpKvppQhdfjbE55GVcWPwVjFSx4ejM9ymBA2HhUyjA3mo5mAonhtQe",
  "key9": "5PFG2uCc41CpnvtE459P93PEfYzHsG9Z9c7Za132T5m2N9qJHHCyeaCx5EJTUmfaEkxR2TCVv2ManSumUSKeMTuD",
  "key10": "5Nx2wDn2YJjXyNYnA6NiHGKPLkeQyHczpcwXWZ8qwWbuDkRZ58Ly9zwZ9EjrNEtZuWdpbj2nurCqhd6skudqc5RN",
  "key11": "Phjj1DHPVQdxiSVtcNcvUxqAyA7Wb9rRE8oPFRtdC6RF82Nbe5VwfgsyN2cwxfP3YXb88vXqALNdWhPKyLsGpNW",
  "key12": "2sUG9xeL4JdqozP6GtWFqu8CWnqoWcxsxonWvSaE7YDPiWD8MprYWQhrufPybR2r9XERc6g6HZ851WNPoqR4MEc5",
  "key13": "x6yPUKW762DU8EaiyWRziYFJtPaGNyWLY4N1AaXUD9Q9K59ejDd6uT2fBPZUG5rynFzxJ9AcXdm3em6WgSSXXfc",
  "key14": "4iC48KVxNLRnoh7fAGcDPbMMSCMWQKPUPyzKcT1VLv1iZ86qsdVxLEZtWpckcN8UDS3hf4x3ifFyZ6SQh31ipK8W",
  "key15": "2LGVq8M8YsJxqVRfLPjcX6JdJQeGPLr3TkLTKapSHFYgoA4MQYfJb4rpi8zX8LusqivhXajcpiFjBQ7h7sjgmuAC",
  "key16": "626bGYmF9D1FButfGzPYx3P1AR486HApMUBw9RJ7Z4RgNDQoQmXCULYmnbJzHkAtFLnFQCJdYNJPvXFXET6Q58sQ",
  "key17": "kp4mbiLz3oiPPUJyeqYrGe2c9eWTdb9pyVSDbNT3rj8uoNksXz8F1nf2AMgsoDzfBp3ib1hoU3KRFUHH8LtecXV",
  "key18": "2jacWrLovW2o5k7Xq6KkvbmevpitQW6RfYkyUkXdKLyk5mkaNSxkTFMMXr279KqvQYEoC4eS2WXi4zv5bawwgFxM",
  "key19": "2gJ3dg2qwpySRCpPjA9PE6NfufctKUcYf2uD4z51S9dZzRxffXTbDjxkQJG3Hd9FFeAy8Lt6epLMKjJ57foXiCWL",
  "key20": "3t9WD6hRLCRSeqQWv8R6hsgecjdT1sr4sy3FhWiQ4UwG2ehT9NeCDPcn4DAh9Gd6L2DJYmHGtydkuYvYGwT1iqEn",
  "key21": "Tk5udTTfJKRu2Cav3FG1rVERBWVUngRvCsUnrFwXmKTy4SnPmq6DN63LPPuddy4EEvavcK2pNFVgYGHz9gbqpZi",
  "key22": "3YkguMPXSpPeX3AsPUGEyH8HyZXAbGbBd7RgggQBrMETSxxnZx87vDARYFFwVp9RrAwqmzRHfRaT3xfF8qWg48JA",
  "key23": "BLDXGcgRzbEU1UT13zM82Un3YPPVFtoSEf22yhkSfvH8TE4y21bvXDTgdkHoxGBX6qcU9wifJnY7Zr2LA186qjq",
  "key24": "3oMyZ8K56GjNQtNg5Vx96nR32vtM9qdwog936jSTiPFq7rJUCx3myQhy5vj7ofiXccVXT9KjEYdVwJdVvtwVY5SN",
  "key25": "3EM4fxtNZ8guwkA8NhHvPFeniXgPkcjL4vo8e1f1WvpWw7U2d1zqrjskLr5JvfQaFpanPrbbCod43t54cMR8VZtD",
  "key26": "zm4FeNKbZw1d8EWZAyH4VQqB93BHbVhdGgdx7FzQyRA9v3DgbzKTF9nsw9ou5nYLBD486wfDE8nMktHCPUSY5GA",
  "key27": "3REH2CafdYgBGAsHG1pgf9JsnVUz64dWUAPecz36cXp18GoJf2zRtrD9rYGUhiG93JoHWXHECKTGMBEVHNCma3Nt",
  "key28": "2ZJ5oNewiYEdGP1QFhWKtB8gAerUrpCe7hn5uiSmzgaVJGLopo2DaBTPiFfSfNyQt9uv1iXKxPfLXhxJHPQbqpLo",
  "key29": "5gKQzjJRPLHvk9oEmpqGPynzAstvCAvDprDMCAyZy13i4fFwJXzhrmPaNp2QMPMR272KEhhw93vntktCK7L3DDcS",
  "key30": "5mmEHRGc2UhiAvRebUND5odJzLUtkPzo4w4RJ3svsDgKFghzLWG9enRCjAZSw2Vy2N7kJNi8koMGBo8nfuhfxWWf",
  "key31": "2nz2tn8sWpTutE3G3caEC65YQg969fiwku664VXHSXQKjHrFT7zecCDHNRSN5eqeWet8ZLydAXg26Xru2R4WdFzf",
  "key32": "4448JBDC1RSk7UvAT7JTVZXXB9ayy6R7uNYmFm85Tppmo6nWyDpdKfk6Pztq8aFBKhvbvbBZv5pCWGrN3cn7BDsV",
  "key33": "23FyxmeMJTkQ5Kp4mGC4rTypGrn12BwC4gwK5dRSHFdmugHh2yWx1AkDP7ZMvnen78n9WpPV1emGaFZvFSFys3Mt",
  "key34": "5jgf7SotE9dJ9e7fRz1CqKRjXeWNQpmekA445rosmmGDoJtcZwf6gvByPVBtrrGYx5JGdvZutHUv1ScVuy2SpyAF",
  "key35": "3RpvPNnaL266UMULMG1A1UYH4k8PGAcGszLCnne32cparmAMqAr91drrJk9k8QiaowzjQMXyH16GXZQ1ejPMvUda",
  "key36": "2ZpcBVQGepmMFV2nX9bLMLCy83KikYfJi6xLQ65gupLfjSC1fpo6DdQfeC3t9ZG4jPpziv2vbP86jwTfcGapRxZY",
  "key37": "4CRvLA1z7NUyYED7QVjfPNZmnDDAgQWwgZLWqbvFjefjJc3CzW9fDVFLmeLnKgaKWnx5fNTC93ies2717km7Dcer",
  "key38": "4d9mdgAmnNQ55FL76shFjLm3Pj19mZYxhEoCaEPStneQ1eL5H7WLQpAWZBKBunn19cLBWWoDvMSGg8fJib4fhPHt",
  "key39": "5pMNJ1fBfWAYYpJAzL7ND6xMdmY4rEmyKqzXLPnL5cdpsnxTfsgtfoenTwXoaj4Q6wn6SKmLSCHvEK2sZes3TCnt",
  "key40": "4ybHMUzGuJAopZZ6wwSz4VkENYbEULtrB3KXXxZjJEzPfCRtJQWwLgFm2jns9GYXjxXNyc2sJVUZA9cD5LGnWeqK",
  "key41": "3WgRxcnnEkAzoxQu9SYgjQBfeoxmx2VBtVP7YeifEobRgtq1cG5Bmt8Q92pKoSR4vqQy6Uwhbf32tbVyGFJEUEHM"
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
