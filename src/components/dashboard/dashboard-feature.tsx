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
    "2cAvERmBKkSqVPX8uzgUbbo5qbYGsrknq6UyPNZW2DYGccvpYhV6jkRxqeePyZqjUjjmp9NWx831KDxdsUniYy6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fuQsaZHHKgFYAdUuZbj4VAopkh3YYBq69aAsG7zHWN9VYimR9AFUJyJPLehPiy5NR9nVCW4EizYcvgewDdkbRzy",
  "key1": "3usCVCJT2upq3NDidUyG5YscuU8r8Rm5kE76JHRMfyCrMD9tFM7mz5YVFKcrJ4j7gySkLjWQp5CozpuarYx81KZq",
  "key2": "5sqihYiWke5qx3TpNcHtBF99vwXucYzfKwh14bwpCzA6pB7hNyp8Q8ceDzfjeMp6tHWRivhFDbJqY3sKewtqMSHr",
  "key3": "5QjFGB4gMLE5mNWrCkXhJZu4BJdLmPb5ZuC8kWVpR7jFHd9eTERU2NXsn88kPRTd8uDAmg21966dtQe8bNdWwSHN",
  "key4": "2MNmpQ7dJSEyk9uTeuDBPuav45GZEdwkAY4cVxzmh3JW59c26TG3j3gjhRnhkz1wdfuEzngQa65YK6e1LXTHzG1P",
  "key5": "3czhGdY18CDYWyHKH8YbC9CDzeiD871VSyP5hJMDJ8U9z1dvcaYnVfMY2tVYmridvzTgGUwszi2SRLavP2ZZsW3C",
  "key6": "5uQ9K1sbo7HiSBh71NFuEB3jqjqTUKkeEadeCFxXBdoadkg1aQjFcDnvPGGCJ5BDNE9u7F16kWGhcboRmzn9Kf5a",
  "key7": "2f8hZ78Wq8h8HfpJi65pwXQoSA1h2EqKu2Hg2Ryssiu7p8VPb6jEEFjepqcMts5DrUz2yqRXwkEZjX1i1UJCqkS8",
  "key8": "NutSfNy5jD1rmJhuAFCTR4cJigDiQ28J9cLENn1D9EEJSuanu25oLwzdi2e6Ta15tcuETMKVvqWiLKGFwY1DKoS",
  "key9": "39yp7ssVUnmCi7Tn3GXCZB5MvfBWDDq6vDEzxoEBUT8qCgtx7An8abBDNfSAYmu3eDvfn7doMrXvkfhdseTqicsP",
  "key10": "3ooq4TESTTf8Meat4s2rUea2MNUq9Hbuin6ZcMcyRJRxfia3SeT1Qheaib3Hr8iogaGGanmsjawDALYJfcxQn2Ea",
  "key11": "RrSFmcAVpVaNJQu2G5kavtfvrfBASDeuTa4fXvzSUYtoQvnjBgi1rB3fuxQNzNYZG5z1Uh2diHzGiFbnfiqXiKi",
  "key12": "2Q5Fk4tuMrYbhFjyL8LvE7qBnJavK9cLfUrg6J7XrRs5LUCH6oLzSgNZoyfqZFXuH9zxFp73k9mokyLyzpAvMPMd",
  "key13": "H8sjfsGtRcSZNsKrYk4xUydP3Fq5n93PBqHFe4szcbNod5rMLkrRzEy211Gcyq1Z8CXGA9dUoWzQiUtK14Fq7Ha",
  "key14": "39LFVrKnbQdUJmiJYSzkgNvEeM2SmjZwdm53gKzSbdQtQivx6Mj1duwga2dnqBnPhThQghkKanBQMXPby485ESWi",
  "key15": "2CCJQrMt9gYWUwh7qWKynJSt9NWsmDbmEJgmX3hX6MQxPci4epnDxKoHW7gcMxTEZMW9ecyz1nd2LgKebs2fMJRm",
  "key16": "37aCgbXdQUiti3T5dteMsEAVYBDrutS3zEhGw6aNEyE8kd2NK8sjjgcdtRnWHEpFqtri7X4DaLDzYd1eyMLFD1zp",
  "key17": "3Jg2QaZ2HfqYuaiz2Cm3m8axWoy4RPrNZmtSUHwbydzoAP1EnBUgekKfw9m7QpmxQZsq5R3xniqeqkvAjwfeiynu",
  "key18": "58SHBeKkUP6UNCFRPp89BU23pekJXcEd8YvfC93JvSovxYLPzjhbtJnwTQA2jA3QjrSyGsuRYNQiARTBAsuNgHqa",
  "key19": "4q6w7uhjYhJ9CKZ43dsvgHyE2eEzVy2g978udcr6w7sY4X1pzGmaoEcinFwB4wi4dzVLjE9fvNZTGbKqPZhxBGtD",
  "key20": "QG3Y8dR9uzgVzczcjNP59V1y5nuTbRFYEDJAhMRZB2EbMRhAtHayrc8ANrza5iuNtocv8wMEyDuRtZzMmgVNfnt",
  "key21": "4L1Be6ukFjWPBG1gVe4u3iWvADcKbE8AYTBRNqttVezC9qHRwkPxMY185NJZVankdMdVu8yuzZVt9UiNdrXSPcVr",
  "key22": "4ixE97NfZiqvg4UdMoDKfYyRVmuk3URwHyvMPy48F4wgwyRg2v7iFnsTimAzapbdLUnVAJeTtLpRmBGPi8jeg3kr",
  "key23": "4xvT2sK8wwL6Kf1ChnKutpCC9NKQX86kUpn9RhuttTgyG2WiE59DMihUKJ9T92KYoeMvtUSvtnTSZdYwcPcAci7D",
  "key24": "4iJ7qFBVcLfePvSbJpbHCeCiprKT1mxygWhxE11pZdeGsSKWet5tQJ6yaU7WVunkqnvXy37vJvBY4gEbEWeAKTB9",
  "key25": "5RBHDPrmCLSPE568tQgZPTVAY1DEYMyvcAjCkkbwrz7m26RMcs4ArXgTqdHQ4jYbPuSbCVHRpZFQEjMqBDEmRTMS",
  "key26": "57MQ5gQrfRuoiRrkuqxiZSTA47m7yk6rTMHY6LEytVcB5KTYZAmVShzjaRoHwS3ddVDrpeZtkvsuwQoeRWMvcJuu",
  "key27": "4yShL9Rx5ooYmJva7g7vimyPV9rJgv5hRSHovHXoVuGTEzgLrNXTWYx8mvQNmkC8LV9QQnCTHJuiha6DXt9rTtv6",
  "key28": "5dNmufGMqnQntenp6BopmRPQ2XJ9Rrs8EDDGTQQeyanmDQhyRumZiJQnHMjM4qpDLtcCfNfWb6VmCFMUSTg46yK8",
  "key29": "RSLCMoHwSFxhPGSuE8b8h5R7kBqjspk6xiNfSr3BgBHeTeVk3pgNxomXFdbsxKKnuSRCvriozWkcdZotGgxTaDv",
  "key30": "59xHEvA29K8Kj2Lv9ktFqjY26wSRuKwXhcwqRCQNkV92qmikw5VNmRdpvscFUX56LPDitEtkTcHDbTm8nbMZRwBn",
  "key31": "3oTxdRAsLPABqzT74wDBtM93FwjPsDnwx49DVqMcByYdEUdUtZk9RYCJMQDJWzDPagwMQx1RBSDncmM3Qg35BnXF",
  "key32": "5TB3TwM5nozC7iSA1zDoUP9PrbL777o8SiCgXSvhVcAEbbpqtf386egYHz8JBHcJ6g2DqtUNmFAC4wPCgitqJTdF",
  "key33": "5pfbNCBukrEn1ocMrVUVZ5BjpnPTxohNukcjUJjLMdnVp8LnBsfRpwVh2v8MLzr3aTvQunxdLtP94YYug3b6JcEo",
  "key34": "D5Kw1ma2qX8m2rJLpoB16QLx5vJNayXYKDQ9rBtSH8BBs4CWDdWakfMCXQox4gYPL647cJQzHXGuH1aNd5LtKwY",
  "key35": "5ZFZvcaKoW9wSNA6Kp1XZ55BNQMd1ZHx3iZupxjPzfDz6A76DgeLP2w5KDrngJ9tChGSESfNCTptd76dViGSwWiH",
  "key36": "4aYwq58cF2Tmg2HfBkxanPoqFgB88yJHpTXsYDUNPCWUDpeoT5hT1XYYzKhUxFCF868Qn1KQWuS62L4Y8JgshL7H",
  "key37": "2bRX79Y22TbxtGLTxEXrJxyjq5hEV48NgNWcKZe2ZjMaMXwVXBEead5nJreS3n7T2FAZkRqg571TofKbghau1MzA",
  "key38": "3HBjF9Utvy7CBmNk9hN15Z54jp8kerTURt5NMaVhZb8twSRAQDGKiUuDFcxhHLnuK4emX4du8QmzjzfNeJuG4Ryw",
  "key39": "5YDsXxtDYc7iHKVgxnBSg5k7qdNCQoh3pHRjEqzdx5Axh5mTcCoTopdB5kZzEuALws6t5gZai9TpxuGgUGXaezDX",
  "key40": "3ktyLza2d5oceZBDLNsVJ8TcxmSZkbZgjECF3SzPhbeKTu1kd9PXpKFSpPwetqsnCp7dUcg6MaTYLpoBL41Rd68Y",
  "key41": "9CtpEqRmxNuxz6F4gnNmFrg9iPqJRDWVRBT53NbhwAa48CLYcqwLgEEMCNzpr3TuoEp9qf6bhEnDASnxScaZbXG",
  "key42": "3dYgecZfTTz2YKqfj93knDg3xUXjnLNLnvLhT2KgWHvJr6jDv5fVvJ4LoB2Bu5Syfh3bkmRdYx79Hx96KZWgFxQ6",
  "key43": "3c2PFb195z6LbxkaKajENDxFCYnEWJaqGLRjUzA8VhHFScYSZWsNPa6TiGrp1X3MLYYicsX1CHKe8sKi7pALbQXp",
  "key44": "5eYKp3VGgjTQMXLaWCUU7NtxyPGbsmN5seLRLqX2WBFp4m55CuUqGWDQ7riRbpGJk1cVNavNWi5NSxiWBvVso7eA"
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
