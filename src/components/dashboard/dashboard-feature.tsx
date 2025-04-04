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
    "4rW1WAzgXfjfxKU3xAfJZNbo6BSwNfupUipuWmN3xAixmGXGePnro3U1QPL6yuvwk5UQd3Pv5CZQ7M5KW5VWCTXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ocadzQC1ZMxFC8yeDMFEXN1sAfyG2MhwUNcfR1sjGt7bU4YL4avL5DkYUqRtumbMwVfu72BgC42vdRux2TUJrF7",
  "key1": "hDLeCUt9GTcH2pRTuJebnsw4EvmohGGsLm8VReBTT2iDg9RcuySUt1gp4Xbx8PXREbp2Pw6xiJy5JK7FqxCZLRQ",
  "key2": "4RE6vUFoyRVh74jXoBTVBQsfyMyzVXopX6pPoGU8xkbNFfktfuaroFoCAq7nG17PK2N9bC1ASi1hT2rQEN2aRmQ6",
  "key3": "61kd3qD9zQgrt1zGHCwzYrDTkDWSZyUNyPkohjHKDghBK8Fy6tcUBYmeTvBqiDGdpYzidDHdVSgRHnbxQH9bRuKJ",
  "key4": "3zFU4nMsgaa7s8K5QPYPcDXBzDKzmswCdhf7CUVsU9Pw4YomZch4DFMXajH79pjnjkAsp727BzjcgHdRLvGDrXcR",
  "key5": "2AFcXjybuifsa7q7mDkED7pvcCkf79CJuiaWwWRFVV8sqefms6jDk226Bie1EH6efABvMkawh81pt8qrjooDWuNm",
  "key6": "2YNGJzqhnVcX6LUU1SaQMzxaff13NomszwbVssLL2BoYM43e9QjfK42g9yezsaLWb6ia7Lv4BMRRjTHRerBKpcr2",
  "key7": "2Mfoefc1GHGcmisdrZyTvVWrQf1FnuwwBHzRvBS6DfYPqFLagEgJyVXUoDPrDhCSCDe4n7AfSXmxLJqzGtxt1nGS",
  "key8": "44QSYkGqd9YW7BDsEKmTryYpga34Nhss2rk7qchgNdAiMyvPRTtipPY7YEeq9XsVdXjMUDLvkCEEuMb9wymkoRw5",
  "key9": "2L6HRSQYySBx7vEzhPhbgz7JRr1eKJVWPXjqKDcBxGyR59WLmDqZyWWEKk2XtCbdA4dSp3uy8whJvjdoKH3FW2YV",
  "key10": "5LyjZaZ613cUpdSKjo95cf1UYxMxGqs6c5EwN8esKcCAmiyZ8XNQra5X8ubxdthkxYe1uhADdhf2EzqtvDFos5m1",
  "key11": "4BtF5tuZ2e21daQwuhx9QNie6kDkBbEMA5QSjQP3rW44YvoYoMRZKrP89eBtaM5PRF3dihRH5v5MpWVEG4ZNGZis",
  "key12": "45XS1JVdYoBMHZSWvopb9Hq8K1m67DhftFHS7puvV9pjeDFaGmoZzgGMPDWon9dqUYZfRJLyG8juTQRqgqMm6LFM",
  "key13": "5q8gc5FkNnWji2W76pB7oyWAhhDpttSyX4u6GiFBotN3P6mBnZ9NM2dxabzYyaEnV3dAmgfHzTu74H3yzou8ZUrr",
  "key14": "5yVmsf1TsUxUdhAgWUWh1iVxnRmYnksD2ntFNwnqsxm1uBkYpaMxeH4xWP4KNE8UZCcuQ3cyC6im7gW2jXNGQU2",
  "key15": "kLSUEbrvrApdA7ysA56EbWRgFKfKXmRKdHUkKUhFet84h8oMRoNe5RcSBSqrLhfAH3KzqZC2RZtgASXCERvFVXo",
  "key16": "25kiS65ebYiwLUCzJdh52ihoXDdfy3DfFv3MzR9bgaLA2Cm27kPuJqJ2vRgqLeTWLbZ4W58zhzhoqrAu8aGSxJH4",
  "key17": "21ZpC1BFeLLmvLgBZNyjRHMjypU5p6Qgtncxv3m7FuRsTBYdhu3PP86AHGYanBtPR1FArSWA5tCpzd6LcmeEEiwA",
  "key18": "3tZkwyPAh2748Q92Awyx8NniuBGGfdY2jT5jfZG3r9pwVNFpknoWrhQHTweK6b3uTT5CfnFowc8pmFfDfjGMEE6t",
  "key19": "2qFYFVNXXHQ9JigMpwBYzqF75pfXQTzWUNjTRnha987s6Ri8F3iWs7DjBaW2J7cLQs1hasLqkY7mvL4DAeT6omi5",
  "key20": "41rugqtLirJgNrP4BDjzCpb9g6w5JyGDtgbVSsovnZhipY7r7e1rSGDS6JcbntDwa9SNKFpgo4UpVxJa1qvhxG9z",
  "key21": "3o9TBG2mQ25jq57LZUsq1Ch2HAytyYmF88kdE2xFjUaZ1ve58NjzuHeYc3X8qALMwnVq3nZE62ny1Tg2LTuCaxV7",
  "key22": "4qaDa1XdZMcqrYbC3CjNfwocGF6Kbzwr9HjAwgMpXpsAan3v7DNJ32jBaRRGwA2ip2ByTocqsbBHsvF38AU118nc",
  "key23": "5D6tQi5QY4Rqw6qV74DHDvSpRd6Vm4LJtS4z3sqHFpyyqCVwTEujjVVGL3nLzrCtrMp42qse6uksiMZHhnbdG2dj",
  "key24": "48tERxtjB8n3ApPmsFcSrQuduZ9ntA61bZBKsBdDEecgP7wbKcbXw59rNtBQpGmMgVL7u8wkb42ddG9sjH7Zt4St",
  "key25": "5BPfaxySpjXDvVBgTMs7p16d921A1iV4QKc5rXpTTsG61bB1P2mdwn7KVmKzXQrxm972oFZDadTTKYFmAaujLgmg",
  "key26": "5LufaRcPvAjt324kKS1L2Xsr2uugtXQUgEcKSMQ2afQ3jyYZnJria2fhu5vVRH7UAvompUS1UHL476K2XnxYfPS7",
  "key27": "4RJm6YgJUCJgRpTboBiSGm5FbdQMnvC8CMKNtBijmWNVqz3BjAmjF7piz1n37TfFz9cvrT1rNxsaPe8k1w1CPFG7",
  "key28": "3wAp8VScb1mrHqiX2avqKt8fLqf1jqQWpDG8xrKArGZPoCWWuFj25MnKC5s1QBmLi2qgDMUuZpGWiiNzTM4cG91G",
  "key29": "GuBCHUvbSyB8yLJC8a6T6mhPZnGY61mSso2EwRHQpWUTH7V7faTAQqzmdCHUsDjMpi46S2d5rroghdnYrRh3rCN",
  "key30": "3pgwvavkgE1CtemsYFfpVUiT2TksDsAhWo2qT5BBdN7ufpRVydg6TMko8G7Uu4JhxLjtWbWTGi5pnTpuUZKk1f4L",
  "key31": "48pYfgH617B73UFWXB3uoWDukxWLGVK1tRhgT5BLJGbKDGPXCJ1W9PrDV6MyaUSb4iBmyA2v9tpfWC53nR66FPao",
  "key32": "nQ3yR95aCugHjrCqMfSWM29JMMXbJmELSzpr3y5PAjC62WzhKgmBpccjswuYv1JdRKZfyCPt7uHUDsYg3eM1yeJ",
  "key33": "4RSZ5Vr9uMEj2VsZNbCQriNPBeaZ76cWZBSMRLZTSXfVmJ9MFXARY8Lqn26pUyVdXumsxTMmcvAnapGGTRdgyWtM",
  "key34": "hapZSs4tMWPXNMXgwpHThXaCBuzovwoAPCi8t1sydHG3xLz9HjvUQWfhrtRn8uN57Nz9z8uDYKiAKStM31z3dMj",
  "key35": "3cu6jnKeRA5MyswU2DigFrnNFD9MmEH95k5XvgJRi9ZqFvh8teod5qHRedjrYuTXHoXHtFoWzRLUCgJ17SqF8gxH",
  "key36": "3mbQtfR2AfQJYwF5WCVutBnsf66RQWuP82Fmdxi7vr2ScWCi1AeMFba1JjyHhA6XwLuX4hepfPzd821F9tGJJDxF",
  "key37": "88zXUhXAfNU8dHAG8XVXgWS21PeUUWFDL5szqGA4vmF3MmjUFEAMb62biy67EoKXxMq2SxF81CFfJb3CqTTbjoy"
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
