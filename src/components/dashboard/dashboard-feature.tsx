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
    "4ZFuXjQqzTXKgNKm7rN5HndmDbokHWb6EZEg3HyBRbBSStMQwq8wkWwghwrP9to1pFkKqzxqYbqKGR9mH7KK3NCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EyQfebUX15yMxSw8Hs4mcGdWgF8wLpAKKTyBkSamfa8y4qK6cBNBf5EmDjFj6ZgjUZNLJQbswucqcc114RJgLSf",
  "key1": "KuUWgj22pno73Q72JHKg7Jc4NYrwXNnvaZsz4fLYM9UHGGCpJKhyxWq8RJ1WzgkDTR2wiZ3nXAtBXKufLs2vWS9",
  "key2": "1PUif83iUqUomoaYtkHQyei8HMwgKUagJ3Jx9ztvDZiJ7f45qy6rZPZgpXCd6a7XWnTdsPTqPTk62Fc69BKmK2q",
  "key3": "3k7wZuuvYyaRSBG9M5bK9avuEfP5u1yzfPFrTJAoq3taaqupPZSBnfcCSjP3zu5ad8fFihHqMDv3PP4yBurNakYC",
  "key4": "5V6uTcFA7eFY2cSGU3LiFUeXriggh8WTk8YSgQaCUjP5WXiqs4M3Voisj8gAWyNFW3S5hPrbWNwfsMf7hVrXQm4Q",
  "key5": "2xRbB8qXQx2RLkWFZEyLcz8cJvzPvBn9X8CL2yuXwm3SJkEiZivh6i1B12hVJnMsRy88xc3A16rNsm3rQMrkW2Mo",
  "key6": "9kUSK1NXi6n959Fr83b7n9ZPFn5rcik5M1vaVuVH3JtKV6fRnrE6633R875KWdGPoPqRoa732iQtWNEGiNUxh2s",
  "key7": "4Q9mNBp39ujxQthNydNb11z43p2K52Ck1t58dE2q191gVsGwFmCkv5WRjnFZGLkSD63UUJmuJAm3ZKYDDBH28Fro",
  "key8": "3dX3ATTvnkrKCQsFEM91DK1geJLDPe1GbxAYw3ig4Zw36EyuA3LNtKdGLac9rD7AFbmEMSrHv2p9FkMTts9NCKtv",
  "key9": "5ScRrj8yttFwHSQwx8FaKipVkrTB5ztmpaEMiCbpZxx5Y8DPg9MvXpYQTE9K6CqLJ1ac2edUbDWdXLC93MRFs1Y7",
  "key10": "FQNJS8JLYRNgsmD6eJ4c6WViy529Vnuz5qSVv27n7RJAgTsNuPGfNbsswfzKJaSbUGH4iprcw1RzKbxtGk4gsuR",
  "key11": "F9vc69JnUEswzMh1BJAhYWhsYzYYZHftZHNnwcLXdmGQJcWm6PGRcMjoC1o4a1Gu5it23pwKzC1WWNeMHF9rbaX",
  "key12": "2PXMCMC1w5NJipXyiWHkVWzyJpWTqCisik2i5jKRhNx9TmcmaFy1M9Wq52FWYvh2YZsZxHbhMtD3rhejcCppVryT",
  "key13": "2mJYdxnzar2pye5NuQmB3sT36SambLaWE2Cfbs8Hrw77TfVQyTBsZg4hNA6DQW5ct7gT46iyLYi7PGjJUJtvJHB9",
  "key14": "5DRrusJWwr15uWBWwPq86tnDtSuxNBh1qMozQSY3nMB5rQ3QGHk7ufiswfFSTegrgQHssSdxnAdTWj1hDcxWBv1P",
  "key15": "3JPxgkmYQVBNMrsVXdCygefRndKRBHna1SidHHStFwigBGeLuS6Tsz7dvPuvwqJ6jaMdBUXerShQ7yHk7E3yhUj7",
  "key16": "2WcNoV287K3WZMvVyVad1xcGrP1Pae8g5X9xwsXRpMxkNNUqyXRRdis29tVdizp2upZwxR5W5nwesbFFuKrwedm6",
  "key17": "5EQigMrffMdakQBpznUvU5wuMhYPmJqs3CGceaE332ejf4SjyE7LR5AQv7RGU6omAmM5whpup8rYaUhVeJrVWmZF",
  "key18": "4aWFr5c1R9dQVevM5PmhMbCACLybrz97MxFqy1XEXPbPbATDtPqKTpbiTwNYEVfYxjgtnxF7VGTiaLgPtERoF5PA",
  "key19": "2uarSXbvm92mdhpbDa166D1855MEnVzwn21q8J9Q5cfR4YcjXYYZVvnY6q9g2F8ZbUKBjCQfQBxoPQnF22RCXPKz",
  "key20": "5RFScfSZ1iBb84c61MeWpvPVZtsLxLHSj3Nhw7arzDWZpaTYDJFrrR9EKNyHCVFqsrP6At9QpKcq9tLtFK3kzkue",
  "key21": "5LNpSj2Y3CuwBNG8VDoGxY8Fcc2dCrxhktWqWYu42gVxLcoQm1V5k8bbxu4sq73uactTJRkFi6BHqQCEVHqtocwH",
  "key22": "2VLLJnijQiYjRVr28mBndi2NZLJA5mL8YNCB16DP2tgzM3PeEnnK2GxJ3zqysqZCfYc5do7YiQwDvTik1gCmpNwc",
  "key23": "55JVsNnaKpx7AtiGJXqEJKY8Z3dXjN4hHa7GrpNFzLzJtwYboYDTYdUZi2r1upEWj9nUmrLhm6SVtNPtqFdHqjnV",
  "key24": "54LLXV3edcptoMDhrzUiKxWi3oy8C3WV9zdGUoWkXMPErN2kaQpsjvnVg7ixxeFbG1RaVjqkS5Y83C5ZfGZxSqb",
  "key25": "2euBbGZPvNrSL5hzbdQ9gn8hsNGVkUUWmL7pkc5BE2MHi3qiPFxArvNv1MBumYwgyrBFeRQLDYf5rHr2W55pUg9F",
  "key26": "Pzb3QKaAP3fwEm2oE2VL8bzh7QVmbDuGzL5X4B8SSFVYurtsnQwEPHwNXyjeSfF93t5CDV69Bf5gPbRpJZLGBh5",
  "key27": "4eZBp7n92gqELG2g5sHjgP8VWcULcUdUzi77XZwMpdpTvfN74SJEhz4mUdWHugGoXFMVYUcgvaBQWtCi4mDULexj",
  "key28": "5Ez2eThcx7E6CpZFsnFMu7xzvPXZ57u6ueeyo6EJ1fVZgDZP68GzXQLwEnVsuJqbcrKyLeSbK5PUykAHqsdNV5hs",
  "key29": "4N5uTcP8xd6SYeJV4c1pHbrW9hLZQCJx7edivxahExHgUjeJieLy2DQ3DJZgVdxUkxY6wA8c6ygAvVTqMJpeF5j5"
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
