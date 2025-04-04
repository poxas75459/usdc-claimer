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
    "36pTg3zWBBtaSXtcDpZWNLEJUKrySzp7Escu9yVfW928H7UuXAKnBUdaCjmVYFg7x6imErMcJbhwcfWnJeZgzBK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GzYST3cCjsQkjWM2uQbaaRBtRGJXLNNJfWgpmSdvhcUkt3NfTZxnUADCZfkouHXh8EVGzqBxQCwJRYM8kagsuJK",
  "key1": "3MqFzxwiyTyfUfYGFvzgVB4fHEZ1XgP2DJdUaTf32dUZweCTJP5cUTFeCJGmBUuzoHcEgunqQDykE4FsmDHfDLFA",
  "key2": "j8vgP9egDhNsmkoxopzRUznisp55ACW3KTZr3U99MCM2SiaY69cFriUEXnfFo3jPmHbRgsTVM2Bnp1ihidtmHRn",
  "key3": "2jsrcxjCpFhmYuCSvckQom6JbSnMUN4gybqkHBNzZ6QTUJxcZjuMdZr4sXB5m1oMMTmRJQ6TmKzmbfb2SghuHUZL",
  "key4": "451CJGeE6eTXJe8PYaFZwLwEWY7KR3oeZpWLdL1d1jP823benstXJZYZsM58jxWFZXppZuTfU2eoFvwW6v9J1hgQ",
  "key5": "4dFivNyjth6CTcZCJRnUkS6sVFS4t6Ysv8SDAQkBMMrSwSgu6mKS9TxernU9ondyk274LNUq1JTMt4VHfDfkKYdS",
  "key6": "4se7d5n8FYomU7fJQ4eLnvzsrEm4suxpZJTk4RPG69eTjpWj9URLFVaFrAasnp1gDm4vzvzstDdAGsRvR2zbdE56",
  "key7": "5vRrdWCxioSAWUKhmEyS28f3xzRxmyU8bctuuZnGkamAC8khisXTmtvoo1ZPq6UjX7Hb96VttAGHdKpEjhnWcyt1",
  "key8": "5HtfTpxgYjKZWUiY71vGRWrcJQnqMmur26zHcTeuBUauBXd62w4eBKpCbCotTzoCVWTGHZKB82KxeTTL9PvS1qoH",
  "key9": "4USmFKkxz4DKCzbHBfnsSadYZya4kY914bBzvxGENGJA7MXmRXnaGyeCYaa5NQegRqDMbKhBUjH8DTKh2G8aBk4B",
  "key10": "3cxx7BYChmWtKZH21bwZrsUa8GkENRamfVifuXzVAdL3FSQBvQcYeAD4P45FN2f6PfFQPzCc6PRFiyRL4DjrZAVH",
  "key11": "552vJnRYFSKBjeUa5wbtQof5ZL6uk4GXUhTm7tgW11iX4zKfGur5iEx4CR68LeRDMKzvDM7AFhcsVMKf5Q12ibkC",
  "key12": "29kxUjwC6hvFAxsfrzY7JsMhCjTf2X4pJ7cXFC8oZHgKL7Hvc8aKRGGWxrJn4a98p39Lr9hT4G7Ub2pGfKJpUoT4",
  "key13": "2ViJVbhuoqTsDoRWa7df6MZKvY1MC5ZT3bRyqAGKKjhP9XXAFtdMT5QPxp6rBxNYN1qDZKWRXYkrpkqJqFJPP7MA",
  "key14": "5CRqDhBndEgVoNp9LumDSW7ofZaxjBhyr85e6z684qWXAwsNiFfxSRQVbi3d3Jf9D5pq4oLN3hgpjGWpcQk4SDVH",
  "key15": "pU7s4PZEriY6dDpiQfDZaggVjuqoUdEL8E8JhHeoN1DMgsCaftd8UUCfYRRpUqWmPKdnvQEfJ94uPExHfyDYCFG",
  "key16": "2k7un6SMqDNp7nBMczccdr7E5RKR5XYSaio1d8HSdNpJ8VF8C6uswLH2J5Cx8rWp3ajvbhAPEYgRErwNyrYKCQuE",
  "key17": "4uD5UrrLk1MRK5Q2GgZhCiQumUkyNZ16k3vAXuYyiFnpAPv1BHHjRngXFDKNQLsMjbxEBd86F9EkMpD1fyoVhww5",
  "key18": "2MRdt2z9WBRSf91qumyCckMTCf6oj9beaR7a1at4o31iwvybGrEjtD4JtHq6hC2teQVtCaei8yZJWgvxxcLKuSra",
  "key19": "42f4ruN8M1P7VQuHL1hb2ZisTtvHyVxjVqXG3PoojgYjspmYJ3R2nkD9rs5Qrzy4rdZTfU9CwuRxhnkNUZdifjv",
  "key20": "21eYpQo4dtjJakTRK2oeEDg7uKLZigb8ai5uXRz3b8XdTHsUDRH14Rb7hCT3CAJ985CTKSTPDdKTCyo9urpWryFc",
  "key21": "zPrRZoBCv8YzWumk6hqDahpSJLDGecRknqAo1Ljk19kNmcREhpDGkTVDX3AyDt8HUrCsjGTA3A9UveDvEs1LD7E",
  "key22": "PisPnH4izEAHwod7xZhuZjmja5g9UnR2amH1kwdyhR9h9Yf3xmdUYoiiNedtDd1FENzeWupJA7JaiP8GziNZv4s",
  "key23": "3bTyQtvSeUJHjZu2RZMszfh9CpgmaARG2tT6Qd8YwxsbL7CH422bFgrwpfWJAt9Ux43CED2bd8K5G3kXdC4Wkmw5",
  "key24": "3oFq6q3d2TZWXaHMLR6GaKSCYNGAgydWW6Xk28RxrtLqA7UioVd4Vq1KMwREswosQ5ahTkDPk51BTLYK9TCDt5p7",
  "key25": "VJvY4Ri2Euc9m85MXYaFKeiJGrHYCKBG8wmb2hatw9swWSSFdrAT896bLFw3iDscxeY7ueiEKPNCXDdgSVTQQRV",
  "key26": "2cE3YpeCcpGBtg9Lv2exVJZpSMPn78nmnG4txdCtjRCTWQtmrmwdkqKS8fsDwKVKahzZn5MSZ6XwFUEcLFkx6TYv",
  "key27": "3n1jmJpm6Ckcp2Q6MX5rJ7EFjJHHFT6ruWh9o7QGDXdHtshJq9r1uZSyg3hhNewQME5ELnYMakLxRT6wkti15pVk",
  "key28": "59vHUiKo8iVppZQFHfiBQSmACgeZgFXheNVndkhNLuQyJnJqKBFHEP3CJfYBDZNQAdNUBxXFayC6uEF49kCQNH4Q",
  "key29": "3by7jURBTuapACciJsFiT97yDd9cpALJy9s2r9QuVxhrKyMvLWPUQk9SXoVnGjeYBSsa9yPpYTQfQc9rMQs7t9pf",
  "key30": "2nQDrs2z3tnTECCiDq8pMYPT6E3sHugaMs75bR1fjoXjRFaVT97yvd4xREwaKxu3qaUrSTKGj3s6NBHpuKk8mj2x",
  "key31": "5k7VffNnGHAPkEJmWNyzC1VyGuc1mQuZpHkvL4iYgyN53nrMr8UZco5vHX2s1vyNvhyS9UN8eipn1bk1iPiNA9FD",
  "key32": "2jNadabxshZaBBk63Ms63H4oScZstzrSCq2Q6RNq7pE3ceD6JABccSUdYsNyhkvBzxCQ3XBAwAPEfA1saMUchDh",
  "key33": "jx8NML69MkYbz27gBy8YA9rJLHE4c3jV8kp2S766WrDCnPKXcUTcZfBNSVRpKXm6qvwqhGqZ5qWPEWwNUQL3iHS",
  "key34": "2HV6zie6D8aSzHJGjsK8imPvLd3EpSXhbUR1omWMN7jFQrHbuGWLADukrw3FWX9ep1Qi82Soxhv6qNMx2qAM2H4J",
  "key35": "4mCaUCaFo2UDLHVQ1DRxj4vLu4L2jU8FEgYhjeLEn4k5JMX9MZ7YtsxRbV6Nk4xXzApZiM9pJ8rbyEXgvkRSaaNv",
  "key36": "uP9bWgjL9qHJfPrEm2tsJuFUYk3athXfitoJkNonYwFHVhHyCHyh5jxFfRdNUhB9K5geKKBn7UBjqxziuAnaWX1",
  "key37": "3QidmycJHHowCAbFKnzMSpq3zyAchfV5rJkbBNtKuh2oYwzEomX4cg85Vx4mh6AXm1zFe7z9ZSwY9nzb2Ssjhwj",
  "key38": "4eDCLpUhPLAyT4GtFsRgo4xjAaTqBtFFTpVV5anTWFUWvjTcXtUyEjc3TBrZAB28u1c5zu9PWusZjJztaF3cWocC",
  "key39": "3NebjQkwVBsr5VZHNtKqmYnsT4K2pFh2Cz2JPEa35KhzGzHwkdzWf5YFomH18FDhfCMozn9LCYAJTtxocaqXhGG",
  "key40": "oQW3bkQpUzRRcUaf1UKN4ykXX1ZrobTkX9rRn96nscZxPRkMJdoBbhbm9uW1MNDtLikkbqDsn7dzFAPhYn2MukU",
  "key41": "43zMQCjkoH6CPvK276hs3WyorL9BsXegP9A82EmCYAZTs5jxJqPfXdTqe2hcFDCbMsQBYz83XRiCVBt3KxpjLUvm",
  "key42": "3MMzD1KWPn9sSg9iuZhye7WVnWvwyjEhtm5ZwByk7tfJttJjrtQHN2nqrXcWmiAay48DVtrwroHCCr2XoXcEoVVc",
  "key43": "3omCcuuKgKrPTJMb4uFRgwqArfu3q2LPRvg8PjHpdKukyNQucpJCtk8vQZcKBkwLLsZGTtEwQDda7r2yMMPud2kP"
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
