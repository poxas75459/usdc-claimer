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
    "5zw36CYNMn4yVb8Lw9LmPrm53WVS1ufxrpSeqNSZ36qZDowzj8W6311YWh1z8dyGyvuQYWTD4eyDt6THd4rGsNkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55xvRfUM2L518EvAyyRJLbC3KcVet5uho215yeC6DBj4qFcYRfWZc8SqFRcivX67N9xMfg9degvExkBBtvJWjtzB",
  "key1": "51qCWFy1seyREvnRMHQ7DZ6xV46dGthqJTPeHUtWnNcr6Psm6YSBJP6v6PgGv2rsp9vuM6KcZPgDXeSMkPXXkUo6",
  "key2": "4tYCroGv3myZpsCeBqTbLkWZuLWrRybeBatVoT7Z5hSa3kxC3dsn13moy7VpWEHSD7Y8eAEG7fqVZVECwM4tNXPJ",
  "key3": "2CTTBMogLAcZRmv6TX1xbRyiqTxQ5wPAi4bXrnMkvSTyeDJPqXhbD7aSu36cMCLaemgTY5qwp1udPyJUAZizf6tT",
  "key4": "EYxdLrWxDvRfXYb95pEREKuCFoK2gq6dLku1hEVxBHPf4JBs7kM2zF1kCfjrQBPt76zgoVVF5tfsRTt5HFnrnn6",
  "key5": "5miaR8tM64Z17jav5TG5MfHXpzupdSYdf6tFo2tH8kvQvntKCHTZgL9MUoc4od2HoXGSEFmVvBFp9ynGWk4BLk2z",
  "key6": "3fadBhLZ8MVmLmE2qumPQZq273oSjoZ3evBhep3KXv1JoaqeuzTpmQL4zQSvAwGC6cwu5SJtPVYM4csPACHgDTdp",
  "key7": "s5aADe6WkrhWReuvBkUMDxLfsVizwvL2Y9CdiXDZmiRogPiS7wZsxJYB5X4x8eQuxbUYFWouVjyK5uEYJaCqneA",
  "key8": "ADmBVeXa2kon5mBRFzwmdgzaMeG1TuNyhEzDdWEkSzRcyBcMUHZis1bh8b1xsfnsv5rS56z1KH32xGaxgxTFMTy",
  "key9": "3Fpun2AQP8raVXhccE3NfGXDE5hqWR35d7ETgjXerhs82HXaAHwaYfmoZPvHbx92cRHYqat3kbvqp6zyZTeind6K",
  "key10": "S7iY7Nj3dvVZUgbxRPgdxp4WgKhdgYENdRbFCZ8Pnwax8ifpxtcXosGA423BAp686cjJUuuegf86gQYraWi6JKv",
  "key11": "Mhg3QonzRmTTrGLSQxvQmKjkZjUFXn5cQRGLWEyqbd3wimbLpcdTK8wmrVgANevEFsgSJEaD6yVZYTj1CYqG5rt",
  "key12": "DP4FRQYdqejZHZ5zU7ZXw1HP3FJRpDwgjSeqfjKV6zXbsSC8whqaneVjeRZSBU6VLefBShLGYcjqNA6Ww5eQDZN",
  "key13": "4XE9vSmf2m3z5hHQQb7RFTAsLMprmS4KYnWZXq1JFGYSxnXB482zZxQ1DkntThgWNBWUwy5JXFKVLAY88u1egTpg",
  "key14": "3Wd8QzuxjSn13N5hb9N5Rgh2y2fWMQRgNRMZqToQSTrizaY38ehroXEjWLmcdJYuLYYSt41o3pKcD1gH3Ysr4TRr",
  "key15": "66UEYWVuZdKb6qeNsyZG8bon6xj8pA91paYoJ3sikEDRU1As59kcQM6dKja79aTsvFugCyAkNoRt1KcgTim1Tno4",
  "key16": "CZU5SNoFJpLNiNqpS9U914s3BZ7CMNbsWwwR82D5XCon5KYRMH9ahU4UBboBuqQ1oiesAfMsvwxGeRqbw8sHBBK",
  "key17": "2ydc1GRhhCNMcqfYzE3Li2NiPXT4kkpZjmYyh7WsWSxT4eRVWgn7xpXu6e4vtrBQwCphdAoBZCksw6DJJ3aTuQ8Y",
  "key18": "2aHhQcwuWqP6o85izBNt1KYbJigAH9vh34T6YAdjEP1K9wWs9p8HUg18caLRc6PTjdZrrRmFzCjtQEWcsMMZfcc4",
  "key19": "2sHqb8CtDx8nxxGhBkQzDrtjVoUf75YyoCMCkA1YESeWPuU1xVK4SbcCKtZVEb16dR9J1xwiywyQrNmVE4pYjGNB",
  "key20": "2Ky17kkbbytBRVkd6EFdjNQp5cWCNUrEWrFiqVp3ecE85aBRfbHkDeTjdYFoULFN8bDZcGpPoypNiG514nUPC4Jo",
  "key21": "4v8YdF1N2hzAF7MKzcgvUCHW2SxRWpupCjoxtkSfcjKNB95fc7kPN8EKJM6UiinLtj4tNLnWRryMYeqPN1ieFbie",
  "key22": "4eXEwiUkwYg5jKg4kCijQFktFAzdSEiFPTvVjgGMxYte6XGtYcsy7dvNfmzf6ZsgP5HXLGguvN13BhpNJhrYoZQt",
  "key23": "3SvexEdE8143J4jPwLScNxMygKJAAhfwqigH6qwDQ5WAbuyd8sLiM6f3ytg8HhJcPNfnXSVeEDL1eyicnr5VfMz",
  "key24": "3tLr4pjLuzzt5g9SPCVoxA2drF3JkY95Yp1CvL9d4Jwjm5bCbxrXF3prw8q9DCsXPDMjJs4osBjemiBHpJf8v4DG",
  "key25": "4XTP5y63ikKRLNPUN3tLeWSwZ9qT5mK1md7P3ntVAiDV5DoQdwnWKte18B7onsRFKhP54vCNLzbEoUr6Vi1FYyiG",
  "key26": "5RDfLDedvHCyLVrTiaVbA7kLX7PbSUBTCFENGpWwqG12UdNiXurxL9CBuK1UuUvDgQhmXFBsUU4FKZEkvxFdDbub",
  "key27": "5KogpdW6k6Kt5mJ7tuYyMR8YZmBPgKznRxHTH27xUhZqDSyaAEKV7tQCZwX8hXgrpDLs52xPqmvmsZjgBed5oXZZ",
  "key28": "aQ1tMGwVNw2rQUf2ETPCv3yF7YFjDTARQeb1adJhnXwN3M5YeDo55Hxvt8TaT1FxFmyhm9seNShzXMAvY3te5Bk"
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
