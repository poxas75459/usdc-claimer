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
    "4716QMUgH8xGzbmpB9VXFpFUHcen72HBt6AgKNdTFhLEV6M2i1hrWfccFNk36ohnM2ZPXCEoaWierwnSybkv2238"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "484TzUi9BiNfxryuui9dHdQT3PFmuSMFQ3M3x54cwGXA6qRStbjFncG1p3wmTwsGbDZbpun63xNx8nzaKLDLdN5w",
  "key1": "3MwUva4xoh7BpdEdZYrM773T1eU3HSukKcteuhWgbahad31FGTeBEheLAmfd7XafWQSzZ6rtS9zFVwC1vqXoNY85",
  "key2": "5utJxeJanhCLzQsBgrYdRbwSCwdYsrmUntNbPCKFgPh6Wy3ShhUztBSDZo5M7q6KjACqGuB8FVm8EHqHiUCa2QRM",
  "key3": "2v8KmS9o3GHmUoxJuhgYw5CPfAycEaeiWNp4fdxWZighfARSy6d8EbmtsayswZxMXFet9Qmu6GgvxMxSDDYXoacF",
  "key4": "KPXstdNctXWYnE6zXWLGFaVm9NJKLktLqmWVEGDW61cznZ8QdJbwY7i9iZYKsrJrLUwh2c67NECMwJEECjM87Ux",
  "key5": "4fhi3AQq8rQx4PEroTyHp3PpwiCgHMU76sUFKNxkn7mfbAKsm2GHrTd2XcWwuc6tEq2BRAQ9fSwHiHmXtpCW9RGd",
  "key6": "617AzEJcjkob1sboicm4rsuJkxnFE3H5scNmkopG3VQuiCDptCMcchvv4JTHFquecYfKjiptQhokEHPynbxrjgQC",
  "key7": "2AMoG725cvXv7RDgpbe6KwnGSPAqaVfQkzm2LUsCprZA8ndYnANyZ695muJttEp6QDUiRio8UEa7nTqKbQKkQsS9",
  "key8": "5PCquPG62xR9zuNN2iEMz6Z31WE2Sifrjw7QmZiA8QJ4eDY3vRpVde9fskmTQzU4xLrVtvHHDHTmKCP5jVncoTSW",
  "key9": "2x3KPu4qv2QK3hHrikDou2wrRE2xhu5nET2XwzLwuKxsy2h6WtEEThrrtbZ4Mr1E6uSVqvP2cPkTUifQQk1fWwNu",
  "key10": "4Wpj2BNEHp52bSKJMNaF1wPQRwZVdrGJkd8rPXmypn7k44iwXAjEABwoFzhFxB1eeRPdgf888dyVATK5jMSuVo35",
  "key11": "3HCciop6hgBzeGAzeJzunweofuGmYNApNKmZgdsVfQGrYnLxpkcggpx678gfzmEoPPDAZpQQgC4vNsA5PxB6z4X3",
  "key12": "44xyC6Mh5ujwrK7Bp3szDmbxXFGcVwQnV8yforfwGZ7X89A2PjPZX4sxgAVXkZPU166ZHRwG2XZcag3gKwkFNe1C",
  "key13": "2cenSgfYSu6aNZG4uyxnVF2Z3vWKVDGvnEvFUkNzQRBQrcYeAmu2yEt3BMZWDQL9avmxcPTEQAhxewfFzGUUQ5WK",
  "key14": "5zBzDcUVRvFtpUn4bpzEPaJzD6iksG7vvnMk1GJhg7hscoDSYbWZLpZzpNSJ8e6R9ADqquvnG35hYysYqT4emFH9",
  "key15": "3aCoQmvZAtYAFTcmSdb6QUhVAeCvZpvCR7bjJVP2KixncVpT3r7R3hVysF95Cv4wSHXN11fXr4YGz1hPZHHJgSm8",
  "key16": "65GoxjU985awrWmdbgWJQZE6EHcPjgzHwRrRaG2pc71JmKf7gAAeoK61fbLDogBf5RUrnQv7sZxVdGUh5UowUf4g",
  "key17": "43Mt3ZjB13p3jz97F5NQTGWkztQwrVPPx1eWjmvY9rdRgSGW1a4qkYJRYunn56oens5zPAAHDCejc6DsvMBqzNuq",
  "key18": "3Md4Z1JupXJ3EoCdqqoxtQpHyzx9taU2xqu7U3Rrg7VBMFNq6Pq7qEragfKYMDUNw7AsDeNYyzK8mZoXnLZMkLeZ",
  "key19": "5om3uWxWYiWWQXRgxDo4h3n63u1nyXFWUpVYSGmmcQuMSAF22QAWvZHSRs31rMGKZn2uVTe8HRsYRNqikvBLFjef",
  "key20": "2XDLPZaL1NHzCTek2EGk5VksnDMRZjWyedcRAhjQ1AUkuE6WJAjdrUy36rfrsr8GvfsMCEF3TvP7yBvLTaDxn867",
  "key21": "4pfTgxihVoePqA65eo5UknB3oqj1QZueByPJMh5kepeNwTufar4vBSQeuMsJFDuBHzx6YpbkEhos2QrPytY4MDrE",
  "key22": "W8GE1TdMzN8Vwc5DynQP76UK5HJsbgiR8f89MBdNPfZSdCTTaAnbErwGokFjQbXZj8GcA7G8ioCwPtinuNUDuut",
  "key23": "42yxUs4KyKJcR3sgoQ2dQrnE7hwCCfDLozYvNdBCuExZZyD9nynmMCGi6nQFgJKt9djgoVbVfaWDFetF65QN6jVa",
  "key24": "3M2Yg639RVCyPZnQBDe5gmsVRd6nmbwSxcdGCDNB9WWmMDPBejNKaiMwVgb9EVfLcuJ1oFzex6f31tD2qgKedsK9",
  "key25": "4JcLHR9RsxTmMFrttoaSg3dPjm2L7vV87GPbhfWkrcZfjd9JyjhE1Zgt9KW9wGacwxMxLUoeQHfxediStHgtRuX9",
  "key26": "GY42fyPutWdKd2aGPjhVjk83Dkd7fRkB1DtK5xdRQbqAH6NsbecgGvJ8LagmVXNxvg1BttXvv1YDVNhitpAHjcV",
  "key27": "5NfqeZtpeaMxMeZXfKC3GCQrQj47ro5rMoBPxXdXYEySXzt2QaozDujQLqnGgkksZ9vGPdgA7sT9i8CTeiJEEJBH",
  "key28": "5gnUZUt5NjuyMvUPWFLVcdBx3N1ieALLjcxDA5F7ojwvK3UaQcBzRsvFhoMyWsqxmAEbeBpjbeag4em27tsrp4d3",
  "key29": "ssbTAWhh6QPMqWfhD4D68FzXq9tq6rqC7hXhBbzzq8qeMNZkgXr41DqZGio5AWidKa13zkzzumfaXVzNk1XAZTT",
  "key30": "2trWZwuoEpRKV5PxkT4GRrUWhstD6m5y5CLMb4kiroTS8StDPGGz15AtHyP6Qe2QrVUCXSLyW5odwksJrQ9VV8N9",
  "key31": "YBEhcUxhYskyAnJfhMNScYjYEPbTiLFg244vZzwjU5qTNczrKootx1o5hpxKJmkAfrZ2MFLkKcUHeAbUMnK3F48",
  "key32": "3YfogRygDJ7DMMBjoAJw6gKXax7LEmKtUNP7oZVeCwduP1xpAw3Udpz3svz38dRRdDqybvMUauazvX5knxfkELyd",
  "key33": "5EqN9oWgHR9HhShYkRe97foNJET7DmRZfymzVfKU4nPoRWkCxqZRNJhPWcUaPtFf4KwNUE8a5Z7hbjuu7FBNjWsR",
  "key34": "3YehRWvBdi5Ac5uw8MpVW8MHxzQUZL1a8fNy54xYumNDcuXntxjWtSMWPymBphudGCCM8urZ23r1V5Tvgxx7i4JQ",
  "key35": "5UnuqQFVHKQbZkrCkj1e1LSBaXZtzmq1oa4hAeK5YqNNhqK854zW3PbuA7JKoFqVViLmUFKa3trJfUbjLcyKBiHS",
  "key36": "tAfG2Sa4tka9WEyvsG7Si5pSokeftaZqLWYD25BYUayi3v3Mv1YuvnP2ELJoBk89GVwW7PZBK9ZBWtw8ur6U1P7",
  "key37": "3Jgrn1yHktca55LSqX3aet1fVf64geXg6d24tBRBsQEHX3c3GexWzeR2tEt15BwRSxDRUAeL4PzNoj7gB7cnV3HK",
  "key38": "38VVVSmmb1KL6qWsBtzsLRdxiPfHiaHWB4TY5Gt9ViaEHR2AAoZqvKsTCkhLn24dZyTYEw7TUf3511mdsohsfh6K",
  "key39": "63ran4fei8tQSK5wm4YA2c8JTZBuE8Tc4ZoQJCpNakvHb5SFeXNQnkHt9Jzg3He5fsgGWFqaVQmCATBkTnJT6JSj"
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
