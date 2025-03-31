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
    "4yptP6kdqTsxvfqpdvcUhinE5pVPvMJy9jSsrGAJ6Ed7maH9a3N5hn4JQbbwxretJ5M7WYdBT1D6iqd4FJ2SnztM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QARATJqrPsNCZsV4Vq87bXSKD3VWAWsJ4Cgh19N4EWDBhMvXdyafVwmMrvNUXs4t7beivQ47v2auvTV1546kzgm",
  "key1": "5e9kVDPDnXbF9dshsbapohmRgSdPPgYa2PzmhvaJR3rWepmFoyQsAjYQ18gTTJzrsVhp5Eu4sVx4AAs2vQFWee7a",
  "key2": "4tkwt3nxyhATyB7ozMWwDjCWJhgaGn4KB4FMHfwnQXtGCUeTdQ8HaaMEXcFibudiap1i46wByvfm7Fsh9J9TwVQ5",
  "key3": "3krcdBSup7bosk1k3gGueD4SLCuZEjtHKBzWuQtYwBb4LuqTXYhnc1FTGTUKUC9RafC4X18LJv17ZxcwGNVecJTi",
  "key4": "3fiPJSc3GfjgHmRnP5JJ3TKvpWwtgBapTt5S2iA8D6UNQ171koMK77omstLe17zRSrhQCFEX3Cn53xbmHrrWeGXJ",
  "key5": "AR2aV52G7QFVgkebqbhvqgf1Qn4EGUBaAMN52rQNhPyFkAYCMzsjTWSU1YYu7YJ6jUEcb2uPUfcBkg5jLfZXjsn",
  "key6": "3jhHLabGwTqfMoeVof76vTHbLW8AhpPSB7yMNtU2sSxRoLabKP3JwuYpPCyZ88vp7nDre1oCRZ6ZtDSngdWiwssi",
  "key7": "Pq351Htp7HdGx88TxkihbpDvQ8AhC9mX1Hwf7PMFu2AF56yAjuYtGUruNELKaHaBDTWaYMPM9ALy6XNs8N4iTgZ",
  "key8": "4ntsz9Qmi1cKAcgPfkjVQyHpDWkayjjmR9ydC6Ht8DeE3mwLRsHQQawU5xqa1kXvrm24YJswhxv2xYgaa2ySGrUM",
  "key9": "3dSP8xVLoApu7ebuCHEJnKc4q7gQg3zsXXhjXafbJuzL4HC5Kg9cge35idFqYRDKbtUrHcEAPih59wnFMT5LGVLc",
  "key10": "UZrNv5qywJN45ykSrdT5YB3jug5nNA2yP3YX1BYPNFQ8QbkBsjrzegdLWYEbmgFSmsHsQQZF5jfygK1N3qWdX7S",
  "key11": "cHxobNpnCUbf9qbmSANMmK5V3nNWcfqcyW1CUxpmkVya1oucTqpCX7WZ21QBetyVFM7TvCTwjUrqEjcdoXaALkC",
  "key12": "2ot3tz6meSsNG7AkMZgKduQ3jLUjAYmXtnxQMdn2Tr7ZjreuLBmGEon3844iT8W5EX38CcR93QxZwvD6biSzb7Jn",
  "key13": "5MjawnePNr7DhKzjWAx3ASVc64CYh9Dk9XrbRfKFs8VvwEoVMyeXouEaniGA75whky4gbmVyXegxHZQXVEhzroDw",
  "key14": "2G3BpY6XW7DFbr12gF1332Q45MCefCbu1xazmnww5p92Mws3HL3ZJ4NNzF6V7mtpEvyH5UHLgGneKTNtiQ83fbkK",
  "key15": "ZFEHdzekVKXUxD3yPFcsCxcDeXSBd9WevE4SKH1oaPHMgrwjYxckzJ1pDxyVJKy3m3ELVvSG2aCf5QRHgS7phNd",
  "key16": "3CymKXMFMY4ck6qEbBhhcE6V6Yzjrkriqk5A5uxK4asEUA8AgKaGpW8EBU3rkLGhnDvf2G3PaeTyJFRM1Vu9tNe",
  "key17": "2MFAgSwjvYYrkJm2uK1C8gYHurCTG3p3fASVHP33qYUNqLhtYLKNNddV3Gi559KMkC7pNWvrVGUmAfn5yh5CxPc8",
  "key18": "3qmF3Rmx1Tv7ZEECQywpqBxpttS2SwVE3DwaG2mRfwd9Yn6JanVNRmRoXMXR3ALkpqxzFq38ugdZwC4jTcuBMS4A",
  "key19": "5tmQ9NBDnzMBeDK8V3vWLqLn43S9ui7yJL3rMNnWnYDU4W8WmAeS81zzc3U25ajYx8qgr1f1Vqh9sQbpwoDUjyqu",
  "key20": "4M71C51APv41jkBuQdxcciG7hYnvPxF6b4DyhWYHd9VvNpW3v2yiRcXHzZx532btAmQm14PXhAEYVzrfybCgYwe",
  "key21": "5Ny2mXuSRf3jbLMARMgZfKecHVv4u34u7SqaMJtZYpsQfxaAdeCbBuRUz1nTxmTx3Vrn3ABim92qpJRLC47D424p",
  "key22": "3i82JVU8bsqxsgXnhhA2D7UGx3gMtnu8LQq9bAQv5v3qF2fcLtVpGhw7N66UhQVNigtVLFXTa1hriyV1RfkuW8em",
  "key23": "2DvFbnbK2MmPMQPs6HmNbLUVPm5YmJz867HA71Ti51NwNfDG5fjVu859jMnfJPtWWTXcYnQAryCUNWBs4G4YDg3Y",
  "key24": "2o6FB3sszy6bZzLbqLFDCt45SbXwm2ts6bvhcKLQHXPsJsCmgtZPCEJKKAg72MQhbqBQ8bcZiTAeHdF59M2GCCAE",
  "key25": "221FjhUj2VGad6inovxyoEWupGdDAQY9cg3DhXn8FTXKR3kgUcMdzFtYrhxBSXXg36yVn584rkvwykGBk9kmzQ4j",
  "key26": "33oKPjq5ETnPTjMJ32qZooDn1HiVdBom8dAGkMLczoyazCBfSxP24ZxE792QQDFmbawoH7gxSZhPWNXktU7mDs4h",
  "key27": "4ZEfCyuH8NadQYaxPceKx7dcNfvJvc16R6yfK3L8CSbojDWuQtbxDqVe7itNj8popU9THSiGTjWmY61LMAxo6fKz",
  "key28": "3mtqFF5pFJGwiAS6d7FseUx8tzXeVCE8vxpScsQjFFeD96LnMFGoiDawqK7CAqon6AyJxsBA7dprobgqknSurqjK",
  "key29": "2n1NLxcwYubQdh6ahVuNptC94HdbnbyckftMPQFfpvFaQ6LwyygLLiCdK9fopq1kpMfbKQPVaR8XwqB7Rh1kkdfh",
  "key30": "5fMpHssYeX2WN3w73wqCHChYpFev3zCtN9CEKuVs4EPz89CGzquouW3w9vaUK6bsZVxdXcuL2dVETKpDkXZdjm77",
  "key31": "3mzxSozJDbudxReWjY7DyLPLvx7jB9S34n6D8eNaNmJrTaAchLmu8uxzhuAkUL7pZ96y4h4FMqtPrt7qbWHGYnfT",
  "key32": "4GcivYdj4BjUw72xzvhgruquHYEhS4Eg6z6S71gKSVKGF2noQDzFUNaLvAFvN5Bm8beTRt2ARrEmWd3qfzfTLWJm",
  "key33": "5daLqYQZN1Tru3uEstVhMKqVbQ4WR3RFASq9kBGaLhcZ8KT44r5oHnJXCPLy6zUbifEptHtrMq9zVJdvW4uQqdNw",
  "key34": "2BeCkicJwHHeaRhVC4AbuBZRwYkUKCb5hWw2zNgmQmgxxwW8CLZ789pubDqV7WMHxN7U2Fi22BR7Y55y574E7WV5",
  "key35": "7pnL2gq8BMQZyNyM2hbQAXUp4A6gZXnVGh53uHjMbjjVcCFcXWom3jvW93AsNhyg4jTN9AvyETY5FGPBn2Xw1Fr",
  "key36": "2WNetqfSXv3SkvmVoAqacwhJDLZUDmzkUWqVrPLara6xDbKCnuMVmubjcC9rpiqQXA68jUD7hya4mmWCnMewW97Q",
  "key37": "qFGhi44LffzTyRLBXTNPSkziQB1jbiSR5QbG54XBxLkmXC7QaAf34xXcP73Ytb6jjKjBwG1RVeNsmgT24S3vwLc",
  "key38": "5X8Z8bTo5UQcPoPjGYPjEdbTbimhVYpxdD6rn4nLJGMuVfogiQpNLof8Z76715RfcbahvtiRMzPFJ4PNNbZhLEjQ",
  "key39": "5TTp6ipg3DMh1DvcJRkWKmV2dZ6Hs6TXFSZQLB4KJnAQ1LJJxNmXpjBBs3P7vJqriWX7oUYcUeR6r4HPJWh4oV91",
  "key40": "3TwZtXMf8xxXHs5Kuo7XxCEHN5SXisC6dg9S5h96zabTHBY2hCxXzmAAGCNpk1iNtRPscyXWt6YBLE4rXKY6Hywn",
  "key41": "3s6Y2exhMTCfjmyRWzJ9VRr2DnRkKFa2P1sUDpeKP4dEJ3M1boaNwrgqBBY87xpiwUgUqSsHeHBat2f3tbues6mD",
  "key42": "57QSUSSABrkPb494mejL92MdvVe56bzrdSFuAaazExAqXEM8JCArw512n5bqkkp46mjR5g3hxuYTbTEquw18Rq8n",
  "key43": "5a5VghcrRgYp5EwYgNkFoSwf6A6dpFsT87eX6VaQBxJm4eNM7f5iKgSHEG7cRm28sHAMP6nX6ccJiM7netjuU7TQ",
  "key44": "VvW3KEHkwGKbdKMEVoCVyjcyjndnYanAe61ppEHvJoJWedeJw2bknuJfHZdbddBwJHeWatSL8DnuuyVJm4iDopf"
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
