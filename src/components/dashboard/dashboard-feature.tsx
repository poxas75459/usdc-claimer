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
    "2h4jxV6Vun5NvxAaxouHFthzc8Ziqtc5pxbffYkTg6abF16pqTbLrMdsPEZ3hg2cN5EsBvcVLUD5LtpVWkEWZhrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwDzQ1M348QnpasYrnksq3uKDiXfocofBxQCRP6vPR5P7qJ5xe6pmdntS3RfjM1mpUcrUinMvq8mnVkeDobhPAg",
  "key1": "5GHZVZYVpADnH2H3ysZte3veYfBXyaSajN66YqvCGFo9FHdRpT9kbiuvAthNvavcdHALfLZS4sPUVD1pRVY7EBHG",
  "key2": "XoXdAgBTxJagBvAsYKa8XaQ6X54QAvqYRVGTF1k2KGZbNW8djxtAN1532vzWwjYHxsarFjmVRcoYejFWiU3w1QC",
  "key3": "2VW5sxwnoeTJFgfgaDPVK7GbrW31Zhycrx57VXycLQtbB7PEbWy8VD4d9RqsinJSJZkQc8ucx1khHjVcWJQpWbvw",
  "key4": "45TeMtc1MpjUU5zTD1V64LVpJ332L27YEP44d6tjjojEapD3C3kw3juPfhrt7RHrJc1voGKDaKL34QczjrdApAkd",
  "key5": "2LFqJF4Afo3uaaJC4T8g12df9q1tGRAN16iAjTgB1Uc78zczEjwDJr5Mr56Zdi91WEjewCHJhzHVtWL1hiDnAYMo",
  "key6": "32ToHWN4Rk4vEKCAwzorJc1LHNvy5Lh1KXsNqqFwQSDmkFgxc8LfV64TFpZPvSJxoMyyM39WrU7VFe61XLaT7Non",
  "key7": "4KReiYdFL3tbou5VtmQyrm3XiaQ7WsWpdoCyx8q6jU9UWz9rkZcjTXBiRmFVr1tq8FV5h7m9Qg6M4MU5hrU5rF6v",
  "key8": "4k56PXkH7cr9y4ZAoY5dvNxfbg8yHQcqzoWpdJPgW4tkEB17U4D9117bZvzJ8c6TZs3GvaEvfzQpNyBkwpuFK3av",
  "key9": "TAz1pP9F3sTxv1jKeqWjfJTcr6EwBoTE3yKys8nXTEifCrhwKi7ZehyPQNpAZyDfHBHh7UkzkP6gGv5L6sExNs9",
  "key10": "3wZHCoJ1gtq1GPQ8x7MrxU9j7dQzHhZLqaSFV7KPvQi9VYVnA8BkV1tobakwowoVVUtfRJPdKDFQAyxmSpQTCiDG",
  "key11": "NeYHSnxwmrZgAi1H8y254nBYzPAjV9SLU5qT21b13fTipS15pcr2GXkDuHxnF8xMxHJVsK369pRgT4P4HCs27HY",
  "key12": "4dBoi1SR9yH7h3RPdtYav8sBiQxFzfnzJLWeChRfax47dFeR5U363X2Fmn5FybqXfbnLKCewMWWVCCNFcWDB2nEm",
  "key13": "4X9aP1Aoj98iv3srndg98ryGg9EqX8ZQTDSkgLVavgxKZcJwgqR8SqoVWYjw4TQL8C1QrgTKpgr8WRojKP4xwPoy",
  "key14": "wtiqTBwPjFJrAU8ej6ermn3WAcqf3oeeXa5T5hT6suVQQ4kSm9jpfR9osQvzujd725aoQ6EaxNXijzj6y7cHTjh",
  "key15": "4pXc4FAf1q5ZQXRAeCbo4CJCV8tnz9rbBr3tvUMwvM1SQb7jcUjWceaHPciW6kMJgZuJFGRYLjZeXzKspNoVU3GW",
  "key16": "5jDVvW67X6ZteZ6LVgM3aNbGf79sQKCEATUwocngs1PSeHcR8ksMCB8A1zuaNa4D2Bvxc6UcEDf74JjEkp8qpSHn",
  "key17": "2xxU1SozCJbs5DyUbmoECnNVMwp1p683Pxk686pScSGowGHx7JntndPW1b5vKeWM2huE4i6tkZtmGZgDkmfostjg",
  "key18": "3a2p5xruHNohin5aruwycSzHCQA8purzjVsxRXX1xpFDx3x9m7FhXcnS1hxuA9rRACJs5xVowK387ZtnwcsTP7Z3",
  "key19": "5Rvs5WnrMQqsHxw5ZAwPhNoLWpbSyKQ6pXQNT9qDFuVV4sGLp5NTdtbgx1rnXqC4FLB2HRbJJrga75VxLfgTd3st",
  "key20": "5amrBLuaH4fPWQSLSvQYwQSWgkzHwGX3WCthLqL8dMNxMbJ8zzmMtMGA4J9GP2Ny7YcDQ4nTriW8S9ZHHSsoZpVc",
  "key21": "61M2NA9hcrDwEYBBkCLNkhFz2bxZAoB2aNGYfrGyqpEzG32gEWB6npEdgKP7cudLMWoxgPBQezBSU9zh2oACFcdS",
  "key22": "2zLZMZdAncSLZPDCqBw4oos4g1gbeThK5sWzRiAV77JPv9etfU4WEGJfPLcKCesu8yAGr7Qc4SLSwTHkdzyKveXE",
  "key23": "2ae6bKiNybE7Xtdrvys4AoGJCwKF1AprGuhZwsbypkjBDeifCYSMH6A2UhP2PNS5BHKmG2mmfrevactuviX1z7fg",
  "key24": "5C3wJqemNzoDjcujbMPP529sRFa3ErQr57is6jixGSpvU9ZtmxbZVLbhDWL3941aPdkCFU8UYKRWGmDhQYgTKg4i",
  "key25": "21Soq6mpvBHKw6EMhNPEnUkcVPP8dApmmpB7oiNVQ9qudQVrkX4Xpw5d8KWiquBzMgBLnwMYjLG6jxXfDupE5BUT",
  "key26": "2g9b9QApbm5PyxwwB7N1ZUQYif74Z2jntttZUbWQnsPSeerJ4KHxS4V2kQ4oMNEtSjp2BKbepo9hATnvAqB6biQK",
  "key27": "2Zb5AvwQksxbmmevJeMgNbwML92Goz7AxQbTuCdNdTNQvKv1YcYDrtkzpALk6yJNc6pQTc9zpPGSiLVLf3aXuSoC",
  "key28": "zfVqoetFZvRwWEV4vq8hijpN5dYDv4TN84eREtpUAQJ9UT7kzMmHyj8wvExEUwNbEW2ZrMhL5p57j8gFqmpGACj",
  "key29": "61NeWjWVub4yxpH4YovZDGo6jdLpnsAJ7sxKM26hJmQfjRTc35yCx1tJNDRPwJJdSsLaT7oQu32qqgC7yz3Simz1",
  "key30": "2vrCapxnXGra8j3LqdpvyuNfiaK6RMST7ntPBrKApMFTdt1ZdwE6WyecDTQWz1toGYgnj5RQpnForjAu6zMrU94p",
  "key31": "3HNrXZBB1qRuxUnXPezKWJvp33obKxSTCgDERkp2XphAvtEo7N9eMuZGKN9K8SeANGtnhVDfGX1rjpJ6mbU8siJo",
  "key32": "5zKoXWyJvBy2h8xnqD5RsM1tiUvVgBknpHgkBS5cDojaH1DBR4HbZkAj1z8KNxJu6AWMp5nF5qBXvUFGLY542712",
  "key33": "5TJayucJGrewNQVDWGWMPo6xs6kGV16n5BDD1cyZcFf7KLGn9cYN69rusJfk9P8Zjqn4jmm2yKVvNb2m75FSWu8C",
  "key34": "2mGExUZWoATgLgeeHX1iCvDE9AfWn7AnxHXyq1fuY1DccggCRiKPFKuk4i1ZaL7AKLoxnTWyvGpb8MeBEC1JfZcs",
  "key35": "3KaQY8vwKX2iZKeUB7fTQrn2aepjpSkDye4ry1dvYjRmtwCghN3P84uyNut2ismdC2wWem9GsBa3Phyb2jfXHPdM",
  "key36": "2ocfkjdxuqCkDWfKD8ea8Szrsjrax6rSeb9D2dL6QtAnjT2MSiGDK8tH2tGB7XN4CqGAxa2hAjkasmW9bfYN3xin",
  "key37": "47zLiqDc2UwqdsHSV3V8M7evDF4jK3pKoiqV3run47godJFmn4TPjWuvg47eGzhQZWiQzi43CwsKebSarL5hLyXz",
  "key38": "HLCZzntVvCuSstpwzTwXym4J4WbCuGZ7H3DKXYYsTNrhL4JWPYcus1MvNmzPPUBCiuhVmXgjuh5XSwXLBJCNyDZ"
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
