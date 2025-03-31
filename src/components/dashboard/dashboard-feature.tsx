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
    "48NGAFhTztvMRqf2C2CDrecJnhgEJbLJRcKx1goqg5gcErcP9BZKFSjfZppf3iFpNMA2h5KfKSGgsy4sVddksW4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EB992qgJGGnuFwHMrHieGUPYfkZTJ1Mk5qr3n9YSXGSwRJfQcL5GZDrgGv8XnHrqpyEKa3ZdEGshcmJH9BbpDyz",
  "key1": "57W1NrRGb5kLRtsEhmGtKyccRtVsWEv1xhKh32fdwonY6S3rjiuKMgbAvhAPyYqVaeytHQFB79nWjQaBJ7SahweM",
  "key2": "3fHWnZjp9GUWndGFqczwB3ouG4xejpTGN1MzjFnQjN4EHt9K5mHnXQnfKCjmsujW4PKCKqhnptwj2tg71C6cUxZ7",
  "key3": "67Ewch8CSbQYJbsmmNaXGjMGucmjZg9EQYNvrUfGy4H5atzxHpb6hjk8ghxxQSAd88d6T2mrqBPPEjB9kaJJiDTx",
  "key4": "3H8Zfto1tp7ypwvePduJDogk3zWYGwt9CMCBJpQnjcBs7VystaZEfkpq4RRuAXaoBM53fiufTdMca45H1CzQvd6A",
  "key5": "5gJWmTQ1n5NiHuCdrPyz3irMZWpeaRH1Bd8HXXHAUupGtLGdv42NUuox8BmoNXfDsLG48Jxo3Sa6QT4HHi1HLyEP",
  "key6": "62CSz1jzxRGybJxeQKr9K9TxXEYkue5pPSDmn5rPsStjwQCSBGGWmpQKzh1VDrGLarhdBLTLyEk3bAvuJJdJ17cP",
  "key7": "1cm6bBAFKZ6Q9cNMTYeMF9aJnScaZyor321wz97HJUQVzvm8rVTT6BRVYH9dSzP5DvnMdKJG7PX5AwNDvFmJtus",
  "key8": "5ExUZ5qo4YpigtDBKVpminUKC1wrSZxSD1uUdMzqhuDA9W9PBLxxZ5sNdq92XaBtjXmCBHhvCPkUFWbfKXozkAto",
  "key9": "2AcaoUmcKzUfYLA7zjkpUzTZZB4ccwZ5q9dXrwkXEF5zrpawYP9zrFwxUvfo5ZXZWP5uNrAZ83LUvy9imeszHtUL",
  "key10": "3Nkhx3cWBo5K5qgjmFy7sLATWhs3FCEB1YhRcGfvq7gAtf1VMiXAGp9uxuYprENtLWAkJExLfPJZtn2SQk9cU7FY",
  "key11": "1w3qk9S96drmqZoF64E3BBfP1HmAMhDGW2tUFqbztP5mJA4udAEsUPkJtb9QsnWci4e1xMRd8Qe7DyCPKJLWSRX",
  "key12": "i2bioHU3ouv2n7b1BaZx89XPaGraXvVhg2S64EKuHuYJQQsfk94NoGPzrcmecDPTVkTcGr1hy9bF8eeBvVM15f1",
  "key13": "h53f43dYc69SFktreWs2Xy73v14LsLAQCRjsjDChmgdEGqvizFs2fQujtvE5UFVkyYTi8kynH2r1e1zDPvpMfT7",
  "key14": "61da2wRroDTQbTkSV84rwQ32wbZh28JGcJSKFDFLrtU9JGnDL6YtdvD5wS2CFfvKtDbZZJNkENbF3VzizLgyiKXM",
  "key15": "46KiKSbRdF9ya6A6v47cVfQGmM4HTZfGwffbmrnb9CPaTx3wSh6tWz7PLxzJJUb5NjGKQDoTuG8Fws6hc5FBWWZn",
  "key16": "4o9dfZJQuA7wuZrKvjdMFUFT2G2548TqYEQ3ZAoJJwn8Ndr1wNjDSxXVVUxVrhHLW6WC8UKMkQQD4sdHA4Ei7y4x",
  "key17": "4GECNQXgZ37SS3bjn29oGByJZ7k52mRJm3BwGy3PtPuizireBQuEVbaRDuwesfTVwXpiGvf1EwgA1tzA8R7H14Zm",
  "key18": "mruKvfJEYeQGy9VyjVaoKDWJkrDj5HRsGueDS8E1SRwkRsY6JxMxPdgqtSy1CEmDEYKX6tNr5e3WQL493v5k21o",
  "key19": "2ZQ1LHTH7DAAmtTbjjroaF5Ft6NqBX353wSvc1KMR7fRkMPETHnmS1AYBU4PTL3Z4kd8rLeUjKqqY9Z6po2BDXGM",
  "key20": "4NwHqFwAVEADPY9LTZRTJ3QDwSGYR7vLoj4wiTQ4ra4ygKpHHrw7QEZJDoEbC9BDrUchqR6nnzDmFsUfhrsAJxQP",
  "key21": "5vw4VPVTWs7crsDNJHX7psC7YrRDxHHyrt4ZnZdG4RwZrgYTi98U6RBPhMcrbmjupffNWKLsE65C2oxTK9j95SsN",
  "key22": "5MAUoXryiSgopGcLdzQNs8KTKZnJmQjL6M7YEmdjYV8r9LXDkS26ZYZufTyoJBR6aeoWqczuXGGGRUmL29xJXC8L",
  "key23": "4fnYyK5ELYV7YUD5QBKdyqyqjgyJgm9kZJLyoUm5eYc7cWSxnCG7zccxa4Zv7vAnApmASNNTNfwXfRCV19s4EEy3",
  "key24": "3HUaembjdntDehmkTAJdhoqSXSu61JTJb1dwgrUa4RRLrFQxFfsWVKEpqDjhEAWZM4d6oCPBowuh2Qeg5QLPPzwd",
  "key25": "2i1Wak1Pz2n8GcSBGtLvKbf4uFiGZCeGEdN9LfhwT3NYHZ2FjK3NWarSMYtNCCBpAFdiYyUgD5BPRNV3RV5X9KyV",
  "key26": "gmpQcNkNyR3QhNauhJ8SVm8mmwx8EyyCySfVtAUooVBBV1vH5Zvt2EeMMDfP2umSYQtjzrjs2Xg6rH5gZHYbpmh",
  "key27": "3tAjCFL5VSN3Zm4zdiW8T3xd1mny39Mq3kNq7bg3FDMDHQ1Y2UA1uWRtba11aQZUSBYwxZHLySRdRK2vHZAgJSDV",
  "key28": "3FopWxxU61m1NZ99ndubeBcYSkxbP3gJgkW4qm2NhgZuPXRFnWWdn4FffthqHq38jDo4FGwSY8QQdCcDMQNFBiXF",
  "key29": "5aB28TcRXsknCAkw31uzd9YLVjFYmYyMHrpUW9f7jBEYMEhYCZgN7irCH6phnQPXLM6NFnMVstXpujzNb8qc3sXC",
  "key30": "4Z1PUV8aSrWrKpszTJnbLeJh6d6hVhPUpvrfzENAMbjc59415XYXrdduCiJ6N33deqfznjZ2Y6ShYQbaaKW4T4tF",
  "key31": "gzsvafcmDjMVi5DUE4FhVUiqf9kSRPHfDFBXGvayM3Z2sXEprnAqYPMsKs6vRE95bUFcfHHvwntdbE8osGHhYrX",
  "key32": "34sYaearFrPogJByfjU6DYKdR78jFutRpu76HZCjRCPYg6Y6BrjeyPNx32QymUzoDALww3CQZLR5TB1haCda11Hi",
  "key33": "5kEQTMYa6PJ7wP7X91J8f9TzqNPSHgC2KxTjjz7HMHaBoxiePrkhU9DA4mPp78Yke8h4rdaUvroneQDXGSuq3shz",
  "key34": "5WvB9uyyU9wZnYCsWXYuYmmEk8bbenHYB4VtsebtK4DMxDynXft8PdXtx6Bd8sSsKTmGMTSJWL2c9xAL8khyS1f4",
  "key35": "HW9ZuLLXvpwnvMzxoEV19qX4GLnjUznCX8nqs2yGipCMETqrxfAjyM69vZC43sM54sBj1PZ9A8hcz2XXELhtKHt",
  "key36": "5EgzMYXwK6JEnGkBTNDGHe8YyzPa51vFDvdnk23zzpNzL4k1T6CB5L1kiWRVSo8Lipobc3h5W7TRn8hfvpVEmAVg",
  "key37": "5UQGKCr5ZoX7FT7Srdn4hFcacRhhiNee9BWj4RN1HQkGGrCCP96ntRK2TPBDN6xSp2Q7Qi38EHUXx7dTWXxJKGEj",
  "key38": "pJV95391ugeN6ipxpcpoesUrZ1GKCicbM66fiH4Y8wa3UUegjT1X9Y1m2mPExw5r3ucNiur1aMSD8ZK7odsz8SN",
  "key39": "298haV9L2uCPfncfKyQbueAQLNZ6eeia79NcEVBjzXR47CVb6zNeELAkatgfFDrjNVvqNeduc5mgCWLYgtq3RUvZ",
  "key40": "2UcJq8ZQUF8FzRwc3n5ne91SwXeZ3AXFsAMcXeZVcpYWSYrzdwrnretUxgNAD4r6RyzcbCBmVHnrcqXGa3G1CYVs"
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
