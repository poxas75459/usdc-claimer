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
    "43JeyjgYKfJaw2cbjYwDQYW2Xd4VCX9DvUMgQBWM3w4S3psRLu5CZDc39Lede4GQVbC7CLyAeUaaKChi8d6DdZgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NDWSaCUCccNgpoacJLZvhmJrJh1WyLAzAxjrRqKd3TiF7FJS7YCqVj8L1LUjJixhznofHJSQyL614FAhbtncVii",
  "key1": "xXf2Jeuf7xVCbgYqLTUBWidT4L6PS6C3h9mSpSRNqv9Zqz5BfRcMEwCsHsdJAA6k85PvCgKui1YywQk9kyz8UVK",
  "key2": "ysheJ28sBGDD5kmMcz3qF6J3YB8g5CALdeZov9qDcXWG4tUvjuL8YTxWYH3FvdbaUEFnpxWjGfhwTJRZGY7BSAi",
  "key3": "2cTXTuva8JQSNNpBHUWhv3NhHkLJfXmD6mq5PUzNmedijgqfUXCowWFuFhBn6rb2e8tZ73WZvCjmWuWaBsDos5U3",
  "key4": "47ZEWeHYXCb9mDNCyg1KWbuyhu7xS85WVHqxJTLMGJ4fcHqzyuNNm88gJUCd6Fazn9mghGSZvCFtmDKZXFx4ZEjT",
  "key5": "2QFWpPqxiDxUUQe3CZTVccrqjsoCa9ra7wGKXdUrTbvxNKmLY5eSshYQp9dTHHj5ahLJMaeyz6PpMKRyB2wqaxk2",
  "key6": "3fi8evntvKzSxSCKbbfbwdueB1w5xi89UKvm42FxxN5McADxZSDNz9e64HDVSjFWihXUJd32urphzXnFycRLVnbx",
  "key7": "KiQC2XbthRjRcS3JZh6ZU24iWNGfeUccHCTPp92ET2UZgDtgp13HUWHGRnt9WoEcBnZAU9dCEcLBZyyaU4SLjBG",
  "key8": "AdeHBXaF9BMzDFWs2qXfEw1QzgGojVeFoaWikhMVnvjLxe2Tj8cMdpCaoZ5H7FMjCTz6TNSieXvU1yKXrdtc62A",
  "key9": "kYqQtSXZxbrR7omNeu1AXvpkREuS4pLoqEeBWUrGL2W233rULGb47DhwiPUqZn5aKDGRNYJBdxHY3Hh1j5anXu9",
  "key10": "2G3VDVJrDf8Ds1BSsFiwZGTKWB4zpVn5BvBtPoqK9a7yQSutgHCcQ5on9hW26ofdZgcZDBrYEZLyYiFaZ6N68ejy",
  "key11": "3kpvLCo2s3r1nj81SKyqsh2KdFqELeSRG7tLmcrAeNcX5gcYQEdfiyjJ3ycrLzVf4kHkv2BNnYrMdt3XtV4VMdgA",
  "key12": "3hJbREH6K3dQb5JgKMuZVSbo4V3sJhqpoUCFViBwB1QJm8xxqovMWjSUivoGPDCL7vPoo4qm2sefZArkT3t8JYC",
  "key13": "P484USttF5ioaroJhyNMTpq5bJN1SV1yghPo4iKbTAkiVMjZyWLu5M68GpfLjBmAbuNTZwXtn9bW4GGDabzEK1J",
  "key14": "5fZUVigxLUNmygEx3UFM93VhhWXBbAmgudYURGZEcGmQbqMaM5dLsNgtpgxFDoBdqnaNseeAhAkVafevGjAuwjwZ",
  "key15": "2CiTmccPXdFAnkcavXhff3SqRcieHLqYW1saciLhTwNEs75q4YgefPTbLaDmz6Pb4SccWJe9HERBmwnBHwS5MsJw",
  "key16": "9uZqJG2aPPp2CLpvH12rygUMxLSSvxFQ6ZwJ1Wf2dtXFcpru36rtfZGvxvVJwD6gAutD6oNtEPmsJDV4AhJ7bmp",
  "key17": "5ZjcUCE7VCtN6bpwhVsE4srHQAmY2N72PUPQgmCVtxnv2q6yq4HtdHpKsGRe75XpDcSaZA1yxwY3mPf8WWxzAWgV",
  "key18": "5WkBgJ9BaPqfg1YNLXZvmzMw3qp7XL8TkFfvEd6nnep8iSTzuxPmrdeARF5jtCjRn4Pg5ZHQSFmqnE8VauqV1PCU",
  "key19": "5oGyHmv4YMM5aFqX3HogRQdttd7xpphmBjt3T2nKU9paTsx7pYoE6EF4CRmxdr6nk3esPPQVp1oyRCkZ73HYVTEm",
  "key20": "2hVm1HLM1z9Y1TULKCp5v5fV8xbdGfwk4ePgAuajJKroujzBid6uJEf94AYpEGVrP3MCadEPkmkLyPstotfvR8DR",
  "key21": "4orGmQJGUZyHKH2An243DkkreNFM598h5kQEQxhuELGxg4yRipUZM38s3ekxEA42A4xdSoi4HWtiDiSJZAM89WgY",
  "key22": "bqr13fQYTRCKcj33bmzprgb61sk1p5oj54mWsP7czZftRSMVs29jvGc3bxYjUYHUKd7X4fhCepTvekbeLxJR8ic",
  "key23": "H88ofvuiuH6y14hLQSoGPGg5JrDXx4EoTtLhdAnBBAsmVuVY9iUnHGHbWMDjNCw738S7Hq9uaxBJEQLFwBDH1xU",
  "key24": "5BinRREJTLgqJN3vqdgUtpciu14BM9kibPbtwh5onpV4zdPSTwyXEBMsk9tnHmzDmRXRVmwxD7GsZZr1FuYEZe4h",
  "key25": "4nUUebqdcSvbMrDicd8ZzD5HNGocE5N4wx7UssK1yYFRZApNbbyQ5fz483gDeGanEwCce5Pwtwmnvq6vCH4a7GW5",
  "key26": "5VLoaVnZv8dYDCPkFVpnLd1UCrvqM4w3N89VBdcBsx83Ktkvmmz5satn9NE3F9XiADeqAosTESUwynujPyuRNE6M",
  "key27": "2xfN7Tv7y3Ayp7sAypRAyYNoWsyxb3qWZLXNF4oVBoeijST8w2eCTdgVJtWaXynpSABJHxsWLRUciNWVj12xE6re",
  "key28": "5phzeUKJXvHSxJeutCw9USa4xMPQ9otaTot528Xk58CjCveygAcY8tLoEJXBtJNuFeqzTCucnx6HqFsjemS8HgsT",
  "key29": "3mADoRVrCvkEKzZBxtJTkSYdcSmAwDkqJRD19x7aJVT6r7ZU9hX6vfADqMs5XeRVDveUqFb1dCL5bNE9LwwyYwyw",
  "key30": "4fV8dC6SA9PBDvZe3LnsESwhpqixGGzpihkuN9Pj91TiPjfdeyG3maqDysqvMA6J2HKC9hywa8UoRMN4DsBmiNLA",
  "key31": "5JoDaqkNuxRRcN27t1c6hbKjQMwjwPAgz8qgoPp1CZsQfG1vjk3BuwSDapWXYVyomvkF3qv1ieFAJDhUgZ4icEV",
  "key32": "5Z65Fci8hJVuN6hJyXQJS9hjZZNLs3zFK8BZYPNiSwDuiqKLMfQAaKrsjqAEzfmD5NCy548gL5tKbwy5ckYuWAHQ",
  "key33": "2NNTLVb6iyuAjb2MBx12rw1rDvechwsSoCZhUear3i7AYV5Wa5paQeR4qwip3pYWikm3dGVgXsErmZUwa4R4V7rA",
  "key34": "5vMvi5rX9rPVFVRAtrBUhsgzzyNX3QnRZHQMZVZq7ZGZ9Bx3nuxaVn9efn5uJhJn8Z57mM1C9bTgEe6FAbtH6BCk",
  "key35": "ToSk1EVkV77zGTcWMiwJ1XUKdWBBWb3aw9uWfQzff9rjqKsUPvKp2HsxGSWX5M4iw8uBNRjxgCzwEKhHRAboMzw",
  "key36": "24tKUFiyQqC5cEK41PdEtkb712fGhdKbbpuFNWwbTkg5K87u9ufhZV9c3NU2bwtEq4Y1Etb53Z3XPzowY77UbAAx",
  "key37": "5qQwQgwHtMqoRtDPMCtDrEmkoEmsGy3vCbCWqZBA3JFht4swqMbVop4m4jcEDXPzWXYmxmrPqCmrLSRWZRkqaQMr",
  "key38": "2bauVnLYZkGuj699HQ3Wz8RxHubWYCGJeNKoWiu2H3V9tmMpVrs1uQkVjccr9qiM2REHQnduVwiDRnAEhG7Kwv5S",
  "key39": "4wL4rFfDLeKeT5cJKbUJf3R8GmST385hEK2tRoiVD9khmCpuaeMCNduTk4QTZ5r3heRmwCT7L4uaVv6XYuVWweDn",
  "key40": "2Xvuqqj9RVjWhVqUGQ2Zif21DJhBqxk2vUrN3Ng5vUC4sTzurHrJPeRPTYo72DFzjYMd9s17NRgxT1J6wG5FAZyg"
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
