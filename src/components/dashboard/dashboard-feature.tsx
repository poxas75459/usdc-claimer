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
    "5yv2TvNEevok2KWUHdKj4UgRxZjNswmrMwCwDh5AemKndWHbsApQsvT2RuFbgRQKkjAmkK4BZYtKF63h2Ju3aFjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WTuh6TVbt9enmMgvDUk45Vxas1fWcbBVzWzUyjYAmM1nezHZ1w6Ciu21K8B12xGhCom6TfQEyBbovCt8XHkc4NA",
  "key1": "4pUDs4tEhAiuhXB1yVKbuBSXsqe73XGffy4zV2HnEXrnLCMrTbf7XHrLFLvUQXnjTZ9VfyRjDRv3aMXp9GoNDGVx",
  "key2": "HQ7TicYsfn5EsN1gzcutKJ3ozU3TSYnrEevFkTtQhroNc3suC6cMH8reVVk3qQX7xNtR3utuoxXkX8MTQiSJW1n",
  "key3": "2vr8QXquUhhf88hinGfGGTvW73B7kK1oBrfUVCFZchjqdPZ5wMBPixRkZoWzdHowGHzC95qEFu7Ac3m3DnzoRoDX",
  "key4": "4MyCpaXinWNRzccqvi7HJURc8YTuZhKRLgVo1Whk1rLziHXcZvgC3DzpznVUHD88N1m4VmD9hgScGd8QwS9vVs6E",
  "key5": "4j81pSEcJuhiCFLxSeUUgw2VYnLwVhCbN2DggmBsrqeM7NwsBTnESgQd2tJ4ZHXktjHoXrW9U48qE31Kxq34LGDB",
  "key6": "xchVEEgK4DQiUcfa8HGD47B5MiGfE14dFKxUNjbkrUfvoB3Q4eq7ZKQFAA54Gwg1oqcLuhTWfpMJWd1AUxtw2Gx",
  "key7": "5uSiNE9XWpV3GxAxTUXvpm3rcu25W7Hg9taEW399Wq9MZCrDRAYUBjHkfSfWret3mQC291q8eoaRZ4g8oTQyBWHg",
  "key8": "51D7S8R6vbmzvrJoG36vRwWeN3jiTbr8H7XVwAWz6svnXiSSb39szaPBvD2vMEWgYZnWXfWpr4SGps53yNxGAmtF",
  "key9": "3A466tNajVuangQa7iRxsKn9F5ZbzP6Gv2EBxQQVLYPmXa68a4bMKeEiC6eRHsVu71WE766uoGt5jbCs36ZcKWU",
  "key10": "kjbtc6yd4qo8UKVEse261knVgfEjNkaVSVBaF12zY22JTHgqDfCmmZNiPYRXLqLiQCt8EJtiXkdj7jBKTYm5o7J",
  "key11": "5AMii6pBiwJaxpT77dqr5Zsue8aRU2CLRhvMJcm9u7HwyznM21t54GVz5qXxMqP3QHjdN78DGWQPNYAa3Y44cNZ4",
  "key12": "3iXXjTQ4g4fmK6oQztdQJbGtcHp5TJvaf1kVTySu2UVvam18KJbfrHjdboWMTX3hGGXYGVunMx3KGPv5qivySNg",
  "key13": "YbhhTAv9LoCZ9MjwUm2A4zQhZDW3spZ7VEJFp8n9uHZgbfF5javzrx98t8J1WZC1t6DvgkBDGwbiz2He2VvpHg9",
  "key14": "3d458gBZYkXnvozFce4bJ6CQcExNs9BtmtpidavSTVDmaHwsU97GZw8C5PqNNWqpzrwLb499LxGGTHPJMn1W5GhL",
  "key15": "5aYio71daWDxbouFrquRzYYxMMdmgM7jfeirzV3qkdbBcGTW2PzRLU32JUZMtTQQDobkmG4wVE6ftDLt1x3Qq88h",
  "key16": "63hw3diEMy8rraE2AqW3SZMkr71XXhz7Gtt2kUSveZYcBPcQKMmfXZnbUidfJA82CzqUpMr44DxfDLuyGFPe4e9Y",
  "key17": "35M2uADuqtHjeifeP2aU6sxDXwxiQzqJY6pUsuFW9V7p81RpV31gyNFxA9vUTYgL8rWvPm7i5knt1G8mvTp7e4tZ",
  "key18": "3v1kGVZD3KJL3SQbpQ63EDhFGLUc3p4BcBajAZxfS5rABp3n1ppoup6sQLN4LpoHsAtfVmvaPBWdFv3ZrubAZtu4",
  "key19": "653UJfyvfPgMj79YawbZShQEKqE2sNpwpeWudHSW2rFhiexKEc4QJTP2ezBeaupHhZa42HVsMLAbokAEPAQB3cM7",
  "key20": "TUKFygP23PsF4DX6Fk43peQpeTs1x55M4Y7P9QK5utJjaxF7hFrjvrELbxJbVxhyRPLhUNihNrWaQNwu1tYtUmB",
  "key21": "55f9KXnpMd2gpmjFkytnK7k6eUp4MXeVTwjffYdSwAFbd1aKLCaarWaSeDAYeFt7MEnmKx4H18wVTiMrRkGDArwC",
  "key22": "e1JchhtF3KxvLDYcw5CmBVJwKW1hPTrVJiRGj4X34ujMiSrbzTFXGNXBF7brsb5y6LMtzSXw4eJvQVmkSxwcLSL",
  "key23": "2A512WnuuB2uHps6aqkHRzzsartfCWwEfuz4nxnfyGUivQVvcTHESCxjk1W6gsq7bR1M3cRiEqvS64HGvKsUbbb2",
  "key24": "3wA8CxoEypdFpKxY6gKf8TLZdL4joRBbbndsAqDR4y9AGKexGhtP8BMuULcX55HhKQ4zy9X8mecvC1NEiFinB9pn",
  "key25": "5rxSJicqQCtuou5q6ppXRTMcCcMib1JJMV83Yz66vBeXquUuqg9nbECboc7ybuVntGoJ1eciWEJSXm2PSo3jK5cG",
  "key26": "5B3Wza6YwXmEDscyoNbkUuTVUKoiBnwZ5oKrk3UiPcdQBibBorBwQ3VkXBuT2EPJh3iJswjjjoJWvG5PzHgvtSNG",
  "key27": "n1Tm8NscMugaRMrgh41kyue1LCYkPWfrXE66pqNS98TKgUN4UdrsBu7EKvc6YMWj8xeAoxzFXKyy9dnk3AerbQM",
  "key28": "2BzLrYcnBmvqWU1mg1xH3zSGzwThJ9t8FLjWGh4iWuXU9mTx5GXqXgFnvSjTombDkNpeiFWCERkULRTaLwzCn7LT",
  "key29": "361E7XFKBfjxfmnE1fYzYdx9PG5fy4foQpFovstnPkLNPj3PE7cBFbMfTZokHdE3eABzPsueqMA1Q5re4k3EteXi",
  "key30": "2P26afLoRgBRyNUkfKFZvSFW66g9SNZk91h3LKWiNt6Dd8upBXQtQvdFezE2rF1dSDDP4iWoQtPW3qtUrzvvztyC",
  "key31": "5ppqV6tmxA2j8UkQSnKAfA1jyLQAmzGNcgtweeibwvSCih1aVu1Ho8G86Zd4Dj4HZtLyjTMhGpWmhMfSvzFrsew4",
  "key32": "5kdhmsks2NsbFAw4ifUPqwhW5BUXq7hAfE8rwxDxXLpA7JoEr1eWBZbXrXjKSkgvWXmj1qVfLLWL7TkjTDFGJMGM",
  "key33": "AC3PASJKvs8wDPuQxU4TG2Wb2ydcf4hUC4yqQQWeQTcW5sVYf955TVL5U7VNikoW3UHdpS5nAXLK6dWwjaWTge8",
  "key34": "2zzuqevG6AH3Gubvg37Y1wqARQa6AutAtDimt6P3sjzmZwhBLNi7fgwMZY3swpLeuHdQxEypcph3fF4LcKwEBfdD",
  "key35": "2cv6gizE1Fc9YgK2WJA9fmLjgK8GYycQPRCMaChkLz4RKenM6CBmjR2rWUkN5ZKCYmhA8hKuXZGoVrPVt7F3k6u7",
  "key36": "3kNMmqM3uerY37LNSb6kEnrUx6hMD1Xd82MzWReA6uWqgqKaKNH4KB68D67abs4T9v4be2k5qZQoteHR9KbWztY5",
  "key37": "narinCP7zwBR7yyLFn1dd247kEe2YbroHDT43gxRMR9pddbquS9ZWBhWwfoHtNY2AZnf3paxHBBGukvzSNqofGW",
  "key38": "EfhaPpP4YSmjuSQZVRRFUNWR7VhfoLEgUbzYrVMACq6BzitgDVDfVBagGnXVTjJ1tfi9KBcgE3ETWfPwue88pvf",
  "key39": "3SBcqSbsGZkqNcQr5n3U9D4YveEBb6V88F9Uj5t1CL1vXQudX9mpBiFuKgnXg9hrgJ3VMdaqGEvEEtap59FE3fF8",
  "key40": "UFyQQ8LdEwgqZrq9YoGHhacEEV5ZfBTSAf43pkPjiC16ZpRVKXfSvMxuCVACgzV1Bz7Vxv8AyccYhBKXFRjqcKs",
  "key41": "28PfG1h6qn6YrMqsWifER2vjYVo7NR2oQRyrk55e7W2hf8He9QzzVV4kKSMbTC9SnX8eKKzEV3bKKTyu61yvCJpu",
  "key42": "4f2K1z6NcrSYekNLVUULAiQSHL8AcBvspL4n7eZ8tZsS4rqWQaHW1SSBT5BnSRew1SPWCWsgJKtRiidN79hWCLMu",
  "key43": "GJP6rivUQdY19JFge7HsBpx2NvasRXozp2a7sqJX4QpAgcxs7J6sX3ixM4aiKCKXz37TvBW7iLGs7wdgNrTWw8q",
  "key44": "62MG3TEE9SEptHqko1CgXRyz6cXWBvU3MKQ14RaR81zAjoiNzyar4ZCMfJ3JS2osLb6EG6xUxE8mF25jyg1bySMd",
  "key45": "UWyCYYNTRFmnopcVmc5bo1aLQmZ9T6bSMmTXGt7DVrPBxb4QxdFnEpWBk49LprMGgVcmjn6mfcSDkDXvjKnQsDx"
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
