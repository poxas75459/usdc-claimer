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
    "5GiTyKqXaxFxGcfpA859Kj5b4sNbCG1iPZh3QHHWtmYggnRu4s2ThAdReN6h9JCP8CcD1tbQZmGkQqpvn8k3Gttz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5in7HxYgfhGzKyUmXWN1ng5j1wyUQ8Kct3u3ySAFxJinz9PWbs9J9yrBXGENa3H76nQ4rei3VTu5jAkQ9tiHpKr5",
  "key1": "wnXMtokHYFypqV3p2z6NkzBCWvfxgDbe3nP7Z7CdAzJk5TdGvWKpr7brh9uiynhTJVVgaRj1gRNdZM3iq2eTBaG",
  "key2": "2RfpBGrwwejQtv3yyCkj9WkfTFTe1n8B1HjhDWXjD9iDQeYFaAL4UBCspMq4HwvQgmRofqeam1KG7UuuwpHfbzZs",
  "key3": "LsLu4hvPKiPEtzcxu8hYw6fqSJY3jT35VqQm43hUNzYfCYqfM2xRRXAis5At9qPuh5AuETDGPHv9pk4pxHvGnQA",
  "key4": "4waYgujvMT8TNrkmkYfBCYzDE9jWMYRuVwwPwpiVYuMe8kHwf2Lc1B7bK1bzdgwZzeThWtg6SpFXLAWYryUJihca",
  "key5": "5MXZFZBv7tFWLwYZFqRFtio1gpTnQERwoGv2f1kJGq6us9JvddRjsL18pijU5B4SwEASUdQ8bgqxX9FM5SPuN2Vq",
  "key6": "AQGhyNxNR2MmuanUnEYXtd2skCmbhuidnCAT6FGTHWQxnmsBF7KwEAPnKir4jdH3Lfcqo8Nnb3MxMSnSfzGuuYh",
  "key7": "4ib5eCQqQ4DnW2nvGqVtFXN5Bmv89UsysmLH2ihSP8cLGpWSJqyYEufNPYnA4QqyUh6QWwjkSwJNvmfHR3v93EmN",
  "key8": "327m9rTDwoq2aZZ96S5y6grTVW3GY25uckkVcfEmpSXac8CVnH15icDu6FvdVEqwurpaTyLRsMegMUofGkvDmSVL",
  "key9": "5gz4yisxwdL19PqQi3xcWNWXKKn2W8MV7WtUYFHA6poSq3woZajyLriJ11ftFryXh4LgoVZUqWnKq7x4uQadH1Qs",
  "key10": "583xXhQirs3mUimbjybPbJdGQfKkjnZpxv6tTx5vkc7w6jUp2QuhJpTsrVRMuE9sNBfLaAdVu8Df2Dgb9syZJ5VY",
  "key11": "31sYZErEFKqLMoUqpMGWfVNTtLvey4CVr9YVZgBJ1YVh4gRszzQRzA73hu2Ru5ykV4GG8nfqtgdPAe5uAkg4tGLi",
  "key12": "3gdwyAKvsBWqbhpZ8e7Mcjxw2SFK7HQ9rh9AjE9d9MZ2j3Qh8z9VCEEyNZZgcdajKwPAmqZ92Z3J6cMFA3ArNyV2",
  "key13": "8uHX7vWtfmALRuCrKQX8u8obAFJn5ozLEz5Wf9CxE21VBVXgn3mXsN9Bz8SrQSzM3kDFRRKXQQuexTx2AKGkDFM",
  "key14": "4SUaGtPYXHYvCkfaVjMtUVxeg8sJ56BjXNsCVVdDzt4PKPfWZ88wwm8HTXjwUD9Y4mzDZcK6HNRWYAgDmFma6SD6",
  "key15": "fgMYXP4ndu4MmK5iCz3RMVF9JoYivnyi4vjQRCV5apWczTmSxBHAA5JHLnnunr39NPHniK6QoysEqEF2hwQNbs3",
  "key16": "4vwEsAqX73pH46uAuirKsctBxtket6yq7XuemkNu6N7ngz2W6Xn9Vh7QqE9hDnq3Ups6kFZEmiYfb9PuFupEGXoj",
  "key17": "3ys8EuLuX3ej4fnVAiiMSbnKJjfiuVrWQv2tzREk9ktR8wMWDpXKq5VzVZP9WKNG5WAFKczcXqtgCrxuWMottoYC",
  "key18": "5t5mZdeMeMsbyuzzbvL5Ujxd1b7NVAqJLCxYM3ThVdJd2GLdRDu7aiW761g9MP6fAAmqkp2jgj8XUfcBQwFaqX3A",
  "key19": "WbFUDzvkm6SKhrUygmsFtsxgvn6QEACbKbSVrQL5o72nqxT9Boxk6DedTR2V1VQHNkRWW7k6WtgvpcLoQcBR7z3",
  "key20": "Esmi46QQCSiLdvkDgzXtDmYxTrZjfmcNz2misEtGAX7L3ckf9ctPexD1QhuyTSjrFA1aj55CzcTGk8a5QjEbWxo",
  "key21": "3P94QdoPinMJJa61G3paRWF69xF4FcASmgst3qMtRi8aBL57NXKJwZHKs3sKSgJSa4HcsgY8gbEzZVdLjpWGzbTK",
  "key22": "5NFCZZqL19BXkVytVGLNRJQ4XP1ryMUPPywc6nwMgWeWrq6rSeHw1MEqDujiMhDDZa4FJEW4da14kXnPpB1pHZ1B",
  "key23": "3if8BvB1VDT71KRSTFDxiiYTifvcnmtGU3q6bfVVuWoXKPGaThTVnBLXZXLUmtyCcew688pnVKFiygCT4RrEQZ6U",
  "key24": "3g61aB8H9uN8gXtygUioqoN78por7YjJ1LjGuNGnvVkphTkkxiYx1WBK1gcubjHpdXZVX1HPTuXYktzMCfMUC51w",
  "key25": "5bDtYjVX3CmwL5TTghtp2aeUVtQiejqdmiYbD918aQ6xFtcxvsGw8FEQzwjvcNWXNgR3ScJg56PjiWm7mhCWb9Rp",
  "key26": "286hyoNdfihoq7xvcU1QhgWEUVRuEk8YDi1Yd4GkuEDHLRS6rWxvzsCGAxpHULnKEGnSS8TurhvzESqxEtJoJhep",
  "key27": "3vYGRPZrqV7tnxxeGArUaGucnGvSz4fJ5JcEtJ4V4KFB7gb5ZxpE5gmBhiZEeQUoV2KQGVYDDhCtrt8WQMdUZzPy",
  "key28": "Wgfcw6Nao8fkiZqnRNfANfT8NcYVnb1PaDqFUFLrHsDpStKcFcsokJxpguZeDw8oNzH8Bm7pXscHEVtyamW3m3o",
  "key29": "3UYSsfALrXKe2KZggPaWYixbi8PGoGntthNbN3CenK6idacyoBdfeqYNWWaWYpAaRgFdAf8M7PHaJ1W74NmmdVbC",
  "key30": "5PwW9NofK92dxSQci4BPxiXpxxgGed4bmf6xmUBii8DqeCjVZXYjF7pyPSe7Ca8wJrVAiHa6PArmdtwpYs6ufT7x",
  "key31": "3bfk99FUDwmeorzNRgK1CkExj2NS6uj9gUaZkwc6NrdGhyeNVLx45qGaTD4jFptjyvc9S2bvr6hjkRUwZLAF2aV2",
  "key32": "3Pn9cxuJ6xybiAdhCVDewiRmmeKSnnfpTr4FRrAPiaqPWnW5KNpzjV7te8E68zTzfDfFkjuJrSQDNp5QNH8qgnKL",
  "key33": "Hd4UPx5rtbEXSyk7MfFBnQG3ncHXZJjFojAEFaJFCqsSB1Ffk8NBwc9phEWvmxL61no1kX78os7nh2RxysHHwiR",
  "key34": "5fBuz919vxcGk4WnqeF3Z47L7JXdJntd1roeUfsJihvoMVMCusUZJAEQAJv9QKgWxbiawEM3G5UNX4hheuqV4fDw",
  "key35": "2LvRf4rXHGYULdZX8rmcgTbyMHJozzbn7XyeYfS4eZv5QUwRH7RM4ExAtyCBJXDj9BpkuuSrzT24YE7j9YkwzSM7",
  "key36": "5PuHXQ51Lt8Xt9bXzM2ZUvFVLyhWTc6KT9XkSzMVZFjCSyQga2q6z8ucyTB8M1255wwZBy6ntn3GuJahHNk8SiNJ",
  "key37": "KtaL75noBEhTMkMcXWX4Q6JfQm4FTTJNWx6TA1BmmA3kcEsXvcgvcjdmoquRB79S42qAw2V5iR22vh98gNwDk9W",
  "key38": "4KyVqXRLetNuHg2U2M6k6N6wMnXMUiYKtG43GGsq2S3mSJ2B1DmmMMDzBP29qdx6mDngnWeky6hDNuv1TGNhd7fd",
  "key39": "291rZe6t38UY32pMppMjQyHChphrq4bcUxShe4vstuiu1Ufas3C7qBFRqAUNkTSZfxYM311f7Z6A21G7bJUvPb43",
  "key40": "dQR9ryEPkCVVbPFbKi4ibZT2Fj2EozWF2dVwv2PYkskWA4t5sBpHwD1VzjEUD75xTQ2QivSkgceLe1TUPZqwd5x",
  "key41": "5BbFAyZDgsxDXbhSHgAgt8YqRsPPAZY7ZUk4MdnSvJKNJsDMKBpVLHESTkheQLjuzfCohsqtt6hfg6EJx9fKBuyt",
  "key42": "US7h6yuQHayqL6ByTnNCgT2etjJwcpCKgCFjjy4ag2VKJrvjPgB5pWTbVoMv2UhCSuXSuCMLnj2PsuqwZgo5iDp",
  "key43": "3KJnSpKsy9ftdWYDk2EYkamcYdvRDtVun9preGS8K9W2NmA7cEXmqrX2Tdeg3ThHMQoxUNBKqzmNFYHvNVEtyeoZ",
  "key44": "4bJR9tCEgocfEEMkLDgAGDxCGXEDRJJLRfohmrDZG56oXf7Ee3hb8cmXx23NCAPYZo9eNfN4iCWBeV757ttYR6ep",
  "key45": "5ouQmmVmtWdAXP4dbJ26WdAhTPnhF9kvUuDay1PDki6YyRAkRa4Rc86esEv12QBEModkahNiSLTt7VuPCbv6AZ2R"
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
