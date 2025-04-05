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
    "4HZsdv4fc8shVDTKy166pCQE79Rdrxc6ZRDGTbxM8Yv3TXwRVi7p1JT86VZHefc2u9TozUtZcKkB5Xvgt3ynU3NR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uWsvA4AcRh3SNZypnhP7YyGtVYqyqeeNhkUCgAmmrr7FJ7m9eFzWzxTgNZz2pZW2tekQYTBNQrCFbDFjeYA9WWz",
  "key1": "49myH7E6RXe7ySgBLCQ1xRbzXdjhu6SQRQgtQctoWaYxqcTVSQUCsBqVwtgske7Mo9mntzg5RhrjeTJh5gco1pAN",
  "key2": "4JhWg59TGFV7jSNoLLZPGgpKKbCqoTBvPzpbrRKNEruSrb8P8RHfq84NJqG8pURFMC2s4RjG4BGDc4VFEH2Hf7zh",
  "key3": "2SUL7KK4wp6m49CvrrC8qYzvqzAjpcBhudmzR3hwtSx1xjCvxdMMgbvKmvuWgDvbjpPx8FyAmfW8nFMpr8pLbq66",
  "key4": "2xYFkV8wHrk5oPw4CnRwbEJhkYpZyTN1vFUopjvX7ezaZzpuKcb1u3maWhUH9a3hkdY4uTwHHmSsYkFmeZkUh9Wv",
  "key5": "9e5cBHwzD7fLT8UuizFxiRqfSWUbndpv1wDpNRZLBr3nvdoat3w1Howkgqf7xkiqMun99WHJWiXuEzpq6iU947j",
  "key6": "555AQxUixAWaRait2SHoon2Bq3zvCpbez9CeuUyNqf8XW9gGH9wupdfEwsvyxpopJ98jyykV9ZYih8xaWmuf2qQB",
  "key7": "3hduSR8taMgePJ3iEuZ42Do4FnYdurFfbBtgHbjGTb515pfufmx9qB6FfvXEtP7YHgkudwg6AmGHjQvtjuW68ejq",
  "key8": "2Z6kaatCsNg4ycVsqtXcSwdgNeBRteHjKJ4eWdr1kLtpQ9g6uciJ56MrsTcEVTW3GAq7FZDFxo6fUqKZN2mGNCfk",
  "key9": "57t9tA9cmWGnPqYTn2Dtxam1djYpyGropBttybPWGgtaXgpadCyzdsGRwYrKWrnumWiw25UNDhGBqDZF1iw4STA4",
  "key10": "59FbC5iYUy7W1fQmGzAHv7WcWUR4chej1LYpFY2mVMnw3jgbK85mqtP9LPWXxvE52xe3pbHUN71XKX673id8UdnY",
  "key11": "5bvZu4RKX82Hb3MQpbaWjMhTZPPHhruPiqcaC1dVkc1kQ33Uo2TApXn9M1VtWZWW2P4CMRx4MkXTotMc7nJpDTum",
  "key12": "mkiD7fHa3Ns3vu46sDQYEaiZkgXw1sBbz9hqkiyQxFSL4P8haxfLxtPC14D4RY9oFmn95ukuxdsyriC5KVHHjF1",
  "key13": "2jaFkBWrsDopeW1PzPKuGhDhUBasGbhn75B1vY66Znx6nHDZGKnMxfBzMAn8bauxbBMWKXjR6TgcsgCsGDos84Fi",
  "key14": "64YZjMbX694o4rin9hbX6EyQjKc2otCn2PGiPPccZNHGQbvo9MknVZ1yumoB4dGPhL4EWnjtjfx7LDEF4booSVHs",
  "key15": "3LZvUWzXQ38r3T5MK1NdN4mGsRZrNWyeL8ycp9wBxz6jmZsfptgHd4cREvRyNPVXWFmJMp8oXmn3ExLxpnt4M9AQ",
  "key16": "2BDVGUZSRuomfNcWcrH12hkzuawrxADEiHM2AXVTdKkzBq8wVkPWA8QuviiDnUsLz52u8qEWt5382Qe1u6yUeLzM",
  "key17": "2ucggau16iXeRUNtXuttbWktXzX222WbVGe5FJGsWvgpK1jaHPHbCfRjqgndmQYssFHCwRky4G18FGSw3ZioDknY",
  "key18": "2CmKDGb2K8psjw4DF5NHfkMmY4b95LwyXdewMnu56SjvdfxFEzg9aswP8z6f18WxG1VCdeTn6eDBaQEwXEqp8QfR",
  "key19": "RDKoghYJnTH6xf7eH4mMsYXaZDj2wUq5JMQUBx5e81iKG4zdtryZgRQ4kEtHoUXG8icCYgTZLLzNh8UVeTUNWhY",
  "key20": "5foNkYKFPunTuyXnSWA5KoiXgp29NhRmX65eu2Yae3w5vtryVUvjrSiH275vwrEq47XjePpCDA8M5dafRqS6V6K4",
  "key21": "4qwsvYFsHrSHrxYf6J9QtGBMHpitK127o3uAzpEw8dYDi5RqrbFW23aTWEo5e75TwJ9Z1sz3CPFgzJVPNXHaCs4a",
  "key22": "3hs7qaeTu79HrmNX3NwLXU4pJPbqa3951q7VA15xYrMfBijE9CgEeguEkDr96ibDmwQDRhndAb7omXgvrw99ht4m",
  "key23": "4e1Eq8QUkiPQ7P36nuSV5bPszUbSKmeFiR1kah4RamFvsSfnkFskeg8YmR5soQfzV24LvqAMXJYTM4NNvZ7LDbRx",
  "key24": "3GKSKikFhLgzHCJJMoozto2fqY4rrUjDVj5WyjCquxo8vMhJLf8USsMbw97cQuqqLPRs1VzG7fdLBiJjsBf3fGq3",
  "key25": "4aXEcAENU34DRNsocqRhCaVGB3Gij4GakTMBc7txkfbhDkFCHxwg4CqFQPt64RFHPkR3UVTo6t3t7L6aLPwAV58z",
  "key26": "PoaLQeCMbXJNbBASGkhEKk9xureJoPRtjGrcyLre395q3ZaZQLctsfZnbVMUX9AkLqvgoFEmsnbwvsdica3gvmY",
  "key27": "2Zk3BjjV9YZUddSrmPdM66pHhKRpFG5uCnCujymgegQQ7g7WTc24t25ArydyfAQFPSY9YaNttCUgvu8AFDKmJdv6",
  "key28": "3ueY7p2GbBR8AvjjbmX5wyhH2VKypauyi8JGj11dNUsoxHoczLDyM7qigWmzm5DbTB3Fyuv7JEb5EdbfKQSCQoFn"
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
