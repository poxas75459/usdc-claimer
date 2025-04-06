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
    "QYMJKKXCCQ752ZbHZfEES7chnrAhUoStyWwATHC4YyS9kwbGbR3PdDQ76iZAhTvnwNYeZnFBVTWLW8RmisZ1x8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h8geuZFQ9MpLs6WmgWDyZMXTuJdaZ1bdxnpR932rNT1iFGrfynbKoXPqy2svWkRrbgUsHTP3Mjpdf8jumQvzSrK",
  "key1": "4qF8tvrWe4sC3MUz5TKUFRaaLnU8w21zPjPxTCMaBgvErbWKdyzV4XMZzHftsTEDvEnfniH5C2377L3zsXv6qBwG",
  "key2": "4dE4YWywJ55mibYBK2gQgP2PmHjNY1JxT4V7purJyXgkEkNRfWm98Gb9cwHYW1XGJYnnsZ9yHojEREz5G7SJy2Ly",
  "key3": "5unFrMn48m39pU1dYE11hPYtmCZm9CMdwvCFKoCi82P11mDz3EPJqsTjHAUhvnqMXRogoTebk1SzAjUGofcHxfJ9",
  "key4": "5dBKsvDGx7FkpGe2etrRVtTKw3ePLrm2hfWgMfLF6BZRdias4Ro5g2CWzMhJ7xAp5KUgpppdW8zsr5ngHEhq3fxe",
  "key5": "gSDNQWnoqizzD17N2irk4we7qndGyp4sCmC4DXGBWZkiWihxTxXXcGsRHW7Dpjfv2gAYYZMERqak1uUparpWqiC",
  "key6": "3wUzXKxrTf2QH8w4VQeGoMKRRrKfQ48cFx9KEv2wYzKJ1mbpuMUufVY5FEa5WzozRfksRBAf5yFRAWyRHwuvJh2y",
  "key7": "43PmNLKiUaTPV5KbaPbPfkQhmaWxFf9LKLbXnyaYUFnyvxkj2qGufgDXKAoJ5c4JUWicpiZuGCjYxg6fPECvfS73",
  "key8": "2Y6k8Zs2Bfaw4bVnKNW7mt9xsgqjrQp5CwKYPHL9C9ZLhkwRYGoBss8UjSf9zZM9DnzUgnraBS9ezP34rk8kUMmX",
  "key9": "2MYF11HuwQM1c1hkhY7ddLtiRFLKCYmQaVTpVLqSeNNdiQRw69mXZhayMdQEvT7rpWuDpq1vqJ5pmHs2pkenkE1S",
  "key10": "2JkZu4o74DUjzXEi1srqAayqMrGxwVhRxYZCFXp1KmqU2MEG2eGvqg5UYeVo5Tf6PMwFzpfBSp7tybgAoGcaBfas",
  "key11": "MkhcvzuJtj1MqY2KrECZSEXSV8GvHARVKUC5YsUSUqiCZFt2A6XaumtkVV2baTxv5aY5gPQ2tx6ASZvSDWyeaZF",
  "key12": "JF5HVrsB1xCVPZfJpjyyrdLbYRt47rnfMaPwgZgTGdeMC6n6vXHtcAHHuo98CVJTMCvvCkH93qSFvURcg6rZki7",
  "key13": "3j9rhctDkccSfmEmeMJBsfxG61Tqd4vyQchXfBcWYx2WHTM1fKH2uXTUEg68LLqQzJZorooB5EfhP4Baq3JFnoJ2",
  "key14": "3aFiawwcnEbuKJLG35ned7kKtynixGK3jmUnTSwCkkGxkHJuNsMFqgvJwFYQZ2eSYeGJobsi9sfciYrhHwhiuT8b",
  "key15": "5dWc2QWqgJ3cR5ETrAupnDMRB8iwTLM6aG6EZsfpcaQTS5nRdk8cGNDUs1MVEH8S2xJhEgyhTXwemow6CZfrA276",
  "key16": "2heckyZjxYncrg7tiMrJ8utQFtdKQwz33xjjcZqcxq9yi3mtf5GrkJb36tUc9f5GUmWWeEvvVPVhcvFansNQNtAe",
  "key17": "weS94SjRPYsEMaU1Dx6HqjckrXqnwSmN5XCqJRSoBGJHBvVXuspgkYUXeSw4C7wetwse78T1wSio1uSSuQ2XeDb",
  "key18": "33wqLeFGdvQq1seseGj1ZKDkVM8fd6P5ThN4Wsq9WP2wr3JvwsYSNasfjSZbJLxfAWUqStLcJyV2i2PDDjuhE9Qf",
  "key19": "MrFo7ZFYgyuU21hhZNZJovDykV4SaLFta6Ndua1jK9G2JTQjTUKaXvxuQJipdcGcVuHapyK4RzwZBanYiRvLSbB",
  "key20": "ZWkkxUbiaBb1LtV3EoNRuCuKWneVGdzTD3BDyDbMbCY5Tm65o8RExQQgkvp1TWxChMgqzgLUxyQ4FYix7orrtsK",
  "key21": "iWKf2oZkjhrDxWzq1jVamCYGQFd8eHDYYzBHf37zmYKSs4d7TtxitrMjZq27rcGPx64rEayKhX2QoUCuRSsoSBU",
  "key22": "pd8PtkvLwr3jcXid8neCE15QhW6TVGXE1zv9CzK8hjCkDcNx7LzHbuZMbDThBLAB7TpLUNkPJaLCsPwNXkzQPwq",
  "key23": "3mpRR6CKcVKpzaNe3pH7inxwGJ1onAhcKT1KtGVPwHDjdGo1vUEvjTPBwDJW31rs6fU8xhQBVCvnK7jsSBXqWLQA",
  "key24": "5Axf25dLJjs1BE5ohEab4jAdabV6Ev68Zc7rBsJn4LCXKJRyprAWNdPR53V3yH92BV59iwvyhzPinyi1spJwJx7d",
  "key25": "4Xhrp9CU2b414EXu4uPwxLbWtqy5AfesQLbTmctR3VybNiJpniZEkXcrT9hmTLtQNn3wYZNsgcnJ4nsPdf3MYUoC",
  "key26": "37PGU5Re57gPAndU2GEJMzkvKx9a6HZXeidiQxc2iHDB7DX78S4cuETHXBKEH7W7kfPZxfZngLGA7TjXrZLonBd5",
  "key27": "4cQhT9d8GNjdmhm4Dp4hq5xv3611zT7PzRcScPwpymq6TMDkUqr1yE7ipJR25EPzBEXh93RVknzberQZf83uCcHQ",
  "key28": "5apN15CskhMNP9N7zc9L5647DTZTZwxcEyb6tQHHQyxknQHD4AUZ6Kg6zS2ebQQryrPzieDduPwgZYEfkedf3Bx5",
  "key29": "SBT8cBV1a1tbZZrju1W8ufjwTS5HtvetsvdXU93Bi5qTNGozFfnrgq1QNoLPTVvWmfdXDcSu6LRdypfjLBgtTjC",
  "key30": "3ycHAGa6JVFg1gUeaMyqPEgxqHHk7Qe6gZz8ud7WXyJUQU1QVvMxCJzxpQHdLbiyBs7JNiP36Y18Uz9TehrtrtQ4",
  "key31": "5nbSNAY7LJ7ZPxG2JXAbYLZhbwQGmGjED2Mkhh6bvacXN2kW7XFDBfauAVL8e3gVE6ajsZPzjd6e3GZerEcT9RYq",
  "key32": "57kazA88AC6B3TmkBkBPq2UXMpD7ZZkDJNouLpovEfRxNCZJKYN3TA4HMZPw6ozRxPeuxqeSrgeisa7LcA7TTa7M",
  "key33": "3SSjw9PJur1bio2Zt7FjRKQmPg6qd7doSWZMxdR3W8LF8p6oXF8HS9arg362nKAx7WyAk94LCHLMFRej1KN8RUgy",
  "key34": "4NRhSwDTXZuRqcMq7j6xfQQcgBNXsWZq7Wxq3tP25NPT91YDsT9XkGoocNjds2mXqshZ1TfqG5zr3Nz1tdYT5Lyx",
  "key35": "3yMTCmmvRjrbacsT9DAMDPLVny92YXEso2T3gYGoSZdz6ijFrhMBB4UEc3S6Khq8hJhyLkBHumqkzxFsW9YUZipt",
  "key36": "zZL14fhAaBe9RBPbb1vLRydsCgmbZfWVAJz4CcNijaxroFXiXDwBaRqSWb5dDcXdLFUWjrnRwbDd6zc5ig5MRMs",
  "key37": "3pn4vioPiRuJ6hA5ABFKifV2SwqGoVL3b8hizWXVDhX78hjquuxR1wcWkypWiCuBL8Map9WoGMhQX14ys1W13Mzn",
  "key38": "2RjJVeZy5VP9MGiwvrEmE7QcmejHNhnXADFgz9RJJKzMvRasmEKxNQGbLwAnzxNaE6C5JyCpWxmJWpdwkmYRLiL3",
  "key39": "4HRrtK42aKnzk27yXE5MmbMwBfxGX5jhSTfP2o18o4broQCzUMvwTcpH7wFXoBhUFdttSjZv4DDE7wgYruBSw88F",
  "key40": "2PySvb6MdkNn5eVpTKugogYh1kDzyKwcKVDXnfvquqcnpVgD4DKk5vqCY82SNvaVLCm2uHGnrZErp3sEbxi973hW",
  "key41": "4QtEQDxtCtDfcMv6izFVck124WkXPMgLEj1jndh57oCP4GuG9dLAjdZfS9oqzGBfaV7zbEtk2XTPrGjSwN7ZJCdL",
  "key42": "3vJwPmVBpTfRWtTEDmZ232iPes8xu9hGDSknbgXpGGUDMecqGN18ZQW9q27cKWhrQjz2MacB6YjDURrfmA25TB69",
  "key43": "2SEtCzgzx7BTX9rwAqgDFfaGF6E9aKf5D4ALaWt2eWjEGVBj3sVuQHJVDMXWKAvisczYJq8jqBrJyaJXQFy1myw2",
  "key44": "27WtsQF86Hi2nBtiVS3aj7CxRKzyrLWHaoUzrSghy9v63hi86t8i8vaVoDNd9pkyPup2gxeDgNkHgVfjJ1ejb5A6",
  "key45": "J7ukvRxV6xBBJxVXZatceLgEHnWDY1g3MPgpueuSZzqxknxggrtqgVRsiriRV8mYze5noA3ehMA8AEno7wQQkfA",
  "key46": "49M7HCFxrNmyDzX2WPaMPB1DNo76ZdhKJZ7jpUMdXsRvrA4yRsWRiH9AuKat11SNaPskJzw4oZdKqs32HuGaqkuM",
  "key47": "2WenBDuM8XbZeTTH1rQMPMYZvmcD7EJmAt7rJuGsUk3REiyTxpKvCdtdur5SQkzzWok6eJNbbJ73F9U71eSS2YiZ",
  "key48": "3xjHoSEQA6T9aahr6jcoxXAGqoFW1wXsSZX8ByCT2dth6dbXHT57jcVUv2bLsf1devaq5gK4cxFQuXXHu59d6vo6",
  "key49": "3M2jttw4AHefJZL4T49bT1zanXsVgQGEb43639cMoL4hsMeS3iyGTQUC3yAPM1fBKUdz3kuGK7U2fW387qTbwRKd"
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
