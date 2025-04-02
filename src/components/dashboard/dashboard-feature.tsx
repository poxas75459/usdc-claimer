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
    "3vBpqs8LhzRGA9sjfr6uCMxh72x7GfE9ZGzmUdnWHz1cgc1en2wTEB1Srx8Y5U2gbT7e6bJHP4Ky3njUFjZ3Cifx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPik2ZFXdfJEY7tDQHmdMf6Gu3tZUQNACdtTCKoAog4kd2xx4K4UJQEAWvLNUPeWbgkJWUDt4CaafWNGPR4sssk",
  "key1": "MLDhurq5z5Af7X5EJYBERa9SNk39R4kA3m5bPQw8yRKUxTMZPrVVZZrcKcmk9yMosxX5ebUp5YatKUqBqtibf7E",
  "key2": "WRQyYwHqvCy6VzS52Vbaxu1Ksmm9oBQ4NXd7k6iQfzfJaAEuScsPUBjzQDQEFHNj8jW6SDHhpycQvnfd58KbseJ",
  "key3": "2mUurJTedazkv9QB1UzzEVKWKjfakqBC3jz4DZMryQU9z7FQtFcSiQwoiq8riwJAmXEamkdRweek1yYQNpDD3iCa",
  "key4": "5i5wAaFwSZpEU2AXiJu9BcuzRBrmxGT1TnhpCffKpYZkTiJzRpnX5fiPcYA8n6xnhHbCthSHwN267PrpFNKztMfB",
  "key5": "4Wp6hGLC3eTVJEraYKYzNoumWWHo9bsGNtpPs7q6MsXoRL2nZ3eAnsYm5jquYAy7QNeGMPvMYM6aUsYKX2Vjc33H",
  "key6": "FAiBfYgVN9R4FEPgFe97jEHqyLXdffp3n3WsF5RaqqLaRZiwwZsHz1p4chDXp8tNjfZo539y2EvtGa6WwfDYZfo",
  "key7": "3vr2D26swyddDyVC58kP1dP1g7NJzjUpRP4b1zWM2Y52gnrEQxV3jV9KjqcYuovbYGkBtLdXp3LTttFV1Fddnw44",
  "key8": "wzb15GTvMrjHSkRRmv7V2RGPwH64SPyKscfjdid5zKTXNvBcwzGkUBdXtrkHhKzJMWsLs9Qqm4nhBTmbtda5p1E",
  "key9": "nos7Q3BwgqCxKCEvFvjYyEjBoYGtsKxLafXKaAutg1SqXFJU2AtYi6b4wNXyMQeENtb4JJe5LQ8jThjpbKmpeYA",
  "key10": "4wC2DiykvRvstWCq14ow2AVjHamfcHZVTPXiS6AxAKJWZqchLXWrDnpRFWsEpPsc1S951AEtsXiBUbWHfYNZtvut",
  "key11": "2fcxs1iKmd3npiVLinSBGNCGxFMa91ZJaPuchVyX1sj27KP9QFp7sK1Jk4nKsaEmjymmZPuDVaDHrXoyer4xbUWY",
  "key12": "raKhXCY9JMohxSDNuw2ySdLcG4sUbg4K6CUNaw1k3whcWwQ1LSvsFPDLjZ29NrDKN1yDa2Hbxjte4vDVhisENUD",
  "key13": "xFevKd2JmS1re4y1U5rWTqn37zmp3Z3kECTvhUpKvP3GCGxbWMyZq8G2GQa8rX3SKbXhHemCMQqed5bRmeE3d1u",
  "key14": "52zcTWjtM2TaoGQjdVQdLzo6YBbzK2Tu6xfMfmh49ktoJStrxs2EhaBi1W4Dyqm7uLyRAGUVAgD7YeGskeRTxL9k",
  "key15": "3FhsXi5zZm7e59kBBm9VDpDEoKh8nLVvjhfkYifQnDoNLXQmd6zotxsGiqXeCcoVFqhy6JQrsyhGYxrVMitRoU91",
  "key16": "28WkZ5ERbrNNUZi8hmBEmdb9BfXEDCdGiqbmdHFKZXmWRri1r1so5kCyQbbhovuVp6X6K3Dv4NAKRPnqGxUkdkNy",
  "key17": "2L4yZXSZpy2NWzM4EL96TJKmsVJQMo9hbtP31duBtEHDEvWMuYcEw2Z6pwp2fAGtfB4hNxWm9QK2ycBSb7d8y8qj",
  "key18": "2iNgymAXRk8dm5GPJngFYceZGu8NRxibFYRmb7kTqQovaKPGaCnbxvqYNmyqSq3KLu4Sm2ASZN5WhXoumMuPmPvS",
  "key19": "2xgxHLxubFqUDQmPgvztZKbdhcGV2TxmLacZAVYDDX1QqQsBgwUNMX7z6sNjAtWhgKdMaJvWVaSyBgK1ww6W9dtk",
  "key20": "2D5BuNrdRmVJRJ1bpKXhnMm44uGjswbH927esX98rHRmX7pQATZcnwm6R7hhMidV1PvRi2MNyhPd3pFHyNwMU3m5",
  "key21": "361trnW2XNLrn9VkfSbpxiyHchZFC3ceCUrAV6kSNAj4E84hvK2454hnGagJjQWWhqJwsyGGAvn7t47GCHD6oTPd",
  "key22": "4vQYQFSie9VxF1aXPrP4kKZ8weEuAJDqs6As8hxzPEYc7d42f6QPwiwKWDZhRr1mrw2oytVJ6YjAHaTMs465VgVV",
  "key23": "4sfcW44Nm4MVo9bFJbijy8L81nZ8ExmHPnmyZZy3PyXk7BCjsrvD3jqVtyZ3cBxgAQqEKA1i4HcMajuTGoRf6yvA",
  "key24": "3kzH7c3vhg3r3xMogoeK4gfpq2LXScAAcrGT9LqKwEppB8VD6EJWynCzX67pPyZSDCQEQc7dD1ckLKEbhzbLm96i",
  "key25": "C2YVv6No4GwQk3fd3XuGtPRQKZyzfmqxQ2fnPBNmWPs1zamQho2oM4ZbbTUfLCHe2wY4myEFCmJbRGWFZ4T2cuc"
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
