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
    "4Grp1BDfN1YLP6kTVjAGza6psrLoKGL2ujmviy7ptsSG4ZF5H8uDLpd4ngLbLzx7Kso3TMTvd53B5FKMys3cPrFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "smXAvJ2u6ANJVjGgK4Y6jNp1s1FDkRKfN4dCF2exLvYABEj767YwdhouG8JNFgTR3mDUAN7J5LmC1doiphHvDdB",
  "key1": "2v6stRHVYDQ77Y6eCdzHCzxRDJxaCzSBvUL8BjPXv6ev7tiQv56vzzrjPdntUXF5wi4482npVeGyt8W2r4jNUCFm",
  "key2": "9Ffwx7fJfhyYkom29icpgd42PxbAwyv3586qsLpu5mNKHqCj3ah7JkX9hogDogcBiV6TEr1WDGLmgoaKSKvgw6N",
  "key3": "ugPioCNGXa3JRhFNuf9f8zJbqXm7PdWDeA42SQCUtSiznNCDk5KV8efSk7QbXaa7cYkQDKYLsNWqzP58DNPr7wU",
  "key4": "DDnKPPhR4tWuQYfXgwwQxW9h7vEDPBPerGtFsc6vztSCCYSoJSzFoguCGzAoyC8zreubcR79M9Z63RopUSLT68D",
  "key5": "4F8Pe4mGbqjn78CFvrGMn9gUDpLvDhs2jaYuVhgGd9NPGAMYVQzoHy1m7TWd7T99L5uSTvKStfCgYF973FQS27to",
  "key6": "m9ad9Szb5bNrQ7SGExMDVHjjEvDTCxkft4rZDfjRm88frEPAmm23GP8x8MwovEtMEQZqjM8cMpv4UfRgA5QTAHM",
  "key7": "5G9GQMepsnd2cX8tx7kiBq42VTmpNuz3GkgepRgyq8dD8dTQzKwFRhMMohbueEQi6rvFWPAaT8HGtroo96o9gg6M",
  "key8": "4n65NsDB7qRXqREUX6UttJP7n8HLtcPKbNdFYqLP4yP1WPXGa2xN5kcYNpCvGS6UH5SDf8uvVC4kxyaWhXVzxY2W",
  "key9": "5twpbpf4WJLAep3BknubRYfGa6VbZvidkjyLMFYA47Gw3dXQUdUProiyXwBvbJdhwuKPLVXr4tbTTcuPoJBvadQ6",
  "key10": "2w55WTDhPoPVVYCPFoZEaNFJVXEGx7B72tfV4cvNbq3JC3jPK8WEzPDvxJyC2zEA1NoUrtqBDFiYk1DZaJBDMLJM",
  "key11": "3bxpKvtjMrGwAw8gxSTVKcxJGgwrXdjQLS85yXqwMw4aY7Wjm9RXBMp1Hksg9Vc41ZEw7r6jqKRbXYkSLSMoTGGU",
  "key12": "2xtBrWKUTvddabBKznjrAwWpNrSSRU336aKBq1kUGPUoNjVHjGib5UeFTBW3uDV4C686L26dNU3MV25Cp3YEEzPc",
  "key13": "2bGqiCuXb6v8NrrRBqDJo7wjAisiBtvHKxADE6p4T36VzQXXrmY7PQaKgjwMAocKxACABo3eAEDArKWYshxZ4QaV",
  "key14": "43QvvLpUBjGirCD3fGQAhut7kUFdanF3KjToDCZGB5uoHTz9QZfmB3K8RFtgQn3o8QuGDSRYDecyWwsYokSBHsBN",
  "key15": "3e5A3ZaMopqMsg6uAe7gCbrh6kmzUzKyPgiQvAvhko713GRJs3j4Yy4ozneC7Q1rzBNNHitnYEn1brSJyvt3iWEG",
  "key16": "2KY2wyKoVyWbujb6pAC9vdb3Aj2QYYm5A2sCHJjEBT3dUd2i8MU6zATWc13MjSx5pvSfA3VG21yz3fpumfCtkLZz",
  "key17": "3yRCx8hDUFL3igXJrxMm93SrCkqEXRXXEdMskSbPyhL2YGdbeaJ9Dc1qXTghQvqhefjZ6HbgmCEgfQBzS37VEFm5",
  "key18": "2zV4qdz4ckNFgsv3Khpm5Yk5Xe6xwzKGHvEuG5ySKy7AZNfiW4tyDkX436gi5u5vsokAnWVFSeszd6PohqjSNASJ",
  "key19": "jb2gSJggsJ4mTXhsHwcA4CaSLg6yYoRJL9GxepuK4ByUdEHGRSKnPt4bS4Cq4ebLgyQh1u7i63MGrNWokE42R1p",
  "key20": "2uySNd2oJdjmAZnGViS8cC9BkNdcuLdvXcGUwZawNr9YzvnL7zz1xHrqJkXZ15CPN2ueQsGqwaFqzNwcVG7aktcy",
  "key21": "5ccX6PUUuZPxFPMkGVoGu4ReFY8S2kRZa1bxvy3vjiQYmeAUfmJJvPJCED454oPP3Gza1KbCzknpwHFiA5aCvuXy",
  "key22": "4PgcDpqVY5nMrPysDm2kRjcyszP4zD7G9oHgz9B9GG6jgmdYRkYMVXG4ALvA6A6dPceS2C4PZC6JqJV4c9T4c8h2",
  "key23": "3eGB7ZmxWiJZFn5Y1Hup6QWSAWotzc4joYeaJHz7QReYsGGnNn6ZbsKUCf1faSEA4bEAJC8wuUDiEvW1i4eRK4m7",
  "key24": "2hpsm5CLwTA53Ht9aNWnncTbmSF1EDkY9iPZ9Wo9xmHqHCJPRSW7P4HTq1iLJdqQy8Ndmca8PL1K24w1fytQ19jb",
  "key25": "4oo8DyaqjscnA1QbGCw3xcJhNDXzfQSuhbKB1wCqetNHSyrPNXuX8FLnSYHXqaXzg166jbJYP7HJoy1ZvzNVWgjB",
  "key26": "2QotmBKobLJ9R5sZPZK6fbz8AJA58Pd3vGXFZAjVb195XfVzvkxzZ6PP8Dyk6LnnRqG8ponWKequw1iEHs2ULY7j",
  "key27": "3BFqm6En6JLCDtkJ5zKbGsA6h9je8icQKWS9XAyfUe2152Gs4wtPiGDSHnWbYAKyR9DVDSsp3KSssbfcG34VZPwV",
  "key28": "5wqFLpAVte8MZGUGmKTZHitccndLyNhj662oWEGAN68AzSJQqeatbG8Sq3DCWbhXidydEe7ndui4Mcx76h2TvBrQ",
  "key29": "ohYApGn49AhL8xuUdJHwgKUiUbjFDmjikAeqrDwFhyLEo6RW3M9MC1cFH9RPA3rfwh9stKZds5kohEp1irTc6cv",
  "key30": "SYti49gPScraE4gR7EuDAAZb6L2u1rwzVYMYGeK57LjHFQC8geHFcMU7YEABpkvDhUAEXfD8J91MnFhaJ1mWERD",
  "key31": "2XsrHLob4Sej5vVWCHwPBKuSRzXNxRwUqsVSH6MpvG4mGHUxyjJi5kY4MdkUzfgEhgK11k5hax6LU5T4Q4zuF8iG",
  "key32": "4Kzpe9k7Z9wwo8Hm4eT3CMqi6rQkZqcEjSM3vwnMoJRE7cf7tGxm2sycccBwDP66ay3JihBK4P2sXxhbBcFrkSnN",
  "key33": "4gE1aohWotvizhAF5Qjaz1Qz8MXvxMRWjgwccMjjcjyGhQ2Ur8gkGPyATxr6iuqPB7rRZmfm7fgTcLoKuCFeavMZ",
  "key34": "3S8qe4mSKFczGrSNhjou5W4L8R2rAkywqiMZV3uFPxpcGzaJe8Y2XfizE8qbLTvwnfALrP3TiR9wq66ddCa8Lr4U",
  "key35": "2uDFXs7PTg6jdvT3XpuLzWgtm7GceFxS7ZiodgNPvJpPGSotroP3AU8hWmKpCTEktjLZtFQv4uGnUhrxXYL9WakE",
  "key36": "Y77VXF2bRGwu67tZjCTMrCydMF3cUHUkD3gpaXcraeRxcaAoBt5uupham2Bwd9LuKyiQ2PxraL8nkczoi9QTPur",
  "key37": "4Vvjri77PDhfqu2rZ3qy7csh62TaoV4TFi9ri4YcTqHd6KaNd9Pjzqqy67VyeKiyPknLz35HeahB8sKGEvVqUB9B",
  "key38": "yfhSZ7fQF24ARnVaLcwGNqfA5mtNDKisYtSfRdyDF4w12yFg2CyVXJGo6ZrkZEruANBYdjvm2XTTSWfx1GiJq69",
  "key39": "41GXFCoJu1GNVANS1nSa3AuNksDbkrfFwRg6abNk8Yq8hFKDtTQd4LhQazmGBRoiAFi7d21WLbN2zEdZBtf9GjnC",
  "key40": "5q1GozJY6S5eWse2qxgV1QLYijwnsbzri9DocVvAxDUGahd7KPMgQ2pYDAZP6FEPQiQePwQavNCCWJCo9JmG6GcB",
  "key41": "5Gd6rT3eYiXZn5KuDDhmeJ9vm67yNX6MAkEy9A6JDr9zXZmRyneVnFRhAu9q4vx2zcnmHq5TcKi3Nz91aRm1dmvT",
  "key42": "4itD8WcJZMPwk2PaEMuEtubCgpobWJri4bGJW1HxWEHWnGFGCueJzuZmE5tjEipKhMnk8s2ytZzYAxLmLgnVfgUe",
  "key43": "Q4Lnrctbe31X1T7oPHSDESHLNUp8yk5vJqX4YFfx2tGicjQeZGz1XzgBx9sRry7LBDh92D8o35qsp8yYbyWmfWm",
  "key44": "2SHSWxxKTxBhBYp2CgeTdkkQbPBdG5M2RngHBmGn736EWfZGfLCebh18v2emqNphHmmb6Z8MUru33vn6jXhm7Cqx",
  "key45": "3jEBffeZFYpotQ1Y26Vbr68PGJX8Rkw318BbNgkr68kev3rZi3Ce2D4T7mJFCFoPrTiGHrz6XkNnH3zUY5o7RT2D",
  "key46": "5Ljkc5UiG3hQuNkExsUZLUwt9vyHYNS2gfzgpwHXMRK5SFmiBG1KmNwU21hPWKQ5bSDPYg4X3UoDbygxxH6AhUZC",
  "key47": "dtW3FMRZ2BnWrRzifebzuBhvtx2mNRum3gGwqt8pH6AY7iYjMVB1wmoifbrwwwk51XgQHocYrUFLghsEZ16EUrf",
  "key48": "2YZLP4aCgDykLCFq3GqH5rEipJ9c9ZhxDUTe6bnweQ74wCvj5BQVEHXJvZ8Mf2k81ra9SXkV9oBrPRA5YrVjWPCj"
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
