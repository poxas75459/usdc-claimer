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
    "3RziehDEAo9BVft7GdaS8jermzofRFHBwVtenQc39rANhyiqyNCc6avWsXgJh6fRs3mXycBp8oW8zaWYAvjnQ1Yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XGxSSgY2AXynqtKTa6ZT65YxXBBypw9KCxL17NvtF4dpwxNxxnCKXG6nHJHPBgRKR7n9ieUWTRE9xSiymb3dcug",
  "key1": "35Kpdjas2ESRLXedjwREGYEGS93UHNK7JdFsNNz7DEyodM4gyvyey3n5BQhjTJARRDAeQzDK7V9DiDpk9iKCPAJ",
  "key2": "59nEq7nDXMzvsFWGGBebfrGvvpvyajDHyLQ9CiubPmuwYzg2RUF5NzHx7RcjrbnCJeaUc5bduTTQaD5yJkGBoAaD",
  "key3": "yREKBmF7wTZW6B4FVnFNnF9KgEBvLCDieDVZ1sQTrKHQYT4yiRVA8ZYxDsC8qpF6pHzk6XhRazieoRYZ8zuFvgs",
  "key4": "4ic64pVdExqU966vzqDEYgZfDWj7rAZZePRpgNCqPW1K35uUERNSN2aC6cX6NhPU6s739ZfngRoVrBzJNpvM9wmG",
  "key5": "2MZh9v4EkhTG7ZeuumguCGu9RDSLCSMCWw2qcaJZQrhQasT7q8FNpbFdWY8bVgdu9qMizNpHRh2uURpFVDwRhvNa",
  "key6": "3c1b45FX7KaJKDAWhELxgwoDB53duHoGxkS5v3Aw87Hpc1UWySmYHs3rRfndSMDQHDNbnxNf4Ztw39CXfHbnBYL9",
  "key7": "gvzZHNjbqeGr5AuHojgmrbTma6H397zbipj6TCeAP5jvAb34AKKExr6rYvZrjaQp6vnFFs6oGHY7w68DqgvQRHZ",
  "key8": "2kesQK3ft8xUt2nnKK9ggFzDz2QXdTP4c1FYfY8cGFDTxgnBnawvvpUj1wrs3tRqcCbznKyooQnf8dKcj1D9T5VG",
  "key9": "3qbviiTum8mkGZttYWwNsuegregtXvvBYUA2V777rM2PS6MzyhpN2AYQ7aDZ5Zz3o1B2EU3JzJad8yirr6evvWUw",
  "key10": "2mK51KZt3QnrzARmgHUrTHCtosDe45nM3oDzD1TgeM4qEQjXmQkEnGATdZ56Hq6vg9F2CZd7QNG52td5TDC18efm",
  "key11": "5FdiFUsDFQaZMMnpjjhaepztnWhNFE87GejYKKoudyff52J7yEQxSq3U7f2XBuenfSsFbADMhs5cvruEbpnqeCH2",
  "key12": "T5gqqXzumA3fDfxEM6Z5C4U6gWHQymueoHoxdtrmy9zRd3mwbyANuVfsNWTMfus4JotpZGozQPbgmaGEBMH3w5x",
  "key13": "4M98sppaSuLtdW2uwoLj6Zb5Vhc7wV9sobGXLUr97MUSDiDcLz7bqrduEZa9ojtfaB4nhdKd2K2YVEbV99ZzBMz1",
  "key14": "3Vc7WF3rcKS6LY1hXkmfaCDfTLf2v8awYPzdsBdFbkambqu876uiuXwbWpYJW5TQpEzJiwDf4AxxPULLg2ZRtJZj",
  "key15": "qbgXW5TrZ4cN81C8cS3P7MQ1yVrv4YbU25WjwyR6sTH9ZtHnwPPPcMT4aPRSM8bsDn6SPhnMBXAqGZUw76ZJfD6",
  "key16": "2hiACyviJ6JrwyF6Uwp7JgfztLNzH39rziFoEDA6KGBA54FiiEhxHev9yrjw4rhSmhFacari8aofAaXaDMvHCBpf",
  "key17": "3jyYopdJANEejTTW6QfyMrxBQVbsUH1dPWAmP6gBR3rezKV7hEaFdMEqpsrjdXRCHdsJUS5jAkcBYjyZrjEkko1F",
  "key18": "2itkM6vQ8aHjTixqHpcsDbKvPQhUS28wwhvwobn7TiKJ7Wf7e9jWm9Rw7dNDbF4DhTShYqC3PhS7xUtfPPSQN5Gm",
  "key19": "iAjBjRfKQywc3q5LGg52iwYX28yCoygVHbdq6XFCybuKHWvEsR1fxjWt8P4swJQxp8XSDVB3AW2wLHuQA1f55No",
  "key20": "3qEhNVLmrHDxqFznH6drYNXCvhukg8PFfmspYryAvxTFvo6NjqqzPd5eSVsginDqLR4ZNLUAcUoee1zSQxaWJXTd",
  "key21": "61ZFyEwNPHK9F1mFtivpKiD9WbvbFNNnP8thBybLcZQTEX7B9EhhAchXNfH7bNYSSHKd8iRnxTJnCDnpDCAg7U16",
  "key22": "37Nx6H9MHLwPiniZ4H5EhUGT4kKvVCYBnuXpdGamJobaLA5QMtfwy3TGn9kTAf2YCQHotJR5fsFmxChzMAuTb5u6",
  "key23": "4S1QYMc6VZAtpZCKuC2vwt8YXQ6NaJD5qwUCcKHdAZ6dN1tL1JY2pSJwuAodrPMbYCi6UrGvKEEoE5VYoErJzPpR",
  "key24": "2xyzp8YXag7SXS8WYii5DyrZmsRVoEZPhEPXE6LTUzmXHnaaaRoQ6WLytiPPu27WBr7mUpv2vHBrwpC8Zh36zhwJ",
  "key25": "4r4kC7bdi4k3b4iFxY2Y3gVoRjniM1Rw3Xf9PSaFBpCCvCEThfzo9BAsCzyxAc1vDfRmeu1iGZWwwVrYehHMdFxs",
  "key26": "567qETdaPxMd3QqeC3vbNXPVTX6f9KJD2qv1apViaGLWnUb288vTmtg1sABYuDBwAbC5qHdvCm9DgUwwiXDiqUe6",
  "key27": "3eqRcrVukrfRCNBn1Av11mCu2nBZzf1aQEDzTkxRmv12NfWtUKTNbCGJW9XRoYQEXRryFsijHZeKbnPCXaDyP4Vy",
  "key28": "qb7tPSaEJHvpVcutYvz4Mv6tvJ93kTfbavsS7oWARq74ZuEZiv7JCDauqxJRSJp7PX4uE8BZ8PS8So3P5VMDrLq",
  "key29": "5ZWr4QmeUT6SthcCVrNRNoCDGMFoX4FTYCXGYDwKCmYPgKcHDn7D6X8haNmFynzyY7VN6ihgdTjcDYwGNa821hXe",
  "key30": "4GubWAqj83QiNziCCn7x2zd2PS82hxdnQ6tg8uxt7rhmSYYLtn2VXR7f1dERFiJpUWSNkKDjPP5E7FeuvzTR7EQR",
  "key31": "2sxhZNT4ekRNMavXwSnbcgJjwqvqK4XSBuCGcAAuvuYjmgzqkgRnRz3ipj2A9e64ERiJMmjrG8Lz8fSnjF34dpsj",
  "key32": "3ZuT2Jd6N2eoEN8tQ4UUKsMpytjJ96R2FNhPidxa9pqBvSF46qQiwv7h95dhJwNVLvkjQ21HBDgeLV8k1Jk4UZb4",
  "key33": "D1FiVqMLGHb1ie2nSQndn99MJaT4LpcYtiWSgK68c48SyzECZkRv8tgVMkvgc9FQzfWj786G64RET39BcicGFsL",
  "key34": "48pgbHFsuVNLYWRJ96y7eVE7RqsiUp5RAR79KM227YfgqKYWxQH4HPbYgFQHWHHhTupbbouZXDjGLScCWjrpwKW1",
  "key35": "4W9cK8YbrJ6Maxr3uozELU3zuPyqhVehEfEagFX7M2RPykeVy2BHgYfRuu7vDxMXKtpu2GXaG9tJQVss6kJqJca9",
  "key36": "2eGyRCt4fyPUD7afNNGVoqiYUCDB2uM6csqfhGSRRRpdsJ7wKBFNxyMRYg6BpucQiGHQveKVbTf1a2fWpUtREfPu",
  "key37": "5naLBcFBAsyNWR5UYLGsy66AA11KNRafrMKvbACVSd72QEPvpCLk9jBhNUCKHhbJ2VQ34XnpmagBGv355MNGiFJU",
  "key38": "2XjaMfgL2gifNzdG6Ek5z2PjrHeaYzK1YtfR8Tj85fZuHVP8Uv9A3in3nPT2fYiu47vuA49BzMAjzMgxHkS2Ra5r",
  "key39": "3E1vNyn4Q9axFLi37YApaqorraSVhybBTHdu6i6oktaFJAYA8ajz4wFuFX1tWH3o8RiAN4vVcnrsXQg7wf5PXJqd",
  "key40": "2txdTDnVte23oNK5G5uetXZdTyMyuMp1eUPZCTzMMi1oGwjvomYtzLD5uLzdy3wr3NTHF8eCVm3VNrzXnEJ5bHXZ",
  "key41": "57rZc4MqWJXEKARgfhzRpxJUp7fRkBThVbYA5agxbCxyKXMp7NwtqZPvCX4w58SWkNnyxW79jpCxGU2XtWsrezBQ"
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
