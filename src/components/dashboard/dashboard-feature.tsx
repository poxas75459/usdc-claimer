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
    "3fYqTnrXYWYuVEV3voumKsGq7simBVytnxrgJMEqkDRPDeQs1wBNc9zt9qjAofh5vBn33NoQujePwm9JUpCZbB1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P3cagpAXpEiBgXgfFa3k1NUgzcoCyrRqMXh6SEu8uCnN7xfGDesxbeNmKuBfuNEmUMVxThn7qDaaSygpQipoKaJ",
  "key1": "4QW8f6gGeNhLWJxaBXtvzfLNXd8kTfb8xDUEDvzJpJSavdAMb2ytagGGLDuphyKxBHQvicpNHbY1sQLHKfQeHjQN",
  "key2": "59yYsKJSFYFJx5uwmWgZ8AaWEFUTS19rwZKC2zXYBjE5PQBuwc1KMpyXzyXX6Zrk3ybrGhvfZ2YkWmgiCK8hCTUd",
  "key3": "5twjafTtXyc4deE1AsAG5Rfm7RCmpKXib4DdvjqnfVX8w2SK8hDf9HJEtug3jRWjFd7XgYDBfi2HGwF8zF4GA7Nj",
  "key4": "5cCo8Dq5kmRA2bZygbhj6HWo6P9Fd5K7f9tbu2dSwbMjQAriNzwWo6GxX3SFubqcpi2vxPfMiJvvNtJ2N3u33rdA",
  "key5": "5Wrej4dQ8V4EY4A4BZvpLQaCEFsUFu7JvQfCfNSdMePRCm1CUaoc972bbJNHuPrP6vmgw1KupnGoyzosNF4nzNXF",
  "key6": "3TmoaBjtU7iPyZPn5k5zE6NmBBfiKSfdXUqq6ZNSWueFha3wMo3ceKPEmLqKQSPsQ61KJHs57d3Ed7iSaPXkfZeL",
  "key7": "4LHiEjPDhpSxs8Zg1ruvXGs5RCmoC4t8HP8w6JjJQeRpyZwhCss16v9LTwqsvYaxXJdYGRQUvcwsMqeU84QcCxTB",
  "key8": "45JQKwA12GrdqQW3CndMt5YcRxjYQgd3EJ6MLz56LuiENppVsibJ8jHDwVRRJcdhwu7XpSbas5GdZK3kUjD8RqoB",
  "key9": "5RrACawaZt3uu8h4QFkyUcbnFy9mBdBi6DPwk2j8j9fmKVp91ST9v8uaW2GNxGxgpksHoiDZDdMgdpCjKP3gvYKi",
  "key10": "YwL8ceit3VDR5tUbQi1h3d2U4kXAgHXxgChH6QJVaXgB2EVjWB1Cagvf1sNgAzM5yaLzeZekZaEyXFhxyVR26bS",
  "key11": "5Y1XBSJGwtV2Rz9a9NGCQSHaCn1BzZqEjcvKpRsryWtnhzueWgLvrbCMyAcsiqHuHAvKFzeV88auNABVeNuzepwU",
  "key12": "D79HRUQtEvVUkt6nc63RDby9koUr2M5u2KVi2m8BK3SnU6V6WetL7RmQsB9SFQKobEQjdJsH8pdTbp2Pp6eeJoA",
  "key13": "2ftHBCskdVPA8XYSNxAPPbqSCLTZchUyvVrzHAz4ZsR8J3dHyTMpky9oP55fvBPVpWEceVZPKWcQzqeT3fXuXJ7y",
  "key14": "57dAjzpwyt8WqUHRx1pddeRzGEKM3ftGgMpryKkohe3rkGwCmsujzH1c2qg8fEQ2GKQ69hmUGHPY7QGMoJvJM6Ju",
  "key15": "2jn1tG26FA4EPJtKCbuY9qei1qh1MtpcCdvUaYVB9Vkibzs9AXdwgTWdRUwuycdtVGaM8tHCU4x7B1dVBPdcSCYj",
  "key16": "4xTM38KPsUT4x7cZoCpuyc3rtLCG9xb9vb1xjSR2fk2gaHwPXMukYECmSg7kgheuBpZnkpAC5RmhRzpgQxcrpQ7Y",
  "key17": "5eR4p4Y1oCzQQT2MfdpNTydUmYJWo6DygATnGUohD3FCBztpm1fVG6TF3iYY6kmMvS2n5rCdHr3N8BoqDKJTy7xJ",
  "key18": "8YxKXGYLDBjKE5oEhXK3kabRJo2uAcJdRKaUsbyY9PZLH5E9U9XtwaHsBnHN9gEUUguAwfXXibXqcvX59VUuXfn",
  "key19": "3yuU9TZT3rRmKsi6xas69ZgAbYqPkymLene9SHTiPuJCBkYBjvx4r4Bc4t9fb6mQCTeDBydaB9xrm5rVMWnCWLqu",
  "key20": "8WiMAZgno25Ca6MqoiFBFHsXaqSq7eH9aQwwUE3MS6BD59ADTBb18tS67sCFDxMkkCLnXtwsNpFuoGZMBfDjivx",
  "key21": "4AcwAuZaoxZ6eH4DCPBagAcuejzvmvSCgPwmfDGF94iwB8uKhdvEvz8deC75jotavcUfS8Bf4WHkvtqEGz8i4Dhn",
  "key22": "3wCdkgGzEt44FcPDJaNuDw5ZaMUHWgdew9XpbqD1YLjazuFSoQABB9HwbdZh5UwTxjhueQSHnNT4XUSQWkfpxgfe",
  "key23": "5SnGbgPoXfQAKMNFEkomyCnaSi3qHjTRoWciaGQ9d7BULgLUYoEyHxh6ZRCQXTZkihWmXcdX2uNJpwStZWSViJpH",
  "key24": "67caUmAGMZ6pR9oTs9rA9Twwj3KmB43edywMyjwYaiw5shfhbov9eAkcD6u1BiknTTuNmfrwW5Q6ciZaAqgcNbZy",
  "key25": "4oszzPKN6rTgP27ymx86wmFFjYXDP2R4FZHicHsFU5mf61H3yPiF2mbntr2Rw5yeLHasEEpVNNQsbkCs9q27i2YM",
  "key26": "5sWVyXZsfq47Y8Cdr8W5Nc9qthoUFHQnJrDzKbftvAZfD33VyMhnvDmhrpxZzNr61a176EYTh2Hdv7swHcvHvSX5",
  "key27": "2zJZiyp4HoXX5tWyvUG64kf2MYRsqfFxqadDvRWGnGJZiGUm8AoZEiBygeaBnd17x6J157QUJ9ckuWgS1QeKmtMd",
  "key28": "2WwUYatMp9X8HWq1DZpk8bqpzvW4Hv6wYM6EduUBHicoiWnWQpZChe2ZqCCmVCLoPZFhjm4dnamFBfyeJ1S9zhjB",
  "key29": "2iryu7MoALdoTbsQoqgN2xJjR8UivNBvQ4V8t7iZpCeUg3tWeqZZRzYj56JtWaoJRjhAQuV2SXSvTkYJrDkvgzjw",
  "key30": "349CGsFjndtgdQpiVrNEcB9CfssQ1onskMDfH59B6nM1k1wgsbLjYCUMX3UYhBs3FmX4uaXiqfNUjJjMt5QUp445",
  "key31": "oCi4EfH5KNZxDUyRhGrUtnBFiJ83swkQ4JX1goNfgiaCyAU9D1MKFvDoXZJQZxGP9YAgCHLDDyMcAwS4NUyEMGi",
  "key32": "29GUKXCTQTrWhWrzRNBcFkntFdvnHsA4QPS4HAuGrfiQpz4vMDdSiaKyEVchdHZgmJpiARmCsWq8TiQ5AQPoVMHf",
  "key33": "P68qMMtcjVr7qS1MMxc522bFywHkgUdkSGLDu49QW39eQ8s7oper3RVFR1Sgt8qR2vZDXqSasff5AB9WnUcendd",
  "key34": "3nYoGaLyqFdywh8LrtnXd9zbcLcCzNZmeA3wwTPxeMnGRpr97aGn42PTPJVEXadxamcbDJrX6sGCjej77fRinwXN",
  "key35": "33ozhGxqFzQxxyF97RU7BzMWhhvGH8fBx6BQtfpJyyH6GkdTsGyXaNTbw1n9esqs1rre1H7ajriSAuRTe4YdJxs1",
  "key36": "WZytUQpZysHSMLY3ikRn7pNG4QiTgt5eXAduhaVRBJfxSvyZivYVrWs8RE1CcD3jrHc3NnYzLf6yCP1a4N5P7Ng"
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
