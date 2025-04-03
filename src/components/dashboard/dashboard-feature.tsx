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
    "yFquQYJwpRaKWMWB5H143NfZwGN5Uya3E3Nsi4KBAHUTgXecpQrBps3ydqCsQjcmZBicuNH3WxDHSZi6Fk8vTJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lf2pxBE7n4d83bPLqLCvMq2MczB8kzyk6g9piR7py5KYKf36iJSHxAa6Uua5oERBwVXgczuF2rfzhUfZVLi6iB7",
  "key1": "UxHagNWuQrEcyjzypeA3sjfw3ebECZcdYu7TTDi6hyQpA4eWtDdN9wukjhGAjruvYdrALXP8PjUA9fctn3rCSic",
  "key2": "47h1XjDb2MRCDvGobWg5dLdrN3jhCfcSz5atAhSQyz9Ntfgv4kieSpCCfz2xCPXjhVQfZCjov3tWWMVrvqFbBwMe",
  "key3": "2Tsv6sqEzwwRxSaxrvgrnk5Wbei4KYk6s9msCw9ReoZqK8nWnXjTcvjzckTrDve1GRXEFBXZBo6iiWkrhx72Cgxa",
  "key4": "4ayVkcuiNVLCWNBu5hnUUgwaXaKNuEMdnNjjfRfJTp9xtYXnvo3bCdiqZj1V8m7cshwERsv2p9irTjWjAcRzf7uG",
  "key5": "25ytm7fB23rhwC4RWq7wXh8U7UvreQTSRAgrbDsgxtRexWpLJvt2QCeRg3nnMcH4Y7mEDCF6Sm5QbiQpjMGzFfyR",
  "key6": "2dkoq8rjF5qhDAZRNDDXVcnaSvh7UhwYCrQtTdKvUvBrD9uaEhFxERrfhGkE8jyLgEUnsn19UimFLXqyZy9JW1Nw",
  "key7": "3MCDKbE8ZcQgDsZdAn5npLQkQXrZhsmuzbAtVuNrhw6CPNzAbPCdbdjNvdL6qDzNzK26B51YqKSytoNCs6eJucDi",
  "key8": "3tT5QqgBvj4zReRTeefk2G4YMLQj2xJfvNkXTqVrba3QNVNMuzNUb3YewwE6Vs5e9wRoAg1rR7EvXo6tXU4cCMUf",
  "key9": "SvdsGNswxiKBBfiD4t7f1F4g7Ns2pBZpwk8iGYfpkUhfX8w7mEkx88Cx7AfUFPuUnSAJYaXBCrpUEES5gaFEhUc",
  "key10": "xCXCqTNbdaeqMUMTq1XmRKSo7eNrR1geax6ezVwgwFNLzBJMRjFtCH3AhSaAoihSM9vYJkKmTqPfqozdU1tc4ff",
  "key11": "ra3mojthUH1xZAGtmbjUXwAzmbLGKeJtCHYFPTsjeWEydiTdarVjcCBrgdY83gNCDuxDNkSYWWEur6i6N2SJ44c",
  "key12": "d1gworUCtq4bXFmwZrUuS27AtGPstEccS4DLrow9TDXheuiRAEp8UbBKe5WFdoqKbyhQWqpYh4k37S4d9muwKEq",
  "key13": "44xtoKVPGp2XBVUXak1iZnJMWHScdEvCbQNqTQ7CyVJgZDdQBQQTh9XEys1Pe197PNNqXLamdFMT8woYDyKtfYxK",
  "key14": "4D4Efn44GQ34dNZuG5hpmxJYE16e6XDJPQ7dsbC7mKuesZoQw5sGQcvc224BsLA5DPwBP8dYm3rZjMZJiN9B6x7K",
  "key15": "3wwYBcoSk65v65dSdeSbmPhabKqwemEnCavwspRFq6PBwjGnH2XzPejaFXmfvfZrixrdDVFfSrSfukC5VUKNvBtt",
  "key16": "2PtBb6yXxk5Nqa8K8QPXjmPdRekLdbiUEWHkHeoHSgdCvj9pgjm9sCDeXz2JUfVumNHN2tu8Xzn6wxUiDoPxEeXi",
  "key17": "5wbAjQphcBF5DjvMYVC2fBYrng4ZdfWycHambyYR6TBC8HHCe4NgLxSWfJKLfzazxjFxys1iDvpKw7EkMk8JdbrC",
  "key18": "5rJq5PQcMGr2RXhdWimdEGHy67WCMoN18qTQszg81sx9D2pyjfGhaAuw4JTvWGJZrhbKsX6hiW2vqhidAX2R8d8s",
  "key19": "45Ct1tZfL3uoZ3WZgXN179MCwGxrdz6Y3MFM1q3BuH98y9c9ZVEfX78PRVua7cty8tH8aDgSumUEG2ZGqGXkw2cb",
  "key20": "3sTVdEBpMYdMXz3i9ShZ4HMru2pZf2JkreLFP1JTdNYHXYcNp3C9y2SqZ8JPupJPsqgRY8du34x8RgnpAVrJoAEw",
  "key21": "5NG7ouNrJ64gpfMW8pbmRJXXSEuZdTFXdeWL9xemgnB1jj8KUczFEzDn64PRvnCJu6qsgFPSS17jaA6sEq2cPwFW",
  "key22": "kdaJzdpaHd5qnhGNKRroHqzuvN8L6j6xHkNHaMnJhoG8MkuAGDWUMPDQPuLnkoseThD32kaExc9gbfT4D1faxkn",
  "key23": "2ZNYhoctDiNvqWL2bgMQjSGa7pJj2DQG7PX1fXyXPKnXrBipvUNmfyzuhFYFdKFiWBHz8K8fdysQwnCp9cQhtLkX",
  "key24": "4wGehM7JNXFnpagvTBxBxx63uNShooM14vuwzhw5KczFWy8zHqDP2QSP2PgmWm2UXYTUffZxWLCKAeAeomDJJYA2",
  "key25": "23wDnpVqjFaBCMCezP7teKZKnafPgNz2AHHVrnUc5vL56SxuJFavu4Uan7GsSsRYe5sxDZK73j3u47RgWXond15E",
  "key26": "2RE4JQBSAwSdR6ryZ5h3yFfMbCGN8cHmKoTZzzsEKCqndcj2DbBvxUCNapFgeQnnfAGNSXRkBQzSLZ4FCry7Bovt",
  "key27": "3PdkdNvLswbxwg6pckbMZ7iXBASq53HHbuLg5kBFas9csDLXxPXxeRABnjkLNwRCNnDf8jbQEHxhFHjZTubxS68N",
  "key28": "5qaDFZyEVRVns6UnMDqzQYxqRg3cGqpMcpczSgCRq4H9KyhTxsrZidpyMFUshvdq9beYqHtEpHDvk3X1j8GzxmZW",
  "key29": "TiDDjQK5qgxA2dtKEsLF8RwRKqkcKKt7Y9XA73HYrg5G4eFsPxEBHTWiiBg6tUVkx4Kt1aFuEzUMGtQyN626ejQ",
  "key30": "2HvSZDgBFbSDGhCLqpF2DXU2j4JQ5K7Svd3KMoMoCXvaSWicH3CP1Wiz8tAaSUpMZEaXYWNr2xk5srWfkJiFhw2e",
  "key31": "qQUV9ZeTPwHa8DXvQTn7L2eo4h7sBkYPnnzxJuVoSKatSwVeiMCCRwrqXAZJCM5oxnm6Auv8JN5atDBFea1qbho",
  "key32": "32mnhZMkw1NtjiBmijuTLAEXbXHAPVffAeZLdcxBMD1HZPmtyXmcR7hs8rXKdVX1fUSXaehomjaAAPFPHpWPH3Ly",
  "key33": "3U3ySH1MPXYaUNrBhWRudmiUCDH4DANkNmTXpRpMimUQeb9Wg7FciF5LEidDfLw4NLtJfqu181yCjXiZe1SdnF3P",
  "key34": "2CYeGnW1sXD12ZLPLCXVqdQ6d8sDGeTSsgD2tm9DMWpCKhJJFog1GxhdFZDSYox5UDEhWRV3q5nQUcsJNBPe8BBJ",
  "key35": "4U6Hgse3c2bya5cUyRPBNr2kCsTt7ePoAnmRBckeQYhJ72d7MFY2Yd2HGWTH79uSLYnkfRMV1ZirNvdjqWhtn7Vv",
  "key36": "3ssxtqdG76rg8855G3JXvo31eEosUoyTJ6MSeHvmApbkDdDnBsCRs3N5GV9ZJJXJiD8Ly22Gg22wApxXX3XEwK2b",
  "key37": "29kt8CRkbdSuddVwh6mHyKHfShDotoosYzY95pE8xxixWpVZimgPqJZLW9s4zXNcvKEz1GYn9dwa7x8HaH8vKSFi",
  "key38": "3yRPsyY6RwcNNyZKFKhfetqFFAyh3G4QP7TC2N7U7kEk3PfU5mNZT5XyrJHpKqEoqxwZGLyuwPHwFw3ShZGyUKyU",
  "key39": "2mfFmpv4UKGdoHB6iFKYei1AQgVmUoaCx68TqUzah35hRphPrvmDZzdR2EzsaCHQQQ1F6Kaf43H9ELrvHrcN9SyF",
  "key40": "4rBVkX44Vqt8kbQ33crCuDFzaw63vqEQRLEBJr4PGnog7WvTaoDCB4cTPjvmLPxeA7muya5QuQcTz38xi7ZvtQ2M",
  "key41": "5hmDaPudzbUbSJUhmAooaZqZ8FJ2T3wb935mezejkr3TeXpnpaYj8v5S4d6umhb1PBiDVFe7wxGPmUNDaiJvq15U",
  "key42": "4wPBVunkrV6BKTF4n89rTASdk2CakWFbgiq3JwLWK2qwvT9SyxyWrM7NqdAgj9xjESThwMJupjhvHNpSUbhSJq9r",
  "key43": "4V3pifqjReaKfXffUC8NSqhBcdts1NZhQFvGVM2MDsFbpVj87JNRXPku11bSEVvegaTKa8q7bJYSo265LNapwg21"
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
