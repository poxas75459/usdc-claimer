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
    "2SdZVTReTdHfUUrdQ1C34e8JstGJWXZofbkoUSDpdEADxr4Y1KYwMizL87KUkkRah9WV1CfUKqU8DV3qBtdQ2Jfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4siKN4L1oTA1h28tWvVP4hcF2NadMg5ZvDzUC9yefNDWHpi2MaS3Fqy24N5z6adoTvaTtUbgBrSzwfjePZAEJAp1",
  "key1": "47ZaoEXt36yCDccrVzkg2ABbWDAemBADpv47LdHNXabnXBm7Rzds9b1N9PURi3YoTWqSJnArQEKuEZ8mcyKmjSkc",
  "key2": "62MeVBhJtJQTretiH3C4TzR2u2AsbJ42cgij1YWVnvZiemkA5Mj3xXKDBPyXxRKn1p7J2hUoEzbWSRBd9bCFjt7m",
  "key3": "36g8CEVNVHFQUSjfmhaBVYvcgjTxEE5nX2FGnJ3X8RK3tGm23uNindFxYjXzED1fwS2YsAg8QGT7nPE4xV8AVsEm",
  "key4": "5mfwJzt65ibERLs2TiZyX4a6prbg76qJ6PNG1iV9j7bTsWizYoRxLnEo4eU2r9afofoU7EGzmdzWEMKFfD1ComDv",
  "key5": "4cESuR462VAfwDWYL4skBMRiaSDxKTsHknFqxfkEQVUYEffqKW5SqFvxPzzGi8M4Am1uohnNVHBTHYBzp6gVRJmU",
  "key6": "3xec9KoMxHr5nUbS6ri99cgCxJiewyzKZvhg8zv4vuN4Re7prEseZfpASwwjZ5HCTuEbppTTmeCtecPQcJY4hJSc",
  "key7": "jHRE32sx55ML9KSZUDEeXrW34cFodGMtbSKbL85TzKuaqPRuTYM9yyrhnnazQHoZYQ9tEKy6m9KfujoKvWgEh7u",
  "key8": "4aKuiRZ8w8yGBL6o3LTe5rFvSYVMsbZgLf3ogBticg4n9DMmmgQHqEModRwjg3JANTWmCvkkMrm5knd8TrknFD2p",
  "key9": "3iT19XhkRM8jzXmLrz6if9Vx9aDgf53Ay61QnXMPuspfxEL18hEusp8AkEAXT1qhtrRiRCyy5f8DFUECKVu4Qntq",
  "key10": "5XCB2TxhTDhfEiAdLeEXg9A28BQaJwSXuHUb7nG76hJ1kFAZY9wuF29KkGr46YKrPngsPgQCdKBHH5jVd6HZMJ44",
  "key11": "4xnN3HZC9WCXTgP5LCAfGp6a3vPipqBP97SJyNZRUCkrs7zzPo16C4VaSjhhrJnvSUsTNvWC8XsuXoqZRfFzifCf",
  "key12": "5y6SUgBgzm1bTHj8LshBz1bBLZ3fYsdcQhpbV7Z4hA7wwSDgXcEEEqephj7L3S2a8ojNj7eejDve96H6sFmNxxWB",
  "key13": "KfG4TeZcuhWuu9uPyFxdxxiuMnkHzB7AhLu9J5hZGR7ztK8wkGm65aVMigx6iMUL7J2FL58FLL6oyx4v3iSZUAU",
  "key14": "tzJ6fxZKM7k7cFCRoEqFxCJBHpm8pLzk65vNsj1Dj257T1QBQezpakskA9TYHfN1FF7GXkf493Ae53iqJq51tvf",
  "key15": "2d1QGfbjvsCaZNyzLT4reAxEZdYMdze2BEmxXLPEgeUgC8WH1amN4Ht7ydbMVPrQk5aVDuMskVu4UJnZoRFmrRQF",
  "key16": "5KfeEycujeBKeRNvrHSNLV1JQ4xn39tgR1XV59qenyPJdSsm7vcqVcowwiijPC8GSHuNqroTb85GtC1v2D7277QX",
  "key17": "534rNUAiqkn8HyvtRA16vvc5tBU2hiaBYPDsNTMeqwALnULSAT5qvgUHJZNaiSXsT3DE7k9Dm5G2osuAoxKn5g58",
  "key18": "AtaBgqn2ieJhNDFUCevgc7rj8MahiaAQ333KKQ1BMkEJvHUKw7cfgJv4o4r4oypQazePGYn6eowWto4C4RwSkzN",
  "key19": "2GczEYuyitvBtfqWtFYH3LrEhNiWcuUAFec5sifF95VJvitQpmLHsosFAKRuQevvSCE9saGETB1h9i5BiFZZQAt1",
  "key20": "3J2XJPMviAeaArET9fG7heBiBrJrVzqi56pQNU6dPAE5vtSAXfqwsQTzA7Fu5n2ek71D6goemD3omThCapc6fDUf",
  "key21": "61kreVyp9hp9W31p8TUYtfQn2fVMpigfYz9nsaWGpKwtNk2wkZzeNdELEk62V6i8EZsumumupShnD7oWTRUS7gxZ",
  "key22": "25z4omApVCa7VYL7UakMb5iv72PZ37h9pPfRFapadBuUVqqjojvY4kceHsrKh3GmQka8NkKoeTniHQ8CBtTNuZA9",
  "key23": "37y5oW2y976nu2FyJPM2mHtr7SA35v8jfxww1YYr3mWbernz1UoucNng1r25Q5DGbdrMAKPc7MtY2AybSCkU9sCT",
  "key24": "Ksp3r7yFQcgDxykWYNkMduVCfTcRFQtKsLYmeDpZ8m2htKdBf8Pm8GoXarFKdPGaQG7ECanzTEjy2MchJGNRbXm",
  "key25": "42rU8ZvUCwe4JU3CafRpdMZF19FFrJxJRe1RoZtHrfXjFNGp3DSTCzbLQaJuWC5hxBUEhQFXt2wKvyxkeuB45h8W",
  "key26": "okxFENjbybyg8iQFF9c5qmzgb6sfZpkNjczweLAxaVwGpnd9eLmpw4pHEZFk3U3w9CieC4bFNS2QLymr68p1yuf",
  "key27": "3iNbzwYVPspWTakkzLhmQ9pZKyoga3HHrDCC5SBNazCb8TYZjS6cQS1Cz9115YS8HpyeWwes8oAwMhVBWjCT5tjs",
  "key28": "38bnSr7hEHa2e2gM87JG3CQLsTusAyJ9yd7eRFP6VrFrsjxE7r3dRBtCqReeyTRNkKEheT74VDTeifiHtm6Yvzbk",
  "key29": "EWQf8xxUhqkdXxtPDF9gAtQ3Q35JpdFiqdpZ4jSKg8AnbRMPT8tfuRyNXkd1fbZ5gt9BkSWj1z77oa78qZSqxRv",
  "key30": "36ruAdecrdS6vfw9RSMgmHNYHqphc6mDUgqKr2VJwXGm6ESyYK6QneAfb5UXpjvV1WtD9hKAUEjCvq5EubnSgnuN",
  "key31": "5yjHrdzgfHWSViKHZt2uVHdW6kTqpURpTjHMiLkkApAoo9RP68X71HBBA2AJvZLHC9dYUD2d9PYgrDXUrwgyCyZ4",
  "key32": "3hpzRnw7xRitcGJw6NvDDhMdzozzhYjSVYpAPJhjK7RzM6c2Gdd2h7au1UxDvTFUVWTioDepMAiMs4buR7s4ZJv",
  "key33": "4Dps7DixKTQQbL8hHbcwYT4m9hCRrew5477uyxAUX6eTqUFqj37n9uKCa1WBDYXU9zLmUQb3Dp8MmkE5a2Yb9Sif",
  "key34": "2MveHovNhBv9sJWj89tKEmQHLy3MMi7bKzxc7thzUZNPjuX7XQ2rXpz8D518zmyHAjx4m3pTmVmhwzaAWwVjqYzP",
  "key35": "gcRSgqZcecUzrqQ7wByqNU3jWsfaq2EKkKK3xPSd759whtUDuaTUxi6AUyjHzPq5piDv1N3bKq5sSbW3ANLzYbm",
  "key36": "4XJ47eiVHSJpodEjJ937dxKgUrjXQoQeHPneLnYm3hisexEW6janJVWUMsB3wCeJigwKMyXYPAL4q5R4SNEYTCNe",
  "key37": "b4Dx2H3mfvgXmqtcpzunbgmT5pqiVRNHiRhDj6kVGEKrjmo7QmJfcL6fSy9UiNGeeya68XQiqoYyRho1EUUJxx7",
  "key38": "26UJuN3TE55i3eGbAgUu1qLuctAWgK3hPBStf8tpPTjsKaLz4xRP1jGj1WK5bBFiLAKd3mPYHu9mz2YLEBpFkQWd",
  "key39": "3bNtFdjXaCzD7dn7aY9Jbbhqv1W8AJ8cLr4LiKM2DbcNB47wN4Nitj7J6AtKkkp3JEzukZpf9CvCVA6fJsR1WLSt",
  "key40": "LXYXLiVs6Sv3a3CgsBeoBpRRVpFR8DNVJahx2Jrco5c2mp29JazoCpmdph58f8d7iC14Ef5L1hMwXKyAwffFUDZ",
  "key41": "3Wtq3mE6uETCsyJz7VL8oHJkh9AtMTj1SqXEpPi2goV2Qarhpa6zuTp7boyeszdcGdtKwqcCdM8n8xHfesajDGLd",
  "key42": "n9sfDigRjEEa4mt4MrudAdh2znVEsmGagkRe3BXpY42m4h7QyCfSRRNfcwcATJ4KTRCmNt6mF3DvpWW65qEUBN3",
  "key43": "5i5AXN13gd97gGeB5ZmcPCbXuAF4A5qqfUQ1wzJ1cNvE4XXtMcFpGDdychzJuXtDdLZwaHsGqUwNLe4HVtCAizwk",
  "key44": "45K6YcrV1gErS6XJq83zk4RHVwFK3qSCPRxXYT24eQJBnbAFhicrT4nhxm7rPZtGzsZeUaSyayBw6X8BEatX496y"
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
