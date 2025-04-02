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
    "4edc5wnH8GKcg7mAyphXRDehK5NWtrKhefeo2qf2u4UywGASSbf3MKQ4yFaxGys3tjJkzhGSkB5nXCqRHhdpt2iH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CoMae5hHNFPdMCxV4zPDX6UBMqH7xVmVZeTMKjL8VJvuNtEtNcCy6HrtFUcNwgGnB2krKtNjLJk7StFa4BVwPMH",
  "key1": "5w44ioCejTMgZhNLCKn7kgXv3aTkinMQBsnoiwv6BaDKTFFG7ZxHVxMYwaygT42xrUzTGMQi4j1nMQQ92mm6x6oD",
  "key2": "2eGqUsnBQXxZXgs2Cqtty4GM4egzn3FJXmzaeZ3RcXPePFKK1PMedPdwvKXNc4R62CGBTom8yULBt2x6Qg6rMJZf",
  "key3": "5G1MpJevBdu5J9gGyLb5qCqeEF6NB82w4r4MeEMamV4varcFtj1mxSEGC8jXokwvxZJ9GxPc95G3GEnYqwS1jkc3",
  "key4": "dK6AQE6YKmt6G56zXPuYuZvUSzyVbXJQcXU9L5LtJTirDMeACFPboqkdZuyLFvdbVKCUm3KbpazeK4dYFbdxrgT",
  "key5": "2mFp2RvxXi8w9dUDrLYUJabfqtGFr5geGG74QiC4GCzbD5n71ApxgdAJkBdcDRHyPBt6Zp6jgk23qeGPgRcKy6VF",
  "key6": "3xShcZWPoxT8gXcboXnqqWCZCkZNQYLk2xvxaoF6L2pK82txfh8xcR13xiHaucvkzL9wVEYaJoC8MTUgPX8s4aM8",
  "key7": "4dFMw2tWQzePfu7DE8zm19hCXbAAnhA1kyGphX47b8fyUko7sQu8DaxGKU5avKH73Wg8okz993pYhc5tMwxv7x2c",
  "key8": "bncj91aCazrR1PxXWrhbUhbJ3RbwDAPyNfY9TTMq1GVj3VP7GSunwr3Hh1bSJJ1rJhGxrFwLumBYRz22r6vxKdR",
  "key9": "SLMbMW5z6U27hN6XrzQsxWXr7Pv2aThjtVgU2s4vmsGZBJK3BjoMLmyq3yxsmx5mq7Js48vXu42PHFzqRJDfxj5",
  "key10": "gDSwAzT3Mr4stGgXzFwDq8WVr5WDqGm6MRVRXsPmR3RotwyrAWWPehhP4FyC8nHtNruo7VSayiVxTwkLQKzmFL3",
  "key11": "4Fogri1od44Ew9L5E3v9V8q5wJkJ9VXhb6XssQsKT9VQMQs1Lt3nxaXYA6DzkTLriotEdTxknNnTrXvEBYixqnJX",
  "key12": "4JA3BpExRjxTygLp59gbER95Hi1aybzvhdTCiwybaxHaq2UwAUYKVa7rXbmkFvsbEK14tskrk1NuzEtWxuAh3uUJ",
  "key13": "2cZpprgnKTuvAopcoQAjxZ5YcZYpoHYFsDHz5ETNrrL2ZFqKjebf64T8FDsoWfAaoc78KBNWCUqGuRPNnc5oNXRW",
  "key14": "56EER5qoP5skdbpuhesqE3BPJsrnHL3m9k1SX3iZpbgfpcA8rY75JeNmvCh7nxtcLnpwumWu9j5HMRwCotNs978E",
  "key15": "3UhAHuc4u3Hmsg1EZS7nVoC1MXq1mUTsyftHMttMQwAjbGzarBPyQyiUrZ5N1mfu28tHkCZtWhvAt8P6AFeKYP3o",
  "key16": "3hchyYjpYvTdwG74uQTg4812Vk9gWZpZsVoXfQmQR9AiVbKYJkeYXkhcZ3kzn2UkG88wr4yMDtm9Q9gadFGUnYUp",
  "key17": "5knrMYohunj8wmmmKM3i5MKPssWwCBUNRCPbjpLZ1cbq1Psw1wRoYoYENZoVYn7vEnGqzY6VZtmEVY2zZHo2AhWz",
  "key18": "4o5KkJhVXzGfcysdnjk32UsFTaHyWQAQWzUvw9wQxRxqocZHqhbB4SECjdjPswphDAr9VUtngEaFVwkUg3xU9JVQ",
  "key19": "2VAv1XFBY2MaJt1zgENEmpCwWzLrj9p8zZ8hxpacDUnBVbb31pNtwZ3cvJcCDTws7MGnPRvUQQzCgfrVc2D5zL5X",
  "key20": "3ioQBN3YWPEN2bfnqZ8caymnFyksgLxQxTWEnWdAg9T5p2UYzRoG6Sxx7Tt9xChDxu4kS3y1dMdiBwSkF4fWaFiZ",
  "key21": "9PfAqsCh2nMrPMv7woyzntPiYS6BUTjqL2uxku7L9wSSDAeBoEg2Ec2MJbvS7jDcmkpVVq9M5XacQDiDtSJYq6i",
  "key22": "5wnHbriSro4GyqQG9p6vaGdUm2KV1ZSLEMnMnHD9A7jk1rCzgQuUn9JYcFoUBxQrETYNSesQP8gUmP7VfDWtq17X",
  "key23": "4NPumrtighhpzNLKvrxYnrCmBqmUxUcFmZUyP7VC6wHGWAnYpidA7826y916vPoUVKXGEkt8ZFmhDxJy5CzpynSa",
  "key24": "2hDwdHMAb5zSSWnd2P6xMpCdV4hmfWBNDVdatVrwGrcbEHi7wvL6jhYJoXt6bVvJbodJnvLc92KmT8WijYHJtSbE",
  "key25": "44yD5F4LPLp7XrHwp6yBknT7WfKJKyCEXs7h3h8hgyb5p9nNJmpRaBUixH3jq5bdpcVL2vnzMUYVgUU2EAg5PAwa",
  "key26": "tYSiFMX5dYtYKw1ay1jcnpdT6HhQPsNUuV3qmqV3MGWGwT6ZhHur9ijfd5EnpHk5Sp8taZqtMNL2ku6Wmo4GiF4",
  "key27": "3VtYkKU55WoTo22s1oM6BDrmC73W3cTotUjvnUoTpn4WtHyBLdkgvrFT77rgvvJeAoSKT9fboga7xqJ5wNG2E7eg",
  "key28": "5TMA74UBvUMDLWbDP94kKLVsrDmv7G8o4WBTVbhuD2hG6i46iXReEztPPF6jH3TqQqEgTYHvpPPpX974XGmaiYMP",
  "key29": "3xF5NnLG2XnkZHLUnM99PN5AmhqzUEvDmvfXfen22bEFxd13D4Wmi9YUTfZbKqrBKQP3ncCVPBR6zBYYbsnkQixs",
  "key30": "54n3zx5V9YXyoBfsni3ze4moRq1BxSy9o5rLL4W1ujkBfRTAADU5DkKaxj47fn7LkSyPW4aFLN8Bi3psUSAWBftv",
  "key31": "3PRKrLSAbGYFcBhmGjjXWXtKS2CQnjZugLzPEGpNqLSZaXosk4n9VUTipoNA6JpQ851ryHZHwfFqAqbDgc1wQLR6",
  "key32": "3mgvyrg3ReXFeu5vAdQPmqEME31fZewoWeGFaYmHgXQK3N1HboX345Jcay6UNzp6QkGpGf3VWkAFRZZvzjWDqJWf",
  "key33": "2sJZshz6imWPzXggc5AZKFs92yt9QjVkfKVj5PFg4v5NQjm9NNezaUyoWwQ7AGznorWR8QauHQsTnMZxFKB1YMoR",
  "key34": "5v8VnxmyBFPHwJ8vc3qKW2nYuvNxVKkFPrjmrmZCfsV56n2FQDT9MMi6uGK5yPnd1ij9gZRagiX8JcLNCrUBNozg",
  "key35": "2jRY2bkBbLuGN5W68WAQkB3xhzwyHXoB14WvUQ6jE5Qu15iEmLFbqUW1MsC1AVjMqrtsELZCPSCCV6nYtLnzZoTq",
  "key36": "4GCXY2U5VtT4BFuanCYHCJ4xj75qQvgk5SYNn1ykHDYayagqXmUsAXzBhCwFqGArwLFKXrWDZ4E1DjCHWKaXKdB2",
  "key37": "4B9Xh2Wvn7TVxqrWSJKndRgVdCHAtxJ8a4MLAXjpkTf4gue2VuEiSh7prz51mpn2qstGFpbXuh4xojDPPLn7yRq4",
  "key38": "r3ykiy9JMKFytGRdbmD4o1e7n7f6Pcq3zyCtWpk3WMiXWN5zpzggPQbitDqXhhahYaZ9RHdDpCufpVHCMLCMXYJ",
  "key39": "4cB8mKjWrpHP4o7ixHPJpHMPYiq767tf7u26P5pXk66vwiALcwgsKR251p7puA8HC9pkAnfG1y3HdsuCRPrWgxJq",
  "key40": "5gVpHKYyd2Pcwj9c3yoWwNdEQiQbNUHv2GyagKgJGoyrsqfbEJEQhDNeFMf3arqmRZ6F1Fr2LRYy1iW35c4XgaUX",
  "key41": "vpQ3QPavW52NcJeGryMEGZd5tELpQ4i2bp2cqnRVhxrqfdgNw3uXxSrsVCryszj8kmpWemMcEtnoyKH2TC7vKKJ",
  "key42": "2BzejgvqnNDPmyN6JB1hS6iY6S6WyuXQhb7N52YiFKZVYE4ehemrRukbUxn8RfqWZFfbpWUBbKDdCRJRwvz2SDVn",
  "key43": "3WDyx3sBt3vGqAyhuACp3c3dyNRav3uGJNNZcEPVgruXYr6QoGHzzLn1Fr6eq9WH8VqZmJbfZYyAyEnsTaJTrd9s",
  "key44": "32erouy4Ud7GJxCGmZZZC2GwGcuQUoqRjvXCvbLaqfq5eiiU4zybND1VECRjozLtrqkk8kSxDkA95TEXGX3NGWNN",
  "key45": "3DX3jFzCaggRvTrw1wzPYXKWbWzuagj1SAvEvuFLsJPSchzQTh8F2qqqwwfig3Rx6D8qRZLdiGxrb4eh5ZtTn79c",
  "key46": "2o9QQSg3tDt3rUpdyMmJswzPTvjJZBxeRWuTASbBvBiyEAm8Rfzdd6EU51dC56Fimr1Vfpb2fchT1EdLEvEWapiz",
  "key47": "3sUG68WdxYmeM1EPqLVLvyesjkwM3f2BdpP2JQ4e3pGE2fS7g1gyETM7n7ZDh6XpYHaXUPh7rA1CPZ8h3bs7uEBt"
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
