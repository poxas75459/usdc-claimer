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
    "4XNALob34PZYr29edzSGoVHEV4Cbjw59kwaXHu82grko8HVZrWUKV8MHm2eVjwpXPiX4Y8UrAQikSdTWjArdJSCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LKCXA2fJMQdZhNw2grjFEuZWRmc3btcfpVtofpd1DYDfchn5eWzQYVWhHZJEKyy7as5sQFzqvbFLKXVcvpqpz5P",
  "key1": "3SeYFTnU5Es72QY1Ha99wBjpXrYxHzeCPiPZWRTzDw3J8gRdcDfVP12WuPLKYvxJRwN8E2CmDQUQkoWt2uCtXwPi",
  "key2": "5hnZttojnkTHkvEYVB8JZRfVFyBXgdXsuFCgCq8eS6UxgGVvfE5zFSfziLmF8aGdza6fXwBiFrEFZiH9mUvNn5ru",
  "key3": "4Vu6RY3hfPihFvpit2XKyybicGsR3gJagmKXPRNZnZw1eHG9JxqvnY2YXdvBXHbt5xRnXQ5YEkkPg9mRWBX7deMx",
  "key4": "5ks8ZewaMvvbVeof9C5ZUVjaTZ25mU2NCusX5ihakJ8mvNTe9ePecvVtPaSc9tWMrY3itzr7RCAsJzKqG5XhdfuM",
  "key5": "3M5SRivcoqwynub5K8PhU42ze9qskNcFQGBEGcxV7oUF1RwJ9XjGrBwXKnJRY4A3mHM615h9DbAi8mZoy547mUbP",
  "key6": "2kKAh2Vpj1XLRKRBTBMVTpSVWdxxGuumcV612sSXZtKCx4QJ6hjYF4DX7dcrVxY7Fh1yZQVpjb8t4e68AznKXjz4",
  "key7": "676i5trFwLDBF6DfhBxkres5UF3rGpSdCuZz3Wf7HzpbhgBBJjX45TdCfSRmh2QucyBShCWPgAUS4FiLjHzopUQJ",
  "key8": "5EtVd7gRJa5eudVdSmVV25sFqwCjqV6HtjLDMUyXwGL7bKoyQCbgucaBedNwn3HuBLPRTWaKk3WwbVFm8Ct4q8vy",
  "key9": "4r8HzxkLdbU1X6bAoNdtwHM8vfopyPNRnPzjSFHSNnRTngmyB2gJmMq3q9Gi8Nj8hQkmULFysHyzqNCu9GSRHS6p",
  "key10": "3AmjqLA1WK6RiehCDYCKTFw1cPXhYobLXMxBoAscJtSJYf9RUuDkCsdfxaAbLc6pkHWSC1cVwnVNxEQgmiMGQJu1",
  "key11": "wzNtRULMn3vHbFBiwQFbQcMQzD67Gs76N3wo4C4ZuyxGAdMVM42z2VjWv9eb1CV18gSqomgZU9cK1M1PbyhqfjJ",
  "key12": "38q6tRmZsZn2wys1xDVRJw5nW8RZUy6kKmv7kPQc8iAK26EzkTMrqAaaJfowNBrGCWLGuFGzhUukpVNg78oQt1Rr",
  "key13": "46bTWZdRv7TRPazRUP4YX2TeCBHLh6aC3ZewfnXmB9fR7vmVupqoQ3APA4adpyRXRteM7bK6uXo56fCXsHA9VGCF",
  "key14": "2LduReMcbEiuybf8eY5CZjqt1kiuYaCD2M7xVsuHrcRQQganddLpKoWDdNZZYorsPq6bXzJXrhcacvRuEjp2et5k",
  "key15": "znburF39xWmJL2fFgHUECT7AkRMB51JSQx3BqWZ3EHqQNtWPWjb1E8RHH3TbiMj6ZBXtZ3JTVEST5weE1tFjQYc",
  "key16": "3Y6fwCgWBoLPL1pnxrYitJfbgmrPkU4F9sm2pSJPiZ7MhZiXaA7ti14itgEQEfeJfascmhwTGAZB7P8QCdv8T1be",
  "key17": "3gPbiZLNHh3xfWArqjLLhdvJddxmSAijNstJ3j4tf491UP2G75yfRueRk7XnXfdfna5AzTgHdmJzEbsZbWc9W6J3",
  "key18": "jQAasyA1YDzJyPUXzm9t95deMjhYG3qxXzav4VLYe4UUvVQAHbpcsuwmhJMJCFQ5S8aoQqDmjDECfV2DobWMT22",
  "key19": "4bQS2e3VKNKMrJQQ3PBkp9ASdKAfMXisHFdWFn8Qfeiz92xUAbCuiBuyXnwVs6uphEYsoMkLTFCkjiS7SCmKh5rw",
  "key20": "4XtBKPzPLGXtKGKzNX3QmybpW2juvJin1CX4oYuTRvMaiW8dbqDzrVMTYJBn2zfihvi9MF9YkvGYbFHCfEbAXu8j",
  "key21": "583FQ8PHNmv8v7UptZwXkKxxdYErDxJ4jAkYUBU28TbVpWiLK19mwogRYtjmjdv1jner7Se9WZk2BxGS9zGNdWtN",
  "key22": "2Fg94Z9CzjtdafULHQkfiFCCx6phdE13YM7yY23JjwuFGmgeJW6mSgSM6MUBLg8ZVTnHNH7PNxwwRCCw41cSSgWC",
  "key23": "3x4X1BTM7ezmPFy8w768SCEPqqBg8tbc4utmhJ5t5bqe4V2StUBmbysHYX7QMyZhXZwbUtMeQEyjbzPRt8Si4p97",
  "key24": "QyzV9Zx5NHoLKHf2RFbEy4ajSFwkyjgrqyNMwKxERJ2i7GqdG2PcevKzWAAugpVtyoBb3qh7EPZxA2ZKnNZASHo",
  "key25": "3m6s3EUxBnaAoXhaCNycPYUVJUVAqdVqvTNZAacfMg4dnkyyZZ5zDJHPqRbLDcCQapM7T2skHQCZU1njyZX83XsH",
  "key26": "2u29kmkLLnzAzLexYCjpzRRT4eT2n5FAfThsFpgh7tKVX2XD9Rh46iDbnN6RUQaCenVjjsw1odLGswa298rq8E3B",
  "key27": "YHQZc7SCh5EW9Aque5Gp7BsaLQnZN8iCwSmG8LiqVQPbqmKTzhxDRufzv3wJZqwEzRwqjkfFV5bPrLm3rYLpp74",
  "key28": "2SzTbAVVcP2jtrV96nS9haaxB8ztr3WbeWfCNugidXTziXkzioSzh2HDs7rsPrsUrkj4rM93btBzc47fdjxRWeQE",
  "key29": "5eJ3AtkVcTiffCajEKiUSkhCWETiunadjFzgD7C2KbrmgQR373a26Rawp9qmm3MogPN2CPJz3uFAWeVvE94jgKiX",
  "key30": "2mZSvZMJHoHABVS9NgNPyrdFMVKFJzDfEjDd4WLLSkS4raKxB5sdw6fyquLeDMTEtNnnbCXzbp4WigrtRvKh6QoN",
  "key31": "3PUkvCewBFW7SriMVbUjHbQACu9anZ8dwKw3f6ZhWaw6KGx4a3yKSYE8PwJ5Rmh3WCZkCJ62P29YSHLfY3nJ7F2r",
  "key32": "3RCbyzV8k2n4kBCPVMyBsVNafTqHXjxyTzM6N6LZx7jpq2Tjap14mpVrehBfsLCsPKwoh1cfTMnduZXouf2hgznV",
  "key33": "AtAaVXtsP4AasrXZWb463aujeyZ4hd6iptBnPRXLTnx2Dj9brZxgyKuCfj4oELRKDkjekrZXdhysVD7VvbnmmEL",
  "key34": "2zq5siVwtAbUiDHUoXaxskZH5pDHo6DEAqt9u37cp4Sx32SDbR9UJCSMKkeMePr2NUBptMNewnDugDRi4P6jTExL",
  "key35": "2THxddLDPN645RThuJPvBiWvpTiNqRoT1tFZmmjryGqYETjQkXYxv77cEJTctrr1aWfQUxkks7VTTbfreNcnvFct",
  "key36": "5mr7zASAT8BmJ67dUiym9qyqw8fzvtVCPfM9BgULZgMDvqZc1rFnWaxrYLwuQKABzLPD9Kc6q2FM7uMYqECTBrUD",
  "key37": "3MsvDgSV92sBZBgU9tBw7fDxTwoHb9C7cwf9UwpnMfDZsKgYU9LDvzthWzixCgQ3gk772obuhG4YgrZzQAKKYNYn",
  "key38": "bsuXjBJH1oYTQqnnHd8VrfaDWmP6Q4s9FhDZ4HhwNm8ERqN1u4712vYpVrENwGcuuXcmMvqzK81HwfmJR7g7C59"
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
