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
    "3nbAHS9yd8cq9AahFtWN3Y3DZMLN3BuLUGKYLDpj9QtNoT521ceMdFTXBCE15JFUqjn3MXUcBbzGUVUtNJmp9LVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gKwCnvj9wUgnqDF7eY6U7UzsXpXiVbTcFujexUi6AVcvJzPfqABYUsfT13F3AtYMCXeuo5s4Cg3VM6r3TrcbABr",
  "key1": "63FgSVa2LP6yujYpMVGrL1t5ScX5kpYNfnFuJQHJMFX4JPoDhTpE45YPzsPCV3tu7mW5DdXsq8bHn2LLhxucNYj5",
  "key2": "3hgKTpAX9CKFkA6DGYexg9xtGTYW6C76VvyjuQvyrGBGCzC5QAFejcnJY4PW9mfApNNcKuaWbdooa17HQXbB5nxv",
  "key3": "2aRSAUpoL4CtMRZAhjnSrKHAzEUAjW34j3E1QD8caUGRhWXGY12MGGvY3U3dbzGULswngkaqELoAUySXUeEizmB2",
  "key4": "5AURzd1SGJD3ybweu8WuBZwB3GxegEXKEN4GcrQghPgL1rDaWnuB7zCXT2k3EHvt59DTJh8EyzqnRQTMqGuAYrcP",
  "key5": "3SFHQQ3btsSucN9rQs3acuJcWoGzAoA5QDu5BRYxDaHYNAZ6t2K2KY5k6DT3Gfp7UXqXcHEPFhCCKsSK9TSoThvg",
  "key6": "29mY5WSxpCxdZBSwrYd1KjCoYd71tGhUJ2kzAWYLMFiqCDBrcWbZZF8tprBUvaFGVgZBbAeFFxpWyno2CTN4QH4E",
  "key7": "3MkSJihXHfNY8H9otujMQjUnBPZpdWteekdwRTesyPeNWfvqojH493hqpX6Hq1CWPDiWLQcxmknhpMzRTfZmQZrW",
  "key8": "29dD2DEzvYXRF3kpuqiV8VgfNGVLDEGsbXCBrTsbpBTDvpfHfwUqZrXqYeimTwJovj5KKG3C65JQ6Rd6jjAq8LBx",
  "key9": "4NXXViBiDk6SfZYzgusx4XFtxo4s8iSoaHUyizXZVzTmb9RXQAyPHzxBnfMCKsUevEBVJ5HiUNyMaiQ2r2hZh9h",
  "key10": "3AkYvHUoYPdPBC5wuaRqJBBJ6pdieou8GPiEbRXuRFev5VTdRsvx5VpDhbmCd1Z7xcDMYBrK7ECnA7W2ZHSyDQDJ",
  "key11": "41peM4fqoMGnWypSJyK1XXAWEuRjB2aCAQGgQJnkU3x3bryVttJxDRPQTFXRheaDo2ovsbhttFSbCX2eqybxqeH9",
  "key12": "2QZyx75m6Sxh1VbUwSQ9t3wPPc9SHFEY5udZVNL5pu91eg6h4KVPBAJkCQGYcgz2x24emoHLWakKJM4DeYXKuBYg",
  "key13": "5kX5VYbHiJBsTLptGA6w2GuDTiFkJQw72ZhjhY9vUxgWnT74xWYT7gif6gJX63GTxf8SFxVzffAyMcZ6FGa84Zxz",
  "key14": "57SAfLuyywTjNTzm77TL3XMgHsWvmfGJbyM8zNnK2aaY4wmjR7FoWiagdp7wGwbia2EiNKjeEz6NvB5QuR9CJVdM",
  "key15": "2LQsJmQydwCu3bKm6h2atbvCtCwG1cVF5oXfvQiWGsgUejeQ5yf2NHYkhRhiT8pwFmVzEzq8cae5t4cbs1Pcyy8e",
  "key16": "5oL4y1NJu2dcvrvTVaf5nwF5NBDBTCDaz7yQLzzGcMvtAD3xpUjU61pWcnHSq2Gai79VMrYGHHHer2sh14ktBS3u",
  "key17": "29ZQCUejuGqtwBVKgo4haSsgZ1o5PMpFZmM9hSS9DuKSU5kMWnazhiPWew75MneNqAXCHoXDCyYxbAp5MCFC8fx9",
  "key18": "2bq2RYkapmdn3aCLJJvZfztLckSFKgAyS8qzuQ2GYcrCbGNstHAafmNzev44ak6de4mnrC8NBucumMH7GkkPLQJu",
  "key19": "52bhFnJuPvZtmq34ef9wLgbGXuf8Ee2fWVbhWZSw4bC8VGPTwpVHzbj3CttaTL11FkGgqioiHBjGtbv3qjEKYFsZ",
  "key20": "SMG3exxp1DKg6mxwCJmm5tR5oCjEtUrdX41Cbqfgaama1A2JxP6g1o374frd6CzeVBgRecxDGkL5dzUKf29pg5n",
  "key21": "3KVTyKGEYAKwgGSNLfhvwpSqWR94CTico9uSkXoWSgDV9a5NqLMEhntUu6a9eAzqHdyfjwS2NQHNHwvYaHa8i8qg",
  "key22": "nF5s1iLD6RcUnUoWeVN8AcbLdqSCwUTorY57axooe1z3bHR8xBj7RH9e4oD9jDQuqbh71uBzBMkSDxK4jve386d",
  "key23": "62aWQ3AcDJb4ceLxUzWKnN9WfiPytMnxAor9pJhqwDpMVZTXxJC66GJdRv15QagpeNwvnU73aAk3Q1NMV7yA41rT",
  "key24": "3EqxSGLjyXtC3uC3HxJpbywVAebxLD1wT2Scu1NEM5qm9uDi3VdvepDuJjzP8et9oWu1heV2kcoePmFC9GLTRP9N",
  "key25": "5Qk9tYCmborLvLDA5XC9AtnMDWEGZBD7buoBC7GzVntTgHRw6E4QmL2McFFHX2goaKYTeMsx93QEfb5Bw2DFMLzd",
  "key26": "3215Vf3b1xi9mULfWabxeSEXdekjaAgijRtUifNuUFVaBv1VxvAF7uSyyPVSfmnjwQUX4Z9rMp8uDibs45695TYS",
  "key27": "4sUGubyukFMpT6QwLHVV8ycWg3Pz917HhKnZwYcGarSFtFJ18LBJpRAcqERLSiaPna6MoSUyBsFRMaGRDRJHQmG9",
  "key28": "3fy5RESLAuz46nqPQUQktmvwzmPDswXd3TtWcC7w2hs6pNkH8KS3WQDgU2iv223SKVAvcbpw2Ke7oZN69e4pgZrg",
  "key29": "3Fa8f6TxGAwZP9q67YDwGFA1UPXbd46R4p5w7YwmLGzjL5z16kYWoCSPS6nQGPZbztssKWSsc9nP3pZC4t6TWrEG",
  "key30": "21fGBJfNLKeTaNUn6CeDQNR8HDtzkogB4qvMkwaxcAsUY4BaM6Vrkqhxfu7t5uXiRjPvt9N55Y32jsyKnz9j1Lkd",
  "key31": "4h2DAk3Ry1WAXxfaUzrJspDutEL8UWHgdAjV59zZgRWGtMj6ZrkeQThnUv9Fjh21Ak49VMuqjMd3C6jAUQFh5kPr",
  "key32": "2nkVDW9hrUYBCG89cVWFViCHuGMTzHLLTPzaU7oZ2KqYdKPobvBv5b1Faga2kwPey7McGFVAhNYaAAkhKW19LbYV",
  "key33": "6qdFNz86LWYAYrBoaBX5PerZUrYsuTh3CYRKsSF8LLT1MxUd49SpLSm3vAYPsQyF4F3NQJinVsQMdp9mByWmshZ"
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
