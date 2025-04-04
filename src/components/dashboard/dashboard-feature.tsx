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
    "AM3PZwTFqrZcoPNEiq7B4KPUbm8U2sAgc1fCEkVmDPLmepz9czf6hzoLvVciTcs3kvthz7i4z4TTLYVNNoSBnPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gfaU2yxsA9B5qJPcYVicyrheFBo93T99EhAwZw2kV51tMwGRUh3cTj5xsQKGY6f4Z9Jbh8t4iVnuYAtTxijJkp5",
  "key1": "5RQmDfM3ogWMRmi2QkDqiBeuSJ7dmmyaycnoAJKtF3uDFxc21UjQWo1TYMRmdAt9TVpKR53HzkMM13S8mT5kNyo2",
  "key2": "32n8PnoZF7MJn6NNczmWnRw1TFM8yBrZhhWSVjcUpwPyMjSgCPHEZVf6gJSsVBcNBebVWQGdT91cqooxQ2rEpNSX",
  "key3": "4ZXd6pAanUAif2y2ehUqrjjACXfL6K2BTwKq54J6En16QP2ZySCoR7Ccoo2JQzMbMHukGu3boqV98kN2iJ5Xu758",
  "key4": "3MnDDXX3mj9qw7V5kPLbFLhkwU9MzQnsU6qsBGkJVVgRHPPvkTh383vrDXN5jyAanNSkvyZCmG2UF91ABt5DqsSo",
  "key5": "5AWxwvWwx9y5hEDCn1gg4yrB7rUSewYt1tvu4nUyRkENCgJ3Yf1jBdcBHCQaWYwcKc2fCmb5iDfhKuPv6GSk1s6B",
  "key6": "3Uk78R2KS9iZ6847VQeg78zYLjVNNPtJkm3LMVfdXLJCeW7eEeNGa7tW91ahRftSAyRNZeuLF1LunQdmaFmVGGbm",
  "key7": "41KQMXFi2GacQhyVzSC4i5Gb1v1mvQMbnQXrUFmVFR7SK9KD57ykDA8Vjj1nGicZupiXqUEo3uPzEgGXr61GCpwA",
  "key8": "4DSgqu8y4h6FVw8oLYgZNyseirk2TsJN4r3JF6EoxhBT5Bd8BUnNjwnKhtrwyEbvXpgpjeqxaSsjX3Uo5YjZioBs",
  "key9": "9qzBfuQDmH4gL8XkWqtsWpB6VozbX4vAkEN6RGTqg4TiTZWBW1wMNkcN6amHsMBneDKvTRgWhXbeJR1gkRA3BoW",
  "key10": "4fpXCxtkvg7ZVLf7J5VF2yaJybuLATR68Jytov59yapGMhsgvFY1v484PZJSbew7tAN3WcNUN2563tN3DBcRKisP",
  "key11": "43N8trxDQM4XtB3XP7nfwazSQyrjM4YryC5bBR6o8VVKJasYMNJ585nFmMfgAQUDzgBftv5BRd8Hzn3CbSezBq3p",
  "key12": "5T27dXkdyJWqSg9pWN6xXr2nRsBVD4zEcPASUdWGuNLBtvc4qMkJwSvVirVEgTvHh6wnUryMWFN2nFGxoEySvw9U",
  "key13": "2uYykz28QAqmM5RziBW5HM2munuq6rVyswXnXGo6hmhN9i4vodSHnA6tsaFTy9W1iGSKJWMR3CGctRgAoWbPM1rh",
  "key14": "27okkrMvZgUfyyenKYqtovZWWxCfiwHECjaZWWoag5dMnyi8m4P91ViVQW657cq83eZtiK8V6yGQ4QzJixw91tNJ",
  "key15": "5LnRkWyuq984NCWsFVas7k6nxaNPmnaRv5J7hvJpKNDzhnkzPhdhxwtBXL3zz5cXdRfs1zLMU8dzE7SsP2cyM1f2",
  "key16": "2wDny4cSq6oBhERES1bSNmjj46bxLWUE2yUsEkLQC1EAYTzUwtocPvPbHLYniftYVoLBV6ryErspqhymHkCTer7",
  "key17": "5H7VMaEG3EyFTfn4VKrT3orjxmGedWrB7MnshrD1pRC9eoHAj7gER1n2sGgs7eCiRH1ncQbVuqQXosT3P5wKNCaR",
  "key18": "56tYEcTyH9fiYXAHFR6dvtQRoFAQLW4aDzPNyxRWzXFYZxYXQoDayTA8XRSHmjTYrt6ou5BTAYkyTszNGkX7v9x",
  "key19": "376wzqmKWQM8zezBv728iG36zKZT4CAXXYARAShELscgt8iW6pLX8mm9BWKJHmifhNuwNsoRaGbHCa3XEtn8thvi",
  "key20": "3UqBSLcC3USFuwuktKAk5AQQdoraCcFe1ssB5Zagutmj6RKpN5s8xDi9jRzJeqVWpDiUtDSwELzao6psdnvyJ9WV",
  "key21": "475aBpu5TdGtWXXqnrL9hLyBNg6zxuvNpc5urqDxzgWxP8vyQZi3seDtSrDXH352Xf6ZLWSvh34EfMk25FhgzwE8",
  "key22": "4XtoKLCJ6nuu9koS4wbHfmraeQU6wrLJh9TkpfH1zWUBNaosVY6Uvd1AGgufFumCQetvNhEsHe8dBAMdPYZqR1P1",
  "key23": "mMjsGdJQ7pH51EWbC7a3QdAbVSDa2T2YoRMZTKPxSWBHsd78bS95NWSdYE6sX17xvQFeXpSvUhHJEiC4eTdFPWp",
  "key24": "5C3YR2zmVMDHVfWCuQi7iDoakwbCAz8pvNe5WGVGoEF5e15G4LeUbus9hDNGwwJqiaRhiKwaXiaWdY69qvPV3mUi",
  "key25": "5tF1AUZ7fsqX9vV3ianeAoP5ux4m9CnXH5MxFTzuRYwSCK4pPEgSUMvyJZmszxqE9CNSsX63WHpiLvgrXyLHKxgG",
  "key26": "4RWYNGzH8fHTS6bvehfkgd1avf4oFt3taFAuAfRAwUWeqniPvkmyDQHuywfSeK4B237CH3acTYrZPw3seyMDvSaC",
  "key27": "3Gnfg4aX6FABT8ba5qq6XWrfcH6HRfKcX3AZHXFGaBJby5DKpnx3u2xMFnN6EGDMnbVaGsusjWanSofd89wFLaS6",
  "key28": "4x6uu5dzKXXZnjw5BuXMzMhNjBgkH6EGjvWMiCFzVeaedcq7Bob5XAFXkuiRV1kwugM2XSMqb6EAkJ54WCbBcoRi",
  "key29": "2DPHfKa1KBYhuTQvT9cFC2ibPZnNybQarcLD3KFPhTWt4Kw1bpztQRFLzwyDWYh3QAm92hKKv9esdoAV4ZsByyKY",
  "key30": "5mcD6fnSstEjXe7E9PdZXoneDFWFYmgv4y8odDhyV8GCzxJSSEYNxF9PuRTkCPK6QTLvou6mEJLrFrGWLaKpGKJw",
  "key31": "2WuM5Ert2LA7YBsaA737RcfvGozwvBCFvn9Ce83g1wtZqKUvWsqbsChG8gVNWoH66oS9BGYPEfi18Epx8wiZXG57",
  "key32": "3LnMVs7hgjq65GNdKuhxD2rAY2PTCV61urBVpdvCPg4xE6oAXHq9eFnVD8Vh5EkjbkmUTtguk42mm2A54MFiRPXW",
  "key33": "4JVnkWrAwn9QYryCN4K8gWQDuus6jniZpGXLERwqJ4moHuu2RXNDP2vvHdxZYffzKKHLvrZkWTonkbJ2hdkLepvB",
  "key34": "4WgmTDa785Bb6GWXvCd3AnZiJg1wucQsEbWqTFSB5r6J2UHWKJxaiz5mkXM5HxJTTCr9akeQ6MCbzAdg6vige9L3",
  "key35": "3m9Tqp5kzeeLueQhiZBtTE1w5ed9hPxE1B7PyAkzp8dNsofyLHcNEyRpbnEya2bTGB4wCKhCBPgSfCfEScupUPQx",
  "key36": "28ddAhzYagZW6NfvrE5YaJXDHVkWrbVa7NWcYfLCHT9r2KiT6xz4QYvheBqMG4g26XgGotNCA6FMkxNPc7mPZw97",
  "key37": "4qM5uWbRi3zpjgFvBx6pp912y7RiUiv2YvnWtDodcjjcFDTGMU9JJE1XiUZVC4W357qhJRAJQBAjJyAoPm4ebjaU",
  "key38": "2zmkVGQdE9EwG2yVEr8dUFYjd19vLMhVLocRLAJ7atnMcPcrtU5aQ1TmPLSbvxUUNL3azbdEScmABdigow1Gst1K",
  "key39": "4mzERGXRyaFrqnaaPkzt7FpMDNyqQhEvfnYp8iSDHA81XmDiV1zWUzzTZhnspSbWoi1inWBsmR8MojtTR8YYVL8U",
  "key40": "3bfMg2VhQSZtur23k3dc2qGkUNJmmTPaFyNCmcDWEj3FSEyCgpJJt3E51kNy2abmaBaSf3izPN1dpto4qSP1rE57",
  "key41": "2gTHLLAQptH9asHPdcpZShieW7M5RriGqioSMLTTRjEYtPJbX9NF2TYwnNxpgWykPZLRmqD4DL4XN3iYqPKzDNSY",
  "key42": "3xyvCxHDtzzLYS9ezjAzH155GGwTNVu6Wdjap7KHkwtEz4caKDoujMPNiR2MoLUTu1G7A1cxbyTNrYouhuyggHFr",
  "key43": "5spijQwexqs7C8Yn6fXPjyaYAeoZ1NMrzukdSPJXUbqy1WsuHk3ufB6vU4fWhCLJDBMn3GFCDWKeSZo9UL3cFdiL",
  "key44": "5YRAhV4apQBM7f4P5KqDvg2wENuHNwwYesWs9MSmmK9MDkzYQBtSbyJvFdxxXBN4ztdeYXYyfGhrJdeUPqUV1jmv",
  "key45": "4b5GnA8Q3KTpWfe7oQs4YiPs5MJNnBNP4FMuzP9UXT8cFQhECiEPZ3xjx38E3WWHvdMxzryJiJB1w1ZPw7xDN7FJ",
  "key46": "2Mr8GW9PSE7V5iHXKav4em6ykMiSC4M6cmYSgAnDDfHaCHY8TuiiLGRDaXGmP87fny6bL3jCG6LL1r2JJzUejWM1"
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
