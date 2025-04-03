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
    "h37AFXwCFnX2qk1M6XLK5VWjYr6nSJjd1K9p7zZpqGneUbsYCW7gdcSc5X4x7wLGVNSwiS7KHYRQBdj3P3inZD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a7xHTHDrVonquAVEiNUuNjFyNpgW3NPycfC4JTPSpBCJjh4Qr1V4ZqmQMVnjEZ4FtqpBoiJDDDkx4yxYkWiKcU5",
  "key1": "5kc7aiAB3d7oYKk4EDNfYagG3WUJvpn4sQBk9vLpWKpctUi42xcWyrazMozbTZug9LafR9P93v3CYR5D6o2eh8G1",
  "key2": "2biaZGubGLWzrZWjtwpxR2MVfUm4eeRhq4caQKUrZ2fZKAhaNoMKcyPVCScMCks1pnzpNTWSpL72rbccd5qzyXGK",
  "key3": "3JM3PQir7JkP78hbvk1JUfDZKNdbQq1r6hrMMjCvTcQvo8QjDqGM8z5PFkpxZfun4Nquq1MDgh1oBFEMAwJSV78q",
  "key4": "67aurw3o6aDnhnq5Ktzhmdo9U3WL2hFtL5HfWX7SS5o4xrFrxuzaJoFxBuVcWek1nrLPZnGuhC3hJR13KCJ5m9Yy",
  "key5": "2z569YatBPFKKtq3Hmei7SCdUrVkSBXvxgojgUbiPsPkrxALiJgjQRobMdt4hTaEe92EUMM8NJFdsciaqjfKgdJM",
  "key6": "63YMUayebUP71v67VycCoYDZRZk88ecNeBaUYQso1Cz2Mju6b5ywT7DAVV7Ak3qHdatGSYgqu8mE8J1FqVK7ii4Z",
  "key7": "2ShxoA8f7va2cGuKhot2ARFXJ2YkbMvnaKwZjFYHXq1JUpR1b5cXzGg9Y6dEtoGUdTrVNiPfeuk6qLcqnD8R4mAe",
  "key8": "2tTXGTdYVuC4S1H1sLYWdF3jskhBvFJd4Hm4Fmj7Ri6zgLLE8UcYEH1HrSw9BfJqRkZcPt5QjeKtRonPkAtHMNzV",
  "key9": "2PoA6XdK9maUWnF6PkF95GCcgHqLbcyQsnRw7aP8zHAygJXEvjaDYvVRAVYt81r3SLxgR5LjQ5hJj5wJpYjn3AN",
  "key10": "5FWegxViZtXR9gBkd1ejSHTjM5aG6AgKdGbfKpPKkUE2Pi4LarSy8xiju67pEuUFKJG8y2yBLfF3nyAEGhsbgTXD",
  "key11": "3eW1u3fgARJAqMF8B5GVcE8onJqS31pLZhvQSPVo7eCtWRdJegD11B7suvUsJJSYeV37RGVb5sv8J3WADWDMVAH3",
  "key12": "6efL31ByeeKVd4ySDaLtR74T16QJ8b4QuoTkrQ4EuSWnJBhZpLffEi5gBnxWUyaHGwoxtpKQ5K2oCkyxAwCdivE",
  "key13": "5PqAxNNrCPKLNwLoQpXF3c6ffjVHqAag3f4BjyeJix8MiaJCavZ4E9cXaLyvitmuo5c2ajXLgngMv2j1jsjJBdR2",
  "key14": "4Apm9UWfviv2bPWcz8vXsHoLuvt8u7maT1NLyy8dCC7MRWuKbtgCiHvCZFFZJSUfzcGCjXYbU83xTtkVLA6pkCv1",
  "key15": "3PMbNhDG1axK87sXtmxybyEcydYk3EdSEmGesuESB3jVCvWjMN1aU6N6gAZFh9K2szMVN7TKSpSEUv1sT4FBPUY5",
  "key16": "4kNuzTFzKFnH6uRFsTndiNQB46xNJYhkKp6HD9YBfHP3wGtsN4DjM7Yj2VBrSTVr9DBgYLxKopFriYHW5i4Y4vu3",
  "key17": "5egCGPKVCW5VHwEjBTdZvgsKGWq4Rw4JYPWbm4UEru3gAERej4Lky9iBUuE3exEQnVMBBsdiN4g5e3aGXB4wYRN7",
  "key18": "4Ziw1tNYjsVQThXn9DoyUGyJhoLYMUTyF6JG1ap8SW2cbE1c6oxFjJHzpJr5dv5f646PScKv5y7rQLPzZXKNcUXZ",
  "key19": "65YAqcZV7zeyrCmxoLkvnn2whwTyiSEgNbojUSRc8ni6RJ3HvBuSfWUwdGQ9S41jCWyfFnAw9xvUMpF9AJK2JJzU",
  "key20": "58QXZvnxoduuwiA3WDC7oGmZfenhxDs1urnfVazFg5QbPTyDTLZ2mNKM41vHuxwvXxnC4FND8XgECsCiUNftvar7",
  "key21": "5KaNRLiUFU5AzksJmxdERR3YCVy8iggqPXkQ9YmoQPn3NbJujdt7txj9zKWL7ZXs5bWaALXxSnoVDA72rTmtSioR",
  "key22": "2Qs6vGsumSAMWbbxTXuNFcXmWXMkeoL9AZYamcwuqrYG3hnaaup2UTei64FqPyCcgtJ3durDBKM1csfS9jxpT5BC",
  "key23": "4hh8E8wYKKYYyigLQLEe5cww5NNt6Uzi6NvibMH1PskY9c1vxyqk9fTP9y4qmtjmTU5ecsQw95UADTdHDjwLsZWV",
  "key24": "343zTrahNdgBvutqZstALtkbxPCGGNkDunRZ2FSKpL8A2xhEGHBYUtwopKczHL5MEauRaeMNhZyiHZHffkGLnmSs"
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
