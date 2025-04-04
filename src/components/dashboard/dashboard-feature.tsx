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
    "67Ntfd8WKmD6M6Xjpx3wW2Xzt4orT2mCC3iV8VZQddVm69UJ1JK8V8cLXqGyvcTtoycVsJ3VwM6PDPforq39BPzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWdE3ZvVno1A2GcTGFTUgDoojW4WUpyduagq6Riht5GecwwJUrewXURqHevb66YpGfLAB9mQvYcb8dRFZowbkkF",
  "key1": "2Aa87ja88HUdAFSYLX1SZRbbfgLw3ZG7wtJu5ujpd8z4TPkCmPoujRYPcRKTnxNSqRQYGhHePNH9NR9DuCkb1UrC",
  "key2": "2WH9k2W3myJpx8uCvakQw1HqokFr5U6MZg8r1VcYdoFBGinjSqjbWHdyZo7LzPm5bsqj2ibMfoBaXdHqKYuWAceB",
  "key3": "21dU4r2z5yiJs1dTy2WAHVdHkRLs1cU19FVRfbqUXxbvxsPixhuyHXFKiWtgcCJx8bfagSu1ddb8BCECaLphHdVQ",
  "key4": "595Dw65apTVbo2LG3Cag9PeHJJRdCKojouiBEXudgc2UGgqm2494aHX46EhsEoDjSXjdNrvWNGHTYK3Xd6SZdE8R",
  "key5": "4w2my7iJZuFHxE7ZJjfj1SooAhccpxs6Z1qZ6V9efxDKcAYFV4y2jGzWxa8rNyqJFCcmB1PE7xnxCtVqwWAvTzqq",
  "key6": "4b49Lc2XnU8WVwrb8QxbCLAQM7BGUwwnw7qiYDNJftxjkFEL4g73BusifqpXsUUZzzXXvvJZ9ZiG9fzBkd4hni4P",
  "key7": "4f8buVrErRNfvEHjt7zD5ZwH4ZpkgeJrejuULt2jXT9mq3amrdCKuV3xpM7iiXue7cTLFjyKEL8TRA8fwYYPP5EM",
  "key8": "25JsPJwGjoxZK8ps2WWTfv9cxFvzXtRybEBJ92F3t7jiY5E3gm5ExpGzHBAdVgMx5Ux5Ns4tL8Ggwu2ZVDNzhaFE",
  "key9": "FLkFBqryYaddNgiDjV3yStD5WyCgGQBaug8iq3uwALWwQxFo2c7qM2XvL5AYKpCZjm7r1ffreEhpLQhXZFBJjmy",
  "key10": "2Lacn8L8cozamFMKmQZRx9LQqFjj9kfq9uiWkH9BB6kzeoCEqs35ADbr9xwzEziWh1w9YZxeBVZyvndLzkV3KkRn",
  "key11": "5CKWyQzZM3VRphyUJPpv3UnLkFqeX1dLPaughgMm5iWP8aNwWTrziwFiz8z7ygck1znJXUDdt3fw9T6Rw93vH2Ta",
  "key12": "34SeUGFfaX3AmUaiiuJ1aFwaXKCnX1VgnHePZ3nswSidZuNvaqsCAso5kEC8tg6ZWuLRGJLbnxaJLb6iHGRHPS14",
  "key13": "4yRnQH6tnhpd6mxhS6xUy45MuXPWpG6quhwjFtcm3Tic9gUoRsX3GszG6DMSvss9jUEPHJaQouyEg9sWfgwRnUdd",
  "key14": "5cfZ1x1Yg1Kh5yp4u2MtAJoGBVphhuTzwmpcm4wFuGEQayHhenXX8VFcTgQDVJ2Rj4NRXUHTuPCh8eTiq5i8Rbmy",
  "key15": "5Y3CyRmCgSNzziCT1VcdPoSQUPExXCxQzJkqBL8mQE3ymVwhaWcSywsWondYu78enam5A87nEM44Za4HVArLPz6B",
  "key16": "2Kc341QRiFhbGpjdzst5v1RYTwQbYVfiyhmoEexmd1cG4crBQXqxB1aqkg1AG7Vur7iUL5bi8PqTCwn5XJV7QxFd",
  "key17": "5ibRMYnTLNZAwTJ2ao8edWFPUbYWC51e3QxcRnwDhZeSgKbd2Lv9n74zwykN3M8H84aiSBmSwSrPHAepQFhQpeX8",
  "key18": "2M2mFzSEDnEFjo39tP6u9jMpaKrSSHSXzDb7uGMjbXjFBH7qbqUYxSE3RM9SButZ3bDX8JDJkG3T9vXgr8oAEesM",
  "key19": "3eoniBr4hHVEyGzc861kkraGLigL7MtDK4CJxpXSP2BNPY6aAasYv13DbFybRLGzaRg9fUPYQfoeJTqXUhfESaxD",
  "key20": "4bPxAgExVZvaXeDkqm2gmgQifzkmTEghofetniNkCsyTHfS2vVd4nAHnJPsHaN1ys74tCH4AD8C6zGHt7wCk2x2F",
  "key21": "36N2rkq96qN1aKHrL7h5Ks2Fkq61eDWH2VWsoNN6tyt9kTqmaDivKDbzbJs6vneR57mezBB857pkW8ubiNMAB6hv",
  "key22": "KdWvMpjYYZ9ksZMAooCnzXQUWRXGVWAMQSVjbmaVrD5gv3ntaNB4k2YJBPZcDGPwfgA98WqAqUcJtsg3mgy324n",
  "key23": "5U2872KnSD19LSQmQ6QCbZDraaMK8pnouxWckGmVVpYRPpEjZT41D34G9e6Sg261bkYSMUaL7ss4sWUwDinkPC21",
  "key24": "VPFXs9neAxJ6VJ3fNS6sHUTeX5o4EtNuducNgbkyEAfuvH2ZsPp87hgRqct3PT6NpVZusqsjZEbYcWQnsfh9tB4",
  "key25": "3PkjEPvwpn3QpNodspLqaUDY4UQHdB2D9frrf5PNKv1RkJGp2qu6onH4QJnGkbt15fZzcAF5xq2z4SHb4ThVLJrw",
  "key26": "4LqanDZMjwNKYErCtSq3tkaWtkrzV9L5XqPrUJ7joBoNHK15TM5KNtNqFb6SUBx69cgTjZutWVU4jBxz5WjYyGst",
  "key27": "3Hu3wuSNc78d25WJe73cK9eewAngvN67TvuXpUEL1ftK186rLU8VRQvdDpRbRoziLSrS7fRBqdqyvpWBRuk16HAW",
  "key28": "4wg6dkG5FXd8k6LKPhbr21JpknooweNQU4RJCLebgu538MqmXnW8U9rBj6tWzt581d2r6M2MFfXWJYdAE4QtRuhg",
  "key29": "5zq4P1wZd3mb3KnkL9S5hF74ktnYTHARKMMXpipS985toRr2CpvpvfbYNoHsCqsKMNVdtNrJCZQsU2HXHR4dZTwk",
  "key30": "4t1er5dDuY6VjcV17e49rAiExvwHbwPXJTjkKg8Zvd3VbebbfzG6kooUv2JjWdCzN5FpKyYZRENtj6cbDD19A4Rj",
  "key31": "4eZGiASeQQp4QdxeXrADzqp4q692oB5nj9tvtYShtAA1obUzrJTG3SKWxnJbRsDoQQ4st57YwqgyqFbpjTYn3khb",
  "key32": "4ohh6qnsVZKHg5cFft43TtaYutHhED9aqxepFUtRdV5bPELWqNUgKguACqGfHdtEP5Khx4PnYKwzCovWg6TtAFq9",
  "key33": "2NVKx64UQ1CLZ2RStN6KodYyp4x7cYE5sgmX3cPXAmNrugDd8xbwu99yXsJRKH9SCft5FfZ2E6SqtawAYxcNmkh4",
  "key34": "2dhphNR8xBq3G9cb9QBngVfaFgprf8YQYgN2EZB6TJur38UE26FL3jXDFwBcw533PUkFgxFNgwUjj5hjAj7L1w9D",
  "key35": "3Exa7MUhwKpGekhQaQbQSyxU7YrfKgoo4xbLvHraUWAP7DfRzpZg2hVfM4SSudc7LT3bnwVChZZQkuX3TkgTZRoh",
  "key36": "5Trc7MLxvSBN682r9xjY6CVCiz8ZBFT7noe3UgtL8PcatuqdtNyuxFZuXNDEsEJASCF6AbZUgkwrvo81XvtTbzRo",
  "key37": "3gsF1Kvb77akKmwbS3h4yKpXMYPvY4g52r8QiLeYw8LYkgHknLPbsBuzvrG94Ss2uKgsKGCHyre48yVMPiwgrjUw",
  "key38": "2YK2CsFv71zGDMR8iYbr1ic74Gm6kgug7ynzc1CCaM4YBRGEFcqb33UXGvkdM8LSDd7PDb5jn3xMLUEkftKJxGgY",
  "key39": "62JmcmRvd8DnMWn8zfmQN3GD2zJS371g7xQxFjKeiB4Lu5NiVi1uVbxUEjUGjh2zK6cmcaf7UehszbMipHbTsFPh",
  "key40": "2oGtUitgVStxmyKJfb6qC5c6keySmNNRouwcc6pn7PjUkKjhcFYpBRQss7iTg3nBJgtfUxLZunypiawpLVR9TKJ6",
  "key41": "2fSVaP5KNnMNDAD8Ru3YzyYAtomC49NuK4fTcJKDtgwzpQm4Ci1hPhJ5YRWbd3jfTn41St3JeAKw2CskVnwwAYTy",
  "key42": "36U1XdUP4PsjUYwcBPKST5zkpEnoip4jYpFAiEKHU9YEsgGTeGP64Sq2qA1inM4vRdMTcA6crncfCAASB1u6rNpy",
  "key43": "b76PaBrA4P47PbAvbQakBRmV5R72bdqCba9miGzAwaRxpnPt7gBuiW5duBwERs8D66Aasn9UuUbFBnnHzXqRbdH",
  "key44": "2bNFi3Nf98dXE7F5hdt7xeMxWC3UYTCVmCsXbVJUL5deZ7GtJPckMKdSnsZH5aqdNryqk9paKh3gHmTZJeDa4HFV",
  "key45": "5rJEBaaBS8GetVa29PzVYu8CgtnaHfTUsgDNiSMiTxqkvYarxWLccqGFZ33ma5Hoi4gPGc7PRksPDrT74p4k3eEq"
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
