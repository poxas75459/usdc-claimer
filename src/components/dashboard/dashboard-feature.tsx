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
    "2HFHbibYxqpvx3iwc83gPNZNmUE58HAadfmbVJ8iFfM8H2Jrk7oJoyy3riUySmFBzRGiD4Fy83mztjM3vTdPoZhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42BcjzBjFTpMYNN9LKogxcdqEm85Geb4JTRDpikng1kthCkDjWAmYd9UzrG1wcn1QX94oF8PUmyvxXByGW9A4Rxh",
  "key1": "2vujNsWME1dfZmnp9nHLszJt5y7hDm9XUbApsbWpaTr3NtrdL7crFSfzAuj39ALbNofNRAXxds5WWa4SECBULcVu",
  "key2": "r1TwSmrEvX7fJCfbk7rQwLPRrYVEKwm6WT6pRnLuFS8WwmmwhbxG9iyaKfGKDDTSdCwZAU1SR1z4Zoy7s3pJFVQ",
  "key3": "65vgie8aDetgvb9HWDjF9m4h2CaaHvMcQuMwSLUic2GXPr7wzALE7jHQLCsBN6wkoAWXrRU5ayvHqChSXXtvvWfG",
  "key4": "4xDw4Hf7UDq9yNLBPckQnV67RBr3zc5uLRx6jTqHVU7SEpZ2pcBBguXKj8xkGTLETcsD1zU1tTFLrowzuVQjRfqn",
  "key5": "4saPw2pSfdSfkgC2VLJE5RBUrmHSEKGbQ2ADL5CAV3BUT1c4qmcxwf3KrhnvMgDwgwikVe8CVcArW2hoAqFRz6qc",
  "key6": "5enm3u7vQWsFpmzZ5bDonoBRJXYzxArAmSyFVAskktWe6NqKpoS79bYVJrWY8N68Nb5EbBbrTcqupEexfk9khBSf",
  "key7": "DhNX7kfSbmZ65tsrM52YLiGXfRpsQb3kr223HWDr5HQ8RcC1hdC7sex4iqMvNiBT5rwkJxdNwjT3Lt1MfP9DVTM",
  "key8": "3QQBYGDo6Byeqim6c93sDLCeeMwBaxu8u4G9ybpcdGvgfHC1qzL5WXGB5iXfLMU9upsxQyxmnVW87Fkppo6HYA81",
  "key9": "4onymfZtysvTvrkYD1phBNgMAnJgqjP6yCC8d88vjeXCZsYYRh9Dy2mLGR4Nj7A46KHrrqQJZ6jJwXbBNDvRcda2",
  "key10": "CoNoMbdvnQN1iDgSQYKUp9P9GMdWYDDTcYD2HF3ih2WNo6muJRFPooUsv44E4ZH9e5zrjwRc9dhpA6zQuorKKQJ",
  "key11": "2VMsNdQd7CSDVjf1YNHc1QLMfyqMPwwPC5wAwm7W22vmv2rULzkAhKpjJSXJHkEqHFnxCVwSnZgBQLVyavu4Yb6A",
  "key12": "9zGBb1daNGEjSHU2FiRpaqwXQKt7XoTE46boPBXGQSoMF8NNk8unKVfpFRuJ12aFTYEdNB5H3ZLugbFGWxWzvVE",
  "key13": "24XksDeFePKKXDLcYQ5xcdrMaf7LmtjnopgfBxtsACCRERruK97T7qukRcchL5XikXJ8TmcTRgi54VFtPUm6Fryg",
  "key14": "386KqDAUHCN2fAH15higGJQna4zhd8LkVHUoiiAQZad6V5bde8yQnhJnwPLEu9DoQmbMBqvX8XGan5ueWHMG6em1",
  "key15": "2nsqyhut6rDAAcgCSjRz63HqXSe6sM3ycBJdyEgu3FH4cLfvWfEevAPPem7XgwcVStkeYCrZ3KS25UM9c9HKMznu",
  "key16": "3r8xtqTYJ1bX4qkqTAyBcYQHMpz6i94tMph2K76eeMRiaYXW9q9TatABA4xeNDAkCDRoqyhZuW1VB1mLscCmgzvy",
  "key17": "4zmnTaBSno5ZJ23nL24ouqbn3FkDcD9DopZiq7Mkd9CsibiaYiX99nYBBhhd79LTRqvmyYYf4BD6gMuW7FMu114D",
  "key18": "3ia8JuPak74Mh1mzRZM614pdCvhkgNewbhrAqCnUKsB7AAbVdCkWPqhS5nMDkmFWexSawJFn2DjVjDwpo19sKKWh",
  "key19": "DzyyAaYSZnGnhNQeV4w2g9Wqxwf37tyDUShFbAcChUbZ5fytWon7q5LJ6FS8r3u1R5Hwm8RCy3yuYPHbY948uHd",
  "key20": "8EFZQiviM7nVsfjqpQnziSfsTYqbeswDTpHWN7EarYHkDbe7HgiVKrvqApe3SzK3tzuUTEmoStDR98oCdiZP3w2",
  "key21": "62KugDewqV1JTtyGNRroScXAu5TLHUPNeiVBcqR5YYGRVYfYSy8rJDXembN3Zvq6Ey3fmZFg98CnucCR1NbEEpYU",
  "key22": "5YdnMT9XX1fZ9h64f8sUdJ7JazonfKuQPaTynTddRWQAh8FHjh2AL3UuhvTDPZwn8Jf4cjZZCKh6Zabj4Jh2VMi8",
  "key23": "568xfAEAeiFGGofSdAQz3ka9eCoUGBgi2fWosuZuNjTb5xC88y5B5xpGNuP7P5x4KXhqydUYw5xDvP3ucZhqAEK9",
  "key24": "4LGMpryfiogsHzVtg5QvsNzyAFJaeZvqUTwp7TncHnSLVHn9nfbDZ2BSC58zDymEg9xcg4rTRtns8mhN1J37u8Rg",
  "key25": "KgFqPx8qGfYSE6ijcsbGXNm3M5ftjEz3EADjMUQmPdySDuj1kQtnyucrXALAV3C2sUKPqReXjCkTTULRJQhnPYB",
  "key26": "5VVJ1T8Cv1Qt51rY1KAcQdEBbQAiSyYfyYvFHBv8huthVZPnMd4WsurmBpvJeEnf9vWmB9Kmi431dHZDeuYhfujA",
  "key27": "4zFy4nSiD63mZoTW3gQFzLcAwfhP4QNMy3nAtcmtmmhQBnAbaxf5iUdgvMhMxHLxF165wvVMdqZKTYEoRYTCYvxk",
  "key28": "5jfFoEYfgc3kmzRpLnrECDkryBMTks5FECJvWAsPZswk2aF5TV6pGnxdVDtRrjiak1HM4Rn2JEktZcrXiVfTvWNQ",
  "key29": "3twzyqX9WTDyKeo12uK4351awMumdpdWGNrFpp8UtsYkewU5D5T4ovmuhogwQcZCc8bmT3cZGagbvHVWYKTAfRAS",
  "key30": "4be2Y2uqsDhREqbvqJd3NDqTHrgWeNftAMeUVXc9Lx7imNAWgHtH14CsG577GXZ6F7a797jL9XrYcwDEoK2XZvWH",
  "key31": "33qdD7b7Jj7pq38jkhZrQNMt3ispnKZmfSxYFUtUs19j5v9aTn5EZrWPbWitRLam1MpSnmxVcBxm15iuQ1QpJjR3",
  "key32": "3AY4FbSDQE2XJsTqkC2GaLgviCXim7brUjG2UDoryYW9YGn3FKHq3ooPrKct1Y6tseygudaGaqVJ9aHdLBd8tm8w",
  "key33": "4MyrbXCyDDpVtJM34C2TZ8KvYHv53YKsNJAp2wuQ3AYq4CCxCaboiMd4uBwxw3HwXmhF5EJC6a1g111NSK6fn5no",
  "key34": "3T4d8zHWsnGsiYsuXJsLYDYztmmzEBe1uMVJWrGDXMHqTP7BDeABPZP9U65ASvahydS383uArVxY4EFDA6muPqNk",
  "key35": "5AW9W2ZhsACfkguJvYji4sZHZkHnTmgLbGv3utxoQB2mUJNgvkkoB5sjjAzZavcjkmEkjr3xyGWeWLDqZN8YTxm8",
  "key36": "2SRNnoS2EwMScaCgZyfzEk1wg7QaBPBZjNobm8xfHdV528VK3c4f3d4W9RVH47MXxWQjsTMbp6JejZ9QM8Uugys",
  "key37": "DQMV2zuBEzPRk9DeuqUbP33ZzdfcmQC7LPzqUc28Bz7JGtFu9kRmih6PhLSnxqti8xXsXU6QCDzejMELR1wkWta",
  "key38": "3pgfQGVohdoZE2iEUxQAh13kHPXXLUUprFgsgXziW2ToxJXWMU1shm2d3zX3GbdbZT4gmqm4XpCjaSxzMLePZfzU",
  "key39": "4Bczo1WXBRriW6TcEUHqYAkgGnAEE5sQWT6J1eir9wpFFi8QxTVzwz5ZHJfB2omkjYrxx5FBnRd58oWXjr5P5CDz",
  "key40": "VaJKh1z5AGy9WXk9urYD61zbRBTuKRpsZT4VTAnGNXicfMWh5GdgH2SY6AEhWkk8Y3anno7rLWGvhUMvQTXZTV1",
  "key41": "mxNAp9gFQGKMkjxcM1Td1b2i52TVAAXZiJhT5fohVRgkUFrX2Uo1LLPchQv4zWJmtmDZZAfUf3F3CwWzP1NXkLM"
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
