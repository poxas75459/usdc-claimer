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
    "4e8QMqxJbmQwrscE58iz3mK2zH4Hb597Qzt38Nh1VeKpn9ND4jQyDhNxjCMyqhjD3NR7q1DdJCnsMATCxCZeoKEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25VQUTvah2i7QRgmLjYWCVTXEncDPVFdzDbtRj3TvGEaAyjbHfEwWGbRHKZcGCxXdRumHfDva8PtvqMYYW2ScDVP",
  "key1": "5PKEa3y8EP2EALBbFkmUS9skoBWnqYxSM1fmFSCuwPNvQGSGtoxarxn6MeLpFXFghQeGzBguh816n5TBwFiZ63jw",
  "key2": "3LPbFRFHaR2GSXEVbvz6aKbED1t15bkYZg5QeV3jrVAezrsQxAc5TmKRULdesa5p5yJ5ajg2aQsjvbmajP8RFtmi",
  "key3": "2rGNYw1p286K9n435WUsvemu4fVXT26F5vx5BcQWRqb2YSqo3QPGVLYWNwsmrpqX2APKBvzKmCUoh6AKf6fpV5tr",
  "key4": "2DnC8jRHjaVK5woJMNs41WcyCz17DtoVAGtZ2JCsrmKSsMnVRhsiT1EkCjbxnB6kYvrHB8KPZBMcCfaw3je6ss2Y",
  "key5": "3pjxVGcMyrgZcQzHT5iirP9TDnTCwriPZBsNgYe4bzPPTSwvdx3Mi456417Zd4ubsA2EffN534wH9aJ11pF4w96x",
  "key6": "3zgp6juKts7Uk5tJNjKsq4wEoQNsmGZk6ZoCM8oS6XxrNrUK6jGhVqzJ1wMCNKN19gNNpE8WRL1c93AMnVCRxGU2",
  "key7": "52NY8Br8nF44fQW9VhzQYSDQmy3nwrBnQrEC2gtFa9uoDAyc4DBMQzQPweTNdCzH1cErfWxLa35bTpmDZDnswrXq",
  "key8": "3VoRs1iYaTPQyq8SKZ8pAdaJj95RTQzT4Y5uk6S22g4F2Si23idHCSS8uqgEWGGwsFSVjmMnyC8gQ4cirrqWYPhe",
  "key9": "62T8kcgHwTkJNp9V1mC3unppDvzsrovT56LGSsNojvTcFsjZtsfLbRy3VdY2dHi2tpNwfGcGBu7BM459cmp9dXAq",
  "key10": "4Cybk3higKfnx1WFDvxjKvHEGq4t49GJSR9S8HBdvFywbEibXF3UHjH6ZGTRJf8BFHcwwB1qv26SJEcmQt8dadue",
  "key11": "2AnjhMuFVSQqov62dZP8oxyziJ8r9SvKLYC8zVZbk9JD46QCLi9FRDvKkqRvim5cX8WaGjBeM3z18b99CQEFtAV8",
  "key12": "3K1iq7sywtpYNpL3F88RETjsci8sdPe6QigRE6dEh5rfmxDfYCjmuU6YZsqN131H1787mU2y1Upyigv8rZofBBh",
  "key13": "2Fu3NEx7azWiPq7yt89AcMHA5s7Xz1rDu8YCZiVt46HE7HgjvxUtGszsHRfevivQr5p3TitLtpcj73sDJgTmjMdA",
  "key14": "4usCRWCjoB2e238RpYw6gRHstChBdGM2JEtRzJeXDFDn9esVNU9JEq6g7QtfefnQL9FcbpD3H7KcEJMTqnLCxz8e",
  "key15": "2AiDcvC1b3L2k8M8i4tgmduio2euV3gLmvWYPzjJ1mVyMPgqEDh3i62kuiFqoaLRndYk3JJ2QLNMyvtP64Jm6aFs",
  "key16": "5DWuBcgYbru8cHaQJh6q27dxBhR3eekrHSxXcf1uvmD9uogvxHsY6Fgjmpk7NvCZ9QH34FaQFU9MfbP5qiPqiwrx",
  "key17": "26LSf1ph36bx7aY4vsXQ4ZZ6KsUG1EMs353TsE19ExGdQDbokMMtqKo47RszvZMbMuAwsQPkxL1GtN3EnHeUGQKT",
  "key18": "32KWsQQJ6d5Q78edRgRDpVC7vcV5byx3sFEUnj9K2jqsqRQDTV2Z6aZRDqhyifQiahFJ1U4Ci7sKDx2kHgEmfPJF",
  "key19": "4AnWNNuymaxuBXax7asD5oA1YknJV7g6zrKo22QDyej7EhpUyKGLbUbEvRwuX81zpcN4z3v3KrTQPbffDPWpixKT",
  "key20": "qiZgBuZzhu7CJXFvE9Wf5P1nRWVAGdTQHtjiYamDHzEmHoeD8C4UNRkFN9jJdJpgqvHK2uWFpNAScpAkx5X2K62",
  "key21": "RdrZ8NhDtjFn2rMMNAcEVqL7KT4ZUWdd2AhoMZtyGk923pQ6SFbb1XHjS4FM3mZoo2Yj63ZM2yUzVa4ch6XkNhP",
  "key22": "5Cvg2LeZQ2dy9nZW28GorAMzVBAjuQJeYGTThwUVvTKX7SqdDXiWHoHnmaGU9fkbx4t7i5HAVQ6eKDTTuteyDXp",
  "key23": "5NvE3v71QiMtQQEEXy85UhwCHHoNRSwD2zSKBKTjj436ENKyZ2G1Tq3tKHX4Fn4Lc3JY1TrwjuwynwwAGg5p3Fkb",
  "key24": "2CkBek3pNwKWPYE4yLaKaQEeSq6PTZb7PEWvSuy3cAUqde5DuE3ZDYmFyQpihJv283pANAcXHZbBiEeKjJ7XYWbU",
  "key25": "vuhYE8MpFKYP9p2h22oWK6ZrUqwoVnXHjcRcKCtFBs8dc2ppeYzMo2YVgUfij7W8UfSuzTk1j7KmLBgr58k2GtE",
  "key26": "YLk4QAXJdGBr3tv7FUkJ51aNjPAsTXnaNUqPvWLWvaENcNyqUtGnPthKkH9W3KudTtEAXVuSpkH2sALRsPCsKqL",
  "key27": "DVGtoc1FuMmz5vxYs5aUqGnM878q7PhAWfapq67D9jSpyrZXo59wZJxXZQzodLjJxRYJoYXey8kp2stGBGdSRPe",
  "key28": "66AzNWE49A8dkS3f8fZHFqi8hSNgp7x9ZK4ghmhZooGX3JVA7fvkHgbuuXaqMCjCYxrDDHcka4Qs3qWKbsHGJbQ9",
  "key29": "56wWZDZEzFBnRDdKpysSpBXWvWVhQvK1DyRofHMaYyp5nV7vY4N1E2kfpYBLNLjmwi6fg5UoTwn5nhEEAxy34yhF",
  "key30": "54b6Rgb4SfuPATGQxYoWexxohxjuYUR37qQnyNkuGWWYyLcNFhZ3Nzn3PriJX59Pu47Dmk2go9PwvNhiKe28zj8X",
  "key31": "RX9EwHrUpdZYrwXocEaQELpZ2qRmf7cEB7F43wgZvqPkNPQiAtEBn7xAyAPER89hf2zRkji6ZKrYNUokMFrQJfK",
  "key32": "DbSQAeJAZP7UQjLw6Rg3xNJ62w6MofB3B9rh1JYVkYcg3TJAAxN935KhBEnwpfBo21DWqb5g26GdYUeebyCokKY",
  "key33": "AvNxQ5g4nPD9M7KPQrDqUteUoCcxAXTt4XBTWMGJco3LnjdDkJbZiJPUU2dTt6XRjew1cL2336UiDM1UDeCrWt9",
  "key34": "4W8hVUYwiF6CBYHsZLuyGPN15jedsB77PipRYxcAoctiLPEVConbmMnjDAfB1QrtMRv7mt8NbCmTNv78CHfuaobe",
  "key35": "52MVzkvVpZe1bnnhoAkTy7jc7LyQdvNuSiaDnjzEZK65Af9zoJuQpz3dCweE9Vz3vzi81aGjPrX74WBneMEshGmv",
  "key36": "GADvZE34n4YKigq7JkQ9qgko2o1yuf3Bogq2wmoRhJgvyaRRr3E9jHRScQTgPp3wT3xXcTJA8aD2pvtxR7pbBXo",
  "key37": "fTZFio3X6XNQwepoHdzkNYxHh6YMSPQJWTGjNUpRcf42TejTn95WRL7LxfGY3d5LgT7hZZKrTAdaTFNZBjV92Za",
  "key38": "47uammVXEYDXJbttf3hpxjZwdoMcgzkJ6b8GakNQGJNmnz32LQiE5YAAWH5oofjGXsAr3kFVLNzRzGfkjtFQxSfp",
  "key39": "62bHNMgj7PGDYBo6kQWwNhutPvXA1iYcv4NL4AePSdtp9LaXpuWztTkoZ7CFPVqpKgEGAeio6i94qxmCKKrcgcPb",
  "key40": "4j8CbJaVp1oXmoG8LfJLh3XyCJhf15DN2J9UbdRV76tTUvkcq3P5cWThHMHoLEHQy7N4HhZwEoTEfrLNwSAvVQC6",
  "key41": "5M4sAGaG2cMfcwfZhphCCUErXMrGC6sBgmDfVa92a1NSQJ4xwpFMoMrsp2VqpFAsN6LVU2RZwwCoCwR34HEuHLqP",
  "key42": "2fW3Y6wFNdPvkZyVvtERiZ9vTpDDLM3vYEg4upaZBs3oMCr5srZkMw2m9hJp1pb5B6UPepcK7Q3x4d2UNmfYSBEm"
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
