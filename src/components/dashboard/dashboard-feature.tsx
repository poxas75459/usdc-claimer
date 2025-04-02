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
    "4kShmvErgAKGWzxVcGYGCeNeqx41qtZheK15HbnWFkfHqWiH2hfaS2DoMXQMeZ8VTXrr6uNsEP7fxA2nQvtyyno2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ASxcZv3QpSKtwfaNdbCEQyoFYMzRYqKYokgiWYDvqd1HfPnEDTUrznotDbL8WJk5S5Pu27eNhG1SNRp1NAKfxT",
  "key1": "51XisBoFHJnjSg9ce4JyrSb9e8wCZX7rzzdom9qM3Av3KVBxxJcboZjeXBrCcGLPXg3rfnzPqABWgPYo5ehYaXm5",
  "key2": "zbgTPU3TBAwQ7DtHQxYwBRBjgzcLXDiDkSveZ5SzNNCKc1i1JdcSC1ngs8g9CyrY6vXmYteNBFpbQbYKwypMiru",
  "key3": "3udYwPdHSjqAxG7gQo7TJsn5BCF33HUzktuTMGqpzQJfbHY1bdj3oWRu6bxDr5CWNGgAtL8wUpK6hQ1H9pHjoSiJ",
  "key4": "cMJtrSKM7kL5CJVYrWavm9nTSWd9dzj9HJfDSxD5mESsTTkscARJSzeECnidwtrxyUrcL7cqpKBhNBi33yfKSBN",
  "key5": "4iczzvyUQMiZv1MmrtnFtsKrkQzKdt4kgPxgAkzevVyzLWd9EYqxasAWg7smuWRatTrKkxRdwMh6pKTSZCMnfoT9",
  "key6": "4xR6LYJjnvfZFRrbBZWEPYudtZ3sc2RfznefDPQenDaL9rQmYWrNbRJYPatfDewZ8q8py4dshgCWPpU7ErgfPpnJ",
  "key7": "4hDHX9wcFYZ4RMxkPrTwXxiRTTLLEMGbeAfRWyYmfjbDehWgRMDyBUc7DP4DwCH8pJRtYmyrpBE6ND4uZsfSvBuG",
  "key8": "5CZ8MQZarx6epHsQQPnsyL4MJTvy3hFmWUxvLARzBBEVGCWsoYs8FVo8UwwLuvtQqgRfQ86pMoKqyUY3da4WypiF",
  "key9": "4H8FtbnXax2623tvS7XqmcCkok5fnym5J9DtsxpyxBUwUC9CkQS47KU7TcrkwSKyoBz563KKVFtBuzersh8dWrkL",
  "key10": "5KJsT1nFF47H9gv9iaJJbm4JiXJTuMwMAVVfaV4283CxTp3hHrjtoDMnLxRaabCJjpNVfqQuRghcn9Yc9rkfzHkd",
  "key11": "2Txbc1t14MAZpocLWQdm4dBvcBgFneCyWEhHNPHPDsVmx2PzEcDhQ4xZ8GaUCTt9HkNJFtgCLQuqL3AqHDTtLc4D",
  "key12": "5HCUYTvqHnA32LUkHgz6CmqipKXZhVejGJ3xfphbG8W3gqD6g6MDG9GDBjj7vyZDveWgx6r5GqReegisERiZHUqg",
  "key13": "3yqcdKzw6ntUTtJX1YAZUQUTWreAcGqbNmYgDvGySzJqZ3H2Zg5F5NJA7un1XwzNDSfEa8XbBdUjvsuoDsAyeHZu",
  "key14": "2X2B91C4Ev8xZ1eW9HfEmN6WqUoVHmin3qD72vHxBkXCadcmUa2Kk6Ya7gYGSJ26oE8nRj8kHVHPUXL4vY8vtT4v",
  "key15": "4LvHi3mncVtEh3S1LUrHHtsMF3xtEvPYEFah6pgFyQtZ7hGsxkPDbdxaYwUQuEMuV1Zd6LJZpky5doAiWDX7LjMN",
  "key16": "37xAeQkQtVuMQrBwk4PatbUrmavKSD2oMETbcFinkoSp1VJELn4e7MYUU6HHo74PSB9n1QUSCZ2y1LjYrnJfCV9t",
  "key17": "66tmaUKBTCYBLrLA3qK7GMXQKCotKPesvusjRGXfMHfY9r2iJ5AbaueNwh5un1Js5x8cB4dr5FKwcmpZxAbYfzTc",
  "key18": "2vawic8Diei5TgMzNf96TrKgyVfJv9gFgwsWka2FjpNacrRjo188jeM6kvsKxE12KU3bbx1AMo3pUxST9nQA6SBw",
  "key19": "3c1SwpDsutiFWV8bXP2n5kAAqbnekNHuW7CJ7ydXNbFnwkrhjBcFgv8hw6UbR9LtZ5NRJ8nkDUVQkYgDM9FHyGQc",
  "key20": "5F5kz5oT2w1r5bDgxDepbzgRad4mHMTBEk5HAmf4xBVCRDSR47ZSopJMVdnJY5TumZC54svsKFLv6XFRazmFzBk6",
  "key21": "59Rag3NJQ6JDtj2XN8ZcEUXM4uUYesU5qGHMp3zusuNG9xq38iwahRqZHrbj3KAr2PkJyVqU6VZ7Y7LStdG6Uwu7",
  "key22": "9hqJweasDSYeswgvsrxkmhYkS6tAVXCDUfGbS5EumE8vYCdX7KtaGwYcqvH7prcAfnMiJW1c1KN3G8kUVRKqzbC",
  "key23": "5Hn5dRrSjrktYu943MVbQcbpkAj2qFR9CKtpxVD112s5SGL1pArpa2pTyeVFKCRD55JrkKU3funBwVzQHLCTg2n3",
  "key24": "3roycPbHFxjsSrCn3nhTjwy9Bm6QffNKnytrAAtNwFouQ33QLsGvVboV9KDJwRXC7vcR5kokB7GoC681G4F7wPzu",
  "key25": "2nHnZuVtNpadmb6da5oKL385ywqAMkjrbbNfvoFEWzBCetJSRtuiqmL1vDguaSkF2BdggbyhgodJgpe7yMo2rq4Q",
  "key26": "5b2PGQme1ZjNqYjB2ggKcsjjqks7qPiF92W2CoDEbfjGNBsRsSJHJFY9aWzmkxV1vDCuizA6raCna92Vkd3sc4sx",
  "key27": "2r8PxcUZ8Bh4aXmn9ak13y4AZUBfV3FbsiXPAqaYhVFK4tFG3uY7muLfL1fHvrdK4Bk5aJuD4WSNoLUeJMq32ua1",
  "key28": "3ajFftMBSsa1oz5xm2Zidrqb12E9V5WvJBPcvxNGbrdKMEfT9d3ETvXnF8U5EPFoseXVi5jy5WzZf1Ug1vqHBjHE",
  "key29": "2GYy5aT8QUfPA8gbtpmbfcZPhtRrwirrVwwj56ckvwy1NrW8bQSTjHZr4zfaL2yhnMNf4vLkamgY1SJcVws3opmw",
  "key30": "w3Nvqqpc3qCt3XUvz8p7uVJSrhWuy7ykKR3RzPQF4taVWGHpCjQpu1bFPrXQqfxE44yHPNnwLB21qCw33jwpgYx",
  "key31": "b927RuvDr3QT1CoyvkkAQnXBT1y7YWMPob4ZBi5NMGUVK8V6eZK6LrKeHbvQ7K9Amw5S3ozqgrB27pNjY9ZGYji",
  "key32": "5YQoPg35B9u6xu5hB1k4qNYV36GYURy1eiRPqhyv6e955rrimFYgfQNWq88ahso5cngpSqnraeg3jeaRBDXeYK1R",
  "key33": "5PmqG7qWYiKTN7rrWEo8UjgpZEK32Bb4DZBWm6TpmgmwuJEGQ4RzdJgDrGd2P8qZoNM5MjorSSnitgtrownAsJMK",
  "key34": "mczRfYkefWLT6wTvF8H3Go82HRQwf2WNiS8qUk6V8jXHQPagbgYG16mCEPg28SBuPqDQzkcGFufiNY1shLcJ4et",
  "key35": "3MfddB1frSprK8aZ4hvqQ8Wsec8qu3jozvus1J7PmDkp2BR39rd4i6JtgwTwqtsxxrF1ZsvgVvcXgVYbgVJs3eWu",
  "key36": "U164cE5Q1xxB1kJWsM3Ln9nma3Yg39DuajeQ6Huui8xj1gZUozvNLBVufKC77ktYDsoKg61RRtWurJQu25BwkG1",
  "key37": "Co6smsawCyXsR6TcED3tkNDsWkKzv7tfXDfD4XrupTtLybhP6j1S22HHZsjPtwAPCKe7wq6K2YGA91kuNxnC6R2",
  "key38": "46TQyVLpVGvBwLpJGTvaDtc8pgnLaJUBEbaW68U8xv6nMCQKfnVUyZpjGhDEsjwtBTKPARLLTReWXUCf9f3Nbcbe",
  "key39": "29BggJkxeE1McrF7W2AtKNUZ9MP1VWy8QW3WzGdBz1tvttgj8UxiUZXgPzuGMsbgoXEgGcTt9ojjqEhh2pHFyXix",
  "key40": "WHR5aopn6gQRd2e4D9M9ennLrR1bstg6yhTrR9yMf6LuVnWMzR7roMc673vQtDK67dT37JfNT5YHvVocjohq3GD"
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
