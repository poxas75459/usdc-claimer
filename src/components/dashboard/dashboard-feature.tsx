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
    "3L3BTJLtjkoXBCJK3nbPxo5rBfd9su1DkRL4JTPCQZBig8eXwCQ6Qd96k1XuVtDSKWWbDiN8neuPCRwghBm6r4Ap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o8qzJRUJNX7pz6J3iptXQ5EjFySMgJqCGhxSqGgVphpq6vaqpaEZidSiPc22TdB2XdGU2C7hrjZhfxen57M7aQs",
  "key1": "27otwkuXuoPMqpqCS6qtMDXsPNnDz4MnXvpTsXLoNUNAhztNcD923DEhfooHvYbjUme85m4MTBh7pQnBV1LyuVGX",
  "key2": "4tkFXV6Bvt5Jb2efkwCjefma2PhbFrnY1R7BfeegtjaySW54Bp1kAw8hcJyCYyBFMxk9fmkkKsw9drXzcNeUJU2Y",
  "key3": "37jnBBZWCxiB8wm9NQnrKucWxquiGia8RRidM3AhCL5vdXDE7XPsSe7dZE2QWC8SYax9Km1ECqUvcxwq7btitahA",
  "key4": "zBK29LtxRDYG8wjB3DUHySk8xshTsrtgT6YsGJmNcmcqdwQNAE7iMLuVgiuLqrSKjNQHNcHSJmzkt7ARftuJBxj",
  "key5": "4rctNp9VZZrPMACAzRYdkph76umGWMdqZzP4dEMS4FKTBouxXKJxSxwx5S9CVxPgSNURQntQ4qk4jSeMHDrVpou5",
  "key6": "eDtUChmQBMmb6T43NK8hvBJTX2aurGgcYEvGwhfFdKZ2WLF1H6dJpbtD1sXUZg6LieBFSfswSuURB4iAgBEmp83",
  "key7": "643i6QQpeqmYYbVaB1WhnYRkFMeVWFTmoeMU39ddUNtr98ZbqSDExREZMyhCqve2xwVmwUXwTyJ39MYQxJpAL5xk",
  "key8": "3u1ELsise1wTAM1yXdxNqwV7vQkwb8rLjaU22vj7KXdhnZtwbHUqvFahUhLd9MGERcfP35nLmxgqN1Fz56qF4Rc2",
  "key9": "4LrP97GwkJiPBMdr1HRxbepErjAuKMUPyUdWq4MKyj2ms3aenwXRwiCZbrVP7QAFxYN1SR4seMAdZa6CMiRyftXi",
  "key10": "1GLJUpJX4mT5s6jTUVMKQZhWDuK2W21WqJoYtZiwTqMYvAPMTgW8fRtcsvBjDE9j7N5fKMNsGHbk2EPvqhBLMMa",
  "key11": "4GipKjCwJc4p1GE86AjitEs4zJ6S92pRBsLbrJGcLLansKZ67Df9ZDuvgfcS3USjcuH73xGyD9e79DBrTq6S8oS6",
  "key12": "3m1pMXawhF48Y22bHz6PrtbTDH9Fm2jLpyT9uHppFB47uWrP6AkMMDv6T9f3dWoNw7mUDKqkiuPo1XKAqYGraWqB",
  "key13": "ECTWjDQQs6BhqLhrqjAYWNjLfUFcUuqt49u1GtqgomBMBkTR9mfVRsci85oBrgwJPhKpeQJ5KBPPymvYBTasZYH",
  "key14": "4tn6jCg9LtEkhsXXC2R78eFiH9KPtZJQcHjL5m7JNj9dUSpXJ5hwS7iwn9gwPJWkax3rvuxdSju9kr61u2GudBuc",
  "key15": "M6DpEBu9cNK55b884hc9P3VxUmVLbCeykavNr1kyyH2JDcNXEyDX4FXDJ2M7pE4CBPP5Mbj5dnWeeStfX4KseKY",
  "key16": "hcXE6xQWzQvLSeMMrJ7m46sAYP58SumoAfyJqiThSNKcLjcKZT8y2UsoiJUekxv2BRFRwuegaFsvBa8JtTodaj6",
  "key17": "2cLG6YXzDBZ3pJezJGKEzfRLcppVvyMu3tMWSUm1w4KwnJfJziokfyYiwhha72G3NZGSCR7rLgL6creBzhYLXgL8",
  "key18": "5GLJCuwzbpMsQCTC3bEs28gY2MsXqUp2uHGCJ11c55yXGJQewSnfuQdfLVwGhNvk5g3FxByht5NY8DiQRCxB8XUM",
  "key19": "5nWvKrBSyBNfE8mhzkdH7BhTQxovvZMnKiESCiMeGDnYDPjjdMzVMwqXEAiyvAt4v1uTxK8f4tP3t3zXZr17BW6Y",
  "key20": "2U9zzKF7kwPj6dVJuPRJbA79J8p1gSV6XJqyatf3jnLqh8mmDcV9SUJjoytbPwkvi8E61VaSMbwzevFCfe9w5dAc",
  "key21": "277fXYdeNY8vAf5RLJUHXDvrWh3LKQMqVagVChpgfVxU2QEjN4PeDUmxs5fxyZtb6fepgWdoyihDnBNAXwH4Wcfz",
  "key22": "vgbYDopuU74z1wAXxsPSgnJaUC3wZNwXgSuR3DiGb8hzAtwRks2e2uUt6Rn3YbvBqe2KpDisiKN84mAGn36Xs6v",
  "key23": "5hMDmbRa1PVuiMsXnBgo2TgGCj7JJ9saVYqE9tsySdURNrf5ddWdYZYFmS14UdPPDxjjqDJe8aCwoySeuhJThKiq",
  "key24": "2rVkmKiPwunBvGoL96Mi398jToG2PXYagDmBUUb6kPYYdraP6y5zjxWYKQ6zD98j1hrujEtJtLqYnoqKkLqoiBgp",
  "key25": "63E96FPMZQ431gwfSnbnepQqKybbMLS2uo1dyqx4c1Bxun4mXq6u4VE3VDA1asS3N6NRvzewk5xZzWK2y8UnREjA",
  "key26": "2TgyMvxqAhpBQ9QawNAbVK5dKzfk87AkZdNs6m1eNWcRc6Rv3eHGrMGav9XauMDtjruUfUSYMk8XpSxKjMxXsriK",
  "key27": "YKMFuYNMvYDJmPDbSs3bfgYqMFBCsTdLHuB69hBn6izVyWZZgufqNR2oz5aMXPaM8YRDdc4dKx99p1uQhfSUeRs",
  "key28": "fU4Gwo1b4wiABfygZ3ffMK7wH4cxTaaZRBBKtFkTxmDr53LQ6ADqB18Vx7YQoLs4JLgZ2qr17YKdZHxR7vgekQG",
  "key29": "4273kUC3aF24TE5EQUX5KkG23BQkqBhMW57dKtPzCyQuDdifrbApSW5TtPZkDAys6VB3b397v4ML5onqeyXiQEn",
  "key30": "3Badv7sHYaB5vPUvBGU1uPpXxps4Mh7fNJqrqy4DaEoJ9stJ474vWjiPamb3655bTDzaaUqADXvbAUuAn5WPBFcx",
  "key31": "2S6F5TKWN6HnWzzAxX7aFTrho7ysW4va6qFGN4qL9VHLUUS6KDgCPrc8hFR3PboMDfFXABmGkYtvSJd4UY8VpfpH",
  "key32": "4nqBP8iTwfmNf1LDW9BhguoTcPuufGN3jYFbEHTyeVM2gFHHVw9pYgGhpPGb8yKbiBg2DrFGWFyoYMEBu19AB6Z5",
  "key33": "3kAMd6e8FV9viPFkuKEieK4uZuQkcr9zxgLj8SyKNdBZwnRBNerB8HgHY4LYWkem85ZAjuChS21HTknTUyhg2Vqw",
  "key34": "3N6UyEHcM3zVSrMmC7ky2zY14JWayKEBGExvtK6JRZ74zZgfKtjCA2D4Ho7FdVWripycMGpnfYb7MCiHbh2K2t88",
  "key35": "FNx3qpL2sqmoFKyqZSp3mSqfoNumKFpCJB1nkrjrRkKnRjuxPFgJPyf2ewNXDXjtEpx8YTqjPmG573oSPpa7YLL",
  "key36": "3g982js4iLyvE1rGVnRnxCbEg8PT1Se2oFqGj2MYNeoEeAkcPKZUbyReiSHur6seNqmH64u7EYPvBEAXfNgLPm1R",
  "key37": "5FMbUy3tw4JhGso2v2z4TsS3XFANrVpwss6P1gE7goqcfemJQg85co1r1qeNpYM1JPmCuEfFEZZDveQmc2pu9y4b",
  "key38": "9U1QYW8YMwQSCVggSXd5GWabcKsRc3WRnhbbH5x4T1eRDZyScuWNb1JkNdiQRedrMxxYTzc4MT8Ff5iCKWrdK6S",
  "key39": "3sXrYsyysFLtHUzxxyNMPWKBFLtcTVzijd4jomymfaMdS2hVYWXQjH4fRxEUmxHYowBLfa1B3677E8RGW6sF1Q5q",
  "key40": "4X7SrkPSAnS9F2s55m8WeNLfRdtfDs3qk91zH3RJUu7fFiLvXQ8FMc6s8S7x6E683cKAQypsBAxKVnJZVnmL7oe2",
  "key41": "26oLZnpk7HhvaBbqvVbgKPePQDUo4h9fqGHVWrkZZJ21B5bmnSxYMva8Q58LyCXTEhtTJQz9Zyyz8ZHtbq6Jg5Bh",
  "key42": "2ot6u4CXophCgkhzEUB4YUDiKRA4fkPHA25VUhJ55T2zBKPYBPG6SwgpxporCXMGtXGiVjXhizih6rzfNvucapsA",
  "key43": "48FSoBpuXhQ3dtZggJ7eZSUeNpo53nq5iTC3fvvWCjjJGoJvY4ugEyWPMu4d5R3yza9op4aADK9BoDXZrvcE49Sg",
  "key44": "2u9bS6QZZYYfZvJPFdmM1n9JqWznkGBSVEvUyk2Pp2boDu8yByBXEXPWjENzr2tZHZrSXbNp8ppArPXQjwqA1VgF",
  "key45": "3qeJ4FrS82tf2JktHDqNtfAKYDv6jqs2mm77bdzeK4Z6cBQV9oe8rbRwZRyDYWYcvVzJHaoWCuS6yiZiW4FnX1NX",
  "key46": "2SD3r36cQrR1YA1DG2Dcs2WYsz4bFBrP96MzkgD2mo8W3EUCoXhPgbzhFETBK7HNLUustNSGhFi3HcmXeASbDCqB"
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
