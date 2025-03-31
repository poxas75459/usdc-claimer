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
    "3sNvJYUxSyZr8vTRoveCD7NAoPnj4ioc2PiEqW1R1Tq3JLfySHqzzMLrbF5aDAL7SZT2QpMJqN2TYNvTWoATZKyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQ53Aw3ojDDHu4a6wexE8djZwFTRwWbzeWxaRXTpboJtnwJXVPSC1qGzHeWErj7rWpsXjqCEv5oLLYJ1Ek7XHhW",
  "key1": "t1zYxqZ22rhqjG8HHg16cspmGdLeNPkCifeQEfKFrP9KSoZDoNRWVoWtmyyGT3bbdNEJFrh4A8zUjfWHrfCfW3L",
  "key2": "3Zbrs3Ycbm7bgK4TQwVedzo5w57WjPyAmMqVMVTY7eZq2SbTpXS4JpWrR8ZF1iewBGpzEsZ6dnBSDFdxHETTHWFn",
  "key3": "3aA1Swy4tNQxR5p2vbnCeFRFmUXPcoDMbDBMJETP8UMX7kQZv9VXVLwhyFM552VEr7ZyzzryTH2HWh8ZonpTB8bh",
  "key4": "3QNmLm9GEKAQTVaWkcXxj1VnFxPsjEBEyyrMnYTKN5ieNiBteZjUc37sLjahcthgeGpXgXU7BYzxgXEcvTGyqYi3",
  "key5": "5Moh3b9HN3PZuqWA4kxLRkdbn9DUjsTTHfdqiAXQ7itVDAR3p9f5Vb7WSdfV3rNHJFmXePKszTKbA4JX67y3cG36",
  "key6": "4BUUVP5b2sy6u31ms8kvphWxy325RHVmh1TnDcMA72GLH9ytYgbCtDoK12biPyUkujkxpKAX8tH7VRnDvAEMLyxQ",
  "key7": "5S7bBi6SjMEjWv3A9WH6G2YnFUPfgkvy8jTzg6kynPadGifCrMKkzc2xcGoRZyMHPnvKDQo8qTtBz9k7imaT8vY7",
  "key8": "35hPixumgnUyk56jKNo6XkgyYAUv9v15ziknzWtiBpLtiTUMrv6RRyPVuiiY3tFo7ZtZXrexJshVZ5874JmVLoJr",
  "key9": "5zjAZEZGDnR4zQdRiJpbB9hCUGeLtjdsg5ufMXWUhwb2qztoJGUR4cNWYBr7enfA4dUjmdvZXcwax7AcLy8UUsEP",
  "key10": "25tNm3ooT52spLZSh75ZqfTqYwZABuQGej9NAqWGXd7mAYwv6M3aHCK2fGoVfZ7QzD4uoYecMF3FtDrvoX8JSn96",
  "key11": "4smsZktAFHJ2pS6QbsFvBzp3XUQD1qGD8XiKpaCzPDhpB84Lv89iRBBK6EMKSk9stX1pPwqRWDvdLrGnbxqPdUff",
  "key12": "63suv8AEmbNXZVpjbBUw9iHAjUKdwDTp68mW6wxjtdUB1dpoNQV8bp4bicaUzMEuhSBa9hkCZC4bjFCCoC2yRoqW",
  "key13": "3nM67N1c96zQsrzPaiaj5h6Ka1tvZrSgBWPJtQVSBZ7t9ZJHh3t4VoEEs5hiWCrT1KXs2tpFxRp1FVyx8smXRYTc",
  "key14": "4WXUmZZj3yV5oWM7XpmrgqdMuRFpVgZqQJ9TJRMNddUHxhwmy8WgezW1e8tqCGpGe89nEQVWCNKU1wwFPJHpLtU6",
  "key15": "3mdQAhcd6EjGvFmfZmsmZvTsDZPZgTkkJfW4Wq4nCzKPKRLRf6729wyHhuAfzthkfjbM5gxs4jd9m665x3qHxqag",
  "key16": "67VSoSTBqbRvPe9oLH5n17ejkRjZV4eFReUCd9UNE6wgTiEnzQ5tw9nFYZLKhedSUZhhyho3mmaGqCkjhaVmtBwm",
  "key17": "59jXAgBvWmtVbQQX6V6daQAKEW1N2f6MZxoVHWnAsNNr7AUUiZC7iUqaHg3Mx72o7VsSwmBX8uwsJLYdC81xZCke",
  "key18": "6u7yyZgszXDH5xNy1dSxR6r9XkMBa8AsRm3yhY8ZRTVK9g4SpvnEKrTSrHAoVNNWuwUUQqfD4i7bK81oHbj2k3Y",
  "key19": "29PaYRzHP2JvhzHtV6zxcKBBJVkKkANKruvZARenigdrfuTH2nB1FreLK4R2rZ5753BbJ5kuXDUYtbY23rX4HMd3",
  "key20": "4ETgXomTCcJT3C9ZWHJjRYYRx94Dtyxn7qpWvg5N2nBSEe7WHkQ1ADSHAengQidHYdK7ugjV2CU4T3Xev78o9iAY",
  "key21": "4AeTkTojziD5MTpztTZxdHuc5q3YNfBboA7MVenaxW6MD5K9kz7GPVMFCg6orG1yw9zRTB3VDkk8ZgvWyKSLFuQj",
  "key22": "5LcoCEzWJZTcy6Jt4oSNGTW3e5au4d4CgVupJcVL4LMd9Mwnr3icnU1HWXkpnJsfv44hGUAkKGv5LfnPBfUBcb7g",
  "key23": "4yP195Yfmjqsd4u8uecsFYt6hv6tqKmuNCg7DSQ3TTBavhhMRBu3U68XPf9FLztyFzqeijRfenQ8HkdKmDLjWvF",
  "key24": "2AcQ1qdaSnAX5si7GcwsCYKYQvBsayn1h61ymC3mUcXneMFdgHfa3xY4ab3Gr7YcMEvtZFzwU5Wb3QRwq9GBWjnh",
  "key25": "36m6tT73SpLwV9Sepc8ys4CoJ4pML1buwaCCjWNCTrDxkZUPtLjDmfbMiWseADGuCJoGfVNwNvqty9TpcAMXpU14",
  "key26": "4ygSeJ4oWk9F2f3gPBrDgAxyNnePfN6VyUs6q4TDqDuaaAG7LPSqUN5ua9cmVsAo5soj4Wju6PPrJRr39U4c9bdr",
  "key27": "4eF9LbKMrrZqHFjQiah2dCWKsCZpYREgkVWTRvEeM6SMPujbxS3kcBJyRAs3yTtmKujzAdAzz8ns753Szrc2Ady2",
  "key28": "3bgbPHhzFgXPn11qqPiabj96BBDJnadVUYStaQA2rWe9LjAL4fpGNLmNakaLXCmsJCJ7UF9Zsb9uYdQtqB7a75iw",
  "key29": "3YSu2tRSPExy3TdkYVmn34JvvAkSLoJLgmeJsDZbvreoa3vbQJdcxqQzAkgMdYwppzpufgKsBgLomUD3a3f4txn2",
  "key30": "41xxYphCyatgaZbbtrpTQkR8J34MqbB9LhXiMbpZi6s6yX1MdqYx2XrCDyGJ6giV25XEn1yHHNvuUMieEkzz1HCz",
  "key31": "4du52z6JBUyzdwsm2XRVheSqeyvkCDERjzPWroncQQMupsBeBm5s8SArLJayVy1NUhTrD6AbZJDHyMbeF1e1TN3F",
  "key32": "2z44XxzgRDctcgzT38rdrzZBc1cyHmuAmdVvdW74YRkQ8sFfPNhpaSRnqWb25KKnuFchdHGfrmkryprhoD8HTzAZ",
  "key33": "SnszFyDeW1EZBcLL59BEjUyRfBjPzmFhYoeyPZvXe46hZFfZ3TNDAre6DfVAjL6Krm1XzTbGiK4X4bmpe5fLvKU",
  "key34": "4gtjem4Pf5h6sFJA7JnsgxwxqVcqRNvJAqwtES2QgWCMxg6sbuNna4gofmSPhi4YDMAbxcJZqSD4k7UDxRt1Drm9",
  "key35": "6EFnXHrW4oFEqJHSEiZmdkaC49LThzzEmCY3tMgYZPmpdzwH3o8MY9GBw7yJJNEvkCDmsbvxYs1QB5z7SNes3sR",
  "key36": "59U8KWJwQm31wuyYXQXkpmjxgQVD83W1P43VqPADuatpXSCgAXBowPWxhppA27p4ZfjUV7WuNuzHiMfdzVFsoxVp",
  "key37": "38C5gaa5z55fJV55Udv9hThMFJJUh3xC7VYpk487p2D8dn8M185FJ6Ps2Yya3o3164Ew5qygGAEttVsXpJMZxLoR",
  "key38": "2QsNxbR6WDuHUz9rLtiZCz6HoG7gfSsszXiLeU841VgVZQShaSzEDVcCccbvUsYmGdKQpwK72XCVCWgmD7qEV3RG",
  "key39": "445i9NMgEJwfbrRPK2yicGJiuqWfCFMh9RSTNgc9PLE6q1p4knHFCNy2TDi987vM338D9ubbnVKGJr9jXyoGs2pC",
  "key40": "5xwsJHvJeGQyqg6KW4NGx18pwbVN11d49ULqdEJGSGh63KkEsEfvsw6Abwwj79bvjtZqm9MWc27bdcw7r7m6bkh2",
  "key41": "59PtWwKE5ag5UnVrmTfXxwkYAfgn9NJTAC1VSetMQMbZavBr45VBJwdh1ME7RpWN7uWkhjPAza5UwQyJtdmGTtGr",
  "key42": "4boiaq25PGTXheA9F5yUwZwjGQmJFMqMHaUcE3A82Y2vG74UvVfYwygApphWkXi36xAXE8dM7DC2niYsYDeUnYNy"
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
