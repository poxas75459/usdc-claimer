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
    "27PQzfL1Zpqv88SmxuqbkBJisY2318ucbSGr95zcsvhXNqDSnJ7W4fj8gHqqeXJowBvpknFsmfo2wJstn9CPs3QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58j4fdxNwmyvb8a2gJYTPxR6SGXVy2n9igw1Uw6q9rs8nMV6aGdmBKnN8Wki6rx1SzseUCRAFWqSUuQWA8SuuLQH",
  "key1": "Uhuj8e3RgTgNoMGHsS27v4kzPG3dMXq2W7jZk86MnHKYR26PY1FjdA9wyS5AaFGTLWKX3NRGMoQ5afa38zpQ926",
  "key2": "FYHpYPvX1sAFwK95UpGg48yh95ZdTho4WFnUHJraMuBmcMV16NhH1JGMsEZv2fnnrzsf3VKw8Xwb3StHMgKbYp9",
  "key3": "3eyFgbjqn7aXZk1nUs9aLtp8n1WkPctsDtCzEsWJuC9eQck59nKCg2S2aNjqGQUWfrwZ7R5AZHEJhTUSEtoksGit",
  "key4": "2MdoMoXgKzt4dSKawvteA83GwCEAVvCgsp7UJUGCgUhmRPnYmPhbCsaMmjZi5FMFGpwnKdj3d89bqs5tqr6fLL1d",
  "key5": "4ZaS1HNvYcX38J9snDnnLK9RRJjae738JnU4SnZwNSqgsUx6TM8x7ZWmSLWHPofddKfRsTCtxtEwNZrWNjQTXJyK",
  "key6": "2S6KF3t3qtG8poVpHjTT1Xu3zUCmBjiYziZWmKCxd9dJXqsXWMhvV4CktjiHhHGuRvja4DRQrTSwGifjogix1167",
  "key7": "yr1VMT78grKfXeCAxe9WMjcFaoRMsdHvEFqC7H8UYg7F5pdYrb8jofzaTkUTWY8P4Lvc59yLYyBThpH4qgqMGTB",
  "key8": "mEETbcYdHF4U68tWrZAnoGi8nRBM2nwAZdshBFrRT9615yTNqXhGrDNQBYvZH3JN3qWugCNHJGo8rAsjnWRm9HE",
  "key9": "5waV6F4xng6tS7Vuzz43UHG7m6aSLZ738GHr2GuLvGwpaKp8uXmp5awoX26LsrR7zCFt6QunaKZULWWxz5rxUCHq",
  "key10": "n6xZ18Sn9C3Jg5KFqUxNGRVPjAiFPAqL8fWmJgHigivkvNu9RQWCofVNoL12JA2svCkrFoXvV7FUdn1BdDKN1rd",
  "key11": "3J2N1zjtYQRjfHycm9sfG2erm9suLXsSjXqvpo983iHgHauvaVu11wGPDxWo3BfaBLFB8QqinHq6NFqKe7W69JiR",
  "key12": "5qdz8Dk47QWNu3Vpr4U6568o2Hk3yqvEQibpMnSoVNdWhztT4p765sFyzAznjZxnSSeS7kLGswLK5ApvkbN5ULLu",
  "key13": "2kw8h5NoQvYWfQ1pJJ9AG5koC4WxS45zEqnEmJ99YTCVoXRCfb2JMNvBAyYpkty4tEm4mdWkUrEnDUa1JaKcXkYx",
  "key14": "2NyVG837FFZ5diidm8zZq5x7SmqdL2kUqva4a1oYFnkZa2QQVBJGcPRpQ4831TCG5uWzRVSAy3i6iPm2HmRjfY3b",
  "key15": "2mB35dSY8beHLRCyYRHxqjoeTvAiNR39fFw45qJPCSwaFtp7BGdAZEE2cXgQvsS4asFhPbseMBFUTu1iuDCavYRQ",
  "key16": "2L1z42WHcZebKTJwsRdfW2fdKLCUeF3WaSxH4dr5kvF6ptmhZerG85i7T2edQxf9DNxVRdrHgSmMGy28QZABbpcr",
  "key17": "3uDSC5yJq7sYfoJZTuaMW6hB7y3FLgi45Y7wMb69PRdq9DPmgzjT66ocCqjPnWjBEGMZYf9YqJcQFLcHkBeXGmqp",
  "key18": "4ogAGW39S3yJwJ6QGK6nMT31q7CaUVzKTjsj7kGFRKPYFZWXE3ngNk8rmYicsLQ1JTxXoSg2dqB9WeHMD4ssoyo9",
  "key19": "33oT7HVE3nFiW5U9yivRWV4S8nuKkLsRpSrQm9aQH6TTWqPkoi59Q72yjj5aYvFu1u2oprQz46YP8ZZHbbPHfgbb",
  "key20": "nvX41Yt4V7jBBJM3dGmq3LnKPDxkNBrdKGo87coCjhZoBHSYTaMwKeJVXyQe9UXS17PJGiydSHRyTiBbwjvAgei",
  "key21": "5euVQSKQQy894C78TLg6bJYC29uXzb8LEpA2JDpqHqSyyZpz6NmH2uwWVqDmu9xKcn9zACga6vRHHtXsDzc36x7Z",
  "key22": "gMtTRWoyxCV1Mb3wo3fdW8wzQri87gACSKdxJE5Tv1rHxWeZDB2tmbGb5Sc8A4ThNxkYfu1TkxA7Lkh8uP9Lbkm",
  "key23": "rxng21CvZemyFgmwgj4974WUxt5DGbHoRPh9pYMjD4AemdrzzwAiBT84YZnpTi8e2CxztTsiiabF4McJ91EuPZR",
  "key24": "4qgjbMcCABusDUWbFtKLNGufm6QGFNWh3NJ5ynKH8puDAmmxQUYMfe6pv1iEmWiu4XgDjrSq8WRQ52uEhCBj8KmB",
  "key25": "3AfR1DhngwPQcZw5cdULiQwL2jcojzXhKgJf1SSp1e46rYBip9scSs3pyW74mYWBLfBi8Bm3KtuPDi2iznrpTtc8",
  "key26": "sEkw9Xt7zB2MW8DW3cXgz4M1PLfgFSKAErXoZoRyfXPETEnAz8cvQSzxhMP2Xa8QSHJWVUv9VUbKr2qn5Qr9b3G",
  "key27": "3AVU8F4aUEsuoxa5hkNw9YTya6yKBEKdBabKio9hGnZmkAQYytQnhUaHHiSxUbYZYwhsqCRB5myR9jKuykyVnamF",
  "key28": "5uji1bi6sJ8D6Lgg7afXhBuNLegF3GLf7SmsnD9vn1gMJN3AGdXpKZDhmbYdaCuRBWwBCQJDQzCvDmqGtygXAbA9",
  "key29": "5giFvPAzjRXWt9MwC1YWEne96VgthDHExDPjrXQhkvBDBiWbUG6tFGHw6cRdoNa3fDzwF6yZbdSDFS2drv3R8JRL",
  "key30": "f2rpRpJ2xt6YnBjSN78mpGn4xPBR4yPS3BQke4d7kJyJAeB5ffH742AAB6u29wuwwLWiFRieNw1FYpzQDqsyJkn",
  "key31": "4piVufgoMETtXpEKLgUV4iUVKJb3HEEbDT6LXps2gyK8w19kN3JLrGeA5GNPuGEFUog6W2n4EHzJEwYBs9NJUNjy",
  "key32": "EDivSt5T56bvy7L4sLvZ7dDgvLddZ8dKPUvgrUVtCbqZRqWcCTwg9TpVXQeMZDznv1nSXMfe6s4HtEkAVxUPPV3"
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
