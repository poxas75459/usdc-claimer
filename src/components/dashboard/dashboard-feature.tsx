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
    "4b8MhJWr1HVkYebpnZLuvMjeVLWY3k4ivGr44Gien75MHT8nDsAX216AB4RpTzXzHdHKQYmdMf2PE4zPUZzMHeoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eeE3VJPGo3xHhvpKJUM83fm3mriXmdzAfe1YNrfRdcJxtMWC6scAwhMfycDrJYfXm4ntQLNHaYxNaComvGdjVQF",
  "key1": "5cjQLLWgEPH7iGTuxa29duYmHjN15sZktid3S3Ve88J9rTa5S8JpdhBgZx2oKPECU3gqgaFH26Aoo4yWjsXXcDRG",
  "key2": "54jRYREVdw3PqCUEqVFmYyPuPciXPkcauURvvnWTJnzkqKeHxezvkaD5ThPTVESDpkRr6G7UNHg4L4ASVsfAUu7E",
  "key3": "4kZp3vaNLkTHrazsicQEeoV6fDjzbYkjcHSySBrCh19hz1BM1MrMHGMK9FJYb449gpVSPD9qj4i8iW4jAYhbeRTH",
  "key4": "4T84GpZyyXdiRD3tYm6iLxPXfr7oaKd1J18LAg336MDQgV9rLzfn5NstEG4wB5tiaYwdKYbric1aaMWF8grrqAdY",
  "key5": "2NnkFFmCWeTJfvbeGqAVT21hzwWx7rXA1rHJNJthqm1NtXmgN3XorEMH7ibjA5vC2PugPG54bo6zUmLcn9LgG66x",
  "key6": "3LtU7PVdEhbyMaico6MnK4XSmcvddJBcoeu2ttnC2uY8MTE5ALZNBaXCBDssgxkAiECoLtW9HWQ8zXAktBf74E4",
  "key7": "5wvjVnuEjZh4UPKtkTqRVw2gsq5ak6WnsSVQQw2xxQjBCqqQaTYnGoWQU8CpwJb98eVFfyJCajsfZy71igHcBRv5",
  "key8": "c7MU1AoVWyM7fYrqQ7mquJJKFgkKP2k6J5SS9wAtkuFRqe4Xz1WToi1ygCGqKjhWkQWKnRe8EvknBwrernA11Jg",
  "key9": "bqdVgFt4s6nZdzL1H82QJNxYx1xf5c8KDaWfFZvE8ypvAwXEV3MGDDjEUKe7DD9iTt4vSdJW4ifK38tKcTEqxbE",
  "key10": "4EKDysFmysKRrf1AJVXSzyqjDyhiKYAAgJfk3veHLhCYzxc6z3iKSCryni3qEynNJ5pkQhiMG3MmsHSuT69XfiJd",
  "key11": "4BFoCTdfWWa3BM5UAFbLCcZUMvsuch1zJt7h1t2PwdkdHG627Ujyu6pK5ZiLJDQ3U6YvGrs31YJiUXZ3aop6Q2Ce",
  "key12": "XSFTAbkEqtstv913a9beGTQgdNGKjnDQjjqLLwTPEBrHr82gU1EnYnfPFw5aiN3gSBnCygmPPRgRRgPBaVWnC5t",
  "key13": "38iTBpvgJNiWQV2z7Ljrc9hhgP2DKUpwWkesUGm6GgDWV9ryzJMpP7VrWzG1wL1KRvbAPQWPz1YYuhiKm7PqSncY",
  "key14": "3qDfuzydupsub1LcppVQERFb3boeAJQUJESTUNcbaexnZqxGP1YNFBkv6GmtQpLLfjsZbaEp9AFcuSEo1hbhBnuu",
  "key15": "QDUWQBWq57gDDPjcuz74ZCiZrjMskVehtdoQXWeCcXGBJ6jEt9hXF5jQgmwxR1yZkRBtTTXyQwR5tsdV7fLAh3B",
  "key16": "5kdFt3bi4qWULB1fpUL2Bq4VLLWwEYn92JdryH4eAhfyWTeTqizFrW6LWhSY8PZGR8rBEh9CBFFyt2TfHALBRA2M",
  "key17": "4nZ12s5EgiZdj2Ytf1LiQhMKzZmVP5YjWweqMUfy3Ni57tWvzasB9qrGkDxVLHuiPosTHo59aMuvwJ4B6jwrHuQT",
  "key18": "4gbqyMibGVsbMeboQuaPFxbBp6BChgksRX1AxUcVSuzKq1BYs1t5op4gpmMSQdHFnKztCsKvWfMKghcCNyzPYnck",
  "key19": "2VqnYS2Php5MfKv8ViGLdWbqnhmT1t2s9AkFaRK5WpgZhXwNv5XQbWWtod5pWkxqLYDzJSJboqowhCRMcCx2XorC",
  "key20": "5okupbvqTp6qVd6a8snYVXxi5X2VX98phYuSxFvXxrgBjqiyLq6y15ggM8p5EpVppSTabgwjLZCPAohAJY2YUdYg",
  "key21": "3Cru32nrs4b3YwGg5yaeT9dUwxGejJQFbpeZdBYiuJMpbPxRNCgVaPV7D58ZXQxvtVXFSkLXpTdXEYua1udnR8f5",
  "key22": "5KUwSSycPMz93AaoUhHhyrqGcbpBg57z3zhPkvfR6eyatWM4ypBsKCxzggjwGePdM22V8gUmcdyZ1Ar16JjBtiSw",
  "key23": "3BtCDhwY7G6n8BnvdxbgDtrnsyPL2QyvjGxZpG8R9o8yr56FeY21Je2XWCXR8MPSgFCkjxn6uJuFYsgZDSERyF1u",
  "key24": "3JPXYcSJEaENq8JVH1jZhWZWgY43Vmucz3zas7FpTVnPa4yKR7FGYFGtzX5f5fZcXmFbq9LYw68Kau6RQrEQEb1E",
  "key25": "4nacm3i2SUkCvtS87cir5LnpVA6BHcwHDEx1aEZhvGDBcpCiEgcdRpwWzcYrx2L1Saij9pAzF4Px6X3aRW6EGTVU",
  "key26": "46QDfFidUKYTgFygtpMJKavDiA9fMuw4JPb322L8njSGhzQmTYCDjG2Jjgof5NkiKSRqH3W23B9o2JuCrxgdyZgL",
  "key27": "4DBkFSU1KF6MfvpqigEAuA3WsDEFWqDRKkDzgSNfitYpk5hRhnkBet6SFsQXuY96xxpmSy1bDoCTZ28SAFUKbXUo",
  "key28": "9J6faWyZb277jcGzxECo8fFcz1TybNijAmsHRfv7t5XqNDrn8bQehR3vz1UGK7jqfiVXF2yUPAw3iGvyfzSVQSW",
  "key29": "5k4qsU7oi9H74ErN9o7qiM7udXkrkZzEFwpdrmFv1mQFHgw9hEPgcfAsb1nkYypW7xoSPRKT9h57SxFrXuH3k1ME",
  "key30": "63XbMWufrkbYAWA4ELwKqNMNaoCuzkSa4EwggJU673pjb6ro6KerxPEGzGd4jvGd4pANV2JUb5rM1WfR7SdtyyPp",
  "key31": "2GQwQ2rHpUMuqB36W2H3Uc4CUtFH4w3FUc2jATeo6hUYDVcNJo1T6AGotbKtGs7HswoQWKGPyttkBpZGyVxADwcx",
  "key32": "55DVwFhiL3atxUajwjgL7Y6sfLNJqru4YQMa94BphfZEnkC3fzFo9fyAbkwBVSr5pyfVzuomNYErzzaqvVfm5mh6",
  "key33": "3FpYCuvziujf2reZ3oYDyKHqaxJgZS3pw63iymomrKXLMFF8DpSEqd5iA3T1thC9fLX87FqpqvRvmcUT2owKESCm",
  "key34": "232YoSfGuHBpP2NwUwHrRnHi2MwLk9Z6eqiyXu1uV7DfPESi5x7Gv4zGziAkDdBokR3f3nbj9HbdFRr7undgLKzH",
  "key35": "tV7kxRxHRuTdCCTzh2cFpEJGigvBa2a44zTRGTK12w79SRAhtNbUuxveG3mAtjst2Ath8iR3JKUdbCE7NUcKEGY",
  "key36": "5uNYYvS5neDijwugg6TxZjyENSBouj8FgKKhH3ncQA7uFMM19RFAKjVP1RSHPGxtXsH7pfVuAdMQucVJsYBpAXrK",
  "key37": "4x5UrzxbLUEbW4SMqtGBkpVdGSv3Y6af9VFrN4ceWcjekEcmmAy1mePcPGFm1TcfYuKCYPYe3rtpmCtPN2tAhzXk"
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
