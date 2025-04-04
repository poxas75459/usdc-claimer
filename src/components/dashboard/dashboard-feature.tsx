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
    "2oshY8ygZ4kKNSbQ6Yz7rc51dhgwccGT8f4XM1EJKmBJAxCcePXga6nVu2nZPeVQ7kFQ9htKhMf7uHDr4wbfUgdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LvvV86fK1cWnjELqKc4FXFje5Xyne58YhRLDhwdXtoaHczMtfD8jMsdeRdw4tZr21SEQANWNZzVVWKCum5H2PJX",
  "key1": "4MoSdNHQxBXyw9GKJEU81Mt3CtTZL1hRP4Qkf2KWSBcPgJDsg8YJmuM3zY22o2w4eXpjsTTn7AMk1zCw72pfBmvK",
  "key2": "zLCQr6VhWBtD1eUmad7W4HToxQwicGMqpFPrqTTHEngPrakxirdCPRYpKTzHMohgHgNZuTXBjUKufEdtjsqMTdN",
  "key3": "5nwivx87BSCktFrat2p4E4GHpa93WQmQB7cH5iFMGEDdTNM38FJkUjfPxVFy8qnZGHTG57P7owhG8VKZyEeA7KTf",
  "key4": "KWYohQRmQee3dVaQwgx1M2dyXkApi9i4U8vxdQ7Eey5nc65N2Ediqo9bUaWqyk9LZWYevHrfhNrFGf6j5AxyQxp",
  "key5": "5PyD9X2id5RAHEu21MemCRwc5nXY4pWqouPCxPMTVsXYaVpsZJECd1gkk7AewACLwqq3FSQxtXcbYgp85ypkD8BS",
  "key6": "64uJCbtgoX4zv6PoJC5YGDz1XaJkWyYYHMvLWKtG6YR4VeCSsnhsUAtaQKJJS6x98KqJcwdmEC3nNQP3ux12oCmL",
  "key7": "3XLLg2E16vtJdEM7GkWqSSTTcoYgenvPwg6vpjY8ynZSc62yhtiFe3FvbBuNKZuQfdBUuGzR8ntPFUNdsf7kdWPf",
  "key8": "3rFYWjDgFcnUaa6khGUJ66e4TDcYB7swicWGiFwkaSMPPyzx6PGDZbzgnBxMNA7rg24LJYXESim7zeLNQwjPumz2",
  "key9": "2i5vQCFKQPMZcr46HsGbno1miXwSBhFjVx6tsfTEeRkU63CGy45fBHDxfKBuCyvt6npNa5LoeKaX8eVesJbqSvwD",
  "key10": "4r1wYALBueynzW1psZMXkwDLkPYQsVgtKQDyS7Dr1vuCf9unFxFUKzhD6pjNJMcYqPXaf2hDHvggHSQ8qCxZZcZH",
  "key11": "5Y1YQe5RNT9S3DXgxzW2qCMUTTeSPpFq5sL4v2s4W8Sw8oeRjnRWEELKHKJKuwk1oUawnjbUGddJ9RuH8gqwdjg2",
  "key12": "2tr36tN5wejyjMKKfPFxNyfmWeKcD55AioNSCvWVBxCEMne47oLZzz7JV1mGkWAJQMszAhyGfUYzN6y6UcgPjYnc",
  "key13": "4SgmQqXGi8oprnJ6K5YE3K4VAy94gLtnnYd9s7R2xQQs5j5Wgv7SbnC1Hov2xPpFEhYEU2xYZDtSiH3QiBUVUBow",
  "key14": "4ZKaDor95A22rezRxA2MCkmvLKrzVAKpKKvK1ZmyKaBM69efxPrkN2dTYxWV4biczkfJPmkV1FyiH8pqxi3Ysntm",
  "key15": "2X7iP8PBaow5GoVZb1saEyTh6pHo7tFC2J9eAbPy3bku5PWNe5PMHqMPjJrrG84oF2dmMVmVXLKqMxAiqGbVedJ9",
  "key16": "4Z1eqeFikikazAGGDvzE7e9YdLdR46adw7UNzJPXqAoUoQUVoYCL7zw6kmVvPMCDGQvimnSY6uj2u52eMvF1qhxV",
  "key17": "Ubtrr1WwQGdCAjT1v2uH49W8YER5PWK5VTgCQTj346FcK4VEXkEp5emKBSBTkbXFUqhdN3zSzUwG1qEPbL7Hd6G",
  "key18": "WCnrqrTqxvMJdhFCayqXSXbufLNCXswn5x4trG9sBG5MToMtiHYQgvaaa9Mde54b9XzspK5YQEZ5uXsMBGLbZVG",
  "key19": "5CWfK2Q1PPXK9Z6qDa5sA1Stp3jjDp48EgDLTKMxFf5iiK5SprUJiVfGNTtGsU8zXnJthwDG9zhyZek4HS31VGwM",
  "key20": "554S4DZbREwnMRhTwJkvXjA5RbiTEGE3NxWkxcLXhZoaPLDBSqFGPgWZftcf435X3UF3NUKi3FvuDe9FSWGhH9GS",
  "key21": "2Qi8rWrgpLYcRmPQKm9tME62wg8fs8rSpBuWTzoYfwCb9xYFqHt4MUkaGKjKVAPxW5b1grnB5tMtfX8DowhpNfjf",
  "key22": "29jSW97e67S98fCTCRAPB2yYCija3Ser78mdVeeWcY1mC5FgDuFtXK11HwGTLwN8GpLu9L1qzVD88qpgv9zv7PV1",
  "key23": "5voGWAsnSTqmeiZxwGB2NtESmgMNVPYttf3BbohyjPeqEfMn6ky5MJVPsVemueMM4zca3RJsqN8Qy9i8xJt54ktp",
  "key24": "51kdiHuvZpYrjPm3H2HxG6FiUQe332owLVpqvNFRMUccvWSNazrUdhKGshyMNi1WiaavJHt73n97Ytynm4x2u5tB",
  "key25": "54vHg9mfkq4yfBNrBiyV5qsnUzdG3ea31izWe3QHfWmvSEsypyKXhXZdb5xWscwT78kR8fDZkEuXZQ4qvsBoRt6G",
  "key26": "3nBhHeuNAc2tT5u6yzjRB3AyuHXob8J2R9nQn8AyCEPS8x2ys4ni4LQQfQSkFn3UeMccT7pC49RwCtVtEsvpUc7e",
  "key27": "5pmUhkDYq566pQmCj47zEKLakv81TZum5eAqPUoB7ApfCfBtV7KgxxrDYb6oF3x6DpZJgmnEYtqzGaZknUJ89kBq",
  "key28": "4ihExPsDRzJGR2hUZD9VywJtCNm5bbUb4KD7iyhnhBEXcqkyaNRKYe4AfXfctV3pPFyaSAJkH3HHDgaQ2aNYamHS",
  "key29": "47sR3LxhUj3W2mEwn1gSoHgVx91yLXr12sXhWA5VndjDhhrQvs2GmcghfKj2zuCYYPrrkrGrY2XCNKGvzMck6Jsm",
  "key30": "5U7cAwVmgP4oGMneLcWX5sS6N7omgAM4Hph2fai2aMiKeqB54yAnsUxoud35K8ijysDyc6p1VsdyGHSCAGN1Arfd",
  "key31": "3iuLthHS6vL2c8gQvj9vxyseUjjfHmCmM2F2jzuLCLkrWZ9eFgi5tMKMMLC931kiLQJ4LFoNHaoV4CRcdhGKpSaq",
  "key32": "2TFexA3gNUHyDxr8eNTS41JmyayssqS7bLwizKWE1QTJ3Dy7k5yNC3k87cueScfced48TBtqCttxot2aGyg27cy8",
  "key33": "3HYfKzqcE1yMtFUgV7iYzE86K8YUdGBuSx3U4HTb7rvdEa9kH2NjYWFuZADeZ2iYAgQRh9TBV6r6CXy6bSVK5Rzo",
  "key34": "5jjuVL4Z67e4breyFbQrMqmvqs4YULv9eS9cSEYgWLxEsWpu8A6xWVq1FVwJxwPYykQBLwgxyYxoNtMi4kpY4GVw",
  "key35": "5tBN9EFJo4CYkxhg8q8Gv2t7skjwH4DpDapjvKqZzREoaETgHQozZvs3Ayx7neuYk932Tri2FRoDioBRpsQEX4dt",
  "key36": "XPRfvwT1NYKRCt6Xb81BYviS7q8Gn5QdJJGcCpfw8SzXaZeaygn8iNff73tD1BNw9VbtnPHDntm7wwW5LwzSjyq",
  "key37": "5x7T8dmMNXrS3zEr5UwXvw6xcwzNwfnq2FN8j8hjeBT1iv4cwigtVeK9paxwxppi4sJGD9bfcpqjEPWaqFEDQhvx",
  "key38": "3PrDdH3jyGziBjP2KTLuHGDCWBHNm2X6AhSo6ECvPGaURsFqfSb1M1EwmJTbhBqAXD8WHADJCAJXmS7t4wVUCcmT",
  "key39": "2xRX8mK6C2pF9jZmHqvZ5p5m5MBZETNaf4qXjSBXb7hmfD7M1RyvYJ9FdcUFkDR12FZGGanxqdUGpUCVmyePB4Z8",
  "key40": "3m477gXfboBWxb3dgsjcz6ke27F7pN84PZJfKRMZyAiLfVtDcCnYY9ZxLvKpR9LW5ikTMscrxKjeHJmRoFSvGrwM"
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
