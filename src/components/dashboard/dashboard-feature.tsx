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
    "28Y3Kz1mHkFnLBiiMiqTE4Fb8EqeZTysWUeaoXj41Wr3Hifn7YP6yfNoEC4ANa4NxZCwc5s4HDj3xpsjBuvPJn5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZkN1L2U2T42CRYW7m9s7NSBW1ySNxmbaZTCcDoCV3vAQCY2gMd5vNXspZTwM3oQZnr6jcqMqxaN3xpYFxpFU2T",
  "key1": "7g5GmMyST3Zkah98jWo845wdbkHo15abhNkp1zE2mMypomMZYj2PyQ1SZvqG3g1drZ4DPdcgrHUpqQtpXu2krg3",
  "key2": "5za3xXDmsDcaQt3LpdpQ4QRhnZyWN6FpkEUARKJNyKwnKaJavCmKCwE3mdH37MdpBjp8FGHRgf9RJPSAZyxV8TSh",
  "key3": "5gmbXvxiv7kFYGHZfVibzjRnnLQ5DS2rxuQEaEW5ZGfC1juPLsxe7tGKKpnYUDzb2PuthoaCa1C9BK5dUQo5Asop",
  "key4": "QQ4gB6CcnAUgHR52QqXitJwFGY3MjzviF2rg8acQhiRLZUFKtDVtr5i3JXG3kG2fdu7nr5gNLYr36MALqukjm5b",
  "key5": "2tYwR5F82ME2apAWWhoiiknqJ7SXrqyKBut4GBoMwa3zA2f2epYVx51Xvdg8QarDpN8bchNZGbtYj8wYxCYCD331",
  "key6": "4J2yNTLgU4Y1zVYguY6iT8CJyr5upvEJEkcPzQJ1i2782nEiCnGVmSkVn4iQTpgpBXqWU6iZyho2G1u9U5yjtbwc",
  "key7": "5gZyg92oLjehUsmTzigXUoeVoxCmrGY1zguYVjRQ3bjuHMcNor6d7i3mYsqbzCLYzF3JB3ejjGYmPaHWT7f4K8LS",
  "key8": "BMK67rvCaPXRMKQ3RarvipEhDEWvUCz6ivuCdsK8Q9y2fhqR2F4f6gKFgZLJTcPxZFL7uYPKhhYa7XYAmyEPcTV",
  "key9": "4UgUqMnWd7PMSz4XzMXxMSLZ4dpfEezzWyeNoUz8hSBuEDWhzQ3PzTZCVKxCVdvA3AWy9upxqg2K78oeNEWT35mh",
  "key10": "z6sGqXQhsepzb8sjgUhp7d4Fhe6Mg1w2BTmbsyRpwrqCu35e9t6BCdk5cZBQh6GYRymHVbkZeKJ6R7xaZFKsDbd",
  "key11": "3LvSy24P9yEh7UEvmb9zBPFnntjXbv3CPjfWYP1KxcQzkRnvXCYcq2qsfLM74Z1fgr6aRaw4gw3eGB1jf4Qz1R7b",
  "key12": "A2AZx3iSW5GpQkjzRETbs4TrS9dG1b5zoVWCcmHiw229KRgg25MDfZDq2jgx9agpRcE4FzDe7munNsRp6NTSiTs",
  "key13": "4BnLj2D8AxVfFZ88Jko2rHV7We16JzvNQYYqYQAFKNV8x3CHiKbnezDhZLXtADxyXMRPPZM6EjEvreepWo19gyvf",
  "key14": "29ZnbHYdMf3LwqYsBwBgdXD6PD6kQEff5bDwwRqrjjY7VzwWoUa6uSyBxBMqbSCDXaKM2SpfuLgRdFX8AWY53TxE",
  "key15": "38pphTsGxCvBQTLzQ1W7tNGcWLGbPaCUsNb7zeqPziS1XtJFfdLMXETkainJFpAJWZdWPQ4xTdKCgj3xmjMdrwui",
  "key16": "3EPZePwSCe9QrQkVdLk4cg3ty7xmCEvSigo6pmeDvfsLbsBnYTXAXwNq6NzsXXSZDMwXfdRSJBc6SB2B6UbVbEsy",
  "key17": "3caPQYBcre2Aqw2eXK4Ach5ckrhtTMmExbcZZ9aGoenygyB2sLdgiQAbh29fu1hEdC9YCyzvkkBXvmvzozLHNood",
  "key18": "2d2yxkUJfuRuLAzeLRfiApQxCAyZW9pitB1HfBXpAJbY2sxvCmr9XzGfy73PiNohwUC4cRQwZZxZ1dQqorg9bTVV",
  "key19": "46JDHoNtKGo3Sj7PSzcs2mYV4wyJt6W6FGNniFwtYsErfwj9uQtnAiiWgXht3fPo55upzpTAJTm4zbHTyapr7PNv",
  "key20": "4sRwjDgLjEqHAF5QLv2E5HdQwUFycnPHhyMoBZXYCkTDZqryp37LfT18hzs6AhnKK6u59zs8Y9exZBmQtZ6mg5Gv",
  "key21": "GgbjFALKeqqctnfLocMPT2VMFThuBH5fBmeRinPkBWBvT2W11ZgriQj1EXq7xaDP3qyW4zUkpSmc8cMFPqZ2UPq",
  "key22": "5NFaSmd3FHzQKXFfLgdButMPjRK5Zda9XFVYAbEr7uQHG13VNGgJCaUadd75M6CfV27Zm3egQqcqkGiTr2jYbaLX",
  "key23": "3HPxuBNabi8pTEge2XqwsgztcgSbGLPqms38W9HFcyQBNVmKvc3X9nGe3t8TM4PuU1Gy8PZDD1DXWJqK5NyfWNr5",
  "key24": "2RwN3TgQt1eUPERCA6nqVsJzEzFcKDRHmtwETMrQ6CFb7bUuXLp9YARudRc13u2sak5wk74ey4NVkTyibgabgTq7",
  "key25": "3W9wfEszCVbfZ1HGtPjQRwopDw7ooDGynt8Jx9rXr9nhZASYvgZkcA5ckXitMhcSMxeEVzGTuXbdN4tRYaS5w937",
  "key26": "3DKdCaA5VKTNXYgGZRcWcpwWFvn42Z8QtFKDjXFUmGBsR4nq3kQ6LsmFMDfuswWVNsnyw9fLmR25N5EBFk9vXh8k",
  "key27": "4ivfB13wMcLdnaZez2kp9DePgcQGozGTwrnMjHsxbmzfjEw4Q3cnSo6Au1Ak8nUva6df22jeJJgHAQUUggu8cBsw"
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
