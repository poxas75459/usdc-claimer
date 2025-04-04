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
    "3Yeo1qixBRZTr7ccEcNHndPrsRSddUGb4kRFRchH3XwxHrgvjvz7ToWRnQzY2ri2Mdpa8bp7E7mxkdQq2grQbXjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FVassVF7TFTjZGDZ31H2TSJuSSB7cTUYeXL8gmRbvbEV619D4JYkvVxX7wZHzMi7HMeHGfhVS8GAXgHorRrbRcJ",
  "key1": "5xSitD9PgmvzeHn5DydcL75tJoosP33oTVFTsfdcCBBv2Vsrs9ZJRkZgGnxaAb9EPZCsFhwUXw6fCHsrLaRW29wH",
  "key2": "3vm7cXehLj7Dc2dwbL56jCCjRzsdoaBFPyJhLqQFtd8Mp6RtuZXRqCu3t4fQdG5wN2wTb73vi3TpEvTTEmzov8Zx",
  "key3": "5WMyuLSNQibpwNk3z1t3XSbFL7HuyL3utFH8p6dwe6hynRRMXGDvd86BwMUgTHasFHpr68SM6o1sbT9CsHoRA4Dd",
  "key4": "642sBwww6oNufoyHzpwndGnbTA6EVRbtVveNNEmfszzQL2ynDPRXDiHUvE82Mt4j6iZdKWnS7RzAANVq2owKC3gS",
  "key5": "4eMwut2Ht6MTMpLWLvK5uf5yL9Ve7z927bTV4kwDS27C1m8o23kLKgPxC5YXfXSMrPczwqPLh5hQzRVN4HwskvLx",
  "key6": "5qV4wsr8KERdVrswuoVwQqB7s4BnZB8k4jUWCCECPR96p49tXLNgJyvcQrRkzoaNKnEKt5LhckHeCdd4pb79u2Q3",
  "key7": "5kjfes5X9NJqE5jiiEMZG7KXtEQiw94Vx6EFZ49tDzVhkLtsyrZNTiFcGFZe67JDknVvXcSdCm5SLDabuM4rKpPS",
  "key8": "2ciJoo5fMQGAsDTgVRaCrqbreVykffM3ptaCWoyh5dZ1L3UdL6g4LJKndfp1RCQpqFNspoTkqPP15NLJfTm7LaFp",
  "key9": "4Cygqr2mCA1fjSqFQregRnvhqLBzwFCzBbf7HTEenKn6KCXT97iGShSZrQtNpaD74WEHKfdr91kStcvouqLLdGC3",
  "key10": "4FJJX6qCQ9WvAmdXuh4tFWgkAqfWbCWzq3jLVz9v6ZQynpApLQWKx5P8DgVYGJPjdBnCzBubce3NTSWxRB3NuYZ",
  "key11": "d6zK9vkm86uRZZkShxatbZFhMTMbsBVQMrxqRoMAbiJZevyh6SBkSpaMxzDTJc51jDg7yheTMsvxxg8kypwHX9o",
  "key12": "4dMRiWKzW798KD3hq6xjJHkMi4Gkwv4P9A55SRDtduyaE6FGk6XZgQbDsrRB4BV1MQAKvVBdxBD2eTD92t9QgPb9",
  "key13": "4D8RAPkNp8Xb4wAtaaPERDUAnrbwmxiE8orshqWABjU1BhHoXyV6ajNUY7cFsKvcj9bGPSsxeRNsVQWDMVygAzSh",
  "key14": "4mfB2Xrj99tGu8oRU7rEP8UyRFMGvBHypJF6UXt3WjnNmEXSC92zxAMo3TEFbLf4zRFYN1VT5mu2TQDd437Gg4LP",
  "key15": "2Z8f8318ESphYCRTT7NR1KGy7jRqNYVzdmPUsJMYBP6tPiFLK71DAeVwiFkzAhKikiAickNZWQ7nWvVWo4ao4BYW",
  "key16": "4RvV759nggYcUpgGicD3WgUG2zX7QikF8UzEKtkLkPajksaDfnuFeCwKPyJfq6Lmf7YhA9pEPwhmqdJEGUHoiXM2",
  "key17": "4Mhd3Q7PdhSo6esopP5fZP6UkU9hs3Kru5WmfQRFnM2MDBZaeCHGinfzQaciQgjEKYkSHo3oC2qMEqAMpoTYxU1L",
  "key18": "3eDxuHKyZHVuM1BZvtNWip8xP8oEFvMxoTCH6K1DYAgXYoQNXrUKMrJRawzkWfXr8kPkWMJrm5o9ykBFDUeVrT6v",
  "key19": "3kdSP11hvrDwwoNPTvoQERGBss7syGLNn9Qr42FfJiDReWaX1GUHJEfXzPmHhTRofw74gCSJCTS7z5syY4EFQ3PV",
  "key20": "5ZSQsktir2cuGzWUr3uSYWYpu7QKyz2EdXivjrnv2o2ReT94zKudek8gbDP8CeN8prdV6QoJ415pjsCWSos8Umnh",
  "key21": "33AWrJ75DAGo6aetxG74ERZKh1mP51S13RUywF7qbCLDGFEjE6jNpWbhtod39aS2i4jcfBWhFx7K6vPKZ9zmCuBx",
  "key22": "U31yvr4CaJLKXC23kX3rTiYFaKcUAGyYaJPX9Kc844UWGsbcpMWrVHCZo46TzrcD8MArpGwk7iBFifsWgh284tM",
  "key23": "3Q9zxrs6PYU4eQGqauyV1BJwWpjpG1483EtLJzYy3kidASArH3Ft49MVycWpHQgdyxtUyY5fQ1zb7nNuFFpze7P2",
  "key24": "tL99R2T3EPqayyjv2YAYFD3hKdHiimg88TYiXDJL9frTHEp16KiZtygJpSZK7WK4CDENYo34E3CsvVwvYNnKF9J",
  "key25": "SDNMqrJuuJqaHwGGcSYUdBBYaP1Uk481TFfnoxQuFWrtzuhg1VTUrVVRmaD1WUEFRLVrKfwZWMM5v8oDgBKC38S",
  "key26": "37Cy8wZZUJad6VZZyhxtoMmdqLoqjHDgnxGxTwX9GKYsHsyG5Kp9kfWuQfD34C6Sd8GAcPJdiNZRTu4FtrX9LHmz",
  "key27": "5JFYb7GhdKRwvJ5SzXnPkwADBhDAxfLzXy2q8DgiKgLrmiyPGonCkDZY4EbuoqJv8rGp4WSocXtNMLxmsnLy4jS",
  "key28": "4cttAkazMdxpm4hCTWmwmLtQmPgQYzgzEcYEf43iJ4bXhS1ZwT9kmbNyhU9NTNHaJiymtc6WPdV8jDeBTjAJwM3v",
  "key29": "32roqR6JqxtcP38vjHP6tLEPMuU1fgf3RGNBcZj6eEehL1difQkNuQ7RjkNY3uScBQjQXxrLMLcmYALMUCtnuuKq",
  "key30": "GkUdXL5Eao3p8Wg9Jk9HqhAz2pZDjxcKs7sd1NE5XqbTjgrN2wka9sGZuftQ3pa9XkU73iy3ANdyaFC9SGh83iJ",
  "key31": "4ZgdRobg7FiB4SzkVj63iERJGHd8StBpdCfpEKqnzEteDvdStdsNQssXBjjW4xjfwDV9CR6zpPhHLoLBQryffnme",
  "key32": "2RgZ3BWcvJvYtEHQeW2dPvzKm3QSArqK8Vh3utL8QfBzAaEBfDLz1AfhL6h5fTN4tkcP9dZcdhFTSqU2m2j49He5",
  "key33": "iMaEi7YUCvMQ2W5p536VK6ipnbCCvoLjD3Hxx6iQadBbvrKzF6kcyACwXLBZpWrC365prw1M7DibgivFgTheuNU",
  "key34": "5btYyU6qSsgY5JUN8w9mVfw8UkYL95HBSEK5MEdwhdDwWKmgFJwfRfh2TKQHqDMZ2KvmamFsCCfN6iC2M4gmv5hf",
  "key35": "5qadqxj3DatZs3Gbja9LQNYj1tsmpy6B5UBUZYmGQguXoACC8fqQLhVKgg6LNnNaUAMUqA3of4eMJ9sniXY8cJhH",
  "key36": "3yz41ceFtyPKSoZUwPZp9XbJJSmskysviH47sJ7XkaCo1sYruEgVuetoykjVWv2yYxffzfNHLrt9Ge9kF66zQviL"
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
