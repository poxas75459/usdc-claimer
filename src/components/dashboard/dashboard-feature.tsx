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
    "4myggXYPVzq9oBQVW9sFgwm5nYjuXi4CWNGXouCt9thyp33p7wD6Y3BMUydQj7nA9HgUQ9xfBf8nosfL1nt462tM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GitUrWVntBkzvgQKXJ4qCXoPKDh1UJdL8eAFJ66zZoMLvpBQMSQ3e7FcP5wDFk88mwpZsCm6cKxGU56Vte4Vwza",
  "key1": "BgR7Zrnfw9txhKu1oM9mLSTCdKpK4XRPMQTeMTBWDi4TedCe5jio8zMjwqbT8imURXp3xqwWvFQBHqwXJSbveYY",
  "key2": "4Jm7957WNu9kY5SnUamvSAbmjFbLJLbZupAiJWkRXcwpMEE4wZJ1n7ZFfDWUK2z9FmDi9zdsGgUmBVVBvBhQ5p7H",
  "key3": "4SQZspY1ABVcXHK3Ar3Vy8aUoaTdySR4dsJTuA2FsWBGKxmwvLYZA7eXwQPi4xSL5zxc7Z8xQyLzQAXnq3mMgsv7",
  "key4": "3shpFWhU8aqqtE8QmgXNgtAeMDTRZCTvrhkRGMg3zTJv6zP9RiYaYTFsR85xsWeW8khCutcTuRtz4zSZHT5TjUAY",
  "key5": "22u2CEFCJZAzDLDwAQL7sb3Tn2pdmGWPjb5FSXQBDfmACWj8LQ1WfMjvop6o3M44o1QH7qCTbg2EkufqC33vbUm3",
  "key6": "5oZ9YUg2wUge37FbyC5bwVJnYgPmdFTLaFRFfNSAk2U9Fo2fZLivetSoZRUvDGDZ8m5PEw7bidMwgtVMSiXhPR7u",
  "key7": "5cDkXaZUnY2Toe2GuLp84j8JECCgV1kHUNSyjBkcLarDfNU5bVBThGSDdWD7Ym5MTCBUyfyCq7j1bAK3L5TRu77N",
  "key8": "2bjmPqvTWXr2swgKznmsAaqB4r6Yje4sX9Jriuss7ZmHtmESgzYpqSyQRhudHZutVJFU6HJYvz4Jx64wsXBbbTqK",
  "key9": "25Ccv9Ad4casEkmDBxHRyow7ZycjFdKvryDNcvm12P8HUcfMd4Qi5Gj7ybXN4CutVAjgBk9mR96g1sSP6C422h1z",
  "key10": "RH99QkuhbiwSCFF3Q9iyz9EVsK8dVkrQgVNoGNcPxuzpsqEuS3gYjo8jgPtpkYsjWMEwCR2F4boBCZbNh5znjJC",
  "key11": "5kdLJabsN47FiKAQpZk7P4EuPJuwkW8C4dennZuSxzY6tG7JX42svX1mBFowFixtsUExcvkUMsYAK9F1sKU9un8C",
  "key12": "5M4gvs58GvDVUTYnxyo74t7VJFdfWGPNmJQ5cDTLnfDzYTBUSsG9GGWje2eQo4eV67Hcb8pEM9v4WgS6HdVbBn4P",
  "key13": "5cgZXsu3Tj3N4qZ3STseZfTdgX1SLJR27TabrWVmBRFxYxLKEGBKQCEQzMhnDqsrQsYvcJucYs1JA9i9b4iZmYzK",
  "key14": "3Mt213E1UYjGivJBKrXzXgWQazW2Hm8cbgRbGUjs9MnMBof9tKvqaEfYwj4wSyd7PxGBYqYYXyvAVkh1rUL6RhFn",
  "key15": "5oLUdkpFvbBrTALSy2AUqkv8dxtYRd7wWmSkQznZYaAKG7VNN2uamJaN1SM5KHDZh8DfJreRzDPyok99wwTE5VKT",
  "key16": "jRoXMh1LdyPYaXRfw4qfC7RwbLXCbEHNz8dFaGGfuqEFbAka4qY4GBbUntfyxAY8GLL8pRChPHGPczik5rBqCzN",
  "key17": "5ESJ7QTu5uv55XExsZJATih2egSry5qpAfAdpsLLSGMbyM9eYYciRuTKt6AjrxZJKhyU1CeYHtjRUYbSrd4oDQwN",
  "key18": "2evYiGrZxRgT94g9d5WRQzibmUtDpNex8Zm8HwyzMWasYPkPa711xXPHZpPwXV8i4kYswbGv38gftr1vy5mov4sJ",
  "key19": "66SzozR7swzW9V4RXK7GBP77Y6AVSbtdCRsEErTHJe2VqWctfuBQ7NxYmxC6VigYkmWb9qG3dySRnUQXHVW5frV3",
  "key20": "3pXSd8xME794oQ45SAvQf5A9meFuToGX2u43sX1BQn9WH1UuTW86AAaV7xhAcBq1BiHxEBCPWABFPgMKZJZ4AEx8",
  "key21": "2P1Nxba4Sf9eDUrHb2o7jBnUv8JFLgHXCDeSuigrrEaTMQ2zLKUyKwKMbcPkWpay9Anzoue8tLER7xnhwV19vFSL",
  "key22": "5WspFQfqDvejVDGd8EAuYJHmnwTd2xqtH3UFXBWTteBaSwKzoFpzHBwhrKn6Xgb5vXkTQSXBDUfk28ugrzXHvCSx",
  "key23": "2jN5aPMaU6XGFYsyPypzczAiq4QN7GAXeDNjjCCGCA8cRcVWPWCx12CcT5TX3LRTummwVNtmZwTZNt8j3WqBvZ4f",
  "key24": "5vfvjb1Ph1cUT5jgQ6mSad8fKyF9Z93JL9EwFs8nQ4LqQaVUgQFpGkUG73e3Jm4cAaQqfLJ23T35hjccqoBBz4wn",
  "key25": "3LEzahkWcqCpBMDKAcyZa9WbmnKy27Yrtqetu1WwaKRKmLYZdJTW28JQytze69bqeMrSHPSER3oB56RPAzMCxp5d",
  "key26": "3jCtVWcVTmF8Nvy6DEyhUpXUahHCrPicvrhMxdWBKpxxFDAdRZqp5tkv3FtScHm6azETr2u7TLJFsRDeDZeGesm6",
  "key27": "2Ub9PcuBurpp6pnQwWqJnKwZmNaSywQG7jyG2pkaHxm47x4PVJ5JmNxTthjSitDg42Jeb5kSiV3sa4VGhoGF66Hf",
  "key28": "36cUpw4HFvs71mZQzxCYXzQw9YC6vkDDFUXxkLCxUPrWz3DMQhRVw9F3d7rznMK23sggaQH58anwhCkifdtA2iKs",
  "key29": "5fye1cNc9DhGn4Y8pQsFmndzrrarKgbSuSBe6Ft7rZQcpeUxfH5Y18aiYCi5ef8NsFjstfLDxQQbKiTmpzrFJD5x",
  "key30": "3ueBU3tHvVCwjbGn6zVZGRphYS6mFG779ERhMnkXUophTkiNsirkbJCQYpowpjfUV7SLmoF9uApDcAQLqkTQe11h",
  "key31": "5BxofA68N1mLRDdus8mvci391E3dr3yvwX4BiCoheLFTqY2j971qKkUdeaEkuqUsYVbNNMXj7qdCwE9KwMTUcJLj",
  "key32": "5bwZudVqdhZ1VM1dRM1h21xHZ1C4sREvWTjfjQbUKuBVCZp1EuTe3eKkVTPe5ZiRejk6361mvyv6emLYZKFFm3Gu"
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
