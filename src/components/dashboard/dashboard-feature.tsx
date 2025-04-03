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
    "2qmv1mMGraHSnpzqUZ1vybkV1JuUaYWu9urjnY6um7FmsbZ9rbgG14aAJgGNC83Pmgs7mhs4oCd9asZZSTzXYJc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p2YtWQZbNfWCWWVF3tqN4zS2hYJCBEqht9UQQ4TcBwFuV17W9etHG6iScCy3P9vdrK11nmHvVw76Cxkh5MQWVJh",
  "key1": "5K4vEwPETMB6TiwB1vacVxEJFdHAtwLyVQw5cyfwtTcPWGrNGwNcwihg9a3d2kEfXW795i52KNuLtptCpBf9r4vb",
  "key2": "SRyWr6SuxZ7fDwLugLko768ywUbxuGycVRkXfgi3njSdnkdpvVHmqnbHDzN3t3qRnQ9DEJXhHq4zDQChff5Bygv",
  "key3": "zmNS92K4fPweVVizPKowMi7rP591orHTya7YanxdbfXXiVXmvPazFZxyHxLAfnRi9cPYC3B79qYFtFACFxzgFVq",
  "key4": "PVdaJBSBP3bNhETBsT2sTptK8g9xdcWyZ7g3PT9AinEePSyH284NWWX2SUAZFhRdK4zgMTon5wppvwk9LY3HbxQ",
  "key5": "5tUc5JAcY7PjGZiMMbPwFf9Xpm5Wz6kFHUz98WhzPxAayAYGrqAQBYV4ZrfuuKy164AkNeFQVd7h3eESd8WrXRFM",
  "key6": "4PQzbnDNzmX5BT5wvSbbN4DgRNEPG2vfG8bW2pttojWvxnBJobkGtVY5qFXUQGDoK5f2FTkt5ZrjHPQVfsyoqh1n",
  "key7": "2QLJPyUrpTuWFEefrBy5X2T2egM7DNYS4F5r2c9VG46a8EhghA8bTcpBanxuVMufb1FmwYiAQ1DcGM4hyiNndtwd",
  "key8": "2qodvdHJnAbcDfRyDEmHNXUVnhnCiNRK3AV2z1zc8h7KPCqcwgSS8HGk97ckyjGQ4s9ubNz8jTFVes3So5QePPjU",
  "key9": "27AU65zkPdgcFFSrLRoBDcWuPpt9mXGWMAUCpCFmjEtJhHVfnpgvM7SVQzcb5zxhG92jMdzdq5EoPw9ekPDP5xx1",
  "key10": "2ijgvSdKjujtb9qnFB6wNT3u7aLhivmTZ7HXNeApf1wUH1nLv68bHBkeK57nRpXHTo19z6t9fRgoabTLF8xmM3XV",
  "key11": "4f4aBb5zyMLkttqLMrqCUedE9DjQWtjZPnyB7yqpL5voVgLj3TFQLoKvf1aMX11sWAZxSavDhGt6wKETrXz5yCmg",
  "key12": "2eQ3u4tHMeM5jyEWVY5LRfguG5PJXeHyGr2dsAu56Rs2bGXYrcELVJD3bBFDzEdgrvSqzjgqEjPbGjj56wvBw2ve",
  "key13": "4UCcau1KKgVSTED6jXE3BhfNE5wkLFGvmDjbJnKUtx8sPo4NbntnvWnHTKfLTBqSavrP7UZxPBhdCsZoUi6G1vuQ",
  "key14": "41NF71CPBPTNdteBwVAgj4cyGkuu96UEKSuzUmcfuZ1JguqjSDLTNRVzGhby5sBp9bsKVAvzyNTRUWatnF7oqQsJ",
  "key15": "2uKbSfB9Ady1yTatMYFjcTELbo2dXBwg62SmYyw1b5ZFxUD8CBkxgSpCndxBDnsiByuMqoEUMymu2E6q6XZbynQu",
  "key16": "32cJEkLmvuy7xZBifRE1haVbVGUGoW8LcFBrG6Kwi7Bqub7Q3Ask8WpiZbZFt8mKSVqAmeiLnZTp6YDhEfCv16Cs",
  "key17": "559RNsmL3RbRvn6TRtfz68MTQ739d4u9VXYEsk1Xp5Duczm4qcZYuhd1sq216XbPc6BnZsav1AvU8i5a8CkFVDyz",
  "key18": "2xUCFxyz5TmDeptw3a5uiBKXTrY1BP1xmyw3z2V9EajcknQWd5WDnjPf6bEFAsTpdeEh9NWNZ4rLwidi7X5jCrjf",
  "key19": "5mQ8amJUBgBMt33aNGV2RZAVWJq3jx6s8dQV2yM4UMii94ceJnRbtZZztZ66eA98R5AZi5qG2vjw5hK6dm9sSBpa",
  "key20": "4EvRTWzNzqAzsYM5nbWJtMuhKWaEurx1f1b8ddGsmyarRxLLrsikgiosD936yoCrgq1tFoxfWe5P7gwCoUJzPndN",
  "key21": "25AvkM1x2dN6VwcWYrpPAzdwRTAfirVLEGKjnFkzrr7ndnCtP5XUDbKSmR8THY1syj6TFjpcoHqKGpUcPcdfFgFb",
  "key22": "4EeEFy25eFEuBfSnpTaJTXaiRs4T4yEa6patAshNjXpV6dMAPCaohjCk8JZrotT9AVxaYmj923vvdSCNPzvGNFwF",
  "key23": "4Anvp1b2vTdiw6ngmX2AbPJE42X3Ym87kiHu5eFrgpBz7ALZWQZFzzTL8QREKLYUwQgPctRCQFwcWauxMokiUrLB",
  "key24": "2yXKBgA9WbCNY8bJJ6J3vYtfkEExaQKkKxm9n8pHbEGGtkHuqikjU4uaisjW8UkXsXaYDWUERfy67RA7FQJb3PPm",
  "key25": "3fCFrDgt1vC4vepySchXtXxFwYobsk7hK5w7rffbAMpKaLWmvJy23z2auyvJgeo4W8ymZmJpvMW6hwGPJJugM99n",
  "key26": "4SF5cNFwCjBZrgLjT71VdQ9XRdyjx1hFvit8EgmbzygdGfEdQvhh1xECRQVA1VGGmH9S8N5wzJwRSQTuxAedZbtM",
  "key27": "4aw5LwK2AbZmeTfTcWzCFULdtHnx3T3YoW8TASGFFhAbFKcTPFzBL1SwTagamcnucYD69VhWqcGr6s4xqPkcbvXT",
  "key28": "3vDBR18cYqtzR3tCTeciKxAGtXnAsGjezXYZiZZoVuSsdhVXNegssJLPvuhh1yS1ax5ZpvTUEFszysUX6NKqPFZ7",
  "key29": "hzf6VZgVEzQjMp3TN1TjWxvM6Su6UHGVUivAdQv3jBr7JxtzggJ61cpE1a3C4k5zgWTgoG2KR28otZb3xy5dMaB",
  "key30": "PtJjZbJzNLgDPkJCXJ1zyUMBTSb85jmMsfKZa3f5CG5z6KAMM6fxHfn2Ys1QHuNPdfCfjkn3b1YhA5TfxXwzFcY",
  "key31": "DWffjYHFXYsD1p8UZ39Mdij5ijFv9T3K8wCs4asqsgvJEnHNdgAersUxXL4PWYycvjc5nYwzCgBpCqej29zqSAs",
  "key32": "3wkGQwNAEaXghmWPRCcfpwWiXsBdMTQ63ziu8JvdjvaThHC2UEYsG3V3hh6LYsH52XsduAjF4aX5p54hHvjrjWrW",
  "key33": "4cHdxzQAAJZp7kwxsLbzT5R91LpmXaHhJADZs3o2dg5eHBswGaCaAqg4KU2g142RBXBJzpFcebPMfMyy9yeE1kxx",
  "key34": "4yycjJ1KNaZvqwrha1Hs7Z36CtJ7TpD8Mnd4nvhmHYwPQkruiap8rW799MXgmg5TKBLxUAEbgAkQt9jWTdrfNCs6",
  "key35": "5Jqa9c1CfC2kzwEQ5o2zT91kW4VwLN1Ziw2fm6XdqdZPaLaezGWBYub4Q3zeSQvRiKSfMGhsknmYi8ZmhgEFZDg8",
  "key36": "3bm2EgJPvQ7Q4MTDjz7c54J47ueAXg5fUSsLvVm5fNxKkWWz4EBsW8N1s9WVakN5Q5pHk38HDGgb82c3DU6N8RKj",
  "key37": "5E53FvYcVxjm3rNkRqKP4gE3R2SSJkt1n4Bd4ZewXj7hpFq3T1Ecf1Jw4yQ51v5ayM9cs27GBnX1gmTVEnBjnE3H"
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
