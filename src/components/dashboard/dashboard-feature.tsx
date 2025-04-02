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
    "3XoHCL9XE5ThwwiZTYne6aKMToa7Nve6EqWE7tjjXrkStyHGPweLLRqkmZQPS9NWwqNDQX5xkGiHFcoNHTcfNJWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ux8wCYCt4fo38ohQdyCCNdKDQ2VfjHnjNYoYJEjiSg5gULFtLybrDRWqEka8YqrvsVwtj1KWuoufF37PyUJ4km",
  "key1": "2ADkTKXqRZGDn4GfWc4NRA8XiyEgyFLf7tuTHw4ViQX8ezYVj4c8Pq2vTSu1TKFdindMnwkm2HcKDUK3gkMMGi2h",
  "key2": "3hExWJNptpHrMqGrJu2JDZSeqnmhnPsmwMjNSwfVb5S7GRYkHGBgj7GBoU7pXL8jbFuBVANaEiou8WZR1aJPerTL",
  "key3": "3cyCXi58SKwNj8LLP3upvTfiaZXa8FXdahS7sbLzU6DgBjRKxjqv2CB8Df76a2qfQ4Meuz7yZcdKhTuaqAp9Xcip",
  "key4": "4U7zHo1KwBhxrP79kMJnJsied6juP2pZ4jrkrSDPXnTw4MhFkzsEnPaPE3eQwn4WsZnJJwUuWBn8jZ5XsMBYGrH4",
  "key5": "ENaa3ZW5LcRPZ78Av2xFirYny7JT913C9bueB5tAVCsRG5jDEVkda28thiagxXKFAfhgWUmtDxnemBuUc5ngqga",
  "key6": "48h8Sq62TdNWfknAa67D685FdEibzJ5k7SHgE8wmbcFRwbD5XxcQVasf9kjA2DyhfLyRK35n5t5XGh1gg1XRcyGT",
  "key7": "zHPmkY1GLUkLyvSL2CPfVHgP7XqqHEcmY3UFaFUAV8pf8RwiZGKZRkUK59gdMjNFU9MnzmHLc7quZpzLKmL2bN4",
  "key8": "39AT79nQQHEEuAof7kK2BqA2fHEKTSqLZMKYpU2TyuZWTy51Dq6VKGpj9WfBjYYjatk6DWE48P1JAt2Yahy1wNSw",
  "key9": "2yUy6rXYhFoTBDKdnjR9KU9fa2akysePTfaXK3J4Zfq6YRBn8MSR34wgYJQFqbRQ2dHkosAhBzUsV9mMBPm76rHJ",
  "key10": "3wmVqeZYTS389XbuJq3uG16MhCz5iWamsb4f4MTdgj74xMCXTSidAKHrVJRJ7jogVXdfcY9iEdzkU5GoNTNo6ELw",
  "key11": "42XUHGYom5Vu5gjVJgQRATyr7TX9Zqe7EMmrtQE4WatRYrq6xh1i9vvB1FgsfJgwAdvvArjJWFB1RF7i6SdN91oy",
  "key12": "638iwk1kjUgipM1qWuD71sBEqhxC9FGEmBPhonNW3rfuvqRyKmhkhQmz5WG4qhP17TsWNT6ewf67CsFb83b4hb8J",
  "key13": "3YepfHDQZRmEXsF6MKW1KAd8oAeF6y4dDe4BthgRzZJtAa9MfUr18ped1eCgtXqVDnxGX9nnkd3ptS3UQJxAiWiG",
  "key14": "2vUdTAqfZFKcWePEDvVkrDcWnFsPbsoYTZF691CYrKrEX5gfzJU6ZA7fyLMZNEgNuz4Gf8vSf56UufiLrirrUWYx",
  "key15": "4AEUWZgSpkzhrudgdKxz8iKXMR8SeUYxpKars4GeCWYmZX6YAM3ZDKfFAhSQo18TDf5KhP7pJ3E5Z234aCyqgcec",
  "key16": "5fTNSQwTFpjAnbNPZQ1SLKcnjEQMPz4D9e6D72uV5dPkihALJAMQrbKegAfkeMk9abhLjzd1HuLq1AKnfgjGcvQa",
  "key17": "5jVFUxoK2xWg8dgTtW9wHEs5XeAsDXtLA96Usd1NsMVkUiT4a4PDzstqB1BWcMTLweGbF8J2ibbUQvRarBRGA1a3",
  "key18": "ohHxv8gQYtvgmnfyfzsCVXVrtMzicj9EeYfTXjpWwjUoJWMPmVgaxzniCHZcabvJQXYUKRuJL8U5yDsihMVbEcJ",
  "key19": "3L19tRDALzrRyUnJr6frj3VMBWihNFtRW7Bu5SDsMy9ZA52xoGh1MvaWDEf7ekjL9jTaNjfb5hFcZaoQH1sXYUZW",
  "key20": "5Dk5N4VfdBKrYWsyAGsbFSjrvCRv7vbo6RvjwfHWU4o5WikxbvRQ4hdXRT3kNvxY1GwfjfLSzjifhpNmYHHoyn64",
  "key21": "ghxmKYSVmTjkWJxsZkeXcG61jpMDDq6osDU2KBnqUVN1GhP4aTe9s8ow6o1rtXAiyBJjLM4Tn8eC8wR6gg5X3ek",
  "key22": "2HGsghbtfpNAaBE3EerTr9m1vdzMvbh6d4aEDG51Kbt9VvbmMs2Z4SRFBQxVQMEnD4gv1VDpk8k4VkqS4mMRYAzQ",
  "key23": "4nLtVvkDwmwzrtYDsjdmM7s82qHHkRfLErXE16sBdfXn5QvQnJEAuB9prWpaha1Zgo5fM76Z7K7aZkf4FW4pXn8P",
  "key24": "3gj2BeshUHFRBhcKmU2ZGxVF3hcFhr8DBJWURfZUzVju4yiWLdbQ6WaZbQ3mrs3Ao7J7hTQn1XCKYVZnDWEFBtpL",
  "key25": "2JSPs8NySmq8gJahZ2g5Sq2BJyxSZb4TansYrvTs6hJnFWonQBX1URrHSr7Xpf9E7HvL26zovMVrm8zF4BFXFoFD",
  "key26": "2UNLo9boVYocihJot4DBqTZR1RzFhPgJxrsnM2xK8qxMPa2EziiHZoUZAKB1ezQU6SuhUY9v1upprZfqJnPNQuC8",
  "key27": "3y2fn8yfxYNsVkFQ2jLHCcbRvB9YAeU4r68mSTRxv2Q7PmQJ44XmfdXoLZnVRjoNSuS3PZ8YvGx4MdjAFcbcj9z6",
  "key28": "2h6ieE1XXJu3aeZsHzZB71tv6EE83k7Hgf1A5t56AYn9wXabNVk62zKroovvA6YY3U76mQzoSsM9L14KTt1jooC1",
  "key29": "232tkdwPw6JicJneoi3Cbv7PGCJxUuiT8zZQyih28fvnBL2G8ELxATDTKSipu7g16ivs4iM7M8uZA2nCxwYMCXvL",
  "key30": "L2ABuLS5sM3otUbAwPWHGsVwDLQgRm1sd6sXqYzcRQS3fLiG8nsEQBBWhvLt999RPVVzkdABHkfhR8EE2BMZcuq",
  "key31": "Cs64CCx3PVyeJhLQzVX2WWSw9XJHxPyxXbnKDaVVXLkwYZWX8NHP8t51rjWXQJCAqiC8tRRxdJYa7qNkV4REg5W",
  "key32": "3yDrxZoxTfKg9ivC1eBme2vWJDEhedsFZ9qrYMkBX9yHhNMUAG4meV3bX4X6VoDCR1geEhDZ5RqDtpKCdJhc621n",
  "key33": "4oYcVYfBXTMCnxrfjbFxnFMtiA6DdG5rUTfrUQUSc5UYfkobZKTiXeovtfVrnQF1t1zbUxoLaMrbSg41J2NhD1iC",
  "key34": "651E2taQsJb9kRyM3YtreeK3iDeHnjcJu7F5UnFV2uEnEYuEvp4KeQWPKjMxF76pHhi3xjRBQZaGBNQcLUmBsBir",
  "key35": "37vT1eHFhes8ZKHb1TVdMLEwkb2B8MPDzsuWVcxMPnVyp9d7YQr5p5yjCQ7kPAYp8y5sTkxXu6ysoAjVNSupni6M",
  "key36": "5zXYfnsthvxYKm7ncPruEe1EefKXoRC9CNTW1uHfPaYUyCntydb3DqTLFCkJGeRmwqjmw3xvX7bt6uRSAF6SqnUs",
  "key37": "3hCuHvX3Qib8FY1tnNqH95DykvVb8g8xHKaAxCDMN8AqxKao8SA2So4pY424yUf4KUzsRhqPhudTuaXiMKc3qnC2",
  "key38": "3VZsVhuXJfs2dXGkxsH6jfC4B9CR29t9XUq5pi6CinRP3isA6P1oTP8EKJsUmgMUco7jCSSJ6nXDvdW8SC7JVbb1",
  "key39": "3vVbGHuULMuztgetfi69CXhzFGpdhwTrNEdTg58GNcpVAe2UkAYHq2dbfiwM4jeDh3N2j22A7BRDFm5T2nFyigcu",
  "key40": "2m9yV3m4hP5q39ZCvgq6HTX4uLxvU2uWV7miwcS6pGeeMMG84idLHKUkoeqD5CVpYys4FVcJ8kSFE5prDH7gxrN5"
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
