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
    "vwCgobnGdqHrynMDtYkd9xZysHd2w1SMGNcFuBcLx8wbbfciaaW1KXnvyAF5XJ6QYXZkwgA2vbjkQqSBpQRKjsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1EQq3yJQBjDDVQzypYyo1A36PPSyiGeL5ZtJvbWqZPXmehvnLhyh1AotsD1YVKsWDSUKih7aSfMQEjoAMCcQmtA",
  "key1": "124nCpK5RhVT9EMJikAAFHW3P9LCDmWRhByLuGuKWSvUFVf7ifHBwzw6GUEXPPLVKwe3qDnNP6bX21rgAYHeaB8m",
  "key2": "5X8XaxbaUsLUR1GyXuTZoeTDfTF69ogbWb9HT5ZZrKHof7ReL1SPueeW24eZFHjt9dA3gZF7HybroYyJhCBsy9Lu",
  "key3": "43NgPqtitPJdnvzyvTedpFTXPM8nF1yGabXJqdcztP2WQkq8Psi6kqmLPmsUbKeqej678WQFp5G2q8mf76WLHDHo",
  "key4": "31PMHzGFzWwuJQQy8vtogjV4h4TqmPEvshzBi8Qf3iVxR7ANSiZ8nNimV1NSY6tByqYxbNZWZhqD5x3WHEU13Edk",
  "key5": "4YeaRdK3Rdos4NizYvC9t8aaBKdoU1fn1VULavPn8KadAAo7mnzo7RiQ3v4oqBfbJ93z8P6QgMVfwxUDtuAeZyFj",
  "key6": "6741MdUPmN1rVPppwDm6tThKqJQdYBLs9DZkQS9Ubswax7YBE2mk9uKdvaXCJNVqkjM69J9S9nonNLLqdCW6FMsV",
  "key7": "3B7iemH9nnUA6AwMpNAx8AaLnxjMgWJ6e4d2CtxTp9SKkjw9zUPDhtg6Yu8TVd4dkKjfyXE5rTgZ1WL1FosSvCjZ",
  "key8": "2sjrbhfH8R2yH3m8Xqx9ZMErQa3MAnjQsJdL8tquPDhkJpxHSu1uS36kSJc3cPCftcqhRyR7WC4JrBB6vHbKaeaN",
  "key9": "5FcGnMF1SsDccCNa8NeZXDDsAoFmbUWJLSGUsxLCKa5x9VuxCYzrbRRVfqy94ozeNVX8zwQcyfVwSb6PTkVuv1v8",
  "key10": "4yQwysQbH3kfUfNK9GEPfg5RLjzWa9offWBk4tbpjnSLz7couLr3sz3cd2RybzQiL4LM5YDKeFsGqQbFQaJZiTM",
  "key11": "3xosd3r45GNnJnwdYq4kPwfsaVwqwCFDNtg5QfQWXvBEFNqGXwjaegWk8cKC3JTXRUeRDahHgetVKJELVjz8xtDC",
  "key12": "2SWjae8JN8urzUsH2kNyV4kUP5cFF6StETWoVGjTfVHDn3nWk4cocMNffQdtsWN7bHJ69HeZ5cHc5ecxycuETscs",
  "key13": "2wNHXWfQUo6FuVeR1XD5QhfpsXuGtviTBmakLFWqzJRtstfwoZSYsrWMHqdebTxaixMUa78Z52MHzd7PussdeX7i",
  "key14": "2FSz1rvfaQeic13dQXkgFAjcpLkxBtRHmrwG4Ac1H7myoS6ciC8moBp4yNz8x6jTpGJDTUuRieGNMSqtbdLKSjfK",
  "key15": "4tVLWK65RepvCcNEYupFdHDaP8Em37aH7n9GeL1kAh5KSLdT7qUo7SmgBv9hHrQDnETh2VaBzDb21hZyatgYHhdu",
  "key16": "569RZsiZF6uZwuEWf8HvrmvwhuabaKrk6vki1B7EdqDtLvUbAD1scY3GGo1UZKs9HQt4asPoWk5fUYJjWHHk5Fdp",
  "key17": "2XG8VTN9hsNQdrKrhFd7JJWRgT9c3f2CnJ7cCKUvcKxA5HbJYXEEqpFCNV6M2xfpQ15oAr91uHyBc2FkKy9MyBPL",
  "key18": "2jczVMUHS5nAepqxySFP7wVDBDXKhqsNDJ18fmQr81xfo7dnJEpBoGdwrovna5MskL1X9RqA6gfjSHeZFGi9ACe6",
  "key19": "oNqAP7cP15yyb2sF1i8bsdeYXqm9HTgTGZa8mxGpmxF7cj8RdtQEsfsxeuG5nki4CZiZzov8XHrpXWRwQeGt6jH",
  "key20": "2pjJfCu7HuudUYpERrG9GHaLFH9GzLaMMLy3ixGcukvabYEwTFSpuxcsrHNyiHTn7GfFRZpKK2XExazf1bbz7hQM",
  "key21": "3qixPwTnntCAhYAupXzaWG4ZvUsCaYFQ8P2oViDwADp9JBk18LTuvzvcgcSsHTQMoQ48J9FAZ1TYhDiFcs9B3LqC",
  "key22": "4ryS43nAMwZwxR6vKFPPKo1zrAEn7o1MjJWeJGVYaej8n73VKLEHhd2mRvHUd3gNsTqN3SAGSdZiEaK2AC9giQWo",
  "key23": "5CU4WMftuKVVXRb4csFR5BwQ9YDtUHN5udPRTJJfEL3N7YZsG1VtQw3eQYy2JLuqU7HShCmk5kqVWnrd2hgg6cbd",
  "key24": "QLyz1rhrwhKRLhhdFKhegstvWuefxfSNf4ZqEnGM6Fxg7AjLQHPRoaa68ZBw8AoSqHTNHFab1FRsPLmXSxSDQzB",
  "key25": "enem4y2VkdkTsLEN8ZuddPtyfvvKfiAif8xEqAbU9ZjJUgKqJJ3Ms2LRhtGzG2vaF1UVcKChy5BA6UG65EWHm4r"
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
