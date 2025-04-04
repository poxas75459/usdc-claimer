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
    "3nGjCSqrjmz6C5LpyJdikzoEBa6dPyoDticJfbghtTne7bDdGtN7T2WndJo9xTiXdPPPyKQH6UeAXCJmYDjQdUeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NbmjimVupnu5LR8P3ysCHVvc2e1pQg4TDSHtmzRYxMp26Hyi44hgfwQHrHddnjtn2aqFNXAm9SNtwWp6r1VrvEs",
  "key1": "4TuvKhph9DETQfQcWmDX2qXwL5zLJ2pDLpboCzmT8tSauyAKxPBdPyBtMfTxyQBEbbXFd8Y9SQWPyncG1x2tLWfQ",
  "key2": "3ysUW5kYskPLdB8TD2v9nfyJ4UvrxZJrL9c3jmUJWnX9n9yAzqrBMGqZQ19hQTurLM2QjAvys7o4VP8BjycPuSuB",
  "key3": "2iAK1NzXMnfjjsMopkoMUzL5Zdn6NdzULZvW3jBsJdkA3b4YffHMXdLEaKJfSvhAdtoMhjn22f1cdAVeHmqgn7CF",
  "key4": "51PRU8YrP5rXBpC4M5PL9xus4YkhB3hph4yzoXw38deP67oC4bit1tb3xfrSFMyq1UDzcVjCH5u2KfcjCXA1PNnh",
  "key5": "3XqszgeetoURamJ55RnXxy5chz2GNKcK4QfP7LQ3mVrSXKJ4NVxdoyhrrJ8eogoPJZXEqpyMB6b7RNa9nTfyPuux",
  "key6": "3A9z3Kb5FK8YgG7tYLLU53LXydbgsxpGcePYNNh4a2H3e4WQ7Enc29KKa7jPuSoFrUqeQo7RNu8NWL6EwyySsRor",
  "key7": "5p5Qa24nr5Tf1K77JcYPjUv3ZprD2yFYXoK75su38YNwFXZTm8TrpUx4jLSd1tBcrGaSMHwBiWWq2Lr3fgA74gVL",
  "key8": "3Do9dcJ9RAwC9psTjznLvQiTHvxj28dQXw6Z35ydG7rucwapZTMmQhyrdyEcfAX6n8rg8fKfmEHmSpCMYhPeebEV",
  "key9": "5Wq6wZwzbyqgGt61jAA4oEzEgqwJcwdfRdsbLY3umxmKidi3RXtEG1khgi6R5tRsF5gPDr1T9VPUcSuSVEaPx5xX",
  "key10": "4DPfJ5QjgnL5KLnxfiJ22qJojFQJrYVVUL9yFe8oVTZurHKNXDH8bHZfpyPopWrTRniPHy44XSwEo3bip6mzBpTt",
  "key11": "5z8HUPT7UA9Egb2pcvvmietUYA4TnQEfURwPkrwZReqbUqS14GKY645bVqTM72zhMYmxLZgCM1KSK8VtS1iMBmqb",
  "key12": "2LvThp6BMK3K9X6aHrSjiSNHURJT24nDM1259PMUKe4F7xT4wum5y7yTSTX8KsgKNnnxVqneHXHMQVoEnaAZmWJW",
  "key13": "yT4S8AfQUmJR5BENXTWXGyF6n2gNFC9Kny4S1TwQVgwaHabUByWay1CkQHVNPLsjYrNWfJ7HbyHTLYMLHGGqL4o",
  "key14": "3tZynxHYL2XyJqzUNya3jMxwakhe6S7TuybzD4emEjrpesNCwxyMAwdxUs6FhKAZJMD4zYdpoRRpVPJ9PgpAo37p",
  "key15": "4WdqZfQFnY56VpoRP6fVy1Bvt5ZphgPLMYCDiDqwhSw6nvnuERroDwKMkUFiyXe5iKV9MEn4Gx5Q7zifo233So5q",
  "key16": "3vBTHh8ydSnAmKgNdkDaxoyUp6p2CArHRUKRpmeTJA5DuKnCdDi6zeMkajNHEoy6b9aamDn1mg6YFd2CcCXXjWZw",
  "key17": "SwXZ4VDH6hUZMrectKRryjM24ZHLTYSb5TJFBw6LmFXHqQdMsfdB7nJMFSpwEgVX7w8L2TAf9JvF1RESY25PsUY",
  "key18": "44Yy4fGbTrNCcFM5S5ABMqYaB4ZhYHXEgkh42oHQXwQzkzfoBbDSwm9z94U8dw29girutb5LiDK53f5vuAaw4UQ3",
  "key19": "2QHgE3tLc1itEmp13kF4e3NwZJ1npzP7jaVw622Ptc8qxxBjHstNMnQ2MwY1TbJUdutEeofGRUKcB2R8NAQ2k9hJ",
  "key20": "4YbQvqPym1L2LqrcQrJbjYai7QMLSkATVHggNVLZEWMJRPQmiQYzwhDL87EmbV6444y2tDBqcL9Z5wigZv2X8QG",
  "key21": "38ykkB7Gnud1kYYQtBo3ghd68BobWkRGhBunRJB3MVU7ghTXqXcrAmhaavtgQ6wY5PjZ3QbuCUU5jFzgEGiXEinv",
  "key22": "57Q7y28VAKpbr1T4Bh6WEuDJU86hmkJgdyey81u3vbCsm1WgUxxusqexRAtpq7YZePzBzkeVFH2Z3ZtZydDBuaNV",
  "key23": "3LMDMdsGvaDxfZcbja2qiKRQ85r8QTMDtoCkFxonn1yJkhau7y44xUg3PD11HY9Zw23m2bu2oBNXphES1ccgHeCU",
  "key24": "3w1GUheZLfFzpFVNrUKiyGTmNEYzXUiZ7ch4TJ4bXcejAd88uJnuFo1KB1jsN38r1y27YVQUCEBV9SAFr19RoKQd",
  "key25": "5RvhjdofXD6XvgLFMQPnzhwVLBQsRFVMFZBJUAzW6tLaRjYdktG8hPhDWyEP8Yv3s5M5hM9jyKa3eA2qVBmq4akB",
  "key26": "58F2xa2qKvQ6KRQn2J9HCcDETypZQzbzUBWA9rtapdHKV2PJTvT1bHGTve2fTSb6ej7cFKrrvjU8cAzFitxJzu6x",
  "key27": "wSd7zbRLVP4Ueae1tpMpAyJi87LEgTi8LsghSvkrxVkfF6Tex4uKdY2UDv4GzUA8as4YDg3Lwa7r4sxkikH16wt",
  "key28": "2jo7wk9q61QdC1xqnkWzXqgMRPcgD4hViq5hq7vRULrwAum9ihaUwFFucXN3c8knyZDB1vaL8ysrhqC9p4NXjTVJ",
  "key29": "5ErX2YhkYFbqzG8LSDXJP8chyqrdJBKHNxjSasUtRxMauCx7hZB1rdy8mabjHV9j3AWHehzB9agVKYK2dD5jrWW1",
  "key30": "53Kw3yTy1iuuGEr99MyKvzRAn1EB3AC19tFyzr9a989MhZTuGhuSpSnB5zAicuf42HaWE4b7oZSKyqPkGXHWBDf5",
  "key31": "4WT5YNpsNogCy3TmQhDSBDh8QwD9TNg72PAsMgi2qSmEVnF6gHwkyTzLePPoRXVYFmLP619nDNoTALwnkxhzhzbG",
  "key32": "vxf8RjEaWSAHtDMEFM12zdwK8FVPMSAo68W7wt59kcarmbgiqmmqHcTq4vXgfDm8Nc9hYy9N4UWoaDJtzeKQdiK",
  "key33": "5CJ39dQBnF31inzfNBDfTXZUQpUTXfcZj4vzBwop57zJZZextp7xrppebekEPPeMTdZvSfJxw1zsDmstdYpYdWFK",
  "key34": "BmJRufbKLTRnNu6vyagXFu4NY3FioHeCU6GzKmcn4nTPmsUfpA8Yr4cZUHgjFn2TJHVFvehszmzrAYGFKB7Qv9g",
  "key35": "5NRHQHBXgLM8mpKafe4JBHdNwLKsze8kQrqadMgz3EJA54qpLD9q66NXLA2UExNQVfD3qZUpR6g2jvbrG1bzA48b",
  "key36": "2z17d1UyUQx7nXHaTHg7yTtHBqqnySGyyBgGrKZgSMtibDZXHK1kupimpexFeerJUpsTvdyYuqDhEtiNKC6dfM7w",
  "key37": "61C9Dc1GQ6a2XnFYSz2fsK1brF4HSyXtqm4JmpVjcfT14EHcAd2UwQq7XDawfUwSdmaK46HQya2VSbu3Y6d5qpik",
  "key38": "3mZzMgKGQbpzyy8QSnTw7Tr5H83PMTuDPHDXeQAgPVfqEL8zHAumWs33VbyUoWxe7MwKjgVrLyxSbVB8KKpbJ8H3",
  "key39": "QcycYNj7T4U9ai9sofRzGLCiNhDrg6qomxNqgNL5SaFm4e1zgiELsmuxWf329Lqp97oKUEGstXXkoyeq8sU8fo2",
  "key40": "3qRTuajhwScoUrFkSvqM6X9rpbsGn4UYgYzU9bsG4xqcet9Mq6JV4MDbeAxWc7KHP3Ef8sd5ZEf63PeL8vuBti3Z",
  "key41": "2qN7TxTsEEmEmdDB4ZFjavry1tG1he83Ktvs6cTtYFz2unptfeWqyfp9ieBAPoSubakuSuPPtdscU6JsS2tJ7Yne",
  "key42": "4uk8Ct2rvj6QqadtDvBEo2gf27VWMiFpdS1RfJY98joa78VUpozCidWrj9sUt3u3UpZrz8irY38tKr85g4sjuuh2",
  "key43": "pcNm8npUY8HPfo3BiFB66uir9yQWBNChScg2u141NHY6dheeWayTJc3dbtJ7JrC1kugn4ZSJn2TntF6Gyih7rYa",
  "key44": "2oaUNacBJqRLmQW2EFzoBDaBMNpmqmLYs7WNTWhmf2yFNDqMbXFYhNGM8kW1Yx7EQwCjRyQw8XRUw8waXJyr7jfn",
  "key45": "NVRpxkVQcVZPqkVcZ1uXpEBrn2AzXzLzRF9yBHD4vBrmhJ1CLvKf2ktNADuuRYk9wRdaqg6KtKmY3B1z184Tvr4",
  "key46": "3fkL2WUPCER6EZpw3SEfSKsfDEirKWbLUxo8U8XobWkze7aU6fEQF2JQ2Y9iBnToMaYDZnkso4Jo2aGwwTyC4gxM",
  "key47": "4jutNqspbD1RtpDw7hDFZrgqkXPVV4RY4GLqp2m1re1FcWdrwapfEo78nUpafcyCsFzfRBPLceebDnFxuChYzvWr",
  "key48": "2ZoybC9Pbbn1iTHtNvfXZc2dTJHecb1AYRWKJ7x8XGdFFzHKR1ZPyEMimmqGkNgz2VpD5KRFteYuRmSGVm8CC9DS"
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
