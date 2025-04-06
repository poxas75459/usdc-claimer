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
    "4qAzdvT4NxrfPBAjVsdF4uYa7Y1U2WKFke7g1QPVaYz6PqTsz22ZvNS6kxHJ77yHE4bBma9BdGpk93SKgfVp2UHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YCnY7baYoqrXvDqQKLp8eror4AdYnGtaXTD5EYs7MosVTV6KmpMxbBCbWaycDp1GksCV7xfVW1kaNdEWMT3jQ4Y",
  "key1": "5QcQyLciocZzkcZA3H9JVfK9V9kCQE6ZiWuK4N7izgki65RF5LgATL9sxnuCPNAFGBfPTcKo3kmrYuNjX1TH4S6b",
  "key2": "3xGRQpegRNAwEHnQ86NTK9AL5UvW13NvBCHkwJGnrWxu6qm8kNX9odU8ucb4ZEY8zFewExerCp5UYcT52WZt7qnr",
  "key3": "5AiPd86YqWL44wjfAvs6uSGMYGxhEScCqMF1TdhzQkNMZ5aUHGrzGEVUR3bLYkWDkXq3Qe77F4upxrSKNpqJEsv4",
  "key4": "2ZMKUFqdVGkyFyZQWXnrZApZipWvhyLNK4JKwgp8aLA6qtTWLnJkQvDpEbcJ5qisYeU23oXo84peALXGgynsX8Kn",
  "key5": "hDdY5mMmL6tSrWTnqQqkjiDNyqMNrpGfw3SvvJxyicg7nUpW67s8UpS6ru3dRKxKHQQUwpmJabnzQRMSs6e8ZWW",
  "key6": "3EUH3CvJ53YUnf4qkHoosrD3A9hMg2GegXBydmYm9gRFF2pnhJdGJPqTpVNiEQYp478NciYEfK5Qx5rApMBStEDh",
  "key7": "2XJiKytR1dkriyt2QZKaPtzBoTipYqCdffwkhEK993Q5vjt2zUjZJwiLvZRR3NHvWjkGA6SJ7wtUNVRPRnSJMWaD",
  "key8": "N61SbijBUKDPGJouNU22oRojL6jFPiiZCti4r3Uzd4RTw3SCjPeaWsw2ATRJN6MyaUoRe6uG8hhaMdBKJ2nTMsQ",
  "key9": "4VuRaoPKq8qHvkuS9K9q16UTPxWvBjnMTxqa5k8bGzBoWsCwx2oqETpT4JNKBMnaoReRj9kEUCABDrAUN2UWEDAx",
  "key10": "gJuy21JBcifF44tg3r1mJYR4yUb2fqQSPyEJs47EU9TfE352VCUoxtxUUMK8sFiJ83b3rG8JRYYTexQZ9YyKR73",
  "key11": "47auHoKwPTcHPNc4iBPuGXca8gtov7EjidUZQxH1Lqfau3S1BwQCxcWjzRMcZ5DWr3sM6TFYEdEzxagUMB2MsV5t",
  "key12": "2jKMCgd1d6NQGD5XVhbRnsnTBVcoFPsgZdRGxBNUkoDAydd2yQBCL6doobpn1me5k4UqaZeaSAzYgBt7L6nSwue5",
  "key13": "7mhiQaxCv8eXiARma9KBZ6wuWWKwTAWVCJuuDK8BDQQsaptPTdnt8JnyGWpGiCxfAr5LfK6DpbNwaB2xNRU4Q4g",
  "key14": "2d6me5xDmfSeswQ8M2UPnmAokvzo3zTg5fS8nUpMQKtaWzf1N7B6dp2SDBUA1gV2QrpuMWimRqdfYn7K9i5rKD4o",
  "key15": "2w4uvhM8L97ZbYAyLvxcpjVHPzcGGbAb5vvTUUq8c2BaFtjmX9N3qKEsRiiLJ5bn9HDX27FhqdguzjoU8XymiE12",
  "key16": "2H2zRi4zFQWhJCPWP4NytctWoGJDGoEvtU3D2JpCQrczVjpdY7HetWdSKD99rtnkpKwRcWTtt1KYcqDjKx8nrnsp",
  "key17": "fFmrD2aqg5qwBfKuaZxKa6UgWNB6Xa78GbMSK4JHsiByEFcD3DuwyGWrtxcsw6qQE76KS61dbtHitL9CfCdjd2b",
  "key18": "JdTp6j3pq9qb3tZZg5qyKdaFiBrwECkrxFVaU29s9h7BfG59pm8Cy7k5fWHVkFceojtbFKsmR5Ug6tW3U7SPAC7",
  "key19": "5WfVzBW34y5i3svvQCAspiK7iSFV8QsAPnvzhpCCH5zQqf5vhDocPQLviwgUrARwSUrUGzs9cdJXgg6JPqsi6oKg",
  "key20": "Ha5cKuJcbvhN29CjLCjbGEe35mWSzg6wjtcxYpqe2B6MujQnZdRxHXDescXRbvsvW5i4xUpFEf6AuYWBdP2gL3d",
  "key21": "5uYs6xY7ZEJToEtaYpWCcPPz3soVPFYCjy2DcGZ7XNpX3juVZm8ouud74wemTEjbDP97EfXG7WnwgujwmHXvMoAx",
  "key22": "8bsEpeY2ebETm1uqEUU1EMTsD5XDxA3Los3pU4d45NT8MfTAKxx78esNH8kaUmUM3zvcZJVABXa1CqMQBaiPvgB",
  "key23": "281RQUS7wcgbnTmJnGhh5WiqySHuaQf6Gc1iQpacaEC453xXq19ZsJdhqZpqnnpNE83DWXNReuiYJbVeHKroqisA",
  "key24": "4Vfsa4VD7zE8jKfr9YamsQaRfSA7Pwtzk29hH3vuX8A29XT8Cz8gdYZkJgSep1d4AtiakMTGtaAM9FYPvykD1XXY",
  "key25": "4Ww9NKE6DPAt8dX1Nrst8nXbYGKdPuZgyoQZPCXFPaboeQV1NMjUTfomS6G6wK9e2K4XUMzzLPEsi2KAtMGes73W",
  "key26": "4KexhDcPWwvMJcTVJEmrtQ3RUjU3VXnzWbZsGruTPLg886w67pCUkKxaCb5ekuNGPdby3N4koKnRayGemoWz2LGL",
  "key27": "5F3XaHFZ3PV3cNSaT2oRmPMegurz9WYweMkxd8ALYLND6YUXismhKjDiPpFtMLBsdrsw7wCcwgRUv6N8rWmCxBzQ",
  "key28": "5c5hrDZMrnGUeakYpVX9B4BK4j1EaPYtSxJXt6H6zkpAfYd6UtbPLQ1e181MKBHZRFjknMDAxBFxvjNXjU4UX7oj"
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
