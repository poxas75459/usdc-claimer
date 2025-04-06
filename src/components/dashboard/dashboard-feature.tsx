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
    "47Dbn8ti6N4Xugyq722hsyU1tjfTq86crYvpnJcptZpdFfagjBd33rVQUax5kw8daGotYByhMxDPpt64k3CcNRCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xDp8LV8FJo3E5ihqbBs3vRH39jB5hgdP2zQBq51Ao9CXhRdkScR8znPhhaQpZ89aFgc1u8JSny5J5NMAVqAroKz",
  "key1": "3auJxcogqqrHUGGVJK2tg63VBYsr4W4xA9ScxzsNVjE8kzohgJV6TuRxuSAZPG6611d9BUzoe978NUpKRfbWjzur",
  "key2": "38qwTwkVpokQdBaMm2RSKCSxTuj7jgFFFGRAQU5SUkjdXKegfzMTnVonHcvsv6GMidMiwxw8q9b8ihYRSzZyLhPk",
  "key3": "6SSWiqACxJwMqsbjte7Wh6oXrj5aFDZ8oLXMuiehbymcJmTDDnPACMFqF38V6F4cxBcAnzGgBWPr5LcGzjFtKHK",
  "key4": "2KdfqtL4kWYNaNhyhfJPkmogR3Rkxq4zwVb2DA6XqJ5iT4zhC8PfqJDnybBSavZYLk1Se5fZg2ZMxFTyfjJivXpF",
  "key5": "PVpzNRRG8JTvwS2emuYuSB9H6Y6rPBFydWDVwZQruB3nJrmYP5yPJnkWmdmV4K2oe2tQLLfPfyfbVb8VYsar9v1",
  "key6": "5DeDn8vzNUHbD7E4SVnnLswDEdKZT3Eii6EKcb3QhmhVRHa18XhQrVLsdtBtHgtGUyPoH6Jb4F4XSdRuptrVeCfQ",
  "key7": "3BQRSnQNeKZCJ2scdMxGUte18MrKeKT6qdwh6L834DoyfUWFSmJDbAp6YzfJvr85uThAAJVvwG7H9wDuggdrdpQK",
  "key8": "5PmqyDkLLF3YKLMQ3aTKe57YcaREqY8QvA51Ed9CHNsNrwUBZUQxNY1XbP15rmjh79cYLcMcQiKtFxv58JPUmywa",
  "key9": "cTVY3vXxTX9HtEWNbbeM3Y7mE3xeNYeBh3WDzwAieyAFvRp7jUNauHKaYCbxJs5PSYekKGfbACu1oTv1V9proEU",
  "key10": "sv1uvUj2ur6r9bLwPGi56yveshRXjTHdSEfM2Y2gZJNSYhx7hCfHgj85vJCBWbdtS8ab6V29FmYF5JB8WuQSD3b",
  "key11": "55Y8TEoiENsGcCfmMZSddac8ppvfxV3T4yu8jW6TqdhSEz8SZwDunx4JcWsDLKJdiwZZv3rfy1Cij8BE2wH25mKF",
  "key12": "2yWP23FTrYPekzSWvU3znv5DrGTDbacaNrHbmBwRR3r5RwnJ2qdmLkssXPaYdZSt38BUGCnfTX6uB1YKvGV5pSWs",
  "key13": "2ycJHu1EWJgXykpDMpn8q5ojPNFMKUQ3oWeESy6xasayGGs5tdMUbuL84DXnBe2PCRqWvQjMAHanNHSover5Ar6o",
  "key14": "23EoQCF2kknZdFNkExBX2WTKkgxev9tMqGT7jTfQVpuEa8TP4FXu2Xsf8zxQ4rUJsM4H6uY7yFwRFq1LMKRBDMA3",
  "key15": "5CrM3qKxy6amwxsPcdQ5XqCgX9gWe8Uw7K81yB9XW5BgBZmC6mhwuwhDuYbcWAtrJnL5zkMgcCZgXas6XVcxiSwC",
  "key16": "2uJC9fBJdg9KmbKtXbM3CSHPamzXRxhm1eABqBkJbHXJD1XPmi9tLEaBAamwpS8rYogNDcDVpcEp44rYsvaPbNRZ",
  "key17": "2vyUrTkfr8BwGXzyyn9ijWPXgSXeSzb3RdJyAAL8RpdS8G3vYP1h8uXNWXcmGy74tkC7cNw89S9a6vSJScvesMSW",
  "key18": "5e2SFgD9msuFXsdSz7GVJteNnCUg8ffnXwPpGC5iBBjQuHYypEL4UGcbJ9XU6FTVxZvyfBCVb2XVuyZ1gCsbKQcF",
  "key19": "4jy64KfqwQUGCbdK6wTpDUmsFdbzhCP3Qk8ur9sa5MiSjfYLWWBTxKpDa6U3cyhoihXnQmY6R4JugrMxAhDQt16Q",
  "key20": "2AXXb2Qs8RGQWb4sAGDiuuJtVUxcLYBEBaN6cTmRknHF84BR1wT8qH7Y6KSwJJr6KFA4AUvwGv4by3CwtY7qGVFT",
  "key21": "5xvn7MfLMLqk6xjFEMGjZ9ykACGVYy1CbVFqCtru6VhqMbuHctQbmwd6766XRcxCb15Cj3eUH9tHryS6r8LfBBYr",
  "key22": "EznS3MmJNNwCyaX1wSyPoZbmBQFTrZu4aHd5vKG45QnrD3w7mfRwwHbCNet4pqGFTYRJh6LPQZYWc8Rwy2kuhJn",
  "key23": "2hFtSY5VRAVzVXrjQ7bPf7AXq1pvADp57KzazujBUQaEnKSnj6E4ZqibDGGJv7w87vfTvWpeHG6PyZPTAv4MeGrB",
  "key24": "4EajpxMxUmxWjasWLxjjhhwsiNbdyt2xXoW3TtpYub13Z8L5cYuNWg2Vd5XmP6yhdX5LGv6EjaXBw4eTQ7Znj3ZP",
  "key25": "5ADEoxH3zU7UvmpK8gFJFs6ovLvvjACMYfsVGQ92GC4F9X2yyeGZp4kTtBZt8akjKhuzWvbzF7pBBdLFXvn1VNhD",
  "key26": "3CcXexftML3od2ghFT4dxBBkwxegso2iZEEj4kk7vKpqqqdCoUKzQJBHKdph6k89NFBYzmYpiNbbHq4mQeVJfM3f",
  "key27": "56KfXhx5cthyU1xwVoF2rLah2tqUTg6yikdLUvzvvM28pRmU8zbVDXWpjMuodKwuubsw9XsHZVw2y4N9iGLzKzci",
  "key28": "21nWRiUT95qcsaPETUSporgPFkbLg28vWg5kKcrYpKD3m1fzz4X1FzRa56PR6ZarrqjufxvpiD3GiQAz43LfxHAP",
  "key29": "seeHQLRiiKMDbYieuRTkpit3UhB4ty8ZnRmxt4S9ynxRPJQiaPAeov27ZrcRdUJNu9e6WgdLm75Ct5tEQR4AvxN",
  "key30": "5nnwZ7e1z3wYpdLn5Soq1vh13D3TzHWcSwQEv4jrhSKc46m1f1NTyoXwKi3Bkpv4dEc4si3rcqN228jEjNKXcsRP",
  "key31": "2wAMAT1RXqPaDiZFay5piyUow46qxPUKaPv4rvrBgcAU79ffJKFc6nZDnLwRVUpmQPUV2gfnBVe1Jt2ATiq2iDhB",
  "key32": "2QTCR6JV5ZFJuMiv6v57WzR7Ra6BpwEhWEaP8VxU65pxWv82bSYjaefgDmX7Jxe3BqgLK1MRxw16KPqKVSEMikGa",
  "key33": "43Dna7mqcRjNMMwBj28Qsr2iYcuNo35DUPk4FKMDbuEymvdjmokF943QS8L6XdDzFHogpx6ZLM3BHSdhxw1zzXKr",
  "key34": "64snYVXxZPYrw9Md53UhVUkSasANLc3E1n5Sgipsre2wT4uKMPWAEHP2sQScFwP3vRgEA4XvHVN3peaRKp8XVTeP",
  "key35": "vsSNeyMNMSxHWRQ4T54cjzMCLfFpCvLZwUs9JbFTA9pWc7Rq2tcarNo91tEVQNz6SzMN4PCoeY9VEsEwhFcdcNB",
  "key36": "4kNTUiwGL2RoPkicRtXHedGZMS2sF7eP3AK3xo6RH4dbZuazF9M63yJECpHvrMBm84pZpbaP9W9DJ4tc5ZAy6U3T",
  "key37": "EA541Q1RS7BYoBuCMDVrw1MpE7HcJEhUyD3kK2MLDymWzqN8FJXz99csKTXkjN2bydr1ohL9JzNE3P27tQUFpp2",
  "key38": "8QMrc2JMuAxuumDqpVHcusiqoWf5ykm8wGoZsbFaxGw4iJWG3HPmN7uchQWUfihHR3JPqSHDR4yPtLdHhuwPp9Z",
  "key39": "5VJFYVmgFCYzv3aHfYjaQgq6Z8FFVfhB4qxsxW5EKVfLeXKKXuAzZA84UteA46GQavBmg4gLBCXUq8qPU9cYyCH1",
  "key40": "2Si74RkyYpLQs5eRNWTLPRGMPHvyBL3VDga7ETLg7d46Abx8iyz6D8i2b9hJjqJ9ke51MonphJYhvWJfH6zLcwsM",
  "key41": "2fXVB5y65XPGmsUVgfWVtzgCR1MWZ97psmpuQSomN22dMMppXFujLw2ZDReFTLuevVekaB6dXQoR21AigXdWQC66",
  "key42": "3UfgrVArbDrbQ5n6t5RrUanR2mkSdKrQrH6q11upQE49eWs4q1upHvYZh6B9XePWqUqYJ8HwYukkqBoN2q2d1Rr9",
  "key43": "2a32FpQTFk7D779K7G9kkoeiDrGY7b7M4GhbtoLqt72mHgdFYQiiX1j8J3yLwxVoxPUiBzgiSDAqXVhnE5tX1s2k",
  "key44": "HFfi3c2hCMXEszwZJofVfvBG1cDikpDUaCmzUiULLhMmZZ1WB5DMHuW4Nmd3tJJrcDPq28WCNo4YTS1urLM1Kgg",
  "key45": "49pGV1NPE6ucF8Wr99pWrJ8ZK9227mxs47FFMB2YzszD4SiTPwT6ePNBzHt417S18LBy5BBigYWmWMZF2zEL7Vhg",
  "key46": "2rXiwRm4HKrqdCr6WQyTDF7eLMMhYQA1inAtpui6Vg5E6TSEUxkg2XDDXwjoE1wTN3rnFRpUpFwB4PA2Y2T9kyPn"
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
