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
    "2xiLu6V79yBvA7agTPwtt11Ri4m4rnW7feQWmPGqj7snvMTXyG9Mb5RrFb4fqaS6JeTaZJYJ2m1t2WXaYo53XLKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwYB6HFMUT7dwUNmgF876r7g4K2MBQFhjCJTnmkq9q15DwMuCpR2yQJPvdEePrJsmYkLXw6HPXMM4bos6r2f4n9",
  "key1": "NWmnvW4PyNV1Zg4NrySNHdwGAtLX85x9M76WenBdLyHRdbhTvETJNBHCKff4sNjSWfwfjMKBW3bYgedgLrkaoCZ",
  "key2": "51s1XeWPiC49ytoj56czrnD7XhW6zQzjfwuaKTWwzKmkYKQn5GZG7EV5DLZqmdUyW5RNDQfEhCyywVtRrvwE2XZ",
  "key3": "xTC5pX7bkBZ1nS3GgBKQEuQHkZVpVUUY8koxYeUZUHsTXqBxY6YLhevCLAYQaAwvmkU7uCjYEN4f8KBJf11Dry7",
  "key4": "5c4x3fEHvZ8hcwDudaH6YHgSfvaDpqu3NrfbMHyEkotBkVftpRs3QPJpUDi4LJk4rncKuJQCDXpriAtdgRivEVqu",
  "key5": "a7B6ppXPQ2XnRhzY5qvaCZDgGMPwrsJKTDC1oZ9uS1SKqbnHbFpX8jgHUuCpBNqmxwneYngjrar25XZfZicNYK5",
  "key6": "4XPJS9zWe1vK1WbbvgXscQWQzMnhJxLZihb9zByZvioHoT1niDchxAA4USDxEY7Cq1hH2Mv3o4rT47XY7MGrpq8w",
  "key7": "55VD1qDf8W9suwDee2M2zCHKfcypdtwSAupnAfLgq6kXi1UbNsL1PGPUFWEBmNSAxGTmkWXdQ7Yxm1YuozM9rUiK",
  "key8": "59QKP69pNAfaJdmrcMaGMPCT974zRv2tddmxzkQ8fn2HFNk4Bwpd3bMpyBXGPt6bgWmQ18q1AXHHMj2KqX2DRLy2",
  "key9": "5cHJs6juN8ALihkLtrpNjKjM96rbQVS1q74cJW1pfS7utkaZfdxYhYZoCLkk6HBp31pJnsxpNSDy34QouZYaeWNn",
  "key10": "241hJQjQyfwKSEsirw7gv8uPQybMke2gPFueXEGq7s2tQjZ6iyqbzTtynWXkZyRsRPni4Me4zTYKTbGA4GA1BeBC",
  "key11": "ZazH7e3k84dZSw5j53o4b8pxnNvkNwJscLfdqfZ2T9qYYFPDmM8JqSFbpEA6G31ENP5bLMFzNnWf9uhgMFY2vPZ",
  "key12": "1rVZEZ2FTmKwfVTqPQQikQ9xsze3ayFZtYLJFmotcLcSycsZZzUQhs3EMkRu1kcYSNDkF6mnpMqesZdPHj7MGpJ",
  "key13": "2o3EQUgqAWXFcK3vgK2MLpMq43zYFcgTQeRyJhMQYgmu4wHD8zAyYGzr3oVD5AroMK2KCgfvkQSF7MSnMpYwX7V1",
  "key14": "4vUSrBiNEmACvAHt97kMk9qcsWDVRPj65cEeHNwQnMz1QFH6PnoGQsdvHVDxGDmg9E8VULQZ7BfiQdYZCEysSeXX",
  "key15": "4us3kxWHSkpaL2HFiatUpBEXUCsqCbxmGzrpVXGQ8riZbWopACnh6dSkLEwT3sam5ChLgDx99tFUs6wQZRRCMB53",
  "key16": "3VwcCvw6j7HEYFnGZYNP1H4FpNzjki7YiJbSKVjBapcD4wMcPuWa7awodCWiVwxGapMwTEbhKWiQ5Yas2UgbePZw",
  "key17": "wnkws5t3vAyZkMLmSWiKWWCApWsezuN2LFf6LMEbEyzvQWBbjBvMnModrFPrJZMPiBN8sbnW6DHj6aX4o5DntUb",
  "key18": "5k13pLffXEaxgXHZjB1Dapa3ejNtC3wc7wrwbiWjpzVg4TV3F7JqGUHSdkoipRFpsF1NaN4Ltjxj8H9YTqP6ZCB3",
  "key19": "3f3bAiA2iT8suux6zLKqKuXQch2RyowHShrjiaNRa9eLMo69kLnNiJz6WV21wyb4bJtgxR9rMxfYKJWo2JtMYrqm",
  "key20": "5oEXW8pCCUwk1tCWbxokg1kmGTvdWUoYArAUCfiXQHZY5xT3VBdmaPx6DEzzi3E6E5k1bRiZGQoJBuKsi3VJrxj6",
  "key21": "3qvUgmDkdCLj2VszcuPx1hh5Z3kciHDqdAV646BH4WL8TdnapFckCh63DxHcYDva9LkBwxH5rnvtnHSUNfb8FRsz",
  "key22": "cnbGFtVmoG13sBqMhacecWcQW4uSiSSnmcZGpjMk9PpD53CiQZpdiiqV2zTsVkHRB8kL2xTP7kVdXRiMSJa92t6",
  "key23": "GQsepJgt63ZMJoyqF1yjAVnVNzeHZmEFudkj1rkNoQTcFQchGMgUDWUJCp3pyK2G9rRA4ZZkjnzRvBj5cu8LZj7",
  "key24": "46jqafNhv9NDV961itRiQNUUt94rNPb4PfFGTP6qcxap6dJQ8SA3qqBymoKgSwVdg514qybtGE7DcQuiPBZxTVCY",
  "key25": "1234nTsoFnDpsLxNiQo2Cp3CXCKmNJ8D1r9BtGe6g7qQ8NsXQv1c4NdF2VuiRt8nxZJ3j1G8uAVFxGN9h7gMSEDw",
  "key26": "ohmhrprR8MxKhQdKRSNDX9HMdMHZiiYfKaJnB5Mw2ebNpckeukoD81phyiiDv1kg9zbNugcz2wgMeQZMEGRFkZG",
  "key27": "4cEmpjGyH8BQi2xJys8DGNiLAhsgrWXpXjMPkA3Kk75GJtG8MkHyqidcACXyQUN4hSar6HL16wPM2K1znY8UXsgn",
  "key28": "4g4xF2iv2XnbpKJ9FUMW2G9g95nzotRB7YPuN7xjNwFuEkgkEHiZL5dybinVDvNikeUDPzWCibK4C68BYZknrwGy",
  "key29": "22jx1DDoATTbJEFTnsDc2L91ECgTKHkrqxXgVpC5EHvoNMaC2xzFdFbQhEYBaHtmt6NApSZgBG8b8isdarNEDtfQ",
  "key30": "AmuT8VpNAPzmN1cV8Ni1jmiN1fzAgPseASxs3caQyHCu55u3wfHF8kVkguecF8Ad63aCxXHKqe68eTiVHcMn5Md",
  "key31": "3u5b79Frc3YwJzV1G1pATu9J4f6EAxAvZouH45u9pTjWH5gV6LFK4Mai9Hjq1YHvoDCsTAVqTXBjSperRWrWG9GP",
  "key32": "4NCABYSKeXbNSKXEVr5B9grij8Xe3F5zz8QJVPng1XhBj4hyjKA9L15VT2zTDphq5c3CdtGXyAGtKiT5zhW3yKeJ",
  "key33": "mEAMUjXYaZ2AiF5FtEXaigo8SAXprsR9JGYg4DsbiCpeyeoz7b9FrGfY19o612XhdQGpMNvGvWCfmMRUE3LfwyB",
  "key34": "2DjL5RDWVv1MBvPDmn1hqrwbpeYLnRzyjgutFeHtfaefdXXbXMNUDswfDgxmE5fjaNPmLtDzNhjJPPfYjDmSh1iY",
  "key35": "R9btyX65FZpcgsDJtyS8etJieDuTshXtKh4HKMaJCSBMK3i8C5u1aF6aUhzvxhywdFikmwa2dAa1LoYrtL8VKnZ",
  "key36": "LcUSDJ1ycu7z4fzBvd4HKF5S7qpMuqUwJX8ftxQEj5Vy3idaLDKQ5MKFJczqkNBSXakgpKnxUkZi9awyJVNCheS",
  "key37": "FzW25jotsSPxKUVpruc1GixNxyyPqDWpyx6YcySp5zT6yavwZUPHzPfek6VkSWkoauvA5TN3tYn11vbczPHTytG",
  "key38": "32w8RRax1aVzMPTGH5YkkDTm6XpqQB2whtMR7Rbpun8c56pTR3uGvDET6JXenHfG4PbUKCR9s943Ecv21r2L6N9o",
  "key39": "2z11xrmJthJVAdteuL7ovrnBECXLVKbWCgxvNGix7FBr9rkScf3Pe9nbszp8VwFHn18GxY6q25ewizboXnWVAXry",
  "key40": "2xo2TEmCeczVzNct5MCBy4Dh5a5MXaGfj4Q1eJsQo2JpEtmcJUdNxUybwg6uczZsFUW4hFwfL5sJZzfpcqNYPUDA",
  "key41": "24KK7SBoRgcbencfdSFQmD9B3iEyEKWXRwAFmgiSnJiGz4hkQRqxC6F6WWvPSBn4NKHjXNtNp39taDyvBccRurnR",
  "key42": "2KZdEwBjBjTRmbiWZhE1L9V1taFkZo7395JvyAKhjzUQuNpdVdyrrkg2EHGrjv7YRefpGUQDZMUhpqdfLjJu2Lf2",
  "key43": "2258hWVirYWWwtfgasS6cViDfWwvt4N7kFFTxUuCJSK4asvxQYWiXA7tAbBQM1T7R6BQXSWt6b3CuvTRvWgujJHa"
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
