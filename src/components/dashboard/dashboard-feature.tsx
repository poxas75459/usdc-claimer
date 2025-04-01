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
    "3Ufm8Ysx4BzM4kTzYju9usvZSLsGa9cXb3uhdk5inSa8nRoSiCSKfsMG6EtsQy3NPCuutsH8KF7yRLsgog19XPD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PpwaLbcfLMjwKubD7f8QqcZEPVjRD8evQooH8UG3myJG1hkggUJLR2eCF5W2AXt5SaG9ow4JDtXV6ZxYYAGqED5",
  "key1": "LFaDNs5QwSZeZjeDWvZPoeQ27pHXEVsVjTWmzTxwpsrC4LjjtszsqKRZBkM1WV1eNgF7ob6wx2eaemutMUPwxqJ",
  "key2": "2HQ6mEzE61A5vJFSS8YbqJYtqd3b6A78SvxTP5oiZxis6UYZAfuKW7gK5WAr8QZyXvtPMBsR8uAfHzMuDniDE6SA",
  "key3": "3WPVQor8t8wXXgctAC9n9i9zWcFBZRhsjs6zrDZdZrXj1xnJ9oGjguwovfXqSxq1xqjfLABM1Yip2NPs17VQYqJG",
  "key4": "124FL1jUgM4hH1gmNawf8eSPmTyb6LbhDUQem4umyQzxkFKL8SCRHevBri4576j2oSvCkZTGfMS3F6q3f3mBEKTf",
  "key5": "DFUQRWftfJ3psVGqiZGgmtqsHjHaGQbzPP3eR1kAhmTEdrHYEJT2fbQJ26bmNQTK6q8fESfdzb9da5e7swDAZP2",
  "key6": "4DLH2tUMrLqzkAgXAn3YvUMmHPZtg5MJkbqoMXDBMic1u1mJLCennfTbhQpDjrmyis2nfMEdLzmCNPCU66qScrbf",
  "key7": "4VsyLsUgD86Uhk8G5bwhdvXAHmyP9PcBGpHEKXtRmMMNz2o5btCrCNDHcx41bUzq5RQ6yn4srULYDvXgT3N4jRPU",
  "key8": "4MZ6p2rqycjZezwM41HTE4xXb5paUkmn8voQ2AW8hXU72B6kkoxAiVjUT6ZR2aY9hK48smJY5q4LRSBXcEiuXCM3",
  "key9": "3nzkbXzf2CPuWatzEKsChxwu5VEqLMZ3hu7ciJ45XGtf2CkHDDEKqhyKyo29NSNB1cQRaLPvHxdG5aWgxCNgftDW",
  "key10": "4bcHiHPzqnVehCpof14a55Mn9dMQgqvX4Cwr4ZZBNyJd4kH3WCQYE1BS1eCHnbpvnPjzYqFY8twd1JaFHr9Vkcmm",
  "key11": "2Tje4ejsYnSmXkb9yZtAdgV9LAho2tPk1JwmR86N7PoR2zx27zcWmhJ7YG3buZvmSGkyhY4srdswNoeYnLkH8jX",
  "key12": "3GzCzbAvhtV216T1wziuASw4mwDNMjGsk1mPwiwhTb7bah48aoGsB7a1i2ur89VJZfARM6VRpmP7y4nXDtpMkn4o",
  "key13": "24WDZXQaoqhgipQZxZFQH2AunGazc7wBREriCMVG8VJDr3YrjQtyuaYRno6aJQDYoqNRVMGtYWemDRncFgnuPopf",
  "key14": "456q9Exv1YcubgLs6Qrvgfx7NBEE7CXeDQ7vUAQXhW4XxvZmXZSrP3d2voc52teNNj8YdwfDZTufXANSmn9KJzJd",
  "key15": "18hcoRo3RwRVjgaPTiSQUgjHB51FnXdy6oRXdRhYtMN3AB2SHbSuNsSpR3KCQ7GbZdtYqXqgWkB9sgshWzke6Lu",
  "key16": "6fGGsJjwCrN1yDuiD2S5suxngVxEBuJLJqZttL6KjGeoaq78mvCNzCS38CKD6QR93e8jZXjMwSQTzxMuu3bSBEt",
  "key17": "4ATi9E4PXVRxZDksq7dM3J7asYpRkt6peKjg8i82hZ5LSz7amJZ5WA29ovuv5NhHSAmgJsU3BcBYdJVM7sLxNdfH",
  "key18": "5b9MbNExrEhazwrT8yPhh8ATQswwFDY1HhhNTwzak7Ge28DbsmBshCsYGFLqWvTVe4JXYDDQ1WYdWMuUwYyu3Mxx",
  "key19": "3KCFVvUYQQXGdthSnKrZQEEknSxp8Yb2maXs8r9hgD5Te4TSZya652waCv1k9z2YtSTvHRwhyY6NeiccWhcMtSUs",
  "key20": "5xfeVwYiXkrUTzqvAEzNQV5dpwEdBkvEzmMnqG2xiZ6zv8EJLSMmVMgXJvTPM8Yk2dFScpHYPpfwutfFjRa19wjz",
  "key21": "33ThPEnSEmzLoinNWhsZXtNojvX73H2nGqiWLshdu5ArhB3ZFnTRAQXU7q2YBuczo5cTzwSSb1CkUNSRjFGpoGSA",
  "key22": "62XshHm7fghKGTnWv5XkTMzzLYHyCyAjh1qy3gsPZc9nRWF27H6poLxJAs5qV6hxBeXWCLac7iEqm1qiWHVsgzEP",
  "key23": "4XPiNy83a98a4RB7yxbeb8pNnWwXTAqKFwfWtcoZu8ZxM7CrTZUETsEadQ4mRwYAAMv7WiWP2TCwRm9A276RdcUe",
  "key24": "2EGcNMxmz1QBgN4jsHvfvc3S8V3aKu76Pfs8bysiomqAWGqcy7CLDWdWcYcRVCoRqD1qzRSfLX8zHVRJYMbwuUjS",
  "key25": "3ahoaEqfidoBhmgtyoU17TkDpAKPfK3oQXEEHPoYgpAYx8nz5F6tnHJx2U1tCw846eecU7PPoGsEUizh6enjPEbv",
  "key26": "xfrtsLr4XBi3AeS8uLV9Qz84hzTJ7T5ZSNfNwyCiu59tFvHjcReKK5J2dFoEEZ6uZw9AqfXLSVNgc7FuUVYJKJ4",
  "key27": "4dsP44Pdobhod2tMR1JtxJHitwg3L6GjuoTQhuAf6ppq3U1QoJNfqZN5EysFHo7eTEAA7xvbKH1zVZge5ZrM2xz1",
  "key28": "2nv5odJz9SHt4FD1njyqmEcLWypTm8LpbYTXJCQi8cJnjZKc9QbRHn82xGsCLxAoxxtBatwP9cvesmiZBBXCKohs",
  "key29": "4imonA2BMgJ2GzVmVBH3TZkxumKeFH3YiVZTWf3WcW1UbwmqyUT6CteynXJt3RyNtxqkhWfdyCeFFpTY3DNE34WQ",
  "key30": "59Jh5SFVcfTVr8uKHkoZ1JaV6rm2eQKZjXcQi7wZdjMTmAstTvPerBVQFpFXmKhfRRwSPhP7AJ4zNvFcoX59rjHF",
  "key31": "qXZDGaq7XiKP9CKBPTUtTqTFZzwkPs5RXbfCyRXgKdPpedEsLY75bMcAkWUq7oNbsCG27FpuVhpFkPo6Ty4R5Bd",
  "key32": "QT4cSftNC4zMzaEDursAKpHSvFuSrNNfDSdFT1pVuXt6j5a1yKxwHtgBetje4Q4QztBVkWLr2XAYvLvhQTB83y6",
  "key33": "4zMeWLC3JPkTshe5S5myW6b5CQ9JtqQCymhaULaqXXNyugj6sMUkH9peTBwPRnxMiytiCkmVKX1qZ9ZqHHo38eHh",
  "key34": "5pEzDGzkgoq4Yr4K4tV8BTfBfKSzNLDwymDhgMKAH1yPphowvcXnqLeHjEzcVaFao1hzcDLtn3NkqpyeAWT2ksfY",
  "key35": "2cWG9PXZJueWGfDnNJbJMLYMvREJyX1kUeVygJhgyFrmmc3dZosrUc6TUHKkgUeBEQZpcpnZkguzLyvH9kYtz2NL",
  "key36": "2FXR934vNgPAdjtG9YFd64WtHs4PSiGREPe9PcgS43oKRBdD1qixp59mVAnAnTBXTrS36843y8bhVXHRQyEpmHTG",
  "key37": "5pAKu69A9xJgEWQxyAGh665UYcoz3LgBE6JnBULdSX1WmPR46DpkxYUNbLrSsGtiExjTnPyXmF5dTthFrVDt1aua",
  "key38": "5bLQtvUkUk8kXj54zfjp7EahNBwCUq4pGCGV5yyb81uRdzmTMMBgvGQf5saNEDd6CvZYK1LiSZ9BJugYK2HFB9AS",
  "key39": "2wj9xKeYA2cP95LTvapHz4FC2J2KKmgHcsyjxdGeTVTzKVPfgNeLrApnVuZPq7nYVxySdH8F8VJCQEsWgjWQWPDm",
  "key40": "3V4oZQmihDN1pU83CgvNqzkYfVnvaRVgfgbXpG9bqYS9VnP8RwrHaZFXp4SjpMEPo2agpnzBRZmTMpRHXPLidFnb",
  "key41": "97So8jepsQQcUmVejx8UcV7JX3SruWHMMfNs1Mr5yaywrh3YnrmH3JKMr3YAEVTAGZ36CiBJgkQwxZewk4kemsv",
  "key42": "28Dvd6HbVRBUCsz6eh4z7QP2DsxKmnoAxhzKXPB8rnSuZHcvaZbhrX7HUiASW9x2FkYXrR3oZFsLwT4r694Pxo8A",
  "key43": "nBU7UUUDJQpXBw7hhFKrKkbc3X37hp4kpmugH4fjriwWfcZ1oJkoHxxLnrhmWd4XRNjRzXG4LCTQsDiEgBbc4Nb",
  "key44": "26XBL7i8sQUJmSUeBQ3edPwRuCUcozrbhoEvT5p6Nf5V6sipduRwsMrVgzWgnkNL8v7VoTZKk84FB9Qpy67GfCwi",
  "key45": "dzgpPKpoNchHP4UPWwEYfmnmXedCbv4UWqdpC36EuyerDcZP7VHzjXn1yipYdrATxohCyavQBZYRRXxGczEJCH4",
  "key46": "4XGzVuydkPHvrDrwXYKN17EpRve4aajtbArqjHcfwT18eX2Qncq7pMGicgusQCVMczfoHAY7wMsUe7trwrLegEp6",
  "key47": "5nQEKAJpJC7NnHyUAaKwcqXMqmCfjezNWtENtnyDhMRz76jvrEbkWk24JmSdMwuz7jAA1e9zoWYywnLu2AM5TtPj",
  "key48": "3c2uBhjL7d5UtLzKhxs27GAGNzzogTuWGFcFVkDeoZ7jfyYfYLGQfUXmYWwZqeEJZpSUB3JDCW7Na8S9gpmGqhkP",
  "key49": "5rzuFoSpPshP4uqmQiq25iVHRv2hexbcxePttrqfJDPfdXmMkQjkGibEeujnrypsbHiz7PEYBkCBTbcwvcipPsdP"
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
