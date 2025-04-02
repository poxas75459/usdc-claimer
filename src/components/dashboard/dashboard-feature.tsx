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
    "4GPfduwcgoJLaTS6386zEoeUaz3UYEFTY8JC5CAXD9AmwzzGPvKyxXFNmtcNL9KSscuwKgVY1Y3BXzog6nGRWF8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A2MjhkhcG37KFyRuR8CMtcq2huH3eTgnkmZma6TnomQEkwPUwTngkcPxRAiGaTWm1cdyHLRGgksCXCyDRzMXLHL",
  "key1": "tsXRt8kCZ6Kcje3UufaTMsxxXFPRC7MpFR6LRMwkDaXgavnxGG4fEmoSUWJCrGTGipNhss1Wr2cmXw4ZCU2tr2w",
  "key2": "2ZAwHksVwrD6quvvS4XC2BUCX42pe2XvJXExXGnaRn3mrbCLYwtif4khJYGbPrneHC5ZJBaAKDHNm2jpotRF3Sdh",
  "key3": "HZyPbv9FJB8s3xS6rremW9i9ELb8TDEmLUBFAykxuNdzRKCB52LuDfkYRf2hy9UfnKN66CLqutcAefUdn7FshZV",
  "key4": "5dJkWjcG4CHDgYzvscAF2pfNw53KCLw8LFHivfqEqiFiNuG31tNJxq5pMYJ5ghDxsQdJqySACVkK3PiMiWAtyL8s",
  "key5": "4XqoQinzmwSFXwUFX579rpQ9q7QbFHk3VpDGfi1r9GtL98wbhp1HLRTAcQ8uXcvYBbzmS2nPAsBqPjWjwF97WcLY",
  "key6": "UVKo388Lhg1bJkRCGsh6hg9MnyyaJnGcyCczL8wNPHeExhccLQ23H4E5XaMFVFaCqan43ZaUw8A3SLcso9P7ni1",
  "key7": "3pBCT2wD4vDxZD6kRpfhsK6Vq56LWZjFyexCfm4MgZr2E3qWNN7Tdk3V2wtWMYMZCP1F7eXDxFTAwRKVzCB4p1hv",
  "key8": "3U9Ja4yZGH17nscnYo2EoACWAbFncbjiJTNFo6fRdzoNRrKFXGtgSPzcWGQ2GZ9WBb7cB7amjPkLKjuBo7zSaxKx",
  "key9": "2NJwEaa3zdQ9yy8ao5ZRpHXwA3zSGgnB7EkepekFXN12ySksRWQRikD2o4M2Eo9rMxxCciUVmYEhhx4oMvhDJRoi",
  "key10": "3zU9UaXxm17RNUeMXoRwFVZrzL3kbJvYfv3P8gGPgRNd5syM4DJgpyt4mhoxzy2LzhoQZzrHxeSm5PUXH9YvdPqW",
  "key11": "4hWeWHbkXASvB1ASKqbLdxZgvHmTuinzgcwVupc15EMm3fA3eRfVGebEyAXXJgSmyQ4BUJb4YB9kXQDw1vfVZkW5",
  "key12": "2aL8NunuWojs9VAQpcsjzJZANp572xNJcM1bXnfWweT8cFfoGgZDZD1eA2ujzG7p1FTAH2QD5mngH4wDXMQTXKBV",
  "key13": "5YM671xP4JaGgP5iiJLkAyAw9kbajEp2tjL9PYReDoEFbya7vmX6fL4bXiF51vW96FYXVeZ2RRwBYAtBqT11d3bA",
  "key14": "2HWGyULAZugf3qS42vJiUKToRZ1nwk9kjsWJBieMjaeLDN9YAZTx1anDWXf1vsAqAqddw7HE3jiqJtQDCNQPzRm9",
  "key15": "3DZBEMD5NmWgMTqVSsJ7q6qqnf9xCbto4thXtPrjuR5XVfGxLC8DwMw2GPcVfTqe8PHq9jK6vRXnDzBHqQH9FCVE",
  "key16": "2cUgCGQ8FwRSEQXowooobKGqW9HFVboY9WEzHP2e1UDPQYJRZGwx1vyu3XAvPAS29ZYBht8LD61pBP5UJxSN48tY",
  "key17": "5g8KBWrydwyqsGfGWrGRb4LB13uGUoXtxvxXGHM7TFPUzrSSyos36hAEBjwcABpU7EBMLrsTKwWb9ExsF7baRZck",
  "key18": "37hrMbtxQgBqaeSfiJ6MJZoCaLr7s9t25JTyGUvRxBMHAgo5xpedD1HDCYNx3G8J8zrb7eVwdPt4vEHoNbwUN6R7",
  "key19": "2bTxo3Y4F1pSZAvmJtferqwXwEoe88C6L2U5bceVvvoWBvbEKTmqxnM94k8uD1fRg5qsPACcgxpJVZuSqja77pdW",
  "key20": "2Tujc6SP3jXUyLWWTGVDfrDzPGygKi6n8TTMjvLCnJRT2ZgddQVuEJ4MH1wmQ4pXyFdKr9hKWAu2s8WJTyEmCXnZ",
  "key21": "63yiKdeAvDp28799DMb4MBP3g6io7JkTdiVBzgiRAazTQA5criVuBeMWJ4UyaCXubRoK8NEtXXpfLfAE3F6XWJP",
  "key22": "5UtWMTxKWxjjiU74ZmGmLgwb7J3PSekrQbbG1GRdQ6BBQAi7mQnJWdSc8UqiyonNXDpjssZLusyBrt9K3vfBfHbe",
  "key23": "2sP6rTu4Vs5qpKRsBNmuLvFFWsGERLRHdY6iMGpyYVF6SqeWvfUtwzQkLgvGJJxqRayBuKxkRCiXBz7EZATcxBao",
  "key24": "Bvtbms8fTF2s9gkdAUiuZNCM8SjvztL7AH4Ddbe8ynTvmZ9fVtdNpW4mWRTxoBrSpTzcETsjrTFiGB5qQEBSqtb",
  "key25": "3zrgbvfAY4q2sM74ZAFAYer4kFrMSAkVvLb9SeYNBgY4CVj1iy3c2L5T8AkCwdNCuPTD9pGAXbGT4baguVeDBYFF",
  "key26": "2jfYQptW47MFu7e4aKJqg9QeC3p6CztcYHq4YMMMWSJxGL8oAc5m5SWZWXpTjgNxkctLC24TqinendhQrk8iM5Su",
  "key27": "3XWPqURDBfkXqcYGreBRiqgEsgEwpiQF9gw56GXbGsV5gwUzZEdEsHLkg9F3X1giVjRFAtzetF8XQC7xEeXy55dh",
  "key28": "43TA64aPf2jxPK4YkqmBGnKbcaPoiGJM7K2QNxfXfm75k2y2FzwMHvkdDGYgWJ4n1X1WWjtn28H6U1BpWXGRxkNg",
  "key29": "4DUCnMhcYujtcpWbFE9rvLgMhneMhd9sHdSBxBtDkyTqZWFzuMCUQtWrxyZvrn9DkmcqfxgtsTmSATtEvDQm91sv",
  "key30": "4R1NJtPhSSTDcwab75M33abCX4tSM4ZU9e5crpjwMqF44cHm7HnGtD3YrKj8C4dvFQnf8Eswk76kp3j89PdsBeCc",
  "key31": "5BdBLxp1XLsjJA4sXAuKwdJHbLwBCAXZJhF3NfxStdVZcaXQdDiZhh5bXYF71KaSAYae7YceJx9Y5EHJJSVs657k",
  "key32": "5VADsaL6PVm6UjFwpdbsnKMKyDh36V5LAbqm6ukcRGDfdFmw8ekXd9rgBbUr3GH38c91Z3ALLnngypW6De2PKvSM",
  "key33": "4q7NKL9RswcnNcjdj6CsrxZYGwSWYhivgGStAS5jVwXhQXPQijDbosFKhhxSxuodfZgyrCPjcrW4haLQyERDj23B",
  "key34": "5Z7ARygtA1JkD39Xo8d8ZWrj5xiGvohZhh4xUX8R6WnbpeU8aGjKeXXN5EsiFrzD68Qrwya4F6eyGbDcKLWUtA7V",
  "key35": "3QzV6s2HX9MKjztTLrLXUjtz8sFbXN6fGAg81LTpCe2Pm7JQTbiBnHPfFRHwVCxVe726Gyb9yqAV59AWQZPpLMbW",
  "key36": "3Eb2CqzuRqWaxjyT9hsTQq4ST5jikusMg8V1tGHtRiv5AYuqsziSXMXYE1F66N9eH4WnAfNLmazvAdsXL5Ltdy11",
  "key37": "53nRJ8opDeJcbDCCSrzZCd882JqnVJbxo6akp8Dz32YEJrAmobr8ajBRnGJR5XKF6DUy2JJevRdzMs3MeuMDtGTr",
  "key38": "4zrPzwazkhyfE5iKFyhoo4f17TTrLKB3Ke37ag8C1so4RhnbqDZDxJjcCmPsQpdt8j3oBrFyqR838ThEbk6W7AWo",
  "key39": "2GTN2LtFhqfJzs4LdUUfKjzAPrrE14yktSNwbT3GPupQFF63jN4kGdMUHCPKpykqKyo1AQiptUsE4QxfmgeBpyPs",
  "key40": "4uUFofvmN2BrbzeteTENSkzfvyyT4zS3ueYiUouY4zCVrg8r1ci3bsDXdAp1bDY9uQmXmA3BR3dudHWg64TXXMMc",
  "key41": "HcbQDcbzBP7vJiN5RFPLmzK5qmNJcbqEJ8AFz9cKjE3qiWUHxNy6Mw33ZnwUqLyvauK9yuxsbXxeotjoww9ijmV",
  "key42": "3BfkqZ2faKrMfYRzf3xMNgTsYuSeA8FcxPGdX2yvkSMLAWNJWysMnjEqUdEUdy4FvtD4BxXYz8M4Bb7XasfnuLRy",
  "key43": "cZ48bk8GWSKGGJhABq2TcYcEbZQEUgYciBZAogZzddm2Bs7uvdifN9ZZMUih3TYidPVVT9myP5xo8LpzjHh6Nvr",
  "key44": "5sxHiAfiQiB3df3hYdWk6LLqoDqDzMAPVHcdBUqF8V4e91JfxDLEWzBbQhU7Md2z85jDNwwwhoY7vBB7814ymgsL",
  "key45": "4bpzR5wtQ7V4Ra9U8mxzVP9d9u8eRMC1aS4EtnmPJMMopMtpCRJtfPLfcB8Krmo4izK4Nfht8UAiiADoJaEM9pbi",
  "key46": "mPihLHNZhGp2S1QZ82jmh5DxL1ZkKUGMkkSfaaYBNMsQogRumxRrwx7BYvJxZsvVHRzZ5gs5hnY37C2qAoHoGGa",
  "key47": "Uy56FM5QevTEz1HMfkgyxQmktrZ1jSuY77Yn8HkjvcXUH8bGTzdWk8GpHy721EkjZsHTrTEUxENpRBs7wSmk2Ky"
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
