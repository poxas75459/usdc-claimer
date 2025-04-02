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
    "3EebowsPAXYCrMPdjUmwSQYnCuN7NcBp2KsAxbL6RLNRGpyuPxu3rgNiSV95Zn8ohzw76CTeENW3kyuW4Pjy1UkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UC4Fn7gGiR5o64t23VkNAsP1J2SYLgUVxi3RXfitwnz5WiJzXzGeHBB3ewWmxu6VFLokF6nQAByyRauxPHoYamq",
  "key1": "3ZNzR6isNT3SZ1eGyiYexhRXVLfAi4UN8PFjrQbguynCcLWVyW9Lr9Uy2LoByvo7HNJZPC4xzLnRcDw4sSA8V52z",
  "key2": "2hDEBaxokpJQkbJXRaNrQ8QhmdnedcpoTTkuqbvZkJvqDXgC8GSh4VYZV2kiRzvnu6ptCfYydyhU8vh86DCqipoc",
  "key3": "546ipxbC5N7YwrxQVrYcyigP6v7M47oddw5J94cUuLeWmkThsPqt8ViHqXMkokAvgjPGmgRqFL1BCzMZsFR1X3TC",
  "key4": "3AP8FTGytLmPcsUTeKVywz9nGsftGD1GfkdefgCjQPipej1jCKfUapwZDATrpxN72Zb6CdRQ2SSSXzKonSMbi27B",
  "key5": "aH71fcm8py2XjD8VQPFvsN8qgMkbm1Q1yUJ21YK59gF8xDPfSSMrJtz6piZuBkE4nbM72LCWqrVUi9KjArEtc1H",
  "key6": "5DsK3qXXEL7Fio82NnFPqa3T65kFNF4HHPyLLxBtwqng4f26sKP1tN2fTXqgVatGuM8YRgwLrDorAC3JbsGcosct",
  "key7": "5yezzee3v11tgCuX2tqLqH4PdntLrRWXjg2ogykzytGnoUSF1RuDryFGi9FRcf4rrQV6JzrdhVZxFh3pVfCnp8MD",
  "key8": "5KMXeJkpMEnNmQ9riiRXaoDMnYLT2FZ9xinTHLfuU3heuypqvEGoyjC2EheTgTzPYw64PiiaJjxKvet7Wh12Fn9k",
  "key9": "bzFjr3Xm9EtC9adbL1kgvkUZU3ubRkfhzEDB5r3vZUXy9iTCypAddzEwPUXPY4mWuimZjZG7mpin3TZbntqyqET",
  "key10": "5z3tt2DBQdmukQuMDyh1ByBER3TUTBY6kzDMhqCrhocFEzQ4caA9fPb2MG7a8zykB13h2XLZtjjooCiSutuQpx1u",
  "key11": "5UdCWyL4RNmT34uMnqC99HmtdvPvzvT62oiT4dSXUk3omfifctzvq312DWbgLMrgEPii94j948SLu7AGHgnwKUWr",
  "key12": "e2jWcnzm5yKGTBaAtDyTWnoC8bNWsiYVeSWX5MSW1Bp9WmF8wYDtpQEEeATBhCah38ey8kcvWmm2aZuK3uhueuW",
  "key13": "2pEgGWvY7uY8njNgaPLotMcE3AcjCPDZUm3iSLKdPVgT3jai3hRCTKWeKzHpe1Y6joAV46PxLHV2TGtG3nx7fxKj",
  "key14": "3fXUWwns6BCd2VPpwWL51ADo88cBg17xPXq4QxkAALHrZ1kM1quTUmAVRT4xc1qj193BT227Z2SMfeXERo43467c",
  "key15": "5Bq1HXgexWfpPRxyupJUfgbEni73wiQ67mZoHb3Vw9ftuzgt7LK9biUeXbPjZhw54yxHg45EnqoKwJEucKfinakS",
  "key16": "4Zn2WMDZkeBkgxajTp4MPLyFYd6GcHT38uFsLjfbk654yg6rn471mGr83PbunEuWdXXQx8Bt9MBXKnGogdw5Kcsr",
  "key17": "yTt3xqTK77PYaUNBmggiXBcNnLJTnnwSNz4FMseDUpMxt7njytGZfNWnyPSwywr57uSKjoqLCMyD8NdepVTDA46",
  "key18": "5jDf35ifjFiwjiUC4ZWvyRKrWtL6WQfQEWp1F21V5dMLqFw8P7nmVGSoKY8hAPCW5Bb9furFhMrDXsvBCJbXYdxp",
  "key19": "dMtEUfgZD1dGYsi25XC8FcUvPzYKuusUGJVt9DutXZg9QE9cPohsFC6GWRm1JN6snELrP898qAMqnUjU8psCZj7",
  "key20": "3iUGM6hiCCJZ7QXYdpeJnR449d7AP2A29asp1wBCmcgVyTPWU8w8pqQtXv1eGHCrKCn5jTF47CdjAYp7UeoimcBM",
  "key21": "5mMEU7YrKeG8ejVEyhkbSUJoi2FvdSz4NJfGgJxioq7w5eB91YHveLN1xbUHqdBxwnpjQ84f5zQowJbC9Db3Vncv",
  "key22": "67Ck26fsTmX77bJaGh9Q2fSQHAjsnXeSH7BX4vY9gkzWuKvpRD2RqdZHNXrkTH5ciGzM7wzscqUqw6ZngTn9bAYd",
  "key23": "3cwDdfpLRgnnzD8sPGn4XWQq2tdw4RYWCRDXXgAvNspjX59dRsY2iLLqfZ8YAUa4SRZGDPs6ECE342EKw6cKKizh",
  "key24": "d4LPjag6tCVp8s4AwndWid6rzyHMkUw4TyeUHQVrgA4tQKsyCQmPmA3FeKf6BxZuCR8M7AHZYuTSxB7LLStvMXA",
  "key25": "57HGNNmqirWesvv2oar9NSfM5YWUkmCodeLLG9SjXtoP6HGkCb4xTLqC7zwVymB9dPdTEoRFmTcbg966dQ8bi8S3",
  "key26": "4ctH8diyGz8LvTok8idB4vcvbK3eUqct4D56YmBbQUYVUGkLkDmKMeg7Hyoy95WfDYoCJtzLQoq4VFQ3wiL1hwDU",
  "key27": "5ExyVax4MHS34mkvuF8WeFzCgygL6gQhPMTkr3KV2G1Ye6XnUwnjCadsMNXiUsZqCfT1tVMkALMRZi4j5Ybh42Wt",
  "key28": "4eTcquRsWFJqZ8xtve9BjmmHZfQaKtLszsJLSXF5usfDccdkDiwsAxX7Vat9HciM1h9GoQoE11xwXPN35S4QTxjD",
  "key29": "22Jg9qAvcS5Jc8i1vXMW1eBzeEeXa4DUaheG6SAFUoA4G3yF1kwMRATTuY3bqb28pYZdBzZxTs4hbv3dXWcXTm9B",
  "key30": "4JdhUuMSsB9evChHRFS6bvtGxqD67fySAgpgNF7gzQJbPHpYvttrYwmJYjJzD1rgGkDuyJup1wswmzmwV52BUsW4",
  "key31": "5Q2k74ySFx44Pc7fpcTAVfSRSn2WZ4R2G1ys9JwjLi1NNdaDU6MjokdmbiYN3YBJo9F2nSLbzY7RFMznxe1XHQn2",
  "key32": "26fiQBeWh7kbFyRRzWupTnTWiQyQbCxf9NgC4igsx8a1iGN41ZBBHQTBMD4WwT2AhPZTTkX5H366Uui8uibH7peD",
  "key33": "3UWNNbHweXqd9WPAGXDpXuNZvs4wP7R7Mh9VsMdceXLLA8M4VSCTDtY1JJ4aXXZag5qN6vWdEDzAnjkrxCh7nvrq",
  "key34": "35HwaS1TpFdRzyV1womR2iwy9Gvr5LzFFgaynASdM3fuTghcZX2BGHfSDapuofDYSXb9bikzZ8SUp9f5c64N5bFj",
  "key35": "5wbHAx1BK6pn6bak6EM22P4Fsox6n9k6zaKP8DyqdQ2YXbrwsF5sR6bs5rsmxQzBbVym8x5TuZn8CmgKXuFsFk8E",
  "key36": "48bg7TSqzZzRhEDQHFGBpL6dndne11QaX9g6nhWCoiM4z1MJfTeLY1FVo6HuJC7bdhTmA7WUxfAqwb12hJmQpBTq"
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
