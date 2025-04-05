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
    "54g1fNaz4itFUD9Pucq7ZPWyMk7unciTzGt2ZsA6d7923Hj4aPbzBNEyMFZBgvzNN43QP4zC1NnXtaMyZMGiJDne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zem6STofq6VyWyxcXsQBA76T1cmr7PxPy3L9UNZYcxYqnL4HPQrbn9X2egEEh6fk8Sh3ugAvcbC1tWmL3gRgNHz",
  "key1": "53JDrLnR9VmRnJV2ZZmprJqe3TWcVzxmcAMi7ybaZvv5gByZUvxqRoMkyFAHAdczZm9SrkiWzH48WGjCwe7aULfj",
  "key2": "4CAe7ZxaTWUjCCEchBYxBScLErZqPvGNpaEEqbkFZ63ZaUPf939VVo5MgBvR6MmFj3JCLFxYiLq9Z5z4XtJG9hg3",
  "key3": "3xZH6hy1QCMPxHxT68EXJn53k77c7vr352uA4KtJmJenWhdGtSVuDWjoiatnbkUYtNoc5HzboTBqxck9uDfMDeWX",
  "key4": "6rzKGgAX5EuQzjY9qsFp5UfNBNoshkBbBUKBTKM8L67r5BxU975ZvWHNyHYnBQLmaM7vbqzHk9XJ2dLQj5HHDDe",
  "key5": "2qmvXoFq99XM3cJCBM7M5sU4YkWcyU7idEYsTzFdY3cWQSkYRDuKvRNo7KitTTu7nh2aevFGxrHJsCtcGK6immrN",
  "key6": "5iHHHuyAHxEUj4F2aKxNQuQxE6eEUhktgxT8Hct26dvDK8MYSc6FVbc5cKZfkH3XNNfxs8cExHVcJKP1GG2k26a6",
  "key7": "2ecZm1qLFB2uwR8rS9Asi1F8T3hVdjEYzTLWwzgeGkGXFRkKN37AuYW6pDU3zoDcacWCsgozf53TwFSiPAjTingE",
  "key8": "2SQbpFNnPChKrmah5NFHWv9yADqxfYQE9vhAgja9vhUckQXUBnDn6reofMwPpc7MNFHyM9zJtw9cE7xgPMLx2RUX",
  "key9": "549SUFd6YXtERTgaeDFRGRALpZ3JgkjgXNoNfZ6rPxh3WYdd3K5sht3rw34cjDgFZ31jd1cH1LMqx32n1H7JmNh8",
  "key10": "67YssoyxHEACbZg1hKbBGSaiTu8QF9Tgq37Cpvr1CWu1c9v2kJiydcUwCadyQ5btP1EQ7XEoeWfJuXLsDcH12z3G",
  "key11": "6igSKFAqaCMj8BPfNFnjyKETQWXHs76wJSZ8Fw5eY7xyYRbnw7797zVjRa7YPwrR6RaGMBRXVKAX7o5xpTghhGd",
  "key12": "g2duc7FHG2BNaT34n5cqUiQgWZzt9U7PQBCyfGXaK6CwEmfkTaFNxeH2bh59GBw418Mi2ujqqFmM3SvjqiPaSAX",
  "key13": "4Kt6A4crJABGbMzdd6oDsrYD8a51JfEKQrb2otVriBckPkiHHzzSgAXgaRQM5jrvYK2hTByQHiDfbyMckig5VgAW",
  "key14": "2VMS3yi79ro3wwjk4ZAUYcDJ3rv2CPK8NuaTFnyYw4TbqSsLD39Hqsx4bKaWnapFT4PCWtd4UKS8NqRyWMeaFHko",
  "key15": "63WxNiEetfaL49sF1TKSXvyGKnTKRkEw7orBu8odXyQ6Mg5kdb4euaSrPWRKEr9v7ScKYyN1F6Agpd253Pnrgw7s",
  "key16": "5oeonDkLy7WWjKMvgYLMRYUePwdvUhJo4u78bmW4Mzooa7HYQXJAyGezYWWC1s9Fq7oSXeUKAm4FXgXNDeFHyVB9",
  "key17": "3rx3ihMwPX6rLY2hZ7SF4ChD1t4Fr8k2ApKthCb3jX6xwYvN8jUtg4G1XJ6kQcpDcbBdbpixYw3oH5B9TfQq4Mv3",
  "key18": "sSZXhJhbwKXhdwNtqz32ACQP9V3Vsds3iPzYPq5zkSZTzTCCoswkjhe3sYbjzXd7hQ8tvGMNe583EkUHKHhT96Q",
  "key19": "5knRzXUDZgQzCzSPkXYkjiYejUHTjJLD6Ys9GosRHUKWBrueHniXzqYDLgNkqC7kpeaioxYWzonpKuR36Ky2Tq24",
  "key20": "58W4qLPhEfmF6HgHHUDMF3yJgLsDjdhgmpc8ZyTjWLcWAWnfAdTDvYcJpQ27CFeoNhz6RxU7nK8T31SDGCkzcWMV",
  "key21": "GvEkCkw1CX4fewmoovw8DGmdNycvLQfe2pEoP5jZfN4dE9FCRqoSarriC6Cid5ZwtTZK63TxZJidive9nem3K9k",
  "key22": "5yBEuqC3Z1nuVHLzi42sxrc9jCnHWHQjLLzBCyDYaeJTedPAp5rj3KAtGwMDyLUzafmPrJBjpUSF8HRoW8NtLyS5",
  "key23": "58mys3cn2xPBxdHdddpzkNaK97JqQPoZTGXaiJxgErjmmLxB6P3osi7vopHv3Wwba2PVGSPuvCfGaZHJoW9tRhXg",
  "key24": "4CffCcKaQwc8CBU3XHsUe8evCYXtTc2nstueWNL1qKWu1yo7BK9mQfcERJ34SMkVsuHupj3qrQRFfRgznmHHVjbn",
  "key25": "65CncZc7UZat7TXx92oqy53UzXDUYdanujZZvGCfHWnjrkWojRm3Tv9BT8ktouZyUXHcHoyTuWGDMTfiYt7bYSUP",
  "key26": "3WEZ3ERJnfbT79QhxaYFinkpBbfPMjcQoaGwgajuY43wqkWhYzMk6x6V42FDFPiW9e4w8YFn81GoXHm8d6QAqQjg",
  "key27": "3NiKKEMVYCToAHCTKBjfJh5LbHErLq3t2eAq54szJ8MnVjWDT7af8tsaECBkGbe5x5WpeDPTz9sgKsnWcTb3S8ZE",
  "key28": "4No8FDJZ3kJZyNP3jKBfcvxoxHGmEh5JDvmFeERyLjcitd8d9pTWNBeTAKzJRHrk2PySUDLwma4AU22GbyVXWqqt",
  "key29": "3TE2Aw7yVuhn7sUtndX6uM2WCeU3Shv8KpBQrQNfTL72VdffhP4umVDL4CJ1qFhGxuf9rVzcdvMxnF9CcE3KMmpN",
  "key30": "xdMSqDKhJCzL52YBZY7cxGu9VYaXyFiFJARGrF4yFZD2ZCPPx7atBykFyNgf6yRRRQG54oz1qBPPjhi7HrcXkSp",
  "key31": "2V5qboVBSSzwjdLQund9BjUmzdsMVj9f1GmT7gzVv7AVt1r7JmjH54SfsBYsSE2GphS3Spas7iC7E8jNzAKCjv1j",
  "key32": "3TtDuRxEaccvpq2BtSQbREj2nqTgbaHsDNmvay9ZX8ddVNpbwaQb8m99j3Tn5mahrbwZtBtp5ogLkeX32Sv5RtMq",
  "key33": "36oKDHghQLmStWQ6hGFCozFVLW336fHrhTtRM76UAxN3tybaeLfAFQ2HMxQmVN3sZxXMyFxQM69A4tbxvmtYy2Gp",
  "key34": "4YiXuNP65dc2LbXiSy7PSErEg1vUsapnXBesAXcZMrgKShHg89mXh9BNq4sRo5ogTYM1AZYp2LaSsgY7VeV6TEfk",
  "key35": "3vMmNxpcncJR7AQM8uGzpSrftX5HtimeKKWDXvsLUAMBxR6An3p3NLeVSmcgtMTAGmV9M4EVBue2Q5kKNTLRrvXw",
  "key36": "4kq8s3CkBTk7HV5Mhasc8NEfEaQ9eM2jjBxM8GzXfSCSDvrXXtruLhoSDCAwU7ab1uJSy8YhCECsBLDE7siWupGX",
  "key37": "2nFNo8adFsu2CskmPtWh9MVAUBeQ9MjPGDTjqpD6HMtuSm51BwwSQcgpWHMZ1fv6CNGkCdMmrnTnhRf5pWEsPjmv",
  "key38": "gGN8SQGdFFBpRcqW4JLZePQCLPaZAdRcwPBWaYgaf8g65DesxGYuU9ZPbshKyx461FL8wxhhxtGA8ePcbnv4kfm",
  "key39": "5zpcK2BvYMziZ49fJvNYMxFkfxXP5U49PDbiUP4MqDRBXG34ML6Xxqr2Ja2zUZo3aRsqLSGa3rLWWTVaXvb6RZx3",
  "key40": "7BZs2VWaLBR6KvJ5RopL5UQdN56EMQXXCb3LAhouasV6MAA51DEyyq43KnsPTrTCUg5i3MssBTcT2tdkhELHy2a",
  "key41": "5mkP1oWnrnb3YwG6RfktmiMr5D2PGwCLqqiwhbE3zFzrbSECEULLisUeTjAuhMYT1JVkJgziY3rMb2HTtTECkirp"
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
