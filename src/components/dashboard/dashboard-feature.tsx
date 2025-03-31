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
    "2yAvbFmPGNjYkEegioQUKoCyjtSdUWiAgPKbeS6VoX4jEiwDiJWqzSmzJX4X6hRA5XofjCwxPM7xjxnS856ZZ64y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z82WxjPa5JRPjQMMJiCa2Lw6ZqN5KUh6c28LjSUEtWFRGtgCaSBdKV41UtbAT8Ecjuz2yFnC7KsRs7R9u6Ucy1o",
  "key1": "JxnR8YTaPbqiKAdPPEhqGvgK3rfEmyEwf6gX4njkXhzzsR7oe2cm59wFoUddfpBTnuajk8564eJuaZzRH3MReEf",
  "key2": "5J4HdJiV85cW4bUoSrfkmLGnfd2HpcMAedPSKHAcMcg2DjvpupQP3ewD64GGJd2ZZiwEX7DZHDPNzEk2D6DxVpuL",
  "key3": "3ursbqGGKgPbvfgXBD67KFAJu8U9YkMziZbE24mk7QDjPRSFMVMmjRQdb8LJ9dSKbbFNNYLk6L4hGuK3MqWtijU",
  "key4": "4czXrHvMnuR74npZxhMAFKRrsZowqdvgW62wuXqLBKSsvV13yvgetQWpbGFPgXWti3Nu8KJufAojmgdvizrPecqM",
  "key5": "4SYsRJAbzGdMJJx6cB1bkCaFyEt6sWNzZx9AWTdrko5S4qt7MkqgDiAYL4KN7WDgMADcbU75xMFqRBmce9uecvGw",
  "key6": "5GeLNpQjA6h99acsEpz7xoLBFKFQ9CSqZ6AdiQXTrVXWpy4oGBZwXQF7d63ZJg2Cy32QkYM41Cx9eFduvhb1wVt",
  "key7": "4dvKT8ix8X8NbAgEvUjoYrr2p1mdRAL6e4VFKQth4evunFjDrkguAZEXNgVK6PNy64GkhGSj4u7dGNCJHGzSAgzY",
  "key8": "4FE9FxauYuRv8QMybD3uPFDqRaAjN9uPQvsGyJZArXYLr2TJ4yDSV583uU3fkDR3Mi3ZFwHrnx1w5pf45c3GtFEv",
  "key9": "2ZW3Vzz4bZvH4z8mav75KmydsZG3hkq1bAop1azzSEfQg8x1iZ52TNUNbsTaSDdKwfnTJn8JRvaReudALUUvBcom",
  "key10": "36T2B3XuZUkrxer4tKxi1yw33me6paFpJLmowvtsMdu5NFzaeekyxk57VGkJnqGywDkcL66sw5hchSJTkf58xTGj",
  "key11": "3H78Ytx9q1diVkaiUzJ5y18SPqpPxSwaMSudgAMa6wQ9HGiUyQJYQrj9dwDjVLabYXHwso5K8otYsNmQcrLwzQM6",
  "key12": "27vRgemzziTMMaNJPGpnKKZsYFdBBTQ4doQFzgn3ZMwgcnXJwiJs8h6qLfWQSaEVG7JibeqoQVAdo9vrbUDQPsas",
  "key13": "67nFexm8ojWjY9Xhy1eEdm8Yy6UDGKRgBQrY1bEzYPhaHtrnz1V2sBSeMeJBqc3V7t7jtGodmvg7gtdZPytkggSX",
  "key14": "3cjrSkFWjYm3yKBRrXh3oLH5Ay5JkRXrx5YT8q1V4zQuHDJ7P25UKa6yuGfj2zt3wbzqk6N8hGUq2rmYkXSbMnPZ",
  "key15": "5hzpUWpgcSDT6vr3ijHy6J3NQYtCg5amjyXpTcn5ZFW4Wdw1LvsTW1hiLZh4QFry5ZjqJNkPLLviEaUdjKVPtSPE",
  "key16": "2TUQSd8wHGbvwrKyW2dH4W9LX1ZJdyyiS3HT2b6xFDwb8YWVXerPU9fSnsJ9V7q9nn9g2LQ3C7Rsw94r1ijJq9CD",
  "key17": "Kjf8yDUMPfu9zp1QuatMghFR45ret34aE7boHD1NkxMZ6NAhmokoWD9w3Qji2zeoQpG2yzGXseYfYUPWywpRnxQ",
  "key18": "5DHtuDTHtjhEGL7ZQ7jDNYoM4t21nW3bHdrEKLKKTZLf2JLh3oV3TjiCVMdW6AYBeeemxYagWuasZnBVfURFPdZ1",
  "key19": "3M4USfZT4G7skJSXzfcni6yVQeEAqF8npRa3LCNZqc6p19HUXDN2CET8Pzq8Lk4NW7WtFPGzExBzQxhWtvmhotF1",
  "key20": "5Z51iaPhwdihk1HU281QNHHL6uiUGkXykfsZtJC6TK2iZ39JXMHfn37SiPeFSW2KRT46hYasqm7r6HfiUVuH6rds",
  "key21": "3MAqLsxYQYDW3ZzfWr3xY66JznrmRMkpAZHQ3HHSArtei9eo2jCpWHdsGTJRPVdw4DgEn4D3tWduhkJb6UDjr3Zw",
  "key22": "5aUdq3gCUqoMT23J13TDtuSnyeP8PWHQFiURTVGYARKTVKP1UDornj6co4wnUptFN5wAFxeXTb4q6ixPJD8dnPrb",
  "key23": "4Mycg4C5JYpnt9MXpD86iiVvCU5rEMYnkuQy9BRUMp5VxS5L2VnpbQL5fF2qzq4LCHibwfcYz2M9e3ZqBLWFLDWe",
  "key24": "53XhTn1LXCKDT3Cgq9MPNhbRab3Rf2EstwpYdcMrT7qxr1gFtyKUxTfHgo68gjihpNN7ptfwdYZDdNZa76nXSKBP",
  "key25": "5JoFLdh2GvFSWNE1L5JH8cA87SNdF4BtGRSeLBpWvkDRaK4aq9FDM444JR3ttYLw22xcojFAGZuhA6hrnPFUj2xK",
  "key26": "2hgTFZUMKEyNxhb47xeXEVNP2De7qJkN595WW8Kx3h9B4a5BciViXWu5NNdRudqG7FbUWDCwjS29K9XoCcFPaQpp",
  "key27": "n4Q2nrYYdFyCDWC11z9G516WY78ZCftT7DB7gt6tiBnCN8SPmAyuuKby6TdgaB8uU1HWKUjmJs7B13tDE4cw1jN",
  "key28": "21TtPp1265RBGLP3UcrqLE7AugP1sTcpK5ErarXiFbBWDhcWUgFTZS17fFLoKsoFJnqNhphjEUFRLHeRxB1vVZi7",
  "key29": "5j7jWB1hEcH2FUpTEJcyakM9eps6quqWuZDz725NcYjTgmhPneDGAKWVjif9ejZLtpXN1sb6YX56F7hFgjTvfQp9",
  "key30": "3nNV9UHpWYSjqa9HWHAAucVD4QpXZg9iKszWESWpcbdrmBWgRnmb11Qy7JNRFjGohE5VhcMGYsGMCKtkgiKzkb9w",
  "key31": "5ntq2apYdWQPPj73zPrFmhqy4Fi6pp71CURyHWJ2DHDv4QV6z8foxbqBaSUmnhGVdwLm77F9MtnS4HikXSxvBYap",
  "key32": "3YdnsvmipfmDSxAtxYi3tc8TGmqH2kMey2RttoPrU9ni4ztUe39geHVRjoALRMDfBVhN6a4G3hCFvuLTjDFYMYbd",
  "key33": "38hCeqt2cYp5SoRAe3zGn1QZjfVNcNE1b19Rf9abQ1tmDAhXfXxYoEMJYS2Bj7okqdx2DXtJ3ghijBceDtfBJBpV",
  "key34": "248WByGrSdzWJHQbHxXDkVUG3gpudJwGNk4LmeuMoSau8AStuvKPKjp6c1XQBYgPsaTaYKAx3vYDfpTbCGcK9cjn",
  "key35": "3fcJWfBpSE43hA9yjPc2q5ZUwCK3DJUxd1faPq6hmgerHgAwnW9bdEJKnRW1RzavQv2zBDciTCKVG91Q4JiYQHCn"
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
