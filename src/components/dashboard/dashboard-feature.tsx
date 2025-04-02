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
    "3mF7FPGgVqnEmDyqxRvv1xVopB6R43uoWTUER3Q9JxDhDk5YuML8ZN9JRXSyhuoNswAbyGzhpyJ4cAPzwY7mVTde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bTiMkeWv46reqf9zpvVpPL5rXS12F7i9HsTNLyZX7YBSCYXgYmqrXqpsrt3hZ9pPyUizhEo1qTs1juyr1RKzZAy",
  "key1": "2bTJGbsAMeYQR45GRkq4CxZoEFwoeMUH53Nmbx2yeN82debemFCM38pVNxWtwrR3yoqxMJ3atBt4zP4qaV8xbwKr",
  "key2": "5CurkDb1WJ13hwzVT8ZKQUSZiCcmbjAcMvJZVQR4rMWsPJNyEkBTZ32rxgyA3kVnDy9meWLA6TF4KuYBQieYcLjk",
  "key3": "uPmpPYTXXp9ZmCdfsoMYgmvEggGZNU1cisQTGmkbwMhU8AYEmeopB6XpPtyjrtZdtfcM3fVFpVgb9K69QqwmsJq",
  "key4": "Mx68p2z7AA6fFcPN6HMR4MT1jCLzSwh6Q8gLYd521D63JRTtaVqjk2kGt4HnGZExAzPLdaUEuyGL3eKMf71gWwT",
  "key5": "4vXyQZAxqc8kp4b37hQ1H4W3bFEh1PouqYWPf4pwBB3Azcp2QBXTHzGQe3UKjLcbmkvVm9HyG72H32bTaP9YWzQd",
  "key6": "4U1dHvKVYxFKQn5sTQcFP3poEuB2CzZmthLyYChPDaK6hnzXLyTSfeERBfQQ2rEvwYYstaXiuS4623Jy6yqdYKHB",
  "key7": "4baVkSzzcgLV9AAgxx356TV5DvUyjux1hnvpXMzoKDP79qHBxDGGFWqrBwAvSsi8PyZyBWxCrJNPiZTi7hg8hQe5",
  "key8": "5BqiscziWXVqCyBnNah5ho7sdP9pRref6BhffUH7hAsfEFfm6raWwgTFCGqePzYtrwbiYcwxnjGBdEnT6gu1WZMq",
  "key9": "AU5MvBwPEgDaLDdwyTmsU26DZEqPpX4711HstBqV3sb3CqNzCD7EunjsjqFsjv1BwCmZcmPSihqhoSEwJatjZCD",
  "key10": "5aVtsqfFqMZCxE38GekRwn1NCii94NU6e2ezZtYdsCxZLDKYvsEF2MyeKU5U9ogo5VwN7LdgaSVWiNMDG5HLxTBe",
  "key11": "55sBDJu1jDy4ai75MfsUXKfaYFwRV6XU1NyewdwTsH5rtVJ4sepBvfa2bHvSaNfFBXPyomTohQ9uSeZ1FhS29jBY",
  "key12": "3Gqp1pVqFmeQrcmtF2uEAdX7cEQ5MjR6o7KXUSK9f6UaSk57XL54sVJvwNC9Kanq75yTgtsMXLbhR1uxT1yiZAsX",
  "key13": "2J5rnRvwBXntZMaCgQvDk8ksVgj2pzEdaYtGU4DXnR3e4nQptPzEmmobY9hZHjXSmT8BgNqfRkvekAofJLd4JNXZ",
  "key14": "43j5k6wtxmMzj3vtmZiGVb7sktRZKuupHgiKHQ9NarBu8QB8TCz7LjEBwBhMMnoQGFJ24AqiufaVYRhCSEnHm4tZ",
  "key15": "2kHDtVpmt2B3KaGAshPqa1zZ7EgALpZPEfHoiA9k6pPdbryvxmHfucK1suk6UVn3fdAAKdcCEXuxRZet1frv7dhM",
  "key16": "2jbJ28XPW5P1oLfnE3XgHpgXHE39gar1VCoSu8if1HFi4jLS8chKvgfDyAWrUu8uPYVMAg4qrVCsX6GmgYkg6WhB",
  "key17": "4JCr481FcPoxAp3GSFnNoTqFNSxTYdbtLQANZ7Z8hsaPhunTzBtS6oMm6HgEVxaXxCVQu1deM3ELWti9zg5oQ1Q4",
  "key18": "2hyebvzBJkx77nL6v8Ra5AVHxkjmuCGcnTo9YrjzDwB6M3p93B3cG4VzwXfmVVce2otm5QSwY8y9C1vcPyRmBMqb",
  "key19": "2fxVZjqsTSPrnaaqqi2x9fqPLkHj2zWQrYKVT7mCPvCs9LevhKZYdmHkifd8uaqBypmcGG7q33rS8TaCkLhjJRUN",
  "key20": "XmEdrKzggW3w6J4pWxutPQ1hiUNaFxwBxQnSnzJTLRjmSMDYQcY7DaS9bKgnKvf2o6NyocXgAHeBny8pET4RzA8",
  "key21": "2D5emFvccp1BtKboShagHNh28wVfBWP17UoEy5uiRP4oWWRkFPztLNXpSuegUNSPtPApmwaHJnox6Qj4ZEuBUpv9",
  "key22": "4PWNmmKoVDrX1SP58EuxZJn4csP5WR6ZH4QLykwNsv531kPhHMigMLGHmcmRotXGvac2ambauKBhZ76WkEEvP2fh",
  "key23": "2iG7E6yo8XfvieryNvdAsG3PpGuK1rRWse72kL7hbF9iv8ucdcH6tbZt8qSxR84DtfZJmmDqW8ZxyMxYFJ7L75NS",
  "key24": "44yjRt9etMZDRAoYDoWT7fKYFY3EUvyjMbPChrZXx8Zun5UYwX3QzYWguVtNLHjv8m3WCUwZLShBkCBGyrytGjWh",
  "key25": "3Z7Ja2pyfRSDFWCuuSVbKQW4sQQ93umL2fik9LcsWMPTtdrAySpZKX2wHoWjZsKVv4ajjPh3Cob4cmwy5PdV2S3P",
  "key26": "uxLCpM7eKyu8GhqdHK4zbbk2yPfm9rcZ6rx9DCQZzE9jJix81jSfJQ3Qsq5pqohwFzUgV6HVhjjSCNeB3nfKKg6",
  "key27": "4tKzWUR7Ebvvzs1k13jtHo6Ht63mCZSyucVoECmiCm11UXj3ZpwL6SGq6MsR6kiSD1vXFeU1DPQtGTvmLu7dxpKu",
  "key28": "SwZ6YB1j1gMsf2NecMKzR8ss4mTv6yrRn7fo8KmK2qzFHyyTvMbfxWLpKJEFsDKJSRBvCeLXaaGdXwVTJcHUwee",
  "key29": "PqXVuJLuRE42EZAuEqhfxgoH2obcvMUgyN5GaUTJ6YZ3Aw4X2wVhbvbCc7tEKkd2stpQcB1JyeXaoecojtZFCq5",
  "key30": "3SVeFWsQCSWBQNt8MsTT6mL1AVi1nFMt81R4MoPTi72gPrwXmBrmNJcegszk4UciabyXiYDd3ggxvsPJnEJk89eD",
  "key31": "63DobPs6dLMoEvEvKhqstgcirPQGxhiwhWyF7kc2FbsF9RMFpDSKorAdeWQbHFFDSABgQWzT2YKBGfaN5zaCb5tb",
  "key32": "CkuBGjEBdXSmf4d6AEq54wvWCiKycvTJXS1rEfPhDo6SSRT8GDWvkRiL7AY37z5pobRBDkLfvCfP5UtTj87syAu",
  "key33": "5pS3Tu7PJc1vHPK4HePCpz7uHPLfmsbq3a4ZydcZTssqLrmBC33F1YRcAd8rWjxYCQPLYwZHtUWmhq6S57BLE4Gk",
  "key34": "Ew3EJVLvdpcFf5HSW3suBJ2iu66Y26eiyyywwnrw8igcHFMjYmyidv5aUteKVKoD4xDRPnaYk9Uk7nmhMauWFgm",
  "key35": "CiEPZNePFEUDRz2dPbxbzTytygrzTfJpfBPX2uPWVcWsKbxUFUbpGrS3pp9kqE9CqEEEDC6AN9zgwrMjgbPdPju",
  "key36": "3tX1UR5EZCWgaCUkTgJ6AuHiHYX9tVPpLDgkAqBHyviPmgiavcQTJhXgdVWuu5n2fwG89ooFoMjk65RoWJTyvUvc",
  "key37": "4ghKQTQyZT1APkB6c5nkskV5V5X44r9jRBNV5v1y1b2Ma4eTuKvTW11ugdY6w4ZXRm4STLgHuieL36UQLbwmbVcC",
  "key38": "5EzjPgB7ZNMcyVc3FGGQpiVqmNZx1tYEPwV17KsCMBtpSm5SedZUNSpbyHTMzT2DQSwatn3EkwarYYh2oqZ1yxQN",
  "key39": "4As2WDehSJACLGbZKyiUGxRf59eapF4XfUqVC8DuBLzc1fVqNh8amvySNfiTHN1sZQvR1367JKC1jSSJDU9MH2Gw",
  "key40": "2bDaCM9gBqgW9PNh9ZfZGhhhY6wVtT62LRV5Us5oFfRYqun12f9vCjV7faLw3kYhdTwNMHEtfURkhvo8Svx19gGR",
  "key41": "3gyfg1ZG8g2wmyVastuj1ruLVgmYGkfGdGr814TRTR4829x3Zxqo3Am6ADkPY1Ar88kS5tzSd9p7Fw3wJTJ3ki5y",
  "key42": "3gm2R3pvLSodJUJCXUFuotA89voBdjhkGGEbHT82CQRAcUnr9foic1hZULVH2Pck73hGgXGTuCgjE6AAiStioAGU"
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
