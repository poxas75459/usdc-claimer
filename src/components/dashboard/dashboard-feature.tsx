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
    "4fBJCDM2nyWQhy6HssAVcxgReoTYmTd1W5NyLjdnL7tUiVupSwxagdL3yHR2k62jV6ejUv1N7N8S28JERGznMUXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BeApWgyxPsjeVFh23bDHgiAvmtLzsZttRNuL2hNA43mRbPX5GK4ri4N6aKkKfoGeMaSMjYgxgGKtbBEJY6s4Hqa",
  "key1": "4U5V5udLxVnBiNUfoi4YQy6ksmJui4s4Zp32GJFJMUnG1kYa7yGXXAsCu769YRapmyaGd7FxnoVLtZH2KEBRkjDS",
  "key2": "249hovAJ1xJWg8KVq7iHWYPjCGz7h7a4tssfAzYat8Woq9yV5D2Pq3U6huzYHnijS5Tk7VsqpUdXSY51P5QaHAxc",
  "key3": "5JXcqxQu7dbBw9wRWfiV99Vpwk95grjrfco1ViwBQMmmRmqfA94rez6gb8wm7aTgqfAgzTpoVQEUw1cu45MHTCNL",
  "key4": "5afwkimrs3do3LWN4K9vTV2eiamaqYbJq7qGbQNmFfLjHmQZU7ebE9st9MsDtJLEAHZZfsK6cw8b9woWEtAc4hP7",
  "key5": "vLAT8smBDUhH8h6PtcRkCSK6UnQ7vsDRC2ivqJVNdiUED3HCX3SpTvvszErdEAK8D3PJHv2Z6qW2p7wizca46no",
  "key6": "2Y7oDRz1TbzdiMyGETqMgN24JLZAVjkdWXJFR6R8MuEdhFz9NpifacVkPrQ5zhqw9oAhTHXCzDe1JHWLCmT1r61X",
  "key7": "ZJ7XdGX7BDGHy9efsvYFL2GRWH2g5VRPai7MP7oqwK9kMYsXaurWPWLaDqCxYDv5RkoEYTEjYk3a9ke14PNiZyU",
  "key8": "46xATNWKR2bLUmzWGqpZM1Fst1wRWh25HdDmGT7UfGkGSxUpZPUGtWdiicyC8QGxqjv43RKCiLQehCX93G1GNwes",
  "key9": "3VHkstDyGy8t46u7SH4Rcz5HEnJ2gsRbZxug96CVru7agnaBMexXzJ6ZkLB4bu11DwGqKz7aUYwmFwFQgjHthypN",
  "key10": "5r35FByqtjkya7bzd97dBXSbQQ3NNjSKfTrtdM2mxn3m2VZNf7RMj74yWD2uBgJrSajpBFue3QW8X3nsMT3bM1D5",
  "key11": "2qNC5jnhfz91qypcwaMDAqqroTJG6zoVy3695LFfvwBJVdzCzHvicV5DrFEpQfCXnKoJy3nWFvkFJgdZBDhnFV39",
  "key12": "2GmZ7DAdMNaHdjmmJVav9zr5Y5hhHtM1hqvtrmLvTqk5kqpLdypxe9opVmS5QfKTSbdV2KF9B7Hwv1eYF436qjri",
  "key13": "LtuHbxVkSB9d69G2H9wFzQmNQEZsyJyxTveEyiuCvZ2y6hsaDhns7h5HVLR1ciNyeU85WApwqK1QNz2eXSJWfV5",
  "key14": "XkfGMe7gVuQA5NGRTuzow7Z4h3MkDSMf8dHw4FkUuYaJ31aCgbmA8rsPWy9UENpDqhVLfgdjAgbkf5NRdPX4DJh",
  "key15": "5BCU5wRnjmnmBoF7BmkexJfPYag6cUUqdpA6cbCGmN4XV5txkoyrD2Vz6B81MQJCYHz2eRYDnPa2zmWgTfZZcGQj",
  "key16": "2479MpQMwbHXm6EJTtJ3QK8nwLyitMJqFsA21k8Kt7oJrJhAtHZrSfd4rU4F8itRHLcBGWn4GpATF3RyJTiJuSTz",
  "key17": "1ZwfXwFtcNm9RT876G1VvscMgPYCZNmS5KhUMed35EqxSSMvCD9a7rvv1kQJmKh1h5hXBj7E8ZshmSXosTJpixr",
  "key18": "2dKypgw5s71T78x1hqkMGDkma2buH2ChpXyagBFSivHyEqLYFTCTAQB5UWTxUuEFSSfghLDVa4PkvLt1kwc4UT7i",
  "key19": "4QGYNGFYTZVYoW5ABuDuEr41Gh762kDVM2K8nria1LKDopiCVynpjdqrSvavcb5qMyBH168W33hCp8s4LihvoJgg",
  "key20": "3RUZC67a9PkjpcjB6mga8brDxCqkKQ8x4bRr8EWSB8nUVP4bnHW6mL6Pdi91gUQsUfoov8Mf42q4nq8PuEu3QNyZ",
  "key21": "2J5f69FMTz1RESiVffHyTA266qUvyu1yCxbC1BTVAtJQaHoAGMFoVAGBECVpPvNgjX9Wkb8edta7SXLAzpQZZpVt",
  "key22": "4GshigbWJNp6PBv2Y3BLJbaoTqVc7fVLsv1Q1YVEceiJ7Ecw1hskL4D1fHR7zwaQvSbL9NYHYKAWuVvhUD6vHoxv",
  "key23": "4uRBVTDpMNj1Vvb7TWoqGDHBWp68vA3pkfV3VvG4efUUhf7us4p1wE4e2o7yb2Lx3B9bncpruhBkEYibexPT2bzh",
  "key24": "3uAC9b37zv3i1esEMgsyMrz1h3gBeeEBYyhTQ8EmKybp6qwEW6RSawvUCDG4VxLkdp3UXxjjKF18BMhg2H4ba5Mk",
  "key25": "41889rmBxYwuamd2SGWXEmf3yZrrZoZUGzMKMNhKqQnMFp7TcByRt6vaHfC8QYmBV2XVsW3CH3Xmn1uD4KVT9tdE",
  "key26": "5s8AC5fvYoc4mPmd6N1ymVgQmjMaMXZTzRCrfa39Wq5HJ2DwLZsT4rXrKSueEMY2RxLrmNBjsAK1dii4uJtdVYzK",
  "key27": "4nbX4XJJQi9M6EDGQcid4ZGfzqtBrnxTYqFb7hzo154HPvwY8RpiMPhA4QN9TH7rEbao2AP4qsP6GYqd9U8ZCGGw",
  "key28": "53EzXnaJK7jbXtZakzEdmXrDMvK8Cgo6ZqSsNw4wU9tcJ5U2Ricx47xNxsqDjQUv9eXbDvU53gZ7yHABQq57GpeW",
  "key29": "5mJ78Y6u3L2UaaerdxfCGdYehvS5BdEiDGqBZujw5495QaPpujXak4U5C4N1Q5eFcQ4U1jXsDRC3NgeeBSC2dKAb",
  "key30": "5MZYqgfNM1mNHbChgtGPFKJLr3LhQ4ECirhW1A2Y1TMah8zhstY7tXSdZBjTgHAYy2zAENhoSXb8WBfbSt5sKR3U",
  "key31": "3Q49Z7JwoB5DqZCX3YAbRBoWYG84drh8hniZt6nEYeDAaeiduFtuwoBBwy7unagH8phNMZ73fGUCDsL24nvjLPLB",
  "key32": "5mbhfEK3P5uPbk1qz2G78yZvENmVaFfZyqqvfQdU6Pe2DrNsDb1B5Y5u3cArvo3QwyuT4yvpLDhBXVhXFLgEu93B",
  "key33": "5GdB5FjeY1QxjPNSRJWzwUJPaXXUER4GBQeqCwaewnAEgPEVaFxNEszS2emWHmvi5Wau9yqxDT4n3hNbkJUawUSL",
  "key34": "36pA1p2daZFSAUU4Pokf7vwG239ey8ZeoRPBnuUdCTGnEXLArHQNsoxSUdFsEYjArGq79hA4cXALrUFgkgKSrfF",
  "key35": "4PzRBm3rhgEKegwu7WVxE5i9PJvBXiB6Sgc628BXzWRFqZktE4CWRk4dzRdPSYNMBdy7ycfFNDX4aKqe6p5qQBnM",
  "key36": "26n2e1cD2P6GwHpCyE3HAyvPzSoqqujV1MnCCFkGRRnmRbCJ3oJaGMv84Xk3CmpMvGp9WbsawtbPUoXiDQdBiKno",
  "key37": "4For1dGadFLwq6a3knHtUsFUjgYBXekWaAtqhmS2hXGSpMgzD8mKWWmgpS42rUzkJ1zcbtDcGLP3Q3bRTMRoguY9",
  "key38": "3UR97o22vVm5cmc4WmAgU5cS8iUgxZF2USYJ5Lcg9uosyKGnWqsX3MU9DGHPnMHtYUabDrpEAkTvdQVSG664t7GL",
  "key39": "4Rv5Yx3nXLXNHLpqxhq2HA72QA4xBFMKW6EceHFGfJuk6wXUDkLrLDzz6mWgtci7oAaSmA8VQQsVj53VstHLXZ6X",
  "key40": "36bKzQuoR7mBDUuHfN7xYdz5ywHiYEkXCjJqeahEpfySgVfdLmwRBquAAzL2EPmqJdzvntikgTGPLGcY6iJZkMqK",
  "key41": "4BegcF2BQkT6CMi4ZYtWykQBihMUbRmQhhD68hh8xzTvxCiCvmF4CFGHBs5vvwqPe5kNRiCbAVHnfZDVUyWX8LCU",
  "key42": "5iY5TcgGf2t2XXGAJmig4UKU98i1q46TTnLnT1mzGBWpVMRWACW7Viep4ZutumbAW4uEHaUYscNFTpQX6eUgAzQk",
  "key43": "4QL9oTu26aWtaRmx7QKWWFTPqJQsBsXa976Lw7A3KwW3rbL74DHVCeQGo9gUYdrUZPtCx6Hse7G2jZPgr3ZYYqMq",
  "key44": "4jTDDoBtBjCTHqMxURVUKELgmD8FMgVg5QHGK7wKWDzg6NBuVJNr2Lj5NmtQQDLAHJ9G15qBKYea3vu55F633TJY",
  "key45": "2Gsg9WQ7EHzpspekspYMV7HhuB8PV1ijTzPQF9afGJJ2fM3PSAqwgfLRVRKdgT4kx33Wy4wQGPHJ4yfxNd5564xx"
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
