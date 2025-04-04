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
    "31veKcvTsGqp1ppcEh4tCbao8aLCg23dv44SECw9EohXwCKcUj2j7FcZCys8C8i1rMQttDwgJsXxyQJAKNCXuyEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f6rCJFeC3oybhfRW5Yrubbp8CiALHkzVVc62JpTAonEP14azc7BjnVXNHQLuaw8X4xSK8d6QrZtDq3rqiyTFUC5",
  "key1": "3iiUcLx1m9vHS6LWaFqzKpT9CWTLdBh8nhZFj8fHzQhxXYKpKFshEBHZcdv9NxGw8wjDaLnNg7xwfS5d9j4vwbCV",
  "key2": "X8HXDofHXw6pTwX7cJyoniv8ocufV3ZKh37rYZEy3dkF2qu6MxX7GUjdLrKtq9uD8DR9NT8fUEJ987vGvYn7vU8",
  "key3": "KRxG9KWj84ViiDzqR3sEXxpyg8ELGh4yp3JJtSPeGEgdgvSjpsKfcVEc9uJXGC5KFdfBGRUDXNQ3TSZN3L8MMY7",
  "key4": "2a2fDi52vGZKdCy4UkzbVWNRXVhiicrjjQxeDUeJcuvApUu3FCWutcVgq7wDF7CV9x9EaNxxjFmkez3V7ys35rww",
  "key5": "38ERejRBdgS8W8T49hjX56XPzNiqUvoTE4g63bprrFJHrssjupvH1wNa82ycVstK3o8wXbsrH9jSz1JZy7GSNTPZ",
  "key6": "2H4BnbMPX8QAcgL7HogmV9fd2qh96YptLL19Yzy93LMggPBLCBhAuy7seVe5RLpUNPgenW1AtiX9KJMiNcLDkfoa",
  "key7": "SYp3AqEAxMCejmexmoufevgs2dfj29ms2AvCNnC5r9WPKFyjLTfn7NuLYB86uFZ5HqcMamfR95PDHHGbh71ZtQt",
  "key8": "2vJnjTM5YdiPxtFbXnBSG74sXpwcPnmxXR1wndJXT3NsTtJFShg9W7VFKxFwjxMF3ZAomJ7pHCZkg9HzqXSyZnJX",
  "key9": "3P9YD9XurWMKXVVGawhjWpZqRHzLgpVXpwpLgMW1uJQzW3DaeM9Q9adX1jNJmm3waYzVYhrX6XYe461PEZgLUgbQ",
  "key10": "5jxFj4axYfG4WyMJPKQkemmJ8t5DP1AeWK4BXJNMp4j9hGp7dABt21wJmFDZNWPSTCnzv834RwGEp8xrwnDAjhgH",
  "key11": "2uprLs1gE1zMZJSFTwPTEBdZk8REXCVKja2zC2TRe2U75gp1Sg8y1hzrEhqfQXesRETTXdKDm8XwK5BhzCxNo8pg",
  "key12": "2mzWseJs1eBnVQY9maeQRiTJnLfY2thSqkNGi5EsCZLbV9BSY7DRKssHS1Qzi12P7Mv3RpLssuCik3VxbfEecmTz",
  "key13": "2gYFps1e8Pstua6UM9pp3QpiQV9N7wgBSLTQPW9a5rafQuR2k16Br9D2RKSA3YvsR3hH3RmxTyKWgmBw7fPk52wC",
  "key14": "34HhtdAKZHHdRsdKNgmikFeAR1HFKRvJo2NrSRU6cQuF9aombxSGcRqF5CaVKNSbb2WEvkcBz4kFPfMAMBaTKYak",
  "key15": "23r23FG1fH71c6FSWxdeLjZe6AM5qTyY2PSywz8Fzkr2TuwtM6Hr14rJw2eG5VmCCJTv9fKGp83U2k3CXEoSuinz",
  "key16": "3egD5VVLJK3NQjcbYJep9PPN7rYnYwSzDwbfcGJughc5pQBiTFmbZNAxU6T8Fz1tpvZsbFzQLPMGXJyJs9yJkDB8",
  "key17": "5DqBYhGStYQw1JFvefozmFF6VVUkAfHDbphSQ7RBkTN1SkymxvkVfaskAtYJ1PrxCJXLJYjugVXdFD85ArXXhQob",
  "key18": "5Kp62ioA8iyF9TDhHNqL6dCRTH3nMZ8AWdFJm7dpSP7etxDkf9NSGj5JwWAWjxrXVdJaQQBr9QqHx6CiKZMLxEBF",
  "key19": "3LahTnsNsTo95zCBQ5GDjBqpTZSNcVTvERdaGmLnSs2jKvkc2ukfpp9aeFt1dLbbfoDyrwjjv6XUAdfTnVhwKoVh",
  "key20": "4awaT5cJDj5LDrB8BqTNwHBi2RYhMnfNbrsFSY8XTiNtJ7zyYTmuud5PhR6gaGxW7XDZ2tMtkpUqAEL65u34NZnF",
  "key21": "HrxtgzxkuKiLJxh7KoaHysyNoaQVk8ur4Fxv5m7VaXnzZ9EM14FE9WZVxsEiSnH2BzxeBViqsRhkgdjq2P6nh1Y",
  "key22": "WG2uopKxZaSACk4d1toHwjA2R4Xx23eX2LMvfohxU45wnZF3xxCURWp4N4s5PB5Zr5axhXLAM4apXXV9qce9ipP",
  "key23": "4ym6g58qYJYDoUtcTaNtwiJiuycS7sPAoBYmoNZ5cThQSMQpo5Eb3P2ZdiYxHPajqMFzPJU963avupRxrALuMqv",
  "key24": "637b5NEPo5xsQ327ikm5GZQiZmC8RFugpmSSHP3XjR3yPPJrjudB811DdE4f9zALeBKqXGHgJXVCqBBb41SLPGDn",
  "key25": "3477RRKpBkFbeJG65SA1L1fSQzStNZF7A3Z68EuQ5ZV9V4m5QBHQrvUSkV7TnnmBneEnqZwZdjWmNTpDxHkJvnZr",
  "key26": "2qkZSaiehNr636ZRaz5ngp13ZeUmq32T4KzUybjE3quzLduHrcJchKh8zSUiBDk6q3Bb57sZAYNGk6cf7dmKdBXQ",
  "key27": "3meu5ECputYwyXbHou1zDbQKW5NQTAE4hQa8ihU1QHW63LUGR2qSZ3dNibGpDjkmSKPC4frnmPMmCS3g8paCjVj5",
  "key28": "5b6PuLKeY1YKFe3XSHqZgyXbPaBEwBfYJM7QrkFkQkyDkwiv6pVKXwE8p3RfiTe8KSPyRBkMMrLKXwUJ5fWcp7BP",
  "key29": "2WdhiN364E66TLyFaWDaEFUPvbUYThdX66inSXxiqbv4J2wbbXALoUiSTmKJzW6H6eLHdgFUJbFiQGn6VHvcxx6k",
  "key30": "2dkmTWLwQvCDQhdsw7MC5oUSKcnXTaBgsPDMrbi3W4mXxX7cf3XGzftYPPeJsb3GYQiZHUPRGkHAMayEwNYW6eN6",
  "key31": "2V5v9CmFXoMnLsSEGJ4FD3eWMuxXKZ7m8vAVCrR7BUSdhrxjLhPkGMXRhrMNr9WL14C8Ak83kEZyqdkWuaC2avQG",
  "key32": "33rKBwwo5hZLLF2xCUaiPRgAyb3CeJ5xTCxNdShiLCRtKPs5cbMXtsPPCcsapQmyaneKbhwsMjAgnioBWgXWLUSt",
  "key33": "KPxVQNnqteVPVu5zpUxjj3DtN1fw18pn4HcpJxrgYGGwWWGu4G1rk783wqZsHkLuj81KaMMm4mx5Bie5gUm1cqG",
  "key34": "5Rjp4qZUd8fdonQRaGxabEzvZQn5rBbYZx17cfVGNhuKZPvwykDFUQkJXkHSGxwmu4FGLbYXQEBb1BG7p5tbQu3p",
  "key35": "5vTu6WLH84tpKhrHEHjCZuW2r6V2VaBTZEVZp8XGA8nywJwXL3o6k1VjATeRvqCQ1uJciCN7wqaPVJUKGV3N18RL"
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
