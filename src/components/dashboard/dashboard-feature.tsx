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
    "5kmyj63vkdTisK5SEAgxi6J5gu31p7hxL15aRxKNr8JR6c2PQUf6ijcKZEAUPgJok1G7T9CWvYgyQ5f2fhvRFvfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52dXJtrHxPPjvfinthLmPhvcRQePAk3aHE6iXV18RioYa3ozQdHhBqTf2jHMpnHwfk7tpvXSfvfeUuJFtLPZeDNm",
  "key1": "4B5EDaaaY3SrE6WxHjE6XJFzCh7vW9Ci8wnryKYEGSVCyCWCNaUPbeSk3WqR7nM5pLzcyxGeYESkPbcJApjECegY",
  "key2": "5jxYeg896iJzPwXxUfJ5V54gKThx7AUSHmDuCy8sugCLSXwdFEioNp8BixYFadZbkGqhZvCLUNirh9F1VSX22xsw",
  "key3": "U6R8sWB6o2y7WYZ7Pwe1zJU4YKYPGk1TJsAaqUdwmMe31LfVY81hG4mR9e9MZgWY97TBDPmxW539jUnuGKx7GBk",
  "key4": "5JN1d1NxVSkkAcxQZrng752n7mxrEM4Yz7cixjNCUeHBtDsg6LcVrmFhhUWFvp7eukv4cxJN11iH9MnunFcVxhXZ",
  "key5": "cRnuS3fbXTfHb6qEmq5PcSvHwdxjYpxb8FgQpNsUpUTLikuWnFJEqdr6jtUv4J3VZso4WoqtbSvKS2xiJH9BKg1",
  "key6": "54X24kPF9jimDJyNNTgVxNtXhhoSJCnsEAehesayofvR5Cmmk5VYe3Xg37dJpc59k2rCeG6XiY1Dkp3P4a7moTDg",
  "key7": "33G4dsJJEPeNNo4XnZpy3DRmyRXaiWXww83drreTKUTAxhLRYyPwGyHYK1679xrUNSi1TJeXonKcgd5UhrNGhbUR",
  "key8": "zv7zkMDKC76v8xo16RJhhL22XGn1YHTMe4pYnW4j1bnWm7YoKBbuG5rPNFi142W2GpYHN9Re6NjQB37f2Eypvt3",
  "key9": "WABum5PxdhoStbtp6rzwyWxaoYgZkK42VQ2kWoqqm2Rz182ofNNCQRt3n7vqHj1mHrnHHZWPSeAcHx9qfTtmif3",
  "key10": "4o65mBsYYzq32Ew54ULjKVJjWgcdXW8ZTwkUhZWENQFwAAX3KJYGoesT1EFyvLcC5xq6gCBBCdmt3xng1pB3VHJp",
  "key11": "ezUXctwAbrd3LSK4FFnk5jHfGGSeJdN2X5jW4ZRMP9kHxYhamu2tBZKmfZfW7X63xhje4P8UQpWFv7Zj3HLCs8q",
  "key12": "4yCByEXvceFjvQgbmxjsWyuHT6E1Epm92yokNb6oirRjbZnA1jMSUY7r9EF7KxnUdLB7WR6qPehZy8xhQ9hRfZ1o",
  "key13": "4dQxhYs3DQVQNiTjYrcqUTnS2MiGkY3a9Tr7AHPSAe4NCWicU7QmJpZH6MyhQ2ckkfBHzgG45jPipCjk3JhkAtkT",
  "key14": "5McnSCNiuS1ZLrH4sSjsuwGcWUj2vcjjNSYxuXEVL9dqyW6JEiMqaDewoKcmZXmZc4xKyjT8oFCwSA5wDPyX6c3B",
  "key15": "33CcAuWQXpPDjGUd2kNz8o6etGKpCzThkfj1ahoB9Npes17AQrLa1iqM7wm7dZPFNXccGyJn8LT4WwHbAACvHQ7h",
  "key16": "4Vu513GM1kCyyRWZpEDmgZZBQM9fvh8pJSwGdsWqYRXZdaqRMzw8FpqGuzN72VUZh7ZBVo3Zdr83x6p91bVXKiKW",
  "key17": "2yHQPxYXptdrS9RxtCekiEpCxoF1qXgXxiteEd5GBd6kSfeTxiCeMssEojmAe78rkw8TdKvzn1qagXKk6j1pUwAW",
  "key18": "4y5oCPTLLuG1jdJ8Gfnh4vRAdBzWnEeEE8c8SEfVhdUVxpF5ZZGhUX4jHvHpyLQe25F4TYgQ8DtbPfbQB1mxjZ6k",
  "key19": "3MAU72qc44Y2qXomzbMJj1ERp63pxH91f14VgV76DWwfnGnFo56wQJ37pJmHiDd9jJzvmWNi6bGmsyXGVRxgnHwu",
  "key20": "2LqKHU1GaTistAnsmekZNzg9gPSsQyzmM6iGHDpqQQDLkkcpJ2dZKa71Merc1XgRp8uNaa2Rk4HB1qSsPLfMAi8V",
  "key21": "44KPgHAb7zWmK37aXy9kCv462mRHvPEiaEBuCLHvgkgHaC1pP1AjQzP3eJYA1egVt9UsCHc6MQ4hWrUwpi2ZoeUE",
  "key22": "5TJDZ4zgDi2p2UAd6ZTKdKAMrVJYG8hzZKJVFSDNKE7GCVBuiVBVFkmQcPVPW2dfpyAcAcokGnVuLkwkQpuesjp9",
  "key23": "3LN7pTQ81dgS4XkxSE16aHx68KwA8SdDDFvZwSfUXypgLDCswd3CK455bL6FZyiqSPGEGzhm1m6U2uSJubHZs6JB",
  "key24": "5PPmnYQiPWLNTpotA7gt5R6vaKs4HQvNPtDfCLZdoLnLsHXVNZopMuctQZ66xagwaZ4QxSM1MmsqUXTUTBMx33eK",
  "key25": "63NWNRCLtAWdz3qWknGtksP5xFg7AqSkihm9bL1RYxzFKKhnaqC1pg2ZRJAYyQRfwzxPfRZeRZRid4otTgVhCn8z",
  "key26": "WSU5Q8JhugybpB7WKxd28aVCbRGLzu7QKkZpL1mGsf9R6Rt7ZRLYKh2YWQwGNQYCeu5k298V3fGSYAfnTHjrgRz",
  "key27": "2Wt5V8ojd7wVAY2gDnYw6UELWfmieWgjbp9jwz9d82dyvJmpwV84wpt5ahRcqoBYg1PQgZ1iCMYX985ohm2ism7f",
  "key28": "31NeNjdaD5odqEpuMA7aTwunhtQ5tkJnARCj33oQpGRsbFz73acXSK1GPchJBfWKiQ3kYrXZJX9nj7Ko9fMsH6To",
  "key29": "2xmnv11epXHYmzCvPqjU6EcneeTzHpqeFfBTfiDXX6opruBfvVZbq3rfmnrRa9MVd5YuHJork5saa5pXXjxGvCW7",
  "key30": "3bLu2DcxLBYFFrUzmFVbzVednVXoB5zewCT3QjUzRNsFSWmoQ9VD69rA9fTRuaYXky9s2obbXfnM1TDYwuqLX6cv",
  "key31": "2Rp926QbpJXGQKp1qedVKmYMTA4yYTwJ7Lv8hNYC6AM2xs7mpZuBVPGLmuiPRSzUfANNjTxczo2msDUwws2JrmAM",
  "key32": "5i7ZxKoDvqsxvj6xjBZSag2S1hTSNDiFwNV56LZKpcg157x8Wqf3RmvCR1RPpNe88Qu6ao9AwwjKrswz6jH45rnW",
  "key33": "2Fhh8Ln4JauXkkiL2dPwV6D8LBGypwkT9DXRxNu3wt1UwFaemjcad9anG5XerRQAkPE1dKViAw6Q1eDa2mtcqzSz",
  "key34": "2xhQY4jofpwjgPxtA4mYSDTMLX9ufitfQLQz5N1nYR9jw9V3ddqZ82Rpsvrt8gpYULpDJbL5gwcKC2atxmB1sy1T",
  "key35": "5VKVmhTTw6m7QiiMsgxmN8RaBeSc2sN7zDrcbdCY195PGiTs8VmJ5n1yycVNdM8bd92EWYdZ6tJ5CHnGJnZKcvFq",
  "key36": "3fcgytd5E42h7bKJ8qekQDwUJjiawxLhzYaUKajtftZQKkoEVRw5qNcyUrSSchRQGmUZjk16n26Qv4mfknF5KZh7",
  "key37": "5XHGaAP8Jc5h9zEqZs3Lywwm6NbqQjaWuxcEXtR1eC5wUdapqPApRqsjUEbwiv83HTxz2AKxZpVrUHxTXW9DqVJS",
  "key38": "A9rcxgax5y5J24mVeDHre8wqfscYo2cJzc83qeeCX3XpC51csgjE17viRXwGmdsLGPR8PhaNSUwFyUXmkmw3syx",
  "key39": "3XPpWyWab4DQk4NgDytRJcrPihaQspa47PTrgCGyrxmHGtCAALFpDdtbCVNwSZjuB1d52djzbzEPw5JhjxJ8nunA",
  "key40": "61hQ7smDsZ4GKbbKuEAhYjeYwK9FkjewLwNQXR55pJsrfQGWXVSsoGCg47iQa4d7XGsw3mFfbk3QpHUBmr42SLnU",
  "key41": "2DCAfoamMB7LFGsoe9krYzgf4Q3LuN39jDtb4GS5GnChV6VG3EuziGWZx47oVCD5NhTStP4mkt1mpoSFJikK9v5y",
  "key42": "67SWRuHdFm2whMST5FGaja7UtMoHA18H29F4j6TVrJseo49UBhdby3gYtLLvrTET9hkQCBnYcaprToRqcxTjKaFF",
  "key43": "VbMR7sfTu3bviLKeRQp9BZzKiruaEsYuZuZwx2x3ZtxQ7PqUW1bk1rQxCHkqTi1ghNTA7mc9T8Sgcx2XXJv59gJ",
  "key44": "2DJLPRNGXy5PFMEkKmFFSQmDzE7eRHc18MWyeQSK1f4BMSk9mCbR3LR1LJzUDZnK1usrzPFxBSsxQq6sEJwEsQbR",
  "key45": "PJiFKGGgCEFzAYbTLidQ8j9sjzsKBhFHr7jNrdrcFHbohBYtT6qWvgGdPvDfhZEjVPfS1NvqV4Tep6ogAw87C7Z"
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
