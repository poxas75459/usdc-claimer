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
    "4dYEa4ipB8vbpLpj6oPf2RnypuwxiBYu11itNkzNFeX4uq85QTNr7tKtP3mzTrqTxwH9DwLVmqVVAy71KuwoBU9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HkvyJNrKtSQnfELRVmsK1qeC947eYKicq5VGi19agL4b6149zpZE4zMTJkps67iEHmbr3r3UDppYzu7Z7jdYFyv",
  "key1": "4GsjQsfM1yyhaqkdtpXsjJhd8ke92rAcLpNm8Jwqaqk7YK2qJyyfnLigeD5sFiV23GNpzT3BW9KaKWzcohJHwzZu",
  "key2": "2oDt4BepvafPP5DvPJf1RGNgAqELpDyD2H3d4r8TqJQqQDJE4B9Mibs3CpV1JUd8PGxpTCiCZC2a5ZfWsCkyosqM",
  "key3": "28Bt5npweHTcyaA6hG1XUabu9s44nTemm6iqVGcRhNC7eMbsrXzXMtCfgaXcA5k92Y9MAi3Amo1GnJvFhRj4sJfo",
  "key4": "4G2CVsv4dhhotAb9x5Z4FtDN6Gj8nzNttiFcGJcPo6TTiBzyKgHgiz921uALKXHGmFb1oCH79pfJ6UJQPRmjZwoF",
  "key5": "4zuCsNroNkoCvaCm8isYYxM9GaJQgChRtpmnkq3SZtzGA3h3a4JCabB1y2yCWPf98xshajtKEmRuaBrDmXw62QNj",
  "key6": "4auMEwdTETUWUgtGgvKY6Cs9ZzsHxKno7iXK94rMnakPijcgXshBmYg1FLj2ZiCNKkDkYhiZg1cbprYmEvkcnFFt",
  "key7": "295er4bPCoBhhBcPmwE23TbHYXi1QXNLnftmk9mwDM4cuCcSaVUY4NupcVs46Wr27rMFWRFYGBTNPPQ6eLWR3eqc",
  "key8": "3vvA5czUzVMgU578eJbUhC5YanMeVLjeKyHrqALXFNQ79cHFV8CpWLsYCXaGD7qmK1xq7VQZkg72WZhwwWSNkm98",
  "key9": "3dHpzGemfrJZujx6TnsHU3GYm1tq5F452WDmnh3AE9eqJEqgFUUYSQMZetifb79246L82LWztVxurrMupbB5nVPA",
  "key10": "4xZuTuyrEbGGoqDKoN6qn5Qc93uCvyXbEfE9uM4CywcGxJmZ4xxp6vbdFakAFbaiCuckq27cZdxyhmc8hRBJqJH4",
  "key11": "21ohsEy41BwcTe3fdzXPfmh8yqKazfLgWXvSkLysawJujq9E6k8RCtd5YsanPZbYq5WhS79rPEB2VJP8fb3Du9pg",
  "key12": "2JssnfTKSydBcR3tUXPRGTgx2fwu7amgJRpYY9ngR2ocDrM73LMQwiLHEZV9Pzm59oJinrR2vR4shJoTXyg6U4q2",
  "key13": "2SqPB7xrZABAun67di5BHvs6dhE4dQkDP5HE3vZoifKWqu1qjnfPyXtXSeN2jsBPWs77HdCrBqajA1x9gSExVWdV",
  "key14": "aoNdakxcxkgyMsaMZV52vMf6QwKJiC4uAa38yST984mcqwDrB1MA9efGGdefhn51GMkZz74RoS4noyYkbf7BRBG",
  "key15": "aa3LkPMmixzpqpdbyvdxNhBg5LDtuZk1grM3EBNeGUzeGUrcMZoSm7dr9S9H9vFCzzcP26G9w1ygtKC482QD23n",
  "key16": "4n8FkTabTbz5pWu2fRCDqDh1HUKiuvfw56mPVWGMfmJoK5yt2kt4knQfcEZj6Z3ZdGbDwZSGe88vS949wh6jTYzb",
  "key17": "4fZp9en7H8vhGesqKYifuTY4wryTVaYk2UG9TVKX53dXNm1F6euo8NwKdBZBBxPkbjErHC5ZFYYMkResSCMmv3cm",
  "key18": "51Yk7hdhCaCFnV7pFNDbewEm9gpeSCBCaeAnBLBJusf8oCkzT6ycGEyYYvS3P4ysSgEfCWQgJ5Swdc6vWDSJtAwx",
  "key19": "4MNRN3WHnW8LYU46MxzfboGyaRmHAetReVpVnhihSM4HSLRD8dvRgFNio43qiJZfopGGMHkrqNWszJi65oAAN2Ti",
  "key20": "2sUyNd3DmQWZzSvfLMjUDjfMGh4NfAPSKmUmsVSKRFh5sPp7QDBKzrxriHnEfNviAnz4oFTyxJd3TpTARvfqTP2t",
  "key21": "3zgc2Pf7KZAE6aJ12M8UWdEguN8Nrj9Zqxs3JyALvFe46nzD7uBPQSLNbBFEjfQkerBuM5AxmGUpw32tEb1qhCqB",
  "key22": "QSbVPDucS9BGJcN2v9cQXBSgFywYQPyDri6Hd6CHBBwvE7AQSrTA5LFXCpNX937xcoZ6N4zkZqTnHLXE6MbGjGm",
  "key23": "4x4C3GXReJEFa52VpXk4yMxRKQ7DgycYMynEdjd2WxDCBRKLr9bXix4X7XniAf8KhLGG1zXPkndg7FG91Rjemv8h",
  "key24": "5kebvGmPkmXNN27Q4qwZ1VF9feFqFgQmD51TDWcvPPZHRkDrkAafNgabwo1edR7GuMBXEHALbtmGy3snKtsxXmMc",
  "key25": "fK1W1NkDxgbzUcBMUY1NCDQ86aUeD3NPiagvpYPXWG4ZbkhDLhkfx8YAEwPVQppaCmsSSgMc35gJ5yaaCtFwVjd",
  "key26": "49Y5JdM4PnRJ9pwjsciRSof4dMTFLbZYQvfkm3Q98Lau4mboovvQuBWUCi52FXxPaNTnRPzGV4MWUT46fRd3HPQF",
  "key27": "2a8sD65GnA7CJGBPWn6SseBneAoD5WSi2EZzztzqky3kdYLDbnmujisB1rKLiUShCeie5nnHnCYps9vySQo19QH6",
  "key28": "4Uz8TA8YTum8HTjVpb3mkxyYiUL9NBiuEp4pnJGoraVzWUDjmPKZG3xb4Cbkhx1y1tqAFXDEREYvQ512wH8rtveX",
  "key29": "64T9yZ9Xud7wFfQTQe8NY5RhsSDXL3Gf3jUxC3rrRVpYykUmiySzx4zy5yE5n8hiXewkqJ1s3NjUPR2hi7nGMCFg",
  "key30": "nBNjEn5ny5rAQrqnLCgSLq9xKgm4tGZ5cvYuPd4LXA7eyH2QfvRS5VmGC4KWZA9X8uxScBjyQKnDLqGCx1K7dYD",
  "key31": "3mRvSLudE9K12YbocKEeF2vmJJsqvr7Mo2s8TTeZw5rhYFnL7WbQVRQzsdzJg2urw6ShLytkyNcumbt4HV4ZJ6zR",
  "key32": "4iqDgND6tBz33NoXwTQqzDuRBunz7r9LSFbAMRNqn8JbSTNL5trpWd9wrhLQ8xpDyuB95xMhr9MZZJoPPWi6Kwt5"
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
