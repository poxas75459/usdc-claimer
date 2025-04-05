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
    "3xgNHHTDS6qy38QxcmugJ4rQZ72Z4oDiBYfHtTTs618hdqYqNB5iqqB2uLzGLkhxxmh7a79wU9HSgXZEvckDuJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G5MnHQtR8sT7SBGveC5MStpzgdZvrjAAKhMrtq27WegAizWvGDwxHNsD7xKo3ahuuSygTrtkspJGJ4QiJESZVd7",
  "key1": "5KPbBR8Kv5mdzA6kQD42NGYDtgPMFNaFfgsZHfyZLvVwBCPrNKRphsfL9K8qE1JdhZRwm28BDoV61Lv29eALnZW9",
  "key2": "5vshfTywVX2ig5D5wp9qgRsMJvqVLWZxBeAAAYrZkzwer7EqnXDC3tQY9Y1jpM7aHSn2oKPn1GTm2hjLrkqtEK3P",
  "key3": "5oiApYPapJ1QCQT4UVUsexjq4sWVirURNWDe7ediXHHqbmWEgtWTpCqZuYSE8eCmE7zLE7rX79VJpQNrtL2bhGTT",
  "key4": "5bJivtkpsZjEHy8cpXBsptGXGUP6z72dPKoBNexBFRAwkyFChmLiiJ5DFkkss4TGuQv57rG2sWsmphoew2FKGz3U",
  "key5": "3fsqwhnnJWz8TYAwC5bBvWUtvajAPkWLJi3s8Nk1aHt3yVW95LWMKu1qUx7KDgHCZeAdwpoTby78M9oQTSfyAzK5",
  "key6": "36QS9kEXybNCyF7mG54jyrdqPz8WRHmkhTNGLpWw5gQFJoK8Wf7S4R9F8bVpe5RapSAZzKDFZ7JgtUsLC1EoyJgd",
  "key7": "678fdUWSzdNSYEPtYz5uz3Xj8Q9hvStpiYqXaEwRe6R5o9MGjWnFkFpGCQX5nTAFYdEJh11emyZ5C9j2Cw1XXuHh",
  "key8": "4pFAdohBuPWkF3DLJga7ZDudWZ6Xv45aq6eYqZH2FzSrTyKwGiztL9NxAq1i6BFiktLQDtGVnUWX2qLGBRD1tjCs",
  "key9": "WBjnGPm4Qbi8WGYGGWWN65TK7gonT8ZE5VUhBg1ehh8k2LubbHYqPSPPZ2hL11kaKvNPzBUoEvkHqyoo9GfF8tw",
  "key10": "ZJ6ZBMXRYXihft5QgxEy9pvf4TZjeSLsmo8XbVMkavEvA4g7yEoL3RKkrvU1a6njzvDiSANV4GrcUfY3x6oxHn1",
  "key11": "4VMxnpuFHdBzXmaTiZBBZ8BUbsnVtjLHXBwJqV6hCUYxQNvLAo4jappGKSmY4iUCSNNSiCHDCnyTC7hsaHiVJgy4",
  "key12": "3gFvZdge8q5NSmpiMm3KaYRQMDTmZzMn4wgmkeQx1cJqQBD26wdkctCjWg95bry3PJ42GHYorZyaTj8qEKy2Sqrw",
  "key13": "3w2WZW4u3ScWYdUmzDBqHhdAT8rmw1yCMmGVE6R53CzpfdBVb9fTjNSbEgM6StUHQ2ekmCcxbpDfwjME2Z3oomqY",
  "key14": "GhRRLacKVR7C73LmosGTTieRrNLU3pxnJJwAym9Dt9N6rZv536V78kuJLk5WYhUr6yE6JrPGHR6cFKFLfeCJHWk",
  "key15": "UpJzg9yHRRYedvKci3EQhE2ym8khgCdFF6YDu7QqdkNa5cqigxGVWHQ9rJd8SEsrHgmm9fGZMqouvVE1pCF1RaQ",
  "key16": "3MJ4KxFNkokcKTQkkxbVTX6vk15g1vB3VRjyai5ewjn6ZEkF2CmGdnzvF6LvQF9vgvd85sm8cjqrZpnscRGFfCLw",
  "key17": "3j7hmuKX4BzbwXjh5v4N9vd26UhtUpthtjJgHExLWpKtntiWRj2N1HPkaothX8bwAMVn47b7qMSLi1w1mHMMbUBv",
  "key18": "2qaPcGKBFGZ5pT7auuceppVUd7Dbz4LiE3WvQNzxvyftHz8oW9tfDoKvwyRLZX3HvcmdesbZYJhTps551eVtnJfx",
  "key19": "1aEnhko5mjtqGjwAg5g9SZuckaW2vMmCPE2FbmX2pLuAAwKkdSyBDbF3utZQwwdyEdrGTbHbNhwVwDoPzuiq1fz",
  "key20": "23wGAPU7SzV4psC6VShYEUnboaje8RVfb2gZLPDiXAYXQtXKdaZgDTeVeiSfkTzquF1wKKpWFW7q9rwAxS9hD4fo",
  "key21": "21zAnAsiK7rkKhRE236ziY8C1yebtgFrtuhcuCHoWbPPN9o8jchparu8SSfTEn9mhWLW9MPn2UKx2tikXQUiXgCL",
  "key22": "3tPbS55AaUJPXGYyTkC4qU2Pq8xMmGXUGYP3GHdgUmWX1fNiWm5kxkae8YauW69oAhQAwLcW3L6E4LiwG6tawRag",
  "key23": "3RvGbADQYLwqymkqWCGVSwqzSpE3hu91FRxoRWxYexa3AAgrdgGHRmSpLAZpPwTzdWKZNgJCVvrUyvJfT3KhW2fF",
  "key24": "4iSJCerz5EGY2sz84CCvPdrhiuaLSPRrUNTWBjg5WeUeNdFFsUmaT73b4Ya56fnmqRtV7rrH4xygXTdq91mvQb5C",
  "key25": "xZqBZgaEmDwPZ2waXs9j4i7bRSD6kipL85s3XP6qEhqKX2ShN3Axkcsr6Bd2mY1LNv3yjhzaNs51cjgFdQCdzmG",
  "key26": "5mTdwmFw4QQyck1jMS42Rv2YcDciUnS6yp32s5nQSodkEeSDAuS53gRzkbzudrc75bozXqKMuwtKGsVG6godLM8K",
  "key27": "5W3MXKBveppcw4mtFygtpf4UszySQEXpJZLT2C6FJuReqJEbEZrQ2wSmmsbRwfaizM5Lesm7kM9AQb8aPoJGVriP",
  "key28": "2z8e4Qac3wLVny9av7obEPNRftrhhGeapaTBpvsBqymXt6gZnnsknQyAfpq34vrNsdk8snywKj923qPCp2QumqUc",
  "key29": "3oyTSV623Ffknm8KE4rqbLkZSPg3KWZxH7m6Vs39b27hRTZEg8v1GyD6FvJ5v336ZQEMX7u16SeY7ue6skRi2LGN",
  "key30": "5dr7cx6TrtU4qKHgkEHZtDyV5vfmkg3DHbZC57gBMd8Jxjcp3VV8CRKbTTQuynLRViZHE2QMHcpoFUtAPTUiy3EG",
  "key31": "5nBcQMMY2HKLyQEnkUvtGfNpkhX92UowAmZ2a4qKqJrrDKknDueg3H5Gpf9Gfa586wZvyT4MCkTFbV8B1zF1zHmW",
  "key32": "5UyU2oDm2DkNk897Kw9Jtxt7mrhodCpAFYz4KK2n9X4XwkmvejciMhB1KY2czGMF5rUKd9r1aXzDKBXsPAue6kC9",
  "key33": "cRWbYC4Q5a5LrvwzusBd8KLeRMfExAvdC3h3ESqCb3bNd5YZFyrMtxAyVqH5awQJnp53crEmRnfq2LnuwCs8JSY",
  "key34": "4uiKsypWRESDWRT9nBxdSRc6SoJo2zcasAVhuouBEmGWKx7DwJewv1UDxFkMHo2r62n3kYefF8kxyCg7Spij7HXs",
  "key35": "2jziVkMwB85Sd7nujheci4enLYPLaPcskhisjnyQ92P7NzvdxQ58DDye9ruTsAXEZeKZ32o1Phu6XaNBAcabqazH",
  "key36": "4tGP7wikaPKdiyPUNU2SM5JhCeSv9h8t5vzJPQ5UCYUtmdEeuy8mv7ZgP7wwAw5E2nQuc5bJSmgxac7uSYcWC6X8",
  "key37": "2yJ5Wv5Rrs5UqxPMQS1z31B11cLXq3RmP2K3Pbr4jukGpvQCHu1d2xTtHYjZs7GpsPv2kUhLR9FBrpnt7AA75VFo",
  "key38": "5M2qHWJ6kMPMCA7xar53V6akb2RtuntbyfTJyaSE3a4cdYKs8758vg2J7dNKYA6vEcA3NLr8jFr3RWjWaC6EtA7w",
  "key39": "3kL5Zc2Xo7AbMSVAzyKXynUbKewZBpFvogSj2VCmipxsSU8y8e4BjrdQkv1NQwYbpTEQF6ZGNsJhHPdEuLaYifB5",
  "key40": "4L6SHgv1fcb5MiH4t1oSGzKm1y1VTZX1oYBdGXez8su5N9SZqoPRV3T2PEh3yjqzaEWvMWJK38UnQwWZEHuryUaw",
  "key41": "3e8Y5eF6Px24uRupjstp1U1qnVZhLQvv1UyAXG68eWdfZkMwSqKt3buCgtQ83Nw6W8YdjCPNCGvCUK64y4jP6qH7",
  "key42": "3aLXYaa7rCrbkU2UJ1BRHwafzxKswDup9uvhLkRMoQPbDUDiUrJ3QgaH4zv7hCAJEQjM2PvjmUfXgRL5jqzMEFM6",
  "key43": "2HJitrhr2Tid94t7nsYUpeRk182Ejkf1cZE4xKaHwvZScvz9226AFHkjcpSExqjXhSE33yKv2fXV3ApYeVRced4A",
  "key44": "GsfE7e1cnorFq3o3oMiXef9nsM5rF8YrLt6hCCw4VAw6e43cuypm5Tdo2uNKCHih13Y22z8qmzZ9mpByFzvyTJq",
  "key45": "L1R6gZokJMDsTXqcLf43rjYmmJ7pTTZ4HuXT5165yeE6bZ8EMSeLMVTEHXzRzNtpdsKJyS5Wm8nskMyaERvrECC",
  "key46": "4SbUv6e6NiJ9hgJWFbxk6gSKJLNnJ69t6pHQrLsFYU3ydaqWUm7AvqPRuMxvEKbUuq3Fojq8LHKfAzC7xboShkHS",
  "key47": "pF9iqRYHUwtsAsPvVQb3LEaSrCgAMh8z3qPW9Za9VdpZZS1xd73hUwwgS7jHXm35JkNJdMRr61D9HxW1XDJZLAe"
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
