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
    "5nqUT1CwMRcZEQorSFAgwdzabaSCDJioypFJ1zoru7BSA6mLDhMudNGWGatZ5gm9ETWqN2FpmjaVfQTu1DQM2NCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zk2EuH6kwZYSeiWAqtfpTwC77pYVp9pgi831HGeBW698vvSy4Hv8nQak651eGz8LUgSGmJ2B8X8TX664g5u1LVq",
  "key1": "49ju9QefZxUEVAhHdqL98Ux7UJwbzjq8dQMcTW8oXiE1bNtV2C2EBheY8rWzhz6Bgb8YMk1m7r1kzW8mYvS6Q3ui",
  "key2": "2HVkX87sGH6EwDNmdWBB1G6MsDm9WT3Xxp64QSdCHX5ZguqZd2DpvTqzt8uAZG8L5vi1qx77oKkUW7bu9cUTFFxi",
  "key3": "DxwszbmaXZt4sRZT2UFMBUvNSgj7QSGxEJd5CEzm9975bkCijskgEcxZr5KrhSQz69mZDXC4feWmFMiC5G7hGgZ",
  "key4": "qXN8WQbQTDB9JxFRAWoEszW5VY1d8UckQ3cmW9yfHfYdo3o8JdqzWSNWsZK1FX2eaQBx7y7kT9g2WicL9T5FVgf",
  "key5": "2GbB5C1yCuNZfVuYKYBgiqy39ojErqQW5esAR4AA2Sh68ys223eZQFXHx7sPiQuUKadB2h9fWjxbRyzEvbhgT3kE",
  "key6": "5ixRQccFhj9tbRGFuR6GU4H12HH7gwHMSXxK8z5LBTSacGp2UuRPXNGTkLsUZM6SS3WFpQpavfc3YJMqfW5RQ4ZH",
  "key7": "2jHxy3LFpa5CsijV7XaJdyJkh2GSXLMcH56mkwL3dqvnUy92yNCWGfvaFLQmBwhLgiPhGPGsEFTmZhZA9BuQwexX",
  "key8": "54p6uoSbV5hydypYC3iEyVA77jPiDk9Y2aBAZs4sGhYjfjVmobQJ4AmuQ5A5KNrVBRwcwDe2NbFroLF6RkMWeeUJ",
  "key9": "3uD4Rd1mwk8L2VtTHCXAK5yxaHSzMJZUYDmFXJJ1wvgSVhTQGb3KTaACQG5LeefV5eG7soH6EBzKHRU5S6N3MBNS",
  "key10": "4ctBhTkgTYDT8GfFT6snjqjnNdNpRUU4zcYMxTnpiSTA5AmKrDNN8efnSVieEH3b167pEkeZfAUZzoMNHhrm2cT6",
  "key11": "4KEkdy899Wi1fVeer8LheBxV4ZamCYuKshaMjhk73sn4MZMHxKWQSFdhGrATTTEd2Qib724sW6V29Dv2EkVDGD7S",
  "key12": "5yMcsV7EJ6mNWfN9ZjdtxbbPAR1AeAtN8qtxqXLB9oiZgz1HRc5sBPveqf78HqjaHanmQy4oDytvFPGKKX76whrx",
  "key13": "2LK6bNoUiLUdwZRLfzQpWE3X3VUSWjXYzsjcfCjkDxYJa81AHQwnxW8R2VapBVa241GGbv36swXEk654PsfBKKmo",
  "key14": "zDz71bxycohrE38soBWKxr4h8dNNHTVPsKw7DGY8mKnKzCeXuPNnTU8DGY33Jjaxy3sa7C6FWeo9tx6Fgzz4Ge5",
  "key15": "E46q8GMoMzKe7pVDPg4sq9CrVD9HhHdGkyMYbbpEwXR3K1q23K9BxrAgP8kewGcgCFo2Fr1WMnBJUSztAZQCqdm",
  "key16": "4bVtw9a2kQSEcQExtivEArgQKt2y6uquhTa9irHfsodVtTGWByuG2NUp6vt1bZF5hwLeiqdtUnfeycWW6K5LVJv",
  "key17": "3nx2Uwi7mkw4Qh3qZzPHPbXQ2GqbxEgeH1mUQUo8vttF8Qf5YA41SsqEqDGaBB2Aii9TrwkwZ5ammHFY963Qdkhr",
  "key18": "3pYWYTwV8TirMbwAiAiiaAc7bTcpwo3NRRLD22NyJsUScJvbfsJfeTnqN62EzCjMBBsT3CV1vMW1feUEKgPiCCx5",
  "key19": "54dEvb4gPq5nNfhnTbQTsYrwZCCQXETumEHWn7brRx1MrJrFkzaovADk74nc8CjJE4vBeWZ6TuDq6kzWaJ2LA9G6",
  "key20": "sqK1edkMWBihtyGRbV2iTsPbi8ahtJsHLECqTyYhmBvMzxdr1YafGpT9qT7yg6Lonh6DFh8CmZ2Ksn6JDQMTQSq",
  "key21": "3QkUbineaM71CXeQgjWVh6AWdxb66gaVfkrAZKfkJm2jikAVu8Mx4bwY3hmveS86JToA69ngvKYUW2uGWuY5Jjs1",
  "key22": "4eNiracEqAiu9fS7TTBWzxsNEoJSpk4btsB77fkrdLK9jJYWqroe8cC7E8N5QVGK3mRzn56QLLKcJjZ1M45cnF2M",
  "key23": "5Pdadq5rjhVAEr1PP2KNemKje8QGUkQcEraz8zVy5QRufnTVZdNTQFSeq7EWcbPczzXviyooSDmUBUF9YKdFsVSE",
  "key24": "2eQGP8AMtUMUzPtxYr7MqQsw8EKmPrn6d2dFXPpxfgmpUUkpcQtvBQB4rZCrpcs45nH4AsMjcuW9VEk6GH5VTr84",
  "key25": "2hNocGbKkhmpvuJzEYGna4GDVY17Wqze6D4g3EEwNQzMCayCbyd1mhX6tAJYNMzAFA5jt3e13ahLUQyqzh5sLcJi",
  "key26": "37Fkx33w2YTr66Mr6MtJBRQc1wR17LLbsd3w42bxgrCw347fXionufWsm3gwKHkxj25uHBkG1JxTG3jBXArcDedq",
  "key27": "5HEiKHyyReVyoiw7jQPjBh7AgWNmY5REMr4MyWbLkCowQcVW3bftRA37bBwJ41ZuB8R9B9NeHGwKd4LaMAVRdvnQ",
  "key28": "3fGteKiVGsCuaANQUCewbGyB3ez82gmVcBpidmr3TYjEQv8A8Wr4DFb1LF9t2EoJhCxX5kzqgbUjZ66BZ4Y9R9zF",
  "key29": "4gVyFaexRAYdpDX8YWsRSeWPfZbK8XbJC9rxYKvDRco5Q7AvsCXnaYWqXEX6ckK3R2oVGYqw5yPTUycGuP2EbaQH",
  "key30": "2uGo9AckQ7yqEeSB5pQAqu8UJ6vkQ2VVys5AtHc84TVrrfprtgt4t658Ccp2c5Kuhv4nHZQu6pYV6ryFMfMPuqyB",
  "key31": "28CVjNnSxPJCHvCDJ9q9reCfU5bAmStHz7xCno6BphMXZetyaUEuuqvpGXjWfko1RtF8ncoAk3VPYmU4KUi6arUk",
  "key32": "3nn2hXiRfdKc5uLTTp9Z1pyf1sfmEX7CGFNrktESar5BndRuzRRtZPiXmCSRcSkqm363J9R2naXy8hddVPjSYqGE",
  "key33": "4pTmifG9LhKqW4oZT3w8bCymcbijHcHDtRMUDmrRdAfb72WSZdgBk1L8jBGEyUKqsyzifMC3hGuTrXy1cjCBYbH3",
  "key34": "3Wfhs7fAqwtSW3AAS38vA8YfoK87jcVQffqK64JxvFW3fmxCziVdVeK4XWTnMCdrKN3LQHJaviuGppCbhVoHCrcZ",
  "key35": "34m47P2A7AJGEGMxERkiL2xyR3nRhtCzYPDeW8SiwVML62DCwL6JMvCTwYYNnFcq5Ck1YEPeNJsUa9Mc56jnAMPX",
  "key36": "2T6bLwJGmiWUjk1ZvPfum3hnVhvyWPovEDVqEqsEkyzfYVyJFYyBKycgVawHUyzyfpS28QAjDyjgGYsvRCrJSnpK",
  "key37": "4AiHhVGWKQq34geFyPSby9nqDACW6mrHg1GR2xxaJEdKLSmmZ6a3MRNTbCwhPZQ8XVaL5xMdCK3q2AWnb96bLJfu"
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
