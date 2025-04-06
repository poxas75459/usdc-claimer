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
    "3PQqKgpYVNC6kw76p4P2ucV1SBtCiFxeA2eQzHNo6gwUuP1bMvhDkgPUs1Pm4hD24tY4etrvkJygBHzZkcCeV9p4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FwTjL5fuSwsGaLB5uRXqbEzzZm224vyXanhE5tNoUqhxkQ5zH1mTsJfspFmM8uGa2mSXZ5cPiuNn2QRpc8CVjgU",
  "key1": "3NnetPBgZp6FeJ4o1qDpvN7GoGJ1i1VDGiba1wXZQgJ3Y3aqxWTgnEXGCUQukAPfZcJb5iA5JUF8gkHrvR6hsBZQ",
  "key2": "3SpRySfPSPG484BCkibtV5cxnpcbMATXLn49PfmDbp1M8Vo3rQAcaWxWq7SteweDfAqNRzULxjQYxRav8uYP4tU6",
  "key3": "4Kk65nBebNstkhtwHty7G5h6LYeUQMMpTjacuURDPjMHXpcBVXSM4LE8iZzcNKC36KLabs3yzAvQW6QP9L5Yusxb",
  "key4": "hrNDyF51RG36hgTxcd1WUUhAwakFWXXr1E8tzAbvvUsNjFFN2BGQcK1wmyQmnYyrXnxMKRTvF4Co27zQkGpWQS9",
  "key5": "3VYcXgkg7tM7PdMMSEJsLpDTEETfnvaQJGovnPnQPGNpdnx3VNt74Pec73jzJwuyAY5xRWnQ6Le1rPkXaT2ymkr9",
  "key6": "n1AJTZqsn3m4UfCC5Xmdg77rZ9P4tdYNTJgbZYj2mCQ4iuEBdbvahJAcr67GaMhQDSyaAJhJzGtFUeghY37qfWh",
  "key7": "6f29Z9J2Z2cyugshMxW5SZgGjNEvjpnHuruZRGQtyQZNeJCeGGvS3VmXfrNu9MVRUuVRy4vo8Mf9oVnWTe7VTRE",
  "key8": "38j4muMNfWtGS32g3w4mUWpEnqHPJn3KFFTXubt3UGsiHqJGmGj9cS8Z3xckrn3HXdWzgw2B6TR9faRwRRmEkHUX",
  "key9": "67QdzKXckj8ZpGcMM1WQR6QZTeTifJyv5AEfqY1PVqY67ChzdxagibU3X3DmAKpHbNjvWGRs29y5q4XQK83s5uws",
  "key10": "4rjzAyfMXo5KhTRXk5jNZ1V6NgDvtTdSv73fCMbf6KwqBLMSV4hpfpfxHNLqQWT7trZc4WRvnbLCVwwPcSkgfVJ1",
  "key11": "41yd5XVLfW7GR1ruWMECWxsmY8Emzfo7sqmwBns93W4BmDGxNxk6a5hZmMqrreQjdd6GfCGVG7H1c6PQ24LahiGh",
  "key12": "s3dtU4DHnTCD4V4gENz4AGgRzdTaKMekP88cbC98oHannNUxnFruf2U516DepWjMkoitahW5ixqzaxYffzBBwUZ",
  "key13": "3sVkrbE43W1kNcFY6PDtXcnKEGaEBhkti9Utf5ayPCHDnxDChLZ1yeTz1fr1jnci6LVREnt1tQDmYum4pLPvMoRh",
  "key14": "22QikNFcAmhXMscqtEdu2RV2msxWAg4DwtTymGfDeX3xW394frmw5v6ZoBtaH5KxzUp6uFuoB6SirP1c99npHbvD",
  "key15": "X9Q7LVgrjPCwwZph7AJWGCxUoqAmnX71cMpvFgjGRzMkhshXtbtdgQbx3b7WWdprQHV7PuuxTN5c3sPB2qWf63n",
  "key16": "5qSkcvPpL8Qnm3Sk97TVQGXmCh3fGquQpmeo19t41a8R87DVYmN7CCeLYSaeyBn3ngnwxSgszwF5NuQcux9FDNNi",
  "key17": "q7CozbgyCwvM4fVNbFs3CH3MP7SySDLUBJmeRmhUvYFAPa4qfPgufVMYMxiHRZL3Fmy2JGo8a7fCaFjcufTksMG",
  "key18": "5iWNrBGbePawiCmjSzv8bnT4uGmt3ojdfhLkVrLVi9iqhJSp94W1FuXU6fS9CWiADqu9rU7NQVy5vHXBfwYEX65j",
  "key19": "4RAGbSYdv9Tt5JpVVQYiosrGESLLhG8952ShGf6X4kVUnpBxFEiVHufzfu1KDmzrxXNhKY3FxvJWPVKhdafnMjNX",
  "key20": "2PoxWVb2MUM3EMY1YRfrAwM8Nk9RS1wjfx1mdPk6mU1x4Xzj9tUHopc6hfMrBkcLtWpSGn9xpQCDF1M2F1syoyrP",
  "key21": "4mR72WAE8x8fUZAHjEV5GaG5TU6y6BRkGS4bVDK9RfkUyMRDerQpZwGumRjbRVmPKaCriyZw7tz9WADw6JBCHqZi",
  "key22": "JXFsVdAm9i3FTFFCjkjP5oq9aJmrmeed6f58yXmahbBXVeqFUL51WSpncKyJfGknhU5x6LyF9RYzGQPnDWjUTs4",
  "key23": "5pGztEGF1RCmiJrhGHpPW9uNp6oqzjbUuKtmiQa6g32UnHHsa99nv8CSBQDkUikSSigRe4e9yteCcbGtRVSQ58zP",
  "key24": "4NKmDoDNmtpP9Egki6JoUrdhfQdo3YSEryjVf8czn72DGps5ucJ6Ca2MjqUzyRS7z8t2rHfSEieg7mH6hn7qxxF2",
  "key25": "2XHdLyTPFHcfdVPenWy8qWXg9cSozYGHXJsBc2Sgtx66mWFSsarEsQqJTzKxAyB99contSoD7DkrLcyf1xSQgYqn",
  "key26": "2uUJ24XM1jQ76Cqtb9GJoXuC9KZpPYmVhKCFudQNWiaWvrPmezoCB6zeEXBDtnSLzv4LCgeoA3u17qXPAa413qSy",
  "key27": "5Xp268yaG6Utw7NqS9f6PQQQxLf3uEHMqH5DGavGDoNKkzXueLtvyhG4PscUGhBYiA9YVYbQiNeeLqWQ7RL6GJ4R",
  "key28": "3qrsDFxocZULaodoa1uGt5q672z2qZKhHwBSZ6Xxq1rjFGLCNMERXMbqJn4EFWVDEmi5GNi2sfHKLmLLPaqFA1rE",
  "key29": "3v53jcK9N3N7yXA3qcHLUMG9YKGNoY7XPnrXLeFxsD4Pv3djNbngHqWbRLG6XKdskNFNgBSt3exQujdXRwbX4BYx",
  "key30": "5WmuTiYsJowDzAEHqagmhqZQhyCemQbLonEgdEQfSrThAQgD2SNQZT8LygyYqEKsEyxB1oMq8NcDEBrXp9WLPcUs",
  "key31": "5NDWzka5xqxnyG4L1zraLFGGgLniw2o5KbKzUvRMTsBF7jJEdX3CbJtcFNYzEb1rYHJuzKAxnW5zsCVTzRJuqgTM",
  "key32": "kvRVHTrg7kKr5GwtU4rs2iEPzaPaXa7rauVBJaEEWGbFYgK9iZJ9cHYMNbaFvkQnd6Wp5VBBZsHLUAiebGqxpce",
  "key33": "63GVzQCzX8nGw8pYTq1t46JMDqgBqAnv9W9B7bmWdaasAsMWoToK7vSfg9QT5Cnyd6y6rA788mW4xRKKNHkeCWmL",
  "key34": "42d3ti9mkaNCJoAkyNWyQZvL9gbzrGAXfvECFeSFtugTNVAgy6aZHn14iUkh95z5rUuKmbEJDjsoCDdUTMhRFWNt",
  "key35": "67aeKTML3PPJA2j5o1ZwvLaDXqMMYT9aGv1LBJGxmDyeaZevUNYcnWYRH4LKUhsv4y6Hvg7fQ7gzYw2yJGZmJTsg",
  "key36": "4vvi1EVXtQvaXqscsV8mt1KnyiVoyq9DXb3iEonz3FsyS84nHtNkLfBXfCtQhxYnz4YZYqr1nevnn6rfxpZvUX7F",
  "key37": "4QkVvvB1mwoKdfzZwkBw7XNuHTUaSHVt4fMJfUuk4w3YKLfQbsA5x9KSj7Lta5nfBtYUonMt4mWbjj5CTEnxFSqY",
  "key38": "3rNfCt1hs4S4NPvwZaNAJcKn3agpEe97qHi5vGVqjEsgsdQ5Vnq7foBaLAXGGrzV2q3BhsJN5pecqMNkvcgFY2Ui",
  "key39": "3F7fd9xUShnYNzoe6ji5Z9mdPeMnjRcq2EMMDRs3iqYHFjTQwHomhm1ctBg6HcacTtttFTkUK1H2J1Ewb3WiuQih",
  "key40": "2tuRKxGnnuPvjffAqDFTWSv2k2WKaiKi12jUqJxgev3HgQNhhXX1txXFoPXTpFNUPUgErWTku8frxr39uTsnu13S"
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
