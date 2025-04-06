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
    "3KXecLz6XjqQmjsSoT4hhXDKMm5FXov8oXKP2gJsky3SEJuP7P2JfDgWkcE1b7yeQ4hmBZV8RJwuMwXZ1so3GUmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2493LJQEMjCpScd5abT8BhtiGtVTQBMg2nRyaFi4sntnA37q7L69hsP1uNw4kZ39KeKQEPhof2BQdh1UvGaGa3iV",
  "key1": "JoeT3xa2dmxCUbLBLacXG5dUAPm5QFQmAo1pBmhBUzeUNbs8Rg9XGVoSLYvsp2brimPaQqtzb5CopfzLWGv269H",
  "key2": "36exgXHV1SADZxpQSfQxNDTudW2GSv1bgBWY3eVuqSrfQQyTytgUxiTBDYCNmDMpccgZEVWoCGkxvmGegNPvv8Vj",
  "key3": "4kYQQPTmWD3ycjYedoHfsxakBXakqzEFJxTVE91qQEQhUVKLhdWsyFua744vK1ReLdJPzRc7vZaknpQVyBvumBiK",
  "key4": "3uAZu7B5nXyC82TKBgHHUvHFHVDe5DYvfCKR4sC2x82PH2NTSfkFUA332wEqPhLntu5KNzkJXKFyeS3FNBoPbMiW",
  "key5": "5tBbUiuujZ7aSEGDktYCqh6juF47upA3vo522HwMFskRHs1bg2fhwBjQpv8BXwFCYsVvGuKtUYhAAWtMEAwV8Ea8",
  "key6": "45VSXiZv1dFx7winwTaUoLjGKcmgnVUuUeDhFESEg4ZJ6QvSVw1XyUA3vwgVGnsefMzFGACxCiQmsPapovQaXwDe",
  "key7": "2626524ojoMLtQnvYVQWQoGNYR4FxLfhbxKCXpwpTnwsH2wEfcmxgPUcAjBJBJoBaXDfdRQ7Up6kWBSCCzVoJ8qT",
  "key8": "S8oRyZqHM8h1Gr1gwxTrnDCVVbznkQfYFytXHFQRcRH8i3tuaek61rXDtxWT2oMN5Q9UkVrJGoZ2gf9LyYyRhs1",
  "key9": "41WyrNuj7pkefoexYdr6AP5LAQkToqHrXnnzPoCR4HKBTWZButZsRKst8BpAQT81T5BP3k74eQGiLQgeJHtuKMB9",
  "key10": "2Mdu7L21RYVZ3F8JTBpHiQc1ZHysFPYNPT2stdxTrSC3VmcSa8HKHhvaXpvVHzjUtFX56qFcycuNKFrcBFqiyAUL",
  "key11": "y2tXk5TUssdnBcW1NRMPV8qnsSWuSFEJggtPTRkizWr9DntWfS7kak4xi5nCM1rgq33LDYtbu63ivYEqNjDf3ie",
  "key12": "4cBhJtmsS12pf7GJoW4YfB5Bwfc9Eiu6T78tg4DTpfAnxUJW1sCWd6pHsLFRUFbxVYJuFycxWPaUCGVv8FQX59KX",
  "key13": "4A8YCqJpC7mTuReMfuCjy6dHFc8dXsFWbWLBnLi616vi8whuRH1qiFAHwARrMFx33TmCCV9nhQ4jB5vgJxMpMPaL",
  "key14": "22guDi7GYZXNDyowVXSK8JenJaCPtePcfRJKXpWw4s3bkRvGnJC8ZjxrHFmyMhepmmWSTwkuPYwdwfSdyaf41KrL",
  "key15": "f8KFiYPWeaKTQiRekPiKjyxaaF6jsMJgM776Z6foo3CYWNsjE6Jcjr3X2oE7rorEdazU4fGHBSMYQsMhr2q6Dmd",
  "key16": "FUhK4wqrRXNFuSmbnRnjW4GMW1i7c4R623CTZkqf191VCQKXhX6164SyZyX97RZ4GpVQJan7kCkDRzCLS13CDD1",
  "key17": "5AK1fM2zv3eypMFwuZEvmZkWKj6LycBJzq5feLYZHGnU1H3vXPVhTi8YyZCRtxhcEqmCSUueSCn1FtGx1QiwDcMG",
  "key18": "4swDJ3HeP46yRFsCPGTMmkDpsc1yquJUHGY9vBCGGntpN7KMwiULcV75tUFSGEnFZpjTGSGUbP3WGbbnSghSY4bK",
  "key19": "2Ls8ATDADGe1Ead1aSWYB7M2j5VoPZdQMuGF8M43uxzNbNRWez8aLJYfb7HfcDhwU4UiAF9MTNwrgUWifRtmyvAR",
  "key20": "bxWwBACab9KyPeh9m7U9JqMAWg5D7t5esX1zEeUSuCmieiG6kKvBrXdSXvZUNaA9TCLbT56CSd3TxnznQG3tFPh",
  "key21": "2Qjudx4s6YMGvsJhfqygrJTVoKS29Yx98F9aydN5BQ3pVkwbYrMqhZ92gtCZ5yfy5KnMZPZmPZP9paHWhFu2kg3j",
  "key22": "5q7Rg4ZcVdPnM6bTMonqHav4V7vyJD3gyusDtyh2fNRPx1YQAY9dNybMQAyYtUgrrNvzfnKPbYdn8P4b8NEAUFFr",
  "key23": "FV4Devr7iL3TcNSfnCVmaNPJaAqkZcuy7sLWxkpGoUWErjfPA8tWXGyJ99pLFiGkgvEfroxksgcZXoGzoRM51Hd",
  "key24": "muEUhppRxxLhiR6mzA7EQFMc7T3B6Cv4bxTAReoVy3Lgvzxwei1qcmCwyRS9s1iL2ucGNivA8F5RzBgMemHEofk",
  "key25": "2TN2nS3YLb5ZgenaxWHqkX89CpVQf9RKtVPiagJZbaNx38TkiUnghHbC4A8Mnji6NdAbBLebAVZCfhBop5NjXoYb",
  "key26": "2yq5zWzEn21MmERtJLY9dFCf28dW1C4Gc3bLGVH1guVUHwz3X2YeBLJuV8oNLAeRAR5NnfmHfNooyKyEujj9asxa",
  "key27": "5yCmqvGMecQhmvdEpW4vqHXJzVyDshBUJE5HySFP3HgnKmJ7WNEzvNhtq6xyQg1CSj8HEAhHRfJtkyDx7wQbCeN6",
  "key28": "4ShqcfjWTJrHyJs7d8GJHjZKzWVvGkzNJnkVH6Tyq2ghFEP9sbpxcKACqYRTsGs5CKZK6cbBj56AdHAkF7Gv48nA",
  "key29": "4ybN3NQPtctm5JdAkgtUP4Yn3ja8Sv9QDbAfBUDgW2Jvy75MuoU9cQbMmAF3eEznHVJZZXEX3A4YGg7abG37xYVQ",
  "key30": "5yonkUFFNbZria3CM8uhMagMnba5xXuytSxuzgvbtucZ8dhv1itiky9hBXHeoFQ4ZTFZAodUqPFnWxDw1hsCzoF4",
  "key31": "2KbXoLM6UNr6TweBo98mjXp2ZEHGbpqVLdgER5e5VvqN4ZWqUpQS7J9byabHYY1tRdVS5N8AZSjkBNNrQrE3vDgH",
  "key32": "5uuVqoJmoxwABvAseyYCjQpnf6FCug3Nxb6LixPxyofeitbb5r9fTPZ2C25xyxbVsfFzDszbSWBXX524RYGszTmi",
  "key33": "syu8t1hpnpTVf5KfCumgGQrDVHusLpy1LGKazVjWCGVo9tMkENwiMNPMTbiuBJJeWTicDXppreYmMtA14CQdwXN",
  "key34": "2HUuSdEQXbB2krWc2fr5yq9Ygv2Md7ts4k4CA1TusWyWV1DfWNRzmVGnuzBwX5mZEBnbRaQA7LFBdMggm4EN2HZV",
  "key35": "4fZywsXxxpeDA98iHBu9rwGJveyu3tu7VcS79KXgcFM78kWK6CXeuXVuRPiqoYzBNATiAqGBU8MZEoDekPfsovSi",
  "key36": "4gSswRpzaK1XKhBqmcUipWBxpwYzQnBVTemCeFteCQyNe64ieCoJMZZeHXxdCnyHFV8q6GwQKSnz8vvqPGabJWa4",
  "key37": "5UJS7tMXRfbmUUQgrZ3ecG7mVKf8xT6tif4c9ViWvHZb8CDQqEzGswwTGCpdzswx3vnGx8Y9B7w6pmjkpCa4sjXT",
  "key38": "5zEaAZofu4DtMGbkWbJVNmvc6LZL3txxpL38tCB2VvX5EJaRJJZYVgpuGj75wKjyeXt85h6tiPqgLXfh7D2Ph3vp",
  "key39": "3yn8CLwbuvuFndwW2x8zKU9u8JArHgWfv1kv5XuCKtkTyEozGLwmRrzQQ3iRD5uJh4haRcvfADz2SKq1tLBQpT4Q",
  "key40": "3HPEa7iuWp2FT7SJq8VYVvD8Fc2Ud4c259V94XFkETXTeKcJzhwaFjCXEKsKnnmLAFXHtCsKwhfqtpYqBruVxWoF",
  "key41": "5L3QDFja5n91uK3UGofJBzziN2cZJZ77pSiQPU3yoVSPiVVQ6AAPtQBvdRnYJwU8hnYaitYdkT3cJFzK5Z9KBjcQ",
  "key42": "3ULeAcfyCJ7erBtKDRxJs6UhKUKpEL4Sq56KHYpAWGKbqkXN7jiVH7qDbZ2dq6GZ56W5CR1dshJjhLdzqDgz68Uu"
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
