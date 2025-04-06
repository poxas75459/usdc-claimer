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
    "4AVSmGtmvcHbcGYi4Q3RyJmB5Wbn2dPuuTizZuDdp7R7j2PhKgn8D8mJeyERkWsocfhBJCRJuSGZMEV56gLa5q5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pzm7AcTpz8kgFN6ji9LNVSiDs8vff1pdBLUbiJWS8qSGwu7ezcdjmtgGDZMsPe1G2YDr4fh4pJ5pQSKyrNWAdpf",
  "key1": "3nbvHdvLsDUMdmbgrh6giqKfbFZGZP5bMNR18LGvJfjCG9qM1hGLtGZF4cKkh9Mi1VcHwSFuH9MiJLMZA3E5wtYN",
  "key2": "28fNtRinE6ppEL1Hf9xKaqHWBqkoyH1wcESqsBKbfZmsC9gUhwnGGkiScVzta6TqUfM5ScjAm1stGTLZbV2qn4cs",
  "key3": "39B7VRYZpUNWKy4AWqexvHZMJCYTJGzCwSBtcKZqWYszzdKYaFaSAL9VoWDKmt68oVfE3H5sWCqUw7rVXi7Au7t2",
  "key4": "5g8eW5sGa52S6VWKF1thbzbNB5HVPBU4vbq2MfHAG3KJfzSQybpGgQVcRtjyAYSGBCtNBM9boSnnTEsejmzc8MhD",
  "key5": "1eFmETdWNRRTEXmNhE42yZq9feB5Bx8XAp9wqbcW4zPBt3NJRmXkWTpvmujiRByvTuhY7wKKr84q59HWhRpZw5w",
  "key6": "593FbG1qmEAmePJ4XxTTsYVJdC21tjjdXepjsHN212cLbgEWK2FFLaUWJaBnMuiVFxxKz4CcQwGYsPoF8tzj8SuM",
  "key7": "5BqfoK4BRstMEYGkNyjAgvJmtG3uYsmzJrG6Yr1gFpru6in4jHD6NbTnDC9zhVfNWUqT8imajbdBx98fevJFAQ7h",
  "key8": "5MD4x3bYkLbNwwFATTryUsd8U4GyfWWJreLSEjJVsApdzy7BFMY69bH5grHm7EH3kaquCnKfGNXztdjqZach1P22",
  "key9": "3EYAhPiiYXqFkoXCe7Hci93dbTpM6ikUrqQssoKzLjYc9wGZiPnPMSuQ6kY18nqtgbDKEMxigU44HLRRkq75ukrY",
  "key10": "5BhCACfypLvB2DdH2pvaQB8StwN5A5a94XPgomGKx95GfvdimVpbWnQL1VJppumokRgQDfZERfDgdbCYy2Gggx6L",
  "key11": "1CcogWuZsKfdeV32bjpgX11DuGv28qky6nbjMceWYvuV4UvUcz12zfsTQQuwpwkyYf1gaSD8bQ8x2rng3Nqzbux",
  "key12": "5fX9iuR8qxfZD6WA6Y5xFZKwmC9sbsiYxvJ7NNyaXjF26YZrfYt3Y4SsaKdyW8foNLVzuuoZ6gj5w8B7oYn74Wgo",
  "key13": "3dyehkWTZxdsNoTPg5g42SQnrSAXz47a1eYFSJEUjKQhDf5132n9Q9Z9GimWD1uSUNQYLv33RtGMTVX8NmU8uPeW",
  "key14": "5SdpRv4FR2FAKJA3Nu9kaop9wDb5ABwnjAoK5zXmRHn8cUHEx6hAXM613rMeWB5M2YwoYZCj2eYyjF1E2k2YXx3u",
  "key15": "3XUv2ZGAueNHLcg2KErHTUWtZ9fXAXRpcSer2TsLykJTQvbiCtvhcyBpnP5pQerYtxgYwDoeEPo1hdSJAEdR5q4Y",
  "key16": "2oxMZtMcrtKHibS5jbjtyoGVapFNbFoWjqXp9nnNqMcjt1M6yV3hxH2pfWdhfWSvp67AhFVFvK4vws7QU1gvpA8B",
  "key17": "4uaQQNee3YRGr3Mixgd4yUtmznueyLpasaL98FibLqfTbVt2UUh1ca2K4NtwudKXHLQDyWxoskhdShD5BuffG2D1",
  "key18": "66Y2usxwB5LizM24NZ56AfkzCGPxvFZPt4emzZf2zLJEyKiFdpzbTtChTJTZVvwVG521c95f6xCWuhFprEcGpnPj",
  "key19": "2Dg7TuP6yXtayh2JtsPYVQWSDjhjzzLYAATt6rjNM65A5LBYfVZS5LJaUga7FzgDizrcureuoouRhzxRP2sqe2mo",
  "key20": "4uZBQGBUgjQ8R6tB4BjTAUNmymp8QDUWegdCksaDnLaD2uR2penA7t4HnVoUoVxX2GD7E5vCC6rjdZcYLU3Kbs3C",
  "key21": "4AZX8553QztRDJP2WTWxEdUTh6uuafYW2Uhy1MGDNfA26VFpkXrovgpcewumM7Hpjv98eSFwqPNbNDxJzUDyNXwB",
  "key22": "4SkrSLbSCquMF35i3KsRgEqyfAwQYFTuZG18ksExvz1jkRiLj4DGkFW5jTbaJfR8ax9v8gbPsgxkwECEf6oRQPNj",
  "key23": "31DGuieaD1cvBQssGX9svm2nrUV8ytfG7Xthzy6fzvxZujJzWAoYTpcVNcTXE1pyBum2bYn5DzaWDyxNJwMreFqq",
  "key24": "4LFA95nwYvcNM18QeU4Q5aGfqeDMFk7zTuZfua6Auw9hiCiCJC2mBEfBhcFbQggmWXpEMqXSNqVJHAC8TpgTWtrY",
  "key25": "2XwEFhWY6krjNUssJxvh8QPA57x8tNWFgTKGqL4F66tndXN8j6JcTGgfKUqVwjZp8d2dF68WZuCPeuC29hRXCah7",
  "key26": "5tAmwGvWD4fJBXBVuH5yNX9jyKMFeMzvRFfUhkRdkWHb54Z4SYe2PVMdWURLtkddDy46XgjucVouDqgBRhRBQgy4",
  "key27": "2Hvtg8UjwzwjP2cz82B3z9rhPnuEbPHPiw8StQJEe66PungTqv89EYttgjedNF1XCqF136Ks8WGAoVqpynncWwpm",
  "key28": "5t7ewsYV4jvLKADrxMTT2wwYbGjrmRMYY875LrrPcYUTxkYngwNQGsZKkfrbaETRrr4T4FRUuyuyGxBHSgpG85ts",
  "key29": "5odADRSRk25euC4YApoYpBab4nYgjXFVjT2yzYzzrkBSBbZF7acNrjY3jGahhgYoQz15Jp9sdRVbcvfpi2KmiQGd",
  "key30": "61D9gmaQa1coSttxbFF4eU3QiKX5kj85BiGXceFpEECecbeNTa5yozJCug3aV9EwH53w5FkMhkLDEdXy82Khtx2i",
  "key31": "3F52moaYBK5qScoA7h8LdqPbFFNCuEvpFaZqFMSf47AWqT3xb7GtKoRFK3cdCU1wKKaURDQ8nLStLSe9oUHXFXMj",
  "key32": "uWHAh7JvxN9pYmdCgLUk3dsjXqD2qzd6frDFwQfFfctgePRWStUvH5wx2LkAPGcedy4Xzf9AtVy6nu5D8hF6T76",
  "key33": "5cBULoxxPPt5aiFnGBcrRkgSEmu19nttKruXknrVJqeV9zgCBuN7dCe5SXaY2K79KNMXDxp1MpEpmZA6kaRTRpub",
  "key34": "3N7wedrFbWFoXjW5Ce68H6bD6b4NNxEC4uQE3KaRAKzaUiPhMoHNYKTHJNRSJDBTarv3FL8ezBuqCwJHKgLbo7o3",
  "key35": "EJbmExZu6oE9UYKQ9bJ7zkpbTLXdJ6zWe62jTndTdy66XESQuWmR2psgaRdtfFTayUXjf6sJkeYXy8xjhwakXKM",
  "key36": "5AWapRbmif48D28QRTPmYPEarmDhhAeRCJLWanPzJHK5wKdL2zMao4wuBhL2SZNGwRUZ3TSfMtkCFdeRb45uYJvm",
  "key37": "5hfYnbFGV741ozxVUZZAHjjEvvTCmKEBmAkd1AmgSWncAzUCNEnKBYkRM5U3RSrhUd4RRPjhM6mMzTVBoWifd1tW",
  "key38": "3zAjUrrdBuusseb42Xbhn48zicZTjGbinqFpFKsGoF71i7sevfexdADZBVhNhAvLwEBzTPvUZBcpVWQqRDk3RRwB",
  "key39": "wE9CTsvAJuzfkm4QBmKGGn5B1FsCkKeVmgRxFhYMotNC3Cx9cAW3pwQPdtAhzt3eBcGfYwDTgDCsuqEYVGEaEwz"
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
