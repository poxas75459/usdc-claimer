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
    "3a1cZagu2KKByMFerttmHoaGAkTQxugYS5VLTG9qrYgy67JfTWqsuHbHLmLjgAGPZf5mC3VwrsvEbPYR8DQHUy9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67TMKaiqVSJC8DdxEU9QarLKo9juVU4zBeezt32tKByrF9rHAqmTpUc933Dpmdhpsi55Rn1WekaWVXRSyWtopXt2",
  "key1": "5eTDYcBZ4dA6Tt2pbpb7FoZutzXSUBpsPbjMRqBfZXmMQ36fChrenqVUZzEgYEvX1WEDFqBqYv6CcjRVZzWuao2c",
  "key2": "2RARNWnEg36vnvC3tEcwhqqhNT7iXKb5yXyiapFFR3utXgPuK2uC9h6npg91nTahaRPYFPp4BLhtmJqT582KJ9Wk",
  "key3": "4V8BT17tPEZp7cqPftmgLrQoGVdvLfEdgjYUFrsKdaJLdqVBYtAed2gmFkkZZa4iDaAuLhYB3GsaHisiG8FZKPmW",
  "key4": "5qpBS7ZmvsXNUJ4DVEQax5gNeeQ89bMoJHcS8y5q9gA6kiuPw9PWn1kiPwcxkzDJbodCULdQUCmpUR3S7vmTnhvr",
  "key5": "5CR4P8q9cELCwk3WGQTWmDDdyYeQ8r6W2a3vFpq5u7yRxAx3UpPWwYKdqVCDPNotrxKyoURiA2fjsSkRjinnesXa",
  "key6": "5bwgVxFrsxs668CmeWLUqLZ5WN5EDbbzDQr5MAkcpqu3md9tAv7ApYvkN5Wf5YfdJ2b8PnNeQjgSV4pmAcPvD9Lw",
  "key7": "5KV4yE5rACbLXHGXSBsT9fzBsridJCGz8DjUtAm3KhMNQ8izazsUY8wXmkUQZhDsF52u2S4efQ9YmmyLcgLm3z3q",
  "key8": "5wi1C4he328U9zYLYiRZNG3vmxK46WwiiqZbM6oXtgkhi49U8KV2yGM9A7ktaHW6bBoAKvbRwBsq1hYJ81nMDc9F",
  "key9": "34Kiavtv6X6u7HxSydn9sTWuv1phKAQx4Hxf5j5wRHtK2HoHwBWgqi4wuwZAxY5cYboyiyo5QfNPZvt8GdKD54x3",
  "key10": "5ZZ58wP2urKqURwg3UPCZXLdTSKmCKkgGRHXhZ2MXd1ctPMS2KpBZqfKkVDHd75Wb4McmBLnipNhY3BzphdHNTcg",
  "key11": "33mbwE6ZXdTmxxHh9ZpvLUjhcXyo3ViNwatCvY9RkSPpMmptSVmf9jeHtsNEgTYBRJ9f8TXpYLzg8X9QoPP5RK6p",
  "key12": "5SmAFzvvahogBwgY5pUb46xSp5vWsngoWpYMhk9nMfKe83ftbq4EPxCTZoCYBZ49xoub7y7Y6bFJVyPZGa58mhkj",
  "key13": "4K2apDSw53W17MsVWRjAkJ11DuiPsh87Y2gPyFmSse5MgZka5XCG8PpoCNwCVin9SCDy67bHAJHUCUEZbrxG5Ckj",
  "key14": "7NyghSzeE9NCfpCgsLUnKo9z2gttDT8rBzD69r8wZ43TS9nGgDnRsZ8qcHhMdLkRse8AW2XCCcipoGdMb8omUNr",
  "key15": "594FJKNTaEhn6ny4JB4d9dBFiJPik9fg4Bhure8Uxqv8fqAyePqG41wLxRjXVapV7ShrwobrgZzKYuf5izxNzHtP",
  "key16": "2ntZX9n8RGXFFhVV3RC2R6dqhhx1LEFPaWSCkgmvFBPkswPGXjpQ767sR8YT1YqoakQuhdVT5mnmvjRT5QwHXyZ9",
  "key17": "4jT4dYbfswS4nU6Y5wpLXT83cce89C6xYqNKBzZaHsuamQdrizMVarFD2Qfxic14vn1zaVoySFE45ipdQ8ZFF9cB",
  "key18": "5ohVndzsY3Lh9N1Go2WLwy55cX8VDberYoGnvs1QQiFYkeVxSnKn5ZoAKLw4afbPmZS1hGRApKwMqtQEBxpb4Pjc",
  "key19": "4uZ5dvfJajdW1S4Z7rvMkpNCxiPU6BDQkX29iBRnqhuRDUra7p4UhgcV4kRb1kK7AJhc7dmZZTvQ5njprEdZXhAE",
  "key20": "24qjT1TH3SoB57RMyMPv5LbZNdDmu25XWWhMjbxzDHobxVAawwREtGAcQQGJT3XmNGQKskRBzGUmaixuz2u7Bi13",
  "key21": "dHPHMekiwcWBE6PkCXQA4hJMHa2kcaskEYeQoFj4NnYqeSkjXx5dQBVum8jzsu9idW46kbLfBBLdinEGEcjbyPp",
  "key22": "mAgVC5NF6UgVUe6aqF5HxipGKwNUwAtngk5yQ26rZoccKDxuLkdCB6tEFUjz7CRj9Aev7SRSeUufKsrfR6LN65G",
  "key23": "HQm6faEz4d3XALo6WtDUa8BegvNxQj6AA3bB8tGQ4Gr4enhCkWv3eKJ5rbDzXYa6bJo8o6Bk6hS8CDsmaCEHkAB",
  "key24": "4s4ZQbxMnVN5LtHsn28YGRTWzTk2z6XnR7z1kL3Uko8TUjYrxhGVpVHg1LdNaFKjQiTPcsFTjoF8SrxhSVLmq9kM",
  "key25": "4gckvHYtrn5YQyjKojTH6CNmZD4rAuztKZRfuEDMMeN2Gr1h2a6KFTA59SiLb8To99hFpSMuUYGsNKYqi6E8jHsB",
  "key26": "4BtCmCRc2a8Rz1xHxgDtxCE8vjdN1LXwZMsC89vwnu2By21DW4YP3vYxULFK6UzXUJoxqNzaDEaGJZuPtUP6FFEF",
  "key27": "2sVXJBiG5jDd5WV8wTfNEmA1Fk2u6dE3yqLHZPRWrMjYwvq2kHp3icN7XGpx6m5ohaVyHZX1K46hHmLN8CobPFNm",
  "key28": "2DGbzmh6pV6mRPbc2uaYBMA1StZ1JpPJCK4GHPZcAXhxjo5nSD4jzZJprrpySXLS7yjjXKRx2BV3Whg7qFp4VRvC",
  "key29": "4pk3v7uzZieZb2uckbKJTWr6PNzA79fhTKzYxw1WMCT3VdeWFwfspLNsDJn1BjLLGtRqKbnNrWSuKqaGFnKoJPs7",
  "key30": "5qQB56gVVzdhNkMq8i3j4KhQEUq4z7dbTjrXHYvUrPZxGUtHS84ZZ8f5xN6BwAR8AL5ShnuMjoGcdVsV53GkPMjb",
  "key31": "4Q8wBYLhuWfBY5WoE1XbXmPiA5xxZikbya6VyeYEQSorq7qGmpJGB63nDHDD4cWCNPs4zx23KxEEnZK4z9rFEapD",
  "key32": "2yNWiHh38BHkUBsQEFvm8r2TvuBV9J9Z4ZV1K1Gk7hxydGz6PQeTX7JUXcBHHsYnb4Z8y19NHgbzNRhxZKVzDw16",
  "key33": "gLhZkavtPHsrgwtvwaHEqZS69ZLZSWNQy97NmBBadugpPbQCsxPboVjkbiMk2C9WeDVjbjfM3XeNXybxqVqzn9Z",
  "key34": "2tB4N34mjhnzaArLgFQY7Xwtq2xNrLEuXxmZZvvNFrohsF1pXW8jWuHSb7swvSMzXZbkzF37Jwoc2bc42E2a8CHL",
  "key35": "3nRE1bSx8w6mhEAp5sHoxXqiCYssxwGZsRquycuZYJmBZtoYft75GXdmwen6NSSCRhSFZ7QcNJ1Wkt5HZQ2ezsXS",
  "key36": "2pXT7d3TMfATVdkL98RRbeWxNDtdbTMiYDsjrMjqLXKrEyDsyRuXbwt1eGiaWs4qhpL28k7tm8D7192UiBPhGG3",
  "key37": "39QQZAmygMyjqeanYg1WKWqH2Qux6Xj71Wyzqmtvnys1uuBbZ9Lx9qTqpYfCECqGj2nZN1gq1jQYQ6Pt2VePP1fT",
  "key38": "2K9iBrki56NsCzLNdckERED5Ef5RWwfKF9pFQVomYyDz25Aqvz8juWhWzCjw4gBkwXMYgHG9TJp4vfQg1KytXcrm",
  "key39": "Y3ra3cSn57AYACM4ayCfoxi9Pw58qiXgDcsVdXiLQSBB2Xe8WhzZnKt21xWuvuPyzgfVdcqpqnbm7WWgX9PQT5t",
  "key40": "3YsZL91DN4zSNYq8JEk7VCFvGN33ZKtHiL5Z8RALudTz9bfVG1EQ26Tokbp475CT6dJqK7vfXg4EEzWwk32QvsGb",
  "key41": "rZYzXXVXFdX2GLLFhuQmyR4GocW4KiN5R4zpBhqxrsfQTUNJY2hQLEgKyFYRb1rUKh7pHHC6U3kZxkHrHSGzKCD"
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
