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
    "354LvaA9gxWXbjqSfZaTFct3CgmNFsUECj35CvN8EnhrLbqjXM3Sr1M57eLB2EZPBi3pJBEs6XZQN5UXCF1FYaAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CmmTzZM6Yf4V6aZ2QQsnD5oBRn8vZks5uobSpS9nTiaoBsTZjWq1krfHQ3rz8yJwxf6sRTUyqnmXzqTxhbwHNqk",
  "key1": "3XqvJJhtqJr2zTJW7DwQtPKEjrk5hSbLCpQ6zyMF4RKBZvUtm1rwdNm7Hr2imfkUoj4BAEgkiDECJEkyL8eWKo1A",
  "key2": "37RhUCa5WPGnpvd5Mx8LmcVtQLThHCcWe26fDoT2MmDDwnVxMMChqKysY7t69vWiGSpeiMk7DiKt5At8xHC56qTF",
  "key3": "4XELy2FBsgHUqSKWoda3Yh1cprENsk2EEbxL8zJeQ9JZ4E8bBWJxyh4cwCGA1HZWgLeo1ZszsS7SKJmVFnPjExb2",
  "key4": "63JE3zfpKKfFtHggJUc7zmbjfRLb7RFHaBJiQupxTdF4dCqSZ14jsEReVnCLYMrSkw6vkYikXzy71uZYi3SrJvAc",
  "key5": "5B2RMRZfydif4Bx6NQ5QY7kC7q6SydfKzqfWdA93gPKDVmn9reJFuULQgJeepuqZ47PhHntdtCzRPkMe58kVQbk3",
  "key6": "51XFB6BVVBC4oX9TMUycun3xzNYGsJKLMaS3srL5z4NQdugSrGwxtZMKA172RkAoq8vHXQVq8yhej9jgCHs4dYWE",
  "key7": "3qw5iBrvVWsFBnD6ETVK5dJU2mSznHvtysCPs9pZrWkWqnMrtZxNXxeJBZkkU8uQyG6VFXU73KtgJddEvmXzzteM",
  "key8": "5uicasNLbLPfrnbY9KUaYMnhbjf3aYRtA5kmGEw17PNyZpDXXDMKTvVzxYYGBPDDFLY9gYtmhaZNY2xq3xaQ4qYf",
  "key9": "4UNTuP3yGiNN4ghuteo2C7EM77BT7M7d7eazJTJkEif5p47yajhhHUsjQPQr1zazZWZeAebLUB694XedY6TWL14G",
  "key10": "3Y7Sg11fDAa5aeCc9jNwjC4GK7TUATehA5LLC9o2XHAqLHBn3PYutNexNKJm1iHeVjELrULrQP4yzA231pQUNuev",
  "key11": "LyaeJNjiu4Dh7dZZZauisUe2udrWQgE9a7vXJKh1NGKWSGD8YShqYH29G1qpDVuVpMG8yCWEpPrTNpZBGpVEKJo",
  "key12": "2kb3K3ZcD5PYnueCjtwb1BZZF5Hw82dhbKuynKYQRYRwZs8ixpcuED4iyuwJsFeSRUC88gqMaQREsuNVAX2pCMa1",
  "key13": "2MejwZLMnXao5k7VKCyN7h8mK4iAa2M1uFnB88T3j5apTEfFqDmytG8EmSoQDYjXGhF7vBLSNchpH627G8w6Uaih",
  "key14": "3LSije8ER7AT28D7so6teDjyiwcDBpmvSxm5V9UaGCATwa2ktJcyCdj9PSGmEg8H9soTLWLqM682p3kFb82URoiY",
  "key15": "65FLDKGshSA16at1LaV3MLVHvvJXQPN8GZ5WFXU2ZNm44M3CZQoGPZV4q1b4yCcTMsH91KKBF9pEmjm4SEyLx2Tz",
  "key16": "5ATJGroQjpHesscZAPEFkWxA4EN2cx43vGTwq9THXfjhUB273Uk2VYzWipyCQg7EAs33uusAaEKxN1MV9yNGEugS",
  "key17": "JNe6ybKsXe8beLVbrnfCwFBPG4Nxr3Mj4q1TP8Lwy7tbCWgaxa25Jo31H6V61cyREc1YH4QXPxf98F9tXGW9r5X",
  "key18": "mLKWBmGrF2S9dgGqPDxiH7ebKX4aPXUVR8vNq3tKDxShMDVA8cqjFcZeUucV76L7Xd4mvkKjzqLNzQebsPxLwDC",
  "key19": "3PbQeC4xGSRPtpYEmfvaKxkVX27SHgrmiqBXB5f49puFb6sbv4jad9qB1e4EDYpTgoT6NGfNxs2tEjXX5CqHsdLD",
  "key20": "2m9BW5QDhHyG6bdmssD68VkFpSbpGJxxymRWvnxYfzo5ZvtzrQ9jipFNqShYL5TQxGgnpgQ69DKzn68yJS2nFLX4",
  "key21": "24bn6nbHnXJbznKSm1spCGsDGU1iJptQ69qCkq4cB44pG1vKxtn2L8pnsTjxqvuNS6ziYeHFaEnY3eT1WqfeLX1V",
  "key22": "WS6QCCxkeGJsVjki54ZRY615enddrNKtLTEZu41jJY46HnAsKAzZeA2cu9JxZKn5kaXEKiKXQkwxnVcvRe4ecUL",
  "key23": "3bhpSWAYhaFod3CkSAxAypdC52Yh48vGT16yoUxGPDEH2VMJ4bZ7y4KxjT3m5GSY4akzY5Ng2Ufc2iPrzyPDmLrt",
  "key24": "57PeMTTuXDkcmnYFrHumBAbMCbetM2ahtCRrsDt88RKrqAeLMCsXVy4Fy5J6uQ8sVQJtonhf2gWNfQHY3X3fhUrq",
  "key25": "64yiiXcg3PCHLr7pKmjtoKeB7mqamEPZGUqt7e3SqZJCuuRJQf5QwaxocePA2qL2inBNGmCC5oLMNLAKGHU3NzDe",
  "key26": "21629d2DPRiBa5Jm8qVN1R9wcBfiSsaW1EEp4CTcf3juH1f6iCTZgmFYjSa515j43xh2vSVWzGQiL4kwfDycEF8n",
  "key27": "ZCBUS19PpDteQ7HR27CSj1s1kEeNuBAd5tNpZP5VeTpwsDHdTsSDBPNK66dmReMmTfL3RPQc2k3oid3m2qXdFC6",
  "key28": "3wHSyDa4wdpYkmYjM8ZYS2GvAJJtFs9DG7PPMP7WoGmnfrpXcx2idSRa1mANCvXZgJTm4CtzXiDG8WdDbUgtnKFg",
  "key29": "5EqriLsGoY1Sxm9AS4ppFfj7UJbwKEMPmN6t9wDPSUuBnvnzeixgN29RppUyezYJCmCt2NjRKNGiyVZbdAWP22jH",
  "key30": "4Kd4MkT9Fto3VybzzeJMUhp2dqs2GqLCpcDszHKjMY4BrVjZ95LawU4McstoeDSoY8yGjUdLMpcHfd6XCPRpEENR",
  "key31": "LH84kRG5ba98JZNfpKG8oyFcofPQtSnq9BkRS3WuQH6jQQLuXq4F4UbhornxwqCm2nyfoDsJvWPzeQaXqm3agMN",
  "key32": "4gkmTrf1nzYJay5E8K8kMnQWwqLciQk4emqbBmFi4ohaewG6rqrAZ6U1JhQJpdfV8gkSKhHiU3hQqAhwowKSqk2q",
  "key33": "xY5rdVBQNnAmcxdMm4CM3dpGnTrQ3pCWW8RbkfaECWtecFZBaQ1nohmzFKgHNzkcuLkKq7R6TDeeS7xyv4GgqGG",
  "key34": "37APvRNnmUzj4BWQNxBfbGprUxLZ1i5VtUaHCxEizv8pjfMUBNG5DnEHDVfirWw7vZRmWF1KWzTcQ12VwU7bucvC",
  "key35": "yGbJZAuvWoaJcicUw78tCws1nTCYDuhZQTutBfjkTQr8K22cXtd1CL3QhMsYmdAdiFga1TLgLkHjrx8skBjmSdH",
  "key36": "2CsPGwikhPoJZKnSNuzxk8mfKg1PGmGivxWm9D7DGLDqBBNQ3XPwiBonheXXPKPz2UTSfNUcemqiya1B8iNjNPiz",
  "key37": "fU8ojZ86LSHTAvWxA88fvro2KQ6KwdVse7Zkz4EegkVEWQds3fVhkmAJHcYcjqdESpFUEh9H8hi3vLaKsAWKUmY",
  "key38": "4SEBtuxmdjsYDLuCDpUsYV1M8teqYstnJ4XNHkY1726kdTew8ddoto8V3i83ZcsW6UcEfrreqK8BnZhzDsetekpX"
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
