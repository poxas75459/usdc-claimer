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
    "5ntCUPrgLLWQ9EwguxzHZeBdJyJG996QS7bPRosEGoCqh8PgtoB9d1EzAfuqo9SmbNtPdhsc27XYyBn418M8nyma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JseH6qsjU8bGfXw43oJyEwjfXj9vDruNSYr5hSAPphKE7W2JbRNs3Vtr59znZLTNBVc6wotYWxG46K9ufouNUAR",
  "key1": "hznWyo4qAySUjVzGkWKDGYAzMSbcjyMcqPDFCzhERPkBr9VtrdnJm6KwR6MLxzfd7qRVXGJdJq2CRzTc2j7VUBg",
  "key2": "aB2t1NCFzbjnsarzDSdL57XEr6v6CHHenZG66B2arNcRy6XAAXTMaynMUyRWTjGzyGipZXAKxbw1jVskuaXTHYi",
  "key3": "FVEjirbs8gDVLk9sQgHW6NdRCsYACsonRcAiSBkYqM2ivdMndn4S86P42NYNnSCnHGKdUDtna87nxNrBaZvf2fZ",
  "key4": "Aw5SKELTT8RarLDeCH4Kc4ttyxFaZr6NjSdhzeEpzSosKVooDA3x4dzTkVJ3SmjAJ76AsKPBH6NhFsr8AjL8sfK",
  "key5": "ifphA5HqAyES4Tcv5jPY4tAUtdmyJU88vowvc9hsg6dVvcth1A8oYN7xYMhWffXC2o32Jix9UWSTGSyJKF3UXvc",
  "key6": "3NJMGfNi4FxSaWSvYJsySkn7VqxB6MfhYRYbf1SVaeMSV9nf56SZ6ioiZNxjwVmLb8FBs63vxRtKEQTvp3Jj3KKU",
  "key7": "5ujntfNhozxS2tBsAjCGmizoupng4hL81b91PZKhkeSE1nhYR8PnhFxGA6ymGAkdkd5ppas3LySGt8Bbusmjnwyz",
  "key8": "bvtAdz5AXPqxbvoFxgsXvoQViGDdrCpMagcYoC4ZFHm68SJR8sWP3bQxVye7HQ2CA251rXtnPGcvskYCEqBatRJ",
  "key9": "43JSEMmhCyNCL6YJUuK3ttvu5YfQKs2foE7T22pipTdzh4Pw6YSmReAqjrfW9tVTW85BtDdejgWhu5fpasBG8cGJ",
  "key10": "2oXFpWd6fZCCYty8FG2jBnZtH73KZRA7LjVzxfyDr4HLNBFNixFGLKvZKasqqq5Shu9BxF9o8wdRpCJGZMkFVGQw",
  "key11": "kFH9Y73an8goj83aJuP7Aw7Yz7MozrYHvuKpaGxkxuLhkYGcdR1tVekmBPwdbt5g6PRM2kxMpNyVLS3pGkkEgea",
  "key12": "3cVJjp8rJk8Sk7XDrdje8cfsyT13sfkTMhg39VQeDmit3AeTsTHQ7YjBAPjnDiGh8AJYGuVCFwmrNJu4hWLMup45",
  "key13": "2dfTm2RVwtT9jC8dysg5jUFc1Qv4ugce7YmScU63S3N2o7wBfxwhBDCfZhFzUSvYHnVbMgd11HkD18DkQGCqk1Uu",
  "key14": "4EUNzF2rJhhhMJ3mibhyZQcvztRNosznpPU3jSG5A7EuM4LU3dzPyyHyauNQATKAAAGbMan84cAAQTU5Tc3Wreec",
  "key15": "4Kp3zbFyCxd5jtDt2wCHVVJfU3qWBNJTXZZLpoHqiMkiRdPy6PMXhhjguPLDhQcJk3vFB8hNWw6mdQ6E1y7kG9RM",
  "key16": "StN2vaiQT8bv2EgwZsiKTg6v5PiB6MX2B3MQPqHbEXwk5B21qwV2yHLfhpz92KRA3GwStMXpkAAagAQVCmgE7Py",
  "key17": "46Ug1dAKfR2gXEQsXTE7qbQqUAKBD8ZkQMkMaLDeE2uXcoMTd7ZdEM3vA8MXi7JiSeg4PMdLR7ymv6DXTR6GDAka",
  "key18": "kZVPnALoW8hzuhihzmdGa4mkmDRavtB31GAg43stJvZPyuwSurdjN8F8K8TJb9Uqqxf2ShsSE9NPjwHgujpxAcz",
  "key19": "5mqXV6DkrRf4mme8sdHq313iithQRE82aSVVVpb8CpdRSGX6Q5ijDmB1qsEdBynuJUYwiewSxgTb6gTMZSfV7nkh",
  "key20": "4Ku4UQPwbF7YMrxDDYy3mL4dQ8Wn1oGYnPPwvDtK87F9SoWji7QX771sEAwsAB2u4Ax1FYKTWdxC8effdmUA2ve2",
  "key21": "4oeCZC7uiW9ejPHABydVRHcBLw6VbP3BGCCrLvpGayJq6Ax3gnD4QPhPWo8bRiz6vvd5W2zgLgch6t58rfCpgZmu",
  "key22": "4ofJ9jLE5u1t7kLc7HW5tBbV9tihYP1dNGzrnrNfoZWvUQQupdNJ6YwtjBTKi4ehtxzFWbDA9puPy2fgxnxFkQg7",
  "key23": "3yN4CoyrYNZsujAggkxkR1xhL2WTKrSAsVwTGzaMH9LPLxeKQH1HY3ao71d42b8oZGTxUVAzUQdmfift6Fvv5qPq",
  "key24": "5BjvHNvRMFyoHu1M3eGgmNKHxWUMvJYYn3fogpeiZiZ8PdgzCgkKJa8heepcSogwFygCQAQgnjc1irWJa4Nnki2X",
  "key25": "5YUc9YNGh3ZLpiqLbMNtQbcW3uZRv2b2UALAHKUehGEV4RGkrp83rHAZc4PBfcDhTyYeDRdQqCp71yd2WHaXnRSf",
  "key26": "2cg6TrksM42vsruvi9UXXDDNwuFqTtTSB18aN66HKdfzwKPjmPa2ArYYthLykRMj5xFqDTePVHnAK24bqkyaiKsY",
  "key27": "3barRDocBKy2yWEFi63kezhtNvHJwqQju3jaTsEA13VEkehvqLmUWYWmeFLA1VjfS5R2g4CNKGEWsBG8tkWUEun4",
  "key28": "2UCQEnejaxPZosKuTuLUaAnhB4n9JecDQXDZ387zseEQgv6pixj1yN9DWS6dRQwcSXuiXi1ptCZVmkCNNRDF1Qmt",
  "key29": "2EdGnuxsKkBYJziUJqSnyyiXm8QXJ8Lkx8qwKovJ7nB1bs5ujPTYFmX7qCtY3pP2e1pDNmodfZqyBkD4yBzsfHfy",
  "key30": "YWqK1cAcNLmxCQXsJrrZ28beMxGYDxoiAUeJs9CNn2VrwjyTMLkfXM3xVbx8yUt8yuFtFu97DczAd7Tj5nFJK1A",
  "key31": "is2dDwNm791MGF3aH14udQC8ePyyvYTGKTNgtDbM2DD3erqW7iLVjCxH5hsLXNac25KrWaRUrzrRwHdt1DiHbSH",
  "key32": "3uSBZJdLnv7PjKuCbnKqkWttEno8cuYuw6a6XBesLkKPmzT4R32C5u2pZPhd1EYwo91ybg8yakYECQAx59jqBhZy",
  "key33": "ar71JthKtNnPAATpwqCmhmm8uPs76vikfogUz9zXNTpztLEXV33WNUnvtmobrQgMHstAz1wsUMqsxmh8P7jEK8F",
  "key34": "KBN1eYy38Xavg33Qp4gKdVE1V51k3bkHucu7J9CXmHjG3xNDnuJfqAyUfbwD2Jy3AcYTbtZaqGnZvVAeHRykdua",
  "key35": "2Nrp37WzjUJUHa5E5gPsoTEixxv7gypZRRYiPRgbZBS3uLsTcNxccintYN3wehsmkeMH3uWEuW9Y6nu3uTArqW3B",
  "key36": "2MqYxxV5bJ61rJ4yUYKjoa8AuBpwYiniXMMMFYaR8TFyY6ERUgqhvrM66kq9XvmmhkaWRWURjWWtF7TnstVxqRt2",
  "key37": "duVjtqrpFPDqa5y5WXAj7SiDmS8CAxivjyzLRVRPBTqGd8hhbQpvaT5GZzRq3VfQsrMdhs3Lb2GiwnegRkStuf4",
  "key38": "3FDxqNGWmq2hewNoV9PWUCvGhJAFTcFJ4ErNoMYzMmEDy2QEZmJCu66KvieVAe75frCiqc9cMEzCUP621oNLkzS8",
  "key39": "NVKc5BNtsrgnWkqrD5izwEn63v8hXAvqtiQ5Fim6qnhttmWEtSKQpGLiTBwu6xTPrwo4TaNre8hfU6jcatzGwgK",
  "key40": "zmZbJ2vjCDNAB2fMV5drQSiVswDjjx8wxDDAWgQWsj3xxHJWQdr4Jc6SEukZDSnQYP2ZdHUwWqCc6zpJ888hhrR",
  "key41": "3tVQsHW7VQSvZf8fP9YPK1w8P9zDrwmLVc3F1Xm4Hoai5rvtdaAz6WxDfVfTV8TzmB5WGs6DDaewDPbBURkHc3sM"
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
