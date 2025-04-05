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
    "4448zGmAH4LmUKzoKP6tZfcApK7qPcrFNYVmdT2mdzef15CWbdQ5frJiRMCNqP6Vc8iQHq9n4HVT2rs73FHcJ9HF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iAE4TSNHpu6i8MHMXQfK9DXdvBewD8Q1iFKMyYkPuWSSwyJoN2XcZf3DsGS4ZbS5TvojBt39HdNqWZuYyyjsRNp",
  "key1": "tYvCkEz2RweNRKCbDb3p3AMdqkCPCSGycTiD5GVXjcCHPgZ1zuYZwd6wdAfGoRNC353FQnn9PZtce4khDZeh29o",
  "key2": "4RYrWYkrPchWqbsHbYUFEmzK4c6rEZAHzxSFarTy3btk4rHQfeRWhVfvd8ZbUp9YMSN4HksQkEwghAmSDfuytVs7",
  "key3": "2p5V36HSuffFnSPp3ywtwi812SXCne81qhiKSEdknrAvrvbcVv7gLxniJutafSW5KN5BZEgC8r3n2hYWRwvJ82D4",
  "key4": "371HCzzs5UfXtNTA9ByCMjeazBBzNvN4gZdHjaGJQepBNhbBf686mhXaE8DvT7TnQ1NoLxfZhdsgWgekbZtVLXsU",
  "key5": "2CAZHdR1izquyyMkpZqAvDmx6DnkSjjjMPdUouDzzr1Ur1TvPnDMmSmTuh43DyqPtMgs1qDmtK9zThofbESxzKYw",
  "key6": "49Bkmhf6FbL9YoKZRXXKGTqd1Vt2ZrX8yoEaN2JgqHVKEwDJAmwg4vFySAJaAQsGL9fG5yFJDLfYwWQBdCrcFnAH",
  "key7": "52h4WNAsTxhsEmaraoyigfxEBUyStDcbYy2kCgZQKhj8kcgajFGUugQKte3SD4kq2AELB4bKxXq1bjJ3na4W3rbn",
  "key8": "YEcfYfiazCXgAxk4f8XygEow3eUcwGHgVGUVhWDSb2sDLmPLhCGixME3U3LmUg27ep8yfh8jzozBhjLAVpz8Y1c",
  "key9": "5YZGEHahGqQVGHzcRHzZpxWje7HDr7Jasv7yKUQLGv1NMdNHrAcYFnc3689FQdvf8BqxTpAAjhYLv38q946oo2rS",
  "key10": "677CAycDT3KzYR5bYUJs7iC5LvRxKu6sBxnVCd2x8ZHsGv2anjdqMjthr2uw7DMk36dNJxCDHAKwKujyEx7xWzBf",
  "key11": "3gbUWQJYFqC4tUsBgwRXiiDNfxVoZdTYbvHgwwaU6tEXP32W28cXWjev3jS1G8bUmeGC4JiQmJrTE6bWKg2dSZ2z",
  "key12": "2ue5Roarf6TdnacfUrcKg8C4v9eNG4i7249Exh7XMXGpKsQ9pms368WtHLoaJLpAqS21vaVo4LqxdwLwkvMLmN61",
  "key13": "5qVurJiSnMqY2Q1oMT9ypSnhWBcuXot2wXVBuc2ewC56zypfyHJMWfmQ4h4yzFQ6UNPpUeQmUQ2j4JmqdRyMUjYx",
  "key14": "31n7hb3s3YSJoy2YT59vRG3fvHCaPhqNFSZhtWoPmyws3dsH7czaMFQ6SjjyUXS4FF6mUpfWt9PgSESHhAemxFNi",
  "key15": "5TCreRRyZjnWaeV8BdB1v8foHTvjPdwRBFtezRuMJe4V7ER6q5NHu9Jwi5zUcqZ9jjocw4DfVt68xE51MXhcBesM",
  "key16": "4VNGffrZv35g2ddRxzNVU8gndgkChBE6UEqsXY8kVZ4H36NqDaMg4ifB2Uvmi71a6Mztxm1pkLTiv1QhUgE33zvE",
  "key17": "2btjUYm5WsmXZJBLn7Db1smkiq6ymazvPCkXTRzecYrauuJu2kWuy8WtFjLwvbmipL8n3cgQmQmR6Z7WKvwvedWZ",
  "key18": "5aoJysk2iRE18sbgQvJ3egX84c4VooNim52BxH7qGgBveSusQPbBMntG27A6UJDFjdhiu3xYeJCXJohoWzusdS8m",
  "key19": "2GURdhNqepKGQiM9XYfySZXAijaKhNbRW9b3iy5XnJTeq1upbMz8Rk9n2VkxD7RYz4R4b8Ra4dy5X6paCnQ6F6so",
  "key20": "3xk4zAUTCeKTNBFbri8fHZgf92kVp2h6NqHS5tvvTZL5MAXwSXyzDGxtwpcCfC8UsddCoY9ViCWcbG11DJfjmKRV",
  "key21": "2rpArNQxmSwEBD7iRVuNd6m2A8LyqF5WgeqjfeeajcMixu8t5xrpv5VBYJPean9G1QEeRwkyupon5ANVJrWbjYHA",
  "key22": "49E8DvGkjtZrEEU12w7M8xh1MdpqLokntGSguW7QB9oBHBVWcbAUbj3YwBHUPWXNgBAwLBixpbyjBaiJwVooXZHg",
  "key23": "2vXbS8EjSdWLe9t4awyLoRmW7nRXrWJkcuRYY62kZdc5GoX6eVsstKGhzMskijt5SyP3gzM5yRvjtNsgePU7345G",
  "key24": "2FHG8cimkCHhZ3JeKzFFsVETHXTjyMFC2EyhpD8HkmP9hX1ufxf3gGCGN84mar2cU3iLDqrduCgGFjGerFMaCgPP",
  "key25": "4frExy47KhSG5RUzMgdDo4YHmM9XVnz59So38cmpyzp1v5MSxfdCu91ApGLhTnTZqumU41B9SKiprcGevCRjs4d9",
  "key26": "5JwvWVhFnceT6GJy916QztnNsnkqBUsQq6oyCFjhrdNu6TuTAfEZa2FBQxwzRYJ9uZHXAZaym7EJhWf5XMpCYRjP",
  "key27": "5yg2U3jiRbGzNqgWSkG7F1GZDksL9tWK7L7PsBBd3P3KsdyEdACQq5TiLUrSPg4e3K9NbtG9XPg94We8RDP1HGCZ",
  "key28": "544xax9d5YChf3LyeoohMJHzJN8QcGgqmApfxiXUkCAndrAhnp5ifYutqwL8dF63oRS7k1Y2BrbihTdhb6NLwG38",
  "key29": "5JRBN2CRmjpSddLWXdNM8gqhfTBz1sfzSkVcCfXpaGRJYoquH7dEfxgXegWmPnbMGzfdcoTPTtNWvXssVt1mMiJn",
  "key30": "5rNMxDC7GedNvvhFiycn4TrPqnntfC53yKmTM83xamu2x8sMzGhSzjQZ13ezy51VdEBKdz9Wqh1AJWzGw5SMEs3F",
  "key31": "2osLMX7QNh54v8H1ZyL4djn29sjD4QYiaVNbdEuwzeQhVogFW1pAenLVNSmbpZ4oo82Qv3o7MeGoKBZYRU7gZh9k",
  "key32": "2UzqYQU8N8qpQLubLNX95QH5Gx7SXTiLYmY37krNCRN55zduyBfG8PtuLB5cPZKDNxVnCBnqSfg7iT2HiNAYTLSi",
  "key33": "2XgpbirypzG381PDNLqiPE8hgDcsdxgsUgWyHC8ZywPePaHBTS7jXpAzeWAXWpL8DQHR1MDFj7M6QzEwLezZ2Q5j"
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
