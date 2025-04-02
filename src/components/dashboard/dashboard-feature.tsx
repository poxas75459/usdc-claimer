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
    "48kT2V2tY5Pet9n2xpsxrhshNsLSzAhCFpPs83EeKUYpDXjcygbZP4whdjijwdZ6peWDQTEARVCPGu12cexW3QUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zVr5NDSTwR5wtST1b5xFsCgGGKP7spfJP7bwUqXVhbwrGZq6otgp2T2aPzEmPWB5dWbHoBMYpDkiQ8xQbVynw21",
  "key1": "3hPHYXsWcPceUMzCxBegH4cGLnhFgbYX9cRbfZxp9BKHXTFKGEXAZ6gAJL4AEaUtxyyugLzTfL2Kf2JZwXXQeBbk",
  "key2": "wNSZW7MtQhvvkBmz62rdwsRrqfxo2qjQBAfC3WxW1516WmqZArhf4Tsn5Qpx3sbSCBzy8Ex5mSuPQoqbqmcJ2fr",
  "key3": "9ZM95xYJuzGCD6gY4Ceghacd2hhaCFr76j1xKQQZDdQNXsJqavc2NDzz8E2DLkNj3ZbY2zpfAphmUaTcbAJV9Za",
  "key4": "3b2eDFAV3PMnJDaUb9MWysqLxGioTfzpdU3MXRfxx2N4jf8YJX85TzKJKCjSMpaPLHP52AyqrQRSj2QoSwuB2KnH",
  "key5": "3UsTRXstYKLzoAQDX4YNyj8CfV7C7mPrhP58Z58tHJyBas4h7sW7pMVoFxhENha4ZJRYucxFEz1ndMwd8eoJUE39",
  "key6": "B88JGy18evK7GUD5njVoZFFbkgpiNqjqb7oDgzQBs8ik5Qc6DjF64bUVYsL4Ls2zWchFVgqmtELZxuZUqNs12DZ",
  "key7": "46gqer8htKsEabZ6xLW3ATT2SnCBdS8o5PxPpsasfjdznGgT44ZNPfYPtHdMVDMNLP4pfcSQuqreK4LQvh6TF3y2",
  "key8": "4FvUvfgZzrK7yWFc8eSTqAEwQbnMZwYiUvrpcqMixEc4obbbLqfSFBpxN2KUzEDm2wy143XffjKDs7uEaVi2m2W9",
  "key9": "5NebbK5doHoc8tV31KDBTL1AoUxUgJtLrmwfKRekZ4unNBhLghi61pBs3QLKLSZC1JLvEjVHYfJM144ed1hGPnFg",
  "key10": "2Fm4geWfqUFVNaRpcJJfX4DM3dTSSdxXeUBSqTn6X5DwALh5VbMXj8Po5St3cC1MCweq7H3w7iWE25wHaeaFRMcU",
  "key11": "5BxQSWtuLirWbM3h1mNkA8j2Qu8eLAaFoX9frys4E6mc9bdafa5jf7c2uNMXT3nkbmstpKyXqLnKFEumLq7YqyoG",
  "key12": "B7wuhfPs9hrFVkos6WSZ2TbHHfsDr15CEFvHm3pZ7f5KbtsN4rzpGDQw9aFbDmKiWRdVkRtvzGRPL1MfHUmDgoi",
  "key13": "q5ySP3mEvaDpkgNqRgdwHyGBts2PCjkCiFgsuDdL2y3dTuRjvN2sevhkJL45YV6KT4bgqca5RgRnXrB8Evn5CUu",
  "key14": "3kqShWqQY5ujEvEYNEzZzHV66yZ6XhFvbt5YrQUUKySvC4gPwjHGMvdV16wSF9ttSZsvHkFSEUh7nD9GbiL57EUm",
  "key15": "2c5peDjcFcyqL1Q196EgR6ztt86A5GkP5eZzLA2WQsCnbbpmxYbU5MTPW4mgzuJn1RrUGNhiouLhJVbaQQFW655f",
  "key16": "hWpnQe72KMwemDHDK4tDMfazxcTvJUhmJ7r5FauKPKcFKRm9d5Hd2FCoybiNPAkn49GfwjDgvNqJv537u3eV4xr",
  "key17": "54ZhQs5LhbcBVPWTcmZNS8ao7GYRkJZfS9FA8LAr9znjdghaSuoj85bzWi6JdWMvSVj9yjy7eUFWoXX2HsF7dPzZ",
  "key18": "67SW5uJucGoJiFzPqfFJ6stuP8wvk63F9R4prpLjUd9JevPic1rZfsd9wqpS9Vz1siVSumBTBKrEsNnxWPW4zdzq",
  "key19": "pXjhwViYvMXwP3bkczbSkCMkvhMH2emAoRMkt1FsWVB8duzwVocA22ovDAhL69Mmzyi8a3taqqRoCkj3Qr7FkDG",
  "key20": "ggz93hvubsrugMqU4513wPTfKihFUF1ygmvuHW5SayKMqntWRDqok79ZXhLPNQ3T4asEiV6iCfuGzfksLpbAAwg",
  "key21": "5J34DBwAFetU1H1GxJXxeRWugVcrEp762pA4VrrxMerYKEQ3UCtQQ1hxg7VJo9irXLEdoP4qfjiyrS9qFj8X5grH",
  "key22": "5upb7epz7uRvQA64tFzFgfHdXi89dh2C3n24fxA2LbrN3EEq5qCsR1RofDDsaP8ewidEqnraLCfGQ9g2otp591Nf",
  "key23": "4B7GaipdjM9brqe3Bf2eprm8BRkB7UBthHfPKPsj2M2TjMTr5FA25rw4ihudUiJnp9Ka6ptZ5RQniU7ns1j5cEyi",
  "key24": "xmEAddbJ61r28v2iejzxRC7dmLgQ1ywzRd7AeKcDRP9gDG4LagZRf4xhZnXNYg68N8y1wUaDE5PKgnEPbTJK2m6",
  "key25": "3JyvLr2fmpqZ7ddvRz96aNVio62FAfLqhyzoVNN5aBdWCPyUMmGkDjUcHzn65H5sLs6KMV5XSJAtYdp7r6coqmF9",
  "key26": "4WCDwX88VB9ErmrHqUz1rbmbqYjw9iq4VjKUvwkbKtxDJQhsbK1yQtFiPtYnzMSV1h7j376wHGXJgbXbnyV74m7f",
  "key27": "2tTYhpoZMA1stXjLiTw5iDYUaNDGQr71dAoQuXf4dzDzjtrqsncoWZEVXxxUrgWkwyJ2CotLPtJPbm4JschpCzyW",
  "key28": "26QaEZLG3mbQe9XedGAxFq5KHiD5h9FVoNSC3HudGKBvYGotiV5uL1bpLAdU7eHXNvDTrr4RYN9SxEon8A5S55YF",
  "key29": "5H2bZRKvY2Y7oKDK6egwG114Ju8ZgDeRJEFqTgWJCwH6Y2in8F8LpBTCmFvc3m9b9cqXChb3orRPBr8RAVMfcxgK",
  "key30": "5KWDJ8Lj7TQN5PHTbgQ1HA1hqPvBqJ14SbVUdn1C99zoHuKsbik6LgVXB7TYRP1V22tMFEFarBcurqM5FaEEm4TA",
  "key31": "bvosxZSUZ1pPcHNuYc99EZfeZSvsMD2wsBRo9HpG7VhrHSfiP5Rz5sivo1qdr9yM2XawLoCrzDHzbZ9EDajgZjj",
  "key32": "4qbPGnfd7NGkegSXDj4pw2zCbBuq4KtUy47y5d6NmM6bEJWqtNfvN6u26RHCPWUk6fcwvxMzU1RBAsPMoBk9g4hn",
  "key33": "3sGtCaoKC5vGNQEygpZeDx6KXbar26eXN42zPpWtvYostNHRZAm3Wajgyos2Zo8xaJX42BbETfDbAjYUCyP37Gn9",
  "key34": "3FVMujbkUCnAtPrwanUGKG3wxrXzoLKiffYdZsYxpyubcESPqwaM5JiNUxUMx4A82Sr8oPRoAQ49oiNCcsp63aJw",
  "key35": "54kpUbdymMuHY6RwUHfBYU8DtEWw6vNMAbx78fmg1KvYk7wh9hcMkbGsePoj46evBm7bZ8Vuk9Xtqcx5z14NGd2q",
  "key36": "4QHiEYf3brEuQxuAMeXZh8dQM2UdvmEHg96jcbqauyyZf6hRr1wVD7mo21annHi9ASMX71w6BNF3HBsp6SiN3JzE",
  "key37": "5t5Ph6QqdzEdmhX3RRiwNbnpbehoNrjzGWHDndJU1Hm88Nir9y4JgpjMifoBjzJZxPKmbRaFF7fydw2Rms2oHqWp",
  "key38": "2kGxQAtYG6QtydvZLcASsCTG6ami4jB79tXowJ1hUtWQNSthPEDoCYmKcFPdbA8ninNGhzFm5TeeyEcgAYCvexvt",
  "key39": "66aeAeuuMDzEhg2KVDffzd1rDe87dD5WvT6Y7dsCGwErC2Pmi78AsbHAKfwWecG4G19aJgsw8Wht1aSAuVu7EfFy",
  "key40": "5Pt889Lpo32Z4ARxTV9s56LFtoGCmc2dVLr1dVqdpeZMyqZ1zyBmUYec75Z8CxpaBgbaAWYoyH6AXDx1SnGfHeie",
  "key41": "3yyTwZbPTEz2Vsv7J1CCdD6NuYSjThwmBgEv6Usbj6qiidU1qT2p5sq2MWgYqKkjAhvZ93WsaKe8UfzcFsr453Ap",
  "key42": "2eVcgUsLzv61aACSJsxLxgTWrAzPJCrC6u4qTE9HoMur667eEC5cct6bAyicNYbieFfHA3duWGhqzvVwm3FSVJgF",
  "key43": "2XRvsTkG8p9bAnyhzZy45MYpMnBRiYGiamWNM5nFcKsNvrZyyhhEX26ZbKXFYokKudzxmQ7JnfqNUT64EheY93z",
  "key44": "5aS7yyAwy5cw6F12J5QQmeJF488GocMAmkTrkJLSq58CmGYYVLUa3F3pTeiorKeaZBbkvK1LFPARfZWokrhuERpS",
  "key45": "4epkLkeeg2AW72uuMbxHgXc5oqN5xz9Q3BWsZ6GD4VnxyjQG2Y9xqXMRFbLCxEoMq2gTt13wSaB8v8bLSjZz3mB4",
  "key46": "2RNCzmSPa57sTp87cnHT3LsgeGQ6YdEBfSk4HxpfpdVLLwxoCksFddNtajLhWWhjzmdjTgXxBoV671UYMeDKtE8c",
  "key47": "3og7qLDPEyQHsTjXyKhNrUV3Hn5eehjrTHfUDVCXbcH6WkXUtUnLLgbDPMW1QURY2A3SxDfukvzBtqNQtBTwwWea",
  "key48": "23g9SdPX69j72E45wfsQjKwX1N7N2EzDXtmZZzHmXqH8NFwJbr3TerPhKdL86gu3xkMJpeUr1Q1RJgkyTxjwTKXi"
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
