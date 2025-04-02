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
    "FXvu4cfv8dXCus2hsKZc1B4wVBbDYLVxMkwcfJ3kpSeEGZfgNTZxxECDdjpcjKBokDMbpyW84JHVk8F3fMkBQWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yc1eYdYMRUXMXcrtekFdkxre3QcYQJ3XdV3dcKECgAzRYWMMYJZtZ2QcfKxddqFo9Crw5uEWMF8gbyeZYGzk8YD",
  "key1": "5pcPPRtzc6eQABFFFUcaN8C8YCUgxN6n8iucug9gjXy9DT1pHtXrvcpkvz4d7GPTB8PXJebP7eLw7vBf2qtZChnw",
  "key2": "tNBNBWDizNTqb4vn1ZRS1vXG2rVkDorZ3qf8zZhugBqGmM1f3oa4hWcGLKNvZoMXn8Ti3j2twbge5Kgm4AqTGBC",
  "key3": "2fKYbdoQEfcgMN9WR9edWvu6q98kqYKMXmodyGVsQCHb8EF9xpBrRk3JuCtNSM46yYUFw4k6jRB37JJsEmVQWWEN",
  "key4": "5Es7YzKBozJRMAsYzTtMPyqZKgNTWrkJRWYv5ikoR3KTk7U1rRWfw1eSG1A1Sdpzmz7LAm7AmfDfeDree5GokAiA",
  "key5": "5PwrhLzivUeKe9HyVN3NxL4zz5RrsJuAhwjaR8gCLLCvxretHkJQN7mFPysknuKqpPxaAwGJebVgW4gWFmd3shRF",
  "key6": "56x6UpPGYSzmjz3MYdftLyK36pAPVS4BFDAQ8YFDjuYnNN1Q2xXx1x5uMTjy9PpDs3RPbGDvDdDj8JMU5oTzDfni",
  "key7": "32xPqRxqjF5Xx7M8KwMXiWYi2ZXVeCpn3Si7dK5wBT9gckobeMZgg8YUB4vWDz53FSNMyFnqDQHfk38V371re9xk",
  "key8": "2auVRNKMtNxWVU7aqBnZ4M5Zjhrze7FuKqVb4mDVanYNoaiR9ttTVUYMMRAmDLu7D5VFg8r2uT2Jproe9vkxyhTw",
  "key9": "2WiiMLo4ceb3GgAq17HJWFdnZg5UeqTvu2n6Dp9PNazaMvVQMMRSoAEnu51NLagN26K9X9dEycpq6hfCseh2v9Yc",
  "key10": "574VwP5Cbjgv2q92RXra5HgVMkFkXadHY16VBCofaqnJ2qGMQNov4YXAKRyyZbT6jm2Di3GJjsor5iAXrm6Jko8K",
  "key11": "21v7CLGzw83x7g8744Cd7zUDf2RY4deUyAE89jQ4HvmArPJQaAUfhG18SrEfa62yfLibJdTzfgZXFoXP6wY4WQWt",
  "key12": "4zFuJXiaYiPRig4nAAiAUXeZpecqtXuE5nAvqZmm67x9nN843QQjf1GHazsh4Kz2ehRfzokJwVYZKepL9o6HngLc",
  "key13": "5S2GPKixQmhPm86gzZdxhDNSy8WBUeho6huRVs49VAys98R4DpYJQkRJrFnMKP5ExtoqidxzoP4nRBnKepmpkQ5b",
  "key14": "4i1YFiuWFyeeXwi3Qoq2j9Chr1BoHzmV1aqF8L1PvAs6NZy61dSiJ3MWjbArao8GumaWvBwLf8PajSYpRE3T9HeJ",
  "key15": "2dme4VLHgUGyEkisqbEYWmSszexFGQ6RRfkFZjod2cPVmEY5xUF8kNpysTk3p7oJSmsM1o1VmZ8ZMAnBRJx57z5o",
  "key16": "3NEkZEeATMYyw2YpjACe4nH6CthPLEgdqMKjz3kvdFmdnM6y5abfvMzjU5pSoKHxBeoq157WHuTcY8S7eSSM7gTm",
  "key17": "57SBqGcdLkh8fR7AcxFBTeiPpE2qJnsBTDWzbsoAWpENo4UEme2VVYxfcEQwWLwroCAMqmXBJR6qcsDJ5SxZ5UyN",
  "key18": "5AAZUsg1fYVaY9uXHUmc9DeZxfSz79Hec3mvmwatGFKV8dqUu7unAHCyxkaZ6LNSvYAMr7teFATKmXnh3BbH8hvN",
  "key19": "ZFSTBeYb5duiiSwXurvdnGLsqyQDTaaCew2JM1jsuNC6HXtCrYCAgZq9LgSR6TJZdMXneZGgTr8rek2q8FETgNV",
  "key20": "2str92Akn5XaZnsR7qUV7xoQLhiRCWuGf3C4GP2VzisCH2ikkVmLNJY7RQmbXYYnG43oeVwKwj3dbWe5rokfoyNb",
  "key21": "CZVVCTkbzmQAKgCp5z52cFodpT5dZxbvjoGWTKntWtQAfCpnUBMMXFgfgcij6BmLVr3P6hu5kYHx5kp1tdGFgkq",
  "key22": "4PPMJYwiCE5A7U6b6oRGgr7Wqy8KybwuZofc2GBAAjc8G6cCi5a2vwYuNP4rucmMEjfLbJqRhRRLUvK6c1txpAHK",
  "key23": "2s92dB5pSeFQ6HZcQauArfBwwVZec2xcL4AEAJeXxPYfU9F4srdpBYs9sqK9cT1eN2urFbNNMrPFhX7UYYQ5x5px",
  "key24": "2VE9jLK3KaKJnU3YmYi6JVcsbfhuwXvmtGizvsbn1zdXpBFcM6mQM1CS2NjCDFKovoEUVoAZV3Px6KKWnw6MPgyk",
  "key25": "4wPjAcdQgEQ9y5MmKg8fzSi6ccahGKrEqtFyQfQhnMQMA25PJdRiUEF6SdXR68FGef4pePLvf9KLgN8pbitQgUf2",
  "key26": "5ZkMPLvfyRY2asvggBiv54LaxHz7Wxgnq2mZQopbbpMjzai72JHpqYMuCDhoy4zQY5EZ4TWvpTLpySqj9VzsQRB3",
  "key27": "GMmh6oRVLdfyDexMZARYq9vrr5h92yocBtPCcg5qqVZXj7fb29MV8h7RFRM8ub5xrzKo7MSRL7AJBoWT6N1aX1C",
  "key28": "ha2ajTVnaHfU98PbUrdQ4MtTMEXUHcPdp6Sm48PF6paDZxJk7ocF89Hp4dpvZNzXP48EXHhkHHYN3dLNaUDf2j5",
  "key29": "jSNCW452h6JqgFywYRFapM87aVGVMAM5JiviusWiSk39eV3noGi3RfX7U5RTD7gPzxrjHdyQnAgbpS3nScYysfE",
  "key30": "4GRrwBjeShWPZW6U71mgWNZ88KiBbRNYeHoskMHL5EFMQwTzZQyhnsNNWV6VivHRnavyVs56KRdADTNPgGoXHvE2",
  "key31": "57Ws27sH31jLQMH2j5WkVkEVPZeW7wvicp8CSnBdGHgK4Wqaqr3kepSJf4h2ZbB37FHUbHLfQomQmQfQQpNFCQTW",
  "key32": "2eSxgWiMFiDe48XrpXzQdxU8DT8DKbqRJs3vEbwmXs6nA7MmLnQC8fv7t2uwvsZ6WHhqNCuiXN9P5N1f1MMDKX9v"
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
