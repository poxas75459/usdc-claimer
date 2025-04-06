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
    "5y5N11swKkztELrtKzgaqLbXJupTamgzkvP96eTkCTbuovDDjY4HiTotLztrirpt9uk8NTqWtPeYjP9hU6JLndRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yBcYD3VFfL2nYZR41CYqtannBFH1V1jXdcW9oXN8e8kLgwSwnRwSo5kvUi5fFfWD8K2oaF6yNMP2DvUkACVjNJw",
  "key1": "HZryw15CXLDgMPWAZZZehAQt6YGst2YU5BETTJJZRP3EDNjqRi2iW7QXnYoLAjXK5K2VhB6iseUTfuxqsGD5nPq",
  "key2": "2G43EEEAKbgKFuSwQaRJUwaM8ZTcwPS3sVdV3m5y3ZhtA4P84NyZaiUpfEbYBgrgaAXSqUc5qjRvhSRtwpdAxxmr",
  "key3": "5YFXDzxYWs5NTXa29JdcNFWUrt1D5Fz3SsHqvuqbPvwfvBrT41F5D9YTTqxU4F3kwp96tFcosZjS16fYW56nTSck",
  "key4": "Zx2f7bWWzMqAiGmFT1kD4bgTUas7ue32Dw3supirDFESqQGcS5GNEKiTcxLpLmQmfP3PMfh9EdS5JUEEnYR5ucR",
  "key5": "51F78Jk8Akqq6oprC1pjyz5YvrwNRG5ixa7cJBFXSdDwR7bhvWoNczehs3nWuTeAnEJyxXPgHBwGCMbQ8N3Nb4ct",
  "key6": "3BwgBqypdT3w2wCz6GhLsqpZuaaBWA3bQCRGzfGc4iCH9BVo4Mu5dKNDcBiNy58ueeoCje5vdZvQWTqS8iqahzjy",
  "key7": "5kvthSopF9vMja4D99FLzrjpgbEZkg9yRFeETfhh9GNrpwLSsGyYsjUvsYrKrkiaPEjkviAovswcHJhSjcvxhja6",
  "key8": "cf245MWQzUnvhGJknRi1DVTSAandqy3nk45pUSTKdvd8heAbuDkguSt59Nwrjs3eeLBCN4ThqZi3AgvzxPXZqWy",
  "key9": "5Aw2kp2NAzEo7EWbRdL9EAH3o78pHCFdUhBHMpPPxiPSdWKz4n4FzcdBYceYbSoWgkkwDuzVpaxFzR2nQsv3j6q7",
  "key10": "eKtmUcBgcTfpWqHo6mLyLVEC9qgSnRoSLAPETmEfT5zu5TWjUq8KoXBMndh5g2QEU8yMAFt6w13UTyQbtoXj5EW",
  "key11": "4Xp5wSeKmKduVYz24HLjGwhJjRuRqFDZNnifp2nPZ3W2suTTuEQYMtQnxYswuE62dshqqranHQwbtxC1TULo6RQS",
  "key12": "5kqwK5VNmPRB9Kzg2644rPt3vwbNBAt9i3PtaDVo6uaALGBpAh2Kd2tgiwqRSdFkKjutojjs7U9cqzqRZk1ogFZE",
  "key13": "3o7ppcA7zFeHVopJab7sQ4uVRAEs2PhBXwAJ2oRK3JH7pRAZKf8qRfG9vtQgeKP4ZazeZesnsrK1TcWpg9g8hGhx",
  "key14": "3dkodnF8im6LMSNjQiSdSoNydv4jm18CR732sBvy9AMhyuWMCC86q7vxSBu2js3xkRo2vCN8zXFsj5iUJ8akqoCi",
  "key15": "5cYJjARKUWUH9u39rLM7CSFsi4Yg1SXCphZJqqCjrXgZrgxHnRR34gabAb3GM9FBs7obAQwpcHAf94d6dYtYosjQ",
  "key16": "2Uqu69iSZ9fKEiwCDPkW7S76hQ9S2iuym2nw7JeUwtLVghxRJ2dC38vxDdrhydgiSLtEkdowNkxDQAqQzVutAG7w",
  "key17": "Zjrea79qgbE8XtjfjM5oHMntLFLxC2CfHLpYihQ2XnmYnoCGwWVf852X15jZsXVkf1j2R4eSQS3c8QrGbUaMGE2",
  "key18": "5aU94MAiYkRGhoQBSuriZLfSWkv64CXCbdnd4dY37LhgwFa9vUE8izVUEVZKq1hnc5TjjiZA4ywJwy4qdemHBWKU",
  "key19": "1EyamDDefM53rPZez1X1LiCPovZHi5fasiCNunN1myGvKVWRbbAJmiu1zYBsjv6JsTXawWxvA7mc46ZLQtA5ZQm",
  "key20": "4gocXjHtjLP8XKMB783ndFS9c9qUHHpCGVnxf5Jc9f7DUKYUTx6p7SiQ6pk7MWu1AydbXxfusx37YPr4dnTMiDGy",
  "key21": "4PPqYcjyVL7GAE5HAafdjmW8qpto9oUMiVBM79HtgNALBVuKgWgxwpqcVWQnmZsLVTmrTPe7VKXv4wE8yCALC58o",
  "key22": "2RiMiJngEQyLdf5S2dfW1b9chsqCWQjjzWjuWhK85Zf48duVCwBEduFwhqHeDJae4TZXv7msN8cYFfm98Cf5sprY",
  "key23": "47aZjWu1gicNihaRNHxycFDWe4y4AxsV7ekKjrpNRmGXMfjGuuZsd6ES1f8a1UqU61tMLbXiNztKXntTeHaEX47j",
  "key24": "53LuBWSr3yFrckMRs4gLtY3rdBH3UhXQbV3tJMZPxYPiQbrNvqxCz2PgWZ9nR7xqdoMpMTLqBJwfeJaggtsVAnk1",
  "key25": "3gCWCAq8juqT1Np2dwK6tFZpB3h8B5ePFibFmTeHEjQMC2nKrHwMVT4WtX7V9S9FJomGBPyE5aRrg7BhKNjmGqtD",
  "key26": "66UNESXYqRDB7aj2u22V26ezw7jWvd9UFeeyjEAekbXAT3tg8MQb1qJJQ1ABj65RH9N7LgsnSkRCALDKJHsirSnb",
  "key27": "4NHwr4xnGEKruGpf4dzT38itgoVoUA3hNkqHcK3LpCkWa62q1tkaCsB7hnsYGGTi1tDo7x8Z76Y7T7azxrTfQQ5Q",
  "key28": "3rQCsyZF6LcVBfviRx4cdjq1RP3erqdFk5AtthkMWwXRQso2rerveBVjuhcVJ8W7naVhkMQZQCQeoZC9QGjZPxHb",
  "key29": "5oj2CMRzKg3PXTivvDDzcefMUY7JYykegenaHJpbQVrDqhNyLPX4ViwVr4ueV4FyBN3J9RSP18nj896HNegzZqPq",
  "key30": "5d3FZfMzEsUZJhyMBtPJXa51THWByEDUdKhTC3ud2oiiE9M5kBU52MaaHU2dByDwii4NqJkQADuo26FcoTekTxFS",
  "key31": "JjmTb2uNTvZYN9jjUuYZ6CkuEPRwQmgeGp5b2wiEZ6YQJTHc5QuRkaDQgPLR46SE3HnQZxkSMod9MtkNqgwwjQE",
  "key32": "4ZDSU9fYLrhZC2up9Bbp9NAC6YuUy1aseQAv23rLGSR1h45JYos2oo2k8ftukX2btm16c515xHyQqJ7XhgopUCD6",
  "key33": "3yBjrx7BP62u1CKMawP4b74rJQhmC1V8oH151zLY4VQN7gd9GrsJGf5h3FV9rohjGpaA4m3eQqnxgyhc6jXQAp3V",
  "key34": "FCaa4qyofG9Sd21CyYXdPKiXmnLSwYvPYVgTaMKz6GMng8pyRucVNnc8WZ8iwsgvxiVMUF4z19u7PNvch55jwJZ",
  "key35": "7G6x61ELxcU41q16L6xUgcF6Xtv6a8xqFpxZedzMAiqGzkErtLCiU6qKud1wyo5pNeqUy6shFgxaiSGyhHg9SQ8",
  "key36": "A1p47jKT7xiVyZ76rcN8FupynTsx4jbK1dzkjpsaGk4QJXENPr98PV9eMFZAzMUsw526smGgknkgG8WgeHpABq8",
  "key37": "2QgdJncZBPzynMYXtMVU89oFZyhHSVrG9JGNikMTpkfaQxf3BjrabUXxnyLrTASa7mR1p8HvB2F8Fi23RBderZxu",
  "key38": "4z5BFMvgiZT3M6xsRjUKhFvo14RCV4o3HzsH1PHWz2FaASanUiMffEjwc1qFj8ZyWxMYdUPyUt7XtS2edqAK9z5e",
  "key39": "2dw4KfREbf8SMLsNHEALqFSdkLstpcgmoRyujPwh3sCmFyUBhuZnP83d7zL9LGxZK1QFBazoSWpddgNAe6kU9gxB",
  "key40": "5YYNbFcLSsP9fWKpXv3aoJpTQ7tX3eYvAFWZRqw7zkeJ4o7U76iCn9bEN3YYshcaTQM9AJdmD1hd2yK1iYAB8uL3"
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
