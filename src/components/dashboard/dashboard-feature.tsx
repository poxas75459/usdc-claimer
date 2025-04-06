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
    "2VG7JLSeH8yPgWGSxf6yjqGv5dHVTK8SW7NKRVS9x66EbzbqSD1Eibuc5SYLt3u7SQ1dVJpuuMC2hGTY9f4WhwqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aUiCZXdWShhgiYHPym69QT7gSjGzdBK7PcA6duADyEx1Xuh6LnHg89LpPAJJ2MMQgNRLWEQdg9x4bhqSebN7Mef",
  "key1": "3ggQvzCDaQQ9whhYgbQ2mhgRDK6BjikaUjW8AwwTKZGRymyARCUpE6tAjUxFud43mNetSqg4iKoWSPkfbyXCTm44",
  "key2": "4UUXmJo3UZdGfnbBsC3gWDs7NNuJiK7138Ttk5sDV1UqbdSrtahvZxBX8F3ZnFik4jDAB7BfMR7yNTquyru7Awa",
  "key3": "ActksRwc2Sx1x11SBavp6wCukepd5SYQc38BVsUWqgq4emCiVAf1pdqoYQWKNHc4guBCTLxZQJa1fXeTVRRs8M9",
  "key4": "2BjP7QRosfeBtEeZF3fna9F5DWogVf1NU2nmKA1SKpJFuKLeMokcJ2kiompHWFZQm3BJQyGMySLb2A6HLooZmfQY",
  "key5": "5WeBryKnAYQmsjobMPECeEtvKXJNc6E79Zbsvt7Ns8jB3fefg9VYxQ5nFGANDn18qsEWDKaeGkts6356WZYMZDUi",
  "key6": "5hRJMczpRhCV1Pdjipq1yzF7T47yrJfrde7CiTpoeoo7fuHZsK2FTrRJsXEWrEJJD9dR7sSo1kAoGSumbahtbpUP",
  "key7": "4PAoqf16yWsv6ZwkHx9qDzcQ6vV2KsJPbHDN5qVi7fzUK8Lc7pghievxCdr5JRfkzEdRvFCuE2y65fZdZZtgVNHy",
  "key8": "4ReEw9NvjPvY8TWUF91PFDFQh8REgaVMmtkYeqAmFFZVGxjdnEYica6V5mD6TD2zdz8qnoXGciNq1UMAD7aqH1Lp",
  "key9": "2nyJPXV3GFbEyjXbNgDXjBufK8r7Dk6eNQQEdQXxzawL6zLkjrAYU16JJC9HhYs2evN9bwApgoeeVjoCG2yPcxkp",
  "key10": "5NbrD4MdcFVugBEZfq17wcyah3ufSij4spvUqQ2niyBp8m8LvyAAJsYRLAakE8LxqyE6MuUjQxPbjU38HGRoHZ7b",
  "key11": "58dRjgzMocUaM5TGRuHHbpNQ4WzzGZWy3jdXVkRePNiai1jqmrF6wmhQYfnPvJypEdkyEMfhvg52WPNoHZLek6tK",
  "key12": "23skzboWzEggYhgBUvVXG2Yx9zZEC8Gf5GJ4QRgweVQaThSn2rh5uUNxMFEYkwYd7z62Qjduyxq5v4W84pBrYDWV",
  "key13": "2dr3otnA8dAm1Ht1MBoNCU5w8tWxwntXkmWWG7mx9dFLFhNwnRvdX5PJGbyP7R2XG9F8Db1ivQ3JNYPtaiuvxdyf",
  "key14": "2cABRWbZFhQ5GhjWfgYKMxpURf9z196Wo36E7Lq2qyukhmgQqGieirS83riM3tHLm9NJHKJZBDhDtcena73bKkDf",
  "key15": "DRxXj7zTE5zkozJzkd4nBMPXKsF7fDTWCeRVMpzmZ1zBsQPFqgzX245rWRcYbXctKpQsZPJxB4VJHjLEYFn3HSK",
  "key16": "4ufdsUvsQAGseo81TMYMC6xpTznCPvzDnWaEZPQEYy1EGUddVuHExVjGFqtSgkZow48GGQooXFE4upFT3ga5Ede9",
  "key17": "5GUdYfxiDSVyzzCs57TaxBVE1pzzGut1knM1NtF7gj4XbvDHTezoLQK53p7L1zBz4PmLAeLnG53vuC9Pr3XVZ6NF",
  "key18": "24ah58dFBbvamduVB4whYhFTqHTN6vX6vQK2QHVBYKcKyX6myEiBDfQY2eiCaVycm9UYejiB9p7Y3gqqSoEakAPY",
  "key19": "2tnPnzCKD66aN8gQW9JbNRns3zFHZVqcoB3x41XVTwC888dMgmpJyMRtqf2bZUpr6b56cPUWBP2jPi3p2RsZ66ro",
  "key20": "2RinvQ5g8VgC3wesPFmUHHd4BSpZftzastT9QpG5fjMUbKzZgWdUStMWyrX6tQWMhDnHbdw4QNAgMH9iya2AuxZ3",
  "key21": "2B7EsaSZoEKfjbmp7kAZVwA7qayaAVUW1jv1CZPWDaE212nhvAuaDgnbsH8sEJeeycRWogKoJaccpyWPA15KL9Ly",
  "key22": "3G2HfGDDQAq7sndax4vCRrPi1efRh7zdaUCWb9iCDNdu6MKYehBGrZkVKa6BUbTktjtujq7xqhnx6YeUxxukkZTJ",
  "key23": "PF9fTbh1NtQaYr9f94aLP67NrMqfrSQqNQoHWesr1VnoR6TTNvqCd9Ry1faTqKs5DbS7EB5TbRUbA7JPSMzoNiw",
  "key24": "5p2me37zFs3Q8MVzmq2snhAWeRQqz7aZ6fMqczoHud1SJQsYT3SmAccUvWr3tyXcyABiLEJt5XegkNkUwjGQptxB",
  "key25": "5SdRRZ3Txsr7qfioRULkdMqi3f634ju71B7QyBueYz8zJ4Fhb6HxjiqpRAe9VnwF51mD26TeTxKBhzLFr2bg56tT",
  "key26": "5mAfvGbSNoqQdG5mp96WQf4tP4cBv4mCBnrYKXcYf2etvWKtC6XQpcfMTp6iBHfgfvDDszvVPwJ1GGnWyWuszUjC",
  "key27": "4G6tRGPQudi4vuGN9Yrw98yxLkQGbkZLnu3aZCzyHARVXGELVYYwGzcS6B6HyyKm8UiPWSGPDjyQUkSqL2253cDu",
  "key28": "5DBmrkSmmb5cfKfNxhKQdsNPd75rNoZhXgJ31E4PYBDKpM4LeBPpqWSHck7pdwViE8AxrNjvNAdPSEtDXRPxa7KT",
  "key29": "5nwoxzahKH6E6RihjePrnmoJMp6tyHpSKD8vmfdi5rhLRFGfxXgZ7RFpHtWFLbsmdD9bMyi26EaG23A2G1uBTxLE",
  "key30": "5BGFtTG91KGQ8NpS66UDe9rerYXPYGm4D1aHhuHy9zzY2ejSqYVsXHcvCjhP6573ppnxY6GnJz9TDK1MU8FwCEVK",
  "key31": "2xG5237576daJqEEJrdJD2jzThHKUh8ZtLHpVrqX5QhHTnM8uDgiXFE8zJirfPLNyUKoWoh6azFMai9UzHPZsm9t",
  "key32": "41kpmtuazUprqm4LxXUnQSz9B5DFnNGr5GvggDys8LfCJXKHGoyimfiu1YFdiUDvVRzyqreTBCbrH91ojgqCa7aT",
  "key33": "3oXyrmuFfrvWR8gdqzvhjBHQaebP3hPKyN9J3bCVQsceYmEXhRUkt8XSS1vbBuDwA2Wxijov93JrmvnATqLoW4H",
  "key34": "3u2AWvXUXv6bVmsQj5PxKkoJ95DVjqG74FMZqu7nQd4vwjVaVUQ588VjArJMWPu8sq3qVgvNwXiJMUs12jMTNUBp",
  "key35": "5ie5RQryuhgFttnmcjYx62vJRWfqvLUBHveoCsHNVSuwGZCvG8XdmWVqz4vPzn5v2QKJ43xDZoctu71yFoWBwHPC"
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
