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
    "hppdNjqSmweaxrTBgBxaELsAAxobjpubbZm6vDzhhxajFi82dFVLQhbodNVC75JxN2hM25ojPPJKhAXVKmLkWwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mrcdEypFwrMgq8ovAGZWGbxBNY1PMaFBYPkngecEMrEbUuZoNVVJJ5H6yZUTTrT5vf8pPBngqG4p6hb3MgqdMxC",
  "key1": "8CXsXCuEnu544qe3CHSBJ1oZNyhkRdesd2iTUWGtcB5Yt2mesUSau9BU18iMY8uYozLpk5CCthEcuzdAsy9N88b",
  "key2": "3DVFBT8o5DrKFHwuSePBJ8JMyuDYW8XwNakhCGrfw3TWrDneK9B25cfAFrhXyLbMGsJ1LPTgQ3ipjAznfLgqz5R",
  "key3": "54RRjdqKidqkTprTrHkHC7VvzARbR3HyfAJ48WSMRyLGw7cyzQ3N89viDyExqDzDjSsE9pqjBXAUdH5AjR1L6dqx",
  "key4": "whoQYFYbD5MbAPQgmDfBaEXKjSYAqBaotNM75nwf94o9oK7cshHuiD9kX54Uw3LcyBzUc8foZ1UjiRvJX59Bgcg",
  "key5": "21jricDGeRVxUnyCg1ZcW3zevjVymtVRd5Qfop8EVtuiKEtQvpGVSjoKXQ6uqCL24Ljt6NRTGzSzfHmgLjMqzhaP",
  "key6": "5veGdvABHaCXLiFqob3w8RuhtdicKqTjA8QLxQebbyg259pXjuyt39uFdv25B2oy57fmshe2cXc9cNVTmQUiSS6e",
  "key7": "2qvAjV43wm3wCzcBA35gPazQ37KcUJQgYBaQuKCAjrq9oJqob1m6qFJKUjRTauDhLtxKFAxu1ipV1eF52ZHer3rr",
  "key8": "4WfYixREwWTMbW7qB5qdRX273UpxijZreVnjE8QzeJSfCsyEd1v9Wf9zDrtymV77YfoLzvQxvCzyhSPZ7zKtXgVR",
  "key9": "TtPdShXrMfMawUrKgx9nCm3JHduupgNjuS4EbWifmua2MwLvS2H9d7WdyixydmHLABQcb9K5NktzWKPAdbLgFAv",
  "key10": "3VpFQcwiVcNPtDWkeH6ACqgfHPB99tokmLaprCrwNreGE5CV8P1dJzY9cwUHfFzfNwf4cnppxrs1Cr8Bi5wTGBBo",
  "key11": "5CMv9wTiBRD8Ybg2aDhGKaxtHZg8ujKGDJGgyRxgowXt6ej5XojQNCMizdmXDXo3bdYwV4qFqBiAS4ziUMhGtswf",
  "key12": "5XqFmeTUjXeoxDSy5jcFeuxwPV58PGJdMVVbnotzBmYXCS7ZMceJgFMumVzucsiwJSLpWS3yYZymZM7AGg7et3o4",
  "key13": "5X8QJE9LY3XVQjK4BTREVpDy6Xf1ngZTxk4FaSdhJRwtAUeXvqgnwfMaT6aZNt6e9LCxZ3fTYh1FiFezkc3NqENb",
  "key14": "44jfHutqiP1DeAKGWuAmfF24EdQRfDiMGBKUNkKg93qxYeqYWvXDWmXV79jKPQAbjM21zNB4U79RbfBkvEfbfPqi",
  "key15": "52rffSbEkgqJtEnzaojT9eBcRTqE5B1E1LeRgYfkMhPYLJgQ61dkPC3o7Bnk1TheZ95EWRZtu2qagoaVK2gv9RSK",
  "key16": "4bTpStshyQSZKqn3Yaga8vL3uzYUbUZ9NK2UpaAeu4NRsG3sVDzpfTVXZS7vuzkWak2ixfnJdAytxK4Ndykj93Ca",
  "key17": "3eBi16nkF34TYU8DzUTAqzVcR951kLCgMjUmRG9CqSTTmW3AnEWRmc9J8DS4ry7GWe3rUYCZ9dQEP3hKEvByDRP2",
  "key18": "itgEX5uZffAJAxrMdo7QGuiHAGhGYxzYBhr8e8MmXBgXWJkabHFnkxNXa5BUWDGzT2gLQDR9sX1dG43s7M5x5x1",
  "key19": "48LiYomN4em4CVf7mXGABeJKQpSrRjCBQmNuyP52sALXJTRfnm1uzQawqwnTguJQbzntk8MXwyTFhdSc1wxtFWvb",
  "key20": "636dSnvvFUw66y4dDuvXX1ohps3aAtMubyRAzStCEg4Z6s3d5q4MaTH8Z8P3v5sVMFCCYE4gPouh18dLk8h8rCUo",
  "key21": "3G2ZvH8tVqaVUbByiZhYRSKtD2dJTkvqrRtbKAsbjUVqYmm9yGZXdqjWJfiHbqRDUZ69gtSzE6GtQwxExdzuUHN1",
  "key22": "4CmQY8fin9uFb5gfq2QWfZ4B277hzeNcH9hxkEAutQLoZv2Tb8srxbLX9n67x29K1aBRmFeHtmKWfrTZBdzZrMz5",
  "key23": "2KtYpvB3CKyV1nH3JtAmyjAobT72JXUCshR39UosmcTDsGP315EbDs3gD3ZMR2oDYrvYVRH74ftHhkwdaxAzGVuq",
  "key24": "5Afok5HRi5ByaJBN7diXDzBfH6Angs2Umu6egEv7iNY1XfobRvrbpj6p2usojhqaFyU4u5x2WaVhcXHMRRfR4EBo",
  "key25": "44iLwU4ZGQMYsLLNBjHvtBYT5EmcVZgaE7uNybNCCNmPcXXbdbYV6rDNSGMcLLX8jt7rvCMUjBFZfLAswKsn3sQG",
  "key26": "3paJXPwHHuaKoCFMzQkL9GadwZDhggrSNEwDZWCKqHqq1QPUgFfYpx6p7uwH95qDEnUzpXpo6TpSLN9FzLKKPZaw",
  "key27": "Arqn6oWKC9pnJMWM6jLsTbCRQdJnmZUm4VhHHfAWU6sUw8D7FEVrPVst8PPBzEZBHoz164PCuLFo62MqQjGQZub",
  "key28": "4DDVvtQ5TcHGpaaB9p2gurMyMmcWpRPETQMh8iryp4tSvMy3oMAkhz4oX6k4UML32Sk5MUtGxxkVRjtzM7YqEBfk",
  "key29": "5X9bqGtM8YKezzCPsySCwu2ntUai1g2JBa9MwrWVa8odYxHdiDrEXsWRzjimqKupn5kK7xnNqygG3fstpVoG4tCL",
  "key30": "3QNEccqQrq3VxQWbcG6BeA4THooA2k7jMmCzUU24VwZ6WRZxurpVo3ru199fiqFr2FfHHgYTWWqPJwyAXNnSnudX",
  "key31": "bY6be6H99HsXBBNjrduF1CBa9dS7x9gmDgdbXcsZop517rwfcK85HRJAPxr7sgXsTakQvbX7doUrW298bWApHdQ",
  "key32": "4CMvP9B5jvdv5Ddzvk9U1eFAjyxQYMg25TRfVvKFXhr7t9h9swYrbbqfZkBV3oLoKbWZUHW7JNmK7gg4CyQ5Eeis",
  "key33": "TKxZsYNq4kajD2rvSADzsGqwHX3UML6hwJbG7KEp6aSEDtKxVb13dprRrB8A4o2Tp4jWUuDMv4Ub3hTjj8qrK23",
  "key34": "5ZZQitkuXWbBVwTeDy9ofKhfo9iMnLvBc7ECevLucRSkMRhG8XNX337TQmKdSg5fJZDjLNbLpq2ZYpVEWFSPTepU",
  "key35": "jW3Q2FDXEZwj6jsGqLVmumy6WojuiRppUDpb4USpeX3AF65ypyPkj4uGu25ECmfaMS79xHNtL8qmTro2eZzeC1o",
  "key36": "ezEF1R5btr3X95RR1dUFHSv1qF33R92E3TYCVzhLErmz6wuJEPNE96EW2W2B9BnZDjUR7rVb12uhE4pgN5W2W9q",
  "key37": "56o51Db6WVgwM8cAsM1E14CWYVAcLENRjK9Vrr1Am2rpGX1Nt9cUPZcaLb8a92QV9mNDn6hrFtBSuL7WPXFnq3wQ",
  "key38": "C7B6JR4VxbuytXP1EUyviaoZbf1aYE7sfzporS8egMZjzF6FDSXXujGNKyjjZeXLMDmgfryvmHinyxLXmYGZBxM",
  "key39": "44Z8ZgMMTtU6adB4gUjKhFXuV4zhM286V3TP42xZCxH5EeREBZeQpc5FxLCmHxquVqWGWq47ymWeaKAJqWMn2VRc",
  "key40": "G4R6n1juBxJ2HVmvCyKYFTyQ929Dwdo7ocq5HcsPkk9dgvW8zMUgJH8KN6pZwsm9JypbZq17NeWhp8i4N26MGFR"
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
