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
    "4eQLpczXXtSpt7m33cAyZ3v44Lz8KSZ5zwFjZNGJJFX1juv1anKp818G6zDFB7v6vRDhgiFgyf3TnhY5Yh5zVVjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LKT2a2usRQVN1zmJzyFN2F1fDa1G53Vh7Z8yCZbcENG5mza1eP9hAWfcEWqPJa3M15Q4SwsaQ6rFt3esNVFwqC6",
  "key1": "SDR68zSrMPDRnqvAwWJW9f7rWBj5irX1yzrJcrMQNazFzmLFDqT3yPAMZESTw8dqSQ1x5pdvXUVdQaJ4mXuobgv",
  "key2": "ySJz6Gcpm9Yc53TjbZgREECK6NrPa8M8TSrAR7V5GQ2ikxLwetkZ4p5PRHpnphT5LVHwZTAT8cdJfmd3nWPuR9J",
  "key3": "66tJTQEUkQYxK7UkG8JVgzADczc8Q8GR5mcJRHhY54nzysug5WXAAKfVK6tN5qxTF94b2zvXC9TLkfLbgHdXfUXL",
  "key4": "gtQjBCTjk5Pf29UPC25be28V3ogXaA7cTvwdQRDaVRvuYWkt3rngpxbxHiZoaTjZEJ91gUKM5GaM8LRK858b3DS",
  "key5": "Kip2MsVbXCL7uEvZNvXbCjY86CU14DrbmovJ7HyAdzVdrZrLnd7pamqheNTj2tioyZcE5u5Dp2GMvNNCzkhL9RP",
  "key6": "x9Xz3q5N4Nt78BAsFwFvQawncKMzMzXQsRxtwwdYweTKWZVxEyxHMSoYov4WekWqAChrdqFabdcwvQfHtkz9PUF",
  "key7": "228GWUMisbb3EfzkRHTuVjQaqR5sjvcatFzBkvCUTE3uGihp5jBJ4TB27xaEPJQzYDehBTD7ZSGubi33iQXqFmTP",
  "key8": "4F9BwHatVM5ZT7WCTf7bpCGGKXkzZAkhCT9QfWLEh7EEwhws9AByP1gyxZChZH8KEkNunWpMecbGiu7PYD3AKD2g",
  "key9": "2F6vxtfmL1LAMnuJLhDiumXaZe1CTzyW1GaEwdsZERrnm5LB3CD7yucCFjjBdpANy87nk9YqxUXz2cPcvbMV3vUW",
  "key10": "5gCDZqCRPCgeLLNs6AEESxnHqLLJzAQE2G8ptzXQjR3RwxPmRqyKGmgNnuoBCytW5kK7rYgpQVM4BtwDgX7PjPB7",
  "key11": "2eD5uvoHNYezTLYztyr64VvGgGZB6uN4uWDJCPPsecaEc71aM5yQqwwkV6ZaSL6tTTfsqUAB1yZeBmtZLZVUeV6G",
  "key12": "5bYAQyvWmyVVoHvNp5rXcdcz2EpQ8BuuBwWmuLyYig3XJyTLk9jAD6yRgho8RiWK1ee5h5rUFzq2He7APaGNokoL",
  "key13": "5JYwY4G29sruFMRoEua1wUWdNsgzVyAanB2AB8xcBxYzEdVp6uE4AqAeUjwzLWYJXmeoSnjgpgL2ChbZKZ5xEB5F",
  "key14": "5J4APjUA1KAyRTCKVQ1p1E4w5zpfhAPERWx8AKgBp51HTtdJCUn1fbzUhiYzNBSzNYEtkL1vi82E1RdeDtjLY2jP",
  "key15": "43D4Z8yJAdZZhToQVF7qxZ75PNHjBnySmQAaoEDVbxZb8oUD7rQFxvKcPFPJngcfQeR8N4fpdA8yP7jUbrXcH2Nd",
  "key16": "5sYe3RfHANJjHdHffUtRF3pLarQbr2EvTRQsQiB3nZ5JDDW94PS9uFnjs9sx2wbAkbSHqXZ5G3LCdL6SBDh56iJ8",
  "key17": "4khzrvfhPgkcPDiJGKrDURmikzF3CJG93YJeEvJPm8kyarVAXKgAjG4xkjhP8JqbTs9gmrisFGjCUWUs8hVtG2Ze",
  "key18": "HeC9URemj79x3xcPYMBtQT1dsWtCABWcnXarrJTAvwodtfRXVamMX7736Ub4PnEo3AUrKYnaRdwvFYeuPjrVwYo",
  "key19": "uRBu1yLP5MX65z4YHRqijeyZBHmGzLJ4ZXhU8UgJRFfBDmcZo41xyFVbQr3m2utV74eXaCMrR9M5AvMyW8JqEQa",
  "key20": "3W8F4AZySVTz5RJsnAuZiCTaSGVtMZXCzpBnRJC9gTpzxDfHTDUVGYoMcSodhMVDraioKDJeVDRLywh3dMwXipFt",
  "key21": "66amfr2EfRkgYG7F6orfKhUxB8gJRrUQo8ztCUSxuEafq2YNeAPY4jTnyujyansdJr2hVsybKJTchqcZehbLJAoa",
  "key22": "26LAaeX5qfnY2Vsr6p81GuZZa82sVANG2XJ6fuDBiCk5Z6B58JkSUxmWRnzsyL5B86Pr5hKotGoLF1TL6VrTWdUe",
  "key23": "4C7Eyijs5UiTPFY2Q79tXxRfq6U3N1GYsh1oNcgbEputJmXwX6R2GrDsdg3GCYQrKZzeVauc8G8dLXbVV2cWjNLL",
  "key24": "3WhMjQ6me515r7SQ4RGMSfjGyyQ9HqSNY8jzbrKst63AHDKrvcrD5mj6kzpVR5zeKioySWYPzUcyXZGUYnjZSepb",
  "key25": "2V8cHKRRN5kmRn4tXu3bHY6KC6LhuHMcSQyrxzjXGwtZ2z3y3mYR87BoNmbpfuDNowh1JNgNtxSAR5zvxbKJQgiD",
  "key26": "29DX8J5QVhec74JDNvTNPyUKC4hN1cAFKyw8EWXWnbPLiUALukdWC5VXVHYhXipRsU7zRAikgnWKekc1jrPxCS4h",
  "key27": "2xTRkKqnfufpDuLDw3CU1b65GPDWyXZmpKxDJ76dnwFtciFb9fJcCs87VyJS4cZNGbyzrvxeszrAWFfipxN5TKG9",
  "key28": "3q3TUFtr2gmC8atH53dVazH5eNnr5UQCMmGHX8NMPXS7FxvNk1XVxJu9kxu8yNghEwvvgPRr7TZSuDZYbu7a38vo",
  "key29": "oZJ87xGDXkrAcTPiCK3x6TT1kwEiQALvP94p9eHa5RyFnoiPy86YbEduw9jgh88dF7h7m9NzLWWyuunTun8txZj",
  "key30": "5fEE8H7KSKM8iDZ5NXkgUz8CuSgBc3Gbf42VL6XR2po6My9xirb1e8xor7ZdhXmAq2SqLRPC4dsq9mWxS442fece",
  "key31": "45zJEy3jq4p8bqN53P6GMHYBgYfumYfZAZCwbDsN6mWcq8cpneruKnTs2uSk1y5uT47eergALsQXmxcdHEcGta4N",
  "key32": "CzCTf43n87U7wdxCdsiGsM2mpDciCMtuQVmbq1hCUbscQWYrH2MPc2NNH2wA6Qd6A18nUgcdQVbtbv9muoKPtQF",
  "key33": "5c5xdfnT7wdZGVQ1zZZNA5N6b4PtDTyYqkK3SCz524NLp7Mb9femGx2F63NAAR2jGxRK7uNms2ggiAvoUJRVLMdC",
  "key34": "7bZskLd2HfzwGE5gUcwP8wh7Zn4rXjLeinuNsgvEeek8mrmyeTPxtsmNBthCMTWpbMynvYga6Xd9VNEFe2Nwrih",
  "key35": "f6bM3Yy5DSShNHz3KQWpCwPSQxRHcU2XTK2N1Grx4qQGkt84aenoGQMeiWecDUgnAnirCX6Kf7tomnzCEN8Npgq",
  "key36": "4K2cpUVUPoS2jFsPpQ21Ls6WXAHhec2vgcDrneKxpZv4sESz49KfuTUpsBqqDRz7gRDozGsX2BqTnygmEqJWyoNb",
  "key37": "2mDYMXMLU1XJCduC6J28Q7gBv9vSh3i63jBP3B6X5PRRs8iH1V5hqXTgB7z9vCxVVRNuZ2ax9ZYxwSw8zYBjfz5C",
  "key38": "38X2y9ydHHRr9Na5rrBrT9PhsdqQxAeJXNBL27ACJXRC4c9LCwKw2S3Pyk6BCr7c7tGRebJtfVmQWbZc3DoP4PtP"
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
