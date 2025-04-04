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
    "Z1UAur22cs5mBqRC6Qw3kriK4b8ThL2rCsZ7EqqzKXV8i2UtdtjMc4kXkMnZ3eiQk2LqSBZxVxVfZLXvWdSkkZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CDK64TLsibSENjadESzNtSDQfjdPVQfvhmN9uW9gEXs5svpeJ8VPhwTsMC2F7BM83W4m4ZS6jHwenZvGrio5r75",
  "key1": "wdKWW8G6oQye1PgPEfLxm7hg53xXsjVQDQDAG8rnHL52UXjZ4L6mAZJy5aCvyoATt91noaXJf9VdnSH7TzT3D1c",
  "key2": "3Bt5TpUG45HKG5NAnHgW5LRT7tYMzJdYg129nXxT6FQBQ5Wf2wVTuDa9sZVZo98mqyj1irxXVFuPS2kodV7NeKr1",
  "key3": "aXBwtdJYmXaxnt7k2CQMQdAEzT53iB4nQTaSqTVQd3Pfv5j4P3FU1uC3XDJJvdvxhAvSCNZYNBh8uppxRqeJStz",
  "key4": "4Ld3w57J8bSfz3dQ8tew5BbcyuXGcCqgFTgfY3U8S5hVaUUocv7GrVzTpREN7ZVvNdueB1VoAkqEYBz9EAvT6tE",
  "key5": "yjLSXGyRb9is4vhrmd6Ay5rZFRgw6LZZ8vuxuzjE1aofDJq13E2qzDcTGc1u6KU7jxzJu1nWjQNUHnprhug3UTe",
  "key6": "5xVv5C1bRGQWFCoZnNJQE3Ut67T7zxmEBtroDUA7THaq6owCSQbbUeYzXZrhuV7zC2147K2HRKgphgyAjPbSbyNZ",
  "key7": "4s8zMBY9uc3ZwtiyXj7Px8WKJePZzuwpBkMXQxEq5FvFSSwhXzpk1vUSwQDK3DKW75T3Z7L1FjzmejBMcG8RmuQp",
  "key8": "2d7UcytWzwUa7DMHg2zps9Jh4nphHc6vRW4qe1QxNSEznswZuw6URtveKkXRVKvx9U7MSs7YWb2kgGPeGArbEjXv",
  "key9": "Mjvh5jAwGwavT54qi5xgTpeL1so3QZzFGfkHjFsbCvYb4k37XCADALt7YRzf9L2bRFAojMDLreuVH8wYwr6oyPm",
  "key10": "3fXrSSyt9TbakPa381rNnywM48mmH4UtGEye156a79LZtZX4joWYHfDoJup2dpcbN5r1P4eiZgL1993cxVzmWupT",
  "key11": "5u5qmQnGmGDWftQBg3j5U9PnWJCuLmZrrUtq5JYfbPpLX7Qzc98tUcuiyqNbRBh1Z8A7xL7cT5oZy4AA9ygPLHGR",
  "key12": "4vvVnqvKzWwPge3tUCnxmR8YA4nyNPmGZR8VJLa2bTudLRTUeanQEq1CSH9tsfeuLKfKbqLjUKTanBcvZXTcyNQr",
  "key13": "3s52Dd8WD8KuUL7LvYAq8BTa81awTMZexW7hYyfhGuKYNxUfmDDKrRCQ1znSqqQEGqyMeBMAPuuXka1CRDpmAzT9",
  "key14": "3Q6RJjpbLydxYemLu4wLBynycT1feW1xuFpQnyKpacsWTDdHCsHyykDuX9Xgnokt9MZavPefSJL7pVjDHEKbyrkq",
  "key15": "1ynrxaftzhHFeHvRoWeVFQ9ZyUWaxFtNZ6ygzaXmt8t2FpNYEZApuqcHxAtHP2BGFS49gCzgvE6KeeS3vm8iRUe",
  "key16": "4HDDampjWEXpWEWU5T9kTPkKFVnmC7SfUvRrqMsRXaxAqjfaPxYtE8vm6S3huxSAH7V8u96i1WDgJ6NL97MKJNAM",
  "key17": "34P6rcPQ3Hv7aiRDFDbp56zFBeZDgrfRnpT1qewxG6myXuQ6j8cbgWGPCKY1VpS5HDBgtizdsP1TewnhmGozsgGR",
  "key18": "39z8NKMrU72q8XcRcAWnPUVVpegSQfawWjaXHm2azTBfdWaovLCMtBySCKb8FPXUxiNUmsVwy7UVD8Jivbeutah3",
  "key19": "4YGcJaazpU51zhTa2FnaGFHm8C4VHbyGM526J475sN2JCEMym8jgFNdicMKHyKaQ4Z7TPgNopx9tPi1JicacENYZ",
  "key20": "4fdhh7QCuheYF1M6Ejhs48ockSMX7eEeMAAK2QCaboRm7FkBcHucDuxZ8gyAZstqg4QXHeQBPBEUboq8BFM1mhh6",
  "key21": "2uahjhN5UaiVwqma6W2d795FQHV73Hx7FUJPC53AHnhTieKu9TnEQTfVWYLMPNsk5svSm6R8GvudRSJb3H8sLeJY",
  "key22": "5TDzVXPzjDU9SrRy86uEXfdJvwq5scHkPk369diKs8aKHcohqQfJd9VwVzWkAvxha4PhPVytERC43zRq4J7Bbw7x",
  "key23": "5mp1LTRrLgTKeCeC3PHhi2wYH3WQqAXG1xS7pMpD5BAzaPU5Sk2ZS6frPKzVh9mzv6uRv4iNXjeMT6VQTmmYdWX3",
  "key24": "61VGd3TQinK61idVjXnLZcg9gNoyFHJ5ZsSPDZgZQXEdofEubwuh3oR9sQr9TA1rkgWYxv8nbut4qQFykuNaa1ww",
  "key25": "eAQJoyhcAnjmXXr9vzfigQn4CNudQrSbbbwFCbYsn2UrEJTQT2ZXHxqzN4KJzGgDNCTFu8PEfvoHr4EdiimuNK9",
  "key26": "46RJSbsrBuBArdWxVyJoNw4iWUpHo6RrS3a2Bj9zYwgPhSn2ST6rEMS3aRmYdrajWgkG1vLnujvq5NeWNdjawanA",
  "key27": "5dZFFgGzaycM8w6MNrBbon2qziiitU51oqQEpmRcpumsFQ4MSu7GKpd2Vka4yztafeiYhfHsKaMtQZfWcYSmJfT7",
  "key28": "ZVE2VHqwuoGwpfJM9Tydaup5c7ainRD9ov3QKbJ3DQzz5nVXex3g9fq7NkfSKR7R1k2nfrMbLSWUhEDmsVmLsva",
  "key29": "31gP2ce2urFYRhVVSE4rcuJZxXXpXKP7p34ax7ArGdbDh9JPmgM3XJYjyhG73WEuC8Ns2Le6ToHKjUpJ4pmEuqmj",
  "key30": "Y8AAq88j7X8jZV7WfEw6YvdtN14mv8o99tA8jTKCzMWyqDsKKKFhWhicAj81kVmiUARvB6RjHT1jHMj3GNNYQJS",
  "key31": "4CNdqLrBF4kXaei7dbbWnhtvpLBXu9LUMSe1vdqBbSHVkbjU6PBZhBchkoihuT4hy1Mh54D9x1Yyz3tayWAFY3PZ",
  "key32": "2yypLrka6vkZZHP2QwKooSdRcHSa4mQ4k9ja3zdgqntgjrwhZysDjsZ6fKDpsimGWT5C2fAn7NjpCtHdeZZnDTUx",
  "key33": "pN3ES7NuMmMnoRfwLMWHrogdJsVDX9KTxqatMNAPWBZGCSY9yTUiH6aQ4byiaLDzZVdiETDEroJGu59tQXG4b1x",
  "key34": "2RTwiaJ9iA4S4xVxru4tJ3K8fz7SpjLdjmu9Jm3WTY7mFeyr6jVSswSPA3kyud4wx8SqyFGSzc9i9WKvA4FqHeSg",
  "key35": "5oVgndhM7CBUgRfiF2QzRtsVuFUV8ccrSF5AduyZdiVC4pDQiqhpBeQgexMZm6qqQp9z5S9gW1PFExRyPYq6yyu5",
  "key36": "37pA8z3HaJauoGr5UTr3dHr7GFi25iUTSYFDSB343CHyiumDYRFALoe59vrifMUDF814QoZYDJecjyHizCWZ2Mgb",
  "key37": "4ZDimqHkekbHvvpJJWyz4TASoV749u1Yy9nsgZvagHqoNSuBeUtnc8E7D3fLf1vgnGohduLjznTZnnn1hdfejpmC",
  "key38": "5aHVVjKnsV4dPY71tyQCmN5WVwATxGsK2YAiqKyWxq1AtDqAMzopQFDW5QYsHZssiD3cLVpSrxQYDWdNynhTyUVf",
  "key39": "438oxswiLwADyxxWfJE5vCCkeoyxSPUzLEuDofBRLLsuBmCbYKnEaoqwyk9eGzEei71C2LquEBcGaQ8342dwaZRy",
  "key40": "5H2TVxwHEZv7FGHs9y4hiM2RzbmRqu8x8BHpWokEc7wKURDrjLkRVPwCY8ks3GnpVdZhzwCAvLm8R7WuZuzwGapH",
  "key41": "5V7B3JVUTyNh4xAC2NemXskDRQJWzscShThFwW2KNpwgw1E1Sx4Y5Ug3pfL3FPemeeiW24JnTkQ1D3bZvJiRuE1W",
  "key42": "5sfVTAWnJecXt73ECbQwvrFgcahyFCdWfM8EGxoFpY8wJCKejJuCWFNBbLv4wGBsdh3Fc2KwmauPHYC76Jhb9hF8",
  "key43": "4mAH4xQusNjjiEnwwL632nbcTzW2WHPwjY3qPkNAPgWoFhnSNcqsE37yUfUghZNmTgJ4UKjG7ga6qskVb35dGZXT",
  "key44": "3aBm9h5JEM7urcymA6Fn6YhqGZtYQUmkyvWVUxQphEfdaMkQj9e4L48UwWRXLyjmh2JstKezuYpQmCVjmYkRBVBJ"
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
