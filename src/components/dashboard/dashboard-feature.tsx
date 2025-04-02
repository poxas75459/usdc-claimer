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
    "5dpKL1ErYcfqC1k4fJYFq7PuVBPEpQBK68pbngfFGMeK86995SEVRizJYBcF3mgyvrYoxddpnNpcJSsMiwSUUehZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rqj6iwFkejikxgPWK3iNnkr7Ts1jGWi9jLNHtLCmCdbJ6sRqgczhNsshbzbLxrUXQ5JzUgm4ZukuWLcdtn16YDF",
  "key1": "3DgesEKr78giWuB6rEMTf58j7uaEb6eeWFPvrYbjoouG5L7QM6pqTfN1rsNSgfeuo9hJRp6ysbGwmutj6L1ztVmk",
  "key2": "T1MBaA2LSnmtoG31MfRcD9cTJzNDJju4EAK775PDf3AipC6JtgSLo4xxa7DnJTKttT9oh8EFokiAJC6az2ePeTm",
  "key3": "24kJwnJXMY2Rps28ssgndPYi2ZzNKhY1mhNCbKWSJsH8eRKc9XEs3FGsQSN1278s4o5oiXmeKVQaStWcNFMihesR",
  "key4": "3mTumoHnQaCa2SJ7roGC2HSrtFBKyFBPTsfHJiyoA8vDwRs5jkqyU7GujWFDocdr3uQxaVeEqhYSLf6hdtfVYQqk",
  "key5": "2ZzUcfZURZo4UVd3GpCJzj5HZbPZ7NBmxLUStBAH4GZfiV4gZ9bzJP5vhrwrGVSR3ByFmsrUSyEhCvAtAqibYKjT",
  "key6": "4yeApkhZNjcWKZzkvGm5H739K7ExA7DwvD3Say3iawvSRVwi1YBWK2Fvg8DKfo81fLx6Waem2UzLMukcD2YMHgR2",
  "key7": "2oEjUqgbH6K7oLnJKQfe7wjYV45HBqJ5TiLu1D78Ptb5f1HjSf3XSgxNzFYMMvbHrygJ9DcNcHCeSQ4eLfMXDB3T",
  "key8": "2WA134mArdoZ2HaVUhV9CQQFjRcbnBrJ73y3ka8EH9uq98i8EkMwodAsUC5g6XNxJuS3YYrVP43DTrdKEuxJn7dq",
  "key9": "ywjAcmTbjG3dTSTZ3RnEsspy1S85huUKHTZTP97YUVcdKYVzaq1Rq9yXUpAzTb1GFhxaAdBZaZcruuupVXPq7RD",
  "key10": "4ABAX7GxRPQ3d1S7NUFxZ4FExNezU62ME22F8dEP13jGFFTmmLp6WE3z47w7svGScSheQsbiZJVw7RyoPYqrT6jU",
  "key11": "TyZWPyXwgxexJnEXJcCAN93Tq38Mk8xSJpcok6CGD91j1zquF8z4CXEFVTdT9JL7FqdwDcy43VBCaS6wzqzUwuR",
  "key12": "5vu6hynS9CTmmg5RV7ZSWU3tHDiG3dZM7EpCCNuBu2mhVPFgwXAPXMJNQZb8Q1uNMGawCJd8csmDTGKCPWLFp7Qg",
  "key13": "7Myv6Tz3SyDZmxSLHcWf51Lywa9Y62qrkL9MqzYxQhQJShFmMrGXtc66Cc59tRqKgzfbCFALdcd82EVDCAzitHq",
  "key14": "5Zc1Kja6tB2y1rpF2deso3th1gGSaEa6qmTGio29RS7p9AidFMVUM6TWUeVnpLBVdAJswmQF1SfUBoaaKHSB5AK9",
  "key15": "5eGdiyJsBC4zymrHbY2VCtq4tXWdi1XStDJk8wWfohEVJ8Un2NHFfGNGVRGTSeGhETupdTkEduQffntwhRKp8Hf3",
  "key16": "aTt6cEmRJCpAuZ5qFmimRx85go4Lj6wg47rs7AQ3qLYo7tPCfbkb2TXaPKxhXyE6Hk8cTJh1X29brCzo35gDwv5",
  "key17": "2Ah8DgnYq4rA8F9ffHjBTT2xTfrwkNbHiufTDbYc9gkYxpuG69ZgsUVf9zqzkZSzawhZM5hToxNjZJydUXkWxmGz",
  "key18": "PD5Y25xL7UqD1FaCneqsZVasZGMdfwgFtSaQKicbAx2DooyaVsr8odCyX3CtffvGTFtTPC9mZsvGbuA4UGFVqn4",
  "key19": "4PhpXEE4FAZMFdM29zgpHuLU77QtaR1k4Sdxv75SNTZ4hDJf6gfbgvQiNjZVoQmKjmqZkaF8Sd1LS7pxoxzqWpbf",
  "key20": "62HauE2F5Gq5J7WGPTy2ebSNHrygWeXVzpuFtQWde8QvXWboB3E3vStxnrdYMdBmeS2nzNHXcwm6JBkaVEHyk2BA",
  "key21": "44gJnSkMvVtKKDdYVwDrYNZkCwPoMbnAfq9bKewh2zoh2VqLosbVfhNSX4AYKm9ks7yMJjcSTuAaP4psvkiaBo1n",
  "key22": "5efLLmZ5ZHzixFcz2JZ8WRMRJSjr6FNTctgR4QXDEewb6qJCF1QVwqCryfWo89KXH8Jd5CgBeTrZdbFyvCFzRbrN",
  "key23": "5iHedvv3jeF7VEEJYkPcn3a6hsHSH1UQo7MDrgbRzVivmbm72jELXTJA9KJgjuFKaAz5RKEr6EiTwkkt1k2WorTv",
  "key24": "55mujPd3AhbsVTvnuNKe2o8mDm37Tf65DoNR5erj378ifyU1AMhSXjyA9EtNXCg9WHvfPfaAnDk32vHfhJbanLCp",
  "key25": "3cQiWCT9rJ4EKP8J9xjZ8WgQRgLNJtTcRstfpTqZkpsHcYk2vQ3UJYRyp9Ltwvg5cTi2w9ZubzN5KEK1MToE1kx2",
  "key26": "3PTt4qnWJpLdi16PLeAmxbuvmCek2kLWbpe4p57D3ngcFMGyTcZCVJqXHwuuAp1ur9oJABJ5NjMnMMpekfVkM5as",
  "key27": "y8VBkM2m91W9MHzXQnBWXU4ksgEnQBmZRish5MafCRhpDg5MdhAWDmMSfFEbxa9wFGYKRNGaWcFXjaXULZd27Up",
  "key28": "5wouJBqQ3TcXVynobH6G9952mJkdqgpCZJvStMuu5pr1ekRkzfcUHoqbFX5EWk2HjK4Jy2rRMgqeVkLUCtiheH5U",
  "key29": "23YaKdnWHUwFNcnFiuekgEsaxGCxbGA2FdRKBBRi8hNDFWce14AkLza38PeaCT4F1ioVMsZ1yrA89btsHDjf4Gh4",
  "key30": "2KJzkfqda63yaTeFCKdtNwbJwbbyJn49jz2mfgtqTA5nzPbSRZQ5utPqxV5QmyuBFgpjM9ZbnZG1viVbHqhP3Dp4",
  "key31": "54rjePLv5uzaufZ87EZjraq5VrgpMmdvmYezC7jtVBsptqxCuqEM5G3H3Hv4wEJNe3ZcLvT23CA7Yeif1JfZFmCQ",
  "key32": "4P7zSpRowLX4dCXv6NHmBcyaKiLfkUE2aCpe4TBVSovy4cKNpHSBqxVZFf1hxs7TWDNcL86ov6LySuyAG8s2ADJr",
  "key33": "3LFnZ78LtPQqAPTaWTSQzeAVKYaT4g3n2C99Mm3wp92kZXG6dix92HZEfHrUaM7wY7VKLALpR7eUUW9PRU8EFRb7",
  "key34": "3LyhQanBNTVGY36HxTPU4nEzfsHnqpBbvcwa9Z7DrBwCVZcirjBPu6pYvxEN6QJVagyWpg5bAgoBtrVKvbDubLZQ",
  "key35": "31PXQnARDX9Kt74hxpfBwV9V7kGu7FhG8yek2AcxBg9iShUh8oAMNMHogpAeNKm1XuijEk4dB88qRGTLKKMVfWgz",
  "key36": "Yjt2X4odjtydRjAjMQMUXBDiK3ektW7ZeMRca8b1Co7EC3ctcrtEFHoiuse5Djqxoigz7339mHLhkssDmu3UgaS",
  "key37": "5eGgBW3WGNgtuDhWvRLkWAoJnu8pDYRkR4LqJxFGm72aQp3TDzBKsvSaoCGH9gsxhrv2TosgJGxDYnnqb5RRFsYD",
  "key38": "4tL4E2DwKnpL5dfCsQ2FQ9xHJWtVcJtjUsPacNuY5LjwmD3GK7m1q372dnuPCBBRc3HUDNuRAWzabBLGCjKhSP9c",
  "key39": "2mvmNs3zw7AjVmxDK8jg82wxBoPVrRaPZPLmM15vKgnQyAofRkZZacj5ZNVh1bkVkv8Y8c5Aamr2hCfZZpkUMMJs",
  "key40": "498sqyvgXbdkFYjnxrgWPfKfkPAxF2FXQGteHQ1Tgki9d6yyEer83q39EpUhxAw1jVJbAZR4fcZgC76MXzF3S6mm",
  "key41": "2DybLZ9mxtcfaSKFG6xtypHKkCDs5383fYbBKXDVLxW7ExdV6PMC73dDsJ4tY1HZCyonor8mxj2c6XZztMZCKfAF"
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
