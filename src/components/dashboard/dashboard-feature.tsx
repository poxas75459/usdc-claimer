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
    "txD6q8BE2xidQ6us7FWXa4Fr2rYwZAvKzJCHukinnmLhaCGX4Uwa7Hx3yoijseBXVTZYxJ9L4hP5BZ3zXxWNXRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t5rdH4fNsay8usCHwPc3gNnpSYtBvm7sLh5igJk4CyDn5bKiDLqJ2qjF7A5jvn96ApA41FvpdUHd8qkVVQdRu3a",
  "key1": "rW2m5rWHnodtDzBkMtQu2TFMYZxSWQVkWdw3JfwTKkaV528Wr2Ex2mV9dSveaQsxgdWq3U6Jiz9z6jQMG2oLkye",
  "key2": "4E3ChFSB6wrrFgFgt4UD51LkK9QvvoANqXt7UdndgDAKfy86LHNSPpb882fh4voWpzY7B6F3qHbnaFLyd2kP9wY1",
  "key3": "FGwdpSdwX1xhHdEtxmSmBZBdiDEJtz7gbzEXNMpA71rVEf34K9cdXoHyd4b7tif8gxgwwHK2zGXCdUSwCpgmYBN",
  "key4": "4Zw2bxRTxxJwuM6sg7Yp8SQgkmRFLqYLJK8RHmXp2m2uVGkgMsKzU3yA9KPVng7xAPZ4T3Ett4XFuSKHPUusLnXJ",
  "key5": "4YW3jfv8eVHmC2aS7he7jRHEeyLBK418hhM2T6knizDva2U2XVMDGUUEFt9Dj2Bft6BuB2ppiYQDRrawoTigRsPT",
  "key6": "3QMK88VpVjGvYbp4caCeN2y1u3L1MqwXEts7u49UWtFEL6B8a76oMWseBpKDmmLkHR52HYVP5VWZLTsXYJN4RLwB",
  "key7": "5sMJaKkkWVHam6aWLk2VLmyYPunoiboXdJ5ki92hLtFnuUG8giJhQxabBoUAXeutKPyLafj7X3pnM83iRT92Rxvt",
  "key8": "517ikjFjFhJ3s924cwCky5K9rC6ex6xc1pmRiHWPBqRzdDBcDPGD1HtpNmZJ8J174VmYH5uZjrUi8LWVCrYhsv1g",
  "key9": "5ntKhtSrygfFhdG4JC7fbUYttxeHKw9YGyc77DWFnvENNieoDCG28zxrDEuKjvSgqv5aDGJqMv4VmqFfbNGSSPPp",
  "key10": "RoEq5GSLzYGuUqsavC66zT5jpop2E2gGcdsWMBmojpTny9unm3RULt6HScmLVSRX2rA98XgP5BpWS48jo8mGfX6",
  "key11": "2GEsvEMk8my8eWCdEWhFqNRL91BUQkqfyY17BEHLoxpC2NZBhU9uNaDSZJDKiSCusYkpfnbvTKHG9cuTvtDmmWW6",
  "key12": "AQEnL4tKMKskcAoY5ZytWgTYAG76KjRSBi262bJzqeYBDgnqxfnWycLRh3Mvgciq8MU6jh6obCskGHj6BxaT4wA",
  "key13": "ENe9vrL86QLyjvVmi3sroRTLMgxZZUpomyJZqxXq2mKt1V4zBtSFVdenAWDnWRsXswf2HkxMGvK8MALDrVbD46c",
  "key14": "2e8kvznRmHH12GQC9moxYuY3Czno9dENsEX9ogQ7EJ9ytnYWoH8BMtxP9EWDWn9q8P3saRyeibbPCqbqM9ZeDn5J",
  "key15": "3WmjSPasV8ZLrrMs4xchjgfw2twTPDMTbiXsE1i8LwUL76YoQ8UJTAvvbCTzQ118tjsWVQnRNQ8knjRxSc3y2SYX",
  "key16": "4ayeQqnsJg7yyYyPTCbFTSPSEGc9xzh6BbMAEdiCFt8pou2cZE53HLZqBanbCTTDiXVHKSQ2SmqGT334pisqsdZe",
  "key17": "5yeEC9oKpVbYEAGJ7dYU1cYkXMaQSVkC1SWfvEV3PmL8a67NfVwKbT6wx9813qcjtBuUK9gHnAeMVWGxnVQutk2f",
  "key18": "7xm6gWtf1emgAP9S9UgnPGw51LHyA5dfqCwtdRDFEbkPELLJpXvz9MnuFTyHixZVmE85GTcrupX6nX1HKaKii8x",
  "key19": "44ytei2on8a15fLiz5iDggrsJ7qPSpD1oqyEarj17Km1WfhRgf5Eu8V3CptqquYYZpAwsVtmt92QNDjtjgufGty7",
  "key20": "Kj8P4WCUj5x5hc2eMdpKSdbGW6wme9ZnZPT1FCJ2mvDXthPFtPB8uEwFx5ZkmXoKwAk43pURqZhLABdPBVgqH99",
  "key21": "59MzkWqSqsoFReWaPGx6ULG9x8GwDamgt3uUnFB9v6pFobNcDtszHBCFnRdg7mEfszt6Wka1siuMvbEdQ6bC1zZ2",
  "key22": "4u1WytuSQbZtRVbjz2XLqWEwEnjZzixsBXfgxHt31DpyJaXJ4ifgUugSt2siPy2p6Z7qkCn2Sx1fLkNvAAijg5GD",
  "key23": "61JaDPBKNqG6HHiXf3P5MoveP7Z1x5dGMRDCSVUpd1ie4fwTUhSkZGbnXwxQcFX49P4AUqy2zzSn7yYZUDRgLxWd",
  "key24": "2VdrPmLAhymdRT3kwgAUDSZQ2EU9e2gi5HeRDJUyanf5n6nvYAqYHMu5c5AQRw3Fk6AU62GcRMVWM62ac3622QXi",
  "key25": "4K6z1skHQVaZ7Md3c9Qeqmk62AhNBwuctA3fgbbsiLWdqB1vkMY3LQ9eZpPXGUyL4Nsdy8mbmFtc4Rrhu3rPCU2Q",
  "key26": "5oHvgT9iiUGo1sSDZv2qNjwjGumZeYr9vnBrHG3Dav2LsoMAAikQuEns64knvWdDueK74o6uT6KuwqTdD2DzQhJJ",
  "key27": "56LHcCq58nFVw61DfuNfBTbHyv4J1Q7z1WkNqNkEufpHVpBJLbcXfQ5f88o6GJUrXVd6aBgwd2EvZ2KtfNG5LDzw",
  "key28": "33v9tcpmHec1297a77Nbe2dMwMZjWiN22FViueNJZZXZN4ME8wpeFF16yHcYh7PWJXHu9fFo4hzAcy2LNsT6gYQF"
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
