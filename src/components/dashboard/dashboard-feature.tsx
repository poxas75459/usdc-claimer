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
    "22abq8JCLXFxBknFLuWh8LEsBYVvCcxLzBNLdsiFH4zeNYcyQcAo9k8Bd8zZprWNPYxiiAcNBvwYGbDXVGdkPz5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q9vLhQd2xKWeWessG2VvXzDAMvbvMamMP9s2bQJTyZt35SibxQfAXksqrHPpaVog5ikkoavhR7ipqF8z9toq9yD",
  "key1": "451KRFrFo4sJdrG7FM6UztUEaRpiBrUxEdLYH2ktdrKNTUQAcP924M4pxxWgwzBR7qXfQKzjzn2EDqLJNWCkYCy9",
  "key2": "4jArkK5QKCa1m73BBhtgi7YzXpahvUapPCp9pgJGWByby9bHeWZrSkK6AamEPczLbceRUPz6KQpFVWoG6aCxDKcj",
  "key3": "2y7FPqWURemrNmDgTbvsqk1anzfDzbCFGX7ZJPJiXeGycTMuVy4tcSGGJUhqTTRFAJLfYTNPEL2QYL5p59AsSUp",
  "key4": "39YggVxa6qK4Qb61WnGe1E6PSwmDm65QnScm1KawHsS6yz2Hju4GfDAaQzSEHaAihrHFy7PJ56bu9WgK7KaGeEbA",
  "key5": "xtgfhEyBnsFdnEz8ysMZqvAaSCJXjzGw1M4YabyvUL5WgTsF7ScrHKZwRGoCDhg1aYNN2BFPPi2PGMocKB4g6RA",
  "key6": "2pR4Z43FSPzbPpT4o46pk1dxqKLVS1NoSTj5MGh9nR2HR9edGDGtXu8Crohh5AMr2JrEJqxbyFG3JyjtK4WGjUVa",
  "key7": "F8EMVgK9x4QSNEAHHgxbNUwdvYxRo24dz7m6MSJD2m1h56eoLg9dvCCPUdEZByMZGw8fR2URsbtSXj2p2Qh6PEy",
  "key8": "67AJeaCsNg4KoHVGbCTCCCqznBhkpN4LYh36UNxG6xe6i89YFpm83xtSUSGqTAwas2AasR6ZZ5o6WwhqdQ1MCRmx",
  "key9": "4EgcGoxHjkiwWQ58zRb4Xxar4FaHVrXq7FiZMw4UDZffLGXd9X7A7BgBaQcMbsjyaHj3ngo5cu7R65U8ArYnzy3a",
  "key10": "5w3D7A3Rg8g8KSgbnQwvuhCoT1VpXc3DHJ1tGb7xbv4EqBH2zfUt63tZTkT7sJ1PnM4Y2YZnqMKcd3822WBDVQoN",
  "key11": "4nmzyVJtgxBB4yCQ3svtvn3xVeweCVLMU1W2EHVdtqPCrB9xjABvnKybSKBcNMkfBS5wJLawKuhgqFDCJuKHsEc3",
  "key12": "4QLoWQDcmPLT9STcMgPDwfMtfyi22cKoUNcKujouYSSrD9MrwSXnHk5zUcqtQgSH9nyrHfCVDbDQQig4ftngd3gR",
  "key13": "5xNp3n8RBsprEKsU9xwiUGusrXELdhoX8uoHT81ChLV7PxHaamd8M4mATB9xzovugwUHN2o4GX717KQZGJCR26uv",
  "key14": "58Yc633nwbzc5scuGG9zo86TZqg7HoNbDkJbB78gJZgbGwGWyvjvepvTLCR83DwwbeKTvJNuRNBD4mRfxMEV77Wx",
  "key15": "4ek9dSg1kUtdoSFmrUYWnRRTD5oRDinhJCodFWTX35gcXv64VFoAP6RQMswJegcEDnWPA5rSCk246i8umLnoJXPx",
  "key16": "4ofQehthhEpMQMx1zWSMbAdgeHnYEac6L2bF8kgjaaj5CCsHbEVrZeGLKhQ4BsVMYbYWsvwqK1tETKKMxfikJgSR",
  "key17": "34QdQuP7HDMJVgHYZYPxh3FXBSsVbfWmygA8ZFv8BhDthcmsx7oTqnyW4BWUpcmFNJSUSQoQCG7EDNrxLppiZbpd",
  "key18": "2nK63MVsjLC6LYC4JiFsjiDyBSPHF6rjHkszR1d7TZW9EbL8m9BJ3Pb1htSD7N99zepxRhvoDWsPad4SS2sBb9Zh",
  "key19": "3nbB3y1fyscdoBYzW89XftSGKwtWYtoCRXzcRmXhtLTs2Qi2ucdgU7mxxdcKic5jskCiZqa7QzcbTK73MDLHJLHV",
  "key20": "21aZEbYkUxFhrE1vkXQaX6mGuf51kprHQbq4iQG5E9th1tnQ74D2tcFnr2YfzZLmPFHqrjytTbGzTrs8fzDz52rY",
  "key21": "5dHTYg4cPHmftnTz8f6NED1QaFbVFr51fR7kvKRamcMy4WYjBCvWsexRpsiSDGEN4VdZ3g53G6cDALf6dr6muQaB",
  "key22": "5SmZvGscF2hVCr2M6pNSRRmLhAoS3xiz6iop8sczcZqVExDSq1Svrtf5eEPtB2sQEZmrjqukh2iHgVZYuaGhUwk2",
  "key23": "Z9BAocupJqLmVC9bi8qsnMrdvtJaysC5jSXanntUy24CE92Fgez2iy1GnXEqaSAQkgo1hrF5SdHAHu3edJCVwV8",
  "key24": "5uUiVT8Me6aXAWtrRj8xVd8cqFcadfpGs2GykV2zqoiaUQTC61yguA78wYC6d63voCV8VFzB6s7uRTDo5z2wx7Gm",
  "key25": "3ZhzdNMcnWEhQkJzztv9fRUMS2pFP75nywQ5ahuvjhmPHqurUPhQYuKykZ2T79qQwShvnqU4yNM3awfh1KET5D9M",
  "key26": "iAbcciniDHSsXq69SimEsJtcYJkUYDKcvDrpJAtazxt8ePNXEdqqWfDamesGyCSryQQCmXMS7rn49eor5Y3L7Bs",
  "key27": "2cZNBhnaF8HVg5GtwyPN5yzrKt1Y6Q99goUUZWDgZxWb5o5TkUuELpAnYuuzcSqnaxFAvzenzCcFsyQgPkyDvQSG",
  "key28": "5G4ecvRP6ADXdTErHycKUTTUvDhGCAbBMMmceR5pMBx65tK5fzLSU6yizT2JYDkDUmZQDWX55cNP4DrZ9fCtqxFx",
  "key29": "3DKHbdqgpRaqQLj88hTqqb5tQMpCVy2yxzZ6s2Fne5GWFGqt7NCENSRssvgkh2c4BqB1wmxHTbNCNgC8PJqXFkYw",
  "key30": "5wkGZRNT276LpMsEhXgoqqpmARgzhHcb11sx6EydkH2BaDbYn7M94PooP7bYvwuTEGYXTmrxfBut8PDUeFrAkN6P",
  "key31": "33H1JHNhHV9mxrysaPLeYtHeh7uZkS1KSos5DCzHVL9B6WbDEazHMeBuAjwaGL6G3hRH3vxDRMMe15ke5m9aDS6e",
  "key32": "5fdxbzWHZKkKXdXUNE48kAeYFG1pB2YTKcJUk12uN9KiDrS5ZTq4JtdfVw2G33APkfPXWDU2Be5K2Eh8oTtpeYux",
  "key33": "5d6v7FYNyuMUP4ThPizHEUq4PZdfyYv1cX7fQcZ12ihVDmWTj95piAPBgLK3giojEthx4HTPhNCru5ac3JB12fHm",
  "key34": "3ihZFGmtonJe65Ex6kXDk4EKy6wrnNSwmB1F3gji2RFecVpyLPMMRmRYD7omGhbtcfJqCiu5dGsB7NvqrzMSpQZ9",
  "key35": "4i5gcWg1hc5pkswKUnaRRAgGtNXdkCCVB4Nvaqt6AMnmwsLiJmHyhB1rqsd2FNXbSpa9FAsF4i4qF7EcZkPxvpyX",
  "key36": "5EN8PPzBAmiobFDjEBKkRgeprUPZ9GevG2qXSdJhccpZ6MyKM3bsbaZxgL4N4nKavzuVSBTkdTGY9daPWheJcUnu"
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
