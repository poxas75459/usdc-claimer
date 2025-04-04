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
    "3y5BjwegWr2C6fUUURrt745xQeodyQFnsrfzwNfF4Ros6fDvVXEkToTwpPdCZo3ZvVyuF8DNPELWMV1d7HGixJZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VHxSZimZ7WHugDA1unw9vzwNDrw7H7nPwqLS4pZwhtUrDUdPgVbJQg3L77HnB4CrBMiRh7DmGbQbJSviwPdUceS",
  "key1": "2ubsPJG2xEL9h5iFdNN1FvSVb3jq8xHzggnCqCyn9cbrrwzBfazMJ2y6jU6sXxzrbau5i3KVn3it5BamX3w9BqCC",
  "key2": "5AyQArVXkcguG9BetNQspxRwHLjKLE4ExwnwosU3NTSJxrkkyaavncucTpevn7VZk9T4tR4Ty4Zg5RSkFQPUfu7y",
  "key3": "CxXnj6ehjvTsCoZix5uhs2jd7Eg1jsNYERvHZTC3rKhH6xq35UGc1NaFn8Lvgd1FVyPBN9Mt4sGKRwYQaExZmBH",
  "key4": "2KyAtMvnrFCjsQPvTt4XYmGAr2JzTiemT7mcJ8dedog6Hk1CghXV1B68NsmYGB9JDmRupdnZwLQXiD4cnYbmhxKb",
  "key5": "2seJ2yjyHJxovy6RKDKcb1QpiLSCXd1JEzon8xW4BgGVnLNftDSti3yNN96ixaZTTidvyMjSBUZt8zAHqfmqyUAL",
  "key6": "4oqLbnihHmr8CNRMJxJFUmyvVEN2JYWWUYAMVGcFGEndUN446ZUe7FW2rNcgAier32AGCNssPcuL7K6qy4pdbaQb",
  "key7": "36tppM2Ug44TMsUTgzd7FPSbMo94XrC7Xs225dT4cw233gWRVhV3B2SpMdeWGxAaYZdh3Vxza6h4iPQv9pMDgoAw",
  "key8": "5iKeeZjwiTaV5EeC8hQC2Q9v2juCtP9UY8ZDPg4gwFMgLgfn2f9DGbuutDCuME7cxufA5yMKjtZzij7gMGw7PQGo",
  "key9": "3Gm7NmjcRawJKMKVCySCkQFUutrkRxESiAHqP4GF7W72ZKdv3G4Fup5auvWKavqvmozjNx946Vr159BanDcFcsUx",
  "key10": "5giT8V7e3DBPRV5Xtn6GswoaejhKniMfSMVeb3AfneroqPRqd7jX32ndfSFVqJXdHPUv4zKfX528QzA2u3eUWeKW",
  "key11": "555vxioGkGRD7xx3W6mX79bsSnYppuSV779L4ixBffsevKxaZ4tAvMTptRaQBYjy9avCKVzDJ76EpWwK1uDogNDn",
  "key12": "29Y1uXCKduZX1Jcitpfpc3WnX8Rkczr1gFhLujKZn2VK6wap6FirMTZj6J511ZNPzrciQzRDcVTWbu5VNrFs9xKs",
  "key13": "3iKcm57GF2dB8eCcbvfxAs4p2YeThw44SfNR1rHBFPiiM3Rjc33tEs9WcJUy9PSidys5XUFn3F63bC2tpAo3Cvym",
  "key14": "5AYcXjSkn2vTvJY3oDSehfhawvoFCC9LCSkXn88iyJWr3yVFGj6eFhvTVDnQUjxeutyaxKTLFr1mUxF3Cwqbk4ce",
  "key15": "4njP6zLnJMhLVs9VaLLeYGdYtQ5u5JyazFfaYgqQE4amL5XWo5xVGusrBp3FBzUGZCtE57Lee3LkxxHmUGqSyz7W",
  "key16": "3cgHobiiRqquMJECCbUpzTkVBxBK93W9vAyzYtBRwTi5J1BXXFd1dXrU6GraxQbEcPEkgRVn9fEWwRqCXrnAiJFD",
  "key17": "3ASWHdV7mfAo7WPBTFyMY2PuQ2PugCp6d6ffvd4hhdkzRWv5oAf3dpKW4NXLAxLWDpKX5BHz1bsad5oudm7z9uy6",
  "key18": "367KPhdf8pmztdgVc8xzw2YAVyGcSs5aRAfSKeYw69N7Wd1fFsUbygr12yh4PshAvN7MhdiGzst91a3571d9aVnn",
  "key19": "4ScZ7DBNKc33T8PYWNuP9sJ29vjAztG1HhJPFBsVfdbhQTUdAy2qp8XvmazJYRdxxWF6mmyLbD3SksM5Aw8teKfV",
  "key20": "5DBU45fEBYA3mLNoALevBjkVN9RJA6EWpgFCGG6uyxaeBYsqkGxHxbXTdYULtHkK4FgCtctLcv9uuMetiJMBU8P",
  "key21": "KBTh65m7tEoEh2QaRA2bwURnhyL3q44RbfhSrcd9NgGMxd6FsWmWtJP1H4S7vQguSUxkKsUz8NNH5ph2tB3sLZ1",
  "key22": "ktQu5oTWnRsNP3nzbRiRq3K8BUi2XTW2W7wnVX76KYdESDowFeZKuarXyMru6QbepKkZQMJtUpP63WdF7BwBZqF",
  "key23": "5AeXxH1275XA5geMYCh71f44NBAJAsZ14EDzj9rTCQYZhrLru5p1RDKxVnfNQNuS7S4BQMwvZMscN52ydQA9dt6G",
  "key24": "2wZHHdM32m1xQnfVcAPyFymLKvtCB2zYym9uLmW3y2AmSN4YrbrF4tqzXkwXENnYqw13bCc2vXUr1oZ8PebjjHNT",
  "key25": "wHFMRn5ymZ5QdG3GZGpif3LqqfPdT6wGN2tPfWbpFPAtCa4Qsx3EA5HwdEwrLTWARJG9xHEarvJ7MjkWk7ekdPm",
  "key26": "49JED8VDWj8UqB4yWBEr5Jtn13WWHzJfb3vL5jJpyviFZs5ciQefLLkNW8EnPMeMEKKeekGXrQkP8Z8dKdX9mbNf",
  "key27": "4HTEey19dJW9nNBTELHEAyruyNz9p5fS76SuZHJqN2cWeLqsmVmwhhWMWWfc9Po1mVNcwaRb9Mfbndwr6QqgMkg9",
  "key28": "4QG3se1AJx7eJw6oYmPEjfpvnEUdSDQBnWQ5yoESR1wTannf5xqNj1zwWLW3J1bTAjWdzjgxotxhzjw6kB8EmCt8",
  "key29": "2bxsQdeVyWx5jdQqD7msUZ14RF1w9XkLb2UZcKRyF6KtVv5Hr261ujcDcNS32apxTDvgYdj7bh2WY28k4ExPA8vS",
  "key30": "49NDvQQo5p3ZN2NRYbUoRNd9dKZGSaoz8K9cRVyRN2qjGXkgpGcWMKkwPBM9WACetNi2nrzpR1nbTqdWBLJURtmL",
  "key31": "2oYjaSJhXmkFCQ9Zj78VHDaPgHQNgVj1T9pd26R6uaBYT2RYHYiwxR6Fqd49j4in1f2QPdoN9RdgTrxmEPrFBpzb",
  "key32": "57Mh4v7FCidg16UqahTPV1wrLttsNqDLc6LUNCUZwXzXpVR7rgoN1QXXWjQ1SLZZK4S1HbkTfYx6dPpMezSHHLX4",
  "key33": "5hkdiUvpSpXBtCk3m6WrBBe5tozGBNX8Aot34aM1YQAcEUjjQHkzkyVVa7Xj5fJcEHGGEwJCKG5J6qL85y4QGVd2",
  "key34": "5rJrczFgjs5QXQ4YbzhEB3MiAqub6TMszcmTPsPjBFU5XRtzPW844xbNjwL5zF77ey5ThcK6N2WwWaQqeKkXC8MH",
  "key35": "5DG2shqMjYguQxPgQJ9p36VDAXRMQQJwPdhgGq6VVZVbtGfsW4WhiTdrq8ABgXJspqQXBbaWypetgSdXWftVEmpz",
  "key36": "3bHfCiZcJNaAhmUTrByQy6FxbQZpxgeCjKGbNNGPcEv95L6GHjtedJUtkwg8pY441bU69iSKGt15VMrXiyyXzYaF",
  "key37": "4HfFPbKehMuFRYaVN7Y4e9TznLDfUjSK7r2U8pdrm1H5afKtSgXPh3wq5teCfqaSd1oqYs5242X2TnpjBTUBrGLL",
  "key38": "2jKaGTBNsdT7ShQYtsXc9ENWX58YcvDdRqVH8sMXpC3FuvnkJKogLLv8EVvCugkE2BXd2xaZkVWJVBuKrAJge3BX",
  "key39": "3NYiegiMhamtpsDFD4hdM8ZURtwudw29ANLDPbtVg7zsyCCLR32HipoKe5TEcM52VZBnevEKuqDeQHVA8XsRdboZ",
  "key40": "4Zx77sPrgoV6UAcL9fD8chiRKnW2DCmVeUE1h6wVQdUR9AJfNCNARRJQ8vHeAE79jHiotYYe831HJgemRDAkR5aQ",
  "key41": "38vuPQFiCnkBbqdF8wpsyMXNVaN9X6JF5byekx7zQcCYFQvLq617n6RfYcgq2Lzor91nCEhrP7LEfuzy8R9WtTgv",
  "key42": "32tNzkQKB8RZfyNZuA5fUK4ej2fMYxpo7D6pQ4vYyyyVsrWs7Q2dw4UQgiW1wcdn23AFrwWS8tg8RzqWTFKtSGz2",
  "key43": "21QkNP3A8Qa2cY473m2ztCijrL7KUdHjHzPYHMVEQwJwpBAT8viX7dnvdZoNydKHWLsrh7pLnH2gxyqd4wKtBUGq",
  "key44": "2AGq3z3xBLrQUKvE6DdshapxhWuKTSYQJSvdkBTtNF3q3aezUNrkqbz93gQVwyDaaQhXdNBkztiWWjKKag7FhWyT",
  "key45": "5K3s2EH8a5C53tJaRe2Htp9mJPDycux12H85Yf5457SWZJ3EkHkLdVrhLe68mgQ1WFZvz28iBkxB2Sw5Ar8sXb3",
  "key46": "44hqeez5YwNKEcLNUpwKRuZjZ7MwDCwrH6kvxVvisE25BezstVcGYCaxgGYDmoHaDwDmKD41wJdRP2DcMTp1EP8L",
  "key47": "4j2StZDAwkPm7YJ4pwsac86b8qCkH54EhuuZEwtqRopVaPSSvQy1sGtGss645rU7dqEgQKQekAEp74Y9BGG8YEsm",
  "key48": "5fnwcDVMRCMwQWg24hY3fyEkF4G24nvbWLhAVGy5GbJrYfoeNnCQyb62npLSNm7itoDD9qWyTx84yddtxTwa4D7e"
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
