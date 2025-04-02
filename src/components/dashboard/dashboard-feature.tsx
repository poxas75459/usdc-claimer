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
    "pXozoLj98GCFNMmwj27DvLd4rHMGSmhMffZk4wUawCEZp9xZiWJ9LtEM1W7Bah9NAWqQxAShyZdF6Qk2bBfCYLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3deq7RHk6bKjNYQkFtqKbm2nL5mYnkESUs7nC8BDFmPk4P5mbxdTfFNMgQ7vWLhwstw786pNkNjEa62ucMGmj99F",
  "key1": "4sYgUi274ZnkvKtsxnW8tMtkLoHq31YPZwpWS55RC6Vx2ve2TvgzZRL4CZvyzoGY1A5LvuvQ9yRhd3aby7vckJta",
  "key2": "37QEN1cnWe9qh1q1yA3Y9JG6oRxmxaNAhvrN5j8p7TQwr1fwYpqBXvkpapGzUBXa6Ut2PPihuAyKBsGBxu66MAvQ",
  "key3": "4vRTy9WrFd6DnYUZg8eHk3trhNGUwYXpMvgV7p6Nc7X7WJndrWRq28dQAj7VYuUUcbDLmzJ9ATaQqL5w6VwnHAru",
  "key4": "2XEEXf5Hp487fKpWWqgEhhz2zXo3JhZwaSU5ULexVFgiKDGddFhy4m8dUzfjRY5t3JGwPo8oYr9LfK4zwomV31N1",
  "key5": "5KZyJYHnzdrBS2bgERe9k7y2gggJ6b5CCQimUNtKD5mT8Mx3E5Z2BfKbdZSzPfdqHiRNXqychQ3acJz47pQKX1LW",
  "key6": "5e4VN8kHsPUejEshj3R5Fk4ungCqHNjB7RBN1HoBjK4nc1ay77CDQ7q8MRvQJfwcRYY3sjP5wTGm6GnqNgN9ahqi",
  "key7": "SfCSiFSdKzF5hx8uoDKb8kvicJbmLGhezB2L1oWxFiVjYKnfUVYexsKdXjjB9QnrnZ9TEVSiJPGjhgZmPNYyUGe",
  "key8": "2twiQvuqUdbJj27S6YfAsHWPxL6vynqo2M6nQyCd2z7czeSRLphiT4fVUAFLhb5pdBRcqVsT8GNfXCZUwar6fSiC",
  "key9": "2g9xE21ywfri6s29psbpuBVu4DeVMMT4iDsBNWdUAi8fMY3zc9qJY4UE5YJVbQSv3r6ed9p8o15zV7jU5fQoauuy",
  "key10": "2ycNDr1skKFU4uTGBnvr96VLRmm3NJ9NpA1mqDvHUHsAFRfbSyvHKFuTU3spSbVCTXNQS9xrvjD6RzKyESCH3rm",
  "key11": "1ucub252mBMSELxtAWc16yt9D5izoq1FVQAmaxJSnMDb1JodZvAa8cHNG2q7hENxYRVvcmELxwXaCBiXU4Kavaj",
  "key12": "3iraiUL1VuAz8CLGLJgKvccDuTdqDWwiQyYA93a5NN51SKtzeTAnMsP7RfjgVE7edzS6BrZkHi3C526XGXaqc6eq",
  "key13": "3gucSkXnC3jGmAZXTbfRJbGGSHkgwo2njFm4k51pE2xWQPiVYgHu3BTfP7bmVstsqTFj9CAK1ecjAdY3F3McbruW",
  "key14": "572jiFn5EdXevVEghyU681GDa5x5y6hQewVp9jFNEdBo3SHkD29acoDi8ESQ1eeBosSiDin6pdndoLk6vLMius5M",
  "key15": "3evBxRr5NC2k8jcsMLY5WeHRehPcDjNw792SN1w413aiAsX4gVMiS2Ae6fn9uJq1joKNhY7ZLvEQMqZTp3RvGaiT",
  "key16": "2wwWnxHJk3HdKsw5mbKC2RQz4HsLewHfg5mQRjPGyp4XqQCNPyGiWg1DKpk7nsxzpwMrL7qkUE3z9xSRaaLt4yVb",
  "key17": "4tW7aZRkdE8Fub5q7BdBPp7oehmdQeVNBt56uNrEfTfgw9RhXgE575QX58C5dUJqAMBhr8p1vKDiwbub5VUc818q",
  "key18": "4nikcF6WtU35L25n2qENfzvcMLRB65qZ3cWLuQk2JTCi4gHZVLHrNu9bivEgdhq5jbDkhaVzKuUhH2sjrC6eCta",
  "key19": "2oV6jh6aZvvUX8Dw5Z6cZMz5YTQgwgD5KQyrcCT3k5UouQh36x1onAVjCgz1p3B8nDYRTQhCmpcptajWU6pLdBSy",
  "key20": "2TM8KyDRQ3EN1ejp2rQvyPWhMNUdibwoKELs5v8ESyHSeAZEbwNdMKYRG7qYaiPqYMUFfroeBbK6Axp6cHhSLwyW",
  "key21": "2DLc9y6fDpVt3EYt6Gf6xApvL29Wd2xY3qaAaJd2BBwhcqEDHhE9s6LUKVhSTAYnSQgRaxBi4mWWWJAo9VU47RTj",
  "key22": "3MLksQePpz2gtBnPmdS6BPU2RYBj8dViEH2TmpVsBUb2hrsUs1kgiokt1obhrEU3uenR1KKT3iHocqTy8UGbCTDU",
  "key23": "oSe7gyVC8sdE7bf82rfEn7fF7ujW92tZFL7dLoBcobbtprfq3DK8sQf425E9sFbQLUFQEyrXABwCHsJZjV3seXN",
  "key24": "5yGH5A4MvmgGudB2eThhBkZPEQEzR4fPGuMBfRKKDp1CHcX9ovDedfQp4syYnicrjjtdoTkLrUpirNrg5sXznZrW"
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
