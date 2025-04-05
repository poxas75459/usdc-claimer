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
    "3QXZr5w8kXB11xH2q5jyBxMeByLvgoHtneDMhMbcLzAsat6Q9F1qbrMaCTUa4xieZz6FPxAqUDYZN9MxNdFRY9FR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JtiJqjTkBufnyWZeiDKKJVyZxgW6pb6HnH4bwZWtP6hxzF1YoWecgEAhnKB8w53Nr7c9YYtxwur5oaf2GqPdNK",
  "key1": "5na6iM5qVj4sxXG6ugxwLx5TEPmqsk1oezkiEFnmhXY3mTc2voTrTiKRUjpRPMT1B3oTEiBo5JqzzZfDkquhbjNj",
  "key2": "8CyrjQoWKLHCVD5U9y5Yqg1vbYq5TwQo7e4sfY7Bp99EE85UEqcBpj3miRK9hKMoW1mGPmrtNBT7jCEpyRofKy2",
  "key3": "BE9GqTvQFSWpWaxukwhmPrRmFWJ8qakrgDJ7V9UECcs6L1XS941W3JzVGG3zWVMkM3ohLgZkTubwncUoGSiwnuB",
  "key4": "4JvQz1326MaJTuCPQH2oFh6PGanJKE2oaX8zsUXFqdGSdMuWLDY4WCsekeMvuR4ad6qNiS9pjYCAnNELsSQVPYWu",
  "key5": "5Dhmsdrjue1YX6GRWTLHz1RUAjgKoJdv6rpjWpCRTxKW8wg6RoHd1WXnGnozexqy5SZ3yntMgdUBjZz1oBXf9HiJ",
  "key6": "5gnPAdCjVovQtbmvCvzqoVdCsfd7uTqW8nXbzhEHTYfuPHaohSbNButYWU3UvUyxCzg62DqpbJ9XqMPsjJnp13jc",
  "key7": "4Erjj7pXiAq7MVnoa4hT393KqFHRr3195HZp2QVUCguNjBPjg68GEn81H5DNn6DxNfkZSPEANows9iwE7voZF5za",
  "key8": "3frJy6Qv1ytHTeKxtFjmd6RFhsNRxo2RkoWZtg1c7bbzuEaTCEX6qxe2p2bm5mLW8s9TUJG7xhbdq1gJFB1TNzys",
  "key9": "4GSEiL8eCo1uP6oEs8UJrraXC5CF5zCJuiWWm5YU2eHwh8SLM7oibHQFL9npdcprodJeFE24ftsAkUg7oqB2LTQi",
  "key10": "3ZhURwjXALsE31asGu7Kbmq6uYVNwLPpcwp8wUeUF9GtcacThcT4BUa6EJNqicWVAdcEHz48PUB9rBPWZfCESMMq",
  "key11": "4gFwCWJHgNnnNNFCW5NvwK4n9UfPovr6Ws18QJMyhM9UpQpnzMKVbndSPxkwawEtcsrS89oHmQQcqGjVzMFSs33J",
  "key12": "3pSzxSK8PQhohj1bMNbWLcMfSfroyZCWpVX5EZ3PmJrE7FD1C6mGw9w5En4TZfkeFhVX1L9i7LTi5ZfsAgtDxZLT",
  "key13": "5LyE4PpuvHSdrjLKhSZ1UiWzUAQQYqe33XqmJyewbgjyGZRYMrxbhmRE6uoKvhghdSvVpHzgdErhCXmPfL9BnUhi",
  "key14": "3xQ5eZsAL22ndAH9nHmhtALm7nh7iwXTzRxyQyqNVru8cs6sVSmF5DEtSG95havBexF5thnKMrFPr5hhtwAkPX3t",
  "key15": "2McMQFEDLpBXmJfxPAYju2e1yKfq4swjEPmT5fBAVtESkjC1kEKcG8WweyDJni5dYq5CsqKFEYvEAwh292z3T3gk",
  "key16": "EUyXKe2XXH5qPBw32ZaHVVUSeknHo2fJeBoTMY33es4HxHp88ouMJyB7etn3fkEEggTkhheiS9kxNBk2M1qeaf1",
  "key17": "ufvyYoAGiQBxeRmELqwBxEthGhbmfwS2Tin7rR3MM74KuYBTUoop1jShesWDPTMHctwhp2ETbQQ44ijxZB8QdP1",
  "key18": "2XCFeYJx7iRd81oBceZ6mo3oEZRgaaWpUMChVn5q4vBFjD22xpSySurZviKLcJuhQZic9qxHqA1kLMnhvzUhDxSu",
  "key19": "2cqgHWVx4BU8FiBTNhHkvLRP9N2raWhsV6Vt8537oeEY5DAzLN9FWY1Tq4bMLuC9fhL8NfihXU86cbNk227mG16W",
  "key20": "73JDd1ozKTbjX3vYyFGzgyUaZUY27a6p1Hwu9mGNfQTTn6bXMdfFcnJRS1ZctkXkwsCJRoGy878wAbp7cRrvJqb",
  "key21": "GcT4PZN1RxKaNdJQBRKt6CTF2fLqh6kuXY4rYubyodsbJXdgzB2MMc5ahWeGdUfLtyQ9NjtuWqU2eDAD5c3BtQX",
  "key22": "e1r9hnFxmDa18wodjXfyk1MgdNFa4PtvY6jnC122moRuGjmcezoWmNeswmKTxA4NN6ksxyhZ5n7omwQNP2Xuaxj",
  "key23": "2Kgm4G7xvfZvcNL8ivaSBg9Sn6sqThxu6NCUSyMaAsyXJK1qYUAMT5fVncHhD7wXge3Nyns77RSXwQsJ3iW469ia",
  "key24": "ZLhMZ4ywsvvhWHH8hjHASNp1YhtXh5M8FSwDimuEgyC1irKTGii2yuWuhKo7B82egP6axSmGxduS1Z7SsybHLQW",
  "key25": "3x5jPEtNZvMnAE6Su4hpEE9d7AXNgiMHgALuEdD8Fdy6ETZbcqbeFhuDZ26GYK2fefLcVySvRbK6wrVHfXuqGqLQ",
  "key26": "4d5QHYjtiTGUiF9ZTxpLDqNexvsBbsmbuUUiLDNaidnxBGZTBYvCskWthf7FofXDhKtejWYXC9Rs5FyhZV8MQHrr",
  "key27": "2xb8iMpAed6sQcEx691SrFqLWTwrGQJJ94GSLoh6BU6SB4rahB6HNqa9Q8bj2JYVMTUPTG3tgdNQdrcjHX2cAdGL",
  "key28": "3FnCqdVf5vZVog2E5jLbuLV1YuvwKjvHupn9t2LmEGhPsHhDApuw1K7gVhBGRkubqFNZwd2uKyNAHhGKbaeKFRyz",
  "key29": "jMUQe1rTMQnvixZsLXKBZLe8wAhB9QZiLGiJbh9nuRJRt3fUDtjMKoEv7yxzSrNFB9R9TaqhmgY8FPX1oWJqHLM",
  "key30": "3dAsBaVCDkV33sFc8bD2hfhLowxswBJWwbWQ4dEj6bF29DdxqzWw5coTvzbuBy6DkQ6tLV4gUYXPRg6RF4JGLXjP"
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
