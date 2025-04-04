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
    "54jyotkjszJrvG6e6wbJdqLuT85UmsMt4gxsrCEcKcNR3agB1uQoiQA6YCXqXi2ez3gHXw1FEuDfGSJz5PeghQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RyGSuSJN9S1z4tXdcLLkfttG3JJu7ugpZiVbx8m7XXz3Lc5MceoKk4xgAauGKt1zmaboFTpztSMAXNtg3qFuevf",
  "key1": "2tbSPT55ZLRNLMFkjKatuhz7dQkNbX5iecG3KG5dYhiZQnh921KXwEaEoKS3Dy3ovK3drruCpa4X3nP6AEfSfrxj",
  "key2": "5e5fqahAymP5N2NgVF2kJBvSkMmgqUrLmGdGKUfiDVUJvxVa7MU3kk7sqV5UQWR2XqBT4fpjtvdPP7voUVVow6rr",
  "key3": "3eSdhdW4iswgQNCErjKUmoWbuRTKm9FnPRV3QjCzaRWmHKy6ZVqS12g13c2nQDN4Vv4ria7xtDR5aRVHsXCjfu1y",
  "key4": "EmahDpHyC7Q2xEqq1cZtEqsdk7YmFxFYU9Z998RXeiirAjjG4XcfZUtLxnfiudP5uKeHaSHGqbNKnaTsE3UMaUx",
  "key5": "2qrXVwk6YD4uw7g2ZJkNYfTKoDqMEjzVNhFqrVQE6eon9pfCgLkApmv1S9V2Bj6oiqj1krMPbecF4K7CwytBMuF1",
  "key6": "QWSBgvW1aijQ6NHEnSMpf7jQeFGQt2eCergKQftH1zFV2Ei42gB1d5F57cTUdu9dr9vRtN6HH7tovSUaojz1KbH",
  "key7": "5skeXFPASh9oKZiUVCij6pE9iuoabMheBzpjYWpeb8EGtfdWHfJbGYL2a8bxPBXZFKWcvw4UpRuXcQ5ZfUrryVVw",
  "key8": "5VeCkyLyKYsMg2warFa6z4Zocr1x6c9KjM9HnxpwxJcbXrWkVBxZQvgDWpgDkVgjGhbKCjrLNuk3SkHMV3Rk4hJq",
  "key9": "3LNK6LbMniX7227R7FLdVXMFQeus8Wczfarw2kptk9JfTPb2qVqqUvvwi7t7R2vtTViHH3QCHJLC4F7zjvtYfYpw",
  "key10": "3C627QBfWgDhP5pg4WL6WRUoWZk9QnbqrtmsDLEKFSsfqB6vaAjMzgeDRTxNtqsjGxhw1TgVTiEBBknkzVFhuW8J",
  "key11": "KjRwJ9huZPrXSWhG4LpDGv7UpPDDSJzHifukR1gbDwT3BihLXipR3fXbdugnAE1MNCqGVRMco7Hm7fYyHpQce6W",
  "key12": "px4JyLoJpzZUfWHKkP1ygnqm1X1d3GhpfZTPTUHc1varpVAPTpMaUBSP4X4D7FobfHFPFdyhPykdbpETdgPTPSy",
  "key13": "3YvToogycjSuTmzE1FZziZP5mqVMao3L1QiBZviHaHLb5YPm4n72K5eGAwr72kPMKw2ngcYJQYFpsHTs2Nbm8Xc1",
  "key14": "3Bn5AJMvdrL5BAyLYAtnJiKC9amnWH1WMjndK8JGmTRUhGFQ9gP6WGawVY9wde5XGZo6ZeHvV8fXwAAifwnUayuT",
  "key15": "4L8umRFJqk8sZ4GqFVsH4eooZ8eGV1YUbixrSPHhqEgc9ty7Un6NKTNvoisDGNeVz4FGDGYaViWcuoMVbmNaoAa4",
  "key16": "5j3jmQh1nRg4En7suoSzEr7j97Z3s78kFTFj8mR1L4ZMh68ELHKEKNN5o6BXQyVgfocgsNs5mnich9pSm4gRzCbX",
  "key17": "528uUWL23x395wSziRSr7ZTF4sEwCX4yRGF3sT1mvfPa9cp23rs9eUhKGQ2tKnLtDGKcXdkSntauTkpFNZfzTBEP",
  "key18": "4RiGazcseC3NioCGDSRno2fczobPbJfxSj9Psb12JfuS2ESmFAHReyKouMS5pKeQxnjNq4a8GSjfUEnv8S4dhtNW",
  "key19": "3Jitwziw1jPPFjocf4i6cfumbF7YN2XMPn3CKPBHEfrRiC5wBk5fPYvM3KMddvUK1MgQjv3nwrzs7hoSFpFesej2",
  "key20": "3Ep6epKMLJzkCZm7oyod8Sa5nhuFFDQGg3QrDEasF67ZRS9yJNX8yZ9T1BeZW57EWJCoSTNfsDHdVpVCjN5vgNwb",
  "key21": "5fKFpPKePGzTS2BzYpcrxRiyF2MwHFWbTyqJsgrvuTHTZhpPrkwyukSgJJ1pbGTFhnbSZh8Bi7Ai3dksaqTSccvH",
  "key22": "2ksS3xmWfwvJaXBtsCsDSbBpRQ57tGJBACbq1BQsZQn9TENxvbK1EQAxm7nX43boPVpZ9HofetBt5eEixD55XRyN",
  "key23": "5JyEcGDYknvf59tzCQ31tjfndHRKYuNoCErWf7aZdXKerHn5bms14p7nM2Gw2ZUNS3tEt4BKRnLUkhihR1GWoikV",
  "key24": "2XCyCvjJbe1R4FWRRHZwmb7uuSygq9tcosH8LnRpNQEkrtPBEBFBUzN67uzMPfrychGPD6A3shXZyWkS6tnHsny",
  "key25": "5tr91jK52VRehSrtzDXvZTRiDi8Uw1hd86da1My6EpswvJttsEvqKF3bomDMjoQHHjCGAHRAmqkshogMWHDJmXjM",
  "key26": "5VuTV1Wzt3rCQG3REBEVXX4qxBakz2nbQHe2mjBhRWEgBxMDYjn9ne6KNJTFZgPU6vq5HssvVcHPJ91fFFdMcA7a",
  "key27": "3a69BkEK2euH1ZonAfov2pNEcQ9NqtGt9JH4a5aMoU2eJWza37E9gq5efA3bw5iwyC3KdY19cVFAr83Vu9kaj1G5",
  "key28": "KWBv3VxHfrwEVkq8aQ1Nmn7irq2KGcoWuJnJz7mwGPamT4L2vg2Xc3VeMn7ByS8TZo4s9Pt3KdPdwgJXZTReoBa",
  "key29": "evdfmgKwraBr3s36Mv28grsEPLxJ5AZT2qtEkLXYfGq3zHgkpJ66QWGy4afsm7inRTgNEzZSUpJN2bYnc7hh4Uw",
  "key30": "P6pUSPSjQKPXyXrhAdgRnDwotsEPqfgfQk7Puceqju2hyU7Yk3cBy2BtfufMS29wnssYTXWzxrceUAmuzvZo8px",
  "key31": "2oN5WoJgi8XA4WMszyLzkHdKh82YEyoCLjHzo2NEiSyqBACP8Tw5Lj8NRguGLsEdEtreDGCEZGZby9QrFV2YBNU3",
  "key32": "4KE5A8UCSS4wPuLBJ3tYz9j4wPyb5LfiADs3TqZ7JHpscpBFc4w2PE7UrvN7X5LF3pTw9aXW2oZEsWjuU4BPwsSt",
  "key33": "4pbMRLueSrPUzDnG1sKnsvPfs87urgieiJdzuM9J5Wc6d7a4ryaZ14cr3coVQSBCz2peUczvvvpPL9j9r1NAWWQp",
  "key34": "49ZRBiWqfN9x8cPQ66ZgnQehoPJe3vCTK2ehFCVBj8Q7akDu8joHAVXZimDwDCj6tEF3WEePkSjnbJCdsYngk4AH",
  "key35": "66dc2QTmwrQZDznwMntkpzUtieSYhHmyDoTu4Tg9JzTkzeDGvPCU9RfpEyfzdFHBXfvsJ8PUpG7P5WRC233FbiUS",
  "key36": "3Hs6AnjKJvXN76Nmuesrd3LU1LiEpmQXwfqtZBLKzd2mVHCSPxUaqPWUKJW2d2Fyv92rFmxyanu7r1Wj3aAuWdS3",
  "key37": "53vXSWpcK6hMXpqekmVCyhiGzbFw2u4QMbibNBJH3q9cLdz9ZLH64MkLSUNFdBLJhvwdo2EV8oFX6csfVC9Dm7uc",
  "key38": "sy3LD2o1NgaUxScG5eKi4haJHpjBCNB3YjmctdSsgu2a98cNYgn7v9NxxRyS3UitDooHLhhjaHmvbDT92BpYdjy",
  "key39": "5fFFeW9RAQikEEsEfQC4vWT1HRAc1ZqScAxnmgqaSYeVQNtjHTPC7VQ47BxF8frYVroaW2kx2zXQPe3zNbwZ72bC"
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
