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
    "434nFWMWCz1xsheFvDYZd2NR6hx9Bung7hhBx17PWNR52kWvzrS8vwEL4YdihyePRZuGUJuez217sBjGSVvL623P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUbbuGnPQRmeaJfcR246hoAmRPTbnM995QpuGhR3FeQ2yuLSjuRvDzWSUxx9GhqRq5Kvq37f4DHC7cvN7pRhZMP",
  "key1": "5W484CYxDGDiZ3F4ftird4SjUopiDcqkEb9wR5waQeBTtoV57W9b9dFYyWtSPkNTuHTwHD6J5eYCwpbsbZFfEQHw",
  "key2": "3afni3pBrYJSSZBqiHnPDkAjsK9sxa8ZtvausyfUTKEdhbg2VEVu2gt1d5D8oqMZCE9Fpmt9cScUtJYKJHo8uCyv",
  "key3": "2FxNju59VDjFAkRVGpvv5VJsduzKzkv646abzAqHQiU82nwshoryEAYLURrRFu2qnnMcx4cCxiTbSv9ViH5HKYzz",
  "key4": "4BrF3ET5scdzd6moaTuQLe5fwG8At5hbWD78bZiBW5b4q8z2pHMKAj3hdjhfStTHosxHhmfNFTvQpvWMNik78dhV",
  "key5": "2znSK9kxy1hNRmGpp7VRumS8NKFRWPk7NRaQbaZdUgLxJRFnY79tQQNLdC4Dc7FeFq1m9PSeV7K3dH5ZLL3xQbEi",
  "key6": "4ksbWh8fvEazbnbyn4mhccCmkw9cqRZ8eKkJm9BXrNN6BqwpUW7EoyArTFm6iFnWzPk869vcJ2vEUcCWayp3q6hW",
  "key7": "46nZocuXBC7vdwreDt27sN54yN8jVyS4kWYbemLzLW45eRvpHSmRHM4yW8Y7Yn1YpkADG7fgU3g3SwHDjSefVd99",
  "key8": "3d4dpBBC1AuGsu9yyA3CvtxAZkRUgEe6ecKJ8WEqavzasu7ymDJgZgKHToKxiraDnTP2Mbi51VGq6Ty3gtpyNZSK",
  "key9": "2gyGTRK1LzCznGQVhcoTawSfoMPJkafBdFg4wcWnYySD9ncwp654avSHowJCxfgVPVRcec4ARtNtXGMuJR7p9LkA",
  "key10": "46BXwLxSz7byMcAuNpRfzaZkEX5nXZbkQnrnXPNXgMKVJBBsjqMNTGKV6ESXgQZL2fuykN3eMyELpQqPmvgEUrPy",
  "key11": "5NTh6JUZaCvwV2PHkTLyCRo2CayEyzYE32HdqPrpZyoeMwjwLJdQB9jirYFguo83qoTRMsvZNjMHkhM6hkXGNWgK",
  "key12": "3kLqE9TDaRcS2bp6ZYmESNY259TSfr16YczzYt9QtLqvStm1mW6ybcRjwceD3V1zRzJ2npXDpwqLRSiXLbV4ax5U",
  "key13": "jwVvJbeLGAVFTLEfUewku3kWFTb85ikUJ3BjLqKZzw9TzPLwqrCWkRuDJvTACEFQCbxb8QmBx9j8Z8HEKcvJtnN",
  "key14": "4Qai1FyGnC7PyoW1kgL4xNfY1jynsx6eYvVCWpNHu73mpzqK4oYKN5koE7cFNj6qGED6tnVkFeqKTBeuGL6fWQUt",
  "key15": "4d5R64EakNAzYvESiMCJ4BdwsGKrvtg4QPX3YPitqfdd4eZqpTHdQ8bktTXuuZcRTMygoBPhQ4ND3TLfATNWAWiS",
  "key16": "3jfTNTZ48EQQk64CKvm8mwPveTUU3AXB9B51C4bQTncHgRW2rxXMFKVZNwQzrXuEQVPtz7Z9ugcUbnLPiovauaFP",
  "key17": "56MNiWAKhMaTBZrgZaoWyz8dWvA32D9DztPdNqBfxx5Q2ooz67cp77yAKM2umU9twDbLiWjdwEuP9NEyNUfLueiR",
  "key18": "4EXAWYyuZwUMSGVEEDbjhvbb6PHfGhczHTnFfMk6nGTtNyg633uGJaE6a7dY7P2YdyMU4AbNGujxEXHdAg6Tfdbo",
  "key19": "5AezbAonbEePGVqPH8794mGP6LpaEDRt2rtUWrbqsiBcZDppo4zNhXPvr7kouFQNMfce2PfruxJbxdRu9gMF13oR",
  "key20": "2EAy4nQ3ng5xPQ8LZKQWAdEQyBucp8Nw5wJqvjpdnYNaNSmwc2FzJ85NdnFG79CkBJfkFVqS5vj85GjojqkdQVQH",
  "key21": "43HDwqczd7VKjMuvgddL8RFVSXmEt2gN4rE9MK8Z1AEZsvHNN17uvKE37t6rnZDiHgGJhgaJkewYvAXRro94KHEj",
  "key22": "5PTz1W7Bi3Mj5aEnbEix66HvrXtCNKyDtrjeTFHJMoXpFJo31SkbP3fQ9VWtztXoF9s97VEHN9syx5vAHaLjMEcB",
  "key23": "5Qy987vvv8GCfWhGsKxPMy7nRyPUYho7BgKXoJHNFVbUXDij8xP13g6JNqYNPB1yqdYqx966xEeY4A4ZK6tPVfDK",
  "key24": "x9hZnEmJswqMoyeThcb13B5hFV3sw2smNnsJsivCPDpyXEwMSQ4fdGZwqzbjE6GUw1DKeENTPWXpbmPud3TtvAS",
  "key25": "63QU9XascvKmWHcXDJH31de8PYVq3HyR7WztYUUMfeagFkTsbdNerkkdRzp3FMcfegjmiqAq5T3hfHjaZ8WeREYn",
  "key26": "379b8DHGUWAD9pswqgtvB9w3ULYw2bPBkzEZ3S83Fm7EvMPKr8doe31f5crL6NKHp2UubdeUbsyca5nYcoN7sHJL",
  "key27": "3hpEQ6BLymiC7QCvXgCHpYYcxfwps8PDdktyygtPM31mSQkAMXo7RVpGFo7gTFzWHAoS1YVwpk4E7ACBtaSKRjFs",
  "key28": "5WoZv6J3bZeX3fx4xqbZYRiZhKdHbStZ2BGyfEoftA25Wqn28kDr41Z4Bv2VV8QhTTcKqSFqTUv4Zo5gNF6BqoDi",
  "key29": "29XBwggVx6iv29p4eikSURZGAax968c7mK3cFrF6m13gk6bQerFbSvLoQtcirAMPrF1Wjyko56YQviVqvXPyV7bv",
  "key30": "58M7qxAS7h2x2tDPF8ZAwwoU9HFUU2YfqQpk4k6ZJ6ZFbacJ8LfmHXY5RNSokeRSypTEScWwMFtZEhoPZSFxq6dm",
  "key31": "33cXPnVZNy5PUZZ5D9Rbrajwzgbf2Fma9jBBFtq6akQtSzBvMrWgFabB61duj9nQBpR4J8VrAphG9FDeJ4dRqaF6",
  "key32": "2bwpyKpCEdqd6Dg3D241tQUXciyfrp3etVCwWvr3q4RQb3iiAzLVJEySx2TrhKchqFafA78qbKqwgnVKACoK1VEW",
  "key33": "4XDAmtBBRLui6zmy1T63FF1BMHwJwhJzK4UnP2P8wmXHGQRrTf7DSrnQbuEVoteWDySvVzRz2tyTRGJ4PG7FGFBz",
  "key34": "5Wv29vcEP4XELeUJDsMYVwddcv8GztUZercqtxaSCo3nfosVpfuS1mKXZE6sLKmoaR6GGdXcux415BqutBsMPF5F",
  "key35": "2kSH7exP5bEozLCw1GyXZ8fHDQiN2nDVSr6b59BrV2ipigvni9DC1NBKDrEfgt8emd6D8aqAb7PGF9X18RhT9xTJ",
  "key36": "2LnXzBytvqysYYUqUoq4nm1WcrsjQSnBERZCLhr8Zbv5SGqCuEC1EYxvkUoTcV1qHNJ3XqQWv73xpkwH6V1NQLy1",
  "key37": "4sGYTzV8q74XRdRzcHKyiaPiDZ8qUsADVbLm1SXT7f3gfpcpopMYxhVggjVb2sRQrVUwdAi4wL1x7DyjFKD2BPwu",
  "key38": "21dcU84T4eL3EVgSip9zUEaNaYC8fpEdbC2kb4YLVP5sFnuLv363ihBbMKzubJZCgYAtF66p6UMsKvqwZ6CWhTxh",
  "key39": "2UCJW5Efz2k5rwpRZoEmPLxhEssXNzyoVaro9McdyRG6V57SHEMB1cGwMBSCrv11YVqwqLFZNH9nUYER4sp25pP5",
  "key40": "65yB9rFBvoRqVJGYc61Nqynu8pUFFQZYPEYLrXL4VWp2Wq3mLuby6V5FaTFLLrwBd2pYHtKYw4LyHU7xTXFvK4By",
  "key41": "THdD1acQfVVqhN9S51LHfMYzR4zWM7z91oKVNrrKjzBRiq6JRNTJmYUKW37EfBUPwn4iXZdt5MMq672LTe8qTf7"
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
