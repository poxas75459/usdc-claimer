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
    "331B2ENMy29XzGFuFwWopBjKgJJAt81FqjM6fUC8sD4symAGi3sHE65F5qv4uPTDu9UuSamCJgJxvNzwPWPARQjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z8vVDgrT3PzxV5FhzXdFTAqNFKew7k7WjFz5Y9edubcbjf3FVTfPgcDDU8wtymJ5U8Sz6cR31ht72BeHw5sykHq",
  "key1": "3hyBxagJDbA549gq38joHU2gPSJLid8ZUtPCtnkm8NFMVW3TFoFqotZ9WHoApzGDnM61BQqWtxSpterfiTtett5q",
  "key2": "4o22NeZc3nH3WNVsjkix9XU7h836VkPL6k8C6e7NGPh3AMuxY34zbzQ64R4wZFp6p6hTtvyztMQiMHzyieyQi1LP",
  "key3": "4DbpJ4SJrrAKXadFfX1vsFGxQhj8CJsdviL3H5LFq8gSzhVY3oXKW4yZQyfyUSoiQR4eY5ZrNBhyE3aERBT2yb75",
  "key4": "3NL2H53FXMBsUeJZ5Ue3Ggw3VshHtBritZZXMJNiFUDafun4NK4HWiDJosotjeBGQwD65DVuFSCncJ1iKixpqVUy",
  "key5": "2NtY5TChR618uPHfYzxkjrjBtsTchzDVdipvnLH8fATZiKt512TXtT3D62AxJ3Ldt2BCpmddMmWjALhzjELtKfCv",
  "key6": "3xJD3L9W9X7HyPXitc93yBmnawVbRkFVgjjXFMgXphTTXkFGwjawaMYQgZrPzpQDHn1RKKpn8p1ERJ1fpF4mskHR",
  "key7": "2kXvWzkaXu2XrYASsW5kWJFaY1RCG7RvG9Gx3Fe2GQBHUhM8ZRae4a1kiu2WJspE9sMJFY3aCtjoUA7cDBWoDV4q",
  "key8": "2jpmDnsJ6HqxGCxiSkoDfKJ7tTLPLUwrgARxmoQsC482a1oQo3GUQWy5v2kt9J9zWTi55wdCD4y8kAsTVzyiZggx",
  "key9": "2U65sQrNwP22W9v413LU6HcKSky9cQ2hHPKdHidnjzmpaaAd9gymcqQ6ynscMMFiseSpczXB3AVFJbjjpve3oBsb",
  "key10": "4aEWoUUzbjtYNUveDm1k4b5rx5AjsMqSHLGjxh2ibC4kRULc2E41uE5QfzgFyFw7NtfJg7P7dhUKpwrtqfAoTnhc",
  "key11": "2YVyGJGmFicnTEdyjAik3t55GyZAqMWzD5phDePMEkvLG6uFcyzpsEhTE9huwiXzAdUhHRw19yCsJYBtcyQoPYwZ",
  "key12": "61S572aVtJaJ85RjhjBLm7mBmrcaNzqy9N4MpSkjiAVd4K9Bj6RvfQmowLksp58vgfgR58idT4fJGkDHzKmRsEx2",
  "key13": "6EVZU2SybD5HceKS4qBzKK2CJJALj19adifDfqvAPzoL1CE4kHNcpRjASqSBeSaeUFkYYDBcSr3f43g4B2tsSuA",
  "key14": "4vD5rDBzpmbKbJMZeTfhCgh2A7LqgsPpZMQtmXAGfqepK57mgVNXt1RWoPRPAYJt9zjiVPNUkjfvK2GnKHno2kx5",
  "key15": "pFvDv8QG89igLS9tWdB2aTn3evPCn4Bq1nkd3R1zqKCSTmZ7AUpvieGp5XvzQZmHvRn99yxAzUddmbCS1eBmUtJ",
  "key16": "3frhaFg6ZJ7Lc4zBCoX6ohRof27rLhbn2wdNW5bPVpgjifvmGJVsWwoMGYZg3ZGGM323VtiJzDL4zYejkDgrZLgU",
  "key17": "3PzbV4HJZ77rzhnX4h1FditBKMa2jVPrNPs6wbELU3oU4mKk6oCLmLcQbZomC9KAu3P6cN1FZU3HvebRm33MfynB",
  "key18": "4ACwx9MytTATWLoJUJ3uFdmi2UEskv4RoNXx8J5tYFghn39DWGRqqtSUukDMkNXsV36NPub7V9ZvsyPyAsjXmLqo",
  "key19": "42Ejdburnm8Nbt7gnU52XkSA9S7uoqrCdnJyZCyMpVVcGvmisG7JELiJbLCdN5vx2STHkyJRXeegGNfb3acBQRt5",
  "key20": "3vMsGWueKMsBMZkcdv5dVypywGjiRTKDYeJsDy5oFnUaMTMGpXM7E2cH3JrAkWuS15PvRADkscqKaWTDo5yhL6SZ",
  "key21": "4wjK73AWEYf7qUoJFwhy2eo6aTjo2iBwnf2bNgWKuPioFGYUnMgJoukE82UkusaiXyszatTN9tgU7gpbdzS54N3K",
  "key22": "5KD7HpD9mAyrZvafNy1zdDR3KdnXouoXt3dkvWpbuTn4bqs9Ad1WELMKRvDBSNvqoAzEhHiBkDcU4R63WYccU1DE",
  "key23": "jKUJGZNtTbZWBxz2bVYEXKnhTfwrN1JYzHm9goEf7Hzb51RHsqXf32ZJZYmzKKcV9mSVfkJ2b6dNgpZe1N5KQX2",
  "key24": "4djquJUi2bKiUi8iK9xW1fJS3EopatfWMWtrRJ1zq3wY3fkLf7MboLAVps3HvWN8MQ7Faprwkmr5RE95dPHuX8NR",
  "key25": "5EMEQcMK5RWwDBuzGfRXpxEZq5qCtZXznFLfK9y6FwhgLJD6BFYyq775ijsXgzEg6a6iWS5igurt2BUNDJ3tJWC8",
  "key26": "3U2MLFQzih7QCYAR2QLQ8wjSy6P2RthsVMsJeJQNR5SAxDAFTmJ5w2pfMY1CcHxnrBJvHkLEyi21Gkzagg9huxNZ",
  "key27": "4du3kuwY52PD3AYnMyg77wRZj9cMg2ArymTR9kjHyHRLt7ysfcbALi6UdGWFg7cyPg7ZKZPCAkiMXyk2WdquvQfW",
  "key28": "iVVmRunm9UwdYVGdC3MQ5VK7VcuVa8u9H2ot1zaL8ZV6RLLFyiytPhwG7QY22Tx1QVeauuatNf9qedUoLaexqFK",
  "key29": "2NUhWEMYqCH8WLxexg7CaiQ8uzDeiU32bxKDV4akqebkbzmiNRj8eE8ezJnib31yMf899YoPujkudeFrhmbzjqhc",
  "key30": "2o6aMxq1TgfBsKTqmrEYyiMkULBvk6NXVG4KBATo1ioadA6HsADXEc4Mgr4a1LWXb4CXrTpBbs4yh2A5WsafgTMY",
  "key31": "XqkpGqHeR4E7XNK8JMVtQbrxb6T5NwGFUVFhbfAzcwEKoHYFo8G5hD29SAewhNHKR1zVKeQPJPQsMc3Sc4twaAC",
  "key32": "5b8SWMHfq2jr4qJ5zWmn8WcAwEFfU2ysMc9RordEBLRfjy8NKugNPVGkf5aB81aVopPGgbAteBt727zAtVa1w6tb",
  "key33": "2P8H9mSaBX4LThLS7MXQVCCce3SjYrALxYTFTPzW5vteuWtocWAx6JLnQVAg3KuP6KFKYZUneX8Qs2eeEv3Cm4Ss",
  "key34": "KfvhBiiN9evyZfKJG9bAM6U5FgvbnBF7BGAxXQF77q548QVcQZvMff5cTavkQ5ecNc2rDhbTMFd3bRA9pzGcEgv",
  "key35": "2BbxCmajfLppmVtGaEymHhUR3MXvKgVho62G3huSPDmh5i3STPQ1KGyhU5Cw9bFx7GVo8xLT2DeYv71ARAd44kiu",
  "key36": "47kJYbsXEiqFGqLZRf9wzzzhKoAE5QAvXe6EsGftQHrLNLJbkUYJgsd7ax5VdN15iJUdCEomMj83CrfqEmWVpQRY",
  "key37": "2R2TuDFkfwJmECFrcRjkRqT8Y9ViDPszkRsbetU2xCBFPb8vo73YpuYVPm5aauxM9bxwyT6bNe6dJ6a9QTjXDGyy",
  "key38": "3SFgjNgTMHXuYxKygFVTrDqs74BdLxXNfrkiQQgVL86ESkERZcWrNVK299sdq14uMENqLFRp87UAzaj2YewWhQwM",
  "key39": "47niGRZUGSvbnuyyGAPpraeLtrw885kwUM6WLDjBGKgTdtCCffgyxJWpdtJG2qeHu6R7597yohuCoUdpkKruJAY3",
  "key40": "5iBHcYk9QqP5jKoWjX4BPUhBmKyVNQjqFNmV6pEFqqbSLb8EAGX6ZztjuLtfQWapqVM4NMtuWiPfGkPpeitnSdzZ",
  "key41": "5ehu3ThGSAgorSLbZfdGUUpEW9vUreboqEhHBn6cQ73khG9J8y12dnt1uXQqeK5yhyjYe1HC5rtuBKETZQ9hv7dp",
  "key42": "44DCVZHoBQFe8fJsCjLmiQNHpA6vFVuavqtmxTHFLsXY1rpHmBsEuWubXfoPqc1jg2vkfDeBSGWZW1F2tJaHGKZz",
  "key43": "52KyKUns1Tqf8sRFVDFg6YVCm3n544ppbH1P8SiQpqMA9BM2Q5sGFseXcW5siWp4rb9XPwQaByb7eNVbBUhCRHZh",
  "key44": "25JEjiFQbG2kiJ7kTBCzy7BQsexogXZLsTsskgR4CPTMhiRVHwRbhxTTxSAuVaZ3ucaf6oMn6GQLwmeej6Z7KFAS",
  "key45": "2QUNeBWJiftuX3PHko2fGnFFYR14E8RM71jnBXm8v1oYbZvuTgMpVoGJoDKH6maC26eSPQtDExnzaLoo4LxmKAck",
  "key46": "Q4rKRkbMXNsaSTYuoGMptLz7GVpHMmJng9zAf3CgtErGVPwmwQyjZKSqAbPWGDUj4gQQ3dH4RAGDKhdyhJciUyJ",
  "key47": "4NTnS9EMjxb9QW3RdKKZhWWjFkXTdkESadP1RBzwsXrhzuBCgtjp3u7ZGbfW2Pi1a61EhpRfdVrhia9sgcSgPC2m",
  "key48": "5YNLdayUBZUzrCnWnQ6k3u4AuMXs1ZVMm8rgPbMgMobAoEZyyMWviyFZY6kFUxougw3DKo2TumMJrhfc6dP1Ho2a",
  "key49": "BxR67imCcmhEciRU9gzXFxXwS32Mxc4rvgFGDuyy3WGzPmMVMqK2Tjq12Xp94DTs1hVfGVJABHVbXKiuv7f1dGa"
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
