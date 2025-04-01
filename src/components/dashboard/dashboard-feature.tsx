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
    "5ZzyYqQ4vBqyp9h9UySHcKamvZJeGeR5B32tabvFv3kRRHBffiV2buUb5pGdPm8MRvcfwQT8fbLk3WRH8SBe4bpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ABqZZTbG64cQV3BsnSTyEsLyUF59Zx3qqB2FcmftgojNbE1W9C7eKfbAz4RLAB4x7h3bWtnS1hTjufv2gWMxFWx",
  "key1": "qaKXVEJ3cvwoLejin96p1xjFGw7KLi1YhXg2TcCdLdu32LU8njSjeP1hZJiocSDPJJHhDyUwLyJGQeKhfF2T4Uk",
  "key2": "8S4oTCQvGu8H859AptLKPGiaNsxGw7Zkbpe5SrUQnyJUxen7Zyd6543kb4xCFyNJFiMNk1TvN8nqGuaH4wGRogd",
  "key3": "5CfLUvTMKvyQS3JBtiZJWvrkQsDwfQ2VaB9ipq9H7wRCxQMbuhqa5o4ZGUxcpZLdsUhNFUnTPTKiEN247wHKL3Fs",
  "key4": "25MwtmYrdtsms4dQh15cuyyoCT1PM1cTiYgp5hwn7AkehheeYtSbEhgPUb9ZHUxVgBVNBU7a1WA5vUkzR2PVUVFe",
  "key5": "T3jWbeszTw2wptmfzKe2pCn3ghiU5tVuXJa3ERHwtnPEv99kDMV7NCbDnaT1iqW2fEsEeooKz76okcvGGRhyYwh",
  "key6": "RppaAAqFgQmSNjh1totbAsGfD6v2N7HG2zfcowBdsEtedCpb7WQ4v97QCJhbkEBx7zX5K1ZayLCtHSA5tmVsp19",
  "key7": "3hnGRwr1q7fiBjs2yz184e2tt7dNsfetQM7BNs9PKLPEBs33ktyvzLocRZTnfR1m2U94KgS15tCWvKC24TxWyJFw",
  "key8": "39VnsSQHM3ovPm3on8DYjdRA6ry1JvccfDGvUcpH5U763cagTZ6JCJgoUmrrvxSDBMvS412G7UBFvGxVLLjiQfYe",
  "key9": "44RHaMMnN3viMtYspQZo723aeWSkrN44qjZwscVxJ1D82x3HvfwpEfFNvtyUgzZttaXqcuCnxLd44vr41EQwGCPJ",
  "key10": "3ByiizW83Y4BvioLhcEiG98AnvhGaM78qUydqzasnR7Sx6ZiJTsxRfuqBGgaLdeaDaauokXKBFPF4VZU3grFei92",
  "key11": "rA3RPgs9QDcqLAgEaGaJMC9u4EBzB8DaBKd8Fa81qFQJZQvWLwiMAV8ADAs7ErZEEgtrDz3ZKcHRjNXYWVxuWkk",
  "key12": "5N9H3sL9ucHmiw8qW9rN1tHussTxm8j9syUpy7tHJKJzqxoWSA7wks8D2EDTeLLyLFVqv8RHeZdeTYKvykoWBxXN",
  "key13": "2za53R7j1VMmCgKaAFj5sjv5eA9cFyaKoB3TTtiXQhiYPDKUpNcmfZLrzxSKxbTMhRZrzy7xKBvjM9NkyT2ggm5c",
  "key14": "vNfhZt5FYXPE1AT4AoP1bd6Mzqgy9n5chuXAEiz25r4JTsWDWyyCJd5psKaeWsHqkCEFcMJswwvUzAVPoFHnaL5",
  "key15": "4QBnLBQuZPKDTmcnQGvFo3m2xvRfKdn8kTgA2iHReXW5LLuy2ZUj34ebk4ZWWveQUmLs8wC1nZA5u1RPB4Pxbvc2",
  "key16": "46Wq8eTdLVPuAxYxtY7feYc45EBfQMM2h99gk2pdj2zPKumn6SjpmBxWRyWpEcQ2xRsZarUiZy6tCMPG2opU6vtu",
  "key17": "3TAW31F7Fq4t4dQbdKHY9auDpeQCeEjhNfK4ZbbVCksxCJL5QDK5aHzD16ZuavVeAz9ck4xT6g1q1UVMybvaNGET",
  "key18": "4bwPcaGJDtSeRFJZtsDyqtHxhCWyaBfy55qYMuk3rRSWP7LRFDzm11FZ1WjqdSaDpUuFJ4bTN9paRWXHDxX4ysF",
  "key19": "5cAUCbyVojSBezTMJdSaxV3oGJHPiTSEbHuqNCJ1pEtFBwNkfdxag6ZVTq9ZzCWzhsjcHcqUK6UTgQRnp5C6KvBW",
  "key20": "3HKDVfQmoCPmvuXXyqVAW1Arf8wEmM2mB3it77rbKFQPb5y8BVMmYVMfn6CR8trnjTH1zirRjkgg6VbRVS2XKbuu",
  "key21": "4TzYV3oFL3VZFiGJP2GLubbChxL4BZGkjr1Ai78uTk46g4JmRoc5RXHQdSQCmM5Jem4sdkieFocXe8KTkx61DpwK",
  "key22": "H4uwzXVvwhySVe1sCZ2hTsRpweY6Q19r2CLouGnotsk6hAZtk4tnVFshYZsv7kJKoC73PWxtyWbegFkuMrEuSjs",
  "key23": "5int5F1Ror6aRiRRiXLFmJtor17mdc1CXmBgaeqyb4eBymtm6WeKvybunxpima2MYo271uKtHNu4TDURKbv3fsYn",
  "key24": "66tpEo3ohvurfbe2aJgLqdW4AhS28PwPh5ZLpjF8oZEe4odyDnver375tey23jZKDrHEaeFm4kLZHz5gNKPvd5Kd",
  "key25": "2DRVX1voC8X56mUYzBvhGw2QHYcArD9oHQV1GD1sPc39aUa8jLeTvey3vpiYVZjvG59xCTdWquCC5SmJcuX8K8zT",
  "key26": "Q1u9Ebn5pqkoeYcw3mt3uB7ZXC6bFU5495ERZkhmjQMPko1NfNmjv9v9vrK5NftrJndFiKkRga6VeWg7rwDR8G6",
  "key27": "5W3czQTjp14bfagPfiB5eR28H5cnomYF6Fub8vViDzFqVt3wA7MBeYqrQcTKVh42EUTckjYiXy4Awmxjd5X3eD1i",
  "key28": "Ndf3fzQ5nMvVMk1NEeWRfRyXV3bkMQHdXbjUU9HkftJfXNFgCGhD62CkUraMGtDQqZ38deAgMJSnMfpJ6R3tZ99",
  "key29": "5dvh9C6LQicTSNBP9R89WgcmwV8eLpXT4U7gJRnHLY2oc3fkKKt392B8oysHXbqua3ACYG2ndwmt9NKN5pt4dUvw",
  "key30": "3EEmVzKq8GatazyrUXyYD487mnX7yYKJJNPwpTezaa8VihbWDADQYGQSs7XY4WjASXCHANifUxpCwxDzGM2JZCcx",
  "key31": "jbhvmwHnA1R6xUqVAfufDU6KwWyzozDDRCvtBfihYcqqn3VTpNwjkCHYJzWyyCDuzqiEe38JzeBzYtcG7x7w229",
  "key32": "2FF6Ppv13LDWi5A1CSEKdWwyRMrbshPn2byjW5Nu9XvUE5JZJDNBeGGYxM4TZa4q3QNivsvCuUKvdouzBUCctZFz",
  "key33": "4zFni9Pv51CNPCkA3DF1Nct64JbGmHMHE9PnBuxYWihkQs9oubdqXsmTkB5KQotf2Kv6QVtp8qtrcoaapXgUsAFc",
  "key34": "4ja4T8L9AhFNad33y75F8k17qqcjmLvqvmiYr5j5jpm9PK7wpyavzVkm46vbrLNqok657cuhHtYdCY8ATBVAB98X",
  "key35": "4smDXedVLxt6pgWPv3kvTV973VKqPviTsWaCfjaabwi8pxMGBD7EHFxzdGYJQycXRWiGh94t3crW2aqWhiE9hFmK",
  "key36": "2jHLztnfj8T5jJr5pMY7pEujnRhZWxpuPuoGbQ445fXDSD2jAHcqjM7tsfh2FJ5qe3Q56ZC5shZqQL13yG9wynhQ",
  "key37": "45LkxiVY5C9wNSAL6LVaX5vcSGvHnZXiytXUXMDGpSPNWA8bvtLCxTrfEFGmRvRySTCQSaax6iqfWTYR8DSEVz6u",
  "key38": "6epMsqsAGnfwMHuvdAzndHR8AEfKGt6HvUU8EaHjuxMVHUCvqPm92Vid4je3amk7e7Eh5ZYTmzKbdJmqGKZXmxj",
  "key39": "3VtMDkbSLW1n94B82e7DWjEfLHP33tR6RawbetLLHFsffCxYD1Z4iWHFVEqaKDHhXV5msUZz2UaFvcEK2rekEW4G",
  "key40": "4BfnXCHWfAhd4roU22ZQR7kRt6hBZzcxiZG8hLLPrA5pfGJzPBoqyy9dvhMzxzzzoj6NkN9drmf7iUTKDcZa3EF",
  "key41": "2NhH2jg7H3RFPEWzbPp8r79kGLm2LWa4EAEmuzqsN6WguT2JXtuH1TUjhZ5vA1LMkFZaeSmyxovbqZSg3oYrDGxP",
  "key42": "5oQJFs6tBDVMuVTbX3hbFpUUe4uNkJEbSqHEEECqECqRGeTZQAAZoVcfx9a56eWMntGQcr7FCoFCpzQCu1oAkx4b",
  "key43": "453PcJLhjnFeMiaPBfX54uufHedYQwWn8PF5u8YTSEgaMDtr7wAbzyYSngvCubfnvMdmve91s38EjbmMkNWFtJeq",
  "key44": "3AoPtrePuz51e7RGKQ3tbF3g1LsyGsg9mpZHYWigm3f4obw17ZTuXHJB999oh9XnSqwD2oujMSASBQV5SywekBpH",
  "key45": "5PfoZSc6V5WFqznT3TSVVcqNJqu2txV5xJwtsfWDvVBfq6M8L662RsJxQEwFKvoN5uLhmoNoVdmxHfo7j4zg8ykw",
  "key46": "4WpmVfcUyXBmtTie31qBJcfDFBqJGrzw9cepFS3dVKiAGoJf3KEwR5RjkyXo2jRwsHUWXM94Vwj35zscWSRAT2Tk"
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
