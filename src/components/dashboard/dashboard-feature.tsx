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
    "PRrZXuti98rJGUCC9DX8aZTvz3aRLMAGeQPX8faDDF4LpmprKWgQVcSw2dTmb829dWiowLZMtGVgtcAFgsSqhwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L4k1ujnfXy9moPaMhPT5fYjyUDTfP7rDMez2AqFJbpLnqJHyM7wZr3zb4pfHXtj9Hr4LXoUhCA7ozYc9cvP8PWQ",
  "key1": "5V9WdDGDAoaxoyGv1HYQA9RxNTvBr7JNexckE86aU3XwjtDT6qTQAmu3oFsGxoGWqYYu5iPWooFerA73TcMCXTFc",
  "key2": "kyu9L1muFhE5MMpo2m7DMGZy9vGfx8RKP9x1p5gnZ4LR4fFE8pSoJA5FZ23aQPQzksCdMh26uFDNyPnLbwjwFp7",
  "key3": "5bC9qZw8WCtZxGrshUHHc2Gq24qjpLWVvgzcZdhhcDEkJ8SQdWxFj1ZcPTa8tf75Sy4bSBbyssGCjnjALG9YhnDM",
  "key4": "3cuHEh74wqKV6DNJExcseoeLXB9C6UVUna45en3beYUB6g9hRBt7mx4bgPbVMTh3Bp9ouvdeurvkpReiyrZy5xFV",
  "key5": "2eMYYS8QC8CTB9SptHL4sNKueXHEUXXESCs5PjByN3TS6tcCktWeWzSfr4rH2tX8NLoVH8Euc2FVN5DDnbKDMWv5",
  "key6": "5Pj4CUrQBQUzYoVL4TVMUbEYh8LpGYm5AcGumBQEneesfaNDQYg6YmSVRpRy7wyG2dNVf1NWSFUCn8HjwcCyvpPc",
  "key7": "5iKLmohTm6bCM3E1fGgrs5saZPhwG24Aut5D8TPEqAQWXeS1GWcWZ88gM8CcXzxzA5ZCuY9vMbj4BF5NAuGJuAQA",
  "key8": "4bMeSv6PKWPyq7MYypGhQ5HgKGznDQBTNJBGDoUwGbq4BUfUNqsMZpbqpvuDgQTCEznKWMnqH7UmHjS8EcEgDWJh",
  "key9": "54k3BhNiMD6pmKUDjFvEZZ7fta9QqwtgCoshB5SKy6QrsVByhnLui9cv8wWj4B6P9S9bvY4oX8MJwFzE3FQ6jiru",
  "key10": "oDWAWsuK1umSn33hge4atvd8anXXQVSTQD7NrV7WddYze9WvfxUStWAyKMwPk7riUm7MQEMtpZ5fh97kPMsQ1oq",
  "key11": "5xRGryRx5AUKxTG77qYn3P1W666FxT15SCeE3TVfYEYzq8Fk8zCPCgM8LtgT2KDLMGxs5TSVpgb6iLU6Rcvsci9y",
  "key12": "39QLWedWMHdoq86ZXiRx6Y2Mrtnd8ZM3QmnVaTQyHZUGvm8FixzxUex2TkDHR1mwCCGbi1YvE5PiUsYQKBepKGcA",
  "key13": "38sE58WsiYq4dKtbKD3jbozzNHj65GjZME6s4ZtPQd8fReNV4FyuC64dRsLUvCzwU8683bu9v2xPK992LJMk9cVy",
  "key14": "5DMsQdh15figi2Uh4pW3QEhVfPmGGJqqtBu3Q7PCWgfKnD3LdJFKWtqxfpAVbUysYivUX2AmVDTYiFgT82AdFNBk",
  "key15": "PsW8gUvwhd6yrbVEV2HabSf2tPkWyHKcPwLp5pYuugS8Q8vQQu1zaKyuromtbHxtCR9g8Pae4XuvAiCAHH1VYWW",
  "key16": "2HrE2wHd8nhrarkiAgZrvR37Z86SNjmHCogexUqPZkn2hQJMsxcx791AwWtTpabfrrNx1qX13uebfMtwBghUJeq4",
  "key17": "2CZAbDQTyHRA99YeBcL6WLUqgDH2kbRjVhzFGW4LR2MQ4NoLjjyzAciMy3XzcDZfhAsdxJPr54ZPqXDTHn5jySdN",
  "key18": "5b5eJpKDgTf262nEuLGnFDJVzJmH7L5zoWtZxhWteUEW36iYSErBPfxkN92AVmMtWaVziaAmAcPV1LVQ7N6va87W",
  "key19": "2wyeK3MQ98PvzeVMKQa74Lr2jBth5UDPNcQrjoVpTg4SWJBsosqPnYpAomU4vXnb8w9jCKU1ijZFyUk1xc1tjyT9",
  "key20": "349yaYpRxKgPrc8X5fyXjMTzMTSJa6qAcykuV6UvtvUSb2thxSCJVg9mptcJ1aQXf6W7oRioFCfLgs5homs3VSbk",
  "key21": "65RAWZfmWk7wYiZzxC4pSLM3hFEbXhVwvfHDNcBNPfuNiNbxh1hghy39Fa4Myb7utwpHYDD6DEJMTD7gEcrmbpBg",
  "key22": "5KRQuXKexrpEsL9z3XyWagTBDyg5PTebHWw3XEiwqfPzXYECx5SAf8fsjJM6AbQHyZ7pqZCmDyMsNJXGtSXFLVcp",
  "key23": "4xAUR8dGaKUBPdtYnoXn5DLxqiD2XqKygurqeuq3HdWdh51YksTongeR6PMRZpg2FKkDYHDzhv19bR3kz4iuxTfc",
  "key24": "r3yXJy9W9d22h1J1XuPdEqztxYmhTpxo2T8tCDRbksa2BYaVAzCBa4PqZytsEW1RUtNHVjLWngr8QVnUbpsvFPj",
  "key25": "4AtK1Z1V6WyugTbU64qdLCHnuR8C6Xg1ij8473zVHJDRJBd9yxSpEqaAuxJTmKvU259nGD3yU9CQvgBcaBsYHbi5",
  "key26": "2wzsHrDpzaNqSVRtYd1vngmXmQNgGYr8jnd8tWnTWuf6HkcGU2xfkMHNBf7LtHD5n2QdSmt1Jcwgtac6Nva84onL",
  "key27": "27gRT1KbSzVn1WcE3efz2qoDSveqthTBY6RcfDz9sQiDoykx5N97mhpWz2KP4b351eWVSGJ3ZbEBzUuhPUevAraG",
  "key28": "3pF6eCjyxkwxebyqAB6esWX3LPfVoQF9f9vk1J5C9GeKHHdC3M3wFLsAjSFaK1YJrB7j5916BQWNt81RsuRC8H6w",
  "key29": "4G452cUEuz1jk2vC2L3Xfnsv9FXM5mnEd9153aA87Cs47S6sMfMQSf56EUBHJSGrunpSHmLDao9ech1vS56LsDLz"
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
