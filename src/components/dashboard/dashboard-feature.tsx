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
    "Ria9qEGAGayLMa9asavUBQjhspt6XTjsabsNDNoRVv2AGVM2q2B8zaJFaVLvz6bZeFMhzia37Q42n98pwJULoyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UFE5m1MJsnshVb6oF2fYxf2vuwYAvpUzBQZpn3VJvAg2uBWPHgBinUXeFesvZ7FEANS5w6pf8J5DD3VVsXSBnJq",
  "key1": "5AQ4g1s6Y3sNce2veEC3H9aYB8nzGmfH7Xfoer5cw5pBRGNGXFm9L9Pze7eDaAEBTN5GX15jRpLsNLybzJCnCHWz",
  "key2": "51r1pQMW9nFGHXGScbmAMa6eoriwFL2gfTdNkujMKEPPVYtpKWP1euks1dTDZEkp9KSaYb5KejZKd16dDSpRyyva",
  "key3": "Wh9ndCqiG7XcNYpSDbD46T7cCxjMM6KkEJCNNWH3VGuessvNMDGsgcv4pZ5vP6QmQeymXbPaTJtkhnNimsv4NEp",
  "key4": "4QPxwvzM3CSy3haXyth6jS9HUSkwsAe9UaML3Aru6pojbwwansFG4ARYtwm8mdji4SipGksnGGpyRZcrsur26MvS",
  "key5": "5c4aJnqgXVkQ2fb14jeKZ1ZFHNuaWdJB7fFPzu2fpnd3e1drsr65FMdoE5s9aP4XNeG7QZSnVfpJEdTRVtoFQdPb",
  "key6": "5xeQoQHsXCPNN6ZYnxMXXJ43MtdX5SCJ6CPCtPsF7jQsgwLf8f6rc5GJxxUK1HDm1pzZ5Fw2RWiWGUxo5sVUmWJZ",
  "key7": "3qPXCTLLHDC6Kh9KEKB8xcJSr927z6zdtWMMCioUwPhwus1HQaC5b2VUf5qeLgPhKYkKgpbXMN9t67ZZUADAMEAR",
  "key8": "26PmvumzGPj5a8wugw74T2U8NaBEBtFbokHCTFL5EdAVzTSnaHKHgSvsnNYkjmuTaepxndSQ34ncSSjN1ckmEmER",
  "key9": "5YwWsJuhmXqXyyPnT3MEL26fkt558NRzdUXXqtmL7dAEcXSmcBSXQUwt6ZHEZbrLyBjqeuNqyy9wwduSQ1Jmg9Di",
  "key10": "4zmkQm2fGvcuUehdiFc2RpMSWhAJZBqEhX42bro7SELmdcQMqame586Gp4ECCSf2EMMyZNZStRRnyCyAt3zWye7T",
  "key11": "3DHMZcGQs5qnkpBqUcB59Tqgb8FeqRcWfsjDPKjBDDwMch1jEaxKapVL48PRahdvHjyRJMmHKBadZhBKeUasZwhq",
  "key12": "5JMrW5967zstELaFWrZUhxRB5R7tDJrGhAeXGNkG7KDW3yvhKdxUeWSDnQKbSUhvbwCZbefXywEHmg6xnCCLwr3y",
  "key13": "LftmztTQfPcNaVZxDhx64yMRFV1a888cMbJvzv7ECueZEbtaejbeMiQdoNAVM54qzg9pNrXnBkHqsf6eqZpLodj",
  "key14": "5NcgqPJ7uca6TSzTWQs6Ecoq8y5gxsvbXg8ffcs8SVx89ZHzBmyBpGsHGMHg5GCTqffG1v4dZgaRTHdgqiEjejV5",
  "key15": "ZK1Uw6BdQCRpXN3RQPb3DYHbNHawqpJj3bBdWaAkKZcfM65grThPYRVaTkdYJYUi6RUcXJQ9V5XxdrhF8iPjtUW",
  "key16": "5tDZb1ygTjDv7vDc6VDHTnpWnjJj9ipPfSEwjYWVLuApYZDdcBxcUo21VVhKi36XpSDf4ESPW3T1F6toYsCkkaed",
  "key17": "EfQKXGoyqwsmMpHrzoQKUVJw7MuBiyhnqFdyHLUJPtnpHbpt2aE8Tc5B1t8qU29sRn7JXPoVCpnQDfpCeL1AusZ",
  "key18": "2kaELAgpoqc9CnBvdcsof6K9qDwCGUu4ni3MWspUqLUaipsCmwQTraq18ME4aD3zY5AUU5upiifRJByyDDtMm6f5",
  "key19": "3AUyJrELqN4DzZF3BRTRaWG3koHmuTnX6bc7e1t6Ei2VXAY1ZbPK5nizy4Z3E7bvPhNPUR2jYomHTPnQDTBWJQWf",
  "key20": "3LaJMQNi3kgw43hS6rw3hMDF6hCsWHMUV8PaLB8B4CMdrTjcPpcuMErtapvuYFwmAviB33t6KmHmzcVGYZpNZVZ",
  "key21": "bqjRZFPZYKfab2oVADrpBfzzESy7h2B1sevXb5xUtTVezt63ccKAnHC1aXSzUzV5yTDEHfPTJAX6oVg6Aw1YwUY",
  "key22": "22WREepw1xNL3kQdkzFqUduKz4DoSaTN4r4cYu5jWCkeLXXpdiK2UzmzX3sqdoTC1NrHxncZzu82vfvGg3Y7dzxz",
  "key23": "2nzR2iiBrStGifQvyL9nd5icoJ4ErNtnuMwxvrbNmVfnxLMbrCEgtkngzA6cvRHHSQShBdnjkQGA17kdhciyZXXd",
  "key24": "us1jrDaw3J3ACpxBwv4KDLu3Bo7wbz5yW4DbWGTkN4HzEqWbrzqnbyZLve8V374UfDN6QPQunkehwJWeJj1QA53",
  "key25": "3V8U9PfnZW5iraBEPcftYtq6AwBW7FDyq6wdQ9YvtWyX4z7M3t2rN15dtq1WswuVyV3XRZZ2YpPQn63sQYAfUV9M",
  "key26": "2qEsvYtobB3chHyqRYTLZWUfj1p7UfmC2Ccr87jHw5h47R3L8S5NEPQZu6NX2UdvfiTHREVtAjz6NSvzhvsGeUvc",
  "key27": "5FcAverA9shM2jGp5mRuvNjF367fCt6w1gTUvYhLqWngWKEQ2R9j6tZEDY2xuxooKQ481mWJF3DWr8BJRyLRPJsz",
  "key28": "2Hyta2zzc9LtuaTakM9jWvNBV3tuS7d18mokJdGEnZvB7ypGTemtWqKzGrPBQonYCRHprZAShwGQa1MmxdUU6LG6",
  "key29": "3Eg2VnurZhyVzpRZKuhF3tcYivbaQzRmqfXMNSzZTqF5xLFpC9Vpt7FoR3YLeS54SZumutXLfBKbC2roUmZ3CTzY",
  "key30": "2VHM29Q687vqrVa9SnsviZW7gsKxb9Eh5s7kf9Z18dkYSAgMxRKXjgcF4HVUu9gpk1pJDYCije5EoHgo5eBZ16Mz",
  "key31": "rCmYAkppr7wjFqzrzrjUU9gjr5h39Lx7roJggTcU8jSn1P7DV5Vrp4s2xajaUuzUdCLgH3Npm7Cy8bYrQUgvyTA",
  "key32": "5Aq8XX8oy5idDdP25FTbkNxAVKYQRC7kmXtVVvSVDJr5LXvZ5Xw9Vigcb224Zb1oP9hQq3bopkGfBnK7pBYwBrVr",
  "key33": "3RKDnvqZG55dUgF2LWQXFpRin4kgbBGccdaS73VjQwxcGBtonetsSXhFtfcZhhHAjwQno4eLHaRySZeRq78f63w4",
  "key34": "3Sq635NWE5mWgG8mvEdsAAD11LkNk1nPRpRD4AnSrbFYaQKDXqgB2z2ycaSB5qp5bdzaV2CLNuJxJ4E8T61cgsGp",
  "key35": "5TK5uyGvf5rkYiUnjjc1tD5qyJFgotersKDntDL2AcFyk9rM5YPPA1BFWd74hRd3nGAudtFUBE4kgvafn37seQQj",
  "key36": "4CxDD84nx26r1EtrTvnmFEp59cQPcKhM9NUqkce2VXLagT57hmwJDqu3LxJL3j7JmjyEkM683NS6kBjwTudf4EUX",
  "key37": "4MRwNg9kJu2qxjB6riQcLngTstoDUT1WdP1zGJssjGr5ZqLDxhUR8EYxkvaP7qp2ruMwik9kKjLnuh4TQM6RSPCm",
  "key38": "5NKVVGPRWg7KBLXb4Vb2qpfFgwCvRyM6zr21DfJHtLrdKsgTPRwKfsAf6KpBdTZGMY1wYCobiyyWQGYaAoKxjiPr",
  "key39": "33LszMHWCH11fCrdZJ6K5uYaZkhT7xM46PsZ1Pg1WfwScaXMEDwM7ZtM1KJVr3EM2b59LbGJC6at2bcdDP1rFme2",
  "key40": "7j86iq6CmWqWNLF1thbutbh6mbiuJhCN4s45WVDsH8NCgDPmDeaspA71SFSuxa5ysB8qTfDq3B7rodxPfNL42YQ",
  "key41": "2o6boyyMVpormB9LBnMDporVVQ8LJtHTQT7wvvhzwKBSfxE62wBdq73aGL9yWLZimqo7v2LmgnFAY3p2kkMdsQoa",
  "key42": "5GJ6X3Rw7uLcrV6yYvAUL2oMdEbYsyutDpUiM6BDMbAEdCbD1dksHSMb5mAwLTxLNURWjXdDH8vRXgTU3eF8tUpR",
  "key43": "4QNZNoSUjRoRTzw89kbrHzRJJ4iZ9edebR1tsjCqyQQc3RHxEYBiYRivBZQF3j5dw9U8BK9oTw7UtzdCgD67zdNR",
  "key44": "3gdxtHhCSUUCXcGSkE4DHaZgwTnvJcdtaiWix4mLQGsNRzXD4244i37s1STGQnGEA1EptjdimeifdtajR3VuwBJY"
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
