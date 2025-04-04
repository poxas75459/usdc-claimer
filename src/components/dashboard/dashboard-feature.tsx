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
    "3rQkcx5Y7XXQB5HF6h4Gh1ooZBbZJbCFNY328ngXiTbVcDWjeNzMHVCN9Cg5Cz5YwurPSvPdJzmyUyfDMTaKfPjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oC1UsaJXNU6xUYGX53ufPtxuYd7g1WzxyKBo6UZY2Y6XXR9G6Uk8832aHUQR7c5ZcL7kqFCYDPkC6rtqX43Rs2C",
  "key1": "Uowch1rsyc7SNBZ4GLT47A8BmbHgfznY7pQFurENABaq4wsp7RwMVzKyhHxRid4amRHcSaWUChgSQgniy1PWKpv",
  "key2": "5D1Mn5FMuGDcbiHKdqvPx2b5xsEG4KhQ1LNuAZAYvejNZRhWHi5y71C1wQCTpd8mBrHW7Ads9JR6iLBrVEBqSoey",
  "key3": "8rRHAvZVi3a3rVcXrNsFSkzqhDLK7uZ1hYtaa1PaKFwnTpFB6d9vHvcBZ5RcQuGzyN8XfjzraWwKCXL5uxLSLM2",
  "key4": "2wbgqWPCVUp2zvWvUm4fKwyAtGDs7d7aNRuGsn7YWnPzkQjYaAoAKt2qRtPZysccTn1Sz1z1YjZ9qDsJnvK59GdC",
  "key5": "3vkGiyVP6niBfhm1MeHAjwg44e9Xy1eaTV5MmyFnNreVvtXeUTY6WdAotCusYyccVMS54uYG6FQDD78w2VxKHYPG",
  "key6": "3TcDMuEwSy6oASy5BxxKbi3oxN9XmSVeZ7b4SUHktqZvKx96j7nUAFQUMaeh37JcRwFeyKMAonwfYsQbPZtaC1AT",
  "key7": "4J7L5TtA6yVgP9GJtbxZNtNv4eHQHBUi7SHfhJr6SYvWkeChAGpZMJohQtFiT4QCpLgUds1YH5RLX2W6dGeccLQW",
  "key8": "4BRZHfd9imad4uVAytbVEdTz5iN3rHrR1dnb717hzL5xXpisk1LTKJMveUHT5H6rxWqXr87iWUPoLgzW86hXYKp",
  "key9": "2ej4CkC15b8kwL6dXBtHcFzk3ZGYuXdARMs7fXrS7U8f31RVKVZGo8yhKxECrbxud14xtBDGw7rpFZFXzEZ3QC8s",
  "key10": "2yWFicCQWTnujRYt6Gex8vyqiERU4xrf7UFFk2xZJMEEb7pj35r5wWYFxEnsJm5BHiQ4DJeQaRfXNwjz6qmw4i6x",
  "key11": "5GY7eWY5b44EeDVD3oaBEV6JppKJKurGz5xjyRCzF46ytDGLHbMfXTNp8QMbftad84rRikFrRoZ1dfGQj2t6SpZ3",
  "key12": "5wCNhYovTqoUPDGwLpjuGyK9TkqYMf16MELoCYoQTrp24aQBeGnsLfe5dRkoMJUdykCtAKQGseuYBwg1oHmVHJC9",
  "key13": "2Da6y4KRCgbb7oBu1WH6ATt1bi5dBqYqhXLK4yMk4rui9Gja8FMy1CEZhTiQJES5CPbS8akZcAzsuhtvh1rLaZWW",
  "key14": "2qJN3DRuysa2QWRwLSz9YLC27itLechq5AMzrmGY9y5tmQtyyE2Htxw8Wpw8PRdCtQQKbrtZ8G1DDoyEUUz3bPPa",
  "key15": "3KbUxz1jmtfQEeTFTBgmADCdiwoetzWfXxmdPmm1RVpn6FeQdp5KyKZ9stvfS6v5bEd1YPHRfpWJ47edCYQrNgog",
  "key16": "4QHBCnYj5JaDrhaC5Yza8HfEfAUc4jEMW77uYHE4hmEWv16RttREoQin74411GGseyN8jTqUY43MN5H3vKxLKMuj",
  "key17": "5nzffNJmZZJCYtHM1rGSPVuCpiEkygH4QakEmQM5poqJvxyat6UgTHRfpRR6ZYrY8q3dFbWj2dquqJJ61ACKNkK",
  "key18": "63YBrQ4zoBEFCeyZUygxZM3PCaQAyTgEKeyTH2A2KTwK73QVVadu8JsbpMkQFTx6VxbiQdRnxAf58y9yQFks8RDs",
  "key19": "GPi3vrxy3XLjvsySGmLAx69ssyAyxTQwWDBPoqtTK1LEEm5SNB2k4D9CansaG7hXG5YwQskRYLRgRjBCPxP5euC",
  "key20": "5UoXEArkzLvx2b1ZBa9n27EfJRbr5SnfoNkm4AzgLeZ1y7831WRBoTvMXfk4QWmqcF3XjkbQZsTVZ68tBKa6iXB4",
  "key21": "4j11EsJdtaYUzTWrqzytU7CKpxZLTzUgoRqC16uLQ17R12C86GVmYsUYgGa9jeZNfwvk7SiC2UUeiKQHginH8CzF",
  "key22": "5AU9kAbTZ691AgAyCgJKGNYoCEy6wkCb78nKNRv8SqHJ1B3iAqnzJd6ziEYZ4GgvEFJJGcca8Adi325dCqqxcuj5",
  "key23": "3JvXf4Y1asDNKbqxuTmwFMcebHUCwGW3YrBYjoAw34WD1EB8eS9XhsfX3193itNS1NtN6fVBrxWqLXU8mPcfdRSb",
  "key24": "5M4E2gmy9q6Ch9Pj3dyz4ZmjcDewHbHgmoRbdzuC5MupSrHM4vTKgd6RX5tikCLdw79c9ANUnTELy12cJvAvTcpW",
  "key25": "24J9UgSteA5vuEz1P2t6ms4f8nPpLreGRM3KcYqvDcAWv6WnGg85MAKQDKmLkaWipJtpof86qntzh5nufeM94jDf",
  "key26": "P7JyuBYsK7FRr46rEyP1Zfavtdv8GNe9ndN5Aiehrk9QuUn3zKKn6XvJCssjzhEmGsgwpaHQ8E1eXg7hjtXpz17",
  "key27": "4mFnY22dAKFvr6fTr8D3L2JDWDBVtUfY3KvTbcGjcvk4JE5wUCPcwvAZiy7tyz7rvHW1orjqRS1WmYYa3ZMiPXEs",
  "key28": "42mDDvwFWW6ZVC7L36prMVxUCYvQB7PvaFCjBhE6kLh1bBbt8SL6Rjkq1D1inGXbR3GJgMovo9L3tiqREenxmR4o",
  "key29": "2cDqKEjWuCPLmnAocVzpxPP2dFNYz5sro4c2jD5Fjz9ATWVqSShHRCA7skfoqF4GGizfWCLNjHe5s3YHpqSTVyDS",
  "key30": "2ch8HjAmXnCFkTjCc5RvUd5vbCAvm9eAvBAeNtpUYLbKDCuHZNo2ZzgiAFgVfQSAXuDv2fADifA9bJEsuKENF93s",
  "key31": "wkojAowJ1zWB5hbdDTLuPXzsCXPjA56QmnS2idNReCBJZ8r2eBHxVnd7mrqNuCM2BYMZLyjRQ5JzMGW3px85CxK"
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
