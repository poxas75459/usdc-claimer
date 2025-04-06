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
    "3QaDVXi4Wvj9tPqjefPH1RTmjt4UC9tGPJ2L287d86Z8ST2swZAUgqyQCz9ZFz5UUNWMEJwqL88GEqtK7dZpWFwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Hwp4sZAuythZ7U8CiEZLgKcz4x9mG1jFoqjvz2kusndbbTg1TrjTC3iacA1AbEQK1Q8DF8vhnLwPeK4M42z4ac",
  "key1": "4fQArKCth7r4nG96s9m5f1WaDSPcxZb9cXVtECyawedoCA6zJSQL7TvFVK41ynyG9tLBuAP5ieYnwUkRiHZsCBpm",
  "key2": "4RkLGSVnzRf8eK1idpAGQoxzy9AKTfxk2RHmndcxmhiKgBmws516s1gLvkD7FiXBTmco8XN8xjKxa1bXdsauxnJ2",
  "key3": "4va17WeLXPankNcv7sFGWSoiS4zEqYrU7UV4DXyUsNAwqNxGAqxXeRdjs3gsaRrq7eWg4aWBhcYKH2vKVHGbXTV9",
  "key4": "waT7CW2avo1489cJJpp4ezKU3cUQTutfBoULVkkZEDcZ8n5cGF1MmJfe46K3FnXBi1gpGbanDrKfAPkTGB1d1N3",
  "key5": "xtXYPdjkzFDutrPekJTpQxYUa4t36CVxqnmMZPrzLZjgTG7rPmg5yiogrrMQ7wVNY2tCH9ht1aHVuFyrdm7Davu",
  "key6": "5x1uF6UxAzsXUPZnyjw2fHJPsq3ctWckCC4rrhYZK5gs7pKGA9aNznbgk6gVu9NUmtpZZ458pKG15XG82HCvM7E3",
  "key7": "2ndE1pjybzDxhRFw3QMMfFV4QW3iNDXzEtETC433aFG41ehMMkzgV1T5tJZBkAZfdKzVYGVkbhJoDLsqJPLb8PaV",
  "key8": "2Qv9ZrxFGdVeAQVSeHCS38jjM7xSKnadp5qHaKtZzUK6v5UGLKRYae8VsoQ4i32AZMRbCRWD8WpvKtYSFGniHg2p",
  "key9": "iKarZKnceKcqVR4ox6re8fFfPLs4XqLgzGC5uVFuWGZsa5wjp3gTQAtF45xTA76bwePCtvRvnAtvusHkt8o2wjC",
  "key10": "4mJxZoKGmb1b9F4D6zGPg7ujj9JMcieLUuqJ5uXWrEypVKHuBRfZszGzGEqisj73N62R4ju7494T5UF2qd87chzV",
  "key11": "4Z874dZ4JGyhs7MJVdfgEs4eSeVgZJWUJ1kptTABnyu8JekLrLjvLDwvgGvGXT7XDdxnkKsoeqz33adqgWgfMTmk",
  "key12": "3EukFCFnZxwvZEwwvfwELmEtJofYATn37cZQKg71nJjXS3rLqj1Qi2V7YM93Uig7CB7J49GUMfhA5DKWLRvRLPAw",
  "key13": "21oUrqh435GKBAkCzxnw3VjyYewUBsuWXpRwwGLue3r2XHr6gUSsEpajjMndVGtZ2qRuuax3hi1USGYsP49pQe8h",
  "key14": "5zL6NFhMoszw13ecGRiY6hL7nTcqVCjrs4z6tjH5cTZUt5bjfxnrvacyEmp4qqn2it8ydkooqpeWMkWT4gExhFko",
  "key15": "4tRcAUvRbCbBF3Zihqhf5u2m5CsKvzeTj5WXAH8pxYNHHKhV1q66tsihfpC8nsuMQTZHoxaR5Mmp5nQMJYW3UGpY",
  "key16": "2ryjkCSebEqyVL7D1FRrfy6wuozJCwYHQczA7ikqUaS5Xv4D2P1dmLis5ZNWXGvSrw7Q3X3AgomF9kxmS8LZZGri",
  "key17": "2Gk4rByQVe77XLdNA2MbWdCQbEDv3Pwu95UMKUKT9Lvimh1Guou1xJUvJXz6gy1ypABhhWi5ewigfUnFNZYxPWE3",
  "key18": "3dnzX37tnrQnMRYtUyriemytXiw9Ls5XEhm11BjYVenzQnrcKftMeakE35jSDZXRD6myuQcXpY4gRfkVxLLEcwJw",
  "key19": "2ySuzmTx4Hm5tRKSVKJ2foYL7E1qqUnFf75CgxozuKxx2jmb8cf1Y1MUDwNYQiw3RsEpeS6AKFkwnz2VGeSV4iix",
  "key20": "426Ct8mioSsBfww7StRcvoTp2Y8wAykfC877NDLNxyoM7bp4VfwwU5AKMG5HJ6Jjgb4Gjfqt6Dw4WKNC8G7dYoH",
  "key21": "5TzQ7EmEjtyzFCTT6trMr3ozcBP79oL3oUYkB5qLK3pZmEnCCxPkUtTapG4YzsftpnTQbqS6Yt25eYajrQCGnk5A",
  "key22": "gN8uzdutSng3ecbVR1FVd7X2pcYied1gtXvsNLXQPm2KpFCq5cHxaZ7xSFnGD4UVMZWPWd3dNNtpkNG7zFgcfus",
  "key23": "4bi2Nr6QKjyzRRERbC5MFb4qbF6XT7uJsyW6UJrEGbcJr6ZFqHb8Ufjmx2eXNGUULpUdEVF7dnzZ9KCt2VpBs9Fx",
  "key24": "5tvz6cyzNQb93a2kFF7gCSfn4dq557g2Jq1Ws5yHYg3drJWY5jbAE7vJjv72s9LLkyL1q5gniGAYSbRpbBGLJr2U",
  "key25": "2v97UUGubDWsYsrzr8sX1MYtY5wpchLbhexgHk9Tf6hz3RENcoxHjsJDtY7QQG2Zp6HjXfJ3B9RaJ8vbfQc3J7iD",
  "key26": "56ZJQaK136UCuwTDXY1bz9Dj5AfRownyGpD6FuwRfc6vectgfisA41jFteue5Ju6FvVa2eh3WVRYQhUCjf3g6Kb2",
  "key27": "2y4q5dmJFYhPyG4zjxsgZcJEpiucixtBeKMjhAkxR4rrc16LX6vK3cMPGMfAKg8Am2FYDgaJkoec772Dpzv5W7RX",
  "key28": "5p6T5TFg2vba5umTCBvjSQWEdK57oq65RuJooHW7D8qrHC2ANqDPYDswN2co3muPrXEdFTLAAZWL9TDutSTZJ324",
  "key29": "3nNZAV75sC8KCwAEUy4Tp8WjL7dNektHaKNZtW31vvKCHj9P6r5CekiP7Gp2bWx2XfyrhrdvJb8ZLi8vbs48QLZp",
  "key30": "65fRCMVPmarrvSCJ1smDRoTYbHgJuibJ4Nx5CNFVx3Pf6oDStTy7BwHDCkUSVz4wCpNmJdK3bHjQgiFoHmHe7PUT",
  "key31": "AhGTozsCrL22Y5A9CnMTDzRrhBV6edWLQDRBP9mk31ddjk4k5JWoQdv2XgzRErUW5kMhP5qTW8EXf42a416tgr7",
  "key32": "4W8SKfhSx8MNVPUFxMAGnAza1Sd7bhzrVc7NqyYmJWmDRaWaPpioRXGJnVqH5mDc1zCLBus6mkpc4t8BDM7pqy8J",
  "key33": "3wJN6mss2Z3x8bEm97uHz8RTQ112zK9mMdeDmC7bDmHrYY8cXnc1P18Z4w7MzqiLmJC5QLcdYhwV2yLVkF2Pzqve",
  "key34": "3eubW6fvKUYbxDc3MPMzLDdmjFno7jinsNjKYMNpGigV9yo88boEx2hkUUjnXy6ZsKgQUmFfzqUUNX3KWtQQGcQN"
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
