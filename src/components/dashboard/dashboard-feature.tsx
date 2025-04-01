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
    "5N2q4HThj5XDWFy2ZhsDRMLtCBMNEhnp8KPjqnvkXZ1WbWBxDpf4KDZXZTsL6T69Rp8iNKKf8HbThRh3z4xwhyLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ho2qdNEjadmyhhdCBetRZyBD48acicrMvym7Ciy8AJk8NgiW7CVpqgsM8mgeRV8a438yBxy5WpR9jfqf4aDh2LY",
  "key1": "2Gps4GvVQsc2mvFR5THouQboVCAv7vyt5MnthkfQxH7MsqjciQdSnAZ4a4vR1vBYqZFEp7KQkebWKsQdTzLB2Xjb",
  "key2": "2M5XmQtNxopm6VGYkT2a8Rm6VVQ4YWxNLWjqefsQYa7k89otWudHvvKYcoKoMggz448U3TTqkPY9SdEBSmPQ3WYW",
  "key3": "xhj88peXXdFMxrdXakXkjhAHsQu9746TCqk4in4TJJMQmezXixF1TNbXidLbucQ97ZGP6ZTTuni5GDGa3dLassL",
  "key4": "4WAuAnm3DZThtDaPGgVjPX3Y3doZeLJJAfxo34RviNFq2HJk4rnoc4RTBjrihBrtnPwEt9R5YyY4bBrDA2Dt8r2U",
  "key5": "3Eh4PF1rM78cTXHcN4DQo8dhB78sTNVitaHwtjjhLVmtR9RLE2WhXY7gqXtN7ULcpVJVhpt7eiCu4WNqkMP1obSR",
  "key6": "3SmLge5D4hABDM1iA5UoM3nwY81QG29C23xPE7xtKAQxeT2jRUyWdCibBnQsHuxhQHQiGUVXwMFmVhkV6thJkhUN",
  "key7": "46WAuhTCK9fPDv7299Ua8CZoWqbLY78CvJK5TQGFh7KbAdCtpHY4xfmbEySDW7u52pe2MfBNcJxBwjH1AXhfqfGn",
  "key8": "5rDhsTbj9sKNhPaQD48T6RAJD5PcQEaWTw4FVzuuEaXi6bUiWpNshYe2UyindZtrvdbgyzLdeSKdAsTkKHw3dGAP",
  "key9": "RjZs66Rxwe11h9LzFML2TQqHX8JcgNUkJ5EcKZPULQ8SXD5UhugKbz5inZXUXEoRwPkEP8pJZmGe8fYWH8A9cVk",
  "key10": "2kgQGWM7svvuUeWsXuZ43tmsTraE79KEsKsKAVYCnSa43JA8eQdw3Nsejtv6KT6K7qJv5N69AzR9sqA2kET4aQDD",
  "key11": "4eJ5taPhB5CSyFx7XyyB8aqEJunsodp1Xd5wPHtnK1bFhgYCtxaeQTERkv9N7znioe1jcnxm5CxajztnSTDE5GbQ",
  "key12": "3JeDm6Zmw2dvcABMQPS7ZmvaPJqgtVDJswwCT5TFDmsvJoKfoQR9zQF5R3HBRRKNL1t6xRqEhK6rqTFZxUTaE5dX",
  "key13": "5SZRhZHR7rPfLpbSkzmicgYJxhAeL6CAqxTUrabb8QZQyU7Ynt1MwcLoaM9gsUWiKS2u8Mv3LkuP4ytx1qgUXr9D",
  "key14": "5kfSDS1iw7ateE9ub6a1hPpxbCCJc3kNNmMesixwUUjQKNJtMvZDcZW12md1jMu4YXrbwghwVt1ZpSaPRVhdKjh",
  "key15": "5TrduazXisqXZ7e8C1ViXTbbikkNDBNJ2n1CaZXgb3iUSRSd8A9kWLmsguwgDhmi4HUWJ9ftzDAqiXurUoFR2bQz",
  "key16": "u4YixxBt6nNXVvzqXtj1LUswgv28iPWjny3eswUXGQAo266cQREfpXieKbb17NYoM4WaRxaD4agRtxWchrtdbP9",
  "key17": "21EVchQSsmQ2yPJCMu8oRDnS5yYNBhUPG7UQxYXnfA3fLAwhHJDzo6vyknKsYdEVa33KMiFJarFHk42r1UVb1h56",
  "key18": "4c49PU5NJoTptCrJ6KkWrLK65aiAp7sh6RkD2QqZg8QCsrHg2m69jLXRrr1ECekCoDzJDHGTmHZs7LDDm5b72dNc",
  "key19": "cEWKpJcuHQUHU4YXs6RZ17ZyJPaysHDMdYZwocekDcwknc4edbwoism65TVc11Q4gnPoTCJz7QBrzKPApXmuAjn",
  "key20": "2QcmBFuWniB4Rh3fULBM72B4Lq4kyUT6e5gnt3ihzr8X8C7qsjACXxgc12ACnkmPRVBz5mxVU1SDa6EfgNYkoU8n",
  "key21": "36rmiQyd5s34vdJnFnzFUKapDghuFScyiNhSJjkFg3aoS8kLrxLW9qbYi4CqwEvYMFqznw38uKhjng82QY1vfXyZ",
  "key22": "3zYnYB2zacZ2cVvvRSUg4esGurAeZSkKH9gwE8HnHjguRgR63W7BN29abZXXPeMPAeGvtbpmPPPNu4smNdynKTfn",
  "key23": "54FTRFFLVSxepVKYMv4Q4JLTfjxB6bEV89fn4E8ffEZWrVmjKokQStdDGDz3GhzFTrxbEmygSQ9eUyAvJvyoCyzF",
  "key24": "2a7mQJWFpb6ihF7nxmNVvkUXT6rMnLENbDhE9BXNDATEX5x1hK36U4v4SGjuK78hRVx9GcuJ3LqfzH68eQMZjmi6",
  "key25": "63kwAsgSMiZfaC1nkLg9yvL13ZgGrLC5gUu1A647E64h4P5QugYbP7s6yV84p2GG2GzV24HRbMWQbbVWvXJsba2T",
  "key26": "4JrJ5Vxw2z2gfJ591Ag33cCbe3T1TphNUHkPfJfAjndf44MJKUsXJXLV6Awwaodqk3nVdsfLn6V16AhfLV54EVqg",
  "key27": "2eTvDodZGDhGNJSnRK9ufiTSoAppicMUiqgiN4ZC95bfP44Fxh21LTQTNrc16oLvsKMoYzXNCWSiF4GHqrsGSbk5",
  "key28": "65tEF7dBZVGx91DuL5cGbxkQg8yXN9WBhA5XqrN13S6AYdHJLHuSWhmnzCgTsEHpyZweCdecXrxfkEpwS1TKN92X",
  "key29": "2D4eZY5BcrpMrFTidRYgSTcScF3FauvPteAh4VmmetntUbYsZ5yJBTjxj3xWQUEKcFM8wmNyH5RQLz4gWdVX2pBQ",
  "key30": "44sheVVtVD4vVnEgAns4diFa1cNXAhPsniKQ57JzQJQUP6jpDjFmErBaYAZPUHvLKi9knwiqaQgmMqZNuf7c7eJ",
  "key31": "PQWLVYPLFjEaqccPmporJ8aezBZeBAbVJR8bDVFJZaShUkztaGAu1xUi6kESUTSDnwyNGfRPKCRykq2HG2NCvzg",
  "key32": "3uUzRPY6UQJWbbDBB84ciFRf5sgMk2eh9k3wCGnuKMsjnqgXX9BbDGLAbqR3mgzjWbJyqz7bSxDEAZSKkodYwy4f",
  "key33": "2M83CnAFXpY8qdbogB6LJKw1VejuwhjreVzAmkGHq41c6tcRXZZxMxiDwPA3xViXLUC7MnP2xjXeYT31mWQnaL3",
  "key34": "58sQKMnkqsTjVCDofybeJxb3R92uDi57vLkzAGg6H2jyABEYUsSFZ6bhfq8pL5dFjuBJMryaf3n7n6uvqsRn48sG",
  "key35": "z7GmZGLx6zHmhzecxaSVtkt9hAJe5Keq8JyP9UuUT7kuhmp5YuUmyioZbUvocy1Jm3fG8mUma8sMSzDaA2AVpoN",
  "key36": "c4CgaAc1uekbPpgmJ5f2DT1wGY5WB3sTHuoNGDpJd8RTC3bYaFqjztyk5c4pqDMaUrpDYPCnUE27DkpimCTYvCj",
  "key37": "4Xn8JaRnTtodJE1GXdEPKZa4ibJQUQ9YAFAX3WRQoLmCY8EWqYdRrmcXDzvp7EiBjXuECr8TNbJgv88Ra4NHFqTw",
  "key38": "32guzBaCJbE913UEdpCz3dsuyrxnz45MPdrXc3qN8QLvqPic4XBpTTQXnwQcnxDu4qkMf6GLz378tEB9vV23hPKi"
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
