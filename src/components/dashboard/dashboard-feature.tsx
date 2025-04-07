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
    "24m8fack3Kzq11Hf9kDdWBSK46xescPipHzdFHy9Q7Dc4s8XMCfkunAB2aVWGiRoQXXoVSS4ebCG9YVSUh9FLyi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iCvNufWn456bcJSiU9xizQ8QZJauH5o9Zx9Cv52zV8V9TV7pWtDqP1ipRkBPtq2jBZnW493EEW87vjBMxT1o7Ld",
  "key1": "4rTEoWdGHLLrf36TecdPKpNnLADiMiwwcfsMfYz4prFQfgY83Tqinaxrjfj8PgrrADtX68e8VGrfwKz1FnBi9xjx",
  "key2": "55ZKiQMx4yf9aaUwuCUBMwnGvQmRZTy4GrmCHVvBHFyAy4ChBiaX1HrMgB1GjSsEkk5oTVFEAXZ5a42GCbWRR6gQ",
  "key3": "sQyMAMJZmA3eqKwL9QxSZozaq5ZBXdDLsCMauGrAe4uF9dU9vWogTYFXTCpWUVqv3GuroqnnAgvseA7gpd8ProY",
  "key4": "4aJdutRCq4YKr16Wfjg1QUUyxkHKnsdTzvHffPQurQDmzWRcxNBkgRJShKcNtUTNmGVqakDxvmAiXTPSf6LjzVdo",
  "key5": "2WdaLd1DtGti1fA1cFnRPPTGZooDtgweyrGTqbh6YqqgkGswQtni4PkZ8zY9zaMTqzGTJgjanxwSeFUqDobBKzzT",
  "key6": "3cfJ4HAMrwdJcf27nr1BXfnsLyBAsthr2RZhBq8G1jSgj2kdF2XSgNQMtHTD5e5UjrVTmfFbwU8qfUNa66uHQ8AH",
  "key7": "5ri7r4HdpE97AV6cmCDY9mjsFgz8L2kfLnwr63xBNCW88S32Hx6pRa8mEsyxrSmmrrVnaW43vZTXyYLpCVxqkwz",
  "key8": "2XoFV4ERs6hNniaYQwKgyXsZvUaZqqhyb8Hpt3i4sDeXw53XqhPRtmxFiKAE3CKUs2cMmG6rPXdU7ufDbGoTs4vh",
  "key9": "4JtbkdtXZd8vGUiB6yRzxxbD5zMzkx68Ertd3w7g3gYrXUhqu2FXevDYYH6RVKdBg35SDF2yRRGh5aG4CudKZTnc",
  "key10": "F1N67jgD6my7fYMV7KpeKvfT3n3S9W8XThEEkX5y5CLabs8FFkhEwnywTyJR4SZCTLNEjikQkBFi41HLDwrqSeC",
  "key11": "4E4yf8Gbvgg6rHX1cdjjHjDnkPQAgCqRQQo44MY6vZoT2uuGzFBHzECajSSAyLk16UDfeznpYuSVvEQaYjTXL4qo",
  "key12": "6262QRXTXqKvRDHypEtgSkdFE7nXsPq32Vr6MbDkPh2x178sCpgdnX4UdfKhAcy7hNHCkG5mvyKbSfX25MgEEW8J",
  "key13": "4URsLoD5QijVDc18KigLo3StaYUCY2kX5Dt5CqQtNhBaZ1UbNuKSr747T1FtxUp8DgWco6daCjuBzWuLCeRqKpg7",
  "key14": "5vJCNpuYJUc4LXTJhfgG2pBiaQFQ4bR8UK2fWJNAKdFr1b83cyNZm5Uj5EMcW4t8Me4WGAK311ZxZoQ7TsTxskJ4",
  "key15": "2jBYFDsrqiytFpwCyrx5D3guLojc4dtvnDi73qswkjzKSWtxc1hbYuV1HKFvYZgr7hS5xDAJ4QFQqHLTPPA7h9Ph",
  "key16": "4r5bK4wNuzQ9xHeZEFgg6aQarzB2LmrYXAbm7SSc2mXFJrhHptWd53hhtxszFzyqPr4vyGNH9D5rQGD3BMRPKPFd",
  "key17": "2xEjsZtvinkA4cUvKjXdm4gdGinGHj717ksqoWxK9GRmLGNDqZ2TFeWVRKpCrM4sdTTgG4xe9Dpzi4NsZ3whfRHH",
  "key18": "3jWAH4b9JuVMJ8wc2Nwp3sKK45dtaoTJN1VvAuQZgiDWdBuph66xt3PKWNzD3tswnoWP8Dw1tRrUo1qQSZ2ZTWVv",
  "key19": "5rextnUoZVVStUD6wVdF5G4s8467kumafaVFMrjSRuThNXVRwXRxhS1CjCKUFrtQ7eKXW9VFaH3kUHjh9d63SdyZ",
  "key20": "5cuSKTssX9amMQ1V9g36zVT1yQxhj1bQCmNxVvEM5TzEJYYPgnra3TA5mEqVoQEZbocKrNriw9Db8527vS3wPk3e",
  "key21": "3onMduCWsxb1ZUFQMpbGqbqQ1U5yoSMq7ZdfmH5DQGzPxU6GTcqdQSSjn68rumfweewxRot1zMnzCYCg7BApEjsY",
  "key22": "29RLR16bhfUT9faoqJSSJTFABFHpkD4oetWhAdoYhuvJQJ65aBPFJmNHSr4UQBCKbNPpP3Xf3CRrkZxXxxu6W3Dh",
  "key23": "3prwvvb6csfZ2P3qbH7A6VUWYJWRgQMrVx8MmUjkhHnaR7vbTMsMdRqfm4yKVPuWCJYjfkvpYadTVw4agjTGXseo",
  "key24": "4ExpYrVteymSNZnmzz8Uc2jiU1iq9uzJMwbxVGEuS6dnH6SK3amiyovhBXYapDWQqs36Vy4QS8pkckxgrKyduTqD"
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
