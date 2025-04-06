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
    "3DjT2oBmKTHydXk6NAwqV88ZgEYipdE3owbnDcpcfqFeBbgKNrHmKaVvDTg9HnkmECDkPxKof5Q5bB5GDNUX8q4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECicbMaajdpvsuYLBH7WWp14Ba96hw4A3YN8hmgRSBUxC5zsNEpoeqx4f62VtJTGTZjKu9g8pFtw5k6LZ5cFoUf",
  "key1": "2x3G6puqRttdAjhtbXHLpyivbrXSX5W7Nk4DHUcSJPf2ue3vQFyccXHJbKiWsMBvQwkdSgRvpbUxdojPoAhwKky9",
  "key2": "5X8uNgvFQq75vLLXSpMZPMDcLg4soW2es9DyLvXGks6VEG9daqmsNyBHypS9oG3SMdbogmpc4av9ydeB4PEDymQY",
  "key3": "2j5ip2QpShYUAyes13UwkA9XHR59BjPUtwt6avJbEvo4goZEDiiu679YPSBiTTYkQ6zDo57gBTSwVcJybgSKJMmV",
  "key4": "y32hAsV8n3tcSPH5FAcF8DK6ewRNpdDH1mFJmcyMbdTRoWSGU68WY4DAZL3kWvAa8pXbbVZ4fJnCaxjhh1HHjVP",
  "key5": "48K9zeRKbhZN3Zny7oTuNvTQgQ79weKKiDUe8fYMw5MezR78PLuru23wzLmt3VGeWNQ6vL2JK4zSbws8RH1C9CU5",
  "key6": "4aqCGrZVguNTf7Ms2m5ZuqTMAQmBeLgFyMUZ8K5CdrFFJmUAb4S4gMkGBzBMsZdcXsrvoC4MYmoBw1b4J4xsDdES",
  "key7": "3xYF6R3He2fddLjP1v28dugnRTVyXEkCmwwHF5taXuiRKNzctWoYJ9nTMXjDtvUEYkLtBo8a5WeM6A9wPEmqspei",
  "key8": "4W8iqySA4D2PvSNxzKdJbDF22K6XHKa3gwFk2ARJZa95yjzCgnnPgy5fMArqivV6QQQGdv9rLttRLVjNS6RGTH1a",
  "key9": "2gBdcvkXyYKGEnQPLm4Nqrjs2yrdQi1anDbqXcDHYY3fXeufhnNGQAbEw82BVSp2NUBMdx1XKbD4s7dXtJpkHw4Q",
  "key10": "2dZcRuktayped8HsaFHywFXWkfk4jbkagzRWmNJ8gg3LrSEm1Bv46n4E93YX6ZMB1y7wPoBKPYut5PqoNvzdFhja",
  "key11": "563xtKXdg4shoY8pGZd8UVNjZ5tQcS7BMgGarwbbKTqmWmvw2mfjzZDpXYXMZMoXifXu9vM1ExRAWdYLYD2Mjtjr",
  "key12": "2LN48QdoMaA3tyWZ9GeRf65zag2eNGbttVKwZcmt4WZoNQ9xtUsPkevnQb7NzKTmZABmqHiZabM3PgrjP4ba4bqd",
  "key13": "5GzPyif34BX9Nim9sLBU5Dk6RABr3QRYCg6HVMEVctiDTRhcGx5GswDQeBvoDNmr6KHRXXyauUa1f27e4viA5Fmd",
  "key14": "4fB6gRVhMLkxkpjnr9nmYbVoXvKM1pYkkWjXH7bKpS2PKBW5QBuCCjSEhAKREwtok4bB9bCErrE5Nwdyy9YM8J7X",
  "key15": "39y3ws9gYCphdT8YV6uGzC6yNqt9qrrSPXcyUz6M4HeQ7eHfWkHJj3iaeHDCiaa7Lvn37NCHx8N4DkaZFWkWmrHD",
  "key16": "3fPxPaF53Eriakvvm1qo6BYrCrsUXnro4gZQYBrLuZQfxzfm33wCB5c249f836KAzR19iRHPfZiS7i3bX4Jy6eTi",
  "key17": "2ZmAsdBu46HqfGeBeLSAsJY8moatCWMNmrguPzVyaAFrBYr97UHwgJLRptWsLmdTjFGASkWRCo5rfYJ9QJLBczvw",
  "key18": "5s4aFSueSEQTsxLxczNrfhAaVq53iVDv4sw2ryShwvN2gL7qJ7LXQU9RWARTMMGm8xoEi3yWfTkxjZdmQ6waftYS",
  "key19": "KoGp9QKUAugekvfcnftpagidfxR1JB2tFJZAkyhHmZxnCmmTEkDRPD83e7F8mGbESJG3peQhpnzc8i2ZoVFWoF7",
  "key20": "3dVxKBDHvHoWMRrGnw6hFU4vj63Xv7GpaMuLSQfVNc26ijBX7ncDZEXtDg31FwKraJRnn99dPDoJbGijkJRmQjKW",
  "key21": "2nAT6yt5v5vZWu2utKuaivL5esyD2HKxewwmLuJi1nHeCbc59dvkTLUHkAEuM7XHQdCwKsTtkKRPjCTrNShQMdRi",
  "key22": "59jbX4eWSkPiGLKPH8BojvGfynuK2kLkKHJMiUPqJ4wF7JFYMTSz292Nx19MyqcEm4mKa5Qgh1VJSstVC86aLVyp",
  "key23": "58SrAZWaRvH46L76vVg1CfnkMrVL4grC2UUxuqgP556By8pDVVmjL1jYiWUdwYVADpCp93AjKACXv3irEcSGV6KV",
  "key24": "3jid8PCKJCGwLxHRT3QcwYwzLvNDhAw3y3EXorbKwR9saJDhkenfH913FVanbRgwy1ZhKfwGTuFV9s1tj9ymyPWe",
  "key25": "2ihSdaKyEAvjw21cCPi4qRSbz64rDgEjxL2kPhERGVHkkHQrxUH4ETpqJBbiqzMcJ4Epr8tfgFnAyCF3hZGgUaN3",
  "key26": "43JpFmZJZ4TRdRLtnEXrAo654iGXT1wSgbZqkD5XNvW6wraEegBVBv8HkMCsdnHLPrafPA6AuEJWawjRaNBK5ctc",
  "key27": "2zsyFtXUKKdc7DTDbT4YFjAikJ6pNuaEXnZDbsrv8cGg5mkmBEkiXrfd1cKuwLQXJ1R7hw9tJnLUjLZ8XYFQiBVk",
  "key28": "468k5UGdbEKj6A5Ep3aExf8EXP5zNFNrTLczbMBLoRJSSxtA9DZV1YRoWFioJyTKL2Wcp8fmqpseVsZLeuVJDZrt",
  "key29": "3RjV2HJFkgxGVuX4onN8Y8MzskpRWCZzQBh28wcQsWEc6uTA2JgDgbdAUkUjmFZeZhtttre94mFDHDNZEv3zM6n7",
  "key30": "Fg1nRA4vkAnjB3g6xPV6vo3DLeBNnMi5Sdu5bhxbHSFwFcLBndhL5vTZ5w6KkQW3MmNQTZA9yTr8ktcksRBuQnW",
  "key31": "5Nz2fSAsLrvv4KxxQ7jvAYHfgbP2siZQqUuU5w9YxAzNhnbcKTYBuCpgoWs9qFWzakbimRzC37K7oR9SM2gQ2Khc",
  "key32": "mFomBN3btpqHnELNiBHvGJpCHUodfm1dmr758vaNjUg2bfLyjJ5YvBZDgwXURxqwCDb6hi7XjsqSxK5x8npDEyR",
  "key33": "2eySYvxxUtLYwm3NPU8zpQycS2PjZFKo5FjZBVVRmEh1DVtYZnLrEtAzLPrRp9XcBDQK4w7QSX53CiHHnkbkwQ6K",
  "key34": "2KHbHnPFpZcQuMb1h3dt8FrGKMariPCVypBSXBUCSsmAzzfsggqSJwTS1AV22iFxoW6rg2UVRHYCqWziiBHBLp5e",
  "key35": "qDnMUn8gKtkS5esC9jA9Xb1WVyTNuq2TUKZgKWTFf85SChcXQCiuggbGEBu3KXa72WHNo7CwrARjLtakpExxgoY",
  "key36": "4HEBUbSeAAtHXER7CY42ZZc4PaspMHyRFjTX5BJ7B3jM7bayZrSUVJMEHGds6hju114HvDwmdX9dC74wkWQDZBb9",
  "key37": "VKa7b4u1ZvK3uDSv9DWUrqdGYTCBY6YAe2QoMqGsGfio5vbgQDTFag1BNaiabgJX46FuxDq9MrfXAuSY8TUAh3Y",
  "key38": "GCExUgYE87M9ZPfsc3mpE9jVg4cm719D9Abz6oxjvFmEb5fK7MuR5cuVH9RyH3dMFJaDW3wMdtTYyLAq9ke38b7",
  "key39": "35NmUk5QyGPm8iKamCasMgZJsfUhkNAGnAj2kTp4EwdxEWGnkHe93jRbmQscDJXQeyU2t8WGGwcL5SNDRx47hDs7",
  "key40": "5tYhn2CyBcKNXq6mDwSrJtcVp2WZdRhjCBFbF9Zw4kETSH6pdRPwAkhia7etzEL5sUxKW9hZD63uDBo2KMEgTY1v"
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
