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
    "292GvoW4F1cDYugdPzke6eZ44sow11dMuVSrKJWAKfV5nbGoojg4QWUb7XxbJGV68haM5k7FiL2xkhjBbwCLt7YL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TZAYEqHwktYu9vqxyEuaMYFKEqJkPauVvueNsm3c9dQSoygQcZngnPSmSbxZYdjhZE4Zidat5bVHQLjkrThoaKV",
  "key1": "3wmsWWnAfSJxEZoXc3FCaxBZ7Yx1gTXrF4A6tPvkmwaW3ZRcSJ1o5FuEQ681WQEHwGtn3aBcEcjQ8nmpEXWZogyF",
  "key2": "5zBcnyVKwog4kj9kgkZccYg2QFDKFFiKh5iYTCVPqMoZ43tTHqGgrmA4qPHbdi4HJec1ApT8bUyqFAgKuZq7jKmb",
  "key3": "2J3tkFDC7ysfpVWhc9NNaXQih14gD8kF6wRw1WaoAWHGv6BVdVW3otrJ12voA455qKm5EN659n466hjaFAsgbKU9",
  "key4": "2X6fcNojr6DNs4mypCmHLAw1jh3dTcyXUcwEXd5yUQ1dT3e7Hh8sEfWFwPrvvfVA64KRbQ4f8kaC7kRySNd6NUna",
  "key5": "2XRU4gaJCYFGRugcS5bxbzizdvv9d8Rkj3FzY1spgcB28xYdinbk5vPErwphGn3b7JLhAx8MR7wRT6AcC9bQokyM",
  "key6": "mYc6okVpZKhG5VG5bNbxB4aJn2QY329DYHbLD8Q1384kHDyjy1NmsRFvR8XcsHC8W9qSm2hzjHdmP66T4JE7Nqa",
  "key7": "5ZM2ftJXmMo8hQHq7bths4Te7fYui4KnL2Ew6Wrhp2QVeVroRJYVP8ZTmwuxGNCzvCYCfSr5fnANVBubj8FN8uAz",
  "key8": "61up8P3oS5DNNQQK7ScN4VXxyAAPS3KjjF1Q1k59q2kAJYfbFNbitHGuSn8grNA7pKx3Wp8peKWJ51BSCQEppgRZ",
  "key9": "2zM2reRPRaVe4jjsqen1yQUncSEGLHbCut5gy7MJnUMAwGNqq8E3Y6p5RS6HJvu8sVawtn7797cZLEKYm1Td5BGn",
  "key10": "5UAbygQCxUsU8xykKZRXPYj5t79AF1ZMqStq8TwHL3Y2qeadC1RNjJRWmeckPYmEreBjq2R5EXrBxw4v9bTbfHkr",
  "key11": "37EVK56qbPAzfiRo9k1Y5S1dtmcEj9AW9KHmKJwGmRap9MQ8Gp75zcVqcHWYo6EWGjUxEujfr7YRBFbTk2PMuyfb",
  "key12": "4uy87gPxauutKdZ19Z5XsQCWTRwqx41FvQKSDGv2vPJKuNJu6TBieKjA7khksaPFY7dw9ms1kPJXGnGfJTt3zwS3",
  "key13": "41svhcar84vfnyobX78wbkRbDXV3Yd6zc61ksa1wH8YH4cPBjLSRBsrJM5UQ6zPjCQV8y1DzuTkhwcq4HKy6EdJ6",
  "key14": "2GpiBEepQ8zteYex7dgBHbELDeLbrEmve2V3oVsP7T2RHmjm8k2J13AEw76j6vQ3ogsawuzsi4QmQbmGNj9wMrdz",
  "key15": "2Qai1oDXQz7eEzFVBusZ9wuZ7TEDeWTu9SfSkTtG1YzCzkHmRKUpYT4iM7nDWSgSR5QCaB8BqKA8rTMobU38kmCp",
  "key16": "5dMHyKS48tb2KLhy5XL8MjYcfDSm8sFeXAesZTCLq9R2KNzraNqzvyL3HnPCum2uBCDHBNLRigqkgAC35GjFQkVX",
  "key17": "4h2BMf4FR2S1YUEQBxwdvjyVkiRZxi1iXtKUXRGoQ7fNpsrsC5AyiEhBoRNMVoE4r7Tqtx5msJcB59difsmfKBrV",
  "key18": "3QJGXqEtM5eTj4dswrVU3D2S9rJsyEfHtpY61sfXGR5K3TtJF8KES4boLWq2vEH1ucUQVZA7PNAszmxzuW5ERdqU",
  "key19": "2LrnbGqrRTSKFsfLKzFQVUDoB5dEHxYru781Mw3APs5ziAgHbvxTZV9KSX5W9DZihsw83bF6d79HRhrALdwYQpb",
  "key20": "25NVUnVnV7i7kBEe5H7aQuW43WbwsxN1b9NhKUf61aeiX3sLhu29RaZ8B88Gx5u7mmxwBWAtpndsDSBc8GxVwhMZ",
  "key21": "4156sHVpHtfC7fFaTCqxWZHqcQPRqCVwhURaaLaARShsyYW2KnR3c3kL5fV67fCXEkRTXbqFVFQFEQZFuqy3AFgS",
  "key22": "AoCTez2b2HSURMYcgz8q9WcJUVxocg3EKBPcatEjN38WB93w1EtDn3RWNCVdekpEwi9J4qMk8EuSEED4A6dH1Nd",
  "key23": "4qdAP9S2wH6FWmT3dgAxDC1E4LGdyp7B97AKt9cQvj3NFtgaAQERj6mxqAsDfHW6GLbPJbnTSU32besYEW8dSHhn",
  "key24": "37HzWGnZmJB3vWNYM4yfd7QqLSos39K33vgKXAYXftGBZCTKuBb7ExTekTrpd5sQJ3iMeEgJVvq5hffVNtwQk72Q",
  "key25": "4fUS69J4G4f3TMkYJFkn5W2Cc9akYpECKDAQEp48cwWedopRZ8pM43FdEjw75RwfV7SDUQi133YdsmVHEnQVCRv2",
  "key26": "5Q71wev7LZjPKd1v24kDJrNov97o5HQKCpawzztp3WZkGZzF16TYRwXXqGZDkug8BmH3db5w5ysuAkJ1HQQi6Ppv",
  "key27": "5hR2mKgbXqSpa6VaY8dHH79Y8qYJxFBJigRvGEcBbZi2YBsSAro3u9MA4KGpWJs6wsjHtBCQaG34PxTFTCZ5s655",
  "key28": "4EtDWy9GhRw6hoYyeRRRtrDtDXfBi7PWPx7infX9GLjj2X6JFRxHGEmY8T9nr3NLEuW4ZTPjWQhT4Lr9bvpks7Gz",
  "key29": "5fs7Jy6wTNTpNNZ997sWLS6Kb9aCAAWU32M4cBxLZPKZk2CbRm6kRP6KMkSptrKceyiEYhrcLZBRNsoAMdZasvUz",
  "key30": "2JGubmYhKb2mXVzAwN6o6ma2efNmLqhzXBvFs7yuYFCnzJBuEaJmNWDdtXP9GK2hhP1EgFZ87Dwtfe3ny2Pxapc6",
  "key31": "2uh6uskeMLdDKUFUGJQHSALkPRMw9hmvUy9pTkNdmypEUnCkqpiR8wuF524S9t35kiCzsAsnZymfc4c5589YzABG",
  "key32": "22pUMzJvfpjxR5ZwDPSw4yqcAZaiJHNHbryqHKN2GP1JZj3pFFnw1rYtrL1kMjQjwmHseJmthaXuuwMrunQy6Hsg",
  "key33": "5bqHsTxFYEMfcUsvoL2mBcoWS7tVSHvT5bTxU4tS1u5qsnEGuopNmabRKvMUqsuzrtdM3XpJTw1utRAkcFJeALD5",
  "key34": "GnqSfgPrXqz653avJQCdfHc2ELzzAg4pLgNmv9HdPmgzabagX2fmvzVseyWxpPujebXiNHBLvnRsdByCtdTDKUo",
  "key35": "3ZndSCev5erkbXXNqqtxnh2Mqy4ddbawbaPUuZYkT64fSsYyrxDwjPHU66uc99DTKRCmYLvVMXWhLoXvyVusB6pZ",
  "key36": "5LigYs31bbsGrejCmvUCEbNexviyLjbhBoMf3jXud5MZNecemjjy3WPF4TVebXL3LGYNq7Q5YRmbbktn7xc2JMQk",
  "key37": "4jRqyDT4TKoFLFq7aJ91yY93zLzQFDWZXknLnWYu8yZbRbkiZLK7GZYT3ih8YG3UfFQFDErzKwxc6tuCfpGTfJb4",
  "key38": "46RFghkP1JjoBxSPoE41zAnRxTzwcQnLCZYUrDPeHtigPG2yNAn5VUtSgrdHopTaYYtVFAsfoVC2w8txmUNmEGQb",
  "key39": "3kxRJ8C8Zm719hqVFxDQzQ7zJ1VVusGJ2AKVp992B5MVtneCSR2wog7NwEFj2iDUjde5vkbg4FC5CnaWwfYorqaa"
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
