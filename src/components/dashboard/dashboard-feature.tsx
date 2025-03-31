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
    "5E5qK2MrGbvpAG4KduaeqPjUosrfCEgRnaoA3BHbNVXiauroTcW1hJwQq1PaE4CWPKsb6izA9W7Q2EprM5be96tJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UaXRSw9RRW9oyxLaq2r5tiKfmFxa63VsFV4J4VtmQnLuNAQe4EakKkUC2CKnLdagS3Z27SbXYSWH6ARfzzBbB5i",
  "key1": "5xteVS4JrNtrEYWfP55QvnGCyFYCYk5JTeyreNpwbSXtBvzWaY5DjUUBphzutpwHKiKUzkhTaoPhszZv3ksd3nJn",
  "key2": "4Hr54D1T9tBcFQXoCWSRDJNQ3zndxpMTEWd4qRvWg5dsbeLusuCGyRcZpCwCJgtUUp1KR3vz11JkxSq4hxAuy7ud",
  "key3": "3x6sQheiXNPyqc2uG4dpHfBgxV3XgTxzPspCgF82gwwt5Rjb1dPghGw7rEboYziHCtg9wbiZ67KPpxDZqizLPwK3",
  "key4": "2E9ixpyMp7N7yfvjJr1VjkeACstPunCcFTUwP2uhxobAtJdHUgiTgd5eQiuygBmh3z8NxanK629BFSF9PFRhHMjd",
  "key5": "3jGY9K5TW4AdATgoHxrAB2CtmTRzc9tyzvUiA95M86NwRo7ENAiAA6AEveLmHfJ8tgZszLbBxtTYgUJBvjAHZ9cY",
  "key6": "3TjLsTMg3cfZzM95dng7BdGjqySrwQUCFU32qWi2Zu4QqKJV6AVR8Jms8UgfmLLBpBUbCSuKa4Y2q2hcSBpA1XZL",
  "key7": "4N2QxB2KKsEAJf6cAiLkWvffNqCK8HpQHqBpyVh6NzdZnDLr6Ai6sLBohjz7fJcqjwHQbtHVpvjDcF3gAPN3b9oH",
  "key8": "2Eew6EwKH2hU9tgThVZE6z5gbTKvurKti2MSsHcZ7BfFm1rJKTF8PHAWG2AkorC6bZE8MDbi4L97PdsPGCvLDdVH",
  "key9": "3wyPeZX783PqaCh7aVQ5w2uk4RdwGAcdsceet8Lkdnuod9kkABpqj3BPC5fvCqam5tSzMmZaGwGiGMZCtZX6cZ1V",
  "key10": "rvAQvoSnh3MhzaS8zTmnzCv7yZocyHXf9unTgxa34E8FfLmgqZUmcCqQQ2YNi4ktMxSbd2Y7R5zPXH7jrG3hXtX",
  "key11": "614pUjvWsyz8SNQgYKWBZ5kATL46xM4ieZBYg5vMatS8CNWedxDQufDazddVpTVy18nSy7ZYWzEW1ruyXSsGsqNa",
  "key12": "4HE5ncC7rU4Y6U2cUPVgjwCR2pVhmhAYpQM9fFgLoc7LBGJoqJYGdisdmTDaKHyhCTQhkHQP4EWx7S69DmG4KAE7",
  "key13": "4eC5JPJweib6GTqm9WimAsu2AW3xb4vZpeBJ82RC35SB9id8zc8JPdKHGWrvQ2Ymfb8mcTFz9H1HHHJaMPN3WAso",
  "key14": "5UrBhtTL4Z8uMo7RdYyvArYYCuzksYvHF7FpdQzrZD95VH1fqdR7nxq8SiXMwAc8tdMLomBBP8e8JeW7cqu1E8aX",
  "key15": "27iUJAB6wsi1qeQd9ymFoeNwADG22hpQQM3YppGmSDbw5xSs4UXWKzhj5WUXibXnkYdxfwiMfWoqrnbUeBkT45G6",
  "key16": "36fA9GPJqvaKADrWpcc5v25phvcaayDFE9i8owFf2biSgxwK6KpfuL1CiiNhscRCd9qR62sx2hFzeExsRZFx3PBV",
  "key17": "5ndxPKPnZDCWFLKRhYpYnmySso8WVkf69TFvNF5uaTMxco3QB4Rq7rAmpStGQqKikhf49KdUAnHB6yytPTeFncDw",
  "key18": "52GNgRsX1bi3fbUcjxmXXACFuKyuiFQ7Qwnn4YpQ4XetJJjcH2ud2whJzWKH7DeY1Q6BEzQeBDb1o1Tq5gLwq4HT",
  "key19": "c1iJQ2H3D9aziRewuKR6cdFwPGozstU3LEit2ecbeKSAJmoYZCGcZr2e67Z7Ea8s21T85NyBTzenspPXRA7pRpB",
  "key20": "4Cf2CpVyyiVk3jy5ebLpvK1wxMGDxHcpJ4a6PYft395G27Grt5BnGKRfop9PTBM58b42trKEg11f6kKF3WFN5tXn",
  "key21": "5MgNS1V2Ukoy8GGiYYcj87sfyFVG4YPULJ6ztnPAvvUawgTKF3S9QwNDHJaJo7GBvWeuYqm19z79L715bqeLVd3m",
  "key22": "b8uS8qhLnDu8sGRdvEbVbvKH4BBxADLAVoYHLz1fpgTZCFeeYVqV9xZaKwmaE9BXA3kQTzueP8ycwDTxsn8AZNF",
  "key23": "5zLgRQ4tzp3UfWRkmdxPWimHZ3cYGCVkLA1zVFb4j9bJVEyx5fCbFSFNYnGRaiGTt4Bhz4osH4AhQ7xMgVqPsosF",
  "key24": "2GPFCWPMKnoVGzpyX1LpD2yMHJE8rUwipMTyfGCwyMgf2YTVqmwFsD3XUKj1zQcnvxvVMWdRKasbTZhaqQ8p8fTi",
  "key25": "3LbfPBpinSBfeTbDskUbfNddCqmKkP1QwtrpDpBm8UkfbGd4cKPYGE15TWPSmSYf777TJmF3X61B38DGpujA8Zps",
  "key26": "43mG7tNcjwCtC5NLZMKQ6QL6roi1J333CHrB31Ee1gkQbCMecqgf3HmSV1sozW6CEeuMoUycokfeG8xPmEWngBAG",
  "key27": "r1FbJT4b8r1N2mc1AHXfxvKTZmhCa6ETr7zmsZP5RGTJL1LMFaELQG44gUHypDAQznt3hiKgVu8LgoEnTBms73V",
  "key28": "46RGhbfxFQTvpkqe5Xo9JwVZpAovg7T84PtdRriFePQWCpTzMdwvMgfy9UoVLaa1oafxWvYa77P4ACVpxFqqFX1z",
  "key29": "36GGzmS4bm8F2iUkfxfcp4wjsJWSX8FVnrCbV7tyS31vVVsTMimNVKwa3qoEynJus3DfbzMNDVTmsWALS3YGCpMf",
  "key30": "3MAgzgZpWKreQtV7cGt56ZTwb1Qy6Ve52iNqKoiGBGtHdYkfkqAvJy9oNYKbotMXqi1ETSST4Nogp4ea93hMzU78",
  "key31": "3pLavuF3HN1HPdi87P9zDNnJ3s3nM6bngLSS5my3m2pF3sxJYSazjr8iQYa6vdiW7aMmvNMKZCveVJMh2e5Qvqt3",
  "key32": "2YoKNtSyojSkYURZaNyzJtmci9teS4fvGEoC1qGj4Lyw5EVo15JT82QkN7QaKJ95pC67UEKcBnQ34R54UGVnFhSS",
  "key33": "2RWxGczGVLi7iSwF7H6fBcLhxikaX4h8dpymYPFXCuctHngJnN5ptbPAQLFmKzqVbNaMJuxK4tgW8jStWQLchDPR",
  "key34": "3ZQMSiHFVbapk6Sc5VHw4oztKcYRxicGH2Tj7gBK4uTB2bWu5dgsf1MHbJezGgxRhLQizZGwf4SHM3oZAQPH9yR4",
  "key35": "4WfSrxCQeFUEa2JDfVnkFVWBUQhijNAUhM4vUn36e2dWj9skd8nxY4sBbeZZUsS1UM7s23iuS66xQ8KidGWLiTBX",
  "key36": "3ZQ91jUjkDstcfZUioumvz9zCM9LnapQFkDpouVU4FQqay5zoaEhHqGGPTBJt9cqF7iQ4D4fw4rWHinfq3XcnY17",
  "key37": "38M7a62aEdVNpJdWFAkL3fkYSmLZ9bxpuTVae44KaRA2aHfL596uB8VCJTAtbMDZ8sknHbqSdLSbhg1ghdJ4KtW1",
  "key38": "4dKuUveXqJLQxo2SAvtVx7ZoFrXjLoJgV1ndYMpLjGAymCLWd67NFNDFbE346eJUNJn6SQztyPxxrgnAFoUCcxY3",
  "key39": "4kmxDrPqSu1fgkLPdKWxHXSVQ93eKioGcQ4p65BUvwS6Gh8UD33LdYXGdof3kEfBfZgyHP35z6S3x3YDsHtQ4FcX",
  "key40": "5oFtBGyki6D263oebtDVWxyJp1zfdZA4a4G8khSbTUyzPuGokLZM9vhENnSNE9dE4fUw3EnTP5q6HzTZeUsXkHZ8",
  "key41": "5awMEQ6VNP9A85BtMMEUTANSqNFWi8iAM5Se9PxSqkoPTD4JaA7sdTgSybJjpZAMxC3LJxRf3ZutKpdV7X11MMTj",
  "key42": "3FVEFMdLtrR1FuxVyUehHAJirQ5Md8g3NhdgfgK2bxDQhX3c6bzb2nh8QdzW5G4YKQZpAqUyeJYUf4sXP16Qpghu",
  "key43": "4YF43KjsP4iJ6FwTNcvZBACqSkWFuQqCY4ifTfqn6iF9tiKEB3pHsWKfwjdydcfgqeACZPsqJT5ed5YPxQT4rVz8",
  "key44": "3yg7dbxtiU66SoAm2kf3KyFe9ikE6zRArmZ6C4RQwPW3tXnXM4o8Yvin6fMkkKhDbu1DzqzcgqxtRpYAojCk3wsa",
  "key45": "hAN3eyK9rjesAAXB86BQoWs3jr2JQmYarbhqsjbHTLD2yxvdSQp51N9Nkponb5pB6JNa1WmuDqfor38vu25rJf3",
  "key46": "2onRC4LCcikL5NbKx3Co4PL3QVeYD2fP8YZGsh79kdiuabjyVv9zxH26qMqxtQ5dZZirNHKTULKLG8HcZoa7BGbR",
  "key47": "3Hp3PphVHH3HQBABiiteAkn1TNnqDckKqZzQ8URJehcQ6eW37FVahFHyFBMNhaTyLtpHYdZ1Z4BYk29YL5Pg4qcX",
  "key48": "3Ba6awChbMWC76otNavEfQLNoYPComXY8DMBxWCYEA3Lf5C5T3WQsmRLpgWfWKGYxAKt9DvUATrRFVF9HdNaJhBB",
  "key49": "4Qhc34ibskVcSuaUfPAtnuf7B5w4EgBCPs43mc6PJHFaKge4g9UQyRJpo4wjMJejCKGGkGVpdGyManXEJbG92BXt"
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
