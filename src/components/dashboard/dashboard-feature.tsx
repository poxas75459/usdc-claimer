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
    "MAfiJTqendyWveoR9TKNLz8baX5BFhHEoAJSS1omnX2TDx8YwEg2ECiBW7VewFtPCGXAQcjLeN8Uw9MKhYL3qvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJ4E7q7Qd9BvE8Zid3LUjiXs1sPsRfZtD4GLmzeGxX2csN3PnQDTbpSN137rGY5CXSv1YcakSYazonPTvLccMu4",
  "key1": "2RNL7EraUjW9AT583F4FQwAkCAuo96pHQH3zJAJoGCNQWfPMmh894cWXrih2joyEXfftrzxxzfK9ZnxcZkwqa1ou",
  "key2": "3fqY7w2y8gacrfok8FCvW4ZQdUjwMRCEAuNRejZgiy8F7GHgWJChT8vPWmBb21ZFnvynDV8czVffm4Tsj7UCFoav",
  "key3": "5gS2XQUT5pTM8y82XaHuqWsXWpNVrinkZpo1XW6Zh5JrZRL69hU2kQDo7bDSsqrk6hGJVCVxjp1ormdh3NQn3UNn",
  "key4": "26nEXMbzgax26fW1r7uJiLZCmccormQHPMJ958EjjS299GyEDt15gvEovY4xtSYzQSCx8yNySr2pqqRB7yYg8xw9",
  "key5": "eba2uqwKDa5zYG7SavtiPfmnRVdyx7pCddzr6ssfFaHWyeFgXqTFMpY44rfrzSDrrw3m32HwKxMpPraWDDV3fXJ",
  "key6": "vSneDm1gX8P4cUw3xMuF2UurKDzSHz7ommx2f2itdDYSwzBX4zgxTFQu61bgZxiHDLbvPaD41tbSdwvuMnEE7jx",
  "key7": "2mvh1SFZVfQ2wzNauy85eU24rYVXM2evLttmC6rrhYQN2xBo4WBpKMCjZp4LQwGDYK23dsydnZakjPnp1kbtuWdr",
  "key8": "5MxBzDLDhLLmTJbUfZ3gM2crPK5T7kKTSjRXK2CHZx7uYUTaReqgYtCiB6LeNj8gSkNPamJmxPgqkAXr9tAUJkJD",
  "key9": "4MmQG9tTt1KBYcERdyUuRZcnWFUwPWdWz4LQwzDrB5s3fTJAhUnBqQzPWm47bg51S6P4Q8y1APbxoFrPFeYBzb9K",
  "key10": "3A69N1iPTuXkJkXm5Ks3okxR6XyYavoaKmvbyChbDLb12GGh39mLF3Vcc6PgALA6vmEkQGqFkTB8qFC3W9zBsBJT",
  "key11": "5iynuv8gwFAKyxWmz83jfRfL2ckeUvQt9PhXyqdXNFjvJu8SNo3maLE4mkmtDbqN6gt1RUmf9kjmsMgn2CN7dEVx",
  "key12": "CvD4ERJA9cuWDkfCj9a5vNHwoia7SNJFi54g3mH48gQ7YFC9ua9Q8z4hVyYhwcxKCr6gtNfGKLgNNnN9kJK8gEb",
  "key13": "5b34NNAJSE9ZZ4fWNXB1iEL2TrbqWeg26CieVxMGESwDHG6rYLkEDLdFJgeiucfiGLounp5SnzhziFXQRrDTZAz1",
  "key14": "3vNoDfzyPBBkKe5q2ma4MHn2GyVuYQiE9ZXL2ysXjA8GGg15US891V3VVcAu7cy12bVxib3qaxTTpwt1sKWbYGUy",
  "key15": "3FXEbfBDQHkwmCX4bqwEMFUKZPjxNxGfDekc75csi1KKfQUvvne6E6bdksdzD5UX7tKScWuDJBVc8huwzCJKyU6y",
  "key16": "3ZcdAYqx56StPfih91qNg9d9UgKMJNz6M4QFNMo7f7Q15UW55kJnSQ9SYyDjdix6y8qrP8hfqDRA8pTaG1SU1x6R",
  "key17": "35acj5Tw58KZRG2QScgLQM4e27spToQBDzt2HVb8oAg1ZbzCdAhx2tuFt6Q31HSHJaaYi9ZWgEjsaX8cks76vggf",
  "key18": "2EC4SRfM1YUhVZX1MgpWYyhZFTW8h9EzHAZesCdSFoMMf7PqyASqNFssGQszEanwXMeQs2YbycuW6ZjUsTT1gGwS",
  "key19": "4V19e82kMAPWFxF1nkPKYxVvHCVZZvViohTkk3ig1TET2aNCnEvJBC5eBzhEbqkdDW2FM3UrEXRkLqFQEEgdt94Z",
  "key20": "2Pxkvh5vbrwkKKn8xcFMJZb9EjRqnC9horFVdKZ1gR7MwepWKgTp3tmggHincZ7gLAGehCAZ8nCuGHsbm2yHWp63",
  "key21": "62F8sYbeGb8kCa4eRAKNwFt7wdAvV6TQXmmP67Hqbh7eWKXMu2VrgAEnQqzeEfXaMzcwo3gQASsAHxig5Pp4uDTt",
  "key22": "4CYdXhP3bsdUwdkfyzBdSK4KAtyziYkURPw2NdS2w46D338nTPMXHLkDRCfmsmu7BGcHLU3MkxspLzY11ksYRgot",
  "key23": "KfZ5Fsc72jgrRFNHpNoeQRPjXpGF9ZyhJ5PzxJiKpvc5VcDCb9ZFA5C31VmpGNzwcYG8yddRTy6bT4WXxtm9mc6",
  "key24": "4K6JDKucwLN1TViV8T7EHbrrVgDRKYcfWCBBFgv9HQZjs3kwfquFafLHZ35nSMXFBwit1kvqFjuEWyUP5j6QcXWn",
  "key25": "3mW9CQ8tAUmAy8y1tpQL7tj4Ce4uaBt3NNPH1KzaWs2hqk9gKB6Dc3F5ZDPZ3urCyEQm75Rnnbha3LVdPoiGbp9X",
  "key26": "55njjFvPkWPYZnXrL6MQ3RnsCFnexEfG931nrYwFJ9rEYGipitftwJ4TpVDUqWfEFUtKUiFzJUUUdApFfuLesf25"
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
