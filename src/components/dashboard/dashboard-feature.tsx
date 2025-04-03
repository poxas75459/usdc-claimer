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
    "VvtQyP4q9r2XGyiR67Zgjp2esYf2AU4BCuB4S9qfVHVaJje4YqQbbKLtxzUQBg1iRALJXmAYYP1UbJE68jWUnTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zubDsizrn3sCSwavgsL3cgYw4kjfRtVkToJKtHX9BN5HPqYSec68gei7UeqjovnFdgJ7u6YrmysZLXWzgog7bFV",
  "key1": "54EkWVEnXfkcxfKuyLRMqiM7kPnQfx5pRKf5XGAyaNHTdyHH6yTh8UfULBfSRsLwgwqFPozVy434JBqGi1mmxTeq",
  "key2": "4ZAravnmCjnxUKPZkMnGfnEvwmD9wzfKXYqnSrKbPYvKnayE4kGDeRZrrboJCu7V5wJTmBbLywCeyjfv2L6NoR8S",
  "key3": "2RqPRhX7yGpJhWS3qAqPN4pWn9ypDFXRXrejS9koV87JWC9yrerEM9a3gDT69LFSCAXxiMPtqQHJm4Qzhm2kDYnU",
  "key4": "435YpfoermHyxqAnrfkZSsQ1PbB5WFvwVycs6ewEDoBuQ2vgpw5Zd2GhEbwWZvrmKTyC6gSRRTATENSj1NVzYQ64",
  "key5": "49TFah8U9AEWQi7op9DBwqZLLCAY45TcmYuRmsMjqX76cmR994nNnvg8LggAb498cLeSrMnHczvBtkuV9BpiAsci",
  "key6": "5GiVi7YRJQt1rpA96wS8HsSkMBpGGi8paE31jHuBxD7Tn2uVCdhwr64JQtTagem5N2tG8SJ6zZipP3PeSVDc7sc6",
  "key7": "4U5WNqmuw3NcAGfwqwsWqtEL7tEGRBCiaGFWSHj87NFcMT1fTnTpR732AZzXbmhpbvPAozjawL72k3LkUpAczfrp",
  "key8": "5j6XeGpt1tqPUwD3aUKAgukYDcjgpaB1jy4mBpWTLqgxf9ZgkqohVEDHZ59ynNA7rHt86Ubiz7yKj2qrbULt1gps",
  "key9": "5wdSye2tsFKD68AHqyEmMa5hroyzUosa4Mt6prT7dDKYLAxLzvUJ2PEibxZ5ZPAFWBtDvSFfph5UDZ1KwBBUV2E9",
  "key10": "DEDb6v9ommp8frKwLyWjDXJWxtcXSN5JRfxNvt87Efq7SxJCpm5pruEKYJ8tVjyZiRjP3ArRgvkHV14skvFwVV2",
  "key11": "53ELcrgUYUVKBsq8Ybt4qan9xVNSJ3qGHTw1cALtKkPpFAB95orLH8mDXqUrzMauvCjpwvtz4MUJddregRJFuxYk",
  "key12": "4s3GXnt5DCEEpnoizKiEMhbR87HWZzE35BY2GJGFjinpQDcC9qLVwQjPo88boMXko4Q4KfAUsypqoynVdkjgBxzU",
  "key13": "RS8KE9f47sSHYVf5Birkp5z8JDZmQf1ntxgrzygDodRdjtA9khnKENCGfJzpRKpej5NN89nZSk3kP9xsgGx5fZf",
  "key14": "4b92aXsJQZKxqxKmHfKKVGyHYAHxzWkmLg6pEKxPvHMayfamQHzAxsBTVaeUXygBUZ8FFe1HVpVz7Xzq5eUEZqZR",
  "key15": "5M95uig85WbfcmDZbyc6whrzgqyKpQek5esmKb8G5AiAAiDiN9Men27mHrqFyRm983xPhhf9JYuxMH7prvkqpcJm",
  "key16": "5KQVz8tqWozAWTwMxhFG7Lo4Hf1hiXagAWFwnkgMwojT38wb7Rf4jYc3MnoCfxnSHeX7hHFdwrzahcPv3vnj6FVT",
  "key17": "5Pr89Qser26EqSiBXisjoxu5FFnjLPjuM9axJmCEUh5sLV7eypqun2K3bELtVGYXUEDkYGr211miDY2hgVBBDX8J",
  "key18": "3mxiJH5yeBWof3eVB1W1F5N6jzke9mPJSAhSBZAqyjCBjeT2vNdkSLzxPnfW6tBKA2MhSejagcDjyGwRj8c8Y1w",
  "key19": "4DNV4HhjhGns51yAEQmkc8QNGL4PMc9ZbADaN9WBSHRKWCr75Ct8mfZ9iKYcU3FLPVeajfEK3BMvYTQDXag59wqM",
  "key20": "2EvojFoFVBQVvKQsPo9Rk73fsu4cQzzJDToLQQMnpFPY9WJkDdez9y1uytcQUCZqCwrQViYMEcdgYtBJWnCQg5n2",
  "key21": "31edTXQHNspsnHSfrZ9gxqWyXoisYPhMuaNRB8mhSVMd1TnASpqcuJjVHoB4sjZcYmMq9iDxgs3HC3samXqHAVvq",
  "key22": "4GZ7sjtzVcJoBDhkh4vPVksBFRtcLiayze53nifnf1z7S9CzgrYg1xK2HxNt2zYegaXCZrDTXv8ksqxt1Dx751n1",
  "key23": "63ixUBBvAvZNmCt9jdjCUAp1gbTWEWTvKtJiXZDWRHffUgm5tPJZL2i6GsbyLx9bB93ffV9yh8bYfCrUHDNsrD3R",
  "key24": "2FANtUJxiiwHrWXuQmiKQGHGGrQirb394j3zzGvYctbaRPA5bMGdPa4wZsqQWX2d4qD6od1pMCiiq3wnSREhefyU"
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
