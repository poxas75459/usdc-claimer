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
    "4kofyLQNiU6QEMTYrWVSrgWtUvToDjujxUt7TMStjWXNmhwGn2KAyJPvQJDd14fbBDRjnUb63sAhMWMCZUg9G6XP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQTA4sW1Jh8P6w42Pq2w5XFrRdQJNKR1agcYkQLYdg33edWLHp2rkYJbNvv42CrbbGBPxJZCrZwn5yAskoKYYHS",
  "key1": "4hfwFHi42WMHn5K8pujh4658EtnpmcEQZKAPrQbpuDuL1FzjQyuDhNgPzuPBxFkst1qhjsoxQaCZQ1wFf5FXHBzw",
  "key2": "zDwYqxFiXkPAbkPEZXsvsVHxgRNYRLhTSk7Sqgqc18TyrGWprEyhRmRyPtHqhFnGgj7c9uNy9JXPEixhupJ59M2",
  "key3": "HDoZrvhMruRuxgy9n5mBAJEb9kXREA24xHMAmhtu2FhxmZ9NdjgwhkrS8NE2UrywnCxZ1tdr1aZHskZC5EjeuyK",
  "key4": "5PKabP1A3wM2hH5GHXaSKD3bE6w9VS2GmczjYhH7zJ7cEW7hedrdcwbm7mEndfdd1zALJ3z23AShRF2DGySfmik9",
  "key5": "5q5arnn5zDgHAY1YVtXXJpWPFjUkVbran8QksNkKxBd2ToQQ8aj9aRPHgAMyTGPFRJwsw1ByiXxyKQzLu7xKGBo1",
  "key6": "3kv7TBzVCfiYR9fVqtGkzFf3nSy1RtC6idKJcKaENJ3jidcWRiNzUvLtX46NcndYrQHdMrQoEtJN5kSQncBHL3sN",
  "key7": "o9CjjKbPmMwgy848rNA9AvpNgSUopY4jcdLKKssjxmSkAxJAc3M2WYHmY7GogBH1H2QPcH61piAG2vFBeTW4xYA",
  "key8": "3VE97FvzSxgcdqeG4hNfvDGR2ZyhwjPEpEJnYNYDbig282UenDWymbfDiT5LoHiF9iKG2Nkvv4TuNaGvPHi11waJ",
  "key9": "9pEP7C95uMCcssMcLSBmo2zkRX3F9T4PSRnM4gLESx7mQoNQn7ak1QsaW6KtgAmKj4q21rzM2jdYJ45y6SjqX3B",
  "key10": "4DBBFYJoXDRYfnXCkgdy8iKQQf4ZjXNrnYrQwaZ3qbcLuDNHTYpQo4rY9qgkzuzWQH6B4ncftF2mdFQjAz6fJCPc",
  "key11": "2epGHr2W4Kj8Z3Tw2vViuTb2C8pKeKtM46FEaovUM4g6RTgZ1dXrahaNdeuGr3Ti9DGfVfkmFeFzfbGv2MYpN9Nz",
  "key12": "3S4s5YXRwiD3pgHmGQpk4ZzoX7fsiYo4jSEoxRcw3JmJkLZtZka8Hzj35Axw4SpD4z9LNgA5fmbADLRPfk2eKCi1",
  "key13": "4e81ccKs84NjJs5vD4mHadsAMWdbXz2PfhaBw2pjSkb5HX5iCEXqrycJj1ZULuiTG3hiDzDV2fLPBeiVPxesaq2U",
  "key14": "3Y8WUYrU2yNr6Pe7DfY16crf59WFxjqYv8xhnDqkxJAawxMBSwPhnmC8LwEbnjcR9cN4hirHejerDN7kmdMYJwc7",
  "key15": "66hPAgBYtF72RYvN3htHmDxfqvnWTfstWgETymaFxJn4pKWdf5yXN7qWvZuh44gVpwrYdrw2trWvNKi1sBpNLHkC",
  "key16": "4qvXW6TjwmM7WsyFcXSYHk29nwGRpuv12WodxLhW4mFknbgMXPnfnCfvvjJYojBs84aw9XidHmYDSQfUHpBB9ygw",
  "key17": "2jrVbGQnmDFtWA4NQhjv3YCyevJKTZjHQHLyL3DKVdYF5HX9wEdieao6hZrUTfW4vtkWkAuXoNSKtNatMZTvuqY",
  "key18": "51PcZ3nsbqVCV8aXX4z8faJwo9q9BBctkc2kmKrmG8Nncg7sZUf4FV9YDtEgvpCkAvLHo3pWuFarwUHi86bUQkxJ",
  "key19": "2UhYhUyawRQSCtSqBJxu2wuxEtqBCNkQ2e8THCkMVT7h5yBrvVoQzViTrSZkyFuXswAXdyXrUturyE7etWRqY1Wc",
  "key20": "27YwpPhdcaU7ZG7VwTCw5GtwcyX4mXBnLkLnhUA9kWERGWYjDeanTbDEkQC2N1ZeF7dkWLABpkc4zQguGx9Yfi4Y",
  "key21": "2moWuBcikRiCxuNkzifLr63aENSb9miw2DkPMpvJ8a7yz1gHxCzQ4rh2ag8ErtCjEBoNy7wQ4rQo5pdEXZhh2dWk",
  "key22": "37JRswsTDgjaFD7Gh2HDgBmvP9EZjm6ggU3C4piMdxf14urgmGsEFe7HeWj469hz8BA5TUz4fBmxogtFpJMfmbph",
  "key23": "3uHUYmawug5SJgVVGPFkKNy9CbVUEt3hHpTm4VpfLk219itPGVUnLurLaWSfmR9ZySzLXCHryRqc2z6kySMRL6dX",
  "key24": "3QjbdmBZLy7KyzRQiu7VFaLHtaRvbSmnV4HXPds7fHmABvAeVLRBWoFWATYr3Wq5hfDVWJuXnsoEcvGQVMdEkQs",
  "key25": "3QTzGZCL82iRPTS3vHSb3vAxxxzXNRLqazbDHNySCjWxbmNqBUPvuDoGLDyHaQ73frFzNJvBQZzcidakQNydFAJs"
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
