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
    "3nz3Hkrx6D5dxX86bf5ZYjom73T89QBzKX67QXxpG1NJE3cu1GR4g8YV5VMUtSydgEPjQmCkyhM3M4AFYHRozuMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3soVb2WmURbmj9ASz4dYrCdQpQ1sQj36CkFXMD82i9sS1i91UGN1aB1pazirXD9W6RKWFaigUzKXES5zWnj94hyN",
  "key1": "3S61RkGD9dFfJt9EiTfkD5mtKz7PHc4q62F8kqGVZ6Wo3rYPn9ud2373iWfnTx3EFF6Lv4SHCkffh7XMaDQDB3kj",
  "key2": "5KGf7xaNwbhvQfqSh49KPCgvja84nzMk4hRb4wDzs6JhURiBLJxGpT1hVSV6AttXQmdfVaPHgSuKc1gAV7CNomCE",
  "key3": "4kKErBHbPdMHrdupTCRBupPCU2LuoLNN8XbRD9aPyKZdctoqB2fAxRbxXY4kZtEt3gfjiwTwvsdsMkcdKpsv7fSv",
  "key4": "2kKUAw3HfuLGqogLtMiviu5mt2xK1f3A3mJTEM7CpRYmJEdn7DJzaVWQmJNxhHCZFgApy8Vt1q2M922H85rcLvq8",
  "key5": "QzXWNJcd1CjZSab1L8drTsTG9tmi5rCu5K3z7AzUMrXN9PgACrNWPxRJMt3MeLnc39VepGpa295nBeZ5F3uAVaR",
  "key6": "4HuLsG3W7ovMbTuWtvk8yEaMLceKEzNad8SY3P9eAdcowoUDHGg32zfXAehUesCfHiTJXTWmtTSVSa7k1GQXJXxs",
  "key7": "3ZVjQcFmV4Mo368n44qV2ZaPzJrcVhvPxi1DRQV32uMdBsGZ1uuDPvGn25Z3J6D7uUcqwbHK6U3eJHZvxtDX81tj",
  "key8": "zzFte8A864KnxRih1jdZNBVBvAQjdBjveatUf16bRQE2H6XMcA3L1MvyjenYPuuLoRYTNEaCqTHWkwRjFW3Sm2T",
  "key9": "3WVt5FxTnfu4Yk7C2rk6nNdjo1Lfi73LEkb1cKTLVL92rRJoMajiqgwedv19BkdXSenTqntHd17pjpK4RxCjHqhj",
  "key10": "5RChAUq97xVKdPzQ3XvA3YPWvYdSAHMbWoCt838CHLYq3CJW9Pqz5KgkgjAyEcrSGLRbEVC2B7qvG7YDFLMd7t1R",
  "key11": "2R62Dfs2cyKLsU9pUZX2vVyxKu6xQtKEGCPPpWxWiLLdotrKXyuXd2rAg5b67a2rV5CWXuC9YjUWHf6k7aJ6gvcV",
  "key12": "4uRqNoPNCmWAMAEDMqdpSErNrzufRqmnaRapBCaFMBYrvtgwYDPsJiDLkb1sSDq2bAfGoBewjGgoKBMUZDvyPcma",
  "key13": "39jzhnHjU2thb2CBBf5A9ofvn7CREoqSx8qys1YqYjymTBAgYpf6fDe89rmJJGbKPwjtRnU5L2Tr6fiUAGoeQYpU",
  "key14": "4FoSHFzAyyWa4B4RVtL2yiCxH21bV9GoehKRkhUQC7JcVbwP5PyuorXTX23o373CWbrBNwKLntqS9gs1HyCxgRRp",
  "key15": "TQiX15deJvkHSge3SzkopXvai27osXyxXvtwQL6B2JRfwKuFh8VhvL4UhXsQ21CuGPsK9yYhv6GiyZaDBNmNGL3",
  "key16": "5Kk4pkZsvGH6kKLngZ3aMUdxFgvnyb3PpA7QpXi3fafVCNXMQUv9ARqaJCAMs7LxbeDTQMatMGjCjLwBseau4yje",
  "key17": "4ourjVVojpbbsdxT7USsx3hRm8sApkwgzfnYpvD8FpZUAdWf2ZvEBzmi7ttmVMmrBj1snF91neizL67RcU3m6w3X",
  "key18": "4Kg89aUbMJrBzUwaPXPaBLu4pph6VztkBzBNBhGtyiD87RBCV5kmKRKF8pGP5WJhFZTG43S5xijPRyBYfwxmBuF3",
  "key19": "3VygzCQxobxaWBCnmDMBHRjHguTr2396UdKuCH8spLtWwAJ8zioiMUuVs6P6pX18XkFaXjsGyr2d2fnLbBFm2kZm",
  "key20": "4ZF8j4GCLQU95f4mAZGbMr3j9dyD5hqroQxNmqkH7kZbSnyghnUmf3zVS3GADHMTqwLNnpyqWYb4qPRbfFUsJHkX",
  "key21": "49ejcHnQC63WcuG7gPrgxaaLecPVR6mmPBZT1E6gZWDx1pnFhGMzAPsLTMtLDbbRwg8d4edyiJ9A1Ro8gD54h9K9",
  "key22": "8m79awvm7ZSvzRyLAMjHcXNDVi2WgRobZKTCyeAwG8q8bjzuJL3CiSPeLUgMiyCzCJc7LvqsWLsMw9PrTkUJQyJ",
  "key23": "5mRBCth8HnF25TqFPFnURKWz4Lu91MrwPBr6QefxSTpucPfsvF8yAu6uuBkLpcpKGD4N1PGSSTTzRy91ZvhgGwH7",
  "key24": "3nrkEmgjJf7kQgAD7JzeNNqAreRzeg52vYjALeT3R5eZBT8xkfc6DW4kX15QhJd3aEkdUS76vR621BLw3AGaTjMh",
  "key25": "2TyrXyrrfjKgWP2ppRMMzWDt9jfh96ScXdbKCVNNApK2BEHpgAsukxMxXMymvHDqNVS677S7Tvy2wNpMVXGqC6uW",
  "key26": "4fmiwgHj3r7DmBekb2CkfQrf4EATAjizJLya8CSHYhiYij6kXtdGHdkNTx1MYLuMS8i8T7DzBw3tPoJyUsoKFuuo",
  "key27": "3Vvo2dU1NkjLcVTNAa8Wnn8Na2ZLdVhGR64AcJaG9vqx2HjBibauArMscuYj55fNST3bcivmQr4cLofsLwknezct",
  "key28": "299oQwp1owhbjkdXTkaC4mn9BLjqawtqXC5tHzNroqkm7ZmciJK4vXCfPPyU1k4L4y9XzTNvnTiWbBfJqiU4vF3i",
  "key29": "513v2iHtYvUd6MR2kPVBgmbWaLzvLHtpgP3wLFLxcFjeCt3vHGYfuykcRu1BtDSJWbjQ4iTbcgo2itRJPjtUT4aE"
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
