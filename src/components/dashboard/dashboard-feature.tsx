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
    "4i4q46EhB7C5X8vXJtCbV9Ne8d7KCNa67fBH9KYfsW4WsjPuLuEpik19JqkGRyeyF4fpBd5wcKTCWB3ihcdWkwmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LVPZT39Z7D3yMKdWgsfAhC5xZ4itCuXNDteEwqfXd8WTNeLaC48qUuz7WHyXiw8shiHiBzyvYHttivmeaoQsqXm",
  "key1": "4FbtTHJZnxMvZd2ngTEPNkcP4KZQCN5oYwrMszEwWCj6SAk3dK2vcnjSXVhDqmsYQpb8sANUm54WNuv9rRgY1fXC",
  "key2": "3sGKzYrMxteSty7DFKJod7rbd41M1VBRWfGr1gYhoJesUMdoMQRtdEVLKMho9xEqopbAGzyqFQ7V46ZzpKCGbbkx",
  "key3": "5ECggvUaW8r2sZjQZbdG2cVzkcoCaG9kKM3ydqewGiK58iYyh9wLpPtLUCDFwDtWFENsYJKHi2zqCtgAYW9X9fW8",
  "key4": "3Xyoop14fZ4dVLw9vr6D5yw5xnUh4V11w8tz4eTb95CssyTCnj732XHLd9Jc1rHwAg1E2fA3p2BMAdtvxtrcbvFt",
  "key5": "fGt6cxbcZVsKokY1ZMEiaKDQFdfEmXXsehcK1ofx5YSZv4hDmcim6v13gZNhwjwHACpCQ6dy1g4dEk9erpq4DUk",
  "key6": "3APrmN3tEw6qbWWUrzgjxm7M7GHdVUcPKnjJ7KEPM9KETV36Hwi4Vu9DPBqDoif7EPB25nddjobZVvNGrfbmz9fh",
  "key7": "who4wqAM2Sti4nBEjEhfciJGhyFoSqxCKaVncJpthR2NBpBB47zFD8t8sirbR4c2GZN6GC1Ct7q3scNzVVaphna",
  "key8": "v8vgonsGTmLouuqq5BG4EYLT3fzHveHX9QiL6xt7BbHPohv1dsyiNxjXa6bBaWYfkpkswcUtqXMonu1c3KM5QDa",
  "key9": "v1AS2tDT9d2n64XCgoc1uDKeRqKwZJpmA6arZbYWoKEsgRJJE8KHAat9jbfwXnKmwZkitnoT69eKg5BhGGUiPCv",
  "key10": "49sfeBUm4WurmFVhc1cyP1fAdhAipicn7sNmaBmh1GCGgDeJFy8SgZdHxCpiuNW66UjYg81Rpq4zMUBUdU1pLx3H",
  "key11": "qimQv4hkAyVYdf56crvpwJJ5bxL1QGSmrM55Nf5seo93hxTs5kbzM2PCbyPGz1wjDvTG6uiF76CaJVFkdPdB1HH",
  "key12": "4gxVoPQtmUcEYCTuY4vyPDrCGSJ23EURbqUC7yAVQ3BkP6Ywi7SBGDegzqK8KWT4CTdnAi7imhBZWqXC3TLgU8sb",
  "key13": "662gQUeiNGcvmU5aBxvqFSLZiKqhdNqEFZQvkxj4DvGgefv1hWJAPaeLmPA1dduEv11cYKXehNEYbbgAz7Az5sC9",
  "key14": "UmnBNpEKJQvTjcrBQLENuJyix51DVxfUNUJh4whtAcpUocGBktWhZr42nFDNzHXMSwsEBLaWy5Rqq3ACZG83yBF",
  "key15": "4azTg1z6RBKry9zfZgVmL86VDcbBUjfE4dW96Dn3KpUskun7vjr5Pgoq6TyTEw8c7xjMcKX5mPup8xeyvSDhK1Mg",
  "key16": "5mkKoUa23HUbZzPJCFD79D712gw6Jpci4BuTitapAQhARns2K5Sxk1bwwPToq7vHjhKVME4FX4pLhtnruZoErgT",
  "key17": "3EgawPhx7drdTuYsA7VLDgm5pGigUVhgm8fujX5vpfJiFknGw5G6tto6dgzCEoqnE4sSf4ZNekcH4XNK2fR4nxVt",
  "key18": "3dpYxTrPi2N1AjBp6thsiDYR1XywteK5no4BRpDFyh87wiMm33kUBqjorTFWgauWeBjjmkpvc5CaCMkuoT8wdmSE",
  "key19": "4eRbhiL4YjZ6s6tcZZTYpMw6nDH6NaM6TUo2FQcqvwwrQC4g3mkNyA5LfsFCHh7xkUc4nXaDmWX1UhCfE7mk9RNT",
  "key20": "m6uFak9sNKU2X2opXDrnYFFgtRCw2jKQ5NehZV1mg6ewrF6FayyGUFxQQLimuRPvVofLhswot4pgfhSDmPx5HJo",
  "key21": "mh3RWyWFW95dActchZPCfTCyJbkEnehGCr1t5WNpVZG214eHvXnvEnopwDaJ7hSrmyAABBJZVyDkMkTTpuSR9aq",
  "key22": "2JvMNSeoGaRptt5rW2uNSxaTvjXjVPuGiagBAZhno979tdNGdbW2CBXctFiTx52yXhAn71VvxPWQtmX3KqEpDhV5",
  "key23": "3YoMo9KKLoyaiW5tAhRKCFStBmVFYJgosKND3JSo44LKnfQHjFzgzH5WcvWS1g9KJAr6UGQZmhnHPMYhGW7qaQcr",
  "key24": "4UNmj69SCAdgSWqZT1je3AYpaNN8Proo6TmnG2puAogWvoQyWUsJ23LBTay3zaeWTSyMNM9rtYnTYQumrFuL5NJT",
  "key25": "58Ls754KNQEVY4Dj4atfJvstMKYEipktzKoo6ADky5hWpfTvqXnfbi8yNYwwscYM5LrxA7EbuvfpKgjRKZsmhcV2",
  "key26": "2yHzwq1s5oejZYKVSkmh56o2LfBTC18s2tbsekoFgzhDscjky7djnUGAt34c2PJqupVRBU7niK5QYmsDhGcQhHxQ",
  "key27": "2BekgmZru52oUMi7zfW1jqdqS1sPirVNLViFerCBiAnaYcJWDftRU9adrCjxtUB73tTbM8CfwwC2eaUvHo2bH5yP",
  "key28": "239UzomujiQgqMqyZKGB9TaBrPJZjhbmbfuUk3hanCkQXMkVZjvwAFiVuecJUvMyMap74UU6Gh1o3KpBARwUsiYb",
  "key29": "5S7LpAsFxsKrWMma1bBE1DUQXUbsYMpujChw5NWzZgUyXr8Eza73Ptr92KTVSoFnittngtgKBRjRBzysFnYGwy8s",
  "key30": "4znTHFirh1XxDWMreJjEXnVpdZZXcMZotSjxQ56c3dH3q64yTYtFrFAxuNtNLvNNUUCLdVbS2ovWdHAQgJ7VEGFw",
  "key31": "33SvQaJCuCik96sLSSaiMNUBeRdxdVs53R4oswF6DswSqgdQ1mRVhKp5ogt6Y4UEwZ8RAfSyUaRfqm6rFKGraiW",
  "key32": "Z7LLwkEu9UiXfHaTX4mpNZNb8vLVWbHV8s24fEmYAwkcCjCFA7sfjNiMtggbVsqekPkm3oiYSYaJv18sNNoKgMw",
  "key33": "4Wfkf6u3F2AVLTrLg3vhZMYQyv2PSP3CzbKTSRp5LucfF1KHML5b6QYpKxsV14b2mNRXfLBqG5Ai5yzQQSMCDHvK",
  "key34": "38xChwAgXTv7RFzoLv4Cd7QcdrvBimFJMUMYDzvcCuDYVMacxDS128hW2WZQzsJxEPuSCZP6ntKF8g4auDAJD5i5",
  "key35": "4bSMpeaZU5QehcaZUaAMBAw7hZRbWadHwrk9WMFwshs28K5RN6Pouq7cPfDZJX1VNnQdMYR2wT8HoMGm8ZZ5FuZD",
  "key36": "A6Rk4SDbt5sJ18gcX2K9mpezZJt3oexVu81neKBdQQeQ38vfUofHf6rznD9YD1uY59ysXK2F2jTR9uqj2Fpxbcu",
  "key37": "3gxn1pwtAosrYUtMEbRzn4tpEgWxBkYZkjg8oox6CYd97NDL6d5TnR6rueakQXYKCixBXnoVDb88QpvUnjfqc6RE",
  "key38": "4NBJtsQDT3jpzUJ9vLhARPbsnAAFZwkWjpHs9erQWM2AU35ghjiS5kcXq9KuCrmJ3f71an5iEd398sq6JreXeHAn",
  "key39": "5yN8cecVYS4BnkjrghgfBbshwK4KR4CmGbNYU3wRmdaV7UbaHTAebAx3gjPjK2rFhDxkPfNTKypXHDthPZNoBG1a",
  "key40": "3AmAWLKjDrtFBvwvWj83ydQZWGnVnftUjbZj9gnntTsDCjy1TxVW6wbbRnNrKwinJkb2YiqBLGNE1rzuetPMekrP",
  "key41": "5StsUDKTmjEuQPZM8y4X2DkhTo2xKVHsx4aC1RTG1qgosqR2pJ3fTUs39CcnUe3knCJo4BU1UfgEcD3av5Kn1E3x",
  "key42": "4ab6oMNU1tPcHcRseV8Ad2UsP12y2FdEooF1GVLVaLiv1quBVpkQyaamYCL3kNMD82KQEU9q74Eiddi4bQYH9XRV",
  "key43": "5nQ7Y1SF17mz7gssRgwTUWz3dib6JM2fayemyr2cVZVSdHU1py8Crm5jKbHb7yCnC4zfEdvs8LwG8U6KeE5nB2PQ",
  "key44": "22UTm2MfTbjThzh54cZpxXRE2Zky7ch6xHcKa1UA4ag1j9HdvkoHhbpt13L6yiKUXCqq3uw8NFmRRfxMr26VvNEy",
  "key45": "2NZm7ieonRkKLQj6ZWsyagWwiUXf4RqyVJgTG8sCrXfhc3vGCt2YrfnUv1Q2QU6AZswsUXEzBT42dkZAeAu6WUBr",
  "key46": "3FgqGirXQ5WQiFYqhBuFoVbtHJnvDywq8KtTg2EkJ6Gzch6dYEnYaXV96B3mcYXGgGvKasYWm92xf8zJRh3jUmiA",
  "key47": "3gBZEuvVWHBMXFTbUcUEitq4DFRe2W2uWJRqUH8JkBrYUTHULuYXixj4yLAdK6RBM1UEhHWSGqZ7VTm3zfZsoaVE",
  "key48": "iYskaEoxqavpUuuu72pG8eg6495thKn2wtwh3FAhdJmZeMEwFoqm3BJHgj6rLbMDG9x3B31eU1YDLaAWcZmSPiB"
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
