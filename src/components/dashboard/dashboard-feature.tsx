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
    "63App1Gpq5vsG8xDkwAA5gphr5HaMi7Q4NKrudbgbNJjs7LGUuAj5BxZGvPEE6PZpCjhSxzWMVjaFuiP6Tpi4deR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eXSvn2pQj9PHgt6hDbxLaiePzJkTWQoDCbaCaBpjWTak1DZfcKRdztz8oZyYSYhhWK8UtBppQDpTWk8W4W4X1VD",
  "key1": "3unpmQ9kcaJ9bPdoStJ8HcuNQiQ3TCUUxkBLC5TtsHLdy7q4Qmy9yWQUeNyXAwfU1vuJJoGV7nzbhEuimtLrXvXg",
  "key2": "5NDQqAK5eM5Tch66STwtAtnkmVeqpzKLYLHhKGt1GdtodrttEVehGbNyHrDtynHmxzNtmdLsLUJgA883865BZEzU",
  "key3": "3WqRhhvXmUNW8mxkzu4Co9XxEvcbyqEP5k4etwWPMEQXX3nmN3umycCGAcDz9XQenGAqdgEFtXSB2By5SPgXQ3W9",
  "key4": "5hhJbXWr6Fa2uncrXi9p2MtV5nJRRuSyVTNDFLBBUNMsa4HNY65RcnQEJhz3r32EUbiZK87j2YT3wepiKKA3d6wb",
  "key5": "3Evxa7S1v1sVVCF5GTQ5TMnsw3yzETcW8khJeboocXotJjicVuDzWozrkbvp6CbPLgzQ4ZsPQGGQRHn7mTqvqNkp",
  "key6": "4AqNFxZ14H6ZzvQmcrK6HcYAiTxRrYRGKAc4b36XvE8q7tZHwsutDLhw6Dtv3VcMVJEPvH3oWzzU1ha8t7JMPqp2",
  "key7": "5AkE3bqiWno6SD1YsJo753yzdztDvK6LH8ed83SVEvj4HmSTJ4sngHDG1vou6T3SUV21f6TmUmMCkctYaTchrE5P",
  "key8": "5yA5mDytWBz7TVc25iLA9HxXnxKFAp3EyDUMEAphffhC1rsA8ugArnv23ekBTKckAv1YUZQ9nbwCTY1cpVe5EqzD",
  "key9": "5tmnhJQGXL6vxHW2ExXeGrgc9PW71mYLDTLxAXCPFqPp1rWezCWeuC6aZhWLeR9116TG882LudbVTJPY7cv2NjTi",
  "key10": "617kz5zzASGsfh3T6V2JxPrKssnuj7hTY4gvZepH45KzBqWUpsQZHW7XgStPb3BDd1tbnYEGMY9w6SYzoMncGD1s",
  "key11": "2vY3nBbgdkJD9gYutwPmKLNUyrUsWGqd2szrxxpzCUxBieVQZ4Fzeo9QY6J4VCHu9yDB9bGVNR6DBwmBw5sK6gUT",
  "key12": "5agQ3e3LmX3Hg6FkyxYJaBTKgHgJPEK36HDXkBqL93XP8cPhUJp9j1Tc3Y4vYrF3Cye96SmmiUEXRSonVKdRtt2q",
  "key13": "4H6mtsSDCCoBvuuF1KouCxPzJna3qk2sEnYjfyPvLbb4UoAs99RFJusN3eQw8PartXzbWVJtkMhMgMocpb9z5B3b",
  "key14": "J6KLRoHSiZrRpDRhnkMZaUGtnq9mYz4nPEEr7fKJjfpQc6xnekb81p8u2R29NKn1cpZQ94JsrUqdBqUonHqmjKX",
  "key15": "3F1GrWRY31XBszv32XzRigiUiYTxk7sV4oe8hCB5YKtdNLESe3GBj6KhnFrs9gYsehE6kwJrxqnTdvkb3ytZecHc",
  "key16": "CmP6M98BRRVk5yrYUfmKG6BUWzEBcpY4WhfD4TrkT2mWTa37WzJ6vWfBoCgYeUYBWYzPtv3Nq6K5Vj8jAdJZPyu",
  "key17": "645ZhCGSoaQqRwjtKm9WDx41mTPxXwiZtnN5CfTWFQBNg6gyDAh3ohgAFMcLLz1eR8bmXEcS7ywBqhChFqFSLr8L",
  "key18": "5Z7F9YaRQKo95HCKqUwSSAHz4Ntt2KkSjjpFZvVLph3YQuneRVqsRt6P9DYMeVmVLBRhvZMQ76EZFvqPGTbQJj6u",
  "key19": "2DkPPVncVBRZN6KkQryV1BsHDEKAzhuoPYDEQb3e4uPsqzBgZzaZ3wZg63rLftskCinniSma2kcfMwu7fqf88NfY",
  "key20": "TkeE4JEW6LScehRXsn4kjDbQWqmpqYFY1FcTW97KmtZM2AvQUr7dwd5oNPfUwQq5wiKus4dNceE6VBcJd1mQosy",
  "key21": "4sJF5eTqe2L8bAx9ZjQYgMr6kd4Lj6gE18xQx4GRkdsmmoZySfGCHM8AXfZrUqk7WCMAufArgZcrbtRAHXA4UD3R",
  "key22": "3RSvWv3bHxcKFbxWkNFxf34vyTHvWWbgvV97niegidbmnBJ4Lm2QXKNsNHjmYcfgX8QW5E867KUx8uqRR3g4vR19",
  "key23": "vQPCHGPyRvKwMbJZpiVMiweJ2UryLeHD2p64f3etV2MdDFK4gQUjbPwqioiJizkN8oLPQ8W5NhipcDNNibfnhiT",
  "key24": "2La87Vz2SRJiVsvTvTEiEpEmS3dyzk7RTxhiAWf9g6SNETGxTAqeehPKKmNHmHRjV6Gev3Xj9tUJh2g9R8s5z5oF",
  "key25": "24e3qN6RqcDsBhze9dRqUepWgAweLqsdaAxEAwAJwtdguDu8UK6NZ3MeoShPas5BRrS1AxeAKKJMCuv4gLXymB8o",
  "key26": "yNuAGC7une3RTzBW1e93FVRGoh3MHBQNaF4c9kHyiF1GztawZvCHogX73ybK5YhKzh2V7wXANUpDggGtjqUMbvR",
  "key27": "5fD6jvxcA6acTNK3EnjMCBNg7mgAXPjZjxade5UitJ7oXRJ1TCaYXpydPDu6oTrMiEeFsxH5hQFyZABiUEWgni71",
  "key28": "j2eVX3Jssfu9Dh5dY2rgrK8HnbvJWkHGojYdZiiegFBs4wFM2YVusGLE39aKvLXyR3hrvasVALMGHS4SjBq1ZA8",
  "key29": "fHi2CZAPp9tzvG5MwepjB2QsHZsP1RwXJVCKYoEFQy7pxQqpn4JwvLkJi4YaRQGwrUw8jXA7c41XKftnWghptH6",
  "key30": "4aYL1iZtggGf548mfrEGBDoHLniMdC9xuVNDXnjsJHk47acFxdP65t2nGX6QFRJwY6Mdo4WGs1B44pBTZMjGR7LS"
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
