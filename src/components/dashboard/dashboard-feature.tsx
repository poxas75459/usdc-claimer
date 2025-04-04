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
    "4C2JKjBQGirEcXrjGEbLWvfofniCEp8Msj2gCJRLenFt4ZxqN52LXgyGzSUkwzkNxkXE2nywuJ5PnxEAuFWbJo7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26x5hhCbAb5brAJ2dnuhgZ1b5Trd2R8xFnqwzBVo7LvhSWKmPVRhqJL2iDEZxcEBH6HHLZ93DVTLWyGL5jLPjMTA",
  "key1": "2XbjAtinfiPU1vbCmABu9GksyTq4cSJyUCAEapN58p1XKYnm7PHweR4J1AZB2XS4SfXTEuiU8GSbxM3f5Dk3dfP7",
  "key2": "VXcECQRtVB1KPRz3cCa8Loknwu4oTs1zhiERR4KbkmARubYdLKjC4twxfE5phwE9kzAawxC4vndYuFSD8BsgBi3",
  "key3": "2Q6XaiALQYdaFMMvJSoTf86AtX93GrvAQfCGBCoRYUCH35US8vygJaQWhBUz3zrgLCUBXMoJHLPPEkBFwsEDLqds",
  "key4": "2anfDVNNMMAtzQmo5PGZwPioJnpiNzH63pa8eZDU8tNdsmnnCHoTLkTfyGX7fMLp2QeRgWVjYMJQzcmiVizdEGog",
  "key5": "4yLPhpMTfMGTcraLKkkp5awTZPpGtZTWpjEkW5iFhE1x6HL9jGnnjRtoXGjGy2dPjkY3xvahzEj7KXjPH2x4NamF",
  "key6": "3gbtYtLbEuPTTyqHmV6wFmdRLxVUEdeCvJvrbhU3jntmGAeEjr2i4gUgFgSwjpmHvB9FezK6TCruGAHgTtWoJwQL",
  "key7": "4H87JwdN6EBiWyLqKD3YYuJAoBdy9TimVxTKRw65vxbMsYQch6EuqachnsKnsiQq51KDMFbkEt76hUXL2WPiYXSR",
  "key8": "Fa3HFr5u9K7btEJ6zvLpoGSF89sNYViwWtj7fetUyeukuguQ12idBzb8yS2UBwp3mUoF8aRETnguULM5HZ71fee",
  "key9": "2irSZXGb49wwxwshdQZnAttVRSeihrjj818q1w7o2RxJUEaASfMqAv6gKWJTS2tndvA4vEZWg7stdpoL4NHmZL3M",
  "key10": "3zBWAhS9TRUYY9GBpLYTCBTBfbmLxUT8uBAX29LMrS2797y5tR3tkFFHZK8isjR1TdSwQ3CH62MZmoGtnHFkZSLd",
  "key11": "tXFkJuobwBRaNN83UZZJHNUYcYU6MfDGdx9Gp7PsTDnXcTwknHqNcfUQ6j7CEAkrLYjUb16vokVgxcYHF8Pm1Ef",
  "key12": "3wKDJFDjYHCvMUnmLPBei2bxu1Ef33QfiNJK7BfzqZPzQUZ5GNDACvcpXr7JJX736xwArB5JBVirgZBJzPmBXWAa",
  "key13": "152AY13GVZVkHp3XXw78EZkm2y3gJr44CxFPas4Cu6MKRegp195CDk7SJ7CthR3FQJG7JDLchS4bZvVo8z2152m",
  "key14": "5tS3ACVsEopA44pz685H4PAENPCu55K7tFikqyMBHap4j2k71YgrC89vFZyYGHjfuddov2XCR1mvfDQ6793b7dnq",
  "key15": "5JoLr7ZwsdMij54F2heiPmNWZPPxhnWvUgx31qamZ85HoiXAnt1crEVhmEsa1gKkSNwpt7HPSVhV4b5mBR5f44su",
  "key16": "5q2zM3LdSAsWx9955cFvLbkvntn1UFyx5T6mRNskBzUBDwTVTEvFg8VSiemABkNxE78doq1TsWGwaHo5ze4z198M",
  "key17": "2rwa5ZympYbd2WAfb4FM8xrdGvLErmFTwbvtkQtYXPxJjtsnL99Vyp3GaJhur19BandW3ASgKYpPUAnPM8fkAxbt",
  "key18": "5LvRnJpn9dnVWUT2SPXjcQwLRG5yyTeZPMkK8D8oXb4qp3D21gad7PLWB2fFgfyFVxUmz78toJsJ86FyLn71pU8a",
  "key19": "5SePHMFFxjTZBKeYpnZK15nsNEC6UwngJPkdtGqP2f37YSPyJSQrTeEpBAf8ptJVDbyEoQ1Zu2TVgoaAocgX565H",
  "key20": "5U4QowKXXvM8qjvMehjcxR6jHKbnxvBUPfTCGbiNEwuNve9VwqqpvT12sH8UStBzmoSs4ZNLsAEHDzXJfEp2i7wJ",
  "key21": "3vnYh9ecM2QQMqds35c9ogBVemJR9imnJKMzwTNTCMRVyaMTZX45PVQPCLU3k7sbPbJ5jan7zPAEYaXtYEKeUPFx",
  "key22": "5z6GEqFArTNCBEM5QHJ1vLb85SMHCKdqtfMSQwrT1geXtrwMLgbGTiyUivqMA56Keeo4vsvMNHfAtHcDy1hBc4k6",
  "key23": "5TqyUJseL9iwYerVSJGiHtfkEBaMbA82yKoPqrNG3P6UV54poHhfGSkxkx4AgPEZ3yikAEJvZznDvPgMp2P2MemB",
  "key24": "324ZQpRUmptawBGUSUz5t69KRqUa398ZVTospbZyDxNKcwtpCfMprrVtUxj7eCmfmYrFdtrCxU2Xy45YZXcNHTWi",
  "key25": "5fvp8Q5GrUHefckZozJ7joEif9MRBsGMgBRLU8ta4xaGsDdVvmx7xijvrSgiWUXoSVYHKEj4BMYuarEZSZt43kRN",
  "key26": "2YFdQvo4UFV26qt3U83FBEYBQ7ZtTdZdYTaQHuBYRkvP12gzxpeKWMhqH437DS1nt6SnrepWwezVtUYUYLUboizJ",
  "key27": "5aroCxZZ4LKEEPamkGtv74BvgCapgkoumSAPeSU86ZCaFzZroLcR9JD4jFYtg2Z9YtoQi4TE7jKA5EpjC8vPuCqH",
  "key28": "2ZK2pYUQviZLdyfuYGE4gfKKACRTuxx315mYqRaVc4rt8SNWTjwWXcGy23M6rBpDiPzss9LqJZHdedLXpyaHT9qh",
  "key29": "xQ2JLVWtkfG96CQk7ZvPHtohLxvcdw3CJGXCbaqyko1yvT3CpBV2Nco2wW7yHePzAJC9BXEFupyCaQvE3zKm4ig",
  "key30": "5AFYPhk2WaeWKUC3TVgzCwY97m6eBqMQ4A5J1VBw2JQC1HFupnDJvcb5WddjuPprkpZwZmd3Gu6EV8aWjcS5HMWE",
  "key31": "3s5SuA5HuceGRneE2R7Xg65UecMhLubJyTC4JGRC42VKxD1WccjMk6nvwkCDaUj18wGaNdB3KyKhhtQdBGqu2Fc5",
  "key32": "r6rxomHa6DQBRA6H3whre7WmtDp44oig7KYBuvxDczLTjBGNEAizvkxJ9UbkhVeDD8XJSmmFXDW8XSYyCbZXyQD",
  "key33": "5u7gchRGiimUEbhyUZPR8w6f9gyF4tJQaKwUZJV8F35tDusmrZ4sbYLXmcR6J8WHW3pf2Q4hoM5jKzU8PWmCwAGq",
  "key34": "4gimR5ito3qxFks5zroDuTjpsbrUHqyTviV55QxuvNgUTCAhdo9bKAQpyWsSicGu3ta9XhWfRj1yi3RWCuMA5H37",
  "key35": "59wuxypSYbfPsW3d8zsFJopd5xTAYeedK2r1L81ug5xLysNDokZjcTpZfQ6exem7rnE36hbNqYV2d6HtKh8n2HNd",
  "key36": "54s5VpHJpfsikBmbvnGMUf3BkKb95BygSPCPeuJ51vZjAah71QuC8Q6W1oLq15V2VYC4bfceVdiYJKYb43op89kH",
  "key37": "ERYUUkH7jZNJx7pGj2r6v37DUkizdSJQaoj3v6JpM18eJKH43eTq49VtNrL48Kinz3W7CWrPr4kgxWaf43aZM1S",
  "key38": "3AHKFeF8md4xSZPob11NvgEydhzPsenb7GXPeZutWGMZP2sSyxenDoSiBmVXRYezQFA9rGBdhoW839UNxCN8ktfx",
  "key39": "ikSBxrf66FUFMkt3yJ1JaGjWqWqf6qBhNreFtbABWx1DFLJcYqw5qWiFQaGQFkaF3MLF4VucLpH3gfhXm6gS764",
  "key40": "2YQXNG6NDMvxthNo8bSpoVRoKnBEWRibdSxU7YtirAbFyqWD3dxoTem5fmAcXpbQCRbrin9csBznCsK7qWzgT6Fe",
  "key41": "gJrwcHAWuwLDUFkBfo3N96mWM3UzUttAaYsFWWH7qZwaW4yrkiNRVtwAhZn32J7kLQ5mEubZMVpRTdFDTeT56oo",
  "key42": "FRhSeuoBqR8HjQPoBYQYH6mQEBzun6CAmEHW81qLYGaiYwhiLX8jp2ibwdwTCbNhnAZrDkGS4FWzmse6XTGUUGH",
  "key43": "59JbGViVaRCxsbAi3T1jvW8kwyE7geB9RM9NqzcxzZHpjd1dcFSmS84hiAqn8zCGG8ZedshAXHBDw6HxmjkbuSCZ",
  "key44": "5asHGSwZdZRQzmJUdQ1PhPBvxHYUM69FqkqXz1NJgXvnAkjrpi2vxPhqMDc3tmrvQNNndoHANXzvYiSu5oPfUmyk"
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
