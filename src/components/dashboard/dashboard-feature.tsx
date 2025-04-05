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
    "6677EgDjuJhCf4qYsAC9Yr2sqzABLC7WsrVcy6ZXAvi3s7WTAJTkg7onqvcHuU2jdhsfyV86zpPLfS8RrLUJjpEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fLoDebgmgSJzUQe9pUWrQHG6m5cDgZA1dzR3dPo8FBSRRs6vMm99rtJY2ndcCnbBzkpJaQqTwZTZYgG9u6iFkcH",
  "key1": "VjbpkJT3uJMYoLYfG8X7NwUNyTLJJMKHUfQ3yANbHD2u983zqdMiauFPrEPLfbaofreWpGhyjgHyvE4RHT8SWob",
  "key2": "4AQitRoc7S4s7opgpMAmmHLL3rED1xxRVwijZ6x1ZJPh3F43WqCtiC6tEUH4SB1AHS4ve2uvG6uqZfwsUX6fgd3t",
  "key3": "36gGpWbH91kUEUdyHjyQrYmnHxCJcZCaqRvy6QhAVDMwbeLV3Tjy45bDrwxYgMYXnXJTNJkg922SRs5wdET5TQmZ",
  "key4": "3nN9kKFkbL112f7Cw8omFcmToS6E3DhfRZ5DFLbXrNcTev4TXpFf7Wi64p4Edee6TJsknWfFXNBNW6bLS6Tk8HPY",
  "key5": "4THArJ5syWdBNTi2KJbDG6aFs2sE89Cf7r9CRMPKnckZi54R4zt6SxTiB71CFGgBr1ytJxEmverjiEKi1WHcjkw1",
  "key6": "5DQCe3gAPtbsoYdgw9vDeyKp2PxCWNvnDwy75rkDEDhdNdJKFyvSPxLyzqWPZyq6RsG8PgFTgd6EnnE2rZqTa3yx",
  "key7": "4DcLaDfJEhroP7ng8t6ZbxWFsPMm75sJ1xtUReMC9y9AmbXnZk4GgwtfBMf3wM76YFi5H87oSkbE1srjXLgctBK7",
  "key8": "4fyymEV631gAjr3reaH5yjge9iibKvtNUFcVpKxWcAv5hBq89wXQTQtjEpHrV6qKgTgtj5biDUH3JGVDUXjgnfmq",
  "key9": "65VN4cKt4oCd7AGcjnGniPN4nxPfTV8PdKFfXRa1UoBFgUjxmtx7z2N7A9xWep8byQG25S9cHH64urKAhsvPh6hi",
  "key10": "2M6jXZZJuRayQqGfiyAtSJG5uSqnP2Qh8ikJ6EC6yEmnaP2csZmxLUFaYkTNidTBJPknLSK8GTRzLacwQnRs1ypJ",
  "key11": "8C6E7LZxfQxMV2kopWTAT3oe3hAKW4m4vf6WniEdud4Ch9k5gVq9yF3PTEE7Qafkq5M3Kp6b4J6rLnZfhh2HAbT",
  "key12": "3Wr7cP1189EtXrHtrUEEP3T9VcGr4PUBiq7jzbpCSzAGYz72YFpXLmQP86PXfZtEzTeRPzcDddjLpHmY44P8gAQ6",
  "key13": "62MHQRNp5t8FD7yAw2NSgEJTGMtoH6A7JDkwADxihcWXATYtVP78Y9VZVFzfvZMznjrNLsBiiGb7oTYGbffD9GH7",
  "key14": "FWuXbp1NUUGxijEY3Y2NkKk9RtJjGLTohSYzrBfTEuyfLtoeCErY717eNvaj9NK8pjJfrY7U4HfpygZAM8RJyAb",
  "key15": "PuMjT6vLk7n424PCcuvJX8bA6aCBa5C6q84Yeo9xSyV8Bvdh4mCD48JKFyQwff5K53K4itVvaaZXsYdYqnnZqRc",
  "key16": "2bL3ygKEHSct1uoCbmqvA6RPN9mcHas8CyqAkCRSZUT2U2LmzNtmYoZcXPqVZXG7MXTm4LsbTVFDSqhxLJFr6usb",
  "key17": "4p6FZZaRUKxSpcnAfFvEsQNteKUkUpAkfXvDk48AkXvEPFdPpoAXF1d9TTSWDxTmWWa7ddz8s5LwLKuJzcpA93xb",
  "key18": "4TrCGSSrDfSsjd8dEtudGA6SuawinZDqdBysb9Sh5GBWBF2cP71BrYJsfvDVZAYzGPgkQY2K2CCerxdn6hc5pNMW",
  "key19": "3tA7cqhzkUCkjxrwv3UtidmiHU969PDW2rkeQ3sGLR39Ady2LLQydArGGtQbobqWCAQUTUAX3fdX5P49ik9ooFxj",
  "key20": "41oKYmXVmV7t2oSkAuUXYVPap8ErTCBKeppy2cQcJMTeTHvh9BXh7ehG4AcPNJaFHJHmfdophz9Ks2pCGU1eXoW6",
  "key21": "2jGoAAi3CsUkr9aZ4TktUzgw3hCcoy7UTikVzVWLiYwTGEx6kS8SbyrXLkuq1shY5rJhq6m9M6UzLcCyRmzT7jZ",
  "key22": "59fJL7Pwq5B2THvn9oAtqeUnqErQoAyWK2RqBPmgpbduJYT4TFWUnppyfGRLLAUbXMfZPCaEuRu3PUyVVa3fE5Cn",
  "key23": "K2L5FcBf9upofggf8vY6GrhLNSrNjrmWFxEQmNLgn5FWNQWedEZjrfE71z9aDyJmwXXu3kWT6vy3K3RBrR1eHMd",
  "key24": "4sqtfDKETnS26y452PgjZ8sHA4iJQ6YMiwXsQYwni4HYdi8cPXCw83jJiMmuH18nCWuSMuGtJgDNoYEJAzju4NQz",
  "key25": "3zQf1PNNes85VQ7GdQMpWaR6PTqB9gxjEh7UwmABQmsuJ921ahxggrGitT9vCjiERbbrAxeJViQzbjXzwj6tb999",
  "key26": "AoxhXccze1ZcgcnfrpyV76Jqm83wSERknEWXSqpME1nySqDcBGqP493j65hffWyZaoj5ApmxL7YVaEiwn8o7wz5",
  "key27": "2WEzgPdAYjM5oDxdDU5ivYDuWehoBxD1raGsxi3Ut1u9zhNuCxHv5mJu86NZkyMoow8K8H2SgqFBXNtqTAAsaqxX",
  "key28": "YFJojVncUZhdCrvhtkKyTk4eJmVnrhzJyw12RyVdiZRN7erGn9mSYuqVgRehDnjVz48abyHvDcc7S4aozCjGzjy",
  "key29": "3QCqeX3yRUa4otd83mxLcZ8MUEUMn4TjHW8hzsm8kyKq4KugAR7US2TZh3eL4hPWDqrVSQLBX1PRJPpku6J3akYi",
  "key30": "3qRKmHoH8wSvjo7VAkZgnbJtLci2cxSfj6eEdQkuUU4TqTnthVShzMtxVr82JyGghAat4bsGAeyGLP6XZXSMSGEA",
  "key31": "2Mjx5EvggXhvo6wSnPmSE4NqgtEEyesr71i6mxV8ozPcHpQ7GV4n9pxgV2JC1mZrHtD4xWtG9tcmNtVGonrq6dcG",
  "key32": "3rXqsVqtWDbBMfbCtpaMQT5LZe7i3MnG4oBR2hP8eNowTuWUy3Hk3RVMdJdBSwDRXL2DfC5hagjGHao3cozVVNLy",
  "key33": "4abHbHgdcG8s2aYATrxqdRg7UfRQ24rDS3wNeYCyV1qgZMFVx9dUzuJzqvdPmuvbqNnhmn4JP3K2rNWzxTDFoP5w",
  "key34": "2FxSkPtvfFo5Qb8G2TQKXKQgcB2PNNgN2tqtb1jbLxvryXk4Zi5uMjxwrpgpn2V8QhdryyTQyW7LaPVKEKhSnqP1",
  "key35": "JNNfKQ2Pvvj6WdyFkV3F58Z9byZwJiLYoULxCCtmaeiJ3uYHzBY6bRTrKxDu3mMY798ZKzBjr6B8nzJvpPQ7uLF",
  "key36": "5XFdQypf6W8YNcxc4TU3xYMyqpv5oFG4enz6jxk4uuuUB769vKJQnAQ8RccSibVN2Jg5SayijqoToskxUkuUGugy"
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
