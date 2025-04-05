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
    "546sATXsk6H5BWpxyNYkDJGQCB9xxUBiAPPUGTjdfjFWMaRh2zu3uxUX79GChAwWJsy85CbdLJXBFbSGUmpd6prz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fMPkZdS7vZkpLGDC1TpB29MkVrxFjpX4hJboETz5LDyoVsgk15K7QfzfxkFRRMJEdeniJDPWEg4xQChdQR8deUn",
  "key1": "3GMfmbMwBqe1nDrkm1ZMJGTp8DJHNqfpdfpgkwMVc61e69EPVjimMkyqCukhLxtUKD24PB1BxyRrE8kNpVCpFzV3",
  "key2": "36LoAiBeTkqEtwSCgJBLSCUKYvq9zt6RPMu8VjXHUb2wx5cMpF2gHLWWmtSvEy8ha2NwKoEZ4JSrDi9ogLNgvUFT",
  "key3": "4Zzhs198waHTo2Kt9FhHko13sTBXDqr73Aieh7ZyUUxTzfSb4ap86UEKDZYt9vXxjYQRMqXc34JiyKrPn41ZX1tL",
  "key4": "2p9kmJKStvj7RxReKDeg8uLWbMkyKxstP7sC1qq6EeP8fwT7qFE9eomuu65ypsgctZMRqriYWViy7nAVJUpgQmwQ",
  "key5": "PnYniib32Kdf2hatP3wQebbJNXzPjsXSefAfAAzv9Vsd6DZJ38MxKz23y1zzQZFjqDS1VSZNENEcwBU8aXs6Ct8",
  "key6": "2fLXP1763N9sfuW3Cmhgm4YDg53m48fNvNnZjw9MjqwDpfT5UhwNH8eMhxaQa71B7EaSZ9ZQ6mFvCEfcc3kFdVdz",
  "key7": "5f5VaFwxukCLHrnSn1LvV8vs9TWZQaTTSzpryPsDBEHcZqiTZ3xnvzXZHDB8UPUY7NX8vfX8bY6KZMUVUqyL9mqf",
  "key8": "2xtTMbXVpYQhQ94BGrC9c4vFevCbnyJr3mF1FphH1k6j32MqapGXH8x4Hm2ncomt933U3Rw8bUYAxQ4ny4BvmSYJ",
  "key9": "3FDQWH8bsmBYyRbhuDK88wcjVEa9EyMwR11ZotKZBd3EmndTtcxmiLZtNTC7BFdKWm4Rtdjvo5uX6YyRjTvGGuHc",
  "key10": "2vXEpmAFjFanw34xuaMjFmJinzGqCBaxnMEeCyp9v9PQ9NK2FPRh4ahh8fyUoxyWW6WppKinujaYacgAHYVroTom",
  "key11": "4eKfSHaKgJQYC7quNaxztDqX2b5Su4cBYoyT8DFtaJ7iQjfjByeBu1efgeLdWezw4yp9e6c1oaehZjhUiYMPQyEn",
  "key12": "4uRVSNaXzN764exgqaik1mifqmhYyT98TEWUx1bt7re6ZqQGMjSF5W3DUMws1K32eFAbNyQzi9HkjwM3RQfWWL4S",
  "key13": "49LAV1Gk1r61jmmVakUan5da62C3WkLF4aemW2Qvs6f6XMpu1XASF4oSMFb1jSjZ1GZSLXt1FqjH3RmigogY4jn5",
  "key14": "2gxeTW9SMqLPtWdYrYb1EGK9UBRXd3Svo257TC3FwvnhPa8VBjNaM1JPUj1At1FC3dkdsa95PCEVkZQKH6eAHRaB",
  "key15": "331394ezjqUsxuHDXMEKME5ey8dXVCcTv5MHSt44QNppFWWT3ChnkU88hidS74mNibVgcubGW1QkXUnEvt2RiPrx",
  "key16": "4XyZbLrBpd79tvST7UAXtgxC17aotrkabiQDsrBjP1x6Wi3CG7a2nSe173QyDMk34kFEN6YGtv6ndTod3krWATsj",
  "key17": "37nmYBXcJex7kQoAYuAUDwsfQKuT5FFa29FiSYY2FAGThjpXdpL5rVzTa1cVF8kFUMybqwnQjsBLLogd6iotmwvS",
  "key18": "5xzUsakrVnFbGSsbuLcEB3VRrMHAF7q7iujoxrm3EScVF5QB7zW4XgqgDy37zfzSjchuuAiBreJEdcDRvod6HJHp",
  "key19": "42tYQ1v633ef5xKCc88PaWiJt75JNDTHZdSUGC9BqBvhTmnxbvccpp5eHXFscm2hv3QQKAHhse9f6x1crsvVQQFM",
  "key20": "3ZU629WhQCSzEeNxYoyp2WDYVNrNvQBECjKbUrJ5EqC2MH2XCaHXqYSZAJGYDTBthznXkfAEY4USfrjqEx1SkW6r",
  "key21": "vo96ZinDqs4z9wt68LPcLyJ6gDeHqRzhTj8QgFaEWwDAqbtUxdiRmPbHETwCiUqK9AkFPQuHqpET2VNwk6qCust",
  "key22": "2emDPjcDFgghHonPCixEkmcsMnKcjNSdwcnDbWkeCffgss5JVtZZ3X8W4M2W6Dcq68gEQNmxqponKRBQ6DuL7WeW",
  "key23": "dhwsq3tGb6fxWXESN8qxNaW7ZPumUYv9Pnqe4xZfax1pc8vb8iQpouez1ASX8mH2MjwMTpDuSUjzxBZkJMD3NWx",
  "key24": "5WSiLj1RhUqUq3Dp4Zjvfg9qMCi3MziUPCVu2D944yMknHmXR7dPToMCzHBz4Y8bVDJiwb9juBHMZLaT47PrkEQg",
  "key25": "2JHMXmPkWspM1XcMSJcLnDj3NVoiZLcafYeFcXsNAT5PDLZiUbjDFm9kLiRuAWzkV73kW4PJWEvs2bPuYctC4nYn",
  "key26": "5b1Ld3zbRi7EVrBymq3Sjko1iz8bwTdP7JttKZe3nRnT57r7Dt73ZmHLzRafu7FEV4wD1ugV8YPWzHeZcsy5Z7Xn",
  "key27": "4Z9k2oqqiHcq2ZKd7SKRhNLHwdxNmXsSMoT1tJJPHCwJ9J1QxCh9p1LeAmwtKWnibDsgKiajtmjuNfz6uuhad4Sa",
  "key28": "GHfUVBAkPfrXRzcsunUZCQHZvHQrWP2XjpLcs7id9ymnjTzivdoQxDkcnPppv45JB6oaNcw4ZxK5iKLe6MXQjD3",
  "key29": "KhWtQXHMdLcRDKe61aZPCiRHFSTULfdD5zP7B82BRtL4kpyZaEjGawDQiHC9wTWcFebq5PcD9P5rG9hJgQAhtr8",
  "key30": "KEbVooBUgSSqgvErC3o2EHUy3WaRCbiL3EYYjDtu2MDWKQxTBJpctDpp76Tye9qULK8mG9QqTKR64g4HYxWAg27",
  "key31": "3ZCo1XvBXRxZH3amggE2xask6HWbDmp6PfYrS6wFivYQ2oUov4ozKRFrPBMCJz5T8CB1XjpTDvpYmmr9jGXZS5Zh",
  "key32": "2F6K8LqhvAJ6cmVngqs2zjTQMuUEaURm3nUwxt9FpDM3oHEgsMAEBFS1nSuikwnCwDF76z6ytKUGsUi8f9RV3ryA",
  "key33": "GJ3WLUDjGZUVXByLYgQHU7c7AZ9d4Yq3G8as1ysKbbW4n3oqadiCBNtWzTiVu2iYSsVCeoTKjMwZWRxLyRobGus",
  "key34": "5ibRAu1idza9ChfSv2DVJgUwyzbhCHR3uqr49zmCMCEejMHvwoyAmTCqGQFCsheRTjsazEMDrB9cWC8QpAaGVetq",
  "key35": "fGp8uogV3zRSYDuKr6H89uPZRav1iDk7sBhhk9SgLZCM3vU1cVUcaLWTNqyqEgMRPyXNthAjEvjYtd8E4XZuQhZ",
  "key36": "3MTjdJDy6zaf71Yn8u3MZnSeTG13WHzR7HhPdde6it4tFCA8v5Z3XANLYNmGtM77BTzhnoe67frmChL17WCYVxAi",
  "key37": "E45Yyy89U2KbFWYuGYsrz13RC298GCZCBAMB1yFPkFCn7a3cHNEJZCfUqnt9gfe69rYqA5VATHCK9xsy8mZryx1",
  "key38": "5N2PT2VAZPtWqP2YKVMKSNiQogzxAV2VJWRZBzqfsRq948QFkNtS2CS3mE7wVcKphSNpRhtfPAPTsbSEQkLNRS5y",
  "key39": "2zgf5fn5iyatPLgSTD5eC8ac1NmxRDuu6M6ZZogPNALvEmSJdefahrUm8pxhZGfYJUSmopDVnF5oYwAczusWtvHw",
  "key40": "44fdyGcNsGepxSJsUQh5b28vuRzqysFCqL9FdGwpa66dKVrFCXy7NtiHamBrtiSEMYjPfVpkvHuKCcQXZLPBrMd4",
  "key41": "49HXvRSjrESwebGRnPydDaf7fJEcNnnSKrwRRfWS3XbUKuChKJxNNnaWegZ75LwFGa1hZtkGr6ABxijAnvJ77WEn",
  "key42": "2StCF1AjUi5j1HKA8YqBRU95VuPuHHYnFzAbh9PjF53ypkFRuJBQ3z12Yx7ya7b1PSHAkA7VVLmeZjoHXG7LS4cP",
  "key43": "4a7Z2c5aLE37BwB2EGNK21vXwECENdwUvBCoQfpjrAqFuk1BVNit78YjfsNf1TXZ9J96SQgrxzuQvm7A7Y26wc1p"
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
