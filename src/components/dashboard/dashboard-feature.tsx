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
    "xjvdJnEeG6QHZDvP8rzonR3wQ4SrcpyT8dfw4s19mmj9gbDnDUKBxwZRVB34qU4f1D48WAQK7DUsCTb6qejaVJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cxT6uL2nPQjngw2EefPyiKAyBeSaiEHf7DsGPGevCfFv6tbTspbGEK1ZzrEFi1DXTNoY9nUcw3EzGbHr8ARDEVB",
  "key1": "3NnynRVvg8bDicxBwdpRVytjdXd1buiVjDC19JSwiBy7LsjDVZouWvR4zBo9Qkm2qfpS8dKRCMbzUawXjdSe3yyB",
  "key2": "23Coc7jt5Q94sdqxM7sFo9G8DWCXo55AFJAD1GdpTwpiRPKk65XGrbZB2xyax9NCmsTnkTFbimoFU9QhGBEdcv5z",
  "key3": "5qouMCVNcTyRJkEJtmysPH88NR99SSCEShbLcvJao73V9zEKhf46aLjVyKyubXwdZTGaYV3Jj3N7KYYyAx5C587p",
  "key4": "wSpR5XW27gbnNykYFYL2X9NoLQq2bsXBThZeM4d55YF2AxCBCmv3Kqz7sDRJriZztzKJNE5EYnf52mRw2tXygVm",
  "key5": "4PqNhgM3zqAYZYmkwX2b4VikjpUV91bJV5VzFuko6cARmZ7QrDtgevUrNYgKYa9v18Wcr6nt35Gr7sBPxwjxVZ7h",
  "key6": "wrbayBfW52cQ2pYttMyccrgM4rutEXouidawwQR6tSNXQhXUaUVDAZdWWZqKssG3YswgwZonWMSsrRx9g3VsYJW",
  "key7": "3jUyyNXipF9qFcXWAsDcp72Ws4UJy9Wtz5X67eS9Yp9GGD7NUfftSE9tvnjK4S71X1uAUHADyubFouT1jLtB1w31",
  "key8": "4ATcGsecEjG9DtsPTZvNTSEy8s3F2aM8hMXVQyWQrF1Dj9dUp1g4epS2GM5NtCoiqJA6NRdJAhT7mzhgX6q1ACpn",
  "key9": "3Z5H5mE2oszrtFjsagxypeZaGk6VVzepYmcfC4Wi1iapbPb6MHPY4FZbJEt9H7Q1qce5uz68DeJ3iUbxW4EBopmA",
  "key10": "N5VxGX8Duz4aRYqD8PQjSKoEUTsq9YDSLgBhpQhrnmVyHX4aTs2jc34RbS9EpDevQuRNM45TWptT4JSTDFGJNuz",
  "key11": "2k2V1Zm6QtCU4nRgjNQ42RwHdk87fTZoCh76ZpbgYKA1QGo7QnHh7tFsfhg1ihuWbFwMbReQUZpTa9RjHdpG3EYL",
  "key12": "4sMKYbRfT9guVDNeoXJCBCcDyQm8GLdYDpPGvZSHkCqDpFhoizYtDnFnsizGCYPAiEjqcjcTC82mWfzTWFcUyRg2",
  "key13": "qYctFdvu2UkvRVCU4mTTXmZfH822W6Dw1qymrA4knnEbwtcEqerrpKVg69niT7xPRDgExptuqKcW2uWyhaK6BBC",
  "key14": "3ZA8noVsBb4qtnrra8Es1ZHTSmfPUiQ3EQFsvVFPa555KCjT2PxmMX7frKyDF4cvfU5vZ6iSfH2yKbQuxWkSfAq5",
  "key15": "3FQAesxWw7beNwYmoC9AjM72Xp3vBUeUewohueVDcLte9oDVDqc9YXvURTf9oJU4hypcjD29Eg2qdv5ca6SUJmFw",
  "key16": "579U6PQoauhKWNFpQr5Vihyv1DrVomy2CW5PLR6cx5Fp39ZuaZVddBvZF7PcymNFTeoSZe7Qn9Q6w5xiSWPtWZVe",
  "key17": "3YZopXwVvNrQo7t2ynZGx7zGRpjxANzfZduA38xrJykVcitAR2TcSuTpYVnC9GZYfYWisQpwbLiMWT8VtLQ49jjW",
  "key18": "X5GLTcuq4BgK9qj3UbAN9MoM6XiJdQdr5eMR69RD5pr5ojx5bLgFwgvVqQHrbDVPkbzqeCAf5c74n5ro1VnpDZF",
  "key19": "3FaEDEnwm5t8K77e9yRorSCyBQ5YhjhnmD5TBwFtdMDBMNRaRRWxvoiLgBHbK7gE5TH4V7ZT628KZUEtaGEcrATr",
  "key20": "4TS7EXpQrvCcwTrAhsDihczFLmKTMJCFM1TCQgqNzKXKNiZMCqxjyzGgjmuNwRXDSrcA1eYfyJ89quSAPntdJJzS",
  "key21": "3jcW6DdsB47NTzbcHE1RqH6QGQU5c6C2gJWVWZmsSV5m4aPDaaUt5677QCVFRds6ZEiXVkyK4NhpfoysTC14JjZx",
  "key22": "3CqWaLTQ71opaqFdZsnjgrFkMCRJUURedrRzF1JAL6dcovQXyq8UFJMFEvWqtv8vVbLDsdxYM3zcijYVZDu7XRk2",
  "key23": "5W34ynDfcFboaxkSutQJbjceT4jYei2LLfww1QHW7UJdi5dwpR4gtfPndZ65i78XWqd13tpP3KgVZKXvG4bPk2as",
  "key24": "Kcgbdmm8RzEeAykimioD5kXDEEv599vSrCY1Kvgze44xF8hFnoE1vYA56BcvfqLKia7njPMmi2XcHwmYSpLBJ7J",
  "key25": "63LmEQviPw7wfXk32mavevBtYMHmouo1Gg3UNLiKQtKCFsEzA5koV5PLQR8vkaM8b756tDUk2LnGpeXdJNrmMWSK",
  "key26": "hUYbAS2LxjzcAd8HnUH8ThBqafQANJdRLqMXU9mfJrJGqjsb3ZNK6sPrNSi1aa3rwMUmVSDVS4wDsLtrYmQe7Yv",
  "key27": "4tjVynzu6b9pxnrdUeqzMbnJi9iKkbJA5zQtP85uJdZmFQ3tp5k1wFGptb2YvB1ogq455dG4V1e4Lc8M5PmCqpYP",
  "key28": "66hQGHnw1Vc9cSi4ETLHvba7c6MKf7R2qpANHRQjR8qQRTdQcVqzabsw8moDRxBC9N9gRsMKXqYM2RGaKm14jGEC",
  "key29": "RpG5thEhkPK3L7ojTe3Q4B5LPWZg94RvNzg6P4EFXK3jWvbVhknD7ZiF264aCf9UfryCKVJt4kgcJYEbB4TbdUs",
  "key30": "5z9A7KxgLxQuTzPfHyhLwhGqzwQWaPEF1PM9UD2Jf2jEaYGU1embLUNHhkeLGF2fPmjUxK3H53HSEoCNZoqhk8rm",
  "key31": "3fCXagSVECitoXwUVL5HemoZK5oJonibWH8WFvBNhpjEfYDKb2AYAL6AJzBNtJzQhvJKz1VYAsB24wwyQRcw3S1o",
  "key32": "46Az9WfPoEjBxiAEvChNvKEFGV4tefaZnBTsvS5eJGHxxQCUJLTGRtSmGdSrCPeMk1ooA7VxEWfMEDQZRt7TxdMJ",
  "key33": "HfdByvQPv4jSx8KGFhndd57pcBdMDz27zuzcSMVRGsD4QafiUTtjvtJv5zu4GvRpbnFs4W5xz6Yed2h58jM4RMx",
  "key34": "3Pbzm4VTU4zngXSxyykwxXVSVuMJvudqeA2srTaKvu41o8nxxiCwXvPt89vBBhZk4zMJZtfrkvw3aekmkpHFNMqy",
  "key35": "35RLSSC1hX5E6yENKQche8kMPnBR6xYfLD6cxSbFRkg9XE4KHTGsB2np4MLr6EePNWzwK9U7TGddqnq4yR8nA2VL",
  "key36": "3wsCY2V4P33RX6c4p3RxbT69JkbEXBmA6bQ4MRuBeM7j7UaXcAoEsN1vsay1x6Z1i7xhocKE5sjq6Qv6dGp7s8NY",
  "key37": "3nvxsZwrFnb6baxpztofQwzVKjjDhAkzCXG5BJXj3aBsmvHXr5y6ZdqhbsfyvMaT3FK7ghkBh1FkEXby4GJSnJh",
  "key38": "4Lf9wEBbBFxLtQ785bbry7pErwYyWEbnJ6auAUoxmtLCGseYYLizhVtmy1ybq2zQtqm5Wk8HhbReugCeMxSAwMUJ"
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
