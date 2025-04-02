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
    "4UHqcRtg4Gn1sA1EVtRYMBsLEbrGHrCYzvjjXDCWkY6LzuaFsic242fGmwjRTYNgqNeEzwr7VsfzBjRmDQ4FbCSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w67nbot6NLvBAmEqEDJqjM73raJuT7VEJB9sneSvvxoJX8zBJHb8jbB9zfA6N18zxDBT1diCXa3c7BJapo41U1K",
  "key1": "27LnzezLGyrfNxwvVMUgtA36AsX5i96C7TtYhU9UywX1n4KoU8mEVspYZ2CgA6QfnmKuiEXZxEqT45pKbUApuebe",
  "key2": "5ZSSahKVqu4wefXxKGR6U6EMq8c9qie5EKfrDbHe5vkSFi3ggRbuAfVn9TbxDm9qZFPUqxUJdephsSYj4BBrMYL",
  "key3": "3WdQyGHRw81bRQxCMRjhwMQWc7tmfXPwpEyRwmsePwAQbpCev8tsQjVSuM71BaVWEQMM1V8ZZRnV2LUzLmRnXf4G",
  "key4": "5qJqV3nxBBzD7onjA4kyBZSo87miFzsF7GaWwTZfiEkg4ESEBUdpRA2mC8bwvMwh3sY89EC7ZZHxMBMraErKbLER",
  "key5": "57LwZfNvQtHD6U2jefy1T8vi6Xq8EBhU642vWamAzgy843MFYavMwYaZurF4xyPzJZt3JGCJcDfsfLUvGZtfE7od",
  "key6": "4MssYtARU2CpUgr5pft4UDpZMyZtsnrL3k7nBRFC7MZ9fbvwbLNxJ6PW18Z2yKwSj8sio9u8fePjKw4uFLcyRXoz",
  "key7": "2Th3brRk4yYVKVAeeskm5e61Enwr3Gwn1wpbGn9AdYSpxMfzwzTXbwvbnRbLEW5iDgkfvUb7FAXh5XJf8pBrbVNS",
  "key8": "N5yv9UyqaQ25crLkYMZyuo4GWmRXrxvgdXk5Sj5q29pNKA43j2RwGAnGYRhfJsfQ42hPSRp5MdLqfBpKejSueKs",
  "key9": "63Sh2THdXm9hhQmu9tF5gk7X4wzmK6VXCFQBJ7ahtyq1NnSNHnBbXfajmnXTp37zbwK4rfEmCeRcLnYN9kk5Nzd6",
  "key10": "2nC7a5DHQZP3EpgXmxq1W4ZCxT2ZhS2mrtxxZA2eDYtqyNG6GDvJzekU6BfctXp1kJu6Jm4rnjswa8fuufibZkn3",
  "key11": "MCGcvTDW4WB7EAYAwDy4R7ozicrWNvy1LHnVq2XZpJanAwLyS5VdhkypWMy2zBUc9RgiF8igEWRK2j5QriKF5YC",
  "key12": "8XW9dgrNaVpxYif41tBC3xVMEYanp2K3BcYNjot25ynZAjfUWRRNCA65bPTVnEhAovNZk2KGnFCsZQvGF4MWT5k",
  "key13": "2Hn8qt7umV7Rm3uDp7Vk5pFY6rkauojEcEGY2JjFMTKJYi6o3HTQU9gbyQgp3JPbTay457RhDuBSGDPGYrqFk6R5",
  "key14": "2QAtAkAYesQGZ1zNaBLTdRXSUQSKZSbBpWZ6hPiWvEc8YDxZrRDkXs6nJLVGrwVKPtfkPeHQqyW1TiuVmTdYMhcf",
  "key15": "3BBDAebAbuy1SfPfnVk28HVvw2L4ecjKaPCvVi1Br5e7o6vjTCZRYEEmD4wS2Uagvr1FSd2zEizEnNXjbAZBrwWv",
  "key16": "2rkd6SXsmfinvqzLw8H3Q5unsNbNmaTyn7KShfFxQi7KttceV2NBCZfxLwxyw66ad8BFmUUnjiUZNAWKM3R38g5m",
  "key17": "4djv5JxGMG4pJgEPBTs1844DXQSY4hmGiSMdYpfcsdqUxozS31KUbec1yXNiBRdbAA25YCX76P41RYie6VU6poGd",
  "key18": "4mYupokZT9nmAipkPmjZs92BdSLKR4C77o7DV4C9NL6GFYrKsKMT19jS8Qyeeh1xmwtvomfiPdresPHDK8scPtme",
  "key19": "4ALg7PR2yfRg1xSirWc6YTJ1QX4Dn5ParU8XvLNjA8r6C2Uef2szxsKmT6snbwHHsjSywmcr4dq8ugrVMkQEBDFt",
  "key20": "4jjGc7Qh7hb9C3n7a5DghBNSCnkcnTZuuerdGfJ7Qrx32onVjmdLKLSVbohRtxG8NfbyzBM69yrDqKKUPTWoKKo2",
  "key21": "Vs38qq6ZzJhEyWjddi1ebBvgY7KWvckXSsxNMpNosxV9ow5o2qBxXFYZc4VJWzzugYExT4xcBNb6DM7ErUw7dt3",
  "key22": "FJfuiES5KZtPJJFckn8eQ7z949KDJDU8UnC1CG7METkrMfYRvaY4RM9KwZTuaYdQGo9sZFHD7xzoLNU1xNyNxae",
  "key23": "4quNdk6Z8gCroFTU2spQxCjUxi6XxUcjT5BWGabrNuNH9m95E4ymcYruiDfLMXRHAUbb2SJaMqAYqvbccVusu13Q",
  "key24": "272U3XGtSp5md1EaXE7VREuBrB4vRkfdYFG9o5DyCshZaXoDPhiz7MohJBa634GqRWKimFzsLYR9feWqbF1TDDJf",
  "key25": "3m5AXakRApxK9rY9sDcJyUX5GRCyx4U1LFenTZoBJ5Ft9kFPmQ8e4kGGmT5VgG43GtsTGiRhxsoKiQwdZUcwo6Sf",
  "key26": "3PmUvuJCGGxTFaUqc1zM1bDwgzV843qpWDZvRp1Wfyo3JUn2wY3p4eYW1x2fdYU9Snjp6UyCt5a2gXTD2736UNUQ",
  "key27": "CRdQXSERrUxgG7ah1nndqbxffo5oa2AqqQAHjE2vXykJnbbYiU92rAPBH8QwwVCBR7jL4ZdTf4GmPqpteViH8SC",
  "key28": "4Wthvi2YX7jiMPkfhNAAMUUbehESBJk2cVR2oWv8PPp1sN6QKS7EQzSbC4e5ozEvph8nJvtiGqZ3Ygjt6nXvXTub",
  "key29": "3XQbNETbnBU5sXQfFoFmPko7jHc6U1tW67QrBj19Gpk78ryGpUWFLZAYjd7WuxioMXBKtwSxwmMi3nVqy7eGzZA2",
  "key30": "56VC849xsi9exQZQ1nb8GGPgVjw9Df7o9vAbJnN6vEcSLffQ4JnuiL5yBobfMvnrJsNnkSuJbwPKqc6mvB5dhSQP",
  "key31": "2UnLWj9Jce6iksQZpdU2wwr8ngUe2C3gqyNHb4aNGxUjk2W8Ardj8RYkQs4ypPoujExMYvxLEJiXTTCSsCnA9D9w",
  "key32": "43sdD4CKLkDVfiMR3R5pGi23TmtweKf3iew3izVKEk81GJMMfoUMZRKCsZpAJGSuBNrLvUzXicHzyKoQu3JYXZAu",
  "key33": "52AZb2du3tex3eqZWf7grMNtDBefdvaVSHZkFDMNveo2xEi9v7PQtDJkWrjiegzAtwq5hmBynKYhhbVDaTGDaHVr",
  "key34": "sMzFqyHh1M7nyexWWhHDJqoY3LzHFpn5TwUeHRWJ6ZjWKWz7nb3HTWEPpiHmgsYqmpmhKCvnT8R8ovoQeETGvoE",
  "key35": "4TjwmrPf9pJWjXWz1ZNLBS7a7HRUgfay3tJ3C28jbprJKf4qHegmuQ2aem7JhMQ8LdpuSb8eyRRW3dctQTyjd1Z7",
  "key36": "3DkQNHyZGmv4qZuvx5qbz5ybSZfPg1U2oRoARDVcbhqtuTHnRoVaL2x7MaJ8D3xoAW5vE21aj2Q345UuQ9yYr51c",
  "key37": "3DLoUBwm8ZU8Y6itFw1zRCn2RxgReM6d1QoYtoxesGCfD6pjpWvdzSfCmtfPhshgArWVPr8Yy8Fab7yTFaQVzgEt",
  "key38": "4Wdn6xG3Wm62FUDuTzoFRQYeRk5mdxggq3rbyZHVN6SLV3qYuDYYCqsqiDmkeTzE2SA1U5VD7bqrSddTnMMYjPNV",
  "key39": "TcZdSDLegkL7FJgoSznTo9vzKdsf97j1wSs11WZBgyXnTTYq9NvJbWuY7aAt2oTcC5WE9iRdUZFStJGeFXTcdxE",
  "key40": "4qrdpASMpK8Zw2E45oVYXxhb9fneL28H3fiWnwfCjytkQY2rkViWHZoAKuLtdXHjTMtVqkLL4TYVBuYak6X7h3Lm"
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
