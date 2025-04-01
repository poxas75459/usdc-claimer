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
    "Y6pwpLCZMv5w623UX1NvFHBqavhcBUE3BVW9C2zHNNuuYXmQvG4wSheL8kUUXSX1ABiqxJknXGiVKX2kjJEqPAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kGyXdFMeHVu4f1LBkhr833BWEWxJz9oiMxeJLYw1p9w1v776pzogRqxkxRued5CeJED6MYtqmNsmifdjLp8HZLs",
  "key1": "1NKWw9DGxwFFkeSFzB3jaqyn57CjwTdQSuDRfFQhRnaedt98gsRKzh6uCrL61DfQyNnbNRfTGByS8ebYW7uybkH",
  "key2": "53X2uchthjfTXVRrafYDupsogwV6o6w8U7HBRbib3fg7k5uhRo6zfuB9WwH4NYmMhAdNmzK3F45hVY6Ti4J1dU6Q",
  "key3": "5fc9BvbDAFmSemKMHEfqmX8YByS8smVvouAGg5nc3WtEEYAkuH76KXnSJT6q1eeSRSQKc9pGJZryHfb4ao9wvpMn",
  "key4": "5TQo6B738YSPXkmxCYLY1nL75G6L3jpFcEDqwxKg23i4SMZVg9w6zfXTGLCrKsoU21abosH1JsCT2hRbFsZp9QUC",
  "key5": "21Ae24hJeiKsNz6zwqpGY5xqLPqcgRpp2dHAGy8dKnEHwFtC12prDxeZm9wKzWA1e1FN5wBp2Eycpw7u2cXRFprY",
  "key6": "5zwgfGZi3iVXaygBcR9xvC8xvdcfBojPatckVZs46mbGcv9mC9uXJCCzHYTf78HruXLPFzHbPM9ThPyf9BiMuaJt",
  "key7": "3iteAXvhSXnNsrWUmJgevUWP47GWHrjwRBm5XxNJwxwrvrniQiUP9BNNZE3BmLxRYxMPSbfSnDGGQnQY71BXwWLJ",
  "key8": "4rLFMbwnm6Tu7qnp8GYgMgidvP7ZYFasey3jxj5qzBwgTJaVBKFG2fMfUYcyXVPFkJiRL8Xi1nLt3iBYPSS9zQCc",
  "key9": "31zChh1xQwDDGrGZY2RPrFwKasCbkdqbAXwXBdad7sTPN33icUz3FtSfTXiGS5WzkZUTkoyjB43yM3XYgXT7ZaCa",
  "key10": "21dLDfu9S9d7s31DMju9aPcvQGGDh2byL2B6yVhqCQdzuEuU28yRd5aUwNpYT7w5yE2o4FrtKff5AZXU2kgZrQvZ",
  "key11": "24C29gJDf723NixRJMe3DEfwibAsUDFtw17AVKTSSBig3DULWDgFrGEpSvTQZLeTYVHVA88Tid1daSzTsxnUs2Yd",
  "key12": "5hBBunzM8JNTTcGXyCc8g353EaMx9ckkqawtYcgY3SMPHWWMvaQso61i3J56pxaGA5r1jKGUTZ2uNTfNiVWJAo94",
  "key13": "3Vn59eazHp2Yat9aFXFtH8m7ck2DgB91j55MwHtisKgDPiYjQTPZ7HHymKJz5sMsipjT8wwf8MbFa4qt4trp3gKJ",
  "key14": "2t81sitPwhZ38qELVUvnhYA4P244LF9FgpAasBrWm2ioPFxMocqQvzCqzt74meWqTpZEXLE5gCXvBQ8bYgf9bfg2",
  "key15": "4gEbbQuAM646DmCxyhtGqiSQRdTY6dfmUJMo5uR3LqFqhXR6pxXtUzLx4Bsw9H9fxdRtfUExtZvTZefytjEk3zZ7",
  "key16": "3cL1UaHW8SSvadHEg8W3EkC51YZ32J6DqMty3CUQ3HmTRnSsishuaHVmCghpqJvS3xAWenpi8HjQpCcQq7pjg6G2",
  "key17": "5DvJ4KUKYxKDsWfWzic3GdWhNkZSuc57YJvKXBzsBko67FxSSgHHrAzFoq8DcP6eHXgJNfz7iKaa1vUKPqfLbJ2g",
  "key18": "2h7qL9tSbEHgzifkp1aH1QVsbvtHWg4qEFqKMzpYU2MJuF9o7PxF5Q5YFg1wYUw8PKXFeBpQynvitVaBeTSbKK2U",
  "key19": "5QBJBppcLUNSPoepKh9uXtbCLdWKG5jgo5SfEaDpuczTNwW8M6AuLJJRDNjMeT2X9ucRxn2z625qk9dtUE78ZAec",
  "key20": "jZWKnsvsyRUBUgEW9Kw9FPBHQEKvJxzYVEARZXoxysg8a7DQggmUefWNXJcj8Mo6B1KFxbq4YnNv6my5CpXq3hM",
  "key21": "4i8xyYsPnDz4ChyPH21SJDnryQ4R7FgBJ7dzwFZ352B4f9Ab8G8BCqzB76mSVny9WxmnXrMKmzFBXpix4Z6xiZcw",
  "key22": "41Zo9N2R2L9MDW7CJkQDCmhztDbbEZKr3e5sB7y7ksKdrDoK3NXJRYb1S3FgtZtkmPhCduAnMzcoQJH8bqS7Jvp7",
  "key23": "4jvRbWnFzjMJvyQUdhjA97ju3jW4vB8UKE1tzgcVJqzsJVuwqTYniF6r1wFyUQ5WhMwNsPyriS9ryiLyCUp9DFEc",
  "key24": "3PrUt2h9EtfXCkjQvTTFVvx5NzZL16JHCei49Lb3FYG2oYi26sT9Ve9vbmoxFBLDatnb57K9iwhvD2mwkRaTdhH9",
  "key25": "B3As5A3UsH9ZErrPK7TRkppq5NTEhjW8sE1gQvvt23HMZEiDCLSCKBpQrVZRoVdnM2z9bHZHcwhiB1CdpVvWzVk",
  "key26": "5AP5tLSTJZiuMnBXtxU6rusXSsBjmMVK3cpFiKD5o2rXBYQcHVyEz7JU3LJPgbddd8kH2UvVzfCSu2EQwS4bjSFd",
  "key27": "urcp6WBGqPrUrD8MS4XH1XkMEPfjwrpBaHJBY734edrVwj3JwjudC5TVATqxMkiTiEoEFQ9TW4Zj9GHHDKX9NRo",
  "key28": "421VCYUWWPZ7QbGJdHr2vRUcz2zSLWTJXP8uC4rBwjXQ5m9bCG9otXnxKHCzoqgVsUFGUWyfmgB2fZnf7PwWzC4r",
  "key29": "5dxX3EDrRYLRiRDTm5ZKp4jjt45ohc8cugh32yr9iFxpA8rKr4BYngdoU1D5AF646fzuQBUrVURap4J3dxKEft7R",
  "key30": "Kx2JvfCwYRENfVrmoSpcqyBr3FuLGDaF3HrNMGrtBzrCkct4N8QxABVznKAfq2cvTGJcStWRadeGD5wmyfcbpvf",
  "key31": "46oiNh9784bdX9iUCuutjWHTXM4pDeGsSTUnvukV58Fshju4KJvVR46qSacb1FpFBAraAk1VsMJfvrV32GPTEphd",
  "key32": "4hF8ZLen2T1TwqmX4sQs3ftiUwPjwUF2qTf9tNJWPVykQUvmefRmLEcim27JuSiXB3QPVyRu7eyBrtczKx3yb8H",
  "key33": "4ntrhFEkmaYcj1nWjxjTXUj4GmCemShhVTXmXWEMQM6msmorTFjaQiCQjiDVEi7QUqLrVncPCvhcTg7HBBQixrC9",
  "key34": "2iyugd1Ly2TJGJ9tSY9pAUmUfFGhyWJSAvT2GKnXr7n8LwQ7bj8C92JJxUw7soH8r4FoP4Cymdvbw3f26BhC4Eia",
  "key35": "RrG8F1e9ys7ATPSZ1gGFYgu1pHUQnoiSxJsZk9pYAYo3N6Cm71HivzWbFskT8Hq2pNstN17EUCNeKkiCbCKwpF7",
  "key36": "Awj3kH6xefo3DLi4fJKtTL5xR58HRFHWZEnYnqEMqbPUfdqpLCgkzTX2TU9o3d35FxqA8sW9qrc4wuLbRqUUcGN",
  "key37": "2wYAqnbwzhVUoPs7ejrb4SUVT8otJgxwWpZF77KF2vyRsGakfSFZckY1kqoErjgiQgW5iUDdLE2xGWkFxgLCncGY",
  "key38": "35nibq7siFmr9Ud9FLQQEEoeMG3c1cfjHEL7WRCdQTLBapgjwrqhyEhCnao2ZQL1E1mYd35KJb2M4mhxfmV99UCr",
  "key39": "4NGpZQp47CdXyzwkfGWrPDAfG13BR6bzCP1pxjz4tTqeK8Kw3DJ7qRdJoF8VpxMtAWtSRWnFaaaqEoqk8vLcFXMJ",
  "key40": "3ta23qxh9mCKyTkF5TnfU13XHzcmnSCGDmDhyatvxEQtvR9UrxD6JtcauKktvuxdw7fzJsiZShWtGbg96BS42VyB",
  "key41": "3ok8bhNRJ9Sq4vd3ZJjiH1Pn5ACmrpQdkMpVBXqhg8a8UvSYFsDJ1ix8aCeNWsecL9oLjTnberKAHef9Ba3N6NGa",
  "key42": "3A7qbsuP5zv5HqwXx4xU4ZB98kgQPCRjgZK9ksvY1FUCJ5HqC6wwzccMF4jYP6PWHPzAPsUSn4joAypD8XJGnFLB",
  "key43": "4MDpbHEWcxWQWhvzRwwqQbhaRnmAtvJwGUyb9bTtfykqeEe5yG7wfQJzvnumsSj3QLG7ZBgpXmqPfALnhRfi7ERf",
  "key44": "66s9Jgimm4emXLRXWfgBcsjestTTAaf3Jiw5JjSX9HjKWS6q1cw4py8oqp2UXwvBACyLcYcoaEsoAv42k12FJrif"
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
