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
    "5oXjoc1RyrStHQMfeSroxMi6vnahjLZdKCbBfbWqZzBALzXWAhBwwjXMGznT9Hwca7dRFNsaC7hV5GWoqhohWqbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LzP48LvAipqzzpqnuRPT1Lw5DUK4pHkd3BwX2fU8Pbve2PwbRW6tr3XwZc9BcrKRuCFZcZ6R21vEDmNKUa9t8Lv",
  "key1": "3S6oGYiErpRMPdGVDThFGkB2aBHYsFdgArtZDi2aukg8dZJGh2aAZXJggShqrhjGytQkW6Gwes7dxXkAga62sG1J",
  "key2": "5nZ2kGjk87ikLTZkEkwT1B9ooVoVg2EpXLsiZTZ88BC9Gryy8XiLxMVPWauW4fFhUaNg4WFTqKd4yCoidTxWJzBX",
  "key3": "45UsSHQtW6e9zMNsAm376YMa4BsgjuJJHGiPUghr6hTqrcdNGPQ9HWAKPW7kh32bjqKArfbhCgbdh3JKFyMcxcjC",
  "key4": "4uNDpiJA8Y4pdkCBWDZKEV13HxeGL5crfqWAYECeeKPDjQVJYiiSjkNoAAGvFSUDGaAh29quHv6ETA5aXw5XizZh",
  "key5": "djADtfpbgEwUzKh2UdaZWQs6zcs235fuabZqkHJivnYr2ZT49nhT66yHQyGkQ7ZzSFS2GA5oLwXJfeaf56e4gui",
  "key6": "5vNkcyWcS5ws4vf5oKp5VZfYgMDsMgm9xKwXRNGdAsNMuSDSNQeiCQvWBL6dYqrMwFkDpMMajWFfCkCRycFSDp6G",
  "key7": "cDCWDTYW1pCx7FMP3Wu16CStnufdTowMXLVtTDMNBhqcHaAnVLjTndrLEGyNJkMa79KYDtqnhP1SSvDDMV4sabe",
  "key8": "4gJPahtJe5DkQgHMa7TTDfjvryHecLXFMndqWhSNNmsJcDAQv5Q1pcmGHrSPV1Av8EWMapxY2ABaddSbX5RsXyYA",
  "key9": "2buVcLiseebyVJDraqkgcFpBU9qsFpVVRwTDnUHQsuswqyRkRXHkUQ47VcezKnX3UKM4Sz6zWd6GqnXd5R2k8KQb",
  "key10": "36Z3X6shecMjJMRraz3u4Zs8MrnUKcQDc6FcNGMU2TkcyWYzJ953YRtUfoyWFiBA5ayiE33m469h4CJarRY2vGxx",
  "key11": "6152FdYBgSPbMZsGdpAwCwdajJhdbqCDEojgFEp5JozoDAWrd1uRpiCGVt1284atGW3PMcrKTn9Bm533kkmxYmDP",
  "key12": "QNGSSMEaSZmi1BzesLW4nyhy9PZJrnuueUrsuMGkDW1Jk7VbwuxjKZwrFH4gLvTB7dZSjpw7JJ7DiW7KdCjBQ5n",
  "key13": "VvtA6vSLbSrZyQEYTeaSp44XDWCcmD3K2eVKDmMNhYNTevKDKqpcL1Ah3HGLqtRJZXxuF4nZbcADywNWKKcLaxV",
  "key14": "34KpCQVt6gGhwYs4kgPUJxfGxAUSvYT6yPKh8By9HP7faU1vxw7VzsRhRGukmeFPUQCBP2iDTqbWy63aDb5MAJTp",
  "key15": "52j5s2CmuDo8jdrybSk4zk3V5ZVKmaHYEQ4xfWrSP8zcTnNjAqxGhCFrg5ATuWNibeur5thm3cDJCCuoXCsFqamY",
  "key16": "4d8URUsccLwtKSJRZTi7ohDi3XFPKFHVQJRYnGy5gFGUzQS3ZQ5NvBNt9H1eMekby6gEf9EWMZd7iXxPRxjwMvUR",
  "key17": "4LJ3n6yRcy5v6yhXa4o9jshEKh4iFr2dNxjE2aegyDggEkiZ8kcmct4jEuUyw1zEygdwSyrx1EGhBrKL6BtetydX",
  "key18": "4St2rYqxznCG5XNVPXJJzVtYrVaizppJhtzuyVNU6TNaEBng1aCfnhKYsiL7B64wth9RLJN8acezhx4nSEFcvm4r",
  "key19": "EpJrVhvYcc7SgiEK5GnVDdvRNoX1C3r5ruehY87RECFZ39VX7BhJFbRMesaXxBZZ81eFibUHk6Bi8XhxVinGvGe",
  "key20": "4VVabFJMbgKNUZm4ddwgkFk6fgjmMJKYqKm7Yc1Rce9KTT6eJTTw5cWMoHaUjLN6zsr5P1TV7ZyKS4KpWfFpqFUx",
  "key21": "5Zvryf4qU65Cs5Y8j1372rjMvJgWKqMQ6FSR3VQZ6WDnRRxgobsquD8RrMkdSUmvnRKgTjRjHSRo2WDTmiKaNwLH",
  "key22": "3Jbu1dDxdyHKt9TPe5XiQMAAbPp7q71g5AfCXFS89K4D6dF5Vv9x2UqebYA1NAwfV2gDf4VtcmZ6tfwy227j94yk",
  "key23": "25QdgTUJVaL3CmGtZwcAThZeJfdfe2Stn2dhCcwni8wgJgJT8HiUso2ek5rcWM9j7riJJHUVCB1ZYkecN3WkwkyN",
  "key24": "CJovrMpUTNmwuLwHunrenwzmBRJM7BWvPuBtsvpT2bNuR6J3rrLUQdofi9YGAnLfrKwnJTN7bKv1EcmRyyT6Anm",
  "key25": "4DuHGioBEvKv8JRZPAGFiMF7KkFyYiDtuCJgFgCDPPXsPwnmxp6A9HjG2oMy6EiVvSR9KejjXt6UBicHKWqDeQLu",
  "key26": "5snJw1TVYXBgBAy6jcoc8Zr5P7U6eL3T4mHBxpTXR6Nod6C2BBEGgfjvcZXXJgyPddJmy74A2sxz75Ui7kWMFSvE",
  "key27": "2Snx1r861e5qrmFppBUxuHYPjiCbo65sLqtSocM8xuKpo1DdTGwa8zEwbXHw3cJfuFiBHZhgbkFsFJiFaK2SMMQS",
  "key28": "bqS5MtACYrmsF2DfSiw1p1SNfaDA9ZqgBUR6H8d59uGQV6ePh8psaiZq77gvRAXh7BSohHVZgAxbqkaN4sufmpp",
  "key29": "5Bc2EzyhsZ55EejQK6mpVHAEtGGohJcroJmCYDGc3nrPqVA7Pj2byhg1qWdYFVT8ivwFpAi1ojgZedm5KHCcsBLY",
  "key30": "3rMd8ohiUApX44xtKHsS6X3pYJ64VzxfHTGUzSDZUBktFMWLa7eSVdcDMUJtj8DvHWGcQ32EvELJqjVKpSvg9wGH",
  "key31": "4LmcR8yGEvUxksNLgEC3EJQQz7MeCG74uGZMnC7C6c3QMtyZzRT1RwxKChqK1CguVMy9PwhpVLyHyswbVDQxyvVG",
  "key32": "MWa7c8K5CUA92knn1XAj5Sp1ppFs4DVwHPqXJYKmLAwYcQChFNMrdqEVmhE1Ndy4VEGeTZQofaq63KZM9QEKTg6",
  "key33": "5Am5984wLpHK2yqqrDw5xfHkdKGaaXTjxrZMuUTMUCvFBjxnHg8k521qDMC6ZXybzWF2VsgjxKrVHwztAMuXjiK3",
  "key34": "PH6tNYrPcRT5vv8bW252d5SAycceXBTiBe2j43n9vAzUT81KuZMZzmbbtVb45NYD6bPxDsMtautebAPqsMisAPw",
  "key35": "5CJBf2HYhfuc8CKkRYPNFpJhLXjA1BR6MhPm9xZ1aewtVXa1992fPUYtc2L83Ja4hgqJ1n1RP7a7QBgan6AZ6wQT",
  "key36": "4tEUr8xaQrHAJ9HnUDr6ERWpRgiN1eHBHzvEtJj2aqWs9ygq3k61yLPJ9BS3P1FNTNzHqmMS8XYSuDfadVHet79g",
  "key37": "zwmkHJspF6eMC58YK2ARwxPoy1RDQmWjVaA6MHgFKQH88dPhL6uBgzSG8X2z3dJdwywgSscR6Y5Gg52zaFKd7dJ",
  "key38": "2eZXz2Y4SXPHgxXA48JjENYBX21QYcXcbaS7DLg1tbX7hJ6fZAzCsA5pEPuunT3FpMeXRrdgpbMWWR7LXsNzTdat",
  "key39": "JmH6mix8ZX564BY6Md4aKgxF9HTt4Nd5iToKGvMLEsg67DC9maobrSEbRNMYitXcPAjjj4cuEFHKUeg8JSDhE48",
  "key40": "5WZe8G56YKTQZUNGXRTvfSmcD3LjLDzhKA3NdAWXwX2zZ33WmXJymTE9fThgA9DMRwA8UqAp4iVP6VPQYr3brASZ",
  "key41": "2AHg5g2xREaNFXyjsWMLgCErazDoHHWhTQcs5MYqYfHNLRrKivStuk6HiFBYm7StRnncVuAY47NYaSEahy6cWmei",
  "key42": "5hytREusjKjDjKJYc2z4towChmnLgyt7HZUvAUAzVeEifc9sXcmYkg3q8B9LnKTcrcazk2yUSUH26CzZY8g5qhqt",
  "key43": "5AgfzhNTfr2ySfq5QSZ865nGF6YNejzXLDg8dQEAAHFSBdc3qEwaqA9tsWaE7QX6uQv6w1BJZzwpd1UEWCv3SBh4",
  "key44": "amdr8aXSUeVHSjrPSJr5y2WrBxQ56jV2wqgPHag5jNehLBe8Mgg7Zc94JP23mKnXP41BjAnynrJb5dK5oFYxE7T",
  "key45": "1CbvqGjbtJpWRTPQnnjkQcT6ZcpEQemhnc47HvqznTLHaJE5QNdyfRp4Wfk3mNHNNhUrcrr2CPSJ7UCfVfgTYbH"
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
