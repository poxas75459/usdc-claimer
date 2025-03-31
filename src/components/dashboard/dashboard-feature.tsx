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
    "K3pDv6GqZrjNwftfAAJYjwH2eTrTwQYXhkuLYRrVgUo7LfZCWyYdZ6GWPG7QPFvBCiwoZMFhyTaGf5nHqe95DYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gB71A8oGQC3V7smwUrs6Hf5LS3CofWt8XqVafC85Uy6Rh2y6Cvoow9k1h5JvJdXryosBLpBUT51D1EPsTzgrtRf",
  "key1": "33Kiu8BFHUbf3V115TZRiESjVVE5BtKXaS5mJwqxSQoPe1V3YRipmp9NBVXmTNSNHdRivaAaGwX9mmCfRt2bo8Jc",
  "key2": "4C5jrjcTGiboXRtzKjFD4RGXKH612m1anwkFZijXhdYUmpSUkPUGMyvEKPJXX6BHpBpabFFCa4a1Bk9h7qoymzAW",
  "key3": "3FF6ndTvR1zNFn48DMuXcfmbQLgUiVD8voczNcJhZSSG4cbVcDYvnkQcsHiLYDYwSq2AgTu15HYLpZSMgeXpoyV4",
  "key4": "5HfSVe6ea8cTkUqNY4ZG7o6mGo7RaDBDW6pi4LSAwHEYXQXp12bXAZnkvn6TxguervXH6M6xwQcJSKeBoaZ7MQ4u",
  "key5": "4598QorQvmifDUb7Cm4uybPJvhf2UrUS5HgDmm8VqEwVieqf6zJYJjsn31bhbKn9L1bV7wsTQAeWH3Qhd7mYMbi8",
  "key6": "5wKcdMFnLw8VqJuJQCvefL8LC9Us6zaqMXKhXzopb2jpaXRxx6KhGa1ZZNxdkG8uvJP8YDXh1nNrrkLvBegioFKH",
  "key7": "BiWkYdPrYuhGo7EwcH4XfGEVGENQqKp4BiUoas7KB5Kri3QnTKw1XMBkM9gnMiosh2iaR5qPdTDkyiuJrm8Pn4o",
  "key8": "2YHtCFTAzF8Bv9ogdqJuUFPcxkiYkzVL32tBvNz4zKyHU7D1VXD4PWpwiAVadD3iTdguzuAFQ3v3YjJ9LmuGhi9m",
  "key9": "3ztC7rYRawjLZpwjrLmoPk7AGyyhYSLg2wfNdmRQQEMohXPhErXSzZdisweRQVnD6n4wvQ1hqXh2gPcn5vi6XZSi",
  "key10": "4VsE5XVK49JtLU8vaLeav3mKXz9ep3FepdraDsbXtFFn2Gyjn8DYfQkRN8bGrKnVeeLPXtbjEG4QRDqfGjpEojwc",
  "key11": "5WeC2pFfC7mffABmgeyDDCqhpiacsafHg5ZMaCrTUaynrmF5JFbV5Y1DWnzK4b2oNQR7MAvVz4RWcptq4r6UBYeu",
  "key12": "5VZ4ftjhJkp4iCowfgEQW5ieUDNpyagKZedoAZbY9JM1vpE1CNCvGaSNR1daaBZTYEPnMWCTpz9pzg6tvWPYK2ZH",
  "key13": "3SbxmDswutKzvbESSFY9AwiHRxFbVkcDpkHVMqDfn6Zo3a1q2CWtu96vnqa9nmdNwgw6Jsd2XDyLANPE3MdXrq9F",
  "key14": "5dr9Yk8iRfWe8Tr4PFttfx9uNxfAWC5yNXxmP5wL9B7rP7TdV9MbXrLrSDEyhWadJqCkBhs9gzKANxugyu3stQAy",
  "key15": "RB8cA4BvCdzh7M7uAQFhDY5uyny9Jor5GoyNyWHUrdxzbxR58X4a5kNHnsdYGEdtwSfV7pRJfGsYTCrGLDHt3DW",
  "key16": "PhctMvasU5PXgrBngP5htRDwNSVGmDD7eNX6DUFzxmCWipd6D4fCYYzeFgceVHzwDsJxmjQurDvvf9UZL3tnA24",
  "key17": "4pwVSz81HjmJ2FHRMXy2pTAnap4d1YFxrKpy38nFtrCvwsDEGNmu9s9G4SwauvxkibswCJax5PHddnvYxo7DtfnM",
  "key18": "2cPfhui1GKG9em9p2scNTRksAaFyuzcpv6tE2B6HdecREPoxNWrEdcz2pwoXWCo398jQ38VQXHuoRf5inzTtegSN",
  "key19": "BHCwAcPtBwv9y5gZadW3KbKyqFpLoLVwbam5hvhx5rZgECabqCvbT38DhAMgcYNwvg6UYj7P7hoSFEWNP5JVsm9",
  "key20": "3Q5zjQzedNSRvuboPZ8aw4wu6Qg6nq4FNkv9zgCdMkiBcJNMKwjyga8tNWqxqenVchNRCz2kdL5Y241ASaksLxyQ",
  "key21": "4KGpaCeP3xgNc4Gzt9EKZkp7ubftyreR46AfAMwMBDHSnzTcf32tpUmhSKgvj1Fhsk3TjSZYAfPWi57F1B9QTVdP",
  "key22": "RpmmwoZKsv3evhyuUKmH99ADNsot7VFJuLVZrGiGBnX2BxVkXvYik77Q8tx596B9dHKhkfGdQffX9pD6kZCEXfm",
  "key23": "3WUnZ1xCn3WSBJvq7VxWPUKrzLwk5yritKDaYDYTHHX72U7EpSNCMsW66iad8fQsDmqfVGw3adBKSo6mySZQYwTc",
  "key24": "3bpAJDERC7tViiBGzhEMCaDE5RdxnS4Aj52jhsbqDcUVgwN5LYQWgNK3sYzSgWJWfQmHvszSHpirJJp2HhvHWfmm",
  "key25": "5kXxDoMhzEzENAyX9RaScBfBtsdbrrr8V8HEzFUedrDHCK8vt3t38fWSz6xg8GeNfUgoTTLtZ34r9zCrCaXjGVpU",
  "key26": "6TE5AqzhzfhipLsWPXVDVNMTZ24v3RTYoD7nxwXtA6e3PkmcG9udxydXyEVaccNrzN66oHjQEJFKUk8UaS7gFzc",
  "key27": "67XNMR6ybhyM3rMwaz3AD5is7bhtDvBuwy2AUzLk1GL5SmCGjgqemrsnhACPBJdt7jdV4qUuq6eeKyS1utUjVbLJ",
  "key28": "4HNii6qzAV3iJWeowWubXfLZX15EPoiTntS99X2HqiK3BYsLGxcECKrxcdVUfGbKSpLWQYfiY7MZaiwktd3fJwdr",
  "key29": "2VZftbfLcXDRw9AwXHBkfhxzYtXjBfGeujj23a5EHe8hL7kknsS2YNUiJmF2T2Ph5r9E3Qmhf2uRonT4yrFLd7rM",
  "key30": "4R1H8g1joH7EhXJrPURKpz7K6L7PiHpEBqJSLZv6T7je9z4vcFfcvyazKpQXmHdcieobvEZJW5vpCBXEgjKUEwWT",
  "key31": "3DXAxEyT3J2HmWWHzLDw89JW9kFWyR2ujUPz19EvzCiNKV1VcyHS2NT6mHeMATfDUhd8DvG5sSKkMDnPBAczyMwn",
  "key32": "5Bv4urFzxFdEBBNU9KCqB8knjY6hQZNvAEfW836v8gkVAYHBcWji5KC24bvd8z2YvayuzCihWBZs24XfMFy2VWxD",
  "key33": "39tSA2g6bnAWHvorA8m7j7tCSny88dk2C6xpyrqoGvq3Pm2x6FPwNBDc8ptT1a6L6zSzSJHwv3bx92BgjUVv3HL4",
  "key34": "2RoPbpr28W9XE2vMdjo72PuuwdDPNQVNV5F1yhefDCn1yZQTSx5DCPgUmq6cUj7qdsCq1jUyyBsYRUzdhYgy4UJ3",
  "key35": "4Jh1Bse2fSmBYLd3cB466yRc4iRDdnv6UYMNukA3q5MQmmuL7jetLYSCMDBXtLjfESuJeEytAhSyojMm85x1Vu5y",
  "key36": "21fe1u7voqGPDT6U31btoHKmn1ccraRvT7NE5QAWLcL3NUK4b2UQb1e1CyGeCoLncyVWAq3aPfks2fDsrBowYPfm",
  "key37": "565VYgrjwUw9q4dqQhyJq7PwfaBAVCook3p9E7MbVoGuGHNnKS3xvnSSRVn9ftLJvtsQbM6jCfinVbQj9cJN5wrs",
  "key38": "4DAzrA6HbyrCaSbNwy7wnAgzHkTXw6wVoAyTzJuVqFNGwM3zFEzhdXJhqPoyt97ECH29ZYWEHmNnTxgyzujWJJtZ",
  "key39": "2ibgVm4WcvRtjSaUfz7byh6Q7PvxcPrE68GFxa6adkBbGhgFgQQQyXLkQ4Zx4F4Ef9TPaqtuVR4Fu4TH2ix2F7y1",
  "key40": "BUGjgbCRZVsCnNw5c6YAu5gp9gYCwbgiTAcjM4p5hiHdkuLEfRmtkvdKMQqXzzLC51ACR8cEAoeca2UjmVNKv2q",
  "key41": "44g6SrTzqhQ5a4vqeX1BuZnz4Ayryw7VK8VtzDVyX9ZV254QqSdq45QnUbLVXErMWPUrQXx41DisULQ8BjEKTGeg",
  "key42": "3esLvzWKQZBt11UUrNSnW1jfxcJsFsypuGzw3QfnnmBmu2qZ64z4jwJ8JreJfJfS1RmHiyR9e9efBafWDK4HCfrP"
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
