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
    "3Uq73rCH1fTER8hbzyVmJJT4C53GepaTNcCuRgyTpJzvFSzwNbgxJN1XRX1rbdoCHrK9jCWpZPjg4tP6NDwvc18F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1tX5oSQqMcejPnAn2K9FpY3Tm25znNwgk6kWZXjnVDMXwgyEMuEMvT9Yjf24EsbRyWo6cd4wvqJrXik4RG5cK8X",
  "key1": "WW4hWGoSgKYbrhFfLXTD5TmXkZU6mm6rzA9hRvgUThH4E3TVuaoG7Ya8ThVcV5kxdSf2KYU9jUfkN3YRv6A8QcC",
  "key2": "47SnY6ehj6WbP2NX7qrbyhTBZiEyQTePxRySmxFefmRVXu65ww6hxKxAgABLAPH69SV8foGBCb1rD4aYgBa6S8jy",
  "key3": "4JnxmaQR1NGk4P2pYWdrFTXA6FuwSbBKodQ2BXPGdvQw9guKFwdx9Wh2M5i8RPcBKY99Wxwp84xDGabCv1atNcjV",
  "key4": "5uuoTDU85cfpr8xvMVQCqq29SrEhoVhMRQqvefLUJWC83eaBPRVnqMcEXnGkYxfBDebzv7BicAFjM12EwzH5BZDz",
  "key5": "4CsVCrFAtoBsNapTsm4PmwpHc2sLe3qZjy8Ntfi9gKsbmuH4gnxpEMrDowb9vV9kmNi6N6TDwyu44XwdCfrhxJzz",
  "key6": "5DK5jufQzguS8rKtJfYTq4hwNsxcrGdnKNKC9CkjnHucWY9T4yLoV3S4fhhsh8u5CTDDmpJNNLFxMBgG9wxsNiSo",
  "key7": "4DNR8aowG6muzMDawT3XRasUp16YbT9YiCnUBAqBaFByaDF1pgfxCMTUoUnKeXLhsq5WAJEDwKfyZJVqReNfgNum",
  "key8": "z7kfGAQDqp9Y1kihnCAY6Ar2U2UYg6jitQjTsQzscUK27bhboWoHeRqvSJ8ytYxvWUkGApqbivfNqvLqsJE4ccr",
  "key9": "2iSmtdA6B7q8tZKjnqDT9MtsTJzYrrteLW4GqjHg3pdjNpK4Tfoe5TkhgdT2rxycnsCZBNDxunbQheDAa4QBuD7v",
  "key10": "5dupBzLZD677yy2cCtkxELZgrmrR2XtB8NWzLjShsG2BRHjwmqr3yfpxjTmjpPA91fobKoLKDKsqN18DUjtQZgAe",
  "key11": "5DmUKwhRDMG1jxk3fqFXxQJ9449CGBcr3yxKEYoq5fFnoVnyQCFL8bw4Xw86TqJEzXyq5DnrXFnDofdGQhcjRXcG",
  "key12": "5z2TuNF9ELmTHd4qn8dWHVCXiKLanJ3vjeoLenbjdeSEGWwU8TWncKBpTaS4j9aeeQcdHTVyJySCX9jzKbCcSaZM",
  "key13": "5KsCSJqRgDnm96tXKzPQgJfQAyZ5YQjuGj4y5iCNMjUG7RhsBCPNzVdQmQSv17dLCWWXHpuW2Rib9itBWgLugoP8",
  "key14": "3xnR5zHa3UpNDTE7FjecQGqCWQ8nCCAhxqXZUDKW1XuDBJ334fXqPMVt9ht3Jbmmy8uWpa1kig7DJ9Prav3ZNfgY",
  "key15": "4cXbueJWJwVbruRrpDCosrVo9AzRAjCVPLYNe8SWcCXD4ofGAHGEjkHLsMQoDt8Kb2FSxwpnxJpmuSu83cgpximN",
  "key16": "4cu5AQokE9bqjacAR7gim4VkiVxChkQY5rv4ps95us3zftgGnox7AWifgCCVXnCNRw6mDLc5Y5u6VcdnY1YbyRms",
  "key17": "bQpRwJKDZZmMVdHkN5WH98p3BLvPQCMWydiKbXqXA2oMrYPh3pmA4QpJx9Wt2U2LBCXg2Juo7JHAdJFnUgoTdG8",
  "key18": "239SyRSz9PZPLfaRyU47SV15Kkou8FgzRKpANuBcZ5KBbVgUQmcnqHVJtERYbuxzcR6K3SfLi2aRFQXEg89UD8ve",
  "key19": "4h4zvmtYrHVQMiMshmcF1j2wQj5J8NbyfpUMuq8J9aQAf8jLD7gqRKwy16vWXw3o1ZDVBquQPwhDWcgyT3G8i7JX",
  "key20": "2X5aaBFdMC9LERt2XrEkBRvFG2vgesBngfY3iC9YndnoZTuVr4XsBLH7gQLKjgeVsf5LaiGQxRoAEMMHzozYZnb4",
  "key21": "541srgBeqEkY8jZ5vcYTECcgE2qAq58VyqWsh1m3F22sJ6zUFkCH229C4CKGfeRva7NbQoiaXn56HBdpYjzbwNMY",
  "key22": "7zSXzYkGDMVEemR5i4FaJYzVSKwVHd2v24QTpFMzCdhAcPW3mmVxXZPRE7mLAR33B1xTtt8e8nDhRieGHBcEVjm",
  "key23": "2ZZdBeDXc8nbvAXSUBgNM4KsPwRB9n1icq5d8LsPMzYSt1jck3DjpTBbvy4hYMYK1wzGFq1tqRRwaVM4jPHNPX5e",
  "key24": "4VqAjhUmzXxfXkYScv6yzLVgeTiZw7Lk8w2irTd2vcWn1vFjuGjHtHHHCiAHWNEYKWpStbi5vXfswYeNyWNujYzq",
  "key25": "avYPcGxhC4ZpsqtxupiHsvwdWDHgxfykY4rgg9mH2uhbgQteVHbgB1i2CDGvrQgHCz5kX5XpYK9c8SqijbM59E7",
  "key26": "274KzcgNZNWkohwYVUnYsFsUQoN3VFk7Dh1RJ9kp619yZoHHf6HNVboyH34SaeAKq7g1dVJpDZqu6oqYNWXfbBkx",
  "key27": "3f5gGdpaUzKpnaj6NLBW29v5EhETLSku9FokFuTiT2qkqs38XNcnPx3KF5MWLg1NzHibF2VTBcbmJHdfvJFsLXr1",
  "key28": "FXVbaqMBeuGtz6Xp54a7hD26GtFShx9tS26hPWzvbcvbc79u7rYuaJYuLwxBuDi3kmyE7XiEx35w4Fe9SX3eLru",
  "key29": "4yXSYF64t5TmJTWDFQHNbC9taXBpnHYBxbCJNQ5RBzXrz5Lw5J4KHn59nrHCD5aBnWJzbXpdYpLyKsXpRGkiCEQa",
  "key30": "48bbxNTmx9sHBxyTugyTo5viWHrNw1m6TKLXhyqUM4rCJ7GUtqGBSYKSx7cZZHvGKpbqVqZMku5ppu9roHxcuTeH",
  "key31": "3BzxmjryGsMJ9ZR326oYxuyuKbMEUFNLJsQ55NHrJ743ZucUpty1T3GJxt3vNNGArWDL7vXheT1q6ANTdUqQpLaV",
  "key32": "2T4ZmJomks3xXR4EZ3HAFLtZL2KKbHLP3AS5pfRxNvvNNqSFRhQ8mgiqHLNdDp5Vx4nzZpz1aAhZSLp7hWSwMbE2",
  "key33": "378FLWRWCj9xy6X5VFEQKYmXKSzzfbjNqz9q6KEr6ZuA7WnVQUds3V6emwt25fSm5oG31c8nfVNmRHzvBk8UMrg1",
  "key34": "3Zp24rHvaL9wops3Baj1u4x9NrwF39A4QZ6g7ZmQ36EhXiJ3WuNXu6Vi6LB4fFqBTnXLVPguutHzRwV8GPvXDFgD",
  "key35": "4jh66nYBLp8f3QyQhpN59TVXExHULFSdw7ySQigvv5cjaZT7Z1YCRqwAsiEwq7KHZti7rwp71M8jXJC2vfx7m8MW",
  "key36": "2HgCAyQ8YfeJvApCvdoQ8kDBUdBN8oSzit7nTonGkUz8z6iwyaqB4yC8LpETGpgnPQ2ypxzao5oP55Vxu9ABVjUo",
  "key37": "3MRdRTZwcYeTLPuQ6AsXv85gGgHHcNEHL7wKdkE3aGqamGsUBJ789PgM52g6xcLXj1jeBrfQwib3nsn6KhZJEiNy",
  "key38": "22H5qynNaGveEqgR2KHe7WMwttvDzw91E5cFigCWGusDB9Ap2mPzC4mHhgyKvWAZiiK612guD8sp8UzSTG1ZHRd6",
  "key39": "TXsxyrqkt6QJhg1kNNVP3eDvhvWoeNqDpzBK2DZoLybRoRFaxAmEEUfiq77kFtHZZGd8ZrDvUdTKjg4sK8h1BHg",
  "key40": "2ZvffgnW62MgQFFb7yoXEvr8SGAHv7PH9LxtttQ6yb8ADMH7osBVK47YNph9ntfJigDBwH8HbcmsZ5DgkD2MC6QG",
  "key41": "2vutQem6VgDuetxWbGSMUPjtNbNcRehA15jwzawkdaxt2P9tDdHNf4Yc7tW934Fb3o4TFWgnWxVUfdEeyUvCEkVp",
  "key42": "3YBDQ3usEF5GhNDLezTBmBkQqomNtcfQvNLJVn7dXF9bJpkS31wFRh1HG2egpDnU9kQBbZ4Y9prBnDmcwMH8La3U",
  "key43": "35t1xVCMqyWXe73K6xuVz7xNSRsXZQ85ya8VATScyzkYVxaqF4277MadFGsehN6uPxUMjP6P9sN94LeVRNigLxF2",
  "key44": "3dmTZN3sSqmHvwBK1yGx8GUVJ1zzWpkw3B4Fdue5nxcSFMrmJPp4naEtNmNEmvqfhPtdNp3DA7xX9zi8YBu51xzo",
  "key45": "5quHkQhtBEsetMTmQpENrVo5mXkyTqztMncP1GDcrcEqKAGcwWVGEFm9Hh9vAk8S7usmQJCHfEbSYQiavk3t6WFc"
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
