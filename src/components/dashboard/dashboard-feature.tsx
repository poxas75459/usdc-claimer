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
    "5yTyXNdqCZpKWrxXoD4FeVVci8uz1CKz16vPZNrRyQaeLQgL7AB8D3WFxoxCzVFUzn393Qq8WuV9Po5LhL5tniaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YhdYa86S33nX8ewoo3w18ogAKFnrVdw8MqXwy174eZPCdNK9zPFtei79we3UBB5sx2e6Hc7316v25oTEjtFrdTu",
  "key1": "41YZyHbFkkQ8qH6yMFWL39gPtNwtWvrmHaXR5UpXHSuG8xYe9BQrGGd48xyZa8shQEV6LSGDV1UchJ3qiqUmskRt",
  "key2": "3wPCZEchRHU9FU79rrFbMhULvcx9g5ugYbC9N37EZHJqHm9vyPzhmMowy8ZjYdt498PFbHNfyvCuafPrN7iQEw9U",
  "key3": "83NLdBjYFvER2FkJ9zJVjxCMaC3R5JnTQYSZfZAmzySvKC97pG8yhVJkMeq4JC4eQB7nCmWg7hzbw2cp5GaHdKK",
  "key4": "5umAAxDuVogsnkTB2LEyw36UKuJ1KyMVSnJUt8sB6kf84GEPuvYtr7ciFYXbzeGgKg7mibQQ5NgbLwZUtwVwa9i3",
  "key5": "twy3cTHsnDr3BHAPpVENTC1ciokbpxLRyz8bAPjXvKx6zwS5Ut7PvQAnF8NQx6URaciACDNHqURVS1bDN9hfZbh",
  "key6": "2o1G8bXaj1EAqAtvCrowPS779KfRtY7AdZCrEzByiHzySAbRXwfq4bbE4pckUXbwP41AhAreS7NzjrTcf9VjhvDv",
  "key7": "62j2Xgk6dswndXHNVAuEnhxDVdZqnZHRqhCgNfUq5GnabHu8TXqFfKsMKCEJbZCnb7GTmcJyWKgxZ6enamyaf4GM",
  "key8": "5PhkXRMXHBgR9rhC7g8qr2DWk37qyb2U8qDFWqL7RvHXtNecF9SxKnDPkczw1JCt9pa2dHAUfwKS1MGhLp8CvQdg",
  "key9": "4XyXEpq9ion7wcCBK3G4b82W5q2SJNB1nXd28iDHUiqrLfKj1s8PrS6uuc81jbN9svYZkNYh1aU1jUnf7oLqcpUQ",
  "key10": "4DVSVv2E7gQemVZJ5nK4E7afZ9QhPwA5yuXYu999XiR7ZaeP2onoNP5zwJ3cpAENaBxFzKjb1aBYhFGDHsqLP9H5",
  "key11": "WxqpUEsBaJt8FqgpG2aY2BUhSrEQdcBTpZGPp22Xj5bUrv14iVpzMrRXXf8HKd6E7TzU1XXAnTeCe5nCM4NKHqC",
  "key12": "27jmufuUY77ktaLVsyVcDWakbrs2mmXJvAGHxqF6pmuygNtipy223vXZqAf4aJA2jeG8XxfDURfB4Le3TdiniPsp",
  "key13": "49tPyoFdCnRTTgJqxCqfKGZZ48dgMe65EwukNDHvRcWZJ1MmVKL73keViibaFmtnT1adDKHXhJ2BVfc2PkKgmJuZ",
  "key14": "3wXvDC3bPKwJob6FiWQbGDYxponbAfznuf5otTQyqgGq5yHChqN6tjBfBLHtvvLSf9KMzmcmHP8H7Q3SbQVt8kv4",
  "key15": "2wd83A2BFKehVEWQsb4YLKNv4ykc58KSTP2U9MUUAR47ouv588oY9pkEdFXSBdf1sXue9p82N4KZgTXzFwHZEN6c",
  "key16": "2nQJx8N6qFxZV16VHr1twQzyLomfHYCAr2w6wew7fKpLod9umyhynjqi3j9bbo6pKffa3VF5MzWwwwVzZiuaRm4X",
  "key17": "5zpdb4vc6prQXrzJu9R4cXrJaFgw7vTuZTui1m1Ubj8nXcDB2RoZwARvqkZCENX2MhfEzYnvuJ2JEp3GDaMsGkgH",
  "key18": "3AGCpCzZphhbuxxHaALFCUQiSMm9uzVNktcBuSLX5qppzudGYVTFxjefe8d36DdW5s5WkzJCjvdQQatmkfQHD2i1",
  "key19": "5FJTvLE43ykaKVHCzK26hYNCBTu5CiTzju6sER6zn58wVKWDjLNuB6wqLbSYas46MZXpzRzhPqa2CHDuYC7NdDdP",
  "key20": "2cAg9md6bpsxQFiurbDsjYxyZNMhjjWZmuuaPE7tg8KvwxhJVfQ4NGzrQmxLYUJqMmY3ZEwp1GynevjMcTQLhy1F",
  "key21": "4U79aHMXbgjomFKJpA4aDvqFr4Cqhc1ZVuQjzv5bjDQp1ha1p4hzvWfghTdKqQb2p8R3yDEfz6T1WYJJGG7hvspq",
  "key22": "3wm2cpVby18JhDGKxUrrPHXToUc9n1yRPXLzb2PTvq3QZA9EjQch2o5ahwTkj2YeK2xk4DUwYwD9ocN25GpKMCJd",
  "key23": "2QsckYDFe4Ndre7asVYnyvFqJWvZiKVYJ9bfhJh8EAXo9cjjU6ix5ACLeQqKjNkfUeXuUPuctHKXswK8xtR8PzCz",
  "key24": "FNFibTRFcyeZ16y1k7SQHTq5LLK7UmswPrNgiZsBnmH8VBh2czxUxEfk8jaXbnm4ZkrFHMNMmSDi3tEHm9a3bDr",
  "key25": "4mv5CQTJE4xosmzoZ2Js23VhM9r3KXkeYdyuzskW1da9UVuoi7VhzqdXKF9a5vjjGhgVB6fX6mMQSCuCseEK1j6b",
  "key26": "2rVAKUCbRCf3YKHer43rWFjAA2Ba9Ugr8HdZa8uu71ku9TnAzHiAFMEd5pZMswJNiZzbs9KHs48E3mZ87iHibUUo",
  "key27": "3mYMeMe9AXkN5oEkFTjPe6iTeEBfyLo6cQcYhgZRZWxQwnweWGGAqhCMQ3DZFhoqARtUUKrcMPBpzwPDnVWu4rGy",
  "key28": "4jYNcQnhgFm1n3sHEDcnLkx26dydjZwzRNaxa62mquCZhLpaABsp4Y4h5pAFvJGaTb6EttRD8xA5anfzL1gCFU1C",
  "key29": "3w9kj8Kh7kHYoMRmucAesZr8MUPxBVVZyR5pwUFqy5kHGig2HzkU2Xdfpk4yPYxVjpGTCfunG6ZgboLScrKFXzfD",
  "key30": "2J7G2kmbBTVWAS12yLZiDD63oAJ6Qt7cFhnGYPzuyPkBh4RZWxiNJ3oQywzqfNTnzF2zzDUaesAYKvLH2TmrH5Dy",
  "key31": "5eAqHKNkpv1u7Zu7t58DuZdUSX26U47Z5VA8eMZbheznjEJSbmXu5QiPE8K7Qz3oVsWNeh9jvDkBeUF4ufv6duyU",
  "key32": "5CCbMRzkaXqoeL3x6r9jEyzJt7ra8aafhDVvf2QRsYyBKhaAYVRwnGJxtidaXVjTRHNxq3NridnFyLe9GLodMzCp",
  "key33": "t1Y2J9RnVkrmiTc6w33Kwk4iYWVRFKTYKA2MX7R1UGL63Y7iWhPk6xhTRqybZ2L94Nez3Bb339RMEJjiDQiXonr",
  "key34": "5A5jxydLCztVSM5HM863HKEc7DbvnR9duMJPcDnCRohPsUQERSGnxrUgh7qDWkPiTASuv5w8Wx5VGKHG61fPpgeF",
  "key35": "2SurpSFWASmdMHTdeoovL5D4m44ex11tV58iWYr4pW3FbtZCH9bxitq8BJsscrYaqUUjtRUPKnMyY1M3pYGGwJ3M",
  "key36": "5jDyGsiXu6ciRooLPXGZNYkSZyZw9YwkyTw3QHTBQsZTVjYavWUCLwhrkvW7a4nYVPD2bzc6UdfTABPJUVggjRDf",
  "key37": "5PWoTEGx3qKKoQRvi4QqWBTA8crb38SYnc1uiam9sX8yLPNfW7nj7vfrEYgHprnhbyjwRXikQHAR1Ag6rmEMupsv",
  "key38": "4zYDaUJGFpsW31ztvN2gLyhUhVhNpqaPu8iWYpuQUEstj7PV9EWDxwX2cju7uMvUKtKypFHiQCuVGZEzzpxi3HHT",
  "key39": "vBYgBrCmpNYQGeFVZcLD9s1hJTbv46uSVSSBLvoHnFv9bW3iLjHzTMHDGNEghr9YCsVmi2UUjpFwcFW4MJewwjB",
  "key40": "5S8V7BLVLgq2C5yfspg3d1B2XtQsJesaheK5Lgk28RymKW7Zhf2UrhShmZUovZjJcTjwMNBT5mrMYEUus8Mi5Wx",
  "key41": "2YzCUjKTJN2HrJ8r2MjwNe4CHAawy5114A7Feq5pKuVERcFX6HdBXns4ikyT3mdGX67KA6peBWSpzU8Pv43om6wq",
  "key42": "3yB2LRoowzPtsmsSTs8DRkCTJY29s46BX3WEDtGfJwTifHpyTdTWCFJXFyPEysEaomDVyRvb6S3xS23wpfMj9qkS",
  "key43": "2jdtTUdjoTi4B3oK1zUL4Y2bS5tCwHnwSSMv3sz4Caz33cJA6iDbzZhzmGBC11NZyVKwqpFP2oWiuCyGy1z65cCD",
  "key44": "62ZLDgEXUzLu6YdJwp9b2e7kb9DLojbGQwEWJjFRtP2xwVaLcdjxK4BvgY9A2JcbF7YZ7m5ooemrBno1yokLB285",
  "key45": "4TMm96cC7LWe7qrjEbakp2461Jsdvwit8JG6KPf3gPCPsujDYKF33os7omwmLn1NtizXAdrjbyqKkamgjkxaF2AC",
  "key46": "4BkRFqVqYGQmFYBQ2Niydoieu2gNW2tgXmPHjQL2eLiCvadyCSPxFpzD7ruqnmwe8yu8oNgQxM3w8YMNJKWBLAsj",
  "key47": "2G5j7YXzZiCKdgTT3777jKaHRhT6CBXJDZvrMK2K97gMjL2y7xWrGm7G6mm7bEnMpnkesyK1GNybvHjnkMTTsZe",
  "key48": "51RWYuGCunUJ2849rEs3gHmsNUQQdvVkjBZYfeQRLLTqApSKbpBZuhJxL3nzjjf9Vnk96NeHzLG14xKPjCjFfix4",
  "key49": "5WtjqLW4LQFFBgc5VLyR4eWy61y2fPJk1sF9PBppQHTLLzpaiH4cHDWndzCCLepPB7zzhBmwbGSb4mSLpFTEG1TU"
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
