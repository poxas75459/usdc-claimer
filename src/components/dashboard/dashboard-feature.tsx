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
    "2pjLjjfDQBG4S69Pn8xjE43PjMWFkV4Ccr6GTVkKL4mKLwiD2X42eTG6k1qbobN5HTk8yGcvD8BJYbJtGYRyb5Cx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EHsrEsG8UMyTwigyETemvwaaWCgLhRWS75oTtzHqDB6ojrLPc2UkR7WRLz3Ck5tkruyrhh4UY5Y7wbQaazeoT3B",
  "key1": "36CpEDaujKabipxjsiHesBVrsZQgvDLNFqPdeYbNiC2MbrLcFWihEPmoLtuzvXDMscy6uDGdzKKnskMcmUsNkqnj",
  "key2": "4q4sVKWomjkZMGZa8QN1aUUzaCTWHKFFJaGMAL4qJqThm3SSqHNsERKCUFy1JUoFo2MJmdHfXPNRFdE7R8mdVmJg",
  "key3": "3MYw7sDVQ7EvfJGaL6zBz83aFwVhFpi573p1AkAWLZLsskpgxcDsdfHyGp3E4bJDDuAmQtxANDsd5SFKjJoT1ygS",
  "key4": "QZe3TYBVytuKos5AZ6sQryZY823Zv2645gnUvX5zDTAJS7rAxy9Wt8N8jobvDdEuQiaUGsS3GFNoVsJXJT3kjeK",
  "key5": "2EduYNhS2vycunJD8zZBBzvg38kmHv7Dtu83jxb1LS6itkrX9M7fvfipdXQ1w4nTwqhCQUJ1ojea3dBLa9u5Z43K",
  "key6": "5nwYeVUcTN51QpCvUXtc4ydPV9jxa8sVn2FUptR8xXXvZKJ7KMrRxrBPNdPxXdGZbadKuE2RMypD2W3fGLCu6stb",
  "key7": "y1MTBvEGSVcUipQL8WbmqbYeimehBNAs3kjnA2fkpBdwjRgK9o5vooBMZNgaFRVN3o3WT7VbPMmej4YfNsaBzwr",
  "key8": "3HWxxDDvcLAHWZcrmnjNnzBe3uyoneLJJfpTnfYQNYS4Rq9vnQdjMFbKK781unqtMfKocN4rksNNL3pAudiyo5Ff",
  "key9": "4ZR8W2pwrEbbeiLMUsqKP3qjpEdua8DTa3XbGrMe2yuX9o75JeUaDqCCanWkgds7snEWKMdh6J7f9MdE4ZnNGKwm",
  "key10": "3j1MAGmb1vnhyQiFKQXyz8Q9KxpFirxherFLd8SHZeTEzpWwLWK15zCEux7jo2sKJFqkFVypXpVFnNRHLVnwzLvf",
  "key11": "wRs3LyTijpaEBBtJnr9YNvqqsqip8SoKvjdS2jBgozsRF8LQpyuBCCtPzLhxAJJ5hfFBgr9CKNL8SEeXEP2gK7U",
  "key12": "43xHsS8zGjKN7SeRGEqJFKHr2G2Z9Stqd57pNCowRSVJXa8tWSZiCy3EiGNvtQ7KLGQ2Q5MpTs2QFgr9xoW7ubnv",
  "key13": "2Y4HHscQ4fnPi3w2cKRnZEVBvPPkecSDNnhcg6AsxNsnfZfRL751Zh5uQtDv3zHQoBwmjNfgm2ayNA2wuYzZVf7f",
  "key14": "jTip79yGoCfpX9f3mJbTHzFGQTk2yW7fZYQqpPgVjP4m2b84VA3PnnrRe4abNn1P1am6KcEh124gjW9MVaKBdja",
  "key15": "4ziJuc2CTHAojG4hTaKHgKyTcNnCReiv3WL8HbS8P2xymaFb5Ecy6LyTthEtKybFZnz2pdmRvueVicTMDrw5hmK",
  "key16": "3iNdNefMyWraM2gFaxbqE6hikdb5oT5mtxDgQ2ZFLacZXZ54aQ9Ec1gJ6ZKqLSQLZqTkcuV7rScFek1tSYxtSBxo",
  "key17": "21KnwotFFj4evkEZcewNe3VrkfWBrfNswv4XYcXTxJr4awFmYNeyWaovN4jMyZTzZH4ysvuCtzH3E3Hz35A4TPuQ",
  "key18": "4a31DbMcwkATRp4LS1wjNHT6wt63WdUJUnYotu49EydfmthGnpmUPWvowL3FGmY2rnbkEWrAeyuhUYPnferoQMsJ",
  "key19": "69MHPVPnUM3e5utK4ZkDq7tKd6j5N1jvm4H8zDvCJWXPMEP2ab8fBtefVcjKCDChRCnqwf3srRcGVj47sr3JcKL",
  "key20": "5cWZtxQ2GzwRfyvithB47jCGQKkAfYzkmaJQT6jVZvgxcrBn1FnZ7DejT36U1gtDmiCq35cTR15woyGpLXHG7P6o",
  "key21": "2jJRTfThJcXmzxpm6MrJwHHprTyNhPtVwm3geeAY33UsRuSxc9EqpoEgBwdnXn3j8ZaodgHMtoovFqoz2q68h3ei",
  "key22": "61YHsvbgXZoyG5torTHtgQNf5pFQ6gvsfAHoT1GN1N9QoDqXjGBnfWV38ahhTHtruHnnNzEDXZdtg9JaiUMaNhWk",
  "key23": "5hfQn4DbXTds14xFh1PkFV4GZhnshdM3pFa5MQcRSwoqryDMFQKwfB64bPzumZx4HFLD9BXRzRHzvwq68RSSSAML",
  "key24": "3nSKkb1RuYhFgVe1zLjqqZpSMNM9UyD6QSXHptF5mRYtgjW6PV6MYEMCz5VDtkMTbHwGnjFepVQXtiuYmseczW9t",
  "key25": "3gmMsH3VwQCxU6fa1JdLKHtQhXiWwnMCE9JhBYJDMUgVuP5QrfBeGsyqRDGapq8xQnwcAcH1B3ox4cBbwyVuM1Pb",
  "key26": "5xe7WBg6jctgFyhtWnwDNf77cz5ZeN4KDWKWkAMiWZXyfEmgJHMgaZzijATqTuBqdKPDJdhFZ4cPUUTV2U1FrVRZ",
  "key27": "36LsLRCXzBnkS8igvar4higgrromJzq1J4tW9KV5ZdE8AiHnrKPwHhRyF91rUVzDHkuLBCm5LjPE3yLjAMKumhdp",
  "key28": "4RptSBRMWoSvAEqJPYRV5sVhb85avAABM5YGy5RFMuYsMR5owLZkWwkcW67N77TYEGmX2KMmeAqZpwZdsPyM4djn",
  "key29": "5hggMQv2mc1bd5nia3uqnhPaS3QUkGQWUgE5AhpHWergqV3YuvUrdyYKJz6hG8C6jpvA6ZrctsnLJzAWQgjc65eG",
  "key30": "4cmUjf5x1J8seUi8uVNVeAZCMXD4iHqQyvnqan5RBmkTsgeXc43DzH82tj3JwEZPi3rS5pCtHowAafdcvhnNrmB6",
  "key31": "2r2Q9ArtuY8g9BrRwPpTW8Xx3J4Js3JYteQ3bV8KtNHwPEVoGRugXrXjSTVxRWNoCika2Nw43q4eE1BLC7PJVPnp",
  "key32": "wsDJxezVegGr9SHHUGd22BksEuWR2oJMedRZpQFDJDQunL2bvek8vi3LThpNEfkc6KoqNkR1KwoeLkrBRqeWUCF",
  "key33": "5FPUGLfJk7fceGeu1DspxQ7tSS38RX69MmY8CseiJKdUu7fcPv1qFQCa5ibEpg1oVBeimJ7YfgYWKmCfSE2JBVAp",
  "key34": "22aw4a8ym5ogVKMu3AkUgR54r71WzTCN4LZGVPwJA4upBnMnvqh7CkByWCMabCAWxz7FXbZcjj5KuzDvpXXAWcnj",
  "key35": "5upVvXvhrUtJuHzC1ccdywbyHT1YdLTvMHAqg1ULHSRFvqz3cQsEYuJpf1UGesUZZYeG6kUvtUFR3r4nQvHNaLWm",
  "key36": "k5EZZyNVVc2EdeJPDFXPurer6KaGSUy9zR93pR5wFjDmmjG5d7JFrriTgewZdjJCFyxATybp2UDXmxYmABLAbN8",
  "key37": "2N9dy26oTRJxx32Rqhu4uTifkXPefVvnvcmzZAJDbUgDDQddUfphipCYXEhJWrKcryrmvoezYog8fTUEYXNpRkPQ",
  "key38": "5DdrH7puUSWLXnCQLXfyYmjpivC4kkQa6wyDMWydhSJwbKdZcozK8KffdLVFqv4dW1niY2W5j5qTxkEviJmi24PL",
  "key39": "ZwvFyETRUaJe4cdPjLbqKG2FdaWy5WsXMXTqqVPbBtzxwLg8eAXLcogMSNutYDyt5G9SB2JfB1VvU8ynhuba5jh",
  "key40": "5HECW8s5TDZB3Vf9CdWZPbdVx85rjLmdoY4DzXrLEaV6gByKiyNLCsRgPxta5fk4k2yBWrzWHiHPtTH8SCh7wD2A",
  "key41": "33fksiuZei8rAJFQkkxLZ9K6DgeoD8d8BkPsFr19yKyKmJqBTeGHLxmVg77oWrUXvJisUgZkStjeDXLMecjHSmVD",
  "key42": "37oViiH56KtQpuSy97wfdVmGRsdQfiCDXTfp3JcdgoXri4AEEyTMN88nZQZekBE7sDtko6mrPGi4jgLgG7ep3nkx",
  "key43": "g71Y6NpFSAZue2Fhpq6BaR9iniZbhRFwPgtYKY4ZnJyeznsv7ZY1o4HmH83YqPLDJbv1wjGctUNM7ptfV2sNc6u",
  "key44": "5yX1Ebnbf1fPSMQXhsTzKr1At6LETeqR2MAYPRfTtwHBv8TXjMXWRAZMvz7iJuKKhNPwCCWecC4UKcvfeuiyw2Wo",
  "key45": "4bXTqAWyKoi1bfat8TN1soUFgDeuHV79FhJ6mKGHSc1UX1AZ24Eh51fi3bC8Sftz5w4e8nELY1UcWR4hdERu4bRw",
  "key46": "3S7JjXTRw1STfd98iEGoe2vaVErjSASg5kkTbz2t16WVJfUXoXr1dS7XtJsfdUpMwY3P8CQ3ds1P9j35LGHpK2sL",
  "key47": "qbapoDwnrko4Bgc4GT9vMKE1sBbiqU4RvujTsSwFx3RAjyGstS15wxz4jDsY96vJrpvbdYPFMmUn4Q76hdedXAX"
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
