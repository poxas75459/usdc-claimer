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
    "62x7FC9SBb9XDHaSCDH6RqUf3UPc5PpGoyPXMfWPZegmx5rhSC1TXejWbdAaUjq12Mh6DV7tx9zgdHmdF7vQGEq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cq9MD4dtSb2BDYHp9nEcS4j8VUK2RDShygmmH4vgXmTVoj6JYPTLv8Uxoh54gcRw3TaSWdD4V2F5T14sYhTRd2",
  "key1": "493CJ7nuCgAoJAGio6CjvknQ2KptY96FV9Xgc44GA1rWu1bMEYFseG7FpgfQBXhTnTNhQLPJRTnso124ZzKGFHzY",
  "key2": "HtJcpfGaj99wUjQ6Ey1Jvch8eEMvkeUSREbWQhSkLySG6Yb9b3P84nm4ah2EF2m5813CET87xvAP13rZ1qEUzfC",
  "key3": "5iN9z7qDnGWp8WL9SA2HAdv1Ndg9QWAZNG8HPishr4s19hi4zUv8jLtJGYN6g2pfSYiQPTN8KgUHDALEwEEsEq8Z",
  "key4": "5qMkKrR48M7f9Dgr2hbTiYgeHfdPs21RVUgZtAZj5HeyacuWVrMT5isHpLYXQD6QizAxjh4FAuewS3YLnqk3qGT8",
  "key5": "5TdypCAFLft3fC3q6Vxogxxr8GJJqNd4p1jBfBPbkhTaVpDRnD8HY3Z43hQ8DZihuhhRCkSekYtAAawXi8mqN1Sr",
  "key6": "3wRjfAEJKczo4UNF8hEqSodFgDYJH38iPWbQ6Wkym5mBTPjzhCohrUjnqi8tjZBUWUrfiF8GB8mPXVeSWm9fJfNZ",
  "key7": "4j3yJfc4UPKu5GwjjWYbXWb7DgzAgcLbNTYxyFmUfkJzbWreEYXbV7TBkHyqGpk75YRRFK5AQHyfFamYh81dj9ob",
  "key8": "2w7oxrLeLEBWxDUz22RHGhF9yiJnGxXq2HSncy1WKyPPUpWRu4Yk5zPLqZ83NsVsyBDP8kAY1KsRFeVc8jjcqtWL",
  "key9": "5fqg5CFXamhwbMDQ26BuHeiuqJwwN7CMK3HSq9XY8eT4pnGvkFNPbZVyh9uyPXXcW7ozHe76V45xtiJVmzGm5S2Q",
  "key10": "4tu1NpFr5qzUVP3jATuFyV3gBVybXeoJtywxNNpfb2V6SdnAWMZQQ3xzGkjVpj2R4CnE9QR3H8gQ1HyNHP7n7zHX",
  "key11": "aJwAovi2NKx1zckvaWWEAM7sK9CKNAsvk446ix7rAati9W9v9x5dp72wdimwDPHayqqCetwftiaU4ZVieTC7C8K",
  "key12": "569WkykgpdU6NxdAV2E73un3irBayybqErCHaLaWj3wuUuMMEckHWmwbJNBtqGzhstS4938j2XJomu9Ji4vemVaj",
  "key13": "3LNrDcm8Tw3KxJwhwF6eyvfy7PqxXqGUeoNrxdHKKfdHCnuWb9wY8FNjMwZY6e2oyfV166Tiew77Ev9AgHkedAbN",
  "key14": "q8b5KbnCoi3Y2t6M4a5Rmevp2XB1nKarPGKZAogwq2Czq2z6aY5MV3piEumffLy2kXPeWrpJH7t5cTyH5nNfnAq",
  "key15": "2rqy7EXF6PAnryCAU7vy1Gn139VXhPUVviTe14Wg9rTqb8XSK9u1F32ydj6TBnqssiuqsozWCmqZNt2GAAHL5BFT",
  "key16": "3qhkYvwm1cnEXqdPvFtz3hNVoUD7xK3GiwCJRQBznn6eL4BPhE3DTV824HUdfcdhU18DemyqLvVrdmUGZXsT72GC",
  "key17": "2Epv9Praz8jgucxVRVnem5NNkfqpBm6KsiDSMUJCnhaopqupshcr2uiNrCZscEZNkQPouVEYv9brRgdaKYJRUaPo",
  "key18": "47gVYRjAzskk4c1FT1Sf8nB5Cwp5tdYfz2kaT4QmYkPx7X7dKbDJkBRTXVoMHGvTiZN35dRLBfrRKpUJ77nBiUeG",
  "key19": "3FK9vajoK1tbg1dwZcSAs5zqCvHZc5HXKBvCU2dxfc5czHsrp1WYieir9n1XmcLaEzRGqpwQTkEZCf6gXPbmJaBL",
  "key20": "4RK4qQRJcCB8qBc23DND7XJCDntzb2gsPSKY1Yr3kP4vTptkXBjoavREnV5NjhAJPdHyjsyRnWLu3dJD1W7QeS9a",
  "key21": "4h9PSi9hiM6Xqf8EXffupJ8dq9vSAhjQTosZh5tyDpw8UTZg8UvxhZ8ZKA3iQBYEPXFxfgrTsgN6BiWG58rvXgyr",
  "key22": "W8LMnenbRgpREd41dHDmFGNux39ZKADb3wyjmwNAb92DnoTjKj7FzYcqrbKVUjHoMT4yoTjqiNZLwS4aLcVeRdt",
  "key23": "25WWvDdLdFzu28Nq4ogeF4yPyM1aEpr8TXjiuD8YJQJ8oMEuGvpkFkx2FUWMAsiJLz13L3xeTNmf5psyiFFv8B5e",
  "key24": "2WAXTVAMG2mmer17TDfPDmhejxAsHdQfibdvotMjUznWXNYPtZtbWeux5v1xB9wnPLjqEHLt64Mm8gBxkLazLvQi",
  "key25": "2PbL3pHTCXiVxjKvbsb8rSV3K34R5k743n3K85eQuxBfJGDqWopez6TbXpwjsjptKf7yM8NHdSViaaxEJ3apyHvK",
  "key26": "4KAatagBA67cS6sANPuF4xawBGgMGcrJXSv1HiDVzwFFSR4qZJUUrrmEL4QViztsB4c8oPnntFVDrwPGRnpkV8bk",
  "key27": "5iFGwPopFDzKYN75reiDHrstMnnAnXK5uiaHeUTvpxtt3FWkXt4ZSDCC18ws41USNwvZprDUK2HA9m4gcXe3m2zq",
  "key28": "3PpC1eyDqygcmV5tX4Xg814xztNyFu6QzZPuSP9NoyXkcD7bdVxi3h3Nh5hDGJzPtpYN9EUKpes6QCTWaL5ud2a7",
  "key29": "2P44seC3abAD4Qc14iLGgZTdaX4YgsdMaxEmgU15YXhaYk4J5wsJm6gFvV4A8TAVccgKjH67NMJm5NhSwv6K6moS",
  "key30": "fWR9RUgH82o36g66976DsddjBbkrWXgjvj3CWuQ4o5WHr3Wd4dbGJ5b4GEspnnrTpbtAgGFddhp4go4edM8QiZU",
  "key31": "5Bhq6erUmweMBfox93qHEkNWboJkyVB2jm9iNfZdk29wkbYnU2m8ZkuekxQhYYsDjEbxVWZ7ZzEstpkYP2CmxmjB",
  "key32": "64pPLRCkvNgMvvRbcDBidK3ELPkyWL7KmvA6d5HB9ytk5tb5t6YY4xYXt2b3PkZCSWYtdDDBPTCUnXHqkBipwrJ5",
  "key33": "4hvb9mKCQJUGuTg8iJVSUAfknp26XQ2ccvtrhhKH7sJoFoQwAiW7Xk15UrB3PZNHDwF7W99TX9i1WvjFHoGBWe26",
  "key34": "3E5QQL7dwR1HhrrAnhUrkpvQFwET5dc1xWEdtacniosSPFCnbRoQmqVHWreGAkrJa5tCJtQ74Pf2ehv1py6dcvY3",
  "key35": "Nt1QWue5HZe6sNgSQmM7VwwXkZEm44i4KxaXE56aW8e5HKBj5Jba3CeC1fy4Mz6uk5C62rVPqnrMu2ZvZd9EVGL",
  "key36": "665Dhgo6vg7cHrzYDRFVPEkEc9q2vpQcBpngAEDpBbqUAHNx7EpmW23MFahKRhz78NqozK3pGzDN1w5JLJBcriku",
  "key37": "4QJc9EKMQbixw9SctZ5Eu3E8FpnoYVdL4oXAbq5P5VMDDT8ivjUhCZYvUvXAxsEsPvZCQ5nGVefUP47d3W5UjVnS",
  "key38": "4hRXuK3FAGVWwnUPAamasSntzLGr4RcDTgCac8mVCfKZTg1hBfgEeL4wRCHZS9Kgi7EzpvL6v9F6oq8FTwy5tpgi",
  "key39": "3M5j7wpm8jcL36diHCSSuDeHqKJXfDmYsx52aGjF5pD9msVdXqYwoEHBfvfcxwfnkqfo2htbwJPeRqudz4tsFL8G",
  "key40": "66faC1RNPfR1XRrWFoUzr8JPnSizEkDVnmVe9c41MqUAr63jRjKZe3UfCEKURgQm1qnJFfNoKiL6p1x1dVadqX5"
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
