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
    "3Yn7QGpSeihTwEctdWyQxBAURCZad19emcmCVZKZQD1CAp2gGSe8yhdWTdw83ZqyB3vVrQqoDpfXaw5TQ5T3fJKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FJHTn5v1vKdUKCmibquWbanfJfizspPgnfnncqWGyGCmc5oY9KMshs1qyfLKVNzFFJwjwnyLHEjyEt9Pi8fdSuH",
  "key1": "4LTS83e6VJQjMnnSRu4Y5xDXQziPLFhz3GNB9ykrgpY13XDWFP8e9DoJqC4yco1Q7ygoj6cVg5buZeLxsVuAuQ2T",
  "key2": "2mS4xs8fSNxvXbNsJBp5oQ65fHdPnjY5mvVmvqUHViwkwEuQodvrjDyQAfoePsLVyu2GzGZsGGeq1dLikSbzhmXQ",
  "key3": "sLo2sZ1ZtawA8nY2qgMdWM43gek5Xg68zw23DELQcppCqnD9BgjJzbXXrwoNjwJpCH4KoCBpx94h4ynwnmudsUv",
  "key4": "633JpLD2ybPYpfKeSVyjFHPSdTY7GdeTVdMPBDDVeU1csA6nck9E6tc9qHU4Mnm6iT1Hq8ZtCA37jXvhkUjpTPBf",
  "key5": "3zTgQpcq8DzsDQXHwUiRRk4bTnqfJ7J5vyezyDJ4G7WCQ6pm1N2WZaCMNYMi8cociZAHZuSVZr8qgek6KWvX9Zi",
  "key6": "5P5mMnhoCYTe56hq9FYx9zFFBcYrVmRNMDFqeRyjQHiiRptPjX9nNur3VfiDa8AQrTHvzkR4JvRSxujZn4wxdLeB",
  "key7": "4bkjQ7UaRVHVjBzNdoFvhdP7SsFp5pKT2CJ2LW3Je57pA558kXAkbS97E5aad9u4TPFxgHpcPhPWf8wJzWzq1kTq",
  "key8": "5Uu9cqEqukr6xkxTukWnLKmxU2ajmeFuDYxFC3XHUCJPidbBDxAL7phJ41jrD9KfNgwaD4Fxp4Jo6sXGhnZvv7vr",
  "key9": "3tTJVjP695JgdDa9BVPwN4wGbEJ2fVTcKKdex3n1B83a2gxssibjceRDwVRqDESkwgz7RefGy25PAmKKUFkUao3A",
  "key10": "xaFkHMnGooMkvFyxQFz89HKRnFqT7QBTj3hWLCjBzdJZCZ61ibn9N8y6tLmSJYfMZVim1qub8hRraLGEVreJ6Ds",
  "key11": "67p8xAWnd3Zgy3r3G9uc1h87BrReqq2WeJrtJZxbTBPs7DeqCVoA49ex5bUS4ag1WL32RMr5rXkgsm9AsuKBh1Tn",
  "key12": "5oTVzYBce4R3QHDFwZnMUeWzNRjkHJvosziTKBNbubEY1eUqxBNwqwo4AHRDUqGv6JMMmwzPqX97x942irLWQopo",
  "key13": "2BNYYFmfxa4noQ1m5Nt9KbuYhWvB3kPUgt9MN6aQGeaXfRFjeGe8cS4QUXGgDtwEa9FxmSCEc6h83oKbomZ9L8aA",
  "key14": "4bqLCG52ZW94HxGH1zqyTEty5j9c6vcLcrKpK8UQL1NhfHrZctJkcfYpHKcbusE4abrVYezCSWoFU9D4N2RzVvZq",
  "key15": "2Ep9nVXv3SxWqkvxJhZiVCDjmtnRQ1QeTkgPhnwU1WrJexKjjtRVMRh6yqVVKWuiTNdNTRjwoRLDJq8zBw8ZCZXR",
  "key16": "35RYEstHMpjyERN7N2mrtYTTxKqNNxm96e6uTyGVhd8fZnbd3i69WkjNXfda3krhgA7p7UA6hDzxVJ7z2A4eEVFL",
  "key17": "2yziWCRKxuaqowQUdqeLZ8oQtntWJyXMADi1kTDCAkmHvWWmpFzxXfsnhKh4NGtzU2ZEtQ4uemTgwi5kbNEVXRMD",
  "key18": "3tEQP3xow7Ps4Z7vKfjDk3ugJDZJognnWK1xQgC1GghECNvCC4GVv3NZV83PJLk4HwL7rRrG76LwUQ61zMVFira7",
  "key19": "34jwhTUxBWVUYBkoNDQMkddEc9KVMA6pKLGxhpznxpobJo9N8TtRk8YXGjbReYt5V61EHB7QC88S26LLxy7GCyFy",
  "key20": "2KxinBFypwAApmMdCGM6bpGHyb8vcKTAgJVWVesbZeBZFy5CrSzKpUHhadi7jPggK5E67791uFVNN6vijgXVNux7",
  "key21": "5JaSSD9PvhQLLWU5nPbDfdjE2ohrReP68DnAtjk3jSn1siWVh9HqD9SFZ2dPuqTDD8EYunqw1UzyjofLba6CLdo6",
  "key22": "2ZLD2vj9oJbKVehLDeMnXeUbav8KawsErgLmcwYsemamX8Ga3Q9pyDwyu7Rn8LXtQd7JnJSWeAx1pNPBvzQMkcpQ",
  "key23": "2N92xw1h3wE3FFWgkov8obsLU4Bo4gsfJyeVYgsUVSVERkgh9EpLBHtkWajqPx8QFr4rV7mmDS6djq8RvwcAU8vp",
  "key24": "5vrvCYbgAg8zoEebFR9CxvXtwBYmw1uYc9sdXEUNYZNGQwLexJxCtfewthA59cmKsDsPZz6ApgBrG7v1XCrwiAJy",
  "key25": "5fAzTGFNFszxPdqGZbPsuSYfYr1d32FdL36w4ZkcqL5hg1poiLmuxdmjK1J42Z9gXSnc6yMnQE6C9Aecriyn3BQw",
  "key26": "5J2uSz2xsEYWtZPgpsfwDb4jwvcfKopgBNZrRxchbRhgox6qAyKQYLcH96tFohnP3GYaCZVdiKuqdnCoforJA1ci",
  "key27": "2CvbbygPSah8LjWyZCYFpmyo4iaG2n3iBooPBoHEHa88fZguRviQK6sgPvKCuQwZqCs9AFHc5zQEDqCTtNtmsDo6",
  "key28": "2ca49a5qWnBn8NYG6MHCcsEUamfnYz15txvPVDhdRCKkWcuDauqMzStmnCdCRohwG5MsVzT2ofwyHZYbjDxR4pkU",
  "key29": "3wTQ9MQNL6uxXcYqgPf77wmLqufeaCu72AgQUNkTiZxZtqGcnV7gVmRRrzsjH5tAC2UmEWhkE9Q1xQKChc4GWcuP",
  "key30": "5GkG6vzVCwWB6CQo4U631pEdCFv6LK55KFeSKWBfgLxbuUpBePnuFaw33CAhFharnkPy9paWGtyLVnG1onQVrKH6",
  "key31": "96arrNwPUzex4NeBGTzQEnHS2381sYXFSV7TVa9SAukCKHCK8xrtmQE4YifiKeYGh8UM85xTbRPfcyYSkd7AEdr",
  "key32": "63v6ezSimDFYH8jWwX2TyVPVsie14B9L711trtWQZMrQFA7C2si8J9LnuyFmGF3x8j3GpX5mC728fKrBHqa9bAdj",
  "key33": "3R31zQstQngki7mgwpf3Q2qDD4FBxTroLUebW2PQG23KLUMB3aFGMYWTcGgixwh2qn7PKC4SeQebrcbpf4GScaLr",
  "key34": "5P7hAWeCXgQZP4GFsxQzwYNg2jF9mQh9GhuT1vaK75F1t4LBfU6Zfwa1tfUfab6mHh3pUU8aUJ7bGVHtGtUeR5qE",
  "key35": "3rxv7twdzmc3sVn3NGAGtJKHJvYRqDwrWJ68MyxQuTFPsSmGDV6rwKbnAhAxsj4cGgVqf87jZVvSmMUKhyDXpKFf",
  "key36": "4rEMday2BdsiRuw33AzD9xpvBr8EKSkk5bPPAip3AZ6rfaDW8hKX4nz5c8qSNqgsc3H4pLUx9qX7YvWG2pr5d3eD",
  "key37": "2wLexc3VR5xTUt3HzmjCKPFQcVMArPpLU9bsRuuGzEaEGpE9WwLW5ftmTXTHV2P9uQNwMJxZrpsL8EHmVx7LUwVm"
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
