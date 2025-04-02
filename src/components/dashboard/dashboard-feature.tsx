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
    "5ds2DVdDZtFFdqXZaJbqk8SYoJuQpsJeH1NWGKm18T1Rep6YbXtUnzN3kKa3nBmZxKy9PZKL4dApWN1mifU1C3r6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FwkhLW3dLudbBweia2f377kfWMK2jy4Pstu9re4hBqehrhNwUEHSbcV3SFesPN1BmdU1bJh69tjHBC9fSpJJZ6E",
  "key1": "67rVaSemBMefYfe8iS99rNUhZpQdmEaXwRXwYgjiuLuLr3wtq2pTtAr26c95yGsC9pEHzwW96UsxPJEfLeGHoh9J",
  "key2": "3YiV8QMmwVqnynQ2SjjvgMFXVwC7bWzD4EoAjkGqxE48554XZTAYh8nyXSKMDoJ1TBMu4xxdPyKbfVsN3M36RJ3D",
  "key3": "3a876Z6muPwHBeqvETWUcSCPP6PL5gG1rb9ibkfJnDq6A143PCbGbJry9FNzFDc6bffo8byxyKJHrB9CAiiC2myi",
  "key4": "DSRtxPU5ZEENnRvPawxxrj9pQ2Mx8xvZFAUyLQLcVbMqpgKDN7AAQN9GkjfV3RQkpbwNov4YMcFXccd8iZezqKJ",
  "key5": "2bEfvNumrNonrGyzje4vRgmJ98Ztw2J9did56USaHkA5awob9Hc5kwz6UrSdMiaBo8ff9acnX5idJyHKMG2zL2aj",
  "key6": "27aSfBPrNhQNW67FQfqaYwEcPD67mMQboapyb6zYFtmvscw28WPDbpGQTd8W6cvVP4ojQ4h8WTbeU82CdU4NMqQE",
  "key7": "ojww7R7BEPhWnwxYvUShERmTUfFLSEq44as5CC7KDwUTeum2kLCyfUh5WJRcPQ74L8S5gz5U7aTzevdrZ5VfuNF",
  "key8": "5tK1HAyRcgbrjHpvA2csv6iKtzLCyuztRRmogZNEpR4uEgNLj5rXVXNi5Sah57GVnkBuRWJ6WvSmKVL1HJsx3JcB",
  "key9": "4Wn3E6ckhVSJkwfbepCZkP5AnawuQBjHwEgFu2AYnioKLFNZHC2nxp2bgZat6tjJyU8xixDuEZxD6GFdUpLWUwpX",
  "key10": "4cDQQrJSkkgvRAQ6TB5d9zGocqobTYKQ2i6KSof7Afe5u5Vrb6KbcXfUWVnPsmuF5VKTJ9TvMA5A1GqCwJB7RCuG",
  "key11": "5UmMps9MWrxqmYFiDi7c7Dxp7PpgqqAStMbmDWDXAFoZuNAiBiQCevisFem6ZUyymE87CcRYG4eNfp6AkcRQewxA",
  "key12": "4CF1QHGyEiCQZhymDL1njyeKvo9n2km9jx2YPGgNrhUo3PRcbvQkkFkGrkjviE8x6YqATskaLo8bCe7aPWKUWjfp",
  "key13": "PX1WM6HsU26JG921P2gR4yzhY8BmgvhBHSruhHe9542EVBuWDY2Wji7zrzWMopauZVjsUDBG5YMA83vxkWJsAzh",
  "key14": "5QCtAuYopSQrYf2jiiV85Yed61oms7i1XWTHCDdYHZrcn1abUN3pJXSm2Q2LC46rq4ybbXREcPHQDBjMaUBuvca9",
  "key15": "5xzPNbGmiecwL8yc4a5Lh9k3J7qeVSnZvHU8xbpsFqYfAd4DY9AJZfmjU9tfiWSktxCqY5Xb6aEM7eZjszmZvTU4",
  "key16": "5Tk5rJd3RVejQqQMjNuBbTzYpLP4yaBHcRUzmr85qQjPbSMta1R6tNF6MKGtnuUZ6LcWG32WX28i1SwmKQguXUYL",
  "key17": "9xZYTMNe3gRz8qeAsHHZHsafeKtjZm7yX4bnEyP2DcsZB3ukSG6ksnxG6ijugrfpCDdr97QkMS2CAevnYo2JHJs",
  "key18": "D2u6u1A5Ts3pT6269EeREEy95W58FS22Zz3ZAU7hQXii3bVeDH2FDshHqziWDz1HD65h46VpPnyhtcDw5Jq7r9X",
  "key19": "2nPxKAd7YJu5Z1kMT6q4wZ5Ztfv6VEy53MXCiTAKxr8pYTWjmwf7uAKFT2hwL1zSzq3Vo8CcmPsfPMZ6TXrkjLNc",
  "key20": "3hw1jmeexS2UbtqVtw4pX2b3mSxLh8XFjuvUa3HrDcmvCFbmbKtnj7c81BXbJXwajhNAPPbbUeQGrCd7JmrNTNcH",
  "key21": "43xnZRnBGAQAdAi4Rj3EbKtiUuA5x9Dj36r2pwwDbqMNHEojRtnkiPgivrLWS7aD1ZMZqpYQbeqVBznxYKmb6Wb4",
  "key22": "3ARkyVcT1XUwrSKSQhbpXudyPqu6wbNM4bep9Rf1mQCm42kEfbpjCLPmgDhnppehB9NReFwDENFtLUwjE7eNA2co",
  "key23": "3uBS8Jb8czR2SZroPKqpR1azwKpiN7FQHHdfTt2oYeEQMB4TEULGazCrDYUiTw7Xr9mHwzZ45kboSWdmdycmPNuN",
  "key24": "3KqN6eT7LcAu9WnFUqEH6yDXtCuVr73R6GHSoVfze4otKyyiW9bEm4wK53XfdXmLxEphP6fUnzQweZHh7PwNu8a5",
  "key25": "5XkvmuUf2H6v776XRRiqtbPywHS3zCUqN9fnTS4PeoV6Ym7hLsQRC6jU7T9bXfHZQ3CNFJXUT36n9gDqYYVTRiDB",
  "key26": "zynTzHX2ZJJoju24UrBf6r6iJVYwuk1jfszy6DMW59puNc4fcRSKrxnWSA4rEVuA6Z7vifxgu28qLKGugqUnhQs",
  "key27": "64SL2gZ7tYgqH3PT3cJ5qVumyMMGhrSX1X789ibZq64SWu1pwp9HMYd4Esvh6VpTbmD5DSvLJ9V3mQaYE6Sj2xAk",
  "key28": "5V97TVuXwgBHyiefgN2P7GGvtGjrjgC4qFECRNh2Yfaj8m3Dz23VJw6bgmMSrttQQ7UujotxmminZpVQFpju6wXG",
  "key29": "62iQpBZDzmNn9YHXXAqhYExzzS7N8eVffwLoEjfyHfDdRZympqYTfLp453dVTn4TTNdUZE4pd28mVQy7oSE1syto",
  "key30": "kkCpBQfXqkmKiUk3spaEDNXmiRKQf4pN8N1bf74Hq7ywAEkARoH8QgQozk9oC4SkB2c6zGUX8s4z1Miw9a17yyd",
  "key31": "3oKvfTjz3dQ6TVzrasa7kCwaquvb3wJa2s3JeVnCiPGKBTaEvb1dxpYj3orp1ygkPpa3y9DE2TR64gPMWrJb9ybx",
  "key32": "458zSFboYRjoYTH8B8dT87syefacg7WuMoepANxv39ByewuMKwbaJwgsbbxCweNXZkhQ8Qu17iLbEo9THrkCyd2y",
  "key33": "zqFS6u61LLEyNuG6vPJRr1xt6X8nTQERvGHJuREk9ybQc459MUGm4mhMKNaUWnQTQRhTS8Ei4b3VzXeBkCEtKXG",
  "key34": "67cdS9xj7GfHSEhJ6QMAmr2bdhAVd7d2eSrJ5qhiNgq9A4iGR5R7C55bWP69C5QP1ecAexUPmBHpWhcpvHsBdmM",
  "key35": "5JBtMYKWroHgqQQvJHpF2bTsn2bc3WXRt4LENfMWYw8aJ64FnyrSbQDbgJeZyyZrWVd37KK5nTUcFeKs2nnpJUpM",
  "key36": "4zjHcPpnWr2wHHBYn14rktKoR5EU3CkohSstQVjLPbC5ZQXWQxyygqvdrXr5D4mxRFZUTbxEx2hRhwHLFyT2eNTM",
  "key37": "3HbrP1gG4q3uALyAcjZn2vywyFsQcVgQvaXZczFTAqaua78XkqLJMYSu9RHgpyLK9FgbKCSZM3tKNrzjTvuTXase",
  "key38": "22g1oLcfFaAfJYFy47bSWyxppqc5hpmPeNgKYeBLZpfvLkP5ckcSmz5gYDpGRPCMvbrKjsq5YyvN5JPheW3mdBz3",
  "key39": "3p2jG8uj1fUR13P8XERRY7twnMtZ2B3hhfaBoKyCNQUgchkeHezijVtWsPrX3ZbTxWpg4FrS8dzGj7EU5J18oME1",
  "key40": "5ZHsSpkAaxpVUMn4QVRXkbNiYVDccfnz1KkoZzPPr3n3jY8zf4n6GC1aPMu6bjZPgjffZ8otD6dyyfE2F3FK9o7z",
  "key41": "4MGC4YyaWLo9uUejPdh1pJELYbyfYMfw275kWt2R6MsrSmhbSohVjZCvdVxMbBv5q7GYNvbkgUEQFbLiAcK4poYd",
  "key42": "3zb89CMxDHP1eGW2ebW57oWjkg8ZnvAaY6PGeA5HvsUZLdmJL9aaCnJSEhMjQX7B6HA7dLF3KKrivbE8z9iY5NwG",
  "key43": "4d4Lp8HiLjkwDHM9RMFPFNA1AwgYksTyMFJxuYaJLZmRBirUY6PURuaFi7ASHFaJEpnf2SpTCmzjmK3Z1fvyxp9a",
  "key44": "3w75ynYp9xLoVPNzZPomMNuH5Y4HzDaD9N4kNLCrAyifrrSGia6fxa3H8gLeZpuajA4PL7FXv2pWEjhpcC3jLqkR"
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
