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
    "ns5BWwug1j3TuLHsCGhGYBg2maDNW6LvvRF7X6VtP2H2kUWx1nqdApczjG6jntbkZG8Eog8Z9wNsunYZ6YtiiWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NPomuaFy5UJQiUwtKsvwM5uV5yPre1K1g9t1cqAWf65UVdoPsoLQshPy11cdCdycFAjnerfecJAWeTWuFbnR48x",
  "key1": "3WZxCUBQZdaZ7NyaUU5AuoZ1c3TN6LU815jQknUxyo6jeBN2FvYbLKXPeGp2aNwHhESDNhbBh59kMoHiCdXhgcgX",
  "key2": "3ygnW5uGGPrnCn6jYaqBBy9BJbRAcSHsv9FVPnt7BJVeyUApMWXqWJ1K8G5rFUXm88yhqVPKcz2AQEuzVsAzgREd",
  "key3": "27Nfp1MgdAMRHNePiRnDM56makHyXANZGrqvJiMLQheMp7s8gPY9Hd46vSrA1Cq9vfGwuKwz21gGahsD7duq3eFx",
  "key4": "uHrixpfjbnEDWRLi9vkEC5GDeNEPABKpSAGUHBQckJALAXR2wMMeqQuaC5rCwTvuBZkzXETRMXMuS2LspSxsLo4",
  "key5": "3N2NoxYAKTM6jjjJ1HsMyL7d2K1NGLbwmcA2eYU3vGiWWgrEhB78o2F1eE9v2k1scezE7Nzs4EVoZQEKWJ2x2MJ5",
  "key6": "2cqjpcUYiwLVvVAgCyS6vyki4VVoWpHrXqq1oHsSRqcwgdgFCsSpeXkbUEtdgBk6u9zdVwwB7uZen7Tgzuersv8R",
  "key7": "4cYUNc25EHcDVPCySpYw8Y8apVw25RgJRzyBsx4LuNpnD57qGVrUUJ31HvSdFRqwQiyfVyEip8Eayiw2Yk4yYsgb",
  "key8": "MJ7reUZ6yqQRd4t2VQCEfTxgffLqxxH4CZuVEjAUezBKbH5pcuWpb326zjEU8znmCuBDEy6MSYn7KZSgfQthzAC",
  "key9": "61B3TZm7MUfjvQWKWzQJncGP59yUwrGvYr54S3PjQcDmb5H7XqBQRNg4Sp42wi1KRSPTrQKAgY76L6CvaR1HyufT",
  "key10": "MWRZjgqqpppwFURSsPgMFuLLU31bmCjaNRhu72yxZwM8DF2RgWMju35k4qwVtix5LgJsZrAT6wQgMyXT5TzkTxF",
  "key11": "dPWPc9qJPQZF3C39Uw2HbMQfA85qXHw9HbbpiV5sjmHMR62rXW8XuUdU7BwVbwixrT7As3H2EkeJaU9HT4zPTUZ",
  "key12": "Vhi3c85DaamVGorDpFsgmH4DxACKzRPkhpC62tKd9irAEFdJT4Z83YjM4km4nWPo9WthSXdhakCnKrK3vUXPUcL",
  "key13": "2FaHzNaME9NXpaRJDRFM24A1MHrV2amQuk2LXiYNjA9eAh4AT1JwtdQfhqxC2Fv4jf57HZEp4Lyxem6Zk3GAco6C",
  "key14": "2jmfeSyesVqwKFjWhGgW8bRYrAsxuPyzsE4vw1S8fKd4QsoYk7XNC4urfnnSNTAdXrQi2uSJwfxvYi94UN2vtzs4",
  "key15": "4ACNpGnMtyxy8P954CXGGwu4mStNYvUQW2818JD2jJ5QKfKWMQbFTrTSVnQpG3DDLFXf4hZhWuHftHMSmyCEw3qU",
  "key16": "122udRm8sZJQmVSbaf51zWs1Q9CUhoHNxRxnVkG1kGs95YqsyHs5wKwwS6qydbw9hPjzVqxx1af7YZifESVB76i8",
  "key17": "2Dz1KnM37nyhkoeJLrMfy8aJU3r2AQT2Lv38upNQW67eJcnEyzsBZQkSceg9gLBKD7AC2DmRV2kkqosG8KkZxUa1",
  "key18": "AW3xBKAdM16Mfur3JSK8i2YjaF3bFbH4ph1tEo9ogo9fcTLoRCzm5AS2yZSEH33msAZk6m8kg8yirNJGLxPcQXX",
  "key19": "2w5TjGAxRhJwDDUei5XmNfSfSSjX8kxdDd54GNKVYhd56Ebh2uVpvzYqJRxTtRAQ5oTRbCjM4AtCtoL9rCqNcnyQ",
  "key20": "2aFig5LdDEVB6Y36W57iG1fAzN1rpygbUvKj1YfZSGgTheWL1wsdPfDs97oTBJyNx6DMsB1kHAeyBSsRmbCJpojv",
  "key21": "2TSmJpiagdTCKcybZbfi8pDYXi4LGERkSaD2hNJTAqdWKMrYZZ87r3ER56EXHdTHsJsiECGNd9sQDFYk6L7Q2RDY",
  "key22": "38GW5EFiSMLVFYof5R2c3adKWbF3Fauwvh8sX4SgJmKYhNd3Htui41Bfj5ZoJrwFHyjMbf4vazT8FQTZm5NiEW2n",
  "key23": "46FaDYkoyusSK3n38pXawq46LKQoWKMm5eLjakyNFie1uMDEt6aQZ8nf2VekvQFivctxWa8e9ZeN65MS9iuJdQ8Z",
  "key24": "eB6iPJNXaxHxeHWQKYn1QDAm8cJjvgXgYfbcZvfrVrwLYWkFwVrb7RAvfBWitjuXKACuS2TgtdxVVYwAtK3xbgq",
  "key25": "3YymUeaHgqvu42GMUFN4SpV7yT1XwTk3SDJgBr4M4tLp4kyPiUMag82iWGy67NTkpyAfsNcvMin4geFSYhXNX24D",
  "key26": "4wPaDfQXLGzaWv284A1oM9mUgPw2G9WMdyB3vTsNVjJ1mkeLr8s4dY1x47gtnRkZggVwLzdoQ1vyubnVF2tCjk1w",
  "key27": "2Hr2kyxTrg63WwLsWmyVWyPit7MEXkmYPXpaxecw1g6TJGuQTbnXgespjoUEhvUagK9P4TBz2PZCjCNscQFiyrM2",
  "key28": "MMaD2HabFibr6XdWU8ZQB7sdAF25hxLnVNnhUb3FSBNQQxqhC9SiPANTS7PykwWoVNvK2As2dW2GaY69vuRTSNX",
  "key29": "5hYkxj7aBzCbNy8dksaHcaMT6w8ARN4cn2awHxtx9WTYUu4mjwoD36yAYrqcxB7SFifz6UyscdfPuNdYyYnE3UF2",
  "key30": "2wwb3uYrZSnQFt4GqRJB6ymU3h3hq7K7ap242zgnLiKYEMSrw7K8XpXjB4nL9YycWzxMKi9p2rbTC2dFV9zjqbs8",
  "key31": "5kf3w2DbWmo2DnqpMmsPiGdcMT7MW75tDfEG348SqKJCjFhWFWRZJRobzXsZvs6Y9vUKjBmJFFtrpzbm3BW6hB7X",
  "key32": "4WxD87YJn2J3nq6ygfBNpPDsT3DJpSjpZH9kro9NjGXHxT6CWVLSNeUNG62WRdTm17PKbG1naYhq94F96SiNLeia",
  "key33": "pB7dtd5QYsqG1CESNiWEu3SBbh1yaomKddh5Bbfb9Vkz2FofQxsvccvxTKo8aQyheuTcCFbx1yW8pru7ruj3uPU",
  "key34": "3GpFkjwpLsUd3zHwP59kVZrJ6EtsnPFqZSCtYi8cFBi1VNVxLfPBDepK7br7d6DZRaUZgyFDYTB9sxUMecf4BnqU",
  "key35": "4TDtofsEzPuqrncmVAMF8TPDxYWuSUXDYV6wq2cn8PPSs3Czw8y4usGAMMdaRzPZLjXqytgDeMmtbvubcDanB8Zh",
  "key36": "39odbEQdkhLCWoQEvvtQa41GqA4s4av4CNqJVszarXa55A46zVa8ZjM8TxTvzgu4YWBzquF9noPrEfo6zpay3cdQ",
  "key37": "55qMzbobMALmmAYk6yUopnPjVTW7hDCui9rQ9uzQtwEJDDJMJAfQhM8BAfuEzE6rVjLemqgHbxDeQme7Bq9cNSL7",
  "key38": "4tokgKXc6jGPvCf1duUF7Gtpu9LPhgA2nQLBM4r1aMbLi4FeUN5QaumZbMSv5Tc1Mqz8MJG2yETMvm9k7yyqBDnn",
  "key39": "5eKhWgn6AFdytVRUV4HUNTqm3VHt2a7RoUojqB9zdzBZXevK5KKh65Cgg1re7pTbvARqrmFY9Ukkf9bUFqt3eB8B",
  "key40": "5JDVyChCPtoFc4fWRHxZ7bMzYK243688NwbbYBQMWrvu6cmu7xzdtoHVaV6Zo4tGZ7uiztgrsbEjVYTM7ChWzEZ5"
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
