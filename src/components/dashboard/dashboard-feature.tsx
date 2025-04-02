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
    "412siuGnx5pQinqsdAb81wezR3NWvG1Bg9ba1FwNx9GawFfR7GLe6v22cpZYwSF4VJkWdmEUy8LUXqnpoJUGqbMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwqDY9Y9umDSWQqgd4wE8NvZsaReRHWGE95DADkiZ5tBDo4v8svbRq7Ys4hY286umihXp1wHNNB4EDzvYw4EqC9",
  "key1": "3Wgz3cw63CNg3rUfZXW1uJSgod4nyjwgAG9J7EF4pZQBLPZqRcVfEJCB527U7LTucwyiWRT6kFJTuttGYLuBkTfi",
  "key2": "4bDCFfrywVDmjZE6qMc2WiRjboT6YSRrGBqiaAL8sfcz6ZdLmYGbhMugTKQSJhD9kWJCPUs17HAdrvCHDFKtRSyz",
  "key3": "2kA4bqqGpU4feNFrP7YShnQDdynMRQ4KNJJ3eDcWXMjDxHjWuChSdBaXaLvXwUukTerynfFcFuB4VVeQzHijzp1d",
  "key4": "5wfk5w9gGhAaJp9Aw8itswkeKtTN8zMi7rn9KUzyi5BJ5zR98sHJPgBSAru8Dm4FQwg934C38zTWzVYGQyKiBivf",
  "key5": "55WztNuNuUf9vVh9N7EZoNgr8RgXWnCXQS5eCu6BTEZ2UNxEkhSTwyfz6t8befN5b2zkkbxDZpu299wvBoWBM3Sy",
  "key6": "2rEC4U6NUv7bmEut5zt39qDRXQRH7K4rP45EJo9vmq7HjMizGMtjZ1FC3fhmdPfVAxN444gxKFYBbHntmcFYk9gs",
  "key7": "WHvCruHgqEGeL3Vu4eqZ9havPmKQ9oi4jqSgXxcjgv2WkWH5aKs9wDi7JufhBSbrB3Mata8hBCR6jTMJaT2MeiX",
  "key8": "3bLmTeiZX3xB3GMimr7opX8R8Ehesf1HbyGPmvM14nTq2jeotR9QL7nPL8EsZkVsCWg8CdnADUEwzS7LTWKDM3Qc",
  "key9": "4nKyubYU7NkixfPHVmo73cdBWH5JvACsYffaJRowwVDaTcTtxS47TASYxK8ggkjE8BnTWY9py18V6U1pLAtL2uM3",
  "key10": "2Xzxr7jYEYu5f8gH6C4MwvUGoSJJu3ygSUo3tFMeZZWgCJjMqaXt29Ld6PSjVneBKJTqxBpfgYTQ3RmxLMYueUkc",
  "key11": "2KWh4R6W6wiJLGqJYZ8uBqJV4JfEmzTfUvUpGADWfhNspN9rVN8mCwzGEqXk86LREk3jTDWa7tWvrSEWpCK5fqj8",
  "key12": "5Km11V31CingE3tNWiKzXH9WXvY3Feh8q76119MqMZVX6cdqXxTE2Bhz6GjbodTbjCLrygDQStYMMnJYeLn8gGqu",
  "key13": "5dGJhEZLCPPEFUh7v7Ek7ZQefvEF4Btv51q9covU8pzrfKcRm5g5xMhu3zNigYLkuhMJoHdNZjY5qi6PZHMimCYn",
  "key14": "3SqBw21H42eBRkzHfdpKVt3Cm6hFaWVCbp6B54MYX3dGvRU4VN1qvBCAq51Jh6gxABtzZ4coeSj3hSP9cnFSS1Xc",
  "key15": "TAe3G4au8wLLqDmHkt1jHG5JTvR396tU9Q6b1V8b26szxdTWtYA4MCmny8QBVxEs8ePSGnsUcDckLM1Z1bctJXm",
  "key16": "2vqghjbGAfgCgvW9Nk9EzrYS7MBeFzU56mU4WAGka74sMWGLgZb27UZAa5TLWVFJq5yG3mprfPKGNEn1KTPSsyrj",
  "key17": "2QzENccmDa38e9GHfxQKEKM2Ym6oygrAG6KMAoJ3bNQUXSk6izQjF834Z3diwmcTho5PEpJq5dqnUWtSqqKGztzX",
  "key18": "26fzPt8M1Rg6nDkDXyKqamLC5zEihvZf3PuEHyCxouBkbDJauBGjirarA4mL3dUr44tJf63H7jZme68yxf2wzRDZ",
  "key19": "LCoF4i8zEpmBZtN6aFXPLHChP53dJoCWZdkNiiURKmqr1sr1qK5gnmxsjM5ukABUPCbVjbqEEbYY26j5zDNgXGe",
  "key20": "4XuCdzUntxJ6aBTa1wicpZPkqgF68563MKS9x9i6s7PmBH4f2yjYCBWoek6UUBvWjUEdyRDAXdSdncGUP9WZYvbu",
  "key21": "3XP9ZtzYy3fCdkWBrfKXUF4oJHSF2wozdxm6pxF4Ct2ErozEgEFD9bTx3JBfWCmV68Co2rHUALRRiorJ9KhfCjVm",
  "key22": "2TwhRKGvYtMhdkgjw3i46ifgoQdn7QzjR7pdb9KKvLFnhVppWDZMu2122NQ6GZ1WEHrhoxSJHqbdGdjKe3qg2hZa",
  "key23": "5MytEkuV4aFnwdwsipcRGsEhBqWc6aB11WyqZa982NbD4qQbw3NfnFnzHfKpy8xsdYnrNJnvesB5trYjqteJJQPM",
  "key24": "25NoTLqYaa53tienfEe8sRcuMtwpRq67voJfDj8nBfxSDFUsSd9jUVJSHTELNv3RbqAMWYFU27HApz4x3hUikqv4"
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
