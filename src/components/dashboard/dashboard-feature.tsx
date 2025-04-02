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
    "2UHVEgVxuZLpEY69urkW6rA2Kh7GkxnqBnMDUfVWi9vnvkzUmLMvtQUCpMXsaQ5WhT8Ytwy8Cr1XvBdnv4jGT3Go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mi4kQNpNQn59po7yroY5H9Dm1Y6UWHZ8VTSwC4dj2MaBJFdSpbCJFTMHbgekLAjavZogBjvsb9QyTSViYwg6Tej",
  "key1": "65k37DqKwpkozHUWxVjCYVRr4NYUwXWPrtwSwsUaeJF1oXQ4Qd64oAXQFaCYqJs17CHbeis5MpbUWoNrA4ZCeSnT",
  "key2": "ysw6f3uQ6bZRQdWk91gg2LyBWsny6Vv7wP9EN6t8kXhhxai3YyVeSSCZFnoV4qHMPkLdjct999hsixeUZr635qy",
  "key3": "3bX1fddBkWbL5buAMFTqQVD17TqEB1NbxmwW8a7xobYRVp88ekH3xhV4bQRx3pBVvafeaeW31eT44JrJzLtTv37R",
  "key4": "2rfU4noDAKx87CHd7QVSyxvNbZ3LnuAsRfQ8rMNg7eZoaFBH8vJsrZDntLSucEUmq6qdFXtRDF5JcFKzJLvTGJv1",
  "key5": "2B6DgX6aYkHwkDksSz2tsnmWJN98vmpaqSYSn5UwrhUrnwk7kHpC9T6bb5ijW77Xzednjobqm24csJwXGqXdbvde",
  "key6": "4qsL78cG4gh8ced6ibHhqn79kRq1w7u8NApZRj6CTqvXpyVNp4rB7DDDGCi3X4Xfhw7P3TE4aMDzsR9B598Va2DD",
  "key7": "5QEzuFkxnmCpAxMpQvVsZekwYtjz2ud89NtNAmhkpRJTTxL1nro5vm9KuL5dhnEB8VPyYKYpeZACCjUtLcvfCFhm",
  "key8": "26PQozA33GwBao12hdPiRzqZhtHLAm1wBN5Tu4aQytjAuTrvZ6QB2thktwLMQkrpJQ2ZiSY19j8vX2GuQAsTfPYt",
  "key9": "2D2ne9he5s4ZYef4JM4z4BA3LvPWdStERKKq4GT9QSaMbedKRbPxp1iMJvRteCiFGEsj11WVAEryMKumygxSARNR",
  "key10": "4hDqtstAeUEJh9pDnyhCTAtYGaziqyq3ucDafQRQudhNoJ8FZ7suzcETHhxt6KrJqi7xjZ2bqz6YPWMqDZXVpNif",
  "key11": "5jWCnEavLgnD1HpfKiuMgsHbh95jzFNt1Vx84gdWWiAQuFBQTnX8bwbVfujLVW97ivNRD96wpvEjgzPfaL2WJsi3",
  "key12": "4heotZc1pFcrKUjbMp5PXe2oHW18WNuPqfLU7DfdQWEs76sUxqL3CGeFFYmL5YDqcZScjYA3ZgaKQAdNQXBShd9m",
  "key13": "cexw2CpEqJFMmkfYjGXKRv6bkiZ3UaNjzdroFmtWBeKwzSgqJydfcBeyzNA4QCr1KSnUxxwb32QJ1bE8ZpCMgmb",
  "key14": "2Fxj4Gxzqxp1HtULmA3DtLBUmTXawya78JRga5dLRV5MiZxvd7jsMCZqTaxQHxn6sQdWvK1WJdssSZohTbTJYoT6",
  "key15": "vzXS3vJ3yYhqt6JX75CCWYnu4WSuibbi2C9VRnXAw8uSmGjWGzU9mYfv8ZXMYWSNtKGN6s8S2AqR5X1sKtACGi2",
  "key16": "jDd2MrVfDJ69mdSxUJekAzy6Gg5jQE8SV1nws33f3gW7UD52eqDTqWkpynpF9N3WWQfnnVDbqF3rd5RrzahpXc8",
  "key17": "3WNKpfCsEGGT7f7Y6XtNrH13xEvaoBNWLvfwAsYQ59v5qJ5rYnARQGWxnN4mTZkxwU6xsFDFhauEFWCvh9JMjw6a",
  "key18": "2FcXpLAkhpN8dQrSiTc3Pc1pkLxyKxjFEWy7y5uSneKsCgeWL5wpYSHu39swkMLTtspG1oVJSPPSqxuphV4o85SU",
  "key19": "udqDregAU23HTqYKCq6gPwEMrHKBbex1nAm2Fg7fnMLSyHBEi4gLKZLCRLsrNTEjRTCAuuMnq9Y9JVSoBq4CxLs",
  "key20": "van3vqYh9BZ89MvfjGbHVzz4GuMeVbLsG3Ek5NDN31tr5Gy5XLprrpf6fhsx5AhH9aV9c36ht9JBdC93Z5X3YG7",
  "key21": "2aQD1cSPG2a7j35ASdAWVEkQZBSbavxKxJczrveG6iW7NaRT2xh2QiyjeeCohLQMHUPnYh8TXPFY5D5vuDmFBbk1",
  "key22": "3BCmUV1w2BuzZsySVJWsc2wx7kDDRqQQ4QWjuuQApqTWbmTGhLzug2aoGdjYtD73eJHCvgUTcowMcL5MXCcXGVFt",
  "key23": "5VZNAQJHMce5cpa6shGwBp15o83kuBsKhiLx1V2xsvgCUKg65fxuajay2u69gKCFQdr43DS9MBrCze1zmxpzC3m5",
  "key24": "38bHh9XJz4YqLcXQPSGpqu9UMUaWp5PeHowaXRdYCwzHRq15Sco8RJRUNRaFa8tjYGbsRRFd1fFCV9yAf21iHsWa",
  "key25": "5fcAgC2zCqikpqJnia2qeM3mGye1jTKYdtZaRT9yvSp1PE5VqVgYyg4fZdrSrPyowXifyX7M7SUD9BJTL6Z8kJYZ",
  "key26": "oc6sfxsRdH4YeehoQjYNBWRzG9XVDSjmaLLU2LoWBZGWUxbbuuHbPLhJjgwYe8A7YEnYXhngFzgdUTKP6aFgqmc",
  "key27": "2HH7EK1fWg1Bbwb237P9MLEN3YWUkRohv4iHLE83yqA7e6ZrTcjdbTU5VZ6DScUJgUwy7rGSSZGtji2ou7aaSpPT",
  "key28": "4LY9JMVGM5hkW5CYCauNuCiYtZyrFMx2D1enihwvjUm9kuL2FnBjuhaKnq5ritTC9MM8bnLTUoY4QBprUGssM27i",
  "key29": "4msGYDeb8X9ZCp68iDL9hafTYzkG47EpKnMnvcjLYYaSCeyi9u1EkrcaGEnGqMhCsjgZgqpcaz4h4YtkLyPTABH9",
  "key30": "4h8wYvEjAhDccEzd14Ch8KhM8JtPG6MW7KAPYttxBJKqd2AaNCiJT9oUXQr82pxjZXoqHd7TXEJ4gyBXjYKvcMFK",
  "key31": "4tX3BpS6R9824G3DtUsVLvDRMGofTXhA5PX6MpUmnhGoBqQtmvNap8TjPE1LUAaNMxvFoJdTLa2f8qxPn6BRWAQh",
  "key32": "4Xsfpn3NdB4LNTBe3c6H3fdFrbQJzUJoRWJ92NmHsV4uJ63dBP1vKBnW2yRoHtbJaNveqH1EKybA5Gg2pEHSuga5",
  "key33": "272nwGcpXXrqzYVLbZcHadLPpCPUEBFqsEY47QC28onNHEZxXpc6YoQevCdWqDhGkish2jBmy8gV7gU5m6VUHYWm",
  "key34": "2EEB3wNHcDJ4VyVgRwVoZnwpej4odT6ApLrWHQZa3cebxMFU2CP5ZHP8VetLhf4SgRMNTo1PAwjkobB9KLopw2Vv",
  "key35": "4UxDTL9S21VMwW9HvTtdTB9VTY33zX8p9rjCne5D2wL3M9837Vy6Cte1JXMtfNCuEeuddfE6coPVFDgKzFCwQ3Wk",
  "key36": "5Q7ooWjdyE3ke71JKqWhbeSfu1gNin7pgYspcp737dzxq3pg3e5WCn6mbGE5dV1rcwUWqpd3buqczB1BfEiFFdji",
  "key37": "3q46mg6KBRbLHRYHzvKmX2E1qMZJqnaKPKXDkzS14zAXxXXpsKXW1zku7MiRSVonKqzwiMHp3bGaCpNsp3ps4624",
  "key38": "2GMDV2PXXcfZALzoKuvZrSyQ13EodnwkcCd59CQNGAoGgxznxgfb1zcWRM4bQK7woHar7ihB8tvUmpfiqSECXcfg",
  "key39": "2vZT2PxkxyQpirVAxgBwjiJpn68ReTMiS4MUy1Et9qY6UfMYwfKptEP1cKzNHj3qtZguEp14u3vitgxkFkvRttZY",
  "key40": "3X3ycvn9wrEvQg3i5ChxzpDgK1MZPSHyQWJi9DmRWqQXQHPQatb3W76eWedqvYVUT8VLEBC3Dux3YNtCp7qCnFc4",
  "key41": "bDFt2tEjvTLSZ8m5dTw4EnMEK1G6pVJVWjH4wmDkwx6gF5TwU3zc3Z5Jjzgn4RLGX8mZ4Lj2JEcvkNwPwDYS5Kh",
  "key42": "3AhQGLY8aPRFaRTRdbsjjXd6Hsy2vSb6FCCnoFyURbuVhsvUPyEd61seYtrDzEMQrKhDw2btKym7foDvpNJxFi8a",
  "key43": "3RB1nYnRxnB9RYrSbhtFnqxGb3SmPWFHkDDJTt2iXrcy2Z67S3eXcPw5Do795tkHh8MEXL2rC6QcFRAkjEJ1N7rD"
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
