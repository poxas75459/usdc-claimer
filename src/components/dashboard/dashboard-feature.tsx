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
    "3CWagJZhLxvyvf2zQbuZGA7GyzCConA44D5rJBEKsPDgah5b2jmuR3xKZ53qXg5RCNxsJtpfS15yWG1q2HCpfmX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWcSMULAwbn8zDhQ4ZiNnkrdTGaJGXcPKFiiL2pqzSQAwKxwaFyJqrTRGZEUCdApDa947BnjHkcrEEe7Y3CVPsd",
  "key1": "4q4md8WMbruqMfw9qzbC2zXoN9V9YcPFbGsubsBjfcn8kRsaZ4nkrv3Zded1SsXZg4K1PunbmGMh3pCSQvqLSBww",
  "key2": "2AebwzBcWh6eWB7uRpXCfpPZ6jMZFrxADU9xDT9aa47EeDSZGmiy9qPgfb5LnftAAjUXXPEgJEewAcYZTpyZ2jwe",
  "key3": "4gzPKRf8Nas8UYXX84zKXdvG9isGS1beAqfcH19NTyQFFQVeYSJ4s5g28L81wcg6cUPyBsaoMZTt3QF5dGE6UZy8",
  "key4": "2X1nY4giLTvXhnnzDEKRuG4DAcpirkuDgvVwXcLNrn3tujy9QRopyu6yMuMs9ExA7BugxU7kEKyZ9VBBKb9bh3Gw",
  "key5": "2HtCfpdbVg9EFqbpWFRQMb1fD9ad7x3UhKXWeFrcdQyZEwFW3f2QMwqkvkXQyq6ZjU61CmrdnCcugy21hr6QxaS7",
  "key6": "619wMm7hETSzSgqv3RMFMXNU8Yub5CoL4oPtvnB87np6GryZVamvpwrPYHfGKueFGiD5wCeR5LR3JbJZy27o2b2k",
  "key7": "4pLLxrmFAjqh7vuc5rCZN3FeHWhbVvZo9usHgj59ceL3JM3rxnHjoNRr8e5snWV7DbK32ZiGbvnYBwEc1VMrHZQW",
  "key8": "5EKzSD96gzyMr4DQyYrYKK84CGn4WfWsshG6bkW7n9jD21r6GTbS7LzDNkcXBYHRKETZJe7mxtmasVnmnFsaoUow",
  "key9": "2P9t4FfDBWRi8vMsAUt8Po6B1Ni9W6Wzy6egjgEXXU5yZEp7KuzFDc4G8UFGGbWTB9QCGqJj5itCUBTQUsRrDHM7",
  "key10": "x8JGFR6mzqD77kS3Fvvk4Vrbgqv65eKF7jFwSSjdnwWPfSe58tamfSwLvhKFsWmXXWHjR8vGZ4K2hNKuiTGoEXn",
  "key11": "34VYmaEWBJDdjbb51qzWPZeq8PikTW1MHaB5fLRJ6U2Ab7RwsWZ2AGgBx4EfBSvKbwLMRHoUrt4A5rqvTnaA88yg",
  "key12": "2B8fzs9qFrGqSzbNc13dQBv5AE4PPiAXJpM4MfDbySod9CzN9XzC1rsYiRiZKit13wNqgF8qFPNinRYWSTTqdGxs",
  "key13": "3TyxkZ2HeK7FwF7d15KJNt3e9bewVjMzRZ1a4n3gHHTPzxapwDiNbzJzNzcwLf67kopVDxhWhAr3wMRaXtCPHu2G",
  "key14": "4urTwumUTVWXbLfKbixMCjtCm5mb5esnKWXbECbesX9SKHFQ4BHuJSPLLjfE9UvuBfHcXHBShnA3E5H7aqd5VqsF",
  "key15": "4ApbXuQze6fu6Wio3ekktNxb9gxS56myJ9d1gKhQtEpZAGpifRJE9DDc6gmmzTyZLkAsguvEkRgPVfjAmQD59Jsd",
  "key16": "2WnYCuC4JhKKQeL7tu54pfYEepMDiup47jKpoRHfrbw3KyZhoUrLFv9vAoczRmt7L8FizFY3pPQKSXBdhdXpfDWi",
  "key17": "2JtzKpRqQjr1nLYrHT3fW2Q2RvBg94R1g3PQBvcWMTxKKyeitqTHeotppodfbe1eaNidmgc1JuesoTwmARdsHJWW",
  "key18": "hmPDPWoc1kM8YFg8mgoCeqyxxdy4ohmk7FGMhsqjtvWytW5gyKPvqVdRTA8ttyjS5JCdaymNRhseNnZEwWcTRha",
  "key19": "5QBUPihr9fNxASc2xKdsquBLM7sVhCzySS42pH59cAVrgy2pRXNjr6Kt4padU89HQDRU2u1FCzdiYxbwdM1dtkKh",
  "key20": "2VPTkvZZjwZdfWGYUMY9BQwxtCFoYsUEgrY63EowTemfTcWmzLyLt6fwaKvTk3WAiHrUs8g9bnYxA1kgMFCEPQzH",
  "key21": "wAbGFwH9U3YBcFipmk6trMCdmjkXpJCn4zFL8Fxj1kgNkAJMxq5Ngdv31bEt3w4QJioRa686bNUeurXoTUAXwwM",
  "key22": "59i9tYsjBZr41EELkXAQQj1oWPRpKeiq21aYHaiNaLiWjUpi9iwg68peY9WbZodvwLpkg5EzqJExrgfnDn9DPcA9",
  "key23": "4UcYXUsg34dFkrt3f5BEW8ie1p74zzFBmdB1PpFHsForNxQXBapngwE7x15pjhHmdPu9ojDkLRHpWJwYWhMf9s5s",
  "key24": "23mjLfeC7hK17cAGH4YuBHdSbU6dt9VX4bmaa5L29zN4XqcGK7WrgDS9ob1uE4NLscXVw4K2jmBrRqMrpnnYuCsi",
  "key25": "3bCg6HB2swSb1QWJLEXKuM76Wejkuh9YEvsSunhvp9z9PaJk2GxKViZTRtv3wVwMC6VQYa6AN79P5mxSZG8j4bG5",
  "key26": "4xS3GgP63Cco65vkDKmYCh17BzfmnpLu8tMiaY5V2gurZyVKZH5Lu8gfWFyot2F6ETJ3imhbLCnRf8ki5afPdZTz",
  "key27": "3YrzC6M4nuH8p47AuJKsGeZN7bYyTdpvcF51Zj8RqmoqvHJNfr442RFCmedPiKxjPxbaEa9PReehCxbW9ZAAhF1J",
  "key28": "2FKHDqaJyQLjes1SJsbzZG9nsfGzyaJddmiFKFSTPscz3XfJJNYAAeMx8ysy8ngpFjFaFAT85oXYmwarJuyQwSt6",
  "key29": "1nyqzjTdG8XvghA34Ziq9tVFmTrLw38XCARRpywzKBi6smijjtXCgxyrB22ceBacLi8wY2g2LHzEk85R8THFqg2",
  "key30": "2qmzwXTwKmvPUungdhwsY2zcyjZtMCRjx5h3sQP3W1Wcuxnp7tn2fENKqFU4g6eWXkyb1iB6Yz4Mvy8yY2EVp54i",
  "key31": "5Uoc2BHNCwAU7Wu4qVEQoGuTvymTJiQwBzuivYBEdXfuTihZvucWsmx5xmsLfhLivZFhogue8cb2pscdREVko7fy",
  "key32": "KyN55BhBJpNr9yWp27yTMJiNZQCLCvW1YNxnrALwaeeVfocnmftsPoDEMHZizWiGpAff6sXRV2BiAvnypMVjCSh",
  "key33": "2CscSk7p76vB8WR6N9z9Doa5JkKEij8zwj4MmWysaikuuaU9DZnCWtU6YojPocSCfrviyBRAtPE4W8iXzK2V7qiN",
  "key34": "2fkvu7yWGLJan4ZxGXo36y3ptduDt4rJbDaz9g9buavbup8z5BAQawdsNZkEUkAUg8J4iPCFToBqgtKYF8354wzT",
  "key35": "4FMAe8btkEzVJLiZ6GpAEgRuN5wcXN92ENbKVktuqNoeKtGAS4gTx3uS8vfAv8bP6Cavbpek75PLuDgvPHvqDGEV",
  "key36": "4VXxipTccNXpGsb6pvFy1U6b8MMqDN2AX5K2t2LKSjyqn6VnMPZFPJ152xgmj61abCApAwQfcd1BRfqJg7oHKNt8",
  "key37": "ZmTwfRaMmUix3S3n7pbkYWBVr2XhvgRvt6LToNJiS1JQZ1y2Hj49pQXqLKRJ8bf6xMrCypneycfF4x2r4oZMrEc",
  "key38": "57qJkGkQvp5iV3iY5im4HKVYTztJc8fPGwPQm7mnYDEhLGXwQDqd41V9fzByNGXZpVWH5SPcPoazWwXfCEEQJqZQ",
  "key39": "4Box6agMdi9XHUo8oK1duXYbp5qoB9PrQ8ebrf176mwxpDGmXurNscJddCA3VQmZV9rTWLYC42yXeSNQaP6JviXW",
  "key40": "3nLjZfzfcYYgHjwELs4cKEFyoHXMsPcLGK8f321CnJau7RV3uWXTktZ4E1U7EVHCCHJv26voi3xfmYbfDzXYVxZM",
  "key41": "yxdiXwAn1cdPgJ2BbMTG6x7nF7uvNQUqu8fCiEW6a6NMc1TpAobr5U4YbwRdvH9LCZXmUC6T6D6ZqMeYEyWh8CV",
  "key42": "4WSnw8tnKF88ZjBnuimAQgdYNGuvPCunZgyS2Vrv9KaUz6K3uBZtjyg2d3KzJHuDH9U8XxcwnS1Tap7rMUXxxQPm",
  "key43": "4D6PvUvmvvaSkhpXNwMyKVEFRPR6cWpkYwNty2aQ7mGnq6HcuFut9B6fMvFrqsNkJaXfXjcKNdek6Znfp9XTH6kD",
  "key44": "5JGcrYRup9HTc3a2XM9C9mHyMbywC1W7uEK9wnxTno6gxGJyhgpS9mhqdoyAqJYzh4NcsmbQ4DLCizALaMMtj6S4",
  "key45": "3k3QeGPpSXJm3dcgKPDLd2iXY8hGVg6fGSjmDDWuc1f1TTzznnUtomEH768j42kStesfuW5EYw2PmozSy12d9geD",
  "key46": "62ZhZpiWLqJmrBJJgRntKnWxojvTADo78NKqvyxaKDQE5d1eGUEdPTEZoaD7oWeyBQCBwgT57VXUgJrbEqeq9GhF",
  "key47": "2F2zEQRt3xQqoe77f9y3zLuHefXACJ1PPxxgig8k8GnVEKEsUePHayavw7ZtLZnUvjYTKwn7uPaoLbse6yeeTADG",
  "key48": "4cbRvjw6WwyzAnV9xSBN8vehoBdMhCoiuYgTUR4det62sQALM26c3xfYHXrZChQqibNcNnZEn6phJe3u7MCrvSs7",
  "key49": "jTEAM12zkNM53vaF1AY1twuzPMw74bh9p6SFG2xZ3VUrR6y3DRbsFk3Yn5EPy1JBsSXYBcMyXgC3gj49QHb42nn"
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
