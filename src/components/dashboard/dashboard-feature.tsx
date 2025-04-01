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
    "6CFjuUhKXJwpreKkRZjkgJ7cNpjwmnN6dgFdrpDsFF8k3eb9HCRQp59xpe5SNzf2M3CEoCHchLhJWaQHoeFiLBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RaBGCUU1Pz1BvDQWMWNPJFy9WhxHegnK3KkGP6JbfEdQR8oWL2TUebGuZq1nVBEj6VpcsfHhEE6X7ABm5ERX1Ar",
  "key1": "3RTGhXxBW3kKxDaokyjYWC47hcvLjJEhy9WnCXzHNBSPeaFX2NcPAeYgHdbF3MsPSC99UjtBavCSQKXmA1A6BjXR",
  "key2": "67fez4pixXh3gyBqJxEfPocGnMDG6gRjqJAXz46cqjskeZoy4S7qRJEDxUY9r7WSx4ECZNWbNDXyYACCNT91mpVb",
  "key3": "5XpH4DEhN3YDr2fk15rhNwVCwxZhg3aQoMZv9MJws4hPyZbXpLs39CYRxJL8wtYEJ9eWHGp7bQLstevJHnhZkTx3",
  "key4": "3fm9zWigWdcRn1dcanZaJ4bdCQ1Qwf5FAJUcmhoKWN7zTCpwiGn21C3GcyKftXCqBfp9d7KgmzjDL525iikRbVyU",
  "key5": "2TTN6dpp4Kqe84VFsAx7EcE2XzvDRNDCgoXpt5FPiYn6UXofZDc3iBbx3bAZNeqWnwnetA6Pf9Po2k8ZMPB8uVhC",
  "key6": "67gY6oPzLfD1ewE6QgU7THG7ezBMKrAEZroF3WP3VkFwbyUjgKdbhUm3VY6YWELzKs3BiWvhwCWFEVCG8JN58VqM",
  "key7": "QBM9UPW9JGDmzBYBnzJn81TTp7Jdr8CcgytuEgU7Vc3XK2itnNY5R2Fp4NDe2EsWQGY3a11rvAw3ggH8T75AMvT",
  "key8": "52FgPWtU7Z2VuZPU1yERgNxsHAncCdmxJEdM8RD58H2bkV51yAEeQkjZvRSG4yzRejgUBK2AsBuukFvL7u4ZPUUE",
  "key9": "Ax6H992hH5JkwzKkraChsktAm9UfqXgpPXgADWrKVBP37bibnzfFCVSmhH22dUwBrbwgbHjcfY4zvoYvsopmqS8",
  "key10": "41T6hxUXf41WZgAbsr5Q1B4meBPFNLmrpGBdPhUMqW6ChDHgeRAHFsErbyQBTqHr6Cq6uuu5xiVrWww85ZhsPHy7",
  "key11": "7C7FLTvuH51KtFfhfSigY3gMWxHmMokRUaRS7m8m1eokAF8WypuQvfzFAezQR4BTcpoYPZJa2HKP7tNwAB7uCX7",
  "key12": "25ZtCLV7SbY4bJTxt4PDDjfRztz7NHpfD3Ec4PVKZWpgtJBNiKTso3H7P1fcrZpq5zTRYFtSU3YPg1Qx5NXWLdhn",
  "key13": "2RwNGU7wMs83ssSGk26a4npbRM8gwzGEvfgwH3tuCyu5azxG9tyMtuo8DaBfJT2eKGkPqGi7horwM1WuVEd8d39K",
  "key14": "dSKv2QrcjrBK7eqgHf72K5gqem7SkaNQ6ij9mR9xBqkwedUu2Nxcpw8wnYa8L931TZhXrnr8hd9FMbLXhxY13ir",
  "key15": "29Kku2iEDGHdoP91LuygxjVL3epezz3bt6f8hizPQHxnTeL6zngKLLExJ5H7wieLQ7kPsCaETEcFumzohrj8c8ik",
  "key16": "KvTVme39bRdPctjTJmaVFjSdQhMzh3pZYY7pt9n1pTiXfzNVkBLig7LRmCQmqvD9GUamaWgKYE5Dq3Qe7Yf8tYp",
  "key17": "2YcjYTghKgAiwm3xwSgUiw7t3oSeDozRYxqo8P5Tm5doF36o28TxwjNRqEVJT4aLfa4Gp9Jbz2Ch6Reh8S8dHT7W",
  "key18": "2ogGdxv1jufdGUZ4CVaC6bxemZMq1CvU1Y5rBbBekAaS2LAwLV9BR8sTw7dLyB1zC2wyRWNXt6Lk8vjYKzzhQF3G",
  "key19": "2nSmBmcpdqYQSxnkZGJCzcnFThQrXG3EYWCDqd2BPrwh7qG55d69bnVS2invcuu9gUDyRuymZZ9Kn3PTdkipxMB5",
  "key20": "4JBQEeNLjfcd2M5x7HvHKsdmXmTKGwS757MBTUe3Ha9t6HukXUuLwCrFEoCsDvbaqMdEY8pTX9nnJoGdCwYbBDLc",
  "key21": "kTKkLBBuSAnBRpnnCZxWiNsoqSnGi4iYb9oN3mBBJRnW83PGH946SWnWv1fhBvuuCH44peiJ42AC3XLyGE5PREe",
  "key22": "3F6YdLAf2wzxfNE3fViwmSFyLKjBHAkcgabvSHQM5V9pZBkDzpTJ9rQKSweX53yzBKQT6Rgdzbbjmv6qUmQ5UTmt",
  "key23": "5dp1AuioBjoVdmjEruG4c93tcPYk83gjx2SQfW7LiWHV5epMdRPRV9zQsL6omKrZJPZ8zGWwxwuGTvG9uLU4Dvkz",
  "key24": "oPc57AXb9Ada5S77oMjPVErncHF3X58uZ1exroYZyzq4H98EaiZYgPQht24quR8XVHYCozxFdyp8tWj6S5MnBUF",
  "key25": "44QiWJzTuXLuX6WBeBkePAfJuukVmP1rQTyv1ECNL47Fw1FqZVfP8qBjTZdFK9Ax8wSj8CUzmjqx5HmyKB4QMXwD",
  "key26": "2KLs2MxUw9USh2VPRbqF53p5S9941kJNWL9rWCYzEYziQtRpbU5aQp2T5frNxSgBcr63QSkrNYTf4ANMF6RScs5t",
  "key27": "3iUwjtDFWP3G5jwdAyz5zuXcduusQwzWBrb573b1uyMac7y9rVLSLSf7fGWQ4xggewKtzCefDuURWC77S6mRBEk4",
  "key28": "53xKAyKsAiH29V7CinzYQSDZ7sKiSdZbQBxv2Nwa75xY1dnXWF3VuLmuFvnzNMmK6dERb6uguVEqh4KiyXMBxW9p",
  "key29": "49oxaHkoiUkCyNgU8YD1RVEtehoz5Gfo2hRrZpVnk2EQDMyo6cdJ3JnswEHViSqpodp4YWCFmB4P17fBgCX4yyQF",
  "key30": "2jYt8qCNE185FSW11ZoPgPYTdr2SPeuGKKbgjvS4UMTnpBWusgLyM8yhbbFQZ9hVFnDCDTQE1nBWnCnR7sJQuwFf",
  "key31": "2Xi7LfsQeyiPd7zU6wXMuiz2rEH1ueFAGmHgTtiFWCvxEC38hN5rwupSQLKMmxyPtW1brMfxiUXEK1mdB9LyStmc",
  "key32": "4x8zBAzLMZucJD7km8ggoKAowZHeebhvJ5tVekvj3mTWsufxioktpWWtSe796hjCy7isbqBMzSTPGKiQRNKtgW84",
  "key33": "4WzVxYBekkv6jp4tLxfanQq4wPKSdPLEEkrrqDkKZkkX33aMNGaDkVPzLguCjGHCJzTpvcgReiL22yV4yyeNE8QV",
  "key34": "3U1uT6PpP87yHkawPBNqnejiqYzNkVvGKRnxfiz8bbGQnRgfmHFQqrQSZMbt4SsXmCFoFTYk1PnMpk11k2Rve9pJ",
  "key35": "56xGZK3Bx2fJ99JPvcZvGqYQ2iuRgQWnPdBWo1v7GyfWaSBT4pcFgUrK2rXLzkxFCjBGNqBqh6mns5MFSCaGLTPB",
  "key36": "3VpNE7oRyYXKmVqCSryxgf4kVt6RRc6iQFVt9U6tkbid4ppLz7W5opTFm3McX8seo5NReBe8cQSBD5RJWBVEHcfo",
  "key37": "xAUcwV6f5yyUnUdXeZwco1rGgB9vGjn4JAdxeKG6QanzsKZDuGBPav2pVPa6zkszLh9sCpsSFsY6rQgAAY6iHqY",
  "key38": "44cZ3EFrw1TxxGePjWiEdFmMVopCJN1HfYaE4kjmPr8e4GsTi64acG2CGcBivAE4gdUemB6AsZYpW4g6wKaPzVm2",
  "key39": "37DS1QXMgjsAvvTyhsUMhG1WE8EQy6DvHLnwvwEXbDJRq9YzVhZJ2RyXzvDDZL17rnHPgNFYKCau79MiwJ68hpL2"
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
