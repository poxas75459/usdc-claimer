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
    "3jqzfbGK2aJEixgFh6pBvoWuR67DSakVHY15TkDWkuUE16iaRbA8ZpX7AK5wJsmNWCdz3cSyQXJcnLM8qYyCpUrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j6DgKtTJ1DUgnWknkcp17DPPSzC3yNdhnpdFDDMJaPQMZM5Q6QbqS5aZyrYS4ztATCXGK2pGjBkNFXXTB36Qv6N",
  "key1": "328s2FRUf7rSiS1dppC1iEaTBCU7LXvz1Vyw4rvMa1SeJ3tNjd3dvrUGiAs2hhR3JHtZqp5Y5iMffz811JkBPXx2",
  "key2": "4xtsCXFxkrxNhJfBL75HP2q6FuemCrQHoS1boXQrubDAw31Fkwa2yQckP6dNtTEQZ3TxCYPHs65hdjFDYfVTQeoC",
  "key3": "3gXcXHie1kT4W4o3svxrG4nXfrXSbAASBd9UVJ2eRXsPyKXz83zwgFCpFKXs5R8X9q65tUTxF3GEJRQLoJ8kQ8uD",
  "key4": "4FdmuspybMEz1ExEvnyjhHpo6AUPphA5a1dMSebC66Dvhe7z2GYLnzu3YCdc4hMn7HHtiFqW3UEW4PieLJPQuZti",
  "key5": "3uRRGjV1waJvP8j7KS3xAMfPzi4h8as4oF8k4EmUB6WSxULks7B2PGnekDadABQVAkY4Tpvb7F1kLXaC7ovnUUv8",
  "key6": "4s3t2wvctf8dkdCZ2xrbQecezGGifcFaT6VEGfP9fuR6PcttdjTbSA5DSeLjpPFvtokuCEpT22w9dcVay2LH8FKz",
  "key7": "3ZKLSVZGgtojYKJgZa8swuc6vxnVmSDddeVbcbgQ9ayfRMNnST8XQrgcwHR92ozEYXwFZ7Uqd7a4RJY3rDFubnmQ",
  "key8": "5ZRWrJsK36AB1eynLCELvrtDjss4BLnAWovxqENumzg8X5LeFiWY3vvNjvLSV3xUfQ67FpQjMcWuCqP5jgjf5ttM",
  "key9": "2h4P6LcVRY9HHtak4znHejuCuVSDKeq5UCjirZCgvgU19FnGHEMkDgdHUzympKNGMVhfjvb2ceJW4Tovg6PhE3FK",
  "key10": "2E4QFdkmJMM5WSJTC9d2hAu1ayCJU8rULYDDSenrK9FKaJkGk1JJgkQKvqEpovDe8Biuqu33dULzDtipoFSQjBo1",
  "key11": "3sf89YCjfXT9JVbQjhCzU6B2XEkoK46fjq4vLQWMXS4C9KmBwadnsiXPBZcoU47yLkvWU7aobJQ8V1xHHaDyDu9",
  "key12": "5H1DE8vMq5sbR3mLbAtCaa6qyLKE4B3vhHkaeQJpM6FYCmY72WezAr776HrDFz9v7sY76jpxK2AeULGs2Li24Fdy",
  "key13": "5ru6xGdkcgzZZpY8WHP1Ww6LzPzysfAqneSmQVaEr19mJiUT5rgjArCdLwSRstFehdfFBUDR44mPMRf4r3WUmNCd",
  "key14": "5p14CFtjXTT2AeLcSro9JxCfom3MurcWt1NewusSWHip3mHM4zqMe7g2GXUn4fVigUC25Qu12quo2ZH1EoHXGxXN",
  "key15": "2FmkurDvQKf4gZijjnPUAz5s77NDFd14Uw1CMSS9WWEAf7bFuuX1TpuCRELGvKzzd4X97tqxZJ7hhnhSDGR6GsA9",
  "key16": "2XSNCzQZgrr4J9G2Lq99xycXfQR7ryLAGmrs7GXqqUzuNnRKBqorYjoS8rV5Be86CbThgyVPGXpYRknuw8Z9qRiP",
  "key17": "4M3LFTutWUa6SCWJZ9yDjSwuksgBXw1drzq4oRzA2LBcdGwBpU8dhndgvHZKcswczf4HfwMqxQo3VFmrT2icEWju",
  "key18": "5bLfTmokN22f7HtW9deYXLBu5KkLuHW9CEkBZLNKwfBYrFUXXft79ckWepB4HcRrFVpwLUNwZ2goStACAMathk7H",
  "key19": "2oW9eYMAThZNHuCpt7GcmdHqQz21fpWvrEUwcrufZ3ZvadGJHo9ZJY4tp7iJR7uK1XoUfCUbrjoz5mgiLYbhjYUT",
  "key20": "3yxHD6mCKgDjywWaFXcKWvhYGJAH64HCwxSyRgqzfHSQEDTKMgvebLtfakUfZayF27KPTkdDn2M8fywzAWacaCbg",
  "key21": "5tuxPfdpCXUC6PZWgZhvSpojYx9nDvvxWxHPC3r1LhNB2T8Dv4tPKNAp8Zv834xhXm83x5Dk1Va9auVpzdRhPmo3",
  "key22": "3ua9sQxkYiQXSXuJWXzixvBNQWmyXSjxb5XaSw6VXo643QVaWQEhM3yGGb4SxHt6cEKHekq8xZgQvhDAn7VAV7oP",
  "key23": "2GXFdYfjVCGFQTo4RD94jiUCDAJCr2Gg9PA2gJT9bmmHiJArNvhpxUmvq3LQ23ezvEqukC9vCnaaFaSV8UdoQdUJ",
  "key24": "2QzBkNrbksMKwyjb9cvMPZo6PdfTLjV1VeMKY7XHWtbrL9puBQvxWUwiVjYpPsjLQEmWkDXESJD6MACMVxW4fN6m",
  "key25": "r6bjkj4HNXar7AuuZCo4zoEg6s8LxSbbDQwRtnFwifjPGyRYJ9oRZe94d7mhQUzeMB23cvxV8hUCKC7LPwrQ3VK",
  "key26": "3eSCLQaawX8Q8wjVAq8zndfSiMkCQjUYqWXoXRD7qHY78svXNZg8xKmt9GvLm9b2c1RfEe1rnm8DBEpx2vAeesif",
  "key27": "3pn3fox7nEKjvWY9Ww6cjyWDjzvyhY6mfU7miZWHdwKmD5kLFasohfqr6TfNHtJ9c65sNTEo5uCzx3q5WkJoEJ8t",
  "key28": "5xCAcraJue14TnvQVqdHP8FrRyufqJBiJWMKrFtwcT5fX25yvttcUwnhzFWDXsPFpejY55AHKr8viKBGczgf7MUG",
  "key29": "38mmeTvznuCGQM9D25wmWAWC3R9qnppWxC5CKQM1VvVLQmdqdumJSfF82sgpttkUsyicLpMaV3GbKmLuuvWG8RHc",
  "key30": "54W6SdVtd2dTGfwMNRj6MdvupDqSKH4SKrShdtRkXj21yokHtkStcNDKerMRpsPK5ELaHX96BU8jeaw9CNT2dogp",
  "key31": "uhPkAVyj1sCMv7N2Rxt22E2dgvNLBnneT2JfbkawoPykhX7XijVpGiMYFsxanfDd7aQLEJf8q7ynZnj2LFWHi3g",
  "key32": "VCuHVxMTmKr28ttNakkC6QJd9KyP2GLvVHTS2xRWsrwGW6uDDZoVYrXsTG6E8nBR66kJ5NL6RUNDtFrvYwM9rEJ",
  "key33": "iwGrwxvXcaZLAUGj9ZQPP5ACiRhwC95Bvm6iuqfBLqjdxvFHNoEiJ4kaizEhwFfxwFhCpvge5CbrPjQGMZ3RkpK",
  "key34": "2ayTQaxbG4wUKdetJR3dXgGQrfjN2RrPJdy8QraubZXts1xu97CrEBRKsDUtck2kzpzm9DLQSdK2fqDXnr5N9V9o",
  "key35": "4Wimegz7vNZuPLa2SAVkehwXwRo9DwB9nGXmjJ1sUzJUFeLVunyDicM4mYvz93JbHrRm8WTDyxU7MNXzCoak6RD1",
  "key36": "nfevvn5gW7xGUF3x9xoXbcUPs1C3SzPqVs4GUoCmoKXxUV6Q2YwjcwrEXDXdhcKvFWjVMoZPtcnVy4kwpznws1c",
  "key37": "5JyM1Jaj1cj7AT4LPoqCGb2pFDpeUvyBGQfRnnbnpGbVud4oZ21SPT9DCJJKNbQC8oWGzK7w14bXPQFKW7N82aXo",
  "key38": "4wU4PeGfcfe9nrbNunZdBYhenWGARLNSszbWZpGz75co29e6ii2iqaAooh4yPohbUYQ4rm3T5XvfN9Mj8cNdEfqv",
  "key39": "DrDRKMJtbWAwhfQ5SmTaDPz395oj6Lh9Jg9cm6H6phJNGEWzjvAXTFcoXaWu3ccmHBBTkRnLSCLtVtShzcwDA6N",
  "key40": "5fHuT1kvgEAArCQhazn9yq4FcfJCxjfDF3nbjtaKSCVWSREstPd4wnC2bC5o8z4bJsAfbNUsMXRmXBwCAmXKmaA4",
  "key41": "4u7PRuanYrQ7oME95iE3Q3Sq2CViaa9xd3CqUu97Hwdx5UagpNWjv9qao6p26ppEdqnZJnah8MGoggW5fRqUf3af",
  "key42": "p2236PL1dThic8ox2WYYqjKodfkeGxPwPvaF7YACPtGzhq7GsnWRuWcrwTyQwqb533nXcP5Ad3Gx5hbw3RAnKeN",
  "key43": "R8rYs7mVhgY9akqR8zBdiBnYKqdRR217ihk7Y31wTM6zBrw1MyEvFFAnUSsp2hMDTaKAJfsmupq5tMEdhfyLxji",
  "key44": "3QB3cmhRHKXwGCz5XEY53BwaKqFF2szzS5VkGaSCYq9K6S6RxxzEoJMW6JhkDdpiPnf8vXr1NRfZrUpwac1eLWF"
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
