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
    "2YewwhEEs97FfQ8fqCkZ6TSP2C8qRhKYRimdwGYD6fFmoMTDhR5izQ2Yo8zxYxjQQbZUHpY81z1JocuaVpc94qbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54mfH66xXCoY5h4ehX9GMoLuhjbKwKLf9PL4NKiQor8UNuLqKPHfNGC8P5ViytbxWQJyR3sdjKqt41UHHGa9jp9i",
  "key1": "2NTRdgRuvaJKv44yBXKaW9LZVgmg3ZkJKvPUWkXbGFKwSTnWQTw47HBUdCa5LoSDrKPAjNrcUPsoH983zfA7Ubjb",
  "key2": "5SgoFKyni7EVYafQW9a13MCUcwWNyLMVUyoFUzJCrDfDquBkCAHAj2T4mqUky2ZuceqjRHYdq7gjuMdzZC553NQ4",
  "key3": "5cDtpgGYXyUAU9niQJSDKqvtmyjF8UJCxHBUfipBeCCYkYqPjAGopZcMi3KZupmHta1q5pT3TFFBTikQJ87YM7EY",
  "key4": "JSoGWyGRGeFJ3Cb2KLPdxjeQTCiCvDsrBq8A2CHwYq4vj96Fuid9FqbYSvMkMUZWLpVCWxTjTMQ3SaLL9HMLxsi",
  "key5": "4X2ekm4sXN5QBJb48WhEqnPLm1uNFmDRWBEzKG9TtRDgqJSAKdNvBvbkXw3Ho3kYZ4bzR9uedpqpMiEkwtZvnVeH",
  "key6": "2LAxJ1aeuDJkiVbNdyPCKnUAQ6DDdpZpg5P9DKF7siTyaUET9254EAfq6m6xyZPe5qthe4hdTHwm9daSRRy5pk54",
  "key7": "4bPaZgcH2PfKDdFQk1ivmyyNQgQ9kG2FpN1NVwAc42LftxNr7PR2CyBQzQd39wS9ypaZbDtk8LoYni2fwkSKSsXf",
  "key8": "3S87pEgdHXd5izthe9rTKNtdG9zHMJFzGFrQqiZnYB79ZuUKkhhRjB8YTcUdxT9uv1HwXvEbhwRcHLXDKcTjRKYT",
  "key9": "pHFNnBDqed6bFrCyyb5R27uPgEny8PeAA6dWbCnmyxKUNX8o2i759etfEmyEwhwwW5NqyJgcgYMzMBfUiux5Hz8",
  "key10": "3aWpUb3NBUQNx7dWcmuP9awNQwXvNZdhMNPoJBNoTixgyTjVyakh1f7BYv4U9UjPi5coaNprMEsztu1yptw9m6Pb",
  "key11": "3VwXAMXJP8iJNZZgqpJexbF8JLH5JYNZWj2qkxWd5KXDe3AsKo92c6ZyhRGUCoppbhDbZ2ZnYJr4xkmaZrCJPeFe",
  "key12": "44QMg6SpMEjawLMtbUaeqYC8uba9a5PBLTTVob467tegEnxd7bVmcFyBq3aPX6krUjLp7DByWuTBkjgY4jJY9Ufn",
  "key13": "4SZtwuwSWW9PGZwYikHrMqtiVXdMbS2EBwbrAs9zT2hf9BskYZL6P3W5GRQk13fUbV5rJ22DQUBmGd7RTLr7ih8p",
  "key14": "4WocqvqmPuuY1ykdKfjdGYVjCxD6C3xK2u1owwwXab7pqkLdPu9amjSkeTz4AtWYAm1S4QyJ1mggxpcMSbqA5w2X",
  "key15": "5fpSLcQiiYQqdGNxuyJWKUHDvU8Mpmc2mjs8YKghRcwkUWCf31XqULWN6d4wQmnWhp5Fw2QCiofh3Y8SH1rMx4dU",
  "key16": "VpHW1Cqzpsh9yboSUYMypnkBRSdbq4RDe9B83QwzXWfaVrHwitN2nKjUebAeoG27gEVRyKLTJXCos9Y1HGHwnvu",
  "key17": "3HY3ScPY6N59hXU1XQaHBhNJ9KbxLWJLiCWUqPA7nohpL2P1u44XBsPxcBWgBPWoFVAVAMMHxinpK2uFZ913qE6j",
  "key18": "64LPxvBxQiiWYtVg84vGpfZjiZWokE6UeFVMB8x5SBXsmaxvJXCDAGh3X8VG96569Uc8mFEjpRmXFurSoXNnx5PE",
  "key19": "4pTUn71XKiyykJRSjgMM38ivdeDczbvx6z9n6eDLfopsQVRxs23jnhChpFxXrDnHZGEtF4omV9ayUjDWkDTx1rix",
  "key20": "5PKYqUPjPaZcnd4djf3cRSPWa93aQZ4WWf6hpYhD87U72xoEDwXrY4HmjRMbKf9mASXxcSaV3qDcsGwfBiXESiQ1",
  "key21": "27WSEuZFG2iVYQXjiUNDdgEwmxqHryxK8u8Tukd19aLvxA7QFVJYgJ3xFt9Vbt6pvohzz4LU9jY4MGV1NhaPtDhi",
  "key22": "5D7kfZuDQ25sGMghFSB1sSTmaeH8PzRTYpRPb8TTZiSaKCWycCgi2xciwzsBKj7qDy6QDL7KougLrBuacxQcZZoE",
  "key23": "39S8BDBHAoufQyr9JvZJrcykdSiiBusnbHjeD4h5hVMox2YTEjxbLUYyV5XfvniPSEfaX4UktpMicPjrzH17nUUT",
  "key24": "3gijDFFXG1stZbAjZSSZEt3ifr6pfsbvxdPRVJVd4T7gKU1oNQAbwhojZFciyDwL9eRsMSrHvDvrRfp5AUmo47qA",
  "key25": "2g97e6rmzp5bqy4ZH3NhJRghdKxm3AaeqQK32fWCB2DWmfUWaq2sd5ZwF6HtoSt1u4yaAspULG3tbKTBshNzqdW2",
  "key26": "44MVJe8WuUxBQ9f84aR7JN7xFteV5pWhyjjwZm7zh7cLpLMmz59CACYFjmPE93gEq5hk6fxAQPHzt4osoQSynmcZ",
  "key27": "5SWRSbiBXkBpE2tBSh9QhYbjU4EBRQyUmC67pXsM5dUQnySPs8UGk7XeLyXhrPcg53jENZrbDE3GNPAn8JAiP9dV",
  "key28": "5nEHN9oLW8bUQ2WSncUuSi4niWB2Jt93WVT4VdoXfeEAkPu4jwju644vMXnVEyoxk6HWM3dp6NdXEKc67ohN5m3Z",
  "key29": "2sxeqJckF774u7wrqCVfWcDtMn4TtyiaoAQnokoizHcF6nmeSWjPhrSEfKGCZPt1gvJyyciHn9zYnaGQfWYhvQw8",
  "key30": "2K8AvDiT5eRiak3FJ65aazrghwjVFkuxifbnGtuHZBcP9FxVnYCFuow5v63UCtrPyy3UYLwxsQBTpiYAbha9RE7D",
  "key31": "33tyv7RsyfDnLpgu9hGwZeWJEVEQKBxXoNLECeNrRi9U6SyB8d5QHmjXqUzYJBd8mzGeRU1L4JQA7fRR8Jh6Hwc",
  "key32": "4vvG81LLesD6VgGDsxjCJkuiJUbXLGaz57NCcVzgitNcW86rAuwWKhcBzgQbfiip16MZQHsc3CvX8rXAhZRAgKWC",
  "key33": "WbMJNPKqWVhXGixDLMGRspRaeEVWutC12wsVEuAPr2zVvsYy9SpsqhY546mQYwMNDQTix1cVNuk6Jjz36XoBULz",
  "key34": "3EiSNqsus3yzoebt9m8uVwRqsm4FH1dv5Qihjfoy5dSXcfXExk2vST2dWv6W2VZiLsmHa9YF4c2NWasR61njtpEi",
  "key35": "4ji3muXkM2yNtdXVPyaNeWQwAPj7VKoffySJy7asud6V678b2hrQydqhDrxL9at9BLWbz2Ufegpw1aEXPMc12Wck",
  "key36": "xMjtqsJqEUn4WxQhSXGfTef57V9v9ErHSTHQvG89Nd5ArsNt8PEtnZG2bpReTJhBcgumtuchtWLTMJKD76VttvA",
  "key37": "5b5VeoYrLgMqbp3U9XBeBTbEZb29Wrxpzbz4VcPfUXG8pedAbhjWiGXbtySSM7ZGyBriZD92jBF4SxKb4SdE16qf",
  "key38": "3Uin2NL9U4FgJ1Nc5qA5LGW6KtWuPNRbJmU7Nac6qa6gFZXoDJdnHwtWuYMqAj9fSgaw9orkRcFPmkMTjY8o7UPR",
  "key39": "4GvoKF7WznvjQngzY5DMkH4NPhXHifa9W8jys7MeB6j2FnH2z3GS7scRoCULPcVMKUBpjSS2jYUvzXNESejmKBeo"
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
