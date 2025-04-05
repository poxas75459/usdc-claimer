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
    "4jUg2TucjxF11KrKbPGCvcx3pCkBP8sF1aLixABRwRvoryAFwA115xVbPVyBvEVdfc3JkNGvm53yWG7gXHgKWKZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vEad6UNfzw1gxzowkRFX9CTMCR3VBE1QiKRHvt3kXqzUYiZaNRckZmSPVmRoExMu61PDT37SojXyvEJuNTqHLNn",
  "key1": "4nUEWGPDt7sPLiYAfJdCRTLTrFWEnswzCYTfeG2VeH2NXStGutRso3PRXVyC1hxwdWHggFg8mnSiQVwyNeBn9Q65",
  "key2": "2R3JnmAyCktVVEgLnR37Bb1xbAheZLCmRFenRzNvfCjWt8JJT1qqViAYhrbXC7msJ7HK9h7sb86j4Ti1noTW6mjB",
  "key3": "2VY8DaChkrkYWBipYcHCFyvGdCpL1oaekaV3jDqBXoJRuJuSHoiQ4DA9WEcMpHtXQfjqJ2q2pg6THYKuMNscTMP1",
  "key4": "SniSg3stnNrBVSpqfdx537GHpGhPYDooBuTdKyMopoL2WkkykHbWxEmCaTC9ZqEddFW6qCAz7a1zgUTH5eEs8CT",
  "key5": "3KQucuwPLtE7Gw9sjSugZSYdUvWMsfUZHUqth9oRTuPJLKzovSTMgqy3GAyeqDLZQYaSdAk8wAbNdNfy8KxnaMme",
  "key6": "2nnMReRw8TVJjh2C1LQJVhXqC8xPNpJc1s5rPtYvzkJGmydnjtwAV4nBdwpFsUrcgfpMpgtHLjFJu2fL7SdD1hb7",
  "key7": "4QUhNepnUG3Sy9GmEB3B6zRPmsadEcN71jEXNQg9X3WRz5pXRLa4s7Q2AWEpKyBQpvyREBVdMMFY6AM6sdsKb4qz",
  "key8": "5rJMRtWZaNgCPHuZ9VCATMceuEGVrEjVuU85sAPCF8HmeHnTWsM4RrPYm84FQoakyiKHPEA4DcVCkZfBu617mzaS",
  "key9": "5tzdNaDz3qooejxTJZ4RgG7ztBPwomzj9YUVfWvZtBBBKtt64yA89McYDdn8GFMUh3NYMonvuzT9gFVEatASwUdG",
  "key10": "5tnRoJf1WwstmS99tgrpnwgqCDazunHzB6JhBTyQCXeMB6ftNihGez5wDHuGSVF3xeg2KkypPZpx4mTZ42dH4dnp",
  "key11": "47Zpa5sKKjYNncYtLim9TyakstSqyJ2ha8Hpv2eg7X2pL6R8Yq2HosyPzV8hGxoZ7ZtTwKS6DtHLSFw2dek9kP13",
  "key12": "3QVFjwGEU9YcJWku43J5rkcqRJMvoDYVwK39WyD5tFENTAaCgXerRERytji5dqunWmyRoL7U9TgXntrZnurashnu",
  "key13": "33D6HqL84oSuyvos74L8Zj3zj9hyowR5tv2b1sCyZ22TBnNgDuF9YwMimkyfKKNykmNYU8yGn8PPPR1LUMN9YRsH",
  "key14": "yBAv2jPkYdgSCuhzka2kabJEiM2FQPN6AV2xP89wyBMadB5kgFmbzVxMjeymv9f2dG4oDWJMUb2UZWyJTg18Jwr",
  "key15": "5QbUQ737JDsZuD9LtdEocaThCpiNhmkFL7E4mTtEki97cfrGuaHTjVnTTRrEj5TfxuaphffJADSJ2hSKuM3Y65Y2",
  "key16": "34aXgH7dGr44PqfVSkAbmPNEM7erku1x3kh8Yry2cP6qpxSdhAYeo4GsWNmxjCsG7KADnNoptP4vtXeb9xdKh2e9",
  "key17": "uCt2Ji351pW16zx3HvsZj6YZgeu5gSgM9G89UPbjGNkVi44CS2MdsZSUir6bvq2Bt8EtvaaZwRvda5FHDzPfNvQ",
  "key18": "5nTZqJHk9QjrMru4PqnMtRF3d2jQfnkEHJua8Hm5fq9iCN1VT77GE53Ns1bvhSSEwFxFfaZ7AGSwyakotNJegY7L",
  "key19": "FwQb6KiRuR3YvpPwwQPRRjVxQkMqtgdvcDbSvyrySkmPV7tncnDtN3KbDRvcETpheutUWWJPQGkKM1XvR2GerwU",
  "key20": "yiebDrb8EBC5fmiumAjsxQGyH3xEMck3MccGY6XjKkRWTw2aZhAAk8hbm8wat9J87f3bECDDrbweXDazG1bFQNw",
  "key21": "46jBMjzWj3jo1dNfvB2GHj1GaaY4r5VyUVqsD1QwiFH4jupiuqFJgFEbTLFbK6nRJJaJTLjRu97jssuSDmhAuz9n",
  "key22": "3PtVRk9aLF85GHkoF14CAi3MQEWzPM5fJBk6jrfRAa5veZn2Zej6pPaXW8PbKK9YZdKTwk9qrGZyp9yDcw98pLUk",
  "key23": "4KKcFTWKZ24BvfuNyMuoGti3TCburi3wSpxQ7886NtQbfNyVegw8W9e8PDiMG4byWyPJM913V5YiWEFFB6nuyzpX",
  "key24": "BsGa7N2QFz1idmyFT6yLBAJ8TJhAZm7cYoFGSiFHCGCZ8gukm2eJ9sBqqgVZTLofuW1bsenJndDhfTcAWGiQo8j",
  "key25": "2Xm3tAtiBV55aaJtpDuUVMkFsvsGo7vG9dbGBVbXkVuJMYKeJjp7LahzmYTNixjuKK2P3vSLxn5Q76JLqt3gtNAK",
  "key26": "51CS61JbRZUXQyDUTRZutgrNLuYpu1QHNQj3ZAz3a7c84VhBpY11Rwe4h6h6bcmQEHEbRANi9AmA3C7oYjQX3gAC",
  "key27": "2NcPAraUUtfh5PBoiP9A1fgUqkY1BcQxD8S1hYvwwMq6guaUVJi7qJjBuduGkTWQeoXuwdg2jcK7XWtTUfScPHfk",
  "key28": "2swvdom97p6ciXwufB2rbrRqDzYrNXYkdhhF4u8w9TkVQ7iWfj14z6stKpmmQRYTr4TcQFjU1UKyCEBFPYDqC9Fg",
  "key29": "BtPiWZJgHKSFpPFruFYnq9QYgGkEKVpht5SLr7B8FEZWVKPCq7V3PWeCMmWLo3CTVwkS1uSVr3e85WZXbuior4L",
  "key30": "n8tC3a926H9ph8EpJaVaywNMSJrtpj3syNjJ3Q1kg9EiPXZHLt1heGVttL3V8D5SwhdABRtGCkP5gRDMsPxuWGp",
  "key31": "24hnHYVK54cAuw6HUi9VE5rrLPkJwhgaYF2R3uJKjcQeVeaWiEoDG6WQvzXN1ZZfiyp9QyYbj25BHhQwexqBwqwv",
  "key32": "CmSFiZtnge3G82m2aTv8AZqDHtHfeAdJUPvyRt3x1XnT1aaW2gh6vU9jkHNtumzRJdX59gyQJcLf9KfvPGAdw9Y",
  "key33": "4aKKcoayjNpDMwQCAzNoLgdasAbwzPCX8hNADZqoEwh57gHivcgjPKWhBN7G13H9CHf9QoPTd7kLHxeSosgU26oX",
  "key34": "3dXNYDciphhBfHZBaq2VdZqwKsEzZh6DQoFQAH28F7xqoR3yv91WCt5KMkp4uAzyCpgDMYxcrDfEwcH4Z84QRxGQ",
  "key35": "3zZJ7FJpUtrbenM1n7CNm8vQBHxCPfPPUM39YeyB5EUUcWumo7LNMaz1GB2UWiKRjSCGySW1PE5N5rbqKwKQKDN7",
  "key36": "ura4WeZvem5gX6nbjzSjJXW3LJdcyFnwra6s9QTohtwBjmmkBpR83p3kKSdiLpfLtqKsvrUkdNpbegx2qoRt428",
  "key37": "5VukbF7aLkjXoefwFFtLddk4kE4SqAqT6ykpU6JstiP2hBBF5Aia5xCchkgrdNKkEXgG5VUavJhgFwEx2AVTXtJ8",
  "key38": "5LPNrhNRjbxdfL89ND5vQyRY2YhMC17sfT3kR8FZ6EWUqZJePTZHNW1VnTzyDa6eZBoBh4NU9sNecV6MDeLm5KRu",
  "key39": "eTiHDpHMb4BW7gUnNDJfror5CpDimpaofYMbGqXVtT3tEofbqMkncYrzCmmcjkTY9HMCAwyrwigzgg7BvT11EaV",
  "key40": "54LCobEVrSzMP4PyRkj8GkHp2EfJwCv43BTUwsCs9yo5LYdtmvVMxaXNUGLWmxTbRKSpR9kQRZ5AEG3L1fKr7Zyd",
  "key41": "449yvhCFxhQ8jwhVmuMkaX2ZXT8YXpHH3qquztUxbm9gjLxKbA2B12HbgZUotG8cp87W59peLLaYyKexgwktQs4m",
  "key42": "5zss3Uqffk4oo3bF8p1gFFfoaj3EGaAdd54Tvku1sUuXKUGs14P8Z34pm6dLb8WBV9Xx43qJXkmfZ9CkfoefoHPa",
  "key43": "WyL7LaT9jGcygfAxXj26V9A3pTGdXr7GxLmEw9iCweskgo5Tcj6veZcwRiYETjgmEdRubbodbRHzHBkxuueRvap",
  "key44": "33qHWHsHqShYejJDQmZeGPP5dQ9dubDY8t44x4zTPvBfHMqnTXnSqNYbq8rKGTUVDoYT7y2i55zc4VrAt5n5WFas",
  "key45": "1PETnSketJc7md4oCxjE1erjTsBnjyAX4sdyKsa3BGAHtQYgsXUMgLjkjs65P87tky2pkW143sarVaxokyo4xtD",
  "key46": "2vDCAr8XUwsf5MV2ry42DTwmxYyAMeh4YaouK6GZXyfGJdVQU4gpCLv3BAfDd1hf5nE9asXEAQz1Dbwmrnc2ZqUZ",
  "key47": "2PbySG4uCVuubxkdd5sMVdbwhjDwqYpoFhwheyASmNV7VqtroKMj3FE2TFR2CzoXynET7MGqMthqsAASTmUfoZwY",
  "key48": "3oN9vg7DQC3DaJtmFdBdRGdcuJs2BCEnF1Fs5PQWtTQHhwxrJPcCDf79cpCjeHc8zPwDRuAz9wC2tkPGxt3DE5vZ",
  "key49": "2vf2SVJtdgTiNHFt3wT21V5K4qWNjwri6X58t4hQyhjWZz78CKrvuLhXkxWtjnevLuJL1VHpUjzGpkgiwfRCHZST"
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
