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
    "4qbZwGTxhYSKWGgzxrRbmz6XWBbPKCM3w7hxZqxELqdYQu85MZqFYdks2WdTAxSHcRb546y9Gj3Pqw7tMUJPA6gP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MeKsFUAJ9L7qEDBAzddFdpGf2uH82AVzMCMHpnoQvQqR3rKizNA6L647yJ5kDYEXTAx2zT5xaNUACsy5zEvG9qf",
  "key1": "Xkg1NjySZWgaBEg45yWgRUvQz5aUYMeD6nxYRqmKb5EGnD43e55ZbSgSNBZ81mP4PwbDVKybzhhS7PQ9MnjrQUG",
  "key2": "4SZ7r9C4YCVhgACV26njMi4TfPPig3TQn3EmSEW5ofRToakRdomPzXNmKTQzpXhEwjXqoKjqEfwz861mgU5CAayV",
  "key3": "V9HdAQj5uc69YWBFvD4RsQxzuPYSvsdwcsRGnGdjRqNZmtPDrKYK96vA5pTdvS6PTaue9YYzGHuM53bnAX3TFVy",
  "key4": "Bcc6uLw3xvbUVFKmw6TtNpX57VQd8jq4Jq3ufsZ29QHx3ys1FKK9eyo76m1VEJnUJzVXJLDTmnmuSwVHEa5cTw4",
  "key5": "2yQTR1hMaCKLGQDvuWH3i3jS8aVmGCXnu9LWB92AZ6r5n6XaAEtt4Eat2LzMHiaD8UPFNWw81SPbzpC8rCdFoH2f",
  "key6": "5DrT6wC4HxsouaeHJrpcDcYtiwVjKqncDonjjsR8poNyGb5rkZXfxFWxA3seaozV4tPr4DCz9EDnAVn7mG7fXTkR",
  "key7": "4JDtC71fRz7JSfUYG7kRAqesPhK7X1XEuNa58zFFZ7kYUyBzNkMdjNEvoCkK7GNH1Xj6SjLBjWKvcqtDN7LNqLuX",
  "key8": "35FgQBZAcJLbrst2soBWy8JUJTaRMWwvssii97dPwgPKzKe6kqwyUekzYsL3fW1wUgpy2gt7iotoiu9zrSiXKiyu",
  "key9": "4rMbza2MQCh42vRkPHbqdLLaXxoWj6mVQsUSWKtjeMrz7PLXX24Bv2FQWWuMM7U3JME7iKfrcL9Kr11hQwVEoUE4",
  "key10": "nUUyiBkhmppWWTR7zpSdpuDQELy3XV66ZJdULrPCPdcVr9Bjz5Dny817CpKWT9tjyNejNyBgP1zpa7YN1L1SVBW",
  "key11": "2x6gKGyxPN5gDMpQWeALh3s5ZdSeE81bZDzqZFVgRRDaamNaWQn2YWjtPKeaEqVdm9ffwxJKak7iQxJAsAFUBNa8",
  "key12": "2sRGiUHKidfqZALKk9NbhKgfXCyDGvaqoC12pJbfCRzRSmM3BRLSmJYoxesKpTpvRUEhAyPvB8zjaoAUY2ebBXMW",
  "key13": "3RG3pJjkr7ZGmDWMRdszAScsQmCAUon7sTHUZiE5wYZ31BE7jxKvHHgdP8J27tUQFT38g68USccCwQE4N2zq6Hye",
  "key14": "4FprPKSCZo5jBV4isj5rbskoXWRTFp6UP1MR22y5iVwksunmxk4TmiYapeWbQ2u7DcmAPS9emmqWpvrmesZYw5Ya",
  "key15": "2YGC9rWrnGJxfL2KzBmMreumALixBNfH2cRqjF8gLERV8TsYagY5ALR8FYa9YNKrBQaF2qfnpR36YJsMT9WQSvWn",
  "key16": "57LrLQTyQnzzNNYf424Q51S5KTpTewaVHZHZnPCXvKrh42uGggWE2hsvE6QwJGmPtp5Ke721mprBpF4Ker5X3D1C",
  "key17": "2Ackd9nVK7V89eLvXEFFK5X5APUH3PiZHTM5Dc6dYJYtTGevfQNsXQY4PjEHTSeLc5B9RVdu7PaSCsNc9vvWkzrf",
  "key18": "2CbNE3KJa6Nvu28JSr2ns14UbXAu6jgtef9LPZZVm3QJhXbpm3j1toFpm8e6teLb1Q8tPYQY82msu6aWPDujnr74",
  "key19": "3iM8tjMeGkGDdoVqTcsF543S1BDS5TszjujorpWNyxX1xkQzfKn1zjgtiuYry4s97iMppGtZiJ4u4gvm2DdiqHzz",
  "key20": "32PBQ5qevLv1THYQixVRvgqaTzM89THTR5TeSjjhBdVo1i1SVHdoR2pfgBJeJVTfjVx3S85rwx6jemEU9ENZj64v",
  "key21": "5iYtCwSRdWwFwsh9swb56P4ThrZsEzMbRMJ8bQvSus8t9MGg7G5Z23GRW7Hx4Lq72ktK9cmMi1A5SE75p5ZLp9sh",
  "key22": "52cXJEfwgWnVAhG8T2t2Yg8Au927wXXjnCRjx6fLeJz9rQqccsN6f2iBNhjT5jhCfBZMFHYQx2xq7XQKA5yLSBWa",
  "key23": "WRW1MCEMAuWkDV26dCK1eye2wUvmCwxMWfDc59qKXasuTWQWPLY7FRK1AYitoR9zwbzpB6uGDc5xJn3kcsft5sj",
  "key24": "n9Y8q9fGmZGoSkTjCjDP36Y3N3qrPtgtGJNhL1x9ghurrSHyhZ7JT64KbBNN9NpAAkd7hwf6yowRKoF6pGGL1rW",
  "key25": "4vcL9Ya5s96pL4GYkqxH9K82pePNXp2w26HQqXmZBG8Ne3SWTkLvk365iJukreZdYi8i1p4J6M4yvrpTTVDQY6jB",
  "key26": "2JfD4xfSswFic1NYWNf9Woh6m4wmTk26SZkoWHWs6hJRB6cmEGLkBejW8yvr5eJUFUff6NXJhsBTmTcVR5gmRvzD",
  "key27": "3S8zuELDtqkyX3Gb6ijBD6GPXUVsw5KhicWKAkJcJxRrMbgVLZhYpzUNBUb49h9DazryDEWVyNFj2vCtznXcLQLK",
  "key28": "23KhBeowqYJWs1dGkoqorgfzzz6kmHAHENsTD1DneuZaEyYA8PwmKdVDdve8Uh9jzicYHumk3BVFaZxeTHFVP6UA",
  "key29": "3arafKoqXJQzF5UcQhzfqVcmzPFiuZbLXodeSV5PhRpiRqSbr2LSjoDLyNLTX8Tt43GiGMsauQQvTbCaaBerJyFT",
  "key30": "5Aq43zc11mxQ58MEeqHGKyvSqMCWcexwe8vS8GF6RSCcxfU19jKwPcMVTw6tXt8puf9UimczDNJS391WHgbt5p9Z",
  "key31": "5BQk8fEesp9o6qhLqchcMHz6PaWt7qnHcn71yGDEdzEyWGmmhsSqzpvsbb3xYvn7oJRT99YtoPsWZh6Yjtwg4qqY",
  "key32": "2DR4gCbzBQu3JVXy4TXStNM4bW6ifn6SYiE4qRUqWYAvuuJqw9nF8HzAFLjPnHzNGaK8GugvavwSWmyRQwM3NSQr",
  "key33": "4T3SG5jsdTzcZcon1SSckUBDzriuzLeXJyqhPraaQK474Vjn3Xp67GWcBogYPH7nEx3CpYz9S3jbX9rLa6A8CTP6",
  "key34": "4xYhQehv7ty3hnDuNjvYiMNMuqwG7g4Po5ZSrgReEU5bVGr4VGjuLBk7cRdj3Y8Vi5EK9uPR6CZTmTcbFR2aZP6o",
  "key35": "5XrL8g89EGEYWGYY5aYbQuML6av9HaP6xSg7SkiLG3sJsHPqZmheYd7peAdjUsMKLQTvCSEM41cVJt8S1esifU6b",
  "key36": "3bvTouXGRBDTyZxiCWMCzj8kYhRxTrBja6Qz297qNFU9yx27xFCW1GwoNtkUsN55gPwH5j2iyNK2nJDdDPoouosE",
  "key37": "z6cpohG1TcSRp9LEwfaaSEMRBr7CYhL9HAc19qwuUjxn8h9TmxZ7NWx27TW7W4BsLaXv9kAShJGsZ1mWa6UpbaD",
  "key38": "3CN7T7TtcfG1ipJ7g5dthR13GBW4DPxNcC4GTdrkqtZ3q8BGwmJsL3rQoPP8Gr9AXkUfW4Hndm1kBRu1y59JdM9Z",
  "key39": "5zZKLYdkP51JwjoMkx8ZyXahmpGYS2AUCvrm6RJGsG3JWSvCWaTgnhkx93NfMkt4cXm8wfXU7hJwMHTaTGBUd4f7",
  "key40": "KR5GnbTAozm8bwpVLWUZ6qSzMPMxNnnjzxYqkRPr5QeMa6fe3Kmqyse8imeidUAZLQojE4i3BQb5M2yGMtwX5bf",
  "key41": "3u2jVfk1R6hmqmMhRpocigJPGSGDvoeuCDNb3tRv5DjMTwmh9ZFWQ1DVMyPgCqaj3n6zrFAejGNQVyaGp8rbk5Vm",
  "key42": "5aC9MWLsx8bDXBJhvJZeCV6cctYfdTY4H8nQv1JT8TbhdLhE2fKm9cx9mpZfLufwssD4qQNUEpsKUdxW1nfSv9bv",
  "key43": "5DuFbdkM6MAPbaAT9B4jfTpqM6UW6zEYcm9M5EZSUCaTi4MFBrJBe5F69VEjntGQDqbh89bSSgQhL1TLB1dUUzeF"
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
