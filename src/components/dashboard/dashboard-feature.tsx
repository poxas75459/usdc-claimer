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
    "4vTWYXAQQb9WeJanRMvqUAQ2z4SHzDtcRRatv2v31QPrbSCLgaXYh1yXqieZpnHRTdjpCVNXQkZuBxnnVh4c115j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bYtwAWqA9mYzf9bQSxq7NJmjwZLQY4rRXCJyknLs9miG2gmsHoivFuBNDsn7CH1x1upUASRqvYUNE72C2NKC1Q5",
  "key1": "5pEHTdV9W2NsB41PxH5jZpuGCFMo2G8q9TGqb5RxQDT5igZVpJ3hCpVySbNxVUihyLuPpDCrCpZjBuxKbMpE6Zj",
  "key2": "2HXfcgDkBTok7CZ3oSewguEXxMEVqczqGvi8Kmf4ZJ659591fmyckpV65fK9dARGyomxpqPXAZoPFR7C89pnc83M",
  "key3": "3Ct1oQbbezTbHMRgPnBipgXBDF7BHnvAW8ck3kwu7kAmUcwQD2C2dF3fh8HAxBwep7jUzLcfqs4eHT85MWaHxVkj",
  "key4": "4uH1YxoprPWDb56NLgup8bPFxa5vk2qGdRj8KkyeBSE6ZccNXwPeA6TXYfdrJXVJZrJ4dx4yUx5zPXBBS6u2TojK",
  "key5": "3QWWgMc7C2n2oWTwm7ScKnwKMdnMgddFVgR4uogNp9Ledd7UcGf9b8p8hE5uWMSVmtkmPbAHsaNS4ZLyjxZsaoQH",
  "key6": "2WxXDKo129qQEA9AeT7hzpMfCdsNhAHZdtfRfV6XZC173sT3CWPPn9yXWcya2zBgv2mdDCwzynsgyt8r4Dfdmg44",
  "key7": "b7tHuZcQpYjKg6yfcZDyX2YbjcqwvCxPBMS8cJ1iHmXTuauXJY4VV2Tw9TD2g1DAMj9idSCyDiRQcuH3JcFg58L",
  "key8": "65rG4FEsk24q6EFWnLsPeyvjXTBjNo9LRHQ6W3BZEf2Eo9sBuXCfKVqQqx99cpBN6SzRLDzeEngoP1oLMxfyHWPE",
  "key9": "5mLigakLpYXCpUR3aUnE2srrTd9z5uAC72UJqyWmvi5MzzvvRCks5AYvEEWQaa2RNbrFvJSpxuURwfmngPWaE2A2",
  "key10": "3sFmXLtLBpfU5JFQT1SEKFHzVkxjyhTbK6VsHSvSCH1TuowK5pdzQi9mzUYuALBesYpXH8N8MHdhPNXVmi9oU5rh",
  "key11": "37s5hQW7sDgZ7EgmBAB92W982gaARFjx8f2ghDtW9Ej8H4ZD5PTQFKv6g8ZdSRSuNoK2hqEdDf3Uf5dqdMvYT6tN",
  "key12": "jTWueU8LGqzXZQ87upZ61RgmNnkDpHPHcdsortvqo3f8cV2eMyyopVmLSrTnT2ucWjbGcKHwZWVRJ6w7tsfkjJi",
  "key13": "582WF2ojBA53qL3GgzgUSp7TRRMd8X8evXa7B1Pve7MiZwb1d7bbf6UCemRjuLiU5msKuWcMA5BeYSi2bYbwvPR1",
  "key14": "Wx6DvGYsouCR833xDJ1fiBSCBKXXcq424xKwzTzY1ncY7LyTMDocDd9Zoc2mp1rE4jErq6qrkWoW5NYu6q6oUyG",
  "key15": "4M11WvaFp3kfTr45vRZYAvJzSXM9Wo5TgCR16AwiRvXKYfxjPMxx35QRRRa2swh4gRhnC19fwG3qJh564gzpLxfs",
  "key16": "2n91ptRAn8Gx4tdmHhSVgNk7G48Swu2vzWCzhXeqv1s5LUJuk2oHxVWWRdvHVeigQvmq6JFUYU5bP2mvWc3s4xYG",
  "key17": "BJ81ktmqx7Dm59YXQ11d6HkvV5uVdw61xWLJH9Qn7WDfgW2USRnYU6dcef6TtdxsoN5jCboQjTrkm5DEZ9t9n91",
  "key18": "4FhGgQYdtxLhALKWQffHxknNL6qKevwSvDqb5br6943RAtMhy33Bomv8PEekLp4AQ274rzCNit9vPXcsQdmKBSc",
  "key19": "2v9ordVCEwBQPqGU9N9vxWEzPutsU7rJ431ceHKkGhEoKakTdiwGL87ApwebhT6NC2ca45EpakXYDDDrSDafKhSY",
  "key20": "VvXkub461Wo1T4wwLvt2trQQLVo6FPfiCoCYzeuPp6cfaK9L93GV7CFNz2B3V4RqMFLEDxdJLnGrWB6RmVtiPVs",
  "key21": "228bJCqfecvMJs8LdPeHyNopGZxQcBAvVEuCD7ZtzqNpoAa1wkSDCWg7KRwhdna1qoNGwZ6D6eZm9omk1NVCCgro",
  "key22": "ASqQ2BsRmTBJrxE5Mn2V4hpD3Rv2hKo4x1vxgakA7fJPihTKWWdgc1gFykipy79y5buFntTyNE8t2ZFFvv8YsnT",
  "key23": "3LLi3t43sMoxc6Vwrfhiq25KqmDbcxeoLLXwaV1yZrbwMymeU7G2B4CJzDG9k5Ko9s9qjtWry9B3nDzgzomx2wq7",
  "key24": "2DTzwTsjcorFubVdhWamy7iy7Ba6sX2Wwkcmyc28u6g2ykg6v5LdiA6Qqiz3Q23P39obmfTNtVv3DyhBk8S3L62q",
  "key25": "2n3jjrwiMLAUvgTJxbbivDrRaBVPtAvhceMzm6FKBoRdsPWDFJkacKXQgPBQUwn8hUJEBFYoZpMKavPNheYLLj6F",
  "key26": "Vdu9yKvevnJdVXFhwo8LJDoreCPVCACpCsHc1uEdVrqpXVNhwuN4dhUcGByLnXAxR89k8nLu8nTWn1rsWvHUb49",
  "key27": "3PrBBAKYecaYpW6mHJUbJsU4HKkjrGmdk9aSNkC3fKJ9K5KqfiqUR3sxH2RVk4rCHVx6XtNLcUCMQ2xSRjYvUZQv",
  "key28": "2Nv5Euhskv2TC9xfLLjY72hCTJ1xAziXXHwKDuJe5mDLPqqpH9tpz8Ri77goPEJm95yGwCoDVGgwn6EfSBnJ1qE5",
  "key29": "2Fa7vgJ24cBGXyREbAugKLaaUrVuNJBqfCEZ81jPiZCnRoRNCFmPEMBsdfcGTXmmh5JHjQhLQdYQdvoE1ZT1G86F",
  "key30": "2oKQLERaMgskj4hwz9wTswfxUhqwEDzsUPsUYf2DrZyfMFnFkpuL3xsGSwz7t4G6QvRgsmuWDFvPzy2EpKDpmBCG",
  "key31": "t4gNkztsXTbKMz8s9CDMKUfD6gr6W5CLACwqkJnEtuA6RAwcmPG9SLQvUuPXygm2ABTaQ2767ot2onXDavivfSY",
  "key32": "3oHsZcnv2k2SwKFHr2kKLCgTva4DpGXDemsP8dX2NQrCMWmSXuwUgzFvoaQZ7c5AoiG1U6YUgX1Thd6yvyWJrGKM",
  "key33": "4ceeotEpAWg1qZgXu8GcCHNekLVg3pAZF4PeoGsURF6at9xNXQbBkuJh7TecieezAVZDDjrSEuNaReAzBCpM4Rgi",
  "key34": "hU8anaW2kkCAT6WvKA4K2uCaqa8c7pkydWMdBJH5DewFYdPHDjqxRd79uY4mwU4VMNkeXNfpUmPWwvvLNmk5KPE",
  "key35": "z98dvfvPhijGGUv2P2E6aVUL24eczjTnCTRpny59oU8BEotD4zSpD7fthgAgLvgzoDQTabnGYuzWnPKjkXFH867",
  "key36": "4yf8QkcCBdxuuobsBRwJxiQbya3hKBJgtkDjV2M8rtvhDAmN6a6HDCC4hYN8TYg8XepBp62pTsWG3snoRNdjj3n",
  "key37": "4hYvBfvtDBckkyPtTFkU7fjUGRUxetnTFofEyu9rNFNPwo1teNjqfppYtV2LkcFppbnn2XovXb4Sp5gpYwnMkFGM",
  "key38": "4Dpi1qccw7PT47RExxuFADT5B1YYvRboCmQaTkfa971AAb1mEiiSqQceLQFpPA1akHjxQYrh5cerK5FikHog3qvy",
  "key39": "3JLdo4enakKpJioyyBGC6QRkiYRQ5cRTXEnoz2F6w6No9VeQKtpd3214L9xK4USECFt7AvLwxQHb2QacgQAm4QGY",
  "key40": "42mRafTCEbTEoZwHzWeUCKSF7HyPmGkQnjYYgKXuutHYEmDT9CaVk9dAC3Nb9p4HHh8Pi3xg1fWdEA3MSMBy3vkh",
  "key41": "2g3S5sDTjHFSuFRvifnfXVSi7JDmuCuz57XPbr6EYwnVg33bUSSrMvePQe4QV1fmyAbVPpcCtruZwPKFo3YemDTf",
  "key42": "5xesmKhjH3Qy3JywxuSkFgxRocUmjMygPojDWbcB1Xhh8CsFNgsHQcnkhvESZWoGFeGScqDvbxC8PcFE7Wrrec5d",
  "key43": "3jFD5UJd44Xcb5xXz55wgChus7Wg6qABUMxWyE9M7RWQfx9oamF7UVRoUjRZ5Q9JdGRiE7Tir7dJKfUkCh1WMQv5",
  "key44": "kZ1CPGizeUb4Re3zKKAXoFdPmXtjF86nSFqAVi5Mj4YavyRSEhAmYdEF4gEnjqXLeAo1bmKdanbFuudwa82Af2F",
  "key45": "5b9Ky6zuXwvpmX7r4DQXoxEajFhAH5AjVqCiF4JTMrLdYUV6YyNiMzWosDBPbGE3V1fzjnb5ePj533E8L9KrcLbA",
  "key46": "54x6tR4d9SHCfibs6CZMQfq7g6W9es6X4Pthkte4G2gCibmi4yjQJeBhcpGXC2QSqRb2pPRvipaymb9Jt7t74ZDc",
  "key47": "3TW3eQ7P8D4W2xVc1cERSpE3TWk1goX1Nd4XTB57Shkd4yf1Btfag1xjhkuXdCWwkRE7LyrVmdhxZ1DbcKmZTzFi",
  "key48": "3iEF9FfuecDmF2Fdvb2iixxnAnAnYkjwBfZRYdEztLZSQn6KzuUx8KvxUxbv6scwowv5oJoE3mGC37X1g5SyUZdJ"
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
