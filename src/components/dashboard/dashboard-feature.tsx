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
    "4Vtm4oNoykwwZcfTKq1rukWH32wxtq22Vu4Wp8xFQT6kNUTdUPfc1UfGKEDMAn8qa6NSUC78QYDS4GHh2AnxPdD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nzDiMyNZmyvMvaYGNaH7gUNNGBCnitke6tiePus8y4UifBvH9EaL64NRxz2RfgWvhug2QdGYtP1jdHNYxWZxfrE",
  "key1": "4CanUu8U4rPMiSxFGP8fm9iki2iPHSymJuU2EdTWY2WLn4LTAQni9apMCPaFhennUCC9ru22XwwFwSzL2b8KdQFL",
  "key2": "5VSmvS3tyMoiMss1bTXRyDGgJpoF3LBhxozVKhUXGtbRxCXqGLGswiU1FFH2vUykX6C5RiLamSTQ6jCwGTzt9uAd",
  "key3": "iH1qTuTafsft4YXpuCkpsXxqHB2stxgdHET7rgv66L3mn9eDxEhNnk2pn4KGTpQ6Np5cGxr1b4jxxY5XgQUXHgj",
  "key4": "8xyma3jg4QbcfkBDb7AahNX6vdVfQpQURXFKC2fBcNP3g8N53gpn15jmqVtHwWo5Ai4zeL7rXyiwUmnKuUrWc19",
  "key5": "QaiMvcJdYxq4NBuEPEbMPgwmhCWt3q3F9gQMdjBJtk79PyHewwzNtXT5iQCgVxtQ8krQd3fr6MK7CpxjAjxhmvf",
  "key6": "4UtFnh7v4USWGn5qGPFy8WAr5yywds9hExdwgp9h1U4GfwDKfTnJxudRRA8ysTRjVDRaWUnwsoptMgW2Rn4bUocz",
  "key7": "4gmgA3sEau8LWCozn77zLzCkTJrCcFQ7PBJS1NocX4WWvhGnAukvG9MVitwgDt35Tu6aicia8y1TevFLqKHMqxfb",
  "key8": "4JyghthspNxv3No7HENMDHzBo2n2tnLVBBzrDmELPJnHwkGf4fkoTPyAt4DxbrwUpCTeJNRy2yMPVcaGx86M9ddi",
  "key9": "5gDi3ywBoTT4mopLVDnx4WfTV3ZijgYWYhNv1oVFwuDcRvyLPRA1t8T61Pms1eveaXG74jv3CbyVkuaXdroedQpe",
  "key10": "3sgmKhSufK95Ty3VuNtaCMdpdzwHgcvVua7AKAhG85vZ435EHqXd2dZ4s7HqzGwyhg181e2ZXeHGdb7NMbjnZEMv",
  "key11": "HutYDJcHBn1Qm29ZXMXpZCx5jnzL32bQdYYWfqZef2Mcu7goyTyLtjZd33xxyqs9Exk3E77GiZsovbRe6EnSavX",
  "key12": "4LnmPkV4bEx1CZBdFd2p6MyC17TPFMj6Ftd9rmXap3JxdEVUs5ZCtMzLhdedmKoUsPV6PdobmCKbiwAXViUbiy9E",
  "key13": "5kjERRoSU3S3zyTq83G1HxyQ5HQWwvpsrmHJqnJxFrkzJ4z8oR1VrBdtDJH45yZbHMXY2nVkPQgAX23gzHpXPmVD",
  "key14": "5TiCyh1zXUfcCGCFK5EnCEXEjN9BxYJeA5SoMMHQkw5sKEPVGpVGNqfr9bFU5AxMb9LJE65nVFRdYrqRG5uYrwAn",
  "key15": "5gbmD24QXcoh3YDcNnw5pZbW6J88TL8m7PeoDsUC7DXCiUdc2WTTgKED9aXb3JTms48TC57e5bsUf5Wonc5zDkgL",
  "key16": "2uc39rQm3U4ezLtMdezJ8EopygXkhm2kTFiUyRWBK4jmKsfSfgvrtKjqYZhknU3wJDWPxwzPjU1yMkFcgYFtW8SW",
  "key17": "FZLnuudybRZEMcH5XwwKqpoAMcxwvXuDFSJiE3bfNfQFnbQaZjoAXYn2ZvAmH4Nw5E1rN1tucU9gEg8dirXKfFN",
  "key18": "4mZgDFdEHckJkLrzFN9Nk422jtjNif3fGsgYvyKhTjCcKe7zdq7nWXoDPpC9MBG9zzVuLhn8Mcv5Xgj3bkRK9eM7",
  "key19": "CCTmTBYkSqSWSZ43cgVwXVjnwbGYVidafQEenUrEV8LZ5mcLKtim4MwP9SH4fnC6wCsfuzKv8HyhVsRS6DfdSHc",
  "key20": "4gyLgyZrHdwR1Rybmq7NdFhC5T3QSthERk8ibaGMhrnpExeDrE2T6E2zuhLZrQjDEQWXiYcMDKH7GBQDkspZ18C7",
  "key21": "432Upu9uBVQ3zpVqc5t1MbZhPvgHiR9mf8JkRsfwRecbhsaeMFZhoQuVsSXvmrwiV7gYAKfq4pBg56XeNrewQuqH",
  "key22": "5fAH172A8AQpdEvwetq4D995m7i5VWHXEyGZjyHN5RUhdAJTCSDARLFXkarTTB2vJuQDWqCksC9mUgmX2CqWGUZh",
  "key23": "2WX5aSVdDWponX6weM9vtS8UY9hk325cjLyW6hovJZvwJ2TRUfMx4uZagvfPi7JM4JNXfzjmHLfRSNYdkwyCkC8B",
  "key24": "2WHNs1WCLeRhZQbR498Rk38nYePfZhMXeSpAzD4v1UzktEsRrtt9kKkW1ixxtCjd5tciPFnaiVwRqjCHaFAdYPRD",
  "key25": "5j8f4f9ubYWcJ7WwdXs1BMv5GUrkcrf86zUjRkp18t6Ab819vyHJ849zi4d56sYCBLN8ruN2QDT8a82qSWgqoBVT",
  "key26": "2QTpqqypks3wKujRCwu8ribC2Q6DgZouDMHgreHZc21n4c93dL7BLRQapZaddvQ6RYGCDfuJUFyH9SRSeVQ6xrRX",
  "key27": "4xrkN8Kdgq7svsjM272jwUz8uNDtpJtZxBaWUQboxsm1UVqczaHtDE2FiUZDJ69GLomqKnLoru9GWbxsyYRAb2ko",
  "key28": "4wUYur3HiYFBVuednEMkqvU5ritxp3nRCgkvcSWYj8XBMQpP92QuNEJKPMkvBGNi59xqu6tu3D82eT7tyJSZJSKk",
  "key29": "3f46cYubXzDC7iWruySVoSg2XHG548SZCZsHjRpWvisMVdY1DQ61qcpdMxCU4xetJNBdko1Xcyjchb6Mx8pLTfu1",
  "key30": "5r551mKdh1Uyi7bA1F2nSvaLWN3FqmiXAe8F4QkFcE9T9NSYGSgUt9AkjDtgtDheofCJTQpYYkb7Ee9Vcry3YPpE",
  "key31": "fF9RFmpGytwbgz5jyuMwRjrWfymJf3WCYJUHqt8kWdiAwvXrJXKS5QGZpuo5pHeD3Xdus6MmdJMXsYjwsLoHtKV",
  "key32": "cqa6SprfRReZzD2tNhZ8joydFNHoZmppQX5VXPyC9ts7oeNYcbmaFsx1d1JfzDVcUSufy8SrT2JqQwKYqQB7cGS",
  "key33": "3KEWHy5Y87FAFinCz9Zha3fZQ2iMojrmPRe1PmoMvjEDAc7Tim4xWfSbmRzfBG7tHzQdzJV6DyPmryVFHgethehF",
  "key34": "4ifAuTLBka8dQiZuJRhVUduNtieSUKG1SuMZvzUGBjuPhxk74ih3Njy6HCgUoFcXf47PoeUBgweWX4BS21YBev1V",
  "key35": "dKPZX9xwx1goGxWwQS73Ev5VXnXL7B5XRith1UZ26rRJKxiBz78NVuoRiF5HJTfjcw7tW2edYEtyzddk6RrdeYk",
  "key36": "5pkgqHdMyvLX2ZXvgF64iP1UMrjRGM746i2h9v46sk7T1mXKNaB923c1m9XoXwGEqJs5YMgxjuGEXVkKDjMLt9HU",
  "key37": "5WtkSj3CWqThZXviGTLuTi73Zu2S6CsLzZeNcQqexHhhzrPmrfeLegRiocMj3HmDu2jzfastzsyZPr7uNj2Yda1r",
  "key38": "4ytNTrsaWevCdB5AMsdQLAcM4PSgNJLb1kTi5VcJCbwjhdnQQQaL2BnimXqH5DtKjG4VAj3Fnard2uafdp4eHfpZ",
  "key39": "3yuAjJzFe6S51hJF5R2D13P1v5QDTxDQWNmdPytKVJVjRyoqd7m78ujZBfMzpS8aEvSNSJHahCTsrL8yhnxn9rKS",
  "key40": "4CZQMpq4wfCKKzDXJQBFoMhPRKXvfLSxE9s1JL6xvoqiTe94q4w88jPHJcuDdHtvSRHQ4jp4XdHrveng5xj3j3Hy",
  "key41": "65LovRdCxJQom2V9Zje6DYrfdofjRCaqa7pSewmDkNpBuUcEGZgzrHUTL15yrYusHaeECCD1kxtmWWzX65mjXHVY",
  "key42": "51e3Gxj5PjCTwSPyGkQWkVK932L82DhnGBrHdfXVhZ2orXcZNNT83Eq2xnnbnmGLLoCEXRHtboNySQzWK9HbzZBA",
  "key43": "5KB2cvyHHyY3LJToqhC4WLWE3NJiUnuuBsNUVckZytfmjxwXkZDXBq5tzhgpPBaGqnUa7sxMgBCwuETzRU1L2Az7",
  "key44": "4US5KGMMT1vkSMqjLNwC7LD4xaRSjSGaHhewJUzvBk6niMr8s4qzLpdLYKzn3zAJ2JqGzvuvwtGNmdMeXAPjJShu"
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
