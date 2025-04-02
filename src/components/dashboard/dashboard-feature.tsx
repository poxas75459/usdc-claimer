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
    "2GaR8PxsM4cpoohSrNcPcfqStXu6WFQSznQNZktf52LoiDAjaDUjmCEW9QYxfCuTWahnzVaxmKEqqzXZ2Z1js2kc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H5RoLrZvgC52yUFyASGQh5C6HWEU8oU7WxHb8kgbcyWM66ecMjwTKhHE3EvXmQ2zK7oUQN3PHcM6iEJUwKeEurW",
  "key1": "2UMgZRtH4c4vxb1kRZoHovd7YF4L2djEZfQyAibLwkE7y8rjsrqv6NCHDARgzq18BxXEgb176bpD9hJJwHsqWn4b",
  "key2": "4UNhG9wCGU2SqkqkmC6fKxnBdpEMU2YRm1FMhjCB7fwCC5KgDWkSHbB6R88L9ifBv9w1vhHvYTLKPXJ2CTSXMPiQ",
  "key3": "34L6QCFQyr5TjAUXcHqvnnPaaNpUrwNz7Vigoew6AK2EFa7ti6Gth6mDPggQP2cNCzuttqVthibuHEtXUgjQK9kt",
  "key4": "5Sz748HNKcX7xuyMrMtbV4y15xSs22ojR9uZFaFESkzCkz7w7ALNPeqHwABxwuXvLgcW9pDEMa4HHkYanbx5XR1Y",
  "key5": "56nufnvjGRaqXcS55DBX1DitKxdLidzE8q1Cs1wshPKRByVao5C3Xs5zucWqbAfjgymHD1WpkdC5yNwn1z1orMWk",
  "key6": "2PyfYqtyH9kX2TRcwveWtpmnbL4BWLHFTL6BqzSYD8JQXXWc4cdY6d5h44Qq5Jg3qbyipjutNN3vQS9b6D9JD7RA",
  "key7": "34NVqnaKetGZgX296uRrgBbpbph9frK7JjNYD6DW3CnSfdp6tvdom3Lt9UmweZWCLdmM6RTozx1T6BgWUR2WL7rk",
  "key8": "3FpB36wYZ5XmFPttqwhGEVkjopAaiqU9CRX6jf73yTYJCP8xZQuc7Bp815nYkkQn4oJ9PWGp2cGSEA9ve4Wx8WsW",
  "key9": "4DCEug424QL9jQyuB7CD4LrnDgHxTsHfqmHLcR86WqAr8TTgcakm8bxeeMZuexTf4jEQQrrDHJZyrKuMiNtjJ4Wt",
  "key10": "2xj6PGZeMwKLR8qW8uaE3rYLjeEfkVzYQsS1SUVa8NdhEfk6obSrVKW5dim9zYeQeMSiWaYbu3PA89B2AenZ5tLs",
  "key11": "9aYgru7hhsW58QEAjjh7HGJqGwxYs5TP4mojaT33qCnUBLaqKaTSqKsbp2zuQNUeiXQ4pmP6hBeXKZBWdPwpLvT",
  "key12": "uzMsj39ePejVEpVZKHes8v9eMpS6SYT1YrAYw36Gfdytr4ij9PphdhjiNRZ9gewaimmrMPue7BZuJkMsY2aieRC",
  "key13": "5D53asrDs2JLGgjK21Zxb1KzFiUJYbfYLnnknERzdjRy7ef8w6iUCk5D9XMDoPikRc9DHQtTDWUa8twUvjrmP3eW",
  "key14": "5jVmTj591ynbaLKjmNjGttqJkW3jGo9VSqp1qUBhyASdxCSE3pPGVsa9sgVoHGcrLTjqpZGxt1iw7bGY8rYqgePr",
  "key15": "585aFr37Wji8Wn2KHg53aiD9Q8HAjkgqP5886qQ43LgKpyt3NLidN4LoDKjGWyFc6hmzGyAgPRXJ48KKR9NuYq9G",
  "key16": "5bZYscaARb59XT58BGqpNVnSZQmDwoJCRqxe91QT3h2NH8EhU8NgUFPpH2cQCscFRL5iaQVQY5atRcRDnyKqxMiP",
  "key17": "2fHjpnGqfKp7tppvsMiyG9k7fKBaGuMN4L9qetDqsMREjGDPEFnpHCgjLkAgHePGebiL2Aya3ZJ1jg7RceHkSC3G",
  "key18": "2JymxksKue97bSCw4bQFdB5suVwedVceZ6QeuQfo96bqLmgDqahaRBw2KknMBPCXFNZ7Ed5mLa4UtMSR62nSZv7Q",
  "key19": "3kw4ELGo1odd335seXEALFNCoTPFeFyRjJZpU2GMbxFNSp1hRB2YbsQ4WfGirMuHR7cSV92xAuV6CGGDA5jM3Tm3",
  "key20": "3TTkrnejKzVT6LbWKbxp6TjkZihLGRewvK2YtdY7tnYePEsx1WMca61rCJB3GS8hyz9U13isDRVAxWAXbTEAKyPp",
  "key21": "3BjRSGZHxVmF4dxZ4rkLrdTnhh1CjrWA3rDASiT4oEWEp5mCnktj9T8E3Gb1yiFS11QZJUCfomtFUR7XgREGr7Ja",
  "key22": "2iKAmxZcCDiQPh7Vdm48Tvx1goVydLifVjFWYue1yuTjwCeimRsFe6DxbaKdmh5YqrTwNQsHFnpPjuuTkpxSzcpX",
  "key23": "382zv2hen4moYsLhj3MypKUpaEPpVfgpEXFSbXA8NZUdBqduRUqRwyiAs9CdrgLgVFGwaivUuUrALruTmf3Ztg3T",
  "key24": "3p22y3VnuisRh83or9jGAkTimp4zdP9JrybA8i4SdrFfHLTX9RjY57QoDU3PQLZzgPrJtw8da4Vi6w5MjG5SZ9s1",
  "key25": "2Q6gCf5fJSbMypcH56tyDe3MEQukV8Y73rzaftdzh5bmXpJgzwjHtLhSXaRd489xZKKMX77cE38DyCpDPR2JUX31",
  "key26": "5FjFCiCXmuSN7Su5iTbjwQiV82pj8xcZvJRKbkBFwcARsbhjWkK4qxaXwG9WEn6H6sdJUKRMqL5Ej94zzXHuH3bi",
  "key27": "2eeL3xFHvyMzjqkgL7uZ8n9H2cYGKLguzQxEqqPKVwm8KjLLxurL8TTZ1ngL4ZDLsXka33pjLN57EYAiiN1XgwgK",
  "key28": "4hLq2LAWLtW8oXsMCyhJNpdJFYnqHb7i7YJ3fG3DywQxyPBbKM8pEPb64P8kRkUFJjzc8kWcKC8C77XcUcjLSdds",
  "key29": "3swSvzhyrKsS3nxZgM8tPPhBGErSR6YUCfP3SwWvdKrtkkASmmHnZpRNYNR5i4zkG83E7RTbpYh9mp23W8V6H1RE",
  "key30": "364cTEQg9CBPLv9jTZGJMVJHwNWQH2agWXojciszVYEtWU7ZconL1AkDpPZZRdAYRH6ndb9we3euwn9PzTEnrVD4",
  "key31": "4j8EMAWS3MYp6sXFX9styHMPqAKRBBixjuDrukyetQQAdHpQis48hi8GmoWAumye33YDbdgihdv4XYTfZEe1QxG5",
  "key32": "3sUBJhYHzLjBxxzhmKSDbcC4mq4ZhAPXZpZrjMQV77tkfp8ekMm8T5ey4AUqdRnDoCADWbF2aLvMgxD4LL1aRLFi",
  "key33": "3b7xGUaaa1SL1ipda6BwnHFnTQyf8qn2PXwFqzuh694yHog8FvrcJVCmntkfsJft6WxyBBDxEU1Y235HDEJNpxpP",
  "key34": "5zAg9sRFc5nZrXjK6vyEEzmr641ruEaEGNfmneRcVuk5gNqQe67e7b6xkddrv8LrkXFcDV6fWP6E7KWtWs6EVoKC",
  "key35": "4r5qaKCPn37Y3JhhkTFpRKR4ULCP48dbNmUrTSqFkbpFTDh5EHpGHYaEoc3nesJJLoYrzMggoUhdc6CCJf6xAR2k",
  "key36": "9eSQFCh5c1s4xUsZJ4zPZUCMX6pxE4hj3cbauQ2qVGeSqRwEjMuATTnP4yf39So4wPUZvG34SLMSLQZMrj9E1x1",
  "key37": "34L77erwArgvySJQeNnwcb96xpnADhXCA3PnUAcEm7BbZouWyq3c5Jv2ow2PeZRpKWWphjXJ5MMWWu2JpRmrnX4n",
  "key38": "4fmKC92veAQ9iHc8FUyMrtv9LGmtdBjStyvaHYrbtkwwbbLtZ1uZYwGRfAEdHUvadijcKctEaiS2yYyDjPXve1P9",
  "key39": "4EnkSsUH4Pi8T67fySNHwgseus3HueES9GHG2hnJhPLUu2nkJny1R9w7pSZMywX76BkzsRfyNAyWvqTwVG1Mecou"
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
