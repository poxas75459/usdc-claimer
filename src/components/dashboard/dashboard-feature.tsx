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
    "54L9TExQp4KwzfFLRg4HowGA2oREKLa6n2zrmqvzYqRUkNhAEAaiNxdmCwMCFEHBhbQxDVwweiNy8icRjd3d54tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2br15sqJLssQh5FE88azYZ5VNSqC3VgrAoggHUAr9HoHGZ8yMN8SsJCeU4w7zDhbY4Czw7N2LexnwvjpjoM7Arjy",
  "key1": "5wkkyQnNPrSYVcuzJU4CmrLproEHxGvPz6NyrdKbW5RCfQK5whi8SVMapPo3WpibEaH7uUbqi2bXNVTDqPHWZCBd",
  "key2": "4JAJedD5hqSiqopyDFVMRyGBxxDKpeeiHfPE7ziXb8pzDGoN9phbD3BvwMQQPgx7RJwwH3hGfENj87pQDfE7z9cC",
  "key3": "3DrS3jbs8ciTHTKSVcohBsS9xdVwGBQYgcyu4kYRtp3AvPdDYuBBaGYggBu69tPYv1qtMQHQMEXkqj4iBMyZmpxJ",
  "key4": "3oyRRYH7L7uHh9cDztd3gEUa9FkhRs9ntiBAzkhjTzNzjXEFCHZ6LJ9e2MA1vGhHYgyshrY68EXsybkABbGZkLSX",
  "key5": "CPmJ3XXQbmijxsNi9XbC9rsgPFDzQYdARcHjB8Uk3n595psQCrB387Q2r9cf1bMYfqm9tB77uJvYGfgb6tAioeS",
  "key6": "54YhpxoRnUcGQbwyXGfxwGjkma45E68svKsnfNAHYJ1q1v8W8scVkjV6wTCk3kimUo7voGJEVpdyNLDFhejbv8gi",
  "key7": "3PBRUXawY6U9rzbUmM1H5HFfDyCt6Ani28kpU7U4q1jBdKijMPkWNgM3ojjsALcBf4pVpTEyCieyxhcHNM5om2QR",
  "key8": "4938RuFrRzG3ijMLQaCFBB9wzfCmLiRuVFriAcARbv8Zrb6uPD85z6GnkPECQL3r38NaUSEQWsVaX8F9pNmJC3TQ",
  "key9": "4X9gDuy6cHqSmPgek2CY4qw8nrFRcHUsZ31zyaNue65nbD39hULET2guqeBBBrtSGBFLPF3reJqwD2wNDdFXkmV9",
  "key10": "43Bb9fucACBmQw3SAY1mLojPtLWGjJKTpZVqVTyGzithU3495TDbzvqJymoVxNQNcfzXbc4ZJbfqkitBtJYnf1nk",
  "key11": "4Rj1LAkmrLTqskYWPp2wkHRWD43GtSFDuncJrfebpJVqKDsyYPWmoTxJoZRHJ6M8yHM7bZsTFjdqgjFZsqdTFVA3",
  "key12": "5eLzq9GTwwJrEWmStsYV5hpwJmEicSzmyDgVRLNAnwuXgKU6qKFPy6AtvWDbZqvoWKs7cE9ZcPY8zbef5jowCdGz",
  "key13": "5h14gbLs9wxnD5Jej9e2fqL42SHrXnS5GMsPwGNM4SWKHQwAGWfZjnDHi8kvx5TewWMiS98opuqXTTuDp7n3F1nD",
  "key14": "36uFfEQkTnx2hAoHmqppoRSBzUEFZ4wGHu476ZxHFiU82Nf8eL6thCp4PuNUPjehPaJR7wPcoRVexBSQwtpapo8q",
  "key15": "3yydddBFz8Jd4hF2v4guRuGNLck9DSm65fwxztmdniM1QggkLZmzGNX5wg5CdK8ZDZeGxjk4aGNbWoXc3r7iBLkH",
  "key16": "4Ew46m5xzxmMRUNCE31pSsYipyBQt8iY3Ai2wWjfkVDsTKE1YudG1bnsaHoBBi4Cxg8RVA63xwHnNMp2YaPXxxiZ",
  "key17": "2Tnr2nEgbYUSYNSzkMqjMNarBd8dTQd1PTqFNc1NPGfsp7NYnoNMibQXxdPj53rGmLnRiqinC9qXYAWd97XAwknx",
  "key18": "3DaQ3BtxF6sqcXbt8t7BNtKVYgLDvs3mTPyHbAMzDxkKJqHSWEZYBa8L7P5JrQAP2t85YzddD6g1QxthF1ZKZ7g5",
  "key19": "5YDXXGZfMeWpYb3GzgjhJjk2y7naW5yHzB7kxxoZfx8YdtCjKwEwbAHZMpd1RZY9aSQthr7WorGzht2V9uHE2TaH",
  "key20": "46LLL8KVDoanU7TAre4JQgd9nQx2UwcuS5tP54ZoiSzWnXdQpA1eCkWJRZqHp9TBEuZbDoRj9GmXTdLBRGzSKJQQ",
  "key21": "4aXgW1gqwQwTBuAmx5SXDkP1W8Z1noCHn6irNSMDoaozYQ45AkLPEj34GDiukNqUboAsRcnzwjm3ejZjxfQL6fhU",
  "key22": "5i3syuusiyHDsHynxfBsuQ8YVejvC8UsUHWfZcXNWxFxEkMZjS4A962N6kryrA89sW73w2USScAEFDSku42wwvsS",
  "key23": "9n8hcNbnNknsT4K1K8jLnAEmtvoxVRctCAnGto7GzoGHFxkiFB91sruFRMJfeNa4JWpQu5E88j912ua8k7itgDE",
  "key24": "36AB17nWCEagFYbEs6jeFvfg1oFPmgojyrX6MW9ErECBjmT3rJykP7AD9ham76RFrBN9F6ELKd6h6A76PDGr2WKC",
  "key25": "2U9pEeFR9uDqAW3jDJNKaz5Wb4bgEoGWcfZc4hhKABQCtc8Q76kzkB9XZQT2ayJxL11rreoHrAagMPcFEymftKCR",
  "key26": "4iGnWb8Yc6qNFMBDe4vGemZRkwaMv8X8CsCT2H4iyoKvkRSd3s2nnrbpi7izgBHDK5XeWbAPGsA9doZx14DGecuA",
  "key27": "UUpkeH52Eg3uhksFvyz8yFUTWEqYL3DfWZNzjXgNA2vuPAx8ihBYWPcZNnrQYjvnSd6UtiksKfWp1yBg2AvP3kW",
  "key28": "4qcnf97gJMAMA3B6FnPPacrzSVB1C1qjt79MSyrfiZSjKojKkTStSzYk2c6quFa2G9pWfKuSXABgseJr3gZfH29H",
  "key29": "4yrjtPoF3qwiRdZN1n1BXxjFK8ekwDCHiXAdR5gBBwhnRc1aoK1wNmvUfBwH8ADFR4T5tiiKrbsaKxfHao1iSrDD",
  "key30": "QZGv8TMdDxenJ4gpzG9sitkuvhSL8GHQqKDavcuwQKcrqJqrqUhVZYQJwpZ264mKD5KWUJpYGKEVSfS33NAHykV"
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
