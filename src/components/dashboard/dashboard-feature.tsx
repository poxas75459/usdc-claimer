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
    "qxdneJFMs2zaNfVYy325XxKyKar3M1LpLnXsLWUJyDj5AFYxyH2EESAdWGebLSRsPCXAFLe19VVAz43JraxXHb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63KLptak155sEniMvcwbAKcArEYCBgEN7qeb4bcLL63aAytpowoEdrGCDFdwE9i5vJQzV9xxyWj1gy5KsDt5Aohv",
  "key1": "3dhR76epaEfa5ZJwhV6tm3o14QRFgpMYQJ58mPhVbRitmf4FRR4fWRZhathfzQirEoBnmURL88Q8JWFHECcSKytq",
  "key2": "49hpoahGwoKMjmTYLtnCJjJSf7ZwbbkJz3Ax9e74GMQJsE9odA1daW9sAsYPzmQDpzVBo5qVswEN6woKJWEcd3VY",
  "key3": "2RLNtLyrjKoVzPoh2hg6rLn24RkCpDDsPgTxuZ4DHqafv24ddJ5nkppDeeFP5z84WJfBxG8rUxR3t1SpeS1VNzaX",
  "key4": "E9YGr7J3Qfthrd52knrnK8whfFifkAHFN9YLmXhSap8vb59NF717HAnqPrjLvbfodHe7uevQeGUfVZzFV8Ng9m4",
  "key5": "5LoXzpTgi7rsKLJJHs9TjDtt1MoRPxmoSjYZeyNorjP7ofsLbcGUjhA5zeJFwU6tnQSS4EPPBgbD517unie58SRz",
  "key6": "5EEo5bGbag6ZdK6wabajutZNhqmyYA1xRpKJ5iYJWXV88PbTgwDpui233sBi1f4pwtoyQuDUBx4gKfPnKfLSkr7E",
  "key7": "5yhg1zb2idmnfUgUH5K2Qd3f2MgeyGxXFCYzyUVwbbkLtSDQDkNrx1BZfJ9md2Kksg8wjWwHRMzgRiWqeeHwqreA",
  "key8": "4H3JSF4SHAZRzSXKtDFtruffr2Btg8Wh4aQfEdrZ5th3Ezp12pnR51q6ru13nve7rNKAfZS8tYi3kat4ZRD7rYPB",
  "key9": "2vXY1yenca2fSn8vnQBUnCkJvzKwsh6dbUYygUnuN1o34qRWQUvgCLjXLGRtZYea1ZwxWENr5hNma5i9zFTffckT",
  "key10": "5bkqHuQtQosWU2JFoSf2xudtCmL7eF4irXXhcTgcN4Y94ZSnrzTfW1GJWGNLWaep3p6AB63z8EU3noUYUDeLss9c",
  "key11": "2Bkf9tVaQHANKkU2kWPTtRm7jUBBoTrE3XKSF7DJGkpy6siU4aTBCJFZdDYwbL7MJQUrPvhRcyJAe7SMFwtDTWrh",
  "key12": "2jTRmbiNPKuCU16zsbZi8da4rJquaYK8SXMUtRWfJ7JAeiERRvSjpNb1bXvBBMEWsyQTsYU7GHtQMEE8Hn4WKHmq",
  "key13": "278wVQyAAu9ya6rj8rdGmhW2ioMUJcMbxRGAzQWS8Jfw9q3bxQbQqd9hBAiqJSZHQvw5W7EYee9eEhNwPoPHpVE9",
  "key14": "zj9dhSu8X25BrabPAxTnvisvxBEGwUwn6hKUxLBu9jeLimtyNFi4rQUETtsmPXkidQaG46ndG4pvyTjiTXZA3vR",
  "key15": "58BxQKz9UmM7frpU9c6m4PgUSa7Uhsx2ooeJWPcbLLY2YYBFQZCsWMPMFhdCxs1UtYNtJWqkijC16PifArQxwN8X",
  "key16": "311UVizk5JR3HAjWBv6xNokEoKdSWTAZEBq23q4dZW1BT3NgpJQxke2HBQsv6dmVooYJe72PXW97wJvzJfs6SNo9",
  "key17": "4osQ1y4ZMdWtvgYugmTKm6qFSNXsY2dVLAY6M5GvPjVSf8zityEBUfTZSosudveWMEvYKXf3a5xpAgMfAAbZA8xL",
  "key18": "3YYBDVAa7g5vjaA4RShYksXVWgDy7wfxH2Qi6waVH4ZmEXEiCSCocEpVcygVZLud2YLrxtNHSK8qj7mA7kMta4gU",
  "key19": "2QSuxQXJ8AXodUgHYuVvYwuPYzfUTaCkgzrv2vTqaTExAtbLWbBJVRoWGWGs2v21EyhqvhFcLNoao95cRFvdDqC9",
  "key20": "4nWFuvtSCJJJsXsRXe3y347pubtTVHNNzvHpfL6TkohqqESVzaeoVYTisuPET4Lt95C4tenq2ypSEGcoQ2S9DcqN",
  "key21": "2DYa1ts4Jy9Qg7DXNFRkCnzYVUc21LnPvaNMAtigT9NGU5d1d6EDCVWEaWAoWNn1RvuEvgyewU14n19QmF36CnZS",
  "key22": "55LgXQ3CvV7MSF153qzGJdJiVAWpQRGVUuGTonu24bwwpM1HzCydMwQp2kLB8CFxhW1Au7SCFCcHNNp1zz7RjsUU",
  "key23": "2tUJe45NcAnbz89rWesE1dUsxSbEarSCkivCwPaGXQzfpkY5EBcwAJhhWULXP6baQeFQHzWRi3LBRV17Do6P5dT5",
  "key24": "3wnaztqWmL7wk43LuYKdatHdJYNAfqKmBdC5S85jfjZRX8xbabDKL4XYpfGzzjnVfcv7QYb1mYWWNGZQwoBVX7DA",
  "key25": "5wsLSeXsyXtS7AniRh2UtJwCgmC9xRkpKE11PMm3pQf4jhykP5wU2eh76FD8npcESaoc6GtYHQjtXBUNr3DSLuVh",
  "key26": "343KNVqGMV8eBsSR9ELMMwdPcuLtgBkL1X55sExiEU1h2Hoz9HD4u2wuegkJAkNw1bUWdzxKz87XdfE8VWM8oZZu",
  "key27": "3kbfNqby3XnW6UfSpkk3tVnhuLHFaEkusw8trV1wnbcBaEETW17LuJEWGcwfKVujdM6mumeyueZSYCgeeEJQKZG9",
  "key28": "2iVTUgZRkb18VhX9dD5z9K2ptfzHU5fbYsg1gAB4BLLXKLgTqKE6FQisdq8ath3PM8xMkrEcHKxbWcUpnJGVH1hg",
  "key29": "5zcwocYFF4GBK641BFJezNbuWZjNXVhR8quNqTVnZynf42Qj5aBwAnxc4FtNs6c2TqxfYgAJ56oDUGWyBrLcq7yg",
  "key30": "2cGiwsZpVLhS6yEMZmRwVe68fLqGHGcXa2sdpbB5BMjnrp7wtoJRXkB8SawuKXGfhGkSa1t7HukNyZoTzQLAy1Fv",
  "key31": "2SrAAXfD1srqWWRhhDFsnKfpwn77cRtzemS55Jrgz2VNRU1d2URTrSnHUars9NWZYfemQEMQFKMGZx7ct4KoWDUK",
  "key32": "3ioqw4C9tCuZt9z1eMc9bet2LMjTBDNN9BsMTGmfebfwHVviGyJ988SWCJuzx1KG1biRSFYX6hS25LcPEPPYwFFx",
  "key33": "Sv1iEM6TJnwoby3aGTQs2jqSqyASof5CFDhseCMhbohZYpw1d557ub62L33y6FJWE5ESHyepLbGSAg2xkEtYdku",
  "key34": "xsdQcvDokyXoWcTPF5y4ecGc5EQj86FzvX8YuY1y7PpSqz9MuTpppYbTq2nounMkRxBDJXYwLedrqrss2cKed25"
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
