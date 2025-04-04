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
    "5A7BpRt8VvcoMMia2a1XyAcAZZW2a8EsUG8vuSmX6s8nHWKtgkKdyb8QtmptF37tRpqenUJwC72KCFiRZ4QCbz5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qpva7FzZXCBKoBEkZDZmREjhzN6PdJk27bRShTpQrgBMPmdjmKUbRFez9yfPX3Q3Hgs6cZ32YMjn9DcnacPQ6Xd",
  "key1": "2C1hsW1mZL3S9Z9NrXeQTcxqWWyYEZxBfWFu9iLT7ikQ2cmMV8NqHP2dTzoMrPjn8C3gh9JEazWEgxU7vAAuDAYc",
  "key2": "5rc6gvY4k6JanRfhH7jJM5cgxfqUVV6X295phEUDuRmuSc1Kej4zUmTkU9L9JdzT4U3XiaLkn8JGzWYiwTRywVKa",
  "key3": "5hvdXJhUmCuFsSRZaYPmAEQfgtws7ye4TUicJumqRHHb3JaaT1UxCmmPzrqaRQox4PfHMCAjHpqAkQdvkjuYtUoj",
  "key4": "58wosYE1j7HGJiDH9pNdM7iuDN2mHVu6yXgRtPsXF6mCxhnS65f944XRQa6m74ffnRUY3syFEckQCg3EoC6Eg5Ja",
  "key5": "4bqmTVSE7nukTXC59QKyxXRjeR7xj9m8rng2XLC8PxNZkeigmvRmTg2ZmY8rRteaQ46jnbFuxeff77WTLnP3DV6T",
  "key6": "5RpexXm9dNRRyzV7sim7RYE7B8qDwXG3JDy5jYnqtz4rPewrGV5N4h4AdsiYVwZNKyNgPBx7BFRCSj1tWsFv94ZL",
  "key7": "zQ9fHM2edggoqsLP7szfZp8oYQqw4dNqmC6d9ZJh5TLZbyNLZoDA3AjGg3zytibupUdTEsCQy951nH3p53zprSP",
  "key8": "4cqcLo8WmdF7qe2Etob9zPuRZvnSM3vU2mUASQauik4h1XZNfqSj6eoEWHDFK26Xt1556tCgvvsNGzEeyGEJYYts",
  "key9": "3PthqEKiBRDABNaqBJeXTXS2UybRXePnkc5QQLjCcJMGxGn5LRMkFWaLARBeihMS9m8LrSQvHPJvGP4A5g7kwtU3",
  "key10": "3PGJtBVvBRBsBzYeQWAVZhF27HrWwitXobbmhgMVeyGyBQZEQULacHAnNBGvR2LLypgGXyKn2VQ4DCKDuvYVaA6h",
  "key11": "53AUkJJ1rTtWgGwhrms1SxntXCXyZqpSSgSJfGJmKX7oJbzsckFdstfbrD5EK26nMkaksfFJ2Xiyxr4KVjTKoEo2",
  "key12": "2NGeSRgQ8QcvVRLNz9LDWvGKFqTN1qhPP4HcYjGRejdgLEkCGkPFQbxRqmq9XZscGbLfEtZG1cZuj8yQBuF9Hq2f",
  "key13": "4JtLJK4xUgLpwfcCk8R8Q3gp5jNbteEjZBig5LTTvN4mW5GuoC5wWBe1w5UwdbMwu3Tgb72b9reAQYdu4PibxZd",
  "key14": "2jfvkZeuvfx5GAS8Hc9ywEqYfxV7DXq7EsfL8Sy7FZaChhqYtZJdZuh9TotUUMwyrxTsu3dfUsxtKc8bsKvUR8t9",
  "key15": "26Nxo4YY1reybstMai65zqXi9gmpyAnwEDUzJB6knfj8aaWAjWsoDDjNz4YeHSinaUTHGJ5GaEAN6KKPZeuX5Hng",
  "key16": "6q7vJUyzNDGRZAcVHds6veuBRArj43AhoSapbyDqdhLbYR1t7efs8cBfGj1gTEV4SfNxUiGB4dibNJ2mroqRfij",
  "key17": "RZ5g1HCbMeZFniXaAcA8gKVNHVCLtNL7UFxEfMjPnWdjVrhxCDeA6kKF7nEEuFt7BDuKBrEgJ6TaggCtBXoDxx3",
  "key18": "5WtnwULf1oFKpzqgGHQDY6Yb5PEQP3iEsAFhq3znF4MdyUL9NrNVwRzTL2EYbFhSZQgeFKB6bhqpLY12kVFcuhPe",
  "key19": "5GqpTBj2FA9DFQTtBPxLJALvQH5JUVkJ9VzwV3ShmJGkhDDZQ7fhFy2THEBQSWVh9R9VwAHSqqPF8WHaNWGpyX9T",
  "key20": "5N4RVx8iERRsMfxkw9GH4p7bZEBXmH45mxwrpX6QYAKsGwG9D5bVU2oJjeCyEB8KJfv65VuKKUj2hY8frcL5mzaX",
  "key21": "3i8yLRwvqRxDzVky7Q6ccTHzanPERetc8YbLTqVfyLK3jWjEyPbVyCELAc7sjNKGT8ESyREqvEJ5UPGY2gyZPec7",
  "key22": "5A6sadLjQiDQHGr4TUNGRgvWRV83T3oG5gJg3ZmPQT5qWqzDFuaq9GZoTc6wTofkbKt3v5xgVsgSnqHdHn3pR5jV",
  "key23": "4HTb2uphumCcQv9TD7xURmQFim1vwZgmWmxrKXfvp3GkAtyXzXgo1N467i6T76KvCGH1NpQ4Hw2nXvENXsWWYov8",
  "key24": "5gidHqAfnqJfDm4EmtA2bGyG5xuF2sWuQdMxox2PNvEWYoFWCu4yTGb6rBcZpCstGefrR5UC1ctnxxgXXZJYhrVM",
  "key25": "5jchiD169AhgafNgK5piaqHLwCUXtdfGcqGc5nWbqztxALpp8w15SDKrVR9ckUo2E6hBxTogyJBeAEf5Cgwa73Mw",
  "key26": "48frtNv1YDiqSRKqC3QZWHR1Kikkv57xrzmGNy156optBZe9yV8gMu6UtNEgbfniPPWVpLb55E5AvbYkvXGYmn3o",
  "key27": "568Ze7HNz4BbWzxjpi4Kpmq1RABAEs3aqHKbqidbf9rgNL5sV1miRHvbQLw4XoemcQvRh8CTLGvbr3CSCBCFnyvy",
  "key28": "2HYmYErkU8LTYVxjFny6wZyKo5dBh2zdPNcyWwfZE7obakVcuCRxvFNL3eSJhYTwiUgkSdVWRKVvuJpqjeVWhiVz",
  "key29": "3xXGf2M6iXQ4YELAicqmGjqz2tbbSw2to2VajpmvJG3ixTC4k89SxMcShYRDF4pcYTGkaL5DgVRJ9RACML2yvkiH",
  "key30": "5vYZWUZZPhRsbdMv7Qv6f8zqq2ugeqZXLLkgivZCGWip3iWboi9VDgPmUPDV2w6g9qiXcvfd8fv8xrRTuJgamoCZ",
  "key31": "36mbMv4x4HCMUNCys9VUi1PAbAdFGYzzoydX4JKLkS9YavG2toU54z1CMwvMDktjqg9nPDAQxbC1Y4ZnLbn6qge9",
  "key32": "4wttD4meXDYdD64y4W1Dyb55BeKbsMwd13ULeX44TQfpy7B4ep3wwLLbgbZnJwsydF3VC4Q8CssKaw8GJTGa9Mx6"
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
