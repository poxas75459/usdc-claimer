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
    "4oGNDNLHLvci6YvadSuk1DrpWnVLDoYn8owFRrKD4PK9GBUdh6XA6psCTRVVXdpTt1hwC8dZMrg4x8gziq1kQqUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RCnbQ1Tv3ojSb8fQ9yJ2S6dCEw4XPQ3Jq78zu4RnNR3jD9E4Rytua6aEzi7pkBNSHi8GLHxTQ47WGSDvk9HZDMT",
  "key1": "5V8DzGhMy8vrbejHYb49WG6yZYo1GqqSqwR584YVKPZ1cEYTwAX4Jt9HpDLPG7mNNgWne4XviyxyAAxTiQ5J3p3e",
  "key2": "t4wMKFtdPJ8Ga5NTZqq7nH4a1K5imEbdbjxwZFQXtzT2V6vnhe39Qt2au5g6YqXHHAsDi1YmXobS2Bfp4xaNdzW",
  "key3": "5zpq8Yxuxu4NeAdNnDkqERZeEou1dsu1MybgEbqmjUkDjfsVZsvu4PHtNANvZqA5zKDU3pxdHsUK8Q8UGVUz8mUp",
  "key4": "5LYgXk8YMJJmdZLJ3wPh9z48Ns72bTahn8rXV7QYvF1E6EJByJ5EJ7qGBB1Kx8vd1oooWuk2kheKmAkbsrc5JmK4",
  "key5": "5wKvpVZRTTRiDHzWTXaMZAAegkCz7GbM5wov6YW5H4sgW2KRrxw6YNtKhHpmp3jg43GztrfzqVayzrBoWq442ZAG",
  "key6": "4V5tAmrDmgGtASxdKtj83NoMhVvbEMhpLhzTUWD9Px4RM2bYQUJeeeVJyjPC7PMB4HesfK4aNWevYa5YLq6xmvD8",
  "key7": "5GCQqpF8CMcpW7vZKRNjm11FpnGsRcgv7A54FGcF48KLbP5jhyge2iTk8Wg3opQBcxApMB8oTNEiwZuFkroAkLyh",
  "key8": "5AJ2wMW1Pgdfro1QkFwZHhbgV9yNVtmBYh2SqykKkR6MYDpNWUywqWCUrAXZpDPN162M7KVNDvgDY5WDwQYAcRXj",
  "key9": "3YgWbeTZ42w3uKsZ58WY74tnMkbNJ8micKxo2awJgpbLggWsmy1cuepEMT4BaT2KaGpgXfiUdSKCWpu5D8SuZP13",
  "key10": "3dFnnJayY6kbWAkAQVArUAuUvkPD9MLNDqVRJQgUFZqqyM1he8GKE8eo4wZdq3L2gCT7pAExPEqLFSz5ASgz3BME",
  "key11": "3UUMCjKbUQStVFf2Rr9EeiBN5r2aeK88k4xH9TdLPaBEGqDKcgXxVNdwdJZQiUMCMKKWdWgwHx8BhwVxsQ1o3F6X",
  "key12": "5VoMB5cxhSynEM7hbM31F7mLPib45aQbxsAWuBbJErtRCHxSF48pSxRYJZGXpth7nFYVjtEvsqfti15Peo8m3vw2",
  "key13": "6WKVaRXMjFHytWonzqNW3wfo9FmuUmeJ1NQpdb84a34KhWwwxA42W17TaJoVUDrAdVdVUTn7ZFbgDgT7eGCF7y5",
  "key14": "4ttN5s4s78mHREBZqtQp5Dw2oyJ2jjdyxUNjdXyFCQdfJLsZoMR28sF5r7sA6AeuKGW4hyEPgbqBWcFRafkiRfwo",
  "key15": "4C5cpdvgMNMLbHkBMg7boiHV8G8uyCQrGifdzfRM3wjxE16BDfnBYuEKCa1mj5fyT9pi6V9i3UvoiFAVt4mFUMTr",
  "key16": "64awEahsfM2Y3UfVncekKXe87fXEL6eCjCChqLP4VvReJXQYze6HEPkQkWKg91QGnbpxxshotpg9YwScytV3zPmB",
  "key17": "veLfYm7xPeRkc74wy3M57TnXDtiw5SdA9vTrap6mNw3sFoTdT3g5fLjHhQ1YAzRkmMgJhDsk7ZKfp2gJtYBN2Wg",
  "key18": "2eG4JZBXfQzCbURYt3CTdzp2AMpAsqKa5KwBPSQmQcG75d9ALif3nPG7bMst2Nawkk1RyDMBjmzfnK8FBwK87HeZ",
  "key19": "667HyhLwBqXTvB1obsTmhr61c8Zw542uK7S9yey7PUNPkXNprMiwcp6rKjQFTm4qgt564CQsrexqPQvbUsYkqFgE",
  "key20": "43SSTXCxHQyE8boHy33PCoUgdzKHKBBsptn7tsaLqLbEMRUvVNCwWVDSR1JC8cMfPLMC6FfSF3jaMkm9MhNxR6iD",
  "key21": "2dBDpXKt9WuC3bGF2zQwNYsdUfqtBgf8yx6Ayzz3hrsJHdjnxE419SEVtkuWzkbSjtkY342bHpRBGFHd3fjPKvsJ",
  "key22": "3ZMsXgeQa3wD3WUWJWct88HvS5nqMgo55fPUfDhRcCpGF3GTPN11E5UeqYMziPjyHJd91SgeVXgpSfiSJcfZaush",
  "key23": "AAzg5WYJbuRWHhPu618eNeMrN9g5wLxbveHt9yxz4smH1HZddKCuftctu8UcqQYkDg4TSh7kLd3j5XArB9FUPhn",
  "key24": "45F9833phUZsexD3FTCHe7jguegD5kp2uiRHaWxn5fikCA9BiaNSwDsSu6kaDFQJvTDMzginZ1ieFHCJx4brNdTp",
  "key25": "33krMpQPd9n998ScG4F24mp5yQwzRSktubQKJwpvnEC4gi5xB3yhAu4d9GsSSrxXKvYDo6EcMAia1VaLqajgSTbQ",
  "key26": "3A6tE9zLr53kfWP3QrmPjpqS5tUuin3hxgB5NQu1nVxnZLcvZ1cSP1DtyHW7Bc1kTQmvCYKupSsQgsfA38EQBV3f",
  "key27": "3GRAMYtJua3eJithgZg3wxNYa2XzXnU2EeJEH4Q9Mr63H8ZfJeffPF4Lai4SdiBJnkc5j5xrgDhptmbVZ6vyzX84",
  "key28": "2Hd54HLMVwuTgRKPGFvmYwysayX7XgAfnEba1VXF7ZAVniLeV3vwJ4YAxqAs1pYQ6LxjYfiZPs6UE7Z9dQo6EvYy",
  "key29": "rk1Ruv8jwAyWBosPzKVF4LvHP96BoZeFfMpNMice2J5m6jiTZg3Tak4M4z3y95BM2EazB5TtkXepNk7WGY9o5sd",
  "key30": "noKmDUkGgFp1H4wA5SdnLt8jXuUz3tQ4qSZddhPYJJTBsXtmLmAg1bQnduHButWYTecU7BYufEidnnbnDRr1nbw",
  "key31": "etY1zDdctoVBnBnc1kGpqPy9Bv7VSsCQS48P67jtFGosuB1nxdXRT7UugumarrzqeAbuCUZhLThchvPwnJbP4iW",
  "key32": "364YrCctAX93E7tM2WWshyWFeD1ys9scQ1EUkZEh449xV12GqZAuCaGhoizLZjQrUosX2xoWD3E1MjLrTemTxN6E",
  "key33": "5z9AnW7HieQb2SHW41jSt7QEaEdHvSeYDbvTpuv1Wi2h5iQ31QCHdFMJbJJiobNKVxDo6vXPw2bZESZ3GjEPxT3n",
  "key34": "3cUH7Gdqtkb2DrxdcCUq2yJBjB4Jwc15tjHrQtgHyfGfMyFRsvLCLEsqVT4D2ozUW6Ky9KoshF8F6VMCTHVnvb1C",
  "key35": "4h68psCy8Sts1dYBhDchN9sMjEkX4x3UKHjntUeNnTNhKCpkuBktEuiutmepx2rmZvgoMxD69J1fUUKWSQWdjCFK",
  "key36": "5Y3KepMWo6LRGGCPXVFSA4xCk6sauuoL3NF4Kz8RNgHTBH5tnwfscP2uSSpNioEPz9xhLgFLtE5vGuD43tiw3E55",
  "key37": "4j3PB5e1iYoxS8V7kZvaxyiGTVWD4ySCDADyHvz3zHf9JF7MbaAQLKLkc8K31s6FM4xhSZhLXTXd7VtM6iUqC2gZ"
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
