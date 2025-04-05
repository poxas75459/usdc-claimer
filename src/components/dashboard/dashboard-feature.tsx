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
    "2McuCh73uRdwnCt2HoF2uM7gKv1wXBRz9nK3Lb7vsmp73p6UeEXKDK5hJmy6rTBGbjYBZ8G3bTdEU9r8ogrmmkpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DKJvc7iqp94tfpNbYNi7DFYfN1kXWE7iZBwrYrW5pUUxdAcmFCNFfK7rusb97dRVh7rahFteo13M9WaxGuN1pdE",
  "key1": "61jMNCN7sh4Zw2ZKVcDJEdrCXApYbBYLYES2qsYQ7mAc64grVftvRWSKozVxJ7aAd7Y2bSBR2kbrNvCFVm7q8Hwd",
  "key2": "33Bh5tkKh9CPpxGXZU9JLGhb8d43DsoHsmgA6CSoyK7YFrUzD58D87JmrSNqjhCzAxvKxNJ2J6F4uQV3ckoBEJTE",
  "key3": "3UyRvdi8iNfZd7s9Vs8rndwzyx81rHtnCqTTFALiMcPiVbkWzCZ5wRmiV8fgAGiMoZpDLSAJqenBxBvL4wJtuf5p",
  "key4": "22asSu5A6qbu7H9vBZYhb32tZmYdr9aaNjydPcGBPESUcVhKMWabjaKVXt11po9JaguAgtTzs1K8cMKkJM893gYi",
  "key5": "qsLRbYd96u7r4ExbKY7EEbYSBcwqEYiY7e6AoC2v8ArowNmb13LXX3WWt2DST9Zb8KkK6SnnkUjMpQxqSoeDnqG",
  "key6": "3D3L6WgvF4yf1Uqd9zrYR5V5WPLiEAJv73ZwcgrUFiyxHYTGUVBYcM9oTR58VHrSrNAM1W8tCYtzLq2kXSJqqzYc",
  "key7": "zsdaob8i6SLUU7fPcYjGN5Z3CuW8veJNQiNhN15L6ebNZNoPmYwdBd7Pjy4pYkZyrcvHLXZQcP2vbPxL2WAviaJ",
  "key8": "34UECkqG1evxeH3zt7dPodNeZK8PZ21V6ncpp6ZFhXtnGQkn7LFjBJDmGxjctQUqrZQqeToxAGYTveXxXHRP5ANo",
  "key9": "2WbwMgc8fJRSBzRKM97sQAAByFeaN9fiFpZaiwVpr5q2XW1GfkZWdnp7q7rwT7etNnqrCx5DhDJRpYfzy49nu3Br",
  "key10": "59HHV7YTg2Nqkhvegi7564VCrhcQsvZbTsCTB1YVUtW5Ndp6ow8wCVKfoePGbQZnyUYRRMNLbZMavY4LGhSLThf1",
  "key11": "jPknEcdZXVm3jruWNXkvPu3534dvTtnSKdHbCVqPEjMDMSvbCZ59froboVmArfTMVswNoHA1KciqLr7JDk9vKwt",
  "key12": "513Y12D6PUysWdpZRHFpJjsTeU4c8Eg6P3uD1PjbUSfi8Kkasz3ipVKeLuAqoJP8sXfu45ZjvERPYBEAbcuhoSdF",
  "key13": "4BHWi5RWfPxr3HFjtgShZSqnEBWuoCgLDzPnDM1g7o98W4ppZDWtxgMJ8A4KJAbAs2T1T8KNu3kYXvW5es5avMWY",
  "key14": "4xooFwx5gAAGGtyNaVHtwqeFWTeLi7i9MpfxznQFxL8rZN1cfnGoGHe5JAycHxfncw83EKoDUrXiy25TTZRrs4yj",
  "key15": "5qhvcBdJXoYvk1mNkrns1N7Rck2xzcVcEhU9p1YaLBiX7gLMoxaAznFXKpj7PsPn6xiRkRm9h6NbmPR7SohXJzB6",
  "key16": "66KjFqQiYrUrnXuxhErJSvi3L33ExzYshyLxyMjGzhxZQWArKrYjsQ67f7GJ9FzAkr47BknhdnFvSULwJWk9Gheu",
  "key17": "2agmT8imoM5f21gVmZ7WBwfryKTSSrX7isWUrLZK1JUhXPFix1PStwo83fSEFvDkRhe15b5dB65jdoiRFk5x5EQF",
  "key18": "5PjudFnfQuwFVfzCbucFS2mS3t1jZXsM8CtxW8b4F4ZTU1RH4Uz85ZFtWMQodEDKUBM8oFFctimxjsqTpBTfe68R",
  "key19": "4r5se9fv8Vc9mobATxLmWmgMnaT5EvUpg9fzAJjKdToyDvumgM4qdyWwGCEjB1W7d2sRNMeEaMNKWAR26Yo3M6Zj",
  "key20": "QS5KsGAfhHpQ1MGrSYok6mMCb9QCaP48TxYyakg4vDZmLYVYGBjxNTaaApW3imiwfvfybKjQ6d9n5CA1ZTRUpZH",
  "key21": "4kdqYkPoSBpyYtYkZFXLp8EfqkaVCb4Y14ZbEebQeJeLSbYcjG3HtErDtVYH5qZMUWp8Sj9ShoQoSrpnpRz7sMNn",
  "key22": "3y6F3H28ns12Lp49EC5wHXEpqSQs4CbM38DNKUGU6hGgvkGMZRuSiQnV5RU7VAaQocLbvFgQDxB9yGpvY6nem3GS",
  "key23": "3gq3sEjJuqd6YKN2MEmFLPRXzCt1RFRaFc3rjEgMaR76MRb9GU7ofXztYTyfR9NtopRLaKRok2JQ4nBB85wMGMxM",
  "key24": "4VZxzjHyCsHpbB5SrkzWMgMvDgtTdQPuvDkQvTioecx53pPDqroQueTfB5sZ4mKxsMRjQPpJfGav1EU1tKheUvh9",
  "key25": "w4pybr56AhwL6k7HSm8oypHvWgKDv9a1TpiHuuet3FyJhv2nEQ6MyXwmHenhd1N6VbpvjMmNgLz5go9TZ1YxGJk",
  "key26": "5sc1FqM1H6unkJEYdZCavbcbzrgbsWcnj262zfvRaqAyVNgVAnMarqth4mVsujtdWxr9e72qcdAUJNRDDgZaBxdv",
  "key27": "21tZtMht1rVjKufYZfRiBrPzJ7cVqk6PD2XVdCGbpewdJ5h2pKG2iSDTxhSNL4YjWGU3uSFBzi7cekN8eqhqE3cx",
  "key28": "UwHZ6ioTGAv5ps521JDLQ82X98fjjPURF6nPdNzkm5anBzNqn426LB4jTEjcHdZYwTcgsXpWmB2AvRkYcwGMeKg",
  "key29": "3CXB814M1qUDcBqcYquu71X9sDmfP8BnkuqA1DUwdB36hzmLzepMu6HT7H4SBK8gP1sXo1AXWrnKk2UYnP4pe5e2",
  "key30": "41ceeTfrbPeGkUcufmadUgAx2161RKPBHgVU3oegcVAaytD1DYPnm5YqPaYHt3qchkDYwsVh1i5wfmS7X1RnmAQv",
  "key31": "4sHbRX6W32Gs9pZ5Gp2WCdVjfNWVX9zsMsKNEkDnmkMCpPukVXiziwH7AHgT77QHsVB7jKafpD6dkPiUFKoW8iTp",
  "key32": "5qJzeYSj2fh7LMnXeqFr992ciw7J6Nbs7AFHqeDyxqdpw6tzU9VKbPTTMvmiCPxh3hkgPUxK61rgVQz6Ay2PPqEu",
  "key33": "3CZGqH8T41FC3VUDDPuvMRCtEjzGR3hSox4Qd3o2AYmCn6Udo89wzebF2xAiSArPeTqXfummtxUxzNWi625CJbPt",
  "key34": "21BWaWhLPiiUsGWyQq6ToMYMg48i7aH2ARPNFcTJzNWYnhru6K63xVi64aWuQdDifzVgMDWD6nCb7p2BrWAf9s4w",
  "key35": "4cdhcuQeeQuHDzfYjwW7xubGLfARdrGQenga2zujW3Jgrs7JHQ4tPRDTzgVQWuJTYQ4qAKDiZ6FowWvSqGMX4sNN",
  "key36": "2chFhV6Yhmv3JT2qYYpEbXF3LkpcBhgrJDFVGghTGNosuumMkp112i4ATQY2SGUPgSdiLnk2NsBEg4tmqVyApNM7",
  "key37": "34qty7npb5GeDuWXfZm7ZFWP6upW8qLASzb19A192SqKXdnNFEFS57wK2nUtnaS2Bu4xxzwnFo2s5QPmqXkVx8Yf",
  "key38": "3Mrpyjg9WuksBk5dgp12tZdym1jye34VEu5NHHqHAVFMUooq5M1KJpKUx1fSqfCvXibndoPAuidKVunFULr9u2p",
  "key39": "5gHTDmKosPsC3mKN6xA4w6pADv6G8P3KAeGDs3siWZHZrne41yVMojdYH4xqf7VgJUJ462WPCBHgqA2aJ974UjpB",
  "key40": "2PT5jxA4sYEARRywUhghJriuJ8uguHA8gEYaWh4Rgi3E5DT38SzWUPFiTxVhei1eE6j1sCYyyD9e5bp4bBXdTAFv",
  "key41": "2TezaGM8E8NLu61e1caZLmXDqGvZnkC4KdtyEtY7k5kBESZkdP8SBWh9LwjrjX2N1VrC8qGUQi5bCu7BiA6PVeYp",
  "key42": "4jDeJrfdLyT4zqrsgdLGrQ5ZWnDNPZKHKbDGWh1MYxTEn5zK3qPvBp3JKZZfi3hxx5d3Y7gp1WurCSNRG84iNoDG",
  "key43": "66eCjhLqkPitj2joBW8hW7R2Ab3wsHUvtNoTkFP25k6gzb8dQHXMsNoipc4pKndLzTyHbgcaRw5hJoe6AMFX4dU8",
  "key44": "2LRVDjjxvitjvEDoTE7CudMG2DvS6LrL8Fz4nZnXcYRgvLe3svURSQQvE69Lp1fdMwDdPUKXSVserFRQC3FteBr9",
  "key45": "oQJTQGdYDXrohTizc5m4XKatZy9K6JJ3c5KpLoLrbpvVNfthaPR5PRdvs75CNJ7LEVeY2RCcAdnT58pbCqZrPd9"
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
