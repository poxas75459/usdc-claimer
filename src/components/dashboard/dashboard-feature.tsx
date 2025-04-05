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
    "4o11h1A2nvWQn29uE91FfdmHmk6NhaRKjXsArk23TQEyPaRXJeymKHpZNN294AbNLqSxwrEynMMMQMkGMVnkcwDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Wnx8ck2pjSYFGK9jW8tjYgwRGppzzKeCa2TbW3fYuzAGRGsfmmL2meTfaYvXJgjZLtFYPmVm7z65ppsgco9Z6h",
  "key1": "BuGWBNTM5xppLHXjLpAWgTs4Yd93QbfQZ1TqUcKQ2RmjL2TkHsNLRjfYYFubP3f7NqDYs3EdMBhjXPyE7QGkfaJ",
  "key2": "5m946rEXgqxru8LUNZAhWjHH9a7rgSGVNwxPrNHukR3gRZgNbvdpTjQcDjrzyznkT5tN3Gz4hE53k6of3z7Abk71",
  "key3": "2Xb7MuBjdHVsGz4zKFuYjMJrXTErZYGGUMKPJnhRCc4seSLiBsRBzuEF7CvYBrL2LwtPD17QvVr5Mxg1eofXTKvS",
  "key4": "3umFD5xhbRRamsNLvRfkj15bUPF7DpLm6JGAcXMwpyBTR2yATbu6HrjiPzdRHh5h4iaGsaUTWQ4xzUbMkmLJkd1L",
  "key5": "2KASLZodb8aWiWZ23K3x2W7MxjXLSy287hHtWTfN3j5BXqs3zRH78EiiDgGBCFAR2EtHUcDhQ3sG1PSCVKZVejT1",
  "key6": "4p6PWmDTZBLSw3EpM7HtMDh3TpQax31Sw9xtmcBtirRkKneHqEZxd644awthpGoDNRwzMGo79JZjksKCqFtc4R8z",
  "key7": "3g8kGkj5dGo97w5BST2qqm8FfWV5wx8njoHwzG3nKf4WgWMcnqMdFNdd2k2xVhxPrjh3MoGL2oqCoENXNBEbQH62",
  "key8": "49XXVKmkr5yUZqoSYsTmb46TTRqSB7jhkckEVXafwtPuWaMwTuCENmBy9LxYERw9UWddPCTZxQxCxVC4oHvBuUmy",
  "key9": "Z3dRJ9by6B71qrcMnrtr5WPFRwaXmRDcH19eNLfhdjJWEFsHMrGGy2r9bEuoLKaLUS3dJAbinzSjLqkNGhDLZib",
  "key10": "2KRthnZNroqemut7zHHhwDWp1teoBgD226BRXpAPfBeYQCee7UpoBqkPmYNfagH85aHd9GTjYDyVCgCGY6aECDyR",
  "key11": "2PGY8kyz62zJbqGrxr3zfBYMgDvWztF8UBVWuDKeSrKaCrYn1kky9t3hk5GhmHrgtzGvkAF1WE2F8zgPKnWTTYAx",
  "key12": "4e6JvHcQjv7RAYN7xZKuhSpdeUcXLCDY63oVaMWS7bNUrdoJCmtUtZk4N1xRv2aS6KpQfj2EwgTzH3xJ8MVRZBD4",
  "key13": "5FBMGEqrrtNs1sNw3hdMjhyxGFsukV6BNwYpqCop9TuL1AtQDvBeWa8TZPKfFhLwKo62aHGAt2rsEVMggsWqtM8t",
  "key14": "4SFPzp8y3eTQkADkjYHUyUAtMSe3UUVB3Vu4DF6dvTx6K35AgVZriF8zLVmkS2HAoDukrtRBWeYbBQRXVpTWc9jT",
  "key15": "2hWmVwuAL5HKhSfRtcmFXM2swfDUstYV4YJpSxVdUyLss1RNGaEmcqnbYzsxnZyPtBGjA4VbG2fc4bzEzvwmCkPj",
  "key16": "3CPq7ER74xMPGax5dTTAQxBFZc8okJAVoNVGeSJdbBSH373XtnjtGZSHoPQ4x8U4Wkf9xhRj3QspdwxS6yttS9Ps",
  "key17": "5TSwHkZcUUUBR2xVsrP9w1Uc1k82edJje4Fc3Ebf2h682cg53GHfWLPgQZeTb8v4NWK851Y6TG3iyTUpMteziGH9",
  "key18": "35SUkRZPYjLFqsxqxEs6A6sgqcLAWbkxnEDLi6tWAmrttbtbATArhoUse5V9dg19ZFs995s6ySn163N6nuQFAwNt",
  "key19": "4UaPvNScxHboHxPiRv1MVj5QAXJRC1E144aQuwycPZXQ4ZZ3wv3jgGdu4a46iJKgip2uRP8umDn89PfRapb8sHQJ",
  "key20": "3kNfZd6BfPJK5Z5ZYiwekDTxJBoEu4ZTSgfvG1KWsWE1WmwuZW3TW1szrfTLfoRwkL1HoxFA8PrZCi8zDhiEarRS",
  "key21": "3p5VWsg41fVjuZbxUU61EpFRXoggxeRDUkyPgYxkYGBgfh2mNuedZdpTf9ByiXDGwTh3e7CfQ8Vi6FCF1zeVgED9",
  "key22": "25FJidaLn4Hi4piW3xDP2bvNfrasviSGgVNPRfJVys9wunj5Bj6B7pwAmuXcLGEhbpwywiXRCCqRCVfPToWnKCnX",
  "key23": "5MPBU3oky9upPJ4YxBFetsMcr7EZZnYMQ6t2zkikjYMER7BLQeob1LVFeDSEvEgUu593AfwBYGk2DVPnjyN38DY9",
  "key24": "4wis6gt7YVZPBjJp82pGUX7TtDNz3SZjRtKiK9ds7wgHxNZtm9piSbZ9Vws32c9TkV3nfkFTZRgUj9JfwgAMG1n9",
  "key25": "2fDosnZtcfroNB48S2Ez9n5FLhZeuih4iUUoKxASpYnEZks2nnLWUvwLbxCJHXffWMtrF7RqF31Pg9gwRhAVAnDH",
  "key26": "5ErWBXYbhkRkfve8CJnMbA8T2Kfpc15TR8GDudViJVttWc9TQEmTxKa6v8XcCJFGJG2e5sP2tuauyAuKQsBHbd3C",
  "key27": "va6yQ6MgsBvoUQhaxeeQUiZ4qXe7AiUfyejDFGyhhFtCQLghQ6s3dCUYUDb5U5Gt6vBtqMLJh27njK6YKv2v3EK",
  "key28": "4AW7hF7hNU9ZEKb1sNrTcPYbP2njr4ZHRqV4StRH5mbkncxe2NrtXY2xhZKEVHPtcuNAPVtSoDsqZr2pf1GQRZyN",
  "key29": "4WuZdpwqk6onUnXcbt4AkkHtvxjW2J6H7Qg8i1i5coW6YCef6r5qxArWUXefDjJMaaqR3mExbx9NVZQZNz7jKtVR",
  "key30": "2jpdTMYFMgD9i8pagnPqWR6vxUDdqGnFbpnFWHMgoLiGGXGttWQSfzyA7swn9qM8ntJ37Tg8CfFuGyEVqNe4s1su",
  "key31": "5UBKfopuWzPXgxeALGfVZ1jA2SMkpTaWg13RQ5NasSMwZA71xAhYC9MVEyQasqyCxZgPYbisPs2yYAUZrV36q8KG",
  "key32": "3ELaLWjMfUBpDNibLuUXSoVF74aTXPMfR6d7qieSkKmmZJgqyNwVpiNScF6uRH8h61ZQrtG1F1k4fsFtdvCPCs2Q",
  "key33": "5JR1L21mNDRWKNhMXR2aZu3sL7ChQ2AcND3hf6NAP3sHYW128WMFoafASWHij75gkzxj6JsmyPAA823inpE2idj4",
  "key34": "2wjkjWAw2132Qzc1yCbC8fsoYfPjEnYuigPwiphmTScD71xm3r7uAspnBzHDDjSct9q17REqqfsS4BSNRTRd8Lrn",
  "key35": "2mfAYe6AJkSi893VP3WasyfF3G1DtS5sPWfq52UJbXNgQgU46FDEoimiiv31JgCQQo5YiAXZVWgB5YHRV6vuBdw9",
  "key36": "4ShoWwxUvaY1U1zsUk1H2fZ24ioBbun5tzTMhey6kUYteqviMHpPzWUCKaAnqMcms67XUsiMXevgpczhj5vYtBuD",
  "key37": "5tR6eRgMnAbrtuFSAdMcfo6en8o2z92K2hVY9eJeXq4rjYe5n5BzncX5AkBTZouoViFJg6W6VZKbs57i2D1Ka5Dz",
  "key38": "joeJNDDrXsFjLeGgs9LnYTHEToSMQnUhBMWqLi66CeUwx81vDjJPkmcB6197qNFehTT8t9uM8xav4haGcuaEhv2",
  "key39": "2QzaA1PP75AHSe4p8nKpgHD4noAAHpYcC3jD9e44h9UhUV7fp5cXbN5AK5dNL1RG8PkpfAaaYwgnJu5na1zDmr7D",
  "key40": "5GbHjDQmkUjFmDnBJrMnAKGEU5RWnZ5N33unXs9ZY8W1pANggsS4Grf7k8RgpKypvpimASceKV752JZk9tWpLP4s",
  "key41": "5JfMcj3CRzQQUkPQokNC93s5ZHB3TDPCAdQeXrJiqNNwXisVaR6ZDrKqWgGZ1hGoD5RM1tYQQnWk1ezd4HozG1KX",
  "key42": "uaxLRAhZzSttMG8uWAQtLztykvqsNmb7MVjKw1K5ed6UPJ1vQSnUTKeHBcjCzQesQsvNWzSmdeFANCKQ1TQbwJ1",
  "key43": "4vgUCntcyKx9LmWaf1qDCGJCDBPUx7JCubjWUC67ApUsXKHEoMpc1LKSFJX2VTYoYrmBumUfUEh4Lx9WrbV3mPLv"
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
