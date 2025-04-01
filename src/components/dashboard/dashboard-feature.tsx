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
    "5MzwPuok7vZrJXdXxnsHhT1fU2B7z9LgHUmVRLcD7hEEW9yiU9NmmE59WrrVLnDSn1qvmA4f1NuE8tUEHvx3kRvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nMYmFm5pmFb1BMjVuYfPCMoaC7pphu9NF8rLcLQWog1wQoNTcdZBcrdn7YMRCbAnWPsGAvHZAkoF58xVSDrMvgU",
  "key1": "2raRvazHpxytNEwWCMb1mJjVAZenTVLs7pCFjzicjuP1aFRFjjADdEKoNPUeB7vrcyeGCXnHwvHq8tGMfNVGvm8W",
  "key2": "5cBaF7uocjmLt4U5YRd9MedK36jCarEM3pFxLDrg31UHQ91BjQHzcYruskEWroWEcF3ohCXU4US5xrhWzALrDDca",
  "key3": "2CYw4rQKbwxLPPHPHWnqDzVGRKWfcRee7puPVHvobpEHu8q58CueyughHwxK1bZMGKQTPm7UWsQSSUYMvH14nRtU",
  "key4": "2AxCTH8Mkt5RPZtxg87JNPB3NWHsW3yFX1Xwy9Yp7hk6czWp4T8rh675HCKWdAZkSnHechYfZaw4RxfU7w4k7Emy",
  "key5": "3uPnmv2MjDcCZwmRfUDkUF2zsmJHZ1PnmM2askKw8uxTS8CqZWQM54cL1yrNamLKtA9MGkxQv5PjgGRAzs4TqvXV",
  "key6": "5ymLkaj44D5ti6yitrEVMvt5jHkbTqAAabhLoQTSM2s3dWVfiamfX6GbN5Ye6RB71tHPoTWFoTxkEyBP6h27UHzS",
  "key7": "5co4JzvD1uBcknEVHzDMB1PvXwTfUedY3ur69o5kW8Y2g4sSaH2ySdgr7jBo7dN7bx14N3GB6qMignCo9co7xgGw",
  "key8": "4fJRPcbqULEqsH9q7Bj2UHm9695ebCJstAVESkUp7eEksg4hWdhQ7sCgTXuC3wdgqPLXMGgxKGK2TWxFx6TKMLTW",
  "key9": "3zFyDvm9xhJPa3KPi1q3VTRJBFhvMUtncbpjarJKedcV9eYNDs7J3hpXq4yuZsrb1dxbiv3Ltts8Vv9zz5tCwABw",
  "key10": "Lh3C28m4Yga7Xd4yaPsRsxfErMLFc7azwcDPJnSvjQWX4oyjzbx4sxFuqxNJCxZvdBQnpHR3yrCGgcUmRbicEtU",
  "key11": "5EgNLgcd2gB6H7ZtCA2XWmK8XCztV6yGf3QGA7hkLFsZoJQyz8w6MMiyS6EcSfUj8X5H1ZyDTZxiwFyk1HpnfGNk",
  "key12": "533MUvdeH1vXYHWgcSLEi4p9ATTx63CKVfFHnYQzQ2pk8ChWTbXSSdHdnPTEqm3Pt7MXNRYkRGqfyJ3Ck9jSa7NV",
  "key13": "2muy2uBrs2wWbH52upBkbQzvsriD7LZsTzfZoQ96eBWtV8aqEFHoQAgJNszHvYgkPeBqT8BV4bDQWTGwQ8TBW7jR",
  "key14": "5P6aRVsvf1xvBLtWaB9AK2qwt9WMQYzoHxwZQg3e2xRq6L56cD7DEeXDrH3xX4gNtn3fRRjMHCtSVJnwmaQQa5hk",
  "key15": "XuKYDbgxYjRr1rkTnt2YrusW4eZZavt7C1NaKkL3HoAVAVCh39BkdxdHAtxtweEyWG9kMMk7nxUo8XNMcKA2vt7",
  "key16": "5UMY3ufybDDpzvjrDnjRd7uVpozeHKgH37Ws2wgdwkF4h657dAN54hYNCNmpkPLU5yd4PxXBeoD4DNuWq34EqeBg",
  "key17": "3hhUnegQoagtbur4hqQqsUG6QPuHobHYNoHggXBSJH4gWsrPgVrYqWMRPhW2QTmWcBi9nLtxJQqeum1Ck24mUNxB",
  "key18": "5scUictZY7L6oHpstJ5cEEbPSd9ozsv4eEnKjLwqmyK9unUas5GsZr1wQy4jegFJJZMMFeSuW8SdBLQcWiR8HWYp",
  "key19": "UDxtNNE5QF8spQGkoqCB5wgEae63e5v8J5qwuzhnWzvoYCshHQA9dn9238LhGeF5ZBfanMCq7XCsGqUdZzEVbwQ",
  "key20": "2rmCEHjjk5CFgVQdc3rAgdBjSuH9hLzqe8XvaQqyCFwSMyhFfe76Adcp2P69PwPFLTyAYiUKWxDzAVVKMPB44wfX",
  "key21": "5kf54nc3xcM55UFinYfVy1tVNuxmba5AV3rY5ERAVigPSELQ8zp7XZ27sUYUkLfLAHbbDx7ZXXy255KcrceJ5j6h",
  "key22": "2pgxB1sfjaiKwM4B3dVfRqaoXqeXhC6h7K2RAKgug2UyqZf6XR2YF3hWwt6cJTpNKDtRRiYssJQTX5WwttsAc3g2",
  "key23": "2R16c666UmJpmoJkPdSr5tgNWZQxhEAMC8acTnQicVkN8nJ1jsvUaRfUaTFKSYfrEPjnWW22HUvFNsYTxq9JgbTM",
  "key24": "3rpwR1WEQWmMXEX3Vc5qCjz1y1tjkxsDuCVtzjXH73Uv2DQRGr73P9vnJoTd2ufRDfQ7MzMRFuwzfULwPKMbn6bB",
  "key25": "39R5eNh2rmyAHu1NUBsHy2KJVuDsAm4haafg5QSgPyt1joNMF5z8T49RnKbHDGvNkXh8VR2NQsNFmNCks7jH8Xut",
  "key26": "3BySRovZRokJNPhoSqPmg3VaifcyNrwCdWvUncZJtFZ9chd6zS2WX4ei4iRCQf9Kom26FJNjaw94ydJVvgQ4Gm9M",
  "key27": "4hmYgPzLax41UMAaZF7ZN3LZDat65TueAVSyvdsVVopFpNCcjfaztqwP8DifzeHiKPiwmGEpUTzDFQRZ6hLNZhCq",
  "key28": "3fNv6AWQ2youGuqkZ2CChTqFKrfeYAbEddrEoYuAJ98qnC5qgBRzTttpjq3sjtBW4e1pweRnm14cnTb5XPkfwJA6",
  "key29": "2D6gaXAURu6qXRsSKprYiFfhbdWAExFJNuQHLyrr5nZ8PzernaukMJ5HEiTrJzaRB6dne4f7ox2tdycjVE6L4rV",
  "key30": "5HXCCXApuwqmo8ujHKcvRD8jPSDY4ay69bLeJ4NwkUjjxAwzekAYwXoDd5GtSMP2aGktKTm3h911EsZe7yDru74A",
  "key31": "5CysBNsdqLQKjiptKHjZ7EaWYSfATNQHZqQQBo89oQDBPd4tJEG1sFAiHFEDL89VWtwrdQi6c8jsLsoTiTt4D5pT",
  "key32": "5zSbFy8iRpxWaH2CkDbFC4cTwS2gr5fM6eMhLMoYpsMfwPgXPH6DnMahKAWV7vaJScYAjRs8ozRP74RfLmupLJqW",
  "key33": "gpMX2ANLGyMS52poTWF47K1Y8kUsDYUckYacuqurN8fdCRSgroofBHNC65pndBYpyRHZwopwXUwugYZMejxnfi9",
  "key34": "3ez1MzEET41FZ4e5YALDXoniE4f2m8YZKYL4qcPt22gz3VrABoYabi1AVvQtWHxmhSZEKW1i5bPbjj5Xg3wSs7oj",
  "key35": "3odC5EemHvQyWdsGk8sKCqGpra9phUva4Qs5C2CGTkTheNKQ3ryRyKLPJwZBAEx5ziMx1Y8hT2MgGMhmqKsxyYWP",
  "key36": "d18nonoS9WaAMAfDVrzTt4YNwTdESyVHj75ugsJ8BeDHk1Yc7CD9D9h5qMUiyDEnJG2rD7KC8wEUAr9JFGpJMqn"
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
