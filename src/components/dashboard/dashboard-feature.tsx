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
    "3nTS1S6i4XtsQcnXXp7zg4mbqZHDWyPkwkx2VWVFQK6Vp5atPfN67eJNPDHKSp7PgRkepedAFBBenqTSr5VmV62P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CcAUA56kiGwDm5Trn3j9WyPsdwe8nk53BZ4kyCfBFnzrvcVE1NapFuj2ujxQdS6tNwtwXiDcqMZF8fe3ST7Nxx1",
  "key1": "4rpZPVfq5A13t4tr5y3soDG7EgwbgDRDmymU5qhfKLmQvJXSPDGyf5GRRbUsvyUziqQtvgxTou1M3AR6H8DputvZ",
  "key2": "4nBVjSFk2cCKttY1wU3qo8aHuxc3QhCdbUAAmAa8j1Eo3qkssMPjQCoL4aU9yixWtwb5rsA3uVQmjMoqkwMQ41Wv",
  "key3": "6698UEfhMcNWx77YkrzBimS4AJspZdXPomE9kZhN1wVaBpccApLWfEy9mmykeWFpqDtZYvHkzdt7TUNJcpNPBDsj",
  "key4": "4ALT9Hd39U8wZ2BYiDhboVVonnpCjwCgoVn2TtFpvLF6a27tCJzAyLoboHHV3qN6wwwE8TfQsMK9A2Xtpbf5S1MV",
  "key5": "5h67rNEx4TVTpaJ6seqfczyCsqzD9KFfiyaLDYyBwnFyBd3KLZPynQ9SzEbMmhUFTFQmmD34j2vZdwJyZ2Bb1yFD",
  "key6": "2DTay85xhsde6WRfNwTaFSoNgSdeAJZAB5kUbxjRzyniJoTtCjaust2ci1W2rmvZzUaKiXNj6z3vWVSBv9yMRvJr",
  "key7": "2afFc5t3QREpdc8ZHwSKYAiytHS4bdRZH1uoyHHnojn31knBS6QcQYqrdYpS84E8gD5kHT6Zq3ZUDSLpFfAY2aQr",
  "key8": "3dvgEpECxxJTLKJBCgY9Zh6eYXYHTzFpBJ9XF8wdTYx4qd88Ahqr9qBYNmr45dqLvfr6JAse9PXkwqmykWjdjfkH",
  "key9": "2s39AopTgUK62udMHSpHRNx5jMMYFAAmGmex2cJBeB82JHpKT543Vdqm8DcpDajZheLmzPSZGDzB8U8K5nvkvGPP",
  "key10": "5cDR3vTDF7535NBaGTu6rHPUWjtChFEz9QtLaB7rJ3p6LNdx7N8ctBo1vmGcJPqSp4eC33sR9pJMKv2Q5ZLzfr5m",
  "key11": "4DFBxJQs9HUff69oLSVSMr78hjhcK1xNgUQm1aMCii3CRup9XZWTRPF2htbZFAZU2cvKK8hD1fsZoxgujKq4jnR3",
  "key12": "2o66uGU1yRy8DNmnVw7WqfVv57vuBpUAnFQJM3b5AbMQWXtGo6DMkxtNmmPKxYg6hYq9ZBZ8L4qHobtwPmtCDWaF",
  "key13": "5hZgMhc8nRrWd4zBpagUj5MvS5kLc7RwJGQx3jMcwQTCgEeGxtTcYtvGb15NQMQDFXDjP7spNAEC81Qs6bMxgyrK",
  "key14": "424TCap4PJrqEqN1T5YpH7PLG9AVP6w8vTQwHsaRasM5zcfpSXGv67RVSqEdRJAkCmrKMTiZikX6u6jNkw7e25TN",
  "key15": "3UM3HGE2bDXhNwH1JxRTUk9QpLNXt7Dv7BqHX2XB3HG6pkNtcd3TzforBN7gNmMQ3swLUJT6coY17tQHmJwpxfsF",
  "key16": "2gAGDXUe5oqEQFDSvpkgGJu9d824S7MEWAaMvX32FUd6jahV5Bhxccc32TnGvvbj8EFFiqEHntGcCn7YytBX7Dvq",
  "key17": "yxcpt9DJNcXED1LuU6SDGYUGxci8g48XTZnasbebU9UuNg7j3gegMwfUKw3GsD2QZTY2EBvtTieSGoVzPUTkGz9",
  "key18": "5uXE3eMZGaxXgrDqTHECprb4yJCBTvCC5zAoryqpR1P72pMJsX8n3V59RSDZaeFknB84prj1YFW663Yw7kPRFJhB",
  "key19": "45fpwGXBJ7C6FLRS9HeWFnsh9AnCTfdjL81PcXraXqvAnPvkkh92UtgLCw6ZHaZccHwUvqWYp2DDb9Jqcff561nd",
  "key20": "2JUpFsFnFHvYMTerE8Ni2Erx3BmuDqGgn8AT2pGh8wG8i1b3qVubzVMtNL7ygx9TYQfXkjnkw7yVyL9ZxA86trpF",
  "key21": "4VWFc2CtVEWETxvgsXiiP4pw5yR84FeS8g14HwRwYR9bJYB5b2EgbmpMNEik95jFKJHBSFdcsDesVPGbWtxcHtxA",
  "key22": "3cg6Q39R7Ku6Jv2HDqb1iEc8hjHyDWh3XZmtiXCCTcF1kuvjhN39yZDyTbqNikhFw44SX9cVHhC2ETkQfiQ1ga3N",
  "key23": "3HUDm3Fe7qop5Kgb8cCPQ2KaBi34emgM2LF7o5qVd9YyGxRJbzN29kTNQFfXc96JwAqNxq5RrrTWNmKpq7UAtFi9",
  "key24": "5gRT9QnTY5ewNXdnncAEHRV6qgsjMHGa7e8rBTPqaKH96ZdwWG7NsgJSY1WPv91FKLWbny87zFQ4yuZ9f69qGTfp",
  "key25": "4DCSebHiB4kg21uRWFSi3NeRminATAUvzom3qhC2dpzwVsDmk9dLfBzfzjq1qxR7dfEsqfVVBRHFaLXF8uEPeREd",
  "key26": "Gm6hC6Tb6qT22aa6PF1WNRVpcbABffJ7Qq4JYF4cvPWqbPtxDGm4SeFb77KSXysuZpJ9nhJkuiP3Qsp54vUTvux",
  "key27": "grsez2YS2izDVRbLsv9V82jQjReTBdvW8KaFbzhPbcwiPVz5xTGPwukEwVw88YmDS9RZpetrkgMxhm6Z4ZXnY7g",
  "key28": "sQzhaRxuTr3HFsXSMaAHmfXBHbYzN36ypawshjHuF137vjTjhTM5LHwTqyi8mHVfWk8oQGazCPUuFBb1iZLxmMW",
  "key29": "2CCFHgGdbykbSDQ4zMkZfWG3ujtiYT4PZaUs8ampRpHLtGSkEaavRQzSQZpiWb7JcJsUVJqUBeToZzn2tvqN4Pz4",
  "key30": "SFWsNvaaf3vMrXZzU8FN6nJHXDXcefK7VKuNejebDdYPrMFEj5ADZrdLMzNzrEmr9trTohnASssqdUyL7Keuan8",
  "key31": "4sb2T4bLb2R3wMmk73oidsTGa2VeCnLZfXPcZqskDF1Y7ZsanQ4QJ586Y1BEd1XZRZq488SBne8sMZJQztEBhLsZ",
  "key32": "5cGeAsUv9xcKkihr5tLuDu9X9ppcDJ1DyxiHXT4ci9e5HFfxN2ajAvrJtzK9AoqNML2RCxH5KHvQdvnpfJBUPr5q",
  "key33": "2zf76F2aos3YbUdkSHN1oos9JP5GQhVPzHdYMBvvXfodC6XgoHHoEedKMWiE4NF6tNLc3MzaqdJeYtbPhSU3AfQY",
  "key34": "2TnZpET62hMajEJna54KVrmEqMjBJMh6fhSrgih542zkntMyNnUt9TNLuiKhX5PfwzQcxYQhjR3Eunqsuf41TpvP",
  "key35": "2WssfPiKkQej9WQPJdAKdHyDkf77xTt27X8vDsB3uWwgmeeWnv43qmeDMUwmdxSZu2mnGw3yEKM9ATCJ5bCsgvkS",
  "key36": "kZSWTUTn7um9Xr8LqXHG7ciaMuVXG4tS6rjY1vVzYeJNJnqNyTYHGChdEks272bTmt1hXvBtgyBKmxiRCSUyfYy",
  "key37": "4FmDnKwPKoEW6hYsQsUXQLzzgZ41PX35mg9RHVfuSQRTxKeZq2HWStxGSGPYyJzMJWwvXqGD3axhgFC4WfkYnVoR"
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
