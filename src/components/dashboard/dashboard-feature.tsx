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
    "XhYgknv6PHpeEjZm8sAwChwoDqpE8rXHHwvNXSDkga9kzUzSQkqBajZPcNVE1hCHYzXYyBMo9NWtj7BMpWwJ7dW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HL4u47FuR8wFWzkR8sJqoGfm5NkUA1GheGE7n8uZ19cWXmS5zWwPpsGFXS9a6NNLzuM2SjjWRrKEw8RxDgppt6g",
  "key1": "4z4JqPeAC6gHrphc36qj9neLJS9WxUy1UaYVtPqPrR5vUFVbFeAtxygk7TkN7G9Vs3DtaG2EBP4p6DzbAChyj66N",
  "key2": "2qek7KzcjdGZzpqcPwbJVzXvtMzkHPkaaHjt5JJhaJXvegXuUanMueGKHz4UzY4sd4SL3nadwA2y8wcMGYBrTRnC",
  "key3": "4J5WzVEtHrXeBWq9Ve5tj8n8oRxm4JDpFZNJzRrvMV7oqpQW4StVuEZrwAv1Y2X6eytuQgXKfEpYHAzhDvRqXRJV",
  "key4": "34PmFYeXqeta1zkWiVCyANJHuVde7xad3X5tbCqhj7qzV7ywKUTCuz6nWpoFeEYBevrk9HpBVQpeVkq2wtSBgiUu",
  "key5": "V8vgJFnBU9Ty3JpueBrKFRMShfW9hApUtpsQchQDhP32QyBXtiZP8k76J2taurVo6pBgBg5HQBJE3erwJPLSsNc",
  "key6": "4Wefihi67HyftuXEh4RRLgiznaK5xkHXhHxwp4ruHHiMcN8hLRDkaqwFSKbX3kNwjA9ZQ39bw4KcmpwRWw7FGybY",
  "key7": "5ZnL83DZMrNn3SbczYsyxsk44edeZUFHKjAzGV8SQdU5YCUF8VuM5dJ61HPkRYCjpFsn4UEhTVmms4mg67gSgeKt",
  "key8": "2HNt9Xp3AVBhnMapeYDfycwu4LWW8yvR1UgE72nHQaDBhHht2hKaDbhAy1ABWEuSEhPP5UxQaWATNHpMGz54keRj",
  "key9": "mcU4ysCTFWv18LAh27k79Hsvs8A1wZFMSxbfUJbTwNv8uEoXyvLSYJNqw5KCYc5YG9B2DHRmLcotbubNRgbbqKv",
  "key10": "4jUUivSiiwwgVjkhxzDBo3bvr1aGHmTAEQ2oQC4PzXDf2eCXPt5JPYoxfTGMZwLiYt2fYydzTn45MuBCMK6MdcmB",
  "key11": "3o3gkTnzckT3xcR5b5pXUoRR1uwGnn9KUhexS5dDcHJ8JvW7fCSVeveiMEx6iUJSEo73WRsySpSYdrpweENGWnAK",
  "key12": "CUfm3NWaFbLcSbbVdYLVbnSBHPBKM8UJQgaPf6kGbhwjBVeAuFYf7HiHC4FHr1X7Z9DKUAsfCrXCQsMfw1qfwTv",
  "key13": "3KzsJBLMAfpS8LkinjbTmi2yuVMcUKbHTpqbFTMUyZwaD5m1qHR8V9midjcQgvoXgm7LNVRupu3s7naUURK4mnU",
  "key14": "27AQM7HoibxNP7AnU1LrahbFycHxKjLJii9cbU8TRcM97opdCqftX2WiigtzH265Gf33ogpc5YpjUPirf7Qq15zk",
  "key15": "2tzPD32Mqu6VawjqTZwehMHNgWsxo8SHggRaH9jgL81D7bP3vwhqYfyM8VocjNWnhAAsEbWeeBCnQwtGEK4i2qzt",
  "key16": "2H5wBYp3nKosP1yDUcjkybiki8xPVxafUACdPP59hgi1HsRkrNUYRdXFUwy7JRQMZeA66wgT4FntwXmxZCiVycKW",
  "key17": "f3YUmfJxmZGcj4HvbcMKGpFrrAMyKLiGxWPaxHsFsgygBKzLJnFQYycPHPEeURcRMw8GuYPdLnUxhqvmKuKu1ks",
  "key18": "kbbyv6zdCdtc2e3x2tbgdXksqt2PQUSHfFe57fMjHqCbpRXwaBcF8bCYSA4KTfvHVcoDmyvy8cRJP4Ds1kdXboM",
  "key19": "SfNA48QY2QgDd9XQp8V9MWep9GvSKcfL54mWZmZiaTaoJtC5YhpMDAawsYVLYu7rc1q7SFamrmZqTFhUZ6wujRp",
  "key20": "2knSBHC96ACEaDanT2MS49x7TFj8FtReafmHe7ndZQwzi6hFVX3VfXg1GptbvU7rh7omVGDqwh4z2Q5VRxGLNacg",
  "key21": "AWhPXjFzNvrFn5uFJfR3jcp9NNgBwdXG6u8rgGqQ39FkDbjkmo4Jqxaut3VQmbHKoU2dAhiraweBwmJ9czqohnd",
  "key22": "3krVEChkZNHgpqvJLteAJsjMAktQBPxer87npkhvkqN8xJ1P3LKey8yf9J3yCaZHojg4wMeHSQAiLnWxWAsJnDbG",
  "key23": "4a9oKnS2gkBFb1ew4hBDShs3iNJkxfUcBKwBD9f7sKht99Yi1ma8K5EYsy1Pubpwmon2ddXCWospDsjVdBrTX8ci",
  "key24": "2krUq3u918gY6cbh78Hr8Pq3z9R7cBjjyA7nTzwsCcdE5FuqPwCn7FsN8KdSm4MUJpCG46RYupZ3woPf5Ge1U8Qr",
  "key25": "2F6YF4bDf8r9qgEtM5FcW2NRSr7VizfoaNaxUDfjiMSsMHxDoBVt2aPytQTFfV3cVr86UC9oh9YjSsMc9rAsFgMs",
  "key26": "5mKLWZe1mEEb8r8WqbMnFGXeMAeHdNsXuv4p8iRrv4BAJyHWNCajvV5fqNobLQhRR4rgJp4HJCd3JnPTx5ZzTVYa",
  "key27": "4LC9ACZ4rTFY1CwZXmUuSJpdHmpyvfEG7897JzeWGxofPpfpWq5QLC2hdidw7DY25XGZb3o2eRn4vqD1Ppz3acNr",
  "key28": "4fLGNLX3ZGHXBVH4Qn8Fc7ixHSFMPannkQGyquSVH4pe1hGP1JSmatU8m9wbdMpMDVVfXdRf19PDwDXgfwNMBjQF",
  "key29": "5HUX4nP8i5LfhVtBiRYvt4zQUFJ3FSZa547PDVrzuzjXwZJdhRefnm973NXSiKAdbYDvtqd8JMDtn2tdm5gcxto5",
  "key30": "4KtmrwpSVw41w7A6uBCEQvh6sJS79b88kzHbZPVigtZSQSXJEMrWg17TiNjbicq7csMoWZz9knGo6AQ6qSnNJsvW",
  "key31": "4NPq2kazveANbKTzRdANrmVToHC3phVLqkjciAwydi1Kw4sXJsRpY2HzUfhrUGSiD2fd1i2nQC8gGHKEQMFfMbaN",
  "key32": "3krbigEPdYgFass1A3ajeP4D1FUrhKCuzc4u6kzJd6fVnYwrceugffTWpZ6YCmrm1rRrrVEmbud1xpHpeJmu59iP",
  "key33": "5GMvFdJCbsvCq49JS4NcYfi7B3jmQXzCLe86Lmxkb2PXj6YZKaQv3Q2qQTqY46JqCz6dFK8HLV35Rvwy3EU1UFok",
  "key34": "LQPRSNKNhoapBTgdaGQk2NqFhVYtEuo2o12upJo43UwSo2kjqLYXe5DKFezwgUKQMXrbwY2bcKGV5i6YPg9VYTD",
  "key35": "4pyxSykFsTmHuUvwkbjrx5Z2nz6XuqYi9Y1fkjT8ADymSnUmshW1FTWCmHSW2A1hggA654Q3PtyzmqWhB4RHQhiu",
  "key36": "5SDWDpLeHMjYwZiwmRFPugko3vRGEceQqRS4hY8NT997Vhd11RwX1LWQ2f3ER4wsKo4cMotd9CzK81Rs7vFC32HS",
  "key37": "aKdQRQoB4JRnhJqgcp17KKoPehfiN2zDu3wn9bkM1UExnZZYM8rNZBsKm7Lw9aMYmbJx8WeA45A7MvDitW6Ab28"
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
