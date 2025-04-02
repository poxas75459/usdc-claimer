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
    "3P49ev6Pc3zN96VujQaywbbDADXBSHS75Ghj6keQqHeyG3TyabhX1p4pjR8E8HWgiKAdW7qW8gKobCY2WNX5Vogf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPULsieRQD9qQKWJfGhuy7YBJVsUnz6ezrAyyhSj2NVe5A9uCwJYvesGsbG9QC1FzGPEwq5GGAXd6Ft9JTRb9Uf",
  "key1": "3AfM4siWVQXjh3wxYJYSC8hZ1tdJeCpjbCSZqsDrP5X1KLT3Xeg78Ge27wMe6iswXK3tRE6YGJz6SFYkXL6AmPGo",
  "key2": "4UxFymUbBuUYeGa1PpRCDijboi5bYxx8u2aWHgbAUxqNEewRxkEP8JLdHwJLGJT3UfqNkZXnbpxxZjscdqu5yJTt",
  "key3": "5tcTnYtxB44pbcPiiXsAHJTEnMwxHNrop6aW5xxNCgE1Wg8zpFop73rVPWeMRTXZdaMajEgEB2BL1NKh9McAwTKH",
  "key4": "3DCsGNr8WPxphHYfyveZ27tcH1ytpM8YLLpbLMDrJXkKoEgiB5PYmJoiKrCZ6datkQyz9DcXCSJGK5E9eckVihM",
  "key5": "5ksLWoCD7zfcp7VJEvBdAdd4N4MuEsM5dDbdnoAQCEsifF6ZHbwDLGcn6GyfVGc7v24FzhzqLTQzFgLJ3hCsYd2c",
  "key6": "2SzwLusGf89SMm8Ntdxv4eyMzPX9NFy173fvd2Lqz5GjztD4LYMN2biXyYqLtmEk5JsrmqEiJ5FvwQV3AgBGhVyZ",
  "key7": "WgthhyKqWa8QwdK3mXyoSzPLPuoczTUUQQacM8i91xohX6rKwAghWAQahLZ52aVWFxp8reTZtAUBH7mLf8sri7u",
  "key8": "3RwVwutZPpWMxtGr3AytPAg1jrDqkeon2zc1eYZ9mhFHPYwmBnR6oQoQuTiV9NEB1oWaq66g9ngrKVGrqgyyUni6",
  "key9": "4HAVoq8iyMNptsKUFUz6KHVQTbrxa9XeUdiC6biB6ACKqAcgNh2bMRJmddkhaEZ5LHeY67U3RrYiUDpXh31E9EHX",
  "key10": "4AtC8Lxmptc6nRQkj6KHun7QSroCo6i57qH2kLWad5Ba5BQnAoqYza61u7miLYDtYTYZ2aP3zcbt8D1fBRnEdxjD",
  "key11": "5vG82ZWExbcSnSqPKA4eApDV2jRrV3XmD8Sx13w53C577Sz8oJKCUctfki1upWHVKRmRa6bZtnmVF6Qiv2sS2CNh",
  "key12": "2oLSCDyToZqBytMgptU16rc8D42hQdbv1yvgYETCNYQZuzkEpKd3Xt9UijxiJE9tSCiyY8m92m1ZRYqkCQfA73m6",
  "key13": "3xWPBCefAEfqywX9NhN428VnD7t6HuL2YLEHgAkNHFSfXKHntEfHsc7rnaDtBHXVCWifsHbXmJw7TQd5qQJS31bo",
  "key14": "2WbWZRXChUYD1Bf1HW3YYXYYSt2XwfVnMLMid5iykuetfGvMU6igJw8MwrDEJo39Yq6CJQ6Wgk8M4y4Zi9n2U237",
  "key15": "4iXKfiz58bgoWJ32sA4nDJKspSMsvjGbWa6uNPETw2JRuQsVKTLQxDzm55Gn3Rr7ZUkyC8PxTvJp6UU2iw4c5BbY",
  "key16": "H1a6Cp6SQNJKVCk8U9abag8S9wbfGhitRg6FDBdk8aeMfFGEk5hfNAK62dEQWnNAU3wNvFVEhtkdX2VGcnnTxPG",
  "key17": "5Tvr3kaihe6yKSXBfHrcBWi7tQDRP9GmqwGKQxbYrAA9CExuQohQsDqa6mcL9yqbRRtLrNrJTwnFN1xQTKcEiTG3",
  "key18": "5DgSyUNbdCys7Cdz1jPLa51ns4kMmSiJKzYjCteMRTn9BdoHJnzyATqm4GxkER2fSNDLupjCo9srDPZNmDd64tFc",
  "key19": "5L7ggmKN2CWEmAZwCnUaygXHLt2D8h9c2dkBBJUEi6dzbTUSMW4mTkobjhSzdeA6pKmLdtCFb2uGWexFrkqpmKC8",
  "key20": "YXQkjhGdfdj77kGkw16FVz6ErxiGksmZua48RPEi6wybBJ5AWE9THx6EaKMKsg1DJiwgXzCCCEYMhWNpCBaHxHa",
  "key21": "2J87Vwo5yxegfrxJbb57QXvpKcuzuPtUBpmgMwC6kXJUhU3d8nZce3384yponYYmp1FYr3ktT6iQtoRt3m2NzDwf",
  "key22": "2P8qNKUgm7vDxQbHzFLwKTGWhT9k3UNk6kx2Fg4rJMPZhWGJogd86omtpgcaywmwFvdh5rE7jupeUrdmHCs2dYkV",
  "key23": "4UNCxopVZp5psGrYfcvxLEwjyRsHhv3VsmdvkDgjkXoA1xKZYgzLrVaXfASSuEewSyjp2FGFFHDGrWDQw7jLWcU3",
  "key24": "5aWhWney9ixv85tmFM9tjTPviwQQUduLtYPDryeRT9Zs4xJPmJtXWSYfzd9ouPFWaV49sbeqMH1ZUjScHWYsigNe",
  "key25": "5RexLWqjpssjZGzW9HB7apyq66LWBRE3BwsH15BUhcZrRuvmj5nsmRV7cTSRC8ssbEHmhywFXtKQfgvSNoHgmkNF",
  "key26": "5x2WmSayLNBYp9bucP56PtLbhS7rTkdZAULLuHqbgfS3MUQuYyGm7p9TuUqpjMe6piwMue4tKoaVF58sSbZafMvo",
  "key27": "5HZMZYvEGoomwFaW7FGuzGoV839Yqy2GCjeB3ynGrNtgBthjekQar1ZtDyEuMY4cAh3tC38GndhNX6Pcx1YopMCf",
  "key28": "5zYhqzyAj9Cnn7mYff4bCcwbaP4XjZor44PQ7Uipv7Lnqtu1mJLUQZR1pqq4kauQ5gbpjZJVnV4maVEeNczfRuLc",
  "key29": "9CHzZZMYBxhewWe7cuYo4R57jQMtMaXfvWDphvC6625JEmdJ7EygMj7Cr2qpUvr7xCqCaSfMeQifPNNKe6YYWke",
  "key30": "AmrWxue49pDXYVYXtFAYX3WWAA5ccfpuWKvmAbtRYGkNNyaatwZm2CmMu8LixWX6VB26svHrjjaZSgbf2w18CC4",
  "key31": "4QW4ZU8xP2A6Du8BRoYbm2drpsihJZ1fxJxAHu6ZLRdSW9T5SNGoJ6SHasKBArYCc64Zcs6883nhFkvtyNjrerYW"
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
