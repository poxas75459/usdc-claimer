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
    "LAbtNuMjjTSch7PKKnQZFgZw6tfuVuvFrSd1RxvHxVVCsLRfZv5FWYCQB35hSMi52S9pJmu9jXS5KQfCK1uqyzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcBREEbyefMvkfFM7wsPGL8eypu6N5RJeV3hKTQRUjgmWdKdoWovSqPmsrXornx9dyjShtPznUrYdzjtjQFf3NU",
  "key1": "4DjpDABBxvkCNN7ebvx8CyKWZhTaSqX6xXkwBHGeZYKceW4dJVTR9Sb3KQJtkmpy9Xu2tDcTXuNdLQqh1oArrker",
  "key2": "62uCtkZv4wAVZrJXyxGW7x84XJiW7aDyasjTRBnncJ261sT7SvE1F4WpGNDBi7e9qP1GdVyZfSDjDCsRjN8pw4xa",
  "key3": "trosS4iScMjUfCJ8Hu6gFPWNNeHbwhb9QMfir3BVehC9yUnAvP8D6cE5rqYhzG8u2wn78VN9t3TggSKAwuJrVaq",
  "key4": "2bYSNmfAHiJLKxYJnidxeVgTZbNDRCLvv5WJd6Fpn9PGjF7iAwiknTqSEZNYeTnjQmu4LBdLqgoefEHgRZXqHpv8",
  "key5": "29KP1dfZ2CmzExVqCKKGmU4VZ5CipKyU8ShskYKm2eAoJAXqkSFrfpQ9ihBpYJHpy8CSfypUnkxxtw8NeqWP2V1p",
  "key6": "4ZPHVaKAxgqRm5TXW7CZ2xuSn9yYeiZWKW89rRcP1wouBo4XwFSRf5Gyh5xeV1aLApHZCkPb9UnEX5cMo5exL8KX",
  "key7": "5eN9MdDarqGEVxKY2FQ3wFzWBn2gKExVrvZsy9wLbhkVhEDNAbZWYxGwScZSrkUTCwBDd6ycbbRCfhcfDhghkoDF",
  "key8": "23DwgQKdLdH4sJp48g812ZL9ZZsAm9QzEHVxGHDvwGFfZEKYSPGCmbMfkm3dcBJPKTkHN3YE4usLkW2kyGnbEvgP",
  "key9": "4MYsA4EAUctF6YcwYCtETtZm4Wdzk6WUYoUbnirEapY5LG343Yp64Ny45x3EDiA3HTPurRZEfHaUgQZEZmfp8gMD",
  "key10": "5eRYLx6hwJN2z88iPnzToSUsXG1LbhG3ULyXuRgeHcQjKV47yGg4od7VeCD8mahP6MfYJ1x5tEM5t8gaKZuiYw84",
  "key11": "5rj29AS6vcYenSYPUuxFBi6h84geFd1piDbUdc6fv5uDKJHrkeTMUoFKrJNDydLueL49zudFauugFyENaWoxyVb4",
  "key12": "5fNxRrYUqDQ8eqLj6AHQbX6XnzECYxWQMcym5Fhbfguirh6xUppeUPvVaNVzzLs8FTMZeGxbh5bnKgDd4c17eAVV",
  "key13": "21ccygTxEAFBQpf1rZHFyrfqt1cdpFntx4btD9wS6DADt7GgtCwp24CArSmGBRyrriPKcjCxKAwwG1KS8eB5md2C",
  "key14": "2bjim3ReXxmzHudNLXcKXkkm5wPWic3CTCwtGucgtFA7kRptZbSsL9BjJWKHeCzwuGUQr2y4QRDBHeao8Lx4c72A",
  "key15": "5gF4o9Xf3cP7pBfyVPWkczKFuuhJdA4YeFhfYMg45uao3XHAVzqTAHem1o3xPCAZTEYdTm5nogUhKv1kbffPQjT7",
  "key16": "5pLNN9Fq6dEZwfkriXVq3Aa6DkgoP4VMWRjFkKjAw8VQ8bV4SPbWdnRrLUeWeurqq2Q4jxs9MDdqWgPuTC6FC1kN",
  "key17": "3Y1rVDgptVd359r5ezFGbrqvwVFU79v22a446qQFxTmBR39BcZ1m7uNHATj5NDcbpGh5V8fgmeeZexkK79LzFSov",
  "key18": "2rCj4isEqPqFVKjJM8uPQvZ2n8xppVnfKiwXSX3rJk9ToVbVr1Tvzq4anzjBokmDkR4C1PUHGPSNt69vpsXm7rMC",
  "key19": "oVcrg5UqjTyF3V9LLN2KdEqJ4mEKfdrRqVwLDC9KATtgr2H69a7naYf2gcSEaThqr5iWALYQMvtbCYNDtqr9bMq",
  "key20": "2vF78fyC9p2kAqzT3TwmDcD2fAbAAo3FhQfDgEi6kj64j68DnMZfgcmJhkcuwBsiNrZkgfFkKBULw7aRsaG3QW3x",
  "key21": "2NYrkTK49CiuGjTZCTKETZwYLLx8ybGp2JwpRj1qRvJYpAttSGtpBAcipU6gb5VG2Jyja93bGGCwQmQAznpZhPLe",
  "key22": "4MkZWjUPjcFLJjbjK6NY8eXR5oZCcwqtDRRLAjHpzJFm93qv6UrUCeD5DrNmDpyCC7q8V6cfv38vBA7K42GxhZB4",
  "key23": "5PRpNRLYv3587r1XrGQiUfJomCBh3kMeqWhEveoZawUeJeiL7jPnpvKY9W9axMQiShQ7ZShf4SApA1MLsX9cCYou",
  "key24": "5SHM2nqanMSXsYtZVCXVnKuMfdQBkb8TtyEvHACpVkM9nbqXfNMyCVcTQSFmRTZYNodwD8vGgL9XXhbHJUasUr4d",
  "key25": "5T2dSrUNioyyAmuRccaPEub8dPuNjBDL5ggUXjnvakCVdZ7DVJbx7GLBiyjUBZGpYBAz2rXPJe4MfMPP2MYiE2Dz",
  "key26": "2NVzvbUCEzmTVCosiWtkYvPPvCf8KenxAjTij6adbLJNcLp22drp3YajvUMGf3rpQKMAQ2uhYhuhdwibbs9X4E8E",
  "key27": "5eksh1CZ8MitLfpAj8G621k7LguygSQeobjA8DoHN3AcCTeDDCkFkG3yqX2B6PsKPL4GwrAbWqFX4ZDc1fDT7AVf",
  "key28": "bXW7B4WxmuYcM3rNq4Bxv5CQtixj6H5C68amzANLe3j1PAQJaYRNQ6zmfamMCsMgNyHbmj17azy12q8MAzA5BxL",
  "key29": "4ZAqm2ETVo9c6fpgtRUBRMNh1WELPWeJaPqQuvrvjaryHaCjwtKCvzFWHt7qyk4SUHWm5CJR9FssU5K2LQeXWYsX",
  "key30": "52U2Jb2Tr11FdgL4FAdYSecqKJpENBGdZEHS5ZSevpnDjgcr2Rjf1NoA39eeJ68d8Rc4mjPP1YQrJYzNBU6eMV7L",
  "key31": "4VGBdcpZfWEsrcNmSEmHXrPNecARjjfwQY3vAt4tGsFDeCgL4tnp9S2YZUCoVB6hjjfvSRH1bEJxLzgp5pNe3qr3",
  "key32": "2PT8Go4tzHZ34QjdDT2dMz3PJCoMiwWhoFUnxv7XPxRek9hSCygDh37iAUTE9Nq2ioGbaQx1E7HJDrLPzxPNH5x5",
  "key33": "f2nCvgM78LQ3CgWAtJmFmAP4eDTRDxv8qJMeb2iu2mk74K1JVB1EuoNgVHC66J8uqdxF8kwr4kjA3ZUp2ordNwR",
  "key34": "5NeuZ6sfxnRPhxRggrdQH78wunRHmseha34cwYY48cXwpuy3QJDQWqhVV3Fk2grirLKC4BdXgihc4PjsPi15YXZn",
  "key35": "5qEMYguTVe3fbr6NTYkj3USJXn3WA24sLqjxvTTftNVqRddFvgCTsaiu74enTJ6XtiM1u914FiaxZGkMCnfStQsN",
  "key36": "2dgYUv7LHj8KeMHyqzytCxBbNBxXKYhZjuBrcJ9utRviBQVePeHeh71ASDVKgXAMdstfV5yCbt4eqNwnQMhWNXK",
  "key37": "44gDMESp3GS8fuZ61ndKzK1CSjkET6QRh3WrCQQqVtEturUP4CssfJspNKoQ7MU76L6ckqeim56kzZpgGDrfWQV1",
  "key38": "rNu6ajFjzBjvfYrTgfE6tJ24UnBPY6MAi7yUCmrMeC1PzRwbKBwttDpHkgdGCjSxyrCkrr4cGen91CfAaHFdcmW",
  "key39": "ctavU4S2rnxH3nfVDFUvu3bM5jyptr9Zm6ugP28N1aNzJ7u2PeuCxwsFac857Xk32ddDHDpKEkfVTXrRAUVi2un",
  "key40": "32jM4i1GxN5qbfUaPC4h18JRin1udMnbdzcqFo78HvVCk4AjDnA9FQXa1QyxtyJHUR1tvbB8jqHE2nZTgukN7hMx",
  "key41": "4Dpf6Wqehc8ZFyVWN1kGkxNt3xuQjYfZfvzMkKoeZmiFcWAYm1xwuEo6DDmavefkFYaEhVnjnvfKCDuE2g6bxsXk",
  "key42": "65Kjkqtvgq53ie24GjenLVRetkMzpkkQksZpTCsAnX5MutgSmanzZ1yk24btccmXEtZ1ch3EQpCJZm2PSTwM4D6T",
  "key43": "5AabqPyCNBZWG7H78xcqoDz6ztsGYErbomaToxWnuMDHQSZDLspn6JCgX4rLkJqsfnT5mJs8phGY4C8wC5FEfWnE",
  "key44": "4KrK6Mz3kNxXVfXJPB7DHgkR5zYURTxe41XugNwBHTqcY5FhRSKa72aSegnvt2wxZn3V4sv3ueDUhsY68j8XYxuX"
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
