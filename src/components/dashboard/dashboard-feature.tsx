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
    "2v8Ze52dRZ8UHFWRbE5vZgUxCRz7LSqa3b18zg5UXHfoExdUSpWGxUjs8zeJPQfQW6oXyKs8aPb1y5hpWQTqaZKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cxMZfJgD37J9fbmPAVTkQjeukKMJv2sxAmDWUSowFDGwt8MbXw7kzngUjBSabCEtMhb5umJ9nbu1HT3JAqh5xDg",
  "key1": "sMk1iun6zRngw14f4JutZamXnxfwLqeP9mzZJJ9JxJRAuKd4W6TnHBDt8hhff8WPvo4xpebwi2Qjgs4K6PbSJhb",
  "key2": "3CYwqowzu3HJ4qW9mBxSwwWZsygeGZv7NoSFVbtMdvY1nD25vRqgeQtuZeF56f3xEm7vxqyxErXGmMsBHztDxni",
  "key3": "t8GW7opdzueuc4LszY9GBZ7Nqbt6YNjRUaw6vZaTHRWwdJG7b8AxaS7xsnZacdTRnerwnsx8F7JqTmjGa4Rbzc3",
  "key4": "4qyeBTrvCrqjPBLvmXQj2xdEYhu8Eqm1UGkz3JJxtkC7L6bLRKXDEZhLK64h42b2cMGX5Ao1WNbRMnRd2gdyTZEv",
  "key5": "297mKP9rU7S1kWLNXxpiatYdqVbmFRvafjSPbsUH55T9GPDC99jE5VmcGHpZLkuQkMp8C9aEBPbzXoxjFwJaUYiD",
  "key6": "3z8qSJ97GrBNu16hFbTPKaTZ1wNhe28n2Ptct5WFJuMCTZZGRY6WZavWYgAFhtXKEgi8G4qPn9Xk3tYobbF1LV43",
  "key7": "5VbkiqThB6rJieeiTjR4NyuKm7vwMgE6f52t7Yqpc1Ycoq7GyeiWgEPuWhZJfmbWQHXrT7ah1exrX8jPtU4rwSHA",
  "key8": "29fUPL6obzSCBRS3PiiQvnHogL8Z6k9y8BxnPVu9ccZnk9b7zakCjc8CSJAa1TcrBWp2GR3DgSxGhR3kfZai9E85",
  "key9": "3vdXACmTb4ibY6RGpaDxLFg1jjCWJAgT3nJCBBEdcihNbxC7mbS3U28MJmgcUerU9Q9i2E3FxYhfLpLE6vwGNmLq",
  "key10": "xSh5B9zbPdD1ePTtNdQhpzBBhNZzoKkWrvhqDTMZPH5ybxAHgQjQyFKWtbR2nhjvqzaACAXRdMrVKeXCUKWFHY6",
  "key11": "2edkT6p7CUGoCLpyjJHD1wdgsL4UF7qyy38rRzeHBdFJjxzN6cqAuZcoYPxGDMxpf5EVDbRbDyjycKFoZ73fyS35",
  "key12": "5MeFnPCeSGqsCxW8a4pzwEaXVxZSpv5ksw8oWfojBeRvDfexRSHBfqiQVVyQf2nYTn1RCMxNfcfwyaePnkS4CZSr",
  "key13": "4yXo7yG3YMBGX1A49DqCbr7MfjC1dWNWVM1t8zFdUK49QXrPjEjLDo914SmF8wLr21yQHNonTrVZUxzr7gLqctGi",
  "key14": "2sbxUwvuJ5SYFLu9csLbSM2MCAWxsQnhdahgqRuSerrnVNeNSS5U9tLuKPddL3kQGeDR23Jie3PeaL6seRpQ8DaK",
  "key15": "3SSxfhi81Y5tsjA7hKnrHbyKXyZbghjLWkNagGQ81qxZZdBZven8M6gZAzC8pLPFLfc8PbG94HmJQ5HJ1K7LSEsW",
  "key16": "2LwdKAwTVXz9rokq3UhtcpqFffYN4H3yU7LRiDwmC9fkhymaxtu5B9P6mtkjfErhrbuULPSaYLsoP9ESBb4fdonT",
  "key17": "29BjhHf5wwPaZk7D1ifCLPkN4Cdphnm9Cus7cnB6cgSHMXkcXtU8z9jFUF8Tj9n524XuC4D9UL8AwLkQrtg8346T",
  "key18": "5Db9jidSdPfGcQng6ytu9s9af9oDnJPuMkfcnqPsfhEULUVPYPSYXEaFeDprN1qyoySeyhrTQBAVQRmnrH44p2vC",
  "key19": "3GTS1xcxnncQhTCjP1dutLFcQUtoNJJRr6XBa39RMYhJWRRECevntCEBkNFzKTDu3QU4ZDeBwkxSEH16qHzV3Dam",
  "key20": "TuREQKr2SsSBB8gubXWWrjdLgzweVrWF9QL5omKyYQuev5Yfhm64kPg7sG2jeKR95vfrwqTZs8kAHCPsVPwhUJk",
  "key21": "evfyjLuKzKjPTFNEveaCUMv4Wmq5s3YL2gmkZYcte1aMWSauSYntsVQgKJ3tKgCUjS2YrjnE7HREVDD4WceaFY4",
  "key22": "36BAV3Vu2xhZC2unQC9MQiDSNsPA9Fjma3vRLFkMMcHrfWvErs1TJQQbuuUQJR5NzZS6uBXKQGohBL86Bn2ML2oT",
  "key23": "2MnAoFF7TT36Kt5nJWNYYkBLGw9qtMrnKRsYfGqjG6eTYufD1QBGSKT4JYRiYfgEZui4F8AjxDE1MSsGorKmBf4Y",
  "key24": "5XJ5vgUzdvvwBPqX9gtKJwm4pqGexwv5TG8jLkMWbeXQDZpCLbLEw9LZa3D5LUXt1GTH2qv86h11w2W6Se22gW3m",
  "key25": "5xif9jTvgqXQyvrwDLzwobxs1aZBQDRDwrmKdC6EhKNfYjT9y8YrdZ8sC73U7ro7QnSMwUMgbos6eJNBnzXr3nvn",
  "key26": "442bVj1DzB7T2sYiPWMnyzwzrp42HypqebSgkNebByd7k5X6r4EeDv1f2pQD2q8bUDzUQThr1hc5VxZgbmXeMdba",
  "key27": "4NqyKV37NTpsnojiRpNMqxPyteomeWgTcf7DonqVxc37QFsVPhkCDz9gwo7kEFhBMTAKDr2LRzMPnPtopWALh7K6"
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
