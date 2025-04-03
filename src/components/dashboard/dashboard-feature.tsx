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
    "5LY4kF6spQr3X4Ws4fDLrSSX1JdsZfxfYQ25nGkw8X3UxBJ2DZU8z3M6uS2MMtgFSQiKCqHsu6NTLu55EXMGyrRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ziEUdBCh2bEaeX4enbeTvKq7qzfvxo47TrjgATUfiqHxsKsc1bP1k3GXeMCTDj86if6KE2X56Y2gTb3gNTSKujJ",
  "key1": "3hGpPC6ApPStQKoinVfwfKMKkhoHJNvwLtCPgLBda558aJbGFMhN6aM2xYAMYbnX6VffDGT8N5Fpn623nhtxTnF5",
  "key2": "atYpuSFkfxKRdzavfeZ3TDoaPw4fCV1dkGYurhJPRj2mn7sbcWKGAZx14Kcj4PqCG2jgWbzrVgnk2SRcmfJudYB",
  "key3": "48y2YkKGUWicmuZLNsHc7QcqYXGnQ4r2ATbrsvcV58f4j9GtSdSgrsyA7CboR155Kw96kqv1zYatdiHueaTG7HAo",
  "key4": "xGqZNDy55jw4MQ6hn9H825u6QQNkMe94EYDtrAJ4QVocbhJASF818fu5CNKo7HPKpaSzhKtaogAbKnYFiQsYAT3",
  "key5": "4gU475gT4SLhj1pph8QDbwk9j8jfmSsikRKPqC1igzqEoaBWv4SaGeCeqMKWFT4WAYDahEU7bMp6D3VzZ6AYQ5Vk",
  "key6": "ZQaYCsiJ6QiM9AM1rk82GCX5PsxMWUsz6F2ouCrhAgR4BY3e5vnHekGj3pHjwpH2Gw49mZawHszVgkQS7bCFoWQ",
  "key7": "3j77fPrnrPLTdGwdSNPRruM3WbMn1wxCZKfC6Wt41EUHgj1v2x25Z5TxoZB3RZWMQ2VkgTAHxRRmRmu2Ri7bccxK",
  "key8": "636PvCjGXwHPuV2vr8sXZPejf1EjqU6jyBASH32tna2g2m37Xs6CnAHwp4Yu7y4ts2HywZKFoFPXUf1Un1woQGRN",
  "key9": "3cfgTmwwkajfXZjxer5Vv3n1AGMGku2iBPtf7QQQcozJeLei7bd6H7Yn9KNNUT1YF6BAYsoFeq3obZtnT6msgCfj",
  "key10": "kbXxPDL5wAKSFoCJQRhaQ4XuRWU4PiXPvfHP1i6385sSMFQZjQhfhYZJJQuFEuM4DUzZF9WRaVzGv1VnUQYFjoc",
  "key11": "XrFVA2ognaYmSES8Nq6MuicSNnDZPhmWviwvotCycbXLENXNGfiZFxH1bWRahoUxShScJG41k643bnxx2C2NKbU",
  "key12": "2F5TZUiUrHFVPBp8aGuCwXU3fPK2NjJScZk53KNfYQ64PSzPhkwHrGFQc6PjD47LwZMckKM2gmgEZgD2AVFx8QKQ",
  "key13": "3wV1qYWzXqGqRKLegLLTdQdwqmYGnBNxwPBnQTXSVEcLiaFCdRcjSJfb96ipfKRbnPNRQNnChBxeRWHCCk7LK2e",
  "key14": "Epuzc1TLnSjJQ3Y5wm4xGGc6PYwb14zzi6aCtwY75Gqy8DGJjUJZJZraozQBmgsZdJMebjv92M4ibaaZi1Q7vuM",
  "key15": "2ygihCjvyiMSrvWkQ8r7t4LCbWeNMLLs582RwJN6syu8CW7v2unxPDhwtCx33MTyjJbHChYHUxBVTmj89HPBCf6A",
  "key16": "4gh3u4Hdi7d6wSehrNa5KPJXnxBm3AYbvbvkYBxU91VueeDsQcBfqsEuygBuGKJsBUDwibzpE9jen7GoPzV8Ts2R",
  "key17": "5n5spnGrngP6XbHEWTxpN71tArcrDGwnXYHLUFXTibMguWsSoY9U3kfpAio7WAiRSPMM8ScqNrVaKfaxFpYWurxT",
  "key18": "3WLHFXSrips2R6dfgZWWKSoQT4eoC2ghth74gmPPvaaqt4VAWgUN7XqGf2XvLtkJAWeW89ra5M8C54DLy8AW2fZR",
  "key19": "2imgFkKvpNN1xRzFJaNSpSgHwVkeB3mM7uaBKAqS4yUdu6NvaTqQqi4Fo8Vdk8eofDqPSi9TamczMwj4t5VCAPqU",
  "key20": "2Ygnq4kWUCySMBNZcvDcBx9uNQ6LKEUtwzb3SKdfN3mcr6pYu5h4T7w8o3ZnkNVhW8ZsPcEfCUv1QMftMony5hAJ",
  "key21": "wJkP4xwSxrZQ9HtDoNp4GjCmbJkAoVLsvHLpgqurhPwPiA62z3BhwjmKPegRG1oom9LDMKE2WGAsoSg7rZeBg8i",
  "key22": "5ZY8a4NHBbytjFnTJ1buYWSopS8Q9dfitwdpn2VFhA9ZB3pK9U4dKRhLTsgLBjNLmumSipdkCgKGt8cubcjBybwu",
  "key23": "Em4mSHkRABdF6HrcCridoGSR6smsmtEKT7YuBsbiWPpkeVpUp4y7vrW1vnZfnRqQiM2n4DsevThAFZQuFpNpiYu",
  "key24": "52jRKDMCwAE8bo5aFPhMC9hJpsFdUcvZAW9PHASHt6TZFMdcaeRqutvwRzANCmsjDevi5kb187WA96GLSe4VoPA1",
  "key25": "2oQAHYsRh72GNiAFanSw6YxmUnnL1VSCyq5G79xbT6756nczwGqQN5EFp7Tby2G2tfao6cpRDLJy4DqQY5ScZrWR",
  "key26": "2BLypugewnnSCt4NATTWbCRHMPv5SzyCicMsvw1eUYnY4SdyqZ1eP4NQgMn5bsdkijwqSWBSCXugyYhqCRVMQ8BJ",
  "key27": "5yaTaAjZreKbNKSi9qFHoiLAPwiTBd3E6MgtyK6PJNid85ZzYPa5QFhQda958QisvFYMNUzS8i3CEyZTWr5TDier",
  "key28": "5zc7ea3bTw4eVo2dTzUQmx7ACo5S354QQCSjCgnGbJFsbMaAaQ1LVhya4zX2oQ2JJq4SheY2Fzy6ChV9KjDFoDVn",
  "key29": "4Ku24bQQ1mWKzmPEM1jBt5X9q3exoBwEwTfMJzgmD6MQ2EdDQng4r5kTotdDXJgYwArHtsnMBiw3uiU49MAASW2L",
  "key30": "62b5ZrrYHCuxF3yKi7NMP1Thrnv8CqQ3CFex1EBnxwC1LMHhJ7aRENA1joPKdEeomHQzt5g5P47tQSt4PoGp55v5",
  "key31": "2M1v7ie2nL78CMmBagmKtC9WBrMGUhdjn4GQnHj6XZhUPnkV6BprkHPqBAUENWU2AR1rrSySqExyU2MDaV3JzCbN",
  "key32": "57SU2xV1TKJXyKy8zjS8PjFTViAfkTaxthN6LRMathQ3LWVMbBcyZwN4MVHBZMS7BbEGSSyEK73mjofiCYvSwCiu",
  "key33": "2aYA6AGTbmbmwMt17H8YWMka6bAJxTPH5Q9fAWV7XpehRvFU15nuhRF2Wx4pBtoLgm947HTHxiJCpRYXmMo1cNQw",
  "key34": "2MYd2oD3sVRe47iqKt2yCkECKnJBv1kA6K8djkZQFfKMpJCPYoBBQZXdZSfepZ5tSPizTfZHsA1hc4ph7ghTaiUD",
  "key35": "5cVwFxiv8opBSRH83uADG2KjYXoHx83n1MSDW2cXmSgBaEmEzV7pjqdx3CMCnus8MG4kWp7Ker2WSWPm3B1ZH8Rb",
  "key36": "3k8EoXGA1uYaK8UyckWPDpbEwU8CKHVAeLh5Ekvt6GPNDhq4mRxay99g3u7o4kyF2vUUhqv7LfgcmWBgj8iBSpwF",
  "key37": "2o45MDpjqMcodmukH4jRWTQkZyuXriDUSyiovi4kLi6auaicPqpe1zaSXW9rsFL6t3rpXSZ7h3EEXD9dcS4MNDQV",
  "key38": "5j7FdYqStuJvhPkiGatXasLTGR9Evrb3QZPwhdAHPZ28YRmd8gPvKG67Yw3KTx5rS6wmu3jyp4Y8LNqTJMM6FFbA",
  "key39": "6zVtQtF8MogKnSByfo7Jsc2h9y6zi4qLWVaVGrZbxuk3MxMn3PT4fJfa9SEmQzQLmu81B33s31V3ZgLVHcmBP9X",
  "key40": "3kMXRTgt6nPd4vs7BCV8rPCgv56s8xnHdzxXLdyDvmHFh1upYyUU4cRu58fNoxQbBuH4z3ujahpbtw5AbHtwuSwc",
  "key41": "4UUvS28bFryxDe2BiAc1rkBY2hf4XX8eSVR1o1YYmvrgVQjcPuLWPQWqK4sURRCjM1bxiC5R4kp3QwpnCGpyMEqE",
  "key42": "9sZd2d5gUKkdTiTRMBdvGqN6b9RbGjxMYWR4q3MirFQTreNGoXtn5NYZFRRD5cMJyRCdt1MoxMhMiyzwyqis78Q",
  "key43": "FVSKgYP3Vc93U3TpfMyuSpRoPGQdJ8aoMFSkS81HuTP5Vmp6psSp4u1mqxc1mnHRH9U6TdSHZzYa4nhxprj3fUo",
  "key44": "W4tu3qDETxSmkTLTj6C2jC5BToXJp8fhSjJgduntHbfaW5WhU8N1H5ShHTkNTNYdMDCfFqjBAedi53q4MR1xdLq",
  "key45": "5NMb46YBLP6HB8iVD1wYMdQ81t84334hRepFj41z4mA4MdPeoztkYYYGc4Ej3hWngQfqWJkNZgtCimH38eGsoUmq",
  "key46": "67EW5ga4GvptwcnCfQftNneKpBnwGaJN8RNMmRqCWHLhDHa7MW1iuaQADG5xLjVT5dBC1cM3r5sPCscijkfZHJzB",
  "key47": "3uhUJ8SCmVvFgvUWfKomTKHLk3U4Ew6prw3RYsvVggtBCRZYuVmwn8J9kdLDng6a7pMXqA2qfW3xhDwdnANrkxQd",
  "key48": "3mSw6bmZZpBwMoX9bjsaouWbphUahskazq55Dv7sD67ahYXatKbAsoKZCYRRznrgJBTrpL92hDQ7MAQ6kJmnEQBz"
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
