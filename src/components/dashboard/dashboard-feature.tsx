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
    "3nWjcxnH86s2ay8RFHFFTsTZdNz2UUDcrWmcm6yhTnrwhUrSUyLUGG4sT6w4EZbpTGPo6oMHAzFnjzd6AyD4JmXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hMQqTDz1PJAzhtX8syZS8DeoF4v44cW8qBJQvDwkdJhQ8RLsDDxENvh54ZddGDmRsDBHTvn6TrAuTgA98QKegYM",
  "key1": "5dy8ggqLTw4AU2etHUTNS6BVZJdsn4ZogyJjFEQKVoGS3ZnJfEbuPJFvMYxwzjEq31kqFK2Rg8qjiKKWWCPAphpS",
  "key2": "2s7am1ttJHSj7cD6r722WtbS7CWpisWXrGPbHihikGgSPKNMivLsBgtTf5uB6MAZrRBmT83KhdQHA6XzMQRcvCVq",
  "key3": "2bxexTKcMs44JwEqy3pZ4t5FSWS8EHX4fQzfH2f38a2SZ1qsZWAkA52oxWNn4pwvoJxNHPfLnBw3tBqUniLFaq1J",
  "key4": "3TBKUGoNDi9qZJBCgXxRi9Vk7qwDCriNRaQTiBmHEiB8xYJ97sdPQkUaLP4nf8jZoCfrcFFVbwMkDfmUDK97nXod",
  "key5": "54qc9hfgWihawcvUTwZ636SG4CVAWcC8fHaaQ31LCbN99E5tE1u2vUxrgPqTeoKeX7Fj8tbQGHiYUdkv3aNuRJ7d",
  "key6": "3J34Wy95XxQKhrv4jAZBkJhqSWrD54fVzrbDLhqrh9UMPcP9kp3JQyeEKqnMYyrVcdDPMXfAbhzyHRzCRn3NAQ3s",
  "key7": "2NSxCU4pHKCAJXNkXLazG8aZyqsnJMVNRV4yiETCFYq2L8SPa184tsKTTFZvimcE3ehc1fgqPAByuVxikpDwn2ub",
  "key8": "23zLjW85d1jmjmggPzpP1KWgPB5oYHa2eDzXzMPDRxFV6GUGpkcjKjhn2xgS6upA1BRguXL1ADS4hpH6gTsg3KLG",
  "key9": "MhUq9xPkjx6xiXDPoZWKx243VGfGPRHjEN5NmQFYjni1jTyr7SUaYrdToTn6NyaYzzZUymHmEzGMEpN8GsbNTgD",
  "key10": "3QY9d5T4anFwNqmCkQ3ixptGjpra5sgu1YqwpgoKSVeQ2Rt8TdXKZCQtj2N6QMC7StLJMp3uEBjx4rE46BXDeXBL",
  "key11": "5Y7N1Ascn7SLRc9zExtyoPH9WMjprpFx1UX4UnsdKaDCqjXtma1yFh19TH7x2EZg2WsB8pzmmwWwQ9682rvu4G8D",
  "key12": "5KukbBnm82SNxXwjJ9on3xbaLufHn4cw8LYoVDJSPyHNwyWiiRYbgsAkEDTVj8gHuUB7m8S6M5hi2e4BMo7eFmiv",
  "key13": "2nKkysv66pjfNrsS3URUThMC3LJeLUiMbxGV3qXCEfD25ZNRcBLNyJyyG7LP5XUaFieQ688dRkE812XXvJevCmCj",
  "key14": "5pSgcVDUQFkjtbS1mWCXaVMhCrpKJcFH2yoLdMHvmc7N95oNk94rFCfgD6YTroWjBQpSP1hu75yr61FvFbHvoCnn",
  "key15": "5dvx4bpZaedonyYb62z4YDZ9RgrA4h1hP8iR7ufeUKVtHAqQ4iUDgq7ZkE1ShjsZHrsRZdrdhYhgUJz6RGBrPdGH",
  "key16": "2PFBrh518LTMBsgj3AdYH7TNFpq7VQ3E6Pxz9e4Vons3sPkZnqJBFiCJbSWnmYn7mcLnwgHjn68hEQfWxCdPuzLk",
  "key17": "5EKeWCzUnLA6nP8apZQFnn2muFtvADoPriuhatNhGKLLQpNXEtXzW1bMBqhMpkxyZYVk9WARbeMKrHD3fgfSAmxY",
  "key18": "5F4nuB5NdzpPPXZTVWwfwka5Q8kDkaxAbdx7RgLfQjnvi8V9jmjUjjBCn6DsmYeCerDk83piPry19zzvhj6SW93s",
  "key19": "5m9ExE9XCQpowMuwNJ7agjtnDDCB2KCJeAyaSkJMbQNWAZ8HY55rway2XxMyBCv78XAwyNoanm6MXPgnvkSBCXpt",
  "key20": "4CUqvGFr81MqiL9VZ57NysHtBiLqfXvHg73uaLTAbBS1XUBTyctGzqbxtGPfFTTcDQu1WbXvp6DRxz931L8SQUXK",
  "key21": "rUshwsfp8YSiwJsXUAfmPh3x4p9rndt9VsJe3Wn68Zo2zJ4rYAmyMgZvfqX4jKCirq6AZxxwyoMdDdxuKrmX7i6",
  "key22": "5cN1TAYqWKm3VZnQTa8RVTUJD6R8rEU8gnEvm2Ma9T6XaTRow1q8YYzqwuGNk8cfxZVCX9aELKv6pY75NVp24vuZ",
  "key23": "2Qkc9Epi62KLCFLRGY13RuFfAVGcCBH6CYRXEEney7xpLvpcqP9c4xYU7Qrr7KGDAGwMSH8aUs8yYa22YY5wRthq",
  "key24": "URqMD3wxfZPcvWAxay27xHJCD2Ef6iC9FVZ5RbpSFHLAWQqBhfqCkwUVUuUBamtw63ix8N7RfdtL8wRCaX1xAPG",
  "key25": "pVe7d4qqvfGn6hNidmqbAfgtX9FFzFY5rzP9hX3jbKLCGkQ6jYTRa8BAmQG1GiSeKX2j9MreqNWaMPV5FfnHeb6",
  "key26": "4db79ujcrVFiJfRFjGHEjt7qr79dc8B4FsUmunqpZnGnGy1tbTVKZSgsBa4cDmmtchJbaQ9UaEERL7hcfHbHxbJs",
  "key27": "2qD58V7fXVutjVpe9RoCBcSsZbj329wPJpyrjoeeRvkca7KtE83Pw6K3siCfFVcxdqsRwG3mzdWpskszR1x5Rgxp",
  "key28": "Efm4rrmbQkmvTGjY7nuupoGGgosFKTWyWqDCvngeXett14uvncASn4AX2gZ18HpHdqRTnHz57HHDPYWYtjmj1Yi",
  "key29": "5ARqJrJ5mZyyupPq6fqbwoxHap11XBeZFK2YHV56DushiDhLZb63mpaQenwpcXd1J4fy8ZmqvezpZt9Pisb6uvW2",
  "key30": "4Yt6coiibZXDPQEfBde8FFWUhjcdybXxBAwaHB34qmPmeBEY2JSb71m1jf2f1HikBQW6bRRn3N3LxK78LqJxC4ii",
  "key31": "5kTKiKX5FAzLikYigX9jyEFRjB2PwZexz8DfSVS9MYK8q6sB3EZwbnxPsK3V332VZKxr9kYwFMFMn3qSVh2G8rWS",
  "key32": "5KJKtUG6Ehb3cmcAdtrnujR7ms3WnstcXVzBjoo2MgdgxSwqSQ1rJiwnh8uvGSUdQWA9jPYyqo1rEu1JEssRJ6np",
  "key33": "4V6H6ZXhWH6QPJnLCt5HceqiDQWdADvfeuxjkF3u7H3bcjXg1GSxKs2H274rStRNAFjjv22hCuwXLswPrJAzD5Xu",
  "key34": "5fvisptMzcCLwapRTh54PzY34U6dt8yUhaKezJs4rAzriZQoFTXosQbBqkRZdCLpZxJqya9nbyVb7QAr7tahNoLi",
  "key35": "4ja4b4QSTJitv3bcdz3XdgoDY5T3w6b1ouWg5CNcL6wEs9cU8cmQJPfam1WBR3gWDZ2Pk2L8k81RqXyS1UaFoSBq",
  "key36": "5w4wpfY7gem8TUKqkSdUX35hTCXrL7TnJ1sorEbmtP79145jp1tmxbWMcyovFS1Lg2ArZgrMoiS5vnmTLNFrpywh",
  "key37": "328SFT9yLjQbcgFbECyR6BzsvNHULw92gTQT5YWUAGUZbzvTWdURpUjScap1sXH2PMwDZFjxSUodmrtrPJmKfqQa",
  "key38": "4rfGg5VajJ8qFbChjcoYRLduRDXqQs3xzNewzthnBNBYpDuXwTgVwgsNajjixz94xS1uRWTYBMeuKm8iKLQgeo2E",
  "key39": "rGSFHdRS29GyYzUfr7JbTvmqVVu5dgcvELbxB2r6udsZcU3pfDkYug2ty8Zt6pNtJ9j6YS1N1MjgYTunNWS9HRY",
  "key40": "53iEq4JTDNZMraZ7Kije7R9bsDxYu3137nBH17k95iC61qeVTeAXqFdBxM35MzTmKjJY6gSeh4LsRzqkCPZ3QCAM",
  "key41": "3o3ACFGQHWJ9jpH2hWY9wVMocCq2SvqxmhRVQ1wPJ6w6uygoEQQUeXop6nGMHp8G9U5dRJEwdtRNcjnqPQS7HeeJ",
  "key42": "sCuE16n4BWGR8vfCcSWzVUY7ApiU2XFzvDhwGbnfoGiWbrTdGJeDjSaH1Um8rj5rZwZHna7dUha7ktEqJfa3LJ4",
  "key43": "2WfSkCjNPcQfy4e9H37Lm5cgm8XR2HxXQcjh4KU97GQPGgGQTqLS39i4FUvufKB1TueszGqYSJwPyRqtqUkjEQ9F",
  "key44": "5TTDKvYJk7th59oVu1dxJ2ubM7vAQk3TtTSwoWXAVPpdgDaZ53v6TBShRrZMfKmVmbiguPrhGWm14wBmiNYBbSzL",
  "key45": "5cRM2N2uDtVykTRMc4529Uh6HpSGCcrt64dGyLXHhxkTJqaZC4v4rZbkx5Y9rymx7ak3pEfvm2Yo2KBYUZzi2i7o",
  "key46": "FcVAnjmVvQ7WTuoDgLhj5oNDyNcpGYHAi3ihb7kgsF4FqrVKZxFBrmmNE7vMJxfNeLUfz6kFXtSsfCfEUSjQy9h",
  "key47": "5kZbt1bqaACyhaD5wcWf3o8Y6wMh3CWb3BCeuzetyTqjcRAkWQog4cjfTN4sHudns5tf5xWkuFLoWjgZXoofWqoN"
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
