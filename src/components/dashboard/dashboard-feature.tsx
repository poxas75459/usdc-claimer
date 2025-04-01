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
    "2TYH9fVk7d1KnnKJeAi3fbjVQFMD5gY3DSUqMzV6HED8V8XsKAiRsugLqRypCQBtmdxsF2QpgCz6sHyKScB557cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N2xcvxoh5VDuWfhDtniUUj3tNZiavwNiuDJwRZAD8wCxhgUkc5pMktAmqLinLMK2Qpty7ZHnzBdFJc5N2x3YgYG",
  "key1": "ury1rTfB6DkUzRywCJjEShEo6Pq4QXWjPhomCoYVxKx5LVPzZVFWaWJyrTjYiAzYPzQSNVwLKgvUqeyZZheKpYB",
  "key2": "3HaeUNRsbHARU6mswSgkXyzxf7A1KZxqYxqet2cJV48TGeqmx64V3doZ8nCnr92oSwAdPK4Agn8kaLfG9Ar5y1rt",
  "key3": "2xm3CWrHVPnYHFJVjL1PGAHxvtvQtmC7ArUqx4cHvfCPATxefwzQFyWu3TUuMt9tcVTwKNKiP92yRD2HV86McEn8",
  "key4": "3t9mNb6JjudLSbBUZZ4FgaBbHg51N3cn338V2Q3KzUF7pHKvqQEBNJVCN2BbRn5JQ9ZcQYiPdTg2aphzoB3AqeVd",
  "key5": "5aUJ4P59mNWqUuU6CtUodgGZQMpE9gbAjEEiTwPL3pJaRKXDy2RpL1m5LxEFJZp5n1PQq5U4o4wUKtdMegHJ5AGo",
  "key6": "2TRcGs3vNAqaJxX6QBRp8DbmWaugt7HsE8ZVyfC9d22mNBbeLjEf1VLcm8erPbLuhRmsxhKNJjnKyFmN9sQX7wNM",
  "key7": "4VPqu3RypiTPt6owGuRXoYSQktdCn4s1etWphLzSWTQEpsAPzP8HmrZVjnJEuqLz1vpNPLcC52GC5MUB5vDmj1aJ",
  "key8": "VWubAgnMmrErcqfPWTGc1xtAEmah78jKR7npr7LU8f6PwqHdQj2ae6GcWdHzHPcByZ1p6WQKBewxNHVBTJmSBSd",
  "key9": "v4vUdADgxZ5bBQhTHbCUh1rjBUZnZoNyN4jPL1ySV7nDFC3jox3gb9k3wvVaVXUDQq6mASTHrNNTp4eduM2LHnw",
  "key10": "4LytPS4uJLu7esEppM5szNDfrpov9mHGPyaMs54ksT4LURNtekLPhnrm1KLVf6ghjyAAL378Rp9X1wj45o7VqDPb",
  "key11": "NkXp3mP5faMXUcChekG5SHNGL9cXFuhLoGvxSxreeC4mCn74CMwChPTv6BAAERVfRhLhxckCA8Uf4Ga7fYmuwJh",
  "key12": "4m4AsoBuPwDhRt363CoSNrMBcLkGSsTqSV1wBC6FguGGwCxArS3gD6DeCPzBprJ7wuzWqavn9uDcNdkym2G6o67k",
  "key13": "5neM59h9QikUFpTbyYTNUz9EzUW3s994GLemgTEyxRv1BJsCYXzBgfr9XFXFyVqC3GNHvMgd171sYbsUHizrAgsa",
  "key14": "2atzmrmBigaVW7WXy99YSJSBhkfdBfz7RwbXbx4SxqaHowfjkUFS6opTZPXB98iR1UQG4dPzLQSHEFRkSeQuYyAm",
  "key15": "4hkyb6jiWJRwYKMrdC7qSvq5MzGxy24UASGcNnQQGDzqfRjDcowYrjaWoNqpsF97WXY2Aq5TkuQuChzp76CthuiJ",
  "key16": "c1ds2aH67oF3p66LV4G6iwmwef44M8kiyA7dT2q4eZJQsBeQ4iLikhALh3y1H8kQVVoUvmmA6Ch3yNZmPf68EZq",
  "key17": "xdGocvXzC1a4bsWRabWmAxwBjGkG7gVFGXDZg5FfubF2k6RHvY5WGmTV1LmN6QP85yhuGjsBqpskRhtCg1qUG6y",
  "key18": "2B8ZWBqyL4TeqUSvY6XQBcpNSvcnuTidt9SxyJMtLctmyHB4QggqPq2XcHmSkuTz2VGNcP2SnFcjskv5P1cKNLLS",
  "key19": "3i2fgTcuiwHx95z4GKKBdHS9Ky4xwpCSVZ2tEXvcVDNX7pMA1WBuijgcwTweVfj9XwaJWsTDCxqsd3tnnk6ZGx8m",
  "key20": "39jqWHfzDCvHU9Pm1KQEAhJRXDoA4YHkqeP7zF6siHNqd3txBm4fJdWJGXZ9wqpAbR6zX9dcPz2jTb5L3VV5PE2a",
  "key21": "2kfgrDtwwcWzMDXnfNZeJwSovhYeFF1dWM2gG1mEi9xXaCvks6pRv45TP7Mg2NvV687pjBv52g4sysDMaS432g8D",
  "key22": "2YodCUp1eruV4j3B2nfeiNAGR3x5CEuZqGUpUfzUEmowD2pfPT5AT1ydhBVgr9XHYnDLHmkQds6b8ZHn3DPw1gtM",
  "key23": "4xXBHrwzFN7szAP9EAvA1su5pTv7Sggw83bf1BKsrUc911bdZLHNk9gZSDsFfH1wVSCS7BKnMGRJPng6Cxek1TJA",
  "key24": "2PXnPwThqsmZhHJyzewMyyKsztDCTZSnoCPvUjPwhUXkqMBL7GBf3uU7prbgm41Bx2DCnCBMBgFpCur4xrGjEDqw",
  "key25": "4PbRWXKyE8E5eTh5Gs7Wv4jdWNBTharG8ctRAWWCbssKQep5x2QD5tubAbV9PZrNP6F9oT3ymoTEMYw1Zy425pHn",
  "key26": "2MLSNCXpRwiTkLiiL1ZAVUEuJyEQUbMSS5Jr2zsKKzMrh6NUZVUuhgKg27qUurb2WMNqYtTdAo1rVrGbvAYwhpQu",
  "key27": "59GRZMzAiabnGccm7zhzMhZWh86QyxjhNwqTBoaw7LvK2Bhx2pC3WNhu2kkZ38vap9sxQGUiStGFnDMzb5hjmB6G",
  "key28": "5ozNVMHRzaVEFZuuoQ1oVAmtyRMELJjp6kTYaUbYbkGAtK7Sxv6jC7rjUogeFyatu5vecBMXoQ2LwS6cotMvaVgC",
  "key29": "3V4EcqD1PHj8NjBBWG5xwtArTjtW4zF7ChLpMqVB72zTZ3aQpkop3hCB8cwCazYZmak2LnYDBc6hLYjF6rAFSc9K",
  "key30": "MPwHACdriDQAC4UuKijeLQHBQv8Hiz7dEg5zMas7m4ErtJVuhjQA6EMER35MbAAxTHiEpSTs4LWfFSz7PTGkDgb",
  "key31": "57865CrwPFWJKP3pcGPGGfkXKQCztgWcXL1iyrSdiUM3iUR7incsSfm5wPf7CGBaa7WJbfaSvAXCq7h6dQakKYUG",
  "key32": "5tmDViW52KX4CYoH9vyryGH3QWc5tTf76k5DMyW2bq9pGu1pVW44hguJA2kGQHEcsrgtDz45pi4gjTYKXZQXyiyz",
  "key33": "UT3LWboqAG4CCZxDQd4uW4mfFWWXA8REASSw2h4pS41BjG5b8ToJ89CGgUC4B5NMFyx2sU2NPGzhgiGbTvNnALN",
  "key34": "YVJdeWvemQenxf7Wr28BvrVna7hAifjCcEXHsu29PpgXK7BEH92Awdx2BqXbgtx1Rf21JU9nu4Q67RRtKrDU6qa",
  "key35": "1vtWLz9pujfzHdr5hJ77sZAjgdXW95CsZecFdVsZU1o9YhDLVe9w4KPg1hpsbLgufyJrdJABNnbMHFQbA8ddo1g",
  "key36": "yXxpuTcsKHhfzVKvkNNnNGMyqMpuceZYahg1Zvf78kEc4B1iL7qrwmaUjQyfgAyv8MNA4fzRQcJvXZwpYfemcgt",
  "key37": "5Tkfkatva8HCiBV4bXZN66NdB3xmUuE6KoS6nzDxKibPFniUY6dGta1HzJUAvUxZaSQo7aX2dbhog7zXCK4xGVgp",
  "key38": "44oTMMngPqfAYM6XKWQpzU4LEfCX9KVhxLgBcCLjD7dfpfveWrJPyduGsjwPkvaxCiXExKU7RngvY1mwhL1bffeg",
  "key39": "4bxWh9a6e95ZBb4g4ybH3T7WoeGbnygXawqmQeCqAURJs7bLEB8GGarxa7XbgCe9gtbmdUJWe9ohb2tp1DVaoMPc",
  "key40": "1naXmQETJo9415sPJfN6jjPtVTqBK9LNEBoyZNoHkhBmGMEN5VwuxAAj6daq8keo96mKXVAzNVBCDHRkhCbdyM4",
  "key41": "sNKKC53GT9hiV5efhbDiwei7tSskYHtycxsBte2mnmNbuqiTkDA77GJFB9v3r56oXjdMkXwLTF8NPjyzRPW6otq",
  "key42": "2ireM3rmeyKuGoKiK4wpUS936zm8NYRttaRmGDX59kW8NStqhDHf7MMgp4p468P34NRPyZs3TqNbpr1MncL9LsJp",
  "key43": "4968RKGtJ272ZPv3GXYKZTPgMGis1CppUgCcKRBZESw7gqvhzAXtTkC6GL5XBBViban9ueYAF22gX9Jur8UwHVzc"
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
