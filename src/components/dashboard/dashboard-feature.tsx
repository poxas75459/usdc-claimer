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
    "3h8rDibonvxGCnanpF5FjdcoDyw1A6iAMUhgET8gijyznTHCNtKZ3NSGieh7gmCHeqzGsspyCsKzZeYjDrZ6Sh1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sCBEBrNvss9vtYzVrP5CKVxCPoW24AhuoW7tSTfKmJxzFp8smvX64AxLHD2MBjxr5LYa1dsWm72Go3tZWK74mY3",
  "key1": "3djx8GZ1g26k4PEBpK3mE2Z3fuC4RDJSLZTnTp8eCQQmbpYedsC9nCNHu7Yh6gTzaA8JysS1BakopRNshoespd8o",
  "key2": "Z6Maip79NngayDA7sph9t2T4WYgpz4CqMx9peRomKVSpdMV29Dh2NUDSh1HA17NBhTsGvhDK1pQbknE7pe2uNit",
  "key3": "5wDse8cN3wGv4ddjf5WpDyXrokRBA1p3D7ajrAfoEbCXh4Ax2yWmKo5B6hPzBqL2zKeK3e9Pyviu22FJTVBBGCTz",
  "key4": "2t9uVv12KdWCEGdHwJbXPmvNzcubfKkMJ67BUNrQuUjnvbabuNsDZ3uNvexrBEPvKez51uZLgDBJfhkpTWLN563t",
  "key5": "4RAhhKEfPVMr6RQ93rfpRujkBG4Pgd8cAuzaR36WyPDEdjFXPqF97WgWdaJVX3sUTjdFTd1QkvHnE1ew99heL2UJ",
  "key6": "4pcyYVVkc9VuU8pv8K3YSXr64HmCnxo4unsNM27knM8buVqCgVj867V2xUKkrjbkELShZtfAVwPjGEQ9Vup9xygS",
  "key7": "2VrLuxFVcQhzG93WFNcr1TD9CFre3KqhbM1Fy1WdikN7BTdTimVijpMTag2eUtRqXd55cLqkSZz5TSpjwGh9MhiE",
  "key8": "5D46qcsfVXQhQb6AZfmJ6fKMAf7fufUw64vFEYthRxUFypdWfNm3LvNCaauC5Krb9DipHrMTuckEnakptUt6c7FZ",
  "key9": "3Cbeq2oJsSjtY3iohaW17PjmyRNFM524UFpiAgFHpbuFtLnbEVNNLGM1vBUGoHdiqvu4htXmu4ppfvMCQMW7dE4Y",
  "key10": "2jKbt33cA6y5PmE4ByBzfdz2ZDgZuidhD3JPf6UP7dZhAFFJWjTB97bZK9Lt47FaZc9tYJXC7NRJg1GPob3ej9JK",
  "key11": "vixwc2AM1Xo59zKtwXfmp1rb5bSfQXtg6bVwp6dPnH9nxFpqE6UYpcG9BetrtVW7sqRrDUsGAQzU8F3FdatgkQf",
  "key12": "guroHiM4ervVigQLhErFayd4PwqFzHKTadBKA5Uwa4xTPvnfz8ZngxtkwZF6LfUdJiTfUR6g5rkSrq4Fo4gzJad",
  "key13": "DVXP9uyrj89YbdLV1VENvFfm3zmnve4cDWRoZB1BNdwtdbEqjc1YCuKxGcRQ86ZkG2EcJMb4RkTPGfcUPkM5o1q",
  "key14": "5axHyqye53SfSCPizTyACmQEGBeVKYvccHGEneiXSekAA5NszQiCUkQhmuTt9RLS7VVnEm2oUwQCuYTU4UjRwj3t",
  "key15": "urUBxz3qmy5MFVmswjf2bY6iw1pKZ2YethNLvsMEv13VdEB26MqFXjxqRGhVXEUfTXZzUsz41mJup6opTSbb2Th",
  "key16": "4RabqyGvJ7BjuwerZmAL2FcrvbjdowCkj198Dbb42VV21uGVzP8cb6SwBPN6ew3SiGsD8uKyn16sNPBMgFdWsMWN",
  "key17": "d96r1aWXVdsZ6prEAkDw32Yh1W7FSQZujzPYRvsbfcfNZ2rdA1NUcwK5jbo7LvuBcai1PoF7Y43PfuJRimSYE75",
  "key18": "ukA73DZeQB4zSkB85Tbtq65AsLYaa6yThPGvd2Nnc4SLCLTVZfHKmL2Ha61d1K6oKPyfdfV1n7sPnP2RDXBqWFR",
  "key19": "tShsztnoamt3Vuxx9BUpi6Hq6AHdRYyovnQHH9zsrWSycJwQUoLq6iFoZFnUXsUBBDVbekN2ec5B2uNRQz2XjYy",
  "key20": "63QPk99kSkP7rJ14rKrEcQB3zASqevYB7hFe4YX1hnwXCFwDqRRL1m6Sq4VZimaQqJhkmYzBfaS3wotXtS4A1Tv4",
  "key21": "5J2PQhGPQSTnjk9BNTjeoiRsR79BiQFNvNPBCX6KaMNbVgrtPq8PFAUGoiSpjniNjQEVSAfGxEJHCpXFkvph6Kx3",
  "key22": "2sRy48KxPdS4KkHXBnkizT41x62NMbrBtDWG4NRydYzvwhAYsoTC1DcDc1XP3Pnxd2UJ9ejq3ZmXxreGX9r3ycMH",
  "key23": "4M5YZA7qvUayZwDswdDgauXpKo2oJvnE18kbN3aYjetHUY5xqrBQXRvsV2XyiSTaNUv6GNKEKZMFbvt9hFVad4kJ",
  "key24": "5pYYrbnNqf7awMD4PBoCpjLsEAP3GSnLxriwSN2txTYCykLFjBKkgRfS2u8tn3oSnsze68jYsYuWZaFWpDFgjVAf",
  "key25": "3CdHqRfS4xbbmv3g4p5vPRBXFXmCDEeSb9i8wUgQsvcpnjKvBCgHFLszqiefu8UfwXpCrgyuwf7PmnVoERwiYyiY",
  "key26": "4RLUX4sTanJUw41p52KSuYZRecS13QY2acEGDACSj1sJ6Lx5GA2pYBvBXM3G5ou1MDv3vNMBeJMbmT3kW6AfjXto",
  "key27": "3tCiLFp2GD1VqiSedJHieC3SvvZr2Ex3AAFGQogx4fdg1o227MiKsaQ2zMiXW1GnffrEJRsSS4LeH8FxmQ1abRyU",
  "key28": "Kw3vTHkffpQQTCoeXeJgCtWRhLhKip9Tf1BzDJ11FGWnygrarRxXSrSKCw7VBkXjmwZ4HnUxkkNqWT8nMUmGNj6",
  "key29": "3VwF1FpAa92pxZCNKGSta2KzDkcQgJrSwtZMaQ3jyfSLRCPqzjBSZ1nA9Rhq7Lf884iTndD7o3EJnT6yz84BYVrx",
  "key30": "2TpxjucXWrq2R7gQ2nkAAVpr5sCrK8EEoYRgssMVwMRFUyrVVYKahYSY3Rc9TA17YoLNoXQEodk3BCWRrUDQS9jh",
  "key31": "5uGJqAMvURfCc8qbQZ2dR36ZYuWpnpu1woBASMV9tvmTzGnW7uCrFkarz9TgrLH8Udzbkpxfh1Er3LrVn1srYWCY",
  "key32": "2PkJNAjvjNop5w53f7V7BdvHgf1c1XdLGQKQAPHNcczn617JBuGpmyuDAT9N5JwYBm2jS43KMR5mzmWJ8J3mf4jn",
  "key33": "35rJpYFjM8sYKWoSvMwEiHzjZFh3CENmcCUR2vnG4kguKzPb5pGHB2C4qed6DYc3CzMxdsuMtTdMCs5PPDUij6dp",
  "key34": "KDMAAvW6v6LqUb2iPvjzHAZTLhqysxJVjtoBuG9M9z81whem4c3MrWxpuC9MVwswe164WEkNZmeQKqQ6WzK8MhQ",
  "key35": "3EtFbo9MmeaFVw8p65jG9CuaV47PMUhnEqFFFzVMHc7kU34BFpHntspke5KepFhKJSxCc8AuAGWBi8BqFFc6qExC",
  "key36": "3oEmy1PfRnESbEvY4yu8gCVrZLpoiD63dXAy4BRrhJWwgJjiEq84k1wf11stTeZT676gWDMz1rZDNTMEZ64Gzt6S",
  "key37": "3wAoJYbU7Z2QWefmsifb9R8vM6cGTYEjkeJHRZ3GSz3CLvNkLjF5zbd5gB7tnjc8ucgr4AvLG33fftpKkPZT7ser",
  "key38": "3ziALVDzRJP2G1gHgYrj5efCCwFRPrYCnQRiZVshJeqGfsxVjG3BHtsgYHAKYs5Vj3CSjbYXcBKfpoPbMt9weJSN",
  "key39": "4eyXKGrHRHDDoPT72sngtb1vKDXnMHTWiWgauC5LDX6suu9my5hiJRypdg6r9LruJMWsUFcyQQYMM5697HLbiFhC",
  "key40": "3Hqu5XDQdpVTTW7oSBsCPHY6TBXP5apRjKWi4nVSfzUMwpF2tiMBziWe5mZa8sTgCBUwBFRWLVqQgDEjSHev1LwT",
  "key41": "GPpFuQcXF4UuG3nLSWBDgo6JCcCLhC843qwGXazqtdpnN5FP8WSAEZqiZ7HSvC1G84sc3ByLzUt9BesVYKAE9WP",
  "key42": "2sFxhFrhbKgALfht4WbcsMyG53aqYdjT22RUaoFryji96q9rfadwNmq98y6gt4Rkpp24Q2bAXLutxtz3ygxQozwE",
  "key43": "5BBXx1ACG7uoeFnMvtu9LzkmxePsuvcxGqkTAG4WUTs8M3T7HiY9JPjrdEGhQMsRrAq2Z4z3ZqVDBJpF25BsRbge"
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
