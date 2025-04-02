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
    "3EBkcDhASQXxf8aGDjDmXssqhNPoRii4ZGaSoo8dtsAuygSrDbHhE2rKrpCr1j5YVmAyXw1iboW2qbZZmXCdPhv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "waUUfkwuLoBtMKGMTqeeQwJQCTcsdgeBfZYJzYGHDPK7vV3p7gyujkAgg5WqL8jy5UR7SnwN8FTssd5QkkNrTXZ",
  "key1": "48Ks6ikPjDEBpzkJu6wCqtYyDeY5YmpzzAkUNJD5434xa1ZJqtAV4iPqYuc1QqmAh4eQsbnxA4xGTvnAqSTkYwHq",
  "key2": "39xWWZx4b6fptbaY8CDBW3Rxwmmbc4TnByrMuUR5crCZJ9A1PC2nqrccgsCxGfAKyEzYjSLLMiM4Yp98g9yU7BXi",
  "key3": "4kumXHwyFguTfH7qvaJCDk4cwGY4cmy2AAofYZ4pfi9GyUBCBDfSHy4h9GpKASTteFByCkNmk351ZB3KoqGGpbVk",
  "key4": "4bqrkqntrVoMnMvHaWKBGLuNVUqkymyZ21aWRd3C35cPVrQD4BWmVt9Q5n6rfWGKdh23N7EiaKWbkXektZmc1Gok",
  "key5": "4uTF7qhE3Dn7xY2YqzQgPY6CNyCrwhsBDwHnc8aK8UT3ukAD5pxBtYbSpRrRP9f3xE71g2c9QP4ziUXnNBEy55or",
  "key6": "gCAHLrBFpSXXSQfXcsMw7NDu1FKT8wybs1d3CFcXDy5wWeiAruvn5eXgqfMMvJtqQE9ZVn9YT1L1LxEECHJtWsY",
  "key7": "2mNM61sMCRCppyfJ14iv88NAmkGSQu8z6vZSjimBY6z9fwz6TxzQwnCjTUkAoYi36vL8j4CzeKhi8upeoXnQpjxQ",
  "key8": "3WYvNw6X8Lshg8LVUoaEzvdA6fZu1RRX6tqdu3tnpc2PrWTnxgjMhFuhq3hijC4GJcsddrCUnizkseVutNmfFq5o",
  "key9": "5imWFtrxUFXh7BrGM9jpxaAfA89AA4qJQqKx7QHtZfKdn11NHARsQWSNepshXMzANaDxtiuen1ic98awEFU5P8oJ",
  "key10": "43evUtzkgbfYrUHEhKcmcoVxdbUSpCjeLhNZHpwcNEjZGhwgjVbWkfRWbpj9tNmLXvC9SmxxtrDNm69XAeoeCSgg",
  "key11": "2bWRPp3uoSQdYw15tfkPSoHyyZYEye8xYaYB55Xxq7zPaD5otynNpBbRZApzX8Fzybp6ERT5eZ6LQAjCzKf8jhM",
  "key12": "2VU65tpxuQMXxaAEEjE7k388uvdphin4dBqwAgAMyj37ez1TyrcZSUwWeqry2KSoaRWovyXgzhS9mFa7kC3XM6jE",
  "key13": "23f8dH7EV3uNbGu3CzXvJviU3BKxuA37MJJGDEWEVD4VEPoaHzneQmhhbWWLTg8dV9r3g41mawQVK2QwTDfM4tVx",
  "key14": "4skBtEcCTpzCEbTKwNggN3sXy8VFvxgBZYjD6CT3V7bDyE12dxpHxRAXgJzBHSBg8dKtP4jnJLmppRHpDFNmzyz",
  "key15": "3SxVAsiK8FCZ9pxFSi1DbGjfbQQMhAh95syhpG8CcYWTQ9sf3t5H2TxATxGum7HmQDsm6o7tmz3vqs1hXJkqDGYz",
  "key16": "3TrTp2AYUL86ePQXYa4eUbq9K8dyVGoaBTDJUVgMRwj9AQacpGLnVzqnLDJUaYozMSXHP3CVhsB79882wnvdDQ5C",
  "key17": "5n7jyy5aQGRP4Vep3Y5BnZavTG7Vk1iHEJipdARk85Ex6MmyizhvxKjcKFp1eCUH4mPwPQpii8imXXw9er6mF6ds",
  "key18": "2fWp3wKP4Euyqprft3D1TwsovjDzrdE8LaX55oi4TNLNDngcVjQZ1sjjAy3jBwrvaA4bP4f2cLLntkAnJ7NyNtYZ",
  "key19": "xRXnCdApK7MjkTER1RSHYhL4eY3ezz8gm48V7s8kTbQHB6nB9tzPYH25H86ts1YNTpVKg2LjmDAeW6gknqWrwBG",
  "key20": "2MNATDKUjhJPXonQpBXCYU6DLBnwoa3QixCrURvEqAaLMNKqoKExVNjmhVr43Z9uku5z1WEKdH5cqRCyXknib6om",
  "key21": "vhDQdPuYkaFXVuojSpo4Jbej7VGdoYxgvf7kTmfcZF7uZj2rohctYPr8rhguJpbCDbVSrNWFRRz8nBfLEZJfNQB",
  "key22": "3KQWzHQnn4hfpJ6Ytazxeh8XQ8gtnsscek1fk16PLbivoGnwkR39NVSRcmFV9nNJT4eqZjDtFDwFefgmFBgpWRzT",
  "key23": "52w5HEenzZnUbQBDTzejC1vNDsF7gTu8ATS2oSboTUzsy14wH7WAkrtwqD3C4vdxaE777gMFzwAp9Nk81yX9VbAG",
  "key24": "5B62Pc2asmzajxLY1ToHWSESV4bCh1CTGuRqh53PhiK3xVbWDEhj6DHrnqQAttTPFqQWbupAtxnBDQiFNzj8UzAW",
  "key25": "UA1kw6V3qStYJaC1cAQnkPEh1CRwyZkiSmfqCcCgDpmqZ65DQ66kkCLNivrvvZvHjuYYgRBavbBen3cRpLrns7J",
  "key26": "46PoM2aMWLq4h7zV3ABFzqG3MyiWzfKWLKWRgWyCd56qPRyxXSDJLsQZPxdeoQVN3yHoXuWy9URT86oXXQzGx2h8",
  "key27": "27F5oLCQgjmvGoU3iQLVnaNMsVNgVnb1a6Gouhshj3PbUZURXEA2K7ubQ5J2JmyyLwMYXdmActLDxx1PgWWXaRS9",
  "key28": "55RsVCSV62hVbYQFHBUdWAHjfjoPL9Jih3YmkbckD9ZjixUeYF6m3nakMS4TwGLdzvzz5P14mLWdWLbksHZMF21p",
  "key29": "4S2hjT5GsLnYHGH9awrFhpRxsToDdTdYFdVwR8UijSrKnTMmVQpudE4hUYchxAP7BgAs2AUpXRSyww5wshZSJUuo",
  "key30": "5cP6FgJsk1FJ7B1QLpKAAoFRbfjXdoAbryTjr84CZaY5ss8XwyS6hwwsfiNZ7qHX3jY5FgTgPCAwgKQN65Lqu5bN",
  "key31": "53fjo1fKLYEz24WPzHmp7up1YRHA4LHHRTtJ22ure98WhLFGLCBW1NfmKUy5vp6ebnfp5nQf2LVMRBGst97wyoqj",
  "key32": "2oBbsjMbE8gJk4kNJBagEDntsDzGUo1XN6uEZzr4XSmw5cQUen1JfrpeH5NFHH49oxekvMfgVyQoc5afsY5a1GKw",
  "key33": "4JBfqNJevNwGC74C2FKZQg4raX6GRZAo7dkP5MmnMndLM8H35ibWkJw8JMEQTVuEKFK6QMVmtYP82k8fi1czyH5m",
  "key34": "3k6wAxt6do4WEod5LjD7nFWsU4GLxnontyrVkr1dHWisABCAEgXJyS1CkM2ynjfHevebi6rRzjQKFDaAsiCwCPbh",
  "key35": "5DAnBQWzy4hBctaAqyB6QbUr5pkpTKhL9MWXcdqe3T8iZAtYJEq9MG7k2YrVLdAHrwHKm3tLQQKnHLsnWv1eniTd",
  "key36": "3d71XRzyG6q8qPXzr35UBzeYiSfAbHfyXvpLNAkPLnQg76gSkcNHvsGEUHQE7MwoSzg1nKcJKhCJ6mxP5smh6tGB",
  "key37": "5rV78fUjoKNCvGWuvzpxn6fWQJEaNX29CvT1jD2ay3zk73Nae7MMsNtgRTANVTu7YvLbQzoRpy9HQMt41tV68qVP",
  "key38": "55mmoCDtoBTCwx84yiH6R3foDHBTcdyNHiD1QbPTdYhaCgmzoehGXokESkoUZEENsU5PUPgNf55kAEZe96tUiHns"
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
