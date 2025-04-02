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
    "5rAXer3dKXGhRZb7Wzf6MC7MeCxKmxpB3GoSXWxMpRq6z3N9hgD9Anu9YioSbSHdrpBXvXj5Q8JuC9Hy2cJ4UiBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7vXbWkCFbN36MU8grNsSiazNKfGSrJK7nteL2ZR4gWzyRjXQaZnWbe1ikdrxeJyLVv1MvuJiJyP76PhkG8GUw8",
  "key1": "23Fy5aWSL9sDe3BVL2zRtxXsdHoNN2Sd3FD9ycYNT8VJHPsfTp2ViSgBSooxJ2FfweyCk5huetT441X9TBnBTmvp",
  "key2": "3Gfn9F4hVLJ5f7txYD6z49p1QCoUHFMP3C6ZbkqNZmfQ2Lf82y8PSAKkeoWLGhxCN922eohRAuLFxVgYBgBhPPYo",
  "key3": "4vaGgpXUrcbB3YbDWoZg3KHfp3SkVu389e7HBxDL96NzGz3fG13ygZM7njUAGeL7XNavTrRuG6SJuZTwkv9Q1RZ6",
  "key4": "5i76Vcqdtn16sKtespG5dSR8ytQCQsTsUdF5RdsJVmyobRV9vVmRXvzYJQfrJ75EJB2NPbrruLLgZjKQGvXaZb9C",
  "key5": "3ZBmUbTkkn6x2JCkm6ShK86kE4JqwAeACdtZQf12kxzgrXSm85wK7F7W3eujh2DgbgSpRan4NkoSrz2eV5CEKX1u",
  "key6": "5unqek55JKy7TxDPumhnDJwxNZgvuo7411wswhuoz2dfgSKFTQvTDtSiXN5X128cuDWTpbDifsTzeNmxELPEcm6T",
  "key7": "EchiefAsZ4hHeKc7G6LL6rLSLMpnuLAXLgtK27UKr2TdYV4UsrJRCNGT1vrnnHdTiASeJxgZscJudvHdGq8v4Qy",
  "key8": "2tKHCEQjzNmMr15bHQkwJuBoCLpKwq3zU8fEkUcWSRGoz4iojTMPZBs3EQBYULkrsqJd3EBCeAWoag1jX8b6pBwW",
  "key9": "rDCJEAegQaRSTHGHPruYS9c9nEVjFQS1bhqDBusjyy82ozPize3wGqQbFyX1HfQyiK8xsysW55YZAU3y4LRM1SK",
  "key10": "2sYQMyEpqp5NSK2pRSaTSZn7J3y7imBLhwsEq4dw1cesvj9rJQhGWCaRy4Dsk3CFY6bymLngHRfr9uaNzMED4R4M",
  "key11": "3yh17bPm5rYFJVSzLsiwdV7ok7MvkpVkYNLGugsR9RKgZxS31enaJZRHg5N3axezF7p4zkuRcgojy8MTtvAVstpR",
  "key12": "54gtqfh64zwWKWcKKLGbgT9B3ikorEeQ5ACsmxyAjy9wPkmRJSHWqnDKZTKabaMXJT8JWmUNnUui6snzTVMNqYSp",
  "key13": "2ptZPJEpXsUXoZfyQVzDSMdZRvNwSnt99hWaagkpxwgBe8h3qSJw3YVFeVEkTEPTJ6PeDdeXyUatujdokMMNkD9",
  "key14": "4623XiU5YVxUgGFRSJCjAy7mnvrksMsKNyDw7qec7BB51DwmcAnXR4njUxMPcFVokBvNkRKodwaPkhBEmcQ8GwWF",
  "key15": "2QPrbNWGYkFfh7RpCyLyxu3tzq2Xavo2VLXo7s7hXBdTQGP7pKFrTjcWADy8WzqtShNGrG1X8DZ89XtWR9SATG31",
  "key16": "4g7BeF35RvSP6PG3d1P3acpEnzSfjWxaH25yuN3YiB11hVarQsufV1tDeYtSCwgRGwGjvCSHzvrZVduV9LeW8PBS",
  "key17": "4gp8YxiJQxmkarGCHm9ELCBz6rGPHqRf1ARaBiTJKpYKJdrifLaHwDMU9S8DKc46RNvRjneKSywwtksMiFrF1Ny2",
  "key18": "2TGsa3s7NU3TRh75nUw9bKXXuJM3pjjib5FTp7XQjmR6ueWBYMxsftVfBYg2sZS9ZXwnWTqeAnsn8Z8j82Mx1DMa",
  "key19": "2siz8xsr2cVp4EejnA3GYL4WzcEbTF43r1kGXk3piL4YvWLZTLZPfj9xx3qCt8R4wSw8j9oNc5d4Mmg9APfbY8gc",
  "key20": "kufVH143KnaDZartki1BLeMyA8993VYy46D5MP899s6VCHF16ce2y5BUUi4R2LseQ2EeWVoyrVt3AivtbwwWrWD",
  "key21": "2RB1TQKYv8Qq1vSffrmWCLFy6u9X96xVPojj3TM8EvCTWSdsR1JvWnnMG1BVt1rkwDUWGfbuVbE8AVFhm3wuoppV",
  "key22": "4tv6CPupBhT7TgRbFTfh7pFt5JhuYD5h4ArnoHXgSvqkvB8yYbe4HPLdWRbywHaZLc1ETrDZXgTq6HzhxwHVN9xf",
  "key23": "3CGPtap3QCq4qegndkg8BwNEoFEz4wTRjNABda6rBF9PEYWn6vb7P4iAeQYE49HconGbVNnniHxjsBjvaQSqTMZK",
  "key24": "3oHQaXMFAF53uk67TXtvH8hQT6oUTFAJV3cfu7T7nbyYA5uuDSE7aHiBMzmDQEAhDdjk5aPWx3vvEtqTk9CNMn2P",
  "key25": "63zTDCEoqCvmGVJVwXmZN1vAbJT9VXW3WACjebq9VqYQxBTYwxDKgcFs1rDUfSJFqeSUaet4fgrmu45FYXVnuvFt",
  "key26": "9qJnhwcv84AookB73Z1XCwfNY32fcEyMicZbpr1rPCV3MP9Dd7RaC53Y4U2SgF9mY3k2NaYf22UX6KQJG3aJwk9",
  "key27": "57PuufUmbragm13ccEv5hnDf5kTmWWUXDVzQs47DYa6i6wf6SQzKQTv87Lg84vghpTJkoNZa2HMpTaFLrdsRDpP2",
  "key28": "2WXodqBYEb81j4yDqcV1mXn97qQ5rf6QBh37rNmDPJ1MB6GQMTd27m5rPJfMEAp9M5deUjWjpsJVFrNnZtyBKTxq"
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
