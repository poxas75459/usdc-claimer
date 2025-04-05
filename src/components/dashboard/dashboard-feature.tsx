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
    "262o5U8xhd9pZ77kyWefqVbd6j8rK28UQmViGLtd6LzGAi46bt1VRA8qRrtVuQRxgYNz3mqqaGT21NtzntsBzReu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XTZ9XwQvFXW82Qr8N2bdvBLJ3gvqPoKJFwALqd6ZdK9Y4qf9a29LRJcQUay9rp1rrYrThWRRciA1DivYUJzr3iJ",
  "key1": "5Ro1BprjYKWQTx7AGjuwQmAWaFfNgsaFHnfXhCBmW1q5t74T1rsucS7eq77qb7Tewm3GHb7VVRa8AURGHegqiLoC",
  "key2": "4jTG6R5CtPDcoMqfev5p3Fd9d45YrpFJcTE3SuLHvo4sJhJfvq98ABCJ6qgwAmnsL2sk8EC32giwJstXes9MVrLJ",
  "key3": "5vL5EpgYeDBFepg6J5hCwpxmUQdwwooryVt4wnemr3LWqX2JuzMX7oGHzZG1eUNZ1yTXoVgFjxngraPonyVf2gq9",
  "key4": "3aEYoN4JpMHubejSdQR9XXzskZLbcxe3fNdTnu7Y3Z68zBbfKnHDrroX93pr7FUKrnhcWWw97mdVLtDpC1usWDDQ",
  "key5": "3vmgVA46VeJSMdw8fp2MLnLG6s3pDCZtnxVp1rzGEqXXtwCDAHMSGgTTb5qkEp8izetEV8d86A6qHLzqXVRjhf5x",
  "key6": "22v8pdYjNKMEq2evF5o9Q2edjvwR45GzmF5wF7uYLTK7Aitc3UujtwnKQgXP2iHWSex9wnMEC7eu1nDDmxhbSUhN",
  "key7": "2Vgw6dQFzjqxDUWEwiNRHoT4rVsVeKTv9JmCVEHRXh8kpfd94fKq229BGVVXeLUseTTSdk812DeumMhXvuULWW7T",
  "key8": "63RuQFHgHZpaHbSPWx3cpHbViBtPsGQrmJc4yqjPU5DdHAKEE587b5k8qckdPESbcoiX63GND25X6mRAvm9PCpXi",
  "key9": "pG6Gn6ie8UWa7XwDC1CKoVMaTkvwxyhGxyhUGsFd3X9MFvvyU5ZdSd43yf5jUHjJ4hRDLgoi7U5PdGM4cDbRqq1",
  "key10": "3g1SrgDDdbXd21QTs7EG9qG1pZZfgg9vScfsZgeGbxU6u4cCjdeTYGGpHSAVAsM2PD1nczcZQQeL72A1Ayw2syKA",
  "key11": "2rC9QTpF2cKFYukYSYhVbVTwjRqFMtm8kwyztfjqhYnvEG6mCEqab8mV2YCkZPe7rVghoDVxtVB6xaMYXzZ41TPF",
  "key12": "P6MDeAiCK2UCYpj4yjjvjnGfR3zGbx9oG7GQ1JLjB2X8HJm1X4H5PvrHsLrEBn9oh8SZ6yRqC5QZLHhnq2Ek1mK",
  "key13": "4xRhgN7aGpJeFWsHnXpSRWQcnMqKBby9Sw8N9zWfDRJtgKDgY8mcgh3XVmdci2t25EshY2rwoBYxUo8rPk17Khvr",
  "key14": "3WHJqoZzanys34qUd69vKRAzwFwQgfHDn5bFBjHqNaHXQTeu9575ohMjyiMkdN17J4UnwynRLHwBpeCWRY9vtxMp",
  "key15": "4N6SwvkvvUkXW156bk92ck9FpA8Tjw6yDao5NiPptJhuPm7iaxCY8Fh5ZUW4RzZoerRprfFgxUg1n9zBGsgVngn1",
  "key16": "2bQ5eY7XQ83yvVHDXqVUqmbGKjXBHXBiCdouYLTjpDsTTMK9ffrcqcsfV52NSovgGqrKuHV8M5rKSHoEiEMgg1bs",
  "key17": "2Hc8fD1HgjdAWaaJq2xFLdwJi47PdRsyhFRsbwEZaEyXnY6NwcdFgL7bcBYLXpzbr1HkHma8VkE81hqZDWHF4XrK",
  "key18": "4WLgzPmteLvTH2JGaT84FUuYc4AKrmB3nbeVD22A1jiYspN3q1Caq6Cg7NwNPasKuzbDgL4DPZ1GtrispRmK38jv",
  "key19": "3CSi8LgnLB7kyGe7VDdE9Yb7FonAAqtXMd9MmBVxrEELatkEmu56TzQv4Af4a1p9j5fKCkRRgJQz9Aqk7s9XWhjn",
  "key20": "3igUE9JmZPXhQE6UKKQdjjxckymmCWeYGk83oc5aoChKAruSfSEgCSnNbbaqgNsgh4aeuzYcgmbbGVuN2oxcHCXt",
  "key21": "5NNpLQjfWrstH1pt6b5J6yY97pHw5giPXyMSppjrXuUcd8gtVyozFMQzRJ4LsTzpsD7dg8mJM86FHTW4t2uN7rBH",
  "key22": "3phVPHV6P5JQc6NxmW7Crq21tovV27uov51TPiEuYDVmkby2CmV2kACJ4Uqx5GL4rN494zGULSBZExrxKEpPZRcD",
  "key23": "3ivhyqtkcW3xZHZjDzsGh76L8YDdaqVSpgCLUmMGw4Af9199BaYz2nzE32yTpd666Byh4XwZGrgVW7SfWjGGJcPx",
  "key24": "5A3V17wYKKtuuaGzkwCUqr7DqrKqgAsy6drpQca1LD5Pd5pjixcPESzYtJayqG9HVyMV2vCqP2DXiaPCKu9V3hAF",
  "key25": "5uQJFKANiVstRwbUF72mC3FVDCyPQ6WidVXZaaRUVKuAbytKNXoGSiwZgQLbAZW5KeqUuB7MyoT1sGdVnwcjaR1a",
  "key26": "RqFE2xkvuZ7Gg3WBAcMhMUZhRQD5LduVyYniyRRSn3aTTEujVryhDn3WUzrgcyjWiJryTS6KfwSZ8Yv86YURQy7",
  "key27": "5tHFzgnBj63j5NAotuQ2CtMWuTNw2dbPinQ4JsVrWg5xh1v2suVtStcx21w3s51RrtiVVu7EijNGJtWiRAJyKVTC",
  "key28": "66nmBCQLqdnL4U6asM6wCgZBK4gEALUrfxjkXNHrKdSgiW8diwNgtJYt2anhKzGZqdb9tSZU87hi8Dd1s6iHViZa",
  "key29": "2tq7jZv8Lc7h2ieJQNtQH4HyXtSDvHGA4c7yZTmeoRUiFcb58y9WhbfG5jBbvY1y55y652A2wPNQj9gqwuNv81z",
  "key30": "2VmtcbaezyiE7EWRnrkCe98S4qnAz6mGsVdHRc3c5gF1aEwCrVxt5xgVmWtFVoL317dakVjfxghjTWvZNvwpX9Xh",
  "key31": "33fgGixvyPjHrenDpbDBffVmyuifYeKne7pxNXgSFqZFDVqKx1Sjy5cjLrfS5nkLS7PKRBnVcodaz2xG7WdaUMa1",
  "key32": "3gCbZozpeEcRKEcSFQ5WHwQX6JC4VuYrSmEXRstwPSvpYvJLRixfUSPXBFxk5L6RPTXzHg2c8ohn6opocyFk7h3g",
  "key33": "3v9UUfsXt6pfP7F9f6WmxbfongMSK4q36n2h4ijmRu4ZuYBZBXof5fSM7FPTeACqW4v9eFJVSeLhhozJXaWYXJ4t",
  "key34": "2axMHwKXBuho1orn5a2SdzaANDySBWLss6JExhgd6rv713MPmNL8aX7crpdcL54Ha8MRmhd8UaqysCmPVBuTEJvp"
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
