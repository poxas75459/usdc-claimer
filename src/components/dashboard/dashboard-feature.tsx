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
    "2zSpiurLPMLdxszFERh4WNZ6zmm1ohV4GEChHNcPfb9v2hRrMPQxSeK2UNZAnsDNPRXLQi14ornhRjCeffmPSvUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xnayCNeLXcDFzRd2vTnhSaAckET3TakcAu1ed8sZGGZPwyDeNqL9F9xUeysnufap6kmDHozQDfpUZrGzp7YtR7c",
  "key1": "3b3BDxMQQh8pKzKXf6Y7VRfiKk5KhtJPc6EEMty61UFyQ2SJ1L6oNsMVop77Gou6ZjBcnRaMR6T5PosfFgTavrta",
  "key2": "5QumEMPWEWASjkKbDhiErzbfH1yE3mid1tkdD3CyWn7m7HaWE73ajLrziM67jSvC9bT3vYU8hyQkZf2hmunxuoXC",
  "key3": "3siQJ4RVAAVLyp3GWJVeNESaLG5Twuid8yA8U6hSx2kUjUfa1vzn4FEuboBWQGE1gcjteAUToeMRB2qSnzr3MeDm",
  "key4": "fuMFx7HB3drpdcv453djNuhJs1eT4vvBdGMgEuDmGJpjucJNvZuVMuSspSDoRH6wKyeoxg51r1qLwDjDKiMzkJ4",
  "key5": "3HSP2Jw2o6ufpZyUJHzhczd824DMj1B9ntQ8iT4grdopdkHtCaV8uTBU7uLm2yynn4NS2nsoZGSmCjuMuLJt2akY",
  "key6": "ZRfVG4sS7G7eXAEqVbhLyN82mHcWRUMjFd3K91kyxssFQidr9LFQZvHCZdufKaiUTqMukcgYCNLqCx5y6yQNtYu",
  "key7": "5e8SxKGtg8wmtbWcr9Die2eWxEdk8w1TzhGCnADvGT9YKMiH8FCFpGJZcjBP7xCEPJpwmz5jRRzYaxi6eWGL5zuL",
  "key8": "2KQSuiPrYxrqiUVfHNxyaWfHJepWf7LSNHHMXNHNhGBpWuYggY72BYwoB4BrrpJq5h5QGqNwH5Za2bKeKrVdvnbx",
  "key9": "3Sdidq6sPtEYsJhyg2WKaWgnVPa4VUQRKxYhkzzgidTbt1Zexq9xf7fp43qAf25ERYmpdwcya146aoCxdBLL4exp",
  "key10": "srFwkchi8HJVxuQDqeWsejEvMEDkhrykkmVSyPWutad9PhSyandkNA6w1zVm3s2pf2F4smXnX9NVtgrSQQ55hkK",
  "key11": "45RFwBgyGhB83iYLU1Qfr3rpL22gwo3VRLL6j7cZiijM1iQnzLfzZMMYa46VEdGKy1PtergsXLJoqSMs1rE6DuZ3",
  "key12": "5vnTrgwVSh48tcZRKf9MBYQmiZUoU86EcPNX5WzLXudfZ5KEvEx6e7pXDKi6Q6epAtwtbux2BZG6MNZHoLaRPujm",
  "key13": "66YYo5aEu6YwSBmJpXEQB9XHpAMxRAziDZPB18KecLrC2UrqDLgdazoki9S4n4wSUQgiTAWebtGsmn6Kz7JzEZEV",
  "key14": "6pULFmiF9M71cEJv3zMk2UpEpv3YjZ6jr7xJridqrotwmTiE7HHepZAFmuvaQZxNnckhoLFiGPg558xHC7FFepi",
  "key15": "UYK7VtQ6B5MA12rL7DLb4bjAxASHeFJduJmD1UyX5oaDKXzjPT3NU2Rba7xRxBtQG8VgBRgZVacCGeYhsqsQxz3",
  "key16": "3v8N8pHYaAprxW6qeACwpt3pD4DHEe4hDDbfidbcasNa9L4Z4cwFzaKsVe8wE1nncgwdnLWiGnekF8rFVwEVXWhL",
  "key17": "3ykTSook5QocR3mLJ7n8EptbMyeU2j2Gg77LnubmUD4iRJNQK5gCV9VwKZvx31XV6BkhGvNxJzgQwYhX71QsrMSe",
  "key18": "5wzARUQQfLJrP8zgPQrH1geJYEYryEV5hG5imfPQ8UipUMgtNX8xqV7dFeF8Awik4wLnCzPemfTUyDFByswJGXvV",
  "key19": "2EJNyY9tRfAeEqpSDjBxhTyqwm6vwXPEYn6iuuAALeg8fsPy8WxRSh8FMqYVMJxwjCfDXnbK2RfrVBCdSKpw4jRe",
  "key20": "4ywFjKpWFPkTnPBRoWES3LjH93KChjFQHBL6YhEovZ96v3bkt1f35pJh8VWxV4kXjFsv3a76YQLyj71hhVeQswiD",
  "key21": "4umB12J3378QxsJXxFGoi1aVbWi5KKiVqHM4T4N2ii1ucq9g1Rv2di9sS22PCZ7E8RtjDbxLz3ycT6Yv1qdvJHPy",
  "key22": "2r3DnQz8Qqa4UzGCvLDsfHYgEqbVzY8kwZbnPJ4UtVcDhd6TA6Mmf2T496iGtrH8RsNoD2tBVtAtDPexGUvVoNUm",
  "key23": "2LwcxSC2AsNeuZ1xaRJ5fNUUf8j8sadaYVUr9HxWqgY7s5cmTUjUMTAwbfvs1LipygtMREigFTmGJCpgMisAkguo",
  "key24": "5GuMLGp4SE6K6r7wcjqweSPEaNfLVCS9wMNkcqJ6aCHoRr6jTFeFP6FuQ1vWyoEDCg2QCxmxR1NXA2vbygXUwBtw",
  "key25": "2jy9t7fsCPjwT29Ka98Tg2b4E9vkuQ43ALtcqVYjz4hRze8ZJquUyLM2cxzjPHhpGFP3D6W1iEFL2z45Dv1QThVo",
  "key26": "24n4CYyz9yBZwRNFZoiNHvVwdyRKSRwzCc4Do8dFYfFH7tDqCpPQBQia6FBasjPzRforUhv71DAzxvweE2y5r8Cf",
  "key27": "2uNEm7oXajEXTtiQRELfSAWEDPAxb9f75YVTv5howiCiQUDGT3V6hVpYtR9BZWjnkAeLqDNmCMZnm9oBeD9Y5ZEF",
  "key28": "2jQB6XxkkHbYN52biSsDuGCc4BX2W18nfZiHnGUFQRDC7KsKH6uNzp9jc2kVAe3D5vbNo8AMxrfeZzj9zEBQDqD1",
  "key29": "5Uj3FoFZ6jhmnGkPJFwLiwaEG6t3W3uqM4AP9H9UfaJEgyLV6f5U5ZNLAa3b3tq8w3rqqTXZ34V4KKDpZ6sTGvRQ",
  "key30": "SvLEFKJbtTkDgfLL1wnmr2Ad9QQD1uHRfN1784oX3qYTdohoUsa2SbcXSnB9xFLbYbTtMggZWYwXo39ymiDekF7",
  "key31": "5cL4uWva3cKwSWGy18PmbMgthdqnJccoCXgogzve2AnjjUyikPxQuE879d5RuSX3KzdSuPLYPdgwX2RQtxoyzkSp",
  "key32": "4KHbmgboWBi5FnRKXwrU5PisL1ARP5PYQoTHqxekN2yKSNxveXNUcB7HgnkVNDdXL9siZ3YgQhZbNmVZXfv5LiPM",
  "key33": "5DsjmtWbAnoDcn7G4QEAT9D5LYYFPLArMA7cSkdzX6L1qcZ5HF1nvHPeMWE1sUYrJaC4D6pnFcYFhCVBUhtR5f3F",
  "key34": "WZ6pDZ6szkbJTh3qgWBravhuANJk84BR6rh3XtNVCARNcAEctfQtR7pYWbK6diG3h4CaXsT5z1ZjFCv7LNCi12u",
  "key35": "2ndggz2dvDBASBrKbqshgureD87EYMETBSpucb9b1L2nuhRV2s5KCuxKfS74VZ215yAkuwdD4B8JQqwRx1fXyjVb",
  "key36": "4Z2TUSj7U1HdFhNhndsVpQUZW2kwNnFN6T3V8Jj6kFicGyB1RC6muQ2Zh71F86RLGLdbWU1ZwbvKt4BfijRn6Dyf",
  "key37": "2yWgPDM1Uk2U244dpbjNdkW4F8iHUcqGUJtv5V8f3rG9VhbybQR4T7sJgfD3CJw7qTeWZ7NsNe3ebzyiES6kj2ax",
  "key38": "3WF7DviZnqbrPdB6PJRe27rjZnmgZWcsjz2GvisZwbzPSiMEeRDeQUiCRRLFXpZBAC5wsm6r4unv1cPWvE9Bbtqg",
  "key39": "62PA1RMy1xpo1YTvMbJLtsDJQQZGQr6XkRWvtr8oryxLoSnSbCwh6bFGW3ZM5v5b2VymPvVrkbkQmumC3GohNp8D",
  "key40": "2j6kCz7eM5NmY1sAXNLMkmfvBmkPcvC1PodPwPTk6kXExLPUZEG67mCqwJ29V1rbG1AV7Ap6pFQaRLbH3JZimhaW",
  "key41": "3RMd3B6nDHF9fVDLPuBV1c4PRcAtJeFdvprrvrQDwRaTRryhPzn9D2z3CtZRPsddMifqDjmj8PjMxN17rhV4ihwQ",
  "key42": "5W1uhByiwQJrhNzzTpxXdV8Qf17VPo7hXoY4uAYmCQFPAH3vKPKde533MttKpiW837v4q7aWc7x528pkDxWhm4To",
  "key43": "3HLCwkB5i2zsMSu7QMxnEHTc7nwM13tszmfKvXNmmZvphtzFkTeyj6oFnD36MvTDxY6WFEiX52FFHbM578PRmXZs",
  "key44": "s4C3fHDsfGReVNooysChf2qPrTMpLrpatckZEZn2BsfMFhDJYnjYoMdURkH69hRyEJzJsmVLMC9wEUPj4PEJ3dG",
  "key45": "5kFNn28g27cjFaZ2RdbGhbxizw3iyN59ySPYyHAoDK8f7knfYC8nbh9bsKuDu5D562Te6551Y9Ybr1T3EcUz7w6Z"
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
