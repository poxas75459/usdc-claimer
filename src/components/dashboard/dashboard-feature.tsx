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
    "2fyvauEz3gxzoB21VFtSRevHySiLgCag81xK1dtKKJBDyccNEb7cYWmgCQQEvqQCewYbF9uaBbzzw1pqrEc1143L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PpP1kGM4jSLvrDjzbfd1WLf5b2QwU9udrKzsxP5VNhHtk4VMRcdm7KYC5jQb28wfbwt6qrvMdderofChBiKFa2p",
  "key1": "65u46b3xtT3da5KMDzaBy9gvjS7n3fGk5SP6e1bE3zewVv9upawr8BAeJjkZDRVvRJRoK5Gy3BfmhcUvoJSxXBEi",
  "key2": "325jGcXLWsLigAf3YNZtF4XfjA64RGJ6MxJ9fzmgw1irAXoojmSBjAfS9CTp6AZ1UEdmNcqpdWTfnVXCnG41ALWh",
  "key3": "2C3enA6SDAxJUkJGJE8AszzhrQP9zxFEDbhGEcSSvgjVzvqV1qnrdNJtY9aiXhvCRXoQ2e3wQJT3bKtzZBsmknuo",
  "key4": "2XUEnNBWLkMCmbouNY2mcB683huPzDNxz9VsMS6tCzPGnSejexYPpBxGLeHUxF6Qb6GFin4dswGaFtsKjt1PPWQ8",
  "key5": "5MaGa3Wg88K2MEjQqjDdx7CFLpDMTvqZmdzzcP46GtfZv2YhXtXTHL6VUiwoGbrjZbdc6dobQ8GEsVsFJpPX58U7",
  "key6": "ALtAXcqYmqqvy8asnKT5VrdKWDZvhWT4mwbNLatmKABmtB5rSkH54jZBWaUSVwM7AqjmC8DVpTRrwAgiGi9zN7K",
  "key7": "67T3R4y9r1cNkkq8XU6pvD1sc5MYBbbFj29KVYUQ5yYKASdoqj4xzKh3iPHASvgPhGfxUKVmR8giHGFoTLNu1ody",
  "key8": "51TUvyeTuWQYmL3bFtaPAVdFfSherXXQuuuiK4EhUxrqa4Mimh2DxtJy22vxowEVkFk6NGnBzmniz4Qyqe2g5Zyq",
  "key9": "2hJjiVxTWv7CsZLw2DHW6Z1q9q5bS343pcmQuXJaRW1zLRmppvSyhk69vDNMhcpGtK1C3bXbnocofHmo2dJpvKiD",
  "key10": "2WudYZXmuYbeJVtAHWUsk5xDFJ1B5Wm9GiAe8K2MQd8MomqjAcBvCxqhLr8CsyySxohmbxEhNaK1yFzf93XDsNFB",
  "key11": "64KAsRhjJzRRVNdFi9bKKBVNKTjGomcYQkTXNZkfJmEjmiH9vqfALdjawMiY5ry25qYhW4hyK1ZUZiQQbUK2BRvm",
  "key12": "5dLNwEZxPQiQaZRsWm6FkYUYJe4XD9FL3CBPtLqsNaQyWrwyQaJFPSzhf18ftc4dgZaNRYvxkM7GscXW1nSrDhiN",
  "key13": "3e7itFKf9Y3mZAqXMQqTVxfhXwTx23eUiK5i6hB6u2GDgxr388prttpppmBoNbk83M2uR5Xz78J986LEN5Kho9LV",
  "key14": "t6ezoULWqCWaj6wtG2HvkdnZqDVEmxYgjqdmDKK6pqkmJ83xtfMUJatG7dxM5utHjoTZC3jyXmVX1iwXekunHD3",
  "key15": "FjadiZ2PKRv3m72h5Cbn3BUGvCnW3uLm4LRaEt9sEiZWPEit8FpnTo49yqhHudVvNYJw5c1aUXXajkH8ByDbgFb",
  "key16": "5SqTvNjL5BBvTQ8M4ri5SffWb39RG46oUxtLMRWJxURWF3B8crjpSQfC1Mtrq2baaxaaMhka3DBtfzeKdT55Rpqa",
  "key17": "23hXXprFJPwGtXnGrxp1h7CmVZ6ea6xNJR7FTC2QhmVLxZGMqSTxRBYLdPcAqkfSc36gpk47RzxTse7GJ5yEUsQn",
  "key18": "375d1mEUjXGGy9q6DmGPndhgVZAqFThT622JixYhunsueCB8Qcq76hMiERLZd9KvKkegut6TeDedMxVh8owN39bv",
  "key19": "4JwukAs7ZxRxHhCtpENDVhE723gq9qyFeDXbic4uMnDYaQGe1Jckn3qQMXUoththWpQRw9wvdsGexrCA7WM35vsc",
  "key20": "fLuZc7Ld3uMcdyzQuYWnkCnDLYAi4cChapj4Bed9WDtH6hxs49cBAmv34NNDvU7Ps9zsRohiNDSFMfRRcsGMRHp",
  "key21": "65DzNgpwi1JsvJwjgEZB5p4LxU4re4AUbsXWRni7EtNxPxb9HNpDBxtyjM2w2o9g5kgLV1ZduBTxnaPgzHgQC5k7",
  "key22": "Gfk7FDGoSRcLvvz9t3bESa1qj6KSFnFKsrq4wCu2pHtNevUkp9CCZy3pisBVvuAZLeCyBQo5fuTRCQdZJxDmJ3r",
  "key23": "3fGHKDfBVzRbYvyccyFT7H3QMaEBk2K4pQAjfwTfv512Fpom2Z5MPxX2aMYjs6ZXCdiBHeAoYXV8iBfVqHNWjuAH",
  "key24": "2148kb5F339mdwgB7pEFq6TbFkGLKv9Szeph7aGAjiUsFxj3oFwKRySdGyFG1nuYAVNWfwccnVZnQZ4YyvaGPjA5",
  "key25": "4e9b5GB9vre4WbTWAf5M7XWR5NePv7y4bAx6z5LPSei9R8X4MAp2y1LqUkUbVZst3W1eGWArKBjQxHom2FRcFraP",
  "key26": "4TvaX4rY5QRGNER7GQ4GyMJbLds9eAJnFq2u6ybjvgjitttL8jVQjJoQTLk1SmJiUrKf1sxtCiFzbgoySzsH5cUx",
  "key27": "2VmWiW82CtWgZgtXXiYUgCSrZYgQQe96bUciBwoMrqNB1X2V7wYna8vhUVzd8JNDdgtsKaniWBQLbVE9pm3qMrum",
  "key28": "3KTU77qdiuF58xsvAFj2eBLvZcZDpXV1YjHUgnUBkPpQ3oCdApWSsaswHV2MBGD5MqgyvUJT1Q8h3Yirmz11tTxP",
  "key29": "ovWKr4uDThfYGhxKyXX6GDdoSzR8Cr5XRmy9BqYoXzDgMKb2ToGzK2frjAu5KjvtWXuKTWNP7f2dHPT7e9T6GLQ",
  "key30": "MLVTSrijjo929GhwFLkQQrKszdDKjU6vHANXXHNKZNaELoAcaYo1xrjYrnXUWKtGxoisuHHAsiGwMTWPcsWjh4S",
  "key31": "3AQiSEJg3TKsAmv9tS5UixkDgzTXBg8iS8if8LnLsjdV5HQKgu4RCSCcME8kXRynqpiYf8qfh5x1TNiToDYQn4JA",
  "key32": "4mZGMhbX3zAFyBTefb4CtNwC1gMVyGdidQQNJ43om8qRmyU8TAbnTf1UYyTHNBf2YMTCnktmJgVpNAq2F6iQySQR",
  "key33": "5CuFpBGb1cKzfVo2wRgvsfEZpC1XPXaMV5KZh5rzfLRqzBufSEUnQs4ZT1PMjAPsjBfQb3RkfYcHHnNvNAv4aweF",
  "key34": "5u2NKxbRivjwMFwqSSsh66oLwKLJXjkgj5CmG4W5ufTCkUsoBKjP1PvXJEpfDUViEHN5xrqq6QHihi13dNTdbQc3"
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
