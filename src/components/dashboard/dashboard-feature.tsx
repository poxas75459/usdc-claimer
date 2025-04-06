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
    "5r1BytGw1KHoQgyS2qnw3eegxaULzpyVUuJE1pqmABzvV55h1SBMLu4WQ89wiUuWkWLmJNrt6AfwBWUkLupTQyew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T81Xjx1Q6hJN918CmEHgjfYxYWm8QbSK1WURpBNMaGvpQRcUysxtESE8kp6HTAkENhu7553ps7taPp4Dte6Y1zu",
  "key1": "5ujSCMq83UjsQ26SaN4oH3wQ8N9Kmva4yXDEJvTzNtBqsCRFwrMveRpNMAQpGqdzqZbvEZYQVz713DX4ddqZ9Mv5",
  "key2": "4nhxk3QQJniieGfaSpTLgX1vFcUxabbQvEyHvXjnyAh2gJzJ2Ua3BaybqQppbjpvGPhYpC2Lopy63EY6sVg8aXMy",
  "key3": "3uGtsBJkpFobyGBgCom5s63NxMaGXuDtqECc9Pkd56ukfhFNL9AWZNAqiVM82rGjnsYH3Mc22tpiUbvkuvfegeZG",
  "key4": "3N6vAUWTcxgv8gSurMbGc7W8biB14jT7YGz2rquDwf1sauPfScjVWq8z8EtEjnfcc28gLoWwhVgCagLn6ptEe7SM",
  "key5": "3PV5tcDxTwJr6Epishker22YJwh463gt6E6cCH19JieCLYoJLekNdv5iotBFy83ujkqQE382PGP292KhFfUTmibq",
  "key6": "3ip5SLcMhoHE972bX21Uwf8QAQyAjjrfHAc7ge5msaVeWthbrBnTDnyuw7LSzVgybgpUVixrMH1a7gytY3X8D65E",
  "key7": "3ButoTJafuXjGyDBQx7mXEcPt4SwimqQW7aY7m2UBYxCPwGmFDeG39MuvSMtMHGGiMbAfBarfoeseCgkgm58hRqA",
  "key8": "4qFxGdiCUkviq8DNVyvVjTDi6bcWoeq2fcBhwTFawHeMRZtKr7f8GWVCQjfLZNYifb7AG9YRP6Ugs1HiRgXpVjiz",
  "key9": "cUPAjTafSQkKwhKSSinsAt9GaANhajUxogZZ3CVsizYihVuVRXXG2M6osr6GZbkML1FvStbfTnHPwfm4AfszySr",
  "key10": "3DvaSYSDpuFuRXcPfoqpzMnWuJLmkHaxG7r2wtRwQT2swSZdCVKFd6f7m9N4aUrdY9pXHzYB5ubtCnUFqVSKCn4z",
  "key11": "41XaTRhynzCidDNnb2UKUBJFokrGUFyuCFQRbtfHbiy5DrwUyM8LDHrZBZSWEXWenYKTZJ8QvqUNw1aQpBQ8p8Rc",
  "key12": "49UcVZWMuViziiQibuNarzMkaboTtrjdLNtw1MfYXSFooikG9p3qWjj7i3rBPjfQzBZ5N5Lq6tfmSL2PChDPc8SG",
  "key13": "3jc4T4NGkLGNgCGoj2fbyLXaDsMwcTnuY1F1bBeCz8Q2DZkUkcBmQMpdmcLLbBHqpTxVi6GYmbjWmdRzpjfo7Y4g",
  "key14": "4SoJUaiw1KK4FbFidPBgF1crCZeuqBdZbsFZzTQNudgNDDk5Ys2nRg24pewY8UryCQonCUSkwB1FjQKLQdZE2SYj",
  "key15": "5sKWvny2FvkYYGXZroccgZ6S9djzzajNMHdyA332gdng6oidtMTruqAykvo9V7mfFjpvX2rPmXP5M2agBRCnZP2M",
  "key16": "4ZJEBJF3J6azM73yrpJwnwSUuqW56teMayYU5CBhx2TsJNwBpYq5rJVDf8LTJUXtQjEq7eLsGmpM6S5DBeqf2gkp",
  "key17": "JLND1QR6bHRi4SNTzDGGN2PxNos9cp2SWYj6LGa2qaAp1yvogWfZP46EuHjHJ82QYUdMkXLm6vPJgsbxyRzkiCT",
  "key18": "oz9rqpEVkDa9gxn6QZPGwdrgcHoCqoqZHszYqwEzF2UGofriGV6ZMY9RaggE4K6zZdTppCdUfVmivAw6eFoUg3W",
  "key19": "44YgEudLPGXos44he1viMRH8RTaect3K8AczdeBdMMLotEnVGBDjuPz4fw21WtLAjHaQDAdeoxEHLPnSQe8LNZAV",
  "key20": "2RoVSCQo7Ngg14BpxT7MBFAvegKYiARgFRAQewjnaeb5dRvJZWLGq2Gi9FGwTGnVgAuXQwYA1u6jd9n47m15VHp6",
  "key21": "4vqbALegtrdLBrvdiESiJVvSq2BdQUHkqgjAfYnWhqA3mseUefvDoj1gnUyiUgHcwGiwwkmJ3wiXx41VMUgSxrz4",
  "key22": "5h4dEgVTWoxGfSg1FUeLS8P8uQWw5XhaxqAgRqC4vfZciz6TiR9CNYpWgsG7LKFVvXzPeR3bzGZWogQ1ARn3Sb4D",
  "key23": "4ge1eFY1nLQF3ALxNArgD22eVkF5oejFPyBVzNPapJL4vPWywzR6rm8GCK6vPReu1e4A1txfhbWX8Re6XggGZCY3",
  "key24": "3o1bD5Tj9ceMkgmNMTdH4ii7psP7zzfavAWWQTGt5sPgbqEQQ1iFeVjL134e5DSBHMi7e5mzcEDLPwkMvDCSqjvE",
  "key25": "4DCViZm4tfL1auC3tREdQswwsUZfxd4avSAf4M8h9P6SFphud4ytegmut9WzdQXqysaugsm3mB4i86qczXY3NKZs",
  "key26": "4Yj92J7qjCTJRrQ76qqikVPCJXN4RZ6WnPFrXgVANj6kzxutVTq1bVkFm8jRAKanUicygJhiZVSQSYfTzPiQNVSK",
  "key27": "2KKbN1Pq8r7kesR9eNtSeZvDrugHapmxcTBJXdLR1bdsHnvk4c7aJze6dDwUSMmQiruWioHrr7eK6kejdACCSqWk",
  "key28": "48uf2PyuiaAb9pZ8WixdFiDjBz2bN4kREm1JEoVT4Bt6ruvsZe4NAMAFWu2joAmAe5va4yK9kjCPkQQCmeWMRayu",
  "key29": "8sC2ATFfkBFYVajfnRM6YJ5iJGfQFe5RE8rkcBvnsmePToFLG5smSpQXDoRA7hMcjAVJpuyvhZ51MCfwvy3fMPd",
  "key30": "45pmCDoFoEy8gxhfgE2HFGaLRPf3fSeQrujCi49n84fJJQubUw67t5YmELqzxReA8PvFrA1E53pjmenLgthGdPoN",
  "key31": "4qBdjNcnkDo5xQpA7HrXBebUH9N6QPJgFkreGdJ42mWuvTKmxJANvvEWwRLDJAEHR11tW9u4iz5dMQCAdVK5894Y",
  "key32": "7oVY3ALA5rfMgQjfhwaAokuGxq2wqn6kzBqG3dV3bWSYq2t2g3wBp19u6bLKvdNVDsUHdAcWGPwTS3t3aB5NEmQ",
  "key33": "49Y5cTWtoWUiWbiwJW5QUh3218TjACGchpyWPwq2epzr1YLTs7rdw9AHqPUgzZBtr7iGqZCVcj7L5BF5HzzmiLHf",
  "key34": "4cyZGQWQq14F6Z6J6g9yZe5qRLBd9w9TzwHXPnyCiUGMfmo1ERHjzZ7KDACecs4GoU9hSxnMVqwve1YTM99ikogK"
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
