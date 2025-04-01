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
    "2ymg2J6VLY2pTfQ2AEnbgsmj7c3Nsb5LiumAvhvtsP3NpCkSopZMoBSosy6xLpK6Cd3nNrzY58iALz5EoRF8HQuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W9ybAnxqieDwJx3XyPxf69BDoWZ1FWoK6tKdtj32Ck7KNXJyAPrn8xedtF4YS6WYJ8HCjcJvT82WAy5LDGV8eVx",
  "key1": "5e9gaMUkR8WDUuaLiT6D3wJiU6uThHvtyEPK6UqGiXX4CP9ydPJoY3pXKfEpYGErun6jPCwVS2amfnbpvpFGdYgX",
  "key2": "3jxp4oQcf5kBnutokD5ZMX8b9CfbzRgE3h7Vgj91L2dUxrEQASKhZTXv36NYZayVdbMViqTMDVSa1QNstDtgR8Z8",
  "key3": "4LrxwoaUjTcM9LKwmXBdHwgDuzzv1ruoQvYdwgVxp6Udx7hNgiY6yWCViEQ1j2m861t9Q5uPfjXWXM7yKMvq27s9",
  "key4": "mbfs4ug1UDYQANm7dLf5awtR48ZKWGVdnFZh8P7pXWPoeEEL5rbiuPY1yiaCkBXaiorgnBC97JrxrViG1fVGveA",
  "key5": "2ZWW4tnvo2JEJjXtursWZmTUabUFLE1e3pfU6gWS4c1ARs45i1ZwEbFbDZUBea5ygJHgV7PDbVDa91GLd7wK6SHG",
  "key6": "13WS9mGbp7FwfcHUPQ2zT3syu5XR6PGXMb8xhxHisYzhPZyBzDx3UE5VT7MwY1Yvuh6EoiQ5CGZ2GMnrC3dhRyN",
  "key7": "4xiQxtzJEpGeouAcTZuZsSN5RcjwpJUtJxnUW2DWS9t2HiiSosMKCkt3gVGwmwxMhLtmucbTVWkVo7Qcm1BWfRoK",
  "key8": "3BaWkweXqdZRCfuDmmaKMQEcZRVVw8gKrFiMeQJ42ms8N4YvAaAb6SXKGq4oLGhoBANdDK4sKSWRztZUTCXUUBko",
  "key9": "2KaBs2m2AsowNyWg9bAcdGaVr1zPUXJRACaRAna19D3YVPaWFq3VehybGzeQ29awXCz91AFK5rNr1tnFSLTTKfgS",
  "key10": "F9JY8bdjN7PiuivCLQfn1CKgrtkiznhsqTBG1hnLvDhwApRevL9tffkSb58kiBF3HiCjAw7YFj2YCqtcTidfydX",
  "key11": "31bywDLd13UYfJsiu5s1oTq5T5Kd2PnBTNNkYSbi71okdwSoMiiHwsJDUQ5X7141v7jfKY5pUAKbC4hB8Uh3XaKt",
  "key12": "47iLG1ubRogeyyaxqwZg2u45bWNohfKEmAg435AgrJW8GjJzMF4P6igbX2Gr1E6cKkwPFPwow1iHYbePi9W3j1bb",
  "key13": "5DzytAbgJ7AcJEpMtDaNUerKZoKsN9rZcJjRB5wFbRcigu8AWY7pRm4PxEhQmG3W8Ej43Cr1c87zTxHAhzga5EZq",
  "key14": "5KYajJmHRiRfFNbW55NaAbdtmwQncoUBvwHgMXQQfTdMYBiLV6vAez9zxoonm1BQ8p8EUERpCZfvNNpLFFs9KeeF",
  "key15": "4NrTgqBXgCjCTK8YsmATjRgiL57mqnFer9V6t2G3dpmn1Hjh2ayTozfmTxEwVqVB3BWjKngviHemnBykZm7MVXru",
  "key16": "M68LXyjJ5VeUoc9W8cEY3QX5BWth78gqRAeKfmhx14MuGzLuJpEgmWLb4EzgqTWNBvn75XHiyb6LVp6nRjraVt6",
  "key17": "2jcDov62FijXsijGtWiExyUUbNUbvDGpC1K15NtNQR2GSvWGajNSBwep3LHy4hWh6W5H7N8rFfDinkoEWBeMPaHU",
  "key18": "66URMPxDFEqCi6TqGatJRcjqWwLja5z6LeDHAqqF4n6G7c3E9hhqwY7MbH5udZAQBTu6Xppu1hDZsGSqqQaCgGYh",
  "key19": "3nQ623sjMmWtybSYLZ3u4DuuABWSaHHWR8avP9tp7Y9HuT9d5R8Prf5kQ3wfzqXvwgkV18HNLLHqAvVoE9EudiH5",
  "key20": "43SJYdPVpnZwG7QAN4dgFGZvx3X3bbe6Fg1eyupP3WW8LEgtZV9E8eV21Lwz1zgPtBY8Z2WFjpfrjFVqiheWVm1d",
  "key21": "2qAs6X5GGgSXQfNesT38f8nzzo4LF44fg7sG8LsDPxFkNrFefNR7j3kgBpEBnTaQWAQQ4SxzWuHaq6aDmJ65WQhq",
  "key22": "Fo5SFoCvd9RzXv6cz8jL4JEUVLeBDF54yo1L1YFmo1XkS1eHmJ8ZS2Uu9WELEW2AC5xbRpHps7LsmhCEUYM6GdG",
  "key23": "jxwLQLbZo4gbLgwjMST3n7vfrKNv8czGyLrXt9vyyXAut3t195GDfP7cMEnhuSwH1UME8a6Gg3pbisM1gJqZ4GE",
  "key24": "5NkoSNq9gsxD5V8b3s34WwC6pRAhWgjfZwvHZvK79Gc3urTNMDWCKVcwTsHSJiNyurXaXqzcUe5zxZTCRSEfayqe",
  "key25": "5VLM358HhggBMLkSMZJqieMH9wP9X6rM57CCgfS9Bre6Hn4fkxXWCjoicbSSYER4hhXFWGyzCev2SNQyBg34uX7S",
  "key26": "1Jhi6qghQqRLBJStnyYSEAf8Nr9mBjVyQZkZkq9uG1eF8xvHFFSW8vaX4PBBvvpwkb8aohgcDuK3Mv8FDuPger2",
  "key27": "adifpz6YmByBVcP3kEEPQ6RLmQuJPuniiXuBVF5K5vWif9KFqAERBYrLZpuzuXc8pM1hWGdWT6osKDEuyDZgV48",
  "key28": "3CESyuxQVNBfnLKfQhqp2VLfWMQ5mdPDBriXDog3uBVz3wyo7pFbSn5sDGbHgbDFLNFuzEjjdsRB87yH7i346w4o",
  "key29": "2r75Q6174vy9TYru8wSFVj7WDkEwv5je4y7bW3A2ZgSSsp2JkfqKd2RCsnEHYxeVT3yuZhM7D5j14p9L7YhoFEX6",
  "key30": "5VtHTbT4zADUU563JgibPBHrrfdjZYhGnqBzDBrNgKLzbLCA8DM6nr6m6XX56sSbCWVfNyZKNbXwHbXcqU382PJE",
  "key31": "2mT3gxKKNLL37iAaD4MirtLcnoaYDh7rrDdW5xUySDG3qiU544jWCr6GkAS8bdKKaLc4hkA35uxeAkfdHUY9oqcb"
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
