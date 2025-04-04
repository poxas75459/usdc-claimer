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
    "LK6ViDa7p3Ems1HzneULyHQcHM4Aq5pHNCxExZbGstFupCDkpC5TC64BsrotpBAxJNQnTfbiodK79VQNw5LbMif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24SgcFrGjvf6SPRaWivQDJCAnyDFprB9QM5StTUNdjNJZVzHBksEueSYJjBaGdnRYjN4AVsD9Xn1cNERCmmg37Jy",
  "key1": "3LwGQtkXybeKDoeNJFYZJivpQKbKQ4vhTYC1HNRMXgzTZPBnFeKAZ4qfxZXV6GSxZK4uy3JknLf7TPp29Xx4QxBa",
  "key2": "2WvXEr9CyZur5aUCPRDwkpwQXqc8mG5wQ3CaNuejsu6KrfBgtBCB5qCx2hyYA5hoqH1YVSsPBvWUHgHkdJqE3ymN",
  "key3": "5VMBubnoJd7MSTLa3XzvwQ3Y2BgmCrHERp91HYDd2P4Do3JjYLeK5bWg1bmyVgENmXM4WJD7NW61BqN8d7DZ1PBp",
  "key4": "3iYkbVUMhWJwiXgVzD6pM86o8gEwRMdhoRNgBD1qLiXDj4edTbwaLuMiXSbvV9FTQJr6R8tXKDXzHZxEEw7WpmmK",
  "key5": "5vXXRzVrdQSrARbV5NDN4svunyrrXzfMNjHVq3RXLFiBwiWoKKZbsFvW5ZbKGg7TL48pCtLZDPqr73GJ3AhwrkuE",
  "key6": "4ZE9Gnfn72ri5KxoiS8d8DXSTkKKkUC6d8eMVDbBQaM256QunBcvwPK2eJRnAaN93JLYQc88LhXtzbb75km3WFQf",
  "key7": "gRucd4ceQdB7DCgEmVJqR8FADR47VgGUXxPCmgaoYt98FTCDZfBaBVPu36c9mE7WAi9WbZiACsQVjC9HvR4mwdV",
  "key8": "2Fn9JUjJfDxEJJsyY8YNHgxDSkb7nU8xdcrxuJ6hA6tXqtGJCG4rQfPtVGYuaHAjktnwJ11kB1GNPjogFz6dg63U",
  "key9": "3e83h9SXoobN8ybT3VuDkL825XJmSBREv1WTGHtu47v2SZzTsYkLBadyKDiwtLAGHKpMgdpiD14SvRTzFsoRU6pw",
  "key10": "36BfwCrJBr5iBfAwqpEaq9oGsirxB3KBKMwNgQw3CJ6LgZmtjxmeekL6uqriHwh35EkahcPGJKEKyFAtUbYh14E8",
  "key11": "2VZ2APSFmovoCjsCn3MuzvcJDyTEoRDSx1J5uDggG5wLssNpdoRrxY6oATpMprDsdiet1CDPhZMDpuycQSMvrGqT",
  "key12": "k295uXu8WZzDyYuHBwpooxyy4HhNpyzdWaraUcRubwYsqNozLQohpKA7agknsb8BgJpvgbbaeBYDV3xmhNNv31H",
  "key13": "2c1ZHMKrJ3rR7gLCHvybNS7o5thEArVF9P2GgT1SXDi8pSoTxELyY3X6t5kPiapRYDbstPMi37iH2PgxB2M9RoF1",
  "key14": "QSQVGZjWwynJDs8zHS5gebz8XZipooUA7bTP8yGqtpvSLeUDmRvhAiJpaccNmieXHRbGRnGUzveEmDGvy2kHMrr",
  "key15": "559Je43FGMXJBLwSqHXxytBRKCLZu2BgXRCM1pHwj7XqhX7ePUq8Uqhn5B9NFQMgkBLd4bHnW8Kry5Nxio6YaTDF",
  "key16": "4ZvCKBrFQDEqGtJ6mWwJ3iEk6vKD8dBCDMA6uk2xyc4s1B34BZ7wStrZ6zJvMBosN1gUg4Vxye7KYinXRn3sH1Z3",
  "key17": "37dJUkQoS5xCjtvNqrfVStEQUYCZf64UyAXXWsqgUHuUMctuegKSSPkh2aM9gvod5NW1sSjLR8aW5FThtxrFFS5G",
  "key18": "2yUXxmbSezYPht2qX2TV4x6Eybs9qwauTwSXRbjf9K3C2G2Kk7QHr2zKugVXqQyvfWV6Jad3ZR2JEioprNWHDUrg",
  "key19": "2LDBXuAVuy812XUwsH8iaoq9SgFeQ6HiApNgBU58P4tuMYSEsNG2oRaEeJ8bp1NaXmiKUWi1UziqBqxqeLMaHpVG",
  "key20": "2yCCuzaDpyaJfKXf3bMQpoUcLtBbuwGfjjDGE8JMYsBDKYkXF3z8yRhfpPyrtTG1KgVrvwiwqEygxWjjFLbNqZEG",
  "key21": "2jK48FpG9jW3tVqG2goS3W94fRoYosRZ2HCRNhmVrFtH7hjvVLxdY3B57p5BQRQqkuuRhFeyt187qpc4pauzTFoE",
  "key22": "3BDP7y91TfWwQtcSDMrBcUvV4G15ZZnqJ9yHfN7oe25fVJWBja2wKTK1pyiYs6dRHcixZkaiwxsL6hvnkg1MjL3M",
  "key23": "29HJaokwQBdf1yoPHXAnET2nH5cXwqyvfgjKEUTmi51gjNX6gWYvQ5MtairQG5Wpu66EigmsY5mFUcwqbrNiQ2PW",
  "key24": "5MFLwsWoz5MfAU35t8XzXNEoC6VRsBPM559fRHRpZ4no8zukgheeGTz22brR6WvgWuAYqdqBNqi2naqV5BULR7BV",
  "key25": "huZssZb9BXz6WVjfgqBAH63NjJ7pwhAvf15L1C1SdLAXLvy7NER4yVzzxd5aGtB5Ysa5K7AgEugsKT6T6Li5WrC",
  "key26": "4mnmnr4T21mvJBpSsa5nnakhP6fWBfh8Kf2a4Etj23oLPXfjzCv6BbJu34sQruZFu8TNaYfRuGHH7EtFxveuFAtq",
  "key27": "4m1y3D4j6Vqyy2j8Y3BDSa9w1zWiH9mzyqU8CDDrrvKWzDFMsy7h4m6oJrQuMqEjtESaKe7Xvh2RKokRQ9WocxaY",
  "key28": "5pximihxfswZ9i1ZnLUSKBFKtvTMd8TMdjXucJxQsYR4JJsLRTgcG7eryqrxYbXFtUm5byfXwhS66TNfaQoJCcAC",
  "key29": "3hDaKv5eCwNsdMeKqPGQeGSpLhaVUommCQrTRruTZRW2z87jNAMwJmkWW6d5b7JQasJSCN82nhY9dqv6hCTUaXDb",
  "key30": "2VdHNxEj93ANbECm17P9qs3CrQbbr14HEuH1fq1kU52dALvsE4SrH897JcmWBVYn3SKt2FA9PtyqUzSyCcbpcaMc",
  "key31": "5D1xvEeaedAaD9qUFcieoNXytdzgtdoTap6wCGwPP78uUMTZxxrzXUyDJ4eEfKrmuvB1StxqdAYz151JVLcu6Zth",
  "key32": "EEMmbGyQmg4Fm9V1Eku67aNzSgJSnL47fwD8eW5VRfKH4QwCVyLk4U6A8Pqtm5K7FPTvwmSCwNmkVQtpKK3kUY1",
  "key33": "3AMeb1RnJeorwgdT1k5aPAgxQ8gPZxeMKsC6kQSPMbFLDmtEUHzQrf9bUsSGndsanZMsw9w8KEsgTi9Jfh7f7NAN",
  "key34": "2wZnbzgQtWv1ceY5GeQV7AEUZySxwbWvaoNAR8HyjvQWKjGFFnpwpMN59N7qDX3AuRPvE6YbzEjQERKaUm8BUgNF",
  "key35": "Cx7UAAwpJyHGiobvVg1tSFBJsfUmR5sZsKHbUqrq6jQC9jjBR2vPqafsbzpRqLLzm7LFt8b2fra982sYBudZzoU",
  "key36": "2FWz9Up5w2RG6uCAfkAm6vwbNERCWUFkjw9X7YhzsN9QUEDTHmfe8wRYNLmxuUmVP7uDL7tzDDbcfu4J3SHvYhVq",
  "key37": "54yjZbNdAhfQ4fisapKS1GVN9qVvGhegVfPBVff2DF7DXZBAQ3wzTTCunTK1rJSYex2e2T82zGSGr5STZ3RcYArD"
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
