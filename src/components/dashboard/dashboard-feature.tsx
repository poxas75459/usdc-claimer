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
    "285YcKbuPEfipKv7kiv2ghg5k6WBj1uM1itM6adZjzrrnEiWkrnB6EgAMDmqQv4xZGwwPQapEMYjQWBr4cyWXW3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61FTVraJsYT9KRcbSsd3oGPifpnYt2wtUE2YKk6MTFj3K8zBzkiQWauP3XmSeL8yHY1oi4MDff4vBaAJ231Bqs9w",
  "key1": "44MmXeLQPD6uQ1acCVUucxdYWZ7v7RHeCKFQrDm5XNfhPFydAe9ioxi2xjtyCJ1mnUp2t2vgU5xS4AyHT7yM3ddH",
  "key2": "3KFPC5tziusU7Vg7MXzhVWrc2WcESnXPVcCPWWAidsaJWodwuaDTrKvBp77DjqHv2ZcrZQbFG1rPS8D6VVMuGyVn",
  "key3": "5H26ZcsB6Gn1deZa9rKa6GdoT9iWSxYmGc1gEtsdC1cgxurQfWHPJZWWM8hg9gCQSNM3JTKPaikiGyxGL9T2qvLo",
  "key4": "c9dSsBRx37XQAZ4uwyvyqJA9MZTABYrmE36hxB2eRop7WBSHix65LefKnd2EatGfZZLwiSdz4Y46rqGXjLX9fpq",
  "key5": "5kBw8ugBnc7sGyViuFrhFUbPi3SP3PEY7uuX5ViurMLBPaN6Bjb3CCiZJfAxrAwL4QjWZfUdxrsTjZUcFysgQk5S",
  "key6": "2CmxWQaFFzxMXdZ9Kb6PcpWfPC4QnGuE1LAyUV9wjxfTw1BkXvtCu8p4jhSy8AStMY4WkkABvzaPHmPr6e6JXMyZ",
  "key7": "gh6VU9zoHuYUik7GwjBfoUgXw8h3Vw1iaR4une4GLUgD84KFjpuESEQ2i5CsgHZeS7RGiUC3j5CtnNh4Mpj46Au",
  "key8": "3GJxFXPeDxtmHgGZY7nfnrt6Ymp9nKuFzWak4kBgjZmtmBjiBsGEqEdqqLfx1Suy187igzya6xaQXny3ig6zoRG2",
  "key9": "3hYy8i2xTUvJERT5UhUaAEvfME65S8JwkMzqqXRKMy9HDecWR8GAsFMMbM1CQB9rWbG3YmRsJBAqpnLLHXPVEH3Q",
  "key10": "3n7T2EiaSjbtykKHNGciqYa5awwsmtJDnYMmfw7S1tk1kEABy6eQCBDMgsWhqisjDCFK91m2mpNcEFZkEh9nqdCy",
  "key11": "q6Vi6qekWaWDgytHWeUW46qsuNs8C4E9h4ta4Um2Kt4zruMysjxiUqdndwDt4BGG3XiPNPHKKjGMSG7raMsJjrF",
  "key12": "4HVJc9FF4jB2nYrWMsCSQ6dPPoaRazd7UQh7DFuqsoKt9zdYruhKPRjbyiEcDmVBo8uUnMHz9W5P94uMtgbfK9j3",
  "key13": "2W7mUASnLB9SEVDLxSi8khjCooyQP9CGFHy4Q5y2LJsSDhvedC71H5WH6FJysztPKFBhy7CiE9KgKptRSD34K6jE",
  "key14": "25ostuv7XByzigh9gVhrn1zXQUYuTUQxy4HKEy1k4thpGumDGXHTvP7iptvT3z9AKzitynTha3Ei3z38MHGcsDC6",
  "key15": "2KyhFoqo3EpiFHn77kAXHTQV4nG9HcXnefhaa4B2FaVcA3P9dDxZ3YGVBs1Q3u9n45R5W4pX7dhbEnWW9CqaUVbN",
  "key16": "3YxKVYfErbUrXj1wLrxQMTHgh38zTfgsf85fGB1ddT1kXePzchGUHLQmPL51Ws3pbi97Hs3ph5MFMHGJDXttBeVx",
  "key17": "2scPTWsDG4kT36UABp83abYLiJds593wNPhTDSoQVHhw1GsLwaW7kfCF6thvhxjuMfN591mPd9LhfdCMcgqj1uJA",
  "key18": "4a2Gh27u3iK1pmpwMMGuUDc1hs5T4BLFo3AZ1hiVAbYpjUAVn7Zf2HxCvEcCbKRmuBcKZAFHBbxtxEUvyo2fj5yF",
  "key19": "3JjCpDws9LtZZZfsYMWypA6d22RPosaHmpVNeG6xGDPKsdV6fQpJt1ZyXdVAYrRM7E74uN53A3ii9EhaFKJmNd9j",
  "key20": "3in7dsamx7jHmB2Mns1YuCNvBNYGboMor3KzRJL7dsBRM2Srrt7DihGZd9iR55arBUTUpfVbQU8Jb3bS6Lvm7rG",
  "key21": "2Y9A9KzFXeqXWckWsmvc3sGTnh5GqUPMo7YZhLeLA75dYnjv5HYr3KANn4DyrZzFSpQKnZFtr8RLV9E2QHBjYxn5",
  "key22": "TAis4sDU7zJoQcXFgMedGYzXgewwTYndVtocW4nvoWT2FyHAzacP8dEQGeoafmaYLujfTcFqwuc5XNcVCykx8xR",
  "key23": "3sdRjZCtz3DEX2u4Ksdbaw5unrTcJBAeQJEitMsJ9PtN12bqoNjzQHG6Bjx9UhAMcVVTCWr5vpAfXYuvyF7RHbRD",
  "key24": "3fEkBjw92huMoF7CNijJSs5pfPndVwp5xVRWoQhSvMs6mTJJ69cWb5y9QByNYPXmEjFjvhmdiHxs1B6xvoiiJMrG",
  "key25": "MSqGd7KM39Rz2S7ieZQWkjFr4TiCvSuCGVCBFN9Vd1TaeUPztpoH1V682c1wYzTUW8BxCpbLHfYT3yotE1fKVZq",
  "key26": "kNeJYkGqem7a4dQoVMuK1KxM4zZDJivbngid1uUMsdMfec32AvwtCRVQgu9T1EPcQ2NrrgnHtJ3MFdthNe3KNew",
  "key27": "5oxznPV8d9t5XoiN3FRUmb7a2YMFr1mZncQMnaxnmCT65Hss5vstfdcBCh6KBvcGXZ93GwXiGJNTcH7PasXX5JPE",
  "key28": "2Zz7pc9QRmvK8Cje3jNdyo7qWdjTr8wnkRCT94w2TyJHzN84EEgxBRtLfox4V9CGvoN81ug9CRM3XyZUNqXRMD1w",
  "key29": "bxiZGe4KWB2NhYjhGxb9L73j7KLAC3nTaY1JPbEXNrq9PoUF3ZTCw9SiSDAS8aEB3RXdGJs9KwoWSdFXCJqNbj6"
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
