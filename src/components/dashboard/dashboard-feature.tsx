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
    "37VGsWkeRzSt6f6Sry6FvEM1oJYS4rYg3kT6wSZqKB6UviYVwMGr4k9HbvDhBzHtNtME77fCrgS71wxejxhMSLuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25YWzKyUa5qvvdTugR9w6TTw9VWubnUimUQ3MkmqW6D8VLRnNgjJzgFSf79HWTUJz8wFFXKA6g2GtTP3bogctmB6",
  "key1": "4DyiweZWULk6J5fGT9RV5JnH22UqZPfaDzuizCdPYv5zEt16Q281pMwYy5pfsfmv8CNdfrZetSwVCGqXWeKK5dve",
  "key2": "55hb19bRc5LF1ZtC6TcvGpzUZece7vQB62goexvnqMvp6CBw9bN6L1cqZy4NFFxicD9RvxgsWpZBowcHijYFgyty",
  "key3": "21bMYPNEdrXWUKee44ef91236cP62itp73626MDZVMKcuaM4apPuLoeu7eQGBnWrcrWRtCLT8CPjNd3zREgJMirM",
  "key4": "5DVCZyQWqBdjqicD2pkcm626XLSCxKNmZBgc8MKPtD7EXiQYso3UGxcdGcnE2GsmQXGRwo4eU2ynVJiFPSfdT1jU",
  "key5": "3LJjPL547hmz2xYeU38YJKq3aDExqjwh7ePf8mDz8qQgxn3QXnHo7HgUB8KsW2HQBPUPm2o2qTqgBsUwaHGCmfwV",
  "key6": "5uzMUkfaZTmE4woWV1gHmY5s4JHHx64ahzbTfFRipX6SyRif52f8xcFKCsoht6iwPqQbUo6toa6RjXGpoqACXGfC",
  "key7": "2SSxeyHDFpz3oee8GMWRXrtimTuq2RW3kQ8td1WSXdJ9RbcqmBM5xthPoyNcvgM1j4DF9sSGZn4iwU4nxQFsx8X2",
  "key8": "3GUjAvN6VyLD8J7j7Ce5mXDZuwomWWqvRbuhcPm38YKbj4Mmii86Gr1xjLnxALfosToHDpk2xSGhnwdFo6soX9BM",
  "key9": "4uffZSMpzevrkqGgoihiFGw5kWr4kuPtueGQXRhkzHQ3tiMdBYovRn5L1USQjVeYMoFfke9aBq9MSK7z77DzN6Rd",
  "key10": "5kbptvnofiK94EsTNTtWwYNuJHhHSYBXKzyQFy2dU6PtXKBToUVhCMEU4iRo55rwNH9f3CMxzmhJ3iaKoU1FHUoc",
  "key11": "WHSmnVcmckwzVK8N9PRcKQCmrQqT7NmGbMZusUByPgAxFPiniJ1zjwoaugs7AVVpd6uQ7EKmSfDu7CYUh415yCo",
  "key12": "5ffyViLzJwxiHj98Q4ShaupHNECKaHEJRWwnAi2cSk2DjmY2eC366sbSq7izd4EtJFLY61jj8HJqsRyQ97FfFuCN",
  "key13": "2sa65GvQBUYno8RaXXhma71Rq61gzLyYTByMv1e7Vg1na95tYe62aYBDHXuxGMUuMJBPCHsjkLAv5pBwmxGir11Z",
  "key14": "2cgNo6PygNMCaSunwPzCyaQZqV2jNkNV4ZWfZ3dWMTjb5HuDxohdMRXDThSDc5CM1uS9m9cA446ijgr6hrG5f8x1",
  "key15": "GKvgqrnW5zoAa6ik7bqx63VzVXVekzywfzgY78cnhi6KYYAttiSjhtAzdNy4ov3Y9CJXau9Xqk8X6n7rwejCXWz",
  "key16": "2aeUfLTiPBej7Pxe7gvrpQVZDRdtSBcJSsYuSu239gASoSgW83Zaz2hpB6WqVwWCjrCvtv2NH1bnjehEUsHkZdsh",
  "key17": "3GVSxSqNRZ26N3Eudq4rEzpztHzjRntMHNr8DFDiVtXgbTty97iVUkCHnCidN9St9YMg6PAeT9RGnu69yyfzMcRY",
  "key18": "3zHGaiFtqUqLu31bciUoJyBRVk9sEbLiAmWp9sjpXDWaSzG2optZo1GQB9gaWEC9WCtNdZi3Ze8M4jutCedJUtAa",
  "key19": "5gKbtyc5rcqMhqGKukrmbq8rGeDhjo2v2grJ1MEZfbuekxuUgijq6S7uwjv71gCygYNqQ8Ng2kQwD2oQY9DrnQe1",
  "key20": "9TWuJsMW4poD6vHb7HzACcghWbP7akQmSyourtG4s4LAKaE9FcWtvKN5GfNsH4WiZ5NtM4dyHL4iRLAMXkStaJt",
  "key21": "3ES5o4ANE7oxGvA2jvLqwKcZ46hmqsQjq3AqDPtBUet9hkLKgin9UrVeX27trRv9Ve5TB1nx4NkZm3ouspFJAV1q",
  "key22": "Dx24pvccsXs9d151HWu5bYV48StpwUarjecEwsGSY3AkJkX68Kb7takpdgqAWm3CzixhagWwU2opsajzXLUVY7o",
  "key23": "2xVtmQp23Me98kdetSe2fzdfstMRgvLKxqzKK5aPSvkTwameXkHtc9P1tEVaUs6AVDTh11GU9BC5ZAP21VSsW1fc",
  "key24": "5R3UFgm185e58meCF53T9ZPK3akgGEqYf6CyyraaqhnezYmzqi88jwHb8uBMc6UiyYZKfn34HZFpoeB6gjkuwPAf"
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
