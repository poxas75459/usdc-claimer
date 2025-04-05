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
    "211BwmjWYaifr4hAmAVksmPh3dBkY9cTWQp9u6SPYqS1MbUG7X17hjeHisnY7Pq29KCGabmLxsZgfkNit8h2B9mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MuNRtE5KNcVHDYDMqDKqa6Kyyd7Y8TzDDrKUnoU5Yt9kAjsKWB9GEULpnVShVw3xpxxmdjjaDuycYnVFyTsVocn",
  "key1": "9efBJZPxVA14XdUmbN7gggKZt1aizP4cZuJqdtLjmzrWu1bU1rhfrKG4MQSNVUg5w4f7A4EJH5Fhr4CZPRfQxJp",
  "key2": "XVJVxA48Mxb1TyStUsDP4tWtWAs4Y7ucpJyZwstDP1xz4pconTJWNzacv5Gbu7Yig2N9wE1cDs74MjF7Qot2DMe",
  "key3": "23XCxpMLhGTMr29bE6FZEGbvxmyBK2MirWi9QYUxMPEc2GcSrUvdadK6e3LC3ndUW18CEHzBPCT9URVqGgAbQssE",
  "key4": "zqt5eQupjQssrhqb1TtKnybdsrE3HbRJMcMyk7eRcbfRW2DDmXEJjeiT8kFSLx8YfFZkHEvTZrcHqXxvDuK86Cs",
  "key5": "38DqJomNkDHAfUgDPPVTEQpqQMMJmne9mXfp3WoN6SpoJh7paPnveRaSZtz1sZwbqzQNkiKbG4aBSVuJzAQ8oU9K",
  "key6": "5diKfiemnnG1W3hih5fym1j6JR9LvrAZnZ6JwGPCS4c2H9eCfSqBqoapTHttueRCThmRRwXM6dLUroiZvXxpL1rk",
  "key7": "FY7davQhL9FKWnYdSqkk3nPE4ZKKgBt1EG71P58WqiJ5oNp6eJfMhffeYoD6ooKS8RU2d1WPgyaTrFbXcCj62pJ",
  "key8": "ZjDZiE5xQ2s1TsGZqTBYFfkPFcNvFDMR4N3cuemAMJdVvbm8XLcjFRDtmk1sZJMZdZ3TiZzwDY5Kmm7y6LKsy5J",
  "key9": "5eJHC3nBUF7Nd7NngbphMe4aqQD1m7M9qSYNrRA2JCFgTep3NCZ6NAZyovikfeK4XwupmQEie3zVdcS96gyJiBQy",
  "key10": "4f35wPBeti9uJ5Qz56p6oZdrUeaozMYHja2hLjcbTtEtZJK1jRKzdwamEqsEEa8UWdcapKjCxmAqbzDAQVWwHrgC",
  "key11": "4SWuEyUm9U9dNRUDqF2t2GLFEKwoRa9oDvNyUqLDJDiqavkwAXwBmCAijrAzhWN36t5VBy6kKu9j8a4oKBubzCfH",
  "key12": "4Vjac3RXDv7S49sNgX98DNu3Y99wfm6crwNMQ72rF8DUD8qwfB9J9FuXw7TD81kCKVNURRFdSHeec5cpveeebRX2",
  "key13": "CCPLz1sJVaC6ZLATWZJ4UfFm7tUoTQqwX63fav9XSJgQZ2CsXWGL63yHwayosEJwqHE8v5mQHymMabE1vmzhZL3",
  "key14": "3pznjHkXWQfktSNh4JnSMMAD3iZA4zk2FbaR52Yzx5Vasa66UpRVYFHXU6j8SY8tBZmVdFi7uuKvVYrRaSKcxuru",
  "key15": "DwtgBB7zVwQ6yYGpe5BoYjKS8p95qnR1mcEqwCqnVrvCSbqsucMfA9AESAKvAMWy1jmzLBXoxSzdeW1yStY5HB8",
  "key16": "37LXDAC6sFtiQRA1kjATWk3PRxoqxpLAkzJtmykDKDD3TpVPGPvGAXudFExhR2Nu2gS2dRj6FQrDPpdfirEkB6a4",
  "key17": "569txWThq95SjvPDywy5m1LAioL42YDA8BHY1H6ravCDquBG6rz8vVbhuEzjhzmSznTyzNx6MHHDoWBnxbMFjAVr",
  "key18": "StZLQLh8QCfhgUN36X5ZbZJqTL5zH9puYE1NPP7axbWuiafRaxCYecSEiJLBVG1fpb3ZmzFfcKDnshqhHy16ywm",
  "key19": "2YjLSB3veebAeXmLbGgGUWUt3kEh7RoLva2YXyfj9vTfwo2StGtSKQBUnZP8vrE9udNKKo7F21wtt1A4HbgxnYAh",
  "key20": "4i9Qh3s1TPJ3dURYu7q15SgzFNZQdemMNHqtspESReaYC2jwCTyA4Tm2dcoXaM3GGqWSLQgVU9GozMUWS4mo7yMS",
  "key21": "5wK4R1Moo7DNn99awBEYLjbbgTcDT6od8MXf6RVLXK9TB33ZK3vvqDBbE8PmesobLuxS74QUKpMZTaZytpuMUHHg",
  "key22": "3Y6dYtiCRdCj2E2D5LozqBogW8c4hYmKKzYRF51MzGzBHNCUPmy3RUzjuRkiUkzWrHYsZ88KD32HaADj8E57PUMD",
  "key23": "2fZ29FMUHAsm4ZqZRftzg4KH6xeWZrbND1hjbXRuQ3MJkS8bFbQDsVTh3a4hU3bvv2j9Q4ZaLAaqpzuTxvzCEp31",
  "key24": "3geBkpKXSj2PTxW1ZHPN567wFpSutY7LPx4EcxrTYCG6Qimj4rrz5QJ5MghLVozepVGPUo6Bkoth56kEZbZXzwxN",
  "key25": "2YApqYog1zBLUyKegDeuYkybhZxidqXd1LRhuFYDET4Ffc2vfLgJXWC27isHGvyemUebipewBvvrCyrUKiTDhq9X",
  "key26": "zEG5BckmkBiThjbLk133uaKmq4PMkjaGqBEZzWf29pxKjtqA8EA17eUebhJtEboHcnPfsu4WSaFyiEzu5UMphUm",
  "key27": "4oVJpWikQar4v4qUCGDjD3ruxzgEdfJU9Tmzec7AovTcyVnnYHgDfikr5frVc6ErmLwJqdgGK7b5EsLNz38JU5fD"
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
