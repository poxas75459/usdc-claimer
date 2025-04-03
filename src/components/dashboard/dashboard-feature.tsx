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
    "xAwCLqUiZTan2owhaLnTi57kAsrp2dLgBRZXxDn2U7nMjGwajvqRPCgYAGfNC6K7A7noAKzrUDd87e1rG5x71fT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zFo4bJ6ug8mLbJmj76xhGrqxfYmDrGebmfwFzAZVqPZ4L2B8PB11RjcT1MLGWPXanhd6um42hk3vfGPqbbkMj6F",
  "key1": "129vjXNqq9WhRtY1C5L9h2sTY6AKSCoMxEHaUapH2Gfo4kBaYYQ3Cu6NmoJM2kt7K1C2kxH6P82zyX6geywwqEoc",
  "key2": "51nhgP3RhxkVsw5nEGuX7dduyX95KoGcHUcU7Yo6jYCSoWH5wmgcYFyXwZWoBt1zyBeCTzGHKYBZJbQkDd1ickEK",
  "key3": "WwtUBgBwG4E8HDFVjZg6k4fkPrfbMvrVEqy5hJHV6dj4iWRq7NhyPZ94XuZTawstXphiB5nh1WYXLUfGrtdCXZP",
  "key4": "9RL3be8DsaVYRdgN2hhmbS7rcm8qSrjmFDDpdwtdtsbpvf6RA52cReoQEE96tW9qVQR16qhEHKUhA5JhvCYFnze",
  "key5": "2QW5Nk3K9eTwJXV4obmGXqpS2CkZRegL53kRtc85BDLLxR4X7C7bgupHrJLTsgVjkVjbBcsM2Ds6wNgLoiDCtQ5v",
  "key6": "35ktEwzepevhTLjetpgLvPfFiHTycdg1pm2zKp1FeoihEfrxzV5hWCtCwqb5wBjU3H5eonKqb7YjSvcYCo5d9Drc",
  "key7": "4ffoHZSQN54e2evfLd3u3XBoAk5D1k9PvdBhsyXaLUeYcEfLkoTmcaEfP2sgx73uRzAdRZUY5qV8mMcGZ5jctvLo",
  "key8": "3PfA4caSRXXiTRunW3YXHHXVq79RRv9V4M4Uwosg7Nr6DETmek3MQHLy7Ts3CQfoqUSTvTqKS2t21RUTYUEUpQw7",
  "key9": "3yEtCEGdjJPWPdFup9kGjCT7rsn7vj2gvkncsGXsbu3qezaM1tw2XYLpMHVhvwYRW9bMjXPY6pNQCCseznbyjPuq",
  "key10": "67nMQU3LaYV6P2TQABdS7eevddXjrwe24qbLCzPiyZvXmy8b36iyfDcMVdBfz1WjYFaHQ9d9t5SenJXxN2VJKQJt",
  "key11": "42JRKY67qvhRcb2exgMHRuiBoS923HmGf3NV2eniHYLphEYTwvAsjbpVKrzxzn1qtxfuUnjewiJh6gAkKav5RWAq",
  "key12": "3eSgodCV3QvqZxCEUS4sMhMkFcjQGXfwJvLEvyFp5xS5RkUGCAj8FoiZzKEUEZhvNULuD3ZxmCzYyWJC85F91kXU",
  "key13": "2z9cFo3BZLVwwQbS61SW1KcEGZQc1XbMZZ7J3S8CpEyEQDt4FyQ5PwwmsLGYttPKYLRrZpsZt9HLX4mmFnVP1ZDp",
  "key14": "3GrGYyxpMJsXHKjNXtJTtzqBoZivkqWh61YWQM6LwKLJEt6asGbe4EdJB6G1fvK9jtm2tzGQ1VKexLUngs4EWi1U",
  "key15": "4tVMfXNhubwRE2frT7bWFMxXZgyj4oLMzAJ9mPTZ33gxKzbZsX2QdFnU3hKqnocSBY48AtPjwttyaSbkZHwNLtAv",
  "key16": "4tEXBP6kCZbyXb2imGA9XjKfvhqLWd2xyCJBd1fKzcaRJue6fTywqmrrocMsAz1kUBUTyHYcxDuCABLHFQD8UCDH",
  "key17": "2ndxcV2sPVExzRbcgX9Tf9iSVva5KkVTtqLthAEJMfycnatdBVfv6ReZ1xs2PUMbyC9AWLerMc9h5kFzBobVnNHp",
  "key18": "QsCsZnUE8MCPu5FkGwTAzpdvqxYseRYxAMWT6uSRr8t5N1PorUAqqXMgzqNqxRRPFatZTQKBZg3Wr2EoN3mm2ac",
  "key19": "mLombkMAq3Bgj8anguDZvihJ7EA3zgAyCqcsmyKcDz5kUpKwNJRvB4uF43JAXUWj5YaB28XuwsEDYg1yiWJpDv2",
  "key20": "5XYAuqenGRmcw7siookN5HjqKu2fC3Nqd3c8Q8daWGzo8L1pbfdzRazBzwxQaD4uikN92Vd7sBoftuFmpB7LjMDC",
  "key21": "N7CrkcxCUCiKFUmyLDTyvkwBCd5R9SJghJzjPvwPUVBCHQErW5Q3FHBcSDAC1TBjqnb42yPZZGNH5ukhm9sGVLM",
  "key22": "4zC9kxQj3f5B35m2UfTytwW9woH9YdhEWZUUknuMvvvcqz3RiX16rY44qQL5UupouHSdqGLHiW9hLEgU8jvqucyD",
  "key23": "Dprp1t1F4HqyVnFfyF54Mn9nU6yUwj1KrAtV4vXEHYDjb84yRrR2oDXWfbhjVMDZQ6bD2GGfoBgoYaL2V4KW8iF",
  "key24": "4nPrYXDcYE3KZ8rm4H6Spq3vzLfFQjd4mwJqpqRkFktRzsNSuM33hPws2BMSCS1zrJL6mTwccwd2GBAhWQH1Ne5f",
  "key25": "ha2puJe9wFPR6wiK3eJYNbkakUpUr6GFUadQiB2orBzkCmPpYhbwPAjZ7JFtyvmufKgiThX1vNgjr9Bw2R1Wjna",
  "key26": "5BkXVwsRHiFxVTvUSKhpjzZU9cZsHF6bR5N1aHLMkUnwELAsYeLh9mH14MXYV4jinYAKcuXfzjXhzoBmZh8TXcX5",
  "key27": "3rvc3sQCMTYYCfEkqzB3iVckFdgbYxHeR9jmL9Lw7WHfqkV13AeEArBVP7J6nLS69L6Qmap97MSvkSpJBWvotUpC",
  "key28": "4xuiaW6Sii7cohkeNipdhQWSj5RpAgbRZKsgarBhs8b2ksQJCRq27G2VMnpdvGpkAPDDyjUq7E2C34x2nYjSw8xD",
  "key29": "3J1k2qz6qbjozM71XkvrqZaireE8yjVzZpXXRzqx1wKivD2dQHQkyY4ThSoEAzNkY6m2ZYTzPxDmbkG6Zrczf3xi",
  "key30": "45RdZc5ZRqrbzmkonw5dnKjucoKYNPtAskDWxY9QJVWr5vjaKNYisDG97D15sqUHjVQHF3dX5q8wLhFbNEwpSiDu",
  "key31": "4ymet1Lf6xuNZrRsqfGy5QREs3RcYzeA6p2GtyMKtX35U3DgpTf45BhUu9bGuzzfQBWPbWYnWTXtt7ERQzch1JeC",
  "key32": "28nGWXc7w7KxoZUufmfexKKZjybmwcuAxxxxcwMMX2kufAneWqDjFzfUQNKLvraVYjFDEg4JWWA9nwqkdxaJD9UJ",
  "key33": "3aqAM1JeX9eJkyrgSqw8JuCBVC2dXmuo4QvgNNt4xJyW36HGKoZvckw4meowN2Pf2WhZFL3J89bgJnNDhKN9b9uJ",
  "key34": "4mxH3kbn8LmAGoZLWjNCWXt2h2MRYjfEYYXYgBgiL1FA3BhsrkXH2Zhjz2uLJ6usRtJUx4bpWXrG9hdbCtKd34RF",
  "key35": "38QtbvDfSGmXWY6y3hXMbzSfwRBDM4dw4odoNVhyj7cr4K85Xo24W8UnAZXP32iwRkJ3aQLtNsfNznyqd2MkkV1L",
  "key36": "osrPnYXPvkt3wbcz9bhxW1P2PabnDiTXMgfZuNfeAANgxmdMo5NHcRhA2Ux1D35GCAqz86zmBwbhu1LtHNnFWd7",
  "key37": "4bpYakob76zMP5mpbGuqcW6TGF9fbUjvMAByWSNJTJKkZxqKw3RMzWKPBH5sH9YmBTACjxHmDwWLx7XCzFJCEU1b"
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
