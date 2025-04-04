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
    "3msoy7xa6fsDXkxkNRSQbmtS6ArqcY161TREaSFDXxXydjTRLfw4NJg5t7gRFGhbU8rUoTeiP1JvjSZ9asW86qVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42dr1prnQcev51ZeDhdWoJSSu7rsPeppviur4aY8bif1c6ext8ncbowWcasnKrkLRYs4LxCxmXHAmvkdQJNa6J9H",
  "key1": "2sTKjAupEWcnpPh8igBF2EMygngXVe1bET9uRMfBVQC2VjSDjsmf2CwVDQ7RHgdCM2Py3n7TPyit8FoKjJq2RtNe",
  "key2": "5Xx2wJAFj667tQ1g9ifYAmYaTu1mQub52AvQcfyDjDoRmGeH5QCGeCGDdm6T5mdBTBGpPqBdMab9ezSTN1nPisfC",
  "key3": "2akzzz158pAeG48Lxiu9WMorPrDkFE8N743VquEgmKYM7PZdVYspik7yarjnGuSpwK9Qwp3wx7Sv5trF6VN3LtXs",
  "key4": "Lf4V1y9QUDoDUDQx7WKevSfy9vfsqZQe1Bi1UPEPymzGN1xxhMS4og7yoDoYbWSgMgyxjSuoCWpcMFPkJ2bzwTe",
  "key5": "5qYDPNtVNFxSNSiqXuSKRVYeQYoF4UVYcPFbmWURcbzeWGN7zvPRqUY449dchV5bLbDhT9PRvfNS7qgguTmaLQQm",
  "key6": "5uhJ8JCtx46M4xp5Hupdjhq7bXqYod1WyVBq5sWKHHbBGoAh2UpkMqKogf7ZM4cLDT7rcFbnVn7xasXhBMf5HQwm",
  "key7": "5xrbuWYfPRtw8nQB5T8fL89gRuMv8QAXiUwCgN1AYea7VBSo5Ekk4N5qpaUwAY5ELV9UnYdefyTds7qbNavxxvvt",
  "key8": "3wdU7VMkcCRtEDmDL9SZPAz2qeJKSJhj688Xw79tBwj7dUFa94QrQHmg2tfsW8o1nHfspEPooDJ3WjwCqPCphz4a",
  "key9": "4jszKRxwrTjvBPG4f4D3gSvYdUhfEXcXurQMvnFaXDkpG4zM59N9wBrLUtTzgamfhbDVju1mL8sQT2ufCnaxKN3Y",
  "key10": "29nAGjYQGXaaGhTgvcJsNFL3VCKLCzSccogKXM9qpSNXnRtYCPQK1RrbsTAvS3Q8uMpuLsRSPJqJFxAmxFcXJAGz",
  "key11": "4ajhvo9ZRkJHmUPPHpBiSf82WfU14mceqmXFqkar8bh5eXaZ9yHPyvFZNtB3GAs7Ku1MRUy52kzwxVrALpnrdM4R",
  "key12": "5nEXTxLFKDcSjhgfN1LzfNyY3A8oHkJFchyWubEqRacnJibRQ8eD3AgGb5shim4BrutEudhGmUxxMEgsXaeYFHrA",
  "key13": "RWSRSaRDCqViqHezGer4rp8sXkbgdMuGC1X5WHWRffzomQBKzqGJ5VKLap5xfUtNL3bPRYmkrD1XfxwYo4g2W3j",
  "key14": "YjryLZh5S5KBcUzR8RjcdP12LZjx3keuDxHoXQ5AQ2BJVDrVkvfCBhdMrkFzxQxcwZeU7gAq6LJkbeiaKqbZMRT",
  "key15": "4HfNV4GKFAAt5S3R2nxBiYkJWxjRGGDsGk7zpw1oBTK4zHssE8Cujsg3a5BVhRqvL2dfqS7phYAB3DScHsAAx8fN",
  "key16": "4wYqhs5VtB1rxvyWbZuVFMA547HyoxniiQx1szK9sXYqWSZbS2NRKC1TbBbeTU4YHZRgr4EhABNS6EBN3EX7v54L",
  "key17": "pkePiUNpLWKnpUTcaAQZ3EKpKqSy4DfueHvFD55RgrNiMUUaKpkRrCQUqY55VBEYLJMnEbACDgtk578mdSnDy1p",
  "key18": "65rQQnwQWs5kFHaLXdU6i2HvrNP1efXef6eBbHx6pLWxTP3iy44eK9E2trHsCKc3JaV1sHTwobv1j3kqtCtzgr4x",
  "key19": "5tz6K2kYF12kG9C3KHg3C5wpNtAJYXHqAD2qYqfriXeXoSYwvfXRydzwd1pch5jKzuAsxT1FuQFqGywrHjyHwehP",
  "key20": "3id75TscBvLmUzJZtV4BnzRpKV9Q3DSUn7MvfrEgkjN4bXUJufz385JYimN9jLqjicCP6aGT5yxT8zf1ChPv9iLk",
  "key21": "4DokmiMFQUAAT3bE446SJR33w3C5Z2RopnSnZgESnBkJNu3Wj5oaSBN65npBjSoeHmQXg3efKKqAT7Nw451ugWVF",
  "key22": "3ESwrwY5iiLc4qvcgPs3NN3Gv4DrHRzWFHkrJ5zcZxrt3kMjSJTmKLe9ZqibNSY2XFJSxnQtm5n9iLeNf6ZeHmUQ",
  "key23": "29DEsDdcXon4KP5tnK9hVf3uhUUnAbBqv5BHzyaWQJKQGPJh51eStddUSWQ8tzhdHXrtYiCrPXMVrKN4K56HcTxG",
  "key24": "qubRDvENr5n3oVb3bRZwHFqJSHAVcBSvw1aMwUAV2G8KFydqV3FPavC8Q2UJykHv84TKzHVNggKJRRvXHLdgVdc",
  "key25": "4aVgd6VrfV86Kx9VkT13HyqdGxPZUapnw5GpsN5WPpKbJdFy83yTvXjfaKhH4q5rkB2a9Ln89zQMVpbGe76Ncg6N",
  "key26": "51gUWjMnDzMMGDW7F7EA9yGxXyaMvpBgHh1Wmr3nu88FsbfrBrbnMAuuEWznHhXe85HSi6ppuB3xaDprJMmPPScf",
  "key27": "33JxC9BYnGSkT5HKN8cpMsgdxbpz4igJWs7PjvqAqGEoLEPtYLo8o7YyBuZKt1ZVmCCbBN2ZrFkkEKA28YANobur",
  "key28": "3f32oLp6ugVmjt4XCwS5nJ9cLem8MVQtnDDvTdH2dL4aKASeHbL2REnjbUraVm5oHrbUHdYBeAjC5n53UHmqKUgQ",
  "key29": "32Zxgfez9YEir4VNUqTZGpXBz36W7hry2RfQSMyxL5bX7hB238ofDMEB5FakEqVrahiqEx1GgGPbiUPyoB71ESQf",
  "key30": "2fmjARdRwma8p3Z78gBEoDWNroBAyFm7NL8coerkyZnYwdpuxmUDdnt5ee753qKsScnZpJojMN3X1MnQerznMYEP",
  "key31": "VdYzkw7z3UqAJVEQMVL2CTKNjd5kpVrNgnzpJ37SE5EmGGvcF6Uxk2eANzewgVvD7oJ1k5ZazQPDGwKiBga2Ccg",
  "key32": "4avxBcfRYrP7JiLSBXWuyLgLgMzcEPE3dAbY7Lr4f1oEGxxjzkbY9rURZ6Lcg2ES3KBJToMeXtfx4v9SoJ1QkErs",
  "key33": "9Q2KWW1dGFaicyFKRSEbbaoJoYcvaQkUW2r8q2x7vTRo28zZ68ev3KJt9j1R9kQzKB8mfpbLLtKxXcLLrZZgkiB",
  "key34": "3RaF9GTUZC5R6895vwrebFF3UUcR78YhJNgrNgqb2iFreKo2DGFooMjU6vtUXh4eEk9TsxT4DTeSaB3VHBESzhzv",
  "key35": "2dEGRF1Ljb8t2gjy1fJVxHffYXC2rUx3TDHy44pUBPyyjxXmXWZB7QaCZrjDdoCmjty1SqbcjGDp3ZfWd2TFZj6a",
  "key36": "266HXaSSE6ddbTYgumQo19SN4eWSRi2sHJ2PPcgMdeFb6fGYCYG4Pb2K4rZxMwfYsLPXhTZCYiA8U4CUtwTgEH1d",
  "key37": "QazkKGtgNzpcYNiWiYLUS4smPRMMbLjd28qrWRvUhqyzXNjy3e8FefdeydwpVzVbNEGUSdGG76rqw7Tq7WcMCZi",
  "key38": "27iWgXvr4GFcaaVF1o8jYJpFUqfpReTDNNbjEkVerRRi18nz4cR2FxYydLCKGSwasVcsAkHW7VpmfePNwGo7Zcrw",
  "key39": "65EryqR5kKpGJvc3ygzuMhSje4x8FGfXM5ETL7MqfFeLiJkNZJPcHLdkemutSJkzuzd6yFPbT2zpDVMgKtRWnEDF",
  "key40": "3rshSFzrAKMLgptZTtp4xteq3zxkEBv5QYtNyXd4XonU2iEqS8CrSe9utmQ4VajVgKX19MfxMaT6rBY8tRVVaoGo",
  "key41": "62ckm3at1UBrSpgpgRmeaRRK87u2Jb7ouduADKURBBeUs5uWYPc1j2AqJjzhGVotBBRQZxbPiHwjNDriKY7jmYsm",
  "key42": "Rs3XVv34bgKc9xb6PVtCwfKmTCwoawXKXvQtYB5KwCfedeqM11meJSPiT5dyoRh79ui9AYVyHneCwufe97gYS32",
  "key43": "4DzefkNemQH9fiCD4Ek2vtRPMdrVpgC6Uno2j6pkzanr115DidtibwNpdoCCHhAEePJKGCDeF4neqWtqG5d5GyJX",
  "key44": "2dgCnmfBqaMbLU62HTk9HHMBxNhDbwS7MNGwEg4kY1q4r8jJwduKAQSisgyCPjxNro72f19qc8eKi2m2ZjWqiRmq",
  "key45": "5ZwLb3zNvbc5du5ziHcLSBs8HiukDZCSp6nafZCvxJ8MJ1qzow6JzJVzwZ6yaYnSmkTomYxxADyX1jjGeG94pmFe",
  "key46": "AfgYwH599h5BnruL7gjzVh9GxKs6qUEEGmL1UdxTDQrHs3JS3ECyvMaCbvjvtHDM4f4W2Q5KqMeipMwY9Vy7Kp9"
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
