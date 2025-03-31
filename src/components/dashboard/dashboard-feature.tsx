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
    "4npaCyMs2UmApatsX3zoy87yj8RqyjV2vVzCpWimNXYhUeo93m11gd1HfnWCqTwTJN4SPqHcuempfZcqc1zQ8CqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54jBCqGDAaq5AWsHyvCvXGCjVFTpm8zBF2EMPHB6LP5oMiHMdRZxZ5LKof8hjbXuAgNmSF3Q4eZ5T59SQd3zrX8F",
  "key1": "333MFJTCWugTxa6WPLup4GjbhdbavbyG524djJsD5ePszEQymTMs3ip5hMSwutdN13ammGVybphZKEuEBG8qcF6t",
  "key2": "HCmWyfGJJRzMqFUyFwo8Xz6PiPMioWQSkY9ikb9vj8wbMqKsXAXhF4PdC4Uee1EMumuvCMqq1d5n8sb7NuxPG89",
  "key3": "2BaNsX1DXQ45uY1px2boDcrvBgH8ghu3sHbRXE6p98av8KCkoLBHTaHMsqCWsFFvPa4hCywQBgz4S26B3EkdgomY",
  "key4": "2PUPZHwLVbWwBkCgF6h9k5MYcKQfXiqET36UT88rkYJebFh9pkEA1Fvw8u9pRBGgRE3xmXRJKfdjijk4Y4oLcfzA",
  "key5": "2n9zNUJGLLSoNJvxKXz2Djv51KwVoAvmg4CR1bDiHf4Zm3XzbJHr9wb3PQfguca3CKFGhspPrKPYTYnjNcGYzgLx",
  "key6": "4KwP83WgHjb65miSmz3eUQrZWsgVu6t38hst2xLypsDwPVWMFmNRkuGv5P2kSoxyqVeLjZ4Wr7cAnEVidZjWU4pj",
  "key7": "4vvy8YE93geccfXVkPrar2b5r82uYv17KcFkLtRxBZ9cf5BYq81uy9tvQxnYYVQqoU59xLAcH1emT22oiSgUSjG7",
  "key8": "2K6bTz7aVWXrZDxwaBXmZkZX4ETwkdPsSG8EDXa4qKMey6xYiUkWHHUARqUBuYPx3A3AHnCkcfe9AZ5KjVqCdG6s",
  "key9": "46qogeknnTUji6R43C27YDbfh96gXhnmdSbPr8zWkBhr1qKiB4N5AW4W1D2ek56n8NmrghTc5JDG6jNPfaEo1rMU",
  "key10": "5AYqYMxx2u3J4JhgP2kvALwQticQgKNAzu1CcBQB1VLZzMNVEcNEAH5ZVwkq64zgZZDTyBTTYoYrWPyVeYKHea2f",
  "key11": "3TjfzfFxTUAUXzEZs4nLNNeVNMuLUGveyaaRBRSb9jy6spmDbDmZoUwQvaEE6Adzf8UNb24WpJ4iwLeD2QBCac7h",
  "key12": "5UjFkB3VQWYEKnnaCGFwQSu7pkfisfBtsMDTxrkAJuEydripaYWTHb8KrwTZgFgpebXY8AqcKSkndF8RB3i7tLYj",
  "key13": "26mDAxEMijJ3pjfMNeqx3UnwAaYFrzKBiTMSamRbNRTaUcPEvkd5DUvLV41X9r1rTq3TjMpkjPBYVCmu1Z4kzDDY",
  "key14": "2qiJ4uP3JGJjxbgaCusyZf8LmDadmzbqv2M6AgWdbTDUYLNJxYv33n4bFC2jyBR5uTAjAaJ73Uk2meYg8YyyNmTz",
  "key15": "5DtbfrWcyctVpk9tkWFcSeGjhSfqk6zSpEha8vJdJzoDWYDAGL991ARf8BaSwYh2GzD6XLhTipqcesrah2c9WbKW",
  "key16": "3b4B6TkwpkK2vrRcQCDGEatW9biNG1WhSUGCWkaGG84PSrXpafKWmeKUbTYLAA7M1Py1N8jzrEzjKLgVdg2NaFGB",
  "key17": "2kH5zkYrASquJ3TtRCcNvy2qctqujzS3QFwvyMjMynLfJ4yEfYgE8UBvRy5zGpkd55Qxzcaj7ELoN7272h3bpfUs",
  "key18": "4Vg2NyfT6856EaKd9DwHKYjiyk7FUkPy2qANPwmYbGCNKVwdE9zoCSe4Dt1gVifD97Y3Yb7MFF19RKsPdsaTQtfH",
  "key19": "5cBgdMmq5P9yy8fTkVKoDt4CNPRSkETrR5Frjh1C2CkejbMf8GLfYwSKiqR1LPGFSgC8nUzgz5f6a8vT5s6zDHpQ",
  "key20": "jVVeL1UV3Ko3MBmdyowi5snkyC1RzwxRKJGy3goLTQ5QV9snbP9vPPY3dHHcEj3h97XXLxSwYmDVbp7KwaYYP9r",
  "key21": "5VbUDFfsrfs8wkcqcP4eTmiZ436Brapq5s2QeWJ2FFADm64D8KEKnZZqt5sdqctfdUwvz9mdsKCjAuGLdRiMekTN",
  "key22": "DXDLV3P2x1U4H4TgAtxx1SAy7RwsYZciRsX8eH62BMnWD3WteatP4XrqmetrCdhT9VGH5GrNYU4JhUuToVgJwUk",
  "key23": "21cye1mA4CiWRKxSUYu3Ry4DQNRYZc2Ek2XN4NXNRR88Xx6YhpzswoZdhtysUL1jbZ6F9tBoi74WkvkCs1QgfUUT",
  "key24": "3jQkeySrjiYfgwDjHSHBChhumd28zeTFNztrSStNxeeqzUQXE14THx4pfa8MbbwJdXnJ4phQBSz6BexSBJsCTQyM",
  "key25": "3Bt6mkAaWnTTQZPYeCxL26Q66X4FpVvpBb27xERg83pVZgpDpfVLHvx8WDx35Y3J3dzLzqV9FGzzT7tDoWHokz62",
  "key26": "5dUapJCJk2PfiVv2HN2FkxBVNgYDK9rEk9Bcb2nFbtJqqUDxhGuN1Zi1Rfh5tGtRGQZEspc8cBS89JRWsoXQ1boq",
  "key27": "34qiFjv5mbhhJtzJsmLSMAcV77651kgqSLT1utxSzFJVAfyC3guDtZMekE4zvbhgjQiGoUcMjA4JGZNVeMoPJmdM",
  "key28": "5BrCdXd7yDcFHtkQthtZhA6y8M33pcbFJATkVGWTZPY28KzzcRJi8AJ5b9xZadfZk5zWsSC7nG7fcm3yc3QFH1CC",
  "key29": "5qRv9CJLrN94tPN9UkvC4yQ9Buv22JpnEJUyZ637LwsZ1fUzAzom45KVhMfQ8hYUSpqiqtnWkbrPMDZ66U1yHpHS",
  "key30": "MsX9BT5VLo71A65APFBngfQBinSc7MidQUQWxo25rpjVG2D2nmaHgBAdB9Arjh6ajrAygabWvAkkuTYjkJYsuub",
  "key31": "33kxHztL8EJWuEhvR3TBBGb1mvgmSypAMUjGx6GWMGFRVAyA8kAEYidmYmD3MJKtagRwnfdJ2d2xd6f8D5StU2hd",
  "key32": "2CcQZCcrhd3QR52cuuwR6oxwwHEut23sb8Ak1Wc6rb1dhY9Fy19j6c4HdtDibaAdcSp6HFYQVdjZhD7DzfRC8TjQ",
  "key33": "2PqYTb2BjJ9xyR6j1nwDUxc8E3gNursniPfauSXrmTFvSFK6b9dQSS95oxGVJB6WoXEZ9o4zzMeSMGPVBs55Ftqh",
  "key34": "5Pa9sQdcmaxHCgi8FAu55XaY1QDbRv43ifAugej1zWFuMH7L55BucEPD8nYF9kkUDRwSrnbFmAJeNHm5t1Kq3T1W",
  "key35": "3sVKcnmhz7L3hNannxHTVSe9KcyaDfJzPQ6umy7qesokFgHmrCJjm68x6xsjN2xyc9G4QDUfBiFGw3mSjSYDJ8pb"
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
