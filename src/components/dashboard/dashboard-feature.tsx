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
    "5mqnboXkPAHE1H8irvCzUVvMUgJdWxEqEgaVFNGoRMVHKJzQoVNTNQd1XKyjf7ZXKZbZvEgVK7JZt5XPCpCAfoca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pVxUkH3rE91y7bM92UR8LvFSi8aCMiCP7V8WZh2B5RGb21uKf21vqQxwCj9ABFgfV9XZcwvvufq3AqXZRxGz3Xr",
  "key1": "SDnuhjWy3JTna5Rs2dVh8LBQ2MokSaDS8PE5wQzSTxhic1sc7JDuGZwgptVA6EzTYQrrw56eVerJihiygWvqvZr",
  "key2": "3WMKFhw6XswRizJnPpYYbEPjUfDCKJEZ3f343deWAThnNPzhFVRGXDnT8BqpGg9ZfcRyzhmFwhVgXa5HF55miHJ9",
  "key3": "LVKT5XKAvDsrpFzJ1NBmRtXzSzoJ3xyS5PuQDqn9WUHKHu7JpNggpKwpmfAo3EHRT8CNxBy9Uw9qRBz73xnc9Sb",
  "key4": "2meBZD4MoZRHfzReaaAuPrJRxDJcEX7XdXhU2wm3UQXhbfTSxmGiJjVW1MP7jXk6YREhhRo7waqdmcYsaKBjeadT",
  "key5": "4v1eSfLDN1QCLFRJHFzT4cGTb19a6zKF8858b2E8o9zER9tFJ65wdLogjxjZiNE6NNWcRKSM7mHXe3pAWaWkjUpo",
  "key6": "2LqEeZM6QmHCnm5pVUxssex9GLcF4fHvtHHbwt6Fd2uiNCWHMkDLQWaZrLZXgUg6TGTsxgiv7nrd9epKxuzsVoe1",
  "key7": "9bSSYt7oYf3DtRg5Bqo759qJfnRktjiKRbz558jQ3Mq4YYvjkcXDEMoYmkvW6D1Qstt36ejkcLRkW2SBwuDRdGr",
  "key8": "2cdkBjRyWp8To91W1XbEFAM8FuHiCk4i95RiQZ9uAFywpBbVgQeJbjQu8zyizG6yj4v69RJLLwBmUXQ1z9f6hrnJ",
  "key9": "FycJZFSNBBqRnveTpBySeFbZyAUZWumhuhTiSeDvPZH7Miqj3rK5jpfiXqAUyESUdbVH6sAvNJQWrHsFe2fk3Be",
  "key10": "4yHQYgcxXfNcmHVtD6UWzFoUzjPs3cVVVECmG7ZWuFosrXMNahq6WXmxn7Hs5eYcQsCa2iH3y7ugzDSpgKczcJ3w",
  "key11": "2h4kzprsQ3JK8u5FbcdLEmRdoCxtSsv9shPmXzn6c39GCoyxMygvH62XhGK4sfiSMjfuA1BciwRsq3JbKSF3yZp3",
  "key12": "yaNKY8rfZJ1VWYMrPBGGKT4u2kYgkwS6WgBDGUKMnGD5YLxTQoDcks8EMw5UbnmgXWdeFwSpmnFbxFuvrtQ2XfR",
  "key13": "hukZLhDykwkh2e8Fqz4KZyua1dRvTXkwBnF3WyEJVspdDQPCHBSc3AmDzmRUkireeivyZ8B6Wej2VUwqxSyBcCU",
  "key14": "3vVK7HS4LpRWRwQ33xauuk6Pi1Bsw9hZ3kSnfmNmxgPEcc5DoBu12kbBpMS3U3ZA83G7cNjYVeyqycFsrHspfspu",
  "key15": "5e4HX32tnxu5btf7sYdH2KrnXanzeQDy9RZP1NqgPqxCMBNnaVkW5QCfUMrJXwm6ngxT3kaWTsWK9AZLWfPY54AN",
  "key16": "46pxnakqitUDTQeLRD3zGxQDN25rcUydtiBDLCmBZfKXVULJmHCN4xn9HkuDFaQeF8sfckamSoU6WJ3qQhUBoJkf",
  "key17": "X8WENMBzPBRHNoZ8awgDzcipTTZQwTy6RVjf8FCwkgrhTcNwDcuR6yAUuf7aF8suntgyUiDX3ikvqYLEV4jLWir",
  "key18": "4FAspHmVVPEgo6vjUFCbutvL47ezoQvvup9R1oEg59LbFsqxFh7thMrdUp3Vd2WLwiPLR24kzMrakP475najNP6e",
  "key19": "4kvj4CzYdaUJcdd2NiXhGqPyRE82qahNhhXQ1o6b7RbQDZd1YySJ3AjZR77t6DMx9GK8AZoDFbsfDABytMwHeTzU",
  "key20": "4dmH12jm3ckYb8Mz3vnoqN7uTGSTMcPt9J4Jt46VXKJjTbKn2XLHRncqF4dYVUe3uB1ebcxBn1tEPLhJ3C2mdRwm",
  "key21": "4MHw1CXtKSx7biNzBmiaN7WzBkDCaAPPhuSRJCcqHY6qiaTZPdV1jjcm3S6hHE8dMGyJrwdADc7k53FPZmNW3hkQ",
  "key22": "4474Qi7e69W2qCDkDPRQUjqKwdku7rxpqo8mfXJQ5BCfSwufoe9XWQMgDi3YSGpeGbKab55uvfZs6HVi4wXNofV2",
  "key23": "4P8LZ92VC2bAHCATnEFqDoU9fvpQzKgSmCgeRuz27LmkKssxgndhqNUZowCrymoH35GPEeoZVYHiNsfRFKPWJLt4",
  "key24": "3M8UXaC5Dbm1TSBzgaUrkwUN6bUCHY65c1pZyar9wxF5rebZBRM9kvRCoPSYFt9QGDRJsG4oeRkqcaHq3WhqpNwW",
  "key25": "axgnxg1q1mZ4Xznm7b2wb4TJjqqbjcKvuoVVrWrF8YSxQsoe8U5uk9Xgh89eR9nqq6ZQdHhLN5HPfgNeaGgaYhS",
  "key26": "4Y3PtSDZT3Ywx5DQHvBfEcvhUDSnsCznAxATPDgiMsgMHUoTYXVK7sfEU4H9YYj9c53wSVK4yXiAXJcfXTLCwChC",
  "key27": "5ovXjtct1xNT4LNxre1YzWpeWoNwy3dXmhyGJdynfjDAh2LWWFADmXm5yts8qDnnxbS84nJJx6WJ4ET4bDC7cAzW",
  "key28": "MhCt86Q9866wX46oCSzjuht1DRvKSEoCvWv9SCiTap5T9EYQ2hDxYR653XBKmEuhai1waN1ppUDA4V9UWMFj1TD",
  "key29": "5HkNkDNAE57QvUAJYpwVWPzAfWgftDJrKuAdith5wrfVuRXnHjBaauaAJveLPf6WosThiKjrrfqsjUnCHRZ7Hq2e",
  "key30": "vV4Qq1EeP2PSkFgV4JXJrCQLWAnmzxc4fuYGyNqEU9BX46Lbd2C8YKDhY8T4wWLS6oHYsknMKEg3u8XJgpE9EVY"
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
