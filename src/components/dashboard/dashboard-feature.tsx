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
    "3EWS7E1aUtgcUnN1USEF5yk3MBUT8SdPjrrqBDXpocyVV2VkkyRzJn61Kwtqra9T7gVfVSQoZZP6vbJZVejapPxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4etfFLWMLB3iDRUV77v4yUr24jWmyjLAv2XSGv5dQXt6et9EoEyb4zGP9AyqgdSAiunKQbXCNLKhvZYRwVusNrPg",
  "key1": "67RudGvF5ycugumTWXABbQgWTpgxAaD49iZ6KgKoKNYMfiriEysvUua9k1RvFJEumW4gbVJ4AmR58ehLakAfTYEb",
  "key2": "3fb3U7NejCkGYeuYK4Chg16ct8G7tLemAn7YcLgXvHydqSfohcHa9dy3edyfvWNq7t69w8anwcABWpK3y9KkbBrq",
  "key3": "3fN6YprBKachA6p9S5hLZGq4yM7VKH6uVeNT57e6K4xi565buXRWhVL5KMjwRtLfNwVeG8p6LLf3VrGnYLUV9tjj",
  "key4": "2Q4H36ns6YfEeEB3s9EB6jSgXeyWo9jRrK4wiJYRF7wvRRWeZ5ajkJaZ2eayQ5MrpZcuKLXygHo8L2EfQo3zMCPD",
  "key5": "4fReWwKgRtMnbaSv11KNPHutg4gwsFWgraGBBjYkxK8ASd1kWGBgyi54mCh1Jj2Gu25cXGxXVKK8wGSaXB8sCaup",
  "key6": "4LCqonwxPJpdytvtgSFhA6psZM4Cjgt4J7iZGjAJfK2RvYXLiiHLro2XLik8BfCQxpkALssadQP5tMFBQSKaJ2Kr",
  "key7": "5vFiijgPfrweARHfcYSQV7UNW1DvZ5v89S5fjUoag68n1M9Hqr7jtcT7UqM2UNpQDikBye2EvXJTg8JRNz4dyZD7",
  "key8": "4ZYAeHhrh5iQXwmY9t2GzW1snyEo5eHwzhD6VZ6v7KsgrwQPZyJ6o6kcTsRk8tVTZ7Z4z1Wi5JicTHs9gwVk8Fi7",
  "key9": "fr5v7qsErJznSjjzK2WqA8XPsDN33UW4NkNomtJsFsgbSfv1tz5TWjm7sJz5KcwaP2CCChYw1SDjJvpbV3s2MDS",
  "key10": "57tCnmSx8Ss5ps1TVoXaM62v8zaVWszvPJiyKziETRNi3A39bxoCNehkzrpqQVa3zb1HLKrmAJydVYKPC8J22uMc",
  "key11": "5XEwwTn9tZTF4C5xtdpxKYQF7YbMaoz8XAjG1zmMDQiYQ8kbtYAqzMGgWVB3yz1rcvztYTNk8xE4YQRkwxfN7YYY",
  "key12": "29i8jRsWGo3djs2zLhgozpgQqi1NhMXdnVNat65xncQG6nPyyoSqByyiQowggRM9Mi8Ti4itXDNCPoAXHAyuB6GJ",
  "key13": "4vikCTJBJ7qTcggvsEVAX2QMXiu3JyvtUriU2JsVTNu1ekTjy8k33svUnPniP34axt4zapSMiwhA6EK15ViUXLLX",
  "key14": "58osVwMtZ2nsteNnVLGzB49AUwu6jNJSs2cmy3qCp2NTFJP6kmb7SUjTU79V657TubKernJ8y8gCFnEXTvw7RARv",
  "key15": "4onjWdht2qJcvQk2NsB37TNKPzAQusKNyFevQbAq5YYGvS1ULrC3tF1mm3v86V3u3DFX2KgqjGcAjDrZUrKaeFaK",
  "key16": "wMZipH4HkXUbB6SHZeAbkZgaJKkJCLWitpwz6edScS9EYH5DUPWuXTXjJWkdAaMXWqHwaPC3f9gxETAG5k1t4DL",
  "key17": "4wYWinb8ZHvMDRsLVXpiN3typhhseTqbF4qHnpXFimogCaaBmTNwd8TW2a1RB6qEB3hQ7jXcPNHd7q3ZVuqRn9gK",
  "key18": "3v1Ff8ZJXovrBmc4V6cYTpCPwRnqETTWXRN5ZsBk1w3xLvHZXJDZ3MdqU9bs378DjaA8xBfeG23Ck3rvXiC3Vhmc",
  "key19": "5AUwc2wx1ZX8QQVerYZwGi2TZG945o5447m9Du1Bmy3qYWeosjua7DbmvzoLk8Qg7GEhbcM2vvXzbgScd3uuRBME",
  "key20": "2xXA6q93g8aSGWAX7zHbabZ1HUR63av8fqdyGBQjTppHhcgFq64C2V5R63fw9TS3U5vfw4bUJDKANuyhvm4HKKWB",
  "key21": "4iCHVgKzvJj1e32BsHNVXii8rakpeFyTrD7C85ysVFTMEgVmQ6DFhhUaaCbqTZRyr3S3n4NeTTw2GAB9MEU9kuhc",
  "key22": "4dezGLjNCvgh71mExQ7iAXZqpWaQ1MUXYPqUhXWmi1fL2twAvfdzXUBbjb9UWfr8wSjpkHP8mm2WbMhH3NGnbCpi",
  "key23": "5UHXc96EtaNgnC9FtaiyHvhkuXhS2uXT8ty4S2676aYre3uwhasoDTq4ognm2FcDtCuGczDkLzQEdtJXag1i5tTM",
  "key24": "2HLrYbamDWKuXPzHzKvWYLcMHr8CRgqC8N312DUQRkC8CzG1WWiaBBSQ24pYZNNAgF8K5HiLJonvaWAM4yRdn8ji",
  "key25": "5nkE6pG8CMUir2UKRDJjJuScbv5YMhH8Xqi89gAvR76J1a8xmB8GA19NjTE6wAqd9B8TMiCgUtY9ABypbGSaxff9",
  "key26": "587LgSyAzE6U9dyqvRg6XVxSD39da6nB3nL4s6jcVi6ywRMoVkUfR1fxMevAd3zU2JBKyyR3BUW2FGCABma6R8vj",
  "key27": "2fdzw3F9Y1s512rVokKkg8Gcr3BVXFZX27skCqvMGZxJkW8CxPxtqZJReRYjSqZ5f7FCvWQ8ZXxJJitRCmG5eJYS",
  "key28": "4oyVrUTwxrgNnN7e28KVoWA9PbMyiHqAgG7CGnEjVxvwePakN4UL8MMajhsH5sGP9JPa6N6bbNvgja47WNGTuath",
  "key29": "4VstoLkDSS7kDNBRLAvBB7dz91JTQCn4Wjem3hkQM4uZWQTsQohgYHXDcehWpBhQNrbu93udi6tqfA1fnPFs8eEz",
  "key30": "5fp67cuWyy5AQbYyK3mXJa1myQ8Rt81w1xdJ2MbLq1omHxeogmG6J4YykntiJKX9LfN9NLkVuj6iCyR4YFryY3kK",
  "key31": "316DGDM2EsvcaDGQVtoV3xmDHDvGHSZywSRxK8ia42zFMpPf5MY37CReaeNci9EMX6VxGdRvPkJ12qGF5ntA7jGh",
  "key32": "2LGKBp7JHpYGTMG9GHiE51znQuvkwzzBEYsVpLaexaubTqtP4FNEEFvDdXjPMzHrYG6ZR47xFaYff4XR2R3K5KHq",
  "key33": "3QDaQZSmJYxkGL1hoX2vWFePTciUmHimGRFDcRv8GhtxZaCpV9PdPohTsgiZntBBAYKMWB4ymr2D9YJrGwvpy7wf",
  "key34": "4a32HXniu5PMqMBpuCom5YjfNVXArUGvFUB6BKStnovChsvXDN6fym4tHDY5VqYZcYT1XCxusmFSZ9vupR6yJ2Sv",
  "key35": "3yik1yjqw181gPbxb3cwyRqwm2htWVfbFkdixSdd9PRpa21YoMMcfjYNx8RTCjLG3qfc1ZzeYwmDPaaovjMGyUmv",
  "key36": "2zzoLcu685636mdY7BjSVLo2Z8BzQY2kTzvuhe5XQBWUkLgfhRkjEbPU4bXxZZePmnAPUPYgR4j73xvCXcdZdYpV",
  "key37": "QYRLwcYwx92X4wBpbyDbTRux5UethX7ArNSJ5aZmquZVTki8GHGzV4B4s3LnZMwL9rNykA6WKvHiC7FSMw6h8np",
  "key38": "3yyqSWGiQryKfSpqJjzFoAPwgTLUDeM9CHT7gZseX3FFpdWRNU2WbN22zpfb6pdxNGdjH6nrnibe3B2fPgXvK2Fb",
  "key39": "3GYfdEvH8iW1sAtyjZKTZibZYugPmQL84SYvndGCAbAypNTDX2eNPULbSASLtwbQWBVYiv258SsoaKhDNRmq31Mh",
  "key40": "5dPmubsh2V8YjvKpP9TH5PQMUfqmHvPwPQB7rcQJzp3NPF56uDBDfLFXnvGicua7oDjnmrFnryULSU8zzxMCuyBv",
  "key41": "gwB8vLAuqp8pWGkYi4SMHqEA6tJ8oF9WNmPHoJ41QVSHMXgGi3Mvq4N94HVwJ2cFUxAngHX6Zr6LpUKxuEAmXgL",
  "key42": "4d29JWC1nE8fbBA8srfMJVMTSEM6nuMM2SZHb9hzEudJT2dijSrJQGzTTKT6CqUHFAsdNYhvebrsQv5ZV2t5ecjH"
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
