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
    "3yoMcZTZZPMz99GdTveF8BkjGiynqWHKfDH2M2gf5HQh8pUtUp2QENvgjfoqTgdpfkcP9LRvVqzfz1gsV3kovBuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xen9qTEqhVEWxjF21t5bntk2fk4CkSk4yCuiJBgSYFSWbnfWUi14vUCJSchEX37VZq6gQZUuuAz6qZPdGxeDDp8",
  "key1": "5otzKsxCbckyakienF9Hb5x1r7nxBim8ocWfcRqnAkQYjigSmsX31qbzD1kXtq98tcr69SKpo35FMUrCR7XA1sQY",
  "key2": "2hkQq7GfsKAs6iTH2QZoXRpiZ5oGeMiWkZCXgsQz4W5kAcktPqq3nEzBKe97bwTyZD57YzL3WiarJA31B2VFcZFr",
  "key3": "3jnMM9hPJ4aGBQyUMe9WCGzWTfpsQDWKHNHpyRaTVn3BLLL9rpSjro2iuwSGgzQR5boqrY9zNtHFvUUuCz9BrkZU",
  "key4": "2kc6DojqmqNGwZt2JdQyUeCDbNtZHLkLxqBkZY55pn8vsKLHxXxP8zrKeDcyAoBa5ZEpEpgb14RxBwjMnTb5pxSJ",
  "key5": "4CiwsQ8oUWk3BZ31xphJYGrXvuRbwTJhEzPevjLrtqSdVwPm6qxhPmwA8wqfCUGQa7XF3eaao2iiSWaDc2NpxLKA",
  "key6": "3guivEsGo9DT3vub84NWa2DP411ghUGzhJew7KnagLdC5pnCUDuojLtbb2mhTDARJyq4YVVSZZBFDTSV9Zg4RqnC",
  "key7": "252wGWcbSKQJE2ig64XnbQeHDww3dabayFsyy3N7SLvcUz7CimjxuJvNu21MBpihmqzJu7tw1yPeUfMkf1vwFMYi",
  "key8": "4GCaynmy8vuLuFhHAbudhAaUR2iVqEu9nvSrHuoiZ4g7upNQy7xbdxYVtSwivYuBFTk9o5AU8GmSjppML9McsZNy",
  "key9": "2WWrr8YsRSJ7VWURXKbA5Z9V4hM65qvtYtk1nK6NRKy2BdtAxGEXKQNs9jK1te88fAjDsuhwQmuMqdYVQaWP9QZh",
  "key10": "3iYrkE1eyxvj793rwWGx47of7WBeQjaq2R5UdgpwgxWVXsnjSgLq2KhAfLBDDbHhRKeoQpxuvfUNYEVfCYMoZF1Q",
  "key11": "3tTgiM9zCkpnH9Sf16T688VAHR432VwTXbevBQoJyDwtyMXXbaVH8yqcq96fdKqGs42p2Yw86xnhhx1z2UEb13QL",
  "key12": "3EdfJ4VQ1cLSmBiHjnnuBUsfJ48S9Th11Q2wXnEAdwV81jQ9v9JCwzia6Rp4HnxvqwSGsiq4S9J1zmuiZVsVpQkD",
  "key13": "3bQbaXAAGQUmvm65wZhwGdAJMzGpDPUK1isdaRNi8AgXswsJYz61zduKtynvgqze9sioVQJxzvkr8ZCjh5U2BonR",
  "key14": "2j6VADdteHTwGCTuBLEBGa47ezBrCvEGubTEj9QpCZ4sY8hzQ5j7FLQTCAHyKWV2nKDzk1Lg7dWjJsNTVDMJrYiG",
  "key15": "5zXE2fM7Jnsk8uGAHEdXuPzifdZKVqhfdVv98eacn3mCzLkzk5yLb7jHvk8U3XhXHAw5Sqqi64xQvN1NcYUdeGNU",
  "key16": "4TSVXStG4rmKgKVBfvNBXxjSsSvVFymaJFX2J9B3YtEQdPsAqqbgHCAkySeuyw8Zq4Ps7hx1yo8UApkN9d1xdz9E",
  "key17": "Xw6LREHvw4UzxscEPJCxtH2twSh5YKh2PD2mCnZFiFKt5cpfg2XRxsp4jnjXk9nzCgcJGXVZVtTuJa77nBAgMEp",
  "key18": "3VREhVHWBhfiXzYuU9kxS8Dy5URETrScXb8GGbq1dfsBya1gKrdh8BmUckGQwpm3RjY2aeNyrULHLqbyrKD9V3gk",
  "key19": "2ngrFJF63EEYhVqTM6gHZtTXg3hKJS8wFd41c4RFFwAi6wSNK4xV4QWQyY4EzqZh3XevPF2AmAxPCFPGZd3qY8D5",
  "key20": "nYFqzWAH6jtSzRaxvk3HFWcb4RhP7AynQasuiw7y2Grs9sBKaHW7e9L8W15UhiNPt4ucB27vBvNtUEwCR2Eq5fW",
  "key21": "5JGnR3gnxLaXssFnUG8VJ9m999SEurWdDddLZBvTPcxWTRVX5jbtmbWZB2YqqGpLwFCNWQT5mrmUGCTGu81rhK59",
  "key22": "5AVaZvWhq8RdM9nJhMjhD86TbBLtYhKLbb1VmUgi7AKTohmCEF1itEp7CmcgHZm8zFFtrPMUBciy5VXm99FAiLWQ",
  "key23": "5uCfzpu4Zfw44pLz2ZZ3oNHzGepgoBWofQyTBEG9LsEKjxbivj4eM9PatUkmmKC6WNSN4UnbaAy2JCQAR3zoBcxe",
  "key24": "4cQ9gcFsqrmsmQYrxreq61BcY8F2rehYFdDkV4WgYCabvaJFqpSbiK8BKJ3VXtPYXmTDqjDGf8nNf1xEfhqKkyPM",
  "key25": "3SXrbnQ7k7YK2HGkxcVjgtyiFi6otDJkD5SATuX76SCNsAf31MZ1dJDyh4eQAWB8eAZrK2Ft8igv7jCj9CR7JyYz",
  "key26": "4UvWJQxafqUE4su8hjV6faYTBNrCSUv3KVuxKrsrPDJeod9cAQKQR9ew8ak95vJkYp7KFA7xzX9eaVHCeej2JedA",
  "key27": "28mu2s5XwFbxXNLYVK9XAewaoowSo3jtN1i38o3aTqiJqCwMsJ7Lx5T4praEpyFv7XiSuycyZAbeDGdugw2hVMKq",
  "key28": "4eYRwaC5g3wMTHQeYfza7AHw6VUa7TTvDz1z2sy3heF4d2prYFzxZCHuJvr7virUjnse1Hb5zj83J6dwENbK1mR1",
  "key29": "4MneYARf6t9PUqYTdKwcKn1H5ShH4mrJawBSkcPVyaVCmQTB7e7gf3AXhPbfUPsSyP8gjTzrqizZLQibUEDapQ2i",
  "key30": "31tDQr5fd7hmkiPPTT1ADLPRVcqCu99Yw6KcsTN7T11v9SyVdybdK3MWbz6BtUmpLHFPb88BjWuYQLNzhr8tR6c6",
  "key31": "2KG24TQDePu6mRWQZGGqdZC8mu55rsEERMVSmBgBnBrZXT5tNQd7mpS2gjbX9Fk9PDbTpkFZLGaCjhZdHqqWekk9",
  "key32": "5KecLYWCLmtrsP5J2ZSqrrHj2V7U4TvUArb27GRNdjrcBvcnPWzQdvB6jS3QKGCBTsx4xtk82URGitQANYAB5wqA",
  "key33": "418VF2phYgKgPVSEVb1QdP2kHYz1uWBhmjCBngmGEJNeZUgTEMaoGFiDL6oYYzGXaEESkYTTQBqzDcwsEsBqGCuK",
  "key34": "4SMmJ2CniES97WpUWeWDF4MYWfzivn6BGDqPGzxy6wpq83igEVoAzLuhFPnCQTKUAdKDN4EpJQBmKjXGvbNmMjN5",
  "key35": "5Gmm6JaaYQqZzpLWFheSjbgD1b97CLUjztWZ7io8GzWyfyQzcfSCR3mvQofcbDt3oJ4Txuu9HqCxeuNMSHYAVeyk",
  "key36": "5zcmcG1rPVTNDii5MicFxPGZsmqjq2SPoYkR7jk9Lt5sPo7LLUUBmUayERCs8SDhgwQKZxh7ZWBHHQw8zgrWbEne",
  "key37": "4MJUdwV6uujwDcy5mXZQFCvXa8LjV8s2aEoHPpDwALN5KvL7pGUMRycAoq5HFfDyjAt44ujsDr6RiYGsXEgrzr9a",
  "key38": "3YVAjZMm2TiSY21pDLnoU3ckJ5b9vmHLDLasKaHEPhgjU53c93MpozS9z7qRfmiFShHjFH175FUqyNeGKCLjpZ3e",
  "key39": "ZBhn9BpNo8CiBp8oABrHPFpZaR3oSdKRpWYjwCDKg8g4uUeFY8hbRMUk6AneCgLeUhXWxF6r77Nqdzi57da5xXT",
  "key40": "5YCxBskYgqAB7BzmUHbye1tGKXxDHHf6o6ScSetcGLCNnzyHGNj9mGEvYPwS6EEeMLubKjUZGe9pYjXx8XNjcAsP",
  "key41": "422R9KbUjzXBCKWVmFdQpq41z7YyQUf4eK3Nyxf1KrLaEuFb1ENWsej7Nk9gDvqw996U14KLEAcVAsSuTxA5WdbE",
  "key42": "4NkGN46oanAtwdxmTcsbJBerkEQLaUxhEk5Ydntkuvtr1gMczuxBX1GEf54BhLTRnvYFFkXrVCxSm4dmgvodtA33",
  "key43": "4YiaXwFzmaUCVbPWywoz3o8Ur1TbtHdyq4sKJqKsEDANCetV5g9Z5ikeSu3rYtrbhSgFMbVuJ8YskG1BWd52HKZ2",
  "key44": "4LsCpMMxiVYY8fVJnYuyjJQCNUhqk2XyKDfA4ijsvSX6kqJqkKUWiYkFi2Ve6briHoN65qGkixG2VhMtg7JU7BTY"
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
