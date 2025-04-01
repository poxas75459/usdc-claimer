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
    "27rvgTHfKMUyBdMwghQsZdmonuXu8Uz1uzjqrMfb8XmFsCyVZTkeRCMt9GRwjqkrdtitbLMDMSm4wdCV8mE4MRHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qaNt2iBiRcu4QQD5s6zwMcN9J7P3v1oGAYDw7uUg1uLgFgKn3oudk8t4mAtfjhbrAho6kV6f2P9XbfbjPUr1feQ",
  "key1": "5sqNAuHR5XJhB2G9UKpSWAozqzg4RpMWfrtXRRso6AuLZCp5HTQnacLuYxJp9dMkeRbMfL1QHKUfFZZhtUUXDjep",
  "key2": "PVjGxmbd6kEr6R1Q3ooY3nRe9gocMfLPKzUiDJfJso4Wd5HERvwT1dk9Aq3r6iqQxbGDD9nAK3CkuEagGZs1zEt",
  "key3": "3SgWPSixi6MvkxP2xo6th5nPppoEjp7X7UYc7Hp4Ct3uijezEZUNtqqYgRRT2eVZhpUnEn6Ei4raUTJXkG6CvDyM",
  "key4": "4S5i2FE4M54XF7Q1ucp3nrkhhvyNaYbN8MrfGdg86fxQRGKbP8tWueLpPt7DyPLKa9F8ZoSCM6dGpcjAgB6bSxR8",
  "key5": "3Xc4CDcUiWxuzwuYectCjboYotdBqhbaZGxgc7FwyvWbX1wfKfnUfNAmhkdGsDeidVG4xQC5ZVPArMMNcXK4yBWo",
  "key6": "5fhfjyV2D8aFUSqHigGBUaMTCenX7R8LUVhRBQnq7zEjJoHUhgupsjjSKMY9VD82efcx5R6u9F9NKVwBdRWZ4aU6",
  "key7": "3bo2YAQVRp8DfLKgE7tNQKs6MCGB4dSxGTja3S7zwvNnPJZhTuaceFnAifv5R8kpMQSTDnX9N2Sfq12DwGAW7F88",
  "key8": "3egaDSo8ohuvfjA57PWbLkHKucCPrppmzcHrLpuaDWGh5WsAeWqWWuzA4ze4HxBmE1Z5P81P1XribcaFosKgXuBw",
  "key9": "4DNhwXFoGxbsQBCt6th8U2xQhNwpDzffmCoyns8VRViMSabTfgn9r7amjVxMpKgFhLvX3Mw6ZRrmGoayuUD1APm1",
  "key10": "5DJPiBFZFerqAGHcffUNuftuDPViYe8feFiPWdxY65LS4zu7Hv854xCkgziADETRdWEjAhJ1bLCb24PLEYsLbYkU",
  "key11": "267HdreqPop2KQrncpX6dbbSBRTjixkdiu6ccL7wXdCRNkz9c1xpNzbyTKLqBphseiieXzWTvqCZZ1NCXoLEeZTy",
  "key12": "3UoVJ4NGhYpMXfuuzTF6bvh9uWfySbR1oBJB7rSr5T57UDUmhtS1Yn3H1sCd7x83Spm8WkMuh8XEjbURAvnMGhkh",
  "key13": "5AAGxctaAo8pnXW3h4AtFKSAJ8UXETkUGLVEcxNjXXNeSuMJqQsRag6zKxtUdkUXVWvpQVecWAaMMBhXrbejeCJk",
  "key14": "A446V6ZsL6iQwjajnc3Lkivj2DDuVdaqFnXYpCQy71qjiejAEZcUVd6pSq7e88NzywsCVUVzQTZhaRW2tSrQRAT",
  "key15": "4AaAi4zdZvtAckKuXrQwMNNiv7rG6kiaNz6XBEgtpHJnXYRxEvbcwDS1ZCdTnGyxrZ1TgTiRaYQz7Z6ejHxSwjsd",
  "key16": "3g47ZHFuJ4xKfTnEsm4FhofthJ9oDqSPLh2y4CPoL6Zy2W36LaYu3pd9zEtU7aD3KzqpiTidtPdof121t3FSJjjk",
  "key17": "4XVgj9c63hxjLLfSLjQFtKu8Lk6sE23xPRwP76etYdBGX3xFpRLyB4Zb5ZeXdBoRuw4joz7ZMTKEcs4e7jS7SdKp",
  "key18": "3BZLUViY8hVk1ZwRA3itfnCDCABajm4SccQ7idGMw6NBwdyup2gQonDToXgFcW1NMbY8Z2pCSo3oHuQciW1RJZEU",
  "key19": "5uHqi5BjJxJFqNZ41VtHo2J5HMSyQ2rBarX77XhHLzE4qVztex7uYG42eM3QyLvunZtDvD5NNCWwmW1uXxVDpPNV",
  "key20": "48HMD6J7CHS8TgjNUEoZ1rZPLAC6TVL8ccEepLKTYMTYmmxxJ1uGSu4BjGtbGrBi6xvSSMnjZpouGykvXKZaZLmN",
  "key21": "23yvzFgZVCRoRmCiLYYfsts2LfChTyLWXrcZhDc3WuM8mPBxi2BhueH1DK63cc5k63BfZbUzzTJuxRswPqbpxWdq",
  "key22": "5CPkNkk1eDT5ELnaFEncZJNhTVHU49qCfDFZYkH68hH3k3iQfeH6sb2q4NVXgKFtpwVno6yD192mt1351SfwapTo",
  "key23": "2wCDGRx6VXiJu2orkpF9bY7Fq1VQHiULTZavGrT7pg2tANLnXojQoHz6GYCZHnAVSXRuNT3AiwtdXxmQsT9xfkS",
  "key24": "59YrwfzqDYntJ7TxpK1iDNgnKpqKX9npPUrnkpmLfpvX7pbiRTdENMeN4ifTDJ3swAUbPnfHKvD2PbjMrfNnhrQN",
  "key25": "62WHoNNoygmg8ZuZAiCV9HfeScVbPvvFDdC7tNBgQhSyZ6wNfxQq5CuwyaNRt3jTn2XR4Kd2VHt9Lh2FH2xEJdK8",
  "key26": "2v1RcvcjBskA2voEK4n95BKNs8m2PdNr3ZhPKgUeq72y1GjQu3pjPJek2EcR4e8vKLFvdUxCCtSGoLiywaytsr2Z",
  "key27": "642QbKqVzr1ZEv1e6i9QDkgASPia3LU3Ebc8HX8fj9K7s7pnfGpwC9d7Dkms1o9meVrm6FpCaj4UJafjmc6aa31a",
  "key28": "BEicjX2eFQFCz6nJyopgpCSgPs13Rrzqz5mpUPkuHho5RsWaEbCXYmM2b2L15oBXuJX1DUXe2iUs55AB9N9Yxpv",
  "key29": "25JRmAUwmy1EEpD7nuvm89vUmtmF4Fx3Bm9hxkmQvz982GumWFaQVVimM5shbYxuvwzpEgxuf4KtMuQXhGJE8mmF",
  "key30": "4tk6vGQehM3bbDEg2Cg9XJJNGP5qsDp58v9P8EsEoPx1PwihzYaZkAvSjcHUZLzAd9bN8dDWLy2kUJgbhfSWHzeG",
  "key31": "5ACq631cRPEmdHWCLkzGGMuZDzvpzqZLPbBsDQ34nUjhAd8jDEpzYt13q28Y4Yw2hmwkHoH872P4eHypN1hhuHS9",
  "key32": "3VYwUtebQC6joBDXRHY1fn1pgx1xHJKCJYkfYi1nk9uSq4Q7j9kNjUhyW9DnH7TNddNoAsxoP1FQAf7CKPmVK5sm",
  "key33": "5EZ4cfSVocqeSTXJFCYkUZqnxFL1aofnvXrpxrVUN97cAHmiG5osbMubyxfjsaNh6rgbxMddR4RUfTTm6CugN22a",
  "key34": "3CC2zEwjKbUEU4d6Z8rrUpyPMsvcnsFkfkpc7zAdRtPnBstxKGeMPApsijoY1NhUJBFv4XCgQtrRGTuNH1uirvWf",
  "key35": "2mVdaJtD2zUxtfkEXhKhUMoekS6y3fso3i7qiD2zoi1hsh2nQNjjcqFtVHHWHAKwiHS2M9Qnjg49gR5TyYPmdjec",
  "key36": "525Psg3njSgisXGNXjv9q9EyYaVcMx34LUGNmfYtvUoFNmcsZ6DaMjCJnPwnMKHerEFDQXN5eG9RhQuakj8iacai",
  "key37": "2S2ZmKUHA7taUwn8puRcomKrtYnsNQt3UhELYBkumtQ5DRqbRX6aQ5xE8qHcW1ghQybcMKSQMVwP1oPvFSZm97uH",
  "key38": "XUq5yLLdarjuKqp8bWRwDTtHUqDFCZragVBSKdrp2DR6ambKYJPcenL4upft9NxTjRsnxBZaiGkvBfjUqyVrsh8",
  "key39": "2ozi6gag6gPsARBUMZqH12pMQghasoyu74qGcwkFn2PkTycs6onJJBFCRZvByZT8T1nbiL4JqMALXErHWioJgR23",
  "key40": "YK4vVWQ9uY4jGkYPYtGuX4GmLxc66CALW2dSQtH4e1UMfkejoFuVoHGr92izvVpR2CMymuiPjpjiCrnBbbqmwFq"
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
