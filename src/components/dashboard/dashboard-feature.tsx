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
    "3htVu9m7uj9pnz79BV2tWg4yRk7ocw21WL3eWvttmmy9Yzw89UH28Aqc2uymF9UEAzM1e6ZGfAToxrnqggaqzKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VfGHhY9FbHRwYka4e9is5qtPr5pDAGQF8JPALyXHy5wS4jVsUFvztvjxwTBWBp7xB3iyUxeuNbSzH2FKbSJAGQ5",
  "key1": "25xU5rUTpzpfrpaKwHD9kwbWHYQBqcupXr8ajrzovHpWgFAMcfaPFJeFKwdiYkgUuQwPchnBAmejmNKcKAKSdUnL",
  "key2": "49sd8AQWijCdAig5T8XPYuH1KjYTECJJQiMQ23LqhFhV2dscZp25hoxR7D4eL1ZdAUhQFfLrUnbJsEDgXqHfBRJb",
  "key3": "5f8u5ASfNfDqbx6PXoQZnEQ79758ZNy6PJKzwhUPr5ojs1iQi75x9qRymihGeQj8WKZa9yz4AC69DwXo7mFCXSA1",
  "key4": "2A6cJjtRt6QyigzZYbm3A8QwGwfsjXvvvzmYhuY3i6EfJvcr4sXvPYFoL6oAEjkGwBRZgtXhVrH2PjgjQ3VwZKZE",
  "key5": "29DXjDbEwVMSR2SvRDZCWNxfE1qbqDrSQn9fUXUBF2bhS1bkes4puurA9YiLDiErfR3brJ6eC7vSDaxWcxPTgvpt",
  "key6": "56gW4NZBw5SeiMZxWFtU3FKZmqU8kLxnAUo93gDYNoqPx68NtdcKB6Uobf79qwdzG7KM4TpFDYgfeh1jA3ZRCUHG",
  "key7": "41jLxFktJf8KHrqTzTueNrHHP1oVmXzC5tmu8UvH26wErbjrzzexohFLgYzRfhLWdfiiPyeim7A6wkBhevJdZGiX",
  "key8": "49ttvbsnD6t11j3k8SZWSxqWENTAH3P7fdmmuV6JJPhsBvdJ421z3qYAMhJGykdtZqts32MfA5qvmoQncFJUQ7dQ",
  "key9": "57wumjA9A8scD7s4C6QmuBbvhWjVPAeCpazaTNcSauwzdvqdNGHxZCLvaz26ExQg1XafRWJ9a5pYpC4NQmsRUtXg",
  "key10": "2a8rq1gh6FSvAPuc7wEJQGFUhuSLuv6rxa7eihpM7Lo9X3r3aGjtLtyQuTD8jjVWgsNBh2zPifxScxkLzh5XiGmL",
  "key11": "1jESBJhLLyfCmNLtQk2YQD9HpMgshioyBQgybsoem2mSvPN7vocWQSxbCDKh6nf6GM5Kkzf4kXNxMGX7E5Mz5rT",
  "key12": "4rfUWC8CK6Gzw5G47PeeK9Hmj8i9zEZenQb13oKerx91T2y7uQVcd6HJnVnqd5pFqgMQMZmLuUxoGtirTUuCwjCW",
  "key13": "5fVwVsqPkjJHD2YHuGj2YEdW1q5M7iBLnPsbEnaRyfZTD4F7wBeVKPrm2cR1SgDZ6CohTnEQ81KF7ydorQ2tQvY3",
  "key14": "4Fhe41GjtgtA8tBdrSzDmaM8GGFDnpUCJBgSmcpomDxZeqv3Z5VAf5p5dXAea825FfomzAcTwffCE7eaH1bffA33",
  "key15": "3cURBKmst34d5xys5omBPYwUPfbAhSu742XFawrk8nzjtaeCKBpRCkPtLRqiApCPzpms2JNyQSh6KWKd5goq714P",
  "key16": "52xQhiC8N9Wpy4H9thRWkTxZU1njWr1MiQiSBmHHdUi6CVH5fMYnZTQ69QnsZuT1DK9n2FzRyoqvt4i99GoRhavd",
  "key17": "4iuwt3R4jNGkyFfWnGZmf5dP65zeA3gfywS19bw1YFkQcCYwz9gAzCQj4azKcs9jMbKYisZ9j376HDGmTnzgpQsz",
  "key18": "3YJU6WEHcrYxDRtiE3BYUqVuHMrFN9dZLmNUKM4KwAw6RqUjVU9xB415Z8eu5CeWL7MR9oshoNBrVzQuBYJuYHNg",
  "key19": "2nC8xJspwCTTv1PWicwnCPtrXoyXicPmo1WNbRaBwnEoTg6P2YTqNngS7mnesA5AWtBqq2fswq2jQRAQE5QSqd7F",
  "key20": "4RCG3rqHdeqESzKBj2MyJKQqnL5Tc17T9bRcRP2BdK5krK75CMzen6J26Y2MDHxcJaL2SbirGRb2ckSXMFCWtPgt",
  "key21": "3k4ezBDFZjfpidvemd8totXfhys6jKZJS1jkX7PqCCT8stwems5nzE7YvF2wGjizujrHBMscr6mJZ8jraSHmSqXN",
  "key22": "5RSyJHJRJDeAVZw86F2h7QZXcaaU5L2bAqSUFgnAUujVzyZeTosFp3fk4NdbmKEUWkV1mBh6j1pM3tNB7pjpKqz2",
  "key23": "5CoDGwtSU2ft5FgPiXEf4VE5nCwBoRaJipP6mSufK2RP2bD68eNiXYszXSkBNRVb1Nduaq3DZziK5JYshkNGgtk8",
  "key24": "36cvhbcpRtqQ4yZ6HXDN8r7aXewmYnXoduaELy2ZqKCjoqQFaQ9bP7TDWDuBX7RdrnEaaHEXSvYyhwYjuV48NCLW"
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
