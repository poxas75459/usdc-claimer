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
    "372x2K5BB6KSgF4kQJbu8QLX6TGAtWeu7WgxcLLeToKcRQWuYzwzrerqbYPe417688mME74mxWyrHSfyKCmE4p5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVKDcKhwjTFFDWLZhNdmKpiQ2QuAo6QvMEf956MSzpGKS6sGeRwdG6NGFqm1ejYKCyfqEUSa8wrGLCTbci8AhTw",
  "key1": "3iCwA69qFXibzqZxsDYuVmiDaCL2HPNg4Z3HwKTcRtHmXcq3LQkd1U5YJK1KYs7AnzPiBHmnwaab1k85dubPLpJr",
  "key2": "3qLRdqy7ek8KofXeo47FsLFJ52KKF9uy85wXCCn27nd5PMsrXzRM5FyfKJZJcrFT9MtuwZVwEpika2kD2y5Qxuko",
  "key3": "4EmRfVwGizPAKGbMFg8cUsbYZBsbJBUQxz78bEo4zfjckBGGcZZUoFvTEMPZsxw9UcywQsiAb9JpemQfaEvVYJ2m",
  "key4": "5kbq2eBcMpQsGMovYPY6TfdsiozD1iXMXDKa9zZcfmZfcBbWR7yf9WShThs2E9bXyRo1CyA8PEzyGj4BS9FXs4Ji",
  "key5": "9EY3zxbCmwx3oJJWsnigABAegJ5ccAaJvbEEoSYNpTSqE1pMKeNcBCv9ZzsW66AbyxcFLAsybUF9sms9cNyzpPi",
  "key6": "3xgbeJwP21pWQXmz65eKc5M2tQG8K8XXuM8W7DyRTFvWA52CJHDnUGWeU9vJfSfMDknokhW1Ky1Wpbtxuqvs8fr",
  "key7": "44ftiZgc4Mhoh2hGcN1Jumf3d9WykQeEL6KrmETfCDu1imCy53gmv7zgv6R9VNLE3X2DPtKj6X2Kpzfkao6ia99o",
  "key8": "GwrF8uwWMLvb5hosjexC7ubg6yCjLMpDvSfKVyu4zxmZsD64sX6tJL1JGG5AVPRnqTfWE9NBAnXrMSumwvhTcqH",
  "key9": "3jCRQrULsP8t6H5zr2HdrfdWPaxdgL7nuMNPpQu8H7sMUgUq5WswTXUUBCsYZDPeBsZR1Yq2toKzn6Y6Vd5DsQVo",
  "key10": "53L8CSKC5GdZppsEdBd1Pkn9Bt5ShT1ZeKyQXMBcJP5X4yd9eVjUnxmioChnSPTZgphJRoMqQAqk7pfPmniLdnZX",
  "key11": "5queCSi2gDanPBLqhn3iNsjsqXcoUdPNijD5cAVo9R4rU9CosJPBTEHa62jJVS5JW7SLgqNT443B2uJuMVEr6PB",
  "key12": "4Txc8GXo6ogJ1u9SDkaPE2bTZxHpxfdshQuXWuBrQTLZbM6DKo1STFmpdb2YW1nDtF9gM4uSoRd13fTj7e37Bwmu",
  "key13": "5jxmA1XzSmz4tw77qLn7FPZfhQgLTaPmfxMxJwZk5b2RZ2cTe2bfAi5uXHx1uakEeqVuCpVCxnE9cjpTPD6Y6CDU",
  "key14": "5wW2GWGsog67onk6F1P53abK8B4c36omTRu3mR2chpfghQHW1SwQe5JwAiCnGJubRuzSJ5sRQUU3yBiLSyZ8Euzw",
  "key15": "5KYi2qenPDFvRwf1h1v1AECKG2Ge4SU5h8pdAYbb2twdfotY26tpueLBcXx8GKzUCKWCv7uJ23sAz6hfmEE1QrTV",
  "key16": "3uqfpCNwFoAELrhWicx4MequfnpoSdnp1xmmZLdzUj4J25VgKAf5ZhLbFSpNv7eDFBTwtmNkzrL4uZunCAVufykG",
  "key17": "34aKCePgjH6PQL1A1whWqFjHjj2D8sj9b14uHxqNfRkZbBV71c8AARR16rKoJVuUoXDWAs9jigS8biF17KWuw1b6",
  "key18": "iog2spDceCnGPCYjGR4MoAFYjcFfkeCPjhdPQUyN2ghy9PNezDjfQFy33Qbh2H57fmdr2ZXrEBEnWxL82PEjMKb",
  "key19": "ibtERzReY4DbWx1vRsiGtoprxs8o2oP4vLvvxJU477s1YgZqixBthmFHEeYNmhENJmEFp3DLUzjdSuGnr6vtEf7",
  "key20": "3QFcL7bVwAGg7GoMp6wDvYwuLbap3i1uDSvkrtWBpgK12t4cMM4uEdPWUngn2GFrXMFE5HWnQpktH9A1pS2FW776",
  "key21": "5tbBz6ni7dqzxU7WVheynrokMNEgzzxWRgFUPZtNF4UKsJs64GMPbDAgjzHa8uHmnxmCMFpRyVvfQX79zfKcvZuD",
  "key22": "5DsykenpUNVV9bwsVt7aonXatbKDnXCPBDW9S4hZNBEcquWUYbo9piteQ5ibGZZqgC4tQZWhZ6iXA9RMUD6SnbjR",
  "key23": "4KMvhHkiNGCd3V5VU6kVDTxjyDDvyxHnQaSqwP7XZE8x1wq9WPL6UxJYU1dYQTmX71wQc6X9RhT3HgmWKAn5BMyw",
  "key24": "25cryCRD6hTS9PfybJeKYB5vwBL3MsSeUqqwT5J1Zdcdco2nopp7CpKmucfyEJDvyxisGq5WmRGYRV1mUuNBzVP9",
  "key25": "5dprH323cP9J78vRyM23mRSJfniD8s7pHPkCcdWBJPqCzgkZhWyJF3RTcf2uw5gqathCNx4NzkEZQw4oZEhqN9hp",
  "key26": "3YGHCsWqdBnmjQamrRkBssiLQxJnWjFLT2U1vnFPjUQompLgYwZNqrxux7fK5ahRfZoLQNnzin2kkk9uE3qMEU5f",
  "key27": "4mRkTX2EqvFHorn8pnFfqMH8X7P4u4M24ArbiofWdyH7pdDWsUpo96EsLtTuwhQ8CCPR4orXALQiHogFvsXT6McF",
  "key28": "5t2NJKRDG439zat3tK7uPr8JafrsGvXUyQLTMuqxPT5f4n8r3oFdBCNCHJNhZadRjWZYz9n1aDMkNBYTXGhsHaAX",
  "key29": "4Qsj3ceeTtJiMLv9z9shWUtRXdvaEoSz41eGD1r2TCREScbZPXFqp24MjqbWdh4A4LHjeyYjZJAev8rhJodbbYDE",
  "key30": "2cUFkizLKZmbjF2bJBZKN78cGijJQJL88hu8f4ArR7QEAvWFiA9KNLbyNV1EiK6qxsxxEgDqfJTctzRqsPnmDDHs",
  "key31": "2SP1fQmU7DRZcB3iDQ5hgKW6zo36aCS1maoQLcPB4A5vAh7C2jn9CoMCzrby7d7mexMiH4PR6wmr8WKq4CLVZgjr",
  "key32": "5uroHnMDMR29Cm5XAMkW1pgJ6nWKt2fAWjAmLjVbx26JmuLJ1LLJpr4DeaF4VrWQHJbFbSxavBTBJHFJiHMCViqp",
  "key33": "52omsZAaG5CLDTux8fEVjZRJD8ukQikoM9CVir2rJvcpu891qfYtbFm1zYfNN3kTPegHe9HqbjHHD7s6nDLwax1K",
  "key34": "3pkD14QEWyu9kurXMffTfHg2yYBmtmByHVUN4takAocUPLWxDRSqr1UxHRKAGaMAJHUEVnRNtyJyWUctYLSkVRM4",
  "key35": "yFVcNMyWJr6ecLZWVF4LQZ49aApqCp8U1ZAd6SXxzQH6zuyM875LkCgK5Vhep8MHXcEaTXSUvXeMfrqskPaRRVe",
  "key36": "3jJWxTBUNY9viZfNtimQ5FQxVkQQMd86ntzznhJbpWfM8w3BRnMjAknqR2SVB1jmNSCmgrD4wFdrDnWVHqGmu9Sc",
  "key37": "583pMd48tMVfHXn91xBGcU6KMgzhDj6FLcWsxpuazSYcHjamhak1KZrEC7Mr9kKvFKSbAyKqZPwWACwXnZyjde2Y",
  "key38": "2ukcQh15y8x61zokZ8sLiQiWg3xHZdrXn4NauF6ZNRb2uCRoA67igtTKkc6ARhSCxUGV2VR1mcWuWhVWgenQX9Qy",
  "key39": "4gRd9U7SzjvwqeMhSuYhofAA1UZfFezJbTcvtTA7a5xSatiGSsKDiRwdmDicuRyV9XVHybdrCZ59wLDZzYcLZnUF"
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
