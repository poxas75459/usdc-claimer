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
    "3Cqsh4VT7Y5dkuy1uLApjv45TiVzypMXwngQ4jZKqfJJdVc63evRpHFD6hDiJjYyLqSdTsUTagFRuXhzkBfkkf5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PRgsxiFcBZYe9RNdV9BhCvi2FsWAVSc7Qv3DQuy4UhpDh9VrZBs7MPdF7DizZ3pUNq1w3JbooAYZ5gPhTnSAFee",
  "key1": "3fmaCrAUPQNMWfKMrjDrhhJbE8FfVBxCTJyB7Kh8y8M9oi1P9CQN8p9LSQM3HuQTWZhNecbZjctWCnkXkHPw1smT",
  "key2": "3TE8yUwAsfB8iqX4MJSXABMEBn7JeqH3knodK7tACj1iug8uvRTx5B6cSt5LStqgzNDsQqvAXhzaNGsmcJfWC6GB",
  "key3": "5bzuPyg9hrceTc4ckEhFptt27QxXT59VnSGyBCN4KG6ESJzY5AFttAyXSuDaagPmTuJHvu3MaQz7aM3AgR6C7HoQ",
  "key4": "2cMf4Wv3dYj9RTj4TfagGnjkvR4a7Z1iXJmZZYMGWPZHEpg3T6nMNjrWsC6SFUuBHg1txB3VdWEBSScVdmMAP8SS",
  "key5": "5gww1YqcJCysR4pnb1EeaPk5hN5bG85QfiDzKW1eZNYFHXestHZZTEAKBDomJKAne5UYSDR3fTBsrmpLBSRYdkNo",
  "key6": "599c3NvHNfJzibtzvqMMCFzDWFd9AeHyjEiDFNnmEU4gBnE4fU5NEexr4g2o7KW4EXyuAPZH96hVSBEqS1ryCo96",
  "key7": "4oKHcQwYnRRMUCKudx39b6pTcVSztsE9Wtau2tUW78U8XRCKiALdof4jhyVo9Jz6Saq7g9wEB35im7Da1KhEyBbU",
  "key8": "3BVCqUZZCtSEDX76strh344KuD9WD4UobS6GCRX5VzQU25guLW3tTkc2mwhcBi4TW3zxwAZJG7JKnc9ceXEose8v",
  "key9": "43mUXm1Pj2uAeQcZMZ7W4PUf6W7nUvpoZHvUp3GyQUAF19vi3GZg1wmgxRxnc9DzGy6DJSkbHgdQwByLRDkQhcJi",
  "key10": "4iRTnzwUZnz1m3jVjhaUF4v7CJZ1tCkrA9kwabxLV41ZPTDAbdVxroSHUfn79Xwug6DQCcw6wX6ZCMJjQtZhXhpP",
  "key11": "PDD1KcgPHJwzGthaBdpbVmTJM3EFRAZRzE2iF24mWfcrzfeCnRKxT8R3HWsFDDeFw4VQ5aJ9T5w81xRmZsVMJ4o",
  "key12": "21jhYKJmz6RtYGSZBHay9iUgjMmNqKfUDnB1i4SZNrJaJ1M3XhEihC7J9h2peuwT3JnmjwuWzPwFCxAX8oGqvKY1",
  "key13": "5iQxDP5yFkMF6xUUCukXECbXYNWBQhW5sSqNPBnfihApXtQWTyJ6jo67D2wugymdXUct2VWMAmZUV2URkgpf98dw",
  "key14": "2bN9WRLyLXLADxp8eTsdC6PTbwA92JQpP7jHV8GxebmjATfDc5hgGoKGo4Z7sGKbVgL3e9Bq4jc2FAnrUAzybvyB",
  "key15": "4oa9Eukph5YUrZNe6jM7LroZrNAG6kKLkq81uAC2ZEm1wjFEyPgtLBJZe62nX6sZzLsprjcY4VvXb8Hssf9bwtSQ",
  "key16": "46BWUNFBa8SAsKhC7t46sHSYWq6jF4iRUGSqpuqbR47Vpdo1NpMBxAf8N3QrFQpYeisaSnuX9kkteK65GqEvxFeJ",
  "key17": "3sH2Dxrmujp67eRN23zLzS8yAzfipgMFwLaEvAgZQsFKxygA4TEStwWqAn5K7D2TCWhYn7cwebjNku3UpEDacvwF",
  "key18": "5oLCvEkJwAaBDDdyH7iQKvBsKFHNUkJFUKuiEPpRV15ndKT4jc8hgxcUPncw9g1D6odk7rCHpezkibGeNRdr1toN",
  "key19": "5zQJ4cPyLGsK9actHJK64MgSP2rcFCeucseZDT1CqkaeQLDVttcqqS89vEY7wpfaAFimysDbwQojrCM7PcethJsq",
  "key20": "4qXMXoX6nbdarBydwGVa28CBU2CuoA1i8SUG4bLfFy5AE6tWTShWTSUcW3GBjd7can1HWa7SsZCSzgMdakcG86g9",
  "key21": "2cMjtsxHo7i9srWgFeveDDqrHnJKcWJYLBZrccwcMyd1rmiBgruodR2Zj5zQBb99ykqjG7YgB4Mz5Kp8KE4k5LU3",
  "key22": "4xVL4rUCxrRgbkjz7GRkr7beEH2ZPkjBFUbRRoS7vAXBmSzY7yx1cm5i5R97XKC6s3CxjRiHWzFzjxaNKfPA63mn",
  "key23": "wRiguBm8gQF3W1dhyRYdsLkgJBLNcNh9e9qPrpTrN6UzD17w6vKUUFqzZ8Xjowx3dvjbHnbQLrCkg8RK54z4SYF",
  "key24": "26rvCGH2USWRKFS62aQiXSKEHUJVYR1J5GwbYkSpoYqB9XzZsAxqAmQK2gvuSLYXSwk9yFiAZykC5fgrjWr44WDs",
  "key25": "35MnxsewXWdp5Xo79RHxUR9cC944pExvyZEMyvBHbYyPoo2mmiv14zkVGUZy9zMfjG39RvUMDvxKrYpZgnTATJV4",
  "key26": "aHSpYs3JAL1yorzs5YvFcepSE9jpcuSWeP9JtviNnFmHoMFYwW56LWr8qe3cSAqAq8Up1t5VtnY2YRHG7NDMCvq",
  "key27": "2BMcsKiGPEscpVb4DsDys7yHxej99ZLjBjqUFtF8G8FgLPmEpaoQCkfzNgponwXTHk7gAtMDpkKKyGiZtAAMhoKu",
  "key28": "2AcY7pQvtm5wbRR8kk1HpWR8hZkVUrxgEkwKy1ESRzEYwrcMeWLSU8HUHZ5XmB3mKfft5L1pLTXVpDjGYqQzMrLf",
  "key29": "5goQiqB8yVvPogoP4jT6R1j6E2CD47T3eNqfjbkCTcaS6A33r8TJZB428wiG9Qsinhtjh983WHH2xrcg9NhJgLcw",
  "key30": "5gbfUXknxgYt8249rzJPk5oTcWTL1oK121SzhrKXsJybCRj8zN5RQg4h6LiqqTGUPppc12cxuHnBuLMdiBymvZuV",
  "key31": "3oFKUFmzTtiw1ne8L6o3gCsvDxJaJeXKvCCi8Pes7iUrqDaWxniCZpVHmhYKBuRdGgmeJZVzYnTxiUnEBdsjGf8f",
  "key32": "2PZJrkrWuTnxGMzzngtMZ2EYr3gB52tDmTQZJJRTorp1YPAoeK9waTpG3pRDpTUpTUvbU7tWNFciNZJxZE2Jh8Pe",
  "key33": "29yNVkFkjhmzggreCCAp92Bb9QPRsPWXgMNwrH3zThWXLKGcdxiUtnHBUKA9BVt8T7Mqckfw5r9E6dACFgchU31r",
  "key34": "3wwM3kAqgFbYjEWumhassTWexWMgZjgyGudR7zmTN2eVgmc5BoKa32Y1f4dTiLPGu4pjxUbCUBo246gCTAaek4EY",
  "key35": "ykGbYozxpHcP912a6g9e8fXnc3mTEj3uuZiR1PTvMbB7Yj6Pxh4xs2v2pCoPYBagFdC27WMtuBrMQCWL8UtheUt",
  "key36": "3v44rFAKfF8eEKCuPn8c5viczp6z64sHcXjpDoTpXwKke6WxF166zQtox8X6PjhanRjPVy3m2jyczZRpi1Ys5gtA",
  "key37": "3WbjD2HNnVac6DQNG3z4aHfuDGQPLyXM18yRCKpzr1578E1zzQbR5GGhchTG72RJXdE5zd7R2FqyuRjnL6MwawuY",
  "key38": "4TURTKvCx7vHt1Vr4yC8v7QE2fwdmsjoGMhWoG8MKFyUGc3H13EcPwpew9HC1MgTbrmcBybCDKsgvDb2gEGZaXu2",
  "key39": "4UunnGtXiXWfNdqV6cU6owBZ6XUDsyEDRPKd466xY4eV3ndicSye41RX1XckGFLbwpdyi1vEjr7TekhLDK51pXu5",
  "key40": "63SEVVHi5bZG1PRUpczHzucBducv5XXS7ULE86PcqxzQ7AgCwLWvShfuYbatxiunBoW8YrtJNj5brM5kkDcCE63e",
  "key41": "PtXmjZ5qNA7cGfwSbB7fvAmXY2bnccdqCKPvaUBeXWzNcGaD85xhyFbXx1nNYo3SQy6H3x4fHgyc7Lav6Bw6XA2",
  "key42": "3g9a4aHfkeiUCcFPLNWRhgFJeTqWT1ctuEBRJ2pUBW3hyhK6DKdC4vEKAv9NS7QAnvxMHGWQqYdx6rCS3BAiawge",
  "key43": "4ope8semrg7aX3Z6MhRbwDPAAoQMMAJMr1E4Hhii8zGAHJfhkKKokp2EUWovAxjXGD1UWvAzWWfB5ZQBmt3ZPtnk",
  "key44": "4XqjsyofGZshKkfb2NzQcQpa8DiKnNJd91XDE5XkBAFd5LBfjhMW88Zc5u5pmZwn85bnxhJscE1JLShXjmx5SyHs",
  "key45": "2r2R2Nzf6a51i2Pb4fJbify4MoN5Lq8FqNJs4totLjBc8kro5BmhzYa81qZQ6PegJWVBzynGa2hMTHyfy1zvzEnf",
  "key46": "5s4y3iUrX65sQpr1grWESQTHAmq6YPjN3hdt8FNCCvzoxddUATzJbBxifdEAj8Nk6dD1zLb8n5J7bYBx7SiY3W28"
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
