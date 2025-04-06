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
    "5GowE7DCR9GnCiEDqWpwpdG68X1uCkmuxgM6JxZ1QVLSeM9mJSFKwjnKrWjjtsYw3665XHfC8zdbbCb8c7ULCVfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "522GAZQA1jGSJSxhAhvEuPWKEfPdJy2vHkTdjJx9QRrhU6hzJ4CDv89w6f3gtutdFYaqT6bjBmgzW3ct7quVkr2H",
  "key1": "3hMuzMk87uUUzvtYiPumuNEHCkucfvv8ZPaYkEXdcnUngtbJjgiwNGUEQVCiKU9RyWdx7SYFXPgSxbymjuit32yo",
  "key2": "61ei363iEFwwu13oh7s2Lbz7gaaivrZJDbRbi6RUhC5HLGt5SfZGv8YdSDH3M54mAKpRNVGnbBZpavxXeTSaZeSA",
  "key3": "3k4Pf2TC8AzfNhGTgBua48aXSzwww8vwtKUssrMHBokPQzouDcrx9TLqnLTJEnTivUr1DSUW8eJMCL7JqTM9KiJw",
  "key4": "2LoxpecDUoWTeJVw241uwL9Q3DKwLkmMsQS3CMFyRkTRYbVnMhhNxKqahd2XxX6sSW78S8xvEq57A2CSRBJScu59",
  "key5": "5QLZdH8HdPSjdANdH3ANkXsMT7AncQdQPfqxHVPGC6FHp5EJfHDqmBCMmVowYdzxH28hqJTsoGr8bJ7k8Xode8BX",
  "key6": "3fnPnXihTRawZ3zLLXRBYxY52wtmKNGaeCAwfqc9ng2hUAN4T75M61nBvVybsNBDiofAsXuDhwCc4vuJFjaQWoBj",
  "key7": "66MDvpTnU9gyerViyVg6tjQt9oRdGgAVis1DRGQtZuskXEWHjKLfc9qx2GKAaa2ko5yg7F42mQo1bZMFPvYV83Pm",
  "key8": "2CcsvNPgMxUGXo74ChY5X4WLyJApEAoNwYEXU7MzMHNyW9haVxpBXpNEoVM2dbuSscA5rjLEUqE2ZUt2faS6WZ4S",
  "key9": "5uz9CYmXQq3b7bbUGbXdNkS4rvH2C2FNHPwYCZUxxEgwoBNriCGwgL914dp859gaZpUvnZK7MQHj9buDbQ8ecF6e",
  "key10": "5tQ2GLpZNugi4uWL9Zk5DAot4iZmoZYGd8afeu4x1zvw8McZX4FrboN8LmwitcRbpyxLXkZmHdwoUgDP6zojxeS2",
  "key11": "65y4fx3VWn428HyKVsxCVQtqcMTrDtDASPQyLNEvsYDPLjaaoNtbMX7D7DdwPBa5Bo8NFkPV9VEmrtP3Cj9FhCDJ",
  "key12": "56bVNTa2qrbMPQPRWWLQfDC2ZxSs25qokRUNvbfSMjv88LzYE4kuXGaWrmpyt5jXq3sdVgSkin9U6fyTAAmT16FX",
  "key13": "2dWmeP6emgGJbuVFMHrtezcA5X3L7bHFSov3x6B5BvBiqB6Ni5V5Vvzjd7zC6WxczWDMYMJMb68AsCXzLNRSoVNK",
  "key14": "5FXtdfsLkMULuqdSZTeqKvzshxxTRk5aUdNNExqYeZbSbBFW3D1L3ZpWWL6deUruT8V8bxEap6JMeFEGz1mGSbVY",
  "key15": "3YjGj2d7W81QsYzb7JGFpXmWoiqKHkQHKsp72P42bFsN1qr5BFR7TB3kANepmqUxRxSFkgvYTNYy5d8nY3Z9WvUZ",
  "key16": "5hfwxcsDsVHobFYCGmbDUKZpdeyvuWv1H3S2tpXmjiHn4GWmrU69hD5izKLsRqTHQ5rqnAt8t6Ct29xi9iGHFJq1",
  "key17": "Q9syNHzjAmkxcxhQcjh3FHT26q2iJRs6bcZe3LMVfJowHKyi1mYNdxctLTqLY3W79Ds9BscWDyRJNRFvDZU4Ecs",
  "key18": "3THGAvdFwKQjGUFHBBT5BXbveEog8MRfTtXrZGz9ZeXxMPoTwarW1TbNLoq8fQC19nzhGMEzZgRA7CL241vhNBKu",
  "key19": "HVhu4khwxooan5wX1TLVwUfhXhTeodjDHxqZCiwG1wRGGtyGJNnTQE7ai3KxpkJ6tdCutpiSb2tHFQzCvewaaCM",
  "key20": "5rpUwxk1ZHweGJSbVGDdYVkvgeA6SKvn3SJ3uuFAZUoqKaYNoXVLwqFXvs8LevbfBwaCZfywjvhB3pHdVGARfeP4",
  "key21": "3HQ5Bs8MHqHk6tJ4xEL3X4z33jNzDEK6KuCAQ8U8DPFeV1unVZLL3rvp3NLfVT6v5xMGrrCGb1zhDpPcmXXZWqoS",
  "key22": "Eunch5BsnjRdh3xwLGgeJn3HiXGjrxV4EpLbQBgygSiqNX9Fi4Ljgi4ZGnsDAC7rZkftTJg7N1fKp8DGm4VCXo8",
  "key23": "4SfqbfCxMBH4AhoZxE4FDTfU9GGyyxso3YXTUjiQGhLkwviRTHLso45Upi3ZvrAa4PFE13tiJipppf75kUm5itzo",
  "key24": "w8i9gyRRrGfL5CTgeZkRVmfuy8M4NMXCjxdRwCN9L4uE5tVtmZsUucVJC2WniS7WCbxKZvejgCZAuoPWW8FcmGk",
  "key25": "43ftK9ZpJiu1RnczU1dM8Xjrx2HVeQjFmJii8wscaiJrQumT3Qmdq1trzTBWdgr3sACiVjoUNec6MsxpiVaLLq94",
  "key26": "2vuuH6P56qXgX4Wt74meKhg4e8ArE3GN8o6eJKwpZ6QPMEJ5ezjx4FVgNCFqeKycFJRdob79QNvQw3MHtTfBqZtJ",
  "key27": "xx9vhjDX3dgqhgGMccLdKcRc9H9vU87M5TxL6eu5oaLYjcJorPhypEyATL861CD6oFT9JPmzdh6e6gMPvjBQnaC",
  "key28": "5D9f6NwmH5YWmvzt8AjFw8nH5P5cwbxp2nKHbuR1BYuASHCNsNve83xWDWgGyteYcRWyWvdXNcL6VkH1UJpcGH43",
  "key29": "3TmLY7RxVvCwWq3rFRyvcKBKZ25aML7QCVBg8LoRzZnRDkhXVEGRjhm4vW2RpQoLGjp4uVH3UCSfHaFNtPyMspRD",
  "key30": "2LmTmkfAgxvJ9N7NnJJ5oXb35A23enHDaidGbwC9p3oCGYnB4Xa641A5mAbCSGh1G4g1Bq7CCBEWT6aUcz1aqbws",
  "key31": "tL3urNnPvUrdHyKhMdjBz2rboknLKCvhd37xiUVBGHMTvJjyjM9VFiW1wt7KyAALMRjA9coroFYBnssArM6dY8S",
  "key32": "2TSRvGFrdDmNMHbKMpDYaifWrUXC4AxerDXEEmLqVQXEZsG6muofWyTwFob7MMy5aBnC6bB97iuRwgiL7WhTTP4b",
  "key33": "HE7gkynb2LC7vLHrKRqrMdtyjf2KfBuCwDqz7K4iGkDpEyMf6zmGQPEGzLcGQbPkfYRymh4RcpdZuS6GHSRQTpf",
  "key34": "5U7vBrNwecxt4dnJZ99zs9m7Tjt4Ccr2dCxry6BYNSvQm5vpg1ajLsZhm3wN71KEAutoM4eKQ6pbAtUdG8vWft3Q",
  "key35": "2f8XUcYV8NnC8PUxWcviLdivmuf34eCu3Wad82XQxYdwFF1YTY5NhDo9ipu6fN1W9WTtMi9c5UqE9UrssV4eDj41",
  "key36": "2Gh8WL5khcGFPNJvTz8iuqxy1vTdGc87CefPY3nduGVWLipTHWsv4oiXZ4V1yKZuwe4WQtcsV8j6x9ZwebKoV3M3",
  "key37": "4UjrivdGuvsrFsdPcYoCDC1UVPxbsAFwnD4ojpur7rJPfJBhZHxJJhKtqLFFXmN7sMbnLEwo7BgUD2XPx5ALqwrJ",
  "key38": "2YLTzXLfpnwZwVjYHjMGHFEYTnkbweMJfy7mQVsof4PNgVmjFhxHJhkH9Pid2qzJSM8BBjfrsUZLSXHGd7sL2qof",
  "key39": "59ir3NWugwPvh8oKGMoTWSA9hjSBrqgQnzFfEiGakbp9y5amntD3sH63v4TNKtfDjeTewBgaRHg1GDqPQdhVuGUt"
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
