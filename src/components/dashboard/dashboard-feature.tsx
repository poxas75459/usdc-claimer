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
    "3CaTmdbwpB2ug99wRYBMdA46SyqCEK8CJ2a8VoxG7RhYXf4d6srCacZVkFswJ8a3dTQyVAAx8A6t7BELPNwRnixT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4geSRQiAigeKV1XnTB6LuL2wLV1jnFM418kktbp8uU33t9bKq5pwe3Gz5KZJnjL6gP3qe9Xhvee5MnttjsKWXQW",
  "key1": "hJiGvvD7SZJM9GzVuztCPK6U1QwbPXNB2raASXguWfH5Rt2MMwuesZNetnGPvYkMkvZpfYcWryvmLugWqbYvttm",
  "key2": "RcV35NaYEkKg4eXJvjgC6tRbXGLESc9ExPU97ZYF3Ak2q47gkDE7Y6wcA7wq92n1oNCZao6rffLNfGCV3ZaJbJP",
  "key3": "2Jta6cUiK4gDmowewkSfUBXUU7RiWZUf1ZmkLKQbCJcQ7Wky5PATiGZ1SYuQzKrsBDcuaGRTbfkvhJTmsbBjkPWK",
  "key4": "w7scX42DobXRM44pFd1XB8h8kEhaNGKpKw1UihpAkLZcszJXSGi8CVh5sbtz8DXChmATpbx1bs3SXUEEXTksWX3",
  "key5": "3mNrKfWfTggANBqXYCZ3CByagrxMQuiF4mTFYLw9UEfTPbWEuAs4avN1v3WdJpMdtNsndVhoDJ2FdZnbk67syK8R",
  "key6": "2MU1NTemdAq9p34oSKtpaHyqdzjA9tpkBdWobg614nAcyVM68bBFHz3HW5QFLRgPifa3pwJYgb9m9gn4YxqAFCtg",
  "key7": "5piLW48ENcDR8P8RTsgwBR8dYk3MYYbqCFJjxEr5nHNFEpKGBU4gDhrK7de99iKu3f4ju1nTqtoLuAckUAytX6Sk",
  "key8": "3VrxiW9SxJ8qwfWcpXqru47jgLE58KHSdT9tfPLj1UT1Cswkw62YypUWPC8XQuxhi4tDYD8awNnD9XFD5TgwVhbb",
  "key9": "2M38CL8pPziiaKHmrvzESEADzJ5maKj1Z7LgTMGjpoz4fWW29Wg14wwfjfWSzcvcQsTjEAZHQJfrtoMnQyBZGACY",
  "key10": "dNs6XipWqFQsSem8a5KeJm6k8QTe2fpiwVuYQspdxoeD1YY3wQg7XSK79coon864PiWT5nyH6SuvAJ6feHL2agd",
  "key11": "33kQ89G7Z4tzaDHMTTkUSHtUjrNyAzwQWnxg68GiVeghNvaJ9BbDQsquQnWfjafT9cL64cS4UCnkMxMsTE87cqoP",
  "key12": "669PCsB9fjqGQ81kmoz7TXn18pfXLLmucMuwbeUipouThDnUViU5iCvQTZjtYfcsAVzbHkWm5EY28RNWi4wQ4sE",
  "key13": "43ZjPnCnnB8pY6qQ2GnUJ1VjKqygkAn9dV7XhyeTVfL4vsFPV6HR7t3gvjNQZrE6M3CwmD3GbTFBAYVNfq7hXSJ4",
  "key14": "33ehcxuNVGoCwDLxq7HH56NM1MG6gHRXBEbMgTYZHXAcZTM4yzvbGfUgUmNDyKTncZtMYfzs7svR6Ps7CbJj2XUP",
  "key15": "25wNbXS3Z7Cd7mQdYxwfuKH46TahzbCnZ8HqevXTNsqGQt67wPMoxWumyENs63VHwvzDMDZXRBdU17MP86YHByL7",
  "key16": "3mq7REsX5HAE3M13M4EWRCgZfSTfLhr8T6f3t3dFdLky18YoLsnGLks6mCeL8EFj1VDL663tXmbMKpXMkf8Pz8ea",
  "key17": "3QZEzovuYHUf6PDTaGZoobB7h5eFNRbxsBH3vtFNYqAtw3FUhRQd6mt2v3W2CUzbW1MDUeSBqVhkxotALGxH6Z46",
  "key18": "4a7zN2XBGuHRFHZsUCWNQZAFYKpSAqxNoYsnuR3s78cpEZ61iHHTrgNniR7zZbjs7XSNQwYWPFZphpRwkcGF7oBf",
  "key19": "426EoihBNaE8QGdDBo8y4bQCW6i47hyK5ESc9RhqT87hdQYRBRwL7XgzmF7b5rL8uSRXvEiwo56KX3MU4VGkEHc2",
  "key20": "2SQ9XfTdmk2XkSLDVEkPGCGQrkzsKc4dYSopDEBHCH2qogXsVS4F4gRKv28G79WjYvy8JAkp1b49GNmtpVL1ffpi",
  "key21": "2AUNQTJ8N7nxcngUh8iohdUNJxrkAH3DJLfqqcRo8DmTHgjSZXk3ph5YpwrFByxyBdZxGwa2anxuvCh47ZQ28bDo",
  "key22": "2AJhMotXvRss2rwv5yGPMamEcPm66ZoPFQ577hY9cnVttCwqwY8KAkkxKDYdxPyYCpofhwKcHBKSV2mGF5t2RNTc",
  "key23": "3YQwWEtFqTDNStToi9n5eEj6U4YFhfqcv1bHxr3tBMjoVnTVzXEmYgkdHpsLT7SaiiWuWshjAXFNPHNaXM2MVG5r",
  "key24": "464xrscYNKnEQGSZbez8LqQjYxqTH6JLEbBvBkNFEe5wvGFobyccQEgayvqnZ52zP8hz6FZrBCjbjeXXTRVrUS2u",
  "key25": "mWMHQSRVFXdxYEbRmU8m6AenfWocbzFTvF48pVQMdev8seqzxMZ7k3ob5wDhxaHwzVJoBbhyJPJQvoNG3LTQrFf",
  "key26": "3vnEucbHaEVteRmgS5NjnYK9sj1nyts488xBBpxapSU7mmms75NXxrmFN71wrxkF8qB2wFQ8z84QosDYBNto2bV8",
  "key27": "4ZMRDd1PNKyZdJ32TKZnkdAzPhjDLPvsNjkjDXanTJdix1F6Scbnv7dMNT8GAWMKPLvpJ6jUz2mDgtrNkgSquqMT",
  "key28": "4YmG7TRe7DRsr1w57dGLHRMEWgvVwYxsSYAEAfsFxseouTg1y4YKN2i5fPzb7879o2eGzgAvmGRt2KcebP92JRa1",
  "key29": "5WMvoks2jPVTTGDM6MicaaDDqFZQ1A5jz8AG4PFwAuMRGYExuzgpLfa8tbhfGYPMPKy7RkJidtHwYXmgrgZ2N3BK",
  "key30": "4PJzQ8CQirPTrYbLeLGBYjZMW3vFna7Ey2JP1MwSKbXDdiq4C7SyPKaMVuGQoKf1pcGFNqK2dtHJpm8vTW4fXEjn",
  "key31": "5UAycc7Mn9ub7VCyBAzX2T8xk9ZCaRR1SCfGJyoNLTx9s9WuHDynrbVcHkyLaiAdoqzHwz5s8Gy3AzkzMDTPzWra",
  "key32": "qBv9jJsPT4M894kfmH2KrFZNin92oi9RwKVkdyoKnVwbLciVJwYNexYaHHTs7cWZ6fb3STUD3rcgJtoVvp7pVFi",
  "key33": "4GKq67ktuv2oMHbC5QoTEx8sPVHrRbFhiNze612a23CdGPa3ZiQVpmehBDDoSApaAAcdTkL5GmU7t9abQqA6ixJc",
  "key34": "444qQX54jfzpjqcLFodLPYeibZYVojwfB95uyXFgbhUUUYuzccrTxuHvQVwQ5LiPtDoaUBMygE2mLyYJwUnnqVCG",
  "key35": "osResHpGZGh7wtjbnhcGRgm62jKLFBgNdY9aR2pxKJZ83VN4EhHVbvTeaBv6hw2mZV29LZoM5J2B9Swz34nJsai",
  "key36": "5tMitw5rvs24vYeHAMhbfJiMwgn7ifTeVriVjP4qXWuWRrN8tbXXFrCWVMJu7BkEyNjnA94KAV9qAgNkDjRwW28w",
  "key37": "2opR8EyE5aFhYKih3rCmzSiznjLxVcJADN4P84REmcq9ANccDgV5Vthq56xJWcP25xm712mY6Q2KLsiJ7Kam6jwe",
  "key38": "2xSarhKKEzoMja3cFJCTitpT1unJdA2moJdwN5ntX9Be38XGC8ZjDvJvJmxccKuYS542oDCWfwZGaznVdBxfBBZD",
  "key39": "55vL4fwtfjqLgxnAuNRop8Gh4t3mte7ZUjQa41r4i6qWp3WdGpeiNTLjLBrQZpVjUvZw6Z2ok947RPe29sdTx5bt",
  "key40": "3E4GFYB4U3NnKh2J2vdGudDv2gB49VPYk1C2tYdqPgBQNHb6cBXaaWwNZn2NwdGGZ3p8H9YuEk2GvPeS2h47hnNV",
  "key41": "3daTNHMaYwNewPao7yA1QieJ8h3CL3gwhviFSjC8zANruMctWfozxVNx4FcZEB6tiRnA7nDt1kW9Q9z5AsdFVXFe",
  "key42": "3vfALxKUUtVGt4TEWCL6NwwZ7NAJzqJSdsqVAqEznsSr1vb1evuEYDb7d5gXfZtEFSRKcecZi7b4mGeUVtVSxmBk",
  "key43": "xzBynxaATT5XwPGytG3dQQLXaP7pgNqrDs7pZ3RU86wY9sdVgcXShqiscVJ39JrRSHhykyrRNNukaatizu6AATp"
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
