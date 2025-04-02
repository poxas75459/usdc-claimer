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
    "nZ2WL6QoDai15uKMGdv567PYBArEUsrmSMyHyNwuRQxDGceUtEGYiUFTfh4mCC8fCrJGNXyL5mg7RS8DkfsyHyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ug86hGmJFgSgPPGxPB7ECgbp7pUWVh2Pqj6nwUgfXRuSgykxFAumPmW9XS7atwXZ7mXiqSr32eo7PwgkgnfP8tD",
  "key1": "3LhVs5bS4cAAFnuJCuM1FoA7apoqoTFmjFMpUi6dcMG9q5k7zWNz2q9RVRopXxTsurDdiDNrPpPfEKprwWbPH28e",
  "key2": "53xJqRQWtyFxJjKtgXnNn9df73ZyAStx71qN9z3kMt5Wn6JDCuXqiBjPcGPodJz16oTqZP3aDQ7zP2voNCo6cQsJ",
  "key3": "35kb17jCMu8Ez35emLxFvQxnZPhChLGzs713TAPTzTMcYPKe2ZQxMGdJASKQJEaXn24Q4VFhY9KFVa4RnPHzJNWZ",
  "key4": "3UNfHzEnUG3c8HPbHmvRGLPzTQ1Lm5hZ4h4FefWRxYak8V2ghqzgMRz4MrPCgm5aNTJovKkJqeqV5kZkNSaFrpsp",
  "key5": "3g4tPD64tBCPospjJ46xpQhuvEqjaPfyejnstFjH1r1E9YoWF3ygWi2NN8TN5rhuVk95aZuRLtpuLAePcwVfXaJM",
  "key6": "cpNmzkfYKNF3pxQeryHDGo8YdTmwimWanvFCmM3t1YUG3kFs1M6SR5zm4DZnpgtaGWQE68XRZd2kcKzU9H4BEpv",
  "key7": "3yVAU5HrSZSkVsdWQbEovMV5rz81dVSHrPhpvWuRnj7LeBifo1XVShtsExf4iXnx5rG1VngBzFJyRrzEe8Y28gsR",
  "key8": "3FAoavHXPebra6irvbGMWCdkDHEFgWjBcTTZQvfUQTMYXZB4NajdJ7ULMufFfCT5GvHqViGzeZT3iBEBxDkEnq5V",
  "key9": "4A8yV1ijussRqeHuMb8atQm5jWkhLtKY1WK5EDrtHx1zXbyrpEMNNzCwJNbGMAuERywHbEx7c8ExMhyN3g3iVpuC",
  "key10": "62AAA1jkstJtCg35RKHfRZ1XsGSc5NTFPJesC1zbd8aVAKmL8MtPXwdvezu5rg8LBi9GYDTyCyUubuZjARk8KHFn",
  "key11": "u3eyLkwNbYz95BNeRZn8weomCR5Uu2ShZhkZRT61imZg5QPoAU7P7mjPihRF4QKTBPXXDhHsMkbiUEgoMmbXphK",
  "key12": "3Ac45mbScaSk67QeeQbiC1NtcbFM9Yj9Lf2W538aTTEoQPPH5H9TGQHrQ9z1Zq7uU4CZigpPQ53SfZqZxrMXjthc",
  "key13": "9wi1SSsAzRKgTqmRx2p8WRYa9fU2pTGDFCRh2ksosjUEUPEEUUih12Sw1nGWhj32fYVTmn3jNif8NXVwjkrhnzp",
  "key14": "4ZomASsATnMyeYUbZ6T617mkHww78M2g91zjjqdJoYXi7hbzdGJwYHKLib1GGrMBzSsboG659Z4ALGnmcBE3AWgm",
  "key15": "38eg6G26v1qPEukg3PzRYgxsUuEETvpprF44T9sQNtmbvJ6QnRoEYQBuHoE1xpFrZCzsaMcn9Sk24bnvV9Fg2vD9",
  "key16": "4pnV6wT3kHGY7r6s89Cya37H7Gymec3VLmGYjhwsvZZ6e8kG7eT85TzGWtSGFgbCZK3mUfDMQVuDb3hSMNWcTCvF",
  "key17": "DVfwnBSfmhScXa4eu15rtC2mdhBxGcnX3pi3YpYi1n6QPnd9ikwifMzEwzQDQibt9WwCwvqP5BPt3yLsmR9apqe",
  "key18": "g82UiCPbUQvL1DdYr8PYKKWRKLW9qZY9HeZvExuJkMgk5yGms9Fs9giqRLio23ChTUUKhYwVXP2EaTSTHT32ir1",
  "key19": "2jVN8tPywfERsfvzwomwnFpUvojV2iQxXwzG5dRhnGfU7mUcnWbA8mePH3Bp9S4K3WEcJaZgAu6VeXZFp4XTCrvR",
  "key20": "2reCYQyhzGTH7bwRbMZXV1QpuAtx7smGVuX4Q2xF5h2eFZZKBBULNCumKARkpaYiYzy7FRgFBQBWYqK2krNWaPmf",
  "key21": "muoXzm3SJdP9R3iJJSpXqmpjKjN5hCbvsG7UK5i61FVE3NFnRZCD4sQrKEeKTtjmnuS82JbLCVPJB51rNB9X2y9",
  "key22": "5VNdG81bLZNA6k5FYvHXSi5DhcA3KhdNmH6LtCs4YjAUeXcSYhqnrYJk36tPyJv5v9ffNo72HuLQ4qZNPnjWJqcZ",
  "key23": "3LbGz29SKf5vJ3NdArfiwwWhmmiUPTBKE1E818gB6xvSrT2LxHMJMipk7CDCeFB6sD2JvAEjYMr8JxGUhwRVMu2e",
  "key24": "5R3sxpAPh7AbE7vfqsFs3ANyYjRYujDbAvBo9J6Rk71xFAGH6XVQy1ZE25heboRYeCo74akagENit5jGAPT3nX3x",
  "key25": "7Z5Pc4LwyhRuYmspwqr7v8xRvyCDT3ddHVHaU8YegCwu5irCjWpiE91T8iH1xJdT8obApDTQ5PgPQVEZJXeaBZJ",
  "key26": "3Q9d3BdiCJJc1WvXumuhbTCEbXqLJxg3MoDFbqVaZji8UL6dC7ToAGcymZPQXexzeJBKzVFhgjmq95EnUe8RJ8N",
  "key27": "N6Dhd3gePxbvPxdwGng5vub4mPSqvciBTvBcM88i7n2Jk6YR131QWymCgQFa8676iruH8xx4NnVFPVDJQxRGhHk",
  "key28": "2d3CgrVvCB4sSn36ZP8cXnjwM56REpuNdC2G6ugYK429AaYzW5c6WjQVEE4zRTeag2ftskqpAJnGxCDHbHsV5cgJ",
  "key29": "3zEZw4QdXsEyK67ZZE5WDDBoJGgfKLmqFPY8WTZDpfCgxi8EcbLUvYGP5P6mENqNcYo1Boysz4Jm6aRXJcEA926Q",
  "key30": "4CxhZPPbS4q6oe4b2SvZmY2VNAyGhnDLHNnm4WCQ8ZgHo9oh2jSGXwEZ5pLdik9wkHkaXXzfr99y5Vu8gQ6LkAq6",
  "key31": "sgG3je4G8mxT7yW8dBHMVUhhyznU19EEAQivuJ3zycWgDHLhuzRn9hLNN4uRQ9CDk1DZezo3vaxfRKmwyhT1WDM",
  "key32": "3ZEWxFLPAnTCCkH6RMxtLx5NKH5FM3fVTQZ1AePntL7veD9NtW1FCQdFSH8GAQKMsC9vpHcNdQv9maZjGiKPCrPq",
  "key33": "5sKHqJRYe79iA5zkUMK6TogVceV6M39FHvejT77VZFheQVzcRkC35vzxPMxJJBac2QBXz1erRuwnFuGX2GYobP2p",
  "key34": "3DpyivN4DWeA7aN2F1aHCERDjwYDYVzMcitNoP9ivFiZ9mSYarpP1WDm5FoGsCsiEbQemAKpDTSPfnBCpHEoyAKS",
  "key35": "fjAvTVsZkn368Q4YqszvpC1d2pqdtr3GertaaacRZcL2QB1He9QzcxUAhkNWrD5Naij5Jkd9a9paCpr9b78eTRv",
  "key36": "49wTXcZAmcMgePTWop7kNSQ9o45NDnUC7qZJ12CTiQ1Qp7NkEG4otJ67jM39EWHkDTWNxsGtMx4yUa5saKfbawJa",
  "key37": "7qUutdZLZaKYF98dWyCH6GujzGHzTUjfrrthPDcRxWh313eG3G8xy6o8XJcHnrBcubKGjTqaYFfi5c2Rzz4X68H",
  "key38": "2xPfsgETHx47khmAQNBW2AvjoSSXHAiyLt1ssCTQLyvBHtPCN58E6ozcqYuW7XkshxcumeVzBMxw3tFAWi7KqCWf",
  "key39": "2HjdLYZNi8FuHa631Cv7hEcqVYXjLQevzVnFBpez9X16Zx4LtYsLPhawxZvbJsopUgaGHBwxEHDmdn7qch8US7sR",
  "key40": "23uRisdYnn8YXfVLf92RGn6WvoTRCs5yEAiC3t1Qs9Yd1aTUnxPKT6f8WQmraJdp8mcLPCKF7FxvpV9y2mTTvhuK",
  "key41": "4fjZLhVpBTGKNncPCKNhX4xbs7QnnZeDKja8EVhFKmFK2zAGqN6oMo3RcMmCWKWgoeNFvgTQZqA7ccnNccXNsB4x"
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
