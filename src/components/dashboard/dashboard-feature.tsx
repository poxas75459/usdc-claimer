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
    "4XTJuyQByicxk8z6QQfpduNseYAkxsrUAbws7xG53eLQKzNLs7cySgX8vRL6CosTpjrcbvv1qCmCJ7j1X5xW1DT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FE5JgVhUD1ML16pHjpACEmbZjbCGMQaJmbAQjA9ReYyd8eRcwpRDj2nypgX35qz2iZoQtWMSnDXzobRncVf23Nh",
  "key1": "498SmhjKEhrJpKMhUcEx1cvtE3tgdhvd5UfeyZEQonuJAfmBZdC68NR8iCq5wJwhJibh3smSXybKDA22z5rxLsAd",
  "key2": "xVjTLyXbXehs8ndhbwcP9PGGVSpaN2da4g4va1NX6qAiTLnEfba1274wcGMuWWkhQPUJYqZcjnEJCESswQz5sZb",
  "key3": "3oLmzKHmzy3yjXmqbiRfKgbg7pSoaFuZVN8QcfCP8Hbcvk17aJkWHiy8AZPhPxnK4TE2XzwV5kT86szMw9PLLv7r",
  "key4": "XDhuZqH9bidS612TFNczxX2MkFcMVWn19ir2Y72HHyG4sVcpp2fGnQsiP2et3SeEZVXhzWdiFTrhA9xeNCenie9",
  "key5": "5Pxt1ZupeJAarFHWDcei1axR6Sg2KS3CgoRznpPfzUk5seGFuUz9aPcXYco25LVzaaqyBmVMZ9nwZaSvLR8UuW9K",
  "key6": "357YKRp4ytoZZXKubEGFRVZSJUy7rojsPhiCJy7WWkLRsQksY9tb15oALtxka1vgR6RCXGDUZotGnTPuuaD5gwCD",
  "key7": "5UEC38ziMppCCEggH2uH9Pd5ZizxCHiJyroUdqvb86K81gukHb7wG6GcALr5Q5BwQseqUcUZREx3iTNNEGkvpncc",
  "key8": "21zqr8NwDevxW7DdUuPrGb3g8saXRk6sjz6qzQjda2VoFieqPzjUC26jWW76y6ADjm5GCh2yiGpcit3tJwTbKWki",
  "key9": "3PZf7XcHtUDS4cCtgzZ21oFJ9fqm9KLFXZEsmv4zeX2CtFtDZZq9q3uirFnWwtDP6LThfDjBrfQcTeCwd73WF1Yy",
  "key10": "Tjx9hkBc5UFPpuZFssXZCPUNjb9ryNqQB9i5ftGdhpKCmP72FYpsk9Eom4QGRNgdMdKDMRwRUjTvqViTEXVNiHp",
  "key11": "reN597vXRYcaK9fDPf5Y8Ha3QpLL9ZUXTipVWTcsQQFch6YmxNBgRdLKgTp7WPs9rnhM8gWTFhVsLbV6UWG6tEF",
  "key12": "3CikQDgxeVoAR1jcAKJvJuEZsDbp21q4CFuYzzuiEXWsKCNpTj1S9gkMbt7v7ymc3QGD28zyRA33o2viqRtqh1r",
  "key13": "XB8ckzBj3VHd3abmJn6a9ABfHSXaafC229BzmExsKHjQw8SZH9phwkJ9jtcWS4ZK3LMATEnZsLjvEjvcWuuAkEp",
  "key14": "3R699b8iR7RU15Tqq2M2LfX18n4x8eSwDVXNssd7JxpamYLYLCMkq8ixtBYqQVKxdZ8RmgnqgScQwk331CtZVNdc",
  "key15": "5CKK2AKRzUprgEyVYGNVtbGYMnnubcmjzmDNt5JrtkdDEK2su9SYeUUJvbJmoefcENHnmn1Aoz6cQXsY13mhSxDu",
  "key16": "3zyFN6mxTHwAm7xsDDVuMdyX7Yyb8VN8g6PDvip1DDd8ZiD4Ta8KQndXvzKG8mycgoQ9mC9uFom7HgJo15BTsxWu",
  "key17": "46NoEqsDeAmyLmrLt6DBuWwutEXP8otNKonTdWYBtBUhfPzSta9W6L93NcFramBLUsAFtjkEf1tXWw6X7MnEVfup",
  "key18": "4i1urE5PokcBGdHkrGj5wRZGpigXgAeZVqe3irW1JAQ4jSiRyq1Cv5JsZzxopHQwSJfos7UfNLB3n68e7GxPUgiD",
  "key19": "4BAgAG9NiERjbuT7eCGSCADDWpuXxefAfEejr36LXSPRSk1LHTRgfzX9iNuNMfASbbQ1vSY7cJviAUXUsVu9JivM",
  "key20": "2d2bopdcMqfncQcxhW2hZhG5NZs5icFGkxWvtQ9abdJYv9VN6w9Gcij6b2isnDsriqSdx7XCbiSrQSrgwSqFb4ef",
  "key21": "4k73ggNwtQoqMMdTSbwE6zG2kmiEKbmE8awVK2Kj5ASCEKAq7bPD4Wkffb6jtbQEA1fJosfM9nHrLMQDSEpxYCt1",
  "key22": "nBYCg3HWEE1PANcFegjvhESaUoyheJuNrDaxS56rUkxS9SFSZRpjCUsMJ6v4QYJdFWJE36aS9LegYG6kanwYDmU",
  "key23": "5QVsvNEpMZ6PkCk7FfCN3hurFEF5TYKLTsUAggyUWwxoB47nYLYCjxNrpui4dcQZ3Q4ZC6h5Su7ExJTyC8mWhjwv",
  "key24": "5f6a3BLQybL499sJtXQ16TNMsxDxAd81HYGnJBmVszWM8VyBAGuPG9FCVJ33obwpLtebaYfqKNajTBKcQxDC4NXS",
  "key25": "5dWVqf2mq8EVuzrZQpXFdrdESDuC3WAPHjzSfGyVkNtWZzVE5E9MLcnRi5Dyncw3t4y72SPj92DkJnM3UPDVQcbi",
  "key26": "52eqC6H5yZXryJuSTPiEzqbRuTfBTCdxDCYb6WFE7xNmwHUjHsQHmRf9vPwCU2agbws5gR7753PAebMLEL12vC32",
  "key27": "2evR2YPPXMZ43CxgdeKukhwSiuKb5wh6ZZ2nusZRwvb4ixxsAyxW3iUBtQnbKs13ThngcUs1uCogXE5sj5XkXQBV",
  "key28": "KkvkUoLUK4HsYmFowogq9e9GqkyoLYKSeGWfj78zY8NJCVatW1KSce3GnkRDUVpV8gpYxUGKjDwtwfZioCjS3uq",
  "key29": "3gtCdNv3yuVVDJwpGN2Zs6zgYKTLaCanLuprg9qEvtE2FVx1VPiXenPAukn341jNbhiECjCQQetoWQyjcZSzNbYB",
  "key30": "vXKT1opHDJ31nfRmmZwJTQ53SAsUCqXR8A1xc7oWRN1TN9WFhVt4YUUcRgaofqFCb5Lj9oBzUEzUiyV8D3FEY5L",
  "key31": "3d42uJzr6hxn7fKNSxWh9BEGMWS2p9QP49cEjr5qmam5Aacc6keqEgjgtdsV2gDW5496Nf9p9etPFBTEFLyn9PWJ",
  "key32": "35KgXZQ5m6cHBK66sBi4V3c68cstUdE6zPNrJABN2ymakWzZBSG4TY4kkZsSk2bZHKdPy1pRYSou929GVewRPEgW",
  "key33": "2us8ESC7izuroyGM3tDpabuzH4hwnJQMAJqXWajZu9qMjvKRZP7xWXhtu3HEG1iTpDqF8RubJyYEwPrKSHjV7Esz",
  "key34": "LCz4cfnbrRDL3s3U5ZUf1ZnfCSdPFZdqU7X7xGFBNdEZsfyuC9xnUrQaAHVvoh8f6RX2TVaFNCdPZe5EMCCApbf",
  "key35": "3McneHrHwKjUUmeKRnpTSGQ7eyHLbx96skYG2drGwREjxk8K3t7FVjEeqtCqANKsrXMEekv8oNuw9Hb8gADBKdCA",
  "key36": "LV1YakAPdtPWPtQmExkHhkTTpFvvNf3W9LAG1tdgVrdZ2VXsZBvhZcgBto1sufR6NsHBe4t8fwBxExpH9KgdPJB"
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
