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
    "4DsQfk8HpuqcFBMRPm7agDP1ETShN74tzstoaFTEVVMCNpJvaR3aeJEZhHRYY35Lg1KRoqhBNhwq2QXYpGWLkhPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CXSs1mQSwgUfxNGtgH9qE4QB9S5LZqBhsoTMxZdCXhZJAGEXEHXoyG9EfSFgzKz9qoXSKH1EEnMV671DGviiuoB",
  "key1": "3YYkbFYaRn3YgNtsdSgvVEGajdcWGd7SWEMr1sf76b9XX72TLK8ATug7YxLyuU2nHhDiymhiiQKFvDzXYZ2twHJN",
  "key2": "2v3y93gQ8c9rfTt9gTeSXEWQHHoD4w38UsXwurQGvKNCZAfEwMZ7SdLTkH5fusNnfDsmZ8Ev1iDymfi6g3q9WLh8",
  "key3": "5HZeYQotQSe7jNtoWj8XZoNZTe6dkFPJXG2P2H8aCn44C3MnZdMMQwEKRdQjBBZi7J22Vhne8j5w8CHk8UgxBdi4",
  "key4": "Fy75RRngWx5BsZKypGi1Rr4gRHs7fS5ZT4GcXW3q8zRnDNW8YqocuCuQUprc3btWcxcg4RUvMonEdQy4GqusLXM",
  "key5": "5D1LSszUCskSiQnzYSvkgsLJ3Xbpm4VqzVAJQ9SH4uonF6sdqiEsSvWGexajscmht76Dh9W1oD7ihbeR15qJf4Eg",
  "key6": "3EkoZc7nacfUgiHzR4Wn8TZPFWrD9h4Bze1JSZP6yqfRszMZD4JTmJvAnHjwjdfQpdPQc1Ex9wJJ38yNEgpSeYFQ",
  "key7": "5YTKJpP8KvRNjUkhfPirTvLxCHZiSv39kLEQJDchSDt4NyVmLVCrKtSWTnCgwpu7atxdMPSnne2sfX4uLGCrWSqV",
  "key8": "4VCQtU3tMd1ohtj6R1qRWgivNJ24GbjeccrEZFxGTvaDkyb1Z22m8kDEiNHeDAc9Mg5dfWc3DzdkPYjzV4KHvKkN",
  "key9": "5NZEbMm1WGNmpt5j2PAzKhSSNXJFouAQuCH7U99DaX388gAsgZjrnHhxv8885sXArYYSSxhE12QqQnHVYPEG2UaH",
  "key10": "4Xfaubg5PiHdL4kjYSQbE9CNhmAce6SVwHTjFFiovTeVwGyFsYCCvquX8awz96aviS94EKHb9cpnpf8uXL27746N",
  "key11": "4FwNnV73SAppwq2SK3ZPKViKF6UKdaGDMfk6VgWqKfumyh3xqhi1wxvWgyq6y47GLo2ZksHUpBADiMmrogg6gctR",
  "key12": "keaKpcBgCJjoB5TW2fcaSKaA88utNCqShhJR5wqAYRnZVY1MpWyJSGJVgEVtSvcn2Ajt6ZQibyZe6uPjwG2vVJH",
  "key13": "4o6J6dR7UjcymT3RKdW5tEpvHgJB82Axk6KKQsbKQAfR6Tq2KyyeyHjPomAoMXgD9fzz88N6PDm1NBsiRaHWWqc5",
  "key14": "eqPNQ2ZNtMjiju9dpudSPxPkwUQKU7pwB199eKSETMkpGJJLi4aAn5uVuwQ1HD9m7MkmDrkhQS2qFTnb4NL1AkY",
  "key15": "42DStpTMAaU9R5EqPSA1ot8cbaJvw2fpZ5uxe86W8RfErYjnV3moUUQMgQwBxM7d1CnsvG27hchuLkbGaGEmWTM4",
  "key16": "5inyTSyqq2GSnoouUNg8yZpNRJooZfpixf9myjnUJPjdw4fxYsaMCt5XjkK6Lm7CQXZz1wEqUFxznVvoDeFHvEsb",
  "key17": "2bCo2HMaLBqq69JmTQz1AC1dtAB5s9QCiwzYcTn38YZDNvL1wPE8fhpEG4GVjUchr7xhsvVfg7Vci1jDw4K6NCAt",
  "key18": "4KVTu2cqVbFQLdHmhJ3gVY4KCzRaCxsAoD1f9z2vJRYRT3QZkBsrmP7dFCjDS5Q3fqbKp2MwDzVZTdZbTdoZUS3o",
  "key19": "jucTGo7k86c15SeUkaJVCNsFffuhvkjh8bDG7CbFVzcGGgUhutQGPptoVz9ZWfuEJJGJgnRedh2L7brDwo9Mzbe",
  "key20": "3HmCj16LukWCyyvXk1Qbw8SGAcUHuC8Btv4ACHw7Gc5r6sPVSeQ8nd7CpGTDhL2Agdr9Q5ULXkkqALeBdk9VanpZ",
  "key21": "2kxG6jhNmz4w5ijfPjgk4QgcAkSd8QVSPo63BHd3ShLcHvfRdhPDQ7uhXDjFTpgDvVvqyDFPqdbb2Evth1VzD3a3",
  "key22": "T2aMDQjnmXVLeX1XQZMTTJquyinYK9B189tAwdnrpJ5KENaHSt4JUizhPuEXgPybrqS9iffgnFvTDny1M1XeaWJ",
  "key23": "3V5qJpMxE3CfzdTit2MkTLQTthWevXtDG2Gh92YQw3EMwhtDRC711TqTUfukb7SG8qMpwNRGWN462oi3TtjHbRoC",
  "key24": "2b3adsjY5t46hH8oNJFV3gg7uN8qBnRBcYnkWxAsRn1TG67hdcyK9EA3Yzg2Ffb9dykqnfwe2F5AsVken5uFFMaK",
  "key25": "2Ev3QLnsaxGPbYSdwwGo8fapifHUimzzFL7eEwQxzDxaRRSaojBhDF6TPsshTSNQDATEhSV8TTTHkzMaoxhR26CS",
  "key26": "2BnMWFrqQx5xWzqQN6NDEnkER91WaKMayfBrFXxSmLLRD6R1bGzyEeG3rRs2s8gVYGSxADr2XNE3metNXbaKVZ94",
  "key27": "3oM1UAS4zA8Dq6Pexkpvt1yM42Xu9UFNXvQ189ALdbnE1zvvqNM4YMtMyqX9ZsK7UkLhGtPLepWNpTBqHMHCGjqR",
  "key28": "38sSSTfJ3KfDkB1b3U7HYt1sKeHQYnR51SbK9zZwMaRXbAszcmN7wxSZvKwLWZn3w4mTmgEjpaZeUwUkJi9fKe69",
  "key29": "2HVuWCpgBwnp1sz2ZpBAMrZsysM6WQXZMjBoa8sSYjVzuPMX8WexAKkF5yQmLGmhKueRMiU8s3MPrTtRWhDDsozU",
  "key30": "2vMZsz1455cUaAVFJ1BVJnvxLaCvgUBYoun8L2kY5qytNFqf2T1Zf5CuP3if3xTqzVZwYiFdcXekWb2dxgjNv5Ys",
  "key31": "3i8GCDwGZ2BidFte7WUtMXY1JEnUJxMbLmJe9iySaDMibGVMeNAQstHZbVYpZEP4stgMHab8HQXe5b5GtNSbajmH",
  "key32": "5pFRVV8bRkRNYGfankLa1KLBDEU41kk27TMRLuBWAmNQoZiGqZkmJDNPmeF34e2zfdGRswNaBbR1LhNkifD9fzzc",
  "key33": "5fgSxhhafuWzwMJhhVTEbPmF7k5pJdGDAx4kVnKW6cmYa7KpK8VCaqi4ZEfRU9PDaxoARZu1357HutorqsvCSHu5",
  "key34": "4up59ySXFjbRZFdjhSPKK6aeKT7mNqPdaGMzA6ieHHonrw5Q3dAGUdBCZ4e4P5FuBNjroCqZ3GxnmuTVS3rEyDMp"
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
