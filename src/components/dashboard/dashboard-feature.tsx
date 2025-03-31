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
    "3fH8dWF5zDcmuKmgZx12Y4ASMTdYj1sZvoePRBJcAxnLwnvEAwDmaZJUDNDPQA4ZFLEuPqPvQJ7mhFizTMH1U6di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fin6LL6JDf2cfP6JHBVcQpMRXnaFuXyDUYsjMbnwcbXJUsEMuBUMDMp1UmL6HwkjerCzH83Fod1zpRSfPUjXmEr",
  "key1": "5B5TgPFdSyUs9bYrctuN3rHcAjrraicfyzowexUzXuXb68HowYWnmRqWQWmKkywa9CAVEVQPMmtUMjaFYRFrfofT",
  "key2": "5DZi4A6h32zGWpZVwGGmhDute4Qe3vNVTviqwt67NSWUyZatAyh9AzXVwwcHn5mQtaqxYSnpB72MhmATSpRUeQvP",
  "key3": "3N6GP2RAA3AmwPN1tqkdkLMphaL5KEPL57pufGpXBkxLqU92nrqhsG6sxTunaqWtDPqUDBEP6TgyUq8pmxQFiQpu",
  "key4": "4F4A9AHqis1MN5ccP9MbDrpFqZs2tUcxLwnT5cLeLfJYNRDtQLnzfwWXypqGNua8D28fZcsviVfxEBNDpFA8sWdG",
  "key5": "4jHkq9MFSxticUgWvxRcUFWvpvF8b7EqUBqyL9PoVgXSJMnMx966jL4ULE9EmhVVGR4JYDGthdRoryuoCnD2RtRG",
  "key6": "utYy2UC5dH9w65zLasPkYKNUZaFaPxixmcjwxXyPGHbPBRj9Khm4tJSusfr2C3s7CN3zjrHB4K422VA1vj8LJcP",
  "key7": "5HSSo9PXXE9WGsyZDQ4tJqvnm9XopSopMCegJfjP1Lsvw5QRgCU2dWhKDpgKexcUpYQjjJ5cqviN7UqrcHKRGkSj",
  "key8": "2u5KaTrcrvfV4Hv4kqAvz9gDPtNcNBdHNxPiEoNbAB82XZgMKEFM2A3ihkYAPLVo73d8o5ynuNxgkttyaUvUnTej",
  "key9": "53rJCon77NzM9by6eUsbaGr8QwnB2gz2JrMMrT5otBbRubDkdiLgjJ7ePPo25rdk8gRBoTkKA8k7WQTdvacx5QsH",
  "key10": "5Y8W3NprwpNkrgtWSC5UZm8zr1vSEQ8kX75TU4nuSSTbxUcSdLMeuXJVSDiBmXMJK5RSJqbqocvFtghub5mLBNKX",
  "key11": "5esu2gPSheLXcFbip5ifi9ym83bNCSQZGzfSwF9xqCxwv4rUYP5b1TF9fh8E1sP5AhsP7bPy6tMReMMKTb4G1ZUa",
  "key12": "4MGi5qpn79xYQLqpLEMNDoC8vZTwt5J38paiqNVd1bBrrW4JeAtNVBWAsELF7Hw14vcAmNUh66kgjY7KLMxU3pQJ",
  "key13": "sZXdm3C8fWHUvqAXyecVvThWct4W5M7iCmVARm8Y4eEkGWXw7mGLbUr76Ho9NyN6zf9BaoStDsxKpa55Xs9kWry",
  "key14": "4RLMXAZvubAPpRzUAXN1hVFXx8eSpn7dA88D5tbjee1fwos4b8YSn4RBQRpZVTTEyu2kTzSis3DRsuuUodtmfkSb",
  "key15": "3nnWA1gg5Q4WjDYP81LN1imsbNMr2wCTGGnLvrRPoNjZp4Ek9gseQXhc9eQvgzquuidgDCanReTMhqLme83pcmxU",
  "key16": "5YDF5hRyTRpGBsNv2nNBmFW387SQiXQzu8L57AQNhVhVP12y6CmrBHtphGrUtvAMPW7sbd6NLsj8apPXcxG3bwYH",
  "key17": "4rYCVY2ngkycVk5fNmeadmFQcJuXFougkDDpqBN2Aq983HRAZgjSe2aEbAu9EfKVg4Tf9NX6HjqaJAX465RKo753",
  "key18": "2NLw7ZT8FsVmEswk81uw67MokgvvjiawSSVcAFk2dCsZbGKWVcuGPm7mPt4saPR4vvWEfhi8HqPtt9LNzCxhX8uV",
  "key19": "3UJsXFF3XVxTCw9ZtAmoXocp7K21tiriWQEBf8oQJnTJVAt4EX1eYQncCc6Y3sFf77jtQWuSsu82T7MtpaMAet6J",
  "key20": "RzrdbUuVpfaNTfr6z5L7drTMQdvn6GVgDL2B2xmmDBFf63MYUzEuHJEWqEjUouLKKLWyUnD9GTvbh7SrJkKzKi1",
  "key21": "5gzuFvT6DUSYuqJ1TWD68sJZd8N9paQsxNLsLtiYhJmzF8E3kLBp1PU1PFQ2sMHpKQrVP7iQBytffEowGL7Po1bn",
  "key22": "4qLRMWL9fwzAnG9mevT9iSjRD7eaLcFLaNQ8LoLmdKZ68jLrdQTsn161i6m9wnH6yiDvK5VWvg5qZEkzahZy7eH2",
  "key23": "j6AxN9K8BLfs7psRFEPgk43e6aJYLU5b9Sn6voSNUdeP8hdHuXpKcKxLTrBVYFy1yZpVdLNhxMXNBw9kpHQXXnh",
  "key24": "3v7V7Hcxjar1RFuGwsVNe51Bkh9cnsAs1MKuTmoEnPRzRusXnBr3aSe3RPjzEcHYBz2QVeKrZHzFhBA3xgaPMDUp",
  "key25": "2PENEzN6soehYb3iYGZhyaSHwxKeonA3VLaREwu5c9WCakjbtChHa5UrLsnm6Up86259hRdrhduewKp2atE4pXQb",
  "key26": "hjkCxUopZHbA96foqz55kcwRS4kwxYrMYojHwsRJg6k4gJbGdC9aNVmfks149wP8JdHwsLkuCUoyikC47KSMLWs",
  "key27": "5mFoGHtAtdxm4uZPgZuaQD5vPGXBiozjD4EseynYccws99es5qS6wYE51QPzP7n5eM9iFL1noeB1W9QNnBCALSR6",
  "key28": "4Fbyb65T3DY65GeaaRmcRKMVxUfUAXujJTsvgwjNKiZMdbVkoAp9CHmUUXLEk2GqtfzBUQ1WMEgB7JS99P93LFV4",
  "key29": "4vUpNSExAWuiwzcCP7Q1y2Qx4iB6YyDfBoFWBohH9S96tN9R8Pgk1j85AHMRUidmc41FmymN1r5c48D3D1ayv8c5",
  "key30": "2z8ZHVTb5d26vjWUW1BE4VCPNffrzwJf2PVMicFabadtfnWjr4cxLDY84o65qCWV8KS5P1CbrGR49TZYYmskuwYf",
  "key31": "5m4rwGtVLYpRe4erbai2y84HQGKWWpk9sWDSTUoxWZBCVuqvYT35jACa2EHug2aLU2Sce9CrPNj4havrBeMVL8k8",
  "key32": "cv23Az69QLFVUHWXY8BkgLkn7em5ZGS8cpJR2ECxSUritGW9LUxbdE7uuCpBenf65Vw86oVFzQt6WXWYdb8qQLX",
  "key33": "4uiiCeGh76QfamMqwproSX2F3uVapwn5S6j8LeQx9C53WDBTbzJS3YzcfSJ5eziyfCxtATDQ3XQRvmAJAavJTJCg",
  "key34": "5o6AGaWLEtgyj454CrAxS8ynVakW86Mbh54B2maE9AB4WUuCy1yGKGJpx2ZiUr1kcmTNt5Jm6VdXUmr633Nh1imS",
  "key35": "VSXau9UwntMsnUPnzjWhKfkgD4HUJQSQiytkjpMyVGT7mfCzrQR9ob3NVLS3ctcsahsVHVELgZn5fQ94X5VwkY8",
  "key36": "128PkDzoq8LtrSkQqwT61ZnU6GFiWaz3LVcg8Rfxtz8GRgiBDWFfi2iA63gYfPhrQU3xasqhGCQV5rABCo8FLqC6",
  "key37": "2AUAKbw5sRsbe4bdt9uHcE88Q8Mj7ZAQfS8z4XASsbU2RT3sAWKQhRnfCFq8uZHteyywde8iL79xdMtXSfan8s5C",
  "key38": "2s2XLTB9VZAL87pqCb6nqRiCJ3oj1KLCZ4aGaHyV8baTs93rF3vkYa8dVE1TXDPH1wZntigULFyDA8MJBKEESFBk",
  "key39": "3exCNKJqyNcxBzFSa2XEJrNQRySFozg25pjiiyrHQUgk1pApenfryww7EYusHpKPban7M5CZPorerd2xSdWXHy1W",
  "key40": "3TNv1s1zRA1XShRbyGwkSV4hY6GvWP7NpjbDZdXn29yNQdYYUxNvZGKrUmXowGND8r19mai5az38aqiQB9ieHnd5",
  "key41": "547hnuNf8GmbR6EWNWN3GaLeYGevJ6RBaUKuzvh75uc1Mvq1vMwM6TtsLp2a92rZPxwezKuQxcDC5Z1VEuVxyD9x",
  "key42": "2sW16scbR7awTs3UpcS4duEbYmpSn2eeDus2m8iAau4D2iMQMseprDLVdwsuxAdEfNeeGXweG4HqvaQZyAsny243",
  "key43": "3BqGjVkzUuwkHkpc31WjG5STzwBtuETtkykkmoAcEdoYFJtSyoJA9mafST4h3q2sWx3rLDF7QVAt2bFMHM4HXu7p",
  "key44": "5GRAokDu4meUWbBbH4jpFqj9sNWhv8atcn7YXQ3znVKAw3eALmVVVHLzuzT5SLeRzpm8vELDQgNAxudtuFC5KWb5",
  "key45": "jKoobzLxT4HveKawatPMUictjMuYV8fKuq17Gyc8nDrz1nVzusQCqat6pWD26hT69s8ZQhofK4jpP4uMMZQyrjr",
  "key46": "3MmsAMd5tqffCyi2FeRnPWVTWHqvgmmfvzni9XDCRBvwouv2HYHFFKirXZaGtto47fDp1oYRjGNHdkWyQAcpmwke",
  "key47": "3F4zBrbv6qEUwvxWef7hG9PXdA6tntrKxNPZqqiQX26sa4Y8vLijmSPasxGkhV5zdKGa7MpkssKrPK2H3GXTUPNq"
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
