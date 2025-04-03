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
    "4PNs3dYivnqK4WEAos1nmzPgHFWB3FAnRB2Bw9JkzJjGbH2ygU6vPog5vYzxjbJWRGGHPZDkfi9mFYK182LJdamn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FmPnLnL4AojZy4Kozrw9XsBtreiVRktNk6xQhCFwrQdfyeKLGJU7C46BQfrzjTbvA6A5eJwmu8rRvw6MsKWtf9E",
  "key1": "4FawRgW4JedXUMoV7s2L8j5D6Gb6AdSCqYteCCt7cTCrfsAbrRgXatj8b53LQqu2SYTVdJS9CvN7W1jd1eakS1uC",
  "key2": "4mm1c1mQD3oqZ31TzVhWAW15NkowSYuYvo2m4e6AjuJs8ANgS6Y4ECfFxGGpneVhWfj33TywSU6vDVWzWKgrEjTP",
  "key3": "3WCDfFw1RTM8nC3mMEfJe9BBk81Rnx2cp9cZaGP5nrZLa4iaanVw3moMxsHaVkv1Avcj6uDzJRDf1EA8i2FJfUvX",
  "key4": "384DFYAb7qnkHDfCPF5dwPqRnBxCSbawESoqmXxmajHH8MgoimJyHVcXAtGvqkfVCNwWmaGwe4j95UVhU2zJAcU3",
  "key5": "3r7KZ5ZYouAa9jXZRvdEomqkKpSEauNqLFpYTFgVTpf7es6GmyYGgJoZEQuGMY4GouJ2anbu4bi6WepXwmtZwj54",
  "key6": "3bC5gHGkhErxiPNBhdmHktdweoAVLzZsMJY8hCwNWMAS6n2K8tUb6tPwSWUmy7TKS2HvYm4HqUsjd6ksSKKMMM2B",
  "key7": "WZe2g9miZrGyyDf46WEyS7M2mXSdXdJbKNS1r1kZsBqLJmpR5KTJWdR9MGUrxTh52mi1fF5q8ohqWCHwurM2jRx",
  "key8": "5rYLg3Uew311CSGuCjPSxRUWKMJmuQ8UTg18XuZpNBfwKesc71K53bY4tHKQvUu4B3VpBFB3tC2AK2XzYWngwLWu",
  "key9": "3Dpaq746FDg6QLeR9V5erMyUQh7AidzEBzPyS6sPKm4r39h8yWeNLRzjc7GZfUF1JCz9yBrXeasA53XajnhYfbcS",
  "key10": "rU3RZ1Eoy8H483VkzaRFM4L7v28sPYWS3QAdtwMyM7zWUYLnbb1faWr2WwRPQrbXLKADMHVDFWQtGoKtqrRWcJr",
  "key11": "24NzKLkoYsEtAoaK1zHkMUPzmbZNytVgwjTz2tEQ3X8bwQ1Xi31orVshULHhLHu5PhDxyeHw4sMCeC4wsap1McKH",
  "key12": "622DMMtGzqp7UA8kfZkJuAsYct7vyst6rBubi3WE7Ste1cTuGKxPWyxTgfYd8YrsPYHSBHCRPfsbES3DpkUnBnuP",
  "key13": "6KgNEVEBNiJAuYFQXMuuqRC4MW3aeMFSzs1SBgLN1nJpzSmt2U4upDbWeFxb3PATQahko6BiCjMAxWoDcDpGxHk",
  "key14": "3LxTkNGDnmVzbJYUmKj4Cjop11eXgZinMbyYi3XahFpcQy5YFDuh6Amzgw6By9dtE8xHfn1TDzdqdn8kDPdverUw",
  "key15": "DBYU9Atbfo4ECN3riWMGD7D1q8zougwmoNqmsDvASf9X1RPgr52FfQEdzxqVUUpZqXXfRmxUaYg8iMnic8kb2Cd",
  "key16": "5We2gxLq21fQ3tGu14Zwa2XxU2QGFg7oGvNfjhKCESvd1PRgBSZM3JaJ9JNZsFsfCj2oaf2guJA8DsDXFfBfESUh",
  "key17": "5xutcq7zfgq4qdAgKCr8YJXzHU8Pa17CSdbWAFPoD5w9dHbYAYNypkDJ6JtVihfGvGxvMPUQdc8kYnVPwCNpwegW",
  "key18": "3y48HPU7AvkjaL82oMFR9cF625ap2ggyRXzPRr9HiDjgdDkdyRC8QEg1cngec7TemMNNkm88fV8uin1cT1r1NRKS",
  "key19": "2eu3MsJbEnAATRG11kJ4hb5SqaCgzropicdGbCPeEhd1fRmKNwiM6FF3JiEp76rBcVzNznstSeTTdgcm6a1Qj4R3",
  "key20": "7JKhphC1swFPTSjkpbF2VBGpbM6b1QzXyhYZHCDPu1naJ38m8VMPYj1D223bDUHx6cREMJVUCCaCNZ9cQoPYJWY",
  "key21": "4Sz5RpCzrazhL4MrqFeWdJr5JGGQcG6Jj6U4X7CxvRKcxKd53ZB4oUxqFwgog3oQi6fnWMgxFM8MRBTxnKXy25TR",
  "key22": "3qfrL7N6jnwwNQvmxHfgdfQ1vNGgr3HqrnSsRgMWWT2LHwX7Nwyjh2XvDj64SW5zyh8Q1ZhXowMSL5Bc5mv4s5aJ",
  "key23": "5KJtHRHTLH29EZkRoDgdrmTtgW4g28otqA8Nbg4WQUns14RdZsrhW9sK3orvGuhyRu84NrVVD1UDj3VKc98xT5sm",
  "key24": "5dgrcmbsiXREWRALhpt9BadNoNcgJ46Z4ujZXoci1msFyXq8RUpXvLqAR6PedjmHXwcZxULqBCKgr4XejF7cJNhn",
  "key25": "5Uu9BuppFCWvx758izGZgPocVV2fTTj6CxTGkZ7N5NXxTULQqMPMZjfxEJcrMd7bweDwnpLcdHMkzv2U76F1Enve",
  "key26": "GkP3aidYFYS87HkHCZwVdkgii7Q3AjfFj24kHAmfkxCH64CV2AVarNAFqUUSXFVdZkQ8esPfAu8a2nzidgBrUp4",
  "key27": "2hk1eNg4gGq2prHfUmmtfZ8HS1ub7SLnZnLT36XaKe9EmqS8kUjCmN2biRDKggdDwYFUmXvLSVEGwaCV4pBKc6Zv",
  "key28": "4RPFEJe8kqgqjsqEDoVYBsaaNdBX6VhhgsDcQR5hFb1C2LQejas6jKcednYEicaHLCJ5Py6T7d4fnUe9t8mGn1dr",
  "key29": "4GKh8q7vmyzaW9cYsxnsNCpS6ERvhK8wBwbejxy7MN4XsW4RSZZ4JQQPkci2hAS8TYTvM6jcznrrTuRhijkB1YzE",
  "key30": "51uEa51uaTYSDJJhsP4U7LiqavYKYWqvLon1uYoByyrVLEKdpxAKMw66UYzfrLSRReymU9c1tyrx2BDXRiTrpbJo",
  "key31": "27xTNWV8MX4p4CvhmUQhSmMgBovPkofGrq1SYRe1wgwqM4w6SALEVetj7YeL1uqRhjvA7ahv5RWTYLLHAburxmvW",
  "key32": "F16bJqdoH14YfC4VHWgSLSXMidc16NR8iXv4cwzAju1byq7LPt9d8SCqCZAsVeikDW1KFHLEAfngLnXCtrUAoY7",
  "key33": "3ki8HYwPYAzHqtGvAbXgSuzxiKKoWNL8Hn7yV9dypNCXWwhy1FxoybTarcdZUjNn63Pr6aRZsfSi3V4PvBwAopUR",
  "key34": "5KMeJcngBiagrSBmEN5L2f5GYhqZ7WXNpzVCQPGYv2JvXPm32sNMgscyPyv2Q1HuDTKyRp5mYStmV2ZV69N7MkL5",
  "key35": "2AFfCzxmzfdzxdBPbPgtfvoLMp2vDNC1EkD3UrGxpkPErs5jYWKn1JeX8Lgu2S2CdSyxby3ia6CR2B1LWFaavbpV",
  "key36": "5qAXfFP3WW7NFH4zF1YMcvk2xS35YCJa6BHAYn6zsgEGtYRZsK5721pW4KygCWkdFK2xVBoiWS8hSgQNqHfrJ6zF",
  "key37": "5obSSYknpty2wgJmsMuoNMHRRK245e5obi5mzqNMd7dS6RrhBz1enboLURozhqb9t3HRKbjCnP1n9D6FUyWtHCBH",
  "key38": "1zAF3s1QAFJJ9prgn4t2rWVvXBxa3vprpc88k57HSt4JJ6NcGLc4mm7d9kZfgm9TMFuDEn4vP6ASZWRw7jbv4ot",
  "key39": "u9xHbTrMBZjSteaM4PQ9oMWsNoNwiW3yVn22S1U1BSiXA5m8gswJstGNZ1ZuaF6hWsFQnzoY6FxmvHmMnQXX2Vq",
  "key40": "FYXX1WgsnFXXMZm2vCrqfPsASL6qoJJAPpy3c69DK9oZGFF3XtcK1dRC2m5Xt9xKM9iM6AVwna7jXRjuryRCHS8",
  "key41": "3mhk5ZbNZFXnkSxnVLx2PZwrmHqrAkNK8oRvM4T9e6fnDgjM9wB4sbHurEJQ57hzsdny6ABAheof3Wy2Hf1845Vc",
  "key42": "UWTRWvmB46iCNP2w47119GZUCuXTAouXFBSpgVxpGw7xJLCSoqJeUypARdNn2R1oohwGeDhgk5URMwhPNzet9QX",
  "key43": "3eF2nMuUofS7YZxwSJ4WxTwn8TGzdH52ppDb8MfFdZPyT2uAPWD7BsA7mKFdVBriCWwpCbzADRLpjraZkgF7RnNJ",
  "key44": "5iyXGFdUmuVSLSdMhN7KLEkZdrJLnfQwTM5kozVbnXPDbzWRUDUYERcWHLa7Wf8ZKQ34wRR6TqUw2KJwhEzzpHPX",
  "key45": "3SCuDDNnikpGCxaEPTzvAfNocdqVvq374KfoMq2BGebfzEKmQughFriweP2fQgcReyV3R6qTn3pMLezht5nU234b",
  "key46": "4Gh7hieRBPkuEiKp1bKVWE2Buw9fS8SUH5qR9J72TDiXvCRi1FLp5DNBmMfA2HxBUiE1CN2kByn9UHBvAsFc6DUG",
  "key47": "4cyRR61XrhphBcxHrzdeUBkx4mazeuXiASJ4NGSqunW3kn1ewYGercXkDhtCV6YukEg2qJBZ4kgA241k1EVoaJag",
  "key48": "2x3VgZHSKBabgtwJeZfh5adNEj9nRUtd6omak49YWSoGKVWo4wBHLbQ2thQTe79iiVRfPb6eSpUUdJW7C89th4Tk"
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
