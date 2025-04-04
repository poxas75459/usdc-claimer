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
    "5k9r9KabLC91P2LAct6Pzns1PHtWhbKmdKCWUv87NqdgmjBoKFLQFveKUHP8KaEsUdnvDngfur4xYj6rKkKmuqDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36B1pddLVdQ32otHAYaJuCKZAvkHzjumfd4M9rXBYzziMybKejKKwDRF9Q6Lrj5h23z1wGnJNRqps217RxBmomcT",
  "key1": "44L52BDRnkLnkyoExbxTVqSJFWqzC5X5Af3oCYFwjcgAXEDrHqAnMzwzisFXYxDVRgWhsPzBwdoP7H6qZYXHqoME",
  "key2": "2pH1YB7gYPs8wHcF8KBSKXYiUCMY2sUbB4ANCqZQ49DbczpQk1SX3WBJxniR6xDHeuHXWMHsuNjBFrSqnhXTJkbm",
  "key3": "nEeJKfjqKpA1voHSx554Aw7dvBoJ3SGN5kttqKF1WnVnGrY3HTmPMybVf672eJPqUER1humZ7Xc1PSA3SxVq4hJ",
  "key4": "5UedNEVWLEc4pmT4nFTh76zRjLwEmyfswURsRXQGcYbL4C19PZgSpzPMwPSsXHm8ZWjwum6AzfVtKKmT7vXbbwBB",
  "key5": "JkBKWR9F56JY4gYWGwou1aHJdTdWFWUkbyMQuzFnfwQbde4CvcWbbmnY4GsgdB5XRiF6oGXe5YwSdpwQ1fEviJH",
  "key6": "27nvhtQ1mqhaLzcBd3qVzx3Gd3VvNkBYxZWXx6RCcJbCZLkKn4SRLprfT9G3Xk5c2MezRyeCRiiR7SWWVVTLWhYZ",
  "key7": "26kf5HYHbcnNNbdoUtAYXgf7GQ6REeA12xaTPwptqbVHBnVMrHRif3ZZerKqPZbwQdy5z2YGagZD94XArd3YaFUz",
  "key8": "57gcQ4MxHnX4NtauaWhs6FZgMNPuTk8V6Pt5vXgUSn1vgsUZu92G6ap6fYwLeAEVpU3qKCed9Gik8tmV9gEJoGic",
  "key9": "3oFT1NLVXD7Pb99bEcJAduxbKRBFLrLQJTGwTNSkmWn62kQSeCYpJ13F84YcARsLWfR38mB8srp4XG1VSkvyZ2Xe",
  "key10": "mjqbxgeucVMnGB46BBFjfjaT2ijqCQM94j8Ma1HZmiRm6TJoRov3neh66edbnwxD31PuHpU7ydHE7vjxGVwxRZQ",
  "key11": "51JoAsrv2NrDN8SDaiHSENhZtj2pUUjTwS98y3GtUuJGHe1PQGPEQPHMn8ct9UVbKfbgoYStgKo1FY9Nk8WTs8jV",
  "key12": "Xr666zFhBweUVT1LjdN3VaqmNxm8Jh7s8P7ddBSjHNUzxMY3JSBS4M8JeSncdz91jNVuprEhejRMj7XjCgCesJt",
  "key13": "aXAaPW8xxu9y2iZyZtiHaR5F1jZWjXc1bmdetq3ApTpeJUNF7mRJ5VtLNajZ3UXwLtLiM1BrrLmbpZdSHhLKUUB",
  "key14": "2WvsXPYZePjocudDyCL2SWbpccrwMCfuSK9fYR5YFCMzF1T2fhyD43i4Mh9St4rE54vUUhPbD5FQjRJ97DFwwjsJ",
  "key15": "5SSLuciQQJGY7mvvwb4sJnNMczyuPdYPD7hC7eWGD4T5zuW1JCWwHWP2Aj8A2WEERfLZHJQpjRi3Cfpw965Ed94D",
  "key16": "457re4b8a9rT5gDx31dEFumpcdwnP81ZH86YdgQNyXQ1io1Nq3ze55PmtUPdiYNYV1pyQ5PPLiAfkQyjhqSr3MQw",
  "key17": "3BSsSqgcsA7cb89V7sp6cG1idVZGPGJdzzYTeMc7Nd5QnV1ZtLBcudzsLh1NVnWHVgsrkN4MWuwqwGGNMgNHtY8k",
  "key18": "4jryftx3n9Ra2uykDGUCZNbqPZJiRLeEuT5nMCLPF6LfHqQtPeDKB8K15yMQwXVKkRSmoGUB8YniwUMGGTrrnpj6",
  "key19": "gj2CFqLYpPZRSLcToGVZtZh9CgeKtcX18GqCxWdTfQZosCDf5nS1NDhpMWBZasekLm2RqcY6kbTBHMEHzkwN5Un",
  "key20": "4Verxjt5p3HrB8WsfPFCqZVg8p5HHZqizBbhJmW2mFAvxpfNmxHSYgE8MPuVnRHtQvcM4SMyLuF9Xfue1gVJVbwZ",
  "key21": "5BwmiXcWJBy4fczg8n7fGqx7QcNHHBKSGa1TXk3kJRkPqmcrBuDugFA4ZGiiriKnJmqbJkSbuNSHshkLcXoubPzG",
  "key22": "BjsvBgesw78AJydNrzUnMbiHA7dFMxqDVSfY73D2GwS8rEd67wayB57PABHGbzeFrJSaoQed1px2yew7GnC7of4",
  "key23": "65waDm5U7NTvSdZZU1eoeSBW53Uyn4f1cAF996CYmYDvHmPJMXzeSZbqFwNV5r2bstLiSkZu1mKuo6LR6Sur1vka",
  "key24": "3Pd1cddpyrwmBZ67SyLdKm3jsfqwvC6FMNmNDsBNquPFEjLteB3JgsabqmFAyoTPT4kGzpXRJdjUVKeyLuvySkmA",
  "key25": "4zpDaYAagrZrJcHo9xVYji1RJysMiARzV1PH8EMFhTzRArZy2FKK8TwC1Lt6eX7kmt15DjmKg5Z2uTq6EaPkMMQZ",
  "key26": "2HaC36dKZFhE5PNijnJmZ9vawDuZX73zd6HreEWfw7jsdLFbhiav9cPFfxi52jJjGk8GX8DJRw9D9v9thKc5LvuK",
  "key27": "bZWCBgViK2wx7KUQECxsjhtNRAaPyRo6m3SMMKPNw5atrCCG1vdtXrXzL16Aiv5J3vrLwYkJoVmoYCWoErGgwGb",
  "key28": "fQ3GxfDywaEpDSYMJHEwpRnJSQ2dX88RkftkogKiFco1ZmHv3cxHrxi1hnF8LUYNtA8jpRqcyeF4XyTLvXMcoK6",
  "key29": "2aMeNHUq1uPnHf7bVV8hzRnzxMktth88NyaABZ4RwtfmhwnMja5VAQRV3kgd27hrCTCMpXDjLn3ZddG4QVukNtbk",
  "key30": "3NF7rmUtbnvKJpTTQrRjS57T4EtGBM3haGomRSBnts57ijwgeEievX4jMf8KiXYDX6NYhnWFE1p3xF9mjLRns45N",
  "key31": "2FQyLaGzvpgJgpqi1772ZyNdKu1StBrjJawLWWtUT6Pcfu6rPRGKsZQT41MPuhL7Tx5zyJm9Mc4Mooed2hWnppP9",
  "key32": "2PbXKj8ALVFipo15GaBsabB71acmgLrMh3j83AXjqbPGBzmdE5xhJZoyxKSEo93Mh9npSgG9GT8sZMS3h8soCfJD",
  "key33": "4LFsoyiCCyjwqChmp1PjREPpxtYg3JfPUKMhtZVnYuJingm2W2XYvnuaKR6FhcJRzjpNUpBKr8G7DWUL9ox1qhW4",
  "key34": "5YopLUxUgBigGk1jZDpxNs2dD1m2dUYTw1UWabtWJrWJqFGhLUbWcaSedWtfy6eJGpL8pmbLznTjwijpmm6w6t5n",
  "key35": "4VxxRpRygqVmhgMch8dwTJBgGfxPN9Sm5F24Q2r6UP2stjwRsrGch1adVQT8qjAZgg5fcpfNrMTucc82hgzmhj1",
  "key36": "UohnqWbB4ztoKiz1i7fJAKyhhij5mrZSSuhC4YB1DhT1vHUDffjNqqB6vgW4WebMHmqMrDZmc1R9JDqLeuLkd4r",
  "key37": "4ub7VT2ynhxKCuQiJDMto4GcBKoSrM9XT3KFVi3CwkCE3oQikFcQTyYA2HzDfrsQy394zLPnJ1JGAxftK3jExabQ",
  "key38": "5d435V9paqPcgSmPxH5hpqM9VjVrRtawhc29MVov3AFQDzkLF9WfaieLqDy23swDuVEH126uC42CKKrPUcQhcaaU",
  "key39": "4Bi2aeKFYfShjk8xvQc8845k4q1yWC4uMuE6S9XGZWdNvbvzkokubot51vJugxNwCrhgs79vn31tf7nep8prUM8C",
  "key40": "28evj7J2qZZuaovad1yZuLd2q9dvhxwTbHCwNp7LTYGRrb96ne9Mn9AnqQ7Byanp3mroypzitvsncAbeJPhJoiFT",
  "key41": "4stpLZ81g16qmEEE1QWc3FMY4mzA6XfXSSC1j7LsNBtCAandxrpSjALG3dJ8AZN1uKGkQJyNU4JSpW1mzQvYQ1Tp",
  "key42": "3uojENeitotxmhKpv1sXG38Pn9xQrn2B9p4cv1MLJWe9XBjrikeYygY4eSz2bNoQ3JgXFg4JhjpxKD7ZBNq8Whbz",
  "key43": "3L9YLaXkMBdTAGCa2gLny3ZoEW9WezEGWX631p3U16886kDpxvJCG7mT9iJ4V5sTDcYoGSjpbxBnN2AXMVFnTKyi",
  "key44": "5UuEFB3MsnDRgNChvNNxhd4F5VB5MRwTjwk5pZkqUCrrm9JyBsdFM4hWRWNoYmZbSkHTDLhvxSLHUjFe25SrVHZJ",
  "key45": "4LUCwRC14k8RhwNLp7iuZypF3ATMvKJsnY9Wu6SpoHX8bogUtU7MhZpgBf777jgKyxTV18HgF3PeS85goq49uhn9",
  "key46": "2wcx3JohY72hqmAgA13RgaqAMFhfqseA6VGbVLcyqbDKskeyZiiXybx3SL4Cv1xWzHPHJNNjTfzRYAHTDijWTpcF"
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
