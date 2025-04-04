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
    "3yuMDpCnb1QnQZnRki9LTG5K5xcauexktuYUKJFYa2nRAfP5MYLc3Fe8m5NeTHnWrmKzX34o2iTWUoTBfRtN53Ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qSTXT1o4DBa3AZB5Zfy157KAv3LAF256wq1TNjgJo3dPvoAiqLe7AyCFyunPHHDVJxe2k2844WmvMtpuqHYKVh2",
  "key1": "g9yXqCQzFmmMXS8gFUGoYaN8QYYsnN7WCzfWqERz9H97fGnCq4yEogQkXDj572dbrKwJcsicNCAaiHaBFeqrnJT",
  "key2": "5fydxB8bMAQr3Di3nv1sUBGqnmSufCiiKk5BQgTUnpVA61FW11qJssajQ5QZYfjALGMAxXfaCt5r2es71P1uZbeL",
  "key3": "5iXSzPkS2EE6KzH7Mgy5HUfegUQpCbwk5vDdJ7Ex1xdMXE5RHv2ovHXG19TnHVYT5buFyTmy5WGkP3pFSSfLezda",
  "key4": "5HMJeC3rqw3E3E3an9Hg2c11peEr1nA5uTuLWWgovLj2pTyQrDg6ThiqRZBK7VXb3ATfGgj9Z7WAV5VLDXUnKbVK",
  "key5": "SRXj6nRXpo24ZBa1A9diumvRfzXs1qwXChaP7EDbqz6b8amk2yTos88ddYNCyCpMRMLSWVNAU1feLgH72asPku4",
  "key6": "4orNapYSkV3hKD88xX8tsjg46ovkCMuw6QbpMieEkMAq82zkbfvGJoieCGE9xT3KYLhaXh9cRCqmNjhJksVc8cp4",
  "key7": "54RdZATZt8WjFGQVvRtccYKwR1ASYyoMGNh1cT2RSeXGhEV1uy948ZWEoqJGkxScTJjJwXpNiqjJwxZG37fTRGsX",
  "key8": "3nJt6zGkkvdBgewZFy9zaxKLcP7H51M868FX1uaSiidTFEgxHsx1dn5M9Edw83AEMxavxaYxs4N6R2gA3ue9J6tY",
  "key9": "YhDps31w384K7otYTjiN8dLpyxmeoC7sHKPmVoyqjcxXvWKbjrXzwVyZBh75JP1daPyhsF8Ep6artfNyEUMqMma",
  "key10": "41RtVkzTJ8EkV8qfFaBKJcsH99RUF8BeuF1ADKA4vrsNVaNBixC7iE1rRuRaEGusfgiwS7fJiw2oXExcmyRdEfjF",
  "key11": "555kGRmMioyXzESzUA8gYTRRMztGdEvoBXuSmRtnLsHJQp9rU4mUbtt3zmpqdr4DWvM2xwHeoUr5wmWdnM5Jnbf4",
  "key12": "4nViu2tssTEkkuEtz37B4H2365EydeQpGDKMPKBJ3piTBa8t9tzSPtwxBNnYmrmuLv5ZEfGxwaW9aUSVdLnBa8vZ",
  "key13": "2vmEmcgo74gRdNnD8vaMR9BSZ72ijfXghshuo4jos9kjkX3WmoMZwmA4RynyacdWhKt4XWFJrdK4hTEDrcQwqZ2M",
  "key14": "7qQE22e9oKukEpQVj1CVMmHGQnXE2H7RLKRWox5GYR3iLCX1k19VNJvU2ieJefJQACmDqnkAEVg7dz5tUUCtAD2",
  "key15": "5csebgErSTZSXPwqyuXzmCzTq4g8TeqEJyiEKDqSta2jmmMHQaN3ArSDtzJiVKWFuPFg5JWguPCP2qg6ijqhivFF",
  "key16": "2iAELfMH1tDXmqPcph5nhcQKU7yWGZtLYC69kzdZHh3nscwRKiVqXJbsbjG4uwPDjFpnBHGUxmdBd6p7Nsovgyij",
  "key17": "26Lh2181yQbLMMByD3PWqtbyCfxAG7jHekWqgZ3Pc9zmXqGNx6MjjEW9RjmjUnPXmfnh4EYUa5jzmYGBEJMxSLiA",
  "key18": "4sZdhmDB3YTmfUpxEu9NbvP8kSQYcV7TrWPFDfVEyLN6cey4JtNGpPDaymg7qpWmQRw3imB4C4fjfEeH9GYrWAxg",
  "key19": "4yrQ7toPafJCyuMvXFfvsND69oh2divziyKtWMp4qDsmZUhFfx1m5k6Z9EXPZwBVQVbAu3dAL241vYUqDdkEX8VL",
  "key20": "48VGeUXfBafDiWBucLtC2rwqngzJkcsXs5MnNgexCU5RmLQU5R4ofaYXUyWw1F4dZB7xJB5PMAMKDDHsroQW7dLH",
  "key21": "aiobEX9jDKMYUa6q6QUthxiyRBkAzyFmwqAPXTfHKL31PV1eJ1JRfJPHZRnHMuxYtJ2NNjs1AfAR4XrNHwyrADg",
  "key22": "51gaSY5dJK1RMFkuWXFs9VEvAnP2Zjiw5rdmT94MAdEbnQiJrz36H55EyeGCFBA9Yh57BeEFsAyZ8QJRvFjKRmAp",
  "key23": "4BQ5zTYzT2y5kA72XDNKWPJzD8WzFwmrhK8EQRkZg6wh5QbNeSQ9CXayxZXivhLS2ut4ky5e5G3iDN8E6VowEAqD",
  "key24": "JJExy5p978bLgXroAM1gw1gUVG8zeBTndJGMGbofubgLFGjvXC9WqPtRfTULyStXJGEa9DbKegRB2GRxrfEYgDW",
  "key25": "3jVxe3fpmuULaJNNvLV4P3qCkxMyp9bzpWtqF8mFDPvBMzvidTS6ieFqASnEWipSdYobv1SKyNypn21on6mgfruD",
  "key26": "4iRGhHzMzk1MREJTuxZVbPURusbxVThuVnZFUZEby6W7GWnochgvE8tYjbNY5nR63kRAX5Ff7Dj7Bva3FaTfc28V",
  "key27": "2ZtYeiA4oCD3hDgy46dVkawxoKxo5ifRcZfPRvemGMS7gmQsQbUmLCMzYubWFS3MuZkBjkbmCYYYHJGFmfqM4bNf",
  "key28": "3WNhiQgwBx3MfKAzGeEHa9ncLuXMjV9dXpcteDjcoP8ZCHcZdFnbhf6HGUqbHu84FHkDMV772iymU8QoH3n4WdD1",
  "key29": "2DebQ9XGYGQGhkY12xHiaUxe9qvDUr3H3jn4uCPHrQaMZFy1aaRjNKbV7BpWe3utn7VqdHNAjC8aPvMbSktcLzL2",
  "key30": "5c55Jz8FdcykjN7Mg6gfB466R5VCCH5rdwaquU5Whnywo7qYS149kwaq4ybN9N9qihumiWA2PrbM3P5FpGgXYeKC",
  "key31": "oA5P7sQqZbK5Jrgc1egj4CLvrs2sKP1xfQeL6K59fnyd9MN9b8sjwMZLmVYypKN828qqKqaEmQLzMk3xyqm7Jqm",
  "key32": "7mtCACzzUQJcSAhgQ5qax8wrT2JpxYTWp1xoLdty9LeagFfFqj9XrtFgeMZVBQna5jWRE8QA7JoBJrK8GYji3C6"
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
