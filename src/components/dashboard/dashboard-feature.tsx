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
    "29Z5YwfWmKpTVQb5rgdLGo3SnG3691r4NYPRgMsg1bJBRFpVX5wDj83zb5r5a6vGXvBgvRccYEcVPgaCcpEbbTyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GGTo95zXg2rj8MnwFYwz3yikUkUz377dCnAceNdKLZK6KSMsidvi9zh6qt7HNPqXY2quBptcY8sQLPpKDTj7p4X",
  "key1": "3sbZWjmy7v1zFkwrLV1iw8xAGyz5sABZq3kUHKHiPNRhSTuzkJTXv1AjMeHAqSyuVVhV1jZ4tWZEvdx53kna5hkc",
  "key2": "5caU8AWy5K1kMo3VTok3v41Luik2jkZZN7Dgq8nsLQAMNE5jEAxvPUR19YUkM3CRionDWzfXJj9Vn9tyzCYioYpi",
  "key3": "2T3kyr84DDAEbNyHaqc2wF9PXuYjtRJfXEEMEjVWpNHP536Ch3TP14EbFTHgGpcCftTW36upQG6mRsWVergYMLGe",
  "key4": "58YEVgHEgN4mqFiBPH7N4VC1iXH8sSXix8K7ZFH8Fk69WffPV7QiXAyw8HPRuYLxShC6CkfG8uj2ZJCxDFyDWnQo",
  "key5": "5BgxktHR2Jeq7irJPyzFVxqtDWvrmD2bgx8G83eCW5xPjBcZWEo7DWRdGHzTLakNmND4G51ZHWpnRQ88omT8WvhW",
  "key6": "4pN4QN5N4ctNYshcjv6GeqamtJzRNLCTUUscD4aNZqEJaQpk3sSuA6HLDuMqnWLr2yHYqo6JqRkhy8L8R7ot7ifh",
  "key7": "41qzamoN8MJfdqvMHwk3sUKkMfsaYyXr5K7dsjgVMAEhWLBuRcktyaEpqLLQz7YcRQVH2oFyWo2dbC7mj6wFpGD8",
  "key8": "3oWfdXTwDcSqR7xJTUpzZuourS4SW6uWrNGTWeYuRKr3esdjFkBcKF1xbjnyKXoFbJfvCs8r1ZdKT2oyEsd5aSWa",
  "key9": "5saZAxaNYf3JfgXdWZMqG1Dz43ckCebv2tsjt6uPJYwPECBrapF4hiZqMYJbYPxKdvpQHAwK8o6zKumnSi4FH9Eg",
  "key10": "39XHVU5pCw5nD9W6Tv16SvdwpZRNUA1dey7hUwZpU2jvYWhFCo5A8dvk194FWZ5xeKc78paj5KoJiTkpHxTvnUBz",
  "key11": "2beu5FKCVvcVELGP2BsnhHDLGSgGsSSy2eUzf2QBYFGNtP2WLsgyYmdCyNohd3uZmHz9mKePcsES554ds7HzDCSk",
  "key12": "44FFC2g7bLJZjdYFFUydJxzf4T2HxyKHLCWnbjp4kqEo5K7j87wUUVtb527vqDztaNaUjXmVVcKQ3T9hdDH4JxJf",
  "key13": "3X36je6R5HWWrk5rXaPDqWxpvxYDuiXcxeq85WqRyfao8Qaj1gLDA6rBwVmguRW9my1AYyfZCfwkUx4V4XNSAbEH",
  "key14": "3AFd8o5S4DoFaSJTeUzVpJW5EygeZ7kep1ne9J3PabamK5kBQuRF8jEsMLohZubfYr9XTHviuHFt9MjD7XYMLjXR",
  "key15": "LDswpMMUTWp3vXcQWVdrCWseJeDwwoNd7o42RY65ocPnU7nvrDR4F8E8zybcB12XazgcWcKBPR4cPxJjnkpHmKr",
  "key16": "uQUSPmC8Bb1v8jdjoApc3sA1CnGCapTppGM8oGF4xengUpLKu4wiPuVirCQSZSwfQPyvZDhEZ1TnjgLPUyWzEcq",
  "key17": "3muSSfJJaV1WrfMJDAN33cFade8yZVeeaGYPXNwXQHevhrrH2PRGgfDgc6cpShHyYd1KqU43KCWLD8pSG7abX8s1",
  "key18": "5zbd5HjuibBgugtPg4Fro2pgY72CYUuPVqamsHzkQbzqASSRBRxMQ6pttnXPg4LMyXUvEwRfSf5R4RBm1FSMM2yz",
  "key19": "43MfSRoU1BwuuV778m9Kg3PCV8MDgjQZpCuwFHpnNS37KH4Qc7KLpBbH28aBYvypy79fqaSEciF8KNZEa4FauLkD",
  "key20": "4UELFhWZvk2JkSvjvuBg82widEoWNcxFdVGXSRaQJrfrMNnL8mteZk3osme4JNB4cw1eZLiyBV8TxxHcXaqwPx6Q",
  "key21": "thJprcVx64s33EGNxrrRrajbhgC63VDFpG6SfQqYsFjbPstkzCpXNwuf8Gd13tBi4ppt8Afw8vCngj5KME1j6wt",
  "key22": "4o9Bdc1HfXALBGEnShwkaUAToM7DQKBYpPAS2ZXTQm4CMfNNzvxumDghGR1K8YX8hHhd6tMtvy6y6YhsNYkASGrM",
  "key23": "3VFrsSgKL87UYGCCdXQneSyPhqFkhF2MnduXQKbK14VG9mTpzoAMqwJaC8VKExakNAGtBpnBKvfPPq2t9QsNVbeX",
  "key24": "4Z9J9YeZAffJPXH1j5DUgkRoNtXFB1BDEvkX4fuwzq9BU3MEmYWMGtM88R2sCw2nMXQ9Wz2LFk3nsgivHzRmhgji",
  "key25": "3xeysU5pndc4jwtJwsnwA5mF1K5M25jqhFM8zY3LfwqpAtS2Tcq87SbX3Km24PrhJdLMNUSemAYP7cXcnQXjSKH2",
  "key26": "4ZNqNVqQV3kw3HtXnHzaXnmCyEM7U8V89TaS9pmH26pvUVyAsKgwPJCV9gCQLgQnzvA7fcJxVL3jz7LRL535gky3",
  "key27": "3rLktxTiHkbw56uoprDyYHrPWe27AzMD4bDV1cvua6tBNcNYgifVoaxBXGVgWuFqCnqa4d2dKaRKYTgLzqSPC7yy",
  "key28": "39Qy8hqmhMXxtP52XHJ1g131VpYaY56NUVuj2otAGXkwfhcsgJgQdFadPdQfLMdSWiS7KGzfSAYUDjTk6ZLEUs9a",
  "key29": "ySdrRBRvGHmEWSqCazDWvoiSBoPaN5wpCD3EdwRspnBjaTc2P7rAkVwLg12ktYtw3F6PEA5A72dQo3VBw8sfwkd",
  "key30": "2UbuD2hwWKxV3y37cPfNaLvM7VPWHMVRYV85UMeUQjsbse8ortWiB8eRsidqJD5Ub4o6n3D8AAT1GqgfzWJ56o1m",
  "key31": "575iBQS7VF54hhUwDfajbWaxdxYJtm6eNheWowoNuZ1AFfvMMpfPpuVXPnd3k3oc5xoVBH2UfZiQeYTSfdxn94g3",
  "key32": "479jVFQoDhV8NR9iB5Y9yX6G35ecRXFErBQYB13VUVcbjuMVcZY1Jbo26uyCudTYXQbHy9hS27dvr9xLCevhQQaQ",
  "key33": "SAqfqbKCeuXVHksqHN3Mc7ZE7HqPzqwYv9uTMnEno3hWxfxUZoA8w2e98rzorvhFb46FfCMnZVDYKpoznQqz1Yu",
  "key34": "5P9NbygWLPc33ufuw7zKgLnQctLPZKJLknJafvbtA9zTqomqbfks3EYouvsoaDSToNJMF6YEt2CDUE3grWfcTKMS",
  "key35": "5rG5sPkZWJvYQYuJzoi86WD6QcCr4JwTBsWnhvW96A9enQtaeNkiV3XZLnmaLU7zJdRiHG6Goe8H3R2nRHPCaosc",
  "key36": "3VHY7xNTgP1qbv6wJtgytj2Kyw3KRFvANPKqHXKyvhnFm4HnEzAuq4qqmfdAvUZmjVRtvS2NNdcAb1wHE51H4Erx",
  "key37": "kwCta7hJ1yxHMmYvhmfwS3TJ7qyPQu4vRLoLjadncqzQujQs4eaZh4op1Kqg4NM26wWZABwXdJzQgwQ9jjoLrnZ"
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
