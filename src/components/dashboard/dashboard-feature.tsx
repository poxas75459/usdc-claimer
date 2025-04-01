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
    "29P8QkaZCFYV5eUWhNUZJgL6aYCAswA5t3HM1bWJgGGB5CpCbgUNLq9Keof354k7iu7tvrzckog1kHR7mKdLsJpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wx8pkJ5wBcbJ2Jb2q1mJ9vMXhXbJ27csDdmtBPi6u6Ktk9GAnggEHz2sgEoR8pos4UhXpNfKBARB6rKnkUntN8s",
  "key1": "4mNHB2NzR3jMSd5TsvYHSyeQu9f5cR6BjREfFPFKqT9Ds7mRsQp2cKzduBcpikAuyheQvHACc6vugiCrXN6Z9Ppr",
  "key2": "3Qzzkx46RUXyMN88un6sjhSdZR3Bp4Uwi3G62YfGdjtGr6AdbiwC652to3rkFkWmwGQ1XAJj8zqkZESxYX4EnCVp",
  "key3": "5Xj7Gmj6uUCj5EUK3LWu9X9txEcg5Hd7ht6eNBfSHBwewGmwuH5qkewYaYZUP6iY2j36GJwT8ihrRhCt8skJLAs9",
  "key4": "2L6Vc6wvc3xZCnGfEegYT8hgZayBcSVVEtQ7uxwvBXU4QT6EoF3mfiNNvD4tEbWvNoneg5o7AALveCe6Z77UuW8x",
  "key5": "5aWnYqGBP66jTJ38ERcQnaLVJ3un6k1rPWAf5MYYcGczFJoAfe2Mdq1ri5qJyj6GvX6TXpoVEQ6HdtV2k66ynBQ3",
  "key6": "sQADAuNorSA53GePmUrfjQbXYFK5JTSBSiebW8dKUi6ntfqibu5J23wteXwGgQVSrM3FRnZhxxK5NuEnjx1csf4",
  "key7": "4y3Xzo2at5njBfR3zNKTDdDy7MpxGbCNhXyNTNsj8Kxba5VzHfsy2heZwS98sn5wmq7WtcGJ53Y5UstG33anPoSM",
  "key8": "3vyrBFAZfzjGnqGPD5Zf6wcaHiKe3kd8omsXi4byDF32avJMeYTFQWaa5jQkdWa9fRm7Sxu56bHDbfQFkctdGrfD",
  "key9": "3QJ6CpfRLPU658YVRNqwhDKZUuyGGnFqyJfoHGd88Hu6uTqbjwqjHdTcswKVvJvDEygXf4GZM1Djt1EEWV4cnt67",
  "key10": "3rwfuVFdxKsLhHdU2VCiAgwMA2U2fyF1AX1jZ6Agurdsuo595o5jAwFbwP6pqAehLg3vrFjikzNvN942SdsWjR9o",
  "key11": "44CfX4rr3oDc4MjoHoizkphtkHiekhFQkYAvNoZSrpFAfcjFF2FzjnmZAKHhF6nmqxXDuveC3rLJNT3djbnx11aA",
  "key12": "34LkrEMDBRFvHXCfTE5M43JU2636464xDdqTwMSxqT8UKuPJQ5ShxDnYQGFRjkqdScvuq9H8MfaUKApvi7N6gLkY",
  "key13": "4hNRX8FH37ugRRSbDF9kJ2vBtF7xym95vXHTj2RwjQk8dSEjVQGrd3W2Co8auiPaN7bFxnmGQDd1N9XiDey52XoH",
  "key14": "4fV4oAWFi396jooB6taBGic26xyzPctpyzuWb6jXowc5k26UWvg7EPLdM4iu7dm8rUkJr7kgZqYcsBaPevhAHtVT",
  "key15": "ihH8MDbobrzYQ4QQ3dkSfscf6yeajYkuQ1vri28AsobTebfADGZZcrhy4zxtSgTeDKckHaPXPziJCAz9Xb5RLhW",
  "key16": "5bJkj1aaFjs9QEYb5EJDmdmaHV3cuNn2J3VBCMy5SpEBLvNSA2TA6wnDCMhF6CvN4UVVHgArvDq8AggjVWNvJuLE",
  "key17": "3yNc7y1doEBxV89ZezZfMfRt4G5AKjUWJneGrrDvEGM42SoMUrXZtaMQKyXCsZEBre2GJru8vfuF1d1q9w3jDvq9",
  "key18": "41nHxrdHnc3idgkogkGyirtyrYHjAwCkZiVa9Fb6v1QdK98DPze53UFsZmeL2pC8Qt924GDcycUBhgq8fpSJoJgc",
  "key19": "5DHWVuXDiQQaivCWfqn2cZ3P7GPBtBkWvbsh5gwFuWWkVo5F1qm4qAUE6GKvKb9yQ4U1CQHCG5LFAV6irhdR12uo",
  "key20": "5TnMWYKyMJvYVzCR9gFRHsw5S64TpLEs9etVwCod4U9agckpHzckC3wm3rNvaVvDbXvyey3nLeVcKd4H48RmetjT",
  "key21": "5bGVj1VBNMbiSPfETqbMGiPiyz9Jzidz5cByVX5e2yFnqpFpXBq6yEHPM1fU36idN8sUkq4jUp1N4x2XFGYLBtjq",
  "key22": "56eTck81KUeAWMRG9ArV7xVhPLbNyoAJKwYy65KQUG38hLSqJYw9smfUmVJR1yvwtxd3LL4ornKhJsjApMH17e2",
  "key23": "5VKJFC1SLDgmaPD11zdo83PYwiTcBFqspYcKYZTCyLTDKtqwRUMMFpdjHNyh4woEkKaVQsj5WBCs3zt8W58X5bke",
  "key24": "MY8HmQCKtQw2u4XwTuJDP1fhPoPwzDfmEGy4YmQgVWmugd144QTsov3pMzMirR977p28TAJ9WQ7mmDbzZMCG8Xh",
  "key25": "55T1dnfhz4iT9QdsupCULQYTjgP7MeS31PmDny1xSH3VkS9ejMnvyr6rQtjatcpNsHJxfBugzyeWSvaNFDX6qkDk",
  "key26": "4YrPg56cz9JYZDSF3WKVXuA21wCYuWndJv8wRAv4XQH8554HiPe8xw5Mv78CVpoc8mtEY2BVCfavPVjfT8KgKQxt",
  "key27": "d5TfoGpDt4tuUM1PUmNPMRMitFGJsCngwMS7HSTDmoZfExunAhTfXjtF89ZgwibKbJUbJbX7zPU7GEypGaMJG5n",
  "key28": "5ASFVv4Z1cubCyL2mVynGQiv3WTtT8ahLh7TWrUYnbhe2tdKCzRrKfAeMuHGiFDaANUmmHXjRLhZuZ7mgQge3pxp",
  "key29": "XR7A7G5J1Kdq1dUGfHcFyNpwtfi5G7grHo4p5jQeno3bs4hydGxeHecNjsBZ4jTMqqyyJ6BEEyeKuCB8XFJFrNj",
  "key30": "3WGqAnE49LVnXtxjqrbMfuso2bSJbrrb7Eys4QeUSnukL2vLSQRpoYeDoXnmL9fds1DosrcHVFqGtP8dx9257LuA",
  "key31": "AU65YQp7GoUsBn6E8YabdQ6RziXR51eHYrKA3Nmc5g194DAmVXvgvKQjss4tWuBb3vLZtdJUmSN7ZoShpNF6v3f",
  "key32": "61H488HzQYG5mK2ABbjqFod44epE7H32rc738cXLFVNQWNpV4tf95q8ryackDtRUTZvc5iizJgaVvAEhxSHb9KdV",
  "key33": "2VcrQAnj3tKFZBXVZHq6zrPrAegaubkvxmnSxvNHb4igxU87E73D9uJ6qxPfMjqdR8desMwEW31rCDWy2Qt1u76k",
  "key34": "31SBzoj7eKvKq1W2St67nEdCCnj18vHZHtAY9tyMW5ZJoiazKfFVbFBGyPU3T27bBE8UtGTuCzuPRBNNCxj7RTcR",
  "key35": "3x8xcdEfQU9DWpJGo1r8BB8Vk7ahE1NywCw1FptffGjiJGei4UuxWnr5o1Qp4MYJXMFW6ybZTZ1aymaMhYbpKYu6",
  "key36": "2LxqdXzSJRJdwE3DgLYiqk2vwXiqrBYWXhQsEm5hXQ3PsiA9sZWsYKwmTvZgq6KFrvM3f5fQSQfW2R8YtWuhMp8q",
  "key37": "3QwNXCnkdQFxRyqSghsH92T5UoAnuW9XWYLZuHbNFASWqJ5n4f4jwuG2dnhyrzAjqhe6tnu9Cm9QobF1cXbsuqL",
  "key38": "5nP9E7hgnxbXEgVLjxAMELdkegrCf8L3wJdeBvS7YiEA44TH5jZZrUFwWpDntddusJySTLRDnUmgwPpnN3Dg8xNb",
  "key39": "7eRUNixJptqnggvAHEisCKRqBF1aUKKqrkL85tbZnJQJ2osDFZDk6SpnGHbdmFoVoVa1uriustNZNNx2GcEfHuE",
  "key40": "39Ddh7fDVY7UppinEAxWczBVXzXDzvwNM6zGPKJhPiMDsfWsQ2hzWEVfvencHHrS87Uq47mZnWcBLrXYVyfi5zWJ",
  "key41": "5khp6PdUyWxSirAHYJgVhbgchQTHPdoN4obE1WA1ABy4v5k4tbFQzHuWyir6Q8sMZtEGXiPLk7P2UTavERSiAGdL",
  "key42": "3yFWRSkw4EARUR7iGtnBg8otPmDZr4RwR1C6tdRMzzziMXPXuytBzm3Je9cPCavB3FsvNrnm83iaWaqK51z1wLTj",
  "key43": "4TkU355nDMp49vkFbiVK4eKXc3korpcwyekbFUVNmowgr6PR5pdfngsvbp6sY3daa64Gy91QVcYjG7SE9SzqeMfL",
  "key44": "5VvX9Ny3DKb2BjpxguZDQjfrk6neu281gE9vW5hNQvRhZgX9mwctrSkXPUFNMbLzQBVhRG7zdzHaWMxHWq3gsVvA"
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
