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
    "4gdzgP2oAQT4kkaHRMzRZwoD472oaET92Dhm8qCatU4k58JNxVPMwt4QJAYPgx5W9T7kb9gXUuKY7a44p1WpFb9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53qtY5pwS4oXfFwBkXE3aF4X1AVxSJP3yaNJjimThxDhbDgJ1e51N2QrHxv1mRkyhjybef661fLTYdnf6ZoQi9sG",
  "key1": "3jg71iehEZ66fL21R4gWwA2yn8Y8SAuh46EkX73aYDXodWt2ZgqANDZQca5JEk5Br2TssVsrDag5raRUxcTnw81d",
  "key2": "23srs1smYA2QoYgDnLsbtpMqRdkvwdsM8dy8Rspe1DpUmbc9Srw6wnRLeum8XeaiZaU547hdtwb9jVu8jkCqFrxa",
  "key3": "3KLHBy7yhZKYcy4HXsn3Fi3rBXmDm7YYpEsuyQC58EbmrRwm5qfvFcvB8tBpQGDt6ybLJyFjdbxSh58TEcuAdZbe",
  "key4": "4Mi1qxMdLsTnLNPdEPnzN9Q5WMJuaGREUJFeh3hqXBYonaprHiPceevXZFJyoY4UB3EKhUBuasy2vGrgtjj18xUZ",
  "key5": "4NVcq99SBvd6Xchn5nMpbE1njnUEFcjaKUAkqu3zYRWxHMJZE8kMMXmwSrixC24UT6anZMsPr9rAER1YCgk6LCYu",
  "key6": "4iPUgorUVBWFJvwV1ZxdggV53bAuzTaji6i3vzEsT5KsBQEuDK1LmWVvvaVZPPQst9yQtN9YfuYkAPuJn7r5jKpu",
  "key7": "54fBFGBVYi75t58bsQsbo7SN3gBV6PpkpCCWP6EGViVdHz2t4fDjwNCZJLz7a7AYVCtFcDEJ1ua6gfpcjkjJoNcP",
  "key8": "3wHcgcciv9LAeXhrNiLMJyRJJpBYpMPb6BXU48e8fXr2eqja1Y2LprNQ2bS1i1LiKZTEFYi1cB2sEyqZeZNjfKu8",
  "key9": "52Tkiu7kDVBwaEJX7hcZriBPa7ywiHmFifeyCeVrua5wHr1ewk96jgRZLrAjVLts4NMBJyLdv8mnczvQQk498YbB",
  "key10": "4JbPDwPA7G9RsZm2maPygHybvQ7ueViqpicPuFobDHwYCKPA4DKnuVZgHHXuBNDytEmiNMtiGzL1sQu1QdQ5T1Hk",
  "key11": "5WFrzHzJBigzt9EXCCDMVHG1boMSURYjEoxSKR2hC2yvq25nJr4bSpwWZQU6WRzxMHAmiBUEQEE6ieFwMJs6FR8J",
  "key12": "5mFckUdnX3Thv6v4VTWxGQYNEzRsnX2228ycvAC4Cko8RN8E49JxHQZuW3aTTjqrRN1fsgE6K1a7tDe6UYxKkbEZ",
  "key13": "35BsAH58SZgKq96qmoxqU9ztP2CZhq6eUku9h6rHSSks8gBMnG4QSHfkEK28Znch1K7fckCdmwQ2XYxJf4wxYDnK",
  "key14": "5gzgndr86uY5tgYxVuWmLRcEKbbRAHMTpeAZg8D5Ly29NtAsAcQziDfzhXvSm9RQWKsrMssqTnn1TNp8ojigqcsn",
  "key15": "4gv5HP5mxbSgghE17iRSzExP9uJbQ8kUsa7wa1fTQtLCXauQt37r9erLV9gxzDz2t86j6fQXdX3D8PMU2Mng4Vmq",
  "key16": "65eGy7VLwqgqz7rvHk7ewwEjnTgALdnD4xRHCcNxFExP1rMtobmwH4hCUvuBw63dKN9XwkNynJiCBfm2KgrQMAuy",
  "key17": "61xjUsKgYshcXswr2WicjmAT58q83SpBs585YzPTruaLyXQPhW5oWW8HYBaSf4Uf3abPJPXXMsYDHV44v17GJ7wv",
  "key18": "qWCACpVYZNdLRMb99XXrPAWxCszCQSBtZcivZuvjtSAnW1M8g1Z8e1X39ctmh44Bnv15M2t2U9B8k4mSA3Gg1VZ",
  "key19": "5izZXYYm41PDTBVGbEF26n4hXN2hNkz6t74uUtLzBb9qFJaty4YZJXwNi72R5X6wKa3dRieMd3PDvS5QnJzSzpWs",
  "key20": "gjE34Xt3Xd5o1y972PxCmXgt9iA7XrspnSzxH9zVazhw6KSRvZTEg8myTHnJTkjjWgU4HNs63yr9XrPyp88wuhX",
  "key21": "65U3UmUcSUriYtmPzeyfbRT6MtYrv3n1WHpNCXjkii3gUKCpkBbTBEfwDqvsRfb2bBW2ScQ3KpLQz8PeT34MN9Rt",
  "key22": "2Zq2kNTfpkV9aBu5RpSvAvKsygCPj2GpVCX99NnmuEzYgvoKkGeDzRrF2aSxNYBrAGh2bQi1TnriB3s3ngTdwDUa",
  "key23": "5EtZViVEiCAc1nrw64wVWsRNCjQGrtYwfmvjdoE4pQwBZ4hgsehungzhc2N2S6X7SZ525d5oL9AifpJPDgamNRUJ",
  "key24": "2rvXKHruPjnFtFQmCcBXeD348dkQQBiyDeXTb58wVFhkdX8V9Wu36yu7XChMKho4RPSpqM9Tbyg3CYfATzfwGuiP",
  "key25": "4CvL25RSwBuA2fPoHrCvLNb4Ury7Hydn3VrxMw5ZnMecAYzjSDepQkGSLtixZrFfRq8QhUsFoqz1Ne4GWXD618jX",
  "key26": "X99Fb2nk5C7DFxPjTAAeaRjdXX2kiw5xcZgvuv9QVRhXmhYy2tYw9cbaVSmrSRTzUjLTNeyFrpRNSY8xXHmBLnB",
  "key27": "5J8cRWZDKwz8w8e6mPw7ikSoPz9UvoXYnTv7wGw2rUshLr7WG4cftmaKxyCBcKgzGMKnbBLWMoCWVw5TU5CREGKL",
  "key28": "r6qjfNX5b8VkLS7ncpvfCLnQkhsYmRutLuDUQ4ojyGUo4L5FCf6omxktEp7LVQJBJUmqrStGqoLTh9PsYkU8muQ",
  "key29": "3iroHfA9d3CBuaakzTk11HqAysD4tsAbrJRnbixLEQnjQZb55Qe6eT9TsKeNKfmJPuE3PCUFBfqDxeYrWaVDhFgx",
  "key30": "cLcpPSv1XueNe4VhNW3j6BcyrCrskqaakVw4QKdsmqwiso9VH4ZfKbtgJDEuoG34Ayf5LXdv9LVefH1wz6r5xme",
  "key31": "22948iUjs7t9otYmt7BPJjsi2degh8TWRRseoZKVpDCuEEpncnVaRC1h7dKu28Y92Xx8RJ4xwhVFqCAGwTrfRJEM",
  "key32": "cKUUdChdrUQ6cZsGbzyJhVinGTkFCrv7C9DKac9YdB8TQmmjamXhpGdHbYTLMTUtGt9QXkiDK48CKtXfVHLA1N3",
  "key33": "44smjbfL5xzPDWysT2utUSdPhoHevf2oj66tFYgenqDVtyme7hamVeTkdkVNtAKeQs1nrQckJ8HG453JjmA9HGx8",
  "key34": "EdmvJBmhrQPMZ5rUMiKMQnbq5VufSNwzGrwYHUEuAGBJevGW4R3gRigr34yPhmir8ThxG2EBhC5DcBMFeqyZdnF",
  "key35": "5EizT7es3FGVioxmiKfHy5VD7qP4eDR4KcChGbAX9FTF8LpNC3CfojxfcmWXXrNcoMewg3ze7mv7tCB7kcyfdejd"
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
