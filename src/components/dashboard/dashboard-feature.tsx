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
    "2i7ZyeTL7FWeb3PASV9M9hdjR6CnBbsmntTiPZgLtqhqepSX5AXkNYBcJcs2v4VxvpScm2NSi3YFUmnFut294Me1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UxFc71HeXs9CtyfTquQoqgCBEeTXo8kxY1eH59VRyshZse48PzTJjcspTTeRBYFAggxJSHfJB7H3t3j4YBoR21g",
  "key1": "4qETgLxL2gZpxNeLt7628JzHmST5sQ8F53DBXmDaR7uuRhF6E1iTx2uHBVnzQa7RRVebLjEVGciumTMEgrwwxSf2",
  "key2": "3N1pEDRVceeXBVQ9xyy68drc3SubuPdahiCtwuVivTye5Fx4PTw6xWoPCPv1TYCWDbakwdmwhSdP64ou6KaZEM8u",
  "key3": "APMtcFSbntYGA9ydJZVLMvqeMkdX5BdLvxLNZxbuKCA1VTobtghsVxZEHTLtgu6bwWskhBkrYS3pEcLoDbwBphh",
  "key4": "5AoELPPcw8LMi8Vxfq81araDT4HJsb1EJdcewUaLFbz482iP2ZYPWufhMThgW9BS7ghdvFUToiMVk33L9fWfv4Fr",
  "key5": "263j93gsDNRhc65Lkrc1JtrwYNF8DHBeY4zFAwhiqsms9Qt5a6Ph5ZLhaNjfZkeRLCvFUmWU9ZSBjyR5K3FwZaTf",
  "key6": "rrBiXecDZCQyeKRmhx1EqVoJggYqhxv3ZJKjoMhDkotoCMwLWRozmf8YKiivKaEXqA1CkfCBn6mUndvCnz5QGX8",
  "key7": "43mALF3d7FjBqf5bsq4hwx6CtYbvnbq1mxXkeVM2Xfyqh9BGA4NzW4q9RZCF4CQonrH6dHiQdMjCKBd36TZRVHCM",
  "key8": "F6xse2qnk9XtdeAccQGpZuueKmy6oVhT39yjynkEUyFCBxSssKs6EmLgiLxHkpQQSGhLimQmerTmKr5EJ8hiC9f",
  "key9": "49Dc9ASaPPmthyzc4oXzwNt6xhtgoDrGBP4B4TrfydP3qMNLHxVPTNwTPjpaXhyjFXdSray3TwoKrB2Lv6sByeHv",
  "key10": "4U3ve5ieoBbJDEZiryy2YYqX169F55Zcpwyt2bPEvdemBAZCgQaprDPPxvbJV6Wma4cS5Lwhu6xmfE2PKkMYx9bY",
  "key11": "2cJRN7pb3yg54SmsTTBAroETQHxGAodVPdDmUaFPQ2XB5wPe5s1hMex88bfw4XdWYj38jfsi364sXghsqDNtet48",
  "key12": "4xBapKGeQGCMEr7axWWxACMWfA8NRbkKeyVWffvS6w4VqzBmCiyY7F4kAVqqRYbhcSkN9YvUc76dLZzphwR2wk7s",
  "key13": "xNkwsvZm7mTjiNwdxukwcCuAFoJ5zwZ76NrCYbQmkHUPBZH9o8vfEQkXKu3sWynCAiWSabGZzLSqjBHr2ouWcur",
  "key14": "xfLEWiFkmFxgyQLRTunCZ4YZP7N95WwBHgEHX1r8v6CypAMZt3eJ78mwKABv6HxyT8vMABJCVyAveK7Kgz9xQjV",
  "key15": "5HB8iUG5HuNPCM2SbBCD1ubFSzNHQBUddCGM2eHr6aFaB2bwYTA4T2b1Cd9gpR2ZjuWqMWrioACX4YdHZohZZV3C",
  "key16": "61H9kLJQq5Lwn1btgctFNSkGMhJXaazGYBbijWyniLzAS3z7ABxMR1DrpyLxHLACaFAcGBaM55AL34vBv7DEr3Zk",
  "key17": "8K9mFtvZrwxJrCLeTPyc7NhTENz8a3sCtq4BDbAoULcbGy22D6948XBJvQU6J9jfjz84NbAiEjupC1JhraPNkS6",
  "key18": "4Q11RLBzZaVuVRHPZcYBVxK5F98qQq4EDkFwVL6pyscLtHWw869oLSk7wvEYwWuPzKeaYTdf242U7AJHoZtkS8k4",
  "key19": "3tsKjspHYbKHhEdYFcSyXkJWxpHPhryV1z9zAJ5XEySRFHpV1yxmzsa1mvfNd8WJQXQFPQhsPh9vudqoPzwHKSqb",
  "key20": "4p3TcTCQdwNUQHAhMEUXX4TH9J1N65oM5qxZ4Qa6YswtB5GnSh6t9AYL3ReknxuEwfVmnbRty8GDVtaPWdCTfXCp",
  "key21": "2T8iKkkaK7UfwQYrPEC68U4njE6cC6umiSnkuvT3FcsnsCrg2k1QJAVmLt5RWrwijvZ1gc3dMvYZ5YqSTnuxQLGc",
  "key22": "2Sjpf4uqd65Cs292QitAKmqyUTQasPrPbWu78x2bTC2jDs7u7Mah5KU497Zv8QM12D6hLu6eSD6q1gEpB72wuFpZ",
  "key23": "4Pfjg3bqaUc7CMSVkjqzS9PcySB9AR6p9hMVijBdRTdUhg8frrPuY1UQsAS5zjSNdadKCY8U59skiEv5k49FhK5x",
  "key24": "2NkANAyTSV5T7jWRrZMqW7bPNqoPojGYpK17wjrduJWu5dhW8vy5hAX4kbbH967dNre8LcXQUwxvdRbH11hNd6gt",
  "key25": "5gsn21mynqD5XYBc4sgS4P36P5E8eb9YEenJ1XFLAzgVGvCvMMmEvfPMHKSmi3MGxU67VZcbHAX5mjR8MJ4NJBs",
  "key26": "665NKwtadskVNg4j1srwyEJ3Zs1WaX1S99mvvFtf12BwRwLe51C5F4pT4PybVj7556X4xUhjhcpTfnvkbMNMcPbj",
  "key27": "3Ck5ihW4wa3R7j8jrg3EnHhC3FYPkC8VHe3H454BkTGacHdU7tx2WM8HvP9beQ3ATqtKdKnmcVWVn3S658H2DptC",
  "key28": "5RQ6bod2MkuxxP3CtWBQrrwxFYXHbNgNPBhEjS75XtUerJ8sdonG5uCgWF3fy1hotgNboL5Q8WkD3gLesNmjMYhy",
  "key29": "34D1RBGtcbk2j1b71w3b13GJFd9Kbkacw6hY4c4yxMy5mY6uFx7oUuMLp2U3c3doiUbDxmi1oNYF9E784awTX4pP",
  "key30": "2KMpjjzn4JP78yruTndGfCgwkDZUq51137WvT4XS8512AQsabaXBAZmWoTw28YkSQHVnADdTiK4M2b7xjHBXzBqQ",
  "key31": "KqaFWYaUe8HesTQr3cEd8zepbAbzRRZaGb46HVZnFFTZUZtaU45XCzwG1iZBW8xdK3XFxKByCSHx2atJDKSeSLU",
  "key32": "4nMQ2N75GJfne4aUo5cSdP6eYXfvuEreovX6KdguYwiLKoMsgK7fEbCHY6mgqGsB1Q5FJMYozrZsrAYaAU6exbG8",
  "key33": "2FKXS76ZWVYgHPgRFiqWTy2fvXoVvAR1fWXDo1stWUf1niMGXvKHszXabcN936tcPWUXxuRFhUBzKVVovuoiwQ2F",
  "key34": "5b6W6zRQuryR7YDeVjeEF6HN1sJtQszFBQeGnE1Lt77EeSyUR3ZtDgKFP2vdoshdL3DU3RPrenvSNCTbH3bR1wsv",
  "key35": "2bKYo9EkTTFmykbwbqkT4EeXMqLZCWugxbUHUp5BWdF3UA4ynfxkJFKeihvF33VB3E6uJuFfNpWuBMKrPdBfNNTH",
  "key36": "3wekWECpGSpKfoAoLYxpnQq51NYk2TPzKTKFQNiTkAjhMELFuBZ3ybD9i4SYcLA4YPEUKLA8WQipZrWv4z4ckJL1"
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
