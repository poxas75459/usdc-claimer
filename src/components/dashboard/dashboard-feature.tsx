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
    "YYDzfy3X2aC3EuUsPjs1g2NFBYW9D5eF1Dxm1LdC3KjPKFCwwJNQZVjLre525EByGcHNit2Whwr3uZH9fSe7i6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5onPBWPP9GsEMMPi1ffWNRWukYoHcX5VLmV3xAsSzTLXTP2nT5PzViJRULfnkSNBM1pvp93z9DLL64VqGUf7zzSa",
  "key1": "5S5pPZGRhHYG8UNk7uSG5PWwpK57GkE6ewX98cJ3JKwK5YhCU5quuZHwEFM3xFAbCbzXCVjVFDFGdF1Eq1q4j49q",
  "key2": "26w39kjixX8Jhgup3dKnYDDBN9gkxKPee7EgkPpqtvekEJ2esv162cydCm3qpyRZrxHrxRJrDqztHncCdfrSoGSY",
  "key3": "35xeAXRBrHea8T2Ht5ZSMVLDgU11hkz4Bf9R8szxqj15nrLwQn6eRL9aQQKdFDrFoixGzHYcr9HnEbx6zTxSk2kC",
  "key4": "5WqMrPveNgC68o8w8XDi9wPFqLpYbrcth6kTBGYvm69CTCdnfdMz1nYELSVENBShhjK6vaiwEPJUUnLxTkTRMHgD",
  "key5": "5q6MAK47tHbyWaX3Re1Y9zPNfL8k9AZY1gpCpvLCrxKZA66cWwEX1c5o6SqrrThFZtreQiZkFVJfewqgoSQhU5mg",
  "key6": "5U2xrQtBSLtDfWvmp7DVaT28ipMRuiRfooinUKkSTcBNEozv6diRsYBNuoF4PJYVgrUYrJvGqZJKuVh2Av3Zpv9V",
  "key7": "2VUeQ2Tq4UzWJpJ9deVZJHaLxr8TrFExsLS4RFQjjqmxNnG3zYZ2Fr3mR2tjorQVVf2aGXQ9tMGhswmhbibmfCcn",
  "key8": "2unuLzPTaySgsJStp32N6RmfKtutwDfZi5Gubqr7WGHWEwe57KaJkd1wF1MTyfgwVrfhACMmAyN2WLYrkTZKsVYk",
  "key9": "312MrjdgGtviEeab14tn5q36HuEWtHUZuyJWpqBr3UPBKjiybdkM1nEGHmTLg5w5mHHasyoMoHFWZPVK6AtZNPzx",
  "key10": "4pWMVaFcJQDkwArRPpwzj3GzA48Gb3ZBgC9FWpshDeH4qnKUUfurS7GzFCttUNn2hnJ1nDwdQRX6VZNQxU7aD1dd",
  "key11": "4BdnSr4bfxL38z4ee6hoEX6WeCALKETRcYJgTZWgvvw4jNGgL3DctgpLePH3DFttc6BSYJjesv263UHc6tfhjBDa",
  "key12": "2gf2A1McGq34ZQKTTgG8FqUD5upuViwhhx1Eo9288Jmn7FeHhsG389XkKdvNi8peQWKh8yCgAr29YSvfVrzeRiL9",
  "key13": "3L5LcB5THyvTenrSB9g8m9pLgxWPtTqqFXYVzRPUJk9BvxLeJRUNsBbNQ1hcC2fWXGJn8Ywv7SweruqtNU7zptM7",
  "key14": "3JFEWaFabNZKeybtU5tgwbyRip5iVaf7DfsfWZLwjMJaFfC3PGinYdHPWfQog1FzBGmLfwzJNZjjcBznxvh5Et8",
  "key15": "2Aed5LYQdgb4KAn6TXe7HTTRVQdtPMSYPEvEjN3XuhTeU7u2TQRshj6w6fzXtCwJVi2UjoWWepLxXq3cG955RpEa",
  "key16": "ytbRhoMZ2yRzJd9geJkWBHEvHSBJq6JsX9stTQMRt5HAbZ1pyHgrzSuTzneNGD4vGC3Z25yotgWzyF17g1Nw55m",
  "key17": "2UiRjyDT9QVFXqjpPVbcFa11fsCgfpR8FqmcNJ5NE8MsYNWN99XHQTC24UxCJwb9DLy9s65twtaGPpFCPWd8LQgW",
  "key18": "47q533gqdyTksiQDEyxvpRV8tXa1tHPSpzRqRyhjD7Ans3jypUV1Kcvr8U2RdWVUz4avKT58HAyS8xokzeoCf3As",
  "key19": "59tmF1X1yDj4z1g2pmefyFBCJDK62F3R6FQURGvrVsK78ZgJ4JV2iEWZ6hUhgC7DHJMZjr8sS5zwGpD64U7jgo7n",
  "key20": "3cZJbDr8tbqwh3Si6EYfWk9cCNxidr6mHjsXrQLmCB8zjtqQMzWivwGUJ5uPC9hwP3wARB9Yb13FdAuGFZTqffWr",
  "key21": "5x625ETvVbaFscbHQcD5sUH17ErcrzrN4B4XVefDGkwpbvJje9iJne8mmQCDUTYLiHawMTaDxKaLAAGKJKFvLWVk",
  "key22": "55Jo1k4BAPR2DTxt3Metkrag6YpERxo4ZhqbWMYneZAcymRtUUZFnfT9ASUuBNyRckRcQ3TPdw5yYGnE2XRvnBj6",
  "key23": "63jY53Ku5SVfmHRHzMUKL6DmQqS7BMGD6y9w9xsA1RLREgKLoTtqfUqwuw1NVRvQ77nsvgpRZ34ZMRC6VM34keES",
  "key24": "5J1icgAjyaoLm7KertBecKnG1Z3hLoYPijPUMPri11op2a2q9k8mxJAeV2bnTqDQGCLq9M7MrrzgcyzwVUjq1ZJN",
  "key25": "2oWv24fsQCM45toxEZWzpXZ5s6MFjaSgy8RKxBd8Jn69Xctj285mt7fBP3SdqYj2pwbLf7D8dugPmzhFBvKgmJfn",
  "key26": "3fCYaF2FbRofZ3JvrvGp51zMwcpD9zZptLhmdVtj99rcBFSX6AEzzGZcmk5PDqf5ZXCaccoT5s2xcVNw4U3Qb1gC",
  "key27": "4jGDWzmu9P2wmkXMmW4P48XfSdcp1sFeLH7N5jgqGJg5dvyoXCnz1BF75ctwYXHqUunkC7j6QyrpG1YXgdWftqq7",
  "key28": "3vkEpgnwmhbPP5CPHMdwLUj7EumsrNAk69DJdfFBNtM32wRHWrhXTA8kZ3A3qDTLaTVrKvm1k4Y5A9FV2MRn2j5a",
  "key29": "4GDYTHqwBzqRAM2hWWmLHXyX4UWf5S1cvbsrw7niRBqh1KNLNz5ivzWct4zQkk3Hdx6REy4trnRjQ9t2df18yqp8",
  "key30": "2BVQXMagAZhuetF9tN6k1J8YUk1f1odShWjXpSwQm3QfKcWXqb4RdtkTfwqpj8CA9hdVZwxcicuBRY6uDW6YfrFQ",
  "key31": "3HHqetxdzGnTWKiMeJzniKmBuV96kwxLHtpw6hvpy1jkn7kNs47Nnb7MPPgcBubSrTUZzAaBFCjdkPSqDB8cQDGT",
  "key32": "3kZeELF6RRzbPyrAEZ7MYpzYSXShH3h7rV7tM7fwrrnayfoxm21VpPBPAUh2VHS8iut3DkpUMm9kzYHQTV69swkB",
  "key33": "4YvCArtjLRQywcGcFqoBVUkeaZhsLeirEJJHpe33PLGJ3ZrBtEttgMJRK75pY1MKKgxQ4ZvbAjvuyK4sbBiAsjCE",
  "key34": "4xJod8EXdFwCmuQuT13PUFq5amXt6C563hex8cGf2UfccNSgN6EG39UhN1qaNj9icwSssq8KHbVvqdMm6Adjdmsx",
  "key35": "SF5XQsNtB72tM8gjz5jJQkjv3SBzFgM3HtAzRCN6s3ojrYo699LNKpSCRUKmXeWBJk4roGUP86cqBpoX2izhu1q",
  "key36": "2Am2mNVpMb3aSJPYiziknVGn8FXisUP6bu7gRS3jFHUSrv3RTByXoDmQLqptVqQaFPUgL8uqYpGBUuzcgPWqLNfJ",
  "key37": "4Pkks3Fiq9q4tkVd7yjxGVf4AVowkMHPVH353smhDtooNUgNLtZYz754svYVWRBfQzUKqjpH4BJxZshARS6HHd1V",
  "key38": "2oBhLSbPJs3zgqZGRAGP4JcBZXHUw2NpyhKMqeFK64nwpcmyiKHiQZTik6z794nALoz5bcXXecwMWKEJvS1YtAhZ",
  "key39": "3vRywVkmMFoaJ5thAgn1rz3sX2AjMvbp2CXhQj2hL7pdKKfceAuDGbAsoH2Loa9auxXYvQd9icacQTscMhzqfNbT"
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
