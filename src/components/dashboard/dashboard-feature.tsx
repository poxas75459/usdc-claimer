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
    "5QVaMLjeBTD7vWFsXedsDt9DBtg1WAVmycu7uvJLZgSReqTzVtDRJQ8skDvdLqRWkFti6ebvuhGtLtqEzUB4oHu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ptyJyPoNGuLXBqNXwR6xJrnEazg8oApxYPWiU1KkakdQuonLJFgFPGZy7WwNM1eCjKJJqTwgoK5Fh7u23Ja1GvQ",
  "key1": "2ZeRpAapj6KhhVBye2fVadRwLpyaVnr3R8jEaT54KwRAZ2wsLVknpt9wGSRwJ5q1umte18DtqGc5Xq8psfg69ae3",
  "key2": "41cHdbFbU5Gda6DRduaPMfqbBjHVY65RnYndhp5byAU7FQVfN4UmV2o9cyb1X5nB1w9GuW4MPYpjxeFe3eefyfzY",
  "key3": "5kQqdJk59h6TsJv46JBihiKW5rKKfgztXwoY7nX5pqzNJSD1LZQDwAnv1RToPctuskKyH5SzLMqYPwphFAYRjkrk",
  "key4": "wKEqX5oznm7JuBUVFKfxbe9LhQwekSLThjZJE4prGcG6Bjwf6mFfwtsH2hV8KusLNiokbzHR3NpEKXyNrsftmSG",
  "key5": "4yMX6P3B1UsRn4jw1BFqjsLXSsGK3avXVrxUJCuqbE8rxxdKh1njDo5nJuFVNoWN8NgyrTZwDZuXGybF56hfmBGu",
  "key6": "4NfAU3gCJkLUXfHHPtSPpVnhNnwMJGozqKbz5rE6naExoxRg1np4obbxfvxrJF9Rjt7ncNjYAAgPm34i5RaDEehX",
  "key7": "4xTPyJSup78LRXnewXi8h9tp8tGhAgLShWazkYpcRnXzaexG6RganZEj8eUtDozKXcRKQXwTqwpfcEE9dHfDj6e5",
  "key8": "3Esyr2XN6Rq6iqQa8kmoQuDyijJbZXeLBnm73AjaNQi9s51h3R4buhKrGdauZX5fbeKYUbABLojcf7W8ca9s7HHe",
  "key9": "4CGJXXZ9h8e8b4yEcRBYag1jiwmcCAYjrn8XusHBxtnztz53dGVFkMtXHPsJHGfhVaCzUvFXAzFrcpsfjxUYVFbe",
  "key10": "65qq6ovmKFKF6BJ49MVZMnJqPf5PamL4k5uWUkAPKuWB9eW5GDDPirDmuv4s9jJswzEvv8uMbXTQxjxMv9uDABRD",
  "key11": "4Y7qGQYcA9mfb4ar4fFnWL2sk1WwekzffBpkyUYZWL4JyViqevnEqaXGF67QxtahKcepahgBy1469gaqMisEjnf8",
  "key12": "4AjNL5ToLZ1P5UZZ7X1LLdccC4rqobzM1yqi1qDitZhfPYJF1q8B72dVYZC5inwzdzgFBxzUz7mAmAfSSLbUeYws",
  "key13": "3jnXC6tmWToXaZswUTmYY2uXmDMtmEEUBLBvxBBmwS2tEgYjrStydFzXdj9XnAvW3bK56yjhxykSk5WeZZVrjuFt",
  "key14": "31sEm9e69sd43ib6SPMKVHw5agx7btEdTWGxdzeHHPtJNuybjHuMNin5esPbPBVaKdNUXVUSX5GoaZWiMP9zeUrb",
  "key15": "28ZxC837QkGmyh4QWptZzWJZokPTDW8ArwsDhaB1cdCrjutqbUvKwBm9yyHwDfoDxpydCXCpWNPfTwSQpb9tiTsW",
  "key16": "3Mpe1cBhnGTsJqMxrM5Y979RJvLqGwiVKhnZJ1RQvfpPjq3WaZLTR7dy8YDxZskY82244MLTSR55jrKModjT8x2E",
  "key17": "35EPtwXX4XkwpnQtgnP4KxzHBeaXguJ8KfxiMT9tjHwv9mo5js1u3qondi7K5CAyGYDF47dXk2z4fKofpXEgrSoH",
  "key18": "26BEU9puhuEdiddn7Z8YctUdWiNNdfUsKpQZRcD6AFqgM2htaKZYyCvwGEJZYbojsCRYcc3Xd46AHhfkzFmXMzsN",
  "key19": "3ypDvK97rR9p3Vt3WpEE31J6HWQWD8Whg3zbBU3y9c5v4WrDe2HFWWMibesUrbCFiXUeMrkhvDV6YqxuzQjSRMJA",
  "key20": "bfob6hjZS3RVEU1ojymU3yXQvcaMfnrBr5FHaRf8fyEej9qyE4y3S8jZPb6pSHnvjjuG16uri1YQBKUikeRKgJk",
  "key21": "4bsfyPnu4Hxu7hv85NQRJ6qJck6bUyySVw1XFMpAoMLNsCKUPzLkZ8crgAjGgkQz3br7RnkRVWBKckmuCi3v9Bym",
  "key22": "5odW5nZsqauo9wXhqwrgtvedWM6eqQ8R6ferEB2iu1apH1JBwJnfnyhrz9Fr8r4DDTpbijPZrqRDYEM2NsYDeQYo",
  "key23": "6kEEC9n1ontCqSxxw1dGdEkavBDp6vAQPmFs1eTgdDrgA2ghgBqJD9CZge6ynHz64iYk6GYJja29UtPwCoNXdd4",
  "key24": "3KjYmJBmaDQA6SS3N6iq7pLJzugKXeSydvNDQR4R8UeAL86HF3tWEX5AJmTyCNKXVm3EqWnHg44U5t9s5oQhaZ6U",
  "key25": "5NdE2R7o1z6cwPpzUZCNWyTWUVFKeZ4CbRqBdL3x5y8p34s5GA1p9R7m4g7QAm9hmZ9V2vBReJW92onFMJ4xLGEB",
  "key26": "4iVup5Gw5gQ1TaTq6sjfV8hkwBB6eN2GtvTGioZqhDAGWoJF2GvQjzWaGREya7TZaNxaEimoAJCECEh12JdXpNVr",
  "key27": "3KmKqdrH9xd95zBLTSksJp3vCnRZrVoRMqMxGEpXKPuNtYhnLmuTRWBD6tuzVyevLxTBj7patfGwN1M7TAbyYnq7",
  "key28": "2TkpZZNErMCZhzrqhNwW72qGTTgisxxpkrXfQmnUEHfgMSU9BTnHr1Uv8nTfi1PQarDhPvWbBAsXrcF28TCCjFU2",
  "key29": "3qdZ6ZPCT1KvRD2oNNwXmMdFka59jnDo1yYVv6cF9zLfwpExFnySU5nna8LsZrcvhYB2dDf6C5NNUQi9P5NNVC3S",
  "key30": "5KBvuPuPqPDKBi3hHnS446N7x4KfyRmdtxXHBy2HBNCR2JHLnSEBXkGaAmqFE1dopE9GTWPri2ZMGBiwMaC2P8p7",
  "key31": "4aQ3uQ886bgvDJqDpid7bXckTJeRw5hcBsiFhzNvmgnh4zhMavsHwmuuvdpQ5mitTE1EHMe8hLH4LNX9eHHXkjoJ",
  "key32": "2XLEFtuKZwt72WqVkMc7jXhkfjjfFkWTv5ZmCAibFzbEHDtUop6fzdFEvX3VWx3UMYK6wJus7jtynctGkC9Z7iSA",
  "key33": "3ry97X1G4pQKcUZ8qS19d7KUb4Y3f5kYUCUT9yBcsnj5n9y5Bqs8ShRDMAA8eEqaPYBoLVrCy61SfC5Tmd4RMtb1",
  "key34": "4jygZ8NiYKjody9nXyUTWchjbej15e7gCwu9TfnsKutcB6K9BhqVD3wvd7YXuqU3SshXUPezEDLf7ThTJ2xdpRJw",
  "key35": "3foyGwae1unekG8bdFA26qkzFUGXWfUU36UQr7mi3KawSoxexLzH96nSgNv9H842fGJSGrt8pWSWtEva97jttCi",
  "key36": "3ZkX5VZxyJMKJQBZkz9YbwBs8KsaxLeagG8tDg5VHFnzfNGA4DLZHDgdpvff8EtkoU92mZXcstPRivLFY6i4n7Jy",
  "key37": "2y29eZ49WCuz5vfxT5xmKKTMnBDckyjpS9fFCSnHfSVvy79R5E3E3ELR1Y6NVwCDaVmeo9ruqW33ZwqNdKmLKZzA",
  "key38": "2WkMsMKRwotUyYXmvhxDTzjR75GW92kFDFKN3FAu5QV656FyZDGKNPmnEK51oznZ2Qapa7cj5tBTLwjPBY4yq8oh",
  "key39": "591XXAxhhYTCpRHrqUTUVxPfUGuFjsX4TojRPi3tmPjwjgrF915YRpiA8zLYWAHTQt2JcFU3BAbKCEAeBaWfD929",
  "key40": "3Yd96P6AENUTrMnioKBQiRmSSoJjcfr9h5AHFdjYd498zAxcCpuAcDRfLXHFjA7qNrJc2Xdr3ZBDUDjPsTLSdYN1",
  "key41": "2tsJa9kWxig2s7yq7MbP5vPTHammTjwc1MnhweY5SRZYsPkpbZs1wc6mST2mf9yFCEFWdZHpRKNEYC1HnCYkANWg",
  "key42": "38WFiyhdbuXWaP8trAjgCUKoNh5P21rVCJxW24EEtxgBzccQs58oV3cbtYYyWhKwSEFMPsiKZjoxmFfQhMtKW8Gf",
  "key43": "5zEny9SifSNNjosaT6TBGKvPAq8ZHxFEwxEFeBaMCYr6xVGGGELfvnmaQqHigy8EW2vurypi244fpAvJaFpwFyHd",
  "key44": "3s5jEKqckUBmYbGZizQPiH9KmA4vZiyqbFdTqBPT9ZYSJc5yzCY9ienyEYDZBt1P3xvsfNMxzLLLDm7a51FkFpHf",
  "key45": "5WHnv7KjhnChGZ3poxLrUiVGE7sF1vFYt766XqCvqiLtNaX78KHpQBZAGcAEmZgSx8jjegEseS7xmrmfWHbshd1v",
  "key46": "4u3tnrV22qDPqzcBfwT3me9qmBKYR4gdfPxRfyHW1adptzyK7Wo8PjPRnoDH9jRg6Bewts39DPFgcqwMGG5jiByB",
  "key47": "oD23dNUHJcs9Q6in85Uq7L2H725kmbPHWe2wPexFnmSoGg3RvBNMCPQwBFxBXjUVp9aYaPzRzu3V8yCuiQ1TmFZ"
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
