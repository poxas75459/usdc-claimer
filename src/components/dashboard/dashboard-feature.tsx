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
    "37aBbzKojJS1E5dWBiniqZAm356sTUUhjpPkQsmXHsFTy56TZt9PQ78z3kb6VRo2TanEvUo7oSfbTZYLbR1y4XU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mqMQMewfNTfYFeH4zsebMuBoxUw87kegLLxfopHMAHf2y2YM4z88K975nuNQFcM7MXLBAXYPrYavuAG5PKR9RAh",
  "key1": "2fmnTuR9tKYQsHnVU2x37NAG5rmczmQYQSJJzFJuRyVgSzu7MFA911PQqxKgUEw22m5tGr9wvrRRKy4zLLz5CtZk",
  "key2": "uF773QCqeirwEymJQWykXdeDLYmLYoqG4qZVTX4EXSMPhawXqGnZVwadGgpjT4883A8xjHCZoB526a5pK5DtUuu",
  "key3": "gvoCPd2aYDusdigabwu4nBZcfMg16JMAFvp9jmaP9s8hApCmgXdFJqtf29sjB8fzxZmgprbX7sKDSWfxzxseoia",
  "key4": "J9WK9M2TMTyn993SULLVV9XLc9CLSC94z9n6AdQXsjDfE6o6eSzeBVZZ499wqAfNnHZjiEfFG9aUeTMVDZ4JFVd",
  "key5": "3CeFh8SvBHQWgip81rupnkYQquAMnWZHQSW3KB3cE7QDGGK848R8fzRmAHHbEJRHkxK184tFD77PyNyMEtgEQ2xV",
  "key6": "2v1vWcnJXeKebNfTRFoqShWJoijxdGxxBkaw4Kmx8kDaEqHZU3cHimfrBdBZydcP4tRNmuny83zxE8G6LepdiSk7",
  "key7": "3QnQiQbfHSugEiKUnFVQXgEotssdWkoVHWGzeYtQmYqsgBoVH3yfk9aijQoQ98Z8zxkj5Frv7sMTRpjJEdeGcdkZ",
  "key8": "xgePW394KZoHbAA88ABnjniVrSGAS3b47g6Wp13a6u66xYWcQS3orA9oB9KQNacNKsNdPUPC9SDLuKVCXHFeRwf",
  "key9": "2SdKUNacFngsArF3b4YRqhXNZSR2t2ymmun8QHVN7XkJR8HcdJm4CmXHjmS1UcVwog4wRmsGerArsPT5XnjiSAW7",
  "key10": "55ysBUUcTv4Gv1zDkTC1YZs7BjpzD3hEwdq5oXqgGHSugXjVecg7VFGFAwt7hpEtGXPJbj7mb5SyoYWhakzmfuJG",
  "key11": "2Gq8MnrMoD2gWTDuDwzV8EdBKsvCTsAPNTZX98ib5yRZaQtZicvFMLXrX65djCBkrV155EuWfjZqQra8WjZ75jyf",
  "key12": "5U7mVibjtPvg6gJ6poEy7YFad2ZE5ATGbFXPkVsjtvsoUGBkG61iH1F3FdAJeMfwAnsZNKDbaeojVh15JDLKLcHy",
  "key13": "339S9NCDo5cPnWZ2ZYVpp6enEog7QhD5C5zWLA4E1PREeZYbBXsqJo6TMEsHUCqyJZUXfPGedsBJSL1itHGySaYy",
  "key14": "3yFaA9eG4fadSHrxW5dJRjtkopgA788DT3iMrsFhY3LMANcninwBmmjGU9Vrqqz93oaGewZxSrfWoTdZhqDFCbLS",
  "key15": "3Zrij1TRvteCi8nEjZS7YrAsnXLJowJ3GibHCGz7Pn9ELpUMe2d7BBQeomQRTrxHHVNJFAJ88hvzxtY3tVF2smdh",
  "key16": "2CwHFPXQ5f68q6RbjjCpGFp6RvNzRm3qrLJTjds9F4uJFfs2MW6f3iBc2cYB6LfDSaBHbSLGa1MNxRQrU2XdKi9F",
  "key17": "5tmNQHwxwQVrg2BrZaLvnm54hVXQtwoz5tw6XSTwjKrtfSGkc5MuQuASkMNmS2oZxkkUSK4wwaxdFbxfxgbz69Rc",
  "key18": "5jxyZSxjoXRWQvSPLKiDSSd9CrmAEysqwBS3kKREDtS9btUNmeAwHyt2bY5pVNd8RJ46fwHajR84bxYfswckSsa1",
  "key19": "39vdzQY5GMtVaAuJR9fWERt9sebBKhMsb7g8bLRsEnuUygXo3nR3pCC32p7P2vkPxT2ZAhCFFMa6L1DDxHdDYQZC",
  "key20": "4YCRGvwFHd6xc74YjEmwmkgnFk8ShWPHSrN6sFcnAaZnUPLhpHo86DL3nDMngUEhj1T3jNLdbwmu7HqVVAm2A3ic",
  "key21": "2uDVWdC1YiP62nizxLroJzAkBejmKV13sjsBgPdorM2oYAyLLyHWu7CL2v63H6qhPQVxaEYrnfWyYfdju18rgNnk",
  "key22": "4k3etbq7mvQEHvyWeBmxyuF6ohs1AgMh6hkgnoZfR8pUgTy6XpJkM9EQekVz5WQkzPBLT2uU7Zk32LQZfgSQQE82",
  "key23": "2T5nV6nAiCyadPVbC6yYtqRgEMZmX1B4FpYNjkb82wQfeLSYgZFnQUNs72Dr8wCrQQ93CMj24SKVFcufT9buanpn",
  "key24": "3pHP9DE5mZx1zQnxtcybdQiLRzCokFX2BimfWxipqAB1XdHy2tCMz8sPouPTn5wToqEyybBTBQw48nyErsiejrym",
  "key25": "5cg2qrMpkawkHEdSiusuMtTisgGSBbYE8N2VDrThDhzDwZrcEKGVmA1tNkKBbxeVkXqR515WygMkGumhYBR8PmTq",
  "key26": "4pbMDznEb5ict7qjcJS9aDGcf7UiSrEgVUjSWNpWXhFufwUjfMq99nghpdWyJYqtUuwN7c5f8nndTShDwHUEhXFL",
  "key27": "3Lmg5kM6at4qy7XpoPhuwng2xY6aaiVf2WmgWVBtfQsKk8xKamgSYV3QPWS646NHYH9YsD1NS4gxuuZwjvx6ihgJ",
  "key28": "xwCVKXXcu6qEfd4PkzHfoAo3RUyEoCV8MsgYDbXykie6WTko7myKCcTXjgkKanqSDBgDRqGXGAcoZp8xXhsKoLF",
  "key29": "tbN48NiGUDBV4jzDDsxEfHfwCM1Wt5fQm7owMJifs5rmsq6kB4BHuXZJzpjVtkpG3iTpxz8XniHpGHqmHfAR1yu",
  "key30": "4vL3yN2Cxg1ap7A3QkyH42WUwcKQwRE1cKtJiZzrSuqMwJSHUzj9h4JcKmPbL4m3XwkLoHoTkB6p1FEGnmAqGF8e",
  "key31": "5fVtxQWia49sVM1BJgpTonFYn9PFoC2girKFj2h68y48CVsAoXf2yKPFjUx3mCDNZsBmjMc8ozPrweYJu3dVbbcd",
  "key32": "41neTWSiEEJ1HPy1B4X4h1LPUhPLTdGGdLzR3nSvgH2yoeHgKQpumyCJ8aLMYJJuMSm9rurbGmLF4nVinqSFjsQ9",
  "key33": "2LyS62AerFVayRohsfANPqWTjMPb4Z6GQbm2rWiqXjC4tpcogtHB7RUYycnB6GaCtFmNcpS4hNc6qJRKnQvR1a7V",
  "key34": "5DFCJMWXCxyxLBeScKtgaYoyM7YusEpinMp7NM2eYSQk91BKZhxB3HmpjKwXGVD2ZfN5rDkcrRwi7JKV3Y3sa77c",
  "key35": "28BQD6oB5ZKHPYwRV5xRyEwjyBx8SWhKLmbtwSM9t1Jd1bx449RzyDHMaR33fM4vK9Wd8BTR2aRCvpSgTmKyCdoT",
  "key36": "4p6rp41AQ89cUpMmQ8F6TUrENGeK78f523XYNkR4QsKA6c4MhsD1PNXzUBAsARy8iEXLmdgX1UeWNbv7bvtCz48z",
  "key37": "694RcVvRAgMQMe2v2LELacKNVzdbxjfGnNqHJbmXHNVDLzZXF9aSaZkCvSfy4gD5xtZHVGNaNtvRGP3CLCNQrkN",
  "key38": "55u3XKwgUjPTYBnHMDL3uKTULFUcdsszcXFS3kxJpSBRE4QEP3c5TyYSn3mfmVJSUHjBQcu4KgeHdth2hrLJkuxS",
  "key39": "3TXpDLyX7Je7ptm9jqnK5uXi8KFgCz79kWW4e44GcLThtvsBQB8ULGVGh3a9bhx6t5DQNxyo3zZkSPzw282zV5JH",
  "key40": "3TYKYXqvaphito2AshiA1kvnZzTFt2NTG3qBMukvUE2V2TYQfyeD1jr4gqTxaoiXH8MBjPVTGfjNSXTuVoudrdrm",
  "key41": "5M7yio8AB3tu67hoc4Y7itDYZoG6KjyCgfJAyW8StE5AsPvVPhwxq2nQ69iHe9hmaGicKjuq7FgpQqEue7AJZ1yz",
  "key42": "3PF8WBXkLKMMeMFUot8i2d5ax6HKzYdyGKWds9SWutyqbcVugJmMFttRBQg71an4aSAhSKG7Eu3am2V53JfaYayj",
  "key43": "2rU4a6wYUE31UMypHSuEDyKMxEfHZqYsGmmZufNBPDVz6RCPGDnZ1aaVpVSGyHa65TB4jkxMywmQBWstKHV3oQYw",
  "key44": "cWTuKDc5C9seUdspnfph6QKtWGqJiLorK9AddcT3Tvypb7yX6vmgHRboZLDotdxJfqeV3a3BFq4ffQzhfEUSs4b",
  "key45": "4YkgZY5kAFbheYGBmvd8ztNxGuNWUp9gAqbDfGST1WLUp5CJ23Q6w4zT1JVfzuKBWpnecKouYfXV69pmyQXjcrMC",
  "key46": "4sFWtgqDxE8vYkb8htrmsPzNNB27V7VEHWpWTSq4xp6AZLBYdB5pHh7V5zh5gJdp4ZG1CwxvDVLGL2Tq2imi9nCc",
  "key47": "2R2VbPCoRNJAEdXukyt2FeTfxtxMaeQyGCcKaTygG5dCvHVPTzZbMxeXGD1sMHjXJjhaeFPA11DCRX9S8ciYsX3d",
  "key48": "4snDUDUee7pRsosyoMAX6FbZ9o16ugD4CM4r5Qi6aWnGjzxsVNbPrvUUEbCygKM7ZisxJhUuUUsdXsgZwq9FkDYE"
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
