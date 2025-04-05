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
    "3EjPETSPemQsnzH7duCntLrURF2ACJqhbXxXLnMdSwY4WpEPbLQE2Wzyrv7AzHGcjVwkBVZbLd4z4BHeADrqo6ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DzGQkaCfB4VCHQRjwNvJq1EY1k9Up85q4zVFxPc8Ehyw95cT2CggvkGNDkDhH1a46H4A7ygtgHNyueKXtZBTAAu",
  "key1": "5QGsgzpop3TosR8snmt9yF3rwyH2GFWBk8pauVRGFcHkZMkGJ234SA2yozHKxn8qXfVRFXgYpJuG1o5SSr7jvpv7",
  "key2": "g1RB4hEu4Z8SdAojtAfZDHvAHBNgbvjUFEpVEsY8o7mGGesb5hyB261T6q3uTRDbSDxUVE729oW1cLkH5kUsTre",
  "key3": "2xtEYmp7DJiqPZ5nfubFg2sxqAicY7HYm5kLADhWTSiXhd3FWzUdCiUa5FvrdXxjcppLd9Kjyx74yMR8g59E1j12",
  "key4": "63hqXXxYwAtGP5XrWNQNTpZ4bzQcr3FQESfsbwk5jefCaSmthHwhoYfXmb33mG9rgqPsmid3qdo9C5SCHAusF22E",
  "key5": "2wDEhkTTpFy8XYavWt7wTzyppzUZkUJ5ErLTvycFGFG71trjEPJ8ZFXbCM1z8rY7nPuSuyLWwoJL3YvTQML6rUJG",
  "key6": "4hwgjDj1CyAVAco8nxcmcAsJQMDowGfVoSZN9P3G18fg4aYGLRXNW6r3PEXBghuJwSCWoRVdCHueiuGBuMr4aRch",
  "key7": "4Q7vJEYo19ftLTbu3Na981KT1zB99yTm1adbhVi1N9UU4TTFe92ZZiVsU8a3MbEYpNc1aYAfaCyJeKJkyia3e65d",
  "key8": "dRRHjjogL1Z5Z1VzLDQVx8KTMtsN6PrcHmaaExXMdGUaDevPcbtkjeZBAzTrMhsKHEYzu8aUkhn8pieiajDwTnY",
  "key9": "63KeQhkUcKzY2PeYntmUpFqkNxjnzJCNENBVJ1weXp6siS3hLKmAZD4XKZmCtucvEsFcRo6h6R6EszRJRShnrVPa",
  "key10": "4e7j99cGVU5NCfVchWRXimrtzNgSZekH5iQEedN8UnzTXorc5QH95qyXfyFjvoivSVNKkxdz9L9bcfCChQofQKmo",
  "key11": "46TNNYM3LxrM5msgp5bH8F75cGuWq7twtLzLyjpo3iguefnyLoUyGwcezpQKQgFhk8geRPRXQrMF668x7mxcZ249",
  "key12": "5VYW8W8KKduuraiSFEHzW9JcqsxF1o8Vv826xRCXC4kVF4dtAJnMDRBn3PXtShGD3MScEyL5Q9ByM7zQbDP5RuSR",
  "key13": "gTG3WP6DwakMia33jqDCieSVjEKK16WpQsK9Dbh1YTrJ28F3Nw24Fgsiv6tBwnhPyv1hMBKY8YJsVipBmJz7ogC",
  "key14": "53tXSAcQFKYzCarEniVYE4y8SabpHn3YnEcGx1DkQN78JCm3f7ScTSNDHMWbwSqGDJQumkzT8WUe9Fmr87rrKi1v",
  "key15": "2FjxqSWoDSFF76s6FTmeoZ8x8hVUy4jCrZj6QSgbu7HrHCkPadidxGcgQPaKDG6NH653URj4CVXVSKKtTzDx9sX9",
  "key16": "4q65rCsTrtAcy6Hj2y1WB5zwvjZc2BFtzhheWcu5m8SYUv6FZ6DqQ7LcJkb7FquqyST7c3RrSCRT3igSxG5TpUDV",
  "key17": "3QeoKDxksq9poM5XbqNqSMEnyyWkgh3EEetfjPfzZamMhiAodqFMX8b2PUYPqXK4n1v2apRT3bD8bUjvQRA9uPog",
  "key18": "2nRUJpbCMKmXV8q6axyJZytCFsEqZ7W1e37pee5mdhDUPL2Q4jZEC6omCBxdktAi6CT5UNqeKCutGAWe5UwQWLdp",
  "key19": "2S5xMQZMPNBz7DVAfpHtXNxAdH13U882DSSnpCNy29jMqUBuKMkqP6c5jPSKXMrrjnTC47RRhqwH4zd4V8fJGpBd",
  "key20": "2Mm2Mx7Sxrv5Yh1nX9QLsq618Au2sMWaduC8yR8JVpxV5s6bxiNUdvmBtwmU74Z8xw9z4HJZADfJj9rf8JA6aLLi",
  "key21": "5oFBoFGdcy6LC9Wsh5okbahgwP9LQs6smBeNYkeCaF24YMJEahhFhYTDFRCvpfVM7q3s2vV5LKERbEB6i55wCDD5",
  "key22": "5rtC7K5KDgCZ7bumTNY6yfLx2At5Uf3M9xptBa8j7GHUmMFWoTkwoypByidoPqewAao49P9tvxBBHee6Y1uDuaWQ",
  "key23": "3FHYdK9sBL4V79S3xwsAe4umLpeka5hz4cnf25pR3jepRisFm6ZwiyMPmjbekD5tBv8ubPF4KhwLMw1ErX7JJKKi",
  "key24": "25uhQz9SdjNu9nSfcA7921uU6yQSGvRKMyV5r2EmforGA3x6qtxJikVreuKXJrpvEjPMRydEmnP3KFrzrDoyDYyc",
  "key25": "4fLw18z9m7Krjf1eT8PrUPEr6JRPG8ByrjgRJDmAsTKp3CWyDaFZ4My6giRZbK4Tt6Xc1cXbGMBbM8a6k3RM7eTJ",
  "key26": "c8LyjEjRPWGmmqUJeT6uEtpX4PFr6qgVoX9JVoTqmxoHAEcywmMgXwUVRm3viyhD4kaqps5YNCKt6GgbjpyBm4E",
  "key27": "GHCDMXPUqQCUSKD5HXhzWtdSXxmUMoT16aoQ5fXSWryLx7jftwc4kTofZcQ8KT21Z4p7PHiFrrJVi2C2Cd5oLm3",
  "key28": "51FNq5oa8H7UDRjkJVb6JxiH1V4DxPhn4MrGdVJhRiYJn6HFvfuAizRdVvSNeqhoThfJi4s71mUHCt4phAmQcSZp",
  "key29": "3NEfGLAjVMMnULbZ4BFmFnVzQcakNACekpbquRFXYosFs4pDEYwqCLRZpeNNbJNrSt3c3ptJ4m6LN49CGGpw42mE",
  "key30": "5rz7fYzVTwU1yHHeGGHraNu6mzdzGpbmuTXKtj3cQwsbjRgaDGNHzq3pscVgzmzwN6snKeCc47vzrZszG41z96NT",
  "key31": "2mjPdFxoGzyQEN9y7beyeBDWwjAW4CsUb1xSCyUFmsCQHutQ2NwSnXfH1XJUaUXMaYC5dg71NNc6FmESAv2K66eN",
  "key32": "3vuA3S6YnfpeVxh4otSyj1FcLyWk3meneinXPRYi9myrTxDiYNwv6uSfhqnec5fTqFDCJ2DRY9XYNnXf7vtsPeVB",
  "key33": "4eF3yRC44hkG6qc8VQ4xA9k2G9breibLzQKWQenyZGLmkSjKZ4bRxkwao69fq6XKBgYfsAiMG8WHJ2UbVAc3Rgkz",
  "key34": "2zH43oGjux4DfEEnoiWpWXwJ4r646uBhckBmNvv51kzCqXVRVSVU4sgqNUYjUQGd57siXDF9Z1oXUFy1iqybZn2C",
  "key35": "4ZeQPi972ioM9NZaVprstBLXezPfvobvZbmEaTNBHrLXPYY45345R7QL92szDLGCq66T6y7aTMwDaLNVjNgYBxHH",
  "key36": "52dkcmEryE2X149LHBr38AkDLBsW2LNmgzgMx83mBnK7LBba1kw5k3AsSkf6oqeSC5asGQwmrefEvqfrd2pbGqoz",
  "key37": "tUVSHsGqccHvdfcz7yy626feCNFzhF6MtUjcB556ppzgfJKQicphY3M4tZMdGPRT6web7EwfLcZbitFwSWvt8mF",
  "key38": "foUYu5sbF5C3xGb541vPKqmoVzqqB54BPjmgcSUSS11x4EvzjjTEUu8CyvqHR62JuzehUydPHNrD7neQMaQP4wb",
  "key39": "2XD5qe1YuqupXa2HyinQvqgXgS4j62k4ukxZKTAcudzpVeaPob1tPAaQCLLZMa2zejQhJy4U87eQhD2pzF5ikYLg",
  "key40": "5kz18uJ8X4qh4gmkLguGUQVYN3NQTXVtz3Y7Xu6zCk3Av3cPnCyzbzQitdMFfVRD6pirddyVe3gchD3KEsJKcmKm",
  "key41": "4Y8Q5titErqUNWgRoW9NMXE4YTeKeeNoKTeTFs1tBLtRmkysjrEqxTWqHyCScuLXneipA8HZfgPY9AtRGT43a433",
  "key42": "uRsGus1qAQdHXKZj8Wp1MmsZYQ6MZ3utgbDg4nr5zeqi7ndAN7VKs2TdEZCqKXiXGcAgJmeGNjTVkqqoDFCP5ME",
  "key43": "AJQUJ3Qm74mHJcigmui6GBS7w9TFEhV2S3Qnbz48YvJjAXQueqiqrLSZGsEvjdWv582CWVVjLpgJEahsPXMhcdM",
  "key44": "3BGzTKVFTfa5Q7wM8XnmmafRdpe4wq6GHMj4GjwbA9aFs7aY4L4KtfoLkSMbwgjUAQY7o6QrxgbQb3UNBZxBnysc",
  "key45": "2W7UMmNbDbrjUso38KK8rVkrkmp9ewJw9MbEEDBmKFkTjsBwiBJbev543RcgQjrTCCuUM1o56ULwkhL51WW7QLUg",
  "key46": "3LLtLYknLNAsEMKiG9qKzJHfkmTQnGhsCS23rHDTLxn95JRnnHtuUeGMYXA6xGmAAWQjV4gTWFHKS3EAb2paNvCK",
  "key47": "3d7D1BHTHNApBzTto7c5JGommhzMU3RVm596D4qmQRFXUoUH4rDyypcBGd5X4vem7Gd6M1bytfGyibQSuy1S5Naj",
  "key48": "3QdmyrUoPppqzkwd7ewCP5X4KhKeyGnivzcWx6xkKC4yCEeVrVirPNnb5TYgWkH1yw3fxeA2sHpsJQQuEXF3SmVP",
  "key49": "4ihzoXVST44QxKLWQjf2iDih2fnXxQeJ8poQeoH7cFFPfHc4Q651uzLKxnWLrKrPhgpHtEGVgC3jpAHaADrgeFoJ"
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
