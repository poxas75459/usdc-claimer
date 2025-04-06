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
    "3baLssKfu3bKQu66VfEjSLBuyATUNNFu6EcvTXrA7iFSm9yUV5xXLpwEUSmESaBojebFoyHJi36mPUcJCh7ivcHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eW51oJu5K9YhZ42q9b8aaFJpwUqrCoz5eq5eST5NJndNaaZuvZ4b2enqzQdcA4uhx82SkvR4CFGcndhyMJrAuff",
  "key1": "tuqHUXP7EF61fMibCZaVm45bA4sai56JkvL4454pcjU8ZGLgoWVAmvynwp5bY7M5QaHEFU2yXdyuHP7M34q3RUP",
  "key2": "Hdcoi5zvWZGhkAFBcwMQQsz4uakxvGtG5YNk1La6HrW6x1iDfkE9pTTKhW1hXRqDkb4r2W3g5RGaE8AQrEeBmbq",
  "key3": "3mu9UVXf5p4uQuD8aXY1fRVhgP7rSzKimgtU6kXfiSWQK7m5R6NyQa8evVgxVmMZfBtKuZUjFWf8Dr5K5aeb8y9P",
  "key4": "4SctAZj7wpYe5gf4Jh78oqqDPUKRUnT9CWvxEKaH8NF5PxREpFd6E6uPhpUe6xn9M2JZEAghcjopfZ1Cjyrws83q",
  "key5": "3vjSa3ubvmXebd2vvM7f4jdJNt2UdHospi5TjmjRLDGUDUb3BhEEZYeAYYpvnzuhx8Qqha6KLdzkKx5GdnJPCTbn",
  "key6": "etmdwzUuZoxp2g192H7Ln6YbPUyJVfVM4WuuNd7x437Gfsj8wKD2C7QJLMrxr912P3vMm5AwLiGU5gFdD2162bw",
  "key7": "3vhpCdqEnE8inLA1zV73KbbtwFKTXCcYrFKBLD9kxkmnRvMEvPc46cMTBX8ULeG7L7Mx7Pf2c4Hw46fccXDsSs81",
  "key8": "3aKCGuZTHgUjpBz9N6mj5EuQpD8e2KafZqTARsTwqVmqRVezU5NERzG9ZEtKTSTPmqpSRiARSyXsA2fCQz2Pa4Cc",
  "key9": "2ez7eh2L9mpyhEF3MUFURv5Us3Q9FYtNQvxipSobUH7V143JQ7yz6WEdhJQ9ghZuScdTfxgAqiLTHiimSMTxoUok",
  "key10": "3qrLCfQ8d3yHU8Hnwre2PVhVZBRrqxnPL8ouD16Dz2XyYN96R7JZKcWZjhz8zidVQ23f3r5JWWE1CjmK7KCgZKV1",
  "key11": "4gvhmAnLs1ie8BAy4CDzkQ9ZtZaFvthgMpCG6HzJVx4Zbjp6nkMtujLoio8wddYVztKLz6K6PfaVq6r6WkgBacZP",
  "key12": "3rvrDxqmz5DJp8jYD1vWJSTNrDFb7gUTpCgtbuE46kKMiTbGiuzYv4w2DEL5XX8brMngCiJ8yzN6Eh5krrEnUh9W",
  "key13": "2bFShMpo32aH8FVssY5S4zYfRT7mw3YPBW35k4YPQW4RP2y1dQKqMMbvUt5Rousur5k9dPc4fs8PgYMBLpvbxkpE",
  "key14": "5AWg4L6X3i28mBXfKJqadBRZ5MPyUFDetPs7PwAt7k8Vtr95ayK4NTq4UkyzwQ2AELxyNN8ijt36PugvfKVgGY7",
  "key15": "4qu9Ft6urJ4ZxY8v1mtcGjothSUECX1Fvajb4Rx4UedaEXPpEcE3VS7oJsYib4Uv3NWRnrQKzqiZuEwR2B9y24J9",
  "key16": "4gex6FEew9QDFFXNzR3bKRseBsmHCG5WGefCJEgAPNfXBXuyXdEwoANHSsF68AQyxzBXvvParwgFLGBxdK1a2FMZ",
  "key17": "5VWGYqgCBTuiC4QDVLQiYpGi4vcsA5wtq4SfmBH8y4jwm9Bd1oNNneD5Z9CnxhnBDy7kfAYR34QY4VKqqbtq7z2V",
  "key18": "4tj7vmMgiS7Cqa2zYrdCV3khWr4TnRwrnbuVNKeNh4ukoEho8hurCKC9Xnv7ASHizPmFrtaS1UhoP64Arjh4n2D5",
  "key19": "5AxrzDoyZJrfjUQLCsti6FhL61HTNE7nTPjcJAv4KD1qBTbXsEYpJQdKWeFmGtNFfujoMkVyeF8bxAsVnSC6BddR",
  "key20": "3KPtoyQiFCLUnX4fq76YxbJA9qa2eLekGkXqkQT6gFHMHdkK93a4EBZ3N2reDqSLczwDN6Px5HjLxMeW1Gdfiuxa",
  "key21": "FZsTfs9rfxVHRxWHpyFNKX3SfMRWQM6xfN9RomfMN9L85tbrG7kapv95wf6pWg4BjAbMNc4sgAeXjbyD7tQ6Lcb",
  "key22": "65DAHAaf74yQCGxacJsgiCQgG6453cnbvcPttmC8Trj1wkncjqS93H99RZeofyiSEJXwxLtWeVCKSNM8SHUbDHwY",
  "key23": "5nfqp5SXoXTqmWCH7oD75S3JYQTpLg4eVCAXVnKzGXmzJjzCL8TrSbBjybshY8hLTHy2oKZgEVzotY7KdJL8H1LY",
  "key24": "bZNhNPvSWoBetE7NJV9W7XuhJpBdUmcyM9H7EtvjZkq9znm5jrwuC6QxZd2JY24K6XTRqABo2RvcZ9buj65whGU",
  "key25": "63WR8tif3VenxAg5xVVBbdi9WKYUWdyavuVhxBsd1U52Ae1y5LpFnioukJqQCmF7uEefgn4iH9TxpjcxoiR3byui",
  "key26": "3vdUSNcyBrxmbkDKjiUmrs2KBsKae7uC4FsS3tb4FJVPakryNM7MVTu1qsqP1pNBjt2jJ8Q2f6JtnBZmXzxJNVPr",
  "key27": "QkhaerbfenHBwut47Zfd54GHZDrumrkX81a8kTWR7XCfqUJkhTLicw7nBy9d7NL7E5E69cvac52dN2g1wi1xezM",
  "key28": "5BXQLGA1rejEEfj7pXSz7MdWv4nFaNninwKGz7MyuqUmU7YZC2f1mKgB66TCxuDJqKq2ZoorBbRinY71Fwwo6jku",
  "key29": "3qGKRxgpGst645CFsq2uer3Px82G1K9hJBbfYnpxQ2nNFxPEQnVL2Rd96D42s411oiZfuEsnE2P5yRKV1zGkBSFu",
  "key30": "5MVEEfXMYcYRGsbJY4nw7hJ5UV1tPWXNZGTJMzFe11Am8dYfpjgcnN2ZCbxNt1cQd3vVoWHXrLbK97r2ffQnAj69"
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
