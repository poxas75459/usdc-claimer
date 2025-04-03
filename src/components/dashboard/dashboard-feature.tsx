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
    "2i4YXKmqkJkDpC7wLxhG8mdayfXW88Z9satoGrDds3xiuYhEpPZ2X8ShjRYHTSK8XVU5CHyvaM2SDo2TcNHQcegN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xHHjy5SGLDNZKghhtB3pFArqXjXuUBxZPKq6w9NTeeh72c9fDgwcvy3fB5ZZomiL5k1vQzq7oSZCEaGnDAtk4o2",
  "key1": "5P23t1L4SwvjKxCWUqwiMZ8Czg89FcbcLfAYP7EgxxWyT4wKfCngyyUcjAnfJGK5zXwSiY2ZYZLudCeWpdETjpqC",
  "key2": "4UBrLga7GjXJc1GZBDKnAQNkHwnsLr2fbeZh9ZwR6oZtQAU8K2uDkiuiSf8TNj82Zk1nGwXMDsAf9dz3keHGD8eK",
  "key3": "3crC2KH8zEQ2HWEytKUurXQ1pXCyjyu8YqrDjVb38n2mFsBKQPvUvc8BRxikthM8vG9FqTWMCvnSRYz7Aa6y9B2P",
  "key4": "597rnJChpCFU3swFE5VeAWMYRDv6xRcd68Y3q83j1X3kyXUBf9agaJBsG1AfcoKqiAAFw3xVrQJd4GoctcWxKJ8g",
  "key5": "4TqpUR6CpyDykwMWiscPWbLSKyHxW8VqqSLPXpEL5UVStTkfoEH1KNSk6ak2wSaSMpdSK7sb8pnVNair9RycXg33",
  "key6": "5KyMvA2RUzx8L95snJtDhvUt8pV1DP583u7sRgteMqRvBFJMNLVxnjH2hXq9sUV3HAYBetgxboq46XLYbjDWZGEg",
  "key7": "39murAh2W1q2F4bN1xy4xqiFHT9oHmTNASSHFwN5wf4abBDdKN2B6WMiUrYvbNaDcmDUCRj4R5NBZKkBm54FXirA",
  "key8": "2KK9jxXX1DWzKTig7fep4EJQXQ7ULLX8dp54KpR1R8sikVH6G2KYJko5YnejdCGybJhWCAnVKT47fhU5yXDSyzf4",
  "key9": "48826qN2CZy6GLSktWdDFT4FsQSJ7hcJrzR3nKtq4eu2K7xus6dCxXVR7gH54xvJkQ8DbbGBzbTWXkSKsQzUhmru",
  "key10": "5GUs2zy9d2GtaZZjroJVxgpUe8VpoqZZEEjACWJAtBQSdrXgbEucacPHKe4jDUMrVuw3VoYanRgfXCMV4Gmg5YmH",
  "key11": "VNs3bXHCU2YE6HzHjqveYx4eDMA9gjkh9iqP5Yu8xkVMAEseSdRWLycZHnpXXELnyBUripBd8uA3SzotPW528MJ",
  "key12": "5vgbKHQvF4TyZUTKPXBFtdkXFAaE9rNAJbmzgHjKEMWEwxu7n6fSX22hDa2gtUuKGMfUHnBRQPrivabFiVW86KmH",
  "key13": "42JaJyGRUnaEHDKXGtL5z3QLk1twcaGMogdfBS9GGX8ddxKTGpS1FbW8TNpjPa3JF9TtPvDDJvBcAZcN1KC8AKEg",
  "key14": "5JSj3ZVa3iqg4hVqzR8EgCwLqdRYJ7KvsN9dNaWPhyYEQzG1wRWCCT25UtgMf7VUgnDesinGD9KTsk5TaSG88EPG",
  "key15": "5gQD79Wa34LbaCX3rkjhbzn3wPJiJus2u61HxidcQdu91vHD1jkr4jfBskF9i6kCtjgEdxTYkjZ8otnvoqyn8Mop",
  "key16": "5RnWnMd89zR8xpjaRRiANt7VA7LfRJx1tqJVMsHicVJ6d38NKsa9MUm5q4JgEJPuEUiW6Xre98A17tH87Kj9Z2rt",
  "key17": "YJ7W7wBPu4A4guqTYcbbJCViZBRFXEn7ecd6GjxpMz1PPo7RkZvtWtgSnfm8nahYb26rJpxsUepyMMX4PAdosVr",
  "key18": "3JmupdoEsHKt4Lh4FZe25G5Z1UBArk8v5iB8FxEs6rPJdkJWMNtDDUhsfKs3EkeQiju3DE2Ppki2DCVoyR4dX4oY",
  "key19": "61KEsoQbwaDtHqSD9Qwez9ihHciaxwNv72kx7QQhHmBmM7B9UwogsVobrZoe5JAYVb6SWo5wunVFTm7eUZyHqgSe",
  "key20": "51G3CpY9pwEz9MHiaxF9SGjt83tks9us9UhY6A21ZNEsUCS1scUaZi9saXGoG8sgZQgKCRtLM6SWAHG2zTh91vgs",
  "key21": "2EhQ3gMmarsY2QQmpPa6uqes1WvzDVknWJVzvJuqHGmopMyvZZBB3kZSdZnJr2Y9KU1WvT7Xu7gwJrgbDV7CyWTn",
  "key22": "5DtLNT6FbWQq9wfqDrNVYpgmQDcvGoTnFGDSqTaDk78g8uGgDADW7BF7jZ6Ha2aEUHbezR5A6ufexZNYgj6pQpng",
  "key23": "3DHBwqNpyFTD2sdhUa7hbY5ihkvpfzjH9ZAKQiU6CsDofBB3W9HjYKxF6WP2QSicq22nysN9mrPe9YFysMiM47UQ",
  "key24": "5m5rM3XkAWfw2rGZJxFbpFHKGfWDuGVG3Kd1URfi4gw3jxiyv2wxm67pFvitFwK3NVe6KCCbs5kyzSfvzYMApwoT",
  "key25": "2KFgk4ZU8ywaqNMuLM8cpwyVxdo6FqdKwb6nzop3zgDoXzKrsis8TSbjvZeGMz1jXHDQhHoeHhHakysUgYmYdngw",
  "key26": "4dZYkpoY2tHxpssipuUiyk3GFkPfbJiE7NmFDXK4TYUCj8at1eBU9kbFErGr7CHW59bPS6PKLVL3hHtz7wRDvLGA",
  "key27": "3VooZs6HGVoYaZMPZSNocSWDF7vBZ8bh7w2urFae5fQLuKtEQoHRoB9Gozu7m2oUppZPSx3iCUaEc7xsGMQTjFGu",
  "key28": "38ZBAfqGFUSKxtYB4SgyvRrvYE6Za81WBEfcpWa4gFee8DPkEKNgncavLCp9dhLScEU73Voxf4GFhaXmQZgrGMuu",
  "key29": "FBQp7WmAjiQNDrpemKZQeXAMaypGXu9NDoET6qojPcFTptPiiKX2anKRS9Ev1APrph9D64rLRpFHiZBMVuxgnsQ",
  "key30": "5fFih3FY3Zd929yb7eE6AvCrdCxVZLUMo2ka4Wb3s39v5HnpW9FcipAXsXBX7e4uwjztEDRkxtREfTsKPSxHUpcL",
  "key31": "51fm5LYRJ477RxFDmkmxH6qAtbqEhnJx6Jgu5n3DME7eBDc34Seai6bp6gWxCqKXWeNHmWPPFcgqsBKed9Spo9ca",
  "key32": "szbmzBmAArfEhP2A8rgzUdEfhgEAQTUDCQ8y9hSaiEt9uS2N3qd8DW8uj7KqYhGJn2m2qSLUWTBeyr1SqiRWSvM",
  "key33": "xFKgSjnqfodoTP8v4uD2Y658LSWjH2BpHfTTr3LBizbxQNHEdXwb3hqXoaguttNW9XZa52Fovuo8K11jEKL1AW9",
  "key34": "4Jmn8qdnRpwS698NRYDUGBJgQLR5bKNh9LzgbyKLXVHCFjKxai9Fv41V3F9Unz4tDfj1ZZYVhRMv4Nt13xzUoAi9",
  "key35": "5LVFQdWb197n4eozMi8sMGnLiGBFwA3WTSHLw7KQcLZVaoRnCC1ZdtrCPVSQam2xVzCsrBe2QQRvJezizuztrkW5",
  "key36": "4Fr6XEp6d67jehgEaYLYSCaEcy9cjupbNPttKYstTf89TGPxqseRb2pwznu7fJXQZAucRCStho1uQzom3rHX6Cj4",
  "key37": "5vWqgmM95fvFRwhNcETRjhXZRNKwbh3xPsNWRAzSW9K4sCcCykjHDrG6fd3zkJm2nwCvEypdbcjayji3ayEz3pP4",
  "key38": "2pjdQRTZbwDJSW61TYKSuJPWEdx98wYPLLBdwSE28jpNuJh7PWzNHMVPQup61EpX1P4F4mtXURoShMgPGtw8i6HB",
  "key39": "2Kk4LA71dN69sFcT2JpDnDsNM6oXRJZUMZcYTRr6cn9XB1RpS7LSR119DAtCMGSE1jp8VnVTVGieDEr68YNLNhU6",
  "key40": "23cREV4wHoHJnqGNKGa97JbVa4jFRHVUynfEYHQ2xj3Em1sCoEmMkY7tJRyvXh2tZcYw3FJcAogpKF3bsBJSqdPC",
  "key41": "2W8XACZHUqrQWWzbnsBjDwakp7phADhUF2697xeMvUe4Vbweyk2SCfLQQRSrKR1htRq5E7o4VoEAFBwSXzXBgoQH",
  "key42": "UdtREm1AtHGLGAy9xTRSLTfc1gThCvTGoPNaDvdjjzjeEQcZENABwpDLrXpa5JkCZTaTgGcpfcMHBc8NJaCmWRS",
  "key43": "2LyZn9igSoij1FWV78SJTP8jmyWPZchuGQoCsP5w3xQk4mxvsygZpDjGAnDZ5aPXyKHPX6EUfJiFKpuSSU7TZzyV",
  "key44": "hkqQJa5nruLmQXUWKKSy542VSi4BNTetNSig28VLdRUWQaA3WNu24W46ZhLHMWdt6tU29B8yh3gWPzzyJX2UTrM",
  "key45": "JXt7asR7beTYBp62AagkHBGDnnFXKYuENe1kM3rXHuLyV49YxoKzivvYCNeHvExCqccRes6a7GdBRPc6ZWkU112",
  "key46": "47vG1hdt24LpDbQanELhuxjHo8NqtZFFf9nbzCgCJqxXLwMaoYMfLgjXCjzGLwzUC1wtzjC4JgCZtHVcBGQG7cpG",
  "key47": "4hM5TjogvPZELEo8tDjJaq2tNv5edEqzK6BcGjCMJTef4Lwg3cUX3gwnn1CZCPxHVaJ7W3PmK5sB3jN1CjLAZaEB",
  "key48": "4TSV4DNDVzekkk1uz3PQnrDDAQovGoxcGQv6U3yGJunGf8ZB4Ji2798JaqKRFeqf816txugVsrDiiL6FFQk8uqmX",
  "key49": "21YXdXSWQTkBCN523vJZdnWT8Es7SqnHSidEzvz9jm9YpuS7fShsMNVS62pZo6KNwUmAsExkStPwb6E4F6uWN3qU"
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
