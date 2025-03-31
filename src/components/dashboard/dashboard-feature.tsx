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
    "5u8FKevn8vqf9fMqoNkNENja8Ht4TKaRxNc5mwCZKuk1V76bAedxHXE5qiMQcRcAiKH1SJQj7a5FJs4X3ozQkhBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "222ZqBEqxqUyKTqUgMgBfRTMX1tWQJcd6JJfYNewE3Mmrn48ZojvEVtYnrscDWWMvSFLoik5GLhsNUghoRij7upG",
  "key1": "5c3DXN6JkXAbvXZXq481jVmHfhT6ovAm98EZgwzEsm8BvkUGjqnxmtKeNajVssw3kXqgJfqm1zFGBy7KMWvpFhcz",
  "key2": "5XdthP5EF7i5K5W6ZdJjc2zNt4wtNhqgKw3qvkJQxKrG1kdRoHPw8NCVh1YvGuVqPQ1XmTEKAse1H4dbVdHfF6u3",
  "key3": "3QU1MT3DFviXwSMsThX1x4yk3CL1Qg8zagQ6rCiRAeb1KE8gLyapa1N3xY9ELz7YZrgn6Awoq1Rsofh8BqR7d5fe",
  "key4": "4DzM52PskJ1UXqu3SmZJ5ZhQ3BdSvHBkbhbVf2KtrRC8tyxKnup9v8eBVEuS4GTjzPteSmxLXgpD624ka4UDA6M6",
  "key5": "47rJvJe6VaGDeE4ak7U84ffvqXkPevtGtG4erdzrz9aogTvUTFSMxFSmuv41QeRbjWxzMxGkDJAXcgn31mcxAVU6",
  "key6": "5VpKttfQSdeDYQG4hzizZqDVZUzZxQEMmmKEVXjJGLUkxhH2yjQP73JvZgvHLdjPYt26Gax5TNJZKxzfbqQhAvxy",
  "key7": "2UzsXknQmRKvZJXz9biUoGp43AUAkme6dkPXPipW3cUpXHetXbSzWHREestw5N3ytrBTmBPnSMkjrQMitjL6nA3X",
  "key8": "3GhP4HqHwPNud4wkTYT9aT4snBh4JvN6ajxHt8YwLP7QuuwPaEtJJodHzUKUiRUbAzzHJsA28CfLZLKHeEGRvy61",
  "key9": "2Ff7MqCgXvMaPFqSHQ8c2YUUPE59NVCzECvGTijqYmxQXGo1cUNmjAQr9YvtcSqf4tCe6k97muwv2uMYZNmFEoZN",
  "key10": "2H2sLVdQLHxfRkiYvBNKG7tbanPDAazLW79JbyPgmps8W5eWJZTmjF3a1SJBjgqqitBpnH5bkEwNwsAAjeE21yDT",
  "key11": "3eQAvSG9ifJw8615rQuW4T33eHLt37mfWDx6Zgm3yUPg6syMDTrJchxGbrRx9KUyMyaau46hMJYBuZJYwVX87EPX",
  "key12": "4KGTWwsGxHnFeRMqJtGB3yqFWRdh4y7dddSgWuZuQ416rAgS4qWQ8PqpMxB4tWLjDYf7Aj88BHD2UtEfu5ZUu9tu",
  "key13": "2GqaEkn1JbKyC9UVGoA3aEgxzMPG1k9C3Zhwop3ujg82d9hkuWbmVUNtYGSHo7hRPkvj4jxt3QvbomDBiFxBaaYG",
  "key14": "3R1onGk6YkDFdCV2fgEgHGEqrJTQgvXqEb36d8E93UJgdbvXnXT2j1sH6hexRPBMFpfXUtd334MfKzX5rJbHcJb7",
  "key15": "2FJFJFqTvshKfooMdLtUSSiDWNmxVXGgcns1Zr8w2ZFtyqwFo7Zj4JBAbNZBH7JBzMaHKsEwSojEMChGUYSmAfdg",
  "key16": "3qvoTJfM6DGzwQ56JpQkydfHgNmAUejUaLZtJ6CNxD5Ed3WgWjE8SpKzZjzkb9TBSvEZYPa45GZgbNoHyEMQaBtR",
  "key17": "5EBz8baqpXhzhgrLe6yeM2Ey42Hetdo4VsYedYQWk6ggRpfv1eFahEoyLuvWeR7vzKH2ZTwm3CVtTKKnkuSKJTEH",
  "key18": "6oizSTE5Hbs4L9FEm6SFeT95PRCGsnvkGPMXsqEMJoJcTsrqPhdbwfdxpWsBBCp9AXxa9CF4qnNKHe2SDNBo5nu",
  "key19": "2EcyQpBgtfbixqFCnjZYmmUszqto86MFAQus62gYhZ7jSd9SHjN7KcY3zx2usMfdczg4Kke7UEQyprgmmiRhQMLM",
  "key20": "3SaZxLv87GRSo1Wyh4ZxHyXxhkj3pEDWyE1y3BWtvNNBYcmocfSG661Hq6pEQi6QmreAWpVxK51ana1JEoVYt6dD",
  "key21": "pMrZkzDLm9AYhe5ZhL5yurFpfXkz9513RhDjyRqNyQazC419F3yUjHqds6nHpH3dgkMJR1XDYdqgWWSKx3Zh1bB",
  "key22": "4LN5J4GPZuukEoSvwhvU4SQjS4v8SPZDyXHzGCAYKCVWvZVVKm6zP928L5aq4Z2YK8ob7Qv9Bq4sWPiXncayBaFJ",
  "key23": "3fSJp48bF1itzevEkPiFwCnERE8jgMjq4EuY2V4fbb81qT6rL9DfRS35QADTnsFU8qbx3VmMPPoz198Yx2ofjiUs",
  "key24": "4zs8UKgDpwE6ZH95YnYvrAAy9owCVKqcDArLkdjobUtnqMB1VhU4zhcLpkqRUsgPbiyhGQiJGVJhXvu3ztH8F2Cq",
  "key25": "4wqNCY8RtytRzqWRp4Kti48RH3ReeWLX2bzKUe1DRXFmZqqfvCq8rcoDMn7jAb23mCt5Yr6dyJV3mFbPD88kqkRR",
  "key26": "5qfv4LbyKpCw7iVzmNV3GrWmhLe6BM9KTNh7ts4xqCjrih5Z9czvrMqPRjaVivJhy4u6JCgsY2GXJkjdaEmmYSw4",
  "key27": "3YpvLG2Lrma7oW9Jtj14omP3Kd1PCRnP8wY2gwT4YV1DEjZZDZHVf4K83hY1YyEpDJ5wqEhZCJmpZSUGnuBzWcmT"
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
