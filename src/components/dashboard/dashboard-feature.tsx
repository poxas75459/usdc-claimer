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
    "2nrJTkfEYwQKSPVZ1jaBw7AQkgHsbaj7k4hvKQ9z9StXS1SpJmcbWjbCUXkXBD6c5DW6Y26kbH7gDtQnDK4G5cVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hEqevh5Jd9oyAmw5v7B4HrLBFPvRJbXd7VLoprFoz7wxqGF1f1LiS4B91uqrMEud6e34oWatPeJbCotBaXRZKs6",
  "key1": "2ssdJPLjdoU2L1ByG6SGENxErPsnrPdEBBLupgoqHZ9JkvEeQtKTF7eXxUcbCmtmzdmocXtnTVGqLZF8Uo485VeN",
  "key2": "5RYKkBRxHpi7WR8Pq2i9vPxCVmeSYXu4cX6EUPqGHeyjQ28sC8EcRLXobANSRe8zk9EB45nvWM85Z1Q1ca8KrTyt",
  "key3": "2eHQUWQR4ZBVWfU7GY3NBex13x9nx4Wt16YEvoNxC3PNv4UyXw4HhtpBB7vo72JqY1gerNadK1aVA1wcifVLiEH",
  "key4": "3Hsa7wVrZyjrDAdkungqfoaoNEwseqYxhxV9i2BkWgWWcbmyPeyCsTmfFrtUaAN9XBBnE5siXofnAvQ3Ua5ZgqJJ",
  "key5": "4Sp3XS1U6UwpWzpPbmf6HSj9QjUSKSNDjG2wNNiLpLrRtFkV7AhTFetNy5fSTAKQbCESH5tKBNWzxrymnDi37zfR",
  "key6": "LKqpcoBxg9uk8yCGacBhaQzNSFXFizUJH4fDaMqCCwqaRUhc2FVSA3S1uEJmxB5oDtDd7BbHJ8rE14k7DWm7v4v",
  "key7": "2T8PsC69Gy1dEJNv3Z1XuUd51tstNpq2pCcnCNYpuHjLoxEe1asqkWp6Ea3zmPk1hTdkwNzXaGaxxMpsmHQ5uwWs",
  "key8": "3GLQa1adHAEDEpW9KjzhMiP2vJyuZMyM5CkYNnRdXmKnsNT1xRkHZhzck3G4NQdnivJq193rCFqXvyTvUxNLqMdG",
  "key9": "3up9bko4VBf4MCQe23sShzNXkKBJ2kvLoHBwiBkje8QxKrrEuwTXfvLvaNhgDie8dbedRHr1cBLu8kPvgo3JRtRN",
  "key10": "p5ejnSnZx1hnA47hewbdAtxqpyVRG5PDPux6zfU54WYBes7wcs48ywmUg1z1dzmqrVa3Kdo8QKPwHzxf4ihWUBs",
  "key11": "YKM7TDaAjK8PjaLRFxDpYaKRGsA9asCFKwaTZWTLn7QdACaKKZUJLmt4hQUpEUCYGipLWxY5EJxmwcykhzJjGkv",
  "key12": "659pPkEhLErUverf4xZAopYEM1J8Md6q3yYLrhgeZYZ6eB9CUiMnnCunrtCp2HhYhUY8oHUKZ3bT4sThD1VQk5nb",
  "key13": "3oyMXYMSk9b6XDbGsooKfV8idadJCrQYUbd3vUbWmNUzEkcYrEZThyQr6YSJDGYDDpo2CeRyWAGRhn9JJXPAMRq4",
  "key14": "3SKUhfasaXTW6dqAcNuvazYL9VomQrA3ZaidbYrthnKDXEPb8N8HWvibzj5y8K3MqHKeyy7Gm2vdKA5232StUJ5B",
  "key15": "4GsTPfwjFYbG8yUt2FTMzr9mc4maj1yE2B3aJobRyftRmnbiac6b3ifWB6T7qtYnuW4MmSnGgjT4BFAz1dY62yKq",
  "key16": "bj3DXaYpbxivJQEnjXDe2Vb5V3wgpdG6JfCyw85P68cgWoGdbk8s99drtHaTsyfqBbQMARJGFWL6ZodQsimgzUS",
  "key17": "PVWfSD4CKQWQ5MvZ8HsG7Vxg3fr9YadN7cqghq68w3a3fA2ML2h266VoogGY8dFgE3GuYr9jBKi51qiWpgNeLfc",
  "key18": "31CGhtEYAJGQaPC5js1J5Zvqz2CD1A65uXVNA71S4hK297hPhUYqapzMUKGdjzuXXyfHiCsQSzw4hGgyYkWbCy7v",
  "key19": "3GYs15DkQLiNMdyvCkcmr9zNhjNSiEPta1F5J477hkf51Q8MiuWn5GYfBWJr9zAMqa62mTqLZqJKD5zH4Nad86Qr",
  "key20": "3ZzRpyUNqWkPfSWpTCsbqanJk3LJYvfsnKsM2SYnGJ8zm8TSK62FHrAbRSzCJ6fnBgnQNKX2vw5qenkNn4f1tsXc",
  "key21": "2utrLhnhAfjuKKxLmiCMAWQDu1XcFBSFiUxXC6QftiNX2VyrvzccVq7Pg7Ns9mJ2giAxZ1AaYcMjQGRQ2XbKmtCi",
  "key22": "2yaqTJtWv2sLKPPW9wacsLrKkVtz5u6vg9kyNMjWU8RR8SfzCgDrHnKoXuWZqcTohfdqhPu6tFDuWGFze36JVcuS",
  "key23": "4XFEzMPZnY24DRgMJQFc5idHenPjwLsrYGsui3cRd4CUrnEnRBcBXwriG9kUL8rhCiHAnMbagAMGw123VvNX9sJ4",
  "key24": "4xYBJtcJE1BNDP5cR5AYWqnoRQXYa8wGBhSp4TXBw3tPWaELGEmw1T8m7QgDrQH1Dp5h4e4QyyCtdwVeWbZiFymB",
  "key25": "4W3A4ggrgHL8uYeEPrmKAZefp1ZYMgs8GXS51vH2SzZhT5uUYXJAJT365i5atTWQSukE6fsvbBDhtcPeTK33Sh9M",
  "key26": "2JrTPQHjdYSe8cvLEFjZuPnUbiL29zFz74QDTrcJodL3HqcoKDSZTq7TaYy524EkimXKHJs4xoteBkWaAHuSoyTr",
  "key27": "5T1vPM8GLLLiSY2w3sgrnAuVyts3yj7u2z9XuvFBvtEYr7BP1f19sQvZ3yPyWvRn2gQPKPnYc7WiGGjmnDXJzfqh",
  "key28": "64bL6wUNSxcP19Kk7k3Q4apRieQDpGeTPj9xQ38k3HffR6s79t6NGt4Q1MvpfkmLo8SmBzNBo8Wj6iWemFesR49e",
  "key29": "5bAjGQi319oJJR8tZmvMZewrAJKGV5NFjVowbwg3TAsdxm3Ca1hmYAVrRVq4cQThzwUSSP2VESQYmFK3LUmpyPY5",
  "key30": "3Amc3oGVGQtFQkrKF6u6tnaRkgh3Tnw9BSfhBhZ4ujXUeiyDZv5mDotm8jgSzy1P2dcE5V3GfGNchQF5gvX3Fox2",
  "key31": "AeUHx3cDAjRY6Y5Hjpu6ki3T3xaWSe4qW6eo98xdrdW3gMjnqxGy8Zm9hdxbxAYbtGqNZwVZTCeLjKQgktdcgfj",
  "key32": "3B2QXFcEZpueFw1TwxaZE4gL5gVUMy32bTBQZ8tY5bRwj5VikesVesDW6nXLH1cckapfsdBKqbfHiaY3PmDcQv7U",
  "key33": "65BVyzwfShHFFS6BF8htagCb4ASiy3kQaPuu9f1uU3pKA84advL1vWDDS7d8vwBA7kmtCL2hueQbxRMXrhsNA8go",
  "key34": "2a2MFPKRy8SkAxKA4ALDbdnUt7LJFB7xwForjXFfHyCuZ8rXrFWMFtfT6y7GFvkj9jMipmc83TsQ4QSkTVN95EiV",
  "key35": "2vao9jAkWxTAZc2DsMXbnwaRL46xYgABYmYs2ehskdkHFCAeRchHKxMWaVy2nrGQkXJMQBBfoViLf8x6mcSab6NJ",
  "key36": "5WuxnkQxANrD39WZJeULxi9GapPoh5TZdfTqvVf7kufeAuiuQ48D4Do7Loiu6jWDwFxXN1WPXNFqSrm7ETP7UUrA",
  "key37": "3k5jMLLDtgPtYFkMhr9FbnnQoczJz17HutMr8edGZpKeSrGyPH4pUfrRJBpQjztk6n7DWfGZryz5EXGEjcVJ7s4m",
  "key38": "59rSfYKtX3VWeDbfBxzoEgsn1RsQrA3tUzhUWQcXQCgCf1RHEh9YNgBrzJZc7iCswQ7iRDRNFDHjdDeDdi5osMaH",
  "key39": "4z5NuRFoXxV5uoNzggUYgmxekZeMnzvSN2Tq1LQb1nMgBn3Xr548cqFJUYNdDYH6dqye39iHH89QKvMxeBwVNPP5"
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
