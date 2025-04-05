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
    "3iNCEeQSDK4aTa63bWAM6viNLj17bhf5PSmAUyjCjiSUJWZ5Xw7V3NzJZyAHMaahEhZqKZQjY8rEQjJkkq3EdpEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K9EPgWBcsi2XNze2pP5XXfT2a7E8kE7epD1o4hf7hhqTo1F4o5TiBdiLHgj4Mqagk4JA72sWY4SGwJwL9pQK1nU",
  "key1": "ZvX1DavnoFaRWZSbvTz9mab14rBCbWKtUcpdyLqWKM1erHQW5SYocZFnxB73NGWVMuLMZ4tJnu1dN3uco11pZn1",
  "key2": "5ycJdxstSU55ybDBWsu1DfVG8PHhtsjo8DLQXCQXPsgeKaX7ZEoK5FRwBdc5FXcCrUPxieTynAGPwJ8UdLtvk981",
  "key3": "3k48VJmNJ6DqvKgQ79fUvMuGWsDXpL2PLgpThA8Q1SF4WCmwAQCEqvQp56T5XjfwumHkLTknm2Nwzuw9bXJSqyXy",
  "key4": "3rJfR5eEVbctFxbG9gaLyEsVtWZmDEyj4FXVbRxxrKeJsxT58ZiRRPdXkBNPqB4FsioRKbdsGpeE5BxMESajpkvJ",
  "key5": "29p6jSGw9f8tRKpskHXYbkGAXJdoEqjpxwRUTEcEB4k2eA972yHTthgBA4hwCmT19VpMV3yYF1VgJZTC4o8XLULw",
  "key6": "54oVojGy8YACC9SsoHp25hVBecNwz27nd5vWrqFrQBUfoxPKKpPkE3h7VQzu3DU9yCmRTei8xvfYspJU578GQBCp",
  "key7": "cGhmwqUc4nzNCfat4ZMrAqpzNcfe6WzoxGaTbS9ujBK6U8skw5G6aN296XRiuGb7nZmMJYwY4hhtKbPs4R939Vb",
  "key8": "dSMKD4Mj6uiTk7beJCB747rvDArJxbD8HC1mxo9igUW1wWG9Hy377zv8TMVZ3V5vxWvAtx4HYuywdescRaBt4WV",
  "key9": "5ofQi99BnifSh2G5g1nJor3V67JxcvT9udViiRu8jw58x2qwdjPYndYyjCa1nuu2YHVpQD2kiMQ93x5vrR1oNZ4U",
  "key10": "2F5HM8PfQxMwREg9L7MGQL77BVZr8JofCQskv2qBRrNa9zo7ngAmcVXQTBkYcBYUhHQ7w5FysW8xaMeoqZzjz8L3",
  "key11": "37v6XUmDMoJTrtXMXv2TsAyDaF2h8uQxKFK2TeGcNnFfnXmfSPMpc7yVPpaQdZjZqLwioGez3LsvLrQvNbwehqRW",
  "key12": "2Ao2U1jmSSwaAGv1tuh1kEXuqYcRSwJKNYsmZSzkmM44SFMo2sAtjVTBLFZzJaJdvQTF1BjcMGkeGX6ttDfFXja3",
  "key13": "8v5xuckQ4wCU5Vu17313XeKqu5yJJPgrA3EoQH2U5UK7DQ59ZpRquKmXSmU4vYTZTTJizxfQjhv6c1gjfkMWr5y",
  "key14": "5i9XYqeS9B2de4s7vd6iKz2oXm5YmnqWyhdvNsnooPXT6tDfkupjAToXXhUnjWuJiopkxoDUU8fKneMs3GMCMK9w",
  "key15": "56SapPUenBcYMpK2WW8wm9QZJFUivbCtgJpz1q1thRsoynSiBn2q65YJAp5dv2AZapJyQge1vE2U8kktoFrKJoK",
  "key16": "332rrVVpKKtpXo5nQgqZ27J6xfWNpkzo1MnmJ8tAVv6keTqTyYeqY2G6hCMwPVqjk8c1R4tvH4BH4wzedd37Z32f",
  "key17": "2H9JFAvyW1JJiY9PpTbUcpt6uTbQF2DWQxGzd6Qo1JRMt9xiq18Xi3s5Wi2zfhM9HwtV2jHAimc5oTYFfepjQbRa",
  "key18": "38yeARtsSAvsjXhcDJa9gfhqLCAkvshCnUea6KrBK6827AysM1i3rbU2zZpwfaDK7G6mcUXJEEJfJMazg4ogUNh4",
  "key19": "4XPVfngBQTjXaWtgtctHNrzQbH9ENZCcoSTXhbzWvwg2mj9BAXoY3vkGjr5kUxcZdotPfKx9uAbt572LwAUSTi2",
  "key20": "5sZuT6T356XXAiFTy3rEiDK8Chu7DvGdKt4jCyfK2qDrH5xJtAexV2sYGywqUe1y7vKMKZ5cQbvkbLQHLBySg5dP",
  "key21": "4VRrzRt7Eo6VQu4yZhNGNYg6epPSQNRev935TQ8sG3VNuPSatqWRXmmpxu6dT2KgjmC5MafeFcR7AwANdxPvJqWu",
  "key22": "32pSakirUtNL7kvJuvpriosG3wsG25GwLJcAmuaQ5k3WgmY5j8aWZ7CFuoCZcbJ4YUuHpkCSte93A9GERqHJyY72",
  "key23": "2b7TqKKBWcPp4rfERmKXe1Un9tRwvVCGVM8KVFo3XuSxmC8E5GcQ1TJAmwYgYsqAZSNQBgA1Lh1qCtY7dv841kDr",
  "key24": "4P6TDqhi8LR5yih9dWvJbQ2nAMPWPhvGNaW67HVt8tf8AiTFfW6bM3tt3mS17DV4R4yBtiBEKULskNG3BRerviF4",
  "key25": "2L28C2JVWKzqH47Ey43QkZHjGMEWrsQ2upcVaobxSjkcyVMV5GPLHJqayJSkxbFJPPM59XEowbuPY7SRiDqRAMHc",
  "key26": "25nLR1GfdgkgoMktRwexe3fH2SazJtgy7PLdhF2pyMyir79vjXETHE7yLpQYom4vJ5ZQfzirt9hDKqsgN11zt9AK",
  "key27": "4ZSh8QvBhiSSwZLtGmA674MqwZf5F6NT5DYjjKWVjSqc4PHkNnKrXAf4tHAQQrf77S8h8hGfPcMEVVT7td6zhWAN",
  "key28": "5pF48b2bjqakqDNvxzS12M6eeVW2CvBHt8u3Fmt1K8WCk5avtfPefwCGJW6bfekbBD2NpK5Dn4zpTAdsrDAFf4mA",
  "key29": "5nayvyozepWr7EjWTwfHSMfvKXxbbCtQzrzALEG6evd2LKhxXo9LYH3kp9qcebZD8XS3XQiXdYgD3nEu5UHpB5Lh",
  "key30": "WPnkn6tKpZ1tn5Bv3gHrdx23X3TCcCGuype5SwV298G5cxKrsBUPPChYyHBuwTnbBJaju6HRMPcrtZjdxH6Vqpn",
  "key31": "5FyfLaGtTySLoBJARnJDidJkP95C92YA4skRvhJpxsrfpopR4dJJxvpSoFsSw8JU5cNdtm5CcJF2E7hVhS5PBRrj",
  "key32": "2JsB3zzwGUomxcqbNpBeXsRd1mB6M6rKccaxJWA17VM4fkdfomtedc6A5abjqrYJm8VVnu24aAxx7Yd5gDS86mC4",
  "key33": "3Jc8Q1wPaJseDgLV3tbzKyPQnNh532BB4XFoKqsEtKL8af46kX35Fv4Q6CpzT9P943DYL3qnjTUrpepW3kFXZGmq",
  "key34": "4iH2hL7byqfGtg9SGeKaSXSmyHEpVghTvmqhT7wtFn2AJvNW8DnZpRBRXihaud9iymNpM6YeZzjyJrnZJux7VtGQ",
  "key35": "5MKG5ky7EMY6xoEVt56KobCnkc8KMXBEsAZMQ1RX3jMY5g5tHDJxBSfGBJ6ro8bHm31Yy6deaNuMWYyEEwRpWVQ9",
  "key36": "2q2hFDZopMdYB5GrkHyzAGDFx1dsVShctMLtVn1ugQWmHzG84SEN1bbrSJ4gwJBaRcRsx8v6ygnvVuirPvS7Z1DR",
  "key37": "2aSPL3yT7mvcSod2XrASnPSHrMLk7aiB3kNwnC8MY1bUZYLgVk7TzV5FDBtuYfauwc5yTuJDUofLrtm96fFnshiW"
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
