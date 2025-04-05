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
    "55srTvKP7M8V4HPDrnZTwJxd1VGn3rfyVMjVd1T1VvuGARGFcm7BwzqZgiXSWsqjRrmq5PP33xXpDSqKKdKgQq6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7QbypxJgpttZozCiRPbwaRmysZg1RYXy3tbJRyT5CcbXFAAo8hwGc42rbw7iotg7gtqUgxWykAHiC6j933W2QV3",
  "key1": "3qwFDkJCvGUXq561vDMx3PSe6PEqL59vMbuJu4y3e4EPVaxNLxcFx29BwMkLuZf4zyUB4ScTuoxw5uuudDiEQ8kX",
  "key2": "5hKoBtzg3qm8icrcf82qQFgQi2FkddmF5SUWReSpAdhdDZjpiQBNQ28k3kjdKiS7ECcHs8o5zsbHoGwMZRYVrvu6",
  "key3": "4SrmMWAStwa6MA6PjL2NcDpADTEaVxbvycCjZzbomYfBbnphUsKqY21LDCfAaiPHopzJdkkNAe46iqdYFx7Yye6Z",
  "key4": "ax6ddnMa7Tw3UjbBGXfMq8AgGhEQ3HESa781ppKVr3K1ts1kQxpHnYoBK344p5f9MZqBkP2jJUyFAiQzxFosZzP",
  "key5": "4CbL6WURsGR3MF1mo5u6YJzpmhDpcrUjRWN4DFNNZiJnDZU74vK9Mkjt5hRo6MCGH7qDyH7Y7K7HGbdQ8ocEGacM",
  "key6": "5gVZSGPnG8sHwibuHBh1QWnvPMc2Kcs3LUx9zPyaqrKCLsgaJG5gvB65caBNDwyo7QELcAzYQAYCcut4z3WSMLTX",
  "key7": "3P5QtvpZV8DotL71CijUy9FQzS1g9wiYo4WwvzAZjzMCWosWt19ExCEHYaVBxPotCh31gheJCxJauVyxQCX6EggB",
  "key8": "vsZY2rSomWQzactodVWquttTwzBNeKUAZbGLPgw98y9T4r3pBU3eNUsXHpFcCoRM8XaqAf6n4fqvcNXqJmrhzXB",
  "key9": "5SAfn9HDZMJa2GeNRj2ez7zBbYYH3aUUSmrwnUjGMmvQNfWVHJ3dNJSssAPdne8bwWnAqAXySe8yHnUKyTfvJQAE",
  "key10": "3Kp7XQDkGnuUQwcACNQeBhEZbdQBEjyPsRKiMd4hz4iBSwNoDfH3TLHZDJGVZnvongEVQwuCuWiyxKrr3f6qJAdv",
  "key11": "3ZNRTsj4LEfYUqEMSx1CtQRBeiugnhioMAEMYgCKs5y8ZsE3wH8UzkAte8PXa8ooGTHn1umcRDSfkxFWsa5i64rw",
  "key12": "ydMeppy1Gsjrhei1nN7dLt5GhDufSB678Z7mVJjYwrBfhUgxeuCKERkPiaZsUSk8HNqVDBS43FzRV97yFPe2HoG",
  "key13": "2jpdCcUedQhA11sQmwpLDAqZbtK9fxFVasARxWjyPJtEmJnH7VvAinfniXVLCFUVBnpEpkzD6smmF84LdnNSmq3T",
  "key14": "2wMTwCAEewGk3Bigbf8Y1cw2K3bHN7wzh1j1NfKPTAaJgonJWezmq2bMdn2wkZ14S3Q8FNq774ox2EtpCC4bgA3i",
  "key15": "qcZb8XSrhLBaToRYkJaBU87CeJBnWio45g5ErZRA5jGiVx9M1WaY9Q3KrxJofWKVVyd3opcPWDg2Trr5jgF1yfQ",
  "key16": "BmDkqd33G8B4A7YuiTPenVjisnAcwwfqEsDBotFL3bGyJCLyK8NmgCJ6n4wsqL7EpjzQDYog6vy32pDRnmTsHyw",
  "key17": "22B5QYqZP1NoGGXVQNEoTyRx56C4dPjXoKU74fjdbwXCBcwYiy49fZgpvK7WfZbehh7AS8DwyLgDMTaDV3Hk32o9",
  "key18": "XjT4fohNn6dqjAUqvfSXJj15yBX7XnNjFtQPEAzeDDvXL5wf9LcyqqT131xxaDVk7KUzDkT7J31rxxXNhyng1g4",
  "key19": "4b2hgSj9hUGDkXoN6d7yEfLhRoEyAwT5VjajjNYM3iwZUK3YMQtd7CSzPKhpMCCN6z8VaXa2AVeZzKExosViqH28",
  "key20": "2eKta2VuCrF4UqzmWendc32dw4yVXy3Nmr5E5oCQGKX5TfnrtrqpwQmHmh8awz3RdUDP1i6X9P6reWbFyCPQwfqt",
  "key21": "5hWuuHeVHwzgCArgehuKYNmzcb4nu1uCEBRpQqG2esiQS29DpbNjFLyGy1yVUJU97R4h6bGgKEZP2iEWrkAGBJXG",
  "key22": "441KZuDyWneHoyALdp8gqA9doZbcfjaxrhdVxRmWXF6yrCRDBFBPbfEb7QjuquNkG4yqvxpmj45SuRq449KdziRb",
  "key23": "2PTtMn2STdRHG6Lj4W3iNNg9VPRrKtvQJUzoPwp11SgSts1GHruhGdTLB9Vrk8Mk19ezYD5k1wi2RMimp9TD4izu",
  "key24": "dWjk1W8mt8xrFqu399vcQQpzpX4AoYL2UnBuz6Tyvd2z5vGfWvHdeB1FVHjj6WQaoL1orrnqHdWu2gVdKjsBK25",
  "key25": "2xNLZc84KH3zWE3PWcsymSW5aySXe266g1vwroCUhPWfkppU86oRgzGUaboZ4TkUbx4tyuMMKWRC3iMZfGj1pbyC",
  "key26": "2DcbVvveLveHV7DdrZP2YeSw1SpL3HND62VWSrEduxxhzkp8hj64utK89Whpim67Rncwh4G9V8aEQ7udb1NAoyJd",
  "key27": "4QtvbWYcubLzVk1BBmMSnHXUFra8djBZXgn46BKUrSmV8xqzqucxUVRKanmkxxAGAruv65Q6dGf9vCJeJRchd8TQ",
  "key28": "5jrWQPLMLiDGLe2fYzWtTkEP6V48ya7nspUfSq6SXjrSiufnTmtsrV9M7RCxzp6tSWBoTfxT6drfcKCEevaKbgRL",
  "key29": "4sGz9ecRtxLasL1D2wTJrQ7Tfr48F9VLrrEUxhy7TJeiF8dFLEMs1FFBAFsgTZinvg23vwBfMya3ubsq2S8EjnEX",
  "key30": "2Hnfth7FFautzDjnjdLS82eiz3u6eRHD9eUfedzdUAqHzDzvuKJ35Eh3JXZEJ2AMxqTAgKqL4RueNv32KbgMEQ3e",
  "key31": "RdM44rK9m192hpTrUqseigbjXEyeoVeRMsWhsfUkMVfAY9eLUoYWUPy8RyeUMrfSVCNZc67kygwjKFLJB79CDb5",
  "key32": "J7eSNGLLPu15XCa76YGSGQsYJpETHV72eLRyF8PDYxkzu9N1f18i9qKcVSpfeF7jG9MTaV4c9hsjZDxHFHYaxjk",
  "key33": "whTztaUFv7ChtqSC5fmmPxKvAUf3AuPummJ8Lac8SqLKdsi5oc3RAxsj3tSsV9HLBqQWdG92oK1XusE7oPKhNDm",
  "key34": "4qXRAJp2r9EdFmjvQuZhAH1H4FQBVmw6snH7QvSR86DomBhMGF6Y8Efo57YnshGdKEkwNstJ2kNNrhS3uaniCqSw",
  "key35": "29D4v8tvLbdm29cAM7YxEPvb1AUikLKtqJ1jVYnjZFagst2SmGFwsYyex9JwpqVZEKqYHdqnMxwKDe7eiS7LW8Vy",
  "key36": "4RP8mTdAehfPZpFSCtRFBMNUP4g2Wq3ozzU1HM5tGNTQjjKT7ZQkRXmmiqk1NisCzkaLKoxbhNZPngZ7BVwDbsbi",
  "key37": "2jHQdXk7DsxbtGHtSs3N8sm2kJxxqrzVBfQsP56Q844hMDMuN7erBrTqoD2hWbkF69WWB63Fydt3iA2fof7FDL1D",
  "key38": "5x6ktjW4fjrkqb51ZrPhnCJonGY6nJ1YuBtcDfHkpWNHZqvqpFt5U5rkTW6LNxgNKo36fqciWn6MQiz7uGNeJFpX",
  "key39": "2ouN1bBkY2hFFJhxDHjMXcaKGnEwXhZi8JU5cSJD4CPJecZVN9VuCAwBr8TsBCWqyf58VDDQYtAWobeqnzSHvDZG",
  "key40": "3CNVJ4BTtLm4WBsU6S88QzWXbv4uFzYHrVsYLQjJ4u3MjBuCu4giGpwMfXdTzFKBYSgu31irf3Fq3urXyvHYmNGo",
  "key41": "5dgLEPrasuwajJgd76haRx56VbVe38VHCxexyEDhpvWXospUXKbDodQxf5MQAnahcq3zCDkWiTdvCEUwaq8t8U7z",
  "key42": "PprFnyV23tPZ5wrpg95buETW4MwrVAopYuAMkHKvq2fM4VRecpihqeND5BT1T8Cy1hi56aYesgGfUyjdHLAUg3x",
  "key43": "3saDVXRRtstN9UgzATwJ4QXLs65R7VhFzFf8aV5ZahzPeGd5PEH3bGcEXNZyTCoooBfZyVuT1qjygR5ANV7KicA7",
  "key44": "3YYT3eSk5nBSTEDPStuonv8qEyZg1BJiv6w7xzBibGK1YwxcoMwcxgVQTF3VQGhwtBWXdxpN5PSLdeDAEfno8i9u",
  "key45": "2qjKbx66NVGQRweDKR8EzzU8VWT2ASwKXq6zQTjXag6Td8ofm9ry7rmF5wyk6HmnqCqQaD7uUFd8BT41TXhMtUxZ",
  "key46": "rLNTE2PPLVrR4tSrUpmpxEAP64WHXHtafzwm7emjJZ9bz4gMNoAd4Du5hcq9Tt3ik8k1EYXdKfEKnHzCPdPzjji",
  "key47": "3QkzEbmZhiTCHhoA8ki2MPbTbpSFa93r3AoZyPuXtS313wHoVoz4sbF4EqnuKF8c9ra1NkDW5P48jF4u63z1qzAA",
  "key48": "hppYtayCaC59GULgKXUZCMuJAj82nnDFYaQffaiapcryUyP6eYc5xpzBZLBCncmrnQ6hWMzkRatb67L22dvSAPG",
  "key49": "3kfKxmyF2XcSbcbXqvFxBRqhtCk16TsCgUVHtHc6jh2hPwignWPmQcSBR9qSEiqP4BFdexgsPntyBYgB2YwD7HwW"
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
