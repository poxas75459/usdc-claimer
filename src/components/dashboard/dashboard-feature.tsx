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
    "5GVYcpbm5NXXYi4YvzGpibxt89eWU7Rwhyw1mMZJLCn57svufGXhk4bkRtHyTqydwGf1F8HynsVX9DSJZnMxmHpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NRzfHUq1BQom18AX8LeMgCqtTNiqrbZG1pq9V1czTuGm6zR6T4QLn3J2NfqWmNx8D4Q6UHZYNNQZMvw9BtFf44v",
  "key1": "56Nq3nhq957q2CbKnua8rLshqNuy5U1RHFN74ieh2tzes4W5tKipik3eJKhzHr3mo9AMVAqqW325j9C8VFY8pjD4",
  "key2": "2e6xDs4VzrMiz6pw7peqXAqDtTV5fR9frEFt3a2Nav33A8YH7JaG1Ke61dLcUMvdSGu3SUWcyFoWjMe1UYSWHJwK",
  "key3": "3xvpCWjF6CpKbBkxhHKxPWNGW4gVXLt9z4bVqHWbqvyZ1PuqoVxvfjuGCx95Pc6KXkeaDGV3zLEdfCZWtbDPYx2a",
  "key4": "3h2Nyn9nKtJT5TBA4Eidhw5xhAAxWAGqQd29PpM7C9eyS3PM3BDTWy56st7R5Er8jz33isVZQnwfgd49yyfwjPZq",
  "key5": "56GmCXvD82RiwVM8kg7pQYJfc84hb6tZ4C7P72i9qDy4cYPnNKW4n87UvRRw8JbLs66R8E6HHitLQajSowRuxQA7",
  "key6": "2Z3ngEGshQBCPUGF1Ly5H4fuRztzxXKP41kE8CD9aorFDk6piBTJhMtJGPRrTbnBo7VUaTiJeJUKmysFYZU3K8df",
  "key7": "2Y9KZ9ptGHBPbUh99NhJFEyj7jgpJH1SuUC7KNY5ZXZKQ55bYDr7Xd2KCjBR2pdfPnc2TezZ6Lt7ZPDZyEHgxUdf",
  "key8": "3Zp1pi5cPa8RcNMH1TRwkJKstJ6uuSyuM29wuWdyh641uM5eTxqraLoD14eMQU5YVr11oH5Yk15QV4yBPAKnYaqr",
  "key9": "327Y4DTdw2bpPKGDgY5jcjrM3bibo5Uuytc6PwpNee7k5DZLpeAz6rcNR1ZcNHw3GxzznkVM4FJeVP5TrH3pw2yo",
  "key10": "byC59hp9jNHjgD7yB5nDh6cVMf6uJG1Gn3zFR3YSzr6zn3pj2xHdjAgML3AWw2PXBkN2mYrHFfxdqw9r1zbP9cG",
  "key11": "5D3zxbh5dJgkZixrwLToN3Fx2muV8c4L1V7gCqt14VjjKJ6dHsayJQZypA3efLbZyXSwwdMo1YZWAr4fuEq6foxz",
  "key12": "4DYKPdrXx9azycBwzYtNvFA5RUk73AA65ZdTPUQnVRq1vSEK7WgfH4zSmV1qmE8z4KZ9vTQvweTMnHS1AHnAabYv",
  "key13": "5uqDtyudvsFj8bFVHH8WTXQQUWBibGLQDt5ymZnnNRUeX9sq5ZjXjDBq2ZP1Lia15SiUnFDbJKcPx9aHKE3kLZuV",
  "key14": "3VaA9EtstyYoe9WuYvc1Eb4ZTsQsJKCo23x24QAfHF5URpnPdVGGze1PjwoRXaJmqQSbdXm8JHB739XQ2YoKdA2c",
  "key15": "3cCxqwHFhprhEDphMK9XxLY2AUms8JhvhVv6upepn9U8frqv1WTX7fZmomWBW8YGe7tXqPCYGhV1fzvs2319Y5cV",
  "key16": "4LJJfi895KExbtywS4v1t4qCxjTLPRzWJS7HLxtqoYXF28dhmm1VWApFSqw2cjTouSPUMFGx7W8fiWwWr6R7aeF2",
  "key17": "2FRiNsSyTFU6VzmTYEskrGMrWwP7QMubf6RNJSEY3hXMrn9rTk1fYi41dshrPL5trq7MKffDPUL6kTN9eY1ZoYvx",
  "key18": "3iEWpaEmV7kh3vUz7EKgC54P9VogUV3ZLsnEXX3R2afHrYtWgqFNn7knemsXucpWonXKk7SSUdh7Q1kjuabvLk2G",
  "key19": "rXSy2SHBBGA3eDB9AiGgWttyyHgj3GKFYGF38BCxSaB4hh4kAcM7RJV9mYKy6CKegkivn2QtCiwFZ797PVZHP8A",
  "key20": "ZSZ36fkgMywUaUYJbArXhxXiRR8BaKV6GpnHMDH3dTTWA4VU1FZf8a8R86dYTAuFnQ3P7DpXnba8fFgBthHYH2H",
  "key21": "5xveY3t3Rs9bQY3hvxBr2fHEVGfMM4metWZQKS8pXfBNDe3R75ZZmV9cgDcnbMz38CtHwf6V4MmZqYcndSK9PLKt",
  "key22": "5qdjNb1HAE3PP6cdz11zsGK4zBedopgUUqrEYcANyiv5dpXXKhvZQjc6RduEHC11K2tVGTiVYiicKMY6XbL3ALT7",
  "key23": "4q1akDfCXK4ZGrcTjm1hHr6wrZoKE8erdoaoToSEQxhHL3LinA3ShZDrQ7vwbjcgwsXWTNp2WZYo1yX3ngtVcrHz",
  "key24": "4gPhXbPizVRKutEwGaLSDFRLNXxHiMY1CQWibS7M3DVMtUZ26rkuXmqMtUF3Zpe1YCPL7zEAiWw97cRv1e3FPLgR",
  "key25": "GoWSNEC3MsrwLnSnCtcet9cCf7Xe2yhqoc2uzxeMSxvJt2biHYiuUdDN2jhczqgGeMcZ1Y8qLg1KgjXt4Hj7kTC",
  "key26": "4PvVVjND2gKq2JehYBNxJ9J6cFK5qUyDmHiDNMuhK3Q6gjuJRQqLrtcirmQb6dtzU2y1pqZ51wMrCoHdyFv5LFBg",
  "key27": "yEx47sUiZfCKFoNb73gfjQT8sgoq4CmuHkLuzdxw6ETheoMdTPEUpnDsBray7ETuaEx7Cec3V22LrgJ1FZqu7nr",
  "key28": "44D79dXtDSZxv5gGKFq4sfPtGW3PvoKhVSvmKNKDqc68bxfDUnD2PvM3ibRqiho66YWk78Ev51MR1Gy5uBAxeMyB",
  "key29": "4ZNor2g8rJ5U4pCzjPraVcRx5G83g2fy2MUWWQsGiZ5NLLHSmder63SHFErthugD4FhtfXLJ96Q8MuViD967EFKP",
  "key30": "2zz5ouMKLXBtBzBW1eTzPw722hTBnF8GVMC6db4miP9xKX7LSNNEWH38rLkRPScuBSfiowAtLw8qzVeWY77Cr12r",
  "key31": "4QW8Tb6FDu6UT15wW7waxE3zEirwNX5k5f5kafxVoqR4uGzGnE1gZjhqAjpYXt5aA9dnHJ8S6DuEtWth47jGb3Sh"
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
