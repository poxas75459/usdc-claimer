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
    "2UQZw47yPWcn7kDjtBiBQFsBa41EzvSzcAUpdvoUVUAgCmNFkyAyTP2mXrW2NDYqgJ7N3tfHdfVbzQ7SnT2kEhW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H1mLb2UUQhj8rZQqK318UnvF8nYZDr59oHmL8UyGfsKaHKQPaMAdGEH1R3Xd1VKUypEL5MkbZwjqFPkU3McwwV3",
  "key1": "A1FgXw8ALTKpCxEzaHk2JG4ryKCYpcCtVh9DF1GzBXVgwD2iVetK5ipKVwxx6EKvJV5V3W7KAg7d4v2uLFvpQNZ",
  "key2": "4BK17rbJDPbjzqxw5cxeRFE483eLTyR5yrc9PHxMqncaga1kk5Kw2WbkD1sTyMXDjJUsYyMh1w9zccxrU3qVhhpe",
  "key3": "2LFGpQckoDhoiwUjx2Q7hnkrhsGotx4dLQTnWCadyTNQKAytac1zb2ABUMpDmThAgg3x4bGBiBAydWkwFryHoMxE",
  "key4": "5rsntCVv7GF2PEAijW2jbb8GyrU3FLUu8Z79kn1xUrvJaZR95DYBDcFgEKpMQw3SLrdWhraf9t9py51UH2MeBMT9",
  "key5": "XvES3YLHm8gZc82V1pYtjbhJfUt2ZYY9ai6PF9YfzS5McNQmY7nUgTc8B4nvBqVz88ENg6TB3TWPrX13XMwTo2z",
  "key6": "2VgqJtsgMeKTmVDgfR7zpxvGyhJngDmnZ5tkbSnevMQHLpexjTCKhuB6zjNYZAQSWgDMztYnPCjTEkpdnDFuagcL",
  "key7": "9AxHtR45ZmHRDnYZTv8GAG81VERh9HyyXqyvCTZruLc43ZtEmkpYMGvDMKs5gFw7xLhwmq2YXk3ifppN7v94p4G",
  "key8": "2b4d4FsXGQD6hsTffs6t2Vv7U15GK3JHfR8HqVUKV2LfgxRiMmfTY8mFmnBn5jk4YZ6DsasLxcvmsWtKgNYipdWE",
  "key9": "2gGjw4HPymdKuLfUS1BQ2fHszH3t6EzkLEWsomDxxf2r7JdZ44fCCmjem2Yqpkeyx2j2mjp32opusYcdWsquVF5G",
  "key10": "4APDiDFMGX5ioteq53AUx7ohHnDWmDWxHyVi1sahZ52EebAKrUzZBjAeq4AsRJJ6EG56kPLTT2fVzriRyGZMz45n",
  "key11": "4rjagi8bHVFNFnfVTBaeFH1nSbRw9pQQ4PHChAUax16j5dqwkEoHdYA1L3PUbnvMbrYjGeB3GXWRZhpPvTHYiJVz",
  "key12": "2TfBwSCKrgpN5tnyuPPxRUZ4jTAAXXB7S7Ed5nYAyBgzaMmv7PBWLkSz7bTwifV9ry7reMZPvJ35cBu4Z9GNpDPv",
  "key13": "bBoLVyRn3xB8N37U5SsMXZ9zmVYWM9RN87Kd2WiiTYCFeyhQ8DL5ZdUhuLhoMD8PkiKigjacLQ9UtWqvy4Kj2tw",
  "key14": "5D1rzKu5WNSjdFhEkpmnZD75Sehrcf5rWjZrtiNLYP2qfz2BAAd6Y6yUa5vLUmKLCoHgFFHJ4Hdc9qVdKfaC26kH",
  "key15": "4CwHW9xEMcMs4AmMCN58F2PczrjLHhAPvPnv7j5XN2szKxgP9fs88Ez9nvKR73ZPeU8P33N4JgZRW4PyCPoJGdVu",
  "key16": "gY12JwNN2Fe3t5mPGAAruaHuX1ooWw2qLrWLCr4aVCNJYatCrD2F7WjVWnQcAqCMJZJcCVzxMaFDD2NHZRcUbKH",
  "key17": "3itBxtPfjmT3YqRC1wR2bWCWkLrfJkcrCkvjdNMfNbCPqg3FL6enuynX53RPmaRtvrLFMXsogMvGsFdjUeQVwXBi",
  "key18": "3K29ehMtX1ChuLZWBFccM9xitsrEJKuViNGSPdqt3WK9R7LPz14GdjQVwPduDPiJUNeNx6KvivE12Sm89MPMhAoa",
  "key19": "5xXAdqn8VZ9kE1FXjajCDWYW93sLxBHSE73dvM1C9prZc6Wxvqa2DVE2oZx6b2s4PVzirkD7c4MjJxhTGCztDx91",
  "key20": "5tbHCkNCAzqknbUDZrLEgkigmhazKnngqZbu5AbsTP1rDwGx2ZXS98Ad7yiZdFhaYoBy1VaKhpNnKC7PLoMDxRxH",
  "key21": "ZzoZw6DgZS3ShUkWdbXVFQk8rTiiLxbhyknSJCcRojXGVuznpYTg53cSdXzMs7q7CCHhpbzU6vhjqiR74c1YVtj",
  "key22": "4p3W45w11fzMC9ztbVdjmZ9bcewnz7F9xw1HDgTJT1yb9f59HT7DwPKTHdMoxhQ2cAfJoe98w628VG9cMmKyk3AT",
  "key23": "4His2tCKnQD9h3peDqMSXGwk9m7RGR6P329EXEhv8eQ1aPG45Ryn4GnPsmDen6rNn7p8TEfNXsU7aVeoQAXZVyb3",
  "key24": "2b36BopzZmnLpHAVPFwefxxWZmG4MZ12CG4cvZSW7Xc4G5WtksM7HSXamrEPqTWgZBZaup9TF42LQK5PrLbnErGW",
  "key25": "SbQ6bHaAADUj8gVT4Vypi3gAXDZVQiXHbyBDtgpd5RiVc2BMPTEN2132YwUBrVeWNtctR67oqei4xJ3JXU35fFo",
  "key26": "yBhMpYi2Kg7VKWat9Ldu8FnkwuXvDUGuL4Vrrb9SRMRYe8Ac5VAfmgiiEE4evQG1zxdNdUWaZFAanT8w9NFAPWN",
  "key27": "5u8TXVjc3hgryrPtLyh472gQaTahbAGTpMXetce8NNTR7C5HJJdk1aVqeBF9seonzgZYWK6dZfjQPMM8e1xmZhED",
  "key28": "4rCg7Yuwv8p5sdps7Jje3kBhsyNHBGnvM1jqfE3kf2im2bVxHiqeiRignZwrZosCSURbkpf7fQcrcbYuSK4L1WXy",
  "key29": "599rbQYSWVERGr7czEFcSe8ZYLkrRcFDqDrZuyeATZFpxwNyaR5u7FtLBGtfBVYtvGQ1Myzo6AEQqP8er6bj5SgQ",
  "key30": "5or6F31w4QcujgEz2W8Wi8HyrmVRqWwa9BbwctYps3UhPGYZqEGAni61SusNdAgqSqtu45xSULZfgcrVwacKrzq1",
  "key31": "42re1jY5zq6Do39e2Lze34xoNAuTaWiTar2bLnmES1imG8xMtkPk8nNQZBPD9g6kdVpJpu3SKbxxJ5dYq6wAcMbq",
  "key32": "3WvdB5pJnaWB2ABUqiUrgWNpcP3FCVKsHELVQ4vfb2iECd9vSqCThnXem2TQpiiFFeBYMnP2grMr2gFHxtqPhR6i",
  "key33": "3518hPtTNr1wpZp3xAptZe443R9XjWwkNUfT8Y2KVsm9gzRkP7Kt2XDD6y7xsUhvkc1aVeeAdPoNDCMQbqYCh8zo",
  "key34": "2itdXQv2TGZcH3UWtS6STr2KqmpAud4cLVrEmKNjfEWsXC5fncnd7VAeVizboWXUBJFW2W8QQ2Yeb1X67Hf1xrRc",
  "key35": "3WEe799Xiu4A7PXYsZ5QPaZoG3k5wn1bcmP1s6Ln25zMzWGgMr5tABujX4CHecdiKBQ48XwpRGfkSjQydphB157y",
  "key36": "e5VFtSpWHa6zwXcCkLWbzDm7Y4wUdJ37uvwoKpM1mrxzjECVWCrfbvcmayTBmMQE5eHT2SePbeaFDNtg98wEFB1",
  "key37": "4pgZu57bKZfzVFYtK8p7en3rRVZCVvsd5uEHWRtdcyXeRu2ZMLAeUnopGfEFNGUGQCkWbA2AVqfPwpguJGKEoM6z",
  "key38": "jSfc4kxLugjS88mtjwLiEQzboryJJmtGh3CddSKbSNYYt76cx2gmqkhiwF4MCR1T2PyXjA8u6jFaHXQk3xF2jnA",
  "key39": "4xKp1LpEHaHCJGPzCM25D8iU9uMh4VDKnndopjczhanu5NvaMCHvansbFUvRuLU6cEJt1arBpQ5FiX7rwC6h4Xud",
  "key40": "4q694gtZRVqrYkpc9KHqiXbKcohNuPBMsvaLH6wJjRqbNKUz6PAEKVU8yznhijAQCyLWV2JVqJ18oahN5EWPzpwQ",
  "key41": "4QsNcxamUn3EaqinoctpKUtyH848ApwEUXBuLE4uijpfB4hzYKB7Jz1q1C2cSt2kDJYjZiTkWjPqcmhm7FiQTT6w",
  "key42": "2JmqKZtqDff7YrmLqm7rwM15745d6a1y8E3cPpMh39RsZ9L8P3tMXkuftyyCFTDzGvewDQ2bccVA1v1pJ8waBav1",
  "key43": "2fpXQX3shi2rr6xJm4MpP2vYd5ssfu9ZZ5SCbDQBD41Ks7qVX3wHcCzUiQqd3Ub62wzoiGS21gRrxgcbDidx1pWS",
  "key44": "65YQHM9Jm96V3WEwitKyuP7woVphRhZGmTFyBSRnfnmppTfX27YQ2soKhF1nUpyLEB2dkb23ZaydmAZ6WR6gyRVT"
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
