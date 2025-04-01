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
    "3C6zbbiJnJziWBZY5sdM6egd3zKgoiXctLSqWNoeafoLLGhFqTKMLWpyja1P8i7ZnDQxFCKCCuHqfB3ryUXfLJVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kxNSGS1xrYXe13c6fgUzya7i3Ki8qc98PpWNqofdF9sLGPA17GoBREFbsAbCB41H1y2VKCa1oM2aXudbBgXaMAn",
  "key1": "4EwXc4jVeeYZB9acWkzHsFPoYdXz3yXmFpB1YX2etyyJkQyd6sydWbAHGre9KBpN8casjnMsZbbvsrV2xQfdfJ81",
  "key2": "Bvb9pyrqkpPkEBAP72JuPvwqoNkJ2vNGCaP5w1UZ9HA9Tv3BeopfUDCbfRZJsAwCUYmNrAmKhj4c7G3ewYmWr1D",
  "key3": "2h846vDAG7n8XPcfZu3z1AH19y9gNfnsUcrxgzTq5FRG6zgwhSMJrwjdjmoBBNho7zd7GTgMpgh9vKtPZe5aPa6F",
  "key4": "4LGuQtQNGo4zJx4wRah34g8bEuErsnKx4mY2oPaSCLknHQEm3Jr1EwcNXRKWyUjyx3SnMyEkLTAgnTibLe4FZzUZ",
  "key5": "5wfVQP15Uxsw43AM6UtJNUAGjFg4EwDPx6qRiXAcpvnboxgAVzwjkGch2r7rqxsNjmTyo7HYjBSGCuGa28pkNYcK",
  "key6": "3BtcLjnByNGv6icGiimt8xTHRY4GWAPSWWhRUFEYqF3QoQX3CS2gPMZGofa1fZ8wyH7pWfheGg4Qx5kH3ex7bjxh",
  "key7": "56uv15ZSGyn71R8GycsKCpiLizw4P8hqLyJYDahpsxYS6JQjaJFwUrvWLQwmWyod7B2VM5Mwt1KMWXMsKsdUy453",
  "key8": "2ouBJF5UtvEhkAeDgciwfuVKogPxV256uxoHksNP4rkkZS3z94khDj9JbfJWLCTM1DpMNQTZsDaHuJSHBDFx9R2m",
  "key9": "4fXUwUgrrftuARvKR3zyQgVPPndAEBjU7J1vHzVDkWQKmKix4JfDRYahBY5mXGb5tpEjsgbVFKkh1p8Rgf6isirf",
  "key10": "2eHa4CGW2sybxrTEUNMRKqyyG4HiBE7kB49n4eTJ99SXJkwoZdWcvQGg1BpKep5Mw3M4ksKvZo726smBJhnCYQf8",
  "key11": "3WLyQ4uELAMRuuMDm8RX9d7ieZir8HzZVBAB2yXzp2HoE3iMPbivEXjnVbGiQKUuuZ9tt9yzWQcym3S2TtcDH4oe",
  "key12": "KkdrCkVNNS319GtbU2UketMBbA82yvQqSB8bEsvV3DvayfmU9dpeBTsvC81hoz6Ac1yDVfs6wpTuzQbMd52dE6z",
  "key13": "4PTqyCNVwj3yh8nPgam4Yt6tJ2zNGSEk1rk7Sm8hAF7Rrsyj4YaJ6mdTvQo3MFFdGnHiRoFZCWmQ1xVb1CUxjin5",
  "key14": "47WmW4pA2i3wEbUtfs5qg8RTtAiEmH8iP2Cuagb2CACwR5Q6whyXvmwqmefmw74Hok6GRdoytCjyQUGg9uZZFwVi",
  "key15": "57KCYnirCAvJyVPhKQqzAEWFW9dXJfXNrV2kVKvGbGunc5CiKRGaKgXbyQ8RHoYrfdPNmgH2dF64o6o1ErdXiin5",
  "key16": "3pFJ4v1RZxtNqKZve1NfL2TcgzomPVHUnMyigf2hC4jZR4tjvLgA2zfbRhxSxHMeRmuaFbH2tquM4w7MUJaeqYnM",
  "key17": "z73WkHKoP6mZUNjZFT1snjB5nALYY4YxSWR4qTBag3e882C3yC36dNECpFMhYViMe7FgdYcnNR7NWxXhVCqJahd",
  "key18": "4xFzVJUdhUxV3RTn4vAyLEcXYHXAKAGjFgvT18cLcPGYY3KzVCGPa11CjmrNMWqxNPPSjUi6TPqtnGUd9vDrZrYH",
  "key19": "2n66ht3gZdkeoqoNcBbZEUei8WqiUn9hwCboTX8sgvmFXF2RqGGU4tmM9RJxAYmo9gzPQb1rbzxprQds5TuQ92pA",
  "key20": "BssaZST3BZaWoLRHRfS2NoQdqhHcFwC4oJGkZ6Hv9g1BW9axmzuM4RZKubyEcp7M5jSVUfdKazDTu5euDG3TTmy",
  "key21": "Z9d2s94cELotRfnKr4toYvxDLbqRgZNgZcPScvMsac6v4JNw8fBsPxQarPuDwMQ2NjZBEaF2ssxVrmGGxrj2H8r",
  "key22": "253ZXx9tD95Wb7ozRxW7reUfx5qmpVnzibRzxmWVrCFjWqEBfUBb9toUCbyB5w3psHYNeajsC7gWvSgWdwtyNMxZ",
  "key23": "35VrUngxaRmYe77M8Q7rNnHtVMEU6q6SvCR5BuJstMTcWG4wAH9SrogByAHPky1UfwCkAP3d1CSL33WRcRzZHAun",
  "key24": "2UkKB6RCAbAZ8qt3Wnb63GRG8sKxMKXuDmSzuTaAdJjxKdBZLav5s9buvxiRTLqqQeS7nMN9HR6wPiRD1jtJNjKH",
  "key25": "vXAxDJREH1dBbyNGaUnCMYp15WYgSfg4pVEXZy5srLfXJqUz12yxH4cvJmcXDkW2e8NKdUPQVVhhPzeR7bC5qaz",
  "key26": "2urFAvGfKs6Sur9qDzb2fvFg1ECgyqKFgPVAgPjuRf4U4id5WQCrhPzYDk3688zM7vdpF1RRqFYibLmcQR2xgMQZ",
  "key27": "4ADTYok2F8exso41Dwo647X1wPawqjQdxD9u6n8TCNXRcJAdfdKvkc8ozWAJSoBjHLuendapQ5g2nnvmhmY5fVsM",
  "key28": "46bXH5FZMNKusmfgdXBQnDRzR8CfpF1MRzLX6dsn5ZJrchUCSEmU5tqcTLEx4AtWAEoCuq2hJNfhp2dZywdseQ94",
  "key29": "2RHuTJCqv1rUkMQhnARAcGKehexEavhGk8vnfCqeB4XJfs5v7ijcvtFV5vsSDHwha6MJyhF1gkxiqLVqYi2iixLm",
  "key30": "3sDD5m9xxe2TQncicSotLY2ggnJmbNBsT9QYmviS9GshGe8h5efg4MqoNN7ZKujt4ExFh7q3bBangoQZPDGEpLwK"
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
