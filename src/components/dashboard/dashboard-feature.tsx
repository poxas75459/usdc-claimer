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
    "jfFb68XLMaRZxPkHiNAZeFCRLZLtsqC4Lxo59hDdujHonStndEYmZJf6eDRNn91bxedaEm3nixdzXDo3PjcrUCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twcdAAXLkpGQQg8HiShGhiHFrZB4tPFsmDvBPaLNhVGmD1n3hpioTfW8FCiVwYUnADp9W7w2jxLM6Qo1wLgCE2W",
  "key1": "5tDkDgp49uNv1NQYnNKmFoXTLzLuaMUidGG2QGjNggNcBrkWYBGUgrSrSrh9icryC9yp2XNxPkJWt8bf3ncBfBL9",
  "key2": "26tkcrd3thrYTxZrYJz8oMzjqhh9GGCtHdkkpxwVoEZc12ECEwxcheYGSoboYSUYerpZMaCG1wymKTtGKvPV2JKP",
  "key3": "2NpMggmguheknMj2KyYQKHD9w4RTT9VtncWBjrwDRdMyHbbYe5RDA6HDdftpzQDMx2Wfo3SPUMX2GfWvsEmumE14",
  "key4": "2hppeXffxCfBGNqVGqK2JBfmHpUhX1dKCH4DB4Dc5vYBadS6DZ4Xeb95ZNspnknEfmgCQKySKmMvnVbejyDx6avj",
  "key5": "3LWTgH8xKGHeCp1MuVVTZP8p4qyDjEq7UQwwHTkTStT2fgLSj6mxLVLd8hje8dSjhFbnjZkMftrjpG5VpyVvSBzN",
  "key6": "yHmvd23wgTFRqKgMVxn6V1jnX4WSsBembbjbtCS99Z7VPqAmd6DKJuA8cbhJjDYgRQuSYGPVK8wPwxM5V7v9kfY",
  "key7": "35rN5gxwFoKtM46K6DWHy3GWzNqp6puX6iq9rX5vgt8ZeAocCTqbJpWP53h2fuTtevz4CnYTsP1UBD7wg917aGJy",
  "key8": "4cnnz89DNcZ3NKQj9NPRMBcvpJY8dVGBvChJCnrFfZJEUciLMvvjWtwzV57C3zcrbxcWhyJEupEBhHVkFLnEGueu",
  "key9": "26k3owwbYhytK1jJiJ8GMWduq3rpJTL9najj2UwG8yCdWsqHxVsCV8TgSUDWnEPFPpX3b9PAvbojL1KhCb2b4PU6",
  "key10": "3Y7qEJhX3YSBZ3cbpKKAQAMcq4KoBu9imnGPmhF88MPaVVYDbxpAHKZKxomjU2yEwkj6TgxSehQefqsw2Z4Ezb8r",
  "key11": "43jeK1LiBFpb3wAFuWQxgUuePpRBZ6DvX97xEoGkphmcsevWUN7BnBqkgq1Cv8RDQJZgWxTMwhegb1GQyVpQQTER",
  "key12": "54brnro74JwCLcNhtmAA9TjxMSeaEoDvxe3ta6bbzxLfwNpcvYFford7BaMTpgw8msgbqg3ok11E4UxYTQxWL56Y",
  "key13": "3ZJwz8YGAdFrdLsk1eNwnVrFWTZDJ9cVxmC98RZKKXaaicTtRMnye58LjDDo7YZUNoFYE58SwFXdPkSFFHpXvUQh",
  "key14": "ZKvzqyyHkFcswyPVw7Zj5biWMzzMbpTDnQMGgHTp2igB9e2HAGfqELJJjfmKbwrCL7zuwVqnoor9AezF4aijxFQ",
  "key15": "3xWzPZps5gafFF5Mp1pqkBzzFEtfkY2zp7gUYi2BuNibU26bJXRZw2Y4rG5cKyKxmZPbhFfHZ7bRJZdP4WoRep5w",
  "key16": "2jnRuxXprMXEDur4h41FQvAjWMMjxfw1GrSfXjpuiL2Pm5ML9KH94kbvLbC1q2T2HxotexE23zEwd7znHn6H8tTe",
  "key17": "45LDaQSFhGEk45pCsU1fQyd7vHXZYNAvJr2ZuvY6PyGcy1sFjNLFnCdFkyz8rRej7oeS36nuENnvSBaGieqpkjaD",
  "key18": "5KppGPd7tuY7h9QdvEAAGeSEaLnKjrmXmwVMrTaxYdBStEiX42ZXSDwrY5QHgATLPrbbCbDTrUxGKXkiGDGiwdc6",
  "key19": "3q7WmWUcZH4SYmStkSrzvffwxR6TCYaMbz3WzCUb52NKx9mpnb5QnmdMqn9hVuXWeckNRQgwSyxgKdnvuriL6r1z",
  "key20": "41xmGxjKUn6xF6QmFmubKkNCunbPZfNxcAYGE4SMRJ3S6VBCaVPc43Jsw8CjwF79ELTuJridrHjHVH77ThJew3Gw",
  "key21": "2u3k2Jn5hQP8HMi1dAi62WgJxmgi4Mdp2NVtnggErWJMo9zUyGjEkywvLwFzZa6HEQFR5aeHdNPfqthN2Wt1cFpg",
  "key22": "4zTVVqAbJ1Y7fkrFuW83bFz6qyWRXoERoF9NQDdP3Sr2Tym4pPg6dCM2uY9QMot9XR15h7bJoFB8eK2GUWoKej8Z",
  "key23": "5VyeK7kgahiciHVXxzxWvYduh7uzHLArM9fpeBWBr95pqNVpXQNEWmw3aDYY3tRWkrMgh1wQ9oEgvsFB5z3goBaE",
  "key24": "67J3BbKwa1PhuUUb5Yo6WsD3SxqNj9FpULT7bd7sRQFnFzGQyjAuqrEaW4r7tyh9QmWhMZ17kaj4SDYQrq5pKXDS",
  "key25": "62BDWxt9K5PvMnB3imxWC5V3AF7RiZ4n5DHvDZ2WmMBTXWZLb3wn96MDJQRYVjuDAcJeDkobft3oaFC3taUBG8yu",
  "key26": "37dPNWG3FviGYsMUf1JQN1X8uNMhxx5UTdVJ15xb6RUsEvdZDacLD6njSwnTLRRp7h1qvuH7hqf5YpkMQFNRViXg",
  "key27": "4zKXLJeRSphChEkieAxbAjB9PaR4ZJtipaGL1YLxhoGKgiy48hAP6jXPjxVHBErteYXa2iVJPF4p3P41zizwDstT",
  "key28": "22k4fb9i2QJxrTXmGJF2bnPEzg8aJGckmu1GV2BWVc2iVw83cUgnUBdAx611SHo221av6fDRoVq8CKe41yAzB2e1",
  "key29": "4QQFYqPSTHCvSb1FwGjzHXxnz22TrZkJ4VFqPBKBHKBufpUX1kHEvkr7cNWLtKU8zDA36mCMkPA6wH9pqQETzZ6L",
  "key30": "4izBPeeQ9Eta5qzoRQxrrhfQnJhZFtCafyWFsb8NE7g2ShzEfZ9J5SyDQJpa2XtR3o6oV6hdtvMvxTKChKk9g2RU",
  "key31": "3NS1PNYVGgqSVutgCSAW8JJ1f5fUxCSfUZk2QRJVAb3D21QmfubQP7zw9Gz8neRuwmkF9BSKBdAKsvqhjDc2qidb",
  "key32": "5mYJKXCWAXCQcmFoE1Jmq1PDttvws8am2dQ68scpZoyrn2Dp4t8GpotZUswEaCv9VZriYKawZAxpyjgoq81jSuqW",
  "key33": "38QDLo9BVWh2jBeM4Zm71CiTZjAS2eryLyVRmpDPJdct3Pg73nZS9yWipmE8t1WtjaKx4ZTpvfEGYMKTTNMF3LLJ",
  "key34": "2Ura3f5UZBz3vYJMydHEYD1NqAJS65TJwXongQh3sRxTTf9YfEyxe3jz1hH5cSzBPx7M3J1C7sJvMM6j5jLKsovJ",
  "key35": "wAYjGuvsUh8G2TFQKrNMasDnX4aAqQhXmR1EgFRoQqc7EJeFoNtghqLWqbNtrFmjduJ7cJZ61fxJVtb66dkKRvD",
  "key36": "59NTWSQgUTmfVyCgVSQaPjWnbYTgftKrrmZVxFiNEyWpW3foCQZu4mkmjcRYDwN76YcU9go4MpY2xph1L1FBXHmV",
  "key37": "3nnSU3H4jcBmD26LEQyGdCp1xFdKcy1QmFLdHzPeKopDPJZzwmUue6dZ7Rzb7PHMwmH8fUZARv3AcTJV2DKRroto",
  "key38": "4rXxG2mewJ9cqoPrkp8c4rdWTh9bnr1UWXDKSJy2SUpUkikHaVzYigLgFcf18XDdXWWHw249hnd8jr94hxxQyZsV",
  "key39": "3ofPJkR2Ru9tQKx1qyit2aFpAwpBVpridACS9CyxW6D59BidcM95YvpkKA8FR4ZR3yyCVjG4Z5tZRW6QxrJ5piaA",
  "key40": "5qJctgi4bG2wxbgSyumoWcf3eVb52b3ywGLNmoTULQx1NmaPgb1yUqbR3QhnrM9vhHobPxvSNmRGivBb733XSGM3",
  "key41": "3gF525LeEVnnk4VEXB6w9Ki49Wkpqi9ksryjVAtW5nWFPHf7LQR3T2Joz5bLLSnLCiyoebczrQqGGzWSK7QDNJGv",
  "key42": "4tmKhe9parFNu8PtcHHvipPGp3ZGyzZdanWRnFVwctw6gB4nJXiaZtArk3zYP1qJkAy62MrpPjCkktbGr6Npc1te",
  "key43": "2JGCcuxfGdQRWYL7ZKaHk72PR7Ets3AzXDGzUD2fymPX9FX6scew7mwh4WseSc11HfCAkMdLFZS6z7ZGr3dMqE4r",
  "key44": "5sYJsrifCNMaTQ4t1LLNDB7HZnRBge2Assb1tyQS9v5bxKctKXmKkWgpGiZHd1DwQ7vXhw6UznnpfhyrH5nQY3cf",
  "key45": "DSc4BNqcLdGqtUv5j4aiWrZxiqbL4SdmgpVYBSXRsn5rKi56EXr6MRekYiA3iaj4CmssDdBb5BjqCnfJ11VehrH",
  "key46": "49zf9nd2UEFUiVojMn3kVUGFwzNk1LuuFfdRyq5LhAcba9UJ16kXkwWkddUd92mYdJvinWdwYJFhx53N1ga7te4K",
  "key47": "4QAiMvMSqML8TdkK1b4ZtsjyCYgzG2AjRVC3tZLcDanfMsBuAdg4g13km1rPSA8b1GofmKSEZgcGQ1FCs7H9bjvR"
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
