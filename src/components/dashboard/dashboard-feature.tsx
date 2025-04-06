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
    "5pM3fFECuSvMfxmomhejsNq4ECeGqPz8xbaDrahFMpNDy1mzcnm9Vr4KRmbM6FGnveyaidyyisv2fG3Kd2ZgbPYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2waHoBHg75TzraaobXBwprdLRk5cWUmHFTwqRjgraW7S6CzjusJUUsz5XxL5MArwphZzGj5JddS2eEJUvkArEYKA",
  "key1": "5NpYFKAqGHFEP4FyTpLhiiQNf2bpSsCXTd7mFPfDxEtcQR2YxhBW2uHGCAJDTkci1kuMaaCMG44HaAvyDnXZ4nfJ",
  "key2": "5xg9jmAij4jNCYhSue881QtD3w5CqdwowZNhvx1dcDn6cxQmkyt5iuq29PgQMy8G7HRXSoF89ee7yNLkbyrEQEpr",
  "key3": "3tpoFn9XrA8qkbdmhhGBVj2koHMYQont7pDbGkueuwwyebrhjgkQp89rLoRecAvoeTQ44ZC1HgjvmhGqmUKZnM7S",
  "key4": "4po4x1dMyvcxTYAQ7iShJZHjGbDXdebF9mQk81KE5fozEb2z1Hen1i1t8cTJwwqd6prV7QcfKYWVgSeog1apQvgk",
  "key5": "bt8819Fe7nBioAYtnFWUdhKoLqpbGjJQxBpYcWzpcJqCfhb9xCMy7pSAY5KSmRkey4JfZuRUWK1AUcumCPQ7rsS",
  "key6": "428EbpE48A4do86XA5vFrwvsMiPMj29zKT8Mqx8MJK8H3pVathbtcdpfke9qkKdVFaZ2XF3QBMoqB8SNxpUJjEve",
  "key7": "2P6zy1bKMKC95ee3Nn7RcGRVRKxt2vzqueLGHobvjAbeAvmgRiBTkDtFQd7ndPQCus7m3vGTmEXit3e3UbE3vv13",
  "key8": "BpvwLVtPMEHwg1uVeWvBaXvgjQLgMUSPPsUZfqVqFcUNCvczd8ueL5bLUSdpC55Ardze3iscZA3wHgikstrAmcy",
  "key9": "c2NS1iet2iG22NCJm8ohnbkPiV2aBxPin6iHUUt1jSeVYjCuTbQQJ4rFpcv9anc3hbMQCbR7NzsApMoVQzBKf2h",
  "key10": "3b8Y7NwtjXGJ4Y7sWGQuQ5Rsv7p9ooN8QVr1Ko6ytEdEa4DfXHmHLHkQ8ADdaXD2VZjF78yuaA7RzXPhV5zn6pzk",
  "key11": "3o432iC4GHPPiRo3rFfMMmzqZhEN6ML83ZBGpaSDr6tUnkJ4U3JtxxXdtYxtrwVR63eSQpqyPGoAQc9bRiqRQbXd",
  "key12": "ifB1qfJnALtBcE4MqhkXZT8JHdy2b8kV67JDooo9zAmbRmtFB66ZM7qEWzkhiBMmzyi5k1jVjmt6qyCV9mjDhdU",
  "key13": "VBCR8mYNT8GB1fqogEAinG4bbL2zrRC7JVa9eYhjQAnHZpyQpKQPkEozyib44ey8nrnwMZ4QXJs8nxsj51hytWk",
  "key14": "5RKbFmQWWTYCSAneGRuiBaQjCHh4H7TNzJbtN7p5QromCR2CAdxYBJ7zr4B7PGWW46ZKMHVAjDtEjorjehPd52T",
  "key15": "5yBYWbYX8G5nq3yueeuq9TKsBYcAtT2J3HXcKhWfMGTbqssREAgtGSQ9Jd29YU2SqjJrWDEHdsrsveyFctiUTXvy",
  "key16": "2KvnVxXBRDnVM5DUnUP5WTTyVA2ZiPtShGsWEaVJpnJCKUPk3agvabXpMwhYdwnZLPvA5eJyFW5amFZismNBxKjU",
  "key17": "Up72ve6XcDwe65Qt51t72bX7yoUManRHTG53cJ3pSjyQXGBBCnDHcn6v4rgNQichByBpMPYGoXrGyRpg5hB5UEq",
  "key18": "5t9L6ad6tfdUV9UYUPzNsxTgNLmhegsP8uueSdr6jGVNLR6J8GQzSgfeDzihK6GyY52tjRgqFsQkRNKXvHziuNqD",
  "key19": "f89KJN2F6NyWzi7MSgePPCNhnSdKQmK29fw6gMEU8U1MnZHQvV8958Xqhz45SBsgYid2jUjgcSLtppyr4RLTgZ6",
  "key20": "4mD2pq6oMSyhyKufoJiXiT6iR9CKChFxmkCtG6dwA8KKZhHcvEHKQvviQxuE1Sy8V4fLcYiCyLWEkuVhZNhQWGVh",
  "key21": "4Xf1CsYCbUWWPrQYVructDnjD3FMiNP2APtgFxRzixSzp5cARGg63wQ73Nwpa25bTijMidTseUs1kkvtphpioCFr",
  "key22": "rkWe7Gjhwj1oXAGxU8YABB4mFMUtH9rVcHtngXVz5oDCq7pmd5MnTVsqaoQjGEufq1GZrg8eSv9Jdwc72CwCMtu",
  "key23": "4fJ2NyjBhumLQiCui3seVMyaTM3ETtVUXCvigp9bWFXRJFJJXdVqu17j97Weoj9mAejeoTgEH86QrdfHohxCrqgB",
  "key24": "aPJGvJgBZk8dFx5fGUkMHy11y5bDjPFcyBvbm6Vq8L5EsfrV7dWNbVqL1camMRS85Y36Q1jWg2KxemY9vVk69XR",
  "key25": "KojV2Ze3RMQYuWbadYuHZEqEoUoxkcm4vAWZvRHXA4aPaMqB5nTeq5Si2YKpAeWvAymem4x5Lji2GNYAqjW6XrH",
  "key26": "2W9wjXpFV7rtQEZquXZTyjE6AGD6JCBm8wAQT9bVFwKREfnUH9a8tYjMu4kEERsALYVSvnESbM6hGgfLVQN5gDWF",
  "key27": "4A2YwyBnJS1HxWkMAerZaTZvZfG55MVU9no29g7dN27sKxHWQDSZ9UfRk1q6QrBKumJEZvTBzvYeyUoL4kRwXs7q",
  "key28": "3nN4evxV8qi9CiU8uqXCqDQqSz6aegVrYMpcFaXR9oboZ2KKUnwmapjDFLtXBLu6FkDRbQSPgsMDmbJEpQH9Gpek",
  "key29": "FxVUyFex1YCEsBXAEQreYsuStms1omwhFPpZfa39MF2jocFU7wQpEeCxPhuX1nAf8KGVxzqko84iBGGshteEy2L",
  "key30": "g9RsVJsNCnuo1krC5ExG1oQFATutDr9Nxtw9wr5HJwou5Stw7PWupkb95XMiXmcJQ5pWiKgpZTkTnivAG7mTL9t",
  "key31": "3gBJfqqgQxtEg32njmFi77wtP499j1WcD4Ra63oH66jsj9CwiTF4jvgmv31zkKZscUTvBzwGgx3DC91dVBsNBaHb",
  "key32": "62VVX9mZCTuWusBAW3MdJCJFZW8va4eDPVPed4McXQnsxRPyKVXRXRBDTgeFs4GKAYmmf7ccGxg7d63KWfMSAX1R",
  "key33": "mmVq1d8Pn1RXj7uQjft9rfGSDQNCq3EU699H2uTjSMHDEvSz5VBgpChKjTHwZ6oAuJ8sTmAmvSg1FXseZR2KgBF",
  "key34": "5yuzEJg8s99YnuScGSsNaT4Pw95jKYje7VKjQGpRkvwHC2q7udY49RfCD2CdF6xS8Tx8Pt6fkhLqzzUJEhKdQkxo",
  "key35": "2AQR2WTp7Lmyde7P8rakN2LEfuYjYfcfzSLANvTebcswkyzuCUYgLdRZ6MFd5D6AYoqBqtXb9C64Ygfvt4QbvQJa"
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
