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
    "5ZqaDu3Q3RoMcQPXz4DzXwnAw3gJ5cGcsKeWwqYjuYk1QkcgE6RBwp4Jsqi2L9motjgSVkyiCU9dY2gkLqz9ypfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eeqfdy5YwKPquUKwBATx9zCdJ4V45Jbba6GFZKs91s2iJTcu1BKaER1wirAWTpegStAxNNkr6FGHrAWLVZuba1G",
  "key1": "258mnzuNBAqQSrYPRuVmHfzokRGqbrs2cAaN6tcmpdNW85iTcBrti5rDdP7BDPCQW6EChDAN5NvwVNBomdCTLfMp",
  "key2": "4cPeP5smA5bMNbhAvyf8zS9C3xfdJfbxwBHpQCwE9WxWYGZpQSrrkPjNERkEdwHXVqe2yjSP7nYqd7vbcvmMCYmZ",
  "key3": "K5SocSymwA4SU4NBuw1GF2RPJ2hEa6greN8dUGERinfdKvohjuut7JjeSAq9654HbyvfhFJ1AUu6WhnJeStYW5K",
  "key4": "14ZbEis9XgqHBVDAyjREwZ7rMG9N8AcFNyz5Fdm69j84FpRDNJHrfySm2zccFHMhxrqghxwdiRE8pd8sFDru5tb",
  "key5": "64fvLzTeW3gXJCcucEmApFewGGVT8EvHEwGSCrX9bXuDY5vo3t4fXZZxE7chFRSjoeHoFP7xCG8GEGTez2kr85ED",
  "key6": "2CK4SiLiQ4iHTt6YEYCQatfL2z2j6ZNvqJuCU2BTxx2Px97wZz83aqch8ukqhzFVomCenHqie6zCU6VccgDdDZx2",
  "key7": "5yJ5mvCu1qfpoEiHai5fuoJ9sSSNnm3jcW1V1h9f2W6355o2c2NN4MhCg39PcNqGM6Ay1EuRu356MF2zgApQyRZT",
  "key8": "3iHqWWpotKsAqj3S3gKGhN7fEU6VnWtPLxX2Bf51dSamXgiAy8W6KFHpgYecxPQTKYD7o2rsGS6DasykqnZs5x49",
  "key9": "3AsoaGu93Ye6TDKZbbo6pp8ccz47Q2KfghkjM7xJC5s9FNfZg7ZqAF4ovSFr8WPUmfykSRtveUP5vztN641EqSDA",
  "key10": "4cmHuxhM4bpaveKrhuENv2hjVML9zXQAbd6W6DJibSC9cpd54Jpx38aaqSFeZp5K4VJxVKzQ7TPqG63Y1iAu6Lx9",
  "key11": "Ym49JdJCrFPoSZ2G2CaRviDAY31TsUdmmU4Cen4tWz3FKWXsSET8zf5Uhh5XjUaRrTPx54hL1ncDiQv3LmJoTmj",
  "key12": "2wjRN5MFbpN1FwNmy6gEan24N5ACsYEp7FjxSg9BLdn6HGEJ1istBTavTiShzZhV2odQTbG2b62GjGgDo9rz6tif",
  "key13": "dHohfASYSd1nVJBioTW1Ano4Aa1eYJLaYwvYR9nWGYiYa2z7jnjVzLfxf17FQxU2K6y5koTwsodXN7qL5pvRHfj",
  "key14": "3qaDVeYSoxzooQDJEkgwivmTDxT2gFG5GZ4zr8aq5J3w7fLg7pQzY4V7jZeP8smeRua9HMFsZdgEk5cmV3LMN5KA",
  "key15": "46Ftxvdmpe5XSpLqLmFAQEvLtzRKtKJRPKfUhTeeD7amxP2tR7zJobhRJvdDvEVVSgyn2cumXYtYdmdGZ9bcVBAQ",
  "key16": "WTRzdnHzhhgctTuZWdntwWq7BbPQpbG4c4bnjmGSjdgaJa2U238mGhZisD5rMgrXJBD11JKzaTkuEqapdJxDB5E",
  "key17": "3HC8BHcUzdhvfPPBvbhQNruDGkrECSYCAkbStABdVdgQpZuWqrNAQkm7vXh8scQbb9FY1McuPUL1MzDedfYkq8z8",
  "key18": "4mTsUwZEG4gotcZwi7q3XPMQ1LdQTDT9ma5DNzWiqJi2aoJxSEFPMbcQneiSzqR9HGnXoSpcuADfU6hTwPoeuBVF",
  "key19": "4wV5Tf3N53GeTsZ4CroxhnZUubsiMtUSuQ1bNw1rAVDboywvuKWxz1HoE6F31tSJWhYmZEtLzBLAsXxoTZR5J1W6",
  "key20": "4xutTAKwGabX5LhGLrkyUfans8iQy6AyMCDmkXdmjdsrWyNVLoZcWNctfVpBGseVmFtHiLtwuLjYRmckqMUsXrYQ",
  "key21": "3fMMx6c7PsZroY2Yc74jxBZ2YP9pa4pm2xWDED4t3dHZK7poSu7SM2fWTyGXJ41Bs3zHERVvY9bvqWLNimeeA8FH",
  "key22": "5DrKW4fcDrLVdyt5YyG4dXoZPwB3KfzSuxSi3AcCm31WHDTsfpuvxPa2vzFUzuiU6R2EQRoZEqRUfv6j9G3CC4Hd",
  "key23": "2rRxKwbWVL4bEpLaA87iDnUyWSeAG86s5F3YoSiKEdNmx3ceUziA9vH6H2wnNFx3DK3azmaXR68NhpPaiq4MXdgX",
  "key24": "5DRDTDiMyBMdihAxoxT9Ez92qJ9GZkTyBCHs1WMciHatwyNVhQEoUh15sHkJXi156oJu46wT89M9FRfCkKAMNcCL",
  "key25": "2MPScdL52AgffHa6L1ST4u15EbVZkub7BqRWGaKgfPy3RNqGy46KaiqWazmSPx6MWDopSSdynJHeTVbz4d7wc8fM",
  "key26": "48Vmisgh1v7BQBu7whUAN1PciyxUMqDXkpMnqeDNRUDNCtgdy7nEZct3EoMTHAX2C2kL5VSkLUYEn1rVgySDumgu",
  "key27": "5mh9nG2eZJWhrAokUq2NMaecLKHD2Ri4XP9kyGfVQzAb3476uHfQgFnw4zUrCWuHnarPhvWV6vF5qWMaGLwn9r4",
  "key28": "2PctfZpsp5yLaCyZcoXz8RqqkNorzDjWFV6FLz6dJeqBfDE4D2htJ1V3KZvRRm8GsnbnC6RetGy4fW8zARaDufgd",
  "key29": "Ngpk2BPEov2oAzgwr8m4pwFT3gjextf9w5S1KsRwzD3ggGTy6Qr175JDe1znxtcXikZqGvgMbaXJPYZAfzGxbL6",
  "key30": "SGzMs4DdfY9qaUCNjqu1yMhMcCnecmd369uizMEWCsqtjkTCzKPN9ixEKKUuLwvTRods4jAzPzBQT1qjdtSzHk6",
  "key31": "5KkCLA7e4wV3qzCpWtL5mee6xxxmNw8L73i4MGxaNbWXNqvBD8f5brH7h7VLzAiHV5UPc6LMn4ZAUzsgSQ2h2Z5N",
  "key32": "2rS5uCNvTNaNuCMdDasxLwWpFX1qcmrLEfqwjvV5EmmYQntBibE7zYc8tXvHG5dXXotGmQqGSPM8oj9ha6qzzaos",
  "key33": "5WQiLXXyRpeUr2mBUJafdiCZxJxDbkyX9KjMvJJd9aGb2Sis5K869F3y4NZCK6vZxpfEp4rGmZJTnjHakKCQUcAt",
  "key34": "ZLeZqcnB7PXap6WRWoHnshBaYiYidy3UUVAvDQhTkfdTBvumh7DwPZLv3NXZbitxRzJRjrcPxs2oec2VMhFMPV3",
  "key35": "2YfDBkw4tG4NPndf1my9xtFnvMpvibTUFWUmQAvKxXUHKiyVak4CqGdWXd2cQKBxHKm932RPaCYVG7RpxTwz8LF1",
  "key36": "4MLU8UaH7omKJQQD1j9c7ekq1fWsnRnmxjiX856Qz3cX6R4Gcg3Rq82n6XM4jANWWN1GMioVdVnXUAzPkHfXJE7S",
  "key37": "4BwCfdcBuidnYYSDosLZ2raCXe9VBRXqUALKZVhWkGjH4hRsEwZZyQaJFseDMR2hVqrnQtzbXLXVnSko3Tir7Th4",
  "key38": "5var9ZwLzeNiZuiMEUvKkgRF7chesYKeeygRx2vqLjtBkWvnrkDovtypJD5t7oEzxGAvA2iD8PR2eCALZ9bfMUq",
  "key39": "654dCNqGsR7pXhSEVCBgu47VirXbVcwL2kaoZ38A3TPZLfuPdoxwsRso38bzSaSYxRm559j24TCjJbPirydFvBWS",
  "key40": "4SpP1kH24hWSYxQmjzUii8hkgdUxvFsB4NZjLpzSgbcnpLy3RAWRwwyRRyfwDUJoN7ivZqp3cCXUNS7qrJ7ov4df",
  "key41": "59WQn9ZfT5VUEVBmNJNgGxf6EcBPgntjNntkf5hWXeFUysoBYP4Yb5QRFXNWBHf5Yy2JxaCZpEqhxRnZwjBhpWW3",
  "key42": "5sS5vybnKgsvHghqS7GNxRcqJW4cP8YrvLThab9ZpQugGS1hiPjYFuEvc2FPc87Q1LP1zRXsvfwUxsp4dpdFPnN9",
  "key43": "5j1NXdX97LbvzQntJCP2Jtn7SpfH8PgqfPE7a4NKrCn7M5jc4djTTUtHapQBp8guzbzw5dyHT2CWRkxNDT5uKDCi",
  "key44": "4vGpcELhq4tkKzbt1YwBCNkBzVptpVhhLwn2ntyiU7pXY24m7zDaFnngACo2Gywu3DCagWNQqEybsCPqoEtRqs48",
  "key45": "2EzM9dxNV5VNCyPzWctzREgxgrJamK9LASRCkrPBdMh6Wj3M4zZc7fSpE7Sp1xReiheGeHbvxxCG2pZ4fMeApMnc"
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
