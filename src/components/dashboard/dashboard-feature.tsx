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
    "3P5s2LnrqHL6icJwjJbL1CrPc8K1npWfJPsRp624NP8kt8xFV8u2JK2nM7ad4sdgBNAUA5CHBqaYtMwAgrHMmU3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32MzAxq1K6ncAG8EVn9DBEx2G8ji8cPduhWZNkvHGgZpX6RDNGBRpeeqXCbHXMRDedYE8yejft2dJPia9sLfEkFx",
  "key1": "5aLHYVu3tqJTz1oPZQYqeCEhmGrpCAoHxgquijTqwRQcefUqfVR6w4XwPmPUppNi839CaBPLnWDQbP3uWgysBRam",
  "key2": "3zLUXnBG7hHrZMLUYY4K4dr7tFPrRFKQZcLqw2zwhR7LBetakmKsYE3h9wELjiFgVps5Cn59wMKHByWWQ6KSW2Fu",
  "key3": "27PLr7HFvUZfQKW1amPCDsYniQUntTXGUrnFpKUEo4vcHMQB6YEGb4sL4D1bXcSHkyc1AfwCcCz3af9U3NjrXqcz",
  "key4": "3sPiLEr8mF6GTvZEx5HKcSAC18TTmwHkj9xiyZB2taiobPC3eZzLf7zsGnm3nt6FQMXeujqfj9WLwBMcKP4sKuE3",
  "key5": "5yCHdjAnGT6ZnPcdfxtABvB4uf1JCnXDnk984i7XKDarGcAFhPYttG6VWEUgZjm5db1XQS3aMk48nMgtH1Mi3XeH",
  "key6": "4fDrsGTeNcahw18frcTatF9YMCmm2Zyut5rPXvNf2g8GbzJfgucrUt972erAiguMvZH8wrW9skyL36fWTurMk5wR",
  "key7": "4DWAup33cbTgDDRGnvkejYUMMx4xBtCyD91wWy5BF62VJZK2QTwVobxB5nYExNpxD6mrSqTFzcRcKSFWveiXsHPw",
  "key8": "UGnm7AhsxFDy6ayh39Gxkrvta4t49Lk7iw4Kntk7vrUvEhc51APQD4e1DTLk2iZmmzrVuYTw7f5jkJFERA92QVh",
  "key9": "2NiArsDDg4Dt5z6Mmw4v8f4jue9KQTinKXWu7QuV9ydyociR759utiAqTiRPsUSy5d8FUQQRDJrSP7i7878dcp7Y",
  "key10": "32FDAeDrcBjkwHnJCM47sEs6qWprno177MwA8aAPvFjVLotnkKPQiaw811V6Gys7Vuf17K8LrKX7atkfb4YW1Cvc",
  "key11": "2y74pNMsUGbLXmQrVi6VvCbQWnkANez3jmegn9ECC2qWCmJEpepfW2wYcvW3ZHyYvsMVPpQG39QJv4mqe8QVRnK8",
  "key12": "5r7ybfYSzZgc8bXJHjRKHMwKsyQLiFvjnnPJYSdgBE6RhKmXg65JHBHo6W4yz6nV52fx2hHT3SeMxwFWGf7swBJh",
  "key13": "4H2YvVsSnidJFUxtwJfwBbqGM1wCjf5wwAbT666WB7vRM1yUasjM1yUT46y1gp47pzLgegCzazjyun7yVHqiyCYb",
  "key14": "5tvcnLvWsyn1C2XdXd5pFBDR1SX3Z75FZ5FVYYEssTQPU3ySKs4jdia1G1rkSSDcYDX6VbdjgFfefTrDvrieuVuZ",
  "key15": "3LBzYYrBMu2GNKuAePRrXSFRw8dMumcUqrfoGCvVsbYB5gmPNyQYWvFtiouSXrWHtbRe1MNbc5enDpdgCnEhRMoJ",
  "key16": "5qN3azph2uubwikGDjdRP3H7xo7nAN15cyqQxeKAJSop5sgb3YR5V41sYJ9wmBhrTbnBiq6sC5wKcuJhCzDVx32K",
  "key17": "5szPYFZcVwSNMqwYTzBdacQim5EYSFf2TsPW9Jt5DNv1iDHeA8ftjeNg8XcwcuSkQAeu9QB7ZDUo174L1m2rZnYr",
  "key18": "eV6jANeGUTVqMYYztMNtQPnDWQ2EszWbJ3wNC2QWGDmPH4vaM21M3B7ZgNYCDKG1qvhorzXMbtxpYDN7yPRiebu",
  "key19": "5pVCxpxL6q4uMYMnYZDEGNL9KLBMHdteGBiDLTg43o34QSD8FLry994rW9EtDBbi3yuLrGkCQG1C13XZMoUV5BRE",
  "key20": "5A1dtSywzFUdJvLhbboGvdpNQWXbmZLYwSybr4t7j2N3nHcSN8JNYdqUSY9DPTtUF48h3BpH5iDX8HHU7jVFnczT",
  "key21": "2aNRbcEZ9uswYNjAH1mDWQhsczcDEChH76cS7T1EqnNP7GAARxqpnBtgyyRS4KSvrPXaxU2CvSHutCbomsQQHDfc",
  "key22": "4u5uDq1G5w1xc8bsJxsAaeropB83LpVTEW6sx98P9bwt8BFk8c2S9HRBdRdyC1YLhH52Hn2iuxey4MZBcva7bx6u",
  "key23": "3Np1Uwh1UGCgzMXmMQYqsCZdwiswbHA56bKHLDqg7f21k2iCGtUPwS8g7dqoSJZN8kb8g8etHE9rzcdxsrzjLLF2",
  "key24": "hWrUSUJATFxXx8hhH6FEmS5BoC95X6KLaEMRYtrRay74MK3Py125VrqFiK2fZYb8VEzhtcVQ2Sw9NnHH284BH8h",
  "key25": "4otobBrt59MvqcWxgJRpmbpSKCLDACfiKT3vuSiU3q99WCfpjHK8pCv4DaFjp3oofE91oJF1A2N6t8SPkGs2JxTC",
  "key26": "4aUgLBkGXvbHGk8XwMw9nXvXDZegFQ97Nu6Ybs21CpiwP2aZGwbTnactJsdfxodhMPScpWtdC6nkCvEyQcoLF3u5",
  "key27": "44guA6NgUzACzK51QFEhRrAf95aLDvCLSfk3o4MhttMPcppfFfzLGkRaQopCKpBw6zbCDuiNWwuc6ZTaKkeVcHSZ",
  "key28": "8UXSACRsnfUByDJzDWdFZUEdBb6AAKmAXxwU5jZGkkHMz3ijMYMWLGbbEWtA1VoDvacD6prLHFFjY6REobazZFp",
  "key29": "2GhqtCRavTYuBht6nzropPkh2ChVqQsVwFtSkRM6TVHQTewvCRgVTrPcEbeA6zovnWZW7tAAs3jmcpCdCPduwDcb",
  "key30": "59NMGE687Gg5NZhwfthJ8HphDeBCFvLLZzRErD8qFexgwAmWx1NKtEJvRSKZebrTS3QioS8mE2zqCCrukbGMTFCR",
  "key31": "EWQyH77zGc6FdghMk8wjaK6TpTsd5EPUMdh6qneJevru43orZMFB1p4CpyrpsfsEfAFuSZefRa1gtnph19CwBwq",
  "key32": "5dPY8emXU3ADnRkn4VFMsa8ktcr3WZxxywA6VEKxJUxaeExvjHfG1zXgLRTpMQ2rQ2pMeQg1SjWm5mAcvzFjKbYt",
  "key33": "2GbBTJP2qnsU3h5Py48qqxMBLG9BztjpDbPMzFayEDDnGA3VoeA6wQD1bgXDB6KDmAQja3ShGs5Ba1oo4EqjTJhn",
  "key34": "5DwW39S4TYwDfvMhafHJraBY6BzrgUb1Z8G1ckqB66o9nXDhDwu63hJvSm22dxmg6Rvy6s5aB3g883Snns3S6NCM",
  "key35": "2usnmbqLenx95UMqExbZyFZFE6KiZksxbUFK8M6fD1CkzYKDvYxBjarKfkwhpiLYxkMJcwhJz1a6zt3GqcmFEiQU",
  "key36": "4WbpyMXGeiAvXVKjjdidZvg4Dfc5XLjnTV8ThyBjkhddmQtaEghrWRskcTPk2pyVsKMZX9Rny8PxCCxT5aAd2XvG",
  "key37": "5FKeArfAurKPJAdpnLzzdhSDN2M27bZJ1ZxP7iHieNK8SenRH6NmZAAWBeM9WTVVTNtGKE4PuPLbLNBHVzyzbFLf",
  "key38": "2u4f1nR3SwzTtFmT4nGaqG89zhc81LxTAVTKMbLaG64VVkEdMB4ZqVFWCKnuiHze6RM9VA3Zx3puZ6i43z3JtPhe",
  "key39": "HBVjxvVmFs1n8xCfYPvDMkePRYMCPXmzweFLsoTkkW1xHFccU8rVJs6KS3VjqxRke4yJqYNUDMDyj87ZgTmtiNX",
  "key40": "4tjZirUWDY3o8So3PSt8uCCB8nGAMz9oh8DpaQmRMpRKrhgzLxiLSkDWDjeqAjqKot8kCXoF2byKi6pEXmY9TquV",
  "key41": "2BD3ZwoSSibMJDdwmn6Ja1Cbb7znyuRdcWmeY3tAs1TXb6CSytSErBcGLYWNN9opVTw23YRjBhJoQy8JPoGN11r4"
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
