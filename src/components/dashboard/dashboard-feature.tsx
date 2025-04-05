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
    "5ZH7wWB4y5jtqtHm1fWKYpv7xkrcjhRZGVnVa4QDKmkd1jAWbGmKFYorJSwXqUpY5GbFUP7Qkp1iinj4HZGopE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpgtQcATFs3eTJkVRgxuX9bTvJ385asMWKPRP59dFjq1irWiQqD5gD5mYeSafSm3ToCqZwxo6VDiT6sUnkPq5ri",
  "key1": "4zAgVpNyCh11xFVgbaWJUfcxXEDLWuTFCo18C7qDMBqXBQC3iAuG77esfUfiHVDzpJdujzfe6QCJ9FVK633UWBRa",
  "key2": "4YeCgomr4oNrtLxDYGX2jyyTzBUHKAroQfsk3Q5ii7j8q48TjXjvFTqHKTxScnwPfV4FDEmKzTFC67TgQjDWaRch",
  "key3": "3jofwpiAhiL1tjuJH5AV3kdAiq9Jco5egXChhagNFRJUDXQmbkkjdg3sB4Efasn9VcSrhyXB5Qe7zQbvsi69L8Gx",
  "key4": "eSp78fbHij1939EyyfQURP59TTaWXxEDhUKTwQy6GfyG1unkdQGutrWQyugQotPSNQeL8ACdgsbeVpiRLqJrDBm",
  "key5": "5jx3MwkAQekwt1guAFfWRogh2FXNhC7pVkARm73f1jraBR23Nd6Yn1CgMATBHqrTKhuptz1xJE3xanpQoHiZhheT",
  "key6": "4sw7M5Ptr7cXqTUtp3ga3sR7btREVSeqdwrdRCFJSoGbp1qZw7kDPNLAgpH9kmvBkXBhM5Lqv1N3vZFq6qZX9xZK",
  "key7": "5D9oRGNXL8jcpWHsAWAEucVgZCfcvmyiFaU66KryYJSGvpG9BhpgHXFmJ6rZtJjWwLqG8bjohSzLaWxvbJaUYnUR",
  "key8": "4dLEhrr3gEbBVcFcKetTNTzoE6Yp6rgw6FHALetxDAmZMeQaiBCd5eSN8WL99i9Ui3qh52fpmCXyrQbHnZoqEtoQ",
  "key9": "4QCyNtdAKHhUCAffV3mp97hu5PzZcVd3hy6mirtav6gdVmw76Vg6zewu2FidNEPTwLhefNTezQVCBpgLrnxRqgNW",
  "key10": "2RbZcef7Vo9oc1NdNHZFKuo5SYTKF7RUs2mKywZ9P8SqE4S2RBuKzaPmMBN8YSbWY7K8X2tjWSS2b4qUgXWtFnKa",
  "key11": "3SDH86gqUS5PJaZf6APNSiofVJhA2kb6jKDYkkbxUZgyeTPgZfinC4CovRPJHPWZnZjPNuXj1PBUvJ2R1E7rW2W8",
  "key12": "1JXN5J3zGbZTENFxBwBHXK8JFDxCJuLyAbUUU4vXgsTdNaVkjghMdBhgGe9tjryRKEmXfEuD3jCP445JUWdBap",
  "key13": "3qPHniVgeANJmu9dqiPzm7XLpaKDCminq78LtQJJzSeysAwDT2Ykoh4HgrfD1CdAJGHDY1H3VkhrDdhGDAGKM2Pb",
  "key14": "4MYCH5dogj9wKHpZQP9UbJxuzBBsV9jbUFS5pPWUaC971ghh2EPPWaF3c9coxr21TotU6ekmJ3huvrsn5ZqczToH",
  "key15": "5QpsZ8u8qf3L3zYsJvmGERCTYZsJcnPcGx3YsZcbihcUvRkXPkdC2scNPCQM4K6iG3zvAfN5Xp6A16VLWfEztLyZ",
  "key16": "5RvEykJkKXhCR17QRFGKKKV6VZv6heS1GMg2YgWygttA8ZnVNkygEsjSSXATFdr8ebb9N2Q2LbkuUAfHMvWCcK5V",
  "key17": "4B2WsBdhXaRYYgCGLcVKnowzPqWMmT2C48isUnQS5e9czAFGTBEJ13MGyUNqYUySZ9Jp4EkxVhJ2xobycnczL5ZK",
  "key18": "2zk9ugSgbpQ1rVqv7YUQ8BAixiKc7GePYsPcRfSFi9vNRsPw4SBZsvrQdY8ZZrWJxDXccsRd5n6xoBDKaLsdZ4oH",
  "key19": "5VzNFkqazLcCakYUzPg2HLCFENdEhHwu217rVsrp3373zFaitNhGp5pZNRofq5tcxN4GeT41h8fPY7Y8fCnT12ig",
  "key20": "66kW8J4CexkLxNU8863VF7A2yFFxEVMB3GU6F5CZdKk6UWwrdTK2XCDqara426k6mTGneBDc7tn9T7hP7e4eCsKY",
  "key21": "598hPH31pheNwyTuBa9QsY2X6yUBcHN4J8rVyoXEkGWs5TeUGkuy4YiepUopynhZXhPWMk6HNKvB21bbj79bYNd2",
  "key22": "3AkuYfMVhANi8Wf5c8BTokySd9XksuAJgWUY2PCEAUjNykbnY9rd9mXH8Me7rVxB9sZJQhTwJotW6GsC1RbvfjRE",
  "key23": "33SLYmMHoHbSFQxdBUbvYZzvvxU3FLhX4JcT2McnNJYwpkkLdJWtLCJpXDCNcUgGy95fdFyy24P186bYUncUxC1B",
  "key24": "4a3jCysxubGcnaAUbX9Xae5L9aDVRC7VjtN4Ctd4McX1rmfZebGibnqS3LAnwVDwAH81YtLEoHRwDUN7ovhsYbvN",
  "key25": "4bkfGGuS5qip8VduB1FWW1nTq55Q5bvBtwBM7brmTkn4FYa7crGaodUArgeoPDQxegW6zuXDDwPjL6iYGNVTzh6t",
  "key26": "c8635ZRb7BuQd2ZmPnreFrNnbYsQ9q1yshQSWAaybvWDNqZQq62rrtXdxeqFNE112tQdiBmDEmk2uUAtMH2JccJ",
  "key27": "DQteT4F3JpCZE6MVVSpHXCshsehCvsZWxtBshwhkefr9tAB7Z5m9ygr9RDMP2es4KK2speGPyoVSPXR2QdicLPT",
  "key28": "4FPa7ZkLQ3qUEDdumpmfKKucCp5mrh3d1x5YgKsX67GkktfTntXpuJrAbj1p2GZ1vHv61ZaHLueNqfMe82KnLMWD",
  "key29": "4w3rg3diKLfq8w19TJdgqb6HFdDHqnEPgvN3PNS9yZcgG2hfZXzxRhDmBkiFzcRP8uD7mBbWZuC8MvqPJeAzKvvY",
  "key30": "2GkvsQzxJWPina3PNSwKvvbJhu5WA8zaBs9fPx9LiALXDf6bAVVMW9HpaHLNC2H8QYK1Ja4pjvkLBGXdTEvwd8ng",
  "key31": "5koj5o1B4DGmk5vrJi6cootVeEXX4fVZn1KiwFFBvYWLphVq79TkeZxakkvKT4AbjQfKSbEbUUzxHi4MAvNgJAdB"
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
