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
    "2tvv43yLDcEAaCVVhqrg43oSabwhw5LziPhToGcpuDSDEqQciqWqdedznBaPrp4UupFkP3CjbCjVcotusLaA17nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WH7Kx4pQBwQvhR8AdPCQ7TgtEhr8TGJK5kQe9hKV8eLwcZPo6nyj3Jed8S3maDpphdi5SUo5koUnQHRFi1KBh1B",
  "key1": "34S6XLBphGribj6u97DQ7v3tMNAmDKNUAAzHGbmea9zvCTrBP6raBXpVj4PJZG8Fb2w9kJAKWLgksMStY5tra9hX",
  "key2": "5Z6Tuvz8Pxz3NQSvjNMx8RhDL66yVpv3QhY8iTGE9wZTTwwaCDZ7tEWq9n2waEbusAGsQqRx7dzcMYT6LvwLxQy1",
  "key3": "3abm3FV4VgEHHvd93TF8mkfgwkopA2wp9b8HiW5y84Uqt2Y2ksUpgusBKc71kxByXNxhYQB5H1CfcuRkrHvyRBMx",
  "key4": "22BX7Vj1qoLoK7hFzx3DCEFcEkQ24tCaCw1pnMbHx3gAqF28sdVvKd5dwKAvGG2aRdzZdZzraGZEV7buqqZwj7md",
  "key5": "YUK2SLwJAt8B2XtqYVSy3y4tSRNCGGpMrWop4HhtY5mAeG4bYUAxXx6fdZd2ocwDsa73YX1rzob9tqAZfL7qbi1",
  "key6": "5DYCAqtF3a9pr5MSSmsxGzyTVu6fZQBivUMkFKsgwCUXm5nixV1zgai9mFZAmwVfX1DvbkBgjuZuVBCtFHKp3PQZ",
  "key7": "5eySZf3wrbMsz2rc1XeEoGWNc6hXaXSdHjwsh2z1AVhR8JcK8EpoWd3mFXVcSzdp22juwhVoPTNXsXb1Mk6LDEnu",
  "key8": "5Ho6iUrAyimVX3ixZrwXNamF1mHQmJSqmSMM2ZnojiuaKpLAguZ4rRiwM1T9rAdLiebW1oSBHzuDFwefj56odsnW",
  "key9": "52CUs6eVJ7Jj8krXrE782LkomaaUEpZeZQ8CUTzeSCvmRpkrh9FVU1iXxRcrRL4rBATs4majZpKV8iyFizzDwtuR",
  "key10": "5SamS5k6Xf8Z6hxWh5GyZ9LD3eSt5VXzu4eN5eNkwdwmgJZNzyq6ymWo18nBCm2ozBUdKaLSv8Pmwjk6P4HV7GU3",
  "key11": "295mogiVeWPdKnjcGbfEQZKN87UGF6ShTc3RBBoFEAbLKRVWP6mE9gzUFeggxkY7SGmmR5j839rpwgUREQkwM3Pp",
  "key12": "349Vp7hqGsGj6WZYAVPgZLKGPuuPoVngj8gKgvEPdaYMsuU1ue5en2TBSckfiVwtWp49NDBC2k7yNMm2PGS68ZRf",
  "key13": "X5KuUADpavPiEvEwBxLKhvvfSrHRv5sxJmM738xG4XJWF7JPnr2coxWBwEba6HsgsPcug2fmot6psFJosj69FpE",
  "key14": "3HjuPwBGQBnk29Tsioi18bJSqtGKGJumz2pNYiiGcTs2xtPZaTqzDbqKaaoJH1TZihBFCtW68vd6wxo6d4H1dMCQ",
  "key15": "5J4HutCMseu4F6h4oWH794hnjnG5gVhuBkLde2oF5XRDJQxU1sVmL4Euap9eKchAjL1YYD5cs8bA9dj3xYSeMRJf",
  "key16": "5ZoT5YZu9wJQB8cFxFWMQRGRmm1F9B1EGjHKpTGD2eJGYFVfh3EzsCqwL13fqbQKeipMt28KX92K3Qzj5FHhEvB5",
  "key17": "3ySbYcCNcsWVdZLPRGM3nnnE3EiackzT6ULgHusvwy4hUH4agXy7apfpD3p8jov4zj7yqqUpqcsfCR1e7xewPkgJ",
  "key18": "4VYmmKaye8szqZpAQnBpRyAVLPJHFhUNt1acvcEoNBntGKyGXmUXnPoDyADH9zjGcEarxwX3KdMYf47cGp414BNT",
  "key19": "3TC1dS1RcVT1rP3YHqa4DkBBYNnqgcSXbrFNz9k1Fkkic3B5aezRKgU8qrw8jmmNVSU5SBocagcoDZiMx9XYQLrq",
  "key20": "5fJbrNSubqghpC54dTT934fd1LejvLwsWSM3N6tdjjL1wykRnhuCHamunt2xrKkWKCd65HQWbCffaKDVicMUx7Ws",
  "key21": "2Z46hQcYdq82WcE4yqu8FBZpvEJRWrL4VxegbWr8aa3RjkDDX8sh2fD2uQo2jRPJV85AT5rTVbAWXuYVKhUnc7Ub",
  "key22": "chg5NqjPuUJ3K2tSCMtNQZFLkvWTKjvPohWu48qoBy3q3kVVH3ueqFxf2UgasLVqP7Kj2Dpyikq8sQtswfTKGFp",
  "key23": "2UxWiQhS5NYtF47W9KQSU5XDaaLyCZW9dBUBvGGwqWeHWxY3KHQPafLfxoMmQmg2FTcwJGVEPzuUWHcJ1DRp8J9e",
  "key24": "5quNfKtZKFNenTrB4fPZans6YUg8ZuGvgNp5SqEBuAC4sVt8arxveb92gSnLYe4nUzhmBjssqvGpHYgLk2ZSmnsG",
  "key25": "3ZytU5WRSQ6nMpgpEiFDq75ZJKXipDxdPdy8Zfv4P11ukrB13Mqv7Loi7EaXs5hoMBQEqNYQtHn42Fsbb7umFsQE",
  "key26": "3viUwEY4L2wErtm7uj8XtCyXjHff1HUZHNnRJUKnd7v9757wT1f2SqyZ7S9W8FyaknSFgxBGmW8oAU9exGihW8E7",
  "key27": "4zsiUMs3BbLUoH4xoqc65jBmjBtKxQuvF4TqKuoCVNEFgXmEr6ekpadopqA5CVeDydn83gQdX5sRm7tfnZZT7J5v",
  "key28": "2RaiVxkkLt2bhtDVXnx5segdnybU1drjLLUcABZphmjMXLajnypcYGmZaz1dx9iYES8BeXtNDG62BPKRoEuT7SMf",
  "key29": "4STb9JxqYYfhARjEWJS9QAfy1qgNe6FTayrPra2oGo2npknusqYBsov3Ya12x1c3JEwvSu7PMBRKnJxxNmPS3f2R",
  "key30": "HcS1Q3hnWAG9u6NvfHUn9muP4UvQ1CVkJSmTckAKpGkifAGAAsZwZn6yZW3pQF1ikPmUHCurxpQmC4oxFHXEeMd",
  "key31": "4PYwZdEB518rKz9ALbyR9GkUrkXKo7BV5fT36WvsLBGGeoYCAeJTEFx3ThNy8tfgWn7PRkM4VVLZXmAq4SpKWsZj",
  "key32": "5AoyqhQobnag7qehMt9HBKuhNkZL67usQXkqS9EghXQ5WbPfUiUxWCtesjvYioE4cBf6FJXM2hQ8NAZnreHdXPMT",
  "key33": "4bf3dQjx2kVNAwR9FG91pXCE5YGzmoMtA3G3bj6yoJ1WbTDCkpUdWugsZ45B2shyqRAU18xcX9CfuXkBxG7QmvLU",
  "key34": "RLhw2Fzi3ha4wgCnUho4ea8NMp71QndmqSSd8yxEsJA8GGu95pBotpgEbqGGWKuY5nczt9Ga3FjGj7kHz6Vz6M3",
  "key35": "66sJd53sdeXjKVQX6E3h8sKpAuJ3J4NcBxjobuF9A8QfqUeEVY5GrjkvMTjxqsCnWYNsoqGpGz1LSvwetB7x6hcy"
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
