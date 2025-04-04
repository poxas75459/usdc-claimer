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
    "3ih5DWW3ytEhoeDaEmUAyo4zPwEo62Q7NKTa2UcEdrJyoowYVz2LLUj683fimYaL1nH3VwAuqxTcWXB73Wc1fhWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BSQrbB91Z5cRzzGUTe6okvRjiD4y3WG3e92MWUFo2Cr1RB8n2toaBpFj4sQoqyEnVpxqSEM2Krwf4a2DzYFB1cZ",
  "key1": "62BF6hgkYCNUGJD9GzoC1mfAqTrWkDn3qrXTZikrPtjr5JUjLW8S5XAtizYaWT6aWDaqjftLzZeWZ64N9v1eZBKy",
  "key2": "SYsLaPP5geiFMpXH4PfiZWDqx73ABoMRFd4swVQfzopXZXyckRqFGr13mQv5DuTceQeYQU9fMH2xxzmHtGcZ8V9",
  "key3": "29czCk1KXfSmSJBmc1dMhaoBez5U47ub6qBkPYQeyfeJZBiifkuoopyQwPcCudo6o5fD11rQQgYdusuCzhpn52po",
  "key4": "pYGYVDqcScftsaxD7VUgPNkMY9LAuJiogyJo118oon52UzX6vnbQxwYvqgd3Lq2ZLsULko5hrK54nzQ2U8UjXst",
  "key5": "2gtH4GKVsGaAhx9WTv2mXtHKoDtWCoDrhbUVedLWxZF3u2XDV35Ld1m29D7cpGVYF1uejhyudGeHwUXA8E7s5FDM",
  "key6": "2d8idt6vHx5yEoj6b1HuL3eiA6NEjhZymKvRjM7VyKCz4Z2VR8efzAaTNFthuNkYcxVu9pHWURni2E4ZsD5pR2EJ",
  "key7": "22c9MQYzt96fy2nmfK3J26MEnWQ3LNBpzbArjy9qgJTSsSFG8UEg9u3bRouvGLgfxm4P84wKbMrr8q9n7M2CQLRu",
  "key8": "4w8W9H7ATmvAuYLKAH7xgsqBCDKtHFAtqipe1Yc7aPrJiQoUE8eDyZvcqsegAuKCtEEfjyWiJM93h5FvdPHVf2CS",
  "key9": "EVwj71DstrF1YBzD99rWEXocxmPGQZwqvNx73WCqGfzSdSHmMvc2g2JNwrnLV2qnyZxABuogsSmro81XzLDwcZa",
  "key10": "617F9st8HdXjZ63uEoCLgDXfUdaLErRNyqU8UXXa5ndU3fya8DoAVkzL6ycWCsuDbYqjBmvgPsnQhKqaVGCmjE1N",
  "key11": "2TR9YpvKexvRFkuzKfYHDvYWvHZVUZapFQAh38ZwDtBYjqfTzcJELCDFbszg4B7f2TfAEHTR91rLrpLGZicxvKCf",
  "key12": "3gGSP1fwFf3U8GiFWk7xrLuAxsjmkUjCtTzAoy2aU7TKrECpiKff9tMgDpXz59p7aby2bG8wWSMmyQDZtjLy6aBp",
  "key13": "4HxeNPZVWEtfje1Ad8qRGiE8L91NpGSXTZQLfMb9h8z5whnvrgGzWJmptJdvJDqgjqY9CurAg9L9TPsAjqbJm6PA",
  "key14": "4y5Z1LavXExKBtZbgn24QtcKgT8j3WqdfyfggR6pwGXTw99TLpkH2EPNhHio28BoQwUDX3BjEGh9S4JCcVhrZKxQ",
  "key15": "zgJ1KWRwVxMtfYaJyApRJWP17M4bbHGpyXAXiT1Zu7ZCvyGZYgKsvM1NjXjmybrR3ca6EVDLLWJ8JCsiBWcR1VM",
  "key16": "3auUVcYLnTSv8r9HKx1xUKqvmDqrrCPPDPWk4tobisdcw6z9WfUj86WZdS7GK6TEkJMGUT3Ps9Yj5qa9yTARGgSB",
  "key17": "5eYFR4tom8DZZ85oM6Huu4rdF1L6rejGUPYUismasTkmk7p7oJRqRMyAkNAcqpdq3iBzHGDkXmR231gG6q1q6Tq1",
  "key18": "5WCpeK5zs3dc853iyRvZqpDQXdB7Eqv7JXaBk2sCs9rM6KRjuE9C4GPDfMGnQyhA5majACrmkZrvAbrQMsUyUWqg",
  "key19": "1925xh94mK1VwzBiAb5BUqbPr2rhYFkxmcmz35NivJBByFGuzwJoA3m3SDGHiWvJdxJWZ3VY2ugkrM63VYkffbT",
  "key20": "4xTQfeDjKDQrVDgzRwn5nukQZtoN5zeTrhfSFF1rYQkBybUbEvszBRRUoe88kHD8BrBEsTQVm6wqQdfeFZKFZ5pZ",
  "key21": "42SP9cy1BcNGA1B9Em5wPyaK5dufCyXL8nr9uyBzpvv7j6znB1WBrzKauirK7d9QQbGBY6E9U8bDWZkbQrEjJNkp",
  "key22": "LHn3ViUstVThsXDGBh5ZtHRrhTWe9u2oRLbRHL92wGWVo2ifVSfXfBY7SsxWg51pEbchohkTqi4xHNdNDCCHWGH",
  "key23": "547SpDYRHzSnrEJcgfV4h7JJmbGH4rFnf56AnMA6sCJ1MJoJa5BvTDe2BZwv7sMY1Dq4EMB5q7VHiERSbYyWJZph",
  "key24": "2acdp4hd1iVPtKLyaG7CgEELru7UnCuwK2DW8BMxBiv8YZqZBzXPK12RnHAGKeYAgqW4qWaczLub2shTcP2gNffx",
  "key25": "9NqhrCG957ppymDvQJqkBeqReRfPadFPhBupLmeJtmEHkTepvDiCcD8CUJRsBjTGicjJCjKwobFcXRt5rQZJJ3C",
  "key26": "5otFuMkMmRVXQrSFF1ae3fsgMJXfHUXzQMspnxouuN9oRDCU1bEmt9rQNHr3ASASjz3kJTcJRaKirJ5L5ta1e2dc",
  "key27": "2imro1DvHiFCegYJbQwMakBikJhHUSyjGZRoRR5PnZUJcMPFioYMdZq1n7njJcLxb4RTBk4E9YY7fJoV6kH7QQS2",
  "key28": "4mQ5jXckY9kJQ1pogu3MXUAr5bUTEdKMf3JzUtDLWSuXbmBxnkw1zgciVyp8KDbQiQcfZj4XhaN4BcAQx34FxBXN",
  "key29": "2ynTtrt7tjx4cS3XxYddivDGEr4YwyVGzwkUjPPUSkwem1dvhvGsTtST2qcgKCwD1b4BG4RRDqXYXuU9ndBx4fVj",
  "key30": "w3fkgBSvUgt6CYz6TvicjBNUhFMhhD7fjup8z2xRCVLwCZ6axw3RjqmYyLbGrxcq8mjw8XzUfcGDhr74gs22rjy",
  "key31": "7ZVD3T5HadRNSRmo44dyr8gDSMbYgGZ483rfofFfhkd7BU26qXkfNc28rVJnizsG8UxokwCGc4ejLiNxL61vHSX",
  "key32": "67jt9VQ7qYxLuQBNyrVXyXXp54KFjAcpymgJ1w8FF6Xz8LMJUaZ6yqdKkvbgohTqwvUjqzZLnvdLBWwyx5DtAuSN",
  "key33": "3v6wDm8FxXtZkBhBLT1L1Fg2rq6tpR7DH4UxeGo42dmv3ePqhhFUfHyDQ29As9XPsSZt9ZYurR7MG85HPB5n9XiT",
  "key34": "4nvhAkeqoVjmqRR9G1XjkzDSkP5P6bJPE7ECya9FuKE45pdJrRbErsWVrrxKWPQzCWHoTd89XHsm9mbmZsegJAwT",
  "key35": "6218Vy4SrRFicR6LVEYGS5q91RcwLiUbbSYoUfHHJbK8X9n28NSM8h1HNu8HoDMAMrmPGd49WqKPYeL6pEMs8S66",
  "key36": "2got4xmZfRcbiZSV7LbXeAoZd6LkHiZrxSnZqg4HKSqTsJTcPVQzWVRApsTZkcjks3zmRinov3A3ryELzm9JieMf",
  "key37": "3pwvE9WdgwyZUKrSPUkqH4REbPPH1Kg6WwyjEK1Fd1ajjGmxFWHoM6Xpi2czHoFJprJk1Bf4yqxssM2z2rMthSpQ",
  "key38": "4rgdZCBip51tf4edzx49yqNEWUB8xst4oQWANNVpvKEjJjH1EAZsnBNJXnv8AoKM3Gytu1V5siZazBsDb5enT9gb",
  "key39": "5yU6JYG4k682FGSc5TJB2Fro5EY2DhHh1TPAbepeEovNeskraetQRe1xsAsHL2YnvADb23MMvodY4L4db6MAEVQS",
  "key40": "5hY3Nv7K6w5sjksxgwx2Bicb4iJB9t8m9ct2bT6WBtePmdBezxbywJNgUz86Nd3SBq5pUJdvD3dweDaDVHU3hsQw",
  "key41": "u9Zngn73ns57BcXo7GSqdp8opsbcE7dfYyNhFT3N4fX1UHE1DDURzp9XZXARepdHQ3atdbQhNfFb4UXfBWjeex2"
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
