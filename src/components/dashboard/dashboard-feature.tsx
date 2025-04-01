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
    "5NdDWehnodKFnVPyatg9L46Jqm4ZUFVA9Weu4vkcs6C72VorLDjsPTrTbDi75LNSB2A6yBwjggHz2FqrjUVUJDzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kf6sTeRFsWFQPi29SLL3tWNJeSwzj8A1ZNEDkHBLx6MZDRNPwCUH5DJpCcamsF6uFDJ6akUvaZ3gZ3tScKTczLj",
  "key1": "3sFi76YWJ5cm93F5rj8okLj3sZCs1tH3beS54QGdU4y41HFRz56EwWcvAP5xpsq5pryiPuNAskvgurg2XibkNxnn",
  "key2": "5AqzjGULmAdg4RwLxaqB36acn9kum23bSDpBjb27VKMDx5FbsnYnN8L7ccga4sPhNnAdPqBkjdHhNqTKFHbib8wZ",
  "key3": "2n8CA1fmqPwKeqG1M9M8Q23HWtsbkGgjedfBdhNp3P2ogGGW7pa9TQSFBrxd8RFU6ydhyb1DPxy6VCThAQXSFsce",
  "key4": "4qCyobrGkT7Fd5Hf6YqqBZenib2kxGpxif2AxNcstCwSvcBD6gBzePCN3cpER8UTqcNQVj5AWfZaaSsxu9CuDL91",
  "key5": "4MWMBxRwzwtcUEY5Bg4yNyUsJDJh6SFyQv3KWyjdyopoCEfvaS5HEqvFoFbQxKLJ1tv5EJxWJibHCLg1UgGEYgt6",
  "key6": "4L5D9nMg5EZpahnKxmSFFh2PVyhoxEBnhAcRhXD6Be8uR1Csds3XdNPjUEdbLMpFHMVFAhiaFo1LVVjDEwJ7MVbu",
  "key7": "DSzDWTAQ3W1yjLDgZmSSX7hdNzvoDZru95W8G8JqZtke3zpxH4LuEPPvVwfRGEPCTQHhjr59P4oG3iCAgCbVB6f",
  "key8": "TXgxTWgZQnPaeFax6a531VQWdGqasm4qXpiSipwRdgxJHuubNHaGQXmAadZzmxQ9Wn24fDT3jfZgFoUosdKA7FC",
  "key9": "L28iJyWAzm6gdXkjWJcBFEJ6u6NYKpuoNRyfzLuUUcU8JJAixi31yXAaP9svyC6Z4p13fC3YPXfNLmscp1X68qV",
  "key10": "4b2wqxuD5WMvmZAxNY4bUjgDmyFY65nuBRTZJCteaFy7tqYPL1Ms1GZGMgyLiTFF2Ytx5bLoTKvzU4CEJfYKxX2A",
  "key11": "4uBdhrKY9YH1u93xycbbBmJqiaSJvmhUWugXjcnBVXyWFyppeJS1gkRxXnDMzcKEyFLSEKvuHwiZEk3fQcmAoveo",
  "key12": "5WvMGu9tnWotBTxJEpsB8KPVcQrXh6sEiHm7ukxuvf3Kx6C1inNe3FBBDBWh1ZQojqKef2ZKVAfGsYCGQW7XjK88",
  "key13": "32zNihbAth5hiBhqPrS7NmYYCVCdVNQcKUGCmZeRdN2iLQKABP7w7h4bxfVnhKzGZ4jAHU4Kcz5tJ5pENw8cXsui",
  "key14": "3eETZnpMrobhL69Q85aRK9bpZwjQTZhoDxz1oMSdHLWJCRAXiKofKgTmCntr6ZeASgp3qspxky6fyoAtjsAFqvJ6",
  "key15": "4jE1zE7MAUpnpyJTiYh1z3insqBi2r4kK34CxhtNds86nQc84fkxxB8cfJLWGtD7CPpXnSdYG9e9GHfEEKBGhK27",
  "key16": "3mxRqiPeSuxTC9jrmhserwvgFYPnFjdbuEVcix9ZPjawabgwCDkx3L924sWF8Sv3cqjanCtDxNscJo3Ls8t5pYCr",
  "key17": "3LbCw449WZBYF8xCzUHFTu3oK4AbCu1cKkAGDJptTQL38jzJWGSgDe6AknKiDnYAwmWHUCKqEDu8YiwitU2ZnxuL",
  "key18": "5Zrpom32wLtVhgQ5daXDf19XpS1Y4E7GHTGjQHnsVxnqGwnLR1BV883YfxFurqwxWdeuroLXyYP19d3W8B61Ue1k",
  "key19": "5tKSVj9eY8MsGCsfZb4zCTGMe1dUBCiyg7QVf7oKRi68urgXhXTgzdF3KaKCUBM9StGq51aoHxSM7aBjzf7qxLiQ",
  "key20": "5YDZ7Yd4qvYJeekYcQbBQJDJRRtQ7NP3i8Gso2k5B8S1bKMofQsZjR5yvjNsA132YKUcHf2uWsSSgE9NfF9K1Bip",
  "key21": "5Rwree6NgcujkVq5MJRUFMjy2TXHBws9Uh5tzKkq8Emtqn83MNzL4K3YzRACqio3nNKh6dd99Mmf3hbcPHnEoN3Y",
  "key22": "56Ye22VLhMUNwobsQsNHJTSvYBS5L69DNVB9hsbx7V4ZNbg883nf9RZFANVHFkrnXtK3WUK5qVxwRHQ9HnUPeFMV",
  "key23": "3gJBxqTYRdFfRsn2j7BHn6RaEhLMLdcAcJYiDMKFrqgYFm2puvpULzPpJddbrK3SJwHruj5m4QyhUJNrw6SbWGKy",
  "key24": "33eSvvtiwUDruGEpwSMJbNz7A4hbKHWfR16eXectHEcURkCySR1ABcSoMXnZnEa6Wrc68KG6zhgMranJssXGEweK",
  "key25": "2e3W5xyQ4vRpBsYQPVwWcHeGpBrEJzfsKhcXeZPBFskL7HgN57EbJKfCN9kHDLscAPk3yy7mihNy8aGK55AQrqRW",
  "key26": "2vJTGYhPWHQ2sLCwitp7WeNQ5YxPXQZvwxSMuE7tPKWrNx5Sc7LUHp3h1iPtg5Wv2dG3VCAb98zhL8hTZr8PbpQn",
  "key27": "P9AAhYCxJTQW62Uc3K2iMso2gNsALBQNRQx3bogSx3LFaw5nitjNLNBwQSbgYskSYm1xvXwyWtuXyYH7VCPPjJS",
  "key28": "J9ka5q8v4UjiBd8c8fesKqqcE8oQqHEcKyg3heFYja1hr7uphYGnt3EjPsbRxvhmW9bka19hnogVtocqLSFbQDZ",
  "key29": "3f4x94GGErV6EKZVGc8mbVigcGkeYykCaE3fhDQaox1D5gLBtgQxw6xQ6KeR91UkrvB5YY3bi8xzzX5CK3XPUzzu",
  "key30": "wj5vuypPCuQFeAKf78RCdNHLHnFYWVe5Q6UfFgfucg27ntCvoBXy5LzXUj6dKpNwkWbZwoXB1ihGzDSPkZW7c5T",
  "key31": "5uE65rg7CG71SPozDNWuXKhT9PxJhcbcwQ21Yk5Ct2N5teUUZsWwm8kHDvvhLCVAqRkQVnhzxeXcZESeq2cNEKT7",
  "key32": "2QVMgex8bUXjKqSZ8YCmhpuScUDvwMVbJmyUczXQTcT7sBpHAiSxbjnw3kegh5F9bzzskQ77qskhfxMhf9W41r1W",
  "key33": "51bZkSAqmY2BqwTfHcioy9cCa7MCYDBzNpCmFwvvwY9hitFZ2rmmE6cBiKoAkDX3eV5H4E2UMtPQ4ua6cFE5mDxw",
  "key34": "3sNG3dyoS99bbjXBbetVx1orMkuG7eh1i84V3Ts6XeUmNKPc6pgdDgginnb1z1CHgWyXQzc9M9AzfitVhod2kr9r",
  "key35": "49cvSJcPBaGMCDDyXUZyUGe2ai9qzDujAZLB3AnLGGExCYV3EGptMvkvuHLJJTeA2myMzNrt1CetQdeJ613agNRw",
  "key36": "588C7vzvBY7wgAsFCUrURwLwNiaGwp1YHkGaugYHcLJrTeWLoLinuaPEthDpPAqKeaTmuNduwwEdxb4a9Yq4NuYk",
  "key37": "5wc2P1kzN28FEGP845cWRNUWznKkF8LhfYn51eTi6mx39Bk6p2AW9L8MGUR5Qt1r9vsGhJ8HNGWFw5hndm4epY6Y",
  "key38": "Tm84MZu7raa4nv3FN11h1JGWJ3kMvYEAHrHKnqyZfdnG6Feq1Zi89ZBGaY4E4dPwDwCMBn55xVzrM4dvAWiyFPk",
  "key39": "Ruznt14hhev3cpgtYU3woBzk54TYJayLaoyfAzLi9GayNuMrAb57gQAvUcxpnch1NJMu5aaxcHrgV4Z81K3LrNe",
  "key40": "5tkK56grmCqYTDiaLUtnNRtBi6L6NXHDYZihqsUyTqQ4Yfk13JaBUARPToQEFWydHmg5EcumMpqbL5botq6HzDym"
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
