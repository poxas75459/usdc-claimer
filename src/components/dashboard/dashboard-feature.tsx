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
    "55gzPGquUsAgiYns3tAHZXkSe5puydbVdeSWqYTK1CSUF8CCVLw55j9mbJZkWVbQJVorS1T2SNFTCf69MMEdSuyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvHNcD85PeU4iTUih51SsJyrp3CFmS52GDLbHd1gBGoXsAFtxyFFNHE3tnKs46qAzpcC7xRVf8cV5CnMkAD6Ldo",
  "key1": "3A5LWYZ5FnZM96j7hFtSfQrvPpLHk36uqm3KFUkzkFBEs7z2a1SJtA2ZYvHRX37iAkGCutnkbibGaUgAkhDkFUCW",
  "key2": "4PhGS9gUwcjESWbZ1mDsxh1YEQRuibZ4VSSpoNpb8vLZyrcwYb2hjBxPxZcJyC6DnwNohgBPmCkzWkvyK4DnCmNQ",
  "key3": "31ptPxcZuMDXtDFVmLGWrQxsM5EXodsRcoofNXzXjDuLqVFopmxSzoogUoz3AoRXCSx7FoFufWwuASaa4HbhZSKK",
  "key4": "2xYgFhzuZWqiTqJ51wnk2zN8s5VdF2f5BiuMraj3HQNEYg1i8Z17Y9pUFDHGvaANMSkjooZaV8Af7tebk9LwY2Jj",
  "key5": "4j8Ro6uQBgtxFtxUDmxkX4kWqVWP3enqqo7H8GuSZX9tiE5CUzi6MDMQpfyizV5tn2KrHJWTbrafvQ5v46F4v5uN",
  "key6": "c2CfpnxjASdc5sbrDTHzvpGwnKRwgmcvHtbk3qrX3dNkUEcJwUDA2s27F5F6vB5W9nuSjtR6FLwEyNtSHkiWAXh",
  "key7": "42GGcLtbWwwqcBS3eG7kKT4YHCaJMvevDEi9UV6wX1NDc9baVu3FNeQVLaQMZuBDRStNM15aaRLU2YSevBrsU7fF",
  "key8": "24fk1yHDUKHCxzoa7AYF3r1UvHMxDr393SugzTLfJ1QHewi8pgrxtTHZQHWicBMgVLyKnnMeEXvtx6N8upyTmRJ7",
  "key9": "3ZPmhadoopD5DyUiYZbjzewT47HBhSP6qU8cDUWFrxT4cnm2EtWKaLLhNxYeuZ2dGmYAGPT2aLkYCuXhF7wrHhgZ",
  "key10": "24HXhj6AnuKoEasN8At8xoexRnMq3h9WADtLZhxJBdyeAgdP7ymWHJusM9nkQYxYj63ytgcH9uGYYGURWuwebEui",
  "key11": "51Bj18HfW1CX4DBJcpWocapCUdYQYUH97wKdpJrEQ8fC9fexswJb94h1oT7EWKKwyHufTvHn8DpUzo68fx5VRU7d",
  "key12": "nqvkmmkzpTyD4tnFJmbB8BSaP5BBjZgCwBaaw65HhDzLv9Ys4gX7CrstVHwbCvwUjvU1z34bCYDiNYzKNKtVWU1",
  "key13": "kjqWrZgpMFV863KtSk8oMLeQE43FbuKKdjHC71PCtqu6LEhiAkQjp7QjnP8ws6SHHPWSH5W9ZRtCmNR84ov2LkH",
  "key14": "4CwFpGm1ViR2JXuVyJgVwtS477JQBLacpDxPgCo7sJ5DPick6tPgNnKQAHHcG2rLNVDVSZ9dqQt7XSLfbA2o7d7S",
  "key15": "3GZT8VyZCMzmyoh6oYVjQgtWBDohWgGPrrqKoBAcec8jsTkbgSWxutoeNkLTq6ySYfykg6ibVZP27V4fTU1QZCWg",
  "key16": "Jfx9GtECxHjCX6kVEgr9s5qxZe7RjRAXNjhquRjDW9KS3L3p5iHtDKrRLbkqhM7wjBtC4WovXU4CSQQpmvBytNE",
  "key17": "2HFrtCqhnDkXfEkzbqByVo7M1kdnRsyFCe2E4CvMzqQTB7hWaohYom3hkRaJdfRNqHXg8YstrdoYNMYnpLcSAY3D",
  "key18": "4CRYzeDfRBGYTUGPfppKWyysQ5PkMoVVkt9CcxGNPj6ouLDTUsCgLHQoUdhYJ2yCoEAkRtJLqpaF93Sb37ewAd4B",
  "key19": "ubhScB63NNwPCJmsB57ao5VjY3PRrUiHPuPS6dJbdFPfznpiDvg8PG73sun2Qpb9TR4kMZiBHdjz5eqiTxbvXe9",
  "key20": "28SqNwjeSkgDw6x51DoqxdKqAyTZJQYqKraQ7qXbNTUygUNsMM455J78Vd8KbcBBSNhZBoj5QVyxoS4zuAVNcawo",
  "key21": "Rgk41JQGiUZ9rJwrYkr3vC9pzP9KTyRGs8edpGmaVWBoF1AimSMuRJ1so5LAYR9StLov9fxx9EvMJ3CQe4ojjRo",
  "key22": "4mBQCQC76u8gdTYyM8vPhzQ1fXKeipRNmtZnMvYkXeusHkpLvCs8SRH4sRewjJueNmHpwcmq7KzHXvsxaf7n2p5E",
  "key23": "AWDJBFwdcoqzWpZ4kfV6iBessuFx2rVoDjjzJfH5DwEqNhKsEQc2XcqMEmn4MQG6PW35bRorPg1tphk3Qyfuggv",
  "key24": "253tRPfDrTqZPER8jPU2RFdziNf4tA8JjiLsHmbQ8p6U6YwkoNeSLYRaTiyH7wqLd4VczySGvLYp2EBg8u2opz9U",
  "key25": "25KhV5YCJBG5kymZhu6Ek5kHvr2Hj3ydW7hDN1nUZHWrZEqNTwq8atAZG8PMqgTrM684NXUmaxevdFM86huRdpf8",
  "key26": "BUThMx3bbQfcfJuZcpRyhteqiAmoyVSmqVv2xJYqRQBRNBDAKiq3UkUXyGTwhzQZ1g3D5YKKFmjse3CJouBDJrr",
  "key27": "5YXwAFDvisWCfuK4fhzmVLZGDb3c7ywbu3RZxeF97rBNYKaYUKvDpMZrusQCXGYAZGWAFxFmUqSyXMBrgAAfxvuD",
  "key28": "LbCHA9SLNxdFfQUQ34Yn7ZhjjnZVtUFaWVWqf8JyjRFUKwEK2NvAeA9pPyuWkJC7drWRXqauZEofbndr7KkuNhm",
  "key29": "BRhZkDgCt34eWE5vsKUm2D1VUpaWncVgsYkjzQBG7JfjzyfEe26gnLHzVJRtWo1ANExYHpgidGSc8NXTUBMF7Sc",
  "key30": "58SdGDd6itKmY1sgiHdguUqDTZ56inafstmiWTuXrTeK4B2z2HKRXvafH3WxWZnUG654HbSagzTVCKQZAQx2q5Ej",
  "key31": "4cjWPgv7cgftWcbFvfyaLsLNsR6c3CKHcoAmo2oS9T1VUnxmxbF4w8A88yJ53q81t9S29srmphVChVKpF4FUimXY",
  "key32": "42sJahU1DDQuHAfZ8kVxrNkZ8oohp1PL538GxYZBs8Y98q8nyXin7ig3rNYGadeeJN3ADEZr3AhRhu3A1AVMP1rC",
  "key33": "A8N8ZVjAZwXMwZuWN5JcgNhASHWkVNNwVAzHhrdZcfwN5AowxRR47xQXLx7fp5g8cZHBNb2QqruPjzWwX2dmnDv",
  "key34": "ekZbnZ8iHSY2kCqWdjeUN6Yn1EoU28nZ5XiGJwJkreLfFzCx1XtNnAMUKAzVp5i54GKuN5K6QAFHdtaKLcjbR6G",
  "key35": "5p3HKMmpfWppJAFH3TtUZhwyNHyPcHqbXhbQHSuSCCTSXZq6j8ibiVVg9yhAa8CfegFK8ngxZt86q4cXwrMKJBRu",
  "key36": "3MBLmSdAzT1VBGyHr2yVGRdAN1wxWXaVBxTTzPNdBAWZXLS46fEeGbsVX3muH7rAfhvivjN9jxi3uSn6Za9bzni6",
  "key37": "2rPNtZM8kPCJDy6ZtgPhA8t7ZjhBXEwihvTrHRBX7roH1YiY2oRJ1dhohKJkZBHExU7rFkQn27vhA9QQCfBdWdwn",
  "key38": "fTVQQU1PGz7VRwxi6pT7xnELVhttdzAbskAjiHiuHD95YiiA5RMakpXjGnHPmXrkjAfN52upvBME2qeKZJUpNcr",
  "key39": "2zNZXc9R5qy3CrB5qAUefeyraNfQGY1amxvH1ikwVCQ5MyCtHxML7gmH8SmXzQ5oEb3ZPAJ9GNdiJCBw5gDN2pJR",
  "key40": "4PpSr4XHQYcqpxb7dLisQMrFfdVckXaeUY4pG9CdJx7gDGfq46ftWXWJw7d4GfxhCPKvVLtQf1wYLR6sk8fQh69g",
  "key41": "4MiSmQ2G4TM2azVf69pKtnwp9WZYHGBFckjCjJAaqqMT9yb3x5EcKCkaRBvgvk64ZjVjemj4XnycsCkiReXuC9Q4",
  "key42": "5PnJG3vEVtYTMbFYuEWEsPtpmGbErCQzFVXGFxdfkvRnmJs9wfeeekqNjFsCo61bC4629HGJWAi9n8TwMDYdsnK7",
  "key43": "38hGV5eiwDQruRa9DhY3XUbQF8kMXWaxMJwx3MQ3kkNq2UqyGno5nJSxatgdLYRyJijGWNmaAJmotGyhsibd4uqY",
  "key44": "46P64J9KcStKNEvrP6jouJQ2qnb3DgLUKcQCKxZH3284YXcjEjCa1CbCDv5acuKLUNuVMGzvVTpakFKnxDGua5A5",
  "key45": "NvCur3ZMQCZ8PoSbcEWVjPY4QyFL1GxXkHs1YZk82m6f9L32AtADDsSgbccYjMkqXaiiKBnVAYDWMgENnyhZ2XN",
  "key46": "3FtVPwgF1xskNydY2h7mtv2uxnKRb8kt7Wch4NvdCd3yKgqKCcsAzgXmRjsqUkJmsdsnLzMV7hieXQaUhQGKScwQ",
  "key47": "xvDsvAohnLNQ9BX4JwqsTtbZRAucsyqtkfekxb96XnJbmssi1uXrPHzsxprTLCtNFzDjGRMtoZaEQos491T33jy"
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
