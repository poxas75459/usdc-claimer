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
    "5yAuLkGKRMq6wX419CYw6khAcWwKvcRPRVDEHPez8ai35irqMYEeUCPz5BaaSaCpTCwFKWNgrJ9BpkniCLgxV5vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36K9CheRLGhLMFJXwYt6979MUmzMobkVj2jmxp9tWFHUcHZySt7RR4YPcDEcA32DjgotVmfVqXv6RmhciaLjwCa5",
  "key1": "bYTyN2ouQxFgPn4G4mLnZDnoHhUmQduoz3XnwnkU3igApZsKs8U3eLbuz6uqi54AbniCQRVtYZ8bLwJJzJnCX47",
  "key2": "53NejnBbpXsCXMtsd75UNpdRhSsLjSTgp8t5LnYwT9FH82hqaP1AUVhnhjDovaBMC7G3QUmWkdTyiUwJ2BCmz7fk",
  "key3": "45hy4AxbgaWxwaFrxHcgM1JWPffnHNntk9BsreBoJGjdSZu46HKVZKFocYWP7cwXLiokw2eH2jNb3XAPDrqb7F6p",
  "key4": "53umQXG9KvY4vDLUzuvPAz9DUgDier18ZTABAzVbzRxm3ZqWR6Mtd9nFJcmGN6JfTBcKr6bDdZye4cXAv9iZWTXV",
  "key5": "3WvGKFNhsV3Lnt5XSBq74tuB1VQpbMNzQSYistD1juHtomAc4fXs5tT4jzwzEoXSeXqC4ecgP22tTMC6PcRbuNiv",
  "key6": "GM9dmTm2H4NYWDQo4Z8Vn53g721VQFX5wckokMFjiF9BYTpUKvwccJ1mhG9GLswi1nweGmo82vY5q9cHimoqvLf",
  "key7": "StoqBH4KkuZGyfptj5xWPRXTt99wJJx4XTkuf6t5QPF1Z3fQk82E8WyFGYGCMp55KFAN56SsKZcchHayD4Xqmwe",
  "key8": "398C4RFX6mUvoXfNxyRSR134VVcrHNJvGSDVEjkKELp77gwMDL1NU3qo2FWJP15NMYdugg2rxegd3RGiut1SCFH3",
  "key9": "5V5JhycijP4bqdJkFPkaM65iUvPeKGLhaugpZT57JNc6WYCxBySkVtC9hq1TES2pnATatDxnMJT7c9rC9cJWz8RT",
  "key10": "dZuLXVz2CHBC3fpvaaMQkrA2fecSXQqNaido2HRVZg3rXVt12AUJNaauyBHKw1q4RX1NqTYrFppRithu9NdYSUK",
  "key11": "4DJE7nnJLvTUqKQA7FQn86Yi4UNwQwBFH7KDUEUWCrtqPzLLRmfhcpfA2FdzAnvXtyjUJvnHfrKDXrhToaKmCihg",
  "key12": "4VifPCzpSpwWybs22b97soRyqt5iC2WDhKC3K6WNEQU4UEmxdPuYR4k2vkovMS5bdHkRLkoRbZk5k22TaHEUXL14",
  "key13": "2eRg3BJScVW8vUJgbtRxamB9bw3L1hCaKAbzeacT7wzKStPj9igQhLuH3wCdYYoDgtDwmEL6aDhtQ258jmdu3HTN",
  "key14": "3GvmV4Poxe2gEhaVxGSPgAv4i9YkhVssQVekmrzU72fQ5HV87PHZ4FMweHRDjBd562ZR11CSqsBegS7dNDx2J7s9",
  "key15": "4gxW7tGHGGnsmsqYeicUABXjLnVFBMJFdQbRAvUcuXszbS7NbKNnm8RdYghjuoYHgP1YaSKSnqKcoeVtfCS5RQ4K",
  "key16": "99ctMhznoWTZwBrvUHX7QLDYc12oRR5ZQ9CJ9iPArrdMNWuC3p1N1aPv1Tn2Y8Ewr7Muo3qFHcQXi22LBsfF218",
  "key17": "BEN6FR4L8ut8d4ixfZTmn8M3WTyLfvfYd74PqEDh2XjieJHU4cohbjmHi6bs7ch1b1i6ewYMqd9sC8nqpK8ibjX",
  "key18": "JXHXXZHsJxs7Z7VnKhbFq8sAetGbYycW2dGanijjFntT5VdPdccjchNhAR2Dtw9A7BrikiHvKYJTjSgyN52JCzQ",
  "key19": "fhK93jnusyLr8fwKfJQ6ApaN22RBHvXgRmUpq5q1J1jWHGjP1pBzU82U1PzbTGjNsef1D3YWHKLxUcuRJog9uuW",
  "key20": "4YQhxgi1xabLYBQfTRtbgjf29P1kExCLMqgEhhRq7ZNe7NsxdLzwq2eS6QBhY9zSd7KtURjw8ZaKkcQ5ne4v6Zgb",
  "key21": "4cqzUum32okTFJfHvM1v54JHnd7wseBkyGj8eT1PtgXDRcwbFdoDHsFd3vaTJV4Hy1djfVu2gSfQZJnZtW15Aqp2",
  "key22": "5wgwPieFnAvs8GaYSH4uXDPCwQkLrVx8EaJ2gaw3yRrdoLynsyxdNu85xpwjVVXCp87qYShYVa5LkNquqWzF2E6E",
  "key23": "4sLCtbua7b3yrBpwv8rYAARX8MY7459s8eSuxuujJdJtXDS4QtofBHerMmjYjSiNEPkrSp7wUPvRZvbmgzXtaxnx",
  "key24": "23ocWNmm99c8FqqSgP2kZwwi45Xcg59Hiiw6AZ5P3fEZqsdEAR81BjHyikHJpXoVrdDsqQL6V7Nm5aZN96RoqfG4",
  "key25": "3YXF1n5na9uUutJ74LizobMjdmhypjRWkLnnmEKSYxhCkhzLSH8UMtfBW8h34jAhz5Qy2Fr8A2KnsvJAariidFD9",
  "key26": "2NmifJ6eQFrb4CF9QorJ6rVr7ydirLF6c6X8jCYzrtFXbMPSNf9a9tZks2EX1s6HajWtSEG7AiXEZKtPY4PeUUu",
  "key27": "33PkMZ8Bm1j5D7wrfGGG6gMuNKUEYFeQfY954mabkmtC4auNpmkfAnCBYVxrVf7Ajhc7cuxRAqxDspBmfN9ZRtJV",
  "key28": "4X9UwSGa5A63oi9y18uT3V31TqXWkYFJG5yt2jEn8MoQqtrX5AJgVy4iwZYmrNgR7zMGabaUCEF4rrNfFmMkjwKG",
  "key29": "5uBEyPM3CP93KogYT3GMAUj8racg1CTyFovQMXC3oTxqD1CDLkbmmwGpAQZHkTLxWmCkpAapAGAPpD2hsdjsEUUL",
  "key30": "4YCJf3GLZVVV5nqDnKap9yi8QQLqJdZrMJKMtCC2icA9tW43X9U3w8Ceyt27sgi6vPtx3mrke4M5Tr88rjYB4g5Q",
  "key31": "NrNFrK8S7GYZx2PTTs8ioE2yCH8wCvSm7z6v8iCWvQHwu1FVAs3qYaadhRaY48PaMydua7GbrifPnXR3CxofP4D",
  "key32": "3fk8dfy6SXL1LbLmZfBM9eKHUT6ytgAAcpbtreaCUVeAx13cQdwp27wenGDTsCxFm1tRFHLWagkrWzWC2qwD7tCj",
  "key33": "3dytPLZYNL4AddMJiWXeyoEiYUaqhx8diqAeKHWexvNaBskAadrJgsKh7ehjFQ3kPu4unBWinAMc4jaxkws1LPYM",
  "key34": "ikqbRiMbwKeZdudPtrr6z33DJAf1bxmrJMF7u45EehGkusymrvLgybgDF4HQz1MdyT8eB7XjyYfjycJgrsBGhzv",
  "key35": "3PcLrxhEwnwWASvXhTFKH6vDKUVB2ypSpY9bVnSf89tWEM3pPxY2YERqcRSVc4KJLE1YzS3qCR1SWGGrm5hktJwU",
  "key36": "5JSYGm4J99XijwNcE8mGfBga5GA7TF7eJsJtap3nwsmxcGMeWaoxgaCZab7AM8KgsqU4xgBkgPLXQrbM5RFm5hMe",
  "key37": "45sW2brFqUphMBb4Genn27GDKZjLduytKUpb3NidEdvorPnjgfD4yLRS51VrAkRwVY59NZU4J3LhM6vn3ouQZByk",
  "key38": "5RmyZ4KZQhTMSvSAd6Hgiwfevx3Hu6ptD1ZubhDKfQwjfqw4S4RdbertDpoJk8P3GYoBbdYoJmtBw9uiyFCSCNhk",
  "key39": "2QZzLP4qaquKoFK4XbUo27NGEtb61fwTVf2PGUnabkLMjeA5Z4oXdZRtsSrgwyN2MtnRNn5eMnLVf6XRmyH8j1HY",
  "key40": "4hVpETXxpxhnLGtvtMXox7AFvYiQmDhsRK1yRKhmyC8MVeFJfG7ZdYJpK3fGGNzvB7sQtiQeNPEKa5WeJeqAXSZL",
  "key41": "yL9B7V2KmoYVwuMdfFgw63fZoNJeucJksoZoiXQZBdsGMqPziQzZiaWCdxTMpVbmPNc8cALyVTmj9pnMxe9YDEs",
  "key42": "T1JWTCH972hSB8GuXAZbEQT9HywTUbFH89r3GhVDUABBPpCN9jDT7nQpkEQ6gHDjh37krcs7D6J3cdJXpuo9eH7",
  "key43": "2DLuGCCLNchUDHWTNBpj5xuVw3NqYDZcrBTbRd2QeCPcEa2JJoRAZNMb3n9N7118oU5b78812yQZpyBA9a5K2Pyn",
  "key44": "2b2Yhit5xMtFY5HFfuHQbARiL4yNeaJ4Uc9TtbDSuVHFrMnaKiz8u6zqBDVTyG7EAJsExJmT5BNDbXLHbjk331t3"
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
