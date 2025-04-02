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
    "2augiWU9dgjr6VCmNrKxTGsHLT9fycxFUM9rHNTpe3eiY876kpkfWHiPQX8K1kAVhyd7t9rcDrPUvAhr65ygyUbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E64mpeKp3uhcShV2rcbi7QG7bfLCiGLo1jY6E4jWRdHyQj4FA4wKiphzsYWxgv4mjpjU9nbjhBp75huCsqzSMSA",
  "key1": "2fxhERRCyeQgDrWhYiCSc9Efz1ABepZVC5TAffBiJJSzoGLD6RKZ5cKMJj3jQNXUVyYFafbkBUyXqKzC5PvVCtxq",
  "key2": "3uL5f1xJjdDKevCqw6vTFxyLQ5fJPydeRH9EmdDyrS6HPgJHWNPGTcvvBG948BuFiqAn6Bv5rCi5RWXgwN1S2VED",
  "key3": "5n8ESsEiG9Si1gMprRXS1ZhE4j7QdrUWwMyS6NoGBYLdi15RNXWG6KY8NThqhKERYrNar8e93qsn35gYjC3fAk82",
  "key4": "5i5P4ADDQTVBhArabBkaXBvu99wEg5MpKc2XpM6MtAcxRxeqWGKWnNFA8uDoGRrGSjqzyTFjk3Gq4RNJXo7smqax",
  "key5": "3oQSrtHXHCetVC5jHsJYW5PMQx9iRDZi5dhEntww9EWGNjWp92UopM4k2cUzHwKRK3PfRCPAwSCSXTy3zUensGXE",
  "key6": "2DvQVKC8ByQRxFfk5GJSxFgZE5LX5Uejm8A8DHQzKsEpruFHkZA93UWeNsRqXmTuAN3dNzCSwsXUWSw3F14DGyjA",
  "key7": "5Abme5a6j4xkhRgguTCeYnK8Sxs7QQn7hTRXVe1BMb71HS6xbqr6dKFdVNUjSD7vjRcKXZtoMJqWmFs1k6rV6VoH",
  "key8": "5JpmVW1Qoop1qTtQiwzyNrZ1pM4ZYAcQ9GCbjSnG9EDNCmx3stWubwmTFwkXBMFkqKY33JwQ8TuLjwk6pGV7ciru",
  "key9": "5WJ4JAfbcsV7g1ha4bXonUHqL6GLbG1NQTgePFcVo6gmeNnjnXFjSeg1RJhxFyVd9BE13i1FEeQzjGFEfNwN5K8z",
  "key10": "4QtLNveGAwTWuDCkKZpCXkhgVE9Hk8225XyLqQXPc1Lre7ta6jwUfvD4A6pCBDH9VgHFaoXwgZz4tdboX2kXCzKi",
  "key11": "5sRi7irre559jyTpGvWtwfScnCy1pZquNpEDhchk9GAZRriLnjrY53kNmjRqnGv546dzr1AceaLXpjZJQN8MzLR6",
  "key12": "2WZy9D5geJFM9jJUHFzmJcPbrn6PBaPsBt4CJ4AJsHmWT4TC5qriU9oNWyxHqQmHVoh973362YZRJizfGDeQ5j9F",
  "key13": "4YENXKvwESQB5Mz7ycjxi3qQkFxYQoEyP7LL5c2Z1Hojt21yNJyrzVKiGfiF9PMV5g6cbX9uvmAbRv1bToHqPAkz",
  "key14": "4vGj2i1BhNq5HeBUiYGsbSFcsHHR1D1pqF4M224EDL7dr8YaNDNNTMyjUA4vDpK8yTShQX1ACKY12uTZGLZQ5E4e",
  "key15": "YFBVx6Nd4ogT8qpEB5M9JCkokuEmsp6y7TGYdRrC635hN59jbu4D1Cm3DBcVeCkeSf8TjpesKGdTTvFJsky2SCT",
  "key16": "4XDTtGhQeUpWLMUGahXPGgmNfPgSCqo5FG4L6vMfon2taJTssfpGhzw8Y6HTgpJJXDpbVys2jbTSkaySsrjD2kRa",
  "key17": "5Cna6tBb7cgNBe92ZpGmNQUXoShzkweL7mdRwobpMvRMiQ5BkqMiko2ne3Ry1idnjSxekYZitTfpxRY7pBmMGZ1d",
  "key18": "3dDuAWgSBoLSLyQJN2gdFC3oV2aSjZSBGQsP5MDd2wenvxvTxHSM2k4rmnoHmhLWJM4TKzywFhW8RFUu4sUQcirr",
  "key19": "5ww287mVmbYnjk2h9GeAWD6SzBhJxA1jbZYjPZfgta7Hg4qWJYHiY8KvRbJseypEGvp7bQY4zaAZPgbJ7TWEDk11",
  "key20": "2ridMXbk5kSjN5DfH2AvU7hGvsewMhg2BPMEu8xQmvxUoi22mU2e2woXzVoiR7M3RuQ2PGaXhqQhgPapVdXk4EFs",
  "key21": "3RNeQpLZrTmA2SMVJMfEF97g1ZG8QJqe8pSxtXceXzh7wxpyMrwyAXewwF8yB1Vjt4Zu3Qm8UjeaSBYxr4bNwkQD",
  "key22": "4z3CJ75g1NA9viZrNdK8PjVtC2in1R9tojZfBXUGvTp7atCv7UX1XnNZGyv6pywyV4d46YZQW5MXVXZkmM8VwoAH",
  "key23": "4BwR6jdwqEf6EjWxmmjxatd1zngbaUpVzg1zLdqv7bVowJbtvF1neJzPZiLBGy4955yLuYPgbJHRZpgyf12qfACS",
  "key24": "3tibFyJ5NMJZBH88bhezfiKsHiLKNBYbB1WgjjkFuNdMjo6eJNEsBfguw7fTqdJKjXhSfyu6eS4oX4VknrSwakfU",
  "key25": "o5Xs4JiB4tBGTQnBjGhsbVxfQeS3thmVn2RmceYXDoRKoQicps6HyFaABMsmVG1vK9zouUR8nD6QK6qY3sfHuAf",
  "key26": "5erY2vGCPtkZkoy2HjzEWFB52mvVr5svS95V2tNDCN73Rr18viStf1Vjx2hudvyEZauN69iJmHE4s3v7FqKvYARJ",
  "key27": "43pcuQWPuxF8q24eYKwn6EmJp8TUx2AT62DyWLc9EQcdT7tgsiNtWij2tZ3417dMSDQx85SUC8XFkTPzL7Qfb16z",
  "key28": "3TDYhzxJPLFAmnVrrNMy5Ni7spUwHuoYgdhdaxN5t4VivK1PjUikdLLD2B4ceBQAdA7sGtgQT6hbXCzeQ4gYhjkj",
  "key29": "3uiDpb525zJ2Xpra5VKjsq2KABZYXsSEQMMEr8DZZb4rAPvGkmethimqgGCur7KxmcZz7WYghJmL6JNVRLNAMyid",
  "key30": "v9UpqbitdXhuhshaAXsFv8fYVwARtiLZh9KKTT1qhGvMMUhmvnQyaho7JiQRY5t6KCk2oETs3WRrukwupag7eLZ",
  "key31": "3DEEkLHYH8ZsQBCSSC6kfiTHwY1uRiZWnvNafiAfxaJtvjX234XLZsY7nLEycZpJJbQpUbRQBinZCddM7UMEit5G",
  "key32": "3sS9i8LGUsvyPTSf7V1XmN79ojuih6Sc5yp7Uxykiu1tsFsQbpmj5cgewE23qX9fhsx2ghA7TwPonctF3GuHECVp",
  "key33": "i68vgrmiGaVMYUY5jJ8gmFpKSTKVnHNwut2SGr38LwRJXw2TWPSRFjBsb1SAkm8mUSCNWS62tE95LNEW865NKNW",
  "key34": "8N3qxh5h2WTWPEFDMJwosQhfKYYXetZg3jspjiKmKcexnnhhdka5PfVQ1vV9aqhU7Q8aqq9ubZqttWkdmz4VMNy",
  "key35": "63G8kQ9nJDZe3z3822jiAn4SmGS5dfRu6YiSG9TENiy7KJVQ7V9ChMLLqzxvGQ99VrFECT7HnNaJuahvpcbRcEB3"
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
