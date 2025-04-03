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
    "3rkLNXKZpVjM3HmY1zRHzupWybVAzUBt2mnatbnVDVu4GQkmsfe7EoJRHgHAFNjQEMMHMBTFov5nyuBz7RdhLxBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pxEmup3eArpj9SypCiTGjdhW993h84AQBi8RJ8ugp9UhdNcQqqFpHHXX1xhomeBdemLUyhyLuVrCb7ojxrq1mW4",
  "key1": "2dVKd9oBgZz4zWTfQWm42T2FKx5bL3Vpr1535zwHNaLvWi1PUXMSJ6dwzVVtBEpBTzcXgYdsr9KmWbfV41UuoTDS",
  "key2": "5HE1Thwcd4at7YtitjJdckpo71GJzusSzbcYTSGy1JchxC9WyPp8spj4RcK4w3A8v8bHp2TKjGT7NKJRcePzoJWL",
  "key3": "4zGHX5s2NXneXMkpjGqjSnfH7Uc7CHRYo6xqAx9pEguCpsJ2ZtUie9fWa5rgCHzzRFCWdDKdHdhKA4xA4jjb1G65",
  "key4": "mqqsc216wEfS9refypgYqWwD2qrh7mL7ReikAuoy6yn7Zru6gk5EfqciSuy4fVEgrPKj3amU7gQL4sBJUE89FmJ",
  "key5": "128HuDgH3J4bHZCRgzSDjm19Ya2Ngmr86Lw3x96RjqqXsmJpEnEiBeMGsua5bBpXa54ZcdYAoFBzbX1okzpJP8sG",
  "key6": "2cDE9rgQwQpkSEMYX2fgQh1A7oRtRzt1LGtgtMgt62vUejna7z8fkdhjbryXZznUmuzGq5RRkH8ruTeKi5s4H4i5",
  "key7": "2cWYZEotdwrEYjgPyxsj8nzzwbEJehw2WKRKYAj9ehKCrDaK7U1UebkJDq25HK4q7QqZPYurgVeZxtTmFrx5nwNJ",
  "key8": "5QsYpXuhBb1M5YetsjyZjdtWVg9n4E5YDaiqdPrzjzvh6AtUBetMY3f19JZV8rzMaVJibHEscTDHhJUkLcxp3CVS",
  "key9": "3oszFy7TgQGiTYwMmRsj6sHcF3QanhfzzUVHaTJe4KKGzy681izt3LwMA5HAweLVnGLGoBT99g8FZNqyQGmjssdU",
  "key10": "2E5aPBXQ48G9HXLBBrGAdZsRm3zEnmWYjQRSzguq24SeFovQ6hoH8dESmbHr1R2QU8zbopQrTKYQaKc14Gp2mv9o",
  "key11": "4qcwKmEErnrffqMJtbnE4iEEaezo636WzBUPMqdsghWVMM4e7oyX1c6AUCRaHfVW1RURcgTZi1Sc6dgewSWm7sxD",
  "key12": "3eRzhhTA678tg2uKiVvFGwmEzqzZjYE6GC2MTSKshZsYnMQ7pjU6mEDoUdVgfSg5AJfCSh84QxLbVd1rrPVXee1X",
  "key13": "g7NKcFuvSKZyxTpcbDap9ndci3dT6QzXzp4KLuzYEErHkV4qxrqJ8CqjRwPaQj5VYKCHuHKAx5RghpkptgUeGF5",
  "key14": "4UESbQyYehqF5SpgoAd52Yuvzy6iBRQ2jpxMhw75g9h2RJC3R4zeVz9BmNuATjeHNXMYCitfZYXTKKTXmfnGhYMF",
  "key15": "4ttYCLk3mey1nukq3WFeqc2Hs1e83KkZt9Cb5Qmfx3et4MMjmRoUXNpUyrf6MdMzRqwHneo3eFvb33vcbBGGzGVf",
  "key16": "58ybBXhHsWiSEW46SYqMUd7ZTvGij5VMwq4UUY6AATMdK8Jyr3FyYS8qS7T9wkDSePfGB9zcg7pSAVCFz6TfnraB",
  "key17": "5PWoLVQF7Lcq3akAwySf8kQ3xCksCfSpJCC9faS8YkvJ1KJvUPh1iks2VcVSQpqdqApeXc26VGgUQyjo2uBAz53G",
  "key18": "3Hagcv7RLSD9G7ErWR3Jsre5wZRR2FJgmFGhH7HveAcYhNiXQFDg3oMzXcqxJxTkQ2pLwHbzhzhtEsVcJbhEVvum",
  "key19": "UN9YnTvMovzwWuiKmSSHNnSvgRe31TGEfe8Nzit9gbcZCfFwvvVwv34Ro68ED8m2Qsx8ZtnpGYSTrnjMSSqhJoZ",
  "key20": "7KeetfhWGfiJ5mhShoTwQWpFZrbqBHWKWq4p4XiuvpdkcsoqRsnkAe4q8JNUiRguEHNq2H1RZEz2LmQwabCUzQh",
  "key21": "n5CQf9Dxs15htsmJYjtwomF8D3rtmk6ct2HeaLQvJxAaftxJEJZVrRwRpCnNNJFeEcc7Q54tSrdVkxGcTkfnEdx",
  "key22": "2Kh5wrCXVzEpssSVV6G94puruhZTZyqsqSwdjdfR4maw8ui2BmkS8Kn6rdNWQQYqh21e7teC9Jm2AgWG3vBuWsbP",
  "key23": "4jKQWEfiiwDEzZkBKyMs8cxTBPMJnAahWsA4D4np3aihzFczDjtbch8ua6EcQhF6xGAWXdpvQPJxpBGqx2wnQXjd",
  "key24": "3D6qNesGJssTyJRajrtt1u23uNf9abvcy6cxoNqRMXAQLwHQeebd1bgdWehkigj5F1Ki6TBcYePnBBdmAiqJ3kuB",
  "key25": "56zCLUCwSd9aMRZAva99VqeFt6oSyF6f2mpHHbPVcmFLnMfeUHSFGBJ5tQ5E3x3rUp8wVKfZ2sYw2p5d2b1utLSC",
  "key26": "ok82RMiStdKRyEDTxUgnN6vFi7VSnWWP1Jxt24GqABFcj5Pkx6xgbCmJQdZCcUDKe2JhZmhcAMqcMqb1n4VBacf",
  "key27": "p1rzUF5AcvoeDiNjpu8KMC2KdkaCZP2E1qLi4w3r6cPADcWHwMwU42MiByyfW34fPJkMgik4y6Hk4Aanqpxqbyu",
  "key28": "5ULMCkfcUyfda6qmp4XjtGdknH6yUJLEDnbhmzqKQrNFAzbigL3VFLFL3XegnjQPZQ2MPW8xGPzj8j9HuZsW968q",
  "key29": "3Mk1CZvZeRikEAkeRmkeCKn1WdEtnLGme2JYv2e2fnrj2ARfHDgzjpYHFQm4CkcFJnUL58WuTFFFKKfmSThettpf",
  "key30": "hZzMqhjDTWhBCVgdpFDBdswVh76Qac6ZC82cXgQ6Z7CYdJvY3mGr71q3vfQ1nFxmGrbwwKFETh49p6BhuRrLwSo",
  "key31": "42seFxiKUGGUGT1r72jXPn3Vy6XaSmyow8NBP883ZKtHvSjbQzZEhwxPeq9yKUzpHxfTN7iXMhGDsf1qUhKKYbCe",
  "key32": "3UgWKqdLcTm54sHKcGpbSscq4GB64LNrbm4jicRyiHiUBMGkhT7icdHbuMJVYb8sbSkaKCkw7rh5NaTwFwgwRJsr",
  "key33": "4eqWNZj8oGv1DjLkT8NeeMvzT9yHAMRQSBUtfHufnLAeykF3DEmDhHLp5kJXd8qZhdmFJvwtctT6he4qhqrmTumy",
  "key34": "3TsTwgpoY5DfeNoi2FdBt2j1GcsQER1kdi47ATFwZddxGWZXxjYWY2kk95HsjwoXgytMDq1XstgMWmTF51kuzybc",
  "key35": "5uF7tMGvtXLt5rK1VSQnrARoWKFL3gQJvPD6ctxnK3imgCRVbzqjPSPc4vknF7bxgBBDFS1YRkWgBkW3k5HrkBHH",
  "key36": "23Z92gn5sGegU7dnNWDWTiVNZtfidQGoDeMsYjbZsE7uWUxPH1EpgeiDhe5H5dcz6MWHAxBnd3Kb4qqv9rZWaNYn",
  "key37": "4zMDXumZP8KsJTWZAHDc6VGwZydju12g4TSmV96WgwGyz3189vFm6jBMBuXgiYEd4Xm8w3pqCJCuVaFLQeG4n1Yx",
  "key38": "ucCib28QmBzU45XLHa518disXt2tBXhwh7yT4Yh3VK2xPNv6Xig6r6hQU1JTqxRPgup5x1ip3Kq8ZMn3AkgBcVn",
  "key39": "pWk4AZ23jNdRT3L4HqpCzCQcqmetwt9pZ8HrNaeVoTrn9j3RBQc6fPPPEZwebZNm5FLDprTA85hx6bf1ZHT67rz",
  "key40": "2R7U9R3azRTJsvAfpTxxzs9St7mjeVBCFbwWKFyMKj2i52veLk5S38Usrb2VgYun6yr6GrZviWCWPcegvb4PY8J6",
  "key41": "bFugQo4N4h2e7h2ifhdYj28VQkzDaGEPQhUy7W8KQSscDC4M4YKLYQtXEbuYx3HcWzKPkPq7fhCjN8SMbGnrjDJ",
  "key42": "26so9m983j7ctUMtMMdeaQUmwJrSatV3YU9FSoAjvCZcfi37fULMUPyvKhJ4BweXP8fDgyHWR3HE8gLZ23LsS4h6"
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
