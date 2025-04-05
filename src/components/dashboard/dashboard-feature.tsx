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
    "3XEVuoUFT4GpFih9U3eEuYNGE4QSpE8F4DiEBz3xE6vCRYdpuZKWiA4SA8mZP5erhTym1PnkGzrh68q86CM8rChL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fNej7HZDp5CFkfS49H6iLVQC2LSW45Tw1wuFDPTzMPgaj7M97CNaf9cBwwbKR8TJNfmvGYQdauZKEfcHyfxr1aX",
  "key1": "2ypwfk4eKadf6UPXPfEwffhLNcWQ62aB5byZteHTTpD9rJnEmPScicT6qsHNQSX2Zg1QDnFpPJ4vhBWS9q8tHSkE",
  "key2": "4KBQWb1mwCY4NEpDkQrkFGL1Uv2FTS9HhmW5GS2911Zd1dzc2gAzdZcnodWzA36dcsCNtgojwudAKNT45y3xBAmv",
  "key3": "5YPnETd9urc7G3hc7Et1a2r6itg5ohH3TSQoBzxKaR13jSKUSQDQF8fsVxKSeJbtXrqbQe6F9LdkGD2Jp6zrMKo4",
  "key4": "4ncRSYhXxEQ5qb4N4Q9B6gZDEauyQnZ46BmSES8ZKqVDDdDjDLJF4SqcdCWVabEcWLTMyjiXDxsQ6PBVWmbuFer9",
  "key5": "5yK9e186GkG3fzF82v8SthUkSdd2AtBk2K8JVhcXcBoCbYQQQmPhNoexoUwvgEXB3u5v4P2GsWtqDHUjE7VGb1w5",
  "key6": "3KzQcFypHTfhd19opqkrZhTE6ZdFnqcF6TanAyt9vUMTaHojNX3fP3H5WP1aiPbJePqtQxsaA2tdUztQc1Vx9KCE",
  "key7": "5TVDEojzHGVQ5fABcwXK26Ef6HJ4mQAEfDfVX6wAqEgWZVpcvQF4uFUYyq4rDysuhmN5ZNrfRu9BeUHGd28rFnMB",
  "key8": "3DSHcs2x58m7kmaoYH4Hvdxc8iutivtgQ8TzGqQjrmHSzv4vDE7WCW2uxG1nZufPEGaFivYeso9xgtTxXy4Uq1ag",
  "key9": "MBHC2Um4EZBZvZL3TGJcamTGyDLxyPDxccETH9MJDdi6ZJrqb3egD7RrZuwMZhsNhJeHqH5WmD4xeSuLMYw46WG",
  "key10": "2tJ5d1YDxve7ojn36NxX9qW2eg8X4hJer1YTDFq2Q8vN73hfET3FTi1BsgpBYpKWzgzSuF39Bx5SY7d4FyqiBu4w",
  "key11": "5FZzSSWMSokuB6rn7x3cesh6tPA7kNhtgWo6BcgfZ8Lp8T9p2pE5sPA2yFHsKWEhTN9P47fTCi4QTDG7c76i6t54",
  "key12": "3WNZ8ZiuNd7fBTtR8UoYwTTEERwTugCYgW7Rbcfharvo2W1S5riNNDpDxQFhJA9At8uYe2pmJwhPgiKUBhgxFPCM",
  "key13": "5WEvYnjyF5fvJFSt7Ji25CD9CK8kTwsCa3Ssr5tZ7gX7GcsTxkptk3KEpJvjaAPU6eRT597yYoVdVQRzLEEiEYtY",
  "key14": "27UtCZjB6CoHHtfGdxAkiiuL86MMgtQchFFe6QumvjvxthWwpeyhEc3Tq3i4ZULiVsWpig86tjL8mMyPfvLmENyB",
  "key15": "52V7idp1pWYDpUxg2w1FFVqeN8LgSBFGHUMr5vWwZxJ9fbhNNwyEFLxWGdffTxsr6rCXetEceoLpC4wtt19V2gNz",
  "key16": "2cdmrRXh6wH4po9pebYcBdrpk6byh5kLUH541n4GtKkFZ69nEsnZHm3YKbYbMosGB1wtpYPFeSvbrymvm362yY4R",
  "key17": "jAE7v2hiDe1YFkbnA1A5daNazT3w9vYQUg9LeKSJqcMQjtzAg9eFjiJDa6wGyRN95HQyhWC7BLvyRv6g1QVq6mA",
  "key18": "4jLU4V4RuLHeMWmGeybyAURYw4kemvkLzUxSGHGgjN9bPdh3KehyQGscwrVCtRLVe8633PdDVbbYEVEZcYVnho35",
  "key19": "34DGhs43nzz5QHQhwRsPhFMFfoC68cCpqiRyG4y6tSUTNayoVSKQ2jg9ghtn6Moo4bquDQXJu2MeTnaFqUKc8rNr",
  "key20": "38XFbzG4MV9ppFzH3G5o9E9CJ6Pi4UGeLAkB5kyNuwHW9ghLeqYNMR2971ziQfugh2JaohTJNWCmS5LtSjjmVhTw",
  "key21": "3NawNPLVcHqVcpXabQDnvf6sVdrUYLnRYoUw4xHbv7HQo7oaCnCi3sDPVWkfjbveRuEbEBngJ2Mmwmepfc6ZGuK5",
  "key22": "X7cx3LixWiAob2EAGBYUbhm1FrwLBjAHTDfpHXYbM51vypDsEH1zXWVPmnxjG2VrRKxQDFc6rVVE9Wmxhdepg3D",
  "key23": "2oJr328jbq7YSNeLq6NyFvAgUvEWzJV86xa6BDf7LtkDp76uPoH8L3wfmiarzC4RsDY1gEYWdDspJRgb3pXbhZJa",
  "key24": "ywkhxSsyG4XKEMLjd8WU395NykgvkKfcYbeUYrvvhHZyBJrZMSdxgoFrMDLadJWJPwoboFAPNcF1JWr3JuTHK1H",
  "key25": "jgxBArCAKKzP1ofqzrRQPbRxz8P2f2Yvmfq31DMsR1fZXfvRtcSZnW5kCyo5TN1FA69Dggcks4c4xVwbMZoivSC",
  "key26": "r55qzoq9aH2SJ8cYu59n5bVPkxfNHsdheejcsZugeFj1xB7NF1VU4JPQbfE4ce7ybS9mo6wPuwzXM9o26UzdtQb",
  "key27": "22kBCwnaXp4d9QZJ1xfvC6wTKdWFCgwwq8dNZRW1ChXTeKMJyUu8zRJ2cvyJEfkQaHniG4ptTzhbUDJcAXWwjRjV",
  "key28": "33JgH2hdcGwVLrx5xYuUXJd6LcaHWpRe5zjJzDYaUy9AATyTTD9NGWC7hqHu6sKydwthY8H9Pq4nBN6NNW29m2Qm",
  "key29": "3uzdH9GQvTUNUeniqq57bc5sA9AznMiYxdPdZcQxV41FnWFaoffZMGXfU4zpWwzEtubt7M59fEoXjF9KyyrQ6pkr",
  "key30": "frBBYsW4y5BxJj3idMpSUTCKaGBmTRxSnKDH3xBUhnwzNCXE5N7pTpqQRNZct3KKY6kAP827e8YQZNM5uPnaZG9",
  "key31": "nBnTppwiA17rCkPkYcEJhuzfZXEf8tw6j6S2RTT7qaV6jiRo8tUmY1TXtmnR1JQUuuERyBApGuxKFdu9sk3Zpwk",
  "key32": "5aidqP1wnwRthZjctij2hKUe3A9oAEfUsy5s5gMU3MiYrZfd6kzm1mtfeVqXjZHeY8i8wtkS1t7mRB968snWVfF2",
  "key33": "2GgAX6R8PvoiWgrT4ERMPKperjigTyyWeLM4nKxC638aHSoq89XbFk2YJg8wCdzf7KQS3XAL3g9u4XAFBRNHEKSG",
  "key34": "3Rqt8bBV36eFikTcq6A8kpFzWT9uC16uNG9XZCcYNzNhCvp1mHVJk6unY6P7VYEgaP2uBP3v4QDR4EtyPx3AxgKf",
  "key35": "66y9Qeeu8pYQQmaRitianwxw5PaGXVajwLJ36rTkqZtCr8y7zMfHCyuu3NcRZgme2f8PgqyqkmV1Y2VLKcDMSTaa",
  "key36": "SS3ZdBBcXfX2yHHKR4w1LSv7YUoxXScqgCYZVJhNjvgVMgeGrpG4GSQh9BL8sT5BndoYUqDtHDvJAD8BBTbbi3s",
  "key37": "5aFcjqD8qvj16R4SdMNXa2YbB6pUUJkfgCfdZTxJdjL94RTWmY1egLoPo4wayVakssNXNLXoSyBryKvAtg1A8jan",
  "key38": "2eGuofYs2cqBeXtVeVAqM4XK88M1h2MUTSTYQYfDCLKoi8FaBQWCBm5rjUzxG9Srx92v5NxzyAqhmTHGE2HD4bzY",
  "key39": "3SsqfdhpjYqNRs8h2hjqwij5gSLA9isnCJ6dp4WJpXzR5UMGgoCkhYBLFQLY5kh4LCteQ3A7mMoEkmjzjR3BWpaq",
  "key40": "31LSkCwC5mS7CQEqdZYzpMUsfL38ycs4ntskL3DbzsocdDSPsjEkpvxUdK7E1wi2cyZcrNN7ahTiUrzLQNPizufm",
  "key41": "3kvtbBqUYSz5FC6SfvpisZfRtGniGXVoniCVfc214je53rHJw68V6VTnhziLHXm64ytBuP4TD6uUzW1EmwhcewjL"
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
