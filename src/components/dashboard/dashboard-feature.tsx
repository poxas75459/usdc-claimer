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
    "3Ui9HXHovH3CtHmrFxL8Wpy1ZVrxH8TAycSFGv34uTfzcVaU71nNqFwVtqHBoh7hZwrGfJpZHWyAj88EQdRndtay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ub3PqE7YSFngsBNuqA8kZc4L23xWBxvGxc33mNsk5mh8hiH3bCjqb323CoZSmhoMB6rfm5Ae98bSHLr2pGikvcG",
  "key1": "2VCs5xEbdFJTA3wkd43ZZPnthV1aqpgjig4D2YmmtVrL66nYknGmQiA7jMXaufW6RP3RXsftPMQipfucKiZnjTV8",
  "key2": "2MVRG2rt2PAq1g6WdWz1nUMthPTiwqBFziaMxLZiHBwroQsBGZn514vDyN3TnDdXgGr5EmfyZ9zx5CZMcAF7FLrK",
  "key3": "3QTUeHfyoLiKTZbquhB1tq1mnoJzaJaqeAgKbxqfDJF1MBJpU5onbWduzxhTBGHDgbHLrNFoWpwqMTWp8ZDT8iuK",
  "key4": "2jtFZ141w8n5vSxyhTSxYHqRPTduDKEu6QbTntV5JyyM2kF41aM4ieuD6FM2ZLr5bPfq8vrLhAzAw5AxYNoMMh95",
  "key5": "4e2mK9xVxCvRaXWFLJsaG4sMBu3DKZsn4WZ7oe9LUNU1zosoAHX5BS32ifaTGxNa49XyzqGF1rQue9fRN3hwzP1S",
  "key6": "5EPJJTjdBKdMAYt1MtahMEfdpjA4ptH84amuYYYaNiuYwCAYPBTVFtPbYrrNB9hjuERBQZBYptLLcoACvANRFBdt",
  "key7": "2iQ5xxP1GNDAU63qy4rJqFRiqAgxWFwXhJF9rvwHmWh1WBAEwGvtMqXBahQRp2kAmUDfct5rt4b74mdsZGTBqJgw",
  "key8": "5fgwimUyuZAfuT8C84mM2HJCekPZrWmM6s8aqZKJoAT2mneu87PihWwNvP6jr6SH7ecf3yTGNSJGWCcgJ1WcfbbB",
  "key9": "5sNpCUxmXst3rtz3c1EqQjoa5a6LLjhZhxPBE7KnKjkk3J5vV9wqf9Z9kkMMLtnwhTyMhzwwRaC3p8U3b8FBQ1xU",
  "key10": "4fA2TX2AHPh4baYNsqCzUTotaTFh5sWtfbumWStjtmrmFd4xcSgAnRH7tQjujCgZGeG681UsYfxYnKFYpKTWo141",
  "key11": "3NfAk3GxnbBXMy3HDffw69tGcEmJkuYxk19vSDDNJUYsbhVduZQZoyNixdnSsBWYJPiGZtXhAX8bC6kywmhsKoRi",
  "key12": "27mSkb42fLVQzhzjpGMcwwxHCLmMnbfmKsUd6BaxVViAL37bG8J1nEWHnWeqTeDfZxFA15jK8bWCvyhcm9jMV6a9",
  "key13": "2wK1AnD2R1a4K57NZPJMmyYePqJWZQNmJketgb2dtSKDRranzsJHiKMbu76oJEzC2s8t38dq6kPvrUMfrxrUgzdz",
  "key14": "4M2s89tBDVXqnfYGbyK7uLGaKLC3ASRUmyLt5Z7a1mUy4Q4JJP8qudDk9vSWC55fba3RJzHaxLN7k29uQ6UwJsMw",
  "key15": "GWnUseghvZdQxTn54emgCZwJYxf55Ai5HCGN1VPvJxtVqcGtMvbpcGZHB7ogMae81QGMZfsZq13TZXyvfb3xSLN",
  "key16": "37ZVyLx6rvC642gp8Wc2fMVsiFdNMKJoCPb47EgCXNKweAPFCrND4ji1pxQPWnbPR8rWJobFR2QK78jHijXEe3uN",
  "key17": "2KF9SccB2ywvjQ4F8CmXzcysx9X86DHKBwumdMbaHKswdr5kyKUtggLzvSVxpjqYWkRoJTXpAxYom8FXrg2KMaRY",
  "key18": "2fGEcdf2x6nvmsuqbYLm3PpU1s3v2sYspUjZj3oSdcjtpRJUWiwGNZKm9NCwh2XDwNj1ZAVhBWWLwNuRpsxKwBuc",
  "key19": "4H633BxkPjsJ6wMVXHKPR5g2wZGiPikLV6zEBwS3Qf5xW596XfmLKPbPAsKndcGGGNcowEKEBPUUjNJ5DeUBaoM",
  "key20": "3DeiBda4PnVXBM6chfn2VMXuihFtTBvR37tZje2njJ2UncW19oz9JwJw9yEmjYos4z41JVG7D6dDSv52eeHpQAMn",
  "key21": "2dCZgFi4naNqFYTYZu2g28nCTt6XujDdutjXDzenzLQw2RSMYmhED1AZL4V8qMJYeMuLKkmosEsEMAx7Mg98rfg7",
  "key22": "4w1sXh6oz4pAZNHKYFMqp6YnJ3ESsnD5XU83GJU3sUYhjc5eSiqzMUkWDvrg68aNBEomgqpJQcTWLZc8XunkLzcE",
  "key23": "5ssAVPsypyYDBNWDc3c8ZTLcdatWXx6pBKfA7SBYu4ZswPh48dvfupGoodAn7gNUSQYuv2WjT3CS7YGBNmkBQ9Di",
  "key24": "4pAUPSa91sp4RQq7VNbqDRPd8QQsxL718TMfkBDJH8XWSmEDLXvPaXL1fiTCFtrBEUjg55jE5HSn6bTXezH7Zdaj",
  "key25": "3BUKfv2oe3Hmt5nLik7DyzUHy18YzdxSQLRfzdfpCYZ33h8TU44ZgkujUZe68kufXGWmH4PLDM8DNjjdZ1X1C2Xd",
  "key26": "2ZfQgQr3i9SwmaHkxPAksVnu62es1Bw51FbJ3ptgmKTAwPzKavKvuzptDGTgHTJXzMHg1miYzfa5qkhJ4KEsEjxR",
  "key27": "vQUyjoXG8rAuCBVynr6RJ1FAD71S5bT1z8nHyaz4ccbAuhVZ7Kf3JieK9Xc65chqXZAksnzCx5ivcVPo3ixjvtS",
  "key28": "484Rk4CRsiSb1SVofgdX16Axt7ZtkZ3G3ngie2dm6HJkq2g6zidHxjLCebMW23VgpZE3g6qDppAWV99GmLRA8dU3",
  "key29": "2ibc2iS4NCHSz5SEPww1VLc11XxkaDJGHa7z8Q6cYFT4a4m1xxdWQLAm4hGnvySczJictD4JhCGKfjZxyb4Qi2Jb",
  "key30": "4BpTrt7xsCahExYpNHLXZ7i1qoNv4tvDnCWtJPgFqKixMW8xMgMp2hA8qnGEEk7xCjAXWqKVQ46xW8Fx53MvCMFz",
  "key31": "2jZapZYvanyMihYf9TPdLeLCbwYaEkANn878o6vLYKJNLFuPxozH7Siv4vqQ1oBnXaWQ69iH5977G1nAqKGde6ZW"
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
