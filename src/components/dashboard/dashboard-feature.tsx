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
    "4kPM4taKn8VxaNB9VFTNJZfWCtq2JpYTJqcsV4RyfEPSwmFRu2cnsemtmYbrDwVn9QKEtcRv94jXdKnWgLj7QR95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WEnSn7Jqk6gDbfDPKqvCPex9y1McBrXMYiJeMpkwHS9rrYcbB37NG1gAN8bJquSGHrpbkQR4vk6yxeE7SQEyn7G",
  "key1": "8F8KVjjS4yeRvgFKCVkYXJZdnvpAq2ZBTAiTptCkurhM3egPyTvy47Ewc8oWuJKMswNr8W7inG1sRtnwPCFjmVU",
  "key2": "MbdTWhmaeqxeWNUz6C7oJQCgaA4EefUTuNeB6pWrqfyndBQo19C96iuF1JHxpCRGrqGK2KrSUDcHU6ShiAuec8Z",
  "key3": "3Fu5Awxoy8cgB4sKxd84iTPrvBT7nktLGSsVghAgYZjrPzJWwYN546L1bnrHSVUbPPWmzTZNHjmEa7gWtq2kBZio",
  "key4": "3NEsEnXFHQR6A7gks2kcbXe4weTgVEueqM22MphefLGMNGgS8fsZ1r8ZiNnsp7pGMqiDw7Dy8H9KUVp52uH3mYce",
  "key5": "4ndbwpJLqQvRHTYbKiLboDed8PbAZkDW4kCoVMuC5waUJfQCaUrRa5PWXKsbLeF7jF8w2F6cihqNsY8tmkzwMuLX",
  "key6": "3nrebQwGMtBpAydSgYapomzSHZgT5MpVtpPPSS7PS3cv6GmifZZ9mYW1jA25RVMEkyExviCvijKEZAjV6WQR8tih",
  "key7": "3WzEeF2kvnRuyp64QUi2Fx4e4Y1B31LXTQP94C7wcihpZH9TDAMq2S1sFJz93pnHzTvrhPfZfWFx76eAgRwsDy5X",
  "key8": "4Hrv46faCqL2YFWU8hgyGmMKfZHmT3uAYwUu2dLY6RpqNedxChD6R4d2HZvLR7unRQRWXyj2N1Z5AA3G22xrGaxU",
  "key9": "61ZpyW1BU2z4pueU6Np6rmvwSHeDiBWK2C6UDvYuhqufomo2B8hZCFCovuLyzfAGhNEn67GgN2PHku5HNnkHq7rX",
  "key10": "34DnrznVCRZ9EQQ4hyZFTu83Tj5dd2q9VUkvRH3BW8vDjmcxJriUATHnfKFEJTFyea5cJoJQvpSbYwbq2PZ8syfc",
  "key11": "3mNwCaQqiNRvGbgd4RsBsqTNzmXciLkjM1zAtEwFgq4reJsx3zUP3wRtDQ6YWwAduc946NfB54bbUFxap8nKwowm",
  "key12": "4exbLxsK8qEjXqnfNJ6ANHGYaDLrPvSQrHcYWnwKFDPvJsLpivymdkkcPGW8tudQRvcMqMjQ4k7NfFJtMZJ7TkeG",
  "key13": "3BfRVNYfrf4yMMRfWjqLP45KpXBbF2gdR9ULnKFq2CyVYHxB1cHuM5Z5oNpf2zZuFYzyCjMXJZD15tb5Y1NRmiU8",
  "key14": "iHh2Hp8B7dk2AcJWYLL3nj6LGukFFZpDPbbpu9ZffZ68qAxJys8UBpFfSJuDQkb4D4F6tBeTAsJsa3rqpCGTBoL",
  "key15": "5Pa5kvWYwwjjWC6Y3AsArkzZvr7ERwvgfkGEJqETJvAe89vVuGc4rvr2ZyUPsxbiQCBxpZZJiarNA6fgoarcUzTx",
  "key16": "224xLG5qRxzfiptEcYW7bLR9fDMn9ft4oTzN5CGoxCWqRdXTtv4psabEXJj4Qtj5emBUkC36PgiwJ4rdou422LnE",
  "key17": "5HKnqbGs5Zxs7fyu1RgUSbkWostYnSjZy5oWcJKYWzf2nueyPsHFC1saa89NmmPLoVMeVx6rwCQcNKtrhq4jjxxZ",
  "key18": "5sZTBC23rayfrGsuwFWNgWjh5cBUQAr6DS1BtiP1NabFpiKCVbxo5KtSYUeMZe5MYLgU2HFzxW24yE9QTKxB7Ytc",
  "key19": "2mbRv4hsjGC7pNXSjsz7sqTC54xpToxX3pVYKrGftnVH5xi2w5vwa52ZTSNYV3RYbWHAmaLxrNkEmESnzgKuQSg5",
  "key20": "67E9qyHDg1Gd1NoFGCw82bfgDL4BvinVHZZpXgbHbiuFS1tSooEQR4Y4WXCfELfJP6UweU6p4PxZeVtDzbQquxkP",
  "key21": "vnxzUyU9b5aXcMgUDjkUNQ7WmjSMMk6CqEMjzuif5XWV8hLBh6uvjzVwD5hTVhMDmkCBzitRBsCasrR15UGm25t",
  "key22": "2Sx2YQFjdJF86x3yrw6ApDcFhP6BUZUW6Qco5ySJJxYdftFqvJhqULg1ba6AtV9d6TRZYewVz84Tf7BXWNAuhhkq",
  "key23": "5d2cPv4WseUJTvSa7s8YWBniE5koLBtZodnWN9LExk9q27KyL4JtNNkSL4FvueU42pLcPk3r7aT3Ltq3aBLPe6gY",
  "key24": "5h4PZC3tAEHa4zjhEzT99aQahgXLKVXz9C5q7FhmpZv5hjnYpXMhioAywjsdEGVSz2N8V9hxRW4EFVGpprm9qUFQ",
  "key25": "3eAGqbYTyZHt53sEYAh9SXSUa1zGUDaWBi7QD7q4TKGeFE1cXte4XMhahwXu84ZVjYdRcJioi1oW2WBbuFdqvQwS",
  "key26": "3s8W8vjeirKoNiTkezY6WVyQAFDVExyoyGfdurJKbCR7uasZ5dnt928ffVAJDV39DWmLwsZFoMRGCcoGjfnjQxme",
  "key27": "UJqJ8LpQaxuzdrB7e5Tz78kBfRq3SiaUkCJED7vSombVMy98AUhfAQR97xq96pQmJZKZhPRpQgMS79pRecN4jvn",
  "key28": "3xv2VzBchQEZfgXPWASZFjpBAJ57Nvu5VyYnYexCoYLUSqwTiDPWR91byQwmoqVCrTSCTnPfPmLSyQ4GgjMei8ky",
  "key29": "5K6iUZEcufgrfU2Qhi5N9zkh5KviTajmUeoF8BpDdU8QStAnWxpXkcjc15kfrHjQfVw4QFaSW2G6qdreW6Z6yZ6B",
  "key30": "2FGf4aJ1vhAvkwt2mx4AGS7DWsS25ZJssN9bis7tTbX6V9YxjVVPrPdcuxXTsiYsxima1hJzeT5CbyptarM6nNow",
  "key31": "5QGBqyx7c4LeCjMaNeQjnpaLm54ma8BEbFe51A8dFDhP4YPgqNA8RhPvpweESJXfCN1QbWPCCr3QfrYRVEF2Tfim",
  "key32": "2L6hdTKj8epaCWeHnhaqiuzqm8XCJNiS2Xvk2NSYSdkUSuSkwswQFsaBDwpEJ7WXFd4ZjJxXyTcg5VAB5zbwtKiQ",
  "key33": "21TLFYPTkg32vivXMxDRfGxhMz3H9yTUDfCzurAdLDX6qLG5zPqPhdrCpLGJjYJtEj8FXrmMvG8pz84Jz34VPyGz",
  "key34": "624NLadUNjzQm8SM55GNoz3iLrgUheMHwVq6m3UMewQWznVr8xTaEdvy5d1aGrP9yqqhuSGcuKXmJTuFjd5pFtAK",
  "key35": "62oNANXvkSNY8jyxzYTRTRh4SCqFKM1AE8vKZE3wNvzZQC5eqR6gPvR2noj8vqfTfcxykezsuYu8jcUnadoG72bJ",
  "key36": "5GaPa6ouTeG8yQ6Gi6EUmL4zk2n2D25dkhKgWykxX3ExyXoaVngFx5c3fAFmN46s7WQ7v4TJtFU5zj9GCUVHVmCn",
  "key37": "vEtXPgqJ4jZ9YKfMxE3WbYLxcQSrkJqgGHtfJ3NbW4jAfrFQagqZZxDqdHmaKUujCvqayGVMYZKpxX9khQfaTDz",
  "key38": "3fjxMhM3vGvQt1SFwYbGhfkLeKk3M8ZtfDBznmEDs4TSRHBvFYD5wbgpeM5NUDJ5NVrAbxCpE2Zo3u6ku3upaaYv",
  "key39": "2REYoMngm1EcN9uLkhZeWbUFN5FYgYFrjaEWKEchyRsVh6kSJuJKpkEdYwC3S2LVkugvPradweHsD6weTwEeQ9FK"
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
