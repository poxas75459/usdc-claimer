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
    "2QNE7unEPrnXqwEX1i5xqMXRBDFN6W8oxHLFuGnn61z8rzQAwzjqPFFknGmFtu2qipLqz8JVKnJRZ7iPWd2f6k8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Knckbh3aCxKBXnqBNcxes4UBh4SZmBpw4DE84ZxMvica3goY9LTLGbsaYaPM1Utpgp278m7F4ZNwPat7MLMjqMm",
  "key1": "qzwFzACk1Pynwezf2AF3QTmkyeGZwBPZ4ohHYQWvcgbSanULLztg4cAGgvRVDgvkK7V3rn7YC4nxBjB8MAAz2Q4",
  "key2": "fFhoHC2nNKN71Nq7XDJzRX7st5C4qe2eRKkgowt8m9x9JbTwgTCRQv1AHwFmTDpjwMyQhWrH8gTexkgmUESuuDy",
  "key3": "4T71zY9DsVyNiQZF46wT7k6GeBFUBgbk6N1ptzQbntNycB3HteFJRDmvZ1RFihZjZJug4gazzZVxU6FsLUuip1Pt",
  "key4": "3MdCQ9ZKxXaxugpzSxxrP7fwmtJeUrD8K3nxJD3DwdCvQGfaqNf2E2QGAyhjuwkha9AFnV6ksH23YedbxDrD9Ck2",
  "key5": "3uut5y2KE2ck4RKzPDaQ7Jg59yM3iSde55eCqYkR9mK3cxvJpWxbGVsWPd9hnM3z3SG6H5DvUHPA1Qsf7hdh7KMQ",
  "key6": "4k2vhT88R3xCngiWDLWn1kEvYTv2T6gf6N1PpcryasJ3ueyuuxZLo4DhZQVdMzAHwuDsSq1VCgiDoY5YMBD6Rkru",
  "key7": "4nYDx7wVjRYyKGqJYQUNc1pg1vStJmuTRQgvM95GtSHii48QjFGfCRYfXfuU6tJFQrjfrweY3Fryf5B9JSUDxsB8",
  "key8": "3V51fNvkXLTvQqzhizEcwsUWLTfesM4kKMSfjy2gRbuVrpE7o5txuoRzGHw4m9DLToTtyB5HW7BTGVSjVaP3urox",
  "key9": "2hvdyBaNRjp3KdVjXXi5Z8fUFGMhZrrfvYqTszpfZc4hh9DG16vse3hxZuBo2nQAWkq44AtWbQNEvZAzkTVL2xVG",
  "key10": "2uVwDcLaTxBkyMxrDBtYe847Kx6upBTXikJ4sHNXCEnpdRospgif1B9dzEb8GpUUqrfjuXDvcXoDJcefNyFtf9NR",
  "key11": "5vwkR3vdBrSS1ihBK4sQZn9sZw2kAHtUdkGS42GThYSX9dvAS2qwmtcffn2d5NBBpYdaQ8k8aXRh2WneA8mw33Mo",
  "key12": "2eKvZA7XjW8Y7V1aCvw1miiVAQUzKGsjWNfgo58V2ZecT6QthyG768JdqKm3pMd1jBMuZUC8qp85XPZU2AcFSBpU",
  "key13": "Vbt3PCYhUZTGtEq5T7Pb9DH7mWpmHJRgECQPG3S4Pp27yUV3qWTJdURiVNUuXP1dwL7UCnS3HA8LFNED3FB4ZMG",
  "key14": "edyJy425SsfmUtk4cWDBzbNBDjD1hmgYiEoYhRJydfLy2WJfkd9qwKikF2pdhoT3RNSr1BRUWDfta5MPpMobgWj",
  "key15": "5RipMX4z6USBVNPa5Gbik6cgWvhZGL6KfQWb2tNxQUYSQGSwFaVvPJs2f3z8DeJW665zXhFW8PtKWhif5C3m6iGH",
  "key16": "3vmGCaP79e82AzKasNq9gTnS1w3nGfZfzDWffxGtY7XptY8HroYzbY3jwg38VsttGFbwRxtxrZBREgfBeuvmmaVf",
  "key17": "3RuThkLTAYfzijszxVwcnf1HsVVX9fbfCfCvuUgst15RFDg56dVR4x1u6Rs2PNFiKMEGR54pyRAucW9n4qCBSCXm",
  "key18": "5BaZxZUvbEFjqPFFjmqCiGgwxte3ULd2MjN8d2ertvZ7GLCkDymPjFGEZvnjiEuSRPQUx4rNNxs4atzcvmtCKNmr",
  "key19": "A2DkhFE7CcksJ9e4g7nrzzu4sUJd59vpmp8q1D8cwFR4tBd7iqFcCpqjBviwGgLnMbm7mrGusE8UsbbCy5HzUW2",
  "key20": "2pdRBdRJvivLzk93YLJLbPe8Lyhq5igXUHoV1rwxKg4FEUVKLj4N5p1Dwk5ij96rsuFGZ9WPWdZ96qqfdj7t8Nzo",
  "key21": "2dnbHiPqq56DQQoja7tYGATgir9nQDNgNV6nkL4SuutrRmYHW7okjVxj1Zsvo3kvcR9Jq9WJQYc9X7zezwH7YaAv",
  "key22": "5oQsLuBPNxZ1e3ekjSkPDQFpBwVQWRNDp2V1Rdfm2sz21z4ZVkX3LFoepmRn8GhniPXnrdCMBhKZ9fb8bRaDwQfn",
  "key23": "JRUKzanHUct7hCvwLKAsXCq91LRDTg7NnpiZVB2hBS8XT6CsaN4ERDvSSrUZxZJZwSoRC2kmuzhpuAkLUUMSukW",
  "key24": "225VaRdBJtiFsqyTHo1ZEUocnRGX2hVYox8RNZyW8UxADWbujUQ5bAAxHzFa8x7DHp3EMDfXnoz4evKtrtJQ1vpW",
  "key25": "5y5JgQWdRADdHktg31xLYyAo966nKgE1Boty5pVSxLj9gGr1qutESqVqGxazWfE1KU8UE2vrg224HWu3YScKhMuL",
  "key26": "4QBfBdDsAmmUDDk4sbGqVbrX9jmEEwegkfdqhJ9XWrwRPSa9Y7bnyeMmvszoDjtH8LNMFre3oX7ebUspP71yyTPj",
  "key27": "33fYrEqjVXM417quZnfTGuYnszSsigzBi5KTDQdYVFc8g3hCTNfYDyeFueoqtjqbxxSwCmQCTFT1f8WPVs4QQrJ2",
  "key28": "GxCR9txbYuGMzaP4xBbWeP3odLBUCiL4JyEGtcRA78YeFzjrDsPbW5rDjaQfFnFM7pvfZPY9apxtBKyo3WFCTo2",
  "key29": "2v22kvJPMPMBkdVSLmVGcKz5phfwgG3eE1UzKj3sTmnPmzpRaVKbGQRHuEMLjk2ivopBkcdDH3Yp2s3SRGhm2D1A",
  "key30": "3hjEgszQ49CtopXsMdrpF8TGkeC44sWKHz7U88sNTWQ8cr6YTQW84N5UJrsApoMFMUVp6TNpVjUBHKo7ARzky1KQ",
  "key31": "T9VY4f5ywsNdd1YQVBcbzBrDZQaGbKHpfC4Daj81NYZ7r8nQ3WeWjDvmcDk99SCnw51L2izHu69ZtwiPgSQ7zve",
  "key32": "4JLVrjLTSz5F9gCP5AREApaWfpdBJif578mT7uhuBWuHCKLiw9sv3W32h3CqSBFFaERuf1xJRQUDgWyJ3Mkgp68z",
  "key33": "oxwjTsUaZcYCNVV91KvkhPXAHkbKVrc1BDR7Xt83KScrJRr3yWGnZ29AuYh7Rb8QNCAh1PZPK2Zp3EC7ctc3S7a",
  "key34": "3kK4xBTQm9jt66yDSE6FW6cxpL7Ge2Vc7We5fkepvQhJf6rWQJPZXU3W3WQdAvEZ3g3cC9zeLxr4GsiyZEdTR4RS",
  "key35": "2He4cxt4f78agveXY1XX29sqbFaYApBaV94BLuTRczschREHaYGRFkFNdFbLtEZouYK76ha9kMgm2DhohEty7WVW",
  "key36": "3v3A5Bi99ry9exWQZmSgLzsFisUUdgHrfrD7FN7fkTEmkRrkLVWy7nt3r9pMihnFEwLRY4By751ioidsqYz4u3Vm",
  "key37": "3TPaJeGhqDTTtGHMCGHaV23wubHgPEsBfeJAyU1Y5F7DzxU63Xy5vB1TPEGGuydUDK3bbGBeNja8hMQhBQfYBW8P",
  "key38": "3cKVjofbe7eYUTJGLD9nPbBNnqc71fgUx11gBzZpP9tMdogmHPqvXrP5rcwjaekydsrh6PcNUQnhGZAjS83ktx6M",
  "key39": "3JasCpxkMjMt7beFtmu8fpFWog41EWUhpvRu6UUVUMNSJpE7HNGAFsicqUe7k6HLJN9FmmMC6Jo273QzjLUB5S6U",
  "key40": "5ehFTRXvP5M8ATNqB4331Uzd52nWCiEow33DmYuD15x4wh157N9s6tXqSu6jVtn3TPnX4xxMgDN2ndMGzmnmqdmo",
  "key41": "3pcB2eL1kBoeGh1cQtVEmY9wijXgX7Bt9Xm1qRGqG1eqRaqcZ95GDcLhwcQ6YY4iXTLGnHquFutXfydv1W687Ef7",
  "key42": "34yPdfgPCqRu6A3rchWN3Au8BmtqDVDmDoqJgmxNshrzp4AtMQRdeWRZLy4sYZyVghf5nU3pPm8rSoq41hGt91st",
  "key43": "2LhwdG9iEqb4sBsJPWMKVxvLdCaexVtv3Hbk9CQ8KTXWXrzZWT3hcSarthE1pKSftcMDuKmMhU9teRjqVpJJtLq4",
  "key44": "2vug5WNciGCgQVQCrDfF6KsXWwAd9tWRGT78y6xMr6NxNCPLpsPseiPCg5aqu6ycB3jVCEBBBBfSg4zLbvQ6Hjic",
  "key45": "2obQaPCgXsDSSXUYxtRvLpXQiNqi5ocae7fs9yHUvDjQ4fdec1vNj8DXLaBbvvAKAXhN4cyWJUq8hXGGnqKQupVc",
  "key46": "3ZQ2bSXxVTSCtMNrx3HgKsRNuPGiQCFnvzygc6CdDeHP2s2Vxou2pNAfhpiM8LZZLgRwM67pCQszFngnqtpbTuSu"
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
