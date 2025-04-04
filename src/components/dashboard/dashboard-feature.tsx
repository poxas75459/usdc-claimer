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
    "6GiH9sJS6sSKRX8kPeaNCfaQzFv5mmEwaEcxFPRi2Jf6Zd3yDPiszrZBjJGtyk7cZHBHJJJfFkCVMbJybBHiQKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A1BLMiue3caXtygenCcH91yfjV7cPG24hvNzqZSGUBct7gWPM5ybiuW3vUx6zEvivhicG249icEmuXwK16TDYGB",
  "key1": "2WY21PghVjaSkHQBvHwmrbwQ3cxA1hdns3mvDMMzk9J5ycP4pzf3nY8oPmd9XwhZDZKSa8kPXQmGs3dYzH1KGo9D",
  "key2": "4YX1qqngNYDi7XKemfxAiHz2Ym7pqxTraoRQsVcmaRxMgQLXEZSFmLDMqcon7HweogsSBuPiTqDSnxcABnX973jw",
  "key3": "44EkxzW4fMA6pVfnGG6XAVyrgEcfDBpARmeJo99sqwPnjidWeiESBy1Zhg7fkr9g6NyARdyTDHn3PgtRmVL7mfqy",
  "key4": "uFJXuzzwNK7a1EdFvHr7PMsUiGi9XFhTqfskSBX31iKWDTz6jdTxexjhzn2ks5Y9ZyukThP5LiBZgdRuua9Bbun",
  "key5": "45Jb1rSFTjAzDuEsSkMjvT2e5Sc9ebWvNXb414TfFgndtgSJtnJAWrAYdBSjHWxPWS9vHqW23P6SN1w7XRRUJgfS",
  "key6": "4waSLLV2e48HsS9xMeDXfQ7YjeXLW8oxGoaf7eQNzsMXjGmmEyHBQx5da5aBa16DfX1ar2uGgKaHwLHGFifA7oiA",
  "key7": "6uMXnC8PLj1mh5itrheGAitPaMjb6xjGCVZadCpdHKmKwM3m9fggKnNwSba12QiCo5bqTdubke1iD8PTCkZdboR",
  "key8": "2D1mw3Qb4wXyVyW4Dz6X3f1LjJ4CmFrRfaMHXMV4ZhN7HH8q6KR6DFRmRuVjicM4XkDVQWe8Ff59VpSZQ3ByzWhS",
  "key9": "3PSQJ3WXfV4NcYZSW3pkyh3bomwjZm2pmtJFCeNQxNz2B89aqDHgBrAwSd7G8AZtH9Yaz28Bu4wFsCFNYCUY8yGx",
  "key10": "3V2J7Ku7o6SDnBe4DGj5xf7BeNDPaKxLnVjKdBanWvBsm2hY1Ez997H6v21j1WcyH6mEfcq9GSg13yaHafZvhPSR",
  "key11": "46B2fq1fFjSke67fnz4UGeY4rguTZ2u6Fhdz95TKyme9uqFKENbzHwsVe3dohZnA4pvp3PLrkZ3j4MaYyfbJ3D5W",
  "key12": "42tHsYuSq2KYE76eXKT42cZcJczybkEYASd7X44djWeVyYFqFR89o3ijrFfSusMA8jvrhgtHHuKF4XLFiNHgTmfm",
  "key13": "5TqSY7TuDCFaawy6L4H4AHoXEPaK7fXPkaagWWEfp1xvkZKQgjZxEMqmWVQQR8s35t11mfaRokWC3tEetLJdLM7t",
  "key14": "5PeJ59785eCoEMQRbhJzAQhuhMhScgBMBbBAAnxLMDXCousD2dQeUxMf89nEDt5aG9h68F4q8GH12uJJStKN2pY4",
  "key15": "5vYpEziasPKsx7f2Eqf1bumUTjkTcEPoyEzKfvtofxVENEkyAxyK4SUnjdwcAXm4QyotQZtcHsu93tXdkrwep7CU",
  "key16": "Nd6ETGRRaDWGsu8t22EXmK1hayyG6RiNHesBC92F2m8L31qbG8c7EuSJWpn5Jf7ig4CbCfJeiaYWTQDKcWCV68Q",
  "key17": "5jQYrQJTrAAFhRddMYnU2152confrbTzE9FMyoUbpYR2w9v7bJuKC3twom42Gd5T8daz4eF8D824ES3jnmtegpBe",
  "key18": "2DJGDhg6W3eSNBiWjmtky3gZqNDnnhja6a5NWRSmQxUD2Uu4Sy6D2V8rUxdRsHA8timXgeooarLRtyq2hRF3uXcU",
  "key19": "3ZysmhGtShFGcJu5gaAAF9DopMj7kbCHK3kmafqA8wB7aBCrgwVqQP1ihRC6sEi7bJ5MhiZyepYkfx8Jkej75c2r",
  "key20": "UfgoC44Yfm9HW56JykN8aAfFQaVCGnFQBgUNxJjGhi6WrAxyQaY5TgKYAjYC4f8pYAEBUEsoG5S9zR1F2GdBDES",
  "key21": "2aj8WEqwipipn58dZuR8BpWFeeaF8H5LjjhBKgLsaD44ggTDsDQq2zrvmTKpU8RmFEvAYdub7tYgBCvg7kJg3J6w",
  "key22": "3y2pGKR9Ehi3pt53d2NTis8F8QSTueemffoZw5mQCRTTLWyCpmGxmA34wZQeddathQLoqbdeWoHEzmKAvf1vN6ci",
  "key23": "3qTfppHHFsTZr1z6ap4DHpQq1wnpsBcbo7qkzFxyVjBkw45TFpLKG2nJqp4ohDRfLcscqquMRCSUN4ubAwPSAHMk",
  "key24": "KHvQqsdKicMzNwdzrfvASJD9Xq3LHnxudTF7ZannyscyajRKe9Mp3B8BQR1Qei2qi2pqKq8N7U73hEtrLgjtaKa",
  "key25": "5bgTmJLvJRr8YiELa5Vm6t1VzJ37hnJkpFhqWM885BCH3YBLE4JgeK1y5PM3M3ggu6p7ddTZ2VgsfMGTqPhrcnnz",
  "key26": "3kvUUFL7BaaQ5Ej7RSpLSaBsCtD7DzQPtBAaLR4xncW5GttAPLYA51rGp9y39GbhHxovPR8BfAgof3fWJnVTWnb1",
  "key27": "4PRdgdHe7VQCX7ufWBRFZzCJVyiq9eMoJNFEF5J1MxWi3AtLZL5yW6F14iKrWQ5qTjCNSqDZi3V633SUqEJCtzDb",
  "key28": "2qXYc2JgRKGgfw2kG1nj5siCSayDZDkRuYeUqN4uq1SNzQDxQFQ8YZRPRov9afu8bB2mZAdRxkEdaduvBuTuQe1C",
  "key29": "62oJs32KeArM45jgBZs852TLpVd43KFkiNeSfuXGCAE5jPmDTpYyVMCcgrE9q56jouL2MWrAjgvhaQU4WuvY69uk",
  "key30": "2cgovJZ7tN3rZyiLcdhrqxC8Y7na1ieGTXN7CMngHkYeitWqmJJstQoFtfM26LngZFZL8Bn7eedEGXjwuXotbzMw",
  "key31": "4BqzT4fd134eYxFuPzw3QAGgyWCDMMAoPggWNqrFeDYeHktUQNxhBUBG5uznGNjU9VpeqZGDeLvNRWZ3nTfaNUkf",
  "key32": "4L59DfPjxfnVL4sADdPXr3ik87mvYwpeaaA6QkifwiX2iAaz9YCD123RrWjuXRYPKZkW9ZcmYvsMQTDBBbfDEvTG",
  "key33": "79zjFQM6SZVneqPCvuzcgWba87Y5uMFBkdJnxgoZC5QnZpzaWE1qQuSYmxgTovqmLNnnxZWZrg7v6s5rr4oXPHr",
  "key34": "3mki7WHgHjfpKJ4ccoBmJGiuWLnAJT5oyosLoQyVVsLjX4gaMKxqEmSFhbS5BwfuRMvuvmA4rYgv2AYjuff7BW2u",
  "key35": "47kzeusUpC4wx58Yy66LaUv5oaKuJ5FCKBdFdXv4xzpPbkVSZ9VhvWGvtz4ZuKYSf3cvYVq1ae7EXBY6eFfRv7hs",
  "key36": "43ZWZm2Uf46Ek9gkgx5aJJsHvoNkEfxZFUvKA4UssfcQHXkMCP7pbFJcQBzeLNUqrbmoRRcEw39yyH8Heg9uyJDH",
  "key37": "4WeNLGZK8s9YECr1xAbtqEDKst291Z4s3Mpry3jJrCJLrLd5a1TtCZAfY3ZWzL5zE2V9jAup8JnpwL3qnm1XLhfw",
  "key38": "3VNbzX8CBY3tRXym4RESMPcPWqcaud1fet2F8nJHYGwnLwyM8B3QR1RLZ2G5a4u1CAnL1YDqXjk8nvzaorzyLQ87",
  "key39": "59Jqu2QAXVB8aWVkAmajBKLunH7PUyWZT3odbM4zZqMQYBPmDHKPiVP9wxCXFMt6m4ZJ8YvtMZsbNfVooAQ5tEGK",
  "key40": "ih7hkRmGB6waaw99sN4a6YQninCG3JXVDWtqu2YLmABvhXR9axpdixavCDUahcN7hARK8SqoKBBTN2RBdCno4k5",
  "key41": "5bnzLvSuSmZqGcg3iq99TBqeiZRJx7uq5ihJzfS1dvpfVjUmBrR8DJQYhV7WTrJJCBfuD6guZpi4nRo2EFykqABF",
  "key42": "67AFSLFuv42UaS1G2Sqev4obXJrovZ2mVz2vSRF7U9e5dwhGRTbxj9Si1rBcJYCDmGNTuqsjNBNPjWFcsg8S8R6U",
  "key43": "4PBx8L4KaHJedi71my8QHqKs2cXArdfdwHFVbakvV9PvZheUdJ6BjUnNt4JMVCUARLMkV51HZmJuchqi5pBhjwD9",
  "key44": "QLY9o1rBeFhLyV99PHCmG29JMMZaBjSyvh997JcSiDWFFF2sD1xkrzwkcsnhbybEU7kJCbwwcJzSEgW2i1x2LRj",
  "key45": "43YZvvDW4kfiHRziNjdEvrZY5QvhvbBcYr1GLP2WFpHAXXwzSno8bMLHX4Ym3FMWwmHkmGcGHf4SLTqCW44z6YYS"
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
