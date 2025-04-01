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
    "3MRHLqHTjF1tYrdwxbZmZ1smT69vcA8tfv7c4EHfzuEujqjd2qKa8CMnGKjY6P2eewPsrb7LRAHkXnEM6SWCNfHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5foktqscQiPAFL3FxJvok9RMzqSneyogiEnWwa3kBw3ycrhaSJpsTEPRHzUiUm2CKpk6FJx2AwdRzQbKJqqYV5ek",
  "key1": "49Znm1DonyZZJ7YikgqAwCuzuvo5EvZS7GiFJi2mV6TefQYCfYfBASCABEP6o2dCHYNkw9o9Fi4Ax32dUeVVtbat",
  "key2": "3ja3EippE4yxfRxz6Li3KLVn7ro8WBzosq3chbPKXt9XPFNyNdbQfX8AmuF4j9KjLRDyhNvv3zKiwaPFQb5RiSn",
  "key3": "3VDqN76bYhqQZsUuVqyFmTsVwAALAjtjfdmweKBqA7j4c2WpG966ZsG8deHVLuRz5q8EB8mxw6KuVc9iN43ppERj",
  "key4": "63GLoqo3UC9EGuhB3MViwELiX6M5222DEpqga4pvkA9NZQxFRssJiuDvj6WhLvPkRwVYqTqQ6jwfeSzTHqvvpx3N",
  "key5": "mBTPYowoLtPxWnq4HC97DJ9iDueKS69gVYkSBg9NcsVd3vZ6aE4Kz3oVwroPNCfQXa7EDB3aUwwfBBJxG3mvnwh",
  "key6": "5Nbqd4gL5zQ1wJX14m5V9Ve7kMaUycEWkoCWZccsto7cv9JjefjG5X4KEuYuxoncnJSAtYa1cvNTHGkSXth4QFZP",
  "key7": "3CTVcZMiWTM7cjPMWb3CJ1kAXJZd2fuTqXdAq8UKJQba2K95XyrErjwxYFTqMDCnRVWuo2YRV3hKVwHCfDKPCAUS",
  "key8": "5rt7EohSxtFX8XVKYVnGfLJoNNZQjYiDjxJzyFASsBURZ3ZTzuKTyzkvaadCmwv4ZsnPDo2fxmsz1jsixPSDufiu",
  "key9": "581HoBmUBi6MSw73e246A5wUvbates7o8A9yYxWpfWSfsUty8znog9B4nFNJcE2qyHiuPTYME1N6kvbhraEhRn5b",
  "key10": "Cg1vPBNBZQM5S8Gay2eCqxAtoiGdrkRBWE9gyxY9fuhvPZGQB5iLDbjkEYEnCn3FPRx4AN2t76bTfhqNYxuNGqD",
  "key11": "4ooAcDTqaypg3ygmJkJMr19QTum4zwcc4cwzAQ6KWVYWQo8HY6fistPCpTr1AE9f3BnuzFL4iW7576adHLHcYgPT",
  "key12": "2BBEN6smMW8XvjtSRMzbrEVQ8idnnn74d8Hx4oJMFQqumnFAnCeSouy1HvWad7ofYRZBvWjuhFezBfHszkV39G8o",
  "key13": "31yBfKhMsSCdQgHRruv1S5P4oJgSWePKiWQCdmztkPfRHgH484v2ejRXg6MaQX2NthFcUbGgYB59FfzcQrJftrM6",
  "key14": "48mF6F7ZF9j3Gc7bNMBfW74gbQwBvEUsDUs6ScwgnCqQfAeYXz1W2Dm9ujNAHTs7KMJDq8aQ4qjpvWTZasgH6Trj",
  "key15": "TfACpz67duRrCGazeAwT42rVhVkJncseU3enUMDvgJoDEddQsixHzTABm3Go8YEAmMcv3CK1eAPpeYUauAUkuAi",
  "key16": "3cVYihaeVceFBxYDU7TXANX1yomvt98dTq5LpFGiNTZdjr9NSEhTwWZNPvdvp7B2nJ1AqcRDJyAarYjtx5MPnvsU",
  "key17": "22ery3TS2yey7uLCLHpohtsFQjoLfmiAzA1ohtzq9Cgny5xUDNqVYqsmoaSZppRSEfGpwrnCcvPY9VwEZbByHHyi",
  "key18": "3qXLU8VxsDbtXkq2BzKMuKhKifU5LcuiMo4x5491j96PJ2oxrrETPV4XeRV5GWP5Xj3vfQQm7AgAmHS4zZCDLsxV",
  "key19": "47Z6d8A5FBaUzbFnUK5ys9NKqftFF9BuSX2gM1ENRxjTRxGwD1KdV6dYrKHfyge3HfWd821xZyrDgwuYMW38er8s",
  "key20": "4NKyFSdEERbGGugpmhuBbkuYt3KNpseprdgfJT8mKFx2TFbWP4N9dcbfStQWccqgMs8MLSb1ZV5o2s5b6K6aU4aX",
  "key21": "3xCxRtjJMgdmVFUi531NrFG7Mb8TJyRcXcudWopnSACDYxbt6WRAfCcvtD8UjA5VAUGiTjugXkWVuEy54yZqKWLb",
  "key22": "2gh2z3SZwx9ySwv2214tpwwSNYLhKtRX8YpAVuGaBKb9qLzBTVhF2cmznxe5s4uCLjiUbuf4o4dKvLKYTvPjFfdG",
  "key23": "472gh3RA6LYgdun2fmHNci2Q7sZ7yvCnZGsPMWtxqj3dHWjtPRhUWMxxBrskuAHGk7ce2hnXTsfHogfuoiXSdbsn",
  "key24": "Nmx5TZHR7ys62Hebq9EJj714LQem5bhnMQhgAULrLeyTi6z5DL5PbaVNgdZCAYHDWFWvGy3Sr1CS8obbXLCvz6U"
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
