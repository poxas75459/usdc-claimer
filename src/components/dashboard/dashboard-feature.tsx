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
    "5fR5wRU42cWHfpodLpHtzyNs8fisk1qE8ouaKXDzH1d7K7LYRBhLi5ssbA1f3V11XiQR4uF6uHx4jih5Q3pL4Jnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gbr5zMPHHacq3XRRFs81QRhZbg2Ldpn8Bk4QTauzp6ZXMawsPnowNdJYKUyxuN65YKs2Z4yEXuA3FLTX24kPoQV",
  "key1": "W6myuPmsERZ5MSSBertCHr76M7eMazrahsCLyhQ4JKJgEdGzwLFMvvk9tngY5XD4Y4Gkfp4fXrbP71BPpU2xs4H",
  "key2": "57vC3G6VtBVBahKVXvjb4vJNG2xbVDT9tntCcptSQDMamXCEGCjmdtZ1j1mjYTsqU9pqGh8ZhfHrGzLBMmmbKi8S",
  "key3": "2i8jLVzBWcHSuJvnUS1pJHj1zMo44Vb8T6BR7CBTfZdFQ26XxoyDhdouJ2DJnVd6nDqRGfkc4sYUhJ73ZEZqpqeq",
  "key4": "3Xb6QGVHMqHTKQBxLsc1koZEaeHbw4MCYf15KmX1JeGZHTtrZALTQM6WfYL8bvg3kbLfRfozQ3uV41g597BKeCL7",
  "key5": "5mpHi5M2n4QB9ihU2EiZdfYp1JDaRsxY4Q1zRL7cJtCZ71xzGMh7vo2mVBdx4SW5qaVqgDyaDaLbNKJBbBnbE9XW",
  "key6": "1amZ8CgSQbkJ8cyvKpqqDpcGEwsoPSeunE9F76fdAfNZiRzw6j7qAMYUzuS9TbE4uGAsEWMwUVLj7aFHRM4VCSq",
  "key7": "5KM2qFfw22nb7cjpdXgq76QDyfUMP8SgUujLrd4c2gsV2rpZUUL2GMkaGRhcRR4TmfU4pe33AwwCLsJgJFRubQ6m",
  "key8": "5AZqX1ShHPuPCQor7215pLTUaQtWKNJcsFPrxvEbEpgAPrXcWrpChsm3MBaTKAZSbcqAx3tA2nETdexq5PLMg58y",
  "key9": "7GQVXnZKRAdMMTGA7cAUXd77XAprZ9jRYAheC7ecGkBSwJU3AqxQq5NJiinddnNCELhS4sJYCTLShNn65BZDhLc",
  "key10": "586aTEabZdpPcM6p7Dq2fDoQ1B3XiV5tzxSJUSu3bYuRsk8kecjvHYDpuCAZ7bFr3rQ84sMXoVvkCqe2hGHLSmku",
  "key11": "3zxXc3mqCeUVFBeiaQo9STggJKNWDf9wesrVXxV9DCcVuzB9tJ8Z1tNyt11NQvyYaP3SAqqKmn9gRU3MZnkGH5iR",
  "key12": "5fizg8qHpXGLcUHsoMvViPwwuJJonpjqy9emF67ywxkytWRsAA4o5baNWtLpvzN7VfYfcMWiybTjuTwU81i7nRZB",
  "key13": "GiC2uczRa7mTDfhGdMNbdPuvjNWiaPCirgiLXeNd46Rx5zk6xVzGYaYkKXMXyG2b1xR3tHk9GtmMMQGi8tKhpFY",
  "key14": "3tnep4LFDcGq378KhBeumr7JBR3FJPPpjLPSitpsZbzMqKpqHmFm5FfasgTNFvsxtMAjbKsNu1KJtFcKVvqz39Pe",
  "key15": "5MLW5bAJnEKmYMF6ki8WwdKBj4KkUhy1jvG3AU4apia7YCCZMTmhH4UgRrz5tzKvX93sQKipTTkNvHqWtordKAPa",
  "key16": "S75kZnbWLFmtpgcaYFA81rtTAvKYDorCQUB8k441KL5nJ8unKyxxo8BSquv1tVEPcspvLX2oQyHmxB7bTtBSnUi",
  "key17": "4n7f9Z7yVSLHBc93QjzxKKmLdf1uDfSYNBB1pXiah3Wh1FrTpfboy3zU3gHc8FN51hQCShSuPcdFTUYC4C2C7zBP",
  "key18": "27Zmzpj4Qbj5ABZCcoNRVLRn1TofapKUp8BaoNpuGD84Uss72697w3aZXSXDk7imuXT9UpZsdAZJsn5HLT6of5dT",
  "key19": "4UrgzLvMHhC4YgtejksCQ7kzQdwRidUc1M7QDKAccY4fBuMJszFYHt7SaJhb7ThNHHEyvpNLnrGDo28Piq44WB3M",
  "key20": "5mVQoUsfgy4dvYKi6SaNiv5KeKKQxGuvRhNQCR74sSUa9vZ2CgsvcvZd6yW4CjK69dpnDwo47f4odE9TK9Rx6Fr8",
  "key21": "Vx5UYwGrh3KwANGE38TYw1uFvb3LX5KdxRhKhoYEXVvrn6qvvMhSiGDtZVAfrwxVUrHDsPgctnY3kcFyGLCXu86",
  "key22": "4Q75b6Mfki5q7fjU9viXDbFMA7zYf9q4QUGGvXkP1P4919gKRtiB1og2BjgcgPn5DpcZ9A5b2xYHwz5BUYn5VcSN",
  "key23": "36ckATx7ua81YyQTvDyLDGtXJAcrcwUuB2WFWFDMJLBQSBJxGS1VX8y5QfHYxdAxDmCbiU6dy5b7GuQNMEjnxZGg",
  "key24": "3f1Z4ZE5wnHztm2iBGJHuzPtcXFqCbHEytySM4jdoUTEQdv9EQkHqHeGEvQrFwB6UmaCcmZKASkJWVJ6ca7ah18H",
  "key25": "5U5GyqGuRjAqxzwoxV95211byqX5yWvwZKziGksoi6uPZYD1tunEuqojivHuof9dSFr74YXv1nuF3RKfUE7CoiQp",
  "key26": "o63NaP8wz8EdBXeWKQERBbJk1JnuiCBRMDzmoxGLW5GcMSPE5BH2f8my4eV82Hsp9oNTmNy2wbzB4RLcv92fKaP",
  "key27": "4BDcY5asJ9DHKSRjJSEZFQRQYY5tP6QRU5W1UGCpU8JgoUJKFE6yBvZjMsY4rqLvBUu8dFfaetPXb6shpiLgYPuL",
  "key28": "3m49TvH8eeW22m9ERyRk7g5v3ULdSmUvaFjGKJMXMBWp9zQBtKmrmWfBGbMLW8nh6HuujoTFZm8JQdHvN8w26KP",
  "key29": "56Jwbu8DdccdWmhLkWDKPQZLAfFxEdbCArT2JQy4KrkD4E3H96G42ZiW9Uqq6gUFKa78KmY9GP5SsksDWaZTHiaN",
  "key30": "xzPXAwy111XsVB9cKNxxpY3APAB1MuDBAUWdXh2CWw1S9unnaP2sNWyLhdV4NL5jkjRHe4wh68vfqcuYdhfnpkL",
  "key31": "66zDJQ6ArgTKEGAvjgTjFSkLsWyAMEQmC8NqFc4qzc2aEZ7ReRTeFoNDvwKPCrhxoXvvucXpB1sqTaGDXjQUgwWe",
  "key32": "3EzhaxBSsnDquR72QASqzXsnYEq3a52APrQxVfJiat5U2mRYYL63F25Ba6K1SKy6Qxv3wwXrwLfodySAdU2jH4S7",
  "key33": "37B4H1oQfJqkQUvXaZ4AxtHcpG1jLwgB2GtepSFaAjuv1FL6nMrzFeyPEt2FLNVAWwjPYKsHr16oc4TnX8zhs6WB",
  "key34": "5v36cfRUScws8sgjzZNXGU3uSQ7yQPa57ojNHNZyeSHpGJVFkNZZTcEgBHR4sATpiCg5Qz3uAXMKoTK74qF5HHSY",
  "key35": "5ZYmLPdPsPRSuLGV16KKbySoN2A9Ea6xynoWptYGFNyRHWULeZDYRrhpzzGH21TdBvQEEip5CmmRLsNoUXidqDkV",
  "key36": "4hTDTcZeXudf1SgL8jyEKeT3zWmSyNhFQtPpZ2qHuSgxJ8hj8FGSQCXDH5ornVJhj5CRMq9jJan44SFgDWcK41VV",
  "key37": "5yo8GfZ7WtetFswUVozfvMRscbzKxun5VgZDLbKHhEsPCkLKWtK5LyB6gpfdDs3aTVXsPo1vxNELQBxoQAzQ6XF4",
  "key38": "4ZzNVx6ddse1Xu66cXZ9uyUZFXrj7a4rB9YC5KqdxMYqiCC5cfV3cwwc2JqxhYwwxfHHbjv8uRZWorCwyfofuAP",
  "key39": "3wUy5cU1pZF3kh1jFR1BFuZSUsrGtbJyAGWz2DSMBeicriQ6oQFBPCAMmJwrhNBnjbUNsQftPpB6FHVqt5FTyDpQ",
  "key40": "4w8GfR7voBvr5shdqsQJ8bPWFxtE5GFgLmcUMTHGn9cHUNU85zY2cSxJs54Jy49qrvJebd7NQDA7UbUPx85Gaxvr",
  "key41": "2cGeovcGGifQRq5oxKUqqAB2PWS5vxwXsZ15zENe4rsshw41awLLR6KACjoDb9zhyKZrWDSDWFxMgm8qjmDyd87q",
  "key42": "5kPULMYEW8rAL3jdY3VTvUMoVKWB7MJGA5etU1FiniPCHuhRtwK9CLkU8z5yWsD9mRtUv6kWzXStGMJkDR6S8vyi",
  "key43": "5wgNXBHnbhJasoQwk23NfherazgbXTwKDfBLYyszQ8R4QvehdPQ5ZHFzomrbD3eUytsRdvjxswmwMhXcUndZN89w",
  "key44": "4KiSJ9Tv7bYouC9iTjRk8howogTtDqxptsovGbgzBQDW8x4zubnLwjmUiDGSgzwvyYAkjAqSWMS11vhd6GT8oTzV",
  "key45": "5xBqPiH19FcSdiuSAPLHgLPBUshuyjGfBLXS1SHRoPg6NdrAFAEt9beAtEWnKUSTc4DDSu6d8zhs3xAXvgF3dfSi",
  "key46": "1Xtk4SmGgD7vnzNoBJ8ooyXeuBoAYed7idv2ZDyVNmS1Raf1ygAJSDKWsfo5ehQ5qEV8U4g6s92a8YT1fXkmSTX"
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
