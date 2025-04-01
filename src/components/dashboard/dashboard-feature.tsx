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
    "24QQ1wBzaW3bXRph9MacUWdVgy9pquDPYXp1UYgb3k5fc1eh9r5HAzVo1EFjLq6bvFn6cG9542Qq8crAubhTkYWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tmmgDVpaSZGyxL9EmnzQky4M1cZXFRwRXjr28wLjpfXjFrE9d8skZjtHYhRY97LfopuE2zCDXty6Uf8WNcZVfCY",
  "key1": "yDJFMnPSUwSGWpzv7N4uxRBitvN9kEM8ktspwA215DzsBTr5N5SS87MrVBZDYV4xXmnH2gn2f9shn9ZZGmfkAi7",
  "key2": "3s5D13xyHCE9EUxkUKVdr43ZSx7iv9RL3WXi2Ju7pqJ7rBNjvvLHv3LBWbDF3CihMFZAdxJoC3yiMSHtfvSZyCpw",
  "key3": "wRt4FYemtpo7fmpF3rrjeZoVwireeHDeu5zNu2BNnRzHNFL5secBSxRDccTVxVNGy1RS5j26QNsKJyytQtGPScU",
  "key4": "632ayFj7ReNmpTYvFzYsz8ZvCV9WhCLvLxdh4oSgphm1aAC97eT24Ezf2eR5TGWMrnkCnbYQdZr8iQkk91moVmMo",
  "key5": "ZFTGdtp7X5L9JKqpEMzGj8SdVHwzYavqyV2AWeVfNeoec5KdLTLMBkgbKFpd8mFc1L3eY82L6MjuBQcDhmx4VrW",
  "key6": "4zua4j8QkWc45zuReRTPGTEkpaD5NcacFeV537746mauZ9UBGYwomfybq9iUa6rWp64LZ9kRkVGZ6vm2jDNgfLMg",
  "key7": "26aPxNWGKXA6zDbwqgsKpYmgHX1WuqdrVksHFX28Y2YXHWCch4VoBEHEHb2gtwzRi9sXYw2DAS3pVu6Wv9oubCaz",
  "key8": "3V7whX2ywJJ3govjXp6NyzfaqQhKBCQN73AwAm1ihLiKbh1nqjJNe6xSELoSq5SvMpGPzse2H7HbUQ6gR9FdcagZ",
  "key9": "2dfnMb8xkuXFGvCmqsE5FdAXfraJibBz2Gw3BiBYX4LJ2AidFT8f47BM8GoM6MLysCgB6JDsRvL25bfBNZMhLKhS",
  "key10": "4YQgdGvN9JvdpviyYzBL8xd743mgrw4TLq4ovGrDd2aKs7GiqDrx7FWUGnJBXgx7MPse5gDMz4pXzt7oS91mjFz8",
  "key11": "ZgAesQhzAGujP8kbhKp4qoafXUGse6PzEEqjxPT3BRZ25n8wouZwQugjpZ1yGHw8wzrL67de4Cd24xht2rotQp4",
  "key12": "3htmzfvLJpJtDHjJv7oSMgJTDHTxhoD7SpmYahhtNqtFT8wtetKJr6WhywRTrh9cgirxUVY1mdrk1frgrK6hcBjG",
  "key13": "E92ms3oWPcKXuaxZ6YBpg5xGHtwxsR5YDiHmvbDSAHAwDfMUq7jMBr5WjbL9MQ9JWXL28DzpnRgKgZKAvNAafrZ",
  "key14": "336RBWAHniTv5wPxkpBviyXKQjEcFvum2D8znA6DVV4XtAVFBeEccEibNTNacD9VALCssdqJjRJncw8u2jLXai7T",
  "key15": "C5mGr2em7FZMP59FqaJSyGUohT5wMFaBX78w8ncWczXg5wJ1vrm533aZqFGM8yhWFDfVDrr9d5cCTisikWos1YY",
  "key16": "52xGHLmKyUqpeyDhfuGMVPaCawcaA22EkVu5X1Sd7ePqjAJP1ccFTu3wWpK4qbMGxtvAe4BFDFicN4QFLxcQTDfY",
  "key17": "mGTtvv6hSLKuE5tdufTxCQYHitHvTS1gv6UjgyuGk23QxPFJpHXrsb8oUNzjm6eXM6wFWPFn52bs9N9mn3FBM7s",
  "key18": "2xrKMJmSwEE3jka6L4RZ74hFrGMALWXf7pyXTafbM6andNAEzmEiB2adGtzPEyFBKuQ2Y11nwHehTcXRZRSC7X6u",
  "key19": "a4KKjUeY5ZB7BUcYSghms4ao3dPFHeZUL6KEw6oeMxDjdpZRrj7cAsWKNpq4E4w8TbjnnVFUgoFyfH16ov29BKy",
  "key20": "4xn54xvUj71NgFCyxFosyXVXpDbVq24j3A6nK1PdHynsKf7TrnqBfYA8u33Jdd7DRta4fAnUR4XDdWW8AqTDP8U1",
  "key21": "5Ym9449sUAwBE6myRSc1QD4kqvu9knP1QjofbYrJZQnLT3x7h8KWzPdSXG415U3xtLnbHnZo1PGKDGkHWYUeJRXZ",
  "key22": "QDpo4kcsGDDmcMnkcCNAQSPbqn326S9FmGMmX1Qdz1mhGn4YAwrKixAUNW7fD2rDZkh6QPvAQ34G1MorGQ9iZ3G",
  "key23": "5YLmJYRT3upSz3ZDcVgUd61HZmckiP8qgWuFvFJ1PjLdQhyhFvogQQ8Max61hGS3va6H2nhr3VXi6Qxbwh1yJ34Z",
  "key24": "ipBNvZmwcqUXBHHxwW2H3r64JpqgYsr2Eofsz5VtDqYa75yQkdvAgukqBczjkNEekwnFRBBqym956mCfzYdYtsD",
  "key25": "3FR6iirmZyGev3aTybAzRFBHMWJ9pdf8oSgzW5nNMBJnfSg8WPtWU4DJ4sSkZxkAJTdK54Rk1GPJX9tsUUPDXotv",
  "key26": "5mM2ACKV9ZSPBJMvPyaYJGR119UAHUkWXGTqjkWDZVULoAZGsPViYtzCabk5YiTmtvRiF5iyRLTLPVd9bKy5wjTy",
  "key27": "5DCKDyBqbuSdHV5m6Vq2bGbvQtFyDEnD8iqXxojk3umwWUr3F9vzSSKNLYB3cURMT4yyKJcSR52VKwxQnvgyzdiU",
  "key28": "5HCDNVtMLm6KWWZVMTCGXrDcktN8hrYU8RvfnSzgJzk5HxC1LbYiCqo4i7V5yWmbnWeAHyYCBKhQnuHaXcJ9jwfB",
  "key29": "51DWGfKui8fXmRLv7aKR7RQT9fn11eaGQpTH9vwEjPGDQL2XvGmK3PXQPnbTdSA4rAJk3jKM8cysTrwuJK1eeceS",
  "key30": "2Ro54vEPmVFN5iHKRkaCry6YrLG5hFCjokb1WijsLaGeS3qVB1BMFVjNvRht8RGY8pJ57pJtCAKoJ3BxDrnNV1SQ",
  "key31": "3yCMtBgQXf1ADfEDaHyfPY4Kk8dG3DCMBaK4j8kHdFSPDZMDpJxFA6YytY2hu5y3B4RnYiCfXxQoBbcM8pWfe4Nn",
  "key32": "57BBeMPTJ7TpqcfjydVap6eEvskjZ4nv2wqTmQX2ws1zioD2Q6J7s2Nka1QXYGtXfWwwEEzNLJsXLkXHFoFWeR5t",
  "key33": "5hax234gviGGTyR1EPer9k9mc85QThLc2fYcyaimAWWKvzTFS1Dp85USY75emEPxCieEUzqSgVyPSHo7d6d9cMf",
  "key34": "5DmfMpuNaYV5rzoRgdo5ADeMAWgfZpAeGpc6Hj47E6gsQG6bpyzhutnw9SJykscCr4tQpPTmReK7PESFehJoXfZt",
  "key35": "4DzRnE5jUM4piaHqE3RHk9143gAGngwrJ2ApC1tqeU3gvY7iU6tqMgqvRF3JXn4JZcz8foKxiXEAK4UWYA96LeD4"
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
