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
    "3qM4hbNVBNQoLJcJc2iSMLa5PVEWstGSFLLPviqYDLV4gNFFGgYwTfoG2WSbP2AEspMWEU5xooG6WKpgyF9t348x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fr9KbgW1tScFJc4pmvcMXjM7kksVMNquwwBxdVXhyVv3biqAwZ9rfJy2veD8ywwcZFKQCA3iexYMFTNDFE5W7Wc",
  "key1": "3VES9BN793escp2vfqy5Wpuqg5Z1D6D9sai3sg8gKALG5Sbrco8m7isJerTV1zoSY272Qv1tqchdQXAvuaPrUjsb",
  "key2": "HdwkUohyRRWQJ9Nxy2JuFVFUMypaASzEjGyXT4tmNWZDzReQ9CAgW1LR4ChAC9AdBjwLtPtUpVJFYKF5HAM4uc2",
  "key3": "3bDrgtLswheiegqi1UTpZM93Y87ncLRqNtpdFV8gfMjL3VkcnmLkMU5ytUdbjT6Qp3pED3A2mQiGjFQAwodEkhe9",
  "key4": "3T8v1cdQZSAbKmCwsJLQsSDsnK5ddhThKxuAJv4GQx4GtDA1SoJoP15ug9vu9juda2j9XwRsAD6NmppUkDKY8cp5",
  "key5": "3fosTo8bsYs15L2Qj5wNgABmbfC3c73sxdAa8uB7Q8CuZH6FgvPPAjPv39A3vsFFgRzDw67VBUZER51FD4PjxRoa",
  "key6": "2is3gP4BRds3GUqTGiQuwi3A1bDdQH3WQW6P145dhUdWQa2yansmvLXqxoCh9i4KJHVqhdm77DCQq9EPZxnT9pfP",
  "key7": "2Py7YTxvL2JJ1V1sqiJvxCsCZwCNwyBf8fLJgs3bDUHXuvpGXWbbTzELT2brGZYb2riMqzPTrvVtedAhFgoRASk7",
  "key8": "5mgjYAta8AJx4jYB3tbotXns4fZ65zpuMW1nxQFMdTQgnbt1Q9wMY7ri41hHh3dwWH2WRE1AuN2NM9AprctnBVvu",
  "key9": "5WtPUpSFGwBHw6XRWG55RH4aGTaNjbpmfNBK9ETJd7Mdm6sh3dEkter6TY5gam33triezJyqRE3jBvZ2rsnjDwWp",
  "key10": "5m8zdeZjvmvrHHTa3o8At7Dqt6M2zUntQN9ytYr1XaJ2XgVC6dqp1H76du6xgAWUxTVTZkB3dhtUpXwELpQUWW1W",
  "key11": "3hmXUvKSZXA4tijMK5vBUHhVRukgJdBeGtMzDkq3QKdz1FD5or8ngTLxFyUs9GVQwZTa6Veg2qdBYdPvUqJQydCX",
  "key12": "3xKMsCAV24eoruAio8jnxgRFFFKDSXe9SuUoFju9ZFSPsBDDs2rmEiDVZjAmTmCA1owTrrnaeRNFhCDY6uwrsSVE",
  "key13": "4wCyRY6JVMz7MngUYXDCSTL7uixkcjhsUDCsuURsRTgWsjECSMurEWvL55HNNdkKJdnJWeGt2qQSBZDtsQvT8xfR",
  "key14": "58qgUwV7Y4rZhijDmvvWh7NcC2MYHgCPYtmFCE7y94zGpbg3byZrsuYWNDzq7WwoJ9r1yPwypofx3VH7L8Tdsjww",
  "key15": "63VBas4sVw1okTwwJpfygHdTwAjcPbjXcyrPsAYCqdEZfrpWrBxQvvsuV38B5wpibpLNTdU2oeywBfEeFvhixR2z",
  "key16": "4hFkFdLTSKfL8hq8vr8p25YueWoUFMfzMVqNBfb9gWFG6EwMEvZnHGRzJyRFei2zQvEND3toaVQ6EKJYGSHzx9xp",
  "key17": "3zirhbV7LtZevZ5W9VTURPCnTukCj5FZsxyN5EdgF6Jgu5rmysfRA5Y1wqE7EyD7uZ76CSjmDTdkeZ2Vh4XAawNe",
  "key18": "cEWPKKVPCtEavPmw3FH6dFa94cYuhprxvNbdJQTFHrfSswMbkNG9RKS6XXGvaBBrCzmYp42nRGPUiadZLsm5zw3",
  "key19": "4kF3yUe5ncpu2sCrkLaLpbsYfAqAfNyXHx9ivkq9XrpWBdjXAAXzuFs8zt8XPNtFdRHy2nRxHkSR6wjAM3pxHTre",
  "key20": "3ez6ocWcFqKSYRJJKJmKKXdtckA862USU2tEFQqUr2o8Dyi7Myza9sKPruBYi8ck34PEARt8Rqm6f1rSoUCNSyhh",
  "key21": "3xUEUHw1WPyhdN7ged2nyYzhV7h5QnGeR9NHYmSsFQ2TQUd8xX1WhkdWgxmYqnq7XNmS6iYZgz4RKVi8iDuXBzVs",
  "key22": "4m3igVqMwr56sSn4hRgdbX4M2kBowEeF5CKw8BmUPgosNMwPBvSvBRmoKGo9k9F5ZReWNRjo9AfqB2J1sk7hawHi",
  "key23": "cPjJEW9WMaeUXkeAeka4gQdCptSg1BVmUJCtZtqs2nXepSr12MEf7GLJyyubm9TDpN1UeDXCg62nq1pSHHxRCD6",
  "key24": "2mm6ACuRDGT9hjQYBCmbNq2MZwsqNevjUTsMBjTo219TV6uuBNiYYxSAhMFGZwXDEijk51SHY5vu6Chqu5edvBvc",
  "key25": "5jvMFVt2hVGGNwUnYcxHgAGzffcaNzyPkcLL6VtgMpwG6iZh81z6rN4wMxzutFTXpkeubMyw33rVHjcf7SzS4B5x",
  "key26": "3rwVCLJDuR7Zw77Siw8SiNRQfq7GExvQqe3FfQAGvDTWCnhQ1kp2YUFWzZ1zYANX7AphRoJftWwxgYEPycmWkGZo",
  "key27": "392Lc8QsNkY1PaPhCAB721htC8Q6ZgFsgbupHmKg1L977u6xL9q3UZozsAnFE6E8c2kVR3gTfvztQfbf9hXbJ7sh",
  "key28": "5TZ445FvQmq57AUCyVpPJ5j5eBSgFbhnmhSaWMhPVFJRNVbC9Cs9kW5H9WkMMVLQ85kxTho89wMZxTrPEng41yiu",
  "key29": "4RHY1yRCeZitS33YVFS5NNSpcHGre5N8tVKyNcdQMKU5MeEyfx8N7SEi6gRxDcVTJBTc8MxCxaA4R2yUMTnhYbNd",
  "key30": "3jAFsvUje3To26kux1Juw7TKtA5metmUDK9B538e4jk9Gb57HeAFPCvPEhntNo6Qc71rKGj8rNPrRi9dXVcucYic",
  "key31": "2dSB7PheUcQXgYDSBAm3bnnpm6XpQzj8gMENgkMYCXR62xs2XtUvynDrnHK3tNic4dtaco2Gwio37e79ra9DTqBP",
  "key32": "3eW3i4c1mrizgpz8195fmC1zVj6BnJXKVAWmQFkx5rLSz7yt2pfqdBphSnWQtrC2tKY9u9sqPhN6P364dyAjCrKa",
  "key33": "2i5qZgxCVNUjZtgAh5fxLx6hMBvLxVexWB3bqXqmn12p7EPQR2typWWAYBLtt9uXCwa7Bp8C3D8jdxHmdjcafaM5",
  "key34": "2gMbCxKeXPHkxKEDd4Cvs5Ucjst4oH1PkctppNK7d4JbQMiSM1AotX1XWSjSpfSKMDQPKPWsS5sc4KAnNtwakyF6",
  "key35": "4ksVfYMxXB27rNHq2T1FTEKBxPNjHsAbfjQGXMU7zVJ7aSovhbZhiGp2Sin6WrBi5mBfCXEb89n67qeAL5SwTWf8",
  "key36": "2wja6paUGnngK4fPxJ8N2bM7q6pqpVXsWLmWSCPEssTLFnUZpiyzpU2452a1xLVWeUZ3AFFnDNR6e1Z2P7ZB5yWs",
  "key37": "4EbNJnrUGJYunWVH58VXck55zGbKPpzCCQS5qtdCLRb5BmGpxoZ5NTJ8jyGr3eBKj7TV9TtGU74TjzeszV1mCF6b",
  "key38": "2DvWFvBU48WGzWuxpgq38V98ws89iwWQ9XzpeLa6VW3ay5JLKXp1exz27hibau3C1fFaQS4ta4m1gog4f1z1xHot",
  "key39": "2moRxjxzD9puUiFVTLsCqjc2sHQAqkcxTY4SHNcq2QEMZAhJ5RS2KRwQCqTuSQVFjKWW4mv5u5iYpbtxAwQ2hqsz",
  "key40": "5Ahp1vWsnDAnnwqXyfXsAx4ssrtTyap9ZUaYu62PWyijLFHYpb9S26vJx9CZL9JWhnk1AKKNbdiZU7eUoX56AyGw",
  "key41": "65xu2fEfidskEq8mitYNw5M8NRYFCRY24aQjH5vLJ8vZRYY8pzPqBCcfdjnYT8MbcEvX2cAKX6NeekaywCaZmC4u"
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
