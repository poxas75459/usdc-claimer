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
    "2BLxUhLC5UKosbcWDU3FvfMz4tstdvvNRE1ivpWBdoLn8TeK4T5NYcZvWmxPVpNHYPgrUppVg4jAUGG1Sjct8ter"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j5oSoSJ4zJa1y4GLaJ4BAckZkP8okHcx6kaUAEAa8uTAN5LnnS4MDcEtWnpK2MwK8iCEeX97s2SFMbW9dtAA5Bb",
  "key1": "5nEfRk41DaSJLhZMrC6JbGFPuEins6Zdyx3ZZ3tU25hYMJvuALiQ8KBkDAabFVKtRqDicia15tSmUfzHAe29U93S",
  "key2": "4GNsdctVknkjj9hwC8igeHhGedzMgdtkYFYY1BzaedPoZhZGMnGZFKC4ADptnVhiMSVt3qiAL6M2s7JA8hRW4uwe",
  "key3": "2u38k4vqqX1XMmPWsAVYRiSjboR1WupTkHGMyFEA9BkZyMmcBx5djENew7K9YvjyF1JsxRzvijn4tJS8GFhvK6Fo",
  "key4": "4pJc54vJPrXwcGExASFtxaNdGA3J6zbTtJNX9ib2BvoQFvZcuL4BY1e8JRZ9hGSXg6yB9bJzydJX8gZooU1Jzifi",
  "key5": "5H7kyut7mUuu4L5j8HQvu1KKwk1wSJtDKSAViXdYvKRYy4UbaRLzZBNTgVEvsQqi5NWfNkQBs3mcgKVNfGhiuPps",
  "key6": "5v9WdW2SgcYPLnHfGoaQiABpzqhfzQHPQ7tXNtS9dogdm9LZ2825hFf9Kp7Bx39HA1VqfRdz5G8LLPFCrfdMLEsY",
  "key7": "24KKbA6aAAB4rLkYGXJYVTa7DoX4jMUtgE7a5o55cmHg3FCQyv5a6VUAFE6nYWEmfJz7yh6SD4DHtEZSTiazjduY",
  "key8": "3TrGHiDyvQHURyAJjwRgh6CK1tsCFXdXhzBpXgyAuik4UEuiXNavEPc45Ze2YhxD3wugVXdfBFg1wxcps1iCSM7o",
  "key9": "3iG24YwpebnfCG88rz2oPcKJjWDQmWm5Wg6cUw1Vzqk8UznBJZjXEjH8mVTApVi3P1RqYrZCBxYSdjyRLZMkWXrh",
  "key10": "2Mt7iwMEMsXWBvB3tGJ4TGmgyoSPcXUC17ccni3bodpupDp9UUvSnVi4JF7kjrBTy45MukJY2Tdvt6EpGmhvhqUq",
  "key11": "37Tg86RQ5La6Th2BHvpnTTSnVESXtuzMjH9yBL8cja4Sb8qmSESxT5qqEmDzJJBgCsueCt6qB6SRyLN1W4RWEMv2",
  "key12": "Nri6dGm15Urmf1gdP7K6YuU3bQDiwQbtRZCZFaQFJJAyvTUNVydGcEemx4fA2XYzmcqmdSXhVUVKzrM91TpBrAm",
  "key13": "4apAJMckGnGayKsS24512XEQykffY1uMwzWCQUvbVYNQRvjZj5ya21ibfoWQTu6eVyEh9D6gR7mDkoQ7L5Akbo5x",
  "key14": "4kJhRRhCT57e192FXDS4Kf8rVowLdyYZUtMtBc9Vbxc2hpkt5uq6gAzUZax4GWVr7y93TsmfrkqBS4fqkP37C95q",
  "key15": "NxQcwSzvRsak5G32j9wCPMTJCT52W2mcKeNd4tHJsGu5tN7ppdcBeWw35XT6aNfw4FmFu711tgEzqe3feXPzXGk",
  "key16": "t9GkVG8X2B1V9ayakZ4e3SdCtaSeBg5dj6GReLDhiuiQ887dny12Ku18dLU8i3xsGdfbnJEzPtsgXNA4jmw6pJ6",
  "key17": "2qxLRWxWf8yRzgzoKiT4sK5ae4DjmiXgWNQrHbXtKTgRiHHVbDe3YQdvUUbEeHaNjC1KRtkcmvitGR6P1EhQfK4",
  "key18": "BzUn6CRkh68mihjwQDjR7RT2kfqJNGp2RWHw89q8DgzvzMAiPpShDduAf4rEaM33yjfUK8dha3TYEvaDL4n7aW5",
  "key19": "3wixv6Ej6rkcJbCVWTotBvefkJpYpyFHr3NgozkmiSNaFZKVUdVAYFzZsx4B6Eijg5SYS4W5dzzEK7r6ypSzbVMR",
  "key20": "3uXYHXw8fUnJMAvVCXMakjPyuu3rwwKgRgGERyQADeHDLsCJXAFLhxGvizFbyUPsKYLTqyhKCESzSGBLgubAYBw1",
  "key21": "3L2FfhFvEvjkrq4fyYni4z397ZphtjcpbAnt6eJ5CvMtE6xrGyFNw315TpTU6Rjd2PBsqfi35iUZLx4qDFV26Rm6",
  "key22": "2BR2H3EMsFkfc6heyCW8eKiBSGB59PTFd8nyHNEiioX1GJWMGBYfjfmvJkbbQ9hNkSqvzMsVJ3Q2AYQ5h75s2kKN",
  "key23": "Rp4rjYX3WjFgHrcCm9QM2BMETVt5bKrGH8byCbbgZp2MrtifwW1iKRwbLDbY35Bri2AVkmP7UDYvuyczogvZApw",
  "key24": "B1y26aJDBPanKvrWHueDJr7DKiezT8UTnLnwShcv6La1Kvon5h3ee2NKp3Kg89CuXnz2jR41HrFa2y8oAA5YumF",
  "key25": "3SV5ojfUYCJQ1kzhDTP9LsC3wFwADHh7qFZasSnib2NscDc3gyDdXdAuwN1JiGQSS8ee3f5CoAYHzXCSBC3PAS7T",
  "key26": "2F3xQQMiLS1KRumhWJ9WPQkrmLDDAVWrCMEUuVmAKh1iVY7J6DqvRnVyh2eHc2J57BBpUaNmZUJdGF9iH8X4qTGJ",
  "key27": "Jox6ZX4r9vkazTt4b1LDzY7gRv97XogMUYFqCCEMsVKG1Z5CtHz6ycrtYrBKFfLN239wVBn9PqtABqjj5soUjo9",
  "key28": "2vy6Ja3xQoTv4PZiD9xB9dk1LT1cRVjpSuHP1Fn2KcuoYLtncJUfeLDhqZ6GAhqWpCY6g5Pf4fFGTANDGq6DJwUw",
  "key29": "2k7jFjPdB5LQzPDxqn28KyCSwDzvVZLSXgXHDBTCv97aUir7Ajmph87Z16dHKt2eGs4m38y4P8opA1cV3LTfFSyb",
  "key30": "2fofjuhUquGCYq49jq9LvTQG5AjzuotJc8haAscqcAuHqLiMAdv937X1854uBXXNFWXawWUXYEKLFzyprg1vEEwT"
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
