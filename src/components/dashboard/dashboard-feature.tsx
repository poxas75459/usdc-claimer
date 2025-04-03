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
    "3ZKHreXxa6hoiDfwF3EKfZWjvBUUp1ikJPv1wvUvxVB7uAhzVYh12SsmShZeYpE1x2UdEfvuz1iA76PYjgKnEnLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HeazumkoeRYdL88rwsyxRpUAYEAgudp1k915PMeVHRdVop2pzw3zmsev747AkVbQrCixuou1RYVqWMczPU61D1y",
  "key1": "3rdiVGsTq4SdP77QdoHZw1RArAvfAnc4yB2TvR2Y8nuP9SquNKQTiUAYhZj3ixJwxJ3YHW6a84AcrNrGwt87zY26",
  "key2": "332CWYkSwQHaMjDw2FKSWpkBGNorXVdp6WchdtJMkbegD8sqBTYfZafhv9wdpM8aqwNLAyy9RwSvqo7QaCTqnF3V",
  "key3": "4fm3aYZ8VGRX1C5aygNSyGscnTRNhWZF5m6HwTRhx9iN949he9SMF6cL2HbgMg24vdJvfMrUCbAQudcAsg52PriZ",
  "key4": "2BDDpB2dLMxm399mxiDs2o77ftdGEe9AMvm4khHzDuRffxdzV6P4bLMZ1cWkMkWBq3dqRv7MexnGwLGRzyD9qoYk",
  "key5": "Rt5iuq6q2B8YEkDzYBPTTTFa4Yb4P9khKegWVP5yFDEJXGc2wFegUnMGYhRqPsPV6eiMcWtb1oJaWbMaFjmJ8oL",
  "key6": "211VoPuwDNcKemzJqZVizuLWFZPJVbHRRE1neakxxaiFXYJMeFaokmxRc3yUUhZv6qorbteiaMy7L1G5TQVDw8C1",
  "key7": "59hb6tYdaMcLXPJvGdHzLbhY2brtCErxtV1av5RAEEeY6WZi3hCTQMrRoHj1jUFp3sfiXzujvCKFkivw12JH8cni",
  "key8": "4XBrbh555WtpX26cTX4oLem8BgB7j5LyyEGTaRy4rhrSdXozyvpBEv1nrBVZuqyTGE8ioYkwEVMedF9dxsHNdYPi",
  "key9": "2eWwYpBrqErvx1B8ecNUokvmtuuSibxeAc8HggY7itNTKb6GDVwDdtvFExtie8pJgWZ2BeVCFRBpydsJitN25SPK",
  "key10": "44WwHzNUpbpjZ21QfJffr1MzipDwb88EMgvAaqVEi2s4F1qdrLT5UWsudYHjgB5Qrrt9urBaqF5gxoDff7YRNYDP",
  "key11": "2p7gguYoeioEmuyhkjCWjTGkwxRo16EeWwessB7tuQYuTXZUvYzWzCzYqLMSAfYDBxfBU4k4SpMfpLZJo5GrTo9D",
  "key12": "QEW9z3sDQAvq2YfzQ1rbLePGtvcMtixcoKGKJeJ9YMHgx4L3NxxU5EHGmPPEYTA5JBDQKsMvCoSLSPPgpeYhsEw",
  "key13": "3sqPj8NbhWa6NdAwjXNbMCyMoWYRecvRHSREXzqrkKS6ZTQ5Xs4fS8AzXDZgUc27g6HNE7PZQD6eY9zQbie4eyYt",
  "key14": "B7KcXpK6sZASQi4Eukm4vn67cqiKwHvg6ax2tKwriLv1JjffgiuGLV37XpeuUvdNCHvUQXax2DVSE8fWZ7ef1jz",
  "key15": "5p6ZYjwQQycP6RBiYndEGZQcQjGnFfmb56wtpjEXCfYEUsyvwazf3Qif6UTsqbMSbENAq56RcexGdorTBUguHQyf",
  "key16": "3MEH7hozSC9QF8JHXK3JvzGYmG1PqHSu4VGTKakGDuefyVMXaDiZMRNaNNmpaUfmwZrVmKvwf3ZqckrqaJBiLPRv",
  "key17": "37sNGgHgqSdeesCCyLSyhwvhBssGDuPTiz9W1jogevZvzje39Em4ajWLCZDcL5SjAz9osjMDw378RBPmTon57dHS",
  "key18": "vSEpGCDHGdQur6xBQ5vvwtxRPtj3NBTqZNLsyS63vVskY5fFsPce8kCTmrkpNXi44uxG4eyGfKUCtGYAbVWXN7y",
  "key19": "55c4bJMA2CWTsW2xPqrcbP3U2S8NvTeTQ9Pw8bkwWVBsxY8Kv4uaRyhyVt2DpTkrjTydbhb8bb1pvBc334xqRHoW",
  "key20": "N1sSK8NHVu95fVM9NeHHV2bje8mRCTY8tT6wo83DQPu5A4P6ASwWzBMpsSBFFsPuxpXniNjyVY1ebdvMme3uqJX",
  "key21": "41SdCzFtyU8W4Q25qSoEwkvGuU11di5tm9aM9o5YDYUuskp4s6Jg1mJyRPCKyGbqj3b5PJnb57j8yghgiPSQyDhy",
  "key22": "5wrocAPHqi1cJgeU86Nf9MUansnDM9s3CeDWj2vf7XzajagU6nXzjPY3pXeJFJbYyzdixKDuWJog1GJz6XRisvv4",
  "key23": "5YfJbda24bkzxq3xoVTg2R2ehycWdo68WT2R4Wd3KPZoAwdJdUsAdwwxzfhvJCkZzZ4eLFin8oM56fNk19birfQR",
  "key24": "5FD4DdnodkuwK6RDkSqJyn8MHWmsPQpye2S8LVLprfcw1wQYhtoxMQTQE5NkLK2oy411Fjy8rfvDmaAbdVwa6RF3",
  "key25": "4U8AjejEzrozLqgL2w2HepcS9eGW43yhC3JsikVqxbxLeXM9fsa831p92x7VYjDcnA7tBTUep8V3PXzKJvdDNHdQ",
  "key26": "27sRF67H4XAPkyFLEvkD9siNLBssSa4kAQ9ek72DnNmpRN2EDwdJV6x8LRBUfvwAYDmBcDKxfWLHynptUBnNhtkd",
  "key27": "XiHkY4D6aRJqDUz2ifqBveymTwDobcEBMMxoxZVMHzXS9a7KPgXAZNWQLd9hScUdUd9dBF3BpAh6pbNYPqoMeuG",
  "key28": "55jU6A3YaNVARitSrDCc98Fj6F4QYj9AuqBLXZmtF58FasoRsLwNtiYsVXzFyyqHAKVEMHUFSeJdQSk4yhxUx6z7",
  "key29": "2X6SwmjaNzDYnJrbY2p5svzdyiU67g5bhBihkcAhMC3nLbYi5EtsFNyTuE63AU1Qshg93bYoFpiLfKk3pNjVYG1N",
  "key30": "3cz19oYhC2m8GqqKBATdSdGw59DpuC9dvBHobwwjUP4HczLG27zyBxNnGvjfZbWUdF96Sc8Vz2LpqmA8y5dy4SVz",
  "key31": "37QqwLgiBENK32zNUAKeNam1eNSJnX7Fq1D8KfeDzntXAYFKNZXdKAN8ffNS4CepBp2yTYBtkaWVFEZ4QAxpY5Xf",
  "key32": "3t9LGcDNYWkKv7TerG74YyRgnqCUW61wfzCvn8rp2mMCko78h2N4xTS3JfdTUv56nwY7EsiA574m24THjGUJfo82",
  "key33": "3WuKyu2h6pF7bTd3gFvfxnCLTc9yxLfhykMzrgAySF48ZfAfVGRaQ5LNdamD8NdtX2RE8aajhm9cVDWeimSUsHhS",
  "key34": "4u3xdPDvvLmmA2jxmVxF2JLD35kqkbLUTpioqigu8hiMccwoqLB5VkDwcE3DxscQDaSWvGpY5guLYuJzTXHWiv4N",
  "key35": "3ytmDhufUVCFQZAaNqFZVToQPr8b9usK4hYsT6SaLtCgw99Kq5XwUXGgBA412yN57d2TWdryM9HSoi2hLHj1mEs6",
  "key36": "3ToLBfQrZWUDBWEKZj5go3VMEbJUxp9pVBUSMJYM9coAsyBDdjq8bBMQtXDABLxCELicS31FwE4wSxqHZuyao47s",
  "key37": "sRMyJZeTVBFFdbqm1GnCE8z2akQGiie8NofYgJcvHUK6bmkbiz57dDREXFjjwEJTbVUzcvrfWDW5j9vcgdrbatA",
  "key38": "4YirktcgNng4UAHvQ3fvetosRyrgbBQLoWJzYHdD8sdtDnkJyK9fCXxdgWPerjrKRphEJrgHuecYFvX6txx5XhjH",
  "key39": "4KuoNzERKerZTdBF37ABFAaMJa1kqtkxyPbf52sBYPUxP9moaoPwZfzXHqdeYv695Bm15QDxrVxzapRnwTKN8kMv",
  "key40": "2Yis16UntWwBtV4jQEGJ8ZuAk7swzX3KSAgmb9McaXRx7zEKSLwfb5aKJh3APVXzndSwPDjvY2Cc8rTjAYRjtuBT",
  "key41": "4eNgXKgJBSXjjyXExZRQMoMPkU2chsujZfBbkkeNPkkzY9JDv1gvZugH9EAKwHwrS7BaoUsmY3BUMSdMTKzecJfA",
  "key42": "4ULSfUX5uBXhQ2x2vEpH9rxJpGYPnYK8xQevmQxsPWeipCZedxqscPuooLfvNhXqRfuejkmFPoW2v3zzUhE65krH",
  "key43": "3dd3xb1imLtdY4n3YJwZegoyF1FZyamzP3tJKZywZiFu41Ed9W5fSWuFzWv3bRE2cPu4smeogF3NxSWbyFjSxsTV",
  "key44": "4PYseAYmAW1Wt5bpWYTnJ42oCmtJy9KqURqPfrtFWdJzUbUsG7T7bgx99VCU3FmGdEHb9CdqVCqbKUgQNQAqhaid",
  "key45": "3YZ4T411UnFoCZVzxY7enJBkb3ndyeQ1CEAgShoS1ggWfne6ikhdTCD99e6UdGSecYodxWHVsrzYBHwVcptgRmZz",
  "key46": "3zsw3rEyLK4u5Azr9M4CkCiV9frK3M5VEoeogsNSZ2HPGLBDXSqDdCAEWkvxv87zict4g7hWt3PLBUanrQQ2CSwJ",
  "key47": "4ZtMNT5o7YUthQbSiAvz6SC6D9sTMfg4myTGvbmbs3yGNW8Uu6spjfzm6kJPpAc8UXEpcKaTJxwLrZa9kmeAyvB2"
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
