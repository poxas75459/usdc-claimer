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
    "3Mfd27wzFduGnP7zxsYi3JQMa3THezyjvBVbhUNvLT5FhVoQTxAstaG3xv5iNzTvZFMfNons2kMZZD2PjD3ePNJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WSSgDfAvdUMibNNZXcR3TQTaXhjc4Y8Kz4w8nfGH6ej3jSYTW1HHXY7tgp7odwNqiXcXGykx4ugHiKNw4T8kLAX",
  "key1": "UjD9gi9jPGmQsdrD9kcGpsXuWxBZH5amVgu841zY3Pb73FaNvQc2F6QD6hRtiadR1U7SZ8jY1mX2FVXXXsD99qy",
  "key2": "uDoubcoYYTnaWnHZAkxEH4jRypYoWUmBSfNSfYcuxok8v5ZJfREuPTR1EYrPEFS53Gz5QzpGYpwJY5ee3n5Bn64",
  "key3": "G9uNzEntax9i3XBj5wAC39XLDsvM4Md18XZPbm5o87Ys8Hd3Us8qaQffi5oFUqajWw4M862g6c2rf24GRm3JiGK",
  "key4": "3jCdnpZrh1o2SsJKVc1oCFZCtY8Y7G8dUNCanzgweN1s7PNumQBWteAa1NvxAidCfWZRJzeo5KzHoUHSqgHr68Kb",
  "key5": "329NN7csfjGanh4xZip8DCVhx4XmoDoZhC6auCcRKJ7ersVm7Vfry5bMm1JajbBqqUQLMfkVc6brkwDHJknoWxUB",
  "key6": "486qQHVqQaicyriuKQPjE2nNRt6J2b6vyF5en5rnH4EdXV5Wwk729Tk2dG6careR1WRQX7PCXre8xHbwJaiqoYEd",
  "key7": "4ufCwd5EY2i2HZwvCZc1KJ89jZxmUib4JCpZjDTprdEMFuGPFkr99ZZtiREQz886VyjkpjeMV9NLzxhbhjkWCPmg",
  "key8": "3TbgMLf6oJ6f1qgsjZLem2Wq6C8P8iExu3E4dvqNT5gGkAdPE5d4XyidTGZLgs2fHUgmgDe895ydRtrPx7FJSdFU",
  "key9": "4QQSa1h9Eb8gxYtRkRZwHnu4U5pNjDb7xzS8W83DkXGiRg5trqipj48H5YicEachok2mRoZJS65VTsQMJs3oc1LB",
  "key10": "3fCdmub9RbJsrsrF7UAZxvULZZuGFvaGF3bCSyxQRyDHNLiSVEhPz5kG8wquXGCvwk54JG6azun2Mbk3iTQvBHFJ",
  "key11": "2N6QAmrvWvFJe5FotTTp8tkorDCj2Xgb9Dg9JCFMrvGA6xkM3AGwQvbZfg14pSvKXtE1gq4FNb5yhRuXfq2vaDtW",
  "key12": "5kh8gQrjhoZqgLcgb21gmwqLkzN7mkAYx9KVRLmDPyUPhVh8Cn5QRuBSWWTXA4j34uzGsfrba85WiAobnkriAVfv",
  "key13": "3dSqkij4Bjo1MLHmTKPKKwYH2yYf7XyFgNs3pdi7nvhPWBzicYo75s9rSv4p69NQh8N49kuwL2ymcPfPUd8rNgh5",
  "key14": "4T7HBQtmwcHksjv63SAPBeAoXSPknBcoxQZacK9qurDu9Gp3rz8vc4Gtp1XK14tHmjYScj36FtytQFT4CWotZ4jP",
  "key15": "bsd8nFYznCMhzpzzT9qp2pqGJj7ByJshBeBTHKwnzUrF2kqWzeogzpTPD9YqZ4p6VkpHcqwcVSRfvAAbES2msUH",
  "key16": "A8ummLoAW8LV4xK5yCakVEn76FKwPugkFyQhjJxK6B8dcTDhJMJHzyfrxjfPxnkbfCWwsUaLNQhpmgEgNq6Q5JY",
  "key17": "3vJdSJsSP9Mat11nY6eh1S8o6GCEwhcTuSyQkmY4ox8TF8pVsk2cXhfmWUF4ku8W9G9QQgEsiek4L78QmNxkSG1M",
  "key18": "Eq9x2Y6tJVy89SzaXG9Zh3aNhPvM31T7qXmNRV7FscuAVqY7YnkF71WJgfL1aSz8RK6z9U6tFkE28UmwBm5sfx4",
  "key19": "5bjs3XtDDdcyBaJh8WznUKhC6zmCRQ3N96yaZmhszWsCDGjx9C6Q5tVqp6inKrtTcPHYmN17qr4zEGUowq5SC7i9",
  "key20": "4jkvN9qGFYwawfoSdph5vx3xL4TnkX9S8N512Ehmg4tW53YPSNn1bryRwPkVhvoyjfeSBa3ocYFqmZAGCPb9aa2J",
  "key21": "3iQG8McipfU62XzutZMLf6EQeBZ21iYHfCtuhE2n3jHLi3TH79LNMQDKaHyKnWgUnwUMPebjtpdkcUSP8pxf7wMe",
  "key22": "4tU1tiCkviHh4XXtYw96eQo5xzXbwZvpg5tgzZELYYq4dFKmFyLomFyzB8SV2AE8dGQYMVB5ui7vsLFph8ZxUfFy",
  "key23": "3cgHKfdYL3s4QKYQNeQWRCe2aWVfWVx3b4QEWdHzGHw5WbznAEYsog2xZMpprquchqpqx9f6VZrMXVCFnQxVi8Nv",
  "key24": "46hTVMo8biFzVxBoeNCjcwTatb2wpAgZxJUJKfJrQEUbD4NgufgyJymM9nS9oTFDRWWefYbC4rjqo6bcpsXhjTMv",
  "key25": "3KcRpsLrmJYUfxhJv267iW3zR7ypgRBZ7nrrx7B42YLmM9ThZydmX8D6EDfdD3U1jzBA14vbRjFcgDacdnrsWowF",
  "key26": "2MVEGdqjMqZYCGF2w3yqZ2u2bCtcSSTp5TB5qiMxENTyLBehLge1EL5JP7dZnBNciHMwkvAX6PkvbScCyoHW9EVp",
  "key27": "5A3AGNQVrxyyiiamkeWerzwciHTqQvqPPPGTQzJGjiWYGZZozmXFqwhGWjbfe2TwpvZEQgEbUM67jHxkoBvNGZrT",
  "key28": "4GJ3esqQjAeKTyJcBhonZen9kXGvpY6y9XJbX17qRYjEretGaUPmBGfTtYv2zm68w6Pfo6D9kq6sF2qwmxEFXSt8",
  "key29": "xpTh5fmhsS1PbySXDYFP4f7fXPVyLTj2oEpqjuqYaXcJvgDejDMBhNgo5pXMpM1s3xvs3bAgJ7QSSyCTQhJbgBj",
  "key30": "2nxDW4GD8h6c8QBoGqajpZMEfVzXu1oEbZ1esVaN8pGVqBwKCRynCcvD45tQ7w4VSrnrJP5yXvGmjQaTudXAVdKU",
  "key31": "59ERbaQyRLuetYvG5YuGwaebikSDtV8VWbisU2prnhFkHvHuMgBSHtuSSPqbR5C1ZcegdQhv5ZYeJqKiBTpR4isT",
  "key32": "3uvewjqMSzV4Bv7rYbgjzR22PKkXZHoRrm4QtfWzKXgUNDRfw1Fjb8HsxVqgXY3ZcoUz3JnBPFTpYhUnpyA7TeFC"
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
