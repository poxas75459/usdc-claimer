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
    "217qHwL4wH2Qxe6RR25kwXRhFNqbxrnDkQrDBJhTgy9oGMbrE8SBetTtLpuqQ1Ak5T8JShLXbpwrt7eBzSz6AaJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wzSzUeVBQeUat5ua6mTeK2FurKt5ymk5yX1vMgKhcT7GJZJPZkqYXMBzb71un4mU2ZMPgLhshJigSUf98C9eCcb",
  "key1": "2r4VMDeFMxr3nvx6VxHdzHx1rbejB2jHPjhvYdXoV4gWuqr9XPNojPGhrEbtfdM8aKkiTrasKBro7P5Uvu3F7E8W",
  "key2": "4bcrbBAhFi6HFE7qNM5q4wmQvZeHu6WxAB4RPfGQdNvZkp4BArvFYcMB4g9qPjtN6aFLpu37K8RFFhArQHsZ4C3u",
  "key3": "5r13fn3X9paAyffTJd2woMcYnWEHUY6G89TgmLf74r5oLN8zkhK4s6veS2TdKdq1LZShooFVLzkjDkC83ML6bmJG",
  "key4": "5HGhEY4F7c1KVj7ktSB5yafQsGUXsuZmskG26ivZLvD5KyWzTkyHvL5rSd5QAyaXj1rkfGvFGCBvDFUZ5fsoeLiM",
  "key5": "4JAnPj1ZHwRikjCvZWZpXVYnSQ8HDw75mVNg6JLb2VnfiFsnrHFFM1zWAWEadB9KkZ9LU7HH4Nd3U1ruoepatauA",
  "key6": "4DGDoondK8wC2jgc7NDXQvrNBX5hoTcpUnY8fqtMHJa1qQepQ2Ko8Dd7h6WaBnJjpoq3KoASYWnjhpYdJPfxCP7j",
  "key7": "41XB71WaK9kcNuLou1MBE87xmcwPaa6KQseTt1Dzu4LQ3adEgDE8fRM53wLDRGYBcEdk3hquLbd23T5B9P3aXU6W",
  "key8": "2shfkKKkYSF4y8MNAyQbH1NziJGSrcgEMRMigL3wUQ2oTQgPz1dhN9PPaHhN6euLfAkREvEWMa2VM4uozjZKZhaz",
  "key9": "5bkoUyNQezgHKcwVuXLjBJextkPbGm4xd8HTzHT9arrAezCZuGRKwNUyGARCCEKv1aRRcc7jqVgPaJWSziGNqxKV",
  "key10": "4zh86tmedrm1Q7VganbhUquetWYxwkHpccMKmprqRZvzspJReqxxeZn9SpWv6nYxpMVQgZwzhZMvahPfvjcTPeaR",
  "key11": "4iqWPfq4EhZcJrq5beP3MTPMQXfrQvyNpkRsWZ4V8oft9madctL3caqEKzxD1j496ACFo7yAby9LCzJSDqgU6dDF",
  "key12": "oHcEfpxLuEXqiy97UcqW8ds3xAaog2FyeTaMveKrQg4Z5wQ7XkTimguQqTPxbq5UbBKPhD2Lp2RyVEubzQJs5An",
  "key13": "3Vh52ndFDvrZbY2pQW5pJyEbhcQKCmxEvuGA3FjM9qDbmdzDN6rxw1fUJYQm7goJxFGiHzkG54gAe1JFnfEPPodC",
  "key14": "61Xe14jCcYDueKsqyTMoCRWJHKD7VuT9YAYQoibsXTQaMoYZRLCk3nmUkWRVYQSVnMjqEug7j9RSHdKW9x6ZxkEW",
  "key15": "5UK9aHqRXfjYP628XS21wxxLjUMxssDUHmRfGyX1Ve8zd1jKx4jqQvW3jSqiGKYWpJqbBMyXyRkPRKW6WzKXSggY",
  "key16": "2UzCYs9ZcVtsqi6KXuF5KZwuUaJP5Kdo7gUdHR2TQT1kf8ZWgmbNUrQmPY7KJA5LVfbLKyUqHW1WiHa5FEDjU134",
  "key17": "3yqEZ8WmKgrQQXwtz3y7wmS8xSAi6agggtnro21bhLABj3VwpNwMA74CNo8qELA28RHTHf5xN7E9Snqruwz9ty2r",
  "key18": "3t1fV5sMdZ6cHAQt7sHjby4hMGjKTrTZpWiEospq3ws7Cre3xdS5YPaUQCdzeN2zyGudEsuhHPPLXR4cBuYMaT9e",
  "key19": "3CGYbjSYZbmiPMMa1EQtD3XVh2iATo4LrT7ZATf7uuYsetq6rKSQX2dM1BZgxo9VpfPieH368KcsaxkHetcLw19m",
  "key20": "21FEE7q8AeGwYUUKMwbSHg6Gak5MNoT5tCaDyF6Whbq67z2yFr1WcaCcSUvth9rDFJyiVK2U7PnK8WxozrfFP7on",
  "key21": "4KE5MNonPYhy1prFUvWy1HHxQ6QtMqFCK6XjYrSdb3KtjERcMr22iy7n6vt1L2VYQ3ULrHHnwWR4jCKwY1n7GmAr",
  "key22": "59i1fJS2KipceHDUKU7oakotMEcFQE9MnZqpbJs82swVEWzhtNBUinNxytw8odqTWj8WwpsyhAEWzrF5Tmtd6Ue7",
  "key23": "4ZsinuNvAyfMefPsUvfFUWadfBTAdQYcYBddPnv9YDS9JRtETZ7kYrhUbT25HjUWtVJthvhniB5novgSMgighjgt",
  "key24": "5ePtyqHQURdV8FLoTXJrGgjtGY48wD4ECTqhWSLKuUqABDvXLLw434L6jt7H2Zwbki9gfToG6eWRMDjowL1NG1Cj",
  "key25": "2ohiVKp4YvL7Vgv7mp5VufY6aLKLvScczpCg9ZBcR1oErGpSLinoFCLEiphvEFFRGXwccVvm5G3nNxERkF3W7Dpc",
  "key26": "pGtLZNAsEZXoU4kZBXGmUKJkDauZtD4AppG5myMM5XijBdfEgMz3NReiZNAWMGESkz7TLxp8qmyy43V1S3CrL9F",
  "key27": "5y29DJ1PdThUyHUbWiDQYKPRC74ZLa1Tp2YLbaD6d6La9tBTipoENP9PEuH1shGLU9JhAfLkFjXRog6JvNW3j8S5",
  "key28": "4BsUB4qocDKCpkZs9bUPQVT3EuBa5qH3i6vyar2faZ2ZHvhRTHnwcaMVusA8RaRdK1SKexLZJpcoQ2Liett1s7UP",
  "key29": "3Swv9JUFwjxwfa1WqvDVH4NTL1UzAN5PgR7rg95nkAbg6sn6aWVaEtMFj1UBXUDMsVTqKb1PvPHUpVax2FQps7Mj",
  "key30": "2L67jLfxFuYn5NHsi246eGHLVKoWLE3uiBLVHeMnqA348RP48p1icR4fUboQCp1diiUQCg7yiDNCzAgahdZMLHQk",
  "key31": "4QaurEKY25vxVJetaiQyzkmTaYe17KeHvCrJDuj39EzzcsHNks3ixiUxGvaRGi1fFbi7epSn6VuPNje3aWk7q49z",
  "key32": "25sbXuYmA2LwueCWtSwqfQwPvUJoqq1zrLfr82anGUUNvTEKzHwj3uZb8jNP9JRBDisVhqwsoMqEwFnwtj4Q39hs"
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
