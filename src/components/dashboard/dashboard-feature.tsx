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
    "5UW8rF57yVe7Hs4n8LmmtzBWafvRE1UbQv57pz3PitnZLYmQ3bi8XWiscNXLYkKNvBRRwzpw3mouN5ZyzyHLFFwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WTMfN5ULZK6ZD9FGUeNFhbu9RtFa8nnhZrxJhUwSBydr1it4sykXszFUvMkA4L62JbQNaDmyEVSeE836etDNCGX",
  "key1": "4KCDu1EJANBb1z75V8dc2AbrE67xbkeyMV5PAf7WP3F4r84dEMWtYw2ho4ewonbotXHzDPYcNHzqQt4hdXhiu2Tm",
  "key2": "31eRr3Q65dx9Dk7wtNN1cCxFa44VQJbn7yU1McZBSNs3gGSH1iDgwD2LmBVFc9qCT5gyq3hc45x3QqSwVU6VtsYU",
  "key3": "2Bjb2xJHjLfH2pdbAYSkF6JoKHc5yWUa1QAp9r547YMZKEhrL95ws3vzUDi8A7tmHYHTPmoSdzosGsag2v9Q7wU6",
  "key4": "62MqPN1Ut5TCh2Um7SmsH7FgPNfPnC9vq8ywsdJCKs1rFvy69JHNCwL4pFDaXDJCgGGXuFjHsQ71h2rkuBjGRGVa",
  "key5": "4pt5V9P78PnRGs2q4ANyScUCpHmipmpS9922woPD3YpqpUrV67UYm7KoGnxz2emWmFftyWDTbgDy1WwmfHzBHFJs",
  "key6": "3xmye4wmq4G8WvjPjnxuTrZC9uJHz45rTgqCGMaTa3STLdXg6Zg5c96PGtrcytTqkK7HQ1PAwk6nbzNZHdNLF9A2",
  "key7": "2XiW9AbPjSPeA3xLsKifzvjEn3y1d5F9AZJowVD3ZFvc9B1fqEJAe9FrBUCcUi7ZSNFn9Y8RXmyG5cSg9NWrVvT9",
  "key8": "5XfBR2DjDb7FykSL2Mwxp8oRF46dwngBRrs9sFrdH78CwJNCtfJxx17gbwPUKRFV1Wfeb1UadReQa5AVQvBqGXsy",
  "key9": "2E6hhSCKw9w4hKhyB7Ton5dp5xY9AZmRPMreiX7yv8RQrdz634zEYMHS3AKx2uPLmCpNUfwzp2dGuZ5wKETHZt14",
  "key10": "233Xc65UgNfpM5NRrXZSzv9yriqmFJNz3UAhbnuAULAKK3H6Ezr6eL4YALkjGfJxdrqzcPDQmcQjrMBNnMuBBm9B",
  "key11": "2snGbj35Ckt6r9Ar7dzrp32EP9KtHHZSA7mqCDyPDf4H62USRuwWJsy86djRrPkydUyJnBcNHUZRwgZdGde9zZJ",
  "key12": "wWeDRb3kU8JMANmPnBf9iSeNvFDvwGBtozTGd4D8sgCNB1V1jvJVX1XfxyBU6YoPZ16qvfCTGLxZkEzPk2oTUQ8",
  "key13": "5oWj4EWm8RST7aMNDxnVDzvR9G3o2Cp8NZM7fQtFhY2fYLFAzVE5T5JENadAbxZLmedD9ULfmQNSrUEpASo3mXXv",
  "key14": "YEy9jdiP4q8XXZx98MFF1CxcnmfCkCwL43z5QG19YMABN8xZJ9BBZ8P7FuH4TF3WqBa3YRRpTcJsghKEXVuPqge",
  "key15": "3y6aXCTL1ggDbXWrajpvKbVwMrbeedfDi1RJV8iqSdmXdvvJcvfwAoQ48dvrTr2T5qdBGqWwqUuKPMBi8dhGtUNx",
  "key16": "5XixLEm4zvaAgkdWD5b3iHQHcPhkfZ86Un1yGBhVb3vQcFnqdmoerPkrWgP5q1NpKykvDU86dFav3FkRm2Afaw3j",
  "key17": "3APsun3tY24sXrVLSY8D26o5LwFdE87r6weWBRhSWkvSCVGqgW89XC6U4nP997amjj1VFFxyoHb6TvPQp7z5q1Tc",
  "key18": "4kCYozMM4vA57sw9FBxKawtJ8yzvK7ZXkjs7AU2u3ZHhsZwXMRZUg73nuP3QVrvdpH16od9jwEebiN2QUjRG35oW",
  "key19": "3UMiJ1X9rWZemUmV9mPxLb3wEuBMnuFV8RGUcUmb9SGBLQdspt3kb69nyaNMNYy1nK8bc6UAhYxfscUvTMMV2MRB",
  "key20": "4ZkZ8bHUdAA64r3Qg7LoHr3BszTQguTY2yiKd4Uo1WCAMegLqvu8SwF8taXsaPRx3kqRS7pWPHxoTE8nAbYJBQfd",
  "key21": "1M51orYaGTseswoi6KL3FQYCz6qRn4fkUWzw93C4tAAQS1Usd9RFH5u7UD3yugheA51wtYUKiFpSuwevUXkvbic",
  "key22": "MC9fM1fpqErp6GBiXSeq1rJag25esH4623oHuaCfWSWr4wDkr5AhidyEMPNg8mCjNvMtydCkSc6FZ3WU5vZpqrc",
  "key23": "4ifLp1yGsCbJbZyVAz1n1XxVmJ3dgwYzYfXiXtchvg9S4QZcypiTbv3EQ3C9iTh3Q5NdFnSm839PNHttngBzUuFq",
  "key24": "B9g9e2RUFCFYxXBvej5BasdriL2YzPxRpPjboPuSTYoi1mU31VKregBK2hSpfH3wWkA7Ak8L1FyzL37RWcpsTjY",
  "key25": "5nr28CzAcxbezC5pwCVpgR9SiMqSdCayz2Jc9VMdx2hWhtr7xpuZz2WrCZGGXS2foNt9TAzDYegEZGiHDz422WeE",
  "key26": "4vTbe7UhmbbsTyd89znFGGxwvuXtx4zhGt7iVcScHnuAbv9Dbe6GkibHnmLawpDSpADLYp57dNZmE14KmvYptP6g",
  "key27": "4LpUJMtqnr21t3o3mBnsMEAGm6ysprTwj4teF2xUYTMMKWg3xrEN3ikE6imA3vxbLQUwDpniTFgkJiWAxZ9e4HHW",
  "key28": "3qhUgA9iWTWyGeM7UqnttS61YBzEJRKN5Vp9JpaAvC6Vk3ZgmxqbdKxA7faRCLTDb7TuGUzxG9XEWarqUETYJ9kc",
  "key29": "3Ey7rbB1dNbamEpJZdqEyixw1ezpZ4AnRzUqtajKWxvjA7GLX5u8SU7M51e279ANCR6AFwv1CVJnHsoFWcencnB1",
  "key30": "33QAKbitkE43B9PAsQJBSdaNid1HqaiaNFUZYTEYtmMQrywaU66kF5EvRGy3dbo7pvm5Npx3xzRV9jpzqnTwx7cx",
  "key31": "5uBf6yzPhzMRjSEkHpE82bJCLb3ZAYsBaqVSgY6GXXJETNTQTCoXqWoL4G1eR8pBWWaKmBCCEkyxJ8KNz6ACauPj",
  "key32": "3UyMVeRg2V8UcQdWdfJR7DeH9nxg1w15W2pCJshHp21cze1GjoY6ZiHnKuXwkC2pVYYHN5Cm8SGqkMXZcamxsRRv",
  "key33": "snZq1cJoTcLRrz6C9s69Vp8inGd3m7PG2CTVJ8aPkLmGKTcXphMWjntfSck5JndJgA6ru6vyqaMcozJvo47fckj",
  "key34": "273jphCV2PhCzPy5W7ja3n4LKmMj5YfqL6irUav642GVRDtLk4CYhpWZUd82G4X9shEAAuiDGnjjV3yREwV7qehC",
  "key35": "27YMbudGzf5ucmx1QNbGYFvc3t5dEEyynF5ehEEvUP8TRLdU8XCKsrzzvh1QjNe3iQ7nH3BpsAsX1iqCqD3oN1W6",
  "key36": "32wW286iR3SF3gjMyrWxPqYXiWEwiBD7SCNHWZ5Gok1CGUKrHkdyUyLZj1PQm22yv3MqgWKAbZYBUoNVUCiq9KH5",
  "key37": "3nwPU3AjBXvwXzjqExaWdjU7XwomiHKrTW8WPWzAqLTp88an5emmJwZtxngkteogzSQFiDfxyMEKaqn23qphMXWL",
  "key38": "4wPkJ2xG4jr2YJofA7moPT8zCKPWbXhD6mhK9C9EFAa5Fb355tTeUMy9AfUvdNVRCjyYzXw5WTN6mqQ62QBSVmEW",
  "key39": "3s2iC1okLh9UCbHfsbzpJcqrWthjah7utf54gN4Y7EtMeRrESJFCbDf14mCfXih4XkjAhKLJqhfRk8AKrjNHv5E1",
  "key40": "62oFWPrPsHt6nNXKx9L6WbY7nB1CqeaYE7CbZgauGBv6XwsRHSk8NUTyDeR2qT3zwvbxkR5LZqmrdKKABu5HPwQb"
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
