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
    "3wXTJzb6inNFB5iiBWBi1muUMbtNpEzKutjppWcvaKFH9gCnPgS34Ex7LR91s3eUHqwvwxzUq3oVeB1SF2yotLDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CxhCR3LxgCrVLaXSHN1j8JvX7MgUdAG6WTx5VFYksBg2F9yNYV3i47z2BnBSkewQakvkqxVkCjresoUfKywFRab",
  "key1": "4BWRpMadehv8ahStRnZRoALMitModk3nGHkQbZNggUtgr7bvCwHh3WRvdY9o1BdY9jcv4KrQwGFqnEciS4jSiAH3",
  "key2": "De3RYFnBoVDaksC5WgaoBGc3ygfRDkUJPfQMo6a1yPPSEN3oYrMTdkjXDYcQiwJskdZU4ZvRFXMFocmL66XgBGj",
  "key3": "3mAwoTTgRyCfqTxtUrKDfFKByGXQpWurRAjBwGNawvWVL617Q6NThPGjtLbnxxkgLSnJUL6i41srYU5bkp2LfJa1",
  "key4": "5YqussUkbZRbu5M9EMhHk2gzkxXvBcVkP9AEV51WK4sFta2sGgkVKqR5Zn6x94jhpVXi1NeeuT2QJ2j7zYsDNtjv",
  "key5": "5uG9F9R1cNf1yWQQbt6mv6ETPMiRpwSnbJ3VsFbGVK9FgMT7i6D3CrmjanWay8cEunz1DphTdjjdMxG9mdszK1vW",
  "key6": "4LPbzeitYiZJLoN6w4t8xbRC2iorCrKYMvCq4mnbHWB7W7d13awi1nzvxo5FAuSV1vNuz6Cnb7mpA1jXUCSmQ1gS",
  "key7": "4t4xkPP9eTkCShk4xjFbAo6oBVUobSqEVkioMbuKizzggBoRnHS7rcUDxGpi3gy9hyaRR3JvopDHgKLbcDnLfMc9",
  "key8": "5GYUwszkJMH6UeBBTrHUZoz8VNCzQqsDQYbv8eWDeokgiZc7WUWfFESiNMrnjtWvJ55AECv6ffieTdeMRB4qKtPV",
  "key9": "5XYxpQduNcZunJk1ecXcyBq9sX2ZxMfGmisBkTZ9F5jbVDBDKGtHbRsQcPAVzw97VpRjs9up4STnVadrjsYK4B7M",
  "key10": "469TJkF3tDsuuGXRQXjJh8UcUCS7wvq4G7F7mKoR7ecGLGo1d5sW2qzrCGPvD2FN7n61ghJSyp2yePNCXagCSK3d",
  "key11": "3WvU4mRtvBStA6G8y2EdVZEDF9vjAPf1dTvA1nt235K7gaXrepuAvjZFmyzRJdoJiiUs98gJUu5aQvoMML1D5UXR",
  "key12": "63CHvcMEXgiAtvxsvXwzb2n8SzqSYGmQKNge2yBmsYXmKeEqTJxEbCMGbn3zMfSNRZTYf2XdDGjq6AXEDqyhc1J8",
  "key13": "3qFUCMHMjzCggsmspmYyfknJ6xQgNmsZxzrzMfzCvZThj9kZYXAFEqRjRGmmdzpVUHipcGWB94WJNCwgtKNMF8Qj",
  "key14": "3uZHYrh2CjbBcnbwxKEwfNmhTuhQApyby3Y9PUBGVSRLoGuZShBBxEBEh5cHGV62W952xNE62HocuvjTxiq2gbXV",
  "key15": "3WwB6HNzUTKeEoMVsqzeAgrXyUieN36NcwZZafBS7SMuKzSJMXBvvr2PN7j2bN3Sri3b22rFDjJkSwTFP2HtmsZa",
  "key16": "2D5i3j9PQs67AB13AdZtgtA4bC3KLvkWKacrujbVNta8hJXJfu6h1ze91eUhLbaHszBqaHvQG4GncqLnDSvBSEDU",
  "key17": "38F9XExEWZaGfAD2EHL625B1MABt4ba5tjB6NQFeim8HjAmXkpE6i9eYgHNc7Sasc98ZXYgDawxsG9SBggpuEF9s",
  "key18": "2dxjAQNaPxs1qakNzLmaEjJKNfFooUYWcvPbj1LW3wzU4darEr2M2EHfAjPb7sgsCbqgD8Ja2puJwA5Bas6pCjhV",
  "key19": "AThKJDPdfQQkBR1M9nRw3YG4Mc6G6EFS4nG23XTPbtCBjjVbkUJmUqc1ep1fMA4HhVL1AukawFqQfmxYjNriyrN",
  "key20": "mJ6uR8BrY5WV8wRo8qf8XNd1YMMpQqauXq6J4gmzVXpJj7jNNFV4GjbjPak1ir1DtfD5jCe9faAeikYm1ELQfgL",
  "key21": "4cFiL6vu6p4a6XiDXhM9xD451gmCFiR92GofT18hK7tUQ9m9pDE2aWrT95odzjcVFQJjMBwAgF3hZt2cdWjGokh",
  "key22": "FBv9MWjgF52L8v74672HBbbzq7HEUpN3x92Fzi7VSyNBvFchMnUHcduyLPRD4AMjtJPwLdH1ePHPLziTMXbnddu",
  "key23": "2CQtDzYeSukZcbJYEaDaiqGrWQjh9RNZ5gp12TNBuQERjxtY7t4SGJivXfhtdbht5UNFj1GYzfwMnfThaEyJxUHt",
  "key24": "3nEYvGwo3bDTZDTn681BhwXKwKh3PC6HeeaL8LKfHBZuwYYTEybUZs8YUwaGpZ2Tmpb59dVhqe6UKsCyYrpfahVw",
  "key25": "3pFtyfhHd2insXTYhqbYvqeY7YoSBjZGyPVq7CvhYueB1n35GyTULNE1PdLZMeFTrKEbRrRXK72McccZqte5gfcp",
  "key26": "2FsEvV2o5id4pfikdJ8upiMLQQRELV6qhTJME6pxFKEcY1xixU7VtmZtiHtTnVrEae1g6iV6hYPPqdMKMUB7ntP4",
  "key27": "46QGfTru7c7htHjkKxU9kYxFzQytEVxEZDfwRLXKtA4KgzBuBR5FWs39zwNPoyEmYf4XRLuR4DSdqurkz2fbwSLM",
  "key28": "5zkKbTFDwDKWHAnGWHZpzdhm7GftGhHX5gLMFnDB5HWZDCQnevcprARKTG4oej2UnFZCzNepuUC4FUwdPmPJUVrC",
  "key29": "3X7u3TLcmf4xMHD7kvVho2Yav4GgovyXMLhnEHLPPUKTAmNxZTKgzEnm8pcUEovnHuKd5zmTyJNjjkHRUphScskJ",
  "key30": "4iX1UvoGNTrmJTNmkuEA5pQrPJLxvsYSQ6ATAS4SRnBnFkxcZya2ZF2jBGZqhpat4FP6QaVBN6fEP1sLWFjqSyPA",
  "key31": "38rfNYyKYCPdnw1s5CGVeRAp2N76QxxmrJkiXLeQnJVEhy53XCWMVDWQ8tBqShdkHExuHrRpgj3xcLFk3ES4SaRH",
  "key32": "3par82hTZU2V4oXFbTUYHJfKB4hUz3FQX7mUvfRbWvd43rpRnXdYvR92AcHczLeU4oVNG5EP7uLm3HoKneUJg6aS",
  "key33": "42WAZd418wRc9iUgoyQ4C77uWPbweCKuyokwu5ujg2QG5oNDjZvjNF3LhLdxqmXqPcyfCGGEwSdqzoY2JFNcBm4S",
  "key34": "zCKgYgPGvMfPs7Lob8kFEkceEbhiUehXCWQxb4Zh7KfTq7oGW1Q2TyfWdgwEKgdx3AemNZTii4CiYwtWaAfjLbF",
  "key35": "yN5usM3pHG7ZMyLFfZTHJNXRE6NxYtM2GYzCtagTwSMZpcAsqY3fbRyzsUkNhWWazZ8JbDzbhRLYm4ipceAQkUA",
  "key36": "3zWYksWLk4R1gXDRg727nJ5jeEcgXmX5DHmRN4u68mM5MfNnc28BqXfE9cK73qudEcjuLTzR1pKGoFuXyuciYPQJ",
  "key37": "2GNW2j5SfMv7W71fC9638DNCb3npeXjmMnkrstCMNGzXHPVXoqHaHxxfFT3TicEXBsXUsP5KJDSzND4oWNwkZJiE",
  "key38": "cXRhXNtMZvgAU8gnEQcbrcZzZCJG8XsQvXefNdVMw7KxD2PoyZyMRwWE5upfbLwFJzkCTLUmvcdsD8FnDu7Dtdw",
  "key39": "2EZJfKoBi56xgc1FAudgCfheT27sUFrg79XYFfZ4vfVHFQPhn5ZobvpRyCNbBbKJR2B451MNDEfkqnipgv2TYaAo"
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
