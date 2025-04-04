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
    "4w65XoRXvbqaTRj2QscCNJkNrB1vg9MmeRN9vNAmDYJZr26KBQH7nYXcxXmSGWDTJBWGuGv7pTSXYNWo8QKvfLx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wo2r5SscphLpdkRFGSHCjLX4N4zW3AjeEkfYgmonh439bgEoaoGDtpmWVjaLWSAcbMxz8Fzr9y9h4Sz2WFG3Mam",
  "key1": "61NE8iCQKRm3KabLxt9DvmqRau6bogJ4HqeyVo11LxmLNRH5xMBxu8YC2hDsH9nDMNAmN1n2keDL8tKJCrx4ZBMn",
  "key2": "Bt6e8pLFDFfGYFc321BSnFyhkuM8Jn8JP1K6NQw5XJNTyREmuvmWuiZN76rnkjVKKR9gA3o8VY8LfsrZxj5wD3A",
  "key3": "RRsNg1WRvFHKrhrCxiTuBDVJ4gwKnFsmeZK9V4PHJPhfw1JcFvXnjs8Gn8ufeUyCbKXU7mh5MGpEXN6TSqvRD31",
  "key4": "5j7v8WGoR9jpxoCc2WqQFBAfV2UY1sUHoHbX96sC7KeAhsoLkJwNqBQSXyYVMSsajhBY291w4frJnFxwEjxSHdbR",
  "key5": "2oxfr3WMxg5C2MQTupvRDVBBLFhBDcxCCKHSEVMU4rd3Nh34meQaTdNjxnvxzGiAeghPCLov3GcuMQoQ8Di1Znim",
  "key6": "3sreSxzPPkymxMsDt4QnrmKXgJhDEhRyjDrjztawTxKVjwjnLqb1otauA9k9RE9ABGL39r869GoAWcudoXFPMNn7",
  "key7": "h69smxH6jTjc6qVAYk1MpLet3TjyFwBBGPwSLav8iJeq3a7KjNadVxjvsrzu2T2eHEsi5K6tUVo7tA3PU3afc4g",
  "key8": "4qseBKRvcR9cxrwLcyrZt5jfKDCGU61eKpJ9T7qWCf8kxJBa1GbNXLzqQ8mmhGnMbMeWJaK5RfxXV173pWutGCsm",
  "key9": "3o1RRNReekLHjJRMmsbWs3HdrJjTSg5Q2CGx8PLvPAmra4hHjtkHWF6NARUH2nRvBNJtxLqd4T92Mno4oUWB2vgE",
  "key10": "67RVktshRfwz4NU6icPQCXSsj4Ga2MvVmWUsrP6G19zUYLZYPJWsnELUpUYNuFMw1e3r8hkxZ6d6Ru9ydBwsUofK",
  "key11": "7FzQZfmUjJYWByeRyL4CYVTwsnr5eHD9uJQwyvff1XyuLkWDz4iDf4GnTFGxhyg8RKHuXFFaZ9FETvy6qfGHab1",
  "key12": "37i8nDCzYpf8sjH6umRkiK8qZwJHRGUzrHtaBEfvmJEdAQoqs3XxMFPFtw3aZCDKQzbhCHLj8QWenrkWxKnPf2yj",
  "key13": "j9wwKVNt4qWVnjnACqhcZe1swVzCrTaVdkWfmJM53xmBh9KzAvxs2MX66KuqCz5ADDp4TbKuFGuZeWKR5tDXnYR",
  "key14": "4pSFVvSLtpUcMk8XspHR6eHhqqsQ3TZ6nDMXppxbCXZGkfufJNdj5tMTpYMGptnLKwdVu4aZwgjGwbfAPwDEmCDQ",
  "key15": "54pKfXL2fHdKXfxFiC78fchW6usT74mAmscnLwoGwmvub6F4ZGKerLVZr5EYqT7hYEr2aqyTmc27rRtkysAHuTvE",
  "key16": "4ChAGCin4YejLcUmqUSc5Ccsy5UWo9PAGZBNPV3Rhj7Pz5HoTgfobjBerczgHgbWhNBXqVp58sjydJ8aHwjDBH6F",
  "key17": "41eCLxeFhk9fiApQWjGGKWC9ie6g2jqsms2KeHaNH8bp2HHEnm8LDDMcDPgks8y5abW3fXC8cCQcjV5H7QuYumBt",
  "key18": "L8hhUm9Vg3DVcGNuLXj79tseaHxSLQT434QbxiyzKTkv3kNu9TbGLM92Kc6m8JjUuGNqa9tLLHnviLKrF4LQ6uJ",
  "key19": "8NF4fs98UNzmZx3T2rc9s3cwioRSDW9btFhKywy82WqAcPSgYMrKQZWnE7YZegvZi4eMXMXsfdNwqsxYiWDdPC3",
  "key20": "5LrLqoPpCfvRBr6HqEByNy7Sdzr55bNVrALXthrgvcuDLjcWayRaebYgF7deNEbcjpGAJpsCQLqQBTcSH5UpxeKU",
  "key21": "4vXCy6qhtjdGLGFRqtcyzouthT6XeQdivcshgrCPW8wHS6xu7oYqegFd8DeizqamdBr8rAPrcRFDCxnCZvkudsEs",
  "key22": "5SmWPq7j528MP8icKRVzTYfDgMU16Y8jVCPmXNejAfdQg8tRHkwT4TRG9b1ziqfr84kbUerjQznR7hUXJgnNYvhw",
  "key23": "3TwruDMAj7Br7UmYmfRt5cURjyWzYpDLFpdtqAa2zTHp1iT9DLxumDsjVppDve6KbEcf5hJWqJTXEQgmRwXgh4AP",
  "key24": "4ePRkKMjwccQ4MTph34NYVx9YFQm7ARj3UF925TqFx7FyWjqKKwBbZ88Z3Cot98Xe6qeQxo2gZiyN5Ct6BB2ftK6",
  "key25": "3GzLUfb4vhfHPVnS8c6bCZ6vhzAaSLL5dU1ZmM6Gkh5wpF7CapzjQE5nSgXV6UA2pyAxHUm9Y8M1xh14Hib7m2QE",
  "key26": "2d2peF6BMrvuYc58o2Gxhzu5R9P7kPwp4vfNr6ztNsrme94kxpnHd7HGTb5W3GVyuLwDW2XhH1fJ2QzjwJoydsTY",
  "key27": "2nwu5RmUz45x7UdCHeejVb1wzYvs13k3mPh2V6AP8qjHNtNdLUioUonmJhjz6FphecQMK7HzYsovMMmZ3u6UbuBB",
  "key28": "5ATK9jPboYWHr4X1TY4XixBTV1B4mBN8vfwarGsbxGLFK8yMHNZK7UGEN7N1NFKKeyK6mQxM1YL7XfNMi6XWNPxn",
  "key29": "4daJhfKSZ4XbTEinMa9e3wLbyzkfWGUsrwa1ia95nrtFkiHbXbmtmQd8c5Jn4Exd6cofqCAfHT5MmxuiHKKHr2td",
  "key30": "3j1RrKEpEQCr8MGNnt5eLwZoYhoYaMJNhAFdueDUDXqu66izig2MnGxPovK4iygtzM9V24Xxt68Cfb2tCPQRm5DC",
  "key31": "2N63U7dziv9vycC4KpstXPc2k7mfkLo4UTji4o5x9xodBm78NL3ksfq2YwPHEmgUigRGwbRa4oBTL93bUvumg96G",
  "key32": "4weRsRKdqFeqUvxi44fTRoi7dhe48aYtYF3HUQtkxgShptWUXtdNppwcNob78KzjZkkcvRyUgvTgt2DZMAMDxdN9",
  "key33": "52qRq1YeRcfx4TeCA9npnieAJdBRNrxMRL12Bzte8Bp58z24Pr8eqACa1WYEZqsJFyCnUB8BP6z8dBcgMVednXUF",
  "key34": "3Lncfns2ub4hE8bDuCwXvQGgYLAHhgXJsBMJtP4U7zVdAPotMMFeFdVytrbFzk7uF4rjHhjUwvGw1FBswzFv83AF",
  "key35": "2MUmmbPWjdLo7qPYCb7yfJHnXLvzZqrfufezN6XMmrYVSHxcyj4XfWKKSyHyweC6ghyzGkWPT9N1y21HfENULgQC",
  "key36": "76Hu4CfxUwRx7NexwTuGMEhpn76gkW2MLtNVfbwtdm61Fz8YqUrzCM2k6ikAqeWE4cZ2z4BGAvzsxzCwsp2CfQ2",
  "key37": "2vxL8Yj24qKJWU44vFKne9fPr6R5mnigK8Jbg6GeAQVF33QG8ozHcxMf9GC5wsZ6eozbh65XBMdPLGoLmHAoPUx1",
  "key38": "2ht9KX98saSkgZ3kGRTRoUiz3gjcHAHbXM6RxowHKY6BnMoew63T4K8Di5HRJfsBySXTbgU3XytYiU4zbriyRerd",
  "key39": "nCrnjWZubzGWxAxpAA8bdaikPCwcVncY6P9eyji8FAeuxosEkR1dvscMzrYrUakiXgJFvPGWJzLG4KAw7bQRDMC",
  "key40": "4ihBDPvTRRbYWtRrzcjhwLkrvZKmFvtWSPGjCJ34a6e6ZfF4htLj8XwEGqeqxqrtYoPJryHQ7TsLyECwfJ4gGkWH",
  "key41": "VoExyGufy2GTCCYUsngTXhUZofcQzSQat7eVB2rWjDRhVSrRrwoycqCGDpAxZndA5t6QspXJnsFZ83sANHa4NYj",
  "key42": "3j18d6pzc2VXrusxz9996vgZPy16gJYutEH6rf1dwWPoKjVaRjBXYmR6oQudHau16zvNQPjsVmrYcJ3LhCdiM35S",
  "key43": "3bj8DJLVDKmyLvpSHJyv834RM7FoFBXDt7rkzcekc3KJFfJPYpdP1KxXXEmhQv6Ngx4xF6B6qtKAs6PheGhwqEMG",
  "key44": "4fdyZXTH5um571TyWni8xNaoUhsfQfXBqe1ouCWEzBg48444N4nmGicKrti2hWL8AbYKBWR32WcHBBfm3N7Lm4Tk",
  "key45": "2XYvWBrzTmmLZ4SLFRMNiA72RocBtBBZv169Q2PbeKMXGxdYMgTbbuBbFHYAvj1sHyrTudBweLivdTGkdrDDUPyE",
  "key46": "5AUSoQ9RVGCMa2oihJHZfKG7CNojiubiV3DukeM93zNXNUP19iJmzrEvrhk52vVmeqWqsmUhc1Uwu3KLABAx4KkX"
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
