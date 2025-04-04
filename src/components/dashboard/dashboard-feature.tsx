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
    "BkJKRbcNWjxtckfjZiJ4SQJtLuomZKdZZQRYHD5S5UXasvti9vXAcPinM8FW6BQ9SqN16xRR7vVezSKhwAM1Fjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3roZFjbZNqXKWJjKgeV8xDsm3DakvV1TGCuHqemD6iUeDS4LdQAYP7QE6399eK9BUDhF4rzdLqNXZfXCA7gBjQJ2",
  "key1": "58BHCGW2dKDwN8FAiZXBvLkZ4EFMJhENHiD77x1TEDNQ5oTfW1fw5Jj7M4W9TQ3amDKs3oDLF95E2Y3FQbZdSisM",
  "key2": "3w4VrJ51sVtbmnbQ4ypSXPd1vwe4gNeeLhq7T2SrCcL2a79q4n7med6VxfcaiixmNgk1SsiH8UYRd5v4P1rXEudJ",
  "key3": "5zdBSz6uYhLTti5tcZoGFxqfzu2f8RLzpZxJR1HQHGp6sff628DgyDaQiHwgws8dsg6g4Wwv2V3W7AuJbzYDA78n",
  "key4": "3mfLY9sxDN6pmkNNsF8R7SoM1K4aBxfPAH6KXXJvxykmuCxfbe6XdpJ4ZvxsTJUEe2TaTNYVmcTBQwmicBRv3htm",
  "key5": "5rhrouanhDQ5amipgqLfbYUR7PWHvTFh6XbtBXWq74hpmLscFtkocq5RjQRMFXPZKkKuoV2hqyjYV6oAPDkt1eWt",
  "key6": "21dUnmH1AVo82riqVHzYP49GpakThMzkErrFuRkExRo7EhnkfJVZbqWF6K7fBEf9BYPVrj7eLgS37nn4Qj7YgzYy",
  "key7": "4ENh6hM9EnXcVUdvqviGf9pdioBnjCft52353xGRBBPHpFqL6F3nYGZDe8qmomkhNEzeHwbhJPoHbLdKSmndZAmq",
  "key8": "pdqidUJfNQRz2pnsagRMcopkkvJnKx28JmCPwF8mAFP72cQKtWUiRsnMo9gvp3RuYLoACF5X3P69fcG5VWMNwBL",
  "key9": "KJBTb72xijJAG6NAdZtwf6eRrvYo1kxKLCq7ztKNdmarpvv2Fn8BiADiasnXTfeTVqqhpViTGjZoHZh1f1vhUDH",
  "key10": "2GWqYmJPnsbCQ9qRAtbNk3DMAhT2Qb28qj3FUvt3RSAGKX3XSFzgmEx4AHRb4kwSNvG767TrqTsJ2zd1AzFiniCX",
  "key11": "4CWeAhGB3aycWp9jCrwmhDkWHXgZ6nppzsF4m7Fgrwr3fSgNEsdSEMLigXoTMR5AbmthXc3qw6LyiabMHrjwV3o8",
  "key12": "5ujV8Ge3gapqAyeH9Sk5LssyQUpApdd3VoozfrkxduswVVsnNbrFkcnU54ziv6aV1PKC5BkSSWQsrMc9YsZvZoCL",
  "key13": "4AkDmDoYTuEYG2LxcKmd1P7g4yYHj3M3Ybd8WKRMVCdtM7gFeTBzDPL51xnugxrSv5k6Ct2CPaLbn3YLRkz17TuZ",
  "key14": "3Y7YBkgA74NxQ4eBkXDgDHAvSeG1SGv2nNJZtf3o4YeRDgtKMvKu2rrb2JaYkqbhZwL5Jw37fhjjPUaTcAWCq1A8",
  "key15": "4j966sqxAKKFVPtC2AyTqQnZf8dpHa1Xw1Lj54q4Ho4ZCbpsq5H7wX2xBH8c3vzZNGP6rC1i8SciuBL73eW9Cq2H",
  "key16": "3n5E1hFrBLJ7DCNnQsmcDErWTbfi5ha8kXVKUN8dR3KT8LQLdf1S2zeZtQocYf12YgffEyUEbQjUkxQoysRDigU9",
  "key17": "3mq4QNGwDmrPHfzD4W4BzN4F8HoAUo7DgtP3kSvfZVB6HXVMcWN1BkECbEhLqcVLhYGYb1ikHy5vCriVZFauKYqB",
  "key18": "2JU3bP2yPTX8uvDmsirhbRtwEAFNDCkw8MvkChQP4UWCCETVhEn2D6esteuEgvNVsZZhmUpCax4Jjv1zjRAjexz2",
  "key19": "4jRTNVWW6UgsUYdqSP2NZdMQ6nV9YyQmCfBTCjgS8B6uCu5A5XiSUfZuo2o6jSVPZECTszwaTaGBybjFmbhZe6W",
  "key20": "A5bE4DvcLPwcabCToQwwPXG5rLudfqyNkU5VRrzS4NTfzsgH7G1abG6LufH2Mb1jZY5kvH9Yt9R8iJtQWGCzNkJ",
  "key21": "2kmUBL6ADfq3Kc8EpayR7tUDj2ZBuTNC52Prb7U6uVPRoBueNW4LtfkDiSDb2YrzNUcYaE7pqHvnb3ByRHt3kwif",
  "key22": "4FnjQD7YgXsNDKXAwiGTJmpQSnmw7Uh8mmMNhVPhRu8PAw6C65PpzRk9ZfomX2KSd6bLvCFM3hc4jWhs8jTLorGc",
  "key23": "4JmAPxVZsZ5uFd91jTEQMPhnvfQcZbcrBQR7kgZG8hfKhXRaE7f1ArvN6fVBw217ek3VThEVFMwjTnJ8ket2mrZR",
  "key24": "2oiQnpwRQKkxEpvvm8aAr8qvPR8fxnAU6wV9i3BDmd5AgYesR1c7wMW1sqsonpYkqZDFiyXJ8uhpkAcQJUZZJCKr",
  "key25": "3w7P5Vdg2ogucruq6RPJJTg5zuCi3xkz9KygAZUfSEMcNBPVBYe9BoxBRi7Jvk5qZeKhjfcQmcEm81q2ruC3HRW",
  "key26": "5o5F21sE8dV1Wymy1Kcio5MAe3eq7K7teKnMqRq8wCsUzkUY1pWsukbBuWzgcUL3hDkF7rymuAigikEJALKPtdc5",
  "key27": "44AiYdJgRKpcRLnsbLaeWtx1ykmwu4vfgwA8sor9G7cRaQV1FRmXB8WJ8he8xMfjcUK29C1smUGkpYX3jZD2S29j",
  "key28": "LM8NDRdKPWRR9frQiUURksYAk3zjErTv4qZyVWcTsnHthte2xW8CvCUNdYfrs4M54HhoTQkfxK4fqTpUkbsgBqv",
  "key29": "4h8gc2mYPkaXQe6Ji9BruZKue4sWnuJsCwwaPbeWYHP5iRxpumJjudxv2ySE6fSg5tYSaUsAmHtmsM1UWrKtHdFV",
  "key30": "2aiHRLvBqunphpX25ReY6s7utFfYEe2MPmLetrBtmMnfYVD8PT1EPopDeFR6TKr8FsxQPH5ZaYjX8kEpxak4jKe4",
  "key31": "3AuHjUksKHhxfnUjUXDYNEAW7wQGdZ6kPxTT9CKUNomRnJxyvcBycogpjBFuGLKXp9drw7vyLkbcUX6TQ5tFRgN8",
  "key32": "1BHGCbLKxWpCqtbtXjSu1nLpUcs5c1Ea2Vns4eozsgpTrFbwdmYdAPd68CUEwBaUCCGKX4Szy1KxqWFVtK4QL4L",
  "key33": "Ws9gcDSLRtf5tL1DAhoH16M7v3nXiTRHk4VxMMmz65qqmg2q8TMFbAD92jWBsW5GDcJ9yfwgK4HnQBGEi7ERsP2",
  "key34": "DsxYvMUmQq9oe56D6ViRGJYRJ4bsRBmjXWC17GxDyxPY1r2mtWhebae6oR7uU7XRo8UiBUXkPjNhJeCNRAdqKUG",
  "key35": "3cWVK67cxNa6FkoHFJbvyPTR6UkYUuvwyoULsF4g15x17h2S1g1jT4kd3g9NTUVpACUAkXS4JKLaG3GzGzRq1j8X",
  "key36": "3JEA5sJUYPoyJVT5MJ8KtnUJH5Ay4kwLvp3DDVaCY2GKR1tFJD18hZx4A5JHvAWMoqYaSo9YttgUJSef9EycMMTL",
  "key37": "3is8RwzUYRyurrCBTjnkw7ks7nwgx6M9Xpx7YLvAfzZAUr9SSYKktVvLehCY3sbD2JvqV7V25n8H41CLQnMcgAQD",
  "key38": "5Dyccx781p59WD4kUwZdTFFqkFmiv6ay1XtRaQjEJGKMvxUNkKn8aLY3PbGnUy9RNY7U8QgwqJC6yYdoNnWaFohM",
  "key39": "xtRaEm92oEnZAH5oCUAX7Yi96zktRPBjHgs9N9aJ3mxKYD2FmcjjrV8CNsBaWKk1KpFMUwieWG1jFLEdUQsG5ir",
  "key40": "3Tpse41XcttuCZTUV8fJoq8Skn2LvsG4jWyvgH5gGZjWGXLHqqEMv3RZq924AUaVhciyHQXqNtahUvga5aqb7fns"
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
