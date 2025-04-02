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
    "3q5pprJC58jifTYWLkvMEMDE54MsUZXwG7QCGEY1ZVw2zx5mBKMhUaEaY4rZUqjd3T5BcPRsmmvbmiiTZQ6LUrFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3idu3qGx33t5gsrugJMtGnTLYMULWcLMAuNeAfxFSPMaijZSS2VQp5cSctDHQdaYr6Lye2DmCurqWnuTRGjUfq7Y",
  "key1": "46g8hJF4ygpDb2F65sS4qbqZZm5xtVwzRp6CocSKUWcY6GXDNrpusfZU8hsofFFV2VoRPSUawmDXQSY6J5ogDTkS",
  "key2": "3EcF4m7E3WbCXwUfaTnvX62NFb9yKRyE21rwDwa5PVFYMpiutdxSVKtWrDXocKJzu6QLJc3Wc7NJhkRoqLoXsQhC",
  "key3": "5gu2iNewKVnnt6ydcW8Qyga6tcyG7mZTH9kVSLKJYKdccgR4veCqCS34G6RAKBm7kDHTWiUBeTEzvdPwvXCfc2pg",
  "key4": "YcR78qokuguy3vgaXK5FGRxer9JUyAVNGiAWnfPjfod2aFWez8QDw6TFb8nK4QJN6PoTXdHYNmZ78kiuEjuQese",
  "key5": "4LAXCYym3ej9wCGetu4B6FSn9GEaF3u1L5tA22knFVzNqW49syx125pqSz1KckESL6r62JkANeFkwcHbRRsQ6yCq",
  "key6": "3PU5L6bwjqzfvMe9BZskLFruG18BN4YSg4QvsbTsk815Ub1ZqqFEcSgMF3zmrKeKZPordwZxc9MpwgwEou6J2p1q",
  "key7": "DMoepWATC2Zqkmu3RmsHwMeajykPejWbYQxdaPNABo7SsJQ3VwnrtrJjsaKqipTkVVR1Q6iQxkHbtP5rd8Ptiqi",
  "key8": "27iniRLwVkqxg9yji1991YtHaiAPpbuv2VF9VeJDaijnC5q4LV938dyxwQZeUnEZVtzwwE2HbDfu6XB1uXECXbc8",
  "key9": "4hdG89J6nya6cy5Ewfe2uqPypH5KBUPEGLUa1GrBm5fsphTLernUWegWhTKT6rPHZ8jbLm8iUnSKzbqP2BsHoc2P",
  "key10": "3R4hwn7vEFz96EgpNokSjXH8HDETbWQDFcBeKt5TVN9imD2gbvB6nx6CMEi7cUUypWVXnruAc8R5TbFfPRqftFP4",
  "key11": "5YpgqRLvML67oFcsRdgS3kS3G6WsznuzgwwY7bbn6kBQbViTvs3yAp32yXLsShjo3i2hzABrNrqSkS8yWF27RnEP",
  "key12": "2aJXY7DpLAn4CX6xdjf5cq7vp5ThXmDGBmg4EHH9xgVMEBwEUAaY7eEWh9TquMeBbhRknVMCeZeEYAvyBG5WLFNU",
  "key13": "23gEbjnsh1UpvSHYeushsCacPHwoECXk7MyBNpcz1AfxyDBDZn3A1gVpne2HbruxZkWgqb1y1jS8qcYyRCnJU2r2",
  "key14": "2SABWrUJM8oRnjdDJfPD4h69mrZDNhttHL3oySfR8iwZG7vbvU4QQ4SzecsGJqgLnNEvqnb9paSSSmicCKkXPyQh",
  "key15": "3ZrtZGpXxKKHmXMhHRiF96N4LAhRWcwKcv6FH1YQoAKbNN3kqfSn6pkSKuBFisDX3h368fcaxsPpGaYGSXu7NtWU",
  "key16": "58XiR4AeY5uAM5gVJt8tKFitTe9HN3wp6zbo71tMxpZFmWLYPmYhb3PyNKM8tFvoGhjFSRK6Ma63NLZ3TAafn7DM",
  "key17": "R5eG3fjCXMwPZ7RGKAEMRcsJqDBiJ47osFmK5WrwDaCB9YFjnUrMAqqawvzJQWkmcgeWUz4SDiKo9joRgTJtnXV",
  "key18": "ycdywZ46wSuEcGCJ1BDaMxviMLm2fZPoiCMkgzYTNGuFa3iRUJVqMA5Qx4pvJ5gK8WsHGJH9hRfv1QcuKvoTqS6",
  "key19": "2iZdwfRxwobpPLnXCuzTUcGnG5crD4NAj3KUZjWrCiiMVjT7eKiypLJcoosQotPUBBXuR7NKn3CLJ8z2kTYZDiTw",
  "key20": "4f9T8Xs1MQcL8NHgHJwNRUoyHwuQXsyz4YC281Jhvft4bjuejAV9fPP3nQ558Zp7RTNVm1HjjjAz2UrZ27pZyvwZ",
  "key21": "5fQ2ySjeHMGoCx8Eu5PAp12H4yXbg3ZMVaDYZgD6fMVMmob3bCRiaHJSfDH8mvEQVByhRKc33xZJ1DD86ZaxWQRR",
  "key22": "57UJ8T7FDmikQRmTzNj7Y3rbxTMWeq16FPJBNTW2dr4qYFnKYexyPriPti3bsrdRHHCUNzBY2eyY7LTRNXMcDyZJ",
  "key23": "3tho4DFJfsGcbdPAp7ziK5N7AgmuwCKiNxapx8x6U42twGXgRoghrL9MRLqqwsT5RUXt7Yv913PHDvuiAeN3QEJD",
  "key24": "aKFsHJaKSnH6LnbQqCyUydLdAzepWrRBfCKnJQaeUXScerTqFygavSMX2JQuUsWsADaEH3krYpgq6VJeuShiQBk",
  "key25": "358tyqDsjzWRJX5N96ymL3UyGY8od5LcJVpGWoB3293L9FXyrinHXzp7Tsnn9bXz4Bh5jmV9soNghjMXLNgpgLrF",
  "key26": "3VeHw9qiGb1Ssze5JW9cMSiCYhb7SsGvgfyioqdyZBJsKrvqjrF7nZe46JRequXXyAh9xTq1LAFiSzpLjv17ifaU",
  "key27": "4nqTcHSV86skfJuWEuFPMtBB4hkJ7qapitTgmeaUvQyXwfwnRxh5gpvb77qzxAQSqqJnkPQoxgMvzVcFVHpnN86Z",
  "key28": "5inVrzDQVcb2eBJ6w3BjAdb8EYd6ev1QndsBbRcSWFUQw8jSfrPBXcQU52diDKPPBmX2egNAwT3jpBb1GhAZjndP",
  "key29": "4TWSob2uuw6NrsMoEsr4cTvrjBnzrFtGUSR9Mooa6reMXPdSbnFPPuF3zDtXmG4dJCYzKLJ1yM5sx2rKyZdhBNPc",
  "key30": "5YTJE7d78E1pc8LrWq1kYBZRKQtVef2WC9ux9UKdmX6WbgDHPE1HWWbBHKE3LCKPeyJSSAL464cVdrQCwCZFkEir",
  "key31": "4zX1RyqUhoZmDKi399BYb2kWtDn4ZtQh4j6QHnCVZJm3gMbXkqYP3pfD4ShuQo3thAc8rFSbCZiTvfmJEGjkGaha",
  "key32": "39LU3BmBbDnJouyjVJ1UbsnHBnGscLxsiS4TMRXaAVorzWiZbrgKVcniMQiZKU9xVgFcVbnDiLiwhXETsBGnU8nj",
  "key33": "4Yjqs9ieg6f1TUiP5h1wKCopNsi2KwyLVwVs2uh1Vt7m2C8997Rs7EtrGkgxWg1G5Dfor5PruVGeYc8Sv4ZiMj1A",
  "key34": "4DSvzu4JXdZ5T6XeWCNs6XNBjWrHtXdTyNCEqpdHnNuC9nHzP3Zdc6tHrMHUnL2A4DSG9JkYLZx471AuBmcurbVi",
  "key35": "Zns9aneJTnzuTv5S4iQKsFUcHkuf7NK3nVdcdimBFQcUb1wN1ogKHYDLJ7RkUX6HpFuNmy58NKSk4Xgpfu1HzrW",
  "key36": "517CV6w3DM92XX975nnxLXeHASHFVQ5LpimPbVGkJb117qQyKEbZAGKGgREiszBRNW8TC7aLD6DjTUNzitreo34n"
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
