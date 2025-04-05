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
    "2dNzNfJ7GnUgzPVZ93EuvBCPwAffHmHXkQtXLfVTfXJKr7Bidy64zs6n36ug1fjFMCHFpGZ8kKuokgHV5kAPB1ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GyFnXoxsRAn4NDRUG6G3WX9ZX5uAcWiwreSSdLi3Mob5KSX4pqerm3EuxonvS7bzvQSQ7BYUvNSJJXd9MGwcbiW",
  "key1": "4fsgvVqsEzeo3t3CapPpsNmCgNAMK4fw4b5i9BemYLZi3HZPFGTxKMdXiAHmYjshtWsa8x7NzQAyiEoSnPxXEdVM",
  "key2": "3wvK6J1CUzrG1yoPVL8EVDagYnALRk2x9jn98wUqYDFgJ9uzYozwhWXJH3RgxRBV5iBdzCgsWWCDatWup8ianozr",
  "key3": "5XWkVNDFxXaxXgMCtd1anCxCGywkRSNu79zTxma6tQ9oHL6tYi1iDyJoxbyYdpqmbkaNydzpjmZgrnLta8E8iSkA",
  "key4": "CtBMz9mELXikJKzFncw6iyZBajFD9k9KgKj38GxWFR6zSPZgsWKDpK1op26mxjuPymdRg14NQQFLXzhipwHKupM",
  "key5": "23pNtLk9orXej3WxGBnGW1pmW4LpYLEeZgEyioLwuuG2HNusc7S5F8xuu4Mjsygotim39sGNL7h3DKMXgxGSrjgq",
  "key6": "2vsszoFaLxPx9i5qXyZGipv2qqPkYUxwYBK6z96Q1NkJqoAkYfWom4tJNUwmbeYYurA8E4qNee13QnYSNRedBL4y",
  "key7": "2Fo99BYXBWB5j32De822t8nGnqYRyDTSh8pyip9rL7wfsHyq9wVNVxmMA7jAMWxrqe2JP3ahHxQqriRptD4JAxKi",
  "key8": "3bt1uRnFuhsnYsjjMnrwF1Bx5dro4jBxD1vUt3JyaF94k9NcQyAQDDwaZFBJaRWEqFWktqJdw3brTSaYcruXRGw6",
  "key9": "RnbXUb5F93Woarfv8DRpBHapakPWZt8F4EHCu8QZwFpYC8cBYy2fxW9sncRkVtktXnKy2eMmFiCYMk2xePCyhwX",
  "key10": "2YFWwxSo3CB2Y89YBsXW1RTbhyKw6J9ifBxFAR4tTfbWmSySvdDmukho8YeUgRzD3CMbEZwbmWyz6u2FydYrVcf1",
  "key11": "5RwV8Qqq8v9mVet6yjtqzJFBrSsom69gWwdVffie6h6DsVBj5vz5PKfgAsruTPtjWdrKQJN1TjEwA4KWA5iWqsM9",
  "key12": "3MSFsnKPi9AL2VgRQsfMiMuorPW7BXhgVzqSubJkxznr6wxkQGgZ1PFwqmF6PYop74uDxsyoXvjru2qcYxTDqbzQ",
  "key13": "c8LUKjwshQQbeLjFetScrWhrPtoYvYj8vjaSmmZe1gmmYo44Uasg8dHrAGErGoaDqMaQEQamPLVfdKYTxGnTDrW",
  "key14": "2KhbdNdnNMnNAytmYULH7AP2EdD6VDWLtUhJ9ooG3eYd7qQ6qQduSr4a4gPygLmFcHqi2sFD2uisLxcrDTcxWvtz",
  "key15": "2StWGFkqTEN4ee9thJtmNaon3zcQ1f94c5WYHkokP2NuNXDJHpAF6rrFiivLzfyNYXP9E5wZBiGdPA8zFUWbKBMj",
  "key16": "4iVzusZi2BEQagN1J6MeBwCPDF9EPiRTsyqi32DCAb619e9aQEADZ9g2NgbrzSh61PdrCFacVJLHHE6gyecxeYo7",
  "key17": "63r9xeQ1kQ9VNSjRKc93QfwW9LxUZK4uNNqaTnCnN4i9pHAaKo4JReV2Czc2hkxbhuezNgYBfMRgz6WYySGPE3Cc",
  "key18": "tJ2xGzxdqy3KzNUuCtaPo4LjfgiBvKjCwouKHq5rkUJZUMXufwX6TE3PwHohAHR3rZV7w1GAJbpfssHc7sRDR9C",
  "key19": "5YUbtdafJoEFMTiFN8RmPNDRUwSCnrafg9AUsLonE5ajhZtUUCCzjkNsycgzw5Czo4fJnWdN62zL2QjVzMozZUQQ",
  "key20": "4MouWunkHVufVSSSZeZ2Kets5Avo7zQaFFudxtynhifFodsSWGotvfFQYMnB8upF5v1jHkzgiqjo5kpujkNzZDPg",
  "key21": "rRsxWURcjMZyyhUQfJSpA9HnNpoPF7tzfGhVJUzEqFDZNztG5M6W65A1Tiz9rUFiHrXx5XnV4DkfsdVrDgnMmxb",
  "key22": "SL5NoeagmGN6iGmw3TyeMmkJQ5fRBCmAkkUwihQ4bfkcbSAjt7z9o6amsPUkdg7aEHcdbicKdfLPHDX2f5n92A2",
  "key23": "3RCqbBfrYyudJJThqURXxPDeQcTeFjfGwuTez8PQHe1Poch24PreRnsydXQvRG5kz4PxDTQNVdL517b6koRYyEjb",
  "key24": "3U7gsfmWmrvJLpq5navmUPs4LZ6dQ6FRraReCafC9jmCEVtwtznGs82nNEct7GCyGD9NJqRbWXFobz5AaHFnWWjn",
  "key25": "2Wj86SAy662ZnFKgsUEkNetJHf6A2or4S6kajw2LGCDp1NWynWFc2jXopFjMum8R3r1CAkowcMrRtQGdF2LhEy9z",
  "key26": "f2QoKoj3PngtjW86fCMEz51kfmsNDyvkJqS4MG86V4eQQ1GAf4eY9zXNMAKr6fG6LbkzvM4AACVmAcdZMmueUUs",
  "key27": "2249vYCEzeF3dZ9jGieUDDfwJBAuWe9E5MAQwvgHK1gHvR1z3SAQTrmbHAeMuBqdkHPABfVw3GDLVikUvhn5eqof",
  "key28": "hZZu7hF9w8CLgBpA4kEFXBqu6fKJh8ES5KqqAaA4foLYMAJUSPqqmnyeJiQQHqR2KUjo4UDY29ohU7HzTNxhFgi",
  "key29": "3fMbPo147kep8phpyQLQd9kLsJCJQ3F6WQ9hiAXfgUQmEc227hgwKv87sfhA4cG1hemimNzKQbgHxvZmjRM3nn8j",
  "key30": "JrJtmBxQdBSkkmgGgawof7QYh3jFquQqYHt9fpgmU7n4u3nT5YiG4pFpbRJC1EtrmUibEA96w1oiYU538o8Xg1x",
  "key31": "5CPAqetdDngd2JXojdgitG977kM6EYRjPZdk2EkZ6Xc4cSgoF3zbUJtaKx2p4RwoJX8B2HA5EVtvSdYvDS6kYFqB",
  "key32": "4tXww7USq9pGNm34m7zFiV2zk2aVqvwAhFWf1BDVVfFhfrbFPSevmTw3C5rinyhSTk66pB28qjyNLXQ2ggC6ZrTa",
  "key33": "2aJ8f5Hui9LHfznyKtNDAYK8XsXpvAStxs2KTaEWmFReSRG5afNkkHmMbYBxTcwzrcECXE5agAAwLpw6VkxgFnaZ",
  "key34": "3SFq5UZoF9GtUFxzPR3JaWiet8UGXhxvnfJ7W6F5aiokUSJwGcUkGygNb6abvVeJw3j3ryEjn6sTaKRFNVs4ZEcQ",
  "key35": "2t5JpTwam9UJdmGytUcbkSGtw52kxmohFBFCKvvA7Zv85siBmix7XLKPtJE6YUQHq4kdNFJa64bk1JopRMGnHzqX",
  "key36": "5yoWQEk1PpM9jx9936SSueBxKvX3HjZ13Lmhmj343Vj5fQdbq44EsojPunpvDKDuHvAqkP9ybvuzDEZpGnDtUymp",
  "key37": "TvF3hk44wwaHtc8g48p7Pc67uHerbPEcDR4A8y1k4wXyVWiAWgRgzSAzxypcsJHfJcTVBrwFEVAqrCDUjFQynte",
  "key38": "WV4kzBNefG1R99Vif2Yqm9KjE5g2SkgNcN25esMyDki4mTjmcLwd4cpLpsmX9ZgNhyuiLW5GEcXk8wgp8EWYfW4",
  "key39": "3M3FqFBTxkbepzCAUFd2nV4f5QXvfEDoL5WNLNsW3YRHGdz2Woi9hz4HCVK7U3Bj1gBX6htac2KE7dPue8L1giyh",
  "key40": "3uX4RMQFXnHPuFrAnjKCFcvSvBQAzQS1sn58UTQhQF2AGXYkAqChegr6b3jGUcaGLe3XWAZG5pUVBZDaFmNgnsnc"
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
