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
    "5aD76F6D1Y5jPEbor7JM2aT4NtGdA3D7ozxQs3fqBcCM1THHQDwuRSd6DpBEu4Po586tGAaFJv3pedwKwQVpDagG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eYX3kKfnKqhSGG3j1dUcPFCYXg3coWycz1qVGzNvnj16mv85yEdwJmDhqs3cqQ6Z4uyuCEVV39UhHkSE6M6ePGo",
  "key1": "ZqN3NdCFdgNauRBkQfwnZjSj5w8LnyREF5M6ZocW6YiebCR5yYQfnF43hiwjqh9BCstQNSe3bwLeBFnh1Na99Fe",
  "key2": "3DvcGdXJwSfp1vFXaALbpa7Ck7ETzqmhAPdFtZaDakqvGQxnAtf6kiLd7s4LTjsKhbRvB5sBzodvAbaDaghAvBEY",
  "key3": "A1ZFiLbB3MtGTKd1pYgZXC1WksXHC4hVDVHcrGWkMf63Yvx9KqvoqKpWPGjJmCZ64gxTpuWJ2wfHucdVM6uzTn4",
  "key4": "2mdH8mQYgqJVUpwQ7viWwEgkurm4kBkQtMKBhLwd6NH6QGyY7HYr56WWrDxU9KA2CuqRn44Aj8RiAi9sEBGqFpqJ",
  "key5": "zv8Yb7uoGDpZGcVSUCVhSoYipcSkJ3UvyikUnjhf4WjvAUEgu9THQA9aMqkDigK44bQwszPuJqLqt2HWyAF5M5M",
  "key6": "zQxi9NNiU45q5B9RpmbgEo9xtnbWMKzttmrm3Ki4KGFDiPfYePAToPT94zwa3RzMUtP1mqeDe9e2RHjk9RZqhwi",
  "key7": "m54uvduu8oD2JL1JFrd6UesyFTXmVTkPnXpa2oWo9AXX73J5qwHw2vZnKm8pwtnPWRAyT7zkcXxsZV8vUtTSnxu",
  "key8": "3MZYh8NqwhLbRUaMMfKvv6DU9QYNWTubfSqeP7AVsFMVAdNyAASvtQKVtDAN6mcYVPSgx1Nsgz77YifdJoCqnB5w",
  "key9": "frykBitLB1jMyapEWd1AAKzJShoqeWej8TcA91yKZbuXyAUrYMs4NJjGeWe94bhRXsjft1Ryqujy4d9kKdquZRd",
  "key10": "ds2Nms8gnW272Mc7EUDGDxhvDBwvY9YhD2aPaMRWjZ9psXWJbT5HQ5AvKzcBdrwxtRMnKKFPPbLfFF1nSJVEUwC",
  "key11": "4wkiHETpB5gfaUBAdaC8opWagESQhMjaH3WVQE3FYnBTivVbBb4177AEUpxAP1C2soNq6gjCs5ttfdksHdWSD76F",
  "key12": "3FBG9dgEpqQpBonWiMLpQYQH1KMJkrTvcbCQnwsUitNsnhFiwEF42B2Ats4teFWRqVa4EmDNtuFNNVdTvnhJQnsL",
  "key13": "2LxPZJ1nTw24uWeybRQZtqv6QBuWWQCmtnSFGmpBbEz1pn7wZViFz29wkxHiVYLf53WnX5zxXkXBG3prT4CYZihc",
  "key14": "3QBaHs5TrkPEY9ZnAazgNZj5bPwTvCCc1cEmuDJppVGpAH2btyUAGShTKoRNo5AfYbehMGbafzwZU6xwhHGBJJzt",
  "key15": "2XmnLqYZvZ28hCCNHU2U7oYibRMifwXwDWdQmnJ4FtvugqmYzQ8p3NirAaKW5VnFedA3CJur4kSPLzcknMkPPmjX",
  "key16": "4enozgLS38NSzdHYoY5RkF8bk9WoLhpz18PV7MUnJfkv4voddaC5g2qHt7Eo9hVRu81FHCmNseE2Jqmt6Q3vfBko",
  "key17": "5CCFwj55BRYrXTEvEbZVMvyvxYwoG5RJPemF9rqfw87WvEZNyRAtLznbSSVs8ZNP7Yi22ikZ1sy8qhNsqmPQMqDf",
  "key18": "4Yj9UACDXRjJa8LmCMR3WrkHdZAKG8jhLSsaDQY3gM53sdVjagqnMnXHJSMpoJ2brf4iQXgjA6mKpW4bEgSaaXTQ",
  "key19": "2TfgBcjZnXNQA9spDvgjKCGikrudAxR2oBxWShrs26wBHq6zdN6cHy3fbQvL92Y2637fuasJyn2q9LAHHF1vu7He",
  "key20": "2rqCstaB72KzQMjJGVFELNM2kRFuWJ4pUS8KN7r4WbDBNXebFgXQKLkVXv8rLB7ERDedAi9dwfwm9U6DJ7xkFaGw",
  "key21": "4K4VYa3Uq1jK3gD7YUqHzQcMEedq9CEwdttJdH9LyPha7xSiQPhDMUULQH3EfyRg2f4dWZXoCVNdevQwfie3VjVh",
  "key22": "59HqrcMw2PPhTtdrMronM9egGKDdK252Vm8b1UCpNtb1qgbjRYZXbMRVjJeuba6138EwCEJMxZvTFAu4rPKuHwxe",
  "key23": "3pZE4p83FWmkHgx4TXmBFZcvbyacFMCEEHAACUiNawQbCAAZiXLZ5JoF8PasXvBdHpSng8sUdRA1YuPfVyn2ojGg",
  "key24": "4CxUUNJSaKsjJVHAdJWPa3xD4He5SQQVaBbFz5SuLWj3EG1NyL7mwiLRCye2mckyUnZ77QzBiZqehTG8mVwEsfHW",
  "key25": "9sVDgac1DuR3koYXSD43pwR1dCTczhtCshMBcHbGWFgcwY11U4TUZDniQwjzpPp59hVDaf2pudtLXpPVSvwgRbU",
  "key26": "61Bdz8ziiuQxHe7fyrV22G1ZW6X9GH1cn624aphzCXMCoRG2jpFaw3RngLgN8BUUiZsjSTPB4syydHMKKpmw3UDW",
  "key27": "5wHU3M1h7pznxLkRr2AecfRLMu2V5pWdnrfFT61y3kyVTC2JiU2VGpYn97uQMCDJhbWVSkAqeRtdt1UxKbLmnVqB",
  "key28": "3pkQiCnBr2udHS7rbCh1Lz6zWBbHxRuoZHEQmSnMQqttGrtF6fDRZQKoTj9KuEiqtqdxhyWkqupQR7Gd7AAAw2w1",
  "key29": "3zbrimSe56r2f3AppFAZUMGHoh8FjvPowYJcn6EDfNkFUSWZ79M9tkhS8V6kWy5fVrV2Kb9HDizq5nEoCqzMqCsm",
  "key30": "4v6T3nM7YD9NBywD16EtcdM73hgDduBxv4b2jBAa42NK6P87pyzvrHt2jciQC3PyZag24LJFkMkymcc4oSpDLkve",
  "key31": "4fEdJB6fLF9SZArztgvp9drMfkcYMTKWaDUqaQvL1677pLYA2vyGB3XvUkwEcVW31ufXQiUgkTZc5sSUycdu3fXA",
  "key32": "AQrMkHXEiUxX3sxoY9PBjZzDZVKevZ4DQi9JBrV3Ckoat4sJefEPHc7655ZeeVsY12d2ezpYPcvFFQsUouKkdci",
  "key33": "2WJUizSkdSEDLJHUwpsBKBrTTNf4BLc6bYizsmX644we5C5Ui72VnbECUZseNbumYRgjm12cAj47WaUVUKuC46nj",
  "key34": "3BCcFxRXgQCnpzoMPtAR6iuP72PiGPwt3UeTLP2RAH7TEYsE4RLe68M5J12yKLDXUCtmuA4KuSB3ujYRpPRk5sQ8",
  "key35": "JEnBvu8zwsKs6rWkjMpoQnKPGeXzaY7x2kzpWUtLi4jmLAY4e7tki61s9GQkyvphbNMybK2WTg81eqHJooqfQ64",
  "key36": "3qhkdhYJ6ZTmcFvcTTDsWEvQ31xrjBXfTmdac1QWFXEQW9drUmCA7iTkYY2LGzx8yGrwcpbKYwdgzdbj77KGq8zp",
  "key37": "5kcHvPNuKF2BsLYM1TGK4H17iXgSmMbcnx1hQnD1QBNw92VYCGfu6HApkyAjGJrhrEGo7otyTgzSquUaVz23FkDZ",
  "key38": "4ueZ1aArmSZeqKDJm8NhZotz7DVme2iWoP3AqzXfTfNkCq2dq3n8CCG4aR2NhB3o8k1PE8JokCa6dkKMw4ZJtfQC",
  "key39": "3rj87Ng1H5aGzoPwdqZoRUmBce4hEiwjXGBF18MhFpdjDZMEBjH1JrkkDdin66PNebhZfjC4AihNZDmskAonB9q9",
  "key40": "387RGMVZxXqNPaXydsLTEgfjKs9abM3cHDNHUKCGoEgqKX6FxsgoHsyFvXmNtrwvhCPjh3hmFkZ2ZqPH2yfgJMBq",
  "key41": "5kgjAtrZvUHBoSMR56DFyNcwPkDqXmU36SrVpBqmkT8x1zU42UkhY2m78vCXLCRze1CvaaueRFWY4LoJjFgjc3XD",
  "key42": "3bkkQriiwhXXGNnZhnYKcYbWqLjNBdE6eXce4xGL2hnAuKezzSETFNpa21t2j7KH6atV35YnXYBnAxpKCthMdvfv",
  "key43": "5qMstYi7HV7eD9EqXSiYmsStK4VQyHuFMyKRURfUYQa6U2TyZShJ66rmHqj7dnd7atGX3KELBBm5ufpvcDy3Teo5",
  "key44": "3oQJZZUi4zxBqRQyJJhj8PXC77T5EXcGLbwhwdLK77yEoaJ6ZUhN9L7RzwKLcj41JRTo5VcDZr2LNMrKtkBJ4ZNu",
  "key45": "5NtPqr4zSHeRejNWfiDBkYd2PybdG7sTtb84dRTj7h3qmnWB5b58bypXRYRrL7AScbPGKXQzzFtd4wWpaw33Yo5P",
  "key46": "4EDVLN4K6JAE3cZ97FfHgoJG1pQ8KKX4fm3tcLNuYx2t7KqSdRMycw3pvQs3m94aC9yASmAm5WAhRhLpUguBjZeb",
  "key47": "2YY5eirf4w8yum82737YP6KyB8E46J4QLauPxpHq18pKMVShhsH8zv525gPw6bHWfSPL6vhbgKVKPCtRcJghtNL9"
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
