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
    "dRubcSf5ngw5EA2yAityAdUA2Zt8T5b819uDPdVnHLpirFutrVAMUwDdAGfbGMPm2x7yWMWxtVyMxE7dHRbiLWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xU2xoXASkz2kAeaN9PQC8p1JVwMU3JgSRbdiLVJD9fHthwZ5pNt8Fbdhfsfqv2Cv6HMez1FHSaQ99SD2kWwRZTE",
  "key1": "2rqKCXpU3QzHqpbZfruYchyDyD9D6949BzxgfVy1rsrC7QFefJtYjAuw2FGD1qoS83UGHUmRsDoHuuNHb3p2vyQH",
  "key2": "2QvuNaXBVeXwFBQjukDW4NfAXsQvbRGrNoKanD8vKC4VtfYNtrWGBN4a7ny3GYrssTh3hcMMcd79eSiF5fWAQQZ3",
  "key3": "3gXvVoDfeZtd3LQZhoe9nXQcgjS7TFQSAAYj2P2Tcni3tzLk7ydkw3kZEafzNhXCZiP6339W2gZuFgqqd7UE1Cd3",
  "key4": "2SGUrkVN22btn7PMZmKoTeQrigDJyMMrtpds1o529UvTktAhsJaqHkZnTa4m1jqnURJZcRgCVLoSL4YFpkNCA5cv",
  "key5": "49fHKy8vVYMHebjxTzZG6iifR5zTyJQheP4EZKeyeCjmZpp4rcrwGZ1zxBWfg9PhuNDA6v3buDBCdcVZFdGcuoJ7",
  "key6": "4DJgqP91KNQAzj3DVicNcytqT2xvX98AogutddjDLCh2tnBsXXTmfoB8A1mTfvkHrJNvZqLub5ubaQY1fFJGavZe",
  "key7": "428gj86diEeC9R5JSbdrTa4Akjt9SwLyn8Ax4T1TYn59V73fNJ2XNmZJ6VSgsNGCEunV212xjKoau1HuHhMACUGs",
  "key8": "4bbFrcGv5YtkqzSS3u1gKL7uxzMw1Y3j9bBhrT6SxXJYbNrQaJxTAxULDfqH8c36U8ZoQfA4iQ1zZCfWQY2pALx3",
  "key9": "43gmr812aYHRQG6fxJDcVK1N6neTRda8hrm1oAsfTRWm4dV6McDZE5XfLef4HZcDpYqLp6B4owPgKUA3esszmfpx",
  "key10": "3EUofzdSF7UUtvBQ8aZ2RREagcK6qybr1qi5VRP66abNhtki613Z1hWTe5E1QqvrdFarcCNkCqdDn2afYPw5wLAK",
  "key11": "3qR6H4kDrjEUDc4iV7oVmZc6zL9CBaSCFpbdNPhYCbU9bN9jcmiWxfSy94VvfR6nYBEdtEuRHs5SzhD39XGupNxS",
  "key12": "4s2JrrLkKtsEQABYDmZ131Bo2o3j1wVrhNX4Ucdhxomr9sHtxTkVFT3AoEo4WGW2x1ojCjKUefNSsz5gqpn1CEkm",
  "key13": "3dSoNx7Egir4E1767H1v7j8mMndxdbSEWNizMznQA8jPMbFxPWn8uJZAEisxjpWyMHFGXGcEgNXsRKu3oQbGMjWr",
  "key14": "3oUpCqmot1MYX9pNpQ3RaCWvPusnxVPFuiqRaNc71WrK6LUdYqYMTwciCuyntgDVFGsMFxuWk4kr59GLpettTq77",
  "key15": "5y6tEZe9ZqTxrvCatcR2BTKS35KYTXoe1Vt64BYg4jC3c7rZ7zub2S7BUamfieXNpW5gFHWeanbPWNEXpsYFre88",
  "key16": "2RC4BhoY9z3kFVroZpNMNsCPthF1VWx5SCNXwBdLxtNZqwMKJ9VsN5WZF1KduALeVWbqttJtRsnz8Ap5f3V3MpLj",
  "key17": "C12pcLsWyyUwZpYckpntPjFLBFrJXEZyCcjDeHpLpQnvfkR8M8Ef7QVtJXKxajMRe7Tu6gAUJCZrN9svwMzEvfW",
  "key18": "5Q5h6S923zybZNRHB7W1Ysz6G7Hjkz3c47h4SuyUtuKvra72D63zRjZaAuK5CZHdgE9wg5LPUHQ4RPhc4mE2kAqR",
  "key19": "4d4v2bPEyFo9bP4BFGLD7gurkKCcy89hxMD2xXjoWuFq8qCnYVjj2H2GWXMNv7B4c6aAvnXNLrGGmQSeVJJ71zyJ",
  "key20": "5To4fgycvjviGNcBLuR1s5uyYB74Z5yCLcpFhkV5djqW6WTFzxbRLyJUABg6fBvMgRtnBp47zUJvn6sH5SarQw1E",
  "key21": "s7EWex2f4G6HKxeJFrEUKnvnsSCyhU14ERk1ErG1Tkzc45f6gLoZeeADG4CPvh1gqR5rc1Rw9hNwzBQwkdQeJrx",
  "key22": "4E2APNngQ46brb2yKhK1XTAnaNdUcsyV7qb2iaZzgH38zTDLu7duALi3G3DYNADtPWst5SP9MZT6Cfn4mQop5ZEK",
  "key23": "33jQS1hSbGJ9sKr1yKsdRReoPY7nniFmCccEeS9LACqf7jX8MXnf2vMCJ7wbLoZsQxmGKeMqyijyT5w83o2P8gAU",
  "key24": "37ZPA4WC2x9hmyvmggdeWSuShZza5bQnGzxaRd9Zyts6xuUvh4CnDqHFtkGoFjJA3qXwE4PwNeMMtV92DEC71aeU",
  "key25": "5k3QtXFePoRoGWDRPpY6f6rTVkb9GpppJJ7nGzcpGfquyYTNqtmvvoN5i8yajvmz3FE36qw1UbawLCFMjfv5HyHC",
  "key26": "PCEnMZxhhiQBYnKyhs8W8qL5PJztvXBMxnmD6YsQwXbS47nQLWDcSp648BVS44yM6ceRAqcaLw6gKoXHiKadzqC",
  "key27": "5cB7mcTkaCdTHMdRQQhd9QppPG5kG8GosoTaVA51zFCXkagwobuEWXUXUGTrJRg1W8dxYs2Vgh5fE49C8cV2ZWVw",
  "key28": "499G4vJfjAwc4jho1JutSvBaZi8XT8geoB2ruk4qaiV8ZMRJZE1LwAC79NJrqZ4wqYxZbLjjhLCsCik6TKnLoEFt",
  "key29": "4U9io3naQFziAULT9Qr71df8nr4iK5go2wXcpeS24Sh4sn832sFA44SbmZP2uymiqn73oKtz9tXUECiyd2831e4u",
  "key30": "55e9bQAysuohWx18winyb3H8CZzHsQoXZ9DW8At8L6xVViioPdgCXE3RSno9Tit9daUfamiyVW1ayr2DNtFSx6ru",
  "key31": "3nVCGqjrZfM5akn5UoT7VSTwP2vNqonyGFK1xQWd1txu7EPsJW956RXX8ohUiSJ64cp3YKYzyNpuW4fWN7mcLf7s",
  "key32": "3htZFbwd6Wx7r6BWijaD9kKZFj86uyfgrJgH23sX5Z1eWT1Ap3aoS6EVWRmSyG4QATXeWj6UhegHxDnnqWrvqgaa",
  "key33": "5XavDpx2cdNtSH7CsomHVB33PbLLRoRimAqjEb3jbiaaSN2eU8QKWBRXwc5yCg4JSwit5THRQMp1MaMgH7viGwBj",
  "key34": "yfcSyTtmPqHifJ3e2MCENxiTrPCh6fD1AgYbe8h13USHfQ8jnChTrXQ6RtvYCVdwJ5qxN2HS8vmrDtnmTYUbCVC",
  "key35": "38yyVm2TpGC1Kdsi3rV2NphQwHJGcH1E1A5YczcmGo4EL4voeTMsETpWrgBN7VEwEj3UTqLb4NERrJuB9QsLUxuR",
  "key36": "42DuyUr6raJoKKMJ5Dqtq1jZwVrwEdiwrW2E8UrdRQMc4wxVcCSkfLhmfG9yedr1pXa56qKdL6ZEX7yzMTo1JUsP",
  "key37": "5dDfM4NtXe4rEk8ViLcmq36frhvGmMLKezW8bN6mvr7ZUh6JopyMFhvVzRxcSnFsPnRjGLMDBz5SDs4ejGCgMj6a",
  "key38": "2ApaDfa9128KgSQXX6a4eUmBUZ711N1m4XDgHw3G7753tD35r8VGkve1HUug8ciDqsHHQqWqRxS7pQnz9k1kpHQK",
  "key39": "5bwgPpPmc28pqtDdhgtAxUSQKhhcpKXf3SvqFyWPnfFWWgDG1c21L2zXz3gQm6tdciCj5SAECV5f6WZUFtVWbvkf"
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
