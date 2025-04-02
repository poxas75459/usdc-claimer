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
    "2qkmoPJpzCYr4gQbBLwZeH88jVso367tWai8276DfaH7nMF2GoJEn6MjwRMiHfUX4tPSaEnY31GKN1M2RfqnkEoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eB8L1JFQK2vvKDxHDD9tpbhYqhqBDcx8xmprauFKWcngVZUb4mFF7QWm1L3pJyJsdQqYqUxYm2UNrYWWWa8pJ6B",
  "key1": "22BjnkCvLZYgRDjoz2ohGnWL7YiwyzduiZFrCWsSmjjP3WiQNCwibREiV8MN3k8CT42JXS3ghjfuZbF4Xd159cAR",
  "key2": "5n4uj9VFUmXrJexjaEjLfVBVE3GUeMwd17UigMezSZnJTzSWrEAQZVRRg3mwkKQ7ZH4zz3NhvrcpeiXXDsokK5EG",
  "key3": "3XiSqcWJDvbERKyHFxHBqA8JifGp6s4eodUH4GijJgAhFyXCpSZdydFvk4WrHDjM6r1DhksSfdtGv8wxhPeMEvUi",
  "key4": "38KdwsPfcpogNz8vVd1vsU3EJh6HS7c2U11zZnknaeggpBi9gvC91nG2XkTguFH7L5fabpuERxAZtwTBYZYyNv6Y",
  "key5": "227tZLHB4XXLQVmqrMLjedknpJaXSdkJKY3LTxad3rpCFFm3LuqAtp1iNdWWLZM5QmQahCttLZBnv53iYaTbVk1Y",
  "key6": "5ZrJy2JKRsZHy934XCjk3Ka7Pv8faCc2zTh5NovLZpjUSjcvPnmEYcUFkRGuqYTuQRmHausvcHzGSoosSB7p3udH",
  "key7": "4fbL8x1Fm6g8M1V75qfwcjRtFM9BkySVcKSUf5T1v2yxdWSurJqNoP246wwysmxyurXDbGcvtsFixL1Np2BvGigh",
  "key8": "5A8zaHJDsSxoNXe5Hwv4E7GiUrgxBKYtbVhKf5XGai1Sotyvt7HFQ6Rg69fn4gGz3aTSVaMQDThjxsT1vUt95NsH",
  "key9": "49fm2FYv1eEL5zGNvQukgcsyuFan637ezJEBERS2hVBmX8KYb3bywd6rT22VTMvxNnmNXomBKRPYdWdW1DyRxvXh",
  "key10": "4jw7isGFW4UDiS183jxdx6xaJD3aTi7wVEEgo3q8Pa5LWaAgLNJpzCnCz51trd8TjX4rLCkc8QUD8y3krFGPBYzC",
  "key11": "2REhxYM6WBhz1NKFLaiTYXiSYe85bujiaCDPJdCX15BBtC4uB7cVeEnbNuGsT9sETkL1ULLgYUukhtFwQEv6nvvM",
  "key12": "4qTsLGTbDb1A3PsmYeJgWYjgaKfRZTDh8GfiHKViaZaxQHchZhwHdZ7YG78mNgj41c8WvZktZunEwGtZVwv7A1km",
  "key13": "xF2TFPGkfoUTwo4weNqTgPJUNaqFhgzTZ5hGhA99gVzMv6hKNxhAeBgS2aKJXbrRAaLcXqRC73YLrR2paisE5Aa",
  "key14": "2kkAPPdPKLHH8YmGhp8NuJYdh3ZRddHencaB9EGTr7PbrGWPNuVt8M92uCmysEnNAmfuuJAwsvVbAsNW8eZzpA9N",
  "key15": "3HWF6TpTsY1cczJvusr3op6ib1vHUcKPGQbtvYiCdWCXryZHJJLqsBXZr3RnXdhdY1M45Rs7EeMLx43DCbHNTsdZ",
  "key16": "4yZAR4tNLVhgreZztGR2NTBjqY8ar749yWFVSUpqGVL8VSaFjGMMeBJ3HGE14qrmCkWYah4FJL5nAPy1PF4Z8otH",
  "key17": "JhnWJdDvzdTugNtUYNdPKvWGnFHHcnqtGpuKZYBmBSexfpUeGbNQQsZbqah12wVYndfDvv5Jg7Nx5wqqRTXytFS",
  "key18": "4a6jAK4qSy6NMPnPQDXvcD7WhW8Rie77zjBxiakdNrPJDgqCMZxaJRnWMc9jq9zrgMhfzMGq68wPjeut6W6MWkDA",
  "key19": "zT5HBbB27Nf6ZxXWsB1V8fr45R7LH7cqUVqgiFpXMpHREw4GzmHvLHi8PUhTNdSDP16v8Bz5ipYRAR1RsUsX51Y",
  "key20": "5Mqxb2hiQKVW4TgJCLnA7wTn72x3sbdAiy1N42jUKy5eAF9XBetjcqgo26FUMxJCyKs2VgdKzHeT82b6eLxYEYad",
  "key21": "47H16JB2YyyxiLdK4EW86FMiNCFLrF4HA8vJbTJQ1jDqJW1TzchYa92EeBtVw34dF7qaxSPC1Lq8HpnRyiS67pfs",
  "key22": "2q7orWJitUt5mUA6MEXZXg2h3taf1YALiuj36DtVNH3pKGHXSR315n6BABJWPZbmqE6GMrALuaoQYY3jhtMSKdGG",
  "key23": "67PNeycWPdSQ1ft8SK8HdeN4oFY2h2LW2PwsK5TPBfekhQ8Y3DmFUt8hbYnDy6ZT23g6q4tGxBF4Mwe7n412ReoU",
  "key24": "4qc7TJ9Jz1tX8Z1LqkbuE3V8hpZtTiWtBSMayWRa6YbFUCsp25QWXSYpUcjtgLNP8afsFrMSmtLu1j1dUNzfQFDt"
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
