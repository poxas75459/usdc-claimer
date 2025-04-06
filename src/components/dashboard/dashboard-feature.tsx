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
    "43DdEQaH5XTYfB4eua6fqzKrW6P2xahid6dVpqnYc5whBoh2HmPMUU3ahCukBcSN68BdWjC7hZW3BtLLSpmJjTXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qz67on5Nz2TwmxGbPubdpjH1KCPZQmFDGfsmSCB2uLbDPYVUMpMxVJdM6YeDG23w2pxHLkgDqhULyXgKkLtgZ9g",
  "key1": "5ZcbCrduhgVJ2wT2n4mra4tqsviGAJCjXf6RjM4CcKH4bbcLdWs3darNpDgexojHhVaBogNRGRsrBg6CVJsNKu1a",
  "key2": "47Y68cjqau6C6xi2LyonnsFnmXC4MxSC8f9SYBmxdNNBEM4X6fv2rsoGqEzCZXWUuUx8P9R4g1bCPhXj3BQZ5mM5",
  "key3": "2dAkLtDKd4vHGzuuXr95LX8fXDdwhHkJPc8sch6pCbtojuKFBpjWZNf5TA6qJqbodExRtTfrTVzZnxvUDEK5ir9S",
  "key4": "5V8tyg5wPnPWzE75iDtzqVATRvwHQGmhMrkVzbKbKXc6acxCni2LcNpUAxtpPhPSJzCc5kPyM1uum6hV7kHdhK3a",
  "key5": "3asfR8DuBy9QmnrQmbXwdC1XEUGGfm2Ri4QzKv72jKqQUdZHUZ6odqyt8wpgYsnUjZDjqGaTGZHFWu4Sz4ZoBxuj",
  "key6": "4A33DdynUXuZde7RjaABBCdfB4TVto1FC4AzWDy2uqNotY3Xh2HS5TXyWoZHitQsCRNVojetCtKvhDZbfq3nN6FD",
  "key7": "2ZVjuW9pzE55AMHvFvERKQxxvHhM4Xhrpd3nqo5dBK7Us6sCoQpCaGNqCqezJBNEVAWQxHFSM6Qhao9c4qNdkY4S",
  "key8": "5i82baKBfFHxeiYQijERVJLM9CKRHiirmPp4emJTgHarxh4Cevn3niY26FQFSEpEMCgRzWpZvYExRFpJj4QJo579",
  "key9": "5jMsdRfbwQmqGhqLKUjPuyEximrZM6TLWPT9KGJz5DrfiXhENEVbJHFqa5omVieMfS5fHABiokiWnEFBjtooWp94",
  "key10": "4nxcFjUjUThhPAUzrzBbUXPgaVNggQJLCqt5R5M6RbCJ8wZbSJ2y2744NvmHHQFzquMq8CemT8zQyxUBju1d9oFX",
  "key11": "M9kjYSvepMLNz2T37XNoM5VWzVoEHo8jJuu3KK8gtpDSb2QvtK7FgtwoLcoP3uDiYys8DvHRMfCWmu7MPXppf3K",
  "key12": "43p9Q3yGEuBhyFuPsQyf9E75uYr9RcvMZUq5DaBUCA2cwbMcVnXykPqvZWA8sY4e8mxn2MgnFWJxMEcoViPnpEZm",
  "key13": "Gg7xxS8P3AvEboJsWbVKJiefzhj7fiLUsawGMZoG7tdT8D6PHkCWsHVdXX6bmnUapw8n6yJvkzJ1Aq6ckohUFFC",
  "key14": "KpCnGg5NWjeTqAZw1CShATWygfVrR4mNxeVnBX3KEEmtRwNGYfeGgLcVx2NxNgDLYx55dpqUSY49a2dSc2tf3WS",
  "key15": "4md4tEVz1enYyWB4uZyP6He3ywvEEcTMDDfAR1eedkAnZJg2dAdNR7DpvNTfcXdPEu7aE9WexfujgqbMGwchfQ6K",
  "key16": "VKyjUmqm9atF6ZtDnfNskcL24rSRCzMqgcXxwvrzAPNHC8Fg6MAQQg2vJ1vQqWMr3WoMEoYioJebvaXa2M27vDv",
  "key17": "5V9mAnaDGkq18Lfri4DrhZnmW25GvrxdPR7cUzE7ytCKedyS7nAwRnRmf97NAMPJp88PfEpsNxwTuBkeBPDFRd8j",
  "key18": "JsjBX5T24fPSM9seBP8SEoqHSyrytHiYTp7RyyPeTHbu6LKwNjV7q7JmmerwJ5oZ3YTqDjERsg3fDU8aBFcCKbi",
  "key19": "4WFqZKR6Y6hrYwh37sfMW2RM1UB3CR1Vk1Z7niu9c88Ci7dBiVYsAp5AhKDTgSQ5TJABn1u599qAtTTxLDCnP37C",
  "key20": "TNTMdDuYY9eKYUwtwnfzuyewqed7ebtB8Mu9t4CyMXgNbPTrGm1vH55duuJ7t1eENuEv7HwpZ9tHG8tabMtCa4z",
  "key21": "2h229RTYJPCWSkt2WS1fDeGm16XtJhJ2XdGWmTtEEmpRRx6JzcuunPjTHzj6dNmYJB1oHm4GfkG9SqivAirRUuwv",
  "key22": "24qipjwXyjxbmEWrMjYVbs3Noz91RB2GM42g5MEZg6crFewxrdiMVTwZJjRYWgTg4aNrsQXtm7NdZigrqziUgeiB",
  "key23": "5ZYgEfca6v7SmFd9VgWVUHxraSzxZmLNmad6huTD7ZxwuoKpY8ffFP9fUUmYikySP2UjRoMLd3pvqMdjWDsBVNUw",
  "key24": "66baM5es8ZJpmtHevk6UukKV9rCx88e9hyAVhRq5VGhWaQQNPhZZwKtWJuuncgJH5NS7aay7bw877j7QEUMp4xb5",
  "key25": "3xdj3hz6zMMbVaq8RktFPPDjAvgjeRMozVrZfRBUYwFvq7kH75iaSfE3569751G76sYBVcFG2fMrW8rzhxYESwPy",
  "key26": "KiR2N1J9399Go2MgZ2CWJkfEzUqF4pDkBHeNb5X97GGjxshJ57prmz1QPwZmRsCMhH12zaNYYtbdKKhEQwmEJZW",
  "key27": "2hSnK9sAbER2PSJFy7jxPmiRdK159FqCZGvbqFor8FiiTSNtWpfZbZbevtHTMWSxtHGqLfDoyQYo4Pfou1P389ef",
  "key28": "2Fu73tKHdbkrBaH7ZbAVL19Duy31zemjsTzFBmVuQtdGbJkDCGSGf8jFfGPzMqVepQspMeRZ7ncxaoKNy53UHGx7",
  "key29": "5usWDBHYq93uk6qrzeMZqAB4jarsTyXn8ZV2AXkyayUHkKgiAdU5fes1LJvwvkxY9NfTuUJWp3b5FV6v9aUA96u9",
  "key30": "4TrkcjyBq3A7GyjiGsTkcLMiwCdFpFvsegXV8ty9bVme7kmYnGaxtZ6Bd25xfStpeqaGJDwcotngrxQ1FExPnvkw",
  "key31": "5zbbyex3CbxnJEqZzVjuofxdyHBmuQjZ3AKVTLdAiSkpt1FrowsG4iPT3mvZerqFouHbcmy8PZYR73bMj2JTkehq",
  "key32": "4NbXd8YGdCsymAyU7WHBZuUVHdiry2ckPrnovQh1pTB7DmJ69bFHJqJ9RVaioBLrNdH28rGu4V9ThrtMf7bfjaro",
  "key33": "3d3XkDAZWg7HthFMzL4MnrdzXiAgoTsDngaUV9YnNpDb4evtbFeTK8PrcDhhMfEFV5MEpm25Wg3pcyEoD6oYh5ab",
  "key34": "4LrVV6qeS71dTzXLFFju2vUv7mk8GB856capZXin4fKFwACWmzxHPd5aqtcioRwSXAYTmXJP6NNujpBYL9b5Dnbb",
  "key35": "A3nLXng4f3aTVS23pHdDCCQ8wSQZBpMexMoHTnQwrJHGgzxVQTuZQuCEvaENcYDheJREk5X9caoSp8xTh3RE8Eg",
  "key36": "2xpzDXN9CzXP7Qn6d4XrA2tXbX53En7c3CbvZNuvSiVRLtn3kGLrJmhGp5RGvYnkVF95t91ZGQL8kjtwdAs968oc",
  "key37": "2yNRzq868CnCkGLri1o1SD5Fm291BSDaLa1jTR96k97KpFSrm7v8HS4uZAv9NYVvLYfxKguU2UyGS16BMohNrn6G",
  "key38": "4QCjUdj9eQExnJ4NP2NChhydHSBATHASxcTAPkGtaGk9QdnJ9CdyBoZNqyEWgj13ejryxxkfkSGU8jjQEqUQYbAJ",
  "key39": "3WEYh5k8kF5xmwbjpPDNaGZmshmj87kuH6j1ibuUpkLHWFbPuzG1B9jges4Xacfyhj8CXkBa5rnefYhxpqyg2zbA",
  "key40": "4E3HD8kdC4M2fzCrg3YBDvL5gRYWKy15ZbBuprHBPDwhpEhrsnKdQaHEgzrhBhnaJ2JpZ28vB8c8EY2H4CvyZhdM",
  "key41": "4qdRkzZVqqQ8q8CozxqiNqm3FxVVFQNe6jU8SfqbZ2c6VRJh4EkkkTBAKUbaQvu6iL4yHGX9W1EaYqVvq6JNKUQ1",
  "key42": "3mRKdtXjdCgxSN9or46Pxk9yCF6hamR5vjg2fiCZ9nrJ87JhcUTEmVoofdo7d3CRmSBS4u8cmtRSt8cNqbexYsRE",
  "key43": "3XwAZocpFXsS6KmrANRPR3gcGy3npWrfXTtAxsgbyyoQRbAnKn64cDCXRfJfYhd7FgUmMWYpKaNbXTRHN7JSR1gp",
  "key44": "5Qic1ULgdJBT6QyQjtRd4gefu37jhDXEiXw2pk33eB8EH4syHcKqpDsbSYnGzZAw1itt7uzmfjMVSquqh6AeHgtQ",
  "key45": "VBRzgUAVP7p1ie4XXeLwVSQXTN3CEXKTuhjfzVHXtATygWXmU8S8T2LY8zbroq8Z4YnyYW3uGb1ApaoiGbcrK34"
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
