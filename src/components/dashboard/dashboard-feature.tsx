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
    "5jiBwXsjzRJ3HJczKYuFQf83k9Myk1AdpbobGZhSKRMm1kEvdUt7zAMsJNZFmrKmGxGKyXFsnp1ScEotNRJWJaz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wE6SmbZ19nbfed6nodMS43J6eoAfoB5AAqNEaEkxDqQ8dmRkD9cPDANNgNG8E9rCXALz28JaWiwnsokK9QVRT67",
  "key1": "2KBmUSEWvK26igwTHHS31oNarP3eWGt6fakjjzri6YCcdMssdG74C3asCW9n6skyH28WcHKUAuxQhqYUFhugLxfp",
  "key2": "4niCrk5ywUa9acGxd9pjojKWnyZ8hdUqmYzWmrmqMoXbUBuQ3hnY4zr9mxhe5VmBpZ79zfz3xaNU4xVeN1G6yFwo",
  "key3": "28D1mCpyC1JSPMeAN2t4PTS54MwfYoKe9JFcn4Rz7Y1y3kxYskDAcw7EGwHtpmWyaFN2FqB7YiCNXzaBY8TXt7ME",
  "key4": "35xyMkXMsd1kgMgNDu7GjbVv4Nc7SsYc7rRs4duR2XHMkoNxYRDUeLVpderEDEKgDNc2ePKtuFZkp7fPCyhZHyWa",
  "key5": "5fgFqf6uoDKdYp7wPiy3Aw2SknAwG4atXogHEamveZvfr9Y44wbGf4eMDDXTdGfmaxoTUb6yis5HyazdycyiPgcj",
  "key6": "4eqRHiFxpY4bdZeiWWNt7UHPi8QFgr3Xp18bgkAFJf4V6XhLDA4eXpqabjwv4zpesaxQKaASH3BFDEKuheeWNfAA",
  "key7": "3fCqFG4Hb2chvwdV1h2jq3UDcsv38t6KyEevmmmY6Go49d8ZAtPvbkrHcBBy45R1z658HSiMa3HWh4o3aJVEWo4Y",
  "key8": "5AsQ2jYNccqWab1hJNx1xQLrKEcQS6raXGEkCprrugYtCjhv3RoPyKJ88z2zG5K5PWf19vpVDEB42shy2Akt4iCX",
  "key9": "rXhdumEbvrfpTZzFSrAt3syyFRK7RuZPFic5rr8zxt7ZdrwyxKj7w1JfCiPSUgeA7VZC6pAiztWjq3XXseq8hyj",
  "key10": "2We3qBkqvnBxANh8U9ZP7tQWVG1tdTpB5ZoHJwP49ADV1DR48YNDAXtAZjq4PnXN6PFXNRmXsX2iyBUiHfTDn9d8",
  "key11": "3D2YKQUUoc6kbRSmZZifjzuiX8ffpc2HNihpRCuLZJgZqNw5yqhaY4UcXKmfBGgRQHKKhAmkTfmbdGdXkqQZWeGV",
  "key12": "2RVJnE4txTrD4ZYLyeTvaHCcM4p1VRncsjnGwetmchQKy94PCcn4Ttczrbrw9fgukgmuBuXVkZy5B8nSv3bpRKh7",
  "key13": "2qmoFQKSk83G9iYAaFypaNhsa9NArHsCPhfPVnphQZCm5TPp4b6m9Abi9Zy4jeVRVDBubPCe38LqycQpwcYDNrv8",
  "key14": "57spFWQPFTUsJcNfgy6gUYNFdZu1T5VpL9okwXFchTJ7HCfoeP1x4XFXD4Pd2RzsEnYjQcH57KYvqoosPCBNcd9W",
  "key15": "4J53Z7x6HLsydcgNhvf2NpGmdCFB5oHZJcZL72NsB2tZwb3ebtbsybAApdVQBZEeFQd3TWRmWc5q2bpfgdu8vhjK",
  "key16": "63jKC3FHKrQjNjLPqF6urFvQM1CAUt4yqKmZuxH4WWuZP1ijhkmRG9MFMQsfdmPbt6bUfz7cR1NtDbs8cv2L9pbm",
  "key17": "wBPentK5RJ2PC1v2aRgoR6vCEquUDSs66vEZYMBQDNf5e3gAkJsD1YnCaEJPZsyCoDEk4bbfzccN6BNH6NfjEYU",
  "key18": "cKxhipCpQcKYgu4FE6KfgKvLvoJQKtAQyzskaFRahM36DA3EQH11FdfTuzqzBGt4RzZexHwHtnJDNcb7w98XGZT",
  "key19": "2EZMWpWcaNYatiHwaBQQwvKi9NVp3vX2pjRAdt6Djhrr9a211iHSP4wJtoxtGZF91nwnCPbREapJwb6GbtcBqhKo",
  "key20": "4zkBkRSdNjK1bQQQDbM8XKC8hTX3GB7oFC2cQSLfp5wBzBQXQvjRBVm78PySzjgZnw5ZgQvzMT3M9ftUf89G8PT2",
  "key21": "51Nwcn9GkEg6pjFAqTDSW59oX8AQXoHVCe4wrnVfEeKfNeB8qA4HS5716sTgr8N75kMjnW5zxTHqct9n7MxzQaSW",
  "key22": "4xp7yZZKq8hK1XStCThiVttxm4yUFncMvHWe6w31XiTgFAnwuyx8HUggwX2j9H4aN8W72UBmr3bkgP99MoKDH3Xh",
  "key23": "3pg7t8NwzgkNzYvot3xwgdaFaoEye6r6EGViXKiE2ZYuxLP4vBTLBS8E49YGNuKXy58iNqkAdoxLQXZ8kxAVAvjS",
  "key24": "51FwqDzWNitukuohS4jgUiv4JpjaDS6EzC8zX1WYmZV4itFDNffuYAKTDBpgrpiy8NvQxipJgeBx3RewpKxfKS7p",
  "key25": "2mN1mi43PXd1LxVFGgARPARQfKxGHaNbtx9m1m7XddzHzNiA3RcwiyoLwdcedxBEQ6xL8Te5bboD5Kvuum9H5FFV",
  "key26": "3mPFXk4KYjiZaFzh77YhN1oao9wfPjYMm98K9WQNoesoQvHvUNhQnQasvcj9SXSca1Lru7kXZ91srbnGZh6h6wX9",
  "key27": "eEpgC5rafKbsG7NMPrrxKx7GpaAdSQu1qM7XzborbLpfHdcwEiMyctstNVpY5oF8b9ZRbMYxK9mrQQLJnxNbpqZ",
  "key28": "5JcX5tAqquQ3dEY77QLavMTfoYZCj9XPSr5y2fVk8uUT6vMZLP3FWNgDjrVvDQemsjcgZTaDaZg8tjkapMY2Vq3c",
  "key29": "H9NLdX8Q4yytxq4z5ksx4DkFFs84RWBTNnEUYBKKEGZALAdf9fF4uJeNNLPV3EFTvugrmSG2X8U6K8gaEX21BkZ",
  "key30": "GjFcbXJrSWZPDMhX6ZdA8sCXAnQfdHYmmU3w4Acu585vQcHgbTtZjYkdBJtMHT85ZAqU9144bzvtoYnXLbLvpDU",
  "key31": "4CeK1D2p6TWi2zuuNdab1F9tg4tax3AdAEwKUVpGrqgZp4hLSjeqF9ZPZz4KkaFfSBz6akR2YZf1hU3RKJ95GS81",
  "key32": "48VhYRVyAP8zpSXEjugrHKnB6EUGgKqYrVcoiFh1mDyobg2pQnLTZPrwnWXS1oWHSzEjwa3RraUfgZK7V6kwjXtG",
  "key33": "tHZNENuHgV8WS9pTatAyd7RyRXwaniASNqSq78dbEzQmbQHgH5nHf8btrhZHG7vh6iX3S6xMdJ6k2kjZWazV6kd",
  "key34": "3XNkk2u3kzX4Mm3ezRWbD1hY5q7FYZ71k1qRMuqaLnyKaQkYySr3sAbwSytLEzpDf4hDQtLxwLeq7KxQEiVBVWrm",
  "key35": "2Qbhkq7NLZWJ9mMZqNNjU1rcqqntHHtK9g2tUSYwkAkdKom5xJFcJoJ1gTraczvwUrEECoBrqV2eXvc4XeMpodgw",
  "key36": "4sa24TczxSAi5XddpeRER4X3ugi3pGG3DAE8V8fLBtG9S8sC9kfatsZ6KugjeKvXpV9R96XZhBTfAX75DnzLrTXy",
  "key37": "8eBKVS6aEZosVeot89G9gJq9XpmudxbsHsuGcYwdmnpovNmrPwkEB9n9ytie27ABsfgWNSHHwS3KWmerfLabQko",
  "key38": "2aYyTqMb1cX1cu7GoHiNsGYTiR3exvHgNk6My9AxG34xW1EXS8cgQDsA3TkBZMdC1rubtbqoCEg8G7r6xKmApoN3",
  "key39": "3AaicDUvqLwwFue6EWx1NFzB6Drpa3qGSFASEE13N5cAdbuFt7eJinkwX7ajf6nZh67eYPVzptKzumqLNKpQjWdc",
  "key40": "dVisZXt5gmePmV81RhYHciPfSMfmQQZ2jSbprCxE6saNM2y5pMypiTqSoFgioHzpFi45XDpm94hrai71beLyqnp",
  "key41": "3aQ6SHBBeaCgLRi7JSrPkUUsw95azC6cZVs7ntVCEGcgSHLLw6BH89qChWALqTEZkSwafPVXMeb52aASS5ZdrXkL",
  "key42": "3wC3qsa4Lrj2Z6KghTiRDrfxNnak1PEZ5RPk7kPHjx53wEJKPqWhTzxxLFZn3cAhKW6KxQfZv4nXWQUbTCe5zSpg"
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
