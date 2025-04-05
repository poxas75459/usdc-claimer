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
    "3GezewStvXyaBUa3wbZwj3Nej5QyYTGgiDnETR1F8u1SsTrk5MQPvf1hyfNa63UZ3Tv7ChYJnvVk898EuNp1hqoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AUesqWPxDy3mCzqB2JmXqcXgZWE2jZBKxhMXn6DybcXXWBkmysYXC1nuM8m4A4GkQGmWHXxcQ3D8kU9Q42ZB66L",
  "key1": "662SWzcwD6CUFmUVFqiYLvGrfRhAwkyZrZDYybChFYZkWccDQaLZxQdjhpzAV1Yfpat9muqbpNuisFx6xX1hep3",
  "key2": "5LzWL8mXWjqVL1CEYY7Ek12KbpKtzoe2QHp7qHAgDpXeTcMG7JtFgBCUmVW1BDBfaB9FWtr9EmQZ6PVRVjHg9NNj",
  "key3": "5PsbtWy1Q7BJUqNGbLikngjnfpPHjN5LJ4wBycpGz3mx87GTALVVMoHGXmTNVfYwZDLxGs7kdUzTJWjZ89YepGFA",
  "key4": "4qaxBCpavFsowrNZ8p7i5wP9w4dAnuTkwstpAhCmgtatyy3AmdPd1XzZPrUJKZ1KZHKWURkogs5cG6qefnmFruSH",
  "key5": "5TaY2eFDe4fa4iiXypkL77U2wYjLXcvYcMWiUV1uMpTQS3RApsXeqLLpSEZVgoGRJ9iYNNC7ADJu2dyT4SQ7JYQ7",
  "key6": "5YfA9LhVujFtSPtBgy3pcSsdJWfeWghUAe1zt6irLvEbto85nbFejVqVStC8N79ZuuUkNtrqXZn1CAauyV8egPVD",
  "key7": "3JBuysHRG4yG1oDjZqwxM9M1HFndRdzrqdomQVtH1n7F3a3dUmv1191S5oXEaAFaYgsJ7qKdkNDKswUFmzgsTejg",
  "key8": "5D5Trq8aUdBexXaGyvqMSpLcva13T7dsAQ4RLFuer94ZAdFvPszhPUCtr9iKvWXp7DekV4FdtZdRW7hP8iUrryB4",
  "key9": "2nmmzyiovPZDu3uQkQ9bNHW1ZG6rXdwbscAJxGii7AJ2CTnbP2hpWdvPcpV8EcXuD6bzK4jLJQ1uyJNM9CziArTA",
  "key10": "2T8he5AAH9ryYMC6vMgRkhsp5bTer9EVCTSFwweJs2kvCowEgfUb9KpsVZnRoVFQwMEgGmDsuK5ZsR2GVHBEk8hQ",
  "key11": "3ZGSwi6LDJZFE2vMkmJSMmH4MQZojhVrYLG5FwR9YVomDyyoN4EAy3v5CFZuju1Cf1myGvWcz4KKVkSaVC3rnBLM",
  "key12": "4dpahrxQgFvxDeHan3uRKBx1FUo8E2jKiBpNniEeCB9BGr74ftD67wDCr8vig4Hi8Trz65cwUneMaBApAuyjvcBz",
  "key13": "XG2QRwnvN8jofzyPmMupGCJvwWpSiBFus3gJNThUDJVQ7DdHJ3U68tjLRQX17RvcDJqFuEN2juuHQcpSzthGV9N",
  "key14": "3DzKr3VBszrQX6br7JFnkiwXLbf176RZXSsSDfQLcqa4fkek9TZmhuFNBCWxQBCE2YdTghqcK9D9Qe5CmAZdHMFN",
  "key15": "2akGdXgJKSdN8YdniC6Nmi43K8bA46A33Ku4cydspMr1nHJvwpZkezQpzo5ShrJkFXHCmYZgFB2MzBf5MrohuNvU",
  "key16": "55m4BHTwHR4xFhN3nGKmBpKVwk4rC7XXbPznYxDmZ8mgoUvYU75Qp7RYHokSdZHJEd4tuqyv27K9Hwcgutq8Scwb",
  "key17": "3beRRDVdedbjGA86wWfiCfo2g5PoFyh1o3eGgjmHCZZWgh3AqkjGtPQNfncmop61UTEKRhkXjN1H3H7bEEWKMpgv",
  "key18": "4t3KPZGmkqExvqd5YCRteGNRMgVavh4wRtdqyMSoTUGzZdc7M32jmvDEqcq9bDcgsx2ewwvbC9wAwk2YMkAE8D1x",
  "key19": "4vqLeHUBKwAu1pqVYmKno2PBxkZMkvUMvohxjurkgZBVBJ64fT9z9QiNfm4jLGWnCwFLg81XPCEYfGfNWcxZP573",
  "key20": "2EwuYxxMuiGFKXDWMpYSPKK6d6oa4xL2V8aVMHwKRvjrkbpmbnXt7JsJEfisoXtqGyzv7Ne7HYLQaZkedmPmk578",
  "key21": "vYnDAEBao5UVB2PcvZzeJx8ha8gr4A8zht7A5aACbrVi27PGvj2qNAyM1HLcYzhgpZfmENks7EVABL5WAt2Tjw9",
  "key22": "3KLRaSY1x4AwF2ERo2rCdWBcgy4hWEMDvjeeAtQVHse2koJ557WjJ4UDVjHbwom2EptVtJWoTZvsNTWWz5HDmuvq",
  "key23": "afvXKEumsFwVHgqHMad9FB7pX8hrximooHPaFNthf5JKq9EyFcHGZ1sU4KCnT98ikdBcqMvJ3xk79icqkhwPYaK",
  "key24": "3xGRUaqq7GEVqW9o9y1Hx4Ve1VJ8bUngnQPLWfegR1aJaJ51pTUpMfyWJ1bzKG6trX8jAxtmcvxzfzpNm2UrQfgB",
  "key25": "2t4CFHY24nd3dL6ptcbxp8jUUJX4aJXHQVHA1nuZJwNySgXLJkZtrxDtiX5FaRutMwnMwyb2qxgqX1mA9PAUzti6",
  "key26": "3ieYaHV8YJHKDBb2v9ZWKAfR3Uqnd3rg7geMAZgTeSiXsFkjiDuhcJ6LdgmzbCBvnZNrPuN4347a7zHs2HryHPDQ",
  "key27": "3659uZuZZyKGB4JW4niuTndftqtzgdGA2gvW7maRdcn39tX6V3WnwG7wvCPixdY32JMHxLoqnkt7PYhGftg8by8N",
  "key28": "3hJKXJ9FxtXYFv3YQkUNkood4wf8Wg629u9bsK4y1MpusJ1P1K94NLEnQm24CoQi7pw1PAKr7YPhGE1mnyiMziTw",
  "key29": "wt4ZucTnEVw3LWcMTKgvitJB3rG4dEFX4ZxL3PZ4UiqcBSd6dSBAmhh3CadZ6VmdrWt1TFDfj4Le5nrbVDAtxBX",
  "key30": "3aKQ9HHbzaC2djQkuJTvHsi6CnVSMoYfjYaBoM19Mw1MQzikqMPaYZam81kw5cAkaLQdnSAU6VmMDL9bvtNbjAfC",
  "key31": "4tzWXj5FSBn6XtFXkLSDupRms8ZPoFzFC7demmAdEyTg8HRUnFLi9mf4gcUbwvj75M22EAh1hHhsuYjnMe2MJqay",
  "key32": "4Ee7diVZuyywqrEVhSdwT8Wgjc34PN2H3tPLsVkU2Mp4P6vjEXCHwNc5bHxAyJPcEA34VetX1XLe5H19aSCfwx9E",
  "key33": "51BefGgQE6DFBWU5YfpQKey3bV9FFTwdU6VbCqqunrZvziG6to6hLhriJrzKkfHnaydDsnjRFNACEcHpANswySf6",
  "key34": "4H3rYJb8oekFax6JAg5tAEGuyika5TQu7qpZpVshv8veU5s8EuqrzwhbAMqGnZqAorFfY4NLJjxvzbZgDswqZ9kn",
  "key35": "615ArHnX1nMLRdZd8cvHKCNoUj8oaS2KdUmUSVzDbKPtMio6rsKP785nYzntmyEnyBEjiaQKAyd3f6UAzzQiFyFT",
  "key36": "4H9DFDfXSwPQFLp4RGMeJG57tNJ2UKutdk7YaDmtSGW4kkY2ebovPpPE7QdMMGgYE9KUb4fLU93Gjme9JPRqBGDk",
  "key37": "4UCp1h1Gb4cMzU6b9YiYwXoGYkVw2nQbhadyrjrbEb18gFYMDQi5a65w1B8iB9iH9wQ1G4iTzwFBRi1C5wFdRprD",
  "key38": "5g7DHtoW8ShKRjcfMNuLjeGCFboQNx4vLXmKLoQhT9fTsAcgMzxFF7bz5F4HeDmoFhb59e3212S3RyKm7TmWJaLF"
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
