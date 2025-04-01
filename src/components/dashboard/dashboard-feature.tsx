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
    "QzrXAe3PhCjnrFJ5yYGULZMv1vJxqvFeWXuuCcdsAMfg21wAYTVggsBue8RjPCB7axidMD5uVneDB1Lg7BmPAWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qxyL1vVipn7ZPCe3F16YcTQQDvv69WAmR5HKzzQdnLNUvTEiWU44gfHDyam8WWHh57z1hDQWaRVgpU1CBLYNqrQ",
  "key1": "5dNfGpL1RkbsXdXiW2Lx92K3tEr9njuaqentU2ZUCFjfATmNRcGZCHLw1wvsAFuRVBAk36XjJ1mm9jt3em8noxbT",
  "key2": "23M1VrHy9GjcYCfKsg1Z6YgKfGJtGwrLJDMVc1gsH2wSdRhXZJpB2VeJF75k43LTdeJa6oEp2e1EkQXQTQPdZM1g",
  "key3": "5j3NojyB2rGUNGVC6zSUVKTpdCygVf7nu2L8rSCGTFUHRsSQC2aHL1UCNyVKXyq6UemSJ2PScXUMyFuBVpVa1buH",
  "key4": "4MGJzW9ownzF75sGXGkgPDzzkpaucdEzRpoehrRJSsVNttZx9a1V9JPhpKUsyaoEwJRwoJ7S3GrqYXHmsXjAN1xs",
  "key5": "JNvWns4F5KLCNzTxaSru12pECDujGhmQHHXM3aDH6LsYu8wnr9Z5vBZgWdAKx2x63qvEx3mbqDtp7s1bXJr88gn",
  "key6": "5J6LQ7PuvjVTx5We9CMDScHXaWLXDeZCq32LUJ7bH96rVqtELgbNJwJKrcopf6x6Dr3qBgXmJ653vVF8qAY1YuVn",
  "key7": "59FF9umGxRb1je5yRG61S1ksLf9gEjvo17rSSfuxWRwpxBKUT11P5EbAFFaT5tTL57z6Nv8A512AMYxZYXQ9SvWi",
  "key8": "3PEns95GE873SoyEL3aRqZPbogXgrPwM9AsJkJzxxXTfwbKFQoAcqQTGyxBEXeZhGMgr5t5ifYC12Mq7gwqCtRKu",
  "key9": "2Rjw9ZRxLmqJ42ygFHFoSV4nnoRkncwvJjzbBehQZW4DwCGxRFoX6NDGSkpZGfCzggaxgBEz14oWuKvuKG8XxJWR",
  "key10": "5dWMGYrgqZhMojYDGYYXm4T6Fv2goRCgDyLArNZ9URNoJCXNogUFuEc1LrMi8bZR18kY4vTccbNW4JJQHn3kchft",
  "key11": "3oJeW1Voggao3L6pH4YFEepJnc8YAZ39NzEDe8JyWFSWpVUsDB83LpamTx4qsArctKUqTt3SJe34rtidNoPkLXdJ",
  "key12": "5hPpT9XPZstgPheUJV3TokdiK7cWH3skM5u4QzMEnjVxMLQQjARuzMTbJz6w8XK8a6LUqAfsfSRXfQnZrJPHaNTZ",
  "key13": "62ZrsYYjQatrqPV9xHwAH3GU5voySWbY43CCjDQH6Ya8psRTFy2gtj821zDVwn6m4RdFiKrRkMP5GkcrgUfj2C8i",
  "key14": "4tiXPx8obuuM4wcKqm9PShuRbNv9wUqdmwdsWopgaShDw1eLbLniw4JczQ5Jafubs5z5A5xy3WRATDjaGc2i1NMF",
  "key15": "5b1aKt8DfAXXjHUsEFQoiqLwSuKUgWgA1kxJ48cuwfu56wWLRWaRnrPL2fsnvQG6qBYVTuKUgU67KvV4hbQVDeSy",
  "key16": "3CC8r73QvwkuoaVC1dJy4kvE3t2WJmynr4erEmv1FzxBe9FjjYZ2Mrmfmsvqgy9JU29uHJi3r1Pd3oMnW85tX3HW",
  "key17": "4j3H7sq6s5hPBDKsxyPNHTLduDfSVxgZN5J6W9hMQUiNS8HPnp1XDoZW8EMoS2JRXPhfVRTEAJUprXeWv6XScifM",
  "key18": "amTgyKZXZYbUuWH9W76Z347va2QvC83KRYc8g6cYAAfeki586NqGkBWJW5kVWTaLAbYPRaQM3h7tCei3BkCB8X2",
  "key19": "3NcaoYf3U89BuXXB7x7i7RfHA4oSBkJtWsLckHX6PodMAJyVRJfxNq8kfocUWx9UJK1pKGSWsrBy97orfj3SGQ7y",
  "key20": "LJJkJgG3KtAZR2DEy8v5YpxGceCAitLEbpA11jea5LxoinWHPSQ6YK8ZCqH5nC8qD61H8pu2dJysUo8FRqWd4qf",
  "key21": "4zMoHF2Vt1eRB4qDMzXWLRUNJigcCo4UUAGQMZvJWSPAYxGpRKhDRX3Qo59NCkdzgthNSjk9dEMmPhxH23PoBXv2",
  "key22": "F3aBDX2rKXnDCzeoiqg2N94MXDWJLNqa6hChpYrbiayUXoFahgrG6r5HT3y3iQyK1YWuNL7gMDUQktLgvHiyH8u",
  "key23": "2tcMRmNZirLJYNzrHYqKMnwYnXcn3srz6KPHaJ3a6GVwECoYFkbiQtyV2qkP5W5UnZyoWXg5EU7oG56vRkt6V7J7",
  "key24": "5sEZ32hJEMcepYEhN3ZgTowibL5KSkvmTcjcpLZDa9PGt6ajRBSM5mTS37mq17K98TXxKQEv2UCFFHBY4W5AoJK2",
  "key25": "2avy7g5Sz2VF2VX221GH7RybgRToYM7txmibWUgTN6gaVkcz1tqwBBx1yGh13S1UFY1LcwDBARKiUozUfiBXdhJF",
  "key26": "vosmsXiNuHdJcSXz55PQeZdmny31T1YoWpdrGrkiLwpHdmwSgAFmKpe4bWgefCeN6DkxhGZiMJNiZiC2Pjb8yyF",
  "key27": "4m2kmFCnFB68XtuXkkX21eZMDDTU4Gh5Z4znhyTMWiWG2MWXays9qTAzP38vMGsPdHZt6PuNJb8U7AuKPPpEony4",
  "key28": "2wC2TMZGWksSycdhV4qDd9yNYHUj42Sco882GfDYpXYUb9VDPnyEWhkznv9nrP4zz6a2fPQrHXPtjBx1fgx8SkEc",
  "key29": "45Krcgdk27fD31QBG9Y2MhGADPVxUyhGTeyauSptKDoX7d9nnoP8iHYtAoNb4avq4XUtXNXp75wyt8Fps7TJPd94",
  "key30": "2rFj1jPbrtyqCSBoGW6715vuNDBtTEL2Cf3VtwaPP7N1qiLSseTm8G2AerYxrq82EahtxtLXeqF8ovxrwwiZanrE",
  "key31": "59ZKq8emipg5P7XZbbbCQ2dZnUqwjz1vALhHG8JzFct5nte7QQsSrFXpCeh136BdXpNPW6f1UYrWPZkAsbnTaBj7",
  "key32": "2LePuTaKUBD6msVN6xKxBpjf1Zuo7eEL4CHZpJ372RMCycaSw8v386ZEfrwWGj5qYT7FaLoNMyxXMeRd2Su6BRSj",
  "key33": "nuYde8GHR7DjHSiSV9U5YyCReW9EoeS2i6u1BLuCF1j5PEwf5FiopNRrYCNNyKTuYn6eRwDT6LwjZVPtAkWY48t",
  "key34": "4PgzvdLcFyF1VEk1rfyBJ6jotSR3Ugv9rw9L8btFTjuJV3HKikyaxuydKUMMSQgx6hvkj8nBDeYw3JUyKCkSCfWy",
  "key35": "3BSUd9uTzoQ89VVFvpaGHxDMZAtwdGcBGEzSpjuBy6R7RbG39z9YccpPJddDtN1MzTxuR38EpozfCsXv5vuj9geF",
  "key36": "2VZ19uy7K1mCezfGSFZGzhzpq1j8ZxJXfgTdBp3aByQFMrsso8zp5G7UQbiJwkPVZr689F7VLqM9dk9qAsLYn419",
  "key37": "1GBESZJ4SpDuNUekdHU7QEaZnkZDHnP2Xe9iDT1NVE2XNeqmQVybKHmmi3RM1vKfZMm7Q6Y8H1N3DR4TexEPwrL",
  "key38": "47sjurHk6F2nwA4yDCEUyKsM9hu2iPhu12PTMmie6rqAk4hzWx2oJySWQudpmgagEDgbvjpHW2HKr54PU9hFRKHT",
  "key39": "ThQhvsuWWtANegausgL9jZTv58UGywLdvtmGpgo5xocaNgHThUkGWakZ678YDPu2X9UhpRVqNCyFqyGsUMU6HNq",
  "key40": "2ptq6aCGnMgn15ALe9y7kJkpAFNFgfLV1C379964zWE64z9uTgUp3hi4yzmwJUw4uK5MCUq7k5Uyjiz9F6JYYXPL",
  "key41": "5jnCcMSSp61YJbJwFZqhWWdt3zVyiFAUJTcuyYGsJs1LpPLMzbLJT3RAVfiF7oP2ZCQidbJzGd4P81Um73uoDJiS",
  "key42": "2VDg9Xnw7HQbQL5SgUCfkhTFL5vSMttZSSZWxprycjNvGgsWzJXrFABTFrHJETspUrbx37XgpSf8LQcCh2E7tsQ9",
  "key43": "J6mCCp5CuLUqbchEDi63T9k4Uwv55DdZrpToHRMVkbEy2xoXCqVWALnt8U5Sc3zu4296WVLbJEPiNo3iukXpNMB",
  "key44": "3wAjk1ntfMJT19jmc6YvREe65HEgqTqgjc46v4vyCN3PJNxyhLiRzqxqPv2jwuaXgWpkW8iUVUtUyXAetY3EnSR4",
  "key45": "4kdZkXZjnPzBQrhrTit6eT242JZJdxV3PVBjCLntTnnxocqBE6DrU2Aeg3woXPijYyyzFBd7PyV1k17LCKGCya8s",
  "key46": "2WppkhZKfNzrcv6uHQWd3zmbNGBuTEHywhWWvdRstcR327evSS6XU8A1K43bJxJsqgJnJedFjWBG9hQV2dsfHKv",
  "key47": "5yz5gwgvZFj8yJkp9g5SnAYvoaLkcAyAcMDAqqrLHf7Jqudn5w5jHTgKhHVBsVLPJzX5BmMTazDEqdd4YwXR46uM"
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
