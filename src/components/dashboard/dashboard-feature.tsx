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
    "3sbuFiQMJiPcDdXtpAAmEtX6x18m5UdFrTwn7mYfYU96W6pnSxGaTcP7EEzM9A4ExezkRYCeqcwRsytMAJfoZTwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tppvUCetn9fkCu5WVJHNzRKWfonV6mneTsdzhksyy25ZLwFR5vzDjgFsLXHj3sTo7beUQCnuPdGZDVqYKekUSzi",
  "key1": "4aTGazp26pZ5pMJBWcTz1SgGeHEEUhUkiEFfzbHABptasNMJoEVvqNqVw9osSMGxTXWuLX8qJveSTdMSUxXxYhVR",
  "key2": "4bC7q7Xs4XjLHQ3i9bjrBR1DNtGuyVnEXUXAXD19fDMiuwG2tZ66Gmf4QPCNgb2HzCrJYgqv52bC8ctisnxFa3Lq",
  "key3": "2Yp2wDRtaLnuVfPwiy14qSWKGAWk14MB59y8fHqKLoM9JbJS1128fyL6RZhRDi4qZDsKBTmjRPsp7DxK7tToe2Le",
  "key4": "5Mbxm3jgynPAeS1GHMGs6XMjpthgSA5xrDLHEUQy3oCAWastiv6BaazkWt9afBk1M54YauDHTFozHxCLvACHm6Fs",
  "key5": "49dHziKfcxDvq5Gy6qRAXCbnMRNRQ5BkVHM7gjQD5zxNTLvpmeJXUXYtgam4yA3JNofFakVBdJFwQbpVgvZG4EDX",
  "key6": "2fLR8xmGQT9bS8g8X9usDJe5s91TW11R8HFYQSenym8BjBSyJ4Kn74a6tvkDpN9qRJnXU2EikCx363xePNFnNEx7",
  "key7": "4AcrEmJhMCA2vRsnHb9LMtxfbiauzSbEGyTQTybFmdLWmUDgahyLuFQooR9xgFJZFpCBDs9JHHxf6vdJqA7xJ8c5",
  "key8": "5wCD3zCCEa9Re5UdH8TfLuFoZEhC77SJLpbzfDAZVyFfkzkLmay5RFzCc4Wv2XBHA75PRCxBWPmWuz4BKZ44yyht",
  "key9": "65NnsxjNybzXLvzcwu52cmZvmwym7p43BeuvAYzmX516ZtXYuBfF2X1kUsCvpNS4V312azqG1ieV6coE2LMj51tn",
  "key10": "61uPVJjhoZxfj2EAgkeQ6uTpitvDdAZZR36xNEfdsvcFFDz4DonWzW1r8SQJ8uC4B7UoU1HY6ppiJNd7FCMmY3F",
  "key11": "5V2xVkP2vJnJwZpqtF3cMZEazvLEXtsFXHX3CnujhyLQYHy1WxRK4qAed3Nwz4NtGWKfk4yteSZiRQxscMkBfkhA",
  "key12": "4AfmG2NDtuocp6Qvm2oK7cBsz8iDi6ViUajCmN8kCXYJoqrjWzHDw7Ms6gpHzSEuuXKYVfNd9yCuFitzaKbSy2ew",
  "key13": "3tp4Tzm8QrMYBfAr5w769VYLA8PtXAFeFAmhDysUGdMRvxTLxGmhw3jf6Fytr3ZKq8u7r4puDeTDjCQDYNeqxaAB",
  "key14": "4TL66pqc4uuDpD2hs95cpHjTPUemzVamseNw43L4CvoHvWg9D6psNhqgCUztMEXpZR45ZAxxUp5PHSqXTT9P7xCC",
  "key15": "3oqfcALaAaQqaKBLZNrWUSZm8di4kmoQE5gLgiSzr3WDSzhZzXWuEpSxKgYaaAf22Fb4PDchMGQB3kDzZdZ8mcpi",
  "key16": "VfrAUsu8BBRBdyc4eWmR8HmCdppRYtCzVYcdbb7rot8EWvAx7NLqaYjZGKmC1eS8r6tXZvNitPumUppbotDvoyt",
  "key17": "KLNhK8eiJATzHs9NFFR3FSjiFByUFFVRwWukZLnXu4vJ1KuLDHrUBNk4Un3KBcZ8i9cCTWguFVW58YBygywD57m",
  "key18": "yBvHiaDqDuEmJP2puZSe5WHjtA3pFauEgWejFM8hgjFTmCCSYifRNLESQ11xHJ2aN6MxEgi7WwWmSnJsDmGdoeW",
  "key19": "3cYqx2q8D5jsGEZLZWTALTzMuLiYc9ionMcMYy9qTjQoh2mGa3yTfHfhiXyxys79sUGSp3U9PYWFKMfYPR3uuoAg",
  "key20": "48LHPEsz26JkYwi8G44RQyySMgBZAgjpbiSnTiDx1fViehBHwgPAHR6DdRSenLEwr1zpQ7XJXDLBJN4SMzovvUvb",
  "key21": "SDnExGUppuF87JVMmai9xrZzMBU4RDRCuKExVqFR7u2uGV5yzxs13PgHGkpCKKQccVic57QADv8Zewtemift1hj",
  "key22": "2iktVrvCyeD5mGUAthLGHqEZS6MMe5Q9vPJQrqwMv92tLLG4wVhM9yRHqHXaEWSrkR52NYi3rFC55SjwyFkZDc6K",
  "key23": "51DdXpWiWgYRT8Co3VxnnBq5ZGA2h4vrhiJMcxcqG5SVT6nXM8sHvysRaKPx6zHJM4UqipuueWiGSB3PcuRujjDD",
  "key24": "4WviayCNm5B9nYW7rpWz9XdX16JtReyxwj8q3EhrrF4fHVNvDW5Xn2htcZG84KK8sXBdvBFnb5N29DeobkoP7tQb",
  "key25": "29JP9TFqjmQ56sgyzG5jxYN1MWwB425xeX9TGW6bTqZ4mhfXWhvkuAJ2kjgiKsjgf4R2iYsMPehBP5ZgRgbgQTqe",
  "key26": "2m4no28uM56DiLAbkGySghQJx6QWYnGGnV8RGH2U5h4WdMkpscMTVRzsCkDdwg1MAtQMpVVwwCxbzRdayFHeb6W1",
  "key27": "4miBbjnRaKTrMK4VJY8kAhoi5SmPDdsZpDVZxoDozQtboQNpMVgtTUxX77BZWFn1jXhVtVYmMnn9MrsjcoKgjQZC",
  "key28": "3utt8bGTsM3yFm1xxFxDA8w74W8dSmmNzwzDyw1EDaPeQ52zAHT4bHBkSvRnZUHum1GU7MeNPJtfPxCqmpptTEmZ",
  "key29": "4Z9fzvuGC1msyzh3hUxxi2aainGKE3CniBVG9y7iSw6hiASW8Fgrz2otWnibo1ni86nFSKKmw5rCnWE5STXn2vRZ",
  "key30": "4viDsrctvwGxgjk8CVeWEoFp4GTGnEgV9NmNQeeUzQtfL4G3QdysmLxuKXwiMjF9knyZC7atVTuGc4S4LJH2DVHH",
  "key31": "3AYqQnZg8cZ3TZLr8rYnnSkaikF5df2nAmA4oxekESaq78eLApkWWmVJSteLZPAUSGQ85esXV3kakRtn2yieiMcF",
  "key32": "YRJasA3v4mox99b7HVFxtKJE2X4UWhDBqtpqqYuLUwRkiAd5Yw7uewrGLTGEXh8WCM3cra5Djcy66DZUMjq4vE2",
  "key33": "5WQm6YNcWoHS7LyJ54sNB2YrmEt5CcUX5uv6UE1ShPsZZbeygUxg4wLSj8pw3tg1GTS7364wkxrZBDQhRcFfeBbe",
  "key34": "4SjSLfKdgh4nKKZvmb6zMpHKJNFRcn8sd3AnVw6J5CZHswBnvU9WXSWNu9wsVWBciChJXAW9JoprouUqBCUUnSdy",
  "key35": "3fTgo3BfLmR11xYYWUNyeY7JtkiqAHusV5rUeU8PPadQ7LiJi2uNzbqmYfz1k5F5n3b8oB2Wh1BnMpiRE2bJuCqk",
  "key36": "5EbQbV23QkDfh1hc49S8fASkZwegEreM8aPbXt9rg5BKBpsexAVQPo6cqMU4jLwukyC9bjVq9KYKN4ytv8KiN5YQ",
  "key37": "Aca8rVzbFaQ2CK3chuDkaoP2r7YXMepUbvewjMfr6bso9tjVVw8Bf5LGxvUEgiqpCbHtLrKUqUzyuqw1gjVbB2u",
  "key38": "3funNxwV7L2PqguqivGZTr1WZwPQy1AUxhKZuvVxVs5ysL29qW4uvDBdesvBjwGhZx1ZztkET5VHBaHQ2mfrZF2W",
  "key39": "43LbgUeBirSVgA9MitPr1pzahfh9CY818Ak7E69UHMPAqpzzMTBBYPzntiUjSY46BCA9b4hWLaCeXwRQ4gFMuaNZ",
  "key40": "3PQhFzGjHgPga71hmSGbT2spstetJaKdNPh5sU46JzWPJaNh1wdHzZTVXQqJooGKFpaGTDWWvYJgFJsNVroSq7QK",
  "key41": "3mAYqcihkAHD7BHXkNjsigFFjv2RhuNphszAsFEZrKTQa32p3a72Q1f9KM1JQtH4AJMVVT4vanoVoethk5gmvixA",
  "key42": "Kzd1ysASH61eEeRXwRAKmcRAoZ9Y112NaR3BV5pfXZEtZPrvDGhB2sNa8Kat9epn8dVptPLatypBZ8ZiZfumAtL",
  "key43": "33JoSdCVdfLebPUVRkrEU5B8wMddbEQskiVTjkBnvaAxNecsAmVfpJKJKXBwp3EXmQwoSW2yLwroYR72K88eq3CZ",
  "key44": "2UqzCjUU3uxLryDPLy89VGBztzffPe1oe66NzCoATGvvywrcbr7XvBomBN8EAsCTy5T9zCrYAHuqRTmSu8izW2Ei"
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
