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
    "4rrfVyFHjL4hvvdtgdBsNe4i85L6kRiEHV3cBPuupeLk9CtZvDwLRvLSsJwrjGHPvnvynQ9QG81RnfnxMi2ysSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35GtGs2tBX7izrrVtqHDrp8PvaivxBDWtCasEm5wohNxN8Cj6XcMkPXDNEBtoHWcozBg4BFBwmNpuTcuJFkWcLQV",
  "key1": "51GeYMnbvVy3yGFc4C2S9pUV5PGDW5TGgJLuexeASGWju6XaxXZm6ziie9X6uJCZcS3d3Z51hChHP7ykfvCNjsLt",
  "key2": "5UyfBimAAL14yHEShVEqHrXzasmpSw77nUztv1AEMANTLh6Ro9u6caqFh9Tm6tiDS93Rc7iL4aejgLkfZR4Xocte",
  "key3": "yZi4TftBGNTmiMuiw4NLUDK2sZT7xhQFkbVc8EgMAu5cyjcrw4k6hSwJ61SQLwXq2otnEgda7XYJD7hWCAcUbW8",
  "key4": "4e31pXHU77b788xPt77uvoEcbNEx3q6uEZM3DUrAx2PkG5Jh5e5JVimpv3mT8wgRPM28jfs6tvfY2s2NcFV4ZfHB",
  "key5": "2vHTCeEfJ5PKsePwdiQxCyR9H3tr7SsCckY9P4GUnRYAxLpic9MtEYeTwSdFJUmkJ8QEDWXz3nP4jpiNtwkD8G8e",
  "key6": "88osWEeLNrUpYFHCbxb8SSAXyS69hcF6V6khikfkB9jUM7sy5W7rv6aBG6QovmzdVRRgQFZVKqksrUQ8yk8CdBt",
  "key7": "4A4dxATpMVWXj9eByKhwMvuKzU8gDvYPa1jZduytiMTy4xtCYQP17SJSo1PvLg3DpyhCW3uztGqJZyegBi7FyyVT",
  "key8": "7PjX2pQhwmVSetNUKefpZQqE2kXjDdB9ap4LFHV1W5NyGXajrgMZmQ2BsZdAUPYpKmcnNEiDCGyr2cabd4DCQvE",
  "key9": "41QygZJfuYjVKp5XMgZKWfpEco9T46VTijSXdWfz621oN9FuGSdCksT1yFkaRFCgE71YSYrCYDSrcqF7484KuUsC",
  "key10": "5PYG57RzWj4jBhZUoVjhrCBa51FEaH1DrF16PuuS4FSMFUGhUc4JqnSDbp59KHAHMA7ADQBDdhVMQXXPvkirAcpB",
  "key11": "2sRTgfEtrPdVqzkAquizE3qUq1rm1zRCS3ZxUFzqXg6WRMsEV27iSPZN8qad4Cx2Gnjr8sxfuyfosNm1gY5LJQ58",
  "key12": "P851DyYs2eQMtJLZnkxLXQEh8bwv22QHwyDCnHPmsmcUcpJBpBYbZ15Ymhm7DiiREEiaoWCz37iTiNeSrtCeoSw",
  "key13": "5vwNeN2pvVyAdWfwwNNMb4LLFzjL8CthGGBSEV6S3nc2B2FFqAnvwAKD16HX2m1qyxRBpkwRANuDxNXgycCeNQH7",
  "key14": "3tt6WicDMcQUqTgMaDTNEzjgs61kH77ULnMMrwXRz64vSX8vu65pXTxCYT2fwQZkCjMcAvLrG4ezbgzh6cUB6ZgX",
  "key15": "3youZVuDSSDNVfMEk6txqu7w3gHPyQDEJPvkJG2vLpvQxiQf79BQVoZfK9TLV3gbe8eExsCmVTkEbX6Yj1i8Dqtm",
  "key16": "31SU9ToL5M2vsBeMqGDUo6zqxQJLGFiByuHscRbvuzToPugwUoN4sENr1iW64G6HLPSobPvd9NHwqaRjM2ANsyXj",
  "key17": "41NavuzeZWKP9mmjx6aYBNDDK11oK6xPAhy8cpSpcXVp5dwudup1EWdpsYSTwRQivHwDBax4wn4FsWbk76LnmN31",
  "key18": "4mVbBvMDgs7M6Ukm5fpY8qStQuwpP2ndSmdNdTjEkjCxuLJX4pzHpQr5rUrVrb1HCzNebxeKgSpnzfd2DFpKH1Kq",
  "key19": "3SzvoMCX4tyTPixguLT2rogsN5P7XAomEV8doJeBJAcXbDddVF6FAEZCBn8m1YQeXMUo5CDqnhDT8os7wk7WEBJq",
  "key20": "KLFHGEJ8doJKnGRfsrkinWAm5SDbEbBcJ2bo8Rcv6HVf9gtsJhXFKr5dR3rAYSeEUdWdt6dHT4vQryL93kz9qzq",
  "key21": "qhV3qMAk7LFa98TR4bw4vP6L19B1xvqtsFvAUVVuSkyNYUoYq2C6dps1nnTZKSDWbBRi4MaEnceqMhzdtcseGDL",
  "key22": "2JADaUu1VHPuWAq65Y2X7vE1T9kiayCczL32eC42cdp7vXL6qx4pkf1PcB6c9qpyLeKB6tqrbyoCHMiGhpxL1U3i",
  "key23": "23j84rhyKRd9zn3Lpb7mhkkUrJHC52zg3H1qRXpKschSPkhBEEM3A27t3JF72J2YF2LJNVavVBSbpEngswpAHfy3",
  "key24": "YUeo2ZsXLavF4auSGu6Y4fDfM5nfmwj7LEuAhkMnGDuHDt3rWiNV9QBiN7QDXB5UaQ3DEfL21QoBuaBdTB27rvh",
  "key25": "5QSubTuzcmFHSptCqJEGsq9i8L8FnTRiwxF4SsbEX323vxz67zNnoN4moBtFJp7K44Xx6adpezaR61SEnqAezWz6",
  "key26": "wnGdgL8YQJFusyL4G1DRdQcxaETQUgbKDGnrWLyzrUmen74Z7LphXa59bAjbDD4wPjvAfEBkmRHTUJSaejTtyRB",
  "key27": "5NsJBiAidh8KhcezVF5FFd4FGwpcv1s3UU6wVuPwJ9ad1in6t6DypyoHMDMTHZYKXpc4ghyhvpVGJuz8zRXUFRwx",
  "key28": "5dzw7LpK82oZc5qqo2CGY9dDYt79XpSTCPqwqUaLAhE9epYuHntammvU1NwodVtGZ7sZo1e1YfQE9Mmqv3JgCK9k",
  "key29": "52fAQ2rRGdNxNaLrbg92Ka4kHaATNrBLEHPyNG67v9ByaHZ5rEcThH9MGNsYWcZvnAR1wbAwtgHZzdESUwPFb5zM",
  "key30": "oVLsnhMVtthyDgNiwHFsB7sYZQz1Bd1wevdr1UWcvX3tWABvW146LfauNG11M4RQPtSohfjNvGNRxvNt7Zj3ziu",
  "key31": "5cM8LLVFBE9WdsiXwapQfJdL41qc8NHifQ3uz5QcV1u961s5SFrnkQSbXcGfzq9EuT8sHUqF4bXAcRHWBum45H39",
  "key32": "cyM2AayLpxeDKhGXesH9v6iYbHz2k79AcT4zRYjPBaQS3T4FhoDX8FFDc6FV3hL9uRJRzNCcR6xRAwj3r7B7Nmj",
  "key33": "3i8W48JgUavm8M6nAfpre2gRo5tTxjHsw8hyGFcMcsA8h2FHQAhwTv9YyuQn9G1GwqKAm6vb1sGZwaQMUnG1573c",
  "key34": "47sUaToMi1FMBMpWmrpWNXquRqjA2f6iJLAA2pCseSHpnbukA3AUMnGhWyua5D2r5r7ULxJovAEzCXJbchdiAXsu",
  "key35": "4fRrJR4on4RGWpa53KLjnZ9qg1JzYgVxnYzdAHvZ5Pvjb3Yahj4MnoGmRqAzzYzbHZL95HFwV6uR3yaJNKzX5d6i",
  "key36": "3gM1eVJAi4YrR6nTzukmgJxq7XbhKWztrgxZgQ9Lp8XDFzMMdpNZjKgVamKE36tS4HUobzERNRdnGR1LjxVmRBSE",
  "key37": "1QBVK7qnHZPstQdqr6vNuWkNpavecm3Zy8dHVXQhEaECHoh83w4rM6dHyDr6opb6MdBKVszr2qUqL9YGCaWvTpF",
  "key38": "53kjt8y5LPZ9ARSA47dXHohzY432Go75b2GaLSzMKxNz3aKjoE3gdJqocnmrG2ZFbjrvY54VEqhhjVBbsLXMsuFk",
  "key39": "3wjDq5sZqfzZA8EjKf9uRS1Y1uVKa6cWEDdxkoqiTQqUiz6dsx3wWfwwy5QcyFqmzjQn7A1Ztqzqodrg9om8D4h4",
  "key40": "5yK282rhawR71tFUcuDwX9qSuo63YEbrC4WBYAQwhhhT5MLyzdVeMiTdHry8SvaxcQQuJHmg7EKb3teSRXrTMsg2",
  "key41": "5HAymKCHXZhWPsKNkEGoLokeUB5WqTKHTa9muQ9kzU3WUufEHGFDbZ1p5WEiSc2DArujSjdKTFw92TuYdp1BgWAM"
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
