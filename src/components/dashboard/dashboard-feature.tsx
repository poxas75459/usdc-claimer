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
    "2sX9RdcExLTJA5kzziLASYipQubTKovAYtiGum3ZeRMzekUPkmn5kUBSraqKVsTGLRcruPXhVyt6m4eaZZoTCFfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oruV1RJF3BFoj3SzooccrEo1DfBGirkNHd3QY32gdHHmwzUkap1JLWBULARReuXyCpKZZsG4AbVnkQCWuiE9eMM",
  "key1": "2m3rFkZjmoB6umzLWm88i7uw35J1EEDDGp9bSGpwEpMECYzAqS7nU9YkMt8Lrp6bypdzjR6jpEPTDHzPUqPK9sWF",
  "key2": "4YA4vxJoJyGtHmhjq1PqFM54KsUKzP6qJQ1hkgpzQdzJVBbR5r7Y7qYDs4RxJeJT4enQSaknTeT3AsysiXNEQ5PQ",
  "key3": "32hGir8UXpj2SFpa3GtKaREQvRxZ9RafERFQyZKeHBQeHNMCchjKR7TRxNz8SrhKc9KZFyCP9KFHAbAw3LE6yy7N",
  "key4": "2kf4Hfhn5Et6YuNBBqrK3g3NAbgqSKqsKLjFw6SNq98BX3iZcfZhRLCpXAisCc1oVrQF5wr8YFqbGpRRzTAkUxFJ",
  "key5": "3Fy2g3KsvPABmYoU3PTgJZwBBEfcMi6bkwBx3MB9w44LFLwe8fwDBW4bqd9jNV7SaiJeoTUyinyA7Mv8FGCXDUYY",
  "key6": "5gZetDNd4Smozqdi2KEUC6XN7pj9kJwHvjp9TfUbfaGKSfyWyUcmoYg9VV1bLpSsvkHB4EijALbMvGBahgVQ5WRj",
  "key7": "5dC2uLRvkBo3iqoaj53WBUyFDPisutNdMsm7mmTSNgnRdbWTdz4HQbXhDKVkqfDhfzYCGTtAfsw4dvmYkojnio8y",
  "key8": "5tmzVUNvxdzq8x4r2zEpCyFpT8h1WjHaMs2tiRiP2xAKwt6KKEcp5TpSNMx51QB7he1NCDHoCi7aePLJX2KyeMfZ",
  "key9": "gFwgK5CoosM5ArJMmRsh4fNuAQCxoTeZMaWsXZmX8HmzdrRGuqu9AJkHLjSXSXJQfHCagXiPM5meFgtXSs21ueK",
  "key10": "fVibaJSpTdGGvt4fzcD1Q8WjLRSHmbWKaZS8y7URydk7KnopGnkCooniYApnXYMBBvghRajnwLfwxwrX5RvfBFs",
  "key11": "488HxSsh8JWKUq4AHVLid11SocMasBfLhHvGmsYeR9d9hyRUf2jdAmyx8iKZWJDqnkjuk3jNUyBVD92bRMU5qHmG",
  "key12": "4AB4hkEZduofeetEuZJp59ErSrXdgUHc6M1nNjUUhuEpuwrN4tzfCdTp6d16JHmd1cmrR5UMG1WPm6xNz3Ue4NQE",
  "key13": "5FCAHgzMdX2XyywYEfFRnMHobU9NsSK6M3JSgtdbGfZFW5qGg3PdHwdrSw7fD9gX7H3sdD5eymaLkX1Z4aZPWWjX",
  "key14": "3ib3YY2LkbCdEjqx9zviQK6RVkKUKK4FspbdoHhWPv7S5K4KCAGW79tcpJuUzw7dHKfCKZUghzBYQ28aoWHBrJaw",
  "key15": "5m3AoEmYfTNA96nQ8WGnXBaYafSbuKTbhoKmYd5C8hUBL5734qJHA4o9hMvTQEhkzhkXTVbDfrBtbBZAwY7nndYk",
  "key16": "XhZssPyhmRkh9RTEcUEXa3Z8epWYHxJ8Qwcjv5ofeLXGutRqhUxE8mXTfq3ExUTLzU8wLFHc42aFbo4zmpnp5eU",
  "key17": "tKr4StNQWdL8PaGe6L9xiCyAqmq829RPFWS82ZYqeqVPvcjadyecdD7KjZEzznuyA6D31Cf186qFS1H2Hf6nXBr",
  "key18": "h8pqwAXQwkapCUT7nxCyAyocoDqW1iMMgGMb7RZeMBi4i8Ko283Kd4DiMUKokWHbkqmVZ7dxGuS1cJww435HDbS",
  "key19": "5iHEb5RzDa3gfonstjwLLdJH6GYxgNHVBFYmznjonUbsgn3BQqQgrWCYbqUt1Ss18iYqqsGJrmq6N3kWBo8SiQx7",
  "key20": "64sojmn8tWdtM8o78s159e6FxhH3k9f6B7UxU453QucDnHYfG4HmSS7SHiFXzNcEVGgN3uCGHaGaivUVL3JWfhFq",
  "key21": "2wpFNQ9HfRkKRtc7bVV1kg7YWoYP2tTEKE2QRDgJfKfdmbccvNECnZeFpg9T25qdjvXVVJEFdP76hg6EFa6DLjwF",
  "key22": "4L2F3Yi8swjnMUU1snRJozX1s3LAR8G5FR9ihdjy9seSTrnHf5v4DyJ7LfPjho85y5opytY4Gs7RFJfVgsH2h24V",
  "key23": "31MadYGirYcxYCCUCkaY2DEVrsKGKw7B4zcDqALzXoy7t1mtmWz8uWBbW1zrQqhNjSs3ijc51zWYPZ7HqEQhX8g1",
  "key24": "wXUsoic263mCaTqosA2wD1iDNngegcujAqCTWmYziYbPNZ3gvEENSd7TQY1ETZojkGyZLykM5xtzk5rESj7cSTE",
  "key25": "28zJeUpJqMJAhaGkNHBpvF8mFashbA46pq5nEdYWUuQoP2hVinmViaLynGemh7PdXPn2d93PqLMSdURZTVe9aEpj",
  "key26": "4Pa4KPG64SfhTQ8VQkGxXFnMFLZoxertzb6h6kczmqLbKr9o778m2umVFrWsdQx9Abiwy3kk1EqHt7sRWm6dTEMV",
  "key27": "2TR5xAyu3Fqw36S1MS3ntzAagJkLvbCob5vSFANFMWNL1Qy8gRPTgexkpEcXPi1iTsb75TxPMb2uFNiA3wwE2UQL",
  "key28": "4KgDcijw7F158wGQTjk6dieJev47rvXmjMVN6uhPHqgeBqfJ1F5TCN6WCGURHXSVuV6nYLnRMEnytkv4tcQLN8Rq",
  "key29": "4CKih1bwr46Ba5tiyTHhysLkt9FAV7ugYDmnRotq7vvE3N7TtF8P9ZFQeomVQdjzpqcC2XfRidpmL1JcJRo9M8Bz",
  "key30": "4LTgssmS2dueW5uxXVtEWT2cehAxFvH5N5ahNuzwUqCVTwecKa9kU9MQ9swkuxZ2jy93NDbTj6V3fCKUbktDQcbZ",
  "key31": "ZvVmwjVZ5X9tWBWrmYRorcFd4CcEywa73zQghzaaJh1mSR7xUVPAV3KS2v7ZsY2pj3aCv7YNuN1Vi3un5aRyb4H",
  "key32": "5SiCD1w7Uu8KCSqkebKpRqrXwmgyJx5hmMFzpeycVdfTZ5vfGSNfQQ3gBmhMrCDzrgbGgoQHCSaG55f9kR6e4ap1",
  "key33": "4F1wi8pSaYyg8dv5fM9uxeq1DJe99ENW8SCQHnaxpscTedzizNSPZ2LQaLVeEQhizY99dSTA8f6yzSBHfcQC6Jog",
  "key34": "2o4UoX6uj8houeVHTQPuRmwvzpW5T2vh4j9an123PUsvcxzTswUZFtQZpeVhG4xFbnt3KzRWLY83YaccedGrzuKJ",
  "key35": "3ovERcqe9tos34Ndmub25s9h8g5oNrySXrRPYAEt4GHJLtZuNwzBiSe3Cn3aNbNBmHJXHE3Fr3Aqq5dHA8giZJL",
  "key36": "3B6tHpmFpmg919DmiTS4P6MKvdMkRFkhPZU7CymvjeV39RmTYMGKTXk2HifQYeUXUk5psnQX7sMrJSQ8cy1ek1yn",
  "key37": "2v3eNtxypP9VYU2FNwK72d7ynqbvwC7R4h7wsWRwSoqHJRaba12bLJTbtoeD3yw8BBNTRjoySyHYPphCmQtjbTup",
  "key38": "4vdQxzD5oYFFmt91d36f5oXdEWthtp1jRpScxm8z7z6fTx9nP8fxLXKowRsDJH5V4BJGMvCw6R43QubstMigJKyc"
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
