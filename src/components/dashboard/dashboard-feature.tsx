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
    "5wPfboRUa516iPrgdZwXwhVtNEDEV9XeCguPE97MUcQ6mbD4dfNvDDdQFCTcn5Z8PxcztEG54CitUTNoWxYk2tYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mhrmkHgLoJgzUDBzNeA2grcvV4QGXeVQ4sEvvgu9ZDp19h3irmzS66ukr1Si1S6wP4FdMW5z7uTKeP5CtS25SCF",
  "key1": "5VykuFLC3BPR5HW65Wvr6pc73TVYKb2xtZwSaV8ZP3aZxeX4XAECwCB1FvFMAVo18Ci3yz6vjkKvEKU3whTFELdn",
  "key2": "3jcXx3xLUj2hkSHwxkfPVhroK1ZY2hSQFb9PPhDGqgzSTGGegANnkLL5ioVC5A3JCZR3DYjwBm6ZzjqP97rKDSes",
  "key3": "A5M1QeZz9RKbjsf1GvwWT7ontaWSGUMeYyqrV3hTdGsn9LLHLmTjzd8DYthAr5MgCgmWKoT1DYQrR532VHBfiqc",
  "key4": "2qfpAdiPXu8TpaJ3W4oj7uf9mRAe68TVfRFDyqqk3c6VSjMidJNpyLgfrMPMMv2yvXm9XVWZFLz3Ueh8T5JYu9iD",
  "key5": "5NiPF4AEiALEguDTsqpX8BGcVvwgRAgJCfy85Vd9o3qNYzFjAjQN73wUv946aHijW83rB8v78xqDFffkgUcHQioe",
  "key6": "2Tu6rXvt1sFPY6keanqbqbfNdD1r5HiFWjAm6cu5N5vfweZmEBfn2kcG3a27VVDacuXSdyPEp8EWkGg2QLhtLBDF",
  "key7": "4SixEVTHhHUxHPdUPjLBbm9LnFR6Skzeyh4nzDn7gZFbmvBRAm77At4r3UNZbamXiYyrQQwZogDTvTnwQxud43Ct",
  "key8": "2rsgKGLURwLL9dBrHHLFSQQzx4Ge9hTN47H4HyP9VyEaBfHCbWLPzVpZKzB89ScsEzGKwvCzrgVPuYDmhsAHc7f",
  "key9": "2HzSatqyG5VbbqBV2BCJgPtih667wwCDjFJzEjkiKo4ZpVY9YvCds6mddyw6fxRkBzjhzxoWRqLgiBJsKKiXXZes",
  "key10": "4jYVbPHaa5hTuGRCnuqhAJ8wLiwtkvUxydJZk1PEwk3dmT8WU5vEiU4JQsP6fSPka4189ZHfbmRUXJrxfEuYjxfh",
  "key11": "5iQpy7rZxKXMf5qnKmMzKDTyGn8g96fTNDiQZsyZJ4q16smBPQxuajEWYTxndGtbTws8WD75x3xCRsoSnqqSgirz",
  "key12": "21n5YHTYak4afA3K8uN5ZhEL4r4qE2eNbrhMzDVbL1i4VBok4SvAE8SyBhTye3axwJZSNqPWtaMkufCEDgPWDCXx",
  "key13": "5epEvdn1FeYfpcCDZehmrVxEnJnazuZwPUrDwLRBmNvTU8GNpwEFJZfUjm1T5JYvjLWRLHA4NntUZsB3W6uZuVpR",
  "key14": "3ax6wwwuTTGbdMqa6ect7iW23cjPoPnq3r255h67jtXZA7nWbzQwsUARTpQp2xVLjXY438GS4xGZ4HTuKU7pJV2s",
  "key15": "xay7pQCMpBRwCmerKGsbw39ZmkAxAyWEJTYf6pU9ZKu2hT9uyQTJkMuXfzvgxpF4CNa2zLRnLap14oH1uKHkpVH",
  "key16": "ANuDvkJsu5HuDByWgJLLt8xyWCsVggtnGibDzY7y4cDu5CpXzQmBkwthvTwBfUys74feTGDvezjNxEnsBcdkXj2",
  "key17": "3mrbz5pgqAvqdyLRVFwwuyrPaq6nfK9ybSGsKEUqZxysQCrnwcCK3pdHqioyHpEKqH8jM1YRNMVKCof8NTPhCHav",
  "key18": "5nHTo4dPexaj8aTBEfSHp33NCVkbrr1tT56nMJbNpPdodwz2niZco87UKYyhPrAmvXTnTdXUDCQWwWGtiqz47Cb1",
  "key19": "59vWCxT9pkjVDkKmhtLjQ79y4M5Dv97mBWBAxMtG8UZhEr8jkj5HLTqkcAjdFHAfxSVVyJ3Hi8wZo66GazuCnoWw",
  "key20": "2yYg1Uqc4QjJdE1iamqPzXYoyFF5ni7WnBcCtQUJHFG1GvavTyHJ5DGi6Jp7CRLjs8wJA9bakm3ERTRjqXddKiWz",
  "key21": "5WPaF5HQMQwvwYGhvd7wqC1hb9cU9RHZNn6TNR3XazEMdRg1KmuCJ3mmg9Jsud5tbepwNvCx5MBkMskhLgk931Kv",
  "key22": "5XmH6PbWACbTt2tqwT1pxACcwKG7hbmFDsNSEWUT4xFr1e1pRYQ3MnfC45uNjzNumMZaBZPXysuBPffUuXWewqhp",
  "key23": "8xuerNmeKdcLLeoa7uJbP72AP3MSTQ5EhavHjQdvpFL47EuPFRB4QtPfXkR92UjbSJyjcFJ2j7g9KQBucMcPuXW",
  "key24": "27JZv9sKeimxW53SnGhNcPCGSWTrStCuAAxZcPTvktpfDvVs2ZXhCAAveVevo9KRXNCeivfpw2bMzsd6TnPjLRsX",
  "key25": "56QFJBtGi9NvYKvZ9ZejG3d4JBzJKX26ZDTCS6in4dGm5bXxMBwLkrGLF4fvag9vEZKCfg8Sduhpcq2JjztG31AU",
  "key26": "3zt17NtU3aa6pqyxkdmfFVMpaJWmDkpp9JPJcv5yFHpuZyQFkBvvbBGigWuMhmnnGi4Q5HZ3fH69aWrPpDc2TYJa",
  "key27": "zZeZc5hauAfBuznRj7GW2Atdav3xsJAf4hXA8bFrS4aRawqswZd6kQAru6c7j3HDrJka8kti4xuxG2Crd14dV3A",
  "key28": "26pdBgVJff1H4Ad1ps3eT3XPTdBx7WSFwym5CDk4mkoT8iER4fBBM7YZhaRHmEjYSu4i2CitwxfUvUM8zAS3Qu8i",
  "key29": "5q3uLuFh1aHDUJRDDM7NpfbfhvmKTrQ41QTR1b2PRPezNWokrEtrjQYhxZKyThQV9if5wLaUznmtyhvsjkvDdUEV",
  "key30": "3HGXwuzjRYj8pJRCK8A1pqj5phbCb7458irpYftNYKAikycb8DMhSjz3WCyvjST7MJHnDCSAj66Jg9vWwNTaA6S9",
  "key31": "5MJ8myTALybRc58at98wPAd6BPEexsN67anF2SgLtkrC8wGd8FjjoBwu7rQFYs7XjHvxu5jupeh3RsK2jFxG2qpS",
  "key32": "41mqCMDb25bLYJtHuf4gsDFJ7kxwpopy6CSWUfjUKaYeSA4A1WMRsftEhs2XeXz7LMRuUCtAtq38jMhMxhUhexZ7",
  "key33": "wPc8czRzBstpCqWhwF8rqrop3su3FkpZqnNeebugJZq7qsfkZGjY6Sco7UGBdKQnbb62SqYVXVDnLMxCtSFvPBg",
  "key34": "3aVBH4md29BrHWqzJo8ENMmisPRHnnRPE4JjKXMbKAG2sZriPrkZHKmhnwqr8na2MSfa9KNyfdPWBkFfsNSHMsfV",
  "key35": "3Ld4RBbst9TLtAiBRDu7pUHbcybGM9nBny4UpMMQbxRr5Nf5f1qUJNwFDYF12zkyPitN7cg3pxDbWp8NeyUMQbun",
  "key36": "5JuKgxo1ZEi3MjrUorG6nJGMYS2JbFiErRMynZGuurdGCmnWVXxL8tjoP9JVNavhUerFfugKh2gFdLVVkbac7FG4",
  "key37": "436aFU25HsDGDoXJqNRJri7RSg8ZFLkMjvMEpZVW385uHmGPEBAfK5pnSmnE6A8uVH7rj5BuBp3SvjuVubJwb8ZF",
  "key38": "2ZL8PMCGtUeVeZhAgsArL7nTo5xnWT54MGfEKLThZjVVLVmmNcFysUvZxSZBmVtAxJoWaqJpTfNDG1ipS4L6ALod"
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
