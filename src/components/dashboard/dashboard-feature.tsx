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
    "3vatGM62k1BEjxvgcJ1wASNLLvh4x8YqE4E2rzGZu8xG4WZ4tZGsT49WCHTTDDBkjnPqC4gp5AHyBxZzwriisF65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5diFDgWoAAfT7gL1dPdDKc4fnNAEt7LiBub2Ub64DzKUxAjkFJudnyU1U6FdcLDeku8R95KPtSZ8AgnzRUKerKh1",
  "key1": "3DeUkGPxnTgLzpexjCuWnXKFibNTccEhnaN76iL8XmW5YuaNYK4m3oLxkL1BGr1pNtj456YE8EcyGgqoUBBdk14M",
  "key2": "2bV8J2ZYiMB74UoSucCmLrpB4F6jfkkQTeGFEUGLepk1vdXiTr8wK1Xe4UAwMkqciEgW5qm6dHrwFoeZ5tqsN9r5",
  "key3": "4LQ7ZzVeYzqXebSzfw2G7CNK5yNTakmcXuR8mc1pyCY1wSCMCCdvUCidbsQjPoTJMDTWF1ftDJHnnukwebJ2Bhao",
  "key4": "hGUN9L32NmGa5BB1JxCfw4xvj4FsNmvzvtSZ9fqmLPfJoQHLJiqGG4uBJ9kGGTcLStECYpKAkLdefjo96Dzaaov",
  "key5": "64WtAZFBof4uxztJFeYHGmbu8PLe29p7XuvLtMaGtxHin9Fwp4c4TqtcSTutvXDDmN3vSNoz2TAY6PC1BJuAey3h",
  "key6": "4gfY1CgER7bpHwUsD2Z9pqbGEwfK4afirryDtLdmpwTtWBF5hrUDbQRjLbb8cJRiNAadEeA3v4w2kb4A5JoyM8gL",
  "key7": "2tfTB13cDZtcxaZHLTbKkwV87Yjxtmhnt1qMoHgcoKzK5iqCczgwnYTjJvFGJgCdg2ZvSXgCtoqoPzCuFYeKjecC",
  "key8": "59rzi1EbShknUukCyGbjD66NXwjiVsJrWpw3wR4rYRircfCuMvPdgGLmBJ2DypW8SZ9NcG2aPXyHFHmskmQGr5an",
  "key9": "mpT5kkPtbYzdKpjDh4GsjVhS4oyeKY93SPX2wqAmY7tXVSDFCJJn78HPy25Z4VkLYW8eJDknYuBrkf1QW41rp6g",
  "key10": "hPBCLwjjnUvBKqkhiQH6PcRdvjudvjDA2BKLzXewob1QNYTdyK52yye1FpVGwYDUhzdSYgzM3vjqz4DNRkdtWP3",
  "key11": "4qXcJQjQmUw3r35oyZ4jBJDVwCHoGdm9NjBVCyXsiMkuCjvQr8BDiktK14Qk5Zah1NNHW85xtEz56R9Wy6Z5kFyG",
  "key12": "4H1GyjKaAdLbMvdCdmPr6fJP1UKHgSi1ce8Mo4zWK1ukChva45NEFfs9Fi41pmAq9fz6zjqUwrm4BypLXetZFi5A",
  "key13": "YAMbuGB4WZhUqAd4vJ1sg4igRRDGgTXrmUmUvz6aszBB7zsoMAJeToXqchpwg4t2B3anNs3rP3A2SazDRiqH9bL",
  "key14": "4QFaqNEh424mkHZ1GPfrEyGy1SqyWTbzgHv8axjQos838Acn6h668cxH2jyoi9wKD4CfzUFoFEqgXZ6satCPgTi1",
  "key15": "dKFJ3bRFXGCKNwKLkAXFbAkeYgfVdxBVi8UFNU573QNmztQEG9S2oTnfxPF3uDadjmHNDR1Dp2jPPBrpfUvXYMj",
  "key16": "33kxtnfyppX9FTCkesxbygDJrw216yyJaJXKQnatktiQD8rBdw1QddZpTnCFaVg3bCjf45a8ocjjPourzFjK3ZKf",
  "key17": "36naZqDW28jxN2xRrJio7XA9YnSwA1iQ7vaF7YHASnGcPQ8RPsVsStJrxFcTjb88FKqTN9a7La1DqCnHZe64yR5c",
  "key18": "4fHVP9tRQAsaseWqR9HZUFityApEQdLSKQdEHZbC9HUcT2tbo5cfUtEuHeaAz8oJPjo2eora1u2bVe3H1BSnoXie",
  "key19": "46USeLBHwGrhu2UdH9M18GdevsCbF8yAwuutrSLo61QNiYd7GLsJzTQqM5MZwkWskmdM51WSV6sF4wC8EP6VYmwa",
  "key20": "5A8N4yoQXNeKhPaNiKCayifRRifFEZpzGsCAkHjbnpeuKjnPr6HjtKtWEKftfhavCMF7yJNWU62EvfyqbMx8Tpin",
  "key21": "H3TP1gCLnXbB8ZzDhLRzkxNontFCJswv3RMvadVjnMEfgj4cHtVBiwVZwFD33utPxpJctqcJDTQGKX2E7LraY8n",
  "key22": "5DLSkuNQGYAiAb76Ddw4fcR7mdTf8UpZbXnJY3Q8mg8FQFoTNEJUD7oyxbZin1RdDVZrDwi82JPyvRph7HzTn6fj",
  "key23": "CZH23M5BAP7xvD1j8PCzKkWYTvdtCe9TPKJd7CvjMwm48Ft6qe5uBKWB8QCHA6DHYuWY7jwAErG6o6aDzjSca2i",
  "key24": "2VHGMFXiFyRGFfcC3TqEd953hn26Kkboy6PRHQFooDzeGzNzEuYeYecwLwccAqJysdtafNFN1a5W4uhy8Q7dLebG",
  "key25": "3kZwvBuMbqXDBNmDjwizuC5yEQ1F5gkxN7hFHXbUMLCTm1DtQt7LDfMZ7YrXXZQNAFFLDimJeWKLmD3JyDRwALbb",
  "key26": "23MdHcaCDxArkvf4pQ4tij3qqJiFEHm45Vk4S6x631vX8kCrLFXTmiaEaysZsQYXEQS8fZoiA9W5vyR3YnxACh16",
  "key27": "21uPno1pjL6tDnM8agaiSueo5vewgXRubvdPdok6UMKjsXKjzSHFdPCUN4nAtoPb19isnfdSoLxhqnjJ6A1eCad8",
  "key28": "5isWKbceqF8sWVi8qWEKfeTx1VURzjkKYSSsDiff9R9GRgTn87igmSSBvai8HoZTA5o6SF9yenoKVXvhskMyzypi",
  "key29": "4fhoTFopT4DM8rAdVCsqcQF7gGUPoAVn1SwxzHcmk5hKAWWTiV3Why4gqtqLEww9KBgUfkDWFNPhbtxLoKZCMm7F",
  "key30": "3hRyxVMRLxomromxi8M2dMZi7gjuFFEg6KJ7pAye1FnDGFBu3WJpFnGNTLRji39pLKAjmto4RNp8MUMRMFz3L38Y",
  "key31": "4Jv2WxxfSD8DSB4T9kZoA5KMKEQVTGFXBncwjR7kWAA3mYutByqFXjcAhgdBU7pQX9oHH9WQMjTmEDwGFNzLjHf3",
  "key32": "5hZBeWoGdhpC3KCCHTt5YT1usLyUg73jhnGe1sJUn4NMbyxR4CkZeAiLtExxDyPubCPZc25FDhHTxBpnvZgEXAr3",
  "key33": "3QSxmHSmFQDTrdf6JFrgFHFqMGpUuN1BDrCNv7iGCNQn62L33xRhiznh3hqHg3rZB7snA4CgPZ1qx5k9SqmZ2nWf",
  "key34": "65FXJtYnFaN9sFmo7vhTAWHCgmEb1wQAspLXeUMmFY8qPDAAhrzgNKUBed72fkVW6XhEuAgWjUZSLmHyDZDEmEAz",
  "key35": "3GzQ3vo59sXD3uvZyp43qRoQYsJAYW6khQWUFFyhzHDUVBYJDW1q7aVvPdD12TUeyHw9NiEPq234UX9inMDvnEoK",
  "key36": "3kY2d974nxBCpUGj2gaPbXxrpNvwqV5SwMy5fGZpUGaY2QhMsKyCsbPqffHWDceV6nxhDDGG9YTpFec7AesvNCLC",
  "key37": "KafZyPmxcBeDPJp8QrPgky1TkXrTLzzy9syePYZHxosoWYwRRYE6UcXP18mwoC7MHiUy1gWEckZwNBeXUNaPSf5",
  "key38": "4xsi5HUfcJ59FAnbYPnRfxxVP8A6BMKRY8DjUGZ2A3c55biveXANxPUNLULajsvPJMu92Wzr88zADfgJ15Gs7rsA",
  "key39": "29rJP63QJ5iUowvYuDvBSmYvqgBWM8EqnTvBwBnZyZQx1ttPFpyE2M87KTakQJVTuUGv5eq7K61H4cq4MsEdT4i3",
  "key40": "4Hn7juNDFko3pERc5fwhB8Ja8qigRaMoGndz8GnXJmeArHmfp3hFpDSdHsHjKstcwmUEFUPANPb5nP2eHwHH1rZ5",
  "key41": "3kGaSvFYF8C8mTxddYZ2YerEZdT6CSYhDZcANLyJuyMqtfDsoGdDShZGNvL2wHz7QgZMKm12knsE5wpAFQmSTS2n"
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
