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
    "4Arvi7JTmqCvTVtnazBBsJnYah131rSyUsqrY7AdyQ6KJW4it5LdUNYJvfqFxrivk5WEF9UTQ4nfsxgz3xqCLdaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3krU69baMTbEbP3gqEpaf6k8KZ9UzBrPnGac5pqa26cBMV2ybK6kEaTfbM3jxWL4CPeBHfWmJZnED3qnj2uRgSxC",
  "key1": "5tqyEwbcU7D7igatTHJdptk7RA3tiuKouomXUegMoQFYCbS22iHPV3c847vqjGm3LMNJXMzMSkMqZZ4v4zM7SGCe",
  "key2": "5Emb3jqvcgaRuYP36BDJYz5wwEBdvZUPDcALS3D57W2HeEjnLATecxMnDzrmrXCfPw1Ra2zSHKx8yUovKCNDzT64",
  "key3": "4PhsDvDLrUfAnZXymppcW6q6NVw9UiHudUVRfCRko1Gha6mW75utEX45T4x52JTLtVh2ZGtsKAGBAobe4P714AWy",
  "key4": "3jRbhEeKT2JYY19XVENnrxMpPZEoNidsphSFrpiCkyYSot6P8rCDymte5T87JFGK6RGir8pCv31PzH5S6ibWxAgp",
  "key5": "28hVhCeKSVAKKxrJkitXqgPoAuB7QVYbXugcysH1FCisB8sseV33PsULQNTHvtHMbftp41Up1s3GfAGbpFY2xCwX",
  "key6": "2bLCqowGcQ2nyivNfZFBkvw7LDb4HuLqpFhySDgw48JFAhJfWYF1JaivR5WjvtEUeZ6chYsBsc5NgZr3RYnMXeXg",
  "key7": "3fXiw291B1hM7rzNDFwmAwvxrhu4zijmfdf7xHJBm9FtsLoBVjsoTucRsSBTHzKcyCA4JKvsYcWRQXpNMcNSr6Yx",
  "key8": "5217uqUP29KU5WVU7S8K1ctcYo2pvLHhQxEgBrVRXz4YYpNWhigMS1yPDtDSJFS4k6ZrQ28ihw7Xe9xjMCxAok78",
  "key9": "5xCJao1Pa8tqeFuhU9r62Cn1cVkM8AtxE2YMvfRMS5wrQjornPcGbCTFYZ2mPiSDccPHu3c5RQAZ18QzMDg9N1an",
  "key10": "46Ba1b1AWhAGBUAwRayCKxtFqF2jeNCEXGjHwUhxdixqpCyXKw4Ybbq9c6L2CiVDX3MSgq4DFr89b6bgYt4xQiUs",
  "key11": "2Kc1igdjENkXpDYY5bd59gbarxMZ4QWKwX4y34oSMsnRg47kP34BwWoGpSXv5AiuWEuoYaai7HjMvR8tyvwqBh5f",
  "key12": "4J8CSUKjTy27YkfhZbzn8FazHddgriwYZXMvARSiPEyVxxGB1ZbAaTPUowsz5pPSS8DHYsBUSv6GiKww2rmsC9aW",
  "key13": "38ttipHb2v9fjcRvX7BfZWaV4wCb6CiNGwzAW6tuv8jqACAn7kVvBCUrXFCzAXYr8MCk2UiHE4AuYqxwAdj8ZZoV",
  "key14": "Q35T55KM9uDf8muyrbz7Meh5SiY8CGdEotQu8pFDA7KDerLRgjnCrnZ4URXiz9EPBquZaNfm6dS3eb1aSPweLVk",
  "key15": "DFTkV5EnvPmhtNqGA4cw6p7v5yV1Avi6ACQUP3SBymDmnSoGad6udN1TheKYBU8tsfFSMpat5B62mPWbcDxtBKw",
  "key16": "3RG7WA86v3YSnaqGhNr98tVWZoAwN1muwkNJmGzPHTcisBQzjuHPQxgaDQGniY6vpt8HJ8jprUWTgdUznrw4wMoi",
  "key17": "5RSds67ranDZynLTsn3eYiUc968WEzGtWZbEK9VphQSRC6a6au4YstZtUyAo1BvVdiwTEkTsVvsbVWF95DK2nyyT",
  "key18": "uVpY7PGyLZ6xkbYDdz5yPKdznMGyQmKvfVM6GkJqXicVve86dfyXuii9n5zqX29kY4jgMQdb6FoHKXLinmhkT9D",
  "key19": "2rPckMTXPwpHAJFwYYG7TH9dWva5qFFPJKRbYPjtChGRapcSDaa3ix4wD12oGubbpxTYipUfJ9QoePDcgrZ1E1j5",
  "key20": "2ZgPSkLkarbA6PECbDxm7Hrun91bjcWrSNFDF14aBfp6UDREzWs2YdiLQvuLzketrXJ5N8pw9Q565iuES72B7G1D",
  "key21": "4B9Dyab9tYYjHc4GZvUrCS6Nke63Rw2dJMs8c2Nod1zbuLqjcw4B8M5Z6KGHGBLreD1qsTS3qBuTQUTvhqscmeqq",
  "key22": "2BtobHxYxcg4miVDeqvPaMf7i8pU5vnZPTdh1rhJyoasYtDzKXpf1vneuR2ZnjFAPhV2d5AcwwVMSbD84WYdFyGR",
  "key23": "2RcUvR3Kz5ojT9fWmnBts2naUM5XGS82n54Uj8f6hCtWQDg79u27qRP77Am5utJz6PXc85iHzoh1LJJN2f6cP8ee",
  "key24": "35F9eKcW28icSVYpzYaB29nys9Xid1cMSnbKbMMvjWmye2rbgUPcL1M5ntNGHG4qV18FJzg5vMYp4FzscoeLnWE9",
  "key25": "3ZByCmz6C2rSsTwrXQ9bzrBYxmCn7m9uuwmzRW9G2AR76kmFf7pGVUM5i5Woh3XYbKrf6nMznLrjRm8VbXbccq5M",
  "key26": "5nas7bMWxvrZw7LWh7agLPVHeAiLijWnowH5kMqDcMuwrUnfbz4RztmL1vuYqAM9gAhgTCgZb8wk6sEYYMr2GEg",
  "key27": "126yJEcnFoLBn5Qo9EbtcjnsqP77Dg7wSVPhAg2nSQu3cz8395cn8ZZR18WUVjFnH4APdV3L1rQdCBVJeQubVTyo",
  "key28": "41UmdD825veHs6onCrStGbz2RCk3qyor7bvt966TZjXKF1sVyzYBxc1TfRt8q3vDJct5VZt6ntUWSfAebN71eVDi",
  "key29": "eS3syaPszZsYzzPu9TfvVJe65pGeTznByL11iBsBDjGW6TKAosxEx49z77bkafmWiUhdQdesXhdBD4m5Lf1LQ97",
  "key30": "R62QimKueLXEGcXSsvvo8z23L3QH7uzDa5zeyR6B94pCwrarJcDRxPKZCwokGQz5ebeWUvZRASY9HhGuqhsxTHQ"
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
