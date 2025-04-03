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
    "2XZhZPJCXc5f3rbepmWAMuxhiyiQ912hpWf3frNQbivJ1LrRe55ZWNUn6shHzg3Jy7wXwRQzrG76AGChK8YM3xC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gP3M6aU1pQ2RLqT1o5uZ131hJsGSmqoQaPtYHosBAh8L5oKNNjJyNbF2q2NVZBcZ5AKc3QMhvzx8gu2awDyigDn",
  "key1": "24wPkWQcfUQht66R2ipwFLk3qd57YA74bPFXFPNGtb9kjHt8qVYsWJFSDKc7fSYgjvGgZKKs6rWE8AMgAt2UtigX",
  "key2": "5vEdJRoz68LbVZrd7RC11jsfUcPLS6yzJsuZU3HB4MMwJrquJCh6RMzR2PiS8UiRWVicNootDngpXP8ZsqKsPm49",
  "key3": "41xaBMaufE1PzwCzunxVpQRDpEYSzBNnhKYKxHyU5XdJtmLocTntDTYo3EZrq4tmq5fvbpoxooJXf1UwKY5YpXQM",
  "key4": "366auXTuGCQHmTJpgyfyzQLwajvNNDmACapFnGQbgrG7hEfPW8WnjGw3ESUDMufW1BnmzoP4DoWxPehgV8gzJmNr",
  "key5": "5Tw3ULVZ1mcM9rdD3y9pCbBVJg7Kcwj9wdtNeXYyuevf1AUaunVznZJjvTGkz2Kx1ZmRnwHYz3Ctovy8Tito2cWj",
  "key6": "5V1yk39TtjFSL28Kcoc6JednLUmkUbKoYherz6VN8e9H5g6mJJ4NaJ9Wtb2pNgYS7Jm6DvuDckX3qWkz5B5yxM38",
  "key7": "2bLu5AKJST5c58LEJeX5GFJgR5o3Ym8aXBoFBzME8cESLpnq7xcNi779qAc4kcQh49UgwNDG78ujzFe2h4KEcmZr",
  "key8": "5kKVHQrjhyHEVEdGLMpdaqS1693KN5UFArgXXcUm26mx7Yw3d6p8buutC6VcwfCtY13Ms2A5bGabageD8DZRhfBZ",
  "key9": "4xjHAZEPFYfTBHJspxLbgT3uUNe1f8hU4xqHcMgpAbDvom5HcvZ5msyxF1stk8LVgewYbDgERvDb16ndXCbt9S47",
  "key10": "2kzKeypdAgAYBBmTmvWMEz7o1F3vhMaeBbtTBxK68ioQLB2G8aFvPGaEXRH5CwfyVjxjUCTmif3gaKJxT6ehpkW8",
  "key11": "5GbVG3Aa8HPCr31UmbssRruLZMCpP1GwFAwwqDSXNBNG9wtLD9XxmsgtHK2FvFYajbm4TpVzdGPGFGcgQfGhZG5j",
  "key12": "4RtHLGbnP53au1g2ZY6jFfzHd99TkCg1uvpA51bv8P5mXg9jVrfjvTXJmfTt1wvNyi6FkV3aQmoW9Lx75BKXML81",
  "key13": "2h9JFruMNCzmdPGTWbQhZzCbNfd9NUtrDoxTcPBsa77GHbnL5Nja2ZPaeJL6GgnP4kQo8rni4yjKMy2zpDHXioWG",
  "key14": "5Q9h4sWhKPeLgjXQRokFGnLtd3VG4xS3MBRiH3xEaAxJkyWXnkjjzyf5iTHzTTyzGmezsDmSPoJAi4hDabNt4L6k",
  "key15": "4F4SyYFZoVAZ4BUEu8dK49zzZsLaPzHPmWF4GDSKZgv9p6WN117zrfvgMkLstLyhn9Fn5L8QJ8PZ15vexvtdJjdA",
  "key16": "3whu4rk5oeZYSyjng7wxPU527cBTgLPPMykDRQuX94QicAJbXWu9b6gcDHbgqL5FkHXtdLrP6AWvRjqV8vkPN2a6",
  "key17": "5UKuBNfb3udHmv6ofNFx1ntcmpzYwvZwbUxboSoQKyfdGAaKFNiA8wWQufecjS1mxNQ3j6dhewGebDE8r52PREfX",
  "key18": "3xn91kAkvjWa62gua2ZN2SiCe6rZkQEhA1gkYcVk9FRzzytx648Lug22Ru6krFXurveWCYmXooQFjbWzPv4sNvGX",
  "key19": "5MeXc9azCbo8XvVqT5kvLy8DG8Rw3gpatF6u9cn7LFzgomHkd4QhdMoG4wpeCogYeaRkcdnYrTCXPyrMjz7PMypt",
  "key20": "ajvtYJf75aj4viaShQvtmWCSP75zkESwwxyVhi5GjzKWJ27bStKYPvZc93GdSq6kxfga9UHdpcXsNxxGMUQR1Bp",
  "key21": "3j7ywcgVWa35mSVU5pv7NvFMvA23ZJ5ryYBZw7ZPXBVGtMUmo87GbYHEjHFbGt57HoJFp6zTQnioZDCxsu7bERzL",
  "key22": "4W7BbNXZnDqH3943kvDfymPNVLN9ayhNAcfzVN3nnizNDwccUuSfBm8QEkKAyEBXsMKY23hAC9RfeKN8eF3bncLQ",
  "key23": "5maNFyXbU2r2LWV5MhJxaUZq1L2f6phzPVcagNCo7xLUzABaV83ChgCktDKTEa2Bsc5dRmfoBboESJ5GVzJL86fY",
  "key24": "4Ejg7RaVLgvoryL5H46NKEEg5eDS2SZSB4JDjNqirvYNAFpmHqxFhEZZ2cxpXsDq6tGopXnL9ScTDSYjSs6J3wc3",
  "key25": "3UJSocj7rzK6VHqvzXdMaGSynwdoXkMM6b3NEyjcxzWPWCEvozx4igox4r7SDc6JYVXzkRB5MzFjPjwupjYjvkzR",
  "key26": "4wnJ652PYv3hKCtB8vNjUG2WSxWU1Vph8PBThMfvkdwhh25aPnd3JcQcVc3FnD3tgspmVcBBxgqULrLPtWrWZsyP",
  "key27": "5kk8kDJULW63txpa2Lf1WVyWiLo1nuVm1mW8hovZm1wye7LmdALiyZw9DV29NeMKQPUGVsWMzdqZATaD67xBvQMp",
  "key28": "e9tYbzawTn7S7mazQgGLiGZk3DFQ1au6aLJ49nGHYE5uJJrgFrkdbt1Ybx4wYFXGSt152ZbHwCTvR1pna33M1e4",
  "key29": "5uCTzdhM1QYFZziXwjgJ5k1CjKHPu7rRoi5vVLLceitXpVmoNAfzduyyD9Ms6f1Fx9o7YTKYk7Krp2UYiuf9Gvkw",
  "key30": "4X36JmjVB3Vf7KAx7HY3GjYSmG64tMyWERFKWGAnd6JnCndnUFaMXVZCrLsDLMkZYb9FErCpbjzRbfQboS8j2TW7",
  "key31": "4c7dZH4FQVJrHNd5NhVKW4cpBtWGVAmqYHuJ36ycegEuY6XrqfBfKibcptA7WacTiuo1e8tyuSb5Q9HZp4Su1aiT",
  "key32": "43z7ErS1oDJdw1mokAe8JQ5FdxZTgfpgyqbxMRoGCWuzwVfPzkbjPpBfcnEiWt64wGnVYJ9eGeAYn3BVuQoJZ8rc",
  "key33": "51Va83MQLevHCKAZdSdtKj9J4VxeyBw9TmBgoNbvUGBnpyuV6BDrAagM9JX24x3K3zJuteoqdF9fXnFC7tFhgRzU",
  "key34": "5cEWVx3KUT2HwHTvNnVpuoQVpoKPgUdFH5dMhiY7APmiemHkN87t5fQ3hmjaX7NGDuRjbyHFYNmCdrLQtEsEoBD2",
  "key35": "26kNe9DbZ8Qu4B3ULkSDUjKVkK54apSFvuoKcpYpTv5EDUxojGRD9T5ViUhChcBmmc5pNgaPDiPdGsKwmbL3y7C8",
  "key36": "4GXvfyiq6iwG9QDu8KDuVKQejbm91fetnqqSrZRUzyviM1QwKkpY2acGWcNAudZho8rsFef71fEsLdh2uVzTDLbz",
  "key37": "5aMvZYJhZviB2GZGzCFRfFcFNTH99mG2QNaQ9GhUsMHCtFATZfYJUhz6Bye2wKWkQ9dmgcmAXrCEDcMZZzm5aNS6",
  "key38": "2wBWCrjhrsqbtD7Ff3CxkpGoVfi2GDRvFuF7qX2DABEvXLoJQBQNGBy4qE4Z6rk6AVnGBEMBfirX9hxq9tRFCYq4",
  "key39": "29wbREDePGsf8tdSBKY2JqC4FdkyfGsmP3bNHNwJrVm6uL8SkWB28pefreaix8Pn9ngPLmJmK2sYzK9nWNLR5ppK",
  "key40": "49W96YBhjQcEBo1r1nTVYEWnDg3haFuuEgd1hH77rA1zKnedzeKtFJdCk8NVz21BHZMbxkxqMJkZK13C97vsPdpv",
  "key41": "4jWNvA6T68qNvokqVCu34Vfu7maCVjaWMx6Q9yf1WqdXxuTqi2xZ9ipL7pi6RySNfKhRAHDWCcZTfckhRrs8iwMT",
  "key42": "3wFhTJSguduQdguHkjBnbZ6AyhpvEYfjWcBghunQ8D7HeLSNgwtyvKkZLqg498atS3RQdwMUncK9r5Ee1htRcprE",
  "key43": "4kvNr8BN1FesizxAYCmvqmecSG9kkzt7pcRfMDJz55b3fHTieEc1ctJygfvSguhGixyH4z7itLjaQZf8tV91zxCj",
  "key44": "5x39BekVz45pf6eUNwon3tNsEgkf6ZTVurKdspB5b4FsupfJg95Kwp4nc9qmVjGiP1fQTiWwGzGNnXqvFgCFzsQL",
  "key45": "5nu6cyyTYpxjUqnfQpNooWEdkb9BKu8MDXNVu4ZquDJSA5Ls7eL83F7tXgtcogY3Lo9xdjyEPiRnwZpzD3Yxau4A"
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
