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
    "49W7YWHFiGu8BAtEFm4JnQMzMp3wga4UMgWykzdXxf2U23RQWc9PMUKgqC6CzNWaaV9HaBpGPH8TxoyWboo1Xaqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uiD3CmxJzbrXiiATN1wZ76D8cSQ4R9BFg7qLhxmzbHSPvenHWt3krqzQRgoVcjgs5CgBwdntPYVPGzLLBqyzdLK",
  "key1": "49XQbBj97BSzDj7jmzKBvAZoa8jmC5HpFMjJAERMZdTXeagHZPdfLgmrgFp9Fv8Yf7we5C5AAriX7M7fidDR4Ahi",
  "key2": "3zWec46EXCsjWTSZ36eMUux9UPZcNSANuhkqnuDjnHroShwhbgxVyv9fsmVCi3u5PcRTR5kNTSZgg1uvWDQXfrsq",
  "key3": "4Z7vSuRrZRYbQcrBUvaPv7dTvQtDqTpB6BwYaMiFhRVtDqbXxFt5GbGMt22CHNZ3rtQeUyLkn1L8n4UDtxdkL87h",
  "key4": "344A3TNNdCuGT8LDUFkGNZyNanvWsNwqsEFpJB6eohbY1dWGb8ZqizttwYEXQcUPFFgiNHRZqwYFdQhABhHWWcHJ",
  "key5": "2vW1o6ZVeJ5WZ9UQftJFckMgs2kUX6tsmW7qNEAh6b7nPdLuK3ffj5SsicRQBmegJPGLuJLrpNHBiwWJaBwFmZBB",
  "key6": "3nPN8DGqBZSqheJU9SiuXgxm4NbJ1NFU7RDGcrBC5amAYnFrX2Np7SfHodCGN2HmmWEFgEnoQAKsqapjLZ7XSNPC",
  "key7": "7oas5qyYhb9F8uqmxxTz7JkPTXw2kPWgF31x16DUZCF2MfoSXNBcNrgFhaU5KK7ED4yvMgpxjLtXkFF4xoND7pQ",
  "key8": "ftTLoJ4afQvKQcAjscktK8P2Ar9tpEnRNickgL4koDsAbtAdxpDExNjkFzjdKcimmmsa2Wsbv7pPnGT2Vjg8BNE",
  "key9": "M48UiZoobiUzP7KyGtYkDBiPmn6AqYSXxjxoeoG2TfYNKvzSQU4skq7XdSVH4yJfGy89qbwjsgkjeGjHeozgAAQ",
  "key10": "4rVmcdkEFBrr2ZhbBQ5PFKR5L1QkqwrCKDdSucPi4qYeU2T3R2YkVCMvqaVUhY3ie3qbHVvrFKLHeubkkarDx3ku",
  "key11": "4TmsdZVkig67TpEx3AuVFTLGu5SHGsVAuMmbe7ZFmAaiygtf1n2FqBvzTR6ycgoFc6JAwQXf7ynTD1PzVYkRDmDg",
  "key12": "2UVFCHQVS7UBR8LtgY5waYGYCUYcnfXG6ELALuTgsnWfnXNF7vQJesTrFsM84YBMKCE2JAed54HRAaHWmKyXiwUZ",
  "key13": "55V7LCL5B9we57kwoPFLaHfBUkZqpaKwASr2w1agDqGtHhuvczCk6TrQbGFzU4pq2r7QXgtm5PLM4eHbh9tb86CE",
  "key14": "2bbBwxaVZnZuk4xok8sTf8LGqaNAx1kDidhBo2vZNihfgPoiecY5dz6GbPjDmsT7mukWVxT8vvuF4LQwviVP3GAw",
  "key15": "5gd14fV49YTVPMDP4JQckWo58W3e2SUbnBou8JLjTaFj6GYox5NFQbtrj4mBaS5V6FZk2y5At4Up3Wma9jEXTEEK",
  "key16": "3V9bCxkogEda9jGkNL7BQ4GzGzeCpugE5kDUPENJriXWRM664Q93bqtnu32wTA3msgPLQaL6184widUhrGTB58mc",
  "key17": "2fAap5AhH7kMSZVXNvpnw4pwuoyMSF3BWxjjxDHf8auRwjxy1Smfbs23irUajTwk5H64Xvg5rXHoR9B1KRAbcQiU",
  "key18": "2MrCj85o7WnA4a5hNnphdaHnnRYif8hCusvD1NKKYuKnyy5GecpUcN7eFwG9SHVb8yyt8Dk8kMwMA92JqbUhyLhr",
  "key19": "3rNWJzxbhXoemGxhtRYbguWpPD9AeaDb4NCXiDe3LKNLtJSEnVFrGxSRTyPqXh3ocYbuGvzbQMWiFAcQfb2tcLdj",
  "key20": "5xzUJR6zmHtLqbVWujqS48nKvH6xkB8cQkzZaNFzCHZxjTFiQFxRqqnTW2oBZDqks8PdAVnxcTYdCheqtYQKDbVL",
  "key21": "MDMWr5uLUMQCCYeTPHzJwFSdq45U8DQT2cBLt12wSddehhSYHjZAJvzYse2hCXcwTRnK8SjjP26G6xDE4ioDvSi",
  "key22": "34thkmqryT1jmHutuijneNFviR7WwDFZyvXnXr3pvPi6JYLbrKNfvGNw1JbbHApQM6sV1BxAyEACCnbvNvGvth4a",
  "key23": "2ua8LUocWtwwNZXmu1bq1PBcHb7cSj3Hu6j2E8hBBoRnFxUxuTvddR9TuTx25sncvXAX7z46Zasuyr54WMWEM5cv",
  "key24": "3Raoi3mSSWGWVyfzEXjSP9v7y2MWbm82u6kHqxqjHTZttu8A9Prq6VGzEUoU2KbqB95MnNk7rZCyayc2mD2wU4kF",
  "key25": "TT9M46stHbc29YosT3WLhs6cNuaUBKt5mo6CmncQX5pGDzq4VDzrH4UPU1BpQWzvR93hZo2yyAZkQgVweoeReQA",
  "key26": "2UPEDdh1hwmdMMSqay5Ht2Hf8TLaCP7cNxWiXjRMcwANSopGASij5Y3mLdxR7jLtPnDPY6fGobh9LDtyRhXu9QTs",
  "key27": "G3S5XCcsm8hvV9nQ4CdaKkC8DryDUWrN7S7ftzWP5Bi8kJZvX6mTiffupLCcwxMad8mWKS4bGkpQytHgraiESzk",
  "key28": "3Q1oV6Qz9ZZATFssdTbMxirjPYBLsa1x1zbDu3GCb5rtCptCXBfvNRocZzm7GrKy6GXt4xzQzqnJRBk8QJ5Ym9ew",
  "key29": "wVgD7WtLeHHgKy7U7p44ZB71ugfw5yn6A9Mitb82wMhMsiz3qN5k1Gu5gQd42P3cZxdr4ZXtAsRFg8JizLj8Yo3",
  "key30": "yt4Xets3VHnCdLAA2ACiKNw9SYTnJ6wJbVi6EkcTJP37GxsA67FyAmQ6cA1FEoLe1nNmmiZb464mwx7LaPnGsx6",
  "key31": "4zpM243nusCt3SN4SjPyFz9DVGBerBo29wNhvwnVK8o2p8BqqSNPb76A741qEJ9egumXBzKf5bHbzbPMso1n6d4M",
  "key32": "3dL2qYz5eHKDPs3YdFcPXDmkxFT5zW9dvgb7XL9ERpEG2QVkesi3XxZYWnjC9ESmsuuxnsPJzwq3v7t7QxV3fBEv",
  "key33": "MPXa2fx65ntFQuxT9L36fxMgik2xwQ9eiaaJD4fs1zrbRKWASGD79xZyPEnWNXyY1JEqmCNF7V7uMKPpxLX2KAU",
  "key34": "3oa3Zcexg7phjcBLKCQDHRb8fFhKdytbx1qFvsUpe2Z5sWUDzhDS1Ab51APHx985w4uENftTxV8Yq77KaCv8rCFz",
  "key35": "3HVT2brntSFBiL4XXJReLoxTQS2Z1HmEogGRrRfPCJUMDkRTo4LjXvkkBWazE2YQz3JCddv3tw7XcCYEnZ9P8Nys",
  "key36": "4b1SayPznU3TvepwcG2hoaYYaXQ3mo66Da77WqGy5JMZ7TtMJEPpkei6HbugTFf1wmcYFeUkAEzgPYocXPP5hfC2",
  "key37": "4pVcPZCU71Lxa4PWhTiHFPMDd9MB3zCXsk7ZW5cuGYjwfqwoxXmiJg7bhWJK3hpSAJT2nJWPFKDQdrLo7VFmTiRy",
  "key38": "7tos9DQjz16QtXDmmxy2FPFXHqbZE2V7PpfSX4figkPpxgQMHHmn6aP8tvZQ8JJV8UwiW3RfHaB7tG5zUnejNKQ",
  "key39": "4L8FqawiB2CqRg2P6iUTF9toevtxYr7pvp5vjAHwnNhvPVoy1QJSewm2Lo4hGGm7DnUtQs15EZEUhdnxC8Q8NcfX",
  "key40": "63BTJmtba2CMFpnMJLvcCa6FpfJQgiqE5owuk7v8fqLiMoQkBKJBFQX4bA9q1UwchmLVB5ocpuTJ7Sgg8USHDPxy",
  "key41": "5KFyGfSKY34eRufDAUqyQrCoruhBFb64Y8HENHtsvES1JLqutg6Vf8knMrQjZPQsEkt1KeyKBNqAn4seApBeqSFe",
  "key42": "jFXzXU4XS5GrQLVB6YoyzcZ6eEahVRyjWr8oDKVwnyJBMuTcP4NM5xw7f31HqtFYV15XiAEfxjyA55Coq8r6AxC",
  "key43": "rEGkv85YMtTV7fiKfUeCiRtpS7QomHJCLs3vWpPqfD98Q8wG4D45rfQYBP5kPQbXm4kerZ7UimN8ZosWwpzuSSW"
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
