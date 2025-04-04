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
    "3QyN9T1muEYH8Ho8gHAgrvyh2rR1JxZP5sAJ5QW8iUvXxUVAFov1PRUWw3XiiSZgmrZ3EmdguAT1XjVffBnXfSaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXH7jkaSe59yPFJuMsmKCTWvaR4pCmpZP7SCQk5FCDhUF6P9YbkefUb2CskdFniFtPs5Pp6T56Hr2FrTHNHnvqU",
  "key1": "3mQ3gSfr6NqUfKrfqrJQ5z6DLoDCtDrVoND5yv4AFe9UjW6HB3i231aSEJtSPLfJKTHJA3mqiVUEB6BLExQWBfgr",
  "key2": "4FZQuyEuk6cnS4YiSmevK7EsiUirc7czDDzPKpurCGjnhMwX5qMf4g85gZRDzQr9dHg4kTpNKHBsa6mTVkf7GNbU",
  "key3": "ambBRPdopJxRNwmKnhK4cyUCSNm6NWdByTJR2LmB3MqU19K3UX9UtoL5zUhD7kum4U7DB1LeF42gvtf57qWh5b2",
  "key4": "4ookQfNvPQY6GJVM8as5uxwHhiD7WbJ4c4DRbK8m1MyBwQHn5HdMsBfQENaamc24mRRmSDiyHy1KEWDtqKobAneH",
  "key5": "5sFvqTrWSyb6F8dDjXqbu3b4HiKdxZWJiaH7bPpJCfADWxmScGSNQGDowjdk4J4Jr7Z7vUZRZYPH7hN9wvpQuBKQ",
  "key6": "5Bq5xY7jpjhJiKn21YR5rL9TCW3NVnYS65ZH5o6YKr7tngRZR3EY7RySoTrgAXXvYG6PdjjNaHADD1hL1G1HxuL3",
  "key7": "4JLFmwqr49ANu5ANTgtzM6JYcZ4h69kxGLmQFcN7hCHdPZm1EmQaVzQ5VeLmLGvKfoMVav7v4sCgR1pARq3veCoS",
  "key8": "55pdmfg8G2baRX6KnMeXy4FeQKc9pBbBTAnn7ghQZSt7kR8HxeReGvtDqKuiyV8MRgYNgRh8urH8T92LjP8p864A",
  "key9": "5oKqKsgHrZRiyb2qEuJLUyxeR49Z5yeJhffEgpqKj54BugAJgQvh3eUCZ4Cn3Y5f6SnSeJhqwVcoE8nCScBYsNz5",
  "key10": "56zqGQKJNBapuEvkyyeJZxY5SvEvFq35G5bNsNgxAW54oi1Vd8hS5VuvEWCj6wwoZjpTxM72X9avhWVDPugvbGjG",
  "key11": "GAokHbyXyWkokfsLZE1QVB7gJ1AfJK9J8AgNPbS3cQF1cKPT995cW6fKDwHGrrBxMtJzsjQjck2119gXS25Qoyo",
  "key12": "5ok5Jwya6B1oUARtY8DK3xAjDS2bQZ2pmHt2pfuCFZvncKNEsXkUHq79VjYMfYpqiAjNhwpBwJKHZpiTCHiQVTs7",
  "key13": "5pnfgKq5sj3dWc8FnpkUp5Pbt1bGJhrtxQDwtfsUTbzSMvRUxFVsDWiEXBUaXUkPhvLSgSeGFMRZyosB8dHSArq7",
  "key14": "2XcJZVsNHPKKoZnVcGH2fvPvNwRXYL7Ga4rVVgLDGNzKXGLNghXK41MDw9Hj9oNZUdLty1KaMES4myhoEaqgiS7C",
  "key15": "XCpQjZWSgDcdLFAYw6JQKoHpdSM84e57xFUCFMPFYc1jDjUyB3xqMNqTuN2U9bxuaefvcn5KVBCdnx3QBFwJ2r1",
  "key16": "ahRVTvPtoZj9C1zxYyuF7yWJxM69CqKmq5C12MAPUUYPXYTeoqFFqDtNcALzVdBURatQ9TxwcwSVkkwRCyqoR4F",
  "key17": "4J74c29pMGL7f3kzoeSa9dweS6rkP6sj8kWto9QEskfiq8aTWoHUYE6u7C6DMSHB4j29BkLBLgxH4gp6mjjsodtE",
  "key18": "2ooz754pWi9MCJMh7vxdq2ukeXSvUpz9mHh4bkVcMyupRHoGS8eATYX6FzbhttBQT2efTwwfiaFeTbnzgWxobqTF",
  "key19": "4X4yNAaGMPnQ3zx8CxHgzfJvdLMox8uFvAiC9PyLMhXX5PKp1RVPoxurUmQ7sQChzvcmoQyK6JozWPAkNSjQ8kcg",
  "key20": "3gL97cUszeCEre4TfnXUKSERQQUawP4izdqNcqdLvt41qyWRdUsU4FPsyymvYHJ5GXYqF2dGQdzBZ82hZygfScPJ",
  "key21": "kKteo9ML7dX1nHfhGFNeVeVMafjLh8wghgQawrcSBxV571GJ1aYrBy3TaWJkGez9iitHwHssmun7ZS39KroPNuA",
  "key22": "2UiJQn8oHHNbk6FtztsmWF2DHnb1n6hS2ZuWrzf6G2GoCSVpbUpNh4r6ftVm4BUu7bjZTpgvCURJHeih1iwyegy6",
  "key23": "4jSMn4Q3AGyJbSdPwrtfR3mBPRHyowd4fnTTF8yvnqRzXgDKviQUGo8CCoCo1ieKUxZgD1cEKozsuAvWQJ7vF9rZ",
  "key24": "4RMY6WKtxA1usnohepsEhAjoaKWDDyYbWtdFnZRbq3kAYMEFezJEFUpUq85oYB4eCcqo8dCkukvn9jVUNLHToLdi",
  "key25": "4Fc2Litb1E7SmcB8pubzES1HYRcFGeh1L3ajvjXN8gBG8CajHbbpVWJC25KaW3C6NMbdQmLCsyKCLGq56zkUVDET",
  "key26": "32eTQ1vaGj4Y7NWpbawU5winE7EV3wUA4A1CQfKmaHDoDxCFmL718sM5mL1rQ77arE2i7r5jB3Vhq5yuqSKcobV6",
  "key27": "QuPzYruda8v2tEPdxi1bsFNcX4z8r8SJkX66gPGVKnTGyC29uUU3jHiJpAtKuobW4r5TYGqfBATfjmjWGXS4YB8",
  "key28": "5J4FtsqDkjCcp7orqjLa5QuE2ZtWQD2b5jCJYUByB6dZXacGEyijqDtpHMRaZBpjB2fLg6zpxAM4Gw8QPUQaVHgm",
  "key29": "2cts1BPuijmNfxg1tJEMY9WWa7KgAXoBSxnjYqshoqik5MhhAJbpF4Z5ygLAonfbBcmPWLZpF1CCYuXtQg4hs1rB",
  "key30": "5k23z27a3rRpakPR1obhuyi6HJ9yWUdVjwq35j9yfUseSHxAzGPf55Zzs596UUoVaJJAaYeU9dpugHjMga8qC3BY",
  "key31": "3T85tkUEEFv9cfrNB7hGyovZVG6988r6YF5uXmtYZAwBDEWHwZke5asbgPLWDaQvFTniFgwWc3hV6joAsLbmuEak",
  "key32": "7BbbLAWjCC8wRJWmuJjtg7YbVQrAL2LSgUmiXqMuG454APdgPcuQoWKh4NPMhj43pFVfzLZ8dcENh4WduY1WYtD",
  "key33": "5QTE5ptwbowyNSHPGUGjBNhnA8huLhQNTxK6kVBe4d6A7q7FZr1SYQpktE43WW6q1eTQrbAWoeAiPvm9fYTZH6X5",
  "key34": "3RnYJUMXtmZSUMxRb9Kg6rBgm5uAnPMZqchYkdZ8cdeyVzdzEYbuvnc9YzwQUUodV7ZxdGoay4W51TVnHphSGGjr",
  "key35": "4zBAPUrfHKn75VP4TYuQt1QGbrRnY37s1H9RWR54UF98UQQUkE2zMxQr6RRyjZMcJfBQqf4ALSa2B1myn3LpU17v",
  "key36": "BWf8vtXUMv812eomKKY5D11DFuFBEJRzgMmUo8A5bqmV3k2bkPv8N9KjGrBsEcHc9nkW3kpq616e2iGd7wRYhmQ",
  "key37": "pXgHWhdZAzRUVfpcC6jmPToXbeSLpGCX8Be7614mSZuz7ff2FY81snyTx23ktPrwZqRyv1KEB295Z9o9CrJiZ6u",
  "key38": "59FuSCRfDJTpyCtyr7pbjUnwBhTown5LcnnKaBZRDX2LAoiYFkAauftuNDHXa6eU4obD93EguV6C9jWvBXDRmHxV",
  "key39": "aAHVyEKs4nghFHFPqyenYuJzT245r8DHB7YZpwU7AAQgDPa6dx3NLkRhygqjofefz6tfkeEVvzd482J6AaDd2Cr",
  "key40": "47A7WxS3jnS6qHGbZ4aQAmaTkDCD8T8QxfQj21dduA7ZoVSJeAsJHuxxQUZmrmuA7EeM9XNeJuGgcDwxbbVdBZAg",
  "key41": "5oYYXRSBXgKosGhA68MHBBTg63QT27npjjGSSy1B1rrpxEa5HpDHJ3gVEWNc2XmErURKegehDdUXxWPE7fYsr8Gi"
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
