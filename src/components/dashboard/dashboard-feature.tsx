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
    "4VfJBYfMPGMkahjRjWeCogcGa83CCogSSTkb1NW3i2uwBjLg3LkL4JjjExBeMeC8fJFpX9vJB4HhEX8NZJwvDYU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TBBcawxBHscvMXctnyJt35XCmCW8iBaWLLPrDj5rT5UBce9u2zuyJsp7w9Ci2zDDWhuso6zkNnbyK9e7ToCNwok",
  "key1": "p2JjAeKxFF7Zc4XsuEzEmT2tnoh5ibfdHLv2yosD13Ax883LrNSykCHu6qguzvsWionJkAfhSXkXmZjconYSi91",
  "key2": "5zt7nDSrKedYSw2ss4mVbY3yKkRUoqvarSgJcuWd19vsMahpQTJ6TBK2PGVsFpnbZPzFWaRv5ch7rfZ9qUM1Fngu",
  "key3": "4C8rD3ys7LENt6a6c7FRDJ4q17pLWk8rQvrDKjbDinRYy18dFFRFmCeQjUsyBLnvoyp8o3HrJ6pwaVxss5mQ5aRx",
  "key4": "427FLJ6dcbq5xeRinMphT7Td2KhNPhTxY31Hxg1iwA2H27ngFRc2qjLS22m9rv9mYt6CFVz7VmDvWndBcde9sjFn",
  "key5": "4UEBnmWqp27WjUEfpoCSW4NejsbkbLmbnja6CZxUeqYrQvBRgpRG3VtSJgEGAGiRC1HJueUbcvQzoK83ktomTdXD",
  "key6": "sJLSKypJEdEvZRqHJKbpW92o3hxsX6DhjKJjhrG7REGDEqBzrs2hEsAaVfDy2dQnGQkRCZAQbVg6KzJEELSpE55",
  "key7": "2oqdPtxQu6mqE7RuYAZV6NUBX3aqvcvM7gj1oJu3HX7UcmAB7uLCSd1u7WmwaHeQERJQg5Ygp2C5JsorDG8Seoir",
  "key8": "4x5uoJzTopKSKLZiGnuVbhkFzq7PBXA9ZWrxipiXggnacDgQ8LQAqDAU77svMMuboECbWwh6xkNtQKUTezLtmsQB",
  "key9": "5F2rbynCnnNUBVygovWuW2ECS66QfWXd5F4xiBnmebwkJWy9BwiVibBHD1XUxALC15ckjVD9DzkM59oXutAfmBYZ",
  "key10": "FcUCRGNbMBdYXhH5SqDTpZLGCk2XJ8sN6KuDpQMrfRDtLkp3yqHraA4rFSkAgwQAy6XAKshsgAeQzNeU4YG983X",
  "key11": "5Gi2Y9of7QQwKxgT46pwgzmaHwjwPfy6dUS1qnbWYq4kECqgfTWqEZneNncguMFspoL6YniEUR9b3L7dSBJfw97t",
  "key12": "2JHxaBBLuHtb6b8F9ZZitA6Q4kdVKKHPCq5kLPhHNNHM8XhnNzg7h2VUPrjv1zGRiDLiHqaRyu9APv8CSQpKgBCs",
  "key13": "2ARG2Wh5i9XQSa8rJkCn42uymU2AKmvQs2dmkaE9UWhqBP4yrke9eHaBPn21iuZW6ehZ5cxqcMt7cMWByF3UfNaR",
  "key14": "67FBYyZGpEa4uLWXvyCeA1V9uoJoA2fJH1QfcD5rKp4vns32UPLnsphjdtXe927oukhufeiiVU1Lno8Qu89stNti",
  "key15": "5A1yAepQECJ5dY75o6ZB3h7TZhrBuvA96JrnsWuaHCN3fcEa57m3UKvPC4EqD4sTCRXXAbtLBy7BLLaiSDkhFgYC",
  "key16": "432Xr7PKSZb59FKK4EGbddMTjeUp1MKo9GX7t4uJrn5j2QiSTof2MLcsLoqyYhKEpLwUcF72XUXurWTmBiwFCQRa",
  "key17": "5UBgxpS3b4K2gmkYZtAHCde9NSDLUvro6EWR848zCz7EgaimjXFgoAVZiAJeLp6RYEsTdyhwkYq1a5vQfoHyjZXm",
  "key18": "KeUW2ZxX1rUhsE2KXJ9zxBCA6Tscc5ui3JRhvDUCkTXz5icv9aHUYrze19WHvTFYTnFRwT4UmVDKUx4apKBkzVK",
  "key19": "4HKX1U23JBWUPA8k5Mc8ADByXtowobrMWRDu22co684Twu7F5qPYBmaXi5hH8EhJrAREQXNo5pjxfjHeLfqjGKz4",
  "key20": "4rJEeTqh6WyVTpCjuxjYYCDMr9PRFAPhjxZZQDA4JJYrk9w2XEcmjnNtjzSsLwDoeBJ6C8xwt5ojEVtxXdYmfvH8",
  "key21": "5CkMNdsKkx2kw1r5FhHrkRQNSTz8hSFaWVu6aGXYMyFCdQ8ynoYjsn5pur7Q4ckm5FJGECqY3CZMRe8Jo9BabZAd",
  "key22": "3G6Vco3rTa2S4rbLCF8UUiUyF2r5Do22DK7Bx8Fz9xVUNR42vAT94gftmYy4tA2APPQ9tp9ZsgeLzBAqL4oXgWSw",
  "key23": "5ZJVJEPLDVT2cdugEwBKFsfeAeSHXi43fXYNdLtWUk3RYMWqA5TkEbYwFNwsonxcK9DpWqTshUqnnz5FS8AuCKEu",
  "key24": "3apYBztYQZQp3NG33MVvK449m9dXe4Vuiisb8P1Jqmg81mxiqtKpkYUAhYCnoj36Kdepk5GuvnJDZ844UxLjLYRM",
  "key25": "fN7TcnBdEbzPv7UZubgXrHjmoN2HEhuWiNJ411BHi9zvE57jxUB3F69Rby2zZfFZTEFabX6QHb41z3zF5njhACc",
  "key26": "4aKFt8tqL9ZcfQCbvdX8UGmgU8pbiDGoin53W1fqAB71Wf4TSsSAHmL4k4oe9kQDFFsVE9BtwpsdHLgw4jpvQH3x",
  "key27": "3j2pA71J17ZmWLj56iA534m5GiTdVqitV756zW5u1A21s4WqJuZoQQp4dNRtMHLDvn4QkAy7mff2XBCQfcgW9fE2",
  "key28": "2m5TtZPgjD3tBNeVWT3By8ciQXV4jCLiTsH8pseq5wjLxvMKyD2GY53mRZAs7YdmjmkgMSVJyvpVuHMLkgoix3pv",
  "key29": "nYms4gCcCkZrKcoYY7PLJn3CPihhjXay8iHybM2GTop3Ej4XHWokXHUxqSwxFNZNiJ24xrfFc2EcHMtycquSAn7",
  "key30": "gNaFwiw3r5A8f2raA8yT3CBqsgDn9Jd3rUndR8YW1m9Fs4SD8TJZj79pgFYiuVV5n7AZJfvwrkBbNumWiSnZ9FJ",
  "key31": "TP5dpk6gC2pKvgEYJgeEYzw4bWTBqnih9zHkqvLcAihQCeCMzT99jbuGW17RaLiepnuWQBEW724wUNXpSBTX7e7",
  "key32": "8KLmR4PqYS9mRiUbxY5uwiCnZ6AzVGResCy51DJWxxz8nxGFEoWZBmJQw6Dq1e11zxpdcuYqbZiAsAc3FuddsjV",
  "key33": "X7biJ6ePcjZbPgnDVuEPEYqCRaC2sdkjRXDn7w2HP6BWxqerijKiK3wCvuRdi1jNQRt4pKM6AoDoDUXn4d51WJ1",
  "key34": "3A8zEanJTRR5HrtGUak92rY9QgN3KrAyfF2CFMwwgoMUSgFwzD6T9yxpdGRyS8ZxhuepRwPF7rVU3gh54oxU85Ht",
  "key35": "4viSVCKKADe6dfKQ7J39b3f4fpjCiDiaLL2veLFkkjutwRFFeGLw6w1eyfV9zEurwpMhr1pZVkAtdC7QYTAidGev",
  "key36": "3qwNDXkFxxXjQKHgHYG341Axbu4u4ExrRpzbzTT9JgApFWQm9yRdRMh8ChP5urXLJmwtN7w1K13McKatTsHuL2Vj",
  "key37": "5g1TxjR58tzYXT21cexcmmwaLMGFAvzm62fMRntESsGcdywTqqELyBstS9GDLnQHwUHLVwStii6RyPjj2SnoeUBk",
  "key38": "5T1SWQmSSqCJNVaR52kcnCd3JuCHhrEAJEPiHVve6JvUN7ca1DHWKEfkrLkKj9kgHPKkFuXCBuGMkxSynT6M7d1K",
  "key39": "4vKB4C4cec2GgBk2iaiNVDvhDCZvAt5EkRXZauNAPCuUQJqcWY5kpsXomqJDknL3mTa36uR3EExmDPzAY2n3PVd4",
  "key40": "3rk41BQtHRCHB4haByuRhMWbnGUWC7UnBA3PoWyYJx8J9marjydEDu1VjZkGD9Rs1qE59hipJQkmeqMdbVxg9qhX"
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
