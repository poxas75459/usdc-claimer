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
    "3NxAFy3zgCP8GUtLGFNTkeQEwnaTDfZbp3RD3vjgTDwMEmbJ8f2QfmsxEX2wpfMDo8LEVQpXhdxo3F6kg7nZfKDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xcaUsiRtnpaRPM36ySbSqNuc8dsgf7v3MmpeMYaG9EDL92aYsjeNM1B8GXxCRKQ1CADZxzFZs33Z4ZAysnHqeJE",
  "key1": "2qxVQ4quyutaMniEGEjZtePZDgB43nSBMp28zVvV2xsUS4JpTS5P2USPdMNBZWBqJue2EGJETT8Pi612Ztk2f6C3",
  "key2": "ywz9Y5t4X7H7VxZCL2GEMSUFQe2aCK6gt7a92V7MATehLGLmM2WgG8RXxRdqYKw6q7BZG6TpKzBA5M1wdCfceWJ",
  "key3": "4pgQDZm29kczhTW9t44ZUBNdZhu2oU4VgCvtVGWVsvrohRUNKjXAMeVG9cbEURP5oJGQhSwW4iQUvVDyCiXEhxww",
  "key4": "3GCuTLA3RAXeVoGJF4R42Qcn7EgAb58YcaWsbEpS5b4cnD4DBFtX1DHX4QwSE4uYS3JTofCzCMTiTUW5uLTQoEqm",
  "key5": "gqTpo3RxpsRLQ39vPkF3ukSdsrxCngdUqpunDsccHQebAhTGk2Wge4rNbA3fXhRthRRp1MGVzKBduT13d2TzXWH",
  "key6": "5YdPxPeZ89fW2VPiSJcuoPU8G5DLY26sJtURziPFVZFhKkY2PeLFzqr1Pu1GZA8cWDHB8AUCwspFvoxamg3gWyE8",
  "key7": "2M8BbsFsqspFT9aMYxP27RumRV646AJSAfisjMcxuTWj3Q5KzxAbGaussLFv4DzNhdViVnSPAicut3gYpcyP7XuL",
  "key8": "3YYJDcVU5V8LzGHieBDQMJTiNoVCEFaFU56oLZMRz8UXZyf8crZka82qRzQ18eSVRGhqc4TKEkcvUrWbRCjJbwb1",
  "key9": "58s4Ux492yRLK8NAuTCDHkdURE42K2sbS1dxzX1N47gk4pbZAdetmeP7Rv8Sg9qskZ4UC5vbC56LZsGq2CMc6Wj",
  "key10": "4PHNTApKCYxTrW7DZ3D4WZs6cxmELs8xkNsuhrMbn5VomSjbxvNvbXK372znqaPNqz7zUc51prrNhYJ6XZmo6sM4",
  "key11": "34xp4AVCRxsj8vH1Kf8nVvfqSj5927Gjfa2U9C221V7RrD6aE4bGFKfzfiSdB5ZbfoFafLpbGMS2g6GgVJv9MuA2",
  "key12": "2r5D8QXwJLyCfw7UtzXfXwb6zPwnfQZ6w64Eybeqkcxwzg871SmtsB9wLaCDAzodNEykJnMURjdmMZEwH84yS2Jh",
  "key13": "4qWbsceoW3WgZswVSZoqK5NPkHRJ9XBhminfpDfXczHude4zxfNPruBUnGgvuLW5Z8EqMbqiojypUgZuJmRaJegY",
  "key14": "4Dx6YesiEigvtc4GYG5TKQoQwyP5SvKMcyCqiyA43W7cv6T6yHcTifXnMwfTpsbF7esNbq7c3pJ4sNwveL7XJmaA",
  "key15": "4hHsRdEXujPCDXo4WrWHRntX5Me7byNuU8KDnDejgppX5r3ddFZHVCcTXc9DChnweEYkuMHgmkcV1DMBJZZ73wh5",
  "key16": "5etuDzyV1vzYeXJzr2yM4jcfAw33eH4XbHiFxCzTnJNbL5trMYwLg75SwMDCi5RFGj16zu8idZ9L8Xafgrxw9sfH",
  "key17": "2ibpLEbRSHkoj8RYgeja5vPZJ4KxNHMuHt4JwFc4iGtbiFVbYiwHUBX5oRDzxqQpQMQx1vewQ6yJRdbQ7rJ71pQU",
  "key18": "5ZWR3Wpb3LnAeHSjDAz2uKN2kuyt9kfVGGcWVATmgkftJ3tjWdFKQscDPE23bHgQwS9qwGjCyJA7JFMjTFbgcpc3",
  "key19": "5VjuoniL7esJNRhDJFfWRikHhyGFLyTwRVJfV16c38zTaZSJ44mucG77i4MkmUsJmpjEvEfWDEk8kZERkZyU1RQ1",
  "key20": "4pv6FemdFQQ2bJkC5CLAecHG5BGtn9RDNjFX1tASAbgHTfyGrcTHNyiPnfuntm6iVYUsLvV6XMqXv3LTKUM1auv1",
  "key21": "5dd7DPUyDTPaFrCpT4H7oioSF6X7L9QHqgEDWFVcynsnF5xX3wKdnxr8tmJEX2d6riUbgR4RpW51VKr9BHGXZya2",
  "key22": "5zdfiGWXQWC4eNWKzfuDysjABxkQCGydZer5A8k5y91rCb3FudjG95PL3kxvQ933QMLm6FKdffagbtDZLY2h6gHZ",
  "key23": "2LCuCZi39dpp5VDAP2HCVpyJJzTtRmmp9kuFevu4itsHGjcTvfyNsm2z1EQu1btbPRT4LRZ6ynb4YDifujh2koTb",
  "key24": "64bQRR6ttztAbQBeMrh2xvNpEZyi2rAmMsFQvXe89zNkUTa4Uz22r8p2qLQWku8wJfoVkCZMCiRLKYyXqw6VmwMy",
  "key25": "21Xvh4JHiVTuiEQ68S5TCwN5VCgxrbXNzNRpcNsz3qiYTVNyyRTsP9Kz7rxnPmEVFMzFigrKvEPC7DHAgFCr6oiu",
  "key26": "zHedmaqT19hsoe9udYmhWVsrP2bH4iYVFKgrUPTX5N67TXybs8UVXwGbvbqEaQm5XmTbCqPeMdkndqBuhdR28eY",
  "key27": "2bPtADDtWxqraUD6BMdhiiwMm2xyhiTRt3xaJQgEkskkAyEEt68mMp56VLjNdNj2SCRJu6mwE6kXcmSnfp8nEAZv",
  "key28": "UfUj5YQ9z3VXJp92bHTmZYUtNjeU6DPz17KWrKZiLG1gWTYb2sjuccZZb2gcWeT8smz8KYdBvuvqYgCcUPXveds",
  "key29": "oXbWHcv14NMixEqNDvB4XiJ4QEfsrwrzcrarmy38huDFvYnS7ZCscvAB8f3qhbFLqUc2KWBTZaS46YYUwy3Vsjx",
  "key30": "2zj42foZHN2fojz6dSqeKqBMRCFFzgPhg6k9SUFp9p7XpDrGPoumHVzfHTnrAEvVWgCK94kkg7CYbUDNAf57ac1W",
  "key31": "Dg2QhTtLv8YrteP49dd8UzFaTCP3D2G7brvpQnUY1tnRmjsKUwnuYoBWQHLwLo8Q7msaeR8JUtvCeSCa9KnVAA4",
  "key32": "PierNg9zHrnSt9CeLyUN5dz6hBTHz49KG6e17eK8BGdbDYVubxYGbgvwmbffbjAZtMKLprBeisBwSunenK9nsA4"
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
