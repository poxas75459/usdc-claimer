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
    "4MHsKcCYh9Fb81ZPGzqGFP59F8nswnc2dgyZhhrtJFJXf9Dmxz7gKK3oA86AaxSoUCKmbwYAiGqWgsrq6xDrMTY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ndG81JqRRsHmVzbksCbPzzUp5mEqTtsKZ3Xx6QEzRriJbWEmTKSdEPne5Fg4SFCW94JbZjTGqFucAovM8RTv6h",
  "key1": "3qX7Bm2vrU5cfU1VSnTxwoLHffyCmwaHsuwbyWZsfFJz3HR1ExwgoRw391zXvP3trux6zyQy22pPC3NP6MNh9HkF",
  "key2": "4ALAAwMuqhz3rCeZTWRcpewditDRfaXTgumLm7qyEjNUsqKQ4HRoQJfmm4Nx6Kx5tR3pkoyJkXb94K5zX81zJvFU",
  "key3": "vpatGgWb5rndWFFgM8zXHjVHbWzCDYUCKoNQvqutzPqF3coxiH6it3ZkxHsmPXjHa9XqUmvfXtwpfd4MWaVDcEP",
  "key4": "4S1ac5W7SwmBnvPig7fKxrd4bWhsEuW9RB4WU4rDNXyB3jXpZDPnhB5fzvB1MhhqTemejtzdmxgiYcmD5AHQKwbv",
  "key5": "3yK4Y6ZtWGeXdbJa6QjDhPZZcJv1Uuv2Buc7VbVR88XJR9cyQsu938DscMYc8bikfk8q6jstn4attjFYaa1ZUtFq",
  "key6": "qXrJECtFAMQZEakpw7UZrKzsxYAEK6DoBZRq7zrB94v2yaJja61WQ59D8n3rsznecRVj3fSqSipcAR8uLRipXT5",
  "key7": "AyetpK3qXDSffn3RaA6Lc1rLrrGPMrN3rSfn6wiH5kGC5Gkx9ajAT858WA1HawTk3r3Ss9zA46YaRB8Yezg1D69",
  "key8": "7zjbom8Tw8a9rDex1HYC2FXxWdTPLwm8JcQdJzpJfRMwWC6oucLe25fARW6CtZTh78RF3aN1Le2ma1oMcv9QakT",
  "key9": "4HVxJzwxmXXDxFyfD8xYNi8ks2tssh3e4Am78PZTrzBU25jTzwJxQyJHmFKM1CKdhycykeTVQSwwovfMuEX8i35f",
  "key10": "e47epw6SdMcZoUW3EwZeC7jVZdzBtF9eNkJZ9Tv8uwqiqq3GbafZEhkdGMKNzk1EH1iZEe8JRANKNYitBWuv1Bb",
  "key11": "65BHRTf9TZmt5s5fgAwmcuCnL5ScdgzjttbYWPM3FnRwn3afbWP6yJvsxx9SG1AaFMgZALdxtJo7GaNQGP8uTXtf",
  "key12": "3MatGjaJVNJJ5QHZMXuqVupfk2jJnyuLRrWUvdZMS493LqucPCK8LPKQ9r9URjQhbRhYpZBtmhdMXbogVetquZ3f",
  "key13": "ZSq2Lx9Rthu85xEZepr9xrPhAeaZgnPzE8peY4VnXcjkAqV1dXvkAYLk3aE9eEtmsR1D7sbm2HFSnhFevHHQRGx",
  "key14": "3QQvHaktZbosF4EoGZzrHVP1uDSZFmRgK4THxsCX2dBZAoaNY3aPA61aEnLvwVHExWYoZSfKEZbw5rZaCUi1pUHU",
  "key15": "23FAfQcUkQZ2QESTWY2Xy693bxxhEojLThKQArH6KCWoK3T8Rvr7HGFAmnEcNz6G3Y7BZTMekbYqyprdZGooNRx4",
  "key16": "2vxyRkPu7Xif6aZ3vRwo218oeuHbtj5Pz4vvx3Ni4eNoqV5mqZd6ntAA8XBUzcCu1LU8CokWEi1ERg5RC2dz27da",
  "key17": "3F9KA5rJko7YMNCXEKDcAbmuZBZZaRQyYjwrx5kotBTtTXKqzFdGzRxp7WQZCpg68YEMpuvX2zw3As6RbGU2TTjj",
  "key18": "3sxfgnYjMGbScniDW9bAwK5txKAEo61Zome5RkAAibPHA6NVzVfcjdKi4tNfzWvUBT4ENxA2WB6J58rXxhgkWfs3",
  "key19": "TQ53fP1yPRTJ7dqWQLyoqJCbH9Eq4ffoEhHJUcQGCgwyjdTh1VPs8gpa5WHptvYsy2ZXpqKuy28ga1vw6BNi6Gx",
  "key20": "5CX8sCqEBDDv6aVgjcboz9s5nJ5n5K1nCBmpUzLxPV7zvAa1vgcb6AZJPB7ChnBgCmA6DtN1fudmJMPkFA8Z4QwY",
  "key21": "2hTRvBz9gKsQmyMGsRAtMDe61mocv5MkHwgnWMgrBw7UkawU4noikooc5bo183ftZNio3qeEZn8tX2Dant6taKw6",
  "key22": "5EDZATMK537C8TrVgfNP8mRk9TVrfzTtKxqbvDZkUoWFrhd11ubkQoA9vz5uDRiniL94xyLUMH829yvqfMnRbj23",
  "key23": "5okSdtiYTcLeTNeoMLMtrAY9CQ2edYNB85RARcLtf8sjokguxoWjqkmxcUJVduq7EZwsjEGqS9jGPSro1fCtvsbv",
  "key24": "25kKoLkfogufrUrvGbP9AieaXPtWjwaboHXCcbgY7xpuTQ6choxjbxhmswaoLz8UfPMup5NUf3XbJvhbCyPWsCU4",
  "key25": "4Brx4TWRWaVURcfbk7bLDweU9HoXB9dfJ5njZNvwGgGHg1cUGu1Ndo4vrmQiTQXzv9KfrhTbKnQyzje8tbTzwFKY",
  "key26": "awbCiiDSeLBG1UA2AmNynU5CaGuZQJdWwfv1jQLodhWPUu2cpa8CFnbCdM51qBs6phWUFhNN54YG4ujyWd2qgUi",
  "key27": "65zbQVQrRgeSPK9PN8ow9F3jNM5MvQ7VNvyL7U33ct7Atsh9TnG2HzrNC2zQh36S4uHeGVbMXGa5rLhYbk6kwj9Z",
  "key28": "3D4qwJ1eHuH8VLMW5jMMGdGtvnysWwYyCnmZNf54hTDJouZEvTxcpztNjKNn1TqobRWBvMRjTX8fxcns7AUt7qhb",
  "key29": "4TUoWPAB4x3u9e1MKmzkhGRgLm5rQLwqfPgbfRFcTmTodQsjzHgk2y3QERyBc8bMiXBR1K2cLCXsN2nonXM5WzxN",
  "key30": "5Vgg9tXdFMPVAs2ozaD6PbWVDMPTqbMaQ1G54DPgpgZ5XmZaYU7EqeWGLKciHVXE1c6P64Lj3nVGoEtMmuJsfe2s",
  "key31": "Dr8BBwuJYqbquXA27avwfAtzhvm1sPSHaHMqUXqZXYJpZq4Qzv2TAnq39JvkV2dmJS1Ne8C5e4myHFBc1cexfiG",
  "key32": "3bYjzq3W83vTJXyhhfb82CcRx3u1BCq9fggeqsKArtWAHaUownhEDUaMw48YQDwgoxhoFCe9g3qpoYKnCQGuri3g",
  "key33": "41ArKKcQxYudmeqanbVgJgJRSe3qdZ6nKPM1kYHcU2TJGeFCrQ9HEystYYKQrJVNAS6R5u6WCqMGfGXD57EM71Hu",
  "key34": "5W1D6QTBmnYWJ6WfSbfUQHCgVGuqtbib9FFh9qfxD22LkYZHwCxjX2WvWTzoCiDTWEm3qkwzuk5vJt16Q18XSTWU",
  "key35": "5hWiw256PywWnPkN7yfvnJFoLumsL16HAtZF64nJEmLFgJfKqDmxcM7ERGRZEhHLpiLrbyPgrv9iuHPryJKSJBtS",
  "key36": "24MpcuUTr4H6Awv9ys7TXWTEAfE5qYn9HL4mfuCpv8w6tGVjpDu6YmPbjkXJNVT9Tm5faXPKRXssax4r8MtH8kt4",
  "key37": "p495zVHegu5oRTceYYGQNkbc61Yvo5QwVjZfL9QCmRaxuGtmfo8RFmDJ5aJia9S5N7BMeZr6HnXhtTNiKnXP9jJ",
  "key38": "61TkF11wfJCjor14v2Fn7shf1m8ZdV8DeoaMhxi5PpcYBMgP5YQ7RDsmspdyeuqwmobXqU7oYBqpgmjYqRMWmbNh",
  "key39": "39NncVParqri9gyw21DAQgrmUC5VWdi3fB5onQ7V1B1o8LyvYEevQ9eKpbdUGQobu73X6aLF4SJ9ykNxNrHkshah",
  "key40": "WdLpgMKFpLJUapsohL89FdvowWGNxL2jtpaf4yUdetmdehaUL6tD7hpU3FR6f8HHz9w2eTSetqzUhPHFMumRw6b",
  "key41": "3PeZjLYLK9cZydNp82GJ6bjg7sRzTcWmjiTu9xVMKpBwF7FGBaGD9VGgRTGbEAHG7JSZNovMse7gzgnFB8hvtzLZ",
  "key42": "StHNENnYskWCNA3yCpzBJtCuEKUteMozuRJfPamHrXjU2bbNin6doRr9zpVwbMyyicxWZ2NagK1bHp4epVrz1Ht",
  "key43": "47ZC9szBL2Nbe26AcAFAdBYXv49w6jCjyoHusDxfzwtDDwf2nNfArQJakZeFsJLT2TrZaT3NsVYpKTvKDJpuDxE3",
  "key44": "jDRzwg7F9nSUwvQUdGE72NfmvhhEYh1SEBx4XS7Tc6k2YXZ9d7DSfAKAehg5NxvDPtf4RdRpCuectX88adAztrs"
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
