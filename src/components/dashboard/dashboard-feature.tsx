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
    "TLJ8LQWVkbxN652FSSCxKwCXNdfr32A73VSis2XyesaDdAeqYHbfmkBn8u1osSjruaaUDDh4AdUCGkhFCM93TDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e3UXJ4bA24mFxKiLP9SJqnmGHgLicYmV4HNy9cN6PSdwSs4Qn5SyfLXtQsoxacPCaTSstX4BFMicPRCR3UBXjsr",
  "key1": "4QvaJVYkV7yBkS4skWLELf4isXMs8VjrV1XsmhbnUUDdxPfF2mQsPkGFSjJ4BFu91NJf2jghTYPUb9Md71pnJ32W",
  "key2": "64uMSDXX51CGhyiEHx5vPaxEzpdvkQ3sdD9yB2n3hLpD8vsK8PBvKoNbC89JTa4u9YB2mhuVYvCKhzkqhpQGBLRe",
  "key3": "23E9dpsY27SjKt7o9W4rS2uNSdD6iAL95zi9ZXkhyRgSCWNhoJuvSar9BSYx6pAgeCWEdYmEx6HE6MBatE4izTpt",
  "key4": "5nDZh3s6JMVh5twiTFRN6SoqufDNczQd3EFTWYYUs1Re5dSLdhGVEaStz2VLdhKsBwMjapv3qpVmx55SBcCgLLen",
  "key5": "34uJRMkLnKcpupmjwPuUcwDja4ZW9Q81HsJZ8trPNatxf9qKH7wT9z8o2tm6fiuxeW4nu4CGB7ehmDZ9MkWSL8du",
  "key6": "5nkWqLRToVLtZAHX1jj9km4rxPVNqxaxRwxtoXk9sPU9d3mDGdCfWpGKZLk1EbWVpBGKF9WjEY462EYZrBxUo3KU",
  "key7": "LE3CSjABeFDhu3NtbV3QYN9QbZSFmsV4BvgpmoRqfoVMSbQigTqyHU4kQ7YTMXGjFRww1zbRK77cMGn3xcEwvUJ",
  "key8": "5bz69mS4V6eo15735vzZMoyhc3DeYNk6MMry2SxYL62ReoUNvKkmpfhHGZbUBjNq8S59PsoYziZVogFUXzN9zF8U",
  "key9": "2rtf16of78VwMtscp3RpGJVQqsfxUKGDGP7P4j5f58AevfPR3u6DJdkYXTsjaoZf59CasB5aB9tGVaFsb942mrrt",
  "key10": "2yeLJppNyEBtm9FdKgUET2iZGMnqaj7hvgjbWzygdwfNR3nvkhcYYbUJPwwn5FfbayLNUEc7iHHmkCN9rvmrmDoS",
  "key11": "2cywwQjCY8WobUza8nX8YV5QBP8XG1KwDgyxukx8cdZZW2qTctoZ5cSFpFB3f19UyjtZmmfWcMtzNQAu9axmufAz",
  "key12": "56c64YL1Sc2wA4JUyJB14DdTsezFDnUYP34Pv6gjrVUZVsPPr45mCwofB8sow7Yoa2S4SZsRWT4FrBv87VfpV6vH",
  "key13": "4vPpHCtCkRP1W83BDWUzsRu9LJgbmxeX2SMKA7qhEARTTPEuoNc61VRB3KuwBe6aDWQA4nwRZhs6qcPDtwxnamft",
  "key14": "4pXt1cBuT4wUPEP3QYoUBMegwTYqvRLZFRt9fzF9R7U3TaU7UVaV1Z6bTTZdnFgzvqUALkziu8esCUgFLPPFY1NN",
  "key15": "5F7xuWxppRw2ZdHzexQcvnq1MSE8rKyrstkePaSJFwuNtA4svs154EDQvEz8KntCVhi6SAHRL9E31x42jDngV25c",
  "key16": "3N1bGsYvJ3aJLQregKEv44WRKFgBHdYh1WY6Je3EUacAhZRrJ8WFQhqHkKQBaPXA8L7PfxBghrstWoKt7uLPcXJf",
  "key17": "4GYB1VA4tZPKmNp6qJGr5RLfxjqm9CFjW8aUCN9GNCcWKFyGyctbgXSD3Bw8QHWSi4BE4tDGx9cCnY1RNzLxqTSf",
  "key18": "2E8Akq9GUkV8cU1aNCDuURZ7KFSkxCpQv9NkPW1vT424cnGCwqiK8W8FDheRoU8rNdQGrpAYsvFkSeUW3kXvLE2",
  "key19": "3F5mTwsNa6Y42tLpJPF63yPNLeaYcTitLPUpRTMoErpEf64FDNGnWxzEjFAh8kobURZytqZeBdaV2wxXVB7zq1ua",
  "key20": "5rGnN44gtGkQD8F1tdShQ5guRanRjAtFzeZTPN9kBrsqgydCXkMzYwgWdPdx84oF5KxFRLTEq1ejYM9Z1EWiEond",
  "key21": "32G1vZnv6eTY8LoN2JHXxScx9xjYRKR2KArJRocZG7N7g98CxssT214W5gv1gWcnHDchXbE59qhU1eU6Y8mUQhGx",
  "key22": "4e2vEEYN4hEte9KDJ44a9JieZsXPfmfQJmyHspez4PVbineyoJtX4pqmArsMZXdJ2c6Rrnpu25eMmFT9stu9FUqc",
  "key23": "4yMuRzkhm63E6nhkXC3F9JGVKqdEfseA62gAUZmfhVYRrePnWTe39CgyN5vGdws9BGayw2c43SMwhsGMn8AedzBP",
  "key24": "fAcgcr9qpr22PyUwstfEegVmXzKcQHdQhKtXUKjqfbsHJdkga7on68PDyVnmd9oTvw1k6UviNWPVDbzi4cg5N7Q",
  "key25": "3yAXA6UVjHyfEW4aQLEij8VsNVAZupL9cdpN9Qp36T6HoryT9oDahnj1TEkB7w9nDRcfXnxpcLTaNRu9Uqf31vf4",
  "key26": "2LG9ieE1z8teCbXqu1EEfYNRvUs2vpM8QdCVL49cv7EWr4Ht3XnEERfcXq2Y7YKzHQGii8fc3JtA5HNaCosWFkT8",
  "key27": "2DdJL6Ja4J7cShe6DS5fz527C5RYLJXNbszj9ouuu1X3kBCWyXjqniEG4RgkAoHXUtsGWP5oWtEuBvRMVLNcEG5E",
  "key28": "h7NAGfoK5jvAb9WTRmTVZVzWhzZEoJz9xNePoChoHDengFznKJjndnwVqaLxQiX1yCVDio4Sa8SfEgiTrGDQKBt",
  "key29": "3VZCFkvs17icTEYuQKcXHhVgnHqi199tLbNmECPoEK33QPg6gjof3hDzDTHSzhzAy2aczh3NEJQytJkY6PNx9BA3",
  "key30": "2oHeGep8uRpenkbUSiCSrvmWNVusRn8u6Au9soQQZYtGqjBnvE7AuuG7Acehj26g4Trkz7DTw23T2b6WkCoqyRAK",
  "key31": "5nmD7rJrf96qCxUgaQ515WfC1iWQ8hqQogywBuTNoGda5bjVmC92LcZmyHg78E227trRZqv6sT9Kre19dez9yJiK"
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
