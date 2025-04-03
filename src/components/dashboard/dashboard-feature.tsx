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
    "2cAody8vHFz28J31jTVWuuiqf53wRM4zBKs97TAVmPFfeTR1Eb8maJF657qhJbkXg8MhcNQF3rjnvUtGHuK538JD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tgc8FDv1f9ZLD3EpbKJwd4gC8GRCw92KuGKhLQsi2TVnAEM45E7KMfkCKfxdEkeYCJqzz4qh4EiGhNiX5C44EWj",
  "key1": "5oBxZuShLfu4dmzdYWt3cw8zibQys33qZwWigaYMCFJPbGKPxYQARY9QKWa3HU3oB5rzWEYXyMW8LNMPLc8PSBeY",
  "key2": "3pDPqK7NkLGC6pHzQNjWnn7qay3YfE9aaxWo98VEPDzXUEE1gok9GR4yqpxCpcixuGsHbbgsGS2Cq7sN3dTmNd6T",
  "key3": "5du8DjNFV1WAXAQW21SXyXoDJ8cJh45N8qWVAY43kMYkGBSWk4tiskuQzYZcviVjhuZrVCgiCPgbmtFRpF48DkYa",
  "key4": "2XEoFqHU2U9MMFggwA6aAdF1wQ6eR1aQ3xx27VKE5pry8dRLnGWWSLXzRtwC1KSc7gkkyyGSyzQorvwpGHWS1Jy9",
  "key5": "236CX837Gx9AYCHuKJdQqSMcVV4C1338NjMq5GUY1dpndoDpSRF96GK71Cn4zXSXD3LSJJTGS3a8d2XjssQiCHCL",
  "key6": "48SiJc1DtE1f2fzF3NhaQpj7zVT4ncnK9UKtw8xTBaA1bp3hfG6uiPQURRvr6eSoiocK3G2koWQdGH2QDymBNHyB",
  "key7": "34JGLicDxb3MyC6UNe1tmCgRVh2quwQZS3HNCCzzRESTMvSEwDnQvMfmTZQ7PS6ThZHy7FFtYYNqT7Gx4VsZcsiX",
  "key8": "63XW3iuCjFAsXie7rRkJavtPUpDKoDALeVSBUBpCo3u3pNPGsqbApFQYGhATJDKcdcAFDZSr2W7868ob17qBTc5D",
  "key9": "557qo3vzvcU2k5HRCDGmjFayADLAxhsgTrieyaTd1XmFhiUh3uvWGuef2QZbeihdFrd347nfV12Zn1BuQWMHCXex",
  "key10": "5LxvzNsfTK7zfTrrKVcwqC96D8D5RMEgrMZDDPgWWMGneyR2NbFWU6LuaHgeWXWAABsxLsxCAhTRbHL2aaHPSvwG",
  "key11": "5Ni7jjiy64fAhbeQgrQZCUKsppS51fyMugg7Wzc89u36JbRG4JmApKp2q6k5ywTHtnX5qdSXTwNXwfwcc6RRWJWX",
  "key12": "5CcYZbRG2FtmSyYc5XC756BWcMkDNjPSh3BEMU9AMxVHgcczTFmk2gDR5N6itEsK6K5Tr5EpmWG8tVY4hWtsLDpe",
  "key13": "2jtf5MsRYW4axvgaH9zVMYUDaZFbYXk8HaC4VXv4ZgqKqv4LHDQ42eMwJ1S3LgPs7R9EDpFBdwp6J4t3wSJ3THuL",
  "key14": "4HY19JFbEj7QsZZ2pKGJzUTmHPyYUHku522Zxpxx4vQ2oN2vLUZkNCEGMUkYXMPwgUNWsT2QB7SEL2414wFMng3G",
  "key15": "4r2j91WYMXLBGsmnYaqdwBUREYL1EeEsaj1bqZQYVdD7EjmCedQXG8EudLnvQXVoqE8F7AMQErCMfha8EeigJgLa",
  "key16": "4TuuJkBW8oU452hYVVcf2KtG3QNnkQUSzynT35DWPtbu4uGrJY5GkAJTxg6cqdKa8Fh6AC76ZLzgJjjUFtNa8aLS",
  "key17": "fQhJGA4tDnJC6npdoFSH8fMyNMopLjursP9MpFLEuyHyjE8QBiAuYXj93DrmVNSubhkjVwn5kV7X9s81aBtQpKG",
  "key18": "5vadgvJCrBJF9j8x15HFJek6tDstBVP5mUAgGLjucueEaL5ezMaiqwUiYbusrXCiT3z4rNyfqiEL1oJxAgUKFNWM",
  "key19": "3C7a2vjzEEFdpPa2HxGk4DMR1DdvyHbXYM61pTQqeVX8G1VwvkAudsDD7f3hRtGv1VUE8MNeyVGq5h7XAniH1dxy",
  "key20": "3n51hyZcTeXzuDmVxPeim1roCSr4kKzvWEMMuL7yCDLL1uE4asfzFE7gZXSZxUyf5uR9kAQDsjv5vRYNUUdYmnhA",
  "key21": "25AsUnuNqnvWtQtrVXhHrvCwhvushSfAjabaawbi4EAixHGkiQD8PD5eiFbmJWfuEowtcRDortL72awBKBpuwHjk",
  "key22": "y4YQRu4tCZZikWaZhEopvASWnzQkYCUF43HntL7ntKg5DEuGpw1eoKGpcPuoCbXt2C1kp9HmNb6ASfg7q5moyAc",
  "key23": "2bosDEKxKkTxpvXGj8q5pkMNT8BzDdTt9QkMFBSPYUsPvVCHAZq8qX4hKomrBrpSydATxJvihXtzmXcz3SKvMNdB",
  "key24": "2u9cEdWrXLGJTU2jXbQrbNuJ42Ezqg2Jo2c29McnXL6jDM7gzFwJMZ3mz3XwYty7dP78MCqhR1TqsL36byLo8Gkg",
  "key25": "3BQ49QGhRFd2cMSHFCMdr4KLh9YgXmAk6HEZKXENrHME9niXiTfSRuJVJfUz1fMtZT3fk99g88xqoivz4sj6kVF9",
  "key26": "98q6dJrZuLaiMoHrWACYdCNaLE4UpAyJH8DPitFaWvNMxTsZvFWfufpRE6UcrJpg7wLiQL5xenmNBWKMcSkmYuD",
  "key27": "3jJp92QjYkmNNYFcsczKswfHDjddSJGrNAZy4qo5PUdZg5ygRrShr8rsPF7vjnAuqXMAAyxJQtSCU4cr7J52jdUZ",
  "key28": "3y437AnXnxrXcbKrVPCmrzrrNP3uau1C392EdtndT877JMQELfTJXsfd7rsfCrnVvuYjDuMP1JB6xFC5siJ32LSi",
  "key29": "PpCAFUgdks2Fz7JQwDYACevWJCBvyikVq2tbH8LVXgn3YMmcB7wczLzaZC74SVm218iJGNGZTNN26AxWyYAyBsB",
  "key30": "3uu4kPQcMXgvUeZnmNBxwPs1bh4DyRRJZNsin4YwrXdfgikAWoifHq7Lu7o6dMeXXs4XhR3ozVW84ksBwQZqcN6k",
  "key31": "4Av7spZq2mgYqDiaMjgCrhiTuTW57aXPzK8BYbUtMrt2SSV6vkTZA9vQfhS9YyqrNKyzKPbdhhL9HwT9Ur4irw5r",
  "key32": "5cxc4KqGx2dFJ34qoRANtEvtQUQbsK2Gxcuuf4LBG9EgKFGZAa1DHGiCVLuAAyYAVHStYGykpGpWewJUNVcimZLN",
  "key33": "2obFmdPUsUeXRuF5THFfMfBoCyj4Pvn4adAqmSt8X3N1Ri4hayyPgDMVwxBM4G6xWn3XXxVBteudAjiQDGJCni8k",
  "key34": "4ZvRddcciMKHMPMP5nzPjjbSWiqBfjp4ph9EKPsJgxGTDPeom7PuvbVFJehdryp9juBhCneHzu2usq9S2iKbgKWZ",
  "key35": "2z19d94bktBHQgsB7qbdzoafBMzKnanycWD1cmyLvL7ztBjAVKUAKZJUBfanhiYRm6VPg9vGcypMK7YnPrGbbroF",
  "key36": "5PbvFgAJec5o9H19Cg1Rj46A9gYTE5bfRGcuoVuiw2F181Z9kQbMSg33Wxr52Q1rMRq5va1Kng3LujeDL47k7xWD",
  "key37": "3occA41ahhU8y2aYaAiA1i1Die39e69r653Emw71wczunsPYZatvoVz9Q6EubSEJkRMjP5rHpZFs9cQAct1UT1df",
  "key38": "2FDmwzH1ifdxyhYo5fYkBnr9QkE3s3Y1fLxBE8Ky68E6Y6MU5TCNnCbVuXADgi8atTm21FmEtgsVbzELsdBCm6zT",
  "key39": "3xWPsAk8wC3Xt32vbnf4LFjfiszJsE1j3nrBxvT5Bjq61ziRc4hCxt3NUbNyFLF3Vd8bh9A3Lc1DaqNR2eVoBg6s",
  "key40": "5xsVw4u1XUwVjtTSp4GCv4C7z6odtRozWyYweMAdemtU5mFr6ZAWqhRfH5PdAtFDZ1CfL7VHraK3aVrEXxm1x6VD",
  "key41": "4aexZtn5rbysTb3PEyiiaHMswLU1PbcVoA9GvKRqLQra7PDSd2X86zpJpU1iNEe4Aiojcx7YD8mr5SLR4gM92rDg",
  "key42": "2SDnW7orvBAiM2k6zfDZ4ggxL39L3PTutk9n6tNSNYLtBWSxz858k27KgmDawcV7xVpfbckEMbHomP6nKcfng151",
  "key43": "5KdnehmT7zgoLen43deAB9fz96FEQMyK6Pyxeyaa8aNSREvzMR4z1B3G7TTb2FgF2yeAu75pR9ssSqhA2SgPGjqK"
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
