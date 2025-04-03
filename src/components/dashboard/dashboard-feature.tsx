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
    "J2qbYuKmnD3ZiFFocSMc1KHZg6UVfXoy7fRs3LUpF6Mkp1Xq5GjVo5Gr41ioi2u85wJvi1FoWvuwkkJ23w2fpeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FzADuq3HTeoonzgamZw8o4mDNim4mC1WpcfBqimoY4Jqn7aSLKsuVn9J8cZtPmpUXQAn1bCHZ8fiVFH9t1NuCDc",
  "key1": "5eL2aYHeKZD45f8Gxy1DQNGVMsV64uYBaLvvZJN3FbVSPYNCjsNyFYB7Zuq2oVs4YbjoZiVVaTkdt2Mc2RfNHjkA",
  "key2": "5w9cdRjuHR2vK9K88X17qZ7QtHrt8YfScgbQ3YUc7iaEj2j67orB8ydCW2A4HsZNf5k85UiqagdHVcYduCoEJ5Ph",
  "key3": "24Vert45A6Ev7vtqS2KPqNimUoCjogXZNUz4t53Jom2e5BKGyceJTg6aj8ZhGJE7zS13C3M4kRGcaxkN21x3WXCr",
  "key4": "27FCtwLNC2CkhCRDtBg7cdbVdNcGWEzPjaxrFcmURErVxdonTznVsXL4Ssd8DBmnKfUSkwh3oQqraRaf2suzL6ab",
  "key5": "4zFcQ6ZXKqr9PnxERvXifWrj1gQbVW2M2f7JrGWmHDZFwyJ8Uwc7o18qUzs67xHTAdTAvgetpSvjkZDArSJY5pxV",
  "key6": "banmDuJyiFWF8z3eZgKp95aiFSBUkREq1amKBDVu1gt4dDNJJiPWkG8Hae2wmk2itEohBhtbfpoeb93EpnpuN5c",
  "key7": "57THwmJRkxkvmzL4h21YMAybFsgwYPmwJczuT4rq8XTAKnKoB4o59Z4ZjcWz9S9dUn6Hu7Yu8WQjANGTQTnAyiV",
  "key8": "3AAhWtbEjtJ1ULi2rkqKKFegQmJy3ov4TYGHoEtgRicQmhdi4fyPAMCK9Dg7XAxoi99EjinyKX3twZ4hKktzkxdw",
  "key9": "5ZHcRs5TEkEee6hdWm2prjvqnCm44gxHSHD8Ftm7dG1Zk3BG7wQgBRMfw7SYuCcDbyZHbkFJRojGfPTQtyGzXMRB",
  "key10": "3sfFv4cTYMEqv5tNcAXPvK7TqnL84nvcinhL8AJ5JS6bg2HisKXVmNqcaisg5wrHJCPaJCN3M179G5eS1ojK4s8S",
  "key11": "2pJrEnZLemTgQWSDbkFTEe2H6uzAev7pBt3LKHuxy3dQWUd5YT2sbKuqGXUWrktqKCQ31aPEaBKsJquq3t65V8BT",
  "key12": "pYifhvHMqQHR4WJff4uro2MLhnT8HSPQ4zVy5ikB6BP966fkEkyqjMTZksZX1TpbAvKxKfs2Na6ycwYDGRwUqga",
  "key13": "3AaMBhoduwX8Zr5YBpD8opwos4LXxQizpdyYPorfDNxYa4AFxCDdrgYjBWXKLdPQVSEg431BnNjmS68eGEP2A3U5",
  "key14": "4gSh1K8PmGsuRcFHQW3ZLR9yLB1Rxre2iYKmibnd7T6UsQBxmPXEnANk158eAEaf1BGK8zmhQuaS1YBT2i87FxFK",
  "key15": "2j8RMz1KjHCz3K4hXu8bWo4caN8Yr8fJsRPmedG3aPVfEs2e3ALYvUEGKmLZftVHJpJ79DomcKehHBXa9osr6Zn1",
  "key16": "5khJSkW8nk71FZyMi1TdmxX8J5FxQfYuCg7izAUP9mtt3GPTAcSaaV3FcX2VN217RZNijt9J5u1nfWCWocB5JS6k",
  "key17": "3164zDUHF9jByeeqfw3URWyyzw73AFDhoj5uMuQ3MBxMAWB3YkKU81Rz1wkk2wCEXazhyyHtsV63yoptZo6aknny",
  "key18": "oM6qXCuiZhQz9XrnCbricp6aiVgsvwuvBo5SHThTUjJVEYoPn1E96CnocLdyEXWatyQJbo5EWEXbcqFFEWsS6Wf",
  "key19": "3gCvBEHXXfNn3Rsq6bjzsugfhWSssaBdpehpJLhf8BZDb4dr1mefNRc9R1UxUi5v8MtVfyEnKrkBwhph8xf7SvSq",
  "key20": "2KXeTs9Nf5TrtcTPqJeGyfeFrDLVhux9JVtuCHXwQjse3dYtt62vhtdCacsss9ksMmgQ345MH52iN6SJ2FTDLkSp",
  "key21": "244mLspe2NtacKPWrXv9xTKdurqVA2oiczgDdL7xmjGef7F2QUEFNgNWnNGXjmCx7fD7ioGwow3P3QeejqeMbHad",
  "key22": "2Qhva4f3ja59qRCke9cvgiq8MGmTsmAdeNLJXW6fCjZeNdE5esEYt32zXT8GDUEecgfWCmHoBnHkNJnWptJpFFj",
  "key23": "2fxRPYhTBQYCfZdDtkgh6W2XZQ5pvTrmNtKvTq4FDBPydhrDGa7h2ARkDuATXZB2Wyed1Qxb1utPeCQWiU2yg32f",
  "key24": "2VaHZdtRLx93e7TYMeWMtfVKs828S2ooV2RX51NSY7YRjKoSeUYmk6U2BAmU4SKiy4XaSF7umpYPHiCiwPSzg179",
  "key25": "4PqsvHBwjsnKER8o1TBNyxFESdxyjuu1TYiL4MzWNqU7szj5fZnC4khAM3QtnfvWti6XbuWfdCDBG5NSY5ZbQhWF",
  "key26": "4DS3nyAeHAZfjVaPDL4xYvJsAkH2Cg6LCKnS9HG49q53qm1k5Z9vDs4VvAUprHCvMJyTDDQBcoT2bNESW9ntJjZp",
  "key27": "4bCfdGR8x6TqdpWVRdufQzfjv8NjGMzLVFHg6v5rEBWPeL1movwiJNG6LXD3My12ZJig3cqCugaNHWQgQMui6if2",
  "key28": "26cGQAZh7CnBxqr53M97pyD6GrYnXFgdAmpYpYvexMAVpn6svFDz7edjKpP9rYW4TRX9ToWGeeRXbB6UaJ6HTjrZ",
  "key29": "4rDa8o6FF7vc77uMCZq9L3ueN12HmbF4eTqrj6bcgHUWtq1y5c5kzov4wpyNpuyRu8q1m1yte93KEkxKSkXbCwZU",
  "key30": "Rdd8rhnH5NNbCTwm4DvB3rDQCVWunxwhq2i1zm5WGcZGmxhiDBaXVsdW8sthx419NjenAT5LKJkMy8SGf7nNwhq",
  "key31": "5zPbPR2sNG3mcfucpZ7zPF9YKzEx1bmo61PPdNFKYGdhd1iRmEFwwyJJWBPJJA2PLFrVFF48ZfFyBDpHaM8WpWct",
  "key32": "2PBUy1j217L6vMih7owXe8b4ZzzrPBNyRxj94ratAadVEQ5xazsSBqX6Vw1W489UrYzKgJwuUvQz6uKzJvxJqVkv",
  "key33": "3ucnos2F84pzxuNwWNWc1PrpM9M973K8a4RPHns6f4rEYoPv7tFc9wNYTbwJfF7W9GAug1NmqnhkvqGNxh4sd7Gz",
  "key34": "qT35VahnJSof5L7iLz5NgDs6iU7ADrZWX3GqdxLHh4akZWDA9ouU3ai6jSynA8LYtgeKPR34vKcivKgsfjiuJ7J",
  "key35": "235mDq6CZqFrUTZTvr8MJj76GQdm1bntnN5avBSGnQPpaK7rF2ARgaSVUgXdbXRaDgnwMgszFsH7cnAjZcvXCM3u",
  "key36": "4hxAEkEVxVjdBatFvjVNJR3c73uG3XnhbrmXpSCBeoin6U67b8BQQWx31mb9GpsK63PKXvgJUPk5GzSXqX5q5F14",
  "key37": "4BmWYQAdCUDv3Ls9rS5gbp8bijiMYw91FcbsrjgG95uuJgK9sJxBP2kvR2NvxFwGRvHcKa2Hzu8BYusshofZEvXC",
  "key38": "4j2HxTHysmcrYgEKubr2NfjjVMdw1R49tZVZMePPvKHtWMfDsHHsA56cUXd8aSN7tQzJaLz3msCuS1dx34df8ELN",
  "key39": "634wqUPQitztMMYFXgyZKrzdDeS86PK9a2Vwfdk7g5tC6edEt7qcjew9rbNtNaC4Y6PppQfLEVCPhQgJLe3EUPGY",
  "key40": "5aFupZtHmK12psSVGkFUVygmtsZB2UgT1G8M9hxgTj99z9ksu2oEz92b4cdULtEtyAhXydARwjEfN5ud1PGrcJAG"
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
