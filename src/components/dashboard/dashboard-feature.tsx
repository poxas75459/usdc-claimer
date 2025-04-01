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
    "52qiYibVuNAyvwYPzdDKZ6Zu12h5i6QG3HGGzxtgWWzi23BBLckCRxyGpScsMoDdffVgEXXHUAzkZmXKkcGLANs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EW5gPfquYeEu99ZC2WonhL9j6W9d1EfJHiG9DLLSio6Q5xTrhNvkMDMKwrHJzhzwjRTGX8XQJuvLSKu7HsZwzcb",
  "key1": "R35jAvHKo9yxvAmVZ46FeqFLD91e3ZmXy4vpd8uLSFhfephRBDQWz7GJ9wBzB5DE7HHjkWRgSFTG2jCW6z9mEvN",
  "key2": "4S7P19eY1EdYAskd37niqn2DekHPDT8E5rGsHdoYc29w5osS19mey683457DHQQYw6MBrxFni6KDspbLmKcPxqNy",
  "key3": "41sw1NZWjhsiLqzdfhwRtz2Zcp4vM7YbZjUP8G5mvRoF1YtNswgUEffAUJPLRW1g2CrBr5HFQTrxKtom4myWqsRA",
  "key4": "2rDxH6ycZzDSSnRAehYT1aUppm7LTd7YYNfWynNj3CLZnecVSNvkJRCkTkW45zeW36uHzKBYXocPB565gZFbjNGn",
  "key5": "2xWRbByNRttPFpvKHXKwqaWTHAGmLJnKUEQBnDrkMJ1Z2Gfr3bKfZ63DH3q3NJP7Ns5dFE5jPPVscsMDTELHoYws",
  "key6": "34qHxNGTjHYF3Hgpok7DbeuzL6VSDB2nY8FN56235iagQW3R62SGHLu82ABM4k7Kj8u4gUWsqh6EsonhckVMPS4N",
  "key7": "2vRfS6RydiExvagXjHRuZqVmCBRv4cshC4uyVeTce6YfDxPbhcCepurPezSZmvZ3ZL4DgF76MPU8SZCh3qrX5yx",
  "key8": "3gWrjZkAvwPWMhvdFnfgaUMbA6ro9eBvV6TxcVtH22415bja6Lj2Dtnwidz9aTcZHWSr6V8UzL2fzRyi7wDyWAKR",
  "key9": "3T4AGP7VtFE55XkukS13vKiCYXS7deZ4VSFiJ6Nw5FgDJPVbHstoiHorhKgCuqQ1a9KxcCpuStDdsgcGHd5cuH2J",
  "key10": "2RQxfZvEtpFqorddVYkg7KrnuVeGfFMnJfjs6DsfkUi8oqQDWnpjtAAhy55bHaeTH39fJd8Li5yw2JbKgpgonyrW",
  "key11": "2iouNE4911urMyCgT4o7LTNjBQcLbBABcQ4qHmrG1rhRPUhyoV5GokJ1Zv6qvhf6m2zD7QVP45cuRQEUq9g7HGTm",
  "key12": "ymKtKyAYK7CGrrD775ERhfkAMdTRf1P2sqzHyMbsrMCqdgxs41rmdiHqVqR76cAdEqbFFJ32QXpE3PN6gSP9GSd",
  "key13": "CYHWyrLSDvSUchMSffBLgg6tGqC1EjrxeTqLuPsun6gXgmXyTz1dZQnUeNAAsVgYqRSgNrkcaW2y3bxgaV8VbfK",
  "key14": "3uaKb1N5enqnAFokrr8QejXUuAo6Jo15jqhZcw5bFvwfLNXjfjDANfxR5fe6LdxgKBExguhy1nyP9SKoyEnymxbD",
  "key15": "5ALpsuWybC4ynqnMDo7JNj8Wx5Vi8ydartBzPSYRnE8QRxa9GujHqYqWPRrMwTSrNaN2GR1Bz7yAJfGahQ6uRzvT",
  "key16": "2zjv9MbTVaqcVtig6gvEhKf1ifGvXHgWbkpN86HHNciCUuo4f1EhXzAn2RYvcfycicu62kk7gJktagEPTUYwj5vD",
  "key17": "2GbKkL5mYvnoKQJZiwCRgnFVUfnfnNzhzMocm4XG8MczfeXUwg3XcmEY1Sd2JzCNhboURqmkh76Met6kzPaaTU6k",
  "key18": "fpYvmNxk1jusVUdBRKarxopf6KB9wX5wMFQyM4kCEvpAS99RS76AZuXcPYeZ6xfHAWJhzCegSQRuS6NdG1SYU7p",
  "key19": "i6a83R2nuxNsFNH2wJ7e1YdgVBCP1Gu2vnSSiQ7LzVaXagbeZujmcADkZcCWjcpmUVZ1WA5kLwDbdwdTgbwciCr",
  "key20": "3mDbptnkE2Y8LULR98vkRdeepEhU6qTmSccWqTkQ21teWLTLZBvUsULYvXbHsSs1fjVbez7yr5fwtCFFVp44cWuF",
  "key21": "e8MDjgjTiGMk1ybUbVKr4JGS7jgszcRD11DdcSa1Zg7TZQsw3fiD8xmrNdYQyJ8doa4EVKFSETL7RtHQ9fuvXnF",
  "key22": "3jbgC8mJSeqKRx9KKEBp7twxR6fcy3uCvNuRXCufTaCpLhaq521MbZkumLsBVpSLRXPsstJEjp91XDPw7Rdb6AMi",
  "key23": "j1qsrwx2jSBEbhfGe8GEbC88S7BVKMqmHWmzYNmAcvYLWoDnR5XKXZSZyVuewqQ32S7qCDgXxEhYbjddKV9zZbd",
  "key24": "5hJy23cRVb5kEZv941ZstAMVyUTWD4jEcuqtBkriKDQF65zuHVYsTW8e8iU7NExF9Ps6wxLUya6B74m2jU5odX8h",
  "key25": "21DHQukR8oVfnCsj8TfReNERXMUxQ58fLxwGJSeMQz548YpoATDpEepYgXq6mpDiMc6vcVKH8DRc1E6RfCfqT399",
  "key26": "3K7uJEvtHXFQabUTFSNErUqdNG6eYUFtdpYvUV73sUPHFWvshxMcJ8NKxzm1uu23qo31DRd7n3j3BZdxk2VZmX8R",
  "key27": "3i9R2atLKBMd2ro2VHx8tAAUURRdsSXjv8vQLs4esJJQng5w2b17mbTWKryEpaefEgcMUGtVc21BSjZWfZQHpkjr",
  "key28": "QtBnZvWZCvGbhNSyfptpCWLsNQGaQYKnexbQqKc6pPNTJWwuperYeZWyc8UrurffBLFx4ium14xvrnXipfBTDLw",
  "key29": "3Vuqe33p3dab227YXsZkuvj6A49RKZ26skTLPVkU1CfSjmqz6bX5QauneHRewzrDqXTEwjqc9tUYt4e51BPdePbp",
  "key30": "4EP6BDGBVTuyUvW9xYQY28Lovw5n6M8huZbChKCUdwsbMbJBQHqwGeko92tYTKT7ogctfF8LpKVHkrp8assD9BKV",
  "key31": "26GdTbJH59iLtHW86usP4qXDiz7MY3JBqM3mdnBCY3dhve671GbDS81UMdhCESjoe24iEG21CwedGetwSNjMSDjs",
  "key32": "4cfLBjb7o3S2DiumWmaS9Qt676unfQctgDh6Fxwj6F5RbPAeULgWV35ADufGF1Nq2LywCFxJH9dQdDzqGAZ3mPnM",
  "key33": "JTXnSbcCcsbhe5Qy3H5PBCBt6FVZvm7Zru8NWcHE9BCGiUGKdhf9jPrqHHYCxsHFMa5qUsTygWNWqo9GJZco2LZ",
  "key34": "4UNWqHQZpNZ2LUXRF4QqsN6d6VAVQVNvYoV8KSdELGpiUA4pVfqy89PQeNurJpgzi5ufTwbKpMNXE7KiA4Z9jULR"
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
