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
    "5egRFto32AGruGjfcU6JmavQKLPz5zZN2319URZLZxev2iCQ7GPZZtNPtWCfvA7EFKsWqW2K2vcua396JaB655dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RAUgzpjzkmyhCJPg84B9Pxou8xxqfinbieDuFCi3eXbchJkdUKPqEKTZ9kWAib8UPTqaWr75VMmQivmRBkL23Tv",
  "key1": "4WUuX1mTf2JmmpKxQg4XSaqVjacFu68k9Zxn5BUpxGcZCoYKEk6GYAeVev9cuU9CgRRyL92gW3py5Q3bWjJ7zyS6",
  "key2": "3teuxgmNJvHofJqarK7f8ZHb7RtP2U85TjKt1aBdzhoqkzgGcc9kg5fhFNzduXf3p2183nS7prdeAQAPCtsVvyWf",
  "key3": "51A9X4yDPYjV36ys5L4LniQav3D9jZLTBEzX6X8J4rWwMH7W2U3sjXoTEcyWeAJBZqpjJVYV71dswqynDcXLNDoU",
  "key4": "3YEkgEYMuNmAJ4ZcPicrggHGDwyPj3CoaN2vthGWy7NE1Et7kpkmKwz5S6cJDsFwdC2J4uBnmynmsxkSUfeTBGbJ",
  "key5": "21tWebouSuCoarR1Fkhi3ssnsdTHokgKZRnqAVnqhcKMExG2XURDev8dBmduVH4Z8VXisQbwp4je1dn3NWuSkFCf",
  "key6": "414Yn8Si1tXbFNTGnucS2Zuzw9yHR97sx8wxf1aq5hTPD7t3pGQz5vqHBWyn9W7BA5wC9xxJqLMBwQRVwoXdwj8T",
  "key7": "4SPu2XgHtZgnZ5f2aWBwvP3oJLTa9p5kYXegHDZ15Xt76MAG4ope6ivjVCoq8tJXXPtWPqPYLocLMGRrZpohugZc",
  "key8": "4WP7kozvCqvQFJqo7SBKLC6BAZicvm8Xc7dJoQEJYCK4QKTK9G11pdHyfx9NAASzRUjoK66UZPbTqXPRk9GAHgL5",
  "key9": "4dWUQgZ3rsvVVKr9gBkWz1F8mHrzaBkzh776H41TuhCJ4s2YFUQHsAmd4wxwBpkidyY4uSumn3WPsv73MSdXe2RV",
  "key10": "4ndMQESvyjsAut5wc6FiscF6x7hHvTooeEhjVzoihcfpxXZP9869ia8YbzctKL2JUtGUYEE2FaajGhjqhC9Fd5ht",
  "key11": "x5CgueomPn9G6hXmaKnSi33iNCnC55rf3HS1dNes1MQsN3VWTkhhpgxXxCZZjuwbnmMRiY8eLp24EDw6TBAvuhV",
  "key12": "NC3d5gwWB8UeiLfJDzgC1KZVxYdHVE5q7QN58ZVZnhWrJWc7FnPSrW2pavYk7z4hNKG43V4GcAMmpkRtPHNSGJR",
  "key13": "Pe7qEPrf1es4oEFXuV66xbw9LHdswQqzeZMUDrj8VTP2UBrUEin9QHTtCdJ93NpZVeTMKdfgEHp7cJJ9bbixTVn",
  "key14": "3LzXtf5QhZDQ3qbCQuW8eirTcLvH11mmSDEza5NdfJndjWQWWmfSfXJUt9YwYVagWvu86kUZ6xHK3fJhqqvvw82Y",
  "key15": "3dpAAWvBSSTr9obzkxaXFrGeJFHGkyfvsj796phqTNehXrSur7Vq2UAuVfPBuxRURKMu872u6McY4WyDbEgrmM8U",
  "key16": "249VXfa9EvFifmo5U5K5eHiw5QQuV3mCeCrDSrLKoe1v6ERSnisktjG2mHKBcphfjKKoiK8YW5caXQR1kj7sgbq9",
  "key17": "5i2Ws9zMppR5rsLfRakaeLrQJPnijXBMKmUiwAi1P84sUthsxrVeZjxS25aDjwjiGZxjMFqTemKRwpehz2z1jjsP",
  "key18": "2Q1pxhStZVFBo7NB32MnBN9PxoEP7vKotyC4ygZ71c9mz56eutL4jB1MaHPXHAAdPU3U2borxBqyXotFhs9EgvnH",
  "key19": "4fXfp7CLwoWWDqcSjz58agQXHyjpgf9ptTUm3j978jyQLwun4t2C9vbR2fyyRa3jM6C62yR27aPdRvRjEDyrxhkR",
  "key20": "2qBwWRE9go9iKx7UkMK3gZsU9KewUZFDxgNdJbEjJ7DqZSHfXdcpPdHjQ4SXTx8X7iFqr3Apmi7TUdopXHobkKHJ",
  "key21": "zWeVbpWwLgybCQqovPzzMGAx8GVECkmxE5y2raWjNVQKwM6AAmQ4BGn3hLCtBW5Hnnc1uwRocmLfnYuQ3LMYzcE",
  "key22": "56fbcHUQfdzLngBB9N7VrkErFLYDZX25xsaX6zxTcLU3FJVjX3UraZyP4JD4bs6CUd5wpN12YMBqddQvWSLkeFiC",
  "key23": "4QtCNa7NbwvGyhyau2FAZMnSZGd4fC32pWuwxWLhyy7zUQLCN5PU1Vrs1TaMwjDjKP1NYyN541EFFQmK3uyL1Dsr",
  "key24": "43rCJoyuDXg3nSHnBeSwQAx7yhBBHkZmrvLWQtS9yTHSYWzcMFmBSaDS88iyrb2G5jzUF2aKN3hPTpt7GRninz7G",
  "key25": "B8neZH8GzwgQhZDEvLjCgcaLEYswKJokR1HXCE1dB6a4SGgKK8TDVmbQYYLKv1pGM4yk9BU1XiPkydsAV1jLiDX",
  "key26": "3h72NQMcVtQgnXhfD8ZmevzEiwqivF2X4QorYJfVopNXk9cbHPKdRMRHACAKtMSTsGEMjMPgMk7qAZv2HUx52Lqy",
  "key27": "81LNYM48vviUVNxywMa5SJRoN7ERuESQroCgCzBfAV6Tx2Hm4vFNTuB9DhRHvAG7FNxLqz7QocvNPkQDvqQY9QD",
  "key28": "3NqFJAQDchLnKSAMbv4dY5hoGeDHBa7xYSjuZA6zRhP7zy2g4G2jqabQqoMMXpw4SF7vPZsUjc1x9EtjvS8nb67M"
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
