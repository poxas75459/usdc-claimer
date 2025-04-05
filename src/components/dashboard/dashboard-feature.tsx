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
    "48UB263uZgPg2yLbwtMkzEZw6o9Gd8c2Z9YDZQYicKhn5xbJG3n9PeHQ5Wzyz6mXgWPeG5bB7ef7aRgBb6VWkCPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ysBJe4uEu1tEjiBWfjyKJm79krv8NNHjbfVu74bwEXJtisECBU3SGU2fM3BBWRMRppVqZYMGggQpZRPa9EznPko",
  "key1": "5svWagT5rdWSzzTifXLACdwP8xtukcZfB8qffgboBzawNrxtWdMDqSwFEsijvcdueVHKEeyZkbzqUNSXjAWmVexZ",
  "key2": "5Lgo2K1znXA94Garu3KGWjzT1rpRNCQKzs94NEEiDdaPiz6mShhAhrd13hAMLj2n43xEVxEGcMFU9U6HZxCjFvy3",
  "key3": "49yXUxx6pXQCXdFCBNxcjgiy73Fjs87t8YMsPkJYbCUYfADeQnruLGjS2fEuQwnBEkSTtaHCWdGPPVq3cR1kCe3c",
  "key4": "5gDMgxQej5Tz217jqLpt9rGLcwHwS3wWjwoZDbLN5qFLK2hR3cXGqks15UQgg2MqphcLDpgF9b4CNRL89TE8LCYL",
  "key5": "3UVdxBZKhfDku3erfqB3WzZm9Y28CqfnPgHiQ3qjEH9dtx1cmfxwJhBeQXckwJTcntUqWDupwRNXQi9goqpLMBT3",
  "key6": "2tkEd9X8M2hW5ZhkVj3uTXDHQAQ6tiYffqPaEMJFzXXbCStuC2XoKnSV6Cr8ZGsoSbQVfuzLZ37HhGLr7WxsYe9v",
  "key7": "3RvEjY8ZJ5mFPVycn8pNwJeQX4ZsZamyvGc3WJ4fUwyyQQiSniuXw3y6beekJZVp9QFViJKdrLB5J3tmeCmdhvYu",
  "key8": "3RPXQSz7ZLgTe3ZF4UyxzTvuFfXj7tu14ggfRon8eEJD7ZuxBbRH7Ky1gwtWTHYKLG7BDgHrJmZpuPxmnECYmvsT",
  "key9": "3VxbaK3Wt9LNZwxDW6B4CYTDDD443eeZYHYy23UUFowZWdgdNBRcJmMtBVHqHej9e62kghpuUdk5geBkf8Kot7zK",
  "key10": "5jhL7HwQovq8NCYhcGGv1TAhaRCNdnAxKn2gTusAEKPfTygvrCbioLEhyZvbL8XCRgiQkB74VYpbk1sFKdDq7w8c",
  "key11": "5B2prSscWZcgrFhsHij1V4LzVpBcHAV73DsVxW4cijyx6Kq9Z4gLgTJ3MXZnDwMTMxMoVXjQUsntLdKzeoB87wjT",
  "key12": "2Fd45N2wZaDunXFC8EZHtSszxamQ8nZ5qDFvzTtYxY7bLGAHX2H4C3UTx2DyTRHeckdR56FkGALwTATdspCMqtJr",
  "key13": "1Z45bBHakWZab8QSWbiQFoyohhTqP1sBrmRBKDnVpD4Rg5Rw1BJz5ViNdAZxvRrUdgHaUHj7vWXEJm4tYVx7ktu",
  "key14": "3xuKWa68paLsAWPuaLKcT5KVp7wXwzRXBcp3bMzUMqacCV4jpDi7YVK72RYVtnGgprVhLkz4DdWqAGXEnwnsgvVW",
  "key15": "FGkLkiEayouGtTQQAdkuUA954SeD6nr9EDxJLN5qaP7kGEYtyiEA9Ck6Do3wwoJiTru7NwTaHN7CP5GuXHCC7Mm",
  "key16": "5LqbwWhKDKDRQoUjtaAZcMq8HVJjwpEQKTD3EFkWUScPATTWsPi2ZtBWwAu5gCJPtM4H5GfbVynRDR6nzULyHSxC",
  "key17": "WztU8S41ospHnPoZtBoEitzH7B3P4YRtzWFs38skB5BR283bbNYVDaRT7N6DXr4Cjrqo83BnfsMaWwPKou2FYA8",
  "key18": "5pZZRbMSob7wy5oBkfRUM7fCDQx3DMHvYV16B2N5ePZ6xskNwJ5oycFChSV6Djs62fWWY5Zxfpun6BjXjDbzS4TK",
  "key19": "2k7o9X7Zuug1AgowDKbZNwg1L5pwzxzsrNkiDEoiU7eDDigbQ1x4VG5o1qdYVrw1rJnfDXXiLQ2tcJWR38muyW4V",
  "key20": "5i8Liy2booQ3J55gUGeC8USeX7GbQXbUaFc8nWQFNWSiwbyDz6JymWPyL9a3SX5LJextP8txiNvbJSqhTvBsYEdQ",
  "key21": "5TKNQRkbpYNcGWyXLGzbUFSakan7WKS4NbmYQf2rgreT5yNAZVg1x2xeBgThspmAKXRvDuMAtX8biuhmiJkc8wtV",
  "key22": "3M6WLFL3z72qEJk5pYUKCXtPqCSf47D5hKacQ3AyPR5FYMXMKBNUMResa3SnrrV4hEHF6swMG96XH4or4EhioHJV",
  "key23": "5EtfS4Qg5EkfFzymCfkzJhptAJG3XdCxcrkQDe6GPvpThLTfPmEJrBB3JnhpU9eZ41F7BN8dEqeZArHGCakgoqgS",
  "key24": "5XRS9G1qQgeoScbFAceA56qoJKHQFmuL2nsK3jdQXz1uBMWjCB87VxcpB4wYesU2t71kbmgCDcERnL2uPG2kSnC2",
  "key25": "639o8zsrvB48oQCU92ppTXNeaKd1hyaUa4q3PaEGyrTV2CFf9yDYtNkH6pvZkF1WNG7sGWJAdTxrvKNmq5TLKMjq",
  "key26": "a29Qa8PF7bpUEw72wDsyFPCwxujbVzjUrHigL29zKb8aG2N5vMkpMSJPvhUhg6qfQfRNTqLAXX4bpJctVVHbBZf",
  "key27": "3sNyLFtTGGKm6Fsvr3nhhmEzzPijzunN5QvD6VimRAG8qXWnJMNzwZf6R6iygrqen7zbjTK28XhXauf3SLDmZwTA",
  "key28": "2az2UNEN3JYDPQYGjbP5Nj8fFCXoF6UmMC8KuTbpgJSCEqk7hyybrJ627Yhbav9zAa5jKoBi7d8Cap83jAwzj8SS",
  "key29": "dQiAEHi3AguzfztVZz9x1KhuqePvKscziCJAbmho1GbAzv5vZ4ZUHeS1mNa91H7bjbkeamMY3gPhhhzeTYTU3ny",
  "key30": "3shYqaYC2YVDCmkYC8m9ngqPfPrcVoLGjbkZNU1agjfu8X5K5y67VDGNCHV7VgZBdgY6MbVpmpDjG5V68PNStWGn",
  "key31": "42ksEevgXQqpDG2aoM7RrUvsLmKFeHxdww3LVKj4RAUh7Gx5obfXrxRTzrc9tN6Ppd88tndJBBt4V6phbwkCVv1B",
  "key32": "4gq4XrZkK8HLW9iLuRJPL7461z8JjpA3UwUnDLV1KnRp4KQV3tMXcAa2xg7M5BxyFGGDNZybHr3TSg8BSyGTuggT",
  "key33": "3NVD5bqhsGoMSxPoaCENTDiGEQfuxfL7oggWdr5Nf5FRw6aLffWhPffz9hUqCX3FAC263nYJJNmnKz5GghveR9Ec",
  "key34": "4ZsWsuAuR1vq5H8CbYgjbK8M81zyZXwp4gvrqNZ4gh3eSDHQ9GRnuZRDtnWTAaTjwWKWCsCZZ8mNEHcgnENuDQ92",
  "key35": "GWEY64r7Pa9rzuEgNZqatbFVdk3njb1aacgmdFx43K8cop2Z85Sk3Z19wkSEtAAfPWQ447R1LCyYKWoJEbNKxsx",
  "key36": "2xLpwHJEP88hgcdTFjH8pEB4YeeB8hnTHPeRzMq7Cms4JVGjAAxgoLMcsnWDuPDeGeu1HAB9HinLSDuSvbMDbzjU",
  "key37": "2Cn6XiPrB1EjTgy1LzqgoScVnyw7bePpp6SzeZuY6ULc6ACcUqTjUUVRM8HAn1Qh6xmJoBDJXLT171XB7BoL7Z7U",
  "key38": "21twgfjGQaQUVLHKX6F1upZ879qKL73GQtXwTQWdp86QnGAgSJLAqyvvsw8aw5bXLmBJn9zjU8BKg7fHK3aasocL",
  "key39": "5WkxCiHH1ed7pW3z4HGd3TDqdULvu5M1xgNE8bMzt6JpfjuK3GZ1eKvPjfUJZXsfySpe59bcLdjb85J8VJ6Lweu",
  "key40": "4y5JBNHTuobKLAhvVjbL4g3Fi8AAhXLUpBrKodSpJrcTWiCVLt5X16xNcsyBJ7DpJg5mG5zdkN4Epx3q8aJB2d6J",
  "key41": "4DEMVh4qtS4vUD1EkgB8U87w8qV1JBfBuA84f69J2aC25yxR9gxVVnkebsvKxXknNxJk7xNQPCXgkBxb2vcP5nrA",
  "key42": "3Z2Z6qWzydjqAJx2eVhLepyoMPgGf8SkHgXYZbrraywtzqAAXAYaS8Mo9CczHysKHkZcHnRzdrRr6j5ZE5U8vmf8",
  "key43": "5nP6LiDbuNuU9nVTsAvXk6xrQcSArjJR8eKpyE1sFRnpQHP2Uv74RxKx9oa9p5c87qFuaaXZ8jvwZjpkUEg8jF4g",
  "key44": "63qUvh9nBd9RJTSavsqU2uPEn2E5acbqc5Z8bAkrUXooBGtWqxN8ATMFsmqFwVQSt46vdi1ppiAhNMYFB8sWFQ4W",
  "key45": "2NGmTvDyjbfYPrUkjXxY1wUgTjvgN7ngiBpcEzX6fohnkevNxKwvgpgCQLstFDSUstgLE4ozrajZrq9rfQqdSdhv"
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
