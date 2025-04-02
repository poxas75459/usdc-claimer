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
    "5QZ6T3pb9uDwC5DhDJAiZfYg7XE57BhTZFvVNyDkDxXYny7vyP7mvgTR9PtRUGwRRN9SVonhVEvGziG1CSwRP3Zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c23DHNtjqDwBnUxMuQi8h6gx7ER1i1Uwx1QqRXqwjRhfcGiyuRDmH8X4T8fxBPrhue5MUCe41Eq7RMMKV7mCZN4",
  "key1": "3NueHBWK6k8P7tc1TapcR3cNhzmPX3Bbyrd796wr5rBbDgqHM97XTnBkQw1vZ38U1csw5QJXsCGrnpkAgzruvS8z",
  "key2": "5EJQLoEgckxzE1iPPWRbaw6DwrvDC19fNUvCbAfuSMHuKQ6ATgjWWgNMWi1igpFPmEJBdicXNhEvMWR9b3WqoWuu",
  "key3": "3LaU3fAtuUaDBVwNjLyNcb4w7Dsvpjs3LHmMyvoSdmSYKQJxBLrpdcoBLrhvSr68dx9HeE4vfX6z5ZmqWo1AWo6A",
  "key4": "36LkTmB3ixvp6zCVYNLUXJhmwUPDmTHfJBvXSUC2heJhTSW4CFMiwN44ymHWoqm7KqfwjqBawV9iDg7zQwNXT1jQ",
  "key5": "4qV2fiKniRieggjeQwr5krc1D3FuvucSDbpswKNKog8R3T6cjfkC5Z5Kkj5Au1pGkWPHHQYyPECLVoBdUKcSWVrV",
  "key6": "4MESqFiJunh6Lp6fiAjprdxyZSXr1pzj2eeEK79VA5nDcnqpUTnEh1fbphfyW7zVwsGS8fQmGcSPcMMyEFnNEz4W",
  "key7": "4cCvpPySP44YkURm9XeHq2DAmxN85gSVcee8aUHfNKVAHLW1Q2eS9PMcT18a7rkdZTrTdxQ9ABbCCTPrQCB3g8L2",
  "key8": "3ezytVS8Ce78Cn1uz3bfmorTtzD7nyLhkwKvR4k6m5vfHpaF7733yZpuYbXaCKrVnan1Kpd34WZ7Jenn8Kjyin7k",
  "key9": "5gGaXvQcxZV5MSr8T1J8QFxLqDaYy9gCqDjdVQDbFVzKuBVw5hU8C75Kj4PDXmA7SH4qJta4d5B4h2znA78ZXWvM",
  "key10": "3YCBq8PVph4F78bxm3naJU6UuFnVeaVt4MQ5zPefLpvMGjKSntyZyMCRzVA8CLr8YKHguWgm4vgaYq1GRn5qiP1T",
  "key11": "62YRsxezNSfE9o1iKtF8vhyqv1VLHF8cVC9zAYhEHKpmycfcioZ3L7X2ZX6YjbD1PM8DNm3c3Uc4yiJVg5ixtjiy",
  "key12": "52shc4C39RdRMaSt37x6T651XgacV8nXPC9PKh13KQ4ANhKZFx16icnZHZmfjLcBr18Lg76R2goiB9iScA5ada7V",
  "key13": "DCqFedmanRNxyk48ZLeLxGXvgREYsQhuz4BMEg3VaYMs7vzU8BR2h8jSodQoLWxF1LuNLSZNMaecTsUp2FR54Xf",
  "key14": "2ZVZNFQb9vSDxXfZkRhQGd8dsxs3GiPRe6B4ffoy8w24mpteJG9WvRqfR4kcnMN3fhVyESKh4rFj9rNGfwGyGtd8",
  "key15": "3UZXNf85Lfrfqrhh3uofG9W3fGpb8iJYDvT8BBkLQXLSrjN8HSGvci7BAFULBrtCxRwnYxmjkbmwQi9UcYXNTE8J",
  "key16": "T7zzC9yJudXnhH5iD5EuV6bsKJ2cySYQsio2WyN1msVdwm23RnFDC1JZ6A2D5XAoXbVfTS1ScTvaCGTBuJCEZEi",
  "key17": "48bhFzVMwEQvywRwmNHq21Dzd5DuPHdD3PQBmDVcGuXXCVQk5oPvfyMRZ26H5PbMNx4gfYZo6btRkqAHtsT6vyvJ",
  "key18": "Y8C89DsHVqpmdhWMHgyfWfaYjE97UK82DLEWSvSb3UHYhn5yg2meHDR63Z1aaBne2zN26Gg6tLrqQpQAsJvfbPU",
  "key19": "4xqJ894TjeEsjqXKWrtetKEcUSNq9QLxJxfAP9JGyZCcNGJi6VeKTg4eTq37Pt32oy8yTe9V7QmmCHQa3sYysDhd",
  "key20": "8MtxXgoAABdXJeWdKuqizVsSw7XZgCp3K4gPpw8iDFkCGjFGoqegfqyYDWduN2nHqgeuTQQFFCZYLn3u37yBRGg",
  "key21": "PNDxc9gHLSzMLNdWVyNvCNjywoASiYDSFGLgVNLZxXQHeVqXToeoRLMCKfkgSLwf8d4nHyUSVZ3GAHX4WwsUsTt",
  "key22": "4Zv3M5PNVaeEufiDUNKHZpUdVdsL8vQmk7QY8n3bCQXCovaeH8ELzgtC2eqJz2in6k7gpqLhHVwgFFMc2t5XqLyV",
  "key23": "4X1BdrQtUoUkkey2jGeJo9ofd86qbzZBeTYAQya454jAtkk9iQW9ztrH2iU7SnCkdkivCysgoXNnH49EsDuSwUtf",
  "key24": "Fb1bj9RHdYmP8An8WsquhNmGqzuw6k972K8SwkaEyVXQRvdYVe3FSHiAiTpGb7MXBeBLg8D73QXQ9yJvQ31HNbf",
  "key25": "27GzGZwCMoKvMVkrstYiJQeDde776Gvqtipk2DvnYoGfdanfU29MahY9trvFryH2UfYaam1CVRbB79MNexJabwUK",
  "key26": "4yDg6VekF1fso9Z6PdtMUSfVhbfr3WJDxWTWbbWj4wq6R8oiGdRoQViABtui4S1c1EZQA7ktkbMtCz29d74Ahzfy",
  "key27": "67br79cdPUjrWxQ3jfKjGBnwW5zLz3HtmeFUwEjmNv3GHch9xV2Zv4MT3z3xnHtSHktKbGVyg9cfiknSrk6fZSE8",
  "key28": "mURr8u49rXKodU1KNC7kmxgpcBFHPsh2JEokcfZvH71j1RYReP5Rg74SsRPgZD87CnbJjaQwXBwdbYJ26Hma8nJ",
  "key29": "4utsh9sLVRJ5vxTNTLqZ4Mntu65H1zaiV22853naxi8ajSgxXabd9oyaTng8VeFqfuXaqUbk2BNssgokGu5fpJcs",
  "key30": "Z1qymr5wVkKT7psKNQDABf79CDgvs4bTLhAYTAjhHvMeqNHzMJ697pCFn6Eg3bQiqr2Xaqcw5rUMzzRd2GjgTTs",
  "key31": "tN8oCcQT5JdjvBvVs3cg4XdwzjVdYW5aD8EiSqG9FSMWS56NAFkKjdLMRhjMgkkqDgTf3e5kGPEKgP8fvjFsaS5",
  "key32": "2ZSocoF5yY8dAngjZQcJrJRkHr9WU7gdd2AfTGmY633VhQkb9if1mdVaG1ML5GfY87Bw97H2G1gjeZDJQJJ1nU6A",
  "key33": "2raKCWmntLvJ7HqGBGxVmopcBiRmwip5bCMvbnDKZJUpjTJjUR6bmUja5Gt6xoFHiuEL3brYrZyQ5z6Dy5jnkd3Y",
  "key34": "25tUf69KF5r7pBwfpZMFkZaRdChs6TpYxxn4QXiE36waJj3Be8pvowurZQTY7UNa2npKbNTbEZVyjFDToVHTqeGd",
  "key35": "378Yd1FrN5KbR1Xw1gAqA3BejjQLSm7wJ9dAytwZFv2SLhrz8Hq5otrALXz7mCc8Px27uSqKZJRY9TdN7fBrbsYd",
  "key36": "5wfv2RqTTSLQUyg2uqoWWpzAdk4bW9HE1Ak1nAgiDqpEhpjybUibLBQ2CpdviCn3taDYJxGJ1pzEYcJPFt4kpb9s",
  "key37": "3Q7ddHWFBEUotVWWxuLTAGF2c4bpaR8ReQSa9AcY12zfYTS5z7sT8tGs1c4Rk93fsV45GJyiw9ZZmDkNeBrGqeQA",
  "key38": "2tBQNMzT1YabWC3SQryFdZXLRQZnuWKFUyW9iFtgadX3WN5gaGif8RnBpDtTkwiHNpeh4uAL1qjKx4t5UBaM2WTd",
  "key39": "5RMuWpSzQ6JLjKt7hQbRCkhhKRxRaRYkd5fHLmzEx5Zw9tFrV3aRzg1fwVDuu4FCtB3jUvAcqT6nrPh4VZkWZj4n",
  "key40": "5BAWPYFo4L7xBCmncSdUrkyuk35JobZJJYxVCUBmdi2WuQKwnAfmihUsmeAcWJghFyLP2zcXZ7vFydevyxAMLDrS",
  "key41": "3wfyS1q7UAcfzhPSCiyjbeZZFHXrRFAPXzcftDUYw4hrdxGADojMNZAcRuWXpfgRqig5D2RpstCSJbfwf8U7oSP8",
  "key42": "mgg4dTMNY29pJvz4oS7nTJCAp4zWcZy5kZbgPsV8ghmfs7c5AKdjf8t44oK6Pw2i6bcc5gzL7U2Q4nKRiEUo7Zb",
  "key43": "2QsQ5dRLrwQJERc5vF35e1hkUzig2qVy8HFaXbyD5qL1YL11k7RKdL2fwr9bvi7yXyZQdP3iDtKEVtydcZjnSeGk"
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
