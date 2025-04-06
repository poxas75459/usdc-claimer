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
    "5M4s9nK1Mp4BpBv8NKgvxxXH5YA8tUwX8cLWHj8E4Jripabf7PyYwqVZphzZQAs6GBjrr8tLMcZnowrYzSBWdXNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h6jdXvgFj5yBPzhP2yMr9gdyYb4xwmZpUWC4JsHqSEmTL8w1YEeLidk8BV6yBXnWDXhrFUGUUu9cM7KMfaJuTVj",
  "key1": "5Zd6WPtUmGFaBb78dBpLBzRa5dxoc2WnwGw9Hs5i2vKMnmTB7oXehWhCoYPwP66Zd2wbxnC43azYsn1rXcnFrSd",
  "key2": "2SJYvDCXJM9u5Bxdt8dCbVgkG2CHUuSCoMWmvnbVdCrWqhCEXfnn18dLhUT6FaJ5hnSuZ2zoJDkVFAQPKGfAXJ3W",
  "key3": "29TB6A1M9t2bc81dFCTZ1vR6irMdkuB3KeSSBf38Wnobc9Hf9AxXc4yTeR1VCXfppizDvvDVvFRAP99zGJMJFipg",
  "key4": "4SBMDRAMquZLDovJh24Wm84cJDgrYiebkST8jebYAvXfFJxTSXVwDhz5sqJ4azQu3ju43xLYtLMzQU5XWb5vJZ2J",
  "key5": "hYTWbuvQRj9BzpUVqhzQFAtvF1mXoDBtvJLVK8E2jvuqhu2BjBNfi7KFBirubwgbJ8tmRxawAgPprZayHnX33Hk",
  "key6": "44FNRxYgtYuNh4Povsz8oTk1QDQLQBxTtKjmzByq9add6i74k4K9jD3swKNWs7FsP7skSFkHLZx4bSxYMJ8pmXEP",
  "key7": "4m92H8rxncC8B6GzxCFaUM1DdMCr5dsx3sFivbzJCbcKyPY411ErKecY4m18PLgx6Fcs4hkhdf5DjpLf9mc1SF8v",
  "key8": "4SMA3f5B5wNUSc5fKVcZY6VGMMFptUpe8dNUbcJnha6aY4tehMw4eE5hPe25xDk4w2emS4AEZ6ozpjZQXHJVuF1w",
  "key9": "4N5srzQJNkP7tfEjUBCkMsf1sckW4UCZBezmyeuS2GRtdVZzkmGLZ8YAzXhYWXAj1ZrzvHNx73fcBgXaeSYvKa91",
  "key10": "2WxXR3xSB67wLuDs5gu9iEPZDsoxMrqEnEuggDzebAxG991kpwujMUMmb4skW15kcWuvgqYt4qmqkCpgVeJEx5R7",
  "key11": "5jF1m2rT3qftEeeWSfMWCEKioYygz4oZg7d8WwjhbM968x2BXRnodQLWZyf7wzYC7G1h9YzphFGykrhBHQAV16JV",
  "key12": "3fouMj9F4QBvZuLmPsHJysXfH4VcNkFZApLz2hi9HaPnhUz3XsNPMxJC1NYd9qxjxq9TNgvvzmNzFgTQE7Ha2F8e",
  "key13": "5rVhTPfWXv7o5kpR3KqKgz8bbyAHugGT878jY8dmENeNewb6okpgyUMjqk6M7EKhp3QbUc17izoWZPAwrtgdBmhW",
  "key14": "4cocUMZNfTeJeW92dCRGZZ2MdHKipAegMYNmJ8YUQm1ekuMKUHkoXGVnHFANmXdGB5DTxZnTuemtHRjYc1qycm1v",
  "key15": "a6GG8oowHC3SrAsXrp8K8vQ4nQr2af8ZnjcKPoofn9JfVgxDABm7LWeCnP9F4NWdf29A4d7ipo6PQq5QZwiCVvE",
  "key16": "48LngYuRrA9K1x2TovXvr78Uj8UYRLThpbeQWwikqRFPpb3Mrg4wcuwfdfWYHJtm72K5kjNG6GnnCiSWgMaFYiLD",
  "key17": "3STznztMvYooD1xxiAHd1jbiEuZdfjhYTJpHqDQff5gVqeEfxzKHK7JBeekBb9V7onnLraxstdg1F7sMcnAVnb7y",
  "key18": "58H9JRfcBmsP86aTj3DJ6YWGYXHsQhyzF6yjqshJwGKGuEyUScvUkrhtUWvMA6FmUXxAk6q9TzsM6kGjP15ecSSt",
  "key19": "4hXnbrPcox52kRmsqs8fU4b5uieaXXeUDeH5ZwxAAwWzPYgAis63QyTnJaxR9DTsh9qybvwmUWob6tu1euW7BCqK",
  "key20": "5jj3TuH4eSyonMhssAMPYiCJSedWf9f2bP9P2R6qtR6HJJPdHQUitVHZRsxP7sXySNDsUZR1MCmbYAMjraqfvQVd",
  "key21": "4WL6GsnqXvYbMySYn8AfHEfbg3SredVUwS7CLdYwku9KXvQENLHuVBLgPtwm6HcG7uMwtQQgKAWJg1yLZXQR3P28",
  "key22": "2KrnnjR3FhpdT7to1SzMdRQxU9b38vFs1y5WQdUsuyaJJ5aurxxeGZYSvW8XTKndGM3mP8qPsCcS2DEG8DiVE95Z",
  "key23": "3K7wGXBdH9upWYsUTAG4be1z1RJRqrgfUK3H5EsKhVWuGU2qeKPHw5wAqHhrfmWmN5mRVDEkTGXHvBzX4uPyWhKY",
  "key24": "4Dp8tafYsQvpS52wNVHWTWc9xLo7DUvteNpEXkRKRm4aJY1pHWygwSGWsSokie7a1E98gfM1LZLSjAgU2X8G2bfu",
  "key25": "4ccdKCyLFxxF6J2SDTZyTrDsV2MiC2CeP1uTQsAApPopcsgt9erZYi4FtQg2h3zfmYRQyfZoPZwgJJv3qZKWaUGP",
  "key26": "sewS6WSQ3sMfmEZBZBBsQYfs5QpWiTS5yFeBydbBBPWrSqaLJNfgpsUxwaeeFCatJrDE9TCwwhJz2QgYqUAvQKD",
  "key27": "4kFrkCH8rkha77Wauj1GsHPM74ab9UmLTUuaBsUPixrUbxTdqVsTzLyFKY3gur7PCyeNTeBDufyEmgqVcf5LAn1B",
  "key28": "4JfiETxpnfDpnfuTytUTjbfpCHoTXKXBkiqvoFS7WSuWeANaqisieCoUfsMhtzpa5MNCcBzzfSrwLQLVaj9spJcn",
  "key29": "2yhBvNeF2ac68MDtyugzn1vzDoPDM1oAUzntxwcU81giLuw9zGoW11jov8KBBwB1CRxw1xAxt9qxdasT4Z3cdRRD",
  "key30": "51Z7MwS9eVfJBeVTN8p5ZjR12cPnXaMxPJt3DtuMpYpi2vaVb5E8rWkuzNsQV6d57rmrMiaWttNzk1AJV8zfqxrH",
  "key31": "4GaLURtFxqd7ifnAV8kK8RxhAEefRqkFdf6iPQT8qc1KcakJeMBXjMMZxXmMjZdaJvF5Q9mGGRS3nuJmFeKP11wa",
  "key32": "4Z8PRJJU6iUq4AoB9zffjUJYDbi2j2iiGnuu6ixaNLf6Z315G8P5tdD6npK2DsdiWcdRct4k58dgZFTKkvM585Xa",
  "key33": "2eT1JCtNGXmEzLzAkVxLeF7GxDfaRCeBd2mwViZCs1Txk9vQfGsd9UEetpgonJuY5ucN7FVJ65JqS4hnets1kek2",
  "key34": "ay5nxobS5wVnb4tjcdK3rWh3PTUWm7Y9ZcX9YF23CFwyysDF5ie63sh6sn4kr9X9Ry1W8w1fRtm5h5dg22UuEB6",
  "key35": "3nV3H1GwQTyEk1RUJhWz9XtyTHiZ2SRYpxcU4Qe5tfPx7TiYQuCa4RcbeW6ja186CsN1GQHUWDgQ9UZpuacMP4iB",
  "key36": "wj5zixYN5j8GZKRGMwEQ5RxdtJbkpgMjC17kKHW1bHLEdCtq6mLNa1ViRRzTAYwqq6JBLwc8R2mE5VDzYiPG5AX",
  "key37": "5wQ5Aj2CibDNCsVask6bmi5jMVfDcCndLT1xhMYxXjVc17QM55mevPiJ6EtrSe9yUgS5mtM7QJ9SAadgMPSrFyQS",
  "key38": "3JqX7wSPzEhoiGe69m2p7neFVCRaowCDHnxUE4pjDCQkwmy3oZb1CqWSf25XUpzYzG11whuPHrJYMhvmNSKmwcDH",
  "key39": "5MZ1DprSk8Bg3Resmy6jzKX1mTUvHF1Wp72CQVFvHD1EDa3wBUBancVHzmbjA2kKUust9QtGDNX8H2Vm7bDjTti9"
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
