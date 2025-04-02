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
    "LxC1g7zNJNaUJi9uoUzcchwfxowrmfDZH5msk9XWq21hnxQUomZQQdF4QH7ibXHRUVNn1JrZbt15tnNnDzASdAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45i9KPoCxhEUYohKFNgHo2s8A3xf6zn3MpJ3Fh9H5yz7pzS23zo2NM8rp3dEr46uo59o6ZN71aG8vqgn8LHzFLRJ",
  "key1": "2gcD7LnxP1nyjMLFSuqGjuSiuYZ9QFumGpXZkEbVXy5cKzuD9DjzFwHVhSdHJHU4ojR8oKjaA2BxpZ6KMD5XJxXQ",
  "key2": "671XcSgVwp7V3mpQEFbqkfaxUudhgmFRCwTcikjLusJPH6jB9Q8SCMx97ZU5aEFXqj3vvQyAPC8jA3QWksJEyeZd",
  "key3": "2S7acg2Hnya5xBHEuvt3whL7wffXV5Mz5BHPjVy9BSuU4CXH13RfsRJ7XpR9TkCjX6q5fTSXbDEEx32a5F2NwGds",
  "key4": "4teEE61quJkCXX8vXV7vbn14saHyLRtNF36QsTEKXyVRhRd73Vfxt4JA3PSEYQ8VMd2FKGrcVPgu8JznaiJ6mrYb",
  "key5": "XFi69SEstBe9q6ZsxFKKV2f5wyscusu61z7wPTrm4F5KQJ7sifu38hHrfTnZPeycFxB9xSstfERVZrg8uHq9iUW",
  "key6": "4ZoXKJUyn5sNSSDGRBonm3phy25ouUkwWqdnyJfQDEQiRVSUAjGBjxqTyKenHpv3bidFpG5WpSofDj7rkrR2nNmW",
  "key7": "3NJtqxFQR5T6rgs4oqtCDTrP1bqJPKekCMKb1oGo1Z9D4MP8Hxz4XqSnh1QaMey2MNipPYm7LNcWogqKY3zkLtnx",
  "key8": "5iLSDx2GFgAeHmSwKid467bWBifFwbMdJfbYUqxBgLxXsbFRTwkxwkWZDD2NmN5RgtusqYsqephaq8CaToYmiFw1",
  "key9": "2wo6k1wchwj6DkuRvxAGr2ci1ovfyP1B3ZNLff5CvaeorCxXZueosCCZEDGzscniP6t3rY4c7WPRbnxBLoZbbg6X",
  "key10": "5pjtPR3oAbVfuvyUHBMYqncQiKwWevbe9E7Z6Cx6YApFqJw15w6HA5rZR4YGM4mYKckBww49hcR6USv5XG6CUwx4",
  "key11": "BW2t9K78MKmuQsrzqT7fBXZkB6empd6HJqW3caqDhhq4zVEY1C3uNJFTRbKzKquybz1YDQDuo7TmkwbgMqteEhn",
  "key12": "F4kt7bnwNSsSgctwtX3yrZC3niAykz9RWTzKt1qq9KfVV56GEjz8DWzSU1pzaQc1J8CJimhmwTaF52ru2v6so95",
  "key13": "2ntQiEXTAMsyYLVvEG4gK7ihRWTyK7KnhHroNyyosDc6i4gKFMyNsnozVRbXjcMrZ6dyfSKf2dQf3sHXkoqcCbF7",
  "key14": "4fSdwNPRoxEHKHUc67CmZvWDLhSgt4pFDXmKoTSDEd1vbCzSPvKXBMAMXjv8jDPVxtr1uaC8W3Sv2gfrYnp7uviV",
  "key15": "3BiYg6rjj4cz4gcbJHT2YkDxhxgWW389Qn7r2FfehuxGtC9dgiE3K2XZTmkr4cptGRQ6qmaQXtRo8osWNGarHTUm",
  "key16": "4X1SB8byW9AY8Kbt3N3XAobMRg3r6p1Be26mxaJd3TT8tGoS32NshdXgR1VaiK65q17RSCFUcafQEw7aa3iYefbR",
  "key17": "3f1pkfeV1xzbkM63FjSnny6K6dGUyfeR59nFYh1jKtGGDkcQzttDrS3fMM6fFrtMjHXSQcRsGHcATHkbAQzTagUu",
  "key18": "5f7Qqjg8jAnbU5dTkctCKtqVL5yqgzFzL7kdDYnUVHh5baMpsBSmi8YnjPv1p5edm97fRArefV3vN7BxwJQMRJD7",
  "key19": "PYXrhgyECKhxz93C8kztSCSUgXyYVnzK3mfBHWmnquP36VVHbfBAYzJtda2sLrDkL64PsJeJKiiBhq8GKE9uy19",
  "key20": "5Pg56qn2yf4wbLYMfkGcmR6uZJP5HMedv3vJ14efLSRK1yoeJ9TB9UNP69Hc6TE5MqzUxgfc3jEfXbtQfAL6G4PM",
  "key21": "3Ep7RaBdVYCWdZMTQZjSp4Ufp62RCCtM6sWS1z77yJ7mGv8oP1T4C4RtP5g32enzxvbbUREshEKL1TrrFJGxVvqZ",
  "key22": "61eQzfZMNXwKxSJXmF7aq5WvkRo38D5e6N71mkrwjWLxTfdNhzooJNtPdhe4JZc38KtrteXPVXuJ643zWp5evcVq",
  "key23": "3X4ym8ep1XcN5WgeZzyRV62qcG1f3iY5YHZwHREeFAcd9DRYed9whPrez8b2xzVTwpFqNM1u5LYKyMQVVZet8D4p",
  "key24": "4mRRWVSqtuUXZiDNaAzcxz8eM9Nozy9Y9Ubcrw9nwTdrnbaVdk73sLFtYwMZeYymhGqX5xza4ZN3VNj4akHeaYrp",
  "key25": "3cvKtjcwYvJbAHqPvo39tW1jKsms4CYxRLRTnNm27smVcwgrV1XsenVzfuwSJKRvzwep5rTh3HDs5euSnwQsBJ6t",
  "key26": "8UtmdNuGNvxS5D5MMDgiNAcu9XzszyNEyZWT6jfGGGe1g7dPA2YTrC6Rk3smK58mJQNHzJvc4E7mXtbLaFSuGDT",
  "key27": "3eokcs67VKwosSgVeKn5Uo1QPR1SFMKnYS4yuAyNUybXYyPRWTvm3LiEqRN8dUk4GYwXLgddM4nhJeacAx1bWvvP",
  "key28": "3F4bgtGwsY69rsW7x68Rp4iRj9m6vFb3ZnA6tsB8DihZ15Q8u1qVUgqwdDuyS6bWocXMqV6wpMoc7G2U6NgSQCLd",
  "key29": "5DrEs7ra9aGFTnxC86x65PCmkANZQzjpyt8WdZN7uuNi2BW1vNpZpmqBf933kms1wMEomGj2JhQG7FEd7sBYtJm2",
  "key30": "5PGRf784hJojeQgMQEUGEqJZDgB3zG8XhxJUoY2hFXUH4EQwvypxWiR2i8cK7rGHGMxAiQFNRPsrzs95bckTqojK",
  "key31": "3qddbBh9JXQgKPQ2E9TrGGvJUFi3wBS9DyrVjvz1SfuNhX6GMbQncQKHXBNunz1gvkT87R6hdzoFxEqpWsSLRdQK",
  "key32": "VJ3MJd2RHb3uL5MjJ3NR9vJfkD4eAt8Nq8ng8FT49gZ9equoPJnbbmkjmbcf2mi88VSvsCbJBp4pRZnbfndMc7e",
  "key33": "455BmYn2rd77pjgFMxEpYo8p8Qb7yqfnLQPxuFiVYEVqHSchvkySsrozyL6ToUVsoL8LWRj7dHoJ3cxNx4W3LGqx",
  "key34": "26mUbxrNpJc95dJbxC7U6ya6m39rzSpWViQ6Rj7VRA1eeC61wMJvpXSbNN9iGneAzAGPxTeAp2quZZF6wc7XZn3j",
  "key35": "2Sdrx2Zw3jYVA2yQaxNF99ZQs5Q9zGJkHwEc6kEBpBSw52XVX5hWb2Nv5VUhjCsUf11K93KUYcY2KnERJ3Pd9zyd",
  "key36": "4oSSkje5eGugMs8AAUKsEseV4dKnwPZ83EacZwVRyKS3hQJgeDQ4TRx7vJGdto3q7boFu4sSGEZEoygoV3Kpd5t4",
  "key37": "36ydNYmurU2Ph8wScAES1t6jEN1bAjdJKWNj26MMNbfFZQvRdKX9L3gfPW9GymY4YLcPihiuGnVJVNTkSAJQa357",
  "key38": "4xUcQMmtTD846bKGsvT5jM646QC4RHmYq6AAxJUHwJdgi79oRECCXPwSN1sN4FxqcRomzjLfgYdg3aUL9ZnSvbdY",
  "key39": "5qdkApuTAAJXq7F9aSoDzHbJkAJGwkcxbEQYUrTKPqzW46Jrd4c2gXtccHr8MfCP2Y9qMcUjxnNjyQ9UG2GuWN8",
  "key40": "2j5jkDGqxe4ouLvaeRguXTGxKGj8y36fzGwbDTuh8Z5hPfzbrPB22yg6tjZs4hX7P7F7JgZRz8e2kjUsgf8ZtRDg",
  "key41": "3hCNhUoxemic98aKWPA9V1rAZcVrxDvZpC643aot6zAhsNtwgQMSumUQeFp4E9zye4RZ2dUHsFzb5gAxaMF38heQ"
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
