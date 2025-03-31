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
    "25ezeQ3NzoqKYDTxGqxZBXdVrw76Z9efUwZsTw5H5okYeRnvyqeUPTXCB1wUgDEZw2uHWnpNXLM5wFXdpNwa5AMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uGS2M4LGQUycmQBMUh6bfq3LGV6rVwMTe6NLNLyE63uRjHEYFYEHb3aWaWBEaR7ddwfAYrGGycw4sDDxYbbu8gH",
  "key1": "NJ9H7EQWpVaWQkVi8LLXLFT8tvRfdR4z7HCBCtxdyuMeZC3fzFNbf7WSDRcAS4ongQqrUJVrhNERuWRyoKsyArQ",
  "key2": "4oyXT6TLX2VwJNibMDkBDnW4n4isAUE9bZVCRe7cXnNX2hwUE9PUifq4LXG2pxkfQVgJmVJ1hGMDLB5m219XK7vq",
  "key3": "3Fhdse7qPdUJVNdSKugCSYCBhArsX6cHpNGm168fPb7zYnZorYgxLUpYexBcnwvdGXAn2LU6jJhRRboJ4B9yq8P3",
  "key4": "Gosjju9ToEh4htAs8HdMmmkfuCpmzSuLXYFdUmopeQmRxSMXbneoaYQRfXCA96kV9rzuu1ZuEX4CB9Z5LrGSQgP",
  "key5": "5AjSUXBRMZ6VyaXbSpz3NDEyExMnvUwX9Vzo1wKDTwQLY97RFSmP5VaXQL9aEmHNi25ouSEZpBtnpU8L4zCJkKjr",
  "key6": "zBKf9WrGw5snhUcGh6Uz6QzWGrFn25A2A4Vxf6opukdUY4XDCiVv9XTtbNji8MwhakUVVAuDtcaKFjddX78zJQZ",
  "key7": "2eAzhVRw98auKbzbJre5C5fSdjbDZTEtg5MRQmVSLtViaTf4waddncDCAWipWV5eDk8MDM9YpztrLSZKEDiwTcQP",
  "key8": "26XVUwsuQ2pg3A5k2DYfwPnkz9hQmRbgDuynVT9zVHgvSa2T2fZtjMZpzwWykpXFxGRd2sKLPDb7SSrdK2kNKVA6",
  "key9": "3XoQLQjGCpnos6tGdEveWAeXasv2yFvJdjGTmR6mkYFhxZimeZLKR1GwTHfiyNEjfbV6dGUCpLvuKQtvwV6nnPt4",
  "key10": "BgvtqZE7LH99faLq9zyc25uGbYJHWb5Q1XQBT3MNpkMgNhfhXQHcVBHfFEFY6raoCh73uwYun9WdtUr6X4TnmbF",
  "key11": "2CPEfBstPTmasxM9x7JMEqP7igEaC2WzNnnZp38DMyZavNB6b1Rw7nGhFq6JEZL523uJP5Tm468fMv4xvzRTmqBF",
  "key12": "44u76n2Rtw3VA2ZLvAGzc3KLGpFUuRLwva1uFDKktdgkxKjrVcjVKqEWCGJYjbJ5RcTmJko7eUqxoyzsXk91r4hK",
  "key13": "3Dwx2pnzFBHvvfu2y5GocmpkwjjpkA25yqj3kQ2KTB2mEXz55LU4zcLMam8phN5LLu3eYsKCeg3deDgUYsohRyJP",
  "key14": "3bwANJjnCcQbN8QyfYbyk6zFxrMQt9APuGbemXqMDqTeQ3uiiyumfNYuN8dEedB7rN8hdvMntGrPaSNfvBSKZxxr",
  "key15": "3zMejX4rh3ohk6W41G2aTgkYDFGRmVvvtjRVRCRVCymipejVsH7B7YBBqVzePbnPRr2Xhxduk8fFM2R7vayMdbXJ",
  "key16": "2PeSwXKyt87LyMQaRRCvYGcbdkYjH6MALCvvyCCgJN6g8yFnSSaTSo2niK3JQHcGLXpjc2THS7tFKMACxXnjg5HA",
  "key17": "2mmD3vduXRLmLAsidHBBWabaFgBkjk2XbuU5R3L4xzXw3ZQGgZhUwziSMLC2fwQwa12WL2kqqyx7TBmAkbKW6r5X",
  "key18": "2gF596Bc99VDVBF9tZuzmprxY5pW47RsbnLmH5yTJM7DbhZ2G4JU2HRAgGmqaJXS7iYiLPyC3J8rpqx45tzJs8aU",
  "key19": "2JbUZN6AZC3coXPDEAncevyogPwr1NwozgWs9Gn6JjabwJrhuMaXawN9RDv3Ajojs74p7XkExhrA658DKTQyQoLk",
  "key20": "3tXov8uq9aUJdhceitvNohc74JjPy7btxYkeH2b7w2GNp8deweEnFcRi55eMyCh61bouXecwca32XaYcevubKTdt",
  "key21": "2gu4XykZDTpCVkJ4Zrwut5jboiK8uZ2aBjdcdFSgSnEm8UWpb1bXwKzFwQYVui9PGw4govnfMxdpgysGyngFanPt",
  "key22": "2R8RHNX3wQMKkTSvQAKpM2dcVYEApkrcxAjGggnFTP7iJicp4qtGBoRrSzy6uMyRcdpWbnmGjhzfJyZfkFyZ534n",
  "key23": "5ACQ6y1f9wexeDEqRXRjkDVzdNkLMsdeeiuBNFmNEG34WvaD3rHMqnEo4eAPmk6KW8C15xZ2oENPrPbHyTdmbTcV",
  "key24": "2JPMBL6aB4PuneSN9w7pHXJPiMMuVLnrw5ma3oe32ddqARtFn2WJgPDkxe971LkHuN7TDJoSdDQETh61zW4yPSdg",
  "key25": "qGT7xvLm7CzvzEt2GBCfVYVevQzGuQ4WaRPrp5VuxZ9D5BHsFPquJW715NAUimkw5SZzm8dTizN5spQ5sGorAgx",
  "key26": "5oTuAbUHSyyWe9QXTaGsKMafYzUunUrUbcaaksb7Gqhc4QULQU1qVdgXvF4D5qCAVf32EWjoGcsaadDFdsHWy2PA",
  "key27": "2zrK8fLcTVwBSZSLLNyj1K7tvcBUaUkxttuzWKUPx15gAFTUUuUpnnsFG4ir2rVyg5NbjFsWx8tpXF4VSgdMyDyZ",
  "key28": "2eap4iVsogsxhzRZ9FGcpFUqTx8LRDCtvGtCbbQcDtSmm2LXnxb774cXK79ZeNJwS8UJUbjy5NwRibKD1qjVQsma",
  "key29": "24zxnSmcQ9JbuRCL7xC4zhuauvzVgjBJbqYzVSnsnDTNSfWiTE3Ep1Wo7jxghiHUYevc7tEy5QqeE8A6DZYgbTk9",
  "key30": "QFWCbVHnYu3aVNQBo2uNZmcHBnaZU1jVGDxphDRV9nZQuC6h9HdZVnGaXXFt4YSRoDLo539VaMVjNoPkaRK1ZzD",
  "key31": "4veupnLNFxJHK6Jpvn6E5E6HCvvThhMRHgYaHMrL3yqdPKHhMDYzmGGbGxLYxmxGZVaFowLmTxZTB9r9sPZEXqXD",
  "key32": "4TAB96r1pi9pagxPe8BWFsXMNRHReKxjwzwsMreN5NWvg6xQfXk4WNF49tmK5Pj1EoQh2mkjqdEqe1PzsyVNgnb6",
  "key33": "17w8NXBYwtgbFPx64wjJJ9dXcsU2PkYUrU3WWx6vHaZRBDV61HpLwqbdNKDnMwdmxXobAM7bQo8oViHqyqovmiC",
  "key34": "4jzPWFkAcmPDnm2eHj5oDB13PHCk8SzC8Jg8Q2ofZCaJ9AAoRUWUiZmK5y5srRaaDmtkXYm2eeUGRUFsVWJWV6D6",
  "key35": "3wGYGcLMMWsxpKkrbuHArACuu9JUkjL9qRrBASgVHMrwcAKgp7owv6uoNn5sE2ZxFprtxE1t7Wa15X44nhrNJNEt",
  "key36": "35PC7B3QxoJf4Zw9HEsBYkvQeG5Dca8sTPpC3C3r2WaSTNCCMPdeKfTJpJsspBBHgUQMTMxcAf2wXrFDzhEBagPa",
  "key37": "3VjbKV5qmiRzV5u5svxno6jkQQXdxV7pgwNbYCQzH3WWvJjni4ai6E117sCwUeLNkXfysz1Y99DfTqPwXoC5mQpy",
  "key38": "4zHy1gDzd2dVHsNx8J3CduyJNn4xCvzVeonS9EhDrBWZMJsfJsCUjdjXMD9vU5RmgcB1Q71xXpuzd9ZMFpPBA2A2",
  "key39": "3XN5yYCTVJcBeFezQ1bbXnRNWkWaeqDDr3HrqY6hZiD8KmEeXEzKMgBDx5E4VZ2M7Z7UTnJL6RVkpZpUxDgmoyuj",
  "key40": "5dXqXTe7KAw6K7gzaRPXbbVA4sbJUugLRHYGoh6agyQ6XujWJA3tVskPGbdTGJQVHxcTtmEuKDkZJhtgKad1dCc8",
  "key41": "a5qc2QYUqkGLTFW66J7qB2sRsu3ujV3fGduf5J89MT92xdqGQvC5kGcAaMiyBRH7hsZXsyNFH5rr3yj7Ci49h5m",
  "key42": "4Cs5RUzhdzZJHr4dAnCqtNwYAB7Ug2wAAaqAwr7vLUKbbBW928Sup79iL53bHqrwn21hWukZzbPmREtaUnvjnZx1",
  "key43": "221UdzRvQhtPsfU8QuX42vF6ujs6cu45wZp755mUkU6bQxKJGAGSPZdHuxS5X6Ss29b9uKevMbszaa5CALgiKnEC",
  "key44": "28kGnknoz5tCSHxMEHpqLU9Mt1jDhs3eyBuwD3bN6YuF1L88XmGiRGTLZvR4zPHxrtg3XQcrxy2t77HuHXFAXdH1"
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
