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
    "54Qo5qJpeaUQeGxxHUC7eJAiFhiDmhasGzE4ochvcoTKbSyYX3uv4xfFTZAtVfcCsV11BgCqhasu1uDX1RiZkfHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FpGr3fiuLv8xZRb9CL7b6NmADuipPx6YcXTxA8wi3DWoJP5UayWLebYg4xDhb9pF8beZVZkHgQB7JaFfq7njA99",
  "key1": "5WghCBY4c5r9CHMrWWf6VdvaSnmY3mYmVyi9YDhfkWjNrs7NhQV7UBfsvJD1Zqt5jDhVTCbdXbMHpmvjqjEMMR1g",
  "key2": "5UyZ6gWQ7wno4MGjaL6tFfsyCb7z6XjvCuzzELnKTq3LkME6uTjsmgWFSGXYPzwAzoHKdqcQD7Mq1rCwcuNbRVi",
  "key3": "9DkxtfRGnMhrpLbsmG6jRPto3y12FMHmpafH9b1t4PJ6MAvDofn7cB7AvGDq58FzEHJjBjEwLBHqvQVgnPkvrJe",
  "key4": "EHsUMWvzK467pH8EXWhGek7PWCuAQQEhBKQxrL2Wm8umNYVQhtyhgZL33ke5wioYdyvEaDZTKj3v7uMB7st1HNj",
  "key5": "2nffPpaswfZTX2vhCfsFRXtAEuKaUwKMiSgUa5AUu8JcMqfejdWDATR58GWxCB3YGfQwHiSaohsH7u7o9tT732my",
  "key6": "2VEQs6v26Q6s8rtjvHhFKoq4ThvFAm2nJ9PLpHNwMJEjgdBtjWnnMhL9NHqNaAXHrHWs5nkQ5QLtCyvYguwEm4PH",
  "key7": "3WFxkm2MEi39caHbajLMm3TDtvEgS2hSqMCxnj2okYPzzC4FCsBZvFoM8r3MZVSU89ALsL1jMc6m317mZMGMt1Qo",
  "key8": "pyRqCCTMP348XJ9mhYfrb3Bisz7oCDsdweHJ7LnvTnRBC6fhDB2owQFQpzEwuFrtAKbyif75MX7kmKJYrP3NydH",
  "key9": "56ytEXJFDxkJTw1gkbMiX6QJFkq2KetNUBy9VhEC6Hzmi6rJdDSYqkucD3thqsunZcbHZ719buCgLqaMgVbWrKat",
  "key10": "ME4YrDkxV7Uh59K6ysjds731NsM7BmkncAuxe1Pnp5LPkLYdn5Bw2s8GXixS5oDAaeUQDnhB3MeRkjrBcC4cGcb",
  "key11": "3HZqyALdPHuih8dxTUempjZft2BHLuQ5Nco6hHCh5ZztVNCJav1uQ4rJPYnLUGpoz5Rz5ahxA6NHCEQSRJd6YyoY",
  "key12": "2LtWib8kH7XrX1wbg9LPADTb2WVPgr5taqcZQ732jTbW1iCiD3P8YmobSnsQnsoTeevYTPaLKiXAH8c8sdEgd2MK",
  "key13": "61LFsQa3Ept7PAUdByhP1aeTAmkp7nHfzMkuoc2AK6wmmwuJ5aHHSsHrBR9EtKdAR6aiMHreMeRZox3AdFWaRWu8",
  "key14": "KcY7x7dq4WbLwALuLuphH7NwdiTUtDt4QFZuZXATqaiSstpc5Dxn8ZUpCF8o8GfEw2qhZYBY2QqGxqYi5Esbk18",
  "key15": "hSjT2Mu51bBQtF51r7DomV3BU3cn5UGcj13LDJZAqcEKvCrunKWLqUAjTtEG7jz6EMAMBFygYG3y4bzK89tzUsw",
  "key16": "323cJn9Y9MbMSWfzy4TXM9sUGSPRSjF6wDfju4nzZJE24qGxs4Sm1dUy4j2mvnQCGxmMvxvjzgtFhJ3f3yMP4RBj",
  "key17": "3k9diEDvkyHE4HJbEFxqQCFfeFfwTLSNXkuBQ9RtHMPULERZshrVLSeFPXxAM7mkU3xUbbTgEsP7a7HCQ1RRt1fh",
  "key18": "2a7vgNjNbpFeJA8zfeRxobqbJrfJSS4qRmrS4yz9EhwGA8VsGc7ScPByKFZCGHQ1au5c3qLVNgz7gMdpBE3NMnRA",
  "key19": "2eFzwefiPQaJBhAxrkPcokfbBT9FzLxyDeuKpFwu4ecygHWo3dV6YfuEoEurmYgmBM8gcBXjm9JGvieU9xtMEcam",
  "key20": "5VnA9HxHhCD3EEGSf5pp1MhjNxMXVLHVaZPwpgWMfBqUk3JDYhxusXzsSybYZiYP8xsScEoXRZxpeCqjJbzc8vb1",
  "key21": "4Sf8rtu68bte3Lcrh2szjvGmP93XeZeM9BKWHWCewfx8kayKefPYgBsm4T7mnrgiGXseSVSMD58L92xHzEKHeaxM",
  "key22": "47jyHNbegbYD2VSy3uobryfBk44tsj8CCgrHSPAHZxpknmNbsr4uKpx2ePZU6VMY9ZGAqEogy3KeSGaL5btao7Ms",
  "key23": "56y6m7KXFUQ4QJBbQBq4xQxGn5ZEpo7a9mhX1PNE7Pmxg25KbiBfyL2MDj26rj4VG86VgsnVoNQBzivXCNzMQSmL",
  "key24": "62ff32GtCFgZbFPhJpMfMz4YFWgowkQvm1uNCDrkdVjABp6BbyxJua2x5xHDVGSM4pXg4oyXAw5px2PrW47XuZLZ",
  "key25": "2ASdBwkuGc46tiwUen1xx7C9u6X5ntvys8yBqZ56e3ibpwkZkNNdA6ZZwCCmQc1GffwniwvnBBjGyeW8ieVzt9HE",
  "key26": "5X4dFXnXVi6WNPPjbReyvKd5oW923NhmJ953SuLnBZ4XxqCSZx8YLuzqPov17qifUXVs83jjRypWdDytVbjxM4gL",
  "key27": "3a1KCfveR4berj7yRqjFh4nyC2WzwcwCCqQZcifbdXSXWaW4G9eGyVRN7Lna88b6BmUe49FZWjRM31d78FJzeA5M",
  "key28": "3FzjtJ9w8xT755PWBs2wumsJC4LTmuo7tLvwh2ES8w7wa3q58SkhxuNumguJK5BYEnboQttTfWg3NHgEweUxsEPi",
  "key29": "4nDBTixgULU3F1dHgf7sZDBBtAUXwGbMGk3L4MazaYz2ahiMk98gKNEoNKGWWen7wfwXh4U9toLAyq3sTaKKkzEM",
  "key30": "2ab371RBa5c61xEqixZdrGvWnMLEH7C3TZ1qQvrgqHkuiEWHrXmzqi5VyLGr2CAtoonorrKtfM7ppnUo88yF1evP",
  "key31": "4yU98nQKkuHv7sSrMaGuXNu8JWSrWMqxxFSCC5GKQiPS9BiSE5RT6M7GAytxfpkKWLn2iUFZvHNV84rwWVfeyrCw",
  "key32": "5dF5u8y2ytUF3dt9uiahD5Xi1TqBnrghUJLzxpiMqDx6m73Hf1eiKYLXbi9thSoPh8WwmNnycPTxSmZF8aFksDc1",
  "key33": "4NrKPphRXZaUBJhbh6cztFm65z5AcZPGMW9BM4ivbUVEF9VUmAK7C5JoAYQTttMYQJQRdfcBNzkAcqAak2FUxHBQ",
  "key34": "4DEbTYn2ovCQbSMGyyPStoPY9LFnvRfhdt2hQUbJhz53pL22UzZ4YQmZ3Bg8RSq9z8RVjtLkGsexqEGUrWZm1gjq",
  "key35": "oEbkztXBWdxtjrEMXsqwwWmU6uvkECW5yUwtro8N1UBbyYDwPe5dC6SgUv7YrtFeYv6b7rP4umG4h89NJHhQR4i",
  "key36": "3yqPUYfvoaCZiuyVpi3H9FAMum6gdfrw4yRHVPR5LfymSp4nejJoVNPXoPnYAbDSDhkimyfvExeonKeX1psbMDBc",
  "key37": "4rTM3FUNzE6LzVpJmE4uLMLZ3idGkasoBNoS9xWUVwXdzSjW9uxHRwne43d27Zt2Q6SxSJ8e83HvBMZD2YiMkttm",
  "key38": "4QZBemK8xvyqz8P1BraAjwkX3CE2prMorEqPGjDA8cyzrTTNRtU5pMQE1n9WqsT5UMFzyjoXJPFzvG19NZvfHq1m",
  "key39": "4dKV2yYpuDFnEWVjpZTw5G8yQ3j2N44EoeDydma8bmFvwycbQSEP9emJz9GnfnZmRBMDVmttsUH2GxZ3JjvdXffJ",
  "key40": "2hikasGY6CEiZPSVuAW44bbuWZ8wHo35NdKfqn1BZoi9zoWYm5x7bg8F9HYrWL7N4ceBvzsM4fCHC5KkAmCWJa2N",
  "key41": "3YJiTrQYhi8eb6hVZwas5NcdxaGmFyqnYbjWuXc5Kg9iM1XaxFq4bdnxDZtasQDLdTrbKFLHNWupaEydVdbS9v6u",
  "key42": "5qMiXXktcbzVmdbutKdQmESmDY4yDgHhqnopYpmJaZAHHqyzJ8okKF3TEyAaxa5ZhK5aUiepVg9zwsT58Em6rY6b",
  "key43": "3U5z5g2c6JxcC4Qfb2mwGpmfgxNghjntsAtVXMxSe9pLtuggQjc59fx6x4nEBWkEfj9WNUnTsUkhJsZn4yYXLJEW"
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
