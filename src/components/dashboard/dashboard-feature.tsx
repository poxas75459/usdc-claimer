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
    "uiko4gPRbUWKmYqkrvkgGuutrhBMK5dWrUBCXP9QTvNK3sKsJ1vCFjtVvP9PQM4Aq97LoeGDRPPfCGGkqszgGFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "281UeoYzAwiYovssoJjBwdgkmefLDhsogbdCuifZqAbd7Lj1yjwvZyt4oFSH5bgb5EUDh2zPsU7oTPxdrWjS1gaf",
  "key1": "XjVWbLz5RJWcjDaN6i2LHRngaKUobWHonDxsXPvYpadeo2QSAyhZEeZkVd4jBPyFqw4nR55zB22Z5J84Cv7ZjGm",
  "key2": "5kQ7iAGZF8t1iJHQwrFQ9CX6sQgQthhAygJDFnPXq67EE9xph4c3qwG44crXfTfDkQfJecH48nexNL3WiGGLvs3X",
  "key3": "37tUHhJU9QQ2QvUMwaqkMBD7J62a6fXVfuUf3pt4h34g3uDXbFsEnc4F8trRXbPwT4nXNnXYnbJe3Mn5qjs8RHLA",
  "key4": "2iDqRqAnNzeHtm4Sck2vYqDn7c2KLY7JHpRVmtmsyc257UJ5G7JxhUzHjR8SeAzP3M6hCSMoRBbpmPT1FCpZaqVP",
  "key5": "cszZ8MRmChBC2f9ELYFkmbQwsqc6Ao14DRQP54ff5myebveKNjbKi1pT8UAPT1wcMVVdwqLyJdCpiQAzc2a1YRo",
  "key6": "5r7JPVYL17wM92G8CBvPujmnN9VUcGHEdm9GXTyzLEysRUrQZZ5KrAm74nsq4JBRwfXozCGCV5XcBEi8Utc8oxtD",
  "key7": "5oeaFZ5C1L5tpQWQSrEskyet5kzWFSGmf39orsGuZEMProxqxJVrixczPYXLgGfMVTugcsAHdxvkVYxtVM364vui",
  "key8": "3dirqqZieJHUVY5KwjxPELovGJVxCZq11FPuddqBskye33wr1XP5aJAMpMFQY4axjXY8MAsdfSrFWWH1sZ1z2Ghn",
  "key9": "3XBwDPyt7xucKyxUqEHYkhYaTkFhK3YKR5zCqanbVY5Kuh7aWgBh1C98mBJGZfpugsT2nMYVP5q1nEu6a8ZgZNVU",
  "key10": "2oxnRr5QnhcvygVCAEirqeYfLyau8yarhJygYGDirbE477m7B1LBFRnACYeF5DHW8kG4KRJfNqbXLMnzx6o7nA4g",
  "key11": "2hnLuiTbtSRe2XyEuPQZqbfSwN7662X7kbcTfRRqY28VyFqivuWerMTeYBW3XEAnCBMjdAdqCPD86Lk4MX7d3BV5",
  "key12": "2F1EyYqDu1oHT6JsXYEYdFvKkvtMb3UJbjugu3je9T2DHgS5CJPQfTJ8YKv95QiLNaqT8QqHYbLHM35hVMQKkpcW",
  "key13": "9ZcAViY6ecAwPxajdtg9i5r4SY4JH4rGVQChRFALEHvuejFw8mYwVvvVuwaLqsY7hJ8hjGCTkduUecJiDoLZnzt",
  "key14": "vwa66vdxMp7gTvuznsN52GQXctHMkbvrA13Q4qMJh8LHyNJ8h9QXxL8cfoS1QfzxMRBhE6on8xJLPsMutGS6if5",
  "key15": "4KFEV8edpT1hkKnkryN67SyAdL6AUzfQDRTTy1odskjDnBuQ4DQsbA2Tx3PAjCzGJ1SdoG3CPEjtQa7AMLphQBq6",
  "key16": "3z14qx38AZjwS9usiYbhL5f7Ky5aw4Cx6sAj885Z77XagstkZrcShWMyMGR62ZVp4VWD5ohJ7xTSk9J1u8JVJnAB",
  "key17": "2NZjPHTVyY3jbg7SARbhBwMp938HSi7k6FHRe7JkHgFRHC1URNQsghq4rVoVuDh4poJGx9H3oNgBboQeAJfxHUHi",
  "key18": "3GLHvBTMkh1WMVQ4m7DChK9WM4aMM24gMTC88vt3pQrzGbQdpPvD5o6NEjd3FGt3LkpkPBPEwuProdH1FLmKJKPM",
  "key19": "8FWBufQqDrkKrDZmfgizAgbgqVcEyzbsPq998VNFGPVA7Q8T7c2Tu4dbRbNZ4opMQfBHP5e6JbEcpL8fsic25a1",
  "key20": "24WuPNxQ9U8bzy4yL9AHPcDsZftvnKzSErUEoCTFNmW6wJ6pphtbgbEQaoTeGcgZQbapqtkvyMaR5JLAD83TrSBg",
  "key21": "2Hd3Jyt3yBxfBAsJcy8T1dJ3BbKguLTxCs1un8Wb9PDzimi9c5G1qxQePpHYGHsW9Rrcn22hcJAFQmVuouQpKPS6",
  "key22": "2x6koFvYayiSMrqbbybbptxebrabcrK3bLXCL2QKimbhB8pHrEscL5zY1rGGpenEP3Azxc68SQHZpDduZhKUvGtR",
  "key23": "3AXue7ydWNaXRDgRg8ZsgXhJSF5qohzuhrpv7QExvA5uCSX4yDmh2JPDD2k2CisQGJS1WCfb55KDWFbV1ypz9Mhs",
  "key24": "Zrq2Y2TZU4ML8PChwSN5dn8J8zuad6N51DEvBw5DNNA8X4XZ2vpATeoWsrhWDtYam4TnCzPweNQKYKLHbUx3t7x",
  "key25": "5vdHyv6dfYsTfn9zbATTy5q4BbU3bkjtnesEHmSgEXM1F8dMtaYTyWV5t1VKmjju13dUpDRuV9No6zcLrxTXZhJS",
  "key26": "4wdKPJriexYuKgBjJ7459wfF1Vq3261ucaR4Uf4XPJv1UZcLPaQDeyQ6LFTxk8tBkfqDbiUfBhjxjHcvNMcdeexM",
  "key27": "3h7LZ4WaAQkbK9vYvRqeWYYxCkqgPN5GYEn2biZATV5yiY4TRjqjNYhSwpzWRGYHLKWLubvyxVzkbhyDDyK2AhsK",
  "key28": "3LAkmWJTZJUX1ekMZAhaDBuTw73ehWvTQexqFC7gDMudhAaKwVWJPwrb3nG5D3EYvHJhReqerumfXiVb44W6zVCd",
  "key29": "4SbfXv6tXRNNL8SHp3UVPP1Hh8eTUzo4MZLQjw6ocxLk81B127U5osaRekNtzNuBjQQuJ6DpkKpvwaKT4JdKr34k",
  "key30": "5Hwcpru4jRKvNBYaodTVDneWkC8DtV9y1yJ4rV2tC2Kx4fvXQC4rTHTbG9xunNm7aoEAvXBS7dHCufYAiwCYniDF",
  "key31": "58V7Td1NASi9ZJv6TqCgKnEZJ4ds7ZKP8RTfbnnXvXGr6Wi8dMFFQXpYa1CquHMt455J9z7437AaU3LuKkRDK5V8",
  "key32": "5XcVFdZGJExgfsVhyhtv2bPop1MZARZc8En5xYu3XF7W3xXiHfLW65Mm4kH5ELjhRCoi67nrYaUpyBau9BhPD1y",
  "key33": "5BajP4qGnzkbdSkaDVnKoL7ouNnjwitFsw8vUoHCnXd7mydRCxfDxm4K5Q68t2zPWHrpN2rdHKa6J57cVA18sKSh",
  "key34": "4kRj44bzQVxD335g6zrejrBjiykevftgCMp3sDUuDSprvZ7cLwc4TC51c6WYWwcizoxhSB4865xRRYMrWkm2RvWd",
  "key35": "2jkiV7vzdmDw2f97Rqtbmn2sAieWQkxUCn3nbok9dLzsi1snq89YwNiKS8GTeFbioDkZGD4FenA2JmTG6o9jdGUg",
  "key36": "2ZobxSmFWsWN1BwnPgECy9DqHSiDj7fWNQwgPzCz7EZJvVVkiE1iVXBA3FPBVuzPDCuGbGqz53jhnMZRADfMgbZB",
  "key37": "WaoGa8kRCf2sZz9FSJbqQsxkmVkPsTV8hAqRxNnKmhrcXSNdKjUhViaoUdejgqkLGmqHSkLWFfJprdb8wFYCavH",
  "key38": "5fkP3hD2dQURZG175iXZRMKskcmaG8WDbHZmszCT2RkGJoMwHjm8K6KYqvFgymywXZveit4EyctXC8yGa3tK69bF",
  "key39": "5m5ystMTUE8MJT7X4dh8LNWYeaMhkQLy5ZDjig7J8BN7JUZEzoe2aHupFoWA6ZGGx8484GYdJBhaFwUge3eqKDmh",
  "key40": "3P4dPSDHaE3H9VQdAPSCZwy8USwaGHf9krSWNPrsZoNTZoW3zMNUzp1M7TkVLYUwvHqG41kkQpo6q7DdbyfintL5",
  "key41": "4iy6ugmMqA4skDtiPw9cU3TiciguCq8so5DiQXGeDHQBw6kqbLm57TWsfuJmTnB1wjS6djhWXJRiCawx4rTgeqdh",
  "key42": "4CrSCjtmxh22zVETmty3iCKeWfS1ZJJQ6ks4j8sVCVJ9NYwvMCUJWVTuuoysQoZHu6eedYSGwkZChBXwRwQ4g5jU",
  "key43": "3smd6fZ6zP5ucLesjNVabSuACwMYN7kZECg6zbU5kKtv8k2L4JrpvfdHhBPdoxAbUo7i5WGWMJGgCxUAHrghHo6C",
  "key44": "5c4wGar8XZa181B8fuURM9TF21P7PdTw3FAZjATfS2oKdAPLvANq7FbKMCnP3ZnGggSuBFWSt1CnA3HeUug4e45o",
  "key45": "5CnjpKK7hVjtPebQTBisc2t59HmcZkadkqi6msKjm4Fj5NayUF4vHxgkemaXv5E3Y9SdT5t9sf44aUq2aEDffsZg",
  "key46": "4sKrJznfyKMSWhetDezswMtgXFShPbQoQGMMQUZDik2iFfq2GRpNJuMs48LcQJF2KogLPuWNdqHPZvhrufNL8zkv",
  "key47": "25LeadLYUbFoPCdu47ymFGBQe8amAcVW95R8X7cJoLp4g2735jup8LLhQ5HJPx5PL4auhUBZdPBGWYqwW4CWVB8e"
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
