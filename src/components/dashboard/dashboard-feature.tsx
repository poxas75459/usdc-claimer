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
    "2EgL6mCxCQKZrZK3cM5jmCcT9kMVxonihXGZ2PdR9NhmAqoggyNMnFNSZn1QNJNgNrJpXSFWoW3RpDNpbwLNTqde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bpMEkTcUrc1iHJo1u4UDwLB5nFHF4DWJjp8jPCY9dLhZpymqJ2bT8Z2bcrX8gFJUEDDH38zwKXhWKJijXF3idbB",
  "key1": "4wDv9mtchgdVByeDhbUtZq93K4wsdhPUNuETUbo98jR2bmsRx4CP2nXkWi2rSyPS3eZxTbQRMcjLtvd6SFgYrER5",
  "key2": "4Jsm7irLhRD119J4LonySExcxVSmB8Frybsy8oDrYCA8a9aSFnwc2iXGsLxtD6SYLSkmaJLeKLMc9SykW3cvZ17a",
  "key3": "4BGwsiqAEnQ8PF9MxN2gY1JBzWYmmEMfEeTt923neMpdaxPpzkjnbVq1PjCdN2Qm6hN2fCb9va8QmiXaQN8S5nXL",
  "key4": "616MRqxJSeq9djdwQhawj5jh4jw1Vetg7WW5ddZoBun8S3afjqVLjwyDnhfGjNpZbDBFmgvbrmgUQTQde1yZQdMF",
  "key5": "kFU5cucASM9igq2CNMu6o2UKYo2DNdzQ7cnMTp1wxwCSuRY3bFFAyRZDp1gHE5L24nwFeZN16qs5icV8JsQgje7",
  "key6": "87haeQheHnyGQNhqCgiaZX3J6qkie27K7UpZt5ECf1N9aefGXczG2FLA3VCWjSGiWeGTxi8PnnqE3VMH4sGTTVY",
  "key7": "5icn9tAnVg1aWgV3nrRiT3UA6e2Mowj7g1NDtRk1qA6EFxH4CofQcy4oWFstVcBCgVtU6tcQtV83gBrG7FnxnLc2",
  "key8": "43hpGA9JtQyTfFErqPh4vDvUXaB5QJW4H4T8aHK5jcf4qetitkiVQw5bomoHEaXEARUN9yNmCs1wjBHnhgNNtUiH",
  "key9": "FF3c61AxVH8Ng9yqJsTPWDzWCaNFQNUqGcQZXdsnqacN1LHkBoecq3y9mjshyc9VLozZSzH5NTp6r5pNyxXKwYN",
  "key10": "53zLU8E3aKc7CRpTpMawHGbJFDGuVCE6Xgf5FMnUDeUxtJhcbTxReUdFJxuKSxWvhaQyzd3gb9tQPXEz8jguGW7W",
  "key11": "4paMf5iGFHZegQW5pTYJ4tmXmiMuCRBeaLkz83j7rjh1pYtW3dvfMJj6RePitjabmnwXWd8YnjkArd2i8bzrDH1n",
  "key12": "5xas3HWxqdn8fqt4cf7iKAHi5nD25ojztQ3R8NzGaGxXcS2p1vcvARjqjjqT7XraL6mSReP5Sy6RRrhVrLzw8T2W",
  "key13": "3CAtjmtgFP4QpEpcjoosFEB5HZ7wCV3ZiRKNSh9T5LupJRMJj8VimpT3GMhnvFH8iDTUr1SvA26D2QpG32eUax2A",
  "key14": "66ruPEyBMx2JbPTqS1ouqqRfhq6LQdVrPwjCBVhAWm1V6soLKvsKd1peSyCn9NPJSZsTUq4cFR8zAjv6ij3PsBLT",
  "key15": "9w6APFqPQuFb2VD4bjHAdxwGB6pdHcBbDJxMq2wDzP9dMBkTKTnfTherbSxbjGMv71pxTecFVLoQrC5qsR64sAx",
  "key16": "3LCk38eWVtuobBzmQy3PqsoWhGaKSLEy8iEb5nTYsBou9sf3vvaF5aNiZBx7AGC6aNaendhH4fsgXDpYjJdWNFD9",
  "key17": "4iuF2FEvgaaLPEi1hGKZtiATp5cD6mpqhwKh1uC5o9PtuFvhj2TgYUCEkXxXueqUCxzc9kRZYEA846hNhXKTm9hH",
  "key18": "66JNmzQbvXYLxW6DwaPYfUNbX6g65ceToDWhJ1Sqr9Y88m1SJSrQhBDbkibUUJsLhFb12PgC2ysCC9AU35gysUxJ",
  "key19": "qZ5TJnDr515TAgf85kybkdZFDbgruiWSqKWfszPz8xZKPFxd11AufgERUCaqBWKWYQSWNDCuk8ZEzMkYwbCjnJ2",
  "key20": "2TSqioeAtK4nvcejAcrKx34N5Qis4BYkpeAmtE3yJRtJ8LPrgYLuQ3jhuquhMzMn4HYYWA9MAEnS7avt9cPW9wUv",
  "key21": "7q2g8Yq9Cv49RK2DHRwStM8jeByZdVq7d4duxEEBUf5xTtYR8pwpMFcaYtY42GAY5sBPuB7H1w9rc2Czg6A8TYW",
  "key22": "2ASsfanq7GVaK896soa2eB95di12U61BrVei9sWn2U7sEp9a6ixN9mRHvRsAUFkyVGNFJ6xksPAxST1WEKYtii2K",
  "key23": "5jyQaorMFzHLA7uHrrYCS6BNi4Bsew8MPLUeVokdSQSvMM16LQ2J6F9W5MtkoApCPRxMNwYAZiautktqhEzobAVa",
  "key24": "5Lcv1baPdFuGpiHtifh6gDqFfzGW2FfNLKtzHrUBCj6QoHnqmW3GnfArCCJR8vY5MgdnGRWQH2n2bUyqhThxgGHd",
  "key25": "3y8MWcciKp5MjoCkbSvzjuQMB7ro1mxv7Z2v9mEVkzymfLAvjuvNEuxwDjhz1MwoY12mwMRhsvgXEdqzY4sMz9R",
  "key26": "5QKW98zhkoLY6GhF54TJNhM3EwrbNt8oGjgWLTpzC4CuZjytbnXV5BVq52AaezEqthuv7PYBV63Thx8T9AE6EX5n",
  "key27": "2om47zch4WjfPWFDSdaLMdRUpDy1hJTrLT3F1kHq4eq2h3Zybhou6PwFuZ2Rg3zGYkWhb4HhaHPLT3fgaE7NGhh9",
  "key28": "2ZxAKpe18DABbaSD4MuZHRPguExcQdb49HZv2c2AgNELWAhubweZA7L8fekJeKrmJuH79cp9WmrXSZmuLA8RJ6cp",
  "key29": "2nbUKHhwSeZeBv34gPEN32nd67hgUtAjUiJTUACbPTqZuUdDYj7L2xC2qEq3RNoGMJNRD7qWXiudr3JVgXwHDnWw",
  "key30": "3j7Rvjonegg5y77uYNebxuXnuuU3fhT5Ys3h4M2qBV4xbYhr9ZwWWUpaatjKQFkLAtRYd12iz5755A2VwWxQ3Mtt",
  "key31": "7kv3eRVTmXu2ecESQujS1WWwcUa6aNj8WpFwnos3Zc162CrrziCZA7oxzrUgPXSUjBghAKXb38x21th9sS1oWFT",
  "key32": "4YScMTrnfToR75TL1d7sSodx7BLWxPy4YEk1SkTbpTUrH21TryoJh7mGkZbyhNSGycfR5T8tnhScvX6UuSRtJPC1",
  "key33": "4os7vMMVySRtZ6bn9Qzx9io8sUXWFZLfitwRwpF3BEk5XHJN2PmepnFZn297iiE3NFoiDCNLuJpkjXotutxyZqae",
  "key34": "4gW4KzpkzvBV6nTCas7BrHznCAmZbAkA7wkjwj3gXhhiEpYvkDxGSzpeT273hB79vTDKJuHJi66rBWBT6kkcRyTB",
  "key35": "5oyioLfE2BaHyKPqXL7vsGgkH82wb4tJQ9EN5pjd6k1F1vWFqz71q1WCD8jwxrdZiCfgxmsB3Ej3qAfpymuVPFPe",
  "key36": "kU8NKUm4nKR99MCfNqbS7SmS3SWqkRPod1jdw1Prk7yc1GcjJ2YRnZKRDdaNoRKDfcuPqtyApWB6jEdhXohN9mB",
  "key37": "1V4cvRF3aWcqRmL7eF9kErCHTdRzQrNaGENSz9WSxGzHTGdXvqxfU7YqKZUbe4o2yyYuRNy7RVYwC2j4Pt2q5E",
  "key38": "5ZoGCdsL9SmnEyVmFGt2FtWqd1nXaqbMfgpRkwto5bT9MJ7ncyaJfecfayVQm5Crv2qve6W46Jkiw2PpXyBbdmAm",
  "key39": "mhqJxbXfyBZGfG1Xy2TWFPrqLN5N3kgATKnCavnutkovcLcUftKnADaTiKirV37Df5eqrtyDCPvaXmhMgptogc7",
  "key40": "54zQKjSXiBqRuQtbMjVtEvqAhBhiReQ2cSA5tx4dfGWfY8rSvFAkGoG8sUjsKvJfnhNsDgiZqFEZp8Q712XxdFUk",
  "key41": "2BaZiyauQNMUwGU74xWMH8maXQAD3sDfGsFAANm3RZSUDbmcTdtpiqbyccxvYFvroddfS91xuPnZF4LW7GEfDTr8",
  "key42": "3inQJUkHZjYUhz4mUvTZnDCDtxdmpZzDVkQ27FYxSCY4nLZw3wfgYYajYaq3bq76fVYmsLhc16wHH8mbXjrM8m7d",
  "key43": "3sZZxXksJVPCgNXcNnz6RBU6ny3Uv4VsUNCajFKzWTMHt824v4LqZb3szrfo3o4iuCyjA9G3yHeJaaWoBYxKLagw",
  "key44": "5QHk6oehLrJPFDK6wPe3F3uWQho8uLwWXbF9xV15r3FgUYsWmRYY2ecYr1guYTywSfwzYi3rXMDLhXZcj7LyPeyb",
  "key45": "3n4MxTaSWZUfYyosSKisyfeMeWjx76km9B6QPYvwuPWV1kaBMb2PMZ3VaqBu6AXC6Ns7UDKu2aKUUc6i7BPT93ee"
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
