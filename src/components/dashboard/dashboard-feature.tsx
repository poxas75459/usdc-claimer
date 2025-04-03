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
    "2abJmREauqTMqTuh8pZemCQ8MsPgHcsx979aDX34dgdoXBuPTkQBkufpoxkJR49Mg1zfCTioQJUd6VzDZMXSnEwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QmysrweJWwgobLu2dm5yXaNJFtCEV9Tbe2ZD1HNBKz1yRD4NrqSvnpqn9rTR93cekb42WgDyiMyFPXQJjcj9A5k",
  "key1": "4EJrvE9kfL7EkuELWfVVP1ycr6DR2KQ1e8PQh6vRxswUzW3gvTHbQJu6FBTnaL55HMo4KG4oaEQy2fCzbCCmBgFh",
  "key2": "58YMSrL7e4TX8dNxHeDCntoicGp8ZASshcbigbmtVGC7fUdahuiZFmPX1gDd7ntHsuu18bcNMeDaPZChDnfHuaDS",
  "key3": "678QMG213jydJkBQun8btDJqYUvC5RXaRvosDKEyCYjo1DNrCRCD1CWmHAmjkwazQaedeSoVAzCtPZwkYowxeUn4",
  "key4": "328br8FVSJJ5Q5LH5NckJszFjcudMdFhTnUNUKy4sgcSiadoK3Ck958voyXS54JHZ3AWwcoZDDbu7E4kqm4xrhsp",
  "key5": "fTtTYCw7qxYt79nsB1gGbNcfxU4vGZGtR2H2fqtunqJmm12vD1tY39zYDpuK7m1xnpfrZ2oazU1r3w2TYd75xqL",
  "key6": "3A3FxD8YZUSiFoyXTMEyUYDD91WKBurrZDrv8SANiNayEmo88br9AezEztiqJvy1hQa3n7cZkEfzaoxCsVJuAmnj",
  "key7": "4Kn5aKKx2aaGjiTU23nRXLBZffLNA1m5KEk4jHCuMdTz61N8VnkEK2Se7hSVXFGChXSyQfzcBSrSdiXZsqCG67vR",
  "key8": "29UHF38Vb939LtYPc6cD9A8sS8owdbmU85EnvmeGrZY6mqsopxcRMxk4YBkx6vCYb1qb5vXCg2aGQRHi4TQ2pQpk",
  "key9": "2hUbXrmcHYRtKA6iAQ6F1EzkxnU6bTRG5gd2AEuuR1bdVKaMkSVRnhsKv9k383WvonySg8H6gdLmrjL5PShS1b7w",
  "key10": "FxSdwnMpv1XiR9aJF93QhdLUY2negmFoDJjjZQQHRZLUPyEQ4jEyNMBNbBu1hBwVEda4EG3txvTpEF8NtvmwiTZ",
  "key11": "S5uVEXRvvuRvQnXBpiw9vL3zWdEfjitJtGJMFJV5ECasAm8szBpZvUjhxBMdzm4dB1Q3z8TUQ6WzFZBkZxH51RV",
  "key12": "4LRDbmTz5ETbZNSE3kFH6mTCTUVhQ8N5Y3d8VpjrVbknvPZWoK9Z8zn5YrhqZWsdNw7xLd8spDC4XveX1NawbWHC",
  "key13": "5JK5N3F3G9QYejVT2MW1y93hYcp8j9rumsDpsM5E7zoZLSqCMyphaM3ypgD8YJcvBDfmra7qPq7pq5f7BoTjVyCx",
  "key14": "2dzJdUGahQHB95eTyZyC5KC1qUZ51wUH5Ufa9QjWpJyMvHZhcZfZAKPkKr6cALnb5jCWirrBdNHzjBKhsxQtRnBR",
  "key15": "2igDgbRTLZinZRYkM4QwjouuF3C6q4yubLJbRPHmQ7BMXDxa9KK77BwN6d6hLFQ5fxSj749ZsWbvmj1Yw32e6myP",
  "key16": "43269hznysSsd2QWaeexK1z8izSoRGb2CmecQukyRdqbDocWr7myonxJQD6dHLFVq78SAoZ8TQaxaGMPaNMBLGix",
  "key17": "3yddD18g7c6XBryhCbp9JEp4zr2Lze9aqhAQbyumKwYPGzmbdSuLTYnzXPpSxEucXtKazt5gk3frQ3tvJm45YP7s",
  "key18": "5N41TpezcFrfFhxoyNbAsWT9pGFB2wpjjEhKwTR6aKH135dwysDa7kvWqH7KMjSqBqELEzqgeaNWiPsZYPa55jJf",
  "key19": "HEcczwXQEEfZXJd19RJh7onKAJqTiy83oYrfSk1xVcB4Pwddua559qPDHHy7v2aecKyRapLSc6eAXkSmiNFYzrd",
  "key20": "2BVGTkZ7W8qFqaWreLcbX3nTioK1KHmURT3VYK2dnvfDDKUJFAvi2WYPvAFUY7ajX4fUHMg5Wp5XTWKUCZcHF24u",
  "key21": "4S2PHSMR8p472yQVypRRCGjZbg8PppVggNfXAn1KcdrA8tZdxRankRkSm7z8kKAveh98mcFw8qy8ohrNMbVPFWeu",
  "key22": "5arZmjNRCVBBsWsFzRWd5jHrUKqKRZ2aF3xHe1F9Rw75Ag4ppQcyzMqWHSQKAx595NwkkAcbdGfemvFUasKGdN9R",
  "key23": "2sqjfrAeMyTeNZsXReKVA5kSUaaUSwSa3h6GAopx8rMznBg4EdBWNHodCMUvtLkTAcFqrRuZzgYgYNNdf7bTh2AV",
  "key24": "2cyPCRcSyEdrbLPtHVtCnnnNcDZ2kp5wW45HnrC2X2xycyWPx98wNbSmfNdKwsdaqNrM66x7tLiji72GYvCictst",
  "key25": "4KcbwqeXz2qrCz5wJ1MnmagrFpT28rPKwiUvZYAskHDzQUAgqkowjn1iyUBuRUmoLdyYyYeyHQ2B16Axx8RbzR4V",
  "key26": "S7Fd2smy391vKxf9gLByDdALhazLhED2fbJBGCAgpS3XNmE6urXC5kKJkzGQfrGkG5HuyXkcWK47zunqE6R31Uw",
  "key27": "hZWVh2h6t8UEkygTE4EGqgqoaJRnYJUpRF83qH9ZG1La777F3RHHt3FqoBMULJWea8hVg7AnCy8cq1HnyNFx3DN",
  "key28": "GYK9vz7JN49Tixs7JWgU42hoeAawafnJTF5RPCm3uT33LBTJRosiaahfwBZfBGmupM4ZZGTS7KQ5ZiZpXVtN2sn",
  "key29": "65zUfqR5VT2pW36kPSaEcvDCABJh9BgAWQF7oekYDjaG4W6U7whqnQevtudMK9G45iJAkyaztSwtuJf96ETf5n7r",
  "key30": "4aChsx9bDHYjwm91BrQJPzsbVAgodnz33Jy3zmC424Pe3WgjM61BhTKLpnPBRcezawxVuR5HfUtdmqKhrtoJwpfY",
  "key31": "4E1Uf3GWr1YzvocvYymGZ5RPiVcCZKtjP2z3QdiD8cJRqJZWzXu8cHSS6cxThzRUdyPDwMtyNw9oHZjk7VBV4onc",
  "key32": "5hrtzr72cY2oTAYM41hB4FCVcFGfFbP9oH6bjushaUBLNnUmxWFGEJo4wXi2vRit7w7w4eSgNUd5yJzYZRe1Dha",
  "key33": "3r1t5MZ8S4XB9C2RJaMNxDMzJj85N4HqZQfXe5AXotiyWnCxoiPtD6H4LcHfPWTiM83iH2yimUG9QS18zwvdQWBK",
  "key34": "2HZMCU9ZQgDUdi7BuwEyzn2VWaZTM7r8LaH8tiuAgR8NC3dhsCCM8XrjX3HMWrnY6kUgb5mmwv1TgqRV8wPgXi4t",
  "key35": "2pHfWhFarQPRreBjjTh56x6LQWQTtQUF6M5kmnd6aZ8dg7M3zvh1t4oyDNYaTJf36BdA6oRXRxKjeRkAw5epxYFB",
  "key36": "29r7X2uRVr9dvtQoMWjWS1paN1EKTN2DJATuZaVnR1s7usoGoiw4yt46XZYXbQzdCxdBZP8wMgoNhtsgpL8oyZoY",
  "key37": "3Aww5d9FRZLnc5g6h74r8ALiDwsv17bMcDxGcd2aeo1ShNLs45WRVcCzDp2oAoaCGMuTRXW4pdGt5jWwYKN6uaFe",
  "key38": "L3vcn4fMVrvRZEL3dn621ZF3YNemcNwYManP9F6ww3CdY7jo1YKidzsURNvtBLEnUkDXcGrhSyFYmNeLX4CDPbQ",
  "key39": "K8WPQkTm4tSpsKW6j2ZsW9JDb3MiJAvYnQ5u1wKGRh9GcfpQKbPbguHTWJQWKzaZsf2kycNHb91wDEZehYesfbg",
  "key40": "62yBHShaKP2gGFP1q4L3CCTuDAMqJbo24A2Zsqzm1qTyneEMeh7DP5GQeAq4YdjcpiMn8sqG4KYzqgapWNL4q9E",
  "key41": "3mUAHBiZHcKSLuqjcvLwfqEuofxXmNbadvDnvY8gp8Fa6fEjeWq1AeVogzCjWzAoc2NVcfHmbhxYooRVYYk5aCAC",
  "key42": "2PPVmZXNk75W61jAbW8Hpt5QArms3zrnZpFze7zDSpu2wGCdBczJbvR5791Zdce5djo5gGDH5j9MCamsf11xEnxx",
  "key43": "28PywWYu7tnxpDVJKauFXog7eZZc819oNDZGCoS4tbJ3Cyk4Y44LCrdY2EjLmjbVacQ69Ry8P2TDaHjRtwjijWwW",
  "key44": "2DMuiF8hG6V8rbFwafjRjQ6S1VdNBbjTVSKAFKJFUZbaTNBspV4fEJ6QMoUoyS66uGGEGz26nACwiFympUx8j1oD"
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
