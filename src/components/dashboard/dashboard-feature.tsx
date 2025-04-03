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
    "5cqPdjShDGvNRzy99xVF4bejre7CpXwhJSyHxcNKD3DdkCA2KHUj8Z8pFYKZXHXQjLtqpVCo8Es8KfJCAizZG5Sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pi3mMnb5cMc7rFow5NELFUbSk9scpBMyrHjXuifdBdsUZHhgnYzGyXZ9ufV5bB7b4BRavnEXLVJsLZLnwaxb2bP",
  "key1": "4VFrnN7LAK12z6NqAnQRSqZkmBZLMkiNuy8ve27J9G7xVs8JoDuZiKRDwX3R3xc1aEycWLEpdC6atdRbpgrWRhXu",
  "key2": "58GTKngRJDepcqqjDZ4zRhfAaYtcJZNdvtKqTVKLA2jstaFjfMtyHEmF6wGrNK5Xssf5Pm3GA8jG85bqLLyR8KhS",
  "key3": "bhvuJ2NXiX8ZcLy8rcwVEkf4QauayaD3eCAzus6J888nmtS1W9azjfbWxZC6onYvABLo4Phr6GEQWULNpXoQHTo",
  "key4": "R5sLno9Nx1yw57wypbN1VG27Ch1245kjpL6oG71vBq6NSTNq3hZY65goTVUS71Dnpb1wuqMwecPrrhZJJTKFN14",
  "key5": "2dANs3PEKxuDERuUVYDQzE4rK6XwbBNd6sdhce6LbL7NqZYgiuTYmFP8YiPxtKR6vqhv8kCyxFgBanmRE4495S9Y",
  "key6": "5MgWmtPz44L65oKHc7tbWuFYNYQT4jcGbn9Gn3mvjuQqX7W1o4jdBB4jYZL2QAfo9sfN2of4HN3KpsoSMCR8GdLF",
  "key7": "36Es1GqByLhYnjvJahhFjQc1JvMh3wWaPGqLvLrc92f9o2A6BEYjtF2JFyhpe5REpotjrCbo24w2sofAQuGdk7eP",
  "key8": "4maERfsw1auHtVfNUVGVE61Jn1wTgmuy5tei2R8coz3GcgtBaw5NNsvGUwNCDRV5R9rsHNejjBcE7A7WiWoDxHgF",
  "key9": "4XwXXoutUhdQF6DuKeZivGPfdjszdeAWWvLy3ieeBu7CE8ej2KGjMXbS6RkkMEEW4YLhwqjznUwXG6FF951uAPLz",
  "key10": "xxeyDQnpYej46rgZo3k8rKHVeJhmcpKc4mNGf6yxWKjfidEQaJWZLy2BG9vfvzjQ9bufNvAX5NtVAfZqtRX34go",
  "key11": "4YUcupUZa7ApxGioj88nm1o17EeLZwPbZP1RJjnVHy6hfsYePsbMd2crzkem56u2CE6urnpieUXyVKMR18DuB1cE",
  "key12": "4PS5K9ssFbSxhXKbguXYPQ6f6PXVUpw6us8uGH9PnZpW3umr5L1vqL3Pi5CNdeNc1qkMnjivSRKTRmeHGsjXd19B",
  "key13": "5TYAB8BHsPPxfrdYLckFSvvG9g9VGcXqtCbkfd9K6ymdMqrUJnbnar8psBzUsfshXV2QL7MJ47poU8aYXAmG1Bdb",
  "key14": "3pfCyUEGyHZDknVwZ8eXjnRZDd45x68gJcXyBdEnK7t7yZa1phUb7yqf3vMv5r2iZoWrrwXqhtK3C9vs4AfrKazW",
  "key15": "2RZRpzF1erNzkd7aNsifDNAxHH2ZmEYgT4Vh57ihQu1nrnr9Gw8v1F2UH9KvZyuQNUxTix9865Yd3AUtiMvoCRyM",
  "key16": "4XieL6b3WK5CFSp5X7XBVLHLZoa2oK4VAxQi2h44Q4Wt8oFGrifkjwcKd5kxt2nkLLCdNaix3TFdNQuHQDBADnJS",
  "key17": "3J9EmWVQ4JkwTdGz36PTCFf4vS3N7CbjSMqh4o5Lhvovr2g4FQLka8krVrP5WdiuJt4tSqWci1YB8M9oJEfEEdx6",
  "key18": "5622PcM17zmLEtJXRjKvQULPstuA8FLoda6UeaP8BudWpWaARXrQPYCmp8BkfWT6NEVkqyjnkgkU2Ba5XXhVGtyG",
  "key19": "4obsjaJRnS51CtfSYTeiPUzLLP8orFQWVccaqK2g8TmotoRdvdYxn4SctPt4iC5PM4dGEnTFZALxqkfrE9vE5S7L",
  "key20": "3SuTr24m8JZgKq8q9QXfLXTVE4JtP98Fi9c97QgZ9xFHQDH3tBVcnbovZo1zeSmsxHThf7X9MqiugXMeQ2t8aoDe",
  "key21": "3vcS5AEbM1BE8g8rGLZVpTDhnMYg4Ae3JRoRw8TtepKaFxdRtPUwD799DVkEBcsHTzEZ5q2gyKUrEtGaLs4CezJr",
  "key22": "czH8NWoWjqEtNVYh5MW59W1aKkizSGuaQL9nL4u4WbJaFw7SeXMcF5kXdZjSP6AACFdzETh9gJkNJRBXUoWGY45",
  "key23": "3heac9Zu46HAxn6Ds16Q8DhRDTAqnEJ1DmrarrUReZxzJ1wJMJ5G8Uaqnq22TNSNSLfth14dJy1AccxHnraPvvva",
  "key24": "jdnK3Ru7hj6WvGrVNB73Goa5vh8gzq58HWF7xc1vfTye5RTFKQaoaGDUc2nYRUgTvLvH8tTxAzz9agj75YsBUS8",
  "key25": "2zxR1bnfrJsriaT9zuEJvMcQF7NPurfCVKg8tkoKcJADMFmrPQY4yUhcNbd5aeHQUSh6cEwuoEFYVb2KvSRC3xdC",
  "key26": "D9sMMjGUpkmqfh9JRMsFMbjccvdb1MFPk71JSnNqShFp5Xee9MauYJcbSuwYwc1qvLfJ1HMipEEeTCEwhvS2UbV",
  "key27": "4mehPX7Z9Bq2JihDSUez7cFQKYR8ScVLXKbPAxXHxSRpdjJcYoAZW7pvQSL4qWZmozogP4WKDrnpiCLvM2w5A3MJ",
  "key28": "4UdNkYe1PVKFRUHB82GUHqD8asiFz9x748WdgMrKttTQrdCbkUN523zXwtGtCejTE5grHmgq3RR7TfUh3ZBdsveC",
  "key29": "4qmD2EAi81w8487DUmvZQbyZFTLNhrpcfc2T91kKdd3NeXaCtpvuBNdbi85DYtWD48Abpa4F4uW54PcWNapXB39T"
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
