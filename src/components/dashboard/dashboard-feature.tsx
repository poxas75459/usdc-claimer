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
    "5R35dLk2KCWWkbTTAXsujAvZZQLGE4UFhxa8bcB67GUMP7u7Ms1yWs6XVhHqLjGxh7fxo2uiV5RHbHDuHBHemrqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36epMqjnHN91Q6dLVDpQcVc6h4pVN1kCbeQpegsmzSDMEs3eRDUBHUSnTbo7RpRQeJn7DXWEnhP4B81GYdAfazqu",
  "key1": "XU3aD3Ltp9z14MqDqGfUC8etADN2H4rk224T4J2UpWz1aAWiaCLs5vEZ57r2id7nuya1R94WFQTRWP8LauF5Uu1",
  "key2": "1N9dvr3k1FdhXmDx5DspG9tAvTQPzjxJ7kwxPHCex9Cfi3qH3Ubpxqqvy9JD9e1bvHBQmqbRNMWjrV2hEmsF2re",
  "key3": "5A3QsgTrsvvXt15ddihF4oVRbJsbcc2hbccfLsoLqTDX9QZTgKz5crpKFJhugibDzZDA4osoRL94aqkDkt9pTyZH",
  "key4": "4dJ6AXFziN4DJEbkCu5dZBxtonN2nSWiHtDU93ZNPo4FBMwxFSdBkvoFAq76MeRuwT72oRwhDpH887myeP3pqUh8",
  "key5": "6ZS5ytA8JHJWRxzWHCBobrxHCYrzZxgzsBoAuDeoYuXAAyu6be8MPs3qQySuxYyrmgM4xo2FAhHKe6VKHY5wm32",
  "key6": "2MitYoHCRMf69Lq6cY6XPkWEKYdDTXdQqsqnz11UcYSN5nv7JwAtHvdXEnvEoAYVwaE9WuKQGV5MFRCx2G8t57hb",
  "key7": "5Q2QGsx2Ga2vzWfDDzMEiBSvmTDdc2JocXCAC5wpk8SpRLMWyxFkRXLRHDurK3PSDrhahxBbqZkznGLoBrpCLTuT",
  "key8": "2EE4NSnhMBfSySYtzGgaQk64JgTo68A1m4NPxpnCTQ9vsDbpF57gcUANKcjJvdjzyVB5gZmMqctwAA4N3eCroaaE",
  "key9": "5MZfz4vE96vgNZRiEPbYZ8uzUFRtDanAtrQRSNP3vNyQs1Ui2rQd2qRC1m9fUcrrsmrfm685iChb4ZCHgdQFUFbc",
  "key10": "3RZfkCaUPiLZmxUPMdXYcY1GCQCr3LB2xQCbaH5gJz8UVDSYU87LHnWVreAiTcgGS6hZhwJxNhyHaTjuhJVdcFKL",
  "key11": "4cFezU4SqWp2v7XQeyeHQ6pCwYqiyzCPFdk9CekWm6BV2mPxkELY1coviSJqU4QYmVn3rxVmEww4MX1QuKWVDieg",
  "key12": "3q5LBhxjTrBoaBKE3Nvam7FAAVTnF3cU2mvRdc1H4djNS9RpYj6tjBYu11GtQVPkAgQ8WhBa99m1XRj8U3EW5LBn",
  "key13": "AzfUdxKPWDwLNzK7FHUjcCcsBH87Uy4W5zLRqeKqjR5nSbW8oawn42eJhVy9whJ9LP3pxXmD8A6LEkGfWSpbER9",
  "key14": "2AZbpjWVEtbqqbFQmwyEv6noC8RxxB2j2Cj8nTdtWncXheoC9BTbDLXJDSH3ThRmoACYewriufHFok2aytDyAcgw",
  "key15": "W52ScSwusCncyLrHX6F2o67UriY21Z9VktBjNya1pKWq22k6Cq5Z4xyShddJXqGXmvNzwX3dRHPB1SwfWHjQZf4",
  "key16": "WpE8KS42cdnWnSdC6QT8zmgUgw12bpq7dxbALVjQpXZwQrSGMM5QtZkBnaaDjsGeBvHU3Gf8DzEtvKEL3Yq5cuQ",
  "key17": "3PpanibkUrxFrEqg4kC6C6E3YgotdFHY6NpGHNP9n5TykeWXaFdbzsceopq9numcXpLXBm6Tz4NwgzpLaaPyN8XL",
  "key18": "2TZXmQQcc4nzdce7jaASCTfwD2auF6VF8w7dy5muWAnA972TTZfs52QWVjbW6RRnMhAK2wCKxtZu4ZsAQo1TFhC8",
  "key19": "4EXwDUTW2bPGqfpKNzMqkk6RkwyuvVUz4Sx99hS7gr9Sc1NuHKnrEHvKW9nNhupi16bPiMGbSY4wz8LJrcdtKHit",
  "key20": "5QbpLibwAcd7CxAEDSc87phqRj1Y2bqn1m1Y1zqpSuk193hZx7iFnLJzQcQMeK4HEbzy8vZT2xqf7KCTdsuKzmYK",
  "key21": "2czK4apYGcmGj7MZuoSKuEpXGTeVBmjx3a2twZv7U6ukpoQD4Uxn8D81nANJHp2cPCbbihA5RKFKAAuTQJAmZwcV",
  "key22": "5v6JDafH9sjnNHFx1xhH6H2oBy31akeSNYZkxqqfFVFNXJ3Z89edKqgspdiq2pfxP1pryCCUX5CTWByZXsbRgPWh",
  "key23": "2ZNmc3GEycHLfs5cQSNFVA5ePNDdtH5wZVcivA35ETVVvJow5UeD84ocvZy2yYBjd2A4EvyNTBPdCRsLZYBxpRP9",
  "key24": "5wwZfK3yLSHpD9Bm3BVoozVP5JcD4Z3PByNUabt2P1yifYqxzw1xNPTXFAW4eB1CBzhY6H85vjmwtPavcyHnEWEz",
  "key25": "2ovYnHPP8MnS1QFyfB47iAvBtGqphNRgq262MLXbPduRtxwQsMpfySR2sBcQLukbNwgeHZ6tjvRDrXcGZWqwMPMx",
  "key26": "28hyCt4qTkvnKF3Sf8LRSHt4BSt4VUsAmUsUmZ48Q7nBFBQKKxLnW9keVdN7fnGtWsPz1WC26SvTbzZymJavuRHc",
  "key27": "2ZM3NaAs4AbYujZkmRHwKSuwtqPL9cY9Z2ue43csXkXrKvLmtNKTnqHB1Kk5ZX6WWMRsM1NPac3PCsp9chgXGkbp",
  "key28": "2VUPdBMW267WHPYNYB5PUT3fDuZ1RxqAJScEaEA3F5Fac2Gg7Xx2qvdaXuJaf7fc3qhNpvVZKb9Y6a81Lp7QMPw9",
  "key29": "sWh4wPjhqoz6JrWjDkbhCWjpWw8tJA4NC96QnpKTqqfptjXHsmmJudGuK99eLPAq1yn3W6REYQvs22CdXAEzxWL",
  "key30": "4Q8dqdGRAQ3egDZF3wbrJRMCf2xw4mKQ2bD3wKAVREjLLhJ23W8hEeCsunhvWuyyL1ZT77oQVkiVAd6XJYVsP9vv",
  "key31": "5hiz8sYFLV1umVZbYfJHm2pR1ohgBsdhVCv8cPFwtkvg76RdQvhrrMnMjvJNqRUdziaM3gN3Vqddmm8CaVJUWVvR",
  "key32": "4JycdXgmRkLgYk8H1bbjoUkXaEfm8bSgByRoKufHenk3XJRZv7gGHk2yHUJS7dgfGwomjoNVvq9rccn4rDy2mi7h",
  "key33": "3yrxTtHvAHa4q7hGcaMw74hfrEbGDSHhbAB2L1MUiATMgY8DRyvkCHjGVLfbXNSqDzzyGUowikHyDyxTuWWC1ZkF",
  "key34": "gZcanbCqriYWEDGUNGk2gzUrqsSGxmRgRo5rcB4TZhV2eayDpSpBVSAATWTG3Vp1qmq5LCkhuW6SrnkazY66jPM",
  "key35": "8bRCcmcnZarZnSD34YLByr2saGHBsQPDd44f6UufqzvvxAYxLmx8aDpc3ey2k4wXZSoqRv1yAWVxDjVLbNoGgsE",
  "key36": "4PyADELVbzU3QDkAzbXyr9GyycCo1WQLJdX3qMStsA5q54TvbTxmLAJKRnomag4dLVrjnX34qnBSuqAanBGMebbp",
  "key37": "56XXkJcLmVXBRBGoC74TLXXqJpLaVq9BPcbWVKHbTiFuE8NAfahzKNNMvRLACtAujZP3iR7FQ6biSRkd5PSyN8nw",
  "key38": "4Rqntz2FBreHKEvGCRJ9EshK157xkieRYX3CAvCCNnDQWaQ1JCd2B37inSSZe8xrvCwdSsmdKEfNQoiNUR1RKkbG",
  "key39": "5hQFSCnRQn9hDphwBQE2rgPeyZ52QMCe2Be3sbwzveh6isrPmSCuN1rLZAVRPx2LG77TGCYp76cDtBedWSebeSvf",
  "key40": "3Vdx9UZw8Hb4fKVHfHJ2k9qnSZbPXRSkMsG9TE4PcSUt8Xef8qVJ7QFnhYUL1wPE4yEf9SPhEA9JLjA6DisizNDi"
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
