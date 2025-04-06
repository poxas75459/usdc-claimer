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
    "5AmQTppQAuXxkGMvKzgivFkZ66mLKzooQm7rscRLpE4QxHed15Ky4pdZNZorz6P88fjHdAiSohDzzj7VSZ6FJYeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DtxAo2Bcm2AZwWj1THfrjhiug8YPBfsvHeJ6NLk6yR2M6owCXQFpjWWKxhQ4gbKLs5SD5dX7ypCaA4hELweWfnk",
  "key1": "3JQcGRUkYyxUQvt2oQDFD3y9gaDPEL376MiZ2drVzcnqdFHH4Z3soSVnvqzxbJVz64ZtxHtRfhyRpkqdKYJDYxCs",
  "key2": "3ZYKyrMKLJvmBkTjGGx5BCGgjEAjRYkXGLHZ6vTfajYsYcYzUaGyiRxBAWw1gzMejWCETowaXkM15S12EGSJmXw",
  "key3": "5p4UezHK6HWUJKyLbgdpaxDyXizHQidQ4hznVT7uERv8FrnMpPqR7B4TZRqv3jHYAxrqYRF2rPC66useah3UGTjE",
  "key4": "4NZTFpTiYDapcZMHEEdP6drBogkmDZRNsyLa2tQiz4Ns28zGYkuWRsdkyiE4uebZVrNgngEX2dMh8s7YBkG9L5q8",
  "key5": "4B3PvnqVGgSQY5ic9K8uSSFap82yRp6Q99KP5gh93uHGN9TrJMnCJdFBVgnPgmqTgFZXr3otd9GF1Hy1CNGGekJi",
  "key6": "4BnstwtPJZS5ZuogSd8a7st8fiFPUhM2S4NWHBGiSiNcsXTmjhhdnwsu5vdtxhRZzZWhFpoaKeZ3zmGwe1B1sRHC",
  "key7": "33JhP4HX4sxxvf8XsEkt8cLHYsUpYyjwHRVYksUmzmYxhSTwhd867Dw3tTCr9Qw6tQJvkCEmqZJwCZFhqakiPJuT",
  "key8": "5sqjrBQd1kzrZ9xKSX8vE6TgYwghFGwmqXaALrMNKfC3YpKkiUJYwWvbTdVwEco1oFwcDSG2f8W2QSTqLDpyT7pL",
  "key9": "Cbyz2piFDhSk6hpExA1jFN4Mn2PDkjAwNP5r61Gye5B6qUGf5yo3o334gNuZABys1oyrGMjcRMqcYeMDLgZzdR1",
  "key10": "SXC3pc7etFB4xNRDK24d2SKasMdBPFmUSZgBdNR6bTFPeviuHXd4ps21ANi62qEBYUZgyD98yBCdMzsPKxEkcR6",
  "key11": "5vTQLbnn7ZCjAS2N9VKUA3XNYBaXgH8yUYTXJC5msLito5S5DgdzFrXtfRW3aBFNzDjtvae6pUs14qSAGeEjXgXS",
  "key12": "5aqoULXc88PnUkJ6gkYnN5JweqsTKVLaEo2AdZVhx9csK7n42ndXX1sWWThyKUoNeHxDKpiGo5nJjtC3hhnJSdRg",
  "key13": "2rqzH9XwmqJtx9rpH9iUMLDNgoTx87RuTkHMPUAZmRpuk22egFwv6wYrCPoMusQXoF28zZMgWDQRig7kSb87Fy9o",
  "key14": "3cZyDsRBhveroqu1NQSsuXTTV8gMAVQb9AQPKcK94xC68Voq4AQxmEuL5ws3nhwj9dEkPpzo2m1wTW8GU1Ln1BwD",
  "key15": "3SgdkzNMppR4KRFotNpzXr3L1h7oE61UZV6Y3MeDuBfRp55T5BUz112yKirixSdBSxShRojQieXMYEbBLHGtPtvu",
  "key16": "4eSsx9163RCLwkdEpD5ZwsBMDSPW1NwLYPm998bxt85c5gtqodYuU5zuhoPTPSMT3Mx2rsYDgr1opU5ESKWkh6iQ",
  "key17": "3r5K3G3wkr8m92brpdB5fWa3eRXBMMZAX639d9nYV6fZPAG71jcSdtGYHAo1RxxG7EFTZp4iTxR5y9TsfSoR7bKR",
  "key18": "37CfGRzupChTMEvuaUPXBrAquBS7qqGibgxkRhfsLjvejHydc448KfzVsfVGbFTKqDR5z4RoTuyPkrGV8ziLrnDh",
  "key19": "2WF6rnFAMJS4JKVAEoxab9qKrre15TDLEWsbeP91pojykKzjvvp2T86BB9WY9ifUEcRhXoDUyLsLHPE4MLrYtgDt",
  "key20": "2xf3526RZqm9jVgEDgeYWzjCRp1rFFkesaB2KuJ8ASeccWDHs9Z1fVyh5P8yCaG2LZ1GsJWjTTbS6BXw5DSXnmxH",
  "key21": "5XyS6iPNvUS77HW3jk294qi19nLJTuWU7wKMMTmNWBqww9we64k7R1WaQNuNYNdXywsjdrTr1sGgmtUZD5SWSVd7",
  "key22": "3hnuQ5XVK32bWtuFMxQRaEzvDmuj6u5DhR7rhKqQF81jNc224yF2YqqKKQhEejsmtj4kW23SdZYPtAqQM6smU7Ka",
  "key23": "3G6MyHv1ZG8QZv8Hy21jhBQTiNSkYoPK7R5UHmwfaX65pmqL8mAjEsQLKhnPL7Ss7uWS7sYWaump1UzKLd5w4B65",
  "key24": "2Z5nTYApcAMqwYf1YVaoZbTYYKNyPK44waEt6qSJPhkDxXFHKCqHoegWVE3vvXU67SEty9ntiw1GKYnviXhC7CBt",
  "key25": "4iaqeiwCJBNnJca2yYJDmsCFZ35aF91EfrXVgRJXiwkhjk7pqpsYqWuZaRLbXxkVUCiwaTdxftKHXdjZw83uoqTq",
  "key26": "5pVpiNYAssAbvZmN5NEXHXVqT2XwUH51GXseh31Ae6LFYDVfY3ExAxEFzHqpmLi5JeaaqqmQKniLMJgKBUcewNby",
  "key27": "4bJor7xz8X1YLpkoE1kUUBQPjNabepgCP1vPwDhTWNLQyjSFh97s5sRmqfL6toSDP7LXyYMf5iR9nxbdP56SihhG",
  "key28": "5bmAUE5pS5ULnug5ZgXbPNRoHnpBC43CnioycAefMeGFjojX4pvVaZ53cVdTRoh4t1ESR5QJUoyGHeZrDMw6q5vZ",
  "key29": "p1ton2BmjXjYc1C4ZNo1yyZNZt6qw6Lyb94wBZHEk5XgqyKpPd7RKmx7zgumA3gCjHxCDEBRbn4dmWNfnGX5Yh9",
  "key30": "3TX4chh1yzE8fY3qqJvvJo58u6PiaHfrqRvyueP7hugrk2j4EXTrn2FaHmQv4xYHNVjapxQwkPXcdjgzGsoAVjDL",
  "key31": "Gp7TDq9XPo5qhMvUQJ1tSi2kNwKKieNQfxPsUjY37ZdcidtP2pZwqh1LbpJMH9pAHre5ZaDY6PREw2FVB8mcnfQ",
  "key32": "xk8C8Ng2m37fexsYC123gP5TMkmMEMe3M9Z2DN7MtcqABxNBMznxHWAksndaJwHgGJhvjeoYyRX7wD9msxNNyHF",
  "key33": "31Nxnz5fyB4a7ze4gwnASQdwNmETxeWDpEdsyC9iNsGJyh2mhvsVYZpTs9LSt1fzQfJwZGRsfVpJ1MQ1cve7UcSJ",
  "key34": "655HJYttGKgpotXgYAAssHWAHtDtDimQWU1mymhHoFZJj9kvvEThc5pfLjJbKdrxnqLpcGuciB14agQUa2XucdCv",
  "key35": "5GXEw25LJeyFXhrG5JyFtcsNtA6GAKme9PLURiy2N54PkmGP36mcBxo4Hta5SLQ6hFPz8ZKADcQnJK5QbRZVxkN3",
  "key36": "2fkX37JeqWYfmTjKfUHfmrfTE3dySmUsqVMiFFHoJLssXPoANycbjdCSxaULUtMQTYGwbj4dzZb767CQZ4LBdMVc",
  "key37": "5UKKsJMKVpjEBGxbHnC2ipKJUSKXAqLnmh5EQFpZdqdQgccTZzXnyZcbSpEbpHiSvja57ZvX5waLeL8DkKnF9oK",
  "key38": "3BW3AjCpSwzsWw5XjBTUdkRLWhNae9F9G5JhZLMJ15kqMRqfQsBZTGVuzQ5AEXUiL8Y76Gtxy9gvUPzFnHzfEuGd",
  "key39": "3Myiokohc9mi92YgpckLVFZycfTxxSsXNduPuiUD3HkhYqyA6HCbVuyd3W8NLvZCYwbD158YwzUYdFUVh9w7E9fp",
  "key40": "55GKWfEMS73uJRZTQPp7pPitNjFur23mpSzXugDuZT6zcn8JEkRWkxFWjcbUs8QGcQ5rb8ZzKHDtCtBj7J6yTPmm",
  "key41": "2NohPbtQkgXfTxdJJdRMSMx3NJ9Dn5yvPB2XuYx2zgSy35U6RF1a3buDprBGk9i1FAyGTp3WKY6WWjbiYRTgKaL5"
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
