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
    "4h2k8HUMa8aZH9HcUJEZXvnDs7BzKSqYZ53Rv4HinvYbTtGsua6cYLxanx11Jr6RSv3yTHPaygCRdyY8fiBWs8jU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mwxrdfbq9PFJTVtNopBAfTrHx2Ag9xHG2WWucHoy9KXis2Mk9qR6Tnpyz592DQj13HyxfptX36LArKFM9jXuMDW",
  "key1": "3HZfFCtbzWsmw1FJBnVy7GVVYzYeVUUmHykE6V4dFYX1TX2DDdb469cupCTFY8UJpvaC4V6wf3WUUeH9HGFd6hSX",
  "key2": "4pj8MsEwUtESqD2hJEZw6PLDFpaTmLABijjWLHYsmZ2BvhHiXJGPkXW91FC4pzRhx1d2QHFi48id3nZ788dj89BJ",
  "key3": "5GJJjvyChKMKaDQ6GFxHzD6AB7TWfigtdRm8YrUk1VBdwMdfbXmhkNHktqR2YZFjyebHBfA2EtiSiREKSyWr8U5c",
  "key4": "2ypTdSk7TMefqhwpQ6gjsTwiZYuYWCPNUcpxTZCVKdheSmAhnesshvKtsTQPd5LVn2a9JwEbmzLjCfpFTejRzhuj",
  "key5": "3Q6xpWeWK24ZJY8aP5SD7kRae8rDV6iNE8jtrXjeRnWTPbrUb3u3iSJoXjrYf6Jg1BVUHhpJzX5o35SHZCKdy81L",
  "key6": "QX2Egpy8EfoqSwAtmVK97AaAAKqiFDJ7zCxi6cm9dHwgXPUEgyjAWtgz1gYCA6r2ixzk91aJbJCh2HDK4rtYx3j",
  "key7": "2xaADZs8hhxP4mYnhXcGW742z4Mpn8fCLAEAnPbbrqTN17YXskzxsq8nRfjw7qaiUwBum1jfAS7S4fB4geSMjc3u",
  "key8": "4uJkJZe29hzwKU6SqcmCCunK4J3jfteqFX5WMKPgeK2EkC7ou8826HPGTkGLFHv8UihEuA4VbUjjPnvDrENuiCvR",
  "key9": "5e8GKhqCoVM7Ms2yUTHTtnqKP7nh6iAU9sbXDWnDpgX3T6xWHpqujdye9vpsGyQWbq42SngmA8X19nn12YXHKS6p",
  "key10": "71Btb2XHx3YLN9zJt6ciQg2b21MwPULqyPfbn8kzUzhjA235cN7kdXJ7KMsTXNPYckzru9w6H1AHqrsGm41Uzmd",
  "key11": "4M1pDTkY6Zqib7eXcyNo6ZmdmiLWdHsRZkf8Hu7F6h7Rx5eW2DrCx4HGcgRpwdcikYhAeGknRsVB8JPcXiNkLxSR",
  "key12": "4gQg9C1mQ2u5KaUGTQdBiJqTE8BfE36nhn9EgHAaEfwSqwDCAADcDSbTiaVdJSewv48tqFoU3jciKAXZ1oyM1LFN",
  "key13": "2uKcHUdKiuRMNhzefjUQ5GYB3hRAvuw4ZHm1Aa5VptqarrJdgmDPwX4D6GnSjyRb9968zt3FyLPunGpKV6MELswF",
  "key14": "9W8MDNa1yn7GSN2baovVEEFoYdk14iyrw43XqoKc2figPTica2Fj9ZoYh4Vh83owEDAU76zjXGtpweHfayQv3Tw",
  "key15": "3d8u4W7d6tA6ECWsEZQ8XrMRhRXSnNJBu5nfJFVJzDMAwXSxkDpwL1JSWm7JKB4mmDCBnvjKmkzYnWBHB1x6Lwpv",
  "key16": "5XfLqDkngPTZ8GJtuqHZcJBYb6RpdfhStE4kHC7XQvW1jG7gLLCMW6JszoAkf3JarwitqbbvWSJUUMwywKesm4qu",
  "key17": "K43kqffzd2mr2Vx4t9FYkpiuAduiMyDeuDJxdb2PpjD7NpPXEBDcwaV2nBeURweN5uuGFCnZ74vagem58uWjo7V",
  "key18": "44kRDbPtUMmMt3HzbYGqTCb2JXAMQNT8vN9EPkn4bDFCJeDPiLkwpkjJbECoXhwxCT6o6GtSUXRqJzRNdXK1hJ9V",
  "key19": "58JyunnrcYR2aNcaKRQZnbooo1dnZ5shoq9jJVSRrccb1AYa4GdksrQHfW5tHJrtapBViQuQViMaPQX5P83tGK33",
  "key20": "34VinGPUKdGph8Qn4rfNAsBVAVZTNT8kfXGLYpg87i6JE3JEZBQZVNBMSqqH2Bswqjkv4oFLaoXfNsNwGviTXyxs",
  "key21": "41bXyMLimBqoah8yPGayqLJa8srWg8mkzJPQp2jSupRyczygRFL7LV9hR2L7hJaobCYTrwvrbfsPyridzE3XHdxi",
  "key22": "2BPRPi8ZwhrRPZMJGMuwxJZdg6DhhV28hsSAD7MVbwz731jXsegSbuCAimva9oK89PUQwGr2gvdpMU2CphhDBcbx",
  "key23": "2wmFXE3XTPMP3p8BqQqm48aM3KZ1k85fh1aiVNXWWCPKmUKiK5W52ocLXxecTZbwdUzJqc7bj3izBhKS4vDCTWiG",
  "key24": "3joGJBDHh8Up8erSSnwnHUMLVbx1Y685crjzaXpsNfS3TcLZ6UyXwjwnyqxoqGK71SeM6zi12ax3xfi1YqU3cGjq",
  "key25": "5tKmd6Phu9TjZ942jhxtHvgtYxGw6MG9DGeS442kf23kCS8Wdt5ZqEA1VRQNaeVMew3je1Xgxb9GPKnz3zYBUKaC",
  "key26": "3Chqq3vX5ASFnU5dBwhz3jF5Zd279iPhV4xunZtHGT8WxpbTHRuJP8GV7prp51iLCw4jRq2EfApVx5BeTvhSueD",
  "key27": "4W4bs61hzzetjeoerT7CpVdxWHDVrvJogzFdxxDVj2RD1LbXfrkntxFhTPG88AnSaNbDq9FbmfAsUiU8U96Q1UNY",
  "key28": "4f4d7nch6MMKB2t9tvr8rL5rEYpkSn2o9H54w1DnVRzMU1jUS7vDmYkmToijg9dLdsy3e42imF8bNYDFN6Ur3W6L",
  "key29": "VryP8Bs9QfUeLsCv7cPNXyLnpxj8EHBrUDCKku6N6EsK2odrkvu4yfdrXgzB5Lx5JeAjEQie3R4p1kaUXMxGw8N",
  "key30": "ahYDimFaVQYERWhdub4KecdATeRP8bpVmi4922tty5MSQZb2Kwp3FW5wtEAtsAX9qdHxAhWi7kkqanCMnjoaLYB",
  "key31": "3UCjsJ1VTP6qvQdEcCxgevobzDHJ2XSpUG8eouQGXPJB8nFtHYRQsTFk2k3jBvLbVWuBFPCqXoLWTKFeyXjLjjLK",
  "key32": "2EbePpfXszo4gLRt4qtWU2vyAbpNhCWM92gmzcgATMe4W5UuKCZJuf5DUxiRGujX2e9DKtip2X2gJfL8qQLC7HS2",
  "key33": "5hefWjaGAJcZjFs6no5rWKFbtKs4wBrJz3XPs2b872pFbRP7kgr9RMLNze4jQFtDZwQqqgbjZVUqiynfsgU6bKr2",
  "key34": "cGDc8nEWz1bq7V1Yjnqfdg2bB3gTxCMAiqCL6RA8pwchHLWcQ9ZjAdYyNvtQijGRQuFXNW3WhaNYcnkCoAW4VF1",
  "key35": "ooFyhVPro6G2A4yGeGCso3BLwVzqS6BVzzwjhmZUZw7siShg3okWk8rrDYLwRCih6gVX28xSjfueUN8PFjJasA7",
  "key36": "b1fmDuCVQwJqE7mSx7ajvE2TyYr8t9HYUwT8Jqi1A8tNFuP5rrTbFJGwuHYZTa9mR1i7LdEL49HTJEjUuyya8zk",
  "key37": "5k3mc3rPmySFujYSHYDHLHxzZ4yp7rySjPMB6ngCEKGauFE5c3WK9uvQSa1jFB9qBu2RsdYLypto8SbBzhacNwLG",
  "key38": "2UfU54A8MBvmXRjokvhiorAuoXb2uv86Vda25wpx39c88nY5Y1yRV7ZjHEBC4rnivoC156cXcg58owEFUUaZNiHw",
  "key39": "3f5gnzT7K29WatfPMwWJPbRKr9GK23vQKKWBCj7q9zqCDYxE2BKVeRWkjd4BY7uoh8WyYvsUw5begcNrgfuTTaAn",
  "key40": "5vUGKG42yoAKEhMdoQwT9xtrLi4SstML4rq8tKJuhsCLmVc5KRKC7JAbQLhQXjaCSoDW5e8uJDK2GKtD6XjbNr67",
  "key41": "621aSDrvPhdmqJMYepPtmQFB6Q9iZQ7wgKqTxDGwXKqrRDEuMiyHiN1E6iQX2D2m6obE75vHe49yEsET3FGwKaJq",
  "key42": "2vWFhF7rptJnjkcj5Y8N7jsk3XieGmBZFAxqNtxmc5KcTs3Si3QZqkTbUrPdtbztgiCJPqYtSGJr2Mnz2nDFU1in",
  "key43": "3AnbbE9qyd3vRPndjsK49u7BGE5u7h67Y7ibLHgZWjbc9Twm8z7PswwNXwVLR9yyHN1dryciU2CcWVf5Z6meDSnf"
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
