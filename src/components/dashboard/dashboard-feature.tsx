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
    "3xgtoRdgwgSUqoFwo1fE8f56Cg7MpkuJFEZsSm3GD2smiSLZENPehACW22yF4HfAoaXDvKgaBN5W5a16qVaCHYkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oGSWikkg8vQzorMB2kPQHyUgqFREKntkYNKVsbFphHu59VQEKyV4Mnt2hFy2GVAAWdysCGhPzgjTe2A4yftHgA8",
  "key1": "hE6bnpF3BiMDzXUqzGERFD3PdpD9SUg4WZQd22N7EGaKqop4i2XCyXKz8jzTmV2xqh9z9MioAMAsHmADNPLScaL",
  "key2": "4YAeb1UDwFmwsqRKaFdAufttk1pJV5fFaZM3qYMKz7xqiatHCtLLvfRq5wwjnpByJbyM23QC4WbxVXACknUMy6Nq",
  "key3": "4RkHmaNtWB92dnR9ipwLz9chaHTaZP2ZfBk66haZcyCe5W1ATFad6ji8MMFzQGZDcx4t9KpKeJ69rCZ2Hfy7RXXu",
  "key4": "5YY7HBfQ7MrVS6FnHid6nexujkJ5yo8bGQsiznDpYV2tJwamN4r6XUxefd2W4YrYsi4XQWTACfKqK92Li8tmLhxK",
  "key5": "2MgfrNvsMoxXZaUKP8y7C9bse3YH3wDo33rpWrRVUmwcLJJWFoChQRGGuU1YZzvCzTP3mrCqGJ3FjLWdfDsmkJVG",
  "key6": "5cimvEWNFFdCqFafziG9MegbJnxkfVaz5UgMn7ZmdemyJeBzPamuN8LmJnvP4XjtWy4og7oJjK2P8xP2a1jjDSZf",
  "key7": "4VYSZCDQCsYKE6is2YLVn5cAGrYgCTuxj7ph6WZMpPqbEGsgzH2Ct5pjsFBfQfVTb1x65mcBgKBKrk9BFSRqrkXr",
  "key8": "eKq1XDiMkJdDGMX73eLjfpCui5jqgZgcWDGsrTrRzbvzBrXYUbf4RnoyxizPwtefUti2ZN9phxo8D6UgNhMTvoE",
  "key9": "5sqzZjvBMALJnULsitKoDSPxp746ovD4hboeKHzSoec5sArSsC9wUkkTAxbWxBVk84QpyuvWPKJeDbwNDRvre3wY",
  "key10": "222WURmgKdkE1Vc6zQsZ8XtYqFcoS7ohdCS5v7KutWffq3K3sgVawWJdoXGsWuNCkNXnxX6wst5FBJjjcz7o6LsT",
  "key11": "3CpG352rUgjVMYaAtBA9dRjVPviKMwtNPfv5jVYYpARcX7XmXzTG6eQzVE4AovsASuaBYWWUn3sVLAZrnUnH45qp",
  "key12": "5yJB8c1NEYPyym9bfXyMCqUR1tnYLRRkbFtbQaAvKX8kKD9g2CUwvkSU1oRdb1igNzRRqB17VL39Ae8W6x8uGUPA",
  "key13": "UENG9ChkjE1AoecxLgZFii2ZtWUSuunHrbFqSiczCro8GsaNdKneNQoLrgC1P9mx4miATH3yX74W99mwEYDz2va",
  "key14": "5RNCGgGkqkMRmwVYrAL97DKwZXr77i5Lp1CuUSahVf1vkAFNECrLijPrs6UHE9Mjuii4A3pSYJEfo453bjZuyrdN",
  "key15": "2i7DvX2wXWc2bH65iCRzbrx34vCrZpVtZNqT5nVrTKarvVsj63VMYutUwDDAzP7FLfegKT4Jz6SYoiwUdap9XRCt",
  "key16": "QLMFauuEvknaTottUhXU1MN5PjXZ4onQ8aVzuFNFPXA5nYGKSiG8Aq4Jg4cwHVV8KGxBxAvNPa9vNEsbBu232rk",
  "key17": "4cTLNxS7K22pKxdvM9UdGoqDBRmv9hQADHNqsQYMxQUyiM9iN6PJ1q6LBjJqRnzUQ7PMW9AqrRcPPdhzaMseh3yc",
  "key18": "f1aQMoLvEuBwEA2RN5NgMsuduBUQy4oN9j1UQN9y93nHHovEr2TedoSTw5kWbC1dpaNF1RLYz8ZuQV4QuF3x4zB",
  "key19": "2tWZvjA5LVGgoWNu1TM3LYBHcGRuAR9na7GaA5aF5aZBhszYLP7PuyjfCgycEavr8Ee4txxSN4yrLuw3JuFUvz1z",
  "key20": "4nKid9o4GTpqpBtnQCbGVaHjEDbsYAjG9Us8ZtAxubwekZ9zgNEXVN1aVfCPrLeQqvbRLkdrZm7EzS1FHebPS2TZ",
  "key21": "4XVheXaJ3qNvVK65Z9U4HJzpedKXtWi9XE3L1NLmhiyi2J9qS1PyeDpC4yNBYf6ipykuoHtSpdVzmCE4gt6iiMbo",
  "key22": "3UqQMZYPM8oxNbmyJ2NR1tA1PTscSfsm6MD5DujCHPFnk7w3F1h3gGP5zVAgJT1gRwvhGynETNqdSzWZX8BHeqG6",
  "key23": "2uQcrRy3m3yRbAsnGepXawP9Q9h8oNXp511NHGbiUGvtXjFstXHSAKvhEETACzD9bLo3xXdyNFKkJvr8UJiHX1cv",
  "key24": "2o4FpCD8k24KJNw2QD9Hor9CsWZfT6DJznZjSzAFTgcqEEWLPaBcgkt2jQmroivkT93pHDx54FB8JYTDPFd6Te1C",
  "key25": "VdM93By9SFEwhoQjY4fpKEV9wcGAPkzBGc3Rx1qw3859X2q2iAYDD9WuHgUb8U3t3zcNnHSYYQaiCEzk1kv4tJG",
  "key26": "4BALiDW4yATm9ake4b87jjLMVoaag2LTgQqEXM876USBAPkxFgmCKwgSu5QKtcauJ9vQZ5dAopJnKfntq7tnamcN"
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
