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
    "65HFMNpYsbS4BMkp8VT1pcnRVLrUyPLnvYL1ZYH9hdxSrpyYft7FLxTfQnkH9WyHCEMPLCVBzMC77wTTJcHbf7Xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5urt8AMVnC4ANBmAqh7gpJNQNy7k4Qmwjz7TPA3XFZXAaFoaWZkVCwGupYF2UQKa96q7JJBHooCPTpzrLxabtvJM",
  "key1": "3rqd5C4jHX5zM4QGCe85s8kNeKRPB18Ku7NC1XgxjLzthb8B6GZfAKBCZzM5Zxynpv852P4E16a8XosrikcBka3d",
  "key2": "2SPKZUeX8wXoXBfmLURJi4rAnxC5zDkHLXLnhVCTK9KagpRWMUkMK5NLGcqvW5GvdFQt724ytHaEtdnN9yHJrU3j",
  "key3": "2iTh8wrghLMwyvsgu8Rzppq7fRSLsSY9KQNEifEKzT7c5d3qjYWH3T95inGUZAZ2s9PP24ZLukoxNm5mZy4z6amw",
  "key4": "4J6DrpyUR54wGYkkNsFz9urmfvyXHRqLYbMzC1Q7s9ooKz7MfpdAhSho9Cb587d3bc5fmUW1JbZY4HGXbuicKvEc",
  "key5": "5dQnMkzKEvDy1jj2mbuymsyYZFkZd1DHBcvcWkaaNf47CyM4LNgegK95UF9BHV9A279SzQ5qVQMPA28tEmaYTA9U",
  "key6": "2N1gW1YwdUhb8e4VVUuuCEskiteTSLvF5iFxBrgZaWeDw9PDQHYvJruo5DW2E2EwekhDXZNgLUMHjqp6oW25fsjT",
  "key7": "3qFaZJ9qWFjhJMeJ12GW2v8wMMhTcn9FG4io4TKXrFgLEmZ1X5iaSPPaBSzpMTxxYjx7hJGXZYxdsUCHVNLKf6N6",
  "key8": "46v5U7Ftny74nXZfa1Apdoy2b1KUwn3CjDkF7mC6v8ogv6fRw8QrnVMCCDJ21rVtF5HbEQtxTT5Ti65yvj7cCxPH",
  "key9": "5kRpg8FqvGamJuWhEkGGAQZJAmVubBzzHPZS4KyL8JjzZTXs9G9u87U899qeEuYymHkeK2zBq98E6fuxbJem8DuG",
  "key10": "MjXoUU9ncThbSgL8kzP4y3do5DyUq5P23XDz8YQN4iUEs6N1dNjk6Fr1rpdPRmgvxFsVSbUukcTHRPjgfmKFEfw",
  "key11": "3x2V3dLguCWfrmu7u48TdS8XYH6BcfDojjsBEQaLZ6RTRSK8gXewbChKCxHxAXbFaZaQELahZ1fKLyaMvUQd9ubY",
  "key12": "4MNavqCpr6pnp1V8GDpZmRevURNg5VMFsDoQB3gA96S64b8SKwGcbub3iaTXS9M6rgm1eoif1B96H1FN6PjBea8n",
  "key13": "4Q1Q8aN5yNDX1Ed4oxG4haoGXsAWwy7Yxf3nwu1mBEFsgDfSWxPeRDcMtnJ8iNqRuM4t6iFNLS8uzrSRxS4BsyCm",
  "key14": "3V6QAJsiDrxttVZsVfaQAn6gWaHjrvSgEC48JwSsPqWmMfsoDTJWtE5JmiSuPyCEdd3mdMENStFSbuV5UxxSc4Rx",
  "key15": "5RAKg641Qd1uTAjYZj5YCgLjCqwyTQiED8NXEVV9hj9ky18m3AP4sPq5PUrFJ3XxtYL37fH68AqVFBkk6E9xesfb",
  "key16": "4dgkEk7UdowB3owSSrSpKpUEwiqU9AKMBGxEja4PgNoPN7F3RvahLKsm7DCgsYyzwuv6k9WaF246dGzmcVRote4v",
  "key17": "3ZZ9UjqrbRSNTs4RA1NmDwZ2Vyx2wG1jqVN9CQHoGJxULsX357xjq5HSxjvn7ASKneWrYGDmWoLSHWJ5VNuhsPeP",
  "key18": "3JSvNuUxPJE3u9kHaBsRVzPW6LT3VvpeqHLWsTxRCRarc8QUqQLg8Tt9dfdXMPZCNsPTT6WhaPZvbZaQkgXQf5QK",
  "key19": "9wQMzW4rMuKKKsACr7KfjZSdL3t2RreTGcW8K6hj2njip8kAAWe41H7K8R3Qq3mHrgqHgfEBZcaKvREFDDQq37W",
  "key20": "3GdnSMWwqwvvZ1wm1T49zknHNcCCWo5Pa17MgKDAAiYRfyz3SoKWxaqqAriU1ARS47Up83w2zZpgX8VQ9H7wJ6sz",
  "key21": "5GdyK8qkVyj1gE4gaFJUjuyRRArpiHRxC4FZEhu3bMStWtSsMLUcuusYA8XzsvVHsKK4sgWmDSy4qJV4RXBJrzRf",
  "key22": "2JmtNHgShBRRDejJbJvBSbBuGdVCtQHVQ6sPUJQuLp3axVbSPLy6gsPtCVtjZqNEbSSQEFaxxSF4cKs4X4CiFqk7",
  "key23": "2cmV9kussZAubn97vQPRsCyYLfubmHych3BFxmdFvEJkm4pe2oYQSWnchiLUsLv1TnL9zCBmCNoUiiSbDKcCAzax",
  "key24": "5vpDY8i3h7yRuJao54qRxhi2Kqs8znZADKtsQF1yiZnjBVxjcycZNYgDfCqTsba4a6E3JCUCxP9GWRrHkhA2bNhA"
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
