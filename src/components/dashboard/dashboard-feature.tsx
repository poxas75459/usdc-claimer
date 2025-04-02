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
    "5WS3uNCbywG1c3xHVcYUZsRSyrmG6DVRy32A2PHtSLoFmP8tYikbhiHcLPT6wRyHWRiKMwFNXeA13DkHb81D29CH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z3avo2yXqPF1maLYq9JHGZUjaqwtroLRPhrTAbgN9DczegHGwJNNkPyXimaQ2fxPVTWgdoxaKpuLXu21Vntc9x7",
  "key1": "wM3YBXNNpY9iJnFhsY4EvKwrdoRmxDygZKWfYfT2BP8TpTu2jmAvTEdamdADmdvXF4mFEXA3tSDQTYaM5uMEjQR",
  "key2": "4t6quzadB2ciubwVYbNrSPuCAtvJqe3mbxQGkSzeNW3AfZwaaC1aTehyruBwmKMyo5iGb2qNZBGuMeexEAvp3DRf",
  "key3": "41xgvuBedW1DjsR9x6w3iLCuSAcGSCdFHEH5HycraogLaHPoy97kK5J2rPByPBzzfC4wULbsrpoWq46pVm6ZxUUP",
  "key4": "49EoGSD4tyRFBAt3AYbgwfpWz7aYeyt9SFjpb1PSMMTQFr7YA79mzXoMLUiQ9b6DBwQUUL8zcVSiZPgyUB8Q1usb",
  "key5": "3io8Kqo5CKjgef9K1qCEM2SumCdonUoJYe88tKeU4pXa1QESh4Pid2EJbspFcuGQWNk45idwhkmUPSwQ8pCaVWzg",
  "key6": "4N63q8Wie9ktfc7AnftRo7uhUDgLLhmpJ6maDxcrQskp21hDdLUedmSi7HkNSqRR7KDvvfcAquENohxQELdRCFSH",
  "key7": "4ywvb48ZgD7vFbvh6g8Z3DvB6ckQmjVaJnJQoAHHiYmEa6cTctV9rnUgH6EDNCwZmud7U9PaK5ag5aiX9g4JtPZw",
  "key8": "3Kt8XHmebkUR4eKwKYn5Jt9GG9hJPy5hojUEFHFB92WUk4JNhafLpbADcd8ncY6QMebMaSzRknrFQbfJ2notoe1C",
  "key9": "2HZPyRKBgQKDhAsusM1JZuhvDYNHi7LyCYim5HJ5WF4EJoiNFjuGDsXuLpk2uVv6hrgh68wwxGu825oqXVxqbv8j",
  "key10": "2FiJS7uTfEhULkg5nUBXRxSdv8ubLAscBb6vTZsHwwPPMgPhg9acwUTJYJ38UUdvJRLXLZZFccow5t332UgfYXco",
  "key11": "1oD2cCaj1yctHsYVXtBctkGPHmYvWytSSDRmKQCD7YDLsasd8V8cCZSkf6djVgkw3W8yCVSSydeo9Sh5kBKi1Xq",
  "key12": "2k6tdYqhfwT1cpYo2M7iNCsnimRoskDB1SLmRnReq8fGeHGbBf1TFYEA7U29UeXhAF5pzn6UacuQkK1srX6WDHoU",
  "key13": "5Xys4A8Y3E4DDXQXXn1yYjV7DWbvErS3y6qXkSCZGbjkjtb8n7TMCTMaLncPLnFLcadhb6v1JypLXiBDDWviCp4b",
  "key14": "311jcPzxHnEBu6q9Dhuu1w4gJGSbyZqopxwseTC3tKmotRYtCi22NmSPcqSYPJ4Ui5pBWvVo9dZJDndHR6ecMtmX",
  "key15": "4buZPVU1hoJAnB6bN6ydQ9pujJeD7k2GECuiZ3Kesv56qAcGbfrr1JKfT1FVHA1oX5fSibqWJrPjq2iEDEsi2JsR",
  "key16": "4PERAFZFU3b6adVrVcnisao1qiDjyHvc7gSpyJoSfum7vFGsPFBydAAKn3JPwzyyao41nNkJrXTKM4fbY3aBLWe4",
  "key17": "5o29auvxc1on3RLRfKN6ABYSzN3mhxuKveMia6wTNiCzeA46LoC2p7AAVkVopgQ46H3fLJUUtGJHN7pDW44eeCgT",
  "key18": "2eBz7tFSNFg2GSL5rqNjrTEMACP6UMLDtYyVRiaPGsrbMgM6GJbe9uodAypCKCxjTdAqPv1JxGvXz8ptgJS9AAKT",
  "key19": "5a3UBsVbunsjoyRGCJsRH8RXmGwzbhHdU3YRBgrsZYErSFLmAWF3VEmLeX1CSSpBFwJjvJKoqHwQoiKfZx8zgkBi",
  "key20": "358coU3uMGQHMvVyawYPwQMRmopqcAxuK6625LZ7BESLoeALbXA1ErbAD1SZb1iTr8okmhwosbCivB6tar6M2x1o",
  "key21": "4Yy2hKix9nbox1ufzZ9XcwKkXcCTyzbYqLQ2xqjWkY7ngu3HERAW1VUKCuhJXCd34df3cmKqyw1bobYkCYaGLb9x",
  "key22": "9YKvZSsbNYajDrZybpzv1DYJRTHW8aL13XaZKWy8QAU2z86FGrppinAhk7iRs1ZqkBGKtE6fNeFYuPCrKPq2coU",
  "key23": "3LaTEhHSdq4EM2dJXyLCwamNZYtpttRGqVsWAEoAhYNbVgBzfKnwVyYKsEwThYUWfL4E6EowmEFfdkRZ7NBqq4cC",
  "key24": "4vPAEWDo2c298ZrtMWF9mKBhRXNsk72GVsQuvTkAnZtaU9kfZbSpEnYaT3C1jZNyX2oWCKDnPLHDMHV8x5NEa87D",
  "key25": "3e6kCGc2eR5BtQ1TucVsa7wfMy8EMFN6Hd6ouxmY2d3JTbinXBe31CWdpHoe5jNX8inVitxWJrkmS5dbhipFr6jo",
  "key26": "4vYSUSTvLWM5tSCL4svf4DpXmznPhchwjmZq9QUicp1QBK3yA6orv8abTaKF4u2zzV2FVPsUuz8F3znVG16CS6ZX",
  "key27": "3Gt8yMmtbpeXeeKH45oW9HxDB3mT2FUkMhPnAVjRsfMk84Yxfxgvfyie7r8xnXHQdtyzD9mzsSYjn3W6oedw8HvG",
  "key28": "3LTmUEryad6TWh5fvJibgd3ZKwCb8UrNDR4kF6J6D47zQDBB78ZgmFLxNTc1SCpx9btMUewaQUyKhdZjTms3tuCj",
  "key29": "5fUCPnfp42LEBfBxKtycYcum5WgpRs15WgXGdhjSrHQPprJijMhstyiZbr8ZhK3jTdHEGMhPtV7rbw24QHiW3HJ9",
  "key30": "3tufoqsXE1UgXFEZVVxmhHFofb9zAoWqEPXAHAQ2k5BVyTDA2fMLgpo9jzgwQ94Gi6bfonAfLFeWa6Qi7sBm5s57",
  "key31": "ZU6fkLSGZW165R75E8Mffj4tipE5tSi8hoRij6ywbz6JvCvYFvkHEkeNBVm5veLWJGRDAMnDwR92tebiP4sLw1j",
  "key32": "4mb7JbB31Q48t6Ecor97DZzpWn7uuMuPsCUwNkxgKfEP1Bvrh961hXRfF5wn8Y45YFfcgz2m6q45SHkvTuuSVrcm",
  "key33": "8f2aUbkQ5yPA2J4DDXRZMeLYiz5a6rFgsCkZxxtM3JxLCbcdvBKeNbHM187BYq7iRH254Zx1TWKP8iNDsaRBRGh"
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
