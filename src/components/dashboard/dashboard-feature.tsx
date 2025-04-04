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
    "4QjxQHx2akV7xQf2UyMxXD4Ruipz532AxeLsRbX9TrBDJbVReR4AddPVFMyzvcbX3cPxQFKyF6T3S57MYAvPt2Tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q8bZY6RMwfcxeUns7SARESH6v2C62wH22ojEzMgJZhDWKswvywbEfGA15Fz1V7jLuqrH8GK2DbSRR214V8smERh",
  "key1": "319J4Dc84ci2dzM2iJzrTHPEPYetcdg4fWpEeypqErWL2tCadrQjxdFSx3RohSbrQXi1P7CDRdQRHuWLBSaNf72b",
  "key2": "Vz9S23G5qttHuDa46n5L64fWyMEPovQVUAUhv4vjqVoGvSL325udZJA8zVyB3VA53HVR32rsXdiD9uPsxWVokgW",
  "key3": "4eE7mFwr8ibMybyk6ZbFuhaN2TmeBpDVbd6cb6akvQjPQJaLhfsB7G5WdRPCB5M4NzGF88M7Bv9Q8PskBNreCntj",
  "key4": "c9zhDThhEKNAXCDPJMFmM5ce8nrdqbTzHs9gA9b7LuDc8t1WZKQ2ycYXqK2CqcmYdTxzoZK5YHXwcAUXwpBCuvk",
  "key5": "A4hCgmeghkHkaw2Ut4pgori9Yg5LzQNRdHYeSMHWxhYa11jCZsYEotUtBrrHzq1rNxrc19yz9VDGFpENymsPWv4",
  "key6": "3deA2NYaYAX8weFDzYibJkXVo2W8GeSYikQ7URJDiBN4fDDJVZafrcWQ6stNdruJrw3UnD7CbN4gwmAoiN7FXbm5",
  "key7": "4JiMg9oM354iLbUt6woinPccNUxZ2brMZcJynt658fJsStXE4jUyiHVs9VAsGkRjqQJb1zUC7mGLaExdRdXHVrUg",
  "key8": "2D5M7J3P5j9Vppt2xsJVhjP4KHBMsFv43avQVTGJoSqyv6NrtCtZiVuF2dkoFXZz6gAsuMQbeZ1PjCWnhMMqmjtn",
  "key9": "4ENEQ6nXvSe4Dme3dyb9p5EcM6T9dW3U5RDADW7HpZYiLngjzpqftA2CrnJkgncts1GateiArmpiWqbeDcWd5uAV",
  "key10": "5tPvJpQJ4ngPgAKwJChHkegGmZMpEU4EkPNjc6xPVEmfsAAhZpaLxif7omkruL1dKfKRPiNz5VLeJCAdiurfqcLu",
  "key11": "2iy8MfHbbRJyHUQnSgEfBgrhY7pahc1DopZdTjgHRspzzXEeyvG37GLg135Enk5rQjRMMqtiDRb2panZ51edGCSo",
  "key12": "4q3qr4YuUYuLmv82KMNYzvinRqCK5nGWBpkUtQVPYo3XvxwCMJKHnav6uyA8mY3wGNrYjTygVQhesYPMjqHocBJc",
  "key13": "5QfAcwCkB3aQaQ7Zh1F9nm6dfCFekP4WgSnr98ez5otKdAzUVRA79hgE2LjtNfCWP43BPZ7BArZ7WZZyDWZqkEXp",
  "key14": "48w28HpTVsAptaLhUs7Vh1z37h5iQUhxVRkNh3STgXcgXDEfSQMmR5e9iCFL5zNbf2VfHCh2qWvjrzWNcPG4qfKy",
  "key15": "3KEFKLgDJrwwgGcwQwLpXQhBsMQD61ZeKgKyB4KAgYcqFBzbHb3zJsHtaLdWa8DvRMcDGo1hbaNyTq4csUeJnBwH",
  "key16": "22sM4ZNvZyqqkx1w5M3XXUZQkj4q7dyUiYxbqz4ondvp72T3wWn7GqVcyRd7qNuN1N7531bGgser7JSdfhkVkoor",
  "key17": "NQNy9P99HdGgLh8c84nr2dcT12w9H4hEdHpLRMFZ2FtMuTYXDHyDPYuQLVqb1yJKgpbvx4rJ67AvcHgg6MHSCH7",
  "key18": "s7qd7V1vvNSmnQcVp1Pp4J6M6mPo5wP3iVW2QZ3S8TKWPPMpKoAa1G8ujrS3rRtRwz1xidQVi4opCiN1TLT2knQ",
  "key19": "3NBgUyazVWzHQyQMZgk2fgH6N4meqKp8JsaNDKUoj5gHfa3jarAaeVVouDQMNL4oJj7FpRDT2qCrf7qTjhPspJYq",
  "key20": "5ac5bi9ksuef39sRNoe1AEQb6aEe3Pk7FCD5jZiQAYFUqAoD6PrbtaxKf7tLX5ZjJuNJ2MoqZA7xL1CNBgmp437H",
  "key21": "2r7SXcXPgA11XpVkotKiG6hLDtjrrKQgKzZyL1mN8J6TGtYjqLybtT79dNFN8eMJVSiq1pYeQwrjrXrZBbrvprtM",
  "key22": "56xyKPvgTbfUzF8xim4n44kxiD7Xvh8AoMxT5sK7VquYudKc7mX3gdj4BYAUBC2S97emv5NJta6CYcELG3jNrVpH",
  "key23": "3UFFbKPoRucCQQw1kxwBxQzXhrnzDCdYf7CqoyadcttvAjc4rawzNXyvn27EBtEeVrjwr441umX5xUnDGXpQD6h6",
  "key24": "21HMp2siPnAnTnq3spki6rh3nDoSr4vFpoPpDnQRZsFsYwGhMB4az6vRVjE82HCBVsLC5PGXMkupgQZpitUbDMdQ",
  "key25": "38sm2uqrosdJWoHd47daYtM9L44kyECZ1hh8NLtUYqPizbMMcP5BfxViBpJ2r2MSWN5i1BtWe9AbYQQ7uXW4vCik",
  "key26": "5J1EptLE1NeuaFkQth7YHbvmm8X8KVCNgoKYT4DBbowHem2itnmsX8An9KSkDZXkE4vTcZg6dMJWSmPB1K3MZCdU",
  "key27": "5f1xKh7RJNU4vFme8TH2aPsh358H2v6SKom2bg663197yWPZUFS8EDxxEVQ6mYtqCwSWhyLLrsbrfcuPoGAWF828",
  "key28": "Vn9wqbSnSnU9wypE1KF8xnYUfpMqWybGMdrUwgJ3Bqep4mTuGMirCtVmGgAGk6YKLR8JiFmB2HAM6n9Aqg6CGAE",
  "key29": "2BzmBRVeGneEk6xDYP3yjXC1dsE4BXSuA1So5NLzawxum7muye4JmjTFVAUKVzQWQaCYrQracceYU6jYHBULvu1p",
  "key30": "FeuuXovMxadCxQjA1zWNVFzmhBfoDjobEGp7yNqwWn8FPXNmZTmaGgMmU1chRT9QB2z8KQmSXhtxUbMsWk2VhPY",
  "key31": "5X7C7avRUHgcFDwbmzobXZqwxAfYSRyz1P576stun2q96DZW93T5JkizijirXY9kv6zcjCZJfScW6v1GSaVt36kS",
  "key32": "4nTXAek6Ly6st6p8LorJ6WGQWALrEcxi1ALmwCGUcWidjrAQES4wn7XoV5PDAWP5urbrcoSgeMgL1zNwbArHbxMM",
  "key33": "4WPqxwamyew7hCAdwrxKddSNwNvHGkQhvxihvy7jQtnmbhJ7k95FmTznwAwbtrj6TxkfDzVWXeEYnS9gX5mbdWvk",
  "key34": "3fyKNjxmqhVXgMnhS3E7pmMyCnHYcpv6ctCwEqKtAgGd1Vu12rtBWX9RngKQosswaepucW7SqYnT9utTmaidAi9w",
  "key35": "2ESxPCpjwToHrEMAhQhd2ubGXzV5mARJ6ohrqT6omgqKceb9byqnTUJX3RV4ZcbCmtDjauzTAHh5fuGsSBMaCd91",
  "key36": "erSNVqcmfYyGBY6keYShYEx5LUZ1d7LdFavvTsMEJEYKmWkRCEZdu4ZLoEd4KaoD39EQ5jtqcG94hRVsYXUEzfh",
  "key37": "27SVZEL7xthPTXEq7HK9BpM1MHZafAyu5k3VAQNveSuoNkTYHMUosB98hagV2RywCjmj8cRJZmz9TbkDua3CJEyp",
  "key38": "3SsknH97e5CVG8qY4gM4Ezo3Rs5KdzXBvSEfddRtvMYMtNZCGgs4nfQoxQVHbhNaUuZaMzbSipvjW6afHAWi6BuK",
  "key39": "kLAe9v9SNCf3DAYVDDou7feDLi9HZPhE8cc3xmWBTcUwaqLV5zLf6nZUdDV7xJRD7sqE2C1i5FGnVhG5QvBouH8",
  "key40": "5exZ3bgPHYogocswu1frvrbrJJ481bvngdW4gqd4NMKQVj9MpNoFdRqmb5gB5QqfMZz9r5xrSHp7pX5PHjVVLE5d"
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
