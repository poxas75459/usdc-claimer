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
    "2b67n4jUzWkmzXEH5jgEK2JHzDjhRtotwifKn5H1o3NZHt3N3DGpFLx5W7mLN7PCnAPp36ztZBARNy1PfJRTnXVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nY32CAcAJ5oZRjr2aKeoJxUtR9YMrQo9NwY6afgW8edr1FWKMJqz3ExT88333SXfk1zeiTWAKVzYD99vjN8W9yA",
  "key1": "5EcFw68P5i9mzr6e1i7xNYFEz774yC9SWML9GrwDXDPUVVkdWvtdZDQTuzG9SFmRFeGR8WKjnjad57PHSpXCFPtB",
  "key2": "ewA8NZXGaY8PqGTpP5sTR4EnmEt5UxqQS42XyjDKYcxUUDauzPEYvTGquUMLx8ndoNkLGK4Drx5jAixj8iZ9Lv3",
  "key3": "5y5NZ5AabSVP5FFKWEZpCBbLp5VdqZHWMNPZQFFn8jtdY37jFh29KfRNyMVK1GcydQ4gvvMA4yyXfCNypKha9eMS",
  "key4": "2Am1UUvtLPCvFrEvNTxpeMtrFRH3V1CbW4AXv4XnWaUHYUbipSeQf7Nh8KAbSKRfPtzR7rCYrW3MUC7H2ppcfNn8",
  "key5": "5SPjjtMxvV6xS6MVhiRnq4u9C5UJ4j23dP7z7HGxoUrmaFpVeNgcKezRCZBzh5Szi7AxQjn32dGXuWbxp8uU9oML",
  "key6": "5hiPQJyhm9Fe15wTZbTqLQR1hj3NGCv1avWy1wfx2hjJFfvu28gcbyWzstgLMFecSzdHodb3ba7C7Jr9Z9VG1UtN",
  "key7": "5zsEdVq6X7zM4K7wT18eHuLX5KL2ohuu5Xejga4Xnh5Qe8sCU1NqVrPbvH5tdWNbVE42xATq17GJd1q5X3DMx2Ax",
  "key8": "NUPrnZ3zsgss4F5eGr3EEHsKC9d8sUkgCtByRWLpVgDVNJXNVPPwXoQHRqH6YCeHQHsZtL1oUu3SEboUk3kfLx9",
  "key9": "4RPXhR9KNgCt6bpCPGAcH4QN57opvDjvBQWn4GietiRHFB311YaNysn1GhnCQQBWuF6SdKp1vREuC2nv47PvPSTM",
  "key10": "4mZu1LQAwQBRJcnTYHATKMjYL92LNzDpxuUDqPQy5Mo4To8kpRBWnG9FxwNqdAeDZ4Vwo3SAfuz4oy8HM8meGMQ9",
  "key11": "54ems4DbEHHtcvrv5t4SefhghTWkmwvJSHbeGGtGb8fL65ab3zieuvA8vUMHHwgnaexcbevpeKFi6udgbXh3dvM",
  "key12": "3nKka5QT329NSx39FbYwqgxtGpQmrtxweZBpN3AqAUoxDzUtSSFrvvyUJtihKwMfXRtbvMSJe8rf7CQ41KhgfYy1",
  "key13": "2BWhqNby3c65oAvPM6NQkxr33Rei4EZh9Sm8KrYsBjw1ivYcMAz6v6G5mTVCYwxcd28acjsyFeLbMVcsTtXYR2mB",
  "key14": "3jh296fpSUQ2EGzwAKZ7D13XMJS6ZA69YCErJw55qRaKtan8n2sXVvfjD8dGgt1BaFtyBeNnY8DVZESnZMaKN4dt",
  "key15": "4cedkLbKigqJvLgqY9WGYQ7aA5LMd5QD5GdHCeCydZWbNq4Zy41oWumYK9rbWHDByMkg4xSwFXHmEgAZCsNL8DAq",
  "key16": "3HPEjmkPAsaMo2owEH5q8gsbEbk8AqBxDpfV33TY49PcunaNdkmVLtnBFpbzBGiSCHo5reniq8QBpPZ7CTV8oqUt",
  "key17": "5C1XoUN2xF8ZL8PHWA6U3QPgse7Ljez6ycTr587qMzz747pnr3WEBYdNmWEoXikYehA1itQpNFuGEYQ1DtAELPu5",
  "key18": "5L4wFkVay65jMAUxfYpM8kQ49j96ofqhW4TgB3PaMFqbCJdNvh3vFXGSftXj8HDLPQkKVQbjfibpeqz9EGWQf8gs",
  "key19": "56cxwQz1oXKZpcXknnowD71gvuX8zRmFW5NnFvzWrnXYsJRpp5kqEd9mXQ2nrLvLfye41YbvH8AWDGdYwztSQxQx",
  "key20": "64UXKKdtZFy4aAAUnyzf1Sp2ce3NCcCmbgDgTpQqKP2dmNPr4XTkEHsTXKsuS7QJjhEmYwyyYnYHgCCF6DdcPLCP",
  "key21": "4vdNifqP3Z93XRZyqs9vuAUYoXArYChF62M3MDEpbnXMY8hfxxG7jCFnFfJ64NYVyrMsWRTpimK7QzRbJHqapdeV",
  "key22": "572rrPzTmJNbQ8mUf1QBBjPrLmGjmZWr1o6g5xCc57wuDb3CDhpnUr7rS21SkGqk6BR3PejjcPmFy3gGYBgQ3wxS",
  "key23": "5o2AruapWboQGarT1sdqmpTfWKnFuAqksptm5h7NndJFwpKQBiucorovdDg68k7uvzLrt8F2MfBnpZv8mNB61TJX",
  "key24": "qDo4xFHh47MeDCn5wCDw3VHQYL5WfiskQ5W2RG8KHvvjf3gw9fCu5QTdQ7XJanUdAwNtD1BitpBTjQSkbv3iQDC",
  "key25": "fZrCr7bgw1DVekRmpAt2uS3jgqUsDKrdTLAu552wS4awMf9yix7hgrQHVVhYKTq76D3evkz9JiiRvmypdKycVoQ",
  "key26": "2doXGK4M9QoorXQ73ByRChSeki11HhzW4RJmoV2zAA3JM9QEYCa3VmSGR1NxeVAHDwitgdXCkUbDkTMLZ4AyutHD",
  "key27": "4E3m7m87GDLAiwNJTvMFN9ERVkFDY5RAKtzuK2EPJ5FRgn9r7mGiRVwC5K3vWZ6eViYf6iB4gTQeqDYdX55rJXSu",
  "key28": "62NYJawwc6k4we1xq4n1GqwEK1Z2UNpArSY7SgSX93Vz2TMyZBCvCWnbFEbRsm1NKRLpRrgcELLT3gYSBgzB5Pp",
  "key29": "2NkHwMsjU2P9WnBtQTtDn5zwcDwmYCaeeU6nxC7ozTR1TRvAfGeqJ3vAq2PpGnc4o6HBD19o6PNTHraMFcnN8eBA",
  "key30": "ExfokLSRnMwn5F2nxeqDP9V9rGdnVjt6o23mrztYLvqQBX3D64x6XayYyxGe7C9qXMRR2Q3SLbDMTQvuahp6seW",
  "key31": "pvgoYFtxriv7oTq4b3JupJ5rZfm2NGAY4rDHVWUNXorarR8TCvjvdesVfjtRfApHpygPBvq8o9LwMG4yGpYvQcV",
  "key32": "5qK8MSVd2sbcSR76yeieRAgsaYZBcP9qiUveCwswFZMKA7pBBkNhccR3RfvSddTHCD5LfCZs1AWmjkzcEJ9UB5Hh",
  "key33": "5ykwmVzsVLv82grzEmn3iHBCN6cfasoj9j7E7zT9gaSqNm7ASht7FmqnYGVAmC1GbnLBsSg3WRaBJXC7RmhPMR8M",
  "key34": "5XLdMxStzarG3L7HKwNrCG5GXQAxCpSQUqevsprFkynaTiLFQAZ1PLvU3ztjLFX5AvDWBUpTsTBKML9mHyDPvrRF",
  "key35": "4W6Q2y65UZxDM8Pgw6SdVt9NZnynyx45jVXq7aVBefHdmwZko9kuqBGjzjYxBwMgZkXxyr7ofjEn6iERqi9SeCfA",
  "key36": "491Ps7QJBbWGcU11J9KtaYyKkXQ4nZe7Ju3KCgvKjGNXni1PMpav4XVTSy1nssdwFKeA6As9Zt4rcUPVcks3xV23",
  "key37": "4nitR3KnMZ7SPBLZb8TxuzsEowGSb7J34QWJsaex7879E9fsmyKJiQjL1YzjhKxS6BqL1whr61ojjAC2qwxJRgjW",
  "key38": "3BdqPHk2wAMjLkuDdBEfDye6fPNW1oukrC6YyFoaJajqKLLSDP5gUuUjeE5t6miSi1NL5SoNVPfwndtHXHHu6TxZ",
  "key39": "5CiMF6eTtMwoQFUYKPHpD7YiDrYdiB6CNMHz2JZXH2fkQ225WwqYrWeXdFeiinNYLMtKK4CoovSprXapJx3p1k38",
  "key40": "3BAws1ZTBDkFgZEBbw6MX9ozbt4448msWQ36cvsARcDGBXwVRku8pFDhm2SkzLXp3zvbT5tNrSto9t8h1N8HHC5k",
  "key41": "5Uf934hiQ9RHcNJAHfydtD1wzRUWhsm33VCMYVY8AUghpCja5mHEvk5oBa8rgCQqWQ4g5DYWRRtdNL6HMk8EXGAS",
  "key42": "3gs7noTm12WLmURs9ZKB3s3UAyMFgnNW3fAviRVKp7keZ6FLfrQPFoNfcNqUERTGCzNrGHc3VQuBJD7uWa7y54NP",
  "key43": "2SxXgqXy4AYi4nL4MUhebwYcqJbbko4gR1Q6r5uCSq3EQwkQZ6eU5nR2eWMVjg92xER9xQDhWERJNssHQpJGQvQi",
  "key44": "4jTStMEHTLpQhrmt43smdGQHDCKohkFGmcsfZbLBKXnKuip1FRMGtDCtAohimChReQLJLP7WYfUgvxDapmKQqen8",
  "key45": "3k5nYsD4PmkbEhUNAuuH19X9Rv49zCbTZnk99stDxAqcJ7aYEP1UZnLodCqznTw6d21RrXjCVqL4jMV3Sr9BAX4Q",
  "key46": "4MrD7xQvh6KatFm7hfsWQPQTkR5Dq9qyiK7zuFESKGrPsSPYeHY9PYFZZyCqkC2vA8mdceRKmvtq2mxPysv8aQmg",
  "key47": "28RfpdAN92o1G1JL18JJ9rj9P37kkTaLmdbfUZD3B47pPfEkB3R5886ktf85uSS1KaYQ3k1Y27ZsaFZo7pmfXwmA"
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
