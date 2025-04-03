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
    "3eRpSuzkMPZdxcvC65LRBQAYc8U4HXQapfnbTV1TPEKNVW1qcHdeT6nxEgCwJkcYtn19ybdU8bCwvr1cj8BBcLWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lngt3jr8vSACmb3NfrviFacVnG3uQ3iTdexS9X2azNFCcEXMrtvE1pmTnHYQ8xM5GELXWpUp6dfp9gm2sdGxmK",
  "key1": "2deQL98TgnQXz7HN2RSzYEnrggPBWQtFco9HpBviMJAkFDtMk5eRXCKwYLsTax5YHLEXf2Zd3qEu3WJ2htRA7G2A",
  "key2": "2uZH34mVz4YZNqvNkcqTodusHzHu7QiCGEwLLLFSc6u9qMjUX2iGYsQmNKSx67G5iDSCGVTibaJUSJN2vFCd96Za",
  "key3": "5F2tZYmtVt9B4ZohM4fHruiiSXeHJtTyKsYEcmpZM2NXHf7cCm2525erTFM81rsGxGTeJXpAJhth3AtESxF698pw",
  "key4": "4JeQN7JdY18z39UwXLG7EkasBnz2DRH9RnnXjc9Sq6xcbjubcE4bEkDz9uNBCUfb7uoq6w42sq2PAQxjYGhnydR1",
  "key5": "5fPVKfmTzqbd7fFjUHThsodNeQbpqAbCSsH3WTbPjVvF74tHEoEMajXGuvVWfNbkfBPsb5NFC6CP8kZMbM4K9kSY",
  "key6": "2s4xxDqayQZ1jay7zNhN2A5yCQoUR6qssGPHw3xUC4gSvwLHcJhm3vv4cwVFT5brnuBBTuJKeDF5be6Eo4ZHNc4U",
  "key7": "4mGdguHtHjsVNJ2bJbw8BpmLvBnfCur76koXV9g75BC86s8kXaEdemAjZ9pkgMJxz3s6kmDLbsSJo8mH6CUfLah1",
  "key8": "5224N6EpJ3VT9RL1QfvuJnuxBdhGrfuLS6xdp9cTP3binL5w4iAhqF89AKjT48J1catLGxMQyauS5kfsyGYv7Yuj",
  "key9": "6yoRySVJGU39UHfTrKDwvYRHA3s3FC46wtDKd4BxAQXS2Vpk84kcWuyq67Tq4XU3uUQRtcKeeHXzvTpkBGy6p3d",
  "key10": "5mngC6BxaJi9zC3H6DzHqZEwZBh923ZNPgfd8SJ3PyHD2VXoYfrEzNq1Re1DaTMMV7BgGrBDPzAwcoBY92uZDNJW",
  "key11": "5QJz5HqPAuPtMiytg1KsJDtziCQ1fSN9vaJ52qHSpPwmdKYVs8LK9KgEnt1BCozLhyurEmjM8YM8fxXyrbEZWNuC",
  "key12": "28jCBeEzyFCPzxFGVamAjkZG86e2s8Dd2X2xPUjf8LjMaYpAXqUh3KRRjEDiquqGsf9Z9MiWFiV8hRNiJdP3rcar",
  "key13": "4PAHvDHzbLjySJ2pu8NtvSu6jnzbhk6uPmfUtJc29eQar8qC6PqWemTp9j6wBp1Q8t6YNDzWq4ZsRG7MLf172eKw",
  "key14": "5kVhEQKm29WchM16rX2BGdF35XHGhk1nk4v5HgqjByRFR1pkZeDFtgvHqaQ95yK84Tipzdy9CVisAEdtMHgXiFSw",
  "key15": "67Ea2U8ZL54r9J6wb5s9wdAAEbKkXBh7u8tSLHQFrEuFsAoNhiu1wp232JLWHstgp389udpY5qSE6EkmGkLRrq4x",
  "key16": "5d28Nw2Gc56zDoGi5MqMKqGAgTwKy7xcZQv14i3LtSEnBVjJPA4uh9AiXvN9CXL1Eb4fkDdtdvHE3vMbSTGzLQLF",
  "key17": "3zJ1X5vfNnZFRrVERnNCFnqV8Xie8c1h8xegj7nKKqco5Ce3DeQmTSkQSxTLDh1KCikorRn9Yyj5cntKKUCDtvYe",
  "key18": "2t4UczNCGEQ4fufA2zL7DkjJ5a5dZ7PJY1gBzXbktSMJJG32kRrmfMXk7gk3ceQ73ZDom1bSdWhzrR2pjDagwDBf",
  "key19": "4YxqRHU9KZq7FUVKJesAzW1BH47MSWbU9n7HHhYFNcqe5EbBJyBpUE4fTSiFwkQZd1JERsm8ph2W3WJe7U2ZbrbL",
  "key20": "4YMN7R3YkfPpSbZbXfqkpVLnYEHdGWLKK2v43fDkcueyjMPrtooiF6LMe2157RVdfUBC7XBawQEG1eCC82SWRskk",
  "key21": "2iEjg8mszzu1dTEaBadbQPc9rMGfBwAjGMifGr3zheqzYSkbQCn4jz1thtY1vjQKxFXPnuXVvampKh6NuPhAcp8q",
  "key22": "5JjuPJD2pGUH5e3ED6dgtAa4ZHr2KbcptMpdVgw8f3VtRBPcAukRnJ7zJCE92mYnmJ29a3hvpU55MNpWB6w3uSx5",
  "key23": "7SUVTzryiBYxQ4ruwaMfQwuTVwmo1wmYEkq1iNk5CRXf6715Dh5eruYbTeriiPH8RZ9m1nmpgmtaeHB8CTuxBuf",
  "key24": "3kn8racPA6mT51iQQrvkFkVqxhd4UxHUqH2U23C6BfcQdmYdKK6M6k3Xj7NQNVmvjwy4xKFU6WNf8dQKGSG3gyRg",
  "key25": "4dNXZA1yR5MF8jgYNXFpJQxLfFnPHqFPgs4KxG51cFDczFLGy5pjdPtAy9Qpe5S17dMNtV71Xy2B7PM5H3R3YBCp",
  "key26": "29ECFE81SqYvCNVK2YK5JWc6UkcUaWVYqCLcb3ijXv2qrjrXhHWdXV8eUcmfdLHQGoS7dTmDY4vrhKdHYfzHSKxJ",
  "key27": "5ENfzmP8kk71YtgG397bykT9Btdx8FJ7ynndUSHey2KJB8tscBDrPTsyKRuq4HUiugHeY4p6xrCThEKirCTT8Zpa",
  "key28": "31yasuyF11QSZGWC3cAN9EpK16vYeAvMvRzS2zW3kuz55zZbCNZDfnfwxcMktGamWeGcwFuMgVwDStxBjvi1m1ZG",
  "key29": "3RPNfq3FbkmknEnNTcPa6neowwnEKBDpBxcrF248XqtHLg4XMxHmTsoVjf85bpRTxutdiNfBy1nQAujXCZpbpkFT",
  "key30": "4sAxA2azSPXBt9Hr4sUb169HSnbK8DdjjYzqSWgkgLyD9bcVi8RJxNLmpUwjLaPBSEWZYkMA3H9rn1gEtSjxRFX4",
  "key31": "2Xyc3ipv2TBqJuq7sNAGn5ykvZ1y5a7qk3XjJfGnHdGAFZjuRQ9wXJ7a8RkNojVD1GmnS3pUUEG7LDLH8NYJJKd1",
  "key32": "4BUbL21gZmd3KTMmVNGZr4wGaUuXsxA7eToB4xbqL8Naw3VN7vP2WnMfG7cXbqXt3AP4q8qYhBnvLZ1tVdpNskLP",
  "key33": "5PVkuBaqm9AsirJRs5B1NPTAJini1GHzF4kjAfTLJUFCtK4Soa6chNeaczxHmFZoknmfNStkm3W86QZPXWrKkqYj",
  "key34": "4dYe6x4JRdghfZJu6dJq97vuEznsjaqhwPYuGVA6scmucifPnXy1ndp51rgYghpco2CmSbHKkE7zvHnA8Bw6JXAQ",
  "key35": "4aT1CPYCjXR4bHrvs819nDEpWHuMaM3BVhhDKVABRiqrAnQ95DYYQnUTTWtHnH3ZoQmveaxuztyyNf5VjLS4cFB3",
  "key36": "4g98ZUF42Q57VyPPWikoyRpiFKLD3dovhH7aJ1oqq1Zu1AGFCG1NSabPMnbNS5tpxCCz2Tb9YZ1miVCcQqLTNAjw",
  "key37": "2Q96r6uYXMcR45AfupQ7x3togaoytiemQ3jRSsBuDaVPJ99sG1ouxnP2DXYV5WiX9r3YYR5ccdVnGj8qc8H2kERs",
  "key38": "2RbPYbn5cxGi4zXiFCngFA6rW9pHnYZFJ3f8djvkVdFmAzhQ5iNmxsv6Xn4pzn1vrgtP8TG2yL56gVnnwbqrFMZC",
  "key39": "4HdeXz75F7VQL2PFwqmGHqNdzacKLXmydy8GsxodeqGpPyUb2Eb1dL8vTrD2ibiWRe7bhMcvWnoiGvvVSyahktpu",
  "key40": "2x2NUzktPh2GnbgdQsHyDgCZfYxcSGVCgYRR4RVZWM527FsYNJEa8m4Cz51L9eq7G6aNeY4Lqsag26Rw1TeuHFhP",
  "key41": "5YPGvJfJdvELZf6U87Zm8SRxbtYfGs1BACYUh9JLzfLctRFKNcXptCAVFHwTWcC8hMWCSixdDRLVhx7BvjYopDX3",
  "key42": "64pd6AUhdmaGoHuQH16Kowx71o1Kgt2GrB1LRnbgiSbzq3SdiZFqwntPSWdejnsiqtZMB5eDVx3i8bwPNmbF9Xc5",
  "key43": "59rrCNwD9Tdb1X9f163H81XR7Kfc3oWQstaaW6tATemKgm6ehcjpVsf28a9y4uB5dgNoZZx22UjhnYRYhgZN5ixj",
  "key44": "5x2hw44cB17aBK2tf1Hmd46YgtqGGMB7PEPyz4A7YyLXysv8HbgkMqBRPRa2xK96Sf7VNSoNYLHVGqvmU13pbcJ3",
  "key45": "5VtEpi5sobZL96gGaZWbD4J88vgvmaoKVF6wg2Xae812SGvAFuLzuMYJvSZmZ2EEcQfvRM8wkbAa48PD94vWEkMw"
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
