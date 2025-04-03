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
    "2q4hDUKDDNGf4kC9Co86NvJVUPyDkHBVXxhaUPAicbFSiBRKEJN1Npth2ozfcEMDf1EGig53SpM4miBP32opsuek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cTZjHaWYzM6S45oyJ9WeYNpwWKqAhT8PyMRUKJT1PEjrnZEQfFG1pMo6WnB6XSQzd9mBZCTvw11qsZgBTQhp36W",
  "key1": "45hYcvmNNixXPyABQ3BT1w5YMZD9qcgynki7egyPeL24qXydHphTgm9caxRoR2uv7BWU5wfBywX8aUj4wZVLm7uH",
  "key2": "ukdTd9cCDLw2YohQupQiRLnv7JbmCuC8mGTqYfD7ZUBuFoPyqsRWdfy7gUTVWrpCFjUByTaj8kmC3YDQcK7cHRM",
  "key3": "4RSF57hbaxRxR3shnCEkb2hhUSsGFArwSS8AGQ7z3crNJE4LKnVdigR5Wivpjw1dkeh4YyuAYbypFpHb2RBTJqHP",
  "key4": "LWALgYHF6aw5JuArVi6vckQ5CVhak2exnrxJFMVBLsYxf3qbPCcHdYBb7WhCaLmF1h19auCPmiqewncGxnsRgHC",
  "key5": "FLnD6qHce7i2rcQC15kQfqKFu1TkjtBxYL2QRTEsGehzB4Qh3NEQAWjbWWmZVs7n3v2QX6MDConJwnWXTQ8tpu1",
  "key6": "2Bf1tqqVHhqeZPbwn2iDrQMUP5hj8RjZJFsJ2oJzXiicNasNKRoXf4oFxLzvidjfouaL6NhkCh1uCgJ33W1jiSAn",
  "key7": "5Whi857q91nLYqv9bGqgN1ru95rV8zwSRNY1BeXRuZCifyaknAjjAMgJtcg3JGVyxGUvsXsKsAaf68eM8JaTzHep",
  "key8": "f72Ytb4fiGbjf71RC5eqKLCQpqDxSxJdj5bdpv2jjZByW8yR37P8eRroNDEkhB4uY2PJaCE2T1XFWfPYA63wQVr",
  "key9": "3kSsPtNExSAqw1rKuSm4GPLj9n4qohHxg1aejhCsg62RhVuFHfQWEv8uSViPXwpJsuHvcPWLNzKASogvkCDdJFa9",
  "key10": "52PcJricmaxJVo1zVh6VbCg84yJvEvhFw8m326DCc18Py6GsNCWpPFH5GYtXq4tG1D8a9QhmjDZLSvgUsfEQPpZm",
  "key11": "3B8vAxxM1vfTZacWGsqBaueV5vxrQxdLGgMd4rzsnWCZ62PwnewW61WKmQ5tiKCGHyYftt1L4Bfrc1n8bEp5G5fK",
  "key12": "5ru4yUroNUEtq68paaZvo8bjqUP2wujN51MYgpC96NyM3cEvjYQwh3yrzh9dvAk5zrEkji3aqavXfNRx83UNASB",
  "key13": "4wRt5rv5qgmwRLvrK5HQJZzfVMVN3z9znwfZhr9ehMFvCyzCiNaACJMDUaWq48rAbWYEUNJtWMvcZGE5uoVpnZrW",
  "key14": "5aHnh8kQ7zPe3xtBjCuaWSdXpHATGFc4SvWrcgBqqRVBx6XJdJdgbpV2uXuRaAiDM8LFBhVK2GbcNTrFQ1nJJxFg",
  "key15": "3MfhSKvk9zufg8JdnvojbeUeFBhV6PAo57ajiWwszPCc8Tx158eGeejQ5BYNnRcTWNgMd8BfrRFeiByUVBQwJ5Ef",
  "key16": "2S8PaPr1fqV9cyWitGELkbQxGnbmWLkQufhsgxD4S1earDFngvGK7UaCGmgDDLyeKYKSLRxxNKMxua1E95xDoKU9",
  "key17": "2JyxsrYEJM9WNx9dohZHFgBctSURSXQ9UFpsqWr4a3jy1R9DaEAbepa6f2Ws8zCsje4HiNUJfUEsNCMEajW4tCdi",
  "key18": "5i83WKVhaBnwzk1xtJxP7aLiqefzTFvMJLkXG8foFoQhvvMjX2AcrXdmUHEN4XnsBtx63GtyTySbzegxeqsCCSVV",
  "key19": "5kB9LSyF2WHDzCVZ7zB6vrWGaEDPdXY3LKGM4hntd2wJX16XsT9QNDPxBdREXMBRYgbzBmEGBTXCxb3nF9uCgZj5",
  "key20": "5RPTdZhcrS7T4CWx8ph84G2Hczz8UwCCgGs1ye7e6YTw3yEucVVSR5dqCs6FfaE5ezURLi3fGg8WWLbvaAbfhtEY",
  "key21": "3YmGmkr5vxqQWsnvsdbRa7WBXjtqevH8QLvaof9DYB2orcxLa3qkGvcHwkhz3krZKm6GBuQzd5fN5b4SNrQ8E183",
  "key22": "5TXybngVmcD263kTcWXrQN84fJMzfk6hZJUn71Mg96ZcNJkgTp4KMCSRLWbJkSCGWdodgRtZ2kDgUeYJ4ZGhrm8H",
  "key23": "5Pf5uje6NLBi8H4sst1WRXHdD6aDWMPsX3JFrTEBpvUQoBDbSNsdg2fef57qSYj6GLQmhaSZBrY9nqRmEyjAWasG",
  "key24": "2PCyzgYBpDLVaCqgQYAeJuqHwd6H8HWcTsZBoZ9F78RAXQo4wik2zcSz4vxo7aR1sKrzAVT9WHGy7PN6fU4vAHgj",
  "key25": "5iHtuT8PwcjLPAiV9Vt44Suk2nJAcX6RqWPbMmJRxni5RPx1R8GnPgwWV1qK6eZ6LZsJCxBnWxXQdpv49XBrorGC",
  "key26": "2S5JhNb8k972GK21erJp5s3oAEDamTC5tau25Y7WVec5oLfLN96HrvszcWUy8mR1uEwyfKiqDnupoYaaENzh6trZ",
  "key27": "2iXBgzSygF61Mj7sZtVDbvrj4hivqL3cmPKsRnc6jm3Aupy2XvTnXXALfYmkrRyNW8sfG8Hfgwzooej6ApeTRkWL",
  "key28": "5TbJCJmcJdPmyyEzC4VhqCeekabhzxcMdpa8gwsTiKuQYuEUgw6Jn85PKE3JKUQoZpSiJDYte7pkaVeFjdh6uiJW",
  "key29": "3eoxt2ctKkhrqwnhxveorWKYHkkW2jDpmikuUGED1fLcJoAVJnnFsFdT6R2JAvc1itLSKFZgx75t1azzk4oxNVmS",
  "key30": "2tVFxVyfjEe2BVDJNhB3HSwxpRBvh2zZdYvYRunTpmfH9FjpChnKPbKp2Kxxu457g1Dw47ERz1dBpZfjEiHDLmm1",
  "key31": "3yYk1EdAb9qGT8Q8KPmxGXUXeXxs6Sy2gnLECiugyJyRtncBHJ9YXN4SX5WhSPHRnzff8ZMZnRuo8MMz441gkfwA",
  "key32": "3Qd4UvrFwmboL6khTjPnzmmQU4cPNxLqPdYksToWipQfJFNiLjc9tCccCv7rmavabzfTmq8xz5R57baB8d4YXxsK",
  "key33": "2kwjtqUpkt9gjjr28ukif7qHoqykdGyTU4dUYQhhevWTyEVGNNELw5W841VGy7sPjU2o2t7DiPYaxAb4SQfiPZmW",
  "key34": "3GQyTJVEQbPTg2XApKKkVPNqodb1tJbfwQCjWfQMXUEsvFJryVt2fSNBe1fj3FXYcW2DjPYohe58dwXhgvZp8ucf",
  "key35": "4wj9KRgGJ3Ehxj6Qi9UwrjfBepSkRYBH2YGy352HetsDHccv1FxrPBCV85efFar6nFRY2ED3zgP7fRjHn5UPLFxV",
  "key36": "4cRWPNYpHrfJBynqB6sk74ZCeojdw7gs6cagJq4rxNPN4msGsAeV39K1rzk9wxHjUJjir8HDfW6Zwbr8rXNu1Tox",
  "key37": "5N6P4MVEG62oeF2tVDgBMQ7JWkzssV3EEwh7yBw97TGnb8642ZwwuCtpiYimYns4rXsMaUaYu57fJoPZ2qrQ6jem",
  "key38": "5L7Vwv8gWnp73QxM83kjUChAn3g6ioJiVoDR5Tk2DEWVkQNLWJj3Cqt1gNxouQtdkWKwWwpAWEjtHPfmcDiNcFtj",
  "key39": "4fiB6WPPue52FxQsq12Yqdmjwt2szmaEBqMgLELEygRbycUSB5Yk6wHvfXN9UszmZb46uDazDoorNHHo6gXTm8zE",
  "key40": "3kkRAYnpS59wk6XMvnnwCfr3P6obbpQMtZGwgT12bTTJKrvBriGgJsEJb1VzvEqqYmt79R8VtdYJLJbNukm9VRDj",
  "key41": "4JWScVAXL62up5o6pyr2TWxAGRmHSrWqUiMUBSdcv66qGLMSYBe8mZ3GLejGQcj6eJHxhW5eEi2Pf5uiK2jx6kDa",
  "key42": "BYmxpFruqhNTVoaf4dB564NS6aEnTdaTgEeSZc4iE3JmSFyapwx9VmwE6aZ9qmwSn25D1qZxrmmoMFhmsHb82DS",
  "key43": "4QREMj8Grz2ey7FiTfgqtgaW2hmRTbLrtxQMEbRCXaGjCcGDLpxzPcqpBUm1eLAu8yEeqMNg5U49mWJTx2VQM12P",
  "key44": "5MmNLYkxrAkhWP9ARLihxgQ7GXVBBrHaESHpptTWPyHRUCMNTBvJgyucBd1QdsDrp3S6cHd4MVY2qCiFz2L16bor",
  "key45": "4cYnLH63RceGyoNfabgBUin2xWVF4PQ4gjrKnJXzgPwNAXbsAfa8fePqBH5SaK82BqMjew1GzZqpvrtXNvuz2eko",
  "key46": "46SxnTu6FVGGVBcFYvdziZaUNXvwAb44tkQRxdVUgD6TVNztREQGykrtDgsh4nDA22edavnNB1xdQJSrGBoyUgMd",
  "key47": "4VwiJDyMv2kSiTt48xMNadAyVyNJCGYophPVUybQwoSdRt3yKgRpq7uER7VspgQgvM5WRLL2eb2rUkBDxCbh79et",
  "key48": "2VkcP5qegPH8GWRvginHtasLdtNErr7aWUuFFM5yhXPTV6cet97aS7M3dNrvcyRb9joQjKRNxttLddcRGdZMJoqP",
  "key49": "kmAeYZXb1XbCkd4Kn27H7r71MqzhRuppVJxMChRakes4zdorjX8dpMhfhgy8wzyJdszDn75J9xXJ4U8c5aWcbpe"
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
