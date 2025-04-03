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
    "QzKAu4CjMdnaGtsiGHmpaDozK3481NFZFUJWg6AGHGiGUsQfWB7zzDTwxL1aHwFnSJkmAeiK2PTFVW2zmriRkVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kCsMA4HMSPhatXyXQDRdvWiHS4Kd3GxgTpXSs9nwVdTEhbcoK9qYRkjB5EfsNvFA9nuy5KH99LZeRNe6Y4ubrwo",
  "key1": "2Vu1gvdy7x87pKyA4HQiB5Qiw7Z1nzi8wTiQtF6LmsT97SZYn2qAica1dTgivAUJKZELv4jegpbeApVTgzszm6UF",
  "key2": "65i4seEuJ5ywUWeMhYepnfSkscyq8fTZpS1fqRk9dVLpm9s6R7PVBhKHw87PupxY21K1odUhFSqGpx5rjKqueznm",
  "key3": "3GZfp4pynBU17VZLavMAkCCN5NhR22FxbWJ5xc8NJnUao8A2W78m4qjwi5UQ3QmCk4Dg8dEgFnMbZMss1gEsJYn2",
  "key4": "7hg2kQ1cdRYpq7iuLH4Rnvk7gg2w3q8bf85DFvPjRkJf2tMRpYq5aonzT1yiU94t3vxuL6nPpQf15ER5Rb1VBq9",
  "key5": "3JwQ69BtiKunCscPRLxWgRr5jP2Hw5xHaAqXhKRnsDbqQSHrY4hz8onmyEE6rs7oaD28JSXiUwTsxPbWfA7581jp",
  "key6": "66DTbntMZoF9sHRgSimBeaTsJzxiHn8tr5VMx6MrM9jwLDenhtxbcHQVzsc9D3qoNGz5jXX81wHnsATRKQGs119D",
  "key7": "24fsRFvXeq1SzKLyvr9uz343cV6gFn4zYNreiS4WiSoPa2xYH6Yi8ZdSznFH1bdRheQcbGNTAjuYVfZfmHcFvpAd",
  "key8": "53wd1s23fhFPK6UbpgZDNLsAAbFaJUiFNZZ8h1ZrQvLZ9ErHTi42BSeoQfb6CWki6sUijjK5BWPUVLhAaZsopkvf",
  "key9": "22FsVMJpnCqrnCu4TMc3TJsJDKD62R8T1jwPX8hLZyuL1fCgL8rzYpjQ8fJcmtKrhiaoMxoHh64an43abWBAJEvx",
  "key10": "2fi6nUSRK8k14o1kyL1t4gowWujkzbSNWxvkJaKAU89VLetBDeQ4Wo4RjReh9QdqcFDjZ3SrmY1TxZV5yj5dbkoE",
  "key11": "4JxLkL1yt2R9iRnwEyVpQXySL5HVuUsBYpnyTKJsQF4DVFbhK8wUiM24nENNt4ZbM8fBUgTmNaBA3AkzfCMG6aMr",
  "key12": "2zUTw2wBu8bpuG1gDhrjqLQDDpKN9xgpbU71ykuJ8MrpSAR1qDDTzFhFiCovMN75UARRYyj1n8HfpLDmvRraZQWb",
  "key13": "5QaJPLbAiKrFGAQTpKieRy51TsgKgpapynWts5kpN2Qzo5ANG1MqYRz4H6frATs3zfpWFvFu7Fb8Bt2gd8KDrfKg",
  "key14": "2wfKdfVMm7WQjYhUzT32odBX8dwKy5XFUzqhoHGx4mnZqs7pqdFbdq5TddnceqU8JkMEUqFmBPLcYiec7mxNkfTL",
  "key15": "2Z8fTWUV4iv7XuypDkkH8k72kiBbTcXXSj4QGuSw6U7HdmyV8aH6Gnt1ZYaCBXR5GLFWzLFMizFSGmZw8DJwspRF",
  "key16": "42PC63zLULYZSVdqr3rB6tPHZFVKZ7NRBzHwqKWNceSbcnwvzYcng8DXLrjGnF9e2ztTpGvsrR9ki7JSdUbK9FTa",
  "key17": "2VGtpKDoGfpUcjVth2S8LDgs3Knna5pRRRLedZvK6XchiPGBjo9GdVNvKGVX5HicmRBVSmteboid5Vb4ztsNhsUa",
  "key18": "4GvLNJvGzyy8tAbLXTgrnZ5sUVvEoYHFnSEEJrZLtMAJ8BSM9MrdTNQUtiNikiF7xGCchJbHcC2TYAuMHJ5wHLzd",
  "key19": "ZimQUXU6cTS4SfuwF8FNEhBRxC1NRXjbXo58Htc3vZZEGPukJq9FhKHSwJLHezLxwuccKdekMcAtAtXKuPeVpba",
  "key20": "5YbBCydArHC61BqxVka6dSLmj1DpfTkxjHGS4yqdsLSTqgtR28A2NcTFCL21i7oVdi6Gbuh91ChaPJo55oFuc1dP",
  "key21": "9L9ocyEcEGhKQAeQ1Z69Xqo54FW2PY9toSSAqbrFFHgbeKCVAEar7Ty4z63HrgNjoFbjMAvMgFAUbnpAy2ZJBBw",
  "key22": "3MUGybXkeaSPW1XF6P2gwEkoh8FhWnHGwGTXDjfpbHyT8wUjBUDFgGvonNk8pYpaXB8VYNCfKXRPYjBhAx1CWzNF",
  "key23": "3HmxXwhp9Tn4RzcuVPqHiKK5bro3aGzuLHaMn22QvdXBE5tZhpf2BarmCmBdaMuzxfYMh8iynbHxQkbhtUFwQpv4",
  "key24": "4YSW6t8zpiAzBqNQ3Lsrc52QWBbtAqCjkLnuuKJRpkisfc77csxCfwe9dys1G28R7GSet7Nsg89eVXLzCzifcjHH",
  "key25": "2qeq4U6fS9DLHmn51ty3QMKQDEsgWZY6vHNPB18MjHHgpwJsSQQUdUz3pcGuMrCxNrArUwSDJYYwYgcWcHemTmWQ",
  "key26": "4NuybCdR7eEQinMeMMCHiLioPfrhAX3WgaDqk2kJqTAYiPBve55fop2mNUjoQaEnc96xPAdMuAwhbYHc8RmvE3Bu",
  "key27": "5AXbCbSf8UuTcrEP8DqkiFp7Jec5wiC4t1qng4quyGgAnPoVzHQ7uUXakh7iGXMqZyXJJV4zPVCD55i8Wwr78Yoe",
  "key28": "5iXaB9qgyN9RhRoQixj7M1HanEnBX1y5k3k7heKKd9aG9WyuXi9cZxZdJXtaH1yh3SKAyF3B1KgmPrd7JtTxw19S",
  "key29": "3wBdASWMpbuNXaAjZgy6YUJVeQo4fNeagU9WC3ZW2RMxbLdQQ2S6jyk9Mn5EK25XjTkLSbNmZnK9kKESC9LpkdDE",
  "key30": "5gv21xi38Tsf4X36mdLgPPUjqnWocjHbNVMCCnmrSpDUrHF7GPYFBCMZQLgvnrRCnEwMiqN21pDgxW4uf1Ki83RF",
  "key31": "29RyH8sEaQegWr7uM37D4iThfvY9p3az1GtCpFQLjRVBp8DrZ8eoixp6aFBAYHXUsVGPK2GmvnC2FPQP4BGMsGPL",
  "key32": "iNafYZTM5XKA5Mrjh1fdxptEFMmcbnuUqV2z2pdjau3s1jcUPHhRD4Ta7aEocmAS1np8oe9CKbnXAUf4xSHszCv",
  "key33": "3YYUYEPxf7TtvH9RPbnCmkDVBAYmK3y1QybmuLZmvDGiE177iPz4xRCZYW2rHAeStYNM1TF5poVRt7JmnyQFr7r5",
  "key34": "221CFg9tsVXygbGS5fH99aSVZL1UFDCjEoKYiABw7NDwA3NNKRdkKpZzSb6XhBqXt9AA6pDUPVkhFtCrqdQ9Q4Q5",
  "key35": "c6vLiXRjqoWzUcaZepdroVY7an8x1Dg2FxQuf6gFekEkKBbK24SjHTayzhbVwxKXKaBcgD39NZBmNz7scQaSrkp",
  "key36": "3hSf6tfU38KXPuGLSPPBsneckT2U9d5Kdf2aQg8EvQ1x7z4Chb8zJb6wmdsoa346fbHjJu1yEC9tutoGTKaqgiFL",
  "key37": "XfqT81e9o1vQpRGqh8A92oUruykXnDecKrJe4KPD2Br8BakMEkbVyM4CKtaCNp1SVnUBN1NSBWAJhmKtMCHZZAU",
  "key38": "3pV14B4232gZZcaFUzg6zHuvm4nDR14ZvRFU3bnNWFYJCELnwQpjPMMX8LSmZKryfje3mTEs2QuBY3NqjhVQjv9U",
  "key39": "3M2kaJpBejXRR1F42m2DWhtufmKrkbTP17uGiX1ZzkBoMpK8dHVQhtDoVE4u7YQt1s6tHSnQttNgr8ZKZzNKQfVY",
  "key40": "4yaEDWeDwRucG4GH5Qzjiqfhkxh5UkZSHZfXE8WSHwrHkGugUws4Pk3yE1xAfm55cHRY9zrXu6iEt2bajaWcJFx4",
  "key41": "2w2NPUbkJBTxHDsfPULHwGi5rvZr8HCqoo5CY8uNZQHhpT8dUyrLPSXFoi8BD4AbZTRKHVPo5AjrGANSxASHKwzG",
  "key42": "3RGZytWTkqGMcnAMNnLAtnQWn3wQKg2c3D61gxux2nDAmQ7xmp3aZ7KWMQpxkru1EkJjfZvfD6DjF9GZM566wvkD",
  "key43": "5MWHoN3Qdnvvokii1pRr6JJYxJHrxoBetS61ucdwwJe2cN89nuhr39anuLv8j4fSCbZETYr5TW48nz2mXFu2mBDN",
  "key44": "46W3i5QPpyJeY48CyBckmtt97K1qqLp4vfwSbHFjsW5EyqHCZAS7PActyjuN7NTTJENVgBBKMkmiseiDbrrYrDqC",
  "key45": "5uptwKk2HaP83dmcUx4NjDjavLEqzFWALgWAJFPkeCswachG8cCQcXKPyiKHVy1MrcWSaTdtek9MVfhuaeEMUiLM",
  "key46": "3hjLgSxrkgH4ZPAP6Z9td3Mx1KxL8ZrrwqGnyJ6HDFEJkWzcXzb8VJozxdQESHNJ1TpndztJE3buFgHWdPqLUuBW",
  "key47": "2WLdM8ecBC7BxPzmMwjipbgmYcssKxtyF5ARxHFVDSRf7e6HP1FSCKoBJ16ZQFZEKok7mWeA1rmmK6gjWWHysAg5",
  "key48": "3GgA5u8qE23s7FoVw9XnTdP4C5B2P9SvAx87HUpcVKTF1rYqJQkaB4PcTX6RYDXYFrYM3rG5rNE8cUEU6FZu2QDC",
  "key49": "22yddGrcQ4vMdKBUeXwN9k3pw6BcdV3iS1LVqcPuJBjS2PSZhd6znYpv1U5FcmC4ZMEMCoTqY12ZUNqiQGmMPcAE"
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
