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
    "2KdDxG6hmzJXSWeH8qu3YX2Pvjo3DUAb7QjJzTtutU7S8EsY38xF7QZpX9e5MVyTzx8xPJtX7n4Wpq6E7TaGmZE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5re15gN43wsKuwBGW3zRr8rTokKYw2rpp7xqgAdFhgTxmGeft5tvg8j1GspzUzFxVndpRkpSc86jakvhzKxE3GCq",
  "key1": "5AG63g3LmoBC2ozfgpYoT6LD3iWRSxSXU8my1UTfwxGCgrTn2kLLPBjV6KuZn7eaS4jG896BxJuCtRZSbqdaJ6aA",
  "key2": "VWsyG17DaH2PDBvfz9a6rYEM8kMsB5jas8cmDJktA7D4CEvMhzo9owwjnoeNH2Vw9CCRc3759iK5Gd3WzdhaNRi",
  "key3": "5AJd3BoVGi7GMm5BZL5YubWsxfPDdj68kbeQxmniYehA53Lh8mBMhR39h11cBhFzfr3uxT95AXeqCrhMN5hxSuLd",
  "key4": "34qasbZz8Wo8jSsgQZPXwSwAp6ewHQtdsJhs37fiuNkHkXEycMEXtYX6yVc1g1pQE9y5uAEnYccw1h79vTgg5uGR",
  "key5": "434XChp7MwJ9WWHJ64uvXr3sRz6nJU4SwQbCDBf3ERuEg3bNEnaou3sCW8AUzZ2v2KmiKyJT3zURBvxRcYXFSyAb",
  "key6": "63y5nbsaqbvhzNENt93qhad9nd9nMJZYD1AcwLotQb8CkdRzZ4gYrzoUEqS5A2yayjCxCU7hWDStFwmNmAgMUE3B",
  "key7": "NyfMdVgx4hfhdXYbEvi8RugsmaEwybCPxQu2LLfdDT7znwJkYrmVzpgHDx6o7jZm8TFp1roynbJRcvZtMnyWHwj",
  "key8": "4TqF4gpurSvvPCrdzPKCAHAusXpCv5F1FHfuk9RREvCerCvSVqKue2ZHFrEqPKRFhpyuEcuyJRQzq4MDzdVcX17t",
  "key9": "2Zs4pdN38bb14oSbyagFMzmto1ApyPKKvCtMGwfmy6mgUdyw2eF7d1WWWKJn6EMqo3CkJxFdNAX2J5NNu2AbPSPj",
  "key10": "3KzJhsWeicd1VUf8LHGE6PK89tjg8xjte4wwKfuwhH6Ptk7wh7PLYhgKuwVDiKkLRF6xgPwzxd6K6AgYu8v3qbgH",
  "key11": "qgBQBaB2Yvy2AETf58A43eY2xZNFq23xDDxhA4DswpmcjP8cGhi8d6RkcP1MyEeNNGw99NoYsjHvWjJRY3rp89a",
  "key12": "4Ngi9w5T5gVTicLYLU5844jJqp6PK2BMNMV24c8yQT7NKgTcCM2kW1zBTrrw8AfzTxv2kNtsuLsxNo5tJQgzeQsp",
  "key13": "5RhcHCxF4kaWw2jefZEVgZHUDrFpLtriW6cShLmfuvVbajJyq1SQhZRbmLSoMqP1Mm9ugFqf6jtd8gk6SL78GEdW",
  "key14": "4ckGJm421m51734haGqLu44BLPuQbu9KvYC7aLHFPcrPUoPh9X8hzsTBEMDLBiH3GuRYd9X7G1WN9eePdkCAL1w9",
  "key15": "65yeZFNRTuEGk6LvkQE144fDyiTx8swxfDpB47ghQaFZ9ERBXcEv6gq8TuyU5cA1wkzzXTAZiPbDeC3TfJn1Qave",
  "key16": "6bJJDqr2wjjHq6zqbUAx8AQj49JAZindxvjPT3fiwCzCNHgs4hF9fFNS44cidHRmPaMbFLsv5Xvf27f8TSXZMXQ",
  "key17": "5X13FTH9VBxZ8GmuBGwVKt1sKWZKTCPStGZxXiSWahmt9h5MKCZGwUNCwFM4wZmn9YR6XfBHFdfoNRicwP9ikTjt",
  "key18": "28vdx5GECJ9kFgeU1No3uYvwNpaC32n4JKN7PoeUQSdzsQnmmm7seSN93GpWqy3ApnbR9pg8BXQYyYNFX1Xs6j6o",
  "key19": "pjQhWHt2A6c5tpgyUg5ajif5hxTYS5zG8pLzNJzHsnXfbpHTnCjtNmJSkawuMTbcxnaU953bDtGexhinBG2TxfL",
  "key20": "5M4zScvVjq26qpZFM8kKJoRsCxxnK4Fk1AAARmSwzehEyJSqFww6FQuMpK17C88yYoZcWoi478u9hrcZQvXUFQd8",
  "key21": "5WaLbhCQ259qrkMyhiZ93fFJ5w3yzjxMbpPfVF7Qt7LA6XjFqQivh9M7LyBMqtT5YG4L8jiwHeVHinzzmd5QNBRC",
  "key22": "55WrJ5ed57JDZYjLggTezmseH5N6s8dmhqkyHdYGrRXZGiVS1TMZPpuBzZ4qVyUd8Z2NEXcAyUHiMJraWfYexVcj",
  "key23": "3mGF2EXHWNjfs2reaf44jSdfN5ixBaZVowC3HH1KcDcf91NHHV58vyS7eKQpQ2RqQG85W7V2CBwbEV4ahXHFPFa1",
  "key24": "gw3gHmp9Zfg1YXYkTKMTK6S4ri36VLXeMCJGac5X7AJpFsgAhCKii3dnY3wg38qp6LtMDu4wbKUEtKpv5cfCV1H",
  "key25": "5GsoPdLpFNBbdXX8Fq6Lm1iR4rrftFoC63k2GhKeibPL9F7DJzwshbK9NfeguvagxexwnqTcztsSZENjWcxCSyex",
  "key26": "2LJWrjvbhy1MN8F8eUkSBNQXs6NqzsdKPiU2ZXEGbkSyTmaFzjoqk257YHgobTmddTq2weYLN4PzXZd6rcqgned3",
  "key27": "58eBWLDGbrG15XeQYtXZ7EAJ6GPQ7Kr1NRB1yrQY98RXpYBoXDAnxaGkgqysx8am6LuG9QFaXjezJEb9dcqSKJ7",
  "key28": "2iQDqXty8u82hmPspXzzeaGwS9VzSLp7CmLqeqMeKJxJ1ni1eBU8ywwcKsXkfKLSrq9ZSjtb2ksXk9XrSsUrtjLj",
  "key29": "4kE2otWmNVfxGx3bNXgR3W5Qpz8ZgZ9r5a2nh2WaNH316Fbrded36PLz9m6Q6Goe4DJqj2TMWp1M5FUzHBG9ZhiP",
  "key30": "5cYSBEP1enDESMczuSdVeiEgmYrm1FxpuQHyFJdCMLyxcgj9umErZFmCMgh14gkP1mTgkkAoP2jTEZvZ5Qb3o8GA",
  "key31": "2sDXDCGyDnW5LswTketWxdat1iVhxjNV2zcPpV1RBJ8AvwTiwX2ngWsSJ7dPWQXT5WTKj1SjrLqjrSJXSkttuSMw",
  "key32": "48hbKaMoPGwgqSq3CB6M4RDKTXB8frSKqtNHujv98C4LtXAwePdHnueUev3okeaCyEmCaDQYzaPWnmyVhotCcTRk",
  "key33": "3nu1oLVLju1stcJ95zgM58BubZrumMaoWvHFwoJnDgCg7z1Mg4pTEZfCd9VYDHRFeRECnzwGRthWQ1TLfMeSo7Ei",
  "key34": "WDR1W7MLjRz8ptX5UnHDpBYh9wAkgAu8iMF5vxgtGXgQzNDshh9X2MskMad1TqS7PicFAZuSkiJMi1ipFxoSCbG",
  "key35": "4748fcgunY2Dun8hQiL2TvY4pDwrcTVGwFR9wbgudjwL4kqDRWTgQGE7kKZeoS8QZzhchSQCSshgbTeksDsWPogX",
  "key36": "5unpQgLHvrfYtp6xEWEXqGWvUprL7EnV1mtJbEoXukCUewLbhkqUFBx1e67sJ9ReTRAN6xSFVvsAfvtdcZB49D73",
  "key37": "4Vikw8Lagfm4SgKcXGRLfzxQcxU2XgWLQt2ahGW6Y4mDozSMMpaU7qu3nViTTCRCxhRn1Den5Cf1Bph49RFoPxX",
  "key38": "3ft856ta6z7V6KLZFibB3huSQxiwR88TCcowVtyGBXXjkiognJbu6Eis8DCuNMJDihhB4bpvj6nQPjNET4htquPs",
  "key39": "58g94eKycoz96wGkeEJqXvv6LYfefdpXdLcPtAftcd7E4VBJLpNqHBGrvaKS8qzeLXuHaorRVQp9jRhujYoD1ddq",
  "key40": "sEZ6pcuwSd8SeRwNkokdvxT1Dt4S7zDHjH2jRb9mGU3uQk41Vhdj8kdxfA5Hkxuzhq8mMAmotmioz2PXcU7gtzs",
  "key41": "23UiBJhdvaamQL3KjwreN2zyfYzDGSfF9nVzFnCvVUtden25mXaGycX8NeJ3txfXM1QfP7vZKNyCNzi2iYCrEmhp",
  "key42": "4wq3W6pc4pt8KLo7megEEzjLZNVomtdbqGiPAf9G1PrXy5ypwumtyBRc8z14eU9mpQYzoqb4mr8xRXoB4L3isTB",
  "key43": "2394BcibF3QbkhzTuCwP8hzXmrBsYPM2oreQuq7E8iKtS3fRiXo8XVzA6N3USohWoRjyH3tmeyptLj3V1X7wfUAJ",
  "key44": "58qQL3jq9ToZQNgspd5GDxTuYijHMnuH2doij9EYwFtpQM2Jc3kiH9ydSQBJQ3DtNzUKqhNypBHUFuPZWJ73U6RR",
  "key45": "5cd4ftZmNBtJ4DQNfSijoptJE63LjNQM8iBthRYciXEciBmVdHEGn6a4tbL2XgooChGGdigD2qH7ExYBhSuhcUEk",
  "key46": "5z7oVu91PXufyNZTuyr93UPEKAcZACMZbuiKzELCewB4y1xsx29zNCXCcmiTjvgSZEQtuktmFNfnyPKPtQFtUUuJ"
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
