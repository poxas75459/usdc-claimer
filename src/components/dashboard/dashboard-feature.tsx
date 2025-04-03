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
    "n7LvP3aVbwFXfPDhzrM3YTKJMQPutHXqwonFsUGhKowRdqUhnZkLqBsXjCTArEU9Ykox7RDQZVsy8L5WPuBDobS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rXHeVZTCdsKfaNCgr5gZccVoTruNLkoLMNbyMNKqDgqfmhC2aGNHygNaD2NhKxY1AnrBkCbYsxruUzvdFa3VX12",
  "key1": "3tpj18NmUWYVRx9iYf82FcZWxyVcdssf45StJvWT7rJ1ZeaXMSnsWmdasmkRmVuq3gSSKjbukTFKVrgEQuHkpiFj",
  "key2": "5GV8gN6DWto8v8WUBVC1QFYUssWG96nYqsVXX6WrJJk6MFR9cMPv1kk9rPAquyKZi3mxne3gQgE3Zc7hgEgGK3MK",
  "key3": "34FhaSAbuV4ggb4W85MMbV93rWuAne6tGdmTNcqtpqMkbPxQeAXuEzUmtgksTMDw71gcR2mquc2DN9yxFHha8TJ5",
  "key4": "1PYKRnqtjLNCXn8VCyfgrwyPRgDmfa7zKgweDxnVxzK6sYNAgqmVGFiTy3wdqCNXQ8UcCUSro1G1WkwuBjgu6Y6",
  "key5": "2DiMdRwgNnbdjyDYmMJLsWkQRyQotLEcqxevWwNMUoGCSQiigYv4iBwjrcGQ9rF9BF7H7vJeVLr2cHF63BADbbvo",
  "key6": "55z7bj8XYDek8fQJhLbPhjdjs6GFKHVvngWuFdhqtutaBjSauFzzRve4oTBBzZZZuyRmB2fDBghYvUNZFMMVhe4U",
  "key7": "4piJai1oJitWTDftRjP9J8usoAvKAAMawVx8861QgfwkkQ9mWqptY6DVD7nA5bjy1bEgaxTfpsAMWCA2cW2wZRKc",
  "key8": "3S4nMsgmBWGVJhxC2HcDXvshXkWjGyU2AKaChTNnbmFs2RrkARK6XKQFPRpH1gR9XbKNEdtdHQZhVT596HNHg1PK",
  "key9": "2ahoVjuAW9Xa28Krjg5h9SUKCkQeZmds9W7fXmyppLpsnFG6QwTYbDZpTdFfGz82x56VexzakDw7FwWDPLndRN3T",
  "key10": "wZ6NKh82KPtBuraeMbLBA75mE6EEXt77HDVS5jK9mSdadGNYcbEaoEEFxTjNnLZygKDGpgGNaDDq8nDNVbvyFH5",
  "key11": "3C2j1TLFqzrV2gaG6cA4Qcv34G6V6t9MYEiYcXZRT6XsXwqnQywV7LvMLM2pRVK3pC4vYqhY2eNNZtihkijCMPEq",
  "key12": "2YwezMNCEoczSiXsBszyYDEqjFH67nhrmogCtsUS4wSkLptLh2dLyYmjjh5W3ts2kEaTM7zJocXdDepNv5ZYLVtc",
  "key13": "2qqpW1PRGwpUAPyJYkWLCoq9cz9UZXDEUYsBvNxzSGPBuoUhpSfy5CemcfxohVK2GKc17nQ2G9hgPGSdFyNtrMd3",
  "key14": "5xnMrdE77C6JUbFLBnMBDm2ystHfojewcZefuGkKmyaiscz9jSHxRHoqTgC33N9GeZU3EgzF2fabHBrF2ntzEdDT",
  "key15": "3hbBiy8Tkxq5VusqzUCKyfGvAaNGt8JfAZ2hNqGdcZvRPf8UFr5YrSZaAcNbuuiphW9PCFuGtyWpkid9xmKoGtxF",
  "key16": "3VJMri3LbDLTyNJNWJT9GWhXg8DE6CTXDrFKbEM2o8JhbwrmUdheNB1spboLm1wYGrG36R47JHc1NCWrysNgYz3K",
  "key17": "NsUQbxkpLWer9GDtHcNKiw2y685rfWfBbmbw28tchix1rRHFLyhMnzY5ScNaSC8RpMsVm5JaaCiHNpDVKjjbeMs",
  "key18": "C7htpqfAErQbEeJYaZYtVRrNpq3NhWLgeP7zyx4qs5bdhJgKVdC7VQkqJaxK9yhnunABLsXdRzWTxWpsNfSbMAm",
  "key19": "3TatR93BJMWMz5yeKvojcf4sJfpoKj2tmqBMfW5FyAZtCYTyDvUSpj6PF6UumBSxRBXiEi7DEXD66cpgmXjQEGU3",
  "key20": "sXfSc5pwuhPVATrFoEUjeZaSSyAhJGJKM4pGwWogDaFaYFGdkkCr1j1gvmWFqT9B66zyNJ7L4CnvsdrC45o8D6L",
  "key21": "TBXwP91qKmfc6hTXDr2W8U4jNKo9Y9DU9gHPfGZRxw1X1k9d9kkmu8BDkavKJ3c4QNtMbU4hYyC5e5QqzzvNW2H",
  "key22": "GB6zy85cZ6Vsk5U2YMyAXgW7eWVLBuMHcfJJWLbb2XLhQwcM8jBH8WsGNVGKuGw8EU6CXVGViFeR5xWWuc2kq6b",
  "key23": "3sUMeRJ1tjRchhUHngByWESjRruyfupfXfBysztrp4Gkcvq5GKMqRjNzNEnP5YPvf3zFw29xMCjTPoqTyD5Hr3BJ",
  "key24": "2d6M1er3vYRrXMoc59YJv5BVianF8tqnM5GBV9mSdwE9Nkc7yQ6ubdK3daS29mrkcbiCU52UgTBGTVbdYTaV5hja",
  "key25": "nm8XCZ6qaY3Lrqjtz4EiNAMnMPp9NRqgRPs4q1BaLR1gaHWd16GEtrPJ62dEWzp1ULW1TgC9FU6pYoqd8fcijuh",
  "key26": "5v6j8rjg8GVPbxSBzZUvKAmUQoQQERkMpHhruQ3K63ALqRrEPWVmXHpZ15ivYzVzheYMRzZrt35yJ55SeNwXwG2x",
  "key27": "2gLAhjoDjcqs9nJ3jwq7uZdYfgUXMQNZKMfoWF46pD9BK7HzfjBCiHvRDJkATMewDjGL2Mt8SddP2T2eLoA489Bq",
  "key28": "56esvdrmCNd8AL7Caf5tVfy6zdLYT1qpb3dbmsRsVZGfw3zoWKfoZ5e725z4U2FeRSoDc4aUYYnX5Gv1Wbx1LApJ",
  "key29": "3ejSkmQfyCmFrmA8MZyT6ZEFD3NJkUDBH9MGK3Ki6UEVZyXtPo9FsgQv8n2Mvzf8j5WbwXrL67DDCsSs3wW9qbKK",
  "key30": "3mtxEs8oeQ7BueZ83HNPZ5gAW6cA7g8vfW14TvjRzZUGQeCWUjmhCcUkUZrhJYrQ9kMDgmStt43Zk2ZTnG21SrAC",
  "key31": "3AqPT5HeWBmnCQhrKGUrf28kpFpgULF8ph6h4a9Yy78pCP8mKa3jFfMut85fAPbrtTaVFX6G4aMfF4SE4Lio7cWW",
  "key32": "CdSfiDVyxSCKpcWkSGYRzNV2WrYXHHUnQS8YWRqB5UkixKv75QDGWvN2TBneVbqss2anmAZDuHZacn3qm2xEXjL",
  "key33": "2Czf43gb5Q7JUnc5pQo5MJvmRrkZg7fc8PEX3mdtEyMP4BByNS5J4Rou65aLmvipvB2MuXeFcaeEPkxDzxzhW38j"
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
