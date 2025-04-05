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
    "cAdcxYHph7pmnuC5sMchsrZPcDZ4C7rVjxJn46yvHmnGC5YWUx7UddP5ReFd3cvHMDv2hf4TcVgVPPxsBvg3phB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LYeDQbLpFSHz3NWyvRJ6ekvyXJ8kiWXgRgmVA1ZAzPzk1MrTrKm4qnKotEJEZ77A5ofRBeZ4AGWbGWk2PWXZLtX",
  "key1": "5wXJx9C6mAW4EKA6YEm7RwSGZSAtmHQK6PwbUoeEwYG9N2SYetLRqgyduHpqT4vhiooKGdor8bAJ6N4qeCed66jk",
  "key2": "3QDW17qAj7xk1Y3SAaKYCN8NFNkecXviXCunBzP8mvmDi6wm6s8WFJwzDPGeqKNnhm1ygvPdz9Bn1Z1dVx8z7fDr",
  "key3": "4L9nmYFWKrYLUyDcbeN6FZwsTGacnbJW9ucwoz1sJAKb8LbWvi5hXQRJbH8ecG46xpjnemDrNUSwDqNs1WLDURg3",
  "key4": "FGg16EoRsBm41AiqkmSWaYJiHkZ7L9pxwXFYL8xNVrJvfVLTe6FqacoLeREh6jb9pPd8JdBKPobb2RXBypDjn8J",
  "key5": "2zU8BCXKEAJFqEy4nHioQ7voP89GisH7pSsT3dH4UoqFmcVKU2fZysBHJxQZ6P59bj76m7dnxfFdX5jWgvJXGqeE",
  "key6": "aFcB5xNQnB9v3JZMhwpgqTQg4PEE6UUzi2e58K1TSDc1AiCWz6HwpRc9kRfaVEZdxuGfAQZyRWHMozbSsQ5YnkF",
  "key7": "3fAjk5nQjn8HdykGo7PNyXGjcNM2ZRZrfCwEZD9godAA6HGCNUpBJWDMCg8Lu7z2YJVU3E6tePzJ58TiAxNksuZx",
  "key8": "siKUR9CN8RUTSEgReUPswyL9Coz87wto3veb3o5j1MsT62QqjHnDbDW5tFJxzWR6i9SYMv6bevQ6utXVAzoyJwi",
  "key9": "5Vmmref3THhiEe5tWJYwTnJHdHbS542U8F3REEFRh5GgymRb7qrkfGDLd7ybNudM8LBG9ErJZWYAi5DNJYyXaNST",
  "key10": "667RF8o5Uv6UJU46SZsvMnBiQj6Um3MBfgazTmQ3ok7txgaynpfhXDrSFJ6FuvRdejCPUSRCERk6zpHWiZ6Wpi2F",
  "key11": "3YGbDU75YcpmUd3Carrrp9taQgTew6vh1SeyqUKAYSFKj2DXdeypNxntMbhxh8MAkmi72pPyeRkACY6pTVuQeNBc",
  "key12": "5wPUAL2d2Hn2DhAoyZisAN7VaP9A9KM5QTXUy8Ggcw3Qw5GWgQjYn3cRznY49DvxdpK1aGSJ5qjE9Ue983fVEzrX",
  "key13": "U7GXugoomwbZk7Q1esoeTx5Wmu6uPeCarHFXkzEbirVYUXqpMjdhgEEUYDJkfHLET3mSSnj5mYoHKVzqdk6qinL",
  "key14": "5eJCz1CAqFxZp8jE8G6aYsDzKczt3nH1GZft7e8P5u6y6YE29BhpXgeWVHiiCKpYCWG2BoVSL1RgKciv5s3SyDqn",
  "key15": "4dUcQS7RyBxZMLQX9HZTwSCUEz9k3hximSJ5ZNCEG7UekfjujbCgHDybuXDhX2XfDtBaL6DQoKJp6KMt3bStX6Nk",
  "key16": "rqKgYyAZHPd7ePZBvjo1L6AwZ3jyuC4Y3w83pP39uA6HhCDH7tT2b2nkn4u84fQLiQXnRLCVdSeiWqNqy2dDa7v",
  "key17": "EWW2VfDKBPfoh94t8NBbRec2VYkDNRNGX6DEWCn3xto4BNegSezrUkz5DRukpUqXvWGEegYiKVLDEYZEjk69Viu",
  "key18": "4dc2iTNszAy3BXS5LyRF4CVmbXZH64f3dJ7hKc9g6sj6RhJSDe5ZzyT532mmxcZ3KjkdFwapvGetE8BB5t8i2ZCW",
  "key19": "2dLQSXHi1W586v2yD7yr2NTcSQX1p22pCo6fdY5DJL9i6zmiimNLFh4gVP8nDmDS4ctmtFFRqJ6daQwjiMAUEiu",
  "key20": "31A8KV6w2zHT4ZRTqUUzzLvrcFZr5oZ12u9dspJdJBFyVWnPE99zL4DCqgqYKNqB5aUcGxLpJZRsAK7izTTf4zEy",
  "key21": "2ioLVPiFnp3jr1gXeJoz2imvNJVutj2jqW3MYiDM1GixTMahQMgUF512U7Tw7uEy5umBb5GAcw16CZpSNRVLSpjt",
  "key22": "2Z8NE4mBmNRsEV2zpB6sr6B4Gg7sgS1f2yA3pXLnGDqFS56zbTFaBnVshaAd4dhCV7VQjSBR1SxfEr7oapjhf8XW",
  "key23": "5hrNbj9jWM5MKWVXaJ3FQyaVyyNsxtvsoFB7pSAWPXVB1JiuAdBbvbuAnfWgNvaaMPq51UwjzVDYV7TUeLbTm11T",
  "key24": "4XEwnE48E2m5e9GNDvh3n9ihNxWL8kh8y2J3rALPEHJWzhdbh3sw28okmoem7tayaq4FJfHgFzmJBXEPAJUjYWZ6",
  "key25": "DRQy4tuzmEooFEjwwoiaHDDjGUQWhkiE1pSzPu6DbPnXS5cRgEbMj6PxBvBBuwjYhpZTM6e2gjghY8fCtAKQ8hB",
  "key26": "45znVhr6g1TvZ7S3VxVYn3rxTS8ZaeWPUgDA2zxz7eQfue1iUkrg3mxbfDjM1KQS8F9h7XNQMFZr6ekNxDGDtJ1A",
  "key27": "2myW8dYjtiJ1TJKirLDMRHH7GvuGQCSESXEPzZJTpmUi6FiBXaFTCzKTfReBWq5nh2bvsJ9FqVf3wLhu9tD5Sb65"
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
