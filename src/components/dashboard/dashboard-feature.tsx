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
    "289JJW5n2qqPyqycUtctL9fCWM1Z4pH9K6M9PvHuqDBXMyKtPgvhs8sXj46onrGVnFfyEViDXBBXPc4m2KGVPX5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i2eBZJrk9ekXYv9J3fkwpgJeToUvcfLuuKrAB1hG9Qwci3vs9gzkXk6ZcU52QeApPwY8zobkvrRESy7U38bzxzG",
  "key1": "5jns776xXdm2arFmT4hq34A2annSZcxADQXYPtyRteRWdFdFYixRKKdX8WoeUn4GjDBvg2SnDLrUAHkNpA7krtBM",
  "key2": "2bq4VQs8Rc2EyBVqtY1VXT8bHKzMzjoYiPcdY5Q9ivGwPfhiLpcwcGiQZAuBmzeuJhUCRoLU5mDJA5hQ7tTmYtqs",
  "key3": "3EEq1EKxo1k2776RXyMYGWUSifcyf5Y61Wyyf5f83wuDBcA5KctdhjokV4NzM5Bj2uK7KMZwmBBUtno5kGiFQ1ek",
  "key4": "4tfcTwBbzwEaqEfh9kdSMtsXxwfwQbnfMVQZMY4zptdiP84Ljc6SXF5eCD8k27AAb4dpMGm2sEGazutHMzX4ktiZ",
  "key5": "5k4SxNothaNfnwK9FHovwbWwpvyS9GmgK6VbHGg2TR2JPSmSzfCFRbWf47ogqqztdJy56zFvtVgfoSUiikiSwVrG",
  "key6": "2MWbJBjdAhczpfZGCXkd4DcAwd3cdwcdh4TKfuHJURBvi7wxPiU4Bio7ZSA3F2PME4zaVACewtoiBC1ui2LqasUv",
  "key7": "3fXxb5e3oAYPw3d3WqGUfvKxWPn7TjWTrDwQLjxPM2Q79Niq3bguMeUBKreaWzvjQiVazQqVr1rPT8xzvdhRHEQW",
  "key8": "2UVW19AvNU3smzifq5hyRse1fQRDbJmr3QC9VW2zU5h8MiVe4aLh1Gm1sjYn9DEgqovwBhuPKD6ot9nhQYY4ZggX",
  "key9": "5BB8Nk3E8e65x2PKAGgxgvEGEgCpmKVZoWWu9q9CHikFgurxnuR1BnwrgzQMtySTScztNE1XgkTHUn9uSNiUHfgv",
  "key10": "2VZnWpCqbDriyAkYq3sdDicQmu7jyyfLaQhPeemn5oh5GBFUk3P6QzXjrf3Vx6q9EViadatA1wx76yPMYWuULZX6",
  "key11": "QvB2oiBaLBEt9YRecW2WzwxrcjmvMmrGaNtcHQpj98DpUZDKHCChUwpmBFAF4jiMk1F5YQrUgA36WJ3d5LTVBuJ",
  "key12": "4AXXzbG7PL5jGrc2MytL2CvXVzKmnHef4sXnitZEiH32PnmUSZMBDXQSyXYdhsYbeWybBi3kJKWDS5ovpCMvYtmy",
  "key13": "BdsZ2xnMp2mnqjd18HAKG7d1G72GyMoZXnzwdxM51TrizFp1YjopNz3f3QwgiYge2jthAPDkTAAEYUsRcEzEkMj",
  "key14": "2o8Cmdach95UFSRHiucfJHWrCjdgiExHEKUGW75y5uZ1dQJbwnYjazpV12Rd1bjW8QTTUHomUCraqK5Wwr5dDYnL",
  "key15": "2JUkkqaR8q6tn6tWuoNrCP2HFm6Kc2QSifiRZd4yHV1ofLhxtuRvsh9pDvkBF9ZUPrTn3GMf5NGt5z579VaW2Xr2",
  "key16": "4WoB1TVgnE3WXMiHt9u92LEcUGDnLwJcKvJJXDvf1DSw8xx9Hc2H5DT7U4dwKWzDGq53ce8pjXwdxMw3oy4RHQAH",
  "key17": "Jsr2NgDg4GoGhLAcZCtcdUBosGCw8opqg7BYiuJ5UcktiejGTJdfZvcYkVHaBsAacwspKgemPnQu2fLTj2GbsLC",
  "key18": "4eykuvqg8Etepm1Reico1R1rCXmUh2TL9yQVTdBzhmHpQ1jQqnHFB8XWbLfDNccy4QEQiA843iNj6rrLF8rn2Krp",
  "key19": "4FwuUPCQtAeeo2NTWsPNSQp5ZdHmQoFhUzg3T6Syjp49F1KvuaxwY3KDfJjnzbkQjTyHBMu1J9TSUVtncxyXDcT9",
  "key20": "4hnvwCswiXswzKTbMr8XjW6Z4doS7GyQS8jKmi4DsXUSYPkAXW4yC96XbfUkZb3jAfS5kT2nC1H7VDzkcQTh95bQ",
  "key21": "2cMJ2NNyqwWt73Qz1MdUAmas7c5YsatzUSELh16Vfs523vzexiCm63oaJSDkBqatKjxLDBbX9v6Q5nDXVp4ox9JS",
  "key22": "uee217u1mvNHCdCnokTbnfQiLcHTgJuGigDP5J6DDjrQefxHQtA3kdHRGeCd2vJLeRjsE7FkH1pigJviCft1PRX",
  "key23": "3jFViibhBSADijvaLrWySV33tdumReaLJCR2TNyYD9PefRAK7eeMTUTt6znYQWdURN2KSAQNLVRQUegFiWR8UKmP",
  "key24": "4DZcBMh8gAqF3MhmfWT8RY3FM47JxKT4dGpPYStRLB3LkzHi6kojGjZYiKiAGiNnPBATkyJiuyJcfDxDus6FQv7Z",
  "key25": "2WXd3NCf7QcZLHqgHw5EAS8NM8cBoPAJnAHpQy5wVFhYxftencAQksLNFenykcCAp6yGQavStJ2YiKeoqiUneiun",
  "key26": "xtaqi3DdUXXf89i8dfHJN8BVfHsAe7iizV8aNYC5SSTgGzrjTs7UjFoiYnSEezNyVWPGtnCbvcHLN4Bw5PxNULB",
  "key27": "3WFFRYXwhLVC6rsmkdPVEQXFVgFkWFDmfRpg1JRzuooazakPXmxnA5PgSN9JMmSpWWJLhKfFowDgwaksN2AR53R6",
  "key28": "35QiR2ZscuGVgTMMTUtvoKMDMdkBV9o1onEu9hwLM1SyyM1MCyPBNUEEaQg8RURArp3UqDHLKNyTLrK8GSyRzxAt",
  "key29": "5tqcjC4Rx2UFrTH7YWqn7C3nsHkoDGGD1hUFfPRGWb6JL3Q2iWFpbAYL41gJG5XLKUZZK21GPA54zAKV34KpKCCk",
  "key30": "4PRaFCUr6a4yBzvnP3dW9p77A7psYec9nPNf8T5aLxnYLyp4tWBiZm99BypG2Sct4xLsMjahEwnCjbzZkmC2MuKj",
  "key31": "26FiJ4bEH3QpAjhzFGm1CnujYgifVGxhjKG8Xy7UvLmLV3ErLAjX3rhXkBZ9oVgDo7rfjqo9WmnmwsJSVSt617dM"
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
