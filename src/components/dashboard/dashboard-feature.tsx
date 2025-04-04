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
    "4nKByG8f6TyiJNzKtnvzg4AyDcw3fMJrBjTfTEM2D91GseeBCmMTfB9wCcWLRArYSnXHMcEeWc1MCT5EB8DzVhzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ft4dRj7GJjWfe8cruyHK8PdjzgnoxBaGL88BkXegvid9vSvm4sMeEnzRx4iYvRneJuAm5Fufms3wkgtEnMGkusu",
  "key1": "5ZrUnKKtcBUHRpWsuF7m71GN11jv363MhU9XzCGrnC9hfhZis6KxMgT2TdYgeEiK7zpNPkkVSigwxL85zRrd3ddA",
  "key2": "37nzrHv4zjfBUinALyfh6GgNkFBWFQtGdVEpzu4zsAe2ZkgEW7D7q6iqsEQKs2RNueNeELP2bkDvVD6MD7mc8ZqG",
  "key3": "Qx1djgdzwihzMeqp44HvfihCagqahcMjECHTYXKH4X8pGsygB75fvhuorW2tbS83yFQnhqU91hcmRYgzBGKZEdM",
  "key4": "xz2uHNb3EEu7F5qfdQWRzAr3MrYxb9UguSitrQvep8zqmtD8ubNnExYxU5M8MboEsS61mZoNJZhe7nAt6smeVWT",
  "key5": "3NLqYHcrGn2EYE2dyGoM9TzR6H7aXVWYeWUjMdLyABPq9VRGiyipUASJxTn1Uf6rAA1kVhCcdxmGoMdsru9WhAAc",
  "key6": "4HGQd5joKzwC3Wpro2nkM48j1aB8pKBc79tnQYaptbRP2xpFmZ9UQbdbW2E8ztBzYYp9oG9fyT5TqAqxZMJrA9tj",
  "key7": "61T8svAigZmSSKnFHqtuwa5Q2HvdyhoWUwgehYFg3Sajfn8T9oXkyKGXipgPd6RH14o15tjxqpYnazVT2XKRSNko",
  "key8": "5hsob6ENvuYiQNjTRC1x9xJKpzQornABhL9zp5oDQeUMefQwD1Y8yXqRQTEDeNsZ3HqcBqnK9NKFPgMqtqcdiE4N",
  "key9": "2trsd44EzbCAKpRhmpVzrEBSMUXUytzYYunQ15Hc7Mg3UBrepJqQbLPBJTsjuDTiq1ayk2UjBUGAEpptcjpfx4Tj",
  "key10": "63LaTwtVUXcuU4hd4KmPsrPXnqBBvXHmLFxXYTvvudDX6NNrRGntRwVFGD2Yc87wPU3TZCg1MYaueqRZU9MtpB5R",
  "key11": "4BGYBT32notVsSrrYK3EybnWVFJ5BQARoVPSEPEvn5Txff8bNc5hBYR6kQZP7BjKHD6BZs6VA5AShAHfjADgL1MU",
  "key12": "weyZ3WWGfm6yNCMgT1jEWX3zUKeLvxJt3AYmCHQNwAjymjALGo4s26dNKdQKNRd3XSaBsJiXfd7AEv1rYVsdyuT",
  "key13": "7RZMyomfYg4RCLFMZvtGW6VvvVw7oa7EDwVtqHxXPfy6RVidEWwc4Pp3yC4pawqU2fpsNvU1gZPfk9pTXBXdADZ",
  "key14": "4tSUUsn4Fzj88FzpFmyTV3PL4A7cLaBhapQ9Xu5gfmd4XMn1AtMgkfhoyPnJfnduq9wNfa6d1NNiknuiF7jvmMbH",
  "key15": "3iXTth6j8chFteQmev11kEWZMK18HDuuyB3niaV8a42d1Kb4gJT4N5KbESE69Eu7nxQd6mBq92H9LJJP7BfFTrox",
  "key16": "5f3rRXNsHvYEFXsnPpkcgzFzHDnjtjt4FzkKpWSiyFGyikJTqNFMKkE2LRMeMHNjvznqePVze6De6PP4A8aZbGC",
  "key17": "5V3fnyXWjHiQc5seVJFUzY7QC87vvWKwfUD3YiN58j6ZNAQU54rMP9B4VbQDwwkeqdhNCjJbZ8aAsDsLito6kkKa",
  "key18": "4kZtkXLfkVGhGvV5eMjo2FNB5iPHtD7kCTXG2qkEqadLmw1QpT82zJSKqvjGTBBCmQDsx8BYBLe4wRdEkVvhWYjo",
  "key19": "5YqG9i9jXE4BjE9BLcm9tcTnKkG5zzqYRwGfcUHbAVDZ1ifsSZdyytmjdp7XLPErYLbViDgSjHfhwmnBbrzaJPZL",
  "key20": "5QA4JY4cpfDZhCGm8NXpkD1DWc3EsoRCJF2uEk8yVZ2L5udr3n6YpDCr5KyRnEzFSis3HbogGH66gE8aTMqUe391",
  "key21": "22aqWHGMMEnzBepWEsY9ivBcjmPMxzuZyC9cGmiJ1ejcDqSon4WRobCN7Y5YHuVHCTV91p8Pw6kiZqRcdTtBYMS5",
  "key22": "4R8GEndPvKMrLHcWj5fx2S1TagG638NQ8XyusWYtriWZ3Hb8L5PfbZAvStffP6KRhL6f4p4fXejp6HfmQ9h1HPX5",
  "key23": "51vYiPdzjL942sS9FXvZiZ1uC4aCedite97vycZcJwZpnXyVSjZUZ6amN6pffmwMPGgYvP7gP12gZz5AHvBB1jcg",
  "key24": "2Eh5HKpuj9DofbdYt2RJKGHkxAkU7xdUGo2XRNNuGtEhQmexkSNim2mHGZ3qKzgs77Su8s37uxGi59KpWWKXSf3H",
  "key25": "7GBqnC1m2zk4i2CadiT2JmFt6rXZdN5xQmgsC5nXqwChgdnqKuJ3ir67NTyd8GhakPPZB5gzbXCFYwbHcGzwF9J",
  "key26": "eiRg3KjLv1VviQDM2UP2hnW7ZG7pWV3tLT9onUDPjQdXHFCXDQEs7KVibH1FCSHRhYZKLMEY9KD6U2LzxXobrpx",
  "key27": "5oSun1RfwvdGzRLza1wQ9UzADqAdTRMoaF64ostwDvhCcArPWtwqeVzjPnsLmHmdSWE4NtU5T5KR9G6NrZEhsEdA",
  "key28": "4bdFtLLU1xeTmCicy62diyzVhmkLtMb4jLJJSNDRLzsXZjfEBhuAZdkdVBaKC3fMwkjY9vZNzUM14KMxoQ2usFXE",
  "key29": "59uNCyUgbAd8uAjAd5SMdms6rqMveoJ6Mq3HT9ZUSqrUSUwk38F1H93po19gtYmhsRXhFCfzN6kjQUA64M6y2BZt",
  "key30": "3VxTBHjMRheXg9SjwmS5HpWkQbuLhUAXhmG4Jtjf1AdrS7hNT7cSdN99PqNk1GZ9SoQKcjDqz1KZPcYVFxQtWVxi",
  "key31": "9ivXbZTnFVgTx7ArTwTUdshrp47y7iHRtZuMr6V2oPZFCFM7J4HHYFEMHoVeMSBztKnHVqt2TynBCYBNrPSREeS",
  "key32": "26PL72h4xCXZhGNVieP45RJsPkmMybpFFzJHN2LDwukHwesQz52pG2mZ48vSWGmA7sM3ZhzkB9CRbmNFmxzGkr77",
  "key33": "2hqxwUNhK2gWwYKm8a84CVoZ878MXehBvGDZxq5xxyJvy3HThnYVi6AZhdbm9AhCYL1SQ5ZAkiTk9bC9rKSY25e1",
  "key34": "593UcQbmv8kY4vM9DMnCA7SvcUJYbLVqnZWXq3hsUuNpUNyszh9axNx25VYBuV6bbvsacLK8fkRB1PfXP6oBeqHS",
  "key35": "UPi1wWos45fothgXt8aC1oufXH8sRUDpQ7S2mVg6mbptbr39XuY9SVQ1JBAxWHdYG1XnDTfw1fxouoLE9yP4RxQ",
  "key36": "2ggikSmojdQF2hb8ri2ETrbxezbgGVs2b2r41sicJFx9QivcsTXiAsLAN3WUWyCGMLJQyWUdNPsvv2JKJq7oANsa",
  "key37": "GuMFL8ft8uy72F97hGp2kxkeToqHSPr6gGka6Be6kV4dqdTJwn27YEkFLXHVPtHb7PVcZUFCKJidbdW3oDrPAgv",
  "key38": "4Vk38XgpVpZkcHGyGjcXL6f2sNE8G2CYDKor2TAk2KgkUna8p2TnZCxhDPYoFep3ofrdMa3ccGgUjBLEnY441u6D",
  "key39": "4Ahs7KzZA22ARBCWcZHfNEFvBpGfFgBij7xCoMTjyZUhv9gFXsiu6NSyvDkEiki2rdSdtHQtVzXVoEBJhQnZc46J",
  "key40": "2YW16xvnc1QgZCKzYuT7ogimSknDH9VtRJzVwkoXWmPMWmsMMPcdDFQzi3Ku2UY38ANgx3WKN2HmjZkCawsPadm4",
  "key41": "hfvWQKxAi2TUHQuKBkMMQGVQYQawEiZBLRpVU2R7QtzPVNbD5NzYsFkYt2HXJLrpAS7MzVzUFGx9ad1RgCaQ8gd",
  "key42": "5yhGcnWnc7VkJJXr1ZD7YY8JP5Gx2QzrX4fEoWYagPB9kGR3j8a8okFCbLBGaFuTGMqnAMTk3uQAqZ5dy5mVWLJc",
  "key43": "5DKMA34AZ6zB8htzwtSHzrGVLgH75gY3LZLxfgkUFCEo6ZVo1HjgxN1LS5dq9HPmWhjceHccxwrzkkUxJaYnCAd3",
  "key44": "CXkT5rb8iXqQRZGw5U6B8oSJ8wXxKo2njcmMddsL1RCSHkA2hMaJhfD8rxNvVWK2jivqocYH5bCxmhHvhPmaYjK"
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
