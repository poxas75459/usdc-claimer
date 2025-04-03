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
    "31bJGAf41mJZ9jAGgXYG3YB3ZKEWNvatH6L9ZhRxKLhpgdGgw6GrakrKeRvHLWeowWZjZ9tys5a4uvnrMoDVrBYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tNAxX93bbH5t1RegSbjvriUsm3QsJQ4jmvyVS6z3fXhKcVfmNR7wpExVMt3RjeDRV5DVG3UxTxXyemJ9Khohzwa",
  "key1": "5GBaAXhFEKvqe3birj7HBp7g5U3kHgZW6o7Es2z4vzLagvaiVMfXWY7jkXtbZYzGWuNJA8dxCu76aJ8V2kMGzoaD",
  "key2": "36xQmJZwWiGcv9NXqw2QWYhmhPPX4AyY8VdHdvGUT8XUyWEmZQYZvkxAgVpAxuA62Ssa5JkfpN9QdecfEpB81BG2",
  "key3": "4rizDsmnVbfPvQZYgKE2MnqUYEpsE1zgE3mLpdNjcMVa6cjGWjpHzkiyHfAyaDaxQWBsQam6xAyQ65Fe1ATCPZiZ",
  "key4": "E9q4UA2fFJRXcmxaSyabp7PppaPXrwpMFWW7fC5iFew2H8a8xNHvVxJKH9Ee5dW1DoYD58qBV5R8rDAsFksFu8k",
  "key5": "5zJwkyN9gozczMeqDe4h7o2RNty4wbKjyV7GmPKLULx6vsJFSe986zMe1H9fDyyonKMeUCzjBZFMgzaedZvtLca1",
  "key6": "4RBLrEEmxUf3qvcqeyJSa9tR6BUFgnMtjwNnSQuTU5LL5FvS148fiVGtr7jiWPXMHyXziXtXJRZdMFp3Q8LU6LQi",
  "key7": "425fK7Pxt5pAUDBCm6USHxYtxsJCAH3P6tgjHnFwx6yH7pHssNHhgvnXXJLSkeiqUL4gPWeYo7cdWuqb6xSf5kB6",
  "key8": "4pUHru9xC43AgjYaEPmmEwH5KvmEBK7UkWmEKmtZmjHaewaBKwmfPUsnmUp5uhdGo4nQgwrCFtFm4SEwiqidk3CL",
  "key9": "541jG46waHWjXvMUNtM3oTSfjg6jqAKPvmF72sMcNtsSdRHoBmrjnBfJC58wAfgtixPbq81QmQYJT5bP7WXVArQe",
  "key10": "5Z4bQpLa8Apna5QTvNJ1H8KmwpuTjPWNfvNGRDMcmpBzLYE36ggFjebfHueEKow8fGFN6E7z5R2a764CFZyaD48T",
  "key11": "3xrevENwuWpL6uDFFTXqMmQxvC3bBZKjhVviJy4qwP9jLQ5QWhWhRCzpWQmshKJPRXLYf7bdkGwQSZWKhRJpK1NU",
  "key12": "SfQqcoLh9w5w2xje8Cq6hB879iSebk11rnukpL5mHBLh1oR3cFuxnz4D3DG3kLUUsq8mroLyUj86dhZSfKXC1iy",
  "key13": "3RYBkEKEmu3KcJy9knP6VPaAQ56FC9PzyhLHhTSMqrNpkQ5ZZncipHaVZ2iYvvAKsgCyxQbrWcSmQBBw6Me1EzCr",
  "key14": "4DvBCGHqBozUd8Runj5xmAooqv3ncio4WmsrS2e4rhz3RM65spQQminL7HUUAdFWcYFvQwUj8WZBwbxUA2ME8Ejo",
  "key15": "3fGsEjZqsBw6SExq8zoyZrR7VBF47f4nrKpomq3XEx6xZNnY8U2oxceQh8kYkGE7Q2Gb6L9NHdF1AEJ81R47MLm9",
  "key16": "XeY58hfYExD7fmhsoWzitgMoZeMsnpEjZkzBY1VwEMAdK5D8CeBsUfc5C9uujebFLQvumVbJWd4EDYRX7Q4iUhv",
  "key17": "rQnyc26cTWDBScSnpfAux2yMN1ijqScunSKgyvv8zfZKnio8eTuhgHxVHxKFJResrXX2UMwPZyhsiYNQD2RTgFo",
  "key18": "5xbv7cfhWfF4tWCzoo9QrqmfMvRw7gc82gAe1CrvA1J36QXNLbUBjbaJ7Ak49NYimVPUtpwDjz6Emx3iy3xJ631z",
  "key19": "46y7KeEpzt9KJ2oGQtjtnjiqTApB698FRXW3tch9b9kDntzHnvfwdAG9uakCe7WAQKKzvCHzHnFnHZ3opouBRx9g",
  "key20": "ocGFguVK1tY8mSBz1EFAQnDQDc7VaVyQcfUAS2NiRNesVL1Vbb9WZqYBYYcXK1ehDw3bw4L5X7FR2fpC9RjgGug",
  "key21": "63jtnhCNKDRM8X8V55wiCbPzWuBueJBj6pWjxi9DsrFRQAWtpfJKgarnixnx3bW8F4F4xdgz3hnZsfg3h27L34tt",
  "key22": "3fr6k5uDwp1wHVxs2TmXMxpT8P8TvGZ72MmWf6m2BzfmmCFrZFGy9d9sAp3xAC89VLaD545yjG4xUPphEaA21ARF",
  "key23": "g52PYTdMFuxypuHKJ4ACEwkqE8kf8sH6hjnfJwkqRVdg8oyv94TZeNEJjnrkHEC5UjpX34fA6boNbmdQAjipLEj",
  "key24": "4BSd85NFZ1vFY9Sfu9PM3zumzn3CtWE6orrTjrJtJMUA6JfQntg5nrUAPNDJ6beXzRRojN1w3ZXoXfGUp815L1Vp",
  "key25": "29ekSRUG7tnr6xEDuG6gPWDqGQv6A6kvhAhPFxonyvMWvcV5xTaN57xmGM61cY7KcZUH45Xz7XtUQH2ERCCCzzhu",
  "key26": "2BQCxUoaPSFT8jZUfkuJoMvEepu7JMJpsiMX7ETBMPGALf8Ly12tgfAYYgmmSZEUnuPaVJkEfNEAKWFPwEeKTv7b",
  "key27": "4bsN6p54G3urZAv2zjZWEQ8FNjHKuRzUxQhMnr7x3fzqRW3jgNwcxRVdoxhVSsoxC9RZ6KKSUL4bn2KtRtScQToy",
  "key28": "659ZMbiASGNBCu3CvvigVFXQ93uLvw64Bugrg8msXKUtkbuHwFxJ2CzUtxTvrvJQPLzvm6a6YStGv2PZkU4gu6pY",
  "key29": "4qGoeDevBeWS6sXTsADyWSGw8zexYoAkwAuRvAnndxe8G4W98fGDxTZPfYrQxXa6ZhBABCAFRSmwN5QqanXfVHco"
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
