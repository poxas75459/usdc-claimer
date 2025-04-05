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
    "vQn465xWeHUkdYw2VaAHUUGU6DhAQkUJNNLo1CMP1QFopE2PuRVuwFgqZ57SwraA9wVKGqZNiZGeovL3iwKXh4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AbnEfxaUdEZrcFwLG3gypvxuwQke3Xex4ueteyU3pUHq7sUVUANfEJdqYVmJAW758iqKsdgmmUPz1ayeA7fvKti",
  "key1": "5Km1LXf1j1yrMQoMeLCMoK2L5jSfJ5RzahHEvGBBmeDhiq3SFwg6pzHrmKiuF4cgP1zuteTLwqunpp8EuiU5S38f",
  "key2": "3mYkCHaTyWBXBHKdrMU9LA4buhhr71h8DZDJwmheoVFjD5sygPTwVRhrdYDnD5eaPkrfJZLGztBVNYCVFfGiEmF5",
  "key3": "sSHzqe8Xet63m5nzejD5jutQQNxmuNVSjMKxQV9iQZvVVW9aPBqsjLfMFVi5hEWvBQPc2NCD4Vbbm84STG6acCo",
  "key4": "3FUYN1zWT9huBCbJxBikHuJ1R5vDuCbrhENdF7mJ7XFEtfjTFpSYotDFS9Xa1Sb6yJPgWHbQwrAZpj5LVh3dnsPo",
  "key5": "5yFBGEYAbt34ehZaXDGUKCDMtJbPZRQ7rzhDLcTaGEh7mMZMtZhcYmj6TKARGcfUM4hBM1Sq7mfJMkzwfU8sqPKn",
  "key6": "2HpUuyMZipA7VKacBDSNpR5FpCMLQP3afwM6aQfHSeSkqzEfUVSoCLS1fWKiE2BxwxEeeLMpbxzxP2XcxDJWDGy1",
  "key7": "2buUfi3ZSWhJj5kc1GYU3NPiLSLR4GLYdj6Rm5LGzeyFvFGHTNmyCuzQLNGjkV78WNshEEZnQFjxccLk1gDP3So5",
  "key8": "m5UD6GKQmi8Jxyf86h4PpZajDhZB772bT3896hjUHg6CjA5fTGzJdKcB1jKddMvdKpzuDAoXofDu36L6JWDixRj",
  "key9": "3GzwX4Vk7WnW7bypr4iHGQDjE7tCSBdwH53k11BDJepF8jrTyXsiX94WkpRLVp4f1xW8giyJ1c32fiHzt4GB8fKM",
  "key10": "4WA5rvawkgn8ruW3uayoE31GAfckGjtYrrf9emo1Qf4mmiMkayPMjHoNvn9sdG6EKepmW4E1P5wWabU1nXfuVaGM",
  "key11": "2oxvxg7v4fJMiWDJSmWN8vbGXwtrSFJEVdjKCDLq1Lddfmg8b4nvDe3wy6JqEQuxsAzerLnSKrPatxPg1P3Hmvx6",
  "key12": "4jjtTTbF2UJn2jKRn7q4Gvw7QiS75nGXiZtR6xmGuDLxUqWw2q7ShTrNq4YZv9oLAWhcVY1aFzkMpr9cmSboE65Z",
  "key13": "5e5SntCd217nSryTTdZFa1zYzxKbvqnSZGMDgjdidJ7Pe61M6vgsAx39zdohRyX6wEfSU2uqTRh8GrhsHvtb7iou",
  "key14": "4zDenamithNogU85tVCafmKXpkr1ew1jnxVLXWLwvZFha654F3WJtRFoX537XLqMj84daG7Nqze2MfWsJQKae8XL",
  "key15": "3Vubq6kHvFpmgchJWuyKLiiz6cKeUjFZ3gfvJGJ4BaRE1FExhtPYGSBTVLkkc3ZxRShzGV7pmAAcQKEiVs9wy76K",
  "key16": "4XZc3qL4AbNzmPSyr5vNnBKrzdtoraw8M1TGqKE1owwciY1FU84ykNeg3duvxys4i5iJVAt7SYVrtKxFjqQBfA3k",
  "key17": "5hHwc69xeZenDXdypnGxJjA6NPZp8pg2VAyFyT8ciM1LUPhgmPbywvfBW5PUT9schaJN62iiq2XbKfozcuBeM4Mf",
  "key18": "2UuXFguZjsKDprwDA3asBnnMJVKFmdDK9V9c1KcanFw4tyoCkHQajAaSZZRwAgmUejywW6D1cBzoMGtxnVCvsoRU",
  "key19": "35FzHn2QBhJzyKS8jSWAm7wPkuQrDnK8v7Af9wrddKWGn9cB6dtojCSkKgb8knLJc3ZRBi9FmztbTCBNLexTDG7S",
  "key20": "tF37jNH2hPBtL6AxjLcFaM6EMorVcoPP4uPFkWYFMLX6RMTDYstMeZ2D9zrwptniZnXJjJWA6woPg8WqRiypZum",
  "key21": "4upELFggLXjFxnaWeestTGb4yHUkxAaRE1aHwXvUibzZrA2RvqhwNhwqjAJnkQRRTwQKKgYRWZJ39GgJmH1WiaEK",
  "key22": "4ACXCP52Q17zr8pLzjrWGYPkJiXPNZvy8CYNBFszDDWQa9gsGqP2bkUD5mb6nge1GmHMsWKYxTZSJDJG85zhk9WE",
  "key23": "4xQ9nnYMMndWPdQWKwMi8aypASLmKRrxpL7P2MbDQZwoKumbAUGKUvF4Z4UMK488vxAN7p6TR95uF5189JmJ1dBj",
  "key24": "qEM5vFFnTtQ45CD3qSgnhtB3y4Mj2EyhXaQmXhU11iwPND9Tkx2AceqgeP5VfX3txbAQxL25rhBjeQmRoAKvbjU",
  "key25": "CZJwsDRzY2gXf3hMjJ5fM3DCsizC748MWzEuatALE6LJoYisXkkzrzLnP9fDkQ6jt6W1QyR253Aj6kHZggMu8QN",
  "key26": "4wgP5sT9cMYPyZx93WhU6cqBtUe6fi2kcD1nvTELMTQPA5T7EzMLkNgC17v38w1zLSPS479Le54WjtuiNF6nCVBv",
  "key27": "2aq7GjJWQ2fspTxyUeRty3Trdi4mF8KPJxJHfvnZCf8na4vf65HSkbToutKpxWBuYnmt9TLz4WxPvgzHFpgf77C9",
  "key28": "5A1tY8b46vMcmCQaYK4Hy68gJkgqCNXkKRa75uy9Ed6CqxkSXtxqCUfF4RUuPnyyDUuxJLyrnUjPwoDETv9EKTmb",
  "key29": "2xmbQRr54ZVrjR9iUwXzT8yN5wCDXWMQsmCwq7E8myKAFnXi7UgbMZugm7Z443VNbh7t8r9b8Hwc7TfuDy881Ezx",
  "key30": "2mreJQbGmchErnJ6fpw3QYBHbt9HHTHsGonLzBkK1QS6xgi3roMVM5kXAkbSBF7DF1S5hgimdXTePkvRMDnKTZyo",
  "key31": "24hwQSzNNcnyc3qUYWC9CxCe11gqohJKsxrJW89Tx5rnEZUmiZKDDc36vzrX7KyLTfKzirqKPyYk7Up8DzLiHR3c",
  "key32": "4423Zvvb3qVrzw42ujNbZ5NJDUvh27RwtP2V1X1ppNJ4T482YFCCEdiMsq9WvNHWt4czsZaES9G4VgNjro5V9qaa",
  "key33": "p4p6ZMALVZnWzf8CYNGJavdqR6CQDhUrgwgN9V7HC4sX77W8C7cdtwkYr664TdicCcPdgswNfZXFURsACgomkJV",
  "key34": "51om5TbX5TPDBVTmkpNoZnUck4Sx8n5cdsf7cYHEUeWzzkiCumPQS7EHCcpDLPhk3CxwLkQ2hVdnSL6nFvR5RHcy",
  "key35": "kV2KJHAJK5znqTR2MuNMXqDBEaWcAufwz5R4K437UHCc1q6BPLiyEHCdrajmXRVuzUJch12S2332vQP9hFWVnoV",
  "key36": "67nsAqXSqrnBJ4tGQf551bcNbTSnaytegKKkkKg6jpNRJdnFoeNNhemtQH7z2Fa9turkmTU4FqyRPqLBfSTDDde3",
  "key37": "5NeJNeZ9mVps9vGJRuxfPvuhoT6JcN3QH5WyFtRrM2J8amVZTpGr2ZJ4MxE2rSvTZB9QZ8GunicDxfpm23FR4JE5",
  "key38": "TXH3bE57bi7CzoN8xmWqfJmwr9sStKRZC8Mvmx3nmjkbNtsi3rvZdft48HndZ2XCMUk4ciuSutGa7aM3c7Pdq5s",
  "key39": "6ChsmBxMhh3auMY3FASnU4DE7gwoVihjRZ6SsBQw8AHHP2cEkrzLxmdYgeZXTADqnBUcWmDaFiVgHEfSaAVNg9K",
  "key40": "64zo8ERE6zWHmkBXEcXkZwtPEpJxy6oYbgUJtDho6argEJvSJXSGP7RDTFdgJLShuJ73kwELg55bVCzXM8vZ1Yyp",
  "key41": "3WdYSDqfqapNYbdEHDA4xg8FEU62ao7aRrAqSJ7rBRgmp5cM15KhDL5UjVFAXsYC2r7spMSbhDLyPSGMEfZCCY3M",
  "key42": "2StT3qCKVuNPEW6kfBh5VGmTkRwK3S5ko3q1Edk3sEFPzPKdsjzGZdoHx3c4dXFMcV7HtFRm3qKBxdYjwCuo3qzn",
  "key43": "2LUndtUNcUFRJdA4QvyLA4oh1iYYM7PpFtNasJdroDEGuwJuCrwnxCunudrVY6eWBrLbCJoHBiBRef8EoSo7Fz6u",
  "key44": "67HTLoTb9iiA2ZT2JV5WDMSRBe7WzNQiDYQgnb98YTn3d97RMxWG9G4yXKRtKf3MyiGQRhT94NTyNnEBHWXPV5Kx",
  "key45": "6c6AzK4YtZgsC9DezoZ4jPXLzkCWb6nxmDksSoY5TkaQaqfEzt7et4oKxb8B41woj9pjgYFfeRYz8ycSW96MXWW",
  "key46": "2uEEwQa14a9nWcyFcSjDqVd1npeZtEZPSzbU7iZWtAmqxhtjHSyrhUK1QpRhEUs9pPsdGpEdyxHSiHumqsKnPGQn",
  "key47": "4DVAQJzzdy3reRM9J72sTkdUeZn9rDCfqaRidZ4MhoJNX6a1Fd6tpU9YV1rsAEtvzm1mscR8j9L21RL7zvy7aG7F",
  "key48": "4ZgSBMyf7Q9UKd77n6ReN9d6mVBAJpkSNcivFnTVYPF9W99eErrurvtSxeYyFXXDYehoP5p9WjXbEHG5tFPAAXHg"
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
