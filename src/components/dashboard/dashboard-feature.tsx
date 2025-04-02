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
    "3bxWNqQ3KQhDY4fVy3xqfukpY6wfe2d81UrssiJBUx1pTVRbcPdkVnvVdaMf8YJYakkfnUPuXLiq7wB2gnbuTYGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7M4jXVweY5bP2UM6jDpd6vbFAE7UXzKPyfccLquPiorQoFQoWiJsUJaqurKwaFgkyFLUUgqYJcDMvVUee9jP9ko",
  "key1": "4npvG3LPhGxy6KNnp9JiGtVofUKPEymWb2qynct6VN2L3Umeu2AxzwczCNRgbkaSyqJ8d9goQHVjAWVJE2REnKSq",
  "key2": "4mx8qKBLQcko7Yqy5rLe9kFJZJC9rro4guJLuf4kKt7rWKiRFVEVUKEsv3gpJxPivhuS1XM7FGfkDwitZq6Sa87C",
  "key3": "3NDKi8uhqtpbNCPY6xoB4o5H9sEkaKoG9v14oMB6i3okKGPwCCuJrLPwWujM1GMSC2UGigVRPFd6oQtn7sj8h7N9",
  "key4": "3Vp9VGziG8RhKrgB2czT88hcVUZiHx2mQPkAPQBhT4L5TXEeQoM9cZr7hWVzD6zE63g63t21r76qdsoqRtxxDM9n",
  "key5": "5TFTmntBKmssJ2eH6aXR7aCdCfSg8wj5w33bcpLH3z7QK9PWs8Y2z2pYbbJGxCZgE8W1MRafFwZy9TYuiYrnunxF",
  "key6": "5KxdnsxtBKYyWMWcvU1knv8k2jWGtmkXZg2DGHfsZiUJaLn5DmJyiXppo2cMSgkMxUjPugQ1d2V2cDLgdCP2UF1d",
  "key7": "ph3EqeC6Knp5LxytPEhJ6nC98vQZRGMGbHZXTKMwycCtk5FqRCjsygYTgH82Zhu3GDAFnQUwtkJgjNa2iS5vYuK",
  "key8": "324s5PJQmKxgCJvKWS3b28h514UcJ1uHUfAQH7LnfJJczhZ9nBFGY2p2nixaFvWvpyx1Nv2DjyQvTtthTYjBHhHz",
  "key9": "aquU1rb5joFUCbpHRHYfBz6NyJz7yR9uMiQzzsNtgGpWoaeeY8VyTuvpFQJV3SowaZwnF6CUY27FhVopQHPuv7v",
  "key10": "5BLFXbDSoaSKKCYcuEzfRPQ13oZ3AwXTMnGKEj5PZtJnpCw4CsNvCBBJx8VK3eZUR28pE8gxPxo6EA1SFEMLHjBb",
  "key11": "3GwLPzPSnYVpq43dFKPj8rdqqe4gpX6mzZ4wWiJ3chPhWW8S8tEVWD1ZQFkEqjewvTbidfsTgJFu9PeBo51CAEBw",
  "key12": "53Ju8PW3oiwxnE1X9kU3QWr5CF7Q27Cdso2qpZ4VF8Qq6LtwPqpqZZpdWwJSodyehVyffTk33jxu9ikSrNifM77R",
  "key13": "EZiu2AowEA9Vw2nHiV3KGGFWwg52CeSBMN6JLYWiR7L1fotKEGPiW4SG9DYfguemHyZ6kgCXdzamVQsq7DHDC58",
  "key14": "3NXbn5iZZWdGFLDHR1CnGjMpwPQSBkedt6BdhqtQqZEamaMdYcBssnEQmU8NsfivJLYjR8L6xFQizXCnPqMXs4D7",
  "key15": "3uJQvhLz4d8TWTwvRQDoqzeNmuWeKGk5cmTUXhBb118m6cJiSPjwK5Z9XTZjajCmem1JAXyasyty58Nj6xJUthaX",
  "key16": "271cYeeN1v14Esk3hmaFSds9E6xyC22Z8jzBgw6F7B5x4zo4kVQfass6bHhX8voHxHQodUeXSBP65wgGEhwqUdLS",
  "key17": "5JFMw5zqBjYTAF9eAWd6m4dxhhu7NtFuPMRUWSKnbcKwWPAGZzj8N4K45K7KbFFAUzbWZ4RzNS9rTZFUiKxkguUu",
  "key18": "3BfeojFocMsza6iCEXquMWzKSEZu9MKgKnnYUXvaAFTFCvJABkdivqAeVQFdBHKA9jVpNyF9MVURKDV8JD99Kfr6",
  "key19": "T8FV4p2yF18HQpRhMB8DrzLHqSsA1EeLxaZ9KpX9doShJDXQkksex2hUruCi7WmhRrJrvpjXhtTWuv2XG9XCG98",
  "key20": "54eTTjWs9M1ZN8DTNo83f7ftnkcNqjKykoPMJpeiy4cfoCj3W2K9c4JwCGrPtsK8GesoGJ8LjzQx85PDHcebudBL",
  "key21": "3utocjwVroghhMQZk5CMxJHhgoY2QyyzNFQKZSyWQTYHPz6XLXDaNu4HFZjt2Yhdd9vYrond4diDjgkfRweDhneX",
  "key22": "2Dzjsxs2BzzhwgqhnX8SXcaKW8JEFY5P7ckxdEwHe5LUXkhvmisk7ULjsdW9D3nWpxeXQTBPDHtZPPUaQkV4qrDF",
  "key23": "31Sr5qACS6aT3XWDAUgPZMorGNVUr1qoA1Pcxt9TWNBbGqqV3suKkoTAVHCXVf5fuKeBka75UfnPMF6KUzHakWEn",
  "key24": "3RongXCov4u1pHEbptDz5Yteeo6NJxw8VNieppRjMfFtyoDHUkbrQJbEmTLmRvfesmbrPdHxdtEV6Z2GVZkJg4vE",
  "key25": "63pRGyZYVXBukMp1gqusqJbFBRGFR66GqJNxnv1tx1RBBYVZ6KVB1FzTotchZrERnqBFt2XbW3AfXqrvvCtWhV5n",
  "key26": "3iYe14XtnGSe4Ud4iC8YiXdWxeu8HjBeBcHzo4vhBVcgVpXTkq2hosEaKV4mXm99oR8dGfUChN7iSw4tXNWVrCd3",
  "key27": "5vUf1rgbQ3uyZ2brmtxun6gHV85i69fmT1QN7811SPVFmWdkVtFukM1uQ98noiZhfW7sFieFxKqhfWG3arGocXco",
  "key28": "3W3e78z1tGgANtaRNqYeCaDk9Hgg8vwuQsfbcj7MMnqffhzex5k8H9DgG8aBUucRTXp8CiHe7SSAt9pWCjahFXNq",
  "key29": "27iJUcHCdLkDUfVLTWDb8CanqRVg9McfiGuEn4i4LVCybek4NTDfjm2ULyz9dA96bMuT6QgU2EvBwdQFUd4o9yBJ",
  "key30": "L4BJquRgCcdzZUjJc9pREUCDT3PhGLKhZtDDSv2jnDdRPBtRTqcgEVwJxDYc1GArbfRmEAWTTTpzbQfd5JgMQ4y",
  "key31": "4CPVMLYYZdMLGbvXDmXr4R8emCf9x5ZAazHNremKyCcNzq6mDUYYYCLAy7XxpVcSdPZ6M96JA8bD7LsQ1mk75frb",
  "key32": "5xXc1q63uSYzsEXTgSiDgAXJrtxSrunGdiejqponij3TCbdsA3n3ueN4heQxQWLgqBRyRHm7AAPDAU7t9zR973sZ",
  "key33": "UztaaWzRzicmjxxhh4bx9zVD7ri8daLuhgAJB4HGBq7CJWVh3LR6RbuhKH6AeHd7aLGb3spyL9Ra273jRMEiPvN",
  "key34": "FR9fA7MMp1KQ7AKLEP8Q9UnigtjL48XShWhFxTkW4paq8kDzo1okYpVzg89TNcgVK7kvdHtchKrXWfxgq7oAtsF",
  "key35": "5mDrCMBk6Z6L8v7Z9v7ykRtEmo3Rm437fqAY9R5NH3PuBX9PgXFHjWEKAPmQhg3EM38GLtv2i4ZzXuEU2iYJozhM",
  "key36": "4VAGWNhn52iC8vRFkAv5X3bznTvVB7NG9KXjA3LiCcM6Bur7dCehkbUfddH9tkqF6oJ8CvJtQVCJDHZ9CwqRD7WX",
  "key37": "3C8VvrRzRnMNKTGGs7Fu3kcgcri7bugk8ba9XH4bAUwfNZTrimzSGuiAwEsi6NifecYxsj2wFbikLDip9W8iyvkz",
  "key38": "nEJT1TSMzeHS9tazEB6fAYNgwvHdoKM4gedcbhT8ofStdQoVC1X9QY7cA8Eue5eDVt2Ggc9uiFfpUxdo1ooU3ms",
  "key39": "5evvesMY1buuuc5nyRr2mmVU37Esy544tNuemP1Qn9374ff6twzBJCXDxRdero628M6ZoDcdzcmB1DVHAppqKFgy",
  "key40": "2DCC7Si3vwvVU8MREbAgrQBnjs394AkvsQLNkzwU6ZvdhvoAU9c78Mwt5RjTsZSBKsBQRcxd12MPxHwBHA5fMt9F",
  "key41": "4gnSCfDuvMwHzj1kroAuEoiVvoHaicJtR9TuVeisGJvN9HMiJ35Pikm1S3fQJNZdwWhDPmidzA6KAar39soQp1E9",
  "key42": "5bfAMkofUoqubGeHJ8GPHXo4fGxzRDjCZPSZWysGkvzod2vQ5NvEkaaVN875xRXX2BBq18qwf7ySrUuZmvSyLQEF",
  "key43": "54FSP2DmQPdXZaaxw3MTYows98UnbaEeTW3s2VGKFDUhwCiadM4rLx2M94uReMF6yhXWex8aLmkapynYuEcHJaD5"
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
