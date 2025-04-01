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
    "5G8dJ1sqVLf933eDX6seaXhQiCuhz9wy9X7cTVXUw3gj5UM66gGXxTYqCKrZKzrqvSHKwNX8nnshKw48Msur1c8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39V22Jp3TQQ1MWZTmeYVqSEjiLsR2t7t9yvWYc8fTJ3Uqog5YF4qpi85STc8VXeXRk95nibzNXtWwL5oMfdVZLLh",
  "key1": "i16ggLDgjYhGkHGHyoGet9VrhME7PS2sW4BwojF7PbxP4ZKHXLbTWzBB8eV1dN4ZKHKZ2k4YZWBxzJLKYDmZabh",
  "key2": "31qFX7XC6esLmxSFRQNmimqc18yWdk63gBRV34tvaAXyxm1a9iAisXKWMymFcESc7d7U1DQD74WEvqscTAAmNQW8",
  "key3": "2mBaBi7KMRFbMUBFoZjkwyh74v4aAsmxJ4uyTrJJsYK3WjAEWjm9tBe44XuyYLKV11imdebfnftcR67prqdbNFwA",
  "key4": "6yhYkSRMBRL9aeU4E8jHFribXhXqHa7zW3JXsJPnrbEE5YxdYbq1wDZJq2MWASpJKbeL9wDTTr7pjk52NWTXVDH",
  "key5": "4t1Qfjhxwbx477aDPcXvjtih9T3kDpPyK4qk6ZNJ9VQV4Am6jxyEprzEwHVrZfRAt27ddPYGekDHGdNVLveaYpRy",
  "key6": "5SiqquakKQSs3kS62wKz62daowUS47A4UTmLcjv5R3Bb5792hXBXDgznyJA9R2aXJcogLV5Ze2o1CqW6ZJb2Lvfj",
  "key7": "2M6imkXgEeKnBiwH69p7PtncbJCPhnhNhSceX6xGKbhCfpAHZDaFYnR4tgLiJpNBSYztFH87vFyNPPqQTAX8Viap",
  "key8": "5fjnvh83LW4ZaKTzcxy13HNSjPz8tDo9EGeVGt3RsteoUeLxA6yh7tk4kkeaECJuD1TZRMkcFEGqqaUtZgJGaE4G",
  "key9": "2E8rkg13XsrxckkGN3wxKXodQCQgqTKqKGmkwtRZkfN7geAxTrqhhzojiUgs36fvWk5yoBQ7USGCjJPx4G65KqRP",
  "key10": "5L18YCsyV2K8n4PynrU6SDvM5NuwCV86GXxoAv6keLKhwMQbjUZVTvrRAJXXrbqhfD2AXeiViFb3Pye15BsowoZA",
  "key11": "5FuLVDsNuozEKAPJNMtbyJcVV4TWDpyUa3zFNSX4KDR2haBERZmKiNUJKiXoqV2sTiQqGHP6xuAHTMNBNkXZo9Qe",
  "key12": "22HP8ivjw6ghjVvdC3K4fckTwgHL3vfyDLjQmcizJvGy1dceerYtgB8xygnu7SrUe5sGE2bFQF8f9tf8ext6a233",
  "key13": "nbyn2qf8vgBDAZq7UTvUs6i5eS5ejAVrR9xsNJfHnHSZvWScbFp5ioaT17gLWqau3AxVH9PiRZMLDkwaNhvHcBt",
  "key14": "59BN9fVw9MjXAdDesS2vLKrE3waD4kjhf7UrGWYHtCRDSmfviodLTGkXDyH7Myxycp6zRbpkNw3MJuCpvkf4vdoF",
  "key15": "67MR5p8757jGyrfRcRMAZBeEgKmKZLNrVBmKe8caJi78X6toKimZAm93ApheChEimrCbAXVDEkA1oyqAKamYGu1X",
  "key16": "2MJFHGMrRqu92D2gc9m5Pa5oMVuT4vrXivMvX2zF6sDRTbsscgFMqLkxnWdo486HWFdREeMbqjMMRgDtq6cALwGK",
  "key17": "33ixK6R3u7SHFqYu2qYaQ46tRecDhQh1eE7rGiTRfuxqfosfTmGSsKmVDGrJGq59XvEWt2VAiVm1E81odPcsMc4x",
  "key18": "5PHRgrTjjXDViK6br57Re73BYYfVFiiRm9K1jGqVjWZjgTDTPCciVdY5Bamt8fa8hBDgc6JfMvk8oSBeFh3pfhYz",
  "key19": "36GsALGeZ6f57rJY1nH5DEfgzQh8ro9wTCemBf4ZnBGTMVvrdtHX2oV3KpsZ8mYLhE34tPvEScA51WJ2KVh7S5Gh",
  "key20": "3RGRq5BkrTKyvhjUhnPdH97TNHPG6hFmF6TdADmroEeHgaKaEPBXnGMZHBZL2DA9MTS4PgqfFEk5PEaJAEX3NT2y",
  "key21": "uFZebDzSHy1Eq9crggSZpCkGVDpSwX6UFWzWeMMxyJTZVfHBDrzMmqUyvaGmGLR7Ertz9kBZL1D8NXA8AxxjHHF",
  "key22": "WFGxsHjqy25Pt4RZLF8C7rMzNFuR5saMkp9C1myEaGe2GTTLcda4GLcPiNoVFNjZ1PDMzhK1VrksbderahRWu7G",
  "key23": "FS6ZUcg4bmY61eqM6ZmX7xTrJNoj2E6kdMEvnRbUKM51QvFcihJ82oMSPyEYZ5h1XgVD8DVDDGPvJDcFz28MUTE",
  "key24": "f7QWPy5JJNoTQBLBj98gkqvmSWxb9CV736yangA7Zwt6CwkQsyPAiPCaagphnp6HTz6KdUiaC92B55UxJDoWGk3",
  "key25": "5eCN6tHH4FMyXiN8oHUJHA1bR3jcMv44doWGtz5ciRka9VCJSvDqjkyrgpB3aCUSCBthAhJZHjVAuifsQrkzqt4S",
  "key26": "2JfDyvq6h78St4xsLhSWwBM3ET5eAtVWfxH2YtLgPNgDyG6JVHTLLyqK8c5dZWVv7WiPoK4ij3rmp2b43gm2JSCa",
  "key27": "3Ar2jYKSoDAX7DoqKWoF4adeqpGxB7J1tJESoVhKCw7TLEyQo7bgqRMveuneZRLVJJYfFE6Ww9R2f6jZhNQ5so8E",
  "key28": "65sQ7QLychhwSiiASiyEHctBETmgJHM2tBjUe7nRxsk85BouqinXMZmZHoGGLUPxdXjSumjZ1FseY9JMmM6fJcTg",
  "key29": "3J56tVh6KoP273ebidqfheQBfxXkU7vihPyeA9ftHX2qtNFQMtj4HTfR2TrXB7nkhLaGgt2Y64bCbgpRka7MnvRv",
  "key30": "roTUrpHoFTe7mt5U5uwVRVqEVYNrekKWwntm4qjMJHjA6So6QZAA9VWNqoDNjvRBYhAQZLZLvP7a7EM4Xp6WoD2",
  "key31": "2npCidGtRmcasXR4x1ECCZq19ZFMXTGg1v2aFTJWMGCUUsELaMuc5zzhCG5wLgG8DZvGgMqMDasH4eWV3EdGYj2C",
  "key32": "bYp8uJVjWXyrUP5de3Z8cY63QTzgAe7T4YTGR5RN6EyFYwv5nF4DhZqNmpky7Ei14mfJpQrXVC87mHmhrBnWikV",
  "key33": "3nAjiBPcvBshLkcS2GH69eWQBan3zkJNtP8X7QxSG2h8xkkPRJeLfBUfdMY5YmVkQS6ZLZqeyAFw7aTrRuNStMMr",
  "key34": "34ETnCnb5S6aMR5vxZdKKAWCjEgrHvXNzKfrw9Khvx1UBpU53ifhTBvRUwQ6Lmu1Z6ER8VohTD6Kbuk8nN1HbVrV",
  "key35": "2mQBddGWgoYKZFHDnivS39fjsSmVdMAihdcG6hdQDhiCNsz5m8xMyjoA9Dk5UoieRQzR2nBG9pPAtJKt5JwYMq6U",
  "key36": "3ZcTBVTECFMu6R8Kque7kiy9ehebD5fiCapqhya3ZxFoC1Vd55wg9qgTYCUrujAHqEyQQCWLQ65685rtpe9SmJGv",
  "key37": "4HDEdmrSEB8Td7vyzqXAWFLDCGpMwVqAfkcjcUugX2uUEdt6YUTD8LazWJ7mdYX6rH8rDLfWFps2xNMUsFkzLNGS",
  "key38": "9ni5hW8ykH7MRqpFBUCmgFLLs5RT9Mjjhi8cMbpAHF5MqKwKM8ZLhdkR62px5GcB5nQRdhjPZEeySCP821ZTfc5",
  "key39": "4o27oJNKgXs4vmSxwEEBby478EEnzZAs3igVVq2iPGzLWGF2ZmZCXwnzpDboDzGn7ZAz9SDrqzRALwXCGw6vUp2q",
  "key40": "5BAsrgJ8A63WCUNEw7erGSXm1xfYhat1XvFXCJZ3DhhvJgo6zAK2kq5xN5L1AB2trrD6SSJj8Bm22bEqgRrqc8U1",
  "key41": "5rWQtgB9dMhSV2SVu1s4ViFopQEeTK65qSZiJ5QEkTG1cgG2isLg3D7k9TcTLkwb5FbVNvKBcorPNEQHMi4bWbGq",
  "key42": "2iPsDCyVZfqKA6t9e8RQu3ih7pr6uJk6Gv18oYgCGvfv7eqai9FFwYdqqECSbNBrXUDsHSFjF5eojxPivgGvvK6u",
  "key43": "4MUAg7KHKVpLV4Po9f5Qz2qjY545Fh8duqWBZ9XctYArYsSGH7LPWqNqJ5LtbUJyijXjfpQQvYHJ8QjorQqmqJRQ",
  "key44": "4yMYUd3LBCZikJTNmkQnADARJupTjfFf94A4CFFhWvBnMayEL7kq9QuofmQibhwSUhBuA1NqLRHoSDhYrgwPgZMV",
  "key45": "3Rq52nhpJLESgngLPmuYsFf576jv6koS6oxDd8dzA15sysgSGFQrepZvPXVHfyRxLzHUXGDzAxEcY9Tuvc1nANuo",
  "key46": "26f4S6xeXfYpvoTcXyWvYW2QAYDxWkaBmG2ZVBFpcmBehmn3yfmjA4eJdBrRNWRr8NMqH9AVAKi5d9pfBr3mx9E6",
  "key47": "4zBuWYqiwPdmuBSDgWE92ruBNjCxYfQcmrjwG5pSEQ52YZjSmZyrQMXch9HK9voSFnQ2tnKX9rw9bUoA9Sg8hQw2",
  "key48": "3BuZV68KvQaK8nvVcsLF4p8KdBvG7mmtNkLvFYU7nx4E2mpVffb9svwaz5DkvqHKkK8PWHsALQjRmDYGpQ4z7c2o"
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
