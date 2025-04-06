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
    "3bEiB2tjG4Hx8rpMf3MQMwSYBjrMktKmZrhCsQA5HsmHzSKdCuSRSnZzCVznE83qxpjxBXnPj6o7o23SLTR3Q6ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CAKA7Z6EmkjRY8455tMMg2Wm2gCPSD5sMtdywocgriLaNReRKMTnZFWvR9A1Uow8t8v7J6bSgjAdPtw5gSVHzWY",
  "key1": "57LDdXEFTSa2dc8NkCcK18y3ceqZFY2rbFRsd9kxRcUbT1S3VHpviiqpPPUFqhMdA4G1QcHTgwwWTrFYFK4UipuP",
  "key2": "4DjUTsSwCWXzgyKGq7FEBGLPZNaGibPn4JUXE5BHzPnzaNTBrJa65tyknKDntMRDWEzPLTUSnR6n38AzLvPgY6tT",
  "key3": "3rTqoZWdKWFnGcsRwXvLUwFXZCTm8vr3ba47vb15B77PZtCkqyxBM4UWH95xARdGc5Xh3Lv89uFnaqb8ZnNETbaF",
  "key4": "4KBvsLXsctGnFLq7dKSzpxKYDuz9M5yxrFxxMSt3zSM1uQamqj2LQ1Ez2wYkUTJBfpY1AAB1ZnTWwYKKwApTaBG8",
  "key5": "3Tej1Y5gkMW4BoTyxNFNXNo3YSv1N74nDPaySxvX9KnAnkvWMqajG86g3HpN8Y1J14gntUCooNGDWdxqdwgnWn65",
  "key6": "5u3uHZS6xcCSSDQaiGB8weimo8v3kP1S4w7CKP6kyjVbmLg5AF3KbzG9N9mJobdG8pJ7pS6BhqwChfEGnAt3qvSz",
  "key7": "2dQFByTVjAxbQavww4pdp7UFvmHdKEoYHUtBYCpodtXp9Cy6ePym4wnM19pGxnBSPdKqv8WS14B8xCDpdB9uiehz",
  "key8": "4CYsKHEXwguZHoy39rMJAz4Ac6DgAxcyDBtrBNAjoYttK84zDRtPYAXWdpR17uHC9SZhe2Rcqmv5fmc6Jrab3dnc",
  "key9": "5h95BMGVW5JMpFKz6rP6HyjnRyiAKRnJAvu47b6eURFM5bfPbJZ9YBhQtq9HSKv1ZeGxNe91SPhP5dsrE8UmU7pW",
  "key10": "4b5PfbQ6Yx4aCddg4NqbhUe3hiPHrBiUBT44pow9iq5CVBZz5U9n4YKWTzAyBKoLE8Pi45RVHUaC91ws1DQ4tuSM",
  "key11": "2addHrRaGeee6WNza9XK5msXk9pUD6gUzDHGkm9TPpRSmi9g7gNkGqwBsu1LzMXWaxBRHJGcMoiTZMzERmFh8mS7",
  "key12": "N2FEpXMuJQkMzC5AdLyXiDPKJrp78BjN9Jshpygbx2nr9EUs3H9NDmtE4GkfX5ed2bfFkxVVMQxMKuyomm1WSJS",
  "key13": "3Nak55nJHUpaBhp9MDpZp8XBKexeE6p5A2mTurQfZCN4REbN1mh7GxiLscnCEwTvoUra7HH6WTsBJKDT6TWCMRmB",
  "key14": "5JcX3N5WtKH8HBW63qe37YXSXbyUCwcPQkc7mJ1ShQQSwza4mQdCE2FMjKcCRoV3mnpceVyDNURgzvUDksogjZ1e",
  "key15": "3B2zXdB9GonGqkvjyxSKH7DhPHTdEgCoGqTVhN3N4B8cb65PXKK66GgU1Tu9MKXt6z9EV9f76SbEHUwrQkAtHeeS",
  "key16": "3ytfxNstXg7fHZc4bdVxw9L4ygewidwYDGZHFSVo874g1vMZ6fWcvVbiD36YsrTe8qSgE7aogjvEzXEodWJEn92Y",
  "key17": "2oMeomTEbAu98ef2zVz33U48kUpis4wCZpxySBi4EsqW7qv9DnkuLt8ET2NJcMhFtZo3nxqRaiCsYcanqNkj5Ywn",
  "key18": "QtQct73gKAiUiLXoLWDALUrybVbkp2cM1fYBJGPwBVA2vHMJkMtxG92qT9ffaVTDbGfHMGNWYvx48yESZv7YkD5",
  "key19": "2rZFRSeGQkRmdzH9VnjTssLpssAhQ3fEU2jGiXfphVEb3HwJK41cXuwpRezGGAsH9t2VdxQ3BuWaCQz1r5mCywX7",
  "key20": "3uMn8dWPkTW5ZUtS1NM6NzhvZEQypJb2M7eKoTPEYPVoUUDRutymnLThzY3U6RfQxTPRnB8SzQdacpfxM9qKEb8M",
  "key21": "4GKWHJdYXqEafSDBJGgURrb4tT7yqdPRjWoN9Yg9v5T1nvz3FUJzXYsFZxtDSHchpTB8uBv6j9HbjA7cGUHMcrAZ",
  "key22": "5pz651GuCvzPVTRtSeTzsYj6MoLi9Li2uSdSkpnK4C4AZLm6gstMhK6hVuAun9unM9koVvwUjRbL1xc78YGcxiVx",
  "key23": "3Nt5kvCnkYkQgdc6NCJsC1i1rnHqGbegkwvm1Umc7akyhnY9H6s7MDx1L8NkfgPS8Z6ifZ5fLZ9TXN372ZKn1qpy",
  "key24": "4HdoxYGvsuxV3Pmkc1htw3ybVZHpjTuqUzcBgTp95R97K9FuWHrgenyH1qxpWT8mFA1WLJ7orkvuQ4dZHqw5a1ch",
  "key25": "5Dwc54NkVNghQiRgkWWc4LhVDNnENuu5eHxiM24hTrXkSKdY1SoX9ALkHp2e7RFGevY2wJmLb7NhZjrbLoT4oocG",
  "key26": "4ESMYZAmg9CRi26jHvVWb2rpkP2EifrQxHPrU67gWr4arcdioq1q3LDrcbji4T951SuwQcMbkKRPYwGdkwThogzD",
  "key27": "55qjdyXFnRqC98tepPjShHYSi2ra8xwMGeJ1woLX9PZBBKcA2vT5hmBnDGGsyMFj4fvaf2BPSbMkimtfjJYMr6S9",
  "key28": "AZRy1aQE2it3eCdrbvQzx9hQRprwe2geUUvCS2qpHS36dgLNsnQBM2yNgrQJiMgTqFmQa6Vjngug8t5j4Zq6J2U",
  "key29": "5fREo7x6sxCqzZJPLZDqKkbqxE1nTxo4FrGTMw6yrQ992BZL1ukT3vseWeheK96DL1r2vPE5Bud7quugMZo5PFhj",
  "key30": "3Hx8CDb9u8GK3WVaYEW5MrywKURF36umaLdNzNDmE4y1omgDsmeMfo29etTZjP5cd9Rt3xkVbAPpQg4p3yyuJKR3",
  "key31": "5LfHPVy8wswxZLoZbW7EDAm5snj9oGjUhdyWNYrj754jpgNMtdabheRdL5y3f823W1EMRGaiFeNyu75CCJ78X8HQ",
  "key32": "3QCAeH32fHVEe484BxLLXC2ygw9cUqvtMo3tHsgxKGXtz2ErSH1Dbzh3sHdpBoSP1gXiem2fKPVEFkMZ2Rd3NZY8",
  "key33": "5q3ipDpw8NgFnTkhvwioPYnBTtSbsS1nJ965qJZVgGPc2JB3XsWvZaEDVHPzdgwiWoyH9qKpFWvrtdziD41mnTi5",
  "key34": "3eDm2SAKht4eQqtrCoV1RGW7sSKpceBrXjmi9S6TK5Mfbro7xTtbmmd5UHYM18Buom6aRvZxsc3TNiYKbvPa4rWD",
  "key35": "5xmVciisB86EY56MsbGZRSUQGfyXdZakXrgpL7thisuv32ik4VNVsYveKSuT1bAjmotWfRSNcFM1FiK1UPvqLrUP",
  "key36": "29Y6sciW84Ax8wAExsFi4S82dEEszZPgQogbhWEsoX9ExLhctpSXpte2nBW3s6n6ajRd2KcLeCi2fRBbdS2uoEj2",
  "key37": "3ug6vLP37jR7J7qZjMmz3Gqr5wD8GbU64oqvDpRxFiEpiSrxsVJBPWF28eq4Wn1oLEdDZqZCtZhLSv64FZvT55eH",
  "key38": "Q4s7fNbVkwnh7W1BkWc55pRAjUmremZkuYsqGq3krUd8FASvC7qY2TsFGg5xbn66bBcEh971bFrQxoH2SBpDScL",
  "key39": "527ErX6QwHgTqf1Kk2XyXyAgWTwZVo6VhzSrzZvzUtRfZyQNwbjcsPv4MiK6xK7b1rT8pd38xaVhwC3HBgWvA9W9",
  "key40": "5PpiaiTsdKWwfW4YGsPqR2e6rfXReXTJQDHmwNByvQvGmJaJnAen4bok7EexgMQ13xqE4vypr1je7kC5Qg3VpPv7",
  "key41": "2HxZWTif1aPfKwJ2SHAiVRpQDeubWtTCvA1ZTsDuyfL1pCptiCzB5vt3CqUjQJJVPbQHRTesmsfyZWP5y9VnKDhe",
  "key42": "61fUYRBFPihYA48ejMUbnLfyg3a29wmAUjveNPn4Jex8eTKXXvjUZKeFzc3WiqkDauKJ387ySNs7VtnRrkqNvUvR",
  "key43": "5nFxXoQn5c8Qd7ufvSn6wwF1qd58uBTiuwGwFHEdtPnCQeWBkxvTroABTZE74w8H4miXdE6n8oS9TJ55PaFyedE8",
  "key44": "wyRd2yaTS5qQFZ7QyZ2HjKjVAnC4wYLk9E1g9RuL6iwQR2rC5a5njqdnSbWjapdJg5DdewVw7xJXbBbuZLjHc8W",
  "key45": "2LYnrbTFBwmDWKmZ6xFvZte9rZVHMFfhXb5rcz2oZE64XhNHr3a8dJK9D1tc3NvgbYbGZ3rFHHbck1jqnykgzJf4",
  "key46": "4XFktsBjNAqxEnxz1GhCT6ZFhMYYgtXxh3b3NAhdWkKNAeNRRnRf14pLCvkzHrjEKDCuRKtwKEny15MPRfVZbsw7"
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
