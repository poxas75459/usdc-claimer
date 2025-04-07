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
    "4muFXYcv4WuwASuLhegsTttmevFVoCtjSJNVidNwgbtthQPXvhVky4W5hS5LncS9yvb6uDTFkrqWYYapeBXvGHZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VYun6B4S5cbHLeyMsRYh5hLdpqwLvjkPxqCNWmiCinaFafu5LEon62Hzak4MdLhscXnaaooNsCEz7mGJJZ12s7F",
  "key1": "2oGefiZQoggoBTbnCgym43nhCNc2oj9YTJ6dSeoTMd3iFqXNPydgv2qH6MVYhR3uBr3f2SQ1FJLYxvCGmJyp4SL6",
  "key2": "5QSnJuzdots52JkzHAEHTQdVyCnYtpjxzMt21m5wQ7Qn2nrmGjKgGLHgWjMruAoyK27Guu1YkKbT1f49dZRqFw5U",
  "key3": "3LhXBG1sPKnbN6MqcGB586d6a6GZjVJkC1DEZJG3er8egCnnyLtC2UVkMnzjonW9vvDA2oiFButQU4RBcD6CYTK3",
  "key4": "2N29Stzt365eojLid9bF1xgyueTNH8jpzaFGYiAEdM9cUPbKFYF6sjyv14pzdEAxWEXoRmxoQFaFXPT2fiks6kLJ",
  "key5": "5LNSLESkkEGMmQu6sxqbrHt4J4z1JKvAtu2DkcGnNPZkbubiZodBKEjjsxarQkmaszKooGjBT12vdmqhLH2jXR3j",
  "key6": "2EtrvjtG9yCz4TkVVBaPnwH92KU1d8RmnhjneCATqpLvq7VukNhuwofffH4udNNv7ZwvcwbeZZTXxy8VwYYpNTfb",
  "key7": "4guYdKdYqHpjdsXYibqEoaZQhTxDMS5YbP2hbHGhfZLUg4EMebHKPzHsWxAPrGsX11fyE144hdqLvKYPBLXzP5MC",
  "key8": "46M5CsSHJpbxH9AZxZA2FsuxVADbEgHAHRnzezk9D4esrCHFMPVAw24XHNkaYjwBcysJ92Vs67g9Fv9teXHXeZeh",
  "key9": "4w98M8YxqwmejGyCFZea53XvJMrKWKKQNJwnaguXnsGNVrTzGh4s1LiRuszR3Bv8fHUhuDA1RBnFEprYLoJ5vJMW",
  "key10": "5e5Y7faCDDtxFvfbeTgbdhUVuaQ75jx361ciEsTWvXXWkJXstRJsLtTaktwWgUP96QizmaHZLQgY78Q3v3oWvMpg",
  "key11": "44d2o3r7wUNXqackJF6MyywKc1xTieNSys3xVZuYPTAbgKdvgYeurDwK8DdbFZUuJDQj5LWcLWK3DcvgqLkGZTyd",
  "key12": "btAu62RZaXeJWacMbucqZFPPMsKUVvSj5YVAPxaCN2s5NpMDNAMNEKk2YJuFKN2K6qGr78zH59dH46daPy9zrBm",
  "key13": "575Vrc3hpaCBaTLU4ArpxX8rXhwVRnZMXWu8Aoguz4AoM2QFPMDMopWPVcoC29UCoFPefoPp16fLuN9xi2iot74K",
  "key14": "2GTQQi5gUBDbxNhpHJ4RYoodRCayxhfwWebgaJ5NGrthebZXj2irxrkJNBmTfJAczxbiJav666yjd1kz7VyynCGG",
  "key15": "5iphaCVYDw2yu1rCbH6q9bV2QDi67XiiVDigKS7gdZ4JnA4BMM4XywQM3JwuSghLLvDAH5JLifNNTe6WEBAnwvWQ",
  "key16": "39w6oKm8X9CCyJkG8QviRHk4mfZJV2r7cmhpYq1MuPgtrkimeEnBeQ8XaqJ1nRyyvPmsuec5dT2CGeMiM8duPwa4",
  "key17": "2Zx9x54YiU2ruJgxS9R7cWTDwMLKx3rqSqvduicdKJ6sESPSkdX727xfSpGknAiNFCe4Tv6A8gSBBHtQWo3tnHpR",
  "key18": "3gC9sCH7GjAoKf4vxko5SxMmPZYSGh7Nbq2ko1XnUfoBQzxvTowQfeLh1csiQcVzLgAAQgPpeauVVGnrEkcWXFs9",
  "key19": "3KJMr22aeU6b55XZFX8FAAnkDdGGgKnSu9LXkMNKerhv9f6CH169dUqhDfmSLeLdxDjnfTuNB998ciYRdirbaNDb",
  "key20": "4HXjS9wqKwrG1xAAwMsuZN283Q2DdZNWmBAJh71nWRGKgBWSe9FsedZjLcTyADBmJNKdPduJ5ZRm4F8cnS6j5Ktd",
  "key21": "4NxFTBh1JyJ7A4JH9sEVSXFdzzNAprN492JHJMUBTbBE4HEfCwMNn1jHP3si2rGFo758k64ikZJUe4bPdatqJCrN",
  "key22": "4mvfw9MEWLYP86yGmXQ2BfWUfrBkQU5p9PZypHPnPnExHo5z3o5WM7ftSiHrheHXWamNRgBbes5uqtZDBVTyErR7",
  "key23": "2woBPRyMJugTdpzWwjD2GERtCWEoyQMPVXWm2wA5zf1bQSr9jNve6Z7NDDgqsD3fu97JKYKkHeoBXnyLVfLogGXH",
  "key24": "5Bqzjixf3vUZ6jwmcb8CHJKk2dyXQV7Ms7ZYhwwWcjVxc7DUUiCQ1jQ6SAmnroPbXpBsTymwGJCmW7Qvobrc9Vo8",
  "key25": "63Nw6hak8P4XXdeXXFzhqd5kiWNSeqtajwuLQhoW8s8xXZ56S3RvtadPPRfrdVMqY5WVfchH31jNT2DPbFJ4k9CV",
  "key26": "457nJXAHu2tCgfh2WtHoY2SLzwmt22FCs1YZHFC8ZHqo5Xyeh2NWf8f2W7ahkgEMZWjpqf2RMMM6nTcY7ZqPSvFV",
  "key27": "3Atza5MoAPZFXUJdp7qi5dapXK35PsE78ii9Pg6kSqYfsAQzMHq26jpDDq55n9RHYdCPh8MTN2192mpZ4cJxLbfw",
  "key28": "2MWZwDnnV1AKSKdZtBmDgA7C3AbMJbMjnv1hRh4nNUsikS6XkxSFwTsZFQUtUGUpcQektF4WkgJv63Db1GhnXG2Y",
  "key29": "22bEEC3CAKN8ULcDGV1fEKgzUhV816qSs6AQPqwK59Bc4cwvmAeKj5P7oVtGTiFizcReGfJjGdF6bZTzrUqk4ysx",
  "key30": "3mBrp9gFUabMU8ZkJoxxxwtqhBHCUEevhaS6mEpTDunzRT3UzVP3fj21tjGFHmP3L8YEChmUyf5UZVcF1q1fr3A8",
  "key31": "iiXgZuwesXRoCoxfJYKqLiUmhv9SjN9H9EzaAb7E8QfGFfKbc7FJ3paPZDXrV4j1L415yvDDczPrra63hVne1ne",
  "key32": "2qim6gmUJFaAkyrWzWdb4Fh8NC8x1aspoyMMoQnykQeLxyBNnkxJ86rjc5UBUJcdQr91npq1hLENthzw9mbdJpeh",
  "key33": "GLuWQh59CH98uqawif5f9Xua3VgWdcCRkGBK1Q3u5Ds9SbJFzR2taVNxeqxetYmP4aZ7U8tRjFRCPrLqdiHAVyp",
  "key34": "3VecU8U3gX6BPxczodAe5oC4JA3L4R3GrA4PmrjWrt3eZCJCGVRj3kUQVEMJpyA4ETRPwyYWHPN3FwBfZ94PDeAo",
  "key35": "E7dFinnt3pSuBczSA4TGXyK5nV3dubA8rk5nJN5CFjhg25khRVfJrWKZ39KBaW2UyGwzMCEt13JptFS56XyxBAU",
  "key36": "645EvTcngvmYLKDPRRc2R5eC6qdzg8wYni2Mts2CTuyoijB3x2GTkkWBKvVW6EeNAD9kGKpZTL2pzEXbYjao8RKx",
  "key37": "1abwfBg7VbxPYvVQNQjiGmnBSb4PDhE52aaChdFhkqeLH1S1N8bWwFwuEPejTjNkP56FYk8w9CiCFJQTQDcyMm1",
  "key38": "zbqXcGRbftJwTANoAedtc4Zp1nQs6fV9xGPABvBJeHTFBpqmso7dNtFCGjN4yr9nuMjMy3VQ3jMtkkeVpXdLmot",
  "key39": "3dThKZQzAPiUn2eKxyLuJnnRhzkPnTQVpV2khJdCXpQrcMaT9efknWEgADagdCVB1FQtkzaf6bNdoLcqNTKk3rXd",
  "key40": "6D6CMPpJWUAa2vyJJpivqEe4BoX4ADyheoxMr1cYK1FMbtuifMVBaKMLZMUu7yLyLUBLz8PymugSz36u2rJsGeG",
  "key41": "5cZreuVyEEbfQCN9FVp6oU1P6zPi9nEh4g6tssibRnESMiZUo1hxiFvRiuAbPjPVTuWYy8Jx79L3nsCA7TUjYqPS",
  "key42": "yt5FwzNFX1teJD5tMuPBawcSLh3SAEczVUAwgzAfy7Mpji83kFMEaSwgqTwXQPvB8AyTCwtm1h8mE1GjEbViXGQ",
  "key43": "3qdjVZjkttbSeZthG1RHUbAZ8iAXS4Q52EJE1tAdwTKBXvY8PqNvYuBz89xhhLsVHG35Z2SAyP6zd6Rnbu4ujtvp",
  "key44": "3SzvzEYzQYMqcjmMAc9DRASk4bxDZoxBnZGU4ZLxhQBFkBirEhfkfCmnbEyioVrG4wsSvpDj9afZEA8zruM9rjiq",
  "key45": "27CV36fB3SkccCbzxwtqUwgWsNjbUr1xYLtVAMoqjZ7rfj5PiY4ZAEmMigqBBVTfWNSFt3tRSLMNuzkBA1gyPPFn",
  "key46": "3CQ5dJiXmfmmbneQ7EK3oiBrUJpxJHbzMv3CRZhRixYNeTmKQPPBBvsqBUzk3gfhujmCUwjWZsbYNfzT92XZAij7"
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
