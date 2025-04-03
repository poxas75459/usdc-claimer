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
    "2zyvTz8TEcjQ8vGz1rqUFAz7GhuFGPdy6Dr4mR59N9K6zGyfVJowmrxfjkTtFkYX5ENBq2vGkpPfLLdtaa7McRMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hyZQeTgub3HBMJtM8XCuLgixbC4UJoPUWnZFh6maTDj5RCfysSjkim82od4PQW9EuCGMRdGyN74WyWWkueSkHfB",
  "key1": "5QESkxfFt83f9qBDidjE1KosTwNJvyRrhp7u59MXXwdvZkaJ15PwzVqUE6i8Bd1GKEJRzt6CJqKNr185Cv7CdRU3",
  "key2": "2Y7sHM6qAV5Wetqmd1BqvH9atjL82CqZMCNjtKwJ1vHqqor3dJ7sMXpjLPZkQj775ut6MqbL1tSrNXcaeEibcVEx",
  "key3": "S6cy4DamEY89NTaKbn75EfWjSzj7ZqdHupdkx2T8xDchwbfCtHwjXnnpXtWceumCB1XHBN4gwDLfYFtSZct56QM",
  "key4": "Tyg19YDtjZRbDtuvcveB6BK45sbyRaTTDGd6SuX4guFBhEL2UJRYrsQo6PhySLXAXeFndYb9x7iy1ES2dmUDGoB",
  "key5": "58zvxm2EUw3nTF2jijQQB7W6Lkyv5wyZi2271wpeYp1moy8nXjsp5fG9cFri6FiQ2PYksecHn9Qgis2pRH2KhVqM",
  "key6": "4i9FKxAp1gt9BBdSTJ3ZH6uFyhgKhNPfdfcu3hWAykRWzENDEgqFrERkaBXeBWrU1rjn7vBcjfjyqyNi5kJChd8c",
  "key7": "53DzjWtor6kn4Y1Np7aHFYXJbLvsMn8Ty8Y89CpsJT1KazBbo5z7mgG6k5iqomt9CXQhdHqU4wjc9z172Dq4eqx6",
  "key8": "4ngMKPZ8QQZ39YB4FEU3krTaWGS2auK5MNY1Y88ZvuirhBhcp1JMc5t9cz9prhfzsnUPN3t7MUUh8Vgo4aqgbBaG",
  "key9": "3Ao26UBfj65dLetL2woHrxMWTXUcEHLMBSga6jUL7u6PwGC3j9yYFv8EXaWGRzzScYBWkQ1CVJtc48C4EbKxFgkf",
  "key10": "61QSGT6fupdghQr5zgXfSdUGGjHq48BomVnvUSpKhCqwL4RzGaar3MKKEjXZDNUnH5vmM9JGV8evvQ7FiXvWCswd",
  "key11": "g5dg1mEKwNme5gsLcGSS8k7XthwvHCV1bwj9SR6sxSevKEocoGpxH9Voax5QMHLogVy5yVFySmVjJXKsdvQHrmw",
  "key12": "3Wwc13M2Qp3JdG3gpRhLnhookfZkukMWGQe2JRsCNJCMdZUBmV7Zc7swXHXQPyraY4wSNTJGRV724gaavKem4qkj",
  "key13": "55yBggLMR7ftpii4e2ad74eCxu1ZQKqsfx3codLR9LKnwH7AxdCdDWiHfp5ykppbqiVLhwUZhMz3GvkVqDfqK7RX",
  "key14": "Jq3XdGGWxw7AvYj2u4g9rySjpvH7GeaJqGHjE9edgZNz1astEbXvQjyh3QospZYAzGWdBFJC89cPWmHeTeLpPGx",
  "key15": "2vLax1fw6pFasZUPqkyKttTrSviD5MoZbCA4spX7nYYXi4HMyEzP1EVrDvXReCMv4G7tY6BGyuHHahEi6uBxZ5dM",
  "key16": "5XUoTA7nGTS4pgMNJMYDWfXDHz7n7Ktzta6uRN6xL14Ca3FgCrrgYbCNjNVcXBo647472QYLStQbCpeq7SiV4ijE",
  "key17": "4H1aWXecH1AHt1jaUDvKd7EXcebvmYQthFk3v96ZD4G5NkZ5LfeWo1BM95tyypcKrquVeoFxDHAso7Lyz6bdd8RR",
  "key18": "2dtsmLzm6FYpefM9ePSBjUtNBLA9EcLdbMTDF2e26HPTzJHF4nyLGmxNHRVHntLCz4QhzPsQEVh38tFGKzdiRto2",
  "key19": "BCK54SHDWncMsWnW7P9Q5SHUnocF44TAnDprof74JiD4YLWDECygAt2k1iQcNWmE7HuYQPQ2dKA4XCCjt7UiLNt",
  "key20": "63EPgYs3Yy4LWCYvhmJdaPofM11ebHZAfJxihatMjtCqY1icBdC5yaBYfRECt4exRL3MCXEbh9nj4qDJJqD9ES77",
  "key21": "KBFNDoCWwHGD5Rk1SrBMTKoiUVEf83Az3nfx67tJNMxaKy2J8J1TbKHoFN76wKDr9e8iHNatiHV9oC92Nfi8zap",
  "key22": "3WUt1MfRc18K6cj1JjLgmSdwYL7b2EsYw8PDhs41RuLutvFKFC4bPTRZuBryFzg6jxCXAEFkjYnqXX52Bas1bJw4",
  "key23": "4kxVpHJEvxdRznchP6DJztsc11Wy1gH95R43u3CabX4S5RKWCPiLEkyqZuPgHgoipaLt3sTNtiq3jYTFhj66JCAA",
  "key24": "ztwHN9BWBXyjUVtMvFeusE2PzQqFy11NeE3vi9pnanU1ANsNkbFUjATyWde1sbCsBcJgemx2vmVfcWLwyMswpX6",
  "key25": "42krLGZGjKbbwiQUuQp1aMCJyjXxZeteA6kzE9bh2zcXmdb7BWyQ6UT4kapRinv4mfbDfho4yfZRevnZHdrnm4gF",
  "key26": "gSMpV14wUCB9WB9vTgzEzBc6pJ4cbVP44e7BspHyo7JUwgiavgKyjZykSzGt7WDhoRGBRZriBFjuerJQTTsGMBs",
  "key27": "4Hi5wTyZUiD3fvMQEQmC8uxbg2ymLgmWPpRo6An96ns4wJqCSVM1zfDXCbZapE3XsZmHcwN5u58FxkvMFxEGajb9",
  "key28": "2BP3kZk53VvzAou3MxBwbqYZ32hx1PNR73sjXcrhvyfin9dfS6Vb4FMyoegALn4c4DUAiKUNGe88ikfSDiwhbqXC",
  "key29": "5LqEegaKh3bVTRUJxoybrRqPzw2cC5bed9F994dheR3j7vi4rQd9bGLrJ3c3vrRqSGE4rbiDCiakB589i2rmqRGX",
  "key30": "23YBLDU3Yy6rb1ZkhNdPML2gLa7qoYiYJXFu1i648y3YwT1zxuKcewUcVZHLp98iMfWsqQsRbPUCUpgKfeXg69GN",
  "key31": "3hM8gztGcq1UtypJw1EnWn7rWo3dhRYTTPACPXhEbgYZGJTko61X41ESrXJzde9BLzwbBJ8RqmtQyhr949EZJfow",
  "key32": "xNE9mZxGf1Fwgr3qNpG8jh6xi6vpfhpbyiea6yV5hy8jyfzsXsnhNWk9gofh6z8jozMaAuRj54A7Q5k4A6Ucnbh",
  "key33": "3mCkEuQujeXrLuy8buVUdNLzQPMEiphr96VN9RRsd1CFqN4kGo14AqrHxfBSnAEP9kGDiqhDjvEPmLAWeC1ddCU7",
  "key34": "8xgscUQakFTPNUcxu4DsSXzfatMnx2Ajj6ykfj4jJ2SNDmpu7ZnzfR7Tgbkz6mqNKrTPwz9t1SvzZmaWL7qPby3",
  "key35": "3pY3Bzh89utA7WKo1z4aApv3LNWVU5zhPRen2Eb6eHeaNuq9kcshPWJQcCpckYVewvugUb2xAJU8FasHuYsio7UK",
  "key36": "dBxtEk7zpXNuWLTrKR1KHGdu5iTza5jrWskwnF26iYqnSz71uK1kBbLzBgbVXckPB7DiJPe9DdBgXWBn4zcwVwX",
  "key37": "3XK9CM95mBj2bmFyhYa7kceUGjcbVXeCRK8fxmt2BXtr7m9C9rQyrKJSPbyM6hNfVDU6W11d4ofWFsLSyeVgwygu",
  "key38": "4XjV5ivMedBS9BpY3aPe7eWtAFZ4jTmTFY2fRefpZyim14XMVAn8srkWwzGyAbbVmdkumeJEvBnQsWSkYT9rquX2",
  "key39": "2a5krfGhjE1KGCUujsuRfvW7RPDoEj7gREFXM1oZrQ4r3USwx1q1JTFcwVvxTGwQdnMhbmrM1JfTccfCD9NmQBBa",
  "key40": "3aw6uFYksTPtMfpBiP33FpE2PDEsX6nr7tFenFmp934oQNyumoRe4qs5tBCWWwvJkrFkP2KD8ntaSECcwJWL69X5",
  "key41": "2qsHTEWKD9HiandYhiPSjyrVH3oFd2H1X4LGCQFJ26GKiqUdogqLV83wXfzgWSXgfsQG5yKroEhYkM5s6qRBtxyU",
  "key42": "53FUAjZbQm3WSHZQhco9rVRvEYSRgNPJV3aG66pANYKGHQs4aKxN6wdV3WmxCTCHExB2BfmhFvfeRd9doDvNDATn",
  "key43": "3AWPQ1LcXVsZL7uU2gSq6Jo8vYvUr2yMUgfdBTZViQyEaW5KxfmwF1TsS6xJDSStdZxfhQVGc8fJ88AyR7WvkvVN",
  "key44": "RpuaswFaESrsKL4H6gpbFCfT2PwDbGTvsC4c7wAUbaR6Yndq4Q2PF1gqQbVthVjcuB9jsiV95DakkFEfrKjpwRk"
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
