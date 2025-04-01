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
    "2RrcmysMtyxdtueobjWEnSBHBTw2uSqHCERHvYNuw1Kfytf8qV5ZNaqcfpEM9NKG5aN2EUnRRNL2ZCc8QWWmgjU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UTPegnHHq1PSmvFTB77PJG5snE4h94jZ2Z6sX7C9M32xWUNkRwD23jSV8nBdP7ciisUKdYuVLWDWXkhQFqnj4je",
  "key1": "3houasEeixDnCNxMS8gizKFS6bFw6vcPhVZARDejqWThTE1kidDWXcbJLVeagMyLxKruw8Ksd6feqg91WzymfW4v",
  "key2": "4kgBkGEBz8eXKEbwsumsMgdssu4X1EJhUzD3rb8KK3asRRiuaoDWPcocXPqv2MfSKc4xnavporox79m9tAJpKTvN",
  "key3": "4ZJT7dMb7zuBuWpUUGPm14P9HJTdgfMQSLR3R7MxiBZ1F3LmtBZXEUrYo8VDAFqVbXyDpoyZUvXt5RPhcQaBfRiB",
  "key4": "65yz6rx5Y4eutWTwFpawiKeqZ93Q169pWgmZWBVxGNKmPmXvbkSDWTeKCB8M1ny9CNDwAX1qqEYHAG6hRJpz8CW1",
  "key5": "2kviMv4Co664nrhU6s3e8LAbTamdwyYESRagDWj3M1Z2C74XqCd8oy34P3mtnhV67oB8jJ3vxagu2BkoxFtQi6Jq",
  "key6": "2jHnya6MDFtHgWE67fvZ96W4CaztkkFB3zzuNrqwTxL3wwuuyopBg4W5JFKvntHJQPiwABDucPd1ng1z9Cpksnhj",
  "key7": "2CisyMYeCqwaj2azRv1uFDaRJjTEMMVpEjM7kmwoBLGKLXpSSCwisVSmQNH22scJhsBWv7u2bqWVrPYFmAMHPaz7",
  "key8": "FGMfpQRjvuHKxjKtGS8CARQMfiBbP16RejpaRE5jryQt36bL5GtfvT4T8fzvvjteiGDsdwnppVTWrLBtQMM8HXi",
  "key9": "5Y38evbDwi6GghdSWQzLwc823wtKapwza9DA6bud9ZuNpBrDkRphk49qYh4GAzePfrCedeboKY2AepExJM1QkU8G",
  "key10": "3HqEvTtZ636yd5qaaFWJ1MEnA6u4XGrw3K7QNmAJt18gFsyLCJuEhtWTsb8bZt9yRdZ1nTYnbKe1kqk6ooDQd3Uk",
  "key11": "4GX5PqpYgN1iNbdb7imUk6A8AsCn9uKFaqP6YyPKAttJJqMVzWK1HBzYzcj9uTuMK7CE9t2TqLL1XfVW3aabeCE3",
  "key12": "59S5KJ9jHqG8diA4X94vHiNCYLhCe2zTTUCR4N9CEqQbrQSoGynaqHLMDdkUjQ5bzyZdxetRiCtQY7fjRrcpvxtW",
  "key13": "28F7sG4QVcXijTfqaeNF2JjgusYFJJd8KwGg2WWmvHY7cy1QSD5gPuhG7ABDgZf19mz13eGXBYFErn1MyrxJf4og",
  "key14": "CA2n3E5Enxf8maBba6SJzmANkAnMFGKYyC9h7yPigqeyYYzv26NmjwKHGoVa99SmwAFQZAwbhSoXPMjNKQv3gPs",
  "key15": "2wuvHAsxZTYDghcU6Rqao4EFiD6EutBanVjUs7jvzq3oRkHLZyHxCnFuogE84Vfqz4bb3bsT3tXSEYRCcQo7umM1",
  "key16": "aHNVmVbSn8cRAjZj6J5SJJsPjkevyePwGL7G9pBaTTM6quRJPjAbgCopyUhjJ181QKEUMUtKMdRf69jGzZFMxKd",
  "key17": "41XYEqBWeCbsubn9aMpCvWXVxyWGYwKT8NbFSVp2cpAgQMtV1LftLMX2Zikh1ySv7DNFTCe4aTUCiyEAwBnZxVyh",
  "key18": "2oxMsMRChUMGvCrijs8cnMxbaHTbaxdJWFQjthr7nkW6dmUF8sZTp6Wy2DBUZn8BqbrhL7MBTHLqHj5TxGEkw5kq",
  "key19": "4Tf5JQUGVPMv8F76NzGKdoGvRrkXrwnqDV7vV3pm6wSjc9g2shCAdF3mKGSVLVpX7mjQp99q6o6tiFRukjrNeRV6",
  "key20": "4kEMACoqBZEcrqEvf1qx1AvQWkFW6Y5mwZa5ijetXTsKcuPigu4CatduCcasx6ZREc4eTPPWiiUUi1vtDfSkL2GB",
  "key21": "29Dw4MEjgkzkRYnbtBdqEYS3Jmy1g2CjgYxTkKGRqtmVeFyfXARhYKM1Pbpe1jUzqa7w3YEJmE6psHnhkZWqWpaP",
  "key22": "5JvgimknfzJrPgQpEZ7WfYoBNKRKcoQ6AWxTXLMDMRUQxKcMFcVGARCe3NC6ucy2ZkQX9akLDBcLrxn6jCJJJhLP",
  "key23": "65gxQtisRvg61rcX95NpPRKid4WY8LPM5tQ1wMsz7USo96Vbe66Bhz9NqsUYzhcj919h1Wj6KhPZxZJ9JAkaPeCN",
  "key24": "2rocHvsTyWkimtYNVd6eyb8QQ4gxT8SmLnMkALbvorkEDzNY5sUXY6A9e3MW5AbznPdrtb3uXrRFgLMJv4hVzdEv",
  "key25": "5s8sx53MwzrapjcmzUo56GiHCXspHRbSzVBApSuGA9n6wTzN9fnMfAp7zFhXtSgvQ5bK1G7Pv6bANF2Tmk1JrM1x",
  "key26": "bGXaP81phqSHKfTTfJNpm61xPW5w5dvpo2zKxmhWdYy9Wdteaog11BQAC9RiESr6o6kkZh644n2rqK7NzcSPvVi",
  "key27": "5UjQFtPKJw6wZiDQJG9eEd8fy34T8fDVC8ErfMhE8f7EBAq8qUznbYkrEtrUnukWBFyJtBzHDJNmXmrmhEaqthpZ",
  "key28": "5GdWAnBrgMJBXN5kkpcj8noUgbEpnpWyWaBFZQBetvAqhX1dXoENh82Cc6ZzFAkG5Ce5VJhk3TJALwabDqvqss91",
  "key29": "3GWMv2SxsZHsGChbm15qFsmUj1PfdDN7wuNpk8NvvqpCctk3SG73TniF2VdYLpPrMS4fU7mpXXMPSeErA38sJN4U",
  "key30": "2GgNZ3f7eTtYjzwtqN27ZjbYqVrPRcU2wjzkkQwiS88bSjGt9hDt77vHhaHivrSLgnGjDt8chgAhahZH2bBGPyq3",
  "key31": "62EbhKb84kAQWvRH21s2kvW7Tg6tj4Ck1483zFYQoKUyJ3kqWeH3Ej7cT1kr8qsVNb8xKeTx2DxQWB6PKkavxqqN",
  "key32": "23HAap8kBiqZ9ymweGLmqTuhQtdsy3Xby9L5eWJLv31zJnHwVb3ntqRyuq6RAgaybnMY81Y6meB5dEazKkovDvwf",
  "key33": "ApbDSCfyAC3rB6eU6RATTWEqkNhwX24MrXfeLMDpycAzakQqH89GGsbDh6eG5EPPbxKg9jUJvYAL6SUqvY5R6qW",
  "key34": "CRCJ7bieMfDf6eZMwuFHo9izs19L1xKQSsMVAVQhnCkRYMRxKSWHJxv78mhmFbCffX9Xz4ENe6MbJQZtRWRUsor",
  "key35": "pVJV73rjdVVvfLyCgtg5FDzu7B3pd29e1SLB55eA1Z95LevKmRTuLtZKeHLmpyoHBV9jLUTHHZUBwKxJeSnVdzg",
  "key36": "3FK3SBAUB1ngXkL3tbLGJMo5cDwRneNkiyiMRqLmWUsL32gkMde4rmM5oqyUvAMoSmXAuVb2GAsp26hdLWk8kwAj",
  "key37": "2tp6J4xNtP9iYrudQovsP6qRUhGKYrS6iMAGCAqx8J9ZmGEGKJTaiJtAUv4B5oThEuDENYEetbHSotwWNFYUPX3w",
  "key38": "5JiuaRnMLAHiMNFiwT9TLFrVKLnRK4tS6uwkL5cHViqWnCwsHynqjvkH5vKPDbW2SctWjH8Dh4xeeZ7bASgXsJo3",
  "key39": "3jgweUUCAbf7rzAeYT57zfY7bZ8PDEkU1AGU7V68Sjvh9q1GhTMKzCdL19QWCDpA4hBfT8SM5BkEAPzspJBtyXUf",
  "key40": "XKTGiqC7iUinkucweDhTCYHGMRMAJn6mbT7aMPKDq9szzJWeCs4LTTx7aTwFP55VdNtfA6GnMH5pELNWH6v9wLz",
  "key41": "4ioqpQtLXn1N9YZKmU9Xw8xi3hCD4Eamxb6SFufLpD5JKbaBT58KkCfjiQqx2KLYbbibzvpBpTCNQjMKGRgH8Jm3",
  "key42": "4PrYziuEkEwnJUaSjyyfsemZXzgFSEzFr7mN73Kp3XN6bk4hdEifaZqCPk3yT3tG7YtNhueRfVQdjhZhg7EebwTn",
  "key43": "2rrxFJqCX79GYB6DYwVvS8sPWLxgkYdTnyzFbepN4d5yeoFMwTSTVmUrRDpGs3ucDHbScEDLHrjwtqZpkphVq9VL"
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
