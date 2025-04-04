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
    "5XTaNm6HD4W5LsAJp98jn24QPdAmmwa6DnuDDcRjWkG2oHAtfEKAr1Cnse4puQWo5Zdm4WyVyv94yMa9FpXpC37v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gy8jgyHXDjwDeVNksCuQqQPzL71AuWVPfVLEwFGNdmPj41eT2pibUPutmEfc5YVkw8ehLnFj8AMjSy6bP1PMpVk",
  "key1": "5aCvDGRanMCWJGyrAguVvQsvpwu57qZcVKRivEg2xeEGFYokaNWrkK29EdYWDCHAZhX9XfKfoUtQSWANd4odnMVC",
  "key2": "4Pm7ywaRw47ZaEpxF7q8SJqm8VCY1YsJsbEGMwn1Paf4bWB8o1wgBNg94cQnssKpV4khoQbjzWBpZBFBGMV8nXvN",
  "key3": "3umMrfv9axsFc5PxcCR3UD75wg9YLeZx89fk6A8EVGiD9HuGBmknUeixLE6ckuLNSxCzKoFyVRw5bFsp7ekFnXJ9",
  "key4": "2ec71YpnmDupHtGztXfJLjPvNyV13YeKM92YZ8uBMu3wskPtcFThge55tgrxR8VAFcJJCKVqbEDZhM6NfaK6vSRM",
  "key5": "HQUD5t2yiBPGQ2jPA3kH5rGyot9kZKx5MKRv3bsvaU7azLXN4P8zDK871RYzaG6KfEVZny1s58WUn8PuEpxG34o",
  "key6": "3FxTLEECnBHYoNt6GApNADERhzvDXFikRREmedXbXta3eUWtZxRHzFH9YCCoo8uJi4Gs7QCdAHaQmLt9d8Ecowp8",
  "key7": "29iDj78VXh14g9GdRFfwuu7FjoedESnxh1dXETmduo7oYhNdBCw6cHptqpXhWUD7kyLxXigvUz1XEZyXiF4MQspU",
  "key8": "3TYWKJfSpj7PCq1JG3NXYK4vgRzT5sTr51TjYCxRPGSZZcBW7mw1qhXDmBrMDcjfkPn2EpNDX3k55gAQ1qVNCLVa",
  "key9": "f9bYnefpboU224dmp1iK25d3zM64UBLGy9RchRsTuqBkPLD7zQNikh2w1QqtMvnNQ9KyTnRuvzXv7z6UVASnBHa",
  "key10": "4D3L3dRKHEmARPkD3gGXtWLJdtgzWAjFa2SUfFhgwv2zJ2EbEjeaKd1ZGXJXrBpe4c2jP79xKXb9pzrBSnoRD1wb",
  "key11": "gU8BWH234M3piVWuVafzF5CJsZYQeLxADWj5BbhH7RXWjSxrU3f4FLh8ogDAJJWpNjUh1L6UHgAH7u7526SzoQs",
  "key12": "4T9bejYmGNMupe64ingTLRXRCggrJaTTMFZUUMp6wgHrVgTY5Hi8UsrjF39SSVNsw2Cb1U6tiDMe9N8JwQdBRS2e",
  "key13": "V4bYQts1cmmadkt9v3ZQZxao4bKeV3H2CnL3oYNap69C5SN4NQxuCwof9r8pvJSzggMgFsMHhY3ncnaFypGoNzo",
  "key14": "264YqDN7kppWxDSJKjPnqPZXawzDgX9tyJGRbyEvC6wzeqXa8yRNk4E2mpxzAzeCcawXhTqGdATM2BLCVkzBZy4t",
  "key15": "GJq4NZHP52HtLYzQZxfGbW2CMui75Sxpv4trVMjHbG61oyvKbM1C41AHZtZpxNyiuD3Q67GG6bbwpNj1t1FQSsJ",
  "key16": "36rsiGAtjDQMMn6z75iQZKwaCfFv6SYjLHChNC9YoLgmpHg7MxyLC6XtyoMTaur1XQ2HJtyV63itzn5nzVM782H5",
  "key17": "3jPxPKthoD2jhTxB1VjraGEj3JamxD5nE43Z79oe38J86AGNDfSFp8BbmdkdK8KjgqcXVN1JxaK7qXqwTULxCpYq",
  "key18": "DZnHYuDDLuM5Gg3Qgtvv74HqkWL46BoKEYEpW3GD8CSBXA3r5Zup2qZ26whaKnw5Cmw11Z4sqtcd89kBqW6VAWT",
  "key19": "3RUoH5u2y4H3JVMTxpTJpLfWFkz1CKam6Z8KS6N55CgJaY9tRT9AyHEApqzaE2bQqheRHmk8inqMFVVVarjx26wQ",
  "key20": "A4p8yqBPS91VdwLThg7LbhhAzmEyW8vc7UifRqcHDNG3xipSdDDwrJTYuE6dGBFLqHJR1dSR3PjWMmL1tyziqY7",
  "key21": "2SjUu36Zkt3DeQk7MhGLuBmNNMqC2bj8xa7Fymvkdwf2qvcMuLBLe9EjsqV8NBsQGwQkXxtd16DXkSvAR5KFCbEr",
  "key22": "4u7FW5qjzXXyXUpV2foPdufHXoPb5dsh53sfAUaH1B3HMqbfqXXoercee2Xm5n3ypEXVm9kJLSupEurCs3E4juwM",
  "key23": "3Ko3eAy9SWazzgX8DK74ES1NtfV2c4GwoqK7jMrjBaqrsaNC1oRh5ZsGBPuaDjEZDZBxKdcGUtFRYvC4xM6jfgnQ",
  "key24": "2WwcrChYuMYBFFDgpsGPnJftt8X7VuFVbnamWKKeKTREgtzabRfrPgaHRctm5YVawwJFTTfoYDMc23nTDom1xU1h",
  "key25": "4NiYCNsT7dDW6iDac3JkuY9BKxHdbt1bqXGbxWvprWruVJUNg57Ka6xS3VAqSQpvfX8oRo2TEKhMWULxeupYmyeo",
  "key26": "4uAg5rjfZXkGW9RRYjcjcwW1uaswex9Vmi6mWij3o3dGHbPjhy86iD7kztJCWKpT35rpjHuzHzZPL5spmtUVmjEf",
  "key27": "4YSHbDrpurHchEXrJ3QtKxLhepy9r7RAH6gWRhJqb8ZHoSyVHVpy1HT3FTpDgemuWR7Nd5h5eStHHFMEwvURZq9Z",
  "key28": "2dnQZphDHDQDuPLdttiWumaeC6S9co3eJf1Ge2MgghoNEJR6oddJrDgYD7J9JbwJUb54UDRJN9omg3wrEL2k7rv",
  "key29": "3CFnKDvVfWkBshV4tvhUa4t3jxewjvtiR3SFP6jQdY3PoRZNrqJoWM8VDJxgj9iyY3bkRWLY9BGXCgw7RfwEpT6w",
  "key30": "28arNzhzsETxuVBikGggFo6BVGrtqPKJLqDpBF31P8ZThrD7ippxLZcAQ3hDTe4zfnDA9KWaUQghCmWgNLn88VmP",
  "key31": "5wU9haKwMBfiDtbidzNumEzJdTygnR3UBDPvNwSpU4a1LPWSbEiE5uhjZamqkWneZ1CGQVNd3yX4sU4i3sHrHWdi",
  "key32": "3oti2AXknw5ta983S7p1nTNBWmocrui7EhXJm1osu6x2PZ1YomHYW4xkDuDuAf54NC3xZUhrkM8z7PhhzWvKtu61",
  "key33": "5Fw1DR74kRxRF6tAZ4GcgbYjG8PuLpj3ffKbfwjyxE2ounzkv5DT8GVqnuM6wN4PE1skwfMHLUFEJyKeVm7kvoDb"
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
