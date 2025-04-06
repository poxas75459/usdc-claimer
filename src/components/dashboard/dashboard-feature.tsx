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
    "5CxuSv87SY5teXLSZaKfNgWR6uM8S3vTJDyYTZ3a3GqUSBCeed46Qk4q2AezjJPKAfuKbR4UmAwrdt3NfBSDMsve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aAxyVXYEM7pX3T3BS5JNLysawmzkPr99tm1JhqZbwte3w4j8XFsiMH1SxXMbuQ4M9KyTW4gE5NDhcPFd5Ak1Yx4",
  "key1": "4H2fqnswAwTnDKmJtrjnW4DCzrycXU97TEoAER5ngCxpUYXXEuNGaDwWgSvmZQR57TtCnNivitY9xmae1LZ8WBAZ",
  "key2": "2Bw4Q4X7vnneG93eLFnpesZz68eTyGiWSQDbEvKFjRXiRZmyZNy5E6HaFHTc6Kj2eyecyNpRjdkoeS7aNA8zi1LY",
  "key3": "26SJMbhRKrWshtp2BEVstcSBP9b3qs3BsdECZ2z2CyLTgh4q1J1hCWB8AvXSNAhMeUvXAbQtdpb8W5NBL6pDDMbZ",
  "key4": "3yGga5pvZpFLdv5X8BNkiCGsF8Y1wPUpmmNSVqenZmPbBrQnA7XwbtCDnTwAXMBrtBuUWtu68LLedbsHg3z2EMPQ",
  "key5": "JGRcME46jKeZT5D7r9V4RxFvUScgrb9qeEVsHArL8joXbCqvdBxsmweg3dfLXcDThomPTebNUfjd5RH26TfZ2f6",
  "key6": "5CW59JcEwMPSHiMC6ey188LDy4c5fnktJZFSjzgH9xECAWWzJE9kH3Zq66mFyuCFBEVzssNL7gHrUPSNDLT36dQ7",
  "key7": "123xj1BK4zcNnD2VQYTN8fY4ViAjuaQX91crtuBDrFyWTt1qhyYjemVcDRPggSwuYz6p3C1iZEpC5HYfDuA96Lm7",
  "key8": "2ernyaALejcUyVJVJRd911qxixEvjS6hb1uwshvW1vJRRX6sFp42GodD3nYVn63aZqABar3PRL8H6m4RqEM2k8mt",
  "key9": "4s817CgVUa66bEBqph81ED9PUC7bzW3N6uQ3R4cNCw4fTcH5XgjT2sNh1ypZdBf9uDTbwXEdPN9KxaXevB3qK5nT",
  "key10": "2yKQ9ep1MfJLWrRHsjpe3PK5T9CwJLXbHq8oEYFyNowfYTHVXDuiwjTNeponrxTwV1kxusnxHg7czaCtNJwsiXVq",
  "key11": "5DerKfCFtV8WWuV2c6fxpSh14B7Vbok3BTEjpEWZuHHhAaukbjHLwTnHn6DTQn3phrtcGyJ6pY1qUqk7CEvARLTc",
  "key12": "55Rcx5SznpjCw4ZQchRBbuoAfyGYcZ34EiG34CqEw2zZsmZvoHctawFuht6oJf4FxhgQcaT6cvsT2wEhjbF3rzZ",
  "key13": "LrkhK4VmMhv2cvLcASYgbHgmAqAbdxFFwVzmwpDjxcmAiN8FY8pVqcT6wqhSsv7jf69DpPcceYvttFUR53DjKrQ",
  "key14": "DvZhfnA2Y6cAZvUUBeGvSc5M2jLpTmtEfkEHMVs4hnp5QBgdLttC6r1nqX87PktQ2DfXTPkAyNETwKuxujVee2s",
  "key15": "294HnYBEiw7BsKQt5yEK25EC3YhgGckmmrBNK1qNcMtViQ19yGo7c5DdNQBDfBE8i4LR9TmFnr61M5d8pTgFCXDH",
  "key16": "2qb9jrr4Lhcq7QHHAduz8JDn9gN8NSqxDaED6h5y2FupdXFRywJamAPJp311atkUg8qaNmFaEfGR6DZBjMuSp7rR",
  "key17": "2MVwno5d9SmjYhPp6Uk7qXxP6NErZBVZnik7MCiRsHmR36HP9hKHzcXiGTSRm2bnBQB5v8A2FMraK4sMkjRq1XwZ",
  "key18": "3CKdU1CXBa5nFDP3ajZukYZ7bNwRAfwuHsHs17H5tLWcJ4sq8SMUsudYPJfz5qMgmiVDiwpvSyETX7HFpa4WyaAh",
  "key19": "5bENcdGYsZZKfsSgqxyYVySjZXXNttyGDL7hxUuj14sUS82EvJAXQdRzmh5rZzWYmHE77nTFtXXsiVVUMioZKRDW",
  "key20": "4VPcVHhowu9Ei6xmxcLocwSbmpggSpKHQRmr2iVuuEMUfDkPnbyLcggUXq1tm3P5AcceNPby1BVB5L8cGAs4aU8e",
  "key21": "QDeAhbWEJPRDvfiNdNQVDfrcJQ5wWLv6kefBpMvBbnCn71VrJLg1mmqox26zmRhE6s3ifzrkhP4YeMjK1TDRQFS",
  "key22": "3mU5krXs9eHKewpaJZGuv3Marg4Mxn2xjHNcb8W2w1nhT7A6y3axsC4HmWnQkPcDHucs2bNNx7V64mbwdqufP2aM",
  "key23": "5nsHcz2aioYEGfej4zNQVsfRfDBBnaZNipRCkFEXv3mKTgew4BkrRnbSFLHcAtu9j3JS7WZBDS9XDYb3zbCh2tj5",
  "key24": "xoUGXWvG7MmdjVv3vnBmHYx9YoB4RxF38mAG4s53CdnqDLL1rYk9eFmC7bunCbzCLBxQNDvj5rViRz5wNCy5Kbz",
  "key25": "5T7CLPB1hqtSqpa48esRyppeWvF5jNZwJddnU4sZF8Yvfs5PEHUkq8h9cUuncGWaypvBkrcvFjPfQ3M5XCMwvwDS",
  "key26": "2ycCKWywwqGYgKrs1ComTUq7sjHpA8j7rpihYVHSBRTSk8MVcT8q8nveb7WKmBDE14KE1FvtXMwRy2objSM2ojBL",
  "key27": "fRes733rMT6ssxmDycqzZmoNMFFvwRxSKeVo3KFUFA8PeCNNNwVmPZdxLnKXRMJJChdf1UXQQL85rmrLcxxzudS",
  "key28": "62zWvwY32pGsD3xg4FxhmR6SkrLJrzffz38TLwLZMi8vLddhfCg6677ExwztL74LdfSk1y8oz4jN9stzvCFwS7SP",
  "key29": "25MUUqrWuRxruYE6ccpN2K9njkzGVKbgMnZoNKHh7NhE15CVf6sGwrKxiCZFdXVjFm5B4QRUJDuvFqwen58NyBi9",
  "key30": "4BJvKmd6KDMagnikQahYQUEkDeuC2AHwDKxi9oHVfY47vFMwt4if1YF7SUVCZnRWm7AB1d5aZoxzq3VFpzLf22R2",
  "key31": "3yQskfjEDBy9vG9dTQDyshPeHK4QYpwjv1Ew1q5w5K2NZh1S6ncvKFUZcdgPCxJZhY6myjyaFdn6w4FTfe2csyQk",
  "key32": "3GsjDQgmPpxer3Dc75QtDFvbLZNgU6ZqpYJciP6yECXv7ykb5hRkD7fMCjAyh2Wi3PsGL4ZZeF9DpksbSacweTAx",
  "key33": "3hyjkJT79xQjctyvGJpeMA6xWJuJhQ5Uwu6Uedx2NeMCBWGpKkrRXkPTn3gaM7KW8D6Tvx2xJpq6ESRy1BsjuKiV",
  "key34": "2mMmJ26NThqBvDYjU9BehTCoHTXkDGEHgowdL51U37kr6mrJBuKeAgfBstdcd7hrVoSL2KGd1mX5wJMafW1Qdf51"
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
