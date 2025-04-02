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
    "5BNRQV7jpQiKDRDWC43ibwpLfTcm5YBytB14zDjsXrgSZJ8WqZngBG7bnJLaaw1kmw6rFUTWCHXbyvN8wYz8VLVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HLyCsZf49GvHmqvgPG6Wm7jXrjG4JjB1Rnsq8YExpphwVqH1tnLZTBVqsjKrN3NkxBhTNT4VYmHNmz1Pf4yCcpR",
  "key1": "4KG3hvEU1KUZxc4KVQXdjPAS3Kav5y9MGypYdxvw9WeagwTffnFQXLwVCh1Hst7MHUf4PZGfpygTG9wRcnbJX2Ho",
  "key2": "2ccfAgeGSinLXrXDfgekXuP25Dw2CpSU9K5q6Fi7bq981BW9dk6tAU33vQJHNRuwjwazAAea5z2PEGzPxKGYHb1A",
  "key3": "4EdvfveqCRzhVM9Nc8ay5JfpPttGMmsj1Sa98N4W7Sssu6V91YHEjiC5aPQ55kvZeCqL8Zvm4m7LaDuHujTmiwfh",
  "key4": "3Xgrhe7E5ycbuEUVA3hh8Rn6t61NTmHMzamdAyKyHBy6pVqjzLtJybLVU8YGSMqFKJ7fWyZWFvdQXtTxgpCpqGDH",
  "key5": "29WKD3DGyFirdSzZEECq2fWJNi4PufaKmG4DvBtpUGr8vEPUQvJLdey8zBDtzZ7yxDQ5pXYm3k4VCJk6jxCPBDAP",
  "key6": "3nzqn4HcqrMg3srngzHMfXmsdNngYUResnaCUfDLY8CFyZdwCZK8D2rVhHb6UT7vpUyYQFo5gN6AZFZxRNRchtqj",
  "key7": "3JpusZE4UE7FK4YCPEKYCLEG696NPY7dy5SK3f9Dfo1jsGbj72Ka4ZpYnFKQU97yheF7QVinSmsBdRiLRUyt7cdX",
  "key8": "3bZkZFY9izbDgVvTY5i6Ry4Muhw3raSVeyAJbgzSu6yRA6Ukzo7hcQwStW1QwbCon5ddrTrhW1t7vESJ4Awgh7Vt",
  "key9": "3PeHykCRThRRmH4xzLzx5FzngoZM9ukRURT57NF6tRb7PkGuUXgn5RfiW1Q1C4LEEtL3mjFbb8jF6TVqY2Nbz777",
  "key10": "5GNxjmwnhBxDW5hJYZ4UcW9pBURpYGzryUx7gv4KZB4rAVQXzR2catcPCuv2Jv3WSvPLqBuk4xn77DxYAbcp1Wg6",
  "key11": "3r2kMok4wufSF3W7a1cd33v6K4uBX7Yc3iqUzaNS3bjPLBDYKyR4pSUbtcS6FUnUwbqgisfxox9mpXtQgVxTZ4C9",
  "key12": "2tpc5we5RvayP1f6RTNTJPnqx1CWxgNGu1szWHmZUCipJVDEkjR13x7JjDajWhgBPbDg2RDB9m3RwvTkX8pKx5Au",
  "key13": "29gw2BCkLtGMFb24nhvjtbEWJE8LDLtzdVKeVDBgh9PuwCzoS9uvYht3zmW3zz9aDqg2iDyjCLgh9ysPNYZg7zrC",
  "key14": "ypFYYtMgVWv4riuoFGmVXZE8WmLR4Qw2Skgr6vZEXghbovsrsZj8s5joqL2RX2MdcWCqvDFhsPt8x8wzqgCxdQt",
  "key15": "3mH2Q19c6gDMRiLA57FoRDtrngAQcu7HvHhwZ4HqgC9muEYVDCMDP8yb7HRRKHgHfAkRNL1jUo9Yba9PJ6esummH",
  "key16": "26SmiWweoCUqQqrF5wn3ZBExnVf524xSKgqhhAbY8XYR5mQQGGiLS5Smwo2YU7hcFzGhqS4Ljhs6ohyS5t1gASVN",
  "key17": "61ExwZo7BMLqMnDrPW7icPdcP6f9P4K6AGaBGmU42Ab6vAxseW6imJq9KGyWUtn9njrgFpTMuBQSgFPWyckfheqm",
  "key18": "5op282Jd1yLQWFjnC2FGvM5qtGatf9NDhrgeVfQP6VQFqsFD8G34rtcw7dXWed9NrJyPYFn9VsNthRDUbgYxwbHQ",
  "key19": "4JV2ybhpAEHwdrXcJEyhuU5nYreJs3bSvUsi1DW2Gc1aJRinePzSEfAUZzutj5ZyqToJFa3wq1L7MzHjL9BjZKhP",
  "key20": "2qK8EXiJZaxhXMudA8GRwWFahW2VeKkGSVpA4ANkfU4pvsFjuYXxWGk4npLqHxKSnxAkkCjnNKMnwXnVvUaZhjyn",
  "key21": "xqXQEKuWNabYckmLXzgxLRMfKECVUzhgFayKAQSVXhUQSZ8gF3y3WgD9vMAzaJi9nnw6vwzZ8gWC1x9GGuodjUr",
  "key22": "53Jrk5A5nT2Q4ikmeVDRFhKdxuVFaNCiU2oi6y4DyrUpXoKjf3DUKPopBVddxKf9RQk77v3uEA1xjs5vdeCSANZZ",
  "key23": "3WsYXiAkMiFcAFUpT7qGRv6j44GFJaRKXSq7NugHtZy2ETV63mKDcR3kZJfZnf5vZVmkKz47R9xeD9WzBs75cEuC",
  "key24": "3gjtmxwP81vFvG4GJh9easu9DPhhDas21x6WvwEd1N7nBxjMtobcUdfinZNqF6BjkkR1gmWYHxVJPJu2LzJZQ4Xs",
  "key25": "54FBJMWFFUX85jAheC3vRCSb6Sie27cNYaj1kAg8f3EzBT5uUhA7unLthDM2XBixwYcczhFgz8cqMDMQjVKkv3pz",
  "key26": "3fiw2GQYhBTd71w8nJU5SAgCQPj2ZJpn7zWf4vNvNkEcYsMeDKuk7tM4DByPt4xVRReF4dDehTDiLAhCEtTMKsqD"
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
