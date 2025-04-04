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
    "JtiqBvmcew4Pd2dmvWjvF6QY7xxc4KsGompyXtTApLSiN1SBHBjgynbPXPiuy2R3wb7PEKVhPyv2HgYTKKTVXt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5prQWXaKWzDg1x9ozytRhjhvgovVLtNWy33RstfxukD2yTaJgnYAf6dMAhdN8dEneiTLDp28AmZEXN2k6ReMft3E",
  "key1": "4cKRA3CQEW7Qscj2U4ruaJYMHhDTELPLxUoVekwu5VzRoqH55g9mCzBM94D6Y76GzZqf6bDFLLgBRK8g25QDuZ8f",
  "key2": "64A71SYcZaxVSP4CgXuA37UU7pWtYZ6SiK3aJLF2T7drArbuDuwLbAyyMnJ1V5ogpdAQH4rKW7j9DdPdBNDpQRB1",
  "key3": "CBU6vEuhqkPsbgY3DXtsmNNmJsSewBYLY5tPf76GWsUUc9FuhzHjPgEKvDi8X63PKokMsmz8Bm3FSx1rKfapCFx",
  "key4": "5K2BZci5WeganSQm3T1GW9e71ZyFQ7p7gc2BteRiDkVyjmEeEyrSbEjCzcqkBDaZedJjueEZWkJbsvdBkXKJjJ67",
  "key5": "4J9g7fRgSPXNMhZLkpxGBdb3B68BJKVx2UgysdwuSpe2d337GAVt6mFdKGLHD3tSYLW1JdJUZVLGe4iqs4YcicRr",
  "key6": "2Pdq9Hqn3RodfqgRHqhP7s6DgZxWfCnkS6ct4XnFevzMLU9wtcQMpSUe6dWdKb1PWn2GTSe7dUjVprpodY84GdUP",
  "key7": "5HeCUu3xXUDzTKsDxRB2AqvbAnYuY9utCHxFZzhN1hDdWuLBCMfoHL5FFYPxEYGaJbDUC73nY9Pvp4ENpF4Ncmis",
  "key8": "Ymnuo58VH2YdUGoGQzpu6RVqKP3ALT59Pk4k7Q9UAMcJMSqMYsMYGo56iP1sPJaouXTL1CDTs3ZqKNCcCeKp35M",
  "key9": "9bjxxhytRyj7pmEQ5uAXXRUktkvGyne28C619Nr7kmkpQ6BVsgGeabkLqGFkb8D2bNmPTsaaHZeBwhNULvN5zrG",
  "key10": "4Px8kdtATnjbPJFPavvisFbRouM4gANPzT1dpE1oKDLzNbP9D5Js7eZC1nNx8vN5A7YWDeQ1xpmhRtWYdP5rzvkV",
  "key11": "2qPhWyKXoqXV38koxDyto6kzWEULEvQ9fjqoDo4Xgns7Ugn1iiwPU2viGXQKRMvLu2TBHh5KosqeH2EDqYgcrCfC",
  "key12": "4VNHS7JP5BVz8AF86Ugv81Ym6uiB9NQCiwg9LpwgadS6B46H3BuYqPWNjedYmkLNW4WSoVt2rhbg4K7RuVtnT6mx",
  "key13": "2fJtWLgYk287QgVZZe72QJtMGHMS2VY5futdJBZT6UrBbRWZTaYXnqYxf71tPVf2xDzKQ4UFUGQXy3zSLZ7Xm89X",
  "key14": "777bj4X94Z4JVZ2GNuvxxZh1FoVmVWoNPwgHhs4Utqw2g2msMZAwmmr6MTswxrx1zJgamfCdkRTXDB9GRvLEiro",
  "key15": "pRqVrzrMXTr82eqQxEQfQxeNj8ZuZSaHLLEjgvims5Z4aS82XxApx7BXaKriSjmmSrmTzoGWNQv9VywRS4WmW8q",
  "key16": "3Fyse6wBkc9ozPcf7bbBRBZDy1CPAmpxwQU7veoaA1X8RfpJdBU4ZiGzpP3b9s2sg7yBTXEgB2LyXjjx3MBaNEKa",
  "key17": "5NdBpPnWWFBPPBuVVTYgQDw7CwZrqjjvFxyT6JTDhoHTvc4srwFRKL3FT4yzJDfM6BUt8wPCwZSRLbYgt3auCir7",
  "key18": "THkszWiEYXiQV9yaHnS2KnyU45wGhMQ75UqzVF1sejbuKMKHVtZvyw7NK9D3naHY5y7tizBQJ3MzMvRZ6zWnCBB",
  "key19": "3fYBDL3Gpbiqza6HggLKCXf9s2cbCWoyUmkrmM5wFB15MV6SvsAH56MhKoveXj8zwAE8wQKBdFS117dAHYTiN26R",
  "key20": "82zwUQNjuRYeL9vuXgVDfvg4WeqpJBEtQLXrZE6RsrJNfd9uiFY8F3nV8BthqgBqviWf9uncaDJj2dLMJFMEk8m",
  "key21": "3Fvx2kLYjqmghL25YNunpLUVdRkzW5oqW6kY4TwQuxGX6TwiTHmQ73oPxnCWJ24FZKsihRM4xtLxdHagZJseKL5a",
  "key22": "2ZCXCfbBWHStoAy1MY5W1M1DBEcAU2LkfmT6XFd7nZbrzypAU28fN1FLc9UEq1vyeXWeGYSC6xMKoYprjvK39r7w",
  "key23": "31mBsK6wZG6CN6HFpPAFVVu1ZFC29WuJztUSEWd17u7EfTgxfeRiRJLjqtVUAmS6UaYdUtD5q5Wtfg1xRAvQv73a",
  "key24": "5Yd3y4e9RoXUfnRTHtqSiiEiGkmsHfsg38uuzTbYEHdn7UUT96v3ygNCKzJkxfBBHP3VWgJU3sMvNiHBM44YrtcY",
  "key25": "37V7SksuagD5kQ51v7W32udGMPJhhcAZWR8h4fJsw52t6TnQxxxHKzhsfgsbugrAQbSn3GKSv3yt2RtraGKZwT4b",
  "key26": "32fz15WVVucPL28rym5PApLFkzxVpzRmjujQFw7m1DZDSaXBieoRdYenuDVAbuKmVj7fANKTGWEqnUnhNPuhrakd",
  "key27": "5fj94QzBE5VsB5sPkX1AWjJvht47iHEPGF4TNwSBiTRJKHdgnwiq2f38EUzd16my3MXt16VutABk49HapNpFjkA4",
  "key28": "39gzvsYwNe9nfbEMDH3kWovg5XHvkvnQeqoTZM5pKMNbSUrfmQjDML4aTCy1hyYcpqQwwR9vzuFkx2YySUoFonDK",
  "key29": "egoxac895L1s1PA9XDNp5peN7JodzCLZ4KFHobn1sVEE8L5YbkeJ4epanV2nf1kJKDutfnVDi8mJQXxEHuyBCy2",
  "key30": "4PxAQ7QhJxkRV1HjyJ5958YynfzubPTVsPcdMGb8CWCeuANtWemxrW9EHZZiRFcAzahyToJFs4uvQGHfaWMjD3CV",
  "key31": "4MCvEfjabDb3fpVNMmy3cbmN1tCHZeXRYsmLUqb1X5iKGpA7ny6Ma1y1bqEpxNaw6ZZAvv9ft97nFrinSfv3Drzf",
  "key32": "2JmVsaTME3Mqa8ND6JqCQx3XbxyEEVBViANjh9WoaoAFYP4YJKZggTw8Tt4LFjY6emcya17j91zKL9TVoAY8x2tU",
  "key33": "4YTTi8Yy43wcGuujcZHhY4BcsyT4NdK6zTUh2ca3xqUvxD94ExUgz6e69d6X9NcBcEEy7HjxTSgnDNfdZcY2vKa1",
  "key34": "3rh3GmEbHaND5cwMXFko8zHY8cCCD3jZCV2yeokHZLxfRVxbvrhfsCryyafdeougmqSMBPWYn6pK2iBQ73p3YzkL",
  "key35": "2ZXoKt8yxW1xCQW5D1QxBr7GWhSwyyxtTpzUoC6En68XPsBZ9BRE4n4ZJv83G26o8pjvBp8CFMFg9QS5jQ2FNpPc",
  "key36": "SGnSs9JX1heTBN7RjH7CGtfUmePWU3N9hd3K5UgEr5Mm1LQZvmMYL5PUwyevRkFW6iwnthXpUuNDLSAakscwptj",
  "key37": "5PFfKYtihejAKiH6diNQ1hyRby5wgbrX9wMgmRbFyUbxoniKR6Vzgi7khdGBGh2u8pGQu47GMTCqNCPTppGMtrUE",
  "key38": "23FgwNUV115js829PnjqdwhMmTdPoJvD8PT7R3McVVQVtd8J11WYAzH7CFjv5fwh9mCvirMaqVBrYV1tGMNwzdHT",
  "key39": "Kf5kbn9G1j2iaGN5g4VyBeeT11vgXKhuyBPinL61XFncpvX7tahuwc8XJWAkMuTK9ToAjvw6YzpgUMFY8nynTck"
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
