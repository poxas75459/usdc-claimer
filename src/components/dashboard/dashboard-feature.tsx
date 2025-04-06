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
    "2VKW2R1dQJbFFV57cDuqyp9z6ZSjr5ngPCorUekcZfGEwFFCeWA9n6Mo2HWWyoUbsBw3YtFRye4ZU7YT3hHGHLKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eBNMYG44VuQHVCmB8hMStt7xLqPpkKGL8Do9GCqnBy3eeKcZ9UjLWRndKW2UaXf5sSJ9S3P8bEK5b7tXwfbuJNr",
  "key1": "o4xbjyRH6WnbH1M33NhuE728rabiNwVPrVXxqiP4GM99w1x7Nph2nu2B7VmywYAWj5JH8JSKUBoDhbv2SYJzm6n",
  "key2": "4YNfFNmkFgkCU4vYFvcR6zqc5V4kfXjbbzkMgMwgFGY5Sap1uQXGhiYREZSyXPtXGBqYciEQPTC4uFm4y3P81B1j",
  "key3": "2hvq261drSjyvUriRT4jZLfT5zNzdLW6nMs77eB82jP7Qn841ctKvLpqnELGiAaKo4PKnRJjJ1s8R4kjgqHwLYh3",
  "key4": "HpgoL7KfPJUb949wa9zwisAtPK2GUAjd8n9svk4gK4dcP5XG1zErM5aT3DsuWYhVndbHSDV9if7ctUPgx11feLv",
  "key5": "56UCHCVFzHpTJ4jB2v6J1ARqf2Szrp4BkyMsEYZrorCJxHaXtFZeETC8bJb3SaUYMCLbQ976Tk8hDytZjiEzeyht",
  "key6": "5owDTGZt6ngRY5iUhsHV71jcZA5min79Bx6wg6pbJDmkorrQdXJuHMsEq39t3Q4vLpEDxY1HVEURUDrgvpRmJSDQ",
  "key7": "67quUNNujG1cSehCmwNcasn6vY7jA6BynP5S42sHzwXG3LMFTqQ1ABGacLpFYpLjhZBxfskm3xhubqrHYxbqyKbZ",
  "key8": "3Pmx2D1kKbMFEq9HaaPNkio2K4ZqEYsW39ADX9K8NAB8ar4XpYM8DJMEsn4qPcrdprBBZr5JGh3HhixK8FoXKrgG",
  "key9": "66iYCkvexUFowDHvzwnyjp2T1rxVti42VCRF863cLp1LgC1yx6uaBDXQc7SS8rPErY1fizR6ggAYLiPnG8VKuJHE",
  "key10": "5LDCpbeskchDnvwLdirLLuEcPmLrTiNEX9RxUk8UESkm8mf9FwAMZD46aYtwvpoT6YLNtoghjTnw51GaMoXiYNvj",
  "key11": "3vQVLzByrxrfS4YXRnLZ8HbmgHzJYaTcyG4g65dARCoReMeAxWFuKJyGpuNGo3YqVRnxFNeMMS7Coh5b9kD3gqqK",
  "key12": "2azKgrxSaQt8JecGiwWzbnKggzqW8WiuNbh3SejQDURbfnqPVV2tejssT7FvJhan6S6wjGG9u33kN56vwJNx3wK6",
  "key13": "55Wy4KRpYMW7WLc3HBm1Jv5qprfVvC1gj93NeTAqv3UTTXiyEwraYMm2kPXDTjGxBdx6NGUh9xp4e8B3JNwZfDi9",
  "key14": "5YEMFwqR58n9DC8MxFF2yv43whZfLvCGB3Mp6A4XsZDs6bn6ECMDYR3WuiXYx46UV6nwuV1fzriar9QUxyosy4P1",
  "key15": "3cEPqCBZCJ82mQTdv32E2FEBSjabHy28ufFALCj1mXyfYYioHQYovv7rWRPE47xCJihbUJ35etj483FqgTh32YTk",
  "key16": "5rH7g7CDdXEHaYhGHfpKcJoRWeAHWtNMoV84M3N23KyejSTu9wyfvy8TXc73awQZKu4oR3YKRQU8pAYACuFhBpJw",
  "key17": "3oSmdUGHmuRxD1wzVq2JeoZ3HSpfdJrTqC9i9LTBjmCZCYWREaJmCXbRV8n2E8atDQGkUXuG4Xoz9W5n6agqnjBJ",
  "key18": "5qJxeMPuPwoSgxjX9VgFCdbp5TuuoBkbHkeSJCjYXhSYAmDMUd9V42SJSMJd6cBqiJuhu5KU8Qs448NLRfo6PQES",
  "key19": "4TbGEtV1NLiZtz7BQqzMtUsS7dJKjeVs1jjyGRL5E7aZNLum8G6Ve3xsupoLMJqu5KdxsgFrbZQJJ7c83dJPyxjs",
  "key20": "DGchtB7QR14A15uaHoWnC2UG3GwF4crma2oxM8AdzfvzSPGNrkKgboA7reSrui8iseKn58JWpRCdsaeRmTLTGVU",
  "key21": "3sP1hKN4Xjs1NexmQZds1VsbyU84rXV65aCAL172jyxBvyRvyUb3FB2DVkySLVPmcj3toaXwbxS6wy3XwtzVEdJT",
  "key22": "QwZns4JKDN4u7ihzRJw84xWXxsh4ERXNJ3GzW462kR6phaNsjDCw8V59QdSu8PfNtcVGPyo1JoP2AT7fGRkwicy",
  "key23": "qZsJG5DWoNFkoM5Dq4LpyYbRHw18ZW7p3LhUiNmKWaEZTbn7ME2vgqAfuAjdB9eWvT7nLcEjofcRehZ7tbeFtG7",
  "key24": "32kPXo3v4k1kj36L6taqkFZhJEmCoTzhsRk9Df8qK5uTxyRovGbjCyr9YBU2iyBfJCRfMw7cpybwyy4f85H6sqBT",
  "key25": "5cHwV7xbBC99yMrFsFhatsfTeSf81KPr5fuiKWaUAe6bY7Z7MP4zvPvaNUGsT39UTof6FWeXCsP6fH7wm3zKTGVF",
  "key26": "4WQrDrRu8mccn8u7bsWe4crL4iqYN26pPkYq6nPrtJ86QMnCzP4RSviX5cCP2Gm9PxohBv3kpzNDAxqRRjrDSrLg",
  "key27": "4jC3RSrfGLdEsF1RYK6qrkFMqCwh2Ewa2wmBfCPLjNGMsR4By3VM467z2o4iYVEeuZE9evca1mscLNVYnuym1Uod",
  "key28": "4BGZ6piJCaaMk8REawyBe9MDQiXdYpszPTtNGPJ6Ff1ocXmQ3kcYjin42JS2ZzdGwXiYxRNdqS5p3vBTw2vTVshr",
  "key29": "ApRLAfD5CTpALijUFGAbgERihZzdqkL3tLmoA2kso1sXJ9pvVhWsaRzoU5gHkhDe6GGRwkdYYJLgsyAXaK9rw5J",
  "key30": "2Y5USPZiGGiJ7fjgWrw9hCTMr85RkfMrRtrWG7jX6PVBLKFoJY38A47BPRfMVW88PTihf2F9jpQPRi6n9anz2xT6",
  "key31": "5Ue2idKgStVvYjWjnwHSrppDhKa5wf9NX66W8CQyrsDjwhjnSuSEeYgsabvx2fMV5EUkStGtYxtMJmvmj8w3usuG",
  "key32": "3DR8Xf9DEKtw9VG8cPUF5JJCLNEFvfjzgYGdZE2HPE2kpTiFZqNx5SdCH6csbGeV6Wc19ZZ37QSJKf2gVgqaqXnR",
  "key33": "4DjHSYfYXkrxpTPV3mk4j5P6a3L2JkxsX854g3ydmp4fkxZw5rGjPTySAyLtnUBFPDFdRGyzk5L6RU49bBHYtJih",
  "key34": "3AfBWB5Lzgc6uqXk2DwB1xUu16dLokogU4jvLNRXoHxjEZTPdGyzeS4f7Qc6Zm6FFr8c2Rkw1NzEv2Ld8eMU99yZ",
  "key35": "2353foERN7GMMJQAwVbfmKTiP8ms6cJoxEyGioTSXuEV1s8WaGB42TpnpGFAe9MtH5hGC2UgL9pss9Nkn2uUxAD6",
  "key36": "2xX2aRf8py2fskhnL6xZvFqTBHHpGYLr4H2sxGrWKFgq3Wq2MKk6GghNFo93t5JbDxKKUX1jTeg47bTWfJobbyeu",
  "key37": "3o3NCak1nAr1LB17nPnQF7TruXyhfLQPbuCZtv8MDBHJ77rdSBhRkMtSvBSfRenpkMnzwBYWJECUfrwytLYEi6nk",
  "key38": "f1sckK5FdzDchJzCFi7a32KftJ4Yw66AkwtNSh2D248xCrZxs4hLrmP7Ywp2QjnZy2tPvDCrmHSRSpjSnGc1dbG",
  "key39": "3rYLs6uLHj1FXLARLKoaKwVyEwdztxyJTLMwoyUKpBGcQaHyhymNV2cSrArcMX7C5KAXCk9EeNsb2YdVCRTqX33p",
  "key40": "2EaNYY3kCSQNTnY5tzKfLTMWe4XKvnUGPBXq46D52vDJmQ2bbpX8dtwRJp2dSwLDhhdoGx9Ka4iozfjG9W11hiDx",
  "key41": "2N2XWNnDwqaY5hoscCfANxFxMbWa9VVpJbdrDaLYswFhhJUgrcYxPdZvw8chnrNaMX5fN69gEZfQpNWzpHMWn6Bv",
  "key42": "2ZtfPvvu23HTMRWZ3292SBY7zxDECrwVFzQ9UW14m4J9NqJydBRmT9peTuDFr6tPZycLu1GguXkAFUavoA243GJc",
  "key43": "24Lu2By2kDNg8iouZQhuHR1Ay5HTQ9giW4i8mpRHSSjZkWASzxhka5zBZxdFLNn55smXfthb5879hYi4T6axfYSi",
  "key44": "4u47TXuTo6C3J7tpRaogT1Uj5uYuMpdYEZrWFnJeQfSZZ4JTnQb8BrWCigtY9morZh7KrGSQARb9WQFJ9ENTnvZG",
  "key45": "6h7a1qGfBC1sEdZkMCoJ4bKkv7caZegFG3Leqcinr5j2ZxSB7DBEMH9JcAXFgK5orjEh8NVpmUdeGVEZdngVuNf",
  "key46": "2NC6ZESpt1ziZSvf6Dx2M6QqZSDd748pvBMHWZGDJ4s8WBGQRDemQdQLBaBSXQDvDtyevPorZGeezkYEmpboKf7G"
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
