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
    "21yyKYYmbKgMNdqtyc4C3m9hEnwgWMFhXWVWW9Mtzj8NYVJD6Yi9Gi7o5heENBGxVJ8bppB4NKsQ5Bi3UnuaRjru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FnhSSKSimHp5DU9GpQjo1ThVKWp1Hzeyn4UzxbHQFoV1V5CQPHLYicY7uxfpKra1btecgoA8Fmd8Tsu5qwgHrGi",
  "key1": "597oxNqdGQqasy2RWmsScHQZjQtd2hGbnQhyiwryr2DGcx5iUouBRm5SvjUfRqVjjXXTyhAu8HXD5eq5AtmSfGES",
  "key2": "4foTXUG1yDkL7qeg1wj1NDQQfwC7NQbhWFpVMiZeieda9cjqtqtjmHaUgcqgCb1KY1H6oeeLLFmc66EWk6QFSU4b",
  "key3": "5RxByrqBZFRNYxpmiQxtf3AnV23Hm8AhgKsR3Pu3DeAMbXBLrN4mxMBrWbEgtUChcEeqas6CuQDmPiKjNGTZyXHn",
  "key4": "3ayaKRJQNzTrn8hWkzopWvpdYaoqx4fnToJV1M8tYeZRqDvuxTv7eJ6K8L9QoF4SHbJZT6mf9bmGfjfX19zDZV6H",
  "key5": "2UHTB5zQTEMM969jv4yYB2XPDG57ybuKRhetWupBE99fpQUFXD4AT8zUsxX1uU8AQSrLcDJJ3MdouYQUTiZDUNbB",
  "key6": "2TQi5jN92u8PSdk5ViAZ9fycwqRFLVAd7VeCSGT5PAjiJYA4CsM1uPn4ib5HNggVBVMLwq8gUex8dUeTMfBF9BvU",
  "key7": "5LA8du3QaV5AjAMA5pjqTr2g5AfuF6qxUvhyMT4uAmXssZGqJt9eRkpfwugYymJLJM4iYFsUvAoBi9cn2QiDC8XZ",
  "key8": "3PQnrQiyYG3JQEHunzN4msc4vmutyAfDjj36A2Z2qY1FKSP3ScdUeyuGxvECbgxnvVotyzwcmuwc2hXLoxqm8T5t",
  "key9": "4jhoEGBetMyFHGZes4Lf6yTmymo2fa4syoBS3Bj5WaJZjweaAMWE379gry9Y2ScqMu4a84VAXBRr88vnezvC1tt9",
  "key10": "ArGy7wr8BYVdW6HV4WsHs3ZuRgCg1axtN5rjcvBmqwHJoHJfawHWHzmuV66TXUmPd2vWhM2Yav9F2QQyMNPC21H",
  "key11": "4ZQ3AfAm1MzLKqQzJsb2SbGHHLGgYcPJkTnpVTCG7rKUNN6sfuiaaRdWccDPiiPHW9eM2CvtpdnC3tFSmyND4eCy",
  "key12": "4KUZRurHyTuamyUCwvwS5qLGffaZC8A4tWsX5y1QRUcNTDab9q2L53VN9KS1B7gBQzN7P5kcG7abeLyw7XPcUEdx",
  "key13": "5jrEyxRnGbhWWgMmeq6duLSBcoJ84YzhtWeBALM8Hy6WRtMHTxGzMLrMgM77EeRLxvJjLERLCbPEbRGu9UZb1zAp",
  "key14": "5JSFj6pickR6ofuSbCsBF9xEdBBuaxiMwsFqveuMtFUc8QTU5YPYsTmNdgtmxEr2RWszD3jJaepqRBYSVEtKwpN",
  "key15": "56FB43TZo49JbnzrNLGHqc7exvxo3xApjJLuZo7tD3tPo7hf9wEFBLbYbQ6FQDF9J12drTWKnr4BtHyKABtLvYCV",
  "key16": "58NiXAANJWH2R7vaUMoydp8USUFHNyKt3cGoiCMgzZydatLdU13PM5hrsHRnD9HxL17VPx1BWgks1FGcNmk3Ls4d",
  "key17": "4BKWpeA693BnCJAwzVo4BGfySnSSvFxfWX3nbb4qBrjCQAr9MQkPVHWhCVesqrHkGB4DENhF9wBRyX8CGMzCjDL2",
  "key18": "4vFSBW9SAMs2KLBgK6oLgPPTLnxxwLXGDny6w3sLyafFZSsDUshJXnvszFbHonEtSPFkvj47YJrLDgaeCZMqT916",
  "key19": "5aJKdyYxWKGnXNoDYxxNkTN6gpxC4L9QtTpjhVgEuNnRCWqXaWWpP6NXueriKzkW8PotimVqgho3nqHEFsG4LF9r",
  "key20": "3zXcEuwaCnmx1DaxQjF94uMpGDxQEWvQaM3C34syyUq62WExT6kEEP7hBf8hkHwvmtqyZBZXWe6VQCMMSXrxTGbN",
  "key21": "rTqf9FDBa7X5UpgY91uyFs9GTdQYAKJ7fzj9bcKsKCKrXaudYoadsQxzJ2pXUiGP3quHA5kcVPjuZcinaanMkkn",
  "key22": "2idYtBtG4YQ23sSMKag1vfimoDBmKNyJjcPWovyUXaSUgkVkf9gGMZwoWvwzRXsufSrowzbVhui9NZXzbD4sfdrx",
  "key23": "5TSQ13er6CQcxRSGqgfNgeg5UXndW2EJgV9JxpKhbRfp6SWVbaEy1v1ppeQz2BLZv7ktRFy45qLHUECT1TdwP9iV",
  "key24": "4i9r19CrYVqLtGshmXbZBdCKLpRikSf3d7wo9d3yZkzcjqnoWGhkySesG7EY6G2FM9MPVieN7nS1cWV8ZsPCLZoS",
  "key25": "2zbWKK2UzJfygzn235VayrHm9dhJL1vQPoqhQPjzpi1Bbf2EzTggxxUbRJByf46eDYV91AWmFYDTGsKcPnLiX5qx",
  "key26": "5snL494FkuCjj6sEMXuqyJoEgW2SbcxNooFZBdedqGpdqLSWu9uXyBS8B4FLFP17NrDfDFv8Eg5xNqcZfE6GKMWE",
  "key27": "3u9JuB4V66kUroqHTnMpyqFgp9n8oLvx3q7SF2PZzCHF1Bm3CZMyBAgDErAFtxyjCef6jVhLkbfr798q3Mfzx6nX",
  "key28": "4Rpmbs463oQeTppf67YekCtU5SBu3sLGy9eTJETmN9rV6AyRurosefMTrtPWDEkUzNaYUDKuqPDdPGsRQUzwWDCj",
  "key29": "3CbkFj9XjNNbeMbCJJ38e2CXqBRzifVqs7ByyhHSTy6jhAN9YG1aZmXPVmW99GX98hmVpvaT5AibbiMkvC5rG3uN",
  "key30": "tMFG2TQWngDUj9Tone45iSgVwk8TppSNVp76RFkVPiuQpgj1oJDBXtvt5EHYuc4oT1tJCxaVybiA6NcQRHjHdAz",
  "key31": "qTA8R3588966prDiPQPj41bRHeSDfwQt8xk5uFgYUSRb4xiAMxbYon6tvdpTqkSKjggXkQsoTUBrXvp8cXhH9dS",
  "key32": "4abTBDB2fFPyXdUoyDu4xpBNRaeyuRaUhqLYjq711rktEkZEiTpMKhCkbsnfgeBGXRo2W8CU6H4gyocJf6NTSJZY",
  "key33": "HyBYGtvgTEzmgBQgSN8UpeQKvpKTQH6XQU6FLgZi48cLdgDpQQKpLFGJ2cqUw27f7MF8XkFp86shVtYwVAdigPs",
  "key34": "3shBfx98paZf4mxymYubhPzoJ41LsHZuNzGUDUKLzwKb6bQ83dRwDmquLxk815ZDyiVeQsFkLzXpNra4VcVKUgwa",
  "key35": "4294fWZHodKEdu88yQcnVuGUN8y1Ztj9uoutmvveFRqc4CFFXo8BfM4FSaXXuqr81dLQgj2UFdVfAvWokVUeaLte",
  "key36": "3TVi8N8vZupLi78WthocPwjgRr4HhTfS84QdG3FF9b4Db4ajMJtEC37tCxHipEXuvuyGyggE5UsKqkuCAmCt7TKL",
  "key37": "3r4MHLVMftQPZrG5e8AJfvigEGVQy8F64ciXdWiYcczpr6HmfrcMC2KAAiaURMXaQmxq8w9zTsKaRvYV4ubw1rgd",
  "key38": "5Tmvwx9cSXDZLPiD4gpjrwzus8fs6Z6ypMi9DnjDpzevRDjA5XoPYGgZ1nHFxw3FXRdB5TyR4oymD51X6ydCkVaq",
  "key39": "27aVrE7Mspm81iC9cKnnaWE4QA5vGHvzeEPX36aVd5So7ftKBtDCRMt6qveyJg5yUuWqJiD3WdYuJLXz8sLM5thL",
  "key40": "2Az5WExVYVvFnFruRr8DtFUGv8Tt1HsP4gsfq3NRmfRC3hv39kX884N6iPJ8s8YBvqBFLv75bibXzxpzKgs7FbNQ",
  "key41": "iW5frpzrZTZFYnkVDX9PD7bY3Wxrp7Ra8kRcGhoh19HmYnp1mtA2Bgi8R8s7cT85v8eL8XJBFvR7mmtUSoB8DZ9",
  "key42": "29td34NBmnKQLxTNDk1SA8xGGFJyAaQiwpqcvzV2ZPkfwbpUMiU6dRH2DouxppMFUWU2mVkMmLNX9b1ogZZ2MwM4"
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
