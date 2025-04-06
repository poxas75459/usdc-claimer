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
    "5RH3gHTMUp23aiRe25Tv8eVAhtRivVH4RryKcbLBiPPx6u1ECao8KYhM7uL3MsLxsrMdHjMpRtyVXoyMpKHBUtba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CfMVfCqVsbqWZzYuh44NJbMqUsVYomNc2akaNa5Mh85X4ZVY8EakMjctDMaG8aMqERMugooXSFoG1HLgUi9X6hb",
  "key1": "5TukGaxLju4utk5jZwuY3Ht8QM8qperCPbjPF4dGAkPN6KQitY2c2DJUF4ubezKxq1k7DQqZ93Xm8qnxuYKaRgYC",
  "key2": "5DywVH1jdmrygTCWZwtX44cH47E8Jyq73PfcJXSHpqJPxkffCozKP4BW4JjPe3VzsLf12VvDYfcnrrsoXCpPvyuj",
  "key3": "5KTyxUjrspnesUemkVYQrKb5Wc36mZv7kVej9irbzdNBGinTQHX8uLAYhqCa9Mv7cBFPx8ZB4UceYqMz3RRVwMQc",
  "key4": "2NJSGQi3NujyjtcpnXXHRUTXj6pRAkUYRjb2ikFKJrg7sc1p2F1njuBM8US2MKiyhFMXMaaPJDantURZrXw9gUiF",
  "key5": "2qFGt6eP2yNJEQeJkoMyqLfXSQxvigGph98NvBFq9hH3XMaDMq5JHrNwvvhGgnndf9jxgb8MZe8efCDQf8gBAMuz",
  "key6": "v8bKXULUbjJzekaWkFZwotR9d7eRnNtKKruEQTQKUxbqte751DLfthMjfTbxGKUAuEg2yqmMfKFiNwJyagqidrb",
  "key7": "2qM6pkNCJg5TyqXdwWPYZNBK6RFVicKSAxGEjLvNRKWLqdTfRNf2X2fNJi25ZM9ZvSS5Yppoive87xTM742arGau",
  "key8": "4ChBPFXd74YAHUs3zsG68rFsoPkWETETCp8KMdQNifJnSaSwdD2HBTS6hk2xc9boMjAA3A6GU1UsBzhAfw9QWzvh",
  "key9": "DTypWwEw76GvhQ92pf6sZcAbK4r7MBicF6TZCHacDsvgKzpdaZuhvAkZ1g1hFSFiFAjaA2nJC6kaVL7bycwSXqd",
  "key10": "49ATT52Q6oQJX5NiwAdVoYtt5NyeVwh2z1gZ56RXtNZdq49gDbF4FYdFSdPwHaLawCnWW64pz4QVcvMBKsfQWA6m",
  "key11": "39QzUdcFxpAwpQpSNRKAXMfkBaA78aHjBpdUHSGiH9Ebj42o2qFaHaEHoDmWkL1xBtSezXaBM66nA3DtmXwmkrhK",
  "key12": "KMYGVGVDJxLxqKCMGwSBby6EMGu8cAk3faV1BxLt4HoUh6774ksXnTPC3kEz7sFto73FHj3pLw3nzgPyVPendHR",
  "key13": "27GJPfnSFbvhE3CtjWoXvVQ5WJdp8MB4QrbNyRcLub3VMTW6zAiY92fhXjdsnB8oGP2fxsBHEWbVseERRStkuUFS",
  "key14": "4bdrH6btpJHfznspv4yJ7CjMrAyaiHhgEZ1YzNTRKbpHop63JewvJ8uJaevggQpybRUqDkXR1jTbzJNUF7xXZ5A3",
  "key15": "5cN6wMsB5poso3EhyQ28D5Z6sJn5XXg97gvxBMjtq1vgbAFcNfyHQP3X7qSaik19uMfw887kNjbd577GLZnJD1qU",
  "key16": "brk6vDyTZunrZ3nKmh9K9Cs12iY86sk8DTUUCkZqnNpzyLzh4StT3cG9o6NRBGgK4kcQne9MpJYynfV12JFgt69",
  "key17": "38NHMtZG8h6xRRqwpMH994i75Ccb53PCqz7zthiH3bhKyDiffc4vAfVs6cbZM8YaRSdCKhZcNpBQdnSALr9fb4Ty",
  "key18": "42TqRRhNnewTU4cy5FdUYoXbvBneFhd9yWwEVMy5EhH5i5hE2Fuax87yp7CT9tZisab1G4EXzAgfCv31Bu42F2Fp",
  "key19": "3f8ZL9G1qSAyR2ek8fzuNXHACg3ikUvnMwcAJn1D7KmoYe122XVbvKPrwF5j7XYseLkU9tjyiJ9dfbA6Wku3p6zS",
  "key20": "36XGDqK5HYtcanundKSM6hEvXqnUVgjuDLoVAqc9xHKnqSLe4A9sMdJDb8K5TpbtACggPTzNXjuqkzqLCioZnnmj",
  "key21": "5rtvRBsc6iqebpmmy7wheeH7Q2iaSvqU7L3P78k4bqexEZ8RgnVoc6TcZjLZn1wicUSj4aRn769ag4G1dR31GWiQ",
  "key22": "52y816TBb5NQL2F1SdkCPHT4jHqDot5ttFUk58bzmS5brmVX7fQz9km2FvkURkvhBd3mnxGgFRwN7fybvxZnRDAt",
  "key23": "5id3CH28jZpAHRYspMo9vq2DB1V6pXesK1RsJ8mKpVuGBDuuCUTbDWpwqZdPBZQi1XSYGzwMnFgsksxpUefmg3Lr",
  "key24": "2TQZa7MrAZctxyAf9qqqzKGBFAaK3umQMVv1RptHuCbu9VuFZmWwkqHxU3tisaKhEkHp5oh8oPSEDcnkXikSuv8V",
  "key25": "49XAaAM1WcMKDfBbLqLSg8haqAznVRHzCJxU2zuevj5CFyYKXhHP9NDvH5mL7Z2jQwjcWYvDscL5RtvH7x6VXcoz",
  "key26": "5orgvXzXZqCHLvpCwFxitpTRHihzY9UAy4Gzp2pXHAurga13bhB7v1qYBwxmZSaSLhNDvxfzfZyAvHrtTKDJqcNi",
  "key27": "3ssqjTwruJdV8vcFMYjxab6SMyYZJNSz9RHZ5szSYjb6EsdhyDQ4ZaNpzjNQS7mi8HgeyvtKDdfqLt4r41pXigWr",
  "key28": "2NZt6bvt3q7sW36WV8tLFQx6SXDeLvHhEsE9mRGNNuNw1tyNxvEnfBm8d8PdhQGvrTj5jKFnZ9T4Rvjz1X1z6Rvp",
  "key29": "4UfbqKY8NsjQZKfL5dh66z9yTns1uRysYc83qsuYGbtabPjyf3yKLegm93aNsHt1Q7Kc9YZoUfNHXNXS7r2yAMzz",
  "key30": "352rMC4Yv5q82mqwTx65QabaufNyYVuj9WqqtzqGeWtwzLJiGyJXCfhrPDBUzyYXqT57wbaTKgGRQKrfPjH8PQCw",
  "key31": "2mNLtDKYnLnoqrzUmEsWbKzBneQjgrf7GCDeq6eLpZMX6HTRZeEp2ah6pxAp8UcC78Y58rxHQosvLAkif7D6SyYw",
  "key32": "5AQa9MvBCvRRgSuSdnRQUfe1V6HyYFXB64QtsAeY4J3JvVJkJAqYaGABrBzHBo1bwTybumHLK9pbNh9T8XmtHvi1",
  "key33": "5sJuTVvQvPWfky7sCFsi9fjjBTmXKg1xgUCuA8sdxrzedJebBC45dSRFzwonDu6hRtHdUMWR3NWbmjFPtrikhwu9",
  "key34": "29ZFMk522tGKkprvP9NhVUDpNLXyHH4pUAk5dbbaTibkutt213H4DDtPWyqxujkCgWREFLzAarzNLNUisU9XpVGM",
  "key35": "2YTnVgTYpbHgFNHcLowbUhH3uAZKs8UTgiFNUsfqWM2MCHHjUGN8iaBN3j6SNAqh2QsgGJ9iugBhrYq6PksLsMA7",
  "key36": "3TrvkFwQ36YRZqso65vEAzWZ5neKKdSnnKSvHsXNr1Yye7kZR96E6e3353QuX34Ub4oE8V55aehWMnxySKimdcAs",
  "key37": "5knXERUFextTLsnNgQeVd2zFQTZArSJrgsJFAnm6SnMoksVfNiA9voQJ9ip4KHx8Ye3bRG6YAbiijfsuji9vdhWG",
  "key38": "5jqWCdR2AiPF8NAXybRFHtkoa7uXoDYJVwirfm7pT91TkDfmfCwTy5wQRPRQxVWfTVJucYCAHzxEBAnTmFA2xaa3",
  "key39": "2XTKQeLig7AmvRUB393oGaWNXdWCGCy6aKAJN4qGBjzqwRveocY89tAzWSoKcCwFfVESNF8AHLZPwmxuhSrjGvqf",
  "key40": "2Jk1y18wCs2gE44ZMZo81QDnN179f8sksY2HX1TorPSTZnJtEe3PSfUUDETrSSwfSnb69aDQ95aucMQMz9ETptgY",
  "key41": "yjv5GTLo7Gjwz76aE176SGR7Db3K9u3GQf27XVDGta9hzXL8NushwmP7koekC3USeiZmZzrtNTkGm1nwnijQ7pM",
  "key42": "5ad4DcK2oTnqQ1ZnJLQJZjiTfSEGD28XRAYUZEmhLqYFtbChDJU8QznPtGiwCASdrRQ8gqsLcz4k2DDX8G6GLW4C",
  "key43": "5HvxuCRKjFLYj5iXtZUUCcXoALh9nHgfBpDpgqTZ91CDtfTW7r5httZiNEJP7JAk1vNADmxhc7AMcoqCcBY7P5pP"
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
