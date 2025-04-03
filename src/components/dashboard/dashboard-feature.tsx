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
    "599U4LCWGHt7NeV3NUSCVXMNFuAxwVoU7jkkgAn1Ta91kUbHzPuUdthv31PNkgNwBeGyVSLSgWYdBF9Nx9inLBtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q6czPQPrNM1tMzkw7dpYQbndYw28RkomX3nSP7kFVZFSweNTjiwtTnFGmeY2yfnGxAvDtPPsQygDQBf2V9XwJvj",
  "key1": "3dj9jMse5BctHc4hTeuQi4U74Zc9a8mUdQBZ7GPWZFFXUnAjPuPkWyu4RHjUquharcTtAk6qAC4zHVcYu1xmxnxQ",
  "key2": "53YTv5U37bREuU1Y3hq8LjBb6wDC3Rg1TFsXgcjiVe2QF22U9yb17v9HBecNjaXFf8MCZWLcTM5NyzKUMgaEizFJ",
  "key3": "3oY5ruM8mcYu8zmHnZLosWTy5wuHyhQyPzpamMEWy1AYu8mNWxJjQc9wDgqbVpx2HV9YGsr3KHULVAbe8Axuwt8U",
  "key4": "3G6TbNUWXz65zNndKoCKDBZ1hJ6nR8QSsYNpptzUZhfWmWWVUYJ52AYUgXxpxmoUqmFbTTfAeXCgqmRjDTzcwSWs",
  "key5": "4J9LHJ4uxAfhN9uCWqMyWkDoYVvsohEzC3hRVztNfkfS2CUsbN2E2rYabsoKRhc63cLdpCJhfKt3e8oDg2gxgoxj",
  "key6": "4EqqZwPguyBodjaWaR25nCJLNsP3Bfns1uLctZNxQHrrjNrUL7UV5gYrjDksnKJhqAMyhZeMN2PK1nNrfbmRdDZq",
  "key7": "5VPS1jeEtGnLwWDMnkrSiB3v6Ywg9ifx955KqAMYV39xvytRzzYwuoN38XRVEcnqN2YHtv7V6VYNaL6Et35PbZB8",
  "key8": "2xN5j9ZBKbqkC4a3M8QF5EGKNK9KtpHK8V9BFduMhP46zTDVnMKKSDQrPYEbeokEg7t7J8RRobaABE9ZhHBPEbdx",
  "key9": "4n1KATRfSwNhAT8VbNiBs8mXBqVfooDFMh8dAmwrPufwVNyzey9SWRtjwainNJNk65qeFTLamKR2cUWiK4ABfjq7",
  "key10": "5oJgbW1cyVpQWxKocbYYGz4SieiFTfAm6GBxyw5EaLVzukqUDDMtNmZKWKQi6GqBpfhdMcaFmcHXtkEaGGUZv7g5",
  "key11": "2wPyaUwfsm8CFaLjpvZfe2Wi95MqdJipGAM2AmVveseVvg5V54Kze6TTESRX66pEqGHF6JuP149BZ3eWhKfzWwCw",
  "key12": "vjbhJwdbS5zqjrdUbPXdF6WnzYYSk6TpoXcx5CgZeonCM4GxFbvB6JzZDJsmb7feVLQv2Y6YR3Z92FE6RPFXKcc",
  "key13": "4wPibjWA8gXVU4F7PWSC85CipiHcX9ATbkv8YoVWmwZMvX9YMMtzNWppJ4J47e2gZwFpXVNBxQhVP36A2WWWtwXW",
  "key14": "5Uf4ULRD4E2vVgqVWe9P1vfGHjAcNgeYfBqSVpnpsruGyzHtqkbUDzz5zJMgQtMFMCW8NTFfjTeAu7cbeKB7z9Pb",
  "key15": "4VgDdsZ8nKXVVP3nfbjJyHWEfSGtSW1Yn8b3iH6dXKPU28fJnK5Y4dWyJxQvqPnNr5gWcc1W1Vi41vkjdifuiFZ6",
  "key16": "3QNUu2JaiBVcnMfiKzUVeCBBXGzgbNiQKr3Zs76qcRz1n3KjR3AbTAYuFWHjkicPgFhTUGD6Xt2SuE3VYuCdk4aJ",
  "key17": "2G9EKtmKLjYyP3dCkGy1JqHfquFQX4noq4941XXUdUZ8YN5ndRgnSdRjjvDWAgH7i82dFTUphhUSdsDB4Z3CkDxv",
  "key18": "2gySZzQSFEAjYRFp5dWg3BHaHwmmKtaQ6cZTf4AYoJrF4n9itGPpzuDu4Lj7sxFJo3vYrSaRrmZvS1Ku532tB5C2",
  "key19": "mGRRQVbqbT4XBntSJ1mDV7VKwjCHf43WL7kpapcRAoCyD1FjyvegDPJaiMtBa2DVi6vAoCBwZs4BN3gxKToUF83",
  "key20": "3jL92kkcJisxAfFdKGmR5QCL1Wd8WRiHqT3xXnn9vnrJrimYx3NFHShGXazKiEWcywyWH3J9kaxfiCDmi1f7PXTA",
  "key21": "o7qPJ7dH6yLu5N3qM1funBAUhabUcsCNHQTmpUyyYc6njC2gghPtw393fU28aViokP7YYwyJSkqcUg6EoY8t1Zg",
  "key22": "34F9mzKqtZk2CYnixT8ZuMLQYzuUsEoC7LbnPziLiZwPMXsuP7ptC2giJRtFdUkjKKPaFExw6n5KAsW319MpfZUJ",
  "key23": "4CRPWCdYFrN5C5t2DtaQD4haXHsubmbbFh37SfkCGyLZi6ap9AeEfs17Hkve3uSn8gxDq8Lmbt47bEsPXUZemeKa",
  "key24": "5unUmJVPLQHEr9YJrGVuuco6xCWuQ4wZQwsQTGUJimD9PesLQjbbk3CWmQ6kqdPRwaTVg42kMJz9j8FC7s7VyRqW",
  "key25": "4REPfnx8CF94rrXWvavQ2vxShStg8xmQDeUkirwL9LWg41fZPCYysxuDkMuX3hJGVWwYmfJZG4sWAP8zMfJU7Qca",
  "key26": "3EZv8aRq8Xj3Zvt6nKVxcxJMfVygU2iokBo1q1Qjx8A9FewWMv8JpvbexEVBqyDFo1oYuTMykdvNpX5FzkUWFBdy",
  "key27": "TQu2hgne5HsGtTtENfcwaALaXD2QrmfS8bhFKDJZpPNogtqXrWdggQea4PQ7Vd7ei3z73PRaH3DnGHFo3Nv1KM2",
  "key28": "3picd9xVxowmkQXCw6iAkR987iXx8AeMVzw9xA7RF6Sp5G9ZPp9JwDnmSgAfeA1zuhYAhdpWyRrsY2saH2QYoFrY",
  "key29": "44BsKnroYz5dMFPGRYRxWKEFYvxYi1ugEWy4ZZGeL4reEeoopgpMDzeBBdGiD2SPtCwXNhgGaEN1fm4Y2coRXjR",
  "key30": "4m5Y6KFJWoZefAWT7QUeTWPibvPcCBG7reNhn8ra8afemHhYdVuC8ZfF5MyHQgNJqeRmGDprC1hqKJoh3HCyFbAr",
  "key31": "4R3zZ64iGyatQRVqFFjfRjkDU44DWpU3dwX9A4DE6kGkJcppbujMWFwBqw9g7qPWWNALrZ5q7u8WBVEju1P6GmmD",
  "key32": "5Hi4HdgfZGMZQ11U7DfjzaxZCKuRUMARFnsFLZ6sPjkmvhfDrmCNDTe7ecEFHQctEELYrHpHRqLAx6YPvzTBDwAS",
  "key33": "5Xcketrh1VPGhQHgHRcSFKsGxi54xC2Beb8dbosVQPphg98HQPbjBBa24nMSzL7Ex19wZsNZZxn92rTrcdbNwz5N",
  "key34": "oAufGRo9teAXCjuoUhQkT8Q58DLP476KYCXZDZ1K6H895KU8f64LvBJ4B31kZweAa583bUH4RSAdAnEUqAsQWfj",
  "key35": "26gPTr5FbKLdSXg7tcCKTdVLZjMAjNexSaXJjeSrcgLxzHhMW1fb6JSx5LFDGhHM57x5BL2WXuaFC8gauLXdKrFS",
  "key36": "5Pte3jPzo9zwq8WBBzQ1JBASLkJ5DAtzXeDHXDp2r6PctXJ8UYyRzSPxQdUrQTV2icp4CquZHd3SsPBUbr3CmpA6"
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
