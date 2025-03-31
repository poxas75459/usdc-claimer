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
    "33RHYUe7VtXn6WzH5z33AbongUdWDFgtw1K9bhHDRL3k9EFvkbynmcXJNeFpzMX9y9HDvexXKXMBAVfpzwLdWEaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ibDZaWrqQXCZgycR4qreNkYnVHskNzuZTc7YMMMcuFoxCgcfVBpjtSVcE4yyAr2CRgXFsV9taApae9C6wkcLVy",
  "key1": "4jaZn4cUQ8ywMVRc4s4fQ1V8MafEmF5f6TwZZW3gNW2r6KaGTcGZbBfYTPVffG8aGYX28rmipe2uepwB6Cc7H9vL",
  "key2": "4LMcP6BpUj3LnUu5rmvNvLdwCDJ56rVuukNMBfyhbF8swnZmcA7nJNFt2H9HWXAAvySuutLPtYkrPu92yWEan4uJ",
  "key3": "5BXHdKJQJ3CqQdtPNEhBHaSrUx8yCpZ8CP97fm431czqyXum89XtCirqQEFWepv4NjxVrUC9oAn4EeJ2xLsSkWK9",
  "key4": "57p1v8VqW4QdvWcd9fYNqz5xxe58NGhMZ2JXCABXVbgwDQadrTxgaeZ879EJSxq4g9mTN3nyevd4iE77Zs5x1FDw",
  "key5": "2e38tvd7UgQkXDSpQRn4rsNUUGUX2YmYFVPArK3p1gU2nZ549RuoiAJ6V3zhPEsCeYDrJjrAt8azaB24rSufzLGr",
  "key6": "2JnZCrqLzhAWdY2b5ufnuwwFznQM5EUyQ5W1qwY9pjzxZsZVxNNnu3AdVoiSQ4QZCvfdShptShWQ4xxeSi4uTJMX",
  "key7": "EziZ48gydgNPLc3P4Q8N1PK5EWPWSsY7NkVJ1rnxjmGyE9DugdDaYyPNRxNFyFPNj8YuiJvnBsLmxxFcjW1D1rD",
  "key8": "2xyNE37NdD4dhPhdLitFu4ptkUWpguTN5Vt8mq4XL4GSNHqviDmircamCEFHMRrkefwQMyi6zkXDTfqVsK257chD",
  "key9": "UEfzDRxHtKwMihNbjcHGfkrBX15LFgoaEKWy43H5fiKVUbVijayz4KN7SCZK1kedByLsNMxY7WeH4nUEo6EU2Mp",
  "key10": "4ekrh2L5Qo51bx8oCyMM9dsHehebg7KgXAkacV1AWuARrjQdRBPGScmpAQLMf6GTE7otABjoVoJN6fcHooWhxfVR",
  "key11": "3sWmwsZQWhRkFNm9YmYA3VmypGqKdLnKFKwoGm288BXAmP14jAq1ABWi394wY6Zn6g52wGccKwRguCj6df4yQBrd",
  "key12": "4RHdyByPZmQP6qgRSdUXuXucfTjs3c18r47MbVBxho9eXrS7aWxddq41wgiCCM5r2oXEvebztSGLBGFrCsm2J7JR",
  "key13": "46mwakwDzRPBUKmPmmciyjcpr3RkSuQP2U1MkQDTL5cYFqijZwiR9BuETk1bVHaNrcnfHVwkU61qJM3b27X2FxkC",
  "key14": "5roHtfByorWinJKnWZKmCTvZt2KVfJ762x1P4NXBABST41swv8myeriujE4FZ9EMLRmWZEvYbGw466thJHq8nMKk",
  "key15": "4eXXKRKJtg4SZVE2ZexJu6qvnJfRBeArM8BDHui9KBm5LtyDwdsU9BLPa3fLF7Pb6UmHuDC94KYCx8nWas6Tzii5",
  "key16": "5aYXyVQfn9C6APNy8F1u2csTYtvey6DTrSMsQW3zLvs4pN8TSrvi2sakZzBwTs8SVxJckRQqeHmtAa7rcZ7Sps9v",
  "key17": "4xedZp4sht2SVdJweDFTa73mAaPnkZBbWHEGs16a7Np9H9wcVg3QaPYH2oMtvdqTEsZoogcK7bBkszFcG2aHwUu6",
  "key18": "3nAystG3384do5F5XtgfBoGJHBajNt1FPAkLyXAAwQqXAWKBNmkvrSs7rgNSw5svd2RFP4GxoQatA9zTFQXSZkjx",
  "key19": "3hNv2n2RFB7RenqRKDUNfFtvGo1YSCA9UtZXcjXqRbhwgmLVfLiSkRaYA57uDTuqdJcJ3hQHVC4qLLicUQcNpAiq",
  "key20": "3AaKz29U2ZVL6demcMPCSgyqtvdpjAShaCd4ABziVi4cmQKr8gkPpF6X5zNDgeV7NifHTshARkvvha7aZyiwka2Z",
  "key21": "2h2CRV5jyrheDMWXSFZ4d9Zfr7ijkjFcXQ2TQynRmWd7sR9RoVv6a6gfeHyfeP3NwWKKor1Q4zVWoum6MZjzjLdw",
  "key22": "3Hc557hxG4S3BWUDtL94zCMqHkAf2yZA2Nu9yHCwhMLUUC9eaPf8u5GR4BWa9t3NQRjuqi6orbiqaLTV6W2MfDXf",
  "key23": "zae17QENfc7uyLuEBPCLNt9YV5uhFvJK2iwJ6MQF1cR2wDYqCvJfTYGJhhDLqyK6M8q2GMQWojNQE8GsJW7PbFP",
  "key24": "5eFRrScRRk1Fcmtdq4ZpHjrTjNP8rtraYC19XCYdLSsw8eo2UxuXJcf8XYRNELBDHVwTRd4rZHm7KvuFiGYLec9b",
  "key25": "4mjYYmbniqxpVgLT9dwH9z8FyVxKPjjzKwjBGG3okS1UqLTBTRsd6d3tWHEh3J9xwSdYdNscFxKzfiGsoFG4jAkL",
  "key26": "3h3evFc4HbKpcNnDBWRep412twDDHd9oibqJV5Qpm5m6VeyDjzDeDYGWP3i6Hp9xXNCPRG5dBtvKQTxqX6snARAq",
  "key27": "2atLBtW9s1H3cwUWZVuLL49YR4GMQXWoJSSzvbv7GpoPMAMUmuYAwWQMz23zm4pL8jwyAXSZWXw9WauM7QUrbj9F",
  "key28": "QoqZLhSP1qVTniNf4BDDpKG5H8mkvCAwAj1iQ6MiBSebgt2k2tGN1NxwmxTyvW7vQJQ6uYuAqZp8pFcg5DAi4a4",
  "key29": "szy9YGV1Vmq3tACha3aWiMGXX5BjwhuJwEdVXtXquopbXGs5Jnomrthdbks6MytSd6ADs197PaMkogMFSn4AoZE",
  "key30": "21oFS6VufRHm6LbC9MK3SQBGyh7eXMJosQdzabjpLQXrM52XQvrr1bE6StE6Asvhk18ubXEyWWDeG6idS7vdJ5Jq",
  "key31": "3oy4UsEHLaaW4ed6Xq37ci8MGCWs1Lce4qAnVXFPWMV8Lxp7nHykny9xwCcFmHsRi5UxVqJnoXGY3scSenykRdye",
  "key32": "5vXf4APq8SFA39xv1KVytQuXL4ug7QwZLAKoQBV96cNxuNEinmTqT9QrUSMHi2cF8FDKc5tq2UD1R9TrwoKMFCgU",
  "key33": "4UXdJGRrLWdYRQQj948qLdgQ8GETLS5GaNgmWDPKyCKDAc31LAGyV2dVZkXKKRMkgC8msxmmYsRPTTc11o9mTnek",
  "key34": "e8HDnMZQnS8gvFEa3FMbpFamRJCeBfUMm4i1SopZc2YDeE5csQkbgA6f6mRVz62HeGHwnNBp6KNrRGaZsedqDML",
  "key35": "n2EmqN3PUtif31YKAW6Rnd6JiBEjtS26fxou9jCKjJRDeZQsSLMcB1fQF6XBYWPHhQ7zyYHNb2NP9esjqw9J5qo",
  "key36": "3n2jXRBSNX2sgagp2nSrd8L3hHPyk4qdbAyjBD48RtuvX7sVFS8vYW9piUxk6ur4JSyTC3i79t7Ddyy53ggHUv1e",
  "key37": "5CDLv77EdKeCpjKocULfdY46LfKrPNvMuu5ZKQULy7ySHfvoH5WWsFdHF2PcxqVjATKHsD8FuXYvoTeuHsiaGcZP",
  "key38": "bWH3f7gkzpMdMynGfB4QggiRQdJLXjqwQPbmckJAnrfAcPTPtDbhTBQpnSzaStsjc1oq8CLXtvQpsBfUBNKUrZv",
  "key39": "4UqFGgfpjWfWo23bK5H4985mZT8PUpVWjVgCg1XbMZ1RmPH9uPp8d41cNGmMpteandAwCy4GSAuv3MdNFoKmrMka",
  "key40": "5uVC94fVLrqkEg1g1bM4uJq8iUtkACPGX8dzQcNyJfoi2kWX71uTDcGxg8pFHQUj4sZjVC7PRxviQemxKT4791mr",
  "key41": "3L48Uqr53fDL9q6djpvQhA9BctcdNAaZXp1L6KuJ7RepNVe8DzNmxdcWT1kNHuDS3jLSxSoWd5qku25HqNtMi3T1"
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
