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
    "2J4maCoe7BeyfEWHpkY2kA2JoqesvPYJYTHi52HFSbT1YZ7fbJfxXfFzyFwRtC5EdK1zpJjQfsCSFcQ2Fes2vZmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29XgRNbeWqXjSLD2EXFWgG9KsiobPazjE6zCbnH3MdN8rrWTSxddeobLKFWEbJbenXYKEb6duRe6w82iGwPudGLM",
  "key1": "2CY8PmmujzjBQKMT7jzYzXUncW5YXjV1FrsKNTxRVenHQfUYUKrX6Zn7oUD3kYuUQDVpKu9Gts7Ce6H9wYYusBKg",
  "key2": "jV4QwTKYnCKLp6dmmmFJgh2caLyKekzdEZpwVz8zhzJnnsdKyevcyroJo5wYMgoeaPyTopYsThvPBHRBXtU2AqY",
  "key3": "2rNSdtMz3qhjGJLkptQWfGEoFhpEWv4KGDiGnbo9nqcGLckhS4DRDuZrtTRWfsYPWhHKsps2n5fcsPBgCirDC91K",
  "key4": "3U4BB5dcGbNEHjrc7mJF2UdEJNDxUG7igV1oWQJDPEpy3bRUTQPcg88qeQvVUyvgLCXdV6U7zPFGhheick8bmeKX",
  "key5": "3rkHmsQwhd5qJgJer4UqXESYX7JDBAVyY58NChRLZMobLkDyD4mhBV2iKzSg2EB6pehZc69cJNFspwtf7Rv6gNc",
  "key6": "XqDiYbCNGYQHEH5B4Cfwis7bmcV4xErrjvpLawjwaGommJC6BUr8Yu8KLixp26dum45SoQBEjWo1HX8EAoNUDu5",
  "key7": "3vz5tKukj6XW6kGfShC6mT873DpXCCMSfR1qG3FH9nX7ixW9iefUZYySute61ReTMb9hEaADkdmmF7PXTsAGLFmk",
  "key8": "4QNrf6mX8TQTQRQKu7BTPDG2wPs6RQk2mZF8eDTzAYN5tTJvnd8jjMxVMH7h9jmUCbYaQcxZSXs1jfNNu5JSb2yU",
  "key9": "2n1FxJMtzoTSzGEsHcC1b1N5E94Fz55TeY4Dd32PaVx5KJVkMps6K1zM78JoxSxc9GJapTPMPDEth26Lc6uyEx7X",
  "key10": "3euJwDPrJZk81ANBir5hx6HbT5m1mqvHuzHU9daxWhVNCBGgRdEnxrgQW5kNc2fNvcccYW6HgZHXhn9TpX33819J",
  "key11": "4Z3LpEC6iwB9PpJMHwABBtoYhb9p3ohPJSHKi569ugLK5qu8AYt8DEAvRENrNPZZ22qydRWgNJK4oJdsqu1Knr9a",
  "key12": "4LhUwdAfavhXKRNf4mdUryjsWnpQVFW942Q69MoLsr6FuUTRrYU1WBTZoCkojjid9qbAg8vFJvVrgw2tCyGUCpSG",
  "key13": "XRwVKhHjYooAG5GUtSLqJSQWova8r9sh1eEWLc3Y4BdDFxjDuwTZP48x26Aay7URss5EyZtecbhhscGfrFuk5Lk",
  "key14": "2NhQq5eTPT26eRgSVjSK31RBukT9mZwg5pYPT1kFiUEggTzi46ikpSZbZ84svpV8vFcNcopAZhDUwzPrvBurRHTc",
  "key15": "3uryYQySRhqGqwnFDudBBALZaYd59NBEoW8Xk5P1LyeMLPi7zFd1wsUhfXPKqmj99Hx9xHoaWFR79K8gDx58KUVv",
  "key16": "4arAr5tKPTw7EqsgoxS5f6meKn5cXDsmw1nPv6qcKbbx8WQtiyx2vAGG2NLiX2dMhvA4ByB6VjYuvEPFpQKVfvV6",
  "key17": "3wcwPpPFWBKmJr9G74SY8FmQVuvRmFw3Ex7Pr8TAiZ8PRZYwtYjyKZvGygR5kaN1LYacHLf87jeKbmWyzGp6C7qB",
  "key18": "4spuETsZjxD4qnuE1RT3zbPd3cMXPGMmthDYAXScP5f3ami6DPvjYav4La8aASNuHL9XHEL243EqKw4pCK9PSkyG",
  "key19": "3Y8dJqqkoW5LAz3eALnW7KDzju648vUzkPwUTHc7xk6pZ7XQHqGXDDhuYfSzeNzRvCAuykJwT2nAgY7HXrnPoNit",
  "key20": "662eUYhHtyWAqt74WpXrsz1TX4DNrRcJohw5zNB7Qncuoxfhb6nZrkCfv9wrTzveBQQVFJTY7vZTfmWnuVjubtcs",
  "key21": "44q22xEGH4mPSnxnUNcEAYPBfotVTu35mMqJUGuquVVskN8Qx5PpHQmXEKWKyd13cg3Q1CMLs7Q5NJEwRh7fyDWM",
  "key22": "2Q2o8JdACrWDSCseERBqaSrYba7sxsJrzMgLq3ZjaiAKp2z3f4SMcXVponfutRqzUUgXheFkccbtJdwYZuyDSBGJ",
  "key23": "5rpPieMxWskda19vt7sMPZUe9WdnMXVFPsRnqmosj3YZWdGbAS5xZWMXvKXCmnkDoK5xvam41JtbHTgt26sxkwFf",
  "key24": "3xnPt8B3MRbWQ1qTgbehBUfo9gHMZYx6umShirCxVncuK3zCzhpzkJBV9nnuFa9gGjhbxTw7rcEz8NbbqqsL8ui7",
  "key25": "2WzF1675WSrwC1Q4UMKMpeFkBwQ8eKrZJSwoP34RUFMwZ6WbsmV4vb3ewsVMgsUd2ZgFuBtVDCQzx93gPHMfTmC7",
  "key26": "2Ua8RxQvaqGFCZddiGAa6K7ckW48oEAG7MNi6MM2LApFibLJY5JJWSuGL3X71amdsMf9tu4yZeX5GYuYDi3YD1Je",
  "key27": "2vweapRS98UDQyoPMKwcbYNgaS5rU9QnWEByYsywCvCPcwssiSEnagTaqh8NVueKqrAvke85c7ayGfheEpscpsTg",
  "key28": "4zFC5j6dznnHDYKKqXpSd5bwpwgyWWxLWP8gLE5t2pUwRLfrqFB93S26R4YNpyUVyVSciFAavJtRk922Z9sz77nF",
  "key29": "4pvQRSbsks58cU3pG1sW1mrPomjeGkphbh3oJN9JKacZFLoCj1Ah7m7r5NN3F5kYnU8297Tbe21FPPudgybkfSGA",
  "key30": "HVrAN44FgQS2Go7XisjfcQ6kB6SggkqbhZsveunajAdrwZhmkJEaoLwejWY84Go2BQZWPxgx3s6ydy1PM8YBBup",
  "key31": "p9obuTd8VFvEDg4vDit6yYmAoPCSmmWHNrjQbjNm2Dcwhtyparc9HUX6u9a4qWRWKNmYBYQbv12i3dxJzrRjKLv",
  "key32": "5i9wsk9gPi6uyrx5WAfHeiemsoYF4zhUzjBVDxjRiBTvwYjeMA8yfBnjNdChR4DQYSpFX6tssDjAghwwXoDMjwjU",
  "key33": "ikfXnrxqpsbzGYr6atnf8kPrzAFfsBw9P7CfSXY654pXULxYbdvxmGr9ERPFNewr1h7iKKiYveq8hNyDpmuW4Xs",
  "key34": "4j91E7VUcUz7Rw6baMrSatU2FiAQXzaH9xDsWzKggQqeGt3AbdbLCSX2Lvg8THu4paSbjXY2aS9NoCSaPWTfwLnd",
  "key35": "2QJuh8wSZYFMWGDVN7S4wJ96iEkTU6Sqv3zpWEqoxq96D4DGWrW1pvgwb3LV1HaGdv5HW8JmU7yFLxT8Xq5oa1wL",
  "key36": "3HSYFnyC71TsunBbiK39BkJjHBsxrCyFPd3Fy1dpEK2m927NQHY1aBEGiaU7mKkvJW83CvHoCeZd6EJvQ22kD3SX",
  "key37": "4G967g64ouJZYYBFtXNGLwgS2UqW9ayseSLxNBhLHSqWBBC2JznNsayiFR4L9TtZKkfvQ6uhKZjyBovGUcBA56Q6",
  "key38": "48MU7GVsyhC8qANv2HYVYkjSDaB94oSTgBQcm2oFBAunPVAh9RafiRbJ9AnDWSRZTd7VjMnhD4fNA4Tz8M4WAwpw",
  "key39": "5W2zwHVCs1SkBdfQKY4rh8L64pS93sCJiTVVEshUDbTqNR7eoQDpXsKm8fCfXdt89xq13No4ZJFVEVq4dHPU9k6m",
  "key40": "3vhNfR9nmZm2kof2EwSHCWDgBQqXXt4nNJqGrv6fHhvitnD6Vf7GcaQ6bqrj8b73wLVuu1PNntH6BM9o2ycqCF8",
  "key41": "5BGADNHnYeJYGTbmAjcRz3X9MN6WKUMcB8LLXxUjscZ3Rmp7mBaUjPAvF7TBfJ6GgQPq5jjvUYRPp3AhKruhyNMN",
  "key42": "42CjZiZ4Lg882BXuY8KMWrsrbWKQyrUmLApaCC1JcPH8K4aWxX8LQp8taHvyPjT7vp5QPdQE9bL6Eakr8X6C32cw",
  "key43": "VowN8eN1AuuUSdC6thcusFs7PZhdfEY5ZQVZjpXunDc5ceRHfzrfbEwPfo5L2wePKxp7yL2gsTLtUpqHSZg1F82",
  "key44": "2DBGbxzVyY2A7gRSqygJZHPJjADfFGWzk1Lrr3THPTvH39gQDRJCas3XzhDGs9Mjg6i6jVJ1t7oHM7MjpME9wvzb",
  "key45": "5a1XnMTatjGS1KtXeN2x7zXiMgcyFNpcW7FTwroVKSuPFFdUUMskVNrESXkMjyowNPLaEioYs1miuU7fZS3Yujpm",
  "key46": "5xJP6DZLYbjBeySHEPxtmZeDdEQjg2vmiHU2NHxkrR35THh7dVkbcFLJtXrPYu232wQToWPh5eTznpunLSSa8vLp",
  "key47": "5Dk18HR9G6Ld1DKSrqcFH5u9xdxkCQuMeSFzswu4NQER5GMJYmQg2B9DZvW4ymACG11ZQBxdhDqjxhwcrHm25aE6",
  "key48": "3qRG1SYcU48AEiW5jBbW3uExHsq2f1uPSJeXLqdq6VrtQLzKg3MX2vVeKAsud4v5RcjCgntPvagEPJeg9cvwb8rR",
  "key49": "2JJhvN84gJFWMYUy2jg3YZJJn9im18M3TCM52wdaa83AS3VmhB24K1N5etekNKq8QfS5dqqXh1XuGknzsETR8Yb4"
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
