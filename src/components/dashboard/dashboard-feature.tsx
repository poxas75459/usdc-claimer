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
    "gt6MpaZzWE1dze9tkHTC8Qu2RMxWcx5fb85djPrm4jG6QGy2irXFpXsseUmaPQKhG7NVGvRC7JQ2i3UnvstytiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJTXtSDRMFPz4P2XuPXn2ZkSWPRDQbN6MiaEeozVQf6kgvRYnUBGvz93zYFHg5gWob8GgQU43yEVyYCRfLS5eoY",
  "key1": "62spHcd255id2UTv357ofLv583KQiorbA4WUPPK6Fndiz6p4Pp2t2hdk4vEM1knofP7jiAuoeUkaGxkJ1h11Q8wD",
  "key2": "4yYUWYYEu8mjj4QWxRq6Nn8xxTjoVEtyK8QranvwGK9jiBgoiGNsTiAUtBPoJyKTdhNy5emMJTPsi4xMtYSXLWmF",
  "key3": "2xX8Q1Z1TsFMnZZmA8xsPx79z7wpSdbKzkN8pzrx6CLNhc3sLgTDmisah2Bv6Zvf7zbPYKvqNDq4sVZ6kycV2w8h",
  "key4": "4d5NXaqznSEWF73X6CpJjDxjPf9YJi3FfBJah4gSeYW8vZxRxQTnjCENhP8hSXw4D9s8TN1b9s4rToMt5Yk3odjm",
  "key5": "iETm62TVqB8fHtGhYFehRGEWXiMGJZ33xo5koSmc1hA4N36DeBDzj7wdYwiWiq3ozSrYrQzWSWyA3pRhXKH234v",
  "key6": "4WW5hHCMLPSMZRnHeWcUXHanpWVVnwvfjawcgppdov2PoFpduymmH6ZSrXLr9ds9kSWSsR92oJ1Hc1m9SL9qzRmt",
  "key7": "3PBwssZ8BjrkrXtcaMVo3fo9twyYkKtXYTmhwBfLxB7bKjmpDU8ExvqiEDnZsJFXMhRKJL22wVnA1GEtFm27C1s3",
  "key8": "2C8EKNEgMjFbUbeyr2hPqUg95qcTQBATa2gLxnt79i1fRgqkK2vfJur6UHuRE5xytayPy4uFaLRDaEU8BvNuC95q",
  "key9": "29Ga3mSrCNPJ4TK4zSuHEYmcMpjKhsFrMhfBhz4Qs93WhHzq7pF7NGsM1wyMbtpUa2xTG6uToFB46LSBJYvKs7SD",
  "key10": "nNk3JLQaoD46oS7qv7diVYeKH2NX1iStRLUvDY1FTuFA4KyZi6xn4eL9fPgjQKArWZaFPVEdpAx1mu3Q3PAreaE",
  "key11": "218UbgrbSv5ahSEErHZGYxG2fRaKgagLUXmrkTCvY2mZz6UfaqT5GLpEcy78EQkuMbhWgd2z4E26WjXzpkBLWhMj",
  "key12": "2ftJprqrhTZmsxV3MErMTjSjEMR7Z2Ubd95LAjNiS2kCS8MHhWavChoAmLtfcMgbjeQ3AKn3ycWhRqiJJhwChkLy",
  "key13": "4N4scDhjF95mstjspPwvxtaryThWp99KmDXZ4cFQfPWSZrqB7VUoVtsxxj3yrWYP95TnRJ4Lc9XLi7nXiuFBcL6",
  "key14": "2zwxSaNqWFJo9SSkP4j3tQAmaky2ud7rGpWiEJZE4jUy3pE46vh52D1cZq1i6PTJ7bg2fkonsnAvffzXz5ceKMB1",
  "key15": "3ST2xrovrHf6jqxUdrHZiptDncKL4jCuvW4CP37wP7TNomoAA9WTUWRBH6DxBPqUWyoMjt4MgpdXWDRPTpDdo97R",
  "key16": "5Td1DwnDjaAMwxrwd4XA1m4N6hLUqPAEuqWhQRacCUr55BdmS3svfiNRnnYSyNd74XwtBH1cN1AtKqGkbMmoQnMP",
  "key17": "5oMdfanwR7JXVCHc8YV2vRhdgNRhgTekYL9Pnqt4aQKhAyTw1qGj94RneXzAMsDWNNJwqLtkiHfbVmpSGz448EP3",
  "key18": "hciaRBjWKBZAMTjSyQVqPFnrrEWg4taQJqYGZvCVsXVXsY5yUEQN5AqZCtM4pEVh5ZehmeAoZgLM9jBnpDDfYHF",
  "key19": "ZTBC2ERQBXisjfZboJvz8n937rkAui8SUb6PQasAoqKEVKs7osQDHFtSYhcE6BXG2Kr9KjTUUzDKma7PAGLiQaf",
  "key20": "499kr39vzhchmL3b7ssYaDxk3svfCmcGxbwtb2czcDZkwzfAz1M1MqpzUPE5qjro6KWgaLgXa5fPJVoQA4E4p5Dt",
  "key21": "51EhjWFNHjeMXCQk32365fAnKtWgaS3TZfWdeodY96XaV2Zs8hznJjUXQKiHfufDKMTpqvY6GeU9VvepvK88F1UB",
  "key22": "3uksQv5WE4Zuj1dkrXGrBxAwZZCfnK7RLJWfNmweMjMcUYwX7QUnEa77oJnBs4x7oX7WjmEn94JX4qc5y9TH1n7i",
  "key23": "3ubeAE7nAAhUSrZUYEVsSB8ZbU5pFQ4HqTBuPE28W5ppGyGianM5yeY6SybJJaTMtACDmjjSueK99Poy6oL6Nz4x",
  "key24": "4oVj7JBG6mxasKa8A47qFrz6UuKE6JjyyFrf8cLXzsimX5U7Zz7Xw5NLdM5hHJufm2Y6MogPwSFxLUj1RAgQ5e1m",
  "key25": "3CBKSVJjpupBehMwGGrdnx8gDZfhCMeuXoCSgBAnKo6Gt92pZgEv892FhfvfUUBfoFhVTWhJQo3gmsYx3ez59n9H",
  "key26": "3PoZSCkSTkWH4KqVB88UmWZSGd52Asku63p7xPfu62YMejjygkk1exzVuHSQbL5Gs6SQFxzUKYmBRpiah1GqDjbn",
  "key27": "59K45CxX337cJAQjjHx3zWGu6gHbVP2v3puWvLrny5paR1vP6EvZW5fDnC1vKnsMthebNxnyUTeT5cU5VBe3hF7L",
  "key28": "2TK21HpKLKgSAve35stkSJFEc8sqrxpiATNwQ13VfpAkXnBW8tpYvh2WC2tZEVksgc9fGo4L3GsE93DHfdRUcLjF",
  "key29": "4ZNVkbTkBGenoJupqrnXdWhymAoWfBvj9pG6rySgvHSTzoZTHbiSDWL639XPhvsMHQQFLoAhGHoB9qL9e1K5jCTT",
  "key30": "41FYBcqWTNXXDh7tJbiRg77vdpHE5PToyR2JJBC58Lje3hwpge8ZGKko1zW5yzDfWakTyM5eT55efLX7occpR4o8",
  "key31": "3fpLi3ApAgqKTkQfJvpM5a6P2gNa4kRbG8smMF2BoB6gA2n5cTiCVs9jew7EgYw2JbycoAh755kW5AsLRry2hraC",
  "key32": "66EdZRt5DDTyNMJ6rrvMM5Byzw52j9mpRfiryDqVtfk2rjRryHRzTbBCQpCoBYvHHoyAnM1YBP9cDn8KMnRo9DXK",
  "key33": "49cGEijiRSCDezcsjsinbN7aF825xiXZgw4gwt1HrxrJYWJ8eMfWNXYHnTFriucnbdRRd5euNrUihYxbFyopsK31",
  "key34": "5o2HQm9LfuFRwGRcRoeBYNLJ5WE4L71BU5fCXcvPp9XCCmjE8CzNHWsn3LaMLY5yMufSAwzjeJhqiCfz5vpPjyr6",
  "key35": "3S9GRjfwPCBV9WFzJUUM9kGXmFp5RWYcik4BcEygeHFr1WicJqGPAZaZdoaPqWufXwFu5k38enNC4A1Jc6a9XVz8",
  "key36": "5KrjLf89K2f1zNzdRYoLJ6Qqx2g2NorGSe2YtS2JarnEg9iBMqtRADsdqUa153FeqQSw8CUTT7RizsTPgWZcUKiM",
  "key37": "55idtHNuwjGckunjCmU2vwDGmFjUPHgnhTP19P1YzTyEezbrYyS38ZtPpbogBgBQWpJHeP8BtVqtmmAcYD8pgH8P",
  "key38": "34wvu63YHVdWko716E6vgufSZPqHF8sCxJUs4QvnDbndfNMvJB9Dy2tL4YecFtpJVsDp4z9CWfRdnNeEmN14b32S",
  "key39": "5KryyTL34x4rdNmtdVKWkv4kCkRz2meqD5MK4KEo9PWXdyZkEUAUL6amuh1tiFHqu3a3n88YaWgbVnruj2ZtQBLP",
  "key40": "4fsHZEfacaFKPZM9WjJMukXefstxNhsxL8jvVkxKEE2V4wnJk7NNXKgBbrT8qjEDHuV6ovsH78V9YFejCJpSsxyP",
  "key41": "tdXftpCNtftNv8roBoYckEagMXQ7UUKUTjqGJ1T3JVMLhvct1e43svnPffybfgsZqaE9kPNwqr6TnVvu3grsMk9",
  "key42": "3VwjFpQhNBXFziP7fESksvh5ZjBYex9eYxDyVYVHBCDpuj4oWFnSyjBNk1r5SpdXY47ww5EBp4EnHUy5TCqGbEiV",
  "key43": "3z5BjLsciNUjapWC2NsD3z5rMZoYYpSwMYU4yQygygZ2GSpAYazsJed9GoDtHewgMQrdnVw9Xzyc9n2LQikCwwjx",
  "key44": "2xq5h1oiJYkCoXwCVzgdyVLffRKnDmSX4KLLkrTBtS8EfWLzArJB2ujYT2W3VdeTGP9F7YKHZcp57BmifxFZWzMq",
  "key45": "2KnVeKfXJkG7qpbPPhUft5vN74p461W85566HBFqeSYbVCsaKhi1biZeUms34AFPgV87rwULMa9suxU2We7rwDhC",
  "key46": "HSiFhk8gGZZyEzssndfNho5ZFUwNbiP1ExuxvPfHJHahPggP2B8w6kQJm93TUbJiBwTm4k8ooncx8pE45W5kcT6"
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
