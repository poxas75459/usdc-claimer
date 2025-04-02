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
    "5VL7yvd5SGPcBRB49GJRK4RapMBgPRSLW3oSPGAcrYtpRUX8izzbgZrLkNxnA3vhzznm2wSfQtaeW35Ud5UCRpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KaVtiqgRDpFWf1FG7DWdpfeYvRXUFqYHcoQHVPQjszFDv24Tp1TTVhMnWaihyyzbKfBQHsjjtqXPUPi1pJMcG4y",
  "key1": "2nbxCKzNRmdwbWcmHojb7aRQihR4k7zhVvVgYgVTXLJ5xQbj74CuimWMBCQBDGG3ubEwLBJd6ySL57VfGDgZga3k",
  "key2": "21mgbWLQZieBytCQb7Ztc8aTxaoFKU9EttJdyx19jfxUEX1tg95pAZgrS7ar3MCGCQgSHWVKJ3YBMMUBXMh3mcGy",
  "key3": "JZsEnFyxtLNhyAPMHXeCg6rBZoDyWw5Gmpt6mSpXiZZRDH98E3thaHfNXss9mqRpobYc8RAC2xQe5fPia6oavm5",
  "key4": "39x1NKDNPtx1tCSjtKGH11u9oSzrXQWm8F1f6q3HdTM6ir3iHBFpm6vRtyqSEeSgR2XRk8gerBzFJY3Bd7g9RqPm",
  "key5": "4CemteK7QB7TtLFiWwuEnRUnjzpN1nGK5ZuYTLR7s7yGbLt7mKvF4wRcJ7Vjr9rHvHYYse7y7C15uvifNiWCgUgP",
  "key6": "3qCdKDxwM6vryw6Hos3tZhTEF699KJNx76TgwQJoYkSiuMw3gCAzSi4C9QWXC2fx4DJc6bwt1AMqxHWabzaViWGM",
  "key7": "43oDP1iDTMBzzc8q9yjez33QmHpgEhPYr1dvxCrqF1LLL6mDRUxJPsQbvuQf7oMxTcWi9xAAnWuHzGttH6xGiMxY",
  "key8": "3ARWijKfLKLH5bfZHNdsytcTHGFDDUEjhh8HmgCLKKpewyjjFcHo1ba6MfyYTJQ5nMmC157p6vrhM8SCrpvcP8n7",
  "key9": "4VfUq9Jaxg5e3U5McbTUExzEAw1JEByoCT83xNAdUHhTwH2tyKAhSiTjZhPxrN1vthjMacvqnEKYPBj17cJDYDRC",
  "key10": "4h1xh9FALfSewMFvbupeCfgBSjNC1AeafqKw1Pgrbc66y7QjVbaGpY4KUxEZopC3tot12oeJLKeNoidXUPkzah5k",
  "key11": "29Fp487MHr2Tr3AbXWYtuhm1P3H1hs6cpXCpk8hD3F4DNuLtXC6wNWPPRyEf816iq22whCcsiAo6zEyxKoxzX69M",
  "key12": "34B9gjKcFDNbGhXzaEPBkPvBSd7M5VLMSN8AvzuPbfa3XSE5YnC46uwfe1okpqj5VvPDag3DaiiybQ4E372KF9ag",
  "key13": "2oQQxH6mogbXENKCvS44irLd3nSnunB5ZCuh6KdThrnsoqck1M1U6Ptoft619eGkX2zD2myusLkSrD3kpMR2MmTC",
  "key14": "5kxnbVSChqNp3W6dPMt7Nj9YmfBXt6uEmas4JTHMmAebkmXsCBv5MfpF51uoosSTzmvQ7nttNf9CThmztQVmnFYP",
  "key15": "39KMgHdENpMYTxGBfTuobB2NBczQiGjBvp8zSoiwQEg2EeDTgjQJ7iwaXvsq5qZEvEdNcq1JeUkRz2Q9sgdPz2Kx",
  "key16": "58GJjkLqEmUku1hiTC7oydCcycZaXZFH7Jcjby918pwMWoSPizWpYvm9eggyaZHbxGJoB8bahyS3SzMTiJYpyFA8",
  "key17": "3PHqoohxdM22h95BpVgrQs2F6JxAJJsw9dZEEN19f5mbN5HQWdPBffj2YRY56A21bnHLoBSzDyFU5fKLWJ6FSnok",
  "key18": "4UogpVvXD8moTryCuBcVJXLKjHyAQhRcUJ8AUyVAXAXC7prQxLVKx3Ghkg8HLtZHnmC1LjZbxmftR9BCQQoGcR8c",
  "key19": "5HnNZMKZYdyexRG9U6EsscQbDdNLj3mw5m3wa4JY5u57nkXRzzDekBypkPxdNHh6bTvXsEmFDUXKf91MKZDxR5LW",
  "key20": "24fCRVVe4PeuQBTuyYSu98XxmgdLqiynFXifknBWMzNxgDC638QZ6VoJG3JnfB1TrZ6i5XnBxxi1szZJKJW355Co",
  "key21": "581CenQfnC6GpCszwtZMQXtTjKDDoPeqnfBHdjbWbY91Ftnm4wXB9iqiVJqLLFfh382FpfJ4qjyhajAxXehg2P79",
  "key22": "MgdFeUcMfhKrXpxS8KgpcjEuCCKtj2zKhkFMzKCCF4mxxcyqvRVNJw4HakdAGZJQ2TqVC6XTmDc77W1K8bdpE3C",
  "key23": "2iwmkWp8YrSpyLMBHKJS8NoYr9vJybfJMeqZVJPyVCmGSG8w3GQKGTQ1snhADRX4gwzYANoZYtcnW6VqLcp5Ljah",
  "key24": "2X5uttuScSqfHwxwNFsbLigQRYyGA6Tq1hpndZRFgeYHz39SMrjCn8YkSrx5caw4Ri8Amo3kmMCaxHUvCGCRiYy",
  "key25": "29h7oEQqMWinv3ZycNay4mfD5489Q8pJgFZ22yiUYHVMnwwUR4pFXYgCsvx1aHM5nxck619uW8eAuVUvJy1J8XmQ",
  "key26": "2aCRAYwdmWcE86HwkpGnkecEYDnZx1vscgreGiF9veRwgAhGYS13s3yDpcFxyjfYVdGZadmHpGPTetyFTp4F2gEc",
  "key27": "67oqDwxxSu7pr2W7eTK4hhQKT95iPNe9ser2REvGG3qGHv6XB4y9Uo4WeurVzaZ8Bk5F7xtp1qhKnqKvk6e96Q1i",
  "key28": "3nEPUxwDvwYg97VnmYbXy4NAtCo1t29Vrcip1ptcsC8XXzm9whccfrhUqCqHDsb31vme3pH9AQ1y52bMy5Z5F4TS",
  "key29": "5P7vVTcjyAoHgmmeNRqpQYpRdEeSDADFKFoxUYD1M7FJQ6uc9nittdRrxQ6A7X45op7psPDuFmnxRaH1j27Dn79Y",
  "key30": "4GDi5Hw9Kn9rKvuQBbfz2PQvLWcotjwPnaCxVgxTQZzVjeR2Xv7gHbHsBxRwet7BDgCf6j6DpGMGnhHYyQY8i9kU",
  "key31": "b46GizY6eP8AueZyuTG5U4vQQoJGBxezWDJ6M7rBj5d7HVbeJdmD8ho1R2nE8QpsWrif5vnzCAnEpTSWqJSfFVm",
  "key32": "2Eh3hxXYcN88MNXtXYusFk52bX3pFdaRF1D7GipfwJ4chsYyirdJbtMvRXXmvjZbZui6eCkSemB8tdMxMivnLeZA",
  "key33": "5eeAQxngYw2UcuBRFUbYsDrJaM1kzKyWvAHJ1ucqiHJrByoeyfvWB28bRXg487YcZJCBzwLFVRD5HRcw8E9KY6Rk"
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
