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
    "4vLadSjHN3TKtmC3CHbeHGUKjdvAZzCyk1XeMvLCv2RxCHuQahLYi7oy13LX8kfJErw1DtdDitbV4yJxevxMosWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fwFUPuXMwpLxoYBtHD23sxGTwu4dLNerpn2Nx3Kz8rbXUFCxeHV45EJePUZ7khPkv7MnVgj3d5u6roSHuZpNKP",
  "key1": "577CgtQK5CXAVqXsArQzs443WATR7YNhdRdoTxHvk6QWDcJsTP89hthBSXyxCsXkmjpyZ4rQKzx8jQ4LGot27n1y",
  "key2": "5KFNDEndukQQRMRmSvQESz5tyECYJQCHosWiFZrXR5BpaDGDvkPEwj2gDDaX1PXz7RCY4J8kkKD3UCWoKRZgtVKR",
  "key3": "5RSxmSgqNRGkheQDpko3n4WourQJkohjVXmiBS235xo2qx9ymuLpTFxYkGguGpPVN564REGQ9odqdbUCJrhrxCKf",
  "key4": "2RRkQvJ2YRcvajx7DeAuYFWQMJC3DuJiGT4enDPcvKNjtiyVaFjT8MUHXhnZ4NkcBEx64xKLuGDFGZZXn4JsidZr",
  "key5": "2eDrGXp7aFSyPBZMiKGHddCbMgKvyGLLg6Dcms2J2zbvrhXqUSAfNcWyC6raG8NTjmgVkG7quqeJfbM2Mc4SxqGk",
  "key6": "3HVUBtg6Vi56neqXm2AMCVCoTRo5MdY7kRM7xMnQSTuKNk9Do31yR7xJbUG4UddqfVtas9eFG3d3FjyQ6x7KhxSn",
  "key7": "4sPn7AwwSm9yCZ3qEaybydUxF77QnSf19aKcLJSLLFCWU7tSAAxSEHwQYCswmLH38AQPTet4pis3HBqdt7Mi4JeC",
  "key8": "4RsVwZp5CEgkmYSyhWCbhUZUKkTD3t8iUvvHqejR7hhjBpqkzJRVuYMBBRRkdZZarSXeiu2sTbK5ddSkKDWJfo9a",
  "key9": "4RNBUDffwLv5SS9RWU1Ruam8x9zSQdLrVWLAQZAPioYM3D28BWopbBE2b6LBRu6D95T4GXbnNqFtzFNZ7xxbcGwU",
  "key10": "5yLvwfDFScZqn5ygL6NLXqZDSmRLqmTiAb7hcJM9CeQjrBEs3iASSVr6714Dgekbc79CGaxqXXWKqfBCUm18rtt7",
  "key11": "48w6okAoJwYUm1XQuzRz5WavLz23hhZ9jyu4LHypBdcKYw4S2YWNdHEjKbsoxDKdc5UADouuwTkGPie5saDt8Zta",
  "key12": "2gaWJgoxmCZwoKoANE2kdrBwaeATrx18FkVWDgKgMoc1qNi8cL25PkrxJ21uguWTmnSjC7at6RLCLTwY6nwXdhsW",
  "key13": "5eTqDGcuukYo3uab7Jkx9cLt8RikjmCTq4is3V8Rh4KxXxzVT2boMNY7FbBm6JZKNTVCrramVmwigudBEE8YkB8J",
  "key14": "5gaJ9aXouRgHs5QBtMV3cCNveiqt8y7Kgcn1omjddToLz6SWsjMxwBsBMFAmze1xnaBWHqXM43REq2uxLNd2BhGJ",
  "key15": "2UNaAEDnCj7f5wugv8gPvJ7oguNXxLosk8nkkKbsKYMCi2A9qFHMEycrUmg74dcLb12eW6u8FMJXdU8noGSuyxhx",
  "key16": "2dnXN6VcjnPJyJarB5TDYxLekTF35WjE9SpHcK7KCZoaQjjMQ9cgiBLPSf4hqNVFAbxdAH91jq5dh1zDoE5Dtso8",
  "key17": "itgKFVp7xYqpMpQkUceKXhZTr6UYmAWCVhoLbEydCwi8voaRbByhZbGFf6EpCDMzS5FXtvwAC8HgDkk6ceDt7zQ",
  "key18": "3B8MJBm6HYznGf7jdMcQT8yng299W7qhSzwAsBxEkfBwvD7Wb1Tz7H7i1ghLXSu6rxXWTjyRZunaJT3gttUD1crr",
  "key19": "HGzuZ2HUWcgUYG41Mz4KLx5aKaQERDs5sZFwruq8Kp772BWebEPrESUrp45wVo6i5G2wQBRTVvY325eUk1TUduQ",
  "key20": "zHNzqSQsePULfFPZLcVgWFeMt9sz1t4r9pcnLAzVXhD5b6nesVHvCGfRzyL6mtcEzDc8bVrKvezCDNqV4WWQQ7S",
  "key21": "442qkohGSHo4bpQhgmmxh8G12y7h1CMBhVHQ6oGSJwtbfZUyUGS2b4caBd7QHxeosWxF4Lnn7GoqCWfGPrb5uQEe",
  "key22": "5PNoXoNy1T9RBo8YoybtFyaAHZeGHZKYkrQJefFVZUW9utUAokTBqHM5micgnzwozPLa8dLciRK4Sejnti6jr9c3",
  "key23": "5qwtkQnStVEWVjJLZXUgkopCf8TdowUf7KRDQheweHYmWLj9LXjcTKsdMpq7QXFzod8UzxM6ja4DZJMWCHirfupZ",
  "key24": "5BUbmQX4CeVXrfBmhFAuaz4UKaZJsnqZbnjGmygArW4PVcPRKsVKDbDQdSuCZrNgd6EMhuA9pJSEjPebLMELqLQQ",
  "key25": "4D7Z3UY3GbrMbXWrFnujNkuRhJuKk8ryAv2jPXb9y11AjHRVw9WYrvazkaw36vfFJgwY6tjCRBbazBkJ3urnugDB",
  "key26": "2uMvLTTa2uuZKj6iARPybCMXe4FBSU5suYwfHLKswTKgEob8Z5uQo1rsCvzzYQVLd97YhLbn5FWeKyxmv9xfxnFf",
  "key27": "23jsxRe7R7jJDAGPyDyML3oPXAtZYXps4wqZD3m9nDWQ6mP3KYZUHM3kc4DQVbVhTyEZrZsjrFcYXdk4y6FpaMNZ",
  "key28": "UyWoajye9EzaRMx7npfZb5b1VUXQnSnpY9fnSWPcM3qdytopPvB7rbse8mFv25hF9tyjKePYYnBV9LKokUV4cZ7",
  "key29": "4mUP6sdcnue3q4WL73UEVFczyPNhEuyvPkXcC1EoPXao2JX6WTFaSZpiFsKM572qHoHnt3KECzif2ofiL3aBgG6c",
  "key30": "38kCZ8ma9RQSxj7SstNtDRD9e8rxeDpmc2HHJaEHPmNSoQj5538MQYsUZPHAtj4Ewnq49viUH589uWbHth3YKs3Q",
  "key31": "4dfHsfLoBoPNX9u9jCU2RCofEzA9QeQ35Y3M947VpEaYgYRMZwrFBmXJdxcbVovyoZUByizoCccEypUKjvh3icjP",
  "key32": "5RbcDwgmNE41mrArmS8gy8LonKYJjNYeFxm8eNJ4DQFAkvMMKVgh2HKDT4p3zsMLWimRwnSTdNgB59sEtnY2eLxw",
  "key33": "3ftDwLsvp8qjqA4Q3fVTWMgcAJUtyqbhUbQdW1d29i4nrj2kacYgKkBm3pWhyPGxbPDBkthNme21yBsw1BdvDgFG",
  "key34": "3M8EfzF3Fz7ikyw4uL2xfT7G6esfw1naYzUpaNfD8V9aBrPD7NMNMZS6teL9QztXTjhL56eoQFHhEi7RHrbKsN8u",
  "key35": "2Tp3w4dbg1apzctWAMcnE9QKj9MJVBQDmxAZpw3T3N2Tb7xXeZAPeonVbn5BF21abb2J1cF1HyPkJm53Rd3BvW6P",
  "key36": "5gQyQGb8RSRJFKqgwB9yNPv4oXKe7ivrVVDBHJUdNkSDGwQCcda2Xsdpps5ze38v5tXzdbf7SZMzPaDe6VtLPTdA",
  "key37": "3i8Kq2zD1MEpcuMkekgX1Jv3f7jmdojpADd8DcFRKW4Dhkv1GbFnzQcP7NJNnshKriR7saqVv8AEkTQnaktmvwvG",
  "key38": "5riJK9aTxBKkD6wQ6KZ5PbsdohD1TihcSYphJ7F7EkHmxPcDkHwk6v2PxwcgtdKGswxRkQkFuARJEjhBMBmxMigs",
  "key39": "551ACgM5L665radzDVq97AbDwMwPJBBmKn5gZTiAUfVz3JbPUDnvPfseEAfss4FTATcDqqrtJGVWvD1N1PZxfTPd",
  "key40": "5M4SnNopajyZGv61ZkYk8KXgxDStmPZwe5CP2egTdw74p7gDKyAZ1AQ4wnhyFt6N8LvsK5g3hPgVb5Z1ifZ3YhWR",
  "key41": "okxDZMLtcLgdgoVJpBnZTePpztr8TrbDrdWiVzPJF8kBFhaXrc3NXsjvVCcrpz4vqokieN76vhbDx7J9eX2gRVL",
  "key42": "5iCprYsPNKRcR2iJ6yfg1SKYKscuBHczK85tLAuYidysYnGzq4dMYWKxzbYwBAEqaPNPPWYjx4XG6HqFUs2Su87S",
  "key43": "PmbnYCmqrhLjFt5nYjjkxpCzjwzp25rntBNkBukcB32iQpzzkrfHDTE48gPzTmdV3ak7nduJrGCs1WtRTR4mU6H"
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
