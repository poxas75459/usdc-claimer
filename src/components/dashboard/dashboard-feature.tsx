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
    "4zBphjZBMD3qFe7fsc7om4HbH543xZdZytL5m9DeSgSWk6f1htBCrrMR8UnUkS5gXssGrCBJd2FEiPgL1zFqcoRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yn61nrviC7C2UMYLimoHdFhk93ZBiNkYC676RpTiYH2nMRKwAQS9td5K9HgRLzeexB2SK11n1zTjq4oBwRPVWXx",
  "key1": "4tjdSZj8aycV58QH2dzeH85wJEu8hQYBukQhL4k4KhNDLQG7Koz3XQp2Jm6N4dtS6ZtHUJyQLw53nudYkMegH6Cq",
  "key2": "rigHHKLXbULfDTjCqfDhDrR5jjZABkqv6yrzNndR8TQbj1QpK33RCtJNjpfbdRS8K7iduDXMZtAhRJ9XxvSeApB",
  "key3": "YBnM4QwUE9tqMPhvBZjisKT6LZB3WHfQoBVPzvwGi4owenLk4RrRsq8PJMznWz3HKyX5JLDZYH1UZCbyRWnnSXX",
  "key4": "2qpHGoVednySG6MTvdDrR3ide1aJk6iJs2ezXMoVjMRsvqHedFnK8vtMpJNiVtWRcRpQDQWuZmuf2snsXF5cqsRu",
  "key5": "pwuxN5ud2gUamTxhG9hd8XNmYWHprotBCva9WTvSzDn7uFmz9uB9JFBwAuuh3Tj2f6bEFfGFbNCfaZ2JbrM2vkb",
  "key6": "3KHoytmoGpJpMizzDjUVdpzNd7rBZ8RN8RzsBQRmVwwk9LbAqtan9rquZrgE1Gt16eqTBjZay9YJubhHyYWk3Upo",
  "key7": "5YRStBFJbvhG4Qe8wsXuVxyEkgv9i49frWJx4xb82y5W9qd8wHjBgH4jCbJxf87fMQUQW9Mf7XEJ9DTZDLdhQNwc",
  "key8": "5VZXpitMyVkdRfwgKHGg36iY2m3yc39XSub2HjngkpD6VKz9kz8e5MuMCYjnfpAt7QJHZ8YNS3LYg8DjwnWPhUgC",
  "key9": "5vfNY11mcTgNiNNhyB42DRDZS5Y32Au9Q3952pXrao2ScWhA2GzDbqG4ppL6UusnF7ya16bQxNwtahp3zQWYubdo",
  "key10": "3rwougPkR8tAt9NH6gUJBXmQEdy3gNFQrDBnt8PxE1LgpudvHExF8HNyTJeyvZEhAnmeu3Xip5ZNMfqp2XyrDdTP",
  "key11": "2786SgEYqcSZryYTksd6BCjnv2vQDjzBmCVj2BzYxbdZcEiKtMTJzV3LUxFtxRaSpkwtAhWgy2Cw8xYeRBN7R785",
  "key12": "ToArWo2LTXkz6Xfyf711mNEoNDmkPSDTQyGiU9Luh4jVga2uywxrAC1YRpqXHTYfEGyirm97UxejevPGESbNRat",
  "key13": "4Wb38HdAD8MojZg8y1H2GFN6U2njWoDEYs4CU6NyK7rrQ3xGo3tMBKF2TJNpu671KHqVoVU3F9q25weusLSwNQJR",
  "key14": "3oD1uKvLYWDDaoL48eujPgxwkJ6frZcfhVrpRBXNhUFfPLeN8NshqymW25g1FxUbNA1ZgapagXxEfHzgmz2oC3Eo",
  "key15": "3Uc4hKPzvY7RqVKM4CBS4UAFBrgbNjo3yiHJykBN9TaihMMRwNqnvDzNJh3dzgfr9KrZEMocK3uQirSSpSr1M5M1",
  "key16": "57FqVm8jCG1dhToDEpZ7NpgeVfV3PekZzjVcFEJENFfHMeyrn3JHSJ3JYwGtzv9LihkUkygV2whGnsfawnipKcd6",
  "key17": "3WEPQPhaiKSxqVwVED9vmBJvnDVUAFZkRu98WhjapKsCc3qgrwWJKhryyQWNAeXab4T2nnneh4tX7SpzN2iYCjAA",
  "key18": "tGCK2yhSSLednEb8ZKjTJBHJDYsq39Pm6Da8QCT1PBdiPV3Y86HzRumDKk9B4ZBaXxNdzcUdWKEPp3c1xrzdma9",
  "key19": "5dCF4YuR75XGJBVLx6TuNFSeSu6S89ry8Ncc8VEnDunQUu8gczfeAUXmCfGzSeBMDdh9A6ihvmvxziFE9DM787sY",
  "key20": "4rLgT3YjaAcUruwa6sNGozjNmB7fM77QLkLizcJuDE4agshhwAdrd96kJVtNbH82419TUidHPjwL1xsXZBi1Z2Kz",
  "key21": "3NsmnJx98V5iJm3yBnYMnRd7SDQBBYxY8NpBZFL3f8rEWQma4yDtJgTRtTKPg9LA7WjgZPrUzENwhaqDa6QnJmeP",
  "key22": "wQHfZiscWZdWKteDvBnoT2gqbZ4guXqZPZ8tVYZ18fWDxtLcC7pNkEPGDaL3oJGeGTo8bzg9dqDAw2UJLRdQECZ",
  "key23": "5ha52XVH7shKPBK2G6x7JA2pjPnHoPW5wfb245kUbecrx7nzSV649tQ2h7me8MMjmJsXu5W1LMZuavKT3d1EN1Ec",
  "key24": "4JWVfvAgyQUoCNqnKUHNJRPoS3KeiN4J3feWTWxLiekqSEntnAV2BqutV3chPoa3khBmXxKR1grWq53DmCtH8vEa",
  "key25": "5awHASSudf5tFJMEjA8TQjMZFzHRHTgYBPEjmuL8dSaFsTsnHcd9w3LpN3xLFfFoJDfq78cyzp2hw4V3BJ8VhPcc",
  "key26": "wjuTfETMSx4cN59u1DuLKtZDeUBrdpWD7mVciWn5y7euAd9bFxamd8MufWKhUTxiQYWb4st7tsSpDbVxMkTpWf1",
  "key27": "3EKq3DjYXV293skVdbdnHWn8mB9tRvwVFXtJxTPcK6XNGjo7jkcCL6Rp83673MzZm8jRcSwXv4U25hb5r7kSJ587",
  "key28": "4UX7YjQHF2E4aL7GftwoY7f1eWfN1V1aGU5QxvAsn7R3Y22NQyJqhbp2BxLagjCRRMKhTkYGQmrwJw2UwVCFvsGC",
  "key29": "4LaggFyr2SbqaVmXDp82DJ58KQXiQypYxVWzJfKQv1H7ayD2edKnbWLBGxmhcZ23dgtmrZxs15dFsgTh22ujncnn",
  "key30": "4r4TAuidSBNGoiwM1ZbS7CZR4zR72urup3jcf9WUzW4CKD8nDTQN3jB2gR9Dy5SoA1nAqZyB9Cqjd2jmGbXgZPdy"
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
