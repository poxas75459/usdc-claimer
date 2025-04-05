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
    "4vu7aK8q7VjJneLfazgXvhsmY1HTguXDbU6qwmU63mz5S6WsZXW1wk59k7Dt6DMVjKStzPhRz8374ZmTdK6VZPaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vxQg1xa5CgT6eL7cNSnED7cnVQbY1hDFLC8gB1HkL5VMGN8YcgrSyDMqiD7BvYppk2SmvhZkzSpzm8AzxjBjSX4",
  "key1": "2iB3qrH2ivM6jn371FAQCcSHA67vGUReSRmVYuUM9oypGJMZKYqQ6edDPLnxko3KVSYCq1fRUHwF2ggsuGjaBMuD",
  "key2": "3z8HUWkTxgoppzGnLgLTsYjv85gePA1ngtvHghP4oLBoxq3zkFsTfTDqAXSmtkTj1Zaz1YoCmJQ1xHQFiHYZc94p",
  "key3": "3B8Ty3s84LiL2WTdHgj3uc6rcUy2tfimfcGzpmLwazZbPrCjzZxX4HgdxyD1FCBUvzwfBUNUZAoQtuwVbwFLku9K",
  "key4": "5ZtKaWQw5eNGjXvX2xj9n7HpAjaAUGrszrM6gYwqbAsP4eHe1UoZmaG7iyzfabhkkm9bs8MxPUvYx7n4jQ7kVAce",
  "key5": "2djBnKZxWdQECrxycNxBCfzkGmVGJ1xDy6u6wa5SKLeAnJKEPudYd543c5qsUvmDx1ZiQJdWriSy7kKQR8k3uLWg",
  "key6": "4dMTDszxcEdDUe8aJm7a1R3rZRTsUnkn2bg988ZyaKdwrvb5VWA6WXDbfUGJEja8irt3dDN1yw6TV12qkr6qMy8u",
  "key7": "2JKojcqiWVy5YiNVwWxoLBuhDnkjqJ1PCH76ueSax9Du6e7bpNcVAnK6TYv1a5vJCaKxZ9zpUnPzeFaUtheJacf9",
  "key8": "4uSVafbLG6Qj9PhZsn41JjNrKJsJiioe8deKNd6JHZ4x9RHtNcGoWMJkkFBmbUyB2q5nQkCA8ggivEx5Vu4tWGB1",
  "key9": "2B37DSsuJSz1Z92LVAYxwis7LDSv3scax7H6XwSWtqyZ5DBq9a3m6xwGAeUrRCQkVuYbk75MNBNP9jCdUGiGdS4t",
  "key10": "2ZqAsHaqxAG3cdNwVm5dea1YU4SFMSqdnrrQd2MFB5kT72a4oQ9tECiLLYGksrNvH4eagt93VPH5QZdcjMVghTWg",
  "key11": "iSB8dNVvp2mg5DaqjRvaggYE6dqJwZTLCrqzbhqV3pgPuoHvkXUkyvqUZc9ptH4VvofEQZRP2NyHv5WpSYcNEXD",
  "key12": "57eCq9pFTskpQGT5SLTWDGHV5MAsyxEWcNn7r1hwThkHrN29sFCHN4bJ9ToGmykgJJMo3dT2QhWn8u232USfeyTT",
  "key13": "5KHCf9zezuACwJ9mrKPUW52zJWGxr2Ua6Hxw8567Yfa3PffZXAggYG4HfvER6kyUFpsXpZUeknLdURhkN8snsBSU",
  "key14": "4JCoA6dtVo8t1cHDPG2h7xYkAwGPWyHjuSza3rT7WT6m9s8h15dAecNJH3r3XbTpMYUY9APuasSv7XMmbU1iC6vk",
  "key15": "3owoG9726CHJm7a2k6E6r7ciokZMq4LTYVp5A4icG75esPibxgarBj232iYbfS6Y1PHn7WnDJwEaz1ZZV91GjMqR",
  "key16": "2qKPeQmK5AMR6rpCTzJHcUCycrr8bCfEqcaUC9FC9fQy86EvVHU1AEpZdv1UXLgkLEsHQySkyEnsXadEVgDp2yGs",
  "key17": "5S9CL4Z6GPtKi6dz9MhyCMwzjHegRFHt1aEsnMucT7C8G8BBQgdqTqoGtCrXGv9VSWPzPyTGgZPFGzWpAhY9FE7z",
  "key18": "5SrRSkTre2JFirh8ZWrfbyDCL3BLXVZjQst9NPc93afHmh3r4AcPjvuzcQisxD2k1RAUhNJQe59ucwWJ21naLMev",
  "key19": "2VxJFgXC2HRcTnZ538zPNVEDwTLht8MSWiWdzx6fcFEChNDPeGJYw7ViUd4eTUqQd5u7ubA9RiRoDk4XWuXCTuLC",
  "key20": "2StqmBkjGojJ8uRFw3TUE6g4H37WycbFdtrbqtanJkZ7yCwym3uQrz29gyWPhGV1KffXuviHSpqf95NbrBmT3HSu",
  "key21": "3TxfYT6vK9hLy1emhPfRWcLjMBEu6diKsLjnUtXpHXDhSzj5b4YdEz1fv116mE6Hs3LE4TpTV4jwBXM4PAP2VtNG",
  "key22": "39QEUe9UFkWQafpj1UiQzomRnrSMUTQF2DrHf8eYTreiNndyze2AuX6h7VDn2QCmkh8adYUMV59LHEX9tMefNkwH",
  "key23": "5Q1GRe4g8ZtbYzZGXR3VRW71cfriu1kLu2XU2Do3tdueMQhan57arbGercZ9Kfcj3LFavLbAfNhh9SMB9DiXZQqF",
  "key24": "2PePtZLYESYBeEEzTvyRB3HvGHPnKbTdzwPjrhpHsiXCG8UJx9JGPzZYqwRKAYjUwVCqdgG5azGkhgA3mvKHTKmD",
  "key25": "4hBws6qoGZGxnuRqGKptBYJT3d4xLMTzkREsQ5XA7jumKJo7R1QvBenybjiSC6RgFowXw1MVMAib32DDcecrpCrj",
  "key26": "54FYskAc6U2yH9uMzCPSLbfQyagxCZG2ti5nmQciY45YZoRiDyHJYacoc6hh7dqdzJMFmjg8a7rWeHA9EKEHgCwB",
  "key27": "4cjj7kKG5BYVJ1rnvs8LeRWG6UGsR98ZhmRM1vKZDM5PPNBQ3bvtsFR42JHyca2tdt9P2995VQv81fU1sBK2r6oc",
  "key28": "29VdrQuFTqE5zhJwp5KyT6Vr7xirL5ajcnLu9fnBkA3FrWi3AoL425rHR9oQm4tt6DWdTp8bTLzDzS7nJXPQgkza",
  "key29": "oETzvA5fHgM3rr8RiiLxD86vM5Z1kWpuJxN2XV6vemrv9xR3xARCJ62NJpC4CxDrNBKxJFvBqtnpS33ytNoyMLP",
  "key30": "3MVdYSsMC1Lo6GYkVtVw9SiWf1MCxfGA45zMuLLHg4qHhimN1Le5tcPcfJUSnu5WMJbhYPSiY7z44hD1n6XKFTzN",
  "key31": "4JFdhwwRQj2GrUQMLqLyzYnUhmKJcLbkZDBGdAXA4kdTcxm9hDLmiNeGTJyKJDb1Kg3izwD2VDHYkUWuJKmGva8H",
  "key32": "VXL6iet4YjRFu1MkUSWVuRTt7jNeKK8SsgLUoTQTNY4ahrgBrLT22epW5NBmv1PYahtCpXTmgBgta12vX6bE59p",
  "key33": "2Wp42fyz4YndxT2FsW4CeT2vAFUkiVf2rE54K6HJkKZ58RULQzzsGn3n2WQdMHSY8tdFLBoqznQL726EXr9b7Kpy",
  "key34": "5o9ZSPzXTxwgwQY9qkB8BB3g7av3W2xBnPrFzwVPrJSX5eG6zG5NS6vsqpUkr985tdSWyf93AYVUGj9Y1DRpwpdZ",
  "key35": "2nCZJew8asmC2NHjaB5Nozyr9Q6cpAXYYK75B6VaRWgzSmUS91kjWL4ZewuLTLUj2b8GzS1ciEkhGmjNR4rKQBVz",
  "key36": "3po4zMrZZ8LMVY13D6NRnYMjwFJHU6sSLjc9kpgFqL2qmEo9CtyUmYhpYyieKCQtZEHVNDmU8hjai2aGRRsJVYQ4",
  "key37": "5TuEAqK9qzSVvutiggVf1ypecXYmQgrbpBh2izjH3FZsUXL1ptVkLvf6ADy4tvrWnANXj1ekJkgRAzYKXB6gxpuu",
  "key38": "3FWrxcVMHuTRLrK9jyP9buDsahghF5sVXjFD3zhhT4o8C9UAtdkjogfYHjPNS1nqA1bSuhrCrufA8U17j2SkjqYW",
  "key39": "2V1NFoerHUGM4TJg5FniDsn28PECZ1VSQ5nPrfy4LoBN73b8D6V7Wk5yj3Xj51rhrdH1bjTrSWtu2fEACEXUbfTs",
  "key40": "629LkpBrhwfsSTwkGnXHwGifuNR8dSiMQCfFpHCcgTVGASWJXn8aFmdtV6w4cVvbZisDQbm4afGtSPf88WNnC1SD",
  "key41": "3xn49VWSXCDHpbchoiD997REUctLdQjU96jjfwauqwU1rnhYrJgRM4TSPih1HKXbs8eyVrpGtwQ4X5g9RZn6TM8T",
  "key42": "5kLCq9yYJujqyC7JbZpJKEFTd3imYT4uyoMucDWNfvZtNEzJFPQfBfBTfWpmPWQgd1tNYosPMBqfW3gpaGWxXGpQ",
  "key43": "5ZqKA8HbxfEVob8g5SSpL1jyDWG1focCoVWEFoycwmhzEsR7BwCKf9wepGctkLB7iPv5MgK8eTQDaAaEj6RDzpV"
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
