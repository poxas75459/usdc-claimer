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
    "5vx6bckVm24r3oPG7rTknQpXDJSFpvBvrQDNwNSYj7h7q465Pdaty6Ewgc1K7FYaFfznuKsfgf1qGxtTBM7TF3DN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hAYeeK3w6zVYqyBxbDyNVwtLKYwqV38t3sDt1KoaYyPyAWjRWCfHv7L2zJXNwu6Ak6vuHwNXwwK7dRNLguQe3R",
  "key1": "3gaFxyD2FqZd8WbvvKKR1UQetpKQSG58FPsiJRs3wvaKqFNYE4GjyNpJbBCKhBZcuDjT8dcbP7T5sAMAcr3qHuDL",
  "key2": "HMKpY3VE4rx6CujEEj2nVxk4MS4vFEnqAk2zwzXdopWDK9jn8B1ahWyZmcCCNS4boB8M6y8s7izD1TCFR3HPAvX",
  "key3": "PkUk4F2Y4Uz66HPJ5TkMjvUYqwcJegpzCLAjZQs899i1w6kaQxue2fEh3JKK1F4htPVSvkeRgBrAjfYqcqTRY5e",
  "key4": "W1Xdk4ReXewaTCrLUekNGirMCV6U2kR5YTKqQadsMETxtjr5mEiAom6m4BrUW4Wcn1saDPDk6i8nwrf17idtg6v",
  "key5": "1374xLcN31tMn5ND3aAFdvpHExQMXhTzr6nXgJfhhUDN6DgAVWRmgGxhTb9Q4Y3yqWdGkz2bTPpy4X7nSWmocBe",
  "key6": "5VwxQoGKk8BHVCjZn3WhqddRnXtxwWhyxBFT5aFbpATSc4EVpbXsn1mQF4sjjzVvopfYvgggjy15j5r2WxSuGDU",
  "key7": "5PStd4RHoXzoNWqDLFsZYHaK2DM7jnk7vSuwQK7jS8MYEY6e9qGtDL674C69b2y2gXmtbxD9FofGptq2mAW6hSqk",
  "key8": "2ND9U4nmB5LZr7dc3AiQU9Rx4GXnm9BpEzE9FKgm9mrYV6GdQBXvFEFZ5z7KXyzck8HSScoEsLBi5MN5tVev9ctv",
  "key9": "3aU56Zm9RJ7337r1X31t1PbnFyvxjQHw72iA5zAT5uiqNEybwY6SvfoiXoQ7cqCMUGzzwqiyM8gErVudvgcEEEgP",
  "key10": "hbCBWC97mydhYw65nWXDB52jWwdqHJvZVQFuxPtapTKfNXTxUQpqp7VZmFSkK675Bc3vZ9vbToSfznV1oULp9iz",
  "key11": "4iJLNPjFzcLmxzTseeULr93tKi512jpA5NtF7xaHNdktoopDxpDLL4h2KZVf7AkQHnf61yHZfukzuwKQ4iXDYNuA",
  "key12": "31n599FVSa3ze2XRihcqvVVVeU9wxTfyyHF9AHQGzuvhmLTNnqjbAnU3GWTMUUmwWwo8hLj8LtiMr2nFvTdL3VGu",
  "key13": "4jmMiihUQZik3vnF97P7DdRQ1BYom9tSbwD5xgjGsmnjxUS76VDkTPuwiWViJ4KNJRofPL12MLXQFPvpY41ZQvNG",
  "key14": "67UkMk68nMJpQcZP1qHHoKdmAnX2Dj9gNcsiFkQd5Tsr8xPfWc9mnB9ZsN23Ato3bbe64bJue6obZTHQRTm1Txy1",
  "key15": "4Kdv85unjkpFoEv4P31dppTyDHtHsbSmez6gJ1qRakNxdVzUSFAmLRTx8yTx86Em9iouoscaXvmnc78gtDpcX8hR",
  "key16": "JB4qKrUWfK7NWiRNJBXaFuozrPJqsGvHyhQL1gYyuBxe7Jxwn18tkCEjQ8mNrXZGaXc4YRfJqgs5ECPnYKqpWFf",
  "key17": "5ZhTCDVgrnsmXDZet4Ubocm4JXTj87rjMuy7k6pcv2cpss95aiH3hEGnmGdNSaemjM7eH4URyJwVaQXi4823hUdg",
  "key18": "fyzeF8J73LzUadmp9nFxGhtfLDxGEDKXUSaqQxCwCzYsazHpprRx64CdDbcM65vSUaKe61cxaBi7z5D35m89jKz",
  "key19": "3MudxkP4HKqNsAbiTjJrwVsSuQWjRUU4vY9cwRnuTrMNb7re6cuBegtqrxYd4auaJiCDjp91pYumrA36gv6p41Hs",
  "key20": "2N5LDfSzFMLseZSZui76MxAgCeRiQnQLSdpujftMBsYWg2SpHC9FSsZBgxh1Rgvdb7iPnnP1bTEiYLCQrC8Furnr",
  "key21": "2wJobF3sY92bSpZfrQRz88QtEVhHAFQw2bky72mJ3vo6kjTSgY7zDUuvt2HScbQ4uR1rWPgP8hvxQLrMBRGbmRPy",
  "key22": "3NQhJtEuPz5jLc6kPQLVKSBWvtgwsj5TWNNeNC1NQFYPxykoipuuC8widHNSYhAb6vBg1UiKPSoE8nv4wZMdZFi6",
  "key23": "ZauUar3AijNUDuWpikYFGBiBYPfoJcB8omTAnhJ473EJP66EyBGEcaadUXcMJN58dSQx3YfLn4td9kiuhchpPbD",
  "key24": "56NYpMnoDziJSQTsTTdh3iNMBS5a9NR1hrSuopZMxyp2rjyRRzqmMqicALC4pyxfiwC7mhzNRX1GbCabhU161Qa8",
  "key25": "3Qp7GovjiUSX4s1p2L1T4DXN1sUvgSHnUXFmfsrX25A7w5pj9DaWo82qiQ3QscFpgRsHgNkn33bsP36fEkXsJ4gj",
  "key26": "3uGr96ve1Wtt6ugJC3DQrqmB2JjFSNhTTFEQL3UNJM6KyUduvkLt5L8HqzGC9cQ4UHqrBWRwoPGCEMX3BYJyLvEy",
  "key27": "33UpvcCQjwMy7CW9Hk1py7qWgny19c2JRHKBWBvw3YEpT3coyK475mgRXya4RyRVabYuA8PSJJLvJFH9hrKGuQs8",
  "key28": "2prRPGGCGt16SNo57tuTNvtAshpJ11rDdD4tzLV1uhEwh2JwCb6VWFNbvDP3pHPzwUNyBuHrPR1eApuVu6WsBRG1",
  "key29": "3ogH6uD8EfN5qXX2MyFBV1BkPbcgRwrM18VeHZyR8o3xuo4T6rVVEMRDHmAxE71afNdbQv65Fy7ddasitYYHRvAY",
  "key30": "GUCouaTBtRGvkzyePTSdRzrp7MDq5RhTVMppb79T8sS2EpoeASvbniU6E6ANYxpHoFCxSej7bQVKnuTn5Jmbn39",
  "key31": "4EQpm7GkGwtveWZxkxrKtkyzAPNp41erHSpxzt4D4mcdaoNeJpYhHW7XHtvooJmo2kwAD6g29BcUqapB6kNdKkEV",
  "key32": "4gt2E9Mv89rmXrSVRrPtR4tsRCN5C1sYbDjcyajYZjFSjbkVpdShuLuaaKe71fpP4ovwp4PcR14etLV99kXKocmc",
  "key33": "oBScuPq8NJEb5DNkwgDpKQ3EtpdArwHfDNw4Kk5T1Wr7y7Wi3pTpiM5CdHrrGZgw7x6AnQ3MKWBtoKYVWkuTpSU",
  "key34": "2vahL9sNBh5njtSPnpZfNUBJS7FPBnXBRQtffu52bX1VHj4qkp7TN3E4KC2yFGqeUESaMZhswZpsfZyFcqursPTj",
  "key35": "51bTgri5ogasxXRVULjmMDPXPu9gxGgaQBe6vAmKVji6VQ8oLhZraihUsrsqwQtmh8Ruv4Df6ynFHXR5DhPrFiHz",
  "key36": "jRMzCgHpyUq88Tk57fxx1ESdLkRejLD2axw6TvJ3n71q7kgZEwnNPcgvWKLkFQtwWEf4X2b2iArijkY9TKae6my",
  "key37": "5HwpVoprJ2TVYVqQzcGVscVFRYJnD9M1JMk2FUDVvFiVaYFrQ13kr1BQZuDoi5nAMQWZbGQEWEJVi2FJ9jB6bFvg",
  "key38": "5nVKizes4v748eTuAVdsnUjgNFCsvpwfxmMoher6XcmmbcowSYuh1ZVZvFiYg3G2Yg7cWZx1xxu7LtA7zbSZ5kDZ",
  "key39": "2vrkVNBrNW7Kr4nqKk3uFDuiZnR1pEAzwD6XnjZmZYtkUF9F8mpLkjK88yv6zAuhyV9BZHVRARf8gyksbLy2axJ3"
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
