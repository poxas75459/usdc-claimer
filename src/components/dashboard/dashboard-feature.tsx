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
    "1dJAitoV24fNLyBrqpWUAw9BPrKiPvtMrTPKT4ijygCseTskhgMkfLqTJAmcg4j5kdN5z9DzEJc9EpQcjDJ66rF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K2xrke34PLut7k87jrtY1AGZi7b7YgduQ4aj8khddaTJHXZSh9XhaoDLg2GE3pNFDbhWV6NF3Us2YjXJjJLKeD4",
  "key1": "51Mhb93R3veY8arJ4EsV7hWzy8t2WLChjTB5v4JqZAvdG3EaYP3HBgGHh8WkS7r8eKyGzRnuJLAhqBsh93nXNNZF",
  "key2": "5J7zD5pDNyi8aK89ybu7y2bDrk3pK8ZPxknZhp1pqWbeaZ7Vc6xLeEyg5E3ikutyPxSkLgNXQF7Nuvv2UNiQW9cd",
  "key3": "4DP38VSRBZi3wmsbp8w3RZxhsR6CouHEz5fcSRagSVAE9WWi2ugBnTFhJdHuD9UdFxPf3a8TT6SQoZHo3Y22iBVF",
  "key4": "23mr7L1XN7T8WmAMfYa7zhVjow7Hbx4S6myHFmJZrW2YVa1w3xFDgUyBj146p42jVhtmz7awoTuRuw3zrQbcZBLi",
  "key5": "4AYoApq2UXN4xKDCzEzUutUL86tq7SWnpUn4WXU9TUCzugz1a6ujJYTCT2yWkNExTq3i31iZBYsEEiyuHW56Nw8o",
  "key6": "s9KaY84qqWmRZRSJuUke7bYRhrCYS5HpwrHUqbaqFyV73rrY1XGAdZRKbosKP1wKMU5WLWRsCDYRBWq3Ye4cjtb",
  "key7": "3S9w1Kz33rvVcrmpsTiwmsfxVhuN4YpN8oxW9XQ3UH7PZGdXe9SBsC7XgSB6egnekG25miwimn21Zt7MiCVVGjS4",
  "key8": "4GKot7AKkYM4m5mDviDX4YYxToBA3oAxavFDTH3j6STDTSEuN73UrvMyzEknXLq2kKPiDPtHHBMNLNmUApqKUbaw",
  "key9": "49mJUCGQSG4AWimwPUUxdJX2hFPei5f9q6t2EXBcXsmcShjZpuit18i1ZYg41BbWyrkYhrYFTkavwm8TpFv7LA4A",
  "key10": "5t76Pze8iH21G9boUGyX58fwVZnc4X36geNp92n9dgYVpqXKxcVWxdW5yke4c2L3sUxPcEiArJiWENYzzsJ2QU5B",
  "key11": "3AS8H7eJ36pCvw91EUy24n8kucR47aUeRcqEGXfJUunNfiXYskzFqAV4uUPN7wLuxj56yzuKdnUUrjvxuaJsgGVq",
  "key12": "5nb67njrHbveDatvbq7NxW9W7A5swCfPHGRVRARTdb9u57T1XCJAGsPBKHEGb9EZuCA5mhWy5woNwviRhF3dbd7E",
  "key13": "5zDWZGfYKVqRpRV85T5ZAuaS4CfQbBRjquM56CM9SudcYNUwEZyKyH9b3eCSTaJthCP61WGz8fwxUYUcjh8DouPv",
  "key14": "5BjCGA6e9X5kfXhbALaw6w8rUs7nC6UfpH4KJnxaUYN28SCAyfEzN3XQLmgyDPvx2tgc9jdw9rfG4X5Y6FPBcrwf",
  "key15": "4fsrWaQsC5Hmi4wsmAi5AvxuQXgKLADvv7X6ihwxuGjYiYwJphgX1bzyRgKXrGuSWMUXhp4scDbD8qhDFSq7DRUg",
  "key16": "5FCQHKsAPpnke16CgfabmMgVdShMbMLrkDdR4ZWNzNQRDkXUdb8xFixi368r8mZoUvo6hrSK2pjajKd1gqvvSNUX",
  "key17": "2KiZN4qTemshNuGuyRTPfbgSDFV2W4bhLZ8t6zuoFVpv4GAbeB45TFPiz2zwawPjgPMZG9yGdKxd7ouHrTCod8JS",
  "key18": "4P3q6gRDzBewNcW43t23fHjiX48oMUWwY9bGa3j5SxnndidXYGqY5SXxcT3nPxf3p8PTjkRPSKqMDMbSmgwGeAkx",
  "key19": "eLoV3T9DvKGiQJ4cPDZJQApWm4qkuk6ou5sEPTxJy1UYJVdDPQrJpYPQcGUJ1x7MV1CcEMGZD8AqK18bsVy3T5a",
  "key20": "NFKXhtA1kv5P72MjBtoeHhsZ6zFQakUSa7p2qACnYp9Lrj2usbgQQqCudjCxQrZCybT3nwuuVugvWfrxB8KdSYr",
  "key21": "2AoqdvXxCgaBHaa5huF74EEshuGVi7fnc772WVTFewMjratBkUhMfqu7CieSf2JZMFMySQ5Y1eoJwkfsUsxkverY",
  "key22": "GjJhvLnANd8gRfsz8cxUmCoqp3qmexfFVsWrkVDRSw4PQqmPbpFX7pE4TqHb2f41TYKWxjTAQPKQw9zBNnGKsED",
  "key23": "4EucjKgQewcqrtTePByv8sHi4KjX36XYaW7TvVdZCpb9fCwdwmueA9nY5NF3yyiFVjXAXXdW9f1BrTe7RNi1EVZ9",
  "key24": "2sX9v7hGmgW3Ljt7Cs4xmVfZaKfLhG483Dmex9ZWUV5o2jvqmVonF7B3XFRT1qh49BBpzq2SWm1t5z3YDzH7nZt3",
  "key25": "3X5LrL8imwfyPUNJLKgaceuDQu4qjnVUFTh2mStn71Q33yRhZkcmTUKpADsa8Zis753QvVr4b7XeUgg5bRfzFGsB",
  "key26": "4VLDQexz3QfsVoB1Fy4SYi7NwdTZPzv4E4qPFiLw5nDZv1Ya7k7azfwiVcX8jJ2fZDrKCyPpUQmknA3EahvuBsv3",
  "key27": "547b9za5G6B99E5xTnb3pqKef4iot7PZd8WB6c6JBAteuGsmoG66H9mAoe3LuLdeGPkGXrH196FjAEyGoGWCfZwC",
  "key28": "488oY8Nht3ws74YW5JVd9KwEKYi86HGW48PhaoJVxTPgUXftsVGKDFZX4KDH8a3CMkckkfViGu3nb9isMqBWgYWB",
  "key29": "2vSy7xfoSa7C7zKKuUjmJcMAyagsFzdjFG7KuoLFtqxsCUn1y5E21QeNcgM4cWNtcm9Vk1QFbky4KQpiH1gsaKzh",
  "key30": "3CEKmibVWfpgxGC8JLVV9P6t6iZZaCPoqfhFa95sgfZYv6vzc7PY36oYy1gJ4roTsEoXfoDDk2RRckYTR3q9ADsY",
  "key31": "4V7J5z11QayhgBEHQVPUWNDwQ2ZM8sNdAuEv9wG2LuPf4R71oky7tWT4ZcWgejN6iEPrZks47W7QLuxoRbodPDxr",
  "key32": "5idHNYrz8BGqHAsqFzPZEGZf8TwTLFMfo4CieftAtmr4JMTn8o8Kq4DtuLxmCwLjoTrXP5koTGs37buAmWc4M6jS",
  "key33": "5hmgfuiRqDDAhmJBPmSako7mD6qtrt9ypXyAY1b4o43WLVrKVBMMFfSDBDSDhcF9UQyGydx7ih97crWBnfwnH2zE",
  "key34": "3JcoAvLiV4aj4iJzxbn4sUmEufj9RviamvsjtDuH189fz2zUvU1RptYpMhGfLdNmZ5jpXWWMFdJn2SbPecVx3yo4",
  "key35": "3MyGcsaukhrDkhCYq64YFCbv8ahzv8eMYGPdPinpo8voZ7TmQz8cc2g4Y677Q8vfUYP6Ma5pd2sCZmYj4BroAqdP",
  "key36": "3YHZWUeiKk7wusPSKJyzG8hm5rswufQ2yUD1xj8epUiFMLZ5xEXoarnUhAsp4aEQrZkx8BDbyK4ZaLzWPaiT55LP",
  "key37": "5UB66EaHc4qzeSg3q55sGhgn6UVSQshf8VUYJV2WJvW7UMj2onsPjN7dtZMN3QNM4L4ioXrch2WU6R4zTw6iDoQ4",
  "key38": "BZCdMSU8zeKzxBJDJNdyRSRX7J2Kx9UQXmmRWTG6qcSRpewDvgUpETr8B2BFQQBsHm2ujT2TqbmA7DQeaExvaLL",
  "key39": "4S5zQ3hsXGruScLL1CpwBbDUebisZ6QYnnEPmNjvTCLj11Aq2kGY6kUCvKdFxiARiuBz9UiopQhwz7JKectMV3mH"
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
