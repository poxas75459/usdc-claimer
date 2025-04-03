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
    "7v2uEtNqSxsYkyhR2LWm6xJdwfy3VwrBG1GtfuJWKjq3HdNzAaNFsJLgpS4XYzZqgLQUjwsBA6BCHafPXv1dRU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55tG93Ya6nMnbWAP3y6EUScR2aq7vFdJtEs5H8aZ8gPhRZiewjysiKfSaC2Qr2TeiYbsS4VBMPHSkSPqXVAMwSWL",
  "key1": "Rms2nBpuupAVWUr9mmLKDacKr2uiMg5xLMYpyEjUwRsympNazASkYeaqGmmrnJVgLWxrmKgoWmttEXVMMLrm2BP",
  "key2": "4j4mbi7cAsKPRfQRCU6XteUvPFrKFTTp8wsBCrLAQVUdS7C96zfgtBkiQfU6gDorVYyyYDhMAJGzkvoXtAt1KtNw",
  "key3": "2wwXic4nYJDmvXXGMZf1FiiWDHuskLmKwN6LmhH14yiZ4y8JsKUA6cpcha6nwSr7MbpwU6twfEED8JdWeCNJ3y1s",
  "key4": "44rVuX2j2EBnyUzUuSDzgWxFzVmSS8wdwU2YM7ctms3bGFrSbxw5Wntkfi2itRxKS7HDKYS1nUCwmy5rpL3CNg7s",
  "key5": "zBmuNd27G1KyTg8ZaPDJuNrSqTYkWKidaPuNXQTE8dkgb5Lub3ES3Lua9ksxpDd5G21j2BVhCbubkLUMz3XJDQ4",
  "key6": "65aAEYKRV1fhZfSH39eeUV5jUE8a2N29EjpPSfXFUji5LVkrEA5Tt6b8YihYGYeKNuYjoH9wtD7y6XfKwCmpRk6M",
  "key7": "3JLWxYSZ5TuCrrvr9LveMkQKPBCh6fRb8UEaZpmt3ovQhuNeE6vRGdnr5W72ykrK7RfX9RQY92ZbeLGwsfW5ZRvG",
  "key8": "Mie3EYcQKqwA5RJNkdD5fe2f9VxFEiJSTEyMvLu7LLjN7VkCuxwG33xE5XRR17Q1KZM1B3B2ZyzKk2anBMAKcp4",
  "key9": "2XE26JEDYjLndm4oGh5XX82DFe26UQaYyvwqffg3wG1tMTMf8Qh6NNPFQQ54KWncGEyg9pkQBEeuZLnTL8GBKm5g",
  "key10": "2bfr5DjHXNDqxixobopk1RhjgJggyQeti9qbdoevLiyYkRimTbv8poZw58DFDKsQSTp8QwLXYJDSvd7YdwXAAUXq",
  "key11": "4C7vUGngw9sRmZnMnvHJdfiZ3Gf3Rg2C9YpcWJtKMWBZMRqNYPE3uKou2VtggHcPY4Nk98gRuuWCS5pw9hJEjJ9M",
  "key12": "5xi6nRku87YZV8QSpyBbTwCmuGbo3PkTDfyp546s2mepTQ4CQgm82sdEML4g3CerRUjyYUUx3xrT9Ak2fPWPVoq",
  "key13": "oL9B4pr2F7dXwVcgBe7J8irMys4rXoTxJ5ivbPo5FNPGtdsuYAg9o8kQYe18afsz1abxT4Ha13LCdBcFknarf7L",
  "key14": "3aQNxpQDEJhwndPgv3cSKwCzprhorgnYZ9YyRpVBmyVQux7GXTnPq9qY89Ei2zUCJLB7Uanu7SoV35M8PU9viYnf",
  "key15": "3wmBYyh7vwE7Xa77R7ckKKGYK5VwFFNDkX8XecubuynE5n9qj7zCztCUGbZYBLg9zPTynzf2XFKzYc6J4ukgsknY",
  "key16": "3tMVYWVyyPo9x2rAesismQhnWn41McaZZqvtiiGwWKpvrN29KAkouSg5sj2GAmrQ5fjCkahmcMjfp9AuGNu2ugvq",
  "key17": "4oitAwfzWPqXdndguLrTfDhT6nRzuJpqjHwsTj8LtxHneEVTXwSNWPZj1H94iK3ywMutHKbSdwW9PgL8ucsEco2h",
  "key18": "3JiX1wtZfzXKCQSDwi5es22mqmXSdJvRN6HGfJDFtSMxkACPT4XTfF1vrFK81yjE3Ep6yB8FM5BS2WUjQceP4qNZ",
  "key19": "5vxYpNEJCF6V4iBCFukpTcEYPe2xb6Jjar7tMkwj5B2cqsftoNj3qDQsdP3dd5BDHKP6a9T2VNw2Tq595xqQq3y3",
  "key20": "3ypkbHPNU8Jh56fRFvG1Lm1VYEeUS8qR5WybcXDaGm2MVXQkJMhqCzy22ymFsmRawEFyzB9xAu6THWK8ypsJTmFb",
  "key21": "3MQEzgFYYunvaGcg6Jiqq8uyU8crYPswZreX3fRW576xnf2xw4xcGhPr4i9mBXT1cME4DEJVHNuG6qsofmD1BuKF",
  "key22": "3jnhkUand5TQnc8oB9yWZ6ebANCZNC1TCT8S6ffiXz37kGGod1s8UQgiHcP66a3U3wHFXhH9vaHzVfKb4e4R9Lkw",
  "key23": "3XZKDYoo5kyaQrWTjjEqG77ZPywM2PEZhZ3YtcbZHsQJaczxtJVQ5t1GEVQq11jmswpSMUBrAhrieX4RkV3Ky1hA",
  "key24": "3pDFxwvCEaQcBTrf8vn7BekFAqEYuGPfc48AABgLKbsDUsZQRnzBRcBT3CKE5AoAtgtJAjskhLRAJrpgnisJhdxF",
  "key25": "2Ds5mZmXUSBbwuDhPyKN2mvmSchVcyuMBjAc8u3PMPFWKu2WD9XfrYwPyjXAqfFZmfhk2HkB4hcPY3iNhXuQcRcR",
  "key26": "qMRD5v9EVt1zkp2FEnn1VSKtiq6KHSin6sjYQ5oRUqWpDxTXdbiUjTk1acyMtQMDFZs6MLGiHvt5wkdbQt7bqJY",
  "key27": "35WFfMhtGouHorPGmMGbXCSEx5iYpyd8C4zNo1XGujap3ti7fJw7TVAHJLCUDq1qQ2mKRy2TGHvwiFGMaNjfHYwn",
  "key28": "2ss7JrH7vEZXTPLAD8Quu1HsXucwEos4bo6zV6DV26LZ946ppScN8ucG1ucpr8ucMDiFGCQwTf5QgNHn7JmyL9J3",
  "key29": "7T8HHf86hd9GsKsEjH4RMqExD5WZHtQ33gcTPMEpnQ2HvFczXdSv8Rx1n9ukN9mMQnMydtJ49YZCfbzQawS6GGP",
  "key30": "2pNB7geFGZVyVttE6VnryvnWvGJaFAetYn5i8axXKRtEpUkHCTLWBt9k9wNiUa54orx6fn7vw1eZEPFzRyUkqWLv",
  "key31": "5svGv4P9m1uRTKR8tfwKTEQGCVujkWZFRRo8HnsvuE7DZVhyJwr4qQabEf2VVUNqKTsexCsn2JGrNsz8Ce5GFB6n",
  "key32": "2mEt2aNAAKLoBqytRmSoWKFY8VXvZ9aAsypxQ3798HS7znwuGpDynwya1GoiuwrFwUrgSpnzJLLKs3GNqAskiGL7",
  "key33": "2uyHGBM2ofihAYLQvFDWHBT3tEFg1VHYt1BfUKfL7WHe2WECcpJVQME2cWKrcRLLR4qWFrAXANfo7bFXufzJNqVD",
  "key34": "4tKasAWfNPePi6BcxUNVfV1JUxCFfdRog6X4mPbAaRxwDYaiJGR9bDsQDrmFPgQDmdxqKoaczTytPPv5GezVWRXV",
  "key35": "3qQBViutkNohHBuURT4dtWCgDhLGwCWzcYwK26mV3WBdsM6cQnYULuVocnni1nDDH2ZUbH31oMJA8mfsznhHnPJn",
  "key36": "Ds42xt5NnY45td4GHGz4XM7ucEQrijQxUhJNsYg7KXtzU2T7AvHdsS5Najsy3p1cyDTeZ2QcJQ6Zygz8LyUTeoD",
  "key37": "7WAQfJJnz48akDkexb7HnVrHkaUGc2k6gfajAHv5L3YkbiyXC2rrQc1MpkNAr1q8dcaqB5F9roPf4B9M6spUKf7",
  "key38": "42mnB5tWhFjU85ycpDnyKHkK3Y4mRk6psEz4ohVrreVSxdCQnk787DhTsYf24YZS4597KtJj8dxbiQTejjeeGPaG",
  "key39": "5bpYtTFYC535vWczsS6H3vN8hGhBC6t7e4B2N1zZ6WE93m4xY96vn7HLHCbyx8FNDq1ZzKqDLV7eum4VufpJB5Ud",
  "key40": "4eXVhG9ka2CCWr2gd2T9nUTWNhd5VVV6bEk8Bf68GnqukCcnUQuwEzJUCsqT99TVUKN3Ck5L7wqZQoZZ68fhvXpe",
  "key41": "4orY8mYE41UhxDG4ZB8yz7DYHJRPvUxaQ5R7PVMYQWs1hcHsv3qmMGX4vgNSUVGMJD2kjqrsW4HddSp4jQWaj82r",
  "key42": "1RkrFuB2R71nNNfPBAMMPVSCZ2QYERX22YZHngt8xfRBUoQVg7QnMBB8RB9itSt3j1sUqsCiqbrGa3mb2znKpyY"
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
