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
    "SmhKpZhmehEsQDDjbJTsNQcZnaN9UhBuNBvnB71F3phqiH2GF2S9X8xZBQBoQstanXHnzBPuAWtRzodJ2j8tqrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q2bjab7PfNr5JvQ2kDdSDoPJsYQESjUfz4BSGE3CVpkVd9fZQjMjH4PdYycYPqLBxLFVX8Ugx2nBadWogTjJBik",
  "key1": "5vrmEkjqvFgxSrLxXgGtYiJVnymZQsTQg3SWbrQ3BhRWaWrRYBbhnY8wyEK5p9noaxpMB6CRX4xh9uqENtcfJxm5",
  "key2": "5yemCyWgdQ6SbpaHB8VVedw2BFomaqM15AcyzPAFQ5LXnzXKxDGTGC34AkKTwsRoE8vgzLvgdUMsQeR3tPKEh6Rp",
  "key3": "4kyFTMWPzDoSDjqyjgWUuKiNJ1dkSR3L16z6NbamoVBXTQCr9zmusS1VUyYNXioWXsuGcWwyupsuzTQkF7eFo6S6",
  "key4": "2q4JwXsXq1LwDRLfPKUhGR7nmuoxSzAtCpafSFUtFsSs4D64UTXGeDqu9KLx1TcZ3dfvbhLvuKsxwSQRHosTt5xm",
  "key5": "Avzy4Dkb6utcMSMssTRhLdvmqR6Emt38htCAKTPbnwa8HxN3H8PTkZBZNaLHh4DXiPgbgwSnXZNcqUw2oE2dAXm",
  "key6": "2ezwQouzhWamiKh5H2o2ocNiniWbynDueWNmFeWQ8cdGHQDVHU92fP92rtdxHWEDRT822qKSBV5xcconToj6eMbq",
  "key7": "3i2ndqbso9hty7Sg3TWUEBnBqk9BGTTpN4V1w5d1XA6djah7amthgQRAAJ2soFKVwsFnBv6VigkZ7txNULkcktpT",
  "key8": "557pv7H81nqBSMiLtZr28DJHmeibYvDYiMrzU2BZMBr4R4JhfqFugrmvriSx3PD5pJkRDed6CvaoGqkM7gWxa4jx",
  "key9": "3hLeHEdcFf81odQxvpXv5LRMZJ2whe5tsgxkbx49BDVTiUn2jBNHQm9T4s2Ldyjt3RWJSkdjqc8LDeveUk8FdGgD",
  "key10": "4FzA9JfrxqBZRs1zNjAakpgGd8pZN7EwvJxr9E1y9egRPVh1hr52b8oRxjN99jFqmDpGT2DraWTmQgiAgQk8kBPk",
  "key11": "4rF1y5NTpDwpkNsG7Rp6vuW52rkmgcZQPmywcaWJTmELRG4gq4iX62rAMLUthEVBLGQ6eLZVeFTNr5GRMkMZxYvt",
  "key12": "3SbVScGK6H9N3EWaVxHtNbMBnqzgqbiBrhsk7QQ3c9U6aGcTyGMpc3UwXCVDsRgbPwVmsdebGLr8z5j8Er9mk5zC",
  "key13": "5CcbkbBM9P9pZE3pnSakggr7GbrRFaoqEZWGxJUNqGpHVbgsGhHZVLYCrfpWnnMXNN5WjbSpzDCFyCCPQyrf78GB",
  "key14": "3ad4JSWUd7TT4uAJMEgD2avtu6LnF52bL5WDKVQoc2MMYQLaXfkrKZwsxtqHHskxxWZvmwssxw7eBnyUnNzc1DN8",
  "key15": "2FgdraojqdG4XBfDcPwj6kuGVMPUkeqd3Lr3meVNzvnvetpK4CRg6vCNYhX37gQkgXkdRcNFHeHCckQPzeEe8fkY",
  "key16": "sDbBgiLAHLqSEQRE853eSW55Dg4eCrQm2rvX3gFRkVHKmvKGXPd17Mhsm2jZ3jqTar7o4CBkgFV4287cbQZ1i8K",
  "key17": "4Vr952B38vDj5F6duAr2EjXN62zeBahFApbsf9H4eczzx9PSAxi7LzUhnuUJf4skFgbRsTQvaw6azvoEunvbSzVH",
  "key18": "3yibqyPAzF8BgPeFMFW3zLWaJb8vdYHGfvAYaAbdtjBG9ZSFqzXigPQKpbtSyujwVuiohHcX9TmPCiZxD26wAe36",
  "key19": "2JXjWfvSd6VgECwsfiWmfDQpfzo1ZDhDPt7cmzXAUPMuTGg4X7azcuc3gACVXujo7Tmue4kr2WNZW6b7Crm3kyRz",
  "key20": "2SKQ9fCDMcGwLwNjVoUdT9GFtSU5WRUfBdZ3Jque3qcA2PBLSuxi2VZ6Bvdw5oGGNrPzkXJe5vnx2YT46BL5fSz3",
  "key21": "4jb4fmoe47bDAc2ddWQFCtxh2KJ4VSGu7dAryiAWjBx3guhtqngjqUN3k2ijkTAg3rgEF4jA3FKQaoPY28dSupq2",
  "key22": "26Y3R23HAgC6d1uEuH8f9VH7tgJhv7NiZ3WqfQh6C1eqNa5ePyNHvnM6NRBbmV1FXv1beoKN9X6wudG7p1ScYRGU",
  "key23": "2YRZMqRpivpzRsYSYtbo6k3ePozzAUaCc5XpW4w7Dtv6iuSWBavc4vUjZn3MCgkmGnWgWxFu1zo4PnTpSS74sQH4",
  "key24": "3KhSJjxZbAtLYhUMWwbwVxGPX8GhHRNs7JPkgTPiUZmEYcNL9Nq7HBU29h4pGC4MVjzYN1HwJUCBuD7NnCQYNjEp",
  "key25": "pjRYGExZuavtMKxhErKp9bUW4aZo7ojHjoSU2mNokbhrv938sJw7ABDjxV21D9T52cLNRwRxfapnc48dYe2iWvZ",
  "key26": "5ACDDBHouq7Yudn1X4bKPVGGhsxqDPmqqCtRxinnuswxisN5YHuamrJJjAunEEkAi8GGeUwKVZgW9wseph9qNJqV",
  "key27": "2sEhx1ARH7FYvvEkD6A3QTFbYfmkHo66uwYBsaHU4vQ9QxSPwuwZ9wji4uzC28bU8CvYqCvXbHAXDsGtyVwwuXME",
  "key28": "ho7uWEvekfpWXT5A7MntjU5bbESSV2v3id3ep9cBcMwxgCcwnPPwgV4VFWqWcD4ohxUarmbe4QEyyQ6qnEibn99",
  "key29": "TSXynNGfkH462zgxg3EZTetGYXBGBBY7zW66qvQGUiXB5Q3XPYtJ8i9kz5eEmiUmAsfMyK3QRmnt4CxSoqXj6bh",
  "key30": "44KdFsWzJYHaBNxnE6BaWh1dfA6zxtRwfZbfFawrZ6Yf7yvGe6xkAcDvbpfjMu9byEZdd49oQxwzT1PxBqYJFi9n",
  "key31": "49aWDxE7VJxo1LiVHN3bu6kdyfudgrbjZsMgxgQA69Hry85UhJn8VNWF3sYyn6SxbQhe9HkD7e1TT2bgyHkppRM3",
  "key32": "4qXGRxMuFq8JqC7iNpdN7r98YN5XWCJVc9vv5rvSXo93CHjyt3wWkkqkHz2WSZFLUvAMVU7Q5z4QYoNoPWrkhbR4",
  "key33": "3saSw5GFdd1MPdfavawadp6CW8cpaGniaeAnkvWXwv2LE6gSZLNjJNw49ktLTSJysPKbXoSBTzdGnhvyMZWWW1qU",
  "key34": "6Zo2ukU6DBm6coJymQYGETZaDbSS8esAYs1brhJStP2VoZKC1zj5LW8XDsJRHiXKgmpRq3bRxK6NW5GkmRgTSLC",
  "key35": "5Teb9FcnrrKYpp6n9Wx1VUdLRMdDn6bGjoRmMWS8MEnfZKBf97VtLycrL134RaKomayqu5Rc4baTunCdhzw8aDiP",
  "key36": "4P529ve7ytbuUE2V7zQ9AToRfQJWe8NYAApBGkX8qdBkj7HEmcGibm9Mvq63H637YbZcGMTCKFEqEAWAuCxykrQ7",
  "key37": "66MuFABrbVkRiYw9AFogZEFo7haUarXgUuesFoJshPEuk5QEFy27V8sPz468WxUnr343nY15fQez8vJA2aBoG6pU",
  "key38": "xT15aer68mxHRo44FDgkeGBPh82t513v7amis3d5WSj2rfjXgZaS7kQxvJQF7agnHAqG59Fdeujf9Vgx3NLQgpf",
  "key39": "5bL2aMFSv43jkpB8RS3cLwHZrcUJg1kvaJtcbdeY6YVoLPoSqyG8drbSkxvgFWeUKLYmArfouLJZpXK3tydX6fcK",
  "key40": "LNy688ZUBeyLrvX5Jm7JsvBmKKdcWCh3TW2j92mxCpkXDDF4BTXdNutiobnoH7PPBJ4HWMKDGygRaZLvmJW3HzR",
  "key41": "5FzrV6GHVLUFJDm3kDGrhY4SUwQb46Kk1VpKM3ztGe7hxKiroCTmpQuCUJEPatbpgAjqSVswBARDCPghvpyNXKQ",
  "key42": "4n5nbNzWZcYSoZq1VtziaVSMMiWgmgXmm9svEj2Zh3KQLscqUkjNXALvsxCXVnfwDsZXeDMTHR1fvDe3tM6dc7Mo",
  "key43": "FsJqRZipo7gHppQTGxbMoeGEDv1fJvfVDy8FgS6WwFhSo5vZnC14YfJfhvhHWRhYyXfHG5c7w5vMomHVQL9gZH3"
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
