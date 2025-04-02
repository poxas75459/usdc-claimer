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
    "4iX13S6SJf1p5cqXkPz7GJ85DC56MbawFrY2wJ3qByTezUm7sg8ZLq9QFppehtZTHxa1dn7bFx9tSobPZbSQhYTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yw2Y7iUg9Wc1zxkzycwJMSchcL6LXBt4R74Gws6cySQ5CwBnmZG8v1Xx9GhJSmgvyNsjPq7hfu7RxzmzY4USYpU",
  "key1": "2xVdhb7QYR799fG86XGWzMWiTbcqHPev7Sc8QdZvtywLENNyYvQzuCJRQxfgT8w5Z1LxKrxLVyqoZomeiRvEgxMR",
  "key2": "2UzjVwdunKQgV73wK595hUpLuH6BBrXHBibZotTsJ6TqQRTnrqrW11xNPyyNjYaV9SQA2WYYoRp5QkhvSPxT37SR",
  "key3": "5BLuQYd49B6pyVXNWkqhMfDRAMZaD8m17U7ePT5RpMP2t657LgshG6trTx41QpqyAk7X91PvP9XS5W8CofyJQGAL",
  "key4": "5DuPnkxMkphtZ1VYHuVJ42sN1niAbKfL9d9YxiyDDBWNXKBHAXHjVmP6iRVxsotVqtfN7nA86rFCVYb1k3BkBmUt",
  "key5": "5RZuZ1bpVBB8mGrk8Q67JeL7sPj5FYZ3TSigf7nK6eUupzUcktAmuix38N31eQ4Y6zfxbmux5vewc6cSemB1DnCx",
  "key6": "4GxBi8mc6Q21cU7iiJJUSSKMbUdsN7sif68uqWVy4HEM1yic8axrfYHqes14QpWv3z8yGGWi5xqPauBThM8t9kPa",
  "key7": "629SiD1iQH1gbasShwFUGU5gtMDCyrLNEjD1dEPsEKL1sJKu4fDRNUnG5A8ATdfFBk5R1Vf4ugnT9kJAnZfnSeYQ",
  "key8": "4tyFTXs5E1ffQfLo4TadCxGfWiKuUL5NLNnEJDBzeNaLPc88gZ8ZcZ22JBxscD9ju75Rd9FcgaH7gWYpKTTWuKVK",
  "key9": "3SLP9rHLRtGoVrrpmJxCFCGTpVTy93UCqWaBtQ5x9VxokjY87Niar5sBKNB7Nxa7sAiDGAEHCrMys13nb9ArTn6p",
  "key10": "3m5WuKUBhTRq86sYqArrc4ZfxVDptCxEvNuYUT8qurMsdntPE6fJ1gCiuAqMLDXyQsPzT4DMhW3scAafSvfg1Gay",
  "key11": "xdHWNLgKp5KrETSUzv5XmBQVSjkhCjS7NmApK4qM5nJXT2oSTBNLKJWDD5uYiqqwnyyU6uiaowr6Puyc64MNVk4",
  "key12": "2SbLYE516fatzHp4tbgM5p5FEL99vpGrc5ga3CFHmdpEB2p6dxY7gx9yRy9L5oPidUksLFUQAeRbSDWugXS18Sv7",
  "key13": "3rSV9K9LSEDKAFZo2FdBqBQD2Kbeoy51B9H8WdMJPPemz15dAxqPrWZMimUH6vpqy2YQZccfpdoRUHDWKBLsV11z",
  "key14": "2VrUjbWeQwnNCKpdoFNhK8QF1pNGGFC8Vqx24GiFUrteNgjei5bvA27LFbYh9pBrCeXu9vLE9yBjxWDzmkSUACHJ",
  "key15": "3KP7HjhJLtk3svZv6iXB2cwEMh4yBxUz9DZP96afmQFeeN8m3unDQAyFdF6kvwXokmSKSywTtZ155RYs83nuhBWZ",
  "key16": "3XqWmQNFMVJtU8kxsFX8hZS18vvktkQnEjZNUFyU2XnKN4TDAeQwatMMD83TJPs9F7M1aweAUHau2HhHpsg3KTSa",
  "key17": "5yT1hDnZKJgfqTFN8XUJ7AUtC8H8wQZyf3JF9w5Fkcw1c245ExsSNCnDXNDKLqUffajaa1qSDzbN94LJ2tEV7SkG",
  "key18": "4uPXGXyTfzHBtU6TqYQxkyQdgupP36YcpiwKvj4NMzazQUfqJJzujkFGshV5KJ5vovhPnMuuAo8MzxzXxsazFF9P",
  "key19": "3Dnd8wTKuRzyeBECSehD22SJtdNytxS6hVXznVmfzrw6a4h4Duy4FwcgGbCDL6V4jUxg8hhzQ95tLbpguwpBjT23",
  "key20": "284hotSHQjnhHhcWT1HYYA7GYf4Jy2S5Kip6oTpa81LeVRZheHWYi3kC7mDjd9SWzACAWQfCwKaddYFF41NRpw4Y",
  "key21": "3bFb4vkrnrPmZgVvTK96pLjUMEMDPCrKeDgvmPniP1pEy4RRdfB1dRuRfSdAjRLke4Gr6FYBvj7iEjmmDDQh3Ns3",
  "key22": "678uftLUxy7xHeq9dPc2fWSRfhZ2eXTp6kLm5Y9juWVp4358RVgXPq6eAKFnFgSxor3ibEB3wcfiSVMTJKt3dsDX",
  "key23": "5HqjswhMuPxWphFM3Wfm9hqQMWyLDXfp1MFp8izxUckPfGSDhPXCmgQtrUjRJYNrPLNb6oHEL6QnuwCVvEGX1xav",
  "key24": "2Vo7RTTyaVssFHpnTiqX6URCMXUgVBKAEheSBcyUznDHjDsc6HPL2wJj8KXfdDtAQe2wz8gVwDqAosnKFAdnwoKy",
  "key25": "25UoSrhebZSAdan54YtAyycAjmKs7VGEduE78zzrvWpdVpYafa7Y6C6JvtMErvbh5FDFBUiZxQzjrJzBV8XvZb2F",
  "key26": "3HUjG9LCLaG3oKPAL38irKuSUbW1yQeZRCr8HJYg8E6qksCbESvyBfZGpokoYL6dZrcfY1BdA551vCrKbVzXE46j",
  "key27": "4NQb5kNr8T3qbCVkSStfsQUprWtQqXrkzAzzC5juN3d6qTWXePSJsZQeUcLtok7QoT3x24PpiYsq34xjmHcVed3f",
  "key28": "4mCur9GvS3dWQuwMx6coGwVAbzLX7CRZ5LamWYTBCDQ6e2JBuFT9xCWA1h9FYjMLmXGqxsHM2mwWkoBdwJnqSts8",
  "key29": "5qRhvBNeStowvzYMx4Xd8kmaBkevyBgdoww6LAA4bNB4mKkSPqJCoatHiy8vFPfD2fX8zvQiVwLpzKMkbt4eTy39",
  "key30": "2tgLkjPnaBTbgUtqsyFtvQpACQu5iza1UzbgEEWAqDucYyZ7yYtuzgs6qDTbHJrUvY48JfgvKZVB7h2dzrB3NQGH",
  "key31": "UNXf3Rpkwyg1Ty5tEA49M6LHRnG7GQGzRv1HNtYC4B7VJp5L4hubx2AZynv8LZvQe9ZaWALGRNQfAa4LqtQT7yV",
  "key32": "pz1bQxdL7X2KJ7UsgAuC4sQERobtbBN7pvJMqUNeUhSbWkW7X4BonsNN1smXHT5NEvnQKP7XYYLzxak2Jw3288H",
  "key33": "3cLnJ8FQXifGXft56ucGsPg2qkyG79kDhoFwCH8FDxj1NvYwDG7ftW1igHpY8nQwD6waJ8t7weEwAfGk8pj6X1Qt",
  "key34": "p3X31RcvLCQwGGjZg3pBK2zjfyUp293T2iE3DwWNVCqTY5g5SsrKhvmWba7xZV5W81K5TiKFKqRkMcBkbfnniPH",
  "key35": "2wdBAUxZvdNB8j1eJVGfjMgPEcUXRDgoEYUUNAvDAAet5BFhe2atmFZhVhZFZJkRmFkRx4ovCvUbrRgti2VcfKJo",
  "key36": "2dQkpnSwCsXu7idvNq3XXuEbkcKBuw48tVtwTkrQbkbhUBgRLF56ovtLPJSbd8U9CPn6LEPfGud2tTA6JNzTLsj5",
  "key37": "YNJkZUJePbar8ukgUb5J1DYyLu5WkRg1W4y2kJrX37ZRbdUV6Bpx1gJ9ubN62cuQEBBpLGehNeKkairJKB7mMym"
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
