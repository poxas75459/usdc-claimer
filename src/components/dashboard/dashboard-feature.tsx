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
    "Xr8vDrHWVKx3U3nLSKZ6ryyqbSURTfCDsnUsbKqxtVhzGftKecJFcrQVpUvqypqyC1LzJ2j2S7qcPXeVq8sbp8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CuznRBLY1XTJjZ7Fi6mDBad3VpM3PnYBFX8Z24DWgPzq7S6rDr1ZcjPrw1sUGRgdaKwdfuzZ3y62sPb66ojQJ91",
  "key1": "55aTzHyTBZ6kVxXEv3ZU5zT93e745ctwBMd7SdbwidmAwSLPymktyZDXCqyw9wAGHKz1K5VkXgTXNySXeNZLFZgJ",
  "key2": "4tVCvT7CSAHPFpgqjpSvAxxGSJa9Bv9Dsy4vYFTrChP1wGB7PhWr8UJapeTGhLTqdrkJorrjfZ9iTUbRkproF7vS",
  "key3": "4ZJ9GG9ubtGGgpaArXGqsts4R5UPU7cUzFJCBqon44L73mgHsZQJG3JuzUhjQXo8kLFByPE1Tkr7VQ8fja6Sts4e",
  "key4": "4EuP2fw53SqLdaZiPaEiLzUDLMEdJoBJNuNmarMcpT1daAequAUyDijr28UsauXCBu4QZN1hw19iKPMcYrYs7aaW",
  "key5": "3erCi4CjkTYhq1q1PebUCiqyB8P1BhJSkzmybMjL6bRaJUp75MszVyTTvTAUFsKPqyGJs9dD776svPhdfeLisVD",
  "key6": "5bFup1vhYPEpRPzY2uda7RqWGVqcuyvxwFQe7eQi3phgJoWXB1g7wT9mQGigm3MhEqXQWBoz2hkRtHHPzpSmZaYN",
  "key7": "3eJipwMy6Uq5RCjDxcmkp7xoLcdYQpzD4XgoCYZzDWN89Mw2auTbzx6f49o4bGwX4CFrF3HAQt9sDdMiAkGTH6Vq",
  "key8": "JyFWYb2c2zs4HYUnVgqGJMv6iTgWPpbYmTMN3g4sgD3PJ98o64Vu7GohdEU2yvZjEcENu4FhQwQFd1DciBxBoor",
  "key9": "3mYU5pjrgDf9XPv5X8mgHbGBwYF3K2Y6CMKfzA9XsZoLTc4yw7URHpMPofxLsFhVJBYNEYZGzaEtVN1XcLCjnD34",
  "key10": "2XRZKoJ6Cmn2qdvBwjX8n7Y8UGaEEGB8HtsiZqmmgaCKP2gaDv2htXYncxKWPsiBWiojzNqAF1BNETXdAwNVwpVP",
  "key11": "W7Fp8t2ZNcZCgoRpHjd6bNiNBokR6xasMqG4vyQAM91yhmMNrpBikQtHo1WcXzmjdqYeznDsQYJ7kcw9i8fHRuy",
  "key12": "5hs8PgZiWd1dQdUMgjjQHuenQPNGhBAmNfmne5EKWXCsjypjrfQnAjayaZCM8LWBtQZxEoio5fDyy5UsRJ8AYfKm",
  "key13": "41AQU3VvTo2EP9tKwku5D9U4P9HqQMw89F9Fa91Gt8rY8axXhNVg7r1A1fd9b1dYd4SrsJAnukPakdBioxTA9UTa",
  "key14": "2AC5vXpeqZeXcWR1agS6dDHPXNtZ1iuCiXvnnjXtNfzTWPeGN2tMJJ1oLauYQtGqXxCuBJHebZDT6dUmL7wJBnLd",
  "key15": "4qur2QQAnSsHQsAedDQi5Fi9dLM9dDUgZTKLWCqcHqaGcGPW55sUTj6nkwyGuRfr41Z1Zj1rmGCy8BHhNPvJDeCx",
  "key16": "Nv2FMtf844RyycKpEMmQksfZapigcgVrxUhPouDdExDJFmc5Wvro1iq4Pwh5MEExuc43ShkVDcuygqPfGrzRgDo",
  "key17": "JbTN1bxsJDAQhoQiKekqqe6o9QpDcUqMRguzyZyhDfdjti4PbhHEZ5zU67D1DSU88W7UALL3Tu9sEdgZH6zGq7N",
  "key18": "4N4uSc3htQWWsohEjXiSKVKsFdQ9XYbSQwxYZbWaXkcuSuCC7AA6MRf9hBbBCZr71RswGgtdmj8XMS9DdwvokZaG",
  "key19": "5CLBGBYL34aBJftRFWPWYatyqK4CP5TLGv8Z7RXKBwrW2aCLyUj2qAnNwxNRB9WZBr4eVY1EVjp9nPnJoLUy1tFg",
  "key20": "34kB854eJKVQgFVzMRoi8Eco85q9Fh5HihxwDL1aUpYqtfLaXnX8iQiKfGeQWqLrz6GbJfRx7fuKWwXbXWYC6dq7",
  "key21": "4KchCDNDsYC7DhpTN9w1acWkwGadqYNSvYQuJzQbDQZ7tMN6fspHxs6vMaG94ee86XPd3ydMKihuetLeSabz83Tt",
  "key22": "4vbBGy8oSvhsupWRpd3vq15Fag7zSH9niMZkv9Xvusz7ttzNhejcEKFech1SvdEs8WhyPafPdFcdJAX8GYvQGJNv",
  "key23": "2HhPJvXbn7dLH6iBxRABGcbmdkkzYHrEQwtHGcSDtZPvvAtkMwnXEdF8S7p7NpQkrdih9v5vtqR1pCurrMrwyfLR",
  "key24": "4woQKZgbS5vGhnsBzDCR5LdG7Bz2VibHicdVBXTxR7SEtt6YmekTeniyrndbfDUgY3hD462qugvgdKkK55UWn88c",
  "key25": "5EAeUsztECccxtXZSvtSXLMCUHL6rR83VL4258c14SdEfP29crFeEQVaDXu8d23H2sytoJbs3ZmBtyhti3xgSxXZ",
  "key26": "2WboznV6wogCQs4s8M8tZyMREfPYDsfFVJDZqzKZgDdg8ZbutVvnwawZrsAZHM7DXtVNh7uh6StuWVL5mwc7emAn",
  "key27": "me719G7EzE6s497fwonStTK6VVaRuvnxpwjsneACgH19geQzEDQTRhxEsJQdc1Dteicd5QzqaNRYV3QVdnBqCWU",
  "key28": "4r5kWv6YjkWyMg2sNTbaGieXN3LXxGQwQAphiAAnaJTkAaf2DyUbmV1XYPDd2qfZpswyTZBwkz3vRdZUvmMs3f9g",
  "key29": "35DdwcYQu9xFdAjtdgEte42pcaaWo4qwYSmYsfw7GkxD9upYWUiB9iQVN8pK98N8JYCUZV432w8um3RWJp749wHT",
  "key30": "4vkfUmgQQCmHmtL5F2dJuatmRj14qPUphNzCkjr3nfnKkF37jZHkGUsf94X2VrrCzXjJfAQjAQeJrrV5p2yxUzaa",
  "key31": "43obqceC52VcieGQXTVuAK3NDdfN5jCVrzT54hYbFrFSNpNCCYnCTkHfRm2J5tKu72pJZwokRH47f2BFqegyQhPb",
  "key32": "5SvhQARZZW5NPGxTyQ3ErJNJqkXiPENgW6bLYvB2SSX5g6jQVTrQj9J8v6W5H87vgE2BRwQD2uUBTRUdirXkGFLn",
  "key33": "2QCosRUTB1YxXfJurhC5xrBeBSsdVonQjJTEQ8KJubQeKgWq2QcxWesAeUh1umRH1PB5A9cz2TNhYiCFSveYKcJs",
  "key34": "2WNYgSoNtYZ5bJzgKQS57GA6rNKURd3pPzJot3jgPg8WsCxQtqYURzTjsKbqFdXwSFeWSA6MmtMbi5yjvvhomTzv",
  "key35": "2tUzhoKGiQDEKjJDac8HEgkz69rXhi19DEaAR2fscr3DEdJhCDutw4eZfGasDM1JHogt8oiKbRF4uUQndGpA7YnU",
  "key36": "GHJzQLSJgGgNaJhFSogJhKDroGX4BwAcnz9UbTdj31Q2S2GPYK83LXU3dW5W5D7LqNtTqonfMP3i6tk3YBqWq4x",
  "key37": "391hbsT8pQmjGnCCjQ1PPiuNj68F7sU5m1TcTbBgD6czNBU7EE1ZNATmqpQSi66bi2tJvr28q3hrvpCDB6S8kkrm",
  "key38": "3yKL2dK9ZGw8Ne7BgQamvozWbTxnPwuba89p1uS4Sx7eBKDPW89yVG17FPhz4jViwnDeQMmzkgB1w5z3cYQAxxQR",
  "key39": "5DtZKBn9CVuJ43MDxNyGyuyrnWvvQdwttyETZvqPg9CkGbaoUrogd9F5xkkeyXL6C7UkEPA2JRdrMadufKYdN4Je",
  "key40": "4f89L2rhVqek8kJuiFqjnMu1n4Zc7nnegUHH1zf9fM5yt7T2A2BZiUHkGwDtvJHQJQ6raAq965QS2ua5oAPTKVf5",
  "key41": "3bcafVf5fYNmXyoFzZfrXCmXmvDkkFCuPrEfEmmot1MqxdUh8LGm21g8FMz9WWiB79cNeDL4mfHpha5Uv3GDjfSa",
  "key42": "4v7iKyHhiiHndhrG5NKsPBjw6FnLzdc5gN3LqMa8jKwsJiyJMY4diSMKeSDogpUQFig7hWiLgETWMQSf3pgwy1wQ",
  "key43": "3Mv7WnPSz3fpUeZjLEq6nD3aD8WtfuRXLEEhBtoQAvRViRYcCt18wGXt3gbaubVkAur5uc4gCQKS53u9VVjUuqqn",
  "key44": "5uggDZxtLaTRPbJVqv5vS58wqsq4U9yzpgyWaVrfFLVUvCae1dXrzV7VogvFPJxFuYgWyiAhdrCQcCht7csUBeLQ",
  "key45": "5px34Z1mukpHWij9M9PcgARqZXB7XXne7T38hMyj7i7ycJn3ZhzNhk6q5GFpsKkBcg2zameFyKHDYJoHW8wVSmKZ",
  "key46": "5ERu4EMncbn34fs46A1Vi6SjB4TXKqWduA855u4KJnf7ptVchB9ggtt7t7mZQdXKzicxjpGP16vrbuoU4GDCLYtY",
  "key47": "3vepEqo8JV6AifHPPgKhoVsFAZiQeVJbqcZUCaLdyarAwmg73Z5tB8YQixxWxFiT8cbZydFZrsiy83VNjvUs21er"
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
