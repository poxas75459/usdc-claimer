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
    "3KXXp54SH8dzzKGX9bbhgtCrnKqfDNcnJ5jSRcdboAnFF2rwaHkKp8Ry8RRuFN2TjAd9B82422Jw8rMLpVLuFKYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "juYozsmjU6QSbPfkNveY6Acj7tqnXVMggFnBKbbC4ZvFrMJQg9weu4whUQ1uUrrJxyEqBcYovkSpL7gWTuswaxX",
  "key1": "2WJhqCrzUvpFCgLxMZ9BeF9119CSC3AWAVSW4oLHmhEJUFb8t9KNhFHJggz1qr7GS3UAXyYsUmHGmfLE1F5HjNXA",
  "key2": "39PmLtkbv5DUmijgUjjHwZAkq4qXvFiDEwB2VnvtWQzPSQsnfNPJxbErM2sANnuBU6EkdwMfd8u8xSechbMCAxjh",
  "key3": "4RoLxRwhY4aLLmR4vrQKkjhxUooXA5qiuwveBrXWA7Cf2tnhDfV5iw3RLf1RcPEsbqUq18Azr9xP3QvMXUCHrqhp",
  "key4": "3J4qDShc2enJkc9Jrr9hsL3M1cREPf99uyHsyjtYZhS687MzDUVAyNU3u6C7tegsbUtiWnzNqBXEfsoixyhM4Qid",
  "key5": "3LpQy7mypfFVFE5QfMxsrKjS6u2bd7thDwHvi1YfCGgDdH3Va2SkPBcigcRSuLdNjaqg46dyKjyCDdvFZZB62HjX",
  "key6": "fyn9KH3N9QrvGwa6MrcRxRXSg2d3MRyPqqCa8koL2KNs4usBpJBC82i26kWHszkqac1HMUhZfdAJLTtgU1eAcTV",
  "key7": "2UQK6au7PtdrwgdjdUztcQMLyrh6X8Fqbbg5zPHW4vhSVt6E6sjbbuVPkq8TTpBYp7cTcocDLqHWhhqRMSVyKgvM",
  "key8": "3W6Hdtp4CmXSMMWiSgTuwTtK4o1br5ghCZRvFuVSe1Wq44E9ARaXZdYzm5xqs9MdhDnKra7CzbrabmmEEkxfRoah",
  "key9": "4pfcW4AtSFiuRphDjSqeGhV2hWLjKNexwH1L7k8TFZAn5eKgaJbYXZgEgimG77bFDdAcAgwSnGX2o4SVx3k4QGqy",
  "key10": "4LbZJHhPyHvrLeLcAR3QqPYQiaJXqNkDiKTSZNmfHAwHfzD1w29xz93LUmx4uooouHLxk4bK7aGmhBcNs1Wb4PCR",
  "key11": "3wxqos1q7bRFg5PEAgUdRBGapceRCf4noJybgzAXuqNaR7dTssjUzfMESJEsUtPdy9G52FDYtpnyLgSLckhMAWiA",
  "key12": "5h4w3JouoDShG1km4G7hEuBqzpsP3jMSQbVpu83Z5DSS6ZQQ3AdpnTYg71C2cySKN1jghuv9SUibqfNmQ7QgwVCT",
  "key13": "3MVKyayHvYL8NcffLrmqAmqjSHhXWyD4oP3oYuEj1Jn4yLLNvqVHjoeWuQe2Z8GzGARETaTofJcWkifdKj1ZaTYy",
  "key14": "5q3dZK9BZ4MDvVstzde69sfQ4UjiVFWm7aknd5zgtgciM1JZrnwVTbnpzN48UirxYkyhNSxSuVpe6gEdbZMv2AWe",
  "key15": "2BQ1PbH67nJq5oFLW6jTcr9NAftmY6wkiNfABxEiuvnccg1WpnBfNFjyKTYn7b5iaPEdJkMNT4Lg5iWPCi21krUG",
  "key16": "5tKyeaS9hnf4HkJ2rRvJK9ubkdzqSyt15HQqFYvmwPn9mSGfmMg8BLbauqDW1d9Ma1hQn7MGnXz6S4VEgahjYH36",
  "key17": "3zVH7JWK73r6CZumEe6nqcHxNsp5Bcg1AN3xZ22coRbpZTGjsbTdE3gYw7kDnt5FFtk9TGtBkMekFFrZgYWqctXi",
  "key18": "31Rm2FC8WfmtTF4ZVPdvhzmpLc9BWoBCcHcy6Jhpw6aetEVGmaq6hcZTCs3LNySTTJsGCsLdEddFABAwuoJ9bTC5",
  "key19": "481dvPyZeL4K75MUGxHoVMMN4zpZX5tGvAsoDe9hNaApMZC6Qmnnif94HFdBQJ7L6t15dFMqL5B4DohqLPkXRWVn",
  "key20": "62zcX3XTnqSwGm41DcMpFnMv3QDcDNhpmhhPYzyxjDdurRL3X3ADLBFgeh53s92WbYVVebLsuKPrtKdi6Ppi5Ge1",
  "key21": "2kZ2DCMzeRH9tq8x8KRhpaD4MGYjAF7E3uR1Lteqn6vP3Q8XtG6k2YtWLgfFJZBsSQuf4Sd5rHsiCCxVq3HFHQpn",
  "key22": "co9zsNLh5PoUmZss8wknVVoFjMMxuMQQiZhg9rs4TDCe7mCZh7p7T5NcRvxmsfvBZBMqqZz1MmRQP9DGXhQaBQn",
  "key23": "3aUKvXkaJarcygQHsg29ctbTqrcHvgp9ryrpAxZyz5Uq7YZeAgR7WfMBwCSGUSxdyco1vrZz2pg2jYCRw7WJQ1NA",
  "key24": "2eJ1QuQ2RvbfkeNv8vQNgijeQm3pQv45L91pJcZFPhDzRW2smjyg6Tc32VTrWhSVurVicqVeYrSCiCKn5n1Y8yVQ",
  "key25": "3X1KLmjYR69AQLCVUcW6o2QWodJLiNRtLQsjv5aZDkU4NykbjnTLtzdD2Xts1a5PGdMj5TKjJnGsiwbqdLyQW7dX",
  "key26": "5ZjzpSKxNqJeQcJ2dEWj8dJMQtbamG85n5TfxSqA4FHdCSp96QdvYuNRcbnTfhGUd8JTJdZFewJB2o2J5kGqaTDZ",
  "key27": "532Fc141LUmTvdovcYvJY7w8E7dUegEabiuwYK9mLSBshJURXgetK4wjtYVGU7zxwjrAnVBkFkFjZeDjbkH3WQHM",
  "key28": "4dYRgmiTv8k4PcwHPaohsxTySJ5g9CEAXRzYb5HWzcC5mYrS2WnN63XTQpCEYgEiQW69n3hsZZiRpBckMuPQmnyB",
  "key29": "5yg53PPzG4ePJn8aisBwdaCCzk887yaJRv6ioVdtM8TU2t7V3cjDD4Yih2C3uVrXCR7Mw5zN3Dzf5sAEdgqBnnTn",
  "key30": "64sXru8DgYfW3Rj3Ex19XN2fJsoraoWi4iNFAS2PLTywr2K2zRNRqLURDMLgvR65sZNiLpNCRhuUCgAjjzWdfFni",
  "key31": "3Vi9NGnoB2H71iY8UmafLrLNf8DyPxuDGMXbcfysXfY7Ncfbu26sBixE8cpJsGtPgvTBwahiMJgrP54dHsxUEBq8",
  "key32": "564nvFcpezTfzNcWcnKPN7UTonDfcQkKX3AygB1WTVvLvi48czvyggPiJPmfWYG37S63cJWZMFexQHgNkgbWvq5d",
  "key33": "363aWSJVeYikQL64Cjzr32uBk78kGvXsyFJUnXpGo84TxHPuZLatanV4NM5HzkZEzRfqaPqH6LkYBc6gykNeUP1J",
  "key34": "pupFvA5iHBLv1B1Q49mc1GnJK1fUSaLZSRhMno2bGKic9wAnXbxM9R6SoJoMfGaWpu1rpY8yFhbFAqVgQ5jFEY1",
  "key35": "4gorPnZTDTmxJgNRMbW1aKyvkX28FyvfH36q9bTvzNchP3K3XaFtXFqc7dZWFc4gnhCaG2Me2yc9uYmN62FdocfV",
  "key36": "qrfThfPzaY577fmQ4fJU1qvnNQRj8ptSgkd9j8YNFUE7VsAnPAwVKCk2v8wQedbpGYCcMzjLGLLzvGDkcXKShVE",
  "key37": "32BVrgxMww2tRxkbnSi3fcjZymhendHSW7raCYFV8zH23zXKe4VGpd8qtPbKmXjYhevBujywaEbrz7hmgvFNJCww",
  "key38": "2srvCWXQrcbvtJiatVhRzEePqoGPzfC2NDAj3U7HZpegVH9pGJDZiGx8HncAsHAFC5nK4FeG14KSZ71zZv5ziv5B",
  "key39": "5vG8wD4xy7a5ZWSwtCmupcb4mkW3wLQKydRRTK4KhVuSdEC9jStWd8ChaawNXbkFPTRy1q8BxPJQeA5rnNAnsUPH",
  "key40": "QkLqrczxJEC9xVrgLFrSMDSNkYmVTACDk2gx1zqTRY61jfT83c56b9Hom9VtdR3poM3YdkBXkvdg5efXhBeX29s",
  "key41": "5mT9tTT59YmoWJUaPhv98kTYkHsyN45nL7dnbF673nphrePUu3pZQNEakUjka8i7t16i9ua6wjBw2327DeAvkKHx",
  "key42": "4QNoyXLPne9rURvPCq9uJ4dxFbS5TMNqzBEZfM7hBZnbtFjZ18cnkLWfaS2ApvrtnZ1mAxYsTngbvTU6Df3DJoZ1",
  "key43": "4hsdsVHhRUdqXEb7tv7k6XRi3k7SYEBSDewMqCuqNLZst1mGR4wcWx58EDB3DAahM1xuacPzYtku41cwUAG6Bdxu"
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
