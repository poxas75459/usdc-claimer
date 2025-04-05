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
    "dSko4dbxpwfarJRby4V39ymiRdP8yUXp4mJi8xraEEtxskn8Z1je1MvbGZcNCwBuyheecCSh3U6Awkeib8g3WNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v5SER6G5Kb7caAGgYnVgBghPpeA3EYLgGneuWfbwGmEjh1zqGJ6b1ddNmXQqe6kz1vjKPrLZqLELdRhezak4qnR",
  "key1": "3aYTgho7P48Uf9xgF8ATtHbabqXQ7kEoLfoJNZWCyVwweQvj1zCC34xv4oUAEYaXFXXBQ2rzajpS6evTGiYBdZ1J",
  "key2": "3R6Y6MjjUPrXumMVXm9cZ8QNQXWg8XiZPJ7ncz3L6TSKQMLbYg9iUKVffRwwKQaCAoxawQVxvBEz153UEB2fgAyi",
  "key3": "2GLSn6za7yz7Ds3djZRHDXG7vxqcprgei8acdSXaKCYktJdw1ZveYAiM6dccd3C8KHHG6EhLQeTgsLLwkFtxnPSR",
  "key4": "23t2S7kZtcv3ZCz3hQf3wma4NCV3bnJck6o6Vy7bUXDuZikze2V5hdnfoVcPNTVXmxqSexgTf5fhyYLmS6yfEUf6",
  "key5": "3nm8QfN5rZDf9vmWi6P3GZ9XvLSvEW1Hiaqe9nTZANp3adJD2trCUbLG8M7x2XDvh2pqmkYQ7q1crbCgdTzQFwX1",
  "key6": "43MnjvNW1HLvUswT4U8x6YuHSz3e26PUkuZSpyowS8bpjQwKRLAKgjgmknLLRZ3y9rrmRBY8qHnTcZuEd1n5Wtzg",
  "key7": "41hMu2eSkfddmc8U49XdZFwi4j6rmL7ogEbJjuFDjP9ahZZMaBhVSxntf5CkL2t6n6KVCsaDL3P6KFkW1mRYxeSH",
  "key8": "2roBqGqUG9PZmq8ZdnbDAfYsVt8cFMeUoToe2o5DECJk7B4hwWHyd76oSs8nWGkojoAjLJeunH9e7Wv6A8nnFBqk",
  "key9": "BSwYZ7Ue2rHztwVkKh1doqdwECLN69Uc124zSP2YQJ6bu5Nru3HauG6TAStyMoD9zw23ijgz76Xp3QyzTTqkwCj",
  "key10": "2yQtKhNhwFvFiQeQevb6k7qu1exmPqHUDn9hstXezVnFhkz9wyoWz5LxoBD3WfzGvKoKGCK7CBEFEAZfDJkDiN26",
  "key11": "5yaivWg7ARTeEfEnWNPKHL1z5RibBWR2HrpekHyfEpaNnHHQPwQ4ZyRbX6xauSHr854RXTXKmmQkndBbPM1eSwz8",
  "key12": "wbr1zoNrCV3p3ZRkeRfWD5eSTVxMURo5KZdnVDxip3CiNQQWhrBQiNRAdKx4jiMBArpKGWep4CWJ5nSEqPc38Wn",
  "key13": "5fm14BAYhJ5wZoNiguYkLDXCktS1xpkhwtYfyzUEfw6h2hSy7ruhZcZTUNT8cfqRw4QKujZZnRDNHn8fjJnyBuEa",
  "key14": "5BhtJTwdxzykgoZwBw3G18c3jfU9fC6DRSDS2uiFgdptE623N54urVqHczsp8AdPP4EZHPMQHH4gUPvXMcnpi3nw",
  "key15": "4oDCfQna1QjMnoyeRZqi6HML9L6V87pvjJxdwwzhGJ4iAmzn3XM4RZfAgQgfzNW57zpqe6SmdZYxN6FFQUez4Jrs",
  "key16": "27m5LgcXXMpJQAmzNGKptKjQfBqd2RQTdiLQDXv7drWbszWgwmBcnQWBDdTkVuWNZ1DF531m5JE6VY4UXLx5Vt1B",
  "key17": "2Ra7W4PEnHNWsyDHuk8nXQzQuobmfCFgvpjtaUAaTuCjpLwdopRAER4YdJ1QpEEC1nGExk5FJgFp5rNvEU63sFh1",
  "key18": "spxWnrMirzuqieTq2uK6xwJ8iTAw9DdeSgQPQprE8nXdamHSdrZPq1N9fFbndarAKLDBnVdsiAdkH9jTNcdM6wo",
  "key19": "4eEs1Sh3sVpVmWwc9w16YDXHJvNoPAcbgKm7sDAyEiUuLm2BKEz7j5fyoWHXXk7z8TSTyDADw8NYZ1MqTdsemNTS",
  "key20": "3zw1J1YDMUeYzN8EWi6V23FEhL23UVHiPrLub6FFPayG8s19MZyz51stks9aSfxgwfAwQfdQuRbNboqWpGScuomY",
  "key21": "3TSCJMnFsra3Df2Q5yemT7s3eRAAoWWSHnhutVn5SYibL3RhypqyLr4GDj5pGyV4LkUJ2ww7kkGDEVFiiyAeuGix",
  "key22": "3pxsVzF3eTYL9C5dFrWv24hXNx1q9UQpuDSdpS8h6nG7qGuanXfrVqVp6xBccXeTAsPiNYP71nBkD91uC79BwkCe",
  "key23": "5umPqnCSPMC5qKuogveJcVojEdQcAaZ71VZoyEbn9w25jD7hXy8J5Xin8CQ4MhnZuqaVrPaSNv1fZqXGJbxD1TFw",
  "key24": "3sEKJfRaL87PZfVfidmJNfBJdJDsaem2hTYWVqAEXijvTkQQFS1Mm8YbN8MdSDrYZHJmxySMkXiJ3RESDWxM7Yys",
  "key25": "3AP9o1TMubiwKZxZykEabB9aG4QFy9cFd4yk7FCoDSn8u2cbh2SaChJanuHKzDYxpTfwv1zdhRMb1svZ4s3rUQCh",
  "key26": "49YiaRkFkwWUz2WheNStGf78Aa5C5vmaYdHZsrt8tG1iU8XB3UVsBScisapBjpQ5as95XtJnUSTyLvjb5gLtXcoc",
  "key27": "3GQh4yQ3ScRU28adfbtkabtYsYaXcyESSrCc8jdGuRqGUcooExnQTegCxZc6kc1fJsLZRKEe99mHmdixgdHFLa77",
  "key28": "v1QysSCPWfB7jAk33bXm5Bu6uA3DgodmcfNwEjpvpMcb3GQLNpxHhgRG2E19M4jrfmCtsWBcgRX8AfNY9diPPea",
  "key29": "31FY7frKJQVdbpWQyhQ5nhKXe3La1ydjvfjLRVDw9DUXhTPvzx5qM2LZ3efmRGGPJZiyCBJowoA2TmYF9MMhVmy5",
  "key30": "3Sev1FqB7GFQGK33ZazkCqTyuLgRU6L5puRL8dZqgXMyaxnTAQqo4oHfirqdRVUQKsrnbx6H7tZd4h8W6fy1sDNT",
  "key31": "4NwWve2z9wBNPWzGJXmeABnc5ynvmW7T1pt1WvYmsaWo14oecroywTCNoCi4GpjR5LeGjUoPHsCJP3SC6Z8TpJ9k",
  "key32": "2HB5ec4wPfTrLG9GRefMWkpVPRUcU3gKRFX4MDmwV3YQDxx5DuQWUfx4G9WiPVJxw8DmtW3YodE5QqAj7pbXCv3o",
  "key33": "4F6SBFVT8RLbZF9ptQDetv73yb6EHwuAjzRD1CXMLTimGYfPmDsVj7YppjCQYXg3oVgRHKJtK8TWxSaYedH9eV1k",
  "key34": "5NSUffecJz2cFjAE6yreXthzan6aNHTxAHvnihSWYSPGJLajb9Z5WmaagBBf2WG5adExpWB1rBBvcPtmkDvzQKUN",
  "key35": "41PBkRw2whwhueDoYdnfdrjuTyDJjUZ7girxKY8kWDLZJX2zr931S7vD3DQj9fNSdZ7snPJSrRL4L5R45LnVwxMd",
  "key36": "5LxU78QrhjURHDnhgsjeukksPwaBsrqePTpm13n818vPGNfoqSQZ4Ukcth9wpwZj5vpvVsAWrUGXDFiKaPKH9bcv",
  "key37": "bZFKaAuAxtdSUN1tA2wMvryH7HnQgZKSL3xa2P5y9CgcPxzboiz6qPoCvmr1BJgm2RzzZj4NzXeR9nZFKJTMtQJ",
  "key38": "31QAjafWoYxjvA1CcSqhLSSzUri4K9BPvnteV9qvPvXj58QkUD9gJE5k7wusVQRK18QBciN13Dxg7y7q4dqngqkX",
  "key39": "VkhZXWuZUwUac1ptAQawEPA6DQ2X8RGEiLSyrcdPtepPCbTJ83WqBzmNvsFioqNGzeYx835L8NjfdUw5tgJkjbt",
  "key40": "211xPspWgU8gV6p1Y22YwiDD1inkUrFtrX3LJ9aiYhN5u4yw9L8Q1DYKw1TkVQnF5YkzYbKpVmJmrrjen27s2E9g",
  "key41": "316Sa7414AsJraShAZzwDWdfzp9T4GuD4ndBsEDE9EbjdJz55veAD3uKVMSvJhh1CmjPmpTNjzPru5Xny1n4Nww",
  "key42": "2ooMzq2P5TRZ97E2PdAGBppUyQUerXXwUVydVDcqcZ1reN3fZfZWwpW1fLdH9Zf4C1Syg36zKAJ2rBzmD2JutCEZ",
  "key43": "43JS6MACZxggs34EK4tSvDsYd47qhjk7YAM4KuNkFdENPCqBymqGmrsNbR1tR7YF3RcxT7M2xFDwHsvGofjYmocU",
  "key44": "2nDxSg5zj39T7CfGbdMKGfp2ZXf1Dg4BiYaBf8mZcC64mpaVQyw2v13ENKjk182LCypsSCNwwinVW75RRHqmkCih",
  "key45": "5VpriYgYVCmj8YUAEXFiDaxskyPLdvVzRCDzMXy5MN5TeHaPxSzwTy7rw2Ri3ijnU34p5zNigqY65Ua69sTMyAj",
  "key46": "3GfSP4sTahUzXMivDvCft8dZQgLoswTV3AQD2SoLMfDRKSkwYyonNxUAUQNHaJwSTJNzq3rsZzQ2wxarSPQCQGaJ",
  "key47": "5FgNLvNfruqi1NiWky6x6itu6mYmt9sahawPR2Qpun12nousBzsviZDyZGiczwY5he2XatCK9Zsk5RcipSwDKgUg"
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
