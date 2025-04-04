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
    "37jS6PccZXofsmoWZZFCMfrSi96t5VToPJmFSUFurfTZvyijyrs8htPdDVZ3o4dkraxKqvJzuLBiTvbv8wRAuTWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4irWLRUBiCTgfULoonKyB9JL78bjwAexbmFuxSQ3ttGPEoR4uD5bzeDnjtCxP7QPC99T2Kh9TjnVH2a3tmYUm4yq",
  "key1": "48SoU4mB6b9LQbcN5nW7SawzmSkB5g5noH2q1xB88RcMmx8y9YYM8iKo8F1KgsjQ5jQPzMuUFyR8YWVjcQ1AmKXQ",
  "key2": "3hkmRiWHsmoxDKefNeacQvPq4QDzPwa1eWdeNv8r4yU3AuUfjWrDb92Tf2YaW99BibhhoPF5cZGj4bDdqnuf54my",
  "key3": "4LzZ7TJNckrQuytup9GqYJVWR9UWzPh2Y3jc3MYALAT4yYEA7KBeGt37amK86btL4kB9BiDM81VRKVSyPRvJUT3K",
  "key4": "25oVoiBxCnNs6GDQjeipnuA1hVMVCGjWQsuKw7RJoLQh8S7QLDfp5aLFgxRPHYrAimiw5LsuwZnZgjWP9YAmmHxX",
  "key5": "3nekBxndxozFMa6WaHMb3guqnUvqTAb73MAMXJvfgH6iH4TTtXTdkrspAW58gH4JGiGZ3cYqwMwg7pEhgao6LMRM",
  "key6": "4Wbhn36j5B6NsnAhtRPV5YW9GZyaZupANjN6TdVdzKV5cRBVeRwQ4KhxTn36jy4baHxmsi6hMuyhR3RT8quWecnA",
  "key7": "3wt32B6meHXsg7aCzmvAZyq3kVFTUnSFXwhuesb6uusj2TWdFRJwLknCvD7YDMpThPiyNAh8yCJshduHm2cVDbJb",
  "key8": "3ym6WgUtHDEctzURkUjyUWkLoPGpTKBhH9JtPReyuGZWEaPz2kA3y8Ck2qj9p9yhJLR7FFp4FqYuUfj2oVypJSww",
  "key9": "3Dk8UBdbznqaEBfDD6PyhVQa4wL2YQoDte5dL7AxJXz6v95yj4bLQNPSKbCF8tfygEpw87jk7awezZYaiG3kMGhx",
  "key10": "vgTTtYD4jcGA49FEXRAywshZDm3363kCoUYdwaFaYYEb7TnpFuNvr36SvXae2UDRZfdYeUpyQneLz8RpQ6CbwgB",
  "key11": "5tTzUMwZR5aRAceuc4W7vq2mHrW5V1JpmZ8QVMjmu1e6XJoTQHintktf7VJatGEkfqRwqPc4jGNxJT5atsZBafXe",
  "key12": "2W1qqsqCaRWF8N6wiLSjSx6hU2TmrCLa17c5v8BtDEVthy3dFSpFy4QZZo4JdoeP8c1Y9PjHC7HV53kUzcNQpYoc",
  "key13": "YtLLKDtZRW1QpzZwh5zBNarqiQno6axk6EzmTWQYfChE8zExb4YHfto24tMdKVPJXEtGSqvgfLAKbq7rej4aJF8",
  "key14": "5Cmj8AzYKFHaa3PCcStZssQZqPwr1JPc794z1RjjZ7SViDaUWpBRZttMZQysQSeXJGHk7Hd5PARrRU6QG7BAeQ2M",
  "key15": "5ArButJEAv9AshfVkt135oMa3X28rMHoDod2Sg1m74PF4mYFeaEczvjc95EAjEn8yPK2bN5gYzEAmm7JwGVNreQV",
  "key16": "yXG6GjcEYNT1Sa1UJpWLBMuoyeiPwQif3ke2w1rLKkeEiBmxnKBgGxTQodLo7GFTya2DX8R9BwXK3yvjRfKuGb7",
  "key17": "5MUNmqfx95ZW6MCTKGKSHzPws1qWKBrYziiETRFYjcE6pp519J3dbfQF9cVu9f9RUvwBHsPVsLkmJChpNnQZsnF8",
  "key18": "2i3jLC9FwXytRSgpigYRCPgyLXNUZcEQ9jjn17gqWK8PESd2dv6GgjjprtWLkJ4w9fL8Qm1FUUZifREXgmMepZGo",
  "key19": "5Ddu8qSfhxU1FJtYmc5eC4SyaCJVujX7CeCsZeqxoAyzmiquGiiLjvGBaxKKfaRqaJe4stTY1z9ycaJYDuxyZmwC",
  "key20": "4HVuQEJv34qPxNf6jj8HvdVgqoRcbzCn4jgzAifyhab8mV9n6UG1TkvyjZt8AtXTVCPzfApZYG6JMmgugn3ddUa2",
  "key21": "eF3AqRiRVpt7UbwCdtuBbGJQ34aqNrD2iaubT6xugjVh4TZZ1t7o2E7R4KMF7PL3bi8MRSVf7qCKmqRnFAGxxxn",
  "key22": "3qh1Y565KCWmQVnz9ZD8qebjppWs9NJHip59QgyFAxLRaiTLNqj8676jXiMDfYfnGYo7SAGfCA2MTmwwvfEFCpEs",
  "key23": "3VXxabwF5CQNszDfw2FBdmegXUSybTBf5P5nnxyscXtbHp6rPCbqYNufcDWTPVXjCA1mEe1UqWXusSw18ZSST5Xj",
  "key24": "3VK8vFLYA7MfbdEouhpDxY1pahEWUGdtHF4T4kCH2f9soFr2jKvdVarL8o5BmzK694ig3JbmTFNs6CdPpxKMXWWL",
  "key25": "2nGHrggje9ddDUqkr7tA4s9SqkQR1KJt2FmBJXR7CPvTCPkRSsQU8VEgqE5FhNkZaXihptFN8cwDJH2v8EVoPnB9",
  "key26": "2oMyssqKLkZVFuDY9MNupTnLsQSCw9jY7nEGhfermfTp4BCKxbJXGPEofPk5YYrnwkqYXKxr5bxGB67TGnticGW2",
  "key27": "2AkZc1oHTMq2HrthcpwwQrHGyQyoAUHMr1jzjEzocyTQ8UvhhEwvfNRsuej2tvtjA4wdqaGCW6Dctg3viV3qAvx7",
  "key28": "26acdRqGPPKSdwsPnsxhAb5mGe2jfWzkX5M1yxvn2d8Ucfuvx622Azep7AxqtfaKCHrLtMsyMVvrA6peaFT9MAxK",
  "key29": "2tZZD5JmsvaNCs5cmRurqS1xLVGAnq3jAuD9txVuRERzY4dkFfx9aC5rtDR9A5qoat1PvAouctdPdsz3NhZetoXU",
  "key30": "5fGTCjyt4HBZq7Z43wLH1EbWkKo5GdCsnoN1zog4nEL1A59zYua3g67u7vtnS8ooiqUF1qEGr6VqVP56dRPx6zdg",
  "key31": "p9jSixJbPuFLzxy3JyLUZULQcsp8NdUJQCXSX28CyVfHo6TJKAFp8M9gMNjouXPpcSvPxcX1wB75DA92ovpPaFM",
  "key32": "4USYyDdcFmzCgtoRhAoBkXGy6w3hRUDiN3BWgWysGYXYd8gYZKdknvvDCzfWhLaau6szPz3mmmYLbCiWBuomeNiX",
  "key33": "Znvmf24dqtpEczLGczKMA96jyCvZp7AAgrJv8ii5P1fe84YboTvZ3Be9axfzDHgc29Xp1fUbwAsZTUTjKZT2tPE",
  "key34": "3GCxeYthV9fq6QtRqcT3gs9RgfRSoLmWWogQeLbcfLTgMA99mNpgbt3rDR3XvdrDqY2cfNq1W45kq2HQQQAEsJYr",
  "key35": "59ixdJiJ5S33XJFx8Z92iiv3BtrKVbWvWPvNAEpP8wTdpAiyHGbt9JSy1McVzFP1CWDEQTcxURdmXs232B5grK2M",
  "key36": "4DCsH6ftCULusmNgVouPg9QRnRZKd7R45p8GvfDYq9F9M7Bcv8BmhYhFhRfeDGDJhoAZG17RbyMQW17NqcWoizZa",
  "key37": "NRM4BiSpdYvs5pRZN7LNGAybQ6pVtneCLZrehyqxiAc8hiMQxm5xstmRHeXceBercMEiULCj3wkBR213dhcaet5",
  "key38": "3RdLBrmVNCDC3p7aoaWN9ughXp3XfUCfm98RCDTENKTvDs5g3VKnCGfA9zeRcn6pixLFuRZKVBfeTAui1tkFUBNW",
  "key39": "4a148KC4NCNB7Zk8KG2GXHeYYU3NbL76LEDbhyGaqsy6REpmFbUwJCAPQCj2ZqoeM2oMAoVai1UzYgHDwL4W7YMh",
  "key40": "3XFnco5ztNVGo2ZNqH18aoBfBnUWmzy5HK6DvkcMhkz94h9AUnXqu85PGUMmZx9YXfNn3uU9MP5VmodRcZZ5CRJa",
  "key41": "WzAMvCwRmb6d5V4foymH7uHtBTXpnJC6uDJoASqmLM8ueJDPws28W21J6JpgFfG3k5Cs8zLTMJ3DjefrXGLFzur",
  "key42": "emaqsK8ZKzvZz1q62R6XCmyRqM7WqNGhAexGzgnV3Zu6j8Y2iqaqeM7TwqCMX7C3suYQNbaGiyQmvF3hrujykXx",
  "key43": "3FCQpQH2SNTQU9nPdVHs9cdSGHTaQTBMMz4ihkARqNdj5dnDWBUF5HK85XhkwMuvNgj34oGdkCq8Kty5eHEDKk9S",
  "key44": "3MR9tkTVYYh5ue87B2a3756EpaPGnB51hE2Nvgi3w1DdeMXSFecBhCoFSVYkBFdYXsuNHSLcnjXek3agUXbkpxjG",
  "key45": "58uPS7RSREjXxZnfB9AwMiiieSaob4u4GBr8h8bTMfQWwhmXAE5AymnRNdSHt7U8Dk9Xw46nrYCWNKPgd4rnyMUe",
  "key46": "5R7YiwggWANbS3yWesVFJ1ekCGxgJBGRBGrXW1XTqfETcqYCkua7ZDbEEtwbc4JNCQ9R4M8kcCFDjWJTQFQarMEe",
  "key47": "2Rwh8HhAYd6nNHZJDSJLumU8qH7z11U4ZYFKHBpWeHvgoyTJgEm4FUfGbCxr5nzi7th245BdkyjEjmbBczfufTtJ",
  "key48": "86hkXW19s5BAesJSuqHhjurXFcEBAPPfho6Hz3TYR6WhyPw2sEwCrfsGNQxwsHKLZ7xzuzeZf3EV38C8He1RX4x"
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
