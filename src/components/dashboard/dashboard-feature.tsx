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
    "29d5myEbVWknDHFaxtQiuRKSzzViVazzWahFeQdea37e65H9jWLRzyvvc7cE7UPzLJYWd4zTrsoskF7KuJyY1eoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BX5fhfuio62fYF5cuvcWJE1YrsFvpuNwLpDYiCZbQWAex5x2Se3BQX9AoXVYTD2JRqL6Ub222urWQkLK4tiDYGM",
  "key1": "tebQaQ6QocznFvQRzA8KfZ8XxKdPrXU9AfPnmUknQbzLxw25TK8fAQ9ZMTr9td7tz8ZoNgYt2htRYhb5Fh55HRf",
  "key2": "5BAkUWe5rUFr1hxbmFc7BQwQfWZqW2HS19JzPdDg5V5FdDP3vDTA1wYZ9SSmn6j1yYdVZTaMjnPkdyvoJ38UGKhg",
  "key3": "4bt4B2AjKvPzTsNuAohYMJD6711i6WCRseyS6jSQoTNhyJ1KHjT7eeResKAorSrRfZqFLy3eBrCcq6JQYsFtCFu1",
  "key4": "3D6eFUhhNBjmHRRdJMeVmUAhqjMPymZ3W1mT7PVj7cNuCd8Bx7ftPvY5ubkkp8v1KFp2Nwp8tJGkRJB5ibi55xUL",
  "key5": "4ym1Vbcu4BGdoTQoDutjB1vzT8XmCU6nyGZugpoLBbyeCCkEaEV3dyL8bBQT1bXoSqy2fpSLGDYPYDLmQbEvgHjr",
  "key6": "XVKjjPBj2eAcWzLZVjDTVfcfLcH2wKVWtDNxfYjHM5UnivJ2FxzSC4vCLTFhy8DR2cr4THa4YN8TYyysmcZhoYq",
  "key7": "4tzRHSvgzN8uPBi3phW3R8m6jF4uTxEwVDWv9vRZ9EHhespsvtr9Ny6wbCfKQVchueMoYUFDchB9b1Bdm3uwsaH7",
  "key8": "5xDHzdujA8t8L6hNgufnidP9QEQJS8wr5Bz9kdhe3TaeJ6qVbfHdTYUmmF1DEYiRfinzgEQ9ZWKx3gD1bLNDzwC8",
  "key9": "mxgRfKUCadsR7rhQZWfYjto2aTbiXzDDTKkg8qX2vWJAUgkyJg6AdtwDeqg51uz4tAmAUQLS7ZCLjm8pa36Q6uK",
  "key10": "3V9GRn6BRfiTbzwvxFTG4wdpx4RaBj6fPCdC7py4J7NZyEJS5iFDuLdkFFShWpBdDrTU7G7Ldpa4P7fKzXMrE3a",
  "key11": "3YnPbzby6DHANyCA8isBvjvfvkGmhnW25MsFZafYbyD3VGS8x7xQchYr1N7nVVMzreF5KyoYnCHp42w6ZgwRjtSJ",
  "key12": "2EhgQgzCUbqjTRAQZCrARzWi6VvxX1dbjnmncHWhBh5fCoLD8Jd3Y3XGvbhUd4CvTjZYxvmC4QfSGTkL9keKoZPt",
  "key13": "4vbg3Hrb4UQXSbhN7jwK7qtyyEA5jTrg5N4dxUEDchBgjP8HcBkoaE3PJu77g8v8w4Tj1boytbTogBU9TQFKVbSi",
  "key14": "2AUSK9PHbPuWAhg7jEfZMbx3PeTxGXkW5CiCPygyvUxitPYQE74PensGrAfQTHqXuFNkAZuYnXnR1A8j2rvgK3WY",
  "key15": "4bsZf22tD6BZZQ3w8g3D7PU1EBLXBTkByZA6FSBh8eZfbXYwsFYo7VtyuK4j9RM3pcfe1AzXyTK6Y22D7TXQp2Ch",
  "key16": "3HeauXBMmpuZDTKY6S5kWrgcECnMX8MMaJng5sNw8VQu26ArkSegPtk2jv6TDErh5y9a3msLutik8FmE5V35uKre",
  "key17": "4N7u487NGGr3zqEjSFfmh6vaM9Duh74mZJyvJPzAzt78RyiH8p67Ks5PnMKUUbTE6izGJmmLVkgKQM7oyYJCR1eg",
  "key18": "3wRcR7VqDJbnNPWEvrikmj8rAzLgABU3fQCYERwd8FprDCwTneSzc4bgzyPvgfvtEHvE6DxUpW7Mrhm2LEsv5Qu2",
  "key19": "2FbsK1xfMDVK4aUA9LqJ84BKDhR1iCsvwx8BP3rjVQPnJ4CCPRt35P85VrLXweEe2qJUnidAwrNWSd5B5qb1t2hT",
  "key20": "S6iXHXAjzN6sqypAQY7pyWh5h25e6J7xRYn4Px8Rr9pXSN5h4ApNTnZjhqXvJMhthrA2YecEgsfqeTBjxJ9djk4",
  "key21": "3RS7RtP8NgNiX3rMyf4FpET5Sh1tgiVKQ4GqQdEekKhS6CtP3CKExJ1bGRj127GCzbSBhjaB79cEsv6pJtUwxf1P",
  "key22": "4ohaLRSFuRdja5m9csS12GvooxS3QVokSXfczHRK5eqEfagwPRBEkasGTbCkUJcqBEJGsJGE7HgkNN1HyuhK4pie",
  "key23": "xNKVZiWtww15JrRKwa4MJgsTA4TWYoaqbPCgKCQz5E39eDazvhvR4NNcf9ZG5fpWBZAZnDACCBo5fh4tRTqk7fL",
  "key24": "5CATJKWmNaASkDcG4MrmfSwMaxYYymm2reBZ8CN3hSTDV1Dibykr3khueY97MYCb49vabJNc2hNXFGvWTXXNRXPN",
  "key25": "3QNhckcLfHaXvr5zELEu1MmRtESpqchTAAax2ZZLeYa29ryuDoUbCzjSaekpxp4jtAAjHbZrmqmZ6GgvwK7HepVa",
  "key26": "fsNmuMfAUAUcTndXPEhBDC3kA88wZjkN5NqjH9wHqqajqGQ1ys2NLJGNPkpB8sotAcFm1bogTQGGgEEnRMDMwD9",
  "key27": "46TTRjNjb3Ygrn1Jd8gtcZzizEWa5BNZ1DYngWFzsfXcjcHcUaNBbByeujsz9BzerUDBzfTUdUL2gLXsMwbwXfqF",
  "key28": "2Revc4Nznm4zkcoBoFC7HG1WP6BdVoQMq61mbVrPEsuCHTwYgm31V1jM8yh2KnMnkYCZNqnb9Eg83ocu4aDdfgFV",
  "key29": "5LCWggutxCV6yFA5oJzAnkjH1bQmu1CmjEWrdDmat6BGqaY7CJRdBi14MMuqkUyhNWXeyEdy3qbUW7zPHbFwMwv8",
  "key30": "67FjKijrTuhLsYAEp9Psu6H6hLhsbgwGgWhxWJmUM5PsBouDo44nJmHXoH9e6jBBS8Pmbv2Un6AbcxhfWtKyiKBj"
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
