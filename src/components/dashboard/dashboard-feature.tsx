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
    "37qZVajKySbyjdqQJ5nkSLEwgkygn9thZDBzX3XSQKmApC1hucLumnACdm8mPPKpzqLeG1NC1Ab7HxgGthxtKgms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDhrcscWzgFwAs3vX5MLHNZEp2m9hdqGqMrFi1nF4pPj7tyF6FYz9sSBNZJaNPSr6GdjebyRoyDHVyq4zpYMYaW",
  "key1": "jZWaoCQRDuQWexVZuDAm5gDDFVWbabo9s3uaPV1xoHCzkUL6gJdbDX6Z6sV6mB3ExjdxKKkkynFpuUmxhZG51RD",
  "key2": "5kvBGCb1y91rhLRV35xfLHYGznRMgw5Xdfc9hKZjYkVaW3DsgzNdPbim3hF6Ur4LvvCWAFx6U6EhWq7irZe3NdL9",
  "key3": "4fgv3PpUfDUmaGN1icC7rbakvJ9i68t5LNvPQ66cCuWEUTNJerz9b26D2ASxvjXJ5VsAr3t2zYD9XEfjTSPKnkEj",
  "key4": "3MSm36KTxojPynnSp7ofdYetejt61YkLb1Ugz8upmqwUteD4NiFNgJszLWCRLbmLZxU8p5W7sUoPAQrhDLL3T91H",
  "key5": "5WVaMYtmxpEyhHkCDBNHaHj8kNRQrodLeJ3BvyGoroPuw2skTMqYrwxVhivYa4t74YWLbcyCdMHieHcPssEiZENR",
  "key6": "28FJkzLSZcVx8WTe2Unn8VNURoiS7aJMH32EyhXYqKCgvhvdLZPUC5KmNn5L6tnrsZjMdw8Ax5v4dJYNipW9LRvA",
  "key7": "2YzQpDUrdUY2yahpkXYwNtNDyTRxMcRMNNRMh1fskbs2NzvTi4BT4zTQBGrdEwApLB9fJyrVsEmjfkFSfjGNmowZ",
  "key8": "4scjmw7xAMSmU3TKfMcyG7ZWfyWdeoe6Xc3ZVMDSGvza28FNZyzPTTMqJhGkfadbYwcz9QTANBtvq5yRXqLzvPmT",
  "key9": "3vMhgucyX7DdXXdrbxKgccqTHRHPuXAR2PwM1TQYKK2enk1exBBAmSiZPqGqJSwuorzvtuHHANxefwGpVnhYHtsX",
  "key10": "uioydQB9zFT7zu7uAJs3cJ83PnYzd4Je1Hu6kMq8HeypRRju14JjkUaWqmqu64QEzJJsdP1Rto8DaGpJTgUwhGt",
  "key11": "31599AEEEzEgUdHs4MnfeeMK3gzMhq8RfLWkZZEXLNFRZrWFFDsKrXZdRFL8DhTrPQLbvHP1a1yUhXioRSwjytmz",
  "key12": "2M5ZjWGat8DpmzMYiqyTj6CwtNbMFvvZejj28Kku1nwccAnt4tKdbKgavPuAd95dH3afVBYp8LRtLnZ4QbnWCsWd",
  "key13": "2uk8ceoG7nxryC2ddFbLwfDW5WfGu68SfdFPSnr3GR43DLH5atNvtqLXmSprighVQjZKirDQt7o4p2dcqR2ggYYo",
  "key14": "BxjSLGjdsdnXFA4Pm8PwSKStUoBCYpVvfBuRytaKboF6Yu8vbMFwgffRjiewoi5ehkEPJxsjrRCVHjnTRRy3UfJ",
  "key15": "3o9Sd1yg385Sh1X1Ajx38FzJ4sGn2WFesJqmacLwAFeTKFG6AXCfmgP6xpcvweqCjhZ8mrS64LWzCYvAigQL32kk",
  "key16": "359LfJPLciBdBUVaFaQK1tVC6U4pHu32eUq2KmZf9W1KY7J2yq3Bxt2wcf134aEDaoKfBkQdkWaZ33FBpsw9Nb2q",
  "key17": "81Z9aAc3de9QMN1adMQVB3etjcLSoYRMM5TSK28byL2kiUbEB1ra5KeKm3u15GCQwxVRDD84ahiPAg2HRiVHseE",
  "key18": "44RG9n2wnFGUvitDuCqtNJtoUHt6xnRpUS934tMvJP5Hffo19jEz2Pz4xbQfd93gCgrMswcpkdcm2MLPzGkbViPF",
  "key19": "3DHsdapvWgxF53ttxSwwA86tdzCC6uKNdbbkiSjgH77TEBtD8Jk5pnEyZ6RDmBb9yEv4iy4K2VP6ZCpEe7pEYi7p",
  "key20": "53xsvfTKSiM96a2pk2ZwhGXNM2yzdztoYUFnfwJmE6c1pCu3XZqhbZsCrWaNyxaEyHH38UBigPBFUfEcMbieN1mS",
  "key21": "36n99PRuMKATzAHRhCENJ9cW5kgmFx1dBpQh61QT7WrePNYQmARJNNDw4K5rSC6hcAgDwLbcahV9c61guwxGmQEn",
  "key22": "43Vt9t57CspLfU1LMqQM2MvqW1DwQ87we7EhSNnhfrvrV5TD672BSWPrBts9t69N7La2Da3S6LqVRvRYeVZW8AV",
  "key23": "3WVKjUbz62yNfTYpk1C1AHcmpcMQc4zTAekWEABrLnWdbEqqyqk3Dy94aGjA8Fmfc1DL4uG99Jw4mktVT4ew6NVa",
  "key24": "SPdbu1MWCwBcNFG5T3ZhNuZtezqkP96NujFsFcDhoi2h3N1KSfyqSXFVTXMV84nZWh32LZmH1Cs7YRq6EVJHtBW",
  "key25": "2wsb1nrAH6PKfUNS1umQDj464apFXT86Qu2GHiY7S9mco8jfWwGkxiwhTodcpYmq62gHvTQWw5vua8djQnLpNtc5",
  "key26": "Xc9YjSBmpjTAHv183CbD2uxr8ywUvajBTM6SaTmkEjnuRTC2BJqYVGEDaddUPsMm4xcahTAKPy2x2gbnuDzbekJ",
  "key27": "5uHjAYAxAB5D81XPaBJpW7JAMqMj9EEHKdMMB42WHbGkNavTPZtVR1d2mVEHNqYqcfRojfbyBwbRuAzMPBggShkH",
  "key28": "4Ua7LmXRW3BrLPocM8PGtoeBdJUBnduD78K6u5H4ADDC2astfKmNe3zeqmY8yjdvSxS532135VskMrCdQmiuFEGz"
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
