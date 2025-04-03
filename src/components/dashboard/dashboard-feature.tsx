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
    "2HYWDgfjAwfY94P8fSMPiRETs8pPv3HtRHScFmz9uVkDopVt6rwargxXh7Acx2HNsv5DboPemKJpF4ttmvfDW69t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bhA2TtiBiQrQRtRgm7QHKPsycMWWA9CD3M3SpXHD4x7mj5kTiXk53cpRcwaoCjbhFuwRBuuTngtXp18KEuAs6DG",
  "key1": "5byUBjoFs3n9kVYJnbr6YNu8bMyf4tmavtCjsATuqxDrGAN3gdvTHfuYpdYEh6SvHAtDK2zd5V1cppdnK6JCkANy",
  "key2": "JFPktWnoaJZAWmdzcLeos5jyq3Wvnq9nVfe1QdWwv1afXpz2Uuava1QGQb8WyzycEvLTGcHxpwuEhH6qHxyKDiH",
  "key3": "4zdM9qBc1tsbTZiUUvYWpKRv9EucmgBa2PDpKkUYT6sy1twVtQQ9SbKKzdycpyhrbha9TbmxEDwyyxGSG7d1hBfa",
  "key4": "cHJvYSk7518KMaidAJ8pSxsUEqtxNRJDxeVo6Ko9A2s14jZ1WT8rRrp4tYKtEQxcujfLGmeKNdCTfv9PjpzWH5o",
  "key5": "5R6vHDRkTewgepTrbarBesZczqeUQHJjnmPe6qGhB64NPeDAQUSSyVacgnt4H5B8fRL95D1aCjWqJywiSvgiMty9",
  "key6": "5TQwXqBNYXqAJVtkpsqTAtLiAd1uN7A5HC7T442B2KKJjFigd5mCzN8WXbo71HARTKnVK8WApZnyMH5F7PVrA56Z",
  "key7": "2FXdNysaWnyXK3PVbHrUoeEbLwA3nUcmnA9yBc1ri51Nm2pFGHMZ7ZiL1nvRqXbtRPNgRqziLPGrJMLEwbAtPfcZ",
  "key8": "5MJE4kuvV55PunBUiR8GYZyVn4nb29QfSriHk2WNytJFFA1TSzdH7H3KpkprAcnDuZT1E8weDjaQghT3J96VWaC1",
  "key9": "52hZACnTUjWqdDpoFr6L4ntX7andptkFp3TbeSLctCzsoyWCKWqLMUAH7J65rGm8cbq5KocVy4rE2x1X9CBSd1sb",
  "key10": "4umVi6B4Duhk1EsLjrVoKYEmxLoDG5eRqxViKYDSanU9aiybdsK9Brs3gQBtUCxy27QpiCVXXKdxrFae4ex4MDB5",
  "key11": "4fVf6k3BzawgESkffKxYqi5hnivxwXwvgNpTJtsdzhPojCGK6QwPgh6wvH6q6CzdgUnYjPod1moBextn7TrKKJpA",
  "key12": "2mhGyPi8Me5RjCGaXCbzTp9qxDYGe5qjuhBRYBs2GTCAH17uWFLDSkqqodq6hQ86apy88dbTGWoeQRAwYpocokxy",
  "key13": "5d7jZdUREPRnpMGyxxTT6ajUiYa979oM18mW1GGFptJGrMAPn8xNtoqe8qojtbBxvTWEAyfie4FUwu8qTW8g88h8",
  "key14": "38bNJsGHyZxsid73Cx8QcnDVBr7PQphSnAcj7XdYhZcA7tkChtxLx8sw7M7NEoyHcQZs7Y9dyHkpmd4vKQzLJrNa",
  "key15": "31u95yt2SQyQYt5B2u1qA4WE1dAQNynQSWuPfrDYfyuEenVc52eAigmJq4X7m8jNWvVF7jH1DDYniGFjhHZrZuSP",
  "key16": "4fLuihhovKgmLwvmSAeucdpemB8fdittj7UdvfmWQJctBoDe7vrbysLsEHd8ju7L33PRDb1132H7fNNXh3zMheiP",
  "key17": "36ZLMY7gVZqajXFaj3uMKbEDXzxX953h7ePLP2iqh4jPfFUXffVoyExqZLU1Uz48N2meZfNVMXE8a2cuoqCnb17H",
  "key18": "3yTPaia1p7oPs362Q9FFiut2zsxadpaNaUSagD5QM4Roo27XoLXXhbcXeXwiLaeWRSHqkz8KbWxY7mK89cwacLj1",
  "key19": "4XvcQFBuNBwkz6faWTNWwC5xcMyDHpCLHrJVNEoBnAEuY3RbmroVpqMs1SGhyFwVSoaN8hVroT2XeVZvLCcgxLkd",
  "key20": "4HeZAT2Xgi2uTCCQPjKoHRc5Cjbxwscb95PKAY7EC3beKQfYHxpCEpqamHgjSFTakg1dNn5CX5eXwfNi2oQpaDHK",
  "key21": "5pLEJhAW1azmrkmdYWUh5T117kDk91SJuDFQqS59w27tgea2PNTLnnb7StDcfX2zMekvAiDUuTyZiSeP7DbfbVQE",
  "key22": "5HsADjdmHyrVQxNPXfFnKurMwLJZ9ecwkMxa27FYJbHEzRNmNGhEjoopkSf2FhG4CabGxRJsTZQYuu1AMwrfZHPF",
  "key23": "5Vu4dWJVGAW6RHb9eJFDEZJTshmBChPD8NP3VyD87CU11ZuKs13wj6SBuHwi4XyPZdFaCnSNbP1vYMsLdBapJBT8",
  "key24": "4HCuG8puTVTH6UAMkR7q1jAs1YRgjhKev4kDTa9iFBELhgXcJSrRxuiWKFA7m1XxBvFxW24Nes4dCnZSCcK7Lr4D",
  "key25": "49uEaeaqLFCv2ZyxbMzikWVYPWWfrpqvp44ZXbGTZsAky7Z1YffLP1fSw4F614zLgcASSSeYxXndBguz2xcUNwrh",
  "key26": "5KEDgKd3bkF4S4UuFdXt1N6FZ6kMTJH9mKjaonpsaZoPQAZWyc5swMrVCYrsvzCuqbYaYKBvDe7KroWyrS6spcxP",
  "key27": "5oHTem1L77cGdBu6az6izNBoyJkKby89EZBxaWCLbTdVGFBuXRgAHQ3QVBtbmdAuifNX77XdrZZqjDX7nbC8EsAM",
  "key28": "6oBKTw2MCMWmNNz92aE4vVxM5XfMb9psaG8BwRoVuXTmEZMVGPfgHzeHqUDffc8CdvxoHj8Y3Wwa9GDD9fqgyt3",
  "key29": "23jXDpVZhdW9MmPdXUfchCTgveGSRDhQyjimE5EHbFtmnW5D5Ja1eWeoZcPbRRJjXzjGqJ2W1rFNGb24PVWLR878",
  "key30": "mBCGrqMKvGjM1DPTQ4FPcdFbweKYQ4JPZFFVmpTjQ2HRNuKm3km3Nr1hAqyjRt3WvsMY2Vv7FNtz1jNv7Q38aHr",
  "key31": "hboRsX6DxoN8kB1CoKgPjr8yiBzHLgurKqbxPqvegzUb4W83RPPTW3Zpzwkm4ttPyVcwVBxyPo8MF3Vj2e1a5qh",
  "key32": "34pC2eQiae2WZWnaTMHzB8tfkmCuVKMLQ2DpGTx3jEYdqoJdvqrZPX944ZVaTgrstD79dNnYyqU8K5QQgfWdZU33",
  "key33": "5vR2aSiejfPJ56KFrnQBcKtdMitgKLebfMRRJFvtPyjXJExh7YxjMsqxku4wtqL9mGqRf6B1CmDEio6Sfi8aPo8a",
  "key34": "5jc6jGDeFKkoxtjuGbHMRNQwMSjQbQdVpV5vQPzjnSdhJbQeAYF7j8TPGyYKKREKEQrvctK6yzRbZdoPLxZGPaze",
  "key35": "3439avjW4RQjHuCbsY4PPJcwZ2JkaDxpstmWmRYVm8TgvVgTmQWY8DtkZTkYLFBB3AkZGDJBvGwSH7aCYg2UGJL5",
  "key36": "2XHFwAKt1xKvoMjRoeePNndGJSBMTVNRYaD12mmz9hncdApDtF6mKz82SeFC6Xs7ESP8jYaycvYcFGfZsXE7PkWC",
  "key37": "2rYaa2bHXDDSdCtTW9TGSJS6MyuL2bhN9PobWepTzWmJweXjwewcmswcMZyMdWHUArE94JJ5ZRgQNteN75F35PAi",
  "key38": "5h29HsQAD4iEZEjm1A8pALpirngxzhysw4uoubhUfLcFdAJXpbvAT7fBLnEMMJof5BfaPw37oX1TEfc7zgbUBUVF",
  "key39": "d3RmTj2H37mw1mHGbmkxAHKGxKFxSoLMN9nktuP7rML7ENMBoQwmXDR3EWMHPuYd1daz9suaEZgue68ex5tbWm6",
  "key40": "3ZKTZ9FRdhMpjcjVZrPMvEWHpueyooUhXZAKnzxRoDfzb2As94eMgCMLQHeoNDjhEK7mh5qBxTsPMZyxvgf6WPko",
  "key41": "2YzAtSt13ozwYiSWFeJxgDNyMT5vvsiqY1Y8997gM1pENqY3BKF3q61eJ1acdXyfTg8LraBLk4PJZ315qJi1ikS",
  "key42": "2WxgGW9G2bS2s3LajSASmQHCxEjF7BuQFYspfKsHdPWfnbX6hsVTicy2kD4WXhFj8Y1bqp3VGws78vhQNLYW1wgu",
  "key43": "3RmQDW3rmoSyBay2UoRP36nddVFN9jchduphqAprDsLy2Zi9J4p1WgkWHNs9DeFLuy9ThugRvJy4UQ12tqkEg2Hb",
  "key44": "5oHhAnDaAY6HPcFcu9gUpujVsM3mPkjrTHAueMJJojREjdjGLoDGZN2Tw4pyHUywQ6oocveUw8pimgEYgJhkzP7t",
  "key45": "438Jj6LTHXbRs4DDx8Hzh5TK5o7rAJumfH6GwQX5RaoQUsaHNgBY6TRnEYEXX7ViUQzqt1wRQ3YcxVwPhQVdnpa3",
  "key46": "5A4tJCwBk1H6TxNm6bZRUGq4g9uyh6UAnUvzry1C2BAY4PTWFsCcDD2wVkn6YLgbqu2cK8KbvUkRcoPF5edeaTQb"
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
