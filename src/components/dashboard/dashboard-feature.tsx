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
    "5RabfxtCA48nesCKeN7w6RVsNvMVvWPsLz13ceznceXtykXQqzoWPCQc927WsMp89yT6GHf2V4am8tW9JhZ9EEjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HBdpifXt6ayhj6fCetV6pMNAcKZdaUZwFWuoSAM6MnX275Ue5pc3Q7GhVtDbXrr8C6MWuMPPkxS5Ct2Scv7LKBU",
  "key1": "3qc7YjxUaQmLjrRh8xpfizmse5648LfRdgNbmB2kLSRSrrxQ18Vz2scdEoRxLaaLF8NDeMfMXCxAWK6ffr2we6Yx",
  "key2": "3X3rroQ8MixSeSge4p3jPAq58tFk9jLUCRgM6mybu9eQCWhAfAYfyRpcWMDZvzwEpAMS9mSMsxXnHTnpC8PMghxV",
  "key3": "3851kRZwRsjtA8PbtgbrrSFxwzxxrxvENpX1HdZ7zZeWHiEeUHMCgxwW3s3HPnUU1GZ9MNMCnjGZ3d6mC6doybco",
  "key4": "2dqwUbRgnVhDnDYyvim9xTsUA1wBsyyuiDNKMjP7SG4F1YLp8Fb9tvrEhXiw7JiBhbFU8EfsenvV4grJv7ZBmDJb",
  "key5": "6Do73A3bpWxhk97ivC1NKmKptv3fSkRCBexKimavK1sPHvvWriVBRpvhDu1VTZa2Bnv31HLSp6L9fNVj8k7TB7h",
  "key6": "46xNKtZyLqvr1Hpoq582nMQgcbYpgQUc5N9dCsz8nMdYfG8rj4MJD9hNjNi77uNGfMdH63eYzBFa25xxPPzUAYsJ",
  "key7": "4gEd4PcFuPLxtoBPxTKza3PqR5VDaGxF9Xj5SoxS8k1rK2SPayabkYhu6jRB49cqEnYh1hvqBhJAK93d1qUbudv2",
  "key8": "49pdvwu3hTbWENXxQLUq8rrhPDqpwKGRRwPkUinn94uT5zXkE9LeUn5QWEVxUWUmMQGuUy6gh3bpfiRhKPsrEDEo",
  "key9": "5y2ebBRsmWH3Khj68TCu9cW1bg3LupchxmMvaQZWxyx8SdwK2XySNqneeWvHTxRWmd4DD7seCyo2Ey5tHFaCz1JX",
  "key10": "Lu1K2h6ABNt129PAoaGAXMjt4k4AnQtgXhcqK3Wia6giceiyZMVpbsShbuZCokReqCv72SKv7v8EKaJGeY3g6AG",
  "key11": "5ZbwFEnfkGkCDfzNaReVtc7jj6WdJv1vxQv1vhkmfhtb3fmdMdYeYUAK9sDxf4XCp6LRvU9ZezoAETDJrsgkbSfL",
  "key12": "9UyzvjoeQPzhBjkcEE1r5dXs4z7e6xZLmCv8JpTKt7bRgj7TnyA3RWoQ9rzUfZ2wpm7p7iLp4txmqGmBzowRKgF",
  "key13": "ccw9HvyZH11katbZuP1VsCkGFAi3o3Kbp5WTqbnye1dM8hsAcAw9qR5PSX2pF1oymc8pUK4ix2BGjxX9B4x6N3G",
  "key14": "26Kmexi4x7HzgNuiTH6xHB5zvq7w2kLWeyUBjuPJDUi7cRwGbrNEj6LeLjzqXWiAa2jkwrmb64qSovvd3DeHvL83",
  "key15": "aZLF1kYELviCJBuYSuSZ4jJxhfMAcfuQ24edDMXVvLZXJtmkr1eSpsiD7BAv13R3wrgm8wV2rKGAz8LDmJABbn8",
  "key16": "5BwFymKWbkF3SvY62nL9GQRAybdWyPT2HjB9iqYYRbxxQz33cSuvzqmbXZZHuTssigXFjyMKf9G5MKzHBCER8YM2",
  "key17": "44m7X7KpksWwhmALwuFPJRGNKFKqCUDANvtqQLPfXpDRJM7Sy8jLLkBEq2hVjS8Jmkv5cvZnwo4jkRJVVhYW6uLY",
  "key18": "57Aynr1wewoyuqQAG9N1w7HtNCLXKMFrkCeUJhDfr3uoSxfhPGrmoNV5kojQ2cBg5SvqzzLbkYC64e93XZKVpgTR",
  "key19": "2b7yXHdvLBR25rnnJSMPyLZNNDnrWNUVJN4h6TLHH6idu7Krc7bUX1cBPu7sRsjSZzYSHHsJCdmKb2RhFkL33hrq",
  "key20": "3DAqLCYgrBVjHpHb3ja5EcC9FVN4anVanc68SdAnNyxVsNwVb8DYo8pphfZRgyYM6vm4oF1ByzqZqjtgRkZew52x",
  "key21": "64v1e5cBzMqTfx58NnDwYFMGDx6MbVmFEg2tRAmfcfpT6j2PpjqXVii5DHVYFkYWzJK9Nyz9uL8FLco9CxW8pxAd",
  "key22": "2LRxGDjajGUzMyXrWGGEqLJbtVzqLT9JZswXVgWygxfz2uGCk6eACewVuuN693YTBwJ14jH3brwLeHd9HX3buktn",
  "key23": "4CiLKEKBxqiEfZsn8w41YLBeUNGQTA1NNQ6SBK1X3W4Ekkaao7kKQ9btNDksqNsMroYkrekTyqeGuYBHWFWs4MCL",
  "key24": "2ADauEmCAAto6iYzhKsfVj35LBGYdhLiBYeLvL9x9KwWFL4t2fefWySEnX3NKge3MLuRh5qvcuD9KQHTdHJhffj9",
  "key25": "2bZ1qtjw42Yq4fn1Ma1j43EdqZUvZjEkBiup8kPirFecGzwgwFpchAgtFCf1hdfk1FwiEmMXKFdHYcU9dkvnPJr2",
  "key26": "2fg24PkfQVVkmW8UmKydHye17urPgWCz4BjqT5RjWfXnxCestbqSgLSZGgSQGZS6vbuKajxZJV8AKDD5iBVSrVRS",
  "key27": "39wgdgBMmSu4ZPNQ2syFLaox1erG1gfbKBYQxgHMEb2zTLfdc9aKtqT3dgnYWKpnzkp88fNnx79oFVkmLayik6Fx",
  "key28": "27zZuZ255EKehBAFXW1dRPZfhE9dbsY6jvAxjwpnnMDn95dCvVs6wXpxAaiktVAS9i7VnWxXTfj3SfbSHyuJJRvf"
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
