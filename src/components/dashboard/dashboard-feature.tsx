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
    "3hAsTPQtuyeEEkQCgdwJNqX7qNVxrcLPWUq9pwEWpbMmRCKBp3UN3SfZVbWFDRsJVrAtG9TwgSA6kwuCxmwsKjtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tSe58yCUBFeFT1VQgd6vzG8XBs8DeeBpd7vvT8MwP2tMH2TSTLxEsU4jVEiBVJkxarG1k2tK7MnYeZcFDrnwxjq",
  "key1": "4BbDAuWxKA3cRaKsqBvZ4AvqJAHMmGEjkvQujoSqW9MpHTQc5nVWFmrwRy9c6MFeMjewXZsX4mmiJ6Ciq7eBYZRj",
  "key2": "2Up3eS6ykzsKVQ6G8A7GFi8xBkeNYH5wCtMgNiq8maMsueT7z3ToHe5sCNiy1cLjPCjqTxJJoH25vMmbf6Npm1zY",
  "key3": "4nTy4nm78HHoYtVgR9Fkf3An5KSkv9zsnNmxYuZAAyFCKDgPSEickbPAKmUjFrcnXXdrGydCkGDQBYjhXUnKa2oD",
  "key4": "2htbt7i4MRUpvCmnLHbxo6FLyeyeU8VgNEK3T7vUMUy8EnnCEz3waiVQu2D2LSTR3yM1vTWiAEBTzgedmDafygJf",
  "key5": "4Cj4qVyPMXCtZn7B9acuWiNyktui9TBgQ3XHwS5Uce9G7spSFCNfD5gEY6cq3WfC7Mt4hR1xsHkqPVQ3SnMVmF2a",
  "key6": "4FAU2s5RaFLjW2DAqMntZLkEZVW4psCx3WcmGUNp2LqTtNhcxuQC5EfpEQSRBkKXjDhi44hCCJ9yfD2cXAnEEcjW",
  "key7": "3LnexcUbuuDyHDQjVUPwQM1Nn14iiAugdspCVeVwZWGAfFdA2CJfs1y8o4yoAkgCa2NncjRbe2C35QMMdyz5ffeY",
  "key8": "V2XWx9y64Mm4iwdA3f4Cx4LcJh9rPEXQTCFRZJHPdWxBnE3Dw1mL5Rwk938wpifEvb3tyQknLhresng4PrJQ7jb",
  "key9": "9P8DB9kcKAj1bHgJmrDkzPiZUcqjhEnai9ZZVww1TS3ynv9JY5Qhce4C371pWAuwAr7FuyvkoeY2MAWo7o9YKce",
  "key10": "2oF6MVfkbwbVn3br2xbXx5KXQVE59gYbprH5RQZphkxQFiDyQfqzhztZDB8gDGAzKAhxhTpcZc92f7z9KU9yCCK6",
  "key11": "y1akPLCbMhDqjx48MB4uCdVRSqNTLaEaqpReNM3pgg4zfrCK1tYxShtTGoE9dhn6dipW1PpTHDhn65dPreAnVnm",
  "key12": "39kZQSMWa22PtLDMvf9zrhRVhCLVc3QaJsB5Q6txRezWTtTUia6Uz5GhZi8HTacFPUAAoGGv8f4uQz9r5JdooUyh",
  "key13": "66mBDMhP7Bc48VhrZGDSdXdGNTsJmRgbi5LWLZXP5P24UC7TUbfKNXwvN43A9TWhMvT96R5MZwRda7gyEF2mbGEd",
  "key14": "2cY6qZtoXM17vDx2eS7C4ECFM8LxifFMpB1CwoLxZjfoZ1vVtcF2TVpEhVH3jaBnNjwKmPnA4DGKT8kYYAZvqTh7",
  "key15": "63fv4gwNooDVuVrwv7HfB7j1B9DbesKZqQPUnL32UncErHNoGF7bggNMkapDFgPaqPG4XVNqkJ2zmqcHvnHZ1fvc",
  "key16": "5FGuSMLunWst9ncx39GSgvNc3hGmLzedkAvUNrzzmAmGqBT6z9ciatDCSCreHKUBFvSxgtKyRKz6Yoq5Hcd7Kd7Y",
  "key17": "5Buej6yrHTR9fczyucRNAEeTd2jVviduEB1ekpRoVeSNd6wD5ckCsKMRfMwZGjymgPBobdtyNZM3X173Fmqxv9nb",
  "key18": "4pJSt3r7SbDbaSx5oCPJJ512Y7DJ8ZrkDUMoKnBVjSTdRrRLrNNCZ7ssrBTnAx9zvBUpRSHC5UMi5Fki3bvoqYL1",
  "key19": "jynjhyVbSZ1ht9R6aMTjH9AtKmHjgdkgVnqPypnoQihW4NUrNqSasRPutFQbYAKafdncZ6jnC8S9bHuGKEzXt38",
  "key20": "42G2Hnx8BdzevT6gZwApAWEWcLA2ThwpaeuWgZ9WWsi4BapVDDFrvB9bCV2pY46exRUsdy18CkXhCCe1KLz2uh3T",
  "key21": "3NQ6CxxqmVVxN2VUJzEVFcYpK6DhQAtqAopeV2RcgjoCvaYMhx5y4vz1946wMLLVqidmUfY8T2hg76zbfH58CjyS",
  "key22": "4J4RH5mM5bWg5VZTWmS3oeMrtgFQHd2BRbV6evwXvwzSFP42s6R9jUZ2Ng2TtbCzjbKjtWradyAP8jeWGYPnUQEc",
  "key23": "khatEY8VC3J4xeBTJeaDrQALXtS9AQczkQpEmiaXxQpBd7sUq4Zqi9y9SqeoyvFPpYyCJMWi6sb59s4pubJjSTa",
  "key24": "2Lcyf8zEMYQduDMLb5eQpxV7sqMrsXzGkj755Kav4qtHVLMYUB523C3vsuseVq64wv8VB2Pc6dk2JWHT7BbAjVfN",
  "key25": "1DbdUdCZgFdwPef2RTcieUjZrS6Ka42CtNUK5hWKV9etkjF8NURx9NekmPGPzXmRLw7a3iXbhqiKLUGi4ewPgL9",
  "key26": "4MxZUqXhbhP4Ean6qtXPA17paByJfaVxzTnryjf4DjToX8bFXHy6L9BtqHd5WKDvLcfoZJfzXvCNZ2ry9LWcj63j",
  "key27": "66pxbyjsxguHHXTvNvsEUBqZtqoYhYATsQiGyYppSPfHKzFud5o5eViaatHQHpEY6ypwy1GK6R58pm8zV5DaCC3N",
  "key28": "29zbDH9E9TYqcSsP3ZXCKS3hKEc2ivQgNmz6jyD2ThDNSjMJSdeXJEAz4oKRpEGrsRGzM6D7u6NMZBmjL91jCdHm",
  "key29": "4PrQ1EE2SBs75JbgKgWP89nB6KSUTNXxJLPSLNEvZ2gbSf1LSLNYUfTFPQTBCRDt9D5VtYt91kpMku7YJECFYFZ5",
  "key30": "5ruVRcT3D5sM9nDMGQt1UbxAgeqUPSvYUKDEVey6yxUMZmeGuzXuxmmqiHBfVQiAjVQwcmVJESKsZ33tHXE3zzcm",
  "key31": "mjQNofKfXwDXSCUzM3ZLiPNrPwwaLhxQGhPVGFTYqnZgb1zbLpMXx2PHaLPmeU7dXT3VepLyWhpnz7oTSwQAhy5",
  "key32": "eeJg9sSbpyricGwHzRSKu95mrVHYiWvdC47UYcKLjDVgbSzhkkaEJwen8ZR4NmGikTSmL2jJWqkj7npzEjPrcr6",
  "key33": "2eNc53aeCeUEy2EFrsmrGBK5j8TnFnkujdB6YpaegPA9A5FWQqzjJbpjeaT6GZQWJE4p9ytA3iWFU5kpDjLK48m4",
  "key34": "5GfLVm8Z5wo9taSs7fYduNScmW53Kvb8Hykvox7fYvg2EZKD4YaSekhe9jxiBeDdfGy9TVVpeLzVd6X6S5ZDs1TB",
  "key35": "46Hphg44d32JQB45KE3AsD7hJwnwZGyq4mu9WhzTR4vyZ6BiwGu9ci394p8XZcLp1eZR68hHTZcStw6GyS1JVs6a",
  "key36": "2rTovHSE7f3zRfj6EHqDw5wws6nBmGzfEubxfRPwsRP9Dd982Am5puYAo9gUyRNYFbvCS3wmVbgnTj6hfFXxD1j1",
  "key37": "4L3xW9D9JhARoWgb43yBuixD3PXMCqwrnrGdHGr15EroCt6LDCykk6vCtKeRnBaL4T87tB8eCSU5bKQU63A9Ejh3",
  "key38": "KXJAz7b9wDx5TDBsQWPN3ZkhkhcoE5Ce4YgWr1rHC9HiLnu6p9XiWVJhcUPhmFhEgSHSf7z87Peagh3oe517FQ5",
  "key39": "bkq591TNZMhEp8KCVQnqkhMwStm2A5aboTwXTyJX72QnNnhMHhfYXXEn7e8pTiwp5PqUWgg57qAVrUfJEQ9p8cA",
  "key40": "5VDqf1nWzgEDuoEJqYYukCRWuHV7rqxPExPB7NdPJiPGX4aRrCMWoAZ63n41U525U1iNyM3MLDrnHoo7VnTKDeSD",
  "key41": "5vGmL3BT4oWr8wrKXd8oCKNidNBVyQDgvEML12NJHEQ4mUNAj1kEYZtVuzMVGF4gVavLeLdKYmxPRBW2YbnAovAH",
  "key42": "3woc697jFAVWTztE4k9PTrikiuzWCR4dSB8oo9E6YaTzTTY1XLGtEWfL59o43XcLWYzg4Lyq5saVeuQ4vrvmsyAS",
  "key43": "5SxzAqT45JPBy7xiB8KfFNWbL2ysnudLK8Wf3sy3u1amcaKoubje1ToQtCW22oi4hAJ7TK7sRLy2evt5YVB2LvpA",
  "key44": "3htMnTzvKx9rHyph5ipW5XxJiK4aT3HPAtWeoUGqrJxtRpueWyAhjneJM8Et75CxZLaXj8ekRRW4vKt73LXY9B4J",
  "key45": "57iAn1AYVK44qbdn83P4s85HhrTeBPgWYfymzFG1Ucums5U6adNCQHGcF5wsVoBSyEEEegR1dBwLn68B6euqS8zi",
  "key46": "2MxVM7otMEFV1i2GvP1wUaHyBB7zQieujYnxWwjji4ogEBywcFFRAk7y3knkyZpsNgbEAG5vNCSz5KhKWcjP8Kha"
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
