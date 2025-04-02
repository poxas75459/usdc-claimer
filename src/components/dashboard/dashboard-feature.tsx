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
    "4FhLHVV9S3QgtFXfoWuMpTB44NQNcR6Z8VxL694quyncDUZNdgiHRsR7gYSwaVFrrju1nJnYMUjG7P17SjGzrS8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FpD8upg2ug4Vw1VAyVqmA5rCgVFpWhwUFgaJfoJiCXQhW4wpZD14gndjt6oHRs77Qnezu5GAqFf7HVxyixPrTzT",
  "key1": "D6wpbgjuBFNyvvJtnNz35EVip8JrGB6QiF2YSCPKTNPCFJRmqjXMbKHoeqrsi9pKCCBY9KLQRwDhniWgmQ4jf3M",
  "key2": "2fUXahFmmu4VQ1BHp7QezwvNyoZUhKEzuBTibPyn3M4uEw8HYGZ3GA5yW5K7JGShzBw6bePCiM2uEz3G2DjLZ9C5",
  "key3": "TmDYSFNLGAVmNxf8esJLVpB7r2QVHL5HRK6QZh8H71ykXxG7s18fwsUMih3sX82UKbqqBMQhuZWzx7C56w6q2X8",
  "key4": "31QAcKW4DJwEEeipgeVRsahRJrrW7Zm2xf9kNBm9N7EKWBuzKsfp2J6fgYY1TMURiEiUdEGKrfT92skP5QME9xF4",
  "key5": "UQx7Py7zFz9JnkYwnWaGprDKkVobz2pxxmxtgvs6Nrm36SvziSQ9FoBf5q2C64A1Kp7Ta1GnjNvyh8D1Q3C9rEn",
  "key6": "3XLixwQqv6YFva3U8hFAZFULJZW6JxAjYF2axTuqRvmPaxSZz9uqxpCPV4zqjkGW2bAKKNPcsMpbFasZAfcdatVS",
  "key7": "3sDrYvMwLxWhdA7Md7Z87GWfC9s4jrXUqK6VZCShkpt3K5PngUNG2hhpzBh3Sb7pZwG4CTCsojP1RfXc9KV9YKtx",
  "key8": "2puvitEGyyBvaFtb9Em6uM22QXJFUkLYNEMFvubLut9SJzv8eDZBiN8QJJ33DNQt9sPxBamDtS4DjzqVXoZAURCr",
  "key9": "4kENbvjEJszji7m7hhktJRs5vFg2ZjNPHqLrq3aYcjHPK3ArcQdv5LDUpiQqHs6Weru8bHf1CFb2Chu6o87ZrmFn",
  "key10": "5ctrxgNFVVr7FHvJGXoFDhJaqcvCKkXBNzdkazxgCs4EbbrbZc9sXd164n1iRvcAC3BgqZRPVFYEPaVihHX7sx9j",
  "key11": "fJz8Gi9rzBbMnT1BX2RM4TLw4fdDpG6CQYSxfprm5JUGqhFreaBqGAR4YBhvE7HAXg4u8aJmxods2PxRD2gqHRj",
  "key12": "4fwtS1NSL73enB4FuY8f1gUswVmKzME3DxASXwoxcn8hDSkSjkvuPY8VHiAAFJoGnfezzVumxYvAsV5AKFNtELDU",
  "key13": "oZmXeieNfjcvktaGSEdNtVLwr1QxRF9tgjvgFELyV95k759iNpLFh9czNZUfGv1wn7bgJbBpLkz4oSSZThoZaJg",
  "key14": "5DavixmUC9RUwKD8WzANtzhmeGVYRMznBMMEY94upibd1C8dKvWD7QqUXjUBp37kmEe1XHKvrSAQLdko7AWvmGeW",
  "key15": "2TjCCYuUuhZf5Jw5jQQRGeeZPy8KyGvV1TVwsCWAsKgvGcDZccYYFGZPNsQhjsTdv3X5sognVBN68hbzdHkU24Hm",
  "key16": "4YPSjSZ75FnvrYRNANk8zipcv6j6DC3B7kt7HomUxzXeR1rPcdmgCPMTwWU1qQLre5ayR1jJgt4qyfGYC8oUKcrF",
  "key17": "3RpMRyBXM9afXEoYDTing6FB9Yc3Unb3gTQPVASDE3Sxr3A1t5NJAU4FfuR7G9oLpmY9mSkCmPWwWBZmV9w15z5a",
  "key18": "4iWaqw5gH9zneLR1qRxQmyGWxWBaNUYmuTUWuQF9XRkAqovGTLUcX7AXhP6BXdLshdtBdaVcGY6eCQn5BLdvKudR",
  "key19": "4koUasq9dEjZzxMZt1iJoEXh6XQ6t9H7xedaU7SAC4fMVH3shfuo3dfZrctgekQCmWkbWZogPgDiD2u8cYi8REBN",
  "key20": "4Kmoi1bksGSZVYNi367DmfzRtzVAWELJAJoxWYfURg9vQ1RxbRdEPtR6XFqxxHRV1Jc5pTnwppLPv5KqSJQrc7J6",
  "key21": "28zccL7dVVjaCshXzfe7NJh5UpYSYX7kFrL5oMxWD8ehuM6YLU4PbmnHiXjNyzsF8oiH27tV16XHEAkseZhHhhdC",
  "key22": "36CAZLaiXVtxvzyMUMoyEb7sdijGBcKrmdwJVFVBCFtEAX9fN2C8ct3cXzXdwe6msSVjvoXJDAswmrNsymxa8VkC",
  "key23": "3Du1oR79qUCHfHQVPsiYLqTM1fHNkQGJ8feJua9Y1kkXPZ4euFtVcqNmveStrLtfewNdHRdnZsYKfE6EC4Pm7mfm",
  "key24": "5SJSeMDqG58huWuo7xPwLGg5dcFTRJDZrSVZEGz1Xxr5fkLEnsX1fK5PDjNcztH6umg8v9SEkqupWunor6zeNax",
  "key25": "3xN9z63Zsovr5Ay5qG2FXEgfW3bd7FmjAy76bH6EUBFDq6iStamdeVymkKuk6ALSJAM2q8eHEFKdK1B85Bivmojq",
  "key26": "54uBN83gwqrSUznra1ijbVSk9T8dpme8w8pR8mMPQVTiVPzB6T4kpDUqY1sZHzohoYiuSLop9aBcnFALZWLAQh3j",
  "key27": "5RbzEQzSSxPAT6aHiczbp3NLsx6xVKm1LPWZy2rFyY83qkuae2KugJmBHrmdmRgbYw767t67rrJRPFMUpVVBpZJd",
  "key28": "32P4FW8kdubwk1ektmncMjhwqJn7LNuhCMEW2rKSyMphEDDUSXFwGLmqEz9QyvsiEYL8zgd8g38ojJJps3kzyqQd",
  "key29": "4qsakzwntzbsQGDDADF5FgdFx9gN1saV88YQzNZRRshYHgXehdD27nxqEni55Tnye3Xh2aDoPKuPM7ZtukuZJ9W7",
  "key30": "2wjmGoyo4J6zi6ZrHdAjSetdvMJVSPu68yJtYm9d9RGjEGJXXTz8kGPpkURMtGTbxPGLBVh96edeZ35gXTqCVu4M",
  "key31": "3BieuWpDrj22BR7suuGVxq99sZRkFJtic84jg33fBrnV622MvDwvekRHxQE2GJ497fEri3xGFJA98srVyymUST5y",
  "key32": "5jbtboGJf6rYbHPMsByaZbWC1CqJwb2BcDM2xcnWCSUppYKqKPBbat9zMR2hvqQCZBdsWgaHnZjUcrc2Z65dQaY2",
  "key33": "2tC4oaYaaDHRWEGkG7JSFSN1p7rb7CWaNf5sxHxEnCWXc76uNFCbsLsGYVdmHMtrSiCgNQBZbeBaYxW3fbALwKmm"
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
