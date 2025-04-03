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
    "4h29eYjxzuW23Yzrv4J4VrU9yWXGwtppdfjWEuXHdyzvdFn1cwJCdNk68iNtdkv4JVGd22CiEZQhfxiMVAXZqjmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pb82d13RYCxFYCw6bHL3CzrgoXyAFqwU1WyX5eyYUhzX1i9BqUbirCe66yzL7QtLpqBrCHf5FVuASG2VPvjajBc",
  "key1": "dnFRVTgLFbpyaj1sZpz31RWvXTL2cB9e7mBZgJt6VM82kgb2r8hCGK3Wgm6dAZukEJHXEfv5kSSjPMYJEQLFg3f",
  "key2": "3aNtQmsNUvD6ip9gX8f969dgRduuneajZhtrxLkkQWEQF7j19yDGkxHFvp4VhTTVmmVURG5zKNGEo69Ur52MLNHE",
  "key3": "4Myp45Lk6d9TbDwoZDGwDP4P7wqa9US45fG4vX3YtkeSw7Vmtxe5536febaBrVCpsDm8ZugKDYw6J1MvgWpJLeHA",
  "key4": "43RseFnr2rfDabvNswskxNfkJeUBoWcCfZX7pFpmpyb2aGBEv1RhFuQ3xrWwiwkCXtcqWo8ZWwYvhzE9oJW7QVpN",
  "key5": "sWpzseimtEiwbQXeqe6znXrNn7ZMwuwW6B6XbvPq6tgJAXovZPvMoZGe2PnXQXUcEgfRt1FNfA2dzJNMkmVXKZW",
  "key6": "jsREZjpYEsbYPtknWAVmQWsjP7b2kRugfLgS2LnSR3E1Zh6D5WaREUZnLHhQ9ATY6bU3i1Pj6jw45st1daTKTCg",
  "key7": "65DACqQtssezeKMgnqNDP8ngnnMbdTedcTUHgpsvbY4Pb2FfPHUphpsRhv7G437w7dqZC3UhEcLKG8qYe95KiGHy",
  "key8": "2agY1JtgYwEZ4X2HPNnJnJ5VWt6jcnPCbVBEzwcDByPYBUHWxVBSNVrebJVkdKa6pQX6qHunPTLUdEb485MPXjp7",
  "key9": "2NwXkNMzrbV9poFAuUGyz7ZRUUhDg1nYjw1ct95xhYgKiWN7sqSLXGKevRryKe3dnjLQSH4YoFYsw9hA3Jjyd3y1",
  "key10": "5Fvwadq9t7n4ybW34FjYocKexbGeW4uLEQvefBLbtjEn2Eg6ZesrM5DE7jBfSravf4GuyHJByrDkNH24CMJRgYLM",
  "key11": "2QURoZqT21KwQQHKAin7kfDKwf6hNvLRAf4TtJa61y51gGpGK6rqudi8448TYqVDCpPREMe89ph3pXeM5FsD3h4V",
  "key12": "CVcLZkNaXB5t51N27fwtXVy7mFyQqMSiSP6Z2K3x7XVH3GpFm8VzwDk7mgDKRPR8B2b173TZBCc5C8VB3PdpCUV",
  "key13": "4UYZxE4Y8jJFjJv5EM9xXuLFXJRYrvie8ptz9Jy5qrWPZw7HBhSNfzxPpM8EvuGszYKo6J75Y8ofMTUYJwayiUWP",
  "key14": "4gzmqj2f5TtLF7tRK1oWmTansjutqEbKrMGVnA2Z3JrveaAUuLnWyaDxQQxmRsMtmQmfQageCXmtjRWKkBwKnsmz",
  "key15": "2U3YqBe3jN3c9ume31We42dUsbeem8o3K5UTPZWpkFYosty1jGV7jQys6ZHS1s8rDaBZny9WvgGQvbLQNfHuFTUD",
  "key16": "2WzC2PF7QWd9Pn91rfG7qQBr2RDPF5MmA1sZLggtCNowgMZEwUCq6Zr6EbEBHvZvnE2XmHxZdkkSZpCjvjDRoahp",
  "key17": "38RWpdCGNoHpjDvx6hPVbDemMark33jWLxcYxJuRCRvbA3hzitLypC8mPETioZyemHyZppFXbQ7PWcbbLnozL7RU",
  "key18": "27LckqoRMhcoFE2anBAEh9twTjudXoDQGDMLAaSchj8uPAiwdByMdd7oNS919QfXAG5EArUKsBxT3TZvW3KbSsYp",
  "key19": "dFNDcMDLMLTBHmowSxYTF8ZCa8dziptknemb1i7wjzPtE98tYaz4DdLGB7BD7D38XuFprmGJV2UYKpYTtwSaLgs",
  "key20": "2c5LFd3Fem3iy8B7YEuK3XMf89LiwWXesGB3dhiNgSTSDRtRxHQX5tGQgBCqYG4qdnWebuBrN3jHmzJiLJeu4hWz",
  "key21": "5JYH1EUfyfP8pQf5u5myMMQN7akkdz1ZMHzzP4zqspYhFPqP9bUTFByFb5qVuY56bafkajfTssFEfumv3CuhATkn",
  "key22": "5FPo2jgWWBk9PiSaFrbX3hcoNfgw4aybodwY47kAScRHa5DLK3FNozyNrxvBvknJPoQK5EXndXV2Fc1QE8Cf5jvZ",
  "key23": "5CryJbC4wBmW9dfLA6mE5xxH51gPcj5DUtvv97ET8w5TQHhFrdXcerDv4bXthzM4nXNKeAANEo8F7HjB2gHEeT1R",
  "key24": "4jvZ8tpZNTDsCisjpcYFQfp3i85yCbEqFDj4XvEnemCtwrUXnGZq3YR5itLmDVmBgHUbHQzamCuC77XxPrX9Axk",
  "key25": "HkvdF7ynD5Xw9nnZgtMVevXRLorbAgSSJiGEkyiwDMjVBm8pc7Pm2unA3WXZCNDDtLXEWRV1eVHu5YUpEit2zm8",
  "key26": "MGywNfE6MLtEi6GArbjMkpuMbsFdPDqwUeW2ojZAFw8b9266mvNisHpJC5isn1E4H84xFQ4oUoTFoM8TYrowJ6C",
  "key27": "5fbppJzRHDHUTWwTYJTpQZTWXwv1WHLcbdGimavk3abE7jvoCYG3mAecVZBdUM4Ej5LdWcz5NZHotDKrygTxRCrr",
  "key28": "5GvYmQFxhVL2VnRWWdgCvJyNFDVQ8D1uwBXqSm2nZjHrB9MSdy8dSxfVBNKKYbwSWxECwABSfPoaDBXm2bicpdaB"
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
