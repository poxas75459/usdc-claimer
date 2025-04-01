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
    "25StZubq5cGrndb2xMZUVfEodNkN8x4f2Cpq1pRqCdN5KVyU7PsXi1QeLNCxtaCic9LbGXFswvNZE2AKycPkz3Wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YApbeywSvW1MQLnuW2oJ8oizwSVVoWdRRCUFph6pfx6au7nR1iEQWN1ZPxLSS86RfD3o8kHqc1xP62BGvtdbQWy",
  "key1": "5vNGm37hzhUXcud4TbMsm8G3eCWed2NpPQ7H5s6YPGHCbE66gyJMVabpPTYbiAHp3V1Yp4mkdV9wxvFEfSwpyMmw",
  "key2": "3kJcC83avat16uknePJ1o26NTH8z5kFw6bTo2ztiF7NTmwhiw2Sfm9osCvK15kBWaBohsJkWg6jz45X1X24VvxiP",
  "key3": "2xHxPeUEDYpHZ2NEtuuv76VR8u9diXNB6GZiCFoXYgoskrWaUgqcHmS7CmqQYjtRzuZ5rixtoCPNnZ8rqHUQ8qax",
  "key4": "pYJ4fLVX68RWGsiTWJueuCeDTLJZDZCnFVWNn6xMnhRPQ5fYEiz4ceR3LH5FcYoDizjV9Vs9ARTNBYhfXGk1Nnv",
  "key5": "2KtnTcZ2en8Kz9QRfqZgFsK36Tg4KH5vz4xgW39zU95i7wCzkcqnmjDri7SpXfGE9PZqC4H9JUHen2qAeLyw7scc",
  "key6": "urRVwYBCsPpuBxrX7K2qjjgJcM4Jd5snKr2UhX9MK4X6gbwRC8UEoAqcrLLEzP9nFzVk4qwqFtog4QSUmStN9EW",
  "key7": "4MLJZyGueoiJA9MdrT2iYEX3cZBgJbR2uQgY4FFkDycKxRHwkhmcnxMBeW9toTL4J8NeMbR8E4MFUoxk5UNAZSUJ",
  "key8": "4SxP4FtnchN32b9qS1LpknR5TVozSCGwiPuJPnndzRvFCDMPxVfSnnupAJSpqNJRCVxstMG2JHoLEsr5Pw9UeYk6",
  "key9": "cMRSeUTmuGXtVwEW9rc7HfWJdyKQX5jupqbK3313JDdabZdqHQSrk2miJDdLvs6eoJQYP7KRPiSC7PLB5CG74pd",
  "key10": "64MtggeZv1zhRZd4aMUBC8b1VY29u2Sh7KeUjX2zQoMgHhLpFAboyLum3atbPoj1FjVR1aCvFt67ijF3aUzjsiKW",
  "key11": "2ggF9wRdiajGu4LSyJBLZZu9bTL71qrboeTiCJA5mEAtRAmT4baujgB48bFsLdmW1RczaY16mVt1j8FdBSyBy2pJ",
  "key12": "5DYWzewxhxtVGF8bWZusRHzXYsWZrJr9vM4TV6pVKa8kXZ1W8q6dhQcXhNx2EZ8T2RL5yUjKvuQPtcwwTZjnuvgT",
  "key13": "5ntt9XQv3K5x7NuXPSyjeM9Bij47ZRrC8o6mFoe1pV1ZDzDqiLgWDqZAuDvevHzYLnfe39BDbYLK1tmjEYxwz2t",
  "key14": "5tmBUPoTXXnvYV2fx5LsJN7X374XihQYBQ6iP8LoK2iRed7TyWjQM75SbL8dNZTwoy54DEZ2FzxG5Ukb6UvPQcPt",
  "key15": "5JPfeijEC3XCk5W2rkFnDnHF6FKNebveY4PLYZe46aKtJwsjrowkag64dvTpwZMp1AF3f7btVndmp19qejUhnakX",
  "key16": "273nuZTJMLU7Q66pHthRqxiYeMbYcqaWgVAL97G5mXBYyJbp9rzy8Xw3T9gJtkbeEJpZ7PLJpKutzSanF39aNbtY",
  "key17": "3g3io1q4QaPku4YQMqYcDp8CJ1jFmQmJdEr19SbqzE9FA97FgEGS4G3FU9ZTRZU8kXRD3PQJR94vNTDRYymPBhMx",
  "key18": "5pJRgCQu6A7eTvopPMWt6cL3ZTJ9EpXuWtpGg3aSpWkbkXQQin2a6s6qnrt7BbgEqUvjPoA2h1Za87gmqpnDEwX9",
  "key19": "47Bg1uKEKiZLRZD9F4F2JmG8pa6FzEGgd1SfthgoqnUQkyJxqeCXPC1rZK3etfBzfb7cjWMU38bCJkBazUQKTzAq",
  "key20": "5Y8BqXGG6Z2Df2TtZfqv6wM4MLpeGnn3WapZsmJBnj8cujgzbrLLg9jMWQQzQt5R9im33STS2hfMTqk1SvnR9b7L",
  "key21": "3NqLBPtKR4fJgV9rVGjmnLJ2wjEq4whkNQMnbK15javcFAPWU4VH33AmuCvebxwd9MnAL8BXEKzgbQuETyPwZsca",
  "key22": "TqYFkFPi8eUk3cfRzgX7m9GpQbdRauRLAVqkXKxZSM8i3metdNzgoMhVqykJmmyM4DuDmkvrib2urLxe5DY8yxm",
  "key23": "2Fp5GZFn1mQ77RmHpQaC5HCGaHYUmqYPe7HK7USNyvGP247Z3paodj6LWThgZ7Wfwx7EyAbzqWRqYvjZhw6VseXC",
  "key24": "5ZLopi4ee1WFt9j9Zb3sbsCWV6qSYfthbip33VU1wgBYpHWMFLfWpPnFS5kREVo6P6PiQSn6Jvs2kSRp8nHoZKWE",
  "key25": "2W9tTDs4QC6FByPUGPj4H1o2dmQUHDQZc7pSAnsqxaeKykTr6mqrRxEqwCsRjTKtsy2Apw3snaKvyvz6BN7i5nH1",
  "key26": "3wrvoSV9otwAD45UJHS2uX6Kp4s1yREZmr4vAKSpH5oqSvG19d2BX148FwiqGVQnU73thhhaNjKMoibz8QyUGHnp",
  "key27": "3oWCQGQwMA1puo7PDLGapDbcqWcJBfS1ywZ9VD3KLLS7HLuCD7PG2RnNXkNyDtyrTHKgUTs3eJMAHvVbCo2SVEzP",
  "key28": "VZshTE5dJmHEVEMhwrTPQQXXnk1F9SME5tPXja3dMC4H7ob9zCkAKe1KfGQAZLs73VHAp8iJDeim3iMwjjDWsrn",
  "key29": "4Bbu2fDMbqwy5u9BtYRuJHxV3w7hEp14AWzCgUpQT8Ztt6m6KmAorjzUKAQRvNPUSTc8zsQZq96jz19NQzAn1R2U",
  "key30": "2MFmLzswesGwv6E5xWGe2mkZLuBw4JbmrTdBVwXCgVf9WxV1A2Zh9acThb6uYUKvVozdvsf8e2A4VGXFBcxgYAQG",
  "key31": "2g3beeoNhgEpX8fkRCZXcDXbMxY9ntYXEDFqx3CiVeFsMvnrPt64oRvGXSNNuDKoPgnS9Cxuvu2ZVj16RYLy8e6i",
  "key32": "5zQeuyj4bNVm4ANP7WiDqMiWcWEbwxCBbPurEvCcQr5CWNRqz9CFK1trvGDoRUSWv24BVKu3eEDqjA9rvsxp6FiK",
  "key33": "36ZMLXq1G3AgKoKZGXUkXGxaQEaro2MheixDP5ViDo7ofsaeFXij58iguGDyWntFffJpSLVpSiFVYCEVi4RYJkgd",
  "key34": "M7DUFn2JccCtjQYvYYPQDdjAaVDuxtWgawLFoxq2HSpQvu1eqccqHk5E5X4ZPez6CoF8dZuABArhY3R6q4udVao",
  "key35": "ngF9srdb5XmFfNBaU5NZK5HtTaXNck32yjnixjb4HMt5ki6PAh6RVE3Fh8wUKz6RqktgSTkm9i48VZm5Cojd7oM",
  "key36": "565Ks1wgz1H5D9e2kJZk6qn3sL3w3GPZS2AdC2Y21pDCcb3WbUMHm97KxWYtZS6kPCjHKkw8pWFopicRBkSoM5Ri",
  "key37": "3xjiktaeoSJoDMamRv5o5nctM57DS6kdF96JjJyGtQXedwWV5Eb3yxBQxredjtyU8BQXDuA97YGSKnKG7FEQpBU3",
  "key38": "3iVZqobeWa5wuDu7uhqCDiJ5LL782TFjYwqNaRcJbFkrCcJu6BsUq8Ay9RMWEb8iK8ggx3VbwdZzJiy4Qi875KNo",
  "key39": "3cZGvDxQ1j8zgm86Krzjc2zJin77vTEnNFP3viHvUCwtPuTSXMxyihryYJnVmRS1pP6x2eYreg4ns2FLkcGSUfTH",
  "key40": "2Rh88zBCf7TmtC9CDHVSPpJcvhiftucTaKmz8hAWgfNnfgov1pJifnHvggSSH2XxH3kBgN2QxXetcXqn2zjSjjyG",
  "key41": "EMEhqMGnLnrHrdpHytvp2AXcDj5DySaJHhXy7JaVFeBSAQQZNmthwtdQMhpgHGKBmZU5gScXcF12hRDGiFRCUvk",
  "key42": "5UkexSesb2Vsty14LdEwNG5gqGgrgj8gKdJNeMNoFyoBPofZsQiwTyMgqFg6W7FnJ8aEVR8UAfHewLv3iAwxtBzm",
  "key43": "VzikTLi2fyWnRAJFoPtvmTbePB1nEPFL8C85U6u7mTk4hcRRBtnoy7TteWTUC9M4k2AaZZBHFX69V6wSGdQGJhb",
  "key44": "2sXYeZRqt8dKqPASJaCM3ghHurFrQKqo7FdLNKDM4U7m3V2jWkhXqrbURvK2pza1c88dSUeFMgX495mdGxNnHJDP"
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
