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
    "4ZxpqTGQrC2aDEjfgiqzKzFgwFSSxSiEB27zzjPDvRmuu4KCcmu2SLvBvzLruEikCZAyD9EasgoQsRhWprmiVDqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3tSQaHPRgSqFkGFPfWg2mneAuuwDRo1NsiJ8SHGTWD9R8wWVTurzJCthU4yYRxCehPLmgbYnW9NYZLMbM6ykVp",
  "key1": "Nm2jTq7XRFWVrh76tCb2qm3b79ui5cZi8sjLET2gY9N5Yh26SwdsVdLmN6jadw28e4kg2uupwuB9T9XMmGCnvAD",
  "key2": "5DFjvVdkLfTPys6w3cK6tySqRjuYe1GuKhyz8NYwssAjkM693DCvLgFpiRqrm4KUrkP4rPSQcsSMh9kZDxaE8uCb",
  "key3": "4YvU5SH94sK6to16dsxu97RWqSGiS1qyEqaW5s6bMLSim7uvVkLmGfAK38yaYp7uMVcqdsmSG8vwjuZ7B9iJsrBn",
  "key4": "2wFgxJymBQ3qxwkxYgXZmCcGBVgE65VK9dmyu7TYPZxbqRjPJHR84gLHYhpMjA1r818V5visSS4gPSzqepuy25zA",
  "key5": "5Ybt48Z8cRdLtm9RykxmFnQEibaDvW6nGssQM6WoeizdqDffJcAHTdMJrBKXSvBbhrzGPggWWBSqhGp4ST4G5nuk",
  "key6": "5Ec96gkJdv6CWLxm8dDuTXr5SLoCURoVVtRvVrYCaXnCYcfJJXM9oMJ45LDUgQ1cJtvU48Qhy5mvLcjm5b9SXCk6",
  "key7": "qcU43XoLVuwPXLm8YpeNo7wHAFBnRtJcxrBeVda9sjVURLCDy5hMJY3kZa3q8mnkUQLXAdBbqRdryiW7pakp6QW",
  "key8": "4Q8zj3v8PeBx7vPVzhKL3iWapqLnuFCwpkxRXYXFwiJgy4Xg2DYNaNQw4afT8XEoSrPVJuKf5T71ckDJbsQosYbt",
  "key9": "4Jho1AhGGzb23RWdA5K4KizMSEpsR3jXbSqw9F8TqZ8XgZvK7mt6vT6LGh7wk3NPHw57JrYHfdAp7kTKksqmtEio",
  "key10": "4p3MznsMqTQLnhJWELhpPrLvwUPRGoEhuC8DpqBsbMGKG2cYhQgdDTNNApyV9cXb8ga2Jo7aC7okR1KWCNgx4HMP",
  "key11": "45ZQbRnvZkDkTNaRRcekG222jzVWAwZaKe7MGQpFbDsobbxvymti45wWyj5YBejUBG57LFPaiLkidG3d2Tfi7AVJ",
  "key12": "4z1aFoFJ5SSy4xuGcPmrvkgF2CFVLhyCFBAnapp8qyuLURGL8QUq4RRyVzt9SQxy3s57swtBQgoj73cYBfCHqCnx",
  "key13": "ppXk5nNoZaGg7KxMwdNMfSxUmG46QqSoJeGFypSpvvGCNCgx5Y4vbNTC2GBHheMkWRzeEbSthH8BXkuVPRwPoor",
  "key14": "5XnkQ2zhEv3rfHeMjkaxYe3qsZg62KmoNZrGTXU1xZgo7ezzTM9LVt1pW62SXFm4AMX4H5mqJB43QtedXyLJdGrP",
  "key15": "4jCyYM6iuDke5PuzsFCwVw4x9ioZU3S3pCWGVEbzrScdRYeQpd3SLxZuncMXS9hsE7g8CQerectWpUFZt3RBujma",
  "key16": "5GXQNPHcMQ5ysmUkqQ6N7BjXbp4M1byJnFTwh3Wgr9ovHADKZ3b7BTCnHNhq27gLVPkzTnHe3iRD1D78x5764ua2",
  "key17": "44VFkpirQmUQqmHH1nbYqZCLEnb5RF7xAJi5wVCjwwEx5ERUvB1q4gmdeuiecYY3oZ4mCBn5KHyychwSnQxBsi7W",
  "key18": "3H1eQS1EXfdXcLeZTH7DwBphyvRPkC7jmNZc9AdCa4LPXnNvmkGvYjFdvJgBesq2XPDbaygbpQ1bi8JZxpAHdxK4",
  "key19": "5D1c94fwZ6bumXze1owMLZFAEsV26k1owZTKUqPhfH2oB8TeefoKGujNWfNAGo4NqeRJzCwaz1Goy6AJ8dXrQkcd",
  "key20": "5zDLoeUti3uw2f811Fy2WDEAnhaoAKtBWzudu722tQShVwhfvBBHXcVgmctfWytz6Ndu8yJFBcLra63uUySi582V",
  "key21": "5AnkqePDgszRsUxXXXvvPwqCM5LNa7Zs1DxjxNeKZE34UWy3k2kvrDXkUkvzKfbLFpGd1puuJJ4L16WSXQ5sRxv1",
  "key22": "3kgSmB4ecCw6cLVbZuTUbbqZCEqp2YbumYfDy8FrStmfXAja4VDBkwRqiNMUKHhG6fTB4MWmzgPKtPSMABdVHpbV",
  "key23": "95xUhVyZbUhSZo69w3Ti4yaez1jwuXrwq31buc2srqGKoy4nHyg91MXLRw6rFScZfM8ktfLc9qdXnnuY8WNSRWg",
  "key24": "zjPbz1yFpPBMpSHjf6xaAdkj9VG9JLafHxaHvSq2mHXRWHZt4tnB9urzyikxMcrDkCEJWQKZpMi8gHWstLUPWpv",
  "key25": "2cJDmp46H5PLgnZLwaJEZmCkJ4t4U7XLMN4BscVWFYpG461dEpfz7QmDa29gqSsYKmqdToV5C9UhhTi9zuHj84Ft"
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
