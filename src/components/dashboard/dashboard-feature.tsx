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
    "4WDk5bNgcaKn5vXL5mwjtoWsDpCYJwAC9YCdiy8Nd2Fzfek6Qd8xGiXiHnzZzdCbEvpGAU91fHY5J3m7WXvtNnYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51az1GHgaMmekFtwe3AykGBYQjy8WtqwLD3ikFDRjNmtLJG614p86vKAwBxh32Bg8HdVJzBebyQMEGfA7a1yuP7a",
  "key1": "5jaFN8JqA5MnpXwNjt77B2hAZ6i6DvZ4qtpptvkiALotsnfcUrBDBKtqHKHmYsqZVnwGLAKi1Ah16x3pvSgq6q2v",
  "key2": "2V2cBMCTa33K4XDAAe6hwcbw83JD4s4Fk37cvnTtYtiuUPFhk4WF2YAgBD1vd55VgKqj5hwWo3CE6DoT6wuWDzjd",
  "key3": "5bZfeQCTxD4bkZbhMhMSQKhAciJykHdS6VqY2B35DrQVpMZXMKUs7VHHMDJZNwH5GC9TKXVrGZCkhMB37RgJWKTa",
  "key4": "65R1rNasAT22hY8RcCsFDjAuVsfTuXQh7xEbtUv55cNJRbYhegn9ZTU9t9HDoPBiyqdVvvPYG22hnkxssdep8V8R",
  "key5": "5THQCtoYatDr1zJ1ypvjDw6bxvdzSN3DWr4uEhnWm3h3sYa2zE7tmppBUCb4FTZM7oLoRXfck95vWHLhkdaHuQNa",
  "key6": "2e1Q1xduPVTkBNUhfeHLVFkSbeFLZiqiwfUxKbNsaEWUKTow52Lbqya78AkRrmk7JSucKv7zWk67XisTkkQaFMWN",
  "key7": "3D9KhCJqnBaYwZAGyYLtBEhNSdp2FW98whLo6csVgR9nBf9YjeGLXSKZdWMHTgqskSXrPa8d3MbR3rcKG4T44SQE",
  "key8": "2ogwnpyYTazghyWR14Q1ggu2hrZ94cS6QqXhGQMbB5AfGzGo1HgvT6VtF7YthwDGfMUztogpo9x31YgmLBaXkYDB",
  "key9": "66NSY7TdpWuRFQHvyUW5rTyoTEPqVpMCafhGfrrMM185mBqottrFtWBJkqrkQzXmUXessd6j7put7JVr6SLPMo49",
  "key10": "2gm1Xqq1fP1TCG2Sz8pQ31fSEz5iYPDQfHzmkva6X3jnWb7AnRe3FZF1DreMro4E8FwBZgJQL8FuhqEsU4seBMJ8",
  "key11": "2p3Nn1fY62FyUYFAsW1deGeH4qu7iDuWZAkJ9kxtPj1yaYPS9QJ7Mi9NAxCPREMmB2JvE9CSFrudfmcvRwtvpVio",
  "key12": "QgPcGvUE1isHnnkRK3KzfqrgLf4J7zC2V5zwQTYrAu9944cgBpqSguY6PhGxNVtv86BvRNrDBEp9SodiLbtW2ES",
  "key13": "5TmkmYLAjniSwXkXeD7AK79TPeMqgGsfTTAQj6Us7GXj17mf3hodJWnZV7zHnddan83q34pTDGKmNEtY1FxGEqng",
  "key14": "5ahgn9Tj8ZmTEHp5KEkhv6FNRtDsnRTkJ8FtF8FCT4tAph24vRLVK7zG3B1NJXFKHgw1deqj3HKCSaD6QqcXsBBP",
  "key15": "GuTFTTFBVbQd79QCyA4aTvVxmBiTqAgQwGZNo7Y1yoAAWwMwd4HgfEJ3vZZbH1Gg51hjT2WhUi5mZNpyGpznfJG",
  "key16": "4KBEFmMbgFddkypfmZKLF5UrLjwFNjKtAoy5DpDZwBWsgHqH2cTjgQ9m1vG5trb7NxeGUZfeX67KKYueib2vtu9f",
  "key17": "2wKPNhRtQWvKFJrUGq5bLfYk9P1qSH4kYtxUk9qLG6PH7FxTKozpnmsHwf4PnkLr5M3GRsKS7o1MbRyqo5KQ22Cc",
  "key18": "GzJpevWRTAcVNNmRVxWGQEq66JYUw4RNgJkgiovGnQxbiJKaWzAmXCxp3GQBo17JP14ftnEA1d6k6Jt6JofznS6",
  "key19": "5TbtiBdfHNxJeC1hbLhJGHtMiupyrrYBxhvVzXfgGvxj3S26tKCnMWafM1XPc6qFD5gEBVjTeWGSTShGopskopXU",
  "key20": "4AT28vG4Pp9begq5JpKoovvrXgY9EJoEoUz3UQQyBRgdVRQiAQqpfcM8Xs9i7Bi1wCcbrVayxpXWfZyDqsubTd9A",
  "key21": "2MxXpTXBkkHLT3gPP3bMzKJmKmTufkk2MNwmFhm2svzz4uKso1ZoXndKNF7KguEujWmh75yyUae1S4h4iAKWVkU7",
  "key22": "426GnzP3kyiCcjSSMRDmNruitKoMCGxrXaXiFnsriBFrCZFDLiHwXrWw13C1EosZBqhXiQtUJwAitNh8dRq6p6Hv",
  "key23": "2R6CTu5fqaovyLvMLszseYePTfcpVmD8x1BYmnnZAYAbKZqEVLNNGGQe9rZktr9ftBqBTGSs9Hq9HXNdTHz7otvo",
  "key24": "53BRyFTCLq9nPbFgd7qfbgXrbJRs8K1ygAw68Vwdxq2A5Nz4wg1A8PWyJRRBd24ubz3EhNxwjeqyQfx91SQeQ8Vk",
  "key25": "67Y7cXw3w4kMxNN68r9Y1rgfEEQ1Pu5KBxzTQ8xH8h7jem47PFZqoQrNdmUeBtjyBnt4tQzSF8LJRgj6QvhHdWB5",
  "key26": "3J4oSEtjdXjW9sBuZrwKdhHERy8NoVSdfrUKUZP2VHtL1gYe9zoCoRmirEzCrizR8wFLanv3EHwzWpgHrkFSKmkp",
  "key27": "b5eipDDneUKSVAuN7pA81TGH8ndk4vP32ADdgAU8edyP9QSB7nN8mZoPVbHMmETmfUoC5UtLvUJbLuKGJxakiFC",
  "key28": "38vQAzwnpp5bWjcEtaxX5jrxgV67yDBGqAsqvFbRxL9b8H887dd3geSdm1V2V8c8zpT7LKjxLTmjaw8YxbW8U8gM",
  "key29": "3Py2n4EKcJg1xnVtJsDfje9gkvzikTUnCPBcahzRe5gTAEP82eMsAFwRmRRrAdXSfEGiBVc6dTH7XDM7o3jYV7cS",
  "key30": "mPTjdAa9QZuzH75G7XbsiMYUYe7bc4Rj5ebaHaQBjWgfwMMy5KPM6QUzUNoELGi1eqVtkL1PC4DVrBbx38spSdN",
  "key31": "QM1FVeGSHZpCHMYk9PeZhr5dzPKJDKQn6T2Kp65xudQf4LsQtarCCceiLd7LFqLvD4YM2G2UeafMVwgxYR9uMCa",
  "key32": "49oHiPcMUsrFWSzqKfCn2gpqPHzbQLfmoDkuj3cuWuPJ86sqS9Ahzm7idFX9kh7iKvCozJ55zxwyxfE4SBdG21fE",
  "key33": "3MCgbBRAzE7xhYxKXnSV1HGxkG2vAhaZatzyH16wt71TUK3uWxpugF47uUAF8sKzeJJdmyreSigPCwYgD1TUNJJX",
  "key34": "hAzDVYARXJjnoJRR85nDUai6MWe6tzC2d6gUSRZkvi5hQyuEGCvRthyLTK2Eqh7hvg9ZZkVegoF8r9MU7h4W4Jd",
  "key35": "67YXyCphJXvrRq6ZKkKSH6wKMiVYb3J6CvTWqoUJKXztvRWocEuqa9ZeDLSyqLFH9CY8r4UTxdZe3Nzynx7PhhbS",
  "key36": "5h3MRiVRiMkwngQm4FHGfUNKpAJNh1meU9ZkjcZDG2EYtV6R71s8yBVy7kkRuxqTqQmMMbpfYiLyhBherfAHcBe",
  "key37": "2Z9LfYyraJY91H63M9RiPBwsowxBTFVVig4WjHWDanQ9dDQrYQpvk7cgcTtCK9DDzN5Gw51L6swzMRgCx4DDix8w",
  "key38": "Vie97wWZjV1uij2b4t7isn8TcdGS2dvCfXPmHPa464x4JBQNknhkVteYhR7Gqz1nb7ALKfBa1YNqxEjTYwiDS6P",
  "key39": "62EQU64LTUzK9V4dj8qWwkbKFdjFtR5n3WHPtXA7FoVL4CLaCAfhpkMrUhqi5FeF1XE5i7TQxiPfwmRQqNZvs2iQ"
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
