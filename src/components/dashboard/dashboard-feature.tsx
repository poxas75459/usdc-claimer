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
    "3M6p11r6mGGwrD4VtEAdQsCiEN4XT42L9VmjuSzf7nndjBPMLfBuV4cr4CWLH3XpeKoTv2gCt6wKFGPMvejde1Ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mGyVkrTaDDP84jW9mjsSg4dvhKjwRLwtuyGXdAhrqxYL7nYcaft7xuyJJ8tjvhQJxgEfEiZAEq59tFmWsVctjga",
  "key1": "ecqELdVMKNmrQ6qTzgPXyjx2KR3A9XH22yeDqPYETLW4PwHVCE2tEgoTGCGgjE75PhP9AE2GFJH5FQNMwovmpzv",
  "key2": "4NRT2mDA22MDT7YtkbZW9Rre4q2wo6v6oQ7SySzutxVVH6FHoqaiQVR1bbSAK8yL51QCD2FsZtcU8i1iJb41MWRT",
  "key3": "4J5UPBGYWDsEbJGPHsLQpc9B4NUGTTkVzUw9UK8wcRya1aFgpWtjoY5FkTMukLMoSqTZngGLHYFKcMVcP8mjYvPJ",
  "key4": "5zaiW1Uv5ZHBxvq6vfd91b5kHxRGQvtHJewKLS8bsJvrHYKUUfa9DX3yDi5ZDrvsZXdbw6Htb1poMCxQgfyTHqPr",
  "key5": "5gQiyAELrEHR1Va9TqjHDqh6yj5Z86FqkLd6X1gBtYXLnfSnJFsNj1n2EC72MDxZafBy1jYsDxjynXbzXU2V8vZ9",
  "key6": "4fP6Lshm4s3BGX3m1Ht8pg29pvs2aSXuoeQbMawjSfGdeCWmgRXRnKHiPTTtxpd3UNmyvvNwz8RNNdmDQiJf9zpq",
  "key7": "4A7YqZbsWCUvMGvzTUWoYLqbfHfzAdMQ2pznG3k3qDLU9SoAhP9auDVHR5porGYfarMKdSkd2ccWvEEQz3188Wqc",
  "key8": "5noDmgweTaJFwREXrWLRLYJzzZaxqUt5QPTuAjxRapHjMsS8xMsyvnurikzwQqtAq2roT6dadUdvJRrtoZTxL4HN",
  "key9": "2yStEvH5P9fTjmD721ZqpSFXDcp3oJVpD9m3n18qWJSUFQq9joKWg6HiZgoyJoTX4vZzF69zVvKY6jmaz4sUUyfB",
  "key10": "hsP52jnSmVEYH9GytRUoEkyxPwoZVQprGz2ZbUW97XrN9hpNCXj556kuXurMC7UZuDNadCYF7FyNcRvUggxaWzF",
  "key11": "2qy1Wti51s3RNoQBaJhS84fcbL8wjMvAVxxHE5mUHh5Pi1ao9YjArH7b56W7vGTSAxisG4RpiAbXCeB3EsPfLuHs",
  "key12": "5zMqLwi7b5wi2snQFUzSGGsPmjKAphN6qZjV8rHqW1X4uTEYzYiBy9sYBLXz5RarU2bVgz7qn7uDetujjEfLHAv5",
  "key13": "3vTBHhsukPJ1GtRCwafTAveGaz2P8xYTGizv3QKwZ5WBraD6mLTWmAUGkMURJJ3JcwDe3ktVD4LNr2idSJuouogc",
  "key14": "2uaLercN6gAQKUjeNxpRmfXpNQRVqVd2MzL1gnZWL9LbhH6jury9cPN5osZRdeLMyzNBBeg71JmLJ1DYU9vJ8fee",
  "key15": "2ds2VdoGTH4jv6nBTpf4PoYSxVoTf1UzFrERBfts3ZYJTNc1zF6ytNMWhu9vSGQ9qzYRNgzTpqabAiuQ4QB2d31G",
  "key16": "5oN3pZHYQapL7eiRmCAxnUhTwELFdqtxVmtmr8W9Lu9YLtD7xi5hUW1QzJ98T3L4zRTNxmBnB8jXXDjuUgz8aaiq",
  "key17": "fU3dkPTkgHtLM38yFB9SB4A6iARaXbhAipzro2fmdn9VWmaTJ4pgMjj17eeTTwcoJwYVgKHDBQzdVHRzxx76qN3",
  "key18": "hzBqXxuxJhnvcH3EGPoxCq7TVkgEuyvr5HjQNo1ZmSUMmqHdqqLGUWMyT9UJeiDZ17xLMVuDokCqp7L6Y37DUG3",
  "key19": "4adVCAwVcxxwTFWqSBLYcNicqxYjRrPBB2iRNZW64PeJZqfKkAPPQaevfDwJ5wtqKu3uKwX6XFTW7jd6kxfpaqxY",
  "key20": "xV25KCt5a9xAHt22b6dTy4aXRt51gRRBdVwnKHAQyLXLkZUmXgjLXZjKgJCcdvowDgRdJeNk5jgFP8yqLoME3mZ",
  "key21": "2b9PeTw8sq7xyi6brXv9vaZhjdazBWy2s9PbAQVZLg9YtUi8vVFvcVFzA8rLWaGaD7F8ic7ZAeq2baWSaTtYwy2A",
  "key22": "4gg9YN4KpcmYRKPVCVncPjSFZuatd4Zskay8NsQEt8i3zKSA1WVGEdqieP3vLRCPPdVduuqFJjLN9g6DZuGPHyHR",
  "key23": "5iaAjmtq3NDZu7KXqYPfBBeLsU6WynxGeNM5tjxkjoevMk9ejNgBnxw8TFXzamqWJ8Ut8wiunrBfVhipTDtDLNnm",
  "key24": "2eZcw7ak1UxvDVn5gHzAtxVwGByM6TxbHxHwRs8gwHPTaSrxUL9Z4abtc9LWME4L1DwYLDx8hkGQeZLghS3hiKVF",
  "key25": "3hFcDKyfgyUNWYMFBQyFut6PyxFaNo6KcaW6roXYuCxg4vZyWMskRSKDyp2KHFp1uzBGskggtFhCZrGVchGUfuRw",
  "key26": "4MZh4grackREFZuRegxWuLAfBgNKetKhdcKRjvbvyJCygqkJyXnmL3pYVH1jHvUWtQ5avUXVs5QdLiPp95odPEnL",
  "key27": "2rDhtJmky2wvpqS2MmHkoTpRB7HDnjygSd8VuUNXeB3VxD17w2rGjhv9u3Un2B2u561EeBsQEZWCbfFHWacdMb6p",
  "key28": "2vt4z9ws4C3xJD77nDPd6AsJZauypRF8KXnD3hoxN9ne4fRL44dRqTmx9yurZFWb69EbH2PtG4AcjS5dfWXak5E8",
  "key29": "DU54Jur6wpPNC77ufBgt1xW9RXpcYTtAXUyefK2usY6H72XdLBkV2VdaDBq6juNucTvZAxAnbG8KLqzYwB5wxD9",
  "key30": "2Zhhev7hChqvYmfXi8kYSf2qHmw2CqDjLj9n4k8CbvcPYkoRa3bwYc8u4e3ePwj7365Qd5jyEzdF3a9XG5Vs5rHg"
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
