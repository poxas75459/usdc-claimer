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
    "4CYuWvdbMBmQ4voFjhMoVa9JstTHBiLHXp8UKAbH5wmh3n8id6pr7oGprx1iX2QBLCEPNdz7fYuX98ZMkp9asxtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yqHSt52MEoZcAakKDADBkeTZESqdiRS8fAeSPvgdsAyRhzfpAAQicyALxb4hGDi6f4Z64e5miL6WhNF69Tu6iSQ",
  "key1": "qhxkWN5Q6hypCYPVhRjHELe7YSRG3efQPeeSBjvGn6hj1xX6EPUYLFh3KBqRgzNdhDFFvisYYb1ndxKsAUbZjhN",
  "key2": "3ANiPf5UGeYWFroqSYmPvv26iwkr6fwpE3dpCDiZ1vDydfrCEvTpYB7WNpeoc9Y2ZH7QguSRqLzQM3A88BChCX19",
  "key3": "27zrwCwLhDdC3FPXM3BmDkNf3maWip3DnvNS1bSoLV1TTc8pAkTjr19zDwcPhRyJKaXRmSrAtuoAWpbayxy7v78w",
  "key4": "AdydWsagjbupr4XctFbyhGkUKbytQGkYfwcaYk6E58gqYM2GxecgpxmFPCXqTACAUnaWrv7QqfBjejdagXNQdLa",
  "key5": "5CA5YqEKuyV54yPZyn1gdxLx1qxco6kiTmK9j93wGdJDf3KQU2gUr2ANJz491SYAVEiL3uzZGU54qHKp6BSL21Gj",
  "key6": "553fKRtaBesFDHf8cnf2k9jVVxP6heYT1mXjFyM7okm2c1YMdhxu5N1nuCfPe7T23qWkMmc6cjhp3465usrr5Mzr",
  "key7": "3SG7UYvvjcPvhm4gtk2HTgwbRVVgRggn9shDJwJrafJEazkpipnK72sS5a85GZFZBkK9Z4ZEUQ3h7iMZ2kKc6P9m",
  "key8": "4V2dda5xRsGkSmKqtzgbiHVYb5JgCqKQsqdT7BGp7uTP3n9T3QtNsX42T9qHczbYGrh1H3b1MSjnvJUNZaKuWD7i",
  "key9": "36HTfvL3Pgqze4RR7yUEuR5sKsYcGvx2mVq6djYeoL3CNL2FCHFR9ugQYR8QJmd8wpJLNd3kGnhx19sTh34CpwxZ",
  "key10": "5jaoxbNmxPmVYgqdCccjEFz7r285mWfcXZ1dVo9F1CgqX9C9cFisy45HXW6dDbAnWZnYasEXffVEKyqqFUPdr8h4",
  "key11": "2TF45R6kq93UpBqHgFGrh28vqYfJ2M6E5gaApS1qzAfF95pK3xp4Tyw5moD627idQpS9LosrGqniypcftzx5k2Hd",
  "key12": "3iJs6d4W5Y5qTZBpkbWmzNUk13snnyBS9sEMw1VrgKVrzsqVjVvy6haC1FY5BLTfXH81q5vTzy8WBhsdzu7j7Jbo",
  "key13": "YhE3a7XSgbW1ymaT4xiKzxbvhm6JttxP5Z4TRivW23UmxLJmpTZZatCkCMHdArkA8iV6pmobXRyB3VQtcwTdw8r",
  "key14": "5o5vF78tUF9RPGfsLmdrsj14nZyWvm5S9TvFgZhaMKaEzvzLBQiJEyAkNdp9jWidspy4UJkUonUmXRVWQrxYxaXv",
  "key15": "4Lew34uXsfE2PdhBZMyQaN9CBaHd63mhMK4heuUwS3EREUo5CfKdKowchxNzjgBpLZqTmbWXabbDJ7yhuvJEYEfa",
  "key16": "2g8CZjQeP7boCzsrp5CKzk4C9JuBwd14pGaaXce2uDMVLdkiJXhEJ4HyyKhSrWTYrkYD9MvXmDgxfCAvYXDEX75M",
  "key17": "3KTqqCojqozMjBaz69eMR1Zqob8mX7ozYvYeBng45Ajiph4cvMcVdUxBNNZL2SuJd89sUqYz66hyM8EGuSLytLZd",
  "key18": "5A4J6qd7tWf2dfHC81Qc3fiCQrTKskD3NeJAved8mpzxDVXmxSSbryfihyDHCysTpX5nPfsB6Tsm2QCcaJ8zdLL2",
  "key19": "38TrGY1kKWK2YzUuB38MYknzU37SpDNGEDCi2mEqQAyKo8PxywrQdgaekw7wgCbY88pba7uKEaPbsMdSYbvUdhyq",
  "key20": "3eJR5nYiga6Rp7gbd3V89CrJa1Dk6whQeuk1sprxf9ZAhQXKdj6mFqHkTbMRSePrLtLo5ypMygqu3cjGFs8hsTC4",
  "key21": "23ooviD8pXidBkmaPsaSEWG8ZyQddTovNy9QfrPw9eT2XUECFAuBtfeztP9t8ZcRN7JCFUzaLvJyVc4fPG2sifux",
  "key22": "4N8BTZiVE1fyJF6M1krxiV6wHKMnz2WLWgdCgHjPpebgUGTCfeqzbMupqij9124sKfm983QNkuiyy9VRXfeRh3x1",
  "key23": "2mgsHYgnvoS9DCJmzrd9pEXoqYwG4uytsb9MH3yxmCksgzC3TBmfKeNPJqr3kSxrHLpjeJhYSzNSLtpZUkEHrmM4",
  "key24": "2Pmp2jQHtd511WnRSYUCQqWTErg3KzMjgmwKDxCyKgStvhcgxJDAKVZfF5WD2bgrEWWWQwnzM1Lhu11ML7cRXqoP",
  "key25": "3Y6gZoUCD3spKXSLFHo9iwfHy5JkKzk8un7rSeTzXMHvAuDMGgyKwNVhyCmdAvN4L5UmNuZEg58y74x4bqYPEyw5",
  "key26": "44JRRmqSbDzzxEaX25qYRPPMw85ytqxNgaQ32AY1offW1zhh3pGPDay55WhX1Dh8wQ2yUCW8KQzGe2RfrGiHUhTa",
  "key27": "3FN2LNWFUDhbKLCbAzR9e1rMdfUiLu2gAFfLrefHGzNwY1XVwvcxeLKa1wxV2uBHV6QjHW9vwXJRqPFVksyJ96iC",
  "key28": "5k6yMDgAQQnFSXDzRTbN7gGHxqxNfHannjvxq5gpBRBr6ApVx4R5f6srpHcUmk9W6WA64uUZYHyikGftSXwVjTq6",
  "key29": "2MCcqLD5rhxUSuPoFJwWoZgSCeADAMvhKT1ncbmBDdYS1N1izDAs8Nqse7Xr4SfMQabFpC6XL4tSvnZ2cZsRtnQP",
  "key30": "297ryRwGBtzBUkvSGbpVnJExTLbmufFJvdnQ2e2qvSSdUPrTjBdqDEKwrrPREv5uGAQ3AoZn3ez3qiNXfiVNHFq1",
  "key31": "56yHcJcBm4juutY9wkS78uFWYXsrXVgii5ktZ4U3QLULGV7386txecse546rZeWD8HQ7S3S3eZiVSGeELz33hb3u",
  "key32": "2NiWCSBt3rL3sEQS8YVNcsV2ufNdSz9D14RXWbejotRpM1LPhozzYAHWrh2hWY21Vt4mxuUn4FvGUdSbfvgGFDma"
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
