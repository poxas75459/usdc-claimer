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
    "24QxeWadvwxzGYPnCy1sPGjCET5qj167z463NZZmwQ6YaGyhcQAdvbpDyQoFrQPcRekYkS3jNX1dVyvUHEVmQsC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CpPGfZnb5SCStZTwXk7BPdFUUgSiMNuMTt1sC6Dj2rwUiGBXpCh7Fqa8A2Sqd51JqbSsRQHqTNYUUTexu6EezN1",
  "key1": "4EP9HiMcR5gY6bmkBqH5HTEGmo2JmrVMVKVSLhrWctwaiWrbdk3wVx81e3K8nNPCgCbo95XUqEATyJuH5qas9TqS",
  "key2": "4c6aVTyPqRE8YXyxYLHXTvwUF1kkC9ZofwupdqLMf3LpGcbUcCS9gcMvZgzGy9tswHTk8UJacPdFfGm8V1bLQjqW",
  "key3": "4pUY3ygrTguaMFNnfx8WQfC2r1DkEcHwdu4qVGP7jwrNSpoiAPbMCH42LeMrTEP9mGJRvxkBRFBzHXEpnQQgghwm",
  "key4": "3BpbeSomBpw4d97byv8WrfLiKcBke1pmZxSQkLbsGoPswn6otEqh2VQyKDmHx8WcXsiBCjnefLPpFBGGhdEd9xQ4",
  "key5": "H4DU24YmfSAEZ4K5ZaWTwhFMmdJMpmGbHT1G1Gzg2RKmcMuYsUReC3JA1X1TFG5TyxsYA4m69Sgi5tWM7vgH7v7",
  "key6": "4KRzgRgCFMb5wRdAKtHCUBUuU78hrSMQ3tGttABLjFmNEkWvg2vVhioKqaSqr4Bd5DtXztucfCGpR5qN9abdiPA8",
  "key7": "56YfKdnq6q9jKR3eoSgENphivnks1ZT5sk5zXqHSbEqKEWGAv8JyPHveKPQTX88rL3KTabvqFKs155je8JgDxvk5",
  "key8": "3VpnHi3iqwCxBW2zsFk1BZ6cmT1DbjxQwstdaegZ76ZfUbt9D7hjdWDijqhg4zRea4sqmVVQcMpv6HBpoQmVoPmY",
  "key9": "5s6bAjpv6HmVZM6BAEog1vM8HA3V7gr9SPGe4eWwKKVzykQeLFJMtz66SEyvL6Jp8XsUZT3MM91pFgtUvvKmULUA",
  "key10": "5JczzaL3gAd6Vuo23GBWmmNrBpZwfSzknxZUpWq9EHQZt1GjgmNHqKeSRj1Y6eTCTSdCf1NxyBtGEjUfY1Agnhh8",
  "key11": "27gnVgSvcgiisW4V9HvK2DMwFjjVDkSLdbvkrCHuciL8kr4pJLrcNUgQKsDMwKg2QFkDS2sVtQFXtN3aa9hpHJGr",
  "key12": "4SP1dDJFrR634K9FwFVL79NaQ5Y5pFydAsG2gDegwMPuEszw1sDwxnV1ASap3NqYHfqPEg2KSZFe9wAnun6dFFsn",
  "key13": "EFkgbZvsVkUwDiDZMWyLjN2F1UsJ2QU3iZdRCnKPnBQFUsGHQC2o3kxAu1CofGKQqvyRqsfLbZx2vN5CTJ1TtHy",
  "key14": "38ziyCHRhn2jybvnB5BtAroofeMWBBri68b7SPNFVbjNeyQ21Vg7ThryLm6T1dZrMFLzKb3PrdZk4oRk2gtcXxuj",
  "key15": "63kXTWJZFbBhd9zGSQbPKRzkPZyRAtqgcedLwYjEEcHAnCP9Tk9Ay53hGpx94XDCJjxBtmW3sTvJVtm2yTTAfo2r",
  "key16": "2X4fkEAuRV25GVvWegWEWhcfMbjFs1rUiaVSKSMF42UJDoA5aR6L8AppEutDEPmbprvXPE9FGBHfLMjTw3pdMgTm",
  "key17": "4bmtJsyREWL5rxw3JiNFTDCKD2JdLJ1c8qvnaCb7rwZ3rCMTWPXWj3MdehviRAGQgWaDm51KPCjQCeaHRULNefXm",
  "key18": "2UzZw1Ri4bP8ogqZaQfdz3nVT9S4mc42c8TLyAuYP8bjEzkn4xkn6RUjYL254BipqxoaytvAECg5FchnCD9UTCWT",
  "key19": "cYWXo76cFKbXTKB273fxhZ5eNk1TTbKyAvpzoJUu5jPdXbm7kF2W2n4vdaH3Tq3gzGhiS1JTAPArFSWgkYg6De4",
  "key20": "RdHjeSoMFuptaBQFJGeStA4CdqFdyAc2Kis4JgfwEpjFpmRFvLtCxuZoHxLd2AxVh8zDmdDQboPXYb2wYDhswAm",
  "key21": "48LF6ZBeMcG3CmhdUr9vwAXvxB1JSGi2UsU9UEFE4CkJzYRgs6p9gMcf9sKofcZb9hgVt3vmXHtFHKXQLRvCP2sx",
  "key22": "4PRTTFp1ZKHowjG2NYvDPTrfdfngM9PY3818AfS9ZTFEdefjZyMYdn8V996WUUtE55XTfjjQehfDGyws6xzNscKm",
  "key23": "upARKi3MjmNTKs3rDMwfEgLbsCmgxSUEurh1PCh2ZJNybEYZoq4n8m7nHwjnkyCWyjzi1Tqh2Tnb1L8wbKymnNf",
  "key24": "2f47BPngUDj3zgpFnAbEKnJqQUztJ6H4bCyCqddA3BuCaaBdgv8MEL45GeN2LA44vd38zGa7CUb4ZMUL7PDUsDMQ",
  "key25": "242wJ3VyRVxtH9o6uobgbMiVwAngHMKHgkUSmJRgZvDBfNATwXsG9F4hGwHjyYCF19XssYqtdEXY78WKUjw9UpDe",
  "key26": "4iixuGTfL1g5d6Tmi6akJhsWJG3AuZKh7NZcVFKVkYJeNGo9vx4AZnppTCAyk4bbpZmAsU7KaYHN6CiubWELDWM",
  "key27": "4wU766Q5VzTxYzt6JLYNovgM2r7RgABvZMgSUtp98bv7w3cV8GVuEKiajP4fX6uFvzk5i5rHGZhkicxJ1L3SUiKm",
  "key28": "2w9QMRgThoU9mCJ3neAH7BVengRfUwaTywG8pDimivTBtSBdUQo2Yb1vzgBz3Kafmmy7N3BokeYGoJQL6Y21r2fG",
  "key29": "8J666C33NqPebo7KX1AeMXvCpoWB6cftM54Gzb4t9ux68MpHHRFMDqB4qTPaVdn92NQXTo5k9NUbhJVe3iuvJPS",
  "key30": "Ta1YTz11ZKZeVwCKHxdehpeDPavoNMhSGFMxddAf7xgJNh9Hw2VJV15tBwfPYy4n551xJNYtWt3NwvZxtSdWAK4",
  "key31": "3VWWxDUkFNmYP6DYq9EtNNhvj1NYRfFewdACSGqY6Pu7XR2g2nCfwD12TEcs9H4RxgzqGryG6JfwQKqBQnGRgEdj",
  "key32": "4fQAqLW3X5jSnJPC3DWgWY5ha85nJk5SUCJBsKgjkDhXqgNGD2i29jUWMbX3gxMHz8pmdegun2Uk6Hs3ngX1awvt",
  "key33": "5xpPhSFRwHkUxRndzJ8BjoQYxT3yDVEdC6zdJHPy19iK9tdGU5Wx5X6R76kpEMb38RMGHG24q6n6pzDLYyzuXqvM",
  "key34": "3Uk7yLAJWPRfp5M5Ax8UmzQTiR1kKfsE3aBx8VU6qhpTEj2y3Fwdmp5gqarBh21Fjqr1bD8Bpke5QP6qnecZXpFt",
  "key35": "5hYUwdTAq1R1zKLgQhCafsZSQ84SrKPgbc8bsSS1QCyosWf85FWgfQzPhDDcKjErGCa4tzZxe99BuBVVae76QSgx",
  "key36": "2jofmFaQSyceeHmVQWMRQju7FBvPDT6iPwUy8MDP7ZntekcXuY7HRVrKtcqW8VHXzzB4NajAZtJF48Ec17tSKTgs",
  "key37": "3m4WMqAXPXhLrDTHby9vounyTe27AtpaMs22djRKQb6CwwoKnigpB9huBxrvmGLofmyZi7mmKy1gWbuD4y6vVouq",
  "key38": "3aoC6QyEPi1edVDE1C7YW8BEHCumZj16xcKKcKL7PA4EHUAtADbJ36ad1TXPppxNZzhLMWZAi1E18LE7NMN1NhPx",
  "key39": "Y8UYJau5v3DoPBSrpNpLVdzJxCFJzPfLpVCUr25GMCcgy28fEVXgNiLUG1qp1VL1vZ6LBAEdrJBHWp8wpgnMbEV",
  "key40": "2yKfCbSWCFFahHy9MFXxhEcznx7WweLzeNnrqdCLjRRqdWybYchpeMVv6e6KgV4RGAE7mrT3TF1h3i8qxbipk6Rm",
  "key41": "3cuTR64NLsWhbYiYeQUPqNdu6qPn3dQSHXXeQd5rcM5tXV9cN2vAcFdw2nTGKZDgSE4DE473Gjn6npXRGemQ1Cez"
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
