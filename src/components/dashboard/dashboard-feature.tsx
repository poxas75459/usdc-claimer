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
    "xCQhCu6jDxhpAp86vU3jo1dJDg3XYdub1yTvc49b9hUwxCJuRZui2mVPUcHddabC5JntPfCe5c7gkpDs5cCp8UE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m2QG7e8GhtrABa8i42Fz37xKJcfNtfbSqn98GcaUr6kBXscqjXBZe7mvbgbsgYYvpMUEsrapTWbU549vBePQM3W",
  "key1": "3RUKrp9aQ3SSVsdgLexT2juK4iRqonfXZyMtXUQwbKktqJt7H1KLJjhxJD7oiR7PZAPXgLErro6dYfSZapwteJQp",
  "key2": "3xB7SgYS6PurPSgDxhMuysP8DTx7X4Ei7UVx8DTh2RaCP2FamE6NWw2nE1m7GY6X8YFg66cztW9ED9qCYX4xzdXt",
  "key3": "2AkvToPz3mtymuB17kfhAADRiGuXPJrYLvK24ZrSrtfHFqCR5JqowASVBJZZ921t3SDv5vtGnSP4K9mQPrCGZh6v",
  "key4": "3nJqnPft3f1TvqCejF7apa5Xh6H8Uzd1GDqcT6Jj2A8BxDKw5sc24emZv8X9g9dEbUQKsF3LgsD4JMibzzZhrjcK",
  "key5": "JGdTJuGTNsCAHAhywfg7GVxSasmVxsCqbRDJMKwm7Tz4UbbjChHwSsoh3P9cJTUYnn7rCBPVncSouRd3b1BFnyS",
  "key6": "2cQ7LxB6rpepwyE8YMxpoGmpmbQ6G3rhu9ZrCtbkwXJsovWJzrhnj27fvY8fmD15dau3ALwDsEWCMiBvmVMJGQjP",
  "key7": "5AmZrR5os2dw6Vk6fM6fVr8rUniBqWK9KexoEJM4yLXmbdfvQ1coF9udp1HxKMJKVuqPaBvSxtgAqyrFrcFVvVRE",
  "key8": "5HkvFHEiZCXTJLWCE8oDJ3t5TJpgBEfHFQxXLTSCXTbunxZSSeotQyKwkBAmKtCqJABvuZVHdcaczxCQwrNULhJc",
  "key9": "3Byg8gZ8ULcAX5ro8vTkkwHAQyTGtkwCrjiQwuZxZAya6mkJwbjxfQK9ujLvXMvHzKfixx9FoUqCsoj646MbJPjF",
  "key10": "5kLRUnCC3gfQDo4fTEySxjaa6yH7ZmJWrxJVKWWLL34mPSHfVCeVG6RVWVTs9yKxP53Vvzg3WmdC1z6mQcQWGYph",
  "key11": "4Ma4bQebQJMf7VHBCF5eeLstzi8gQ7nJP4iN3zezHrCNVM4RWX4xeMhjB3tP7uCvzpVdbqJ4B4rhwtNC9gv1VGwG",
  "key12": "5TMYWgfwqMUbPVCgnZnPeEWgfL4spjnDgPDCCqyhNi4Vu2jF6gjYjnTfpSrzcgD4Lz3SX2kPznk2vmAbctvt3iVP",
  "key13": "3UHUo86rhZKGVvUCge3KxEjbGpCb9PD9tmDswY7JEYt6g2iqydzFUetiVykGMFG3hQHapHjENctQwTGZD4Zt6QAr",
  "key14": "5p58o7KdyNE7qNQtpCtjF3JXvC2gqEjdpXJh9fffEHjD72CeSSawyxxU47ZVFFBYCXCd3Y1TJgsXfdxPMygvSW5a",
  "key15": "4gnYtP4Ki3gf3nEDssTcJ6CrCMCq5XbEQgLZ34MN5rVE3B5eTrH3TvXT13tJA8BoN2ryYKMnr5GF18dFu9rB81Hg",
  "key16": "oYzyG9B5n6Fxi9R7vCf48xazvGVDGzfgu3ERhREojiVuTbEgsJjyd7ERbADBicoAQ6ADjnAo3Lu7eoGP9P6CEuf",
  "key17": "kjs3rnmmenoHNAWr8JoRuyysKW5JkpkuAVjMaSjiDzsP7hR5ghRkgnhgdexfAVouSESUNPVtGEuhbcucE1ga861",
  "key18": "2kBXT3EG9wgXaJ67nSrsmbwkSRSei951bjwKWWujvg3AUcfU6LDqsMS5rimBqsx7ZSWwxFBtyjqx4EQGv7f6HULq",
  "key19": "2v9w86PwivhMGSPTqEBGFryWfbxPB2qt6JzeeF9rygZBjcUNy8UmNbSoM1spEkVB6U3Ehsj2YFKCrpHuF5tX92sc",
  "key20": "3ZMdcYsCCB9Hh4jq4k6tyeaugfxGKU3obeF6548Q83Aj2bdrevsHN8naLh7xzYmnz4diAvHEBcCXsRmyopu6tJnJ",
  "key21": "5XGR4FLbFErz6Cv9s936McYXCu6LLgCDn9gHm3gFMpVTC1XfRmyW5Bz5LkGMGKRthw54UA2CP9xFLNdqKo4DfYF3",
  "key22": "4vL9XKtZo5iMDfLcxxQbQBp2jQtqkTfqZwdgT8MDMHM8Jaq3Avfprvmb6j8CaX81ycFJmYC14KMF5iBDgkdKZn6e",
  "key23": "2BB1doYC1P5jeVPMub2vhVPm3gxgJ22oijXF1RMNvA2N8awkipYTt2NB3KhMFgJBbgLCmpoVVf3N5wwqTJkEZ4BE",
  "key24": "4yC7dGS4HaWSAKCW24EUgw43dcDBN1cRsfgcPMzgC1LPrCxev9BKv9srGTY2uAqB6eERs2QRhTu9h8dG39mu4zgk",
  "key25": "kv41GEaMstaNEUn3hW8UYfZyDXGHw9U4uu2DByFuVPRP5dpS9iHDEqpL7c1GL2iehcnvqYdEYpW2vqPhNwEP5Di",
  "key26": "2V2MPSZfTBpmmMgVetZHNfJKKqMvSrGr8SAj7pmL9ts88D543YSsmkuuXPM1HnbF5Uw2j5xMkqSgK4qGVe3npfcp",
  "key27": "5aCKSg5QTyeFMHKYat31FADsFFXEEeteUx8PoLE6BfjxmfLUMifRnRXtQiPhFnGdBs3DbZsuKZ8A2fg9Y6sA3Ews",
  "key28": "3H9ZNQw6vr8WBJ5LwTn1ecx2tbLZ3znafyX1jeRYJfyDjaMmAz9WE5HhqXvMngGhNUtFBVL9QQ1VXhTtd4y4aHNK",
  "key29": "5AwjBbdZLiFRHzEQps8jHWFGhQ1YeCcjFBLcssaG3UYuuzWRfrVZSVkeSFubhCL7nCNmHpmyZDF2n6Dfkzf91M87",
  "key30": "67fL1XJwAXGTj6xnGucfvmumn6M45J9t9wMXQjnsY5hww3Dppgz8yHpMnpZrmuPqiFFJNXXmiDa2HLCvneiUHYyY",
  "key31": "fJ7zbG8hKgFX79tL2BS2oQwaHqWocZc5pkNJ8pCjZG2hi5jC61FhXU17jbxA7iE4CkzYs5MQBnqNyeKLu8GL9AH"
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
