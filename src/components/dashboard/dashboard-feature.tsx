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
    "4esqvNSqvmGVK1Asj6zZGTYJTKe4tqezyvYuJDFgX5jW1Nf71VYrGRvuB8pQ35194KXyuEJtsrhRPfNcBr4TibDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9K2Ai1Nx485SkpYzgyjYimog5yw9SUi4EZ5tnDHDu8hTgTJcK3yTYubrNfELpBavLx3fzALhJfdqfUYzh5LgZH",
  "key1": "65ufNdiGiGZnvR6SkHcsos1LTtkod8F1fcQPq83HEExpMAcEfbvhU93yGYYMoiTAksnksXpsettVQ4z8LD7vEjE",
  "key2": "2TTa1skzZHi3PtjrVKZwHQqKmKizNzoS1gRdSS2qTDHESe7raiPvJ3f9kAwEQdah29ET2sVUfgPkGgwJm5ZuNVof",
  "key3": "pqU6vCcKkTBXpkYBNHzNY5NmEuTnwdxoWYB6jh7u9xjnnUs6S8HaFgGWJWzrX9KJSRNJzpvzT5RLfrzmDmJ5Faq",
  "key4": "5xZyPtRR49WZYahjsfVnn4zwuwXMjrPezyo6UCygAwVpeQGLwSBAZCQPpadTcFeg4xnVUrhjZH8qtrvPwhNF3VWy",
  "key5": "3WaNS8iYH9s6b9FkzS6XFZAPKK7LrCSHyTFnitbYPHWPynQtmQhMF1XGBwMqjKahLgGqYnTUXhsp54iX7Ps9DfmY",
  "key6": "2Gd4xZrN5AxEZsqn7dejwVj7dYpj13VLJmCfyBeYsuxKpUTBW3Jq24uHkUaYYDYWi2q29G74iqpQpQbpKbdn1fRM",
  "key7": "4T9UCQ9oRLt7zG9QjBF8pYS1tH5qKhty8eahnR7BeEyCVeLttdPPAS3MibGQF2QLzNh6w8LdSV21tw5J5aFcdW8g",
  "key8": "412t2pGyNn9XgoVvkfJRRLwZ5tnzTobPmtKFzH9stsTzGX3vd4Mm4Pv49MCKWb3x2pW6iknPEX9DWSYXiRWm81kz",
  "key9": "2CGBM2Pf9t74jLHPyhdKYds5SUMoDGnFUR8nog4JT8xnsEJjyRoCWzYVw3oBoxxSnQmSApMAbDj61qgtx5NYWkan",
  "key10": "2spzg5WjZ3GuQAtC1Kfm6weYkNEwh6Nba2xHKprbj29zvT6WZy4brKUwyN5HMi4dJAH2ZtvRXbQ7Lz4nDMVbhWGW",
  "key11": "3V8wKEVKLwmLYBtniBADd7f4V7bVXs1f7o1MLLLVNBSbUyqUtsn4539tchcAgtJaQ2TUsueTA6n86XeNAr5tz4zS",
  "key12": "cTajPmMCE4jezGoGztHLL9DJ8K4mcs73rNx3EaPj76ojgGSSLNG7RDMMZmpyPoQoziBk1vx8MKJpcLudZFNP56g",
  "key13": "1i1BB712oLPqYZy8FAAkeMp7LDSS53k6mAdLAyXm3S5KkVLna2n1YLNB4KyMP1ZfZTYb9SmG78e9up88953uCVT",
  "key14": "3aXYm5csGk2TaDgcM7zjYdTGerkZaNgF47NcU3t2VPDgmu9gHLjue1iesuqwQ1iDjsrZuP7Nn2UnhFMvbiJRiHnD",
  "key15": "5LCHAMdm4yXFevShpb3Ptr9cw3pntA8aQSWjArzwZaL6Vfeg6CJUcTMHjTQwvk63EgMBRjmBZkYZjKe3f5HsvHtb",
  "key16": "5wajHeb2LiSZGCAL92nRW3TFc6BRFRXo5jCXEwjkGUUdRueiKde3JT3bnW5dR9STbisNwFY8g1SoAGCNXNcNDHAS",
  "key17": "2FLmWZrJkurgycsfrtNUhms3UQ6SSJcxXEZBAa7p6BrALvTr7Gx1Sh7dhFzuDWMZbDmmvCESCdtphgPBsfrUYrfV",
  "key18": "5gE1cAuCYCJsJqW163oErEg1BM55AefrdAVS3NowqYeBMzwjioaVrRv3H2y7KvMfKKmiMic46LfTtinRuKTop9sX",
  "key19": "Xt4M1dfabetoCPRq1FXvtBbnYATYYxKfYAnSC7p9MTcXcLZGLge548qYmoNRM1GKnDPEL89N6jdMDVVrjr7Kk8A",
  "key20": "jGddbEfZcwUjuYK89tVbRgSpDZrkhPSj968UtKKFFur7jj6SZ9kBNo8eZpS6nZZ5JfQGmH2GRS6dhDn8jGJcw6Q",
  "key21": "3FWbrM7BcNKED9X4ZG7ACr8w6N9T3PyhSDKK5YnzdNCwoLmvECVFofMyvppZNKgf18p6mAK2pKKQmzcSat3BTDTq",
  "key22": "8Urmzz4sWE6XvZtA5fDhwZYZNFiwxhLeAAVZng8fPyxmaeDw7GZeD56G9i4KSz9UnAGt3Psymtsanv18Ho8qhY7",
  "key23": "2nWeWGzuKbYr5LrQDuLph4Lz6zpK7jty9Kd4q9A7BuqPKJipjDZMiq6YGWiEy15Fs8UMMLqbNz74UKoP63NBAPDT",
  "key24": "2EHEefnfPAhKNGzRLQVMhDq1AC4e4BU9UCosypyzhBWjVAbB23BRm7rCnQ4z6JVmouFTCJpenXZkbGuP2FAmr6yq",
  "key25": "2od6Kv6YhXdozyJMARiUefizanesK4Cunm1WPBmCdPuEaMh87R5FqNMT1isTkv2HH5347px2zXQ3H7mb6cgThkCr",
  "key26": "2QyzfsmJ2pYu4GxWW45VkSSim3oTTZEABash4izinLfi5zQ4rLVZ9i1zriBFxB3QLQDoycm57RqzcAWn3TbvumtA",
  "key27": "3R1YCySc6BqNvmMhzWvdu5SC3me2mppABHJg4sbC7RHavtF4eFSVyx8oBQyPBP5ajGQVZbbjugNY1vmKcqJwre9B",
  "key28": "4r3kjsNgXkb4kgD8QPSzS89BVVnG8Z5kvV2TkDbekQKkmXz3Jcg7roq5cHeuo7rzrpJAfRfUqmgSD11wHojzn7f",
  "key29": "5ePrMEQRW8ZEcGTykKuQV57nNvxbYyTHMTDyQYxpiRPbue3Uo5BdGNAU3jh7Jsxxk83Y2PFHPNgjEyNB5XKCtHnN",
  "key30": "4AWGDB2SyjGmg6pjQGQJgFNFye5jzjf2uEtJVvGu3X67V1PAF7M8xWYcrtHMjhSFky2MWRnr6p7LLzEKJ4Bq8ihq",
  "key31": "2zFpMRWcjbn9HE3sWZnz7JC5LWuPLJ3BTwQXVQYAHkJWwiLNMsNk2e9wwmG1KjQovbCGW8vopHRQ27RPcsYZx9hz",
  "key32": "3wDfGxg3HQNuBtrasaehQbzb4xU7W2VgynBZ32RNL6hExsBi6vkgrfaiBYHKDJA13hH9SEFnCcHCqzurYLkLRqri",
  "key33": "4rAUeb7wFWeqVenqmmaH5omqmMgbjvQRWh9qZJm5F9YeGMUrFjvxz1ZUo3ktdPw45TYLwMU89QqkU1c4jX51cuFt",
  "key34": "2XV3duJkym4DPivc9aT2fcCS4RkXj9pMzfHzVSXtd6EeJgtNCw4wsoL2S9nCRTK8xpmxvYGnULJPH88XfbZXE8Aa",
  "key35": "3vDyTrMVSC18i8S3a893h8aDGgzaw3X7L17ii2sQjMnuJMEqvVRGJxoV2k6xJFn6sL6aHt1KhRFon91UVsENZ5mw",
  "key36": "28ubRrdxoUWhd1hoprEWc6mHexJ97b4K9N42pSsQyGjSJTnyrP5yHJ2h2XNzBtRdDmZgGJY8kZWmEXwmjDP2JqjW",
  "key37": "2p5aN76XCSXw1w3tK215onFMrtKTXKX3PVpEdGKcHZtFD2cniwT11oxFAQKwjHuhjqdg5zWwvi1JeLgjqrraJSwV",
  "key38": "59wRW6fa6ujm2Sm95rfeitL7175vmJkX2jiApFHAY6CNbsjyFC2sszgC8CAicccm1bSrdHQBCSVGKLMSHBiNjHva",
  "key39": "WQbQGDeaHFUuxSxZrTaYxwniyu9Jse5qnCuREbEzLeu5XmNNFzWKra4QUwHd5Sg2vzSyzS3gLx3r3iKEwJbUFdb",
  "key40": "4TztPUgoSCmHqpFN3yw8UePYpVaCmqF24QvteKfd4HMkqyWsS7MYHpmsEuyC8tqYsnK5VJkveNUTFeSde8xmBLi6",
  "key41": "29ATkTN9ZTaCw7TFwr39BHyU8QVDrEz5BssdYTxSWijrio6mLxhNemWMC6NK8PbxoMCjWLytpYZUX9GEpsuvSfWZ",
  "key42": "mEx8Pr6vwhH9bvLS8WoTHStUE4b8iztwSghBxXqexcPwVYUu69CUwwY9RrpjBPMRSXx9eKoMoHdUViSZ4Df24DT",
  "key43": "4W7sZyptcZpYN3pwMv9mrM1ypoH8XNm6Gs4ctGu8Pvo1gBZqUMKirnR7rJfg5Ad1ovrw3H7HMyswZJvbsbWKALWU"
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
