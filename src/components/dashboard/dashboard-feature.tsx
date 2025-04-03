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
    "oqRrLED9Ki5JBEkkTUj3g4UaqjBzaXXEedR89ScKQ3r1qUTyoz1a4zbDrdisYiDYq9yeaTHeTR3Fod1NY6a4kNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xeW3ifzBbdFwkr5Qz8jXLvxw3121D1NDxD8Vtj88TJPRf2AefQZbEUQ8xKXwDpujPLXZHc98L3bJzPcbcnc4Bte",
  "key1": "BNsKqXJzTMHfiL8CukZSc4CZcAjGQpzhJ7DFoEMnAhQ7Bm4wRdFE9SGDDfhAb6jW239CeFa16oH8LY3BVrr6xQP",
  "key2": "3jRiSVsFTZ3jUhw8WcCHpw1tDrBRcTsi5XF49TzzDLGrMYahrDbQut9bqzE9DNVw9DkyCfuJR9cmN9iddJB9UFqG",
  "key3": "27dcgFhHjF3GPs8iYxE5AXx2eFnMiGV4M1BnH9Mc3JLg9MnDgFZzxCgnos1UVBhfCKmZNAKfGE4DmR97j8wc6Bbt",
  "key4": "3UfEVYiu6H6xa8gUJ1WFjVGp6CtnujjZw452Q6dUBiHgE12eCc3dyrJuoNgjWQvFotxc2nTtB35c2ZmtVTRXZWTT",
  "key5": "52WrTikUJy1orTVRzcjKpH84776VXV3ktHBj2y7Yn6WfW8RSwy45aKfwXvMFw7GZ7LGqPSKZHFLfBNAL3Ux3jZ3J",
  "key6": "5yHeSRr9Jzr44u7msXnKXjGH1GKGv1As85Gkk7aWVHNR1uLWJjSp8mm31tzAKq8GrVxeFBYuNdSeqWRd8STBSaD3",
  "key7": "4jzQF6ME8EGuy9dTgbtyNHUJkanJnKD6WiTJV7zMPRyMYEY1Rt22rfxr3hT5Fx764p5qvTRRiQ3oUeGG9qpVugre",
  "key8": "5akwX8SWQ1m4sjPiPzqm8do7tdXTsBVRaTUNuJJwuYTVL2QPH6TpZGjCf8adux7HJigfxMmLrEcAGiqKeTdJv9ZM",
  "key9": "5HwnmA81t4bwEuiGXgLtJpHRWBpS9aw2G73aWbsFBu149tcyVQ7hhKUiM2m6qDt1vC4rgSW6kfuMV412ftsvGFHt",
  "key10": "3nbaQJnMUnjYBGC9wH8V4zZonupL8ae7urvxLidkEGYYko2CYchT9vJ8fEMurp8oSNQhV34hk9WmFQcxaTW6ZdVx",
  "key11": "3dakQh4TF6kT8ugABnGZpCMaEKa9xn4MVUTaFSGuNVk7Zg3zydbtYqQ5tEBepAoMPW2jZYQKrNL3XQHdTJVXpNGm",
  "key12": "3A2iYoLZNKdABD4ryDTYNt22Y3VzJaiQiuduUDGVSysyoin3HCdgEZpgbjpvXdychbDdFUHkhxq1WB6zbkAhjcmM",
  "key13": "2E5TpKAvGtFG1PnYj3NfkC7h52oSeM7hPA9qUuaZhrf7aNmqXBjfNvvcD83UNLGLGSy2oY5ncWA4WEE5ZAZEGgYG",
  "key14": "2ZAX1fME5HWHEtTAftkTAdPgU6YkKzguSeB92swNbxq7iVxgCNeezsWNBJcAiAWbNa1F2stt7pEvb7wuDAtKGnwh",
  "key15": "4reMZVsyADaykToZyCRTEVTe2VfztfemXmbbjGjMcQWNknb6NopuRo9QqB3JPxaDrq8bSrgKMjUWnyTPticmAeaL",
  "key16": "RUiaMRyhPg6nQ6W4Y1cbGre3R4AXSADscEWdFGaD3Zgyg2KW72bNbj8mWnrhfFLxZzErDPa1JZKAxMjHxpz9Fde",
  "key17": "2mAhpG4qdm7ijNbTzvATPmFQyKVGgHuiCzN2sfLy2JrSAKmEta8s8zd7tggjQyb3BWVZWgUVCH2ZAugJWahNaqsx",
  "key18": "2ruKWHpjRmw4tNQ1LPJ4JkWSUWFR2mip2dW1Vij68R4cagZm2dt9BzJsYibpWXz1dh48M4i8FpYcDuq6VKWFhwVU",
  "key19": "5rq8LfhAEtvFBXmnzzqTN79cUGDVFkE7H3cxyAsTEwjnWfuHM5HVGQcUe44UPnFC8Ypk6ShJnEQK6gbWr8bF5NR2",
  "key20": "4j1oNK5PfcwsJujgrcqoTMMoeUTgo7WHjmN2coNxg2v4RihxVjd9TwHe3dnZtT6ugrd5kr356UDnPFy3oz7Thiae",
  "key21": "5Q7x837DwVygjWZT2xMg1hxbPKMpHnKuURiDCZfJ5LCiUpYMiqcQ9XWkRtPVWRzbkwhMFDKpQhgFrGQ6EGWVVApA",
  "key22": "45L9jHL7ph8FjcR1o7RUD6Rw5FeGU8pCYafCD45mweDwPD1pzEBxDtBTtF3pR5nYLaAg1iEWf86YUDBY8DtUpKbY",
  "key23": "XGd56DU2XJBXBuFA9LgiUjyFLWqm1fX9KfpGB1Lb3r7jzXYrgiNeTggG3RLrFRZtMTEacXU6fJB5Rk9e6kvvBU7",
  "key24": "2FHhZEgg6phEQohvyCF9rAR2FMmyWQwwp1fLZT47oH38c9gs1UveHVCNrTw1G6nERUcv7HeGw9UQEx3uLCxm7Mac",
  "key25": "GNfvbutmGYo5gA3fQpXxphDEK7mQmwMagm6wbU83uLsxKmCRqnkrKi4tsULKStUGW7Uy1dbNh7sxSMpV5SXcRSh",
  "key26": "2DfN66KUWCtHmJE8ZpmfaxFc7edkKhZpNiAWbvU9Yna8tZE73Lfn7mYCoF94qAUjD9xhoR6RoHgP22n2ECbf21ok",
  "key27": "eucpEbfZfG6tfLTmDRra3kNiZYTcW5TZXqYTS7H79EBeV7eN7XrpTP5a2z4SH4xfCoESFW93oKMfAWhtrVviipu",
  "key28": "8jgbBwNeQkAAAAwvgKeamsG3STdmWHLGg8mNtVj7yWVWR69QnyMaz4sw49aK33Asu38QnnA7cnvk9t5erFLM5TN",
  "key29": "2vackFiKncToD5ZnzSkRasvQkizS2bZLjDXPYUcNN6nejne8xQP5vro5jvG1MSDjgb8J53X9MSs44UCxXsTcL7u4",
  "key30": "4tLvhJaZUiRpbjBFxquAtBELPPreh6H6cquBuQwMps1mqS4ma7c2eTeWTc5dGgniSuipdF1454FUDkNXJJfedLHj",
  "key31": "3KrYqBVHLvCj5PVGBw7m4UnfTV8q3vNr6ourukN4iqV6VAVz2e9jGYyn6U4qqvJmfeMTDu1g9ySAxKRkfcQkagxy",
  "key32": "4pKZ4VMyf9CqKGL87MDveyZHiW37BUoDKnoHRoW4m2EBvkbwTfUYJWA897EUNm9roZDKKz3mfvptU1EKuHfn6K7Q",
  "key33": "sSKe9FRCo6oL8vPigoSvvgHi5FKvsoJePVKGfL5DRBq2dVupCp2xpFr6n7kExbkw4zkhW4WGFu8AHJsZcZ2bSSh",
  "key34": "2FyjcZHE3F19FjdtJFHcz89Rw6DjEF14gRD5DLSvMWd4AShcj2xDRgFihokeyGS7zNMfXDGJcfp46ZiGXiQNi2nV",
  "key35": "3bcpBQTzjNvmKja8t6Xq12VTFjoAu4peB5Rao3gTqz5PU4e6jack239dGTnZMA7TR6pFDW8stR8jLHziqMBHpjwt",
  "key36": "3C9bDjTnXip3UCnqBQHUXZutWZks7X77cdtFEGTq1NXwqyKgjbZhfJbJFrJfy9twdJkKAaP2gBKvhgbKcGiY64Zy",
  "key37": "4DpiSUUuK5zhCRi5J7WLiWbiMqPD1JirZzujLjChEjWyXyEzVEjYJ54zeGmSM4ATsqYeypPhBWXTwjCFKS9yWPmh",
  "key38": "4CH1dvsLxY7ENUSawkVgbxYZzbRPJ3M4FiFWMgGugLPzHifiRpYMNAYMRVRJ5SiENb3Di9j9gzhkAJCL2yEKZ471",
  "key39": "5VTSvHmKb95ffSXAv7DokST3uLR9zV5Y42NZYhTcbFinkKqfGMUL2q84BaXFqsRznyrRArPzjLZG44tueig5RJ8N"
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
