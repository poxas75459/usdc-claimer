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
    "2F4ZDdrrTKgHZeRp4JDqXVMA7TqZsnzzhv3ZVsUwXUBiQ7CUbN3Z1GpNTp8Uwg2rdFWqCFY138q2qFTi2vgeAi1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCQznohpy8jPtFQDQh7XqakZUuS9zHGRX4wFtGpw3PWbECykVPFw5kjZhgpr3T7WXHrvRV3sd3pGfi1t5WtPy8P",
  "key1": "2oQcszT3s5ofTX5ui9S7g8QHRfKWsWQfUgUNbW3HitSfifxHivAuMTRGCxB1wQkRJMbwNe92MUHCr9HtgbVQoz1G",
  "key2": "5NQW52PNJCUVPNgdRhjUvRk3KZk73TnyKEP6XWajepj5MeWtuc5NioPiEj8FJyA6MhRciuiUvKjRzMBjeZRVKYZR",
  "key3": "5axgynH7CxDg6AVXRZpLeJFu3wskngz1GUTWoVA6cuDZF8FqSVvh8HELhviKSjNTu1y12p4bp8HvSftESfq4so8s",
  "key4": "2Y3G4q8beCA9SjSEe85HPbw1wjWJvGWD2MDPtwddPYwkx79vXUqijQ2MXECFnS896SpW8fXixTQNzS6mNJV4iC45",
  "key5": "5MEcVRBuwP2cf7f9tSHwPz55Nk8ojRgVECarVQYRWAwAHJbCBfwcJRwJPYNbQdXNPMByX24vJgeoaWF9GLqLBgd1",
  "key6": "3KBYutuJhNurK6wxbQqtXSiHE5wDvdxaYcMY3AsxfNNAiphkfxSCcKMoxv3M1asFdNHnwVVxEQQcVSfrxDvTwDtg",
  "key7": "5ay7tiZfVpXiAxCDEyRA9DXdB3VufNh9F4C7ECLtBSwnaT1Mf4agMAbwXE8S1aNUgVh3jn5ctXdVZPyHv7n7vjp2",
  "key8": "3BNS2JA9nVhdon4vSBACd4i88oL4Ltsx1HxXbD2HeU3LMynZCCARbD9VDr3gE6UQoXdfAcn1oMAYcfyK8HfK5Trt",
  "key9": "5LrnUw2iqWZjw7SGAt2X5V7iERvdhqTiXSYEy9JfSWDomcCGfp2nym1mZX1zoetjZr9Ng51ywSn7FyPuxTTniPMz",
  "key10": "33oaHkDESQvfkoZWYZYDXvWM6Abh6VPuFdJdFzzHfzCYtRGxwXu1AxuQ4FqfGGnUnmMrwuSrMVvM5SAUdcEhEUne",
  "key11": "3TymWKPmfki7enzSLdiyA4dy4R4fJEG2UZsaCFSwEWF6zKmAua6Sc8LLx6mZUFizyxkiHeLwbw4o28BWmmHoS8xn",
  "key12": "3nXq7kP9qqrHa35JeMXiRC9yvKvbcn9DE8bGHmFESJup1KnhHbkdRPDe1MBeeKMeJ8d3xojiLveZ7aaJKnj8nNdq",
  "key13": "612E4P6xv9mfiifpCKU6EpDF36UNd6QvQKEZrqPVFtcTs4BcNuXbLw4nMun8oKx3mNM9smd8kR1wYBkoRcY9E57K",
  "key14": "jYZ4q3pBMhKxUTBzsSaAxrbsHH9AKbJyY1RHw13ma19NFEXJCQT5MfRtKtE5k8BKffGUMWLoC1ZVKG64FZkW2en",
  "key15": "62ANCYoQoei28XWSG6XVuxAWEDoAB3iNXNQt6YweS7Jqz4XXzxtJfjEe2RzmX2Z2KoJ4n1ErbAPHrMoexqMcASfT",
  "key16": "2M4Bj7jDA71Dv6TYGRRg4iQWE2Jy41qAxRyzDknhkLaX8FNn48ZzorEzAU5hejrPpnXsV94WrEQ34D7imVXfrJZb",
  "key17": "2KvR3pxpUV1KdK4bENV8KZqsbuP3z9tAhmwCeVoJok2SDdrLzZeRnHCMkjucdrjvYXfAjNFxBtMqBVmdzfJvoTB1",
  "key18": "65tyeQn8fmJqPTdEF5Scyxh7YELfMziHwSxGF9bFWbJoJAB53QQrYPW7LuZnQaNiWwYqMbHDEBHTsXkKQ8MdCBfm",
  "key19": "5j5LdT9FbzY9F7kkDt5nNCs5cyxJo5fvv6wyxLYeXDfYjcwY15wedrDuDMrbSTKbrm1U1HEzUfprvPKMRa965Hgg",
  "key20": "44s7D4ygDPDnLaYuaS6KxcjDS2iAsdAJCDh9vxXDLsA5gkjb6NhmidLzioWqqnE6ZaQqrAQuw53c715zcDihtbVR",
  "key21": "2wcfLX4w1yppUizVihUGKGc3tRCpaV1PLaVukAvRkE9RxHiKonUFTeyG4zPXc67brdyEeVY9NDQXZ4Q7EqHLHA3X",
  "key22": "58pRCBKZeNjjo8uqmQfsehwKJM8dcynVUWR47oJ3WPr57z2HZgajT29iFXvv7tFEiJaQDvbMEz7cr3trrFyBihqw",
  "key23": "5oWjQWEH4CrxXXxMznQEvKtvVhNA3yuiisayXH2T8ocLMDWYkMK17QPeg6RAiDof7oVVfEFd1vj5rWo84edo9BtZ",
  "key24": "6k1vUCViaMD6zxa3goBWcq6xgzTq9bxVbBQAdL9wDcQLJJ4dt5oDKDE7RMjEVdcafGUDJBZmqAscQonAd2HS7qy",
  "key25": "3ip6CsAemR1aPiN6jLce7PahMRSx4mh6xecsGnsQnYsNQkEDj2WWLHcW2B1ogEio2mJ4vbCrjQoB46KrFHSJniQJ",
  "key26": "txWnFqgSRK9n2gcWdsKgdm2zcdgaoqFjCPZX2LZUWG6GTd4DNXPB9RCPTVzBbaQKzuMSexajN9nYVW3EzwLrQGn",
  "key27": "2eiNGRVZcH3SMH7taBdGJbuAfVB7xPNVojSJuWeoJ8dWX34hVkjwuFLNDJA1gXUUC4DzcSj9k6Ftn38Ssf5ufHTe",
  "key28": "32hhtY79nWc6DdBM5h13Uppe1KV32m7wenxjBF8bntkxyeCyeUDKCjNHFzeXpEqVDhfzLeoVr2bGz97ncRmXZ2Su",
  "key29": "2Qa2ExjWmM4jaZ4scaiNyYmvVTyfPiXy6MmVUckcBKLunxXiWqaS8gTUp9RJveSFEggArKSkg3aCMW54s9c5iiNf",
  "key30": "5tQQo2S8byuhexHuecRsRVDr8hjtWtZCprWLgQouWvRNMZdZE43awDAcdcnLoMHRABfdpvX9N1uSJK4dHR7u43PQ"
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
