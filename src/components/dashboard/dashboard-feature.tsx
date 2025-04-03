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
    "4KsdyDxdG8WppzWMabZDokHMMyP98p7Tfg49sF4cvmRbVxAiC6bR1KJ1SL7F6qZrSw6CdgtrUdeXxWYDKJAFDV65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hFMQ4aNQVrsrBMW3czaq7ZEPyvx5vP91K76zD7o9EhTTLmYVHyCkrkUUGDGruLnJPjtZcgWAYPoFztV9tB3SmXW",
  "key1": "3WJivDaJigkEoEADK3eF5PGQLNJjVpSsptx6jC7Qsk3mu5t81xrA8FUEdWGvatgYy3iewKSrUeaWnjDEMbwqeQCM",
  "key2": "2XGqZYnKeDsWreLVGrWVPezGvacTBW2Nie9ssfdnGDxdd5WQu5j2WdQS9qGN7pqXWkpEJDez6VH98x6aftbgpy9h",
  "key3": "3JVmdBUQn2EYqtcAc8E74BJXFTKN8zQ1E9MHv7edezGcENDjh6yWEVkmjCyyCaMvdSX4rRoZ44N2Bw3Dt8hwgNaK",
  "key4": "4LeT1c9jH2qH8GzDWKXh1S1L8hGkbri2ZDprrseC8TsWQDwGHds1syxfkafRWwAaXrsbykyA3LQ8HJsbc4p9Uhnx",
  "key5": "2BxstdhsakNX6bzHLBwPUiX9vu36Vt3frppToMFc4rYXQvB8cGEChE74C2zTD9GjUSDTqH2fvyHCmYtBTAfxQRyv",
  "key6": "2J2Qm4EykuQvWE5zaUzbZBZ4f6PG8z5YnUnSQcfqTatT8L5m2RETrxATZt7kao6qXgWffPLrNSQg5eiG6cLJyNHa",
  "key7": "5J4uJSLNsG3AFUBw6urc6wcJmbTSJ1ZdzABMbxP8ut17Pf4c1iPhttYVzq1zQgjnFdLx1EcTaYUQFhZ6Wz2smegy",
  "key8": "3dJuJXkrzzTxZ7GfZoQNyrxzkbm8EBLJMAzT7bHGEKL1HvHz2SLWqwUqxA7pksts2PYU1R6uXBegS9gJTTfzq5yS",
  "key9": "5P1ur7pZ6QVX4BojWDZ6ib6P1We3JdDoi1wBnn8YCiaQhCgPxm4axg1QqdaxRbpgMc2QrVHLBv8cjtpJAwHyZDSp",
  "key10": "4zkuVWzGMV5fmui9WitKe2gJNX2UMknFiX6VheE9KzyCxuicjNLZruuPKmZFrpWkowes6oyYRM1UFD857K1NKb6i",
  "key11": "2roRbvNa1kbBx5spHCT7CuDR5S82BzsRrXGYN2EqmqNvmcNKiSybMd3sCNMxR3iuVQFnnc37jEXywZ9op1rqipq9",
  "key12": "4anqKEChzGn6b3QV7ZT3R5Tfo4brQ2prYcs82byuZRnnjoD4rqzaFAc89Tegrzkb5WkkSQM5PoTCKRjnEUVeUgM",
  "key13": "2mRRYmc3ZgRNMxDZEhgPXejKwJ3LBM6zag3tFamAkXYZ5SbsVB9zwPjyQ6urwrhD9pkcmVTWCbUetwjm6jzt9d6J",
  "key14": "3LnZXWyjdJEAALVyvEa29Yp3WbJJJsd1cdHd99kZ62wFtFju7JMBwdqRhahMhafga4jt1XTWfPFQTAnESQLx4QH6",
  "key15": "52gVWoYtQqLtgvoHw1QMh2CKQFpRwsWcgdsfKryR5Kd5zrj1xbLdkq16k1mL8XFdP8FUfASEMxan1gUAup7JAtGD",
  "key16": "3iVkZUtX8ygEZLz4ZWcJRciDrwgCFZsUdvrcE9LuKwxTP5fk1qETzP3mcwjpqA3V3N4pBnEwSGsRngeoq8hNkK2n",
  "key17": "3xEz4KXsr7WDawAUiQEiVZPZFZtqf7sJX7smCZE42Xc2sGpXtB64qcTDaEm67Rviw8bPBQ9LhigL3u5v1jMoBPL7",
  "key18": "M3Q6QWRX3sWh1NcEbvkdVbY48BQr8ZvCtCrvAP7CjFb84Z1HEDCmKw1GyqdX1wdV56RVx5PKifCiGCrAkSqQaMo",
  "key19": "3BDPKwkcRAHwB9D8mSp4ZuMxiyN83zTnkKVuaaCPYs9fim7fWrxY8wfyRb4rxdJyrx2yvAW3JgK6rzBW4nmJHD9W",
  "key20": "LpPzGNL5CQXmMBq3o1ccYHVfQsP8fr14m6BY2BGx76aFcsmvFi62L7dMVoYRzGxq33KPSee3zKwWVmJPEGjM4ZR",
  "key21": "qrw2Q1kK7boRCgLue2WvE4CJchipfVTVQNTCfCy5Uyxp47LfpejQ2uyN4HwapXgYMTuUBCsYTTQatZ3wQC2X32f",
  "key22": "3aWYFG1fbqH7syn6dF4aS1XUzBhQWW3sPGAcgriFKirXhE1CnRqesZSKPQGX4Lyqw1Vsz9V2Ta7K3B4mdYKh6tor",
  "key23": "2fWMXpx7hnXN4zgtpfNKCsoCod6NE5oKaFEvasKTuMXHmJisrrT95DTQ9TLveZKryB3q5ZmM2KuxaaRhDSQs9s9T",
  "key24": "5N6omHSDpgJGKGSCacinzyzPvG5rhnV2QQuQjY7xXHv8QNQTHrUKWPreF9k8jeeMnZYAVbWc4ess5vv4t4EC7cF2",
  "key25": "Q6TBQDAEfSUZ9PkNVi4QzBrviEidGUGgdEofMnCCUP4uXBV2hWnVXNRHXLuWA1qkUjqYgRH73w97jxKaw6KEy7L",
  "key26": "31EpTnusEjxrdWZBSVtVawzvBkRw3c9TAFXxPGuc9K6nWi3xWdgNmuV32Vk6wfXb9ghf2KcgTYbaLiy97WVnH84z",
  "key27": "qJpDUaTSpGuiHLo3YCZqHHmznAEVfgHeYEDNQJjbJpUT9rqfaaoMAmuKVW2fg4JUV9EMdVe6teF8MDqMWR9UDJo",
  "key28": "5mPZubcVoZAchAAimcPewCHnKXjwLvFqGNLaRnm6NHA1FNDxZrW3s7hsMq3kxM49HTjGgSQdDbB9mcEq3CkZBWxL",
  "key29": "3sq4syEzFs8QNaDoj5ZdPUK8cTR4R9L4c7sofdZ4j13xcZK2Uq7uKCF5ocX8TNWyiPJWuikqHyvFK4hheyrbXdn9",
  "key30": "41Py5zYfokbqcSptvTJnc6DQoPd1Wnu2uJar9cE4ViSPeg74gbcTZxDyrCGxwSBPV6UhGGosBNYHkLZaWBBtofZG",
  "key31": "5JY7ddpozfzvMRZDsjojbq9g5URnCHe8RxAvtjYvSSqaXwzydSosGSSkVZ81ysPbY9mEdGw7rmyvukfvrQHSDPaB",
  "key32": "8modeczKrtDXUHcBhWYpYxCGgBCCpYfZxSqLNJV83zCZ3dDP3PoGxPnwAnLE2eEid2Czqeyp6gSfCmtekvHhGag"
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
