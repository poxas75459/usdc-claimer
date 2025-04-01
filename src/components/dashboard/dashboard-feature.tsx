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
    "22VRwvpRr2fppRsDBcYDmE8vS3j6c3XZ6qv4jgR3YE2dTqku4ajMwGSpgVF1TSxw61QEHV4H6t3K8JzJkCviH4go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28JU1Dz4nXutXznqN6ucxfUaDPQ2wrVeYdMbwAuJsTqHVj9KRWHdFm1rJvXsQBJTubEgPG1m1imjBLDLGbFAjAwb",
  "key1": "3jBUp1Wx56rBhLXfuQ54QrqgK4yceMDYJpim1PMrWJXuGwnasVBHrpLYMVQSQHs9E1DrfoPyDBuZMnBWqiZraNJP",
  "key2": "4EFBxvKm9ZJrTfo4nxxqivmvPj95KVh9PAQCex7mgQ2jCLrq4ozfrW5Huczo44MPat7TE21SXMjCe4WQAqkaDQN4",
  "key3": "2paUScNN8JSkPYFpGdpQtFiwPWUDEBuKp63mNLJFPficn7zuSW7hBtaRE6pxZ4NqAL2VRanZbL1MgSeAgrs7JgQT",
  "key4": "4nBfBvZg7Vb6NF71KjpE6Ee3sBPDhzCSMwZxF4my92WAuHqsL7hTAVgJDJubkm5eAaHHW4onJLd6wmx33JDK92zc",
  "key5": "2RuKiH3TetykGo41As4SdPqzXFrtMBH4RCL63JEiEF8pvnEJtMZTgH1XvQJtJtv2YRU12bJQVysSYuXDZTKQpceY",
  "key6": "3ScC1pzxrAijax4kyogTigUt18E9L7s6KXZzkPgQrDfZFb1huq6W6mg8dnnxyKEMkiYHgQrKekgf1JWe3r9Ea1vT",
  "key7": "2p6vTBNbozZRtjtBXhcZKa44gvs5farJ1LxZCDzUwDsPDhbY98qju5xfzLMAE2G693fqx8rFBVG1awNMS6BezAct",
  "key8": "4jTj8hfeo44vnFQQh4Nrhh5dDsj4xkZqQew89MLSktd4mF7oUkuCiyEBoXAyVPTFUWZgdqeFzwkCX1LmFNxJZ7fo",
  "key9": "62RT9jVTgYSB7AhuG8d7qX8G49NPfm6BEugdT1CEqxKzCjhDx8oRT593mNKjvtnvJuuCjoaSqG9TheJxSsp33AM2",
  "key10": "4rgSYczaNQrZsdmiWTw8egFf4uwWdK5MLDgMsp5fcfYT9puxcVsPe9oE5HzHGRVV7exeZHiXrh73dzcLJe4UUWrs",
  "key11": "2KvXLAPSTp6oyugHSGwLWZqzqi2VfLfVLYLHdo7zcbJXoCBFxHvGmZShwyNmzQ82mVJPhv9UteB6YeY289Lo6oH4",
  "key12": "5u2jST2peuUYrKrm3irm5aJFmU4YFRthJT1u6n15qLhMxbeyS9fxjPJExZ6fJVCGocK8qsCWzDLd6FoF1pQpmFqy",
  "key13": "5FXL1FqHi92YjRwmuvz3ifMKy6f8JMovLFiwD7DRtrwThpxCXmuwiPDMkwnyTH436UusdKeoYfz4kg3tQnSZeqeo",
  "key14": "34anpPjo3zmHL5xGZ6pqzRCDqnNeF2HGtfxsZm3QVhAqX2Q79Pkb3cbbjE74w4iv19f3eFjDBiSg1BxPSX6PEWUx",
  "key15": "5GnDG2n6MUhoANksLRdChjwGJe5R6H8ReGtWSe8udd88Eu6GYQBZ2vCPyLDugcv1BXa1pmWre6aoYycKqwd5TEHU",
  "key16": "jyUXiRBT5dJSEJ7RARcnPDo65XSa9Wz3FoGNQLrZgv3H8Csa1FRki8uVTuuknJ9w8RSPFHNuajQUud73cCx1N3G",
  "key17": "27knRHs5BgTAnbbRbgAf2qtJFnJCyrNvdC1CG6GiVj9NMNNaAEpvQT5jm5RwxhnydxgnaRE1x6PkAyygeq1VmnGo",
  "key18": "61Zxq4JkAksN4wtQ2JX57nXt6HTmBTMDS66isxiNTsVCF5DgW8TFGuPnJvYmz59fNxTE8ZdhUtjVMXnnyk2WLGje",
  "key19": "2SgTLQGbK17mfWhKcYQCM9JcqKqzxebEnyCo8Zme2kGxFQkSSHzBUJZh6UpjYvLWZhYMmQR9kjTrm5oS6BW66c3x",
  "key20": "4nMgYvjkhNRuKDRWdqvMwsUN93m1DAMcCNCJRemjev5yw8baQL47aZ614Hcufat1hxw5zim4bYqyyDGhTwoBX73S",
  "key21": "27DPVYXiuDvG4RJziiUKA2Axg3RijuFNwKZzzUnNzLqgwxVrfZ8dkHuGpQPCziFhGFhTkRDu1wGXTdSvBe48yBew",
  "key22": "5LYgdAcP5PExT3AUi6LxauRJ4QrYXK2b2FoSiZ5haLGp1bEoEkqKVBMUMEt1TQ8gskpGRmuqWk9hQh5Vw5vwsdG7",
  "key23": "57UcniDffTFjjVbZ7NV13x6tXeGbbrN94edxd6V82tucExefTJqj7mVBMntNK8uNRgZwvFJSNHwZxyTRNasAJsHb",
  "key24": "3puBeVoY72PEp8emqVde2W1X6pJBMn1XVDNxUAbPex3ynv9iJcRe9TqKvi3zgqiQJva4N3UYsG13KdrGiBPkvtTp",
  "key25": "iUWUTMDHR6KA5GdcmRhUijf7JwMCG4v4gzcjJfSZUUzUQpYxTCY3qeosDVZtjU1ycdBbKuQsTyddxxCzv91aPmY",
  "key26": "LbT187d9KeSQ7vzN631jH3PFwQRZCzFGXSW37UUvWM1bc6vgBpqXJbqL2rSNvj1sgoaexww47fLrZ4jEnVeK2P3",
  "key27": "4a61MQmsw7sursjZQCU2iRjWwdVZzRiQsigyXsZe9E799bvoax2beAZreYBL3xKfPsLEPAHtuiyMEW34sHesUVw4",
  "key28": "pXdfgzRtAoQo49fosLqE9Je7cJjmzp24s7nT4i5XbTfGCv69zMXvwoEZ5fQRoMjjKSrZuwer1AJGzpRbFELj6Fq",
  "key29": "4ziHXkjynDfkChLMfA1F8VQk3scw4Ps31eZueN37EYN6yBpSrkXfKwiALeMGXhPk4kBcNHTj5dwBmea48qygzQdH",
  "key30": "3WzCm4NTsxbLdfuuszHFP8NLYG3KKdTkaHNUUBjK495mUmZT6rkDxjNBedXyFXgxvzHrezVsViufUP9wWhbYNM5",
  "key31": "2VwmsA7nBb8v5Xg3PUHeuFhSdT4vzDawSXbKkHdJZdK3J1gbN9moovTJLr8hXYFuGQwj4vM7iP8HnBTVC7vQ5qSQ",
  "key32": "59h1ojeTJSxZhirp6Scb6zuqx1UGFNzzNYJbKV44u8RfoCyGzKsqLnQRoZKTiP24mFaGQkLA5UZzjaXKfUkoBEPh",
  "key33": "gFb7zWQTGWjw49Lv7rj4NpMbt7iaEgPSJuxsGQKwqanXTKDAFzNhxMBjdEc5CcFWedUQLoL53LX8P3nJBUPXvuy",
  "key34": "4QYSsNrdR2zGEQHgvBxiqQ3jEg1dSG7wznkFGMvBwV34bQy2scKraheqnGqKzKvbCEqbR5FnhGQrtHbw7417HBoQ",
  "key35": "3qm3edQZ29SxLg6d2jCDJdrGYzS7QdWZAki6Ahymi7k61AYNUC1qb8quXzQVKiKo774z9reyUYw8PhhE2tXWBJFr"
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
