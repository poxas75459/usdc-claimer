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
    "45LULTaAouWSofhu3qwyJ2RcqbC6j3b4sSgTuYRuTxZwgZSCy1byVBxHhdPi6j9NPAbvkqVXXZ73LSBuHFexaHHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U6nGAn72KVg32uKUvziEA4CQHRpVWXaHh2wn14ByVw2u8fHStf1jVhuHioQQ5Cy3euG79e2sp7azexfHnxtzjc7",
  "key1": "4kkJiEgY5u6VcGMKaduFhGu5aXeXw27HUZom7SfYqmJvJpAJRQdTCcZ1YT465U3PQKKh6fzWUKxu2UAaHGscar9b",
  "key2": "4ge4VrXT6NiU96VGL51vuqouTJgErCXJpCYW6YQnxNnUQNaMAbrYEGG6tt3BbgbtKWtCh4aMqMLfJLrmkhoBiHbu",
  "key3": "bcEKaxEWVpqZddBXcbu326hsoA37nsujHJK6c3QBTLy12dsHVSWUUEVN8QLp5VqTzgcTrRv72ma4QmtpHCs5C71",
  "key4": "3QjM5piwMVJWX6ntrvhnfRDgoRnNtj6pW2TQ6qNKhhQap873gq7fS2dPAiyJQhLDkTCrXcc7EvuVaA91EjwAhsKu",
  "key5": "5YdbkNggYQvTotKgWKhV66RmKyULafocWL7nGeCjVAfjuNokY514KUGtqXADHGC1NmSvr4sP5zSSxA9HteWEMegq",
  "key6": "Vw6GUDB3rqn4VtSbhG5nguPovBc9F5DHir96PSdtj1rKNUttzg22cFvm3d4DXL9SYrNtjB3odpe56Nc9mia3nPi",
  "key7": "x6Cprj5tdyS5rowJZrW1B2VWNUgayVDX6V3bKUPYpKpfrCM6c6rJB6JLuhcynJxB7BNd2txmScFmKBLtpZx7yZA",
  "key8": "2eBcsNtMp7bMUVvqimemirQM4Evop5Zf4MUrFrFH1qYmbWqPGwjZGQSSWEd8FcMXq8u9REx9RhRzmLPu4wgEEprN",
  "key9": "41G3Eaqr3iWhgBMeGZiPZsKNYJ6CLfprBySyS8pe3nAdu9Af8s3wgmF2DHsb47kYMBK4S2wmU1yhKTMVRtbdwDzd",
  "key10": "2FpHnSgkTyZkCELhWtaXs4NYpsTrPnDZAF7Wxqsj3DDNhaBrxbBfxz62sE5HZ6LtPXMwMeCJYLavCG5QJqXEbhh9",
  "key11": "2Ry1xJhzp9cKqTGwwtnutVmdP3w2UYWhS4zQwt1f6NqqcHMMTDwEmHyuagX6BE1oiK2WqmfPYd6qY4eQw1PzTadg",
  "key12": "5zy7WdkoTTYaHZCH1pmvMF5bBUxznE9L56hF4VJ7U7pYWPULQGJ3PoBwW3RPKXoRmqrN5924cWA8aRuH8oeUqbku",
  "key13": "GEcsRsV9SD9BVa9zCehNJkJKMyK11msjgX4oDLHCGmiu93ieaWvT91Yw272VLmdAawPkvrv5tcAh9w8Y9uc29aN",
  "key14": "5aJ7AXDMY2xSEdPQtWVPnH19pECViLuRxvKBmoYTvgTfT2mouRV7UDoPfHr9aGcCRgjTx9dTNTnv6sz6jkQ67H7n",
  "key15": "5ogAQuVUzPBxBENEskzMWz16HBdPWTA9DCe6dSLqTyMUjSuHRH7caMxfdYWegoY6nM75Djr9aFwfHEoQwRGiry1y",
  "key16": "JX8Di8naL53T3qzKin5UbByLTcgsQmQ33bRyjfzqpNBQxTcHgBJZzf8JeG2QXjLnLmFNmvquMLrzjLLbUT1BaeC",
  "key17": "sqMtMjTrDkbKDUxTG4ghAC4xto6t8wkQkaHctRLcJXdneowXYBxzjmB1dQ4F8psQP7kLHC88mhcYF8i4QceyWRm",
  "key18": "64TAniLoZv5sW933f7KWPtTrfeynZRazchiArQQPrHWeWHUntSCqqjegmodM9FYTMSeHhckTaoMmDecHY1crTLZh",
  "key19": "3VNGkivLdQr1VWu3Jrp1pCPtCCbRs5xonMY1UrVZQANFgy29LiBaRqovH4GMtLtWopv2AfMxzjJfW9iYinGZf746",
  "key20": "29vimHfFr2YFw2JiKGiCtgBhahLjdAykyGf3cFW32q1QyUwUtJ6bo8mAMPin86xMWhKZtGZHHwp7TLCKKitUBA6i",
  "key21": "RG4YbwDhM7CVRfJ4uQUYMkjJtE2b9yYpM1akqQimLWhTKBuRHFzKSmAnaA8a7r5PeG53x5P5B5RR35zf8s6Kvpz",
  "key22": "4inRi92w3mqHRK79z3ooUJExsyHshwJi6qwSz9KvsdJTRk2vAbSU41mYw3SyBepY9nxiB58kz2voTWnbx9Q8p61o",
  "key23": "3Z5usStF9YHz3NVvRNccgceK8eD8vCUpaYDxvnzkCGYXBgzDTh7t58dNoEKUQZSD1JWfJp6WuJkcqu4Jif7nAMiJ",
  "key24": "ekx6rNJ8cyjGq6fqbjSXvkz4S6pTBTHdCTvGTJoHLBeFfBBUE2iNnhXhxRNKGxF94xzQZqo9HyV5JhX4Z6Qf3eB",
  "key25": "RXQhm6CYCiNVjhg7hRDEfacnGeWJ9hde2ZMpCCzNKf2Ki8V65ZNMiojRsbgDFr3DfWW8mK5spaifiVt3bPF1oHV",
  "key26": "21k9xWrh5Vd3Cv1mAr61HHb18GyeG6SrHQ79uAK2gYZiLWXL3CMi64yuQtVa3wsZbJtzcWH1fmiKT4KTrSEbktdS",
  "key27": "31BcsNSyALsWRVmdtVc8u6qxTDRfeUF7knibcoM5bMSRc141P12GdijRvTyK4tcAWpbXPPMqYH96AiVyjkpFuNXE",
  "key28": "URhgKEobcJNvqVUao1ePV8BeQRMQ9qcachjKAiGfZArQ7mbwfCXMKMSnRpHhWeynEvDJnJAA4ahy4LeMvECAhfP",
  "key29": "3uDvAjfq1aaSRaREG1Z5Su1TySEmU5gFtCRHJUoH1E7mxPcPfpdgwogM7pFd19KWQ1tFjZvLHBvUKxyER3vUih4s",
  "key30": "5GQax4HGdXvZ6VaRY61xzabtrQG6nXkCWC5Q5nNmdw7uLCw5pnX7iaQVujZ9KE9nG9MWUSgrZfzjGF8TL2dWBYkh",
  "key31": "5BizqtXtwpfradtZ1LFfeu8aWcY1QMRHQbYTWmAzEnuF8qDqjHS1MqGB9PY31vPd7qLp1gqnpAisBWTW9rj6ooex",
  "key32": "9QN9CzoCbtGXUEY2BxNr84VAyKMyZ9P6WPRXAFeodbb5JgzYqnrfWWZJnkawdM9Wd53S9RWT92HjKLsAqAdddNi",
  "key33": "5HMQ37empJp9N64BmM4fvt9F5Yachb3ednZDmSwXP11nnUDajPgyjvxya6DYAndooHtpWhsbSMEXDycKDAHdnYKW",
  "key34": "2wopLEzoTTYYeVoRJM6zSi36hSkSVvRNXA6qb4zcH1KD98orVb1Tpo2Ft3xaYzZa2AVjUzYqLkYvUfbScPcBWTwk",
  "key35": "3AAMKmMJ24ZGxdBcxefqw2ijKKRqBtphaKgMSwjpVbJX5U6h16DgBPVFAseEUT9iCey663seSyJ7QHF39MbiSpq5",
  "key36": "kdVp7cpNCKt2YMVcnAyZ3aXfNyKNZfmWwzpgR8SwbnpFUphnPaqGDEoE5mQWFEigqPsqV8cevctfMwcMDVFVXhz",
  "key37": "BBPw25XNwe5EFDFma2ifHe8mgzCFEEuX4JuyXjkEqnu72GcNxx7pQzzjUyaYoSxsLP5RiPhL3rEPvtcXMZzZJbL",
  "key38": "3FSBEBNhTMYEu7d5bCP2B2PoGSErRkCzD7Gf1WnVictGERVoW9NMnbRmUUfTxypZ3Vm6H7Xj28s5QAKNDwPH6eoL",
  "key39": "3GHjmkNP8azWoK5T3tsAPLPDbYD2jzrfivNkoGDZhUorUhserSvqrD1YVU7TvDySGp44dypzPhSWma6EPhuWnNQA"
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
