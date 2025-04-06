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
    "5uK6f9guzmAiNyANvwLyE5wCjvfQwfNX1krvxWewujUVRGNY3YgWaa4pNQ5L3DpcUvD88eSuFwi3ALviMkXp3V7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pSaY45RuMfDPYri4v3r5qG3iqdFToD2e9d89Wo1XGUWF3PGDVme4xjHLArixb2rYQbLgPd2UwAkZoPMjXv9toDB",
  "key1": "AZ7T6sSK7RywPsV5oPK9Z7P7WUnGp2JAYAh2aRjoxzkEdbxBaqrpHr9cneDN3j7KNe7vDGHNxVufQFffLdLR3xn",
  "key2": "3sasje518z1WMXJUfEMnkHZQnQcNUqhrXnZSozYofPpLo2jtrkNBxtFiv74UbsDxRb8bvydXjR1pdAvfXmkozJuE",
  "key3": "SEY6GuE1b97v3DLNTJqe34pLUSRwPSxoe6K8eME1pZS9ejBpg6SsJY251wyiAbx3P43rXMhVkpYRZUhjFCFLqx1",
  "key4": "64CvdqsRnS5THpsswPDG2eNz6G4LVjUHS9SDK5aUYEqXjtCcuA9ZPU5r2i389jNTC93ENJhLGZcp7Jm6NsjJ6pFj",
  "key5": "3AyK6DcyZp4GUDJfeqbhJ28U173E5Z6HKqYxoQ2xwHq4TBLbGcALSoa8yondGt2YDmHco4SH2Ujpz2vsmkAugRFm",
  "key6": "9WkrfCbWSNWhQriHEpUDQpVL1G1LH8AVhcjoXmvX65Mmq37pQChS137TBbzBPwFrigKDjw7TNBDT9p82feywRzh",
  "key7": "4WB5TAc9ALHfWYCUNofNf3TCCRDbpmA8M6pbiETB8GYcrHpzvjHNB4UmtN1vhd1hWNMsgdXr5uMycdtaLt7qYpyX",
  "key8": "26ifyczYHmjRe1dRTZDM3t4ezhq49kAfztTUxxeiA8EDfatTjTLXWyg1bXJ3c8nm8Da8uxboUzLfFbsZKV7nTNUo",
  "key9": "2QjBtkCRM1UQaRKsaPuvoYCf6T81dM2dAv8QexpW6CvaXQh8A2zKmYddt4WkEBkeejXLzWWgUPtqt8M4XWMKVPZn",
  "key10": "LzqWdzFGfu7h3CWGncwTauMG1hFhAX4bMQHnNvtzvHzEy9z8PYMbuCtNpyVTh26rP2JEfgDxqkrvkxrkgHog1HS",
  "key11": "Z1whLkU1kKr92rBiE9Vwn92hSjEHsdKbN78T2Vi5Q4B4Vc64anwEVKANfMK2AqKBbcDtwKuKwuVpWkb6dJfcKvB",
  "key12": "2XTMgjRZNGnPebUE2WBtMs6kaWRrhXAj6Dq94hcD1cA3BMKA5NJgrPNhwqx5BFVgen1rqCT4tWXKupv2Lr6Tf5xs",
  "key13": "2mTbvFdouzad1RaJcmhMrbkvHCzxBNc7zf5fCH2yZWMGLNs1ePkGuEHjWQECAQRJwEJzMcAoxBUASahLKtZJ6iBV",
  "key14": "2xqYtRAbF9tmBJtc2VSQbu5fnFJpkeGmG9v9WPXZoeFmdiiAtr4escoN7Pe8tnG4KyhkHitUEJcQG3BwWAhWfnjY",
  "key15": "4EwsT7KndsYcHEfMFXYGD1AXvfgfJdjXo5LoBLUhZ4j4mHcHrrpq5f74QXbadjZCYiRFYuhwU4MsBFLARexYkbud",
  "key16": "4LB9eayDeQwVkk2i5Hw4KiyjSyY38rAEwGZMKCpXxr7CsiHmkuBn6RrzQV2RKjbLxjuZdrjoTpAHQAHNUi5UE62T",
  "key17": "4A6RNFS36KkxpTKtuCPVtrhrgf8XpTbmVPovNftoBUsct9e7dJP9U4dh9kq466tpK4suJei1R6mPBC7gKh8DdZSZ",
  "key18": "2HNy5j8uJLg9YJPVHz3qMng9j92mw3ypUh2wxNg3SQEa1BxJMz33YJKdS4ucXVnat15UnEf8JMqckzgEkN5VfhMg",
  "key19": "2xYDTyXDXk5bMjQpS354zqQhKyAKsJpA5ddQKeEcVzojn9wA58X7QsTwEp72rCx6Wmxrzh9mKM1dSs4o7Svy31uN",
  "key20": "b8jvr88CF6JKXbS3U19bHjRxemjw63MnuVrZs9cKSy5m81b43iB4J5PzsS5xKgTMgizUcYnpbwTGkkqnEj1PmDP",
  "key21": "4ABkfsh2zrpgXJErr5twDSsrjc5vDwrfhTjXax7Knvq7kJrFLNE4w14xj36iNd5sVS8CCpjf5EBs7ZbifF9mywGf",
  "key22": "4m4ia551MCaKSb1pgxKEBfUHoEbtPVfB5TZVzyKUFTL2n58rFtQhkbAr9y4QoULnkVK3Fj5E6i8s8rPdf4ncGmhe",
  "key23": "33UhFu5bh3SvcGDxN8Wjd2BEpnSDmqK7GHCw6ZSHL25XYi85JuRdox5FMdyPTL2yCbmvbpwSRLNTWLp55HSRsDNx",
  "key24": "4J8GjYiFx9amU4Q2YpNoyWuDXT8KpAfVMMJfrYYMRTimCCHYweLAYV2RePsUBS1Yd3FfGAaTQZwTspGgDnvcBh9v",
  "key25": "2PhyDYBEk4D1cUqMK2U9iUN8KQ1jiLbgmpVQNGxGBmRVv9m6oESNHCvUBWiBMPQBUvCMXypexFhfVxHmHEy3EtSC",
  "key26": "4xwb6eke2dSu5PVBGb9C337GmSc4E45JoKvWXEQXZJ5ix9Udaj9MdCEueTHWH7uEE4U1SJRYCxxaGq41HmTj7nup",
  "key27": "3KESEZuaLszDHX8xLt7zEyau5gdhUqXzwPqCheWhmMji24zS7XrBxk8qxVmUnT3PZ6BKqpN7fFvAiBfcECyPEnLe",
  "key28": "3SRgNRvQDayRhqHJf28sAaungWt5jT2YAHsb1ZVRcX8xfdubi83o8AGasvDCJ11gUg9kyeUzajr5CjFn9HVFTcBn",
  "key29": "tikoNwFkLGwtUarEWMGLwLyrDXXHBGrfLRGTHF55AuWDAwydZVjetCwvoiNrRq36kJ9tMbH6CchvaNHhHS34qRh",
  "key30": "MPUdCcveiwicmrTMxDWQSe4rviEFvJCp8B52eoQitfaRpDYcMYSSJADKypwTDM2TeLM9WG931UFZTaSfkBU9dZz",
  "key31": "3zkmbMJhXfkhkuNH6ZAsi1pqRLTtqLHukTxc9t7GvAdgVAi9qXrz9bWS85n5XQjF72YimYvKqMC1PWK2LxGWuXdN",
  "key32": "4yq9bask6oWprSMTHGj8LYekjPb56RDi1Y2uW4eJeR1Dn9TFM1CRtozTAaPEgNkUz6eHr2oNYumnkek5CzYfUEFP"
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
