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
    "3GiNKW4L9LaY5m7cBo2n6uu21fDru6NhXcUNjwNqQUApmpx3n3mQL3vWjuDyhPADxjRhDcKRAPY6pyTbqqnxixLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TBt5WZjP8t343zjDeRJ6mbcSrUfFBsb61v4noXKs9bjo5q1ccyDgjd9p7UVxpV7kuTXFKjHqrz3TqM9ky1EXNen",
  "key1": "3Wspsn3uQd5vWwrio2NYe5Xhxxas373MMXkPvexHTxyu5w6dCpjD7cxrfYLgTgD7r8A5nJmgNNZrWt2MwVSxEAYP",
  "key2": "N3XLf8mkAJyKf1uRDvqBtNKjpG2TmxnaVWRefBqxptkWhUVAyuZ7DCuow2KswpVQqEBXmN7EFrKjNPq6CgHZYg7",
  "key3": "5SdrwWCdBvKrt7hVNYUTBQXTqKyuBdSx5ZdopSSjBK3SXsm9pze46BjBURkA1T1hnatenUmExKiXQoQ9yN3UN1VH",
  "key4": "355gmgaP15JyMP6DWVJB21WE4R5rWaQC3V7x1FtfsM285QPmUKYEk5Dx1iPTMNe8HLePhBdtG957gadKy7PShYXD",
  "key5": "3RXhP4Myz5tph6R6NALrnJgiWmT3DKjzjNkYD5tVLQYXkjjRYgAH14xSW621QASjZGfxZmzFFPoaUcQb7e81jn1f",
  "key6": "2SsAfKzb5cWrvbYgPePGoHmLPD5VHeUaie2Ne9AESU8FEGYPJcmhkxhVnjsenvPde1Jti6AMn4rBwgZp7gUQoKSa",
  "key7": "qVA77m8XH1U1f5EJZfW2vwYJrTTgfCh8597LFuH3RtzCjiR28mfmRWtHikWn6tr32G5kmDET6eWVx1m83SHvYpD",
  "key8": "3vBptbrArFtjfK8BezcFuLGDD5XxwRwuwdpgoJGMhAatqL3MsvT6rPZN8bRUyhi7gifnYamfrZpw4FxAbnTarHE9",
  "key9": "5JRkyyt535wv1SwaNWNMyoyv3tHhCXUh9frurxyb7md5PG8brGiqRXzMhMXwjVc1waFFzHsaADNSgwZu7aZ8Gr9U",
  "key10": "2NhjjoBaHuruJAUKTPqyaycCVr1gu7UUgNH6VACrDHf7kLhguDyQzFb2ydZjbmHFirpEvixUecSaYprZcHCWvatS",
  "key11": "5EwGVDG2EkXRAWbbeQvQW5rFFCkSKN5The9HZLPTPkhwtJxNUyJ5iDM2T4JN1k1z7u2VNJfawTs6D53aX23pgRZi",
  "key12": "XsfJT37R68ZrkZnkPqqbaFPQxAtfVjRb3UN9RzA8BUDxgDaRPRN4fTAvJfCef67LJy1j8tfoT4UufMnm8vkcxaX",
  "key13": "48aP8uEufE8EjEhCEPWo87eRxQVuKV3mRPSeYSjWagVDLaKejxXUuFrTY2pfSKoDAEAw1xSd1x3vZv3yoXUq545s",
  "key14": "3zqe48CXVeCzWz6kCWyLsUjEoZUatetfopPEBStxasxvktiSVTVrNZGzMxdrJS3vCcfqZMwLpg8ivKqhAMcX86zs",
  "key15": "3R11RdUh2Xre9FzBFuAZ25zw2SowZzy45Pc3yDYDzorEsQZKsjBvBAPEJkUyvg1H66j7G5ynvMsPqfUpFxNK4dVs",
  "key16": "Qf32zGxxX8d55Gh2SMnHwvvpcRyzgkcejzoyUzVAKp3b1x8kQzQFpehACNWNN6xtu5h8CZwBrtyw3wejje1hefg",
  "key17": "4A2j7JwuJnBUwomZFYs8T8uF1VVDc7F2bWTaQvWtZefu5PL1mU869tq8BPmmcC7t1uRrJ74n5txVRDM1LhDNkFqk",
  "key18": "2Fvk6e4Wams6d7orDGsvJEZHY7hjf6DsmHSQfe6Ta5MseVrjWHabjRVHQM1yreDEcv6ZYhGFCcKtB6epj3shXCNH",
  "key19": "8VNFdkvnnG9rRxKMLxnqaFoqK51xYUmFQWha5JcrxrViahhzDiqJUstVbojEpuyWiXC6rsFk8Tr4aihjQUuuXJw",
  "key20": "2mDN9fP9F3kiDqQt7JxVyierqUKxfv7D9dKGBTKKbxHjEpzDMQvJdoGKAdS5WQEtfEeEwX45KcgJPfiRn1Fg54Z5",
  "key21": "53jexWqF1ZaBJLo7KDnxWskjMVyUfXAEagSPbq5J9ME5KHHqtU1FcsJZfjQSFJyBWPbVw7QeynbgLAYG79KvHUPD",
  "key22": "49PYWPSk34Touf5ni2TdywkxCCDBWavg14CxjLmMVxKUvxjVKtyRBekGHJFNcZNfgScTDVDyD3czj8YfSuX64U6v",
  "key23": "2EPFbzjaasomaqRDDViENERSbXe9tokgbJxcTYYc5LimikwM48wJpfNeBtN5hbwrdMjtptAiavMBBNMUquoV5i3q",
  "key24": "4QgAtRrLhCvDnbuk3641aFz3dxtu4J7HPUarvftNPgZu3WNbfQw9jwYX5wZXapNCvKGZQAz7pVW5TrBJjsdJXxvC",
  "key25": "w1is773SPstJrkvvK59eQ8xGj3pHQcUX3oTWpxaoAto5jWnJMaThJGQ2c9XHbeP9KnSbMdP6SzYMyHzuaPYMtcS",
  "key26": "4E7qWPbfHhrBmKohrQtKkc8apwtPwisz8mEFXZ6MBDtg9RvJNVEzUqt6Uz6n9S2HZPSqaWcy6YsmzwD5iY783RHL",
  "key27": "3qHHzT3ePp3hZHQcr81RdHPJnHbJSnpySD2KyDNrGeKnJoSk5MY6MvUdngr9pLgqmQu88sQC56bTMxG9fhNX24Qo",
  "key28": "2mh9eRC4Z9y9BE7CTwhCvxzS9XsApvZxNJs6hkNb6RAsVSFzHvZ24zRYraBJUPC6rRPsxWVN852thpfRfkuFoYJY",
  "key29": "3e5e7u26XUXoeoxjbAn97ByTxHQMM7H39TSM5w8i3ASujE2kz4NBxCpQfA8Ef628DjsaKthSPESoHUtXwWaeveSn",
  "key30": "2Ds77h3EaMEhmbzYhBTq867Y3w8QwU919C1q2FXXKhTbJ4H8vA5nY51Ek9BsNeG1Jr31VGbUV4gArsncD8p4JHUb",
  "key31": "25rK5hz4MeamPUw1kENWV3YMTrxUfh1XVFxeBta49eoK7bv9RbAmbrWYiRrqw7MYf4QXsVH11p9ms6niMiYNF762",
  "key32": "3j7qQyXad3B2biwzdCJjLdqvuCod9XfqBW5i1CsmeYH8pTS9PFWhnMFybH9WLeaVJCqSzeajUNREkfNttDUoDMN",
  "key33": "2JgqhVvHuc8at81qPe9f4hRecPN6Dp6xpktovsXuvRRfXX7MmFSLdccGLcevzRTsg2MB8kwqbBMGtWX7GayEpKLT"
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
